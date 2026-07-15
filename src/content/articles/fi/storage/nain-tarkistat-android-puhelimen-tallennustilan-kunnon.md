---
title: "Näin tarkistat Android-puhelimen tallennustilan kunnon"
description: "Metakuvaus: Android-puhelimen tallennuspiiri kuluu ajan myötä, mutta useimmat puhelimet eivät näytä sille yksinkertaista kuntoprosenttia. Tästä näet, mitä voit tarkistaa, mitä luvut tarkoittavat ja milloin on syytä huolestua."
listSummary: "Arvioi tallennustilan kuntoa tyypin, nopeuden ja oireiden avulla."
hub: "storage"
sourceNumber: 80
order: 2
tags: ["tallennustila","android","siivous","optimointi","opas"]
locale: "fi"
draft: false
---
---

Mistä tietää, onko Android-puhelimen tallennustila kunnossa eikä vain vähissä? Ärsyttävästi useimmat puhelimet eivät vieläkään tee tarkistamisesta helppoa.

Tallennustilan kunto ja vapaan tilan määrä ovat eri asioita. Puhelimessa voi olla 80 Gt vapaata, vaikka sen NAND-piiri olisi heikentynyt. Lähes täysi puhelin voi puolestaan tuntua hitaalta, vaikka tallennuslaitteisto olisi kunnossa. Nämä ongelmat sekoitetaan jatkuvasti toisiinsa, joten ne kannattaa erottaa heti alussa.

## Mikä kuluttaa puhelimen tallennustilaa

Android-puhelimet käyttävät NAND-flashmuistia. Edullisissa malleissa on käytetty usein eMMC:tä, kun taas keskihintaisissa ja lippulaivapuhelimissa käytetään yleensä UFS:ää. Molemmat kuluvat ohjelmointi- ja tyhjennysjaksoissa. Aina kun tietoa kirjoitetaan, poistetaan ja kirjoitetaan uudelleen, muistisolut kuluvat hieman.

Ohjain jakaa kirjoitukset eri puolille piiriä kulumisen tasauksen avulla. Siksi puhelimen tavallinen käyttö kuluttaa tallennustilan harvoin nopeasti loppuun. Kuvat, viestit, sovelluspäivitykset ja verkkoselailu eivät vastaa valvontakameran jatkuvaa tallennusta vuorokauden ympäri.

Pitkät videotallenteet, jatkuva pelien asentaminen, toistuvat tehdasasetusten palautukset ja tallennustilan pitäminen lähes täynnä rasittavat muistia enemmän. Viimeinen kohta on tärkeä, koska ohjaimella on silloin vähemmän vapaita lohkoja siivoukseen ja kulumisen tasaukseen. Se toimii. Kunnes ei enää toimi.

Useimmilla tallennuspiiri ei ole puhelimen ensimmäinen rikkoutuva osa. Akku, näyttö, USB-C-liitäntä tai ohjelmistotuen päättyminen johtaa tavallisesti puhelimen vaihtoon aikaisemmin. Tallennustilan kunto on kiinnostavampi kysymys kunnostetuissa puhelimissa ja paljon käytetyissä edullisissa malleissa.

## Androidin tallennustilan kuntolukujen ongelma

Androidissa ei ole yleistä asetusta, joka kertoisi, että tallennustilasta on esimerkiksi 92 % käyttöikää jäljellä, samalla tavalla kuin uusimmat Pixel-puhelimet voivat näyttää akun kunnon tuetuissa malleissa.

Android-kehyksessä on tallennustilan jäljellä olevaa käyttöikää koskeva rajapinta. Se voi palauttaa arvion sisäisen tallennustilan jäljellä olevasta käyttöiästä prosentteina tai arvon `-1`, jos tietoa ei ole saatavilla. Ongelmana on käyttöoikeus. AOSP:ssa rajapinta on tarkoitettu etuoikeutetuille järjestelmäsovelluksille ja vaatii oikeuden `READ_PRIVILEGED_PHONE_STATE`, joten tavallinen Google Playsta asennettu sovellus ei yleensä voi käyttää sitä.

Joissakin Pixel-ohjelmistoversioissa Android 15:stä alkaen tallennustilan tilatietoja on näkynyt **Device diagnostics** -toiminnossa tai huoltoon tarkoitetuissa diagnostiikkanäkymissä tavallisen Asetukset-sivun sijaan. Saatavuus on vaihdellut ohjelmistoversion mukaan, eikä kyse ole yleisestä Android-ominaisuudesta. Samsung Members voi tehdä Galaxy-puhelimille laajan laitediagnostiikan, mutta siitä ei kannata odottaa selkeää NAND-muistin jäljellä olevan käyttöiän prosenttia.

Android 17 ei tehnyt tallennustilan kunnosta yleistä kuluttaja-asetusta. Android 17 julkaistiin ensin useimmille tuetuille Pixel-laitteille, ja muut valmistajat tuovat sen omiin puhelimiinsa omien käyttöliittymiensä ja aikataulujensa mukaan. Valmistajakohtaiset erot ovat siis edelleen olennaisia.

## Tarkista ensin tallennustilan tyyppi

Selvitä ennen nopeustestiä, millaista tallennustilaa puhelin käyttää. Tarkista valmistajan tekniset tiedot tai käytä esimerkiksi DevCheck-laitetietosovellusta ja katso tallennustilaa koskeva osio.

