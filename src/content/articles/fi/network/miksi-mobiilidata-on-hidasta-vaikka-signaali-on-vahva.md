---
title: "Miksi mobiilidata on hidasta, vaikka signaali on vahva?"
description: "Täydet signaalipalkit eivät takaa nopeaa mobiilidataa. Tässä selitetään, miksi Android-puhelimen yhteys voi olla vahva mutta internet hidas. Syitä ovat esimerkiksi ruuhka, liittymän nopeusraja, Data Saver, APN-asetukset, VPN ja 5G-yhteyden vaihtelu."
listSummary: "Täydet signaalipalkit eivät takaa nopeaa mobiilidataa."
hub: "network"
sourceNumber: 97
order: 8
tags: ["suorituskyky","nopeus","android","optimointi","vianetsintä"]
locale: "fi"
draft: false
---
Näytössä on täydet palkit, mutta sivu ei silti avaudu. Puhelin näyttää 5G:tä tai LTE:tä. Signaali vaikuttaa hyvältä. Mobiilidata liikkuu silti kuin tervassa.

Vahva signaali todistaa oikeastaan vain yhden asian: puhelin kuulee tukiaseman riittävän hyvin. Se kertoo paljon vähemmän tukiaseman kuormasta, liittymän nopeusrajasta, häiriöistä, operaattorin reitityksestä, VPN:n lisäkuormasta tai siitä, onko puhelin parhaassa mahdollisessa verkkotilassa.

## Hyvä signaali ei tarkoita nopeaa dataa

Signaalipalkit kuvaavat lähinnä radiosignaalin voimakkuutta. Datanopeus riippuu kapasiteetista.

Tukiaseman kaistanleveys jaetaan kaikkien siihen yhdistettyjen käyttäjien kesken. Rauhallisena iltapäivänä yksi käyttäjä voi saada 5G-yhteydellä satoja megabittejä sekunnissa. Työpäivän jälkeen ruuhkaisella rautatieasemalla sama tukiasema voi tuntua hitaalta, vaikka puhelin näyttää vahvaa signaalia. Tukiasema ei ole heikko. Se on kiireinen.

Siksi nopeus laskee usein stadioneilla, konserteissa, lentoasemilla, kauppakeskuksissa, tiheissä kerrostalokortteleissa ja työmatkareiteillä. Puhelimen radioyhteys voi olla vahva samaan aikaan, kun liian moni käyttäjä pyytää verkolta dataa.

Myös signaalin laatu merkitsee. Jos RSRQ tai SINR on heikko, palkkeja voi näkyä paljon mutta hyötysignaali sekoittuu häiriöihin. Tätä tapahtuu tukiasemasolujen reunoilla, korkeissa rakennuksissa ja alueilla, joilla useiden solujen peitto menee päällekkäin.

## Ruuhka on tavallisin syy

Jos mobiilidata hidastuu tiettyinä aikoina tai tietyissä paikoissa, ruuhka on todennäköisin selitys. Aamun työmatka, lounasaika ja iltaruuhka ovat klassisia esimerkkejä. Sama koskee urheilutapahtumia ja keskustoja.

Ruuhkaista tukiasemaa ei korjata yhdellä puhelinasetuksella. Voit ottaa lentotilan hetkeksi käyttöön, siirtyä lähemmäs ikkunaa, kokeilla 5G:n ja 4G:n välillä vaihtamista tai käyttää Wi-Fiä. Jos tukiasema on ylikuormittunut, varsinainen korjaus vaatii operaattorilta lisää verkkokapasiteettia.

Hyödyllinen testi on mitata nopeus eri vuorokaudenaikoina. Jos sama paikka on nopea myöhään illalla mutta hidas kello 18, puhelin ei todennäköisesti ole ongelman syy.

## Liittymän nopeusrajat, datakiintiöt ja verkonhallinta

Suomessa monet kuluttajaliittymät sisältävät rajattoman kotimaan datan, mutta liittymälle on silti määritetty enimmäisnopeus. Täydet signaalipalkit eivät nosta yhteyttä sopimuksessa ilmoitettua enimmäisnopeutta suuremmaksi. Joissakin prepaid- ja erikoisliittymissä voi olla myös datakiintiöitä tai muita käyttörajoja.

EU- ja ETA-alueella verkkovierailun data ei välttämättä ole rajatonta, vaikka kotimaan käyttö olisi. Operaattori voi soveltaa EU-sääntöjen mukaista kohtuukäytön kiintiötä ja periä lisämaksua sen ylittävästä osasta. Tarkista liittymäsi ehdot ja kulutus operaattorin sovelluksesta tai verkkopalvelusta.

Operaattorin verkonhallinta ja liittymätyyppi voivat lisäksi vaikuttaa nopeuteen ruuhkassa. Käytännöt vaihtelevat, joten älä oleta automaattisesti, että hidas yhteys johtuu puhelimesta. Sopimuksen nopeus, mahdolliset datarajat ja käyttöehdot kannattaa tarkistaa ensin.

