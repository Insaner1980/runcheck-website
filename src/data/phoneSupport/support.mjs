/** @typedef {import('./types').DateClaim} DateClaim */
/** @typedef {import('./types').SupportClaim} SupportClaim */
/** @typedef {import('./types').PhoneRecord} PhoneRecord */

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const pad = (value) => String(value).padStart(2, "0");
const daysInMonth = (year, month) => new Date(Date.UTC(year, month, 0)).getUTCDate();
const dayNumber = (value) => Date.parse(`${value}T00:00:00Z`) / 86400000;

export const EVIDENCE_LABELS = {
  "official-date": "Official date",
  "official-policy": "Official policy",
  "official-current-list": "Official current list",
  "secondary-dataset": "Secondary lifecycle dataset",
  "derived-from-policy": "Calculated from official policy",
  unknown: "Not established",
};

export const CADENCE_LABELS = {
  monthly: "Monthly", quarterly: "Quarterly", biannual: "Biannual",
  bimonthly: "Every two months", regular: "Regular updates",
  "not-specified": "Not publicly specified", unknown: "Unknown",
};

/** Dates are inclusive intervals, never artificial public exact dates. @param {Pick<DateClaim, 'value'|'precision'>} claim */
export function dateBounds(claim) {
  if (claim.value === null && ["ongoing", "unknown"].includes(claim.precision)) return null;
  const value = claim.value;
  const pattern = { year: /^\d{4}$/, month: /^\d{4}-\d{2}$/, day: /^\d{4}-\d{2}-\d{2}$/ }[claim.precision];
  if (typeof value !== "string" || !pattern?.test(value)) throw new Error("Invalid date or date precision");
  const [year, month = 1, day = 1] = value.split("-").map(Number);
  if (year < 1000 || month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) throw new Error("Invalid calendar date");
  const first = `${year}-${pad(month)}-${pad(day)}`;
  const last = claim.precision === "year" ? `${year}-12-31` :
    claim.precision === "month" ? `${year}-${pad(month)}-${pad(daysInMonth(year, month))}` : first;
  return { start: first, end: last };
}

export function todayIso(now) {
  const value = now instanceof Date ? now.toISOString().slice(0, 10) : now;
  dateBounds({ value, precision: "day" });
  return value;
}

/** @param {Pick<DateClaim, 'value'|'precision'>} claim */
export function formatDate(claim) {
  if (!dateBounds(claim)) return claim.precision === "ongoing" ? "No public end date" : "Unknown";
  const [year, month, day] = claim.value.split("-").map(Number);
  if (claim.precision === "year") return String(year);
  if (claim.precision === "month") return `${months[month - 1]} ${year}`;
  return `${day} ${months[month - 1]} ${year}`;
}

export function formatCheckedDate(value) {
  return formatDate({ value: value.slice(0, 7), precision: "month" });
}

/** @param {SupportClaim} claim */
export function supportState(claim, now) {
  const today = todayIso(now);
  if (claim.state.value === "conflict") return "conflict";
  const bounds = dateBounds(claim.end);
  if (claim.state.value === "ended" && claim.state.evidenceType !== "secondary-dataset" && today >= claim.state.checkedAt && (!bounds || bounds.start <= today)) return "ended";
  if (bounds) return bounds.end < today ? "ended" : "active";
  if (claim.state.value === "active") {
    // A list observed months ago cannot establish current open-ended support.
    const age = dayNumber(today) - dayNumber(claim.state.checkedAt);
    return age >= 0 && age <= 90 ? "active" : "unknown";
  }
  return claim.state.value;
}

function addYear(today) {
  const [year, month, day] = today.split("-").map(Number);
  return `${year + 1}-${pad(month)}-${pad(Math.min(day, daysInMonth(year + 1, month)))}`;
}

