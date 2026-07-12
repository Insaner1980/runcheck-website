---
title: "Näin tarkistat Android-puhelimen akun kunnon ja tunnistat viallisen akun"
metaTitle: "Android-puhelimen akun kunnon tarkistus"
description: "Heikkenevä puhelimen akku ei yleensä ilmoita itsestään dramaattisella sammumisella. Oireet hiipivät esiin vähitellen: näyttöaika lyhenee, puhelin käynnistyy odottamatta uudelleen tai tuntuu lämpimältä kevyessä käytössä. Muita merkkejä ovat nopeasti hupeneva varaus, sammuminen, vaikka varausta on jäljellä vähintään 20 %, aiempaa pidempi latausaika, jatkuva lämpeneminen tavallisissa tehtävissä ja näkyvästi pullistunut takakansi. Jo muutaman oireen yhdistelmä viittaa akun kulumiseen."
listSummary: "Heikkenevä puhelimen akku ei yleensä ilmoita itsestään dramaattisella sammumisella."
hub: "battery"
sourceNumber: 11
order: 1
subgroup: "Akun kunto"
tags: ["akku","kunto","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Toisin kuin iPhonessa, jossa akun kuntoprosentti on näkynyt tuetuissa malleissa iOS 11.3:sta lähtien, Androidissa tiedon löytäminen on perinteisesti ollut hankalampaa. Kaikille Android-puhelimille yhteistä Akun kunto -näkymää ei ole. Kokonaiskuva muodostuu valmistajan työkaluista, piilotetuista valikoista, käyttötavoista ja diagnostiikkasovelluksista.


## Nopea vastaus: näin tarkistat akun kunnon

Tässä kolme menetelmää nopeimmasta perusteellisimpaan.

**Valmistajan omat työkalut.** Avaa Asetukset-sovelluksen Akku-osio ja etsi akun kuntoa kuvaavaa tietoa. **Samsungissa** avaa Samsung Members, valitse Tuki, käynnistä Puhelimen vianmääritys ja avaa Akun tila. **Google Pixel 8a:ssa ja uudemmissa** akun kunto löytyy kohdasta Asetukset > Akku > Akun kunto ja syklimäärä kohdasta Asetukset > Tietoja puhelimesta > Akun tiedot. **OnePlus-, OPPO- ja realme-puhelimissa** akun kunto voi näkyä uusien mallien Akku-asetuksissa, mutta saatavuus riippuu mallista, alueesta ja käyttöjärjestelmäversiosta. **Xiaomi- ja POCO-puhelimissa** akun suojausnäkymä voi näyttää akun tietoja ja joissakin malleissa myös kuntotietoja. HyperOS-versio ja puhelinmalli ratkaisevat, mitä tietoja todella näkyy.

**Piilotettu diagnostiikkavalikko.** Avaa Puhelin-sovelluksen numeronäppäimistö ja kirjoita `*#*#4636#*#*`. Tuetuissa laitteissa avautuu testausvalikko, jonka Battery information -osiossa voi näkyä akun tila, lämpötila ja jännite. Koodi ei toimi kaikissa puhelimissa. Monet uudet Samsung- ja Pixel-mallit ovat poistaneet sen käytöstä.

**Diagnostiikkasovellus.** Kolmannen osapuolen sovellukset arvioivat akun kuntoa seuraamalla lataus- ja purkautumiskäyttäytymistä usean päivän ajan. Tämä on yksityiskohtaisin vaihtoehto silloin, kun puhelin ei näytä akun kuntoa omissa asetuksissaan.

Jos akun kapasiteetiksi arvioidaan alle 80 % alkuperäisestä nimelliskapasiteetista tai valmistajan kuntotila on jotain muuta kuin Normaali tai Hyvä, akun vaihtamista kannattaa jo harkita.


## Miksi akut kuluvat

Jokaisessa Android-puhelimessa on litiumioni- tai litiumpolymeeriakku. Se on kevyt, energiatiheä ja ladattava, mutta sen kemiaan kuuluu rajallinen käyttöikä.

**Lataussyklit ovat yksi tärkeimmistä kulumisen aiheuttajista.** Yksi täysi sykli tarkoittaa 100 %:n käyttämistä akun kapasiteetista. Sen ei tarvitse tapahtua yhdellä kertaa: jos käytät tänään 50 % ja huomenna 50 %, yhteensä kertyy yksi sykli. Vanhempien puhelinten yhteydessä puhuttiin usein 500 syklistä, mutta monien nykyisten mallien tavoitteena on noin 800-1 000 täyttä sykliä ennen kuin kapasiteetti laskee noin 80 prosenttiin alkuperäisestä. EU-markkinoille 20.6.2025 alkaen saatettujen puhelinten on kestettävä vähintään 800 lataus- ja purkaussykliä ja säilytettävä vähintään 80 % alkuperäisestä kapasiteetista.

**Kalenterikulumista tapahtuu käytöstä riippumatta.** Litiumionikennoissa syntyy ajan ja termodynamiikan vuoksi väistämättömiä kemiallisia sivureaktioita. Anodin kiinteä elektrolyyttirajapinta paksuuntuu vähitellen, mikä kasvattaa sisäistä vastusta. Vuodeksi laatikkoon jätetyn puhelimen akku on mitattavasti heikompi kuin uutena, vaikka puhelinta ei olisi käytetty.

**Kuumuus tekee eniten vahinkoa.** Yli 30 °C (86 °F) on litiumionikennolle jo kohonnut lämpötila. Pelaaminen latauksen aikana, puhelimen jättäminen kuumaan autoon ja käyttö suorassa auringonpaisteessa nopeuttavat kemiallista hajoamista. Yksi pitkä ylikuumenemistilanne voi aiheuttaa pysyvää vahinkoa. Vaikutukset myös kasaantuvat: korkea lämpötila yhdessä täyden varaustason kanssa on pahin yhdistelmä. Siksi monissa puhelimissa latauksen voi rajoittaa 80 prosenttiin tai yöaikaista latausta voidaan hidastaa. Suorassa auringossa auton kojelaudalla oleva puhelin voi kuumentua vahingollisiin lämpötiloihin alle tunnissa, vaikka sää ei olisi erityisen helteinen.

**Lataustavoilla on merkitystä, mutta vähemmän kuin usein väitetään.** Jatkuva lataaminen 100 prosenttiin ja purkaminen 0 prosenttiin rasittaa akkua enemmän kuin varaustason pitäminen 20-80 prosentin välillä. Pikalataus tuottaa myös enemmän lämpöä kuin hitaampi lataus. Ero jatkuvan 100 prosenttiin pikalataamisen ja varovaisemman 80 prosenttiin lataamisen välillä on vuoden aikana silti pienempi kuin monet verkko-ohjeet antavat ymmärtää. Kuumuus ja aika vaikuttavat enemmän. Todellinen riski ovat huonolaatuiset tai yhteensopimattomat laturit, joiden virransyöttö voi olla epävakaata ja vahingoittaa akkua pysyvästi.

Lopputulos on yksinkertainen: 5 000 mAh:n akusta tulee vähitellen 4 000 mAh:n ja sitten 3 500 mAh:n akku, kunnes jäljellä oleva kapasiteetti ei enää riitä tavalliseen päivään.


## Manuaaliset diagnostiikkavaiheet

Androidin omat asetukset antavat hyödyllisiä vihjeitä, vaikka puhelin ei näyttäisi tarkkaa kuntoprosenttia. Näihin tarkistuksiin ei tarvitse asentaa mitään.

**Tarkista sovelluskohtainen akun käyttö.** Avaa Asetukset-sovelluksen Akku-osio ja etsi Akun käyttö -näkymä. Tarkka polku vaihtelee, ja joissakin puhelimissa osion nimi on esimerkiksi Akun ja laitteen ylläpito. Etsi sovelluksia, jotka kuluttavat suhteettoman paljon virtaa, etenkin jos et ole käyttänyt niitä aktiivisesti. Jos taustalla toimiva sovellus vie vähintään 15 % kulutuksesta, ongelma on usein sovelluksessa eikä kuluneessa akkukennossa.

**Vertaa näyttöaikaa.** Tarkista, montako tuntia näyttöaikaa saat täydellä latauksella, ja vertaa tulosta puhelimen alkuperäisiin tietoihin tai omiin kokemuksiisi uutena. Jos näyttöaika on lyhentynyt 30-40 %, kyse on todennäköisesti aidosta kulumisesta.

**Seuraa äkillisiä prosenttipudotuksia.** Terve akku purkautuu suunnilleen tasaisesti. Jos lukema putoaa kevyessä käytössä muutamassa minuutissa 45 prosentista 20 prosenttiin tai puhelin sammuu 15 prosentissa, akun todellinen jännitekäyrä ei enää vastaa ohjelmiston varaustasoarviota. Se on tyypillinen vanhenemisen merkki.

**Mittaa latausaika.** Katso samalla laturilla, kauanko lataaminen 20 prosentista 80 prosenttiin kestää. Selvästi aiempaa pidempi aika voi kertoa kasvaneesta sisäisestä vastuksesta. Myös päinvastainen ilmiö paljastaa jotain: jos puhelin latautuu nopeasti mutta myös tyhjenee yhtä nopeasti, jäljellä olevan kapasiteetin arvio voi olla väärä.

**Tarkkaile sammumista kuormituksessa.** Kulunut akku ei pysty ylläpitämään jännitettä, kun virrantarve kasvaa nopeasti. Jos vaativa peli sammuttaa puhelimen, vaikka varausta näyttää olevan kohtuullisesti jäljellä, akku on hyvin todennäköisesti käyttöikänsä lopussa.

**Tunnustele lämpötilaa.** Selaamisen, viestittelyn ja kevyen somenkäytön pitäisi lämmittää puhelinta korkeintaan hieman. Jos takakansi tuntuu selvästi kuumalta näissä tehtävissä, kasvanut sisäinen vastus voi tuottaa ylimääräistä lämpöä.

**Etsi fyysisiä merkkejä.** Nouseva takakansi, rungosta hieman irtoava näyttö tai tasaisella alustalla keikkuva puhelin voivat kaikki viitata turvonneeseen akkuun. Turvonnut akku on turvallisuusriski. Lopeta puhelimen käyttö, älä lataa sitä ja vie se viipymättä huoltoon. Tätä ei pidä vain seurata. Turpoaminen ei korjaannu itsestään.

**Käytä valmistajan diagnostiikkaa.** Nopean vastauksen osiossa mainittujen kuntotietojen lisäksi joissakin puhelimissa on erillisiä testejä. Pixel 6:ssa ja uudemmissa malleissa voi olla akun diagnostiikka Akku-asetuksissa. Samsung Members sisältää Puhelimen vianmääritys -toiminnon, jolla akun tilan voi testata. Xiaomi-laitteissa akun suojausnäkymä näyttää mallista riippuen tavallista tarkempia akkutietoja.


## Tarkempi diagnostiikka: jännite, lämpötila ja purkautumiskäyrä

Muutama mittari kertoo teknisestä näkökulmasta, mitä kennon sisällä tapahtuu.

**Jännitteen käyttäytyminen.** Täyteen ladatun litiumionikennon jännite on noin 4,2 V ja lähes tyhjän noin 3,0-3,3 V. Terve akku pitää jännitteen melko vakaana kohtuullisessa kuormituksessa. Varoitusmerkkejä ovat kevyeen kuormaan nähden epäsäännöllisesti vaihteleva jännite, jyrkkä pudotus tavallisessa käytössä tai selvästi alle 3,7 V:n lukema, vaikka puhelin näyttää vielä varausta. Tällöin kenno voi olla kalibroitu väärin tai kulunut niin pitkälle, ettei siihen enää voi luottaa.

**Lämpötilakäyrä.** Normaali käyttölämpötila on noin 20-35 °C (68-95 °F). Enintään 40 °C voi olla hyväksyttävä vaativissa tehtävissä, kuten pelaamisessa tai navigoinnissa. Jos lämpötila ylittää jatkuvasti 45 °C, puhelimen lämmönhallinta alkaa rajoittaa suorituskykyä ja hidastaa latausta. Toistuvasti näihin lämpötiloihin nouseva akku ajautuu noidankehään: lämpö nopeuttaa kulumista, ja kuluminen tuottaa lisää lämpöä.

**Purkautumiskäyrän muoto.** Terveessä kennossa purkautumisen keskiosa, suunnilleen 30-70 %, on melko tasainen ja hidas. Kulumisen edetessä tämä tasainen alue puristuu lyhyemmäksi: ylemmät prosentit laskevat nopeammin, keskialue kapenee ja alle 30 prosentin lukemiin ei enää voi luottaa. Jos akku putoaa nopeasti 50 prosentista 30 prosenttiin, käyttökelpoista kapasiteettia on kadonnut. Kun kehitystä seuraa päivien tai viikkojen ajan, näkee sekä heikkenemisen että sen nopeuden.

**Sisäisen vastuksen vaikutukset.** Kuluttajatyökaluilla sitä ei voi mitata suoraan, mutta seuraukset näkyvät. Akku lämpenee latauksessa, varaustaso putoaa kuormituksessa nopeasti mutta palautuu levossa ja suurin latausnopeus pienenee. Kaikki johtuu siitä, että ionien liikkuminen kuluneiden sisärakenteiden läpi vaikeutuu.

Diagnostiikkasovellukset muuttavat nämä havainnot numeroiksi. Ne seuraavat lataus- ja purkautumiskäyttäytymistä usean päivän ajan ja arvioivat nykyisen kapasiteetin suhteessa alkuperäiseen nimelliskapasiteettiin. Jos 5 000 mAh:n akkuun mahtuu enää 3 800 mAh, akun kunto on noin 76 %, ja vaihtamista kannattaa jo vakavasti harkita. Useimmat sovellukset tarvitsevat ainakin muutaman päivän ja useita latauskertoja ennen kuin arvio tasaantuu. Ensimmäisen päivän lukemasta ei siis pidä tehdä johtopäätöksiä.

runcheck yhdistää akun diagnostiikan verkon, lämpötilan ja tallennustilan analyysiin. Se on hyödyllistä, koska akkuongelmat eivät aina esiinny yksin. Viallisesti toimivan komponentin lämpöongelma voi näyttää akun tyhjenemiseltä, ja tallennustilan pullonkaula voi pitää CPU:n tarpeettoman kovassa työssä.

Vältä sovelluksia, jotka lupaavat tehostaa, kalibroida tai palauttaa akun kunnon. Mikään sovellus ei voi kumota kemiallista kulumista. Hyödylliset sovellukset näyttävät todellisia jännite- ja lämpötilalukemia, seuraavat tietoja ajan mittaan ja toimivat laitteessa ilman pakollista käyttäjätiliä tai pilvilatauksia.


## Usein kysyttyä

**Kuinka kauan Android-puhelimen akun pitäisi kestää ennen vaihtoa?**

Vanhoista puhelinakuista puhuttiin usein 500 syklin yhteydessä, mutta nykyisille malleille se on liian matala yleissääntö. Monet uudet akut on suunniteltu säilyttämään noin 80 % kapasiteetista suunnilleen 800-1 000 täyden lataussyklin ajan. Tulos riippuu mallista, akkukemiasta, lataustavoista, kuumuudesta ja käytön raskaudesta. Joku saa samasta akusta neljä vuotta. Toinen huomaa selvän heikkenemisen jo 18 kuukaudessa.

**Missä kuntoprosentissa akku kannattaa vaihtaa?**

Noin 80 % alkuperäisestä nimelliskapasiteetista on kohta, jossa useimmat alkavat huomata eron. Esimerkiksi 4 500 mAh:n akku varastoi silloin käytännössä noin 3 600 mAh. Alle 70 prosentissa puhelin on monelle jo hankala päivittäisessä käytössä.

**Voiko akun kunnon palauttaa?**

Ei. Kuluminen on kemiallinen prosessi, joka ei käänny takaisin. Tulevaa heikkenemistä voi hidastaa pitämällä puhelimen viileänä, lataamalla mahdollisuuksien mukaan 20-80 prosentin välillä, käyttämällä valmistajan laturia tai vaatimukset täyttävää vaihtoehtoa ja ottamalla älykkäät latausominaisuudet käyttöön.

**Voiko ohjelmistopäivitys aiheuttaa akun kulumista muistuttavaa virrankulutusta?**

Kyllä, ja näin tapahtuu useammin kuin moni odottaa. Huonosti optimoitu päivitys voi lisätä CPU:n taustakuormaa, kuluttaa akkua ja tuottaa lämpöä. Tarkista Akun käyttö -näkymä ennen kuin päättelet laitevian olevan syynä. Jos kulutuksesta vastaa tietty sovellus tai järjestelmäprosessi, sovelluksen päivittäminen, välimuistin tyhjentäminen tai korjauspäivityksen odottaminen ratkaisee ongelman usein.

**Onko turvonneen akun sisältävää puhelinta turvallista käyttää?**

Ei. Lopeta käyttö, älä lataa puhelinta ja vie se huoltoon. Turpoaminen tarkoittaa, että akun sisäisen kemiallisen hajoamisen seurauksena on syntynyt kaasua. Pahimmillaan turvonnut litiumioniakku voi rikkoutua tai syttyä.

**Kuluttaako pikalataus akkua nopeammin?**

Pikalataus tuottaa enemmän lämpöä, ja lämpö nopeuttaa kulumista. Nykyaikaiset latausprotokollat hallitsevat tätä kuitenkin melko hyvin: lataus on nopeaa noin 70-80 prosenttiin asti ja hidastuu sen jälkeen. Vaikutus on todellinen, mutta ympäristön lämpötilaan ja yleisiin lataustapoihin verrattuna melko pieni. Valmistajan laturin käyttö on yleensä turvallista. Pikalatauksen säästäminen tilanteisiin, joissa sitä todella tarvitsee, ja hitaamman latauksen käyttäminen yön aikana on järkevä kompromissi.

**Miksi puhelin sammuu 15-20 prosentissa eikä vasta nollassa?**

Akun todellinen kapasiteetti ei enää vastaa ohjelmiston odotuksia. Kulumisen edetessä jännitekäyrä muuttuu ja varaustason arvio menettää tarkkuuttaan. Puhelin luulee varausta olevan jäljellä, mutta akku ei pysty ylläpitämään jännitettä kuormituksessa. Yksi hallittu täysi lataus- ja purkaussykli voi joskus korjata lukemaa. Jos sama tapahtuu jatkuvasti, akku on vaihdettava.

**Kuinka usein akun kunto kannattaa tarkistaa?**

Muutaman kuukauden välein. Kuluminen on hidasta, eikä jatkuva tarkistaminen muuta lopputulosta. Ylimääräinen tarkistus on aiheellinen, jos akunkesto muuttuu äkillisesti, puhelin sammuu odottamatta tai lämpenee tavallista enemmän.


## Mitä tuloksilla kannattaa tehdä

Tarkista ensin akun käyttökaavio ja käytä valmistajan omia kuntotyökaluja. Kiinnitä huomiota myös puhelimen päivittäiseen käyttäytymiseen, sillä käytännön oireet kertovat usein enemmän kuin yksittäinen luku. Tarkempaan seurantaan sopii diagnostiikkasovellus, joka tallentaa jännitteen, lämpötilan ja kapasiteetin kehitystä. Näin viikkojen aikana syntyvät muutokset eivät jää huomaamatta.

Noin 80 prosentin kohdalla kuluminen alkaa vaikuttaa selvästi arkikäyttöön. Sen alapuolella akun vaihto on huomattavasti uutta puhelinta halvempi ratkaisu ja voi pidentää laitteen käyttöikää 2-3 vuodella.