Androidissa datankäytön näkee Pixel-tyylisessä käyttöliittymässä tavallisesti polusta `Settings > Network & internet > SIMs > App data usage`. Samsungissa vastaava polku on yleensä `Settings > Connections > Data usage > Mobile data usage`.

## Data Saver ja sovelluskohtaiset datarajoitukset

Androidin Data Saver voi saada mobiilidatan näyttämään rikkinäiseltä, jos sen unohtaa päälle. Se rajoittaa useimpien sovellusten taustadataa ja voi keskeyttää synkronoinnin, esikatselut, lähetykset ja ilmoitukset.

Pixelissä ja monissa vakio-Androidia muistuttavissa versioissa asetus löytyy yleensä polusta `Settings > Network & internet > Data Saver`. Samsungissa polku on `Settings > Connections > Data usage > Data saver`.

Samsungissa on lisäksi sovelluskohtaisia mobiilidata-asetuksia Data usage -osiossa. Jos vain yksi sovellus on hidas mutta muut toimivat, tarkista onko sen taustadata poistettu käytöstä. Sama koskee akun optimointia. Voimakkaasti rajoitettu sovellus voi näyttää kärsivän verkkoviasta, vaikka Android vain estää sitä toimimasta normaalisti taustalla.

## Puhelin voi käyttää väärää verkkotilaa

Verkkotila määrittää, mitä mobiiliverkkosukupolvia puhelin saa käyttää. Jos puhelin on lukittu 4G-tilaan tai johonkin testauksen aikana valittuun rajoitettuun tilaan, se ei välttämättä valitse parasta saatavilla olevaa yhteyttä.

Pixelissä ja monissa Android-puhelimissa asetus löytyy tavallisesti polusta `Settings > Network & internet > SIMs > Preferred network type`. Samsungissa se on yleensä `Settings > Connections > Mobile networks > Network mode`. Valitse puhelimen ja liittymän tukema järkevä automaattitila, tavallisesti 5G/4G automaattisesti. Suomessa 3G-verkot on poistettu käytöstä, joten vanhoissa ohjeissa näkyvä 5G/LTE/3G/2G-valinta ei kuvaa enää kotimaan verkkojen todellista tilannetta, vaikka sama sanamuoto saattaa edelleen näkyä joissakin laitteissa tai matkustaessa.

Älä silti oleta, että 5G on aina nopeampi. Matalan taajuuden 5G voi käyttäytyä hyvän 4G-yhteyden tavoin. Heikko 5G voi olla vahvaa 4G:tä hitaampi. Jos data toimii 5G:llä huonosti mutta nopeutuu 4G-tilassa, käytä 4G:tä siinä paikassa ja jatka päivääsi.

Android 17 tuo Pixel-käyttäjille vielä yhden muuttujan, sillä Google julkaisi sen ensin useimmille tuetuille Pixel-laitteille kesäkuussa 2026. Jos mobiilidata tai 5G heikkeni heti Pixelin päivityksen jälkeen, tarkista myöhempi kuukausipäivitys, operaattoriasetusten päivitys ja juuri omaa mallia koskevat vikailmoitukset. Samsung, Xiaomi, OnePlus, OPPO, vivo ja muut valmistajat toimittavat omat Android 17 -versionsa myöhemmin, joten Pixelin oireet eivät aina koske muita puhelimia.

## APN-asetukset operaattorin tai SIM-kortin vaihtamisen jälkeen

APN eli Access Point Name kertoo puhelimelle, miten se muodostaa yhteyden operaattorin dataverkkoon. Useimmat puhelimet saavat oikeat APN-asetukset automaattisesti. Ongelmia voi tulla operaattorin vaihdon, uuden SIM-kortin, eSIMiin siirtymisen tai toisen operaattorin puhelimesta palautetun varmuuskopion jälkeen.

Samsungissa polku on yleensä `Settings > Connections > Mobile networks > Access Point Names`. Pixel-tyylisessä Androidissa se on tavallisesti `Settings > Network & internet > SIMs > Access Point Names`, mutta operaattori voi piilottaa tai lukita osan valikosta.

Älä arvaa APN-arvoja. Käytä täsmälleen operaattorin ilmoittamia asetuksia. Virheellinen APN voi rikkoa mobiilidatan, MMS-viestit, yhteyden jakamisen tai verkkovierailun.

Jos et ole varma, valitse APN-valikosta `Reset to default`, jos toiminto on saatavilla, ja käynnistä puhelin uudelleen.

## Taustalla toimivat sovellukset voivat viedä yhteyden kapasiteetin

Pilveen tehtävä kuvavarmistus, podcast-lataukset, viestien palautus, Play Kaupan päivitykset, offline-kartat ja sovellusten synkronointi voivat kaikki toimia taustalla. Jos yhteys on jo rajallinen, niille käytetty kaista on pois parhaillaan käyttämältäsi sovellukselta.

Tarkista sovellusten datankäyttö nykyiseltä laskutusjaksolta. Jos jokin sovellus on käyttänyt odottamattoman paljon mobiilidataa, avaa sen asetukset ja rajoita taustadataa tai salli lataukset vain Wi-Fi-yhteydellä.