/** @param {PhoneRecord} phone */
export function phoneStatus(phone, now) {
  const today = todayIso(now);
  const security = supportState(phone.security, today);
  const os = supportState(phone.os, today);
  if (phone.conflicts.some((conflict) => !conflict.resolved) || security === "conflict" || os === "conflict") {
    return { key: "incomplete", label: "Support details incomplete", interpretation: "The available sources do not establish one consistent support schedule. Review the evidence and regional limits below." };
  }
  if (security === "ended") return { key: "ended", label: "Security support ended", interpretation: "The documented security support period has ended. This does not identify the security patch installed on your phone." };
  const end = dateBounds(phone.security.end);
  if (security === "active" && end && end.end <= addYear(today)) {
    return { key: "ending-soon", label: "Support ending soon", interpretation: "Security support is expected to end within the next year." };
  }
  if (security === "active" && os === "ended") return { key: "security-only", label: "Security updates only", interpretation: "Android version updates have ended, but security updates are still expected." };
  if (security === "active" && os === "active") return { key: "supported", label: "Supported", interpretation: "This phone is within its documented Android and security support period." };
  if (security === "active") return { key: "security-active", label: "Security updates active", interpretation: "Security support is documented. The available evidence does not establish the Android version support schedule." };
  return { key: "incomplete", label: "Support details incomplete", interpretation: "Available sources do not establish current security support or a reliable end date." };
}

const plural = (number, unit) => `${number} ${unit}${number === 1 ? "" : "s"}`;
const readableList = (values) => values.length < 3 ? values.join(" and ") : `${values.slice(0, -1).join(", ")} and ${values.at(-1)}`;
const duration = (monthCount) => {
  const years = Math.floor(monthCount / 12);
  const remainder = monthCount % 12;
  return [years ? plural(years, "year") : "", remainder ? plural(remainder, "month") : ""].filter(Boolean).join(" ");
};

/** @param {SupportClaim} claim */
export function remainingSupport(claim, now, conflicted = false) {
  const today = todayIso(now);
  const bounds = dateBounds(claim.end);
  if (conflicted || claim.state.value === "conflict") return "Not established because sources differ";
  if (!bounds) {
    const state = supportState(claim, today);
    return state === "active" ? "Active, no public end date" : state === "ended" ? "Ended, date not established" : "No reliable end date";
  }
  const [year, month] = today.split("-").map(Number);
  const [endYear, endMonth] = bounds.end.split("-").map(Number);
  const monthDelta = (endYear - year) * 12 + endMonth - month;
  const past = bounds.end < today;
  if (!past && supportState(claim, today) === "ended") {
    return claim.end.precision === "month" ? "Ended this month" : `Ended in ${formatDate(claim.end)}`;
  }
  if (claim.end.precision === "year") {
    const years = Math.abs(endYear - year);
    if (years === 0) return `Expected through ${endYear}`;
    return past ? `Ended in ${endYear}` : `About ${plural(years, "year")} remaining`;
  }
  if (claim.end.precision === "month") {
    if (monthDelta === 0) return "Ends this month";
    return past ? `Ended about ${duration(Math.abs(monthDelta))} ago` : `About ${duration(monthDelta)} remaining`;
  }
  const days = Math.abs(dayNumber(bounds.end) - dayNumber(today));
  if (days === 0) return "Ends today";
  if (days < 31) return past ? `Ended ${plural(days, "day")} ago` : `${plural(days, "day")} remaining`;
  const approximateMonths = Math.max(1, Math.round(days / 30.4375));
  return past ? `Ended about ${duration(approximateMonths)} ago` : `About ${duration(approximateMonths)} remaining`;
}

/** @param {SupportClaim} claim */
export function supportSummary(claim, now, conflicted = false) {
  const state = supportState(claim, now);
  if (conflicted || state === "conflict") return "Sources disagree";
  if (claim.end.value) {
    const date = formatDate(claim.end);
    if (state === "ended") return `Ended ${claim.end.precision === "day" ? "on" : "in"} ${date}`;
    return `${claim.end.precision === "year" ? "Expected through" : "Expected until"} ${date}`;
  }
  if (state === "active") return "Active, no public end date";
  if (state === "ended") return "Ended, date not established";
  return "Not established";
}

