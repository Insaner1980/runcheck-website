---
title: "Nopeustestin tekeminen Androidissa"
description: "Napautat käynnistyspainiketta, seuraat mittarin liikettä ja saat luvun, joka näyttää lopulliselta totuudelta. Hyödyllinen tulos, kyllä. Lopullinen vastaus, ei."
listSummary: "Napautat käynnistyspainiketta, seuraat mittarin liikettä ja saat luvun, joka näyttää lopulliselta totuudelta."
hub: "network"
sourceNumber: 92
order: 3
tags: ["verkko","yhteydet","android","vianetsintä","opas"]
locale: "fi"
draft: false
---
Testi kertoo, mitä tapahtui juuri sillä hetkellä, valitulla palvelimella ja senhetkisissä verkko-olosuhteissa. Se on tilannekuva, ei yksinään diagnoosi. Silti se on paras ensimmäinen luku silloin, kun puhelimen yhteys tuntuu hitaalta.

## Mitä testi mittaa?

Tavallinen nopeustesti ilmoittaa latausnopeuden, lähetysnopeuden ja viiveen.

Latausnopeus kertoo, kuinka nopeasti data siirtyy puhelimeen. Se vaikuttaa verkkoselailuun, suoratoistoon, sovellusten lataamiseen, pilveen tallennettujen kuvien katseluun ja suurimpaan osaan tavallisesta internetin käytöstä.

Lähetysnopeus kertoo, kuinka nopeasti data lähtee puhelimesta. Sillä on merkitystä videoiden lähettämisessä, kuvien varmuuskopioinnissa, tiedostojen siirrossa, videopuheluissa ja näytön jakamisessa.

Viive, josta käytetään usein nimeä ping, on edestakaisen tiedonsiirron kesto millisekunteina. Pieni viive tekee yhteydestä nopeasti reagoivan. Suuri viive saa napautukset, puhelut, pelit ja etätyön tuntumaan tahmeilta, vaikka latausnopeus näyttäisi hyvältä.

Osa sovelluksista näyttää myös jitterin eli viiveen vaihtelun. 30 ms:n ping pienellä jitterillä tuntuu vakaalta. Jos sama 30 ms:n ping heittelee jatkuvasti, videopuhelu voi silti pätkiä.

## Tee nopea tarkistus Googlen testillä

Avaa selain, hae Googlessa sanoilla **speed test** ja napauta **Run Speed Test**, jos testikortti tulee näkyviin. Testi käyttää Measurement Labin eli M-Labin mittausjärjestelmää ja näyttää tärkeimmät luvut ilman erillisen sovelluksen asentamista.

Tämä sopii nopeaan järkevyystarkistukseen. Testi ei tarjoa kovin kattavaa historiaa eikä ole paras työkalu useiden verkkojen pitkäaikaiseen vertailuun. Kun joku sanoo internetin olevan hidas, sillä näkee kuitenkin nopeasti, saako puhelin 2 Mbps vai 200 Mbps.

## Käytä sovellusta, kun tarvitset historiaa

Speedtest by Ookla on tuttu vaihtoehto. Sillä voi mitata lataus- ja lähetysnopeuden, viiveen ja tavallisesti myös jitterin, valita palvelimen sekä säilyttää tuloshistoriaa. Sovellus sopii Wi-Fi-, LTE- ja 5G-yhteyksien sekä eri sijaintien vertailuun.

FAST by Netflix on yksinkertaisempi. Se näyttää ensin latausnopeuden, koska palvelu on suunniteltu suoratoiston suorituskyvyn arviointiin. Napauta **Show more info**, niin näet myös lähetysnopeuden ja viiveen tiedot.

Meteor by OpenSignal auttaa vähemmän teknistä käyttäjää arvioimalla, riittääkö mitattu yhteys esimerkiksi suoratoistoon, pelaamiseen, verkkoselailuun tai videopuheluihin.

runcheck käyttää sisäänrakennetussa nopeustestissään M-Lab NDT7:ää ja tallentaa tuloksen yhteystyypin sekä signaalitietojen kanssa. Tällä on merkitystä, sillä nopeus yksin voi johtaa harhaan. Huono tulos heikolla signaalilla kertoo eri asiasta kuin huono tulos voimakkaalla signaalilla ja suurella viiveellä.

## Tarkkaile mobiilidatan kulutusta

Jokainen testi siirtää oikeaa dataa. Wi-Fi-yhteydellä sillä ei yleensä ole suurta merkitystä. Mobiilidatalla on.

Pienet selainpohjaiset testit voivat käyttää vain joitakin kymmeniä megatavuja. Nopealla LTE- tai 5G-yhteydellä sovelluspohjainen testi voi käyttää selvästi enemmän, koska se yrittää selvittää, kuinka paljon dataa yhteys pystyy siirtämään testijakson aikana. Useiden testien ajaminen peräkkäin voi kuluttaa satoja megatavuja.

