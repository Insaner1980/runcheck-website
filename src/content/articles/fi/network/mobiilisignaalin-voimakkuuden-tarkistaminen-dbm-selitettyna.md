---
title: "Mobiilisignaalin voimakkuuden tarkistaminen (dBm selitettynä)"
description: "Signaalipalkit sopivat nopeaan vilkaisuun, mutta ne eivät ole mittaustulos. Yksi puhelin voi näyttää neljä palkkia siinä, missä toinen näyttää kahta, vaikka molemmat käyttävät samaa operaattoria samassa huoneessa. Todellisen luvun näkee signaalin voimakkuudesta dBm-arvona."
listSummary: "Signaalipalkit sopivat nopeaan vilkaisuun, mutta ne eivät ole mittaustulos."
hub: "network"
sourceNumber: 93
order: 4
tags: ["verkko","yhteydet","android","vianetsintä","opas"]
locale: "fi"
draft: false
---
Se kuulostaa teknisemmältä kuin onkaan. dBm kertoo vain sen radiotehon, jonka puhelin vastaanottaa mobiiliverkosta. Mitä lähempänä nollaa luku on, sitä voimakkaampi signaali. Lukema -75 dBm on voimakkaampi kuin -95 dBm. Siinä koko perusajatus.

## dBm-luvun nopea tulkinta

Mobiilisignaalin voimakkuus esitetään negatiivisena lukuna, koska puhelin mittaa hyvin pientä radiotehoa. Tavallisessa käytössä arvo on usein noin -50 dBm:n ja -120 dBm:n välillä. Tukiaseman lähellä lukema voi olla lähellä -50 dBm:ä. Betonirakennuksen sisäosissa, kellarissa tai kuuluvuusalueen reunalla se voi painua -110 dBm:iin tai alemmas.

Asteikko on logaritminen. Jokainen 3 dBm:n muutos vastaa suunnilleen vastaanotetun tehon kaksinkertaistumista tai puolittumista. Siksi -80 dBm ei ole vain hieman parempi kuin -86 dBm, vaan teho on noin nelinkertainen. Kyllä, oikeasti.

LTE- ja useimmissa alle 6 GHz:n 5G-yhteyksissä seuraavat alueet ovat hyödyllisiä suuntaviivoja:

| Lukema | Mitä se tavallisesti tarkoittaa |
|---|---|
| -50 - -70 dBm | Erinomainen. Puheluiden ja datan pitäisi toimia vakaasti, ellei tukiasema ole ruuhkainen. |
| -70 - -85 dBm | Hyvä. Tämä on tavallinen lukema kohtuullisessa ulkokuuluvuudessa tai ikkunan lähellä. |
| -85 - -100 dBm | Käyttökelpoinen mutta ei hyvä. Selaaminen toimii, suoratoisto voi puskuroida ja lähetysnopeus heikkenee usein ensimmäisenä. |
| -100 - -110 dBm | Heikko. Puhelut voivat katketa, tekstiviestit viivästyä ja modeemi kuluttaa enemmän virtaa yhteyden ylläpitämiseen. |
| Alle -110 dBm | Rajatapaus. Varaudu aikakatkaisuihin, hetkittäiseen verkkoyhteyden katoamiseen tai siirtymiseen toiseen verkkotekniikkaan. |

Nämä eivät ole yleispäteviä hyväksymis- tai hylkäysrajoja. Puhelin voi toimia -95 dBm:n signaalilla aivan hyvin, jos signaali on puhdas ja tukiasemassa on vapaata kapasiteettia. Toinen puhelin voi madella -75 dBm:n lukemalla, jos solu on ruuhkainen tai häiriöitä on paljon.

## Signaalin voimakkuuden tarkistaminen Androidissa

Tarkka valikko vaihtelee valmistajan, Android-version ja operaattorin ohjelmistoversion mukaan. Nopein tapa on avata Asetukset ja hakea sanoilla "SIM-kortin tila" tai "signaalin voimakkuus".

Pixelissä ja monissa lähes vakio-Androidia käyttävissä puhelimissa, myös Android 17:ää tukevissa Pixel-malleissa, signaalitiedot löytyvät tavallisesti puhelimen tietonäkymän SIM-kortin tilatiedoista. Joissakin versioissa SIM-tietoja voi avata myös polusta **Asetukset > Verkko ja internet > SIM-kortit**. Etsi signaalin voimakkuutta koskeva rivi. Se näyttää tavallisesti dBm- ja ASU-arvon.

