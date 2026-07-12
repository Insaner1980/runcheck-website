---
title: "Kuluttaako suuri virkistystaajuus akkua nopeammin?"
description: "120 Hz:n näyttö voi kuluttaa enemmän akkua kuin 60 Hz:n näyttö, etenkin jos paneelin virkistystaajuus on kiinteä. Mukautuva näyttö pienentää eroa laskemalla virkistystaajuutta silloin, kun liike ei vaadi suurta nopeutta."
listSummary: "akku, myytit ja android"
hub: "battery"
sourceNumber: 30
order: 20
subgroup: "Virrankulutus"
tags: ["akku","myytit","android","testaus","faktat"]
locale: "fi"
draft: false
---
Yleinen neuvo on poistaa 120 Hz käytöstä, jos akunkesto on tärkeä. Se on vain puoliksi oikein.

Suuri virkistystaajuus voi kuluttaa enemmän akkua kuin 60 Hz, mutta kaikki 120 Hz:n puhelimet eivät maksa siitä samaa hintaa. Vanhemmassa tai edullisemmassa puhelimessa, jossa virkistystaajuus on kiinteä, 120 Hz voi lyhentää akunkestoa selvästi. Uudemmassa puhelimessa muuttuva virkistystaajuus pienentää kustannusta, koska näyttö ei pysy 120 Hz:ssä koko päivää. Taajuus nousee vierityksen ja animaatioiden aikana ja laskee, kun kuva pysyy paikallaan.

Tämä ero merkitsee enemmän kuin pelkkä teknisten tietojen numero.

## Mitä 120 Hz käytännössä muuttaa

60 Hz:n näyttö päivittyy 60 kertaa sekunnissa. 120 Hz:n näyttö päivittyy 120 kertaa sekunnissa. Kaksinkertainen päivitysmäärä lisää näytön käsittelyketjun työtä, ja jos sovellus myös piirtää sisältöä suurella kuvataajuudella, GPU joutuu tekemään enemmän.

Hyödyn huomaa vierityksessä, näyttöjen välillä pyyhkäisyssä, valikoiden avautumisessa ja tuetuissa peleissä. Puhelin tuntuu nopeammin reagoivalta, koska näyttö päivittyy useammin ja liike näyttää vähemmän nykivältä.

Haittapuoli on yksinkertainen: näyttö ja sen ohjain tarvitsevat enemmän virtaa. Vanhempien suuren virkistystaajuuden puhelinten testeissä kiinteä 120 Hz on usein lyhentänyt koko laitteen akunkestoa noin 10 %, joskus enemmänkin kirkkaudesta, paneelityypistä ja kuormituksesta riippuen. Näyttöpainotteisessa käytössä eron huomaa.

## Muuttuva virkistystaajuus on tärkein asia

Kaikki nykyaikaiset Android-puhelimet eivät käytä 120 Hz:ä samalla tavalla.

Joissakin paneeleissa taajuus on käytännössä kiinteä. Valitset 60 tai 120 Hz, ja näyttö pysyy lähellä valittua arvoa aina kun se on päällä. Näissä puhelimissa akkuhaitta on suurin, koska näyttö päivittyy nopeasti myös silloin, kun luet paikallaan pysyvää sivua.

Paremmat paneelit muuttavat virkistystaajuutta automaattisesti. Monissa lippulaivoissa käytetään LTPO OLED -näyttöä, joka voi laskea taajuuden staattisessa sisällössä selvästi alle 60 Hz:n ja nostaa sen takaisin 120 Hz:iin, kun kosketat näyttöä. Jotkin paneelit yltävät 1 Hz:iin. Toisten vaihteluväli on suppeampi, esimerkiksi 10, 24, 30, 60 ja 120 Hz. Tarkka toiminta riippuu näytöstä, Android-versiosta, sovelluksesta ja valmistajan säädöistä.

Tämä viimeinen kohta on sotkuinen. Puhelin voi mainostaa mukautuvaa 120 Hz:n näyttöä ja silti toimia eri tavoin Chromessa, YouTubessa, peleissä, käynnistysohjelmassa ja aina päällä olevalla näytöllä. Asetusta ei tarvitse vahtia jatkuvasti, mutta ero selittää, miksi yksi 120 Hz:n puhelin voi kestää pidempään kuin toinen.

## Kiinteä 120 Hz näkyy akunkulutuksessa

Jos puhelimessa ei ole hyvää mukautuvaa paneelia, 120 Hz maksaa enemmän.

