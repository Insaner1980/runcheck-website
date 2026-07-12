---
title: "Mitkä sovellukset kuluttavat eniten akkua Androidissa"
description: "Useimmat listat \"eniten akkua kuluttavista sovelluksista\" ovat aivan liian varmoja. Puhelintasi ei kiinnosta, mikä sovellus nousi kärkeen jonkun toisen testipenkissä. Sitä kiinnostaa, mitä olet asentanut, mitä oikeuksia olet myöntänyt, kuinka usein avaat sovelluksen ja jatkaako se toimintaansa näytön sammuttua."
listSummary: "Useimmat listat \"eniten akkua kuluttavista sovelluksista\" ovat aivan liian varmoja."
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Virrankulutus"
tags: ["akku","virrankulutus","vianetsintä","android","suorituskyky"]
locale: "fi"
draft: false
---
Samat sovellustyypit aiheuttavat silti ongelmia kerta toisensa jälkeen.

## Sovellustyypit, jotka ovat tavallisesti listan kärjessä

Videosovellukset ovat ilmeinen tapaus. YouTube, Netflix, TikTok, Instagram Reels ja vastaavat pitävät näytön päällä, purkavat videota, siirtävät dataa jatkuvasti ja toimivat usein suurella kirkkaudella, koska videoita katsotaan valoisissa huoneissa tai ulkona. Jos videosovellus on korkealla akun käyttölistalla kahden tunnin katselun jälkeen, kyse ei ole viasta. Kyse on fysiikasta.

Navigointisovellukset ovat seuraava helppo tapaus. Google Maps, Waze, kuljetus- ja ruokalähettisovellukset sekä kuntoseurannat yhdistävät GPS:n, mobiilidatan, näytön päälläoloajan ja joskus Bluetoothin. Tunnin ajo-ohjeet voivat viedä näkyvän osan akusta, etenkin 5G-yhteydellä tai heikossa kentässä.

Pelit kuluttavat virtaa suoraan ja peittelemättä. 3D-peli kuormittaa yhtä aikaa GPU:ta, CPU:ta, näyttöä, ääntä, kosketusta ja verkkoyhteyttä. Hyvä puoli on, että pelit kuluttavat tavallisesti pelaamisen aikana, eivät hiljaa kello 3 yöllä. Jos peli näkyy taustakulutuksessa, rajoita sitä.

Sosiaaliset sovellukset ja viestisovellukset ovat sotkuisempi ryhmä. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit ja uutissovellukset haluavat jatkuvasti uutta sisältöä ja ilmoituksia. Osa käyttäytyy hyvin, osa ei. Ärsyttävää on se, että kaksi ihmistä voi asentaa saman sovelluksen ja saada täysin erilaiset kulutusluvut. Toisella ovat käytössä sijainti, ilmoitukset, automaattinen toisto, yhteystietojen synkronointi ja taustapäivitys, toisella eivät.

## Taustakäyttö merkitsee enemmän kuin sovelluksen nimi

Jos akun käyttönäkymä kertoo sovelluksen kuluttaneen 8 % tunnin videokatselun aikana, tieto on tylsä. Jos sovellus kulutti 8 % taustalla puhelimen ollessa taskussa, tieto on hyödyllinen.

Etsi tämä ero ensin. Pixelissä avaa **Asetukset > Akku > Akun käyttö**, valitse sovellusnäkymä ja napauta sovellusta. Samsungissa avaa akun käyttötiedot kohdasta **Asetukset > Akku** tai mallista riippuen **Asetukset > Laitteen ylläpito > Akku**. Sanamuodot vaihtelevat, mutta etsit aktiivista käyttöaikaa, taustakäyttöaikaa ja tietoa siitä, saako sovellus jatkaa toimintaansa.

Käytännön nyrkkisääntö: jos tarpeeton sovellus käyttää päivän aikana taustalla enemmän kuin pari prosenttia, sen pitäisi pystyä perustelemaan se. Viesti-, musiikki-, navigointi-, terveys- ja turvallisuussovelluksella voi olla hyvä syy. Ostossovelluksella ei yleensä ole.

