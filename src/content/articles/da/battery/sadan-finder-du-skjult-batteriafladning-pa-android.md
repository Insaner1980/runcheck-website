---
title: "Sådan finder du skjult batteriafladning på Android"
description: "Hvorfor giver batteriskærmen Android System eller Google Play services skylden, når det egentlige problem sandsynligvis er en app, en synkroniseringssløjfe, lokation eller modemmet? Fordi systemposterne ofte udfører arbejdet på vegne af andre funktioner. Irriterende, ja. Ubrugeligt, nej."
listSummary: "batteri, strømforbrug og fejlfinding"
hub: "battery"
sourceNumber: 25
order: 15
subgroup: "Drain"
tags: ["batteri","strømforbrug","fejlfinding","android","ydeevne"]
locale: "da"
draft: false
---
Skjult batteriafladning handler mest om at finde det, der holder telefonen vågen, mens skærmen er slukket.

## Begynd med den kedelige skærm

Åbn først **Indstillinger > Batteri > Batteriforbrug**. På Pixel kan du skifte mellem app- og systemvisning, hvis muligheden findes. På Samsung skal du åbne **Indstillinger > Batteri** og den detaljerede oversigt over batteriforbruget. Xiaomi, OnePlus, Motorola og andre mærker bruger andre betegnelser, men de viser alle en form for liste over appforbrug.

Se efter tre mønstre:

1. En app med højt baggrundsforbrug og meget lidt brug i forgrunden.
2. En systempost, der bliver ved med at ligge højt gennem flere opladningscyklusser.
3. En graf, der falder i en periode med slukket skærm, hvor telefonen burde have været i ro.

Ét dårligt resultat efter en lang sikkerhedskopiering i Google Photos eller en opdatering fra Play Store er ikke nok. Tre lignende resultater i træk er et mønster.

## Tjek, om telefonen faktisk sover

Androids Doze-tilstand reducerer baggrundsarbejde, når telefonen ikke er tilsluttet en oplader, er inaktiv og ligger stille. Den udsætter opgaver og synkronisering, begrænser netværksadgang og samler vedligeholdelsesarbejde i tidsvinduer. Apps kan stadig få begrænsede undtagelser, og notifikationer med høj prioritet kan kortvarigt vække telefonen, men en sovende telefon bør bruge lange perioder på at gøre meget lidt.

Hvis batterigrafen viser et jævnt fald i løbet af natten, eller telefonen føles varm på natbordet, er der noget, der bryder denne rolige tilstand.

På nogle Android-versioner viser batterigrafen **Awake** eller lignende tidslinjer. Hvis **Awake** er aktiv i lange perioder, mens **Screen on** ikke er det, har du et spor. Mange One UI-versioner viser lignende tynde statuslinjer under grafen.

Ingen linje? Gå et lag dybere.

## Brug sikker tilstand, før du giver batteriet skylden

Sikker tilstand bliver undervurderet. Den deaktiverer midlertidigt downloadede apps og lader kernesystemet køre. Hvis afladningen om natten næsten forsvinder i sikker tilstand, er hardwaren sandsynligvis ikke problemet.

Den præcise fremgangsmåde varierer. På mange Android-telefoner holder du afbryderknappen nede og trykker derefter længe på **Sluk**, indtil muligheden for sikker tilstand vises. Google beskriver sikker tilstand som en måde at finde problematiske apps på, og Samsung bruger den som diagnoseværktøj med de fleste tredjepartsapps deaktiveret.

Kør én test natten over i sikker tilstand, hvis afladningen er voldsom. Bliv ikke der i en uge. Hvis det hjælper, skal du først fjerne eller begrænse apps, der for nylig er blevet installeret eller opdateret.

## Indstillinger for udviklere kan vise, hvad der er aktivt lige nu

Aktivér Indstillinger for udviklere ved at åbne **Indstillinger > Om telefonen** og trykke på **Buildnummer** syv gange. Gå derefter til **Indstillinger > System > Indstillinger for udviklere** eller den tilsvarende placering på din telefon.

**Running services** giver et øjebliksbillede af tjenester, der bruger hukommelse og nogle gange CPU. Det er ikke en fuld batterirapport, men visningen kan afsløre oplagte problemer. Hvis en shoppingapp, app til livebaggrunde, oprydningsapp eller gammel fitnessapp kører, selv om du ikke har åbnet den, er det værd at undersøge.

**Standby apps** eller **Inactive apps** kan også være tilgængelige. Disse visninger viser, hvordan Android klassificerer appaktivitet. De findes ikke på alle telefoner, og producenter skjuler dem nogle gange. Det er den irriterende del af Android-diagnostik: Værktøjerne findes, men halvdelen af arbejdet består i at finde ud af, hvor producenten har placeret dem.

## Brug ADB, når du har brug for beviser

ADB er den mest direkte metode uden root til at undersøge wake locks og batterihistorik. Det kræver mere arbejde, men du slipper for at gætte.

Du skal bruge en computer med platform-tools installeret og USB-fejlfinding aktiveret på telefonen. Nulstil derefter de aktuelle statistikker:

```bash
adb shell dumpsys batterystats --reset
```

Brug telefonen normalt, eller lad den ligge natten over for at registrere afladning i inaktiv tilstand. Eksportér derefter rapporten:

```bash
adb shell dumpsys batterystats > batterystats.txt
```

Filen er stor. Søg først efter disse afsnit:

- **Estimated power use** for estimeret strømforbrug pr. app i mAh.
- **Wake locks** for apps, der holdt CPU'en vågen.
- **Alarm Stats** eller alarmrelaterede afsnit for apps, der vækkede enheden gentagne gange.
- **Mobile radio** og **Wi-Fi**-aktivitet, hvis afladningen ser netværksrelateret ud.

Googles dokumentation til Batterystats og Battery Historian beskriver den officielle arbejdsgang: Batterystats indsamler batteridata på enheden, og Battery Historian omdanner dataene til en HTML-tidslinje. Google advarer nu om, at Battery Historian ikke længere vedligeholdes aktivt, men værktøjet kan stadig være nyttigt, når du vil se wake locks, aktivitet i mobil- og Wi-Fi-forbindelserne, opladning, skærmtilstand og batteriniveau på én tidslinje. For almindelige brugere er det stadig mere end nødvendigt.

Hvis du kun vil bruge én kommando, så brug denne:

```bash
adb shell dumpsys batterystats
```

Den nævner ikke på magisk vis den skyldige app på almindeligt dansk. Den giver dig beviser.

## De sædvanlige skjulte årsager

**Google Play services** er som regel ikke skurken i sig selv. Tjenesten håndterer push-notifikationer, lokations-API'er, kontosynkronisering, enheder i nærheden, appopdateringer og dele af enhedens sikkerhed. Hvis den viser højt batteriforbrug, skal du tjekke synkroniseringsfejl på Google-konti, lokationstilladelser, sikkerhedskopiering i Google Photos og eventuelle ventende opdateringer til Play-tjenester.

Forsøg ikke at tvinge Google Play services til at standse eller at afinstallere dem. Pixel-support gør det klart, at tjenesten er integreret i Android. Ryd cache, genstart telefonen, opdater apps, og ret det underliggende konto- eller lokationsproblem.

**En mislykket kontosynkronisering** er kedelig, men almindelig. Åbn **Indstillinger > Adgangskoder og konti** eller **Indstillinger > Konti**, og se efter advarselsikoner, gamle arbejdskonti, ændrede adgangskoder eller tjenester, der aldrig bliver færdige med at synkronisere. Fjern kontoen, hvis du ikke bruger den. Tilføj den igen, hvis du gør.

**Svagt signal** kan ligne et systemproblem. Hvis posten for mobilnetværk i standby ligger højt, skal du køre en test i flytilstand natten over. Samsung nævner svag eller ustabil netværksforbindelse som en årsag til hurtigere batteriafladning, og i mange hjem er det hele forklaringen.

**Widgets og livebaggrunde** er nemme at glemme, fordi de ligger på startskærmen og ikke i appskuffen. En vejrwidget, der opdaterer lokationen med få minutters mellemrum, er noget andet end et statisk ur. Fjern widgets, du har tilføjet for nylig, i en dag, og sammenlign.

**Bluetooth-tilbehør** kan også ende i gentagne forbindelsesforsøg. Ure, øretelefoner, bilsystemer og aktivitetstrackere kan nogle gange afbryde og genoprette forbindelsen igen og igen. Hvis afladningen begyndte efter parring af noget nyt, skal du teste en nat med Bluetooth slået fra.

## Hvornår du bør mistænke hardwaren

Softwareafladning efterlader som regel spor: en app, en wake lock, netværksaktivitet, varme under CPU-belastning eller bedre opførsel i sikker tilstand. Et hardwareproblem er mere stædigt.

Nogle tegn peger i den retning:

- Telefonen mister meget strøm natten over, selv i flytilstand.
- Sikker tilstand gør ingen forskel.
- Telefonen er varm, mens den ligger urørt og ikke oplader.
- Batteritilstanden er reduceret, eller telefonen slukker ved tilfældige procenttal.

På Pixel 8a og nyere skal du tjekke **Indstillinger > Batteri > Batteritilstand**. Google siger, at **Reduceret** betyder, at batteriet har under 80 % resterende kapacitet. På Samsung skal du bruge **Samsung Members > Support > Kom i gang under Telefondiagnosticering > Batteristatus**.

En tredjepartsapp kan estimere kapaciteten, men du bør ikke betragte resultatet som en laboratoriemåling. Tal for batteritilstand er besværlige. Temperatur, opladningshistorik, kalibrering og målemetode påvirker alle estimatet.

## Hvad du ikke bør gøre

Installér ikke en batterispareapp, der lover at løse alt. De fleste af disse apps kopierer Androids indbyggede funktioner, viser annoncer og kører deres egne baggrundstjenester.

Bliv ikke ved med at rydde alle apps fra oversigten over seneste apps. Android håndterer det automatisk. Hvis én app opfører sig dårligt, skal du vælge **Tving til at standse** under **Indstillinger > Apps** og derefter opdatere, begrænse eller fjerne appen.

Begynd ikke med en nulstilling til fabriksindstillinger. Den kan rette beskadigede appdata og gamle indstillinger, men den koster tid og fortæller dig ikke, hvad der forårsagede afladningen. Brug den først, når batteriskærmen, sikker tilstand, nulstilling af netværket og appbegrænsninger ikke har hjulpet.

runcheck kan hjælpe, når mønstret går på tværs af kategorier. Batteriafladning sammen med varme peger i én retning. Batteriafladning sammen med svagt signal peger i en anden. Batteriafladning sammen med pres på lagerpladsen eller tung appbrug peger et tredje sted hen. Løsningen bliver bedre, når diagnosen ikke sker i blinde.
