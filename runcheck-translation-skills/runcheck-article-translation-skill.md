---
name: runcheck-article-translation
version: 1.1.0
description: |
  Translation, localization, and publication-quality validation workflow for
  batches of exactly five previously humanized and validated English runcheck
  articles. Preserves factual meaning and article voice, produces natural
  target-language writing, checks source parity, revalidates time-sensitive
  claims when necessary, and prevents batch-wide translation patterns.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
---

# runcheck article translation and localization skill

## Purpose

Translate exactly five previously humanized and validated English runcheck articles into one target language.

The English articles are the factual and editorial source of truth. They have already been humanized and validated. Do not rewrite them from scratch, apply a new humanization formula, or redesign their structure. The task is to reproduce the same meaning, usefulness, voice, and level of caution in natural target-language writing.

The finished articles will be published. Accuracy, source parity, natural language, and internal consistency are mandatory.

## Required input

Each batch must contain:

- Exactly five complete English Markdown articles
- One target language and locale
- The matching locale profile file from this skill set
- Any explicit site-specific terminology or formatting rules supplied by the user

## Required locale profile

Always use this master skill together with exactly one matching locale profile.

| Locale | Profile file |
|---|---|
| `fi-FI` | `runcheck-translation-profile-fi-FI.md` |
| `sv-SE` | `runcheck-translation-profile-sv-SE.md` |
| `nb-NO` | `runcheck-translation-profile-nb-NO.md` |
| `da-DK` | `runcheck-translation-profile-da-DK.md` |
| `de-DE` | `runcheck-translation-profile-de-DE.md` |
| `fr-FR` | `runcheck-translation-profile-fr-FR.md` |
| `it-IT` | `runcheck-translation-profile-it-IT.md` |
| `es-ES` | `runcheck-translation-profile-es-ES.md` |
| `pt-PT` | `runcheck-translation-profile-pt-PT.md` |

The locale profile is authoritative for reader address, sentence rhythm, heading capitalization, punctuation, terminology, Android UI labels, currency, market localization, and locale-specific validation.

Do not improvise another regional variety. For example, do not use Brazilian Portuguese rules for `pt-PT`, Latin American Spanish for `es-ES`, Nynorsk for `nb-NO`, or Finland-Swedish conventions for `sv-SE`.

If the requested locale has no profile, create a suitable locale profile before translating.

Never silently process fewer or more than five articles as one batch.

When the user gives a language but no locale:

- Use the obvious standard locale when the language maps clearly to one market, such as Finnish to `fi-FI`.
- For languages with major regional varieties, use a broadly neutral standard unless the user names a market.
- Do not silently localize laws, prices, retailers, repair services, warranties, currencies, or market-specific recommendations.
- Record the language or locale assumption in the batch report.

## Core principle

Translate meaning, not English sentence structure.

A good result should read as if a skilled technology writer originally wrote the article in the target language. It must not read like a literal translation, a machine-translated document, a localized product manual, or a second round of AI rewriting.

Naturalness never permits factual drift.

## Source authority

The supplied English article controls:

- The factual claims
- The scope of each claim
- The degree of certainty
- The examples
- The warnings
- The recommendations
- The section order
- The introduction type
- The FAQ treatment
- The conclusion
- The article's relative emphasis

Preserve correct information. Correct an English source claim only when current reliable evidence shows that it is inaccurate or outdated.

Never make an unsupported correction merely because a translated sentence sounds more plausible.

## Protected content

Preserve the following exactly unless a specific rule below says otherwise.

### Names and technical identifiers

- `runcheck`, including its lowercase spelling
- App, company, service, and manufacturer names
- Android version names and numbers
- Device model names
- Product names
- API names
- File formats
- Technical abbreviations
- Diagnostic codes
- URLs
- Email addresses
- Package names
- Command-line commands
- Code
- File paths
- Markdown link targets

Examples of protected technical terms include:

