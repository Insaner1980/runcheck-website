---
title: "Miksi puhelimeni Wi-Fi-yhteys katkeilee?"
description: "Ärsyttävin tilanne on tämä: Wi-Fi toimii keittiössä, katkeaa makuuhuoneessa, yhdistyy uudelleen kymmeneksi sekunniksi ja häviää taas. Mikään ei näytä olevan selvästi rikki. Reititin on päällä, salasana on oikein ja sovellukset valittavat vain, ettei internetyhteyttä ole."
listSummary: "verkko, yhteydet ja android"
hub: "network"
sourceNumber: 95
order: 6
tags: ["verkko","yhteydet","android","vianetsintä","opas"]
locale: "fi"
draft: false
---
Aloita yhdestä kysymyksestä: katkeaako yhteys myös muilta samaan Wi-Fi-verkkoon liitetyiltä laitteilta? Jos katkeaa, tutki ensin reititintä tai internetyhteyttä. Jos vain puhelin putoaa verkosta, vika on todennäköisemmin puhelimessa, tallennetussa verkkoprofiilissa tai tavassa, jolla laite vaihtaa taajuusalueelta toiselle.

## Jos useiden laitteiden yhteys katkeaa, epäile ensin reititintä

Käynnistä reititin uudelleen ennen kuin teet mitään monimutkaisempaa. Irrota virtajohto, odota 30 sekuntia ja kytke virta takaisin. Tämä tyhjentää tilapäisen tilan, uudistaa DHCP-varauksia ja pakottaa laitteet neuvottelemaan yhteyden uudelleen.

Kuluttajareitittimet alkavat joskus käyttäytyä oudosti oltuaan viikkoja käynnissä. Muisti voi täyttyä, vanhoja laitetietoja voi jäädä roikkumaan tai verkkovierailu voi toimia huonosti laiteohjelmistopäivityksen jälkeen. Uudelleenkäynnistys ei korjaa syvempää vikaa, mutta sillä selviää nopeasti, oliko kyse tilapäisestä reititinongelmasta.

Jos ongelma palaa, avaa reitittimen hallintasivu tai sovellus. Tarkista laiteohjelmistopäivitykset, yhdistettyjen laitteiden määrä ja kanava-asetukset. Edullinen reititin voi joutua vaikeuksiin, kun kotona on vähintään 20 aktiivista asiakaslaitetta. Puhelimet, tietokoneet, älytelevisiot, kaiuttimet, kamerat, pistorasiat, kellot ja tabletit lasketaan kaikki mukaan.

Myös 2,4 GHz:n taajuusalue aiheuttaa usein ongelmia. Sen kantama on 5 GHz:n verkkoa pidempi, mutta puhtaita kanavia on paljon vähemmän. Kerrostaloissa monet reitittimet voivat kilpailla samalla tai päällekkäisillä kanavilla. Jos valitset kanavan käsin, kanavat 1, 6 ja 11 ovat tavallinen lähtökohta 20 MHz:n kanavaleveydellä. Valitse niistä vähiten ruuhkainen.

## Jos vain puhelimen yhteys katkeaa

Poista verkko tallennetuista verkoista ja yhdistä uudelleen. Pixelissä ja lähellä vakio-Androidia olevissa versioissa polku on tavallisesti `Settings > Network & internet > Internet`. Avaa Wi-Fi-verkon vieressä oleva asetuskuvake ja valitse `Forget`. Samsungissa polku on yleensä `Settings > Connections > Wi-Fi`, minkä jälkeen avataan verkon asetuskuvake ja valitaan `Forget`. Yhdistä verkkoon uudelleen salasanalla.

Tämä poistaa tallennetun verkkoprofiilin. Siitä on apua reititin- tai salasanamuutosten, WPA2- ja WPA3-asetusten muutosten sekä vanhentuneiden yhteystietojen jälkeen.

Tarkista myös, yrittääkö puhelin siirtyä toiseen tallennettuun verkkoon. Tämä ei ole niin yleistä kuin usein ajatellaan, mutta sitä tapahtuu avointen verkkojen, kantamanlaajentimien, vierasverkkojen sekä vanhojen työpaikka- ja kahvilaverkkojen lähellä. Poista verkot, joita et enää käytä. Puhelimeen ei tarvitse kerätä museota kaikista tukiasemista, jotka se on joskus tavannut.

## Akkuasetukset voivat saada sovellukset näyttämään yhteydettömiltä

Androidin Doze-tila ja virransäästö voivat viivästyttää taustalla tapahtuvaa verkkoliikennettä, kun puhelin on käyttämättömänä. Tämä ei yleensä tarkoita, että Wi-Fi olisi sammutettu, mutta viesti-, varmuuskopiointi-, VPN- tai älykotisovellus voi käyttäytyä kuin yhteys olisi kadonnut.

