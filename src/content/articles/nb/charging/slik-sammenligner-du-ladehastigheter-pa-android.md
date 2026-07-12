---
title: "Slik sammenligner du ladehastigheter på Android"
description: "Praktiske metoder for å sammenligne ladehastigheter på Android ved hjelp av apper, USB-effektmålere, innebygde telefonverktøy og kontrollerte tester."
listSummary: "lading, batteri og android"
hub: "charging"
sourceNumber: 45
order: 9
tags: ["lading","batteri","android","guide","maskinvare"]
locale: "nb"
draft: false
---
Du kobler til laderen ved sengen, og telefonen viser «Hurtiglading». Du kobler til laderen ved skrivebordet, og den viser det samme. Den ene får telefonen til 80 % før kaffen er ferdig. Den andre gjør ikke det.

Teksten er ikke nok. Du må sammenligne hva telefonen faktisk tar imot.

## Hvorfor to ladere kan oppleves så forskjellige

Ladehastigheten er resultatet av en forhandling mellom tre ting: laderen, kabelen og telefonen. Laderen oppgir hva den kan levere. Kabelen kan begrense strømmen. Telefonen bestemmer hva den vil ta imot ut fra protokollstøtte, batterinivå, temperatur og egne laderegler.

Hvis både telefonen og laderen støtter USB Power Delivery ved 9 V / 3 A, kan de bli enige om omtrent 27 W. Hvis laderen bare støtter enkel USB-effekt på 5 V / 1 A, får den samme telefonen 5 W. En avansert adapter kan ikke overstyre det telefonen ber om.

Kabler betyr mer enn mange tror. En vanlig USB-C-kabel på 3 A fungerer fint for mange telefoner, men åpner ikke alle moduser med høy effekt. Proprietære systemer som OnePlus SUPERVOOC, OPPO VOOC og enkelte Xiaomi HyperCharge-oppsett trenger ofte riktig lader og kabel. En vanlig USB-C-kabel kan fortsatt lade telefonen, bare mye langsommere.

Temperaturen er den skjulte variabelen. En telefon som nettopp har kjørt et spill, tatt opp video eller ligget i solen, kan redusere ladehastigheten selv med den beste laderen du eier. Tester du en varm telefon, får du en dårlig sammenligning.

## Den raske apptesten

For en rask sammenligning kan du bruke en app som Ampere eller AccuBattery. Koble til lader A, vent til målingen stabiliserer seg, og noter strøm og spenning. Koble deretter til lader B med den samme kabelen og gjenta.

Hold batterinivået innenfor det samme området i hver test. Mellom 20 % og 50 % er et godt vindu fordi de fleste telefoner lader offensivt der. Det er urettferdig å teste én lader på 25 % og en annen på 78 %. Den andre ser vanligvis langsommere ut fordi telefonen allerede har begynt å redusere effekten.

Appmålinger er nyttige, men ikke perfekte. De måler det batterisiden rapporterer, ikke den nøyaktige effekten fra stikkontakten. Skjermen, prosessoren, radioene og ladeelektronikken påvirker alle tallet. Derfor egner metoden seg best til å oppdage tydelige forskjeller, ikke til å bevise nøyaktig effekt.

## Testen med effektmåler

En USB-C-effektmåler gir renere resultater. Koble måleren mellom laderen og kabelen, og følg spenning, strøm og effekt i sanntid. Målere med USB PD-dekoding kan også vise den forhandlede profilen, som ofte er den manglende ledetråden.

Bruk én kabel til alle adaptertestene. Hvis du vil sammenligne kabler, bruker du én adapter og bytter bare kabelen. Det høres pirkete ut, men det er forskjellen på en test og en gjetning.

En måler forklarer også merkelige resultater. Tenk deg at en lader på 45 W bare viser 15 W. Laderen støtter kanskje 45 W, men ikke spenningen eller PPS-området telefonen foretrekker. Kabelen kan begrense økten. Eller telefonen kan være for varm. Måleren løser ikke problemet, men viser hvor du bør lete.

## Innebygde tegn på telefonen

Noen Android-telefoner gir nyttige hint uten å vise nøyaktig effekt.

Samsung-telefoner viser betegnelser som «Lading», «Hurtiglading», «Super Hurtiglading» og «Super Hurtiglading 2.0», avhengig av lader og modell. På nyere One UI-versjoner ligger batteriinnstillingene under Innstillinger > Batteri, og Samsung Members kan kjøre Telefondiagnostikk som blant annet kontrollerer batteristatus og kablet eller trådløs lading.

Pixel-telefoner viser anslått tid til fulladet under Batteri i Innstillinger etter at du kobler til laderen. Det er ingen effektmåler, men en lader som viser 1 time og 20 minutter til fulladet, oppfører seg åpenbart annerledes enn en som viser 3 timer.

Xiaomi- og OnePlus-telefoner viser ofte en merket ladeanimasjon eller en effektbetegnelse under hurtiglading. Animasjonene er ikke laboratorieinstrumenter, men de er nyttige når én lader aktiverer modusen med full hastighet og en annen ikke gjør det.

## En rettferdig sammenligning på 30 minutter

Gjør dette for å få en sammenligning du kan stole på:

1. Tøm telefonen til det samme startnivået hver gang, helst rundt 20 %.
2. La telefonen kjøle seg ned i noen minutter.
3. Bruk den samme kabelen.
4. Slå på flymodus, eller la i det minste telefonen ligge ubrukt.
5. Lad i 30 minutter og noter sluttprosenten.

Gjenta med neste lader fra det samme startnivået. Laderen som fyller på mest batteri i det samme tidsrommet, er raskest for denne telefonen.

Ikke kjør testen helt til 100 %. Den siste delen er med vilje langsommere og skjuler den egentlige forskjellen mellom laderne. Vinduet fra 20 % til 80 % er mer nyttig.

## Kablet mot trådløs lading

Du kan sammenligne kablet og trådløs lading på samme måte, men ikke bli overrasket hvis trådløs lading taper. Eldre Qi-ladere og mange kombinasjoner av telefon og lader ligger rundt 5-15 W. Qi2 innførte magnetisk lading på 15 W, og Qi2 25W finnes nå, men både telefonen og laderen må støtte det.

Kablet USB-C er fortsatt det sikreste valget når hastighet er viktig. Trådløs lading handler om bekvemmelighet, plassering og mindre slitasje på kabelkontakten. Det er vanligvis ikke den raskeste løsningen, særlig hvis telefonen blir varm på ladeplaten.

## Slik hjelper runcheck

runcheck har Pro-funksjonen Charger Comparison. Koble til en lader, gi den et navn, og appen registrerer ladehastigheten gjennom økten. Etter at du har testet noen ladere og kabler, kan du sammenligne gjennomsnittlig mAh per time og effekt side om side.

Det betyr noe fordi den beste laderen ikke alltid er den største. Et kjølig og stabilt oppsett på 25 W kan være mer nyttig enn en lader som når høy effekt i to minutter og deretter strupes fordi telefonen blir varm.

## Noen vanlige fallgruver

Testrekkefølgen betyr noe. En telefon på 25 % lader vanligvis raskere enn den samme telefonen på 75 %.

En lader på 65 W tvinger ikke en telefon på 25 W til å ta imot 65 W. Telefonen bestemmer.

Hvis to ladere yter nesten likt, bør du bruke den som holder seg kjøligere. Varme er fienden, selv når ladetiden ser identisk ut.
