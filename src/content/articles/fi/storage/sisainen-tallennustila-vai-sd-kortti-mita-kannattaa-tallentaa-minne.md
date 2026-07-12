---
title: "Sisäinen tallennustila vai SD-kortti: mitä kannattaa tallentaa minne"
description: "microSD-kortilla voi lisätä Android-puhelimen tallennustilaa, mutta se ei vastaa sisäistä tallennustilaa. Tässä mennään usein vikaan. Suurempi tila ja nopea tila eivät ole sama asia."
listSummary: "microSD-kortilla voi lisätä Android-puhelimen tallennustilaa, mutta se ei vastaa sisäistä tallennustilaa."
hub: "storage"
sourceNumber: 86
order: 8
tags: ["tallennustila","android","siivous","optimointi","opas"]
locale: "fi"
draft: false
---
Ero korostuu vuonna 2026, koska Android-puhelimissa käytetään hyvin erilaista tallennuslaitteistoa. Monissa lippulaiva- ja keskihintaisissa puhelimissa ei ole microSD-korttipaikkaa lainkaan. Pixel-puhelimissa sitä ei ole, Samsung luopui korttipaikasta Galaxy S -sarjassa jo vuosia sitten, ja Galaxy A -sarjassakin tuki vaihtelee mallin mukaan. Toisaalta jotkin Galaxy A- ja M-mallit, Motorola Moto G -mallit ja Sony Xperia -puhelimet tukevat edelleen microSD-kortteja.

Tarkista aina täsmällinen malli. Pelkkä tuoteperheen nimi ei riitä.

## Nopeusero on todellinen

Nykyaikaisten Android-puhelinten sisäinen tallennustila käyttää yleensä UFS-tekniikkaa. Monissa huippumalleissa käytetään UFS 4.x -tallennustilaa, ja Samsungin UFS 4.0 yltää valmistajan mukaan enintään 4 200 MB/s:n lukunopeuteen ja 2 800 MB/s:n kirjoitusnopeuteen. Vanhempi UFS 2.1 voi sekin saavuttaa noin 850 MB/s:n peräkkäisen lukunopeuden.

Tavallinen microSD-kortti on paljon hitaampi. Kelvollinenkin UHS-I-kortti toimii lähempänä ulkoisen tallennusmedian kuin puhelimen sisäisen tallennustilan nopeuksia. Myös kortin näkyvä nopeusmerkintä voi johtaa harhaan. V30 tarkoittaa vähintään noin 30 MB/s:n jatkuvaa videokirjoitusnopeutta. Se on hyödyllinen videokuvauksessa, mutta ei muuta irrotettavaa tallennustilaa UFS:n veroiseksi, kun sovellus tekee tuhansia pieniä luku- ja kirjoitusoperaatioita.

Juuri satunnaiskäytön nopeusero saa sovellukset tuntumaan huonommilta SD-kortilta käytettynä.

## Pidä sovellukset sisäisessä tallennustilassa

Sovellukset kannattaa pitää sisäisessä tallennustilassa aina kun mahdollista. Käynnistys, tietokannat, taustasynkronointi, ilmoitukset, pikkukuvat ja välimuistit käyttävät tallennustilaa jatkuvasti. Hitaalla kortilla tämä näkyy viiveenä.

Android voi siirtää joitakin sovelluksia adoptoituun tai ulkoiseen tallennustilaan, mutta vain jos laite ja sovellus sallivat sen. Sovelluksen on sallittava ulkoiseen tallennustilaan asentaminen esimerkiksi android:installLocation-määrityksellä. Moni sovellus ei salli sitä.

Pelit houkuttelevat yrittämään tätä väkisin. 15 Gt:n peli näyttää täydelliseltä SD-kortille siirrettävältä kohteelta. Käytännössä latausajat pitenevät, päivitykset hidastuvat ja osa peleistä kieltäytyy siirtymästä kokonaan. Jos mietit, mitä poistaa, pelaamatta jääneen pelin asennuksen poistaminen on yleensä parempi ratkaisu kuin sen ajaminen kortilta.

## Tallenna media SD-kortille

Kuvat, videot, musiikki, podcastit, elokuvat, offline-kartat, PDF-tiedostot ja arkistot sopivat paremmin SD-kortille. Näitä tiedostoja luetaan suurempina kokonaisuuksina, eivätkä ne tarvitse sovellusten kaltaista nopeaa satunnaiskäyttöä.

Jos kamerasovellus tukee sitä, valitse tallennuspaikaksi SD-kortti. Samsungin, Motorolan ja Sonyn kamerasovelluksissa tämä on ollut mahdollista monissa korttipaikallisissa malleissa, mutta tarkka asetus vaihtelee mallin ja Android-version mukaan. Etsi kamerasovelluksen asetuksista tallennuspaikkaa koskeva valinta.

Myös suoratoistosovellus voi sallia offline-latausten tallentamisen SD-kortille. Netflixin, Spotifyn, YouTuben ja karttasovellusten asetukset ovat muuttuneet ajan myötä, joten tarkista asia sovelluksesta. Älä oleta Androidin hallitsevan asetusta yleisesti.

