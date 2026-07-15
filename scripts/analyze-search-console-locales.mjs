#!/usr/bin/env node

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  ARTICLE_LOCALE_CONTRACTS,
  PUBLISHED_ARTICLE_LOCALE_CODES,
} from '../src/data/articleLocaleConfig.mjs';
import { articlePath } from '../src/data/articlePaths.mjs';

const REQUIRED_COLUMNS = Object.freeze([
  'page',
  'query',
  'country',
  'device',
  'clicks',
  'impressions',
  'ctr',
  'average_position',
  'start_date',
  'end_date',
]);

const COLUMN_ALIASES = Object.freeze({
  page: 'page',
  url: 'page',
  query: 'query',
  country: 'country',
  device: 'device',
  clicks: 'clicks',
  impressions: 'impressions',
  ctr: 'ctr',
  clickthroughrate: 'ctr',
  position: 'average_position',
  averageposition: 'average_position',
  startdate: 'start_date',
  enddate: 'end_date',
});

const TARGET_COUNTRIES = Object.freeze({
  fi: new Set(['FI', 'FIN', 'FINLAND']),
  sv: new Set(['SE', 'SWE', 'SWEDEN']),
  nb: new Set(['NO', 'NOR', 'NORWAY']),
  da: new Set(['DK', 'DNK', 'DENMARK']),
  de: new Set(['DE', 'DEU', 'GERMANY']),
  fr: new Set(['FR', 'FRA', 'FRANCE']),
  es: new Set(['ES', 'ESP', 'SPAIN']),
});

const STOPWORDS = new Set([
  'a', 'al', 'and', 'android', 'auf', 'aux', 'avec', 'av', 'de', 'del', 'den', 'der', 'des', 'die', 'du',
  'e', 'el', 'en', 'et', 'for', 'för', 'für', 'i', 'il', 'in', 'ja', 'la', 'le', 'les', 'med', 'och',
  'of', 'og', 'on', 'o', 'or', 'para', 'per', 'por', 'på', 'som', 'sur', 'the', 'til', 'to', 'un',
  'una', 'und', 'y', 'zu',
]);

const OUTPUT_FILES = Object.freeze({
  opportunities: 'gsc-localization-opportunities.csv',
  cannibalization: 'gsc-cannibalization-evidence.csv',
  countryMismatch: 'gsc-country-mismatch.csv',
  summary: 'gsc-localization-summary.md',
});

const headerKey = (value) => value.toLowerCase().replaceAll(/[^a-z0-9]+/g, '');
const hasPendingCsvRow = (field, row) => field.length > 0 || row.length > 0;

export function parseCsv(source) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (quoted) {
      if (character === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === '"') {
      quoted = true;
    } else if (character === ',') {
      row.push(field);
      field = '';
    } else if (character === '\n') {
      row.push(field.replace(/\r$/, ''));
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += character;
    }
  }

  if (quoted) throw new Error('CSV contains an unclosed quoted field.');
  if (hasPendingCsvRow(field, row)) {
    row.push(field.replace(/\r$/, ''));
    rows.push(row);
  }
  if (rows.length === 0) throw new Error('CSV is empty.');

  rows[0][0] = rows[0][0].replace(/^\uFEFF/, '');
  return rows;
}

function mapHeaders(header) {
  const mapped = header.map((value) => COLUMN_ALIASES[headerKey(value)]);
  const missing = REQUIRED_COLUMNS.filter((column) => !mapped.includes(column));
  if (missing.length > 0) throw new Error(`CSV is missing required columns: ${missing.join(', ')}`);
  const duplicates = REQUIRED_COLUMNS.filter((column) => mapped.filter((value) => value === column).length > 1);
  if (duplicates.length > 0) throw new Error(`CSV maps multiple headers to: ${duplicates.join(', ')}`);
  return mapped;
}

const readCsvObjects = (file) => {
  const [header, ...dataRows] = parseCsv(readFileSync(file, 'utf8'));
  return dataRows
    .filter((row) => row.some((value) => value.trim().length > 0))
    .map((row, rowIndex) => {
      if (row.length !== header.length) {
        throw new Error(`CSV row ${rowIndex + 2} has ${row.length} fields; expected ${header.length}.`);
      }
      return Object.fromEntries(header.map((key, index) => [key.trim(), row[index].trim()]));
    });
};

export function readCsvRecords(file) {
  const [header] = parseCsv(readFileSync(file, 'utf8'));
  const mappedHeader = mapHeaders(header);
  return readCsvObjects(file).map((record) => Object.fromEntries(
    header.map((key, index) => [mappedHeader[index], record[key.trim()]]),
  ));
}

