import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

import { ARTICLE_HUBS, articleNumberToHub } from '../src/data/articleTaxonomy.mjs';
import test from 'node:test';

test('articles content', () => {
const sourceRoot = 'C:/Users/emmah/Documents/ObsidianVault/Projects/Active/runcheck/artikkelit/Valmiit';
const finnishSourceRoot = 'C:/Users/emmah/Documents/ObsidianVault/Projects/Active/runcheck/artikkelit/fi-FI';
const generatedRoot = 'src/content/articles';
const finnishGeneratedRoot = path.join(generatedRoot, 'fi');

const getMarkdownFiles = (root) =>
  readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith('.md') ? [fullPath] : [];
  });

const parseFrontmatter = (source) => {
  assert.match(source, /^---\r?\n/, 'Generated articles must start with frontmatter.');
  const end = source.indexOf('\n---', 4);
  assert.notEqual(end, -1, 'Generated articles must close frontmatter.');

  const frontmatter = source.slice(4, end).trim();
  const body = source.slice(end + '\n---'.length).trimStart();
  const data = Object.fromEntries(
    frontmatter
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(':');
        assert.notEqual(separator, -1, `Frontmatter line should contain a key/value separator: ${line}`);
        const key = line.slice(0, separator);
        const value = line.slice(separator + 1).trim();
        try {
          return [key, JSON.parse(value)];
        } catch {
          return [key, value];
        }
      }),
  );

  return { data, body };
};

const normalizeBodyText = (value) =>
  value
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

const firstBodyParagraph = (body) =>
  body
    .split(/\r?\n\s*\r?\n/)
    .map((part) => part.trim())
    .find((part) => part && !part.startsWith('#') && !part.startsWith('|')) ?? '';

const sourceNumberFromPath = (file) => {
  const match = path.basename(file).match(/^(\d+)-/);
  assert.ok(match, `${file} should start with a numeric article prefix.`);
  return Number(match[1]);
};

const sourceFiles = getMarkdownFiles(sourceRoot).sort((a, b) => sourceNumberFromPath(a) - sourceNumberFromPath(b));
const generatedFiles = existsSync(generatedRoot)
  ? getMarkdownFiles(generatedRoot)
      .filter((file) => path.relative(generatedRoot, file).replaceAll('\\', '/').split('/').length === 2)
      .sort((a, b) => a.localeCompare(b, 'en'))
  : [];
const finnishSourceFiles = getMarkdownFiles(finnishSourceRoot).sort((a, b) => sourceNumberFromPath(a) - sourceNumberFromPath(b));
const finnishGeneratedFiles = existsSync(finnishGeneratedRoot)
  ? getMarkdownFiles(finnishGeneratedRoot).sort((a, b) => a.localeCompare(b, 'fi'))
  : [];

const sourceNumbers = sourceFiles.map(sourceNumberFromPath);

assert.equal(sourceFiles.length, 160, 'The source folder should contain all 160 ready articles.');
assert.deepEqual(sourceNumbers, Array.from({ length: 160 }, (_, index) => index + 1), 'Source article numbers should be exactly 1-160.');
assert.equal(articleNumberToHub.size, 160, 'Every source article number should be assigned to exactly one article hub.');

const importScript = readFileSync('scripts/import-runcheck-articles.mjs', 'utf8');
assert.match(
  importScript,
  /existingArticleMetadata/,
  'The article import script should preserve existing generated article metadata during re-import.',
);
assert.match(
  importScript,
  /metaTitle/,
  'The article import script should preserve existing generated SEO title overrides during re-import.',
);
assert.match(
  importScript,
  /sourceListSummary\s*\|\|\s*existingMetadata\.listSummary/,
  'Source listSummary values should override preserved generated listSummary values during import.',
);

for (let sourceNumber = 1; sourceNumber <= 160; sourceNumber += 1) {
  assert.ok(articleNumberToHub.has(sourceNumber), `Article ${sourceNumber} should have a hub assignment.`);
}

for (const hub of ARTICLE_HUBS) {
  assert.match(hub.href, new RegExp(`^/articles/${hub.slug}/$`), `${hub.title} menu href should point at its canonical hub page.`);
  assert.ok(hub.sourceNumbers.length > 0, `${hub.title} should contain at least one article.`);
}

assert.equal(generatedFiles.length, 160, 'The generated content collection should contain exactly 160 articles.');
assert.equal(finnishSourceFiles.length, 160, 'The Finnish source folder should contain exactly 160 articles.');
assert.equal(finnishGeneratedFiles.length, 160, 'The generated Finnish content collection should contain exactly 160 articles.');

const missingListSummaries = [];

