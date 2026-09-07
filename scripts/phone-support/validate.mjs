import { dateBounds, todayIso } from "../../src/data/phoneSupport/support.mjs";
import { normalizePhoneQuery } from "../../src/data/phoneSupport/search.mjs";

const evidenceTypes = new Set(["official-date", "official-policy", "official-current-list", "secondary-dataset", "derived-from-policy", "unknown"]);
const stateValues = new Set(["active", "ended", "unknown", "conflict"]);
const cadenceValues = new Set(["monthly", "quarterly", "biannual", "bimonthly", "regular", "not-specified", "unknown"]);
const officialDomains = ["google.com", "blog.google", "samsung.com", "samsungmobile.com", "oneplus.com", "motorola.com", "fairphone.com", "sony.co.uk", "sony.com", "sony.net", "mi.com", "oppo.com", "honor.com"];
const identifier = /^[a-z0-9][a-z0-9+._-]{0,159}$/;

function fail(condition, message) {
  if (!condition) throw new Error(message);
}

function text(value, context) {
  fail(typeof value === "string" && value.trim().length > 0 && !/[\u0000-\u001f\u007f]/.test(value), `${context}: expected nonempty text`);
}

export function sourceUrl(value, kind = "official") {
  let url;
  try { url = new URL(value); } catch { throw new Error(`Invalid source URL: ${value}`); }
  const domains = kind === "secondary" ? ["endoflife.date"] : officialDomains;
  fail(url.protocol === "https:" && !url.username && !url.password && !url.port, `Source URL must use credential-free HTTPS: ${value}`);
  fail(domains.some((domain) => url.hostname === domain || url.hostname.endsWith(`.${domain}`)), `Untrusted source host: ${url.hostname}`);
  fail(!/[?&](?:utm_[^=]*|fbclid|gclid)=/i.test(url.search), `Tracking parameter in source URL: ${value}`);
  return url;
}

export function sourceIdsFor(phone) {
  return [...new Set([
    phone.release, phone.os.state, phone.os.end, ...phone.os.commitments, phone.security.state, phone.security.end, phone.cadence,
    ...phone.conflicts,
  ].flatMap((claim) => claim.sourceIds))];
}

export function validateSources(sources, now) {
  fail(Array.isArray(sources), "Sources must be an array");
  const ids = new Set();
  const urls = new Set();
  for (const source of sources) {
    fail(source && identifier.test(source.id), "Invalid source ID");
    fail(!ids.has(source.id), `Duplicate source ID: ${source.id}`);
    ids.add(source.id);
    text(source.publisher, `${source.id}.publisher`);
    text(source.title, `${source.id}.title`);
    fail(["official", "secondary"].includes(source.kind), `${source.id}: invalid source kind`);
    const url = sourceUrl(source.url, source.kind);
    const key = `${url.origin}${url.pathname.replace(/\/$/, "")}${url.search}`;
    fail(!urls.has(key), `Duplicate source URL: ${source.url}`);
    urls.add(key);
    const retrieved = todayIso(source.retrievedAt);
    const checked = todayIso(source.checkedAt);
    fail(retrieved <= checked && checked <= now, `${source.id}: invalid source review/retrieval chronology`);
    if (source.allowedHosts !== undefined) {
      fail(Array.isArray(source.allowedHosts), `${source.id}: allowedHosts must be an array`);
      for (const host of source.allowedHosts) {
        fail(typeof host === "string" && host === host.toLowerCase() && !host.includes("/"), `${source.id}: invalid redirect host`);
        sourceUrl(`https://${host}/`, source.kind);
      }
    }
    if (source.allowRestricted !== undefined) fail(typeof source.allowRestricted === "boolean", `${source.id}: invalid allowRestricted flag`);
  }
  return new Map(sources.map((source) => [source.id, source]));
}

function evidence(claim, path, sources, reviewedAt) {
  fail(claim && typeof claim === "object" && !Array.isArray(claim), `${path}: missing claim`);
  fail(evidenceTypes.has(claim.evidenceType), `${path}: invalid evidence type`);
  fail(Array.isArray(claim.sourceIds) && new Set(claim.sourceIds).size === claim.sourceIds.length, `${path}: invalid source IDs`);
  const checked = todayIso(claim.checkedAt);
  fail(checked <= reviewedAt, `${path}: claim reviewed after record`);
  const references = claim.sourceIds.map((id) => {
    const source = sources.get(id);
    fail(source, `${path}: missing source ${id}`);
    fail(source.retrievedAt <= checked, `${path}: claim reviewed before source retrieval`);
    return source;
  });
  if (claim.evidenceType !== "unknown") fail(references.length > 0, `${path}: known evidence requires a source`);
  if (claim.evidenceType.startsWith("official-") || claim.evidenceType === "derived-from-policy") {
    fail(references.some((source) => source.kind === "official"), `${path}: official evidence requires an official source`);
  }
  if (claim.evidenceType === "secondary-dataset") fail(references.some((source) => source.kind === "secondary"), `${path}: secondary evidence requires a secondary source`);
  if (claim.note !== undefined) text(claim.note, `${path}.note`);
}

