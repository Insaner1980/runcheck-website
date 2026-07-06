import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync('src/components/FAQ.astro', 'utf8');
const styles = readFileSync('src/styles/global.css', 'utf8');

const expectedQuestions = [
  'What does runcheck actually check?',
  'What is the Health Score based on?',
  'How are the insights different from simple charts?',
  'Are speed tests automatic?',
  'Does runcheck run in the background?',
  'Why does runcheck ask for permissions?',
  'Does runcheck send my diagnostic data somewhere?',
  'What do I get with Pro?',
  'Is Pro a subscription?',
  'What phones and languages does runcheck support?',
];

for (const question of expectedQuestions) {
  assert.match(source, new RegExp(question.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Missing FAQ question: ${question}`);
}

const questions = [...source.matchAll(/question:\s*'/g)];
const answers = [...source.matchAll(/answer:\s*'/g)];

assert.equal(questions.length, 10, 'FAQ should define exactly 10 questions.');
assert.equal(answers.length, 10, 'FAQ should define exactly 10 answers.');
assert.doesNotMatch(source, /PlaceholderSection/, 'FAQ should render real content instead of PlaceholderSection.');
assert.match(source, /const faqGroups = \[/, 'FAQ content should live in one grouped source-of-truth array.');
assert.match(source, /Clear answers before you trust a diagnostic app/, 'FAQ heading should stay unchanged.');
assert.match(source, /Built for everyday phone owners, with enough technical detail to explain what runcheck measures, when it runs, what Pro unlocks, and where the privacy boundaries are\./, 'FAQ intro copy should stay unchanged.');
assert.match(source, /class="faq-panel"/, 'FAQ should use the lighter split layout inspired by the reference.');
assert.match(source, /class="faq-topics"/, 'FAQ should show a lightweight topic rail.');
assert.match(source, /class="faq-group-title"/, 'FAQ groups should use plain text group headings.');
assert.match(source, /<details class="faq-item" name="runcheck-faq"/, 'FAQ should use native grouped details disclosures.');
assert.match(source, /<summary>/, 'Each FAQ row should provide a native summary label.');
assert.match(source, /open=\{groupIndex === 0 && itemIndex === 0\}/, 'The first FAQ item should start open to show the interaction and content style.');
assert.doesNotMatch(source, /faq-index/, 'FAQ rows should not show numeric badges in the lighter reference style.');

const requiredProductFacts = [
  'battery',
  'network',
  'thermal',
  'storage',
  'M-Lab NDT7',
  'Insights Engine',
  'WorkManager',
  '7-day trial',
  'one-time purchase',
  'no subscriptions',
  'Glance widgets',
  'Google Play Billing',
  'English-only',
  'Android',
];

for (const fact of requiredProductFacts) {
  assert.match(source, new RegExp(fact.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'), `Missing PROJECT-backed FAQ fact: ${fact}`);
}

assert.match(styles, /\.faq-section\b/, 'FAQ section styles should live in global CSS.');
assert.match(styles, /--run-faq-divider:/, 'FAQ dividers should use a centralized token.');
assert.match(styles, /\.faq-panel\s*\{[^}]*display:\s*grid/s, 'FAQ should use a grid split layout.');
assert.match(styles, /\.faq-topics\b/, 'FAQ topic rail styles should exist.');
assert.match(styles, /\.faq-group-title\b/, 'FAQ group heading styles should exist.');
assert.match(styles, /\.faq-list\s*\{[^}]*border-top:\s*1px solid var\(--run-faq-divider\)/s, 'FAQ list should be separated by thin dividers.');
assert.match(styles, /\.faq-item\[open\]\s+\.faq-answer/s, 'Open FAQ answers should have a targeted reveal treatment.');
assert.match(styles, /@keyframes faq-answer-reveal/, 'FAQ should include a subtle answer reveal animation.');
assert.match(styles, /@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*faq-answer-reveal/s, 'FAQ animation should respect reduced motion.');
assert.doesNotMatch(styles, /faq-card/, 'FAQ should avoid card-heavy naming and structure.');
assert.doesNotMatch(styles, /--run-faq-row-bg|--run-faq-scan-fill|faq-index|box-shadow:\s*inset 0 1px 0/, 'FAQ should remove the heavier card/scan styling.');
