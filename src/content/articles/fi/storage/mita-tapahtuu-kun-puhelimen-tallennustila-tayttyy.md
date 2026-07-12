---
title: "Mitä tapahtuu, kun puhelimen tallennustila täyttyy"
description: "Metakuvaus: Täysi Android-puhelin voi pettää aivan tavallisissa tehtävissä: kamera antaa virheitä, sovellukset kaatuvat, päivitykset pysähtyvät ja tiedostojen kirjoittaminen hidastuu. Tästä näet, mikä rikkoutuu ensin ja kuinka paljon vapaata tilaa kannattaa jättää."
listSummary: "suorituskyky, nopeus ja android"
hub: "storage"
sourceNumber: 81
order: 3
tags: ["suorituskyky","nopeus","android","optimointi","vianetsintä"]
locale: "fi"
draft: false
---
---

Kun Android-puhelimen tallennustila täyttyy, puhelin ei lakkaa toimimasta siististi ja ennakoitavasti. Se alkaa ensin käyttäytyä oudosti.

Kamera epäröi. Sovellus jähmettyy luonnosta tallentaessaan. Päivitys ei suostu asentumaan. Näppäimistö laahaa viestisovelluksessa, joka toimi vielä eilen hyvin. Sitten Android näyttää varoituksen täyttyneestä tallennustilasta, aivan kuin se selittäisi, miksi kaikki tuntuu yhtäkkiä rikkinäiseltä.

Useimmiten se selittääkin.

## Mikä lakkaa toimimasta ensin

Kamera on yleensä ensimmäisiä paikkoja, joissa ongelman huomaa. Valokuva ei tallennu pieneksi valmiiksi tiedostoksi heti laukaisinta painettaessa. Kamerasovellus voi tarvita tilaa kuvankäsittelyyn, väliaikaistiedostoihin, pikkukuviin, muokkauksiin, sarjakuviin tai videopuskureihin. Ilman työtilaa se voi jähmettyä, jättää kuvan tallentamatta tai lopettaa videokuvauksen.

Seuraavaksi ongelmat näkyvät sovelluksissa. Jokainen sovellus kirjoittaa käytön aikana pieniä tiedostoja: välimuistia, lokeja, tietokantoja, luonnoksia, istuntotietoja, pikkukuvia, ladattua sisältöä ja SQLite-päiväkirjatiedostoja. Kun kirjoittaminen epäonnistuu, sovellus voi kaatua tai hukata äänettömästi sen, mitä olit tekemässä.

Myös järjestelmäpäivitykset tarvitsevat tilaa. Kuukausittainen korjauspäivitys on pienempi kuin kokonainen Android-versiopäivitys, mutta molemmat vaativat tilaa lataukseen ja asennukseen. Jos puhelin ei pysty asentamaan päivityksiä, jäät ilman tietoturva- ja virhekorjauksia. Vanhojen latausten ja kaksoiskappaleisten videoiden säilyttäminen ei ole sen arvoista.

## Miksi hidastuminen alkaa ennen kuin vapaa tila loppuu

Vapaan tilan ei tarvitse laskea 0 gigatavuun ennen kuin puhelin hidastuu. Ongelma-alue alkaa yleensä, kun vapaata tilaa on alle 10-15 %, ja alle 5 %:ssa tilanne muuttuu nopeasti hankalaksi.

Flash-tallennustila tarvitsee vapaita lohkoja siivoukseen, kulumisen tasaukseen ja roskienkeruuseen. Kun tila käy vähiin, ohjaimen on tehtävä enemmän työtä ennen uuden tiedon kirjoittamista. Tavallinenkin kirjoittaminen hidastuu. Valokuvan tallentaminen, sovelluksen asentaminen, tietokannan päivittäminen tai liitteen lataaminen voi pysäyttää puhelimen niin pitkäksi aikaa, että sen huomaa.

Älä sekoita tätä zRAMiin. Useimmat Android-puhelimet käyttävät zRAMia RAM-muistin sisäisenä pakattuna muistina, eivät tavallisena sisäiseen tallennustilaan kirjoitettavana sivutustiedostona. Täysi tallennustila ei siis suoraan tarkoita, ettei Android voisi enää käyttää sivutusta. Haitta syntyy siitä, että sovellukset ja järjestelmä tarvitsevat käytön aikana tallennustilaa oikeille tiedostoille.

Android 17 tuo osaan laitteista tiukempia sovelluskohtaisia muistirajoja, mutta ne eivät poista vapaan tallennustilan tarvetta. Muistipaine ja tallennustilan paine ovat eri ongelmia. Jähmettynyttä näyttöä katsoessa ne vain tuntuvat samalta.

## Mikä täyttää tallennustilan huomaamatta

