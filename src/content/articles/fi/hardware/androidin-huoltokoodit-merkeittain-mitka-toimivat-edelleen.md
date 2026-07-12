---
title: "Androidin huoltokoodit merkeittäin: mitkä toimivat edelleen"
description: "Toimivat Androidin huoltokoodit merkeittäin, mukana ajantasaiset huomiot Android 17:stä, Pixel-laitteista, Samsungista, Xiaomista, OnePlusista, Motorolasta, Huaweista, Realmesta ja Opposta."
listSummary: "diagnostiikka, anturit ja android"
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostiikka","anturit","android","laitteisto","opas"]
locale: "fi"
draft: false
---
Androidin huoltokoodit ovat hyödyllisiä, mutta sekavia. Osa kuuluu Androidiin, osa on valmistajan lisäämiä ja osa katoaa laiteohjelmistopäivityksen jälkeen ilman varoitusta.

Tällä on tavallista enemmän merkitystä nyt, kun Android 17:n jakelu on käynnissä. Google julkaisi Android 17:n ensin tuetuille Pixel-laitteille, kun taas Samsung, Xiaomi, OnePlus, Motorola ja muut valmistajat toimittavat omat Android 17 -versionsa omien aikataulujensa mukaan. Pixelissä tällä hetkellä toimiva koodi ei siis kerro, toimiiko sama koodi Galaxy- tai Redmi-puhelimessa, jonka valmistajakohtainen Android 17 -ohjelmisto on erilainen tai ei ole vielä saatavilla.

Kaksi sääntöä ennen aloittamista. Useimmat koodit aktivoituvat heti, kun kirjoitat viimeisen merkin, joten soittopainiketta ei yleensä paineta. Jos koodi avaa valikon, jota et ymmärrä, katso mutta älä muuta mitään.

## Yleiset koodit

Nämä koodit ovat lähimpänä Androidin yhteistä perustasoa. Valmistajan muokkaama ohjelmisto voi silti estää ne.

`*#06#` näyttää puhelimen matkapuhelinradion IMEI-tunnuksen. Kahden SIM-kortin puhelimet näyttävät yleensä kaksi IMEI-tunnusta. Tämä on luettelon turvallisin koodi, ja se toimii lähes kaikissa puhelimissa, myös iPhoneissa.

`*#*#4636#*#*` avaa Androidin Testing-valikon monissa laitteissa. Se voi näyttää puhelintietoja, akkutilastoja, signaalin voimakkuuden ja radiotietoja. Monet valmistajien käyttöliittymät rajoittavat valikkoa nykyään, etenkin uusissa Samsung- ja Xiaomi-ohjelmistoissa.

`*#*#426#*#*` avaa Firebase Cloud Messaging -diagnostiikan. Siitä on eniten hyötyä, kun push-ilmoitukset viivästyvät tai jäävät tulematta, sillä valikko näyttää, pystyykö Google Play services ylläpitämään yhteyttä Googlen palvelimiin.

`*#07#` näyttää SAR-tietoja monissa Android-puhelimissa. SAR tarkoittaa ominaisabsorptionopeutta eli sitä, kuinka paljon radiotaajuista energiaa keho absorboi käytön aikana. Yhdysvalloissa FCC:n puhelimille asettama raja on 1,6 W/kg. Euroopassa kuluttajalaitteiden tavallinen pään ja vartalon altistumisraja on 2,0 W/kg 10 gramman kudosmassan keskiarvona.

## Samsung Galaxy

Samsungilla on edelleen yksi paremmista diagnostiikkakokonaisuuksista, osittain siksi, että tarjolla on sekä valintakoodeja että tuettu sovellusreitti.

`*#0*#` avaa Samsungin laitteistotestin monissa Galaxy-puhelimissa. Tarkka asettelu vaihtelee mallin mukaan, mutta tavallisesti voit testata näyttöä, kosketusta, kameroita, kaiuttimia, värinää, antureita ja joskus sormenjälkilaitteistoa. Joissakin operaattorimalleissa tai tiukasti rajoitetuissa ohjelmistoversioissa valikko ei avaudu lainkaan.

Samsung Members on tavalliselle käyttäjälle turvallisempi vaihtoehto. Avaa Samsung Members, valitse Discover-välilehdeltä `Diagnostics` ja sitten `Phone diagnostics`. Sovellus ohjaa testit vaiheittain ja antaa huoltovalikkoa selvemmät tulokset.

`*#0228#` näyttää monissa Galaxy-ohjelmistoissa akun tietoja, kuten jännitteen ja lämpötilan. Se ei anna selkeää akun kuntoprosenttia.

