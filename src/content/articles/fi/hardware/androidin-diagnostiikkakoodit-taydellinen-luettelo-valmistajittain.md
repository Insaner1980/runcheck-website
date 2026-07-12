---
title: "Androidin diagnostiikkakoodit: täydellinen luettelo valmistajittain"
description: "Androidin diagnostiikka- ja valintakoodit valmistajittain, mukana Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO ja Realme sekä ajantasaiset Android 17 -huomiot."
listSummary: "diagnostiikka, anturit ja android"
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostiikka","anturit","android","laitteisto","opas"]
locale: "fi"
draft: false
---
---

Kirjoitat yhteen Galaxy-puhelimeen `*#0*#`, ja näytölle avautuu kattava laitteistotestien valikko. Kirjoitat saman koodin toiseen Galaxyyn, eikä mitään tapahdu.

Tämä on Androidin diagnostiikkakoodien normaali tila. Koodit ovat hyödyllisiä, mutta verkossa ne näyttävät paljon yleispätevämmiltä kuin todellisuudessa ovat. Koodi voi toimia yhdessä puhelimessa, olla toimimatta saman merkin toisessa mallissa ja kadota operaattorin laiteohjelmistopäivityksen jälkeen. Koodit ovat Androidin, puhelinsovelluksen, valmistajan huoltovalikoiden ja operaattorin rajoitusten välisessä sekavassa rajapinnassa.

Google julkaisi Android 17:n 16. kesäkuuta 2026 ja toi sen ensin tuetuille Pixel-laitteille. OnePlusin, OPPO:n, realmen, vivon, Xiaomin, HONORin, Lenovon, Sharpin ja iQOO:n kaltaisten valmistajien laitteissa Android 17:n beetaversiot ja jakelu kulkevat edelleen kunkin valmistajan omien kanavien kautta. Tämä on olennaista, koska Android 17 ei yhdenmukaista piilotettuja diagnostiikkakoodeja eri merkkien välillä.

Käytä koodeja kokeillessasi puhelimen esiasennettua puhelinsovellusta. Samsungin koodit tarvitsevat yleensä Samsung Phone -sovelluksen. Googlen koodit toimivat yleensä Phone by Google -sovelluksessa. Kolmannen osapuolen puhelinsovellukset eivät usein käsittele MMI- tai huoltokoodeja lainkaan.

## Ennen kuin kokeilet koodeja

Pysy vain tietoja näyttävissä ja laitteistoa testaavissa koodeissa. Älä syötä nollaukseen, käyttöönottoon, modeemiasetuksiin tai huolto-ohjelmointiin liittyviä koodeja, ellet tiedä täsmälleen, mitä ne tekevät.

Useimmat testikoodit käynnistyvät heti, kun kirjoitat viimeisen merkin. Joissakin puhelimissa on painettava soittopainiketta. Jos mitään ei tapahdu, älä kirjoita koodia yhä uudelleen. Sitä ei todennäköisesti tueta kyseisessä mallissa, puhelinsovelluksessa, operaattoriversiossa tai Android-versiossa.

## Monissa Android-puhelimissa toimivat koodit

Nämä ovat lähimpänä Androidin yhteisiä diagnostiikkakoodeja, mutta niidenkään toimivuutta ei taata kaikissa laitteissa.

| Koodi | Mitä se tekee | Huomautukset |
|---|---|---|
| `*#06#` | Näyttää IMEI-tunnuksen ja joskus myös MEID- tai EID-tunnuksen | Laajimmin tuettu puhelinkoodi. Hyödyllinen takuuasioissa, estolistatarkistuksissa ja operaattorin tuessa. |
| `#07#` | Näyttää sääntelytiedot ja SAR-arvot | Toimii monissa Android-puhelimissa. Joissakin on painettava soittopainiketta. |
| `*#*#4636#*#*` | Avaa Androidin Testing-valikon | Voi näyttää puhelin- ja verkkotietoja, signaalitietoja, akkutilastoja ja Wi-Fi-tietoja. Saatavuus vaihtelee paljon. |
| `*#*#426#*#*` | Avaa Firebase Cloud Messaging -diagnostiikan | Kannattaa kokeilla Phone by Google -sovelluksessa. Hyödyllinen, jos push-ilmoitukset eivät saavu. |

