import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

test('cta content', () => {
const source = readFileSync('src/components/CTA.astro', 'utf8');
const styles = readFileSync('src/styles/global.css', 'utf8');

const expectedCopy = [
  'Stop guessing. Start checking.',
  'Free to download when runcheck launches.',
  'Pro unlocks deeper history.',
  'No accounts, ever.',
  'Read the guides',
  'See what runcheck checks',
];

for (const copy of expectedCopy) {
  assert.match(source, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Missing CTA copy: ${copy}`);
}

assert.ok(existsSync('src/assets/runcheck-phone-diagnostics-cta-background.webp'), 'CTA should use the selected phone diagnostics WebP background asset.');
assert.match(source, /import\s+\{\s*Image\s*\}\s+from\s+['"]astro:assets['"];/, 'CTA should use Astro Image for the local background asset.');
assert.match(source, /import\s+ctaBackground\s+from\s+['"]\.\.\/assets\/runcheck-phone-diagnostics-cta-background\.webp['"];/, 'CTA should import the selected phone diagnostics WebP background.');
assert.doesNotMatch(source, /PlaceholderSection/, 'CTA should render real content instead of PlaceholderSection.');
assert.match(source, /id="download"/, 'CTA should preserve the download anchor used by existing navigation.');
assert.match(source, /<Image[\s\S]*src=\{ctaBackground\}[\s\S]*alt=""[\s\S]*loading="lazy"/, 'CTA background should be decorative and lazy-loaded.');
assert.match(source, /href="\/articles\/"/, 'CTA should link readers to the article guides.');
assert.match(source, /href="\/#features"/, 'CTA should link to the feature overview.');
assert.doesNotMatch(source, />\s*Download\s*</, 'CTA should not present Download as the primary action before launch.');
assert.match(styles, /\.cta-section\b/, 'CTA section styles should live in global CSS.');
assert.match(styles, /\.cta-background-image\b/, 'CTA background image treatment should live in global CSS.');
assert.match(styles, /\.cta-title\b/, 'CTA title treatment should live in global CSS.');
assert.match(styles, /\.cta-actions\b/, 'CTA action layout should live in global CSS.');
assert.match(styles, /@media \(max-width:\s*640px\)[\s\S]*\.cta-actions/s, 'CTA actions should stack cleanly on mobile.');
});
