# SEO-lokalisoinnin korjausvaihe 1

Päiväys: 15.7.2026  
Tuotantodeploy: ei tehty  
Italian tuotantojulkaisu: ei tehty

## Yhteenveto

Vaiheen rajatut P1-korjaukset on toteutettu. Kahdeksan tarkoituksella julkaistua localea sisältävät edelleen täsmälleen 160 artikkelia kukin eli **1 280 julkaistua artikkelisivua**. Espanja säilyy julkaistuna. Italia on tuettu lähde- ja preview-localena, mutta tavallinen tuotantobuild ei tuota julkisia `/it/`-reittejä.

## Muuttuneet tiedostot

Pääasialliset toteutustiedostot:

- `src/data/articleLocaleConfig.mjs`: keskitetty locale- ja julkaisuporttisopimus
- `src/data/articleSlugs.mjs`: keskitetty locale-tietoinen slug-generaattori
- `src/data/articleSlugMigrations.mjs`: 13 hyväksytyn migraation pysyvä rekisteri
- `src/data/articleTagMaps.mjs`: keskitetyt importer-tagikartat, mukaan lukien Italia
- `src/data/articleLocales.mjs` ja `src/data/articlePaths.mjs`: reitit, hubit ja lokalisoidut polut sopimuksesta
- `src/content.config.ts`: lähdeaineistona tuettujen localejen schema
- `scripts/import-runcheck-articles.mjs`: eheysportti, slug-törmäystarkistus ja luonnollinen listSummary
- `astro.config.mjs`: sitemap-julkaisuportti
- lokalisoidut Astro-reitti- ja sivukomponentit: preview-portti, noindex ja julkaistut hreflangit
- `public/_redirects`: 13 suoraa Cloudflare Pages 301 -sääntöä
- `url-osoitteet.md`: vain 13 hyväksytyn URL:n päivitykset
- `src/content/articles/it/`: 160 preview-artikkelia
- `C:/Users/emmah/Documents/ObsidianVault/Projects/Active/runcheck/artikkelit/it-IT/113-android-diagnostic-codes(8)(1).md`: todettu ID 113:n lähdepariteettikorjaus
- `AGENTS.md`: uusi keskitetty locale- ja slug-arkkitehtuuri dokumentoitu
- tämän vaiheen regressiotestit `scripts/*.test.mjs`

Käyttäjän ennestään muokkaamia `src/components/Hero.astro`- ja `src/styles/global.css`-tiedostoja sekä fontti- ja translation-skills-aineistoa ei muutettu osana korjausta.

## 13 julkaistua URL-migraatiota

Kaikki vanhat URL:t ohjataan yhdellä suoralla pysyvällä 301:llä uuteen URL:iin. Title, H1, description, sourceNumber ja artikkelisisältö säilyivät byte-tasolla ennallaan 13 tiedostomigraatiossa.

