---
title: "Mitä thermal throttling tarkoittaa ja miten se vaikuttaa puhelimeen?"
description: "Miksi nopea puhelin tuntuu yhtäkkiä hitaalta kesken pelin, videopuhelun tai kameran käytön? Useimmiten kyse on lämpötilasta johtuvasta suorituskyvyn rajoittamisesta eli thermal throttlingista. Laite on kuuma, joten Android ja valmistajan ohjelmisto pienentävät suorituskykyä ennen kuin lämpö muodostuu turvallisuusongelmaksi."
listSummary: "Miksi nopea puhelin tuntuu yhtäkkiä hitaalta kesken pelin, videopuhelun tai kameran käytön?"
hub: "thermal"
sourceNumber: 56
order: 4
tags: ["lämpötila","kuumeneminen","android","vianetsintä","laitteisto"]
locale: "fi"
draft: false
---
## Mitä lämpötilasta johtuva suorituskyvyn rajoittaminen tarkoittaa?

Se on hallittua hidastamista. Puhelin laskee CPU:n tai GPU:n nopeutta, himmentää näyttöä, pienentää lataustehoa, rajoittaa radioiden toimintaa tai vähentää muuta paljon virtaa kuluttavaa toimintaa, jotta lämpötila laskisi.

Kyse ei itsessään ole viasta. Puhelin valitsee alemman suorituskykytason, jotta akku, näyttö, modeemi ja SoC pysyvät valmistajan määrittämissä turvallisuusrajoissa.

Kompromissi näkyy pudonneina ruutuina, sovellusten hitaampana avautumisena, näytön himmenemisenä, kameran rajoituksina, latauksen hidastumisena tai pelinä, joka toimii aluksi sulavasti ja alkaa sitten nykiä. Android ei kysy lupaa. Se vain tekee sen.

## Androidin lämpötilatasot

Androidissa on ollut julkiset lämpötilan tilaa kuvaavat rajapinnat Android 10:stä lähtien. Sovellukset voivat lukea tuetuissa laitteissa yksinkertaistetut vakavuustasot `PowerManager`-rajapinnan kautta:

- **None:** Lämpö ei rajoita suorituskykyä.
- **Light:** Kevyt rajoitus, joka ei juuri vaikuta normaaliin käyttöön.
- **Moderate:** Jonkin verran rajoitusta, mutta laite on yleensä edelleen hyvin käytettävissä.
- **Severe:** Voimakas rajoitus, joka vaikuttaa suorituskykyyn selvästi.
- **Critical:** Järjestelmä on jo vähentänyt tehonkulutusta voimakkaasti.
- **Emergency:** Keskeisiä osia voidaan joutua sammuttamaan lämpötilan vuoksi.
- **Shutdown:** Laite on sammutettava heti.

Tasojen nimet ovat standardoituja. Niiden käynnistymislämpötilat eivät ole. Pixel, Galaxy S Ultra, Xiaomin pelipuhelin ja edullinen Motorola voivat tulkita samat lämpötilat eri tavoin, koska niiden jäähdytysratkaisut, akut, rungot, näytöt ja turvamarginaalit poikkeavat toisistaan.

Siksi tarkat lämpötilaneuvot muuttuvat nopeasti sotkuisiksi. Yksi puhelin voi alkaa rajoittaa suorituskykyä akun lämpötilassa, jonka toinen hyväksyy vielä latauksen aikana.

## Thermal headroom varoittaa aikaisemmin

Lämpötilan tila kertoo nykyisen vaiheen. Thermal headroom eli lämpövara kertoo, kuinka lähellä nykyinen kuormitus on vakavaa suorituskyvyn rajoittamista.

Androidin pelien suorituskykyohjeissa lämpövara kuvataan arvona 0,0-1,0. Arvo 1,0 tarkoittaa, että laite on kyseisellä kuormituksella `THERMAL_STATUS_SEVERE`-rajan kohdalla tai sen lähellä. Peli voi käyttää tietoa kuvataajuuden tai kuvanlaadun pienentämiseen jo ennen kuin pelaaja huomaa hidastumisen.

