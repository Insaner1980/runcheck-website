---
title: "Näin vertailet latureiden nopeuksia Android-puhelimella"
description: "Metakuvaus: Käytännöllisiä tapoja vertailla Android-latureiden nopeuksia sovelluksilla, USB-tehomittarilla, puhelimen omilla tiedoilla ja hallituilla testeillä."
listSummary: "lataaminen, akku ja android"
hub: "charging"
sourceNumber: 45
order: 9
tags: ["lataaminen","akku","android","opas","laitteisto"]
locale: "fi"
draft: false
---
Kytket puhelimen yöpöydän laturiin, ja näytössä lukee Fast charging. Kytket sen työpöydän laturiin, ja teksti on sama. Toisella akku ehtii 80 prosenttiin ennen kuin kahvi on valmista, toisella ei.

Pelkkä latausilmoitus ei riitä. Vertailussa ratkaisee se, kuinka paljon tehoa puhelin todella ottaa vastaan.

## Miksi kaksi laturia voivat tuntua niin erilaisilta

Latausnopeus määräytyy laturin, kaapelin ja puhelimen välisessä neuvottelussa. Laturi ilmoittaa, mitä se pystyy syöttämään. Kaapeli voi rajoittaa virtaa. Puhelin päättää, mitä se ottaa vastaan latausprotokollan tuen, akun varaustason, lämpötilan ja omien lataussääntöjensä perusteella.

Jos sekä puhelin että laturi tukevat USB Power Delivery -latausta arvolla 9 V / 3 A, ne voivat päätyä noin 27 W:n tehoon. Jos laturi tukee vain tavallista 5 V / 1 A:n USB-lähtöä, sama puhelin saa 5 W. Tehokaskaan verkkolaite ei voi ohittaa puhelimen pyyntöä.

Kaapeleilla on suurempi merkitys kuin moni odottaa. Tavallinen 3 A:n USB-C-kaapeli riittää monille puhelimille, mutta se ei avaa kaikkia suuritehoisia lataustiloja. OnePlus SUPERVOOC, OPPO VOOC ja jotkin Xiaomi HyperCharge -toteutukset tarvitsevat usein yhteensopivan laturin ja kaapelin. Tavallinen USB-C-kaapeli voi silti ladata puhelinta, mutta huomattavasti hitaammin.

Lämpötila on vertailun hiljainen muuttuja. Pelaamisen tai videokuvauksen jälkeen lämmin puhelin voi rajoittaa lataustehoa, samoin auringossa ollut laite, vaikka käyttäisit parasta laturiasi. Kuumana tehty testi antaa huonon vertailutuloksen.

## Nopea testi sovelluksella

Nopeaan vertailuun voi käyttää esimerkiksi Ampere- tai AccuBattery-sovellusta. Kytke laturi A, odota lukeman tasaantumista ja merkitse virta sekä jännite muistiin. Kytke sitten laturi B samalla kaapelilla ja toista testi.

Pidä akun varaustaso molemmissa testeissä samalla alueella. 20-50 % on hyvä ikkuna, koska useimmat puhelimet lataavat siinä melko voimakkaasti. Ei ole reilua testata yhtä laturia 25 %:n ja toista 78 %:n varaustasolla. Jälkimmäinen näyttää yleensä hitaammalta, koska puhelin on jo alkanut pienentää lataustehoa.

Sovellusten lukemista on hyötyä, mutta ne eivät ole täydellisiä. Ne näyttävät akun puolelta raportoitua arvoa, eivät tarkkaa pistorasiasta otettua tehoa. Näyttö, suoritin, radiot ja latauselektroniikka vaikuttavat kaikki lukemaan. Siksi sovellustesti sopii selvien erojen havaitsemiseen, ei tarkan wattimäärän todistamiseen.

## Testi tehomittarilla

USB-C-tehomittari antaa puhtaamman tuloksen. Kytke mittari laturin ja kaapelin väliin ja seuraa reaaliaikaista jännitettä, virtaa ja tehoa. USB PD -neuvottelun purkavat mittarit voivat näyttää myös sovitun tehoprofiilin, joka on usein puuttuva vihje.

Käytä samaa kaapelia kaikkien verkkolaitteiden testauksessa. Jos vertailet kaapeleita, pidä laturi samana ja vaihda vain kaapeli. Se kuulostaa turhan tarkalta, mutta juuri se erottaa testin arvauksesta.

