---
title: "NFC:n testaaminen Android-puhelimessa"
description: "Helppoja tapoja tarkistaa, toimiiko Android-puhelimen NFC. Testiin voi käyttää asetuksia, lähimaksukorttia, Google Walletia, Samsungin diagnostiikkaa, Xiaomin CIT-valikkoa tai NFC-testisovellusta."
listSummary: "Helppoja tapoja tarkistaa, toimiiko Android-puhelimen NFC."
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnostiikka","anturit","android","laitteisto","opas"]
locale: "fi"
draft: false
---
Napautat puhelimella maksupäätettä, eikä mitään tapahdu. Nyt ongelmia on kaksi: maksu epäonnistui, etkä tiedä, johtuuko se NFC:stä, Google Walletista, kortista, suojakuoresta vai maksupäätteestä.

Aloita pienemmästä. NFC on helppo testata, kun erotat laitteiston lukutoiminnon maksamisesta.

## Tarkista, onko puhelimessa NFC

Avaa Asetukset ja hae sanalla NFC. Monissa Android-puhelimissa polku on Asetukset > Yhdistetyt laitteet > Yhteysasetukset > NFC. Samsungissa NFC-asetukset löytyvät yleensä Yhteydet-kohdasta, mutta tarkka nimi vaihtelee ohjelmistoversion mukaan.

Jos NFC-asetusta ei löydy, puhelimessa ei todennäköisesti ole NFC-sirua. Tämä on yhä tavallista edullisissa Android-puhelimissa, etenkin malleissa, joista myydään eri alueille hieman erilaisia versioita. Yhdessä lähes samannimisessä malliversiossa voi olla NFC ja toisessa ei.

Ota NFC käyttöön ennen testaamista. Tarkista myös oletusarvoinen maksusovellus, jos testaat Google Walletia, Samsung Walletia tai vanhemmassa laitteessa Samsung Payta. Käytettävissä oleva palvelu riippuu alueesta ja puhelinmallista.

## Testaa lähimaksukortilla

Tämä on yksinkertaisin laitteistotesti. Käytä lähimaksua tukevaa pankkikorttia, matkakorttia, kulkutunnistetta tai NFC-tunnistetta. Pidä sitä tasaisesti puhelimen takaosaa vasten ja liikuta hitaasti laitteen yläosassa.

Jos NFC toimii, puhelin yleensä värisee, antaa äänimerkin, avaa maksusovelluksen kehotteen tai näyttää tuntematonta tunnistetta koskevan ilmoituksen. Mikä tahansa näistä reaktioista kertoo, että NFC-lukija ja antenni toimivat.

Eikö mitään tapahdu? Irrota suojakuori ja yritä uudelleen. Metallilevyt, magneettikiinnikkeet, rengaspidikkeet ja paksut lompakkokotelot voivat estää NFC-yhteyden tai heikentää sitä. Lukuetäisyys on lyhyt, joten pienikin asennon muutos voi ratkaista ongelman.

## Testaa maksupäätteellä

Onnistunut lähimaksu on hyvä käytännön testi, koska siinä tarkistuu muutakin kuin tunnisteen lukeminen. NFC:n pitää olla käytössä, maksusovelluksen täytyy olla tuettu, kortin täytyy olla voimassa, puhelimessa pitää olla näytön lukitus ja oletusmaksusovelluksen asetusten on oltava oikein.

Google Walletin ohjeissa neuvotaan avaamaan Asetukset > Yhdistetyt laitteet > Yhteysasetukset > NFC > Lähimaksut ja valitsemaan Google Wallet oletusmaksusovellukseksi. Puhelimessa pitää myös olla näytön lukitus. Samsung-puhelimissa vastaavat asetukset löytyvät NFC- ja lähimaksuasetusten yhteydestä.

Jos tunnisteiden lukeminen toimii mutta maksut eivät, vika ei todennäköisesti ole NFC-sirussa. Tarkista maksusovelluksen käyttöönotto, pankin tuki, näytön lukitus, Google Play Palvelut, laitteen eheys ja oletusarvoinen maksusovellus.

## Käytä diagnostiikkavalikkoa tai sovellusta

Samsungin tuettu reitti on Samsung Members > Tuki > Aloita. Kaikissa malleissa ei ole erillistä NFC-testiä, mutta sovellus voi tarkistaa monia puhelimen osia ja ohjata huoltoon, jos testi epäonnistuu.

