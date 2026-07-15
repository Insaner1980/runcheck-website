import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

import { articleHubBySlugFi } from '../src/data/articleTaxonomy.fi.mjs';
import { ARTICLE_HUBS, articleNumberToHub } from '../src/data/articleTaxonomy.mjs';
import { ARTICLE_LOCALE_CONTRACTS } from '../src/data/articleLocaleConfig.mjs';
import { localizedHubs } from '../src/data/articleLocales.mjs';
import { localizedSeoSlug } from '../src/data/articleSlugs.mjs';

const localeArg = process.argv.find((argument) => argument.startsWith('--locale='));
const locale = localeArg?.split('=')[1] ?? 'en';
const localeContract = ARTICLE_LOCALE_CONTRACTS[locale];
if (!localeContract?.sourceSupported) {
  throw new Error(`Unsupported article locale: ${locale}`);
}

const sourceRoot = `C:/Users/emmah/Documents/ObsidianVault/Projects/Active/runcheck/artikkelit/${localeContract.importerSource}`;
const contentRoot = path.resolve('src/content/articles');
const generatedRoot = locale === 'en' ? contentRoot : path.join(contentRoot, locale);
const workspaceRoot = path.resolve('.');
const FINNISH_DESCRIPTION_OVERRIDES = new Map([
  [68, 'Miksi Android-puhelin voi tuntua hitaalta päivityksen jälkeen, milloin se on normaalia ja mitä tehdä, jos suorituskyky ei palaudu.'],
  [69, 'Mitkä Androidin Developer Options -asetukset voivat saada puhelimen tuntumaan nopeammalta, mitkä ovat riskialttiita ja mitkä kannattaa jättää rauhaan.'],
]);
const FINNISH_META_TITLE_OVERRIDES = new Map([
  [1, 'Android-puhelimen kuntotarkistus | runcheck'],
  [8, 'Android-puhelimen huoltotarkistuslista'],
  [11, 'Android-puhelimen akun kunnon tarkistus'],
  [21, 'Miksi puhelimen akku tyhjenee nopeasti?'],
  [53, 'Android-puhelin ylikuumenee: syyt ja lämpötilan tarkistus'],
  [69, 'Androidin Developer Options ja suorituskyky'],
  [70, 'Android-puhelimen käynnistäminen vikasietotilaan'],
  [87, 'Tallennustila täynnä ilman syytä: Android-ratkaisut'],
  [100, 'Wi-Fi-puhelut: mitä ne ovat ja milloin niitä käytetään'],
  [104, 'Android-puhelimen laitteiston testausopas (2026)'],
  [123, 'Onko Android-puhelimesi yhä tuettu?'],
  [130, 'Vikasietotila vai tehdasasetusten palautus?'],
  [139, 'AccuBattery vs DevCheck vs runcheck: diagnostiikkavertailu'],
  [140, 'Puhelimen kuntotarkistussovellukset'],
  [159, 'Xiaomin CIT-valikko: Xiaomi-, Redmi- ja POCO-testit'],
]);

const getMarkdownFiles = (root) =>
  readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith('.md') ? [fullPath] : [];
  });

const stripFrontmatter = (source, fileName = 'Markdown source') => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    if (source.startsWith('---')) throw new Error(`${fileName} has invalid frontmatter.`);
    return { frontmatter: '', body: source };
  }

  return {
    frontmatter: match[1],
    body: source.slice(match[0].length),
  };
};

const parseTags = (frontmatter) => {
  const tagsLine = frontmatter.match(/^tags:\s*\[(.*?)\]\s*$/m);
  if (!tagsLine) {
    return [];
  }

  return tagsLine[1]
    .split(',')
    .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
};

