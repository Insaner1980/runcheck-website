---
title: "Mitä tapahtuu, kun Android ei enää saa päivityksiä"
description: "Viimeinen päivitys saapuu, asennat sen, eikä mitään dramaattista tapahdu. Puhelimella voi edelleen soittaa. WhatsApp avautuu. Wi-Fi-yhteys toimii. Valokuvasi ovat yhä tallessa."
listSummary: "Viimeinen päivitys saapuu, asennat sen, eikä mitään dramaattista tapahdu."
hub: "software"
sourceNumber: 121
order: 3
tags: ["android","päivitykset","tietoturva","ohjelmisto","opas"]
locale: "fi"
draft: false
---
Siksi tuen ulkopuolelle jääneet puhelimet ovat hankalia. Ne eivät lakkaa yhtäkkiä toimimasta. Ne vain altistuvat riskeille hieman enemmän joka kuukausi.

## Tietoturvariski kasvaa ajan myötä

Androidin tietoturvapäivitykset korjaavat haavoittuvuuksia järjestelmän Framework- ja System-komponenteissa, kernelissä, ajureissa sekä laitevalmistajien koodissa. Kun puhelin ei enää saa päivityksiä, uudet julkiset haavoittuvuudet jäävät siinä avoimiksi.

Kesäkuun 2026 Android Security Bulletin on hyvä esimerkki. Siinä käytetään tietoturvakorjaustasoja 2026-06-01 ja 2026-06-05, joista jälkimmäinen kattaa tiedotteen koko korjaussarjan. Google kuvasi vakavimman ongelman kriittiseksi Framework-haavoittuvuudeksi, joka voi mahdollistaa oikeuksien etäkorotuksen ilman käyttäjän toimia. Tiedotteessa kerrotaan myös merkeistä, joiden mukaan CVE-2025-48595-haavoittuvuutta saatetaan hyödyntää rajatuissa, kohdennetuissa hyökkäyksissä.

Yhden kuukauden puuttuminen ei merkitse automaattista katastrofia. Vuoden jälkeen tilanne on toinen. Hyökkääjillä, haittaohjelmien tekijöillä ja haavoittuvuuksia välittävillä toimijoilla on silloin ollut aikaa tutkia vikoja, joita puhelimeesi ei enää koskaan korjata.

Ei ole yhtä taikaviivaa, jonka toisella puolella puhelin muuttuu turvallisesta vaaralliseksi. Riski kasvaa vähitellen.

## Google Play Protect auttaa edelleen, mutta ei voi korjata kaikkea

Play Protect jatkaa sovellusten tarkistamista laitteissa, joissa on Google Mobile Services. Se voi varoittaa haitallisista sovelluksista, ja siitä on erityistä hyötyä, jos puhelimeen asennetaan sovelluksia Google Playn ulkopuolelta.

Android 10:tä ja sitä uudempia versioita käyttävät laitteet voivat saada myös Google Play ‑järjestelmäpäivityksiä Project Mainline -järjestelmän kautta. Mainline-päivityksillä voidaan korjata joitakin käyttöjärjestelmän moduuleja ilman valmistajan täyttä laiteohjelmistopäivitystä.

Tällä turvaverkolla on rajansa. Kernelin, modeemin ja näytönohjaimen ajurien virheet sekä monet Qualcommin, MediaTekin, Samsungin ja muiden laitekomponenttien ongelmat vaativat edelleen valmistajan järjestelmäpäivityksen. Play Protect voi pienentää riskiä. Se ei tee tuen ulkopuolelle jääneestä puhelimesta jälleen tuettua.

## Sovellukset lakkaavat toimimasta vähitellen

Sovellusten yhteensopivuus heikkenee tietoturvaa hitaammin. Useimmat sovellukset eivät hylkää vanhaa Android-versiota samana päivänä, kun puhelimen tietoturvapäivitykset päättyvät.

Google Play Kauppa käyttää sovellusten SDK-vähimmäisvaatimuksia. Kehittäjät pitävät vähimmäistason matalana, kun he haluavat tavoittaa suuren käyttäjäjoukon, mutta raja nousee ajan mittaan. Pankkisovellukset, sähköiset henkilöllisyyssovellukset, työprofiilityökalut, salasanojen hallinta, maksusovellukset ja muut tietoturvakriittiset palvelut nostavat vaatimuksia yleensä nopeammin kuin tavalliset media- tai sosiaalisen median sovellukset.

