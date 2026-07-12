---
title: "Puhelimen akku tyhjenee yön aikana: syyt ja korjaukset"
description: "Menet nukkumaan, kun akkua on 62 %, ja herätessä jäljellä on 41 %, vaikka puhelin on ollut koko yön näyttö alaspäin. Se tuntuu väärältä, koska se on väärin. Pieni yön aikainen lasku on normaali, mutta 20 prosenttiyksikön pudotus tarkoittaa, että puhelin on tehnyt töitä yön aikana."
listSummary: "akku, virrankulutus ja vianetsintä"
hub: "battery"
sourceNumber: 23
order: 13
subgroup: "Virrankulutus"
tags: ["akku","virrankulutus","vianetsintä","android","suorituskyky"]
locale: "fi"
draft: false
---
Hyväkuntoisessa Android-puhelimessa 2-5 %:n kulutus yön aikana on tylsän normaali tulos. Puhelin pitää mobiiliyhteyttä yllä, kuuntelee ilmoituksia, synkronoi joitakin tilitietoja ja suorittaa pieniä ylläpitotehtäviä. Kun varausta katoaa yli 10 % yö toisensa jälkeen, sitä ei enää kannata pitää tavallisena taustakulutuksena.

## Tarkista ensin akun käyttönäkymä

Aloita kohdasta **Asetukset > Akku > Akun käyttö**. Pixelissä valitse **Näytä sovellusten mukaan**, jos näkymä ryhmittelee järjestelmän ja sovellusten kulutuksen. Samsungissa avaa akun asetukset kohdasta **Asetukset > Akku** tai mallista riippuen **Asetukset > Laitteen ylläpito > Akku**, ja tarkastele käyttögraafia tai sen lisätietoja. Nimet vaihtelevat, mutta etsit aina samaa asiaa: sovellusta, joka kulutti akkua tunteina, jolloin et käyttänyt puhelinta.

Älä jää kiinni yhteen poikkeavaan yöhön. Varmuuskopiointi, Play Kaupan päivitys, kuvien synkronointi tai järjestelmätehtävä voi aiheuttaa yhden ruman pudotuksen. Toistuvuus ratkaisee. Jos sama sovellus näkyy listan kärjessä joka aamu, etenkin taustakäytön vuoksi, se on ensimmäinen epäilty.

Järjestelmämerkintöjä on vaikeampi tulkita. **Google Play Palvelut**, **Android-järjestelmä** ja mobiiliverkon valmiustilaa kuvaava merkintä voivat peittää varsinaisen syyn, koska ne tekevät työtä muiden toimintojen puolesta. Jos Google Play Palvelut kuluttaa paljon, tarkista tilien synkronointi, sijainti, push-ilmoitukset, Google Kuvat ja jumittunut Google-tili. Jos mobiiliverkon valmiustila on korkealla, epäile signaalia.

## Testaa radio ennen kymmenen asetuksen muuttamista

Heikko signaali jää helposti huomaamatta yön aikaisen kulutuksen syynä. Puhelin voi maata makuuhuoneen nurkassa yhden LTE- tai 5G-palkin varassa ja nostaa modeemin tehoa yhä uudelleen pysyäkseen verkossa. Myös Samsung mainitsee heikon tai epävakaan verkkoyhteyden akun tavallista nopeamman tyhjenemisen syynä.

Selkeä testi on yksinkertainen:

1. Lataa puhelin noin 80 %:iin.
2. Merkitse tarkka varaustaso muistiin.
3. Ota lentotila käyttöön ennen nukkumaanmenoa. Jos Wi-Fi tai Bluetooth jää lentotilassa päälle, poista nekin käytöstä tämän testin ajaksi.
4. Tarkista varaustaso aamulla.

