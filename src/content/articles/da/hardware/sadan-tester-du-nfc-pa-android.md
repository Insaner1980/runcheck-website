---
title: "Sådan tester du NFC på Android"
description: "Enkle måder at kontrollere, om NFC virker på din Android-telefon, med Indstillinger, kontaktløse kort, Google Wallet, Samsung-diagnostik, Xiaomi CIT og NFC-testapps."
listSummary: "diagnostik, sensorer og android"
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnostik","sensorer","android","hardware","guide"]
locale: "da"
draft: false
---
Du holder telefonen hen til en betalingsterminal, og der sker ingenting. Nu har du to problemer: Betalingen gik ikke igennem, og du ved ikke, om fejlen ligger i NFC, Google Wallet, kortet, coveret eller terminalen.

Begynd i mindre skala. NFC er let at teste, når du adskiller læsning af hardware fra betalinger.

## Tjek, om telefonen har NFC

Åbn Indstillinger, og søg efter NFC. På mange Android-telefoner er vejen Indstillinger > Forbundne enheder > Præferencer for forbindelser > NFC. På Samsung kan du bruge Indstillinger > Forbindelser > NFC og kontaktløse betalinger og derefter kontrollere betalingsappen på den samme side.

Hvis NFC-indstillingen ikke findes, har telefonen sandsynligvis ikke en NFC-chip. Det er stadig almindeligt på billigere Android-telefoner, især budgetmodeller, der sælges i flere regionale varianter. Én udgave af en telefon kan have NFC, mens en anden udgave med næsten samme navn ikke har det.

Slå NFC til før testen. Kontrollér også standardappen til betaling, hvis du tester Google Wallet, Samsung Pay eller Samsung Wallet, afhængigt af hvad der understøttes i dit område og på din telefonmodel.

## Test med et kontaktløst kort

Det er den enkleste test af hardwaren. Brug et kontaktløst betalingskort, rejsekort, adgangskort eller NFC-tag. Hold det fladt mod telefonens bagside, og flyt det langsomt rundt på den øverste halvdel af enheden.

Hvis NFC virker, vibrerer telefonen som regel, afspiller en lyd, åbner en Wallet-meddelelse eller viser en besked i stil med "ukendt tag". Alle disse reaktioner betyder, at NFC-læseren og antennen er aktive.

Sker der ingenting? Tag coveret af, og prøv igen. Metalplader, magnetiske holdere, ringgreb og tykke etuier kan blokere eller svække NFC. Læseafstanden er kort, så små ændringer i placeringen har betydning.

## Test med en betalingsterminal

En vellykket kontaktløs betaling er en stærk test i praksis, fordi den kontrollerer mere end simpel læsning af et tag. Telefonen skal have NFC slået til, en understøttet Wallet-app, et gyldigt kort, skærmlås og den korrekte standardopsætning til betaling.

Ved Google Wallet anbefaler Google, at du kontrollerer NFC under Indstillinger > Forbundne enheder > Præferencer for forbindelser > NFC, vælger Kontaktløse betalinger og derefter indstiller Google Wallet som standardapp til kontaktløs betaling. På Samsung findes de tilsvarende indstillinger under Forbindelser på siden til NFC og kontaktløse betalinger.

Hvis læsning af tags virker, men betalinger ikke gør, er NFC-chippen sandsynligvis ikke problemet. Tjek opsætningen af Wallet, bankens understøttelse, skærmlåsen, Google Play-tjenester, enhedens integritet og standardappen til betaling.

## Brug en diagnosemenu eller app

Samsungs understøttede vej er Samsung Members > Diagnostik. Der vises ikke altid en separat NFC-test på alle modeller, men appen kan kontrollere mange af telefonens komponenter og hjælpe dig videre til service, hvis en test fejler.

Telefoner fra Xiaomi, Redmi og POCO har ofte en NFC-test i CIT. Åbn opkaldsappen, og indtast `*#*#6484#*#*`, eller prøv `*#*#64663#*#*`, hvis den første kode ikke virker. Hold et kort eller tag tæt på telefonen under NFC-testen, og vent på resultatet.

Fairphone-modeller har tidligere haft en manuel NFC-test i en servicemenu, men menukoderne varierer mellem generationerne. Brug den officielle supportvej til præcis din model, når det er muligt.

Til en hurtig appbaseret kontrol kan NFC Check fortælle, om Android registrerer NFC-hardware, og om funktionen er slået til. NFC Tools er bedre, hvis du vil læse tags og se tag-ID, teknologitype og NDEF-poster.

## Find antennens placering

NFC-antennen sidder ikke samme sted på alle telefoner.

På mange Samsung Galaxy S-telefoner sidder den omkring den øverste midte af bagsiden tæt på kameraområdet. På Pixel sidder den som regel i den øverste del af bagsiden. På telefoner fra Xiaomi og OnePlus varierer placeringen mere fra model til model.

Antennens placering forklarer, hvorfor én telefon virker, når kamerabumpet berører læseren, mens en anden kun virker, når midten af bagsiden holdes mod den. Hvis telefonens brugervejledning indeholder en NFC-tegning, bør du stole på den frem for generelle råd.

## Almindelige årsager til, at NFC ikke virker

Coveret blokerer signalet. Det er en kedelig forklaring, men den er almindelig. Test den bare telefon, før du ændrer indstillinger.

Du holder den forkerte del af telefonen mod læseren. Flyt kortet eller telefonen langsomt. Lad være med at vifte med den, som om du scanner en stregkode.

NFC er slået fra, eller den forkerte Wallet-app er valgt. Søg i Indstillinger efter NFC og kontaktløse betalinger.

Telefonen er låst, mens Wallet kræver oplåsning. Nogle Android-versioner kan læse tags, når skærmen er tændt, mens betalinger kræver godkendelse. Grundlæggende læsning af tags og betalinger bør testes hver for sig.

En nylig opdatering har ændret adfærden. Android 17 kom først til understøttede Pixel-enheder, mens andre Android-mærker følger deres egne planer for Android 17. Hvis et NFC-problem opstår lige efter en Pixel-opdatering, bør du lede efter oplysninger fra Pixel-support i stedet for at gå ud fra, at det samme problem findes på Samsung, Xiaomi eller OnePlus.

Telefonen er blevet repareret. NFC-antenner er ofte en del af bagcoveret, spolen til trådløs opladning eller en flexenhed. Hvis NFC holdt op med at virke efter udskiftning af batteriet eller bagcoveret, er antennen muligvis ikke blevet tilsluttet korrekt igen.

## Når hardwaren sandsynligvis er defekt

Hvis NFC er slået til, coveret er fjernet, flere kort og tags ikke giver nogen reaktion, Sikker tilstand ikke ændrer noget, og en diagnoseapp stadig ikke registrerer NFC-aktivitet, er en hardwarefejl blevet sandsynlig.

Selve chippen kan gå i stykker, men skade på antennen er mere almindelig. Fald, kontakt med vand, reparationer af bagcoveret og flexkabler, der ikke sidder ordentligt, er alle mulige årsager.

For de fleste handler det praktiske spørgsmål om, hvorvidt NFC er værd at reparere. Hvis du bruger kontaktløs betaling hver dag, kan en reparation give mening. Hvis telefonen er ældre, og alt andet virker, kan et kontaktløst smartwatch være en billigere løsning.