Samsung Galaxy -puhelimessa tiedot löytyvät yleensä puhelimen tilatietojen SIM-korttia koskevasta näkymästä. One UI -version mukaan näkymän nimi voi olla esimerkiksi englanniksi **SIM card status** tai lyhyemmin **SIM status**. Jos vastaavaa kohtaa ei näy, käytä Asetusten hakua sen sijaan, että luottaisit toiselle mallille tehtyyn valikkopolkuun.

Yksi rajoitus kannattaa muistaa: Android näyttää tavallisesti sen verkkokerroksen lukeman, jota puhelin juuri sillä hetkellä käyttää. LTE-yhteydellä näkyvä arvo koskee LTE:tä. Jos puhelin käyttää 5G NR:ää, arvo voi perustua 5G:n referenssisignaalin mittauksiin sen mukaan, mitä modeemi ja operaattori antavat Androidin näyttää. LTE- ja 5G-arvot eivät aina näy rinnakkain.

## Piilotetut testivalikot

Monissa Android-puhelimissa toimii edelleen tämä numerovalitsimeen syötettävä koodi:

`*#*#4636#*#*`

Avaa Puhelin-sovellus ja syötä koodi. Näkyviin voi avautua testivalikko. Avaa puhelimen tietonäkymä, jossa voi näkyä verkkotyyppi, signaalin voimakkuus, datayhteyden tila ja muita radiotietoja. Älä muuta ensisijaisen verkon asetuksia tässä valikossa, ellet tiedä täsmälleen, mitä olet tekemässä. Kyseessä on diagnostiikkanäkymä, ei tavallinen asetussivu.

Samsung estää usein yleisen koodin. Monissa Galaxy-puhelimissa `*#0011#` avaa sen sijaan Service Mode -näkymän. Siinä voi näkyä palvelevan solun tietoja, taajuusalue ja signaalilukemia. Operaattoriversio voi poistaa kumman tahansa koodin käytöstä, joten niiden toimivuutta ei pidä pitää varmana.

## Sovellukset helpottavat mittaamista

Network Cell Info Lite, CellularZ ja Signal Strength näyttävät dBm-arvon päänäkymässä ja päivittävät sitä jatkuvasti. Niistä on hyötyä, kun kävelet kodissa, toimistossa tai pysäköintialueella ja etsit paikkaa, jossa puhelimen yhteys on oikeasti parempi.

Hyvä signaalisovellus näyttää useamman kuin yhden luvun. RSRP kertoo voimakkuudesta, kun taas RSRQ ja SINR auttavat arvioimaan, onko signaali käyttökelpoinen vai peittyykö se kohinaan.

runcheck näyttää verkon laatutiedot muiden laitteen kuntomittareiden rinnalla ja säilyttää historiaa ajan mittaan. Yksi dBm-lukema on vain tilannekuva. Historiasta näkee helpommin, onko signaali aina heikko tietyssä huoneessa, heikkeneekö yhteys vain ruuhka-aikaan vai muuttuiko tilanne äkillisesti päivityksen jälkeen.

## RSRP, RSSI, RSRQ ja SINR ilman turhaa päänvaivaa

Diagnostiikkanäkymissä vilisee samannäköisiä lyhenteitä. Ne eivät tarkoita samaa asiaa.

RSSI tulee sanoista Received Signal Strength Indicator. Sitä käytettiin yleisesti vanhemmissa 2G- ja 3G-yhteyksissä, ja arvo voi näkyä myös Wi-Fi-työkaluissa. RSSI mittaa kaiken vastaanotetun tehon, siis hyödyllisen signaalin lisäksi kohinan ja häiriöt. Siksi se ei ole selkein mobiiliverkon vianmääritysmittari.

RSRP tarkoittaa Reference Signal Received Poweria. LTE- ja 5G-yhteyksissä tämä on tavallisesti ensimmäinen signaalin voimakkuutta kuvaava arvo, jota kannattaa katsoa. Se mittaa palvelevan solun referenssisignaalia eikä kaikkea kanavalla olevaa radioenergiaa.

RSRQ tarkoittaa Reference Signal Received Qualitya. Se yhdistää voimakkuuden ja häiriöt yhdeksi laatuluvuksi. Vähemmän negatiivinen arvo on parempi. LTE:ssä noin -3 dB on erinomainen tulos, kun taas -15 dB tai -20 dB viittaa heikkoon laatuun.

SINR tarkoittaa hyötysignaalin suhdetta häiriöihin ja kohinaan, Signal to Interference plus Noise Ratio. Mitä suurempi luku, sitä parempi. Yli 20 dB on erinomainen, 10-20 dB hyvä, ja alle 0 dB tarkoittaa, että kohina ja häiriöt ovat hyödyllistä signaalia voimakkaampia.

