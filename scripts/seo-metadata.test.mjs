import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import {
  CLOUDFLARE_WEB_ANALYTICS_SCRIPT_URL,
  CLOUDFLARE_WEB_ANALYTICS_TOKEN,
  GA4_MEASUREMENT_ID,
} from '../src/data/analytics.mjs';
import { FALLBACK_PRICING_TIER, PRICING_TIERS, getStructuredOffers } from '../src/data/pricing.mjs';
import { ARTICLE_LOCALE_CONTRACTS } from '../src/data/articleLocaleConfig.mjs';
import { articlePath } from '../src/data/articlePaths.mjs';
import test from 'node:test';

test('seo metadata', () => {
const root = 'dist';
const site = 'https://runcheckapp.com';
const htmlFiles = [];
const articleSourceNumberByUrl = new Map();

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name === 'index.html') {
      htmlFiles.push(fullPath);
    }
  }
}

function parseAttrs(tag) {
  const attrs = {};
  const pattern = /([:\w-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g;
  for (const match of tag.matchAll(pattern)) {
    attrs[match[1].toLowerCase()] = match[3] ?? match[4] ?? match[5] ?? '';
  }
  return attrs;
}

function decodeHtmlAttribute(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&#34;', '"')
    .replaceAll('&#x22;', '"')
    .replaceAll('&amp;', '&');
}

function tags(head, name) {
  return [...head.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((match) => ({
    tag: match[0],
    attrs: parseAttrs(match[0]),
  }));
}

function pageUrl(file) {
  const rel = path.relative(root, file).replaceAll('\\', '/');
  const route = rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
  return new URL(route, site).toString();
}

function jsonLdItems(head) {
  return [...head.matchAll(/<script\b[^>]*type=(["'])application\/ld\+json\1[^>]*>([\s\S]*?)<\/script>/gi)].map((match) =>
    JSON.parse(match[2]),
  );
}

assert.ok(existsSync(root), 'dist should exist; run npm run build before the SEO metadata test.');

walk(root);

function walkContent(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkContent(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const source = readFileSync(fullPath, 'utf8');
      const locale = JSON.parse(source.match(/^locale: (.+)$/m)?.[1] ?? '"en"');
      const hub = JSON.parse(source.match(/^hub: (.+)$/m)?.[1]);
      const sourceNumber = Number(source.match(/^sourceNumber: (\d+)$/m)?.[1]);
      const url = new URL(articlePath(hub, path.basename(fullPath, '.md'), locale), site).toString();
      articleSourceNumberByUrl.set(url, sourceNumber);
    }
  }
}

walkContent('src/content/articles');
assert.ok(htmlFiles.length > 0, 'The built site should expose static HTML pages.');

const titleWarnings = [];
const descriptionWarnings = [];
const duplicateDescriptionWarnings = [];
const seenDescriptions = new Map();
const seenTitles = new Map();

assert.equal(GA4_MEASUREMENT_ID, 'G-4GJKG2Z3ZL', 'GA4 measurement ID should match the configured runcheck web stream.');
assert.equal(
  CLOUDFLARE_WEB_ANALYTICS_TOKEN,
  'dad3def149314f74bae698364e746fbd',
  'Cloudflare Web Analytics token should match the configured runcheck site.',
);
assert.equal(
  CLOUDFLARE_WEB_ANALYTICS_SCRIPT_URL,
  'https://static.cloudflareinsights.com/beacon.min.js',
  'Cloudflare Web Analytics should use the official beacon script URL.',
);

function distPathForPublicUrl(publicUrl) {
  const parsed = parseCanonicalSiteUrl(publicUrl, publicUrl);
  return path.join(root, decodeURIComponent(parsed.pathname).replace(/^\/+/, ''));
}

function parseCanonicalSiteUrl(publicUrl, context) {
  assert.ok(URL.canParse(publicUrl), `${context} should be an absolute URL.`);
  const parsed = new URL(publicUrl);
  assert.equal(parsed.origin, site, `${context} should stay on the canonical site.`);
  return parsed;
}

assert.throws(
  () => parseCanonicalSiteUrl('https://runcheckapp.com.example/runcheck-search-thumbnail.webp', 'lookalike image URL'),
  /canonical site/,
  'Canonical URL checks should reject lookalike hostnames.',
);
assert.throws(
  () => parseCanonicalSiteUrl('/runcheck-search-thumbnail.webp', 'relative image URL'),
  /absolute URL/,
  'Canonical URL checks should reject relative URLs.',
);

function assertWebpImageUrl(imageUrl, context) {
  if (!imageUrl || imageUrl.startsWith('data:')) {
    return;
  }

  const parsed = imageUrl.startsWith('http') ? new URL(imageUrl) : new URL(imageUrl, site);
  assert.equal(path.extname(parsed.pathname), '.webp', `${context} should use a WebP image.`);
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const url = pageUrl(file);
  const pathname = new URL(url).pathname;
  const expectedLocale = Object.values(ARTICLE_LOCALE_CONTRACTS).find((item) => item.code !== 'en' && pathname.startsWith(item.root)) ?? ARTICLE_LOCALE_CONTRACTS.en;
  const expectedLanguage = expectedLocale.lang;
  const meta = tags(head, 'meta');
  const link = tags(head, 'link');
  const scriptTags = tags(head, 'script');
  const imageTags = tags(html, 'img');
  const metaByName = (name) => meta.find((item) => item.attrs.name === name)?.attrs.content ?? '';
  const metaByProp = (property) => meta.find((item) => item.attrs.property === property)?.attrs.content ?? '';
  const canonicalTags = link.filter((item) => item.attrs.rel === 'canonical');
  const alternateTags = link.filter((item) => item.attrs.rel === 'alternate' && item.attrs.hreflang);
  const title = head.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '';
  const description = decodeHtmlAttribute(metaByName('description'));
  const structuredData = jsonLdItems(head);
  const structuredTypes = new Set(structuredData.map((item) => item['@type']));

  assert.ok(title, `${url} should have a title.`);
  const titleKey = `${expectedLanguage}:${title}`;
  const duplicateTitleUrl = seenTitles.get(titleKey);
  const duplicateSourcePair = duplicateTitleUrl
    ? new Set([articleSourceNumberByUrl.get(url), articleSourceNumberByUrl.get(duplicateTitleUrl)])
    : new Set();
  assert.ok(!duplicateTitleUrl || (duplicateSourcePair.size === 2 && duplicateSourcePair.has(112) && duplicateSourcePair.has(113)), `${url} title duplicates ${duplicateTitleUrl}.`);
  seenTitles.set(titleKey, url);
  if (title.length > 70) {
    titleWarnings.push(`${url} (${title.length})`);
  }

  assert.ok(description, `${url} should have a meta description.`);
  if (description.length < 70) descriptionWarnings.push(`${url} (${description.length})`);
  assert.ok(description.length <= 180, `${url} meta description should stay concise.`);
  const descriptionKey = `${expectedLanguage}:${description}`;
  if (seenDescriptions.has(descriptionKey)) duplicateDescriptionWarnings.push(`${url} duplicates ${seenDescriptions.get(descriptionKey)}`);
  seenDescriptions.set(descriptionKey, url);
  assert.equal(
    metaByName('robots'),
    'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
    `${url} should be indexable with full snippet and media preview permissions.`,
  );
  assert.equal(metaByName('theme-color'), '#030708', `${url} should expose the browser theme color.`);
  assert.equal(canonicalTags.length, 1, `${url} should have exactly one canonical link.`);
  assert.equal(canonicalTags[0].attrs.href, url, `${url} canonical should match the built URL.`);
  assert.equal(html.match(/<html\b[^>]*\blang="([^"]+)"/i)?.[1], expectedLanguage, `${url} should expose the correct HTML language.`);
  assert.equal(metaByProp('og:locale'), expectedLocale.og, `${url} should expose the correct Open Graph locale.`);
  assert.equal(metaByProp('og:url'), url, `${url} og:url should match canonical.`);
  assert.equal(link.find((item) => item.attrs.rel === 'manifest')?.attrs.href, '/site.webmanifest', `${url} should link the web manifest.`);
  assert.equal(link.find((item) => item.attrs.rel === 'apple-touch-icon')?.attrs.href, '/apple-touch-icon.png', `${url} should link the Apple touch icon.`);
  const googleTagScripts = scriptTags.filter((item) => item.attrs.src?.startsWith('https://www.googletagmanager.com/gtag/js'));
  assert.equal(googleTagScripts.length, 1, `${url} should load the Google tag exactly once.`);
  assert.match(googleTagScripts[0].tag, /\sasync(?:\s|>|=)/, `${url} Google tag script should load asynchronously.`);
  assert.equal(
    new URL(googleTagScripts[0].attrs.src).searchParams.get('id'),
    GA4_MEASUREMENT_ID,
    `${url} Google tag script should use the GA4 measurement ID.`,
  );
  assert.match(head, new RegExp(`ga4MeasurementId\\s*=\\s*["']${GA4_MEASUREMENT_ID}["']`), `${url} should inline the GA4 measurement ID.`);
  assert.match(head, /window\.gtag\(["']config["']\s*,\s*ga4MeasurementId\)/, `${url} should configure GA4 once the tag is loaded.`);
  const cloudflareBeaconScripts = scriptTags.filter((item) => item.attrs.src === CLOUDFLARE_WEB_ANALYTICS_SCRIPT_URL);
  assert.equal(cloudflareBeaconScripts.length, 1, `${url} should load Cloudflare Web Analytics exactly once.`);
  assert.match(cloudflareBeaconScripts[0].tag, /\sdefer(?:\s|>|=)/, `${url} Cloudflare Web Analytics should defer loading.`);
  assert.ok(
    !('integrity' in cloudflareBeaconScripts[0].attrs),
    `${url} Cloudflare Web Analytics should not use an integrity attribute.`,
  );
  const cloudflareBeaconConfig = JSON.parse(
    decodeHtmlAttribute(cloudflareBeaconScripts[0].attrs['data-cf-beacon'] ?? ''),
  );
  assert.deepEqual(
    cloudflareBeaconConfig,
    { token: CLOUDFLARE_WEB_ANALYTICS_TOKEN },
    `${url} Cloudflare Web Analytics should use the runcheck site token.`,
  );

  for (const property of ['og:site_name', 'og:locale', 'og:type', 'og:title', 'og:description', 'og:image', 'og:image:alt']) {
    assert.ok(metaByProp(property), `${url} should include ${property}.`);
  }

  assert.equal(metaByProp('og:image:type'), 'image/webp', `${url} should expose the Open Graph image type.`);
  assert.equal(metaByProp('og:image:width'), '1200', `${url} should expose the Open Graph image width.`);
  assert.equal(metaByProp('og:image:height'), '1200', `${url} should expose the Open Graph image height.`);

  for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) {
    assert.ok(metaByName(name), `${url} should include ${name}.`);
  }

  parseCanonicalSiteUrl(metaByProp('og:image'), `${url} Open Graph image`);
  parseCanonicalSiteUrl(metaByName('twitter:image'), `${url} Twitter image`);
  assert.ok(
    metaByProp('og:image').endsWith('/runcheck-search-thumbnail.webp'),
    `${url} should use the square runcheck search thumbnail image.`,
  );
  assert.equal(metaByName('twitter:image'), metaByProp('og:image'), `${url} Twitter image should match the Open Graph image.`);
  assert.ok(existsSync(distPathForPublicUrl(metaByProp('og:image'))), `${url} Open Graph image should resolve in dist.`);
  assertWebpImageUrl(metaByProp('og:image'), `${url} Open Graph image`);
  for (const imageTag of imageTags) {
    assertWebpImageUrl(imageTag.attrs.src, `${url} rendered image ${imageTag.attrs.src}`);
    for (const srcsetItem of (imageTag.attrs.srcset ?? '').split(',')) {
      const candidate = srcsetItem.trim().split(/\s+/)[0];
      assertWebpImageUrl(candidate, `${url} rendered image srcset candidate ${candidate}`);
    }
  }
  assert.ok(structuredTypes.has('WebSite'), `${url} should include WebSite JSON-LD.`);
  assert.ok(structuredTypes.has('Organization'), `${url} should include Organization JSON-LD.`);
  assert.ok(structuredTypes.has('WebPage'), `${url} should include WebPage JSON-LD.`);
  const webPageJsonLd = structuredData.find((item) => item['@type'] === 'WebPage');
  assert.equal(webPageJsonLd.inLanguage, expectedLanguage, `${url} WebPage JSON-LD should match the rendered language.`);
  assert.equal(
    webPageJsonLd.image.url,
    `${site}/runcheck-search-thumbnail.webp`,
    `${url} WebPage JSON-LD should expose the search thumbnail image.`,
  );
  assert.equal(
    webPageJsonLd.primaryImageOfPage.url,
    `${site}/runcheck-search-thumbnail.webp`,
    `${url} WebPage JSON-LD should mark the search thumbnail as primary.`,
  );
  if (url === `${site}/`) {
    const appJsonLd = structuredData.find((item) => {
      const type = item['@type'];
      return Array.isArray(type) && type.includes('SoftwareApplication') && type.includes('MobileApplication');
    });

    assert.ok(appJsonLd, `${url} should include runcheck SoftwareApplication JSON-LD.`);
    assert.equal(appJsonLd.name, 'runcheck', `${url} SoftwareApplication should name the app.`);
    assert.equal(
      appJsonLd.image,
      `${site}/runcheck-search-thumbnail.webp`,
      `${url} SoftwareApplication should expose the runcheck search thumbnail image.`,
    );
    assert.equal(appJsonLd.operatingSystem, 'Android', `${url} SoftwareApplication should identify Android as the OS.`);
    assert.equal(
      appJsonLd.applicationCategory,
      'UtilitiesApplication',
      `${url} SoftwareApplication should use a Google-supported app category.`,
    );
    assert.ok(!('aggregateRating' in appJsonLd), `${url} SoftwareApplication should not invent aggregate ratings.`);
    assert.ok(!('review' in appJsonLd), `${url} SoftwareApplication should not invent reviews.`);
    const expectedOffers = getStructuredOffers({ site });
    const expectedOfferCount = Object.keys(PRICING_TIERS).filter((tier) => tier !== FALLBACK_PRICING_TIER).length;
    assert.equal(appJsonLd.offers.length, expectedOfferCount, `${url} SoftwareApplication offers should match regional Pro prices.`);
    assert.equal(appJsonLd.offers.length, expectedOffers.length, `${url} SoftwareApplication offers should use the shared structured offer data.`);

    for (const expectedOffer of expectedOffers) {
      const offer = appJsonLd.offers.find(
        (item) =>
          item.name === expectedOffer.name &&
          item.priceCurrency === expectedOffer.priceCurrency &&
          item.price === expectedOffer.price,
      );
      assert.ok(offer, `${url} SoftwareApplication should include an offer for ${expectedOffer.name}.`);
      assert.equal(offer.url, `${site}/#pricing`, `${url} ${expectedOffer.name} offer should point to the pricing section.`);
      assert.deepEqual(
        offer.eligibleRegion,
        expectedOffer.eligibleRegion,
        `${url} ${expectedOffer.name} offer should expose eligible countries for search engines.`,
      );
    }
    assert.ok(!appJsonLd.offers.some((offer) => offer.name.endsWith('Default')), `${url} SoftwareApplication should not expose the fallback display tier as a structured offer.`);
  } else {
    assert.ok(!structuredTypes.has('SoftwareApplication'), `${url} should not duplicate homepage app pricing JSON-LD.`);
  }
  if (url.includes('/articles/') || url.includes('/fi/artikkelit/')) {
    assert.ok(structuredTypes.has('BreadcrumbList'), `${url} should include article breadcrumb JSON-LD.`);
    assert.deepEqual(
      alternateTags.map((item) => item.attrs.hreflang).sort(),
      ['da', 'de', 'en', 'es', 'fi', 'fr', 'it', 'nb', 'sv', 'x-default'],
      `${url} should expose reciprocal alternatives for all nine published locales and x-default.`,
    );
    for (const alternate of alternateTags) {
      parseCanonicalSiteUrl(alternate.attrs.href, `${url} ${alternate.attrs.hreflang} alternate`);
    }
  }
}

const robots = readFileSync(path.join(root, 'robots.txt'), 'utf8');
const headers = readFileSync(path.join(root, '_headers'), 'utf8');
const redirects = readFileSync(path.join(root, '_redirects'), 'utf8');
const sitemapIndex = readFileSync(path.join(root, 'sitemap-index.xml'), 'utf8');
const sitemap = readFileSync(path.join(root, 'sitemap-0.xml'), 'utf8');
const manifest = JSON.parse(readFileSync(path.join(root, 'site.webmanifest'), 'utf8'));

assert.match(robots, /^User-agent: \*\r?\nAllow: \//m, 'robots.txt should allow crawling.');
assert.match(robots, /Sitemap: https:\/\/runcheckapp\.com\/sitemap-index\.xml/, 'robots.txt should point to the sitemap index.');
assert.match(
  headers,
  /script-src[^;\r\n]*https:\/\/www\.googletagmanager\.com/,
  'CSP should allow the Google tag script origin.',
);
assert.match(
  headers,
  /script-src[^;\r\n]*https:\/\/static\.cloudflareinsights\.com/,
  'CSP should allow the Cloudflare Web Analytics script origin.',
);
assert.match(
  headers,
  /connect-src[^;\r\n]*https:\/\/www\.google-analytics\.com[^;\r\n]*https:\/\/region1\.google-analytics\.com/,
  'CSP should allow GA4 collection endpoints.',
);
assert.match(
  headers,
  /connect-src[^;\r\n]*https:\/\/cloudflareinsights\.com/,
  'CSP should allow the Cloudflare Web Analytics collection endpoint.',
);
assert.match(redirects, /^\/sitemap\.xml\s+\/sitemap-index\.xml\s+301$/m, '/sitemap.xml should redirect to the generated sitemap index.');
assert.match(sitemapIndex, /<loc>https:\/\/runcheckapp\.com\/sitemap-0\.xml<\/loc>/, 'sitemap index should point to the generated sitemap.');
assert.equal((sitemap.match(/<loc>/g) ?? []).length, htmlFiles.length, 'sitemap should include every built HTML page.');
assert.equal(manifest.name, 'runcheck', 'manifest should expose the site name.');
assert.equal(manifest.theme_color, '#030708', 'manifest should match the site theme color.');

for (const icon of manifest.icons) {
  assert.ok(icon.src.endsWith('.webp'), `manifest icon ${icon.src} should use WebP.`);
  assert.equal(icon.type, 'image/webp', `manifest icon ${icon.src} should advertise the WebP MIME type.`);
}

for (const asset of [
  'runcheck-search-thumbnail.webp',
  'runcheck-phone-diagnostics-og-image.webp',
  'apple-touch-icon.png',
  'runcheck-app-icon-192.webp',
  'runcheck-app-icon-512.webp',
  'favicon.ico',
  'favicon.svg',
]) {
  assert.ok(existsSync(path.join(root, asset)), `${asset} should be copied to dist.`);
}

console.log(
  JSON.stringify(
    {
      pages: htmlFiles.length,
      titleWarnings: titleWarnings.length,
      titleWarningExamples: titleWarnings.slice(0, 8),
      descriptionWarnings: descriptionWarnings.length,
      descriptionWarningExamples: descriptionWarnings.slice(0, 8),
      duplicateDescriptionWarnings: duplicateDescriptionWarnings.length,
      duplicateDescriptionWarningExamples: duplicateDescriptionWarnings.slice(0, 8),
    },
    null,
    2,
  ),
);
});
