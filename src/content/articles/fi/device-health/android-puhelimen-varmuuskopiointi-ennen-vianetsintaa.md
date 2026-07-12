---
title: "Android-puhelimen varmuuskopiointi ennen vianetsintää"
description: "Varmuuskopioi puhelin ennen kuin tyhjennät sovelluksen datan, palautat sovellusasetuksia, käytät palautustilaa tai palautat tehdasasetukset. Osa korjauksista on vaarattomia. Osa on vaarattomia vain siihen asti, kun paikallinen tiedosto, keskusteluhistoria tai kaksivaiheisen tunnistautumisen koodi katoaa."
listSummary: "suorituskyky, nopeus ja android"
hub: "device-health"
sourceNumber: 9
order: 5
tags: ["suorituskyky","nopeus","android","optimointi","vianetsintä"]
locale: "fi"
draft: false
---
Hyvän varmuuskopion ei tarvitse olla monimutkainen. Riittää, että tiedät, mitä Android jo tallentaa, mitä se jättää pois ja mitkä sovellukset tarvitsevat oman varmuuskopion ennen tuhoavia toimenpiteitä.

## Mitä Google varmuuskopioi automaattisesti

Kun Android-puhelimeen on kirjauduttu Google-tilillä, osa tiedoista synkronoidaan jo laitteen ulkopuolelle. Google-yhteystietoihin tallennetut yhteystiedot, Google Kalenterin tapahtumat, Gmail ja monet Google-sovellusten asetukset palaavat tehdasasetusten palautuksen jälkeen, kun kirjaudut samalle tilille. Google Kuvat tallentaa kuvat ja videot, jos varmuuskopiointi on otettu käyttöön sovelluksessa.

Androidin Google-varmuuskopio kattaa enemmän kuin moni odottaa, mutta vähemmän kuin moni olettaa. Se voi sisältää sovellukset ja osan niiden datasta, puheluhistorian, yhteystiedot, laiteasetuksia sekä SMS- ja MMS-viestit. Google Messages voi sisällyttää myös RCS-viestit. Phone by Google voi puolestaan varmuuskopioida puheluasetuksia ja estettyjä numeroita.

Sovellusdata on hankala osa. Android antaa sovellusten käyttää varmuuskopiointijärjestelmää, mutta kehittäjä voi rajoittaa tallennettavia tietoja tai estää varmuuskopioinnin kokonaan. Pankkisovellukset, tunnistautumissovellukset ja osa peleistä eivät välttämättä palaudu odotetusti. Se ei tarkoita, että varmuuskopio olisi rikki. Sovelluksen omat säännöt ratkaisevat, mitä Android saa tallentaa.

Paikalliset tiedostot ovat suurempi ansa. Latauksia, PDF-tiedostoja, tallenteita, asiakirjoja, musiikkia ja satunnaisiin sovelluskansioihin tallennettuja tiedostoja ei pidä jättää pelkän laitevarmuuskopion varaan. Google lisäsi Google Play -palveluiden versioon 26.06 helmikuussa 2026 tuetuissa laitteissa toimivan paikallisten tiedostojen varmuuskopioinnin, joka voi tallentaa ladattuja asiakirjoja Google Driveen. Pidä sitä ladattujen asiakirjojen lisäsuojana, ei sisäisen tallennustilan täydellisenä varmuuskopiona.

## Android 17 muutti ajankohtaa, ei tarkistuslistaa

Android 17:n jakelu alkoi 16.6.2026 useimmille tuetuille Pixel-puhelimille. Muiden valmistajien yhteensopivat Android-puhelimet seuraavat myöhemmin vuoden 2026 aikana valmistajan, mallin, alueen ja operaattorin aikataulun mukaan.

Siksi vierekkäin olevissa puhelimissa voi pitkään olla eri Android-versio. Pixel voi käyttää jo Android 17:ää, kun Samsung, OnePlus, Motorola tai Xiaomi odottaa vielä päivitystä. Varmuuskopioinnin tarkistuslista pysyy samana, mutta Asetusten polku ja sanamuodot voivat muuttua hieman.

Monissa puhelimissa varmuuskopiointi löytyy polusta **Asetukset > Google > Kaikki palvelut > Varmuuskopioi**. Pixelissä se voi näkyä myös suoraan polussa **Asetukset > Google > Varmuuskopiointi**. Samsung Galaxyssa aloita Asetusten **Tilit ja varmuuskopiointi** -osiosta.

## Tarkista varmuuskopio ennen vianetsintää

Avaa varmuuskopiointinäkymä ja tarkista kaksi asiaa: onko varmuuskopiointi käytössä ja milloin viimeisin onnistunut varmuuskopio tehtiin. Jos aikaleima on vanha, käynnistä varmuuskopiointi ja anna sen valmistua ennen jatkamista.

