---
title: "Miksi puhelimen internetyhteys on niin hidas?"
description: "Miksi yksi puhelin matelee, vaikka vieressä oleva kannettava lataa sivut normaalisti? Syynä on tavallisesti heikko signaali, ruuhkainen verkko tai puhelimen taustalla dataa käyttävä sovellus. Ensin pitää selvittää, mistä näistä on kyse. Satunnaisten asetusten muuttaminen ei vielä kerro mitään."
listSummary: "Miksi yksi puhelin matelee, vaikka vieressä oleva kannettava lataa sivut normaalisti?"
hub: "network"
sourceNumber: 91
order: 2
tags: ["suorituskyky","nopeus","android","optimointi","vianetsintä"]
locale: "fi"
draft: false
---
Älä aloita tehdasasetusten palautuksesta. Aloita havainnoista.

## Selvitä ensin, onko vika puhelimessa vai verkossa

Kokeile toista laitetta samassa Wi-Fi-verkossa. Jos myös kannettava tai tabletti toimii hitaasti, ongelma on todennäköisesti reitittimessä, internetoperaattorin yhteydessä tai Wi-Fi-peitossa. Jos kaikki muut laitteet toimivat hyvin ja vain puhelin takkuilee, keskity puhelimeen.

Testaa mobiilidataa useammassa kuin yhdessä paikassa. Jos puhelin on nopea kotona mutta hidas työpaikalla, syy löytyy todennäköisemmin alueen kuuluvuudesta, ruuhkasta tai rakennusmateriaaleista. Jos yhteys on hidas kaikkialla, katse kannattaa siirtää liittymään, SIM- tai eSIM-asetuksiin, radioverkon asetuksiin tai itse puhelimeen.

Tee yksi nopeustesti ja kirjaa ylös latausnopeus, lähetysnopeus ja ping-viive. Täydellisiä laboratorio-olosuhteita ei vielä tarvita. Tarvitset vain lähtötason.

## Wi-Fi-ongelmat, jotka tuntuvat hitaalta internetiltä

Etäisyys on ilmeisin syy. Seinät, lattiat, peilit, kodinkoneet ja kalusteet heikentävät Wi-Fi-signaalia. 5 GHz:n taajuusalue on lähellä reititintä nopeampi, mutta sen signaali vaimenee seinien läpi 2,4 GHz:n signaalia nopeammin. 2,4 GHz kantaa pidemmälle, mutta on hitaampi ja ruuhkaisempi.

Kanavaruuhka on tavallinen ongelma kerrostaloissa. Signaali voi olla voimakas ja suorituskyky silti heikko, koska kymmenen lähialueen reititintä kilpailee samasta kanavasta. Androidin tavalliset asetukset eivät näytä tätä kovin selvästi, joten epäily kannattaa tarkistaa Wi-Fi-analysointisovelluksella.

Liian moni aktiivinen laite voi kuormittaa etenkin edullista reititintä. Puhelin, kannettava, televisio, tabletti, pelikonsoli, valvontakamera, älykaiutin ja muutama älypistorasia ovat kaikki verkon laitteita. Ratkaisevaa ei ole vain laitteiden määrä, vaan se, kuinka moni niistä siirtää dataa samanaikaisesti.

DNS voi saada verkkosivut tuntumaan hitailta, vaikka varsinainen yhteysnopeus olisi kunnossa. Nykyisessä Androidissa järjestelmätason asetus löytyy polusta **Asetukset > Verkko ja internet > Yksityinen DNS**. Voit kokeilla palveluntarjoajan nimeä **dns.google** tai **one.one.one.one**, jos nykyinen nimipalvelu tuntuu hitaalta. Muutos voi nopeuttaa sivustojen osoitteiden selvittämistä, mutta se ei tee huonosta 5 Mbps:n yhteydestä nopeaa.

## Mobiilidatalla on omat sudenkuoppansa