function dateClaim(claim, path, sources, reviewedAt) {
  evidence(claim, path, sources, reviewedAt);
  const bounds = dateBounds(claim);
  if (bounds || claim.precision === "ongoing") fail(claim.evidenceType !== "unknown", `${path}: a known date or ongoing claim needs evidence`);
  return bounds;
}

/** Validate the committed public contract without contacting any network source. */
export function validateDataset(dataset, { now = dataset?.reviewedAt } = {}) {
  const today = todayIso(now);
  fail(dataset && dataset.version === "1", "Unsupported phone dataset version");
  fail(typeof dataset.generatedAt === "string" && Number.isFinite(Date.parse(dataset.generatedAt)), "Invalid dataset generation timestamp");
  fail(todayIso(dataset.reviewedAt) <= today, "Dataset review date is in the future");
  fail(dataset.generatedAt.slice(0, 10) <= today, "Dataset generation timestamp is in the future");
  fail(dataset.attribution?.license === "MIT" && dataset.attribution.name === "endoflife.date", "Missing secondary dataset attribution");
  for (const key of ["url", "licenseUrl", "notice"]) text(dataset.attribution[key], `attribution.${key}`);
  const sources = validateSources(dataset.sources, today);
  fail(Array.isArray(dataset.brands) && dataset.brands.length > 0, "Dataset has no brands");
  const brands = new Map();
  for (const brand of dataset.brands) {
    fail(brand && identifier.test(brand.id) && !brands.has(brand.id), "Invalid or duplicate brand ID");
    for (const key of ["name", "description", "caveat"]) text(brand[key], `brand.${key}`);
    brands.set(brand.id, brand);
  }
  fail(Array.isArray(dataset.records) && dataset.records.length > 0, "Dataset has no phones");
  const ids = new Set();
  const names = new Set();
  const aliasOwners = new Map();
  const usedSources = new Set();
  const counts = {};
  for (const phone of dataset.records) {
    fail(phone && identifier.test(phone.id) && !ids.has(phone.id), `Invalid or duplicate canonical ID: ${phone?.id}`);
    ids.add(phone.id);
    fail(brands.has(phone.brandId), `${phone.id}: unknown brand`);
    fail(phone.brand === brands.get(phone.brandId).name, `${phone.id}: inconsistent brand name`);
    fail(phone.deviceType === "phone", `${phone.id}: only phones are allowed`);
    text(phone.model, `${phone.id}.model`);
    const normalizedModel = normalizePhoneQuery(phone.model);
    fail(normalizedModel && !names.has(normalizedModel), `Duplicate canonical model: ${phone.model}`);
    names.add(normalizedModel);
    const reviewedAt = todayIso(phone.reviewedAt);
    fail(reviewedAt <= dataset.reviewedAt, `${phone.id}: record reviewed after dataset`);
    text(phone.sourceRevision, `${phone.id}.sourceRevision`);
    fail(Array.isArray(phone.aliases) && phone.aliases.length > 0 && new Set(phone.aliases).size === phone.aliases.length, `${phone.id}: invalid aliases`);
    fail(Array.isArray(phone.searchTerms) && phone.searchTerms.length > 0, `${phone.id}: missing search terms`);
    for (const term of phone.searchTerms) text(term, `${phone.id}.searchTerms`);
    for (const alias of phone.aliases) fail(alias && alias === normalizePhoneQuery(alias), `${phone.id}: alias is not normalized`);
    for (const alias of new Set([normalizedModel, ...phone.aliases])) {
      fail(!aliasOwners.has(alias) || aliasOwners.get(alias) === phone.id, `Alias collision: ${alias} (${aliasOwners.get(alias)}, ${phone.id})`);
      aliasOwners.set(alias, phone.id);
    }
    fail(Array.isArray(phone.caveats), `${phone.id}: caveats must be an array`);
    for (const caveat of phone.caveats) text(caveat, `${phone.id}.caveats`);
    fail(Array.isArray(phone.conflicts), `${phone.id}: conflicts must be an array`);
    for (const conflict of phone.conflicts) {
      text(conflict.field, `${phone.id}.conflicts.field`);
      text(conflict.message, `${phone.id}.conflicts.message`);
      fail(typeof conflict.resolved === "boolean" && Array.isArray(conflict.sourceIds) && conflict.sourceIds.length > 0, `${phone.id}: invalid conflict evidence`);
    }
    const release = dateClaim(phone.release, `${phone.id}.release`, sources, reviewedAt);
    fail(!release || release.start <= today, `${phone.id}: unreleased phone`);
    const ends = {};
    for (const field of ["os", "security"]) {
      fail(phone[field] && typeof phone[field] === "object", `${phone.id}.${field}: missing support claim`);
      evidence(phone[field].state, `${phone.id}.${field}.state`, sources, reviewedAt);
      fail(stateValues.has(phone[field].state.value), `${phone.id}.${field}: invalid state`);
      if (["active", "ended"].includes(phone[field].state.value)) fail(phone[field].state.evidenceType !== "unknown", `${phone.id}.${field}: state requires evidence`);
      ends[field] = dateClaim(phone[field].end, `${phone.id}.${field}.end`, sources, reviewedAt);
      fail(!release || !ends[field] || ends[field].end >= release.start, `${phone.id}: ${field} support ends before release`);
    }
    fail(Array.isArray(phone.os.commitments), `${phone.id}.os.commitments: expected an array`);
    const commitmentKeys = new Set();
    for (const [index, commitment] of phone.os.commitments.entries()) {
      const path = `${phone.id}.os.commitments[${index}]`;
      evidence(commitment, path, sources, reviewedAt);
      fail(["official-date", "official-policy", "derived-from-policy"].includes(commitment.evidenceType), `${path}: a commitment requires official evidence`);
      fail(stateValues.has(commitment.activity), `${path}: invalid activity`);
      text(commitment.scope, `${path}.scope`);
      text(commitment.promise, `${path}.promise`);
      fail(typeof commitment.minimum === "boolean", `${path}: minimum must be boolean`);
      if (commitment.shippedVersion !== undefined) text(commitment.shippedVersion, `${path}.shippedVersion`);
      if (commitment.futureVersions !== undefined) {
        fail(Array.isArray(commitment.futureVersions) && commitment.futureVersions.length > 0 && new Set(commitment.futureVersions).size === commitment.futureVersions.length, `${path}: invalid future versions`);
        for (const version of commitment.futureVersions) fail(/^\d+$/.test(version), `${path}: invalid future Android version`);
      }
      for (const field of ["upgradeCount", "durationYears"]) if (commitment[field] !== undefined) {
        fail(Number.isInteger(commitment[field]) && commitment[field] > 0, `${path}.${field}: expected a positive integer`);
      }
      const key = JSON.stringify({ activity: commitment.activity, scope: commitment.scope, promise: commitment.promise, minimum: commitment.minimum,
        shippedVersion: commitment.shippedVersion, futureVersions: commitment.futureVersions, upgradeCount: commitment.upgradeCount,
        durationYears: commitment.durationYears, evidenceType: commitment.evidenceType, sourceIds: commitment.sourceIds });
      fail(!commitmentKeys.has(key), `${phone.id}.os.commitments: duplicate commitment`);
      commitmentKeys.add(key);
    }
    if (ends.security && ends.os && ends.security.end < ends.os.start) {
      fail(phone.conflicts.some((conflict) => /^(os|security)/.test(conflict.field)), `${phone.id}: security support ends before OS support without explanation`);
    }
    evidence(phone.cadence, `${phone.id}.cadence`, sources, reviewedAt);
    fail(cadenceValues.has(phone.cadence.value), `${phone.id}: invalid cadence`);
    if (phone.cadence.value !== "unknown") fail(phone.cadence.evidenceType !== "unknown", `${phone.id}: cadence requires evidence`);
    for (const id of sourceIdsFor(phone)) {
      fail(sources.has(id), `${phone.id}: missing conflict/source reference ${id}`);
      fail(sources.get(id).retrievedAt <= reviewedAt, `${phone.id}: reviewed before source retrieval`);
      usedSources.add(id);
    }
    const publicCopy = [phone.model, ...phone.caveats, ...phone.conflicts.map(({ message }) => message), ...phone.os.commitments.flatMap(({ scope, promise, note }) => [scope, promise, note]), phone.release.note, phone.os.state.note, phone.os.end.note, phone.security.state.note, phone.security.end.note, phone.cadence.note].filter(Boolean).join(" ");
    fail(!/[\u00b7\u2013\u2014]/.test(publicCopy), `${phone.id}: disallowed separator in public text`);
    counts[phone.brandId] = (counts[phone.brandId] ?? 0) + 1;
  }
  for (const id of brands.keys()) fail(counts[id] > 0, `Empty phone brand: ${id}`);
  for (const id of sources.keys()) fail(usedSources.has(id), `Unused source: ${id}`);
  return { count: dataset.records.length, counts, sourceCount: sources.size };
}
