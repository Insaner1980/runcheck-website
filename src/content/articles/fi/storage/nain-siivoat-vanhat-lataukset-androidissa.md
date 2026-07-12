---
title: "Näin siivoat vanhat lataukset Androidissa"
description: "Vanhat lataukset vievät Android-puhelimesta tilaa huomaamatta. Näin löydät ne, lajittelet ne iän ja koon mukaan ja poistat tarpeettomat tiedostot."
listSummary: "Vanhat lataukset vievät Android-puhelimesta tilaa huomaamatta."
hub: "storage"
sourceNumber: 88
order: 10
tags: ["tallennustila","android","siivous","optimointi","opas"]
locale: "fi"
draft: false
---
Avaat PDF-tiedoston kerran, lataat APK-tiedoston testaamista varten, tallennat selaimesta ZIP-tiedoston ja unohdat ne kaikki. Kuusi kuukautta myöhemmin Lataukset-kansio on täynnä tiedostoja, joita et tunnista.

Se on tavallista. Android tallentaa sinne paljon kertakäyttöisiä tiedostoja, eikä useimpien mieleen tule ylläpitää kansiota säännöllisesti. Sitä kuitenkin tarvitaan.

## Missä lataukset yleensä ovat

Useimmissa Android-puhelimissa julkinen latauskansio näkyy tiedostonhallinnassa nimellä **Download** tai **Downloads**. Taustalla se vastaa usein polkua `/storage/emulated/0/Download`, mutta polkua ei tarvitse muistaa, ellet käytä ADB:tä, tietokoneen tiedostoselainta tai kehittyneempää tiedostonhallintasovellusta.

Chrome ja Firefox tallentavat tiedostot oletuksena tähän kansioon. Myös sähköpostiliitteet voivat päätyä sinne, jos tallennat ne pelkän esikatselun sijaan. Osa sovelluksista luo omia alikansioita Downloads-kansioon. Toiset pudottavat tiedostot suoraan kansioon nimillä, joista ei ole paljon apua.

Kaikki ladatut tiedostot eivät ole siellä. Viestisovellukset, podcast-sovellukset, karttasovellukset ja pilvitallennussovellukset säilyttävät tiedostoja usein sovelluskohtaisessa tallennustilassa tai omissa mediakansioissaan. WhatsApp-asiakirjat, Telegram-tiedostot ja offline-podcastjaksot voivat viedä paljon tilaa, vaikka Lataukset-kansio näyttäisi siistiltä.

## Aloita tiedostonhallinnasta

Avaa puhelimen mukana tullut tiedostosovellus. Pixel-puhelimissa ja monissa vakio-Androidia käyttävissä laitteissa se on Files by Google. Samsung-puhelimissa se on yleensä Omat tiedostot.

Avaa Lataukset-luokka tai -kansio. Lajittele tiedostot ensin päivämäärän mukaan. Vanhat tiedostot ovat helpoimpia poistettavia, koska kahdeksan kuukautta sitten ladattu ja sen jälkeen avaamatta jäänyt tiedosto on harvoin puhelimelle tarpeellinen.

Vaihda sitten lajitteluperusteeksi koko. Tässä ovat todelliset tilasyöpöt. Esitystiedosto voi olla 80 Mt. Ladattu video voi olla 600 Mt. Suurten pelien vanhat APK-tiedostot voivat olla paljon odotettua suurempia.

Älä poista kaikkea sokkona. Ole silti rehellinen: useimpien Lataukset-kansio ei ole arkisto. Se on tilapäinen säilytyspaikka, jota ei koskaan siivottu.

## Mitä voi poistaa turvallisesti

APK-tiedoston voi yleensä poistaa sovelluksen asentamisen jälkeen. APK on asennuspaketti, ei itse asennettu sovellus. Jos latasit sen verkkosivustolta, säilytä se vain silloin, kun tarvitset juuri saman version myöhemmin uudelleen.

PDF-tiedostot, kuvat, asiakirjat ja laskentataulukot voi poistaa, jos alkuperäinen on edelleen helposti saatavilla. Sähköpostiliite säilyy yleensä viestissä. Verkkosivulta ladatun tiedoston voi usein ladata uudelleen.

