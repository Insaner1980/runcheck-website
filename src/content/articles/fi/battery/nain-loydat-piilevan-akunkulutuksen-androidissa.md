---
title: "Näin löydät piilevän akunkulutuksen Androidissa"
description: "Miksi akun käyttönäkymä syyttää Android-järjestelmää tai Google Play Palveluita, vaikka todellinen syy on luultavasti sovellus, synkronointisilmukka, sijainti tai modeemi? Koska nämä järjestelmämerkinnät tekevät usein työtä muiden toimintojen puolesta. Ärsyttävää, kyllä. Hyödytöntä, ei."
listSummary: "akku, virrankulutus ja vianetsintä"
hub: "battery"
sourceNumber: 25
order: 15
subgroup: "Virrankulutus"
tags: ["akku","virrankulutus","vianetsintä","android","suorituskyky"]
locale: "fi"
draft: false
---
Piilevän akunkulutuksen selvittämisessä etsitään ennen kaikkea sitä, mikä pitää puhelimen hereillä näytön ollessa pois päältä.

## Aloita tylsästä näkymästä

Avaa ensin **Asetukset > Akku > Akun käyttö**. Pixelissä voit vaihtaa sovellus- ja järjestelmänäkymän välillä, jos vaihtoehto on käytettävissä. Samsungissa avaa akun käyttötiedot kohdasta **Asetukset > Akku** tai mallista riippuen **Asetukset > Laitteen ylläpito > Akku**. Xiaomi, OnePlus, Motorola ja muut valmistajat käyttävät eri nimiä, mutta kaikissa on jonkinlainen sovellusten käyttölista.

Etsi kolmea kuviota:

1. Sovellus käyttää paljon akkua taustalla mutta vain vähän aktiivisessa käytössä.
2. Järjestelmämerkintä pysyy korkealla usean lataussyklin ajan.
3. Akun graafi laskee aikana, jolloin näytön piti olla sammuksissa ja puhelimen levossa.

Yksi huono tulos pitkän Google Kuvat -varmuuskopioinnin tai Play Kaupan päivityksen jälkeen ei riitä. Kolme samanlaista tulosta peräkkäin on jo kuvio.

## Tarkista, nukkuuko puhelin oikeasti

Androidin Doze-tila vähentää taustatyötä, kun puhelin ei ole latauksessa, se on käyttämättömänä ja paikallaan. Se siirtää tehtäviä ja synkronointeja myöhemmäksi, rajoittaa verkkoyhteyttä ja kokoaa ylläpitotyötä erillisiin jaksoihin. Sovellukset voivat saada rajattuja poikkeuksia, ja korkean prioriteetin ilmoitukset voivat herättää laitteen hetkeksi, mutta nukkuvan puhelimen pitäisi tehdä pitkiä aikoja hyvin vähän.

Jos akun graafi laskee tasaisesti yön aikana tai puhelin tuntuu lämpimältä yöpöydällä, jokin rikkoo tämän rauhallisen tilan.

Joissakin Android-versioissa akun graafi näyttää **Awake**-merkinnän tai vastaavan aikajanan. Jos **Awake** on aktiivisena pitkään mutta **Screen on** ei, siinä on johtolanka. Monissa One UI -versioissa Samsung näyttää graafin alla vastaavia ohuita tilapalkkeja.

Eikö palkkia näy? Siirry seuraavalle tasolle.

## Kokeile vikasietotilaa ennen kuin syytät akkua

Vikasietotilaa aliarvioidaan. Se poistaa ladatut sovellukset tilapäisesti käytöstä ja jättää järjestelmän ydintoiminnot käyntiin. Jos yön aikainen kulutus lähes katoaa vikasietotilassa, laitteisto ei todennäköisesti ole ongelman syy.

Tarkka käynnistystapa vaihtelee. Monissa Android-puhelimissa avataan virtavalikko ja painetaan pitkään **Virta pois** -vaihtoehtoa, kunnes vikasietotilan kehote tulee näkyviin. Google käyttää vikasietotilaa ongelmallisten sovellusten löytämiseen, ja Samsung kuvaa sitä diagnostiikkatilaksi, joka poistaa useimmat kolmannen osapuolen sovellukset käytöstä.

Jos kulutus on vakavaa, tee yksi yön yli kestävä testi vikasietotilassa. Älä käytä puhelinta siinä viikkoa. Jos kulutus paranee, poista tai rajoita ensin äskettäin asennettuja ja päivitettyjä sovelluksia.

