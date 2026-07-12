---
title: "Androidin Doze-tila selitettynä: näin puhelin säästää akkua levossa"
description: "Androidin Doze-tila vähentää valmiustilan virrankulutusta lykkäämällä taustatyötä, kun puhelin on käyttämättä. Tässä kerrotaan, mitä se rajoittaa, miksi ilmoitukset voivat myöhästyä ja milloin sovellus kannattaa vapauttaa optimoinnista."
listSummary: "Androidin Doze-tila vähentää valmiustilan virrankulutusta lykkäämällä taustatyötä, kun puhelin on käyttämättä."
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Virrankulutus"
tags: ["akku","optimointi","android","vinkit","suorituskyky"]
locale: "fi"
draft: false
---
Miksi kymmenen ilmoitusta saapui samalla hetkellä, kun nostit puhelimen käteesi? Usein vastaus on Doze.

Doze on Androidin sisäänrakennettu lepotilajärjestelmä. Sitä ei tarvitse ottaa käyttöön, eikä useimpien tarvitse koskaan nähdä erillistä Doze-näkymää Asetuksissa. Se toimii taustalla, kun puhelin ei ole latauksessa, näyttö on sammutettu ja Android päättää, ettei jokaisen sovelluksen tarvitse saada toimia milloin tahansa.

Android 17 on nyt nykyinen alustaversio useimmissa tuetuissa Pixel-laitteissa, ja muut valmistajat seuraavat omien aikataulujensa mukaan. Dozen perusneuvot eivät silti muutu: taustaherätyksiä on vähemmän, valmiusaika pitenee ja kiireettömät ilmoitukset voivat joskus myöhästyä.

## Mitä Doze tekee

Kun Doze on aktiivinen, Android rajoittaa kalliita toimintoja. Sovellukset menettävät tavallisen verkkoyhteyden. Tavalliset hälytykset siirtyvät myöhemmäksi. Ajastetut tehtävät ja synkronoinnit odottavat. Wake lockit ohitetaan syvän lepotilan rajoitetuissa vaiheissa. Myös Wi-Fi-haut pysähtyvät.

Laite ei jäädy pysyvästi. Android avaa lyhyitä ylläpitoikkunoita, joiden aikana lykätyt työt voidaan suorittaa erissä. Sovellukset synkronoivat, jonossa olevat tehtävät käynnistyvät ja normaalin prioriteetin ilmoitukset voivat saapua. Sen jälkeen Android palauttaa laitteen lepotilaan.

Siinä koko idea. Taustatyön niputtaminen kuluttaa paljon vähemmän virtaa kuin se, että jokainen sovellus herättää CPU:n ja radion omalla aikataulullaan.

## Milloin Doze käynnistyy

Doze tuli ensimmäisen kerran Android 6.0:aan (API 23). Alkuperäinen versio edellytti, että laite ei ollut latauksessa, pysyi paikallaan ja näyttö oli sammutettuna jonkin aikaa. Android 7.0 lisäsi niin sanotun **Doze on the go** -toiminnan, joka asettaa kevyempiä rajoituksia, kun laite ei ole latauksessa ja näyttö on ollut sammutettuna, vaikka puhelin liikkuisi taskussa.

Käytännössä nykyaikainen Android-puhelin saa yleensä kahdentasoista apua. Kevyemmät leporajoitukset toimivat puhelinta kannettaessa, ja syvemmät rajoitukset alkavat, kun laite on ollut jonkin aikaa paikallaan.

Valmistajan ohjelmisto tekee asiasta sekavamman. Pixelit käyttäytyvät yleensä lähellä Googlen vertailutoteutusta. Samsung, Xiaomi, OnePlus, Oppo ja muut lisäävät päälle omia akunhallintakerroksiaan. Joskus ne auttavat. Joskus ne ovat liian aggressiivisia ja rikkovat ilmoituksia.

## Mitkä asiat viivästyvät

Näkyvin viive koskee taustasynkronointia. Sähköposti ei ehkä tarkistu yhtä usein. Muistiinpanosovellus voi synkronoida myöhemmin. Sääwidget voi päivittyä vasta seuraavassa ylläpitoikkunassa.

Myös kehittäjän ajastama työ muuttuu. `JobScheduler`- ja `WorkManager`-tehtävät yleensä odottavat Dozen aikana. Tavalliset `AlarmManager`-hälytykset siirtyvät myöhemmäksi, mutta käyttäjälle tarkoitetut herätyskellohälytykset käynnistyvät silti ajallaan.

Puheluiden ja tekstiviestien ei ole tarkoitus odottaa ylläpitoikkunaa. Korkean prioriteetin Firebase Cloud Messaging (FCM) -viestit voivat myös herättää sovelluksen hetkeksi, jotta se näyttää kiireellisen ilmoituksen. Siksi WhatsAppin, Signalin, Telegramin ja vastaavien sovellusten ilmoitukset tuntuvat yleensä välittömiltä, jos sovellus ja valmistajan akunhallinta ovat määritetty oikein.

Normaalin prioriteetin push-viestit ovat eri asia. Jos sovellus käyttää niitä taustapäivityksiin tai kiireettömiin ilmoituksiin, Android voi pitää niitä jonossa seuraavaan ylläpitoikkunaan asti.

## Miksi ilmoitukset saapuvat myöhässä

Myöhästynyt ilmoitus ei aina ole virhe. Se on usein Dozen tarkoituksellinen kompromissi.

