---
title: "Näin löydät ja poistat suuret tiedostot Androidissa"
description: "Metakuvaus: Nopein tapa vapauttaa Android-puhelimen tallennustilaa on etsiä ensin suurimmat tiedostot. Files by Google, puhelimen tiedostonhallinta ja sovellusten tallennustilanäkymät auttavat siivoamaan poistamatta vahingossa vääriä tiedostoja."
listSummary: "Metakuvaus: Nopein tapa vapauttaa Android-puhelimen tallennustilaa on etsiä ensin suurimmat tiedostot."
hub: "storage"
sourceNumber: 82
order: 4
tags: ["tallennustila","android","siivous","optimointi","opas"]
locale: "fi"
draft: false
---
---

Yksi viikonloppumatkalla kuvattu 4K-video voi olla suurempi kuin sadat valokuvat yhteensä. Saman verran tilaa voi viedä yksi ladattu Netflix-jakso, unohtunut pelikansio tai kuukausia sitten avattu ZIP-tiedosto.

Siksi satunnainen siivoaminen tuntuu niin tehottomalta. 40 pienen kuvakaappauksen poistaminen ei juuri auta, jos kolme videota vie 6 Gt.

## Aloita tallennustilan erittelystä

Avaa Asetukset-sovelluksen tallennustilanäkymä ja katso ensin suurinta luokkaa. Samsung-puhelimessa tallennustila löytyy Device care -osiosta. Xiaomi-puhelimessa se löytyy tavallisesti puhelimen tietoja koskevasta osiosta, ja Security-sovelluksessa on lisäksi oma siivoustoiminto.

Älä vielä poista mitään. Selvitä vain, mikä vie tilan: videot, sovellukset, lataukset, äänitiedostot, asiakirjat vai luokka "Muu". Viimeinen tarkoittaa yleensä sovellustietoja, välimuistitiedostoja tai tiedostoja, joita Android ei osaa luokitella siististi.

Jos videot ovat suurin luokka, aloita videoista. Jos sovellukset vievät eniten, avaa sovellusten tallennustilanäkymät. Jos latauksia on valtavasti, järjestä Lataukset-kansio koon mukaan. Yksinkertaista. Tylsää. Tehokasta.

## Tee ensimmäinen kierros Googlen tiedostosovelluksella

Files by Google on useimmissa Android-puhelimissa turvallisin lähtökohta. Se on asennettu valmiiksi moniin laitteisiin, ja sen saa myös Google Playsta.

Avaa sovellus ja etsi **Puhdista**. Versiosta riippuen se voi olla alareunan navigoinnissa tai valikossa. Tarkista ehdotukset suurista tiedostoista, tiedostojen kaksoiskappaleista, vanhoista latauksista ja jo varmuuskopioidusta mediasta.

Kaksoiskappaleiden etsintä on hyödyllinen, koska voit tarkistaa tiedostot ennen poistamista. Googlen mukaan valitut kaksoiskappaleet voidaan siirtää Roskakoriin, joten ne voi tavallisesti palauttaa ennen lopullista poistamista.

Älä silti valitse kaikkea automaattisesti. Kaksoiskappale voi olla tarkoituksellinen. Henkilöllisyystodistuksen kopio Lataukset-kansiossa ja toinen Asiakirjat-kansiossa voi olla siellä hyvästä syystä.

## Järjestä tiedostot käsin tiedostonhallinnassa

Puhelimen omalla tiedostonhallinnalla voi tehdä saman perussiivouksen. Avaa sisäinen tallennustila, valitse kansio ja järjestä tiedostot koon mukaan kolmen pisteen valikosta tai lajittelupainikkeella.

Aloita näistä:

- `DCIM/Camera` sisältää kuvattuja videoita, sarjakuvia, hidastusvideoita ja muokattuja kopioita.
- `Downloads` kerää PDF-tiedostoja, APK-asentimia, ZIP-tiedostoja, asiakirjoja ja selaimella tallennettuja tiedostoja.
- `Documents` sisältää usein vietyjä raportteja, työtiedostoja, laskuja ja vanhoja liitteitä.
- `Movies` tai `Videos` kannattaa tarkistaa näyttötallenteiden ja muokattujen videoiden varalta.

4K-video on ilmeinen tilasyöppö. Tarkka koko riippuu bittinopeudesta, koodekista, kuvataajuudesta, HDR:stä ja kamerasovelluksesta, mutta muutama sata megatavua minuutissa on monissa puhelimissa tavallinen määrä. Kymmenestä minuutista voi kertyä useita gigatavuja ennen kuin asiaa edes huomaa.

APK-asentimet ovat toinen helppo poistokohde. Jos asensit sovelluksen sivulatauksena ja se on jo asennettu, Lataukset-kansioon jäänyt APK-tiedosto on yleensä vain turhaa painolastia.

## Tarkista tiedostojen lisäksi sovellusten tallennustila

