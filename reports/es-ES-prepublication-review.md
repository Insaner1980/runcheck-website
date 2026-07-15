# es-ES-artikkelien SEO-katselmus

Auditointipäivä: 15.7.2026  
Arvioitu aineisto: 160 lähde-ID:tä, 162 Obsidian-tiedostoa ja 160 nykyistä `src/content/articles/es/`-tiedostoa

## Julkaisukelpoisuuden päätös

**Päätös: JULKAISUTILA HYVÄKSYTTY.** Espanjan `es-ES` on tarkoituksella julkaistu ja säilyy reiteissä, sitemapissa, hreflang-ryhmissä ja indeksoitavana.

Syy ei ole puuttuva tekninen metadata. Nykyiset 160 es-artikkelia ovat jo teknisesti ehjiä: niillä on title, H1, description, self-canonical, täydet vastavuoroiset hreflangit ja sitemap-merkinnät.

Nykyinen tarkoituksellinen live-tila on:

- `https://runcheckapp.com/es/articulos/` palauttaa HTTP 200
- kaikki 160 artikkelia syntyvät tuotanto-buildissä
- live-sitemapissa on 174 `/es/`-URL:ia
- sivut käyttävät `index,follow`-robotsia
- canonicalit osoittavat nykyisiin espanjankielisiin URL:eihin

URL:eja käsitellään julkaistuina. Source 123:n hyväksytty slug-korjaus toteutetaan yksi-yhteen 301-migraationa; muita espanjankielisiä slugeja ei muuteta tässä vaiheessa.

## Aineiston eheys

### Obsidian-lähteet

- tiedostoja: 162
- uniikkeja lähdenumeroita: 160
- puuttuvia numeroita 1–160: 0
- kaksoiskappaleita: ID 95 ja ID 122
- molemmat kaksoisparit ovat tavutasolla identtisiä (sama SHA-256)
- 161 tiedostossa on frontmatter
- source 1:n tiedostossa ei ole frontmatteria

Identtiset duplikaatit eivät muuta tekstiä, mutta ne kannattaa poistaa ennen seuraavaa importtia, jotta yhden lähde-ID:n yksi lähdetiedosto -sääntö säilyy.

### Sivustolle generoitu aineisto

- 160/160 tiedostossa on pakollinen title
- 160/160 tiedostossa on description
- 160/160 tiedostossa on H1 renderöidyssä HTML:ssä
- 160/160 H1 vastaa frontmatterin titleä
- 160/160 sivulla on oikea `<html lang="es">`
- 160/160 canonical osoittaa omaan `/es/articulos/.../`-URL:iin
- 160/160 on sitemapissa
- 160/160 hreflang-ryhmää sisältää kaikki nykyiset kieliversiot ja englannin `x-default`-version
- URL-törmäyksiä: 0
- vahvistettuja englanniksi jääneitä leipätekstikappaleita: 0

## Espanjan espanja vs Latinalainen Amerikka

Locale-profiili edellyttää Espanjan espanjaa. Korpuksen automatisoitu alueellisten riskisanojen tarkistus antoi:

| Tarkistus | Tulos |
|---|---:|
| `celular` / `celulares` | 0 tiedostoa |
| `computadora` / `computadoras` | 0 tiedostoa |
| `aplicativo` | 0 tiedostoa |
| `pantallazo` | 0 tiedostoa |
| yleinen puhelintermi | `móvil` |
| Androidin asetussovellus | `Ajustes` silloin, kun kyse on varmennetusta UI-polusta |

`configuración` esiintyy yleiskielen merkityksessä, mutta sitä ei käytetä automaattisesti korvaamaan Espanjan Androidin `Ajustes`-UI-nimeä. Tätä ei ole luokiteltu aluevirheeksi.

