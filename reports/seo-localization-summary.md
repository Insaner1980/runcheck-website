# Runcheckin monikielisten artikkelien SEO-lokalisointiauditointi

Auditointipäivä: 15.7.2026  
Tila: auditoinnin lähtötilanne; julkaisuolettamukset korjattu 15.7.2026 ennen korjausvaihetta

> **Korjattu lähtötieto:** Espanjan `es-ES` on tarkoituksella julkaistu. Sivustolla on kahdeksan julkaistua 160 artikkelin localea eli 1 280 artikkelia. Italian lähdeaineistossa on nykyään täsmälleen 160 tiedostoa ja yksi source ID 1–160; aiemmat ID 136–140 -lisäkopiot on poistettu eikä niitä käsitellä avoimena löydöksenä. Korjausvaiheen toteutunut tila on raportissa `seo-localization-remediation-phase-1.md`.

## Tiivistelmä

Espanja on tarkoituksella julkaistu: projektissa on 160 `src/content/articles/es/`-artikkelia, `es` on mukana content-schemassa ja staattisissa reiteissä, ja tuotanto-build tuottaa `/es/articulos/`-sivut. Nykyinen lähde- ja live-tila on 8 × 160 = 1 280 julkaistua artikkelia.

Tekninen toteutus on muuten vahva. Kaikki 1 280 buildissä syntyvää artikkelisivua läpäisivät automatisoidut tarkistukset:

- oikea `<html lang>`
- itseensä osoittava canonical
- täydellinen, itseviittaava ja vastavuoroinen `hreflang`-ryhmä
- englanninkielinen `x-default`
- ei URL-törmäyksiä
- `index,follow`-robots
- URL mukana sitemapissa
- title, meta description ja H1 olemassa
- H1 vastaa frontmatterin `title`-arvoa
- `<title>` vastaa `metaTitle ?? title` -sääntöä

Pääongelmat ovat:

1. **P1:** 12 julkaistussa ruotsin-, norjan-, saksan- ja tanskankielisessä URL:ssa on suomen sana `prosenttia`.
2. **P1:** es-ES-artikkelin 123 slug katkeaa prepositioon `de` 90 merkin automaattisen leikkauksen takia.
3. **P2:** 586 lokalisoidun artikkelin listakorttiteksti on artikkelikohtaisen tiivistelmän sijasta kolmen tagin luettelo.
4. **P2:** julkaistuissa käännösartikkeleissa ei ole kontekstuaalista artikkelista toiseen johtavaa sisälinkkiä. Navigaatio- ja CTA-linkkejä on, mutta klusterien sisäinen linkitys puuttuu.

Hakumääriä, CTR-lukuja tai Search Console -havaintoja ei ole keksitty. Projektista ei löytynyt Search Console -vientejä tai kyselyraportteja, eikä tässä ympäristössä ollut käytettävissä Runcheckin Search Console -tiliä. Google Trendsistä ei saatu riittävän tarkkaa ja toistettavaa artikkeli- tai query-tason aineistoa, joten raportissa ei esitetä Trends-lukuja.

## Auditoinnin aineisto ja menetelmä

Auditointi käytti:

- `runcheck-translation-skills/runcheck-article-translation-skill.md`
- kaikkia yhdeksää `runcheck-translation-profile-*.md`-profiilia
- `src/content/articles/`-korpusta
- espanjan ja italian Obsidian-lähdehakemistoja
- locale-, reitti-, metadata-, sitemap- ja importtilähdekoodia
- `npm run build` -tuotanto-buildiä
- buildin 1 280 artikkeli-HTML-tiedostoa ja generoitua sitemapia
- live-juurta, live-robots.txt:tä ja live-sitemapia
- Googlen ensisijaisia Search Central-, Android- ja Pixel-ohjeita

Tekninen tarkastus tehtiin sivukohtaisesti. Terminologia tarkastettiin klusteritasolla: ensin valittiin locale-profiilin ja virallisen paikallisen terminologian perusteella ydintermit, minkä jälkeen koko locale-korpus skannattiin niiden ja vältettävien muotojen osalta.

Teknisen SEO:n arviointiperusta:

- [Google: localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google: multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [Google: canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: robots meta](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Google: Search Console performance data](https://support.google.com/webmasters/answer/17011364?hl=en)

## Nykyinen rakenne

### Artikkelien sijainti

- Englanti: `src/content/articles/<hub>/<slug>.md`
- Suomi: `src/content/articles/fi/<hub>/<slug>.md`
- Ruotsi: `src/content/articles/sv/<hub>/<slug>.md`
- Norjan Bokmål: `src/content/articles/nb/<hub>/<slug>.md`
- Saksa: `src/content/articles/de/<hub>/<slug>.md`
- Tanska: `src/content/articles/da/<hub>/<slug>.md`
- Ranska: `src/content/articles/fr/<hub>/<slug>.md`
- Espanja: `src/content/articles/es/<hub>/<slug>.md`
- Italia: vain Obsidian-lähteissä, ei `src/content/articles/it/`-hakemistoa

Englannin 160 artikkelia jakautuvat 13 hub-hakemistoon. Jokaisessa nykyisessä lokalisoidussa hakemistossa on 160 tiedostoa.

### Locale ja frontmatter

`src/content.config.ts:4-33` määrittelee collectionin. Käytetyt kentät ovat:

- `title` (pakollinen)
- `metaTitle` (valinnainen erillinen SEO title)
- `description` (pakollinen)
- `metaDescription` (valinnainen)
- `listSummary` (valinnainen)
- `hub`
- `sourceNumber` (1–160)
- `order`
- `subgroup` (valinnainen)
- `tags`
- `locale`
- `draft`

Englannin `locale` puuttuu tiedostoista ja saa scheman oletuksen `en`. Lokalisoidut tiedostot käyttävät lyhyitä koodeja `fi`, `sv`, `nb`, `de`, `da`, `fr`, `es`. Locale-profiilit ovat alueellisia (`fi-FI`, `sv-SE`, `nb-NO`, `da-DK`, `de-DE`, `fr-FR`, `es-ES`, `it-IT`, `pt-PT`).

### Title, SEO title, description ja H1

Artikkelisivun SEO title muodostuu näin:

```text
article.data.metaTitle ?? article.data.title
```

Meta description muodostuu näin:

```text
normalizeMetaDescription(article.data.metaDescription ?? article.data.description)
```

H1 on aina `article.data.title`. Toteutus on englannille tiedostossa `src/pages/articles/[hub]/[...slug].astro:30-58`, suomelle `src/pages/fi/artikkelit/[hub]/[...slug].astro:30-62` ja muille localeille `src/components/LocalizedArticleDetailPage.astro:9-24`.

Erillistä `metaTitle`-arvoa käyttää 23 artikkelia (englanti 8, suomi 15). Erillinen `metaDescription` on vain yhdessä suomenkielisessä artikkelissa. Tämä ei ole tekninen virhe, koska fallback on toimiva, mutta erotettu kenttä on hyödyllinen tarkkaan CTR-optimointiin.

### Slugit ja URL:t

Englannin slug perustuu englanninkieliseen lähdetiedostonimeen. Muut slugit lokalisoidaan title-arvosta `scripts/import-runcheck-articles.mjs:301-303` ja normalisoidaan `localizedSeoSlug()`-funktiossa (`341-389`). Lokalisoitu slug katkaistaan 90 merkkiin sananrajalta.

Hub-slugit ja locale-juuret ovat yhdessä lähteessä `src/data/articlePaths.mjs:3-29`. `articlePath()` muodostaa lopullisen URL:n riveillä 31–44.

Julkaistuissa lokalisoiduissa URL:eissa käytetään siis pääosin kohdekielistä slugia, ei englanninkielistä. Poikkeavat `prosenttia`-slugit ja es-ES:n katkennut slug on kirjattu tiedostoon `seo-localization-findings.csv`.

### Kieliversioiden pysyvä avain

Kaikki vastineet yhdistetään kokonaislukukentällä `sourceNumber`. Jokaisessa nykyisessä locale-korpuksessa on täsmälleen yksi artikkeli jokaiselle numerolle 1–160. Tämä on hyvä, pysyvä kieliversioiden avain.

Italian Obsidian-lähteessä on nykyään täsmälleen 160 tiedostoa ja yksi tiedosto jokaiselle numerolle 1–160. Aiemmat käyttäjän lisäämät ID 136–140 -lisäkopiot on poistettu, joten niitä ei käsitellä avoimena eheysongelmana. Espanjan live-korpuksessa on yksi sivustotiedosto jokaiselle numerolle 1–160.

### Canonical, hreflang ja x-default

`BaseLayout.astro:34-58` ottaa vastaan `canonicalPath`, `lang` ja `alternateLocales`. Layout tulostaa:

- `<html lang={lang}>` rivillä 73
- canonicalin rivillä 88
- `hreflang`-linkit riveillä 89–91

Artikkelien alternate-ryhmä muodostetaan `sourceNumber`-avaimella `src/data/articleLocales.mjs:50-54`. Jokainen olemassa oleva kieliversio lisätään ryhmään, ja englanti lisätään lisäksi `x-default`-versioksi.

Nykyinen `x-default` on tarkoituksenmukainen, koska englanti on lähde- ja fallback-versio. Kaikki ryhmät ovat vastavuoroisia ja sisältävät myös oman sivun.

Nykyiset `hreflang`-arvot ovat kielikoodeja (`fi`, `sv`, `nb` jne.), eivät kieli-maa-koodeja. Tämä on Googlen tukema ja teknisesti validi ratkaisu. Koska toimitukselliset profiilit ovat nimenomaan maakohtaisia, raportti merkitsee tämän P2-tason kohdennuspäätökseksi: pidetäänkö laaja kielikohdennus vai halutaanko tulevaisuudessa `fi-FI`, `sv-SE`, `es-ES` jne. Ilman maakohtaista GSC-dataa automaattista vaihtoa ei suositella.

### Sitemap ja indeksoitavuus

`astro.config.mjs:9-16` käyttää staattista outputia, `site`-juurta ja `@astrojs/sitemap`-integraatiota. `public/robots.txt:1-4` sallii kaiken crawlaamisen ja osoittaa sitemap-indeksiin.

Live-sitemapissa on 1 393 URL:ia:

| Haara | URL:eja |
|---|---:|
| `/articles/` | 174 |
| `/fi/` | 174 |
| `/sv/` | 174 |
| `/nb/` | 174 |
| `/de/` | 174 |
| `/da/` | 174 |
| `/fr/` | 174 |
| `/es/` | 174 |
| `/` | 1 |

174 = kielikohtainen index + 13 hubia + 160 artikkelia. Sitemap ei sisällä XML-tason `xhtml:link`-alternaatteja, mutta täydelliset HTML-`hreflang`-linkit ovat jokaisella sivulla. Google hyväksyy kumman tahansa toteutustavan, joten tämä ei ole virhe.

## Teknisen auditoinnin tulokset

### Läpäistyt tarkistukset

1 280/1 280 artikkelisivua läpäisi kaikki seuraavat:

- HTML-tiedosto syntyy buildissä
- lang vastaa artikkelin localea
- canonical vastaa omaa URL:ia
- robots ei sisällä `noindex`
- sitemap sisältää canonical-URL:n
- title, meta description ja H1 ovat olemassa
- H1 vastaa titleä
- SEO title noudattaa fallback-sääntöä
- `hreflang`-ryhmä sisältää kaikki kahdeksan nykyistä versiota, oman sivun ja `x-default`-englannin
- URL ei törmää toisen artikkelin kanssa

Tarkat tekniset virheet ovat tiedostossa `reports/seo-technical-findings.csv`.

### Sisäiset linkit ja kielenvaihtaja

Lokalisoiduista Markdown-artikkeleista ei löytynyt vääränkielisiä `/articles/`-linkkejä. Syy on kuitenkin se, ettei niissä ole lainkaan kontekstuaalisia Runcheck-artikkelilinkkejä. Hub-, header-, footer- ja CTA-linkit ovat locale-tietoisia.

Näkyvää kielenvaihtajaa ei ole. `Header.astro` näyttää vain nykyisen kielen ja linkittää sen artikkeli-indeksiin; tämä on myös projektin nykyinen dokumentoitu rakenne. Auditointi ei siis löytänyt rikkinäisiä kielenvaihtajalinkkejä, mutta vastaavaan käännökseen siirtymistä ei tarjota käyttäjälle. Tätä ei muuteta ilman erillistä tuote- ja arkkitehtuuripäätöstä.

## Avainsanojen ja terminologian lokalisointiauditointi

### Näytön taso

Luotettavaa hakumäärädataa ei ollut saatavilla. `seo-keyword-map.csv` ei sisällä hakumääriä, vaan:

- locale-profiilien toimituksellisen termin
- virallisista paikallisista Google/Android/Pixel-ohjeista vahvistetun termin silloin, kun sellainen löytyi
- hyväksyttävät vaihtoehdot
- vältettävät alue- tai käännösmuodot
- korpuksessa termiä käyttävien artikkelien määrän
- luottamustason

Erityisen vahva virallinen näyttö löytyi battery health / battery capacity -sanastolle:

- fi-FI: `akun kunto`, `akun kapasiteetti`
- sv-SE: `batterihälsa`, `batterikapacitet`
- nb-NO: yleistekstissä `batterihelse`, Pixelin virallisena UI-terminä `Batteritilstand`
- da-DK: `batteritilstand`, `batterikapacitet`
- de-DE: `Akkuzustand`, `Akkukapazität`
- fr-FR: `état de la batterie`, `capacité de la batterie`
- es-ES: `estado de la batería`, `capacidad de la batería`
- it-IT: `stato della batteria`, `capacità della batteria`

Nykyiset korpukset noudattavat näitä pääosin hyvin. Esimerkiksi espanjassa `estado de la batería` esiintyy 304 kertaa ja `salud de la batería` vain kerran luontevassa yleisterveyden yhteydessä. Italia käyttää `stato della batteria` 302 kertaa eikä käytä `salute della batteria` -muotoa pääterminä.

### Suurin järjestelmällinen sisältöongelma

Kun descriptionin ensimmäinen virke ylittää 110 merkkiä, importer muodostaa `listSummary`-arvon kolmesta ensimmäisestä tagista (`scripts/import-runcheck-articles.mjs:142-150`). Tämä tuottaa esimerkiksi:

```text
android, actualizaciones y seguridad
```

Teksti näkyy artikkelilistan linkin sisällä, joten se on myös sisäisen linkin kuvailevaa tekstiä. Se on geneerinen, toistuva eikä kerro sivun hakuintenttiä.

| Locale | Tagiluetteloon pudonneita listSummary-arvoja |
|---|---:|
| fi-FI | 78 |
| sv-SE | 76 |
| nb-NO | 72 |
| da-DK | 79 |
| de-DE | 89 |
| fr-FR | 100 |
| es-ES | 92 |
| **Yhteensä** | **586** |

`seo-localization-findings.csv` sisältää jokaiselle riville nykyisen arvon ja automatisoidun, descriptionista johdetun luonnosehdotuksen. Ehdotus vaatii aina natiivin tarkistuksen ennen muutosta.

### Englanniksi jäänyt sisältö

Täsmällinen kappalevertailu englannin lähteen ja kaikkien julkaistujen käännösten välillä löysi vain:

- komentorivejä
- ADB-komentoja
- suojattuja Android UI -nimiä kuten `Window animation scale`
- valmistajakohtaisia virallisia englanninkielisiä Settings-polkuja

Vahvistettua englanniksi jäänyttä leipätekstikappaletta ei löytynyt.

## Locale-kohtainen yhteenveto

| Locale | Tila | Tekninen | Terminologia | Merkittävimmät löydökset |
|---|---|---|---|---|
| en | 160 julkaistua | PASS | lähdeversio | ei lokalisaatiolöydöksiä |
| fi-FI | 160 julkaistua | PASS | vahva | 78 geneeristä listSummarya, source 1 ilman tageja, ei kontekstuaalisia sisälinkkejä |
| sv-SE | 160 julkaistua | PASS | vahva | 76 geneeristä listSummarya, 3 `prosenttia`-slugia |
| nb-NO | 160 julkaistua | PASS | vahva; `batterihelse`/UI-`Batteritilstand` erottelu on perusteltu | 72 geneeristä listSummarya, 3 `prosenttia`-slugia |
| da-DK | 160 julkaistua | PASS | vahva | 79 geneeristä listSummarya, 3 `prosenttia`-slugia |
| de-DE | 160 julkaistua | PASS | vahva | 89 geneeristä listSummarya, 3 `prosenttia`-slugia |
| fr-FR | 160 julkaistua | PASS | vahva | 100 geneeristä listSummarya |
| es-ES | 160 tarkoituksella julkaistua | teknisesti PASS | vahva Espanjan espanja | 92 geneeristä listSummarya, katkennut source 123 slug |
| it-IT | 160 ID:tä / 160 lähdetiedostoa, ei julkaistu | julkaisua edeltävä valmistelu vaaditaan | ydintermit johdonmukaisia | yksi lähdetiedosto jokaiselle ID:lle 1–160 |
| pt-PT | ei artikkelikorpusta | ei auditoitavissa | profiili on olemassa | toteuta locale-sopimus vasta, kun julkaisu päätetään |

## Priorisointi ilman Search Console -dataa

Ilman GSC-dataa ensimmäinen 10–20 artikkelin ryhmä per locale kannattaa muodostaa samoista korkean intentin lähdeartikkeleista. Suositeltu 18 artikkelin yhteinen ydinryhmä on:

| ID | Englanninkielinen aihe |
|---:|---|
| 1 | Android device health check |
| 2 | Used Android phone condition |
| 4 | Replace vs repair |
| 6 | What to check before buying used |
| 7 | Full Android diagnostic |
| 11 | Check battery health |
| 21 | Battery drains fast |
| 48 | Phone will not charge |
| 53 | Phone overheats / temperature |
| 80 | Storage health |
| 87 | Storage says full |
| 91 | Slow phone internet |
| 104 | Android hardware test guide |
| 122 | Android security patches |
| 123 | Software support lifecycle |
| 130 | Safe mode vs factory reset |
| 138 | Diagnostic apps comparison |
| 159 | Xiaomi CIT diagnostics |

Nämä kattavat yleisiä ongelmanratkaisuhakuja, käytetyn puhelimen kaupallisen intentin, sovelluksen diagnostiikka-arvon ja ydinklusterit. Lopullinen järjestys pitää päivittää GSC:n page × query × country -datalla.

## Automatisoitavuus

Turvallisesti automatisoitavissa:

- canonical/lang/hreflang/sitemap/required metadata -regressiotestit
- sourceNumber-parien täydellisyys ja uniikkius
- URL-törmäysten tarkistus
- väärän kielen merkkijonojen tunnistus slugeissa
- identtisten lähdekaksoiskappaleiden tunnistus hashilla
- listSummary-tagifallbackin tunnistus
- locale-kohtaisen termikartan johdonmukaisuusskannaus
- sisälinkkien kohde-localen validointi

Vaatii käsin tarkistamisen:

- päätermin valinta silloin, kun useampi luonnollinen muoto on hyväksyttävä
- title/H1-intentin arviointi
- meta descriptionin lopullinen copy
- sisälinkkien ankkuriteksti
- it-IT:n lähdepariteetin ja terminologian manuaalinen tarkistus silloin, kun automaattinen portti nostaa artikkelin tarkistusjonoon
- kaikki julkaistun URL:n muutospäätökset
- maakohtainen vs kielikohtainen hreflang-kohdennus

## Toteutussuunnitelma

### 1. Tekniset P0-virheet

Korjattujen lähtötietojen jälkeen Espanjan tarkoituksellinen live-tila ei ole P0-virhe eikä Italian lähdeaineistossa ole duplikaatti-P0:aa. Italian turvallinen locale-julkaisuportti toteutetaan ennen preview-tuontia; sen toteutunut tila dokumentoidaan korjausraportissa.

**Muutettavat tiedostot:** `src/data/articleLocaleConfig.mjs`, `src/data/articleLocales.mjs`, `src/data/articlePaths.mjs`, `src/content.config.ts`, dynaamiset locale-reitit, `astro.config.mjs`, `scripts/import-runcheck-articles.mjs` ja regressiotestit.

**Automatisointi:** locale-sopimus, build-portti, sitemap-suodatus ja regressiotestit voidaan automatisoida.

**Vaikutus:** erittäin suuri. Estää Italian tai myöhempien localejen vahingossa tapahtuvan indeksoitavan julkaisun.

**Riski:** pieni nykyisille localeille, kun kahdeksan julkaistua localea säilytetään eksplisiittisesti muuttumattomina.

**Validointi:** build, kaikki locale-rootit, sitemap, robots, canonical, täydet hreflang-ryhmät, HTTP-statukset, GSC URL Inspection ja sitemap-tila.

### 2. Koko kieliversioon vaikuttavat P1-virheet

**Muutettavat tiedostot:** 12 `prosenttia`-slugilla julkaistua Markdown-tiedostoa sekä tarvittava redirect-konfiguraatio; es-ES source 123:n tiedosto ja redirect, jos URL päätetään vaihtaa. Lisäksi slug-generoinnin locale-kohtainen prosenttisääntö `scripts/import-runcheck-articles.mjs`.

**Automatisointi:** uusien slugien validointi voidaan automatisoida. Julkaistujen URL:ien rename ei ole turvallinen massatoimi.

**Vaikutus:** kohtalainen. Poistaa vääränkielisen sanan URL:sta ja ehkäisee uusien virheiden syntymisen.

**Riski:** korkea URL-riski, pieni sisältöriski. Ilman GSC-dataa nykyisiä URL:eja ei pidä nimetä uudelleen automaattisesti.

**Validointi:** yksi-yhteen 301, uusi self-canonical, päivitetty hreflang, sitemap ja sisälinkit; vanha URL ei saa ketjuttaa redirectiä.

### 3. 10–20 tärkeintä artikkelia per locale

**Muutettavat tiedostot:** yllä olevan 18 sourceNumberin locale-vastineet, ensisijaisesti `metaTitle`, `metaDescription`, `listSummary` ja harkitut sisälinkit. H1/URL jätetään ennalleen ilman vahvaa näyttöä.

**Automatisointi:** ehdokkaiden poiminta ja termitarkastus kyllä; lopullinen copy ei.

**Vaikutus:** todennäköisesti suuri suhteessa työmäärään, koska ryhmä kattaa ydinhaut ja kaupallisen intentin.

**Riski:** pieni, jos URL:t ja H1:t eivät muutu. CTR voi heikentyä, jos titleä muutetaan ilman query-dataa, joten muutokset vaiheistetaan ja mitataan.

**Validointi:** natiivilukija, title/H1-intentti, description-pituus ilman mekaanista merkkirajaa, build, rendered HTML ja myöhemmin 28–56 päivän GSC-seuranta.

### 4. Espanjan julkaistun version rajatut korjaukset

**Muutettavat tiedostot:** source 123:n slug ja pysyvä redirect tässä vaiheessa. 92 `listSummary`-arvoa, source 1:n tagit ja muu SEO-copy jätetään seuraavaan vaiheeseen.

**Automatisointi:** listSummary-ehdotusten generointi ja duplikaattien hash-tarkistus kyllä. Lopullinen copy ja slug-päätös käsin.

**Vaikutus:** kohtalainen; korjaa yhden katkenneen julkaistun URL:n hallittuna migraationa.

**Riski:** URL-riski hallitaan suoralla yksi-yhteen 301:llä, self-canonicalilla, hreflang- ja sitemap-päivityksellä.

**Validointi:** `es-ES-prepublication-review.md`-portti, kaikki 160 sourceNumberia, paikallinen natiivitarkistus, build, 160 canonicalia, 160 hreflang-ryhmää, sitemap ja GSC URL Inspection.

### 5. Loput P2- ja P3-parannukset GSC-datan perusteella

**Muutettavat tiedostot:** jäljellä olevat localized Markdown -tiedostot, erityisesti 586 listSummary-riviä ja klusterikohtaiset sisälinkit.

**Automatisointi:** ehdokaslistat ja linkkikohteet voidaan tuottaa sourceNumber/hub-rakenteesta. Copy tarkistetaan käsin.

**Vaikutus:** keskisuuri kokonaisuutena, mutta yksittäisen sivun vaikutus vaihtelee.

**Riski:** pieni ilman URL-muutoksia. Liiallinen geneerinen linkitys tai ankkurien toisto voi heikentää laatua.

**Validointi:** broken-link-testi, locale-kohteen tarkistus, crawl, title/description-renderöinti ja GSC page × query × country -vertailu.

## GSC-aineiston seuraava vähimmäisvienti

Kun data on saatavilla, vie vähintään 16 kuukauden ja viimeisten 3 kuukauden vertailut seuraavilla dimensioilla:

- page
- query
- country
- clicks
- impressions
- CTR
- average position

Analysoi page-tasolla, koska Search Console kohdistaa suuren osan datasta canonical-URL:iin ja property-tason aggregointi voi peittää kieliversioiden välisen kilpailun. Ensimmäiset suodattimet:

- impressions korkea, CTR matala
- position 4–30
- kaksi saman localen URL:ia samalla queryllä
- locale-URL saa näyttöjä väärästä maasta
- queryn päätermi puuttuu title/H1:stä

## Raporttitiedostot

- `reports/seo-localization-summary.md`
- `reports/seo-localization-findings.csv`
- `reports/seo-keyword-map.csv`
- `reports/seo-technical-findings.csv`
- `reports/es-ES-prepublication-review.md`
