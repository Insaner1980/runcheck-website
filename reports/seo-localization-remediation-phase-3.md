# Runcheckin monikielisen SEO-lokalisoinnin korjausvaihe 3

Päivä: 2026-07-15  
Tila: toteutettu ja validoitu  
Deploy: ei tehty  
Italian tuotantoportti: suljettu

## Yhteenveto

- Neljä raportin `REVISION RECOMMENDED` -muutosta toteutettiin täsmällisesti.
- CSV:stä löytyi 9 valmista `metaTitle`-ehdotusta ja 3 valmista `metaDescription`-ehdotusta. Kaikki HIGH- tai MEDIUM-luottamuksen julkaistuja sivuja koskevat ehdotukset toteutettiin.
- Täsmälleen 53 prioriteettiartikkelin tagiluettelomainen `listSummary` korvattiin yhdellä luonnollisella, artikkelikohtaisella virkkeellä.
- Muut 533 tagiluettelomaista `listSummary`-arvoa jätettiin tarkoituksella ennalleen.
- Italian source 123:n title, H1, metaTitle ja preview-slug jätettiin ennalleen, koska näyttö jäi MEDIUM-tasolle eikä käytettävissä ole query-dataa tai ihmisen tekemää it-IT-natiivitarkistusta.
- Search Console -CSV-analyysipolku, tyhjä tuontimalli, dokumentaatio, synteettinen testiaineisto ja testit lisättiin.
- Kannibalisaatiohypoteesien perusteella ei tehty sisältö-, canonical-, slug-, redirect- tai poistomuutoksia.

## Neljä REVISION RECOMMENDED -sivua

H1 muodostuu artikkelin `title`-kentästä, joten sama ennen/jälkeen-arvo koskee molempia.

| Locale / ID | Kenttä | Ennen | Jälkeen |
|---|---|---|---|
| fi-FI / 122 | title + H1 | `Näin tarkistat Androidin tietoturvakorjaukset` | `Näin tarkistat Androidin tietoturvapäivitykset` |
| fi-FI / 122 | metaTitle | ei arvoa | `Androidin tietoturvapäivitysten tarkistaminen` |
| fi-FI / 122 | geneerinen H2 | `Mistä korjauspäivämäärä löytyy` | `Mistä tietoturvapäivityksen päivämäärä löytyy` |
| fi-FI / 122 | geneerinen H2 | `Kuinka tuore korjaustason pitäisi olla?` | `Kuinka tuore tietoturvapäivityksen pitäisi olla?` |
| sv-SE / 122 | title + H1 | `Så kontrollerar du Androids säkerhetskorrigeringar` | `Så kontrollerar du Androids säkerhetsuppdateringar` |
| sv-SE / 122 | metaTitle | ei arvoa | `Kontrollera Androids säkerhetsuppdateringar` |
| sv-SE / 122 | geneerinen H2 | `Hur aktuell bör korrigeringen vara?` | `Hur aktuell bör säkerhetsuppdateringen vara?` |
| fr-FR / 123 | title + H1 | `Mon téléphone est-il encore pris en charge ? Vérifier le cycle de suivi et de sécurité Android` | `Votre téléphone est-il encore pris en charge ? Vérifier la durée du suivi logiciel et des mises à jour de sécurité` |
| fr-FR / 123 | metaTitle | ei arvoa | `Votre téléphone Android est-il encore pris en charge ?` |
| es-ES / 123 | title + H1 | `¿Sigue teniendo soporte mi móvil? Cómo comprobar el ciclo de actualizaciones y seguridad de Android` | `¿Sigue teniendo soporte tu móvil? Cómo comprobar el periodo de soporte y las actualizaciones de seguridad` |
| es-ES / 123 | metaTitle | ei arvoa | `¿Sigue teniendo soporte tu móvil Android?` |
| es-ES / 123 | metaDescription | ei arvoa | `Comprueba hasta cuándo recibe tu móvil Android actualizaciones del sistema y parches de seguridad, y qué hacer cuando termina el soporte.` |

Fi- ja sv-artikkeleissa varmennetut patch level -merkitykset sekä Androidin täsmälliset UI-termit säilytettiin. Fr- ja es-artikkelien introihin, H2-otsikoihin ja leipätekstiin ei tehty muutoksia. Yhdenkään julkaistun sivun slug tai URL ei muuttunut.

