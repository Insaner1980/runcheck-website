import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";

import {
  ARTICLE_LOCALE_CONTRACTS,
  PUBLISHED_ARTICLE_LOCALE_CODES,
} from "../src/data/articleLocaleConfig.mjs";
import { articlePath } from "../src/data/articlePaths.mjs";
import { normalizeMetaDescription } from "../src/data/seo.mjs";
import {
  ARTICLE_SOURCE_CATALOG,
  ARTICLE_SOURCE_HEADINGS,
  ARTICLE_SOURCE_IDS,
  getArticleSources,
  getArticleSourcesHeading,
} from "../src/data/articleSources.mjs";

const markdownFiles = (root) =>
  readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(root, entry.name);
    return entry.isDirectory()
      ? markdownFiles(file)
      : entry.name.endsWith(".md")
        ? [file]
        : [];
  });

const frontmatter = (source, key) => {
  const raw = source.match(new RegExp(`^${key}: (.+)$`, "m"))?.[1];
  assert.notEqual(raw, undefined, `${key} is missing.`);
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
};

const allFiles = (root, predicate = () => true) =>
  readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(root, entry.name);
    return entry.isDirectory()
      ? allFiles(file, predicate)
      : predicate(file)
        ? [file]
        : [];
  });

test("every article family has an explicit valid source list", () => {
  assert.deepEqual(
    Object.keys(ARTICLE_SOURCE_IDS).map(Number),
    Array.from({ length: 160 }, (_, index) => index + 1),
  );

  for (let sourceNumber = 1; sourceNumber <= 160; sourceNumber += 1) {
    const ids = ARTICLE_SOURCE_IDS[sourceNumber];
    assert.ok(ids.length > 0, `Article family ${sourceNumber} has no sources.`);
    assert.equal(
      new Set(ids).size,
      ids.length,
      `Article family ${sourceNumber} repeats a source.`,
    );
    for (const id of ids) {
      assert.ok(
        ARTICLE_SOURCE_CATALOG[id],
        `Article family ${sourceNumber} refers to unknown source ${id}.`,
      );
    }
    assert.equal(getArticleSources(sourceNumber).length, ids.length);
  }
});