Mukana on yksi hankaluus: laitetuki vaihtelee. Osa puhelimista antaa vain rajallisesti tietoa, osa palauttaa arvon `NaN`, jos tietoa kysytään liian usein, ja valmistajat voivat sovittaa lämpövaran eri tavoin oman lämpörakenteensa mukaan. Hyvän diagnostiikan pitää käsitellä lämpövaraa signaalina, ei yleispätevänä lämpömittarina.

runcheck käyttää Androidin julkisia lämpösignaaleja silloin, kun laite tarjoaa ne. Se on tärkeää, koska tavallisten sovellusten ei pitäisi perustaa käyttäjälle näytettävää lämpötilan tilaa yksityisiin sysfs-lämpötilatiedostoihin.

## Mikä käynnistää rajoittamisen?

Pitkät pelikerrat ovat ilmeisin syy. 3D-peli voi kuormittaa CPU:ta, GPU:ta, näyttöä, kaiuttimia, verkkoyhteyttä ja haptista palautetta samaan aikaan.

Myös kamera kuumentaa. 4K- tai 8K-tallennus, HDR-käsittely, pitkät videoleikkeet ja suora auringonpaiste voivat nostaa puhelimen lämpötilaa nopeasti. Kamerasovellus voi pienentää laatua tai lopettaa tallennuksen, jos laite kuumenee liikaa.

Navigointi toimii hitaammin mutta salakavalasti. Näyttö pysyy päällä, GPS toimii, modeemi lataa karttatietoja ja puhelin voi olla lämpimässä autotelineessä. Kun tuulilasin läpi paistaa suora aurinko, rajoittaminen alkaa nopeammin.

Lataaminen aktiivisen käytön aikana on helppo virhe. Pikalataus tuottaa lämpöä jo yksinään. Kun mukaan lisätään peli, videopuhelu, yhteyspiste tai videotallennus, puhelimella on vähemmän mahdollisuuksia jäähtyä.

Myös heikko signaali voi kuormittaa modeemia. Puhelin voi lämmetä näyttö sammutettunakin, jos se yrittää pitää 5G-yhteyttä yllä alueella, jossa kuuluvuus on heikko.

Suuret järjestelmäpäivitykset voivat aiheuttaa tilapäistä lämpenemistä. Android 17 on julkaistu useimmille tuetuille Pixel-laitteille, ja muiden yhteensopivien Android-puhelinten valmistajaversiot tulevat myöhemmin valmistajien omien aikataulujen mukaan. Minkä tahansa suuren päivityksen jälkeen sovellusten optimointi ja taustasynkronointi voivat lämmittää puhelinta päivän tai kaksi.

## Lämpörajoitus ja akun kuntoon liittyvä rajoittaminen

Lämpöön liittyvä rajoittaminen on tilapäistä. Kun lopetat raskaan toiminnan ja annat puhelimen jäähtyä, suorituskyky palautuu.

Akun kuntoon liittyvä suorituskyvyn hallinta on eri asia. Akun vanhetessa sen sisäinen vastus kasvaa ja kyky antaa hetkellisesti paljon virtaa heikkenee. Jotkin puhelimet pienentävät latausjännitettä, latausnopeutta tai muuta toimintaa, jotta vanheneva akku pysyy vakaana. Google esimerkiksi dokumentoi Pixel 6a:ssa ja uudemmissa käytettävän Akunkestoavun (Battery health assistance), joka säätää akun enimmäisjännitettä vaiheittain 200 lataussyklistä alkaen tuetuissa malleissa.

Se ei ole sama asia kuin pelin hidastuminen 20 minuutin jälkeen. Ensimmäinen johtuu kuormituksen tuottamasta lämmöstä, toinen akun vanhenemisen hallinnasta.

Myös ratkaisu on erilainen. Lämpö vaatii jäähdytystä ja pienempää kuormaa. Kulunut akku tarvitsee vaihdon tai maltillisemmat lataustavat.

## Mistä huomaat rajoittamisen?

Selvin merkki on suorituskyvyn heikkeneminen käyttökerran aikana. Peli alkaa 60 fps:n nopeudella ja putoaa siitä. Kamera aloittaa tallennuksen normaalisti ja varoittaa myöhemmin kuumuudesta. Näyttö himmenee, vaikka et muuttanut kirkkautta. Lataus keskeytyy tai hidastuu voimakkaasti.

