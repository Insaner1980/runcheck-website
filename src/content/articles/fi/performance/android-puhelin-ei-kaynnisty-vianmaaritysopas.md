---
title: "Android-puhelin ei käynnisty: vianmääritysopas"
description: "Eikö Android-puhelin käynnisty tai jääkö näyttö mustaksi? Aloita turvallisimmista tarkistuksista: latauksesta ja pakotetusta uudelleenkäynnistyksestä Recovery Mode -tilaan ja huoltovaihtoehtoihin."
listSummary: "Eikö Android-puhelin käynnisty tai jääkö näyttö mustaksi?"
hub: "performance"
sourceNumber: 75
order: 12
tags: ["runcheck","seo","android","artikkeli","opas"]
locale: "fi"
draft: false
---
---

Joku liittää puhelimen laturiin, ei näe mitään, painaa virtapainiketta viisi kertaa ja päättelee laitteen kuolleen. Joskus se onkin. Useammin akku on purkautunut täysin, ohjelmisto on jumiutunut näytön ollessa sammuksissa tai näyttö on rikkoutunut, vaikka itse puhelin toimii yhä.

Järjestyksellä on väliä. Aloita vähäriskisistä tarkistuksista. Älä siirry suoraan tehdasasetusten palautukseen, ellei Android selvästi ala käynnistyä eikä muita keinoja ole jäljellä.

## Lataa kuin akku olisi aivan tyhjä

Käytä seinälaturia, älä kannettavan tietokoneen USB-porttia tai langatonta laturia. Langaton lataus on kätevä silloin, kun kaikki toimii, mutta vianmääritykseen se tuo turhia muuttujia, kuten kohdistuksen ja lämmön.

Liitä puhelin laturiin varmasti toimivalla kaapelilla ja virtalähteellä. Anna sen sitten olla rauhassa vähintään 15 minuuttia. Syväpurkautunut puhelin ei välttämättä näytä akkukuvaketta heti. Se on normaalia.

Etsi 15 minuutin kuluttua mitä tahansa elonmerkkiä. Akkukuvake, värinä, latausääni tai pieni merkkivalo kertoo, että virtaa tulee laitteeseen. Anna akun latautua vähintään 10 prosenttiin ennen käynnistysyritystä.

Jos mitään ei näy, vaihda yksi asia kerrallaan: kaapeli, laturi ja pistorasia. Tarkista USB-C-portti taskulampulla. Taskunöyhtä voi pakkautua porttiin niin tiukasti, että kaapeli tuntuu olevan pohjassa, vaikka kunnollista kosketusta ei synny. Jos puhdistat portin, käytä puista hammastikkua tai muovista työkalua. Älä käytä metallia.

## Tee pakotettu uudelleenkäynnistys oikein

Musta näyttö ei aina tarkoita, että Android olisi sammunut. Järjestelmä voi olla jumissa näytön ollessa lepotilassa.

Käytä puhelinmerkkisi pakotettua uudelleenkäynnistystapaa:

- Pixel-puhelimessa pidä Power-painiketta painettuna enintään 60 sekuntia. Vapauta painike, kun Google-logo tulee näkyviin.
- Samsung Galaxy -puhelimessa pidä Side key -painiketta tai Power- ja Volume Down -painikkeita painettuina, kunnes puhelin sammuu ja käynnistyy uudelleen. Tämä kestää yleensä yli 7 sekuntia.
- Xiaomi-, Redmi- ja POCO-puhelimessa pidä Power-painiketta painettuna yli 10 sekuntia.
- Muissa Android-puhelimissa kokeile Power- ja Volume Down -painikkeita yhdessä 10-20 sekunnin ajan. Jos se ei auta, pidä pelkkää Power-painiketta painettuna pidempään.

Värinä, ilmoitusäänet tai toiseen puhelimeen soitettaessa kuuluva soittoääni viittaavat näyttövikaan eivätkä koko laitteen rikkoutumiseen. Se on hyödyllinen vihje. Näytön korjaaminen on harmillista, mutta kyse on eri ongelmasta kuin emolevyn täydellisestä viasta.

## Tarkista, onko vain näyttö pimeänä

Soita puhelimeen. Käytä toisella laitteella Find Hub -palvelua, jos se on otettu käyttöön. Liitä puhelin laturiin ja kuuntele ääntä tai tunnustele värinää. Yhdistä se tietokoneeseen ja tarkista, tunnistaako Windows tai macOS laitteen.

Vaikka tietokone tunnistaisi puhelimen, älä vielä oleta tietojen olevan turvassa. Useimmat nykyaikaiset Android-puhelimet eivät näytä tiedostoja USB-yhteydellä ennen kuin näyttö on avattu ja tiedostonsiirto hyväksytty. Tunnistaminen kertoo silti, että ainakin osa laitteistosta toimii.

Haljennut näyttö, jossa näkyy mustia läiskiä, viivoja tai heikko taustavalo, viittaa näyttövaurioon. Äskettäinen kastuminen on vakavampi asia. Lyhytkin altistus nesteelle voi syövyttää liittimiä tai aiheuttaa myöhemmin oikosulun virransyöttöön.

Turvonnut akku on tilanne, jossa pitää lopettaa. Jos takakansi pullottaa, näyttö irtoaa rungosta tai puhelin ei pysy tasaisesti pöydällä, älä lataa sitä äläkä paina osia takaisin paikoilleen. Vie laite huoltoon.

## Jos logo näkyy mutta puhelin ei käynnisty

