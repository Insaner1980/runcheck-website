---
title: "Näin tulkitset Androidin akun käyttötilastoja"
description: "Androidin akun käyttötilastot näyttävät, mitkä sovellukset ja järjestelmäpalvelut kuluttavat virtaa. Lue, mistä tilastot löytyvät, mitä prosentit tarkoittavat ja miten todellinen akkuongelma tunnistetaan."
listSummary: "Androidin akun käyttötilastot näyttävät, mitkä sovellukset ja järjestelmäpalvelut kuluttavat virtaa."
hub: "battery"
sourceNumber: 14
order: 4
subgroup: "Akun kunto"
tags: ["akku","virrankulutus","vianetsintä","android","suorituskyky"]
locale: "fi"
draft: false
---
Avaat Akun käyttö -näkymän ja näet yhden sovelluksen kohdalla 42 %. Se näyttää pahalta. Joskus se onkin ongelma. Joskus luku ei kerro juuri mitään.

Androidin akkutilastot auttavat rajaamaan vikaa, mutta ne eivät ole tarkka kuitti jokaisesta kulutetusta milliampeeritunnista. Olennaista on lukea prosentteja oikeassa yhteydessä.

## Mistä tilastot löytyvät

Pixelissä ja lähes vakio-Androidissa avaa Asetukset-sovelluksen Akku-osio ja valitse **Akun käyttö**. Voit tarkastella kulutusta sovelluksittain, ja uusissa Pixel-versioissa näkymän voi vaihtaa sovellusten ja järjestelmän toimintojen välillä. Sovelluksen napauttaminen avaa sen akun käyttöasetukset, joista voi säätää myös taustakäyttöä.

Samsung Galaxy -puhelimessa avaa **Asetukset > Akku**. Joissakin vanhemmissa One UI -versioissa polku kulkee Akun ja laitteen ylläpito -osion kautta. Samsung näyttää yleensä ensin kaavion ja sen jälkeen yksityiskohtaisemman sovellus- ja toimintoluettelon. Joissakin versioissa näkyy pidempi käyttöhistoria, joka kertoo enemmän kuin yksi lyhyt latausjakso.

Xiaomi-, Redmi- ja POCO-puhelimissa etsi Akku-valikosta Battery usage-, Power consumption details- tai vastaavaa näkymää. HyperOS- ja MIUI-versioiden nimet vaihtelevat mallin mukaan, joten valikon sanamuoto voi olla hieman erilainen.

OnePlus-, OPPO- ja realme-puhelimissa aloita Akku-asetuksista ja etsi Battery usage-, Battery usage details- tai App battery management -näkymää. Näissä käyttöliittymissä sovelluksen avaaminen erottaa usein etualalla ja taustalla tapahtuneen käytön.

Numeronäppäimistöön kirjoitettava `*#*#4636#*#*` avaa joissakin Android-puhelimissa testausvalikon. Siinä voi näkyä jännite, lämpötila, akun yleinen tila ja lataustila. Se ei ole sovelluskohtainen virrankulutusnäkymä, ja monet valmistajat ovat poistaneet koodin käytöstä.

## Mitä prosentit oikeasti tarkoittavat

Sovelluksen vieressä oleva luku on yleensä osuus tarkastelujakson aikana kulutetusta virrasta, ei osuus akun koko kapasiteetista.

Oletetaan, että puhelimen varaustaso laskee 100 prosentista 70 prosenttiin. Akkua on silloin kulunut 30 prosenttiyksikköä. Jos YouTube näyttää Akun käyttö -näkymässä 50 %, se ei tarkoita, että YouTube olisi käyttänyt puolet koko akusta. Se tarkoittaa, että Android kohdisti YouTubelle noin puolet tarkastelujakson kulutuksesta. Tässä esimerkissä todellinen osuus on noin 15 prosenttiyksikköä koko akusta.

Käännetään tilanne toisin päin. Puhelin laskee 100 prosentista 96 prosenttiin ja yksi sovellus näyttää 60 %. Sovellus hallitsi hyvin pientä kokonaiskulutusta. Se voi olla täysin harmiton.