Heikko mobiilisignaali ei ole sama asia kuin heikko Wi-Fi, vaikka oire tuntuu samanlaiselta. Yhden palkin yhteys voi pysyä verkossa mutta siirtää dataa tuskastuttavan hitaasti. Monissa Android-puhelimissa signaalitiedot löytyvät puhelimen tietonäkymän SIM-kortin tilatiedoista tai vastaavasta SIM-valikosta. Tarkka polku riippuu valmistajasta.

Ruuhka on todellinen ilmiö. Tukiasemalla on rajallinen kapasiteetti, jonka lähialueen käyttäjät jakavat. Nopeudet voivat laskea työmatka-aikoina, lounastauolla, stadioneilla, kauppakeskuksissa ja iltaisin asuinalueilla.

Myös liittymän nopeusluokka voi rajoittaa yhteyttä. Suomessa mobiililiittymät myydään usein tietyn enimmäisnopeuden mukaan, ja toteutuva nopeus riippuu lisäksi verkkotekniikasta, signaalista ja ruuhkasta. Tarkista operaattorin sovelluksesta tai sopimuksesta liittymäsi nopeusluokka. EU- ja ETA-roamingissa rajattomaan kotimaan dataan voi myös liittyä kohtuullisen käytön dataraja.

5G voi toimia väärässä paikassa LTE:tä huonommin. Jos puhelin yrittää jatkuvasti pitää kiinni heikosta 5G-signaalista, kokeile LTE-yhteyttä, jos puhelin ja operaattori tarjoavat tämän valinnan. Asetus löytyy tavallisesti SIM-kortin tai mobiiliverkon valikosta, mutta osa operaattoreista piilottaa sen.

## Jos ongelma alkoi Android-päivityksen jälkeen

Päivitykset voivat muuttaa modeemin laiteohjelmistoa, operaattoriasetuksia, Wi-Fi-toimintaa ja virransäästön sääntöjä. Useimmiten muutokset ovat hyödyllisiä. Joskus jälki on sotkuisempaa.

Android 17 julkaistiin 16. kesäkuuta 2026, ja Google toi sen ensin tuettuihin Pixel-laitteisiin. Muut valmistajat julkaisevat omat Android 17 -versionsa myöhemmin omien aikataulujensa mukaisesti. Jos Pixel hidastui heti Android 17 -päivityksen jälkeen, ota päivityksen ajankohta mukaan vianmääritykseen. Samsungin, OnePlussan, Xiaomin tai muun valmistajan puhelimessa ei pidä olettaa samaa Android 17:ään liittyvää käyttäytymistä ennen kuin kyseinen laite on saanut valmistajansa oman Android 17 -version.

Käynnistä puhelin kerran uudelleen suuren päivityksen jälkeen, päivitä sovellukset Google Play Kaupasta ja tarkista, onko tarjolla toinen järjestelmäpäivitys tai operaattoripalvelujen päivitys. Jos vain yksi verkko on rikki, poista kyseinen Wi-Fi-verkko tallennetuista verkoista ja yhdistä siihen uudelleen. Jos sekä Wi-Fi että mobiilidata ovat rikki, palauta verkkoasetukset sen jälkeen, kun tärkeät Wi-Fi-salasanat ovat tallessa.

## Puhelimesta johtuvat syyt

Taustalla toimivat sovellukset voivat käyttää kaistaa huomaamatta. Pilvivarmuuskopiointi, yhteisöpalvelut, podcast-sovellukset, Play Kaupan päivitykset, kuvien synkronointi ja viestisovellukset voivat ladata tai lähettää tietoja samalla, kun yrität tehdä jotain muuta.

Pixelissä sovelluskohtaisen mobiilidatan käytön tarkistus alkaa polusta **Asetukset > Verkko ja internet > SIM-kortit**. Valitse käytössä oleva SIM ja avaa datankäyttöä koskeva näkymä. Wi-Fi-datan tarkka polku vaihtelee enemmän, mutta monissa Android-versioissa sovelluskohtainen verkkokäyttö löytyy verkko-, sovellus- tai datankäyttöasetuksista. Etsi sovellus, joka käyttää dataa silloinkin, kun et itse käytä sitä.

