---
title: "Miksi Android-sovellukset kaatuvat ja miten kaatuilun voi lopettaa"
description: "Android-sovellukset kaatuvat tietyistä syistä. Opi selvittämään, johtuuko ongelma yhdestä sovelluksesta, WebView-komponentista, vähäisestä RAM-muistista, täyttyvästä tallennustilasta vai tuoreesta Android-päivityksestä."
listSummary: "Android-sovellukset kaatuvat tietyistä syistä."
hub: "performance"
sourceNumber: 77
order: 14
tags: ["suorituskyky","nopeus","android","optimointi","vianetsintä"]
locale: "fi"
draft: false
---
---

Useimmat sovellusten kaatumiset eivät ole satunnaisia. Ne vain tuntuvat siltä, koska et näe virheen varsinaista syytä.

Sovellus kaatuu, kun se kohtaa tilanteen, josta se ei pysty palautumaan. Android sulkee sen, joskus "app keeps stopping" -ilmoituksen kanssa ja joskus täysin huomaamatta. Heti käynnistyksessä kaatuva sovellus on eri ongelma kuin kymmenen minuutin käytön jälkeen kaatuva. Yhden sovelluksen vika on eri asia kuin se, että puolet puhelimen sovelluksista kaatuu samalla kertaa.

Siinä on koko juju: älä yritä korjata "Androidia". Selvitä kaatumisten kaava.

## Yksi sovellus kaatuu jatkuvasti

Aloita sovelluksen välimuistista. Pixelissä ja monissa lähes vakio-Androidia käyttävissä puhelimissa polku on **Asetukset > Sovellukset > Näytä kaikki sovellukset > [sovelluksen nimi] > Tallennustila ja välimuisti > Tyhjennä välimuisti**. Samsungissa vastaava toiminto löytyy tavallisesti sovelluksen tiedoista tallennustilan kohdalta.

Välimuistin tyhjentäminen poistaa väliaikaisia tiedostoja. Se ei kirjaa sinua ulos eikä poista tilisi tietoja. Kaatuuko sovellus edelleen? Voit tyhjentää tallennustilan tai sovelluksen tiedot, mutta pysähdy hetkeksi ennen sitä. Tämä nollaa sovelluksen. WhatsAppissa, Signalissa, muistiinpanosovelluksissa, offline-kartoissa, musiikkilatauksissa tai paikallisia tallennuksia käyttävissä peleissä tietojen poistaminen ilman varmuuskopiota voi hävittää tärkeää sisältöä.

Päivitä sovellus seuraavaksi. Avaa Google Play, etsi sovellus ja asenna mahdollinen päivitys. Jos kaatumiset alkoivat heti sovelluspäivityksen jälkeen, tarkista viimeisimmät Google Play -arvostelut. Kun kymmenet käyttäjät ilmoittavat samasta kaatumisesta samalla versiolla, korjauksen täytyy todennäköisesti tulla kehittäjältä.

Poista sovellus ja asenna se uudelleen, jos se ei vieläkään toimi. Uudelleenasennus on tylsä ratkaisu, mutta se rakentaa sovelluspaketin ja paikalliset tiedostot uudelleen puhtaalta pohjalta. Se auttaa useammin kuin moni odottaa.

## Monet sovellukset alkoivat kaatua yhtä aikaa

Kun useat toisiinsa liittymättömät sovellukset kaatuvat samana päivänä, epäile niiden käyttämää yhteistä Android-komponenttia. Android System WebView on klassinen esimerkki.

WebView antaa sovellusten näyttää verkkosisältöä sovelluksen sisällä ilman erilliseen selaimeen siirtymistä. Sähköposti-, ostos- ja pankkisovellukset, ohjenäkymät, kirjautumisvirrat ja uutissovellukset voivat kaikki käyttää sitä. Maaliskuussa 2021 viallinen WebView-päivitys aiheutti laajoja Android-sovellusten kaatumisia, kunnes Google julkaisi korjatut WebView- ja Chrome-versiot.