Myös kuuman kohdan sijainti voi kertoa jotain. Kameran seudulla tuntuva lämpö viittaa usein SoC-piiriin. Takapinnan keskiosan lämpö liittyy todennäköisemmin akkuun tai langattoman latauksen kelaan. USB-C-portin kuumeneminen voi viitata kaapeliin, laturiin tai latauspiiriin.

Androidin lämpötilan tilaa lukevat sovellukset tekevät tilanteesta vähemmän arvailua. Pelin aikana tasolta None tasolle Light ja edelleen Moderate siirtyminen voi olla odotettavaa. Severe-, Critical- tai toistuvat Shutdown-tason tapahtumat tavallisessa käytössä eivät ole.

## Näin vähennät rajoittamista

Pienennä kuormaa ennen kuin puhelin joutuu tekemään sen puolestasi.

Pienennä peleissä ensin kuvataajuutta. Se auttaa usein eniten. Laske sen jälkeen resoluutiota, varjoja, tehosteita ja tekstuurien laatua. Vakaa kuvataajuus keskitason asetuksilla tuntuu yleensä paremmalta kuin ultra-asetus, joka alkaa rajoittaa suorituskykyä kymmenen minuutin jälkeen.

Poista suojakuori raskaan käytön ajaksi. Takapinta ja runko ovat osa puhelimen jäähdytysjärjestelmää.

Käytä Wi-Fiä mobiilidatan sijaan, jos mobiilisignaali on heikko. Huono kuuluvuus voi muuttaa tavallisen käyttökerran kuumaksi.

Vältä suoraa auringonvaloa. Puhelin voi rajoittaa suorituskykyä aurinkoisessa autotelineessä, vaikka kuormitus ei muuten olisi erityisen raskas.

Älä käytä pikalatausta raskaan käytön aikana. Irrota laturi tai vaihda hitaampaan, jos haluat jatkaa pelaamista.

Pidä sovellukset ja järjestelmä ajan tasalla. Valmistajat säätävät lämmönhallintaa päivityksillä, ja huono sovelluspäivitys voi tuottaa ylimääräistä lämpöä, kunnes se korjataan.

## Milloin rajoittaminen kertoo suuremmasta ongelmasta?

Rajoittaminen vaativan pelin aikana on normaalia. Rajoittaminen viestiä kirjoittaessa viileällä pöydällä ei ole.

Jos puhelin kuumenee käyttämättömänä, tarkista akun käyttö, signaalin voimakkuus, hiljattain asennetut sovellukset ja vikasietotila (Safe Mode). Jos puhelin kuumenee edelleen vikasietotilassa tai akku on turvonnut, tyhjenee äkillisesti tai puhelin sammuu varausta ollessa jäljellä, käsittele tilannetta laitteisto- tai akkuvikana.

Alle 80 %:n akun kunto on tavallinen vaihtoraja puhelimissa, jotka näyttävät lukeman. Tuetuissa Pixel-malleissa Akun kunto merkitään tilaksi Heikentynyt, kun kapasiteetti alittaa 80 %. Samsung Members näyttää akun tilaksi Normaali, Heikko tai Huono. Nämä tiedot ovat hyödyllisempiä kuin kuumuuden perusteella arvaaminen.

## Lopputulos

Puhelimen lämpöturvajärjestelmä ei ole vihollinen. Voit vähentää sen puuttumista pienentämällä kuormaa, parantamalla jäähdytystä, välttämällä kuumia ympäristöjä ja jättämällä pikalatauksen pois raskaan käytön aikana. Jos rajoittamista tapahtuu kevyessä käytössä, sitä ei kuitenkaan pidä sivuuttaa. Syy voi silloin olla sovellus, heikko signaali, laturi tai kulunut akku.

*Metakuvaus: Androidin sisäinen lämpötilasta johtuva hidastaminen suojaa puhelinta kuumuudelta. Tutustu Androidin lämpötilatasoihin, thermal headroom -arvoon, tavallisiin syihin ja turvallisiin tapoihin vähentää rajoittamista.*
