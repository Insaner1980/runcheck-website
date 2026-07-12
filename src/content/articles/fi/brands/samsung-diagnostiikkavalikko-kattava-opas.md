---
title: "Samsungin #0#-diagnostiikkavalikko: kattava opas"
description: "Syötät #0# Samsungin Puhelin-sovellukseen, ja tavallinen numeronvalitsin katoaa. Tilalle tulee pelkistetty ruudukko, jonka painikkeilla voi testata näyttöä, kosketuspaneelia, kaiuttimia, antureita, kameroita, värinämoottoria ja fyysisiä painikkeita."
listSummary: "Syötät #0# Samsungin Puhelin-sovellukseen, ja tavallinen numeronvalitsin katoaa."
hub: "brands"
sourceNumber: 160
order: 8
tags: ["valmistaja","android","diagnostiikka","merkkikohtainen","opas"]
locale: "fi"
draft: false
---
Kun valikko toimii, käyttö tuntuu melkein liian helpolta. Kun se ei toimi, tilanne voi olla yllättävän turhauttava, koska Samsung ei esittele valikkoa tavallisena kuluttajaominaisuutena. Käsittele sitä matalan tason huoltovalikkona, joka toimii monissa Galaxy-puhelimissa, ei varmana ominaisuutena jokaisessa mallissa, operaattoriversiossa tai maassa.

## Ennen koodin kokeilemista

Käytä Samsungin Puhelin-sovellusta. Koodi ei välttämättä toimi Google Phone -sovelluksessa tai muussa kolmannen osapuolen numeronvalitsimessa edes samassa laitteessa. Avaa numeronäppäimistö, syötä `*#0*#` ja odota. Soittopainiketta ei paineta.

Jos mitään ei tapahdu, valikko voi olla estetty laiteohjelmistossa, operaattorin asetuksissa, työprofiilissa, MDM-käytännössä tai tietoturva-asetuksissa. Joillakin uudemmilla One UI -versioilla myös Auto Blockerin on raportoitu häiritsevän huolto- ja diagnostiikkakoodeja. Jos kokeilet sen vaikutusta, poista Auto Blocker käytöstä vain lyhyesti ja ota se heti uudelleen käyttöön. Ominaisuus on olemassa syystä.

Useimmille Samsung Members on turvallisempi virallinen varavaihtoehto. Alueesta ja sovellusversiosta riippuen avaa Samsung Members, siirry Tuki-välilehdelle ja valitse Puhelimen vianmääritys tai vastaava diagnostiikkatoiminto. Voit suorittaa kaikki testit tai valita yhden luokan. Se kattaa tarkistukset, joita useimmat oikeasti tarvitsevat, ja antaa selkeämmät ohjeet kuin pelkistetty `*#0*#`-ruudukko.

## Näyttö- ja kosketustestit

Red-, Green-, Blue- ja Black-painikkeet täyttävät näytön tasaisella värillä. Niiden avulla voi etsiä kuolleita tai jumiutuneita pikseleitä, värivirheitä, epätasaista kirkkautta ja näyttövaurioita, jotka eivät erotu taustakuvasta.

Black on erityisen hyödyllinen OLED-näytöllisissä Galaxy-puhelimissa. Todellisen mustan pitäisi näyttää sammutetulta. Kirkkaat pisteet tai värilliset täplät voivat viitata jumiutuneisiin pikseleihin, kun taas sameat alueet voivat kertoa paneelivauriosta tai painejäljestä.

Touch-testi näyttää ruudukon tai kuvion, joka piirretään sormella läpi. Jokaisen osan pitäisi rekisteröityä puhtaasti. Näin löytyvät reunojen kuolleet alueet, jotka jäävät helposti huomaamatta, jos vain kirjoitat muutaman sanan tai selaat Asetuksia.

