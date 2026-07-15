import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import { PUBLISHED_ARTICLE_LOCALE_CODES } from '../src/data/articleLocaleConfig.mjs';
import { articlePath } from '../src/data/articlePaths.mjs';
import { ARTICLE_SLUG_MIGRATIONS } from '../src/data/articleSlugMigrations.mjs';

const contentRoot = path.resolve('src/content/articles');
const markdownFiles = (root) => readdirSync(root, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? markdownFiles(path.join(root, entry.name)) : entry.name.endsWith('.md') ? [path.join(root, entry.name)] : []);
const frontmatterValue = (source, key) => {
  const value = source.match(new RegExp(`^${key}: (.+)$`, 'm'))?.[1];
  if (value === undefined) return undefined;
  try { return JSON.parse(value); } catch { return value; }
};
const htmlEscape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const outputFile = (urlPath) => path.resolve('dist', urlPath.replace(/^\//, ''), 'index.html');

test('kaikki 1 280 julkaistua artikkelia säilyttävät teknisen SEO-sopimuksen', () => {
  const published = new Set(PUBLISHED_ARTICLE_LOCALE_CODES);
  const articles = markdownFiles(contentRoot).map((file) => {
    const source = readFileSync(file, 'utf8');
    return { file, source, locale: frontmatterValue(source, 'locale') ?? 'en' };
  }).filter((article) => published.has(article.locale));
  const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
  const byLocale = Object.fromEntries(PUBLISHED_ARTICLE_LOCALE_CODES.map((locale) => [locale, 0]));

  assert.equal(articles.length, 1280);
  assert.ok(!existsSync('dist/it'), 'Tuotantobuild ei saa sisältää /it/-reittejä.');
  assert.doesNotMatch(sitemap, /https:\/\/runcheckapp\.com\/it\//);

  for (const article of articles) {
    const hub = frontmatterValue(article.source, 'hub');
    const title = frontmatterValue(article.source, 'title');
    const id = path.basename(article.file, '.md');
    const urlPath = articlePath(hub, id, article.locale);
    const file = outputFile(urlPath);
    assert.ok(existsSync(file), `${urlPath} ei rakentunut.`);
    const html = readFileSync(file, 'utf8');

    assert.match(html, new RegExp(`<html lang="${article.locale}"`));
    assert.ok(html.includes(`<link rel="canonical" href="https://runcheckapp.com${urlPath}"`), `${urlPath}: canonical on väärä.`);
    assert.ok(html.includes(`>${htmlEscape(title)}</h1>`), `${urlPath}: H1 ei vastaa frontmatter-titleä.`);
    for (const locale of PUBLISHED_ARTICLE_LOCALE_CODES) assert.ok(html.includes(`hreflang="${locale}"`), `${urlPath}: hreflang ${locale} puuttuu.`);
    assert.ok(html.includes('hreflang="x-default"'));
    assert.doesNotMatch(html, /hreflang="it"/);
    assert.doesNotMatch(html, /<meta name="robots" content="noindex/);
    assert.ok(sitemap.includes(`<loc>https://runcheckapp.com${urlPath}</loc>`), `${urlPath}: sitemap-merkintä puuttuu.`);
    byLocale[article.locale] += 1;
  }

  assert.deepEqual(byLocale, Object.fromEntries(PUBLISHED_ARTICLE_LOCALE_CODES.map((locale) => [locale, 160])));
  for (const migration of ARTICLE_SLUG_MIGRATIONS) {
    assert.ok(sitemap.includes(`<loc>https://runcheckapp.com${migration.newPath}</loc>`));
    assert.ok(!sitemap.includes(`<loc>https://runcheckapp.com${migration.oldPath}</loc>`));
  }
});
