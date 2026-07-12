---
title: "Android-puhelimen laitteiston testaaminen: kattava diagnostiikkaopas (2026)"
metaTitle: "Android-puhelimen laitteiston testausopas (2026)"
description: "Android-puhelin voi näyttää ehjältä, vaikka yksi osa olisi rikkoutumassa. Kulunut akku, heikko kaiutin, viallinen lähestymisanturi tai vaurioitunut antenni ei aina ilmoita itsestään selvästi. Sen sijaan käyttöaika lyhenee, puhelut käyttäytyvät oudosti, laite kuumenee satunnaisesti tai näytön yksi kulma lakkaa tunnistamasta kosketuksia."
listSummary: "Android-puhelin voi näyttää ehjältä, vaikka yksi osa olisi rikkoutumassa."
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["akku","virrankulutus","vianetsintä","android","suorituskyky"]
locale: "fi"
draft: false
---
Hyvä uutinen on, että suurimman osan voi testata ennen kuin maksat korjauksesta. Androidin asetukset, valmistajien diagnostiikkatyökalut, valintakoodit ja käsin tehtävät tarkistukset kattavat tärkeimmät laitteisto-osat. Hankala puoli on se, ettei mikään menetelmä toimi aivan kaikissa puhelimissa.

Android 17 julkaistiin ensin useimmille tuetuille Pixel-laitteille, ja muut valmistajat etenevät omien aikataulujensa mukaan. Sillä on merkitystä, koska diagnostiikkavalikot, akun kuntotiedot ja asetuspolut voivat vaihdella Android-version, valmistajan käyttöliittymän, operaattoriversion ja alueen mukaan. Pidä jokaista tämän oppaan koodia oikotienä, älä lupauksena.

## Nopea vastaus

Aloita valmistajan omasta diagnostiikkatyökalusta, jos sellainen on saatavilla.

- Samsung Galaxy: avaa Samsung Members, valitse Pyydä apua ja sitten Näytä testit. Voit suorittaa kaikki testit tai valita yksittäisen osan, kuten akun, kaiuttimen, mikrofonin, näytön, kameran tai anturit. Monissa Galaxy-puhelimissa myös koodi `*#0*#` avaa Phone-sovelluksessa laitteistotestivalikon.
- Google Pixel: muodosta internetyhteys ja valitse `*#*#7287#*#*`, jotta Pixel Diagnostics avautuu tuetussa Pixel-puhelimessa. Pixel Tablet käyttää Googlen verkkopohjaista Pixel-korjaus- ja diagnostiikkapolkua.
- Motorola: avaa Device Help ja valitse Device diagnosis > Hardware test.
- Xiaomi, Redmi ja POCO: kokeile koodia `*#*#6484#*#*`, joka avaa CIT-diagnostiikkavalikon tuetuissa malleissa. Valikon voi usein avata myös napauttamalla kernel-versiota useita kertoja About phone -näkymässä.
- Lähes vakio-Androidia käyttävät puhelimet: `*#*#4636#*#*` voi avata testivalikon monissa laitteissa. Se näyttää lähinnä puhelin-, verkko-, käyttö- ja akkutietoja, eikä ole täydellinen laitteistotesti. Monet Samsung- ja operaattoriversiot estävät sen.

Jos koodi ei tee mitään, älä jää taistelemaan sen kanssa. Käytä alla olevia käsin tehtäviä testejä tai diagnostiikkasovellusta.

## Selvitä ensin, onko vika ohjelmistossa vai laitteistossa

Tämä vaihe voi säästää rahaa. Ohjelmistovirhe voi näyttää täsmälleen samalta kuin rikkoutunut osa.

Vikasietotila eli Safe Mode on ensimmäinen suodatin. Pidä virtapainiketta painettuna, kunnes virtavalikko avautuu, ja paina sitten pitkään Power off, kunnes Safe Mode -kehote tulee näkyviin. Joissakin puhelimissa painikeyhdistelmä on erilainen, mutta tavoite on sama: käynnistä Android niin, että kolmannen osapuolen sovellukset ovat poissa käytöstä.

Jos ongelma katoaa vikasietotilassa, syynä on todennäköisesti kolmannen osapuolen sovellus. Poista hiljattain asennetut sovellukset yksi kerrallaan ja käynnistä puhelin normaalisti jokaisen poiston jälkeen. Jos ongelma jatkuu myös vikasietotilassa, syy on Android-järjestelmässä, OEM-laiteohjelmistossa tai laitteistossa.

