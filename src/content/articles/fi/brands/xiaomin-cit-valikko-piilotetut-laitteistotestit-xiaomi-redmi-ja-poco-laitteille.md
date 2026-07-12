---
title: "Xiaomin CIT-valikko: piilotetut laitteistotestit Xiaomi-, Redmi- ja POCO-laitteille"
metaTitle: "Xiaomin CIT-valikko: Xiaomi-, Redmi- ja POCO-testit"
description: "CIT on nopein sisäänrakennettu laitteistotarkistus useimmissa Xiaomi-puhelimissa, myös virallista MIUI- tai HyperOS-ohjelmistoa käyttävissä Redmi- ja POCO-malleissa. Se ei ole kaunis. Se ei selitä juuri mitään. Kun haluat tietää, reagoiko kosketusnäyttö, kaiutin, mikrofoni, anturi tai kamera oikeasti, CIT vie vastauksen äärelle useimpia Play Kaupan diagnostiikkasovelluksia nopeammin."
listSummary: "laitteisto, testaus ja diagnostiikka"
hub: "brands"
sourceNumber: 159
order: 7
tags: ["laitteisto","testaus","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Xiaomi käyttää tukisivuillaan tavallisesti nimitystä hardware detection tai CIT mode. Toiminto tulee useimmiten vastaan tietyn ongelman, kuten harhailevan kosketusnäytön tai jatkuvasti käynnistyvän puhelimen, vianmäärityksessä. Valikko on tarkoitettu senhetkiseen testaukseen, ei laitteen kunnon pitkäaikaiseen seurantaan.

Siinä koko idea.

## Avaa ensin CIT

Nopein reitti on numeronvalintakoodi. Avaa puhelinsovellus ja syötä `*#*#6484#*#*`. Joissakin Xiaomi-ohjelmistoversioissa `*#*#64663#*#*` avaa saman hardware detection -valikon. Soittopainiketta ei tarvitse painaa.

Jos koodi ei reagoi, kokeile Asetusten reittiä. Siirry kohtaan **Settings > About phone > Detailed info and specs** tai **Settings > About phone > All specs** ja napauta sitten **Kernel version** -kohtaa useita kertoja. Monissa MIUI- ja HyperOS-versioissa puhelin näyttää lähtölaskennan ja avaa CIT-valikon.

Tarkka polku vaihtelee, koska Xiaomi on muuttanut Asetusten rakennetta MIUI- ja HyperOS-versioiden, aluekohtaisten ohjelmistojen ja tablettien välillä. Vanhemmissa MIUI-versioissa **Kernel version** voi näkyä suoraan About phone -sivulla. Uudemmissa HyperOS-versioissa se on tavallisesti tarkempien teknisten tietojen sivulla.

Jos kumpikaan tapa ei avaa CIT-valikkoa, tarkista kolme asiaa ennen kuin päättelet toiminnon puuttuvan: käytössä on virallinen Xiaomi-ohjelmisto, käytät puhelimen alkuperäistä puhelinsovellusta eikä laitteessa ole LineageOS:n kaltaista mukautettua ROM-versiota. Mukautetut ROM-versiot poistavat usein Xiaomin yksityiset diagnostiikkakomponentit.

## Mitä CIT oikeasti testaa

CIT testaa laitteistoa riittävän suoraan ollakseen hyödyllinen, mutta tulokset ovat silti yksinkertaisia hyväksytty- tai hylätty-tyyppisiä vastauksia. Se voi kertoa, ettei mikrofoni tallentanut ääntä tai ettei jokin kosketusalue rekisteröinyt painallusta. Se ei kerro, johtuuko vika vesivahingosta, löystyneestä taipuisasta kaapelista, huonosta vaihtonäytöstä vai laiteohjelmiston virheestä.

Valikko vaihtelee mallin mukaan. Redmi Note ilman NFC:tä ei näytä samaa luetteloa kuin Xiaomin lippulaiva, jossa on infrapunalähetin, näytönalainen sormenjälkilukija, barometri ja useita kameramoduuleja. Se on normaalia.

Tavallisia CIT-tarkistuksia ovat näyttö, kosketuspaneeli, kuuloke, kaiutin, mikrofonit, värinämoottori, kamerat, sormenjälkitunnistin, lähestymisanturi, ympäristön valoisuuden tunnistin, kiihtyvyysanturi, gyroskooppi, kompassi, SIM-lukija, Wi-Fi, Bluetooth, NFC, infrapunalähetin ja lataustila.

## Suorita kosketustesti ensimmäisenä

Jos olet ostamassa käytettyä Xiaomi-puhelinta, aloita kosketustestistä. Se löytää ongelmia, jotka voivat jäädä huomaamatta, kun vain pyyhkäiset hetken aloitusnäyttöä.

Testissä näkyy yleensä ruudukko tai piirtoalue. Vedä sormella vaadittujen alueiden yli ja etsi aukkoja, katkeavia viivoja tai kohtia, jotka eivät muutu vihreiksi. Käytetty puhelin voi näyttää virheettömältä mutta sisältää silti digitointikerroksen reunassa kuolleen kaistaleen. Löytäisin sen mieluummin ennen maksamista kuin sen jälkeen.

Xiaomi suosittelee omilla tukisivuillaan CIT-tilaa, kun kosketuspaneeli harhailee, viivästyy tai ei reagoi oikein. Se mainitsee myös tylsät syyt, jotka helposti ohitetaan: haljennut lasi, vesivahinko, kolmannen osapuolen näytönsuoja, hikiset sormet, epävakaa laturi tai yksi huonosti toimiva sovellus. Testi on hyödyllinen, mutta ei taikakeino.

## Anturit, ääni, kamerat ja yhteydet

Äänitestit ovat yksinkertaisia. Kaiutintesti toistaa ääntä pääkaiuttimesta, kuuloketesti käyttää puhelukaiutinta ja mikrofonitesti tallentaa lyhyen näytteen ja toistaa sen. Kuuntele särinää, hiljaista ääntä, kohinaa tai täydellistä hiljaisuutta. Alamikrofoni voi olla rikki vaikka puhelut kuulostaisivat normaaleilta, koska puhelin voi vaihtaa mikrofonia sovelluksen mukaan.

Anturitestit näyttävät yleensä reaaliaikaisia arvoja tai pyytävät tekemään pienen liikkeen. Peitä puhelukaiuttimen lähellä oleva lähestymisanturi. Kierrä puhelinta gyroskooppia varten. Liikuta sitä kiihtyvyysanturin ja kompassin testaamiseksi. Suuntaa valoanturi vuoroin lamppua kohti ja siitä poispäin. Jos arvot eivät liiku lainkaan, jokin on pielessä.

Kameratestit avaavat etu- ja takakameramoduulit. Ne vahvistavat, että kamera käynnistyy, tarkentaa ja ottaa kuvan. Ne eivät todista kuvanlaatua hyväksi. Naarmuuntunut linssi, heikko kuvanvakain, lasin alle päässyt pöly tai huono kolmannen osapuolen kamerasovellus voi aiheuttaa ongelmia testin ulkopuolella.

Yhteystestit etsivät Wi-Fi-verkkoja tai Bluetooth-laitteita. Se riittää vahvistamaan, että radio havaitsee ympäristönsä. Testi ei diagnosoi reititintä, operaattoria, VPN-yhteyttä tai asuntoa, joka on täynnä häiriöisiä 2,4 GHz:n verkkoja.

## Akku, lataus ja versiotiedot

CIT voi näyttää akun ja latauksen perustietoja, kuten varaustason, jännitteen, lämpötilan ja sen, tunnistaako puhelin laturin. Tästä on hyötyä, jos puhelin ei suostu latautumaan tai latautuu vain yhdellä kaapelilla.

Älä sekoita tätä kunnolliseen akun kuntohistoriaan. CIT ei anna pitkäaikaista kulumiskaaviota, lataussyklien aikajanaa tai laturivertailua. Se on tilannekuva.

Monissa Xiaomi-ohjelmistoversioissa on myös laitteistotietojen alue. Xiaomin tukisivuilla neuvotaan avaamaan hardware detection koodilla `*#*#6484#*#*` ja tarkistamaan esimerkiksi IMEI, koontiversion numero, kantataajuusversio, kernel-versio, CPU ID ja laitteistoversio. Tästä on hyötyä, kun haluat verrata Asetuksissa näkyvää ohjelmistoversiota laitteen matalan tason tietoihin.

## Android 17, HyperOS ja yhteensopivuus

Android 17 julkaistiin ensin tuetuille Pixel-laitteille. Google listaa Xiaomin Android 17 Beta -kumppaniksi, mutta se ei tarkoita, että jokainen Xiaomi-, Redmi- tai POCO-puhelin käyttäisi jo vakaata Android 17 -versiota.

Xiaomi-puhelimissa tässä ratkaiseva kerros on laiteohjelmisto, eli MIUI tai HyperOS. CIT on Xiaomin hardware detection -toiminto, ei Android 17:n yleinen ominaisuus. HyperOS-päivitys voi muuttaa valikkopolkua, piilottaa koodin, nimetä testin uudelleen tai korjata diagnostiikkavirheen ilman, että Android-versio on varsinainen syy.

Käytännössä ei kannata hätääntyä, jos MIUI 14:lle kirjoitettu opas ei vastaa tarkasti omaa HyperOS-puhelintasi. Kokeile molempia avaamistapoja.

## Milloin CIT on hyödyllinen

CIT sopii parhaiten nopeisiin tarkistuksiin ennen käytetyn puhelimen ostamista, pudotuksen tai kastumisen jälkeen sekä näytön tai akun vaihdon jälkeen. Suorita koko automaattinen testi, jos aikaa on. Suorita yksittäiset testit, jos ongelma-alue on jo tiedossa.

Ota tulosnäytöstä kuvakaappaus, jos tarvitset todisteen. Älä luota siihen, että CIT säilyttää pysyvän ja myöhemmin vietävän raportin.

Se auttaa vähemmän hitaissa puhelimissa, satunnaisissa sovelluskaatumisissa, tallennustilan ahtaudessa, useita päiviä jatkuvassa akunkulutuksessa tai pelaamisen aikaisessa thermal throttling -ilmiössä eli lämmön aiheuttamassa suorituskyvyn rajoittamisessa. Nämä ongelmat vaativat historiaa, eivät minuutin laitteistotestiä.

## Tavalliset kysymykset

### Voiko CIT vahingoittaa puhelinta?

Ei. Tavalliset testit lukevat antureita, toistavat ääntä, käyttävät värinämoottoria, avaavat kameroita ja tarkistavat komponenttien reagoinnin. Ne eivät poista tietoja tai asenna laiteohjelmistoa. Poistu valikosta palaamalla takaisin tai käynnistä puhelin uudelleen, jos valikko jumittuu.

### Miksi jotkin nimet ovat kiinaksi?

Joissakin Xiaomi- ja Redmi-malleissa näkyy edelleen kääntämättömiä CIT-nimiä, etenkin Kiinan alueohjelmistossa tai vanhemmissa MIUI-versioissa. Testit toimivat tavallisesti samalla tavalla. Kieli on ärsyttävä, ei vaarallinen.

### Toimiiko CIT POCO-puhelimissa ja Xiaomi-tableteissa?

Yleensä kyllä, kun laitteessa on virallinen Xiaomi-ohjelmisto. Käytettävissä olevat testit riippuvat laitteistosta. Vain Wi-Fi-yhteyttä tukeva tabletti ei näytä samoja mobiiliverkkotestejä kuin Redmi-puhelin, eikä infrapunalähettimetön POCO näytä infrapunatestiä.

---

*Metakuvaus: Xiaomin CIT-valikossa voi suorittaa puhelimen sisäänrakennettuja laitteistotestejä. Oppaassa käydään läpi numeronvalintakoodit, Asetusten reitti, hyödylliset testit ja asiat, joita CIT ei pysty diagnosoimaan.*
