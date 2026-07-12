---
title: "Näin testaat, onko puhelimen laturi hyvä"
description: "Näin tarkistat sovellusten, kaapelivaihtojen, silmämääräisten tarkistusten ja USB-tehomittarin avulla, antaako Android-puhelimen laturi oikean tehon."
listSummary: "lataaminen, akku ja android"
hub: "charging"
sourceNumber: 44
order: 8
tags: ["lataaminen","akku","android","opas","laitteisto"]
locale: "fi"
draft: false
---
Laturi voi sopia liittimeen mutta epäonnistua itse latauksessa. USB-C kertoo vain, että pistoke sopii. Se ei kerro, onnistuivatko virtalähde, kaapeli ja puhelin sopimaan pikalatauksesta.

Android 17 ei muuta tätä perusongelmaa. Androidissa ei edelleenkään ole yhtä yleistä näkymää, joka ilmoittaisi: "Tämä laturi syöttää juuri nyt 23,4 W." Teho on pääteltävä muista tiedoista tai mitattava kunnolla.

## Lue ensin pieni lähtötehomerkintä

Aloita tylsästä osasta ja katso virtalähdettä. Käännä se ympäri ja etsi lähtötehon tiedot. Niissä voi lukea esimerkiksi 5 V / 3 A, 9 V / 2,22 A tai 20 V / 3,25 A. Saat watit kertomalla voltit ampeereilla. 9 V / 2,22 A on noin 20 W. 20 V / 3,25 A on 65 W.

Tavallisessa USB-A-virtalähteessä voi lukea vain 5 V / 1 A tai 5 V / 2 A. Se tarkoittaa 5 W:n tai 10 W:n tehoa, mikä on nykyiselle puhelimelle hidasta. USB-C PD -laturissa on yleensä useita jännitetasoja ja enimmäisteho, esimerkiksi 25 W, 45 W, 65 W tai enemmän.

Jos laturissa ei ole mitään merkintöjä, suhtaudu siihen epäluuloisesti. Tunnettujen valmistajien kunnolliset virtalähteet ilmoittavat lähtötehonsa jossain, vaikka tekstin lukemiseen tarvitsisi taskulampun.

## Tee nopea tarkistus sovelluksella

Android antaa järjestelmän API-rajapintojen kautta tietoja akun virrasta ja muista akun ominaisuuksista, joten sovellukset voivat arvioida akulle päätyvää virtaa. Ampere ja AccuBattery ovat tavallisia vaihtoehtoja nopeaan vertailuun.

Kytke laturi, avaa sovellus ja odota 20-30 sekuntia, että lukema tasaantuu. Pidä näytön kirkkaus matalana, sulje raskaat sovellukset ja tee testi akun varaustason ollessa 20-70 %. Puhelimet hidastavat latausta lähellä ylärajaa, joten testi 94 %:ssa saa hyvänkin laturin näyttämään huonolta.

Tulokseen pitää suhtautua varovasti. Sovelluksen lukema näyttää akun nettovirran, ei pistorasiassa olevan virtalähteen tarkkaa lähtötehoa. Puhelin kuluttaa samalla virtaa, latauselektroniikka hukkaa osan energiasta lämpönä ja eri laitteet raportoivat akun virran eri tavoin. Joissakin puhelimissa lukema voi olla oudosti rajattu, viivästynyt tai muuten melko hyödytön.

Käytä sovelluslukemia vertailuun, älä aukottomana mittaustuloksena. Jos yksi kaapeli näyttää samalla virtalähteellä 400 mA ja toinen 2 400 mA, sait hyödyllistä tietoa. Jos sovellus väittää 30 W:n laturin antavan vain 18 W, se ei vielä tarkoita, että laturi on viallinen.

## Vaihda kaapeli ennen kuin syytät virtalähdettä

Kaapelit vioittuvat usein huomaamatta. Ne siirtävät edelleen virtaa, joten ne vaikuttavat ehjiltä, mutta puhelin putoaa hitaaseen lataustilaan, koska kaapeli ei kanna odotettua virtaa tai neuvottele oikeaa tehoprofiilia.

Testaa tunnetusti toimivalla kaapelilla. Puhelimen mukana tullut kaapeli on hyvä ensimmäinen vaihtoehto. Myös luotettavan lisävarustevalmistajan sertifioitu USB-C-kaapeli sopii. Laatikon pohjalta löytyvä ohut vanha kaapeli ei todista mitään.

