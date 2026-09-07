import snapshot from "./catalog.json" with { type: "json" };
import { buildPhoneSearchIndex } from "./search.mjs";

/** @type {import('./types').PhoneDataset} */
export const phoneDataset = snapshot;

export const phoneSupportPagePaths = [
  "/phone-support/",
  ...phoneDataset.brands.filter((brand) => phoneDataset.records.some((phone) => phone.brandId === brand.id))
    .map((brand) => `/phone-support/${brand.id}/`),
  "/phone-support/methodology/",
];

export const publicPhoneData = () => buildPhoneSearchIndex(phoneDataset);

const csvCell = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;

export function phoneDataCsv(dataset = publicPhoneData()) {
  const columns = ["dataset_version", "generated_at", "reviewed_at", "id", "brand", "model", "device_type",
    "release_date", "release_precision", "release_evidence", "release_sources",
    "os_state", "os_state_evidence", "os_state_sources", "os_end", "os_precision", "os_end_evidence", "os_end_sources", "os_commitments",
    "security_state", "security_state_evidence", "security_state_sources", "security_end", "security_precision", "security_end_evidence", "security_end_sources",
    "cadence", "cadence_checked_at", "cadence_evidence", "cadence_sources", "source_revision", "caveats", "conflicts", "attribution", "license", "license_notice"];
  const rows = dataset.records.map((phone) => [dataset.version, dataset.generatedAt, phone.reviewedAt, phone.id, phone.brand, phone.model, phone.deviceType,
    phone.release.value, phone.release.precision, phone.release.evidenceType, phone.release.sourceIds.join(";"),
    phone.os.state.value, phone.os.state.evidenceType, phone.os.state.sourceIds.join(";"), phone.os.end.value, phone.os.end.precision, phone.os.end.evidenceType, phone.os.end.sourceIds.join(";"), JSON.stringify(phone.os.commitments),
    phone.security.state.value, phone.security.state.evidenceType, phone.security.state.sourceIds.join(";"), phone.security.end.value, phone.security.end.precision, phone.security.end.evidenceType, phone.security.end.sourceIds.join(";"),
    phone.cadence.value, phone.cadence.checkedAt, phone.cadence.evidenceType, phone.cadence.sourceIds.join(";"), phone.sourceRevision,
    phone.caveats.join("; "), phone.conflicts.filter((conflict) => !conflict.resolved).map(({ message }) => message).join("; "),
    `${dataset.attribution.name}: ${dataset.attribution.url}`, dataset.attribution.licenseUrl, dataset.attribution.notice]);
  return [columns, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n") + "\r\n";
}
