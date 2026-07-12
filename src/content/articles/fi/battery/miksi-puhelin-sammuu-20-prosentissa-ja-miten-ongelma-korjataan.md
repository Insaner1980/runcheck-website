---
title: "Miksi puhelin sammuu 20 %:ssa ja miten ongelma korjataan"
description: "Akkua on 22 %, avaat kameran ja näyttö pimenee. Kun kytket puhelimen laturiin, lukema onkin yhtäkkiä 18 % tai 24 %. Tuntuu siltä, että prosenttiluku valehtelee."
listSummary: "Akkua on 22 %, avaat kameran ja näyttö pimenee."
hub: "battery"
sourceNumber: 22
order: 12
subgroup: "Virrankulutus"
tags: ["akku","kalibrointi","vianetsintä","android","opas"]
locale: "fi"
draft: false
---
Tavallaan se valehteleekin. Näytön lukema on arvio, ja vanhan akun varaustasoa on vaikeampi arvioida.

## Tarkista tämä ensin

Tarkista akun kunto ennen kuin kokeilet kalibrointikikkoja.

Pixel 8a:ssa ja uudemmissa polku on **Asetukset > Akku > Akun kunto**. Pixel näyttää tilan **Normaali**, kun kapasiteetti on normaalin rajoissa, ja **Heikentynyt**, kun kapasiteettia on jäljellä alle 80 %. Lataussyklien määrä löytyy Pixel 8a:ssa ja uudemmissa kohdasta **Asetukset > Tietoja puhelimesta > Akun tiedot**.

Samsungissa avaa **Samsung Members > Tuki > Puhelimen vianmääritys > Akun tila**. Samsung ilmoittaa tulokseksi **Normaali**, **Heikko** tai **Huono**. Valikkojen nimet voivat vaihdella, mutta Samsung Members on valmistajan virallinen diagnostiikkareitti.

Muissa Android-puhelimissa tarkista ensin akun asetukset. Jos puhelimessa ei ole omaa akun kuntosivua, käytä esimerkiksi AccuBattery-diagnostiikkasovellusta ja anna sen kerätä tietoa useiden latauskertojen ajan. Yksi lukema yhden latauksen jälkeen ei riitä.

Alle 80 %:n kuntolukema yhdessä 20 %:ssa tapahtuvan sammumisen kanssa viittaa suoraan akkuun.

## Miksi prosenttiluku valehtelee

Android arvioi akun varaustason jännitteen, virran, lämpötilan ja akun oletettua käyttäytymistä kuvaavan mallin perusteella. Osa puhelimista seuraa lisäksi ajan mittaan akkuun tulevaa ja siitä lähtevää virtaa.

Malli toimii parhaiten kennon ollessa hyvässä kunnossa. Akun vanhetessa kapasiteetti pienenee ja sisäinen vastus kasvaa. Jännitekäyrä muuttuu. Puhelin voi edelleen tulkita 20 %:n tarkoittavan turvallista varaa, vaikka käytettävissä olevaa energiaa on todellisuudessa paljon vähemmän.

Virheet näkyvät ensin varaustason alapäässä. Keskialueella jännitekäyrä on melko tasainen, mutta lähellä tyhjää se jyrkkenee. Pieni jännitteen lasku kuormituksessa voi näyttää siltä, että varaus putosi yhtäkkiä jyrkänteeltä.

Siksi kamera, GPS, pelaaminen, videopuhelut ja 5G voivat laukaista sammumisen. Ne aiheuttavat lyhyitä tehopiikkejä. Hyväkuntoinen akku kestää piikin, mutta kuluneen akun jännite painuu puhelimen vähimmäiskäyttöjännitteen alle. Android sammuttaa laitteen sen suojaamiseksi.

## Miksi vanha akku sammuu liian aikaisin

Kuluneessa akussa on kaksi ongelmaa samaan aikaan.

Ensinnäkin siihen mahtuu vähemmän varausta. 5 000 mAh:n akku, jonka kunto on 80 %, varastoi noin 4 000 mAh. Kun kunto on 70 %, määrä on noin 3 500 mAh. Prosenttinäyttö voi vaikuttaa normaalilta, mutta jokaisen prosenttiyksikön taustalla on vähemmän todellista kapasiteettia.

Toiseksi akun sisäinen vastus on suurempi. Jännite laskee siis enemmän, kun puhelin pyytää virtaa. Siksi vanha puhelin voi pysyä rauhallisesti 25 %:ssa aloitusnäytöllä ja sammua heti, kun avaat kameran.