Käytännössä tarkista ensin RSRP. Jos se on hyvä mutta data liikkuu silti hitaasti, katso seuraavaksi RSRQ- ja SINR-arvoja. Voimakas mutta heikkolaatuinen signaali on tavallinen vilkkaissa keskustoissa, kerrostaloissa, stadioneilla ja paikoissa, joissa useiden solujen peittoalueet limittyvät.

## Miksi täydet palkit voivat silti tarkoittaa hidasta yhteyttä?

Palkit kuvaavat lähinnä signaalitasoa. Ne eivät kerro, paljonko tukiasemalla on vapaata kapasiteettia, kuinka moni käyttää sitä, rajoittaako liittymän nopeusluokka yhteyttä tai käyttääkö puhelin matalan taajuuden 5G-kerrosta, joka muistuttaa käytännössä enemmän hyvää LTE:tä kuin mainosten huippunopeaa 5G:tä.

Siksi kaksi samassa paikassa tehtyä testiä voi näyttää ristiriitaisilta. Puhelin voi näyttää -68 dBm ja ladata silti hitaasti konsertissa, kun sadat tai tuhannet laitteet kilpailevat saman solun kapasiteetista. Kello kahdelta yöllä sama puhelin voi toimia samassa paikassa nopeasti.

## Miksi signaalilukema vaihtelee?

Signaalin voimakkuus muuttuu silloinkin, kun seisot paikallasi. Radioaallot heijastuvat rakennuksista, autoista, seinistä, ihmisistä ja maastosta. Osa heijastuksista vahvistaa vastaanottoa, osa kumoaa signaalia. Puhelimen siirtäminen muutaman senttimetrin verran voi muuttaa lukemaa.

Sisätiloissa vaihtelu kasvaa. Ikkuna, hissikuilu, betoniseinä, metallikatto tai metallipinnoitettu energiansäästölasi voi muuttaa lukemaa vähintään 10 dB. Kellarissa ja rakennuksen sisäosissa kuuluvuus on tavallisesti heikoin, koska signaalin pitää läpäistä enemmän materiaalia ennen puhelimeen pääsemistä.

Myös kellonaika voi vaikuttaa, mutta syy ei aina ole signaalin muuttuminen. Ruuhka-aikaan solu voi olla täynnä, jolloin yhteys tuntuu huonommalta, vaikka dBm-arvo pysyisi lähes ennallaan.

## Millainen 5G-lukema on hyvä?

Alle 6 GHz:n 5G-yhteydessä noin -80 dBm:n RSRP on karkean nyrkkisäännön mukaan hyvä, ja noin -100 dBm alkaa olla heikko. mmWave-yhteydessä vakaa peitto riippuu sijainnista vielä enemmän. Yhteys voi olla ulkona esteettömässä paikassa erittäin nopea ja kadota heti kulman takana tai sisälle mentäessä.

Suomessa julkiset 5G-verkot toimivat käytännössä pääasiassa 700 MHz:n ja 3,5 GHz:n taajuuksilla. Operaattoreilla on myös 26 GHz:n taajuuslupia, mutta näin korkea taajuus ei ole tavallisen valtakunnallisen 5G-peiton perusta.

Älä arvioi 5G:tä pelkän kuvakkeen perusteella. Katso signaalin voimakkuutta ja laatua, nopeutta, viivettä sekä sitä, putoaako puhelin jatkuvasti takaisin LTE-verkkoon.

## Nopeat vastaukset

Voiko signaalia parantaa ilman vahvistinta? Joskus. Mene ikkunan lähelle, siirry ylempään kerrokseen, astu ulos tai kokeile rakennuksen toista puolta. Jos 5G on sisällä heikko, LTE voi olla käytännössä parempi yhteys, koska matalamman taajuuden LTE-signaali läpäisee seiniä usein helpommin.

Tarkoittaako dBm samaa mobiiliverkossa ja Wi-Fi-yhteydessä? Yksikkö on sama, mutta hyödylliset arvoalueet ovat erilaisia. Wi-Fi-yhteydessä -50 dBm on voimakas, ja vakaus alkaa usein kärsiä noin -70 dBm:n kohdalla. Mobiiliverkot on suunniteltu pidemmille etäisyyksille, joten ne voivat toimia paljon pienemmällä signaalitasolla.

Kannattaako luottaa palkkeihin vai dBm-arvoon? Palkit riittävät vilkaisuun. Käytä dBm-arvoa vianmäärityksessä.
