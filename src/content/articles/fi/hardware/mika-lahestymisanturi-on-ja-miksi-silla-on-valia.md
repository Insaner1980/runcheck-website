---
title: "Mikä lähestymisanturi on ja miksi sillä on väliä?"
description: "Miten Android-puhelimen lähestymisanturi toimii, miksi puhelut käyttäytyvät oudosti sen vikaantuessa ja miten tavallisia anturiongelmia voi testata ja korjata."
listSummary: "diagnostiikka, anturit ja android"
hub: "hardware"
sourceNumber: 117
order: 14
tags: ["diagnostiikka","anturit","android","laitteisto","opas"]
locale: "fi"
draft: false
---
Kesken puhelun näyttö herää kasvojasi vasten, ja poski avaa numeronäppäimistön. Tavallisesti kyse on siitä, että tämä pieni anturi epäonnistuu tehtävässä, jota kukaan ei huomaa ennen kuin se lakkaa toimimasta.

Anturi kertoo puhelimelle, milloin jokin on lähellä etulasia. Puhelun aikana tuo jokin on yleensä kasvosi. Android sammuttaa näytön ja estää kosketukset, jotta korvasi ei muutu kosketusnäytön lisälaitteeksi.

## Miten se toimii

Useimmissa Android-puhelimissa on kuulokekaiuttimen tai etukameran lähellä infrapunaa käyttävä lähestymisanturi. Se lähettää infrapunavaloa ja mittaa, kuinka paljon valoa heijastuu takaisin. Jos heijastusta tulee riittävästi, puhelin päättelee kohteen olevan lähellä. Kun heijastus heikkenee, tila muuttuu taas kaukana olevaksi.

Androidin oma anturidokumentaatio on hieman joustavampi kuin moni odottaa. Useimmat lähestymisanturit ilmoittavat etäisyyden senttimetreinä, mutta osa kertoo vain tilat lähellä ja kaukana. Tavalliseen puhelukäyttöön Android ei juuri muuta tarvitse.

Kaikissa puhelimissa ei ole vanhanmallista erillistä infrapunaosaa näkyvällä paikalla. Osa käyttää näytön alla olevaa anturia tai virtuaalista lähestymisen tunnistusta, jossa yhdistyvät muut anturit ja ohjelmisto. Tämä säästää tilaa yläreunuksesta, mutta toiminta voi olla herkempi näytönsuojille, lialle, lasivaurioille ja ohjelmistovirheille.

## Missä anturi sijaitsee

Vanhemmissa puhelimissa, joissa on näkyvä yläreunus, anturi on yleensä kuulokekaiuttimen, etukameran ja ympäristön valoisuuden anturin vieressä. Sitä ei välttämättä näe, koska se on tumman lasi-ikkunan takana.

Uudemmissa reiällisellä näytöllä varustetuissa ja lähes reunuksettomissa puhelimissa anturi voi olla näytön alla tai muuten huomaamattomassa kohdassa etulasin takana. Tarkkaa paikkaa on silloin vaikeampi arvata. Kun testaat kädellä, peitä ensin kuulokekaiuttimen ja etukameran ympäristö.

## Viallisen lähestymisanturin merkit

Näyttö pysyy päällä puhelun aikana. Tämä on klassinen oire. Viet puhelimen korvalle, ja poski alkaa painella painikkeita.

Näyttö jää mustaksi, kun siirrät puhelimen pois kasvoilta. Puhelu päättyy, mutta näyttö ei herää ilman virtapainikkeen painamista.

Näyttö sammuu kesken tavallisen käytön. Näin voi käydä, jos anturi on juuttunut lähellä-tilaan jonkin peittäessä sen.

Taskussa tapahtuvat tahattomat kosketukset lisääntyvät. Lähestymisanturi ei ole ainoa suoja taskukosketuksia vastaan, mutta jatkuvasti väärin tulkitseva anturi voi lisätä niitä.

## Nopea testi puhelun aikana

Soita vastaajaan tai numeroon, jossa et häiritse ketään. Peitä puhelun aikana kuulokekaiuttimen lähellä oleva alue kämmenellä.

Näytön pitäisi sammua nopeasti. Kun poistat käden, näytön pitäisi syttyä uudelleen noin sekunnissa. Jos siihen kuluu useita sekunteja, näyttö ei reagoi lainkaan tai se vilkkuu päälle ja pois, anturi kaipaa huomiota.

Yksinkertaista. Ärsyttävän hyödyllistä.

## Paremmat diagnostiikkatestit

Samsung Galaxy -puhelimessa voit kokeilla koodia `*#0*#` Samsungin omassa Puhelin-sovelluksessa ja etsiä anturitestiä. Samsung Members > Tuki > Aloita on käyttäjäystävällisempi reitti ja parempi ensimmäinen valinta, jos huoltovalikot eivät houkuttele.