Liittimen lähellä olevat vauriot ovat tavallisia. Jos puhelin yhdistyy ja katkaisee yhteyden kaapelia liikutettaessa tai liitin tuntuu löysältä useassa laitteessa, vaihda kaapeli. Sen tutkimiseen ei kannata käyttää toista tuntia.

## Käytä USB-tehomittaria, kun haluat oikeita lukuja

USB-C-liitäntään asetettava tehomittari on selkein testi. Mittari tulee laturin ja puhelimen väliin ja näyttää omalla näytöllään jännitteen, virran ja tehon. Paremmat mittarit näyttävät myös USB Power Delivery -tiedot, kuten neuvotellun jänniteprofiilin ja sen, onko PPS käytössä.

Tällä on merkitystä, koska puhelin ei välttämättä pyydä laturin enimmäistehoa. Jos 65 W:n virtalähde on kytketty puhelimeen, jonka enimmäisteho on 25 W, sen pitäisi antaa enimmillään noin 25 W, ei 65 W. Se on normaalia.

Käytä samaa kaapelia, kun vertaat useita virtalähteitä. Käytä samaa virtalähdettä, kun vertaat kaapeleita. Muuta vain yhtä asiaa kerrallaan, muuten tulos muuttuu arvailuksi.

Tehomittari paljastaa myös kaapeliongelmia, joita sovellukset eivät näytä hyvin. Jos virtalähde on valmis antamaan 9 V mutta puhelin putoaa jatkuvasti 5 V:iin, kyse on neuvotteluongelmasta eikä vain pienestä akun virtalukemasta.

## Tarkkaile fyysisiä varoitusmerkkejä

Laturin lämpeneminen pikalatauksen aikana on normaalia. Laturi, jota ei pysty pitämään kädessä kuumuuden vuoksi, ei ole normaali.

Tarkkaile myös surinaa, palaneen hajua, haljennutta muovia, vääntyneitä pistokkeen tappeja, palojälkiä, löysiä USB-portteja ja puhelimessa heiluvaa kaapelin päätä. Katkonainen lataus on toinen huono merkki. Jos latauskuvake syttyy ja sammuu, lopeta kaapelin tai virtalähteen käyttö, kunnes syy on selvillä.

Halpojen väärennettyjen latureiden kohdalla en ottaisi riskiä. Nykyisissä puhelimissa on suojapiirejä, mutta epävakaa jännite ja heikko eristys ovat silti huono yhdistelmä. Muutaman euron säästö nimettömän valmistajan virtalähteessä ei ole sen arvoinen.

## Sovita pikalatausprotokolla puhelimeen

Laturi voi olla hyvä mutta silti väärä juuri puhelimellesi. Google Pixel ja monet Samsung-mallit käyttävät USB-C Power Deliveryä, ja Samsungin parhaan Super Fast Charging -nopeuden saavuttaminen edellyttää PPS-tukea. OnePlus- ja OPPO-puhelimet tarvitsevat usein SUPERVOOC-yhteensopivan laturin ja kaapelin suurimpiin nopeuksiinsa. Myös Xiaomi HyperChargella on omat vaatimuksensa.

Jos protokollat eivät vastaa toisiaan, puhelin siirtyy yleensä hitaampaan USB-lataustilaan. Se ei rikkoudu. Lataus ei vain ole nopeaa.

65 W:n kannettavan tietokoneen laturi voi ladata turvallisesti puhelinta, joka tukee vain 25 W:a, koska puhelin pyytää vain käyttämänsä tehon. Suurempi nimellisteho tarkoittaa vain sitä, että laturissa on enemmän kapasiteettia kannettaville tietokoneille, tableteille ja muille laitteille.

## Milloin laturi pitää vaihtaa

Vaihda laturi, jos se ylikuumenee, haisee oudolta, surisee kovaa, sen muovi on vaurioitunut tai se antaa epävakaita tuloksia useilla hyvillä kaapeleilla ja laitteilla. Vaihda kaapeli, jos ongelma seuraa kaapelia.

Jos molemmat toimivat normaalisti muissa laitteissa, puhelin voi rajoittaa latausta, koska akku on kuuma, latausportti on likainen, akku on lähes täynnä tai puhelin ei tue laturin pikalatausprotokollaa.
