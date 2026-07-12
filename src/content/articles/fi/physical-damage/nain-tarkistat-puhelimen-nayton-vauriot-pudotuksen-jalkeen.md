---
title: "Näin tarkistat puhelimen näytön vauriot pudotuksen jälkeen"
description: "Nostat puhelimen lattialta, lasi näyttää ehjältä ja hetken ajattelet selvinneesi säikähdyksellä. Ehkä selvisitkin. Näyttö voi kuitenkin näyttää pudotuksen jälkeen täysin ehjältä, vaikka paneelissa tai kosketuskerroksessa olisi pieniä vaurioita."
listSummary: "Nostat puhelimen lattialta, lasi näyttää ehjältä ja hetken ajattelet selvinneesi säikähdyksellä."
hub: "physical-damage"
sourceNumber: 131
order: 1
tags: ["laitteisto","testaus","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Tarkoitus ei ole testata paniikissa jokaista pikseliä kuin olisit ostamassa käytettyä puhelinta tuntemattomalta. Tarkoitus on löytää asiat, joilla on merkitystä: halkeamat, kuolleet pikselit, kosketuksen katvealueet, värimuutokset, välkyntä ja paneelin irtoaminen.

## Aloita lasista ja rungosta

Tee ensin tylsä tarkistus.

Pyyhi näyttö puhtaaksi, irrota suojakuori ja tutki puhelinta kirkkaassa valossa. Kallistele sitä hitaasti. Hiushalkeamat näkyvät usein vain tietyssä kulmassa, etenkin nurkissa ja kaarevien reunojen lähellä. Tarkista ensin lattiaan osunut kulma ja käy sen jälkeen koko näytön kehys läpi.

Etsi lasin ja rungon välistä rakoa. Pieni kohoama yhdessä kulmassa voi tarkoittaa, että näyttömoduuli on siirtynyt tai liimaus on irronnut. Sillä on merkitystä, vaikka kosketus toimisi vielä, sillä pöly ja kosteus voivat nyt päästä sisään.

Jos käytät näytönsuojaa, tarkista se erikseen. Haljennut suojalasi voi saada näytön näyttämään vaurioituneelta, vaikka varsinainen lasi olisi ehjä. Myös päinvastainen on mahdollista: paksu suojalasi voi peittää alleen halkeaman. Jos isku oli kova ja suojalasi on pahasti rikki, irrota se vain, jos pystyt tekemään sen turvallisesti vetämättä irtonaista lasia mukanaan.

## Tarkista kuolleet ja jumiutuneet pikselit

Kuollut pikseli näkyy yleensä pienenä mustana pisteenä vaalealla taustalla. Jumiutunut pikseli voi pysyä punaisena, vihreänä, sinisenä tai valkoisena silloin, kun sen ei pitäisi.

Avaa ensin täysin valkoinen näkymä. Tyhjä muistiinpano, valkopohjainen verkkosivu tai näytöntestaussovellus käy hyvin. Nosta kirkkautta, pyyhi lasi vielä kerran ja käy näyttö hitaasti läpi ylhäältä alas. Tee sama mustalla, punaisella, vihreällä ja sinisellä taustalla. Eri värit paljastavat eri vikoja.

Google Playsta löytyvä koko näytön yksivärisiä näkymiä näyttävä testaussovellus on tässä hyödyllinen. Mitään hienoa ei tarvita. Vältä sovelluksia, jotka pyytävät outoja käyttöoikeuksia. Pikselitesti ei tarvitse yhteystietoja, sijaintia, puhelulokia tai esteettömyyspalvelun oikeuksia.

Yksi kuollut pikseli pudotuksen jälkeen ei tarkoita varmasti, että näyttö hajoaa huomenna. Iskukohdan lähellä oleva pikseliryhmä on silti huono merkki. Kyse on fyysisestä vauriosta, ei ohjelmistovirheestä.

## Testaa kosketus koko näytön alueelta

Näyttöpaneeli ja kosketuskerros ovat riittävän erillisiä osia siihen, että toinen voi rikkoutua toisen näyttäessä normaalilta. Siksi puhelin voi näyttää täydellisen kuvan mutta jättää yhden näytön kaistaleen napautukset huomiotta.

Avaa piirrossovellus ja vedä hitaita, yhtenäisiä viivoja koko näytön poikki. Piirrä vasemmalta oikealle, ylhäältä alas ja lopuksi vinottain. Älä tyydy napauttamaan muutamaa kuvaketta. Katvealue voi olla hyvin kapea, ja pyyhkäisytesti löytää katkoksia paremmin kuin yksittäiset napautukset.

Tarkkaile viivan katkeamista, sahalaitaisia hyppyjä, viivettä tai alueita, joille viivaa ei synny lainkaan. Testaa reunat huolellisesti. Reunavaurio jää helposti huomaamatta, koska näytön uloimpia millimetrejä ei tavallisessa käytössä kosketa jatkuvasti.

Samsung-käyttäjien kannattaa aloittaa tuetusta menetelmästä: avaa Samsung Members, valitse alareunasta Pyydä apua ja napauta Vianmääritys-kohdassa Näytä testit. Suorita kosketusnäytön ja näytön testit. Joissakin Galaxy-puhelimissa laitteistotestivalikko aukeaa myös koodilla `*#0*#`, mutta koodi voi olla poistettu käytöstä alueen, operaattorin, mallin tai suojausasetusten vuoksi. Älä luota siihen ainoana testinä.

Google ilmoittaa Touch diagnostics -testin olevan käytettävissä Pixel 9-, Pixel 9 Pro- ja Pixel 9 Pro XL -malleissa reitillä Settings > Display & touch > Touch diagnostics. Vanhemmissa Pixeleissä voi näkyä Touch sensitivity -asetuksia, ja tuetuissa Pixel-malleissa voi olla käytettävissä erillinen korjausdiagnostiikka. Jos omassa Pixelissäsi ei näy samaa valikkoa, älä yritä pakottaa ohjetta sopimaan. Käytä piirrostestiä.

## Tarkista kirkkaus, välkyntä ja värit

Kirkkausongelmat tulevat usein esiin vasta liukusäädintä siirrettäessä.

Avaa näytön asetukset ja siirrä kirkkaus hitaasti vähimmästä enimmäiseen. Kirkkauden pitäisi muuttua tasaisesti. Välkyntä, äkillinen sammuminen pienellä kirkkaudella, sykintä tai yhden alueen muita hitaampi muutos voi viitata paneelin tai näytön ohjauselektroniikan vaurioon.

Avaa seuraavaksi tummanharmaa kuva tai tumma sovellusnäkymä hämärässä huoneessa. OLED-näytössä isku voi näkyä painaumina tai sävyttyneinä laikkuina. LCD-näytössä reunoille voi ilmestyä uutta taustavalon vuotoa. Edullisissa LCD-paneeleissa pieni epätasaisuus voi olla normaalia, joten vertaa näkymää siihen, miltä näyttö näytti ennen pudotusta. Olennaista on se, mikä on uutta.

Avaa valokuva, jonka tunnet hyvin. Ihonsävyt, valkoiset seinät ja harmaat taustat paljastavat uuden vihreän, vaaleanpunaisen tai keltaisen sävyn helposti. Jos väri muuttuu, kun painat kevyesti iskukohdan lähellä, lopeta painaminen. Kyse ei ole asetuksesta.

## Älä unohda päivityksen ajoitusta

Pudotus tarjoaa siistin selityksen: puhelin putoaa, näyttö alkaa toimia oudosti, joten näyttö on rikki. Todellisuus on usein sotkuisempi.

Jos näyttö alkoi oireilla samoihin aikoihin asennetun järjestelmäpäivityksen jälkeen, testaa ennen kuin syytät laitteistoa. Android 17 julkaistiin 16. kesäkuuta 2026 useimmille tuetuille Pixel-laitteille, ja muiden valmistajien Android 17 -laitteita tulee myöhemmin. Siksi uuden version ensimmäiset ongelmaraportit näkyvät luonnostaan Pixeleissä ennen muita laitteita. Käynnistä puhelin uudelleen, tarkista, onko saatavilla uutta korjauspäivitystä, ja käynnistä vikasietotila, jotta voit sulkea sovellusten vaikutuksen pois.

Vikasietotila ei silti korjaa haljennutta lasia, rikkoutunutta OLED-kerrosta tai vaurioitunutta kosketuskerrosta. Jos sama katvealue näkyy vikasietotilassa, asetuksissa, piirrossovelluksessa ja lukitusnäytössä, vika on laitteistossa.

## Milloin runcheck voi auttaa

Näyttötesti tarkistaa vain näytön. Pudotus voi häiritä myös akun liitäntää, lämpötila-antureita, antennien koskettimia, kameramoduulia tai latausliitäntää.

runcheck näyttää akun, lämpötilan, verkkoyhteyden ja tallennustilan kunnon samassa paikassa. Se ei pysty diagnosoimaan haljennutta kosketuskerrosta, mutta sen avulla voi huomata pudotuksen jälkeen alkaneen poikkeavan akunkulutuksen, kuumenemisen tai yhteysongelman. Tästä on hyötyä, jos näyttö näyttää ehjältä mutta puhelin alkaa käyttäytyä seuraavien päivien aikana eri tavalla.

## Mitä tulokset tarkoittavat

Jos näyttö läpäisee silmämääräisen tarkistuksen sekä pikseli-, kosketus-, kirkkaus- ja väritestit, se on todennäköisesti kunnossa. Seuraa sitä silti viikon tai kahden ajan, etenkin jos puhelin osui kulma edellä.

Jos löydät kuolleita pikseleitä, kosketuksen katvealueen, paneelin kohoamista, jatkuvaa välkyntää tai leviävää värimuutosta, kyse on fyysisestä vauriosta. Ohjelmiston palautus ei korjaa kosketuskerrosta. Tehdasasetusten palautus ei korjaa OLED-paneelin painevauriota. Todellinen ratkaisu on näytön vaihto tai ammattilaisen tekemä tarkastus.

Jos näyttö kohoaa siksi, että sen alla oleva akku turpoaa, lopeta puhelimen käyttö ja lataaminen. Kyse ei ole enää vain näyttöongelmasta.
