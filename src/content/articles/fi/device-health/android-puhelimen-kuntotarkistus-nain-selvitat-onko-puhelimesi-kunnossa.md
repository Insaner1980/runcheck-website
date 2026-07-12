---
title: "Android-puhelimen kuntotarkistus: näin selvität, onko puhelimesi kunnossa"
metaTitle: "Android-puhelimen kuntotarkistus | runcheck"
description: "Puhelin ei yleensä hajoa yhdessä yössä. Akun kapasiteetti vähenee hitaasti. Tallennustila täyttyy taustalla. Lämpötila nousee vähitellen samoissa käyttötilanteissa. Kun oireet muuttuvat selviksi, esimerkiksi puhelin sammuu satunnaisesti, sovellukset hidastelevat tai laite kuumenee jo kevyessä käytössä, taustalla oleva ongelma on tavallisesti kehittynyt kuukausien ajan."
listSummary: "Puhelin ei yleensä hajoa yhdessä yössä."
hub: "device-health"
sourceNumber: 1
order: 1
tags: []
locale: "fi"
draft: false
---
Kuntotarkistus auttaa huomaamaan nämä muutokset ajoissa. Siitä on hyötyä yksittäisen ongelman selvittämisessä, puhelimen myyntiin valmistelussa tai silloin, kun haluat tietää, onko laite todella hidastunut vai tuntuuko se vain siltä.

---

## Mitä puhelimen kuntotarkistukseen kuuluu

Kunnollinen kuntotarkistus kertoo paljon muutakin kuin akun varausprosentin. Puhelimen todellinen kunto hahmottuu usean osa-alueen perusteella.

Akun kunto kertoo, kuinka paljon alkuperäisestä kapasiteetista on jäljellä. Puhelimen 5 000 mAh:n akku saattaa kahden vuoden päivittäisen lataamisen jälkeen pystyä varastoimaan enää 4 000 mAh. Pelkkä kapasiteetti ei kuitenkaan kerro kaikkea. Jännitteen vakaus, purkautumisnopeus ja lämpötila kuormituksessa vaikuttavat siihen, kuinka pitkäksi käyttöajaksi jäljellä oleva kapasiteetti käytännössä riittää.

Tallennustilan kunto on muutakin kuin vapaiden gigatavujen määrä. Sisäisen tallennustilan luku- ja kirjoitusnopeudet voivat heikentyä ajan myötä, ja lähes täysi tallennustila pakottaa Androidin tekemään enemmän työtä väliaikaistiedostojen ja sivutusmuistin hallinnassa.

Kokonaiskuvaa täydentävät lämpötila, verkkoyhteydet, anturien toiminta ja suorittimen suorituskyky. Jatkuva kuumuus nopeuttaa akun kulumista ja voi käynnistää CPU:n lämpötilasta johtuvan suorituskyvyn rajoittamisen eli thermal throttlingin. Wi-Fi- ja mobiiliverkon diagnostiikka kertoo, kuinka hyvin yhteys todella toimii, ei vain sitä, onko yhteys olemassa. Epätarkaksi muuttunut gyroskooppi tai reagoimaton läheisyysanturi voi rikkoa toimintoja huomaamatta. Muistikuormitus puolestaan näyttää, selviääkö puhelin edelleen moniajosta ilman jatkuvaa takeltelua.

---

## Miksi Android-puhelin hidastuu ajan myötä

Tunne puhelimen hidastumisesta ei ole kuviteltu. Taustalla on yleensä monta tekijää, joiden vaikutukset kasaantuvat.

### Akun kuluminen

