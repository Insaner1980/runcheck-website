---
title: "Android-puhelimen kattava diagnostiikka"
description: "Androidissa ei ole yhtä \"suorita diagnostiikka\" -painiketta, joka tarkistaisi kaiken kerralla. Työkalut ovat olemassa, mutta ne ovat hajallaan Asetuksissa, piilotetuissa valintakoodeissa, valmistajien sovelluksissa ja järjestelmäkomennoissa, joita useimmat eivät koskaan näe. Tämä opas kokoaa ne yhdeksi tarkistuskierrokseksi ja kertoo samalla, missä valmistaja-, operaattori- ja Android-versiokohtaiset erot tulevat vastaan."
listSummary: "Androidissa ei ole yhtä \"suorita diagnostiikka\" -painiketta, joka tarkistaisi kaiken kerralla."
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","päivitykset","tietoturva","ohjelmisto","opas"]
locale: "fi"
draft: false
---
## Nopein tapa: valmistajan omat diagnostiikkatyökalut

Monet suuret Android-valmistajat toimittavat oman diagnostiikkatyökalun joko valmiiksi asennettuna tai valintakoodin takana. Aloita siitä ennen muiden sovellusten asentamista.

**Samsung Galaxy -puhelimissa** on yksi helpoimmin käytettävistä sisäisistä diagnostiikoista. Avaa Puhelin-sovellus ja näppäile `*#0*#`. Se avaa testipaneelin, jossa voi tarkistaa näytön värit ja kuolleet pikselit, kosketuksen, etu- ja takakamerat, kaiuttimet, värinämoottorin sekä esimerkiksi kiihtyvyys- ja lähestymisanturit. Koodi toimii monissa vanhoissa ja uusissa Galaxy-malleissa, mutta operaattorin ohjelmisto tai alueversio voi estää huoltovalikon. Samsung Members sisältää myös diagnostiikan. Avaa sovellus, valitse **Tuki** ja sitten **Puhelimen vianmääritys**. Tarkistuksiin kuuluu mallista riippuen akku, näyttö, kosketus, ääni, Wi-Fi, Bluetooth ja useita antureita. Tuloksena saat kunkin kohdan hyväksytyn tai hylätyn tilan. Joissakin uudemmissa Galaxy-malleissa ja ohjelmistoversioissa voi näkyä myös akun tarkempia kuntotietoja ja lataussyklien määrä.

**Google Pixel -puhelimissa** on kaksi hyödyllistä diagnostiikkareittiä. Pixel 6:ssa ja uudemmissa **Device health and support** näyttää laitteen yleisen tilan, eri ominaisuuksien tilan, akun ja lämpötilan tietoja sekä ehdotettuja tarkistuksia, kuten lataus- tai kosketusdiagnostiikan. Toiminto on saatavilla kaikilla kielillä, mutta sen suomenkielinen nimi voi vaihdella ohjelmistoversion mukaan. Pixelin korjausdiagnostiikan voi käynnistää Pixel 3:ssa ja uudemmissa avaamalla Puhelin-sovelluksen internetyhteyden ollessa käytössä ja näppäilemällä `*#*#7287#*#*`. Työkalu on tällä hetkellä englanninkielinen. Pixel 8a:ssa ja uudemmissa lataussyklien määrä, valmistuspäivä ja ensimmäinen käyttöpäivä löytyvät polusta **Asetukset > Tietoja puhelimesta > Akun tiedot**. Monissa muissa lähes vakio-Androidia käyttävissä puhelimissa `*#*#4636#*#*` avaa testivalikon, jossa voi näkyä puhelin- ja verkkotietoja, akun jännite, lämpötila ja tila sekä käyttötietoja. Koodi toimii luotettavammin vanhoissa laitteissa, sillä osa uusista puhelimista ja operaattoriohjelmistoista rajoittaa sitä.