## Kehittäjäasetukset voivat näyttää, mikä on aktiivisena juuri nyt

Monissa Android-puhelimissa kehittäjäasetukset saa käyttöön avaamalla **Asetukset > Tietoja puhelimesta** ja napauttamalla **Koontiversion numero** -kohtaa seitsemän kertaa. Avaa sen jälkeen kehittäjäasetukset. Niiden tarkka sijainti vaihtelee puhelimittain.

Kehittäjäasetusten käynnissä olevien palveluiden näkymä näyttää hetkellisen kuvan palveluista, jotka käyttävät muistia ja joskus CPU:ta. Se ei ole täydellinen akkuraportti, mutta voi paljastaa selvän ongelman. Jos ostos-, taustakuva-, puhdistus- tai vanha kuntosovellus on käynnissä, vaikka et ole avannut sitä, asia kannattaa tarkistaa.

Myös **Standby apps**- tai **Inactive apps** -näkymä voi olla käytettävissä. Se näyttää, miten Android luokittelee sovellusten aktiivisuutta. Valikkoa ei ole kaikissa puhelimissa, ja valmistajat piilottavat sen joskus. Android-diagnostiikan kitka on juuri tässä: työkalut ovat olemassa, mutta puolet työstä on niiden löytäminen valmistajan valikoista.

## Käytä ADB:tä, kun tarvitset varmaa tietoa

ADB on selkein tapa tutkia wake lock -lukituksia ja akkuhistoriaa ilman root-oikeuksia. Työtä on enemmän, mutta arvaaminen vähenee.

Tarvitset tietokoneen, johon platform-tools on asennettu, sekä puhelimesta käyttöön otetun USB-vianetsinnän. Nollaa ensin nykyiset tilastot:

```bash
adb shell dumpsys batterystats --reset
```

Käytä puhelinta normaalisti tai jätä se yöksi keräämään lepotilan kulutusta. Vie raportti sen jälkeen tiedostoon:

```bash
adb shell dumpsys batterystats > batterystats.txt
```

Tiedosto on suuri. Etsi ensin näitä osioita:

- **Estimated power use**, joka sisältää sovelluskohtaisia tehoarvioita mAh-yksikköinä.
- **Wake locks**, joka näyttää CPU:ta hereillä pitäneitä sovelluksia.
- **Alarm Stats** tai muut hälytyksiin liittyvät osiot, jotka paljastavat laitteen toistuvasti herättävät sovellukset.
- **Mobile radio**- ja **Wi-Fi**-aktiivisuus, jos kulutus näyttää verkkoperäiseltä.

Googlen Batterystats- ja Battery Historian -ohjeet kuvaavat virallisen työnkulun. Batterystats kerää akkutietoa laitteesta, ja Battery Historian muuttaa järjestelmälokit HTML-aikajanaksi. Google huomauttaa nykyään, ettei Battery Historiania enää ylläpidetä aktiivisesti, ja suosittelee sovelluskehittäjille mahdollisuuksien mukaan uudempia profilointityökaluja. Tavalliselle käyttäjälle Battery Historian on joka tapauksessa liioittelua, mutta se voi yhä auttaa näkemään wake lock -lukitukset, radioiden aktiivisuuden, latauksen, näytön tilan ja varaustason yhdellä aikajanalla.

Jos haluat vain yhden komennon, käytä tätä:

```bash
adb shell dumpsys batterystats
```

Se ei nimeä syyllistä sovellusta selkokielellä kuin taikaiskusta. Se antaa tutkittavaa tietoa.

## Tavalliset piilevät syyt

**Google Play Palvelut** ei yleensä ole yksin varsinainen syyllinen. Se hoitaa push-ilmoituksia, sijaintirajapintoja, tilien synkronointia, lähilaitetoimintoja, sovelluspäivityksiä ja osia laitteen suojauksesta. Jos sen kulutus on suuri, tarkista Google-tilin synkronointivirheet, sijaintioikeudet, Google Kuvien varmuuskopiointi ja odottava Play Palveluiden päivitys.

Älä pakota Google Play Palveluita sulkeutumaan tai yritä poistaa niitä. Pixelin tuki toteaa suoraan, että palvelu on integroitu Androidiin. Tyhjennä tarvittaessa välimuisti, käynnistä puhelin uudelleen, päivitä sovellukset ja korjaa taustalla oleva tili- tai sijaintiongelma.

