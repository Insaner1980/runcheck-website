import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const files = [
  ['Hub article list', 'src/pages/articles/[hub].astro'],
  ['Articles index list', 'src/components/ArticleIndexPage.astro'],
];

for (const [name, file] of files) {
  const source = readFileSync(file, 'utf8');

  assert.doesNotMatch(source, /Article \{article\.data\.sourceNumber\}/, `${name} should not show per-article numbers or metadata.`);
  assert.doesNotMatch(source, /<li class="[^"]*\b(?:rounded-panel|border|bg-run-surface|shadow-panel|p-5)\b[^"]*"/, `${name} should not add per-row heavy card utilities.`);
  assert.match(source, /<a class="[^"]*\barticle-list-link\b[^"]*"/, `${name} should render article titles with the shared lightweight card link class.`);
}

const hubSource = readFileSync('src/pages/articles/[hub].astro', 'utf8');
const globalStyles = readFileSync('src/styles/global.css', 'utf8');
const contentConfig = readFileSync('src/content.config.ts', 'utf8');
const articleDetailSource = readFileSync('src/pages/articles/[hub]/[...slug].astro', 'utf8');
const cssBlockFor = (selector) => {
  const matches = [...globalStyles.matchAll(new RegExp(`${selector.replaceAll('.', '\\.')}\\s*\\{([^}]*)\\}`, 'gs'))];
  assert.ok(matches.length > 0, `${selector} should have a style block.`);
  return matches.at(-1)[1];
};
const articleCardInteractiveBlock = globalStyles.match(
  /\.article-list-link:hover,\s*\.article-list-link:focus-visible\s*\{([^}]*)\}/s,
)?.[1];

assert.match(
  hubSource,
  /<a class="article-list-link"[^>]*>\s*<span class="article-list-title">/s,
  'Hub article links should wrap the title in the shared article tile title treatment.',
);
assert.doesNotMatch(
  hubSource,
  /<a class="[^"]*\btracking-widest\b[^"]*" href="\/">\s*runcheck\s*<\/a>/s,
  'Article hub hero should not repeat the runcheck brand text above the page title.',
);
assert.doesNotMatch(
  hubSource,
  /title:\s*`\$\{hub\.title\} articles`/,
  'Article hub lists should not add a duplicate "[hub title] articles" heading below the hero.',
);
assert.match(
  hubSource,
  /\{section\.title &&\s*<h2\b/,
  'Article hub section headings should only render when an explicit section title exists.',
);
assert.match(
  hubSource,
  /<div class="article-page-shell article-page-shell-medium">/,
  'Article hub hero should use the shared article page shell for top alignment.',
);
assert.match(
  readFileSync('src/pages/articles/index.astro', 'utf8'),
  /<div class="article-page-shell article-page-shell-wide">/,
  'Articles index hero should use the shared article page shell for top alignment.',
);
assert.match(
  articleDetailSource,
  /<div class="article-page-shell article-page-shell-narrow article-detail-shell">/,
  'Article detail hero should use the shared shell with a title offset for top alignment.',
);
assert.match(
  hubSource,
  /<span class="article-list-description">\s*\{article\.data\.listSummary \?\? article\.data\.description\}\s*<\/span>/s,
  'Hub article links should render listSummary and fall back to the SEO description during rollout.',
);
assert.match(contentConfig, /listSummary:\s*z\.string\(\)\.optional\(\)/, 'Article schema should allow an optional listSummary field.');
assert.match(
  articleDetailSource,
  /description=\{metaDescription\}/,
  'Article detail metadata should use the normalized meta description.',
);
assert.match(
  articleDetailSource,
  /title=\{metaTitle\}/,
  'Article detail metadata should use the optional shorter meta title.',
);
const articleDetailTemplate = articleDetailSource.split(/^---\s*$/m).at(-1) ?? '';
assert.doesNotMatch(articleDetailTemplate, /article\.data\.sourceNumber/, 'Article detail templates should not render source article numbers.');
assert.ok(articleCardInteractiveBlock, 'Article list cards should define a shared hover and focus-visible block.');
assert.doesNotMatch(cssBlockFor('.article-list-link'), /transform:/, 'Article list cards should not move in their base state.');
assert.doesNotMatch(articleCardInteractiveBlock, /transform:/, 'Article list cards should stay simple without hover movement.');
assert.match(cssBlockFor('.article-link-list'), /grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(min\(100%,\s*20rem\),\s*1fr\)\);/, 'Article lists should use responsive short tile columns.');
assert.match(cssBlockFor('.article-link-list'), /gap:\s*0\.9rem;/, 'Article lists should use compact gaps between lightweight tiles.');
assert.doesNotMatch(cssBlockFor('.article-link-list'), /border-top:/, 'Article card lists should not keep the old top divider.');
assert.doesNotMatch(cssBlockFor('.article-list-link'), /border:/, 'Article tiles should avoid visible borders.');
assert.match(
  cssBlockFor('.article-list-link'),
  /border-radius:\s*var\(--run-article-card-radius\);/,
  'Article tiles should use the centralized article radius.',
);
assert.match(
  cssBlockFor('.article-list-link'),
  /background:\s*var\(--run-article-card-bg\);/,
  'Article links should use the centralized lightweight card fill.',
);
assert.doesNotMatch(cssBlockFor('.article-list-link'), /box-shadow:/, 'Article cards should avoid heavy shadows.');
assert.match(cssBlockFor('.article-list-link'), /padding:\s*var\(--run-article-card-padding\);/, 'Article links should use centralized compact card padding.');
assert.match(cssBlockFor('.article-list-link'), /min-height:\s*7rem;/, 'Article links should render as short rectangular tiles.');
assert.doesNotMatch(cssBlockFor('.article-list-description'), /white-space:\s*nowrap;/, 'Article descriptions should be allowed to wrap inside cards.');
assert.doesNotMatch(cssBlockFor('.article-link-list > li'), /border-bottom:/, 'Article card list items should not keep old row dividers.');
assert.match(cssBlockFor('.article-list-link'), /min-width:\s*0;/, 'Article links should be allowed to shrink inside the list column.');
assert.match(cssBlockFor('.article-link-list > li'), /min-width:\s*0;/, 'Article list grid items should not overflow from nowrap summaries.');
