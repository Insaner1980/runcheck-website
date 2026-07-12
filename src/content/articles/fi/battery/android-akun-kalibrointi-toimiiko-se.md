---
title: "Android-akun kalibrointi: toimiiko se?"
description: "Android-akun kalibrointi ei palauta menetettyä kapasiteettia, mutta se voi joskus korjata väärän varaustasolukeman. Lue, milloin siitä on hyötyä ja milloin se on ajanhukkaa."
listSummary: "akku, kunto ja diagnostiikka"
hub: "battery"
sourceNumber: 15
order: 5
subgroup: "Akun kunto"
tags: ["akku","kunto","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Suurin osa akun kalibrointiohjeista on jäänne vanhemmasta akkutekniikasta ja keskustelupalstojen perimätietoa. Nykyaikaisessa Android-puhelimessa kalibrointi ei paranna akunkestoa. Se ei korjaa kulunutta akkua eikä muuta 82 prosentin akun kuntoa takaisin 95 prosenttiin.

Joskus se voi kuitenkin korjata väärin näkyvän varaustason.

## Mitä kalibrointi voi korjata ja mitä ei

Tilapalkin prosenttiluku on arvio. Puhelimen varaustilan mittauspiiri seuraa virtaa, jännitettä, lämpötilaa ja latauskäyttäytymistä ja muuntaa tiedot varaustasoksi.

Arvio voi ajautua epätarkaksi. Puhelin saattaa pysyä tunnin 12 prosentissa, sammua 18 prosentissa tai hypätä uudelleenkäynnistyksen jälkeen 40 prosentista 9 prosenttiin. Tällöin mittari on voinut menettää käyttökelpoisen varaustason ylä- ja alapään viitepisteet.

Kalibrointi tarkoittaa, että mittari saa mahdollisuuden oppia nämä rajat uudelleen. Se ei ole kemiallinen korjaus. Kenno ei saa lisää kapasiteettia. Puhelin vain arvioi jo olemassa olevan varauksen paremmin.

Ero on olennainen. Jos akku on fyysisesti kulunut, kalibrointi on väärä työkalu.

## batterystats.bin-myytti

Vanhan Android-myytin mukaan akun voi kalibroida poistamalla `batterystats.bin`-tiedoston. Siihen tarvittiin yleensä root-oikeudet, mukautettu palautusympäristö tai niin sanottu kalibrointisovellus.

Tiedosto ei ole akun varaustilan mittari. Se sisältää akun käytön kirjanpitotietoja, joista Android rakentaa **Asetukset > Akku > Akun käyttö** -näkymän. Tiedoston tyhjentäminen ei muuta nykyistä varaustasoa, korjaa akkua tai pidennä käyttöaikaa.

Myytti säilyi, koska toimenpide näyttää tekniseltä. Piilotettu järjestelmätiedosto, root-oikeudet, uudelleenkäynnistys ja uusi akkukaavio antavat vaikutelman syvällisestä muutoksesta. Todellisuudessa akun toiminta ei muuttunut.

Useimmat Play Kaupan sovellukset, jotka lupaavat kalibroida akun, tekevät jommankumman kahdesta asiasta. Ne joko opastavat yhden manuaalisen täyden syklin läpi tai näyttävät animaation ja mainoksia. Ilman etuoikeutettua pääsyä akun mittauspiiriin ne eivät voi kalibroida laitteistoa uudelleen.

## Milloin yhtä täyttä sykliä kannattaa kokeilla

Yksi hallittu täysi sykli voi auttaa, jos varaustasolukema on selvästi väärä.

Kokeile sitä vain tällaisissa tilanteissa:

- Puhelin sammuu 15-30 prosentissa kevyessäkin käytössä.
- Varaustaso putoaa suurina hyppyinä.
- Puhelin pysyy pitkään samassa prosentissa ja vaihtaa sitten lukemaa äkillisesti.
- Akku on vaihdettu hiljattain, mutta puhelin käyttäytyy edelleen kuin vanha akku olisi paikallaan.
- Suuri järjestelmäpäivitys muutti varaustason näyttämistä selvästi.

Yksi sykli riittää kokeeksi. Lataa puhelin 100 prosenttiin, käytä sitä normaalisti hyvin vähäiseen varaustasoon tai siihen asti, että se sammuu itsestään, ja lataa sitten täyteen ilman jatkuvaa irrottelua. Tästä ei pidä tehdä viikoittaista tapaa.

Turvallisempi ja vähemmän raju versio sopii tilanteeseen, jossa puhelin toimii vielä vakaasti: lataa 100 prosenttiin, käytä varaustaso yksinumeroiseksi ja lataa takaisin täyteen. Puhelinta ei tarvitse pakottaa sammumaan toistuvasti.

## Milloin kalibrointi on väärä ratkaisu

Kalibrointi ei korjaa todellista virrankulutusta.

Jos sovellus pitää puhelimen hereillä herätelukolla, kalibrointi ei pysäytä sitä. Jos olet koko päivän heikossa mobiiliverkossa, se ei vähennä modeemin virrankulutusta. Jos puhelin kuumenee pelaamisen, navigoinnin tai viallisen päivityksen vuoksi, kalibrointi vie huomion pois oikeasta ongelmasta.

Se ei myöskään korjaa akun kulumista. Jos näyttöaika oli aiemmin seitsemän tuntia ja on nyt samalla käytöllä kolme, akku on menettänyt kapasiteettia. Mittari voi olla aivan oikeassa. Akku on vain pienempi kuin ennen.

Jos puhelin sammuu odottamatta vielä yhden täyden syklin jälkeen, se on huono merkki. Kuluneen litiumionikennon sisäinen vastus voi olla korkea, jolloin jännite romahtaa puhelimen pyytäessä paljon virtaa. Varausta voi olla vielä tallessa, mutta puhelin ei pysty käyttämään sitä kuormituksessa. Kyse on laitteiston kulumisesta, ei prosenttiluvun ongelmasta.

## Mitä nykyinen Android tekee jo itse

Nykyaikaiset puhelimet päivittävät akun varaustila-arviota jatkuvasti. Ne oppivat tavallisesta lataamisesta ja purkautumisesta. Niissä on myös pitkän aikavälin rasitusta vähentäviä ominaisuuksia, kuten mukautuva lataus, latauksen optimointi ja tuetuissa laitteissa 80 prosentin latausraja.

Pixel on hyvä esimerkki. Googlen oma ohje sanoo suoraan, ettei puhelimelle tarvitse opettaa akun kapasiteettia purkamalla sitä täydestä nollaan tai lataamalla nollasta täyteen. Se on oikea neuvo normaaliin käyttöön.

Pixel 6a ja uudemmat tukevat latauksen optimointia, ja tuetuissa malleissa latauksen voi rajoittaa 80 prosenttiin. Pixel 8a ja uudemmat voivat näyttää Akun kunto- ja Akun kapasiteetti -tiedot asetuksissa. Pixel 6a:ssa ja uudemmissa käytettävä Akunkestoapu säätää akun suurinta jännitettä vaiheittain akun vanhetessa.

Mikään näistä ei vaadi puhelimen purkamista nollaan joka kuukausi. Ei oikeasti.

## Miksi vanha ohje ei kuole

Nikkelikadmiumakuissa oli todellinen muisti-ilmiö. Jos niiden kapasiteetista käytettiin jatkuvasti vain osa, ne saattoivat alkaa käyttäytyä kuin käytettävissä olisi vain tämä pienempi alue. Täydet purkaussyklit olivat kyseiselle akkukemialle järkeviä.

Litiumioniakut ovat erilaisia. Ne pitävät matalista sykleistä, kohtuullisesta lämpötilasta ja siitä, etteivät ne vietä pitkään aikaa aivan täydessä varaustilassa. Syväpurkaus rasittaa niitä. Myös kuuman puhelimen jättäminen tuntikausiksi 100 prosenttiin lisää kulumista.

Siksi vanhaa kalibrointirutiinia pitää käyttää varoen. Yksi täysi sykli sekavan mittarin testaamiseksi on tavallisesti ongelmaton. Toistuvat syväpurkaukset vain siksi, että sovellus käskee tekemään niin, ovat haitallista huoltoa tieteen näköisessä paketissa.

## Turvallinen tapa kokeilla yhtä sykliä

Tee tämä vain, jos varaustasolukema on selvästi väärä.

1. Varmuuskopioi tärkeät tiedot ensin, jos puhelin on sammunut liian aikaisin.
2. Lataa akku 100 prosenttiin ja pidä puhelin vielä hetki laturissa sen jälkeen, kun se näyttää täyttä.
3. Käytä puhelinta normaalisti, kunnes varaustaso on matala. Älä kuumenna sitä tarkoituksella peleillä tai suorituskykytesteillä.
4. Anna puhelimen sammua vain, jos juuri tätä oiretta olet testaamassa.
5. Lataa akku täyteen irrottamatta ja kytkemättä laturia jatkuvasti uudelleen.
6. Seuraa seuraavia tavallisia lataussyklejä.

Jos prosenttilukema tasaantuu, hyvä. Jos sammuminen, kuumeneminen tai suuret hypyt jatkuvat, lopeta kalibrointikokeet ja tutki akkua tai ohjelmistoa.

## Yleisiä kysymyksiä

### Kuinka usein Android-akku pitäisi kalibroida?

Lähes ei koskaan. Jos prosenttilukema näyttää normaalilta, jätä se rauhaan. Säännöllinen kalibrointi ei ole huoltotoimenpide.

### Toimivatko akun kalibrointisovellukset?

Pelkkään ohjelmistoon perustuva kalibrointisovellus ei korjaa akun varaustilan mittauspiiriä. Parhaimmillaan se opastaa manuaalisen syklin läpi. Pahimmillaan se kuluttaa akkua ja esittää tekevänsä jotain hyödyllistä.

### Parantaako kalibrointi akun kuntoprosenttia?

Se voi muuttaa ilmoitettua lukua hieman, jos aikaisempi arvio oli väärä. Se ei lisää akun todellista kemiallista kapasiteettia.

### Onko akun purkaminen nollaan vaarallista?

Yksi tavallinen puhelimen sammuminen ei yleensä aiheuta vahinkoa, koska akun suojapiiri jättää käyttöön turvallisuusvaran. Toistuva syväpurkaus on silti huono asia litiumioniakun käyttöiälle. Tee se vain perustellusta syystä.
