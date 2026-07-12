---
title: "Mitä Google Play ‑järjestelmäpäivitykset ovat?"
description: "Avaa Androidin päivitysnäkymä, ja näet todennäköisesti kaksi päivämäärää, jotka eivät täsmää. Toinen on Androidin tietoturvakorjaustaso. Toinen kertoo Googlen modulaarisen järjestelmäpäivityksen päivämäärän."
listSummary: "Avaa Androidin päivitysnäkymä, ja näet todennäköisesti kaksi päivämäärää, jotka eivät täsmää."
hub: "software"
sourceNumber: 124
order: 6
tags: ["android","päivitykset","tietoturva","ohjelmisto","opas"]
locale: "fi"
draft: false
---
Se näyttää virheeltä. Yleensä se ei ole sitä.

Kyse on kahdesta eri päivityskanavasta. Tietoturvakorjaustaso tulee puhelimen valmistajalta, kuten Googlelta, Samsungilta, Xiaomilta, OnePlussalta tai Motorolalta. Toinen päivämäärä tulee Googlen modulaarisen Android-päivitysjärjestelmän kautta sitä tukevissa laitteissa.

## Lyhyesti

Mainline-päivitykset korjaavat valittuja Androidin osia ilman, että jokaisen korjauksen pitää odottaa valmistajan täyttä järjestelmäpäivitystä.

Ne eivät korvaa tavallisia Android-päivityksiä. Ne eivät päivitä puhelinta Android 16:sta Android 17:ään. Ne eivät korjaa kaikkia haavoittuvuuksia. Niiden avulla Google voi kuitenkin päivittää joitakin käyttöjärjestelmäkomponentteja Google Playn laajaa jakelukanavaa hyödyntäen.

Tällä on merkitystä, koska Android-päivityksissä on pitkä ketju. Google julkaisee koodin. Piirivalmistajat ja laitevalmistajat sovittavat sen tuotteisiinsa. Operaattorit saattavat testata sen. Vasta sitten päivitys saapuu puhelimeen. Modulaarinen kanava ohittaa osan tästä ketjusta tietyissä komponenteissa.

## Näin Project Mainline toimii

Tekniikan nimi on Project Mainline. Androidin dokumentaatiossa puhutaan myös modulaarisista järjestelmäkomponenteista. Järjestelmä otettiin käyttöön Android 10:ssä.

Mainline jakaa valitut Androidin osat moduuleiksi. Osa on APK-moduuleja, jotka toimivat enemmän sovelluspakettien tavoin. Toiset ovat APEX-moduuleja, jotka voidaan ladata käynnistyksen aikaisemmassa vaiheessa ja jotka voivat sisältää syvemmän järjestelmätason komponentteja.

Oleellinen kohta on atominen asennus. Jos moduulipäivitysten kokonaisuus ei asennu puhtaasti, Android palauttaa sen aiempaan tilaan sen sijaan, että puhelin jäisi puoliksi päivitetyksi.

Hyvä niin. Tässä kohtaa tylsyys on hyvä asia.

## Mitä päivittyy

Tarkka moduulijoukko riippuu Android-versiosta ja laitteen ohjelmistosta, joten kaikissa Android-puhelimissa ei ole samaa luetteloa. Uudemmissa Android-versioissa on yleensä enemmän modulaarisia osia kuin Android 10:ssä oli.

Esimerkkejä ovat verkkokomponentit, DNS-nimenselvitys, median käsittely, käyttöoikeuksiin liittyvät komponentit, TLS-yhteyksiä hoitava Conscrypt, kirjautumissivua vaativien verkkojen käsittely, DocumentsUI, yhteyden jakaminen sekä tuetuissa versioissa Android Runtimen osat.

Nämä eivät ole koristeellisia osia. Mediakehyksen virhe voi vaikuttaa moniin sovelluksiin. TLS-komponentin virhe voi vaikuttaa salattuihin yhteyksiin koko laitteessa. Kun nämä osat voidaan päivittää modulaarisen kanavan kautta, korjaukset voivat saavuttaa paljon useampia puhelimia kuin silloin, jos jokaisen valmistajan pitäisi ensin julkaista täysi OTA-paketti.

## Päivämäärän tarkistaminen

Monissa uusissa Android-puhelimissa reitti näkyy englanniksi muodossa Settings > Security & privacy > System & updates > Google Play system update.

Samsungissa voit kokeilla englanninkielisiä polkuja Settings > Security and privacy > Updates tai Settings > About phone > Software information ja avata sieltä Google Play system update -kohdan.

