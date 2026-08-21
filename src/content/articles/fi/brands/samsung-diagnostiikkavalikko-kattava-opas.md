---
title: "Samsungin *#0*#-diagnostiikkavalikko: kattava opas"
description: "Syötät *#0*# Samsungin Puhelin-sovellukseen, ja tavallinen numeronvalitsin katoaa. Tilalle tulee pelkistetty ruudukko, jonka painikkeilla voi testata näyttöä, kosketuspaneelia, kaiuttimia, antureita, kameroita, värinämoottoria ja fyysisiä painikkeita."
listSummary: "Syötät *#0*# Samsungin Puhelin-sovellukseen, ja tavallinen numeronvalitsin katoaa."
hub: "brands"
sourceNumber: 160
order: 8
tags: ["valmistaja", "android", "diagnostiikka", "merkkikohtainen", "opas"]
locale: "fi"
draft: false
---
Samsung dokumentoi virallisesti koodin `*#0*#` keinoksi avata laitteistotestin soveltuvissa Galaxy-laitteissa. [Samsungin tukisivu](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/) yhdistää koodin suoraan muun muassa näytön värien, kuulokkeen, värinän, antureiden, kosketuksen, kaiuttimen, näppäinten, etukameran, mustan näytön ja LEDin testeihin silloin, kun ne ovat saatavilla.

Koodi ei ole taattu jokaisessa Galaxy-puhelimessa. Malli, alue, operaattorin ohjelmisto, yrityskäytäntö, suojausasetukset, Samsung Phone -versio ja One UI -koontiversio voivat muuttaa tai estää käytön.

## Dokumentoidun koodin kokeileminen

Avaa Samsungin oma Puhelin-sovellus ja kirjoita valintanäppäimistöllä `*#0*#`. Älä paina soittonäppäintä. Jos testiruudukko avautuu, valitse vain tietoja muuttamaton laitteistotesti ja seuraa näytön toimintaa.

Tarkka ruudukko voi poiketa Samsungin esimerkistä. Puuttuva painike ei osoita vikaa, ja läpäisty testi osoittaa vain, että toiminto vastasi sillä hetkellä.

## Jos koodi ei avaudu

Älä poista suojaustoimintoja käytöstä vain piilovalikon pakottamiseksi. Käytä sen sijaan [Samsung Membersin diagnostiikkaa](https://www.samsung.com/us/support/answer/ANS10003443/). Testit ja valikkopolut vaihtelevat laitteen, maan ja sovellusversion mukaan, mutta se on Samsungin tavallinen tuettu diagnostiikkareitti.

Tämä artikkeli ei suosittele dokumentoimattomia koodiluetteloita. Laiteohjelmisto-, radiokalibrointi-, palautus-, provisiointi- tai huolto-ohjelmointikoodit voivat muuttaa laitteen tilaa, eikä niitä pidä syöttää varmentamattomasta luettelosta.

## Testien tulkinta

Tasaväri- ja mustan näytön testit voivat paljastaa näkyviä pikseli- tai tasaisuusongelmia, mutta ne eivät varmista koko näyttöä. Kosketustesti voi näyttää alueita, jotka eivät rekisteröi kosketusta testin aikana. Kuuloke-, kaiutin-, värinä-, anturi-, näppäin- ja kameratestit näyttävät, vastaako valittu toiminto, eivät sen pitkäaikaista luotettavuutta.

Jos testi epäonnistuu, käynnistä puhelin uudelleen, poista mahdollisesti häiritsevät lisävarusteet, asenna tuetut päivitykset ja kokeile kerran uudelleen. Jatkuva vika kannattaa tarkistuttaa Samsungin tuella tai valtuutetussa huollossa.

## One UI 9:n saatavuus

[Samsungin nykyinen One UI 9 -sivu](https://www.samsung.com/us/apps/one-ui/) sanoo, että virallinen One UI 9 on otettu ensin käyttöön Galaxy Z Fold8 Ultra-, Galaxy Z Fold8- ja Galaxy Z Flip8 -laitteissa ja sen odotetaan tulevan vähitellen muihin Galaxy-laitteisiin. Saatavuus vaihtelee mallin, maan tai alueen, operaattorin, laiteohjelmiston ja koontiversion mukaan.

Tämä käyttöönottoilmoitus ei takaa, että `*#0*#` on käytettävissä tietyssä laitteessa. Käytä koodin soveltuvuuden lähteenä virallista koodisivua ja Samsung Membersia, jos valintanäppäimistöreittiä ei ole.
