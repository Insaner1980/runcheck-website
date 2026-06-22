import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

const sectionComponents = [
  ['Hero', read('src/components/Hero.astro')],
  ['Pricing', read('src/components/Pricing.astro')],
  ['PlaceholderSection', read('src/components/PlaceholderSection.astro')],
  ['Footer', read('src/components/Footer.astro')],
];

for (const [name, source] of sectionComponents) {
  assert.doesNotMatch(
    source,
    /class="[^"]*\bborder-(?:y|t|b)\b[^"]*\bborder-run-border\b[^"]*"/,
    `${name} should not render horizontal section divider borders.`
  );
}

const styles = read('src/styles/global.css');

assert.match(styles, /\.feature-item::before\s*\{[^}]*height:\s*1px/s, 'Feature item decorative lines should remain.');
assert.match(styles, /\.pricing-trial-divider\s*\{[^}]*height:\s*1px/s, 'Pro trial divider should remain.');
assert.match(styles, /\.pricing-plan-pro\s*\{[^}]*border-top:\s*1px solid rgb\(255 255 255 \/ 0\.12\)/s, 'Mobile Free/Pro divider should remain.');
assert.match(styles, /@media \(min-width:\s*760px\)[\s\S]*\.pricing-plan-pro\s*\{[\s\S]*border-left:\s*1px solid rgb\(255 255 255 \/ 0\.12\)/s, 'Desktop Free/Pro divider should remain.');
