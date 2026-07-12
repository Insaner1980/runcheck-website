import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const englishPage = readFileSync('src/pages/articles/index.astro', 'utf8');
const finnishPage = readFileSync('src/pages/fi/artikkelit/index.astro', 'utf8');
const component = readFileSync('src/components/ArticleIndexPage.astro', 'utf8');

assert.match(englishPage, /<ArticleIndexPage\s+locale="en"/, 'English index should use the shared article index component.');
assert.match(finnishPage, /<ArticleIndexPage\s+locale="fi"/, 'Finnish index should use the shared article index component.');
assert.match(component, /import ArticleSearch from ['"]\.\/ArticleSearch\.astro['"]/, 'shared index must import ArticleSearch');
assert.match(component, /<ArticleSearch\s+variant="page"\s+locale=\{locale\}\s*\/>/, 'shared index must render a localized page search');
assert.match(component, /class="article-category-nav"/, 'index should expose category jump links like the KnitTools article index.');
assert.match(component, /hubArticles\.slice\(0, 3\)/, 'each category should preview exactly three articles.');
assert.match(component, /remainingCount/, 'each category should calculate its remaining article count.');
assert.match(component, /copy\.viewMore\(remainingCount\)/, 'each category should link to the full hub with a localized remaining count.');

const headingIndex = component.indexOf('article-index-heading');
const searchIndex = component.indexOf('<ArticleSearch');
const categoryNavIndex = component.indexOf('article-category-nav');
const sectionsIndex = component.indexOf('article-index-sections');
assert.ok(headingIndex < searchIndex, 'search should come after the heading');
assert.ok(searchIndex < categoryNavIndex, 'category shortcuts should come after search');
assert.ok(categoryNavIndex < sectionsIndex, 'category shortcuts should come before article sections');

console.log('article-search-page.test.mjs passed');
