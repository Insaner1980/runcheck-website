import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { checkPhoneSupport } from "./check-phone-support.mjs";
import { checkPhoneSupportSources, checkSource } from "./check-phone-support-sources.mjs";
import { OFFICIAL_CATALOGS, PRODUCTS, diffDatasets, exclusionReason, fetchRawProducts, fetchResource, formatUpdateReport, hashPayload, mapWithConcurrency, normalizeRawProducts, validateOfficialCatalog, validateRawProduct } from "./phone-support/import.mjs";
import { validateDataset } from "./phone-support/validate.mjs";
import { normalizePhoneQuery } from "../src/data/phoneSupport/search.mjs";
import { androidSupportPresentation } from "../src/data/phoneSupport/support.mjs";
import { loadOfficialCatalogs, loadOfficialDocuments, loadRawProducts, officialFiles, repositoryRoot, runUpdate } from "./update-phone-support.mjs";

const now = "2026-08-30";
const rawProducts = await loadRawProducts();
const official = await loadOfficialDocuments();
const officialCatalogs = await loadOfficialCatalogs();
const normalized = normalizeRawProducts(rawProducts, official, { now });
const dataset = normalized.dataset;
const expanded = normalizeRawProducts(rawProducts, official, { officialCatalogs, now });
const clone = (value) => structuredClone(value);
const phone = (data, id) => data.records.find((record) => record.id === id);
const raw = (product) => rawProducts.find((source) => source.product === product);
const refreshHash = (source) => { source.sha256 = hashPayload(source.body); return source; };
const response = (body, status = 200, contentType = "application/json") => new Response(typeof body === "string" ? body : JSON.stringify(body), { status, headers: { "content-type": contentType } });
const fakeApi = (sources = rawProducts, catalogs = officialCatalogs) => async (url) => {
  if (String(url).includes("trust.mi.com")) {
    const source = catalogs.find(({ catalog }) => catalog === "xiaomi-family");
    return response({ count: source.body.count, data: source.body.records });
  }
  if (String(url).includes("oppo.com")) {
    const source = catalogs.find(({ catalog }) => catalog === "oppo-uk");
    return response(`<script>const producList = ${JSON.stringify(source.body.records.map(({ status, name, endDate }) => ({ status: String(status), name, date: endDate.replaceAll("-", "/") })))};</script>`, 200, "text/html");
  }
  if (String(url).includes("/fi/support/bulletin/")) {
    const source = catalogs.find(({ catalog }) => catalog === "honor-fi-security");
    const headings = {
      monthly: "Mallit, joille julkaistaan tietoturvapäivityksiä kuukausittain¹",
      bimonthly: "Mallit, joille julkaistaan tietoturvapäivityksiä kahden kuukauden välein¹",
      quarterly: "Mallit, joille julkaistaan tietoturvapäivityksiä neljännesvuosittain¹",
    };
    const html = Object.entries(headings).map(([cadence, heading]) => `<p class="des-tit">${heading}</p><p class="des">HONOR Test-sarja: ${source.body.records.filter((record) => record.cadence === cadence).map(({ name }) => name).join(", ")}</p>`).join("") + "<p>¹Mallit voivat muuttua.</p>";
    return response(html, 200, "text/html");
  }
  if (String(url).includes("/global/tech/security-update/")) {
    const source = catalogs.find(({ catalog }) => catalog === "honor-aer");
    const html = source.body.records.map((record) => `<div class="list-text"><div class="text1">${record.name}</div><div class="text2">${record.securityMinimum.slice(5)}/${record.securityMinimum.slice(0, 4)} at least（${record.securityRegions.join(", ")}）</div><div class="text3">Shipped version: ${record.shippedVersion}<br>Future version: ${record.futureVersions.join("&")} at least（${record.osRegions.join(", ")}）</div><div class="text4">More details</div></div>`).join("");
    return response(html, 200, "text/html");
  }
  const product = String(url).split("/").at(-1);
  const source = sources.find((item) => item.product === product);
  assert.ok(source, `Unexpected network request: ${url}`);
  return response(source.body);
};

async function workspace(t, { existing = false, documents = official } = {}) {
  const root = await mkdtemp(path.join(tmpdir(), "runcheck-phone-support-"));
  t.after(async () => {
    const resolved = path.resolve(root);
    assert.equal(path.dirname(resolved), path.resolve(tmpdir()));
    assert.ok(path.basename(resolved).startsWith("runcheck-phone-support-"));
    await rm(resolved, { recursive: true, force: true });
  });
  await mkdir(path.join(root, "data/phone-support/official"), { recursive: true });
  for (const [index, file] of officialFiles.entries()) {
    await writeFile(path.join(root, "data/phone-support/official", file), JSON.stringify(documents[index]));
  }
  await writeFile(path.join(root, "data/phone-support/NOTICE.txt"), await readFile(path.join(repositoryRoot, "data/phone-support/NOTICE.txt")));
  if (existing) {
    await mkdir(path.join(root, "src/data/phoneSupport"), { recursive: true });
    await writeFile(path.join(root, "src/data/phoneSupport/catalog.json"), JSON.stringify(dataset));
  }
  return root;
}

