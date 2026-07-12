---
title: "Android-version tarkistaminen"
description: "Puhelin näyttää jo Android-versionsa. Pitää vain tietää, mihin numeroon kannattaa kiinnittää huomiota."
listSummary: "Puhelin näyttää jo Android-versionsa."
hub: "software"
sourceNumber: 119
order: 1
tags: ["android","päivitykset","tietoturva","ohjelmisto","opas"]
locale: "fi"
draft: false
---
Useimmissa puhelimissa avaa Asetukset > Tietoja puhelimesta > Android-versio. Samsungissa käytä polkua Asetukset > Tietoja puhelimesta > Ohjelmiston tiedot. Näkymässä on muutakin kuin suuri käyttöjärjestelmän versionumero: se näyttää myös Androidin tietoturvapäivityksen päivämäärän, Google Play -järjestelmäpäivityksen päivämäärän, koontiversion numeron ja joskus valmistajan oman ohjelmistoversion.

Tämä jää helposti huomaamatta. Android 17 kuulostaa uudemmalta kuin Android 16, ja sitä se onkin, mutta ajantasainen tietoturvapäivitys on aivan yhtä tärkeä, kun arvioit puhelimen turvallisuutta.

## Tarkista versio Asetuksista

Useimmissa Android-puhelimissa:

1. Avaa Asetukset.
2. Valitse Tietoja puhelimesta tai Tietoja tabletista.
3. Avaa Android-versio, jos tiedot eivät näy heti.
4. Tarkista Android-versio, Androidin tietoturvapäivitys, Google Play -järjestelmäpäivitys ja koontiversion numero.

Samsung näyttää samat tiedot Tietoja puhelimesta -kohdan Ohjelmiston tiedot -sivulla. OnePlus käyttää usein About device -nimeä. Xiaomi-, Redmi- ja POCO-puhelimissa aloitetaan tavallisesti puhelimen tietosivulta, minkä jälkeen tiedot jakautuvat Android-version ja Xiaomi HyperOS -näkymien välille.

Siinä kaikki. Oikeasti.

## Mitä pääversio tarkoittaa

Päänumero kertoo puhelimeen asennetun Android-sukupolven. Heinäkuussa 2026 Android 17 on uusin pääversio. Google julkaisi sen ensin tuetuille Pixel-laitteille, ja uudet puhelimet sekä muiden valmistajien päivitykset seuraavat omissa aikatauluissaan.

Kehittäjille käyttöjärjestelmä vastaa API-tasoa. Nykyinen vastaavuus on Android 17/API 37, Android 16/API 36, Android 15/API 35, Android 14/API 34 ja Android 13/API 33. Näitä ei tarvitse opetella ulkoa, mutta ne selittävät, miksi sovellus voi ilmoittaa puhelimen olevan liian vanha, vaikka laite edelleen käynnistyy ja toimii.

Koontiversion numero on tarkempi. Se yksilöi laitteeseen asennetun ohjelmistokoontiversion. Kahdessa puhelimessa voi olla Android 17 mutta eri koontiversio markkina-alueen, operaattorin hyväksynnän, beta-kanavan tai valmistajan muokkausten vuoksi.

## Myös valmistajan käyttöliittymäversiolla on merkitystä

Samsung ei toimita pelkkää "puhdasta Androidia", vaan sen päällä toimivan One UI -käyttöliittymän. One UI 9 on Samsungin Android 17 -sukupolvi. Heinäkuussa 2026 Samsungin virallisesti ilmoittama betaohjelma on edelleen Galaxy S26 -sarjan käyttäjille valituilla markkinoilla, eikä Suomi kuulu ilmoitettuihin beta-maihin. Betaohjelmaan osallistuva Galaxy S26 -käyttäjä voi siis nähdä uuden alustan ennen vanhemman Galaxy-mallin vakaata versiota. Samsung on kertonut tuovansa täyden version myöhemmin samana vuonna uusien lippulaivamallien yhteydessä.

Xiaomi-, Redmi- ja POCO-puhelimet käyttävät Xiaomi HyperOS -järjestelmää. HyperOS-versionumero kertoo Xiaomin omasta käyttöliittymästä ja ominaisuuksista, mutta ei aina paljasta alla olevaa Android-versiota yhdellä silmäyksellä. Avaa Android-version tiedot ennen kuin oletat HyperOS 3:n, 3.1:n tai myöhemmän HyperOS-version tarkoittavan samaa Android-pohjaa kaikissa malleissa.

