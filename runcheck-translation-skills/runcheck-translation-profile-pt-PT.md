---
name: runcheck-translation-profile-pt-PT
version: 1.0.0
locale: pt-PT
language: European Portuguese
description: |
  Locale-specific language, terminology, localization, and validation profile
  for translating batches of exactly five runcheck articles from validated
  English source articles.
---

# runcheck translation profile: pt-PT

## Scope

Use this file together with `runcheck-article-translation-skill.md`.

This profile applies only to `pt-PT`. Translate directly from the validated English source, never from another translated version.

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

Use European Portuguese. Prefer neutral direct constructions and avoid repeated reader pronouns. Do not use Brazilian `você` as the default address.

## Sentence style

Restructure English syntax naturally. Prefer direct verbs and avoid repeated `efetuar`, `proceder a`, and `realizar`. Avoid Brazilian gerund-heavy constructions.

Use `pode`, `costuma`, `em geral`, `consoante o modelo`, and `nos dispositivos compatíveis`. Do not overuse `poderá`.

## Headings, punctuation, and number formatting

Use European Portuguese sentence capitalization, decimal commas, spaces before percent signs, and `35 °C`. Use hyphens for ranges.

## Preferred technology terminology

- battery health: `estado da bateria or saúde da bateria, with one primary term chosen consistently`
- battery capacity: `capacidade da bateria`
- design capacity: `capacidade nominal`
- charge cycle: `ciclo de carregamento`
- thermal throttling: `limitação térmica or reduction in performance caused by heat`
- signal strength: `intensidade do sinal`
- internal storage: `armazenamento interno`
- storage health: `estado do armazenamento`
- software support: `suporte de software`
- security update: `atualização de segurança`
- factory reset: `reposição dos dados de fábrica or verified official UI wording`
- Factory Reset Protection: retain `Factory Reset Protection (FRP)` and explain it naturally
- background process: `processo em segundo plano`
- diagnostic app: `aplicação de diagnóstico`
- health score: `pontuação do estado or pontuação de saúde, chosen consistently`
- used phone: `telemóvel usado`
- refurbished phone: `telemóvel recondicionado`
- repair shop: `loja de reparação or centro de reparação`

## Android UI labels

Use verified European Portuguese labels. Common concepts may appear as `Definições`, `Bateria`, and `Acerca do telefone`, but manufacturer wording varies. Never import Brazilian Android labels.

Keep diagnostic codes, code formatting, product names, and protected technical identifiers unchanged.

## Regional localization

Use euros only for verified Portuguese or clearly euro-area prices. Portugal-specific warranties, rights, repair pricing, retailers, trade-in services, and marketplaces require local verification. Keep EU claims explicitly EU-wide.

Do not silently replace retailers, repair services, marketplaces, warranties, laws, prices, or currencies.

## Common translationese to remove

- `é importante notar que`
- `neste artigo vamos`
- `repeated além disso`
- `serve como`
- `representa`
- `tem a capacidade de`
- `os utilizadores podem in every paragraph`
- `literal não só X, mas também Y`
- `Brazilian você/celular/aplicativo/tela/configurações`

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
