---
name: runcheck-translation-profile-nb-NO
version: 1.0.0
locale: nb-NO
language: Norwegian Bokmål
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: nb-NO

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `nb-NO`. Translate directly from the validated English source, never from another translated version.

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

Use informal singular `du`. Use contemporary Bokmål, not Nynorsk and not Danish forms.

## Sentence style

Prefer clear active verbs and short to medium sentences. Split clause-heavy English sentences. Avoid administrative wording.

Use `kan`, `ofte`, `vanligvis`, `avhengig av modell`, and `på enheter som støtter det`. Avoid repeated `vil kunne`.

## Headings, punctuation, and number formatting

Use Norwegian sentence capitalization, decimal commas, spaces before percent signs, and `35 °C`. Use hyphens for ranges.

## Preferred technology terminology

- battery health: `batterihelse`
- battery capacity: `batterikapasitet`
- design capacity: `opprinnelig kapasitet or designkapasitet`
- charge cycle: `ladesyklus`
- thermal throttling: `termisk struping or an explanation that heat limits performance`
- signal strength: `signalstyrke`
- internal storage: `intern lagring`
- storage health: `lagringens tilstand`
- software support: `programvarestøtte`
- security update: `sikkerhetsoppdatering`
- factory reset: `tilbakestilling til fabrikkinnstillinger`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `bakgrunnsprosess`
- diagnostic app: `diagnoseapp`
- health score: `helsescore or tilstandsscore, chosen consistently`
- used phone: `brukt telefon`
- refurbished phone: `renovert or refurbished phone, chosen according to context`
- repair shop: `verksted`

## Android UI labels

Use verified Norwegian labels. Common labels include `Innstillinger`, `Batteri`, and `Om telefonen`. Do not borrow Danish or Swedish UI terms.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use Norwegian kroner only for verified local prices. Norway is not an EU member, so do not state that EU directives automatically apply without checking EEA incorporation and Norwegian implementation. Local consumer rules and services require verification.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `det er viktig å merke seg at`
- `i denne artikkelen skal vi`
- `repeated i tillegg`
- `fungerer som`
- `utgjør`
- `har muligheten til å`
- `brukere kan`
- `literal ikke bare X, men også Y`
- `Danish spellings`

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
