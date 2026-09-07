import type { AndroidCommitment, DateClaim, Evidence, PhoneDataset, PhoneRecord, SupportSource } from "../data/phoneSupport/types";
import { parseSelection, searchPhones, selectionUrl } from "../data/phoneSupport/search.mjs";
import {
  CADENCE_LABELS, EVIDENCE_LABELS, androidSupportPresentation, androidSupportText, compareSecurity, dateBounds,
  formatDate, phoneStatus, remainingSupport, supportEndIsConflicted,
  supportState, supportSummary, supportTimeline, todayIso,
} from "../data/phoneSupport/support.mjs";

type PhoneIndex = Pick<PhoneDataset, "version" | "generatedAt" | "reviewedAt" | "sources" | "records">;
const stateLabels = { active: "Active", ended: "Ended", unknown: "Not established", conflict: "Sources disagree" };
const isText = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

function requireValue(condition: unknown): asserts condition {
  if (!condition) throw new Error("The phone support data could not be validated.");
}

function object(value: unknown): Record<string, unknown> {
  requireValue(value !== null && typeof value === "object" && !Array.isArray(value));
  return value as Record<string, unknown>;
}

function textArray(value: unknown): asserts value is string[] {
  requireValue(Array.isArray(value) && value.every(isText));
}

function day(value: unknown) {
  requireValue(isText(value));
  dateBounds({ value, precision: "day" });
}

function evidence(value: unknown, sources: Set<string>) {
  const claim = object(value);
  requireValue(isText(claim.evidenceType) && Object.hasOwn(EVIDENCE_LABELS, claim.evidenceType));
  textArray(claim.sourceIds);
  requireValue(claim.sourceIds.every((id) => sources.has(id)));
  requireValue(claim.evidenceType === "unknown" || claim.sourceIds.length > 0);
  day(claim.checkedAt);
  requireValue(claim.note === undefined || typeof claim.note === "string");
  return claim;
}

function dateClaim(value: unknown, sources: Set<string>) {
  const claim = evidence(value, sources);
  requireValue(isText(claim.precision) && ["day", "month", "year", "ongoing", "unknown"].includes(claim.precision));
  requireValue(claim.value === null || isText(claim.value));
  dateBounds(claim as unknown as DateClaim);
}

function supportClaim(value: unknown, sources: Set<string>, android = false) {
  const claim = object(value);
  const state = evidence(claim.state, sources);
  requireValue(isText(state.value) && Object.hasOwn(stateLabels, state.value));
  dateClaim(claim.end, sources);
  if (android) {
    requireValue(Array.isArray(claim.commitments));
    for (const rawCommitment of claim.commitments) {
      const commitment = evidence(rawCommitment, sources);
      requireValue(["official-date", "official-policy", "derived-from-policy"].includes(String(commitment.evidenceType)));
      requireValue(isText(commitment.activity) && Object.hasOwn(stateLabels, commitment.activity));
      requireValue(isText(commitment.scope) && isText(commitment.promise) && typeof commitment.minimum === "boolean");
      requireValue(commitment.shippedVersion === undefined || isText(commitment.shippedVersion));
      requireValue(commitment.futureVersions === undefined || (Array.isArray(commitment.futureVersions) && commitment.futureVersions.length > 0 && commitment.futureVersions.every((version) => isText(version) && /^\d+$/.test(version))));
      for (const field of ["upgradeCount", "durationYears"] as const) requireValue(commitment[field] === undefined || (Number.isInteger(commitment[field]) && Number(commitment[field]) > 0));
    }
  }
}

