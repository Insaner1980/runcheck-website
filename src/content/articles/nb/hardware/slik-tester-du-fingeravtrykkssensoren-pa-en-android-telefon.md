---
title: "Slik tester du fingeravtrykkssensoren på en Android-telefon"
description: "Slik sjekker du om fingeravtrykkssensoren på Android virker, med innebygd diagnostikk, ringekoder, Pixel-verktøy, Samsung Members, Xiaomi CIT og enkle praktiske tester."
listSummary: "diagnostikk, sensorer og android"
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnostikk","sensorer","android","maskinvare","guide"]
locale: "nb"
draft: false
---
Er fingeravtrykkssensoren ødelagt, eller er den bare irritert på skjermbeskytteren? Det høres ut som en spøk, men det er det første spørsmålet som er verdt å stille.

Feil med fingeravtrykk er ofte ganske hverdagslige. Tørr hud, fuktighet, en billig skjermbeskytter av herdet glass, dårlig registrering eller en halvferdig programvareoppdatering kan få en frisk sensor til å virke død. Maskinvarefeil finnes også, særlig etter et fall eller et skjermbytte, men ikke begynn der.

## Hurtigtest: lås opp ti ganger

Registrer ett fingeravtrykk, rengjør sensorområdet, tørk fingeren og prøv å låse opp telefonen ti ganger på rad.

For en kapasitiv sensor på baksiden eller siden betyr 8 eller 9 vellykkede opplåsinger av 10 vanligvis at maskinvaren er i orden. Hvis den mislykkes én eller to ganger, skyldes det sannsynligvis plasseringen av fingeren, smuss, hudens tilstand eller programvare.

Med en sensor i skjermen bør du være litt strengere med oppsettet og litt mer tolerant med resultatet. Optiske og ultrasoniske sensorer er avhengige av skjermoverflaten, så en skjermbeskytter kan ødelegge nøyaktigheten. Hvis en ren telefon uten skjermbeskytter mislykkes mer enn 3 av 10 ganger, bør du teste videre.

## Tester på Samsung Galaxy

På mange Samsung Galaxy-telefoner kan du åpne den forhåndsinstallerte Phone-appen og skrive inn `*#0*#`. Se etter `Fingerprint Scanner` eller et fingeravtrykksvalg under sensorene i diagnosemenyen. Menyen kan vise om maskinvaren registrerer en finger, og om samsvarstesten virker.

Samsung Members er den bedre støttede veien. Åpne Samsung Members, gå til Diagnostikk og kjør fingeravtrykkstesten hvis den er tilgjengelig på modellen din. Samsungs egen feilsøking trekker også frem vanlige årsaker som ikke-godkjente skjermbeskyttere, skitne sensorer, ripet glass, tørr hud og deksler som blokkerer sensoren.

Én nyere Samsung-detalj er lett å overse. På Galaxy-telefoner med Android 16, One UI 8 eller nyere sier Samsung at registreringen på enkelte enheter bruker en sveipende bevegelse. Følg bevegelsen som vises på skjermen, i stedet for å gå ut fra at alle Galaxy-modeller fortsatt vil ha gjentatte, stillestående trykk.

## Tester på Xiaomi, Redmi og POCO

På telefoner fra Xiaomi, Redmi og POCO åpner du ringeappen og skriver inn `*#*#6484#*#*`. Hvis CIT-modus ikke åpnes, kan du prøve `*#*#64663#*#*`.

Se etter `Fingerprint sensor check`, `Fingerprint input test` eller et lignende valg i CIT. Xiaomis støttesider anbefaler uttrykkelig CIT-maskinvaredeteksjon når fingeravtrykksvalget mangler, så dette er mer enn et tilfeldig forumtriks.

Du kan også prøve `Settings > About phone > Detailed info and specs` eller `All specs`, og deretter trykke flere ganger på `Kernel version`. Xiaomi endrer navnene mellom MIUI og HyperOS, men veien via kjerneversjonen virker ofte selv når koden i ringeappen er blokkert.

## Tester på Google Pixel

Pixel-telefoner har ikke en offentlig ringekode bare for fingeravtrykk, slik Samsung og Xiaomi tilbyr.

For reparasjonsdiagnostikk dokumenterer Google `*#*#7287#*#*` for Pixel Repair Diagnostics App på Pixel-telefoner som støttes. Den kan hjelpe med å kontrollere maskinvaren før eller etter en reparasjon. Google viser også til verktøyet Pixel Update and Software Repair for å oppdatere operativsystemet og justere Under-Display Fingerprint Sensor, eller UDFPS.

