import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

// Italy is a production locale; this verifies its generated static output.
const files = [];
const collect = async (root) => {
  const { readdirSync } = await import('node:fs');
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) await collect(full);
    else if (entry.name === 'index.html') files.push(full);
  }
};

test('Italian tuotantobuild sisältää 160 indeksoitavaa artikkelia ja sitemap-URL:t', async () => {
  const root = path.resolve('dist/it/articoli');
  assert.ok(existsSync(root));
  await collect(root);
  const articlePages = files.filter((file) => {
    const html = readFileSync(file, 'utf8');
    return html.includes('<meta property="og:type" content="article"');
  });
  assert.equal(articlePages.length, 160);
  for (const file of articlePages) {
    const html = readFileSync(file, 'utf8');
    assert.match(html, /<html lang="it"/);
    assert.match(html, /<link rel="canonical" href="https:\/\/runcheckapp\.com\/it\/articoli\//);
    assert.match(html, /hreflang="it"/);
    assert.doesNotMatch(html, /<meta name="robots" content="noindex/);
  }
  assert.match(readFileSync('dist/sitemap-0.xml', 'utf8'), /https:\/\/runcheckapp\.com\/it\/articoli\//);
});
