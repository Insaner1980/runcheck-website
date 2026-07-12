---
title: "Hvilke sensorer har telefonen min, og hvordan sjekker jeg det?"
description: "Hvorfor viser én telefon gangretningen din presist i Maps, mens en annen bare viser en vag blå sirkel? Svaret er vanligvis sensorer. Alle Android-telefoner har noen, men den nøyaktige kombinasjonen avhenger av modell, prisklasse og årgang."
listSummary: "Hvorfor viser én telefon gangretningen din presist i Maps, mens en annen bare viser en vag blå sirkel?"
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnostikk","sensorer","android","maskinvare","guide"]
locale: "nb"
draft: false
---
Et flaggskip fra 2026 kan ha gyroskop, barometer, fingeravtrykksensor under skjermen, flere sensorer som kan vekke enheten og en hel rekke programvareberegnede bevegelsessensorer. En rimelig telefon fra noen år tilbake har kanskje bare det grunnleggende. Forskjellen merkes når skjermrotasjon, automatisk lysstyrke, kompassretning, AR-apper eller løft-for-å-vekke ikke oppfører seg som forventet.

## Start med en sensorapp

Androids Innstillinger-app viser ikke en fullstendig oversikt over maskinvaresensorene. Den viser grunnleggende enhetsinformasjon, men ikke alle sensorene som er tilgjengelige gjennom Androids sensorrammeverk.

Den enkleste kontrollen er en diagnoseapp fra en tredjepart, som DevCheck, CPU-Z, Sensor Test eller Sensors Toolbox. Åpne appen og finn maskinvarelisten. En god app viser hver sensor som er registrert i Android, med sensornavn, produsent, gjeldende målinger, oppløsning og strømforbruk.

Dette er det nærmeste du kommer sannheten fra selve telefonen. Listen har likevel én begrensning: Den viser sensorene Android har tilgang til, ikke alle fysiske komponenter som er loddet på kretskortet. En fingeravtrykksleser, kamerasensor, modem eller ultralydbasert nærhetssystem vises ikke nødvendigvis ved siden av akselerometeret og gyroskopet.

## Tastekoder kan hjelpe, men ikke stol for mye på dem

Noen Android-telefoner har skjulte testmenyer. Samsung-telefoner støtter ofte `*#0*#`, som kan åpne en maskinvarediagnose med sensortester. På enkelte Android-enheter åpner `*#*#4636#*#*` en testmeny, men den handler mer om telefon-, batteri- og nettverksinformasjon enn om en full sensoroversikt.

Det irriterende er at kodene ikke er universelle. Produsenter, operatører, regioner og nyere programvarebygg kan deaktivere dem. Hvis en kode ikke gjør noe, beviser det ikke at telefonen mangler sensoren. Det beviser bare at koden ikke virket på denne enheten.

Spesifikasjonsdatabaser er nyttige som en ekstra kontroll. GSMArena og produsentenes produktsider oppgir ofte sensorpakken fra fabrikken under funksjoner eller spesifikasjoner. Det forteller hva modellen skulle leveres med. Det forteller ikke om sensoren i akkurat din telefon fungerer riktig.

## Sensorene du vanligvis finner

### Akselerometer

Akselerometeret måler akselerasjon langs tre akser. Skjermrotasjon, skrittelling, ristebevegelser og grunnleggende bevegelsesregistrering er avhengige av det. Nesten alle Android-telefoner har et akselerometer.

### Gyroskop

Gyroskopet måler rotasjon. Det gir langt mer presis retningssporing, særlig i AR, VR, kamerastabilisering og kart. Noen budsjettmodeller utelater det. Derfor kan to telefoner kjøre Google Maps, mens bare den ene peker tydelig i retningen du står vendt.

### Magnetometer

Magnetometeret registrerer magnetfelt og fungerer som telefonens kompass. Det hjelper kartapper med å finne retningen. Nøyaktigheten varierer mye, fordi deksler, bilholdere, bærbare datamaskiner, høyttalere og annen elektronikk kan forstyrre målingen.

### Nærhetssensor

Nærhetssensoren registrerer når noe er nær skjermen, vanligvis ansiktet ditt under en samtale. Telefonen bruker den til å slå av skjermen og hindre utilsiktede trykk med kinnet.

Eldre telefoner bruker vanligvis en liten fysisk sensor ved ørehøyttaleren. Nyere modeller kan bruke virtuell nærhetsregistrering basert på programvare, lyd, skjermdata eller informasjon fra omgivelseslyssensoren. Denne utviklingen er reell, men den gjør også feilsøking mer rotete fordi funksjonen ikke alltid kan knyttes til én synlig sensor i en diagnoseapp.

### Omgivelseslyssensor

Omgivelseslyssensoren måler lysnivået rundt telefonen i lux og brukes av automatisk lysstyrke. Den sitter vanligvis ved frontkameraet, men enkelte moderne telefoner plasserer den under skjermen.

