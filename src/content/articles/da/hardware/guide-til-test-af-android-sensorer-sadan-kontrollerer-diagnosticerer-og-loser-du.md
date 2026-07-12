---
title: "Guide til test af Android-sensorer: Sådan kontrollerer, diagnosticerer og løser du sensorproblemer"
description: "Hvordan ved du, om automatisk rotation er gået i stykker, kompasset er forvirret, eller en app bare opfører sig dårligt? Det er det irriterende ved sensorproblemer. De virker små, indtil du har brug for navigation, opkald, kamerastabilisering, skridttælling eller automatisk lysstyrke."
listSummary: "hardware, test og diagnostik"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["hardware","test","diagnostik","android","guide"]
locale: "da"
draft: false
---
Android-telefoner bruger en blanding af bevægelses-, miljø-, positions- og nærhedssensorer. Nogle er fysiske chips. Andre er "virtuelle" sensorer, som beregnes ud fra flere chips på én gang. Når én datakilde bliver ustabil, blokeret eller deaktiveret, kan symptomet dukke op et helt andet sted.

Begynd enkelt. Du behøver hverken root, ADB eller et laboratoriebord til den første runde test.

## Hurtige sensortest

Prøv disse dagligdags kontroller, før du installerer noget:

- Drej telefonen fra stående til liggende format med rotationslåsen slået fra. Det tester accelerometerets grundlæggende funktion.
- Tag et panoramabillede. Hvis telefonen ikke kan følge bevægelsen jævnt, kan gyroskopet være involveret.
- Foretag et opkald, og dæk toppen af skærmen nær ørehøjttaleren. Skærmen bør slukke og tænde igen, når du fjerner hånden. Det tester nærhedssensoren.
- Slå automatisk lysstyrke til, og gå fra et lyst rum til et mørkt. Skærmen bør tilpasse sig inden for nogle sekunder.
- Åbn Maps, og se på den blå retningskegle. En meget bred eller forkert kegle betyder som regel, at magnetometeret skal kalibreres eller påvirkes af interferens.

På Samsung Galaxy-enheder er Samsung Members den mest ligetil løsning: Åbn Samsung Members, vælg `Få hjælp`, og tryk på `Vis tests` under Diagnostik. Den ældre diagnosemenu `*#0*#` virker også på mange Galaxy-telefoner og indeholder et afsnit til sensorer.

På Pixel-telefoner kan du indtaste `*#*#7287#*#*` for at åbne Pixel Repair Diagnostics, hvor værktøjet understøttes. På Xiaomi-, Redmi- og POCO-enheder åbner `*#*#6484#*#*` CIT-menuen på mange modeller. På Motorola kan du bruge den forudinstallerede Device Help-app til en hardwarediagnose.

Brug ikke `*#*#4636#*#*` som en generel sensortest. På mange telefoner åbner den en test- eller informationsside med netværk, brug, Wi-Fi og nogle gange batterioplysninger. Det er ikke en universel menu til sensordiagnose.

## Hvorfor sensorproblemer opstår

Kalibreringsdrift er den mest almindelige kedelige årsag. Accelerometre, gyroskoper og magnetometre er alle afhængige af kalibrering. Magnetometeret er særligt følsomt, fordi magneter, metalcovers, bilholdere, bærbare computere, højttalere og selv nogle pungcovers kan forstyrre det.

Fysisk skade kommer derefter. Et fald kan flytte et sensormodul, bøje rammen nær den øverste kant eller beskadige et flexkabel. Fugtskader kan udvikle sig langsommere. Telefonen kan virke normal i en uge, hvorefter nærhedssensoren eller barometeret begynder at opføre sig mærkeligt, når korrosionen breder sig.

Blokerede sensorvinduer er lette at overse. Nærheds- og lyssensoren sidder som regel nær ørehøjttaleren eller under den øverste del af skærmen. En tyk skærmbeskytter, kanten på et cover, støv, hudfedt eller skævt monteret privacy-glas kan blokere eller sprede sensorens lys.

