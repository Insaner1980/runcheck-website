import { createHash } from "node:crypto";
import { createAliases, normalizePhoneQuery } from "../../src/data/phoneSupport/search.mjs";
import { dateBounds, formatDate, todayIso } from "../../src/data/phoneSupport/support.mjs";
import { sourceIdsFor, validateDataset } from "./validate.mjs";

export const PRODUCTS = [
  { product: "pixel", brandId: "google-pixel", brand: "Google", title: "Google Pixel", os: true, osPrecision: "month", securityPrecision: "month", caveat: "Google's support period starts from first availability in the Google Store in the US. Availability and delivery can vary by region and carrier." },
  { product: "samsung-mobile", brandId: "samsung", brand: "Samsung", title: "Samsung Galaxy", os: true, osPrecision: "year", securityPrecision: "year", caveat: "Samsung schedules vary by model, country, carrier and enterprise edition. Current cadence lists can change." },
  { product: "oneplus", brandId: "oneplus", brand: "OnePlus", title: "OnePlus", os: true, osPrecision: "unknown", securityPrecision: "year", caveat: "OnePlus commitments can depend on the model and sales region. A number of Android upgrades does not establish a calendar end date." },
  { product: "motorola-mobility", brandId: "motorola", brand: "Motorola", title: "Motorola", os: false, securityPrecision: "month", caveat: "Motorola support varies by device, region and carrier. The secondary dataset reports dates to the nearest month." },
  { product: "fairphone", brandId: "fairphone", brand: "Fairphone", title: "Fairphone", os: true, osPrecision: "month", securityPrecision: "year", caveat: "Guaranteed support and best effort extensions are different commitments. An Android upgrade count is not a calendar schedule." },
  { product: "sony-xperia", brandId: "sony-xperia", brand: "Sony", title: "Sony Xperia", os: false, securityPrecision: "month", caveat: "Sony support information is specific to the listed Xperia model and regional model code. Software availability can vary by region and operator." },
];

export const OFFICIAL_CATALOGS = [
  {
    catalog: "xiaomi-family",
    fetchUrl: "https://trust.mi.com/bff/psti/phone/online",
    sourceId: "xiaomi-software-support",
    sourceUrl: "https://trust.mi.com/misrc/updates/detail?tab=phone",
  },
  {
    catalog: "oppo-uk",
    fetchUrl: "https://www.oppo.com/uk/psti/",
    sourceId: "oppo-uk-support-period",
    sourceUrl: "https://www.oppo.com/uk/psti/",
  },
  {
    catalog: "honor-fi-security",
    fetchUrl: "https://www.honor.com/fi/support/bulletin/",
    sourceId: "honor-fi-security-updates",
    sourceUrl: "https://www.honor.com/fi/support/bulletin/",
  },
  {
    catalog: "honor-aer",
    fetchUrl: "https://www.honor.com/global/tech/security-update/",
    sourceId: "honor-aer-support",
    sourceUrl: "https://www.honor.com/global/tech/security-update/",
  },
];

const OFFICIAL_BRANDS = [
  { id: "xiaomi", name: "Xiaomi", title: "Xiaomi", caveat: "Xiaomi support dates come from the manufacturer's global software support registry. Availability and delivery can vary by region and model." },
  { id: "redmi", name: "Redmi", title: "Redmi", caveat: "Redmi is a consumer-facing Xiaomi brand. Support dates come from Xiaomi's global registry, and availability can vary by region and model." },
  { id: "poco", name: "POCO", title: "POCO", caveat: "POCO is a consumer-facing Xiaomi brand. Support dates come from Xiaomi's global registry, and availability can vary by region and model." },
  { id: "oppo", name: "OPPO", title: "OPPO", caveat: "OPPO dates come from the manufacturer's UK support-period register. Models and update delivery can differ by country, region and variant." },
  { id: "honor", name: "HONOR", title: "HONOR", caveat: "HONOR coverage follows the manufacturer's current Finland security-update list. The list can change, and delivery can vary by model, region, carrier and rollout batch." },
];

const productMap = new Map(PRODUCTS.map((product) => [product.product, product]));
const officialCatalogMap = new Map(OFFICIAL_CATALOGS.map((catalog) => [catalog.catalog, catalog]));
const rawClaimFields = { release: "releaseDate", "os.state": "eoasFrom", "os.end": "eoasFrom", "security.state": "eolFrom", "security.end": "eolFrom" };
const licenseNotice = 'Copyright 2020 endoflife.date contributors. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';
const transientStatuses = new Set([408, 429, 500, 502, 503, 504]);
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
const invalid = (message) => Object.assign(new Error(message), { retryable: false });
export const hashPayload = (body) => createHash("sha256").update(JSON.stringify(body)).digest("hex");

/** All network traffic is confined to explicit maintenance callers. */
export async function fetchResource(url, {
  fetchImpl = globalThis.fetch, timeoutMs = 20_000, attempts = 3,
  allowedHosts = [new URL(url).hostname], accept = "application/json", delay = sleep,
  method = "GET", body, requestHeaders = {},
} = {}) {
  const allowed = new Set(allowedHosts);
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let retryMs = 250 * attempt;
    try {
      let current = url;
      let response;
      for (let redirects = 0; redirects <= 5; redirects += 1) {
        const target = new URL(current);
        if (target.protocol !== "https:" || target.username || target.password || target.port || !allowed.has(target.hostname)) throw invalid(`Untrusted redirect or URL: ${current}`);
        response = await fetchImpl(current, {
          method, body, redirect: "manual", signal: controller.signal,
          headers: { accept, "accept-language": "en", "user-agent": "runcheck-phone-support-maintenance/1.0 (+https://runcheckapp.com/phone-support/)", ...requestHeaders },
        });
        if (![301, 302, 303, 307, 308].includes(response.status)) break;
        const location = response.headers.get("location");
        await response.body?.cancel();
        if (!location || redirects === 5) throw invalid("Missing redirect location or redirect limit exceeded");
        current = new URL(location, current).href;
      }
      if (response.url && !allowed.has(new URL(response.url).hostname)) throw invalid(`Untrusted final response URL: ${response.url}`);
      if (transientStatuses.has(response.status) && attempt < attempts) {
        const retryAfter = response.headers.get("retry-after");
        if (retryAfter && /^\d+$/.test(retryAfter)) retryMs = Math.min(5_000, Number(retryAfter) * 1_000);
        await response.body?.cancel();
        lastError = new Error(`HTTP ${response.status}`);
      } else {
        const contentLength = Number(response.headers.get("content-length"));
        if (contentLength > 8_000_000) throw invalid("Source response exceeds 8 MB");
        const body = await response.text();
        if (body.length > 8_000_000) throw invalid("Source response exceeds 8 MB");
        return { status: response.status, url: response.url || current, contentType: response.headers.get("content-type") ?? "", body, attempts: attempt };
      }
    } catch (error) {
      if (error.retryable === false) throw error;
      lastError = error;
    } finally {
      clearTimeout(timer);
    }
    if (attempt < attempts) await delay(retryMs);
  }
  throw new Error(`Request failed after ${attempts} attempts: ${lastError?.message ?? url}`);
}

export async function mapWithConcurrency(items, mapper, concurrency = 2) {
  const results = new Array(items.length);
  let next = 0;
  const workers = await Promise.allSettled(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await mapper(items[index], index);
    }
  }));
  const failed = workers.find((worker) => worker.status === "rejected");
  if (failed) throw failed.reason;
  return results;
}

function requireValue(condition, message) {
  if (!condition) throw new Error(message);
}

function validDay(value, path) {
  try { todayIso(value); } catch { throw new Error(`${path}: invalid date`); }
}