**Xiaomi-, POCO- ja Redmi-puhelimissa** on piilotettu CIT-testausvalikko. Näppäile Puhelin-sovellukseen `*#*#6484#*#*` tai `*#*#64663#*#*`. Valikossa voi mallista riippuen testata kosketusnäytön, näyttövärit, lähestymisanturin, kiihtyvyysanturin, gyroskoopin, kompassin, salamavalon, kaiuttimet, mikrofonin, kamerat, värinän, Wi-Fi-yhteyden, Bluetoothin, GPS:n ja sormenjälkitunnistimen. Testit vaativat yleensä manuaalisen vahvistuksen: puhelin näyttää kuvion tai toistaa äänen, minkä jälkeen valitset hyväksytyn tai hylätyn tuloksen.

**OnePlus-puhelimissa** `*#808#` voi avata diagnostiikkavalikon joissakin malleissa ja ohjelmistoversioissa. Saatavilla olevat testit voivat kattaa näytön, äänen, yhteydet ja anturit, mutta tuki vaihtelee enemmän kuin Samsungilla tai Pixelillä.

Mikään näistä koodeista ei toimi yleisesti kaikissa puhelimissa. Valmistaja voi jättää koodin toteuttamatta, operaattoriohjelmisto voi estää sen tai valikko voidaan poistaa päivityksessä. Jos mitään ei tapahdu, koodia ei todennäköisesti tueta kyseisessä laitteessa.

## Androidin sisäiset työkalut, jotka löytyvät lähes kaikista puhelimista

Vaikka valmistajan omaa testivalikkoa ei olisi, jokainen nykyaikainen Android-puhelin näyttää Asetuksissa hyödyllisiä diagnostiikkatietoja. Niistä ei synny täydellistä kuntotestiä, mutta ne paljastavat tavallisia ongelmia.

**Akun käyttötiedot** löytyvät Asetusten Akku-osiosta. Näkymä näyttää yleensä kulutuksen viimeisten 24 tunnin ajalta tai joillakin valmistajilla useammalta päivältä. Etsi tavallista jyrkempiä pudotuksia, jotka voivat viitata taustalla toimivaan sovellukseen tai prosessiin. Android 9:n ja 10:n näkymä on pelkistetympi: se näyttää sovellukset kulutusosuuden mukaan ilman yhtä tarkkaa kuvaajaa, mutta suurimmat kuluttajat löytyvät silti. Android 14:ssä ja uudemmissa jotkin laitteet antavat kolmansien osapuolten sovelluksille BatteryManager- ja HAL-tietoja, joista voidaan arvioida kapasiteettia tai lukea lataussyklien määrä. Se, näkyvätkö nämä tiedot, riippuu valmistajan toteutuksesta.

**Tallennustilan tiedot** löytyvät Asetusten Tallennustila-osiosta. Käyttö eritellään tavallisesti sovelluksiin, kuviin, videoihin, äänitiedostoihin, asiakirjoihin ja järjestelmätiedostoihin. Jos puhelin hidastelee ja tallennustilasta on käytössä yli 85 %, syy voi olla siinä. Sisäisen flash-muistin ohjaimelle jää silloin vähemmän tilaa kulumisen tasaukseen ja käyttämättömien lohkojen siivoamiseen.

**Verkkotiedot** löytyvät Asetusten verkko- ja internetosiosta. Siellä näkyvät käytössä oleva yhteystyyppi, Wi-Fi-verkko ja usein signaalin perustiedot. Tarkempi mobiilisignaalin voimakkuus dBm-arvona löytyy monissa laitteissa SIM-kortin tilatiedoista. Noin -50 dBm:n ja -90 dBm:n välinen arvo on tavallinen toimiva alue. Alle -110 dBm tarkoittaa heikkoa kuuluvuutta.

**Kehittäjäasetuksissa** on muutama hyödyllinen työkalu. Ota ne käyttöön napauttamalla Asetusten puhelintiedoissa **Koontiversion numero** -kohtaa seitsemän kertaa. Sen jälkeen käytössä ovat esimerkiksi aktiiviset palvelut ja muistinkäyttö näyttävä **Käynnissä olevat palvelut**, ADB-yhteyteen tarvittava **USB-virheenkorjaus** sekä yksityiskohtaisen järjestelmälokin muodostava **Virheraportti**. Nimien sijainti ja kirjoitusasu voivat vaihdella valmistajan mukaan.

## Anturien ja laitteiston testaaminen ilman sovelluksia

