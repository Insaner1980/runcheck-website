import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

import { ARTICLE_HUBS, articleNumberToHub } from '../src/data/articleTaxonomy.mjs';

const sourceRoot = 'C:/Users/emmah/Documents/ObsidianVault/Projects/Active/runcheck/artikkelit/Valmiit';
const generatedRoot = path.resolve('src/content/articles');
const workspaceRoot = path.resolve('.');

const getMarkdownFiles = (root) =>
  readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith('.md') ? [fullPath] : [];
  });

const stripFrontmatter = (source) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
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
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) {
    return '';
  }

  return match[1].trim().replace(/^['"]|['"]$/g, '');
};

const stripMarkdown = (value) =>
  value
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

const extractMetaDescription = (body) => {
  const metaPattern = /^\s*(?:\*\*Meta description:\*\*|\*Meta description:|Meta description:)\s*(.+?)(?:\*)?\s*$/im;
  const match = body.match(metaPattern);
  if (!match) {
    return { description: '', body };
  }

  return {
    description: stripMarkdown(match[1]),
    body: body.replace(match[0], '').trimStart(),
  };
};

const extractTitle = (body, fileName) => {
  const match = body.match(/^#\s+(.+)$/m);
  if (!match) {
    throw new Error(`${fileName} is missing an H1 title.`);
  }

  return stripMarkdown(match[1]);
};

const removeFirstH1 = (body) => body.replace(/(^|\r?\n)#\s+.+\r?\n+/, '$1').trimStart();

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

const normalizedText = (value) => stripMarkdown(value).replace(/\s+/g, ' ').trim();

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

const sourceFiles = getMarkdownFiles(sourceRoot).sort((a, b) => sourceNumberFromPath(a) - sourceNumberFromPath(b));
const sourceNumbers = sourceFiles.map((file) => {
  return sourceNumberFromPath(file);
});

const expectedNumbers = Array.from({ length: 160 }, (_, index) => index + 1);
if (sourceFiles.length !== 160 || sourceNumbers.join(',') !== expectedNumbers.join(',')) {
  throw new Error('Source folder must contain exactly article numbers 1-160 before import.');
}

if (!generatedRoot.startsWith(workspaceRoot)) {
  throw new Error(`Refusing to write outside workspace: ${generatedRoot}`);
}

const existingArticleMetadata = new Map();
if (existsSync(generatedRoot)) {
  for (const generatedFile of getMarkdownFiles(generatedRoot)) {
    const { frontmatter } = stripFrontmatter(await readFile(generatedFile, 'utf8'));
    const sourceNumber = Number(parseFrontmatterString(frontmatter, 'sourceNumber'));
    const metaTitle = parseFrontmatterString(frontmatter, 'metaTitle');
    const metaDescription = parseFrontmatterString(frontmatter, 'metaDescription');
    const listSummary = parseFrontmatterString(frontmatter, 'listSummary');
    if (Number.isInteger(sourceNumber)) {
      existingArticleMetadata.set(sourceNumber, { listSummary, metaTitle, metaDescription });
    }
  }
}

await rm(generatedRoot, { recursive: true, force: true });

for (const hub of ARTICLE_HUBS) {
  await mkdir(path.join(generatedRoot, hub.slug), { recursive: true });
}

for (const sourceFile of sourceFiles) {
  const sourceName = path.basename(sourceFile);
  const sourceNumber = Number(sourceName.match(/^(\d+)-/)?.[1]);
  const hub = articleNumberToHub.get(sourceNumber);
  if (!hub) {
    throw new Error(`Article ${sourceNumber} is not assigned to a hub.`);
  }

  const slug = sourceName.replace(/^\d+-/, '').replace(/\.md$/, '');
  const order = hub.sourceNumbers.indexOf(sourceNumber) + 1;
  const raw = await readFile(sourceFile, 'utf8');
  const { frontmatter, body } = stripFrontmatter(raw);
  const title = parseFrontmatterString(frontmatter, 'title') || extractTitle(body, sourceName);
  const sourceMetaTitle = parseFrontmatterString(frontmatter, 'metaTitle');
  const explicitDescription = parseFrontmatterString(frontmatter, 'description');
  const sourceMetaDescription = parseFrontmatterString(frontmatter, 'metaDescription');
  const sourceListSummary = parseFrontmatterString(frontmatter, 'listSummary');
  const existingMetadata = existingArticleMetadata.get(sourceNumber) ?? {};
  const listSummary = sourceListSummary || existingMetadata.listSummary || '';
  const metaTitle = sourceMetaTitle || existingMetadata.metaTitle || '';
  const metaDescription = sourceMetaDescription || existingMetadata.metaDescription || '';
  const withoutTitle = removeFirstH1(body);
  const meta = extractMetaDescription(withoutTitle);
  const description = explicitDescription || meta.description || firstParagraph(meta.body);

  if (!description) {
    throw new Error(`${sourceName} does not contain enough text to derive a description.`);
  }

  const bodyWithoutDuplicateDescription = removeLeadingDuplicateDescription(meta.body, description);
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
    subgroup: findSectionTitle(hub, sourceNumber),
    tags: parseTags(frontmatter),
  })}${bodyWithoutDuplicateDescription.trimStart()}`;

  await writeFile(targetPath, normalized.endsWith('\n') ? normalized : `${normalized}\n`, 'utf8');
}