Polku muuttuu, koska valmistajat järjestävät Asetuksia uudelleen. Jos et löydä kohtaa, avaa Asetusten haku ja etsi nimellä Google Play system update tai Google Play ‑järjestelmäpäivitys.

Voit napauttaa kohtaa ja tarkistaa päivitykset. Jos Android pyytää sen jälkeen käynnistämään laitteen uudelleen, tee se. Osa APEX-päivityksistä tulee voimaan vasta uudelleenkäynnistyksen jälkeen.

## Miksi päivämäärä voi näyttää vanhalta

Näytöllä näkyvä päivämäärä ei tarkoita yksinkertaisesti "viimeistä hetkeä, jolloin jotakin korjattiin". Se voi kuvata moduulipaketin versiota, eivätkä kaikki moduulipäivitykset muuta näkyvää päivämäärää selvästi.

Siksi Google Play ‑järjestelmäpäivityksen päivämäärä voi olla Androidin tietoturvakorjaustasoa vanhempi ilman, että puhelimessa on vikaa. Huolestuisin vasta, jos molemmat päivämäärät ovat vanhoja tai puhelin ei ole saanut järjestelmäpäivitystä kuukausiin eikä enää näy valmistajan tukiluettelossa.

Turhauttavaa on se, ettei Android anna tavalliselle käyttäjälle selkeää moduulikohtaista muutoslokia. Näet lähinnä yhden päivämäärän ja uudelleenkäynnistyspainikkeen.

## Mitkä puhelimet saavat niitä

Tämä päivityskanava liittyy Androidin modulaariseen järjestelmään ja Google-palveluihin. Käytännössä se kattaa monet Google-sertifioidut puhelimet, joissa on Android 10 tai uudempi.

Puhelimet, joissa ei ole Google-palveluja, eivät saa samaa Googlen jakelukanavaa. Jotkin Android-kumppanit voivat päivittää Mainline-moduuleja omalla OTA-mekanismillaan, mutta se ei ole sama asia kuin Googlen sertifioidulle puhelimelle toimittama päivityspolku.

Vanhemmissa Android-versioissa on myös vähemmän modulaarisia komponentteja. Android 10 -puhelin voi hyötyä Mainlinesta, mutta sen moduulikattavuus ei ole sama kuin uudemmassa Android 16- tai Android 17 -laitteessa.

## Mitä ne eivät voi korjata

Mainline ei voi korjata kaikkea.

Se ei korjaa laitteen kerneliä, ellei kyseinen korjaus kulje tuetun modulaarisen polun kautta. Se ei päivitä modeemin, kameran, GPU:n tai Wi-Fi-piirin suljetun lähdekoodin laiteohjelmistoa. Se ei korjaa valmistajakohtaisia järjestelmäsovelluksia tai laitevalmistajan koodia. Se ei myöskään jatka valmistajan virallista tukiaikaa.

Modulaarinen päivityskanava auttaa siis kyllä. Se ei tee hylätystä puhelimesta jälleen täysin turvallista.

## Google Play ‑järjestelmäpäivitykset ja Google Play Services

Nimet ovat liian samankaltaiset, mikä aiheuttaa sekaannusta.

Google Play Services on sovellustason kehys. Sovellukset käyttävät sitä kirjautumiseen, sijainti-API:hin, ilmoituksiin, tilitoimintoihin, turvallisuustarkistuksiin ja muihin Googlen taustapalveluihin. Se päivittyy sovelluksen tavoin.

Google Play ‑järjestelmäpäivitykset puolestaan käsittelevät käyttöjärjestelmän moduuleja. Ne ulottuvat syvemmälle Androidiin.

Molemmat tulevat Googlelta. Molemmat voivat päivittyä ilman valmistajan täyttä OTA-pakettia. Ne eivät ole sama järjestelmäkerros.

## Mitä tällä tiedolla kannattaa tehdä

Pidä molemmat päivityskanavat ajan tasalla. Asenna valmistajan tavalliset Android-järjestelmäpäivitykset ja tarkista ajoittain myös Google Play ‑järjestelmäpäivitys.

Jos puhelin saa yhä valmistajan tietoturvakorjauksia, hieman vanhempi Google Play ‑järjestelmäpäivityksen päivämäärä on yleensä vain sivuseikka. Jos molemmat ovat lakanneet päivittymästä, on aika suhtautua laitteeseen niin, että se on jäämässä turvallisen päivittäisen käytön ulkopuolelle.
