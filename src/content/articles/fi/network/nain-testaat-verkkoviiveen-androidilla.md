---
title: "Näin testaat verkkoviiveen Androidilla"
description: "Olet videopuhelussa. Kaikki kuulevat sinut, kuva näyttää hyvältä, mutta keskustelu tuntuu silti olevan puoli sekuntia myöhässä. Se on viivettä. Latausnopeus saa suurimman huomion, mutta viive ratkaisee, tuntuuko yhteys reagoivan nopeasti."
listSummary: "Olet videopuhelussa."
hub: "network"
sourceNumber: 103
order: 14
tags: ["verkko","yhteydet","android","vianetsintä","opas"]
locale: "fi"
draft: false
---
Viive mitataan millisekunteina (ms), ja pienempi arvo on parempi. Kolme tärkeintä lukua ovat ping, viivevaihtelu eli jitter ja pakettihävikki. Ping on edestakainen aika puhelimesta palvelimelle ja takaisin. Jitter kertoo, kuinka paljon tämä aika vaihtelee pyyntöjen välillä. Pakettihävikki on niiden datapakettien osuus, jotka eivät koskaan saavu perille.

Yhteys, jonka latausnopeus on 100 Mbps ja ping 150 ms, voi tuntua huonommalta kuin 20 Mbps:n yhteys, jonka ping on 15 ms. Ajatus kuulostaa nurinkuriselta, kunnes kokeilet verkkopeliä, videopuhelua tai etätyöpöytää. Nopeus siirtää dataa. Viive määrää reagointiajan.

## Mitä luvut tarkoittavat

Nämä alueet ovat käytännön suuntaviivoja, eivät luonnonlakeja. Testipalvelin, käytössä oleva verkko ja jopa vuorokaudenaika voivat muuttaa tulosta.

Ping:

- 0-20 ms: Erinomainen. Kilpapelit, videopuhelut ja etätyö tuntuvat välittömiltä.
- 20-50 ms: Hyvä. Tämä riittää lähes kaikkeen, myös satunnaiseen pelaamiseen ja puheluihin.
- 50-100 ms: Käyttökelpoinen. Selaaminen ja suoratoisto toimivat edelleen, mutta nopeat verkkopelit alkavat tuntua viiveisiltä.
- Yli 100 ms: Viive huomaa selvästi. Puheluihin voi tulla kiusallisia taukoja ja reaaliaikaisista peleistä turhauttavia.

Alle 30 ms:n jitter on yleensä ongelmaton. Välillä 30-50 ms puhelut ja suorat videolähetykset voivat alkaa nykiä. Yli 50 ms:n arvolla yhteys voi tuntua epävakaalta, vaikka nopeus näyttäisi suurelta.

Pakettihävikki antaa vähemmän anteeksi. Jo yli 1-2 % voi aiheuttaa äänen katkeilua, kuvan jäätymistä tai pelihahmon pomppimista takaisin. Ei, nopeampi liittymä ei automaattisesti korjaa pakettihävikkiä.

## Aloita nopeustestillä

Helpoin ensimmäinen tarkistus on nopeustesti, joka ilmoittaa myös viiveen. Tee sama testi kahdesti, ensin Wi-Fi-yhteydellä ja sitten mobiilidatalla. Jos vain toinen yhteys näyttää huonolta, olet jo rajannut ongelmaa.

### Googlen nopeustesti ja M-Lab

Hae puhelimen Chromessa sanoilla "speed test". Googlen sisäinen testi käyttää Measurement Labia eli M-Labia. M-Labin NDT-testi mittaa lähetys- ja latausnopeutta sekä viiveeseen liittyviä arvoja.

runcheck käyttää sisäisessä nopeustestissään M-Labin NDT7-protokollaa. Hyödyllinen osa on asiayhteys: tuloksen yhteyteen tallennetaan yhteystyyppi, signaalin voimakkuus, ping, jitter sekä lähetys- ja latausnopeus. Sinun ei siis tarvitse muistella, syntyikö huono tulos Wi-Fi-, LTE- vai 5G-yhteydellä.

### Speedtest by Ookla

Speedtest by Ookla on edelleen tuttu vaihtoehto nopeaan mittaukseen. Se ilmoittaa pingin, jitterin sekä lataus- ja lähetysnopeuden ja antaa valita lähellä olevan palvelimen. Perustason viivemittausta varten valitse lähellä oleva palvelin. Pelin tai työpalvelun ongelmaa selvittäessä kannattaa mahdollisuuksien mukaan testata palvelimella, joka sijaitsee lähellä käyttämäsi palvelun infrastruktuuria.

### Fast.com