Osa valmistajista rajoittaa taustatoimintaa muita tiukemmin. Xiaomi, OPPO, vivo ja jotkin OnePlus-versiot voivat olla Pixeliä aggressiivisempia. Samsungissa taustakäytön rajoitukset ja Wi-Fi-virransäästö voivat myös muuttaa puhelimen toimintaa näytön ollessa sammuksissa.

Jos katkokset tulevat näytön sammuttamisen jälkeen, tarkista ensin ongelmallisen sovelluksen asetukset. Salli sille rajoittamaton akun käyttö tai poista se nukkuvien sovellusten luettelosta. Älä poista kaikkia virransäästöominaisuuksia käytöstä koko järjestelmästä, ellet halua ladata puhelinta tavallista useammin.

## Älykäs verkonvaihto voi olla liian innokas

Monet Android-puhelimet voivat vaihtaa Wi-Fi-yhteydestä mobiilidataan, jos Wi-Fi vaikuttaa heikolta tai sillä ei ole internetyhteyttä. Ajatus on hyvä. Käytännössä hieman hidas Wi-Fi voi tuntua epävakaalta, kun puhelin vaihtaa verkkoa jatkuvasti.

Asetuksen nimi ja sijainti vaihtelevat valmistajan mukaan. Pixelin `Adaptive Connectivity` ei ole sama toiminto, vaan Google kuvaa sen 5G:n käytön hallinnaksi. Jos Pixelissä näkyy Internet-asetuksissa erillinen automaattisen verkonvaihdon asetus, kokeile sen poistamista käytöstä. Samsungissa polku on `Settings > Connections > Wi-Fi > Intelligent Wi-Fi`, ja testattava asetus on `Switch to mobile data`.

Poista toiminto käytöstä päiväksi, jos puhelin jättää Wi-Fi-verkon vaikka muut laitteet pysyvät yhdistettyinä. Jos ongelma loppuu, syy löytyi.

## Taajuusohjaus ja mesh-verkon verkkovierailu

Monet reitittimet käyttävät samaa verkkonimeä 2,4 GHz:n ja 5 GHz:n taajuusalueille. Reititin ja puhelin päättävät silloin, kumpaa käytetään. Tätä kutsutaan taajuusohjaukseksi eli band steeringiksi. Hyvä reititin hoitaa sen huomaamattomasti. Huono reititin voi pompottaa puhelinta taajuudelta toiselle niin, että yhteys vaikuttaa rikkinäiseltä.

Nopea testi on erottaa taajuusalueet väliaikaisesti. Anna 2,4 GHz:n ja 5 GHz:n verkoille eri nimet ja yhdistä puhelin vain toiseen. Käytä 2,4 GHz:n verkkoa etäisyyden ja seinien takia, 5 GHz:n verkkoa nopeuteen reitittimen lähellä.

Mesh-järjestelmä lisää vielä yhden muuttujan. Jos puhelin pitää kiinni heikosta mesh-solmusta eikä vaihda lähempään, yhteys voi katkeilla liikkuessasi asunnossa. Reitittimen laiteohjelmistopäivitykset parantavat verkkovierailua usein, mutta myös sijoitus ratkaisee. Television taakse tai kaappiin piilotettu mesh-solmu on huono lähtökohta.

## Signaalin voimakkuus ja reitittimen sijoitus

Wi-Fi-signaali heikkenee etäisyyden ja esteiden mukana. Jos puhelin toimii reitittimen lähellä mutta katkeilee kahden huoneen päässä, puhelin ei välttämättä ole rikki. Signaali on vain heikko tai häiriöinen.

Karkeana ohjeena noin -50 dBm on vahva Wi-Fi-signaali, -60 dBm on hyvä ja alle -70 dBm:n kohdalla yhteyden vakaus voi alkaa kärsiä. Alle -80 dBm:n tasolla ajoittaiset katkokset eivät ole yllätys.

Nosta reititin pois lattialta ja pidä se erossa paksuista seinistä, metallihyllyistä, akvaarioista ja mikroaaltouuneista. Sijoita se mahdollisuuksien mukaan kodin keskiosaan. Suuressa kodissa kunnollinen mesh-järjestelmä on yleensä halpaa kantamanlaajenninta parempi, koska laajennin usein pienentää tiedonsiirtonopeutta ja lisää uuden verkkovierailukohdan.

## Suojausasetukset voivat aiheuttaa ongelman vain yhdelle laitteelle

