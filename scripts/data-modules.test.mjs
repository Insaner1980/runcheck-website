import assert from "node:assert/strict";
import test from "node:test";
import {
  buildCloudflareWebAnalyticsBeaconConfig,
  buildGoogleTagScriptUrl,
  CLOUDFLARE_WEB_ANALYTICS_TOKEN,
  GA4_MEASUREMENT_ID,
} from "../src/data/analytics.mjs";
import {
  allArticleAlternates,
  localizedHubs,
} from "../src/data/articleLocales.mjs";
import { ARTICLE_HUBS_FI } from "../src/data/articleTaxonomy.fi.mjs";
import { ARTICLE_HUBS } from "../src/data/articleTaxonomy.mjs";
import { buildRuncheckSoftwareApplicationJsonLd } from "../src/data/pricing.mjs";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
  normalizeMetaDescription,
  serializeJsonLd,
} from "../src/data/seo.mjs";

const site = "https://runcheckapp.com";

test("analytics helpers encode their configured identifiers", () => {
  const googleUrl = new URL(buildGoogleTagScriptUrl());
  assert.equal(googleUrl.searchParams.get("id"), GA4_MEASUREMENT_ID);
  assert.equal(
    buildCloudflareWebAnalyticsBeaconConfig(),
    JSON.stringify({ token: CLOUDFLARE_WEB_ANALYTICS_TOKEN }),
  );
});

test("SEO helpers normalize metadata and build absolute structured data", () => {
  assert.equal(absoluteUrl("/articles/", site), `${site}/articles/`);
  assert.equal(
    normalizeMetaDescription("  A compact   description.  "),
    "A compact description.",
  );

  const longDescription = `${"A useful sentence with practical Android guidance. ".repeat(3)}${"extra ".repeat(30)}`;
  const normalized = normalizeMetaDescription(longDescription, {
    maxLength: 100,
  });
  assert.ok(normalized.length <= 100);
  assert.match(normalized, /\.$/);

  assert.deepEqual(buildWebSiteJsonLd({ site, language: "fi" }), {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "runcheck",
    url: `${site}/`,
    image: `${site}/runcheck-search-thumbnail.webp`,
    inLanguage: "fi",
  });
  assert.equal(
    buildOrganizationJsonLd({ site }).logo,
    `${site}/runcheck-app-icon-512.webp`,
  );

  const page = buildWebPageJsonLd({
    title: "Battery health",
    description: "Understand battery health.",
    canonicalUrl: `${site}/articles/battery/`,
    site,
  });
  assert.equal(page.primaryImageOfPage, page.image);
  assert.equal(page.isPartOf.url, `${site}/`);

  const breadcrumbs = buildBreadcrumbJsonLd(
    [
      { name: "Home", path: "/" },
      { name: "Articles", path: "/articles/" },
    ],
    site,
  );
  assert.deepEqual(
    breadcrumbs.itemListElement.map(({ position, item }) => ({
      position,
      item,
    })),
    [
      { position: 1, item: `${site}/` },
      { position: 2, item: `${site}/articles/` },
    ],
  );
  assert.equal(
    serializeJsonLd({ value: "<script>" }),
    '{"value":"\\u003cscript>"}',
  );
});

test("localized article helpers retain canonical hubs and reciprocal alternates", () => {
  assert.equal(localizedHubs("en"), ARTICLE_HUBS);
  assert.throws(
    () => localizedHubs("fi"),
    /Use ARTICLE_HUBS_FI for Finnish metadata/,
  );
  assert.equal(localizedHubs("it").length, ARTICLE_HUBS.length);
  assert.equal(ARTICLE_HUBS_FI.length, ARTICLE_HUBS.length);

  const alternates = allArticleAlternates(
    [
      {
        id: "battery/battery-health",
        data: { sourceNumber: 1, locale: "en", hub: "battery" },
      },
      {
        id: "it/battery/stato-batteria",
        data: { sourceNumber: 1, locale: "it", hub: "battery" },
      },
      {
        id: "draft/unrouted",
        data: { sourceNumber: 1, locale: "xx", hub: "battery" },
      },
    ],
    1,
  );
  assert.deepEqual(
    alternates.map(({ lang }) => lang),
    ["en", "it", "x-default"],
  );
  assert.equal(alternates.at(-1).path, alternates[0].path);
});

test("software application structured data uses regional pricing offers", () => {
  const application = buildRuncheckSoftwareApplicationJsonLd({ site });
  assert.deepEqual(application["@type"], [
    "SoftwareApplication",
    "MobileApplication",
  ]);
  assert.ok(application.offers.length > 1);
  assert.ok(
    application.offers.every((offer) => offer.url === `${site}/#pricing`),
  );
});
