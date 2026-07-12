---
title: "USB-C-lataus selitettynä: watit, ampeerit ja voltit"
description: "Metakuvaus: Mitä watit, ampeerit ja voltit tarkoittavat Android-puhelimen latauksessa, miten USB Power Delivery toimii ja miksi kaikki USB-C-laturit eivät lataa yhtä nopeasti."
listSummary: "lataaminen, akku ja android"
hub: "charging"
sourceNumber: 46
order: 10
tags: ["lataaminen","akku","android","opas","laitteisto"]
locale: "fi"
draft: false
---
Wattimäärä on laturin tärkein luku. Voltit ja ampeerit kertovat, miten laturi pääsee siihen, mutta watit ilmaisevat käytettävissä olevan tehon.

Laturi, jonka lähtö on 9 V ja 2 A, tuottaa 18 W. Kun lähtö on 20 V ja 3 A, teho on 60 W. Lasku on yksinkertainen: voltit kerrottuna ampeereilla ovat watteja.

Yksinkertaista. Kunnes USB-C-laitteet alkavat neuvotella.

## Mitä laturin merkinnät tarkoittavat

Useimmissa USB-C-latureissa luetellaan useita lähtöyhdistelmiä. Merkinnät voivat näyttää esimerkiksi tältä:

- 5 V / 3 A = 15 W
- 9 V / 3 A = 27 W
- 15 V / 3 A = 45 W
- 20 V / 3,25 A = 65 W

Nämä ovat tehoprofiileja, joita laturi voi tarjota. Puhelin ei ota automaattisesti suurinta niistä. Se pyytää tukemaansa profiilia, minkä jälkeen laturi siirtyy kyseiselle tasolle.

Siksi 100 W:n kannettavan laturi ei riko 18 W:n puhelinta. Puhelin ei pyydä 100 W:n tehoa. Se valitsee pienemmän profiilin tai palaa tavalliseen lataukseen, jos laturi ja puhelin eivät löydä parempaa yhteistä vaihtoehtoa.

## Miten USB Power Delivery -neuvottelu toimii

USB Power Delivery, lyhyesti USB PD, on tärkein avoin pikalatausstandardi monissa Android-puhelimissa, tableteissa, kannettavissa tietokoneissa ja lisälaitteissa.

Kun USB-C-kaapeli kytketään, laturi ja puhelin viestivät Configuration Channel -nastojen kautta. Laturi ilmoittaa tukemansa Power Data Object -profiilit eli PDO:t. Puhelin valitsee niistä yhden. Sen jälkeen laturi syöttää sovittujen rajojen mukaisen jännitteen ja virran.

45 W:n USB PD -laturi voi tarjota esimerkiksi 5 V / 3 A, 9 V / 3 A, 15 V / 3 A ja 20 V / 2,25 A. 25 W:n latausta tukeva puhelin saattaa valita noin 9 V:n tason. Kannettava voi valita samasta laturista 20 V.

Laturi ei työnnä tehoa puhelimeen. Puhelin ottaa vain sen, minkä se pystyy käyttämään.

## Miksi PPS:llä on merkitystä

Tavallinen USB PD käyttää kiinteitä jännitetasoja, kuten 5 V, 9 V, 15 V ja 20 V. PPS eli Programmable Power Supply antaa puhelimen pyytää pienempiä jännitteen ja virran muutoksia laturin ilmoittaman alueen sisällä.

Tällä on merkitystä, koska litiumioniakku ei tarvitse samoja latausolosuhteita koko latauksen ajan. Akun täyttyessä ihanteelliset olosuhteet muuttuvat. Kiinteällä jännitteellä suurempi osa muunnoksesta tapahtuu puhelimen sisällä, ja muunnos tuottaa lämpöä. PPS:n avulla laturi voi seurata tarkemmin sitä, mitä puhelin kullakin hetkellä tarvitsee.

Samsungin Super Fast Charging perustuu USB PD:n ja PPS:n yhdistelmään. Myös Pixel-puhelimet tukevat PPS:ää. Tavallinen USB PD -laturi ilman PPS:ää voi silti toimia, mutta se ei välttämättä käynnistä näiden puhelinten parasta lataustilaa.

