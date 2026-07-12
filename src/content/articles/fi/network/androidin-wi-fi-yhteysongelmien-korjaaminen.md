---
title: "Androidin Wi-Fi-yhteysongelmien korjaaminen"
description: "Vaiheittaiset ratkaisut Androidin Wi-Fi-ongelmiin, kuten yhteyden katkeiluun, hitaaseen Wi-Fiin, tallennettujen verkkojen virheisiin, DNS-asetuksiin, reititinongelmiin ja Android 17 -päivityksen jälkeisiin häiriöihin."
listSummary: "suorituskyky, nopeus ja android"
hub: "network"
sourceNumber: 96
order: 7
tags: ["suorituskyky","nopeus","android","optimointi","vianetsintä"]
locale: "fi"
draft: false
---
Mitä kannattaa kokeilla ensimmäiseksi, kun Androidin Wi-Fi lakkaa toimimasta? Älä aloita tehdasasetusten palautuksesta äläkä käytä puolta tuntia reitittimen asetusten muuttamiseen ennen helppoja testejä. Useimmat Wi-Fi-ongelmat kuuluvat johonkin kolmesta ryhmästä: puhelin ei yhdistä verkkoon, yhteys katkeilee tai puhelin pysyy yhdistettynä mutta internet tuntuu kuolleelta.

Käy korjaukset läpi tässä järjestyksessä. Se säästää aikaa.

## 1. Kytke Wi-Fi pois ja takaisin, kokeile sitten lentotilaa

Avaa pika-asetukset ja poista Wi-Fi käytöstä. Odota viisi sekuntia. Kytke se takaisin päälle.

Jos se ei auta, ota lentotila käyttöön, odota kymmenen sekuntia ja poista lentotila. Tämä käynnistää puhelimen langattomat yhteydet uudelleen ilman koko laitteen uudelleenkäynnistystä. Pixelissä ja lähellä vakio-Androidia olevissa versioissa lentotila löytyy myös tavallisesti polusta `Settings > Network & internet`. Samsungissa se on yleensä kohdassa `Settings > Connections`.

Korjaus on pieni, mutta se ratkaisee yllättävän monta radion tilapäistä tilavirhettä.

## 2. Poista tallennettu verkko ja yhdistä uudelleen

Tallennettu Wi-Fi-profiili voi vanhentua reitittimen laiteohjelmistopäivityksen, salasanan vaihdon, suojaustilan muutoksen tai mesh-järjestelmän uudelleenmäärityksen jälkeen.

Pixelissä ja monissa lähellä vakio-Androidia olevissa versioissa polku on `Settings > Network & internet > Internet`. Avaa verkon vieressä oleva asetuskuvake ja valitse `Forget`. Samsungissa polku on yleensä `Settings > Connections > Wi-Fi`, minkä jälkeen avataan verkon asetuskuvake ja valitaan `Forget`.

Valitse verkko uudelleen ja kirjoita salasana. Jos reitittimessä on sekä pääverkko että vierasverkko, varmista että liityt oikeaan.

## 3. Käynnistä puhelin ja reititin uudelleen

Käynnistä puhelin uudelleen. Käynnistä sitten reititin irrottamalla sen virtajohto 30 sekunniksi.

Tee molemmat. Puhelimeen voi jäädä virheellinen tilapäinen verkkotila, ja reitittimessä voi olla vanhentunut DHCP-varaus tai ylikuormittunut yhteystaulukko. Molempien osapuolten uudelleenkäynnistys pakottaa yhteyden muodostumaan puhtaalta pöydältä.

Jos Wi-Fi-ongelma koskee useita laitteita, reitittimen uudelleenkäynnistys on puhelimen käynnistämistä tärkeämpi.

## 4. Tarkista, onko vika Wi-Fissä vai internetyhteydessä

Android voi olla yhteydessä Wi-Fi-verkkoon, vaikka reitittimen takana oleva internetyhteys olisi poikki. Wi-Fi-kuvake kertoo vain, että puhelimella on paikallinen langaton yhteys.

Kokeile toista laitetta samassa verkossa. Jos kaikki laitteet ovat hitaita tai ilman yhteyttä, tarkista modeemi, reititin ja internetoperaattorin yhteys. Jos vain Android-puhelin oireilee, jatka puhelimeen liittyviin korjauksiin.