Dimming-testi muuttaa näytön kirkkautta ja väritoistoa. Etsi välkkymistä, epätasaista kirkkautta, outoja värimuutoksia tai paneelia, joka ei himmene tasaisesti. Vanhoissa LCD-näytöllisissä Galaxy-malleissa voi näkyä taustavalon ongelmia. OLED-malleissa tarkastellaan enemmän pikselien käyttäytymistä ja kirkkauden hallintaa.

## Ääni, värinä ja painikkeet

Receiver toistaa ääntä puhelukaiuttimesta. Speaker käyttää puhelimen pääkaiuttimia. Uusissa stereokaiuttimilla varustetuissa Galaxy-puhelimissa kannattaa kuunnella, ovatko puhelukaiutin ja alakaiutin tasapainossa. Toisen puolen heikkous voi olla merkittävä, vaikka puhelin tuottaisi teknisesti ääntä.

Vibration-testi käynnistää värinämoottorin. Kunnossa oleva moottori tuntuu tasaiselta ja hallitulta. Jos se kolisee, surisee äänekkäästi tai tuntuu karhealta, moottori tai sen sisäinen kiinnitys voi olla kulunut.

Sub key tarkistaa fyysiset painikkeet ja joitakin navigointisyötteitä. Paina äänenvoimakkuus- ja virtapainikkeita sekä testin pyytämiä tuettuja navigointipainikkeita. Jos painike toimii vain kovaa painamalla tai tietystä kulmasta, älä sivuuta sitä. Se ei yleensä ole ohjelmistovika.

## Anturit ja kamerat

Sensor-valikko on yksi parhaista syistä käyttää `*#0*#`-koodia. Se voi näyttää reaaliaikaisia arvoja kiihtyvyysanturista, gyroskoopista, lähestymis- ja valoanturista, magneettianturista, tuettujen mallien barometrista, sormenjälkilukijasta sekä vanhempien Galaxy-mallien sykeantureista.

Muutama tarkistus on helppo. Peitä näytön yläreunan lähellä oleva lähestymisanturi ja seuraa tilan muuttumista. Liikuta puhelinta ja tarkkaile kiihtyvyysanturin arvoja. Kierrä sitä ja tarkista gyroskooppi. Peitä valoanturi ja suuntaa se sitten lamppua kohti.

Anturitulokset vaativat tervettä järkeä. Magneettianturi voi käyttäytyä oudosti kannettavan tietokoneen, magneettisen suojakuoren, autotelineen tai metallipöydän lähellä. Näytönsuoja voi estää lähestymisanturia. Testaa puhtaassa ympäristössä ennen kuin päättelet anturin olevan rikki.

Mega Cam ja Front Cam avaavat taka- ja etukamerat. Ne vahvistavat, että moduulit käynnistyvät, tarkentavat ja ottavat kuvan. Ne eivät todista jokaisen linssin olevan terävä, optisen kuvanvakaimen toimivan oikein tai yökuvien näyttävän hyviltä. Laitteistotestit ovat karkeita työkaluja.

## Muita mahdollisesti hyödyllisiä koodeja

Samsungilla on muitakin numeronvalintakoodeja, mutta niiden tuki vaihtelee mallin, operaattorin, One UI -version ja alueen mukaan. Verkosta löytyviä koodiluetteloita ei pidä käsitellä yleispätevinä.

`*#06#` näyttää IMEI-tunnuksen. Koodi on turvallinen ja toimii laajasti myös muiden valmistajien puhelimissa.

`*#1234#` näyttää monissa Galaxy-laitteissa Samsungin laiteohjelmistotiedot, kuten AP-, CP- ja CSC-koontitunnukset. Niiden avulla voi tarkistaa täsmälleen asennetun ohjelmistoversion.

`*#0228#` voi näyttää monissa Galaxy-puhelimissa akun tilatietoja. Jos näkymä avautuu, käytä sitä nopeana tilannekuvana, älä kattavana battery health -raporttina.

