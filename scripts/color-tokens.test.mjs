import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const styles = readFileSync('src/styles/global.css', 'utf8');

assert.match(styles, /--color-run-cyan:\s*#29c18f;/, 'Run cyan token should use the calmer green requested for section labels.');
assert.doesNotMatch(styles, /--color-run-cyan:\s*#5de4c7;/, 'Run cyan token should not use the previous neon teal.');
