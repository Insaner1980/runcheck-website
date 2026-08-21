---
title: "Kuinka kuuma on puhelimelle liian kuuma?"
description: "Kuinka kuuma on liian kuuma? Ärsyttävä vastaus kuuluu: se riippuu siitä, mitä lämpötilaa mittaat."
listSummary: "Kuinka kuuma on liian kuuma?"
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["lämpötila", "kuumeneminen", "android", "vianetsintä", "laitteisto"]
locale: "fi"
draft: false
---
Yksi Celsius-luku ei tarkoita “liian kuumaa” kaikille puhelimille. Ympäristön ilma, puhelimen pinta, akku, suoritin ja Androidin lämpötila-status ovat eri mittauksia. Yhden mittauksen rajaa ei pidä esittää toisen rajana.

## Käytä valmistajan käyttölämpötila-aluetta

Oikea numeroalue on juuri oman mallisi valmistajan julkaisema. Esimerkiksi Googlen [Pixel 7:n ja Pixel 7 Pron turvallisuusohje](https://support.google.com/pixelphone/answer/12164747?hl=en) kieltää näiden mallien käyttämisen tai lataamisen alle 0 °C:n tai yli 35 °C:n ympäristölämpötilassa. Se on nimettyjen Pixel-mallien ympäristölämpötila, ei yleinen Android-akun tai sisäosan raja.

Muut valmistajat ja mallit voivat ilmoittaa eri käyttö- ja säilytysalueet. Tarkista oman mallin, alueen ja akun turvallisuusohje tai tekniset tiedot.

## Androidin lämpötila-status ei ole lämpömittari

Androidin [Thermal API](https://developer.android.com/games/optimize/adpf/thermal) ilmoittaa lämpökuorman tasoja, jotta ohjelmisto voi keventää työtä. Se ei määritä yhtä Celsius-rajaa kaikille laitteille. Suorituskyvyn, kirkkauden tai latauksen rajoitus, varoitus tai sammutus voi olla laitteen reaktio sen omiin antureihin ja rajoihin.

Sovelluksen näyttämä akun lämpötila ei ole sama kuin pinnan tai ympäröivän ilman lämpötila. Myös anturien saatavuus ja tarkkuus vaihtelevat.

## Kuumuus ja pitkäaikainen kuluminen

[Vertaisarvioitu litiumioniakkujen vanhenemiskatsaus](https://pubs.rsc.org/en/content/articlehtml/2021/cp/d1cp00359c) tunnistaa lämpötilan yhdeksi akun vanhenemiseen vaikuttavaksi tekijäksi. Se tukee toistuvan kuumuuden välttämistä, mutta ei aiempia yleisiä varoitusvyöhykkeitä tai korjauspäätöstä tietyn Android-lukeman perusteella.

Lyhyt kuormituspiikki ja tuntikausien jatkuva kuumuus eivät ole sama asia. Puhelimen oma toiminta ja valmistajan varoitukset ovat yleistä taulukkoa tärkeämpiä.

## Mitä tehdä

Lopeta raskas käyttö ja irrota laturi, jos puhelin näyttää lämpötilavaroituksen, lopettaa lataamisen, sammuu tai tuntuu poikkeuksellisen epämukavalta käsitellä. Siirrä se varjoisaan, ilmavaan paikkaan ja anna jäähtyä luonnollisesti. Älä käytä vettä, jäätä, jääkaappia tai pakastinta.

Jos varoitus toistuu kevyessä käytössä tai akku turpoaa, kuori kohoaa, laite haisee tai savuaa tai siinä on neste- tai näkyvä vaurio, lopeta käyttö ja pyydä ammattilaisen tai valmistajan apua.

## Käytännön vastaus

“Liian kuuma” tarkoittaa oman mallin dokumentoitujen olojen ulkopuolta tai tilaa, jossa laitteen suojaus puuttuu peliin. Älä yhdistä Pixelin ympäristörajoja, akkusovelluksen lukemia, pinnan lämpöä ja Androidin lämpötila-statusta yhdeksi yleiseksi asteikoksi.