Osa suurimmista kohteista ei näy selkeinä tiedostoina. Suoratoistosovellukset, pelit, viestisovellukset, podcast-sovellukset ja karttasovellukset säilyttävät latauksia usein omassa sovelluskohtaisessa tallennustilassaan.

Avaa Asetukset-sovelluksen sovellusluettelo, järjestä sovellukset koon mukaan, jos puhelin tukee sitä, ja avaa suurimmat sovellukset. Etsi tallennustilanäkymää, ladattua sisältöä, latausten hallintaa tai sovelluksen omaa tallennustilan hallintaa.

Hyviä tarkistuskohteita ovat:

- Spotifyn ladatut soittolistat ja välimuisti.
- Netflixin, Disney+:n, Prime Videon ja YouTuben lataukset.
- Google Mapsin offline-alueet.
- Podcast- ja äänikirjalataukset.
- Mobiilipelit, jotka lataavat erillisiä lisätiedostoja.
- WhatsAppin tallennustilan hallinta, joka löytyy sovelluksen asetusten tallennus- ja dataosiosta.
- Telegramin tallennustilan käyttö, joka löytyy data- ja tallennusasetuksista.

Uusissa Android-asennuksissa WhatsApp-media sijaitsee usein polussa `Android/media/com.whatsapp/WhatsApp/Media`, mutta sovelluksen oma tallennustilan hallinta on helpompi ja turvallisempi. Käytä sitä ensin.

## Ole varovainen Android/data- ja Android/obb-kansioiden kanssa

Vanhoissa siivousohjeissa neuvotaan selaamaan kansioita `Android/data/` ja `Android/obb/` sekä poistamaan asennuksesta poistettujen sovellusten jättämiä kansioita. Ohjeesta on nykyään vain rajallisesti hyötyä.

Android 11 ja sitä uudemmat versiot rajoittavat pääsyä näihin kansioihin. Osa tiedostonhallintasovelluksista piilottaa ne, osa näyttää vain osan sisällöstä ja osa vaatii hankalia käyttöoikeusvaiheita. Järjestelmää ei kannata kiertää vain sellaisen tiedoston poistamiseksi, jota et ymmärrä.

Jos tiedät poistetun pelin jättäneen 3 Gt tiedostoja ja tiedostonhallinta näyttää selvästi sen vanhan kansion hakemistossa `Android/obb/`, jäännöksen poistaminen on perusteltua. Jos kansio kuuluu edelleen käyttämällesi sovellukselle, jätä se rauhaan. Sovellus voi muuten lakata toimimasta tai ladata kaiken uudelleen.

## Tyhjennä roskakori suurten poistojen jälkeen

Suuren tiedoston poistaminen ei aina vapauta tilaa heti. Googlen tiedostosovellukset, Samsung My Files, Google Photos, Samsung Gallery ja muut mediasovellukset voivat siirtää tiedostot ensin Roskakoriin.

Tarkista sovellus, jolla poistit tiedoston. Tyhjennä Roskakori vasta, kun olet varma, ettet tarvitse tiedostoja takaisin.

Files by Google -sovelluksessa poistetut tiedostot säilyvät palautettavina Roskakorissa 30 päivää. Google Photosilla on omat roskakorisääntönsä, etenkin varmuuskopioidulle medialle, joten älä oleta kaikkien sovellusten toimivan samalla tavalla.

## Mitä kannattaa poistaa ensin

Parhaita ensimmäisiä kohteita ovat suuret tiedostot, jotka voi korvata ja jotka eivät ole henkilökohtaisesti tärkeitä.

Poista APK-asentimet, latausten kaksoiskappaleet, katsotut offline-videot, vanhat podcast-jaksot, vanhentuneet offline-kartat, tuntemiesi sovellusten välimuisti ja sellaisten sovellusten media, joita et enää käytä.

Varmuuskopioi omat videot, kuvat ja asiakirjat ennen paikallisten kopioiden poistamista. Pilvitallennus riittää, jos lataus on varmasti valmistunut. Tietokone tai ulkoinen asema on parempi kaikelle, jonka menettäminen harmittaisi.

Jätä järjestelmätiedostoilta näyttävät kohteet rauhaan. Jos tiedosto ei ole Lataukset-, DCIM-, Pictures-, Movies-, Music- tai Documents-kansiossa etkä tiedä mikä se on, älä käytä sitä kokeilukappaleena.

## Kuinka usein tämä kannattaa tehdä

Tarkkaa aikataulua ei ole. Tarkista suuret tiedostot, kun vapaa tallennustila laskee alle 15-20 %:n, ennen suurta Android-päivitystä tai ennen matkaa, jolla aiot kuvata paljon videota.

runcheckin Pro-siivoustyökalut perustuvat samaan ajatukseen: suuret tiedostot, vanhat lataukset ja APK-tiedostot. Suurten tiedostojen suodattimessa voi valita rajaksi 10 Mt, 50 Mt, 100 Mt tai 500 Mt. Ennen poistamista näet myös arvion tallennustilan tilanteesta ennen ja jälkeen siivouksen. Se on oikea järjestys: tarkista ensin, poista vasta sitten.