function validateIndex(value: unknown): PhoneIndex {
  const index = object(value);
  requireValue(index.version === "1" && isText(index.generatedAt));
  requireValue(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(index.generatedAt) && Number.isFinite(Date.parse(index.generatedAt)) && new Date(index.generatedAt).toISOString() === index.generatedAt);
  day(index.reviewedAt);
  requireValue(Array.isArray(index.sources) && index.sources.length > 0 && Array.isArray(index.records) && index.records.length > 0);
  const sourceIds = new Set<string>();
  for (const raw of index.sources) {
    const source = object(raw);
    requireValue(isText(source.id) && !sourceIds.has(source.id));
    requireValue(isText(source.publisher) && isText(source.title) && isText(source.url));
    const url = new URL(source.url);
    requireValue(url.protocol === "https:" && !url.username && !url.password);
    requireValue(source.kind === "official" || source.kind === "secondary");
    day(source.checkedAt);
    day(source.retrievedAt);
    sourceIds.add(source.id);
  }
  const ids = new Set<string>();
  for (const raw of index.records) {
    const phone = object(raw);
    requireValue(isText(phone.id) && /^[a-zA-Z0-9][a-zA-Z0-9+._-]{0,159}$/.test(phone.id) && !ids.has(phone.id));
    requireValue(isText(phone.brandId) && isText(phone.brand) && isText(phone.model));
    requireValue(phone.deviceType === "phone" && isText(phone.sourceRevision));
    textArray(phone.aliases);
    textArray(phone.searchTerms);
    textArray(phone.caveats);
    day(phone.reviewedAt);
    dateClaim(phone.release, sourceIds);
    supportClaim(phone.os, sourceIds, true);
    supportClaim(phone.security, sourceIds);
    const cadence = evidence(phone.cadence, sourceIds);
    requireValue(isText(cadence.value) && Object.hasOwn(CADENCE_LABELS, cadence.value));
    requireValue(Array.isArray(phone.conflicts));
    for (const rawConflict of phone.conflicts) {
      const conflict = object(rawConflict);
      requireValue(isText(conflict.field) && isText(conflict.message) && typeof conflict.resolved === "boolean");
      textArray(conflict.sourceIds);
      requireValue(conflict.sourceIds.every((id) => sourceIds.has(id)));
    }
    ids.add(phone.id);
  }
  return index as unknown as PhoneIndex;
}

let indexPromise: Promise<PhoneIndex> | undefined;

function loadIndex() {
  if (!indexPromise) {
    indexPromise = (async () => {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15000);
      try {
        const response = await fetch("/phone-support/search-index.json", { signal: controller.signal, credentials: "omit" });
        if (!response.ok) throw new Error("Phone support data is unavailable.");
        return validateIndex(await response.json());
      } finally {
        window.clearTimeout(timeout);
      }
    })().catch((error: unknown) => {
      indexPromise = undefined;
      throw error;
    });
  }
  return indexPromise;
}

