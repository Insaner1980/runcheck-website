import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('footer layout', () => {
  const footer = readFileSync('src/components/Footer.astro', 'utf8');

  assert.match(footer, /class="footer-copyright md:justify-self-end">&copy; \{year\} runcheck<\/p>/, 'Footer should render the copyright in its dedicated layout slot.');
  assert.match(footer, /<Image src=\{logo\}/, 'Footer should use the shared image asset for the brand mark.');
  assert.match(footer, /href=\{copy\.root\}>\{copy\.nav\[1\]\}<\/a>/, 'Footer should use the locale contract for the article link.');
  assert.match(footer, /href="mailto:contact@finnvek\.com">\{copy\.nav\[2\]\}<\/a>/, 'Footer should expose the localized contact link.');
  assert.match(footer, /flex-col items-center gap-4 sm:flex-row sm:gap-9/, 'Footer links should stack on mobile and sit inline on desktop.');
});