Jos varausta katoaa lentotilassa 1-3 %, mutta verkkoyhteydet päällä 12 %, syy ei todennäköisesti ole salaperäinen sovellus. Se on yhteys. Siirrä puhelin lähemmäs ikkunaa, käytä Wi-Fi-puheluita, jos operaattori tukee niitä, tai pidä lentotila yön ajan päällä silloin, kun et tarvitse puheluita.

Myös Wi-Fi voi aiheuttaa saman ongelman reitittimen kuuluvuusalueen reunalla. Puhelin, joka katkaisee yhteyden ja liittyy verkkoon uudelleen muutaman minuutin välein, herättää prosessorin ja radion joka kerta. Jos makuuhuone on katvealue, reitittimen sijoittaminen paremmin voi auttaa enemmän kuin sovellusten poistaminen.

## Aina päällä oleva näyttö kuluttaa vähän, kunnes se on päällä koko yön

Aina päällä oleva näyttö ei yleensä romahduta nykyaikaisen AMOLED-puhelimen akunkestoa, mutta ilmainen se ei ole. Samsung rajoittaa Always On Display -toimintoa myös virransäästötilassa. Kahdeksan tunnin aikana pienikin tuntikohtainen kulutus voi erottaa normaalin pudotuksen selvästi havaittavasta.

Samsungissa avaa **Asetukset > Lukitusnäyttö > Always On Display** ja valitse koko yön näyttämisen sijaan esimerkiksi **Näytä napauttamalla**, **Näytä aikataulun mukaan** tai ilmoituksiin sidottu näyttötapa, jos se on laitteessasi käytettävissä. Pixelissä avaa **Asetukset > Näyttö ja kosketus > Lukitusnäyttö** ja poista **Näytä aina aika ja tiedot** käytöstä.

Näytön herättävät ympäristötoiminnot ovat huomaamattomampia mutta salakavalampia. Jos näyttö syttyy jokaisesta ilmoituksesta, läheisestä liikkeestä tai yöpöydän tärähdyksestä, kulutus kasautuu. Poista ilmoituksista herättävät asetukset käytöstä, jos lukitusnäyttö syttyy jatkuvasti nukkuessasi.

## Rajoita sovelluksia, jotka eivät tarvitse yövuoroa

Android hallitsee taustatoimintaa aiempaa paremmin, mutta osa sovelluksista koettelee silti rajoja. Sosiaalisen median syötteet, ostos- ja uutissovellukset, sääwidgetit, sähköpostiohjelmat ja kuntosovellukset voivat kaikki herättää puhelimen näytön sammuttua.

Rajoita yksittäisiä sovelluksia sen sijaan, että pakottaisit kaiken sulkeutumaan. Sovellusten pyyhkiminen pois viimeksi käytettyjen näkymästä ei ole akunhoitomenetelmä. Android hallitsee muistia ja taustatilaa itse, ja kaikkien sovellusten sulkeminen voi vain pakottaa ne latautumaan myöhemmin uudelleen.

Pixelissä ja muissa lähellä vakio-Androidia olevissa puhelimissa avaa **Asetukset > Sovellukset > [sovelluksen nimi] > Sovelluksen akunkäyttö**. Uudemmissa versioissa näkyvissä voi olla **Salli käyttö taustalla** ja optimoitu asetus, kun taas vanhemmissa Android-versioissa vaihtoehdot olivat esimerkiksi **Rajoittamaton**, **Optimoitu** ja **Rajoitettu**. Tavoite on sama: estä tarpeettomia sovelluksia toimimasta vapaasti taustalla.

Samsungissa avaa **Asetukset > Akku > Taustakäytön rajoitukset** tai mallista riippuen sama kohta Laitteen ylläpidon kautta. Lisää yöllä tarpeettomat sovellukset **Lepotilassa oleviin sovelluksiin** tai **Syvässä lepotilassa oleviin sovelluksiin**. Samsungin mukaan syvässä lepotilassa oleva sovellus toimii vain, kun se avataan. Se sopii peleille, ostossovelluksille ja satunnaisille apuohjelmille.