| Locale / ID | Vanha URL | Uusi URL |
|---|---|---|
| da 18 | `/da/artikler/batteri/batteritilstand-under-80-prosenttia-hvad-det-betyder-og-hvad-du-skal-gore/` | `/da/artikler/batteri/batteritilstand-under-80-procent-hvad-det-betyder-og-hvad-du-skal-gore/` |
| da 22 | `/da/artikler/batteri/hvorfor-din-telefon-slukker-ved-20-prosenttia-og-sadan-loser-du-problemet/` | `/da/artikler/batteri/hvorfor-din-telefon-slukker-ved-20-procent-og-sadan-loser-du-problemet/` |
| da 43 | `/da/artikler/opladning/skal-du-oplade-til-100-prosenttia-eller-stoppe-ved-80-prosenttia/` | `/da/artikler/opladning/skal-du-oplade-til-100-procent-eller-stoppe-ved-80-procent/` |
| de 18 | `/de/artikel/akku/akkuzustand-unter-80-prosenttia-was-das-bedeutet-und-was-du-tun-solltest/` | `/de/artikel/akku/akkuzustand-unter-80-prozent-was-das-bedeutet-und-was-du-tun-solltest/` |
| de 22 | `/de/artikel/akku/warum-sich-dein-smartphone-bei-20-prosenttia-ausschaltet-und-was-du-dagegen-tun-kannst/` | `/de/artikel/akku/warum-sich-dein-smartphone-bei-20-prozent-ausschaltet-und-was-du-dagegen-tun-kannst/` |
| de 43 | `/de/artikel/laden/solltest-du-bis-100-prosenttia-laden-oder-bei-80-prosenttia-aufhoren/` | `/de/artikel/laden/solltest-du-bis-100-prozent-laden-oder-bei-80-prozent-aufhoren/` |
| nb 18 | `/nb/artikler/batteri/batterihelse-under-80-prosenttia-hva-det-betyr-og-hva-du-bor-gjore/` | `/nb/artikler/batteri/batterihelse-under-80-prosent-hva-det-betyr-og-hva-du-bor-gjore/` |
| nb 22 | `/nb/artikler/batteri/hvorfor-telefonen-slar-seg-av-ved-20-prosenttia-og-hvordan-du-retter-det/` | `/nb/artikler/batteri/hvorfor-telefonen-slar-seg-av-ved-20-prosent-og-hvordan-du-retter-det/` |
| nb 43 | `/nb/artikler/lading/bor-du-lade-til-100-prosenttia-eller-stoppe-pa-80-prosenttia/` | `/nb/artikler/lading/bor-du-lade-til-100-prosent-eller-stoppe-pa-80-prosent/` |
| sv 18 | `/sv/artiklar/batteri/batterihalsa-under-80-prosenttia-vad-det-betyder-och-vad-du-kan-gora/` | `/sv/artiklar/batteri/batterihalsa-under-80-procent-vad-det-betyder-och-vad-du-kan-gora/` |
| sv 22 | `/sv/artiklar/batteri/varfor-telefonen-dor-vid-20-prosenttia-och-hur-du-atgardar-det/` | `/sv/artiklar/batteri/varfor-telefonen-dor-vid-20-procent-och-hur-du-atgardar-det/` |
| sv 43 | `/sv/artiklar/laddning/bor-du-ladda-till-100-prosenttia-eller-stanna-vid-80-prosenttia/` | `/sv/artiklar/laddning/bor-du-ladda-till-100-procent-eller-stanna-vid-80-procent/` |
| es 123 | `/es/articulos/software-y-actualizaciones/sigue-teniendo-soporte-mi-movil-como-comprobar-el-ciclo-de-actualizaciones-y-seguridad-de/` | `/es/articulos/software-y-actualizaciones/soporte-actualizaciones-seguridad-movil-android/` |

## Redirect-toteutus

Projektin hosting on Cloudflare Pages. Staattisille reiteille käytetään projektin olemassa olevaa `public/_redirects`-tiedostoa, jonka Astro kopioi `dist/_redirects`-tiedostoksi. Säännöt ovat yksiselitteisiä polku–polku–`301`-rivejä. Yksikään uusi kohde ei ole toisen säännön lähde, joten ketjuja ei synny.

Cloudflare Wrangler 4.110.0:n paikallisessa Pages-ajossa tiedosto parsittiin 14 validiksi säännöksi (13 artikkelia ja olemassa oleva sitemap-ohjaus). Kaikki 13 vanhaa URL:ia palauttivat 301:n suoraan odotettuun uuteen polkuun ja kaikki uudet URL:t 200:n.

## Slug-generoinnin juurisyy ja korjaus

Juurisyy oli importerin yhteinen `% -> prosenttia` -korvaus ja merkkimäärällä tehty katkaisu. Se vuoti suomalaisen sanan muihin localeihin ja pystyi jättämään slugin loppuun katkenneen stopwordin.

Uusi `articleSlugs.mjs`:

- käyttää localekohtaisia prosenttimuotoja localeille fi, sv, nb, da, de, fr, es, it ja pt
- katkaisee vain kokonaisen sanan rajalta enintään 90 merkkiin
- poistaa katkaisun jälkeen locale-kohtaisen irrallisen loppustopwordin
- tuottaa samasta syötteestä deterministisesti saman tuloksen
- säilyttää hyväksytyt source-kohtaiset poikkeukset keskitetysti
- estää importin, jos locale-haarassa syntyy slug-törmäys
- ei regeneroi nykyisiä julkaistuja slugeja

## Locale-julkaisuportti