async function fileHashes(root, folder = root) {
  const result = {};
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const file = path.join(folder, entry.name);
    if (entry.isDirectory()) Object.assign(result, await fileHashes(root, file));
    else result[path.relative(root, file)] = createHash("sha256").update(await readFile(file)).digest("hex");
  }
  return result;
}

async function seedAcceptedOfficialCatalogs(root, catalogs = officialCatalogs) {
  await mkdir(path.join(root, "data/phone-support/raw"), { recursive: true });
  for (const snapshot of catalogs) {
    await writeFile(path.join(root, "data/phone-support/raw", `${snapshot.catalog}.json`), JSON.stringify(snapshot));
  }
  await mkdir(path.join(root, "src/data/phoneSupport"), { recursive: true });
  await writeFile(path.join(root, "src/data/phoneSupport/catalog.json"), JSON.stringify(expanded.dataset));
}

function withAerRecords(records) {
  const catalogs = clone(officialCatalogs);
  const aer = catalogs.find(({ catalog }) => catalog === "honor-aer");
  aer.body.records = clone(records);
  aer.body.count = aer.body.records.length;
  refreshHash(aer);
  return catalogs;
}

test("the complete committed API snapshots validate and account for every included or excluded record", () => {
  for (const source of rawProducts) assert.equal(validateRawProduct(source), source);
  assert.equal(dataset.brands.length, 6);
  assert.equal(dataset.records.length + normalized.exclusions.length, rawProducts.reduce((total, source) => total + source.body.result.releases.length, 0));
  assert.equal(new Set(dataset.records.map(({ id }) => id)).size, dataset.records.length);
  for (const excluded of normalized.exclusions) assert.equal(phone(dataset, `${excluded.product}-${excluded.cycle}`), undefined);
  for (const id of ["pixel-tablet", "oneplus-pad1", "samsung-mobile-galaxy-note-pro-12.2", "samsung-mobile-galaxy-view", "samsung-mobile-galaxy-view2", "samsung-mobile-gear-sport", "samsung-mobile-z4", "samsung-mobile-ativ-se", "samsung-mobile-galaxy-s5-octa-core", "motorola-mobility-moto-g-pure", "motorola-mobility-moto-g-pure-2021"]) assert.equal(phone(dataset, id), undefined);
  assert.match(phone(dataset, "samsung-mobile-galaxy-s5").model, /SM-G900H/);
  assert.match(phone(dataset, "samsung-mobile-galaxy-s20-fe").model, /2022, South Korea/);
  assert.ok(phone(dataset, "samsung-mobile-galaxy-s20-fe-2020"));
});

test("official registries add eleven consumer-facing brands without old history, tablets or duplicate models", () => {
  for (const snapshot of officialCatalogs) assert.equal(validateOfficialCatalog(snapshot), snapshot);
  assert.equal(expanded.dataset.brands.length, 11);
  assert.equal(expanded.dataset.records.length, 800);
  assert.equal(expanded.dataset.records.filter(({ brandId }) => brandId !== "honor").length, 771);
  assert.deepEqual(validateDataset(expanded.dataset, { now }).counts, {
    fairphone: 7,
    "google-pixel": 38,
    honor: 29,
    motorola: 153,
    oneplus: 9,
    oppo: 36,
    poco: 28,
    redmi: 39,
    samsung: 410,
    "sony-xperia": 24,
    xiaomi: 27,
  });
  assert.ok(expanded.dataset.records.filter(({ brandId }) => ["xiaomi", "redmi", "poco", "oppo"].includes(brandId)).every(({ model }) => !/\bpad\b/i.test(model)));
  assert.equal(new Set(expanded.dataset.records.map(({ model }) => normalizePhoneQuery(model))).size, expanded.dataset.records.length);
  const xiaomi = phone(expanded.dataset, "xiaomi-support-xiaomi-xiaomi-15");
  assert.equal(xiaomi.release.evidenceType, "official-date");
  assert.equal(xiaomi.security.end.value, "2031-03-01");
  assert.equal(xiaomi.os.end.value, null);
  const oppo = phone(expanded.dataset, "oppo-uk-oppo-find-x8-pro");
  assert.equal(oppo.release.value, null);
  assert.equal(oppo.security.end.value, "2030-11-23");
  assert.ok(expanded.exclusions.some(({ product, reason }) => product === "xiaomi-family" && /Tablet/.test(reason)));
  assert.ok(expanded.exclusions.some(({ product, reason }) => product === "oppo-uk" && /more than 12 months/.test(reason)));
  const honor = phone(expanded.dataset, "honor-fi-honor-magic8-pro");
  assert.equal(honor.security.state.value, "active");
  assert.equal(honor.security.state.evidenceType, "official-current-list");
  assert.equal(honor.security.end.value, null);
  assert.equal(honor.cadence.value, "monthly");
  assert.equal(honor.cadence.note, "HONOR's Finland bulletin lists this model for monthly security updates.");
  assert.equal(phone(expanded.dataset, "honor-fi-honor-600-pro").cadence.note, "HONOR's Finland bulletin lists this model for security updates every two months.");
  assert.equal(phone(expanded.dataset, "honor-fi-honor-200-lite").cadence.note, "HONOR's Finland bulletin lists this model for quarterly security updates.");
  const incorrectCadencePhrase = ["for every two months", "security updates"].join(" ");
  assert.ok(!JSON.stringify(expanded.dataset.records.filter(({ brandId }) => brandId === "honor")).includes(incorrectCadencePhrase));
  const honorAer = phone(expanded.dataset, "honor-fi-honor-400-pro");
  assert.equal(honorAer.security.end.value, null);
  assert.match(honorAer.security.end.note, /at least June 2028/);
  assert.match(honorAer.os.state.note, /Android 15 as shipped/);
  assert.ok(expanded.exclusions.some(({ product, reason }) => product === "honor-aer" && /Tablet/.test(reason)));
  assert.ok(expanded.exclusions.some(({ product, reason }) => product === "honor-aer" && /does not cover Europe/.test(reason)));
});

