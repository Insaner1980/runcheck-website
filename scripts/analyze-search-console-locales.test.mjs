import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { parseCsv, readCsvRecords, runAnalysis } from './analyze-search-console-locales.mjs';

const fixture = 'scripts/fixtures/search-console-locales.synthetic.csv';

test('CSV-jäsennin säilyttää lainatut pilkut ja rivinvaihdot', () => {
  assert.deepEqual(parseCsv('a,b\n"x,y","line 1\nline 2"\n'), [
    ['a', 'b'],
    ['x,y', 'line 1\nline 2'],
  ]);
});

test('GSC-localeanalyysi tuottaa neljä raporttia vain synteettisestä testidatasta', () => {
  const outputDir = mkdtempSync(path.join(tmpdir(), 'runcheck-gsc-'));
  try {
    const analysis = runAnalysis({
      input: fixture,
      outputDir,
      minImpressions: 50,
      maxCtr: 0.02,
      minPosition: 4,
      maxPosition: 30,
      minCountryImpressions: 50,
    });

    assert.equal(analysis.normalizedRows.length, 5);
    assert.ok(analysis.opportunities.length >= 4);
    assert.equal(analysis.cannibalization.length, 1);
    assert.deepEqual(analysis.cannibalization[0].sourceNumbers, '1; 7');
    assert.equal(analysis.countryMismatch.length, 2);
    assert.deepEqual(analysis.unknownUrls, ['https://runcheckapp.com/fi/artikkelit/tuntematon-sivu/']);

    for (const file of [
      'gsc-localization-opportunities.csv',
      'gsc-cannibalization-evidence.csv',
      'gsc-country-mismatch.csv',
      'gsc-localization-summary.md',
    ]) {
      assert.ok(existsSync(path.join(outputDir, file)), `${file} puuttuu.`);
    }

    const summary = readFileSync(path.join(outputDir, 'gsc-localization-summary.md'), 'utf8');
    assert.match(summary, /Mitään sisältömuutosta ei tehdä automaattisesti/);
    assert.match(summary, /Tuntemattomia URL-osoitteita: 1/);
  } finally {
    rmSync(outputDir, { recursive: true, force: true });
  }
});

test('puuttuva pakollinen sarake hylätään', () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'runcheck-gsc-invalid-'));
  const invalid = path.join(directory, 'invalid.synthetic.csv');
  try {
    writeFileSync(invalid, 'page,country,device,clicks,impressions,CTR,average position,start date,end date\n', 'utf8');
    assert.throws(() => readCsvRecords(invalid), /query/);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