Xiaomi-, Redmi- ja POCO-puhelimissa NFC-testi löytyy usein CIT-testivalikosta. Avaa puhelinsovellus ja näppäile `*#*#6484#*#*`. Jos se ei toimi, kokeile koodia `*#*#64663#*#*`. Jos valikossa on NFC-testi, pidä korttia tai tunnistetta puhelimen lähellä ja odota tulosta.

Fairphone-malleissa on aiemmin ollut manuaalinen NFC-testi huoltovalikossa, mutta valikkokoodit vaihtelevat sukupolvittain. Käytä mahdollisuuksien mukaan juuri oman mallisi virallisia tukiohjeita.

Nopeaan sovellustestiin sopii NFC Check, joka kertoo, tunnistaako Android NFC-laitteiston ja onko NFC käytössä. NFC Tools on parempi vaihtoehto, jos haluat lukea tunnisteita ja nähdä tunnisteen tunnuksen, tekniikkatyypin sekä NDEF-tietueet.

## Etsi antennin kohta

NFC-antenni ei ole kaikissa puhelimissa samassa paikassa.

Monissa Samsung Galaxy S -puhelimissa se sijaitsee takaosan yläkeskellä, lähellä kamera-aluetta. Pixel-puhelimissa se on yleensä takaosan yläosassa. Xiaomi- ja OnePlus-puhelimissa sijainti vaihtelee enemmän mallin mukaan.

Antennin sijainti selittää, miksi yksi puhelin toimii, kun lukijaan koskettaa kamerakyhmyllä, mutta toinen vasta silloin, kun takaosan keskikohta osuu lukijaan. Jos puhelimen käyttöoppaassa on NFC-antennin kuva, luota siihen yleisohjeen sijaan.

## Tavallisia syitä NFC:n toimimattomuuteen

Suojakuori estää yhteyden. Syy on arkinen mutta yleinen. Testaa paljaalla puhelimella ennen asetusten muuttamista.

Kosketat väärää kohtaa. Liikuta korttia tai puhelinta hitaasti. Älä heiluta sitä kuin viivakoodinlukijaa.

NFC ei ole käytössä tai väärä maksusovellus on valittu. Hae Asetuksista NFC- ja lähimaksuasetuksia.

Puhelin on lukittu, vaikka maksusovellus edellyttää avaamista. Joissakin Android-versioissa tunnisteita voi lukea näytön ollessa päällä, mutta maksaminen vaatii tunnistautumisen. Käsittele maksamista erillään tavallisesta tunnisteen lukemisesta.

Tuore päivitys muutti toimintaa. Android 17 julkaistiin ensin tuetuille Pixel-laitteille, ja muut valmistajat julkaisevat omat Android 17 -versionsa omissa aikatauluissaan. Jos NFC-ongelma alkaa heti Pixel-päivityksen jälkeen, etsi Pixel-mallia koskevia tukitietoja sen sijaan, että olettaisit saman vian koskevan Samsungia, Xiaomia tai OnePlussaa.

Puhelin on korjattu. NFC-antenni on usein osa takakantta, langattoman latauksen kelaa tai joustavaa kaapelirakennetta. Jos NFC lakkasi toimimasta akun tai takakannen vaihdon jälkeen, antennia ei ehkä kytketty kunnolla takaisin.

## Milloin laitteisto on todennäköisesti rikki

Jos NFC on käytössä, suojakuori on irrotettu, useat kortit ja tunnisteet eivät aiheuta mitään reaktiota, vikasietotila ei muuta tilannetta eikä diagnostiikkasovellus havaitse NFC-toimintaa, laitteistovika alkaa olla todennäköinen.

Itse siru voi rikkoutua, mutta antennivaurio on tavallisempi. Pudotus, kosteus, takakannen korjaus ja huonosti paikalleen asettunut joustokaapeli ovat kaikki mahdollisia syitä.

Useimmille käytännön kysymys on, kannattaako NFC korjata. Jos käytät lähimaksua joka päivä, korjaus voi olla järkevä. Jos puhelin on vanha ja toimii muuten hyvin, lähimaksua tukeva älykello voi olla edullisempi kiertotapa.