`articleLocaleConfig.mjs` määrittää yhdestä paikasta locale-koodin, alueprofiilin, URL-juuren, indeksi- ja hakupolun, hub-slugit, käyttöliittymätekstit, tagikartan, importer-lähteen sekä source-, preview- ja production-tilan.

Italian tila työn lopussa:

- `sourceSupported: true`
- `previewAllowed: true`
- `productionPublished: false`
- preview vaatii ympäristömuuttujan `RUNCHECK_PREVIEW_ARTICLE_LOCALES=it`
- production-build: ei `/it/`-reittejä, sitemap-merkintöjä, hreflangia tai navigaatiota
- preview-build: 160 `/it/articoli/`-artikkelia, `noindex, nofollow`, ei sitemap-julkaisuja

Pelkkä Italian sisällön lisääminen ei siis voi julkaista localea. Tuotantojulkaisu vaatii erillisen porttimuutoksen.

## Italian lähdeaineisto ja preview

- 160 tiedostoa
- 160 uniikkia ID:tä 1–160
- puuttuvia, ylimääräisiä tai duplikaatteja: 0
- UTF-8 ja Markdown: validit
- englanninkieliseen lähteeseen kohdistuva filename/ID/rakenne/linkkipariteetti: PASS
- generoitu preview-korpus: 160 artikkelia, yksi per sourceNumber
- luonnollinen artikkelikohtainen listSummary: 160/160; yhtään tagiluetteloa ei käytetty
- englanniksi jääneitä kappaleita automaattisella tunnistuksella: 0
- Italian source ID 113:n todettu title/H1-lähdepariteettivirhe korjattiin; muuta leipätekstiä ei muutettu

Italian erillinen raportti: `reports/it-IT-prepublication-review.md` — **READY FOR PUBLICATION**, mutta portti pysyy suljettuna.

## Lisätyt regressiotestit

- `article-slugs.test.mjs`: prosentit, 90 merkin sanaraja, stopwordit, poikkeukset
- `article-slug-migrations.test.mjs`: täsmälleen 13 sääntöä, ei ketjuja, vanha pois/uusi olemassa
- `article-locale-gate.test.mjs`: kahdeksan production-localea ja eksplisiittinen Italian preview
- `italian-source-integrity.test.mjs`: 160 ID:n lähdepariteetti ja eheys
- `italian-articles.test.mjs`: metadata, termit, listSummary, slugien yksilöllisyys
- `italian-preview-build.test.mjs`: 160 noindex-sivua ja sitemap-poissulku
- `published-article-regression.test.mjs`: 1 280 julkaistun artikkelin lang, canonical, hreflang, H1 ja sitemap
- päivitetty `seo-metadata.test.mjs`: kaikki julkaistut localet ja 8 + x-default hreflang -sopimus

## Lopulliset validointitulokset

- Tuotantobuild: PASS, 1 393 sivua yhteensä
- Julkaistut artikkelisivut: PASS, 1 280 eli 8 × 160
- Julkaistujen localejen canonical/lang/hreflang/sitemap/H1: PASS
- Muita julkaistuja URL:eja muuttui: 0 (`url-osoitteet.md`: täsmälleen 13 vanhaa poistui ja 13 uutta tuli)
- 13 vanhaa URL:ia: 13 × suora 301
- 13 uutta URL:ia: 13 × 200
- Italian preview-build: PASS, 1 567 sivua yhteensä ja 160 Italian noindex-artikkelia
- Italian tuotantositemap-, hreflang- ja route-osumat: 0
- Metadata-auditin ei-estävät varoitukset: 159 yli 70 merkin titleä ja 4 alle 70 merkin descriptionia; nämä jätettiin rajauksen mukaisesti myöhempään optimointiin

## Tarkoituksella seuraavaan vaiheeseen jätetyt asiat

- 586 julkaistun artikkelin `listSummary`-korjaukset
- laaja kontekstuaalinen sisäinen linkitys
- julkaistujen titlejen, H1-otsikoiden ja yleisten meta descriptionien optimointi
- muut julkaistut slug- tai hreflang-muutokset
- Italian nopeasti muuttuvien markkina-, valmistaja- ja operaattoriväitteiden viimeinen manuaalinen pistokoe
- Italian production-portin avaaminen ja deploy

