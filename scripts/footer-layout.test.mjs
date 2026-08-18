import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("footer layout", () => {
  const footer = readFileSync("src/components/Footer.astro", "utf8");

  assert.match(
    footer,
    /class="footer-meta [^"]*md:justify-self-end[^"]*"[\s\S]*class="footer-copyright">&copy; \{year\} runcheck<\/p>/,
    "Footer should render the copyright in its dedicated layout slot.",
  );
  assert.match(
    footer,
    /<Image\s+[^>]*src=\{logo\}/s,
    "Footer should use the shared image asset for the brand mark.",
  );
  assert.match(
    footer,
    /href=\{copy\.root\}>\{copy\.nav\[1\]\}<\/a>/,
    "Footer should use the locale contract for the article link.",
  );
  assert.match(
    footer,
    /href="mailto:contact@finnvek\.com">\{copy\.nav\[2\]\}<\/a>/,
    "Footer should expose the localized contact link.",
  );
  assert.match(
    footer,
    /flex-col items-center gap-4 sm:flex-row sm:gap-9/,
    "Footer links should stack on mobile and sit inline on desktop.",
  );
  assert.match(
    footer,
    /PUBLISHED_ARTICLE_LOCALE_CODES\.map\(\(code\) => \(\{[\s\S]*href: ARTICLE_LOCALES\[code\]\.root/,
    "Footer article-language links should come from the published locale contract.",
  );
  assert.match(
    footer,
    /<a href=\{link\.href\} lang=\{link\.lang\}>\s*\{link\.label\}\s*<\/a>/,
    "Footer article-language links should render as ordinary localized anchors.",
  );
  for (const language of [
    "English",
    "Suomi",
    "Svenska",
    "Norsk bokmål",
    "Deutsch",
    "Dansk",
    "Français",
    "Español",
    "Italiano",
  ]) {
    assert.ok(
      footer.includes(`"${language}"`),
      `Footer should expose the human-readable language name ${language}.`,
    );
  }
});
