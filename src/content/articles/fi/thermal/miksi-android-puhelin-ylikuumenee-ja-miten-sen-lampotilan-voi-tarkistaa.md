---
title: "Miksi Android-puhelin ylikuumenee ja miten sen lämpötilan voi tarkistaa"
metaTitle: "Android-puhelin ylikuumenee: syyt ja lämpötilan tarkistus"
description: "Näin tarkistat Android-puhelimen lämpötilan, tulkitset turvallisia akun lämpötiloja ja ymmärrät, miten Android 17, Pixel-diagnostiikka, Samsung Members, lataaminen, sovellukset ja signaalin voimakkuus vaikuttavat ylikuumenemiseen."
listSummary: "Tarkista puhelimen lämpötila ja selvitä ylikuumenemisen syy."
hub: "thermal"
sourceNumber: 53
order: 1
tags: ["lämpötila","kuumeneminen","android","vianetsintä","laitteisto"]
locale: "fi"
draft: false
---
*Android-puhelin voi tuntua kuumalta arkisesta syystä, vakavasta syystä tai ilman selvää syytä. Olennaista on tietää, mitä lukemaa tarkastelet ja onko se oikeasti merkityksellinen.*

## Tarkista ensin lämpötila

Aloita puhelimen omista työkaluista. Ne eivät ole yhtä näyttäviä kuin anturisovellukset, mutta ne lupaavat harvemmin tarkkuutta, jota laite ei todellisuudessa pysty tarjoamaan.

Android 17 julkaistiin 16. kesäkuuta 2026 useimmille tuetuille Pixel-laitteille, ja muut Android-valmistajat seuraavat omien päivitysaikataulujensa mukaan. Pixel 6:ssa ja uudemmissa voit avata akun asetukset ja valita **Battery diagnostics > Phone is very warm**. Pixelin työkalu ei aina näytä akun tarkkaa lämpötilalukemaa. Se antaa laitekohtaista ohjausta puhelimen nykyisen lämpötilatilan perusteella.

Uudemmissa Pixel-puhelimissa akun kunnon voi tarkistaa avaamalla akun asetuksista **Battery health**. Googlen nykyisen tukisivun mukaan akun kuntotila ja kapasiteettiarvio ovat käytettävissä Pixel 8a:ssa ja uudemmissa, mutta eivät Pixel Tabletissa. Vanhemmat mallit, kuten Pixel 6a, Pixel 7, Pixel 7a, Pixel 8 ja Pixel 8 Pro, eivät näytä tätä akun kuntotilaa.

Samsung Galaxy -puhelimissa akun kunnon virallinen tarkistus tehdään Samsung Members -sovelluksessa. Avaa **Samsung Members > Support > Phone diagnostics > Battery status**. Samsung ilmoittaa tuloksen muodossa Normal, Weak tai Bad. Osa Galaxy-malleista näyttää hyödyllisiä akku- ja laitehuoltotietoja myös asetuksissa, mutta valikkonimet muuttuvat One UI -version, alueen ja mallin mukaan.

Vanhaa valintakoodia `*#*#4636#*#*` voi edelleen kokeilla, mutta koko ohjetta ei kannata rakentaa sen varaan. Joissakin Android-puhelimissa se avaa Testing-valikon, jossa voi olla puhelin-, Wi-Fi-, käyttö- ja joskus akkutietoja. Monissa nykyisissä Samsung-, Xiaomi- ja Pixel-ohjelmistoissa akunäkymä puuttuu tai koodi ei tee mitään. Se on normaalia eikä tarkoita laitteen olevan rikki.

Diagnostiikkasovellus on varavaihtoehto silloin, kun valmistaja ei näytä riittävästi tietoja. Hyvä sovellus näyttää akun lämpötilan, latausvirran, Androidin lämpötilatilan ja historian. Tarkkoihin CPU-lämpötilaväitteisiin kannattaa kuitenkin suhtautua varovasti. Android ei tarjoa tavallisille sovelluksille yhtä yhtenäistä tapaa lukea CPU:n lämpötilaa. Osa sovelluksista lukee valmistajan antureita silloin, kun laite sallii sen. Osa näyttää vain akun lämpötilan. Osa arvioi.

runcheck on hyödyllinen silloin, kun yksittäistä lukemaa tärkeämpää on kehitys ajan mittaan. Se yhdistää lämpötilatiedot akun tilaan, verkkoyhteyteen, tallennustilan kuormitukseen ja kuntotietojen historiaan. Näin voit nähdä, alkoiko kuumeneminen latauksesta, heikosta signaalista, taustasovelluksesta vai pidemmästä kehityksestä.

## Mitä lukema tarkoittaa

Akun lämpötila ei ole sama asia kuin pinnan lämpötila. Puhelin voi tuntua lämpimältä, koska runko siirtää lämpöä pois suorittimesta, vaikka akku olisi vielä turvallisella alueella. Myös päinvastainen on mahdollista, etenkin latauksen aikana.