Pixel-puhelimissa asia on yksinkertaisempi. Tietoja puhelimesta -näkymä näyttää Android-version, tietoturvapäivityksen ja koontitunnisteen yhdessä. Tuetussa Pixelissä vakaa heinäkuun 2026 ohjelmisto voi näyttää Android 17:n, kun taas betaohjelmaan liitetyssä laitteessa voi olla QPR-beta.

## Tarkistaminen ilman tavallista Asetukset-polkua

Numerokoodit voivat näyttää laiteohjelmiston tietoja joissakin puhelimissa, mutta ne toimivat epäjohdonmukaisesti. Samsungin `*#1234#` voi näyttää AP-, CP- ja CSC-laiteohjelmistotiedot tuetuissa malleissa. `*#*#4636#*#*` avaa testivalikon joissakin Android-laitteissa, mutta monet valmistajat ovat poistaneet sen käytöstä.

Jos ADB on tuttu ja puhelin on jo valtuuttanut tietokoneen, nämä komennot antavat tarkemmat tiedot:

```bash
adb shell getprop ro.build.version.release
adb shell getprop ro.build.version.sdk
adb shell getprop ro.build.version.security_patch
```

Ne tulostavat Android-version merkkijonon, API-tason ja tietoturvapäivityksen päivämäärän. Tästä on hyötyä testauksessa, korjaustyössä tai puhelimessa, jonka valikot valmistaja on muokannut perusteellisesti.

## Miksi versiolla on merkitystä

Sovellusten yhteensopivuus on ilmeinen syy. Sovellukset määrittävät vanhimman tuetun Android-version. Kun puhelin jää sen alapuolelle, Google Play Kauppa voi estää asennuksen tai lakata tarjoamasta päivityksiä.

Tietoturva on parempi syy. Androidin tietoturvapäivityksiä seurataan erillään pääversiosta. Android 16 -puhelin ajantasaisella tietoturvapäivityksellä on yleensä turvallisempi kuin Android 17 -puhelin vanhalla päivityksellä. Päivämäärä kertoo, kuinka tuoreita haavoittuvuuksien korjauksia laite on saanut.

Ominaisuudetkin riippuvat Android-versiosta. Android 12 toi Material You -dynaamisen teeman. Android 13 lisäsi sovelluskohtaiset kieliasetukset. Android 14 tiukensi useita yksityisyyteen ja taustatoimintaan liittyviä sääntöjä. Android 17 lisää App Bubbles -kuplat, työpöytäympäristöjen vuorovaikutteisen Picture-in-Picture (kuva kuvassa) -tilan, sovellusten yksityisyyttä parantavan Contact Picker -valitsimen ja järjestelmän näyttämän Location Button -painikkeen, jolla sovellus voi pyytää tarkan sijainnin vain nykyisen istunnon ajaksi.

Jos ominaisuus puuttuu puhelimesta, syy voi olla Android-sukupolvi. Tai valmistaja on vain päättänyt olla toimittamatta ominaisuutta. Android on siinä mielessä sekava.

## Pääversio ja tietoturvapäivitys ovat eri asioita

Päänumero kertoo Android-sukupolven. Tietoturvapäivitys on päivämäärä, kuten 2026-06-05. Ne etenevät erikseen.

Puhelimessa voi olla Android 15 ja tuoreet haavoittuvuuskorjaukset. Toisessa mallissa voi olla Android 17 mutta jo vanhentunut tietoturvapäivitys. Kun arvioit, onko laitetta turvallista käyttää edelleen, tarkista molemmat.

## Voiko päivityksen asentaa käsin?

Aloita polusta Asetukset > Järjestelmä > Ohjelmistopäivitykset. Samsungissa käytä Asetukset > Ohjelmistopäivitys > Lataa ja asenna. Jos valmistaja on julkaissut päivityksen juuri sinun mallillesi, alueellesi ja operaattoriversiollesi, sen pitäisi näkyä siellä.

Et voi asentaa virallista Android-koontiversiota, jota valmistaja ei ole julkaissut laitteellesi. Pixelin omistaja voi asentaa virallisen OTA-päivityspaketin ADB:n avulla, ja Samsung-käyttäjä voi asentaa virallisen laiteohjelmiston Odinilla, mutta väärän koontiversion valitseminen tekee näistä teknisistä menetelmistä aidosti riskialttiita. Mukautettu ROM on joillekin puhelimille yksi vaihtoehto, mutta se ei ole sama asia kuin virallinen päivitys.