Litiumioniakku kuluu kemiallisesti jokaisen lataussyklin aikana. Vanhempien puhelinten yhteydessä puhuttiin usein 500 lataussyklin rajasta, mutta sitä ei enää kannata käyttää yleispätevänä sääntönä. Monien uusien puhelinten akku on mitoitettu noin 800-1 000 täydelle lataussyklille ennen kuin kapasiteetti laskee noin 80 prosenttiin alkuperäisestä. Tarkka määrä riippuu mallista, akkukemiasta ja latausolosuhteista. Sen jälkeen näytön käyttöaika lyhenee selvästi ja odottamattomat sammumiset käyvät raskaassa kuormituksessa todennäköisemmiksi.

Kuumuus pahentaa tilannetta. Lataaminen kuumassa, pelaaminen latauksen aikana ja puhelimen jättäminen kesällä auton kojelaudalle nopeuttavat kaikki akun kemiallista kulumista.

### Tallennustilan paine

Sovellukset, välimuistit, kuvat ja järjestelmäpäivitykset kertyvät vähitellen. Android tarvitsee vapaata tilaa väliaikaistiedostoihin ja päivityksiin. Kun vapaana on enää noin 10-15 prosenttia koko tallennustilasta, puhelin alkaa usein tuntua hitaalta. Tämä on käytännön nyrkkisääntö, ei Androidin ehdoton raja. Sovellukset käynnistyvät hitaammin, kamera jää odottamaan kuvan tallennusta ja animaatiot nykivät.

### Taustaprosessien lisääntyminen

Jokainen asennettu sovellus voi käyttää taustapalveluita, synkronoida tietoja ja lähettää ilmoituksia. Vuoden tai kahden aikana niiden yhteinen kuormitus kasvaa. Kun samaan aikaan Android-päivitykset vaativat laitteistolta hieman enemmän jokaisen sukupolven myötä, vanha puhelin alkaa jäädä jälkeen.

### Fyysinen kuluminen

Latausportti löystyy. Kaiuttimien ääni menettää selkeyttään. Kosketusnäytön herkkyys voi heiketä tietyistä kohdista. Anturien kalibrointi voi ajautua sivuun. Muutokset tapahtuvat niin hitaasti, että niitä on helppo olla huomaamatta, kunnes ne alkavat haitata päivittäistä käyttöä.

---

## Tarkistukset, jotka voit tehdä heti

Androidissa on perustason kuntotarkistukseen sisäänrakennettuja työkaluja, joten erillistä sovellusta ei välttämättä tarvita.

### Akun kunto asetuksissa

Polku vaihtelee valmistajan mukaan:

**Samsung:** Avaa Samsung Members, valitse Tuki ja sitten Puhelimen vianmääritys. Suorita akun diagnostiikka. Mallista, alueesta ja One UI -versiosta riippuen tulos voi olla yksinkertainen kuntoluokitus tarkan prosenttiluvun sijaan.

**Google Pixel** (Pixel 8a ja uudemmat): Googlen ohjeissa polku on Settings > Battery > Battery health. Siellä näkyvät akun kuntotila ja arvio jäljellä olevasta kapasiteetista. Settings > About phone > Battery information näyttää lataussyklien määrän, valmistuspäivän ja ensimmäisen käyttöönoton päivämäärän. Pitkän aikavälin kapasiteettia suojaava Battery Health Assistance on käytettävissä Pixel 6a:ssa ja sitä uudemmissa malleissa.

**Xiaomi/POCO** (HyperOS): Joissakin malleissa asetusten Akku-osiossa näkyy latauksen suojaukseen tai latauskertoihin liittyviä tietoja. Tarkka sisältö ja polku vaihtelevat mallin, alueen ja HyperOS-version mukaan, eikä näkyvä luku välttämättä ole varsinainen akun kuntoprosentti tai kaikkien lataussyklien kokonaismäärä.

Jos puhelin ei näytä näitä tietoja asetuksissa, voit kokeilla diagnostiikkakoodia. Avaa puhelinsovelluksen numeronäppäimistö ja kirjoita `*#*#4636#*#*`. Tuetuissa laitteissa avautuvassa testivalikossa voi näkyä akun jännite, lämpötila ja karkea kuntotila. Se ei yleensä näytä todellista kapasiteettiprosenttia tai lataussyklien määrää.