`*#*#4636#*#*` on yksi verkossa useimmin mainituista Android-koodeista, mutta älä ylläty, jos nykyinen valikko näyttää vähemmän tietoja kuin vanhoissa kuvakaappauksissa. Uudemmat Android-versiot ja valmistajien käyttöliittymät piilottavat aiempaa enemmän verkko- ja akkutietoja.

## Samsung Galaxy

Samsung tarjoaa kaksi diagnostiikkareittiä: Samsung Membersin ja piilotetut valintakoodit. Aloita Samsung Membersista. Se on tuettu, ajantasainen ja tavalliselle käyttäjälle helpompi vaihtoehto.

Avaa Samsung Members, valitse Discover-välilehdeltä `Diagnostics` ja sitten `Phone diagnostics`. Samsungin nykyiseen testiluetteloon kuuluu mallista riippuen esimerkiksi kamera, USB-yhteys, kaapelilataus, akun tila, kosketusnäyttö, anturit, värinä, mikrofoni, kaiutin, Wi-Fi, Bluetooth, SIM-kortti, NFC ja sormenjälkien tunnistus.

Samsungin valintakoodit voivat silti olla hyödyllisiä, etenkin lukitsemattomissa puhelimissa. One UI:n suojausasetukset, Auto Blocker, yrityskäytännöt ja operaattorin laiteohjelmisto voivat kuitenkin estää niiden toiminnan.

| Koodi | Mitä se tekee | Huomautukset |
|---|---|---|
| `*#0*#` | Avaa Samsungin tärkeimmän laitteistotestivalikon | Testeihin voi kuulua näytön värit, kosketus, kuuloke, kaiutin, värinä, kamerat, anturit, S Pen ja muita osia. |
| `*#0228#` | Akun tilan näyttö | Näyttää monissa malleissa akun jännitteen ja muita reaaliaikaisia tietoja. Osa uusista ohjelmistoversioista estää koodin. |
| `*#0011#` | ServiceMode-verkkonäyttö | Hyödyllinen signaali- ja palvelevan solun tietoihin. Älä muuta asetuksia. |
| `*#0842#` | Värinätesti | Toimii monissa Samsung-malleissa, mutta ei kaikissa. |
| `*#0673#` tai `*#0289#` | Äänitesti | Kaiuttimen ja kuulokkeen toiminta vaihtelee mallin mukaan. |
| `*#2663#` | Kosketusohjelmiston tiedot | Huoltoteknikot käyttävät tätä usein. |
| `*#7353#` | Pikatestivalikko | Yleisempi vanhemmissa Galaxy-malleissa. |
| `*#1234#` | Laiteohjelmiston versiotiedot | Näyttää AP-, CP- ja CSC-koontiversiot. |
| `*#7412365#` | Kameran laiteohjelmiston tiedot | Saatavuus vaihtelee. |
| `*#0588#` | Lähestymisanturin testi | Hyödyllinen, jos näyttö ei sammu puhelun aikana. |
| `*#9900#` | SysDump-tila | Tarkoitettu lähinnä lokeihin ja virheenkorjaukseen. Älä muuta satunnaisia asetuksia. |
| `*#9090#` | Diagnostiikkamääritykset | Älä muuta mitään ilman virallisia huolto-ohjeita. |

Jos `*#0*#` ei toimi, älä päättele puhelimen olevan väärennös. Kokeile ensin Samsung Phone -sovellusta Google Phonen sijaan. Tarkista sen jälkeen Samsung Membersin diagnostiikka. Jos se toimii, laitteistotestit ovat edelleen käytettävissä, vaikka piilotettu koodi olisi estetty.

## Google Pixel

Pixel-puhelimet ovat Samsungia rajoitetumpia. Niissä ei ole Samsungin `*#0*#`-valikkoa vastaavaa yleistä testivalikkoa.

| Koodi | Mitä se tekee | Huomautukset |
|---|---|---|
| `*#*#7287#*#*` | Avaa Pixel Repair Diagnostics App -sovelluksen tuetuissa laitteissa | Google dokumentoi koodin Pixelin omatoimikorjauksiin. Se vaatii internetyhteyden, ja toiminta voi vaihdella mallin, alueen ja ohjelmistotilan mukaan. |
| `*#*#4636#*#*` | Androidin Testing-valikko | Käytetään usein puhelin- ja verkkotietoihin, mutta kentät vaihtelevat Android-version mukaan. |
| `*#*#426#*#*` | FCM-diagnostiikka | Hyödyllinen push-ilmoitusten ongelmien selvittämisessä. |
| `#07#` | Sääntely- ja SAR-tiedot | Toimii monissa Pixel-malleissa. |

