import assert from "node:assert/strict";
import test from "node:test";
import {
  dateBounds, todayIso, formatDate, formatCheckedDate, supportState, phoneStatus,
  supportSummary, remainingSupport, supportTimeline, compareSecurity, sortPhones, securityStatement,
  androidSupportPresentation, androidSupportText,
} from "../src/data/phoneSupport/support.mjs";
import {
  normalizePhoneQuery, createAliases, buildPhoneSearchIndex, searchPhones,
  parseSelection, selectionUrl,
} from "../src/data/phoneSupport/search.mjs";

const now = "2026-08-28";
const evidence = { evidenceType: "official-date", sourceIds: ["test-source"], checkedAt: now };
const date = (value = null, precision = "unknown") => ({ ...evidence, value, precision, evidenceType: value ? "official-date" : "unknown", sourceIds: value ? ["test-source"] : [] });
const support = (value, precision, state = "unknown") => ({ end: date(value, precision), state: { ...evidence, value: state }, commitments: [] });
const phone = (id = "pixel-9", model = "Google Pixel 9", changes = {}) => ({
  id, brandId: "google-pixel", brand: "Google", model, deviceType: "phone",
  aliases: createAliases(model, "Google"), searchTerms: [], release: date("2024-08", "month"),
  os: support("2031-08", "month"), security: support("2031-08", "month"),
  cadence: { ...evidence, value: "regular" }, caveats: [], reviewedAt: now,
  sourceRevision: "fixture", conflicts: [], ...changes,
});

test("phone support dates preserve day, month and year precision in inclusive UTC intervals", () => {
  assert.deepEqual(dateBounds(date("2024-02", "month")), { start: "2024-02-01", end: "2024-02-29" });
  assert.deepEqual(dateBounds(date("2031", "year")), { start: "2031-01-01", end: "2031-12-31" });
  assert.equal(formatDate(date("2031", "year")), "2031");
  assert.equal(formatDate(date("2031-08", "month")), "August 2031");
  assert.equal(formatDate(date("2031-08-09", "day")), "9 August 2031");
  assert.equal(formatDate(date()), "Unknown");
  assert.equal(formatCheckedDate(now), "August 2026");
  assert.equal(todayIso(new Date("2026-08-28T00:30:00Z")), now);
  for (const bad of [date("2026-02-29", "day"), date("2031-08-01", "month"), date("2031-13", "month"), date("31/08/2031", "day"), date(false, "day")]) {
    assert.throws(() => dateBounds(bad));
  }
});

test("all public support states are derived from separate security and OS claims", () => {
  assert.deepEqual(
    { key: phoneStatus(phone(), now).key, label: phoneStatus(phone(), now).label },
    { key: "supported", label: "Supported" },
  );
  const securityOnly = phoneStatus(phone("a", "A", { os: support("2025-01", "month") }), now);
  assert.deepEqual({ key: securityOnly.key, label: securityOnly.label }, { key: "security-only", label: "Security updates only" });
  assert.equal(phoneStatus(phone("b", "B", { security: support("2027-08-28", "day") }), now).key, "ending-soon");
  assert.equal(phoneStatus(phone("c", "C", { security: support("2027-08-29", "day") }), now).key, "supported");
  const ended = phoneStatus(phone("d", "D", { security: support("2026-07", "month") }), now);
  assert.deepEqual({ key: ended.key, label: ended.label }, { key: "ended", label: "Security support ended" });
  const incomplete = phoneStatus(phone("e", "E", { security: support(null, "unknown") }), now);
  assert.deepEqual({ key: incomplete.key, label: incomplete.label }, { key: "incomplete", label: "Support details incomplete" });
  const current = support(null, "ongoing", "active");
  current.state.evidenceType = "official-current-list";
  const securityActive = phoneStatus(phone("f", "F", { security: current, os: support(null, "unknown") }), now);
  assert.deepEqual(
    { key: securityActive.key, label: securityActive.label },
    { key: "security-active", label: "Security updates active" },
  );
  assert.notEqual(securityActive.label, "Supported");
  assert.notEqual(securityActive.label, "Security updates only");
  const securityActiveWithEnd = phoneStatus(phone("f2", "F2", {
    security: support("2031-08", "month"),
    os: support(null, "unknown"),
  }), now);
  assert.equal(securityActiveWithEnd.key, "security-active");
  assert.equal(remainingSupport(current, now), "Active, no public end date");
  assert.equal(supportState(current, "2027-01-01"), "unknown");
  assert.equal(phoneStatus(phone("stale", "Stale", { security: current, os: support(null, "unknown") }), "2027-01-01").key, "incomplete");
  assert.equal(phoneStatus(phone("g", "G", { security: support("2031", "year", "conflict") }), now).key, "incomplete");
  assert.equal(phoneStatus(phone("h", "H", { conflicts: [{ field: "security.end", message: "Different official dates", sourceIds: ["test-source"], resolved: false }] }), now).key, "incomplete");
  assert.equal(supportState(support("2026-08-28", "day"), now), "active");
  assert.equal(supportState(support("2026-08-28", "day"), "2026-08-29"), "ended");
  assert.equal(supportState(support("2026", "year"), now), "active");
  assert.equal(supportState(support("2026", "year"), "2027-01-01"), "ended");
  const officiallyEnded = support("2026-08", "month", "ended");
  assert.equal(supportState(officiallyEnded, now), "ended");
  assert.equal(remainingSupport(officiallyEnded, now), "Ended this month");
});

