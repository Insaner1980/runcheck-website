# Paikallisten hakutermien kysyntävalidointi ennen Search Console -dataa

Havaintopäivä: 2026-07-15  
Tila: tutkimus valmis käytettävissä olevalla näytöllä; ei sisältömuutoksia tässä työssä

## Johtopäätös

Alkuperäinen huoli on oikea tarkistettava riski, mutta käytettävissä oleva näyttö ei osoita järjestelmällistä suoraa englannista käännettyä päätermistöä Runcheckin julkaistuissa localeissa. Vaiheen 2 termikartassa 166/175 julkaistun locale × klusteri -rivin näyttö on `HIGH` tai `MEDIUM`; 9 riviä jäi `LOW`-tasolle. Neljä selkeää title/H1-tason poikkeamaa korjattiin jo vaiheessa 3 (fi-FI 122, sv-SE 122, fr-FR 123 ja es-ES 123).

Tämä ei ole hakumääräväite. Search Console -kyselydataa ja Google Keyword Planner -vientiä ei ole käytettävissä, joten minkään termin absoluuttista tai suhteellista kysyntää ei väitetä.

## Käytetty näyttö

- `reports/localized-keyword-map-v2.csv`: 25 aiheklusteria × 7 julkaistua localea = 175 termiriviä.
- Vaiheen 2 viralliset Android-, Google Pixel-, Samsung- ja valmistajalähteet sekä paikalliset SERP-havainnot.
- Locale-profiilit tiedostossa `runcheck-translation-skills/`.
- Vaiheen 3 toteutusraportti: neljä rajattua päätermimuutosta on jo tuotettu julkaistuun aineistoon.
- Julkinen Google Autocomplete -tarkistus 2026-07-15 kolmelle `LOW`-luokan klusterille. Google kuvaa ennusteiden perustuvan muun muassa todellisiin hakuihin, kieleen ja sijaintiin, mutta ennuste ei ole hakumäärä eikä sen puuttuminen tarkoita nollakysyntää: https://support.google.com/websearch/answer/7368877

Google Trends ja Keyword Planner ovat seuraava validointikerros. Trends soveltuu termien suhteelliseen vertailuun, mutta ei synonyymien tai absoluuttisten määrien automaattiseen yhdistämiseen: https://support.google.com/trends/answer/4359550. Keyword Plannerin vienti antaa maakohtaisen hakusanatutkimuksen lähtödatan: https://support.google.com/google-ads/answer/7337243.

## Google Autocomplete -tilannekuva

Tiedosto `reports/keyword-demand-autocomplete-signals.csv` sisältää 226 termikomponenttia. Yksi klusteririvi voi sisältää usean erillisen käsitteen, esimerkiksi akun kapasiteetin ja lataussyklin, joten määrä on suurempi kuin 175 Keyword Planner -työriviä.

- Kaikki 226 pyyntöä palautuivat onnistuneesti; yksikään vastaus ei jäänyt teknisesti puuttumaan.
- 78 termiä palautui täsmälleen omana ennusteenaan ja 148 ei. Tämä jakauma **ei ole kysyntäjakauma**: ennuste voi puuttua myös aidosti haetulta termiltä, ja ennusteen esiintyminen voi kuvata vain yhtä pitkän kyselyn alkua.
- Ydintermit ja niiden paikalliset sivutermit tuottivat runsaasti paikallisia jatkohakuja esimerkiksi akun kapasiteetin/lataussyklien, latausnopeuden, ylikuumenemisen, signaalin ja tietoturvapäivitysten klustereissa.

Neljässä jo vaiheessa 3 käsitellyssä tapauksessa tilannekuva on yhdenmukainen aiemman virallisen terminologian ja SERP-näytön kanssa, muttei korvaa niitä:

| Locale / klusteri | Aiempi otsikkotermi | Nykyiseen suuntaan vievä termi | Autocomplete-havainto | Päätös |
|---|---|---|---|---|
| fi-FI / tietoturvapäivitykset | `tietoturvakorjaus` (0 ehdotusta) | `Androidin tietoturvapäivitys` (1 ehdotus) | Tuki laajalle päivityskäsitteelle, ei hakumäärävertailu. | Vaiheen 3 muutos säilyy. |
| sv-SE / tietoturvapäivitykset | `säkerhetskorrigering` (2) | `Android-säkerhetsuppdatering` (3) | Molemmat ovat käytössä; päivitystermi sopii title/H1-tason laajaan intenttiin. | Vaiheen 3 muutos säilyy. |
| fr-FR / ohjelmistotuki | `cycle de suivi et de sécurité` (0) | `suivi logiciel` (10) | Lyhyempi paikallinen ydinkäsite tuotti jatkohakuja. | Vaiheen 3 muutos säilyy. |
| es-ES / ohjelmistotuki | `ciclo de actualizaciones y seguridad` (0) | `soporte de software` (10) | Tuki luonnollisemmalle support-käsitteelle. | Vaiheen 3 muutos säilyy. |