/** Validate documented API v1 fields and family-specific meanings, allowing additive fields. */
export function validateRawProduct(raw) {
  const config = productMap.get(raw?.product);
  requireValue(config, "Unknown phone source product");
  const context = config.product;
  requireValue(raw.url === `https://endoflife.date/api/v1/products/${context}`, `${context}: unexpected API URL`);
  validDay(raw.retrievedAt, `${context}.retrievedAt`);
  const body = raw.body;
  requireValue(body && /^1\.\d+\.\d+$/.test(body.schema_version), `${context}: unsupported API schema version`);
  for (const key of ["generated_at", "last_modified"]) {
    requireValue(typeof body[key] === "string" && /^\d{4}-\d{2}-\d{2}T/.test(body[key]) && Number.isFinite(Date.parse(body[key])), `${context}: invalid ${key}`);
    validDay(body[key].slice(0, 10), `${context}.${key}`);
    requireValue(body[key].slice(0, 10) <= raw.retrievedAt, `${context}: source timestamp is after retrieval`);
  }
  requireValue(raw.sha256 === hashPayload(body), `${context}: raw payload checksum mismatch`);
  const product = body.result;
  requireValue(product && product.name === context && product.category === "device", `${context}: wrong product identity/type`);
  requireValue(product.labels && /^Security (?:Updates|Support)$/.test(product.labels.eol), `${context}: security field meaning changed`);
  if (config.os) requireValue(["Android Updates", "Android Upgrades", "Active Major Updates"].includes(product.labels.eoas), `${context}: Android support field meaning changed`);
  else requireValue(product.labels.eoas === null, `${context}: new Android support meaning needs review`);
  requireValue(Array.isArray(product.releases) && product.releases.length > 0, `${context}: empty release list`);
  const ids = new Set();
  for (const release of product.releases) {
    requireValue(release && typeof release.name === "string" && /^[a-z0-9][a-z0-9+._-]*$/.test(release.name) && !ids.has(release.name), `${context}: invalid or duplicate release ID`);
    ids.add(release.name);
    const path = `${context}/${release.name}`;
    requireValue(typeof release.label === "string" && release.label.trim() && !/[\u0000-\u001f]/.test(release.label), `${path}: invalid model name`);
    validDay(release.releaseDate, `${path}.releaseDate`);
    for (const flag of ["isEol", "isMaintained", ...(config.os ? ["isEoas"] : [])]) requireValue(typeof release[flag] === "boolean", `${path}: invalid ${flag}`);
    for (const field of ["eolFrom", ...(config.os ? ["eoasFrom"] : [])]) {
      requireValue(release[field] === null || typeof release[field] === "string", `${path}: invalid ${field}`);
      if (release[field] !== null) {
        validDay(release[field], `${path}.${field}`);
        requireValue(release[field] >= release.releaseDate, `${path}.${field}: support end is before release`);
      }
    }
    if (config.os && release.eolFrom !== null && release.eoasFrom !== null) requireValue(release.eolFrom >= release.eoasFrom, `${path}: security end is before OS end`);
    requireValue(release.custom === null || (release.custom && typeof release.custom === "object" && !Array.isArray(release.custom)), `${path}: invalid custom fields`);
    for (const value of Object.values(release.custom ?? {})) requireValue(value === null || typeof value === "string", `${path}: invalid custom field value`);
  }
  return raw;
}

export async function fetchRawProducts({ now = new Date(), ...options } = {}) {
  const retrievedAt = todayIso(now);
  return mapWithConcurrency(PRODUCTS, async ({ product }) => {
    const url = `https://endoflife.date/api/v1/products/${product}`;
    const response = await fetchResource(url, options);
    requireValue(response.status === 200, `${product}: HTTP ${response.status}`);
    requireValue(/^application\/json(?:\s*;|$)/i.test(response.contentType), `${product}: expected JSON content type`);
    let body;
    try { body = JSON.parse(response.body); } catch { throw new Error(`${product}: malformed JSON response`); }
    return validateRawProduct({ product, url, retrievedAt, sha256: hashPayload(body), body });
  });
}

function parseOppoProductList(html) {
  const marker = "const producList = ";
  const markerAt = html.indexOf(marker);
  requireValue(markerAt >= 0, "oppo-uk: product list marker not found");
  const start = markerAt + marker.length;
  let depth = 0;
  let end = -1;
  let inString = false;
  let escaped = false;
  for (let index = start; index < html.length; index += 1) {
    const character = html[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === "[") depth += 1;
    else if (character === "]" && --depth === 0) { end = index + 1; break; }
  }
  requireValue(end > start, "oppo-uk: incomplete product list");
  let rows;
  try { rows = JSON.parse(html.slice(start, end)); }
  catch { throw new Error("oppo-uk: malformed product list"); }
  const normalized = rows.map(({ status, name, date }) => ({
    status: Number(status),
    name: typeof name === "string" ? name.normalize("NFKC").replace(/\s+/g, " ").trim() : name,
    endDate: typeof date === "string" ? date.split("/").map((part, index) => index === 0 ? part : part.padStart(2, "0")).join("-") : date,
  }));
  return [...new Map(normalized.map((record) => [`${record.status}/${normalizePhoneQuery(record.name)}/${record.endDate}`, record])).values()];
}

function htmlText(value) {
  return value.replace(/<br\s*\/?\s*>/gi, " ").replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ").replace(/&amp;/gi, "&")
    .normalize("NFKC").replace(/\s+/g, " ").trim();
}

function parseHonorFinlandSecurity(html) {
  const sections = [
    { cadence: "monthly", heading: "Mallit, joille julkaistaan tietoturvapäivityksiä kuukausittain" },
    { cadence: "bimonthly", heading: "Mallit, joille julkaistaan tietoturvapäivityksiä kahden kuukauden välein" },
    { cadence: "quarterly", heading: "Mallit, joille julkaistaan tietoturvapäivityksiä neljännesvuosittain" },
  ];
  const records = [];
  for (const [index, section] of sections.entries()) {
    const start = html.indexOf(section.heading);
    requireValue(start >= 0, `honor-fi-security: ${section.cadence} heading not found`);
    const next = index + 1 < sections.length ? html.indexOf(sections[index + 1].heading, start + section.heading.length) : html.indexOf("¹Mallit", start + section.heading.length);
    requireValue(next > start, `honor-fi-security: ${section.cadence} section is incomplete`);
    for (const match of html.slice(start, next).matchAll(/<p\b[^>]*class=["'][^"']*\bdes\b[^"']*["'][^>]*>([\s\S]*?)<\/p>/gi)) {
      const line = htmlText(match[1]);
      if (!/^HONOR\s+[^:]+-sarja:/i.test(line) || /^HONOR Pad-sarja:/i.test(line)) continue;
      const models = line.slice(line.indexOf(":") + 1).split(",").map((name) => htmlText(name));
      for (const name of models) {
        requireValue(/^HONOR\s+[A-Za-z0-9]/.test(name), `honor-fi-security: invalid phone name ${name}`);
        records.push({ name, cadence: section.cadence });
      }
    }
  }
  return [...new Map(records.map((record) => [normalizePhoneQuery(record.name), record])).values()];
}

function parseHonorAer(html) {
  const records = [];
  const rowPattern = /<div\b[^>]*class=["'][^"']*\btext1\b[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<div\b[^>]*class=["'][^"']*\btext2\b[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<div\b[^>]*class=["'][^"']*\btext3\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi;
  for (const match of html.matchAll(rowPattern)) {
    const name = htmlText(match[1]);
    if (!/^HONOR\s+/i.test(name)) continue;
    const security = htmlText(match[2]).match(/^(\d{2})\/(\d{4})\s+at least\s*[（(]([^）)]+)[）)]$/i);
    const osText = htmlText(match[3]);
    const shipped = osText.match(/Shipped version:\s*(\d+)/i);
    const future = osText.match(/Future version:\s*([\d&]+)\s+at least\s*[（(]([^）)]+)[）)]/i);
    requireValue(security && shipped && future, `honor-aer: unsupported record for ${name}`);
    records.push({
      name,
      securityMinimum: `${security[2]}-${security[1]}`,
      securityRegions: security[3].split(",").map((region) => region.trim()),
      shippedVersion: shipped[1],
      futureVersions: future[1].split("&"),
      osRegions: future[2].split(",").map((region) => region.trim()),
    });
  }
  return [...new Map(records.map((record) => [normalizePhoneQuery(record.name), record])).values()];
}

