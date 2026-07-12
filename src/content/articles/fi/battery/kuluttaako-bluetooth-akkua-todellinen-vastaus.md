---
title: "Kuluttaako Bluetooth akkua? Todellinen vastaus"
description: "Bluetooth kuluttaa nykyaikaisessa Android-puhelimessa hyvin vähän akkua. Sen voi yleensä jättää päälle, mutta Bluetooth-haku, huonosti toimivat lisälaitteet ja pitkät kuuntelujaksot voivat lisätä kulutusta."
listSummary: "Bluetooth kuluttaa nykyaikaisessa Android-puhelimessa hyvin vähän akkua."
hub: "battery"
sourceNumber: 32
order: 22
subgroup: "Virrankulutus"
tags: ["akku","myytit","android","testaus","faktat"]
locale: "fi"
draft: false
---
Joku laittaa Bluetoothin pois päältä aina, kun lopettaa nappikuulokkeiden käytön, koska uskoo säästävänsä puoli päivää akkua. Ymmärrän ajatuksen. Se oli ihan kelvollinen neuvo vuosia sitten.

Nykyaikaisessa Android-puhelimessa Bluetoothin jatkuva pois kytkeminen ei yleensä ole vaivan arvoista.

Kun Bluetooth on päällä mutta mitään laitetta ei ole yhdistetty, virrankulutus on hyvin pientä. Android Authorityn 26 tunnin testissä Bluetoothin pitäminen päällä kulutti tyypillistä päivää jäljittelevässä käytössä 1,8 % enemmän akkua kuin sen pitäminen pois päältä. Kulutus ei siis ole nolla, mutta näytön kirkkaus, heikko mobiilisignaali, taustasovellukset ja sijainnin käyttö merkitsevät paljon enemmän.

## Päällä oleva Bluetooth ilman yhteyttä ei ole akkusyöppö

Nykyaikainen Bluetooth viettää suuren osan ajasta lepotilassa. Kun se on päällä mutta yhteyttä ei ole, puhelin ei lähetä jatkuvasti voimakasta radiosignaalia. Se herää hetkeksi, tarkistaa tunnetut laitteet tai laiteparin muodostamiseen liittyvän liikenteen ja hiljenee taas.

Bluetooth Low Energy eli BLE on tärkeä syy siihen, miksi vanha neuvo on menettänyt merkitystään. Android tukee BLE:tä laitteiden löytämiseen, palvelujen kyselyyn ja pienten datamäärien siirtämiseen. Sitä käyttävät esimerkiksi puettavat laitteet, paikantimet, anturit ja muut vähän dataa siirtävät lisälaitteet.

Älykellon yhteys tai aktiivisuusrannekkeen synkronointi voi toimia koko päivän ilman, että siitä tulee puhelimen akun suuri kuluttaja. Kellolla on toki oma akkuongelmansa ratkaistavana, mutta puhelimen puolella kuormitus on yleensä pieni.

## Äänentoisto kuluttaa enemmän, mutta ei vieläkään kovin paljon

Bluetooth-kuulokkeet kuluttavat enemmän virtaa kuin pelkkä päällä oleva Bluetooth ilman aktiivista yhteyttä. Puhelimen täytyy ylläpitää äänivirtaa, käsitellä tai lähettää ääntä ja pitää yhteys vakaana.

Silti Bluetooth on harvoin tärkein syy puhelimen akun loppumiseen. Jos kuuntelet musiikkia kaksi tuntia näyttö sammutettuna, virtaa kuluttavat yhdessä äänisovellus, mobiili- tai Wi-Fi-suoratoisto ja kuulokeyhteys. Bluetooth on osa kokonaisuutta, ei koko kokonaisuus.

Suurempaa bittinopeutta käyttävät koodekit, kuten LDAC ja aptX HD, voivat kuluttaa hieman enemmän virtaa kuin yksinkertaisemmat koodekit, koska dataa liikkuu enemmän ja äänenkäsittely tekee enemmän työtä. Ero on yleensä pieni. Valitse koodekki ensin äänenlaadun ja yhteyden vakauden perusteella. Mieti akkua vasta, jos huomaat oikean ongelman.

## Bluetooth-haku on tarkistamisen arvoinen asetus

Yksi Bluetoothiin liittyvä asetus voi vaikuttaa enemmän kuin Bluetoothin pääkytkin: sijaintia varten tehtävä Bluetooth-haku.