function element<K extends keyof HTMLElementTagNameMap>(tag: K, text = "", className = "") {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function required<T extends HTMLElement>(parent: ParentNode, selector: string) {
  const node = parent.querySelector<T>(selector);
  if (!node) throw new Error("Phone support markup is incomplete.");
  return node;
}

function createSearch(root: HTMLElement, options: {
  load: () => Promise<PhoneIndex>;
  excludeId: () => string;
  select: (phone: PhoneRecord) => void;
  edit: () => void;
}) {
  const input = required<HTMLInputElement>(root, "[data-ps-input]");
  const list = required<HTMLUListElement>(root, "[data-ps-options]");
  const status = required<HTMLParagraphElement>(root, "[data-ps-search-status]");
  const retry = required<HTMLButtonElement>(root, "[data-ps-retry]");
  let version = 0;
  let openAllowed = false;
  let matches: PhoneRecord[] = [];
  let active = -1;

  function close() {
    const wasOpen = !list.hidden || input.getAttribute("aria-busy") === "true";
    version++;
    openAllowed = false;
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    input.removeAttribute("aria-busy");
    active = -1;
    if (wasOpen) status.textContent = "";
  }

  function activate(index: number) {
    active = index;
    Array.from(list.children).forEach((item, position) => item.setAttribute("aria-selected", String(position === active)));
    const selected = list.children[active] as HTMLElement | undefined;
    if (selected) {
      input.setAttribute("aria-activedescendant", selected.id);
      selected.scrollIntoView({ block: "nearest", behavior: "instant" });
    } else input.removeAttribute("aria-activedescendant");
  }

  function select(phone: PhoneRecord) {
    close();
    input.value = phone.model;
    status.textContent = "";
    options.select(phone);
  }

  async function search() {
    const request = ++version;
    openAllowed = true;
    const query = input.value.trim();
    retry.hidden = true;
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    input.setAttribute("aria-busy", "true");
    status.textContent = "Loading phone support data.";
    try {
      const index = await options.load();
      if (request !== version || !openAllowed || document.activeElement !== input || root.closest("[hidden]")) return;
      input.removeAttribute("aria-busy");
      matches = searchPhones(index.records, query, { excludeId: options.excludeId(), limit: index.records.length });
      list.replaceChildren();
      active = -1;
      for (const [position, phone] of matches.entries()) {
        const item = element("li", "", "ps-option");
        item.id = `${list.id}-${position}`;
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", "false");
        item.append(element("strong", phone.model));
        if (phone.release.value) item.append(element("span", phone.release.value.slice(0, 4), "ps-option-brand"));
        item.addEventListener("pointerdown", (event) => event.preventDefault());
        item.addEventListener("click", () => select(phone));
        list.append(item);
      }
      list.hidden = matches.length === 0;
      input.setAttribute("aria-expanded", String(matches.length > 0));
      status.textContent = !query ? "" : matches.length
        ? `${matches.length} ${matches.length === 1 ? "match" : "matches"} found.`
        : "No matching phone found. Try a shorter model name or browse by brand below.";
      if (query && matches.some((phone) => phone.brand.toLowerCase().startsWith(query.toLowerCase()))) {
        status.textContent = `${matches.length} matching phones. Scroll to browse all matches, or add a model name to narrow your search.`;
      }
    } catch {
      if (request !== version || !openAllowed) return;
      input.removeAttribute("aria-busy");
      status.textContent = "Phone support data could not be loaded. Try again or browse by brand below.";
      retry.hidden = false;
    }
  }

  input.addEventListener("focus", () => { void search(); });
  input.addEventListener("input", () => { options.edit(); void search(); });
  input.addEventListener("blur", close);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Tab") {
      if (event.key === "Escape" && !list.hidden) event.preventDefault();
      close();
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (list.hidden) { void search(); return; }
      if (matches.length) activate(active < 0 ? (event.key === "ArrowDown" ? 0 : matches.length - 1)
        : (active + (event.key === "ArrowDown" ? 1 : -1) + matches.length) % matches.length);
    } else if (event.key === "Enter" && !list.hidden && matches.length && !event.isComposing) {
      event.preventDefault();
      select(matches[active < 0 ? 0 : active]);
    }
  });
  retry.addEventListener("click", () => {
    if (document.activeElement === input) void search();
    else input.focus();
  });
  document.addEventListener("pointerdown", (event) => {
    if (event.target instanceof Node && !root.contains(event.target)) close();
  });
  return { input, close, set(phone: PhoneRecord | undefined) {
    close();
    input.value = phone?.model ?? "";
    retry.hidden = true;
    status.textContent = "";
  } };
}

const checked = (value: string) => formatDate({ value, precision: "day" });

function cadenceText(phone: PhoneRecord) {
  const claim = phone.cadence;
  return claim.evidenceType === "unknown" ? CADENCE_LABELS[claim.value]
    : `${CADENCE_LABELS[claim.value]}. Checked ${checked(claim.checkedAt)}.`;
}

function supportText(phone: PhoneRecord, field: "os" | "security", now: string) {
  const claim = phone[field];
  const summary = supportSummary(claim, now, supportEndIsConflicted(phone, field));
  const state = supportState(claim, now);
  return summary.startsWith("Expected") ? `${stateLabels[state]}. ${summary}` : summary;
}

