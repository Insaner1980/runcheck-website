---
title: "Kuinka kuuma on puhelimelle liian kuuma?"
description: "Kuinka kuuma on liian kuuma? Ärsyttävä vastaus kuuluu: se riippuu siitä, mitä lämpötilaa mittaat."
listSummary: "Kuinka kuuma on liian kuuma?"
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["lämpötila","kuumeneminen","android","vianetsintä","laitteisto"]
locale: "fi"
draft: false
---
Puhelinta ympäröivän ilman lämpötila on yksi luku. Puhelimen ulkopinnan lämpötila on toinen. Akun anturi näyttää kolmannen lukeman, ja akun vanhenemisen kannalta se on tärkein. Puhelin voi tuntua kädessä vain hieman lämpimältä, vaikka akku tai SoC olisi jo niin kuuma, että Android alkaa hidastaa toimintaa.

Monet älypuhelimet, myös Google Pixel -laitteet, on suunniteltu toimimaan parhaiten ympäristön lämpötilassa 0-35 °C. Kyse on huoneen tai ulkoilman lämpötilasta, ei akun sisäisestä lämpötilasta. Käytössä olevan puhelimen sisäosat ovat ympäröivää ilmaa lämpimämpiä.

## Käytännölliset lämpötila-alueet

Nämä alueet ovat käytännön ohjeita käyttäjälle, eivät kaikkien valmistajien yhteinen tekninen määritys. Eri puhelimissa on eri anturit ja lämpörajat. Ne ovat silti riittävän hyödyllisiä tavalliseen vianetsintään.

### Alle 20 °C

Tämä on viileä lämpötila. Viileässä huoneessa käyttämättömän puhelimen akku voi olla tällä alueella. Kuumuudesta ei ole huolta, vaikka hyvin kylmä sää voi saada akun vaikuttamaan heikommalta siihen asti, että se lämpenee uudelleen.

### 20-35 °C

Tämä on akun lämpötilan mukava alue kevyessä käytössä. Viestien, verkkoselailun, puheluiden, musiikin ja lyhyiden videoiden aikana lukeman pitäisi yleensä pysyä jossain tällä alueella. Jos puhelin viettää suurimman osan päivästä täällä, lämpö ei ole ongelma.

### 35-40 °C

Tämä on lämmin alue. Se on tavallinen pikalatauksessa, videopuheluissa, GPS-navigoinnissa, pelaamisessa, kameran käytössä tai mobiilitukiasemana toimittaessa. Lyhyet jaksot eivät haittaa. Tuntikausien päivittäinen oleskelu tällä alueella on eri asia, sillä akun vanheneminen nopeutuu lämpötilan noustessa.

### 40-45 °C

Tämä on kuuma alue. Tunnet lämmön todennäköisesti takapinnan tai kehyksen läpi. Lataus voi hidastua, näyttö himmentyä, kamera poistaa salaman käytöstä ja pelien suorituskyky laskea.

Älä hätäänny lyhyestä 42 °C:n piikistä raskaan tehtävän aikana. Kiinnitä kuitenkin huomiota tilanteeseen, jos puhelin pysyy 42 °C:ssa yöpöydällä latautuessaan tai tekemättä mitään.

### Yli 45 °C

Tämä on liian kuuma tavalliseen käyttöön. Puhelimen pitäisi tässä vaiheessa rajoittaa toimintaansa voimakkaasti. Lataus voi keskeytyä, suorituskyky pudota, radioiden toimintaa voidaan rajoittaa ja näytölle voi tulla lämpötilavaroitus.

Toistuva altistuminen yli 45 °C:n lämpötilalle kuluttaa litiumioniakkua kovasti. Vaara ei ole yksi viiden minuutin piikki. Ongelma syntyy, jos piikistä tulee päivittäinen tapa.

### Yli 50 °C

Tämä on vaaravyöhyke. Tavallisen käytön ei pitäisi nostaa terveen puhelimen lämpötilaa näin korkealle normaalissa huoneessa. Suora aurinko, kuuma auto, viallinen laturi, vikaantuva akku tai raskas käyttö latauksen aikana voi tehdä sen.

Sammuta puhelin, jos voit, siirrä se viileämpään paikkaan ja anna sen jäähtyä luonnollisesti. Älä laita sitä pakastimeen. Kondenssivedellä saat vain muutettua lämpöongelman vesivahingoksi.

## Lämpötilan tarkistaminen

Android ei edelleenkään tarjoa jokaisessa puhelimessa selkeää akun lämpötilanäkymää. Teoriassa asian pitäisi olla helpompi vuonna 2026. Käytännössä se riippuu yhä merkistä.

Tuetuissa Pixel-puhelimissa Akun kunto löytyy polusta **Asetukset > Akku > Akun kunto**. Google rajaa täyden Akun kunto -toiminnon Pixel 8a:han ja uudempiin, eikä se ole käytettävissä Pixel Tabletissa. Vanhemmat Pixelit voivat näyttää muita akkutietoja, mutta eivät samaa akun kuntotilaa.