Pixel 6:ssa ja uudemmissa, Pixel Fold mukaan lukien, on myös Asetusten `Device health and support` -osio. Se on usein parempi ensimmäinen paikka akun, latauksen, suorituskyvyn ja tuen tarkistamiseen kuin piilotettu huoltokoodi.

Android 17 on saatavana langattomana päivityksenä tuetuille Pixel-laitteille Pixel 6:sta Pixel 10a:han. Tämä ei tarkoita, että kaikissa Pixel-malleissa olisi täsmälleen sama diagnostiikka. Laitteisto, alue ja korjausdiagnostiikan tuki vaikuttavat edelleen.

## Xiaomi, Redmi ja POCO

Xiaomin CIT-valikko on yksi Androidin paremmista valmistajakohtaisista testikokonaisuuksista, mutta sen sisältö vaihtelee MIUI:n, HyperOS:n, alueversion ja mallisarjan mukaan.

| Koodi | Mitä se tekee | Huomautukset |
|---|---|---|
| `*#*#6484#*#*` | Avaa CIT-laitteistotestivalikon | Sisältää usein näytön, kosketuksen, värinän, kaiuttimien, mikrofonien, kameroiden, antureiden, GPS:n, Wi-Fin, Bluetoothin, SIM-kortin, näppäinten, sormenjälkitunnistimen, infrapunalähettimen ja NFC:n testejä. |
| `*#*#64663#*#*` | Vaihtoehtoinen CIT-koodi | Toimii joissakin vanhemmissa Xiaomi-malleissa. |
| `*#*#4636#*#*` | Androidin Testing-valikko | Saatavuus vaihtelee etenkin uudemmissa HyperOS-versioissa. |

Joissakin Xiaomi-puhelimissa diagnostiikka avautuu myös puhelimen tietosivulta napauttamalla `Kernel version` -kohtaa useita kertoja. Jos valintakoodi ei toimi, kokeile tätä reittiä.

## OnePlus

OnePlusin diagnostiikkapääsy on muuttunut vuosien aikana, kun OxygenOS on lähentynyt ColorOS:ää. Vanhojen oppaiden ohjeet eivät välttämättä vastaa nykyistä puhelintasi.

| Koodi | Mitä se tekee | Huomautukset |
|---|---|---|
| `*#808#` | Engineering Mode | Laitteistotesteihin voi kuulua näyttö, kosketus, kamerat, anturit, ääni, lataus ja verkkokomponentit. Saatavuus vaihtelee OxygenOS-version ja alueen mukaan. |
| `*#*#4636#*#*` | Androidin Testing-valikko | Toimii edelleen monissa malleissa. |
| `*#888#` | Laitteistoversio tai tuotantotiedot | Ei ole käytettävissä kaikissa malleissa. |
| `*#1234#` | Laiteohjelmiston versio | Toimii joissakin OnePlus-versioissa. |

Ole varovainen Engineering Mode -valikossa. Käytä testinäkymiä, mutta älä muuta modeemin, kalibroinnin tai huollon asetuksia.

## Motorola

Motorolalla on vähemmän julkisia valintakoodeja kuin Samsungilla tai Xiaomilla, mutta monissa malleissa on huoltotestisovellus.

| Koodi | Mitä se tekee | Huomautukset |
|---|---|---|
| `*#*#2486#*#*` | Avaa CQATest- tai huoltotestivalikon | Voi sisältää näytön, kosketuksen, kaiuttimen, värinän, kameran ja antureiden testejä. |
| `*#*#4636#*#*` | Androidin Testing-valikko | Toimii monissa malleissa. |
| `.12345+=` | Avaa engineering mode -tilan puhelimen omasta laskinsovelluksesta | Toimii vain joissakin Motorola-laitteissa ja vain esiasennetussa laskimessa. |

Jos CQATest ilmestyy sovellusluetteloon testin jälkeen, älä säikähdä. Se on Motorolan tehdastestikomponentti.

## OPPO ja Realme

