import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { runInNewContext } from "node:vm";
import { ModuleKind, ScriptTarget, transpileModule } from "typescript";
import * as supportHelpers from "../src/data/phoneSupport/support.mjs";
import * as searchHelpers from "../src/data/phoneSupport/search.mjs";
import { phoneDataset, phoneSupportPagePaths, publicPhoneData, phoneDataCsv } from "../src/data/phoneSupport/catalog.mjs";
import { validateDataset } from "./phone-support/validate.mjs";
import { parseCsv } from "./analyze-search-console-locales.mjs";
import { searchPhones, selectionUrl } from "../src/data/phoneSupport/search.mjs";
import { ARTICLE_LOCALE_CONTRACTS } from "../src/data/articleLocaleConfig.mjs";

const read = (file) => readFileSync(file, "utf8");
const built = (route) => path.join("dist", route.slice(1), "index.html");
const typesIn = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1])["@type"]);

test("real phone snapshot validates identity, claim sources, date precision and brand coverage", () => {
  assert.doesNotThrow(() => validateDataset(phoneDataset));
  assert.deepEqual(phoneDataset.brands.map(({ id }) => id).sort(), ["fairphone", "google-pixel", "honor", "motorola", "oneplus", "oppo", "poco", "redmi", "samsung", "sony-xperia", "xiaomi"]);
  assert.equal(new Set(phoneDataset.records.map(({ id }) => id)).size, phoneDataset.records.length);
  const samsung = phoneDataset.records.filter(({ brandId }) => brandId === "samsung");
  const samsungMatches = searchPhones(phoneDataset.records, "Samsung", { limit: phoneDataset.records.length });
  assert.equal(samsungMatches.length, 410);
  assert.deepEqual(samsungMatches.map(({ id }) => id).sort(), samsung.map(({ id }) => id).sort());
  assert.equal(searchPhones(phoneDataset.records, "Samsung", { limit: phoneDataset.records.length, excludeId: samsung[0].id }).length, 409);
  assert.ok(phoneDataset.records.every(({ deviceType }) => deviceType === "phone"));
  const idSet = new Set(phoneDataset.records.map(({ id }) => id));
  for (const id of ["pixel-tablet", "oneplus-pad1", "samsung-mobile-galaxy-note-pro-12.2", "samsung-mobile-z4", "samsung-mobile-ativ-se"]) assert.ok(!idSet.has(id), id);
  for (const query of ["pixel 9", "s22 ultra", "oneplus 11", "moto g", "fairphone 5", "xperia 1 vi", "oppo find x8 pro", "poco f7", "redmi note 14 pro", "xiaomi 15", "xiaomi poco f7", "xiaomi redmi note 14 pro", "honor magic 8 pro", "magic8 pro", "honor x5c plus", "honor 600 pro"]) {
    assert.ok(searchPhones(phoneDataset.records, query).length, query);
  }
  for (const [query, brandId] of [["honor", "honor"], ["oppo", "oppo"], ["poco", "poco"], ["redmi", "redmi"], ["xiaomi", "xiaomi"]]) {
    assert.equal(searchPhones(phoneDataset.records, query)[0].brandId, brandId, query);
  }
  const pixel = searchPhones(phoneDataset.records, "google pixel 9")[0];
  assert.equal(pixel.os.end.precision, "month");
  assert.equal(pixel.os.end.evidenceType, "derived-from-policy");
  const fairphone = searchPhones(phoneDataset.records, "fairphone 5")[0];
  assert.ok(fairphone.conflicts.some((conflict) => !conflict.resolved));
  assert.ok(phoneDataset.records.filter(({ brandId }) => ["oneplus", "sony-xperia"].includes(brandId)).every((phone) => phone.os.end.value === null));
});

