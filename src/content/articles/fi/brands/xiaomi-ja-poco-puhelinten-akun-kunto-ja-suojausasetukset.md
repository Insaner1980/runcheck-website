---
title: "Xiaomi- ja POCO-puhelinten akun kunto- ja suojausasetukset"
description: "Xiaomi-puhelinten akun kuntotiedot ovat edelleen epäyhtenäisiä. Se on rehellinen vastaus. Uusi Xiaomi 15 osaa näyttää hyödyllisiä akun suojaustoimintoja, joissakin HyperOS-versioissa näkyy lataussyklien määrä tai akun kuntotietoja, ja monet Redmi- ja POCO-puhelimet eivät edelleenkään kerro juuri muuta kuin lämpötilan ja latauksen perustilan."
listSummary: "Xiaomi-puhelinten akun kuntotiedot ovat edelleen epäyhtenäisiä."
hub: "brands"
sourceNumber: 155
order: 3
tags: ["akku","kunto","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Android 17 ei ratkaise tätä itsestään. Google julkaisi Android 17:n ensin useimmille tuetuille Pixel-puhelimille, kun taas Xiaomi-, Redmi- ja POCO-laitteet saavat Android 17:ään perustuvia HyperOS-versioita myöhemmin. Silloinkin Xiaomi päättää malli- ja aluekohtaisesti, mitä Asetuksissa näytetään.

Älä siis lue tätä yhtenä yleispätevänä Xiaomi-valikkopolkuna. Lue se tarkistuslistana.

## Tarkista ensin Battery protection

Nykyisissä HyperOS-versioissa kannattaa aloittaa tästä:

Settings > Battery > Battery protection

Puhelimesta ja laiteohjelmistosta riippuen sivulla voi olla akun suojauksen asetuksia, Smart charging, lämpötila, päivittäisiä lataustietoja ja joskus myös akun kunto- tai lataussyklitietoja.

Tuetuissa malleissa akun kuntoprosentti tai lataussyklien määrä voi näkyä Battery protection-, Battery health- tai samantapaisesti nimetyllä sivulla. Xiaomi ei tarjoa tietoja yhdenmukaisesti koko mallistossaan. Lippulaivamallit ja uudemmat suorituskykypuhelimet saavat yleensä paremmat tiedot ensin. Edullisista Redmi-malleista ne usein puuttuvat.

Jos sivua ei näy, HyperOS:n ja Xiaomin järjestelmäsovellusten päivittäminen voi auttaa, mutta ihmeitä ei kannata odottaa. Xiaomi voi yksinkertaisesti jättää ominaisuuden pois kyseisestä mallista.

## Smart charging ja latauksen pysähtyminen 80 prosenttiin

Xiaomi kuvaa virallisilla tukisivuillaan Smart charging -toimintoa akun käyttöikää suojaavaksi ominaisuudeksi. Puhelin oppii lataustapasi, pysäyttää latauksen sopivissa tilanteissa 80 prosenttiin ja jatkaa myöhemmin hitaasti 100 prosenttiin. Näin akku ei joudu olemaan tuntikausia täyteen ladattuna.

Valikkopolku on:

Settings > Battery > Battery protection > Smart charging

Xiaomi kertoo myös Xiaomi 15:n tukiohjeissa, että Battery protection tai Smart charging on todennäköisesti käytössä, jos puhelin latautuu vain 80 prosenttiin tai ei lataudu täyteen. Se on odotettua toimintaa, ei välttämättä vika.

Tämä on Xiaomin versio mukautuvasta latauksesta. Siitä on eniten hyötyä, jos lataat puhelinta yön yli tai pidät sitä pitkiä aikoja kytkettynä virtalähteeseen. Jos aikataulusi vaihtelee paljon, toiminta voi vaikuttaa epäjohdonmukaiselta. Ongelma ei ole vain Xiaomissa. Kaikki mukautuvat latausjärjestelmät yrittävät päätellä tapoja aiemmasta käytöstä.

Joissakin malleissa on myös tiukempi Battery protection -tila, joka pysäyttää latauksen 80 prosenttiin. Sanamuoto vaihtelee ohjelmistoversion mukaan. Jos puhelin pysähtyy jatkuvasti 80 prosenttiin ja tarvitset täyden latauksen, tarkista Battery protection ennen kuin syytät laturia.

## MIUI:n akun kuntotietoihin ei voinut luottaa täysin

Vanhemmissa MIUI-versioissa akun kuntotiedot löytyivät usein Security-sovelluksesta eivätkä Asetuksista:

Security > Battery > Battery Health

Joissakin puhelimissa sivu näytti lataussyklien määrän, epämääräisen tilaluokituksen tai akun suorituskykyä koskevan viestin. Toisissa vaihtoehto katosi päivityksen jälkeen. Se oli tavallista MIUI-sekavuutta.

Jos käytössä on yhä MIUI 12, 13 tai 14, päivitä ensin Security-sovellus. Avaa Security, napauta asetusratasta, siirry About-kohtaan ja tarkista päivitykset. Jos Battery Health ei vieläkään näy, ominaisuus ei todennäköisesti ole saatavilla kyseisessä laitteessa tai ROM-versiossa.

Vanhoihin MIUI-luokituksiin, kuten Good, Normal, Bad tai Awesome, ei kannata luottaa liikaa. Ne voivat toimia varoituksena, mutta ne eivät kerro akun todellista jäljellä olevaa kapasiteettia prosentteina.

## Xiaomin piilotettu akkukoodi

Yleisimmin jaettu koodi on:

`*#*#6485#*#*`

Monissa Xiaomi-, Redmi- ja POCO-puhelimissa se avaa akun diagnostiikkanäkymän. Näkyviin voi tulla esimerkiksi lataustila, jännite, virta, lataussykleihin liittyviä kenttiä sekä tehdas- tai akun varaustilan mittauspiirin tietoja.

Vaikeinta on tietojen tulkinta. Xiaomi ei julkaise selkeää yleisohjetta, joka yhdistäisi jokaisen kentän helposti ymmärrettäväksi akun kuntoluvuksi. Joissakin verkko-oppaissa esitetään MF-kentille tarkkoja laskukaavoja, mutta kentät voivat vaihdella mallin ja ohjelmistoversion mukaan. Xiaomi 13:ssa oikealta näyttävä kaava voi olla väärä Redmi Note -puhelimessa.

Käytä koodia raakadatan diagnostiikkanäkymänä, älä lopullisena vastauksena. Jos puhelimessa on sisäänrakennettu Battery health -sivu, luota siihen enemmän kuin itse tulkittuun piilokenttään.

## Latausnopeus ja kuumuus

Xiaomi- ja POCO-puhelimet tunnetaan tehokkaasta pikalatauksesta. 67 W:n, 90 W:n, 120 W:n ja sitä suurempi latausteho on kätevä. Se tuottaa myös lämpöä, ja pitkäaikaisen akun kulumisen kannalta kuumuus on olennaisin asia.

Satunnainen pikalataus ei ole ongelma. Jokaöinen pikalataus tyynyn alla tai kuumassa huoneessa on huono ajatus.

Useimmissa Xiaomi-puhelimissa ei ole yksinkertaista manuaalista latausnopeuden rajoitinta. Järjestelmä hidastaa latausta automaattisesti akun lämmetessä, mutta se ei ole sama asia kuin mahdollisuus valita rauhallinen 20 W:n raja.

Käytännölliset tavat toimivat paremmin kuin kikkailu:

- Käytä Smart charging -toimintoa yön yli ladattaessa.
- Vältä pikalatausta, jos puhelin on jo kuuma.
- Älä pelaa latauksen aikana, jos laite lämpenee.
- Poista suojakuori erittäin nopean latauksen ajaksi, jos lämpötila nousee.
- Käytä hitaampaa latausta silloin, kun nopeudella ei ole merkitystä.

Puhelinta ei tarvitse varjella joka päivä. Jos kuitenkin ostit 120 W:n latausta tukevan POCO-puhelimen ja aiot käyttää sitä neljä vuotta, lämmön hallinnalla on merkitystä.

## HyperOS:n akkutilat

Akkutilat ovat eri asia kuin akun kunto. Ne muuttavat sitä, miten puhelin käyttää virtaa juuri nyt, eivät sitä, kuinka paljon akun alkuperäisestä kapasiteetista on jäljellä.

Settings > Battery sisältää yleensä tiloja, joiden englanninkieliset nimet ovat Balanced, Battery Saver, Ultra Battery Saver ja joissakin malleissa Performance Mode. Tarkat nimet vaihtelevat.

Balanced on oletustila ja yleensä oikea valinta. Battery Saver rajoittaa taustatoimintaa, synkronointia, virkistystaajuutta ja joitakin visuaalisia tehosteita. Ultra Battery Saver on hätätila puheluille, viesteille ja muutamalle valitulle sovellukselle. Performance Mode pitää puhelimen nopeampana peleissä ja raskaissa sovelluksissa, mutta kuluttaa enemmän akkua ja lisää lämpöä.

Jos akku alkoi tyhjentyä selvästi nopeammin Performance Moden käyttöönoton jälkeen, kyse ei ole akun heikkenemisestä. Puhelin tekee juuri sen, mitä siltä pyysit.

## Mitä sovellukset voivat lukea Xiaomi-puhelimista

Androidin akkurajapintojen kautta Xiaomi-puhelimet ilmoittavat yleensä varaustason, lataustilan, kytketyn virtalähteen tyypin, jännitteen, lämpötilan, järjestelmän kuntotilan ja joskus virran.

Virtalukema on hankalin. Jotkin mallit ilmoittavat käyttökelpoisia arvoja. Toiset palauttavat nollan, vanhentuneita arvoja tai lukuja, jotka eivät vastaa todellista kulutusta. Xiaomin lippulaivamallit ja POCO F -sarjan puhelimet ovat yleensä edullisia Redmi-malleja parempia, mutta poikkeuksia on.

Lataussyklien ja akun kuntoarvion raportointi paranee Androidissa ja HyperOS:ssa, mutta Xiaomin tuki ei ole yhdenmukaista. Androidissa on järjestelmätason rajapintoja tarkemmille akkutiedoille, mutta laitteiston, akun varaustilan mittauspiirin, laiteohjelmiston, käyttöoikeuksien ja valmistajan käyttöliittymän on kaikkien toimittava yhdessä.

runcheck liittää lukemaan luottamustason. Jos Xiaomi-puhelin ilmoittaa käyttökelpoista virtadataa, runcheck voi näyttää kulutuksen ja latauskäyttäytymisen suuremmalla varmuudella. Jos lukemat puuttuvat tai vaikuttavat epäilyttäviltä, sovellus merkitsee ne arvioiduiksi tai ei saatavilla oleviksi sen sijaan, että esittäisi heikon datan tarkkana lukuna.

## Akun kulutus HyperOS-päivityksen jälkeen

Suuri päivitys voi heikentää akunkestoa pariksi päiväksi. Android indeksoi tiedostoja uudelleen, kääntää sovelluksia, päivittää välimuisteja ja antaa sovellusten käynnistää taustatyönsä uudelleen. Puhelin voi käydä tavallista lämpimämpänä tämän ajan.

Odota 48-72 tuntia ennen johtopäätöksiä. Neuvo on tylsä, mutta yleensä oikea.

Jos kulutus on edelleen suurta kolmen päivän jälkeen, tarkista sovelluskohtainen akunkäyttö. Etsi sovellus, joka käyttää poikkeuksellisen paljon virtaa taustalla. Viestisovellukset, sosiaalisen median sovellukset, VPN-palvelut, pilveen tehtävät kuvavarmistukset ja puettavat laitteet voivat kaikki alkaa toimia levottomasti suuren päivityksen jälkeen.

Tarkista myös, ovatko käyttöoikeudet tai taustarajoitukset muuttuneet. Jos sovelluksen taustakäytön rajoitus poistui päivityksessä, se voi kuluttaa akkua huomaamatta eikä näytä heti ilmeiseltä syylliseltä.

## Milloin lukuun voi luottaa

Uuden mallin sisäänrakennettu HyperOS-akun kuntoprosentti on hyödyllinen, mutta yhden prosenttiyksikön muutoksesta ei kannata hätääntyä. Arviot voivat liikkua ylös ja alas päivityksen tai kalibroinnin jälkeen. Xiaomi-käyttäjät ovat kertoneet kunto- ja lataussyklilukemien muuttuneen korjauspäivitysten jälkeen, mikä osoittaa, ettei ohjelmiston laskentamalli ole täydellinen.

Etsi toistuvia merkkejä:

- Kapasiteetti pienenee kuukausi kuukaudelta.
- Käyttöaika on selvästi aiempaa lyhyempi.
- Puhelin sammuu ennen kuin akku näyttää tyhjää.
- Puhelin kuumenee latauksen aikana poikkeuksellisesti.
- Akun prosenttilukema putoaa jyrkästi kuormituksessa.

Yksi outo lukema on kohinaa. Toistuva ilmiö on näyttöä.

## Yksinkertainen päätösmalli

Aloita Battery protection -asetuksesta. Jos Xiaomi- tai POCO-puhelin pysähtyy 80 prosenttiin, oleta ensin, että Battery protection tai Smart charging on käytössä. Xiaomi dokumentoi tämän käyttäytymisen Xiaomi 15:ssä, ja sama periaate näkyy uudemmissa HyperOS-versioissa.

Jos puhelin näyttää akun kuntoprosentin, seuraa suuntaa viikkojen ajan. Jos se ei näytä sitä, arvioi tilannetta lämpötilan, käyttöajan, latauskäyttäytymisen ja muutaman sovelluspohjaisen arvion avulla. Se ei ole yhtä tyydyttävää, mutta on rehellisempää kuin teeskennellä kaikkien Xiaomi-laitteiden tarjoavan samat tiedot.

Pikalatausta voi käyttää silloin, kun sitä tarvitsee. Kuumuus on asia, jota kannattaa hallita. Käytä 67 W:n, 120 W:n tai sitä nopeampaa latausta, kun nopeudella on merkitystä, ja Smart charging -toimintoa tai hitaampaa laturia, kun puhelin on vain latauksessa yön yli.

Android 17 ei ratkaise tätä yksinään. Google julkaisi sen ensin tuetuille Pixel-laitteille, ja Xiaomin Android 17:ään perustuvan HyperOS-jakelun ratkaisut määräävät, mitä kukin Xiaomi-, Redmi- ja POCO-malli lopulta näyttää.
