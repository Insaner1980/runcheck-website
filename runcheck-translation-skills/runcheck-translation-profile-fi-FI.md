---
name: runcheck-translation-profile-fi-FI
version: 1.0.0
locale: fi-FI
language: Finnish
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: fi-FI

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `fi-FI`. Translate directly from the validated English source, never from another translated version.

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

Use natural informal singular address. Usually express it through verb forms instead of repeating `sinä` and `sinun`.

## Sentence style

Prefer direct verbs and concrete Finnish. Avoid heavy passive constructions and English word order. Split long clause chains. Combine short English fragments when literal fragments sound unnatural.

Use natural qualifiers such as `voi`, `saattaa`, `usein`, `yleensä`, `mallista riippuen`, and `tuetuissa laitteissa`. Do not translate every hedge with the same word.

## Headings, punctuation, and number formatting

Use Finnish sentence capitalization, decimal commas, spaces before percent signs, and forms such as `35 °C`. Use hyphens for ranges because this project prohibits en dashes.

## Preferred technology terminology

- battery health: `akun kunto`
- battery capacity: `akun kapasiteetti`
- design capacity: `nimelliskapasiteetti`
- charge cycle: `lataussykli`
- thermal throttling: lämpötilasta johtuva suorituskyvyn rajoittaminen, with `thermal throttling` retained once when useful
- signal strength: `signaalin voimakkuus`
- internal storage: `sisäinen tallennustila`
- storage health: `tallennustilan kunto`
- software support: `ohjelmistotuki`
- security update: `tietoturvapäivitys`
- factory reset: `tehdasasetusten palautus`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `taustaprosessi`
- diagnostic app: `diagnostiikkasovellus`
- health score: `kuntopisteet or kuntoluokitus, chosen consistently`
- used phone: `käytetty puhelin`
- refurbished phone: `kunnostettu puhelin`
- repair shop: `huoltoliike`

## Android UI labels

Prefer verified official Finnish labels. Common concepts include `Asetukset`, `Akku`, and `Tietoja puhelimesta`, but manufacturer and version-specific paths must be verified. Never invent a localized menu label.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use euros only for separately verified Finnish or clearly euro-area prices. Never convert USD mechanically. Use metric units and Celsius. Finnish consumer law, repair pricing, retailers, and marketplaces require separate verification. EU rules must remain explicitly EU-wide.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `on tärkeää huomata, että`
- `tässä artikkelissa tarkastelemme`
- `repeated lisäksi`
- `tarjoaa mahdollisuuden`
- `toimii ratkaisuna`
- `suorittaa tarkistus`
- `käyttäjät voivat`
- `repeated sinä/sinun`
- `literal ei vain X, vaan myös Y`

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