test("phone support builds one checker, one methodology and only included brand pages", () => {
  assert.equal(phoneSupportPagePaths.length, phoneDataset.brands.length + 2);
  const htmlFiles = readdirSync("dist/phone-support", { recursive: true }).filter((file) => file.endsWith(".html"));
  assert.equal(htmlFiles.length, phoneSupportPagePaths.length);
  for (const route of phoneSupportPagePaths) {
    const html = read(built(route));
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, route);
    assert.match(html, /<html lang="en"/);
    assert.ok(html.includes(`rel="canonical" href="https://runcheckapp.com${route}"`), route);
    assert.ok(html.includes(`property="og:url" content="https://runcheckapp.com${route}"`), route);
    assert.match(html, /name="twitter:card"/);
    assert.ok(!typesIn(html).some((type) => ["Article", "BlogPosting", "Dataset"].includes(type)));
    assert.ok(!/<link\b[^>]*hreflang=/.test(html), "No fake language alternates");
  }
  assert.ok(typesIn(read(built("/phone-support/"))).includes("WebApplication"));
  const sitemap = read("dist/sitemap-0.xml");
  const checkerUrls = [...sitemap.matchAll(/<loc>([^<]*\/phone-support\/[^<]*)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(checkerUrls.sort(), phoneSupportPagePaths.map((route) => `https://runcheckapp.com${route}`).sort());
  assert.ok(checkerUrls.every((url) => !new URL(url).search));
});

test("brand browsing is semantic static HTML with every canonical model and source links", () => {
  const index = read(built("/phone-support/"));
  const withoutScripts = index.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  assert.match(withoutScripts, /11 brands, 800 phones/);
  assert.doesNotMatch(withoutScripts, /<details\b[^>]*data-ps-brands/);
  assert.doesNotMatch(withoutScripts, /<summary\b[^>]*>[^<]*(?:\+|\u2212)/);
  for (const [heading, ascending] of [["support-ending-soon", true], ["recently-ended-support", false]]) {
    const section = withoutScripts.match(new RegExp(`<section[^>]*aria-labelledby="${heading}"[^>]*>([\\s\\S]*?)</section>`))?.[1];
    assert.ok(section, heading);
    const ids = [...section.matchAll(/href="\/phone-support\/\?model=([^"&]+)"/g)].map((match) => decodeURIComponent(match[1]));
    assert.equal(ids.length, 4, heading);
    const ends = ids.map((id) => supportHelpers.dateBounds(phoneDataset.records.find((phone) => phone.id === id).security.end).end);
    assert.deepEqual(ends, [...ends].sort((a, b) => ascending ? a.localeCompare(b) : b.localeCompare(a)), heading);
  }
  for (const brand of phoneDataset.brands) {
    assert.ok(withoutScripts.includes(`href="/phone-support/${brand.id}/"`), brand.id);
  }

  for (const brand of phoneDataset.brands) {
    const html = read(built(`/phone-support/${brand.id}/`));
    const withoutScripts = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    assert.match(withoutScripts, /<table\b/);
    assert.match(withoutScripts, /<caption>/);
    assert.match(withoutScripts, /<th scope="col"/);
    const phones = phoneDataset.records.filter(({ brandId }) => brandId === brand.id);
    assert.equal((withoutScripts.match(/<th scope="row"/g) ?? []).length, phones.length);
    for (const phone of phones) assert.ok(withoutScripts.includes(selectionUrl({ modelId: phone.id })), phone.id);
    assert.ok(withoutScripts.includes("/phone-support/methodology/"));
    assert.match(withoutScripts, /Sources and limitations/);
  }
});

test("phone search JSON and public JSON/CSV exports have identical records and provenance", () => {
  const expected = publicPhoneData();
  const index = JSON.parse(read("dist/phone-support/search-index.json"));
  const exported = JSON.parse(read("dist/phone-support/data.json"));
  assert.deepEqual(index, expected);
  assert.deepEqual(exported, expected);
  assert.equal(index.records.length, phoneDataset.records.length);
  const csv = read("dist/phone-support/data.csv");
  assert.equal(csv, phoneDataCsv(expected));
  const [columns, ...rows] = parseCsv(csv);
  assert.equal(rows.length, expected.records.length);
  const byId = new Map(expected.records.map((phone) => [phone.id, phone]));
  for (const row of rows) {
    assert.equal(row.length, columns.length);
    const record = Object.fromEntries(columns.map((column, index) => [column, row[index]]));
    const phone = byId.get(record.id);
    assert.ok(phone);
    assert.equal(record.model, phone.model);
    assert.equal(record.release_date, phone.release.value ?? "");
    assert.equal(record.release_precision, phone.release.precision);
    assert.equal(record.os_end, phone.os.end.value ?? "");
    assert.deepEqual(JSON.parse(record.os_commitments), phone.os.commitments);
    assert.equal(record.security_end, phone.security.end.value ?? "");
    assert.equal(record.security_end_evidence, phone.security.end.evidenceType);
    assert.equal(record.reviewed_at, phone.reviewedAt);
    assert.equal(record.dataset_version, expected.version);
    assert.equal(record.license_notice, expected.attribution.notice);
  }
  assert.doesNotMatch(JSON.stringify(exported), /C:\\\\|AppData|rawPayload|privateNotes|api[_-]?key|credentials/);
  assert.match(exported.attribution.url, /^https:\/\/endoflife\.date/);
});

test("phone support discovery respects English navigation and keeps article locale data unchanged", () => {
  const home = read("dist/index.html");
  assert.match(home, />Check phone support<\/a>/);
  assert.ok(home.indexOf('id="features"') < home.indexOf('id="phone-support-promo-heading"'));
  assert.ok(home.indexOf('id="phone-support-promo-heading"') < home.indexOf('id="pricing"'));
  for (const locale of Object.values(ARTICLE_LOCALE_CONTRACTS).filter(({ productionPublished }) => productionPublished)) {
    const html = read(built(locale.root));
    const header = html.match(/<header\b[\s\S]*?<\/header>/)?.[0] ?? "";
    const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] ?? "";
    assert.equal(header.includes('href="/phone-support/"'), locale.code === "en");
    assert.equal(footer.includes('href="/phone-support/"'), locale.code === "en");
    const index = JSON.parse(read(path.join("dist", locale.searchIndex.slice(1))));
    assert.equal(index.length, 160);
    assert.ok(index.every((entry) => !entry.url.startsWith("/phone-support/")));
  }
  const methodology = read(built("/phone-support/methodology/"));
  assert.ok(methodology.includes("endoflife.date"));
  assert.ok(methodology.includes("MIT"));
  assert.ok(methodology.includes('href="/phone-support/data.csv"'));
  assert.ok(methodology.includes('href="/phone-support/data.json"'));
  const methodologyText = methodology.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  assert.match(methodologyText, /HONOR phones are included when they appear on HONOR Finland's current security-update list/i);
  assert.match(methodologyText, /currently listed for security updates.+update frequency/i);
  assert.match(methodologyText, /does not provide a confirmed security support end date.+Android version upgrades/i);
  assert.match(methodologyText, /Android Enterprise Recommended.+supplementary evidence/i);
  assert.match(methodologyText, /region.+Europe.+Global/i);
  assert.match(methodologyText, /minimum commitment.+separate from current activity and the calendar endpoint/i);
  assert.match(methodologyText, /AER minimum dates never create a countdown.+exact support endpoint/i);
  assert.match(methodologyText, /Absence from AER does not prove that security support has ended/i);
  assert.match(methodologyText, /not every historical HONOR phone/i);
  for (const removed of ["tools", "battery-future", "android-phone-checkup", "battery-charging-session-analyzer"]) {
    for (const root of ["src/pages", "dist"]) {
      const directory = `${root}/${removed}`;
      const files = existsSync(directory) ? readdirSync(directory, { recursive: true, withFileTypes: true }).filter((entry) => entry.isFile()) : [];
      assert.equal(files.length, 0, `${directory} must contain no restored implementation or output`);
    }
  }
});

test("browser implementation uses local data, safe DOM and no persistence or custom tracking", () => {
  const client = read("src/scripts/phone-support.ts");
  assert.match(client, /\/phone-support\/search-index\.json/);
  assert.doesNotMatch(client, /innerHTML|outerHTML|insertAdjacentHTML|localStorage|sessionStorage|document\.cookie|gtag\(|dataLayer/);
  assert.doesNotMatch(client, /fetch\(\s*["'`]https?:/);
  assert.match(client, /popstate/);
  assert.match(client, /aria-activedescendant/);
  for (const key of ["ArrowDown", "ArrowUp", "Enter", "Escape"]) assert.ok(client.includes(key));
  const ownCopy = [read("src/components/PhoneSupportChecker.astro"), client, ...phoneSupportPagePaths.map((route) => read(built(route)).match(/<main>[\s\S]*?<\/main>/)?.[0] ?? "")].join("\n");
  assert.doesNotMatch(ownCopy, /[\u00b7\u2013\u2014]/);
});

test("client accepts the real index and rejects empty, incompatible or malformed successful responses", () => {
  const { outputText } = transpileModule(read("src/scripts/phone-support.ts"), { compilerOptions: { module: ModuleKind.CommonJS, target: ScriptTarget.ES2022 } });
  const validateIndex = runInNewContext(`${outputText}\nvalidateIndex;`, {
    exports: {}, URL,
    require: (name) => name.endsWith("support.mjs") ? supportHelpers : searchHelpers,
    document: { querySelectorAll: () => [] },
  });
  const index = publicPhoneData();
  assert.equal(validateIndex(index).records.length, phoneDataset.records.length);
  for (const patch of [{ records: [] }, { sources: [] }, { version: "999" }, { generatedAt: "not a date" }, { generatedAt: "2026-02-30T00:00:00.000Z" }]) {
    assert.throws(() => validateIndex({ ...index, ...patch }), /could not be validated/);
  }
});

test("result presentation preserves date precision, uncertainty and traceable collapsed evidence", () => {
  const node = (tag) => ({
    tag, children: [], textContent: "", className: "", open: false, dataset: {},
    style: { setProperty() {} },
    append(...children) { this.children.push(...children); },
    setAttribute() {}, addEventListener() {},
  });
  const { outputText } = transpileModule(read("src/scripts/phone-support.ts"), { compilerOptions: { module: ModuleKind.CommonJS, target: ScriptTarget.ES2022 } });
  const { renderResult, renderDetails, renderComparison } = runInNewContext(`${outputText}\n({ renderResult, renderDetails, renderComparison });`, {
    exports: {}, URL,
    require: (name) => name.endsWith("support.mjs") ? supportHelpers : searchHelpers,
    document: { querySelectorAll: () => [], createElement: node, createDocumentFragment: () => node("fragment") },
  });
  const all = (root) => [root, ...root.children.flatMap(all)];
  const withClass = (root, name) => all(root).find((item) => item.className.split(" ").includes(name));
  const model = (name) => phoneDataset.records.find((phone) => phone.model === name);
  const now = "2026-08-30";
  for (const [name, date] of [["Google Pixel 9", "August 2031"], ["Samsung Galaxy S22", "2027"], ["OnePlus 11", "1 February 2028"]]) {
    const result = renderResult(model(name), now);
    assert.equal(withClass(result, "ps-answer-date").textContent, date);
    assert.match(withClass(result, "ps-remaining").textContent, /remaining/);
  }
  const uncertain = renderResult(model("Fairphone 5"), now);
  assert.equal(withClass(uncertain, "ps-answer-date").textContent, "End date uncertain");
  assert.equal(withClass(uncertain, "ps-remaining"), undefined);
  assert.ok(all(uncertain).some(({ textContent }) => textContent === "Support details incomplete"));
  const ended = renderResult(model("Sony Xperia 5 V"), now);
  assert.equal(withClass(ended, "ps-answer-label").textContent, "Security support ended");
  for (const [name, label] of [["Samsung Galaxy A04", "No public end date"], ["Samsung G3812B Galaxy S3 Slim", "Not established"]]) {
    const result = renderResult(model(name), now);
    assert.equal(withClass(result, "ps-answer-date").textContent, label);
    assert.equal(withClass(result, "ps-remaining"), undefined);
  }
  const honor = renderResult(model("HONOR Magic8 Pro"), now);
  assert.equal(withClass(honor, "ps-answer-date").textContent, "No public end date");
  assert.ok(all(honor).some(({ textContent }) => textContent === "Security updates active"));
  assert.ok(!all(honor).some(({ textContent }) => ["Supported", "Security updates only"].includes(textContent)));
  assert.ok(all(honor).some(({ textContent }) => textContent === "Android version support"));
  assert.ok(all(honor).some(({ textContent }) => textContent === "Active in France"));
  assert.ok(all(honor).some(({ textContent }) => textContent.includes("Exact end date not published")));
  const magic7Pro = renderResult(model("HONOR Magic7 Pro"), now);
  assert.ok(all(magic7Pro).some(({ textContent }) => textContent === "Supported"));
  assert.ok(all(magic7Pro).some(({ textContent }) => textContent === "Active in the EU"));
  const nonHonorUnknownAndroid = renderResult(model("Samsung Galaxy A04"), now);
  assert.ok(all(nonHonorUnknownAndroid).some(({ textContent }) => textContent === "Security updates active"));
  assert.ok(all(nonHonorUnknownAndroid).some(({ textContent }) => textContent === "Android version support"));
  assert.ok(all(nonHonorUnknownAndroid).some(({ textContent }) => textContent === "Not established"));

  const sources = new Map(phoneDataset.sources.map((source) => [source.id, source]));
  const pixel = model("Google Pixel 9");
  const details = renderDetails(pixel, sources, now);
  assert.ok(all(details).filter(({ tag }) => tag === "details").every(({ open }) => !open));
  const expected = [pixel.release, pixel.os.state, pixel.os.end, ...pixel.os.commitments, pixel.security.state, pixel.security.end, pixel.cadence];
  const sourceUrls = [...new Set(expected.flatMap(({ sourceIds }) => sourceIds))].map((id) => sources.get(id).url);
  const links = all(withClass(details, "ps-source-list")).filter(({ tag }) => tag === "a");
  assert.deepEqual(links.map(({ href }) => href).sort(), sourceUrls.sort());
  const caveats = withClass(details, "ps-caveats");
  assert.equal(all(caveats).filter(({ tag }) => tag === "li").length, 1);
  const evidence = withClass(details, "ps-claim-notes");
  for (const label of ["Release date", "Android support status", "Android support end", "Security support status", "Security support end", "Security update frequency"]) {
    assert.ok(all(evidence).some(({ tag, textContent }) => tag === "dt" && textContent.includes(label)), label);
  }
  const oneplusDetails = renderDetails(model("OnePlus 13"), sources, now);
  assert.ok(all(oneplusDetails).some(({ tag, textContent }) => tag === "dt" && textContent === "Android commitment (Global)"));
  assert.ok(all(oneplusDetails).some(({ textContent }) => textContent.includes("Android 16 through Android 19")));
  const comparison = renderComparison(model("HONOR 400 Pro"), model("Google Pixel 9"), now, () => {});
  assert.ok(all(comparison).some(({ textContent }) => textContent === "Android version support: Active in Germany"));
  assert.ok(all(comparison).some(({ textContent }) => textContent === "Exact end date not published."));
  assert.ok(all(comparison).some(({ textContent }) => textContent.includes("Active through August 2031")));
  const promisedComparison = renderComparison(model("OnePlus 13"), model("Fairphone 4"), now, () => {});
  assert.ok(all(promisedComparison).some(({ textContent }) => textContent === "Android upgrades: Promised globally"));
  assert.ok(all(promisedComparison).some(({ textContent }) => textContent === "Android upgrades: Promised in Europe"));
  assert.equal(all(promisedComparison).filter(({ textContent }) => textContent === "Current activity and end date not established.").length, 2);
  const rowLabels = all(comparison).filter(({ tag, scope }) => tag === "th" && scope === "row").map(({ textContent }) => textContent);
  assert.deepEqual(rowLabels.slice(0, 3), ["Security updates", "Security support remaining", "Android version updates"]);
  const namedDetails = renderDetails(pixel, sources, now, "ps-compare-evidence", true);
  assert.ok(all(namedDetails).some(({ tag, textContent }) => tag === "h3" && textContent === "Google Pixel 9: details and sources"));
  assert.equal(withClass(namedDetails, "ps-evidence").id, "ps-compare-evidence");
  const missing = renderResult(model("Samsung G3812B Galaxy S3 Slim"), now);
  assert.ok(all(missing).some(({ textContent }) => textContent.includes("Missing information does not mean updates have ended.")));
  assert.equal(all(missing).filter(({ textContent }) => textContent === "Not established").length, 2);
  for (const claim of expected.filter(({ note }) => note)) {
    assert.ok(all(evidence).some(({ textContent }) => textContent === claim.note));
  }
});
