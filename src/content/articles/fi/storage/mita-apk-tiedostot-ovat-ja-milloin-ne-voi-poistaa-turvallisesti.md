---
title: "Mitä APK-tiedostot ovat ja milloin ne voi poistaa turvallisesti"
description: "Löytyikö Lataukset-kansiosta .apk-päätteinen tiedosto, josta et muista mitään? Useimmiten kyse on vain Android-sovelluksen asennustiedostosta, joka jäi puhelimeen sovelluksen asentamisen tai jakamisen jälkeen."
listSummary: "Löytyikö Lataukset-kansiosta .apk-päätteinen tiedosto, josta et muista mitään?"
hub: "storage"
sourceNumber: 84
order: 6
tags: ["tallennustila","android","siivous","optimointi","opas"]
locale: "fi"
draft: false
---
APK tulee sanoista Android Package Kit. Se on yksi Androidin käyttämistä sovelluspakettimuodoista. Siivouksen kannalta olennaista on tämä: Lataukset-kansiossa näkyvä APK-tiedosto ei ole puhelimessa toimiva sovellus. Se on asennuspaketti.

Kun sovellus on asennettu, jäljelle jääneen APK-tiedoston poistaminen ei poista sovelluksen asennusta eikä sen asetuksia.

## Mistä APK-tiedostot tulevat

Useimmat näkyvät APK-tiedostot ovat peräisin sivulatauksesta. Olet ehkä ladannut sovelluksen kehittäjän verkkosivulta, APKMirrorista, F-Droidista, yrityksen sisäisestä palvelusta tai muusta Google Playn ulkopuolisesta lähteestä. Asennuksen jälkeen tiedosto jää usein Lataukset-kansioon.

Myös viestisovellukset ovat tavallinen lähde. Joku lähettää APK-tiedoston WhatsAppilla, Telegramilla, sähköpostilla tai työpaikan viestipalvelussa. Saatat avata sen kerran tai olla asentamatta sitä lainkaan, ja tiedosto jää viemään tilaa.

Kehittäjät ja yrityskäyttäjät näkevät APK-tiedostoja tavallista useammin, koska testiversioita, yksityisiä sovelluksia ja sisäisiä päivityksiä jaetaan yhä erillisinä tiedostoina. Kehitystyössä se on normaalia. Tavallisen käyttäjän puhelimessa epämääräisesti nimetty satunnainen APK on paljon poikkeavampi löytö.

## Voiko APK-tiedostoja poistaa?

Kyllä, jos APK on tavallisessa käyttäjän tallennustilassa, kuten Lataukset- tai Documents-kansiossa, viestisovelluksen kansiossa tai tiedostonhallinnan asennustiedostoluokassa.

Tiedoston poistaminen poistaa vain asennuspaketin. Itse sovellus sijaitsee muualla, ja Android säilyttää sen tiedot erikseen. Jos poistat tiedoston `com.example.app.apk` Lataukset-kansiosta, asennettu sovellus ei välitä siitä.

Yksi suuri poikkeus on olemassa, mutta useimmat eivät kohtaa sitä. Poluissa kuten `/system/app/` tai `/system/priv-app/` olevat järjestelmän APK-tiedostot kuuluvat Androidiin tai valmistajan ohjelmistoon. Niitä ei tavallisesti voi edes nähdä tai muuttaa ilman root-oikeuksia. Älä koske niihin, ellet tiedä tarkalleen mitä olet tekemässä.

## Näin löydät APK-tiedostot

Avaa tiedostonhallinta. Monissa puhelimissa se on Files by Google, Samsung My Files, Xiaomi File Manager tai Motorolan Files-sovellus.

Aloita Lataukset-kansiosta. Hae sen jälkeen merkkijonolla `.apk`. Files by Googlessa näkyy monilla laitteilla myös asennustiedostojen luokka, joka on nopein reitti silloin, kun se on saatavilla.

Tarkista tiedoston nimi ennen poistamista. Nimi `Signal-Android-7.XX.apk` tai `app-release.apk` voi olla selvä, jos asensit sovelluksen juuri. Satunnainen merkkijono tai pakettinimi, kuten `com.company.name.apk`, vaatii hieman enemmän harkintaa.

Jos sovellus on jo asennettu etkä tarvitse asennustiedostosta varmuuskopiota, voit poistaa sen.

## APK ja AAB vuonna 2026

Google Play on siirtänyt tavallisen sovellusjakelun pitkälti pois kehittäjien lataamista APK-tiedostoista. Elokuusta 2021 lähtien uusien Google Play -sovellusten vakiomuoto on ollut Android App Bundle eli AAB. Google Play muodostaa siitä kullekin laitekokoonpanolle optimoidut APK-tiedostot, joten puhelin lataa vain tarvitsemansa koodin ja resurssit.

