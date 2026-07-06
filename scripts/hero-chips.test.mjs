import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const hero = readFileSync('src/components/Hero.astro', 'utf8');
const styles = readFileSync('src/styles/global.css', 'utf8');

const heroFocusLines = [
  'Battery draining faster than it used to?',
  'Running warm for no reason?',
  'Slower every month?',
  "Now you'll know why.",
];

for (const line of heroFocusLines) {
  assert.match(hero, new RegExp(line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Hero focus message should include "${line}".`);
}

assert.doesNotMatch(
  hero,
  /Battery, heat, connection, and storage, measured precisely and explained in plain language\./,
  'Hero should remove the old body-copy sentence.',
);
assert.doesNotMatch(hero, /const featureChips\b/, 'Hero should not keep the old focus chip data.');
assert.doesNotMatch(hero, /hero-focus-chip/, 'Hero should not render the old focus chip class.');
assert.doesNotMatch(hero, />\s*(Battery|Thermal|Network|Storage|Insights|Private)\s*</, 'Hero should remove the old focus chip labels.');
assert.match(hero, /aria-label="runcheck diagnostic prompts"/, 'Hero focus message should expose an accurate aria-label.');
assert.match(hero, /class="hero-focus-line hero-focus-line-1"/, 'First hero focus message line should use the shared line class and its position class.');
assert.doesNotMatch(hero, /hero-focus-list[^"]*\blg:-translate-y-72\b/, 'Hero focus message should not use the overcorrected high desktop offset.');
assert.doesNotMatch(hero, /hero-focus-list[^"]*\blg:-translate-y-24\b/, 'Hero focus message should not sit as high as the previous desktop offset.');
assert.match(hero, /hero-focus-list[^"]*\blg:-translate-y-12\b/, 'Hero focus message should use a lower moderate desktop offset.');
assert.doesNotMatch(hero, /hero-focus-list[^"]*\blg:gap-10\b/, 'Hero focus message should not use the too-large previous row gap.');
assert.match(hero, /hero-focus-list[^"]*\blg:gap-4\b/, 'Hero focus message should use a tighter desktop row gap.');
assert.match(hero, /hero-focus-list[^"]*\bxl:mr-0\b/, 'Hero focus message should move farther right on wide screens.');
assert.match(hero, /hero-focus-line-1/, 'Hero focus message should assign a distinct first-line position class.');
assert.match(hero, /hero-focus-line-2/, 'Hero focus message should assign a distinct second-line position class.');
assert.match(hero, /hero-focus-line-3/, 'Hero focus message should assign a distinct third-line position class.');
assert.match(hero, /hero-focus-line-4/, 'Hero focus message should assign a distinct fourth-line position class.');
assert.match(
  hero,
  /<div class="mt-36 flex max-w-md flex-col items-start">\s*<span class="hero-release-chip">\s*Coming fall 2026/s,
  'Hero release chip should keep its lower-left offset after removing the old copy.',
);

assert.doesNotMatch(styles, /\.hero-focus-list::before\b/, 'Hero should remove the vertical focus line because it does not fit.');
assert.doesNotMatch(styles, /\.hero-focus-list\s*\{[^}]*padding-left:\s*1\.25rem/s, 'Hero focus message should not reserve space for the removed vertical line.');
assert.match(styles, /\.hero-release-chip\s*\{[^}]*font-family:\s*var\(--font-display\)/s, 'Hero release chip should keep its existing display font.');
assert.match(styles, /\.hero-release-chip\s*\{[^}]*font-size:\s*0\.82rem/s, 'Hero release chip should keep its existing font size.');
assert.match(styles, /\.hero-release-chip\s*\{[^}]*display:\s*inline-flex/s, 'Hero release chip should use the same pill layout mode as the focus pills.');
assert.match(styles, /\.hero-release-chip\s*\{[^}]*min-height:\s*2\.05rem/s, 'Hero release chip should use the same pill height as the focus pills.');
assert.match(styles, /\.hero-release-chip\s*\{[^}]*padding:\s*0\.42rem 0\.82rem/s, 'Hero release chip should use the same pill padding as the focus pills.');
assert.match(styles, /\.hero-release-chip\s*\{[^}]*border:\s*2px solid color-mix\(in srgb,\s*var\(--color-run-white\) 48%, transparent\)/s, 'Hero release chip should use the same thick white outline as the focus pills.');
assert.match(styles, /\.hero-release-chip\s*\{[^}]*border-radius:\s*999px/s, 'Hero release chip should use the same pill-shaped corners as the focus pills.');
assert.match(styles, /\.hero-release-chip\s*\{[^}]*color:\s*var\(--color-run-white\)/s, 'Hero release chip should keep white text.');
assert.match(styles, /\.hero-focus-line\s*\{[^}]*display:\s*inline-flex/s, 'Hero focus message lines should use pill layout.');
assert.match(styles, /\.hero-focus-line\s*\{[^}]*border:\s*2px solid color-mix\(in srgb,\s*var\(--color-run-white\) 48%, transparent\)/s, 'Neutral hero focus pills should use a thicker white outline.');
assert.match(styles, /\.hero-focus-line\s*\{[^}]*border-radius:\s*999px/s, 'Hero focus message lines should use fully rounded pills.');
assert.match(styles, /\.hero-focus-line\s*\{[^}]*background:\s*rgb\(3 7 8 \/ 0\.58\)/s, 'Neutral hero focus pills should use a dark transparent fill.');
assert.match(styles, /\.hero-focus-line-4\s*\{[^}]*border-color:\s*color-mix\(in srgb,\s*var\(--color-run-blue\) 42%, transparent\)/s, 'Final hero focus pill should use a muted blue accent border.');
assert.doesNotMatch(styles, /\.hero-focus-line-4\s*\{[^}]*background:/s, 'Final hero focus pill should not add a blue background.');
assert.doesNotMatch(styles, /\.hero-focus-line(?:-[1-4])?\s*\{[^}]*box-shadow/s, 'Hero focus pills should not add glow or shadow.');
assert.match(styles, /\.hero-focus-line-2\s*\{[^}]*margin-left:\s*1\.75rem/s, 'Second hero focus line should start farther right than the first.');
assert.match(styles, /\.hero-focus-line-3\s*\{[^}]*margin-left:\s*3\.5rem/s, 'Third hero focus line should start farther right to follow the rock edge.');
assert.match(styles, /\.hero-focus-line-4\s*\{[^}]*margin-left:\s*5\.25rem/s, 'Fourth hero focus line should start farthest right to avoid the rock.');
assert.doesNotMatch(styles, /\.hero-copy\b/, 'Styles should remove unused hero-copy rules.');
assert.doesNotMatch(styles, /\.hero-focus-chip\b/, 'Styles should remove unused hero-focus-chip rules.');
assert.match(styles, /\.hero-focus-line\s*\{[^}]*text-transform:\s*none/s, 'Hero focus message should preserve sentence casing.');
assert.match(styles, /\.hero-focus-line\s*\{[^}]*font-size:\s*0\.72rem/s, 'Hero focus message should use a compact base font size.');
assert.match(styles, /@media \(min-width: 1024px\)\s*\{[\s\S]*?\.hero-focus-line\s*\{[^}]*font-size:\s*0\.78rem/s, 'Hero focus message should stay compact on desktop.');
assert.doesNotMatch(styles, /\.hero-focus-line\s*\{[^}]*font-size:\s*1\.(?:0|1)\drem/s, 'Hero focus message should not use the oversized previous desktop font scale.');