- APK
- SDK
- ADB
- ROM
- OEM
- bootloader
- kernel
- logcat
- mAh
- SoC
- GPU
- CPU
- RAM
- NVMe
- eMMC
- UFS
- battery health
- thermal throttling
- signal strength
- storage I/O
- IAP
- Play Console
- AdMob

A protected English technical term may be accompanied by a natural target-language explanation when that improves readability, but the technical meaning must remain unchanged.

### Exact factual values

Preserve:

- Numbers
- Percentages
- Ranges
- Dates
- Durations
- Temperatures
- Storage capacities
- Battery capacities
- Cycle counts
- Prices
- Measurements
- Version numbers
- Model years
- Thresholds

The formatting may follow normal target-language conventions, but the value must not change.

For example, `1.5 seconds` may become the target language's normal equivalent of `1.5 seconds`, including a localized decimal separator when appropriate. It must not become `about two seconds`.

### Markdown and publishing structure

Preserve unless the user explicitly requests a change:

- YAML frontmatter keys
- Frontmatter values used by the site
- Tags
- Heading levels
- Tables
- Lists
- Blockquotes
- Code formatting
- Inline code
- Links
- Horizontal structure
- Filename

Translate visible article text. Do not translate machine-facing frontmatter values, slugs, tags, IDs, or URLs unless the user has supplied a localization mapping.

Do not add translator notes, citations, validation notes, or editorial comments inside the published article.

## Do not re-humanize the source

The English articles already contain intentional variation in introductions, rhythm, section weight, and voice. Preserve that editorial design.

Do not:

- Select a new introduction style
- Add a new anecdote
- Invent first-person experience
- Add an opinion absent from the source
- Merge or split major sections merely for variety
- Add a new FAQ
- Remove an existing FAQ
- Create new examples
- Add promotional claims
- Increase the frequency of `runcheck` mentions
- Force every article into the same target-language template

Sentence boundaries and paragraph boundaries may change when needed for natural target-language prose. The article's meaning and editorial shape must remain recognizable.

## Target-language profile

Load the matching locale profile before translating the batch. Do not replace it with an improvised profile.

Use the locale profile as the stable language standard across all batches. A small batch-specific terminology note may be created for new technical concepts, but it must not conflict with the locale profile.

The profile defines:

1. **Reader address**
   - Informal or formal second person
   - Singular or plural address
   - Whether direct address is natural in technology articles

2. **Tone**
   - Practical
   - Informed
   - Calm
   - Conversational without slang
   - Helpful without sounding promotional or patronizing

3. **Sentence style**
   - Natural sentence length for the language
   - Normal placement of subordinate clauses
   - Appropriate use of fragments
   - Preferred active or passive balance
   - Common ways to express uncertainty without sounding evasive

4. **Heading style**
   - Native capitalization rules
   - Natural article-title structure
   - No English-style Title Case unless the target language requires it

5. **Punctuation**
   - Native quotation marks when appropriate
   - Native spacing rules
   - Native decimal and date formatting
   - No em dashes
   - Do not copy English punctuation mechanically

6. **Terminology**
   - Established Android and technology vocabulary
   - Terms normally left in English
   - Terms normally translated
   - Consistent translations for repeated concepts

7. **UI label policy**
   - Use an official localized Android or manufacturer UI label only when it is reliably verified.
   - Do not invent a translated Settings path.
   - When an exact localized label cannot be verified, retain the official English label or write a safe descriptive path that does not pretend to quote the interface.
   - Preserve diagnostic codes exactly.

8. **Regional content policy**
   - Whether the batch is a direct translation or a market localization
   - Currency treatment
   - Date and measurement conventions
   - Handling of region-specific retailers, resale platforms, laws, repair prices, warranties, and service programs

9. **Translationese risks**
   - Common English calques in the target language
   - Overused formal connectors
   - Unnatural pronoun repetition
   - Excessive passive voice
   - Nominalized bureaucratic phrasing
   - English word order
   - English rhythm copied sentence by sentence

The same profile applies to all five articles, but it must not make their rhythm or structure uniform.

## Translation rules

### Preserve precision and uncertainty

Match the source's level of certainty exactly.

Examples:

