---
title: "Hvilke sensorer har min telefon, og hvordan tjekker jeg det?"
description: "Hvorfor viser én telefon din gåretning præcist i Maps, mens en anden kun viser en upræcis blå cirkel? Svaret er som regel sensorer. Alle Android-telefoner har nogle, men den præcise sammensætning afhænger af model, prisklasse og årgang."
listSummary: "Hvorfor viser én telefon din gåretning præcist i Maps, mens en anden kun viser en upræcis blå cirkel?"
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnostik","sensorer","android","hardware","guide"]
locale: "da"
draft: false
---
Et flagskib fra 2026 kan have et gyroskop, barometer, en fingeraftrykssensor under skærmen, flere wake-up-sensorer og en lang række softwareberegnede bevægelsessensorer. En billig telefon fra nogle år tilbage har måske kun det mest grundlæggende. Forskellen betyder noget, når skærmrotation, automatisk lysstyrke, kompasretning, AR-apps eller løft for at vække ikke fungerer, som du forventer.

## Start med en sensorapp

Androids Indstillinger viser ikke en komplet fortegnelse over hardwaresensorer. Du kan se grundlæggende enhedsoplysninger, men ikke alle sensorer, som er tilgængelige gennem Androids sensorframework.

Den nemmeste kontrol er en diagnoseapp fra en tredjepart, for eksempel DevCheck, CPU-Z, Sensor Test eller Sensors Toolbox. Åbn appen, og find hardwarelisten. En god app viser hver sensor, der er registreret i Android, herunder sensorens navn, producent, aktuelle målinger, opløsning og strømforbrug.

Det er det nærmeste, du kommer sandheden direkte fra telefonen. Listen har dog én begrænsning: Den viser sensorer, som Android kan få adgang til, ikke alle fysiske komponenter, der er loddet på printkortet. En fingeraftrykslæser, kamerasensor, modemkomponent eller ultralydsbaseret nærhedsløsning vises måske ikke sammen med accelerometeret og gyroskopet.

## Opkaldskoder kan hjælpe, men stol ikke for meget på dem

Nogle Android-telefoner har skjulte testmenuer. Samsung-telefoner understøtter ofte `*#0*#`, som kan åbne en hardwarediagnose med sensortest. På nogle Android-enheder åbner `*#*#4636#*#*` en testmenu, men den handler mere om telefon-, batteri- og netværksoplysninger end om en komplet sensoroversigt.

Det irriterende er, at koderne ikke er universelle. Producenter, teleselskaber, områder og nyere softwareversioner kan deaktivere dem. Hvis en kode ikke gør noget, beviser det ikke, at telefonen mangler sensoren. Det beviser kun, at koden ikke virkede på den enhed.

Specifikationsdatabaser er nyttige som en ekstra kontrol. GSMArena og producenternes produktsider angiver ofte telefonens sensorsæt under funktioner eller specifikationer. Det fortæller, hvad modellen skulle være leveret med fra fabrikken. Det fortæller ikke, om netop din sensor fungerer korrekt.

## De sensorer, du normalt finder

### Accelerometer

Accelerometeret måler acceleration langs tre akser. Skærmrotation, skridttælling, rystebevægelser og grundlæggende bevægelsesregistrering afhænger alle af det. Næsten alle Android-telefoner har et.

### Gyroskop

Gyroskopet måler rotation. Det gør registrering af retning og bevægelse langt mere præcis, især i AR, VR, kamerastabilisering og kortnavigation. Nogle budgettelefoner springer det over. Derfor kan to telefoner begge køre Google Maps, mens kun den ene peger stabilt i den retning, du vender.

### Magnetometer

Magnetometeret registrerer magnetfelter og er telefonens kompas. Det hjælper kortapps med at bestemme retningen. Nøjagtigheden varierer meget, fordi covers, bilholdere, bærbare computere, højttalere og anden elektronik kan forstyrre målingen.

### Nærhedssensor

Nærhedssensoren registrerer, når noget er tæt på skærmen, som regel dit ansigt under et opkald. Telefonen bruger den til at slukke skærmen og forhindre utilsigtede tryk med kinden.

Ældre telefoner bruger normalt en lille fysisk sensor tæt på ørehøjttaleren. Nyere telefoner kan bruge virtuel nærhedsregistrering baseret på software, lyd, skærmdata eller oplysninger fra sensoren for omgivende lys. Den udvikling er reel, men den gør også fejlfinding mere besværlig, fordi funktionen ikke altid svarer til én synlig sensor i en diagnoseapp.

### Sensor for omgivende lys

Sensoren for omgivende lys måler lysstyrken omkring telefonen i lux og leverer data til adaptiv lysstyrke. Den sidder normalt tæt på frontkameraet, selv om nogle moderne telefoner placerer den under skærmen.