const parseFrontmatterString = (frontmatter, key) => {
  const match = frontmatter.match(new RegExp(String.raw`^${key}:\s*([^\r\n]+)$`, 'm'));
  if (!match) {
    return '';
  }

  return match[1].trim().replace(/^['"]|['"]$/g, '');
};

const stripMarkdown = (value) => {
  const inlineCode = [];
  const protectedValue = value.replace(/`([^`]+)`/g, (_, code) => {
    inlineCode.push(code);
    return `RUNCHECKINLINECODE${inlineCode.length - 1}END`;
  });

  return protectedValue
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/RUNCHECKINLINECODE(\d+)END/g, (_, index) => inlineCode[Number(index)])
    .trim();
};

const extractMetaDescription = (body) => {
  const prefixes = ['**Meta description:**', '*Meta description:', 'Meta description:'];
  const lines = body.split(/\r?\n/);
  const lineIndex = lines.findIndex((line) => {
    const normalizedLine = line.trimStart().toLowerCase();
    return prefixes.some((prefix) => normalizedLine.startsWith(prefix.toLowerCase()));
  });
  if (lineIndex < 0) {
    return { description: '', body };
  }

  const line = lines[lineIndex].trim();
  const prefix = prefixes.find((candidate) => line.toLowerCase().startsWith(candidate.toLowerCase()));
  const description = line.slice(prefix.length).replace(/\*$/, '').trim();
  lines.splice(lineIndex, 1);

  return {
    description: stripMarkdown(description),
    body: lines.join('\n').trimStart(),
  };
};

const extractTitle = (body, fileName) => {
  const match = body.match(/^#\s+([^\r\n]+)$/m);
  if (!match) {
    throw new Error(`${fileName} is missing an H1 title.`);
  }

  return stripMarkdown(match[1]);
};

const removeFirstH1 = (body) => body.replace(/(^|\r?\n)#\s+[^\r\n]+\r?\n+/, '$1').trimStart();

const firstParagraph = (body) => {
  const cleaned = body
    .replace(/^---\s*$/gm, '')
    .split(/\r?\n\s*\r?\n/)
    .map((part) => part.trim())
    .find((part) => part && !part.startsWith('#') && !part.startsWith('|'));

  if (!cleaned) {
    return '';
  }

  return stripMarkdown(cleaned);
};

const firstLongParagraph = (body, excludedText = '') =>
  body
    .replace(/^---\s*$/gm, '')
    .split(/\r?\n\s*\r?\n/)
    .map((part) => stripMarkdown(part))
    .find((part) => part.length >= 70 && normalizedText(part) !== normalizedText(excludedText)) ?? '';

const normalizedText = (value) => stripMarkdown(value).replace(/\s+/g, ' ').trim();

const buildLocalizedListSummary = (description, title) => {
  const clean = normalizedText(description);
  const sentences = clean.split(/(?<=[.!?])\s+/);
  const candidate = sentences.find((sentence) => normalizedText(sentence) !== normalizedText(title)) ?? clean;
  if (candidate.length <= 110) {
    return candidate.trim();
  }

  const clause = candidate.slice(0, 111).match(/^(.{45,110}?)[,;:](?:\s|$)/)?.[1];
  if (clause) return `${clause.trim()}.`;

  const candidatePrefix = candidate.slice(0, 107);
  const wordBoundary = candidatePrefix.lastIndexOf(' ');
  const completeWords = wordBoundary < 0 ? candidatePrefix : candidatePrefix.slice(0, wordBoundary);
  const shortened = completeWords.replace(/[,:;.!?]+$/, '').trim();
  return `${shortened}…`;
};

const localizedHubFor = (hub, articleLocale) => {
  if (articleLocale === 'fi') return articleHubBySlugFi.get(hub.slug);
  if (articleLocale === 'en') return hub;
  return localizedHubs(articleLocale).find((candidate) => candidate.slug === hub.slug);
};

const removeLeadingDuplicateDescription = (body, description) => {
  const trimmed = body.trimStart();
  const match = trimmed.match(/^([\s\S]*?)(?:\r?\n\s*\r?\n|$)/);
  const paragraph = match?.[1]?.trim() ?? '';

  if (paragraph && normalizedText(paragraph) === normalizedText(description)) {
    return trimmed.slice(match[0].length).trimStart();
  }

  return body;
};

const findSectionTitle = (hub, sourceNumber) => {
  const section = hub.sections?.find((candidate) => candidate.sourceNumbers.includes(sourceNumber));
  return section?.title;
};

const formatFrontmatter = (data) =>
  [
    '---',
    `title: ${JSON.stringify(data.title)}`,
    ...(data.metaTitle ? [`metaTitle: ${JSON.stringify(data.metaTitle)}`] : []),
    `description: ${JSON.stringify(data.description)}`,
    ...(data.metaDescription ? [`metaDescription: ${JSON.stringify(data.metaDescription)}`] : []),
    ...(data.listSummary ? [`listSummary: ${JSON.stringify(data.listSummary)}`] : []),
    `hub: ${JSON.stringify(data.hub)}`,
    `sourceNumber: ${data.sourceNumber}`,
    `order: ${data.order}`,
    ...(data.subgroup ? [`subgroup: ${JSON.stringify(data.subgroup)}`] : []),
    `tags: ${JSON.stringify(data.tags)}`,
    `locale: ${JSON.stringify(data.locale)}`,
    'draft: false',
    '---',
    '',
  ].join('\n');

const sourceNumberFromPath = (file) => {
  const match = path.basename(file).match(/^(\d+)-/);
  if (!match) {
    throw new Error(`${file} is missing a numeric prefix.`);
  }

  return Number(match[1]);
};

async function collectSourceFiles() {
  const sourceByNumber = new Map();
  const candidates = getMarkdownFiles(sourceRoot).sort((a, b) => a.localeCompare(b));

  for (const file of candidates) {
    const sourceNumber = sourceNumberFromPath(file);
    const existing = sourceByNumber.get(sourceNumber);
    if (existing) throw new Error(`Article ${sourceNumber} has duplicate translations in ${sourceRoot}: ${existing}; ${file}`);
    sourceByNumber.set(sourceNumber, file);
  }

  if (candidates.length !== 160) throw new Error(`Expected exactly 160 source files for ${locale}, found ${candidates.length}.`);
  return sourceByNumber;
}

function assertCompleteSourceSet(sourceByNumber) {
  const expectedNumbers = Array.from({ length: 160 }, (_, index) => index + 1);
  const actualMissing = expectedNumbers.filter((number) => !sourceByNumber.has(number));
  if (actualMissing.length > 0) {
    throw new Error(`Missing article numbers for ${locale}: ${actualMissing.join(',')}.`);
  }
}

async function readExistingArticleMetadata() {
  const metadata = new Map();
  if (!existsSync(generatedRoot)) {
    return metadata;
  }

  for (const generatedFile of getMarkdownFiles(generatedRoot)) {
    const { frontmatter } = stripFrontmatter(await readFile(generatedFile, 'utf8'));
    const sourceNumber = Number(parseFrontmatterString(frontmatter, 'sourceNumber'));
    const existingLocale = parseFrontmatterString(frontmatter, 'locale') || 'en';
    if (Number.isInteger(sourceNumber) && existingLocale === locale) {
      metadata.set(sourceNumber, {
        listSummary: parseFrontmatterString(frontmatter, 'listSummary'),
        metaTitle: parseFrontmatterString(frontmatter, 'metaTitle'),
        metaDescription: parseFrontmatterString(frontmatter, 'metaDescription'),
      });
    }
  }

  return metadata;
}

async function prepareGeneratedRoot() {
  if (!generatedRoot.startsWith(workspaceRoot)) {
    throw new Error(`Refusing to write outside workspace: ${generatedRoot}`);
  }

  if (locale !== 'en') {
    await rm(generatedRoot, { recursive: true, force: true });
  } else {
    await Promise.all(ARTICLE_HUBS.map((hub) => rm(path.join(generatedRoot, hub.slug), { recursive: true, force: true })));
  }

  await Promise.all(ARTICLE_HUBS.map((hub) => mkdir(path.join(generatedRoot, hub.slug), { recursive: true })));
}

async function generateArticle(sourceFile, existingArticleMetadata, generatedSlugs) {
  const sourceName = path.basename(sourceFile);
  const sourceNumber = Number(sourceName.match(/^(\d+)-/)?.[1]);
  const hub = articleNumberToHub.get(sourceNumber);
  if (!hub) {
    throw new Error(`Article ${sourceNumber} is not assigned to a hub.`);
  }

  const order = hub.sourceNumbers.indexOf(sourceNumber) + 1;
  const raw = await readFile(sourceFile, 'utf8');
  const { frontmatter, body } = stripFrontmatter(raw, sourceFile);
  const extractedTitle = parseFrontmatterString(frontmatter, 'title') || extractTitle(body, sourceName);
  const title = locale === 'fi' && sourceNumber === 113
    ? 'Androidin huoltokoodit merkeittäin: mitkä toimivat edelleen'
    : extractedTitle;
  const sourceMetaTitle = parseFrontmatterString(frontmatter, 'metaTitle');
  const explicitDescription = parseFrontmatterString(frontmatter, 'description');
  const sourceMetaDescription = parseFrontmatterString(frontmatter, 'metaDescription');
  const sourceListSummary = parseFrontmatterString(frontmatter, 'listSummary');
  const tags = localizeTags(parseTags(frontmatter), locale);
  const existingMetadata = existingArticleMetadata.get(sourceNumber) ?? {};
  const metaTitle = locale === 'fi'
    ? FINNISH_META_TITLE_OVERRIDES.get(sourceNumber) ?? sourceMetaTitle
    : sourceMetaTitle || existingMetadata.metaTitle || '';
  const preservedMetaDescription = locale === 'fi' ? sourceMetaDescription : sourceMetaDescription || existingMetadata.metaDescription || '';
  const withoutTitle = removeFirstH1(body);
  const meta = extractMetaDescription(withoutTitle);
  const sourceDescription = explicitDescription || meta.description || firstParagraph(meta.body);
  const description = locale === 'fi'
    ? FINNISH_DESCRIPTION_OVERRIDES.get(sourceNumber) ?? sourceDescription
    : sourceDescription;
  const listSummary = locale === 'en'
    ? sourceListSummary || existingMetadata.listSummary || ''
    : sourceListSummary || buildLocalizedListSummary(description, title);
  const metaDescription = preservedMetaDescription || (
    locale === 'fi' && description.length < 70 ? firstLongParagraph(meta.body, description) : ''
  );

  if (!description) {
    throw new Error(`${sourceName} does not contain enough text to derive a description.`);
  }

  const bodyWithoutDuplicateDescription = removeLeadingDuplicateDescription(meta.body, sourceDescription);
  const slug = locale !== 'en'
    ? localizedSeoSlug(title, locale, sourceNumber)
    : sourceName.replace(/^\d+-/, '').replace(/\.md$/, '');
  const slugKey = `${hub.slug}/${slug}`;
  if (generatedSlugs.has(slugKey)) {
    throw new Error(`Duplicate generated article slug: ${slugKey}`);
  }
  generatedSlugs.add(slugKey);
  const localizedHub = localizedHubFor(hub, locale);
  const targetPath = path.join(generatedRoot, hub.slug, `${slug}.md`);
  const normalized = `${formatFrontmatter({
    title,
    metaTitle,
    description,
    metaDescription,
    listSummary,
    hub: hub.slug,
    sourceNumber,
    order,
    subgroup: findSectionTitle(localizedHub, sourceNumber),
    tags,
    locale,
  })}${bodyWithoutDuplicateDescription.trimStart()}`;

  await writeFile(targetPath, normalized.endsWith('\n') ? normalized : `${normalized}\n`, 'utf8');
}

async function importArticles() {
  const sourceByNumber = await collectSourceFiles();
  assertCompleteSourceSet(sourceByNumber);
  const existingArticleMetadata = await readExistingArticleMetadata();
  await prepareGeneratedRoot();

  const generatedSlugs = new Set();
  const sourceFiles = [...sourceByNumber.values()].sort((a, b) => sourceNumberFromPath(a) - sourceNumberFromPath(b));
  for (const sourceFile of sourceFiles) {
    await generateArticle(sourceFile, existingArticleMetadata, generatedSlugs);
  }
}

function localizeTags(tags, locale) {
  if (locale === 'en') return tags;
  const translations = localeContract.tagMap;
  return [...new Set(tags.map((tag) => translations[tag] ?? tag))];
}

await importArticles();
