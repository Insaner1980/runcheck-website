---
title: "Miksi puhelimessa ei ole signaalia, ja miten ongelman voi korjata?"
description: "Käytännön ohjeet Android-puhelimen No Signal-, No Service- ja Emergency Calls Only -ilmoitusten korjaamiseen sekä SIM-, eSIM-, operaattori-, APN-, päivitys- ja laitteistotarkistuksiin."
listSummary: "verkko, yhteydet ja android"
hub: "network"
sourceNumber: 102
order: 13
tags: ["verkko","yhteydet","android","vianetsintä","opas"]
locale: "fi"
draft: false
---
Puhelimessa lukee `No Signal`, `No Service` tai `Emergency Calls Only`, ja kädessäsi oleva kallis pieni tietokone muuttuu yhtäkkiä kameraksi, joka toimii vain Wi-Fi-yhteydellä. Ärsyttävää, mutta ei aina vakavaa.

Ratkaisevaa on erottaa toisistaan kolme mahdollista syytä: puhelin, SIM tai eSIM ja operaattorin verkko. Arvaileminen vie aikaa. Kun testaat ne järjestyksessä, vian lähde löytyy yleensä melko nopeasti.

## Tee ensin nämä kolme asiaa

Ota lentotila käyttöön, odota noin 15 sekuntia ja poista lentotila käytöstä. Tämä pakottaa puhelimen katkaisemaan verkkorekisteröinnin ja yrittämään yhteyttä uudelleen.

Käynnistä puhelin uudelleen. Uudelleenkäynnistys lataa modeemin, SIM-palvelut ja operaattoriasetukset uudelleen. Jos radiojärjestelmä on jumissa, tämä usein riittää.

Jos käytät fyysistä SIM-korttia, sammuta puhelin, irrota SIM-kelkka, tarkista että kortti on puhdas ja suora, ja aseta se tukevasti takaisin. Hieman löystynyt SIM voi katkaista palvelun pudotuksen tai suojakuoren vaihdon jälkeen.

Jos käytät eSIMiä, älä poista eSIM-profiilia ensimmäisenä toimenpiteenä. Avaa `Settings > Network & internet > SIMs` ja varmista, että eSIM-liittymä on käytössä. Profiilin poistaminen voi muuttaa pienen ongelman operaattorin asiakaspalvelua vaativaksi selvitykseksi.

## Tarkista, onko operaattorilla häiriö

Tämä ei ole tyydyttävin vastaus, mutta yleinen: puhelin toimii ja operaattorin verkossa on vika.

Kysy läheiseltä saman operaattorin asiakkaalta, toimiiko hänen liittymänsä. Tarkista operaattorin sovellus, häiriötiedote tai tukisivu. Downdetector voi antaa vihjeen, mutta se perustuu käyttäjien ilmoituksiin, ei operaattorin omiin verkkodiagnostiikkatietoihin.

Jos usealla saman operaattorin asiakkaalla ei ole palvelua samalla alueella, lopeta puhelimen asetusten muuttaminen. Odota häiriön korjaantumista tai siirry toiseen paikkaan.

## Varmista, että SIM-liittymä on aktiivinen

Puhelin voi näyttää, ettei palvelua ole, jos SIM-liittymä on poistettu käytöstä, liittymä on suljettu, prepaid-saldo tai voimassaolo on päättynyt, eSIM-profiili on siirretty toiseen laitteeseen tai puhelin on lukittu eri operaattorille.

Pixelissä ja monissa Androidin kevyesti muokattua versiota käyttävissä puhelimissa avaa `Settings > Network & internet > SIMs`, valitse SIM ja tarkista, että `Use SIM` ja `Mobile data` ovat käytössä.

Samsungissa tarkista `Settings > Connections > SIM manager` ja `Settings > Connections > Mobile networks`.