Lähestymisanturin voi joissakin puhelimissa testata koodilla `*#*#0588#*#*`. Käytännön testit toimivat usein yhtä hyvin. Avaa Google Maps ja tarkista, kääntyykö sininen suuntakartio puhelinta kääntäessäsi. Se kertoo kompassin ja gyroskoopin toiminnasta. Soita puhelu ja katso, sammuuko näyttö puhelimen ollessa korvalla. Peitä etupuolen valoanturi ja tarkista, reagoiko automaattinen kirkkaus.

GPS:n voi tarkistaa millä tahansa karttasovelluksella, mutta erillinen GPS-testisovellus näyttää satelliittien määrän ja signaali-kohinasuhteet. Ulkona avoimen taivaan alla toimivan puhelimen pitäisi tavallisesti saada sijainti nopeasti ja nähdä useita satelliitteja. Tarkka määrä ja lukittumisaika riippuvat paikasta, säästä, rakennuksista, antennista ja siitä, onko avustettu paikannus käytettävissä.

## Milloin kolmannen osapuolen sovelluksesta on oikeasti hyötyä

Sisäiset työkalut kattavat paljon, mutta niissä on aukkoja. Kolmannen osapuolen sovellukset auttavat erityisesti kolmessa asiassa.

Akun kunnon arviointi on suurin puute. AccuBattery seuraa latausta ja arvioi jäljellä olevan kapasiteetin suhteessa nimelliskapasiteettiin. Hyödyllinen arvio vaatii yleensä noin viikon ja useita latauskertoja, ja se tarkentuu käytön myötä. DevCheck näyttää reaaliaikaisesti CPU:n kellotaajuuksia, GPU:n taajuuden, lämpötila-alueita, akun virran ja jännitteen sekä anturitietoja. Se sopii lämpötilasta johtuvan suorituskyvyn rajoittamisen, eli thermal throttlingin, selvittämiseen ja virheellisiä arvoja ilmoittavien anturien löytämiseen. AIDA64 näyttää yksityiskohtaisia laitetietoja, kuten SoC-mallin, näytön tarkkuuden ja tiheyden, RAM-muistin määrän, tallennustilan tiedot ja asennetut koodekit. Se tunnistaa laitteiston paremmin kuin diagnosoi sitä, mutta on hyödyllinen, kun haluat tietää, mitä puhelimessa todella on.

Mikään sovellus ei pääse tietoihin, jotka valmistaja on jättänyt rajapinnan ulkopuolelle. Jos akun kuntoa tai lataussyklejä ei tarjota julkisen HAL- tai Android-rajapinnan kautta, sovellus ei voi lukea niitä varmasti. Se voi vain arvioida kapasiteettia lataustietojen perusteella.

## Syvempi tarkistus ADB:llä

Android Debug Bridge tarjoaa syvimmän diagnostiikan ilman roottausta. Yhdistä puhelin USB-kaapelilla tietokoneeseen, ota USB-virheenkorjaus käyttöön ja suorita komennot:

`adb shell dumpsys battery` näyttää akun varaustason, lämpötilan, jännitteen, lataustilan ja järjestelmän ilmoittaman kuntotilan. Joissakin laitteissa mukana voi olla lataussyklien määrä. Tuloste vaihtelee valmistajittain: Samsung voi näyttää kenttiä, joita Pixel ei näytä, ja päinvastoin.

`adb shell dumpsys batterystats` tuottaa laajan akun käyttöhistorian, johon sisältyy muun muassa wakelock-tietoja, sovellusten käyttöä ja verkkoliikennettä. Googlen Battery Historian voi muuttaa aineiston aikajanaksi, josta näkee, mikä kulutti akkua ja milloin.