Päivitä siis ensin WebView ja Chrome. Avaa Google Play, etsi Android System WebView ja päivitä se. Tee sama Google Chromelle. Jos WebView päivittyi juuri ennen ongelmien alkamista eikä korjaavaa versiota ole vielä saatavilla, WebView-päivitysten poistaminen voi toimia väliaikaisena kiertotapana joissakin laitteissa. Pidä ratkaisu väliaikaisena, sillä WebView on tietoturvan kannalta herkkä komponentti.

Google Play services voi aiheuttaa vastaavia laajoja ongelmia, jos se on vanhentunut tai jumissa. Päivitä se, jos Google Play tarjoaa päivityksen. Käynnistä puhelin uudelleen järjestelmäkomponenttien päivittämisen jälkeen.

## Vähäisestä RAM-muistista ja tallennustilasta johtuvat kaatumiset

Sovellus voi kaatua, kun se pyytää muistia, jota Android ei pysty antamaan. Joskus järjestelmä lopettaa taustasovelluksia hiljaa. Joskus juuri käyttämäsi sovellus kaatuu.

Tämä on tavallista 3 ja 4 Gt:n puhelimissa, joissa käytetään nykyisiä sovelluksia. Pelit, videoeditorit, kamerasovellukset ja selaimet, joissa on paljon välilehtiä, ovat tyypillisiä kaatumiskohtia. Viestisovellus voi toimia koko päivän ja kaatua vasta silloin, kun yrität liittää suuren videon, koska yksittäinen toiminto tarvitsee tavallista enemmän muistia.

Tallennustilan puute voi näyttää sovellusvialta. Sovellukset tarvitsevat tilaa välimuistille, latauksille, tietokannoille ja päivityksille. Kun sisäinen tallennustila on lähes täynnä, kirjoittaminen voi epäonnistua. Jo 1 tai 2 Gt:n vapauttaminen voi lopettaa kaatumiset ahtaassa puhelimessa, mutta parempi tavoite on pitää vähintään 10-15 % tallennustilasta vapaana.

Tarkista tallennustilan käyttö Asetuksista. Poista suuret videot, vanhat lataukset, tiedostojen kaksoiskappaleet, käyttämättömät sovellukset ja tarpeettomat APK-tiedostot. Tyhjennä myös galleria- ja tiedostosovellusten roskakorit, jos ne säilyttävät poistettuja tiedostoja 30 päivän ajan.

## Kaatumiset Android-päivityksen jälkeen

Suuri käyttöjärjestelmäpäivitys muuttaa ympäristöä, jossa kaikki sovellukset toimivat. Android 17 julkaistiin 16.6.2026, ja se on saatavilla useimmille tuetuille Pixel-laitteille. Muiden valmistajien päivitysaikataulut vaihtelevat mallin ja alueen mukaan. Jos sovelluksen yhteensopivuus oli jo valmiiksi rajalla, suuri päivitys voi paljastaa ongelman nopeasti.

Päivitä sovellukset käyttöjärjestelmäpäivityksen jälkeen. Päivitä sitten WebView, Chrome, Google Play services ja kaatuva sovellus. Käynnistä puhelin kerran uudelleen. Jos päivitys asentui juuri, anna laitteelle muutama tunti aikaa, sillä Android voi edelleen optimoida sovelluksia ja rakentaa välimuisteja taustalla.

Jos vain yksi sovellus kaatuu Android 17 -päivityksen jälkeen, kehittäjän täytyy todennäköisesti päivittää se. Välimuistin tai sovellustietojen tyhjentäminen voi auttaa, jos syynä ovat vanhentuneet paikalliset tiedostot, mutta se ei korjaa uuden Android-version kanssa yhteensopimatonta koodia.