Jos puhelimessa lukee `No SIM`, SIM-kortti voi olla vaurioitunut, passiivinen tai jäädä tunnistamatta. Jos siinä lukee `Emergency Calls Only`, puhelin näkee verkon mutta ei pysty tunnistautumaan normaalisti. Se viittaa usein SIM-korttiin, liittymään, operaattorilukitukseen tai roaming-asetukseen eikä täysin hajonneeseen antenniin.

## Android 17:n tai muun suuren päivityksen jälkeen

Android 17 julkaistiin useimmille tuetuille Pixel-laitteille kesäkuussa 2026, kun taas Samsung, OnePlus, Xiaomi, Motorola ja muut valmistajat noudattavat omia päivitysaikataulujaan. Jos signaaliongelma alkoi heti suuren päivityksen jälkeen, ajoituksella on merkitystä.

Älä palauta tehdasasetuksia heti. Tee ensin nämä:

- Käynnistä puhelin uudelleen vielä kerran päivityksen valmistuttua.
- Tarkista, onko saatavilla uusi järjestelmä- tai operaattoriasetusten päivitys.
- Kytke lentotila kerran päälle ja pois.
- Nollaa vain mobiiliverkon asetukset, jos Android-versiosi tarjoaa erillisen vaihtoehdon.
- Jos 5G toimii epävakaasti, valitse väliaikaisesti ensisijaiseksi verkkotyypiksi LTE tai 4G ja testaa uudelleen.

Osa päivityksen jälkeisistä alkuvaiheen ongelmista korjataan kuukausipäivityksillä tai operaattoriasetusten päivityksillä. Tehdasasetusten palautuksen pitäisi olla listan loppupäässä, ei alussa.

## Tarkista ensisijainen verkkotyyppi

Avaa SIM-asetukset ja etsi `Preferred network type` tai `Network mode`. Valitse automaattinen vaihtoehto, joka sisältää korkeimman tuetun verkkosukupolven, esimerkiksi `5G/LTE/3G/2G` tai `5G/4G/3G/2G`.

Jos puhelin on pakotettu verkkosukupolveen, jota alueella ei enää ole, se voi näyttää ettei palvelua ole. Näin voi käydä vanhalla pelkän 3G:n asetuksella maassa, jossa 3G-verkko on suljettu. Sama voi tapahtua, jos valitsit testausta varten vain LTE:n tai vain 5G:n ja unohdit vaihtaa automaattiseen tilaan.

Samsungissa polku on yleensä `Settings > Connections > Mobile networks > Network mode`.

Xiaomissa ja POCOssa tarkista `Settings > SIM cards & mobile networks`.

Käytä asetusten hakua, jos valmistaja on siirtänyt valikon. Niillä on tapana tehdä niin.

## Palauta verkon valinta automaattiseksi

Operaattorin manuaalinen valinta voi jättää puhelimen väärään verkkoon. Tämä on tavallista matkan jälkeen.

Etsi SIM-asetuksista `Automatically select network` tai `Network operators` ja ota automaattinen valinta käyttöön. Jos se ei onnistu, käynnistä manuaalinen haku ja valitse oma operaattori luettelosta.

Jos olet roaming-verkossa, varmista liittymäsi ehdot ennen dataroamingin käyttöönottoa. Puhepalvelun ja dataroamingin säännöt voivat poiketa toisistaan.

## Tarkista APN-asetukset dataongelmissa

APN-asetukset kertovat Androidille, miten se yhdistyy operaattorin dataverkkoon. Väärä APN aiheuttaa yleensä mobiilidatan tai MMS-viestien ongelmia eikä täydellistä signaalin katoamista, mutta se voi tehdä verkkoviasta pahemman näköisen.

Pixelissä ja vakio-Androidissa polku on `Settings > Network & internet > SIMs > Access Point Names`. Samsungissa se löytyy yleensä kohdasta `Settings > Connections > Mobile networks > Access Point Names`.

