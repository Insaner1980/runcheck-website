import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fetchResource, mapWithConcurrency } from "./phone-support/import.mjs";
import { sourceIdsFor, validateDataset, validateSources } from "./phone-support/validate.mjs";
import { repositoryRoot } from "./update-phone-support.mjs";
import { todayIso } from "../src/data/phoneSupport/support.mjs";

const softError = /(?:page|document) (?:was )?not found|the requested (?:page|url) (?:was|could) not be found|\berror\s*404\b|this page (?:isn't|is not) available/i;
const restrictedPage = /(?:access denied|verify (?:that )?you are human|just a moment|sign in|log in)/i;

/** Reachability is a separate check from reviewing whether a source supports a claim. */
export async function checkSource(source, { now = new Date(), ...network } = {}) {
  try {
    validateSources([source], todayIso(now));
    const host = new URL(source.url).hostname;
    const response = await fetchResource(source.url, {
      ...network, accept: "text/html,application/xhtml+xml,application/pdf,application/json;q=0.9",
      allowedHosts: [host, ...(source.allowedHosts ?? [])],
    });
    if ([401, 403, 429].includes(response.status) && source.allowRestricted) return { id: source.id, kind: "restricted", detail: `HTTP ${response.status}; automated access restricted, not re-verified` };
    if (response.status !== 200) return { id: source.id, kind: "error", detail: `HTTP ${response.status}` };
    if (!/^(?:text\/html|application\/(?:xhtml\+xml|pdf|json))(?:\s*;|$)/i.test(response.contentType)) return { id: source.id, kind: "error", detail: `Unexpected content type: ${response.contentType || "missing"}` };
    if (/application\/pdf/i.test(response.contentType)) {
      if (!response.body.startsWith("%PDF-")) return { id: source.id, kind: "error", detail: "Invalid PDF response" };
    } else if (/application\/json/i.test(response.contentType)) {
      try { JSON.parse(response.body); } catch { return { id: source.id, kind: "error", detail: "Malformed JSON source response" }; }
    } else {
      const identity = [
        response.body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1],
        response.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1],
      ].filter(Boolean).join(" ").replace(/<[^>]+>/g, " ");
      if (softError.test(identity) || (response.body.length < 10_000 && softError.test(response.body))) return { id: source.id, kind: "error", detail: "Soft 404/error page" };
      if (restrictedPage.test(identity)) return { id: source.id, kind: source.allowRestricted ? "restricted" : "error", detail: "Login or access challenge; source not re-verified" };
      if (!response.body.trim()) return { id: source.id, kind: "error", detail: "Empty source response" };
    }
    return { id: source.id, kind: "reachable", detail: response.url === source.url ? "HTTP 200" : `HTTP 200, accepted redirect to ${response.url}` };
  } catch (error) { return { id: source.id, kind: "error", detail: error.message }; }
}

export async function checkPhoneSupportSources(dataset, options = {}) {
  validateDataset(dataset, { now: options.now ?? new Date() });
  const results = await mapWithConcurrency(dataset.sources, (source) => checkSource(source, options));
  return results.map((result) => ({ ...result, affectedModels: dataset.records.filter((phone) => sourceIdsFor(phone).includes(result.id)).map(({ id }) => id) }));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv.length > 2) throw new Error("Usage: node scripts/check-phone-support-sources.mjs");
    const dataset = JSON.parse(await readFile(path.join(repositoryRoot, "src/data/phoneSupport/catalog.json"), "utf8"));
    const results = await checkPhoneSupportSources(dataset);
    for (const result of results) console.log(`${result.kind.toUpperCase()} ${result.id}: ${result.detail}${result.kind === "reachable" ? "" : ` (${result.affectedModels.length} affected phones)`}`);
    const count = (kind) => results.filter((result) => result.kind === kind).length;
    console.log(`Checked ${results.length} used sources: ${count("reachable")} reachable, ${count("restricted")} restricted, ${count("error")} failed.`);
    console.log("HTTP reachability does not re-verify individual lifecycle claims or update their reviewed dates. Review changed manufacturer content separately.");
    if (count("error")) process.exitCode = 1;
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
