---
name: runcheck-translation-profile-da-DK
version: 1.0.0
locale: da-DK
language: Danish
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: da-DK

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `da-DK`. Translate directly from the validated English source, never from another translated version.

## Fixed publication voice

- Practical, calm, informed technology writing
- Natural language for a general adult reader
- Direct without sounding abrupt
- Conversational without slang
- No promotional exaggeration
- No invented first-person experiences
- No em dashes
- No emoji
- Preserve the source article's introduction, emphasis, rhythm, FAQ treatment, and conclusion

## Reader address

Use informal singular `du` and contemporary Danish for Denmark.

## Sentence style

Prefer direct active verbs and relatively light sentences. Split long English clause chains. Avoid bureaucratic wording.

Use `kan`, `ofte`, `som regel`, `afhængigt af model`, and `på understøttede enheder`. Avoid repeated `vil kunne`.

## Headings, punctuation, and number formatting

Use Danish sentence capitalization, decimal commas, spaces before percent signs, and `35 °C`. Use hyphens for ranges.

## Preferred technology terminology

- battery health: `batteritilstand`
- battery capacity: `batterikapacitet`
- design capacity: `oprindelig kapacitet or designkapacitet`
- charge cycle: `opladningscyklus`
- thermal throttling: `termisk begrænsning or an explanation that heat lowers performance`
- signal strength: `signalstyrke`
- internal storage: `intern lagerplads`
- storage health: `lagerets tilstand`
- software support: `softwaresupport`
- security update: `sikkerhedsopdatering`
- factory reset: `nulstilling til fabriksindstillinger`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `baggrundsproces`
- diagnostic app: `diagnoseapp`
- health score: `tilstandsscore`
- used phone: `brugt telefon`
- refurbished phone: `istandsat telefon`
- repair shop: `værksted`

## Android UI labels

Use verified Danish labels. Common labels include `Indstillinger`, `Batteri`, and `Om telefonen`. Do not borrow Norwegian or Swedish wording.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use Danish kroner only for separately verified Danish prices. Never convert USD automatically. Danish rights, repair prices, retailers, and marketplaces require current local verification. Keep EU claims explicitly EU-wide.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `det er vigtigt at bemærke, at`
- `i denne artikel vil vi`
- `repeated derudover`
- `fungerer som`
- `udgør`
- `har mulighed for at`
- `brugere kan`
- `literal ikke kun X, men også Y`

## Mandatory validation for every five-article batch

Check all five articles for:

- Exact source parity for numbers, dates, ranges, models, Android versions, settings paths, dialer codes, warnings, conditions, and uncertainty
- Consistent terminology across the batch
- Natural local syntax rather than English word order
- Correct local punctuation, decimal formatting, currency formatting, and spacing
- No accidental use of another regional variety
- No invented Android UI labels
- No silent market localization
- No untranslated English body text except protected names, terms, or verified official UI labels
- No repeated stock introduction, transition, FAQ cadence, or conclusion across all five articles
- Valid UTF-8 Markdown with intact frontmatter, links, tables, code, and filenames

All five articles must pass. One unresolved article means the batch is not ready.