## Muut eksplisiittiset metadataehdotukset

| Locale / ID | metaTitle | metaDescription |
|---|---|---|
| es-ES / 1 | `Comprobar el estado de un móvil Android` | `Comprueba batería, almacenamiento, temperatura, red, sensores y rendimiento para saber si tu móvil Android está en buen estado.` |
| es-ES / 11 | `Cómo comprobar el estado de la batería en Android` | `Aprende a comprobar el estado y la capacidad de la batería en Android y a reconocer las señales de una batería deteriorada.` |
| es-ES / 21 | `Por qué la batería del móvil se agota rápido` | KEEP |
| es-ES / 53 | `Por qué se sobrecalienta tu móvil Android` | KEEP |
| es-ES / 104 | `Cómo probar el hardware de un móvil Android (2026)` | KEEP |

Yhdessä neljän REVISION-rivin kanssa toteutettu kokonaismäärä on 9 `metaTitle`- ja 3 `metaDescription`-muutosta. MINOR-rivien title/H1-arvoja ei muutettu.

## ListSummary-pilotti

| Locale | Korjatut source ID:t | Määrä | Jäljelle jäävät tagiluettelot |
|---|---|---:|---:|
| fi-FI | 4, 6, 48, 53, 80, 87, 138, 159 | 8 | 70 |
| sv-SE | 4, 6, 48, 80, 87, 122, 159 | 7 | 69 |
| nb-NO | 2, 4, 48, 53, 87, 138, 159 | 7 | 65 |
| da-DK | 4, 48, 87, 122, 138, 159 | 6 | 73 |
| de-DE | 2, 4, 6, 48, 53, 80, 87, 122, 123, 138 | 10 | 79 |
| fr-FR | 4, 6, 48, 53, 87, 91, 122 | 7 | 93 |
| es-ES | 4, 48, 53, 80, 87, 122, 123, 138 | 8 | 84 |
| **Yhteensä** |  | **53** | **533** |

Jokainen uusi arvo:

- on yksi päättyvällä välimerkillä varustettu virke
- on enintään 110 merkkiä; suomalaiset pilottilauseet ovat myös nykyisen 72 merkin testirajan sisällä
- perustuu artikkelin titleen, descriptioniin, introon ja H2-rakenteeseen
- erottaa artikkelin saman klusterin lähisivuista
- käyttää locale-profiilin päätermejä
- ei sisällä tagiluettelon rakennetta, markkinointiväitettä, uutta faktaväitettä, em dashia tai keskitettyä piste-erotinta

Pilotissa havaittiin, että tagiluettelot peittivät erityisesti korjaus-vai-vaihto-, latausvika-, ylikuumenemis-, tallennustila-, diagnostiikkasovellus- ja valmistajavalikkoartikkelien erilaiset intentit. Joidenkin artikkeleiden description alkoi lähdeaineistosta jääneellä `Metakuvaus`-/`Meta description`-sanalla tai oli liian narratiivinen korttitekstiksi. Näitä descriptioneja ei muutettu, vaan `listSummary` kirjoitettiin artikkelin varsinaisen aiheen perusteella.

## Italian source 123

Tarkistetut vaihtoehdot:

- nykyinen title/H1: `Il mio smartphone è ancora supportato? Come verificare il ciclo degli aggiornamenti e del supporto di sicurezza Android`
- raportin ehdotus: `Lo smartphone è ancora supportato? Come verificare il periodo di supporto software e gli aggiornamenti di sicurezza`
- mahdollinen lyhyt metaTitle: `Il tuo smartphone Android riceve ancora aggiornamenti?`
- ehdotettu preview-slug: `smartphone-android-supporto-software-aggiornamenti-sicurezza`

Viralliset italiankieliset Google-lähteet käyttävät luonnollisesti käsitteitä `aggiornamenti software`, `aggiornamenti della sicurezza`, `supportato` ja päivitysjaksojen kuvauksia:

- https://support.google.com/android/answer/7680439?hl=it
- https://support.google.com/pixelphone/answer/4457705?hl=it