export function validateOfficialCatalog(snapshot) {
  const config = officialCatalogMap.get(snapshot?.catalog);
  requireValue(config, "Unknown official phone catalog");
  requireValue(snapshot.fetchUrl === config.fetchUrl && snapshot.sourceUrl === config.sourceUrl, `${config.catalog}: unexpected source URL`);
  validDay(snapshot.retrievedAt, `${config.catalog}.retrievedAt`);
  requireValue(snapshot.sha256 === hashPayload(snapshot.body), `${config.catalog}: snapshot checksum mismatch`);
  const records = snapshot.body?.records;
  requireValue(Array.isArray(records) && records.length > 0 && snapshot.body.count === records.length, `${config.catalog}: invalid record count`);
  const identities = new Set();
  for (const record of records) {
    requireValue(record && typeof record === "object" && !Array.isArray(record), `${config.catalog}: invalid record`);
    if (config.catalog === "xiaomi-family") {
      requireValue(["Xiaomi", "Redmi", "POCO"].includes(record.brand), `${config.catalog}: unexpected brand`);
      requireValue(typeof record.productName === "string" && record.productName.trim(), `${config.catalog}: invalid product name`);
      for (const field of ["launchTime", "eolTime"]) {
        requireValue(typeof record[field] === "string" && /^\d{4}-\d{2}-\d{2}T/.test(record[field]) && Number.isFinite(Date.parse(record[field])), `${config.catalog}: invalid ${field}`);
        validDay(record[field].slice(0, 10), `${config.catalog}.${field}`);
      }
      requireValue(record.launchTime.slice(0, 10) <= record.eolTime.slice(0, 10), `${config.catalog}: support ends before launch`);
    } else if (config.catalog === "oppo-uk") {
      requireValue([1, 2].includes(record.status), `${config.catalog}: invalid product type`);
      requireValue(typeof record.name === "string" && record.name.trim(), `${config.catalog}: invalid product name`);
      validDay(record.endDate, `${config.catalog}.endDate`);
    } else if (config.catalog === "honor-fi-security") {
      requireValue(typeof record.name === "string" && /^HONOR\s+/.test(record.name), `${config.catalog}: invalid product name`);
      requireValue(["monthly", "bimonthly", "quarterly"].includes(record.cadence), `${config.catalog}: invalid cadence`);
    } else if (config.catalog === "honor-aer") {
      requireValue(typeof record.name === "string" && /^HONOR\s+/i.test(record.name), `${config.catalog}: invalid product name`);
      validDay(`${record.securityMinimum}-01`, `${config.catalog}.securityMinimum`);
      requireValue(Array.isArray(record.securityRegions) && record.securityRegions.length > 0 && record.securityRegions.every((region) => typeof region === "string" && region.trim()), `${config.catalog}: invalid security regions`);
      requireValue(typeof record.shippedVersion === "string" && /^\d+$/.test(record.shippedVersion), `${config.catalog}: invalid shipped Android version`);
      requireValue(Array.isArray(record.futureVersions) && record.futureVersions.length > 0 && record.futureVersions.every((version) => typeof version === "string" && /^\d+$/.test(version)), `${config.catalog}: invalid future Android versions`);
      requireValue(Array.isArray(record.osRegions) && record.osRegions.length > 0 && record.osRegions.every((region) => typeof region === "string" && region.trim()), `${config.catalog}: invalid OS regions`);
    }
    const identity = config.catalog === "xiaomi-family" ? `${record.brand}/${normalizePhoneQuery(record.productName)}` :
      config.catalog === "oppo-uk" ? `${record.status}/${normalizePhoneQuery(record.name)}` : normalizePhoneQuery(record.name);
    requireValue(!identities.has(identity), `${config.catalog}: duplicate product identity`);
    identities.add(identity);
  }
  return snapshot;
}

const honorAerIdentity = (record) => normalizePhoneQuery(record.name);
const honorAerApplies = (regions) => regions.includes("Global") || regions.includes("Europe");
const retainedCount = (previous, next) => [...previous].filter((identity) => next.has(identity)).length;
const materiallyCollapsed = (previousCount, retained) => previousCount > 0 && previousCount - retained >= 3 && retained / previousCount < 0.6;

function honorAerEnrichmentIdentities(snapshots) {
  const finland = snapshots.find(({ catalog }) => catalog === "honor-fi-security");
  const aer = snapshots.find(({ catalog }) => catalog === "honor-aer");
  if (!finland || !aer) return new Set();
  const finlandNames = new Set(finland.body.records.map(({ name }) => normalizePhoneQuery(name)));
  return new Set(aer.body.records.filter((record) => finlandNames.has(honorAerIdentity(record)) &&
    (honorAerApplies(record.securityRegions) || honorAerApplies(record.osRegions))).map(honorAerIdentity));
}

/** Compare a fetched HONOR AER result with the last accepted local snapshots. */
export function honorAerCoverageRisks(previousSnapshots, nextSnapshots) {
  const previousAer = previousSnapshots.find(({ catalog }) => catalog === "honor-aer");
  const nextAer = nextSnapshots.find(({ catalog }) => catalog === "honor-aer");
  if (!previousAer || !nextAer) return [];
  const risks = [];
  const previousIdentities = new Set(previousAer.body.records.map(honorAerIdentity));
  const nextIdentities = new Set(nextAer.body.records.map(honorAerIdentity));
  const retainedIdentities = retainedCount(previousIdentities, nextIdentities);
  if (materiallyCollapsed(previousAer.body.count, nextAer.body.count)) {
    risks.push(`HONOR AER source coverage collapsed: parsed records fell from ${previousAer.body.count} to ${nextAer.body.count}. At least 60% must remain when three or more records disappear.`);
  }
  if (materiallyCollapsed(previousIdentities.size, retainedIdentities)) {
    risks.push(`HONOR AER identity coverage collapsed: retained ${retainedIdentities} of ${previousIdentities.size} previously accepted identities. At least 60% must remain when three or more identities disappear.`);
  }
  const previousEnrichment = honorAerEnrichmentIdentities(previousSnapshots);
  const nextEnrichment = honorAerEnrichmentIdentities(nextSnapshots);
  const retainedEnrichment = retainedCount(previousEnrichment, nextEnrichment);
  if (materiallyCollapsed(previousEnrichment.size, retainedEnrichment)) {
    risks.push(`HONOR AER Finland-list enrichment coverage collapsed: retained ${retainedEnrichment} of ${previousEnrichment.size} previously enriched phones. At least 60% must remain when three or more enrichments disappear.`);
  }
  return risks;
}

export async function fetchOfficialCatalogs({ now = new Date(), ...options } = {}) {
  const retrievedAt = todayIso(now);
  return mapWithConcurrency(OFFICIAL_CATALOGS, async (config) => {
    let body;
    if (config.catalog === "xiaomi-family") {
      const response = await fetchResource(config.fetchUrl, {
        ...options,
        method: "POST",
        body: JSON.stringify({ page: 1, pageSize: 1000 }),
        requestHeaders: { "content-type": "application/json" },
      });
      requireValue(response.status === 200, `${config.catalog}: HTTP ${response.status}`);
      requireValue(/^application\/json(?:\s*;|$)/i.test(response.contentType), `${config.catalog}: expected JSON content type`);
      let parsed;
      try { parsed = JSON.parse(response.body); } catch { throw new Error(`${config.catalog}: malformed JSON response`); }
      requireValue(Array.isArray(parsed?.data) && parsed.count === parsed.data.length, `${config.catalog}: incomplete paginated response`);
      body = {
        count: parsed.data.length,
        records: parsed.data.map(({ brand, productName, launchTime, eolTime }) => ({ brand, productName, launchTime, eolTime })),
      };
    } else if (config.catalog === "oppo-uk") {
      const response = await fetchResource(config.fetchUrl, { ...options, accept: "text/html,application/xhtml+xml" });
      requireValue(response.status === 200, `${config.catalog}: HTTP ${response.status}`);
      requireValue(/^text\/html(?:\s*;|$)/i.test(response.contentType), `${config.catalog}: expected HTML content type`);
      const records = parseOppoProductList(response.body);
      body = { count: records.length, records };
    } else {
      const response = await fetchResource(config.fetchUrl, { ...options, accept: "text/html,application/xhtml+xml" });
      requireValue(response.status === 200, `${config.catalog}: HTTP ${response.status}`);
      requireValue(/^text\/html(?:\s*;|$)/i.test(response.contentType), `${config.catalog}: expected HTML content type`);
      const records = config.catalog === "honor-fi-security" ? parseHonorFinlandSecurity(response.body) : parseHonorAer(response.body);
      body = { count: records.length, records };
    }
    return validateOfficialCatalog({ ...config, retrievedAt, sha256: hashPayload(body), body });
  });
}

