import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const notFoundPath = path.join(root, "dist", "404.html");

test("the production build emits a top-level 404 document", () => {
  assert.equal(
    existsSync(notFoundPath),
    true,
    "dist/404.html must exist so Cloudflare Pages does not enable its SPA fallback",
  );
});

test("the 404 document is excluded from indexing", () => {
  assert.equal(
    existsSync(notFoundPath),
    true,
    "dist/404.html must exist before its indexing directives can be checked",
  );
  const html = readFileSync(notFoundPath, "utf8");
  assert.match(html, /<meta name="robots" content="noindex,follow"\s*\/?>/);
});

test("the sitemap excludes the 404 document", () => {
  const sitemap = readFileSync(
    path.join(root, "dist", "sitemap-0.xml"),
    "utf8",
  );
  assert.doesNotMatch(sitemap, /https:\/\/runcheckapp\.com\/404(?:[\/.<])/);
});
