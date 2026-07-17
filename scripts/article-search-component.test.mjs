import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('article search component', () => {
const source = readFileSync('src/components/ArticleSearch.astro', 'utf8');
const globalStyles = readFileSync('src/styles/global.css', 'utf8');
const localeConfig = readFileSync('src/data/articleLocaleConfig.mjs', 'utf8');
const heroNavTextHoverFill = globalStyles.match(/--run-hero-nav-text-hover-fill:\s*([\s\S]*?);/)?.[1] ?? '';
const heroNavIconHoverColor = globalStyles.match(/--run-hero-nav-icon-hover-color:\s*([^;]+);/)?.[1] ?? '';
const heroNavActionHoverBlock = globalStyles.match(
  /\.hero-nav-action:hover,[\s\S]*?\.hero-nav-action:focus-visible\s*\{([\s\S]*?)\}/,
)?.[1] ?? '';
const heroNavActionLabelBlock = globalStyles.match(
  /\.hero-nav-label\s*\{([\s\S]*?)\}/,
)?.[1] ?? '';
const heroNavActionLabelHoverBlock = globalStyles.match(
  /\.hero-nav-action:hover \.hero-nav-label,[\s\S]*?\.hero-nav-action:focus-visible \.hero-nav-label\s*\{([\s\S]*?)\}/,
)?.[1] ?? '';
const heroNavActionOverlayBlock = globalStyles.match(
  /\.hero-nav-label-gradient\s*\{([\s\S]*?)\}/,
)?.[1] ?? '';
const heroNavActionOverlayHoverBlock = globalStyles.match(
  /\.hero-nav-action:hover \.hero-nav-label-gradient,[\s\S]*?\.hero-nav-action:focus-visible \.hero-nav-label-gradient\s*\{([\s\S]*?)\}/,
)?.[1] ?? '';
const heroNavIconHoverBlock = globalStyles.match(
  /\.hero-nav-icon-action:hover,[\s\S]*?\.hero-nav-icon-action:focus-visible\s*\{([\s\S]*?)\}/,
)?.[1] ?? '';
const heroNavInlineIconHoverBlock = globalStyles.match(
  /\.hero-nav-inline-icon-action:hover,[\s\S]*?\.hero-nav-inline-icon-action:focus-visible\s*\{([\s\S]*?)\}/,
)?.[1] ?? '';
const reducedMotionBlock = globalStyles.match(
  /@media \(prefers-reduced-motion: reduce\) \{([\s\S]*?)\.article-list-link,/,
)?.[1] ?? '';

assert.match(source, /variant/, 'component should accept a variant prop');
assert.match(source, /data-variant=/, 'root should expose the variant');
assert.match(source, /data-article-search/, 'root should carry the search hook');

assert.match(source, /data-search-toggle/, 'header variant needs a toggle button');
assert.match(source, /aria-label=\{labels\.search\}/, 'toggle must use the localized search label');
assert.match(source, /const localeCopy = ARTICLE_LOCALES\[locale\]/, 'component should read search labels from the locale contract');
assert.match(localeConfig, /Hae artikkeleita/, 'locale contract should include the Finnish search label');
assert.match(source, /data-index-url=/, 'each localized widget should expose its own search index URL');
assert.match(source, /class="hero-nav-action hero-nav-icon-action"[\s\S]*data-search-toggle/, 'header search toggle should use the shared hero nav action treatment.');
assert.match(source, /data-search-shell/, 'header search should expand as one shell');
assert.match(source, /\bhero-nav-search-shell\b/, 'header search shell should use the shared open search surface.');
assert.match(source, /data-search-icon/, 'search icon hook required');
assert.match(source, /data-search-close/, 'expanded header search should provide an inline close control');
assert.doesNotMatch(
  source,
  /\{isHeader && \([\s\S]*data-search-toggle[\s\S]*?<\/button>\s*\)\}\s*<div/,
  'header variant should not render a standalone icon button beside a second search field',
);

assert.match(source, /type="search"/, 'must use a search input');
assert.match(
  source,
  /webkit-search-cancel-button/,
  'native browser search cancel control should be hidden so the header has one close control',
);
assert.match(source, /data-search-input/, 'input hook required');
assert.match(
  source,
  /isHeader\s*\?\s*'[^']*text-sm[^']*font-medium[^']*leading-5[^']*text-run-white[^']*placeholder:text-run-white/,
  'header search input should match the primary nav link typography',
);
assert.match(
  source,
  /:\s*'[^']*text-base[^']*text-run-text[^']*placeholder:text-run-muted/,
  'page search input should keep the larger page-field typography',
);
assert.match(source, /data-search-results/, 'results container hook required');
assert.match(source, /\bhero-nav-panel\b[\s\S]*data-search-results/, 'search results should use the shared hero nav panel surface.');
assert.match(source, /link\.className = 'hero-nav-panel-link'/, 'search result rows should use the same hover treatment as article menu rows.');
assert.match(source, /role="listbox"/, 'results must be a listbox');
assert.match(source, /\{!isHeader && \([\s\S]*data-search-underline/, 'underline should be limited to the page search variant, not the hero header search.');

assert.match(source, /aria-expanded/, 'expandable state exposed');
assert.match(source, /sr-only/, 'a hidden label for the input');
assert.match(source, /motion-safe:/, 'animate only when motion is allowed');
assert.match(source, /motion-reduce:/, 'reduced-motion fallback');

assert.match(source, /searchArticles/, 'client script must reuse searchArticles');
assert.match(source, /search-index\.json/, 'client script must fetch the index');
assert.doesNotMatch(
  localeConfig,
  /(?<![\w.])process\.env\b/,
  'search client dependencies must not read Node process.env directly in the browser',
);

assert.doesNotMatch(source, /#[0-9a-fA-F]{3,6}/, 'no hardcoded hex colors');
assert.match(globalStyles, /\.hero-nav-search-shell\[data-open="true"\]/, 'Open header search should be styled as a shared hero nav surface.');
assert.match(heroNavTextHoverFill, /linear-gradient\(/, 'header nav text hover should use a soft gradient clipped to the text.');
assert.match(heroNavTextHoverFill, /--color-run-blue(?:-highlight)?/, 'header nav text hover should be tinted with the shared blue tokens.');
assert.doesNotMatch(heroNavTextHoverFill, /--color-run-white/, 'header nav text hover should not mix back toward white so far that the effect disappears.');
assert.doesNotMatch(heroNavTextHoverFill, /--color-run-cyan/, 'header nav text hover should stay blue instead of drifting toward green-cyan.');
assert.match(globalStyles, /--run-hero-nav-text-hover-shadow:/, 'header nav hover should define a subtle text glow token instead of a button background.');
assert.match(heroNavIconHoverColor, /--color-run-blue-highlight/, 'header nav icon hover should use the shared blue highlight token.');
assert.match(heroNavActionHoverBlock, /background:\s*transparent;/, 'text hover should not draw a visible button background.');
assert.match(heroNavActionHoverBlock, /color:\s*var\(--run-hero-nav-icon-hover-color\);/, 'text hover should have a visible blue fallback color even if gradient text is subtle.');
assert.doesNotMatch(heroNavActionHoverBlock, /background:\s*var\(/, 'text hover should not use a token as a background fill.');
assert.doesNotMatch(heroNavActionHoverBlock, /background-image:\s*var\(/, 'text hover should not swap the element background image directly.');
assert.doesNotMatch(heroNavActionHoverBlock, /color:\s*transparent;/, 'text hover should not make the base text transparent abruptly.');
assert.doesNotMatch(globalStyles, /content:\s*attr\(data-hero-nav-label\)/, 'text hover gradient should not use generated content that can duplicate accessible names.');
assert.match(
  heroNavActionLabelBlock,
  /transition:\s*color var\(--run-hero-nav-transition\),\s*text-shadow var\(--run-hero-nav-transition\);/s,
  'base label should color-transition and glow as a visible fallback under the gradient.',
);
assert.match(heroNavActionLabelHoverBlock, /color:\s*var\(--run-hero-nav-icon-hover-color\);/, 'base label should become visibly blue on hover, open, and focus states.');
assert.match(heroNavActionLabelHoverBlock, /text-shadow:\s*var\(--run-hero-nav-text-hover-shadow\);/, 'base label should glow on hover so the state remains visible under the cursor.');
assert.doesNotMatch(heroNavActionLabelHoverBlock, /opacity:\s*0;/, 'base label should not disappear completely because the hover needs to stay visible.');
assert.match(reducedMotionBlock, /\.hero-nav-label,/, 'base label crossfade should be disabled by the reduced-motion media query.');
assert.match(heroNavActionOverlayBlock, /background-image:\s*var\(--run-hero-nav-text-hover-fill\);/, 'text hover overlay should carry the blue gradient.');
assert.match(heroNavActionOverlayBlock, /background-clip:\s*text;/, 'text hover overlay should clip the gradient to text.');
assert.match(heroNavActionOverlayBlock, /background-size:\s*220% 100%;/, 'text hover overlay should have room for a subtle gradient sweep.');
assert.match(heroNavActionOverlayBlock, /background-position:\s*100% 50%;/, 'text hover overlay should start with the gradient sweep offset.');
assert.match(heroNavActionOverlayBlock, /opacity:\s*0;/, 'text hover overlay should start invisible.');
assert.match(
  heroNavActionOverlayBlock,
  /transition:\s*opacity var\(--run-hero-nav-transition\),\s*background-position 420ms cubic-bezier\(0\.2, 0\.8, 0\.2, 1\);/s,
  'text hover overlay should fade and sweep smoothly without moving layout.',
);
assert.match(heroNavActionOverlayHoverBlock, /opacity:\s*1;/, 'text hover overlay should fade in on hover, open, and focus states.');
assert.match(heroNavActionOverlayHoverBlock, /text-shadow:\s*var\(--run-hero-nav-text-hover-shadow\);/, 'text hover overlay should add a subtle glow to make the blue state visible without a background.');
assert.match(heroNavActionOverlayHoverBlock, /background-position:\s*0% 50%;/, 'text hover overlay should sweep the blue gradient through the text on interaction.');
assert.match(heroNavIconHoverBlock, /background:\s*transparent;/, 'search icon hover should not draw a visible button background.');
assert.match(heroNavIconHoverBlock, /color:\s*var\(--run-hero-nav-icon-hover-color\);/, 'search icon hover should change icon color only.');
assert.doesNotMatch(heroNavIconHoverBlock, /background-image:\s*var\(/, 'search icon hover should not use a gradient background.');
assert.match(heroNavInlineIconHoverBlock, /background:\s*transparent;/, 'close icon hover should not draw a visible button background.');
assert.match(heroNavInlineIconHoverBlock, /color:\s*var\(--run-hero-nav-icon-hover-color\);/, 'close icon hover should change icon color only.');
assert.doesNotMatch(heroNavInlineIconHoverBlock, /background-image:\s*var\(/, 'close icon hover should not use a gradient background.');
assert.doesNotMatch(globalStyles, /--run-hero-nav-action-bg-hover/, 'old hero nav background hover token should be removed.');

console.log('article-search-component.test.mjs passed');
});