const parseMetric = (value, name, rowNumber, { integer = false, percent = false } = {}) => {
  const cleaned = value.replaceAll(/\s/g, '').replace(',', '.');
  const parsed = Number(percent && cleaned.endsWith('%') ? cleaned.slice(0, -1) : cleaned);
  const normalized = percent && cleaned.endsWith('%') ? parsed / 100 : parsed;
  if (!Number.isFinite(normalized) || normalized < 0) throw new Error(`Row ${rowNumber}: invalid ${name}: ${value}`);
  if (integer && !Number.isInteger(normalized)) throw new Error(`Row ${rowNumber}: ${name} must be an integer.`);
  if (percent && normalized > 1) throw new Error(`Row ${rowNumber}: CTR must be a decimal (0-1) or a percent value.`);
  return normalized;
};

const parseDate = (value, name, rowNumber) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
    throw new Error(`Row ${rowNumber}: ${name} must use YYYY-MM-DD.`);
  }
  return value;
};

const normalizeUrl = (value, site) => {
  const url = new URL(value, site);
  url.hash = '';
  url.search = '';
  while (url.pathname.endsWith('/')) url.pathname = url.pathname.slice(0, -1);
  url.pathname = `${url.pathname}/`;
  return url.toString();
};

const frontmatterValue = (source, key) => {
  const value = source.match(new RegExp(`^${key}: (.+)$`, 'm'))?.[1];
  if (value === undefined) return undefined;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

const markdownFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(directory, entry.name);
  if (entry.isDirectory()) return markdownFiles(file);
  return entry.isFile() && entry.name.endsWith('.md') ? [file] : [];
});

export function buildArticleRegistry({ contentRoot = 'src/content/articles', site = 'https://runcheckapp.com' } = {}) {
  const published = new Set(PUBLISHED_ARTICLE_LOCALE_CODES);
  const articles = [];
  for (const file of markdownFiles(contentRoot)) {
    const source = readFileSync(file, 'utf8');
    const locale = frontmatterValue(source, 'locale') ?? 'en';
    if (!published.has(locale)) continue;
    const hub = frontmatterValue(source, 'hub');
    const sourceNumber = frontmatterValue(source, 'sourceNumber');
    const title = frontmatterValue(source, 'title');
    const id = path.basename(file, '.md');
    articles.push({
      file,
      locale,
      regionalProfile: ARTICLE_LOCALE_CONTRACTS[locale].regionalProfile,
      sourceNumber,
      title,
      h1: title,
      url: normalizeUrl(articlePath(hub, id, locale), site),
    });
  }
  return {
    articles,
    byUrl: new Map(articles.map((article) => [article.url, article])),
  };
}