Karkeana nyrkkisääntönä viime vuosien edullisissa puhelimissa käytetään usein eMMC 5.1:tä. Paremmissa keskihintaisissa malleissa on UFS 2.2 tai UFS 3.1. Uusissa lippulaivapuhelimissa käytetään tavallisesti UFS 4.0:aa tai UFS 4.1:tä. UFS 5.0 on julkistettu, mutta se ei vielä ole nykyisten puhelinten perustaso.

Tyyppi on tärkeä, koska hidas eMMC-puhelin ja kulunut UFS-tallennustila voivat antaa samankaltaisia testituloksia eri syistä.

## Testaa tallennusnopeutta varovasti

Käytä esimerkiksi CPDT-tallennusnopeussovellusta. Tee testi, kun puhelin on viileä, akun varausta on yli 20 %, puhelin ei kuumene latauksessa ja tallennustilasta on vähintään 15-20 % vapaana. Tee testi sitten uudelleen. Yksi heikko tulos ei vielä todista mitään.

Seuraavat luvut ovat vain vertailukohtia, eivät hyväksymisrajoja:

Peräkkäisen luku- ja kirjoitusnopeuden viitearvoja ovat eMMC 5.1:llä noin 250/100-125 MB/s, UFS 2.1:llä noin 850/250 MB/s, UFS 3.1:llä noin 2 100/1 200 MB/s ja UFS 4.0:lla noin 4 200/2 800 MB/s.

Oikeat puhelimet eivät aina yllä näihin lukuihin. Kapasiteetti, ohjain, lämpötila, salaus, laiteohjelmisto, vapaan tilan määrä ja itse testisovellus vaikuttavat tulokseen. Saman puhelinsarjan 128 Gt:n malli voi myös olla hitaampi kuin 512 Gt:n malli, koska siinä on vähemmän rinnakkain toimivia NAND-piirejä.

Jos tulos jää paljon odotetusta, vapauta ensin tilaa ja testaa uudelleen puhelimen käynnistyksen jälkeen. Jos nopeus pysyy heikkona ja puhelin myös jumittuu sovellusten asennuksen, tiedostojen siirron, kameratallennuksen tai sovelluspäivitysten aikana, tallennustilan kunto on jo varteenotettava epäilty.

## Tallennustilan ongelmiin viittaavat merkit

Tallennusongelmat tuntuvat erilaisilta kuin vanhan puhelimen tavallinen hitaus.

Sovellusten asentaminen tai päivittäminen voi kestää tuskastuttavan kauan. Kamera saattaa pysähtyä jokaisen kuvan jälkeen tallennuksen ajaksi. Puhelin voi jumittua tiedostoja kopioitaessa, poistettaessa tai siirrettäessä. Käynnistyminen voi kestää selvästi aiempaa kauemmin. Suuret pelit voivat tarkistaa tai korjata tiedostojaan tavallista useammin.

Vakavampia merkkejä on vaikea sivuuttaa: vioittuneet kuvat, avautumattomat asiakirjat, tiedostoon kirjoittamisen aikana kaatuvat sovellukset, tallennukseen liittyvät virheilmoitukset vapaasta tilasta huolimatta tai puhelin, joka ei aina käynnisty.

Ota varmuuskopio heti, jos huomaat tiedostojen vioittuvan. Älä aja puhelimella tunnin mittaisia nopeustestejä, jos tärkeät tiedot ovat yhä vain siinä laitteessa.

## Vain rootatuilla laitteilla tehtävät tarkistukset

Rootatut laitteet voivat joskus lukea alemman tason kuntotietoja sysfs-tiedostojärjestelmästä. eMMC-laitteissa käyttöikäarvioita voi löytyä Extended CSD -arvoista polkujen kuten `/sys/class/mmc_host/mmc0/mmc0:*/life_time` alta. UFS-laitteissa kuntokuvaajia voi olla polun `/sys/class/scsi_device/` tai valmistajakohtaisten polkujen alla.

Tämä ei ole tavalliselle käyttäjälle tarkoitettu neuvo. Polut vaihtelevat, SELinux estää pääsyn vakio-ohjelmistolla, ja arvot on helppo tulkita väärin. Jos laite on jo rootattu ja tiedät mitä teet, tiedoista voi olla hyötyä. Älä kuitenkaan roottaa puhelinta vain tallennustilan kunnon tarkistamista varten.

## Näin vähennät tallennustilan rasitusta

Pidä 15-20 % sisäisestä tallennustilasta vapaana. 128 Gt:n puhelimessa se tarkoittaa noin 20 Gt:tä. 256 Gt:n puhelimessa 40 Gt on hyvä puskuri, vaikka tarkasta määrästä ei tarvitse tehdä pakkomiellettä.

Älä palauta tehdasasetuksia rutiinihuoltona. Yksi palautus sekaisin menneen puhelimen korjaamiseksi on aivan perusteltu. Kuukausittaiset palautukset kuluttavat turhaan ja luovat tavallisesti saman tallennusongelman uudelleen, kun asennat kaiken takaisin.

Tallenna pitkät videot ulkoiseen tallennustilaan vain, jos puhelin ja kamerasovellus tukevat sitä kunnolla. Jos käytät SD-korttia, pidä siinä mediaa, älä sovelluksia. Sovellukset kuuluvat edelleen sisäiseen tallennustilaan, koska UFS on paljon nopeampi ja luotettavampi kuin useimmat microSD-kortit.

Jos käytät runcheckia, seuraa tallennustilan kuormitusta ajan mittaan yhden luvun tuijottamisen sijaan. Tallennustilaosio näyttää kapasiteetin käytön, ja yhdessä akun lämpötilan sekä muiden kuntotietojen kanssa se auttaa erottamaan täyden puhelimen aiheuttaman ongelman mahdollisesta laiteviasta.