Tehdasasetusten palautus on viimeinen ohjelmistotesti. Varmuuskopioi tiedot ensin. Jos ongelma jatkuu puhtaan palautuksen jälkeen ilman palautettuja sovelluksia, laitteistovika on paljon todennäköisempi.

Etsi toistuvia kuvioita. Aina täsmälleen samassa kohdassa oleva kosketuksen kuollut alue viittaa näyttöön tai digitointikerrokseen. Puhelin, joka sammuu 20 %:n kohdalla mutta toimii laturissa, viittaa akkuun. Pudotuksen jälkeen surisemaan alkanut kamera voi kärsiä tarkennus- tai OIS-moduulin vauriosta. Jos puhelin muuttui epävakaaksi heti suuren päivityksen, kuten Pixelin Android 17 -päivityksen jälkeen, asenna korjaukset ja testaa uudelleen ennen kuin epäilet emolevyvikaa.

## Miksi laitteisto rikkoutuu

Akut kuluvat. Se kuuluu litiumioniakkujen kemiaan. Google suosittelee Pixel-akun vaihtamista, kun kapasiteettia on jäljellä alle 80 % tai mallikohtainen lataussykliraja on saavutettu. Pixel 3:sta Pixel 8 Prohon sekä Pixel Fold on mitoitettu noin 800 lataussykliin, kun taas Pixel 8a ja uudemmat noin 1 000 sykliin.

Portit ja painikkeet kuluvat käytössä. USB-C-porttiin kerääntyy taskunöyhtää, etenkin jos puhelin kulkee taskussa. Painikkeiden tuntuma heikkenee tuhansien painallusten jälkeen. Kaiutinritilät tukkeutuvat niin hitaasti, ettei muutosta välttämättä huomaa ennen kuin puhelut alkavat kuulostaa vaimeilta.

Pudotukset aiheuttavat oudompia vikoja. Puhelin voi selvitä ilman säröä lasissa, vaikka sisäinen liitin olisi löystynyt, kameramoduuli vaurioitunut, runko vääntynyt tai juotos heikentynyt. Vesi on pahempi, koska korroosio voi tulla näkyviin vasta päivien tai viikkojen kuluttua.

Kuumuus nopeuttaa lähes kaikkea kulumista. Lataaminen suorassa auringonpaisteessa, pelaaminen latauksen aikana tai puhelimen jättäminen kuumaan autoon voi vanhentaa akkua nopeammin ja käynnistää lämpötilasta johtuvan suorituskyvyn rajoittamisen eli thermal throttlingin. Pitkään jatkuva yli noin 40 °C:n akun lämpötila kannattaa ottaa vakavasti.

Myös valmistusvaihtelu on todellista. Kaksi samalla mallinimellä myytävää puhelinta ei käyttäydy täysin samalla tavalla. Pienet erot piireissä, lämmönsiirrossa, näyttöpaneeleissa, anturien kalibroinnissa, modeemin laiteohjelmistossa ja alueversioissa voivat muuttaa akunkestoa, lämpöä, signaalia ja vertailutuloksia. Se ei tarkoita automaattisesti, että toinen yksilö olisi viallinen. Verkossa näkyvät luvut ovat vaihteluvälejä, eivät lupauksia.

## Testaa akku

Aloita tiedoista, jotka oma puhelimesi näyttää.

Pixel 8a:ssa ja uudemmissa polku on Asetukset > Akku > Akun kunto. Näkymä kertoo, onko akun tila Normaali vai Heikentynyt, ja Akun kapasiteetti näyttää arvion jäljellä olevasta kapasiteetista alkuperäiseen verrattuna. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 ja Pixel 8 Pro eivät näytä samaa akun kuntotilaa.

Samsungissa käytä Samsung Membersin vianmääritystä. Avaa Pyydä apua > Näytä testit ja valitse akkutesti. Sanamuoto voi vaihdella alueen, mallin ja ohjelmistoversion mukaan, mutta Members-sovellus on turvallisempi reitti kuin satunnaiset akkukoodit.

OnePlus-, OPPO-, realme-, Xiaomi- ja muiden valmistajien puhelimissa etsi tietoja kohdasta Settings > Battery tai valmistajan laitehuoltosovelluksesta. Osa näyttää akun kunnon, osa ei. Androidin akkutietojen esitystapa on edelleen epäyhtenäinen.

Akku on epäilyttävä, jos puhelin tyhjenee nopeasti kevyessä käytössä, sammuu 15-20 %:n kohdalla, kuumenee ladattaessa tai takakansi tai näyttö alkaa pullistua. Lopeta turvonneen puhelimen käyttö ja vie se huoltoon. Se ei ole ohjelmisto-ongelma.