Tämä on yleisin tulkintavirhe. Suurinta prosenttilukua ei kannata jahdata ennen kuin tarkistaa, kuinka paljon akkua ylipäätään kului.

## Miten Android arvioi kulutusta

Android ei asenna jokaiseen sovellukseen pientä virtamittaria. Se arvioi kulutuksen.

Järjestelmä seuraa, kuinka kauan laitteen osat ovat eri toimintatiloissa. Näitä ovat esimerkiksi CPU, näyttö, GPS, Wi-Fi, mobiiliverkon modeemi ja Bluetooth. Valmistajan tehoprofiili kertoo, kuinka paljon virtaa kunkin osan odotetaan kuluttavan eri tiloissa. Android yhdistää käyttöajat tähän profiiliin ja kohdistaa arvioidun kulutuksen sovelluksille sekä järjestelmäkomponenteille.

Menetelmä riittää vianhakuun. Laboratoriomittaus se ei ole.

Tehoprofiilit vaihtelevat valmistajittain. Pixel ja Xiaomi voivat käyttää samaa sovellusta yhtä kauan ja näyttää silti eri prosentit. Sovellus ei välttämättä käyttäytynyt eri tavalla. Laskentamalli oli toinen.

## Akun käyttökaavion lukeminen

Katso ensin kaaviota, vasta sitten sovellusluetteloa.

Jyrkkä lasku näytön ollessa päällä on usein normaalia. Suuri kirkkaus, video, kartat, pelaaminen, kamera ja mobiilidata voivat kuluttaa akkua nopeasti. Jyrkkä lasku näytön ollessa sammuksissa on kiinnostavampi. Se voi viitata taustatoimintaan, heikkoon verkkosignaaliin, jumiutuneeseen synkronointiin, pysähtymättömään prosessiin tai siihen, ettei puhelin pääse syvään lepotilaan.

Lähes tasainen viiva näytön ollessa sammuksissa on hyvä merkki. Puhelin lepää.

Latausjaksot näkyvät nousevina viivoina tai pystysuuntaisina hyppyinä. Kaavion aukko voi tarkoittaa, että puhelin oli sammutettuna, tilastot nollautuivat tai järjestelmä ei kerännyt tietoa kyseiseltä ajalta. Viidellä lyhyellä välilatauksella täytetystä päivästä ei kannata tehdä liian tarkkoja päätelmiä. Osittaiset lataukset saavat sovellusprosentit heilahtelemaan.

## Näyttöaika, hereilläoloaika ja signaali

Joissakin Android-versioissa kaavion alla näkyy lisärivejä. Ne jäävät helposti huomaamatta, vaikka selittävät usein suuren osan kulutuksesta.

Näyttöaika kertoo, milloin näyttö oli päällä. Jos valtaosa virrankulutuksesta osuu näihin jaksoihin, puhelin toimii todennäköisesti normaalisti. Näyttö on yksi nykyisen puhelimen suurimmista virrankuluttajista.

Hereilläoloaika kertoo, milloin CPU oli aktiivinen. Ihannetilanteessa se osuu enimmäkseen yhteen näyttöajan kanssa. Pitkät hereilläolojaksot näytön ollessa sammuksissa viittaavat herätelukkoihin tai taustatyöhön. Sähköpostin synkronointi, liikuntasovellukset, pilvivarmistus, navigointi, viestisovellukset ja mediasoittimet voivat kaikki tehdä tätä. Osa siitä on odotettua. Kolme tuntia taustalla pyörivä ostossovellus ei ole.

Myös signaalin laatu vaikuttaa paljon. Heikko mobiiliverkon kuuluvuus kuluttaa virtaa, koska modeemi tekee jatkuvasti töitä yhteyden säilyttämiseksi. Jos Mobile network standby tai Cell standby nousee listan kärkeen kellaritoimistossa, junassa, maaseudulla tai betonirakennuksessa, puhelin ei välttämättä ole viallinen. Se voi vain joutua taistelemaan verkosta.

## Kuviot, joista kannattaa välittää

Suuri sovellusprosentti ei yksin tarkoita ongelmaa. Suuri prosentti vähäisen käytön jälkeen tarkoittaa.