Kylmä pahentaa tilannetta. Litiumioniakun kemialliset reaktiot hidastuvat kylmässä, joten akku ei pysty luovuttamaan virtaa yhtä helposti. Puhelin, joka pysyy sisällä päällä 20 %:ssa, voi sammua ulkona samalla varaustasolla.

Kuumuus vaikuttaa eri tavalla. Se ei yleensä yksin aiheuta välitöntä sammumista 20 %:ssa, mutta nopeuttaa ongelman taustalla olevaa akun vanhenemista.

## Kalibrointi: mitä se voi korjata ja mitä ei

Akun kalibrointi ymmärretään usein väärin. Se ei palauta akun kapasiteettia. Se voi ainoastaan auttaa puhelimen ohjelmistoa arvioimaan jäljellä olevan varauksen tarkemmin.

Jos akun kunto vaikuttaa kohtuulliselta ja sammumiset alkoivat ohjelmistopäivityksen, akun vaihdon tai pitkään jatkuneen epätavallisen latauskäyttäytymisen jälkeen, yksi kalibrointikerta voi olla perusteltu. Tämä koskee myös tuettujen Pixel-laitteiden Android 17 -päivitystä: älä oleta akun rikkoutuneen vain siksi, että ongelma alkoi suuren päivityksen aikaan. Käytä puhelinta, kunnes se sammuu itsestään. Lataa se keskeytyksettä 100 %:iin ja jätä laturiin vielä 30-60 minuutiksi. Käytä sitä sen jälkeen normaalisti.

Älä tee täydestä tyhjentämisestä tapaa. Toistuva tyhjentäminen nollaan rasittaa litiumioniakkua enemmän kuin matalammat latausjaksot.

Jos kalibrointi auttaa, näytetyn prosenttiluvun pitäisi käyttäytyä tasaisemmin muutaman seuraavan lataussyklin aikana. Jos puhelin sammuu yhä 20 %:ssa tai raja nousee 30 %:iin, kenno on todennäköisesti liian kulunut ohjelmistolla peitettäväksi.

## Milloin syy on ohjelmistossa

Joskus laitteiston kuluminen ei selitä kaikkea. Häiriöilevä sovellus voi pitää wake lock -lukituksia aktiivisina, estää CPU:ta nukkumasta tai käynnistää verkko- ja sijaintitoimintoja huonoina hetkinä. Lisäkuorma voi sysätä heikon akun jänniterajan yli.

Avaa **Asetukset > Akku > Akun käyttö**. Jos jokin sovellus käyttää paljon akkua taustalla, rajoita sitä tai poista se päiväksi ja testaa uudelleen.

Vikasietotilasta on hyötyä, jos puhelin on melko uusi ja akun kuntolukema näyttää normaalilta. Vikasietotila poistaa kolmannen osapuolen sovellukset käytöstä. Jos sammumiset loppuvat siellä, syy on jokin asennettu sovellus.

Tehdasasetusten palautus voi korjata rikkoutuneen varaustason arvioinnin tai ohjelmistosilmukan, mutta se on raskas keino. Tee ensin varmuuskopio. Testaa puhelinta palautuksen jälkeen ennen kuin palautat kaikki sovellukset ja asetukset varmuuskopiosta. Kaiken palauttaminen heti voi tuoda saman ongelman takaisin.

## Yleisiä kysymyksiä

Miksi puhelin käynnistyy laturiin kytkemisen jälkeen suuremmalla prosenttiluvulla? Heikon akun jännite laskee jyrkästi kuormituksessa. Kun laturi kytketään, se syöttää virtaa ja akun jännite palautuu. Akku ei saanut sekunnissa suurta määrää varausta. Jännitelukema vain tasaantui.

Kannattaako puhelinta pitää laturissa, jotta se ei sammu 20 %:ssa? Yksittäisessä hätätilanteessa kyllä. Päivittäisenä kiertotienä ei. Jos puhelimeen ei voi luottaa alle 25 %:n varaustasolla, akku vaatii huomiota.

Voiko akkusovellus korjata ongelman? Mikään sovellus ei korjaa kemiallista kulumista. Hyvä sovellus voi auttaa arvioimaan akun kuntoa ja näyttämään toistuvia kuvioita. Se ei rakenna kennoa uudelleen.

Kun puhelin sammuu näytön mukaan runsaalla varauksella, syynä on yleensä vanha kenno, virheellinen varaustason arvio tai molemmat. Tarkista kunto ensin, kalibroi vain perustellusta syystä ja vaihda akku, kun merkit viittaavat siihen.
