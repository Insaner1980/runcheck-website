import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const header = readFileSync('src/components/Header.astro', 'utf8');
const globalStyles = readFileSync('src/styles/global.css', 'utf8');

assert.match(
  header,
  /href: isFinnish \? '\/fi\/artikkelit\/' : '\/articles\/', label: isFinnish \? 'Artikkelit' : 'Articles'/,
  'Articles should be a direct localized index link like the KnitTools navigation.',
);
assert.doesNotMatch(header, /Suomeksi|label: isFinnish \? 'English'/, 'Header should not show a target-language switch link.');
assert.doesNotMatch(header, /data-articles-menu|ARTICLE_MENU_COLUMNS|articles-menu-panel/, 'Header should not retain the old article mega-menu.');
assert.match(header, /<a class="hero-nav-action" href=\{link\.href\}/, 'Features and Articles should share the direct nav link treatment.');
assert.match(header, /data-open-label=\{menuLabels\.open\}/, 'Mobile navigation should expose a localized open label.');
assert.match(header, /data-close-label=\{menuLabels\.close\}/, 'Mobile navigation should expose a localized close label.');
assert.match(header, /<ArticleSearch variant="header" locale=\{locale\}/, 'Header search should follow the current route language.');
assert.doesNotMatch(globalStyles, /\.articles-menu/, 'Dead mega-menu styles should be removed.');
assert.match(globalStyles, /\.hero-nav-action\s*\{/, 'Shared hero nav action styles should remain centralized in global CSS.');

console.log('articles-menu.test.mjs passed');
