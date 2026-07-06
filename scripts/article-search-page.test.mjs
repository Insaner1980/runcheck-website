import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync('src/pages/articles/index.astro', 'utf8');

assert.match(page, /import ArticleSearch from ['"](\.\.\/)+components\/ArticleSearch\.astro['"]/, 'page must import ArticleSearch');
assert.match(page, /<ArticleSearch\s+variant="page"\s*\/>/, 'page must render the page variant');
assert.doesNotMatch(page, /<p[^>]*>\s*Articles\s*<\/p>/, 'articles page should not render the duplicate Articles eyebrow above the heading');

const h1Index = page.indexOf('<h1');
const searchIndex = page.indexOf('<ArticleSearch');
const listIndex = page.indexOf('ARTICLE_HUBS.map');
assert.ok(h1Index < searchIndex, 'search should come after the heading');
assert.ok(searchIndex < listIndex, 'search should come before the hub list');

console.log('article-search-page.test.mjs passed');