Myös ZIP- ja muut arkistotiedostot ovat hyviä poistettavia, etenkin jos olet jo purkanut ne. Kun sisältö on toisessa kansiossa, alkuperäinen arkisto on usein pelkkää ylimääräistä painoa.

Ole varovaisempi varmuuskopioiden, vientitiedostojen, veroasiakirjojen, matkustusasiakirjojen ja palautustiedostojen kanssa. Huolimaton siivous kostautuu juuri tällaisten tiedostojen kohdalla.

## Hyödynnä siivousehdotuksia

Files by Googlen Puhdista-osio voi nostaa ladatut tiedostot tarkistettaviksi. Avaa sovellus, valitse **Puhdista** ja etsi **Poista ladattuja tiedostoja** -kortti. Google käyttää tällä hetkellä tätä nimeä, eikä toiminto välttämättä näy nimellä "vanhat lataukset".

Tarkista luettelo ennen kuin siirrät tiedostoja roskakoriin. Sovellus siirtää valitut tiedostot ensin roskakoriin, joten saat tavallisesti palautusajan ennen pysyvää poistamista. Älä silti pidä roskakoria varmuuskopiona. Jos tiedosto on tärkeä, siirrä se Google Driveen, Google Kuviin tai muuhun varmuuskopiointipaikkaan ennen puhelimesta poistamista.

Samsung-käyttäjä voi tehdä saman Omat tiedostot -sovelluksessa. Avaa **Omat tiedostot > Luokat > Lataukset**, valitse tiedostot ja poista ne. Uudemmissa Galaxy-puhelimissa tallennustilan hallinta löytyy myös Asetukset-sovelluksen Laitteen ylläpito > Tallennustila -osiosta, mutta tarkka nimi ja polku voivat vaihdella mallin ja One UI -version mukaan.

## Tarkista nämä ennen joukkopoistoa

Satunnainen tiedostonimi ei aina tarkoita roskaa. Osa sovelluksista käyttää hajautusarvoilta näyttäviä nimiä tai pitkiä numerosarjoja. Jos tiedostotyyppi näkyy selvästi, kuten `.jpg`, `.pdf`, `.mp4` tai `.apk`, sisällöstä voi tehdä kohtuullisen arvion. Jos tiedostolla ei ole päätettä tai se on sovelluksen nimeä kantavassa kansiossa, hidasta.

Parhaillaan avoinna oleva tiedosto voi kieltäytyä poistumasta. Sulje sitä käyttävä sovellus ja yritä uudelleen.

Tarkista myös pilvisynkronointi. Tavallisesta Lataukset-kansiosta poistettu paikallinen tiedosto ei yleensä poista pilvessä olevaa alkuperäistä, mutta synkronoidussa kansiossa poistaminen voi vaikuttaa myös pilviversioon. Google Drive, OneDrive, Dropbox ja muut vastaavat sovellukset eivät toimi keskenään täysin samalla tavalla.

## Estä kansiota täyttymästä uudelleen

Androidin Chrome voi kysyä tallennuspaikkaa ennen tiedoston lataamista. Avaa **Chrome > Settings > Downloads** ja laita **Ask where to save files** päälle, jos asetus on käytettävissä omassa versiossasi. Pieni pysähdys auttaa. Joudut päättämään, kuuluuko tiedosto Lataukset-kansioon, Driveen vai ei mihinkään.

Myös viestisovellusten asetukset kannattaa tarkistaa. Avaa WhatsAppissa **Settings > Storage and data > Media auto-download** ja poista automaattisesta latauksesta tiedostotyypit, joita et halua tallentaa. Telegramissa ja Signalissa on vastaavia säätimiä, mutta tarkat nimet vaihtelevat.

Yksinkertainen tapa toimii monimutkaista järjestelmää paremmin: lajittele Lataukset muutaman kuukauden välein ensin päivämäärän mukaan ja poista ilmeinen roska. Lajittele sitten koon mukaan ja poista suuret tiedostot, joita et tarvitse. Useimmille se riittää.
