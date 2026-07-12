---
title: "Android-puhelimen anturien testaaminen, vianmääritys ja korjaus"
description: "Mistä tietää, onko automaattinen kierto rikki, kompassi sekaisin vai käyttäytyykö vain yksi sovellus huonosti? Anturiongelmissa juuri tämä on ärsyttävää. Ne vaikuttavat pieniltä, kunnes navigoinnin, puhelujen, kameran vakautuksen, askelten seurannan tai automaattisen kirkkauden pitäisi toimia."
listSummary: "Mistä tietää, onko automaattinen kierto rikki, kompassi sekaisin vai käyttäytyykö vain yksi sovellus huonosti?"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["laitteisto","testaus","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Android-puhelimissa käytetään liike-, ympäristö-, sijainti- ja lähestymisantureita. Osa niistä on fyysisiä piirejä. Osa on "virtuaalisia" antureita, joiden arvot lasketaan usean fyysisen anturin tiedoista. Kun yksi tietolähde antaa häiriöistä dataa, peittyy tai poistuu käytöstä, oire voi näkyä aivan toisessa toiminnossa.

Aloita yksinkertaisista testeistä. Ensimmäisiin tarkistuksiin ei tarvita root-oikeuksia, ADB:tä eikä laboratoriolaitteita.

## Nopeat anturitestit

Kokeile näitä tavallisia testejä ennen minkään sovelluksen asentamista:

- Käännä puhelin pystyasennosta vaaka-asentoon, kun kiertolukitus ei ole käytössä. Näin tarkistat kiihtyvyysanturin perustoiminnan.
- Ota panoraamakuva. Jos puhelin ei seuraa liikettä tasaisesti, ongelma voi liittyä gyroskooppiin.
- Soita puhelu ja peitä näytön yläosa kuulokkeen läheltä. Näytön pitäisi sammua ja syttyä uudelleen, kun poistat käden. Tämä testaa lähestymisanturia.
- Ota automaattinen kirkkaus käyttöön ja siirry valoisasta huoneesta pimeään. Näytön kirkkauden pitäisi muuttua muutamassa sekunnissa.
- Avaa Maps ja tarkista sininen suuntakeila. Hyvin leveä tai väärään suuntaan osoittava keila tarkoittaa yleensä, että magnetometri pitää kalibroida tai sen lähellä on häiriölähde.

Samsung Galaxy -laitteissa Samsung Members on selkein vaihtoehto: avaa Samsung Members ja valitse Pyydä apua > Näytä testit. Vanhempi `*#0*#`-diagnostiikkavalikko toimii edelleen monissa Galaxy-puhelimissa, ja siinä on antureiden testiosio.

Pixel-puhelimissa voit avata Pixel Diagnostics -työkalun tuetuissa laitteissa näppäilemällä `*#*#7287#*#*`. Xiaomi-, Redmi- ja POCO-laitteissa `*#*#6484#*#*` avaa CIT-valikon monissa malleissa. Motorola-puhelimissa testi löytyy Device Help -sovelluksen laitteen diagnostiikasta ja laitteistotesteistä.

Älä pidä koodia `*#*#4636#*#*` yleisenä anturitestinä. Monissa puhelimissa se avaa verkkoa, käyttöä, Wi-Fiä ja joskus akkua koskevan testi- tai tietonäkymän. Se ei ole yleispätevä anturien diagnostiikkavalikko.

## Miksi anturiongelmia syntyy

Tavallisin arkinen syy on kalibroinnin ajautuminen. Kiihtyvyysanturi, gyroskooppi ja magnetometri tarvitsevat kaikki kalibrointia. Magnetometri on erityisen herkkä, sillä magneetit, metalliset kuoret, autotelineet, kannettavat tietokoneet, kaiuttimet ja jopa jotkin lompakkokotelot voivat häiritä sitä.

Seuraavana tulevat fyysiset vauriot. Pudotus voi siirtää anturimoduulia, vääntää runkoa yläreunan läheltä tai vaurioittaa lattakaapelia. Vesivaurio voi ilmetä hitaammin. Puhelin voi toimia viikon normaalisti, minkä jälkeen lähestymisanturi tai barometri alkaa oireilla korroosion edetessä.

Anturin peittyminen jää helposti huomaamatta. Lähestymis- ja ympäristön valoanturi sijaitsevat tavallisesti kuulokkeen lähellä tai näytön alla. Paksu näytönsuoja, kotelon reuna, pöly, ihorasva tai vinoon asennettu yksityisyyssuoja voi estää valon pääsyn anturille tai hajottaa sitä.

Myös ohjelmisto voi sotkea anturien toiminnan. Suuret Android-päivitykset, valmistajan laiteohjelmiston muutokset, mukautetut ROM-versiot, sovellusten käyttöoikeudet ja aggressiivinen akunhallinta voivat muuttaa sitä, mitä tietoja sovellukset saavat. Android 17 tuli ensin useimmille tuetuille Pixel-laitteille, ja muiden valmistajien julkaisut seuraavat myöhemmin. Siksi päivitykseen liittyvä anturivika ei näy kaikissa puhelimissa samaan aikaan.

Virta-asetuksillakin on merkitystä. Android 9 rajoitti taustalla toimivien sovellusten pääsyä jatkuvaa dataa tuottaviin antureihin, kuten kiihtyvyysanturiin ja gyroskooppiin. Android 10 toi kehittäjäasetuksiin Sensors off -pika-asetusruudun, joka voi estää kameran, mikrofonin ja Androidin SensorManagerin hallinnoimien anturien käytön. Jos kaikki anturit näyttävät kuolleen yhtä aikaa, tarkista tämä ruutu ennen kuin epäilet emolevyvikaa.

## Kiihtyvyysanturin ja gyroskoopin testaaminen

Poista kiertolukitus käytöstä ja käännä puhelinta hitaasti. Näytön pitäisi vaihtaa suuntaa ilman pitkää viivettä tai jatkuvaa edestakaista kääntymistä. Jos näyttö ei kierry missään sovelluksessa, kiihtyvyysanturi ei ehkä välitä tietoa oikein.

Avaa seuraavaksi vatupassisovellus tai muu kallistuksen näyttävä sovellus. Aseta puhelin tasaiselle pöydälle. Arvojen pitäisi asettua paikoilleen sen sijaan, että ne ajelehtivat jatkuvasti. Pieni poikkeama on normaali. Selvä ja pysyvä kallistuma tasaisella alustalla viittaa kalibrointiongelmaan.

Testaa gyroskooppia kameran panoraamatilalla tai AR-sovelluksella. Näkymän pitäisi seurata liikettä tasaisesti. Jos panoraamakuvat epäonnistuvat toistuvasti tai AR-kohteet liukuvat paikallaan seistessäsi, gyroskoopin mittaus voi olla häiriöinen.

Vertailusta on tässä hyötyä. Testaa sama sovellus toisella puhelimella samassa huoneessa. Jos molemmat toimivat huonosti, ongelma on todennäköisemmin sovelluksessa tai ympäristössä.

## Lähestymisanturin testaaminen

Soita puhelu ja pidä kättä noin kahden senttimetrin päässä näytön yläosasta. Näytön pitäisi sammua. Kun siirrät käden pois, sen pitäisi syttyä uudelleen.

Useimmat puhelinten lähestymisanturit eivät ole tarkkoja etäisyysmittareita. Ne ilmoittavat usein vain lähellä- tai kaukana-tilan eivätkä tasaista senttimetriarvoa. Diagnostiikkasovelluksessa lukema voi siksi vaihtua suoraan 0 cm:n ja 5 cm:n välillä. Se on normaalia.

Jos lukema jumittuu, irrota kotelo ja näytönsuoja. Puhdista yläreuna tai anturin alue pehmeällä liinalla. Testaa uudelleen ennen kuin epäilet laitevikaa. Karkaistusta lasista valmistettu näytönsuoja on tässä hyvin tavallinen syyllinen.

## Ympäristön valoanturin testaaminen

Ota automaattinen kirkkaus käyttöön. Suuntaa taskulamppu näytön yläosan lähelle ja peitä sitten sama kohta kädellä. Kirkkauden pitäisi reagoida selvästi, vaikka Android voikin tasoittaa muutosta äkillisen hyppäyksen sijaan.

Valoanturin lukema ilmoitetaan yleensä lukseina. Pimeässä huoneessa arvo voi olla alle 50 luksia. Tavallisessa toimistossa se voi olla muutamia satoja lukseja. Suorassa auringonvalossa lukema voi ylittää 10 000 luksia. Tarkka numero ei ole yhtä tärkeä kuin se, muuttuuko arvo valaistuksen mukana järkevästi.

Jos automaattinen kirkkaus toimii oudosti mutta luksiarvo muuttuu oikein, anturi on todennäköisesti kunnossa. Syy löytyy useammin mukautuvan kirkkauden oppimisesta, näyttöasetuksista tai valmistajan ohjelmistosta.

## Magnetometrin ja kompassin testaaminen

Mene ulos tai siirry kauemmas metalliesineistä. Avaa Maps ja napauta sijaintinuolta. Jos sininen keila on hyvin leveä tai osoittaa väärään suuntaan, kalibroi kompassi.

Tee kahdeksikkoliike: pidä puhelinta edessäsi ja liikuta sitä suuren kyljellään olevan kahdeksikon muotoisesti samalla, kun käännät rannetta eri kulmiin. Jatka 15-20 sekuntia. Liike näyttää hieman hölmöltä, mutta auttaa yllättävän usein.

Jos kompassi näyttää edelleen väärin, irrota magneettiset lisävarusteet ja kokeile uudelleen. Autotelineet, lompakkokotelot, MagSafe-tyyliset renkaat, kannettavien tietokoneiden kannet ja metallipöydät voivat kaikki vääristää lukemia. Sisällä kompassi toimii usein huonommin kuin moni odottaa.

## Barometrin testaaminen

Kaikissa Android-puhelimissa ei ole barometria. Edullisista malleista se jää usein pois.

Jos puhelimessa on barometri, anturisovelluksen pitäisi näyttää ilmanpaine hPa- tai millibaariarvona. Vertaa lukemaa läheiseen sääasemaan. Täydellistä vastaavuutta ei kannata odottaa, sillä sääsovellukset näyttävät usein merenpinnan tasolle korjattua ilmanpainetta, kun taas puhelin mittaa paikallista painetta omalla korkeudellasi.

Täysin paikalleen jumittunut lukema voi tarkoittaa, että anturi on tukossa tai rikki. Ilma-aukko on hyvin pieni, joten taskunöyhdällä ja pölyllä on merkitystä.

## Raakadatan lukeminen ilman turhaa hienosäätöä

Raaka-arvoista on hyötyä, mutta täydellisyyttä ei kannata jahdata.

Kiihtyvyysanturi ilmoittaa kiihtyvyyden X-, Y- ja Z-akseleilla yksikössä m/s². Tasaisella alustalla olevan puhelimen pitäisi näyttää painovoiman vuoksi noin 9,8 m/s² yhdellä akselilla ja lähellä nollaa olevia arvoja muilla akseleilla laitteen asennosta riippuen.

Gyroskooppi ilmoittaa pyörimisnopeuden radiaaneina sekunnissa. Kun puhelin on paikallaan, arvojen pitäisi pysyä lähellä nollaa. Pieni liike ja anturikohina ovat normaaleja.

Magnetometri ilmoittaa magneettikentän voimakkuuden mikrotesloina. Maan magneettikenttä on sijainnista riippuen usein noin 25-65 mikroteslaa. Selvästi tämän alueen ulkopuolelle menevät arvot johtuvat yleensä häiriöstä.

Valoanturi ilmoittaa luksiarvon. Tärkeintä on järkevä muutos, ei laboratoriotason tarkkuus.

## Kokeile näitä ennen huoltoa

Käynnistä puhelin ensin uudelleen. Tylsä neuvo, mutta kokeilemisen arvoinen.

Irrota sitten kotelo ja näytönsuoja, puhdista yläosan anturialue, poista virransäästö käytöstä ja tarkista, onko kehittäjäasetusten Sensors off -ruutu aktiivinen. Jos ongelma koskee vain yhtä sovellusta, tarkista sen käyttöoikeudet ja akkua koskevat rajoitukset.

Kalibroi kompassi uudelleen ja siirry kauemmas magneeteista. Testaa automaattista kiertoa useassa sovelluksessa, sillä osa sovelluksista lukitsee näytön suunnan. Testaa lähestymisanturi oikean puhelun aikana ilman näytönsuojaa.

Jos anturi lakkasi toimimasta heti käyttöjärjestelmäpäivityksen jälkeen, asenna odottavat järjestelmäpäivitykset ja Google Play -järjestelmäpäivitykset ja testaa uudelleen. Jos käytössä on beetaversio, yksittäistä viallista anturitoimintoa ei kannata pitää varmana laitevikana ennen testaamista vakaalla ohjelmistolla.

runcheckin kaltainen diagnostiikkasovellus auttaa, kun oireet menevät päällekkäin. Akun kuormitus, kuumeneminen ja verkko-ongelmat voivat saada puhelimen tuntumaan rikkinäiseltä, vaikka anturi olisi vain yksi osa kokonaisuutta.

## Milloin vika on todennäköisesti laitteistossa

Epäile laitevikaa, jos sama anturi ei toimi missään sovelluksessa, epäonnistuu valmistajan diagnostiikkatestissä, ei korjaannu vikasietotilassa ja on edelleen rikki tehdasasetusten palautuksen jälkeen.

Puhelimen yksittäiset anturit ovat yleensä pieniä pintaliitoskomponentteja tai osa suurempaa moduulia. Huoltoliikkeet vaihtavat harvoin vain yhtä anturipiiriä. Käytännössä korjaus voi tarkoittaa näyttömoduulin, kameramoduulin, alapiirilevyn tai emolevyn osan vaihtamista sen mukaan, missä anturi sijaitsee.

Jos puhelin on pudonnut, vääntynyt tai kastunut, kerro siitä huoltoarviota pyytäessäsi. Se vaikuttaa siihen, mitä teknikon kannattaa tutkia.