test("remaining time is understandable, bounded, precision-aware and deterministic", () => {
  assert.equal(remainingSupport(support("2031-07", "month"), now), "About 4 years 11 months remaining");
  assert.equal(remainingSupport(support("2027-04", "month"), now), "About 8 months remaining");
  assert.equal(remainingSupport(support("2026-08", "month"), now), "Ends this month");
  assert.equal(remainingSupport(support("2026-05", "month"), now), "Ended about 3 months ago");
  assert.equal(remainingSupport(support("2031", "year"), now), "About 5 years remaining");
  assert.equal(remainingSupport(support("2026", "year"), now), "Expected through 2026");
  assert.equal(remainingSupport(support("2026", "year"), "2027-01-01"), "Ended in 2026");
  assert.equal(remainingSupport(support("2026-08-28", "day"), now), "Ends today");
  assert.equal(remainingSupport(support("2026-08-27", "day"), now), "Ended 1 day ago");
  assert.equal(remainingSupport(support("2026-09-02", "day"), now), "5 days remaining");
  assert.equal(supportSummary(support("2031", "year"), now), "Expected through 2031");
  assert.equal(supportSummary(support(null, "unknown"), now), "Not established");
  assert.equal(securityStatement(phone(), now), "Security updates expected until August 2031.");
  assert.equal(securityStatement(phone("ended", "Ended", { security: support("2026-07", "month") }), now), "Security support ended in July 2026.");
  for (const end of ["2011-01", "2025-12", "2026-07", "2026-09", "2031-08"]) {
    assert.doesNotMatch(remainingSupport(support(end, "month"), now), /-\d|\d\.\d|true|false/);
  }
});

test("Android evidence classes keep commitments, activity and endpoints separate", () => {
  const commitment = (activity = "unknown", changes = {}) => ({
    activity, scope: "Global", promise: "Four Android upgrades are promised.", minimum: false,
    upgradeCount: 4, evidenceType: "official-policy", sourceIds: ["test-source"], checkedAt: now,
    ...changes,
  });
  const withOs = (os) => phone("android", "Android fixture", { os });
  assert.deepEqual(androidSupportPresentation(withOs(support(null, "unknown")), now), {
    class: "A", label: "Android version support", value: "Not established",
    supporting: "No documented Android upgrade commitment, current activity or calendar endpoint is available.",
  });
  const promised = support(null, "unknown"); promised.commitments = [commitment()];
  assert.deepEqual(androidSupportPresentation(withOs(promised), now), {
    class: "B", label: "Android upgrades", value: "Promised globally",
    supporting: "Current activity and exact end date are not established. 4 Android upgrades.",
  });
  const regional = support(null, "unknown"); regional.commitments = [commitment("active", { scope: "France", durationYears: 6, upgradeCount: undefined })];
  assert.deepEqual(androidSupportPresentation(withOs(regional), now), {
    class: "C", label: "Android version support", value: "Active in France",
    supporting: "Exact end date not published. 6 years of Android updates.",
  });
  assert.equal(androidSupportPresentation(withOs(support("2031", "year", "active")), now).class, "D");
  assert.equal(androidSupportPresentation(withOs(support("2025", "year", "ended")), now).class, "E");
  const conflict = support(null, "unknown"); conflict.commitments = [commitment("conflict")];
  assert.equal(androidSupportPresentation(withOs(conflict), now).class, "F");
  assert.match(androidSupportText(withOs(promised), now), /^Promised globally\. Current activity/);
});

