---
title: "Mitä wake lockit ovat ja miten ne kuluttavat akkua"
description: "Wake lockien avulla Android-sovellukset voivat pitää suorittimen hereillä näytön sammuttamisen jälkeen. Väärin käytettynä ne voivat estää puhelinta siirtymästä vähävirtaiseen lepotilaan ja aiheuttaa suurta valmiustilakulutusta."
listSummary: "Wake lockien avulla Android-sovellukset voivat pitää suorittimen hereillä näytön sammuttamisen jälkeen."
hub: "battery"
sourceNumber: 35
order: 25
subgroup: "Virrankulutus"
tags: ["akku","virrankulutus","vianetsintä","android","suorituskyky"]
locale: "fi"
draft: false
---
Nukut. Puhelimen näyttö on sammutettu. Mitään ei toisteta tai ladata, mutta akku menettää yön aikana silti 18 %.

Wake lockit voivat aiheuttaa juuri tällaista kulutusta. Wake lock -pyyntö pitää osan laitteesta hereillä tilanteessa, jossa Android muuten antaisi sen nukkua. Tavallisin akkuongelma on osittainen wake lock, joka pitää suorittimen käynnissä näytön pysyessä sammutettuna.

Wake lockit eivät ole automaattisesti huono asia. Musiikkisovellus tarvitsee niitä äänen toistamiseen. Navigointisovellus voi tarvita niitä aktiivisen matkan aikana. Käyttäjän käynnistämän lähetyksen pitää ehkä valmistua sen sijaan, että se katkeaa puolivälissä. Ongelma alkaa, kun sovellus pitää lukkoa liian pitkään, pyytää sitä liian usein tai ei vapauta sitä työn päätyttyä.

## Miten wake lockit toimivat

Kun näyttö sammuu, Android yrittää keskeyttää CPU:n toiminnan ja päästää puhelimen vähävirtaisiin tiloihin. Jos sovelluksella on vielä työtä, jonka pitää jatkua, se voi hankkia wake lockin Androidin PowerManager API:n kautta. Kun työ valmistuu, sovellus vapauttaa lukon ja puhelin voi taas nukkua.

Juuri tässä siirtymässä asiat menevät pieleen.

Sovellus voi aloittaa taustasynkronoinnin, törmätä verkkoyhteyden aikakatkaisuun ja jättää siivouksen tekemättä. Toinen sovellus voi kysellä palvelimelta tietoja muutaman minuutin välein push-ilmoitusten sijasta. Liikuntasovellus voi pitää anturit ja käsittelyn aktiivisina tarpeettoman pitkään. Käyttäjän silmissä puhelin on joutilaana. Sisällä se ei ole lainkaan levossa.

Tällä on ollut 1. maaliskuuta 2026 alkaen entistä suurempi merkitys myös kehittäjille. Google Play voi heikentää niiden sovellusten näkyvyyttä, jotka ylittävät Android vitalsin liiallisten osittaisten wake lockien rajan. Android vitals pitää käyttöä liiallisena, kun laskentaan kuuluvia osittaisia wake lockeja kertyy vähintään 2 tuntia 24 tunnin aikana ja tämä koskee yli 5 % sovelluksen käyttökerroista 28 päivän keskiarvolla.

## Miksi wake lockien kulutusta on vaikea huomata

Wake lockien aiheuttama kulutus piiloutuu usein järjestelmämerkintöjen alle. Akunäkymä voi näyttää **Android Systemin**, Google-palvelut tai epämääräistä taustakäyttöä nimeämättä tarkkaa wake lockia, joka aiheutti ongelman.

Aloita silti perusteista. Avaa **Asetukset > Akku > Akun käyttö** ja tarkista, mitkä sovellukset ovat kuluttaneet virtaa taustalla. Uusissa Pixel-versioissa voit avata sovelluksen ja tarkistaa kohdan **Sovelluksen akunkäyttö**. Samsungilla tarkista **Asetukset > Akku** ja käy läpi sovellusten käyttö sekä taustakäytön rajoitukset.

Jos puhelin menettää paljon varausta näytön ollessa sammutettuna, mutta akunäkymä ei näytä selvää syyllistä, wake lockit muuttuvat vahvemmaksi epäilyksi.

Vanha numerovalitsimen koodi `*#*#4636#*#*` ei enää ole luotettava ratkaisu. Se toimii joissakin Android-puhelimissa, ei tee toisissa mitään eikä usein näytä hyödyllisiä akkutietoja uusissa Samsung- ja Xiaomi-laitteissa. En rakentaisi vianmääritystä sen varaan.

Syvempään tarkistukseen tarvitaan ADB. Komento `adb shell dumpsys batterystats` voi näyttää wake lock -historiaa ja ajan, jonka laite on ollut hereillä, mutta tuloste ei ole helppolukuinen. BetterBatteryStatsin ja GSam Battery Monitorin kaltaiset työkalut voivat auttaa, mutta monet edistyneet akkusovellukset tarvitsevat nyky-Androidissa ADB:llä myönnettyjä oikeuksia tai muuta lisäasetusta. Suhtaudu epäillen sovellukseen, joka lupaa välittömiä akkuparannuksia ilman lupia tai mittausdataa.

## Tavallisia wake lockien aiheuttajia

Google Play services -palvelua syytetään usein, koska se hoitaa paljon: sijaintia, push-viestejä, tilien synkronointia, lähellä olevien laitteiden toimintoja, tietoturvatarkistuksia ja muuta. Jonkin verran wake lock -aikaa on normaalia. Hallitsematon kulutus järjestelmäpäivityksen, rikkinäisen synkronoinnin tai vioittuneen välimuistin jälkeen ei ole.

