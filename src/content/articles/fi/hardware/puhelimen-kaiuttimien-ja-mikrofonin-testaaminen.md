---
title: "Puhelimen kaiuttimien ja mikrofonin testaaminen"
description: "Useimmat puhelimen ääniongelmat eivät johdu kuolleesta kaiuttimesta tai mikrofonista. Syynä on useammin nukka, Bluetooth-äänireititys, sovelluksen käyttöoikeus, huonosti istuva kotelo, kaiutinritilään jäänyt vesi tai verkkopuhelu, joka kuulostaa laitevialta."
listSummary: "Useimmat puhelimen ääniongelmat eivät johdu kuolleesta kaiuttimesta tai mikrofonista."
hub: "hardware"
sourceNumber: 107
order: 4
tags: ["laitteisto","testaus","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Se ei tee ongelmasta vähemmän ärsyttävää. Jos soittajat eivät kuule sinua tai kaiutin särisee jo puolella äänenvoimakkuudella, sinun pitää silti selvittää, mikä osa temppuilee.

## Tiedä, mitä ääniosaa testaat

Useimmissa Android-puhelimissa on useampi kuin yksi kaiutin ja mikrofoni.

Puhelukuuloke sijaitsee puhelimen yläosassa ja toistaa tavalliset puhelut. Pääkaiutin on yleensä alareunassa ja hoitaa kaiutinpuhelut, median, hälytykset ja soittoäänet. Moni puhelin käyttää molempia stereotoistoon.

Päämikrofoni on tavallisesti USB-C-portin lähellä. Yläreunan toinen mikrofoni auttaa puhelujen melunvaimennuksessa. Joissakin malleissa on kolmas mikrofoni videokuvaukseen tai kohdistettuun äänen tallennukseen.

Nämä osat voivat vioittua erikseen. Puhelin voi kuulostaa kaiutinpuhelulla normaalilta mutta puhelukuulokkeesta surkealta. Äänimuistio voi tallentua selkeästi, vaikka puheluissa ääni olisi huono, koska puhelujen äänenkäsittely, verkon laatu tai toinen mikrofoni vaikuttavat tulokseen.

## Pääkaiuttimen testaaminen

Avaa puhelimen ääni- ja värinäasetukset ja toista soittoääni. Nosta median äänenvoimakkuutta äänen toiston aikana.

Kuuntele rätinää, surinaa, säröä ja äkillisiä äänenvoimakkuuden pudotuksia. Toista sen jälkeen tuttua musiikkia tai video. Yksinkertainen soittoääni ei paljasta kunnolla basson säröä tai korkeiden taajuuksien karheutta.

Jos puhelimessa on stereokaiuttimet, peitä yksi kaiutin kerrallaan sormella. Tarkoitus ei ole löytää täydellistä tasapainoa. Yläosan kuulokekaiutin on usein hiljaisempi kuin alakaiutin. Etsi sen sijaan tilannetta, jossa toinen puoli on mykkä, pahasti säröytynyt tai paljon tavallista heikompi.

Älä testaa vain täydellä äänenvoimakkuudella. Vaurioitunut kaiutin voi säröytyä keskitasolla, kun taas tukkeutunut ritilä saattaa kuulostaa kovalla siedettävältä mutta tavallisella kuunteluvoimakkuudella tunkkaiselta.

## Puhelukuulokkeen testaaminen

Soita tavallinen puhelu ja pidä puhelinta korvalla. Nosta puhelun äänenvoimakkuutta puhelun aikana, ei ennen sitä. Android käsittelee median, soittoäänen ja puhelun äänenvoimakkuutta erikseen.

Kuuntele hiljaista ääntä, rätinää, katkeilua tai muutosta, joka syntyy, kun painat kevyesti puhelimen yläosaa. Viimeinen oire voi viitata pudotuksen jälkeen löystyneeseen kuulokeliitäntään.

Jos et halua häiritä ketään, soita vastaajaan tai toiseen omaan numeroosi. Olennaista on, että puhelin käyttää yläosan puhelukuuloketta eikä alakaiutinta.

## Mikrofonin testaaminen tallenteella

Avaa puhelimen oma Recorder-, Voice Recorder- tai Sound Recorder -sovellus tai muu luotettava tallennussovellus. Tallenna 10-15 sekuntia normaalilla puheäänellä noin käsivarren mitan päästä.

Kuuntele tallenne. Äänen pitäisi olla selkeä, tasainen ja riittävän voimakas ilman suhinaa, surinaa tai vaikutelmaa siitä, että puhuisit peiton läpi.

Käännä puhelin seuraavaksi toisin päin ja tee uusi tallenne puhumalla yläreunaa kohti. Tämä ei aina eristä toista mikrofonia, koska tallennussovellukset valitsevat mikrofonin eri tavoin, mutta testi voi paljastaa tukkeutuneen aukon tai suuren eron mikrofonien välillä.

Jos tallenne on selkeä mutta soittajien mukaan äänesi kuulostaa robottimaiselta, älä vie puhelinta heti mikrofonikorjaukseen. Robottimainen puheluääni johtuu yleensä verkon viiveestä, pakettihäviöstä, Wi-Fi-puhelujen ongelmasta tai operaattorin äänenkäsittelystä.

## Mikrofonin testaaminen puheluissa

Soita henkilölle, joka antaa suoraa palautetta. Kysy kolme tarkkaa asiaa:

- Kuuluuko ääneni selkeänä vai tunkkaisena?
- Kuuluuko taustalla kohinaa, surinaa tai tuulen kaltaista ääntä?
- Katkeaako ääneni?

Vaihda kaiutinpuheluun ja kysy uudelleen. Kaiutinpuhelu käyttää mikrofoneja ja melunvaimennusta eri tavalla. Jos tavallinen puhelu toimii huonosti mutta kaiutinpuhelu hyvin, ongelma voi olla päämikrofonin signaalitiessä, tavallisen puhelutilan käsittelyssä tai melunvaimennuksessa.

Testaa sekä Wi-Fi-puheluilla että mobiiliverkossa, jos molemmat ovat käytettävissä. Jos puhelun laatu muuttuu niiden välillä selvästi mutta äänitallenteet pysyvät puhtaina, mikrofoni ei todennäköisesti ole pääsyyllinen.

## Sisäänrakennettujen diagnostiikkatyökalujen käyttäminen

Samsung Galaxy -puhelimissa on kaksi hyvää vaihtoehtoa. Samsung Members on turvallisempi: avaa sovellus ja valitse Pyydä apua > Näytä testit. Suorita kaiutin- ja mikrofonitestit tai koko testisarja. Monissa Galaxy-puhelimissa toimii myös `*#0*#`, jonka valikossa on Speaker- ja Receiver-testit.

Google Pixel -puhelimissa Pixel Diagnostics avautuu tuetuissa laitteissa näppäilemällä `*#*#7287#*#*`, kun puhelin on yhteydessä internetiin. Tämä on nykyinen Pixelin diagnostiikkareitti, ei vanha signaalitietoihin liittyvä koodi, jota näkee yhä kopioituna verkossa.

Motorola-puhelimissa on yleensä Device Help. Avaa laitteen diagnostiikka, siirry laitteistotesteihin ja valitse mikrofoni tai sopiva kaiutintesti.

Xiaomi-, Redmi- ja POCO-puhelimissa CIT-valikko avautuu usein koodilla `*#*#6484#*#*`. Valikossa on erillisiä testejä kaiuttimelle, puhelukuulokkeelle ja mikrofonille.

Jos valmistajan testi menee läpi mutta yksi sovellus ei saa mikrofonista ääntä, tarkista ensin sovelluksen käyttöoikeus.

## Tavallisten muiden syiden sulkeminen pois

Aloita fyysisistä asioista. Irrota kotelo ja testaa uudelleen. Osa koteloista ei osu mikrofoniaukkojen kohdalle, erityisesti halvat suojakotelot ja yleismalliset kotelot.

Puhdista aukot kuivalla ja pehmeäharjaksisella harjalla. Harjaa ritilän poikki sen sijaan, että työntäisit jotakin aukkoon. Kevyt ilmavirta voi auttaa, mutta älä puhalla paineilmaa suoraan kaiutin- tai mikrofoniaukkoon.

Katkaise Bluetooth-yhteys. Puhelimet reitittävät ääntä mielellään kuulokkeisiin, kelloihin, autoihin ja kaiuttimiin, joiden yhteyden olet ehkä unohtanut. Poista Bluetooth kokonaan käytöstä yhden testin ajaksi.

Avaa sovelluksen tiedot Asetuksista ja tarkista mikrofonin käyttöoikeus. Tarkista myös pika-asetusten mikrofonin yksityisyyskytkin, jos puhelimessa on sellainen. Jos kehittäjäasetusten Sensors off -ruutu on käytössä, poista se käytöstä, sillä se voi estää mikrofonin ja anturien käytön.

Tarkista Älä häiritse -tila ja äänenvoimakkuus, mutta säädä oikeaa äänenvoimakkuutta. Puhelun aikana äänenvoimakkuuspainike säätää puheluääntä. Median toiston aikana se säätää median ääntä.

## Entä vesi?

Kaiutinkammioon jäänyt vesi tekee äänestä tunkkaisen, hiljaisen tai surisevan. Anna puhelimen kuivua ilmavassa paikassa. Älä käytä lämpöä, älä laita puhelinta riisiin äläkä työnnä teräviä työkaluja ritilään.

Matalia taajuuksia toistavat sovellukset voivat joskus auttaa siirtämään vettä pois kaiuttimesta, mutta käytä niitä varovasti ja kohtuullisella äänenvoimakkuudella. Ne eivät ole taikakeino eivätkä korjaa korroosiota tai vaurioitunutta mikrofonia.

Jos puhelin kastui suolavedessä, allasvedessä tai sokeripitoisessa nesteessä, pelkkä kuivuminen ei ehkä riitä. Nesteet jättävät jäämiä.

## Milloin korjaus on järkevä

Korjausta kannattaa harkita, kun ongelma näkyy useassa sovelluksessa, jatkuu ilman koteloa ja Bluetooth-yhteyttä, epäonnistuu valmistajan diagnostiikassa eikä poistu uudelleenkäynnistyksellä tai vikasietotilassa.

Kaiuttimen vaihto on usein yksinkertaisempi kuin näytön korjaus. Mikrofonin korjaus voi olla työläämpi, koska päämikrofoni voi kuulua latausportin lattakaapeliin tai alapiirilevyyn. Tarkka hinta riippuu paljon mallista, vedenkestävyyden rakenteesta, osien saatavuudesta ja siitä, onko puhelin avattu aiemmin.

Jos puhelimessa voi olla myyjän virhevastuun tai takuun piiriin kuuluva vika, ota yhteyttä myyjään ennen kuin viet sen riippumattomaan huoltoliikkeeseen. Neste- ja iskuvauriot voivat vaikuttaa korvattavuuteen, mutta tavallinen äänilaitteiston vika kannattaa ilmoittaa.

## Nopeat vastaukset

### Miksi kaiutinpuhelu toimii mutta tavallinen puhelu kuulostaa huonolta?

Pääkaiutin ja puhelukuuloke ovat eri osia. Tavallinen puhelutila käyttää myös erilaista mikrofoninkäsittelyä. Testaa kuuloke ja puhelumikrofoni erikseen.

### Voiko ohjelmistopäivitys korjata ääniongelman?

Kyllä, jos ongelma liittyy äänen reititykseen, ajurin toimintaan, käyttöoikeuksiin tai puhelun käsittelyyn. Ei, jos kaiutinkartio on revennyt, mikrofoniaukko syöpynyt tai liitin löysällä.

### Miksi ääneni kuulostaa tunkkaiselta vain yhdessä sovelluksessa?

Syy on yleensä sovelluksen käyttöoikeudessa, sovelluksen kohinanvaimennuksessa, Bluetooth-reitityksessä tai siinä, että sovellus valitsee väärän mikrofonin. Testaa puhelimen omalla tallennussovelluksella ja tavallisella puhelulla.

### Miten testaan melunvaimennusmikrofonia?

Soita puhelu kohtalaisen meluisassa paikassa ja vertaa tavallista puhelutilaa kaiutinpuheluun. Jos toinen osapuoli kuulee selvästi odotettua enemmän taustamelua, toinen mikrofoni tai melunvaimennuksen signaalitie voi olla osallisena. Valmistajan diagnostiikka kertoo enemmän kuin yksi tavallinen puhelu.
