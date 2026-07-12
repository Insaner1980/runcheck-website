---
title: "Mikä Android System WebView on ja miksi sitä pitää päivittää?"
description: "Miksi järjestelmäkomponentti, jota et koskaan avaa, tarvitsee päivityksiä jatkuvasti? Android System WebView näyttää verkkosisältöä muiden sovellusten sisällä. Verkkosisältö muuttuu nopeasti, toimii monella tavalla ja on tietoturvan kannalta herkkää."
listSummary: "Miksi järjestelmäkomponentti, jota et koskaan avaa, tarvitsee päivityksiä jatkuvasti?"
hub: "software"
sourceNumber: 129
order: 11
tags: ["android","päivitykset","tietoturva","ohjelmisto","opas"]
locale: "fi"
draft: false
---
Et ehkä koskaan napauta WebView-kuvaketta. Useimmat eivät napauta. Kun sähköpostisovellus avaa kirjautumissivun, yhteisöpalvelu näyttää artikkelin poistumatta sovelluksesta tai pankkisovellus lataa verkkopohjaisen tunnistautumisnäkymän, WebView huolehtii usein sisällön piirtämisestä taustalla.

## Mitä WebView oikeasti tekee

Android-sovelluksen ei tarvitse rakentaa kokonaista selainmoottoria aina, kun sen pitää näyttää verkkosivu. WebView tarjoaa yhteisen tavan näyttää sovelluksen sisällä HTML:ää, CSS:ää, JavaScriptiä, kuvia, lomakkeita, kirjautumissivuja, tukitekstejä, maksuvaiheita ja muita verkkotyökaluja.

Se perustuu Chromiumiin, samaan avoimen lähdekoodin selainprojektiin kuin Chrome. Tällä on merkitystä, koska nykyiset verkkosivut eivät ole enää yksinkertaisia asiakirjoja. Ne suorittavat JavaScriptiä, lataavat mediaa, säilyttävät istunnon tilaa, käsittelevät uudelleenohjauksia ja käyttävät jatkuvasti muuttuvia tietoturvamekanismeja.

Yksinkertainen esimerkki: napautat verkkokauppasovelluksen ohjetta. Sovellus voisi siirtää sinut Chromeen, mutta moni sovellus pitää käyttäjän omassa käyttöliittymässään ja näyttää sivun WebView'n avulla. Kokemus pysyy siistinä, mutta samalla WebView käsittelee kaiken verkkosisällön, jonka sovellus siihen lataa.

## Miksi se päivittyy erillään Androidista

WebView on ollut erikseen päivitettävä järjestelmäkomponentti Android 5 Lollipopista lähtien. Olennaista on, että Google voi päivittää WebView-palvelun Google Playn kautta odottamatta jokaisen puhelinvalmistajan kokonaista Android-päivitystä.

Ratkaisulla on nytkin merkitystä. Android 17 on julkaistu ja saatavilla useimmille tuetuille Pixel-laitteille, mutta uudet laitteet ja muut valmistajat seuraavat myöhemmin. WebView-korjausten ei tarvitse odottaa tätä hitaampaa, puhelinmalli kerrallaan etenevää päivitystä. Samsung- tai Xiaomi-puhelin, jossa ei vielä ole Android 17:ää, voi silti saada WebView-korjauksia Google Playn kautta, jos laite on tuettu ja siinä on Google Play -palvelut.

Vanhoissa Android 7-, 8- ja 9-laitteissa Chrome toimi usein aktiivisena WebView-palveluna. Android 10:ssä ja sitä uudemmissa versioissa Android System WebView on tavallisesti erillinen komponentti, joka näkyy Play Kaupassa ja sovellusasetuksissa. Toteutus voi poiketa erikoislaitteissa, mukautetuissa ROM-versioissa ja Android-järjestelmissä, joissa ei ole Google Playta.

## Miksi päivityksiä tulee usein

WebView käsittelee avoimesta internetistä tulevaa sisältöä. Siksi se on houkutteleva hyökkäyskohde.

WebView'n virhe voi olla tavallisen sovelluksen virhettä vakavampi, koska moni sovellus käyttää samaa komponenttia. Piirtovirhe voi rikkoa kirjautumissivut. Tietoturva-aukko voi antaa sovelluksen sisällä avatulle haitalliselle sivulle paremmat mahdollisuudet aiheuttaa vahinkoa. Yhteensopivuusvirhe voi puolestaan saada useita toisistaan riippumattomia sovelluksia kaatumaan samana päivänä.

Näin on tapahtunut aiemmin. Maaliskuussa 2021 viallinen WebView-päivitys aiheutti laajoja Android-sovellusten kaatumisia, myös Gmailissa ja muissa suurissa sovelluksissa. Google korjasi ongelman uusilla WebView- ja Chrome-versioilla. Tilanne oli ärsyttävä, mutta se osoitti samalla, miksi Play Kaupan kautta päivitettävä WebView on parempi kuin pysyvästi käyttöjärjestelmään lukittu versio.

