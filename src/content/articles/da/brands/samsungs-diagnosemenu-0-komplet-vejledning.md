---
title: "Samsungs diagnosemenu #0#: komplet vejledning"
description: "Du indtaster #0# i Samsung Telefon-appen, og det normale opkaldstastatur forsvinder. I stedet får du et enkelt gitter med testknapper til skærm, touchpanel, højttalere, sensorer, kameraer, vibrationsmotor og fysiske knapper."
listSummary: "Du indtaster #0# i Samsung Telefon-appen, og det normale opkaldstastatur forsvinder."
hub: "brands"
sourceNumber: 160
order: 8
tags: ["producent","android","diagnostik","mærkespecifikt","guide"]
locale: "da"
draft: false
---
Når det virker, føles det næsten for nemt. Når det ikke virker, kan det være overraskende frustrerende, fordi Samsung ikke præsenterer menuen som en normal forbrugerfunktion. Se den som en servicemenu på lavt niveau, der ofte virker på Galaxy-telefoner, ikke som en garanteret funktion på alle modeller, operatørversioner eller i alle områder.

## Før du prøver koden

Brug Samsung Telefon-appen. Koden virker muligvis ikke i Google Telefon eller en anden opkaldsapp fra en tredjepart, selv på den samme enhed. Åbn opkaldstastaturet, indtast `*#0*#`, og vent. Du skal ikke trykke på Ring op.

Hvis der ikke sker noget, kan menuen være blokeret af telefonens firmware, operatørkonfiguration, arbejdsprofil, MDM-politik eller sikkerhedsindstillinger. Nogle oplever også, at Samsungs funktion Automatisk blokering forstyrrer service- og diagnosekoder på nyere One UI-versioner. Hvis du tester det, skal du kun slå Automatisk blokering fra kortvarigt og derefter aktivere den igen. Funktionen findes af en grund.

For de fleste er Samsung Members det sikrere officielle alternativ. Afhængigt af område og appversion kan du åbne Samsung Members og trykke på **Diagnostik** eller gå til **Support > Telefondiagnosticering**. Du kan køre alle tests eller vælge en kategori. Det dækker de kontroller, de fleste faktisk har brug for, og giver tydeligere instruktioner end det rå `*#0*#`-gitter.

## Skærm- og touchtests

Knapperne Red, Green, Blue og Black fylder skærmen med ensfarvede flader. Brug dem til at lede efter døde pixels, fastlåste pixels, farvestik, ujævn lysstyrke og skærmskader, som ikke er tydelige på dit baggrundsbillede.

Black er især nyttig på Galaxy-telefoner med OLED. En rigtig sort skærm bør se slukket ud. Lyse prikker eller farvede pletter kan pege på fastlåste pixels, mens uklare områder kan skyldes panelskade eller trykmærker.

Touch viser et gitter eller mønster, som du følger med fingeren. Hvert område skal registrere berøringen tydeligt. Det afslører døde zoner langs kanterne, som er nemme at overse, hvis du kun skriver et par ord eller ruller gennem Indstillinger.

Dimming ændrer skærmens lysstyrke og farvegengivelse. Brug testen til at se efter flimmer, ujævn lysstyrke, mærkelige farveskift eller et panel, der ikke dæmper jævnt. På ældre Galaxy-modeller med LCD kan du opdage problemer med bagbelysningen. På OLED-modeller ser du i højere grad efter pixeladfærd og styring af lysstyrken.

## Lyd, vibration og knapper

Receiver afspiller lyd gennem ørehøjttaleren. Speaker bruger telefonens højttalersystem. På nyere Galaxy-telefoner med stereolyd skal du lytte efter forskel mellem ørehøjttaleren og den nederste højttaler. Hvis den ene side lyder svag, kan det være et reelt problem, selv om telefonen teknisk set producerer lyd.

Vibration aktiverer haptikmotoren. En velfungerende motor føles jævn og kontrolleret. Hvis den rasler, summer højt eller føles ru, kan motoren eller dens montering inde i telefonen være slidt.

Sub key kontrollerer de fysiske knapper og visse navigationsinput. Tryk på lydstyrke, tænd/sluk og de navigationsknapper, testen beder om. Ignorer ikke en knap, der kun virker, når du trykker hårdt eller fra en bestemt vinkel. Det er som regel ikke et softwareproblem.

## Sensorer og kameraer

Sensor er en af de bedste grunde til at bruge `*#0*#`. Menuen kan vise liveaflæsninger fra accelerometer, gyroskop, nærhedssensor, lyssensor, magnetisk sensor, barometer på understøttede modeller, fingeraftrykslæser og ældre pulssensorer på de Galaxy-modeller, der stadig har dem.

Nogle kontroller er enkle. Dæk nærhedssensoren øverst på skærmen, og se, om tilstanden ændrer sig. Bevæg telefonen, og se værdierne fra accelerometeret ændre sig. Drej den, og kontroller gyroskopet. Dæk lyssensoren, og ret den derefter mod en lampe.

