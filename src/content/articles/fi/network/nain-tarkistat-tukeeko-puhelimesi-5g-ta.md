---
title: "Näin tarkistat, tukeeko puhelimesi 5G:tä"
description: "Näin selvität, tukeeko Android-puhelin 5G:tä, miksi 5G-kuvake ei välttämättä näy ja miten taajuudet, liittymä sekä operaattorin tuki vaikuttavat asiaan."
listSummary: "verkko, yhteydet ja android"
hub: "network"
sourceNumber: 101
order: 12
tags: ["verkko","yhteydet","android","vianetsintä","opas"]
locale: "fi"
draft: false
---
Puhelimessa joko on 5G-laitteisto tai ei ole. Android 17, operaattoriasetusten päivitys tai uusi SIM-kortti ei muuta pelkkää 4G:tä tukevaa modeemia 5G-modeemiksi.

Tämä kuulostaa itsestään selvältä, mutta aiheuttaa paljon sekaannusta. Monet uudetkin edulliset Android-puhelimet tukevat vain 4G:tä, kun taas useissa vanhemmissa huippumalleissa on jo 5G. Tarkka mallinumero kertoo enemmän kuin kuitissa näkyvä ostovuosi.

## Tarkista ensin verkkoasetukset

Nopein tarkistus löytyy Androidin asetuksista.

Pixelissä ja monissa lähes vakio-Androidia käyttävissä puhelimissa avaa `Settings > Network & internet > SIMs`, valitse SIM ja sitten `Preferred network type`. Jos valikossa näkyy `5G`, `NR` tai `5G/LTE`, puhelin tukee 5G:tä kyseisellä ohjelmistoversiolla ja operaattoriprofiililla.

Samsungissa tarkista `Settings > Connections > Mobile networks > Network mode`.

Xiaomissa ja POCOssa tarkista `Settings > SIM cards & mobile networks > Preferred network type`.

OnePlus-puhelimessa asetus löytyy yleensä kohdasta `Settings > Mobile network` ja sen alta SIM-kortin tai ensisijaisen verkkotyypin valikosta.

Jos korkein vaihtoehto on LTE, 4G, 3G tai 2G, puhelin voi olla pelkkä 4G-malli. Sana `voi` on tässä olennainen, sillä jotkin operaattorit piilottavat 5G-asetuksen, jos liittymä, SIM tai alue ei tue sitä. Puhelimen tarkat tekniset tiedot ratkaisevat asian.

## Tarkista tarkka mallinumero

Avaa `Settings > About phone` ja merkitse muistiin mallinumero, ei vain markkinointinimeä. `Galaxy A55 5G` ja jonkin muun A-sarjan puhelimen alueellinen versio voivat tukea eri verkkoja. Sama koskee monia Xiaomin, Motorolan, OPPO:n ja Vivon puhelimia.

Hae mallinumerolla ensin valmistajan omalta tuotesivulta. GSMArena on hyödyllinen nopeaan tarkistukseen, mutta ristiriitatilanteessa valmistajan sivu on parempi lähde.

Etsi verkkotiedoista `5G NR` -taajuusalueet. Yleisiä alle 6 GHz:n 5G-alueita ovat maasta ja operaattorista riippuen n28, n41, n71, n77 ja n78. Suomessa 5G:tä käytetään muun muassa 700 MHz:n ja 3,5 GHz:n taajuusalueilla, jotka laitetiedoissa näkyvät tavallisesti n28- ja n78-tukena. mmWave-alueita, kuten n260 ja n261, käytetään harvemmissa verkoissa ja yleensä vain tietyissä puhelinversioissa.

Jos teknisissä tiedoissa luetellaan vain GSM-, WCDMA-, LTE- tai 4G-taajuuksia, puhelin ei tue 5G:tä.

## 5G-puhelin tarvitsee lisäksi kolme muuta asiaa

Laitteisto on vasta ensimmäinen vaihe.

Tarvitset myös liittymän, johon sisältyy 5G-yhteys. Joissakin liittymissä se on automaattisesti mukana, mutta kaikissa prepaid-, vanhoissa, yritys- tai virtuaalioperaattorien liittymissä näin ei välttämättä ole.

Tarvitset 5G-kuuluvuuden siinä paikassa, jossa olet. Operaattorin kuuluvuuskartta on hyvä lähtökohta, ei lupaus. Sisäkuuluvuus voi olla paljon ulkokuuluvuutta heikompi, etenkin korkeammilla 5G-taajuuksilla.

Tarvitset myös yhteensopivat taajuudet. Tämä unohtuu helposti. Toiselta alueelta tuotu puhelin voi tukea 5G:tä yhdessä maassa mutta siitä voi puuttua oman operaattorisi käyttämä taajuus. Laite voi siis olla `5G capable` ja toimia silti omassa verkossasi käytännössä 4G-puhelimena.

## Tarkista tilapalkki, mutta älä luota siihen liikaa

Kun puhelin on yhteydessä 5G-verkkoon, tilapalkissa näkyy yleensä `5G`. Operaattorin ja maan mukaan merkintä voi olla myös `5G+`, `5G UW` tai `5G UC`.