Virallinen Googlen Espanjan ohje vahvistaa ydintermit `Estado de la batería`, `Capacidad de la batería`, `Ajustes` ja `Información del teléfono`: [Información sobre la batería de tu Pixel](https://support.google.com/pixelphone/answer/15738128?hl=es).

## Päätermien arvio

| English concept | Suositeltu es-ES-termi | Korpuksen tila | Päätös |
|---|---|---|---|
| battery health | `estado de la batería` | 304 osumaa | pidä pääterminä |
| battery capacity | `capacidad de la batería` | johdonmukainen | pidä |
| phone | `móvil` | johdonmukainen | pidä; `teléfono` sallittu kontekstissa |
| used phone | `móvil de segunda mano` | johdonmukainen | pidä |
| refurbished phone | `móvil reacondicionado` | johdonmukainen | pidä |
| factory reset | `restablecimiento de fábrica` | 90 osumaa | pidä; varmennettu UI voi käyttää pidempää muotoa |
| internal storage | `almacenamiento interno` | johdonmukainen | pidä |
| signal strength | `intensidad de la señal` | johdonmukainen | pidä |
| thermal throttling | `limitación térmica` ja selitys | johdonmukainen | pidä |

`salud de la batería` esiintyy kerran H2:ssa laajemmassa “akun pitkäaikainen hyvinvointi” -merkityksessä. Se ei kilpaile UI- tai päätermin kanssa, joten sitä ei tarvitse korvata mekaanisesti.

Hakumäärädataa ei ollut saatavilla. Termipäätös perustuu locale-profiiliin, koko korpuksen johdonmukaisuuteen ja viralliseen Espanjan espanjan Android/Pixel-sanastoon, ei keksittyihin volyymeihin.

## Title-, H1- ja SEO title -ehdotukset

Kaikissa artikkeleissa nykyinen title renderöityy myös H1:nä. Alla olevissa korkean intentin sivuissa H1 kannattaa säilyttää ja käyttää tarvittaessa erillistä `metaTitle`-kenttää lyhyempään SERP-otsikkoon. Nämä ovat keskivahvan luottamuksen toimituksellisia hypoteeseja, koska GSC query/CTR -dataa ei ollut.

| ID | Nykyinen title ja H1 | Suositeltu `metaTitle` | H1-suositus |
|---:|---|---|---|
| 1 | `Comprobación del estado de un dispositivo Android: cómo saber si tu móvil está en buenas condiciones` | `Comprobar el estado de un móvil Android` | pidä nykyinen |
| 11 | `Cómo comprobar el estado de la batería en Android y detectar una batería deteriorada` | `Cómo comprobar el estado de la batería en Android` | pidä nykyinen |
| 21 | `Por qué la batería de tu móvil se agota tan rápido: guía práctica de diagnóstico en Android` | `Por qué la batería del móvil se agota rápido` | pidä nykyinen |
| 53 | `Por qué se sobrecalienta tu móvil Android y cómo comprobar su temperatura` | `Por qué se sobrecalienta tu móvil Android` | pidä nykyinen |
| 104 | `Cómo probar el hardware de un móvil Android: guía completa de diagnóstico (2026)` | `Cómo probar el hardware de un móvil Android (2026)` | pidä nykyinen |
| 123 | `¿Sigue teniendo soporte mi móvil? Cómo comprobar el ciclo de actualizaciones y seguridad de Android` | `¿Sigue teniendo soporte tu móvil Android?` | pidä nykyinen |

Älä lisää näitä automaattisesti kaikkiin tiedostoihin. Vahvista ensin, että lyhyempi SEO title ei menetä queryä, joka näkyy GSC:ssä.

## Meta description -ehdotukset

Nykyinen toteutus käyttää `description`-arvoa myös meta descriptionin lähteenä ja lyhentää sen renderöinnissä. Se toimii teknisesti, mutta muutama tärkeä sivu alkaa narratiivisesti eikä ilmoita hakuintenttiä heti.

### Source 1

Nykyinen:

> Los móviles no se estropean de un día para otro. La batería pierde capacidad poco a poco. El almacenamiento se llena en segundo plano. La temperatura sube cada vez más con las mismas tareas. Cuando los síntomas ya son evidentes, como apagados inesperados, aplicaciones lentas o sobrecalentamiento durante un uso básico, el problema de fondo suele llevar meses desarrollándose.

Suositeltu erillinen `metaDescription`:

> Comprueba batería, almacenamiento, temperatura, red, sensores y rendimiento para saber si tu móvil Android está en buen estado.

### Source 11

Nykyinen alkaa oirekuvauksella:

> Una batería que empieza a fallar rara vez se anuncia con un apagado espectacular…

Suositeltu erillinen `metaDescription`:

> Aprende a comprobar el estado y la capacidad de la batería en Android y a reconocer las señales de una batería deteriorada.

### Source 123

Nykyinen alkaa yleisellä tilanteen kuvauksella:

> Tu móvil puede parecer completamente normal y haber superado ya su vida útil segura en cuanto a actualizaciones…

Suositeltu erillinen `metaDescription`:

> Comprueba hasta cuándo recibe tu móvil Android actualizaciones del sistema y parches de seguridad, y qué hacer cuando termina el soporte.

## H2-otsikot ja johdannot

Klusteritason tarkistus ei löytänyt järjestelmällistä väärää es-ES-päätermiä H2-otsikoissa tai johdannoissa. Tärkeimmät termit esiintyvät luontevasti:

- `estado de la batería`
- `capacidad de la batería`
- `almacenamiento interno`
- `intensidad de la señal`
- `restablecimiento de fábrica`
- `móvil de segunda mano`
- `móvil reacondicionado`

Ensimmäiseen käsin tarkistettavaan erään kuuluvat source-ID:t 1, 2, 4, 6, 7, 11, 21, 48, 53, 80, 87, 91, 104, 122, 123, 130, 138 ja 159. Tarkista niissä title/H1, ensimmäinen kappale, tärkeimmät H2:t ja mahdollinen uusi sisälinkitys yhdessä, jotta hakuintentti pysyy samana koko sivulla.

## Sisäiset linkit ja ankkuritekstit

160 es-artikkelin Markdown-rungosta löytyi 0 kontekstuaalista linkkiä toiseen Runcheck-artikkeliin. Vääränkielisiä kohteita ei siis löytynyt, mutta myöskään klusterin sisäistä linkitystä ei ole.

Suositus:

- muodosta linkkikohteet `sourceNumber`- ja hub-rakenteesta
- linkitä aina `/es/articulos/.../`-vastineeseen
- kirjoita ankkuri luonnolliseen Espanjan espanjaan
- vältä saman exact-match-ankkurin toistoa kaikissa artikkeleissa
- lisää vain linkki, joka auttaa lukijan seuraavaa kysymystä

Esimerkkejä hyväksyttävistä ankkurimalleista:

- `cómo comprobar el estado de la batería`
- `por qué la batería se agota tan rápido`
- `comprobar la intensidad de la señal`
- `qué revisar antes de comprar un móvil de segunda mano`

Nämä ovat ankkurimalleja, eivät valmiita massakorvauksia.

## ListSummary ja tagit

92/160 es-artikkelissa `listSummary` on kolmen tagin luettelo, esimerkiksi:

```text
android, actualizaciones y seguridad
```

Tämä ei ole hyvä artikkelikohtainen linkkikuvaus. `seo-localization-findings.csv` sisältää jokaiselle 92 artikkelille nykyisen arvon ja descriptionista johdetun luonnoksen. Luonnos pitää tarkistaa käsin.

Source 1:ssä on `tags: []`. Lisää lokalisoidut tagit vain yhteisen tagikartan kautta. Tagit vaikuttavat sivuston sisäiseen hakemistoon; niitä ei pidä muuttaa HTML meta keywords -kentäksi.

## Slug-arvio

### Yleinen tulos

Nykyiset es-slugit ovat lokalisoituja Espanjan espanjaksi. Englanninkielisiä artikkelislugin kopioita ei löytynyt. Automaattinen slug-generointi poistaa aksenttimerkit URL-normalisointia varten, mikä on teknisesti tavallista.

### Estävä slug-päätös: source 123

Nykyinen live-slug:

```text
sigue-teniendo-soporte-mi-movil-como-comprobar-el-ciclo-de-actualizaciones-y-seguridad-de
```

Ongelma: slug loppuu prepositioon `de`, koska importer katkaisee lokalisoidun slug-tekstin 90 merkkiin.

Suositeltu prepublication-slug:

```text
soporte-actualizaciones-seguridad-movil-android
```

Koska nykyinen URL on jo live, muutosta ei saa tehdä suoraan. Ensin tarkistetaan GSC-indexointi ja linkit. Jos URL vaihdetaan, vaaditaan yksi-yhteen 301, uusi self-canonical, päivitetty hreflang, sitemap ja sisälinkit. Jos koko es-julkaisu vedetään pois ennen varsinaista hyväksyntää, lyhyempi slug kannattaa valita ennen relaunchia.

## Tekniset vaatimukset ennen hyväksyttyä julkaisua

1. Päätä, onko nykyinen `/es/`-julkaisu hyväksytty vai vahinko.
2. Ratkaise source 123:n URL ennen lisäindeksointia tai käsittele se julkaistuna URL-migraationa.
3. Poista Obsidianin identtiset duplikaatit ID 95 ja 122.
4. Korvaa 92 tagipohjaista listSummary-arvoa artikkelikohtaisella tekstillä vähintään prioriteettiryhmässä.
5. Lisää source 1:lle hyväksytyt lokalisoidut hakutagit.
6. Lisää klusterikohtaiset sisälinkit pienessä, käsin tarkistetussa erässä.
7. Aja 160 sivun lang/canonical/hreflang/sitemap/title/H1/description-testi.
8. Tarkista live HTTP-statukset ja GSC URL Inspection edustaville URL:eille.
9. Vahvista Espanjan espanja natiivilla toimittajalla vähintään 18 prioriteettiartikkelista.
10. Älä muuta muita slugeja ilman GSC- tai indeksinäyttöä.

## Julkaisua estävät artikkelit

Ei julkaisutilaan liittyviä estoja. Source 123:n slug-päätös on hyväksytty julkaistun URL:n 301-migraationa.

Muut havaitut es-ongelmat eivät yksin estä yksittäisen artikkelin teknistä julkaisua, mutta 92 listSummary-ongelmaa heikentää indeksi- ja hub-sivujen linkkitekstiä. Source 1:n tyhjät tagit heikentävät sisäisen haun löydettävyyttä.

## Lopullinen portti

es-ES:n julkaisu on hyväksytty. Jäljellä olevat optimointityöt priorisoidaan seuraavassa vaiheessa, kun:

- julkaisutila on eksplisiittisesti hyväksytty
- source 123:n URL on ratkaistu
- lähde-ID:t ovat uniikkeja
- prioriteettiartikkelien SEO title/description -ehdotukset on natiivitarkistettu
- vähintään prioriteettiryhmän listSummary-tekstit eivät ole tagiluetteloita
- buildin tekninen 160 sivun auditointi läpäisee
- GSC:stä on tarkistettu nykyisten live-URL:ien indeksointitila ennen mitään URL-muutosta