- `may` must not become `will`
- `often` must not become `always`
- `around 80%` must not become `80%`
- `on supported devices` must not become `on Android phones`
- `varies by model and region` must not be removed
- `a practical rule of thumb` must not become an official Android limit
- `can help` must not become `fixes`

Do not strengthen, weaken, broaden, or narrow a claim.

### Preserve logical relationships

Keep cause, correlation, comparison, condition, and exception distinct.

Do not turn:

- correlation into causation
- an example into a universal rule
- a recommendation into a requirement
- a current feature into a promise for all devices
- a manufacturer-specific path into a general Android path
- an approximate cost into a guaranteed price
- an EU rule into a worldwide rule

### Preserve safety meaning

Warnings about swollen batteries, heat, water damage, electrical risk, data loss, account locks, privacy, or unsafe repair must remain clear.

Do not soften safety warnings for smoother prose.

Do not add alarming language that is absent from the source.

### Use natural local syntax

Rewrite at sentence level when literal translation would sound foreign.

Allowed:

- Reordering clauses
- Splitting a long English sentence
- Combining two short English sentences
- Replacing an English idiom with a natural local equivalent
- Omitting an unnecessary pronoun
- Changing the placement of a qualifier
- Adjusting paragraph breaks modestly

Not allowed:

- Changing the claim
- Dropping a limitation
- Adding an example
- Changing the article's stance
- Simplifying away technical detail
- Replacing a precise term with a vague synonym

### Avoid false localization

Do not replace source content with local content unless the user explicitly requests market localization.

Never silently replace:

- USD prices with guessed euro prices
- Swappa with a local marketplace
- US warranty practices with EU consumer law
- one country's repair costs with another country's costs
- a named service with an assumed local equivalent
- an Android UI label with an invented translation

When a source example is market-specific and direct translation would mislead the target audience:

1. Retain the example and identify its market when reliable evidence supports that clarification, or
2. Generalize the sentence without changing its central point, or
3. Flag it in the validation report for the user.

Any substantive localization must be separately researched and validated.

## Cross-language consistency

When the same five English articles are translated into several locales:

- Every locale must use the same English source revision.
- Never translate from another translated language.
- Keep filenames and article identifiers aligned across locales.
- Preserve the same facts, qualifications, warnings, scope, and `runcheck` placement.
- Locale-specific wording may differ substantially when required for natural language.
- Local services, prices, laws, and UI labels may differ only when separately verified.
- Record corrections to the English source in a shared correction log so later locales do not repeat an outdated claim.

## Five-article workflow

Complete every stage in order.

### Stage 1: Read the full batch

Read all five English articles before translating any of them.

Identify:

- Topic and reader intent
- Introduction style
- Main recommendation
- Technical claims
- Numbers and dates
- Manufacturer-specific instructions
- Android version claims
- Legal or regulatory claims
- Prices and market-specific references
- Safety warnings
- `runcheck` mentions
- FAQ structure
- Tables and lists
- Protected terms

Do not begin from snippets or partial reads.

### Stage 2: Build a source-parity inventory

For each article, create an internal inventory containing:

- Filename
- H1 title
- Every number and range
- Every date and duration
- Every named product, model, company, and service
- Every Android version
- Every settings path
- Every dialer code
- Every legal or regional claim
- Every safety warning
- Every explicit uncertainty marker
- Every `runcheck` mention
- Every link and URL
- Every table row

This inventory is the basis of the final parity check.

### Stage 3: Create the target-language profile

Create the language profile described above.

Review the five introductions and note how their existing differences should survive in the target language.

Do not impose a new five-part pattern.

### Stage 4: Translate one article at a time

For each article:

1. Translate the complete article.
2. Preserve Markdown.
3. Use the source-parity inventory.
4. Check each paragraph against its source paragraph.
5. Resolve unnatural literal phrasing.
6. Keep all factual qualifiers.
7. Keep terminology consistent with earlier articles in the batch.
8. Do not copy sentence structures mechanically from earlier translated articles.

Finish the first article's internal checks before moving to the next.