Et lyst kontor kan måle nogle få hundrede lux. Direkte sollys kan ligge langt over 10.000 lux. Hæng dig ikke i de præcise værdier. Det vigtige er, om tallet ændrer sig, når du dækker telefonens øverste del eller bevæger dig ud i kraftigere lys.

### Barometer

Barometeret måler lufttryk, normalt i hektopascal. Telefoner bruger det til hurtigere højdeberegning og bedre positionskontekst. Det findes i mange mellemklasse- og flagskibstelefoner, men er langt fra garanteret i billigere modeller.

### Fingeraftrykssensor

En fingeraftrykslæser er stadig en sensor, selv om den ikke vises i Androids normale sensoroversigt. Den kan være optisk under glasset, ultralydsbaseret under skærmen eller kapacitiv på siden eller bagsiden.

### Pulssensor

Dedikerede pulssensorer er sjældne på moderne telefoner. Samsung brugte dem på nogle ældre Galaxy S- og Note-modeller, men funktionen er for det meste flyttet over i ure. Hvis din nuværende telefon ikke viser en pulssensor, er det helt normalt.

## Sensorerne, du måske ikke lægger mærke til

Skridttæller og skridtdetektor kan vises som separate sensorer. Android definerer både `TYPE_STEP_COUNTER` og `TYPE_STEP_DETECTOR`. Nogle telefoner håndterer dem med strømbesparende hardware. Andre beregner skridt ud fra accelerometerdata.

Rotation vector er normalt en fusioneret sensor. Den kombinerer bevægelses- og retningsdata for at anslå telefonens 3D-position. Du kan se den i en diagnoseapp, selv om der ikke findes en fysisk chip med navnet "rotation vector".

Gravity og linear acceleration er også beregnede målinger. Gravity isolerer tyngdekraftens påvirkning. Linear acceleration fjerner tyngdekraften, så apps kan fokusere på den faktiske bevægelse.

Significant motion er en strømbesparende triggersensor, der vækker telefonen, når den registrerer en tydelig bevægelse. Funktioner som løft for at vække og registrering af aktivitet i baggrunden kan afhænge af denne type sensoradfærd.

Foldbare telefoner tilføjer endnu en usædvanlig sensor: hinge angle. Android har en sensortype for hængselvinkel på enheder, der gør foldens position tilgængelig for apps. En almindelig ikke-foldbar telefon har den ikke.

## Hardware- og softwaresensorer er ikke det samme

Android opdeler sensorer i fysiske hardwaresensorer og softwareberegnede sensorer. Accelerometeret og gyroskopet er hardwaresensorer. Gravity, linear acceleration og rotation vector kan beregnes ud fra én eller flere hardwaresensorer.

Forskellen påvirker strømforbruget. En dedikeret skridttæller med lavt strømforbrug kan registrere skridt hele dagen, mens hovedprocessoren sover. En softwarebaseret skridttæller skal udføre mere arbejde og kan derfor bruge mere batteri.

Din sensorapp kan vise et producentnavn som Bosch, STMicroelectronics, TDK InvenSense, AKM eller Sensortek. Det peger normalt på en fysisk hardwarekomponent. Et generisk navn, der ligner Android eller AOSP, peger ofte på en fusioneret eller softwareberegnet sensor.

Der findes ingen enkel regel, som gælder for alle telefoner. OEM-producenter kan gøre egne sensorer tilgængelige, skjule hardware bag systemtjenester eller erstatte en fysisk komponent med en softwareløsning.

## Hvornår sensorlisten betyder noget

De fleste interesserer sig først for sensorer, når noget går galt. Skærmen vil ikke rotere. Den automatiske lysstyrke hopper op og ned. En kompasapp peger mod nord lige ind i din sofa. En AR-app nægter at starte, fordi telefonen mangler et gyroskop.

En sensorapp hjælper dig med at skelne mellem tre situationer:

- Sensoren findes, og dens målinger ændrer sig normalt. Problemet skyldes sandsynligvis appindstillinger, kalibrering, tilladelser eller software.
- Sensoren findes, men målingerne står stille eller er helt urimelige. Det kan pege på en defekt sensor, et firmwareproblem eller en kalibreringsfejl.
- Sensoren vises slet ikke. Telefonen har den måske ikke, og ingen indstilling kan tilføje den bagefter.

Du kan ikke installere et manglende gyroskop med software. Eksterne Bluetooth-sensorer findes til træning og specialiserede formål, men de bliver ikke en del af telefonens indbyggede Android-sensorframework.

Flere poster for den samme sensor er også normalt. En telefon kan vise wake-up- og non-wake-up-versioner, kalibrerede og ukalibrerede versioner eller producentspecifikke kopier ved siden af Androids standardsensortyper.
