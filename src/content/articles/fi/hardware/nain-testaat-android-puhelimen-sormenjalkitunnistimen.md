---
title: "Näin testaat Android-puhelimen sormenjälkitunnistimen"
description: "Näin tarkistat Android-puhelimen sormenjälkitunnistimen toiminnan sisäänrakennetuilla diagnostiikkatyökaluilla, valintakoodeilla, Pixel-työkaluilla, Samsung Membersilla ja yksinkertaisilla käytännön testeillä."
listSummary: "diagnostiikka, anturit ja android"
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnostiikka","anturit","android","laitteisto","opas"]
locale: "fi"
draft: false
---
Onko sormenjälkitunnistin rikki vai ärsyttääkö sitä vain näytönsuojasi? Se kuulostaa vitsiltä, mutta tämä kannattaa selvittää ensimmäisenä.

Sormenjäljen tunnistusongelmien syyt ovat usein arkisia. Kuiva iho, kosteus, halpa karkaistusta lasista valmistettu näytönsuoja, huono rekisteröinti tai keskeneräinen ohjelmistopäivitys voi saada toimivan tunnistimen näyttämään rikkinäiseltä. Laitteistovikojakin tapahtuu, etenkin pudotuksen tai näyttökorjauksen jälkeen, mutta älä aloita siitä oletuksesta.

## Pikatesti: avaa lukitus kymmenen kertaa

Rekisteröi yksi sormenjälki, puhdista tunnistimen alue, kuivaa sormi ja yritä avata puhelin kymmenen kertaa peräkkäin.

Takana tai sivussa olevalla kapasitiivisella tunnistimella 8 tai 9 onnistumista 10 yrityksestä tarkoittaa yleensä, että laitteisto toimii. Yksi tai kaksi epäonnistumista johtuu todennäköisemmin sormen asennosta, liasta, ihon kunnosta tai ohjelmistosta.

Näytön sisäisen tunnistimen kohdalla asennuksen kanssa kannattaa olla tarkempi ja tulosta arvioidessa hieman sallivampi. Optiset ja ultraäänitunnistimet ovat riippuvaisia näytön pinnasta, joten näytönsuoja voi heikentää tunnistusta pahasti. Jos puhdas puhelin ilman näytönsuojaa epäonnistuu useammin kuin 3 kertaa 10 yrityksestä, jatka testaamista.

## Samsung Galaxy -testit

Monissa Samsung Galaxy -puhelimissa voit avata esiasennetun Phone-sovelluksen ja kirjoittaa `*#0*#`. Etsi diagnostiikkavalikosta `Fingerprint Scanner` tai sormenjälkiin liittyvä kohta anturitestien yhteydestä. Valikko voi kertoa, havaitseeko laitteisto sormen ja onnistuuko tunnistus.

Samsung Members on paremmin tuettu vaihtoehto. Avaa Samsung Members, valitse Discover-välilehdeltä `Diagnostics`, sitten `Phone diagnostics` ja suorita `Fingerprint recognition` -testi, jos se on käytettävissä mallissasi. Samsungin omissa vianmääritysohjeissa mainitaan tavallisiksi syiksi muun muassa sertifioimattomat näytönsuojat, likainen tai naarmuuntunut tunnistinalue, kuiva iho ja tunnistimen peittävät suojakuoret.

Yksi nykyinen Samsung-yksityiskohta jää helposti huomaamatta: Android 16:ta ja One UI 8:aa tai uudempaa käyttävissä Galaxy-laitteissa sormenjäljen rekisteröinti käyttää joissakin malleissa pyyhkäisytyylistä menetelmää. Noudata näytön ohjaamaa liikettä sen sijaan, että olettaisit kaikkien Galaxy-puhelinten pyytävän toistuvia paikallaan tehtäviä painalluksia.

## Xiaomi-, Redmi- ja POCO-testit

Avaa Xiaomi-, Redmi- tai POCO-puhelimen puhelinsovellus ja kirjoita `*#*#6484#*#*`. Jos CIT-tila ei avaudu, kokeile koodia `*#*#64663#*#*`.

Etsi CIT-valikosta `Fingerprint sensor check`, `Fingerprint input test` tai vastaavasti nimetty testi. Xiaomin tukisivut suosittelevat CIT-laitteistotarkistusta juuri silloin, kun sormenjälkitoiminto puuttuu, joten kyse ei ole pelkästä keskustelupalstakikasta.

Voit myös avata puhelimen tietosivun asetuksista ja napauttaa `Kernel version` -kohtaa useita kertoja. Xiaomi muuttaa valikkojen nimiä MIUI:n ja HyperOS:n välillä, mutta tämä reitti toimii usein silloinkin, kun valintakoodi ei avaudu.

## Google Pixel -testit

Pixel-puhelimissa ei ole Samsungin ja Xiaomin kaltaista julkista, pelkästään sormenjälkitunnistimelle tarkoitettua valintavalikkoa.

Google dokumentoi Pixel Repair Diagnostics App -sovelluksen avaamiseen koodin `*#*#7287#*#*` tuetuissa Pixel-laitteissa. Sillä voi tarkistaa laitteistoa ennen korjausta ja sen jälkeen. Google ohjaa myös Pixel Update and Software Repair -työkaluun käyttöjärjestelmän päivittämistä ja näytönalaisen sormenjälkitunnistimen eli UDFPS:n säätämistä varten.