Viestisovellukset ovat tavallinen syyllinen. WhatsApp, Telegram, Discord ja vastaavat sovellukset voivat ladata kuvia, videoita, ääniviestejä, tarroja, GIF-kuvia ja asiakirjoja jokaisesta vilkkaasta ryhmästä. Muutaman kuukauden ryhmäkeskustelujen media voi viedä enemmän tilaa kuin koko kamerakansio.

Lataukset-kansio on toinen tiedostojen hautausmaa. PDF-tiedostot, APK-asentimet, ZIP-paketit, lomakkeet, kuvakaappaukset, laskut ja kerran sähköpostista avatut tiedostot jäävät sinne, kunnes poistat ne itse.

Myös offline-media kertyy hiljaa. Spotifyn soittolistat, Netflix-jaksot, YouTube-lataukset, podcastit, äänikirjat ja Google Mapsin offline-alueet ovat kaikki sovellusten tallennustilassa. Tiedostot eivät välttämättä näy tiedostonhallinnassa, mutta niiden käyttämä tila näkyy sovelluksen tallennustilanäkymässä Asetukset-sovelluksen sovellusluettelon kautta.

Roskakori voi johtaa harhaan. MediaStoreen perustuva roskakoritoiminto tuli Android 11:een, ja Files by Google säilyttää poistettuja tiedostoja Roskakorissa noin 30 päivää, ellet tyhjennä sitä aiemmin. Google Photosilla on oma roskakorikäytäntönsä. Samsung Gallerylla ja My Filesilla on omat roskakorinsa. Jos poistit paljon videoita mutta tallennustilan lukema tuskin muuttui, tarkista roskakorit.

## Kuinka paljon vapaata tilaa kannattaa jättää

Tavoittele 15-20 %:n vapaata tilaa. 64 Gt:n laitteessa se tarkoittaa noin 10 Gt:tä. 128 Gt:n laitteessa kannattaa jättää mahdollisuuksien mukaan noin 20 Gt vapaaksi.

Puskuri antaa Androidille tilaa sovelluspäivityksiin, kameran työskentelyyn, välimuistiin, tietokantakirjoituksiin, latauksiin ja tallennustilan ylläpitoon. Lukemaa ei tarvitse vahtia päivittäin. Sen sijaan 2 Gt:tä vapaata ei kannata pitää riittävänä.

Jos puhelimessa on 32 tai 64 Gt tallennustilaa, mukavan vapaan tilan säilyttäminen voi olla mahdotonta nykyisten sovellusten, kuvien ja viestimediatiedostojen kanssa. Se ei ole oma vikasi. Pienellä tallennustilalla varustetut laitteet ovat kestäneet aikaa huonosti.

runcheck seuraa tallennustilan käyttöä osana laitteen kuntonäkymää ja varoittaa vähäisestä vapaasta tilasta ennen kriittistä vaihetta. Tallennustilan tietonäkymä auttaa myös erottamaan kuvat, videot, äänitiedostot, asiakirjat, lataukset ja muut luokat toisistaan, joten siivous alkaa tiedosta eikä satunnaisesta poistamisesta.

## Tavallisia kysymyksiä

### Voiko täysi tallennustila vaurioittaa puhelinta pysyvästi?

Yleensä ei. Se voi vaikeuttaa tallennusohjaimen kulumisen tasausta, mutta NAND-piiri tuskin rikkoutuu vain siksi, että puhelin täyttyi muutaman kerran. Suurempi riski on käytännöllinen: asentamatta jääneet päivitykset, tallentumattomat kuvat, vioittuneet sovellustiedot ja puhelin, jonka käyttäminen muuttuu kurjaksi.

### Korjaako tehdasasetusten palautus täyden tallennustilan?

Se vapauttaa tilaa, mutta on järein mahdollinen keino. Jos WhatsApp-media, offline-videot ja kameratiedostot täyttivät puhelimen kerran, ne täyttävät sen uudelleen. Siivoa ensin ongelman lähteet.

### Miksi tallennustilan luvut eivät täsmää?

Android, järjestelmäosiot, esiasennetut sovellukset, sovellustiedot, pikkukuvat, roskakorit ja tallennusluokat eivät aina asetu siististi yhteen. Ilmoitettu kapasiteetti ei myöskään ole sama kuin käytettävissä oleva tila. Pakkauksessa lukeva määrä ei koskaan vastaa täysin omille tiedostoille jäävää tilaa.

### Ratkaiseeko SD-kortti ongelman?

Se auttaa kuvien, videoiden, musiikin ja asiakirjojen kanssa, jos puhelimessa on vielä korttipaikka. Sovelluksille siitä on vähemmän hyötyä. Monia sovelluksia ei voi siirtää SD-kortille, ja silloinkin kun voi, microSD-kortti on paljon sisäistä UFS-tallennustilaa hitaampi. Käytä korttia medialle, älä pelastuskeinona puhelimelle, jossa olisi alun perin pitänyt olla enemmän sisäistä tallennustilaa.