Valitse `Reset to default`, jos APN-luettelo näyttää väärältä tai tyhjältä. Virtuaalioperaattorin tai pienemmän operaattorin kohdalla käytä sen oman tukisivun APN-arvoja. Älä kopioi satunnaisia asetuksia keskustelupalstalta, ellet halua tehdä vianmääritystä kahdesti.

## Nollaa verkkoasetukset

Jos SIM on aktiivinen ja asetukset näyttävät normaaleilta, nollaa verkkoasetukset. Tämä poistaa tallennetut Wi-Fi-verkot, Bluetooth-pariliitokset, VPN-asetukset ja mobiiliverkon määritykset. Se ei poista sovelluksia, kuvia, viestejä tai tiedostoja.

Pixelissä ja uusissa puhtaamman Androidin versioissa avaa `Settings > System > Reset options`. Näkyvissä voi olla yksi yhdistetty vaihtoehto `Reset Wi-Fi, mobile & Bluetooth` tai uudemmat erilliset valinnat, kuten `Reset mobile network settings` ja `Reset Bluetooth & Wi-Fi`.

Samsung: `Settings > General management > Reset > Reset network settings`.

Xiaomi ja POCO: hae asetuksista `reset network`, koska polku vaihtelee MIUI- ja HyperOS-versioiden välillä.

Käynnistä puhelin nollauksen jälkeen uudelleen ja anna sille minuutti aikaa rekisteröityä operaattorin verkkoon.

## Testaa SIM-kortti toisessa puhelimessa

Tämä on selkein tapa lopettaa arvaileminen.

Aseta SIM toiseen lukitsemattomaan puhelimeen, joka tukee operaattorisi taajuuksia. Jos se toimii siellä, SIM ja liittymä ovat todennäköisesti kunnossa ja ongelma on alkuperäisessä puhelimessa. Jos palvelua ei ole toisessakaan puhelimessa, vika on SIM-kortissa, liittymässä tai operaattorin verkkoprofiilissa.

Kokeile mahdollisuuksien mukaan myös varmasti toimivaa SIM-korttia omassa puhelimessasi. Jos se saa yhteyden, puhelimen laitteisto on todennäköisesti kunnossa.

eSIMin vastaava testi on hankalampi, koska profiilin siirtäminen voi vaatia uuden aktivoinnin operaattorilta. Asiakaspalvelu voi tällöin tarkistaa, onko eSIM-profiili edelleen aktiivinen ja liitetty oikeaan laitteeseen.

## Tarkista käytetyn puhelimen IMEI

Jos puhelin on ostettu käytettynä, tarkista IMEI. Saat sen näkyviin valitsemalla `*#06#`.

Puhelin voi menettää normaalin verkkoyhteyden, jos se on ilmoitettu kadonneeksi tai varastetuksi ja IMEI on lisätty mustalle listalle. Tuontipuhelin voi myös olla operaattorilukittu. Suomessa varastettu laite voidaan lisätä operaattorin mustalle listalle poliisille tehdyn rikosilmoituksen perusteella, ja listaa käyttävät kaikki kotimaiset sekä suurin osa eurooppalaisista operaattoreista. Käytä mahdollisuuksien mukaan oman operaattorin tarkistusta tai ota siihen yhteyttä. Kolmannen osapuolen IMEI-palvelu voi antaa vihjeen, mutta operaattori ratkaisee, pääseekö laite sen verkkoon.

## Sijainti ja rakennusmateriaalit vaikuttavat

Signaalin voimakkuus voi muuttua nopeasti. Puhelimessa voi olla täydet palkit ulkona mutta ei palvelua kellarissa, hississä, metallikattoisessa hallissa, maanalaisessa pysäköintihallissa tai betonisessa kerrostalossa.

Siirry ikkunan lähelle tai käy ulkona. Jos palvelu palaa, puhelin tekee työnsä. Rakennus vaimentaa signaalin.

Myös paksu suojakuori voi heikentää vastaanottoa, jos siinä on metallilevyjä, magneetteja tai huonosti sijoitettuja lisäosia. Irrota kuori hetkeksi, jos ongelma alkoi telineen, lompakkokuoren tai magneettirenkaan lisäämisen jälkeen.