Tavallisessa käytössä käytännöllisin Pixel-testi on edelleen yksinkertainen: poista kaikki sormenjäljet, käynnistä puhelin uudelleen, rekisteröi yksi sormi uudelleen ja testaa lukituksen avaamista toistuvasti. Jos sormenjälkiasetus puuttuu kokonaan Asetuksista tai rekisteröinti ei käynnisty lainkaan, tilanne on vakavampi kuin muutama epäonnistunut avaus.

Android 17 kannattaa mainita, koska se tuli ensin tuetuille Pixel-laitteille. Jos Pixelin sormenjälkiongelma alkoi heti suuren Android 17 -päivityksen jälkeen, tarkista myöhemmät korjauspäivitykset ja Pixel-tuen tiedotteet ennen kuin maksat korjauksesta.

## Muut Android-puhelimet

OnePlus-, Motorola-, Realme-, Oppo- ja Nokia-tyyppiset Android-puhelimet vaihtelevat liikaa, jotta niille voisi antaa yhden yleisen sormenjälkikoodin.

Aloita valmistajan tuki- tai diagnostiikkasovelluksesta, jos puhelimessa on sellainen. Motorolan Device Help sisältää monissa malleissa laitteistotestejä. OnePlus- ja Oppo-sukuisissa puhelimissa `*#899#` tai vanhemmat engineering-valikot voivat avautua, mutta tuki on epäjohdonmukaista.

Kolmannen osapuolen sovellus voi silti vastata yhteen peruskysymykseen: ilmoittaako Android laitteessa olevan sormenjälkitunnistimen? Sensor Testin, DevCheckin ja Phone Doctor Plusin kaltaiset sovellukset voivat näyttää, tunnistaako järjestelmä biometrisen laitteiston. Ne eivät yleensä pysty suorittamaan turvallista sormenjäljen vertailua, koska Android suojaa biometrisiä tietoja tarkoituksella, mutta ne voivat auttaa erottamaan puuttuvan laitteiston heikosta tunnistustarkkuudesta.

## Mitä tulos tarkoittaa

Jos puhelin ei enää näytä sormenjälkiasetuksia, järjestelmä ei havaitse tunnistinta tai diagnostiikka ilmoittaa laitteistovirheestä, vika on todennäköisesti fyysinen. Tavallisia syitä ovat vaurioitunut taipuisa liitäntäkaapeli, haljennut tunnistin, nestealtistus tai näytönvaihto, jonka jälkeen näytön sisäistä tunnistinta ei ole kohdistettu tai kalibroitu oikein.

Kun laitteisto havaitaan mutta tunnistus toimii huonosti, älä oleta osan olevan rikki. Tämä on usein korjattavissa.

Poista kaikki sormenjäljet ja rekisteröi ne uudelleen. Aloita yhdellä sormella. Kosketa rekisteröinnin aikana sormen keskiosalla, reunoilla ja kärjellä, jotta puhelin saa käyttökelpoisen kokonaiskuvan eikä samaa osittaista jälkeä kymmenen kertaa.

Rekisteröi sama sormi kahdesti, jos puhelin sallii sen. Menetelmä ei ole erityisen tyylikäs, mutta toimii yllättävän usein. Käytä toisella rekisteröintikerralla hieman erilaisia kulmia ja painetta.

Poista näytönsuoja testaamisen ajaksi. Se on näytön sisäisten tunnistimien yleisin ongelmalähde. Väärälle puhelinmallille tehty suoja voi hajottaa optisen tunnistimen valoa tai häiritä ultraäänilukemaa. Jos tunnistus toimii ilman suojaa, vika oli suojassa.

Puhdista tunnistin ja sormi. Ihon rasva, pöly, voidejäämät, hiki ja halkeillut iho vähentävät käyttökelpoisten ihopoimujen määrää. Jos kädet ovat hyvin kuivat, levitä pieni määrä käsivoidetta ja anna sen imeytyä ennen testaamista. Märkä sormi toimii aivan yhtä huonosti.

Asenna odottavat järjestelmäpäivitykset. Sormenjälkitunnistimen ajurit kuuluvat laiteohjelmistoon, ja biometrisiä virheitä päätyy julkaistuihin versioihin. Suuret Android-päivitykset, kuten Android 17 Pixel-laitteissa ja myöhemmin muiden valmistajien versioissa, voivat muuttaa tunnistimen toimintaa, koska valmistajan laiteohjelmisto toimii Androidin ja anturin välissä.

## Milloin korjaus on järkevä

Kokeile tehdasasetusten palautusta vasta, kun olet varmuuskopioinut puhelimen ja käyttänyt tavalliset korjauskeinot loppuun. Nollaus voi poistaa vioittuneita biometrisiä tietoja ja kalibrointitilaa, mutta se on järeä menetelmä.

Jos tunnistin ei toimi nollauksen jälkeenkään tai diagnostiikka ilmoittaa, ettei laitteistoa havaita, pyydä korjausarvio. Takana ja sivussa olevat tunnistimet ovat usein erillisiä osia, joiden vaihtaminen voi olla kohtuuhintaista. Näytön sisäiset tunnistimet ovat eri asia. Jos lukija on osa näyttömoduulia tai vaatii kalibroinnin näytönvaihdon jälkeen, korjaus voi maksaa niin paljon, että puhelimen vaihtaminen alkaa olla järkevä vaihtoehto.

Se on ärsyttävä vastaus, mutta parempi kuin rahan käyttäminen väärään varaosaan.
