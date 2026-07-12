---
title: "Wi-Fi-signaalin voimakkuuden tarkistaminen Androidissa"
description: "Metakuvaus: Opi lukemaan Android-puhelimen Wi-Fi-signaalin voimakkuus dBm-arvona pelkkien palkkien sijaan. Ohjeessa käsitellään puhelimen omat asetukset, analysointisovellukset ja lukujen merkitys."
listSummary: "Metakuvaus: Opi lukemaan Android-puhelimen Wi-Fi-signaalin voimakkuus dBm-arvona pelkkien palkkien sijaan."
hub: "network"
sourceNumber: 90
order: 1
tags: ["verkko","yhteydet","android","vianetsintä","opas"]
locale: "fi"
draft: false
---
Tilarivin Wi-Fi-palkit antavat vain karkean vihjeen, eivät varsinaista mittaustulosta. Kaksi vierekkäin olevaa puhelinta voi näyttää eri määrän palkkeja, koska Android-versiot ja laitevalmistajat eivät muunna signaalin voimakkuutta palkeiksi samalla tavalla.

Vianmäärityksessä kannattaa katsoa dBm-arvoa. Se kertoo, kuinka voimakkaan signaalin puhelin vastaanottaa reitittimestä.

## Aloita Androidin asetuksista

Avaa Pixelissä tai lähes vakio-Androidia käyttävässä puhelimessa **Asetukset > Verkko ja internet > Internet**. Samsung Galaxy -puhelimessa polku on **Asetukset > Yhteydet > Wi-Fi**. Napauta verkkoa, johon puhelin on yhdistetty.

Verkon tietonäkymässä näkyy tavallisesti signaalin sanallinen luokitus, kuten erinomainen, hyvä, kohtalainen tai heikko. Näytössä voi näkyä myös yhteysnopeus, taajuus, suojaustyyppi, IP-osoite ja muita yhteystietoja. Tarkka sisältö vaihtelee valmistajan ja Android-version mukaan, joten oman puhelimen ei tarvitse vastata opaskuvaa täydellisesti.

Monissa nykyisissä puhelimissa Androidin asetukset eivät näytä raakaa dBm-arvoa. Se on harmillista, mutta tavallista. Yhteysnopeus antaa silti hyödyllistä taustatietoa. Jos se putoaa reitittimen vieressä näkyvästä usean sadan Mbps:n lukemasta 40 Mbps:iin kodin perimmäisessä huoneessa, yhteys kertoo jo olennaisen.

## Kokeile kehittäjäasetuksia, mutta älä luota niihin

Joissakin puhelimissa Wi-Fi-yhteydestä saa lisätietoja kehittäjäasetusten kautta.

Avaa **Asetukset > Tietoja puhelimesta** ja napauta kohtaa **Koontiversion numero** seitsemän kertaa. Avaa sen jälkeen **Asetukset > Järjestelmä > Kehittäjäasetukset**. Etsi verkkoasetuksista toiminto, jonka englanninkielinen nimi on **Enable Wi-Fi verbose logging**. Googlen kehittäjädokumentaation mukaan se lisää kunkin SSID-verkon Wi-Fi-lokitietoja suhteellisen RSSI-arvon perusteella.

Käytännössä näkyvä lopputulos vaihtelee. Pixelit ja lähes vakio-Androidia käyttävät laitteet näyttävät muita todennäköisemmin hyödyllisiä lisätietoja. Samsung ja muut valmistajaversiot voivat piilottaa samat tiedot tai esittää ne eri tavalla. Tämä on niitä Android-konsteja, jotka toimivat, kunnes eivät enää toimikaan.

## Katso dBm-arvo Wi-Fi-analysointisovelluksella

Wi-Fi-analysointisovellus on helpoin tapa saada dBm-lukema eri puhelimissa.

Ubiquitin WiFiman näyttää muun muassa signaalin voimakkuuden, kanavan, SSID- ja BSSID-tunnisteet, yhdyskäytävän, DNS-tiedot, viiveen ja pakettihävikin. Se on hyvä ensimmäinen vaihtoehto, kun samaan sovellukseen halutaan myös nopeustesti- ja verkkolaitteiden tunnistustyökaluja.

NetSpot sopii paremmin tilan kartoittamiseen. Sen avulla voi seurata signaalin voimakkuutta ja hahmotella kodin tai toimiston peittoa tiloissa liikuttaessa.

Network Analyzer on hyödyllinen silloin, kun ongelma ei ehkä johdukaan signaalin voimakkuudesta. Se yhdistää Wi-Fi- ja mobiiliverkon tiedot esimerkiksi ping-, DNS-haku- ja traceroute-työkaluihin.

Asenna jokin sovelluksista, etsi oman verkon nimi ja seuraa dBm-arvoa liikkuessasi. Tällä luvulla on enemmän merkitystä kuin tilarivin kuvakkeella.

## Mitä dBm-luvut tarkoittavat?

dBm-arvot ovat negatiivisia. Mitä lähempänä nollaa luku on, sitä voimakkaampi signaali. Lukema -45 dBm on siis paljon voimakkaampi kuin -75 dBm.

Näitä arvoja voi käyttää kotiverkon käytännöllisinä suuntaviivoina:

- -30 - -50 dBm: erinomainen. Olet todennäköisesti lähellä reititintä tai tukiasemaa.
- -50 - -60 dBm: voimakas. Suoratoiston, videopuheluiden ja tavallisen verkkokäytön pitäisi toimia vakaasti.
- -60 - -67 dBm: edelleen hyvä useimpiin tarpeisiin, myös HD-videoon ja puheluihin, jos häiriöitä on vähän.
- -67 - -70 dBm: käyttökelpoinen, mutta reaaliaikaiset puhelut ja pelaaminen voivat jo alkaa kärsiä.
- -70 - -80 dBm: heikko. Selaaminen saattaa toimia, mutta videon laatu voi laskea ja puhelut voivat jumiutua.
- Alle -80 dBm: huono. Puhelin saattaa pysyä verkossa, vaikka tiedonsiirto tuntuu käytännössä rikkoutuneelta.

Täydellistä raja-arvoa ei ole, sillä myös kohina ja häiriöt vaikuttavat. Puhdas -68 dBm:n signaali voi toimia paremmin kuin kohinainen -60 dBm:n signaali kerrostalossa, jonka ympärillä on paljon reitittimiä.

## Tarkista taajuusalue

Useimmat reitittimet käyttävät alempaa 2,4 GHz:n taajuusaluetta ja nopeampaa 5 GHz:n aluetta. Uudemmat reitittimet voivat käyttää myös 6 GHz:n aluetta Wi-Fi 6E- tai Wi-Fi 7 -tekniikalla.

Alin taajuusalue kantaa pidemmälle ja läpäisee seiniä paremmin, mutta sillä on usein ruuhkaa. Bluetooth-laitteet, naapurien reitittimet, itkuhälyttimet ja mikroaaltouunit voivat lisätä häiriöitä.

5 GHz on nopeampi lyhyellä ja keskipitkällä etäisyydellä. Sen signaali heikkenee nopeammin seinien ja lattioiden läpi. Puhelin voi näyttää sillä heikompaa dBm-arvoa ja silti siirtää dataa nopeammin, koska käytettävissä on enemmän kapasiteettia.

6 GHz on saatavilla ollessaan vielä häiriöttömämpi, mutta kantama jää jälleen lyhyemmäksi. Se toimii erinomaisesti samassa huoneessa ja lähihuoneissa. Koko kodin peittoa se ei ratkaise taianomaisesti.

Jos reititin yhdistää taajuusalueet saman verkkonimen alle, puhelin valitsee alueen automaattisesti. Valinta on yleensä toimiva, mutta ei aina. Kun tutkit katvealuetta, tarkista puhelimen käyttämä taajuusalue ennen kuin syytät reititintä.

## Kävele ongelma-alueet läpi

Avaa analysointisovellus ja kävele hitaasti niissä huoneissa, joissa Wi-Fi toimii huonosti. Tarkkaile kohtaa, jossa oman verkon signaali putoaa noin -70 dBm:n alapuolelle.

Heikkojen kohtien syyt ovat arkisia mutta todellisia: betoniseinät, tiili, metalliovet, metallipinnoitetut peilit, lattialämmitys ja kaappiin piilotetut reitittimet. Reitittimen sulkeminen komeroon on klassinen itse aiheutettu ongelma.

runcheck näyttää verkkonäkymässä nykyisen Wi-Fi-lukeman dBm-arvona sekä yhteyden laatuluokituksen, yhteysnopeuden, taajuuden ja viiveen silloin, kun Android antaa nämä tiedot sovelluksen käyttöön. Verkkohistoriasta on hyötyä ajoittaisissa ongelmissa, esimerkiksi jos nopeus laskee joka ilta tai signaalin laatu heikkenee vain yhdessä huoneessa.

## Paranna heikkoa signaalia

Siirrä ensin reititintä. Sijoita se korkeammalle, lähemmäs kodin keskiosaa ja eroon metalliesineistä. Älä piilota sitä television taakse tai kaappiin.

Vaihda kanavaa, jos lähialueen reitittimet ruuhkauttavat saman kanavan. 2,4 GHz:n alueella kanavat 1, 6 ja 11 ovat tavalliset toisistaan erilliset vaihtoehdot. 5 GHz:n ja 6 GHz:n alueilla kanavatilaa on enemmän, mutta kerrostaloissa voi silti esiintyä ruuhkaa.

Käytä mesh-Wi-Fi-järjestelmää, jos yksi reititin ei kata koko tilaa. Hyvin sijoitetuilla tukiasemilla rakennettu mesh-järjestelmä toimii yleensä paremmin kuin halpa toistin, joka on asetettu heikon peiton reunalle. Myös toistin tarvitsee kohtuullisen signaalin. Jos se hädin tuskin kuulee reititintä, se ei pysty luomaan tyhjästä hyvää verkkoa.

Päivitä reitittimen laiteohjelmisto, kun päivityksiä on saatavilla. Se ei korjaa radioaaltojen fysiikkaa, mutta voi ratkaista ohjelmistovirheitä, verkkovierailun ongelmia ja yhteensopivuusongelmia uudempien puhelinten kanssa.
