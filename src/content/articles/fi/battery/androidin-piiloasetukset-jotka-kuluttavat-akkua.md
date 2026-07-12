---
title: "Androidin piiloasetukset, jotka kuluttavat akkua"
description: "Android voi pitää Wi-Fi-haun, Bluetooth-haun, taustasynkronoinnin, sijaintitarkistukset ja aina päällä olevan näytön aktiivisina silloinkin, kun et käytä puhelinta. Nämä asetukset kannattaa tarkistaa, jos valmiustilakulutus on liian suurta."
listSummary: "android, päivitykset ja tietoturva"
hub: "battery"
sourceNumber: 33
order: 23
subgroup: "Virrankulutus"
tags: ["android","päivitykset","tietoturva","ohjelmisto","opas"]
locale: "fi"
draft: false
---
Suuri osa Android-puhelimen virrankulutuksesta syntyy silloin, kun et tee sillä mitään kiinnostavaa. Näyttö on sammutettu ja puhelin makaa pöydällä, mutta akku tyhjenee silti, koska sovellukset, radiot, anturit ja tilien synkronointi herättävät laitetta taustalla.

Android 17:n jakelu alkoi kesäkuussa 2026 ensin useimmille tuetuille Pixel-laitteille. Samsung, Xiaomi, OnePlus, Motorola ja muut OEM-valmistajat julkaisevat omat Android 17 -versionsa omien aikataulujensa mukaan. Alla olevat periaatteet pätevät edelleen, mutta valikkopolku voi siirtyä yhden tason verran puhelimesta riippuen.

## Sovellusten taustatoiminta

Tämä on yleensä ensimmäinen tarkistettava paikka. Sovellukset voivat synkronoida dataa, hakea päivityksiä ja ilmoituksia, lähettää lokeja, päivittää widgetejä ja pitää wake lockeja aktiivisina. Some-, ostos-, uutis- ja pilvitallennussovellukset sekä huonosti tehdyt apuohjelmat ovat tavallisia epäiltyjä.

Pixelissä ja perus-Androidissa aloita kohdasta **Asetukset > Akku > Akun käyttö**. Avaa sovelluskohtaiset tiedot ja etsi sovelluksia, jotka kuluttavat virtaa vielä sen jälkeen, kun lopetit niiden käytön. Uusissa Pixel-versioissa kaikkien sovellusten asetukset löytyvät myös kohdasta **Asetukset > Sovellukset > Sovelluksen akunkäyttö**. Taustakäytön tasot voivat näkyä esimerkiksi nimillä **Unrestricted**, **Optimized** ja **Restricted**.

Käytä **Restricted**-tasoa sovelluksille, joiden ei tarvitse toimia sen jälkeen, kun poistut niistä. Pelit, ostossovellukset, vain tarvittaessa avattavat matkasovellukset, ruokalähettisovellukset ja satunnaiset apuohjelmat ovat hyviä ehdokkaita. Älä rajoita viestisovelluksia, työpostia, VPN-yhteyksiä, terveydenseurantaa, perheen turvallisuussovelluksia tai mitään, missä myöhästynyt hälytys voisi aiheuttaa oikean ongelman.

Samsungilla vastaava toiminto löytyy uusissa Galaxy-malleissa yleensä kohdasta **Asetukset > Akku > Taustakäytön rajoitukset**. Vanhemmissa One UI -versioissa polku voi kulkea **Akun ja laitteen ylläpidon** kautta. Vahvin vaihtoehto on **Syvässä lepotilassa olevat sovellukset**, joka sopii harvoin käytettäville sovelluksille. Sitä on myös helppo käyttää liikaa. Jos ilmoitus on tärkeä, älä siirrä sovellusta syvään lepotilaan.

Mukautuva virta (Adaptive Battery) kannattaa edelleen pitää päällä. Se oppii, mitä sovelluksia käytät usein, ja rajoittaa muita hienovaraisemmin kuin manuaalinen rajoittaminen. Se ei tunnista kaikkea, mutta toimii hyvänä lähtökohtana.

## Wi-Fi- ja Bluetooth-haku

Tämä tuntuu hieman salakavalalta. Wi-Fin tai Bluetoothin poistaminen käytöstä pika-asetuksista ei aina estä Androidia käyttämästä radioita sijainnin määrittämiseen. Android voi edelleen hakea lähellä olevia Wi-Fi-tukiasemia ja Bluetooth-laitteita sijainnin tarkkuuden parantamiseksi.

