---
title: "Slik tester du ladeporten på telefonen"
description: "Slik tester du ladeporten på en Android-telefon med kabelkontroll, trygg rengjøring, måling av ladestrøm og innebygd diagnostikk."
listSummary: "lading, batteri og android"
hub: "hardware"
sourceNumber: 108
order: 5
tags: ["lading","batteri","android","guide","maskinvare"]
locale: "nb"
draft: false
---
---

Du holder kabelen i en merkelig vinkel, ladeikonet blinker av og på, og telefonen lader bare når den ligger helt stille. Det føles gjerne som en ødelagt ladeport, men ikke begynn der.

Start med de kjedelige kontrollene. De finner flere feil enn mange tror.

## Utelukk kabelen og adapteren først

Prøv en annen USB-C- eller Micro-USB-kabel med den samme adapteren. Prøv deretter en annen adapter med den opprinnelige kabelen. Test om mulig begge tilbehørsdelene med en annen telefon eller et nettbrett.

En kabel kan få en intern feil lenge før den ser skadet ut. Én data- eller strømleder kan svikte og redusere en hurtiglader til svært langsom lading. Kabelen kan fortsatt se helt fin ut utvendig. Irriterende, men normalt.

Hvis den samme kabelen og adapteren lader en annen enhet som de skal, blir telefonens ladeport mer mistenkelig. Hvis en annen kabel løser alt, var porten sannsynligvis ikke problemet.

## Undersøk porten

Slå av telefonen og lys rett inn i ladeporten med en lommelykt. Se etter lo som er presset sammen mot bakveggen. Lommelo bygger seg sakte opp, komprimeres av ladepluggen og hindrer til slutt kontakten i å gå helt inn.

Kontroller også hvor godt pluggen sitter. En USB-C-plugg skal sitte godt fast i en port som er i orden. Den skal ikke falle ut, bevege seg mye eller koble fra når du flytter telefonen litt. Litt slark er normalt, særlig på eldre telefoner. En forbindelse som kutter inn og ut, er ikke normal.

Se etter grønne, hvite eller mørke avleiringer på kontaktene. Det tyder på korrosjon eller fuktighet. Rengjøring kan hjelpe mot støv og lo, men reparerer ikke en korrodert kontakt.

## Rengjør forsiktig

Hvis du ser støv eller lo, holder du porten vendt nedover og prøver noen korte støt med en håndblåser eller en boks med trykkluft. Ikke blås fra kloss hold. Målet er å løsne smusset, ikke presse det lenger inn.

Bruk en tørr, myk elektronikkbørste eller en ren og tørr tannbørste på sammenpresset lo. Unngå metallverktøy. En metallnål kan bøye en kontakt eller skape kortslutning. Jeg ville heller ikke brukt en tretannpirker med mindre du ikke har noe bedre, fordi den kan flise seg og etterlate et nytt problem i porten.

Ikke hell alkohol eller kontaktrens inn i telefonen. At en reparatør bruker væske under kontrollerte forhold på et verksted, gjør det ikke til en trygg hjemmereparasjon.

Koble til laderen igjen etter rengjøringen. Hvis pluggen nå sitter merkbart fastere, var lo sannsynligvis hovedårsaken.

## Kontroller ladestrømmen

Android gjør batteristrøm tilgjengelig via `BatteryManager` på enheter som støtter målingen. Apper som Ampere kan vise disse verdiene, men bruk dem som et sammenligningsverktøy, ikke som et laboratorieinstrument.

Åpne Ampere mens laderen er koblet fra, og noter utladningsverdien. Koble til laderen, vent omtrent 10 sekunder og se at tallet stabiliserer seg. Batterinivå, varme, lysstyrke og telefonens egne laderegler påvirker målingen.

En lader på 2 A viser ikke alltid 2000 mA på skjermen. Hvis batteriet nesten er fullt, reduserer telefonen ladestrømmen med vilje. Men hvis du ser omtrent 200 eller 300 mA med en vegglader og kabel du vet fungerer, og tallet hopper hver gang du berører kontakten, har ikke porten stabil forbindelse.

Samsung-eiere har også en annen mulighet. Åpne Samsung Members, trykk Diagnostics på Discover-fanen og velg Phone diagnostics. Kjør Cable charging eller USB connection hvis testene finnes på modellen din.

Samsung-koden `*#0*#` kan også åpne en maskinvaretestmeny på mange Galaxy-telefoner. Bruk Samsungs egen Telefon-app, ikke en tredjeparts oppringer. På nyere One UI-versjoner, enkelte operatørmodeller eller telefoner med sikkerhetsbegrensninger kan koden være blokkert. Det er nå helt normalt.

Android 17 innførte ingen universell test av ladeporten for alle Android-telefoner. Pixel-, Samsung- og Xiaomi-telefoner bruker fortsatt forskjellige diagnoseveier.

## Prøv sikker modus

Hvis porten er ren, kabelen sitter godt og ladingen fortsatt oppfører seg merkelig, starter du telefonen i sikker modus. Denne modusen deaktiverer tredjepartsapper og er en rask måte å oppdage programvare som forstyrrer ladingen.

På mange Android-telefoner kan du holde inne av/på-knappen og deretter holde inne valget for å slå av til menyen for sikker modus vises. På mange Samsung-telefoner starter du telefonen på nytt og holder Volum ned inne mens den starter. Fremgangsmåten varierer mellom modeller.

Hvis ladingen fungerer normalt i sikker modus, ser du nærmere på nylig installerte apper for batteri, automatisering, sikkerhet eller ladeanimasjoner. En av dem kan påvirke ladeoppførselen eller varslene.

## Når porten trenger reparasjon

Porten er sannsynligvis skadet når alt dette stemmer: Laderen og kabelen fungerer på andre enheter, porten er ren, pluggen sitter fortsatt løst, og strømverdiene er lave eller ustabile.

Hvor vanskelig reparasjonen er, avhenger av telefonen. Mange Samsung Galaxy-, Xiaomi- og Motorola-modeller, samt rimeligere Android-telefoner, har USB-porten på et separat datterkort. Det er vanligvis en rutinemessig reparasjon. På andre telefoner er porten loddet til hovedkortet. Da kreves mer kompetanse, og kostnaden blir høyere fordi verkstedet må utføre arbeid på kortnivå.

Trådløs lading kan kjøpe deg tid hvis telefonen støtter det. Den omgår USB-porten helt, men er vanligvis langsommere og mindre praktisk enn kablet lading.

Hvis ladingen gradvis har blitt dårligere over flere uker, bør du ikke vente til porten slutter helt å virke. runcheck logger ladeoppførsel, strømforbruk og trender i strømleveringen over tid. Det gjør en svekket port lettere å oppdage før du blir stående med tomt batteri.
