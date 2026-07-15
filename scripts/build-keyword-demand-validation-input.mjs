#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseCsv } from './analyze-search-console-locales.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceFile = path.join(root, 'reports', 'localized-keyword-map-v2.csv');
const defaultOutput = path.join(root, 'reports', 'keyword-demand-validation-input.csv');

const MARKET = Object.freeze({
  'fi-FI': { country: 'Finland', language: 'Finnish' },
  'sv-SE': { country: 'Sweden', language: 'Swedish' },
  'nb-NO': { country: 'Norway', language: 'Norwegian' },
  'da-DK': { country: 'Denmark', language: 'Danish' },
  'de-DE': { country: 'Germany', language: 'German' },
  'fr-FR': { country: 'France', language: 'French' },
  'es-ES': { country: 'Spain', language: 'Spanish' },
});

const csvEscape = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;

const splitTerms = (value) => value
  .split(';')
  .map((term) => term.trim())
  .filter(Boolean);

const uniqueTerms = (...values) => [...new Set(values.flatMap(splitTerms))].join(' | ');

const readRecords = (file) => {
  const [headers, ...rows] = parseCsv(readFileSync(file, 'utf8'));
  return rows
    .filter((row) => row.some((value) => value.trim()))
    .map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])));
};

export function buildKeywordDemandInput(records) {
  return records
    .filter(({ locale }) => MARKET[locale])
    .map((record) => ({
      topic_cluster: record.topic_cluster,
      source_concept: record.source_concept,
      search_intent: record.search_intent,
      locale: record.locale,
      country: MARKET[record.locale].country,
      language: MARKET[record.locale].language,
      current_primary_term: record.current_primary_term,
      recommended_primary_term: record.recommended_primary_term,
      terms_to_compare: uniqueTerms(record.current_primary_term, record.recommended_primary_term),
      terms_to_avoid: record.terms_to_avoid,
      existing_evidence_confidence: record.confidence,
      keyword_planner_status: 'NOT_IMPORTED',
      google_trends_status: 'NOT_COMPARED',
      SERP_intent_status: 'USE_EXISTING_PHASE_2_EVIDENCE',
      decision_rule: 'No title, H1, URL, slug, or body change unless demand, intent, and locale-naturalness agree.',
    }));
}

export function writeKeywordDemandInput(output = defaultOutput) {
  const records = buildKeywordDemandInput(readRecords(sourceFile));
  const headers = Object.keys(records[0]);
  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(output, `${headers.join(',')}\n${records.map((record) => headers.map((header) => csvEscape(record[header])).join(',')).join('\n')}\n`);
  return { output, rows: records.length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const outputIndex = process.argv.indexOf('--output');
  const output = outputIndex >= 0 ? path.resolve(process.argv[outputIndex + 1]) : defaultOutput;
  if (outputIndex >= 0 && !process.argv[outputIndex + 1]) throw new Error('--output requires a file path.');
  const result = writeKeywordDemandInput(output);
  console.log(`Created ${result.rows} keyword-demand validation rows: ${result.output}`);
}