Android 12:ssa ja uudemmissa tavallinen polku on **Asetukset > Sijainti > Sijaintipalvelut > Wi-Fi-haku** ja **Bluetooth-haku**. Android 11:ssä ja aiemmissa haut voivat olla suoraan Sijainti-valikon alla. Samsung pitää asetukset yleensä kohdassa **Asetukset > Sijainti > Sijaintipalvelut**.

Hakujen poistaminen käytöstä voi vähentää pieniä mutta toistuvia radioherätyksiä. Haittapuolena sisätilapaikannus voi heikentyä. Jos käytät Google Mapsia sisällä, Find Hubia (aiemmin Find My Device), älykodin sijaintirajauksia tai sijaintiin perustuvia muistutuksia, sijainnin löytyminen voi hidastua tai muuttua epätarkemmaksi.

Useimmille suosittelen hakujen poistamista käytöstä vasta, jos valmiustilakulutus on jo häiritsevää. Terveessä puhelimessa tämä ei ole ensimmäinen kytkin, johon koskisin.

## Lukitusnäytön kello ja aina päällä oleva näyttö

Aina päällä oleva näyttö on kätevä. Se tekee myös täsmälleen sen, mitä nimi lupaa: osa näytöstä pysyy valaistuna koko päivän.

OLED-näyttö ei valaise mustia pikseleitä, joten pelkkä kello mustalla taustalla kuluttaa yhdellä hetkellä vain vähän virtaa. Puhelin voi kuitenkin olla käyttämättä 15-20 tuntia vuorokaudessa. Pieni jatkuva kulutus alkaa näkyä näin pitkällä ajalla, varsinkin jos näkymässä on värejä, widgetejä, taustakuva tai kirkkaita ilmoituselementtejä.

Nykyisissä Pixel-versioissa asetus löytyy yleensä kohdasta **Asetukset > Näyttö ja kosketus > Aina päällä oleva näyttö**. Samsungilla tavallinen polku on **Asetukset > Lukitusnäyttö ja AOD > Always On Display**, mutta nimi voi vaihdella One UI -version mukaan.

Paras välimuoto ei aina ole asetuksen poistaminen kokonaan käytöstä. Monissa puhelimissa näytön voi määrittää näkymään vain napautettaessa, uusien ilmoitusten yhteydessä tai tietyn aikataulun mukaan. Näin suurin osa hyödystä säilyy ilman, että pikseleitä pidetään päällä joka minuutti.

## Sijainnin tarkkuus ja sovellusluvat

Sijaintitietojen tarkkuus auttaa Androidia löytämään sijaintisi nopeammin ja tarkemmin käyttämällä muutakin kuin GPS:ää. Arvioon voivat vaikuttaa Wi-Fi-tukiasemat, mobiiliverkon tukiasemat, anturit, IP-osoite ja laitteen tiedot.

Asetus ei ole huono. Sen ansiosta puhelin voi paikantaa sinut rakennuksen sisällä, jossa GPS-signaali on heikko. Samalla taustasijaintiin luvan saaneet sovellukset voivat pyytää sijaintia taustalla, ja toistuvat taustapyynnöt ovat tavallinen virrankulutusongelma.

Tarkista **Asetukset > Sijainti > Sovellusten sijaintiluvat**. Jokainen sovellus kohdassa **Sallittu aina** ansaitsee tarkemman katselun. Sääwidgetit, sosiaalisen median sovellukset, ostossovellukset, kuvasovellukset ja matkasovellukset eivät useinkaan tarvitse sijaintia taustalla. Vaihda luvaksi **Salli vain, kun sovellus on käytössä**, ellei taustaseuranta ole sovelluksen varsinainen tarkoitus.

Android 12:ssa ja uudemmissa monille sovelluksille voi antaa vain likimääräisen sijainnin. Tämä parantaa enemmän yksityisyyttä kuin akunkestoa, mutta on silti hyvä tapa. Navigointi, liikunnan seuranta sekä hätä- ja turvallisuussovellukset ovat ilmeisiä poikkeuksia.

## Synkronointi ja tilit

Jokaisella puhelimessa olevalla tilillä voi olla oma synkronointinsa. Google-, Samsung- ja Microsoft-tilit, sähköposti, kalenteri, yhteystiedot, pilvimuistiinpanot, Drive, Photos, selaimen synkronointi ja muiden palvelujen tilit lisäävät kaikki taustatyötä.