Tavallisimmat taustakulutuksen mekanismit ovat yksinkertaisia: push-ilmoitukset, sisällön synkronointi, sijaintitarkistukset, wake lock -lukitukset, taustaverkkoliikenne ja analytiikka-SDK:t. Wake lock -lukitukset kannattaa mainita nimeltä, koska Google käsittelee niitä nykyään Google Playn laatutekijänä. Partial wake lock pitää CPU:n hereillä näytön ollessa pois päältä. Harkittu käyttö on normaalia. Liian pitkä käyttö tuhlaa akkua.

## Google Playssa on nyt akkuun liittyvä laatumittari

Tämä on suurin muutos artikkelin aiempiin versioihin verrattuna. Google teki **Excessive partial wake locks** -mittarista Android vitalsin ydinarvon. Maaliskuun 1. päivästä 2026 alkaen rajan ylittävien sovellusten näkyvyys Google Playn haku- ja suosittelunäkymissä voi heikentyä, ja niiden kauppasivulla voidaan näyttää varoitus.

Raja on tarkka. Mobiilisovelluksessa vapautusten ulkopuoliset partial wake lock -lukitukset katsotaan liiallisiksi, kun niitä pidetään yhteensä vähintään kaksi tuntia 24 tunnin aikana ja sama kuvio koskee yli 5 %:a sovelluksen käyttöistunnoista 28 päivän keskiarvolla.

Tämä ei tarkoita, että Google Play ilmoittaisi jokaisen sovelluksen kaikesta virrankulutuksesta ennen asennusta. Se ei varoita pelistä vain siksi, että peli kuluttaa paljon aktiivisen pelaamisen aikana. Se ei myöskään arvioi sitä, vietätkö itse viisi tuntia TikTokissa. Mittari kohdistuu taustalla tapahtuvaan CPU:n hereillä pitämiseen näytön ollessa pois päältä.

Silti se on hyödyllinen. Tavallinen käyttäjä voi ensimmäistä kertaa nähdä akkuvaroituksen ennen huonosti käyttäytyvän sovelluksen asentamista. Se on parempi kuin ongelman huomaaminen kolmen tyhjentyneen yön jälkeen.

## Mitä kannattaa muuttaa ennen sovellusten poistamista

Poistaminen on selkeä ratkaisu, mutta useimmat eivät aio luopua pääasiallisista sosiaalisen median, video- tai viestisovelluksistaan. Aloita siis asetuksista, jotka vähentävät huomaamatonta taustatyötä.

Poista automaattinen toisto käytöstä siellä, missä sovellus sallii sen. Instagram, Facebook, X, Reddit, YouTube ja TikTok voivat kuluttaa akkua ja dataa valmistelemalla videoita, joita et koskaan katso.

Rajoita sijaintia. Avaa **Asetukset > Sijainti > Sovellusten sijaintioikeudet** ja tarkista sovellukset, joilla on lupa käyttää sijaintia aina. Sääsovellus pärjää yleensä käyttöajan sijainnilla. Navigointisovellus tarvitsee sijaintia matkan aikana. Sosiaalinen sovellus tarvitsee harvoin pysyvää käyttöoikeutta.

Rajoita akun käyttöä taustalla. Pixel-tyylisessä Androidissa avaa **Asetukset > Sovellukset > [sovellus] > Sovelluksen akunkäyttö** ja vähennä taustakäyttöä sovelluksilta, jotka eivät tarvitse välittömiä päivityksiä. Samsungissa avaa **Asetukset > Akku > Taustakäytön rajoitukset** tai vastaava Laitteen ylläpidon kautta ja lisää harvoin käytetyt sovellukset lepotilaan tai syvään lepotilaan.

Vähennä ilmoituksia. Jokainen ilmoitus voi herättää puhelimen, sytyttää näytön, käynnistää värinän ja hakea uutta sisältöä. Ole tiukka sovelluksille, jotka ilmoittavat markkinoinnista, suosituksista tai "saattaisit pitää tästä" -sisällöstä.