export function exclusionReason(product, release, now) {
  if (release.releaseDate > todayIso(now)) return "Unreleased device with a future release date.";
  const name = release.name;
  const label = release.label.normalize("NFKC");
  if (product === "pixel" && name === "tablet") return "Pixel Tablet is a tablet.";
  if (product === "oneplus" && /^pad\d*$/.test(name)) return "OnePlus Pad is a tablet.";
  if (product === "samsung-mobile") {
    if (/(?:^|-)gear(?:-|$)/.test(name)) return "Samsung Gear is a watch.";
    if (/^z[1-4](?:-|$)/.test(name)) return "Samsung Z series uses Tizen, not Android.";
    if (/^ativ(?:-|$)/.test(name)) return "Samsung ATIV uses Windows, not Android.";
    if (/^galaxy-note-pro-12\.2/.test(name) || name === "galaxy-j-max" || ["galaxy-view", "galaxy-view2"].includes(name)) return "Samsung tablet, outside Android phone scope.";
    if (name === "galaxy-s5-octa-core") return "Duplicate of galaxy-s5: upstream uses the same SM-G900H/XXV source and support dates. The retained Galaxy S5 record is explicitly scoped to that variant.";
  }
  if (/\b(?:tablet|watch|laptop|buds|headphones|accessory)\b/i.test(label)) return "Not an Android phone.";
  const recognizable = {
    pixel: /^Pixel(?:\s|$)/i,
    "samsung-mobile": /^(?:Galaxy |W\d|[IG]\d+\w*\s+Galaxy)/i,
    oneplus: /^(?:OnePlus )?\d+[a-z]?(?:\s|$)/i,
    "motorola-mobility": /^(?:Motorola|Moto|ThinkPhone|Razr)(?:\s|$)/i,
    fairphone: /^Fairphone \d/i,
    "sony-xperia": /^Xperia /i,
  }[product];
  return recognizable?.test(label) ? null : "The source name does not confidently identify a phone in this product family.";
}

const unknown = (checkedAt, sourceIds = [], note) => ({ evidenceType: "unknown", sourceIds, checkedAt, ...(note ? { note } : {}) });
const unknownDate = (checkedAt, sourceIds = [], note) => ({ value: null, precision: "unknown", ...unknown(checkedAt, sourceIds, note) });
const evidence = (checkedAt, sourceId) => ({ evidenceType: "secondary-dataset", sourceIds: [sourceId], checkedAt });
function secondaryDate(value, precision, checkedAt, sourceId) {
  if (!value || precision === "unknown") return unknownDate(checkedAt, [sourceId]);
  return { value: value.slice(0, { year: 4, month: 7, day: 10 }[precision]), precision, ...evidence(checkedAt, sourceId) };
}

function secondarySupport(value, precision, checkedAt, sourceId) {
  const end = secondaryDate(value, precision, checkedAt, sourceId);
  const bounds = dateBounds(end);
  return {
    state: bounds ? { value: bounds.end < checkedAt ? "ended" : "active", ...evidence(checkedAt, sourceId) } :
      { value: "unknown", ...unknown(checkedAt, [sourceId], "The secondary dataset does not establish a reliable current support state without a documented endpoint.") },
    end,
  };
}

function modelName(config, release) {
  let label = release.label.normalize("NFKC").replace(/\s+/g, " ").trim();
  if (config.product === "pixel") return `Google ${label}`;
  if (config.product === "samsung-mobile") {
    if (release.name === "galaxy-s20-fe") label = "Galaxy S20 FE (2022, South Korea)";
    if (release.name === "galaxy-s5") label = "Galaxy S5 (SM-G900H)";
    return `Samsung ${label}`;
  }
  if (config.product === "oneplus") return /^OnePlus /i.test(label) ? label : `OnePlus ${label}`;
  if (config.product === "motorola-mobility") return /^Motorola /i.test(label) ? label : `Motorola ${label.replace(/^moto\s/i, "Moto ")}`;
  if (config.product === "sony-xperia") return `Sony ${label}`;
  return label;
}

function releasePrecision(config, release) {
  if (config.product === "motorola-mobility") return "month";
  if (["samsung-mobile", "fairphone", "sony-xperia"].includes(config.product) && release.releaseDate.endsWith("-01")) return "month";
  return "day";
}

function mergeAnnotations(documents, rawProducts) {
  const sources = [];
  const annotations = new Map();
  const exclusions = new Map();
  const honorPolicies = new Map();
  const honorPolicySourceIds = new Set();
  const commitmentReviews = new Map();
  const rawIds = new Set(rawProducts.flatMap(({ product, body }) => body.result.releases.map(({ name }) => `${product}/${name}`)));
  for (const document of documents) {
    requireValue(document && Array.isArray(document.sources) && Array.isArray(document.annotations), "Malformed official annotations document");
    sources.push(...document.sources);
    for (const annotation of document.annotations) {
      const key = `${annotation.product}/${annotation.cycle}`;
      requireValue(rawIds.has(key) && !annotations.has(key), `Unknown or duplicate annotation: ${key}`);
      for (const [field, value] of Object.entries(annotation.reviewedRawValues ?? {})) {
        requireValue(Object.hasOwn(rawClaimFields, field), `${key}: unknown reviewed raw field ${field}`);
        if (value !== null) validDay(value, `${key}.reviewedRawValues.${field}`);
      }
      for (const conflict of annotation.conflicts ?? []) {
        if (conflict.resolved && conflict.sourceIds?.includes(`eol-${annotation.product}`)) requireValue(Object.hasOwn(annotation.reviewedRawValues ?? {}, conflict.field), `${key}: resolved secondary conflict requires a reviewed raw value`);
      }
      annotations.set(key, annotation);
    }
    for (const excluded of document.exclusions ?? []) {
      const key = `${excluded.product}/${excluded.cycle}`;
      requireValue(productMap.has(excluded.product) && typeof excluded.reason === "string" && excluded.reason.trim() && !exclusions.has(key), `Invalid or duplicate reviewed exclusion: ${key}`);
      exclusions.set(key, excluded.reason);
    }
    for (const policy of document.honorPolicies ?? []) {
      const key = normalizePhoneQuery(policy.model);
      requireValue(key && policy.commitment && typeof policy.commitment === "object", "Invalid HONOR policy annotation");
      if (!honorPolicies.has(key)) honorPolicies.set(key, []);
      honorPolicies.get(key).push(policy);
      for (const id of [...(policy.state?.sourceIds ?? []), ...(policy.commitment.sourceIds ?? [])]) honorPolicySourceIds.add(id);
    }
    for (const review of document.commitmentReviews ?? []) {
      requireValue(typeof review.recordId === "string" && review.recordId && typeof review.checkedAt === "string" && typeof review.note === "string" && review.note.trim(), "Invalid Android commitment review");
      requireValue(!commitmentReviews.has(review.recordId), `Duplicate Android commitment review: ${review.recordId}`);
      commitmentReviews.set(review.recordId, review);
    }
  }
  return { sources, annotations, exclusions, honorPolicies, honorPolicySourceIds, commitmentReviews };
}