test("named Android commitments preserve AER minimums and stronger regional evidence without endpoints", () => {
  const honorRecords = expanded.dataset.records.filter(({ brandId }) => brandId === "honor");
  const aerRecords = honorRecords.filter(({ os }) => os.commitments.some(({ sourceIds }) => sourceIds.includes("honor-aer-support")));
  assert.equal(aerRecords.length, 12);
  assert.ok(aerRecords.every(({ os }) => os.commitments.find(({ sourceIds }) => sourceIds.includes("honor-aer-support")).minimum));
  assert.ok(aerRecords.every(({ os }) => os.end.value === null));
  assert.deepEqual(
    aerRecords.reduce((counts, record) => {
      const key = androidSupportPresentation(record, now).class;
      counts[key] = (counts[key] ?? 0) + 1;
      return counts;
    }, {}),
    { B: 5, C: 7 },
  );

  const magic7Pro = phone(expanded.dataset, "honor-fi-honor-magic7-pro");
  assert.equal(androidSupportPresentation(magic7Pro, now).class, "C");
  assert.equal(magic7Pro.os.state.value, "active");
  assert.equal(magic7Pro.os.end.value, null);
  assert.deepEqual(magic7Pro.os.commitments.map(({ scope, durationYears }) => ({ scope, durationYears })), [{ scope: "European Union", durationYears: 7 }]);

  const regional = honorRecords.filter(({ os }) => os.commitments.some(({ activity, scope }) => activity === "active" && ["France", "Germany"].includes(scope)));
  assert.equal(regional.length, 11);
  assert.ok(regional.every((record) => androidSupportPresentation(record, now).class === "C" && record.os.end.value === null));

  const fairphone4 = phone(expanded.dataset, "fairphone-4");
  assert.equal(androidSupportPresentation(fairphone4, now).class, "B");
  assert.equal(fairphone4.os.commitments[0].scope, "Europe");
  for (const [id, count] of [["oneplus-11", 4], ["oneplus-12r", 3], ["oneplus-13", 4], ["oneplus-13r", 4]]) {
    const record = phone(expanded.dataset, id);
    assert.equal(androidSupportPresentation(record, now).class, "B");
    assert.equal(record.os.commitments[0].upgradeCount, count);
    assert.equal(record.os.end.value, null);
  }
  for (const id of ["oneplus-13", "oneplus-13r"]) assert.deepEqual(phone(expanded.dataset, id).os.commitments[0].futureVersions, ["16", "17", "18", "19"]);
});

test("HONOR snapshots reject unsupported cadence and malformed minimum dates", () => {
  const cadence = clone(officialCatalogs.find(({ catalog }) => catalog === "honor-fi-security"));
  cadence.body.records[0].cadence = "annual";
  refreshHash(cadence);
  assert.throws(() => validateOfficialCatalog(cadence), /cadence/);
  const aer = clone(officialCatalogs.find(({ catalog }) => catalog === "honor-aer"));
  aer.body.records[0].securityMinimum = "2028-13";
  refreshHash(aer);
  assert.throws(() => validateOfficialCatalog(aer), /securityMinimum/);
});