## Quick Charge, VOOC, SUPERVOOC ja HyperCharge

USB PD on lähimpänä Android-laitteiden yhteistä latauskieltä. Se ei ole ainoa vaihtoehto.

Qualcomm Quick Charge oli vuosien ajan yleinen Android-puhelimissa. Uudemmat Quick Charge -versiot ovat osittain lähempänä USB PD:tä, mutta vanhemmat verkkolaitteet ja puhelimet voivat edelleen toimia eri tavalla kuin puhdas USB PD -yhdistelmä.

OPPO VOOC ja OnePlus SUPERVOOC käyttävät toisenlaista ratkaisua. Ne siirtävät yhteensopivan laturin ja kaapelin kautta usein suurta virtaa, jolloin puhelimen sisällä syntyy vähemmän lämpöä. Siksi järjestelmät voivat olla erittäin nopeita mutta myös tarkkoja lisälaitteista. OnePlus ilmoittaa, että SUPERVOOC-pikalataus vaatii SUPERVOOC-yhteensopivan puhelimen ja datakaapelin.

Xiaomi HyperCharge toimii monissa malleissa samalla tavoin valmistajakohtaisesti. Tavallinen USB-C PD -laturi lataa yleensä näitäkin puhelimia, mutta ilmoitettu enimmäisteho edellyttää usein alkuperäistä tai kyseisen protokollan kanssa yhteensopivaa laturia ja kaapelia.

Samsungin nimissä on oma pieni ansansa. Vanhempien Samsung-puhelinten Adaptive Fast Charging ei ole sama asia kuin uudempien mallien Super Fast Charging. Uudempi tila käyttää USB PD:tä ja PPS:ää.

## Kaapelin teholuokitus rajoittaa nopeutta

Kaapeli osallistuu neuvotteluun. Sen pitäminen pelkkänä johtimena aiheuttaa paljon lataukseen liittyvää hämmennystä.

Monet USB-C-kaapelit on mitoitettu 3 A:n virralle. 20 V:n jännitteellä se riittää 60 W:n tehoon. Tätä suurempi teho vaatii 5 A:n kaapelin, jossa on e-marker-siru. Näin laturi ja laite tietävät, että kaapeli kestää virran turvallisesti.

USB-IF:n sertifiointimerkinnät ovat nykyään selkeämpiä. Sertifioiduissa USB-C-kaapeleissa ilmoitetaan 60 W:n tai 240 W:n teholuokitus, ja nopeissa datakaapeleissa voi olla lisäksi tiedonsiirtonopeuden tunnus. Se on paljon helpompi ymmärtää kuin pitkä USB-version nimi.

Puhelimille hyvä 60 W:n USB-C-kaapeli riittää useimmiten. Kannettavien, tablettien ja suuritehoisten latureiden kanssa 240 W:n kaapelista voi olla hyötyä. Valmistajakohtaisissa puhelinten latausjärjestelmissä yhteensopiva kaapeli voi silti olla tärkeämpi kuin kylkeen painettu wattimäärä.

## Millainen laturi kannattaa ostaa?

Monille USB PD:tä tai PPS:ää käyttäville Android-puhelimille riittää 25-30 W:n USB-C PD PPS -laturi. Se kattaa useimpien Pixel-puhelinten ja monien Samsung-mallien tavalliset pikalatausnopeudet.

Jos Samsung-mallisi tukee 45 W:n latausta, valitse PPS-laturi, joka tukee nimenomaan tarvittavaa 45 W:n profiilia. Jos käytät OnePlus-, OPPO- tai Xiaomi-puhelinta ja haluat valmistajan ilmoittaman enimmäisnopeuden, käytä kyseiselle protokollalle tarkoitettua laturia ja kaapelia.

Puhelimen enimmäistehoa suuremman laturin ostaminen on turvallista. Se ei vahingoita puhelinta, ja samasta verkkolaitteesta voi olla hyötyä kannettavan tai tabletin latauksessa. Älä silti odota, että 100 W:n laturi lataisi 25 W:n puhelimen neljä kertaa nopeammin.

Vähiten näyttävä neuvo on myös paras: valitse oikea latausprotokolla suurimman wattimäärän sijaan.
