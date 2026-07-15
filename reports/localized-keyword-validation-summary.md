# Runcheckin paikallisten hakusanojen ja hakuintenttien validointi, vaihe 2

Havaintopäivä: 2026-07-15  
Tila: tutkimus ja ehdotukset valmiit; julkaistuja sisältöjä, titlejä, H1-otsikoita, descriptioneja, slugeja tai URL:eja ei muutettu  
Italian tuotantoportti: suljettu

## Johtopäätös

Prioriteettiaineistossa ei löytynyt **CRITICAL**-luokan väärää alueellista tai teknistä päätermiä. Neljä julkaistua locale-sivua sai **REVISION RECOMMENDED** -päätöksen: fi-FI/source 122, sv-SE/source 122, es-ES/source 123 ja fr-FR/source 123. Italian it-IT/source 123 on erillinen julkaisua edeltävä REVISION-ehdotus.

Muut termit ovat pääosin luonnollisia ja linjassa locale-profiilien, virallisen Google/Android/valmistajasanaston ja otantana tarkasteltujen paikallisten hakutulosten kanssa. Tämä ei ole hakumääräpäätelmä: projektista ei löytynyt Search Console -dataa eikä hakumääriä käytetty.

## Tutkimusaineisto

- nimetyt vaiheen 1 raportit ja niiden CSV-aineisto
- `runcheck-translation-skills/runcheck-article-translation-skill.md`
- kaikki fi-FI, sv-SE, nb-NO, da-DK, de-DE, fr-FR, es-ES ja it-IT locale-profiilit
- nykyinen 160 englannin lähdeartikkelin korpus, 7 × 160 lokalisoitua julkaistua artikkelia ja 160 Italian preview-artikkelia
- viralliset paikallistetut Google Pixel -akku- ja lämpötilaohjeet, Androidin päivitys- ja tehdasasetusten palautusohjeet, Samsung Members -diagnostiikkaohjeet sekä paikalliset Xiaomi-ohjeet silloin kun ne löytyivät
- paikalliset operaattori-, jälleenmyyjä- ja toimitukselliset tulokset; käytetyt hakulauseet, maa/locale, tulostermit, URL:t ja havaintopäivä on tallennettu `localized-keyword-map-v2.csv`:n `SERP_evidence`-kenttään

## Search Console

**Search Console -aineistoa ei löytynyt.** Projektin ja `reports/`-hakemiston tiedostonimet sekä sisältö haettiin Search Console-, GSC-, query-, clicks-, impressions-, CTR- ja average position -tunnisteilla. Löytyi vain aiemman auditoinnin mainintoja datan puuttumisesta. Siksi:

- URL × query × country × device × clicks × impressions × CTR × average position × ajanjakso -yhdistelmää ei voitu muodostaa
- yhtään CTR-, sijoitus-, näyttökerta- tai hakumäärälukua ei esitetä
- kannibalisaatiot ovat hypoteeseja, eivät vahvistettuja löydöksiä
- maa- ja laitekohtaisia ongelmia ei voitu arvioida

## Prioriteettiartikkelien luokitus

Luokitus kattaa 18 source ID:tä kaikissa kahdeksassa julkaistussa localessa eli 144 locale-sivua.

| Luokka | Sivumäärä |
|---|---:|
| PASS | 85 |
| MINOR | 55 |
| REVISION RECOMMENDED | 4 |
| CRITICAL | 0 |

| Locale | PASS | MINOR | REVISION RECOMMENDED | CRITICAL | Yleisarvio |
|---|---:|---:|---:|---:|---|
| en | 18 | 0 | 0 | 0 | Lähdeversio; ei paikallisen termin muutosehdotuksia. |
| fi-FI | 9 | 8 | 1 | 0 | Ydintermit pääosin vahvoja; source 122 käyttää otsikkotasolla kapeampaa tietoturvakorjaus-termiä. |
| sv-SE | 11 | 6 | 1 | 0 | Ydintermit pääosin vahvoja; source 122 kannattaa ankkuroida säkerhetsuppdatering-termiin. |
| nb-NO | 11 | 7 | 0 | 0 | Hyvä kokonaisuus; batterihelse ja virallinen Pixel-UI-termi Batteritilstand ovat perustellusti eri konteksteissa. |
| da-DK | 12 | 6 | 0 | 0 | Ei vahvistettua päätermivirhettä; harvinaisemmissa termeissä SERP-näyttö on rajallinen. |
| de-DE | 8 | 10 | 0 | 0 | Virallinen ja korpuksen sanasto ovat hyvin linjassa. |
| fr-FR | 10 | 7 | 1 | 0 | Ydintermit pääosin vahvoja; source 123:n cycle de suivi -rakenne on hakuintentille heikompi. |
| es-ES | 6 | 11 | 1 | 0 | Spain-Spanish on johdonmukainen; source 123:n abstrakti ciclo-termi kannattaa vaihtaa support/periodo-rakenteeseen. |

