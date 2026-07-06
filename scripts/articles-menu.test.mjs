import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { ARTICLE_MENU_COLUMNS } from '../src/data/articleTaxonomy.mjs';

const header = readFileSync('src/components/Header.astro', 'utf8');
const globalStyles = readFileSync('src/styles/global.css', 'utf8');

const menuMarkup = header.match(/<div\s+id="articles-menu-panel"[\s\S]*?<\/div>\s*<\/div>/)?.[0] ?? '';

assert.match(header, /<button[\s\S]*data-articles-menu-button[\s\S]*>\s*<span class="hero-nav-label">Articles<\/span>[\s\S]*<\/button>/, 'Articles should be a menu button, not a standalone index link.');
assert.doesNotMatch(header, /<a[^>]+href="\/articles\/"[^>]*>\s*Articles\s*<\/a>/, 'The top-level Articles item should not navigate to an index page yet.');
assert.match(header, /<a[\s\S]*href=\{link\.href\}[\s\S]*>\s*<span class="hero-nav-label">\{link\.label\}<\/span>[\s\S]*<\/a>/, 'Features should remain a direct nav link.');
assert.match(header, /<a[\s\S]*class="hero-nav-action"[\s\S]*href=\{link\.href\}[\s\S]*data-hero-nav-label=\{link\.label\}/, 'Direct nav links should expose a stable label for the smooth gradient hover layer.');
assert.match(header, /<span class="hero-nav-label">\{link\.label\}<\/span>/, 'Direct nav links should keep one visible accessible label.');
assert.match(header, /<span class="hero-nav-label-gradient" aria-hidden="true">\{link\.label\}<\/span>/, 'Direct nav links should render the smooth gradient layer as aria-hidden text.');
assert.match(header, /class="hero-nav-action"[\s\S]*data-articles-menu-button/, 'Articles should use the same hero nav action treatment as direct nav links.');
assert.match(header, /data-hero-nav-label="Articles"[\s\S]*data-articles-menu-button/, 'Articles should expose a stable label for the smooth gradient hover layer.');
assert.match(header, /<span class="hero-nav-label">Articles<\/span>/, 'Articles should keep one visible accessible label.');
assert.match(header, /<span class="hero-nav-label-gradient" aria-hidden="true">Articles<\/span>/, 'Articles should render the smooth gradient layer as aria-hidden text.');
assert.match(header, /ARTICLE_MENU_COLUMNS/, 'Header should render the menu from the shared article taxonomy.');
assert.match(header, /aria-expanded="false"/, 'Articles trigger should expose aria-expanded.');
assert.match(header, /aria-controls="articles-menu-panel"/, 'Articles trigger should control the panel.');
assert.match(header, /id="articles-menu-panel"/, 'Menu panel should have a stable id.');
assert.match(header, /inert/, 'Closed menu should be inert so hidden links are not tabbable.');

assert.match(menuMarkup, /grid-cols-1[\s\S]*md:grid-cols-3/, 'Menu should stack below the nav breakpoint and use three columns on desktop.');
assert.match(menuMarkup, /\bhero-nav-panel\b/, 'Articles menu should use the shared hero nav panel surface.');
assert.match(menuMarkup, /\bhero-nav-panel-link\b/, 'Articles menu links should use the shared panel link hover treatment.');
assert.match(menuMarkup, /motion-safe:transition/, 'Menu should animate only when motion is allowed.');
assert.match(menuMarkup, /motion-reduce:transition-none/, 'Menu should disable transitions for reduced motion.');

for (const group of ARTICLE_MENU_COLUMNS) {
  assert.ok(group.title, 'Each menu column should have a title.');

  for (const item of group.hubs) {
    assert.match(item.href, /^\/articles\/[a-z0-9-]+\/$/, `${item.title} should link to the canonical trailing-slash hub page.`);
    assert.ok(item.title, 'Each menu item should have a title.');
    assert.ok(item.description, `${item.title} should have a description.`);
  }
}

assert.doesNotMatch(menuMarkup, /run-(?:blue|cyan|green|amber)|feat-|badge|search|svg|Icon/, 'Articles menu should stay monochrome and avoid icons, badges, and search.');
assert.doesNotMatch(menuMarkup, /translate-x/, 'Articles menu links should not use motion-only hover while search results use background hover.');
assert.match(globalStyles, /\.hero-nav-action\s*\{/, 'Shared hero nav action styles should live in global CSS.');
assert.match(globalStyles, /\.hero-nav-panel-link:hover,\s*\.hero-nav-panel-link:focus-visible,\s*\.hero-nav-panel-link\[data-active="true"\]/s, 'Panel links should share one hover/focus/active selector.');
assert.match(header, /keydown[\s\S]*Escape/, 'Menu script should close on Escape.');
assert.match(header, /pointerdown[\s\S]*contains\(event\.target/, 'Menu script should close on outside pointer interaction.');