Luvuissa `0`, `1`, `2`, `3` ja `10` tarkoittavat vain palautuneiden ennusteiden määrää kyseisessä rajatussa pyynnössä, eivät hakuja, näyttökertoja, sijoituksia tai suhteellista kysyntää.

## Jäljelle jäänyt epävarmuus

| Klusteri | Localet | Nykyinen päätös | Lisähavainto | Toimenpide |
|---|---|---|---|---|
| Android-puhelimen kunnon tarkistus | sv-SE, nb-NO, da-DK | LOW | Tarkka pitkä kysely ei tuottanut automaattitäydennysehdotuksia. | Ei termimuutosta; vertaile Keyword Plannerissa lyhyempiä ostamis- ja kuntotarkistuskyselyjä. |
| Kunnostetut puhelimet | sv-SE, nb-NO, da-DK | LOW | `rekonditionerad telefon`, `renovert telefon` ja `istandsat telefon` palauttivat oman terminsä ennusteena; Ruotsissa myös `rekonditionerad telefon betyder`. | Säilytä termit. Ennuste ei todista kysyntäeroa eikä oikeuta vaihtamaan termiä. |
| Thermal throttling | sv-SE, nb-NO, da-DK | LOW | Tarkka tekninen termi ei tuottanut automaattitäydennysehdotuksia. | Säilytä paikallinen selitys ja tekninen englanninkielinen termi tarvittaessa kerran; älä nosta teknistä termiä yleiseksi SEO-päätermiksi ilman kysyntänäyttöä. |

Nämä yhdeksän riviä ovat juuri niitä tapauksia, joissa olisi riskialtista arvailla, että lyhyempi, englanninkielisempi tai naapurimaan termi olisi parempi. Yhtään niistä ei nostettu `REVISION RECOMMENDED` -tasolle.

## Valmis kysyntävertailuaineisto

Tiedosto `reports/keyword-demand-validation-input.csv` sisältää 175 riviä. Jokaisella rivillä on:

- aiheklusteri ja hakuintentti
- locale, maa ja kieli
- nykyinen ja aiemmin suositeltu päätermi
- Keyword Planneriin vietävät termit
- vältettävät termit
- olemassa olevan terminäytön luottamustaso
- turvallinen päätössääntö

Tiedosto on luotu komennolla:

```powershell
node scripts/build-keyword-demand-validation-input.mjs
```

Tämä ei kutsu Googlea eikä muuta artikkeleita. Se on toistettava, lähdeaineistosta johdettu työlista Keyword Planner -vertailuun.

Autocomplete-tilannekuva voidaan muodostaa uudelleen ilman kirjautumista:

```powershell
node scripts/collect-keyword-demand-signals.mjs
```

Skripti tallentaa vain kyselysanaston tukisignaalin. Se ei tee hakumääräpäätelmiä eikä sisältömuutoksia.

## Päätössääntö, kun Keyword Planner -vienti saadaan

Termiä saa ehdottaa titleen tai H1:een vain, jos kaikki seuraavat täyttyvät:

1. Vienti on rajattu oikeaan maahan ja kieleen.
2. Vaihtoehdolla on nykyistä termiä vahvempi lähteistetty kysyntä tai se paljastaa selvästi paremman paikallisen kyselymuodon.
3. Paikallinen SERP osoittaa saman hakuintentin kuin artikkeli.
4. Termi on locale-profiilin mukainen eikä teknisesti epätarkka.
5. Natiivin puhujan tarkistus vahvistaa epäselvät tai `LOW`-luokan tapaukset.

Jos jokin kohta puuttuu, nykyinen termi säilytetään. Slugit, URL-osoitteet, canonicalit, hreflangit ja leipätekstit eivät kuulu tähän validointiin.

## Tarkoituksella tekemättä jätetty

- Hakumäärien, CTR:n, sijoitusten tai kyselyiden keksiminen.
- Uusien title-, H1-, URL-, slug-, meta- tai leipätekstimuutosten tekeminen.
- 1 280 artikkelin mekaaninen synonyymikorvaus.
- Kannibalisaatiohypoteesien toteuttaminen.
- Italian julkaisu tai tuotantoportin muuttaminen.

## Seuraava tarvittava syöte

Tarvitaan Google Ads Keyword Plannerista maittain ja kielittäin viety termivertailu. Kun vienti on saatavilla, se yhdistetään tähän 175-riviseen aineistoon; vasta silloin voidaan erottaa luonnollinen mutta vähän haettu termi luonnollisesta ja selvästi haetummasta termistä ilman arvailua.