Android 12:ssa ja uudemmissa tavallinen polku on **Asetukset > Sijainti > Sijaintipalvelut > Bluetooth-haku**. Kun asetus on käytössä, Android voi hakea lähellä olevia Bluetooth-laitteita sijainnin tarkkuuden parantamiseksi, vaikka Bluetooth näyttäisi pika-asetuksissa olevan pois päältä.

Ominaisuudesta on hyötyä sijaintipalveluille ja lähellä oleviin laitteisiin perustuville toiminnoille, mutta se voi lisätä taustatoimintaa, jos sovellukset pyytävät sijaintia usein. Jos puhelimen valmiustilakulutus on suurta ja akkutiedoissa korostuu sijainnin käyttö, Bluetooth-haku kannattaa tarkistaa.

Älä sekoita tätä tavalliseen Bluetooth-yhteyteen. Bluetooth-haun poistaminen käytöstä ei katkaise nappikuulokkeiden, älykellon, auton järjestelmän tai kuulolaitteiden yhteyttä.

## Usean laitteen yhteisvaikutus voi näkyä

Yksi Bluetooth-laite ei yleensä merkitse juuri mitään. Kolme tai neljä aktiivista laitetta voi näkyä kulutuksessa selvemmin.

Puhelin voi ylläpitää samanaikaisesti yhteyttä nappikuulokkeisiin, älykelloon, auton järjestelmään ja paikantimeen. Sen ei silloinkaan pitäisi hallita akkukaaviota, mutta radioliikennettä on enemmän kuin yhden valmiustilassa olevan yhteyden kanssa. Suurempi ongelma on usein huonosti toimiva lisälaite tai sovellus, joka yhdistää jatkuvasti uudelleen, hakee laitteita tai herättää puhelimen.

Jos akun käyttötilastoissa Bluetooth vie suuren osan päivän kulutuksesta, älä oleta heti, että Bluetooth itsessään on rikki. Katso, milloin ongelma alkoi. Ilmestyikö se uuden kellon parittamisen jälkeen? Katkeaako joidenkin kuulokkeiden yhteys jatkuvasti? Saiko paikantimen sovellus sijaintiluvan ja jäikö se toimimaan koko päiväksi? Todellinen syy löytyy yleensä sieltä.

## Kannattaako Bluetooth laittaa pois päältä?

Pelkästään akunkeston vuoksi yleensä ei.

Jätä se päälle, jos käytät nappikuulokkeita, älykelloa, auton järjestelmää, näppäimistöä, paikanninta tai kuulolaitteita. Käytännön hyöty on suurempi kuin Bluetoothin jatkuvalla päälle ja pois kytkemisellä saatava pieni akkusäästö.

Laita Bluetooth pois päältä, kun siihen on tietty syy: olet pitkällä matkalla ilman laturia, selvität virrankulutusongelmaa, et käytä lainkaan Bluetooth-lisälaitteita tai haluat vähentää langattomia radioita yksityisyys- tai tietoturvasyistä. Nämä ovat perusteltuja syitä. Älä kuitenkaan odota suurta hyppyä akunkestossa.

Jos tarvitset nopean säästön, laske näytön kirkkautta, lyhennä näytön aikakatkaisua, käytä Wi-Fiä heikon mobiilidatan sijasta ja tarkista sovellusten taustakäyttö. Bluetooth on listalla kaukana alempana.

## Yleisiä kysymyksiä

Säästääkö Bluetooth 5.0 tai uudempi versio enemmän akkua kuin vanhempi Bluetooth? Ei niin paljon, että useimmat huomaisivat eron päivittäisessä käytössä. Suuri muutos oli Bluetooth Low Energyn tuki. Uudemmat versiot ovat parantaneet kantamaa, siirtonopeutta, ääniominaisuuksia ja yhteyksiä, mutta joutokulutus oli jo valmiiksi hyvin pieni.

Kuluttaako Bluetooth akkua yön valmiustilassa? Tuskin lainkaan, ellei jokin ole vialla. Jos puhelin menettää yön aikana 20 %, Bluetooth ei todennäköisesti ole syyllinen.

Auttaako Bluetooth-haun poistaminen käytöstä? Voi auttaa, varsinkin jos sijaintipalvelut ovat usein aktiivisia. Android 12:ssa ja uudemmissa tarkista **Asetukset > Sijainti > Sijaintipalvelut > Bluetooth-haku**.
