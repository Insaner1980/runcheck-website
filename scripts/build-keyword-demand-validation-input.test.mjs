import assert from 'node:assert/strict';
import test from 'node:test';

import { buildKeywordDemandInput } from './build-keyword-demand-validation-input.mjs';

test('builds a published-market keyword demand row and excludes preview Italy', () => {
  const records = buildKeywordDemandInput([
    {
      topic_cluster: 'Akun kunto',
      source_concept: 'battery health',
      search_intent: 'Informational',
      locale: 'fi-FI',
      current_primary_term: 'akun kunto',
      recommended_primary_term: 'akun kunto',
      terms_to_avoid: 'akun terveys',
      confidence: 'HIGH',
    },
    {
      topic_cluster: 'Akun kunto',
      source_concept: 'battery health',
      search_intent: 'Informational',
      locale: 'it-IT',
      current_primary_term: 'stato della batteria',
      recommended_primary_term: 'stato della batteria',
      terms_to_avoid: 'N/A',
      confidence: 'MEDIUM',
    },
  ]);

  assert.equal(records.length, 1);
  assert.equal(records[0].country, 'Finland');
  assert.equal(records[0].language, 'Finnish');
  assert.equal(records[0].terms_to_compare, 'akun kunto');
  assert.equal(records[0].keyword_planner_status, 'NOT_IMPORTED');
});
