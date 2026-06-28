# Artikkelihaku — suunnitelma

Päivä: 2026-06-28
Aihe: Hakutoiminto runcheck-sivuston artikkeleille (160 kpl)

## Tavoite

Lisätä yksinkertainen, animoitu hakutoiminto, jolla käyttäjä löytää 160
artikkelin joukosta nopeasti oikean. Ulkoasu nojaa uiverse.io-esimerkkiin
(suurennuslasi + tekstikenttä + alaviiva), mutta ilman koristekuviota ja
ilman "signal query / telemetry / live index" -tekstejä. Haku aktivoituu
kirjoittamalla; Enter tai osuman klikkaus vie artikkeliin.

## Sijoittelu

Kaksi paikkaa, **yksi jaettu komponentti**:

1. **Header** (globaali, joka sivulla): suurennuslasi-ikoni `Articles`-linkin
   oikealla. Painallus laajentaa hakukentän animaatiolla. Tulokset
   pudotusvalikossa kentän alle.
2. **Articles-sivun yläosa** (`/articles`): sama komponentti aina auki -tilassa,
   isompana, otsikon `runcheck articles` alla.

## Arkkitehtuuri

### Hakuindeksi (yksi totuuden lähde)

- Uusi Astro-endpoint: `src/pages/articles/search-index.json.ts`
- Rakentaa käännösaikana `getCollection('articles', ({ data }) => !data.draft)`
  -datasta JSON-taulukon. Jokainen rivi:
  ```
  { title, description, hub, tags, url }
  ```
  missä `url = /articles/${hub}/${slug}/` ja `slug = id.split('/').at(-1)`.
- Kevyt (~20–30 kt). Haetaan selaimessa **kerran**, laiskasti (ensimmäisen
  fokuksen/näppäilyn yhteydessä), ja cachetetaan moduulimuuttujaan. Sama
  indeksi palvelee molempia komponenttiesiintymiä.

### Jaettu komponentti

- `src/components/ArticleSearch.astro` (markup + scoped `<script>`).
- Props:
  - `variant: 'header' | 'page'`
    - `header`: kollapsoituu suurennuslasi-ikoniksi, laajenee kentäksi
    - `page`: aina auki, suurempi kenttä
- Komponentti renderöi: ikoni-painike, tekstikenttä, alaviiva,
  tuloslistalle pudotusvalikko (`role="listbox"`, osumat `role="option"`).
- Skripti tukee useaa esiintymää samalla sivulla (querySelectorAll, per-instanssi
  tila — kuten nykyinen Header.astro-valikkoskripti tekee).

### Haku- ja suodatuslogiikka

- Ei ulkoisia kirjastoja. Yksinkertainen pisteytys:
  - Kysely normalisoidaan (trim, lowercase).
  - Osuma kun kysely `includes` jollain kentällä: otsikko, kuvaus, tagit.
  - Pisteytys: otsikko-osuma > tagiosuma > kuvausosuma; sama osuma sanan
    alussa painottuu hieman.
  - Lajitellaan pisteen mukaan, näytetään enintään **8** osumaa.

## Käyttäytyminen

- **Live-suodatus**: pudotusvalikko päivittyy kirjoittaessa.
- **Enter**: siirtyy korostettuun / ensimmäiseen osumaan (`location.href`).
- **Nuoli ylös/alas**: liikkuu tuloslistassa (aktiivinen `aria-selected`).
- **Esc**: tyhjentää/sulkee; headerissa palauttaa fokuksen ikoniin ja
  kollapsoi kentän.
- **Klikkaus ulkopuolelle**: sulkee (headerissa kollapsoi).
- **Headerin ikoni**: painallus avaa kentän ja fokusoi sen.

## Tyhjät tilat

- Tyhjä kysely: pudotusvalikko piilossa.
- Ei osumia: hillitty "No results" -rivi valikossa.

## Ulkoasu

- Suurennuslasi-SVG + tekstikenttä + alapuolinen viiva. Ei koristekuviota,
  ei lisätekstejä.
- Värit ja muodot olemassa olevista design-tokeneista: `run-*`-värit,
  `rounded-panel`, `shadow-panel`, `ring-run-border` (vrt. nykyinen
  artikkelivalikon paneeli Header.astrossa).
- Animaatio (`motion-safe`, kunnioittaa `prefers-reduced-motion`):
  - Header: kentän leveys + opacity liukuu auki kun ikonia painetaan;
    alaviiva piirtyy (scaleX 0→1).
  - Pudotusvalikko: opacity + pieni translate-y, kuten nykyinen
    artikkelivalikko.

## Saavutettavuus

- Ikoni-painikkeella `aria-label="Search articles"`, `aria-expanded`.
- Tekstikenttä `type="search"`, label (visuaalisesti piilotettu).
- Pudotusvalikko `role="listbox"`, osumat `role="option"`,
  `aria-activedescendant` korostukseen.
- Focus-visible-tilat samalla tyylillä kuin muu navigaatio.

## Tiedostot

- Uusi: `src/pages/articles/search-index.json.ts` (indeksi-endpoint)
- Uusi: `src/components/ArticleSearch.astro` (jaettu komponentti)
- Muokkaus: `src/components/Header.astro` (lisää `<ArticleSearch variant="header" />`)
- Muokkaus: `src/pages/articles/index.astro` (lisää `<ArticleSearch variant="page" />`)

## Testit

Projektissa on `scripts/*.test.mjs` -tyyliset testit. Lisätään:
- `scripts/article-search-index.test.mjs`: indeksin rakentuminen — kentät
  olemassa, url-muoto oikein, draftit pois, 160 ei-draft-artikkelia.
- (Valinnainen) suodatuslogiikan yksikkötesti jos logiikka eriytetään
  puhtaaksi funktioksi jaettavaksi skriptin ja testin kesken.

## Rajaukset (YAGNI)

- Ei koko tekstin hakua (vain otsikko + kuvaus + tagit).
- Ei erillistä hakutulossivua.
- Ei ulkoisia hakukirjastoja (Pagefind ym.).
- Ei hakuhistoriaa tai suosittujen ehdotuksia tyhjällä kentällä.