Wi-Fi-puhelu on tavallinen ratkaisu, kun mobiiliverkko kuuluu sisällä heikosti mutta Wi-Fi-yhteys toimii hyvin.

## Signaalin voimakkuus kertoo enemmän kuin palkit

Palkit ovat karkea arvio. dBm on hyödyllisempi.

Monissa Android-puhelimissa signaalin voimakkuus löytyy polusta `Settings > About phone > SIM status > Signal strength`. Arvo voi olla esimerkiksi `-85 dBm` tai `-110 dBm`. Mitä lähempänä nollaa luku on, sitä voimakkaampi signaali.

Karkeasti noin `-50 dBm`:stä `-90 dBm`:iin on käyttökelpoinen alue, alle `-100 dBm` on heikko ja noin `-120 dBm` lähes käyttökelvoton. Kokemus riippuu verkkotyypistä, ruuhkasta ja operaattorin asetuksista, joten älä pidä lukua yksiselitteisenä hyväksytty/hylätty-testinä.

Valintakoodi `*#*#4636#*#*` avaa testivalikon joissakin Android-puhelimissa, mutta monet operaattorit ja valmistajat estävät sen. Jos mitään ei tapahdu, puhelin ei ole rikki.

runcheck voi näyttää signaalin voimakkuuden ja verkkotietojen muutokset ajan mittaan, mikä kertoo enemmän kuin palkkien tuijottaminen kymmenen sekunnin ajan. Signaaliongelmat riippuvat usein paikasta, vuorokaudenajasta ja siitä, vaihtaako puhelin LTE:n ja 5G:n välillä.

## Milloin laitteistovika on todennäköinen

Laitteistovika muuttuu todennäköisemmäksi, kun kaikki seuraavat pitävät paikkansa:

- SIM-korttisi toimii toisessa puhelimessa.
- Varmasti toimiva SIM-kortti ei toimi omassa puhelimessasi.
- Verkkoasetukset on nollattu.
- Liittymä on aktiivinen.
- Muilla saman operaattorin asiakkailla on palvelu lähellä.
- Puhelimessa ei edelleenkään ole palvelua useassa eri paikassa.

Tavallisia laitteistosyitä ovat vaurioitunut antenni, viallinen SIM-lukija, korroosio SIM-kelkan lähellä tai rikkoutuva RF-komponentti. Pudotukset ja kosteus ovat tavallisimmat taustasyyt.

Etsi kolhuja antennilinjojen läheltä, huonosti istuvaa SIM-kelkkaa, nestevahingon merkkejä, korroosiota tai tuoreita iskun jälkiä. Jos puhelimessa on takuu tai vika kuuluu myyjän lakisääteiseen virhevastuuseen, ota ensisijaisesti yhteyttä myyjään. Takuun puuttuminen tai päättyminen ei Suomessa automaattisesti poista myyjän virhevastuuta. Muussa tapauksessa vertaa korjaushintaa puhelimen nykyiseen arvoon ennen korjauksen hyväksymistä.

## Kannattaako ostaa signaalinvahvistin?

Vain kiinteään paikkaan ja vain silloin, kun ulkona on edes jonkin verran käyttökelpoista signaalia. Vahvistin voi voimistaa olemassa olevaa signaalia. Se ei luo operaattorin verkkoa tyhjästä.

Suomessa matkapuhelinverkon aktiivinen signaalia vahvistava toistin on operaattorin verkon osa, eikä sitä saa asentaa itse. Älä siis tilaa satunnaista suuritehoista vahvistinta markkinapaikalta ja kytke sitä käyttöön. Kysy operaattorilta sopivaa ratkaisua. Mobiilireitittimeen liitettävä ulkoinen suunta-antenni tai Wi-Fi-puhelut voivat olla turvallisia vaihtoehtoja tilanteesta riippuen.
