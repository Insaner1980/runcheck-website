import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const hero = readFileSync('src/components/Hero.astro', 'utf8');
const styles = readFileSync('src/styles/global.css', 'utf8');

const labels = [...hero.matchAll(/label: '([^']+)'/g)].map((match) => match[1]);
const lineAccentWidths = [...hero.matchAll(/lineAccentWidth: '([^']+)'/g)].map((match) => match[1]);

assert.deepEqual(labels, ['Battery', 'Thermal', 'Network', 'Storage', 'Private'], 'Hero focus chips should keep the same labels and order.');
assert.equal(lineAccentWidths.length, 5, 'Each hero focus chip should define a divider fill length.');
assert.equal(new Set(lineAccentWidths.slice(1)).size, 4, 'Each visible hero focus divider should have a different fill length.');
assert.match(hero, /style=\{`--hero-chip-line-accent-width: \$\{chip\.lineAccentWidth\}`\}/, 'Hero focus chips should pass their divider fill length through a CSS variable.');
assert.match(hero, /class="hero-focus-chip"/, 'Hero focus chips should use the shared chip class.');

assert.doesNotMatch(styles, /--hero-chip-corner-(?:size|weight)/, 'Hero focus chips should not keep the old corner marker tokens.');
assert.doesNotMatch(styles, /\.hero-focus-chip::before\b/, 'Hero focus chips should not draw corner markers on every chip.');
assert.doesNotMatch(styles, /left top|right top|left bottom|right bottom/, 'Hero focus chips should not use corner-positioned background markers.');

assert.match(styles, /\.hero-focus-chip:not\(:first-child\)::before\s*\{[^}]*height:\s*1px/s, 'Hero focus chip dividers should be thin horizontal lines.');
assert.match(styles, /\.hero-focus-chip:not\(:first-child\)::before\s*\{[^}]*width:\s*100%/s, 'Hero focus chip dividers should keep the same total line length.');
assert.match(styles, /\.hero-focus-chip:not\(:first-child\)::before\s*\{[^}]*background:\s*linear-gradient\(\s*to right,\s*color-mix\(in srgb,\s*var\(--color-run-muted\) 62%, transparent\)\s*0\s+var\(--hero-chip-line-accent-width\),\s*color-mix\(in srgb,\s*var\(--color-run-muted\) 22%, transparent\)\s*var\(--hero-chip-line-accent-width\)\s+100%\s*\)/s, 'Hero focus chip dividers should use per-chip feature-style gradient fill lengths.');
assert.doesNotMatch(styles, /\.hero-focus-chip:first-child::before|\.hero-focus-chip::after/, 'Hero focus chips should not add a line above Battery or below Private.');