test("HONOR AER coverage blocks catastrophic truncation but permits complete small changes", async (t) => {
  const root = await workspace(t, { existing: true });
  await seedAcceptedOfficialCatalogs(root);
  const aerRecords = officialCatalogs.find(({ catalog }) => catalog === "honor-aer").body.records;

  const complete = await runUpdate({ root, now, fetchImpl: fakeApi(rawProducts, officialCatalogs) });
  assert.ok(!complete.changes.risks.some((risk) => /HONOR AER.+coverage/i.test(risk)));

  const oneRow = await runUpdate({ root, now, fetchImpl: fakeApi(rawProducts, withAerRecords(aerRecords.slice(0, 1))) });
  assert.ok(oneRow.changes.risks.some((risk) => /HONOR AER.+coverage/i.test(risk)));

  const severeIdentityReduction = await runUpdate({ root, now, fetchImpl: fakeApi(rawProducts, withAerRecords(aerRecords.slice(0, 10))) });
  assert.ok(severeIdentityReduction.changes.risks.some((risk) => /HONOR AER.+identit/i.test(risk)));

  const finlandNames = new Set(officialCatalogs.find(({ catalog }) => catalog === "honor-fi-security").body.records.map(({ name }) => normalizePhoneQuery(name)));
  const regionCollapse = clone(aerRecords);
  for (const record of regionCollapse.filter(({ name }) => finlandNames.has(normalizePhoneQuery(name))).slice(0, 10)) {
    record.securityRegions = ["Asia"];
    record.osRegions = ["Asia"];
  }
  const lostEnrichment = await runUpdate({ root, now, fetchImpl: fakeApi(rawProducts, withAerRecords(regionCollapse)) });
  assert.ok(lostEnrichment.changes.risks.some((risk) => /HONOR AER.+Finland.+enrichment/i.test(risk)));

  const singleRemovalRecords = aerRecords.filter(({ name }) => name !== "HONOR 400 pro");
  const singleRemoval = await runUpdate({ root, now, fetchImpl: fakeApi(rawProducts, withAerRecords(singleRemovalRecords)) });
  assert.ok(!singleRemoval.changes.risks.some((risk) => /HONOR AER.+coverage/i.test(risk)));
  assert.ok(singleRemoval.changes.changed.some(({ id }) => id === "honor-fi-honor-400-pro"));
  assert.ok(singleRemoval.changes.sourceRevisions.some((revision) => revision.includes("honor-aer")));

  const addition = { ...clone(aerRecords[0]), name: "HONOR Test Future" };
  const singleAddition = await runUpdate({ root, now, fetchImpl: fakeApi(rawProducts, withAerRecords([...aerRecords, addition])) });
  assert.ok(!singleAddition.changes.risks.some((risk) => /HONOR AER.+coverage/i.test(risk)));
  assert.ok(singleAddition.changes.sourceRevisions.some((revision) => revision.includes("honor-aer")));

  const regionChange = clone(aerRecords);
  regionChange.find(({ name }) => name === "HONOR 400 pro").securityRegions = ["Europe"];
  const oneRegionChange = await runUpdate({ root, now, fetchImpl: fakeApi(rawProducts, withAerRecords(regionChange)) });
  assert.ok(!oneRegionChange.changes.risks.some((risk) => /HONOR AER.+coverage/i.test(risk)));

  const minimumChange = clone(aerRecords);
  minimumChange.find(({ name }) => name === "HONOR 400 pro").securityMinimum = "2028-07";
  const oneMinimumChange = await runUpdate({ root, now, fetchImpl: fakeApi(rawProducts, withAerRecords(minimumChange)) });
  assert.ok(!oneMinimumChange.changes.risks.some((risk) => /HONOR AER.+coverage/i.test(risk)));
  assert.ok(oneMinimumChange.changes.changed.some(({ id, fields }) => id === "honor-fi-honor-400-pro" && fields.includes("security.end")));
});

test("empty, malformed and failed HONOR sources stop before writes", async (t) => {
  const root = await workspace(t, { existing: true });
  await seedAcceptedOfficialCatalogs(root);
  const before = await fileHashes(root);
  const base = fakeApi();
  const sourceCases = [
    async (url) => String(url).includes("/global/tech/security-update/") ? response("<html></html>", 200, "text/html") : base(url),
    async (url) => String(url).includes("/global/tech/security-update/") ? response('<div class="text1">HONOR Broken</div><div class="text2">wrong</div><div class="text3">wrong</div>', 200, "text/html") : base(url),
    async (url) => String(url).includes("/global/tech/security-update/") ? response("unavailable", 503, "text/html") : base(url),
    async (url) => String(url).includes("/fi/support/bulletin/") ? response("unavailable", 503, "text/html") : base(url),
  ];
  for (const fetchImpl of sourceCases) {
    await assert.rejects(runUpdate({ root, apply: true, now, attempts: 1, fetchImpl }), /honor-aer|honor-fi-security|HTTP 503/i);
    assert.deepEqual(await fileHashes(root), before);
  }
});

test("a one-row HONOR AER apply is blocked before every write", async (t) => {
  const root = await workspace(t, { existing: true });
  await seedAcceptedOfficialCatalogs(root);
  const before = await fileHashes(root);
  const aerRecords = officialCatalogs.find(({ catalog }) => catalog === "honor-aer").body.records;
  await assert.rejects(
    runUpdate({ root, apply: true, now, fetchImpl: fakeApi(rawProducts, withAerRecords(aerRecords.slice(0, 1))) }),
    /Apply refused/,
  );
  assert.deepEqual(await fileHashes(root), before);
});