function applyAnnotation(record, annotation, release) {
  if (!annotation) return;
  record.conflicts.push(...structuredClone(annotation.conflicts ?? []));
  const override = (field, previous, next) => {
    const hasReviewedValue = Object.hasOwn(annotation.reviewedRawValues ?? {}, field);
    const rawChanged = hasReviewedValue && annotation.reviewedRawValues[field] !== release[rawClaimFields[field]];
    if (rawChanged) {
      record.conflicts = record.conflicts.filter((conflict) => conflict.field !== field || !conflict.resolved);
      record.conflicts.push({
        field, sourceIds: [...new Set([...previous.sourceIds, ...next.sourceIds])], resolved: false,
        message: `The API value for this reviewed comparison changed from ${annotation.reviewedRawValues[field]} to ${release[rawClaimFields[field]]}. The saved official decision does not cover this new value; both sources require review.`,
      });
    }
    if (previous.value !== null && previous.value !== "unknown" && (next.value === null || next.value === "unknown")) {
      requireValue(typeof next.note === "string" && next.note.trim(), `${record.id} ${field}: suppressing a known secondary fact requires a reviewed explanation`);
    }
    const priorDate = previous.precision ? dateBounds(previous) : null;
    const nextDate = next.precision ? dateBounds(next) : null;
    const differentDates = priorDate && nextDate && (priorDate.end < nextDate.start || nextDate.end < priorDate.start);
    const differentStates = !previous.precision && ["active", "ended"].includes(previous.value) && ["active", "ended"].includes(next.value) && previous.value !== next.value;
    if ((differentDates || differentStates) && !record.conflicts.some((conflict) => conflict.field === field)) {
      const freshOfficial = (next.evidenceType.startsWith("official-") || next.evidenceType === "derived-from-policy") && (next.checkedAt >= previous.checkedAt || hasReviewedValue);
      record.conflicts.push({
        field, sourceIds: [...new Set([...previous.sourceIds, ...next.sourceIds])], resolved: freshOfficial,
        message: freshOfficial ?
          `The secondary value (${previous.value}) differs from the reviewed official value (${next.value}). Current official evidence takes priority; the secondary value remains in the raw snapshot.` :
          `The newly retrieved secondary value (${previous.value}) differs from older reviewed evidence (${next.value}). A source review is required before publishing a confident result.`,
      });
    }
    return structuredClone(next);
  };
  if (annotation.release) record.release = override("release", record.release, annotation.release);
  for (const field of ["os", "security"]) {
    if (annotation[field]?.state) record[field].state = override(`${field}.state`, record[field].state, annotation[field].state);
    if (annotation[field]?.end) record[field].end = override(`${field}.end`, record[field].end, annotation[field].end);
  }
  if (annotation.os?.commitments) record.os.commitments = structuredClone(annotation.os.commitments);
  if (annotation.cadence) record.cadence = structuredClone(annotation.cadence);
  record.caveats.push(...(annotation.caveats ?? []));
}

function oneYearAgo(today) {
  const [year, month, day] = today.split("-").map(Number);
  const lastDay = new Date(Date.UTC(year - 1, month, 0)).getUTCDate();
  return `${year - 1}-${String(month).padStart(2, "0")}-${String(Math.min(day, lastDay)).padStart(2, "0")}`;
}