Käytä seuraavia alueita käytännön ohjeena, ei laboratoriosääntönä:

- **20-35 °C:** Normaali tavallisessa käytössä. Viestit, selaaminen ja kevyt suoratoisto pysyvät yleensä tällä alueella, ellei huone ole kuuma.
- **35-40 °C:** Lämmin mutta tavallinen esimerkiksi navigoinnin, videopuhelujen, pelaamisen, 5G-latausten tai lataamisen aikana.
- **40-45 °C:** Tarkkailun arvoinen. Puhelin voi himmentää näyttöä, hidastaa latausta tai rajoittaa suorituskykyä.
- **Yli 45 °C:** Lopeta lisälämmön tuottaminen. Irrota laturi, sulje raskaat sovellukset, poista kuori ja siirrä puhelin pois auringosta.
- **Noin 50 °C tai enemmän:** Käsittele tilannetta ylikuumenemisena, etenkin jos puhelin näyttää varoituksen, sammuu tai tuntuu epämukavalta pitää kädessä.

Valmistajat ilmoittavat turvallisen käytön yleensä ympäristön lämpötilana. Samsung pitää Galaxy-laitteiden ihanteellisena käyttöympäristönä 0-35 °C:ta, ja Google ilmoittaa Pixel-laitteille saman ympäristölämpötilan. Akun sisäinen lukema voi nousta kuormituksessa tilapäisesti tätä korkeammalle, mutta toistuva kuumuus kuluttaa akkua.

## Mistä lämpö syntyy

Suurin osa puhelimen lämmöstä tulee neljästä lähteestä: SoC:sta, akusta, radioista ja ympäristöstä.

CPU ja GPU lämpenevät kovassa työssä. Pelaaminen, 4K-videon tallennus, kameran kuvankäsittely, videoeditointi, navigointi ja sovellusten asentaminen voivat lämmittää puhelinta kameran ympäriltä tai yläreunasta. Kun lämpö ei poistu riittävän nopeasti, Androidin lämpötilanhallinta laskee suorituskykyä. Tätä kutsutaan thermal throttlingiksi eli lämpötilasta johtuvaksi suorituskyvyn rajoittamiseksi.

Akku lämpenee latauksessa ja voimakkaassa purkautumisessa. Pikalataus tuottaa enemmän lämpöä kuin hidas 5 tai 10 W:n laturi, koska akku vastaanottaa enemmän tehoa lyhyemmässä ajassa. Puhelimen käyttö pikalatauksen aikana on klassinen kaksinkertainen kuorma: latauksen lämpö ja suorittimen lämpö yhtä aikaa.

Radioiden merkitystä aliarvioidaan usein. Heikko matkapuhelinsignaali pakottaa modeemin työskentelemään kovemmin. Kellarissa yhdellä palkilla oleva puhelin voi lämmetä levossa enemmän kuin sama puhelin pöydällä vahvassa Wi-Fi-verkossa. Jos lämpö katoaa lentotilassa, signaalin etsiminen oli todennäköisesti osa ongelmaa.

Ympäristö määrää lähtötilanteen. Suorassa auringossa, kuumassa autossa, tyynyn alla tai paksun kumikuoren sisällä puhelimella on vähemmän jäähdytysvaraa. Puhelimissa ei ole tuulettimia. Ne luovuttavat lämpöä rungon, näytön ja takapaneelin kautta.

## Langaton lataus ansaitsee oman huomionsa

Langaton lataus on kätevää, mutta se sietää virheitä huonommin kuin kaapeli. Qi- ja Qi2-laturit käyttävät magneettista induktiota, ja kohdistus ratkaisee. Qi2 parantaa kohdistusta magneeteilla, ja Qi2 25W nostaa sertifioidun langattoman tehon vanhaa 15 W:n tasoa korkeammaksi, mutta lämpö ei katoa mihinkään.

Hyvin kohdistettu Qi2- tai Pixel Stand -tyyppinen laturi on yleensä ongelmaton. Huonosti kohdistettu alusta, paksu kuori, metallinen rengaslisävaruste tai lämmin huone voi muuttaa normaalin latauksen kuumaksi. Google neuvoo Pixel-käyttäjiä hitaan langattoman latauksen vianhaussa poistamaan kuoren, pitämään laitteen poissa suorasta auringosta, tarkistamaan kohdistuksen ja varmistamaan, ettei laturi estä ilman vaihtumista.

Käytännön sääntö on yksinkertainen: jos langaton lataus kuumentaa puhelimen joka yö, muuta järjestelyä. Kokeile ilman kuorta, käytä sertifioitua laturia, kohdista puhelin huolellisesti ja ota 80 prosentin raja käyttöön, jos malli tukee sitä. Satunnainen lämpeneminen ei ole katastrofi. Lämmin puhelin, 100 prosentin varaustaso ja tuntikaudet alustalla ovat huonompi yhdistelmä.