test("API schema validation rejects missing, malformed and incompatible fields without rejecting additions", () => {
  const changes = [
    [(source) => { source.body.schema_version = "2.0.0"; }, /schema/],
    [(source) => { source.body.result.releases = []; }, /empty release/],
    [(source) => { delete source.body.result.releases[0].releaseDate; }, /invalid date/],
    [(source) => { source.body.result.releases[0].releaseDate = "2026-02-30"; }, /invalid date/],
    [(source) => { source.body.result.releases[0].isEol = "false"; }, /isEol/],
    [(source) => { source.body.result.releases[0].eolFrom = false; }, /eolFrom/],
    [(source) => { source.body.result.releases[0].eolFrom = "2000-01-01"; }, /before release/],
    [(source) => { source.body.result.releases[0].eoasFrom = "2000-01-01"; }, /before release/],
    [(source) => { const release = source.body.result.releases[0]; release.eoasFrom = "2035-01-01"; release.eolFrom = "2034-01-01"; }, /before OS/],
    [(source) => { source.body.result.releases[0].custom = { unsupportedNumber: 2 }; }, /custom field/],
    [(source) => { source.body.result.releases.push(clone(source.body.result.releases[0])); }, /duplicate release/],
    [(source) => { source.body.result.labels.eol = "Warranty"; }, /meaning changed/],
  ];
  for (const [mutate, expected] of changes) {
    const source = clone(raw("pixel")); mutate(source); refreshHash(source);
    assert.throws(() => validateRawProduct(source), expected);
  }
  const addition = clone(raw("pixel")); addition.body.newMetadata = true; refreshHash(addition);
  assert.doesNotThrow(() => validateRawProduct(addition));
  addition.sha256 = "wrong";
  assert.throws(() => validateRawProduct(addition), /checksum/);
  const altered = clone(rawProducts);
  const pixel = altered.find(({ product }) => product === "pixel");
  pixel.body.result.releases.find(({ name }) => name === "9").eolFrom = "2023-08-01";
  refreshHash(pixel);
  assert.throws(() => normalizeRawProducts(altered, official, { now }), /before release/);
});

test("future and unidentifiable devices are excluded and missing products cannot form a snapshot", () => {
  assert.match(exclusionReason("pixel", { name: "future", label: "Pixel Future", releaseDate: "2027-01-01" }, now), /future/);
  assert.match(exclusionReason("pixel", { name: "speaker", label: "Home Speaker", releaseDate: "2025-01-01" }, now), /does not confidently/);
  assert.match(exclusionReason("samsung-mobile", { name: "galaxy-j-max", label: "Galaxy J Max", releaseDate: "2016-08-01" }, now), /tablet/);
  assert.throws(() => normalizeRawProducts(rawProducts.slice(1), official, { now }), /complete set/);
});

test("official claims override fields independently while raw evidence and unresolved conflicts remain available", () => {
  for (const document of official) {
    for (const annotation of document.annotations) {
      const record = phone(dataset, `${annotation.product}-${annotation.cycle}`);
      if (!record) continue;
      for (const field of ["release", "cadence"]) if (annotation[field]) assert.deepEqual(record[field], annotation[field]);
      for (const field of ["os", "security"]) {
        for (const part of ["state", "end"]) if (annotation[field]?.[part]) assert.deepEqual(record[field][part], annotation[field][part]);
      }
    }
  }
  const pixel = phone(dataset, "pixel-9");
  assert.equal(pixel.release.precision, "month");
  assert.equal(pixel.security.end.value, "2031-08");
  assert.equal(raw("pixel").body.result.releases.find(({ name }) => name === "9").eolFrom, "2031-08-01");
  const samsung = phone(dataset, "samsung-mobile-galaxy-s22-ultra");
  assert.equal(samsung.cadence.evidenceType, "official-current-list");
  assert.equal(samsung.security.end.evidenceType, "secondary-dataset");
  assert.ok(phone(dataset, "fairphone-5").conflicts.some((conflict) => conflict.field === "security.end" && !conflict.resolved));
});

test("source-specific precision and unknown states do not inherit false certainty from API booleans", () => {
  const altered = clone(rawProducts);
  const samsung = altered.find(({ product }) => product === "samsung-mobile");
  const s6 = samsung.body.result.releases.find(({ name }) => name === "galaxy-s6");
  Object.assign(s6, { eoasFrom: "2026-01-01", isEoas: true, eolFrom: "2026-01-01", isEol: true });
  refreshHash(samsung);
  const candidate = normalizeRawProducts(altered, official, { now }).dataset;
  const record = phone(candidate, "samsung-mobile-galaxy-s6");
  assert.equal(record.security.end.value, "2026");
  assert.equal(record.security.state.value, "active");
  assert.equal(record.security.state.evidenceType, "secondary-dataset");
  const w26 = phone(normalizeRawProducts(rawProducts, [], { now }).dataset, "samsung-mobile-w26");
  assert.equal(w26.os.state.value, "unknown");
  assert.equal(w26.security.state.value, "unknown");
  for (const item of dataset.records.filter(({ brandId }) => brandId === "oneplus")) assert.equal(item.os.end.value, null);
  const moto = phone(dataset, "motorola-mobility-moto-g73-5g");
  assert.equal(moto.release.precision, "month");
  assert.equal(moto.security.end.precision, "month");
  assert.equal(moto.os.state.value, "unknown");
  assert.equal(moto.cadence.value, "unknown");
});

