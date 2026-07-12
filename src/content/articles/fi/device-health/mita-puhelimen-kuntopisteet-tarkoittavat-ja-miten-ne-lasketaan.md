---
title: "Mitä puhelimen kuntopisteet tarkoittavat ja miten ne lasketaan"
description: "Android-puhelimen Asetuksissa akun tiedot ovat yhdessä paikassa, tallennustila toisessa ja verkkotiedot taas muualla. Kuntopisteet yhdistävät nämä tiedot, eli akun, lämpötilan, verkon ja tallennustilan, yhdeksi luvuksi, tavallisesti asteikolla 0-100. Yksi lukema neljän sijaan."
listSummary: "lämpötila, kuumeneminen ja android"
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["lämpötila","kuumeneminen","android","vianetsintä","laitteisto"]
locale: "fi"
draft: false
---
Android ei määritä yleistä puhelimen kuntopistemallia. Eri valmistajien puhelimissa ei ole yhteistä Asetukset-näkymää, jossa esimerkiksi 82/100 tarkoittaisi aina samaa asiaa. Samsungin Akun ja laitteen ylläpito voi näyttää oman optimointipistemääränsä, ja Pixelin Device health and support näyttää laitteen ja eri ominaisuuksien tiloja, mutta ne ovat valmistajakohtaisia työkaluja, eivät Androidin yhteinen standardi. Diagnostiikkasovellukset käyttävät omia laskentamallejaan. Pisteisiin sisältyvät tiedot ja mallin rajoitukset ovat tärkeämpiä kuin yksi numero.

## Mitä kuntopisteet mittaavat

Hyödyllinen pistemalli kokoaa tavallisesti neljä osa-aluetta ja painottaa niitä sen mukaan, kuinka paljon ne vaikuttavat päivittäiseen käyttöön. Painot eivät ole standardoituja.

**Akku** on runcheckin laskennassa tärkein osa, ja sen paino on 40 % kokonaispisteistä. Ratkaisu on ymmärrettävä: kulunut akku on vanhenevan puhelimen näkyvimpiä ongelmia. Akkukomponentti huomioi Androidin ilmoittaman akun kuntotilan, akun lämpötilan, jännitteen ja mahdollisen akun kuntoprosentin silloin, kun laite tarjoaa sen luotettavasti. Sovellus ei käytä yksityistä PowerProfile-rajapintaa eikä väitä tuntevansa akun nimelliskapasiteettia, jos Android ei sitä julkisesti ilmoita. Julkisesta charge counter -arvosta voidaan joillakin laitteilla arvioida jäljellä olevia milliampeeritunteja ja täyttä kapasiteettia, mutta arvio näytetään vain, jos lähtötiedot ovat saatavilla ja järkevällä alueella. Akku, jonka kuntoprosentti on 92 % ja lämpötila 31 °C, saa korkeat pisteet. Akku, jonka kuntoprosentti on 74 % ja lämpötila 39 °C, laskee niitä voimakkaasti.

**Lämpötila** muodostaa 25 % runcheckin mallista. Android ilmoittaa lämpötilan aiheuttaman rajoituksen tilan `PowerManager.getCurrentThermalStatus()`-rajapinnalla Android 10:stä alkaen ja lämpötilavaraa `getThermalHeadroom()`-rajapinnalla Android 11:stä alkaen. Ne kertovat diagnostiikkasovellukselle, onko laite normaalissa lämpötilassa, lämpenemässä, rajoittamassa suorituskykyä tai lähestymässä sammutusrajaa. Sovellus käyttää akun lämpötilaa ja Androidin thermal status -tietoa. Se ei lue CPU-lämpötilaa yksityisistä sysfs-polkuista, joten CPU-lämpötila jää puuttuvaksi, ellei luotettavaa julkista tietolähdettä ole. Korkea lämpötila voi hidastaa CPU:ta ja GPU:ta sekä nopeuttaa akun vanhenemista. Normaali tila ja 28 °C:n akun lämpötila saavat hyvän tuloksen. Jatkuva lämpötilasta johtuva suorituskyvyn rajoittaminen yli 40 °C:ssa ei saa.