**Epäonnistuva tilisynkronointi** on tylsä mutta yleinen syy. Avaa puhelimen tilien hallinta, joka voi olla nimeltään esimerkiksi **Salasanat ja tilit**, **Tilit** tai **Tilit ja varmuuskopiointi**. Etsi varoituskuvakkeita, vanhoja työtilejä, vaihdettuja salasanoja ja palveluita, joiden synkronointi ei valmistu. Poista tili, jos et käytä sitä. Lisää se uudelleen, jos käytät.

**Heikko signaali** voi näyttää järjestelmän kulutukselta. Jos mobiiliverkon valmiustilan merkintä on korkealla, tee lentotilatesti yön yli. Samsung mainitsee heikon tai epävakaan verkkoyhteyden akun nopeamman tyhjenemisen syynä, ja oikeissa kodeissa se on usein koko selitys.

**Widgetit ja live-taustakuvat** unohtuvat helposti, koska ne ovat aloitusnäytöllä eivätkä sovellusvalikossa. Muutaman minuutin välein sijaintia päivittävä sääwidget on eri asia kuin staattinen kello. Poista äskettäin lisätyt widgetit päiväksi ja vertaa tulosta.

**Bluetooth-lisälaitteet** voivat myös jäädä yhteyssilmukkaan. Kellot, kuulokkeet, autojärjestelmät ja seurantalaitteet yrittävät joskus muodostaa yhteyttä yhä uudelleen. Jos kulutus alkoi uuden parituksen jälkeen, testaa yksi yö Bluetooth pois päältä.

## Milloin kannattaa epäillä laitteistoa

Ohjelmiston aiheuttama kulutus jättää yleensä vihjeitä: sovelluksen, wake lock -lukituksen, radioiden aktiivisuutta, CPU-kuorman aikaista lämpöä tai paremman tuloksen vikasietotilassa. Laitteistovika on sitkeämpi.

Muutama merkki viittaa siihen:

- Puhelin menettää suuren määrän varausta yön aikana myös lentotilassa.
- Vikasietotila ei paranna tilannetta.
- Puhelin on lämmin koskemattomana eikä ole latauksessa.
- Akun kunto on heikentynyt tai puhelin sammuu satunnaisissa prosenttilukemissa.

Pixel 8a:ssa ja uudemmissa tarkista **Asetukset > Akku > Akun kunto**. Googlen mukaan tila **Heikentynyt** tarkoittaa, että kapasiteettia on jäljellä alle 80 %. Samsungissa avaa **Samsung Members > Tuki > Puhelimen vianmääritys > Akun tila**.

Kolmannen osapuolen sovellus voi arvioida kapasiteettia, mutta älä pidä lukemaa laboratoriotason totuutena. Akun kuntoluvut ovat sotkuisia. Lämpötila, lataushistoria, kalibrointi ja mittausmenetelmä vaikuttavat arvioon.

## Mitä ei kannata tehdä

Älä asenna akunsäästösovellusta, joka lupaa korjata kaiken. Useimmat kopioivat Androidin omia toimintoja, näyttävät mainoksia ja ajavat omaa taustapalveluaan.

Älä tyhjennä jatkuvasti kaikkia sovelluksia viimeksi käytettyjen näkymästä. Android hallitsee niitä automaattisesti. Jos yksi sovellus käyttäytyy huonosti, käytä sille **Pakota lopetus** -toimintoa sovellusasetuksista ja päivitä, rajoita tai poista se.

Älä aloita tehdasasetusten palautuksesta. Se voi korjata vioittuneen sovellustilan ja vanhat asetukset, mutta vie aikaa eikä kerro, mikä kulutuksen aiheutti. Käytä sitä vasta, kun akun käyttönäkymä, vikasietotila, verkon nollaus ja sovellusrajoitukset eivät auta.

runcheck auttaa silloin, kun kuvio ylittää useita luokkia. Akunkulutus ja kuumuus viittaavat yhteen suuntaan. Akunkulutus ja heikko signaali toiseen. Akunkulutus yhdessä täyttyvän tallennustilan tai raskaan sovelluskäytön kanssa taas muualle. Korjaus osuu paremmin, kun diagnoosi ei perustu sokkona arvaamiseen.