MINOR-luokka on pääosin metatiedon/listakortin ongelma, ei päätermin virhe. 53 prioriteettisivulla `listSummary` on kolmen tagin luettelo. Espanjan source 1, 11, 21, 53, 104 ja 123 saivat lisäksi aiempaan lähteistettyyn auditointiin perustuvan, manuaalisesti tarkistettavan `metaTitle`-ehdotuksen; source 1, 11 ja 123 saivat `metaDescription`-ehdotuksen.

Prioriteettiartikkelien leipätekstissä ei ollut Runcheckin muihin artikkeleihin osoittavia kontekstuaalisia sisäisiä linkkejä. Siksi nykyisiä ankkuritekstejä ei voitu termivalidoida tästä otannasta; `keyword-cannibalization-candidates.csv`:n ankkuriohjeet koskevat vasta tulevaa sisäistä linkitystä.

## Järjestelmälliset termihavainnot

1. **fi-FI source 122:** `tietoturvakorjaus`/`korjaustaso` on teknisesti ymmärrettävä patch-termi, mutta `tietoturvapäivitys` on Googlen paikallinen laaja käsite ja parempi title/H1-päätermi. Tämä ei ole kielioppi- tai regional-variety-virhe.
2. **sv-SE source 122 (ja yleinen H2-konteksti source 123:ssa):** `säkerhetskorrigering` on teknisesti oikea patch-sana, mutta `säkerhetsuppdatering` on vahvempi yleinen title/H1-käsite. Virallista UI-labelia ei pidä korvata mekaanisesti.
3. **es-ES source 123:** `ciclo de actualizaciones y seguridad` on ymmärrettävä, mutta hakuintentille abstrakti. `periodo de soporte` + `actualizaciones/parches de seguridad` on luonnollisempi.
4. **fr-FR source 123:** `cycle de suivi et de sécurité` on ymmärrettävä mutta heikko päätermi. `durée du suivi logiciel` + `mises à jour de sécurité` vastaa intenttiä paremmin.
5. **nb-NO ei ole virhe:** `batterihelse` yleistekstissä ja `Batteritilstand` Pixelin paikallisena käyttöliittymä-/statussanana ovat perusteltu kontekstiero. Neljää Batteritilstand-osumaa ei pidä massakorvata.
6. Väärän regional varietyn vahvistettua päätermikuviota ei löytynyt title/H1/H2/intro-skannauksessa. Espanjan `celular/computadora`, pohjoismaisten kielten keskinäiset lataus-/tallennussanat ja muut profileihin kirjatut vältettävät muodot eivät muodostaneet vahvistettua otsikkotason ongelmaa.

## listSummary-korpuslöydös

| Locale | Tagiluettelomainen listSummary koko 160 artikkelin korpuksessa |
|---|---:|
| fi-FI | 78 |
| sv-SE | 76 |
| nb-NO | 72 |
| da-DK | 79 |
| de-DE | 89 |
| fr-FR | 100 |
| es-ES | 92 |
| **Yhteensä** | **586** |

Tämä on sama rakenteellinen ongelma kuin vaiheen 1 raportissa, mutta nykyisestä korpuksesta uudelleen laskettuna. Sitä ei pidä korjata tagien exact-match-lisäyksellä. Luonnollinen yhden virkkeen listatiivistelmä voidaan luonnostella automaattisesti, mutta jokainen lopullinen teksti vaatii natiivin tarkistuksen.

## Aiheklusterit