for (const sourceFile of sourceFiles) {
  const sourceName = path.basename(sourceFile);
  const sourceNumber = Number(sourceName.match(/^(\d+)-/)?.[1]);
  const expectedHub = articleNumberToHub.get(sourceNumber);
  const expectedSlug = sourceName.replace(/^\d+-/, '').replace(/\.md$/, '');
  const expectedGeneratedPath = path.join(generatedRoot, expectedHub.slug, `${expectedSlug}.md`);

  assert.ok(existsSync(expectedGeneratedPath), `Article ${sourceNumber} should be generated at ${expectedGeneratedPath}.`);
  assert.ok(statSync(expectedGeneratedPath).isFile(), `${expectedGeneratedPath} should be a file.`);

  const { data, body } = parseFrontmatter(readFileSync(expectedGeneratedPath, 'utf8'));
  assert.equal(data.hub, expectedHub.slug, `Article ${sourceNumber} should be assigned to ${expectedHub.slug}.`);
  assert.equal(data.sourceNumber, sourceNumber, `Article ${sourceNumber} should preserve its source number.`);
  assert.equal(typeof data.order, 'number', `Article ${sourceNumber} should define numeric hub order.`);
  assert.equal(data.draft, false, `Article ${sourceNumber} should be published.`);
  assert.equal(typeof data.title, 'string', `Article ${sourceNumber} should define a title.`);
  assert.ok(data.title.length > 0, `Article ${sourceNumber} title should not be empty.`);
  assert.equal(typeof data.description, 'string', `Article ${sourceNumber} should define a description.`);
  assert.ok(data.description.length > 0, `Article ${sourceNumber} description should not be empty.`);
  if (data.listSummary === undefined) {
    missingListSummaries.push(sourceNumber);
  } else {
    const listSummary = data.listSummary.trim();
    assert.equal(typeof data.listSummary, 'string', `Article ${sourceNumber} listSummary should be text when present.`);
    assert.ok(listSummary.length > 0, `Article ${sourceNumber} listSummary should not be empty when present.`);
    assert.ok(listSummary.length <= 80, `Article ${sourceNumber} listSummary should stay short.`);
    assert.ok(listSummary.split(/\s+/).length <= 10, `Article ${sourceNumber} listSummary should be a short scan fragment.`);
    assert.doesNotMatch(listSummary, /[.!?]$/, `Article ${sourceNumber} listSummary should be a fragment, not a sentence.`);
    assert.notEqual(listSummary, data.title.trim(), `Article ${sourceNumber} listSummary should not duplicate the title.`);
    assert.notEqual(
      listSummary,
      data.description.trim(),
      `Article ${sourceNumber} listSummary should stay separate from the hero description.`,
    );
  }
  assert.doesNotMatch(body, /^#\s/m, `Article ${sourceNumber} body should not keep the copied H1.`);
  assert.doesNotMatch(body, /Meta description:/i, `Article ${sourceNumber} body should not render a copied meta description line.`);
  assert.notEqual(
    normalizeBodyText(firstBodyParagraph(body)),
    normalizeBodyText(data.description),
    `Article ${sourceNumber} body should not repeat the hero description as its opening paragraph.`,
  );
}

assert.deepEqual(missingListSummaries, [], 'Every article should define listSummary before hub pages fall back to SEO descriptions.');

const finnishSourceNumbers = [];
const finnishTitles = new Set();
const finnishSlugs = new Set();

for (const generatedFile of finnishGeneratedFiles) {
  const { data, body } = parseFrontmatter(readFileSync(generatedFile, 'utf8'));
  const relativePath = path.relative(finnishGeneratedRoot, generatedFile).replaceAll('\\', '/');
  const [hub, fileName] = relativePath.split('/');
  const slug = fileName.replace(/\.md$/, '');

  finnishSourceNumbers.push(data.sourceNumber);
  assert.equal(data.locale, 'fi', `${relativePath} should be marked as Finnish.`);
  assert.equal(data.hub, hub, `${relativePath} should stay under its shared internal hub key.`);
  assert.equal(typeof data.listSummary, 'string', `${relativePath} should define a concise Finnish card summary.`);
  assert.ok(data.listSummary.length > 0 && data.listSummary.length <= 110, `${relativePath} Finnish card summary should stay concise.`);
  assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${relativePath} should use a readable ASCII hyphen slug.`);
  assert.ok(slug.length <= 90, `${relativePath} should keep its SEO slug concise.`);
  assert.ok(!finnishTitles.has(data.title), `${relativePath} should have a unique Finnish title.`);
  assert.ok(!finnishSlugs.has(`${hub}/${slug}`), `${relativePath} should have a unique Finnish route slug.`);
  assert.doesNotMatch(body, /^#\s/m, `${relativePath} should not keep the copied H1.`);
  assert.doesNotMatch(body, /Meta description:/i, `${relativePath} should not render a copied meta description line.`);
  finnishTitles.add(data.title);
  finnishSlugs.add(`${hub}/${slug}`);
}

assert.deepEqual(
  finnishSourceNumbers.sort((a, b) => a - b),
  Array.from({ length: 160 }, (_, index) => index + 1),
  'Finnish generated articles should preserve source numbers 1-160 exactly once.',
);

assert.ok(existsSync('src/pages/articles/[hub].astro'), 'Hub pages should be generated through src/pages/articles/[hub].astro.');
assert.ok(existsSync('src/pages/articles/[hub]/[...slug].astro'), 'Article detail pages should be generated through src/pages/articles/[hub]/[...slug].astro.');
});
