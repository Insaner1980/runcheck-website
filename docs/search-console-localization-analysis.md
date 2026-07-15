# Search Console -lokalisointianalyysi

Tämä analyysipolku yhdistää Google Search Consolesta tuodut query × page × country × device -rivit Runcheckin julkaistuihin article-URL:eihin ja `sourceNumber`-arvoihin. Se tuottaa tutkimusraportteja, mutta ei muuta sisältöä, slugeja, canonicaleja, hreflang-linkkejä tai redirectejä.

## Tarvittava aineisto

CSV:n pitää sisältää seuraavat sarakkeet:

| Sarake | Sisältö |
|---|---|
| `page` | Search Consolen canonical-sivun täydellinen URL |
| `query` | Hakukysely |
| `country` | Maa, mieluiten API:n ISO-koodi kuten `FIN`, `SWE` tai `ESP` |
| `device` | `mobile`, `desktop` tai `tablet` |
| `clicks` | Klikkaukset |
| `impressions` | Näyttökerrat |
| `CTR` | Desimaalina `0.025` tai prosenttina `2.5%` |
| `average position` | Keskimääräinen sijoitus |
| `start date` | Ajanjakson alku muodossa `YYYY-MM-DD` |
| `end date` | Ajanjakson loppu muodossa `YYYY-MM-DD` |

Tyhjä mallipohja on tiedostossa `reports/search-console-import-template.csv`.

## Vienti Search Consolesta

Search Consolen Performance-raportin dimensiot ovat query, page, country, device ja date. Käyttöliittymästä voi viedä CSV:n, mutta käyttöliittymävienti sisältää vain näkyvän taulukon ja voi rajoittua 1 000 esimerkkiriviin. Yhdistettyä page × query × country × device -aineistoa varten suositeltu lähde on Search Analytics API tai vastaava vienti, joka säilyttää kaikki vaaditut dimensiot samalla rivillä.

Viralliset ohjeet:

- https://support.google.com/webmasters/answer/17011259
- https://support.google.com/webmasters/answer/12919797
- https://developers.google.com/webmaster-tools/v1/searchanalytics/query

Valitse riittävän pitkä, kokonaisista päivistä koostuva ajanjakso. Tallenna valmis CSV esimerkiksi polkuun `reports/gsc-export-2026-06.csv`. Älä korvaa mallipohjaa varsinaisella viennillä, jos haluat säilyttää sen uudelleenkäyttöä varten.

## Analyysin ajaminen

Raja-arvot annetaan aina komentorivillä. Skripti ei sisällä piilotettuja liiketoimintarajoja.

PowerShell-esimerkki:

```powershell
node scripts/analyze-search-console-locales.mjs `
  --input reports/gsc-export-2026-06.csv `
  --min-impressions 100 `
  --max-ctr 0.02 `
  --min-position 4 `
  --max-position 30 `
  --min-country-impressions 50
```

`--max-ctr 0.02` tarkoittaa kahden prosentin CTR-rajaa. Arvot ovat analyysiasetuksia, eivät Runcheckille ennalta päätettyjä tavoitteita. Valitse ne aineiston koon, ajanjakson ja päätöksen mukaan.

Valinnaiset parametrit:

- `--output-dir <hakemisto>`, oletus `reports`
- `--term-map <CSV>`, oletus `reports/localized-keyword-map-v2.csv`
- `--content-root <hakemisto>`, oletus `src/content/articles`
- `--site <origin>`, oletus `https://runcheckapp.com`

## Tuotetut raportit

- `reports/gsc-localization-opportunities.csv`: korkeat näyttökerrat ja matala CTR annetulla rajalla, sijoitusvälin osumat sekä termikartan ja title/H1:n heuristiset erot
- `reports/gsc-cannibalization-evidence.csv`: saman normalisoidun kyselyn saman localen useat URL:t
- `reports/gsc-country-mismatch.csv`: locale-URL:n kohdemarkkinan ulkopuoliset rivit annetulla näyttökertarajalla
- `reports/gsc-localization-summary.md`: asetukset, rivimäärät, tuntemattomat URL:t ja tulkintarajat

Skripti tunnistaa published locale -juuren URL:sta ja yhdistää täsmällisen nykyisen article-URL:n `sourceNumber`-arvoon. Tuntemattomat tai vanhat URL:t raportoidaan erikseen.

## Mitä tuloksista ei saa päätellä automaattisesti

- Yksi matala CTR-rivi ei todista, että title tai meta description on huono.
- Sijoitus 4-30 ei yksin tarkoita, että sivua pitää muuttaa.
- Sama query kahdella URL:lla ei yksin todista haitallista kannibalisaatiota.
- Ulkomaiset näyttökerrat eivät yksin todista locale-, hreflang- tai maakohdistusvirhettä.
- Kyselyn termiä ei pidä lisätä titleen exact-match-muodossa vain siksi, ettei se jo esiinny siinä.
- Search Console jättää anonymisoituja kyselyitä pois, ja käyttöliittymäviennit voivat olla typistettyjä.
- CTR:ää pitää tulkita yhdessä sijoituksen, laitteen, maan, hakuintentin ja ajanjakson kanssa.

Jokainen sisältömuutos vaatii erillisen lähde-, intentti- ja natiivitarkistuksen. Skripti ei tee automaattisia sisältömuutoksia.

## Testit

Testiaineisto `scripts/fixtures/search-console-locales.synthetic.csv` on kokonaan synteettistä eikä kuvaa Runcheckin todellista Search Console -suorituskykyä.

```powershell
node --test scripts/analyze-search-console-locales.test.mjs
```