WPA3 on nykyinen Wi-Fi-suojausstandardi, mutta vanhemmat puhelimet ja vanha reitittimen laiteohjelmisto voivat toimia huonosti pelkkää WPA3:a käyttävässä verkossa. Jos yksi Android-puhelin katkeilee WPA3-verkossa muiden laitteiden toimiessa normaalisti, kokeile WPA2/WPA3-yhdistelmätilaa.

Tarkista myös MAC-suodatus, lapsilukkoasetukset ja reitittimen laiterajat. Jos reititin käyttää MAC-osoitteisiin perustuvaa sallittujen laitteiden luetteloa, Androidin satunnaistettu MAC-osoite voi näyttää uudelta laitteelta. Luotetussa kotiverkossa voit vaihtaa vain kyseisen verkon tietosuoja-asetuksesta puhelimen tai laitteen MAC-osoitteen käyttöön. Pidä satunnaistettu MAC-osoite käytössä julkisissa verkoissa.

## Ohjelmistopäivitykset, myös Android 17

Suuret Android-päivitykset voivat tuoda yhteysvikoja. Ne voivat myös paljastaa vanhan reititinongelman, joka oli jo olemassa. Android 17 julkaistiin ensin useimmille tuetuille Pixel-laitteille kesäkuussa 2026, ja muut valmistajat toimittavat sen myöhemmin omien ohjelmistoversioidensa mukana. Pixelin Android 17 -ongelmaa käsittelevä keskustelu ei siis välttämättä koske Samsung-, Xiaomi- tai OnePlus-puhelinta, joka ei ole vielä saanut omaa Android 17 -versiotaan.

Jos Wi-Fi alkoi katkeilla heti päivityksen jälkeen, tee ensin tylsät tarkistukset: käynnistä puhelin ja reititin uudelleen, asenna odottavat Google Play -järjestelmäpäivitykset ja kuukausittaiset tietoturvapäivitykset sekä poista verkko tallennetuista verkoista. Nollaa verkkoasetukset vasta tarvittaessa.

Pixelissä ja monissa uusissa Android-versioissa avaa `Settings > System > Reset options`. Uusissa Pixel-versioissa Wi-Fi ja Bluetooth nollataan valinnalla `Reset Bluetooth & Wi-Fi`, ja mobiiliverkkoasetuksille on erillinen palautus. Samsungin uusissa One UI -versioissa vastaavat valinnat ovat tavallisesti `Reset Wi-Fi and Bluetooth settings` ja `Reset mobile network settings`. Vanhemmissa laitteissa toiminnot voivat olla yhden verkkoasetusten nollauksen alla. Nollaus poistaa tallennetut Wi-Fi-verkot ja Bluetooth-paritukset, joten pidä Wi-Fi-salasanat saatavilla.

## Milloin vika voi olla laitteistossa

Laitteisto on viimeinen epäilty, ei ensimmäinen. Vika on silti mahdollinen. Pudotus, kosteus, kuluneet antenniliitännät tai piirilevyvaurio voivat rikkoa Wi-Fi-yhteyden, vaikka muut radiot näyttäisivät toimivan normaalisti.

Testaa puhelinta toisessa Wi-Fi-verkossa. Kokeile sen jälkeen vikasietotilaa. Jos yhteys pysyy vakaana vikasietotilassa, jokin kolmannen osapuolen sovellus todennäköisesti häiritsee sitä. Tavallisia epäiltyjä ovat VPN:t, mainosten estäjät, palomuurisovellukset, laitehallintasovellukset ja kyseenalaiset Wi-Fi-optimointisovellukset.

Jos puhelin katkeilee useissa reitittimissä, jatkaa samaa verkkoasetusten nollauksen jälkeen ja katkeilee myös vikasietotilassa, ammattilaisen tekemä huolto tai puhelimen vaihtaminen alkaa olla realistinen ratkaisu.

## Nopeat vastaukset

Miksi Wi-Fi katkeaa vain näytön ollessa sammuksissa? Syynä ovat yleensä sovelluksen akkurajoitukset, VPN:n toiminta tai valmistajan virransäästö. Wi-Fi-radio voi edelleen olla yhdistettynä, vaikka sovellus ei saa jatkaa taustalla.

Voiko puhelimen suojakuori aiheuttaa Wi-Fi-katkoksia? Tavallinen muovi-, silikoni- tai nahkakuori ei juuri vaikuta. Metallikuori tai magneettilevy voi heikentää signaalia, etenkin jos yhteys on jo valmiiksi heikko.

Miksi vain yksi Wi-Fi-verkko ei toimi? Se viittaa reitittimen asetuksiin tai vioittuneeseen tallennettuun verkkoprofiiliin. Poista verkko, yhdistä uudelleen ja tarkista sitten taajuusohjaus, WPA-tila, MAC-suodatus ja reitittimen laiteohjelmisto.
