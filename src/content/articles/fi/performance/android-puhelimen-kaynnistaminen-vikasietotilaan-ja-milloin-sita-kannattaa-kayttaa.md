---
title: "Android-puhelimen käynnistäminen vikasietotilaan ja milloin sitä kannattaa käyttää"
metaTitle: "Android-puhelimen käynnistäminen vikasietotilaan"
description: "Näin käynnistät Androidin vikasietotilaan, näet mitä se poistaa käytöstä ja selvität, aiheuttaako ongelman jokin sovellus."
listSummary: "akku, virrankulutus ja vianetsintä"
hub: "performance"
sourceNumber: 70
order: 7
tags: ["akku","virrankulutus","vianetsintä","android","suorituskyky"]
locale: "fi"
draft: false
---
Mistä tiedät, johtuuko puhelimen hitaus Androidin tilapäisestä ongelmasta vai yhdestä taustalla kaiken sotkevasta sovelluksesta? Vikasietotila on selkein tapa ottaa siitä selvää.

Vikasietotilassa Android käynnistyy vain järjestelmäohjelmiston ja valmiiksi asennettujen sovellusten kanssa. Myöhemmin asentamasi sovellukset poistetaan käytöstä, kunnes käynnistät puhelimen normaalisti uudelleen. Mitään ei poisteta. Tarkoitus on rajata syytä: jos ongelma katoaa vikasietotilassa, mukana on todennäköisesti kolmannen osapuolen sovellus. Jos ongelma jatkuu, syytä kannattaa etsiä Androidista, tallennustilasta, akusta tai laitteistosta.

## Milloin vikasietotilasta on hyötyä

Käytä vikasietotilaa, kun puhelin kaatuu, jumiutuu, käynnistyy uudelleen, kuumenee, kuluttaa akkua poikkeuksellisen nopeasti tai näyttää ponnahdusikkunoita, jotka eivät suostu katoamaan. Se on hyödyllinen myös suuren Android-päivityksen jälkeen, jos puhelin muuttuu yhtäkkiä hankalaksi käyttää eikä akun kulutuksesta löydy selvää syyllistä.

Kyse ei tarvitse olla vakavasta viasta. Jos näppäimistö viivyttelee, aloitusnäyttö latautuu jatkuvasti uudelleen tai puhelin reagoi avaamisen jälkeen vasta usean sekunnin kuluttua, vikasietotila vastaa silti tärkeimpään kysymykseen: liittyykö jokin asentamasi sovellus ongelmaan?

Testi on yksinkertainen. Käynnistä puhelin vikasietotilaan, käytä sitä muutaman minuutin ajan ja yritä toistaa ongelma.

## Vikasietotilan käynnistäminen puhelimen ollessa päällä

Avaa ensin virtavalikko.

Pixel 6:ssa ja uudemmissa malleissa, myös Pixel Fold -malleissa, paina virtapainiketta ja äänenvoimakkuuden lisäyspainiketta muutaman sekunnin ajan. Monissa muissa puhelimissa virtavalikko avautuu pitämällä virtapainiketta tai sivupainiketta painettuna. Samsung-puhelimissa siihen käytetään usein sivupainiketta ja äänenvoimakkuuden vähennyspainiketta tai pika-asetusten virtakuvaketta.

Kun virtavalikko avautuu, kosketa näytön **Katkaise virta**- tai **Käynnistä uudelleen** -vaihtoehtoa pitkään. Hetken kuluttua Androidin pitäisi näyttää vikasietotilan vahvistus. Valitse **OK** tai **Vikasietotila**.

Puhelin käynnistyy uudelleen. Kun käynnistys on valmis, näytön alareunassa pitäisi näkyä **Vikasietotila**.

## Vikasietotilan käynnistäminen puhelimen ollessa sammutettuna

Tämä tapa on hyödyllinen, jos puhelin on liian epävakaa virtavalikon avaamiseen.

