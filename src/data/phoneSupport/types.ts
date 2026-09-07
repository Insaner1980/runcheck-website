export type EvidenceType =
  | "official-date"
  | "official-policy"
  | "official-current-list"
  | "secondary-dataset"
  | "derived-from-policy"
  | "unknown";

export type DatePrecision = "day" | "month" | "year" | "ongoing" | "unknown";

export interface Evidence {
  evidenceType: EvidenceType;
  sourceIds: string[];
  checkedAt: string;
  note?: string;
}

export interface DateClaim extends Evidence {
  value: string | null;
  precision: DatePrecision;
}

export interface StateClaim extends Evidence {
  value: "active" | "ended" | "unknown" | "conflict";
}

export interface SupportClaim {
  state: StateClaim;
  end: DateClaim;
}

export interface AndroidCommitment extends Evidence {
  activity: StateClaim["value"];
  scope: string;
  promise: string;
  minimum: boolean;
  shippedVersion?: string;
  futureVersions?: string[];
  upgradeCount?: number;
  durationYears?: number;
}

export interface AndroidSupportClaim extends SupportClaim {
  commitments: AndroidCommitment[];
}

export interface CadenceClaim extends Evidence {
  value: "monthly" | "quarterly" | "biannual" | "bimonthly" | "regular" | "not-specified" | "unknown";
}

export interface PhoneRecord {
  id: string;
  brandId: string;
  brand: string;
  model: string;
  aliases: string[];
  searchTerms: string[];
  deviceType: "phone";
  release: DateClaim;
  os: AndroidSupportClaim;
  security: SupportClaim;
  cadence: CadenceClaim;
  caveats: string[];
  reviewedAt: string;
  sourceRevision: string;
  conflicts: Array<{ field: string; message: string; sourceIds: string[]; resolved: boolean }>;
}

export interface SupportSource {
  id: string;
  publisher: string;
  title: string;
  url: string;
  checkedAt: string;
  retrievedAt: string;
  kind: "official" | "secondary";
  allowedHosts?: string[];
  allowRestricted?: boolean;
}

export interface PhoneBrand {
  id: string;
  name: string;
  description: string;
  caveat: string;
}

export interface PhoneDataset {
  version: string;
  generatedAt: string;
  reviewedAt: string;
  attribution: { name: string; url: string; license: string; licenseUrl: string; notice: string };
  brands: PhoneBrand[];
  sources: SupportSource[];
  records: PhoneRecord[];
}
