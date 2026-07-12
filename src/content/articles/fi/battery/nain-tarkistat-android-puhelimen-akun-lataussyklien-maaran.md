---
title: "Näin tarkistat Android-puhelimen akun lataussyklien määrän"
description: "Lataussyklien määrä kertoo, kuinka monta täyttä lataus- ja purkaussykliä akkuun on kertynyt puhelimen valmistamisen jälkeen. Yksi sykli tarkoittaa 100 %:n käyttämistä akun kapasiteetista. Sen ei tarvitse tapahtua yhdellä kertaa. Kun lataat ensin 20 prosentista 70 prosenttiin ja myöhemmin 40 prosentista 90 prosenttiin, osittaiset lataukset muodostavat yhteensä yhden täyden syklin."
listSummary: "akku, kunto ja diagnostiikka"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Akun kunto"
tags: ["akku","kunto","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Luvulla on merkitystä, koska litiumioniakun käyttöikä on rajallinen ja sitä arvioidaan muun muassa syklien perusteella. Monet nykyiset puhelinakut säilyttävät noin 80 % alkuperäisestä kapasiteetistaan 800-1 000 syklin ajan, mutta tarkka tulos riippuu akkukemiasta ja valmistajasta. Sen jälkeen päivittäinen akunkesto alkaa usein lyhentyä selvästi.

Android on tukenut syklimäärän ilmoittamista Android 14:stä lähtien BatteryManager-rajapinnan kautta, mutta valmistaja päättää, näkyykö tieto käyttäjälle. Muutamat uudet puhelimet näyttävät luvun suoraan asetuksissa. Useimmat eivät. Alla olevat menetelmät ovat siinä järjestyksessä, kuinka laajalla laitekannalla niitä voi käyttää. Ensimmäiset vaihtoehdot kattavat myös vanhempia malleja.

## Seurantasovellukset: toimivat lähes kaikissa Android-puhelimissa

Useimmissa puhelimissa, etenkin ennen vuotta 2024 julkaistuissa, seurantasovellus on käytännöllisin lähtökohta.

AccuBattery arvioi syklimäärää seuraamalla akkuun ladattua energiaa ajan mittaan. Asenna sovellus ja anna sen kerätä tietoa vähintään viikon ajan useista latauskerroista. Se laskee arvion jakamalla akkuun ladattujen milliampeerituntien kokonaismäärän akun nimelliskapasiteetilla. Mitä pidempään sovellus kerää tietoja, sitä paremmaksi arvio yleensä muuttuu. Vasta asennetun AccuBatteryn näyttämä luku perustuu hyvin vähäiseen aineistoon, joten anna sille vähintään kaksi viikkoa ennen kuin suhtaudut tulokseen vakavasti. Nykyisen sovellusversion Android-vaatimus voi muuttua päivitysten mukana, joten yhteensopivuus kannattaa tarkistaa Google Playsta omalla laitteella.

aBattery toimii eri tavalla. Android 14:ää tai uudempaa käyttävässä puhelimessa se voi lukea syklimäärän ja kuntotietoja suoraan järjestelmästä, jos valmistaja on toteuttanut ja avannut tarvittavan akkutiedon. Vanhemmissa laitteissa tai puhelimissa, joissa toteutus on puutteellinen, tiedot voivat puuttua tai olla epäluotettavia. Sovelluksen näytöstä ei aina voi päätellä, perustuuko arvo todelliseen laiteraporttiin vai puutteelliseen järjestelmätietoon.

Kaikkien seurantasovellusten rajoitus on sama: jos järjestelmä ei anna oikeaa laitelaskuria, sovellus joutuu arvioimaan syklejä latauskäyttäytymisen perusteella. Arvio paranee ajan mittaan, mutta se ei ole täsmällinen. Kaksi sovellusta voi näyttää samassa puhelimessa eri luvun, koska niiden laskentatavat poikkeavat toisistaan.

## Numeronäppäimistön koodit: nopea mutta epävarma tarkistus

Joissakin puhelimissa numeronäppäimistöön kirjoitettava koodi avaa akkutietoja, joita asetuksissa ei näy. Monet koodeista ovat peräisin Android 4:n ajoilta tai vielä vanhempia, ja niiden toimivuus riippuu valmistajasta ja joskus operaattorista.

`*#*#4636#*#*` toimii joissakin lähes vakio-Androidia käyttävissä puhelimissa, kuten tietyissä Pixel-, Motorola-, Nokia- ja Sony-malleissa. Jos koodi toimii, se avaa testausvalikon. Battery information -osiossa voi näkyä varaustaso, jännite, lämpötila ja akun yleinen tila. Useimmissa laitteissa syklimäärää ei näytetä, mutta valikko kannattaa silti tarkistaa, sillä osa valmistajista lisää siihen omia kenttiään. Koodi on ollut käytössä yli kymmenen vuotta ja toimii yhä joissakin vanhoissa puhelimissa, joissa uudempia akkunäkymiä ei ole.

`*#*#6485#*#*` voi Xiaomi-, POCO- ja Redmi-puhelimissa näyttää valmistajakohtaisia akkutietoja. Joissakin malleissa mukana on sykleihin liittyviä kenttiä, esimerkiksi `MB_06`. Koodi toimii osassa laitteita jo MIUI 10:stä lähtien, mutta kenttien merkitys ja saatavuus vaihtelevat.

`*#0228#` näyttää joissakin Samsung Galaxy -puhelimissa jännitteen, virran ja akun tilan. Se ei tavallisesti näytä syklimäärää.

Jos koodi ei tee mitään, puhelin ei tue sitä. Operaattori voi estää valikon, ja valmistaja voi poistaa sen ohjelmistopäivityksessä.

## ADB: perusteellisin menetelmä ilman root-oikeuksia

Android Debug Bridge antaa usein paremman pääsyn akkutietoihin kuin sovellus tai asetussivu. ADB toimii puhelimissa jopa Android 4.1:stä lähtien. Tarvitset tietokoneen ja noin viisi minuuttia alkuasetuksiin, mutta menetelmä voi paljastaa tietoja, joita puhelin ei muuten näytä.

Ota **Kehittäjäasetukset** käyttöön avaamalla **Asetukset > Tietoja puhelimesta** ja napauttamalla koontiversion numeroa seitsemän kertaa. Ota sen jälkeen **USB-vianetsintä** käyttöön Kehittäjäasetuksissa. Yhdistä puhelin USB-kaapelilla ja hyväksy yhteys puhelimen näytöltä.

Suorita:

`adb shell dumpsys battery`

Tulosteessa näkyy tavallisesti esimerkiksi CHARGE_COUNTER, jännite, lämpötila, lataustila ja yleinen kuntotila. Jos laite ilmoittaa syklimäärän tämän rajapinnan kautta, mukana näkyy CYCLE_COUNT-kenttä. Jotkin Samsung-, Pixel- ja Xiaomi-laitteet raportoivat tiedon ADB:lle, vaikka sitä ei näytetä asetuksissa. Ennen Android 14:ää kenttä on harvinaisempi, mutta se kannattaa silti tarkistaa. Osa valmistajista välitti syklitietoa omien järjestelmäominaisuuksiensa kautta jo ennen Googlen vakioitua kenttää.

Jos CYCLE_COUNT-kenttää ei näy, valmistaja ei todennäköisesti ole avannut tietoa tämän rajapinnan kautta. Mikään ohjelmisto ei pysty lukemaan todellista laitelaskuria, jos laiteohjelmisto tai akkuohjain ei sitä paljasta.

`adb shell dumpsys batteryproperties` voi joissakin laitteissa näyttää lisäkenttiä, etenkin Android 14:ssä ja uudemmissa versioissa. Vanhemmassa laitteessa tuloste voi olla tyhjä tai palvelua ei ole lainkaan.

## Puhelimen omat asetukset: lähinnä uusissa malleissa

Yhä useampi uusi puhelin näyttää syklimäärän suoraan asetuksissa. Jos oma laitteesi kuuluu niihin, tämä on helpoin tapa. Muussa tapauksessa käytä yllä olevia menetelmiä.

**Google Pixel 8a ja uudemmat** näyttävät syklimäärän kohdassa **Asetukset > Tietoja puhelimesta > Akun tiedot**. Samassa näkymässä näkyvät myös akun valmistuspäivä ja ensimmäinen käyttöpäivä. Pixel 6:sta Pixel 8 Prohon tätä sivua ei ole. Google lisäsi sen Pixel 8a:han ja jatkoi ominaisuutta Pixel 9- ja Pixel 10 -sarjoissa sekä myöhemmissä malleissa. Vanhemmissa Pixeleissä tarvitset ADB:n tai seurantasovelluksen.

**Samsung Galaxy S25 -sarjassa ja joissakin uudemmissa Galaxy-malleissa** tarkka kuntoprosentti ja syklimäärä voivat näkyä tietyillä ohjelmistoilla ja markkina-alueilla, mutta saatavuus ei ole yhtenäinen. Samsungin virallinen ja laajemmin toimiva menetelmä on Samsung Membersin Puhelimen vianmääritys, joka näyttää akun yleisen tilan, kuten Normaali, Heikko tai Huono. Se ei useimmissa vanhemmissa Galaxy-puhelimissa näytä täsmällistä syklimäärää tai kuntoprosenttia.

**OnePlus- ja OPPO-puhelimissa** akun kunto voi näkyä uusien OxygenOS- tai ColorOS-versioiden Akku-asetuksissa. Syklimäärän saatavuus vaihtelee mallin ja alueen mukaan. OnePlus 7 ja sitä vanhemmat mallit eivät yleensä näytä tätä tietoa.

Perusongelma on edelleen Android-laitteiden hajanaisuus. Apple toi akun kuntotiedot tuettuihin iPhoneihin iOS 11.3:ssa alkaen iPhone 6 -malleista. Android lisäsi syklimäärän järjestelmärajapintaan, mutta jätti valmistajille päätöksen siitä, raportoidaanko ja näytetäänkö tieto. Tilanne paranee vuosi vuodelta, mutta suurin osa käytössä olevista Android-puhelimista ei edelleenkään näytä tarkkaa syklimäärää.

## Mitä syklimäärä kertoo käytännössä

Pelkkä luku on vain laskuri. Olennaista on, millaiselle syklikestolle juuri kyseisen akun on ilmoitettu olevan suunniteltu.

Google ilmoittaa Pixel 3:n ja Pixel 8 Pron välisille malleille sekä Pixel Foldille noin 800 sykliä ennen kuin kapasiteetti laskee noin 80 prosenttiin. Pixel 8a ja uudemmat on mitoitettu noin 1 000 sykliin. Uudemmissa malleissa tähän liittyvät akkukemian muutokset ja ohjelmisto-ominaisuudet, kuten Akunkestoapu, joka säätää akun suurinta latausjännitettä vaiheittain akun vanhetessa.

EU-markkinoille 20.6.2025 alkaen saatettujen uusien puhelinten on kestettävä vähintään 800 lataus- ja purkaussykliä ja säilytettävä vähintään 80 % alkuperäisestä kapasiteetista. Joidenkin uusien huippumallien ilmoitettu tavoite on noin 1 000 sykliä tai enemmän. Vanhemmissa tai EU:n ulkopuolisille markkinoille tarkoitetuissa edullisissa puhelimissa ilmoitettu kesto voi olla lyhyempi.

400 sykliä on määrällisesti puolet 800 syklin testitavoitteesta, mutta se ei tarkoita, että akku olisi käyttänyt täsmälleen puolet käyttökelpoisesta elämästään. Akun vanheneminen ei etene täysin lineaarisesti, ja kuumuus, korkea varaustaso sekä yksilölliset erot vaikuttavat paljon. Kun 800 syklille mitoitettu akku saavuttaa 800 sykliä, sen pitäisi testiolosuhteissa säilyttää noin 80 % kapasiteetistaan. 5 000 mAh:n akku vastaisi silloin noin 4 000 mAh:ta. 1 200 syklin kohdalla päivittäinen akunkesto voi olla jo huomattavasti uutena saatua lyhyempi, mutta tarkkaa prosenttia ei voi päätellä syklimäärästä yksin.

Luvut olettavat kohtuulliset latausolosuhteet: huonelämpötilan, yhteensopivat laturit ja sen, ettei akkua pidetä pitkiä aikoja 100 prosentissa tai 0 prosentissa. Kuumissa oloissa käytetty pikalataus nopeuttaa kulumista, eikä syklilaskuri kerro tästä mitään. Kahdella 500 syklin puhelimella voi olla hyvin erilainen akun kunto, jos toista on ladattu yön yli mukautuvalla latauksella ja toista pikaladattu kuumassa autossa.

## Kun syklimäärää ei ole saatavilla

Jos mikään menetelmistä ei toimi omassa puhelimessasi, käytännön oireet auttavat silti. Vertaa näyttöaikaa puolen vuoden takaiseen, tarkkaile sammumista 15-20 prosentissa, äkillisiä prosenttihyppyjä esimerkiksi 30 prosentista 12 prosenttiin ja lämpenemistä kevyessä käytössä. Kaikki voivat kertoa siitä, että akun paras käyttöikä on takana.

Kun oireita verrataan AccuBatteryn muutaman viikon seurannan jälkeen antamaan kuntoarvioon, akun tilasta saa kohtuullisen kuvan ilman tarkkaa laitelaskuriakin.

## Usein kysyttyä

**Vähentääkö latauksen rajoittaminen 80 prosenttiin syklien kertymistä?**
Ei. Osittaiset lataukset lasketaan yhteen. Lataaminen 20 prosentista 80 prosenttiin vastaa 0,6 sykliä. Hyöty ei synny pienemmästä syklimäärästä vaan siitä, että kenno viettää vähemmän aikaa korkeassa varaustilassa. Se vähentää kemiallista rasitusta syklilaskurista riippumatta.

**Onko 500 sykliä paljon?**
Se riippuu puhelimesta. Yhdellä täydellä syklillä päivässä 500 sykliä kertyy noin 18 kuukaudessa. Jos kulutus on keskimäärin 0,7 sykliä päivässä, esimerkiksi lataamalla 30 prosentista 100 prosenttiin, 500 syklin saavuttamiseen kuluu yli kaksi vuotta. Se, onko määrä suuri, riippuu juuri kyseiselle akulle ilmoitetusta syklikestosta.

**Miksi Samsung ei näytä syklimäärää One UI 7 -päivityksen jälkeen?**
Ominaisuus on ollut rajattu tiettyihin malleihin, ohjelmistoversioihin ja markkina-alueisiin. Galaxy S25 -sarjassa tieto on näkynyt joillakin kokoonpanoilla, mutta sitä ei pidä olettaa saatavaksi vain One UI -version perusteella. Samsung ei ole vahvistanut kaikille vanhemmille malleille yhteistä julkaisuaikataulua.

**Voiko syklimäärän nollata?**
Todellinen laitteiston syklilaskuri ei nollaudu tehdasasetusten palautuksessa, akun kalibroinnissa tai uuden ROMin asentamisessa. Fyysinen akun vaihto on ainoa tapa aloittaa alusta silloin, kun laskuri kuuluu akkupakettiin tai akun varaustilan mittauspiiriin. Sovelluksen arvioima luku voi nollautua, jos sovellus poistetaan tai sen tiedot tyhjennetään. Se on yksi syy lisää olla pitämättä sovellusarviota laitteiston totuutena.
