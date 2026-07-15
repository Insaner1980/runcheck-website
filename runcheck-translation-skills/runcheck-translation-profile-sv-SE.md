---
name: runcheck-translation-profile-sv-SE
version: 1.0.0
locale: sv-SE
language: Swedish for Sweden
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: sv-SE

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `sv-SE`. Translate directly from the validated English source, never from another translated version.

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

Use informal singular `du`. Avoid repeating `du`, `din`, `ditt`, and `dina` in every sentence.

## Sentence style

Prefer clear active verbs and relatively light sentence structure. Split dense English sentences. Avoid bureaucratic nominalizations.

Use `kan`, `ofta`, `vanligtvis`, `beroende på modell`, and `på enheter som stöds`. Avoid repeated `kan komma att`.

## Headings, punctuation, and number formatting

Use Swedish sentence capitalization, decimal commas, spaces before percent signs, and `35 °C`. Use hyphens for ranges.

## Preferred technology terminology

- battery health: `batterihälsa`
- battery capacity: `batterikapacitet`
- design capacity: `ursprunglig kapacitet or designkapacitet`
- charge cycle: `laddningscykel`
- thermal throttling: `termisk strypning or a clear explanation that heat limits performance`
- signal strength: `signalstyrka`
- internal storage: `intern lagring`
- storage health: `lagringens skick`
- software support: `programvarusupport`
- security update: `säkerhetsuppdatering`
- factory reset: `fabriksåterställning`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `bakgrundsprocess`
- diagnostic app: `diagnostikapp`
- health score: `hälsopoäng or skickpoäng, chosen consistently`
- used phone: `begagnad telefon`
- refurbished phone: `rekonditionerad telefon`
- repair shop: `reparationsverkstad`

## Android UI labels

Use verified Swedish labels. Common labels include `Inställningar`, `Batteri`, and `Om telefonen`, but exact paths vary. Do not use Finland-Swedish administrative wording unless the locale is changed to sv-FI.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use Swedish kronor only for separately verified Swedish prices. Never convert USD automatically. Sweden-specific rights, marketplaces, repair prices, and retailers require local verification. Keep EU claims explicitly EU-wide.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `det är viktigt att notera att`
- `i denna artikel kommer vi att`
- `repeated dessutom`
- `utgör`
- `fungerar som`
- `har möjlighet att`
- `användare kan`
- `literal inte bara X utan också Y`
- `excessive detta`

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
