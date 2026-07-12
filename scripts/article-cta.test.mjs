import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const articleCtaPath = 'src/components/ArticleCTA.astro';

assert.ok(existsSync(articleCtaPath), 'ArticleCTA component should exist for article and hub pages.');

const articleCta = readFileSync(articleCtaPath, 'utf8');
const articleIndex = readFileSync('src/pages/articles/index.astro', 'utf8');
const articleIndexComponent = readFileSync('src/components/ArticleIndexPage.astro', 'utf8');
const articleHub = readFileSync('src/pages/articles/[hub].astro', 'utf8');
const articleDetail = readFileSync('src/pages/articles/[hub]/[...slug].astro', 'utf8');
const home = readFileSync('src/pages/index.astro', 'utf8');
const footer = readFileSync('src/components/Footer.astro', 'utf8');

assert.match(articleCta, /<section\b[^>]*class="article-cta"/, 'ArticleCTA should render a compact article CTA section.');
assert.match(articleCta, /aria-labelledby="article-cta-title"/, 'ArticleCTA should label its section heading.');
assert.match(articleCta, /includeGuidesLink/, 'ArticleCTA should let the articles index avoid linking to itself.');
assert.match(articleCta, /href="\/#features"/, 'ArticleCTA primary action should point to the product feature overview.');
assert.match(articleCta, /isFinnish \? '\/fi\/artikkelit\/' : '\/articles\/'/, 'ArticleCTA secondary action should point to the matching language index.');
assert.doesNotMatch(articleCta, /cta-background-image|cta-glass-metal-background/, 'ArticleCTA should not reuse the homepage visual CTA treatment.');

for (const [label, source] of [
  ['hub page', articleHub],
  ['article detail', articleDetail],
]) {
  assert.match(source, /import ArticleCTA from ['"](\.\.\/)+components\/ArticleCTA\.astro['"];/, `${label} should import ArticleCTA.`);
}

assert.match(articleIndex, /<ArticleIndexPage\s+locale="en"/, 'English articles index should use the shared article index component.');
assert.match(articleIndexComponent, /import ArticleCTA from ['"]\.\/ArticleCTA\.astro['"];/, 'Shared articles index component should import ArticleCTA.');
assert.match(articleIndexComponent, /<ArticleCTA\s+includeGuidesLink=\{false\}\s+locale=\{locale\}\s*\/>/, 'Articles index should not render a self-linking guide CTA action.');
assert.match(articleHub, /<ArticleCTA\s*\/>/, 'Hub page should render the default ArticleCTA.');
assert.match(articleDetail, /<ArticleCTA\s*\/>/, 'Article detail should render the default ArticleCTA.');

assert.doesNotMatch(home, /ArticleCTA/, 'Homepage should keep only the main CTA, not the compact article CTA.');
assert.match(footer, /href="\/#features">\{isFinnish \? 'Ominaisuudet' : 'Features'\}<\/a>/, 'Footer should expose the localized product feature path sitewide.');

console.log('article-cta.test.mjs passed');
