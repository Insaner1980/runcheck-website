---
title: "Näin testaat puhelimen latausportin"
description: "Metakuvaus: Opi testaamaan Android-puhelimen latausportti tarkistamalla kaapeli, puhdistamalla portti turvallisesti, seuraamalla latausvirtaa ja käyttämällä sisäänrakennettuja diagnostiikkatyökaluja."
listSummary: "lataaminen, akku ja android"
hub: "hardware"
sourceNumber: 108
order: 5
tags: ["lataaminen","akku","android","opas","laitteisto"]
locale: "fi"
draft: false
---
---

Pidät kaapelia oudossa kulmassa, latauskuvake vilkkuu ja puhelin latautuu vain, jos se pysyy täysin paikallaan. Tilanne tuntuu helposti rikkoutuneelta latausportilta, mutta älä aloita siitä oletuksesta.

Aloita tylsistä tarkistuksista. Ne paljastavat useampia vikoja kuin moni odottaa.

## Sulje ensin pois kaapeli ja laturi

Kokeile toista USB-C- tai Micro-USB-kaapelia samalla laturilla. Kokeile sitten toista laturia alkuperäisellä kaapelilla. Testaa mahdollisuuksien mukaan molemmat myös toisella puhelimella tai tabletilla.

Kaapeli voi vaurioitua sisältä kauan ennen kuin siinä näkyy mitään ulospäin. Yksi data- tai virtakosketin voi pettää ja pudottaa pikalatauksen hitaaksi valumiseksi. Kaapelin kuori voi näyttää täysin ehjältä. Ärsyttävää, mutta tavallista.

Jos sama kaapeli ja laturi lataavat toista laitetta normaalisti, puhelimen portti muuttuu todennäköisemmäksi syylliseksi. Jos toinen kaapeli korjaa ongelman heti, portissa ei luultavasti ollut vikaa.

## Tarkista portti

Sammuta puhelin ja valaise latausporttia suoraan taskulampulla. Etsi portin takaseinää vasten painunutta nukkaa. Taskunöyhtä kertyy hitaasti, pakkautuu latauspistokkeen mukana tiiviiksi ja estää lopulta liitintä menemästä kokonaan paikalleen.

Tarkista myös istuvuus. Kunnossa olevan USB-C-pistokkeen pitäisi pysyä portissa napakasti. Sen ei pitäisi pudota pois, heilua voimakkaasti tai katkaista yhteyttä, kun liikutat puhelinta hieman. Pieni väljyys on normaalia etenkin vanhassa puhelimessa. Katkeileva yhteys ei ole.

Etsi koskettimista vihreää, valkoista tai tummaa jäämää. Se viittaa korroosioon tai kosteuteen. Pölyn puhdistaminen auttaa nukkaan, mutta ei korjaa syöpynyttä kosketinta.

## Puhdista varovasti

Jos näet pölyä tai nukkaa, pidä portti alaspäin ja kokeile muutamaa lyhyttä puhallusta käsikäyttöisellä ilmapuhaltimella tai paineilmapullolla. Älä puhalla läheltä täydellä voimalla. Tarkoitus on irrottaa roskaa, ei työntää sitä syvemmälle.

Käytä pakkautuneeseen nukkaan kuivaa ja pehmeää elektroniikkaharjaa tai puhdasta kuivaa hammasharjaa. Vältä metallityökaluja. Metallipiikki voi vääntää kosketinta tai aiheuttaa oikosulun. Puista hammastikkuakaan ei kannata käyttää, ellei parempaa vaihtoehtoa ole, sillä se voi haljeta ja jättää porttiin uuden ongelman.

Älä kaada puhelimeen alkoholia tai kontaktinpuhdistusainetta. Se, että huoltoteknikko käyttää nestettä hallituissa olosuhteissa, ei tee siitä turvallista kotikorjausta.

Liitä laturi puhdistuksen jälkeen uudelleen. Jos pistoke napsahtaa nyt selvästi napakammin paikalleen, pääongelma oli todennäköisesti nukka.

## Tarkista latausvirta