Software kan også give sensorfejl. Store Android-opdateringer, ændringer i producentens firmware, custom ROMs, apptilladelser og aggressiv batteristyring kan alle ændre de data, som apps modtager. Android 17 blev udgivet til de fleste understøttede Pixel-enheder den 16. juni 2026, mens andre producenter følger senere, så opdateringsrelaterede sensorfejl rammer ikke alle telefoner samtidig.

Strømindstillinger betyder også noget. Android 9 begrænsede baggrundsadgangen til kontinuerlige sensorer som accelerometer og gyroskop. Android 10 tilføjede udviklerfeltet `Sensors off`, som kan deaktivere kamera, mikrofon og de sensorer, der styres af Androids SensorManager. Hvis alle sensorer pludselig ser døde ud, bør du kontrollere det felt, før du antager, at bundkortet er defekt.

## Test accelerometer og gyroskop

Slå rotationslåsen fra, og drej telefonen langsomt. Skærmen bør skifte retning uden lange forsinkelser eller gentagne spring. Hvis den nægter at rotere i alle apps, sender accelerometeret måske ikke korrekte data.

Åbn derefter en vaterpasapp eller en anden app, der viser hældning. Læg telefonen fladt på et bord. Værdierne bør falde til ro i stedet for at drive uendeligt. En lille afvigelse er normal. En stor, fast hældning på en plan overflade peger på kalibreringsproblemer.

Til gyroskopet kan du bruge panoramatilstand i kameraet eller en AR-app. Visningen bør følge dine bevægelser jævnt. Hvis panoramabilleder gentagne gange mislykkes, eller AR-objekter glider rundt, mens du står stille, kan gyroskopet være støjfyldt.

Her hjælper en sammenligning. Test den samme app på en anden telefon i det samme rum. Hvis begge opfører sig dårligt, ligger problemet sandsynligvis i appen eller omgivelserne.

## Test nærhedssensoren

Foretag et opkald, og hold hånden cirka to centimeter over den øverste del af skærmen. Skærmen bør slukke. Fjern hånden, og den bør tænde igen.

De fleste nærhedssensorer i telefoner er ikke præcise afstandsmålere. De viser ofte blot nær eller fjern, ikke en jævn måling centimeter for centimeter. I en diagnoseapp kan det se ud som 0 cm og 5 cm uden værdier imellem. Det er normalt.

Hvis værdien sidder fast, skal du fjerne cover og skærmbeskytter. Rengør den øverste kant eller sensorområdet med en blød klud. Test igen, før du giver hardwaren skylden. Skærmbeskyttere af hærdet glas er en klassisk årsag.

## Test lyssensoren

Slå automatisk lysstyrke til. Lys med en lommelygte nær toppen af skærmen, og dæk derefter det samme område med hånden. Lysstyrken bør reagere tydeligt, selv om Android kan udjævne ændringen i stedet for at springe med det samme.

En lyssensor viser som regel værdien i lux. Et mørkt rum kan ligge under 50 lux. Et almindeligt kontor kan ligge på nogle hundrede lux. Direkte sollys kan overstige 10.000 lux. Det præcise tal er mindre vigtigt end, om værdien ændrer sig fornuftigt, når lyset ændres.

Hvis automatisk lysstyrke opfører sig mærkeligt, men luxværdien reagerer korrekt, er sensoren sandsynligvis i orden. Problemet ligger snarere i den adaptive lysstyrkes indlæring, skærmindstillingerne eller producentens software.

## Test magnetometer og kompas

Gå udenfor, eller stil dig væk fra metalgenstande. Åbn Maps, og tryk på placeringspilen. Hvis den blå kegle er meget bred eller peger forkert, skal kompasset kalibreres.