Virransäästö voi sekin muuttaa verkkokäyttäytymistä. Se voi vähentää taustasynkronointia, viivästyttää ilmoituksia tai rajoittaa sovellusten toimintaa. Akku kestää pidempään, mutta osa sovelluksista voi tuntua hitaalta tai näyttää vanhentuneita tietoja.

VPN lisää yhteyteen yhden mahdollisen pullonkaulan. Liikenne kulkee toisen palvelimen kautta, mikä voi kasvattaa viivettä ja pienentää tiedonsiirtonopeutta. Katkaise VPN yhden testin ajaksi. Jos ongelma katoaa, syy löytyi.

Selaimen välimuisti on pienempi mutta mahdollinen ongelma. Välimuistin tyhjentäminen voi korjata sivut, jotka latautuvat vain puoliksi tai aikakatkaistuvat toistuvasti. Se ei nopeuta internetyhteyttä. Se poistaa vain vioittuneita paikallisia tietoja.

## Nopea vianmääritysjärjestys

Tee nopeustesti Wi-Fi-yhteydellä. Poista sitten Wi-Fi käytöstä ja tee testi mobiilidatalla. Älä aja kymmentä mobiilidatatestiä peräkkäin, ellet halua kuluttaa liittymän dataa turhaan.

Ota lentotila käyttöön, odota kymmenen sekuntia ja poista se käytöstä. Tämä pakottaa puhelimen muodostamaan uudelleen yhteyden sekä Wi-Fi- että mobiiliverkkoon.

Käynnistä puhelin uudelleen. Neuvo on yksinkertainen, mutta se tyhjentää tilapäisiä verkkotiloja ja jumiutuneita taustaprosesseja.

Poista ongelmallinen Wi-Fi-verkko tallennetuista verkoista ja yhdistä siihen uudelleen. Jos ongelma esiintyy vain kotona, käynnistä myös reititin uudelleen.

Tarkista sovellus- ja järjestelmäpäivitykset. Tämä on erityisen tärkeää suuren Android-päivityksen jälkeen.

Käynnistä puhelin vikasietotilaan, jos nopeus paranee uudelleenkäynnistyksen jälkeen mutta heikkenee myöhemmin uudelleen. Vikasietotila poistaa ladatut sovellukset tilapäisesti käytöstä, joten sillä voi paljastaa ongelmia aiheuttavan kolmannen osapuolen sovelluksen.

Palauta verkkoasetukset vasta viimeisenä. Monissa Android-puhelimissa polku on **Asetukset > Järjestelmä > Nollaa valinnat > Nollaa Wi-Fin, mobiiliverkon ja Bluetoothin asetukset**. Toiminto poistaa tallennetut Wi-Fi-verkot, Bluetooth-pariliitokset ja mobiiliverkon asetukset, joten sitä ei kannata painaa ensimmäisenä.

## Kun puhelin ei pysty ratkaisemaan ongelmaa

Jos mobiilidata hidastuu samalla alueella joka päivä, operaattorin verkko voi yksinkertaisesti olla siellä heikko tai ruuhkainen. Kuuluvuuskartat ovat arvioita. Rakennukset, mäet, tukiaseman kuormitus ja sisätilojen materiaalit ratkaisevat, millaisen yhteyden puhelin todella saa.

Wi-Fi-yhteydessä rajoittava tekijä on usein vanha reititin. Kymmenen vuotta vanha Wi-Fi 4 -reititin voi edelleen yhdistää nykyaikaisen puhelimen verkkoon, mutta se ei selviydy vilkkaan kodin liikenteestä yhtä hyvin kuin kunnollinen Wi-Fi 6- tai Wi-Fi 7 -järjestelmä.

runcheck ja vastaavat sovellukset auttavat tallentamalla signaalin voimakkuutta, viivettä, yhteystyyppiä ja nopeustestien historiaa. Yksi hidas testi on vihje. Toistuva kaava kertoo enemmän.