const normalizeText = (value) => value
  .normalize('NFD')
  .replaceAll(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replaceAll(/[^a-z0-9]+/g, ' ')
  .trim();

const coreTokens = (value) => normalizeText(value)
  .split(/\s+/)
  .filter((token) => token.length >= 3 && !STOPWORDS.has(token));

const parseSourceNumberExpression = (value) => {
  const numbers = new Set();
  for (const part of value.split(',').map((item) => item.trim())) {
    const range = part.match(/^(\d+)-(\d+)$/);
    if (range) {
      for (let number = Number(range[1]); number <= Number(range[2]); number += 1) numbers.add(number);
    } else if (/^\d+$/.test(part)) {
      numbers.add(Number(part));
    }
  }
  return numbers;
};

export function loadTermMap(file) {
  const records = readCsvObjects(file);
  const byLocaleAndSource = new Map();
  for (const record of records) {
    const sourceExpression = /Important source IDs:\s*([0-9, -]+)/.exec(record.notes)?.[1] ?? '';
    const sourceNumbers = parseSourceNumberExpression(sourceExpression);
    const terms = [record.recommended_primary_term, ...record.accepted_alternatives.split(';')]
      .map((term) => term.trim())
      .filter(Boolean);
    for (const sourceNumber of sourceNumbers) {
      const key = `${record.locale}:${sourceNumber}`;
      const current = byLocaleAndSource.get(key) ?? [];
      current.push({ topicCluster: record.topic_cluster, terms });
      byLocaleAndSource.set(key, current);
    }
  }
  return byLocaleAndSource;
}

const detectLocaleFromUrl = (url) => Object.values(ARTICLE_LOCALE_CONTRACTS)
  .filter((contract) => contract.productionPublished)
  .find((contract) => new URL(url).pathname.startsWith(contract.root))?.code ?? '';

const findValidatedTerm = (query, termEntries) => {
  const normalizedQuery = normalizeText(query);
  const matches = termEntries.flatMap((entry) => entry.terms)
    .filter((term) => {
      const normalizedTerm = normalizeText(term);
      return normalizedTerm.length > 0 && (normalizedQuery.includes(normalizedTerm) || normalizedTerm.includes(normalizedQuery));
    })
    .sort((left, right) => right.length - left.length);
  return matches[0] ?? '';
};

const csvCell = (value) => {
  const string = String(value ?? '');
  return /[",\r\n]/.test(string) ? `"${string.replaceAll('"', '""')}"` : string;
};

const writeCsv = (file, headers, records) => {
  const lines = [headers.join(','), ...records.map((record) => headers.map((header) => csvCell(record[header])).join(','))];
  writeFileSync(file, `\uFEFF${lines.join('\n')}\n`, 'utf8');
};

const groupBy = (records, keyFor) => {
  const groups = new Map();
  for (const record of records) {
    const key = keyFor(record);
    const group = groups.get(key) ?? [];
    group.push(record);
    groups.set(key, group);
  }
  return groups;
};

export function analyzeRecords(records, {
  site,
  articleRegistry,
  termMap,
  minImpressions,
  maxCtr,
  minPosition,
  maxPosition,
  minCountryImpressions,
}) {
  const normalizedRows = records.map((record, index) => {
    const rowNumber = index + 2;
    const page = normalizeUrl(record.page, site);
    const article = articleRegistry.byUrl.get(page);
    const locale = article?.locale ?? detectLocaleFromUrl(page);
    const clicks = parseMetric(record.clicks, 'clicks', rowNumber, { integer: true });
    const impressions = parseMetric(record.impressions, 'impressions', rowNumber, { integer: true });
    const ctr = parseMetric(record.ctr, 'CTR', rowNumber, { percent: true });
    const averagePosition = parseMetric(record.average_position, 'average position', rowNumber);
    const titleTokens = new Set(coreTokens(article?.title ?? ''));
    const queryTokens = coreTokens(record.query);
    const sharedCoreTerms = queryTokens.filter((token) => titleTokens.has(token));
    const termEntries = article ? termMap.get(`${article.regionalProfile}:${article.sourceNumber}`) ?? [] : [];
    const validatedTerm = findValidatedTerm(record.query, termEntries);
    const queryInTitle = article ? normalizeText(article.title).includes(normalizeText(record.query)) : false;
    const validatedTermInTitle = validatedTerm ? normalizeText(article.title).includes(normalizeText(validatedTerm)) : false;
    const highImpressionsLowCtr = impressions >= minImpressions && ctr <= maxCtr;
    const positionOpportunity = averagePosition >= minPosition && averagePosition <= maxPosition;
    const termGap = Boolean(article && !queryInTitle && sharedCoreTerms.length === 0 && validatedTerm && !validatedTermInTitle);

    return {
      ...record,
      page,
      locale,
      article,
      clicks,
      impressions,
      ctr,
      averagePosition,
      startDate: parseDate(record.start_date, 'start date', rowNumber),
      endDate: parseDate(record.end_date, 'end date', rowNumber),
      queryInTitle,
      sharedCoreTerms,
      validatedTerm,
      validatedTermInTitle,
      highImpressionsLowCtr,
      positionOpportunity,
      termGap,
    };
  });

  const opportunities = normalizedRows
    .filter((row) => row.highImpressionsLowCtr || row.positionOpportunity || row.termGap)
    .map((row) => ({
      page: row.page,
      sourceNumber: row.article?.sourceNumber ?? '',
      locale: row.locale,
      query: row.query,
      country: row.country,
      device: row.device,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      average_position: row.averagePosition,
      start_date: row.startDate,
      end_date: row.endDate,
      high_impressions_low_ctr: row.highImpressionsLowCtr,
      position_range_candidate: row.positionOpportunity,
      query_exactly_in_title_h1: row.queryInTitle,
      shared_query_title_core_terms: row.sharedCoreTerms.join('; '),
      matched_validated_term: row.validatedTerm,
      validated_term_in_title_h1: row.validatedTermInTitle,
      validated_term_gap: row.termGap,
      evidence_level: row.article ? 'IMPORTED_GSC_ROW' : 'UNKNOWN_URL',
      recommended_action: row.article
        ? 'Review the imported query with the page intent; do not change content automatically.'
        : 'Map or exclude the unknown URL before drawing a content conclusion.',
    }));

  const cannibalization = [...groupBy(
    normalizedRows.filter((row) => row.article && row.locale && row.query),
    (row) => `${row.locale}\u0000${normalizeText(row.query)}`,
  ).values()]
    .filter((group) => new Set(group.map((row) => row.page)).size > 1)
    .map((group) => ({
      locale: group[0].locale,
      query: group[0].query,
      urls: [...new Set(group.map((row) => row.page))].join('; '),
      sourceNumbers: [...new Set(group.map((row) => row.article.sourceNumber))].sort((a, b) => a - b).join('; '),
      clicks: group.reduce((sum, row) => sum + row.clicks, 0),
      impressions: group.reduce((sum, row) => sum + row.impressions, 0),
      countries: [...new Set(group.map((row) => row.country))].join('; '),
      devices: [...new Set(group.map((row) => row.device))].join('; '),
      start_date: group.map((row) => row.startDate).sort()[0],
      end_date: group.map((row) => row.endDate).sort().at(-1),
      evidence: 'The same normalized query appears for multiple URLs in the same locale in the imported rows.',
      recommended_action: 'Inspect page × query history and intent before changing, merging, redirecting, or canonicalizing pages.',
    }));

  const countryMismatch = normalizedRows
    .filter((row) => {
      const expected = TARGET_COUNTRIES[row.locale];
      return expected && row.impressions >= minCountryImpressions && !expected.has(row.country.trim().toUpperCase());
    })
    .map((row) => ({
      page: row.page,
      sourceNumber: row.article?.sourceNumber ?? '',
      locale: row.locale,
      expected_country: [...TARGET_COUNTRIES[row.locale]].join('; '),
      observed_country: row.country,
      query: row.query,
      device: row.device,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      average_position: row.averagePosition,
      start_date: row.startDate,
      end_date: row.endDate,
      evidence: row.article ? 'Imported GSC row mapped to a published localized article.' : 'Locale path detected, but URL is not mapped to a current article.',
    }));

  return {
    normalizedRows,
    opportunities,
    cannibalization,
    countryMismatch,
    unknownUrls: [...new Set(normalizedRows.filter((row) => !row.article).map((row) => row.page))],
  };
}

const writeSummary = (file, analysis, config) => {
  const dates = analysis.normalizedRows.flatMap((row) => [row.startDate, row.endDate]).sort();
  const localeCounts = [...groupBy(analysis.normalizedRows, (row) => row.locale || 'unknown').entries()]
    .map(([locale, rows]) => `| ${locale} | ${rows.length} |`)
    .join('\n');
  const unknownList = analysis.unknownUrls.length > 0
    ? analysis.unknownUrls.map((url) => `- ${url}`).join('\n')
    : '- Ei tuntemattomia URL-osoitteita.';
  const markdown = `# Search Console -lokalisointianalyysi

Tämä raportti perustuu tuotuun Search Console -CSV-aineistoon. Skripti ei muuta artikkeleita, URL-osoitteita, canonicaleja, hreflang-linkkejä tai redirectejä.

## Aineisto ja asetukset

- Rivejä: ${analysis.normalizedRows.length}
- Ajanjakso aineistossa: ${dates[0] ?? 'ei rivejä'} - ${dates.at(-1) ?? 'ei rivejä'}
- Vähimmäisnäyttökerrat CTR-signaalille: ${config.minImpressions}
- CTR-enimmäisraja: ${config.maxCtr}
- Sijoitusväli: ${config.minPosition}-${config.maxPosition}
- Vähimmäisnäyttökerrat maaristiriidalle: ${config.minCountryImpressions}

| Locale | CSV-rivejä |
|---|---:|
${localeCounts}

## Tulokset

- Lokalisointimahdollisuusrivejä: ${analysis.opportunities.length}
- Saman localen query × usea URL -ryhmiä: ${analysis.cannibalization.length}
- Kohdemarkkinan ulkopuolisten maiden rivejä asetetulla rajalla: ${analysis.countryMismatch.length}
- Tuntemattomia URL-osoitteita: ${analysis.unknownUrls.length}

## Tuntemattomat URL-osoitteet

${unknownList}

## Tulkintarajat

- Search Console voi jättää anonymisoituja kyselyitä pois ja käyttöliittymävienti voi olla rivimäärältään rajattu.
- Sama kysely usealla URL:lla on näyttöä päällekkäisyydestä, ei yksin todiste haitallisesta kannibalisaatiosta.
- Kohdemarkkinan ulkopuolinen näyttökerta ei yksin osoita väärää locale-kohdistusta.
- CTR:ää pitää arvioida sijoituksen, laitteen, maan, hakuintentin ja riittävän ajanjakson kanssa.
- Termivertailu on normalisoitu heuristiikka. Se ei korvaa natiivin toimittajan tarkistusta eikä oikeuta automaattiseen exact-match-muutokseen.
- Mitään sisältömuutosta ei tehdä automaattisesti.

## Tuotetut tiedostot

- \`reports/${OUTPUT_FILES.opportunities}\`
- \`reports/${OUTPUT_FILES.cannibalization}\`
- \`reports/${OUTPUT_FILES.countryMismatch}\`
- \`reports/${OUTPUT_FILES.summary}\`
`;
  writeFileSync(file, markdown, 'utf8');
};

export function runAnalysis({
  input,
  outputDir = 'reports',
  termMapFile = 'reports/localized-keyword-map-v2.csv',
  contentRoot = 'src/content/articles',
  site = 'https://runcheckapp.com',
  minImpressions,
  maxCtr,
  minPosition,
  maxPosition,
  minCountryImpressions,
}) {
  const thresholds = { minImpressions, maxCtr, minPosition, maxPosition, minCountryImpressions };
  for (const [name, value] of Object.entries(thresholds)) {
    if (!Number.isFinite(value) || value < 0) throw new Error(`${name} must be a non-negative number.`);
  }
  if (minPosition > maxPosition) throw new Error('minPosition must not exceed maxPosition.');

  const records = readCsvRecords(input);
  const articleRegistry = buildArticleRegistry({ contentRoot, site });
  const termMap = loadTermMap(termMapFile);
  const analysis = analyzeRecords(records, { site, articleRegistry, termMap, ...thresholds });
  mkdirSync(outputDir, { recursive: true });

  writeCsv(path.join(outputDir, OUTPUT_FILES.opportunities), [
    'page', 'sourceNumber', 'locale', 'query', 'country', 'device', 'clicks', 'impressions', 'ctr',
    'average_position', 'start_date', 'end_date', 'high_impressions_low_ctr', 'position_range_candidate',
    'query_exactly_in_title_h1', 'shared_query_title_core_terms', 'matched_validated_term',
    'validated_term_in_title_h1', 'validated_term_gap', 'evidence_level', 'recommended_action',
  ], analysis.opportunities);
  writeCsv(path.join(outputDir, OUTPUT_FILES.cannibalization), [
    'locale', 'query', 'urls', 'sourceNumbers', 'clicks', 'impressions', 'countries', 'devices',
    'start_date', 'end_date', 'evidence', 'recommended_action',
  ], analysis.cannibalization);
  writeCsv(path.join(outputDir, OUTPUT_FILES.countryMismatch), [
    'page', 'sourceNumber', 'locale', 'expected_country', 'observed_country', 'query', 'device',
    'clicks', 'impressions', 'ctr', 'average_position', 'start_date', 'end_date', 'evidence',
  ], analysis.countryMismatch);
  writeSummary(path.join(outputDir, OUTPUT_FILES.summary), analysis, thresholds);
  return analysis;
}

const parseArgs = (args) => {
  const parsed = {};
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (!argument.startsWith('--')) throw new Error(`Unexpected argument: ${argument}`);
    const [rawName, inlineValue] = argument.slice(2).split('=', 2);
    const value = inlineValue ?? args[index + 1];
    if (inlineValue === undefined) index += 1;
    if (!value || value.startsWith('--')) throw new Error(`Missing value for --${rawName}`);
    parsed[rawName] = value;
  }
  return parsed;
};

const numberArg = (args, name) => {
  const value = Number(args[name]);
  if (!Number.isFinite(value)) throw new Error(`--${name} is required and must be numeric.`);
  return value;
};

const isCli = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (!args.input) throw new Error('--input is required.');
    const analysis = runAnalysis({
      input: args.input,
      outputDir: args['output-dir'] ?? 'reports',
      termMapFile: args['term-map'] ?? 'reports/localized-keyword-map-v2.csv',
      contentRoot: args['content-root'] ?? 'src/content/articles',
      site: args.site ?? 'https://runcheckapp.com',
      minImpressions: numberArg(args, 'min-impressions'),
      maxCtr: numberArg(args, 'max-ctr'),
      minPosition: numberArg(args, 'min-position'),
      maxPosition: numberArg(args, 'max-position'),
      minCountryImpressions: numberArg(args, 'min-country-impressions'),
    });
    console.log(JSON.stringify({
      rows: analysis.normalizedRows.length,
      opportunities: analysis.opportunities.length,
      cannibalizationGroups: analysis.cannibalization.length,
      countryMismatchRows: analysis.countryMismatch.length,
      unknownUrls: analysis.unknownUrls.length,
    }, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