**Verkkoyhteys** vaikuttaa 25 %:iin runcheckin kokonaispisteistä. Ilman tuoretta nopeustestiä arvio perustuu yhteyden tilaan, signaalin laatuun ja viiveeseen. Jos verkkoa ei ole, verkko-osa saa nollan. Kun alle tunti sitten tehty nopeustesti on käytettävissä, verkko-osa painottaa signaalia 40 %, viivettä 30 %, latausnopeutta 20 % ja jitteriä eli yhteyden vaihtelua 10 %. Wi-Fi-yhteydessä noin -50 dBm:n ja -70 dBm:n välinen arvo on erinomainen. Noin -70 dBm:n ja -80 dBm:n välinen arvo on vielä käyttökelpoinen, kun taas alle -80 dBm:n yhteys heikkenee selvästi. Mobiilisignaalissa yli -85 dBm on vahva ja alle -110 dBm heikko. Wi-Fi-arvoihin vaikuttavat taajuus, tukiasema, seinät ja laitteen antenni, joten sama puhelin voi saada eri tuloksen eri huoneissa. Myös viive ratkaisee. 15 ms:n ja 200 ms:n välillä on käytännössä suurempi ero kuin monien pienten signaalivaihteluiden välillä.

**Tallennustila** on pienin osa, 10 %. runcheck laskee käytetyn tallennustilan osuuden ja antaa voimakkaampia vähennyksiä käyttöasteen noustessa. Sovelluksen tilaluokituksessa alle 75 % on terve alue, 75-84 % kohtalainen, 85-94 % heikko ja vähintään 95 % kriittinen. Täyttyvä NAND-flash voi hidastaa Androidia, koska ohjaimelle jää vähemmän työtilaa käyttämättömien lohkojen siivoamiseen ja kulumisen tasaukseen.

## Miksi painotuksilla on väliä

Akun kunto vaikuttaa puhelimeen joka päivä. Tallennustila muuttuu ongelmaksi vasta tietyn rajan jälkeen. Verkon laatu vaihtelee jatkuvasti syistä, joihin puhelin ei voi vaikuttaa. Lämpötila puolestaan on hetkellinen: nyt kuuma puhelin voi olla kymmenen minuutin kuluttua täysin normaali.

Sovellukset eivät käytä samoja painoja. Jos kaikki neljä osa-aluetta saavat yhtä suuren osuuden, täysi tallennustila voi vaikuttaa yhtä paljon kuin loppuun kulunut akku, vaikka ongelmien käytännön merkitys on erilainen. runcheck painottaa akkua 40 %, lämpötilaa ja verkkoa kumpaakin 25 % sekä tallennustilaa 10 %. Se vastaa paremmin sitä, miten puhelimen ongelmat tavallisesti tuntuvat käytössä. Hyväakkuinen puhelin, jonka tallennustila on lähes täynnä, on usein helpompi saada kuntoon kuin puhelin, jonka akku on huono mutta tilaa on runsaasti.

## Luotettavuusongelma

Kaikki pisteisiin vaikuttavat lukemat eivät ole yhtä luotettavia. Tässä koko ajatus muuttuu hankalaksi.

Akun kuntoprosentti on käyttökelpoinen laitteissa, jotka tarjoavat tiedon asianmukaisesti julkisen rajapinnan kautta. Pixel 8a ja uudemmat näyttävät akun kunnon ja kapasiteettiarvion suoraan Asetuksissa. Monissa muissa puhelimissa sovelluksen on arvioitava kapasiteetti seuraamalla latausta pitkällä aikavälillä. Arvio tarkentuu käytön myötä, mutta ensimmäiset tulokset ovat väistämättä epätarkempia. Jos kuntopisteiden akkuosa perustuu epävarmaan arvioon, epävarmuus siirtyy koko pistemäärään.

