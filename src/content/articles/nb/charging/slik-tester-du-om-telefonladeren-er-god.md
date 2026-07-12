---
title: "Slik tester du om telefonladeren er god"
description: "Lær hvordan du tester om laderen til Android-telefonen leverer riktig effekt, ved hjelp av apper, kabelbytte, fysisk kontroll og USB-effektmålere."
listSummary: "lading, batteri og android"
hub: "charging"
sourceNumber: 44
order: 8
tags: ["lading","batteri","android","guide","maskinvare"]
locale: "nb"
draft: false
---
En lader kan passe i kontakten og likevel stryke på ladetesten. USB-C forteller bare at pluggen passer. Det sier ikke om adapteren, kabelen og telefonen ble enige om hurtiglading.

Android 17 endrer ikke dette grunnleggende problemet. Det finnes fortsatt ingen universell Android-skjerm som sier: «Denne laderen leverer 23,4 W akkurat nå.» Du må enten trekke en slutning eller måle ordentlig.

## Les den lille utgangsteksten først

Begynn med den kjedelige delen: Se på adapteren. Snu den og finn linjen merket med utgangsverdier. Der kan det for eksempel stå 5 V / 3 A, 9 V / 2,22 A eller 20 V / 3,25 A. Multipliser volt med ampere for å få watt. En profil på 9 V / 2,22 A er omtrent 20 W. En profil på 20 V / 3,25 A er 65 W.

En enkel USB-A-adapter oppgir kanskje bare 5 V / 1 A eller 5 V / 2 A. Det tilsvarer 5 W eller 10 W, som er langsomt for en moderne telefon. En USB-C PD-lader oppgir vanligvis flere spenningsnivåer og en maksimal effekt, for eksempel 25 W, 45 W, 65 W eller mer.

Hvis laderen ikke har noen merking, bør du være skeptisk. Gode adaptere fra kjente produsenter viser utgangsverdiene et sted, selv om du trenger en lommelykt for å lese dem.

## Bruk en app til en rask kontroll

Android gjør batteristrøm og relaterte batteriverdier tilgjengelige gjennom system-API-er, slik at apper kan anslå hva som når batteriet. Ampere og AccuBattery er vanlige alternativer for en slik rask test.

Koble til laderen, åpne appen og vent 20-30 sekunder til målingen stabiliserer seg. Hold skjermlysstyrken lav, lukk krevende apper, og test når batteriet ligger et sted mellom 20 % og 70 %. Telefoner reduserer ladehastigheten nær toppen, så en test på 94 % får en god lader til å se dårligere ut enn den er.

Vær forsiktig med tallet. Appmålinger viser netto batteristrøm, ikke den nøyaktige effekten som kommer ut av stikkontaktadapteren. Telefonen bruker strøm samtidig, ladekretsen mister noe energi som varme, og enkelte enheter rapporterer batteristrøm på forskjellige måter. På noen få telefoner kan målingen være merkelig begrenset, forsinket eller rett og slett lite nyttig.

Bruk appmålingene til sammenligning, ikke som en absolutt fasit. Hvis én kabel viser 400 mA og en annen viser 2 400 mA med den samme adapteren, har du lært noe. Hvis en app sier at laderen på 30 W bare leverer 18 W, betyr det ikke automatisk at laderen er dårlig.

## Bytt kabel før du skylder på adapteren

Kabler kan svikte i stillhet. De overfører fortsatt strøm, så du antar at de fungerer, men telefonen faller tilbake til en langsom lademodus fordi kabelen ikke kan føre den forventede strømmen eller forhandle frem riktig profil.

Test med en kabel du vet fungerer. Kabelen som fulgte med telefonen, er et godt førstevalg. En sertifisert USB-C-kabel fra en seriøs tilbehørsprodusent er et annet. Ikke bruk en tynn, gammel kabel fra en skuff og forvent at den skal bevise noe.

Skader nær kontaktene er vanlige. Hvis telefonen kobler til og fra når du beveger kabelen, eller pluggen føles løs i flere enheter, bør du bytte kabelen. Det er ikke verdt å feilsøke den i enda en time.

## Bruk en USB-effektmåler når du vil ha faktiske tall

En USB-C-effektmåler som kobles inn mellom laderen og telefonen, gir den reneste testen. Den viser spenning, strøm og effekt på sin egen skjerm. Bedre målere viser også detaljer om USB Power Delivery, blant annet hvilken spenningsprofil som er forhandlet frem, og om PPS er aktiv.

Dette er viktig fordi telefonen kanskje ikke ber om laderens maksimale effekt. En adapter på 65 W som er koblet til en telefon med en grense på 25 W, skal levere omtrent 25 W på det meste, ikke 65 W. Det er normalt.

Bruk den samme kabelen når du tester flere adaptere. Bruk den samme adapteren når du tester flere kabler. Endre én ting om gangen, ellers blir resultatet bare støy.

En effektmåler oppdager også kabelproblemer som apper ikke ser like godt. Hvis adapteren er klar til å levere 9 V, men telefonen stadig faller tilbake til 5 V, tyder det på et forhandlingsproblem og ikke bare en lav måling av batteristrømmen.

## Se etter fysiske faresignaler

Det er normalt at en lader blir varm under hurtiglading. Det er ikke normalt at den blir for varm til å holde i hånden.

Se også etter summing, brent lukt, sprukket plast, bøyde kontaktpinner, svimerker, løse USB-porter eller en kabelende som beveger seg i telefonen. Ustabil lading er et annet dårlig tegn. Hvis ladeikonet blinker av og på, bør du slutte å bruke kabelen eller adapteren til du har funnet årsaken.

Billige, falske ladere er det ene området der jeg ikke ville tatt noen sjanser. Moderne telefoner har beskyttelseskretser, men ustabil spenning og dårlig isolasjon er fortsatt farlig. Det er ikke verdt å spare noen få kroner på en adapter fra et ukjent billigmerke.

## Finn riktig hurtigladeprotokoll

En lader kan være god uten å være god for akkurat din telefon. Google Pixel og mange Samsung-modeller bruker USB-C Power Delivery, og PPS-støtte er nødvendig for best mulig Samsung Super Hurtiglading. OnePlus- og OPPO-telefoner trenger ofte SUPERVOOC-kompatible ladere og kabler for å nå de høyeste hastighetene. Xiaomi HyperCharge har også egne krav.

Når protokollene ikke passer sammen, faller telefonen vanligvis tilbake til en langsommere USB-modus. Ingenting går i stykker. Det går bare ikke fort.

En lader til bærbar PC på 65 W kan trygt lade en telefon som bare støtter 25 W, fordi telefonen ber om den effekten den kan bruke. Den høyere klassifiseringen betyr bare at laderen har mer kapasitet til bærbare datamaskiner, nettbrett og andre enheter.

## Når den bør byttes

Bytt laderen hvis den overopphetes, lukter feil, summer høyt, har skadet plast eller gir ustabile resultater med flere gode kabler og flere enheter. Bytt kabelen hvis problemet følger kabelen.

Hvis begge fungerer normalt med andre enheter, kan telefonen begrense ladingen fordi batteriet er varmt, porten er skitten, batteriet er nesten fullt, eller telefonen ikke støtter laderens hurtigladeprotokoll.
