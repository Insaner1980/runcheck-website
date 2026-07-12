---
title: "Hidastaako bloatware puhelinta, ja voiko sen poistaa?"
description: "Esiasennetut Android-sovellukset voivat viedä tilaa, lähettää ilmoituksia ja käyttää taustapalveluja. Näin bloatware vaikuttaa oikeasti ja näin poistat sen turvallisesti."
listSummary: "Esiasennetut Android-sovellukset voivat viedä tilaa, lähettää ilmoituksia ja käyttää taustapalveluja."
hub: "performance"
sourceNumber: 78
order: 15
tags: ["suorituskyky","nopeus","android","optimointi","vianetsintä"]
locale: "fi"
draft: false
---
---

Bloatware saa syyt niskoilleen lähes jokaisesta hitaasta Android-puhelimesta, mutta todellisuus on vähemmän dramaattinen. Esiasennettu sovellus ei hidasta mitään vain siksi, että sen kuvake on olemassa. Ongelma alkaa, kun sovellus toimii taustalla, herättää puhelimen, lähettää ilmoituksia, päivittää itseään tai pitää palveluja käynnissä, vaikka et ole koskaan pyytänyt sitä.

Siinä on ärsyttävä puoli. Voit ohittaa sovelluksen käyttöönotossa, olla avaamatta sitä koskaan ja löytää silti siihen liittyviä palveluja myöhemmin sovellusluettelosta.

## Mitä bloatware oikeasti tekee

Käyttämättömänä pysyvä esiasennettu sovellus vie lähinnä tallennustilaa. Se ei käytä suoritinta, RAM-muistia, mobiilidataa tai akkua, ellei Android tai toinen sovellus käynnistä jotakin sen komponenteista.

Jotkin esiasennetut paketit tekevät muutakin kuin odottavat. Facebookiin liittyviä palveluja, kuten `com.facebook.appmanager`, on toimitettu puhelimissa kumppanipaketteina. Samsung-puhelimissa voi olla Googlen sovellusten rinnalla Samsung Free, Samsung Global Goals, Samsung TV Plus ja muita Samsungin sovelluksia. Operaattorikohtaisissa malleissa voi joillakin markkinoilla olla tilinhallintaa, käyttöönottoavustajia, vastaajasovelluksia, tietoturvakokeiluja ja kampanjasovellusten asentajia.

Yksi tai kaksi taustapalvelua ei tavallisesti romahduta suorituskykyä. Viisitoista sellaista edullisessa puhelimessa on eri asia. 3 tai 4 Gt:n puhelin, jossa on raskas aloitusnäyttösovellus, sosiaalisen median sovelluksia, operaattorin työkaluja ja valmistajan palveluja, voi tuntua huonommalta kuin vanhempi lippulaivamalli, jossa ohjelmisto on siistimpi ja muistissa enemmän pelivaraa.

Tallennustilan käyttö on helpompi tarkistaa kuin taustatoiminta. Avaa **Asetukset > Tallennustila** tai Asetusten sovellusluettelo, lajittele sovellukset koon mukaan, jos puhelin sallii sen, ja etsi sovelluksia, joita et käytä. Tarkka polku vaihtelee valmistajan mukaan. Pixelissä rakenne on melko suoraviivainen, Samsung sijoittaa useampia toimintoja laitteen ylläpitoon ja Xiaomi jakaa tallennustyökaluja Asetusten sekä Security-sovelluksen välille.

## Poista ensin käytöstä, poista asennus kun Android sallii

Android antaa poistaa osan esiasennetuista sovelluksista tavalliseen tapaan. Paina kuvaketta pitkään, avaa sovelluksen tiedot ja etsi **Poista asennus**. Jos painike puuttuu, on harmaana tai sen tilalla näkyy **Poista käytöstä**, Android käsittelee sovellusta järjestelmäsovelluksena.

Käytöstä poistaminen on turvallisempi ensimmäinen ratkaisu. Avaa sovellusluettelo Asetuksista, valitse sovellus ja napauta **Poista käytöstä**. Käytöstä poistettu sovellus lakkaa toimimasta, katoaa sovellusvalikosta eikä enää saa tavallisia päivityksiä. Se vie silti jonkin verran tilaa, koska alkuperäinen sovelluspaketti jää järjestelmälevykuvaan, mutta Android poistaa päivitykset ja käyttäjätiedot siltä osin kuin pystyy.

Viimeinen yksityiskohta on tärkeä. Järjestelmäsovelluksen käytöstä poistaminen ei vapauta taianomaisesti useita gigatavuja. Siitä voi silti olla hyötyä, jos sovellus oli ladannut päivityksiä tai välimuistimediaa, sisältää kirjautumistietoja tai oli tallentanut paikallisia tietoja.

Samsung ja muut OEM-valmistajat näyttävät joskus **Poista asennus** -vaihtoehdon puhelimen mukana tulleelle sovellukselle. Monessa tapauksessa toiminto poistaa käyttäjän puolelle asennetut päivitykset ja jättää tehdasversion passiiviseksi. Käytännössä se riittää. Tavoitteena oli poistaa sovellus päivittäisestä käytöstä, ei kirjoitussuojatusta järjestelmäosiosta.

## Milloin ADB-poisto on järkevä

Sitkeän paketin voi poistaa nykyiseltä käyttäjältä ADB:n avulla ilman root-oikeuksia:

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

Komento ei poista pakettia järjestelmäosiosta. Se piilottaa sovelluksen ja poistaa sen käytöstä käyttäjältä 0, joka on puhelimen pääkäyttäjä. Tehdasasetusten palautus tuo sen takaisin.

Käytä komentoa vain, kun tiedät tarkan paketin ja ymmärrät, mitä olet poistamassa. Paketin nimi voi näkyä Google Play -osoitteessa, tai voit luetella paketit komennolla:

```text
adb shell pm list packages
```

Canta ja Universal Android Debloater Next Generation helpottavat työtä. Canta toimii puhelimessa ja käyttää Shizukua. UAD-ng toimii tietokoneella ja käyttää kuratoituja pakettiluetteloita, joissa on turvallisuusluokituksia. Luokituksista on hyötyä, mutta ne eivät ole erehtymättömiä. Jos paketti on merkitty vaaralliseksi, asiantuntijatasoiseksi tai liittyväksi frameworkiin, provider-komponenttiin, puhelinsovellukseen, aloitusnäyttöön tai Google Play Services -palveluihin, jätä se rauhaan, ellei sinulla ole oikeaa palautussuunnitelmaa.

Ihan oikeasti. Väärän paketin poistaminen voi rikkoa ilmoitukset, puhelut, Google Play -asennukset, widgetit, tilien synkronoinnin tai koko käynnistyksen.

## Missä puhelimissa ohjelmisto on yleensä siistimpi

Pixel-puhelimet kuuluvat edelleen valtavirran Android-malleista ohjelmistoltaan pelkistetyimpiin. Niissä on Googlen sovelluksia, mutta yleensä vähemmän kolmansien osapuolten ja operaattorien paketteja kuin monissa muissa malleissa. Motorola on usein lähellä, sillä se lisää tavallisesti muutamia Moto-ominaisuuksia toisen kokonaisen sovellusekosysteemin sijasta.

Samsung on parempi kuin ennen, mutta se tarjoaa edelleen Samsungin vaihtoehdot useisiin Googlen sovellusluokkiin: selaimeen, sovelluskauppaan, galleriaan, muistiinpanoihin, tilipalveluihin, televisioon ja uutistyylisiin syötteisiin. Osa pitää niistä. Muista ne tuntuvat turhalta tavaralta.

Xiaomi, Redmi, Poco, Oppo, Realme ja Vivo vaihtelevat paljon maan ja hintaluokan mukaan. Euroopan ja Intian markkinoille myytävät, samannimiset laitteet voivat sisältää eri kolmansien osapuolten sovelluksia, suosituksia, mainoksia tai kehotuksia asentaa sovelluksia. Joillakin markkinoilla operaattorimallit ovat oma ryhmänsä, sillä operaattori voi lisätä sovelluksia valmistajasta riippumatta.

Nothingin ja OnePlussan suunta on vaihdellut vuosien mittaan. Jotkin julkaisut ovat olleet siistejä, toisiin on tullut enemmän kumppanipalveluja kuin merkkien seuraajat odottivat. Pidä valmistajan mainetta vihjeenä, älä todisteena. Tarkista ennen ostamista ajantasaiset arviot juuri oikeasta mallista ja alueversiosta.

## Mitä ei pidä poistaa käytöstä

Älä poista Google Play Services -palveluja käytöstä. Monet sovellukset tarvitsevat niitä push-ilmoituksiin, sijaintiin, kirjautumiseen, karttoihin, turvallisuustarkistuksiin ja maksuihin. Pienen ärsytyksen sijasta saat helposti rikkinäisen puhelimen.

Ole varovainen Android System WebView'n, oletusaloitusnäytön, puhelin- ja viestisovelluksen, näppäimistön, käyttöoikeuksien hallinnan, pakettiasentajan, Asetusten, yhteystieto- ja mediapalvelujen sekä kaikkien `framework`- tai `provider`-nimisten pakettien kanssa. Nimet kuulostavat tylsiltä, koska kyse on infrastruktuurista.

Yksittäiset Google-sovellukset, kuten Google TV, YouTube Music, Google News ja Google One, voi yleensä poistaa turvallisesti käytöstä, jos et käytä niitä. Chrome on tavallisesti turvallista poistaa käytöstä, jos toinen selain on asennettu, mutta OEM-valmistajien käytös vaihtelee niin paljon, että tarkistaisin sen jälkeen WebView'n ja oletusselaimen asetukset.

## Voiko bloatware olla haittaohjelma?

Googlen, Samsungin, Motorolan, Xiaomin, operaattorin tai muun tunnetun OEM-valmistajan aito sovellus ei ole automaattisesti haittaohjelma. Se voi silti olla ärsyttävä, raskas tai liian innokas ilmoitusten kanssa.

Riski on suurempi erittäin halvoissa tuntemattomien merkkien puhelimissa, epävirallisissa ROM-versioissa ja markkinapaikoista ostetuissa laitteissa, joiden laiteohjelmistoa on saatettu muokata. Jos esiasennettu sovellus näyttää mainoksia, asentaa muita sovelluksia, pyytää outoja käyttöoikeuksia tai palaa jatkuvasti poistamisen jälkeen, selvitä tarkka paketin nimi ennen kuin luotat siihen.

## Järjestelmäpäivityksen jälkeen

Suuri Android- tai OEM-päivitys voi ottaa aiemmin käytöstä poistettuja sovelluksia uudelleen käyttöön. Kuukausittaiset tietoturvapäivitykset jättävät ne tavallisesti rauhaan, mutta tätä tapahtuu riittävän usein, jotta tilanne kannattaa tarkistaa suuren päivityksen jälkeen.

Android 17 ei muuta perusohjetta. Se julkaistiin 16.6.2026 ja on saatavilla useimmille tuetuille Pixel-laitteille, kun taas muiden valmistajien aikataulut vaihtelevat mallin ja alueen mukaan. Samsungissa, Xiaomissa, Oppossa ja vastaavissa puhelimissa bloatware riippuu edelleen enemmän OEM-järjestelmälevykuvasta ja mahdollisesta operaattoriversiosta kuin Android-version numerosta.