5G-kuvakkeen puuttuminen ei automaattisesti tarkoita, ettei puhelin tukisi 5G:tä. Saatat olla kuuluvuusalueen ulkopuolella, rakennuksessa joka vaimentaa signaalin, pelkkää 4G:tä tukevalla liittymällä, väärällä SIM-profiililla tai operaattorin verkossa, joka estää 5G:n toisessa SIM-paikassa.

Jos näet joskus merkinnän `5G E`, kyse on LTE-brändäyksestä, ei oikeasta 5G:stä. Yhdysvaltalainen AT&T käytti tätä nimeä parannetusta 4G LTE -palvelusta, mikä on hämmentänyt käyttäjiä jo vuosien ajan.

## Tarkista suoritin, mutta älä lopeta siihen

SoC antaa yleensä vihjeen siitä, onko 5G ylipäätään mahdollinen. Qualcomm Snapdragon 480 ja uudemmat 5G-merkityt piirit, monet Snapdragon 6-, 7- ja 8 Gen -piirit, MediaTek Dimensity -piirit, Samsung Exynos 1280 ja uudemmat keskihintaiset tai huippuluokan 5G-piirit sekä kaikki Google Tensor -piirit ovat tavallisia 5G-esimerkkejä.

Suoritinten nimet ovat silti sekavia. Osa Snapdragon 600 -sarjan piireistä tukee vain 4G:tä. Joissakin puhelimissa käytetään 5G-valmista alustaa, mutta laitteesta myydään myös 4G-versiota. MediaTek Helio G -sarjan puhelimet ovat yleensä 4G-malleja, kun taas MediaTek Dimensity on yhtiön 5G-mallisto.

Käytä suoritinta vihjeenä ja tarkista sen jälkeen koko puhelinmalli sekä tuetut taajuudet.

## Android 17 ei muuta laitteistorajoitusta

Android 17 julkaistiin useimmille tuetuille Pixel-laitteille kesäkuussa 2026, ja uusia Android 17 -laitteita tulee myöhemmin muilta valmistajilta. Päivitys voi parantaa modeemin laiteohjelmistoa, operaattorikäyttäytymistä ja yhteyden vakautta puhelimissa, jotka jo tukevat näitä verkkoja.

Se ei voi lisätä 5G:tä 4G-modeemiin. Jos puhelin ei tukenut 5G:tä ennen Android 17 -päivitystä, se ei tue sitä päivityksen jälkeenkään.

## SA- ja NSA-5G

5G-verkkoja toteutetaan kahdella päämenetelmällä.

NSA eli Non-Standalone 5G käyttää 5G-radiota yhdessä 4G-runkoverkon kanssa. Sen avulla operaattorit pystyivät rakentamaan 5G-verkkoja nopeammin.

SA eli Standalone 5G käyttää 5G-runkoverkkoa. Se voi parantaa viivettä ja verkon tehokkuutta sekä mahdollistaa tulevia ominaisuuksia, mutta käyttöönotto vaihtelee edelleen operaattoreittain.

Tavallisessa selaamisessa, kartoissa, viesteissä tai videoissa useimpien ei tarvitse pohtia SA:n ja NSA:n eroa. Sillä on enemmän merkitystä, jos operaattori siirtää ominaisuuksia SA-verkkoon, käytössä on varhaisen sukupolven 5G-puhelin tai tarvitset mahdollisimman pienen viiveen.

## Miksi 5G-puhelin näyttää aina LTE:tä

Käy nämä kohdat läpi järjestyksessä:

- Varmista, että `Preferred network type` sisältää 5G:n tai NR:n.
- Tarkista, että liittymään sisältyy 5G.
- Tarkista operaattorin kuuluvuuskartasta juuri kyseinen sijainti.
- Mene ulos tai ikkunan lähelle, jotta voit sulkea pois rakennuksen aiheuttaman signaalihäviön.
- Varmista, että SIM- tai eSIM-liittymä on aktiivinen ja valittu dataliittymäksi.
- Tarkista, poistaako kahden SIM-kortin tila 5G:n käytöstä kyseisessä mallissa.
- Vertaa puhelimen 5G NR -taajuuksia operaattorin käyttämiin taajuuksiin.
- Asenna saatavilla olevat järjestelmä- ja operaattoripäivitykset.

Jos kaikki näyttää oikealta eikä puhelin silti koskaan löydä 5G:tä, kokeile saman operaattorin toista SIM-korttia tai pyydä operaattoria päivittämään liittymän verkkoprofiili.

## Kannattaako 5G:n vuoksi päivittää puhelin?

Joskus. Se on rehellinen vastaus.

Kaupungissa, jossa keskitaajuinen 5G toimii hyvin, nopeusero voi olla selvä. Lataukset valmistuvat nopeammin, yhteyden jakaminen toimii paremmin ja viive voi pienentyä. Verkoissa, joissa mmWave on käytössä, nopeus voi olla vielä suurempi, mutta kuuluvuus on rajallinen. Maaseudulla, jossa 5G on heikko tai katkonainen, hyvä 4G-yhteys voi tuntua paremmalta kuin puhelin, joka vaihtelee jatkuvasti LTE:n ja 5G:n välillä.

Jos nykyinen puhelin toimii hyvin ja alueesi 5G-kuuluvuus on heikko, älä vaihda laitetta pelkän kuvakkeen vuoksi. Päivitä koko puhelimen takia: akun, kameran, päivitystuen, tallennustilan, RAM-muistin ja modeemin laadun.