### Tallennustilan käyttö

Asetusten tallennustilanäkymä erittelee käytön esimerkiksi sovelluksiin, kuviin, videoihin, järjestelmätiedostoihin ja välimuistiin. Jos tallennustilasta on käytössä yli 85 prosenttia, tilanteeseen kannattaa puuttua. Sovellusten välimuistien tyhjentäminen ja vanhojen tiedostojen siirtäminen muualle voi parantaa reagointinopeutta selvästi.

### Lämpötila

Useimmissa puhelimissa ei ole sisäänrakennettua lämpötilamittaria, mutta laitteen tuntuma kertoo paljon. Jos puhelin lämpenee kevyessä selailussa tai ollessaan käyttämättä, syy kannattaa selvittää. Tuetuissa laitteissa `*#*#4636#*#*`-valikko näyttää akun lämpötilan, joten saat ainakin mitattavan arvon tarkasteltavaksi.

### Laitteiston perustestit

Muutama nopea testi riittää alkuun. Avaa piirustussovellus ja vedä sormea koko näytön alueella kuolleiden kosketuskohtien löytämiseksi. Toista ääntä eri voimakkuuksilla kaiuttimien testaamiseksi. Tallenna lyhyt äänimuistio mikrofonilla. Kokeile molempia kameroita, salamavaloa ja näytön automaattista kiertoa.

---

## Edistyneempi diagnostiikka

Manuaalisilla tarkistuksilla näkee pintatason tilanteen. Tarkempaa kokonaiskuvaa varten tarvitaan syvempiä työkaluja.

### Anturien testaaminen

Puhelimessa on paljon antureita, kuten kiihtyvyysanturi, gyroskooppi, magnetometri, läheisyysanturi, ympäristön valoisuuden anturi ja ilmanpainemittari. Anturivian oireet voivat olla hyvin tarkkarajaisia. Näyttö ei enää kierry, se ei sammu puhelun aikana, kompassisuunta heittää tai GPS-tarkkuus romahtaa.

Yksittäisten anturien testaamiseen tarvitaan diagnostiikkasovellus tai valmistajan testikoodi. Samsungin laitteissa `*#0*#` voi avata laitteiston testivalikon, mutta toiminto ei ole käytettävissä kaikissa malleissa tai ohjelmistoversioissa. Muillakin valmistajilla on omia koodejaan, joiden saatavuus vaihtelee.

### Suorituskykytestit

Suorituskykytestit kuormittavat CPU:ta, GPU:ta ja muistia vakioiduilla testeillä. Tulosta voidaan verrata saman laitemallin odotettuun tasoon. Selvästi vertailutasoa heikompi tulos voi viitata lämpötilasta johtuvaan suorituskyvyn rajoittamiseen, liialliseen taustakuormaan tai laitteiston kulumiseen.

### Verkkodiagnostiikka

Wi-Fi-yhteyden muodostuminen ei vielä kerro paljon yhteyden laadusta. Todelliseen käyttökokemukseen vaikuttavat tiedonsiirtonopeus, viive, pakettihävikki ja signaalin vakaus. Tarkempi verkkodiagnostiikka auttaa erottamaan puhelimesta johtuvan ongelman itse verkon viasta.

### Akun analysointi

Androidin asetuksissa näkyvä "Hyvä" tai "Heikko" -tyyppinen luokitus on parhaimmillaankin karkea arvio. Kunnollinen akkuanalyysi vertaa todellista kapasiteettia nimelliskapasiteettiin, kirjaa purkautumisnopeuksia eri tilanteissa, seuraa lämpötilan kehitystä ja laskee lataussyklejä silloin, kun puhelin antaa tiedot käyttöön. Jos todellisia laitteistolaskureita ei ole saatavilla, sovellus voi arvioida kapasiteettia latauskäyttäytymisen perusteella, mutta tulosta pitää tulkita varovaisemmin. Näiden tietojen avulla näkee, pidentäisikö akun vaihto puhelimen käyttöikää merkittävästi.

