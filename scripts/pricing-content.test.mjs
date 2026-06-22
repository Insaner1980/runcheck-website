import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const source = readFileSync('src/components/Pricing.astro', 'utf8');
const hero = readFileSync('src/components/Hero.astro', 'utf8');
const styles = readFileSync('src/styles/global.css', 'utf8');

const expectedCopy = [
  'Start free. Upgrade once for deeper phone insights.',
  'No account. No ads. No subscription.',
  'Free',
  '$0',
  "ESSENTIAL CHECKS FOR YOUR PHONE'S CURRENT CONDITION.",
  'Battery, network, thermal, and storage monitoring',
  "Your phone's Health Score",
  'Network speed tests',
  'Recent history',
  'No account, no ads',
  'Pro',
  '$4.99',
  'EVERYTHING IN FREE, PLUS:',
  'Long-term history and trends',
  'Charger comparison',
  'See which apps drain your battery',
  'Home screen widgets',
  'Smart insights on your home screen',
  'Thermal history',
  'Charge-time estimates',
  'Storage cleanup',
  'Export your data (CSV)',
  'Deeper cross-category insights',
  '7-day free trial.',
  'One-time purchase.',
];

for (const copy of expectedCopy) {
  assert.match(source, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Missing Pricing copy: ${copy}`);
}

assert.doesNotMatch(source, /PlaceholderSection/, 'Pricing should render real cards instead of PlaceholderSection.');
assert.match(source, /const proFeatureColumns = \[/, 'Pro features should be split into two explicit columns.');
assert.match(source, /pricing-split/, 'Pricing should use the text-only split layout.');
assert.match(source, /<article class="pricing-plan pricing-plan-free">/, 'Free should render as a text column, not a card.');
assert.match(source, /<article class="pricing-plan pricing-plan-pro">/, 'Pro should render as a text column, not a card.');
assert.match(source, /<h3>Free<\/h3>/, 'Free plan name should render directly on the background.');
assert.match(source, /<h3>Pro<\/h3>/, 'Pro plan name should render directly on the background.');
assert.match(source, /<p class="pricing-plan-section-label">ESSENTIAL CHECKS FOR YOUR PHONE'S CURRENT CONDITION\.<\/p>/, 'Free summary should be an uppercase section label.');
assert.match(source, /<p class="pricing-plan-section-label">EVERYTHING IN FREE, PLUS:<\/p>/, 'Pro summary should be an uppercase section label.');
assert.match(source, /<span class="pricing-price-metal" data-pricing-country="default" data-pricing-currency="USD" data-pricing-amount="4\.99">\$4\.99<\/span>/, 'Pro price should render as $4.99, not US$4.99.');
assert.doesNotMatch(source, /pricing-plan-kicker|<p[^>]*>\s*No subscription\s*<\/p>/, 'Pro should not render the old No subscription line.');
assert.doesNotMatch(source, /Yours forever once bought\./, 'Trial copy should not include the forever-once-bought sentence.');
assert.match(source, /<p class="pricing-plan-trial">7-day free trial\. <span class="pricing-plan-purchase">One-time purchase\.<\/span><\/p>/, 'One-time purchase should sit after the trial line on the same line.');
assert.match(source, /<\/div>\s*<div class="pricing-trial-divider" aria-hidden="true"><\/div>\s*<p class="pricing-plan-trial">7-day free trial\. <span class="pricing-plan-purchase">One-time purchase\.<\/span><\/p>/, 'Pro should place a horizontal divider between the feature columns and trial note.');
assert.match(source, /<p>\s*<span class="pricing-price-metal" data-pricing-country="default" data-pricing-currency="USD" data-pricing-amount="4\.99">\$4\.99<\/span>\s*<\/p>\s*<p class="pricing-plan-section-label">EVERYTHING IN FREE, PLUS:<\/p>/, 'Pro price should move up and the section label should follow it directly.');
assert.match(source, /class="pricing-feature-columns"/, 'Pro features should render in two side-by-side columns.');
assert.doesNotMatch(source, /pricing-card|pricing-plan-tab/, 'Pricing should not render the removed card or tab label experiments.');
assert.doesNotMatch(source, /rounded-panel border border-run-green|bg-run-green/, 'Pricing should not render the purchase note as a badge.');
assert.doesNotMatch(source, /US\$4\.99/, 'Pro price should not include the US currency prefix.');
assert.doesNotMatch(source, /import\s+\w+\s+from\s+['"][^'"]*(pricing-pro-frame|runcheck-logo)\.png['"]/, 'Pro card should not import a raster frame asset.');
assert.doesNotMatch(source, /--pricing-pro-frame|pricing-pro-frame|runcheck-logo|pricing-logo-frame/, 'Pro card should not reference raster frame assets or frame image classes.');
assert.ok(!existsSync('src/assets/pricing-pro-frame.png'), 'Baked Pro pricing frame asset should be removed.');
assert.ok(!existsSync('src/assets/runcheck-logo.png'), 'Arrow frame source PNG should be removed.');
assert.ok(!existsSync('scripts/make-pricing-frame.ps1'), 'ImageMagick frame baking script should be removed.');
assert.doesNotMatch(source, /<img\s+class="pricing-logo-frame"/, 'Pro card should not render the frame as a separate image layer.');
assert.doesNotMatch(source, /pricing-card-pro-panel/, 'Pro content should sit directly inside the card, not inside a separate panel.');
assert.doesNotMatch(styles, /aspect-ratio:\s*672\s*\/\s*1408/, 'Pricing should not preserve a raster frame ratio.');
assert.doesNotMatch(styles, /pricing-card|pricing-plan-tab/, 'Removed pricing card and tab CSS should not remain.');
assert.match(styles, /\.pricing-split\s*\{[^}]*display:\s*grid/s, 'Pricing should use a grid split layout.');
assert.match(styles, /\.pricing-plan\s*\{[^}]*color:\s*var\(--color-run-white\)/s, 'Pricing text should sit white directly on the background.');
assert.match(styles, /\.pricing-plan-pro\s*\{[^}]*--pricing-trial-right-inset:\s*0\.35rem/s, 'Pro trial copy and divider should share the same right inset.');
assert.match(styles, /\.pricing-plan-section-label\s*\{[^}]*color:\s*var\(--color-run-white\)/s, 'Pricing section labels should stay white on the background.');
assert.match(styles, /\.pricing-plan-section-label\s*\{[^}]*margin-top:\s*1\.5rem/s, 'Section labels should sit in the same rhythm below the price.');
assert.match(styles, /\.pricing-trial-divider\s*\{[^}]*height:\s*1px/s, 'Pro trial divider should be a thin horizontal rule.');
assert.match(styles, /\.pricing-trial-divider\s*\{[^}]*margin-left:\s*auto/s, 'Pro trial divider should move to the right with the trial copy.');
assert.match(styles, /\.pricing-trial-divider\s*\{[^}]*margin-right:\s*var\(--pricing-trial-right-inset\)/s, 'Pro trial divider should keep the same right inset as the trial copy.');
assert.match(styles, /\.pricing-trial-divider\s*\{[^}]*background:\s*linear-gradient\(\s*to right,\s*color-mix\(in srgb,\s*var\(--color-run-muted\) 62%, transparent\)\s*0\s+calc\(100% - 2cm\),\s*color-mix\(in srgb,\s*var\(--color-run-muted\) 22%, transparent\)\s*calc\(100% - 2cm\)\s+100%\s*\)/s, 'Pro trial divider should leave only the final 2cm as the lighter segment.');
assert.match(styles, /\.pricing-plan-trial\s*\{[^}]*width:\s*max-content/s, 'Trial copy should shrink to its text width for right alignment.');
assert.match(styles, /\.pricing-plan-trial\s*\{[^}]*margin-left:\s*auto/s, 'Trial copy should move to the right edge of the Pro feature text area.');
assert.match(styles, /\.pricing-plan-trial\s*\{[^}]*margin-right:\s*var\(--pricing-trial-right-inset\)/s, 'Trial copy should align with the final letter of the widest Pro feature text.');
assert.match(styles, /\.pricing-plan-trial\s*\{[^}]*margin-top:\s*1\.35rem/s, 'Trial text should sit below the new Pro divider.');
assert.match(styles, /\.pricing-plan-purchase\s*\{[^}]*color:\s*var\(--color-run-white\)/s, 'Purchase note should be plain white text.');
assert.match(styles, /\.pricing-plan-purchase\s*\{[^}]*font-size:\s*inherit/s, 'Purchase note should use the same font size as the trial text.');
assert.match(styles, /\.pricing-plan-purchase\s*\{[^}]*font-weight:\s*inherit/s, 'Purchase note should use the same font weight as the trial text.');
assert.doesNotMatch(styles, /\.pricing-plan-purchase\s*\{[^}]*text-transform:\s*uppercase/s, 'Purchase note should not be forced uppercase.');
assert.doesNotMatch(styles, /pricing-plan-badge-row/, 'Removed pricing badge CSS should not remain.');
assert.match(styles, /\.pricing-plan-pro\s*\{[^}]*border-top:\s*1px solid rgb\(255 255 255 \/ 0\.12\)/s, 'Mobile pricing layout should keep a weaker white divider between plans.');
assert.match(styles, /\.pricing-feature-columns\s*\{[^}]*display:\s*grid/s, 'Pro feature columns should be a grid.');
assert.match(styles, /\.pricing-feature-columns\s*\{[^}]*margin-top:\s*2\.75rem/s, 'Pro feature columns should start at the same rhythm as the Free feature list.');
assert.match(styles, /@media \(min-width:\s*760px\)\s*\{[^}]*\.pricing-split\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+minmax\(0,\s*1fr\)/s, 'Desktop pricing should render two equal text columns.');
assert.match(styles, /@media \(min-width:\s*760px\)[\s\S]*\.pricing-plan-pro\s*\{[\s\S]*border-left:\s*1px solid rgb\(255 255 255 \/ 0\.12\)/s, 'Desktop pricing should use a weaker vertical white divider between Free and Pro.');
assert.match(styles, /@media \(min-width:\s*760px\)[\s\S]*\.pricing-feature-columns\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/s, 'Desktop Pro features should use two side-by-side columns.');
assert.doesNotMatch(styles, /\.pricing-card-pro::after\b/, 'Pricing should not draw a separate dark backing surface behind the frame.');
assert.match(source, /pricing-price-metal/, 'Pricing amounts should use the shared price treatment.');
assert.match(styles, /\.pricing-plan\b/, 'Pricing text-column layout should live in global CSS instead of repeated inline utilities.');
assert.match(styles, /--run-headline-blue-fill:\s*linear-gradient\(180deg,\s*#7cc0f5,\s*var\(--color-run-blue\)\)/, 'Hero blue text gradient should be a shared global token.');
assert.match(hero, /\[background-image:var\(--run-headline-blue-fill\)\][^>]*>real<\/span>/, 'Hero real word should use the shared blue text gradient token.');
assert.match(styles, /\.pricing-price-metal\s*\{[^}]*background-image:\s*var\(--run-headline-blue-fill\)/s, 'Pricing amounts should use the same color as the hero real word.');
assert.match(styles, /\.pricing-price-metal\s*\{[^}]*font-size:\s*4rem/s, 'Free and Pro prices should share the same price font size.');
assert.doesNotMatch(styles, /\.pricing-plan-(free|pro)\s+\.pricing-price-metal\s*\{[^}]*font-size/s, 'Free and Pro prices should not have plan-specific font-size overrides.');
assert.match(styles, /\.pricing-price-metal\b/, 'Pricing price treatment should live in global CSS.');
assert.doesNotMatch(styles, /\.pricing-card-pro\s*\{[^}]*border-color:\s*var\(--color-run-cyan\)/s, 'Pro should not use the old regular border.');
assert.doesNotMatch(source, /rounded-full bg-run-(cyan|green)/, 'Feature lists should not render leading bullet dots.');
assert.doesNotMatch(source, /sm:grid-cols-2/, 'Pro features should stay in one vertical column.');
