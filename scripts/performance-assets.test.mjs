import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";

test("built font sources satisfy the same-origin font policy", () => {
  const styles = readdirSync("dist/_astro")
    .filter((file) => file.endsWith(".css"))
    .map((file) => readFileSync(`dist/_astro/${file}`, "utf8"))
    .join("\n");
  const faces = [...styles.matchAll(/@font-face\s*\{[^}]+\}/g)];
  assert.ok(faces.length > 0);
  for (const [face] of faces) {
    for (const [, url] of face.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
      assert.ok(url.startsWith("/"), `Font must be served from this site: ${url.slice(0, 100)}`);
      assert.ok(existsSync(`dist${url}`), `Missing font: ${url}`);
    }
  }
});

test("feature images include mobile and high-density image candidates", () => {
  const html = readFileSync("dist/index.html", "utf8");
  const images = [...html.matchAll(/<img\b[^>]*class="feature-image"[^>]*>/g)];
  assert.equal(images.length, 6);
  for (const [image] of images) {
    const srcset = image.match(/srcset="([^"]+)"/)?.[1];
    assert.ok(srcset, "Feature images must offer responsive sources");
    const candidates = srcset.split(",").map((candidate) => candidate.trim().split(/\s+/));
    const widths = candidates.map(([, width]) => Number.parseInt(width));
    assert.ok(widths.includes(224), "Include the mobile 1x size");
    assert.ok(widths.includes(448), "Include the mobile 2x size");
    assert.ok(Math.max(...widths) >= 912, "Keep sharp images on high-density desktop screens");
    for (const [url] of candidates) assert.ok(existsSync(`dist${url}`), `Missing image: ${url}`);
    assert.match(image, /sizes="[^"]+"/);
    assert.match(image, /loading="lazy"/);
    assert.match(image, /width="1254" height="1254"/);
  }
});
