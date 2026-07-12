---
title: "Näin testaat puhelimen näytön kuolleet pikselit ja kosketusongelmat"
description: "Olet tarkistamassa käytettyä puhelinta. Myyjän mukaan näyttö on täydellinen, ja ensi silmäyksellä siltä näyttääkin. Sitten avaat valkoisen kuvan ja huomaat kulman lähellä pienen mustan pisteen. Tai pahempaa: alat kirjoittaa, eikä yksi näppäimistön kaistale reagoi sormeen lainkaan."
listSummary: "Olet tarkistamassa käytettyä puhelinta."
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["laitteisto","testaus","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Näyttöviat piiloutuvat hyvin tavallisessa käytössä. Taustakuvat, kuvakkeet, tumma tila ja liike peittävät niitä. Muutama yksivärinen kuva ja kosketustesti tekevät vioista paljon helpommin havaittavia.

## Kuolleet ja jumiutuneet pikselit

Kuollut pikseli pysyy mustana riippumatta siitä, mitä näytöllä näkyy. Se ei enää toimi.

Jumiutunut pikseli on eri asia. Se jää palamaan yhdellä värillä, tavallisesti punaisena, vihreänä, sinisenä tai valkoisena, vaikka ympäröivä kuva muuttuu. Jumiutunut pikseli voi joskus reagoida värejä nopeasti vaihtavaan työkaluun. Kuollut pikseli ei yleensä reagoi.

Molemmat näkyvät parhaiten tasaisilla väripinnoilla. Älä tarkista puhelinta vain aloitusnäytöllä ja päätä, että kaikki on kunnossa. Silloin jää liikaa huomaamatta.

## Kuolleiden ja jumiutuneiden pikselien tarkistaminen

Nosta kirkkaus suureksi, puhdista lasi ja näytä koko näytön kokoisia yksivärisiä kuvia. Käytä valkoista, mustaa, punaista, vihreää, sinistä ja harmaata.

Selainpohjainen testi, kuten deadpixeltest.org, toimii hyvin. Play Kaupasta löytyvä näyttötestisovellus voi olla parempi, koska se voi piilottaa tila- ja navigointipalkit, vaihtaa värejä automaattisesti ja sisältää liukuväritestejä.

Joissakin puhelimissa on sisäänrakennettuja testejä:

- Samsung Galaxy: näppäile monissa malleissa `*#0*#` ja käytä Red-, Green-, Blue-, Black- ja Touch-testejä. Samsung Membersissa näyttötestit löytyvät myös valitsemalla Pyydä apua > Näytä testit.
- Google Pixel: avaa Pixel Diagnostics tuetuissa laitteissa näppäilemällä `*#*#7287#*#*`.
- Xiaomi, Redmi ja POCO: kokeile CIT-valikon koodia `*#*#6484#*#*`.
- Motorola: avaa Device Help ja siirry laitteen diagnostiikkaan sekä laitteistotesteihin.

Valkoisella taustalla kuolleet pikselit näyttävät pieniltä mustilta pisteiltä. Mustalla taustalla jumiutuneet pikselit näkyvät kirkkaina väripisteinä. Punainen, vihreä ja sininen testikuva auttavat näkemään, mikä alipikseli on jumissa.

Älä kiirehdi. Yksi hidas kierros reunoja ja kulmia pitkin paljastaa enemmän kuin värien naputtelu läpi mahdollisimman nopeasti.

## Kirkkauden tasaisuuden ja kiinnipalamisen tarkistaminen

Tasainen musta kuva hämärässä huoneessa on hyödyllinen LCD-puhelimissa, koska taustavalon vuoto näkyy reunoilla sameina ja muuta näyttöä kirkkaampina alueina. OLED-näytöissä ei ole taustavaloa, joten niissä ei esiinny samanlaista taustavalon vuotoa.

OLED-näytöillä on oma ongelmansa: kuvan kiinnipalaminen. AMOLED-, Super AMOLED- ja Dynamic AMOLED -paneelit voivat kulua epätasaisesti, jos samat elementit pysyvät näytöllä pitkään. Tavallisia jälkiä ovat navigointipalkit, tilakuvakkeet, näppäimistö ja sosiaalisen median sovellusten painikkeet.

Tarkista kiinnipalaminen tasaisella harmaalla kuvalla ja keskitasoisella kirkkaudella. Etsi näppäimistön, navigointipainikkeiden, kellon tai sovelluspalkkien haaleita varjoja. Punainen kuva voi tuoda osan jäljistä paremmin esiin, koska eri alipikselit kuluvat eri tahtiin.

Kiinnipalaminen on pysyvää. Sen korjaamista lupaavat sovellukset yrittävät yleensä kuluttaa muuta näyttöä, jotta vanha kuvio näkyisi vähemmän. Se ei oikeastaan ole korjaus.

## Kosketuksen reagoinnin testaaminen

Näyttö voi näyttää täydelliseltä, vaikka kosketuksen tunnistava digitointikerros olisi viallinen.

Avaa piirustussovellus ja valitse ohut sivellin. Piirrä vaakaviivoja näytön yläreunasta alareunaan ja sitten pystyviivoja vasemmalta oikealle. Pidä viivat lähekkäin. Jos viiva katkeaa aina samassa kohdassa, kyseinen osa digitointikerroksesta ei rekisteröi kosketusta.

Ruudukkoa käyttävä kosketustestisovellus helpottaa tarkistusta. Jokaisen ruudun pitäisi korostua, kun vedät sormen sen yli. Kuolleet alueet jäävät tyhjiksi.

Samsungin `*#0*#`-valikossa on Touch-testi monissa Galaxy-puhelimissa. Osa Android-puhelimista reagoi myös koodiin `*#*#2664#*#*`, mutta se toimii selvästi epävarmemmin kuin valmistajan omat työkalut. Jos koodi ei toimi, sillä ei ole suurta merkitystä. Piirustustesti riittää.

Tarkista erityisen huolellisesti näytön reunat. Kaareva näyttö ja hyvin ohuet reunukset voivat vaikeuttaa reunakosketusten arviointia etenkin silloin, kun kämmenen tahattomia kosketuksia estävä toiminto on käytössä.

## Monikosketuksen testaaminen

Useimmat nykyiset puhelimet tukevat vähintään viittä samanaikaista kosketuspistettä, ja monet tukevat kymmentä. Monikosketustestisovellus näyttää jokaiselle sormelle numeroidun ympyrän.

Aseta näytölle useita sormia ja liikuta niitä hitaasti. Ympyröiden pitäisi seurata sormia hyppimättä tai katoamatta. Jos puhelin hukkaa yhden sormen aina samalla alueella, havainto on hyödyllinen vian rajaamisessa.

Tällä on merkitystä peleissä, nipistyszoomauksessa, näppäimistön käytössä ja esteettömyyseleissä.

## Haamukosketusten tarkistaminen

Haamukosketukset ovat kosketuksia, joita kukaan ei tee. Puhelin avaa sovelluksia, kirjoittaa kirjaimia, vierittää näkymää tai painaa painikkeita itsestään.

Irrota ensin näytönsuoja ja kotelo. Halpa suoja, lasin alle jäänyt kosteus tai reunaan kohdistuva paine voi sekoittaa digitointikerrosta. Puhdista näyttö ja testaa sekä latauksen aikana että ilman laturia, sillä huonolaatuinen laturi voi joskus aiheuttaa sähköistä häiriötä kosketukseen.

Käynnistä puhelin sitten vikasietotilaan. Jos haamukosketukset jatkuvat siellä, laitevika on todennäköisempi. Jos ne loppuvat, syynä voi olla kolmannen osapuolen sovellus tai näytön päälle piirtyvä toiminto.

Jos kosketusongelmat alkoivat heti suuren käyttöjärjestelmäpäivityksen jälkeen, ohjelmistovikaa kannattaa pitää todellisena vaihtoehtona. Android 17 julkaistiin ensin useimmille tuetuille Pixel-puhelimille, ja muiden valmistajien versiot seuraavat myöhemmin. Siksi päivitykseen liittyvä kosketusvika voi näkyä yhdellä merkillä ennen muita. Asenna odottavat korjaukset ja testaa uudelleen ennen kuin maksat näytön vaihdosta.

## Mitä tehdä, jos löydät vian

Käytetyssä puhelimessa kuollut pikseli, kosketuksen kuollut alue, haamukosketukset tai selvä kiinnipalaminen vaikuttavat hintaan. Älä hyväksy väitettä, että kosketusongelma on "vain ohjelmistoa", ellet voi itse testata vikasietotilaa tai valmistajan diagnostiikkaa.

Jos uusi puhelin on ostettu Suomessa toimivalta yritykseltä, ilmoita viasta nopeasti ensisijaisesti myyjälle. Myyjä vastaa tavaran virheestä, eikä valmistajan takuu tai pikselikäytäntö poista myyjän lakisääteistä virhevastuuta. Verkosta ostetulla puhelimella on yleensä 14 päivän peruuttamisoikeus, mutta myymäläostoksella ei ole yleistä lakisääteistä palautusoikeutta virheettömälle tuotteelle. Näyttövika käsitellään joka tapauksessa virheenä, ei pelkkänä vapaaehtoisena palautuksena.

Jumiutunutta pikseliä voi yrittää korjata värejä kierrättävällä työkalulla, mutta odotukset kannattaa pitää matalina. Käytä työkalua lyhyen aikaa, älä jätä sitä yöksi täydelle kirkkaudelle. Kuollut pikseli, haamukosketukset ja kosketuksen kuolleet alueet vaativat yleensä koko näyttömoduulin vaihtamisen.

Näytön korjaushinnat vaihtelevat liikaa, jotta niistä voisi antaa yhden järkevän arvion. Edullisen LCD-puhelimen korjaus voi olla halpa. Kaarevan lippulaiva-OLEDin vaihto voi maksaa niin paljon, että koko puhelimen vaihtaminen alkaa tuntua järkevämmältä. Pyydä hinta-arvio juuri omalle mallillesi ennen päätöstä.

## Nopeat vastaukset

### Voiko näytönsuoja aiheuttaa kuolleita pikseleitä?

Ei. Kuolleet pikselit ovat näyttöpaneelin sisällä. Näytönsuoja voi aiheuttaa kosketusongelmia, virheellisiä kosketuksia, heikon vasteen reunoilla tai lähestymisanturin ongelmia, mutta se ei tapa pikseleitä.

### Leviävätkö kuolleet pikselit?

Yksittäinen kuollut pikseli pysyy yleensä yksittäisenä. Jos niitä ilmestyy ajan mittaan lisää, taustalla voi olla paneelin vaurio, painevaurio tai heikkenevä liitäntä.

### Kuuluuko kiinnipalaminen takuun piiriin?

Joskus, mutta sitä ei kannata olettaa. Ratkaisu riippuu siitä, katsotaanko jälki tuotteen virheeksi vai normaaliksi kulumiseksi. Varhain ilmenevä voimakas kiinnipalaminen kannattaa ilmoittaa myyjälle. Suomessa takuun päättyminen ei myöskään automaattisesti poista myyjän virhevastuuta.

### Onko yksi kuollut pikseli hyväksyttävä uudessa puhelimessa?

Ostajan näkökulmasta ei. Uuden puhelimen näytön pitäisi olla virheetön. Se, katsotaanko yksittäinen pikseli lain tai valmistajan ehtojen mukaan korvattavaksi virheeksi, arvioidaan tapauskohtaisesti, joten viasta kannattaa ilmoittaa heti.
