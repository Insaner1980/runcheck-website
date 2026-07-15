---
name: runcheck-translation-profile-it-IT
version: 1.0.0
locale: it-IT
language: Italian for Italy
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: it-IT

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `it-IT`. Translate directly from the validated English source, never from another translated version.

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

Use informal singular `tu`, usually through verb forms instead of repeated explicit pronouns. Do not switch to formal `Lei`.

## Sentence style

Reorder clauses naturally. Prefer direct verbs and avoid phrases such as `effettuare una verifica` when `verificare` is enough.

Use `può`, `spesso`, `in genere`, `a seconda del modello`, and `sui dispositivi supportati`. Do not overuse `potrebbe`.

## Headings, punctuation, and number formatting

Use Italian sentence capitalization, decimal commas, spaces before percent signs, and `35 °C`. Use hyphens for ranges.

## Preferred technology terminology

- battery health: `stato della batteria or salute della batteria, with one primary term chosen consistently`
- battery capacity: `capacità della batteria`
- design capacity: `capacità nominale`
- charge cycle: `ciclo di ricarica`
- thermal throttling: retain `thermal throttling` once when useful, then explain it as performance limitation caused by heat
- signal strength: `potenza del segnale`
- internal storage: `memoria interna`
- storage health: `stato della memoria`
- software support: `supporto software`
- security update: `aggiornamento di sicurezza`
- factory reset: `ripristino dei dati di fabbrica`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `processo in background`
- diagnostic app: `app di diagnostica`
- health score: `punteggio di stato or punteggio di salute, chosen consistently`
- used phone: `smartphone usato`
- refurbished phone: `smartphone ricondizionato`
- repair shop: `centro di riparazione or laboratorio di riparazione`

## Android UI labels

Use verified Italian labels. Common labels include `Impostazioni`, `Batteria`, and `Informazioni sul telefono`, but exact paths vary. Never invent an Italian menu label.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use euros only for verified Italian or clearly euro-area prices. Italy-specific warranties, repair prices, retailers, trade-in programs, and marketplaces require current verification. Keep EU claims explicitly EU-wide.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `è importante notare che`
- `in questo articolo vedremo`
- `repeated inoltre`
- `funge da`
- `rappresenta`
- `ha la possibilità di`
- `gli utenti possono`
- `literal non solo X, ma anche Y`
- `excessive effettuare/eseguire`

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