function claimEntries(phone: PhoneRecord): Array<[string, Evidence]> {
  return [
    ["Release date", phone.release],
    ["Android support status", phone.os.state],
    ["Android support end", phone.os.end],
    ...phone.os.commitments.map((commitment): [string, AndroidCommitment] => [`Android commitment (${commitment.scope})`, commitment]),
    ["Security support status", phone.security.state],
    ["Security support end", phone.security.end],
    ["Security update frequency", phone.cadence],
  ];
}

function sourceLink(source: SupportSource) {
  const link = element("a", `${source.publisher}: ${source.title}`, "ps-text-link");
  link.href = source.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${source.publisher}: ${source.title} (opens in a new tab)`);
  return link;
}

function disclosureLink(id: string, label: string) {
  const link = element("a", label, "ps-text-link");
  link.href = `#${id}`;
  link.addEventListener("click", () => { document.getElementById(id)!.setAttribute("open", ""); });
  return link;
}

function evidenceDetails(phone: PhoneRecord, sources: Map<string, SupportSource>, id: string) {
  const details = element("details", "", "ps-disclosure ps-evidence");
  details.id = id;
  details.append(element("summary", `Sources for ${phone.model}`));
  const entries = claimEntries(phone);
  const sourceIds = [...new Set([
    ...entries.flatMap(([, claim]) => claim.sourceIds),
    ...phone.conflicts.filter((conflict) => !conflict.resolved).flatMap((conflict) => conflict.sourceIds),
  ])];
  const links = element("ol", "", "ps-source-list");
  for (const [index, sourceId] of sourceIds.entries()) {
    const source = sources.get(sourceId)!;
    const item = element("li");
    item.id = `${id}-source-${index + 1}`;
    item.append(sourceLink(source), element("span", `${source.kind === "official" ? "Official source" : "Secondary dataset"}. Checked ${checked(source.checkedAt)}.`, "ps-source-checked"));
    links.append(item);
  }
  details.append(links);
  const notes = element("details", "", "ps-claim-notes");
  notes.append(element("summary", "How each claim was established"));
  const claims = element("dl", "", "ps-evidence-list");
  const grouped = new Map<string, { labels: string[]; claim: Evidence }>();
  for (const [label, claim] of entries) {
    const key = JSON.stringify([claim.evidenceType, claim.checkedAt, claim.note, [...claim.sourceIds].sort()]);
    const existing = grouped.get(key);
    if (existing) existing.labels.push(label);
    else grouped.set(key, { labels: [label], claim });
  }
  for (const { labels, claim } of grouped.values()) {
    const group = element("div");
    const description = element("dd");
    description.append(element("p", `${EVIDENCE_LABELS[claim.evidenceType]}. Checked ${checked(claim.checkedAt)}.`, "ps-evidence-meta"));
    if ("promise" in claim) {
      const commitment = claim as AndroidCommitment;
      description.append(element("p", commitment.promise));
      const facts = [
        `Activity: ${stateLabels[commitment.activity]}`,
        `Region: ${commitment.scope}`,
        `Minimum commitment: ${commitment.minimum ? "Yes" : "No"}`,
        commitment.shippedVersion ? `Shipped Android version: ${commitment.shippedVersion}` : "",
        commitment.futureVersions?.length ? `Named future Android versions: ${commitment.futureVersions.join(", ")}` : "",
        commitment.upgradeCount ? `Promised Android upgrades: ${commitment.upgradeCount}` : "",
        commitment.durationYears ? `Stated support duration: ${commitment.durationYears} years` : "",
      ].filter(Boolean).join(". ");
      description.append(element("p", facts, "ps-subtle"));
    }
    if (claim.note) description.append(element("p", claim.note));
    if (claim.sourceIds.length) {
      const references = element("p", "", "ps-source-references");
      for (const sourceId of claim.sourceIds) {
        const number = sourceIds.indexOf(sourceId) + 1;
        const link = element("a", `Source ${number}`, "ps-text-link");
        link.href = `#${id}-source-${number}`;
        references.append(link);
      }
      description.append(references);
    } else description.append(element("p", "No verified source establishes this claim.", "ps-subtle"));
    group.append(element("dt", labels.join(" / ")), description);
    claims.append(group);
  }
  notes.append(claims);
  details.append(notes);
  return details;
}