`*#0011#` avaa ServiceMode-valikon monissa malleissa. Se näyttää reaaliaikaisia matkapuhelinverkon tietoja, kuten taajuusalueen, palvelevan solun ja signaalitietoja. Tiedoista voi olla hyötyä, mutta niitä on helppo tulkita väärin ilman mobiiliverkkojen tuntemusta.

`*#9900#` avaa SysDump-valikon joissakin Galaxy-puhelimissa. Useimpien käyttäjien ei pidä koskea siellä mihinkään, ellei Samsungin tuki ole nimenomaisesti ohjeistanut esimerkiksi lokitietojen käsittelyä.

`*#2663#` näyttää joissakin malleissa kosketuspaneelin laiteohjelmistotietoja. Älä päivitä kosketuksen laiteohjelmistoa vain siksi, että valikossa on painike. Käytä sitä vain todellisen kosketusongelman vianmääritykseen ja ohjeiden mukaan.

## Xiaomi, Redmi ja POCO

Xiaomin tehdastestikokonaisuus on nimeltään CIT. Se on yksi harvoista Androidin diagnostiikkavalikoista, joista löytyy edelleen kohtuullisen hyvää valmistajan tukidokumentaatiota.

`*#*#6484#*#*` avaa CIT-laitteistotunnistuksen monissa Xiaomi-, Redmi- ja POCO-puhelimissa. Jos se ei reagoi, kokeile `*#*#64663#*#*`. Xiaomin tukisivuilla viitataan mallista ja alueesta riippuen molempiin koodeihin.

CIT-valikossa voi olla testejä näytölle, kosketukselle, kaiuttimelle, mikrofonille, värinälle, kameralle, lähestymisanturille, valoanturille, kiihtyvyysanturille, gyroskoopille, kompassille, Wi-Fille, Bluetoothille, SIM-tunnistukselle, sormenjälkitunnistimelle, NFC:lle ja lataukselle. Luettelo riippuu puhelimen laitteistosta.

Samaan valikkoon pääsee usein ilman valintakoodia avaamalla puhelimen tietosivun asetuksista ja napauttamalla `Kernel version` -kohtaa useita kertoja. Xiaomi muuttaa valikkojen sanamuotoja MIUI:n ja HyperOS:n välillä, mutta tätä reittiä kannattaa kokeilla, jos valintakoodi on estetty.

`*#*#6485#*#*` näyttää akun teknisiä tietoja monissa Xiaomi-puhelimissa. Käsittele arvoja teknisinä mittauksina, älä yksinkertaisena akun kuntosivun korvikkeena.

## Google Pixel

Pixel-puhelimet tukevat osaa yleisistä Android-koodeista, mutta tärkein nykyinen diagnostiikkakoodi on Pixel-kohtainen.

`*#*#7287#*#*` avaa Pixel Repair Diagnostics App -sovelluksen tuetuissa Pixel-laitteissa. Google dokumentoi sen ennen korjausta ja korjauksen jälkeen tehtäviä tarkistuksia varten. Se vaatii internetyhteyden ja ohjaa käyttäjää näytöllä.

Pixel 6:ssa ja uudemmissa, Pixel Fold mukaan lukien, akkukohtaiset tarkistukset löytyvät myös virallisesta polusta `Settings > Battery > Battery Diagnostics`. Se on tavallinen Asetusten toiminto, ei piilotettu koodi.

`*#*#4636#*#*` toimii edelleen monissa Pixel-puhelimissa radio- ja akkutietojen tarkistamiseen. Se ei ole korjaustyökalu eikä pakota Android-päivityksiä asentumaan.

Vanhemmissa artikkeleissa mainitaan joskus laskinsovellukseen kirjoitettava `.12345+=` Pixelin engineering mode -tilaa varten. Siihen ei kannata luottaa vuonna 2026. Käytä virallista Pixel-diagnostiikkakoodia.

## OnePlus

OnePlusin koodit ovat epäjohdonmukaisia, koska OxygenOS on lähentynyt ColorOS:ää viime vuosina.

`*#808#` avaa Engineer Mode -tilan joissakin vanhemmissa OnePlus-puhelimissa, etenkin OnePlus 7-, 8- ja 9-sarjoissa. Uudemmat ohjelmistot voivat estää sen.

`*#899#` avaa diagnostiikka- tai lokivalikon joissakin OnePlus- ja Oppo-sukuisissa laitteissa. Valikon sisältö vaihtelee paljon.

`*#*#4636#*#*` on yleensä hyödyllisin peruskoodi verkko- ja akkutietoihin. Uudemmissa OnePlus-puhelimissa sisäänrakennettu diagnostiikka- tai tukisovellus tai luotettava anturisovellus on usein vähemmän turhauttava vaihtoehto kuin vanhojen koodien metsästäminen.

## Motorola

`*#*#2486#*#*` avaa monien käyttäjäraporttien perusteella Motorolan engineering- tai laitteistotestivalikon useissa Moto-puhelimissa. Tuki vaihtelee mallin mukaan.