Saatat huomata muutoksen ensin pieninä asioina. Sovelluspäivitys ei enää ilmesty. Uusi ominaisuus puuttuu. Sitten sovellus ilmoittaa, ettei Android-versiotasi enää tueta. Riittävän monen vuoden jälkeen puutteita on vaikea sivuuttaa.

## Puhelin ei hidastu siksi, että päivitykset loppuivat

Päivitysten puute ei itsessään hidasta puhelinta. Hidastuminen johtuu yleensä täyttyneestä tallennustilasta, vanhenevasta akusta, raskaammiksi muuttuvista sovelluksista, taustalle kertyneestä kuormasta ja ikääntyvästä laitteistosta.

Viimeiseen Android-versioonsa jäänyt puhelin voi jopa välttyä uudempien käyttöjärjestelmäominaisuuksien lisäkuormalta. Vastineeksi menetät tietoturvaa ja yhteensopivuutta. Vanha alusta pysyy vakaana, mutta ympäröivä maailma jatkaa liikkumistaan.

Akun vanheneminen ansaitsee erillisen maininnan. Kun akku kuluu, sen jännite voi pudota kuormituksessa. Puhelin saattaa rajoittaa suorituskykyä, sammua liian aikaisin tai takkuilla kameraa ja navigointia käytettäessä. Se tuntuu ohjelmisto-ongelmalta, vaikka syy on usein kemiassa.

## Mitä tehdä tuen päätyttyä

Pidä Play Protect käytössä. Avaa Google Play Kauppa, napauta profiilikuvaa, valitse Play Protect ja sitten Asetukset. Varmista, että Tarkista sovellukset Play Protectilla on käytössä.

Vältä APK-tiedostojen asentamista Google Playn ulkopuolelta, ellet todella tunne lähdettä ja luota siihen. Päivittämättömässä puhelimessa virheille on vähemmän turvamarginaalia.

Tarkista Google Play ‑järjestelmäpäivityksen päivämäärä. Polku vaihtelee, mutta monissa puhelimissa kohta löytyy englanninkielisellä polulla Settings > Security & privacy > Updates. Toinen yleinen reitti on Asetukset > Tietoja puhelimesta > Android-versio > Google Play ‑järjestelmäpäivitys.

Poista arkaluonteiset tilit, jos otat puhelimen muuhun käyttöön. Päivityksetön laite, jota käytetään musiikkisoittimena, kaukosäätimenä, herätyskellona tai offline-kamerana, on eri asia kuin puhelin, jossa ovat pankkisovellukset, työposti, tallennetut salasanat ja henkilökohtaiset asiakirjat.

Seuraa tärkeimpien sovellustesi tilannetta. Kun pankki-, tunnistautumis-, työ- tai viestisovellus lopettaa tuen, puhelin on siirtynyt vaiheesta "vanha mutta käyttökelpoinen" vaiheeseen "väärä työkalu tähän tehtävään".

## Kuinka pitkä viive on liikaa?

Jos pääpuhelimessa on pankkisovelluksia, työposti, maksusovelluksia, yksityisiä valokuvia ja pääsy salasanojen hallintaan, aloita uuden laitteen suunnittelu, kun tietoturvakorjaus on kuusi kuukautta jäljessä eikä uutta päivitystä ole tulossa. Kun eroa on vuosi, en enää pitäisi sitä turvallisena päivittäisenä puhelimena.

Toissijaisessa laitteessa, jossa ei ole arkaluonteisia tilejä, käyttöaika voi olla pidempi. Vain kodin Wi-Fi-verkossa YouTubeen, musiikkiin tai älykodin ohjaukseen käytetty puhelin on pienempi riski. Pidä se silti poissa epäilyttäviltä APK-sivustoilta äläkä käytä sillä raha-asioita.

Hyvä uutinen on, että tukiajat ovat paljon parempia kuin vielä muutama vuosi sitten. Google antaa Pixel 8:lle ja sitä uudemmille puhelimille seitsemän vuotta käyttöjärjestelmä- ja tietoturvapäivityksiä. Samsung on puolestaan pidentänyt valittujen Galaxy-laitteiden tietoturvatukea enimmillään seitsemään vuoteen. Vanhemmat ja halvemmat puhelimet jäävät edelleen tuen ulkopuolelle aiemmin, joten täsmällinen malli ratkaisee.
