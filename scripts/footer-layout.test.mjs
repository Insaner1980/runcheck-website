import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const footer = readFileSync('src/components/Footer.astro', 'utf8');

assert.match(footer, /<p>&copy; \{year\} runcheck<\/p>/, 'Footer should render the copyright as the only runcheck text.');
assert.doesNotMatch(footer, /<p class="font-semibold text-run-text">runcheck<\/p>/, 'Footer should not render a duplicate runcheck brand label.');
assert.doesNotMatch(footer, /href="\/">\s*Home\s*<\/a>/, 'Footer should not include the Home link.');
assert.match(footer, /href="\/articles\/">Articles<\/a>/, 'Footer should keep the Articles link.');
assert.match(
  footer,
  /href="mailto:contact@finnvek\.com">contact@finnvek\.com<\/a>/,
  'Footer should expose the Finnvek contact email as a mailto link.',
);
assert.match(
  footer,
  /flex-col gap-3 sm:flex-row sm:items-center sm:gap-5/,
  'Footer links should stack on mobile and sit inline on desktop.',
);