Älä kiirehdi. Googlen varmuuskopiointi ja palautus voivat kestää kokonaisuudessaan jopa 24 tuntia, vaikka pieni varmuuskopio valmistuu usein paljon nopeammin. Jos aiot palauttaa tehdasasetukset, odota että näkymässä näkyy tuore onnistunut varmuuskopio. Älä oleta taustalla käynnistyneen työn onnistuneen.

Jos puhelin jää odottamaan varmuuskopiointia, tarkista ensin perusasiat. Yhdistä Wi-Fi-verkkoon, kytke puhelin laturiin, päivitä Google Play -palvelut ja Google One, jos päivitystä tarjotaan, ja varmista ettei Google-tallennustila ole täynnä. Maksuttoman Google-tilin 15 gigatavua jaetaan Gmailin, Driven ja Kuvien kesken, joten tila voi loppua odotettua nopeammin.

## Kopioi paikalliset tiedostot itse

Paikallisille tiedostoille manuaalinen kopio on edelleen turvallisin varmistus.

Yhdistä puhelin USB-C-kaapelilla tietokoneeseen. Kun USB-ilmoitus tulee näkyviin, avaa se ja valitse tiedostonsiirto. Puhelimen sisäisen tallennustilan pitäisi näkyä tietokoneessa.

Kopioi ainakin nämä kansiot, jos ne ovat olemassa:

- DCIM, kameran kuville ja videoille.
- Download, selaimesta tallennetuille PDF-tiedostoille, lipuille, asennuspaketeille ja lomakkeille.
- Documents, tuottavuussovellusten tallentamille asiakirjoille.
- Music ja Recordings, jos säilytät ääntä paikallisesti.
- Pictures ja Movies, etenkin jos jokin sovellus tallentaa mediaa DCIM-kansion ulkopuolelle.
- WhatsAppin mediakansiot, jos niitä on. Uusissa Android-versioissa ne voivat olla polussa Android/media/com.whatsapp/WhatsApp/Media eivätkä suoraan sisäisen tallennustilan juuressa.

Vaikka Google Kuvien varmuuskopiointi olisi käytössä, ota DCIM-kansiosta paikallinen kopio ennen tehdasasetusten palautusta. Korvaamattomia kuvia ei kannata jättää yhden pilviasetuksen varaan. Väärä tili, täyttynyt tallennustila tai kansio, jota ei koskaan valittu varmuuskopioitavaksi, riittää ongelmaan.

Samsung-käyttäjillä on toinen käyttökelpoinen vaihtoehto: Samsung Smart Switch. Asenna Smart Switch Windows-tietokoneelle tai Macille, yhdistä Galaxy-puhelin USB-kaapelilla, valitse varmuuskopiointi ja tarkista tietoluokat ennen aloitusta. Smart Switch voi tallentaa esimerkiksi puhelut, yhteystiedot, viestit ja sovelluksia, mutta Samsung huomauttaa, ettei jokaista tiedostotyyppiä tai kohdetta tueta. Käytä sitä laajana turvaverkkona, älä tärkeimpien tiedostojen ainoana kopiona.

## Varmuuskopioi viestisovellukset erikseen

Viestisovellukset toimivat omilla säännöillään. Älä oleta Androidin hoitavan niitä kaikkia.

WhatsApp käyttää omaa varmuuskopiointia. Avaa WhatsAppin asetuksista **Keskustelut**-osio ja sen varmuuskopiointi. Tarkista Google-tili, varmuuskopiointitiheys sekä viimeisimmän kopion aika. Keskustelut palaavat uuteen Android-puhelimeen tai tyhjennettyyn laitteeseen vain, jos varmuuskopiointi oli käytössä ennen nollausta.

Telegramin tavalliset pilvikeskustelut säilytetään palvelimella ja palaavat kirjautumisen jälkeen. Telegramin salaiset keskustelut ovat eri asia. Ne ovat laitekohtaisia, eivät kuulu Telegramin pilveen eivätkä siirry toiseen puhelimeen.

Signalissa on useampi varmuuskopiointitapa. Signal Secure Backups on valinnainen ja päästä päähän salattu palvelu, joka käyttää palautusavainta. Androidin paikallinen varmuuskopiointi taas luo salatun varmuuskopiotiedoston laitteen tallennustilaan. Jos käytät paikallista vaihtoehtoa, kopioi varmuuskopiotiedosto tai koko sille valittu kansio turvalliseen paikkaan ja säilytä palautusavain erikseen. Ilman molempia varmuuskopiosta ei ole hyötyä.

## Suojaa tunnistautumissovellukset ja 2FA-koodit

Tämä vaihe jää usein tekemättä. Se voi myös lukita sinut kaikkein tärkeimmiltä tileiltäsi.