Kokeile myös reitittimen hallintasivua. Monissa reitittimissä osoite on 192.168.1.1 tai 192.168.0.1. Jos hallintasivu avautuu mutta verkkosivut eivät, Wi-Fi toimii ja ongelma on internetyhteydessä, DNS:ssä tai reitittimen asetuksissa.

## 5. Päivitä Android, Google Play -järjestelmäosat ja reitittimen laiteohjelmisto

Avaa puhelimen järjestelmäpäivitykset ja asenna odottavat päivitykset. Uusissa Pixel-versioissa ne löytyvät tavallisesti polusta `Settings > System > Software updates`. Samsungissa polku on yleensä `Settings > Software update > Download and install`.

Tarkista Pixel-tyylisessä Androidissa myös Google Play -järjestelmäpäivitykset asetusten tietoturva- ja järjestelmäpäivitysosiosta. Tarkka sanamuoto ja sijainti vaihtelevat Android-version mukaan. Sekä puhelimen laiteohjelmisto että päivitettävät järjestelmäosat vaikuttavat yhteyksiin.

Reitittimen laiteohjelmisto unohtuu helposti. Avaa reitittimen sovellus tai hallintapaneeli ja etsi firmware-, system- tai administration-päivityksiä. Valmistajat korjaavat Wi-Fi-vakauden ongelmia päivityksillä, mutta kaikki reitittimet eivät asenna niitä luotettavasti automaattisesti.

## 6. Poista automaattinen vaihto Wi-Fistä mobiilidataan käytöstä

Jos puhelin jättää Wi-Fi-verkon satunnaisesti vaikka reititin toimii, automaattinen verkonvaihto voi olla syy.

Asetuksen nimi ja sijainti vaihtelevat. Pixelin `Adaptive Connectivity` ei ole Wi-Fi-yhteydestä mobiilidataan vaihtava asetus, vaan Google kuvaa sen 5G:n käytön hallinnaksi. Tarkista Pixelin Internet-asetuksista erillinen automaattisen verkonvaihdon toiminto vain, jos sellainen näkyy omassa ohjelmistoversiossasi. Samsungissa avaa `Settings > Connections > Wi-Fi > Intelligent Wi-Fi` ja poista testausta varten `Switch to mobile data` käytöstä.

Pidä toiminto pois päältä yhden päivän ajan. Jos Wi-Fi muuttuu vakaaksi, asetus reagoi liian voimakkaasti verkkoon, jota se piti heikkona tai huonolaatuisena.

## 7. Tarkista 2,4 GHz ja 5 GHz

2,4 GHz:n taajuusalueen kantama on pidempi ja se läpäisee seiniä paremmin. 5 GHz on nopeampi reitittimen lähellä, mutta heikkenee seinien läpi nopeammin. Viereisessä huoneessa täydellisesti toimiva 5 GHz:n yhteys voi takkuilla asunnon toisessa päässä.

Jos reititin yhdistää molemmat taajuusalueet saman verkkonimen alle, erottele ne väliaikaisesti nimillä kuten HomeWiFi-2G ja HomeWiFi-5G. Yhdistä puhelin 2,4 GHz:n verkkoon kantamaa tai 5 GHz:n verkkoon nopeutta varten.

Nykyisen taajuusalueen näkee usein avatun Wi-Fi-verkon tiedoista. Vakio-Android voi näyttää taajuuden tai linkkinopeuden. Samsung näyttää vastaavia tietoja Wi-Fi-verkon asetusnäkymässä, mutta näkyvät tiedot vaihtelevat mallin ja ohjelmistoversion mukaan.

## 8. Tarkista Private DNS ennen staattisen DNS:n muuttamista

DNS-ongelma voi saada Wi-Fi-yhteyden näyttämään rikkinäiseltä. Puhelin kertoo olevansa yhdistettynä ja osa viestisovelluksista saattaa toimia, mutta verkkosivut pysähtyvät tai osoitteiden selvitys epäonnistuu.

Android 9:stä lähtien Private DNS löytyy vakio-Androidissa yleensä polusta `Settings > Network & internet > Private DNS`. Jos käytössä on mukautettu palveluntarjoaja ja Wi-Fi ei toimi, vaihda asetus väliaikaisesti tilaan `Automatic` tai `Off` ja testaa uudelleen.