Xiaomi-, Redmi- ja POCO-puhelimissa voit avata CIT-tilan koodilla `*#*#6484#*#*` tai `*#*#64663#*#*`. Xiaomin tukiohjeissa suositellaan myös koteloiden ja näytönsuojien poistamista, puhelimen yläreunan puhdistamista, ohjelmiston päivittämistä ja laitteistotestin käyttämistä, kun kosketus- tai anturitoiminnot käyttäytyvät oudosti.

Muissa Android-puhelimissa voit käyttää sovelluksia Sensor Test, Sensors Multitool tai DevCheck. Avaa lähestymisanturin lukema, liikuta kättä puhelimen yläosan edessä ja katso muuttuuko arvo. Osa puhelimista näyttää senttimetrejä. Toiset vaihtavat arvon 0:n ja enimmäisarvon välillä, mikä tarkoittaa vain tiloja lähellä ja kaukana.

Jos arvo ei koskaan muutu, anturi on peittynyt, poistettu käytöstä, kalibroitu väärin tai rikkoutunut.

Joissakin vanhoissa ohjeissa suositellaan Proximity Sensor Reset -sovellusta. En tekisi siitä ensimmäistä keinoa. Käytä sitä vasta perustarkistusten jälkeen, äläkä odota kolmannen osapuolen kalibrointisovelluksen korjaavan anturia, jota puhelin ei pysty lukemaan lainkaan.

## Korjaa ensin tavalliset syyt

Puhdista näytön yläosa. Sormirasva, pöly, meikki, nöyhtä ja kuivunut lika voivat peittää anturin ikkunan. Käytä puhdasta mikrokuituliinaa ja keskity kuulokekaiuttimen ympäristöön.

Poista näytönsuoja. Se on yleisin syy puhelimissa, joissa anturi on näytön alla tai muuten piilossa. Suoja voi olla liian paksu, anturin kohdalta liian tumma tai hieman vinossa. Testaa ilman suojaa ennen kuin epäilet emolevyä.

Irrota suojakuori. Läppäkotelot, korkeat reunukset ja huonosti leikatut kuoret voivat häiritä näytön yläreunan toimintaa.

Käynnistä puhelin uudelleen. Anturiajuri voi juuttua, etenkin pitkän käyttöajan tai järjestelmäpäivityksen jälkeen.

Päivitä ohjelmisto. Lähestymisen tunnistus riippuu osittain laiteohjelmistosta. Suuri alustapäivitys, kuten ensin Pixeleille julkaistu Android 17 ja muiden valmistajien myöhemmät Android 17 -versiot, voi muuttaa toimintaa, koska valmistajan ohjelmistokerros ohjaa laitteistoa.

Tarkista puheluasetukset. Joissakin Xiaomi-versioissa lähestymisen tunnistus näkyy puheluasetuksissa. Tarkka polku vaihtelee, mutta vanhemmissa MIUI-versioissa käytettiin polkua Settings > Apps > System app settings > Call settings > Incoming call settings > Proximity sensor.

## Kalibrointi ja virtuaaliset anturit

Joissakin diagnostiikkavalikoissa on lähestymisanturin kalibrointi. Tavallisia esimerkkejä ovat Xiaomin CIT ja vanhempien OnePlus-puhelinten tehdastilat. Suorita kalibrointi vain, jos valikko tarjoaa sen selvästi, ja pidä puhelin tasaisella alustalla puhtaana ja ilman suojuksia.

Virtuaalinen lähestymisen tunnistus on hankalampi tapaus. Jos puhelin arvioi etäisyyttä ohjelmistolla, vaihdettavaa fyysistä osaa ei välttämättä ole. Silloin ohjelmistopäivityksillä on korjausta suurempi merkitys. Tehdasasetusten palautus voi poistaa virheellisen kalibrointitilan, mutta sen pitäisi olla viimeinen keino varmuuskopioinnin jälkeen.

## Milloin kyse on laitteistosta

Jos anturin arvo ei muutu diagnostiikassa puhdistamisen, lisävarusteiden poistamisen, uudelleenkäynnistyksen, päivittämisen ja vikasietotilassa testaamisen jälkeen, laitteistovika on todennäköinen.

Pudotus voi rikkoa anturin kohdan tai siirtää näyttöä. Vesi voi syövyttää anturia tai joustokaapelia. Korjauksessa liitin voi jäädä löysälle tai väärä liima voi peittää anturin. Uusi anturisovellus ei korjaa mitään näistä.

Kun puhelimessa on erillinen infrapuna-anturi, osa itsessään on pieni, mutta työn osuus nostaa korjauskustannusta. Piilotettua tai näyttöön integroitua tunnistusta käyttävässä puhelimessa korjaus voi liittyä koko näyttömoduuliin.

Jos korjaus ei kannata, ongelman voi silti kiertää. Herätä näyttö puhelun aikana virtapainikkeella, ota tahattomien kosketusten suoja käyttöön, jos puhelimessa on sellainen, ja vältä anturin aluetta peittäviä läppäkoteloita. Ratkaisu ei ole täydellinen, mutta puhelin pysyy käyttökelpoisena.