| Klusteri | Ydinkäsite | Intentti | Tärkeimmät source ID:t | Mahdollinen päällekkäisyys |
|---|---|---|---|---|
| Android-puhelimen kunnon tarkistus | Android device health check | Informational/problem-solving: determine overall device condition | 1, 3, 7, 8, 10 | 1 vs 7 vs 10 |
| Käytetyn puhelimen tarkistus ja ostaminen | check and buy a used Android phone | Commercial investigation: reduce purchase risk | 2, 6, 141, 144 | 2 vs 6 vs 141 |
| Kunnostetut puhelimet | refurbished Android phone | Commercial investigation: distinguish refurbished from ordinary used | 2, 6, 141 | used vs refurbished intent must stay separate |
| Korjaaminen vai vaihtaminen | repair or replace a phone | Commercial/problem-solving: choose repair, battery replacement, or replacement device | 4, 17, 142, 143 | 4 vs 142 vs 143 |
| Akun kunto | battery health | Informational/problem-solving: assess degradation and replacement need | 11, 13, 16-19, 153-156 | 11 vs 13 vs brand guides |
| Akun kapasiteetti ja lataussyklit | battery capacity and charge cycles | Informational: understand capacity, design capacity, and cycle count | 12, 13, 18-20 | 12 vs 13 vs 18 |
| Nopeasti tyhjenevä akku | battery drains fast | Problem-solving: identify abnormal drain and its cause | 14, 21-36, 145-152 | 21 vs 23 vs 25-27 |
| Puhelin ei lataudu | phone will not charge | Problem-solving: diagnose a charging failure | 47, 48, 108 | 47 vs 48 vs 108 |
| Laturit ja latausnopeus | chargers and charging speed | Informational/commercial/problem-solving: choose and test a charger or explain charging speed | 37-51 | 44 vs 45 vs 47-50 |
| Ylikuumeneminen ja lämpötila | phone overheating and temperature | Problem-solving: explain heat, measure temperature, and cool safely | 52-63 | 53 vs 54 vs 58-59 |
| Thermal throttling | thermal throttling | Informational/problem-solving: explain heat-driven performance limiting | 56, 62, 64, 89 | 53 vs 56 vs 64 |
| Hidas Android-puhelin | slow Android phone | Problem-solving: diagnose and improve phone performance | 64-78, 147, 150 | 64 vs 65 vs 67-78 |
| Tallennustilan täyttyminen | phone storage is full | Problem-solving: free space or resolve a false full-storage warning | 79, 81-88 | 79 vs 81 vs 87 |
| Tallennustilan kunto | storage health | Informational/problem-solving: assess flash condition and slowdown | 80, 89 | 80 vs 89 |
| Wi-Fi-ongelmat | Android Wi-Fi problems | Problem-solving: diagnose weak or dropping Wi-Fi | 90, 95, 96, 149 | 90 vs 95-96 |
| Mobiiliverkko ja signaalin voimakkuus | mobile network and signal strength | Informational/problem-solving: read signal and diagnose coverage | 93, 94, 97, 100-103 | 93 vs 97 vs 102-103 |
| Internetyhteyden hitaus | slow phone internet | Problem-solving: isolate Wi-Fi, mobile data, latency, or VPN causes | 91, 92, 97, 99, 103 | 91 vs 97 vs 103 |
| Android-laitteiston testaus | test Android phone hardware | Problem-solving: test components and sensors | 104-118, 131-137 | 104 vs 105-118 |
| Diagnostiikkasovellukset | Android diagnostic apps | Commercial investigation/informational: compare diagnostic tools | 7, 104, 138-140, 157-160 | 138 vs 139 vs 140 |
| Tietoturvapäivitykset | Android security updates and patches | Informational/problem-solving: find and interpret the patch level | 119-124 | 122 vs 123 |
| Ohjelmistotuen päättyminen | Android software support lifecycle | Informational/commercial: determine whether a phone is still supported | 121, 123, 143 | 121 vs 123 vs 143 |
| Tehdasasetusten palautus | factory reset | Problem-solving: reset safely and understand data loss | 5, 9, 67, 130, 152 | 67 vs 130 vs 152 |
| Vikasietotila | Android safe mode | Problem-solving: isolate third-party app failures before reset | 67, 70, 73-77, 130 | 70 vs 130 |
| Factory Reset Protection | Factory Reset Protection (FRP) | Informational/problem-solving/commercial: avoid account lock after reset or used-device purchase | 5, 6, 130 | no dedicated article; overlaps used-phone and reset intent |
| Valmistajakohtaiset diagnostiikkavalikot | manufacturer diagnostic and service menus | Problem-solving: open brand-specific hardware tests safely | 112, 113, 153-160 | 112 vs 113 vs 159-160 |

Klusterit kattavat kaikki 160 englannin source ID:tä vähintään yhden pää- tai sivuintentin kautta. Päällekkäisyys ei ole automaattisesti virhe: esimerkiksi battery health, capacity ja valmistajan UI-status ovat eri käsitteitä; samoin slow internet, mobile data ja Wi-Fi troubleshooting.

## Automatisoitavuus

Turvallisesti automatisoitavissa ovat vain ehdokkaiden tunnistus ja validointi:

- `sourceNumber`-pohjainen locale-paritus
- title/H1/H2/intro/listSummary-termien johdonmukaisuusskannaus
- väärän regional varietyn tunnettujen merkkijonojen hälytykset
- tagiluettelomaisen `listSummary`-arvon tunnistus
- klusteri- ja URL-parien muodostus GSC-vientiä varten
- hyväksyttyjen termien regressiotesti, joka ei pakota yhtä termiä kaikkiin konteksteihin

Ei turvallisesti automatisoitavissa:

- title-, H1-, intro-, H2-, metaTitle-, metaDescription- tai listSummary-copy
- synonyymin vaihto ilman query-näyttöä
- kannibalisaation ratkaisu ilman page × query -dataa
- Italian slug-valinta ennen natiivin puhujan hyväksyntää

## Rajattu toteutussuunnitelma (ei toteutettu)

### 1. CRITICAL-termivirheet

- Tiedostoja: **0**
- Muuttuvat kentät/H1/URL: ei muutoksia
- Automatisointi: ei sovellu
- Natiivitarkistus: ei
- Näyttö: yhtään väärää teknistä tai alueellista päätermiä ei vahvistettu
- Riski: ei muutosta

### 2. Toistuvat tai klusteritasoiset REVISION RECOMMENDED -ongelmat

- Tiedostoja: **4 julkaistua** (fi 122, sv 122, es 123, fr 123)
- Kentät: title/H1; fi/sv:ssa lisäksi vain geneeriset H2-ilmaukset; es/fr:ssa harkittu erillinen `metaTitle`
- H1 muuttuu: kyllä, jos ehdotus hyväksytään
- URL muuttuu: **ei**; julkaistuja slugeja ei muuteta
- Automatisointi: ei; vain ehdokaslistan voi automatisoida
- Natiivitarkistus: kyllä, vähintään sv-SE, es-ES ja fr-FR; fi-FI toimituksellinen tarkistus
- Näyttö: virallinen terminologia + paikallinen SERP-otanta, ei GSC:tä
- Riski: keskitaso; intentti voi kaventua, jos patch/update-eroa käsitellään liian mekaanisesti

### 3. Prioriteettiartikkelien metaTitle-, metaDescription- ja listSummary-parannukset

- Meta-tiedostot: **6 es-ES-tiedostoa** (metaTitle 6; metaDescription 3)
- listSummary: **53 prioriteettitiedostoa** seitsemässä lokalessa
- H1 muuttuu: ei MINOR-ryhmässä
- URL muuttuu: ei
- Automatisointi: ehdotusten generointi kyllä; lopullinen copy ei
- Natiivitarkistus: kyllä kaikissa localeissa
- Näyttö: nykyisen metan intentti + virallinen termi + SERP; CTR-näyttö puuttuu
- Riski: pieni ilman H1/URL-muutosta, mutta CTR voi myös heikentyä ilman GSC:tä; vaiheista ja mittaa

### 4. Italian muutokset ennen julkaisua

- Tiedostoja: **1 pakollinen manuaalinen tarkistus/ehdotus** (it-IT source 123)
- Kentät: title/H1, mahdollinen metaTitle ja ennen julkaisua myös slug
- H1 muuttuu: ehdotuksen mukaan kyllä
- URL muuttuu: tuotanto-URL:ia ei ole; preview-slug voidaan muuttaa ennen julkaisua
- Automatisointi: slug voidaan generoida hyväksytystä title-arvosta, mutta termiä ei valita automaattisesti
- Natiivitarkistus: kyllä
- Näyttö: profiili + virallinen termi + Italian SERP, ei GSC:tä
- Riski: pieni ennen julkaisua; keskitaso, jos titleä lyhennetään liikaa ja intentti kapenee

### 5. Muut sivut vasta Search Console -datan perusteella

- Tiedostoja nyt: **0**
- Kentät/H1/URL: ei muutoksia ennen dataa
- Automatisointi: GSC-viennin page/query/country/device-paritus voidaan automatisoida
- Natiivitarkistus: päätöksen mukaan
- Näyttövaatimus: vähintään page × query × country × device, clicks, impressions, CTR, average position ja ajanjakso
- Riski: korkea, jos massamuutoksia tehdään ilman dataa; siksi ei toteutusta

## Raportit

- `reports/localized-keyword-map-v2.csv`: 25 klusteria × 8 localea = 200 lähteistettyä termiriviä
- `reports/priority-article-keyword-review.csv`: 144 julkaistun prioriteettisivun päätökset
- `reports/keyword-cannibalization-candidates.csv`: rakenteelliset hypoteesit, ei vahvistettuja kannibalisaatioita
- `reports/it-IT-keyword-prepublication.md`: Italian erillinen porttipäätös
