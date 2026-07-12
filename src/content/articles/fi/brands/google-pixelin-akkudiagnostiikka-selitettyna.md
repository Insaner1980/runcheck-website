---
title: "Google Pixelin akkudiagnostiikka selitettynä"
description: "Mistä tiedät, onko Pixelin akku oikeasti kulunut vai kärsiikö puhelin vain huonosta sovelluksesta tai kuumasta päivästä? Uudemmissa Pixel-puhelimissa Google tarjoaa vihdoin kunnollisia työkaluja. Vanhemmissa vastaus on edelleen hankalampi kuin sen pitäisi olla."
listSummary: "akku, kunto ja diagnostiikka"
hub: "brands"
sourceNumber: 154
order: 2
tags: ["akku","kunto","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Myös ajankohdalla on merkitystä. Android 17 on jo saatavilla useimmissa tuetuissa Pixel-laitteissa, ja muut Android-valmistajat tuovat omat Android 17 -pohjaiset päivityksensä myöhemmin. Tämä ei tarkoita, että jokainen Pixel saisi yhtäkkiä saman akkunäytön. Googlen akkudiagnostiikka riippuu edelleen mallista.

## Akun kunto ja kapasiteetti

Päänäyttö löytyy täältä:

Asetukset > Akku > Akun kunto

Tuetuissa puhelimissa tila näkyy arvona Normaali, Heikentynyt tai Ei käytettävissä. Näytössä voi näkyä myös Akun kapasiteetti, joka on arvio siitä, kuinka suuren varauksen akku pystyy säilyttämään uuteen akkuun verrattuna.

Tärkeä rajoitus: Googlen mukaan Akun kunto on käytettävissä vain Pixel 8a:ssa ja sitä uudemmissa malleissa. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 ja Pixel 8 Pro eivät näytä akun kuntotilaa, vaikka osa niistä saa edelleen uusia Android-versioita.

Heikentynyt tarkoittaa, että arvioitu jäljellä oleva kapasiteetti on alle 80 %. Google suosittelee tällöin akun vaihdon harkitsemista. Raja ei ole mielivaltainen. Alle 80 %:ssa käyttöaika lyhenee niin paljon, että moni huomaa sen tavallisessa käytössä, etenkin kylmässä tai kameran, pelien, navigoinnin ja hotspotin kuormituksessa.

Pidä kapasiteettilukua arviona, älä laboratoriomittauksena. Googlekin muotoilee asian varovasti, koska puhelin lukee varaustason mittauspiirin tietoja ja mallintaa tuloksen. Jos puhelin näyttää 92 %, älä jää pohtimaan, onko todellinen luku 91,4 % vai 93 %. Kehityssuunta on tärkeämpi.

## Lataussyklien määrä

Lataussyklien määrä ei tarkoita sitä, kuinka monta kertaa laturi on kytketty. Yksi täysi 100 %:n purku ja uudelleenlataus vastaa yhtä sykliä. Jos käytät kahtena päivänä 50 % ja lataat molempina päivinä, siitäkin kertyy yhteensä yksi sykli.

Pixel 8a:ssa ja sitä uudemmissa malleissa lataussyklien määrä löytyy kohdasta:

Asetukset > Tietoja puhelimesta > Akun tiedot

Samalla sivulla voivat näkyä myös akun valmistuspäivä ja ensimmäisen käyttöönottopäivän päivämäärä.

Tämän artikkelin vanhassa versiossa sanottiin, että lataussyklien määrä näkyy Pixel 6a:ssa ja sitä uudemmissa malleissa. Googlen nykyinen tukisivu ei sano näin. Se antaa lataussyklien polun Pixel 8a:lle ja sitä uudemmille malleille, joten artikkeli on korjattu.

Googlen vaihto-ohjeistus jakautuu nyt sukupolvittain:

- Pixel 3:sta Pixel 8 Prohon sekä Pixel Foldin pitäisi säilyttää noin 80 % kapasiteetistaan noin 800 lataussyklin ajan.
- Pixel 8a:n ja sitä uudempien mallien pitäisi säilyttää noin 80 % kapasiteetistaan noin 1 000 lataussyklin ajan.

Pixel 9 Pro, jolla on 650 sykliä, ei siis automaattisesti ole ongelmissa. Pixel 7 Pro, jolla on 850 sykliä ja selvästi lyhentynyt käyttöaika, on parempi ehdokas akun vaihtoon.

## Akunkestoapu

Akunkestoapu eli Battery health assistance on Googlen pitkäaikaisen kulumisen hallintaominaisuus. Se toimii Pixel 6a:ssa ja sitä uudemmissa malleissa Pixel Tabletia lukuun ottamatta.

Ominaisuus säätää akun enimmäisjännitettä vaiheittain. Se aloittaa 200 lataussyklin kohdalla ja jatkaa muutoksia vähitellen 1 000 sykliin asti. Tavoitteena on hidastaa kemiallista vanhenemista ja pitää akku vakaampana puhelimen käyttöiän ajan.

Ratkaisulla on kääntöpuoli. Puhelimen vanhetessa käyttöaika voi hieman lyhentyä tai lataus hidastua, koska ohjelmisto vähentää tarkoituksella akun rasitusta. Se ei ole virhe. Se on ominaisuuden toimintaperiaate.

Mallien välillä on yksi tärkeä ero:

- Pixel 6a:sta Pixel 9 Pro Foldiin Akunkestoavun voi ottaa käyttöön tai poistaa käytöstä.
- Pixel 9a:ssa ja sitä uudemmissa malleissa se on oletuksena käytössä, eikä sitä Googlen mukaan voi poistaa käytöstä.

Jälkimmäinen ratkaisu ärsytti ymmärrettävästi joitakin käyttäjiä. Minusta ominaisuus on akun käyttöiän kannalta perusteltavissa, mutta Googlen pitäisi kertoa käyttöliittymässä selvemmin, mitä tapahtuu ja miksi. Ihmiset huomaavat, kun puhelimen käyttöaika muuttuu kuukausien omistamisen jälkeen, vaikka tekninen peruste olisi järkevä.

## Latauksen optimointi

Pixelin latausasetukset löytyvät tuetuissa ohjelmistoversioissa täältä:

Asetukset > Akku > Akun kunto > Latauksen optimointi

Päävaihtoehtoja on kaksi.

Mukautuva lataus opettelee lataustottumukset ja yrittää saada akun 100 %:iin vähän ennen laturin irrottamista. Pixel 4:ssä toiminta edellyttää yölatausta ja sopivasti asetettua herätystä. Pixel 4a:ssa ja sitä uudemmissa malleissa ominaisuus oppii sen sijaan latauskäyttäytymisestä. Googlen mukaan oppimiseen tarvitaan noin 14 päivää, joten sitä ei kannata arvioida yhden yön jälkeen.

Rajoita 80 %:iin pitää latauksen useimmiten enintään 80 %:ssa. Ominaisuus on käytettävissä Pixel 6a:ssa ja sitä uudemmissa malleissa. Akku pääsee helpommalla, mutta päivittäisestä kapasiteetista luovutaan 20 %.

Yksi toiminta näyttää vialta, vaikka ei ole sitä. Vaikka Rajoita 80 %:iin olisi käytössä, Pixelin täytyy latautua täyteen joka 10. lataussyklillä, jotta kapasiteettiarviot pysyvät tarkkoina. Google kehottaa jättämään puhelimen laturiin vähintään 30 minuutiksi sen jälkeen, kun varaus on saavuttanut 100 %, jotta kalibrointi valmistuu.

Useimmille Mukautuva lataus on parempi oletus. Käytä 80 %:n rajaa, jos päivän lopussa on tavallisesti paljon virtaa jäljellä, työskentelet laturin lähellä tai arvostat akun pitkäaikaista kuntoa enemmän kuin suurinta mahdollista päivittäistä käyttöaikaa.

## Akun diagnostiikka sekä Laitteen kunto ja tuki

Pixelissä on nyt kaksi vianmäärityksen tasoa.

Vanhempi polku on:

Asetukset > Akku > Akun diagnostiikka

Googlen mukaan Akun diagnostiikka on käytettävissä Pixel 6:ssa ja sitä uudemmissa malleissa, myös Pixel Foldissa. Työkalu tarkistaa akun toimintaa ja auttaa arvioimaan, onko ongelmana lyhyt akunkesto, latauskäyttäytyminen vai akun vaihtotarve.

Uudempi koontinäyttö on:

Asetukset > Laitteen kunto ja tuki

Googlen mukaan Laitteen kunto ja tuki on käytettävissä Pixel 6:ssa ja sitä uudemmissa malleissa, myös Foldissa. Se kokoaa yhteen laitteen tilan, akun kunnon, puhelimen lämpötilan, latausdiagnostiikan, kosketusdiagnostiikan, takuun, tuen ja korjausvaihtoehdot. Pixel 9:ssä ja sitä uudemmissa malleissa mukana on myös englanninkielinen keskustelutuki.

Tämä on selkeämpi kuin vanha jako piilotettujen vianmääritysnäyttöjen ja hajallaan olevien asetusten välillä. Se ei edelleenkään tuo akun kuntoprosenttia vanhoihin Pixel-puhelimiin, mutta tarjoaa paremman ensimmäisen tarkistuspisteen, kun puhelin tuntuu toimivan väärin.

## Lämpötiladiagnostiikka

Pixel-puhelimet käyvät lämpiminä useammin kuin moni toivoisi. Etenkin Tensor-mallit voivat kuumentua kameran, 5G:n, navigoinnin, varmuuskopiosta palauttamisen, pelaamisen, hotspotin ja Android Auton käytössä.

Pixel 6a:ssa ja sitä uudemmissa malleissa puhelimen nykyisen lämpötilatilan voi tarkistaa täältä:

Asetukset > Akku > Akun diagnostiikka > Puhelin on erittäin lämmin

Google ilmoittaa tilaksi Kylmä, Normaali, Lämmin tai Kohonnut. Kohonnut ei tarkoita vain sitä, että puhelin tuntuu kädessä lämpimältä. Järjestelmä voi pienentää näytön kirkkautta, verkon nopeutta tai suorituskykyä taikka keskeyttää ominaisuuksia jäähdyttääkseen laitetta.

Kuumuudella on merkitystä, koska se nopeuttaa akun vanhenemista. Jos Pixel latautuu toistuvasti kuumana, on auton pidikkeessä suorassa auringossa tai käyttää joka päivä navigointia ja pikalatausta samanaikaisesti, akun kunto heikkenee nopeammin.

## Vanha Androidin testikoodi

Numerovalintakoodi `*#*#4636#*#*` toimii edelleen monissa Pixel-puhelimissa. Se avaa Testing-valikon, jossa näkyy akun perustietoja, kuten tila, varaustaso, kuntotila, lämpötila, jännite ja akkutekniikka.

Tämän valikon health-kenttä ei ole sama asia kuin akun kuntoprosentti. Good tarkoittaa, ettei puhelin ole havainnut vakavaa akkuvikaa. Akku voi näyttää arvon Good, vaikka se olisi menettänyt paljon kapasiteettia.

Käytä koodia nopeaan lämpötilan ja jännitteen tarkistamiseen, älä lopulliseen akun vaihtopäätökseen.

## Pixel 6a:n Battery Performance Program

Pixel 6a ansaitsee oman huomionsa, koska Google käynnisti ohjelman nimeltä Battery Performance Program sitä koskeville laitteille.

8. heinäkuuta 2025 alkaen ohjelman piiriin kuuluvat Pixel 6a -laitteet saivat pakollisen Android 16 -päivityksen mahdollisen akun ylikuumenemisriskin vuoksi. Akunhallinnan muutokset aktivoituvat vain, jos laite kuuluu ohjelman piiriin ja akulla on takanaan 400 lataussykliä.

Jos omistat Pixel 6a:n ja kapasiteetti tai latausteho heikkeni päivityksen jälkeen, älä oleta ensimmäisenä tavallista vanhenemista. Tarkista Googlen kelpoisuustyökalusta, kuuluuko laite ohjelmaan. Ehdot täyttävä omistaja voi alueesta ja kelpoisuudesta riippuen saada tukivaihtoehdoksi maksuttoman korjauksen, rahakorvauksen tai kauppahyvityksen.

## Mitä runcheck voi lisätä

Pixel-puhelimet ilmoittavat yleensä akun virtatiedot johdonmukaisemmin kuin monet muut Android-laitteet, joten kolmannen osapuolen työkalujen lähtökohta on parempi. Kaikkia arvoja ei silti taata.

runcheck lukee puhelimen Androidille antamat akkutiedot ja liittää niihin luotettavuusluokituksen. Sillä on merkitystä, koska irrallinen luku voi johtaa harhaan. Vakaista virtalukemista laskettu purkautumisnopeus on hyödyllinen. Puuttuvista tai epävakaista virtalukemista johdettua nopeutta pitää käsitellä arviona.

Sovellus seuraa akkutietojen rinnalla myös lämpötilaa, mikä on Pixel-puhelimissa tärkeää. Paperilla hyvältä näyttävä akku voi vanheta nopeasti, jos puhelin viettää liikaa aikaa kuumana.

## Vanhempien Pixel-puhelinten käytännön tilanne

Suurin virhe on odottaa Android 17:n lisäävän jokaisen akkunäytön jokaiseen tuettuun Pixel-puhelimeen. Niin ei tapahdu. Android 17 tuli ensin tuettuihin Pixel-laitteisiin, mutta Googlen akun kuntosivu on yhä rajattu tiettyihin malleihin.

Pixel 7 ei näytä akun kuntoprosenttia asetuksissa. Pixel 8a:ssa ja sitä uudemmissa malleissa saat hyödylliset tiedot: Akun kunnon, Akun kapasiteetin ja lataussyklien määrän Googlen dokumentoimista poluista.

Akun vaihdon 80 %:n raja on hyvä nyrkkisääntö, mutta se ei ole ainoa merkki. Yli 80 %:n kunnossa oleva puhelin voi silti kestää surkeasti kuumuuden, heikon signaalin, huonon sovelluksen tai tuoreen päivityksen vuoksi. Alle 80 %:n puhelin voi puolestaan selvitä kevyessä käytössä. Käytä lukua todisteena, älä käskynä.

Sama koskee 80 %:n latausrajaa. Jos Pixel latautuu välillä 100 %:iin, se voi tehdä joka 10. lataussykliin kuuluvan kalibrointilatauksen. Jätä puhelin noin 30 minuutiksi laturiin 100 %:n saavuttamisen jälkeen, jos haluat kalibroinnin valmistuvan.
