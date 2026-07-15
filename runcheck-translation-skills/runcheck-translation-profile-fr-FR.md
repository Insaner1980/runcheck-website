---
name: runcheck-translation-profile-fr-FR
version: 1.0.0
locale: fr-FR
language: French for France
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: fr-FR

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `fr-FR`. Translate directly from the validated English source, never from another translated version.

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

Use `vous` consistently as the standard general-reader address. Do not alternate casually between `vous`, `on`, and impersonal passive constructions.

## Sentence style

Restructure English syntax freely. Prefer active verbs, avoid heavy nominalizations, and avoid repeated `permettre de`.

Use `peut`, `souvent`, `en général`, `selon le modèle`, and `sur les appareils compatibles`. Avoid repeated `il est possible que`.

## Headings, punctuation, and number formatting

Use French sentence capitalization, French spacing before double punctuation when supported, decimal commas, spaces before percent signs, and `35 °C`. Use hyphens for ranges.

## Preferred technology terminology

- battery health: `état de la batterie or santé de la batterie, with one primary term chosen consistently`
- battery capacity: `capacité de la batterie`
- design capacity: `capacité nominale`
- charge cycle: `cycle de charge`
- thermal throttling: `bridage thermique`
- signal strength: `puissance du signal`
- internal storage: `stockage interne`
- storage health: `état du stockage`
- software support: `suivi logiciel`
- security update: `mise à jour de sécurité`
- factory reset: `réinitialisation d'usine or rétablissement de la configuration d'usine`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `processus en arrière-plan`
- diagnostic app: `application de diagnostic`
- health score: `score d'état or score de santé, chosen consistently`
- used phone: `smartphone d'occasion`
- refurbished phone: `smartphone reconditionné`
- repair shop: `atelier de réparation or réparateur`

## Android UI labels

Use verified French labels. Common labels include `Paramètres`, `Batterie`, and `À propos du téléphone`, but exact paths vary. Never invent a localized Battery Health label.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use euros only for verified French or clearly euro-area prices. France-specific legal guarantees, repairability information, repair services, retailers, and marketplaces require current verification. Keep EU claims explicitly EU-wide.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `il est important de noter que`
- `dans cet article, nous allons`
- `repeated de plus/en outre`
- `sert de`
- `constitue`
- `permet de in every paragraph`
- `les utilisateurs peuvent`
- `literal ce n'est pas seulement X, c'est aussi Y`

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