Lämpötilatiedot riippuvat siitä, mitä antureita laite antaa sovellusten käyttöön. `getCurrentThermalStatus()` tarjoaa yleisen luokan normaalista sammutusrajaan, mutta se on karkea. `getThermalHeadroom()` kertoo liukulukuna, kuinka lähellä laite on vakavaa lämpötilarajoitusta, mutta käytännön tulkinta vaihtelee järjestelmäpiirin mukaan. Akun lämpötila on saatavilla melko johdonmukaisesti, mutta se mittaa akkua, ei CPU:ta tai puhelimen pintaa. Näiden välillä voi olla 5-10 °C:n ero.

Signaalin voimakkuus dBm-arvona on käyttökelpoinen, kun Android ilmoittaa sen. Näytön signaalipalkit eivät sen sijaan ole standardoituja. Kolme palkkia Samsungissa ja kolme palkkia Pixelissä voivat samassa paikassa tarkoittaa eri dBm-arvoja. Palkit ovat käyttöliittymäesitys. dBm-lukema on parempi vertailutieto.

Tallennustilan käytön kokonaismäärä on näistä tiedoista johdonmukaisin. Laskenta on suoraviivainen eikä riipu akun HAL-toteutuksesta tai piilotetuista antureista. Yksittäisten tiedostoluokkien erittely voi silti riippua Android-version käyttöoikeuksista.

Rehelliset kuntopisteet näyttävät rajoitukset eivätkä piilota niitä. Jos akun kunto perustuu arvioon eikä laitteiston ilmoittamaan arvoon, sen pitää näkyä käyttäjälle. Täsmälliseltä näyttävä "87/100" johtaa harhaan, jos akun kapasiteettiarvion virhemarginaali on esimerkiksi 5 %.

## Kuntopisteet vanhemmissa puhelimissa

Pistemäärän laatu riippuu siitä, kuinka paljon tietoa puhelin paljastaa. Vanhemmat laitteet tarjoavat vähemmän.

Android 10 (API 29) ja uudemmat voivat ilmoittaa lämpötilan tilan, joten lämpötilaosa toimii kohtuullisesti vuodesta 2019 alkaen julkaistuissa laitteissa, jos valmistaja antaa käyttökelpoisen tiedon. Android 11 (API 30) lisäsi lämpötilavaran, joka tekee arviosta yksityiskohtaisemman. Android 10:tä vanhemmissa puhelimissa lämpötilatieto rajoittuu usein akun lämpötilaan.

Suurin ero on akun kunnossa. Android 14 toi lisää akkua koskevia julkisia rajapintoja, mutta suuri osa ennen vuotta 2024 julkaistuista puhelimista ei ilmoita tarkkaa kuntoprosenttia tai lataussyklien määrää. Niissä akun pisteet nojaavat epäsuoriin tietoihin: Androidin karkeaan Good-, Overheat-, Dead- tai Cold-luokitukseen, lämpötilaan, jännitteeseen ja mahdolliseen pitkäaikaiseen latausseurantaan. Android 10 -puhelimesta voi silti muodostaa hyödyllisen akkupisteen, mutta se ei ole yhtä tarkka kuin Pixel 8a:ssa tai uudemmassa laitteessa, joka ilmoittaa akun kunnon ja syklit suoraan.

Tallennustilan ja verkon perustiedot toimivat johdonmukaisesti Android 8:sta alkaen.

Käytännössä Android 9-13 -puhelimen kuntopisteet ovat hyödyllisiä, mutta tukeutuvat enemmän arvioihin. Ne löytävät selvät ongelmat, kuten pahasti kuluneen akun, kriittisen täyden tallennustilan tai jatkuvan ylikuumenemisen. Epävarmuusväli on vain suurempi. Tieto on silti arvokas, kun sitä ei esitetä tarkempana kuin se on.

## Miten lukua tulkitaan

