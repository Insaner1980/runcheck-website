# Phone Support Checker

## Android-tukisitoumusten evidenssisemantiikka, 30.8.2026

Checker erottaa nyt Android-tukisitoumuksen, nykyisen aktiivisuuden ja kalenteriin sidotun päättymän toisistaan. Kanonisessa `os.commitments`-taulukossa jokainen sitoumus sisältää toiminta-arvion, alueen, valmistajan lupauksen, vähimmäisluonteen, lähdeviitteet ja tarkistuspäivän. Lähteen julkaisemat toimitettu Android-versio, nimetyt tulevat versiot, päivitysmäärä tai vuosikesto säilytetään vain silloin, kun lähde ne julkaisee. Tyhjä taulukko tarkoittaa, ettei virallista sitoumusta ole osoitettu.

Julkinen esitys käyttää kuutta luokkaa:

- A: `Android version support` ja `Not established`.
- B: `Android upgrades` ja `Promised`; nykyinen aktiivisuus ja tarkka päättymä eivät ole tiedossa.
- C: `Android version support` ja `Active`; tarkkaa päättymää ei ole julkaistu.
- D: aktiivinen tuki virallisen päättymän ja sen oikean tarkkuuden läpi.
- E: virallisesti päättynyt Android-versiotuki.
- F: ristiriitainen Android-näyttö ilman yhtä varmaa tulosta.

Toissijainen elinkaaripäivä ei yksin muodosta luokkaa D tai E. AER:n `at least`-arvo, päivitysmäärä tai vuosilupaus ei myöskään muutu kalenteripäättymäksi.

### Muuttuneet puhelimet

Kaikkien alla olevien tietueiden aiempi Android-luokka oli A. Muita kuin nämä 22 tietuetta ei muutettu.

| Puhelin | Uusi luokka | Virallinen näyttö ja alue | Nykyinen aktiivisuus | Android-päättymä |
| --- | --- | --- | --- | --- |
| Fairphone 4 | B | Fairphonen ohjelmisto- ja tietoturvapäivityslupaus, Europe | Ei osoitettu erikseen | Ei julkaistu |
| HONOR 200 | B | AER nimeää Android 15 ja 16 vähimmäistulevaisuusversioiksi, Global | Ei osoitettu | Ei julkaistu |
| HONOR 200 Lite | B | AER nimeää Android 15 ja 16 vähimmäistulevaisuusversioiksi, Global | Ei osoitettu | Ei julkaistu |
| HONOR 400 | C | AER:n Android 16 ja 17 vähimmäislupaus, Global; kuuden vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR 400 Lite | C | AER:n Android 16 -vähimmäislupaus, Global; kuuden vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR 400 Pro | C | AER:n Android 16 ja 17 vähimmäislupaus, Global; kuusi suurta Android-päivitystä HONOR Germany -sivulla | Aktiivinen Saksassa | Ei julkaistu |
| HONOR 600 | C | AER:n Android 18 -vähimmäislupaus, Global; kuuden vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR 600 Lite | C | AER:n Android 18 -vähimmäislupaus Euroopan sisältävällä alueella; kuuden vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR 600 Pro | C | AER:n Android 18 -vähimmäislupaus, Global; kuuden vuoden HONOR Germany -lupaus | Aktiivinen Saksassa | Ei julkaistu |
| HONOR 600 Smart 5G | B | AER nimeää Android 18:n vähimmäistulevaisuusversioksi Euroopan sisältävällä alueella | Ei osoitettu | Ei julkaistu |
| HONOR Magic V5 | C | Seitsemän vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR Magic V6 | C | Seitsemän vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR Magic7 Lite | C | Kuuden vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR Magic7 Pro | C | Seitsemän vuoden Magic-sarjan linjaus EU-markkinoille ja mallikohtainen HONOR France -vahvistus | Aktiivinen EU:ssa | Ei julkaistu |
| HONOR Magic8 Lite | C | AER:n Android 18 -vähimmäislupaus Euroopalle ja Latinalaiselle Amerikalle; kuuden vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR Magic8 Pro | C | Seitsemän vuoden HONOR France -lupaus | Aktiivinen Ranskassa | Ei julkaistu |
| HONOR X5c Plus | B | AER nimeää Android 17:n vähimmäistulevaisuusversioksi, Global | Ei osoitettu | Ei julkaistu |
| HONOR X6b | B | AER nimeää Android 16:n vähimmäistulevaisuusversioksi, Global | Ei osoitettu | Ei julkaistu |
| OnePlus 11 | B | Vähintään neljä Android-sukupolvea, OnePlus Finland | Ei osoitettu | Ei julkaistu |
| OnePlus 12R | B | Vähintään kolme Android-sukupolvea, OnePlus Finland | Ei osoitettu | Ei julkaistu |
| OnePlus 13 | B | Neljä Android-päivitystä ja Android 16, 17, 18 ja 19, globaali OnePlus-linjaus | Ei osoitettu | Ei julkaistu |
| OnePlus 13R | B | Neljä Android-päivitystä ja Android 16, 17, 18 ja 19, globaali OnePlus-linjaus | Ei osoitettu | Ei julkaistu |

HONORin 12 AER-tietueesta viisi jää luokkaan B ja seitsemän saa vahvemman Ranska- tai Saksa-näytön vuoksi luokan C. AER:n tietoturvan vähimmäiskuukausia ei käytetä Android-päättymänä. Maa-aluekohtainen C ei muuta Ranskan tai Saksan lupausta Suomen yleiseksi lupaukseksi. Magic7 Pron EU-rajaus sen sijaan kattaa Suomen.

### Tulokset, vertailu ja päivitysturva

Päätuloksessa Android-rivi näkyy kaikille valituille puhelimille. B näyttää lupauksen ja sen alueen sekä kertoo avoimesti, ettei nykyistä aktiivisuutta tai tarkkaa päättymää ole osoitettu. C näyttää aktiivisuuden ja alueen sekä kertoo, ettei tarkkaa päättymää ole julkaistu. Aikajana ei luo B- tai C-luokalle Android-päätepistettä. Vertailu käyttää samoja ilmaisuja eikä tee päivitysmäärästä, vuosilupauksesta tai AER-vähimmäisestä päättymää tai voittajaa.

Lähdeavaus näyttää sitoumuksen alueen, aktiivisuuden, vähimmäisluonteen, nimetyt versiot, päivitysmäärän tai vuosikeston sekä suorat lähteet. Menetelmäsivu dokumentoi luokat A-F, alueellisen soveltamisen ja tiedon puuttumisen.

Diffi raportoi `os.commitments`-muutokset erikseen. Sitoumuksen alueen, aktiivisuuden, vähimmäisluonteen, versionumeron, päivitysmäärän, keston, näyttötyypin tai lähteen poistaminen tai heikentäminen estää `--apply`-ajon ilman samassa virallisessa annotaatioaineistossa olevaa nykyistä, perusteltua `commitmentReviews`-päätöstä. Pelkkä uusi sitoumus ei muodosta estettä. Testi osoittaa sekä eston ennen kirjoituksia että erikseen tarkistetun muutoksen hyväksyttävyyden.

### Varmennus

| Tarkistus | Tulos |
| --- | --- |
| Kattavuus | 800 puhelinta, 11 brändiä, 29 HONOR-puhelinta ja 771 muuta puhelinta |
| Kanoninen diffi | 0 lisäystä, 0 poistoa, 22 Android-sitoumusmuutosta ja 0 estävää riskiä |
| `npm run check:phone-support` | Exit 0; 800 puhelinta ja 43 käytettyä lähdettä validoitu offline |
| `npm run update:phone-support` | Exit 0; 0 lisäystä, 0 poistoa, 0 tietuemuutosta ja 0 riskiä; hallittujen tiedostojen SHA-256-arvot eivät muuttuneet |
| `npm run check` | Exit 0; 110 tiedostoa, 0 virhettä, 0 varoitusta ja 0 huomiota |
| `npm run build` | Exit 0; 1581 staattista sivua |
| `npm run test:phone-support` | Exit 0; 42/42 testiä |
| `npm test` | Exit 0; 101/101 testiä |
| Playwright 1.62.1 | Exit 0; nimetyt puhelimet ja vertailut, näppäimistö, historia, lähdeavaukset, focus ja 1440/768/360/320 pikselin näkymät |
| Lähde-URL-tarkistus | 37 saavutettavaa, 5 automaatiolta rajoitettua ja 1 aikakatkaistu |

Fairphone-tukisivut säilyvät hyväksyttyinä 28.8.2026 tarkistettuina lähteinä, mutta suora automaattinen tarkistus palautti HTTP 403:n. Samsungin S24-julkaisusivu aikakatkaistiin kolmen yrityksen jälkeen. Nämä ovat tarkasti rajattuja saavutettavuusrajoituksia, eivät näyttöä väitteiden muuttumisesta. Kaikki tässä lisätyt HONOR- ja OnePlus-lähteet palauttivat URL-tarkistuksessa HTTP 200:n. HTTP 200 ei kuitenkaan yksin todista väitettä; sisällön semanttinen tuki tarkistettiin erikseen.

Työ jäi paikalliseen työpuuhun. Stagingia, committia, pushia, deployta tai pull requestia ei tehty.

## HONOR-kattavuuden lisäys, 29.8.2026

HONOR lisättiin checkerissä omaksi käyttäjälle näkyväksi brändiksi Suomen virallisen, nykyisen turvallisuuspäivityslistan perusteella. Aineistossa on nyt 800 puhelinta ja 11 brändiä. Kaikki aiemmat 771 tietuetta säilyivät: 29 HONOR-tietuetta lisättiin, eikä yhtään aiempaa tietuetta poistettu tai muutettu. Työ on vain paikallisessa työpuussa. Sitä ei ole commitoitu, pushattu, julkaistu eikä liitetty pull requestiin.