Voit käyttää esimerkiksi palvelinnimiä `dns.google` tai `one.one.one.one`, mutta kirjoita ne täsmälleen oikein. Virheellinen Private DNS -palvelinnimi voi rikkoa nimenselvityksen sekä Wi-Fissä että mobiilidatassa.

Älä vaihda Wi-Fi-verkon osoiteasetusta DHCP:stä staattiseksi, ellet tiedä oikeaa IP-osoitetta, yhdyskäytävää ja aliverkon arvoja. Staattisesta DNS:stä voi olla apua tietyissä tapauksissa, mutta väärät IP-tiedot aiheuttavat uuden ja usein pahemman näköisen ongelman.

## 9. Nollaa verkkoasetukset

Käytä tätä, kun yksittäiset korjaukset eivät ole auttaneet. Uusissa Android-versioissa Wi-Fi- ja Bluetooth-asetukset voidaan nollata erikseen mobiiliverkkoasetuksista. Tämä ei poista kuvia, sovelluksia tai tiedostoja.

Pixel ja vakio-Android: avaa `Settings > System > Reset options`. Uusissa Pixel-versioissa valitse Wi-Fiä varten `Reset Bluetooth & Wi-Fi` ja mobiiliverkkoa varten tarvittaessa erillinen `Reset mobile network settings`.

Samsung: avaa `Settings > General management > Reset`. Uusissa One UI -versioissa valinnat ovat tavallisesti `Reset Wi-Fi and Bluetooth settings` sekä erillinen `Reset mobile network settings`.

Xiaomissa, OnePlussassa ja muissa Android-versioissa sanamuoto vaihtelee. Asetusten hausta kannattaa etsiä sanoilla `reset network`, `reset Wi-Fi` tai `reset Bluetooth` sen sijaan, että luottaisi yhteen yleispätevään polkuun.

Wi-Fi-verkkoihin täytyy yhdistää uudelleen ja Bluetooth-laitteet täytyy parittaa uudestaan.

## 10. Tarkista päivämäärä ja kellonaika

Väärä päivämäärä tai kellonaika voi rikkoa varmennevarmistuksia, kirjautumisportaaleja ja joitakin tunnistautumisvaiheita. Se kuulostaa liian helpolta ratkaisulta, mutta ongelma on todellinen matkustamisen, tyhjentyneen akun, käsin vaihdetun aikavyöhykkeen tai laiteasetusten häiriön jälkeen.

Avaa päivämäärän ja kellonajan asetukset ja ota automaattinen aika sekä aikavyöhyke käyttöön. Pixelissä polku on yleensä `Settings > System > Date & time`. Samsungissa se on tavallisesti `Settings > General management > Date and time`.

## 11. Tarkista MAC-osoitteen satunnaistus luotetuissa verkoissa

Android 10:stä lähtien Wi-Fi käyttää oletusarvoisesti satunnaistettuja MAC-osoitteita yksityisyyden parantamiseksi. Julkisissa verkoissa se on hyvä asia. Kotona tai työpaikalla se voi hämmentää reititintä, joka käyttää MAC-suodatusta, varattuja IP-osoitteita, lapsilukkoa tai laiterajoja.

Avaa Wi-Fi-verkon tiedot ja etsi tietosuojaa tai MAC-osoitteen tyyppiä koskeva asetus. Jos luotettu kotiverkko torjuu puhelimen jatkuvasti, kokeile vain kyseiselle verkolle puhelimen tai laitteen MAC-osoitetta. Pidä satunnaistettu MAC käytössä muualla.

## 12. Korjaa reitittimeen liittyvät syyt

Jos ongelma koskee useita laitteita, keskity reitittimeen.

Käytä 2,4 GHz:n verkossa kanavia 1, 6 tai 11 ja valitse niistä vähiten ruuhkainen. Älä sijoita reititintä television taakse, kaappiin, mikroaaltouunin viereen, metallihyllyn lähelle tai lattialle.