test("timeline combines shared endpoints and does not manufacture unknown dates", () => {
  const timeline = supportTimeline(phone(), now);
  assert.equal(timeline.filter(({ label }) => label.includes("updates end")).length, 1);
  assert.equal(timeline.at(-1).date, "August 2031");
  assert.doesNotMatch(timeline.at(-1).date, /\b(?:1|31) August/);
  const current = phone("a", "A", { os: support(null, "unknown"), security: support(null, "ongoing", "active") });
  assert.ok(supportTimeline(current, now).some(({ label, precision }) => label === "Security support active" && precision === "ongoing"));
  assert.ok(!supportTimeline(current, now).some(({ label }) => label.endsWith("updates end")));
  const conflicted = phone("conflict", "Conflict", { conflicts: [{ field: "security.end", resolved: false, sourceIds: ["test-source"], message: "Sources differ" }] });
  assert.ok(!supportTimeline(conflicted, now).some(({ label }) => label.includes("security updates end")));
  assert.equal(remainingSupport(conflicted.security, now, true), "Not established because sources differ");
  assert.equal(supportSummary(conflicted.security, now, true), "Sources disagree");
  const activeYear = supportTimeline(phone("year", "Year", { os: support("2026", "year"), security: support("2026", "year") }), now);
  assert.ok(activeYear.findIndex(({ label }) => label === "Today") < activeYear.findIndex(({ label }) => label === "Android and security updates end"));
});

test("phone query normalization handles aliases, punctuation, plus, radio spelling and unambiguous Xperia generations", () => {
  assert.equal(normalizePhoneQuery("  GOOGLE Pixel-9  "), "google pixel 9");
  assert.equal(normalizePhoneQuery("Galaxy S22+ 5-G"), "galaxy s22 plus 5g");
  assert.equal(normalizePhoneQuery("Sony Xperia 1 VI"), "sony xperia 1 6");
  assert.equal(normalizePhoneQuery("Xperia PRO-I"), "xperia pro i");
  assert.equal(normalizePhoneQuery("One Plus 11"), "oneplus 11");
  assert.equal(normalizePhoneQuery(null), "");
  assert.equal(new Set(createAliases("Samsung Galaxy S22 Ultra", "Samsung")).size, createAliases("Samsung Galaxy S22 Ultra", "Samsung").length);
});

const searchRecords = [
  phone(), phone("pixel-9-pro", "Google Pixel 9 Pro"),
  phone("s22-ultra", "Samsung Galaxy S22 Ultra", { brand: "Samsung", aliases: createAliases("Samsung Galaxy S22 Ultra", "Samsung") }),
  phone("moto-g", "Motorola Moto G 5G", { brand: "Motorola", aliases: createAliases("Motorola Moto G 5G", "Motorola") }),
  phone("xperia-1-vi", "Sony Xperia 1 VI", { brand: "Sony", aliases: createAliases("Sony Xperia 1 VI", "Sony") }),
];

test("broad searches prefer known recent releases while exact models retain priority", () => {
  const old = phone("old", "Google Pixel 4", { release: date("2019-10", "month") });
  const recent = phone("recent", "Google Pixel 9", { release: date("2024-08", "month") });
  const unknown = phone("unknown", "Google Pixel 1", { release: date() });
  const records = [unknown, old, recent];
  assert.deepEqual(searchPhones(records, "goo").map(({ id }) => id), ["recent", "old", "unknown"]);
  assert.equal(searchPhones(records, "pixel 4")[0].id, "old");
  assert.deepEqual(searchPhones([...records].reverse(), "goo").map(({ id }) => id), ["recent", "old", "unknown"]);
});

test("phone search ranks deterministic exact, alias, prefix and token matches without merging models", () => {
  for (const query of ["pixel 9", "google pixel 9", "PIXEL-9"]) assert.equal(searchPhones(searchRecords, query)[0].id, "pixel-9");
  for (const query of ["s22 ultra", "galaxy s22 ultra", "ultra s22"]) assert.equal(searchPhones(searchRecords, query)[0].id, "s22-ultra");
  assert.equal(searchPhones(searchRecords, "moto g")[0].id, "moto-g");
  assert.equal(searchPhones(searchRecords, "moto g 5 g")[0].id, "moto-g");
  assert.equal(searchPhones(searchRecords, "xperia 1 vi")[0].id, "xperia-1-vi");
  assert.equal(searchPhones(searchRecords, "xperia 1 6")[0].id, "xperia-1-vi");
  assert.deepEqual(searchPhones(searchRecords, "zzzxxyy"), []);
  assert.deepEqual(searchPhones(searchRecords, ""), []);
  assert.equal(searchPhones(searchRecords, "pixel", { limit: 1 }).length, 1);
  assert.deepEqual(searchPhones(searchRecords, "pixel", { limit: 0 }), []);
  assert.deepEqual(searchPhones(searchRecords, "pixel"), searchPhones([...searchRecords].reverse(), "pixel"));
  assert.ok(searchPhones(searchRecords, "pixel", { excludeId: "pixel-9" }).every(({ id }) => id !== "pixel-9"));
  assert.doesNotThrow(() => searchPhones(searchRecords, "<script>alert(1)</script>"));
});