Vanhemmat koodit, kuten `*#7353#`, `*#0842#`, `*#0673#` ja `*#0289#`, voivat edelleen toimia joissakin laitteissa. Toisissa mitään ei tapahdu. Se on nykyään normaalia.

## Mitä `*#0*#` ei pysty todistamaan

Valikko testaa, reagoiko laitteisto juuri sillä hetkellä. Se ei tarjoa pitkäaikaista battery health -historiaa, lataussyklien seurantaa, thermal throttling -lokeja, signal strength -historiaa tai tallennustilan storage I/O -suorituskykyä ajan kuluessa.

Toimiva valikko ei myöskään yksin todista puhelinta aidoksi. Samsungin diagnostiikkavalikon avautuminen on hyvä merkki, mutta ei riittävä. Tarkista käytettyä puhelinta ostaessasi IMEI, laiteohjelmiston koontiversio, Knox-tila silloin kun sillä on merkitystä, ostohistoria ja fyysiset yksityiskohdat.

Puhelin voi läpäistä `*#0*#`-testit ja tuntua silti hitaalta, koska tallennustila on lähes täynnä, huono sovellus toimii taustalla, akun jännite romahtaa kuormituksessa tai uusi päivitys toi virheen. Laitteistotestit eivät selitä kaikkea.

## Milloin Samsung Members on parempi valinta

Käytä Samsung Membersia, jos raaka koodi ei toimi, tarvitset selkeämmän hyväksytty- tai hylätty-tuloksen tai haluat lähettää virheraportin. Samsungin virallinen diagnostiikka voi laitteesta riippuen testata akun tilan, kaapeli- ja langattoman latauksen, kosketusnäytön, anturit, mikrofonin, kaiuttimen, kameran, Wi-Fi- ja Bluetooth-yhteydet, SIM-kortin, mobiiliverkon, sormenjälkitunnistuksen, NFC:n, painikkeet ja muuta.

Vähemmän teknisten käyttäjien kannattaa aloittaa Samsung Membersista. Se kertoo, mitä epäonnistuneen testin jälkeen tehdään. `*#0*#`-valikko olettaa pitkälti, että tiedät jo, mitä katsot.

Kumpikaan työkalu ei silti ole joka tilanteessa toista parempi. Käyttäisin `*#0*#`-valikkoa käytetyn puhelimen näytön, kosketuksen, antureiden ja äänen nopeaan tarkistamiseen. Tavallisessa vianmäärityksessä, tukipyynnöissä ja virallisessa raportoinnissa käyttäisin Samsung Membersia.

## Android 17 ja Galaxy-yhteensopivuus

Android 17:n vakaa julkaisu alkoi tuetuista Pixel-laitteista. Galaxy-puhelimet noudattavat Samsungin omaa One UI -aikataulua, joten Samsungin diagnostiikkavalikko ei muutu vain siksi, että Android 17 on olemassa.

Kun Android 17:ään perustuva Galaxy-päivitys saapuu omalle mallillesi, diagnostiikan käyttö voi edelleen riippua Samsungin Puhelin-sovelluksesta, One UI -versiosta, operaattorin laiteohjelmistosta, alueesta, tietoturva-asetuksista ja Samsung Members -päivityksistä. Se, että koodi toimii yhdessä Galaxy S -sarjan puhelimessa, ei todista sen toimivan vieressä olevassa Galaxy A -sarjan puhelimessa.

Jos `*#0*#` on estetty, älä käytä tuntia numeronvalitsimen kanssa taistelemiseen. Suorita Samsung Membersin vianmääritys.

---

*Metakuvaus: Samsungin `*#0*#`-koodi voi avata Galaxy-puhelimen piilotetun diagnostiikkavalikon näytön, kosketuksen, antureiden, kameroiden, kaiuttimien ja värinän testaamiseen. Oppaassa kerrotaan, mitä valikko tarkistaa ja mitä käyttää, jos koodi on estetty.*
