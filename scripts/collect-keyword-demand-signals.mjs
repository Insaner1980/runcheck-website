#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseCsv } from './analyze-search-console-locales.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const defaultInput = path.join(root, 'reports', 'keyword-demand-validation-input.csv');
const defaultOutput = path.join(root, 'reports', 'keyword-demand-autocomplete-signals.csv');

const LOCALE_QUERY_CONTEXT = Object.freeze({
  'fi-FI': { hl: 'fi', gl: 'FI' },
  'sv-SE': { hl: 'sv', gl: 'SE' },
  'nb-NO': { hl: 'no', gl: 'NO' },
  'da-DK': { hl: 'da', gl: 'DK' },
  'de-DE': { hl: 'de', gl: 'DE' },
  'fr-FR': { hl: 'fr', gl: 'FR' },
  'es-ES': { hl: 'es', gl: 'ES' },
});

const csvEscape = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;

const readRecords = (file) => {
  const [headers, ...rows] = parseCsv(readFileSync(file, 'utf8'));
  return rows
    .filter((row) => row.some((value) => value.trim()))
    .map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])));
};

const expandTerms = (record) => [...new Set(record.terms_to_compare.split(' | ').map((term) => term.trim()).filter(Boolean))]
  .map((term) => ({
    ...record,
    term,
    term_role: term === record.current_primary_term && term === record.recommended_primary_term
      ? 'CURRENT_AND_RECOMMENDED'
      : term === record.current_primary_term
        ? 'CURRENT'
        : term === record.recommended_primary_term
          ? 'RECOMMENDED'
          : 'CONCEPT_COMPONENT',
  }));

const autocompleteUrl = (term, locale) => {
  const context = LOCALE_QUERY_CONTEXT[locale];
  if (!context) throw new Error(`Unsupported locale: ${locale}`);
  const query = new URLSearchParams({ client: 'firefox', ...context, q: term });
  return `https://suggestqueries.google.com/complete/search?${query}`;
};

export async function collectAutocompleteSignals(records, { fetchImpl = fetch } = {}) {
  const expanded = records.flatMap(expandTerms);
  const results = new Array(expanded.length);
  const workers = Array.from({ length: Math.min(4, expanded.length) }, async (_, workerIndex) => {
    for (let index = workerIndex; index < expanded.length; index += 4) {
      const record = expanded[index];
    try {
      const response = await fetchImpl(autocompleteUrl(record.term, record.locale));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const suggestions = Array.isArray(payload[1]) ? payload[1].filter((value) => typeof value === 'string') : [];
      results[index] = {
        topic_cluster: record.topic_cluster,
        locale: record.locale,
        country: record.country,
        term: record.term,
        term_role: record.term_role,
        autocomplete_status: 'OK',
        suggestion_count: suggestions.length,
        exact_term_suggested: suggestions.some((value) => value.toLocaleLowerCase() === record.term.toLocaleLowerCase()) ? 'YES' : 'NO',
        suggestions: suggestions.join(' | '),
        interpretation: 'Support signal only; not search volume, ranking, CTR, or proof that a term should replace another term.',
      };
    } catch (error) {
      results[index] = {
        topic_cluster: record.topic_cluster,
        locale: record.locale,
        country: record.country,
        term: record.term,
        term_role: record.term_role,
        autocomplete_status: 'UNAVAILABLE',
        suggestion_count: '',
        exact_term_suggested: '',
        suggestions: '',
        interpretation: `No inference. ${error.message}`,
      };
    }
    }
  });
  await Promise.all(workers);
  return results;
}

export async function writeAutocompleteSignals(input = defaultInput, output = defaultOutput) {
  const records = await collectAutocompleteSignals(readRecords(input));
  const headers = Object.keys(records[0]);
  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(output, `${headers.join(',')}\n${records.map((record) => headers.map((header) => csvEscape(record[header])).join(',')).join('\n')}\n`);
  return { output, rows: records.length, unavailable: records.filter(({ autocomplete_status: status }) => status !== 'OK').length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const inputIndex = process.argv.indexOf('--input');
  const outputIndex = process.argv.indexOf('--output');
  const input = inputIndex >= 0 ? path.resolve(process.argv[inputIndex + 1]) : defaultInput;
  const output = outputIndex >= 0 ? path.resolve(process.argv[outputIndex + 1]) : defaultOutput;
  if ((inputIndex >= 0 && !process.argv[inputIndex + 1]) || (outputIndex >= 0 && !process.argv[outputIndex + 1])) {
    throw new Error('--input and --output require file paths.');
  }
  const result = await writeAutocompleteSignals(input, output);
  console.log(`Created ${result.rows} autocomplete evidence rows (${result.unavailable} unavailable): ${result.output}`);
}