Ved vanlig bruk er den mest praktiske Pixel-testen fortsatt enkel: Slett alle fingeravtrykk, start telefonen på nytt, registrer én finger og prøv gjentatte opplåsinger. Det er mer alvorlig hvis fingeravtrykksvalget er helt borte fra Innstillinger, eller registreringen aldri starter, enn om noen få opplåsinger mislykkes.

Android 17 er relevant fordi støttede Pixel-enheter fikk systemet først. Hvis et fingeravtrykksproblem på en Pixel begynte rett etter en større Android 17-oppdatering, bør du se etter etterfølgende oppdateringer og Pixel-spesifikke støttemeldinger før du betaler for reparasjon.

## Andre Android-telefoner

OnePlus, Motorola, Realme, Oppo og Android-telefoner i Nokia-stil varierer for mye til at én fingeravtrykkskode kan gjelde alle.

Begynn med produsentens støtte- eller diagnoseapp dersom telefonen har en. Motorola har for eksempel Device Help med maskinvaretester på mange modeller. Telefoner i OnePlus- og Oppo-familien kan ha tilgang til `*#899#` eller eldre utviklermenyer, men støtten er ujevn.

En tredjepartsapp kan likevel svare på ett grunnleggende spørsmål: Oppdager Android en fingeravtrykkssensor i det hele tatt? Apper som Sensor Test, DevCheck og Phone Doctor Plus kan vise om maskinvareabstraksjonslaget for fingeravtrykk finnes. De kan vanligvis ikke utføre sikker matching av fingeravtrykk, fordi Android beskytter biometriske data med vilje, men de kan skille mellom «manglende maskinvare» og «dårlig gjenkjenning».

## Hva resultatet betyr

Hvis fingeravtrykksinnstillingene ikke lenger vises, sensoren ikke oppdages eller diagnostikken melder om maskinvarefeil, er problemet sannsynligvis fysisk. Vanlige årsaker er en skadet flekskabel, sprukket sensor, væskeskade eller et skjermbytte der sensoren i skjermen ikke ble riktig paret eller justert.

Når maskinvaren oppdages, men gjenkjenningen er dårlig, bør du ikke anta at delen er ødelagt. Dette er kategorien som ofte kan fikses.

Slett alle fingeravtrykk og registrer dem på nytt. Begynn med én finger. Under registreringen bør du dekke midten, kantene og fingertuppen, slik at telefonen lager et nyttig kart i stedet for å lese den samme lille delen ti ganger.

Registrer den samme fingeren to ganger hvis telefonen tillater det. Det er ikke spesielt elegant, men virker overraskende ofte. Bruk litt ulike vinkler og forskjellig trykk ved den andre registreringen.

Fjern skjermbeskytteren under testen. Dette er den vanligste årsaken til problemer med sensorer i skjermen. En beskytter som ikke er laget for akkurat din telefonmodell, kan spre lyset i optiske sensorer eller forstyrre ultrasonisk avlesning. Hvis gjenkjenningen virker uten beskytteren, var beskytteren problemet.

Rengjør sensoren og fingeren. Hudfett, støv, rester av hudkrem, svette og sprukken hud reduserer antallet brukbare linjepunkter. Hvis hendene er svært tørre, kan du smøre på litt håndkrem og la den trekke inn før testen. Våte fingre er like problematiske.

Installer ventende systemoppdateringer. Driverne til fingeravtrykksensoren ligger i fastvaren, og biometriske feil kommer faktisk med programvareoppdateringer. Store Android-oppgraderinger, blant annet Android 17 på Pixel og produsentenes egne Android 17-versjoner på andre merker, kan endre hvordan sensoren oppfører seg fordi produsentens fastvare ligger mellom Android og selve sensoren.

## Når reparasjon gir mening

Prøv tilbakestilling til fabrikkinnstillinger først etter at du har sikkerhetskopiert telefonen og brukt opp de vanlige løsningene. En tilbakestilling kan rydde opp i skadde biometriske data og kalibreringstilstand, men det er et grovt tiltak.

Hvis sensoren fortsatt ikke virker etter en tilbakestilling, eller diagnostikken sier at maskinvaren ikke oppdages, bør du be om et reparasjonstilbud. Fingeravtrykksensorer på baksiden og siden er ofte separate deler og kan være rimelige å bytte. Sensorer i skjermen er annerledes. Hvis leseren er bundet til skjermmodulen eller må kalibreres etter skjermbytte, kan reparasjonen bli så dyr at det begynner å være mer fornuftig å erstatte telefonen.

Det er et irriterende svar, men bedre enn å bruke penger på feil del.