const conciseScope = new Map([
  ["Google's support period starts from first availability in the Google Store in the US. Availability and delivery can vary by region and carrier.", "Support starts from US Google Store availability. Rollout varies by region, carrier and device."],
  ["Support runs from first US Google Store availability. Update rollout can vary by carrier and device.", "Support starts from US Google Store availability. Rollout varies by region, carrier and device."],
  ["Samsung schedules vary by model, country, carrier and enterprise edition. Current cadence lists can change.", "Schedules vary by country, carrier, model and enterprise edition. Samsung's update-frequency lists can change."],
  ["Samsung's current model list can change. Update timing varies by market, model and network provider; some carriers deliver quarterly updates for models on the monthly list.", "Some carriers deliver quarterly updates even when Samsung lists the model for monthly updates."],
]);

function caveats(phone: PhoneRecord) {
  const notes = [...new Set([...phone.caveats.map((note) => conciseScope.get(note) ?? note), ...phone.conflicts.filter((conflict) => !conflict.resolved).map((conflict) => conflict.message)])];
  const section = element("details", "", "ps-disclosure ps-caveats");
  section.id = `ps-scope-${phone.id}`;
  if (notes.length) {
    section.append(element("summary", "Scope and uncertainties"));
    const list = element("ul");
    for (const note of notes) list.append(element("li", note));
    section.append(list);
  }
  return section;
}

function renderResult(phone: PhoneRecord, now: string) {
  const fragment = document.createDocumentFragment();
  const header = element("div", "", "ps-result-header");
  const heading = element("h2", phone.model, "ps-result-heading");
  heading.id = "ps-result-heading";
  heading.tabIndex = -1;
  const status = phoneStatus(phone, now);
  const statusText = element("p", status.label, "ps-status");
  statusText.dataset.state = status.key;
  header.append(heading, statusText);
  fragment.append(header);
  const conflicted = supportEndIsConflicted(phone, "security") || phone.security.state.value === "conflict";
  const securityState = supportState(phone.security, now);
  const knownEnd = Boolean(phone.security.end.value) && !conflicted;
  const androidResult = androidSupportPresentation(phone, now);
  const unconfirmed = securityState === "unknown" && androidResult.class === "A" && !conflicted;
  if (unconfirmed) fragment.append(element("p", "We couldn’t confirm this model’s update support. Missing information does not mean updates have ended.", "ps-result-note"));
  const answer = element("div", "", "ps-answer");
  const endpoint = element("div");
  const label = knownEnd
    ? securityState === "ended" ? "Security support ended" : `Security updates expected ${phone.security.end.precision === "year" ? "through" : "until"}`
    : "Security support";
  const value = knownEnd ? formatDate(phone.security.end) : conflicted ? "End date uncertain"
    : securityState === "active" ? "No public end date" : securityState === "ended" ? "Ended, date unknown" : "Not established";
  endpoint.append(element("p", label, "ps-answer-label"), element("p", value, `ps-answer-date${knownEnd ? "" : " ps-answer-unknown"}`));
  answer.append(endpoint);
  const android = element("div");
  android.append(
    element("p", androidResult.label, "ps-answer-label"),
    element("p", androidResult.value, `ps-answer-secondary${androidResult.class === "A" || androidResult.class === "F" ? " ps-answer-unknown" : ""}`),
  );
  if (androidResult.class !== "A" && androidResult.class !== "D") android.append(element("p", androidResult.supporting, "ps-subtle"));
  answer.append(android);
  if (knownEnd) answer.append(element("p", remainingSupport(phone.security, now), "ps-remaining"));
  fragment.append(answer);
  if ((!unconfirmed && status.key === "incomplete") || status.key === "ended" || status.key === "security-only") {
    fragment.append(element("p", status.interpretation, "ps-result-note"));
  }
  const meta = element("div", "", "ps-result-meta");
  const basis = knownEnd ? phone.security.end : phone.security.state;
  if (basis.evidenceType !== "unknown") meta.append(element("span", EVIDENCE_LABELS[basis.evidenceType]));
  meta.append(element("span", `Checked ${checked(phone.reviewedAt)}`), disclosureLink("ps-main-evidence", "View sources"));
  fragment.append(meta);
  if (phone.caveats.length || phone.conflicts.some((conflict) => !conflict.resolved)) {
    const scope = element("p", "Dates can vary by region and model. ", "ps-scope-note");
    scope.append(disclosureLink(`ps-scope-${phone.id}`, "Check scope and uncertainties"));
    fragment.append(scope);
  }
  return fragment;
}