Sensorresultater kræver sund fornuft. En magnetisk sensor kan opføre sig mærkeligt tæt på en bærbar computer, en magnet i coveret, en bilholder eller et metalbord. En nærhedssensor kan svigte, fordi en skærmbeskytter dækker den. Test under rene forhold, før du konkluderer, at sensoren er defekt.

Mega Cam og Front Cam åbner henholdsvis bag- og frontkameraet. De bekræfter, at modulerne starter, fokuserer og tager et billede. De beviser ikke, at alle objektiver er skarpe, at den optiske billedstabilisering fungerer korrekt, eller at dine natbilleder bliver gode. Hardwaretests er grove værktøjer.

## Koder, der måske hjælper

Samsung har andre opkaldskoder, men understøttelsen varierer efter model, operatør, One UI-version og område. Betragt ikke kodelister på nettet som universelle.

`*#06#` viser IMEI. Det er sikkert og virker bredt på telefoner, ikke kun på Samsung.

`*#1234#` viser Samsungs firmwareoplysninger på mange Galaxy-enheder, herunder AP-, CP- og CSC-buildstrenge. Det er nyttigt, når du vil kontrollere præcis, hvilken softwareversion der er installeret.

`*#0228#` kan vise oplysninger om batteristatus på mange Galaxy-telefoner. Hvis den åbner, skal du bruge den som et hurtigt statusbillede, ikke som en komplet rapport om batteritilstanden.

Ældre koder som `*#7353#`, `*#0842#`, `*#0673#` og `*#0289#` virker muligvis stadig på nogle enheder. På andre sker der ingenting. Det er normalt i dag.

## Hvad `*#0*#` ikke kan bevise

Menuen tester, om hardwaren reagerer i det øjeblik. Den giver dig ikke langsigtet batteritilstand, historik over opladningscyklusser, logfiler over termisk begrænsning, historik over signalstyrke eller lagerets I/O-ydeevne over tid.

Den kan heller ikke alene bevise, at en telefon er ægte. En fungerende Samsung-diagnosemenu er et godt tegn, men ikke nok. Kontroller IMEI, firmwareversion, Knox-status, hvor det er relevant, købshistorik og fysiske detaljer, hvis du køber en brugt telefon.

En telefon kan bestå `*#0*#` og stadig føles langsom, fordi lagerpladsen næsten er fuld, en dårlig app kører i baggrunden, batterispændingen falder under belastning, eller en nyere opdatering har introduceret en fejl. Hardwaretests forklarer ikke alt.

## Når Samsung Members er det bedre valg

Brug Samsung Members, når den rå kode ikke virker, når du har brug for et tydeligere resultat som bestået eller ikke bestået, eller når du vil sende en fejlrapport. Samsungs officielle diagnostik kan kontrollere batteristatus, opladning med kabel, trådløs opladning, touchskærm, sensorer, mikrofon, højttaler, kamera, Wi-Fi, Bluetooth, SIM-kort, mobilnetværk, fingeraftryksgenkendelse, NFC, knapper og mere, afhængigt af enheden.

Mindre tekniske brugere bør begynde med Samsung Members. Appen fortæller dig, hvad du skal gøre, hvis en test mislykkes. Menuen `*#0*#` går i vid udstrækning ud fra, at du allerede ved, hvad du ser på.

Det gør ikke det ene værktøj bedst i alle situationer. Jeg ville bruge `*#0*#` til hurtige kontroller af skærm, touch, sensorer og lyd på en brugt telefon. Til almindelig fejlfinding, support og officiel rapportering ville jeg bruge Samsung Members.

## Android 17 og Galaxy-kompatibilitet

Den stabile udrulning af Android 17 begyndte først på understøttede Pixel-enheder. Galaxy-telefoner følger Samsungs egen tidsplan for One UI, så Samsungs diagnosemenu ændrer sig ikke alene, fordi Android 17 findes.

Når Galaxy-versioner baseret på Android 17 kommer til din model, kan adgangen til diagnostik stadig afhænge af Samsung Telefon, One UI-version, operatørfirmware, område, sikkerhedsindstillinger og opdateringer til Samsung Members. At koden virker på én telefon i Galaxy S-serien, beviser med andre ord ikke, at den virker på en Galaxy A-model ved siden af.

Hvis `*#0*#` er blokeret, skal du ikke bruge en time på at kæmpe med opkaldsappen. Kør diagnostik i Samsung Members i stedet.

---

*Metabeskrivelse: Samsungs kode `*#0*#` kan åbne en skjult Galaxy-diagnosemenu med tests af skærm, touch, sensorer, kamera, højttaler og vibration. Her kan du se, hvad menuen kontrollerer, og hvad du kan bruge, hvis koden er blokeret.*
