---
title: "Androidin huoltokoodit merkeittäin: dokumentoidut reitit, jotka voivat yhä toimia"
description: "Tässä dokumentoidut huolto- ja diagnostiikkareitit Samsungille, Pixelille ja Xiaomille. Saatavuus ja toiminta vaihtelevat mallin, alueen, operaattorin, ohjelmiston ja valmistajan mukaan; Android 17 ei tarjoa yleistä koodijoukkoa."
listSummary: "Merkkikohtaiset huolto- ja diagnostiikkareitit, jotka voivat yhä toimia malli- ja ohjelmistorajoituksin."
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostiikka", "anturit", "android", "laitteisto", "opas"]
locale: "fi"
draft: false
---
Luotettavaa täydellistä luetteloa ei ole. Diagnostiikkakoodit riippuvat valmistajasta, mallista, puhelinsovelluksesta, laiteohjelmistosta, operaattorista ja alueesta. Alla ovat vain suoraan nykyiseen valmistajalähteeseen yhdistetyt koodit.

Suora näyttö: [Samsung dokumentoi koodin `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google Pixel-koodin `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB) ja [Xiaomi CIT-käytön](https://www.mi.com/global/support/faq/details/KA-491482/) koodeilla `*#*#6484#*#*` tai `*#*#64663#*#*` soveltuvissa laitteissa.

## Samsung Galaxy

Samsungilla on edelleen yksi paremmista diagnostiikkakokonaisuuksista, osittain siksi, että tarjolla on sekä valintakoodeja että tuettu sovellusreitti.

`*#0*#` avaa Samsungin laitteistotestin monissa Galaxy-puhelimissa. Tarkka asettelu vaihtelee mallin mukaan, mutta tavallisesti voit testata näyttöä, kosketusta, kameroita, kaiuttimia, värinää, antureita ja joskus sormenjälkilaitteistoa. Joissakin operaattorimalleissa tai tiukasti rajoitetuissa ohjelmistoversioissa valikko ei avaudu lainkaan.

Samsung Members on tavalliselle käyttäjälle turvallisempi vaihtoehto. Avaa Samsung Members, valitse Discover-välilehdeltä `Diagnostics` ja sitten `Phone diagnostics`. Sovellus ohjaa testit vaiheittain ja antaa huoltovalikkoa selvemmät tulokset.

## Xiaomi, Redmi ja POCO

[Xiaomin tukisivu](https://www.mi.com/global/support/faq/details/KA-491482/) dokumentoi soveltuville laitteille kaksi CIT-kosketusnäyttötestin valintakoodia: `*#*#6484#*#*` ja `*#*#64663#*#*`.

Dokumentoidussa testissä sormea liu'utetaan näytöllä ja tarkkaillaan katkenneita tai ylimääräisiä viivoja. Lähde tukee vain tätä kosketusnäytön vianetsintää. Saatavuus ja toiminta vaihtelevat mallin, alueen, operaattorin, laiteohjelmiston ja ohjelmistoversion mukaan.

## Google Pixel

Pixel-puhelimet tukevat osaa yleisistä Android-koodeista, mutta tärkein nykyinen diagnostiikkakoodi on Pixel-kohtainen.

`*#*#7287#*#*` avaa Pixel Repair Diagnostics App -sovelluksen tuetuissa Pixel-laitteissa. Google dokumentoi sen ennen korjausta ja korjauksen jälkeen tehtäviä tarkistuksia varten. Se vaatii internetyhteyden ja ohjaa käyttäjää näytöllä.

Pixel 6:ssa ja uudemmissa, Pixel Fold mukaan lukien, akkukohtaiset tarkistukset löytyvät myös virallisesta polusta `Settings > Battery > Battery Diagnostics`. Se on tavallinen Asetusten toiminto, ei piilotettu koodi.

Vanhemmissa artikkeleissa mainitaan joskus laskinsovellukseen kirjoitettava `.12345+=` Pixelin engineering mode -tilaa varten. Siihen ei kannata luottaa vuonna 2026. Käytä virallista Pixel-diagnostiikkakoodia.

## Safety

Jos dokumentoitu koodi ei toimi, käytä valmistajan tuettua diagnostiikkasovellusta tai huolto-ohjetta. Älä poista turvaominaisuuksia käytöstä tai syötä vahvistamattoman listan nollaus-, provisiointi-, radiokalibrointi-, laiteohjelmisto- tai huolto-ohjelmointikoodeja.