Käynnistä puhelin normaalisti. Kun valmistajan logo tai käynnistysanimaatio ilmestyy, paina äänenvoimakkuuden vähennyspainiketta pitkään. Pidä painike painettuna, kunnes lukitusnäyttö tai aloitusnäyttö latautuu. Jos käynnistys onnistui, näytön alareunassa näkyy **Vikasietotila**.

Ajoitus ratkaisee. Jos painat liian aikaisin, joissakin puhelimissa saattaa avautua bootloader tai Recovery Mode. Jos painat liian myöhään, Android käynnistyy tavalliseen tapaan. Jos yritys ei onnistu, sammuta puhelin ja yritä uudelleen.

## Huomioita Samsung-puhelimista

Samsung tukee nykyisissä Galaxy-puhelimissa ja -tableteissa kumpaakin tapaa.

Kun Galaxy on päällä, avaa virtavalikko, kosketa virran katkaisuvaihtoehtoa pitkään ja valitse **Vikasietotila**. Kun laite on sammutettu, käynnistä se ja pidä äänenvoimakkuuden vähennyspainiketta painettuna Samsung-logon ilmestyessä.

Samsung huomauttaa myös, että osa mukautuksista, kuten taustakuvat tai teemat, saattaa palautua oletuksiin vikasietotilasta poistumisen jälkeen. Tietoja ei silloin katoa, mutta muutos voi olla ärsyttävä. Ota aloitusnäytöstä kuvakaappaus etukäteen, jos asettelulla on sinulle väliä.

## Jos puhelin on jumissa

Jos puhelin ei reagoi, pakota se ensin käynnistymään uudelleen.

Useimmissa Samsung-puhelimissa pidä virta- tai sivupainiketta ja äänenvoimakkuuden vähennyspainiketta painettuina yli 7 sekunnin ajan. Monissa muissa Android-puhelimissa pidä virtapainiketta tai virtapainiketta ja äänenvoimakkuuden vähennyspainiketta painettuina noin 10-15 sekuntia, kunnes näyttö pimenee tai puhelin käynnistyy uudelleen.

Käytä sitten sammutetun puhelimen menetelmää: käynnistä laite, odota logon ilmestymistä ja pidä äänenvoimakkuuden vähennyspainiketta painettuna.

## Mitä vikasietotilassa kannattaa testata

Älä poistu vikasietotilasta heti käynnistyksen jälkeen. Käytä puhelinta niin pitkään, että testistä on oikeasti hyötyä.

Kokeile toimintoa, joka ei aiemmin toiminut. Avaa Asetukset. Avaa puhelimen lukitus muutaman kerran. Kirjoita tekstikenttään. Tarkkaile akun lämpötilaa. Jätä näyttö päälle viideksi minuutiksi. Jos puhelin käynnistyi satunnaisesti uudelleen, anna sen olla hetki käyttämättä.

Vikasietotila poistaa ladatut sovellukset käytöstä, joten tavalliset viesti-, some-, pankki-, VPN-, aloitusnäyttö- ja näppäimistösovelluksesi eivät välttämättä toimi. Se kuuluu asiaan. Puhelut, tekstiviestit, Wi-Fi, mobiilidata ja Asetukset ovat yleensä edelleen käytettävissä. Google kertoo, että Pixel-laitteissa lentokonetila voi mennä automaattisesti päälle vikasietotilaan siirryttäessä. Poista se käytöstä, jos tarvitset yhteyttä testaamiseen.

## Jos ongelma katoaa

Kolmannen osapuolen sovellus on tärkein epäilty.

Aloita sovelluksista, jotka ovat muuttuneet äskettäin. Uudet asennukset, tuoreet päivitykset, aloitusnäyttösovellukset, VPN-sovellukset, puhdistus- ja automaatiosovellukset, virransäästösovellukset, näppäimistöt sekä esteettömyys- tai laitteen järjestelmänvalvojan oikeuksia käyttävät sovellukset kannattaa tarkistaa ensimmäisinä.