Tässä on yksi haittapuoli. Jos kortti vioittuu, myös sillä olevat kuvat ja lataukset voivat kadota. Säilytä tärkeästä sisällöstä pilvivarmuuskopio, tietokonekopio tai muu varmuuskopio.

## Adoptoitu tallennustila kuulostaa käytännössä paremmalta kuin onkaan

Android 6.0 toi käyttöön adoptoidun tallennustilan. Android voi alustaa ja salata irrotettavan tallennusmedian niin, että se toimii sisäisen tallennustilan tapaan. Kortti sitoutuu yhteen puhelimeen, ja Android voi tallentaa sille sovelluksia ja yksityistä dataa.

Paperilla tämä ratkaisee sisäisen tallennustilan puutteen. Käytännössä kyse on kompromissista. Hidas kortti voi tehdä puhelimesta tahmean, ja kortin vioittuessa Android voi menettää dataa, jonka se odotti olevan käytettävissä. Adoptoidun kortin irrottaminen ilman asianmukaista poistamista voi myös rikkoa sille tallennettuja sovelluksia tai dataa.

Android varoittaa joissakin laitteissa hitaasta kortista käyttöönoton aikana. Varoitus ei kuitenkaan tee hitaasta tallennusmediasta nopeaa. Se vain kertoo riskistä ennen valinnan vahvistamista.

Adoptoitu tallennustila ei myöskään ole käytettävissä kaikissa puhelimissa. Osa valmistajista piilottaa tai poistaa toiminnon käytöstä etenkin malleissa, joissa käyttökokemus jäisi heikoksi. Jos vaihtoehtoa ei näy, kyse voi olla valmistajan päätöksestä eikä käyttäjän virheestä.

## Siirrettävä tallennustila on turvallisempi oletus

Siirrettävässä tallennustilassa kortti pysyy erillisenä asemana. Voit irrottaa sen, lukea sitä tietokoneella, siirtää tiedostoja molempiin suuntiin ja käyttää sitä pääasiassa medialle.

Useimmille tämä on parempi ratkaisu. Pidä sovellukset ja sovellusdata puhelimen sisällä. Tallenna kameran media, offline-musiikki, elokuvat, asiakirjat ja varmuuskopiot kortille. Ratkaisu ei ole yhtä hienostunut, mutta vikatilanne on selkeämpi.

Yksinkertainen on tässä hyvä.

## Mitä tehdä, kun sisäinen tallennustila on lähes täynnä

Kun sisäinen tallennustila käy hyvin vähiin, puhelin voi hidastua. Flash-tallennustila tarvitsee vapaita lohkoja kirjoittamista ja sisäistä siivousta varten. Android tarvitsee lisäksi tilaa sovellus- ja järjestelmäpäivityksille, välimuisteille sekä tilapäisille tiedostoille. Myös 128 Gt:n puhelin voi toimia huonosti, jos viimeisistä gigatavuista taistellaan jatkuvasti.

Aloita tallennustilan näkymästä Asetukset-sovelluksessa. Jos kuvat ja videot vievät eniten, siirrä mediaa kortille tai pilveen. Jos sovellukset hallitsevat tilankäyttöä, poista käyttämättömät sovellukset ja tyhjennä pahimpien tilasyöppöjen välimuisti. Jos Lataukset-kansio on täynnä, poista vanhat asennuspaketit, ZIP-tiedostot, PDF-tiedostot ja viedyt videot.

Sovelluksen kuvakkeen siirtäminen irrotettavalle tallennusmedialle on harvoin niin siisti ratkaisu kuin miltä se kuulostaa.

## SD-kortin nopeusmerkinnät selkokielellä

Class 10 ja U1 riittävät tavallisiin kuviin, musiikkiin ja asiakirjoihin.

V30 on turvallisempi valinta 4K-videon tallentamiseen, koska luokitus perustuu jatkuvaan kirjoitusnopeuteen.

A1 ja A2 kuvaavat sovelluskäytön suorituskykyä. Niillä on eniten merkitystä, jos aiot käyttää adoptoitua tallennustilaa tai tehdä kortilta sovellusten kaltaisia työkuormia. Ne eivät muuta microSD-korttia UFS-tallennustilaksi.

Osta kortti tunnetulta valmistajalta ja vältä epäilyttävän halpoja suuren kapasiteetin kortteja. Väärennöksiä on edelleen liikkeellä, ja vika ilmenee ikävästi: kortti näyttää suurelta, kunnes vanhat tiedostot alkavat vioittua.

## Jos puhelimessa ei ole SD-korttipaikkaa

Käytä kuvien ja videoiden pilvitallennusta, siirrä suuria tiedostoja tietokoneelle tai tee satunnaisia siirtoja USB-C-muistitikulla ja USB OTG -tuella. Sen jälkeen jäljelle jää tylsä mutta toimiva vastaus: poista sovellukset, joita et käytä, tyhjennä hallitsemattomaksi kasvanut sovellusvälimuisti, poista vanhat lataukset ja vältä seuraavalla kerralla liian pienellä tallennustilalla varustettua puhelinta.

Viimeinen neuvo kuulostaa suoralta, koska se on totta. 64 Gt:n Android-puhelin voi vielä vuonna 2026 toimia, mutta videoille, peleille, offline-kartoille ja vuosien keskustelumedialle jää hyvin vähän tilaa.