Testaa mobiilidataa siis harkiten. Poista Wi-Fi käytöstä, aja testi kerran tai kahdesti, tallenna tulokset ja lopeta siihen.

## Näin saat puhtaamman tuloksen

Pysy paikallasi. Liikkuminen mobiiliverkkotestin aikana voi saada puhelimen vaihtamaan tukiasemaa, taajuusaluetta tai muita radioyhteyden olosuhteita kesken mittauksen.

Sulje ensin ilmeiset kaistan käyttäjät. Pilvivarmuuskopiointi, sovelluspäivitykset, videotoisto ja tiedostolataukset kilpailevat testin kanssa.

Testaa Wi-Fi ja mobiilidata erikseen. Jos Wi-Fi on käytössä, mittaat Wi-Fi-yhteyttä. Mobiilidatan testaamista varten Wi-Fi pitää poistaa käytöstä.

Tee kolme testiä vain silloin, kun tarvitset luotettavamman keskiarvon. Jos yksi tulos poikkeaa rajusti kahdesta muusta, jätä se pois. Mittaukseen osui todennäköisesti lyhyt ruuhkapiikki, huono palvelinvalinta tai taustalla tapahtunut tiedonsiirto.

Käytä tavallisessa vianmäärityksessä lähellä sijaitsevaa palvelinta. Kaukainen palvelin kasvattaa viivettä ja voi näyttää pienempää nopeutta syistä, jotka eivät liity paikalliseen yhteyteesi. Etäisen palvelimen testaamisesta on hyötyä vain silloin, kun haluat nimenomaan selvittää yhteyden toimivuutta kyseisellä alueella sijaitseviin palveluihin.

## Mitä luvut merkitsevät käytännössä?

Verkkoselailuun ja viestittelyyn voi riittää jopa 5 Mbps, jos viive on pieni. HD-videoon riittää tavallisesti 5-10 Mbps. 4K-suoratoistoon kannattaa varata vähintään 25 Mbps jokaista samanaikaista videovirtaa kohden.

Videopuheluissa lähetysnopeudella ja viiveellä on enemmän merkitystä kuin moni ajattelee. 200 Mbps:n lataustulos ei pelasta puhelua, jos lähetysnopeus on 0,5 Mbps tai jitter on suuri.

Pelaamisessa viive ja jitter ovat latausnopeutta tärkeämpiä sen jälkeen, kun peli on asennettu. Vakaa 40 Mbps:n yhteys voi tuntua paremmalta kuin 400 Mbps:n yhteys, jossa viive piikkaa satunnaisesti.

Pilvivarmuuskopioinnin vaivalloisuuden ratkaisee lähetysnopeus. Se on koti- ja mobiiliyhteyksissä usein paljon latausnopeutta pienempi, joten nopea lataustulos ei tarkoita nopeaa varmuuskopiointia.

## Vertaa tulosta oikeaan lupaukseen

Vertaa kodin Wi-Fi-tulosta laajakaistaliittymän nopeuteen, mutta jätä tilaa langattoman yhteyden häviöille. Jos liittymä on 100 Mbps ja puhelin saa reitittimen lähellä 80 tai 90 Mbps, ongelmaa ei ole. Jos tulos on reitittimen vieressä 25 Mbps, tutki reititintä, kanavaruuhkaa, internetoperaattorin yhteyttä ja muiden laitteiden tiedonsiirtoa.

Mobiiliyhteydellä ei kannata odottaa mainoksissa näkyvää 5G:n huippulukemaa. Todellinen nopeus riippuu operaattorista, taajuusalueesta, tukiaseman kuormituksesta, liittymän nopeusluokasta, sisätilojen signaalista ja puhelimen modeemista. Testaa muutamassa paikassa ennen kuin päättelet vian olevan puhelimessa.

Vertaa tulosta myös siihen, mitä olet tekemässä. Jos suoratoisto toimii, puhelut ovat selkeitä ja sovellukset latautuvat ongelmitta, kauniimman nopeustestiluvun tavoittelu voi olla ajanhukkaa.

## Säilytä tuloksia vain, kun niistä muodostuu tarina

Yksi tulos riittää vahvistamaan, että jokin on vialla. Muutama eri aikaan tehty testi auttaa löytämään toistuvan kaavan.

Tee testi silloin, kun yhteys tuntuu huonolta, ja toinen silloin, kun se toimii normaalisti. Merkitse muistiin verkko, sijainti, kellonaika, signaalin voimakkuus ja se, oliko VPN käytössä.

Juuri tässä historiasta on hyötyä. Jos Wi-Fi-nopeus laskee joka ilta, epäile kodin kuormitusta tai internetoperaattorin ruuhkaa. Jos mobiilidata hidastuu vain yhdessä rakennuksessa, epäile kuuluvuutta. Jos jokainen verkko toimii hitaasti vain yhdessä puhelimessa, tutki puhelinta.