Brug ottetalsbevægelsen: Hold telefonen foran dig, og bevæg den i et stort liggende ottetal, mens du drejer håndleddet i forskellige vinkler. Fortsæt i 15-20 sekunder. Det ser fjollet ud. Det virker overraskende ofte.

Hvis kompasset stadig er forkert, skal du fjerne magnetisk tilbehør og prøve igen. Bilholdere, pungcovers, ringe i MagSafe-stil, låg på bærbare computere og metalborde kan alle forvrænge målingerne. Indendørs er kompasset ofte dårligere, end folk forventer.

## Test barometeret

Ikke alle Android-telefoner har et barometer. Billigere modeller undlader det ofte.

Hvis telefonen har et, bør en sensorapp vise lufttrykket i hPa eller millibar. Sammenlign med en vejrstation i nærheden. Forvent ikke et perfekt match, fordi vejrtjenester ofte viser tryk korrigeret til havniveau, mens telefonen måler det lokale tryk i din højde.

En værdi, der står helt fast på et usandsynligt niveau, kan betyde, at sensoren er blokeret eller defekt. Ventilationshullet er meget lille, så lommefnug og støv kan have betydning.

## Læs rå sensordata uden at overfortolke dem

Rå målinger er nyttige, men jagt ikke perfektion.

Et accelerometer viser acceleration langs X-, Y- og Z-akserne i m/s². En telefon, der ligger fladt, bør vise cirka 9,8 m/s² på én akse på grund af tyngdekraften og værdier tæt på nul på de andre, afhængigt af retningen.

Et gyroskop viser rotation i radianer pr. sekund. Når telefonen ligger stille, bør værdierne være tæt på nul. Små bevægelser og sensorstøj er normalt.

Et magnetometer viser magnetfeltets styrke i mikrotesla. Jordens magnetfelt ligger ofte omkring 25-65 mikrotesla afhængigt af placering. Værdier langt uden for det interval skyldes som regel interferens.

En lyssensor viser lux. Du leder efter en fornuftig ændring, ikke laboratorienøjagtighed.

## Løsninger du bør prøve før reparation

Genstart telefonen først. Kedeligt, men værd at gøre.

Fjern derefter cover og skærmbeskytter, rengør sensorområdet øverst, slå Batterisparefunktion fra, og kontrollér, om `Sensors off` er aktiveret under Udviklerindstillinger. Hvis problemet kun rammer én app, skal du kontrollere appens tilladelser og batteribegrænsninger.

Ved kompasproblemer skal du kalibrere igen og gå væk fra magneter. Ved problemer med automatisk rotation skal du teste i flere apps, fordi nogle apps låser retningen. Ved problemer med nærhedssensoren skal du teste under et rigtigt opkald uden skærmbeskytteren.

Hvis en sensor stoppede med at virke lige efter en systemopdatering, skal du installere ventende systemopdateringer og Google Play-systemopdateringer og derefter teste igen. Hvis telefonen kører en betaversion, bør du ikke betragte én defekt sensoradfærd som bekræftet hardwarefejl, før du har testet på stabil software.

En diagnoseapp som runcheck er nyttig, når symptomerne overlapper. Belastning på batteriet, varme og netværksproblemer kan få telefonen til at føles defekt, selv om selve sensoren kun er én del af problemet.

## Hvornår det sandsynligvis er hardware

Mistænk hardware, når den samme sensor fejler i alle apps, fejler i producentens diagnoseværktøj, fortsætter i sikker tilstand og stadig ikke virker efter en nulstilling.

De enkelte telefonsensorer er som regel små overflademonterede komponenter eller dele af et større modul. Værksteder udskifter sjældent kun én sensorchip. I praksis betyder reparationen ofte udskiftning af en skærmenhed, et kameramodul, det nederste printkort eller en del af hovedkortet, afhængigt af hvor sensoren sidder.

Hvis telefonen er blevet tabt, bøjet eller udsat for vand, skal du nævne det, når du indhenter et reparationstilbud. Det ændrer, hvad teknikeren bør undersøge.