Nykyinen ja ehdotettu muoto säilyttävät lähteen hakuintentin ja ovat molemmat hyväksyttäviä. Ilman Search Console -kyselydataa tai ihmisen natiivia it-IT-hyväksyntää näyttö ei noussut MEDIUM-tasolta HIGH-tasolle. Siksi titleä, H1:tä, metaTitleä ja preview-slugia ei muutettu. Codexin tarkistusta ei merkitty ihmisen tekemäksi natiivitarkistukseksi. `productionPublished` pysyy arvossa `false`.

## Search Console -analyysipolku

Lisätty sovellus `scripts/analyze-search-console-locales.mjs`:

- validoi kaikki 10 vaadittua CSV-saraketta ja metriikka-arvot
- hyväksyy CTR:n desimaalina tai prosenttina
- tunnistaa julkaistun localen URL-juuresta
- yhdistää nykyisen article-URL:n `sourceNumber`-arvoon
- raportoi tuntemattomat URL:t
- tunnistaa käyttäjän määrittämillä rajoilla korkeat näyttökerrat + matalan CTR:n, sijoitusvälin, saman localen query × usea URL -ryhmät ja maaristiriidat
- vertaa queryn ydintermejä title/H1:een ja `localized-keyword-map-v2.csv`:n validoituihin termeihin
- ei tee automaattisia sisältömuutoksia

Kaikki liiketoimintarajat annetaan komentorivillä: `--min-impressions`, `--max-ctr`, `--min-position`, `--max-position` ja `--min-country-impressions`.

Koska oikeaa GSC-dataa ei ole, neljä raporttia luotiin tyhjällä malliajolla. Ne sisältävät vain otsikot ja asetetun lähtötilan, eivät synteettisiä tuotantolukuja:

- `reports/gsc-localization-opportunities.csv`
- `reports/gsc-cannibalization-evidence.csv`
- `reports/gsc-country-mismatch.csv`
- `reports/gsc-localization-summary.md`

Synteettiset numerot esiintyvät vain tiedostossa `scripts/fixtures/search-console-locales.synthetic.csv` ja sen testissä. Virallinen Search Console -dimensio-, vienti- ja API-dokumentaatio on kirjattu tiedostoon `docs/search-console-localization-analysis.md`.

## Validointi

### Läpäistyt portit

- `npm run build`: PASS, 1 393 staattista sivua
- `node --test scripts/published-article-regression.test.mjs ...`: PASS, 18 testiä
- `node scripts/seo-metadata.test.mjs`: PASS
- `node --test scripts/seo-localization-phase-3.test.mjs`: PASS, 6 testiä
- `npm run test:gsc-locales`: PASS, 3 testiä

Todennetut asiat:

- kaikki 1 280 julkaistua artikkelia rakentuvat, 160 per locale
- julkaistujen article-sivujen määrä ja source ID:t säilyvät
- canonical vastaa jokaista rakennettua URL:ia
- kaikki kahdeksan julkaistua hreflang-versiota ja `x-default` säilyvät
- sitemap sisältää nykyiset URL:t eikä vanhoja migraatiopolkuja
- neljä H1/title-muutosta näkyvät renderöidyssä HTML:ssä
- kaikki 9 metaTitle- ja 3 metaDescription-muutosta näkyvät renderöidyssä HTML:ssä
- 53 pilotin `listSummary`-arvoa eivät enää ole tagiluetteloita
- 533 muuta tagiluetteloa ovat edelleen ennallaan
- Italian tuotantoreittejä ei ole `dist/it`-hakemistossa tai sitemapissa, eikä tuotannon hreflang-ryhmissä ole `it`-linkkiä
- GSC-skripti läpäisee validi-, virheellinen sarake-, tuntematon URL-, locale-, kannibalisaatio- ja maaristiriitatestit

`seo-metadata.test.mjs` raportoi 152 yli 70 merkin title-varoitusta ja 4 alle 70 merkin description-varoitusta. Ne ovat varoituksia, eivät testivirheitä, ja valtaosa koskee tämän tehtävän ulkopuolisia sivuja. Niiden perusteella ei tehty uusia muutoksia ilman GSC-näyttöä.

### Vanhat testit, joita ei muutettu

