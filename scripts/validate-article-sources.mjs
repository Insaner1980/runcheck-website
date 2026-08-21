import {
  ARTICLE_SOURCE_CATALOG,
  ARTICLE_SOURCE_IDS,
} from "../src/data/articleSources.mjs";

const timeoutMs = 20_000;
const attempts = 3;
const concurrency = 6;
const softErrorPattern =
  /(?:page|document) (?:was )?not found|the requested (?:page|url) (?:was|could) not be found|error\s*404|this page (?:isn't|is not) available/i;

function normalizedHost(value) {
  return new URL(value).hostname.replace(/^www\./, "");
}

function redirectIsRelated(requested, resolved) {
  const requestedHost = normalizedHost(requested);
  const resolvedHost = normalizedHost(resolved);
  return (
    requestedHost === resolvedHost ||
    requestedHost.endsWith(`.${resolvedHost}`) ||
    resolvedHost.endsWith(`.${requestedHost}`)
  );
}

async function requestSource(item) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(item.url, {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8",
          "accept-language": "en",
          "user-agent":
            "runcheck-source-validator/1.0 (+https://runcheckapp.com/)",
        },
        redirect: "follow",
        signal: controller.signal,
      });
      clearTimeout(timer);

      if ([401, 403, 429].includes(response.status) && item.allowRestricted) {
        return { kind: "warning", detail: `${response.status} restricted` };
      }

      if (response.status >= 500 || response.status === 429) {
        lastError = new Error(`HTTP ${response.status}`);
        continue;
      }
      if (!response.ok) {
        return { kind: "error", detail: `HTTP ${response.status}` };
      }
      if (!redirectIsRelated(item.url, response.url)) {
        return {
          kind: "error",
          detail: `unrelated redirect to ${response.url}`,
        };
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("pdf")) {
        const body = await response.text();
        const pageIdentity = [
          body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1],
          body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1],
        ]
          .filter(Boolean)
          .join(" ")
          .replace(/<[^>]+>/g, " ");
        if (
          softErrorPattern.test(pageIdentity) ||
          (body.length < 10_000 && softErrorPattern.test(body))
        ) {
          return { kind: "error", detail: "soft error page" };
        }
        if (
          /accounts\.(?:google|samsung)\.com/i.test(response.url) ||
          /<title>\s*sign in(?:\s*[-|])/i.test(body)
        ) {
          return { kind: "error", detail: "login required" };
        }
      }

      return {
        kind: "ok",
        detail:
          response.url === item.url
            ? `${response.status}`
            : `${response.status} -> ${response.url}`,
      };
    } catch (error) {
      clearTimeout(timer);
      lastError = error;
    }
  }

  return {
    kind: "error",
    detail:
      lastError?.name === "AbortError"
        ? `timeout after ${attempts} attempts`
        : `${lastError?.message ?? "request failed"} after ${attempts} attempts`,
  };
}

const entries = Object.entries(ARTICLE_SOURCE_CATALOG);
const uniqueSources = [
  ...new Map(entries.map(([, item]) => [item.url, item])).values(),
];
const resultByUrl = new Map();
let nextIndex = 0;

async function worker() {
  while (nextIndex < uniqueSources.length) {
    const index = nextIndex;
    nextIndex += 1;
    const item = uniqueSources[index];
    resultByUrl.set(item.url, await requestSource(item));
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));

const results = entries.map(([id, item]) => ({
  id,
  item,
  ...resultByUrl.get(item.url),
}));

function articleFamiliesFor(sourceId) {
  return Object.entries(ARTICLE_SOURCE_IDS)
    .filter(([, ids]) => ids.includes(sourceId))
    .map(([sourceNumber]) => sourceNumber)
    .join(",");
}

for (const result of results) {
  const prefix =
    result.kind === "ok" ? "OK" : result.kind === "warning" ? "WARN" : "FAIL";
  const affected =
    result.kind === "ok"
      ? ""
      : ` (article families ${articleFamiliesFor(result.id)})`;
  console.log(
    `${prefix.padEnd(4)} ${result.id.padEnd(20)} ${result.detail}${affected}`,
  );
}

const failures = results.filter((result) => result.kind === "error");
const warnings = results.filter((result) => result.kind === "warning");
console.log(
  `\nChecked ${results.length} sources: ${results.length - failures.length - warnings.length} healthy, ${warnings.length} restricted, ${failures.length} failed.`,
);

if (failures.length > 0) process.exitCode = 1;
