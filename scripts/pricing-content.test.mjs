import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import {
  COUNTRY_TO_PRICING_TIER,
  DEFAULT_PRICING_TIER,
  FALLBACK_PRICING_TIER,
  PRICING_TIERS,
  getPrice,
  getPricingTier,
} from '../src/data/pricing.mjs';
import test from 'node:test';

test('pricing content', () => {
const source = readFileSync('src/components/Pricing.astro', 'utf8');
const regionalPrice = readFileSync('src/components/RegionalPrice.astro', 'utf8');
const regionalPricingNote = readFileSync('src/components/RegionalPricingNote.astro', 'utf8');
const baseLayout = readFileSync('src/layouts/BaseLayout.astro', 'utf8');
const hero = readFileSync('src/components/Hero.astro', 'utf8');
const styles = readFileSync('src/styles/global.css', 'utf8');
const visibleSource = source.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

const expectedCopy = [
  'Start free. Upgrade once for deeper phone insights.',
  'Free covers the current state of your phone. Pro unlocks the longer view: trends, app usage, charger performance, thermal logs, widgets, exports, and cleanup tools, with no subscription.',
  'Free',
  "ESSENTIAL CHECKS FOR YOUR PHONE'S CURRENT CONDITION.",
  'Battery, network, thermal, and storage monitoring',
  "Your phone's Health Score",
  'Network speed tests',
  'Recent history',
  'No account, no ads',
  'Pro',
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
  assert.match(visibleSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Missing Pricing copy: ${copy}`);
}

assert.doesNotMatch(source, /PlaceholderSection/, 'Pricing should render real cards instead of PlaceholderSection.');
assert.match(source, /import RegionalPrice from '\.\/RegionalPrice\.astro';/, 'Pricing should use the shared regional price component.');
assert.match(source, /import RegionalPricingNote from '\.\/RegionalPricingNote\.astro';/, 'Pricing should use the shared regional pricing note component.');
assert.match(source, /const proFeatureColumns = \[/, 'Pro features should be split into two explicit columns.');
assert.match(source, /pricing-split/, 'Pricing should use the text-only split layout.');
assert.match(source, /<article class="pricing-plan pricing-plan-free">/, 'Free should render as a text column, not a card.');
assert.match(source, /<article class="pricing-plan pricing-plan-pro">/, 'Pro should render as a text column, not a card.');
assert.match(source, /<h3>Free<\/h3>/, 'Free plan name should render directly on the background.');
assert.match(source, /<h3>Pro<\/h3>/, 'Pro plan name should render directly on the background.');
assert.match(source, /<p class="pricing-plan-section-label">ESSENTIAL CHECKS FOR YOUR PHONE'S CURRENT CONDITION\.<\/p>/, 'Free summary should be an uppercase section label.');
assert.match(source, /<p class="pricing-plan-section-label">EVERYTHING IN FREE, PLUS:<\/p>/, 'Pro summary should be an uppercase section label.');
assert.match(source, /<p class="pricing-price-metal" aria-live="polite"><RegionalPrice plan="free" \/><\/p>/, 'Free should render through the regional price component.');
assert.match(source, /<span class="pricing-price-metal"><RegionalPrice plan="pro" \/><\/span>/, 'Pro should render through the regional price component.');
assert.match(source, /<RegionalPricingNote \/>/, 'Pricing should include the fallback local-currency note without a visible region picker.');
assert.doesNotMatch(source, /data-pricing-active-price|data-pricing-region|data-pricing-region-select/, 'Pricing should not keep the old manual price hooks.');
assert.doesNotMatch(source, /<select\b|<details class="pricing-region-details"|pricing-region-list/, 'Pricing should not render a manual region menu or list.');
assert.doesNotMatch(source, /Intl\.Locale|navigator\.languages|navigator\.language|countryToRegion|setRegion/, 'Pricing should not infer price from browser language settings.');
assert.doesNotMatch(source, /pricing-plan-kicker|<p[^>]*>\s*No subscription\s*<\/p>/, 'Pro should not render the old No subscription line.');
assert.doesNotMatch(source, /Yours forever once bought\./, 'Trial copy should not include the forever-once-bought sentence.');
assert.match(source, /<p class="pricing-plan-trial">7-day free trial\. <span class="pricing-plan-purchase">One-time purchase\.<\/span><\/p>/, 'One-time purchase should sit after the trial line on the same line.');
assert.match(source, /<\/div>\s*<div class="pricing-trial-divider" aria-hidden="true"><\/div>\s*<p class="pricing-plan-trial">7-day free trial\. <span class="pricing-plan-purchase">One-time purchase\.<\/span><\/p>/, 'Pro should place a horizontal divider between the feature columns and trial note.');
assert.match(source, /class="pricing-feature-columns"/, 'Pro features should render in two side-by-side columns.');
assert.doesNotMatch(source, /pricing-card|pricing-plan-tab/, 'Pricing should not render the removed card or tab label experiments.');
assert.doesNotMatch(source, /rounded-panel border border-run-green|bg-run-green/, 'Pricing should not render the purchase note as a badge.');
assert.doesNotMatch(source, /US\$4\.99|\$4\.99|€4,99|£4\.49/, 'Visible price strings should live in shared pricing data, not Pricing.astro.');
assert.doesNotMatch(source, /import\s+\w+\s+from\s+['"][^'"]*(pricing-pro-frame|runcheck-logo)\.png['"]/, 'Pro card should not import a raster frame asset.');
assert.doesNotMatch(source, /--pricing-pro-frame|pricing-pro-frame|runcheck-logo|pricing-logo-frame/, 'Pro card should not reference raster frame assets or frame image classes.');
assert.ok(!existsSync('src/assets/pricing-pro-frame.png'), 'Baked Pro pricing frame asset should be removed.');
assert.ok(!existsSync('src/assets/runcheck-logo.png'), 'Arrow frame source PNG should be removed.');
assert.ok(!existsSync('scripts/make-pricing-frame.ps1'), 'ImageMagick frame baking script should be removed.');
assert.doesNotMatch(source, /<img\s+class="pricing-logo-frame"/, 'Pro card should not render the frame as a separate image layer.');
assert.doesNotMatch(source, /pricing-card-pro-panel/, 'Pro content should sit directly inside the card, not inside a separate panel.');
assert.doesNotMatch(source, /data-pricing-country="default"/, 'Pro should not keep the old hardcoded default-country price hook.');

assert.match(regionalPrice, /Object\.entries\(PRICING_TIERS\)/, 'RegionalPrice should generate its data attributes from shared pricing tiers.');
assert.match(regionalPrice, /`data-\$\{tier\.toLowerCase\(\)\}`/, 'RegionalPrice should expose a stable data attribute for every pricing tier.');
assert.match(regionalPrice, /pricing\.prices\[plan\]/, 'RegionalPrice should support both Free and Pro through one price map.');
assert.match(regionalPrice, /getPrice\(plan\)/, 'RegionalPrice should server-render the default price.');
assert.match(regionalPricingNote, /LOCAL_CURRENCY_NOTE/, 'RegionalPricingNote should use the shared fallback note copy.');
assert.match(regionalPricingNote, /data-regional-pricing-note hidden/, 'RegionalPricingNote should stay hidden unless the country falls back.');

assert.match(baseLayout, /COUNTRY_TO_PRICING_TIER/, 'BaseLayout should own the shared country-to-tier map.');
assert.match(baseLayout, /FALLBACK_PRICING_TIER/, 'BaseLayout should know which tier is the fallback.');
assert.match(baseLayout, /runcheck-pricing-country/, 'Detected country should be cached under a Runcheck-specific key.');
assert.match(baseLayout, /sessionStorage\.getItem\(countryStorageKey\)/, 'Pricing country detection should read from sessionStorage.');
assert.match(baseLayout, /sessionStorage\.setItem\(countryStorageKey, country\)/, 'Pricing country detection should cache the Cloudflare country.');
assert.match(baseLayout, /fetch\('\/cdn-cgi\/trace'/, 'Pricing country detection should use Cloudflare trace.');
assert.match(baseLayout, /\^loc=\(\[A-Z\]\{2\}\)\$/, 'Pricing country detection should parse the Cloudflare loc country code.');
assert.match(baseLayout, /document\.querySelectorAll\('\[data-regional-price\]'\)/, 'BaseLayout should update every regional price element.');
assert.match(baseLayout, /data-\$\{tier\.toLowerCase\(\)\}/, 'BaseLayout should read the matching tier data attribute.');
assert.match(baseLayout, /data-regional-pricing-note/, 'BaseLayout should reveal the fallback note only when needed.');
assert.doesNotMatch(baseLayout, /Intl\.Locale|navigator\.languages|navigator\.language/, 'Automatic pricing should use browsing country, not browser locale.');

assert.doesNotMatch(styles, /aspect-ratio:\s*672\s*\/\s*1408/, 'Pricing should not preserve a raster frame ratio.');
assert.doesNotMatch(styles, /\.(?:pricing-card|pricing-plan-tab)\b/, 'Removed pricing card and tab CSS classes should not remain.');
assert.match(styles, /\.pricing-split\s*\{[^}]*display:\s*grid/s, 'Pricing should use a grid split layout.');
assert.match(styles, /\.pricing-plan\s*\{[^}]*color:\s*var\(--color-run-white\)/s, 'Pricing text should sit white directly on the background.');
assert.match(styles, /\.pricing-plan-pro\s*\{[^}]*border:\s*1px solid var\(--run-pricing-pro-edge\)/s, 'Pro should use the shared Pro card border token.');
assert.match(styles, /\.pricing-plan-pro\s*\{[^}]*background:\s*var\(--run-pricing-pro-bg\)/s, 'Pro should use the shared Pro card background token.');
assert.match(styles, /\.pricing-plan-section-label\s*\{[^}]*text-transform:\s*uppercase/s, 'Pricing section labels should stay uppercase.');
assert.match(styles, /\.pricing-trial-divider\s*\{[^}]*height:\s*1px/s, 'Pro trial divider should be a thin horizontal rule.');
assert.match(styles, /\.pricing-trial-divider\s*\{[^}]*background:\s*linear-gradient/s, 'Pro trial divider should use a subtle gradient rule.');
assert.match(styles, /\.pricing-plan-trial\s*\{[^}]*color:\s*color-mix\(in srgb,\s*var\(--color-run-white\) 78%, transparent\)/s, 'Trial copy should use the current softened white treatment.');
assert.match(styles, /\.pricing-plan-purchase\s*\{[^}]*color:\s*var\(--color-run-white\)/s, 'Purchase note should be plain white text.');
assert.match(styles, /\.pricing-plan-purchase\s*\{[^}]*font-size:\s*inherit/s, 'Purchase note should use the same font size as the trial text.');
assert.match(styles, /\.pricing-plan-purchase\s*\{[^}]*font-weight:\s*inherit/s, 'Purchase note should use the same font weight as the trial text.');
assert.doesNotMatch(styles, /\.pricing-plan-purchase\s*\{[^}]*text-transform:\s*uppercase/s, 'Purchase note should not be forced uppercase.');
assert.match(styles, /\.pricing-region-note\s*\{[^}]*margin-top:\s*0\.65rem/s, 'Fallback pricing note should keep compact Pro-card spacing.');
assert.doesNotMatch(styles, /\.pricing-region-select|\.pricing-region-details|\.pricing-region-list|\.pricing-region-active/, 'Manual regional picker styles should be removed.');
assert.doesNotMatch(styles, /pricing-plan-badge-row/, 'Removed pricing badge CSS should not remain.');
assert.match(styles, /\.pricing-feature-columns\s*\{[^}]*display:\s*grid/s, 'Pro feature columns should be a grid.');
assert.match(styles, /\.pricing-feature-columns\s*\{[^}]*margin-top:\s*2rem/s, 'Pro feature columns should keep their spacing rhythm below the section label.');
assert.match(styles, /@media \(min-width:\s*760px\)[\s\S]*\.pricing-split\s*\{[\s\S]*grid-template-columns:\s*minmax\(0,\s*0\.9fr\)\s+minmax\(0,\s*1\.1fr\)/s, 'Desktop pricing should render the current two-column split.');
assert.match(styles, /@media \(min-width:\s*1024px\)[\s\S]*\.pricing-feature-columns\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/s, 'Desktop Pro features should use two side-by-side columns.');
assert.doesNotMatch(styles, /\.pricing-card-pro::after\b/, 'Pricing should not draw a separate dark backing surface behind the frame.');
assert.match(source, /pricing-price-metal/, 'Pricing amounts should use the shared price treatment.');
assert.match(styles, /\.pricing-plan\b/, 'Pricing text-column layout should live in global CSS instead of repeated inline utilities.');
assert.match(styles, /--run-headline-blue-fill:\s*linear-gradient\(180deg,\s*var\(--color-run-blue-highlight\),\s*var\(--color-run-blue\)\)/, 'Hero blue text gradient should be a shared global token.');
assert.match(hero, /<span class="section-heading-accent">real<\/span>/, 'Hero real word should use the shared accent class.');
assert.match(styles, /\.section-heading-accent\s*\{[^}]*background-image:\s*var\(--run-headline-blue-fill\)/s, 'The shared accent class should use the blue headline token.');
assert.match(styles, /\.pricing-price-metal\s*\{[^}]*background-image:\s*var\(--run-headline-metal-fill\)/s, 'Pricing amounts should use the shared metallic headline treatment.');
assert.match(styles, /\.pricing-price-metal\s*\{[^}]*font-size:\s*clamp\(2\.5rem,\s*4\.5vw,\s*3\.3rem\)/s, 'Free and Pro prices should share the current responsive price font size.');
assert.doesNotMatch(styles, /\.pricing-plan-(free|pro)\s+\.pricing-price-metal\s*\{[^}]*font-size/s, 'Free and Pro prices should not have plan-specific font-size overrides.');
assert.match(styles, /\.pricing-price-metal\b/, 'Pricing price treatment should live in global CSS.');
assert.doesNotMatch(styles, /\.pricing-card-pro\s*\{[^}]*border-color:\s*var\(--color-run-cyan\)/s, 'Pro should not use the old regular border.');
assert.doesNotMatch(source, /rounded-full bg-run-(cyan|green)/, 'Feature lists should not render leading bullet dots.');
assert.doesNotMatch(source, /sm:grid-cols-2/, 'Pro features should stay in one vertical column.');

assert.equal(DEFAULT_PRICING_TIER, 'US', 'USA should stay the server-rendered default pricing tier.');
assert.equal(FALLBACK_PRICING_TIER, 'default', 'Unsupported countries should use the fallback pricing tier.');
assert.equal(getPricingTier(), 'US', 'Missing country should keep the server-rendered default pricing tier.');
assert.equal(getPricingTier('fi'), 'EU', 'Finland should use the Eurozone tier.');
assert.equal(getPricingTier('gb'), 'UK', 'Lowercase country codes should normalize before lookup.');
assert.equal(getPricingTier('xx'), 'default', 'Unsupported countries should use the fallback pricing tier.');
assert.equal(getPrice('free'), '$0', 'Default Free display price should stay $0.');
assert.equal(getPrice('pro'), '$4.99', 'Default Pro display price should stay $4.99.');

const expectedTiers = [
  ['US', 'USA', '$0', '$4.99', '4.99', 'USD', ['US']],
  ['EU', 'Eurozone', '€0', '€4,99', '4.99', 'EUR', ['AT', 'BE', 'BG', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES']],
  ['UK', 'United Kingdom', '£0', '£4.49', '4.49', 'GBP', ['GB']],
  ['CA', 'Canada', 'CA$0', 'CA$6.99', '6.99', 'CAD', ['CA']],
  ['AU', 'Australia', 'A$0', 'A$7.99', '7.99', 'AUD', ['AU']],
  ['CH', 'Switzerland', 'CHF 0', 'CHF 5.00', '5.00', 'CHF', ['CH']],
  ['NO', 'Norway', '0 kr', '59 kr', '59', 'NOK', ['NO']],
  ['SE', 'Sweden', '0 kr', '59 kr', '59', 'SEK', ['SE']],
  ['JP', 'Japan', '¥0', '¥700', '700', 'JPY', ['JP']],
  ['AE', 'United Arab Emirates', 'AED 0', 'AED 17.99', '17.99', 'AED', ['AE']],
  ['SA', 'Saudi Arabia', 'SAR 0', 'SAR 17.99', '17.99', 'SAR', ['SA']],
  ['PL', 'Poland', '0 zł', '19,99 zł', '19.99', 'PLN', ['PL']],
  ['BR', 'Brazil', 'R$ 0', 'R$ 14,90', '14.90', 'BRL', ['BR']],
  ['MX', 'Mexico', 'MX$ 0', 'MX$ 79', '79', 'MXN', ['MX']],
  ['TR', 'Turkey', '₺0', '₺149', '149', 'TRY', ['TR']],
  ['ZA', 'South Africa', 'R 0', 'R 59', '59', 'ZAR', ['ZA']],
  ['MY', 'Malaysia', 'RM 0', 'RM 12', '12', 'MYR', ['MY']],
  ['TH', 'Thailand', '฿0', '฿89', '89', 'THB', ['TH']],
  ['IN', 'India', '₹0', '₹199', '199', 'INR', ['IN']],
  ['ID', 'Indonesia', 'Rp 0', 'Rp 29.000', '29000', 'IDR', ['ID']],
  ['PH', 'Philippines', '₱0', '₱99', '99', 'PHP', ['PH']],
  ['VN', 'Vietnam', '₫0', '₫49.000', '49000', 'VND', ['VN']],
  ['default', 'Default', '$0', '$4.99', '4.99', 'USD', []],
];

assert.equal(Object.keys(PRICING_TIERS).length, expectedTiers.length, 'All requested localized pricing tiers plus fallback should be represented.');
for (const [tierKey, label, free, pro, amount, currency, countryCodes] of expectedTiers) {
  const tier = PRICING_TIERS[tierKey];
  assert.ok(tier, `Missing pricing tier for ${tierKey}.`);
  assert.equal(tier.label, label, `${tierKey} should expose the expected label.`);
  assert.equal(tier.prices.free, free, `${tierKey} Free should show the requested localized zero price.`);
  assert.equal(tier.prices.pro, pro, `${tierKey} Pro should show the requested localized display price.`);
  assert.equal(tier.amount, amount, `${tierKey} should expose a machine-readable Pro price with period decimal syntax.`);
  assert.equal(tier.currency, currency, `${tierKey} should expose the correct ISO 4217 currency.`);
  assert.deepEqual(tier.countryCodes, countryCodes, `${tierKey} should map to the expected country code(s).`);

  for (const countryCode of countryCodes) {
    assert.equal(COUNTRY_TO_PRICING_TIER[countryCode], tierKey, `${countryCode} should map to ${tierKey}.`);
  }
}
});