Ole varovainen viesti-, herätys-, kalenteri- ja turvallisuussovellusten kanssa. Liian tiukka rajoitus voi viivästyttää ilmoituksia, jotka todella haluat saada.

## Synkronointi, varmuuskopiointi ja sijainti kuluttavat hiljaa

Kolmea Google-tiliä käyttävä puhelin tekee taustalla enemmän työtä kuin yhtä tiliä käyttävä. Gmaililla, Kalenterilla, Yhteystiedoilla, Drivella, Kuvilla ja sovellustiedoilla on kaikilla omat synkronointitoimintonsa. Google mainitsee jopa käyttämättömien tilien poistamisen akunsäästökeinona, joten kyse ei ole kuvitellusta ongelmasta.

Avaa puhelimesta tilien hallinta, joka voi olla nimeltään esimerkiksi **Salasanat ja tilit**, **Tilit** tai **Tilit ja varmuuskopiointi**. Etsi synkronointivirheitä, toistuvia kirjautumispyyntöjä ja palveluita, joita et tarvitse. Vanha työtili, jonka synkronointi epäonnistuu koko yön, on klassinen kulutuksen lähde.

Google Kuvat ansaitsee oman maininnan. Varmuuskopiointi toimii yleensä älykkäämmin kuin moni olettaa ja voi keskeytyä akun säästämiseksi näytön ollessa pois päältä. Kuvien ja videoiden varmuuskopiointi voi silti kuluttaa paljon silloin, kun se on aktiivinen. Jos kulutus alkoi suuren kuvaerän jälkeen, tarkista Kuvien varmuuskopiointiasetukset ennen kuin syytät akkua.

Sijainnissa toistuu sama kuvio. Avaa **Asetukset > Sijainti > Sovellusten sijaintioikeudet** ja tarkista sovellukset, joilla on lupa käyttää sijaintia aina. Sää-, perheseuranta-, kuntoilu-, kuljetus- ja automaatiosovellukset ovat tavallisia tapauksia. Vaihda tarpeettomien sovellusten oikeudeksi **Salli vain käytön aikana**.

## Anna päivitykselle hieman aikaa, mutta älä loputtomasti

Järjestelmäpäivityksen jälkeen puhelin voi käyttää tavallista enemmän aikaa sovellusten optimointiin, välimuistien rakentamiseen, sovelluspäivitysten lataamiseen ja taustakäyttäytymisen uudelleen oppimiseen. Lämmin puhelin ja heikompi akunkesto ensimmäisen päivän tai kahden ajan suuren päivityksen jälkeen eivät ole järkytys. Google julkaisi Android 17:n 16. kesäkuuta 2026 useimmille tuetuille Pixel-laitteille, ennen kuin vakaa versio ehti laajemmin muiden valmistajien laitteisiin.

Viikon kuluttua tämä selitys ei enää riitä.

Jos yön aikainen kulutus alkoi heti päivityksen jälkeen eikä tasaantunut, tarkista sovelluspäivitykset Play Kaupasta, käynnistä puhelin uudelleen ja tutki akun käyttöä uudestaan. Samsung dokumentoi koko välimuistiosion tyhjentämisen palautusvalikosta yhtenä vianmääritysvaihtoehtona. Pixelissä ja monissa uudemmissa A/B-päivityksiä käyttävissä laitteissa vanhaa välimuistiosion valintaa ei välttämättä ole, joten älä etsi loputtomasti valikkoa, jota puhelimessasi ei ole.

## Milloin itse akku on ongelma

Kulunut akku saa jokaisen kulutusluvun näyttämään pahemmalta. Puhelin voi käyttää yön aikana saman energiamäärän kuin ennenkin, mutta se muodostaa nyt suuremman osan jäljellä olevasta kapasiteetista.

