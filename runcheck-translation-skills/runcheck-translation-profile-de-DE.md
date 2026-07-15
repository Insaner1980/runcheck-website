---
name: runcheck-translation-profile-de-DE
version: 1.0.0
locale: de-DE
language: German for Germany
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: de-DE

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `de-DE`. Translate directly from the validated English source, never from another translated version.

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

Use informal singular `du`. Apply normal German capitalization, including noun capitalization. Do not switch to formal `Sie`.

## Sentence style

Use clear main clauses and controlled subordinate clauses. Avoid noun-heavy bureaucratic constructions and unreadable invented compounds.

Use `kann`, `häufig`, `in der Regel`, `je nach Modell`, and `auf unterstützten Geräten`. Do not translate every hedge as `möglicherweise`.

## Headings, punctuation, and number formatting

Use German sentence-style headings with normal noun capitalization, decimal commas, spaces before percent signs, and `35 °C`. Use hyphens for ranges.

## Preferred technology terminology

- battery health: `Akkuzustand`
- battery capacity: `Akkukapazität`
- design capacity: `Nennkapazität`
- charge cycle: `Ladezyklus`
- thermal throttling: `thermische Drosselung`
- signal strength: `Signalstärke`
- internal storage: `interner Speicher`
- storage health: `Speicherzustand`
- software support: `Software-Support or Softwareunterstützung, chosen consistently`
- security update: `Sicherheitsupdate`
- factory reset: `Zurücksetzen auf Werkseinstellungen`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `Hintergrundprozess`
- diagnostic app: `Diagnose-App`
- health score: `Zustandswert or Gesundheitswert, chosen consistently`
- used phone: `gebrauchtes Smartphone`
- refurbished phone: `generalüberholtes Smartphone`
- repair shop: `Reparaturwerkstatt`

## Android UI labels

Use verified German labels. Common concepts include `Einstellungen`, `Akku`, and manufacturer-specific variants of `Über das Telefon`. Never invent a universal German label for Battery Health.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use euros only for verified German or clearly euro-area prices. Never convert USD automatically. Germany-specific rights, repair programs, retailers, services, and resale platforms require local verification. Keep EU claims explicitly EU-wide.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `es ist wichtig zu beachten, dass`
- `in diesem Artikel werden wir`
- `repeated darüber hinaus`
- `dient als`
- `stellt dar`
- `verfügt über die Möglichkeit`
- `Nutzer können`
- `literal nicht nur X, sondern auch Y`
- `excessive passive voice`

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