Kaksi nykyiseen projektiarkkitehtuuriin nähden vanhentunutta yleistä testiä epäonnistuu jo ennen tämän vaiheen väitteiden tarkistusta:

- `scripts/articles-content.test.mjs` laskee kaikki muut localet paitsi `fi` englannin 160 artikkelin joukkoon ja odottaa siksi virheellisesti kokonaismäärää 160 nykyisen 1 280:n sijasta; seuraava odotus rajaa suomalaisen summaryn 72 merkkiin, vaikka yhteinen localized-testi käyttää 110 merkkiä.
- `scripts/articles-list-style.test.mjs` etsii indeksin jaettua markuppia ohuesta route-tiedostosta ja kieltää nykyisessä käyttäjän muokkaamassa korttityylissä olevan reunuksen.

Näitä testejä ei muutettu, koska niiden korjaaminen laajentaisi tehtävän nykyiseen UI- ja testisopimukseen. Vaihe 3:n omat testit ja nykyiset julkaisu-, locale-, slug-, sitemap-, canonical-, hreflang- ja metadataregressiot läpäisevät.

## Tarkoituksella myöhemmäksi jätetyt asiat

- jäljellä olevat 533 `listSummary`-arvoa
- laaja sisäinen linkitys
- kaikki kannibalisaatiohypoteesien sisältö-, canonical-, slug-, redirect-, yhdistämis- tai poistotoimet
- muut title-, H1-, intro-, H2- ja leipätekstimuutokset
- Italian natiivitarkistus ja tuotantoportin avaaminen
- GSC-pohjaiset sisältöpäätökset, kunnes oikea page × query × country × device -aineisto on saatavilla
- tuotantodeploy

## Kaikki tässä vaiheessa muuttuneet sisältötiedostot