Samsung-, Pixel-, Xiaomi- tai Android-logon näkyminen tarkoittaa, ettei laite ole täysin kuollut. Käynnistys vain epäonnistuu kesken prosessin.

Kokeile vikasietotilaa (Safe Mode), jos käynnistys etenee riittävän pitkälle. Monissa laitteissa käynnistyksen aikana painettuna pidetty Volume Down käynnistää puhelimen niin, että ladatut sovellukset ovat poissa käytöstä. Jos vikasietotila toimii, poista viimeksi asentamasi sovellukset ja käynnistä puhelin normaalisti uudelleen.

Jos puhelin jää käynnistyssilmukkaan tai jumiutuu ennen lukitusnäyttöä, seuraava vaihtoehto on Recovery Mode. Pixelissä käynnistetään tavallisesti bootloader pitämällä Power- ja Volume Down -painikkeita painettuina, minkä jälkeen valitaan Recovery Mode. Samsungissa käytetään usein Volume Up- ja Power-painikkeita laitteen ollessa sammutettuna, ja joissakin uudemmissa malleissa USB-kaapeli täytyy olla liitettynä. Xiaomissa yhdistelmä on usein Volume Up + Power.

Valitse Recovery Mode -tilassa ensin Reboot system now. Jos puhelimessa on Wipe cache partition -vaihtoehto, kokeile sitä seuraavaksi, sillä se ei poista omia tietojasi. Pixel-puhelimissa tätä vaihtoehtoa ei yleensä ole, joten ohita se. Wipe data/factory reset on viimeinen paikallinen keino, koska se tyhjentää puhelimen.

Android 17 julkaistiin 16.6.2026, ja se on saatavilla useimmille tuetuille Pixel-laitteille. Muiden valmistajien aikataulut vaihtelevat mallin ja alueen mukaan. Jos käynnistysongelma alkoi heti tämän tai muun suuren käyttöjärjestelmäpäivityksen jälkeen, tarkista valmistajan tukisivulta mahdollinen korjaustyökalu tai päivitystiedote ennen tietojen pyyhkimistä.

## Käytä tietokoneen korjaustyökaluja varoen

Tietokoneella käytettävät työkalut voivat asentaa Androidin uudelleen, mutta ne eivät pelasta tiedostoja taikaiskulla.

Pixel 4a:ssa ja sitä uudemmissa malleissa Googlen Pixel Update and Software Repair on turvallisin ensimmäinen vaihtoehto, jos puhelin saa USB-yhteyden tietokoneeseen. Pixelin tehdaslevykuvia voi asentaa tuettuihin laitteisiin Android Flash Tool -työkalulla WebUSB-selaimen kautta, mutta laitteessa täytyy olla oikea toimintatila ja prosessi voi vaatia lukituksen avaamista tai tietojen pyyhkimistä.

Samsung Smart Switch sisältää hätäpalautuksen joihinkin epäonnistuneisiin ohjelmistopäivityksiin. Xiaomin MiFlash voi asentaa laiteohjelmiston uudelleen tuettuihin puhelimiin, mutta se vaatii usein bootloader- tai fastboot-yhteyden sekä täsmälleen oikean ROM-version omalle mallille.

Tässä kohtaa verkko-oppaat voivat muuttua vaarallisiksi. Väärän ohjelmistoversion asentaminen voi vaikeuttaa palauttamista entisestään. Jos et jo tiedä puhelimen mallinumeroa, aluetta, bootloaderin tilaa ja varmuuskopioiden tilannetta, huoltoliike on turvallisempi vaihtoehto.

## Milloin vika on todennäköisesti laitteistossa

Jos useilla latureilla ei näy latauskuvaketta, värinää tai USB-tunnistusta eikä puhelin reagoi pakotettuun uudelleenkäynnistykseen, vika viittaa laitteistoon.

Tavallisia syitä ovat kuollut akku, vaurioitunut USB-C-portti, rikkoutunut virranhallintapiiri, näyttövika, nestevaurio tai emolevyvika. Akun ja latausportin korjaukset ovat yleensä edullisemmasta päästä. Piiritason emolevyviat eivät ole.

Jos vika voi kuulua takuun, myyjän virhevastuun tai vakuutuksen piiriin, ota ensin yhteys myyjään, takuunantajaan tai vakuutusyhtiöön. Ulkopuolinen korjaus ei automaattisesti poista lakisääteisiä oikeuksia, mutta myyjä tai takuunantaja voi rajata vastuunsa siltä osin kuin vika johtuu ulkopuolisesta korjauksesta.

## Tietojen pelastaminen

Ilman varmuuskopiota käynnistysvika kaventaa vaihtoehtoja nopeasti. Recovery Mode ei anna tavallisen, roottaamattoman puhelimen näyttää tiedostoja. USB-tiedostonsiirto vaatii yleensä näytön lukituksen avaamisen. Kuolleen näytön voi joskus kiertää USB-C-videolähdöllä, telakalla, näppäimistöllä ja hiirellä, mutta vain malleissa, jotka tukevat kuvalähtöä ja käynnistyvät edelleen.

Ammattimainen tietojen palautus on mahdollista, mutta kallista eikä tulosta voida taata. Nykyaikaisen Androidin salaus tarkoittaa myös sitä, ettei pelkkä tallennuspiiri yleensä riitä. Laite täytyy korjata niin pitkälle, että sen lukitus voidaan avata.

Tätä kukaan ei halua kuulla. Varmuuskopiot ovat tylsiä siihen päivään asti, kun niitä tarvitaan.