Android antaa tuetuissa laitteissa akun virtalukeman `BatteryManager`-rajapinnan kautta. Ampere ja vastaavat sovellukset voivat näyttää sen, mutta käytä lukemaa vertailuun, älä laboratoriomittauksena.

Avaa Ampere laturi irrotettuna ja merkitse purkausvirta muistiin. Liitä laturi, odota noin 10 sekuntia ja seuraa, mihin arvo asettuu. Akun varaustaso, lämpötila, näytön kirkkaus ja puhelimen latauslogiikka vaikuttavat kaikki lukemaan.

2 A:n laturi ei aina näytä näytöllä 2 000 mA:n lukemaa. Kun akku on lähes täynnä, puhelin hidastaa latausta tarkoituksella. Jos tunnetusti toimiva verkkolaturi ja kaapeli näyttävät silti vain esimerkiksi 200 tai 300 mA ja arvo hyppii aina, kun kosketat liitintä, portti ei muodosta vakaata yhteyttä.

Samsung-puhelimissa on toinenkin tapa. Avaa Samsung Members ja valitse Pyydä apua > Näytä testit. Suorita kaapelilatauksen tai USB-yhteyden testi, jos ne ovat mallissasi käytettävissä. Vanhemmissa Samsung Members -versioissa osion nimi ja sijainti voivat poiketa.

Samsungin koodi `*#0*#` voi myös avata laitteistotestivalikon monissa Galaxy-puhelimissa. Käytä Samsungin omaa Puhelin-sovellusta, älä kolmannen osapuolen numeronvalitsinta. Uusissa One UI -versioissa, operaattorimalleissa tai suojausrajoitetuissa puhelimissa koodi ei välttämättä tee mitään. Se on nykyään tavallista.

Android 17 ei tuonut kaikille Android-puhelimille yhteistä latausporttitestiä. Pixel-, Samsung- ja Xiaomi-puhelimet käyttävät edelleen eri diagnostiikkareittejä.

## Kokeile vikasietotilaa

Jos portti on puhdas, kaapeli istuu hyvin ja lataus käyttäytyy silti oudosti, käynnistä puhelin vikasietotilaan. Vikasietotila poistaa kolmannen osapuolen sovellukset väliaikaisesti käytöstä, joten sillä voi nopeasti havaita ohjelmiston aiheuttaman häiriön.

Useimmissa Android-puhelimissa avaa virtavalikko ja paina Virta pois -valintaa pitkään, kunnes vikasietotilan kehote tulee näkyviin. Monissa Samsung-puhelimissa voit käynnistää laitteen uudelleen ja pitää äänenvoimakkuuden vähennyspainiketta painettuna käynnistyksen aikana.

Jos lataus toimii vikasietotilassa normaalisti, tarkista äskettäin asennetut akku-, automaatio-, tietoturva- ja latausanimaatiosovellukset. Jokin niistä voi häiritä latauksen toimintaa tai ilmoituksia.

## Milloin portti tarvitsee korjausta

Portti on todennäköisesti vaurioitunut, jos kaikki seuraavat pitävät paikkansa: laturi ja kaapeli toimivat toisessa laitteessa, portti on puhdas, pistoke istuu edelleen löysästi ja virtalukemat pysyvät pieninä tai epävakaina.

Korjauksen vaikeus riippuu puhelimesta. Monissa Samsung Galaxy-, Xiaomi- ja Motorola-puhelimissa sekä edullisissa Android-malleissa USB-portti on erillisellä alapiirilevyllä. Sen vaihtaminen on yleensä rutiinikorjaus. Joissakin puhelimissa portti on juotettu emolevylle, jolloin korjaus vaatii enemmän osaamista ja maksaa enemmän piirilevytason työn vuoksi.

Langaton lataus voi antaa lisäaikaa, jos puhelin tukee sitä. Se ohittaa USB-portin kokonaan, mutta on yleensä hitaampi ja hankalampi kuin langallinen lataus.

Jos lataus on heikentynyt viikkojen ajan, älä odota portin täydellistä hajoamista. runcheck kirjaa latauskäyttäytymistä, virrankulutusta ja virransyötön kehitystä ajan mittaan, joten heikkenevän portin voi huomata ennen kuin akku tyhjenee kokonaan.
