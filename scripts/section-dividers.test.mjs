import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');

const sectionComponents = [
  ['Hero', read('src/components/Hero.astro')],
  ['Features', read('src/components/Features.astro')],
  ['Pricing', read('src/components/Pricing.astro')],
  ['FAQ', read('src/components/FAQ.astro')],
  ['CTA', read('src/components/CTA.astro')],
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

assert.match(styles, /\.features-layout\s*\{[^}]*display:\s*grid/s, 'Feature section should keep the current grid layout.');
assert.match(styles, /\.feature-item\s*\{[^}]*display:\s*grid/s, 'Feature items should keep their current structured layout.');
assert.match(styles, /\.pricing-trial-divider\s*\{[^}]*height:\s*1px/s, 'Pro trial divider should remain.');
assert.match(styles, /\.pricing-plan-pro\s*\{[^}]*border:\s*1px solid var\(--run-pricing-pro-edge\)/s, 'Pro pricing boundary should remain tokenized.');
assert.match(styles, /\.faq-item\s*\{[^}]*border-bottom:\s*1px solid var\(--run-faq-divider\)/s, 'FAQ item dividers should remain tokenized.');