## Testaa näyttö ja kosketuskerros

Kuolleita pikseleitä voi etsiä näyttämällä koko ruudulla valkoisen, mustan, punaisen, vihreän ja sinisen kuvan. Käy näyttö hitaasti läpi. Kuollut pikseli pysyy mustana. Jumiutunut pikseli palaa aina samalla värillä. OLED-palamajälki näkyy helpoimmin tasaisen harmaalla taustalla keskitason kirkkaudella.

Testaa kosketus piirtosovelluksella vetämällä tiheitä vaaka- ja pystyviivoja koko näytön yli. Viivan katkeaminen paljastaa kuolleen alueen. Voit myös ottaa Developer Options -asetukset käyttöön, valita Show taps tai Pointer location ja vetää sormea koko paneelin yli.

Samsungin `*#0*#`-valikossa on näyttö- ja kosketustestejä monissa Galaxy-malleissa. Pixel Diagnostics, Motorola Device Help ja Xiaomi CIT voivat myös testata näyttöä ja kosketusta tuetuissa laitteissa.

## Testaa kaiuttimet ja mikrofonit

Toista ensin soittoääni ja sen jälkeen tuttu kappale tai video. Kuuntele särinää, vääristymää tai sitä, kuuluuko toinen stereokanava selvästi toista hiljempaa. Peitä yksi kaiutin kerrallaan sormella, jotta erotat korvakaiuttimen puhelimen alareunan kaiuttimesta stereopuhelimessa.

Tee mikrofonitesti tallentamalla lyhyt puhenäyte käsivarren etäisyydeltä ja kuuntelemalla se. Testaa sitten oikea puhelu. Puheluäänessä käytetään melunvaimennusta ja verkkokäsittelyä, joten tallenne voi kuulostaa hyvältä, vaikka puhelut kuulostaisivat huonoilta.

Irrota suojakuori, katkaise Bluetooth-laitteiden yhteydet, puhdista kaiutin- ja mikrofoniaukot kuivalla pehmeällä harjalla ja tarkista testisovelluksen mikrofonilupa ennen kuin syytät laitteistoa.

## Testaa kamerat

Avaa kamerasovellus ja kokeile jokaista puhelimen kameraa: takakameran laajakulmaa, ultralaajakulmaa, telekameraa, mahdollista makrokameraa ja etukameraa. Tarkkaile jatkuvaa tarkennuksen hakemista, paikallaan pysyviä sumeita kohtia, värivirhettä, videon tärinää tai tarkennuksen aikana kuuluvia napsahduksia.

Optinen kuvanvakain voi rikkoutua pudotuksessa. Oire on usein selvä: video tärisee, vaikka kädet pysyvät vakaana, tai kamera surisee. Ohjelmisto voi vaikuttaa kuvankäsittelyyn, mutta se ei korjaa fyysisesti löystynyttä vakautusmoduulia.

## Testaa lataus ja portit

Kokeile varmasti toimivaa kaapelia ja laturia ennen kuin syytät puhelinta. Tämä kuulostaa alkeelliselta, mutta yllättävän moni "rikkinäinen USB-C-portti" on oikeasti viallinen kaapeli.

Tarkista portti valolla. Taskunöyhtä voi pakkautua pohjalle niin, ettei liitin mene täysin paikalleen. Käytä varovasti puista tai muovista hammastikkua tai matalapaineista ilmaa. Älä raavi liittimiä metallilla.

Jos puhelin latautuu vain tietyssä kulmassa, yhteys katkeaa liikuttaessa tai tiedonsiirto ei toimi usealla eri kaapelilla, portti tai puhelimen alaosan piirilevy voi tarvita korjausta.

## Testaa anturit

Anturiviat näkyvät hyvin tarkkoina ongelmina: automaattinen näytön kierto lakkaa toimimasta, näyttö jää päälle puhelun aikana, kompassi osoittaa väärään suuntaan tai automaattinen kirkkaus reagoi liikaa.

Testaa kiihtyvyysanturi ja gyroskooppi poistamalla kierron lukitus ja kääntämällä puhelinta hitaasti. Näytön pitäisi seurata liikettä siististi. Panoraamakuvan ottaminen on myös kohtuullinen gyroskooppitesti, koska kuvien yhdistäminen perustuu liikkeen seurantaan.