test("shareable selection rejects unknown, duplicate and unsafe IDs and restores both models", () => {
  const one = parseSelection("?model=pixel-9", searchRecords);
  assert.deepEqual(one, { modelId: "pixel-9", compareId: null, invalid: false });
  const two = parseSelection("?model=pixel-9&compare=s22-ultra", searchRecords);
  assert.equal(two.compareId, "s22-ultra");
  assert.deepEqual(parseSelection(selectionUrl(two).split("?")[1], searchRecords), two);
  assert.equal(parseSelection("?model=missing", searchRecords).invalid, true);
  assert.equal(parseSelection("?model=pixel-9&compare=pixel-9", searchRecords).compareId, null);
  assert.equal(parseSelection("?compare=s22-ultra", searchRecords).compareId, null);
  assert.equal(parseSelection("?model=pixel-9&model=s22-ultra", searchRecords).modelId, null);
  assert.equal(parseSelection("?model=%3Cscript%3E", searchRecords).modelId, null);
  assert.equal(selectionUrl({ modelId: "javascript:alert(1)" }), "/phone-support/");
  assert.deepEqual(parseSelection("", searchRecords), { modelId: null, compareId: null, invalid: false });
  const plus = phone("fairphone-3+", "Fairphone 3+");
  assert.equal(parseSelection(selectionUrl({ modelId: plus.id }), [plus]).modelId, null);
  assert.equal(parseSelection(new URL(selectionUrl({ modelId: plus.id }), "https://runcheckapp.com").search, [plus]).modelId, plus.id);
});

test("comparison names a later endpoint only for comparable known ranges, never an overall winner", () => {
  const a = phone();
  const b = phone("pixel-8", "Google Pixel 8", { security: support("2030-10", "month") });
  assert.equal(compareSecurity(a, b, now).longerId, a.id);
  assert.equal(compareSecurity(a, a, now).longerId, null);
  assert.equal(compareSecurity(a, phone("x", "X", { security: support("2031", "year") }), now).longerId, null);
  assert.equal(compareSecurity(a, phone("u", "U", { security: support(null, "unknown") }), now).longerId, null);
  assert.equal(compareSecurity(a, phone("c", "C", { security: support("2032", "year", "conflict") }), now).longerId, null);
  assert.equal(compareSecurity(a, phone("e", "E", { security: support("2020", "year") }), now).longerId, null);
  assert.equal(compareSecurity(a, phone("e", "E", { security: support("2026-08", "month", "ended") }), now).longerId, null);
  const secondary = structuredClone(b);
  secondary.security.end.evidenceType = "secondary-dataset";
  assert.equal(compareSecurity(a, secondary, now).longerId, null);
  assert.deepEqual(Object.keys(compareSecurity(a, b, now)).sort(), ["longerId", "message"]);
});

test("public search projection excludes non-phones, future releases and private import fields", () => {
  const sample = { version: "fixture", generatedAt: now, reviewedAt: now, attribution: {}, brands: [], sources: [], records: [
    phone(), phone("tablet", "Tablet", { deviceType: "tablet" }),
    phone("future", "Future", { release: date("2027-01-01", "day") }),
  ], internalPath: "private" };
  const index = buildPhoneSearchIndex(sample, now);
  assert.deepEqual(index.records.map(({ id }) => id), ["pixel-9"]);
  assert.ok(!("internalPath" in index));
  const ended = phone("ended", "Ended", { security: support("2020", "year") });
  const unknown = phone("unknown", "Unknown", { security: support(null, "unknown") });
  assert.deepEqual(sortPhones([unknown, ended, phone()], now).map(({ id }) => id), ["pixel-9", "ended", "unknown"]);
});