Videosovellus listan kärjessä kahden tunnin suoratoiston jälkeen on normaalia. Uutissovellus kärjessä viiden minuutin lukemisen jälkeen on epäilyttävä. Avaa sovelluksen tiedot ja vertaa käyttöä etualalla sekä taustalla.

Korkea Android System- tai System apps -kulutus on vaikeampi tulkita. Se voi johtua todellisesta järjestelmäongelmasta, esimerkiksi viallisesta päivityksestä. Se voi myös tarkoittaa, ettei Android pystynyt kohdistamaan kulutusta selvästi yhdelle sovellukselle, jolloin se päätyi järjestelmän koriin.

Google Play services -palvelun korkea osuus on samanlainen tapaus. Se hoitaa monen sovelluksen push-ilmoituksia, tilien synkronointia, sijaintia ja muita yhteisiä palveluita. Jos sen kulutus on suuri, tarkista, pyytääkö jokin sovellus sijaintia liian usein. Google Play services voi olla viestinviejä eikä varsinainen syyllinen.

Näytön osuus 40-50 % kulutetusta akusta on monelle normaali. Jos näyttöaika on vähäinen mutta kokonaiskulutus suuri, jokin muu tekee töitä.

## Mitä tehdä epäilyttävälle sovellukselle

Aloita kevyesti. Päivitä sovellus, käynnistä puhelin uudelleen ja katso, toistuuko ongelma seuraavana päivänä.

Jos sama jatkuu, rajoita sovelluksen taustakäyttöä. Pixelissä napauta sovellusta Akun käyttö -näkymässä ja säädä taustakäyttöä, tai avaa sovelluksen akkuasetukset Asetukset-sovelluksen Sovellukset-osiosta. Samsungissa sovelluksen voi avata akun käyttöluettelosta ja lisätä tarvittaessa taustakäytön rajoituksiin, nukkuviin sovelluksiin tai syvästi nukkuviin sovelluksiin. Valikon tarkka nimi vaihtelee One UI -version mukaan.

Pakota lopetus on väliaikainen testi, ei varsinainen korjaus. Se voi pysäyttää karanneen sovelluksen hetkeksi, mutta push-ilmoitus, ajastettu työ tai puhelimen uudelleenkäynnistys voi käynnistää sen uudelleen. Taustakäytön rajoittaminen on siistimpi ratkaisu.

Vikasietotila auttaa silloin, kun koko puhelin kuluttaa nopeasti akkua eikä yhtä sovellusta löydy. Se poistaa kolmannen osapuolen sovellukset väliaikaisesti käytöstä. Jos kulutus katoaa, syy on todennäköisesti ohjelmistossa. Jos kulutus jatkuu samanlaisena, tarkista verkkosignaali, järjestelmäpäivitys, laitteen lämpötila ja itse akku.

## Mitä tilastot eivät kerro

Akkutilastot eivät todista akun kuntoa. Kulunut akku ja huonosti toimiva sovellus voivat näyttää arjessa samalta.

Myös tarkastelujakso vaihtelee laitteittain. Pixel näyttää akun kehityksen edellisestä täydestä latauksesta lähtien. Samsung on muuttanut näkymän rakennetta eri One UI -versioissa, ja joissakin versioissa tilastot alkavat viimeisestä latauksesta eivätkä välttämättä täydestä latauksesta. Toistuvat lyhyet välilataukset lyhentävät jaksoa, jolloin prosentit näyttävät helposti dramaattisilta.

Kehityssuunnan näkemiseen tarvitaan historiaa. AccuBattery voi arvioida kapasiteettia ja seurata latausjaksoja ajan mittaan. runcheck säilyttää akun varaustason, lämpötilan, purkautumisnopeuden ja niihin liittyvien käyttökertojen historiaa, joten voit verrata päiviä toisiinsa yhden meluisan kaavion sijaan.

Androidin Akun käyttö -näkymän paras käyttötapa on yksinkertainen: etsi ensimmäinen hyvä johtolanka ja vahvista se puhelimen käyttäytymisestä. Jos kaavio, sovellusluettelo, tausta-aika ja oma muistikuva päivästä osoittavat samaan suuntaan, löysit todennäköisesti kuluttajan.