Testaa lähestymisanturi soittamalla puhelu ja peittämällä näytön yläosa kuulokkeen läheltä. Näytön pitäisi sammua ja syttyä uudelleen, kun poistat käden. Irrota suojakuori ja näytönsuoja ennen kuin päätät anturin olevan rikki.

Ota automaattinen kirkkaus käyttöön ja siirry valoisasta paikasta hämärään testataksesi valoanturia. Näytön pitäisi mukautua muutamassa sekunnissa.

Avaa magnetometrin testaamista varten Maps tai kompassisovellus ulkona, kaukana autoista, kannettavista tietokoneista, magneeteista ja metallipöydistä. Jos suunta on väärä, kalibroi anturi liikuttamalla puhelinta kahdeksikon muotoista rataa.

Samsungin `*#0*#`-valikko ja Samsung Members voivat testata antureita. Pixel Diagnostics, Motorola Device Help ja Xiaomi CIT saattavat sisältää vastaavat testit mallista riippuen.

## Testaa verkkolaitteisto

Antenni- ja radio-ongelmia on vaikeampi todistaa, koska operaattorin verkko muuttuu jatkuvasti. Vertaa puhelinta toiseen saman verkon laitteeseen samassa paikassa ja samaan aikaan.

Signaalin voimakkuus näkyy yleensä dBm-arvona tila- tai SIM-tiedoissa. Asteikko on negatiivinen, joten lähempänä nollaa oleva arvo on parempi. Noin -50 dBm on erinomainen, -90 dBm käyttökelpoinen ja -110 dBm tai heikompi huono. Luvut tarkoittavat eri asioita LTE:ssä, 5G:ssä ja Wi-Fi-verkossa, joten käytä niitä vertailuun, älä yleisenä hyväksytty/hylätty-rajana.

Jos puhelin katkaisee Wi-Fi-yhteyden muiden laitteiden pysyessä verkossa, testaa sitä reitittimen lähellä, toisessa Wi-Fi-verkossa ja Bluetooth pois käytöstä. Jos sama puhelin epäonnistuu kaikkialla, radiolaitteisto tai laiteohjelmisto on todennäköisempi syy.

runcheck auttaa tässä yhdistämällä akun, lämpötilan, verkon, tallennustilan ja nopeustestin tiedot samaan tarkistukseen. Se on hyödyllistä pudotuksen, kuumenemisen tai vesivahingon jälkeen, kun useat oireet voivat mennä päällekkäin.

## Milloin puhelin kannattaa korjata

Korjaus on järkevä, kun ongelma toistuu, jatkuu vikasietotilassa ja puhtaan tehdasasetusten palautuksen jälkeen sekä näkyy valmistajan diagnostiikassa tai käsin tehdyssä testissä.

Älä vaihda osia siksi, että yksi sovellus käyttäytyi kerran huonosti. Huollata puhelin, jos akku on turvonnut, latausportti on fyysisesti löysä, kosketus pettää aina samassa kohdassa, kamera surisee pudotuksen jälkeen tai mikrofonit eivät toimi tallenteissa eivätkä puheluissa.

## Usein kysyttyä

### Ovatko diagnostiikkakoodit turvallisia?

Tässä luetellut tavalliset testivalikot ovat enimmäkseen vain tietoja näyttäviä tai käyttäjän ohjaamia laitteistotestejä. Älä silti syötä satunnaisia internetistä löytyviä koodeja. Osa valmistajien koodeista voi muuttaa radioasetuksia tai käynnistää huoltotoimintoja.

### Miksi `*#*#4636#*#*` ei toimi?

Koodia ei ole standardoitu koko Androidille. Se toimii monissa Androidin vähän muokatuissa versioissa, mutta Samsung, operaattori tai valmistajan laiteohjelmisto voi estää sen.

### Kuinka usein laitteisto kannattaa testata?

Muutaman kuukauden välein riittää tavalliseen ylläpitoon. Testaa heti kovan pudotuksen, vesialtistuksen, äkillisen akun tyhjenemisen tai latausongelman jälkeen sekä ennen käytetyn puhelimen ostamista tai myymistä.

### Onko hidas puhelin aina laitteistovika?

Ei. Aloita vikasietotilasta, vapaasta tallennustilasta sekä sovellus- ja järjestelmäpäivityksistä. Jos hitaus jatkuu tehdasasetusten palautuksen jälkeen, laitteisto, tallennusmuistin kuluminen, heikko akku tai lämpötilasta johtuva suorituskyvyn rajoittaminen ansaitsee tarkemman tutkimisen.