Et lyst kontor kan gi noen hundre lux. Direkte sollys kan ligge langt over 10 000 lux. Ikke heng deg opp i den nøyaktige verdien. Det viktige er om tallet endres når du dekker toppen av telefonen eller går til et lysere område.

### Barometer

Barometeret måler lufttrykk, vanligvis i hektopascal. Telefoner bruker det til raskere høydeberegning og bedre posisjonskontekst. Det er vanlig på mange mellomklasse- og flaggskiptelefoner, men langt fra garantert på rimeligere modeller.

### Fingeravtrykksensor

En fingeravtrykksleser er fortsatt en sensor, selv om Androids vanlige sensoroversikt ikke viser den. Den kan være optisk under glasset, ultralydbasert under skjermen eller kapasitiv på siden eller baksiden.

### Pulssensor

Egne pulssensorer er sjeldne på moderne telefoner. Samsung brukte dem på enkelte eldre Galaxy S- og Note-modeller, men funksjonen har i stor grad flyttet over til klokker. Hvis den nåværende telefonen din ikke viser noen pulssensor, er det normalt.

## Sensorene du kanskje ikke legger merke til

Skritteller og skrittdetektor kan vises som separate sensorer. Android definerer både `TYPE_STEP_COUNTER` og `TYPE_STEP_DETECTOR`. Noen telefoner håndterer disse med strømgjerrig maskinvare. Andre beregner skritt ut fra data fra akselerometeret.

Rotation vector er vanligvis en sammensatt sensor. Den kombinerer bevegelses- og retningsdata for å anslå telefonens tredimensjonale posisjon. Du kan se den i diagnostikken selv om det ikke finnes noen fysisk brikke som heter «rotation vector».

Gravity og linear acceleration er også avledede målinger. Gravity skiller ut tyngdekraften. Linear acceleration fjerner tyngdekraften, slik at apper kan konsentrere seg om faktisk bevegelse.

Significant motion er en strømgjerrig utløsersensor som vekker telefonen når den registrerer en tydelig bevegelse. Funksjoner som løft-for-å-vekke og aktivitetsregistrering i bakgrunnen kan være avhengige av denne typen sensoroppførsel.

Sammenleggbare telefoner har enda en uvanlig sensor: hinge angle. Android har en egen sensortype for hengselvinkel på enheter som gjør brettestillingen tilgjengelig for apper. En vanlig, flat telefon har den ikke.

## Maskinvaresensorer og programvaresensorer er ikke det samme

Android skiller mellom fysiske maskinvaresensorer og sensorer som beregnes i programvare. Akselerometer og gyroskop er maskinvaresensorer. Gravity, linear acceleration og rotation vector kan beregnes fra én eller flere fysiske sensorer.

Forskjellen påvirker strømforbruket. En egen, strømgjerrig skritteller kan registrere skritt hele dagen mens hovedprosessoren sover. En programvarebasert skritteller må gjøre mer arbeid og kan derfor bruke mer batteri.

Sensorappen kan vise et produsentnavn som Bosch, STMicroelectronics, TDK InvenSense, AKM eller Sensortek. Det tyder vanligvis på en fysisk maskinvarekomponent. Et generisk navn som viser til Android eller AOSP, peker ofte mot en sammensatt eller programvareberegnet sensor.

Det finnes ingen enkel regel som gjelder alle telefoner. OEM-er kan eksponere produsentspesifikke sensorer, skjule maskinvare bak systemtjenester eller erstatte en fysisk komponent med en programvareløsning.

## Når sensorlisten faktisk betyr noe

De fleste bryr seg først om sensorene når noe slutter å virke. Skjermen roterer ikke. Automatisk lysstyrke hopper opp og ned. En kompassapp peker nordover rett inn i sofaen. En AR-app nekter å starte fordi telefonen mangler gyroskop.

En sensorapp hjelper deg med å skille mellom tre situasjoner:

- Sensoren finnes, og målingene endres normalt. Problemet ligger sannsynligvis i appinnstillinger, kalibrering, tillatelser eller programvare.
- Sensoren finnes, men målingene står fast eller er åpenbart urimelige. Det kan tyde på en defekt sensor, en fastvarefeil eller et kalibreringsproblem.
- Sensoren vises ikke i det hele tatt. Telefonen har den kanskje ikke, og ingen innstilling kan legge den til senere.

Du kan ikke installere et manglende gyroskop med programvare. Eksterne Bluetooth-sensorer finnes for trening og spesialbruk, men de blir ikke en del av telefonens innebygde Android-sensorrammeverk.

Flere oppføringer for samme sensor er også normalt. En telefon kan eksponere varianter som vekker eller ikke vekker enheten, kalibrerte og ukalibrerte versjoner eller produsentspesifikke kopier ved siden av Androids standardiserte sensortyper.