test("source records use clean HTTPS URLs and a verification date", () => {
  for (const [id, item] of Object.entries(ARTICLE_SOURCE_CATALOG)) {
    const url = new URL(item.url);
    assert.equal(url.protocol, "https:", `${id} must use HTTPS.`);
    assert.doesNotMatch(
      url.search,
      /(?:^|[?&])(utm_[^=]*|fbclid|gclid)=/i,
      `${id} contains tracking parameters.`,
    );
    assert.match(item.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(item.publisher.trim());
    assert.ok(item.title.trim());
  }
});

test("post-QA source and article regressions stay removed", () => {
  const invalidSourceId = ["battery", "Review"].join("");
  const invalidPmcid = ["PMC", "10422460"].join("");
  const runtimeSource = readFileSync("src/data/articleSources.mjs", "utf8");

  assert.ok(!ARTICLE_SOURCE_CATALOG[invalidSourceId]);
  assert.doesNotMatch(runtimeSource, new RegExp(invalidSourceId));
  assert.doesNotMatch(JSON.stringify(ARTICLE_SOURCE_IDS), new RegExp(invalidSourceId));

  const protectedRoots = ["src/data", "src/content", "scripts", "dist"];
  for (const root of protectedRoots) {
    for (const file of allFiles(root, (item) =>
      /\.(?:astro|css|html|js|json|md|mjs|ts)$/.test(item),
    )) {
      assert.doesNotMatch(
        readFileSync(file, "utf8"),
        new RegExp(invalidPmcid),
        `${file} still contains the invalid PMCID.`,
      );
    }
  }

  const targetFiles = markdownFiles("src/content/articles").map((file) => ({
    file,
    markdown: readFileSync(file, "utf8"),
  }));
  const family = (sourceNumber) =>
    targetFiles.filter(
      ({ markdown }) =>
        Number(frontmatter(markdown, "sourceNumber")) === sourceNumber,
    );

  for (const { file, markdown } of family(138)) {
    assert.doesNotMatch(
      markdown,
      /40\s*%[\s\S]{0,180}25\s*%[\s\S]{0,180}10\s*%/,
      `${file} still publishes the removed score formula.`,
    );
    const locale = /^locale: (.+)$/m.test(markdown)
      ? frontmatter(markdown, "locale")
      : "en";
    if (["da", "de", "en", "es", "fi", "it", "nb"].includes(locale)) {
      assert.doesNotMatch(
        frontmatter(markdown, "description"),
        /TestM/i,
        `${file} names TestM without body coverage.`,
      );
    }
  }

  const oldClaims = [
    "Gaming on Android doesn't normally damage the CPU or GPU",
    "Below 35°C is usually normal",
    "thick TPU, silicone, rugged, and wallet cases",
    "OnePlus, Motorola, OPPO, and Realme",
    "with repair cost ranges",
    "Airplane mode can help an Android phone charge a little faster",
    "Settings route, useful tests",
  ];
  const affectedArticles = targetFiles
    .filter(({ markdown }) =>
      [55, 59, 60, 112, 113, 142, 148, 159].includes(
        Number(frontmatter(markdown, "sourceNumber")),
      ),
    )
    .map(({ markdown }) => markdown)
    .join("\n");
  for (const claim of oldClaims) {
    assert.ok(
      !affectedArticles.includes(claim),
      `Removed post-QA claim is still present: ${claim}`,
    );
  }
});

test("final deployment blockers remain narrowly remediated in source content", () => {
  const articles = markdownFiles("src/content/articles").map((file) => {
    const markdown = readFileSync(file, "utf8");
    return {
      file,
      markdown,
      locale: /^locale: (.+)$/m.test(markdown)
        ? frontmatter(markdown, "locale")
        : "en",
      sourceNumber: Number(frontmatter(markdown, "sourceNumber")),
    };
  });
  const family = (sourceNumber) =>
    articles.filter((article) => article.sourceNumber === sourceNumber);
  const expectedLocales = [...PUBLISHED_ARTICLE_LOCALE_CODES].sort();

  assert.equal(articles.length, 1440);
  for (let sourceNumber = 1; sourceNumber <= 160; sourceNumber += 1) {
    const versions = family(sourceNumber);
    assert.equal(versions.length, 9, `Family ${sourceNumber} must have nine versions.`);
    assert.deepEqual(
      versions.map(({ locale }) => locale).sort(),
      expectedLocales,
      `Family ${sourceNumber} must have one version in every published language.`,
    );
  }
  for (const { file, markdown } of articles) {
    assert.doesNotMatch(
      markdown,
      /^(?:pubDate|publishedAt|datePublished|updatedAt|modifiedAt|dateModified|lastModified):/m,
      `${file} introduced a publication or modification date.`,
    );
  }

  const degradationFamilies = Object.entries(ARTICLE_SOURCE_IDS)
    .filter(([, ids]) => ids.includes("batteryDegradation"))
    .map(([sourceNumber]) => Number(sourceNumber));
  assert.deepEqual(
    degradationFamilies,
    [3, 15, 19, 22, 31, 37, 38, 39, 40, 41, 52, 55, 59, 62, 63, 151, 156],
  );
  const degradationUrl = ARTICLE_SOURCE_CATALOG.batteryDegradation.url;
  for (const sourceNumber of degradationFamilies) {
    for (const { file, markdown } of family(sourceNumber)) {
      assert.ok(
        markdown.includes(`](${degradationUrl})`),
        `${file} must connect the retained Edge source to article wording.`,
      );
    }
  }
  assert.ok(!ARTICLE_SOURCE_CATALOG.batteryLowTemperature);
  for (const { file, markdown } of family(31)) {
    assert.match(markdown, /\]\(https:\/\/support\.google\.com\/(?:pixelphone|product-documentation)\/answer\/12164747\?hl=en\)/);
    assert.doesNotMatch(markdown, /batteryLowTemperature/, `${file} retains the inaccessible source.`);
  }
  for (const { file, markdown } of family(16)) {
    for (const id of ["pouchCellSwelling", "epaBattery", "pixelBattery"]) {
      assert.ok(
        markdown.includes(`](${ARTICLE_SOURCE_CATALOG[id].url})`),
        `${file} must connect ${id} to its own paragraph.`,
      );
    }
  }

  const italian60 = family(60).find(({ locale }) => locale === "it");
  assert.equal(
    frontmatter(italian60.markdown, "listSummary"),
    "Una custodia non genera calore; rimuoverla temporaneamente può servire come confronto, ma l'effetto varia.",
  );
  assert.doesNotMatch(frontmatter(italian60.markdown, "listSummary"), /TPU/i);

  for (const sourceNumber of [112, 113]) {
    for (const { file, markdown } of family(sourceNumber)) {
      assert.doesNotMatch(markdown, /Kernel Version/i, `${file} retains the unsupported route.`);
      const xiaomiSection = markdown
        .split(/^## /m)
        .slice(1)
        .find((section) => section.startsWith("Xiaomi"));
      assert.ok(xiaomiSection, `${file} has no Xiaomi section.`);
      assert.equal(
        xiaomiSection.trim().split(/\r?\n\s*\r?\n/).length,
        3,
        `${file} must keep only the heading, documented codes, and touch test scope.`,
      );
      assert.equal((xiaomiSection.match(/\*#\*#6484#\*#\*/g) ?? []).length, 1);
      assert.equal((xiaomiSection.match(/\*#\*#64663#\*#\*/g) ?? []).length, 1);
      assert.doesNotMatch(
        xiaomiSection,
        /^(?:\s*[-*+]\s|\s*\|)/m,
        `${file} must not restore a Xiaomi hardware-category inventory.`,
      );
    }
  }

  for (const { file, markdown } of family(114)) {
    assert.doesNotMatch(markdown, /\*#899#/, `${file} retains the unsupported OnePlus or OPPO code.`);
  }

  const touchTerms = {
    en: /touchscreen/i,
    fi: /kosketus/i,
    sv: /pekskärm/i,
    nb: /berørings/i,
    de: /Touchscreen/i,
    da: /touchskærm/i,
    fr: /tactile|écran tactile/i,
    es: /táctil|pantalla táctil/i,
    it: /touchscreen/i,
  };
  const broadHardwareScope =
    /hidden hardware|hardware tests?|maskinvaretester|hårdvarutester|Hardwaretests?|laitteistotestit|tests? matériels?|pruebas? de hardware|test hardware/i;
  for (const { file, locale, markdown } of family(159)) {
    const title = frontmatter(markdown, "title");
    const summary = frontmatter(markdown, "listSummary");
    assert.match(title, touchTerms[locale], `${file} title is not touch-test-specific.`);
    assert.match(summary, touchTerms[locale], `${file} summary is not touch-test-specific.`);
    assert.doesNotMatch(title, broadHardwareScope, `${file} title promises a hardware catalog.`);
    assert.doesNotMatch(summary, broadHardwareScope, `${file} summary promises a hardware catalog.`);
    assert.equal((markdown.match(/\*#\*#6484#\*#\*/g) ?? []).length >= 1, true);
    assert.equal((markdown.match(/\*#\*#64663#\*#\*/g) ?? []).length >= 1, true);
  }

  const summaries148 = Object.fromEntries(
    family(148).map(({ locale, markdown }) => [locale, frontmatter(markdown, "listSummary")]),
  );
  assert.match(summaries148.fi, /laturiteho on eri asia/i);
  assert.match(summaries148.fi, /(?:ei|eikä) yleistä nopeutumista ole osoitettu/i);
  assert.match(summaries148.it, /potenza del caricatore è distinta/i);
  assert.match(summaries148.it, /non implica più velocità/i);

  assert.ok(!ARTICLE_SOURCE_IDS[145].includes("batteryDegradation"));
  const conditional145 = {
    en: /no universal measured reduction/i,
    fi: /yleistä mitattua latausajan lyhenemistä ole osoitettu/i,
    sv: /universell uppmätt minskning/i,
    nb: /universell målt reduksjon/i,
    de: /universelle gemessene Verkürzung/i,
    da: /universel målt forkortelse/i,
    fr: /réduction universelle et mesurée/i,
    es: /reducción universal y medida/i,
    it: /riduzione universale e misurata/i,
  };
  for (const { file, locale, markdown } of family(145)) {
    assert.match(markdown, conditional145[locale], `${file} lost the charging-time limitation.`);
  }

  assert.deepEqual(
    Object.entries(ARTICLE_SOURCE_IDS)
      .filter(([, ids]) => ids.includes("xiaomiProtection"))
      .map(([sourceNumber]) => Number(sourceNumber)),
    [43, 50, 51, 155],
  );
  const protectionUrl = ARTICLE_SOURCE_CATALOG.xiaomiProtection.url;
  for (const sourceNumber of [43, 50, 51, 155]) {
    for (const { file, markdown } of family(sourceNumber)) {
      assert.ok(markdown.includes("POCO F6"), `${file} hides the source model.`);
      assert.ok(markdown.includes(`](${protectionUrl})`), `${file} lacks the direct POCO F6 source link.`);
    }
  }

  assert.equal(
    ARTICLE_SOURCE_CATALOG.samsungAfterimage.title,
    "Always On Display Leaves Afterimage on Phone's Screen",
  );
  assert.equal(
    new Set(Object.values(ARTICLE_SOURCE_CATALOG).map(({ url }) => url)).size,
    Object.keys(ARTICLE_SOURCE_CATALOG).length,
    "Source URLs must not be duplicated under different IDs.",
  );
});

test("family 114 keeps the Xiaomi fingerprint source beside the claim and in the bibliography", () => {
  const xiaomiFingerprintUrl =
    "https://www.mi.com/global/support/faq/details/KA-42422/";
  const family114 = markdownFiles("src/content/articles")
    .map((file) => {
      const markdown = readFileSync(file, "utf8");
      return {
        file,
        markdown,
        locale: /^locale: (.+)$/m.test(markdown)
          ? frontmatter(markdown, "locale")
          : "en",
        sourceNumber: Number(frontmatter(markdown, "sourceNumber")),
      };
    })
    .filter(({ sourceNumber }) => sourceNumber === 114);

  assert.equal(family114.length, 9);
  assert.deepEqual(
    family114.map(({ locale }) => locale).sort(),
    [...PUBLISHED_ARTICLE_LOCALE_CODES].sort(),
  );

  const count = (source, value) => source.split(value).length - 1;
  for (const article of family114) {
    const hub = frontmatter(article.markdown, "hub");
    const slug = path.basename(article.file, ".md");
    const urlPath = articlePath(hub, slug, article.locale);
    const output = path.join("dist", urlPath.replace(/^\//, ""), "index.html");
    const html = readFileSync(output, "utf8");
    const sourceSectionStart = html.search(
      /<section\b[^>]*class="[^"]*\barticle-sources\b[^"]*"[^>]*>/i,
    );
    assert.notEqual(sourceSectionStart, -1, `${urlPath} has no source section.`);
    const sourceSectionEnd = html.indexOf("</section>", sourceSectionStart);
    assert.notEqual(sourceSectionEnd, -1, `${urlPath} has an unclosed source section.`);

    const articleStart = html.lastIndexOf("<article", sourceSectionStart);
    assert.notEqual(articleStart, -1, `${urlPath} has no article body.`);
    const body = html.slice(articleStart, sourceSectionStart);
    const sourceSection = html.slice(sourceSectionStart, sourceSectionEnd + 10);
    const claimParagraphs = [...body.matchAll(/<p\b[^>]*>[\s\S]*?<\/p>/gi)]
      .map(([paragraph]) => paragraph)
      .filter(
        (paragraph) =>
          paragraph.includes("*#*#6484#*#*") &&
          paragraph.includes("Fingerprint sensor check") &&
          paragraph.includes("Fingerprint input test"),
      );

    assert.equal(
      count(body, xiaomiFingerprintUrl),
      1,
      `${urlPath} must contain one claim-adjacent Xiaomi source link.`,
    );
    assert.equal(
      claimParagraphs.length,
      1,
      `${urlPath} must keep the code and both test names in one claim paragraph.`,
    );
    assert.equal(
      count(claimParagraphs[0], xiaomiFingerprintUrl),
      1,
      `${urlPath} must link the Xiaomi source exactly once in the claim paragraph.`,
    );
    assert.equal(
      count(sourceSection, xiaomiFingerprintUrl),
      1,
      `${urlPath} must retain one Xiaomi source link in the bibliography.`,
    );
    assert.equal(
      count(html, xiaomiFingerprintUrl),
      2,
      `${urlPath} must contain the intentional claim and bibliography links.`,
    );
  }
});

test("final blocker metadata is correct in generated article surfaces", () => {
  const articles = markdownFiles("src/content/articles").map((file) => {
    const markdown = readFileSync(file, "utf8");
    return {
      file,
      markdown,
      locale: /^locale: (.+)$/m.test(markdown)
        ? frontmatter(markdown, "locale")
        : "en",
      sourceNumber: Number(frontmatter(markdown, "sourceNumber")),
    };
  });
  const escapeText = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  const escapeAttribute = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  for (const article of articles.filter(({ sourceNumber }) => sourceNumber === 159)) {
    const title = frontmatter(article.markdown, "title");
    const description = frontmatter(article.markdown, "description");
    const metaDescription = normalizeMetaDescription(description);
    const summary = frontmatter(article.markdown, "listSummary");
    const hub = frontmatter(article.markdown, "hub");
    const slug = path.basename(article.file, ".md");
    const urlPath = articlePath(hub, slug, article.locale);
    const output = path.join("dist", urlPath.replace(/^\//, ""), "index.html");
    const html = readFileSync(output, "utf8");
    const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";

    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${urlPath} must have one H1.`);
    assert.ok(html.includes(`>${escapeText(title)}</h1>`), `${urlPath} H1 is stale.`);
    assert.ok(head.includes(escapeAttribute(title)), `${urlPath} HTML title is stale.`);
    assert.ok(head.includes(`content="${escapeAttribute(metaDescription)}"`), `${urlPath} description is stale.`);
    assert.ok(head.includes('property="og:title"') && head.includes(escapeAttribute(title)));
    assert.ok(html.includes(JSON.stringify(title)), `${urlPath} JSON-LD title is stale.`);

    const searchFile = path.join(
      "dist",
      ARTICLE_LOCALE_CONTRACTS[article.locale].searchIndex.replace(/^\//, ""),
    );
    const searchItem = JSON.parse(readFileSync(searchFile, "utf8")).find(
      (item) => item.url === urlPath,
    );
    assert.equal(searchItem?.title, title);
    assert.equal(searchItem?.description, description);

    const hubPath = urlPath.replace(/[^/]+\/$/, "");
    const hubHtml = readFileSync(
      path.join("dist", hubPath.replace(/^\//, ""), "index.html"),
      "utf8",
    );
    assert.ok(hubHtml.includes(escapeText(title)), `${hubPath} card title is stale.`);
    assert.ok(hubHtml.includes(escapeText(summary)), `${hubPath} card summary is stale.`);
  }

  for (const [sourceNumber, locale] of [
    [60, "it"],
    [148, "fi"],
    [148, "it"],
  ]) {
    const article = articles.find(
      (item) => item.sourceNumber === sourceNumber && item.locale === locale,
    );
    const summary = frontmatter(article.markdown, "listSummary");
    const hub = frontmatter(article.markdown, "hub");
    const slug = path.basename(article.file, ".md");
    const urlPath = articlePath(hub, slug, locale);
    const hubPath = urlPath.replace(/[^/]+\/$/, "");
    const hubHtml = readFileSync(
      path.join("dist", hubPath.replace(/^\//, ""), "index.html"),
      "utf8",
    );
    assert.ok(hubHtml.includes(escapeText(summary)), `${hubPath} card summary is stale.`);
  }
});

test("family 160 preserves the exact Samsung code across source and build output", () => {
  const exactCode = "*#0*#";
  const expectedFiles = [
    "src/content/articles/brands/samsung-0-diagnostic-menu-complete-guide.md",
    "src/content/articles/da/brands/samsungs-diagnosemenu-0-komplet-vejledning.md",
    "src/content/articles/de/brands/samsung-diagnosemenu-0-vollstandige-anleitung.md",
    "src/content/articles/es/brands/menu-de-diagnostico-0-de-samsung-guia-completa.md",
    "src/content/articles/fi/brands/samsung-diagnostiikkavalikko-kattava-opas.md",
    "src/content/articles/fr/brands/menu-de-diagnostic-samsung-0-guide-complet.md",
    "src/content/articles/it/brands/menu-diagnostico-samsung-0-guida-completa.md",
    "src/content/articles/nb/brands/samsungs-diagnosemeny-0-komplett-veiledning.md",
    "src/content/articles/sv/brands/samsungs-diagnostikmeny-0-komplett-guide.md",
  ];
  const articles = expectedFiles.map((file) => {
    assert.ok(existsSync(file), `${file} was renamed or removed.`);
    const markdown = readFileSync(file, "utf8");
    assert.equal(Number(frontmatter(markdown, "sourceNumber")), 160);
    const locale = /^locale: (.+)$/m.test(markdown)
      ? frontmatter(markdown, "locale")
      : "en";
    const title = frontmatter(markdown, "title");
    const description = frontmatter(markdown, "description");
    assert.ok(title.includes(exactCode), `${file} title lost ${exactCode}.`);
    assert.ok(
      description.includes(exactCode),
      `${file} description lost ${exactCode}.`,
    );
    assert.ok(!title.replaceAll(exactCode, "").includes("#0#"));
    assert.ok(!description.replaceAll(exactCode, "").includes("#0#"));
    assert.ok(
      !markdown.replaceAll(exactCode, "").includes("#0#"),
      `${file} contains a bare Samsung code in reader metadata or body text.`,
    );
    return { file, markdown, locale, title, description };
  });

  assert.deepEqual(
    articles.map(({ locale }) => locale).sort(),
    [...PUBLISHED_ARTICLE_LOCALE_CODES].sort(),
  );

  const renderedHtmlPages = allFiles("dist", (file) =>
    file.endsWith("index.html"),
  ).map((file) => readFileSync(file, "utf8"));

  for (const article of articles) {
    const hub = frontmatter(article.markdown, "hub");
    const slug = path.basename(article.file, ".md");
    const urlPath = articlePath(hub, slug, article.locale);
    const output = path.join("dist", urlPath.replace(/^\//, ""), "index.html");
    assert.ok(existsSync(output), `${urlPath} was not built.`);
    const html = readFileSync(output, "utf8");
    const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
    const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";

    assert.ok(head.includes(exactCode), `${urlPath} head lost ${exactCode}.`);
    assert.ok(body.includes(exactCode), `${urlPath} H1 lost ${exactCode}.`);
    assert.ok(
      head.includes(`property="og:title"`) && head.includes(exactCode),
      `${urlPath} Open Graph title lost ${exactCode}.`,
    );
    assert.ok(
      html.includes(JSON.stringify(article.title)),
      `${urlPath} JSON-LD lost the exact title.`,
    );
    assert.ok(
      !html.replaceAll(exactCode, "").includes("#0#"),
      `${urlPath} contains a bare Samsung code.`,
    );

    const searchFile = path.join(
      "dist",
      ARTICLE_LOCALE_CONTRACTS[article.locale].searchIndex.replace(/^\//, ""),
    );
    const searchIndex = JSON.parse(readFileSync(searchFile, "utf8"));
    const searchItem = searchIndex.find((item) => item.url === urlPath);
    assert.equal(searchItem?.title, article.title);
    assert.equal(searchItem?.description, article.description);

    const renderedPages = renderedHtmlPages.filter((page) =>
      page.includes(article.title),
    );
    assert.ok(
      renderedPages.length >= 2,
      `${article.locale} article cards do not expose the exact family-160 title.`,
    );
  }
});

test("every published language has a localized sources heading", () => {
  assert.deepEqual(
    Object.keys(ARTICLE_SOURCE_HEADINGS),
    PUBLISHED_ARTICLE_LOCALE_CODES,
  );
  for (const locale of PUBLISHED_ARTICLE_LOCALE_CODES) {
    assert.ok(getArticleSourcesHeading(locale));
  }
  assert.equal(getArticleSourcesHeading("unknown"), "Sources");
});

test("all article detail renderers include the shared sources component", () => {
  const renderers = [
    "src/pages/articles/[hub]/[...slug].astro",
    "src/pages/fi/artikkelit/[hub]/[...slug].astro",
    "src/components/LocalizedArticleDetailPage.astro",
  ];

  for (const file of renderers) {
    const source = readFileSync(file, "utf8");
    assert.match(source, /import ArticleSources from/);
    assert.match(source, /<ArticleSources/);
    assert.match(source, /sourceNumber=\{article\.data\.sourceNumber\}/);
  }
});

test("all 1,440 built article versions render their localized source list", () => {
  const articles = markdownFiles("src/content/articles");

  assert.equal(articles.length, 1440);
  for (const file of articles) {
    const markdown = readFileSync(file, "utf8");
    const sourceNumber = frontmatter(markdown, "sourceNumber");
    const hub = frontmatter(markdown, "hub");
    const locale = markdown.match(/^locale: (.+)$/m)?.[1]
      ? frontmatter(markdown, "locale")
      : "en";
    const slug = path.basename(file, ".md");
    const urlPath = articlePath(hub, slug, locale);
    const output = path.join("dist", urlPath.replace(/^\//, ""), "index.html");

    assert.ok(existsSync(output), `${urlPath} was not built.`);
    const html = readFileSync(output, "utf8");
    assert.ok(
      html.includes(`aria-labelledby="article-sources-${sourceNumber}"`),
      `${urlPath} has no sources section.`,
    );
    assert.ok(
      html.includes(`>${getArticleSourcesHeading(locale)}</h2>`),
      `${urlPath} has the wrong sources heading.`,
    );
    for (const item of getArticleSources(sourceNumber)) {
      const href = item.url.replaceAll("&", "&amp;");
      assert.ok(
        html.includes(`href="${href}"`),
        `${urlPath} is missing source ${item.id}.`,
      );
    }
  }
});