APK-tiedostot eivät silti ole kadonneet. Android asentaa APK-paketteja edelleen taustalla, ja kehittäjät käyttävät niitä testaukseen, yritysjakeluun sekä joihinkin Google Playn ulkopuolisiin sovelluksiin. Jos Lataukset-kansiosta löytyy irrallisia APK-tiedostoja, ne ovat lähes varmasti peräisin käsin tehdystä latauksesta, viestiliitteestä, varmuuskopiointityökalusta tai vanhemmasta työnkulusta.

## Kannattaako joitakin APK-tiedostoja säilyttää?

Joskus.

Säilytä APK, jos sitä vastaavaa sovellusta on vaikea ladata uudelleen. Tällainen voi olla alueellisesti rajattu sovellus, yksityinen työversio, tarkoituksella käytössä oleva vanha sovellusversio tai luotetusta lähteestä saatu avoimen lähdekoodin sovellus. Siirrä tiedosto silloinkin selkeästi nimettyyn kansioon, jotta tiedät myöhemmin, miksi se on siellä.

Poista muut. APK-tiedostot voivat olla pieniä, mutta pelien ja suurten sovellusten asentimet voivat viedä satoja megatavuja tai enemmän. Muutama vanha asennustiedosto ei merkitse paljon 512 Gt:n puhelimessa. 64 Gt:n laitteessa niitä kertyy nopeasti liikaa.

## Turvallisuus on tiedostokokoa tärkeämpi

APK-tiedostot eivät ole vaarallisia vain siksi, että ne ovat APK-tiedostoja. Riski riippuu lähteestä.

Luotetulta kehittäjältä, tunnetusta avoimen lähdekoodin ohjelmistovarastosta tai työnantajan hallinnoidusta sovellusjärjestelmästä saatu APK on eri asia kuin tuntemattoman lähettämä tai satunnaiselta keskustelupalstalta ladattu tiedosto. Muokatut, murretut tai "premium unlocked" -APK:t ovat tavallinen haittaohjelmien levitystapa. Pieni määrä vapautuvaa tallennustilaa ei ole tässä tärkein kysymys. Tilitietosi ovat.

Google Play Protect on oletusarvoisesti käytössä sertifioiduissa Android-laitteissa. Se tarkistaa sovelluksia asennuksen yhteydessä, tarkistaa laitteen säännöllisesti ja voi varoittaa haitalliselta vaikuttavasta sovelluksesta, poistaa sen käytöstä tai poistaa sen. Se voi myös pyytää lähettämään tuntemattoman sovelluksen Googlelle tarkistettavaksi. Suojasta on hyötyä, mutta se ei ole takuu.

Androidin sovellusjakeluun on tulossa myös muutos, joka kannattaa tuntea. 30. syyskuuta 2026 alkaen sovelluksen on oltava varmennetun kehittäjän rekisteröimä, jotta sen voi asentaa tai päivittää sertifioidussa Android-laitteessa Brasiliassa, Indonesiassa, Singaporessa ja Thaimaassa. Vaatimus koskee aluksi osallistuvien sovelluskauppojen asennuksia. Rekisteröimättömän sovelluksen voi edelleen sivuladata ADB:llä tai Googlen edistyneellä asennustavalla, ja maailmanlaajuinen käyttöönotto alkaa vuonna 2027. Tavallisen puhelimen käyttäjän käytännön neuvo ei muutu: älä säilytä tai asenna APK-tiedostoja lähteistä, joille et luottaisi puhelintasi.

## Tavallisia kysymyksiä

### Poistaako APK-tiedoston poistaminen sovelluksen?

Ei. APK on asennuspaketti. Sovellus pysyy asennettuna, kunnes poistat sen Asetuksista, aloitusnäytöltä tai Google Playsta.

### Miksi joillakin APK-tiedostoilla on outo nimi?

Selaimet, viestisovellukset ja kehitystyökalut eivät aina tallenna tiedostoa sovelluksen julkisella nimellä. Ne voivat käyttää sisäistä pakettinimeä tai satunnaista latausnimeä. Pelkkä nimi ei todista tiedostoa vaaralliseksi, mutta se on syy olla tavallista varovaisempi.

### Voiko APK-tiedoston lähettää toiselle?

Teknisesti kyllä. Se toimii parhaiten yksinkertaisille sovelluksille, joita jaetaan yhtenä APK-tiedostona. Google Playsta asennettujen sovellusten kohdalla tapa on epävarmempi, koska Play toimittaa usein AAB-paketista luotuja ja laitteelle optimoituja jaettuja APK-tiedostoja. Google Playsta asennetusta sovelluksesta kannattaa lähettää kauppalinkki.
