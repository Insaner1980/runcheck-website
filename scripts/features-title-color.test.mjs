import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync('src/components/Features.astro', 'utf8');
const styles = readFileSync('src/styles/global.css', 'utf8');

assert.match(styles, /--color-run-white:\s*#ffffff;/, 'Run white should remain the centralized white token.');
assert.match(source, /<h3 class="feature-title text-run-white">/, 'Feature titles should use the white text token.');
assert.doesNotMatch(source, /<h3 class=\{`feature-title \$\{feature\.colorClass\}`\}>/, 'Feature titles should not use per-feature accent colors.');
assert.match(source, /<p class=\{`feature-kicker \$\{feature\.colorClass\}`\}>/, 'Feature kickers should keep per-feature accent colors.');