Myös sosiaalisen median sovellukset voivat olla meluisia. Ne päivittävät syötteitä, lähettävät analytiikkaa, synkronoivat viestejä, päivittävät widgetejä ja ylläpitävät ilmoitusyhteyksiä. Kaksi kertaa viikossa avattava some-sovellus ei tarvitse rajoittamatonta taustakäyttöä.

Sähköpostisovellukset ovat toinen tavallinen ryhmä. Push-sähköposti toimii yleensä hyvin. Muutaman minuutin välein tehtävä tarkistus on tuhlausta, varsinkin jos tilejä on useita.

VPN:t, musiikkisovellukset, navigointisovellukset ja aktiivisuusrannekkeet ovat eri asia. Niiden wake lockit voivat olla odotettuja, koska käyttäjä on pyytänyt sovellusta jatkamaan jotakin tehtävää. Oikea kysymys ei ole "pitääkö tämä sovellus puhelimen hereillä?" vaan "jatkaako se sitä, vaikka en käytä sovelluksen ydintoimintoa?"

## Mitä voit tehdä

Rajoita sellaisten sovellusten taustakäyttöä, jotka eivät tarvitse sitä. Pixelissä ja perus-Androidissa avaa **Asetukset > Sovellukset > [sovelluksen nimi] > Sovelluksen akunkäyttö** ja valitse käyttöliittymän vastine vaihtoehdolle **Restricted**. Samsungilla käytä **Lepotilassa olevat sovellukset**- tai **Syvässä lepotilassa olevat sovellukset** -luetteloa kohdassa **Taustakäytön rajoitukset**.

Älä rajoita liian voimakkaasti sovelluksia, jotka tarvitsevat reaaliaikaista taustatoimintaa. Viestit, VPN, terveys, navigointi, hätätilanteet ja työn kannalta tärkeät sovellukset voivat rikkoutua vaikeasti huomattavilla tavoilla.

Google Play services -palvelun kohdalla aloita varovasti. Käynnistä puhelin uudelleen. Tarkista Google Playn järjestelmäpäivitykset ja sovelluspäivitykset. Jos kulutus jatkuu, avaa Google Play services -sovelluksen tiedot, siirry tallennustilan ja välimuistin asetuksiin ja tyhjennä välimuisti. Älä tyhjennä kaikkea dataa, ellet tiedä sen vaikutuksia, koska se voi nollata paikallista palvelutilaa ja aiheuttaa hetkellisesti lisää synkronointia.

Jos ongelma alkoi heti Android 17 -päivityksen jälkeen, anna puhelimelle muutama päivä ennen johtopäätöksiä. Pixelit saivat Android 17:n ensin, ja puhelimet tekevät suuren käyttöjärjestelmäpäivityksen jälkeen usein ylimääräistä indeksointia, sovellusten optimointia ja päivityksen jälkisiivousta. Useita päiviä jatkuva kulutus on eri asia.

## Miten Doze muuttaa tilannetta

Doze auttaa rajoittamaan wake lockien haittoja syvässä lepotilassa. Kun laite on Dozessa, Android ohittaa wake lockit rajoitettujen vaiheiden aikana ja sallii työn pääasiassa ylläpitoikkunoissa.

Doze ei silti ole taikaratkaisu. Akun optimoinnista vapautetut sovellukset saavat enemmän vapautta. Foreground services voivat edelleen tehdä työtä. Valmistajien akunhallinta voi käyttäytyä eri tavoin. Jos puhelin ei liikkeen, signaaliongelmien tai toistuvan taustatoiminnan vuoksi koskaan asetu lepotilaan, Dozesta ei saada täyttä hyötyä.

Siksi yön aikainen kulutus on hyödyllinen vihje. Jos puhelin on paikallaan seitsemän tuntia ja menettää 4 %, suurta wake lock -ongelmaa ei todennäköisesti ole. Jos se menettää näyttö sammutettuna 20 % ilman aktiivista mediaa, jokin pitää laitetta hereillä tai pakottaa radion tekemään työtä.

runcheck on tehty tällaisten kuvioiden tunnistamiseen. Näytön ollessa sammutettuna tapahtuva kulutus, syvän lepotilan käyttäytyminen, signaalin laatu ja lämpötila kertovat yhdessä paljon selkeämmän tarinan kuin puhelimen oletusarvoinen akunäkymä.

## Muutama vastaamisen arvoinen kysymys

Voiko wake lock pitää näytön päällä? Osittainen wake lock ei voi. Se pitää CPU:n käynnissä näytön pysyessä sammutettuna. Vanhempia näytön wake lock -tyyppejä on olemassa, mutta nyky-Android rajoittaa sovelluksia niiden käytössä voimakkaasti. Suurin osa piilokulutuksesta tulee osittaisista CPU-lukoista.

Onko jonkinlainen wake lock -toiminta normaalia? Kyllä. Puhdas Android-puhelinkin käyttää lyhyitä wake lockeja järjestelmäpalveluihin, push-viesteihin, yhteysmuutoksiin ja ajastettuun työhön. Minuutit ovat normaaleja. Tunnit käyttämättömänä eivät ole.

Korjaako tehdasasetusten palautus ongelman? Joskus. Se voi poistaa huonon sovellustilan, rikkinäisen synkronoinnin ja päivityksestä jääneen sotkun. Se on myös hyvin järeä keino. Rajoita ensin epäilyttäviä sovelluksia, päivitä kaikki, tyhjennä välimuisti tarvittaessa ja varmista kulutuskuvio ennen puhelimen tyhjentämistä.