Google Authenticator voi synkronoida koodit sovelluksessa käytössä olevalle Google-tilille. Avaa sovellus ja tarkista yläreunan tilikuvakkeesta, mille tilille tiedot synkronoidaan. Jos Authenticatoria käytetään ilman kirjautunutta Google-tiliä, siirrä koodit käsin ennen nollausta: avaa valikko, valitse tilien siirto ja vienti, ja lue QR-koodit toisella laitteella.

Microsoft Authenticator tukee pilvivarmuuskopiointia, mutta Android-varmuuskopio palautuu vain Androidiin ja iOS-varmuuskopio vain iOS:ään. Avaa sovelluksen asetukset, ota pilvivarmuuskopiointi käyttöön ja varmista palautukseen käytettävä henkilökohtainen Microsoft-tili. Työ- ja koulutileille voi silti joutua kirjautumaan uudelleen palautuksen jälkeen.

Authy tukee salattua pilvivarmuuskopiointia ja tunnusten synkronointia mobiililaitteiden välillä. Varmista, että varmuuskopiot ovat käytössä ja että tiedät niiden salasanan. Authy ei pysty palauttamaan unohtunutta varmuuskopiosalasanaa.

Tallenna myös jokaisen kaksivaiheisella tunnistautumisella suojatun palvelun palautuskoodit. Säilytä niitä salasananhallinnassa tai tulosta ne ja laita turvalliseen paikkaan. Kuvakaappaus on parempi kuin ei mitään, mutta se siirtää tilien palautustiedot kuvakirjastoon, joka ei välttämättä ole niille oikea paikka.

## Mitkä toimet vaativat täydellisen varmuuskopion

Sovelluksen välimuistin tyhjentäminen poistaa väliaikaisia tiedostoja. Sen ei pitäisi poistaa tiliä, asiakirjoja, kuvia tai tallennettua sovellusdataa. Pelkästään tätä varten täydellistä varmuuskopiota ei yleensä tarvita.

Sovelluksen datan tyhjentäminen on eri asia. Se palauttaa sovelluksen samaan tilaan kuin juuri asennettuna. Paikalliset muistiinpanot, lataukset, kirjautumisistunnot, offline-kartat, pelitallennukset ja sovelluskohtaiset asetukset voivat kadota. Varmuuskopioi kyseinen sovellus ensin.

Vikasietotila poistaa kolmannen osapuolen sovellukset väliaikaisesti käytöstä, mutta ei poista niitä. Normaalin uudelleenkäynnistyksen jälkeen niiden pitäisi palata. Varmuuskopiointi on tässä valinnainen, ellei vikasietotila ole osa laajempaa siivousta.

Välimuistiosion tyhjentäminen niissä puhelimissa, joissa toiminto vielä on, poistaa palautustilasta väliaikaisia järjestelmätiedostoja. Henkilökohtaisten tietojen pitäisi säilyä, mutta työskentelet jo matalan tason valikossa. Tee varmuuskopio ensin, jos laite toimii riittävän vakaasti.

Tehdasasetusten palautus poistaa puhelimen tiedot. Poikkeuksia ei ole. Samsung Galaxyssa polku on tavallisesti **Asetukset > Yleinen hallinta > Palauta > Tehdasasetusten palautus**. Pixelissä ja monissa lähes vakio-Androidia käyttävissä puhelimissa toiminto löytyy Asetusten **Järjestelmä**-osion nollausasetuksista. Älä aloita ennen kuin Googlen varmuuskopio, kuvien varmuuskopiointi, paikallisten tiedostojen kopio, viestisovellusten varmuuskopiot ja 2FA-tiedot on tarkistettu.

## Tarkista FRP ennen nollausta

Factory Reset Protection (FRP) on Androidin varkaudenestolukitus. Tehdasasetusten palautuksen jälkeen Android voi pyytää näytön lukitusta tai aiemmin puhelimeen synkronoidun Google-tilin tietoja. Jos et pysty antamaan niitä, käyttöönotto voi pysähtyä, kunnes omistajuus vahvistetaan.

Ennen kuin vianetsintä etenee tehdasasetusten palautukseen, tarkista puhelimessa olevan Google-tilin sähköpostiosoite ja testaa sen salasana selaimella tai toisella laitteella. Varmista myös puhelimen PIN-koodi, kuvio tai salasana. Jos olet vaihtanut Google-tilin salasanan aivan äskettäin, Google neuvoo odottamaan 24 tuntia ennen tehdasasetusten palautusta.

Oman puhelimen vianetsinnässä Google-tiliä ei tarvitse poistaa vain FRP:n välttämiseksi, kunhan tunnukset ovat varmasti tiedossa. Tilin poistaminen laitteesta poistaa laitesuojauksen käytöstä, mikä on oikea menettely silloin, kun puhelin myydään tai annetaan toiselle. Vianetsinnässä tavoite on yksinkertainen: varmista tunnukset, viimeistele varmuuskopiot ja palauta tehdasasetukset vasta, kun pienemmän riskin korjaukset eivät auta.