test("5G alias creation preserves distinct phones and records explicit collision resolutions", () => {
  const fourG = phone(dataset, "motorola-mobility-moto-g-stylus-2022");
  const fiveG = phone(dataset, "motorola-mobility-moto-g-stylus-5g-2022");
  assert.ok(fourG.aliases.includes("moto g stylus 2022"));
  assert.ok(!fiveG.aliases.includes("moto g stylus 2022"));
  assert.ok(normalized.aliasResolutions.some(({ ids }) => ids.includes(fourG.id) && ids.includes(fiveG.id)));
  assert.doesNotThrow(() => validateDataset(dataset, { now }));
});

test("canonical validation rejects impossible dates, missing evidence, bad aliases and stale review chronology", () => {
  const mutations = [
    [(data) => { data.records[1].id = data.records[0].id; }, /canonical ID/],
    [(data) => { phone(data, "pixel-9").security.end.value = "2020-08"; }, /before release/],
    [(data) => { phone(data, "pixel-9").security.end.value = "2029-08"; }, /before OS/],
    [(data) => { phone(data, "pixel-9").release.value = "2024-08-01"; }, /date or date precision/],
    [(data) => { phone(data, "pixel-9").security.end.sourceIds = []; }, /requires a source/],
    [(data) => { phone(data, "pixel-9").reviewedAt = "2026-08-27"; }, /reviewed after record/],
    [(data) => { phone(data, "pixel-9").aliases.push("google pixel 8"); }, /Alias collision/],
    [(data) => { phone(data, "pixel-9").deviceType = "tablet"; }, /only phones/],
    [(data) => { phone(data, "pixel-9").security.state.evidenceType = "unknown"; }, /state requires evidence/],
    [(data) => { phone(data, "pixel-9").caveats.push("Invalid\u00b7separator"); }, /separator/],
    [(data) => { phone(data, "fairphone-4").os.commitments[0].sourceIds = []; }, /commitment requires evidence|known evidence requires a source/],
    [(data) => { phone(data, "fairphone-4").os.commitments[0].upgradeCount = 0; }, /positive integer/],
    [(data) => { phone(data, "fairphone-4").os.commitments[0].scope = ""; }, /nonempty text/],
    [(data) => { phone(data, "fairphone-4").os.commitments.push(clone(phone(data, "fairphone-4").os.commitments[0])); }, /duplicate commitment/],
  ];
  for (const [mutate, expected] of mutations) {
    const data = clone(dataset); mutate(data);
    assert.throws(() => validateDataset(data, { now }), expected);
  }
});

test("source registry validation checks HTTPS, trusted hosts, duplicates, usage and retrieval dates", () => {
  const mutations = [
    [(data) => { data.sources[0].url = "http://endoflife.date/fairphone"; }, /HTTPS/],
    [(data) => { data.sources[0].url = "https://127.0.0.1/"; }, /Untrusted/],
    [(data) => { data.sources[0].url = "https://example.com/"; }, /Untrusted/],
    [(data) => { data.sources[1].url = data.sources[0].url; }, /Duplicate source URL/],
    [(data) => { data.sources.push({ ...data.sources[0], id: "unused-source", url: "https://endoflife.date/unused" }); }, /Unused source/],
    [(data) => { data.sources[0].checkedAt = "2026-08-27"; }, /chronology/],
  ];
  for (const [mutate, expected] of mutations) {
    const data = clone(dataset); mutate(data);
    assert.throws(() => validateDataset(data, { now }), expected);
  }
});

test("diff reports additions, removals, changes, evidence downgrades and precision changes", () => {
  const candidate = clone(dataset);
  candidate.records = candidate.records.filter(({ id }) => id !== "pixel-8");
  const pixel = phone(candidate, "pixel-9");
  pixel.security.end.precision = "year"; pixel.security.end.value = "2031";
  pixel.security.end.evidenceType = "secondary-dataset";
  const changes = diffDatasets(dataset, candidate, official);
  assert.deepEqual(changes.removed, ["pixel-8"]);
  assert.ok(changes.changed.some(({ id, fields }) => id === "pixel-9" && fields.includes("security.end")));
  assert.ok(changes.precisionChanges.some((item) => item.includes("month -> year")));
  assert.ok(changes.risks.some((item) => item.includes("evidence downgrade")));
  assert.ok(changes.risks.some((item) => item.includes("source removal")));
  assert.equal(diffDatasets(null, dataset).added.length, dataset.records.length);
  const report = formatUpdateReport(normalized, changes);
  for (const heading of ["Excluded records", "Alias resolutions", "Evidence conflicts", "Blocking risks"]) assert.ok(report.includes(heading));
});

