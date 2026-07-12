---
title: "Mitä antureita puhelimessani on ja miten tarkistan ne?"
description: "Miksi yksi puhelin näyttää kävelysuuntasi Mapsissa tarkasti, kun toinen näyttää vain epämääräisen sinisen ympyrän? Syy löytyy yleensä antureista. Kaikissa Android-puhelimissa on joitakin antureita, mutta tarkka valikoima riippuu mallista, hintaluokasta ja valmistusvuodesta."
listSummary: "diagnostiikka, anturit ja android"
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnostiikka","anturit","android","laitteisto","opas"]
locale: "fi"
draft: false
---
Vuoden 2026 lippulaivapuhelimessa voi olla gyroskooppi, barometri, näytönalainen sormenjälkitunnistin, useita herätysantureita ja joukko ohjelmiston muodostamia liikeantureita. Muutaman vuoden ikäisessä edullisessa puhelimessa voi olla vain perusvalikoima. Ero näkyy, kun näytön kierto, automaattinen kirkkaus, kompassisuunta, AR-sovellukset tai nosta herättääksesi -toiminto eivät käyttäydy odotetusti.

## Aloita anturisovelluksella

Androidin Asetukset eivät näytä kattavaa luetteloa laitteiston antureista. Niistä näkee laitteen perustiedot, mutta ei kaikkia Androidin anturikehyksen kautta ilmoitettuja antureita.

Helpoin tapa tarkistaa anturit on käyttää kolmannen osapuolen diagnostiikkasovellusta, kuten DevCheck, CPU-Z, Sensor Test tai Sensors Toolbox. Avaa sovellus ja etsi laitteistoluettelo. Hyvä sovellus näyttää jokaisen Androidiin rekisteröidyn anturin nimen, valmistajan, nykyiset lukemat, tarkkuuden ja virrankulutuksen.

Tämä on lähimpänä puhelimesta itsestään saatavaa totuutta. Luettelossa on silti yksi rajoitus: se näyttää anturit, joihin Android pääsee käsiksi, ei kaikkia piirilevylle juotettuja fyysisiä osia. Sormenjälkitunnistin, kamerakenno, modeemi tai ultraääneen perustuva lähestymisjärjestelmä ei välttämättä näy kiihtyvyysanturin ja gyroskoopin rinnalla.

## Numerokoodit voivat auttaa, mutta niihin ei kannata luottaa liikaa

Joissakin Android-puhelimissa on piilotettuja testivalikoita. Samsung-puhelimissa toimii usein `*#0*#`, joka voi avata laitteiston diagnostiikkanäkymän anturitesteineen. Joissakin Android-laitteissa `*#*#4636#*#*` avaa testivalikon, mutta se keskittyy enemmän puhelimen, akun ja verkon tietoihin kuin kattavaan anturiluetteloon.

Hankaluus on siinä, etteivät koodit ole yleispäteviä. Valmistaja, operaattori, markkina-alue tai uudempi ohjelmistoversio voi poistaa ne käytöstä. Jos koodi ei tee mitään, se ei todista anturin puuttuvan. Se kertoo vain, ettei koodi toiminut kyseisessä laitteessa.

Tekniset tietokannat ovat hyödyllinen toinen tarkistus. GSMArena ja valmistajien tuotesivut ilmoittavat usein tehtaan anturivalikoiman ominaisuus- tai teknisten tietojen yhteydessä. Niistä näkee, mitä mallissa pitäisi olla. Ne eivät kerro, toimiiko juuri sinun puhelimesi anturi oikein.

## Anturit, jotka puhelimesta yleensä löytyvät

### Kiihtyvyysanturi

Kiihtyvyysanturi mittaa kiihtyvyyttä kolmella akselilla. Näytön kierto, askelten laskeminen, ravistuseleet ja perusliikkeen tunnistus riippuvat siitä. Lähes jokaisessa Android-puhelimessa on sellainen.

### Gyroskooppi

Gyroskooppi mittaa pyörimisliikettä. Se tekee suunnan seurannasta paljon tarkempaa erityisesti AR- ja VR-sovelluksissa, kameran vakautuksessa ja kartan suuntanäytössä. Joistakin edullisista puhelimista se puuttuu. Siksi kaksi puhelinta voi käyttää Google Mapsia, vaikka vain toinen osoittaa siististi siihen suuntaan, johon katsot.

### Magnetometri

Magnetometri havaitsee magneettikenttiä ja toimii puhelimen kompassina. Se auttaa karttasovelluksia päättelemään kulkusuunnan. Tarkkuus vaihtelee paljon, koska suojakuoret, autotelineet, kannettavat tietokoneet, kaiuttimet ja muu elektroniikka voivat häiritä mittausta.

### Lähestymisanturi

Lähestymisanturi tunnistaa, milloin jokin on lähellä näyttöä, yleensä kasvosi puhelun aikana. Puhelin sammuttaa näytön ja estää posken tahattomat kosketukset.

Vanhemmissa puhelimissa on yleensä pieni fyysinen anturi kuulokekaiuttimen lähellä. Uudemmissa malleissa lähestyminen voidaan tunnistaa virtuaalisesti ohjelmiston sekä ääni-, näyttö- tai ympäristön valoisuustietojen avulla. Suuntaus on todellinen, mutta se tekee vianetsinnästä sekavampaa, koska toiminta ei aina vastaa yhtä diagnostiikkasovelluksessa näkyvää anturia.

### Ympäristön valoisuuden anturi

Ympäristön valoisuuden anturi mittaa ympäröivää kirkkautta lukseina ja syöttää tiedon mukautuvalle kirkkaudelle. Se sijaitsee yleensä etukameran lähellä, mutta joissakin uusissa puhelimissa se on näytön alla.