### Stage 5: Run an exact source-parity audit

Compare each finished translation with its English source.

Check every item in the source-parity inventory.

The translation fails this stage if any of the following occurs:

- A number is missing or changed
- A range becomes a single value
- A date changes
- A model or Android version changes
- A settings path is invented
- A diagnostic code changes
- A warning disappears
- A condition or exception disappears
- A possibility becomes a certainty
- A recommendation becomes a guarantee
- A market-specific statement becomes universal
- A paragraph adds unsupported information
- A `runcheck` mention is added, removed, or changed without reason
- A link target changes
- A table row is missing
- Frontmatter is damaged

Correct every parity failure before continuing.

### Stage 6: Revalidate time-sensitive claims

The English source was previously validated, so do not needlessly research every stable statement again.

Revalidate claims that can reasonably change, including:

- Current Android version behavior
- Manufacturer settings paths
- Device model support periods
- Software update commitments
- Current battery-health availability
- Current product or service availability
- Laws and effective dates
- EU rules
- Repair program terms
- Current prices presented as current
- Current marketplace or trade-in service claims
- Claims containing words such as `current`, `new`, `latest`, `now`, or a recent year

Use current primary or authoritative sources whenever possible:

- Official Android documentation
- Official Google Pixel documentation
- Official Samsung, Xiaomi, OnePlus, OPPO, Realme, Motorola, or other manufacturer documentation
- Official EU institutions and legislation
- Official service documentation
- Primary technical documentation

Use reputable secondary sources only when primary documentation does not address the claim.

If a source claim is outdated or inaccurate:

1. Correct the translated article.
2. Preserve the intended point where possible.
3. Record the original claim, the correction, and the supporting source in the batch report.
4. Do not silently introduce a correction that cannot be verified.

Prices and repair-cost ranges are especially variable. Keep them clearly approximate and market-qualified when the source supports that framing.

### Stage 7: Run target-language quality validation

Review each article as an independent target-language article, not while looking at the English sentence order.

Check for:

- Literal English constructions
- Unnatural word order
- Repeated pronouns
- Excessively formal vocabulary
- Bureaucratic nominalizations
- Machine-translation phrasing
- False friends
- Awkward translated idioms
- Overuse of the same connector
- Overuse of passive voice
- Repeated sentence openings
- Uniform sentence lengths
- Uniform paragraph lengths
- English punctuation copied mechanically
- Unnatural headings
- Terminology drift
- Register changes
- Sudden promotional language
- Vague wording replacing precise source language
- Accidental loss of personality
- Added personality not present in the source

Read the title, introduction, headings, and conclusion aloud in the target language. Rewrite anything that sounds translated.

Do not make all articles equally chatty. Preserve their original differences.

### Stage 8: Run five-article batch validation

Read all five translated articles together.

The batch should feel like one publication with consistent terminology and quality, but not like five outputs from one rigid translation template.

Check:

- Do the five introductions still differ?
- Are sentence rhythms suspiciously similar?
- Do paragraphs repeatedly begin with the same translated phrases?
- Are the same connectors overused across all five?
- Did every conclusion acquire the same wording?
- Did every FAQ answer acquire the same cadence?
- Are section lengths more uniform than in the English sources?
- Were mild source opinions flattened into neutral prose?
- Were all uncertain claims translated with the same stock phrase?
- Is `runcheck` described consistently?
- Are repeated technical terms translated consistently?
- Are UI labels handled consistently?
- Are units, dates, and punctuation consistent with the locale?

Revise the batch when translation habits create a new fingerprint.

### Stage 9: Final clean-file verification

Before delivery, verify all five files:

- Open successfully
- Remain valid UTF-8 Markdown
- Retain their complete frontmatter
- Retain their original filename unless the user requested localized filenames
- Contain one complete translated article each
- Contain no editor notes
- Contain no source citations added by the translator
- Contain no validation report text
- Contain no placeholders
- Contain no comments such as `TODO`
- Contain no accidental English body paragraphs, except protected terms, official UI labels, names, or quotations that intentionally remain English
- Use no em dashes
- Use no emoji