Avaa Play Kaupassa `Settings > Network preferences > Auto-update apps` ja valitse `Over Wi-Fi only`, jos mobiilidata on rajallista tai hidasta.

## VPN voi hidastaa kaikkea

VPN salaa liikenteen ja lähettää sen toisen palvelimen kautta ennen kuin se päätyy verkkosivulle tai sovellukseen. Tämä kasvattaa viivettä. Nopeus voi myös laskea, jos VPN-palvelin on kaukana, ylikuormittunut tai operaattorin reitti palvelimelle on huono.

Etsi tilariviltä avain- tai VPN-kuvake. Katkaise VPN-yhteys yhden testin ajaksi. Jos nopeus paranee, valitse lähempänä oleva palvelin tai vaihda VPN-protokollaa. Jos työ-VPN on pakollinen, hidas osa voi olla yrityksen verkko eikä puhelin tai mobiilioperaattori.

## SIM- ja eSIM-ongelmat

Vaurioitunut fyysinen SIM-kortti voi aiheuttaa outoa mobiilidatan toimintaa, vaikka puhelin näyttää signaalia. Irrota kortti, tarkista metallikoskettimet, aseta kortti takaisin ja käynnistä puhelin uudelleen. Jos SIM on useita vuosia vanha, pyydä operaattorilta uusi.

eSIMin voi poistaa hetkeksi käytöstä ja ottaa takaisin käyttöön SIM-asetuksista. Älä kuitenkaan poista eSIM-profiilia, ellet tiedä miten se asennetaan uudelleen. Osa operaattoreista vaatii uuden QR-koodin tai aktivoinnin sovelluksen kautta.

Tarkista myös, että kaksois-SIM-puhelimessa mobiilidata on osoitettu oikealle liittymälle. Matkan jälkeen data jää helposti väärälle SIMille.

## Tee nopeustestit hyödyllisellä tavalla

Tee nopeustesti ennen kuin muutat viittä asetusta kerralla. Käytä esimerkiksi Ookla Speedtestiä, Fast.comia tai M-Labia. Mittaa samassa paikassa sekä 5G:llä että 4G:llä, jos puhelin sallii verkkotilan vaihdon. Tee uusi testi toisena vuorokaudenaikana.

Katso latausnopeuden lisäksi lähetysnopeutta, ping-arvoa ja jitteriä. Lähetysnopeus kärsii usein ensimmäisenä, kun signaalin laatu on heikko. Korkea ping ja suuri jitter tekevät videopuheluista ja peleistä huonoja, vaikka latausnopeus näyttäisi kohtuulliselta.

4G-yhteydellä 10-50 Mbit/s on monissa tilanteissa tavallinen tulos, ja hiljaisessa verkossa huiput voivat olla selvästi korkeampia. 5G-nopeudet vaihtelevat paljon käytetyn taajuusalueen mukaan. Matalan taajuuden 5G voi olla lähellä 4G:tä, kun taas keskitaajuuksilla nopeus voi olla paljon suurempi. Millimetriaaltoalueen 5G voi joillakin markkinoilla olla erittäin nopea, mutta vain pienillä peittoalueilla. Se ei ole Suomessa tavallinen kuluttajaverkon vaihtoehto.

Jos vahvan signaalin 4G-yhteys jää toistuvasti alle 5 Mbit/s useissa paikoissa ja eri aikoina, tarkista liittymän nopeusraja, APN-asetukset, VPN, operaattorin häiriöt ja SIM-kortin kunto. Jos hitaus esiintyy vain yhdessä paikassa yhteen aikaan, ruuhka on tylsä mutta todennäköinen vastaus.

runcheck-sovelluksen Network detail -näkymä näyttää signaalin voimakkuuden, yhteystyypin, viiveen ja historian samassa paikassa. Sen avulla näkee helpommin, osuuko hidas mobiilidata yhteen heikon signaalin, suuren viiveen tai tietyn sijainnin kanssa.

## Nopea tarkistuslista

Kokeile näitä järjestyksessä:

- Poista Data Saver käytöstä ja testaa uudelleen.
- Ota lentotila käyttöön kymmeneksi sekunniksi, jotta puhelin liittyy verkkoon uudelleen.
- Tarkista liittymän enimmäisnopeus, mahdollinen datakiintiö ja EU/ETA-roamingin kohtuukäyttöraja.
- Vaihda testausta varten 5G-automaattitilan ja 4G-tilan välillä.
- Katkaise VPN-yhteys.
- Keskeytä suuret lataukset, varmuuskopioinnit ja Play Kaupan päivitykset.
- Palauta APN oletukseksi tai syötä operaattorin täsmälliset APN-asetukset.
- Käynnistä puhelin uudelleen.
- Nollaa verkkoasetukset, jos ongelma seuraa mukana eri paikkoihin.

Jos data hidastuu vain yhdessä ruuhkaisessa paikassa, puhelin ei todennäköisesti ole rikki. Verkko on täynnä.