Valoisassa toimistossa lukema voi olla muutamia satoja lukseja. Suorassa auringonvalossa se voi ylittää 10 000 luksia. Älä takerru tarkkaan arvoon. Olennaista on, muuttuuko lukema, kun peität puhelimen yläosan tai siirryt kirkkaampaan paikkaan.

### Barometri

Barometri mittaa ilmanpainetta, yleensä hehtopascaleina. Puhelin voi käyttää sitä nopeampaan korkeusarvioon ja sijainnin tarkentamiseen. Anturi on tavallinen monissa keskihintaisissa ja lippulaivapuhelimissa, mutta sitä ei voi pitää itsestäänselvyytenä edullisissa malleissa.

### Sormenjälkitunnistin

Sormenjälkitunnistin on anturi, vaikka Androidin tavallinen anturiluettelo ei näyttäisi sitä. Se voi olla optinen lasin alla, ultraäänellä toimiva näytön alla tai kapasitiivinen puhelimen sivussa tai takana.

### Sykesensori

Erilliset sykesensorit ovat nykyisissä puhelimissa harvinaisia. Samsung käytti niitä joissakin vanhemmissa Galaxy S- ja Note-malleissa, mutta ominaisuus siirtyi pääosin älykelloihin. On aivan tavallista, ettei nykyinen puhelin ilmoita sykesensoria.

## Anturit, joita et ehkä huomaa

Askelmittari ja askelilmaisin voivat näkyä erillisinä antureina. Android määrittelee sekä `TYPE_STEP_COUNTER`- että `TYPE_STEP_DETECTOR`-anturityypin. Joissakin puhelimissa niitä hoitaa vähän virtaa käyttävä laitteisto. Toiset johtavat askeleet kiihtyvyysanturin tiedoista.

Rotation vector on yleensä yhdistelmäanturi. Se yhdistää liike- ja suuntatietoja arvioidakseen puhelimen 3D-asennon. Se voi näkyä diagnostiikassa, vaikka laitteessa ei ole fyysistä "rotation vector" -nimistä sirua.

Gravity ja linear acceleration ovat myös johdettuja lukemia. Gravity erottaa painovoiman vaikutuksen. Linear acceleration poistaa painovoiman, jotta sovellukset voivat keskittyä varsinaiseen liikkeeseen.

Significant motion on vähän virtaa käyttävä laukaiseva anturi, joka herättää puhelimen merkittävän liikkeen jälkeen. Nosta herättääksesi -toiminto ja taustalla tapahtuva liikkeen tunnistus voivat riippua tällaisesta anturikäyttäytymisestä.

Taittuvissa puhelimissa on vielä yksi erikoisuus: hinge angle eli saranakulma. Androidissa on saranakulman anturityyppi laitteille, jotka ilmoittavat taittokohdan asennon sovelluksille. Tavallisessa suorakaiteen muotoisessa puhelimessa sitä ei ole.

## Laitteistoanturit ja ohjelmistoanturit eivät ole sama asia

Android jakaa anturit fyysisiin laitteistoantureihin ja ohjelmiston muodostamiin antureihin. Kiihtyvyysanturi ja gyroskooppi ovat laitteistoantureita. Gravity, linear acceleration ja rotation vector voidaan laskea yhden tai usean laitteistoanturin tiedoista.

Ero vaikuttaa virrankulutukseen. Vähän virtaa käyttävä erillinen askelmittari voi seurata askelia koko päivän pääsuorittimen nukkuessa. Ohjelmistolla toteutettu askelmittari joutuu tekemään enemmän työtä ja voi kuluttaa enemmän akkua.

Anturisovellus voi näyttää valmistajan nimen, kuten Bosch, STMicroelectronics, TDK InvenSense, AKM tai Sensortek. Se viittaa yleensä todelliseen laitteistokomponenttiin. Yleinen Android- tai AOSP-tyylinen nimi kertoo usein yhdistelmä- tai ohjelmistoanturista.

Täysin varmaa sääntöä ei ole. OEM-valmistajat voivat tuoda näkyviin omia antureitaan, piilottaa laitteistoa järjestelmäpalvelujen taakse tai korvata fyysisen osan ohjelmistoratkaisulla.

## Milloin anturiluettelolla on merkitystä

Useimmat kiinnostuvat antureista vasta, kun jokin rikkoutuu. Näyttö ei kierry. Automaattinen kirkkaus hyppii. Kompassisovellus osoittaa pohjoisen sohvaan. AR-sovellus ei käynnisty, koska puhelimesta puuttuu gyroskooppi.

Anturisovellus auttaa erottamaan kolme tilannetta:

- Anturi on olemassa ja sen lukemat muuttuvat normaalisti. Ongelma liittyy todennäköisesti sovelluksen asetuksiin, kalibrointiin, käyttöoikeuksiin tai ohjelmistoon.
- Anturi on olemassa, mutta lukemat ovat jäätyneet tai järjettömiä. Se voi viitata anturivikaan, laiteohjelmiston ongelmaan tai kalibrointivirheeseen.
- Anturia ei näy lainkaan. Puhelimessa ei ehkä ole sitä, eikä mikään asetus lisää sitä myöhemmin.

Puuttuvaa gyroskooppia ei voi asentaa ohjelmistolla. Ulkoisia Bluetooth-antureita on olemassa liikuntaan ja erikoiskäyttöön, mutta niistä ei tule osa puhelimen sisäistä Android-anturikehystä.

On myös normaalia, että sama anturi näkyy useita kertoja. Puhelin voi ilmoittaa herättävän ja ei-herättävän version, kalibroidun ja kalibroimattoman version tai valmistajakohtaisen kopion Androidin vakioanturityypin rinnalla.