### Miksi HONOR puuttui aiemmin

Edellinen laajennus lopetettiin, kun kymmenen vahvasti lähteistettyä brändiä oli saavutettu. HONOR jätettiin tuolloin myöhempään lähdetutkimukseen, ei siksi, että lähteet olisi tutkittu ja todettu riittämättömiksi. Tämä kierros korjaa tuon mielivaltaisen pysähdyskohdan varsinaisella HONOR-lähdeauditoinnilla.

### Tutkitut viralliset lähteet

| Lähde | Alue ja merkitys | Käyttö aineistossa |
| --- | --- | --- |
| [HONOR Finland: MagicOS/Magic UI -turvallisuuspäivitykset](https://www.honor.com/fi/support/bulletin/) | Suomi. Nimeää tällä hetkellä ylläpidettävät mallit ja kuukausittaisen, kahden kuukauden tai neljännesvuosittaisen rytmin. Lista voi muuttua, ja toimitus voi vaihdella mallin, alueen, operaattorin ja eräjulkaisun mukaan. | Ensisijainen sisäänottolähde, suora aktiivinen tietoturvatila ja suora päivitysrytmi kaikille 29 mallille. |
| [HONOR Global: Android Enterprise Recommended Device List](https://www.honor.com/global/tech/security-update/) | Globaali rekisteri, jossa mallikohtainen vähimmäistukikuukausi, toimitettu Android-versio, tulevat vähimmäisversiot ja nimenomainen alue. | Täydentävä huomautus 12 mallille vain, kun alue on `Global` tai sisältää `Europe`. Vähimmäiskuukautta ei käsitellä loppupäivänä. |
| [HONOR Finland: puhelimet](https://www.honor.com/fi/phones/) | Suomen nykyinen ja historiallinen tuotevalikoima. | Tarkisti Suomen kuluttajanimet ja sen, että bulletin malliperheet vastaavat Suomessa esiteltyjä puhelimia. Ei käytetty tukipäättymän lähteenä. |
| [HONOR Global: seitsemän vuoden Magic-sarjan linjaus](https://www.honor.com/global/news/android-os-security-honor/) | Linjaus alkaa HONOR Magic7 Prosta Euroopan markkinoilla. | Tutkittu, mutta ei muunnettu päivämääräksi, koska sivu ei julkaise tarkkaa laskennan alkupäivää tai mallikohtaista päättymää. |
| [HONOR France: Magic7 Pro](https://www.honor.com/fr/phones/honor-magic7-pro/) | Ranskan tuotesivu kertoo seitsemästä vuodesta Android- ja tietoturvapäivityksiä. | Vahvistaa Eurooppa-linjauksen, mutta ei anna tarkkaa päättymää. |
| [HONOR Global: Magic7 Pro Europe launch](https://www.honor.com/global/news/honor-magic7-series-launch/) | Euroopan julkaisu 15.1.2025. | Tutkittu julkaisun todisteena. Sitä ei yhdistetty seitsemän vuoden lupaukseen laskennalliseksi päättymäksi ilman valmistajan ilmoittamaa laskentaperustetta. |
| [HONOR UK: MagicOS/Magic UI Security Updates](https://www.honor.com/uk/support/bulletin/) | Yhdistyneen kuningaskunnan nykylista vastaa pääosin Suomen listaa mutta sisältää myös aluekohtaisia lisämalleja. | Käytettiin vertailuun, ei Suomen tietueiden ensisijaiseksi lähteeksi. |
| [HONOR Global: MagicOS/Magic UI Security Updates](https://www.honor.com/global/support/bulletin/) | Globaali nykylista sisältää myös malleja ja erikoisversioita, joita Suomen lista ei nimeä. | Käytettiin alue-eron tarkistamiseen, ei Suomen sisäänottolähteeksi. |

Myös HONORin [Kiinan](https://www.honor.com/cn/support/bulletin/), [Saudi-Arabian](https://www.honor.com/sa-en/support/bulletin/) ja [Turkin](https://www.honor.com/tr/support/bulletin/) bulletin-sivuja tarkasteltiin alueellisen soveltuvuuden arvioimiseksi. Kiina- ja Saudi-listoja ei sovellettu Eurooppaan. Turkin listaa ei käytetty Suomen lähteen sijasta. Kolmannen osapuolen koontisivuja ei käytetty HONOR-tietueiden väitteisiin.

### Sisäänottokriteeri ja lisätyt mallit

Sisäänottokriteeri on yksi ja yhtenäinen: puhelimen täytyy esiintyä HONORin Suomen nykyisellä turvallisuuspäivityslistalla. Tabletit jätetään pois. Pelkkä Suomen tuotesivulla esiintyminen tai muun alueen bulletin ei riitä. Historiallisia malleja, joita Suomen nykylista ei enää nimeä, ei lisätä.

- Kuukausittain, 2: HONOR Magic V6, HONOR Magic8 Pro.
- Kahden kuukauden välein, 2: HONOR 600 Pro, HONOR 600.
- Neljännesvuosittain, 25: HONOR Magic V5, HONOR Magic8 Lite, HONOR Magic7 Pro, HONOR Magic V3, HONOR Magic6 Pro, HONOR Magic V2, HONOR Magic Vs, HONOR Magic5 Pro, HONOR Magic7 Lite, HONOR Magic4 Pro, HONOR Magic6 Lite 5G, HONOR 400 Pro, HONOR 400, HONOR 600 Smart 5G, HONOR 600 Lite, HONOR 400 Smart 5G, HONOR 200, HONOR 200 Pro, HONOR 400 Lite, HONOR 200 Smart, HONOR 200 Lite, HONOR 90 Lite, HONOR X5c Plus, HONOR X6b ja HONOR X7b.

AER-rekisteristä arvioitiin lisäksi 16 tietuetta, joita ei otettu mukaan. HONOR Pad X9a, Pad 10, MagicPad4, Pad 20 ja Pad 20 Pro ovat tabletteja. HONOR X6c, X6d 5G ja 600e eivät kata Eurooppaa. HONOR X7c, X8c, 400 Smart, X7d, X5c, X8d, X7e ja X6e eivät ole Suomen nykyisellä turvallisuuspäivityslistalla. Suomen listan `HONOR 400 Smart 5G` säilyy erillisenä eikä globaalin AER-rekisterin `HONOR 400 Smart` -nimeä oleteta samaksi variantiksi.

### Kenttien lähteet ja epävarmuudet

- Suoraan virallisesta Suomen listasta: mallin identiteetti, aktiivinen tietoturvan ylläpitotila tarkistuspäivänä ja päivitysrytmi.
- Suoraan AER-rekisteristä täydentävänä huomautuksena: vähimmäistukikuukausi, toimitettu Android-versio, tulevat vähimmäisversiot ja alue HONOR 200-, 200 Lite-, X6b-, 400 Lite-, 400-, 400 Pro-, X5c Plus-, Magic8 Lite-, 600 Lite-, 600-, 600 Pro- ja 600 Smart 5G -malleille.
- Tuntematon kaikille 29 mallille: varma tietoturvan loppupäivä ja siitä laskettava jäljellä oleva aika. AER-rekisterin `at least` tarkoittaa vähimmäislupausta, ei vahvistettua päättymää.
- Tuntematon kaikille 29 mallille: kalenteriin sidottu Android-version tuen loppu. AER-versionumerot näkyvät lähteistetyissä huomautuksissa, mutta niitä ei muuteta päättymäpäiväksi.
- Tuntematon julkisissa tietueissa: julkaisupäivä. Magic7 Pron Euroopan julkaisu tutkittiin, mutta yksittäistä päivää ei käytetty keinotekoisen seitsemän vuoden päättymän laskemiseen eikä yhden mallin perusteella yleistetty muihin.
- Laskettu kenttä: tuloksen `Security updates active` -tila johdetaan tuoreesta virallisesta aktiivisen tietoturvatuen havainnosta silloin, kun Android-version tuen tila ei ole tiedossa. HONORille ei lasketa tukipäättymää, jäljellä olevaa aikaa tai Android-tuen kalenterirajaa.

Käyttäjä näkee siksi HONOR-tuloksessa aktiivisen tietoturvatuen, virallisen rytmin ja `No public end date` -vastauksen. AER:n vähimmäislupaus ja Android-versiot ovat avattavassa väitenäytössä ja epävarmuuksissa, eivät päättymäpäiväkentässä.

Päivityksen AER-kattavuusvartija vertaa uutta tulosta viimeiseen hyväksyttyyn paikalliseen snapshottiin. Päivitys estetään, jos vähintään kolme aiempaa jäsennettyä tietuetta, tunnettua AER-identiteettiä tai Suomen listan AER-rikastusta katoaa ja jäljelle jää alle 60 prosenttia kyseisestä aiemmasta kattavuudesta. Suhteellinen sääntö ei lukitse AER-lähdettä nykyiseen 28 tietueeseen ja sallii normaalit yksittäiset lisäykset, poistot, alue- ja vähimmäiskuukausimuutokset näkyvinä diffeinä.

Mallialiaset säilyttävät mallinumerot, `Pro`, `Lite`, `Smart`, `Plus`, `5G` ja taittuvan Magic V -perheen erottelut. Haku hyväksyy esimerkiksi `HONOR Magic8 Pro`, `Honor Magic 8 Pro`, `Magic8 Pro`, `HONOR Magic V5`, `Honor Magic V 5` ja `Honor X 5c Plus`. Yleinen 5G-vapaa alias lisätään vain, jos aineistossa ei ole samalla nimellä erillistä puhelinta; ristiriitaiset laajat aliakset poistetaan yhteisellä törmäystarkistuksella.

### Varmennus

HONORin Suomen bulletin jäsennys tuotti 29 puhelinta: 2 kuukausittaista, 2 kahden kuukauden välein päivitettävää ja 25 neljännesvuosittaista. Globaali AER-jäsennys tuotti 28 laitetietuetta, joista 12 täsmäsi Suomen nykylistaan ja soveltui suoraan Eurooppaan tai globaalisti. Molemmat varsinaiset aineistolähteet palauttivat erillisessä saavutettavuustarkistuksessa HTTP 200 -vastauksen. Saavutettavuus ei ollut sisältöväitteen näyttö, vaan sivujen alue, sanamuodot, listat ja taulukot tarkastettiin myös semanttisesti.

| Tarkistus | Tulos |
| --- | --- |
| Ensimmäinen HONOR-normalisointi | 800 puhelinta, 11 brändiä ja 27 käytettyä lähdettä; 29 lisäystä, 0 poistoa, 0 aiemman tietueen muutosta ja 0 riskiä |
| Toinen sovellus paikallisista snapshoteista | 800 puhelinta; 0 lisäystä, 0 poistoa, 0 muutosta ja 0 riskiä |
| `npm run check:phone-support` | Exit 0; 800 puhelinta, 11 brändiä ja 27 lähdettä validoitu paikallisesti |
| `npm run check` | Exit 0 |
| `npm run build` | Exit 0; 1581 staattista sivua |
| `npm run test:phone-support` | Exit 0; 36/36 testiä |
| `npm test` | Exit 0; 95/95 testiä |
| `git diff --check` | Exit 0 |

Rakennetun `dist`-tuotoksen selainvarmennus tehtiin paikallisessa Astro-preview'ssa Playwright CLI:llä. Browse by brand näytti 11 brändiä, 800 puhelinta ja HONORille 29 puhelinta. HONOR-sivu sisälsi 29 taulukkoriviä ja 29 yksilöllistä mallilinkkiä. Jokainen linkki avattiin ohjelmallisesti rakennetussa selaimessa, ja kaikki 29 palauttivat oikean mallin ilman epäonnistumisia. Suora valintaosoite palautti HONOR 400 Pron sekä hakunäppäimistöllä valittu HONOR X5c Plus muodosti oikean pysyvän osoitteen.

Haut `Honor Magic 8 Pro`, `HONOR MAGIC 8 PRO`, `HONOR Magic V 5`, `honor x 5c plus` ja `HONOR 400 Smart` nostivat tarkoitetun mallin ensimmäiseksi ilman saman mallin kaksoistulosta. Nuolinäppäin valitsi `aria-activedescendant`-vaihtoehdon, Enter avasi mallin ja hakukentällä oli näkyvä 3 pikselin focus-outline. HONOR-sivulla oli 0 pikseliä vaakaylivuotoa 1440, 360 ja 320 pikselin leveyksissä; valittu tulos tarkistettiin myös 768 pikselissä ilman ylivuotoa.

HONOR 400 Pron tulos näytti `Security updates active`, `No public end date` ja Android-version tuelle `Not established`, Suomen nykylistan suoran tietoturvatilan ja rytmin sekä globaalin AER-rekisterin vähimmäislupauksen vain lähteistetyssä selitteessä. Tuntemattomia julkaisu-, Android-tuen loppu- ja tietoturvan loppupäiviä ei peitetty tai arvioitu. Koska yhdelläkään HONOR-tietueella ei ole valmistajan vahvistamaa loppupäivää, yhtään niistä ei lisätty laskennallisiin `Ending within 12 months`- tai `Recently ended` -listoihin.

Konsolissa ei ollut sovelluksen virheitä tai varoituksia. Paikallinen preview palautti odotetusti 404:n Cloudflaren tuotantokohtaisesta `/cdn-cgi/trace`-osoitteesta. Testiselain ja vain tätä varmennusta varten käynnistetty preview suljettiin. Ennen työtä käynnissä ollut saman projektin Astro dev -prosessi jätettiin koskemattomaksi.

## Brändikattavuuden laajennus, 29.8.2026

Tämä osio kuvaa HONOR-lisäystä edeltänyttä 771 puhelimen aineistoa. Sen jälkeen oleva 28.8.2026 päivätty raportti on alkuperäisen kuuden brändin toteutushistoriaa, joten sen 641 puhelimen määrät eivät kuvaa myöhempää tilaa.

### Lopputila

Checkerissä on 771 kanonista puhelintietuetta ja 10 käyttäjälle näkyvää brändiä. Lähtötilan 641 tietueeseen lisättiin 130 tietuetta eikä yhtään vanhaa tietuetta poistettu.

| Brändi | Puhelimia | Muutos | Lähde ja rajaus |
| --- | ---: | ---: | --- |
| Fairphone | 7 | 0 | Aiempi aineisto |
| Google | 38 | 0 | Aiempi aineisto |
| Motorola | 153 | 0 | Aiempi aineisto |
| OnePlus | 9 | 0 | Aiempi aineisto |
| OPPO | 36 | +36 | [OPPO UK Product Security Update Period](https://www.oppo.com/uk/psti/), vain puhelimiksi luokitellut mallit, joiden tietoturvatuki on käynnissä tai päättynyt enintään 12 kuukautta ennen tarkistuspäivää |
| POCO | 28 | +28 | [Xiaomi Product Software Support Information](https://trust.mi.com/misrc/updates/detail?tab=phone), globaali puhelinrekisteri samalla 12 kuukauden historiallisella rajalla |
| Redmi | 39 | +39 | Sama Xiaomin virallinen rekisteri ja rajaus |
| Samsung | 410 | 0 | Aiempi aineisto |
| Sony | 24 | 0 | Aiempi aineisto |
| Xiaomi | 27 | +27 | Sama Xiaomin virallinen rekisteri ja rajaus |

Kaikki neljä uutta nimeä ovat erillisiä kuluttajalle näkyviä brändejä. POCO- ja Redmi-mallit löytyvät myös hauilla, joissa on emobrändi Xiaomi. Paljas `Xiaomi`-haku asettaa varsinaiset Xiaomi-mallit emobrändialiasilla löytyvien POCO- ja Redmi-mallien edelle. Mallinimet, välilyöntivariantit ja 5G- sekä plus-variantit säilyvät erillisinä. OPPO A5:n samassa lähteessä erikseen luetellut tallennustilavaihtoehdot yhdistetään yhdeksi malliksi. Globaalisti epäselvä Xiaomi-Leica-yhteismalli, tabletit, muut kuin puhelimet, tulevat julkaisut ja yli 12 kuukautta sitten tuesta poistuneet mallit rajataan pois.

Xiaomin rekisteri julkaisee tässä käytetyt julkaisu- ja tietoturvan päättymispäivät päivätarkkuudella. OPPO UK julkaisee tietoturvan päättymispäivät päivätarkkuudella, mutta ei samassa luettelossa julkaisupäiviä. Siksi 36 OPPO-mallin julkaisu, kaikkien 130 uuden mallin Android-tuen päättymä ja päivitysrytmi jäävät avoimesti tuntemattomiksi. Xiaomin tiedot ovat globaaleja; OPPO-tiedot koskevat Britannian julkaistua luetteloa. Alue-, operaattori- ja mallivarianttien erot kerrotaan menetelmäsivulla ja tietueiden caveat-teksteissä.

HMD/Nokia jätettiin edelleen pois, koska tarkistettu nykyinen lähde ei antanut yhtenäistä mallikohtaista tukipäättymätaulukkoa. Nothingia tai muita tutkittuja ehdokkaita ei lisätty ilman vastaavaa koherenttia virallista näyttöä. Kymmenen vahvan brändin tavoite täyttyi ilman heikompien tietojen nostamista katalogiin.

### Browse by brand

Pääsivun aiempi avoin `details`-ohjaus ja sen plus/miinusmerkki poistettiin. Tilalla on aina näkyvä semanttinen osio, jossa ovat kaikki 10 brändiä, niiden puhelinmäärät ja laskettu yhteenveto `10 brands, 771 phones`. Brändilista käyttää samaa typografiaa ja hillittyä värimaailmaa kuin muu checker. Asettelu on viisi saraketta leveällä näytöllä, kolme tabletilla, kaksi pienellä näytöllä ja yksi erittäin kapealla näytöllä. Logoja, koristekortteja, värillisiä reunuksia tai sivuraitoja ei lisätty.

### Päivitysputki ja tarkistukset

`scripts/phone-support/import.mjs` tuntee nyt Xiaomin JSON-rekisterin ja OPPO UK -sivun julkaiseman tuoteluettelon. `scripts/update-phone-support.mjs` noutaa ja tallentaa niiden raakakopiot, ja `scripts/check-phone-support.mjs` rakentaa saman katalogin täysin paikallisista snapshoteista. Skeemavalidointi, lähdehostien sallittu lista, yksilöivät tunnisteet, aliasristiriitojen poisto, riskidiffi ja kuiva-ajo kattavat myös uudet lähteet.

Tämän laajennuksen varmennus ennen selaintarkistusta:

| Tarkistus | Tulos |
| --- | --- |
| Ensimmäinen `node scripts/update-phone-support.mjs` | Exit 0; 130 lisäystä, 0 poistoa, 7 turvallista aliasmuutosta, ei estävää riskiä |
| `node scripts/update-phone-support.mjs --apply` | Exit 0; kaksi uutta raakakopiota, katalogi ja päivitysraportti tallentuivat |
| Lopullinen `node scripts/update-phone-support.mjs` | Exit 0; 0 lisäystä, 0 poistoa, 0 muutosta ja 0 estävää riskiä; tiedostoihin ei tehty muutoksia |
| `npm run check:phone-support` | Exit 0; 771 puhelinta, 10 brändiä ja 25 käytettyä lähdettä validoitu täysin paikallisesti |
| `npm run check` | Exit 0; 110 tiedostoa, 0 virhettä, 0 varoitusta ja 0 vihjettä |
| `npm run build` | Exit 0; 1580 staattista sivua |
| `npm run test:phone-support` | Exit 0; 35/35 testiä |
| `npm test` | Exit 0; 94/94 testiä |
| `npm run check:phone-support-sources` | Exit 1; uudet Xiaomi- ja OPPO-lähteet HTTP 200, yhteensä 19 saavutettavaa, 5 automaatiolta 403-rajoitettua ja 1 ennestään käytetty Samsung-lähde aikakatkaistu |

### Selainvarmennus

Selaintarkistus tehtiin rakennetulle `dist`-tuotokselle paikallisessa Astro-preview'ssa Playwright CLI:llä. Kaikki neljä uutta brändilinkkiä avattiin Browse by brand -osiosta. OPPO-sivulla oli 36, POCO-sivulla 28, Redmi-sivulla 39 ja Xiaomi-sivulla 27 taulukkoriviä. Jokaisella sivulla oli oikea H1, oikea URL ja 0 pikseliä vaakaylivuotoa.

Paljaat `oppo`, `poco`, `redmi` ja `xiaomi` -haut näyttivät oikean brändin malleja. Edustavat haut `OPPO Find X8 Pro`, `POCO F7`, `Redmi Note 14 Pro` ja `Xiaomi 15` valittiin näppäimistöllä. Jokainen muodosti oikean vakaan `model`-URL:n ja näytti virallisen tietoturvapäivän. Aliakset `xiaomi poco f7`, `xiaomi redmi note 14 pro` ja `oppo find x 8 pro` palauttivat oikean mallin ilman samaa mallia tarkoittavaa kaksoistulosta.

Suora URL palautti OPPO Find X8 Pro -valinnan. Sen laajennettu aikajana näytti Android-version tuen tilana `Not established` ja päivitysrytmin tilana `Unknown`; scope-osio kertoi Britannian rekisterin sekä maa-, alue- ja varianttirajauksen. Xiaomi 12T näytti `Support ending soon`, päättymispäivän 13.10.2026 ja noin yhden kuukauden jäljellä olevan ajan. OPPO Reno10 näytti `Security support ended`, päättymispäivän 1.7.2026 ja noin kaksi kuukautta sitten päättyneen tuen.

Browse by brand näytti kaikki 10 brändiä ja lasketun `10 brands, 771 phones` -tekstin ilman erillistä paljastusohjausta. Asettelu oli 1440 pikselissä 5 saraketta, 768 pikselissä 3, 360 pikselissä 2 ja 320 pikselissä 1. Kaikissa leveyksissä oli 10 kohdetta ja 0 pikseliä vaakaylivuotoa. Nuolinäppäin asetti `aria-activedescendant`-arvon POCO F7 -vaihtoehtoon, Escape sulki ehdotukset ja säilytti kohdistuksen hakukentässä. Tab siirsi kohdistuksen ensimmäiseen brändilinkkiin, jolla oli näkyvä 3 pikselin focus-outline.

Konsolissa ei ollut sovelluksen virheitä tai varoituksia. Localhostissa Cloudflaren tuotantokohtainen `/cdn-cgi/trace` palautti odotetusti 404:n. Testiselain suljettiin ja vain tätä työtä varten käynnistetty preview-prosessi pysäytettiin. Ennen työtä käynnissä ollut saman projektin Astro dev -prosessi PID 24076 osoitteessa `::1:4321` jätettiin koskemattomaksi.

## Alkuperäinen toteutusraportti, 28.8.2026

Toteutus- ja varmennusraportti, 28.8.2026. Työ on tehty vain nykyiseen paikalliseen työpuuhun; mitään ei ole julkaistu.

## Lähtötilanne ja rajaus

Työ tehtiin paikallisesti haarassa `codex/analyzer-user-value`, lähtö-HEAD `60c390d2e5ad0392e37c6d150f1ece8c29972a11`. Nykyiset `AGENTS.md` ja koko `PROJECT.md` luettiin ennen muutoksia. Käytössä on Astro 7.2.0, Tailwind 4.3.1, Node 24.19.0 ja npm 11.17.0. Vanhempi Astro 6 -maininta ei vastannut asennettua projektia.

Astro tuottaa staattisen `dist`-hakemiston. `BaseLayout.astro` omistaa navigaation, alatunnisteen, metatiedot ja olemassa olevan yleisen analytiikan. Artikkelihaku ja yhdeksän julkaistua kieliversiota käyttävät nykyisiä yhteisiä toteutuksia. Uusi tukiaineisto on erillään artikkelikokoelmasta ja artikkelien lähderekisteristä.

Ennen työtä muutettuja tiedostoja olivat `scripts/articles-content.test.mjs`, `scripts/italian-articles.test.mjs`, `scripts/italian-source-integrity.test.mjs`, `scripts/seo-metadata.test.mjs`, `src/components/Header.astro`, `src/components/Footer.astro` ja `src/styles/global.css`. Stagessa ei ollut muutoksia. Lisäksi juuressa oli 22 olemassa olevaa seuraamatonta raporttitiedostoa, mukaan lukien `PROJECT.md`. Niitä ei sisällytetty uuden ominaisuuden muutosjoukkoon.

Lähtötaso: `npm run check` onnistui, 87 tiedostoa ja 0 virhettä/varoitusta. `npm run build` onnistui, 1568 HTML-sivua. `npm test` onnistui, 59/59 testiä. `git diff --check` onnistui. Käyttäjän mainitsemat kaksi mahdollista Obsidian-tiedostonimivirhettä eivät enää esiintyneet nykyisessä lähtötilanteessa. Olemassa olevan SEO-tarkistuksen 156 otsikkopituushuomiota olivat jo lähtötilanteessa; kuvauspituushuomioita oli 0.

## Aineisto ja poissulut

Lopullinen aineisto sisältää 641 puhelinta kuudelta valmistajalta. Aineistoversio on `1`, muodostamisaika `2026-08-28T15:57:51.935Z` ja tarkistuspäivä `2026-08-28`. Määrät tuotetaan käyttöliittymässä katalogista, niitä ei kovakoodata julkiseen tekstiin.

| Valmistaja | Puhelimia | Keskeinen virallinen näyttö | Toissijainen tai puuttuva tieto |
| --- | ---: | --- | --- |
| Google Pixel | 38 | Saatavuuskuukaudet, nykyiset tukikäytännöt, vanhojen mallien päättynyt tila | Vanhojen mallien historialliset päättymiskuukaudet endoflife.date-aineistosta |
| Samsung | 410 | 104 mallin nykyinen tietoturvalista ja rytmi; S24:n ja A26:n rajatut viralliset päättymispäivät; S24-sarjan saatavuus | Useimmat julkaisu- ja tukipäättymistiedot toissijaisia; tukiarviot yleensä vuositarkkuudella; moni tieto tuntematon |
| OnePlus | 9 | Seitsemän mallin Britannian PSTI-tietoturvapäivä | Julkaisut ja kahden vanhemman mallin tietoturvapäättymiset toissijaisia; Android-päättymispäivä tuntematon kaikille |
| Motorola | 153 | Razr 50 Ultra, Razr 60 ja Razr 60 Ultra: mallikohtainen tietoturvakuukausi, nykyinen rytmi ja rajatut ohjelmistotiedot | Muut tietoturvatiedot ja useimmat julkaisut toissijaisia kuukausiarvoja; Android-päättymispäivää ei arvata |
| Fairphone | 7 | Mallikohtaiset tietoturvasitoumukset, vanhojen mallien päättyminen ja dokumentoitu rytmi | Osa julkaisuista toissijaisia; Android-päättymiset tuntemattomia; Fairphone 5:n virallisten lähteiden ristiriita säilytetään |
| Sony Xperia | 24 | Britannian mallikoodikohtaiset tietoturvapäättymispäivät | Julkaisupäivät toissijaisia; Android-päättymispäivää tai rytmiä ei johdeta päivityshistoriasta |

Kuuden API-tuotteen 674 lähtörivistä jätetään pois 33. Tarkat tunnisteet ja syyt ovat `data/phone-support/update-report.md`-tiedostossa. Rajaus poistaa Pixel Tablet -mallin, kolme OnePlus Pad -mallia, Samsungin kellot, tabletit ja muut kuin Android-mallit sekä saman Samsung Galaxy S5 -variantin kaksoismerkinnän.

Samsung luokittelee Galaxy View- ja View2-mallit tableteiksi [omassa laiteluettelossaan](https://www.samsung.com/py/offer/tabs10-launch/). Galaxy K zoom säilyy: [Samsungin tiedote](https://news.samsung.com/global/samsung-introduces-the-galaxy-k-zoom-a-new-camera-specialized-smartphone) nimeää sen älypuhelimeksi.

Motorolan `moto-g-pure` ja `moto-g-pure-2021` viittaavat samaan [valmistajan tuotesivuun](https://en-us.support.motorola.com/app/software-security-update/g_id/7112/productid/11179), mutta niiden julkaisu- ja tietoturvakuukaudet eroavat. Suora HTTP 200 -vastaus ei sisältänyt mallin tietoja, joten ristiriitaa ei voitu ratkaista. Molemmat jätetään pois; raakafaktat säilyvät.

Nokia/HMD ei sisälly ensimmäiseen versioon, koska tutkittu lähtöaineisto johtaa päättymisiä laajasta mallisarjan vuosioletuksesta. Sitä ei nosteta mallikohtaiseksi dokumentoiduksi tukisitoumukseksi. Taittuvat puhelimet kuuluvat mukaan. Tulevaisuudessa julkaistavaksi merkittyjä laitteita ei päästetä julkiseen indeksiin.

## Kanoninen skeema ja provenienssi

Tyypit ovat `src/data/phoneSupport/types.ts`-tiedostossa. Katalogissa on `version`, `generatedAt`, `reviewedAt`, `attribution`, `brands`, `sources` ja `records`.

Jokainen `PhoneRecord` sisältää:

- Vakaan `id`-tunnisteen, `brandId`, `brand`, `model`, `aliases`, `searchTerms` ja `deviceType: "phone"`.
- `release`-päivämääräväitteen.
- Erilliset `os.state`, `os.end`, `security.state` ja `security.end` -väitteet.
- `cadence`-väitteen, `caveats`, `reviewedAt`, `sourceRevision` ja `conflicts`.

Kaikilla väitteillä on oma `evidenceType`, `sourceIds` ja `checkedAt`, tarvittaessa selittävä `note`. Päivämäärällä on `value` ja `precision`: `day`, `month`, `year`, `ongoing` tai `unknown`. Tukitilat ovat `active`, `ended`, `unknown` ja `conflict`. Tuntematon arvo voi viitata lähteeseen, joka ei tarjoa kyseistä tietoa; lähdeviite ei muuta tuntematonta arvoa tunnetuksi.

Näyttöluokat ovat `official-date`, `official-policy`, `official-current-list`, `secondary-dataset`, `derived-from-policy` ja `unknown`. Julkinen lähderekisteri kertoo tunnisteen, julkaisijan, otsikon, suoran HTTPS-linkin, tarkistus- ja noutopäivän sekä virallisen/toissijaisen tyypin.

Raakadata, käsin tarkistetut annotaatiot ja julkinen katalogi säilytetään erillisinä. Virallinen päivämäärä tai perusteltu käytännöstä johdettu arvio ohittaa heikomman toissijaisen arvion vain kyseisessä kentässä. Nykyinen tukilista ei luo päättymispäivää. Ristiriitoja ei hävitetä, eikä aiempi ratkaisu saa automaattisesti kattaa muuttunutta raakafaktaa.

## Laskenta, haku ja vertailu

`support.mjs` käyttää injektoitavaa nykyhetkeä ja UTC-kalenteripäiviä. Kuukausi ja vuosi ovat sisäisiä aikavälejä; julkiseen tekstiin ei muodosteta niiden ensimmäisestä tai viimeisestä päivästä tekaistua tarkkaa päivää. Virallinen eksplisiittinen päättynyt tila huomioidaan myös kuluvan kuukauden sisällä.

Julkiset tilat ovat `Supported`, `Security updates active`, `Security updates only`, `Support ending soon`, `Security support ended` ja `Support details incomplete`. `Security updates active` tarkoittaa, että tietoturvatuki on aktiivinen mutta Android-version tuen tila ei ole tiedossa. Päättyminen seuraavien 12 kuukauden aikana muodostaa ending-soon-tilan. Ratkaisematon ristiriita muodostaa incomplete-tilan. Ilman päättymispäivää oleva aktiivisuushavainto vanhenee 90 päivässä; tämä on runcheckin avoimesti selitetty tuoreussääntö, ei valmistajan lupaus.

Jäljellä oleva aika esitetään kokonaisina vuosina ja kuukausina, kuukausiarvioissa sanalla `About`, samassa kuussa esimerkiksi `Ends this month`. Vuosiarvo ei tuota kuukausi- tai päivätarkkuutta. Historiallisesta pelkästä vuosiarvosta sanotaan esimerkiksi `Ended in 2026`. Negatiivista kestoa, desimaalivuosia tai tukipisteytystä ei ole.

`search.mjs` normalisoi kirjainkoon, välilyönnit, välimerkit, plus-merkit, 5G-kirjoitusasun, valmistajaprefiksit ja yksiselitteiset Xperia-sukupolvien roomalaiset numerot. Järjestys on täsmällinen mallinimi, täsmällinen alias, alkuosa, kaikki sanat, osittainen sanavastaavuus. Tuloksia näytetään enintään kahdeksan. Eri 5G- tai aluevariantteja ei yhdistetä samankaltaisen nimen perusteella. Aliasristiriidat ratkaistaan yksiselitteisesti ja raportoidaan.

URL sisältää vain validoidut vakaat `model`- ja `compare`-tunnisteet. Tuntematon, monistettu tai sama vertailutunniste ei muodosta virheellistä valintaa. Takaisin/eteenpäin käyttää `popstate`-palautusta. Kanoninen osoite säilyy `/phone-support/`-osoitteena.

Vertailu esittää julkaisut, Android- ja tietoturvatuen, jäljellä olevan ajan, rytmin, kenttäkohtaisen näytön ja tarkistuspäivät. Myöhempi tietoturvapäättymä korostetaan vain tunnetuille erillisille tuleville aikaväleille, joiden näyttö on vertailukelpoista. Tuntematon, ristiriitainen, päättynyt tai toisen kanssa päällekkäinen aikaväli ei saa korostusta. Virallinen ja pelkästään toissijainen päättymä eivät muodosta vahvistettua voittajaa. Mitään kokonaisvoittajaa tai suosituspisteytystä ei lasketa.

## Julkiset sivut ja käyttöliittymä

HTML-reitit:

- `/phone-support/`
- `/phone-support/google-pixel/`
- `/phone-support/samsung/`
- `/phone-support/oneplus/`
- `/phone-support/motorola/`
- `/phone-support/fairphone/`
- `/phone-support/sony-xperia/`
- `/phone-support/methodology/`

Staattiset tiedostot ovat `/phone-support/search-index.json`, `/phone-support/data.json` ja `/phone-support/data.csv`. Yksittäisiä indeksoitavia mallisivuja tai käännettyjä peilisivuja ei luoda. Sitemap sisältää kahdeksan HTML-reittiä ilman kyselyversioita.

Pääsivu käyttää yhtä paikallista hakua, selkeää tulosta, tekstimuotoista aikajanaa, faktalistaa ja kenttäkohtaisia lähteitä. Toinen samanlainen haku avautuu vasta valinnan jälkeen. Valmistajasivujen kaikki rivit tulevat valmiiseen HTML:ään; sivut ovat hyödyllisiä ilman JavaScriptiä. Taulukot järjestetään kapealla näytöllä riveittäin ja niiden taulukkosemantiikka säilytetään.

Käyttöliittymä käyttää nykyisiä fontteja, sisältöleveyksiä, tummia pintoja, neutraaleja viivoja ja näkyvää kohdistusta. Uusia korttiruudukoita, värillisiä sivupalkkeja, logoja, piirtoalustoja tai kaaviokirjastoja ei ole.

Haku lataa oman staattisen indeksin vasta vuorovaikutuksesta tai jaetun valintalinkin palautuksesta. Keskeneräinen pyyntö ja valmistunut aineisto jaetaan hakujen välillä. Virhe palauttaa uudelleenyrityksen. Mallinimiä, hakutekstiä tai lähdeotsikoita ei syötetä `innerHTML`-rajapintaan. Ominaisuus ei lisää tallennusta, evästeitä, hakuhistoriaa, käyttäjätilejä tai syötekohtaista analytiikkaa. Sivuston olemassa oleva yleinen analytiikka säilyy.

Etusivun lyhyt esittely on Features-osion jälkeen ennen Pricing-osiota. Headerin ja Footerin linkki näkyy vain englanninkielisillä sivuilla. Artikkelihaun aineisto ja kielireitit säilyvät ennallaan. Nykyinen `BaseLayout` tuottaa canonical-, Open Graph- ja Twitter-metatiedot. Pääsivulla on WebApplication ja murupolku, valmistajasivuilla ItemList ja murupolku. Checker ja menetelmäsivu eivät ole artikkeleita. Dataset-merkintää ei lisätty.

## Päivitystyönkulku ja lisenssi

Tutkittu rajapinta on [endoflife.date API v1](https://endoflife.date/docs/api/v1/), vastausskeema 1.2.1. Rajapinta on edelleen Beta. V0 on vanhentunut. Tuotteet ovat `pixel`, `samsung-mobile`, `oneplus`, `motorola-mobility`, `fairphone` ja `sony-xperia`.

API:n tuotekohtaisia lisäkenttiä käsitellään erikseen. API ei säilytä alkuperäistä päivämäärätarkkuutta eikä tarjoa jokaiselle riville sen alkuperäislähteitä. Samsungin arviot ja Motorolan kuukaudet normalisoidaan tämän vuoksi lähdekohtaisesti. OnePlusin päivityssukupolvien määrää ei muunneta kalenterivuosiksi. `false` ja `null` eivät tarkoita aktiivista tukea.

Ylläpitäjän komennot:

```sh
npm run update:phone-support
npm run update:phone-support -- --apply
npm run check:phone-support
npm run check:phone-support-sources
npm run check
npm run build
npm test
npm run test:phone-support
git diff --check
```

Päivitys on oletusarvoisesti kirjoittamaton dry run. Se noutaa kuusi API-tuotetta tunnistettavalla user agentilla, rajatulla rinnakkaisuudella, aikakatkaisulla ja vain tilapäisille vioille soveltuvilla uusintayrityksillä. HTTPS, kohdepalvelin, uudelleenohjaukset, status, sisältötyyppi, JSON ja skeema tarkistetaan. Kaikki haut ja validointi valmistuvat ennen `--apply`-kirjoituksia. Yksittäiset tiedostot korvataan atomisesti, julkinen katalogi viimeisenä.

Verkkoesto paljasti myös Astron oman build-telemetriapyynnön. `npm run build` käynnistää siksi saman asennetun Astro CLI:n pienen Node-esilatauksen kautta: `scripts/build-environment.mjs` asettaa vain build-prosessiin `ASTRO_TELEMETRY_DISABLED=1`. Tämä on [Astron dokumentoima poiskytkentä](https://astro.build/telemetry/). Koneen yleisiä asetuksia, Astro-konfiguraatiota, Cloudflaren build-komentoa/tuloshakemistoa tai sivuston Google/Cloudflare-analytiikkaa ei muuteta.

Raportti näyttää lisäykset, poistot, muuttuneet faktat, lähdeversiot, tarkkuusmuutokset, ristiriidat ja poissulut. Näytön heikkeneminen, käsittelemätön poisto tai uusi ratkaisematon ristiriita estää soveltamisen. Tarkkuusmuutos vaatii tuoreen nimenomaisen tarkistetun annotaation. Päivitetyn aineiston jälkeen ajetaan offline-validointi, build ja testit; tavallinen build ei kutsu päivitys- tai lähdetarkistusta.

Erillinen lähdekomento tarkistaa lähteiden käytön, tunnisteet, päivät, HTTPS:n, tarkoitetut palvelimet, ohjaukset, vastaustyypin ja ilmeiset soft 404 -sivut. Tunnettu käyttörajoitus raportoidaan rajoituksena, ei onnistuneena väitetarkistuksena. HTTP 200 ei todista lähteen tukevan jokaista siihen liitettyä väitettä.

Toissijaiset faktat julkaistaan [endoflife.date-projektin MIT-lisenssin](https://github.com/endoflife-date/endoflife.date/blob/master/LICENSE) mukaisesti. Tekijänoikeus- ja lupateksti säilyy `data/phone-support/NOTICE.txt`-tiedostossa sekä julkisissa JSON- ja CSV-vienneissä. Valmistajien pitkiä sivutekstejä tai logoja ei kopioida. Vienneissä ei ole raakaskrapauslokeja, sisäisiä polkuja, tunnuksia tai julkaisemattomia annotaatioita. JSON ja CSV perustuvat samaan julkiseen tietoprojektioon.

## Kaikki julkisissa väitteissä käytetyt lähteet

Kaikkien alla olevien lähteiden aineistoon merkitty tarkistuspäivä on 28.8.2026. Verkkotarkistuksen rajoitukset eritellään varmennusosiossa.

| Tunniste | Julkaisija ja lähde |
| --- | --- |
| eol-pixel | [endoflife.date: Google Pixel](https://endoflife.date/pixel) |
| eol-samsung-mobile | [endoflife.date: Samsung Mobile](https://endoflife.date/samsung-mobile) |
| eol-oneplus | [endoflife.date: OnePlus](https://endoflife.date/oneplus) |
| eol-motorola-mobility | [endoflife.date: Motorola](https://endoflife.date/motorola-mobility) |
| eol-fairphone | [endoflife.date: Fairphone](https://endoflife.date/fairphone) |
| eol-sony-xperia | [endoflife.date: Sony Xperia](https://endoflife.date/sony-xperia) |
| google-pixel-updates | [Google: Learn when you'll get software updates](https://support.google.com/pixelphone/answer/4457705?hl=en) |
| google-pixel-availability | [Google: Pixel availability](https://support.google.com/pixelphone/answer/15738422) |
| samsung-security-scope | [Samsung: Security Updates Scope](https://security.samsungmobile.com/workScope.smsb) |
| samsung-s24-availability | [Samsung: Galaxy S24 worldwide availability](https://news.samsung.com/global/samsung-galaxy-s24-series-is-now-available-worldwide) |
| samsung-s24-uk-security | [Samsung: Galaxy S24 UK business specifications](https://www.samsung.com/uk/business/smartphones/galaxy-s/galaxy-s24-onyx-black-128gb-sm-s921bzkdeub/) |
| samsung-a26-ie-security | [Samsung: Galaxy A26 Ireland specifications](https://www.samsung.com/ie/smartphones/galaxy-a/galaxy-a26-5g-mint-256gb-sm-a266blgceub/) |
| oneplus-uk-psti | [OnePlus: Product Security Update Period](https://www.oneplus.com/uk/psti) |
| motorola-razr-50-ultra-security | [Motorola: Razr 50 Ultra security](https://en-us.support.motorola.com/app/software-security-update/g_id/7112/productid/12039) |
| motorola-razr-60-security | [Motorola: Razr 60 security](https://en-gb.support.motorola.com/app/software-security-update/g_id/7112/productid/12220) |
| motorola-razr-60-ultra-security | [Motorola: Razr 60 Ultra security](https://en-us.support.motorola.com/app/software-security-update/g_id/7112/productid/12209) |
| fairphone-software-support | [Fairphone: Software and security support](https://support.fairphone.com/hc/en-us/articles/9979180437393-How-long-will-my-Fairphone-receive-software-and-security-updates) |
| fairphone-aer | [Fairphone: Android Enterprise Recommended](https://www.fairphone.com/aer) |
| fairphone5-legal | [Fairphone: Fairphone 5 tagline explained](https://www.fairphone.com/legal/fairphone-5-tagline-explained) |
| fairphone1-faq | [Fairphone: Fairphone 1 FAQ](https://support.fairphone.com/hc/en-us/articles/6217522827281-Fairphone-1-Frequently-Asked-Questions-FAQ) |
| fairphone5-release-notes | [Fairphone: Fairphone 5 release notes](https://support.fairphone.com/hc/en-us/articles/18682800465169-Fairphone-5-Release-Notes) |
| sony-security-periods | [Sony: Product security update periods](https://www.sony.co.uk/electronics/support/articles/00304000) |
| sony-android-overview | [Sony: Xperia Android version overview](https://www.sony.co.uk/electronics/support/articles/SX243901) |

## Muutetut tiedostot ja testit

Uudet tiedostot:

- `data/phone-support/raw/{pixel,samsung-mobile,oneplus,motorola-mobility,fairphone,sony-xperia}.json`
- `data/phone-support/official/pixel-oneplus-fairphone.json`
- `data/phone-support/official/samsung-sony-motorola.json`
- `data/phone-support/NOTICE.txt` ja `data/phone-support/update-report.md`
- `scripts/phone-support/import.mjs` ja `scripts/phone-support/validate.mjs`
- `scripts/build-environment.mjs`
- `scripts/update-phone-support.mjs`, `scripts/check-phone-support.mjs` ja `scripts/check-phone-support-sources.mjs`
- `scripts/phone-support.test.mjs`, `scripts/phone-support-import.test.mjs` ja `scripts/phone-support-output.test.mjs`
- `src/data/phoneSupport/{types.ts,catalog.json,catalog.mjs,search.mjs,support.mjs}`
- `src/components/PhoneSupportChecker.astro`, `src/components/PhoneSupportSearch.astro` ja `src/components/PhoneSupportPromo.astro`
- `src/scripts/phone-support.ts`
- `src/pages/phone-support/{index.astro,[brand].astro,search-index.json.ts,data.json.ts,data.csv.ts}` ja `src/pages/phone-support/methodology/index.astro`
- Tämä raportti `docs/phone-support.md`.

Rajatut muutokset olemassa oleviin tiedostoihin: `package.json` (neljä ylläpito/testikomentoa ja build-telemetrian esto), `src/pages/index.astro` (esittely), Header ja Footer (englanninkielinen linkki), `global.css` (uuden ominaisuuden tyylit ja linkin vaatima header-mitoitus), `scripts/seo-metadata.test.mjs` (kahdeksan uuden julkisen sivun mukaanotto nykyiseen tarkistukseen).

Laskentatestit kattavat päivätarkkuudet, kaikki tukitilat, tuoreuden, päättyneen kuluvan kuukauden, aikajanan, hakusijoituksen, aliakset, turvallisen URL-tilan ja vertailun. Tuontitestit käyttävät tallennettuja API-fixtureja ja injektoituja HTTP-vastauksia: kenttäkartoitukset, poissulut, virheet, uusintayritykset, rinnakkaisuus, dry run, apply, diff, heikentyvän näytön esto ja toistettavuus. Tuotostestit lukevat vasta tuoreen buildin: reitit, taulukot, metatiedot, sitemap, indeksit, vientien rivipariteetti, attribuutio, kielirajaus ja vanhojen työkalujen poissaolo.

## Varmennustulokset

### Lähdeverkon tulos

Lopullinen `npm run check:phone-support-sources` palautti exit 1: **17 reachable, 5 restricted, 1 failed**. Viisi rajoitettua lähdettä olivat `fairphone-software-support`, `fairphone1-faq`, `fairphone5-release-notes`, `sony-android-overview` ja `sony-security-periods` (HTTP 403). Näiden sisältö tarkistettiin tutkimusvaiheessa web-lukutyökalulla; automaattinen HTTP-tarkistus ei kuitenkaan vahvistanut sitä uudelleen.

`samsung-s24-availability` aikakatkaistiin kolmen yrityksen jälkeen. Myös erillinen yksi 20 sekunnin uusintayritys aikakatkaistiin. Tarkistuksen JSON-tulostavan apukomennon exit 0 ei ole onnistunut lähdetarkistus: sen tulos oli nimenomaisesti `kind: error`. Aiempi kokonaisajo ennen Fairphone-rajoitusmerkintöjä palautti exit 1: 17 reachable, 2 restricted, 4 errors. Rajoitusmerkinnät eivät muuttaneet lähdeväitteitä.

### Toteutuksen aikana korjatut havainnot

- Vuositarkka päättyminen ei enää väitä vuodenvaihteessa tuen päättyneen kokonainen vuosi sitten.
- Kuluvan kuukauden virallinen päättynyt tila estää vertailukorostuksen.
- Nykyisen kuukauden/vuoden tuleva aikajanapiste ei asetu Today-pisteen edelle vain sisäisen alkupäivän vuoksi.
- Uusi raakafakta ei voi käyttää vanhaa, eri arvoon sidottua ristiriitaratkaisua.
- Virallinen korjaus ei peitä mahdotonta, julkaisua edeltävää tuontipäivämäärää.
- Asiakasvalidointi hyväksyy lähteisiin viittaavat tuntemattomat kentät mutta hylkää tyhjän, epäyhteensopivan tai virheellisen 200-vastauksen latausvirheenä.
- Uuden valmistajasivun kolme TypeScript-virhettä korjattiin tyypittämällä yhteisen lajittelufunktion syöte.
- Uuden testin virheellinen oletus poistettujen työkalujen tyhjien hakemistojen puuttumisesta korjattiin: testi tarkistaa toteutus- ja tuotostiedostojen poissaolon. Käyttäjän tyhjiä hakemistoja ei poistettu.
- Kuukausien erisnimet säilyvät isolla alkukirjaimella tuloslauseessa.
- Kapean taulukon caption-leveys ja solujen kohdistus korjattiin; taulukot siirtyvät luettavaan pinottuun muotoon myös 768 pikselin leveydellä.
- Suurennettu vertailunäkymä paljasti, että sama caption-leveyssääntö venytti ruudunlukijalle tarkoitettua piilotettua otsikkoa. Sääntö rajattiin näkyviin otsikoihin. Vertailun vaakaylivuoto poistui sekä 360 pikselissä että kaksinkertaisessa suurennusemuloinnissa.
- Uuden englanninkielisen navilinkin vuoksi artikkelihaun avattu kenttä rajataan tabletin leveydellä niin, ettei se paina logoa muiden linkkien alle. Muiden kielten navigaatiota ei muutettu.

### Tarkistuskomennot ja tulokset

Alla ovat suoritetut build-, testi-, ylläpito- ja rajauskomennot sekä myös korjattujen väliajojen epäonnistumiset. Tiedostojen lukemiseen käytetyt `Get-Content`- ja `rg`-haut eivät muuttaneet tiedostoja. Tavallisten tarkistusten viimeinen järjestys oli `npm run check`, `npm run build`, `npm test`, `git diff --check`. Tuotostestejä ei ajettu vanhentunutta `dist`-hakemistoa vasten.

| Komento tai ajo | Tarkka tulos |
| --- | --- |
| Lähtötason `npm run check` | Exit 0; 87 tiedostoa, 0 virhettä, 0 varoitusta, 0 huomiota. |
| Lähtötason `npm run build` | Exit 0; 1568 sivua, 40.80 s. |
| Lähtötason `npm test` | Exit 0; 59 testiä läpi, 0 epäonnistunutta ja 0 ohitettua. |
| Lähtötason `git diff --check` | Exit 0; vain olemassa olevia LF/CRLF-ilmoituksia. |
| Ensimmäinen toteutuksen `npm run check` | Exit 1; 3 uuden valmistajasivun TypeScript-virhettä. Korjattu yhteisen lajittelufunktion tyypityksellä. |
| Seuraavat kaksi `npm run check` -ajoa | Molemmat exit 0; 109 tiedostoa ja 0 virhettä, varoitusta tai huomiota. |
| Ensimmäinen toteutuksen `npm run build` | Exit 0; 1576 sivua, 16.04 s. |
| Ensimmäinen toteutuksen `npm test` | Exit 1; 90/91 läpi. Ainoa virhe oli uuden testin oletus tyhjän vanhan työkaluhakemiston puuttumisesta. Oletus korjattiin, käyttäjän hakemistoa ei poistettu. |
| Ensimmäinen verkkoestetty `npm run build` | Exit 1; esto havaitsi yhden Astron oman telemetrian `fetch`-yrityksen. Tukilähteisiin ei yritetty yhteyttä. |
| Telemetriakorjauksen jälkeinen verkkoestetty `npm run build` | Exit 0; 1576 sivua, 8.15 s; 0 verkkopyritystä. |
| Sen jälkeinen `npm test` | Exit 0; 92/92 läpi, 0 epäonnistunutta ja 0 ohitettua. |
| Lopullinen `npm run check` | Exit 0; 110 tiedostoa, 0 virhettä, 0 varoitusta, 0 huomiota. |
| Lopullinen verkkoestetty `npm run build` | Exit 0; 1576 sivua, 12.98 s; 0 verkkopyritystä. |
| Lopullinen `npm test` | Exit 0; 92/92 läpi, 0 epäonnistunutta ja 0 ohitettua; 13130.9311 ms. |
| `npm run test:phone-support` | Exit 0; 33/33 läpi, 0 epäonnistunutta ja 0 ohitettua; 1107.9931 ms. Nämä testit sisältyvät myös 92 testin kokonaisajoon. |
| `node --test scripts/phone-support-import.test.mjs` | Exit 0; 17/17 läpi. |
| `node scripts/update-phone-support.mjs` ennen viimeistä tallennusta | Exit 0; oikea kuuden API-tuotteen verkkokuiva-ajo, 4 tarkistettua poistoa, 0 estävää riskiä, ei kirjoituksia. |
| `node scripts/update-phone-support.mjs --apply` | Exit 0; oikea verkkohaku ja 641 puhelimen validoidun snapshotin tallennus. |
| `node scripts/check-phone-support.mjs` ja `npm run check:phone-support` | Exit 0; 641 puhelinta, 23 käytettyä lähdettä, paikallinen uudelleennormalisointi vastaa katalogia. |
| Lopullinen `npm run update:phone-support` | Exit 0; oikea verkkokuiva-ajo, 0 lisättyä, 0 poistettua ja 0 muuttunutta puhelinta. Kaikkien 11 aineisto-/raporttitiedoston SHA-256-tarkistussummat säilyivät samoina. |
| `npm run check:phone-support-sources` | Exit 1; 17 saavutettavaa, 5 rajoitettua, 1 aikakatkaistu lähde. Katso tarkat poikkeukset yllä. |
| `git status --short --untracked-files=all` | Exit 0; alkuperäiset paikalliset muutokset ja 22 alkuperäistä seuraamatonta raporttia säilyvät. Uudet tiedostot kuuluvat tähän ominaisuuteen. |
| `git diff --stat` | Exit 0; Git näyttää yhdeksän muutettua seurattua tiedostoa, joista kolme artikkelitestiä olivat jo muuttuneita ja säilyivät tässä työssä koskemattomina. |
| `git diff --cached --stat` | Exit 0; ei tulostetta, ei staged-muutoksia. |
| `git rev-parse HEAD` | Exit 0; edelleen `60c390d2e5ad0392e37c6d150f1ece8c29972a11`. |
| `git diff --check` toteutuksen ja raportin jälkeen | Exit 0; ei whitespace-virheitä. Gitin LF/CRLF-ilmoitukset eivät ole tarkistuksen epäonnistumisia. |

Tuontityön aiemmassa väliajossa oli 14/15 läpäisevää testiä: Samsung W26 -testi sekoitti raakadatasta muodostetun tilan ja virallisella nykylistalla täydennetyn tilan. Testi rajattiin oikeaan tuontivaiheeseen, minkä jälkeen 15/15 läpäisi. Myöhemmin lisättyjen regressioiden kanssa lopputulos oli 17/17. Ensimmäinen tuonnin kuiva-ajo pysähtyi exit 1:een Moto G Stylus 2022:n aliasristiriidan vuoksi; 5G-vapaan aliaksen muodostus korjattiin ennen onnistunutta tallennusta.

Tuontitiedostojen rajattu tarkistus ajettiin myös erikseen, exit 0 ilman tulostetta:

```sh
git diff --check -- scripts/phone-support scripts/update-phone-support.mjs scripts/check-phone-support.mjs scripts/check-phone-support-sources.mjs scripts/phone-support-import.test.mjs data/phone-support src/data/phoneSupport/catalog.json
```

Buildin tuotostestit tarkistivat kahdeksan uuden HTML-reitin, sitemapin, kanoniset URL:t, otsikot, kuvaukset, OG/Twitter-metatiedot, rakenteisen datan, sisäiset linkit, kaikki 641 valmistajataulukoiden riviä sekä hakuindeksin/JSON/CSV-vientien tietuepariteetin ja lisenssitekstin. Query-malliosoitteita tai uusia käännettyjä checker-reittejä ei ilmestynyt sitemapiin.

### Offline-varmennuksen menetelmä

Tavallinen `npm run build` ajettiin väliaikaisen, repon ulkopuolisen Node-esilatauksen alaisena. Se pysäytti ja kirjasi verkkoyritykset `fetch`-, HTTP/HTTPS-, socket-, TLS-, DNS-, datagrammi- ja WebSocket-rajapinnoista. Suojan oma savutesti osoitti, että tarkoituksellinen `fetch` estyi. `NODE_OPTIONS` ja lokimuuttuja palautettiin jokaisen ajon jälkeen aiempaan tilaansa.

Sekä telemetriakorjauksen jälkeinen että viimeinen build valmistuivat 1576 sivuun. Molempien verkkoyrityslokit ovat tyhjiä, 0 tavua. Normaali build käyttää siis vain paikallista aineistoa eikä tarvitse ulkoista verkkopalvelua. Tämä oli Node-verkkorajapintojen estotesti, ei koneen verkkokortin irrotus tai käyttöjärjestelmätason palomuuritesti.

Paikalliset ajolokit ja rajausvertailu ovat väliaikaishakemistossa `C:\Users\EmmaH\AppData\Local\Temp\runcheck-phone-support-20260828`. Keskeiset tiedostot ovat `final-check-4.log`, `offline-build-3.log`, `offline-network-attempts-3.jsonl`, `final-test-3.log`, `focused-tests.log`, `dry-run.log`, `source-check.log`, `baseline-files.json`, `scope-check.json` ja `cleanup.json`. Niitä ei lisätty julkisiin vienteihin tai repon muutosjoukkoon.

### Selainvarmennus

Selaintarkistus tehtiin oikealle staattiselle `dist`-tuotokselle localhost-esikatselussa. Näyttökorkeus oli tavallisesti 900 pikseliä. Kaikissa viidessä alkunäkymässä oli yksi H1, haku ensimmäisessä näkymässä eikä vaakavieritystä. Scrollbarin varaaman tilan jälkeen `scrollWidth` vastasi dokumentin `clientWidth`-arvoa.

| Leveys | Tarkistettu näkymä tai tila |
| ---: | --- |
| 360 px | Alkutila, Sony Xperia 1 VI, Fairphone 5:n ristiriita, Fairphone-valmistajataulukko, pinottu vertailu, menetelmäsivu, etusivun linkki ja mobiilivalikko. Dokumentin leveys 345 px ilman ylivuotoa. |
| 430 px | Alkutila, Pixel 6:n pian päättyvä tuki, Fairphone 3:n päättynyt tuki, Samsung A05:n security-only-tila, Samsung A04:n nykylistaan perustuva tila, Motorola-taulukko, lataus- ja virhetilat, URL-palautus. Dokumentin leveys 415 px ilman ylivuotoa. |
| 768 px | Alkutila, `s22 ultra` -alias, Google- ja Sony-taulukot, menetelmäsivu sekä englanninkielisen headerin avoin artikkelihaku. Dokumentin leveys 753 px ilman ylivuotoa. |
| 1024 px | Alkutila, OnePlus 11 ja OnePlus-valmistajataulukko. Dokumentin leveys 1009 px ilman ylivuotoa. |
| 1440 px | Alkutila, Motorola Razr 50 Ultra, Samsungin 410 mallin taulukko, Pixel 9/Pixel 8 -vertailu ja tavallisen käytön verkkotarkistus. Dokumentin leveys 1425 px ilman ylivuotoa. |

Kaikista kuudesta valmistajasta valittiin oikea puhelin. Päivä-, kuukausi- ja vuositarkkuus sekä erilliset Android- ja tietoturvakentät näkyivät odotetusti. Fairphone 5 ei saanut varmaa päättymispäivää, kestoa tai aikajanan loppupistettä. Samsung A04 näytti aktiivisen nykylistahavainnon ilman keksittyä päättymää. Sen vertailu Pixel 9:ään kertoi riittävän päivämääränäytön puuttuvan.

Näppäimistöllä tarkistettiin ArrowDown, ArrowUp, Enter ja Escape. `aria-expanded`, `aria-controls` ja `aria-activedescendant` seurasivat tilaa. Enter siirsi kohdistuksen tulos- tai vertailuotsikkoon, jonka kohdistus oli näkyvä. Ehdotukset sulkeutuivat Escapesta, Tabista ja ulkopuolisesta klikkauksesta. Tyhjä ja tulokseton haku näyttivät omat viestinsä. Vertailtavaa samaa puhelinta ei tarjottu toiseksi valinnaksi.

Latausvirheet testattiin selaimessa vain paikallisen hakuindeksin vastaukseen kohdistuvalla sieppauksella. Viivästetty vastaus näytti latausviestin; Escape piti listan suljettuna vastauksen valmistuttua. Hallittu HTTP 503 näytti hyödyllisen virheen ja uudelleenyrityksen, joka palautti oikeat tulokset. Myös HTTP 200 mutta tyhjä aineisto hylättiin jaetun vertailulinkin palautuksessa: se ei muuttunut virheellisesti onnistuneeksi tyhjäksi hauksi. Uudelleenyritys palautti Pixel 9:n ja Pixel 8:n molemmat valinnat.

Jaettu linkki palautti yhden tai kaksi puhelinta. Takaisin poisti vertailun, eteenpäin palautti sen. Tuntematon `model` ja riippuvainen `compare` poistettiin URL:sta ilmoituksen kanssa. Sama malli kahdessa valinnassa säilytti vain päämallin. Kanoninen osoite pysyi aina `https://runcheckapp.com/phone-support/`-osoitteena.

200 prosentin suurennusta vastaava tarkistus tehtiin selaimen renderöintiemuloinnilla: 1440 x 900 -kehyksessä 720 x 450 CSS-pikselin näkymä, `scale: 2` ja `deviceScaleFactor: 2`. Haku, näppäimistövalinta, vertailu, näkyvä kohdistus ja rivittyminen toimivat; dokumentin leveys oli 705 px ja sisältö samat 705 px. Selaimen oma Ctrl+plus-pikanäppäin ei tässä ympäristössä muuttanut zoomia, joten natiivin zoom-valikon toimintaa ei väitetä testatuksi. Samalla `prefers-reduced-motion: reduce` oli aktiivinen ja tulosotsikon siirtymä käytti välitöntä vieritystä.

Fairphone-valmistajasivu ladattiin myös JavaScript-suoritus poistettuna käytöstä. Selaimen DOM sisälsi taulukon ja kahdeksan riviä: otsikkorivin sekä kaikki seitsemän puhelinta. JavaScript palautettiin tämän jälkeen. Näkyvien caption-otsikoiden leveys vastasi kapeaa taulukkoa; piilotettu vertailucaption jäi yhteen pikseliin eikä kasvattanut sivun leveyttä.

Etusivun `Check phone support`, headerin ja footerin `Phone support` sekä pääsivun menetelmälinkki avasivat oikeat sivut. Menetelmäsivulla oli 23 käytetyn lähteen suoraa linkkiä sekä JSON- ja CSV-viennit. Suomalaisella artikkelireitillä headerissa ja footerissa oli 0 checker-linkkiä. Mobiilivalikon Escape palautti kohdistuksen avauspainikkeeseen ja suljettu navigaatio oli `inert`. Englanninkielinen artikkelihaku palautti `battery`-haun tulokset 768 pikselissä; logo ei leikkautunut eikä osunut muihin navilinkkeihin.

Viimeinen tavallisen käytön tarkistus tehtiin puhtaassa testivälilehdessä ilman virhevastauksia. Ennen hakuvuorovaikutusta indeksipyyntöjä oli 0. Päämallin haku, vertailuhaku ja takaisin/eteenpäin tuottivat yhteensä yhden `/phone-support/search-index.json`-pyynnön. Valmistajien tai endoflife.date-palvelun datapyynnöt: 0. Havaitut ulkoiset pyynnöt kuuluivat olemassa olevaan Google/Cloudflare-analytiikkaan. Konsolin error/warn-lista oli tyhjä. Hallittu 503-virhe testattiin eri välilehdessä eikä sitä laskettu normaalikäytön virheeksi.

### Säilynyt työ ja siivous

Alkutilanteen 1622 tiedoston SHA-256-vertailussa muuttui täsmälleen kuusi vanhaa tiedostoa: `package.json`, `scripts/seo-metadata.test.mjs`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/pages/index.astro` ja `src/styles/global.css`. Yhtään alkutilanteen tiedostoa ei puuttunut. Kaikki 1440 artikkelia säilyivät tavutasolla samoina. Myös kolme muuta valmiiksi muutettua artikkelitestiä ja 22 alkuperäistä seuraamatonta raporttia säilyivät. Headerin, Footerin, CSS:n ja SEO-testin aiempaa cleanup-työtä ei palautettu.

Riippuvuudet, lukitustiedosto, Astro-/Cloudflare-asetukset, artikkelien importteri, lähderekisteri, kielisopimukset, julkaistut artikkeli-URL:t, hinnoittelu ja analytiikan konfiguraatio eivät muuttuneet. Build-käynnistyksen telemetriaesilataus on ainoa rakennuskomennon muutos. Poistettujen Battery Future-, Phone Checkup-, Charging Analyzer- ja Tools-toteutusten puuttuminen tarkistettiin lähde- ja tuotostesteillä.

Esikatseluprosessi tunnistettiin PID:n 2152, vanhemman 28004 ja tämän repon Astro-preview-komentorivin perusteella ennen pysäyttämistä. Sillä ei ollut lapsiprosesseja. Vain tämä prosessi pysäytettiin; jälkitarkistuksessa prosessia ei ollut ja portin 4321 kuuntelijoita oli 0. Testien ja buildien kertaluonteiset komennot päättyivät. Selainemuloinnit palautettiin ja toimivat testivälilehdet suljettiin.

Selainvälineen URL-turvarajoitus esti ensimmäisen, aiemmasta käynnistysvirheestä jääneen `This site can't be reached` -virhevälilehden sulkemisen. Se jäi selaimeen; esikatselupalvelinta tai muuta omaa taustapalvelua ei jätetty käyntiin. Jaettua selainta tai muita käyttäjän prosesseja ei lopetettu tämän takia.

### Jäljelle jäävät rajoitukset

Koodin tarkistus, build, kaikki testit ja paikallinen aineistovalidointi läpäisevät. Lähtötilanteesta ei jäänyt epäonnistuvaa testiä; jo olemassa olleet 156 SEO-otsikkopituushuomiota eivät kuulu tämän työn muutoksiin. Lähdeverkko ei läpäissyt kokonaan yllä eriteltävien viiden käyttörajoituksen ja yhden aikakatkaisun vuoksi. Fairphone 5:n dokumentoitu lähderistiriita on tarkoituksella edelleen näkyvä epävarmuus. Valmistajien alue- ja operaattorierot sekä lähteiden myöhempi muuttuminen jäävät ylläpidettäväksi aineiston ilmoitetun tarkistuspäivän jälkeen.

Työssä ei tehty committia, pushia, deployta tai pull requestia. Muutokset ovat vain paikallisessa työpuussa.