OPPO ja Realme jakavat paljon ColorOS-pohjaista tekniikkaa, joten myös niiden huoltokoodit menevät osittain päällekkäin.

| Koodi | Mitä se tekee | Huomautukset |
|---|---|---|
| `*#899#` | Manuaalinen testi- tai engineering-valikko | Tavallinen laitteistotestien aloituspiste monissa ColorOS- ja Realme UI -versioissa. |
| `*#800#` | Engineering- tai lokityökalu | Käytetään usein lokeihin ja verkkodiagnostiikkaan. |
| `*#6776#` | Ohjelmisto- ja laitetiedot | Näyttää malli- ja laiteohjelmistotietoja monissa laitteissa. |
| `*#*#4636#*#*` | Androidin Testing-valikko | Saatavuus vaihtelee. |

Turvallisempi vaihtoehto on yleensä puhelimen sisäänrakennettu Phone Manager-, My OPPO-, My realme- tai Support-sovellus, jos sellainen kuuluu malliin.

## Vältettävät koodit

Vältä satunnaisista luetteloista löytyviä tehdasnollaus- ja huolto-ohjelmointikoodeja. Yksi edelleen kiertävä vaarallinen esimerkki on `*2767*3855#`, joka on vanhojen Samsung-laitteiden tehdasnollauskoodi. Älä kirjoita sitä vain nähdäksesi, mitä tapahtuu. Sillä tavalla tietoja katoaa.

Vältä myös kaikkea, minkä kuvauksessa mainitaan NV, RF-kalibrointi, modeemiohjelmointi, operaattorin käyttöönotto tai huoltomääritys. Nämä valikot eivät ole diagnostiikkaleluja.

## Kun koodi ei toimi

Kokeile ensin puhelimen esiasennettua puhelinsovellusta. Kokeile sitten valmistajan tuki- tai diagnostiikkasovellusta. Samsung Members, Pixel-diagnostiikka, Xiaomin asetuksista avattava CIT, Motorolan Device Help sekä OPPO:n ja realmen tukityökalut toimivat usein silloinkin, kun valintakoodi ei reagoi.

Operaattorilukittu puhelin voi estää koodeja. Yrityksen hallinnoima puhelin voi estää niitä. Myös suojausominaisuudet voivat estää niitä. Android-päivitys voi poistaa tai piilottaa osan valikosta. Se on turhauttavaa, mutta ei automaattisesti tarkoita laitteistovikaa.

Diagnostiikkakoodit ovat hyödyllisiä yksittäisten komponenttien pikaisiin tarkistuksiin. Hitaasti kehittyvien ongelmien selvittämiseen ne eivät riitä. Kaiutintesti ei kerro, että puhelin ylikuumenee joka iltapäivä, eikä akkuruutu näytä latausvirran heikentyneen kuukauden ajan. runcheck täydentää tätä seuraamalla akun, lämpötilan, verkon, tallennustilan ja latauksen kehitystä ajan kuluessa.

## FAQ

### Voivatko diagnostiikkakoodit vahingoittaa puhelinta?

Tietoja näyttävät ja testejä suorittavat koodit ovat yleensä turvallisia. Tietoja nollaavat tai huoltoasetuksia muuttavat koodit eivät ole. Tarkista aina täsmällinen koodi ennen sen syöttämistä.

### Pitääkö soittopainiketta painaa?

Yleensä ei. Useimmat `*#*#...#*#*`- ja `*#...#`-koodit käynnistyvät viimeisen merkin kirjoittamisen jälkeen. Joissakin puhelimissa soittopainiketta tarvitaan, etenkin lyhyissä koodeissa, kuten `#07#`.

### Miksi koodi toimii yhdessä puhelimessa mutta ei toisessa?

Koska toteutus riippuu valmistajasta, puhelinsovelluksesta, laiteohjelmistosta ja joskus operaattorista. Android ei takaa yleistä laitteistotestivalikkoa.

### Voivatko sovellukset korvata diagnostiikkakoodit?

Osittain. Samsung Membersin, Phone Doctor Plusin, TestM:n ja DevCheckin kaltaiset sovellukset voivat testata näyttöä, kaiuttimia, kameroita ja antureita sekä näyttää akun ja verkon tietoja Androidin ohjelmointirajapintojen kautta. Ne eivät yleensä pääse samoihin matalan tason huoltonäkymiin kuin valmistajan omat valikot.