Poistu vikasietotilasta, poista yksi epäilty sovellus tai ota se pois käytöstä ja testaa puhelinta normaalisti. Älä poista kymmentä sovellusta kerralla, ellei puhelin ole käyttökelvoton. Kun muutat vain yhden asian kerrallaan, tiedät mikä ongelman oikeasti korjasi.

Jotkin sovellukset eivät suostu poistumaan, koska niillä on laitteen järjestelmänvalvojan oikeudet. Jos Android estää sovelluksen poistamisen, etsi Asetuksista laitteen järjestelmänvalvojan sovellukset tai lähin vastaava kohta. Polku vaihtelee puhelimittain, mutta ajatus on sama: poista ensin järjestelmänvalvojan oikeus ja poista sovellus sen jälkeen.

## Jos ongelma jatkuu

Jos vikasietotila ei auta, syy ei todennäköisesti ole lataamasi sovellus.

Silloin mahdollisia syitä ovat järjestelmävirhe, vioittunut järjestelmän tila, liian täysi tallennustila, huono päivitys, heikkenevä akku, ylikuumeneminen tai muu laitteistovika. Jos ongelma alkoi esimerkiksi Android 17 -päivityksen jälkeen, tarkista ennen järeitä toimia, raportoivatko saman puhelinmallin muut käyttäjät samasta oireesta.

Seuraavat vaiheet ovat käytännöllisiä: asenna mahdollinen uudempi järjestelmäpäivitys, vapauta tallennustilaa, tarkista akun kulutus ja lämpötila, tyhjennä välimuistiosio vain jos puhelimesi edelleen tarjoaa tämän toiminnon ja varmuuskopioi tärkeät tiedot ennen tehdasasetusten palautuksen harkitsemista.

Tehdasasetusten palautus on viimeinen keino. Se voi korjata ohjelmisto-ongelmia, mutta sen jälkeen on paljon tehtävää, eikä se korjaa kulunutta tallennustilaa, heikkoa akkua tai vaurioitunutta painiketta.

## Vikasietotilasta poistuminen

Käynnistä puhelin normaalisti uudelleen. Siinä kaikki.

Paina virtapainiketta tai käytä pika-asetusten virtakuvaketta ja valitse **Käynnistä uudelleen**. Joissakin Samsung-malleissa vikasietotilan voi poistaa myös napauttamalla siitä kertovaa ilmoitusta.

Jos puhelin palaa jatkuvasti vikasietotilaan, tarkista äänenvoimakkuuden vähennyspainike. Jumiutunut painike, liian tiukka suojakuori, painikkeen ympärillä oleva lika tai vaurioitunut kytkin voi käynnistää vikasietotilan puhelimen käynnistyessä. Poista suojakuori ja käynnistä puhelin uudelleen.

## Rajoitukset ja tavalliset yllätykset

Vikasietotila ei poista sovelluksia, kuvia, viestejä tai tilitietoja. Se vain poistaa ladatut sovellukset tilapäisesti käytöstä.

Kolmannen osapuolen sovellusten aloitusnäyttöwidgetit saattavat kadota vikasietotilan ajaksi. Google suosittelee ottamaan kuvakaappauksen ennen vikasietotilan käyttöä, jos widgetit ovat tärkeitä. Osa niistä voi joutua lisäämään takaisin vikasietotilasta poistumisen jälkeen.

Vikasietotila ei myöskään poista valmistajan järjestelmäsovelluksia käytöstä. Samsungin, Xiaomin, OnePlussan, operaattorin ja Googlen järjestelmäkomponentit voivat jatkaa toimintaansa, koska Android käsittelee niitä osana asennettua järjestelmäkuvaa. Jos ongelman aiheuttaa valmiiksi asennettu sovellus, vikasietotila ei välttämättä rajaa sitä pois.

Rajoitus on harmillinen, mutta vikasietotilaa kannattaa silti käyttää. Se vastaa yhteen hyödyllisimmistä vianetsintäkysymyksistä alle viidessä minuutissa.