function renderDetails(phone: PhoneRecord, sources: Map<string, SupportSource>, now: string, evidenceId = "ps-main-evidence", named = false) {
  const fragment = element("section", "", "ps-phone-details");
  if (named) {
    const title = element("h3", `${phone.model}: details and sources`);
    title.id = `ps-details-${phone.id}`;
    fragment.setAttribute("aria-labelledby", title.id);
    fragment.append(title);
  }
  const timeline = element("details", "", "ps-disclosure ps-timeline");
  timeline.append(element("summary", "Support timeline"));
  const points = element("ol");
  const milestones = supportTimeline(phone, now);
  points.style.setProperty("--ps-milestones", String(milestones.length));
  for (const point of milestones) {
    const item = element("li");
    item.dataset.phase = point.label === "Today" ? "today" : point.sort < now ? "past" : "future";
    item.append(element("span", point.label), element("strong", point.date));
    points.append(item);
  }
  timeline.append(points, element("p", "Milestones are shown in order, not to scale. Dates are only as precise as the source.", "ps-subtle"));
  const facts = element("dl", "", "ps-facts");
  const values = [
    ["Android version updates", androidSupportText(phone, now)],
    ["Security update frequency", cadenceText(phone)],
  ];
  for (const [label, value] of values) {
    const row = element("div");
    row.append(element("dt", label), element("dd", value));
    facts.append(row);
  }
  timeline.append(facts);
  fragment.append(timeline, caveats(phone), evidenceDetails(phone, sources, evidenceId));
  return fragment;
}

