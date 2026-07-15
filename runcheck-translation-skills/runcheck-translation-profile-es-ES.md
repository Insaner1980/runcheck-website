---
name: runcheck-translation-profile-es-ES
version: 1.0.0
locale: es-ES
language: Spanish for Spain
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: es-ES

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `es-ES`. Translate directly from the validated English source, never from another translated version.

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

Use informal singular `tú`, usually through verb forms rather than repeated explicit pronouns. Use Spain Spanish, not Latin American regional vocabulary.

## Sentence style

Reorder clauses naturally and omit repeated subjects when clear. Prefer direct verbs over phrases with `realizar`, `llevar a cabo`, or `proceder a`.

Use `puede`, `suele`, `a menudo`, `según el modelo`, and `en los dispositivos compatibles`. Do not translate every hedge as `podría`.

## Headings, punctuation, and number formatting

Use Spanish sentence capitalization, opening and closing question marks, decimal commas, spaces before percent signs, and `35 °C`. Use hyphens for ranges.

## Preferred technology terminology

- battery health: `estado de la batería or salud de la batería, with one primary term chosen consistently`
- battery capacity: `capacidad de la batería`
- design capacity: `capacidad nominal`
- charge cycle: `ciclo de carga`
- thermal throttling: `limitación térmica or reduction in performance caused by heat`
- signal strength: `intensidad de la señal`
- internal storage: `almacenamiento interno`
- storage health: `estado del almacenamiento`
- software support: `soporte de software`
- security update: `actualización de seguridad`
- factory reset: `restablecimiento de fábrica`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `proceso en segundo plano`
- diagnostic app: `aplicación de diagnóstico`
- health score: `puntuación de estado or puntuación de salud, chosen consistently`
- used phone: `móvil de segunda mano`
- refurbished phone: `móvil reacondicionado`
- repair shop: `taller de reparación or servicio técnico`

## Android UI labels

Use verified Spain-Spanish labels. Common labels include `Ajustes`, `Batería`, and `Información del teléfono`, but manufacturer wording varies. Do not import Latin American UI terms.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use euros only for verified Spanish or clearly euro-area prices. Spain-specific warranties, rights, repair pricing, retailers, trade-in services, and marketplaces require local verification. Keep EU claims explicitly EU-wide.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `es importante señalar que`
- `en este artículo vamos a`
- `repeated además`
- `sirve como`
- `representa`
- `tiene la capacidad de`
- `los usuarios pueden`
- `literal no solo X, sino también Y`
- `excessive realizar`
- `Latin American celular/computadora`

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