Jos monet sovellukset kaatuvat päivityksen jälkeen, etsi puhelimen valmistajalta järjestelmäkorjausta. Pixel-käyttäjien kannattaa tarkistaa kuukausipäivitykset. Samsung, Xiaomi, OnePlus, OPPO ja muut valmistajat jakavat korjaukset omia päivityskanaviaan pitkin, usein Pixeliä myöhemmin.

## Vikasietotila paljastaa toisen sovelluksen aiheuttamat häiriöt

Vikasietotila (Safe Mode) käynnistää Androidin niin, että ladatut sovellukset ovat poissa käytöstä. Se ei poista niitä. Saat vain puhtaan testiympäristön.

Pixelissä avaa virtavalikko, paina pitkään Power off- tai Restart-vaihtoehtoa ja hyväksy vikasietotilaan siirtyminen. Samsungissa sammuta puhelin, käynnistä se uudelleen ja pidä Volume Down -painiketta painettuna Samsung-logon ilmestyessä. Xiaomin sanamuodot ja ajoitus vaihtelevat, mutta monissa malleissa vikasietotila avautuu pitämällä Volume Down -painiketta painettuna käynnistyksen aikana.

Jos kaatumiset loppuvat vikasietotilassa, jokin ladattu sovellus häiritsee toimintaa. Käynnistä puhelin normaalisti ja poista ensin äskettäin asennetut tai syvälle järjestelmään puuttuvat sovellukset: puhdistus- ja akunsäästösovellukset, virustorjunnat, VPN-sovellukset, vaihtoehtoiset aloitusnäyttösovellukset, automaatiotyökalut sekä esteettömyysoikeuksia käyttävät sovellukset.

Jos kaatumiset jatkuvat vikasietotilassa, syy löytyy todennäköisemmin järjestelmäohjelmistosta, tallennustilasta, laitteistosta tai esiasennetusta sovelluksesta.

## Kun sovellus jumiutuu kaatumisen sijasta

"App isn't responding" -ilmoitus tarkoittaa ANR-tilannetta, joka on lyhenne sanoista Application Not Responding. Sovellus ei ole vielä kaatunut. Android vain varoittaa, ettei se vastannut riittävän nopeasti.

Käyttäjän syötteen käsittelyssä Androidin tavallinen ANR-aikaraja on 5 sekuntia. BroadcastReceiver-komponenttien aikaraja riippuu tilanteesta ja Android-versiosta. Käyttäjälle lopputulos näyttää samalta: napautat, odotat, eikä mitään tapahdu.

Valitse Wait, jos käynnissä on tallentamisen arvoinen työ, kuten videon vienti tai suuren tiedoston lähetys. Valitse Close, jos sovellus on selvästi jumissa. Saman sovelluksen toistuvat ANR-tilanteet tarkoittavat yleensä, että sovellus tekee liikaa työtä pääsäikeessään, odottaa hidasta verkkopyyntöä tai kamppailee vähäisen muistin kanssa.

## Mitä ei kannata asentaa

Älä asenna crash fixer-, RAM booster- tai stability booster -sovelluksia. Ne eivät pysty korjaamaan toisen sovelluksen koodia. Parhaimmillaan ne tyhjentävät välimuistia ja pakottavat taustasovelluksia kiinni. Pahimmillaan ne lisäävät uuden jatkuvasti toimivan palvelun puhelimeen, jossa muistia on jo valmiiksi liian vähän.

Hyödylliset ratkaisut ovat tylsiä: päivitä sovellus, tyhjennä välimuisti, poista sovellustiedot vain silloin kun se on turvallista, asenna uudelleen, vapauta tallennustilaa, testaa vikasietotilassa ja odota kehittäjän tai puhelinvalmistajan korjausta silloin, kun vika on heidän puolellaan.

Kaatumiset eivät vahingoita puhelinta. Tallentamaton työ voi silti kadota. Jos sovellus kaatuu kuvia, muistiinpanoja tai asiakirjoja tallennettaessa, älä luota siihen ennen kuin tiedot on varmuuskopioitu.
