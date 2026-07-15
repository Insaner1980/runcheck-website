import assert from 'node:assert/strict';
import test from 'node:test';

import { collectAutocompleteSignals } from './collect-keyword-demand-signals.mjs';

test('records autocomplete suggestions without treating them as demand metrics', async () => {
  const signals = await collectAutocompleteSignals([
    {
      topic_cluster: 'Puhelin ei lataudu',
      locale: 'fi-FI',
      country: 'Finland',
      current_primary_term: 'puhelin ei lataudu',
      recommended_primary_term: 'puhelin ei lataudu',
      terms_to_compare: 'puhelin ei lataudu',
    },
  ], {
    fetchImpl: async () => new Response(JSON.stringify([
      'puhelin ei lataudu',
      ['puhelin ei lataudu', 'puhelin ei lataudu täyteen'],
    ]), { status: 200 }),
  });

  assert.equal(signals.length, 1);
  assert.equal(signals[0].autocomplete_status, 'OK');
  assert.equal(signals[0].exact_term_suggested, 'YES');
  assert.match(signals[0].interpretation, /not search volume/);
});

test('returns an unavailable evidence row instead of inferring from a failed request', async () => {
  const signals = await collectAutocompleteSignals([
    {
      topic_cluster: 'Akun kunto',
      locale: 'fi-FI',
      country: 'Finland',
      current_primary_term: 'akun kunto',
      recommended_primary_term: 'akun kunto',
      terms_to_compare: 'akun kunto',
    },
  ], {
    fetchImpl: async () => new Response('', { status: 429 }),
  });

  assert.equal(signals[0].autocomplete_status, 'UNAVAILABLE');
  assert.match(signals[0].interpretation, /No inference/);
});