## Tarkistukset ennen uusien sovellusten asentamista

Avaa **Battery usage** -näkymä ja etsi sovelluksia, jotka ovat käyttäneet virtaa ilman aktiivista käyttöä. Navigointisovelluksen kulutus työmatkan jälkeen on loogista. Ostossovelluksen 18 prosentin yökulutus ei ole.

Käynnistä puhelin uudelleen. Oikeasti. Jumiutunut palvelu voi pitää CPU:n hereillä tuntikausia, ja uudelleenkäynnistys poistaa tilan nopeammin kuin jokaisen sovellusvalikon tutkiminen.

Tarkista viimeaikaiset päivitykset. Suuri Android-päivitys voi lämmittää puhelinta päivän ajan, kun sovelluksia optimoidaan, hakemistoja rakennetaan uudelleen ja pilvisynkronointi valmistuu. Jos lämpö häviää 24-48 tunnissa, kyse oli todennäköisesti päivityksen jälkitöistä.

Kokeile vikasietotilaa, jos kuumeneminen palaa uudelleenkäynnistyksen jälkeen. Pixelissä käytä oman mallin virtapainikeyhdistelmää ja pidä **Power off**- tai **Restart**-valintaa painettuna, kunnes Safe Mode -kehote tulee näkyviin. Vikasietotila poistaa ladatut sovellukset väliaikaisesti käytöstä. Jos laite pysyy siinä viileänä, syy viittaa kolmannen osapuolen sovellukseen.

## Edistyneet tarkistukset ADB:llä

Jos ADB on tuttu, voit tarkastella lämpötila-alueita tietokoneelta:

```bash
adb shell for z in /sys/class/thermal/thermal_zone*; do echo "$z"; cat "$z/type"; cat "$z/temp"; done
```

Monet arvot ilmoitetaan Celsius-asteen tuhannesosina, joten `38000` tarkoittaa 38 °C:ta. Vaikeinta ei ole lukeman saaminen vaan anturin tunnistaminen. Valmistajat nimeävät lämpötila-alueet eri tavoin, ja osa lukemista on estetty tai hyödytön vähittäismyyntilaitteissa.

Sovellustason diagnostiikassa Androidin julkiset lämpötila-API:t ovat yleensä selkeämpiä. Android 10 toi `PowerManager`-rajapinnan lämpötilatasot, ja uudemmat versiot tarjoavat tuetuissa laitteissa myös thermal headroom -arvon. Lähellä arvoa 1,0 oleva headroom tarkoittaa, että laite on nykyisellä kuormalla lähellä voimakasta suorituskyvyn rajoittamista.

## Yleisiä kysymyksiä

### Onko puhelimen lämpeneminen normaalia?

Kyllä, latauksen, pelaamisen, navigoinnin, videopuhelujen, hotspotin käytön ja suurten latausten aikana. Lämmin ei automaattisesti tarkoita ongelmaa. Kuuma puhelin levossa on se, mikä kannattaa tutkia.

### Voiko ylikuumeneminen vaurioittaa puhelinta pysyvästi?

Toistuva kuumuus vahingoittaa ennen kaikkea akkua. Litiumioniakut vanhenevat nopeammin kuumina, etenkin korkeassa varaustilassa. Nykyaikaiset puhelimet suojaavat itseään hidastamalla, keskeyttämällä latausta, poistamalla toimintoja käytöstä tai sammumalla ennen pahinta tilannetta.

### Pitäisikö kaikki sovellukset sulkea?

Sulje sovellus, joka aktiivisesti tuottaa lämpöä, kuten peli, kameratallennus, videoeditori tai navigointi. Älä pyyhi jokaista taustalla olevaa sovellusta pakonomaisesti pois. Android hallitsee muistia paremmin kuin vanhat task killer -ohjeet antavat ymmärtää.

### Miksi puhelin kuumenee latauksen aikana?

Lataus tuottaa lämpöä akun sisällä. Pikalataus tuottaa enemmän. Samanaikainen käyttö lisää suorittimen ja näytön lämpöä. Jos puhelin kuumenee aina latauksen alkaessa, kokeile hitaampaa laturia, toista kaapelia ja lataamista ilman kuorta.

## Lopuksi

Käytä ensin valmistajan omia työkaluja ja diagnostiikkasovellusta vasta silloin, kun tarvitset historiaa. Valintakoodit ovat lisämahdollisuus, eivät takuu. Kun puhelin on selvästi kuuma, älä jatka kuormitusta. Poista lämmön lähde, anna laitteen jäähtyä ja etsi vasta sitten toistuvaa kaavaa.
