# it-IT-artikkelien julkaisua edeltävä tarkistus

Päiväys: 15.7.2026  
Tila: preview-valmis, ei julkaistu tuotantoon

## Päätös

**READY FOR PUBLICATION** teknisen ja lokalisoinnin laatukynnyksen osalta.

Päätös ei julkaise Italiaa. Tuotantojulkaisu vaatii edelleen erillisen, eksplisiittisen `productionPublished`-portin muutoksen, uuden tuotantobuildin ja käyttäjän julkaisupäätöksen.

## Lähdeaineiston eheys

- Tiedostoja: **160**
- Uniikkeja source ID:itä: **160**
- ID-alue: **1–160**, jokainen tasan kerran
- Puuttuvat ID:t: ei ole
- Ylimääräiset ID:t: ei ole
- Duplikaatit: ei ole
- UTF-8: kaikki tiedostot valideja
- Frontmatter: 159 lähdetiedostossa normaali YAML-frontmatter; ID 1 käyttää tuontityökalun tukemaa frontmattertonta lähdemuotoa. Kaikki 160 generoituivat validilla kokoelmametadata-skeemalla.
- Lähdepariteetti: tiedostonimi ja source ID vastaavat englanninkielistä lähdetiedostoa; otsikkotasojen sarjat ja Markdown-linkkikohteet vastaavat ID-kohtaisia lähteitä.

Tarkistus: `node --test scripts/italian-source-integrity.test.mjs` — PASS.

## Korjattu lähdepariteettivirhe

Source ID 113:n otsikko oli vahingossa sama kuin ID 112:n, vaikka englanninkielinen lähde erottaa diagnostiikkakoodien luettelon ja merkeittäiset huoltokoodit. ID 113 korjattiin sekä it-IT-lähteessä että preview-sisällössä muotoon:

> Codici di servizio Android per marca: quali funzionano ancora

Leipätekstiä ei muutettu. Korjaus poisti title/H1-kannibalisaation ja vastaa jo artikkelissa käytettyä `codici di servizio` -käsitettä.

## Terminologia ja alueellinen kielimuoto

Korpus tarkistettiin `runcheck-translation-profile-it-IT.md`-profiilia vasten ja automatisoiduilla koko korpuksen termeillä.

- `stato della batteria` on ensisijainen yleistermi; `integrità della batteria` esiintyy vain virallisen Pixel-käyttöliittymän yhteydessä.
- `capacità nominale`, `punteggio di stato`, `memoria interna`, `ripristino dei dati di fabbrica` ja `modalità provvisoria` ovat yhdenmukaisia.
- Englanniksi jääneitä leipätekstikappaleita: 0 automaattisella tunnistuksella.
- Espanjan tai muun alueellisen kielimuodon sekoittumista ei löytynyt.
- Em dash -merkkejä ei löytynyt.
- Hakumääriä tai keksittyä avainsanadataa ei käytetty.

Virallinen terminologianäyttö:

- Google Pixel käyttää italiaksi ilmauksia `Integrità della batteria` ja `Ottimizzazione ricarica`: https://support.google.com/pixelphone/answer/15738128?hl=it
- Googlen italian latausohje käyttää järjestelmän lataus- ja akkuterminologiaa: https://support.google.com/pixelphone/answer/6090612?hl=it
- Samsung Italia käyttää ilmauksia `Stato batteria` ja Samsung Members -polkua: https://www.samsung.com/it/support/mobile-devices/how-to-check-the-battery-status-on-your-samsung-galaxy-phone/
- Googlen Android Enterprise -ohje käyttää Factory Reset Protection -termiä italian kontekstissa: https://support.google.com/work/android/answer/14549362?hl=it

## Tekninen metadata

Kaikissa 160 preview-artikkelissa on:

- locale `it`
- title ja renderöity H1
- description
- artikkelikohtainen listSummary
- validi hub, sourceNumber, order ja lokalisoitu tagijoukko
- yksilöllinen locale-haaran slug
- self-canonical preview-URL:iin
- `<html lang="it">`
- `noindex, nofollow` preview-buildissä

Tuotantobuild ei generoi `/it/`-reittejä. Italia ei esiinny tuotannon sitemapissa, hreflang-ryhmissä eikä navigaatiossa.

## Slugit

- Kaikki 160 slugia ovat yksilöllisiä.
- Enimmäispituus on 90 merkkiä, eikä raja katkaise sanaa.
- Katkaisun jälkeen loppuun ei jää irrallista italian stopwordia.
- Prosentti lokalisoituu muotoon `per-cento`.
- ID 113 käyttää source-kohtaista, merkityksellistä erottelua ID 112:sta.
- Slugien determinismi ja törmäysportti on testattu importerissa.

## listSummary

- Arvoja: 160/160
- Tyhjiä arvoja: 0
- Tagiluettelon kanssa identtisiä arvoja: 0
- Otsikon kanssa identtisiä arvoja: 0
- Pituus: enintään 109 merkkiä
- Arvot muodostetaan artikkelikohtaisesta lähdeyhteenvedosta tai ensimmäisestä luonnollisesta sisältölauseesta, ei tageista.

Muutos koskee uusia tuonteja. Se ei päivitä 586 olemassa olevaa julkaistua `listSummary`-arvoa.

## Julkaisemista estävät ongelmat

Ei avoimia estäviä ongelmia automaattisen ja lähdepariteettitarkistuksen jälkeen.

## Manuaalinen pistokoe ennen tuotantoportin avaamista

Seuraavat artikkelit eivät estä teknistä READY-päätöstä, mutta niiden nopeasti vanhenevat valmistaja-, hinta-, operaattori- tai markkinaväitteet kannattaa tarkistaa juuri ennen julkaisua:

- ID 25: batterystats/Battery Historian -menetelmien nykytila
- ID 50: vuoteen 2026 sidottu latausohje
- ID 94 ja 101: Italian 5G-peitto, taajuudet ja laitetuki
- ID 100: Wi-Fi-puheluiden operaattorituki Italiassa
- ID 123: valmistajien ajantasaiset Android-tukijaksot
- ID 138 ja 139: sovellusvertailujen nykyiset ominaisuudet
- ID 142 ja 144: korjaus-, jälleenmyynti- ja vaihtohinnat euroissa
- ID 153–160: valmistajakohtaiset valikkopolut, koodit ja diagnostiikkaominaisuudet

Näille ei ole tässä tarkistuksessa keksitty hakumääriä eikä oletettu muuttunutta markkinadataa.

## Validointi

- `node --test scripts/italian-source-integrity.test.mjs` — PASS
- `node --test scripts/italian-articles.test.mjs` — PASS
- `RUNCHECK_PREVIEW_ARTICLE_LOCALES=it npm run build` — PASS, 1 567 sivua yhteensä
- `node --test scripts/italian-preview-build.test.mjs` — PASS, 160 Italian noindex-artikkelia, 0 Italian sitemap-URL:ia