`adb shell dumpsys connectivity` näyttää nykyisen verkkotilan, DNS-palvelimia ja aktiivisia verkkoliitäntöjä.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` yrittää lukea lämpötila-antureita. Kaikki alueet eivät ole käytettävissä. Android 12:ssa ja uudemmissa SELinux-käytännöt rajoittavat sysfs-polkujen lukemista, ja osa lämpötila-alueista vastaa ADB-yhteydelläkin "Permission denied".

ADB edellyttää tietokonetta ja jonkin verran komentorivin tuntemusta. Useimmille riittävät Asetusten tiedot, valmistajan diagnostiikka ja huolellinen laitteiston manuaalitarkistus.

## Tulosten tulkitseminen

Raakaluvut tarvitsevat taustan. Akun lämpötila 32 °C kevyessä käytössä on normaali. Jos puhelin on viileässä huoneessa käyttämättömänä ja näyttää 42 °C, jokin on pielessä. Tallennustilan 78 %:n käyttöaste ei vielä ole ongelma. Kun käyttöaste nousee 92 %:iin, suorituskyky voi kärsiä. Mobiilisignaali -85 dBm toimii tavallisesti sisällä. Arvolla -115 dBm puhelut voivat katkeilla.

Diagnostiikan tarkoitus ei ole löytää yhtä lukua, joka sanoo "rikki". Tarkoitus on verrata havaintoja odotettuun ja tunnistaa toistuvia ilmiöitä: akku menettää 15 % kapasiteetistaan kuudessa kuukaudessa, anturi ilmoittaa jatkuvasti nollaa tai lähes täysi tallennustila hidastaa kaikkea.

runcheck yhdistää akun, lämpötilan, verkon ja tallennustilan diagnostiikan yhteen näkymään ja muodostaa niistä kuntopisteet. Näin jokaista järjestelmää ei tarvitse tarkistaa erikseen. Sovellus näyttää myös luottamustason, jos jokin lukema on arvio tai muuten epävarma. Se on tärkeää, koska kaikki Android-laitteet eivät ilmoita kaikkia mittareita yhtä luotettavasti.

## Usein kysytyt kysymykset

**Voiko diagnostiikan suorittaa puhelimessa, joka ei käynnisty?**
Vain osittain. Jos puhelin avaa palautustilan, voit yleensä varmistaa ainakin näytön, fyysisten painikkeiden ja latausreaktion toiminnan. Kosketusta voi testata vain palautustiloissa, jotka tukevat sitä. Jotkin Samsung-puhelimet voidaan avata Download Mode -tilaan laiteohjelmiston käsittelyä varten. Täysi diagnostiikka vaatii toimivan käyttöjärjestelmän.

**Tarvitsevatko diagnostiikkasovellukset root-oikeudet?**
Eivät. Kaikki tässä kuvatut tarkistukset toimivat ilman roottausta. Root-oikeudet avaavat joitakin kernel-tason tietoja, mutta niitä ei tarvita käytännölliseen kuntotarkistukseen. Rootattu tai muuten muokattu järjestelmä voi lisäksi jäädä ilman Play Integrityn laite-eheystulosta, jolloin esimerkiksi pankki- tai maksusovellus voi rajoittaa toimintaansa. Se voi myös hankaloittaa valmistajan tukea tai takuukäsittelyä.

**Kuinka usein kattava diagnostiikka kannattaa tehdä?**
Kun puhelin alkaa oireilla: sovellukset käynnistyvät hitaammin, akku tyhjenee oudosti, yhteydet katkeilevat tai laite kuumenee. Kiinteää aikataulua ei tarvita. Käytettyä puhelinta ostettaessa kattava tarkistus kannattaa aina tehdä ennen maksamista.

**Toimiiko `*#0*#` muissa kuin Samsung-puhelimissa?**
Ei yleensä. Xiaomi käyttää monissa malleissa koodia `*#*#6484#*#*`, OnePlus voi käyttää koodia `*#808#`, Pixelin korjausdiagnostiikka käynnistyy koodilla `*#*#7287#*#*` ja monissa lähes vakio-Androidia käyttävissä puhelimissa toimii `*#*#4636#*#*`. Saatavuus riippuu mallista, alueesta, laiteohjelmistosta ja operaattorista.

**Vaikuttaako diagnostiikan suorittaminen tietoihin tai asetuksiin?**
Tavalliset diagnostiikat vain lukevat tietoja ja testaavat toimintoja. Poikkeus on huoltovalikko, jossa voi olla myös tehdasasetusten palautus tai muita muuttavia toimintoja. Pysy testi- ja diagnostiikkaosioissa.