test("Android commitment removal blocks apply unless a current explicit review permits it", async (t) => {
  const root = await workspace(t);
  await seedAcceptedOfficialCatalogs(root);
  const changedDocuments = clone(official);
  const oneplus = changedDocuments[0].annotations.find(({ product, cycle }) => product === "oneplus" && cycle === "11");
  oneplus.os.commitments = [];
  changedDocuments[0].sources = changedDocuments[0].sources.filter(({ id }) => id !== "oneplus-11-fi-software");
  await writeFile(path.join(root, "data/phone-support/official/pixel-oneplus-fairphone.json"), JSON.stringify(changedDocuments[0]));
  const afterReviewEdit = await fileHashes(root);
  await assert.rejects(runUpdate({ root, apply: true, now, fetchImpl: fakeApi() }), /Apply refused/);
  assert.deepEqual(await fileHashes(root), afterReviewEdit);

  changedDocuments[0].commitmentReviews = [{
    recordId: "oneplus-11",
    checkedAt: now,
    note: "Reviewed manufacturer evidence no longer supports the earlier commitment.",
  }];
  await writeFile(path.join(root, "data/phone-support/official/pixel-oneplus-fairphone.json"), JSON.stringify(changedDocuments[0]));
  const reviewed = await runUpdate({ root, now, fetchImpl: fakeApi() });
  assert.ok(reviewed.changes.commitmentChanges.some((change) => change.startsWith("oneplus-11 ")));
  assert.ok(!reviewed.changes.risks.some((risk) => risk.startsWith("oneplus-11 os.commitments")));
});

test("new secondary conflicts with older official dates are surfaced and block an unreviewed apply", () => {
  const altered = clone(rawProducts);
  const pixel = altered.find(({ product }) => product === "pixel");
  pixel.retrievedAt = "2026-08-29";
  pixel.body.result.releases.find(({ name }) => name === "9").eolFrom = "2034-08-01";
  refreshHash(pixel);
  const candidate = normalizeRawProducts(altered, official, { now });
  const record = phone(candidate.dataset, "pixel-9");
  assert.equal(record.security.end.value, "2031-08");
  assert.ok(record.conflicts.some(({ field, resolved }) => field === "security.end" && !resolved));
  const changes = diffDatasets(dataset, candidate.dataset, official);
  assert.ok(changes.risks.some((risk) => risk.includes("pixel-9: new unresolved security.end conflict")));
  assert.ok(changes.sourceRevisions.some((revision) => revision.startsWith("pixel:")));
});

test("resolved source conflicts remain bound to the exact reviewed raw value", () => {
  const unchanged = clone(rawProducts);
  unchanged.forEach((source) => { source.retrievedAt = "2026-08-29"; });
  const same = normalizeRawProducts(unchanged, official, { now }).dataset;
  assert.deepEqual(diffDatasets(dataset, same, official).risks, []);
  for (const retrievedAt of [now, "2026-08-31"]) {
    const altered = clone(rawProducts);
    const oneplus = altered.find(({ product }) => product === "oneplus");
    oneplus.retrievedAt = retrievedAt;
    oneplus.body.result.releases.find(({ name }) => name === "12").eolFrom = "2035-01-23";
    refreshHash(oneplus);
    const candidate = normalizeRawProducts(altered, official, { now: retrievedAt }).dataset;
    const record = phone(candidate, "oneplus-12");
    assert.equal(record.security.end.value, "2029-02-01");
    assert.ok(record.conflicts.some(({ field, resolved, message }) => field === "security.end" && !resolved && message.includes("2035-01-23")));
    assert.ok(!record.conflicts.some(({ field, resolved }) => field === "security.end" && resolved));
    const changes = diffDatasets(dataset, candidate, official);
    assert.ok(changes.changed.some(({ id, fields }) => id === "oneplus-12" && fields.includes("conflicts")));
    assert.ok(changes.risks.some((risk) => risk.includes("oneplus-12: new unresolved security.end conflict")));
  }
});

test("HTTP fetching uses a respectful user agent, bounded concurrency and retries only transient responses", async () => {
  let calls = 0;
  const delays = [];
  const result = await fetchResource("https://endoflife.date/api/v1/products/pixel", {
    fetchImpl: async (_url, options) => {
      assert.match(options.headers["user-agent"], /runcheck-phone-support-maintenance/);
      assert.equal(options.redirect, "manual"); assert.ok(options.signal);
      return ++calls === 1 ? response("busy", 503, "text/html") : response({ ready: true });
    }, delay: async (value) => { delays.push(value); },
  });
  assert.equal(result.status, 200); assert.equal(calls, 2); assert.equal(delays.length, 1);
  calls = 0;
  const notFound = await fetchResource("https://endoflife.date/missing", { fetchImpl: async () => { calls++; return response("missing", 404, "text/html"); } });
  assert.equal(notFound.status, 404); assert.equal(calls, 1);
  let active = 0, peak = 0;
  const ordered = await mapWithConcurrency([1, 2, 3, 4, 5], async (value) => {
    active++; peak = Math.max(peak, active);
    await new Promise((resolve) => setTimeout(resolve, 2)); active--; return value;
  }, 2);
  assert.deepEqual(ordered, [1, 2, 3, 4, 5]); assert.equal(peak, 2);
});

test("HTTP timeouts and unrelated redirects fail safely", async () => {
  await assert.rejects(fetchResource("https://endoflife.date/pixel", {
    timeoutMs: 5, attempts: 1,
    fetchImpl: (_url, { signal }) => new Promise((_resolve, reject) => signal.addEventListener("abort", () => reject(new Error("aborted")), { once: true })),
  }), /after 1 attempts/);
  for (const location of ["https://example.com/", "http://endoflife.date/pixel", "https://user:password@endoflife.date/pixel"]) {
    let calls = 0;
    await assert.rejects(fetchResource("https://endoflife.date/pixel", { fetchImpl: async () => { calls++; return new Response(null, { status: 301, headers: { location } }); } }), /Untrusted/);
    assert.equal(calls, 1);
  }
});