Samsungissa kannattaa aloittaa polusta **Samsung Members > Tuki > Puhelimen vianmääritys**. Joissakin Galaxy-malleissa on muitakin diagnostiikkavalikoita, mutta ne vaihtelevat alueen ja mallin mukaan. Xiaomi, OnePlus, OPPO ja muut valmistajat siirtävät näitä näkymiä niin usein, että turvallisinta on etsiä ensin akun, akun suojauksen tai laitteen ylläpidon asetuksia.

Vanha Androidin testikoodi `*#*#4636#*#*` avaa joissakin puhelimissa edelleen akkutiedot. Monet uudemmat puhelimet estävät sen. Kolmannen osapuolen työkalut, kuten CPU-Z, DevCheck, AIDA64 ja runcheck, voivat lukea akun lämpötila-anturin monissa laitteissa, mutta pääsy anturitietoon riippuu edelleen siitä, mitä valmistaja antaa sovelluksille.

runcheck on hyödyllinen silloin, kun yksittäisen lukeman sijaan kiinnostaa kehitys ajan mittaan. Se seuraa akun lämpötilaa, tallentaa käyttökerran pienimmän ja suurimman arvon ja sijoittaa nykyisen lukeman käytännöllisiin luokkiin `Cool`, `Normal`, `Warm` ja `Critical`.

## Ympäristön lämpötila muuttaa kaiken

Puhelimella on lämpövaraa vain silloin, kun ympäröivä ilma on sitä viileämpää. Kun sisällä on 22 °C, akun lämpötila voi levossa olla noin 26-30 °C ja sillä on vielä varaa lämmetä käytössä. Kun ulkona on 35 °C, lämpövara on lähes käytetty jo ennen Maps-sovelluksen avaamista.

Siksi sama puhelin voi toimia talvella täydellisesti ja tuntua heinäkuussa vialliselta. Sama laite. Eri lähtötilanne.

Auto on pahin arkinen esimerkki. Google varoittaa Pixel-käyttäjiä altistamasta laitetta yli 45 °C:n lämpötilalle esimerkiksi auton kojelaudalla tai lämmittimen lähellä. Pysäköityyn autoon jätetyn puhelimen ei tarvitse olla latauksessa tai pyörittää peliä, jotta akku vanhenisi. Pelkkä kuumuus riittää.

## Kylmyys toimii eri tavalla

Kylmä tekee litiumioniakuista hitaita. Puhelin voi näyttää vähemmän käytettävissä olevaa varausta, toimia hitaasti tai sammua odotettua aikaisemmin. Suuri osa ilmiöstä poistuu, kun laite lämpenee uudelleen.

Lataaminen pakkasessa on kylmän sään todellinen riski. Kun litiumioniakkua ladataan alle 0 °C:ssa, anodille voi muodostua metallista litiumia, ja vaurio on pysyvä. Useimmat nykyaikaiset puhelimet yrittävät estää tämän, mutta rajaa ei kannata kokeilla. Jos puhelin on ollut ulkona pakkasessa, anna sen lämmetä yli 0 °C:n ja mieluiten lähelle huoneenlämpöä ennen lataamista.

## Pitkä lämpö rasittaa enemmän kuin lyhyt piikki

Akun vanheneminen ei ala yhdestä jyrkästä rajasta. Akku ei ole täydellinen 39 °C:ssa ja pilalla 40 °C:ssa. Lämpö nopeuttaa kemiallisia sivureaktioita, etenkin kun akku on samalla lähes täynnä.

Puhelin, joka nousee pikalatauksessa viideksi minuutiksi 42 °C:seen ja laskee sitten takaisin 30 °C:seen, on todennäköisesti kunnossa. Puhelin, joka pysyy koko yön 38 °C:ssa langattomalla laturilla suojakuoren sisällä pehmeällä alustalla, aiheuttaa hiljaisempaa mutta jatkuvampaa kulumista. Pienempi luku voi olla pahempi, koska se kestää pidempään.

Tämä jää monelta huomaamatta. Huippulämpötilalla on merkitystä, mutta lämpimänä vietetty aika merkitsee enemmän.

## Mitä tehdä, kun lukema on korkea?

Siirrä puhelin pois suorasta auringonvalosta. Irrota laturi. Poista suojakuori. Sulje raskas sovellus. Aseta puhelin kovalle alustalle niin, että ilma kiertää sen ympärillä.

Kun laite on jäähtynyt, selvitä syy. Oliko kyse pikalatauksesta, langattomasta latauksesta, pelistä, navigoinnista autotelineessä, tuoreesta Android 17 -päivityksestä Pixelissä vai päivityksen jälkeen jumiutuneesta taustasovelluksesta? Ratkaisu riippuu toistuvasta kuviosta.

Jos puhelin nousee tavallisessa käytössä 45 °C:seen tai korkeammalle tai saavuttaa joskus 50 °C:n ilman selvää syytä, pidä sitä huoltotarpeen merkkinä asetusten sijaan.

---

*Metakuvaus: Puhelimen lämpötilaan vaikuttavat ympäristön lämpö, akun lämpötila, lataaminen ja kuormitus. Alle 35 °C on yleensä normaali, yli 40 °C vaatii huomiota eikä 45 °C:n tai korkeamman lämpötilan pitäisi olla tavallista.*