Kesäkuun 2026 lopun virallisissa Googlen järjestelmäpalvelujen julkaisutiedoissa uusin mainittu versio on Android WebView v150, julkaistu 17.6.2026. Android System WebView'n sivu Play Kaupassa päivitettiin 29.6.2026. Älä pidä yksittäistä versionumeroa pysyvänä tavoitetasona. WebView päivittyy jatkuvasti, ja vaiheittaisen jakelun takia kahdessa puhelimessa voi hetken näkyä eri versio.

## Mitä tapahtuu, jos WebView on vanhentunut

Tietoturva on tärkein syy välittää asiasta. WebView käsittelee epäluotettavaa verkkosisältöä sovellusten sisällä, joten tunnettuja haavoittuvuuksia ei kannata jättää korjaamatta.

Myös käytännön oireita voi tulla. Vanhentunut tai rikkoutunut WebView voi jättää sovelluksen sisäiset sivut tyhjiksi, jumittaa kirjautumisen silmukkaan, rikkoa maksusivun, vääristää tukisivun ulkoasun tai kaataa sovelluksen, kun se yrittää avata verkkonäkymän. Jos usea verkkosisältöä näyttävä sovellus hajoaa yhtä aikaa, WebView on vahva epäilty.

Älä silti syytä WebView'ta kaikesta. Jos vain yksi sovellus kaatuu ja muu puhelin toimii, päivitä ensin kyseinen sovellus. Tyhjennä sen välimuisti ja käynnistä puhelin uudelleen. WebView on todennäköisempi syy silloin, kun ongelma ylittää sovellusrajat.

## Näin päivität WebView'n

Useimmissa Android 10:tä tai uudempaa versiota käyttävissä puhelimissa, joissa on Google Play, WebView päivittyy automaattisesti Play Kaupan kautta.

Tarkista päivitys käsin avaamalla Google Play Kauppa, napauttamalla profiilikuvaketta ja valitsemalla Ylläpidä sovelluksia ja laitteita. Avaa Päivityksiä saatavilla ja etsi Android System WebView. Asenna päivitys, jos se on tarjolla.

Voit myös hakea Android System WebView'n suoraan Play Kaupasta. Jos näet Päivitä-painikkeen, napauta sitä. Jos päivityspainiketta ei näy, puhelimessa on todennäköisesti jo jakelukanavan uusin tarjolla oleva versio.

Asennetun version voi tarkistaa Android System WebView'n sovellustiedoista Asetuksissa. Järjestelmäsovellukset täytyy ehkä ottaa näkyviin valikosta. Joissakin puhelimissa WebView-palvelu näkyy myös kehittäjäasetusten WebView implementation -kohdassa, mutta useimpien ei tarvitse koskea siihen.

Jos päivitys jumittuu, kokeile ensin tavallisia korjauksia: käynnistä puhelin uudelleen, päivitä Google Play -palvelut ja Chrome sekä tyhjennä sitten Play Kaupan välimuisti. Älä asenna satunnaisia WebView-APK-tiedostoja, ellet varmasti tiedä mitä teet. Väärä paketti voi aiheuttaa enemmän ongelmia kuin ratkaista.

## Kannattaako WebView poistaa käytöstä tai poistaa?

Ei nykyaikaisessa Android-puhelimessa.

Android System WebView on järjestelmäkomponentti. Sitä ei yleensä voi poistaa kokonaan, mutta Android-versiosta ja valmistajasta riippuen päivitykset voi ehkä poistaa tai komponentin voi poistaa käytöstä. Päivitysten poistaminen vie tietoturvakorjauksia. Käytöstä poistaminen voi rikkoa sovellusten sisäisiä selaimia, kirjautumisnäkymiä, ohjesivuja ja muita verkkosisältöä käyttäviä toimintoja.

Poikkeuksia on. Joissakin vanhoissa Android 7-9 -laitteissa Chrome voi hoitaa WebView'n tehtävät, jolloin Android System WebView voi näkyä poistettuna käytöstä. Se on näissä vanhoissa järjestelmissä normaalia. Android 10:ssä ja sitä uudemmissa versioissa WebView kannattaa pitää käytössä ja ajan tasalla.

## Mitä tehdä, kun WebView aiheuttaa ongelmia

Jos usea sovellus alkaa yhtäkkiä kaatua tai näyttää tyhjiä verkkosivuja, päivitä Android System WebView ja Chrome Play Kaupasta. Käynnistä puhelin sen jälkeen uudelleen.

Jos ongelma alkoi heti WebView-päivityksen jälkeen ja puhelinta on lähes mahdoton käyttää, päivitysten poistaminen Android System WebView'n sovellustiedoista voi toimia väliaikaisena palautuksena. Väliaikaisuus on tässä olennaista. Päivitä komponentti uudelleen, kun Google julkaisee korjatun version, sillä vanhaan WebView-versioon jääminen on huono vaihtokauppa.

Piirtovirheissä WebView'n välimuistin tyhjentäminen voi auttaa. Avaa Android System WebView'n sovellustiedot, siirry tallennustilan ja välimuistin hallintaan ja tyhjennä ensin välimuisti. Tallennustilan tyhjentäminen on voimakkaampi toimi ja yleensä tarpeeton, mutta sekin on paljon vähemmän tuhoisa kuin koko puhelimen nollaus.

WebView on tarkoituksella huomaamaton. Kun se toimii, sitä ei huomaa. Pidä tilanne sellaisena.
