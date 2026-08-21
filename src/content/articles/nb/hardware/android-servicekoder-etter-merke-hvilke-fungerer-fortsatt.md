---
title: "Android-servicekoder etter merke: dokumenterte ruter som fortsatt kan fungere"
description: "Service- og diagnostikkruter dokumentert her for Samsung, Pixel og Xiaomi. Tilgjengelighet og virkemåte varierer med modell, region, operatør, programvare og produsent; Android 17 gir ikke ett universelt kodesett."
listSummary: "Dokumenterte serviceruter etter merke med modell- og programvarebegrensninger."
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostikk", "sensorer", "android", "maskinvare", "guide"]
locale: "nb"
draft: false
---
Det finnes ingen pålitelig komplett liste. Diagnosekoder avhenger av produsent, modell, telefonapp, fastvare, operatør og region. Bare koder med direkte gjeldende produsentdokumentasjon beholdes nedenfor.

Direkte belegg: [Samsung dokumenterer `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google dokumenterer Pixel-koden `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB), og [Xiaomi dokumenterer CIT](https://www.mi.com/global/support/faq/details/KA-491482/) via `*#*#6484#*#*` eller `*#*#64663#*#*` på aktuelle enheter.

## Samsung Galaxy

Samsung har fortsatt et av de bedre diagnostikkoppsettene, blant annet fordi selskapet tilbyr både koder i ringeappen og en støttet løsning i en app.

`*#0*#` åpner Samsungs skjerm for maskinvaretester på mange Galaxy-telefoner. Den nøyaktige utformingen varierer etter modell, men du kan vanligvis teste skjermen, berøringen, kameraene, høyttalerne, vibrasjonen, sensorene og noen ganger fingeravtrykksmaskinvaren. På enkelte operatørmodeller eller sterkt låste fastvareversjoner åpnes ikke menyen i det hele tatt.

Samsung Members er den tryggere veien for vanlige brukere. Åpne Samsung Members, gå til Diagnostikk og velg testene du trenger. Appen leder deg gjennom kontrollene og gir tydeligere resultater enn servicemenyen.

## Xiaomi, Redmi og POCO

[Xiaomis støtteside](https://www.mi.com/global/support/faq/details/KA-491482/) dokumenterer to koder i ringeappen for en CIT-test av berøringsskjermen på aktuelle enheter: `*#*#6484#*#*` og `*#*#64663#*#*`.

I den dokumenterte testen drar du en finger over skjermen og ser etter avbrutte eller ekstra linjer. Kilden støtter bare denne feilsøkingen av berøringsskjermen. Tilgjengelighet og virkemåte varierer med modell, region, operatør, fastvare og programvareversjon.

## Google Pixel

Pixel-dokumentasjonen beskriver en Pixel-spesifikk diagnostikkrute. Tilgjengeligheten kan variere med modell, region, operatør og programvareversjon.

`*#*#7287#*#*` åpner Pixel Repair Diagnostics App på Pixel-telefoner som støttes. Google dokumenterer den for kontroller før og etter reparasjon. Den krever internettilkobling og leder deg gjennom prosessen på skjermen.

På Pixel 6 og nyere finner du batterikontroller under `Innstillinger > Batteri > Batteridiagnostikk`. Dette er en vanlig side i Innstillinger, ikke en skjult kode.

Eldre artikler nevner noen ganger kalkulatorkoden `.12345+=` som en vei til utviklermodus på Pixel. Den ville jeg ikke stolt på i 2026. Bruk heller Googles offisielle kode for Pixel-diagnostikk.

## Safety

Hvis en dokumentert kode ikke fungerer, bruker du produsentens støttede diagnostikkapp eller serviceinstruks. Ikke slå av sikkerhetskontroller eller skriv inn koder for tilbakestilling, klargjøring, radiokalibrering, fastvare eller serviceprogrammering fra en ubekreftet liste.