Jos reititin käyttää taajuusohjausta, kokeile sen poistamista käytöstä tai erottele 2,4 GHz:n ja 5 GHz:n verkot eri nimille. Jos verkko käyttää vain WPA3-suojausta ja vanha puhelin takkuilee, kokeile WPA2/WPA3-yhdistelmätilaa. Jos reitittimessä on laiteraja, nosta sitä tai poista vanhat laitteet.

Suuressa kodissa mesh-järjestelmä on yleensä halpaa kantamanlaajenninta parempi. Laajennin voi toimia, mutta se usein pienentää nopeutta ja aiheuttaa outoa verkkovierailua.

## 13. Android 17:n tai muun suuren päivityksen jälkeen

Android 17 julkaistiin ensin useimmille tuetuille Pixel-laitteille kesäkuussa 2026, ja muut valmistajat seuraavat omissa aikatauluissaan. Jos Wi-Fi-ongelma alkoi heti päivityksen jälkeen, älä oleta reitittimen rikkoutuneen juuri samalla hetkellä.

Asenna mahdollinen myöhempi tietoturvapäivitys, päivitä operaattorin ja yhteyksien kannalta olennaiset sovellukset Play Kaupasta, käynnistä puhelin ja reititin uudelleen sekä poista verkko ja liity siihen uudestaan. Jos vika on yleinen juuri omassa puhelinmallissasi ja koontiversiossasi, kuukausipäivitys voi olla todellinen korjaus.

Vanhoissa ohjeissa neuvotaan usein tyhjentämään järjestelmän välimuistiosio palautustilassa. En aloittaisi siitä nykyisessä Android-puhelimessa. Joissakin Samsung-malleissa palautustilan välimuistitoiminto on edelleen näkyvissä, mutta monissa uusissa Android-laitteissa vanha menetelmä ei ole luotettava yleisratkaisu.

## 14. Testaa vikasietotilassa

Vikasietotila käynnistää Androidin ilman useimpia ladattuja sovelluksia. Jos Wi-Fi toimii vikasietotilassa normaalisti, jokin asennettu sovellus häiritsee yhteyttä.

Tavallisia epäiltyjä ovat VPN-sovellukset, palomuurit, mainosten estäjät, laitehallintatyökalut ja "Wi-Fi booster" -sovellukset. Poista käytöstä tai poista ensin uusimmat verkkoon liittyvät sovellukset.

## Milloin laitteistokorjausta kannattaa harkita

Jos puhelin katkaisee Wi-Fi-yhteyden useissa reitittimissä, oire jatkuu verkkoasetusten nollauksen ja vikasietotilan jälkeen ja muut laitteet toimivat normaalisti, laitteistovika muuttuu todennäköiseksi. Antenni- ja Wi-Fi-piiriviat eivät ole yleisiä, mutta pudotuksen tai kosteusvaurion jälkeen ne eivät ole harvinaisia.

Palauta tehdasasetukset vasta tietojen varmuuskopioinnin jälkeen. Jos sekään ei auta, huolto on rehellisesti seuraava askel.

## Nopeat vastaukset

Kannattaako Wi-Fi sammuttaa kotoa lähtiessä? Yleensä ei. Nykyinen Android hoitaa verkkohakua melko energiatehokkaasti, ja päällä oleva Wi-Fi auttaa tallennettuihin verkkoihin yhdistämisessä sekä sijainnin tarkkuudessa.

Voiko suojakuori häiritä Wi-Fiä? Tavallinen kuori ei häiritse. Metallikuori, paksu akkukuori tai magneettilevy voi heikentää vastaanottoa, jos signaali on jo valmiiksi heikko.

Miten Wi-Fi-signaalin voimakkuus tarkistetaan dBm-arvona? Jotkin Android-versiot näyttävät sen Wi-Fi-verkon tiedoissa. Muussa tapauksessa Wi-Fi-analysaattorisovellus voi näyttää arvon. Noin -30...-50 dBm on erinomainen, -50...-70 dBm käyttökelpoinen tai hyvä ja alle -70 dBm:n signaali voi muuttua epävakaaksi häiriöistä riippuen.

runcheck seuraa Wi-Fi-signaalin laatua ajan mittaan Network detail -näkymässä. Se näyttää myös taajuusalueen, linkkinopeuden ja signaalihistorian kaltaisia yhteystietoja silloin, kun Android antaa ne sovellukselle.