Asetusvalikoiden, diagnostiikkakoodien ja manuaalisten testien välillä hyppimällä saa paljon selville, mutta kokonaisuus jää hajanaiseksi. **runcheck** kokoaa akun, lämpötilan, verkon ja tallennustilan mittarit yhdelle näkymälle ja muodostaa niistä yhtenäiset kuntopisteet. Se sopii säännöllisiin tarkistuksiin ja on erityisen hyödyllinen käytetyn puhelimen ostossa tai myynnissä, kun molemmat osapuolet hyötyvät puolueettomasta kuntoraportista.

---

## Usein kysyttyä

### Kuinka usein puhelimen kunto kannattaa tarkistaa?

Kerran kuukaudessa riittää useimmille. Yli kaksi vuotta vanhassa puhelimessa tai suorituskykyongelmien ilmaantuessa tarkistus parin viikon välein auttaa havaitsemaan muutokset nopeammin. Akun kapasiteetti vähenee, lämpötila nousee tai tallennustila täyttyy huomaamatta.

### Korjaako tehdasasetusten palautus hitaan puhelimen?

Se riippuu syystä. Palautus voi auttaa ohjelmiston paisumiseen, hallitsemattomiin taustaprosesseihin ja vioittuneisiin välimuisteihin. Se ei korjaa kulunutta akkua, heikentyneitä tallennuspiirejä tai vikaantuvia antureita. Diagnostiikkatarkistus ennen palautusta auttaa selvittämään, onko ongelma ohjelmistossa vai laitteistossa.

Varmuuskopioi kaikki tiedot ennen palautusta.

### Missä akun kuntoprosentissa vaihtoa kannattaa harkita?

Yleinen raja on noin 80 prosenttia alkuperäisestä nimelliskapasiteetista. Sen alapuolella lyhyempi käyttöaika ja jatkuvasti tihenevä lataustarve alkavat näkyä arjessa. Alle 70 prosentin kapasiteetilla puhelimen käyttäminen päivittäisenä laitteena käy jo hankalaksi. Kehityssuunta näkyy mittaustiedoissa yleensä paljon ennen kuin tilanne muuttuu sietämättömäksi.

### Toimivatko diagnostiikkakoodit kaikissa Android-puhelimissa?

Eivät. `*#*#4636#*#*` toimii monissa laitteissa, mutta ei kaikissa. Samsungilla on omia koodejaan, ja Xiaomi, OnePlus, Motorola sekä muut valmistajat toteuttavat testit eri tavoin. Tämä hajanaisuus on yksi syy diagnostiikkasovellusten olemassaoloon: ne kokoavat testit yhtenäisempään muotoon valmistajasta riippumatta.

### Ovatko kolmannen osapuolen diagnostiikkasovellukset turvallisia?

Ovat, kun sovellus on tunnetulta kehittäjältä ja ladattu Google Play Kaupasta. Turvallisissa vaihtoehdoissa perusmittaukset tehdään laitteessa, eikä sovellus pyydä tiliä tai diagnostiikkaan liittymättömiä käyttöoikeuksia. Jos laitteen kuntoa tarkistava sovellus vaatii pääsyn yhteystietoihin tai viesteihin ilman selvää syytä, se on varoitusmerkki.

---

Säännöllinen kuntotarkistus muuttaa epämääräisen tunteen siitä, että jokin on pielessä, mitattavaksi tiedoksi. Kuukausittainen tarkistus vie muutaman minuutin ja voi paljastaa akun kapasiteetin laskun, nousevat lämpötilat tai täyttyvän tallennustilan ennen kuin ne alkavat häiritä päivittäistä käyttöä.