const scopePhrase = (scope) => ({
  Global: "globally",
  Europe: "in Europe",
  "European Union": "in the EU",
  Finland: "in Finland",
  France: "in France",
  Germany: "in Germany",
}[scope] ?? `for ${scope}`);

function commitmentDetail(commitment) {
  const facts = [];
  if (commitment.upgradeCount) facts.push(`${commitment.minimum ? "At least " : ""}${plural(commitment.upgradeCount, "Android upgrade")}`);
  if (commitment.futureVersions?.length) facts.push(`Android ${readableList(commitment.futureVersions)} named as ${commitment.futureVersions.length === 1 ? "a future version" : "future versions"}`);
  if (commitment.durationYears) facts.push(`${commitment.minimum ? "At least " : ""}${plural(commitment.durationYears, "year")} of Android updates`);
  return facts.length ? `${facts.join(". ")}.` : "";
}

/** Keep commitment, current activity and calendar endpoint as separate facts. @param {PhoneRecord} phone */
export function androidSupportPresentation(phone, now) {
  const conflicted = phone.conflicts.some(({ field, resolved }) => !resolved && (field === "android" || field.startsWith("os"))) || phone.os.state.value === "conflict" ||
    phone.os.commitments.some(({ activity }) => activity === "conflict");
  if (conflicted) return { class: "F", label: "Android support", value: "Evidence conflicts", supporting: "The available sources do not establish one consistent Android support position." };
  const state = supportState(phone.os, now);
  const end = phone.os.end;
  const official = (claim) => claim.evidenceType.startsWith("official-") || claim.evidenceType === "derived-from-policy";
  const endedCommitment = phone.os.commitments.find(({ activity }) => activity === "ended");
  if ((state === "ended" && (official(phone.os.state) || official(end))) || endedCommitment) {
    const value = end.value ? `Ended ${end.precision === "day" ? "on" : "in"} ${formatDate(end)}` : "Ended, date not established";
    return { class: "E", label: "Android version support", value, supporting: "Official evidence establishes that Android version support has ended." };
  }
  if (state === "active" && end.value && official(end)) {
    return { class: "D", label: "Android version support", value: `Active through ${formatDate(end)}`, supporting: "The endpoint is shown only at the precision published by the source." };
  }
  const active = phone.os.commitments.find(({ activity }) => activity === "active");
  if ((state === "active" && official(phone.os.state)) || active) {
    const scope = active ? ` ${scopePhrase(active.scope)}` : "";
    const detail = active ? commitmentDetail(active) : "";
    return { class: "C", label: "Android version support", value: `Active${scope}`, supporting: ["Exact end date not published.", detail].filter(Boolean).join(" ") };
  }
  const commitment = phone.os.commitments[0];
  if (commitment) {
    const detail = commitmentDetail(commitment);
    return { class: "B", label: "Android upgrades", value: `Promised ${scopePhrase(commitment.scope)}`, supporting: ["Current activity and exact end date are not established.", detail].filter(Boolean).join(" ") };
  }
  return { class: "A", label: "Android version support", value: "Not established", supporting: "No documented Android upgrade commitment, current activity or calendar endpoint is available." };
}

/** @param {PhoneRecord} phone */
export function androidSupportText(phone, now) {
  const result = androidSupportPresentation(phone, now);
  return `${result.value}. ${result.supporting}`;
}

/** @param {PhoneRecord} phone */
export function supportEndIsConflicted(phone, field) {
  return phone.conflicts.some((conflict) => !conflict.resolved &&
    (conflict.field === field || conflict.field === `${field}.end`));
}

/** @param {PhoneRecord} phone */
export function securityStatement(phone, now) {
  if (phone.conflicts.some((conflict) => !conflict.resolved && conflict.field.startsWith("security"))) return "Sources differ on the security support end date.";
  const summary = supportSummary(phone.security, now);
  const sentence = summary.charAt(0).toLowerCase() + summary.slice(1);
  if (summary.startsWith("Expected")) return `Security updates ${sentence}.`;
  if (summary.startsWith("Ended")) return `Security support ${sentence}.`;
  return supportState(phone.security, now) === "active" ? "Security support is active with no public end date." : "A reliable security support schedule is not available.";
}