Staattinen sisältö on selvin hukkakohde. Artikkelin lukeminen, valokuvien katselu, kartan tarkistaminen tai reseptin pitäminen näytöllä ei tarvitse 120 päivitystä sekunnissa. Kiinteä paneeli päivittää silti koko ajan. Visuaalinen hyöty jää pieneksi, mutta akku maksaa kustannuksen.

Siksi kiinteällä 120 Hz:n paneelilla varustettu keskihintainen puhelin voi kuluttaa yllättävän paljon enemmän kuin lippulaiva. Käyttö tuntuu sulavalta, mutta paneeli ei osaa hidastaa yhtä aggressiivisesti.

Jos puhelin saa 60 Hz:llä tavallisesti 7 tuntia näyttöaikaa, koko päivän pakotettu 120 Hz voi leikata siitä merkittävän osan. Tarkkaa tuntimäärää ei kannata luvata, koska laitteiden erot ovat suuria, mutta tunnin tai sitä suurempi menetys kiinteän virkistystaajuuden puhelimessa on täysin mahdollinen.

## Pelaaminen muuttaa tilanteen

Pelaaminen on 120 Hz:n akunkulutuksen pahin tapaus.

Jos peli toimii 120 fps:n kuvataajuudella, näyttö päivittyy nopeasti ja GPU piirtää enemmän kuvia. Akku saa kaksinkertaisen iskun. Lisää mukaan suuri kirkkaus, mobiilidata, Bluetooth-äänentoisto ja lämmin huone, niin akun käyrä alkaa näyttää nopeasti rumalta.

Osa peleistä rajoittuu 30 tai 60 fps:ään myös 120 Hz:n puhelimessa. Silloin virkistystaajuuden asetus merkitsee vähemmän. Näyttö voi edelleen toimia suuremmalla taajuudella, mutta GPU ei tuota 120 erillistä kuvaa sekunnissa.

Pitkään pelaamiseen ilman laturia 60 Hz on edelleen tylsä mutta järkevä valinta.

## Asetuksen muuttaminen Androidissa

Pixel-puhelimissa asetus löytyy yleensä kohdasta **Asetukset > Näyttö ja kosketus > Smooth Display**. Google mainitsee edelleen Smooth Displayn poistamisen käytöstä akunsäästökeinona Pixel 4:lle ja sitä uudemmille malleille, Fold-laitteet mukaan lukien.

Samsung Galaxy -puhelimissa valinta löytyy tavallisesti kohdasta **Asetukset > Näyttö > Motion smoothness**. **Standard** tarkoittaa 60 Hz:ä. **Adaptive** sallii tuetuissa malleissa ja sovelluksissa enintään 120 Hz. Sanamuoto voi vaihdella hieman One UI -version ja alueen mukaan.

OnePlussassa, Xiaomissa, Motorolassa, Nothingissa ja muissa Android-puhelimissa asetus löytyy yleensä näyttöasetuksista nimellä **Refresh rate**, **Screen refresh rate**, **Motion smoothness** tai **Smooth display**.

Käytä mukautuvaa vaihtoehtoa tavallisessa arjessa, jos sellainen on tarjolla. Jos valittavana ovat vain kiinteät 60 ja 120 Hz, valitse 120 Hz, kun sulavuus merkitsee enemmän, ja 60 Hz, kun akunkesto on tärkeämpi.

## Kannattaako 120 Hz poistaa käytöstä?

Poista se käytöstä matkalla, akun ollessa vähissä, pitkän pelisession ajaksi tai silloin, kun luet tuntikausia paikallaan pysyvää sisältöä. 60 Hz ei vahingoita puhelinta. Se vain tuntuu vähemmän sulavalta, kun silmä on tottunut 120 Hz:iin.

Jättäisin 120 Hz:n päälle tavallisessa käytössä uudehkossa lippulaivassa, jossa on mukautuva virkistystaajuus. Puhelin laskee taajuutta jo silloin, kun siihen on mahdollisuus, ja sulavampi vieritys on yksi harvoista puhelinpäivityksistä, jonka huomaa lähes joka käyttökerralla.

Vanhemmassa suuren virkistystaajuuden puhelimessa tai edullisessa mallissa, jossa 120 Hz on kiinteä, kannattaa olla käytännöllisempi. Sulavuus on mukavaa. Se, että akkua on jäljellä vielä kello 19, on mukavampaa.
