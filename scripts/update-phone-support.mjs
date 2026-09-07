import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { OFFICIAL_CATALOGS, PRODUCTS, diffDatasets, fetchOfficialCatalogs, fetchRawProducts, formatUpdateReport, honorAerCoverageRisks, normalizeRawProducts } from "./phone-support/import.mjs";

export const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
export const officialFiles = ["pixel-oneplus-fairphone.json", "samsung-sony-motorola.json", "honor-android-policies.json"];
const json = async (file) => JSON.parse(await readFile(file, "utf8"));
const serialize = (value) => `${JSON.stringify(value, null, 2)}\n`;

export async function loadOfficialDocuments(root = repositoryRoot) {
  return Promise.all(officialFiles.map((file) => json(path.join(root, "data/phone-support/official", file))));
}

export async function loadRawProducts(root = repositoryRoot) {
  return Promise.all(PRODUCTS.map(({ product }) => json(path.join(root, "data/phone-support/raw", `${product}.json`))));
}

export async function loadOfficialCatalogs(root = repositoryRoot) {
  return Promise.all(OFFICIAL_CATALOGS.map(({ catalog }) => json(path.join(root, "data/phone-support/raw", `${catalog}.json`))));
}

async function existingOfficialCatalogs(root) {
  const loaded = await Promise.all(OFFICIAL_CATALOGS.map(async ({ catalog }) => {
    try { return await json(path.join(root, "data/phone-support/raw", `${catalog}.json`)); }
    catch (error) { if (error.code === "ENOENT") return null; throw error; }
  }));
  if (loaded.every((snapshot) => snapshot === null)) return [];
  if (loaded.some((snapshot) => snapshot === null)) throw new Error("The accepted official catalog snapshot set is incomplete.");
  return loaded;
}

async function existingCatalog(root) {
  try { return await json(path.join(root, "src/data/phoneSupport/catalog.json")); }
  catch (error) { if (error.code === "ENOENT") return null; throw error; }
}

async function atomicWrite(file, content) {
  await mkdir(path.dirname(file), { recursive: true });
  const temporary = `${file}.tmp-${process.pid}`;
  try {
    await writeFile(temporary, content, { encoding: "utf8", flag: "wx" });
    await rename(temporary, file);
  } finally {
    await unlink(temporary).catch((error) => { if (error.code !== "ENOENT") throw error; });
  }
}

/** The default dry run changes no file. Network and validation finish before any apply write. */
export async function runUpdate({ root = repositoryRoot, apply = false, now = new Date(), ...network } = {}) {
  const documents = await loadOfficialDocuments(root);
  const previous = await existingCatalog(root);
  const previousOfficialCatalogs = await existingOfficialCatalogs(root);
  const [rawProducts, officialCatalogs] = await Promise.all([
    fetchRawProducts({ now, ...network }),
    fetchOfficialCatalogs({ now, ...network }),
  ]);
  const result = normalizeRawProducts(rawProducts, documents, { officialCatalogs, now });
  const changes = diffDatasets(previous, result.dataset, documents, result.exclusions);
  changes.risks.push(...honorAerCoverageRisks(previousOfficialCatalogs, officialCatalogs));
  const previousOfficialByCatalog = new Map(previousOfficialCatalogs.map((snapshot) => [snapshot.catalog, snapshot]));
  for (const snapshot of officialCatalogs) {
    const prior = previousOfficialByCatalog.get(snapshot.catalog);
    if (prior && prior.sha256 !== snapshot.sha256) {
      changes.sourceRevisions.push(`${snapshot.catalog}: sha256:${prior.sha256} -> sha256:${snapshot.sha256}; records ${prior.body.count} -> ${snapshot.body.count}`);
    }
  }
  changes.sourceRevisions = [...new Set(changes.sourceRevisions)];
  const report = formatUpdateReport(result, changes, { applied: apply && changes.risks.length === 0 });
  if (apply && changes.risks.length > 0) {
    const error = new Error(`Apply refused: ${changes.risks.length} unreviewed or weaker-evidence changes. Review the report and official annotations.`);
    error.report = report;
    throw error;
  }
  if (apply) {
    // The public catalog is replaced last, after all complete source snapshots are safely written.
    for (const raw of rawProducts) await atomicWrite(path.join(root, "data/phone-support/raw", `${raw.product}.json`), serialize(raw));
    for (const snapshot of officialCatalogs) await atomicWrite(path.join(root, "data/phone-support/raw", `${snapshot.catalog}.json`), serialize(snapshot));
    await atomicWrite(path.join(root, "data/phone-support/update-report.md"), report);
    await atomicWrite(path.join(root, "src/data/phoneSupport/catalog.json"), serialize(result.dataset));
  }
  return { ...result, changes, report, applied: apply };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.some((argument) => argument !== "--apply") || new Set(args).size !== args.length) {
    console.error("Usage: node scripts/update-phone-support.mjs [--apply]");
    process.exitCode = 1;
  } else {
    try {
      const result = await runUpdate({ apply: args.includes("--apply") });
      console.log(result.report);
      console.log(result.applied ? "Validated phone support snapshot applied." : "Dry run complete. No files changed. Use --apply only after reviewing the changes.");
      if (result.changes.risks.length) process.exitCode = 1;
    } catch (error) {
      if (error.report) console.error(error.report);
      console.error(error.message);
      process.exitCode = 1;
    }
  }
}