/** @param {PhoneRecord} phone */
export function supportTimeline(phone, now) {
  const today = todayIso(now);
  const points = [];
  const point = (label, claim, sortAtEnd = false) => {
    const bounds = dateBounds(claim);
    if (bounds) points.push({ label, date: formatDate(claim), sort: sortAtEnd ? bounds.end : bounds.start, precision: claim.precision });
  };
  point("Released", phone.release);
  points.push({ label: "Today", date: formatDate({ value: today, precision: "day" }), sort: today, precision: "day" });
  const osEnd = phone.os.end;
  const securityEnd = phone.security.end;
  const osConflicted = supportEndIsConflicted(phone, "os") || phone.os.state.value === "conflict";
  const securityConflicted = supportEndIsConflicted(phone, "security") || phone.security.state.value === "conflict";
  if (!osConflicted && !securityConflicted && osEnd.value && osEnd.value === securityEnd.value && osEnd.precision === securityEnd.precision) point("Android and security updates end", securityEnd, supportState(phone.security, today) !== "ended");
  else {
    if (!osConflicted) point("Android updates end", osEnd, supportState(phone.os, today) !== "ended");
    if (!securityConflicted) point("Security updates end", securityEnd, supportState(phone.security, today) !== "ended");
  }
  if (!securityEnd.value && supportState(phone.security, today) === "active") {
    points.push({ label: "Security support active", date: `No public end date, checked ${formatCheckedDate(phone.security.state.checkedAt)}`, sort: today, precision: "ongoing" });
  }
  return points.sort((a, b) => a.sort.localeCompare(b.sort));
}

/** Compare non-overlapping, known future intervals without assigning an overall winner. */
export function compareSecurity(first, second, now) {
  const today = todayIso(now);
  const a = dateBounds(first.security.end);
  const b = dateBounds(second.security.end);
  const unresolved = (phone) => phone.conflicts.some((conflict) => !conflict.resolved);
  if (!a || !b || unresolved(first) || unresolved(second) ||
    supportState(first.security, today) === "conflict" || supportState(second.security, today) === "conflict") {
    return { longerId: null, message: "There is not enough reliable date information for a fair security support comparison." };
  }
  const secondary = (phone) => phone.security.end.evidenceType === "secondary-dataset";
  if (secondary(first) !== secondary(second)) return { longerId: null, message: "One endpoint relies on secondary data. The evidence is not comparable enough to highlight a longer confirmed period." };
  // Regional caveats remain visible; compare the documented dates, not a universal guarantee.
  if (supportState(first.security, today) === "ended" || supportState(second.security, today) === "ended") return { longerId: null, message: "At least one documented support period has ended. No overall winner is assigned." };
  if (a.start === b.start && a.end === b.end) return { longerId: null, message: "Both phones have the same documented security support endpoint. Regional conditions still apply." };
  if (a.start <= b.end && b.start <= a.end) return { longerId: null, message: "The date ranges overlap at the available precision, so a longer period cannot be established." };
  const longer = a.start > b.end ? first : second;
  return { longerId: longer.id, message: `${longer.model} has the later documented security support endpoint. This compares support dates only, subject to the evidence and regional conditions shown.` };
}

/** @param {PhoneRecord[]} phones @param {string | Date} now */
export function sortPhones(phones, now) {
  const priority = { supported: 0, "security-active": 0, "security-only": 0, "ending-soon": 1, ended: 2, incomplete: 3 };
  return [...phones].sort((a, b) => priority[phoneStatus(a, now).key] - priority[phoneStatus(b, now).key] ||
    (b.release.value ?? "").localeCompare(a.release.value ?? "") || a.model.localeCompare(b.model, "en") || a.id.localeCompare(b.id));
}