Päivitä sovellukset. Neuvo on tylsä, mutta sillä on merkitystä Android-päivitysten jälkeen, myös tuettujen Pixel-puhelinten ensimmäisen Android 17 -julkaisun yhteydessä. Kehittäjät korjaavat akkuvikoja, wake lock -virheitä, synkronointisilmukoita ja yhteensopivuusongelmia. Sekä Samsung että Google ohjaavat tarkistamaan sovellus- ja järjestelmäpäivitykset akun nopean tyhjenemisen vianmäärityksessä.

## Selain ei aina voita sovellusta

Yleinen neuvo kuuluu: käytä sovelluksen sijasta selainversiota. Joskus se on järkevää, koska verkkosivu ei voi käyttää samanlaista jatkuvaa Android-taustapalvelua kuin asennettu sovellus. Jos Facebook tai X kuluttaa akkua vain siksi, että natiivisovellus herää jatkuvasti taustalla, mobiilisivu voi auttaa.

Älä tee siitä yleissääntöä. Androidin natiivisovelluksia ja niiden verkkoversioita verranneissa kontrolloiduissa tutkimuksissa natiivisovellukset ovat joissakin palveluissa kuluttaneet aktiivisessa käytössä vähemmän energiaa. Selainvälilehti ei ole taikuutta. Se käsittelee silti videota, JavaScriptiä, mainoksia, seurantaa ja kuvia.

Käytännöllinen valinta on tämä: käytä selainta palveluissa, jotka tarkistat vain silloin tällöin etkä tarvitse niistä ilmoituksia. Käytä natiivisovellusta palveluissa, joita käytät paljon, etenkin jos verkkoversio on hidas tai kömpelö. Rajoita natiivisovelluksen taustakäyttöä, jos se alkaa näkyä yön aikaisessa kulutuksessa.

## Milloin diagnostiikkasovelluksesta on hyötyä

Androidin oma akun käyttönäkymä on ensimmäinen paikka, joka kannattaa tarkistaa. Se on jo puhelimessa ja kytkeytyy suoraan käyttöjärjestelmään.

runcheck auttaa silloin, kun pelkkä akkulukema ei selitä kuviota. Jos kulutuspiikki osuu samaan aikaan kuumenemisen, heikon signaalin, hitaan verkon tai täyttyvän tallennustilan kanssa, ratkaisu on toinen kuin Instagramin syyttäminen. Asiayhteys ratkaisee.

AccuBattery ja vastaavat työkalut voivat arvioida akun kapasiteettia ajan mittaan, mutta käsittele lukuja arvioina, ellei puhelin itse näytä akun kuntoa.

## Parempi tapa löytää pahimmat sovellukset

Tee tämä kahden tavallisen päivän ajan:

1. Lataa ja käytä puhelinta normaalisti.
2. Tarkista illalla **Asetukset > Akku > Akun käyttö**.
3. Kirjaa viisi eniten kuluttanutta sovellusta ja se, tapahtuiko kulutus aktiivisessa käytössä vai taustalla.
4. Rajoita vain sovelluksia, joiden taustakäytölle ei ole järkevää selitystä.
5. Tarkista tulos uudelleen seuraavana päivänä.

Älä tyhjennä viimeksi käytettyjen sovellusten näkymää joka tunti. Android hallitsee muistia ja akkua automaattisesti, ja sovellusten pakottaminen sulkeutumaan voi kuluttaa enemmän, kun ne käynnistyvät uudelleen. Pakota lopetus on häiriöilevän sovelluksen vianmäärityskeino, ei päivittäistä siivousta.

Eniten akkua kuluttavat yleensä sovellukset, jotka pitävät näytön, verkon, GPS:n, CPU:n tai GPU:n kiireisenä. Korjaamisen arvoisia ovat ne, jotka tekevät sitä silloin, kun et käytä niitä.