**75-100:** Puhelin on hyvässä kunnossa. Akussa on normaalia kulumaa, lämpötila pysyy hallinnassa, tallennustilaa on riittävästi ja yhteydet toimivat.

**50-74:** Jokin vaatii huomiota. Tavallinen syy on päivän käyttöaikaa lyhentävä akku tai niin täysi tallennustila, että suorituskyky kärsii. Kohdennettu ylläpito voi korjata tilanteen.

**25-49:** Ongelma on todellinen. Akku voi olla selvästi kulunut, laite voi rajoittaa suorituskykyä toistuvasti lämmön vuoksi tai tallennustila voi olla lähes täynnä. Korjaus tai laitteen vaihto alkaa olla ajankohtainen.

**Alle 25:** Jokin osa-alue on kriittisessä tilassa tai yhteys puuttuu kokonaan ja muitakin ongelmia on.

Nämä rajat eivät ole virallinen Android-standardi. Mikään viranomainen tai valmistajien yhteinen järjestelmä ei määritä, mitä "terve" puhelin tarkoittaa. Tässä käytetty luokitus vastaa karkeasti hyvää, kohtalaista, heikkoa ja kriittistä tilaa.

## Mitä kuntopisteet eivät kerro

Ne eivät tunnista kaikkia laitteistovaurioita. Haljennut näyttö, rikki menevä kaiutin, väljä latausliitäntä tai vesivaurio ei välttämättä näy yhdessäkään ohjelmistomittarissa.

Ne eivät ennusta, kuinka kauan puhelin vielä kestää. Pistemäärä 78 ei tarkoita, että laitteen käyttöiästä olisi jäljellä 78 %. Se kertoo, että puhelin on tarkistushetkellä mitatuilla osa-alueilla kohtuullisessa kunnossa.

Ne eivät mahdollista suoraa vertailua eri puhelinmallien välillä. Edullisen puhelimen 90/100, jossa on 3 Gt RAM-muistia ja 32 Gt tallennustilaa, ei vastaa lippulaivapuhelimen 90/100-tulosta, jossa on 12 Gt RAM-muistia ja 256 Gt tallennustilaa.

Pistemäärä on tilannekuva. Se auttaa seuraamaan kehitystä ja tekemään nopean arvion esimerkiksi käytettyä puhelinta ostettaessa. Se on lähtökohta, ei valmis diagnoosi.

## Usein kysytyt kysymykset

**Julkaisevatko valmistajat virallisia kuntopisteitä?**
Eivät yhteistä pistemallia. Samsungin Akun ja laitteen ylläpito voi näyttää oman optimointipistemääränsä, joka perustuu Samsungin akun, tallennustilan, muistin ja tietoturvan tarkistuksiin. Pixelin Device health and support näyttää yleisen laitteen tilan ja ominaisuuskohtaisia tiloja geneerisen 0-100-pistemäärän sijaan. Valmistajien työkalut ovat hyödyllisiä, mutta niiden tuloksia ei voi verrata suoraan merkkien välillä.

**Voiko alhaisia pisteitä parantaa?**
Se riippuu täysin syystä. Jos lähes täysi tallennustila laskee tulosta, tilan vapauttaminen voi nostaa pisteitä heti. Kuluneen akun korjaa vain akun vaihto. Lämpöongelma voi poistua sulkemalla virheellisesti toimivan sovelluksen, lopettamalla raskaan työn tai poistamalla lämpöä keräävän kuoren.

**Onko suurempi pistemäärä aina parempi?**
Samassa puhelimessa ajan mittaan kyllä. Laskeva tulos kertoo muutoksesta tai kulumisesta. Eri puhelinten välillä ei välttämättä. Kolme vuotta vanha puhelin tuloksella 72 voi palvella omistajaansa hyvin, kun taas uusi puhelin tuloksella 95 voi kärsiä juuri käyttäjän sijainnissa heikosta signaalista, joka näkyy osittain pisteissä.