test("API fetching rejects bad content types, malformed JSON and non-success responses", async () => {
  await assert.rejects(fetchRawProducts({ now, attempts: 1, fetchImpl: async () => response("<html></html>", 200, "text/html") }), /content type/);
  await assert.rejects(fetchRawProducts({ now, attempts: 1, fetchImpl: async () => response("not JSON") }), /malformed JSON/);
  await assert.rejects(fetchRawProducts({ now, attempts: 1, fetchImpl: async () => response("missing", 404, "text/html") }), /HTTP 404/);
});

test("dry run is read-only and explicit apply produces a complete reproducible offline snapshot", async (t) => {
  const root = await workspace(t);
  const before = await fileHashes(root);
  const dry = await runUpdate({ root, now, fetchImpl: fakeApi() });
  assert.equal(dry.applied, false);
  assert.deepEqual(await fileHashes(root), before);
  const applied = await runUpdate({ root, apply: true, now, fetchImpl: fakeApi() });
  assert.equal(applied.applied, true);
  assert.equal((await readdir(path.join(root, "data/phone-support/raw"))).length, PRODUCTS.length + OFFICIAL_CATALOGS.length);
  const originalFetch = globalThis.fetch;
  globalThis.fetch = () => { throw new Error("Offline check must not fetch"); };
  try { assert.equal((await checkPhoneSupport({ root, now })).count, expanded.dataset.records.length); }
  finally { globalThis.fetch = originalFetch; }
  const beforeSecondRun = await fileHashes(root);
  const second = await runUpdate({ root, now, fetchImpl: fakeApi() });
  assert.deepEqual(
    { added: second.changes.added, removed: second.changes.removed, changed: second.changes.changed, risks: second.changes.risks, sourceRevisions: second.changes.sourceRevisions },
    { added: [], removed: [], changed: [], risks: [], sourceRevisions: [] },
  );
  assert.deepEqual(await fileHashes(root), beforeSecondRun);
});

test("network failure, malformed raw evidence, conflicts and downgrades leave an existing snapshot untouched", async (t) => {
  const root = await workspace(t, { existing: true });
  const before = await fileHashes(root);
  await assert.rejects(runUpdate({ root, apply: true, now, attempts: 1, fetchImpl: async () => response("unavailable", 503, "text/html") }), /HTTP 503/);
  assert.deepEqual(await fileHashes(root), before);
  for (const [product, cycle, value, expected] of [["pixel", "9", "2023-08-01", /before release/], ["oneplus", "12", "2035-01-23", /Apply refused/]]) {
    const changed = clone(rawProducts);
    changed.find((source) => source.product === product).body.result.releases.find(({ name }) => name === cycle).eolFrom = value;
    await assert.rejects(runUpdate({ root, apply: true, now, fetchImpl: fakeApi(changed) }), expected);
    assert.deepEqual(await fileHashes(root), before);
  }
  const weaker = clone(official);
  const annotation = weaker[0].annotations.find(({ product, cycle }) => product === "pixel" && cycle === "9");
  delete annotation.security.end;
  await writeFile(path.join(root, "data/phone-support/official/pixel-oneplus-fairphone.json"), JSON.stringify(weaker[0]));
  const afterReviewEdit = await fileHashes(root);
  await assert.rejects(runUpdate({ root, apply: true, now, fetchImpl: fakeApi() }), /Apply refused/);
  assert.deepEqual(await fileHashes(root), afterReviewEdit);
});

test("source checker distinguishes reachable, restricted, soft 404, malformed and redirected responses", async () => {
  const source = dataset.sources.find(({ id }) => id === "sony-security-periods");
  assert.equal((await checkSource(source, { now, fetchImpl: async () => response("<title>Support</title>", 200, "text/html") })).kind, "reachable");
  assert.equal((await checkSource({ ...source, allowRestricted: true }, { now, fetchImpl: async () => response("Forbidden", 403, "text/html") })).kind, "restricted");
  assert.equal((await checkSource({ ...source, allowRestricted: false }, { now, fetchImpl: async () => response("Forbidden", 403, "text/html") })).kind, "error");
  assert.match((await checkSource(source, { now, fetchImpl: async () => response("<title>Page not found</title>", 200, "text/html") })).detail, /Soft 404/);
  assert.equal((await checkSource(source, { now, fetchImpl: async () => response("<html>wrong</html>", 200, "application/pdf") })).kind, "error");
  assert.match((await checkSource(source, { now, fetchImpl: async () => new Response(null, { status: 302, headers: { location: "https://example.com/" } }) })).detail, /Untrusted/);
  let requests = 0;
  const results = await checkPhoneSupportSources(dataset, { now, fetchImpl: async () => { requests++; return response("<title>Source</title>", 200, "text/html"); } });
  assert.equal(requests, dataset.sources.length);
  assert.ok(results.every(({ affectedModels }) => affectedModels.length > 0));
});
