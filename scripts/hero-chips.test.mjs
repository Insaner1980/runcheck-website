import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('hero content', () => {
  const hero = readFileSync('src/components/Hero.astro', 'utf8');
  const styles = readFileSync('src/styles/global.css', 'utf8');

  assert.match(hero, /Your phone's/, 'Hero should retain the primary product headline.');
  assert.match(hero, /Battery draining faster, running warm, or getting slower every month\?/, 'Hero should summarize the current diagnostic symptoms.');
  assert.match(hero, /Coming fall 2026/, 'Hero should show the current release window.');
  assert.match(hero, /runcheck-phone-condition-hero\.webp/, 'Hero should render the current phone preview.');
  assert.doesNotMatch(hero, /hero-focus-chip|hero-focus-line/, 'Hero should not restore the removed focus-chip treatment.');
  assert.match(styles, /\.hero-copyline\s*\{/, 'Hero supporting copy should use its centralized global style.');
  assert.doesNotMatch(styles, /\.hero-focus-chip|\.hero-focus-line/, 'Removed focus-chip styles should stay deleted.');
});