Pixel 8a:ssa ja uudemmissa tarkistuspolku on **Asetukset > Akku > Akun kunto**. Googlen nykyisten Pixel-ohjeiden mukaan tila **Heikentynyt** tarkoittaa, että kapasiteettia on jäljellä alle 80 %. Google suosittelee vaihtoa alle 80 %:ssa tai akun nimellisen lataussyklimäärän täytyttyä. Vanhemmat Pixelit, mukaan lukien Pixel 8 Pro ja sitä vanhemmat, eivät näytä samaa akun kuntotilaa.

Samsungissa avaa **Samsung Members > Tuki > Puhelimen vianmääritys > Akun tila**. Tuloksena näkyy esimerkiksi **Normaali**, **Heikko** tai **Huono**, ei välttämättä siistiä prosenttilukua. Se ei ole yhtä tyydyttävää, mutta on silti parempi kuin arvaaminen.

Älä luota akun kunnon arvioinnissa numeronvalintakoodeihin. Piilotettuja valikoita löytyy joistakin puhelimista, mutta niiden toiminta vaihtelee valmistajan, operaattorin ja Android-version mukaan. Kuluttajalle valmistajan oma diagnostiikka on turvallisempi neuvo.

## Kolmen yön eristystesti

Jos syy ei vieläkään selviä, älä muuta viittätoista asiaa kerralla. Tee tämä testi.

Yö 1: lentotila päällä, Wi-Fi ja Bluetooth pois päältä. Jos kulutus putoaa alle 3 %:iin, syy liittyy radioihin tai verkkoyhteyttä käyttäviin sovelluksiin.

Yö 2: verkkoyhteydet normaalisti, aina päällä oleva näyttö ja ilmoituksista herääminen pois päältä. Jos kulutus vähenee, lukitusnäyttö oli osa ongelmaa.

Yö 3: verkkoyhteydet normaalisti, virransäästö yöksi päälle. Jos kulutus vähenee, todennäköinen syy on taustasovellus, synkronointi tai sijainti.

Siinä kaikki. Tarkoitus on erotella verkko, näyttö ja taustatyö toisistaan arvaamisen sijaan.

## Nopeat vastaukset

### Onko 5 %:n kulutus yön aikana normaalia?

Kyllä. Kun Wi-Fi, mobiiliverkon valmiustila, ilmoitukset ja muutaman tilin synkronointi ovat käytössä, 3-5 % on hyvä tulos. Alle 3 % on erinomainen. Yli 10 % joka yö vaatii lähempää tutkimista.

### Kannattaako puhelin sammuttaa yöksi?

Vain jos et tarvitse puheluita, ilmoituksia tai puhelimen päälläolosta riippuvia herätyksiä. Lentotila antaa suuren osan akkuhyödystä ja jättää herätyskellon käyttöön.

### Säästääkö Älä häiritse -tila akkua?

Hieman, jos ilmoitukset sytyttäisivät muuten näytön. Älä häiritse -tila ei itsessään estä sovelluksia synkronoimasta tai tekemästä taustatyötä.

### Voiko haittaohjelma tyhjentää akkua yön aikana?

Voi, mutta se ei ole ensimmäinen selitys puhelimessa, johon sovellukset asennetaan vain Play Kaupasta. Jos kulutukseen liittyy ponnahdusikkunoita, tuntemattomia sovelluksia, outoja oikeuksia tai poikkeavaa datankäyttöä, suorita Play Kaupasta Play Protect -tarkistus ja testaa vikasietotilaa. Vikasietotila poistaa ladatut sovellukset käytöstä, joten suuri parannus viittaa kolmannen osapuolen sovellukseen.

Useimmilla yön aikaisilla kulutusongelmilla on tylsä syy: heikko signaali, lukitusnäytön toiminto, synkronointi, sijainti tai sovellus, joka ei suostu nukkumaan. Aloita niistä ennen kuin oletat puhelimen tarvitsevan korjausta.
