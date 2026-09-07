import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { normalizeRawProducts } from "./phone-support/import.mjs";
import { validateDataset } from "./phone-support/validate.mjs";
import { loadOfficialCatalogs, loadOfficialDocuments, loadRawProducts, repositoryRoot } from "./update-phone-support.mjs";

export async function checkPhoneSupport({ root = repositoryRoot, now = new Date() } = {}) {
  const dataset = JSON.parse(await readFile(path.join(root, "src/data/phoneSupport/catalog.json"), "utf8"));
  const summary = validateDataset(dataset, { now });
  const [rawProducts, documents, officialCatalogs] = await Promise.all([loadRawProducts(root), loadOfficialDocuments(root), loadOfficialCatalogs(root)]);
  const expected = normalizeRawProducts(rawProducts, documents, { officialCatalogs, now: new Date(dataset.generatedAt) }).dataset;
  if (JSON.stringify(expected) !== JSON.stringify(dataset)) throw new Error("Canonical phone snapshot differs from its committed raw sources and reviewed annotations. Run the intentional update command and review its report.");
  const notice = await readFile(path.join(root, "data/phone-support/NOTICE.txt"), "utf8");
  if (!notice.includes("Copyright 2020 endoflife.date contributors") || !notice.includes("Permission is hereby granted")) throw new Error("Missing endoflife.date MIT notice");
  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv.length > 2) throw new Error("Usage: node scripts/check-phone-support.mjs");
    const result = await checkPhoneSupport();
    console.log(`Validated ${result.count} phones and ${result.sourceCount} used sources entirely offline.`);
    for (const [brand, count] of Object.entries(result.counts)) console.log(`${brand}: ${count}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