function renderComparison(first: PhoneRecord, second: PhoneRecord, now: string, remove: () => void) {
  const fragment = document.createDocumentFragment();
  const heading = element("h2", "Compare support", "ps-result-heading");
  heading.id = "ps-comparison-heading";
  heading.tabIndex = -1;
  const comparison = compareSecurity(first, second, now);
  fragment.append(heading, element("p", comparison.message, "ps-comparison-summary"));
  const wrap = element("div", "", "ps-table-wrap");
  const table = element("table", "", "ps-table ps-compare-table");
  table.setAttribute("role", "table");
  table.append(element("caption", `${first.model} and ${second.model}: documented software support`, "ps-sr-only"));
  const head = element("thead");
  head.setAttribute("role", "rowgroup");
  const headerRow = element("tr");
  headerRow.setAttribute("role", "row");
  for (const label of ["Support detail", first.model, second.model]) {
    const cell = element("th", label);
    cell.scope = "col";
    cell.setAttribute("role", "columnheader");
    headerRow.append(cell);
  }
  head.append(headerRow);
  const body = element("tbody");
  body.setAttribute("role", "rowgroup");
  const rows: Array<[string, (phone: PhoneRecord) => string | HTMLElement]> = [
    ["Security updates", (phone) => {
      const value = element("div");
      value.append(element("p", supportText(phone, "security", now)));
      if (comparison.longerId === phone.id) value.append(element("strong", "Later documented endpoint", "ps-later-end"));
      return value;
    }],
    ["Security support remaining", (phone) => remainingSupport(phone.security, now, supportEndIsConflicted(phone, "security"))],
    ["Android version updates", (phone) => {
      const presentation = androidSupportPresentation(phone, now);
      const value = element("div");
      value.append(element("p", `${presentation.label}: ${presentation.value}`));
      if (presentation.class === "B" || presentation.class === "C") {
        value.append(element("p", presentation.class === "B" ? "Current activity and end date not established." : "Exact end date not published.", "ps-subtle"));
      }
      return value;
    }],
    ["Security update frequency", cadenceText],
    ["Release", (phone) => formatDate(phone.release)],
    ["Sources", (phone) => {
      const value = element("div", "", "ps-compare-evidence");
      value.append(element("p", EVIDENCE_LABELS[phone.security.end.value ? phone.security.end.evidenceType : phone.security.state.evidenceType]));
      value.append(disclosureLink(phone.id === first.id ? "ps-main-evidence" : "ps-compare-evidence", `Sources for ${phone.model}`));
      return value;
    }],
    ["Record checked", (phone) => checked(phone.reviewedAt)],
  ];
  for (const [label, value] of rows) {
    const row = element("tr");
    row.setAttribute("role", "row");
    const title = element("th", label);
    title.scope = "row";
    title.setAttribute("role", "rowheader");
    row.append(title);
    for (const phone of [first, second]) {
      const cell = element("td");
      cell.setAttribute("role", "cell");
      cell.dataset.label = phone.model;
      const content = value(phone);
      cell.append(typeof content === "string" ? element("span", content) : content);
      row.append(cell);
    }
    body.append(row);
  }
  table.append(head, body);
  wrap.append(table);
  const removeButton = element("button", "Remove comparison", "ps-text-link");
  removeButton.type = "button";
  removeButton.addEventListener("click", remove);
  fragment.append(wrap, removeButton);
  return fragment;
}

