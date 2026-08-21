---
title: "Android-servicekoder efter mærke: dokumenterede veje, der stadig kan virke"
description: "Service- og diagnoseveje dokumenteret her for Samsung, Pixel og Xiaomi. Tilgængelighed og funktion varierer med model, område, operatør, software og producent; Android 17 leverer ikke ét universelt kodesæt."
listSummary: "Mærkespecifikke service- og diagnoseveje, der stadig kan virke med model- og softwarebegrænsninger."
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostik", "sensorer", "android", "hardware", "guide"]
locale: "da"
draft: false
---
Der findes ingen pålidelig komplet liste. Diagnosekoder afhænger af producent, model, telefonapp, firmware, operatør og region. Kun koder med direkte aktuel producentdokumentation bevares nedenfor.

Direkte dokumentation: [Samsung dokumenterer `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google Pixel-koden `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB), og [Xiaomi CIT](https://www.mi.com/global/support/faq/details/KA-491482/) via `*#*#6484#*#*` eller `*#*#64663#*#*` på relevante enheder.

## Samsung Galaxy

Samsung har stadig en af de bedre diagnoseløsninger, blandt andet fordi mærket tilbyder både koder i opkaldsappen og en officielt understøttet app.

`*#0*#` åbner Samsungs skærm til hardwaretest på mange Galaxy-telefoner. Det præcise layout varierer efter model, men du kan som regel teste skærm, touch, kameraer, højttalere, vibration, sensorer og nogle gange fingeraftrykshardware. På visse operatørmodeller eller stærkt begrænset firmware åbner koden slet ikke.

Samsung Members er den sikrere løsning for de fleste. Åbn Samsung Members, gå til Support eller Få hjælp og derefter Diagnostik. Appen fører dig gennem testene og viser tydeligere resultater end servicemenuen.

## Xiaomi, Redmi og POCO

[Xiaomis supportside](https://www.mi.com/global/support/faq/details/KA-491482/) dokumenterer to telefonkoder til en CIT-test af touchskærmen på relevante enheder: `*#*#6484#*#*` og `*#*#64663#*#*`.

I den dokumenterede test føres en finger hen over skærmen, mens du ser efter afbrudte eller ekstra linjer. Kilden understøtter kun denne fejlfinding af touchskærmen. Tilgængelighed og funktion varierer efter model, område, operatør, firmware og softwareversion.

## Google Pixel

Pixel-dokumentationen beskriver en Pixel-specifik diagnosevej. Tilgængeligheden kan variere med model, område, operatør og softwareversion.

`*#*#7287#*#*` åbner appen Pixel Repair Diagnostics på understøttede Pixel-telefoner. Google dokumenterer den til kontrol af hardware før eller efter en reparation. Den kræver internetforbindelse og fører dig gennem processen på skærmen.

På Pixel 6 og nyere finder du batterispecifikke kontroller under Indstillinger > Batteri > Batteridiagnostik. Det er en almindelig vej i Indstillinger, ikke en skjult kode.

Ældre artikler nævner nogle gange Lommeregner-tricket `.12345+=` til engineering mode på Pixel. Det ville jeg ikke regne med i 2026. Brug i stedet den officielle kode til Pixel-diagnostik.

## Safety

Hvis en dokumenteret kode ikke virker, skal du bruge producentens understøttede diagnostikapp eller servicevejledning. Slå ikke sikkerhedskontroller fra, og indtast ikke nulstillings-, provisioning-, radiokalibrerings-, firmware- eller programmeringskoder fra en ubekræftet liste.