function phoneId(value) {
  return value.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase()
    .replace(/\+/g, "-plus-").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function officialAliases(model, brand, parent = "") {
  const spaced = model.replace(/\b(Reno)\s*(\d)/gi, "$1 $2").replace(/\b([AFCMX])\s*(\d)/g, "$1 $2");
  const compact = model.replace(/\bReno\s+(\d)/gi, "Reno$1");
  return [...new Set([
    ...createAliases(model, brand),
    ...createAliases(spaced, brand),
    ...createAliases(compact, brand),
    ...(parent ? [normalizePhoneQuery(`${parent} ${model}`), normalizePhoneQuery(`${parent} ${spaced}`)] : []),
  ].filter(Boolean))].sort();
}

function honorAliases(model) {
  const variants = [
    model,
    model.replace(/\bMagic(\d)/, "Magic $1"),
    model.replace(/\bMagic V(\d)/, "Magic V $1"),
    model.replace(/\bX(\d)/, "X $1"),
  ];
  return [...new Set(variants.flatMap((variant) => createAliases(variant, "HONOR")))].filter(Boolean).sort();
}

function unknownSupport(checkedAt, sourceId, subject) {
  return {
    state: { value: "unknown", ...unknown(checkedAt, [sourceId], `The manufacturer registry does not establish the ${subject} support state for this record.`) },
    end: unknownDate(checkedAt, [sourceId], `The manufacturer registry does not publish a ${subject} support end date for this record.`),
    commitments: [],
  };
}

function officialSecurity(endDate, checkedAt, sourceId) {
  const claim = { value: endDate, precision: "day", evidenceType: "official-date", sourceIds: [sourceId], checkedAt };
  return {
    state: { value: endDate < checkedAt ? "ended" : "active", evidenceType: "official-date", sourceIds: [sourceId], checkedAt, note: "The displayed state follows the manufacturer's published security support end date." },
    end: claim,
  };
}

function normalizeOfficialCatalogs(snapshots, today, honorPolicies = new Map()) {
  if (!snapshots.length) return { sources: [], records: [], exclusions: [] };
  requireValue(snapshots.length === OFFICIAL_CATALOGS.length && new Set(snapshots.map(({ catalog }) => catalog)).size === OFFICIAL_CATALOGS.length, `A complete set of ${OFFICIAL_CATALOGS.length} official catalog snapshots is required`);
  snapshots.forEach(validateOfficialCatalog);
  const boundary = oneYearAgo(today);
  const sources = [];
  const records = [];
  const exclusions = [];
  const honorFinland = snapshots.find(({ catalog }) => catalog === "honor-fi-security");
  const honorAer = snapshots.find(({ catalog }) => catalog === "honor-aer");
  const honorFinlandNames = new Set((honorFinland?.body.records ?? []).map(({ name }) => normalizePhoneQuery(name)));
  const honorAerByName = new Map((honorAer?.body.records ?? []).map((record) => [normalizePhoneQuery(record.name), record]));
  const europeApplies = (regions) => regions.includes("Global") || regions.includes("Europe");

  for (const snapshot of snapshots) {
    const config = officialCatalogMap.get(snapshot.catalog);
    const sourceDetails = {
      "xiaomi-family": { publisher: "Xiaomi", title: "Product Software Support Information" },
      "oppo-uk": { publisher: "OPPO", title: "Product Security Update Period" },
      "honor-fi-security": { publisher: "HONOR Finland", title: "MagicOS/Magic UI security updates" },
      "honor-aer": { publisher: "HONOR", title: "Android Enterprise Recommended Device List" },
    }[snapshot.catalog];
    sources.push({
      id: config.sourceId,
      publisher: sourceDetails.publisher,
      title: sourceDetails.title,
      url: config.sourceUrl,
      checkedAt: snapshot.retrievedAt,
      retrievedAt: snapshot.retrievedAt,
      kind: "official",
    });
    for (const item of snapshot.body.records) {
      if (snapshot.catalog === "xiaomi-family") {
        const rawName = item.productName.normalize("NFKC").replace(/\s+/g, " ").trim();
        const brandId = item.brand.toLowerCase();
        const model = rawName.replace(/^REDMI\b/, "Redmi").replace(/^MI\b/, "Mi").replace(/^POCO\b/i, "POCO");
        const id = `xiaomi-support-${brandId}-${phoneId(model)}`;
        let reason = "";
        if (/\bpad\b|tablet/i.test(model)) reason = "Tablet, outside Android phone scope.";
        else if (/Leica Leitzphone/i.test(model)) reason = "Co-branded model whose consumer-facing brand destination is not established clearly enough for this catalog.";
        else if (item.launchTime.slice(0, 10) > today) reason = "Unreleased device with a future launch date.";
        else if (item.eolTime.slice(0, 10) < boundary) reason = "Security support ended more than 12 months before the dataset review date.";
        if (reason) { exclusions.push({ product: snapshot.catalog, cycle: `${item.brand}/${rawName}`, id, reason }); continue; }
        const sourceId = config.sourceId;
        records.push({
          id, brandId, brand: item.brand, model,
          aliases: officialAliases(model, item.brand, item.brand === "Xiaomi" ? "Mi" : "Xiaomi"),
          searchTerms: [...new Set([rawName, item.brand, "Xiaomi", ...(item.brand === "Xiaomi" ? ["Mi"] : [])])],
          deviceType: "phone",
          release: { value: item.launchTime.slice(0, 10), precision: "day", evidenceType: "official-date", sourceIds: [sourceId], checkedAt: snapshot.retrievedAt },
          os: unknownSupport(snapshot.retrievedAt, sourceId, "Android version"),
          security: officialSecurity(item.eolTime.slice(0, 10), snapshot.retrievedAt, sourceId),
          cadence: { value: "unknown", ...unknown(snapshot.retrievedAt, [sourceId], "The manufacturer registry does not publish a security update frequency for this record.") },
          caveats: [OFFICIAL_BRANDS.find(({ id: candidate }) => candidate === brandId).caveat],
          reviewedAt: today,
          sourceRevision: `${snapshot.catalog}:sha256:${snapshot.sha256}`,
          conflicts: [],
        });
      } else if (snapshot.catalog === "oppo-uk") {
        const rawName = item.name.normalize("NFKC").replace(/\s+/g, " ").trim();
        const normalizedName = /^A5\(/i.test(rawName) ? "A5" : rawName;
        const model = /^OPPO\b/i.test(normalizedName) ? normalizedName.replace(/^oppo\b/i, "OPPO") : `OPPO ${normalizedName}`;
        const id = `oppo-uk-${phoneId(model)}`;
        let reason = "";
        if (item.status !== 1) reason = "Not a smartphone in the manufacturer's support-period register.";
        else if (item.endDate < boundary) reason = "Security support ended more than 12 months before the dataset review date.";
        if (reason) { exclusions.push({ product: snapshot.catalog, cycle: rawName, id, reason }); continue; }
        const sourceId = config.sourceId;
        const caveats = [OFFICIAL_BRANDS.find(({ id: candidate }) => candidate === "oppo").caveat];
        if (normalizedName !== rawName) caveats.push("The official UK register groups the 4+128 GB and 6+128 GB configurations under one OPPO A5 support record.");
        records.push({
          id, brandId: "oppo", brand: "OPPO", model,
          aliases: officialAliases(model, "OPPO"),
          searchTerms: [...new Set([rawName, normalizedName, "OPPO"])],
          deviceType: "phone",
          release: unknownDate(snapshot.retrievedAt, [sourceId], "The UK support-period register does not publish a release date for this model."),
          os: unknownSupport(snapshot.retrievedAt, sourceId, "Android version"),
          security: officialSecurity(item.endDate, snapshot.retrievedAt, sourceId),
          cadence: { value: "unknown", ...unknown(snapshot.retrievedAt, [sourceId], "The UK support-period register does not publish a security update frequency for this model.") },
          caveats,
          reviewedAt: today,
          sourceRevision: `${snapshot.catalog}:sha256:${snapshot.sha256}`,
          conflicts: [],
        });
      } else if (snapshot.catalog === "honor-fi-security") {
        const model = item.name.normalize("NFKC").replace(/\s+/g, " ").trim();
        const id = `honor-fi-${phoneId(model)}`;
        const sourceId = config.sourceId;
        const aer = honorAerByName.get(normalizePhoneQuery(model));
        const securityAer = aer && europeApplies(aer.securityRegions) ? aer : null;
        const osAer = aer && europeApplies(aer.osRegions) ? aer : null;
        const securitySourceIds = [sourceId, ...(securityAer ? [officialCatalogMap.get("honor-aer").sourceId] : [])];
        const osSourceIds = osAer ? [officialCatalogMap.get("honor-aer").sourceId] : [sourceId];
        const aerCheckedAt = honorAer?.retrievedAt ?? snapshot.retrievedAt;
        const securityCheckedAt = securityAer ? [snapshot.retrievedAt, aerCheckedAt].sort().at(-1) : snapshot.retrievedAt;
        const regionText = (regions) => regions.join(", ");
        const minimumText = securityAer ? formatDate({ value: securityAer.securityMinimum, precision: "month" }) : "";
        const cadenceText = { monthly: "monthly security updates", bimonthly: "security updates every two months", quarterly: "quarterly security updates" }[item.cadence];
        const caveats = [OFFICIAL_BRANDS.find(({ id: candidate }) => candidate === "honor").caveat];
        const reviewedPolicies = honorPolicies.get(normalizePhoneQuery(model)) ?? [];
        const policyCommitments = reviewedPolicies.map(({ commitment }) => structuredClone(commitment));
        const statePolicy = reviewedPolicies.find(({ state }) => state);
        if (aer && (!securityAer || !osAer)) caveats.push("The matching Android Enterprise Recommended entry is not applied outside the regions it names.");
        if (securityAer) caveats.push(`HONOR's Android Enterprise Recommended entry applies to ${regionText(securityAer.securityRegions)}. It states minimum support, not a confirmed end date.`);
        records.push({
          id, brandId: "honor", brand: "HONOR", model,
          aliases: honorAliases(model),
          searchTerms: [...new Set([model, model.replace(/\bMagic(\d)/, "Magic $1"), model.replace(/\bMagic V(\d)/, "Magic V $1"), "HONOR"])],
          deviceType: "phone",
          release: unknownDate(snapshot.retrievedAt, [sourceId], "The Finland security-update list does not publish a release date for this model."),
          os: {
            state: { value: "unknown", ...unknown(osAer ? aerCheckedAt : snapshot.retrievedAt, osSourceIds, osAer ?
              `HONOR lists Android ${osAer.shippedVersion} as shipped and Android ${osAer.futureVersions.join(" and ")} as future versions at least for ${regionText(osAer.osRegions)}. The page does not establish whether version upgrades remain active on the review date.` :
              "The Finland security-update list does not establish Android version support for this model.") },
            end: unknownDate(osAer ? aerCheckedAt : snapshot.retrievedAt, osSourceIds, osAer ?
              "HONOR publishes version commitments for this Android Enterprise Recommended entry, not a calendar Android support end date." :
              "The Finland security-update list does not publish an Android support end date for this model."),
            commitments: [
              ...(osAer ? [{
                activity: "unknown",
                scope: regionText(osAer.osRegions),
                promise: `Android ${osAer.futureVersions.join(" and ")} ${osAer.futureVersions.length === 1 ? "is" : "are"} named as ${osAer.futureVersions.length === 1 ? "a future version" : "future versions"}.`,
                minimum: true,
                shippedVersion: osAer.shippedVersion,
                futureVersions: [...osAer.futureVersions],
                evidenceType: "official-policy",
                sourceIds: [officialCatalogMap.get("honor-aer").sourceId],
                checkedAt: aerCheckedAt,
                note: "The AER entry states a minimum version commitment. It does not establish current activity or a calendar endpoint.",
              }] : []),
              ...policyCommitments,
            ],
          },
          security: {
            state: { value: "active", evidenceType: "official-current-list", sourceIds: [sourceId], checkedAt: snapshot.retrievedAt, note: "The model appears on HONOR's current Finland security-update list." },
            end: unknownDate(securityCheckedAt, securitySourceIds, securityAer ?
              `HONOR publishes security support through at least ${minimumText} for ${regionText(securityAer.securityRegions)}. This is a minimum, not a confirmed end date.` :
              "HONOR's Finland list establishes current security support but does not publish an end date for this model."),
          },
          cadence: { value: item.cadence, evidenceType: "official-current-list", sourceIds: [sourceId], checkedAt: snapshot.retrievedAt, note: `HONOR's Finland bulletin lists this model for ${cadenceText}.` },
          caveats: [...new Set(caveats)],
          reviewedAt: today,
          sourceRevision: `${snapshot.catalog}:sha256:${snapshot.sha256}${aer ? `;honor-aer:sha256:${honorAer.sha256}` : ""}`,
          conflicts: [],
        });
        if (statePolicy) {
          const record = records.at(-1);
          record.os.state = structuredClone(statePolicy.state);
          record.os.end = unknownDate(statePolicy.state.checkedAt, statePolicy.state.sourceIds, "The official Android policy does not publish an exact calendar endpoint for this model.");
        }
      } else {
        const normalizedName = normalizePhoneQuery(item.name);
        const isPhone = !/\b(?:magic)?pad(?:\s|\d)/i.test(item.name);
        const supportsEurope = europeApplies(item.securityRegions) && europeApplies(item.osRegions);
        if (!isPhone) exclusions.push({ product: snapshot.catalog, cycle: item.name, reason: "Tablet, outside Android phone scope." });
        else if (!supportsEurope) exclusions.push({ product: snapshot.catalog, cycle: item.name, reason: "The official support entry does not cover Europe." });
        else if (!honorFinlandNames.has(normalizedName)) exclusions.push({ product: snapshot.catalog, cycle: item.name, reason: "The model is not on HONOR's current Finland security-update list." });
      }
    }
  }
  return { sources, records, exclusions };
}

/** Normalize only validated snapshots. Official annotations never disappear into raw values. */
export function normalizeRawProducts(rawProducts, documents, { officialCatalogs = [], now = new Date() } = {}) {
  const today = todayIso(now);
  requireValue(rawProducts.length === PRODUCTS.length && new Set(rawProducts.map(({ product }) => product)).size === PRODUCTS.length, `A complete set of ${PRODUCTS.length} secondary product snapshots is required`);
  rawProducts.forEach(validateRawProduct);
  const reviewed = mergeAnnotations(documents, rawProducts);
  const sources = [...reviewed.sources];
  const records = [];
  const excluded = [];
  for (const raw of rawProducts) {
    const config = productMap.get(raw.product);
    const sourceId = `eol-${raw.product}`;
    sources.push({ id: sourceId, publisher: "endoflife.date", title: `${config.title} lifecycle dataset`, url: `https://endoflife.date/${raw.product}`, checkedAt: raw.retrievedAt, retrievedAt: raw.retrievedAt, kind: "secondary" });
    for (const release of raw.body.result.releases) {
      const key = `${raw.product}/${release.name}`;
      const reason = reviewed.exclusions.get(key) ?? exclusionReason(raw.product, release, today);
      if (reason) { excluded.push({ product: raw.product, cycle: release.name, reason }); continue; }
      const model = modelName(config, release);
      const record = {
        id: `${raw.product}-${release.name}`, brandId: config.brandId, brand: config.brand, model,
        aliases: createAliases(model, config.brand),
        searchTerms: [...new Set([release.label.normalize("NFKC"), release.name, config.title])],
        deviceType: "phone",
        release: secondaryDate(release.releaseDate, releasePrecision(config, release), raw.retrievedAt, sourceId),
        os: { ...secondarySupport(config.os ? release.eoasFrom : null, config.osPrecision ?? "unknown", raw.retrievedAt, sourceId), commitments: [] },
        security: secondarySupport(release.eolFrom, config.securityPrecision, raw.retrievedAt, sourceId),
        cadence: { value: "unknown", ...unknown(raw.retrievedAt, [], "No update cadence is supplied by the lifecycle API.") },
        caveats: [config.caveat], reviewedAt: today,
        sourceRevision: `${raw.product}:v${raw.body.schema_version}:${raw.body.last_modified}:sha256:${raw.sha256}`,
        conflicts: [],
      };
      if (raw.product === "oneplus") record.os.end.note = "The secondary OS date estimates calendar years from an Android upgrade count. It is not published as a reliable end date.";
      if (raw.product === "samsung-mobile" && release.name === "galaxy-s20-fe") record.caveats.push("This record describes the 2022 South Korean edition, not the international 2020 Galaxy S20 FE.");
      if (raw.product === "samsung-mobile" && release.name === "galaxy-s5") record.caveats.push("This secondary record is scoped to SM-G900H/XXV. The duplicate octa-core entry uses the same source; other Galaxy S5 variants can differ.");
      if (raw.product === "samsung-mobile" && /^w\d/.test(release.name)) record.caveats.push("The Samsung W series is a regional model family. Do not apply these claims to a similarly named Galaxy Z Fold or Z Flip.");
      applyAnnotation(record, reviewed.annotations.get(key), release);
      record.caveats = [...new Set(record.caveats)];
      records.push(record);
    }
  }
  const official = normalizeOfficialCatalogs(officialCatalogs, today, reviewed.honorPolicies);
  sources.push(...official.sources);
  records.push(...official.records);
  excluded.push(...official.exclusions);
  const baseOwners = new Map();
  for (const record of records) {
    for (const alias of new Set([normalizePhoneQuery(record.model), ...record.aliases])) {
      if (!baseOwners.has(alias)) baseOwners.set(alias, new Set());
      baseOwners.get(alias).add(record.id);
    }
  }
  const aliasOwners = new Map();
  const aliasResolutions = [];
  for (const record of records) {
    const candidates = [...record.aliases];
    for (const alias of record.aliases) {
      if (!/\b5g\b/.test(alias)) continue;
      const shorter = alias.replace(/\b5g\b/g, "").replace(/\s+/g, " ").trim();
      const owners = baseOwners.get(shorter);
      if (owners && [...owners].some((id) => id !== record.id)) {
        aliasResolutions.push({ alias: shorter, ids: [...new Set([...owners, record.id])].sort(), reason: "A 5G-free alias was not added because it would identify a different phone. Original qualifiers are retained." });
      } else candidates.push(shorter);
    }
    record.aliases = [...new Set(candidates)].filter(Boolean).sort();
    for (const alias of new Set([normalizePhoneQuery(record.model), ...record.aliases])) {
      if (!aliasOwners.has(alias)) aliasOwners.set(alias, new Set());
      aliasOwners.get(alias).add(record.id);
    }
  }
  for (const [alias, owners] of aliasOwners) {
    if (owners.size < 2) continue;
    aliasResolutions.push({ alias, ids: [...owners].sort(), reason: "Ambiguous broad alias removed from all matching records; distinct identities retained." });
    for (const record of records) if (owners.has(record.id)) record.aliases = record.aliases.filter((value) => value !== alias);
  }
  records.sort((a, b) => a.id.localeCompare(b.id, "en"));
  const used = new Set(records.flatMap(sourceIdsFor));
  for (const source of reviewed.sources) requireValue(used.has(source.id) || (!officialCatalogs.length && reviewed.honorPolicySourceIds.has(source.id)), `Unused reviewed source: ${source.id}`);
  const dataset = {
    version: "1", generatedAt: now instanceof Date ? now.toISOString() : `${today}T00:00:00.000Z`, reviewedAt: today,
    attribution: { name: "endoflife.date", url: "https://endoflife.date/", license: "MIT", licenseUrl: "https://github.com/endoflife-date/endoflife.date/blob/master/LICENSE", notice: licenseNotice },
    brands: [
      ...PRODUCTS.map(({ brandId, brand, title, caveat }) => ({ id: brandId, name: brand, description: `Find documented Android version and security support information for ${title} phones.`, caveat })),
      ...(officialCatalogs.length ? OFFICIAL_BRANDS.map(({ id, name, title, caveat }) => ({ id, name, description: `Find documented Android version and security support information for ${title} phones.`, caveat })) : []),
    ].sort((a, b) => a.name.localeCompare(b.name, "en")),
    sources: sources.filter(({ id }) => used.has(id)).sort((a, b) => a.id.localeCompare(b.id, "en")),
    records,
  };
  validateDataset(dataset, { now: today });
  return { dataset, exclusions: excluded, aliasResolutions };
}

const claimPaths = ["release", "os.state", "os.end", "security.state", "security.end", "cadence"];
const atPath = (value, path) => path.split(".").reduce((item, key) => item?.[key], value);
const strength = { unknown: 0, "secondary-dataset": 1, "derived-from-policy": 2, "official-policy": 3, "official-current-list": 3, "official-date": 4 };
const semanticClaim = ({ checkedAt, ...claim }) => claim;
const semanticCommitment = ({ checkedAt, note, ...commitment }) => ({ ...commitment, sourceIds: [...commitment.sourceIds].sort() });
const commitmentSignature = (commitment) => JSON.stringify(semanticCommitment(commitment));
const materialCommitmentSignature = ({ checkedAt, note, promise, ...commitment }) => JSON.stringify({ ...commitment, sourceIds: [...commitment.sourceIds].sort() });

export function diffDatasets(previous, next, documents = [], exclusions = []) {
  const before = new Map((previous?.records ?? []).map((record) => [record.id, record]));
  const after = new Map(next.records.map((record) => [record.id, record]));
  const changes = { added: [], removed: [], changed: [], risks: [], precisionChanges: [], commitmentChanges: [], sourceChanges: [], sourceRevisions: [] };
  const annotations = new Map(documents.flatMap(({ annotations = [] }) => annotations).map((annotation) => [`${annotation.product}-${annotation.cycle}`, annotation]));
  const reviewedExclusions = new Set([
    ...documents.flatMap(({ exclusions = [] }) => exclusions).map(({ product, cycle }) => `${product}-${cycle}`),
    ...exclusions.map(({ id }) => id).filter(Boolean),
  ]);
  const commitmentReviews = new Map(documents.flatMap(({ commitmentReviews = [] }) => commitmentReviews).map((review) => [review.recordId, review]));
  for (const [id, record] of after) {
    const old = before.get(id);
    if (!old) { changes.added.push(id); continue; }
    const fields = [];
    for (const field of claimPaths) {
      const oldClaim = atPath(old, field), newClaim = atPath(record, field);
      if (JSON.stringify(semanticClaim(oldClaim)) !== JSON.stringify(semanticClaim(newClaim))) fields.push(field);
      if (strength[newClaim.evidenceType] < strength[oldClaim.evidenceType]) changes.risks.push(`${id} ${field}: evidence downgrade ${oldClaim.evidenceType} -> ${newClaim.evidenceType}`);
      if (oldClaim.precision && oldClaim.precision !== newClaim.precision) {
        const detail = `${id} ${field}: precision ${oldClaim.precision} -> ${newClaim.precision}`;
        changes.precisionChanges.push(detail);
        const reviewed = atPath(annotations.get(id), field);
        if (!reviewed || reviewed.checkedAt < next.reviewedAt || !reviewed.note) changes.risks.push(`${detail}; current explicit reviewed annotation required`);
      }
    }
    const oldCommitments = old.os.commitments ?? [];
    const newCommitments = record.os.commitments ?? [];
    const oldSignatures = new Set(oldCommitments.map(commitmentSignature));
    const newSignatures = new Set(newCommitments.map(commitmentSignature));
    if (oldSignatures.size !== newSignatures.size || [...oldSignatures].some((value) => !newSignatures.has(value))) {
      fields.push("os.commitments");
      const detail = `${id} os.commitments: ${oldCommitments.length} -> ${newCommitments.length}; scopes ${oldCommitments.map(({ scope }) => scope).join(" | ") || "none"} -> ${newCommitments.map(({ scope }) => scope).join(" | ") || "none"}`;
      changes.commitmentChanges.push(detail);
      const oldMaterial = new Set(oldCommitments.map(materialCommitmentSignature));
      const newMaterial = new Set(newCommitments.map(materialCommitmentSignature));
      const removesEstablishedCommitment = [...oldMaterial].some((value) => !newMaterial.has(value));
      if (removesEstablishedCommitment) {
        const review = commitmentReviews.get(id);
        if (!review || review.checkedAt < next.reviewedAt || !review.note) changes.risks.push(`${detail}; current explicit reviewed commitment decision required`);
      }
    }
    for (const field of ["model", "aliases", "searchTerms", "caveats", "conflicts"]) if (JSON.stringify(old[field]) !== JSON.stringify(record[field])) fields.push(field);
    if (fields.length) changes.changed.push({ id, fields });
    const oldUnresolved = new Set(old.conflicts.filter(({ resolved }) => !resolved).map(({ field, message }) => `${field}:${message}`));
    for (const conflict of record.conflicts.filter(({ resolved }) => !resolved)) {
      if (!oldUnresolved.has(`${conflict.field}:${conflict.message}`)) changes.risks.push(`${id}: new unresolved ${conflict.field} conflict`);
    }
  }
  for (const id of before.keys()) {
    if (after.has(id)) continue;
    changes.removed.push(id);
    if (!reviewedExclusions.has(id)) changes.risks.push(`${id}: source removal requires a reviewed exclusion`);
  }
  const previousSources = new Map((previous?.sources ?? []).map((source) => [source.id, source]));
  for (const source of next.sources) {
    const old = previousSources.get(source.id);
    if (old && JSON.stringify(old) !== JSON.stringify(source)) changes.sourceChanges.push(source.id);
  }
  const revisionPairs = new Set();
  for (const [id, record] of after) {
    const old = before.get(id);
    if (!old || old.sourceRevision === record.sourceRevision) continue;
    const pair = `${old.sourceRevision}\0${record.sourceRevision}`;
    if (revisionPairs.has(pair)) continue;
    revisionPairs.add(pair);
    changes.sourceRevisions.push(`${record.sourceRevision.split(":")[0]}: ${old.sourceRevision} -> ${record.sourceRevision}`);
  }
  return changes;
}

export function formatUpdateReport(result, changes, { applied = false } = {}) {
  const { dataset, exclusions, aliasResolutions } = result;
  const counts = validateDataset(dataset).counts;
  const list = (items) => items.length ? items.map((item) => `- ${item}`).join("\n") : "None.";
  const conflicts = dataset.records.flatMap((record) => record.conflicts.map((conflict) => `${record.id}: ${conflict.field}, ${conflict.resolved ? "resolved" : "UNRESOLVED"}. ${conflict.message}`));
  return [
    "# Phone Support Checker data update", `\nReviewed: ${dataset.reviewedAt}. Mode: ${applied ? "applied" : "dry run"}.`,
    "\n## Coverage", ...dataset.brands.map((brand) => `- ${brand.name}: ${counts[brand.id]} phones.`),
    "\n## Changes", `Added: ${changes.added.length}. Removed: ${changes.removed.length}. Changed: ${changes.changed.length}.`,
    "\n### Added", list(changes.added), "\n### Removed", list(changes.removed), "\n### Changed", list(changes.changed.map(({ id, fields }) => `${id}: ${fields.join(", ")}`)),
    "\n### Precision changes", list(changes.precisionChanges), "\n### Android commitment changes", list(changes.commitmentChanges), "\n### Blocking risks", list(changes.risks),
    "\n### Source metadata changes", list(changes.sourceChanges), "\n### Raw source revision changes", list(changes.sourceRevisions),
    "\n## Excluded records", list(exclusions.map(({ product, cycle, reason }) => `${product}/${cycle}: ${reason}`)),
    "\n## Alias resolutions", list(aliasResolutions.map(({ alias, ids, reason }) => `${alias}: ${ids.join(", ")}. ${reason}`)),
    "\n## Evidence conflicts", list(conflicts),
    "\n## Source interpretation", "- API v1, schema 1.2.1 at initial review. Upstream still describes the API as beta.",
    "- The API drops source date precision and individual source links. Raw payloads are retained; official annotations carry separate field provenance.",
    "- Samsung secondary support dates are year estimates; Motorola dates are month estimates. Sony secondary security dates are month estimates.",
    "- OnePlus secondary OS dates convert upgrade counts into calendar years and are not published as reliable endpoints.",
    "- Xiaomi, Redmi and POCO records come from Xiaomi's official product software support registry. OPPO records come from its official UK support-period register.",
    "- HONOR records come from the current Finland security-update list. The Android Enterprise Recommended list adds minimum support and Android-version context only where its named region includes Europe or is Global.",
    "- HONOR's at-least dates are minimum commitments, not confirmed endpoints. Android commitments are stored separately from current activity and calendar endpoints and never produce a countdown or a calculated end date.",
    "- HONOR AER completeness is compared with the last accepted local source coverage. An update is blocked if three or more parsed records, known identities or Finland-list enrichments disappear and less than 60% of that prior coverage remains.",
    "- Official registry coverage includes supported phones and phones whose security support ended within the previous 12 months. Older history and non-phone products remain outside the public catalog.",
    "- A boolean without a reliable endpoint does not establish current support. Official current lists can establish an observed active state, never an invented end date.",
    "- Nokia/HMD is omitted because the available secondary record dates use generic model-family duration estimates, contrary to this feature's evidence requirements.",
    "- Normal builds and unit tests use committed local files only. This report does not claim that official sources were re-reviewed by the API update.",
    "\n## Sources", ...dataset.sources.map((source) => `- ${source.id}: ${source.publisher}, ${source.title}. Checked ${source.checkedAt}. ${source.url}`),
    "",
  ].join("\n");
}