Ruokalähettisovelluksen tarjous, sometykkäys tai uutisilmoitus voi odottaa muutaman minuutin, jos puhelin saa sillä välin nukkua. Työviestin, hälytyksen, saapuvan puhelun tai turvallisuusilmoituksen ei pitäisi odottaa. Hyvä sovellus käyttää oikeaa prioriteettia oikeanlaiselle viestille. Huono sovellus joko vaatii liian korkeaa prioriteettia tai ei käytä FCM:ää oikein vaan tarkistaa palvelinta taustalla.

Ärsyttävintä on, ettei käyttäjä saa selkeää selitystä. Viestit vain tulevat myöhässä, ja syy pitää päätellä jälkikäteen.

Aloita sovelluksen omista ilmoitusasetuksista. Tarkista sitten sovelluksen akunhallinta. Pixelissä polku on yleensä **Asetukset > Sovellukset > [sovelluksen nimi] > Sovelluksen akunkäyttö**. Samsungilla tarkista **Asetukset > Akku > Taustakäytön rajoitukset** ja varmista, ettei sovellus ole kohdassa **Lepotilassa olevat sovellukset** tai **Syvässä lepotilassa olevat sovellukset**.

## Sovelluksen vapauttaminen Dozesta

Androidissa yksittäisen sovelluksen voi vapauttaa akun optimoinnista. Nykyisessä Pixel-käyttöliittymässä sovelluskohtainen hallinta löytyy yleensä kohdasta **Asetukset > Sovellukset > [sovelluksen nimi] > Sovelluksen akunkäyttö > Salli käyttö taustalla**. Valitse käyttöliittymän vastine vaihtoehdolle **Unrestricted** tai **Don't optimize**, jos puhelin käyttää näitä nimityksiä. Vanhemmissa Android-versioissa vastaava näkymä voi löytyä kohdasta **Settings > Apps > Special app access > Battery optimization**.

Valitse tarkasti. Jokainen vapautus antaa sovellukselle enemmän tilaa toimia taustalla, ja liian moni poikkeus heikentää Dozen hyötyä. Viestisovellukset, VPN:t, lääketieteelliset tai turvallisuuteen liittyvät sovellukset ja jotkin työsovellukset voivat olla järkeviä poikkeuksia. Ostossovellus ei yleensä ole.

Google Playn käytännöt rajoittavat myös sitä, milloin sovellus saa pyytää käyttäjää vapauttamaan sen Androidin virranhallinnasta. Yksinkertaistettuna poikkeus on tarkoitettu sovelluksille, joiden ydintoiminto rikkoutuu ilman sitä.

## Mistä tietää, auttaako Doze

Helpoin käyttäjätason testi on yön aikainen kulutus. Lataa puhelin, irrota se laturista ennen nukkumaanmenoa, jätä näyttö sammuksiin ja tarkista pudotus aamulla. Muutaman prosentin menetys yön aikana on normaalia. Jos akku menettää näytön ollessa sammutettuna 15 % tai 25 %, jokin herättää puhelinta liian usein, signaali on heikko tai akku on kulunut.

Akkutilastot eivät välttämättä sano suoraan, että Doze epäonnistui. Ne voivat näyttää Android Systemin, Google Play services -merkinnän, mobiiliverkon tai epämääräisen sovellusmerkinnän. Siksi näytön ollessa sammutettuna tapahtuva kulutusnopeus kertoo enemmän kuin yksittäinen akkukaavio. Jos puhelin menettää käyttämättä yli noin 1-2 % tunnissa, asia kannattaa selvittää.

Kehittäjät voivat testata Dozea ADB-komennolla `adb shell dumpsys deviceidle force-idle`, mutta se on testaustyökalu eikä tavallinen päivittäiseen käyttöön tarkoitettu asetus.

## Yleisiä kysymyksiä

Dozea ei voi poistaa käytöstä tavallisten Android-asetusten kautta, eikä sitä todennäköisesti kannatakaan yrittää. Se on yksi tärkeimmistä syistä siihen, että nykyaikainen Android-puhelin voi olla käyttämättä tuntikausia tyhjentymättä kokonaan.

Doze toimii myös puhelimen ollessa taskussa, mutta ei aina syvimmällä tasolla. Android 7.0 ja uudemmat käyttävät kevyempiä rajoituksia, kun näyttö on sammutettu ja laite liikkuu. Syvempi tila edellyttää edelleen pidempää käyttämättömyyttä.

Herätyskellosovelluksen hälytykset käynnistyvät edelleen. Sovellusten taustahälytykset siirtyvät ylläpitoikkunoihin, elleivät ne käytä rajapintoja, jotka on suunniteltu myös lepotilan aikana käynnistettäville hälytyksille.

Jos yhden laitteen valmiustilakulutus on suurempi kuin toisen, älä oleta heti Dozen olevan rikki. Signaalin voimakkuus, OEM-valmistajan akunhallinta, asennetut sovellukset, tilien synkronointi, widgetit ja akun ikä voivat saada kaksi Android-puhelinta käyttäytymään hyvin eri tavoin.

runcheck voi erottaa näytön käytön aikaisen kulutuksen näytön ollessa sammutettuna tapahtuvasta kulutuksesta ja näyttää, osuvatko lepojaksot yhteen verkon, lämpötilan tai taustatoiminnan kanssa. Se kertoo paljon enemmän kuin yhden yön prosenttipudotuksen arvaileminen.
