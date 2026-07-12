---
title: "Sådan tester du telefonens fingeraftrykssensor på Android"
description: "Sådan kontrollerer du, om fingeraftrykssensoren på din Android-telefon virker, med indbygget diagnostik, opkaldskoder, Pixel-værktøjer, Samsung Members, Xiaomi CIT og enkle praktiske test."
listSummary: "diagnostik, sensorer og android"
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnostik","sensorer","android","hardware","guide"]
locale: "da"
draft: false
---
Er fingeraftrykssensoren gået i stykker, eller er den bare irriteret over din skærmbeskytter? Det lyder som en vittighed, men det er det første spørgsmål, der er værd at stille.

Problemer med fingeraftryk har ofte en kedelig forklaring. Tør hud, fugt, en billig skærmbeskytter af hærdet glas, en dårlig registrering eller en softwareopdatering, der ikke blev helt færdig, kan få en velfungerende sensor til at se defekt ud. Hardwarefejl forekommer også, især efter et fald eller en skærmreparation, men begynd ikke der.

## Hurtig kontrol: Lås op ti gange

Registrer ét fingeraftryk, rengør sensorområdet, tør fingeren, og prøv at låse telefonen op ti gange i træk.

På en kapacitiv sensor på bagsiden eller siden betyder 8 eller 9 vellykkede oplåsninger ud af 10 som regel, at hardwaren fungerer. Hvis det fejler en eller to gange, skyldes det sandsynligvis fingerens placering, snavs, hudens tilstand eller software.

Ved en sensor i skærmen bør du være lidt mere omhyggelig med opsætningen og lidt mere tolerant over for resultatet. Optiske og ultralydsbaserede sensorer afhænger af skærmens overflade, så en skærmbeskytter kan ødelægge præcisionen. Hvis en ren telefon uden skærmbeskytter fejler mere end 3 gange ud af 10, bør du fortsætte med at teste.

## Test på Samsung Galaxy

På mange Samsung Galaxy-telefoner kan du åbne den forudinstallerede Telefon-app og indtaste `*#0*#`. Find Fingerprint Scanner eller et punkt om fingeraftryk under Sensors i diagnosemenuen. Menuen kan vise, om hardwaren registrerer en finger, og om genkendelsen virker.

Samsung Members er den bedre understøttede vej. Åbn Samsung Members, gå til Få hjælp eller Support og derefter Diagnostik, og kør fingeraftrykstesten, hvis den findes på din model. Samsungs egen fejlfinding fremhæver også almindelige årsager som ikke-certificerede skærmbeskyttere, snavsede sensorer, ridset glas, tør hud og covers, der dækker sensoren.

En aktuel Samsung-detalje er let at overse: På Galaxy-telefoner med Android 16, One UI 8 eller nyere oplyser Samsung, at registreringen af fingeraftryk på nogle enheder foregår med en strygende bevægelse. Følg bevægelsen på skærmen under registreringen i stedet for at gå ud fra, at alle Galaxy-modeller stadig kræver gentagne, stillestående tryk.

## Test på Xiaomi, Redmi og POCO

På telefoner fra Xiaomi, Redmi og POCO kan du åbne opkaldsappen og indtaste `*#*#6484#*#*`. Hvis CIT-tilstand ikke åbner, kan du prøve `*#*#64663#*#*`.

Find Fingerprint sensor check, Fingerprint input test eller et punkt med et tilsvarende navn i CIT. Xiaomis supportsider anbefaler specifikt CIT-hardwaretest, når fingeraftryksfunktionen mangler, så det er mere end et gammelt forumtrick.

Du kan også prøve Settings > About phone > Detailed info and specs eller All specs og derefter trykke flere gange på kernelversionen. Xiaomi ændrer menunavnene mellem MIUI og HyperOS, men vejen via kernelversionen virker ofte stadig, når koden i opkaldsappen er blokeret.

## Test på Google Pixel

Pixel-telefoner har ikke den samme offentlige, fingeraftryksspecifikke menu i opkaldsappen, som Samsung og Xiaomi tilbyder.

Til reparationsdiagnostik dokumenterer Google koden `*#*#7287#*#*` til appen Pixel Repair Diagnostics på understøttede Pixel-telefoner. Den kan hjælpe med at kontrollere enhedens hardware før eller efter en reparation. Google henviser også til værktøjet Google Pixel - opdatering og softwarereparation, som kan opdatere styresystemet og justere Under-Display Fingerprint Sensor, eller UDFPS.

