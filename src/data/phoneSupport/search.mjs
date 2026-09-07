/** @typedef {import('./types').PhoneRecord} PhoneRecord */
/** @typedef {import('./types').PhoneDataset} PhoneDataset */
import { dateBounds, todayIso } from "./support.mjs";

const romanGenerations = { i: "1", ii: "2", iii: "3", iv: "4", v: "5", vi: "6", vii: "7", viii: "8" };

export function normalizePhoneQuery(value) {
  if (typeof value !== "string") return "";
  return value.slice(0, 160).normalize("NFKD")
    .replace(/\p{M}/gu, "").toLowerCase()
    .replace(/\bone\s+plus\b/g, "oneplus")
    .replace(/\bfair\s+phone\b/g, "fairphone")
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b5\s+g\b/g, "5g")
    .replace(/\b(pixel|galaxy|xperia)\s*(\d)/g, "$1 $2")
    .replace(/\bxperia (1|5|10) (viii|vii|vi|iv|iii|ii|v|i)\b/g,
      (_, model, generation) => `xperia ${model} ${romanGenerations[generation]}`)
    .replace(/\s+/g, " ").trim();
}

/** Produce aliases without dropping regional or radio-variant qualifiers. */
export function createAliases(model, brand) {
  const full = normalizePhoneQuery(model);
  const prefix = normalizePhoneQuery(brand);
  const short = prefix && full.startsWith(`${prefix} `) ? full.slice(prefix.length + 1) : full;
  const aliases = [full, short, short.replace(/^(?:samsung )?galaxy /, "")];
  if (full.startsWith("motorola ")) {
    const family = full.slice(9).replace(/^moto /, "");
    aliases.push(`moto ${family}`, `motorola ${family}`);
  }
  if (full.startsWith("sony xperia ")) aliases.push(full.slice(5));
  return [...new Set(aliases.filter(Boolean))].sort();
}

/** @param {PhoneDataset} dataset */
export function buildPhoneSearchIndex(dataset, now = dataset.reviewedAt) {
  const today = todayIso(now);
  // Only this public projection is shared with the browser and exports.
  return {
    version: dataset.version,
    generatedAt: dataset.generatedAt,
    reviewedAt: dataset.reviewedAt,
    attribution: dataset.attribution,
    brands: dataset.brands,
    sources: dataset.sources.map(({ id, publisher, title, url, checkedAt, retrievedAt, kind }) =>
      ({ id, publisher, title, url, checkedAt, retrievedAt, kind })),
    records: dataset.records.filter((phone) => phone.deviceType === "phone" &&
      (!dateBounds(phone.release) || dateBounds(phone.release).start <= today)).map(({ id, brandId, brand, model, aliases, searchTerms, deviceType,
      release, os, security, cadence, caveats, reviewedAt, sourceRevision, conflicts }) =>
      ({ id, brandId, brand, model, aliases, searchTerms, deviceType, release, os, security,
        cadence, caveats, reviewedAt, sourceRevision, conflicts })),
  };
}

/** @param {PhoneRecord[]} records */
export function searchPhones(records, query, { limit = 8, excludeId = "" } = {}) {
  const normalized = normalizePhoneQuery(query);
  if (!normalized || !Number.isInteger(limit) || limit <= 0) return [];
  const tokens = normalized.split(" ");
  const ranked = [];
  for (const record of records) {
    if (record.id === excludeId) continue;
    const model = normalizePhoneQuery(record.model);
    const aliases = record.aliases;
    let rank = 0;
    let matched = tokens.length;
    if (model === normalized) rank = 5;
    else if (normalizePhoneQuery(record.brand) === normalized) rank = 4;
    else if (aliases.includes(normalized)) rank = 4;
    else if (model.startsWith(normalized) || aliases.some((alias) => alias.startsWith(`${normalized} `))) rank = 3;
    else {
      const words = new Set([model, ...aliases, ...record.searchTerms.map(normalizePhoneQuery)].join(" ").split(" "));
      // 5G spelling is normalized, but distinct 4G/5G records are never merged.
      matched = tokens.filter((token) => [...words].some((word) => word === token || (token.length >= 2 && word.startsWith(token)))).length;
      if (matched === tokens.length) rank = 2;
      else if (matched > 0 && matched >= Math.ceil(tokens.length / 2) && tokens.some((token) => token.length >= 3 && words.has(token))) rank = 1;
    }
    if (rank) ranked.push({ record, rank, matched });
  }
  ranked.sort((a, b) => b.rank - a.rank || b.matched - a.matched ||
    (dateBounds(b.record.release)?.start ?? "").localeCompare(dateBounds(a.record.release)?.start ?? "") ||
    a.record.model.localeCompare(b.record.model, "en") || a.record.id.localeCompare(b.record.id, "en"));
  return ranked.slice(0, limit).map(({ record }) => record);
}

const safeId = (value) => typeof value === "string" && /^[a-zA-Z0-9][a-zA-Z0-9+._-]{0,159}$/.test(value);

/** @param {string} search @param {PhoneRecord[]} records */
export function parseSelection(search, records) {
  const params = new URLSearchParams(search);
  const ids = new Set(records.map(({ id }) => id));
  const read = (key) => {
    const values = params.getAll(key);
    return values.length === 1 && safeId(values[0]) && ids.has(values[0]) ? values[0] : null;
  };
  const modelId = read("model");
  const candidate = read("compare");
  const compareId = modelId && candidate !== modelId ? candidate : null;
  const invalid = (params.has("model") && !modelId) || (params.has("compare") && !compareId);
  return { modelId, compareId, invalid };
}

/** @param {{modelId: string|null, compareId?: string|null}} selection */
export function selectionUrl({ modelId, compareId = null }) {
  const params = new URLSearchParams();
  if (safeId(modelId)) {
    params.set("model", modelId);
    if (safeId(compareId) && compareId !== modelId) params.set("compare", compareId);
  }
  return `/phone-support/${params.size ? `?${params}` : ""}`;
}