Luotettavampi vaihtoehto on Device Help -sovellus. Monissa malleissa se sisältää laitteistodiagnostiikan ja täyden laitteistotestin. Tämä reitti on helpompi selittää tavalliselle käyttäjälle eikä riipu siitä, onko piilotettu koodi edelleen käytössä.

`*#*#4636#*#*` toimii monissa Motorola-puhelimissa, sillä Motorolan Android-versiot pysyvät melko lähellä tavallista Androidia.

## Huawei ja Honor

`*#*#2846579#*#*` avaa ProjectMenu-valikon monissa Huawei-puhelimissa ja vanhemmissa Honor-laitteissa, joissa on EMUI tai MagicUI. Valikko sisältää ohjelmisto-, tausta-, verkko- ja huoltoasetuksia. Osa kohdista on tarkoitettu teknikoille.

`*#*#6130#*#*` näyttää verkkotietoja joissakin Huawei-malleissa.

Uudemmissa HarmonyOS-laitteissa kannattaa käyttää Support-sovellusta sen sijaan, että odottaisit kaikkien vanhojen Android-koodien toimivan. Huawei on siirtänyt paljon käyttäjille tarkoitettua diagnostiikkaa ohjattuihin tukitoimintoihin.

## Realme ja Oppo

`*#800#` avaa Engineer Mode -tilan joissakin Realme- ja Oppo-puhelimissa. Uudemmissa ColorOS-versioissa pääsy on paljon aiempaa rajoitetumpi.

`*#899#` voi avata diagnostiikka- tai lokivalikon joissakin malleissa.

Nämä valmistajat muuttavat diagnostiikkapääsyä usein. Jos koodi ei toimi, älä jatka vanhoilta keskustelupalstoilta löytyvien satunnaisten koodien kokeilemista. Käytä Phone Manager- tai tukisovellusta tai tunnettua laitteistotietosovellusta.

## Miksi koodit lakkaavat toimimasta

Puhelinsovelluksella on merkitystä. Kolmannen osapuolen sovellus ei välttämättä käsittele MMI- ja huoltokoodeja samalla tavalla kuin esiasennettu puhelinsovellus. Kokeile ensin puhelimen omaa sovellusta.

Operaattorin laiteohjelmisto voi poistaa koodeja. Operaattorilukittu Galaxy voi käyttäytyä eri tavalla kuin lukitsematon Galaxy, vaikka laitteisto olisi sama.

Suuret päivitykset voivat muuttaa kaiken. Android 17 on hyvä esimerkki: Pixelit saivat sen ensin, mutta jokainen valmistaja toimittaa oman versionsa omine huoltovalikkoineen, oikeuksineen ja rajoituksineen. Kun koodi lakkaa toimimasta järjestelmäpäivityksen jälkeen, se voi olla estetty eikä varsinaisesti rikki.

Ja kyllä, osa verkon koodiluetteloista on vanhentunut. Galaxy S8 -keskustelusta kopioitu koodi ei välttämättä toimi Galaxy S26:ssa, vaikka artikkeli väittäisi sen sopivan kaikkiin Samsung-puhelimiin.

## Turvallisemmat vaihtoehdot

Tavallisiin tarkistuksiin valmistajan diagnostiikkasovellus on yleensä piilotettua valikkoa parempi. Samsung Members, Xiaomi CIT, Pixel Repair Diagnostics, Motorola Device Help ja Huawei Support ovat helpompia tulkita ja vähemmän riskialttiita.

DevCheckin, CPU-Z:n, AIDA64:n ja Phone Doctor Plusin kaltaiset sovellukset voivat näyttää akun mittaustietoja, anturiarvoja, suorittimen tietoja, tallennustilan tilaa ja verkkotietoja Androidin julkisten ohjelmointirajapintojen kautta. Ne eivät pääse kaikkiin tehdastesteihin, mutta riittävät useimpiin vianmääritystilanteisiin.

Laajempaa kuntokuvaa varten runcheck yhdistää akun, lämpötilan, verkon ja tallennustilan diagnostiikan yhteen näkymään, joten sinun ei tarvitse siirtyä huoltovalikosta toiseen.

## Mihin ei pidä koskea

Älä muuta verkkotaajuuksia, ellet tiedä täsmälleen, miksi teet sen.

Älä käynnistä huoltovalikoiden laiteohjelmistopäivityksiä vain kokeillaksesi, mitä tapahtuu.

Älä käytä koodiluettelosta löytyviä nollaus-, kalibrointi- tai tehdastoimintoja, ellet ole varmuuskopioinut puhelinta ja tiedä, mitä toiminto tekee.

Arvojen lukeminen on turvallista. Piilotettujen asetusten muuttamisesta ongelmat alkavat.