Mittari auttaa myös ymmärtämään outoja tuloksia. Oletetaan, että 45 W:n laturi näyttää vain 15 W. Laturi voi tukea 45 W:n tehoa, mutta ei puhelimen suosimaa jännitettä tai PPS-aluetta. Kaapeli voi rajoittaa latausta. Puhelin voi myös olla liian lämmin. Mittari ei korjaa ongelmaa, mutta se kertoo, mistä kannattaa etsiä syytä.

## Puhelimen omat vihjeet

Jotkin Android-puhelimet antavat hyödyllisiä vihjeitä, vaikka ne eivät näyttäisi tarkkaa wattimäärää.

Samsung-puhelimissa voi näkyä laturista ja mallista riippuen esimerkiksi Charging, Fast charging, Super fast charging tai Super fast charging 2.0. Uusissa One UI -versioissa akun tiedot löytyvät akun asetuksista. Samsung Members -sovelluksen Puhelindiagnostiikka voi testata akun tilan, kaapelilatauksen ja langattoman latauksen.

Pixel-puhelin näyttää latauksen jälkeen akun asetuksissa arvion täydentymiseen kuluvasta ajasta. Se ei ole wattimittari, mutta 1 tunnin 20 minuutin arvio kertoo selvästi eri toiminnasta kuin 3 tunnin arvio.

Xiaomi- ja OnePlus-puhelimet näyttävät pikalatauksen aikana usein valmistajan latausanimaation tai wattimäärän. Animaatiot eivät ole laboratoriomittareita, mutta niistä näkee, käynnistääkö toinen laturi täyden nopeuden lataustilan ja toinen ei.

## Reilu 30 minuutin vertailu

Luotettava vertailu onnistuu näin:

1. Pura akku joka kerralla samaan lähtötasoon, mieluiten noin 20 prosenttiin.
2. Anna puhelimen jäähtyä muutaman minuutin ajan.
3. Käytä samaa kaapelia.
4. Ota lentotila käyttöön tai jätä puhelin ainakin käyttämättä.
5. Lataa 30 minuuttia ja kirjaa lopullinen varaustaso.

Toista testi seuraavalla laturilla samasta lähtötasosta. Laturi, joka lisää akun varausta enemmän samassa ajassa, on juuri kyseiselle puhelimelle nopeampi.

Älä jatka testiä 100 prosenttiin asti. Viimeinen osuus on tarkoituksella hitaampi ja peittää latureiden todellisen eron. 20-80 %:n väli on hyödyllisempi.

## Langallinen ja langaton lataus

Langallista ja langatonta latausta voi verrata samalla tavalla, mutta langattoman latauksen häviämistä ei kannata ihmetellä. Vanhemmat Qi-laturit ja monet puhelinyhdistelmät jäävät noin 5-15 W:n tasolle. Qi2 toi 15 W:n magneettilatauksen, ja nykyinen Qi2 25W nostaa enimmäistehoa, mutta sekä puhelimen että laturin on tuettava samaa standardia.

Langallinen USB-C on edelleen varmempi valinta, kun nopeus ratkaisee. Langattoman latauksen etuja ovat helppous, puhelimen asettaminen alustalle ja kaapelin vähäisempi kuluminen. Se ei yleensä ole nopein vaihtoehto, varsinkaan jos puhelin lämpenee latausalustalla.

## Miten runcheck auttaa

runcheckin Pro-versiossa on Charger Comparison -ominaisuus. Kytke laturi, nimeä se, ja sovellus tallentaa latausnopeuden latauskerran aikana. Kun olet testannut muutaman laturin ja kaapelin, voit vertailla keskimääräistä mAh/h-arvoa ja wattimäärää rinnakkain.

Suurimmalla numerolla merkitty laturi ei aina ole paras. Tasaisesti ja viileänä toimiva 25 W:n yhdistelmä voi olla hyödyllisempi kuin laturi, joka käy kahden minuutin ajan korkealla teholla ja hidastuu sitten puhelimen lämmetessä.

## Muutama yleinen kompastuskivi

Testijärjestyksellä on väliä. Puhelin latautuu yleensä nopeammin 25 %:n kuin 75 %:n varaustasolla.

65 W:n laturi ei pakota 25 W:n puhelinta ottamaan vastaan 65 W. Puhelin päättää tehon.

Jos kaksi laturia suoriutuu lähes yhtä hyvin, käytä viileämpänä pysyvää vaihtoehtoa. Lämpö on akun vihollinen, vaikka latausaika näyttäisi samalta.