function initChecker(root: HTMLElement) {
  const result = required<HTMLElement>(root, "[data-ps-result]");
  const details = required<HTMLElement>(root, "[data-ps-details]");
  const brands = required<HTMLDetailsElement>(document, "[data-ps-brands]");
  const comparison = required<HTMLElement>(root, "[data-ps-comparison]");
  const actions = required<HTMLElement>(root, "[data-ps-actions]");
  const compareSearch = required<HTMLElement>(root, "[data-ps-compare-search]");
  const compareToggle = required<HTMLButtonElement>(root, "[data-ps-compare-toggle]");
  const notice = required<HTMLElement>(root, "[data-ps-notice]");
  const noticeText = required<HTMLElement>(root, "[data-ps-notice-text]");
  const noticeRetry = required<HTMLButtonElement>(root, "[data-ps-notice-retry]");
  const announcement = required<HTMLElement>(root, "[data-ps-announcement]");
  let index: PhoneIndex | undefined;
  let modelId: string | null = null;
  let compareId: string | null = null;
  let navigationVersion = 0;
  const load = async () => { index = await loadIndex(); return index; };
  const edit = () => { navigationVersion++; hideNotice(); };
  const primary = createSearch(required(root, '[data-ps-search="main"]'), {
    load, excludeId: () => "", edit, select: (phone) => select(phone.id, phone.id === compareId ? null : compareId, "main"),
  });
  const secondary = createSearch(required(root, '[data-ps-search="compare"]'), {
    load, excludeId: () => modelId ?? "", edit, select: (phone) => select(modelId, phone.id, "compare"),
  });

  function hideNotice() {
    notice.hidden = true;
    noticeRetry.hidden = true;
  }

  function showNotice(text: string, canRetry = false) {
    noticeText.textContent = text;
    noticeRetry.hidden = !canRetry;
    notice.hidden = false;
  }

  function showCompareSearch(show: boolean) {
    compareSearch.hidden = !show;
    compareToggle.setAttribute("aria-expanded", String(show));
    if (!show) secondary.close();
  }

  function focusHeading(selector: string) {
    const heading = required(root, selector);
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  function updateUrl(replace = false) {
    const url = selectionUrl({ modelId, compareId });
    if (`${location.pathname}${location.search}${location.hash}` !== url) {
      if (replace) history.replaceState(null, "", url);
      else history.pushState(null, "", url);
    }
  }

  function render() {
    const phone = index?.records.find((record) => record.id === modelId);
    const other = index?.records.find((record) => record.id === compareId);
    primary.set(phone);
    secondary.set(other);
    result.hidden = !phone;
    details.hidden = !phone;
    brands.open = !phone;
    actions.hidden = !phone;
    comparison.hidden = !phone || !other;
    showCompareSearch(false);
    compareToggle.textContent = other ? "Change comparison" : "Compare with another phone";
    result.replaceChildren();
    details.replaceChildren();
    comparison.replaceChildren();
    if (!phone || !index) return;
    const sources = new Map(index.sources.map((source) => [source.id, source]));
    const now = todayIso(new Date());
    result.append(renderResult(phone, now));
    details.append(renderDetails(phone, sources, now, "ps-main-evidence", Boolean(other)));
    if (other) details.append(renderDetails(other, sources, now, "ps-compare-evidence", true));
    if (other) comparison.append(renderComparison(phone, other, now, () => {
      select(modelId, null);
      announcement.textContent = "Comparison removed.";
      compareToggle.focus();
    }));
  }

  function select(nextModel: string | null, nextCompare: string | null, focus?: "main" | "compare") {
    navigationVersion++;
    modelId = nextModel;
    compareId = nextModel && nextCompare !== nextModel ? nextCompare : null;
    hideNotice();
    render();
    updateUrl();
    const selected = index?.records.find((phone) => phone.id === (focus === "compare" ? compareId : modelId));
    if (selected) announcement.textContent = `${selected.model} ${focus === "compare" ? "added to the comparison" : "support details shown"}.`;
    if (focus && selected) focusHeading(focus === "compare" ? "#ps-comparison-heading" : "#ps-result-heading");
  }

  async function restoreUrl() {
    const request = ++navigationVersion;
    primary.close();
    secondary.close();
    const search = location.search;
    const params = new URLSearchParams(search);
    if (!params.has("model") && !params.has("compare")) {
      modelId = null;
      compareId = null;
      render();
      hideNotice();
      return;
    }
    showNotice("Loading the linked phone support details.");
    try {
      const data = await load();
      if (request !== navigationVersion) return;
      const selection = parseSelection(search, data.records);
      modelId = selection.modelId;
      compareId = selection.compareId;
      render();
      if (selection.invalid) {
        updateUrl(true);
        showNotice("A phone in this link is not available in the support data. Search for a model below.");
      } else hideNotice();
      if (modelId) announcement.textContent = compareId ? "Linked phone comparison loaded." : "Linked phone support details loaded.";
    } catch {
      if (request === navigationVersion) showNotice("The linked support details could not be loaded. Try again or browse by brand below.", true);
    }
  }

  compareToggle.addEventListener("click", () => {
    const show = Boolean(compareSearch.hidden);
    showCompareSearch(show);
    if (show) secondary.input.focus();
  });
  required<HTMLButtonElement>(root, "[data-ps-compare-close]").addEventListener("click", () => {
    showCompareSearch(false);
    compareToggle.focus();
  });
  required<HTMLButtonElement>(root, "[data-ps-clear]").addEventListener("click", () => {
    select(null, null);
    announcement.textContent = "Phone selection cleared.";
    primary.input.focus();
  });
  noticeRetry.addEventListener("click", () => { void restoreUrl(); });
  window.addEventListener("popstate", () => {
    // In-page source links must not reset the selected phone or close its details.
    if (location.search !== new URL(selectionUrl({ modelId, compareId }), location.href).search) void restoreUrl();
  });
  void restoreUrl();
}

document.querySelectorAll<HTMLElement>("[data-phone-support]").forEach(initChecker);