Ved almindelig brug er den praktiske Pixel-test stadig enkel: Slet alle fingeraftryk, genstart telefonen, registrer én finger igen, og prøv gentagne oplåsninger. Hvis fingeraftryksfunktionen er helt væk fra Indstillinger, eller registreringen aldrig går i gang, er det mere alvorligt end enkelte mislykkede oplåsninger.

Android 17 er relevant her, fordi versionen først kom til understøttede Pixel-enheder. Hvis et fingeraftryksproblem på en Pixel begynder lige efter en større Android 17-opdatering, bør du kontrollere efterfølgende rettelser og oplysninger fra Pixel-support, før du betaler for en reparation.

## Andre Android-telefoner

OnePlus, Motorola, Realme, Oppo og Android-telefoner i Nokia-stil varierer for meget til én universel fingeraftrykskode.

Begynd med producentens support- eller diagnoseapp, hvis telefonen har en. Motorola har for eksempel Device Help med hardwaretest på mange modeller. Telefoner fra OnePlus og Oppo-familien kan have adgang gennem `*#899#` eller ældre engineering-menuer, men understøttelsen er uensartet.

En tredjepartsapp kan stadig besvare ét grundlæggende spørgsmål: Kan Android overhovedet se en fingeraftrykssensor? Apps som Sensor Test, DevCheck og Phone Doctor Plus kan vise, om Androids hardwareabstraktionslag til fingeraftryk er til stede. De kan som regel ikke udføre sikker genkendelse af fingeraftryk, fordi Android beskytter biometriske data med vilje, men de kan hjælpe med at skelne mellem manglende hardware og dårlig genkendelse.

## Hvad resultatet betyder

Hvis telefonen ikke længere viser indstillinger for fingeraftryk, sensoren ikke registreres, eller diagnostikken melder om hardwarefejl, er problemet sandsynligvis fysisk. Almindelige årsager er et beskadiget flexkabel, en revnet sensor, kontakt med vand eller en skærmudskiftning, hvor sensoren i skærmen ikke blev parret eller placeret korrekt.

Når hardwaren registreres, men genkendelsen er dårlig, skal du ikke straks gå ud fra, at delen er defekt. Det er den gruppe af problemer, der ofte kan løses.

Slet alle fingeraftryk, og registrer dem igen. Begynd med én finger. Sørg under registreringen for at dække fingerens midte, kanter og spids, så telefonen får et brugbart kort i stedet for den samme delvise scanning ti gange.

Registrer den samme finger to gange, hvis telefonen tillader det. Det er ikke elegant, men det virker overraskende ofte. Brug lidt andre vinkler og et andet tryk ved den anden registrering.

Fjern skærmbeskytteren under testen. Det er den største enkeltstående årsag til problemer med sensorer i skærmen. En beskytter, der ikke er lavet til præcis den telefonmodel, kan sprede lyset på optiske sensorer eller forstyrre en ultralydsmåling. Hvis genkendelsen virker uden beskytteren, var beskytteren problemet.

Rengør sensoren og fingeren. Hudfedt, støv, rester af creme, sved og revnet hud reducerer antallet af brugbare fingeraftrykslinjer. Hvis dine hænder er meget tørre, kan du smøre en lille mængde håndcreme på og lade den trænge ind før testen. Våde fingre er lige så problematiske.

Installer ventende systemopdateringer. Drivere til fingeraftryk ligger i firmwaren, og biometriske fejl slipper indimellem med i en udgivelse. Store Android-opgraderinger, herunder Android 17 på Pixel og senere OEM-versioner på andre mærker, kan ændre fingeraftryksfunktionen, fordi producentens firmware ligger mellem Android og sensoren.

## Hvornår en reparation giver mening

Prøv kun en nulstilling til fabriksindstillinger, når du har sikkerhedskopieret telefonen og afprøvet de normale løsninger. En nulstilling kan rydde beskadigede biometriske data og kalibreringstilstand, men det er en grov metode.

Hvis sensoren stadig fejler efter en nulstilling, eller diagnostikken siger, at hardwaren ikke registreres, bør du indhente et tilbud på reparation. Fingeraftrykssensorer på bagsiden og siden er ofte separate dele og kan være rimelige at udskifte. Sensorer i skærmen er anderledes. Hvis fingeraftrykslæseren er bundet til hele skærmmodulet eller kræver kalibrering efter en skærmudskiftning, kan reparationen blive så dyr, at det begynder at give mere mening at udskifte telefonen.

Det er det irriterende svar, men det er bedre end at bruge penge på den forkerte del.