Fast.com on Netflixin nopeustesti. Se aloittaa latausnopeudesta, mutta "Show more info" näyttää myös lähetysnopeuden ja viiveen. Kiinnitä huomiota kuormitettuun viiveeseen. Kuormittamaton viive mittaa yhteyttä silloin, kun se on rauhallinen. Kuormitettu viive mitataan liikenteen aikana, mikä vastaa paremmin tilannetta, jossa joku suoratoistaa videota, synkronoi kuvia tai lataa pelipäivitystä samassa verkossa.

## Käytä ping-työkalua pidempään mittaukseen

Nopeustesti on tilannekuva. Muutaman minuutin ping-testi kertoo, pysyykö viive vakaana.

PingTools Network Utilities voi tehdä ping-, traceroute- ja DNS-testejä sekä muita verkkotarkistuksia samassa sovelluksessa. Yksinkertaista viivemittausta varten voit pingata vakaata kohdetta, kuten `1.1.1.1` tai `8.8.8.8`. Jos selvität tietyn pelin tai työpalvelun ongelmaa, käytä palvelun julkaisemaa osoitetta, jos sellainen on saatavilla.

Termux sopii tähän, jos komentorivi on tuttu. Asenna Termux virallisesta lähteestä ja tarvittaessa ping-työkalu:

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

Yhteenveto näyttää pienimmän, keskimääräisen ja suurimman arvon sekä vastausten vaihtelun. Juuri vaihtelua kannattaa tarkkailla. Yhteys, joka pomppii 20 ms:sta 250 ms:iin ja takaisin, tuntuu huonommalta kuin tasaisesti 60 ms:ssa pysyvä yhteys.

## Testaa viive kuormituksen aikana

Lepotilan viive voi johtaa harhaan. Reititin saattaa näyttää 12 ms, kun verkko on rauhallinen, ja hypätä 300 ms:iin heti kun kannettava alkaa lähettää kuvia pilveen.

Syynä on usein bufferbloat eli puskureiden liiallinen täyttyminen. Verkkolaite päästää jonot kasvamaan sen sijaan, että se hallitsisi liikennettä hallitusti. Ongelma näkyy selvimmin lähetyksissä, videovarmuuskopioissa, pilvisynkronoinnissa ja suurissa latauksissa.

Kokeile tätä yksinkertaista testiä:

1. Mittaa viive, kun kukaan muu ei käytä verkkoa.
2. Käynnistä toisella laitteella suuri lataus tai lähetys.
3. Tee sama viivemittaus uudelleen.

Jos ping nousee voimakkaasti kuormituksen aikana, puhelin ei todennäköisesti ole pääsyyllinen. Reititin, modeemi tai operaattoriyhteys ei hallitse jonoja hyvin. Reitittimen QoS-asetukset voivat auttaa, mutta SQM (Smart Queue Management) on parempi korjaus silloin, kun reititin tukee sitä.

Myös Waveform Bufferbloat Test kannattaa tehdä puhelimen selaimella. Se arvioi, kuinka paljon viive kasvaa lataus- ja lähetyskuormassa. Arvosana A tai B on yleensä hyvä. D tai F tarkoittaa, että reaaliaikaiset sovellukset kärsivät verkon ollessa kiireinen.

## Vertaa Wi-Fi-yhteyttä ja mobiilidataa

Molempien verkkojen testaaminen on nopein tapa välttää arvailua.

Wi-Fi-viiveeseen vaikuttavat etäisyys reitittimestä, häiriöt, reitittimen laatu, kanavaruuhka ja taajuusalue. 5 GHz:n alueella on lyhyellä etäisyydellä yleensä vähemmän häiriöitä ja pienempi viive kuin 2,4 GHz:n alueella, mutta sen kantama on lyhyempi. Wi-Fi 6 ja Wi-Fi 6E voivat auttaa ruuhkaisessa verkossa vain, jos sekä puhelin että reititin tukevat niitä.

Mobiiliverkon viiveeseen vaikuttavat signaalin laatu, tukiaseman kuormitus, operaattorin reititys ja se, käyttääkö puhelin LTE:tä, alle 6 GHz:n 5G:tä vai 5G mmWavea. Karkeat käytännön alueet ovat seuraavat:

- 4G LTE: usein noin 30-60 ms, ruuhkaisessa tukiasemassa enemmän.
- Alle 6 GHz:n 5G: usein noin 15-40 ms.
- 5G mmWave: voi olla tätäkin nopeampi, mutta kuuluvuus on rajallinen ja esteet vaimentavat sitä helposti.
- 3G: liian hidas ja epävakaa nykyisiin reaaliaikaisiin käyttötapoihin.