## Terminology memory

Maintain a batch terminology table while translating.

For every recurring term, record:

- English source term
- Chosen target-language term
- Whether the English term is retained
- Capitalization
- Grammatical behavior when relevant
- Any context-dependent alternative

At minimum, track:

- battery health
- battery capacity
- design capacity
- charge cycle
- thermal throttling
- storage
- internal storage
- storage health
- signal strength
- software support
- security update
- factory reset
- Factory Reset Protection
- background process
- diagnostic app
- health score
- used phone
- refurbished phone
- repair shop
- Settings
- Battery
- Battery Health
- About phone

Consistency does not mean translating a word identically in every grammatical context. It means preserving the same concept without unnecessary synonym cycling.

## Handling Android settings paths

Settings paths are high-risk content.

Follow this order:

1. Verify whether an official localized label exists for the target locale and relevant device or Android version.
2. Use the official localized path when it is reliable.
3. If only part of the path can be verified, do not fabricate the rest.
4. When an exact path varies by manufacturer, preserve that limitation.
5. When retaining an English UI label, format it consistently and explain it naturally if needed.
6. Never translate dialer codes.
7. Never imply that a path works on every Android phone when the source limits it by model, manufacturer, region, or software version.

## Handling regional claims

Classify every regional claim as one of these:

### Universal technical claim

Translate directly after parity checking.

### Manufacturer-specific claim

Translate directly, preserve the manufacturer and model limitations, and revalidate when time-sensitive.

### Market example

Retain it with appropriate context. Do not present it as local fact.

### Localizable practical advice

Localize only when the user requested localization and reliable local evidence is available.

### Law, regulation, warranty, or consumer-right claim

Revalidate against the relevant official jurisdiction. Do not transfer one jurisdiction's rule to another.

## Failure rules

An article is not ready when any of these remains:

- Changed factual meaning
- Missing qualifier
- Invented setting label
- Unverified current claim
- Broken Markdown
- Missing frontmatter
- Altered diagnostic code
- Added unsupported advice
- Region-specific claim presented as universal
- Literal, awkward target-language prose
- Terminology inconsistency
- English paragraph accidentally left untranslated
- Repetitive batch-wide translation pattern
- Any unresolved safety ambiguity

Do not mark a batch ready because four articles pass. All five must pass.

## Output requirements

Deliver:

1. Five translated Markdown files
2. One concise batch validation report outside the article files

The report must use this format:

```text
BATCH: [target language and locale]
ARTICLES: 5

SOURCE PARITY: PASS / ISSUES CORRECTED / FAIL
- [filename]: [status and any correction]

FACTUAL FRESHNESS: PASS / UPDATES MADE / UNRESOLVED
- [claim revalidated or corrected, with source]
- If none: No time-sensitive source changes were required.

LANGUAGE QUALITY: PASS / REVISION REQUIRED
- Target-language profile: [brief description]
- Terminology consistency: [status]
- Translationese check: [status]

BATCH VARIANCE: PASS / REVISION REQUIRED
- Introductions: [preserved / issue]
- Rhythm and structure: [varied / issue]
- Repeated phrasing: [none / corrected / unresolved]

FILES:
- [filename]: READY / NOT READY
- [filename]: READY / NOT READY
- [filename]: READY / NOT READY
- [filename]: READY / NOT READY
- [filename]: READY / NOT READY

OVERALL VERDICT: READY FOR PUBLICATION / NEEDS REVISION
```

Do not include private working notes, internal language-profile details, chain-of-thought, or the full source-parity inventory in the report.

## Final publication standard

A batch is ready only when:

- All five translations preserve the English source facts and qualifications
- All current claims are still accurate
- The target language sounds native and publication-ready
- Android terminology is consistent
- Settings paths are verified or safely presented
- Regional claims are not misleading
- Markdown is intact
- The five articles retain their original editorial differences
- No article contains detectable literal-translation residue
- No unresolved issue remains

When accuracy and elegance conflict, choose accuracy, then rewrite until the sentence is also natural.