| Locale | ID | Muutos | Tiedosto |
|---|---:|---|---|
| da | 4 | listSummary | `src/content/articles/da/buying-selling/hvornar-bor-du-udskifte-telefonen-i-stedet-for-at-reparere-den.md` |
| da | 48 | listSummary | `src/content/articles/da/charging/telefonen-vil-ikke-lade-op-sadan-finder-du-opladningsfejlen.md` |
| da | 87 | listSummary | `src/content/articles/da/storage/derfor-siger-telefonen-at-lagerpladsen-er-fuld-selv-om-den-ikke-er-det.md` |
| da | 122 | listSummary | `src/content/articles/da/software/sadan-tjekker-du-androids-sikkerhedsopdateringer.md` |
| da | 138 | listSummary | `src/content/articles/da/device-health/sammenligning-af-de-bedste-diagnoseapps-til-android-2026.md` |
| da | 159 | listSummary | `src/content/articles/da/brands/xiaomi-cit-menuen-skjulte-hardwaretests-til-xiaomi-redmi-og-poco.md` |
| de | 2 | listSummary | `src/content/articles/de/buying-selling/so-prufst-du-ob-ein-gebrauchtes-android-smartphone-in-gutem-zustand-ist.md` |
| de | 4 | listSummary | `src/content/articles/de/buying-selling/wann-solltest-du-dein-smartphone-ersetzen-und-wann-reparieren-lassen.md` |
| de | 6 | listSummary | `src/content/articles/de/buying-selling/was-du-vor-dem-kauf-eines-gebrauchten-android-smartphones-prufen-solltest.md` |
| de | 48 | listSummary | `src/content/articles/de/charging/smartphone-ladt-nicht-so-findest-du-die-ursache.md` |
| de | 53 | listSummary | `src/content/articles/de/thermal/warum-dein-android-smartphone-uberhitzt-und-wie-du-seine-temperatur-prufst.md` |
| de | 80 | listSummary | `src/content/articles/de/storage/so-prufst-du-den-speicherzustand-unter-android.md` |
| de | 87 | listSummary | `src/content/articles/de/storage/warum-dein-smartphone-vollen-speicher-meldet-obwohl-noch-platz-frei-zu-sein-scheint.md` |
| de | 122 | listSummary | `src/content/articles/de/software/so-prufst-du-android-sicherheitspatches.md` |
| de | 123 | listSummary | `src/content/articles/de/software/wird-mein-smartphone-noch-unterstutzt-so-prufst-du-den-android-und-sicherheits-support.md` |
| de | 138 | listSummary | `src/content/articles/de/device-health/die-besten-android-diagnose-apps-im-vergleich-2026.md` |
| es | 1 | metadata | `src/content/articles/es/device-health/comprobacion-del-estado-de-un-dispositivo-android-como-saber-si-tu-movil-esta-en-buenas.md` |
| es | 4 | listSummary | `src/content/articles/es/buying-selling/cuando-conviene-cambiar-el-movil-y-cuando-repararlo.md` |
| es | 11 | metadata | `src/content/articles/es/battery/como-comprobar-el-estado-de-la-bateria-en-android-y-detectar-una-bateria-deteriorada.md` |
| es | 21 | metadata | `src/content/articles/es/battery/por-que-la-bateria-de-tu-movil-se-agota-tan-rapido-guia-practica-de-diagnostico-en-android.md` |
| es | 48 | listSummary | `src/content/articles/es/charging/el-movil-no-carga-como-diagnosticar-problemas-de-carga.md` |
| es | 53 | listSummary, metadata | `src/content/articles/es/thermal/por-que-se-sobrecalienta-tu-movil-android-y-como-comprobar-su-temperatura.md` |
| es | 80 | listSummary | `src/content/articles/es/storage/como-comprobar-el-estado-del-almacenamiento-en-android.md` |
| es | 87 | listSummary | `src/content/articles/es/storage/por-que-el-movil-dice-que-el-almacenamiento-esta-lleno-cuando-no-lo-parece.md` |
| es | 104 | metadata | `src/content/articles/es/hardware/como-probar-el-hardware-de-un-movil-android-guia-completa-de-diagnostico-2026.md` |
| es | 122 | listSummary | `src/content/articles/es/software/como-comprobar-los-parches-de-seguridad-de-android.md` |
| es | 123 | listSummary, REVISION, metadata | `src/content/articles/es/software/soporte-actualizaciones-seguridad-movil-android.md` |
| es | 138 | listSummary | `src/content/articles/es/device-health/comparativa-de-las-mejores-aplicaciones-de-diagnostico-para-android-2026.md` |
| fi | 4 | listSummary | `src/content/articles/fi/buying-selling/milloin-puhelin-kannattaa-korjata-ja-milloin-vaihtaa-uuteen.md` |
| fi | 6 | listSummary | `src/content/articles/fi/buying-selling/mita-tarkistaa-ennen-kaytetyn-android-puhelimen-ostamista.md` |
| fi | 48 | listSummary | `src/content/articles/fi/charging/puhelin-ei-lataudu-nain-selvitat-latausongelman.md` |
| fi | 53 | listSummary | `src/content/articles/fi/thermal/miksi-android-puhelin-ylikuumenee-ja-miten-sen-lampotilan-voi-tarkistaa.md` |
| fi | 80 | listSummary | `src/content/articles/fi/storage/nain-tarkistat-android-puhelimen-tallennustilan-kunnon.md` |
| fi | 87 | listSummary | `src/content/articles/fi/storage/miksi-puhelin-vaittaa-tallennustilan-olevan-taynna-vaikka-se-ei-nayta-silta.md` |
| fi | 122 | REVISION, metadata | `src/content/articles/fi/software/nain-tarkistat-androidin-tietoturvakorjaukset.md` |
| fi | 138 | listSummary | `src/content/articles/fi/device-health/parhaat-android-diagnostiikkasovellukset-vertailussa-2026.md` |
| fi | 159 | listSummary | `src/content/articles/fi/brands/xiaomin-cit-valikko-piilotetut-laitteistotestit-xiaomi-redmi-ja-poco-laitteille.md` |
| fr | 4 | listSummary | `src/content/articles/fr/buying-selling/quand-faut-il-remplacer-votre-telephone-plutot-que-le-reparer.md` |
| fr | 6 | listSummary | `src/content/articles/fr/buying-selling/que-verifier-avant-d-acheter-un-smartphone-android-d-occasion.md` |
| fr | 48 | listSummary | `src/content/articles/fr/charging/le-telephone-ne-se-recharge-pas-comment-diagnostiquer-le-probleme.md` |
| fr | 53 | listSummary | `src/content/articles/fr/thermal/pourquoi-votre-telephone-android-surchauffe-et-comment-verifier-sa-temperature.md` |
| fr | 87 | listSummary | `src/content/articles/fr/storage/pourquoi-votre-telephone-indique-que-le-stockage-est-plein-alors-qu-il-ne-l-est-pas.md` |
| fr | 91 | listSummary | `src/content/articles/fr/network/pourquoi-la-connexion-internet-de-mon-telephone-est-elle-si-lente.md` |
| fr | 122 | listSummary | `src/content/articles/fr/software/comment-verifier-les-correctifs-de-securite-android.md` |
| fr | 123 | REVISION, metadata | `src/content/articles/fr/software/mon-telephone-est-il-encore-pris-en-charge-verifier-le-cycle-de-suivi-et-de-securite.md` |
| nb | 2 | listSummary | `src/content/articles/nb/buying-selling/slik-sjekker-du-om-en-brukt-android-telefon-er-i-god-stand.md` |
| nb | 4 | listSummary | `src/content/articles/nb/buying-selling/nar-bor-du-bytte-telefonen-og-nar-bor-du-reparere-den.md` |
| nb | 48 | listSummary | `src/content/articles/nb/charging/telefonen-lader-ikke-slik-finner-du-arsaken.md` |
| nb | 53 | listSummary | `src/content/articles/nb/thermal/hvorfor-android-telefonen-overopphetes-og-slik-sjekker-du-temperaturen.md` |
| nb | 87 | listSummary | `src/content/articles/nb/storage/hvorfor-telefonen-sier-at-lagringen-er-full-nar-den-ikke-ser-full-ut.md` |
| nb | 138 | listSummary | `src/content/articles/nb/device-health/de-beste-diagnoseappene-for-android-sammenlignet-2026.md` |
| nb | 159 | listSummary | `src/content/articles/nb/brands/xiaomi-cit-menyen-skjulte-maskinvaretester-for-xiaomi-redmi-og-poco.md` |
| sv | 4 | listSummary | `src/content/articles/sv/buying-selling/nar-bor-du-byta-telefon-i-stallet-for-att-reparera-den.md` |
| sv | 6 | listSummary | `src/content/articles/sv/buying-selling/det-har-bor-du-kontrollera-innan-du-koper-en-begagnad-android-telefon.md` |
| sv | 48 | listSummary | `src/content/articles/sv/charging/telefonen-laddar-inte-sa-felsoker-du-laddningsproblem.md` |
| sv | 80 | listSummary | `src/content/articles/sv/storage/sa-kontrollerar-du-lagringens-skick-i-android.md` |
| sv | 87 | listSummary | `src/content/articles/sv/storage/varfor-telefonen-sager-att-lagringsutrymmet-ar-fullt-fast-det-inte-ar-det.md` |
| sv | 122 | listSummary, REVISION, metadata | `src/content/articles/sv/software/sa-kontrollerar-du-androids-sakerhetskorrigeringar.md` |
| sv | 159 | listSummary | `src/content/articles/sv/brands/xiaomis-cit-meny-dolda-hardvarutester-for-xiaomi-redmi-och-poco.md` |

Sisältötiedostoja muuttui 59. Niistä 53 kuuluu listSummary-pilottiin; loput kuusi ovat fi/fr REVISION- tai es metadata-sivuja, jotka eivät kuuluneet listSummary-joukkoon.

## Muut tässä vaiheessa luodut tai muutetut tiedostot

- `package.json`
- `scripts/analyze-search-console-locales.mjs`
- `scripts/analyze-search-console-locales.test.mjs`
- `scripts/seo-localization-phase-3.test.mjs`
- `scripts/fixtures/search-console-locales.synthetic.csv`
- `docs/search-console-localization-analysis.md`
- `reports/search-console-import-template.csv`
- `reports/gsc-localization-opportunities.csv`
- `reports/gsc-cannibalization-evidence.csv`
- `reports/gsc-country-mismatch.csv`
- `reports/gsc-localization-summary.md`
- `reports/seo-localization-remediation-phase-3.md`

Muita työpuussa ennestään olleita muutoksia ei sisällytetty tähän vaiheeseen.