Nämä eivät ole lupauksia. Puhdas LTE-yhteys voi voittaa ruuhkaisen 5G-yhteyden, ja kahden seinän läpi tuleva heikko Wi-Fi voi hävitä mobiilidatalle selvästi.

Androidissa aktiivisen mobiiliverkkotyypin voi tarkistaa tilapalkista tai asetusten SIM-tilatiedoista. Tarkka polku vaihtelee valmistajan mukaan. Suuren käyttöjärjestelmäpäivityksen, kuten tuetun Pixel-laitteen Android 17 -päivityksen jälkeen, verkkotyyppi kannattaa tarkistaa uudelleen ennen kuin epäilet laitteistovikaa, sillä operaattoriasetukset ja verkkokäyttäytyminen voivat muuttua ohjelmistopäivityksen mukana.

## Mikä kasvattaa viivettä

Palvelimen etäisyys on tylsä vastaus, mutta sillä on väliä. Omassa kaupungissa sijaitseva palvelin voi vastata alle 10 ms:ssa. Valtameren toisella puolella oleva palvelin voi viedä 120 ms tai enemmän, vaikka yhteys olisi muuten täydellinen.

Seuraava syy on ruuhka. Liian monta laitetta samassa Wi-Fi-verkossa, kerrostalon ruuhkainen kanava tai täynnä oleva mobiilitukiasema lisäävät viivettä. Iltaisin tulokset ovat usein aamua huonompia.

VPN lisää yhteyteen yhden reititysvaiheen. Lähellä sijaitseva VPN-palvelin voi lisätä vain 10-20 ms, kaukana oleva paljon enemmän. Katkaise VPN ja testaa uudelleen ennen kuin päätät puhelimen olevan hidas.

Myös taustaliikenne vaikuttaa. Pilvivarmuuskopiointi, sovelluspäivitykset, kuvien synkronointi ja suoratoisto voivat kasvattaa viivettä, etenkin kotiyhteydellä, jonka lähetysnopeus on rajallinen.

## Mitä tuloksesta kannattaa päätellä

Jos viive on huono vain Wi-Fi-yhteydellä, käynnistä reititin uudelleen, siirry lähemmäs sitä, vaihda 5 GHz:n verkkoon ja kokeile vähemmän ruuhkaista kanavaa. Jos viive kasvaa vain verkon ollessa kuormitettu, tarkista reitittimen QoS- tai SQM-tuki.

Jos viive on huono vain mobiilidatalla, vertaa signaalin voimakkuutta eri paikoissa. Kytke lentotila päälle ja pois, jotta puhelin muodostaa uuden tukiasemayhteyden. Jos ongelma alkoi heti järjestelmäpäivityksen jälkeen, tarkista operaattoriasetusten ja järjestelmän saatavilla olevat päivitykset.

Jos viive on huono kaikkialla, testaa toinen puhelin samoissa verkoissa. Kun kaksi puhelinta näyttää saman viiveen, ongelma on verkossa. Kun vain yksi puhelin kärsii siitä, voit alkaa tarkistaa VPN-asetuksia, taustasovelluksia, ylikuumenemista tai mahdollista radiolaitteiston vikaa.

## Usein kysyttyä

### Onko ping sama asia kuin viive?

Teknisesti viive tarkoittaa yksisuuntaista viivettä ja ping edestakaista aikaa. Tavallisessa puhelimen vianmäärityksessä sanoja käytetään lähes toistensa synonyymeina, koska sovellukset ilmoittavat edestakaisen ping-arvon.

### Voiko Android-puhelimen pingiä pienentää?

Palvelimen etäisyyttä et voi muuttaa, mutta vältettävissä olevaa viivettä voi poistaa. Katkaise hidas VPN, sulje paljon kaistaa käyttävät taustasovellukset, käytä 5 GHz:n Wi-Fiä lähellä reititintä ja korjaa reitittimen bufferbloat-ongelma, jos viive kasvaa kuormituksessa.

### Miksi nopeus on suuri mutta peli viiveinen?

Koska latausnopeus ja viive ovat eri ongelmia. Nopeassakin yhteydessä voi olla paljon jitteriä, pakettihävikkiä tai kuormitettua viivettä. Peleille ajoituksen tasaisuus merkitsee enemmän kuin raakanopeus megabitteinä sekunnissa.

### Kuinka usein viivettä kannattaa testata?

Testaa eri vuorokaudenaikoina muutaman päivän ajan. Yksi tulos on vain tilannekuva. Kolme tai neljä mittausta Wi-Fi-yhteydellä ja mobiilidatalla kertoo jo, onko ongelma jatkuva.