Avaa Asetuksista tilien hallinta, jonka nimi voi olla esimerkiksi **Passwords, passkeys & accounts** tai **Accounts**, ja tarkista jokaisen tilin synkronoitavat tiedot. Jos tämä on ainoa puhelimesi, yhteystiedot, kalenteri ja ensisijainen sähköposti kannattaa todennäköisesti jättää rauhaan. Sen sijaan vanhan työtilin, tarpeettoman pilvipalvelun tai käytöstä poistuneen sähköpostitilin synkronointia voi turvallisesti karsia.

Monissa puhelimissa on myös kaikkia tilejä koskeva automaattisen synkronoinnin kytkin. En suosittele pitämään sitä jatkuvasti pois päältä, koska myöhästyneet viestit ja vanhentuneet kalenterit ärsyttävät. Matkapäivänä, pitkällä vaelluksella tai sähkökatkon aikana siitä voi olla hyötyä.

## Mobiilidatan valmiustilakytkin

Kehittäjäasetuksissa on kytkin nimeltä **Mobile data always active**. Kun se on päällä, Android pitää mobiilidatayhteyden valmiina myös Wi-Fi-yhteyden aikana. Etuna on nopeampi siirtyminen mobiilidataan, jos Wi-Fi katkeaa. Haittana modeemi voi pysyä hereillä tarpeettoman paljon.

Tämä merkitsee eniten heikossa mobiilisignaalissa. Puhelin voi olla Wi-Fi-verkossa kellarissa ja silti kuluttaa virtaa yrittäessään ylläpitää yhden palkin LTE-yhteyttä.

Avaa Kehittäjäasetukset menemällä kohtaan **Asetukset > Tietoja puhelimesta** ja napauttamalla **Build number** -kohtaa seitsemän kertaa. Tarkista sitten **Asetukset > Järjestelmä > Kehittäjäasetukset > Mobile data always active**. Samsungilla Kehittäjäasetukset ilmestyy käyttöönoton jälkeen yleensä Asetusten alaosaan.

Poista asetus käytöstä, jos puhelin viettää suurimman osan päivästä vakaassa Wi-Fi-verkossa. Varaudu lyhyeen viiveeseen, kun Wi-Fi katkeaa ja puhelin siirtyy takaisin mobiilidataan.

## Ilmoitukset, herätyseleet ja pienet heräämiset

Yksi ilmoitus ei kuluta paljon akkua. Koko päivän jatkuva ilmoitustulva kuluttaa. Jokainen ääni, värinä, näytön herääminen ja lukitusnäytön animaatio antaa puhelimelle uuden syyn poistua syvimmästä lepotilastaan.

Avaa **Asetukset > Ilmoitukset > Sovellusilmoitukset** ja karsi markkinointi-ilmoitukset armotta. Ostostarjousten, pelimuistutusten, suoratoistosuositusten, ravintolatarjousten ja sovellusmainonnan ei tarvitse herättää puhelinta.

Tarkista myös lukitusnäytön ja eleiden asetukset, kuten **Lift to wake**, **Tap to wake** ja **Double tap to check phone**. Ne käyttävät vähävirtaisia antureita, joten yksinään ne eivät ole suuria kuluttajia. Suurempi ongelma ovat tahattomat heräämiset taskussa, laukussa tai tärisevällä pöydällä.

Poista käytöstä eleet, joita et käytä. Jätä päälle ne, jotka oikeasti tekevät puhelimesta mukavamman käyttää.

## Heikko signaali on piilokuluttaja, jota ei voi poistaa yhdellä kytkimellä

Heikko mobiilisignaali voi kuluttaa enemmän akkua kuin mikään tämän listan asetus. Kun puhelin kamppailee yhteyden säilyttämiseksi, modeemi tekee enemmän työtä. Tätä tapahtuu maaseudulla, maan alla, betonirakennuksissa, hisseissä ja kodeissa, joissa puhelin roikkuu yhden palkin varassa.

Jos käytät Wi-Fiä etkä tarvitse hetkeen tavallisia matkapuheluita tai tekstiviestejä, Lentotila (Airplane Mode) ja sen jälkeen erikseen päälle laitettu Wi-Fi voivat auttaa. Tämä sammuttaa mobiiliradion mutta säilyttää internetyhteyden. Älä tee näin, jos tarvitset tavallisia mobiilipuheluita, tekstiviestejä tai operaattorin hätätoimintoja.

Tässä runcheckin kaltainen työkalu on hyödyllinen. Jos näytön ollessa sammutettuna tapahtuva kulutus osuu yhteen heikon signaalin eikä näytön käytön kanssa, ongelma ei ole mystinen sovellus. Se on radioyhteys.
