---
title: "Tilstandstjek af en Android-telefon: sådan ser du, om den er i god stand"
description: "Telefoner går ikke i stykker fra den ene dag til den anden. Batteriet mister langsomt kapacitet. Lagerpladsen fyldes i baggrunden. Temperaturen stiger gradvist ved de samme belastninger. Når symptomerne bliver tydelige, for eksempel tilfældige nedlukninger, langsomme apps eller overophedning under helt almindelig brug, har problemet som regel været under udvikling i flere måneder."
listSummary: "Telefoner går ikke i stykker fra den ene dag til den anden."
hub: "device-health"
sourceNumber: 1
order: 1
tags: []
locale: "da"
draft: false
---
Et tilstandstjek fanger disse tendenser tidligt. Det er nyttigt, når du fejlsøger et bestemt problem, gør telefonen klar til salg eller bare vil finde ud af, om fornemmelsen af, at den er blevet langsommere, er reel eller indbildt.

---

## Hvad et tilstandstjek omfatter

Et ordentligt tilstandstjek handler om mere end batteriprocenten. Flere områder tilsammen viser, hvordan telefonen faktisk har det.

Batteritilstanden angiver, hvor meget der er tilbage af den oprindelige kapacitet. En telefon, der blev leveret med 5.000 mAh, kan måske kun lagre 4.000 mAh efter to års daglig opladning. Men den rå kapacitet fortæller ikke hele historien. Stabil spænding, afladningshastighed og temperatur under belastning påvirker alle, hvor meget reel skærmtid den resterende kapacitet giver.

Lagerets tilstand handler om mere end ledig plads. Den interne lagerplads har læse- og skrivehastigheder, som kan blive dårligere med tiden, og når lageret næsten er fyldt, skal Android arbejde hårdere med midlertidige filer og swap-hukommelse.

Termisk status, netværksforbindelse, sensorer og processorens ydeevne fuldender billedet. Vedvarende varme øger batterisliddet og kan få CPU'en til at sænke hastigheden. Wi-Fi- og mobildiagnostik måler, hvor godt forbindelsen faktisk fungerer, ikke bare om den findes. Et gyroskop, der driver, eller en nærhedssensor, der ikke reagerer, kan stille og roligt ødelægge funktioner. Hukommelsespres viser samtidig, om telefonen stadig kan multitaske uden at gå i stå.

---

## Hvorfor Android-telefoner bliver langsommere med tiden

Fornemmelsen af, at telefonen er blevet langsommere, er ikke indbildning. Flere ting bidrager, og virkningerne lægger sig oven i hinanden.

### Batteriet nedbrydes

Litium-ion-batterier slides kemisk ved hver opladningscyklus. Tidligere blev 500 cyklusser ofte brugt som en generel grænse, men den passer ikke længere som samlet regel. Mange nyere telefoner er vurderet til omkring 800-1.000 fulde cyklusser, før de falder til cirka 80 % af den oprindelige kapacitet, afhængigt af model, kemi og opladningsforhold. Derefter bliver skærmtiden mærkbart kortere, og uventede nedlukninger bliver mere sandsynlige under høj belastning.

Varme gør det værre. Opladning i varme omgivelser, spil mens telefonen er tilsluttet strøm og en telefon, der ligger på instrumentbrættet i en varm bil. Alt sammen fremskynder det kemiske slid.

### Pres på lagerpladsen

Apps, cachelagrede data, billeder og systemopdateringer. Det hele hober sig op. Android har brug for plads til midlertidige filer og opdateringer. Når den ledige plads falder til under cirka 10-15 % af den samlede kapacitet, begynder telefonen ofte at føles langsom. Det er en praktisk tommelfingerregel, ikke en fast Android-grænse. Apps åbner langsommere, kameraet tøver, før billeder gemmes, og animationer hakker.

### Flere baggrundsprocesser

Hver installeret app kan køre tjenester i baggrunden, synkronisere data og sende notifikationer. Efter et år eller to vokser det samlede forbrug. Læg dertil Android-opdateringer, som for hver generation kan kræve lidt mere af hardwaren, og ældre enheder begynder at få svært ved at følge med.

### Fysisk slid

Opladningsporte bliver løse. Højttalere mister klarhed. Berøringsskærmen kan reagere dårligere bestemte steder. Sensorer kommer ud af kalibrering. Ændringerne sker så gradvist, at de er lette at overse, indtil de begynder at forstyrre den daglige brug.

---

## Manuelle kontroller, du kan lave nu

Android har indbyggede værktøjer til en grundlæggende vurdering, så du behøver ikke installere ekstra apps.

### Batteritilstand i Indstillinger

Stien varierer mellem producenter:

**Samsung:** Åbn Samsung Members-appen, tryk på Support, vælg Kom i gang under Telefondiagnosticering, og kør testen Batteristatus. Afhængigt af model, region og One UI-version kan du få en enkel vurdering i stedet for en præcis procent.

**Google Pixel** (Pixel 8a og nyere): Indstillinger > Batteri > Batteritilstand viser batteriets status og et estimat af den resterende kapacitet. Indstillinger > Om telefonen > Batterioplysninger viser antal opladningscyklusser, produktionsdato og datoen for første brug. Funktionen, der tilpasser opladningen for at bevare kapaciteten på lang sigt, er tilgængelig på Pixel 6a og nyere.

**Xiaomi/POCO** (HyperOS): Se i batteriafsnittet i Indstillinger efter oplysninger om batteritilstand eller antal opladningscyklusser. Den præcise placering varierer efter model, region og HyperOS-version.

Hvis telefonen ikke viser oplysningerne i Indstillinger, findes der en diagnosekode: Åbn Telefon-appen, og indtast `*#*#4636#*#*`. På understøttede enheder åbner den en testmenu med batterispænding, temperatur og en grov status. Den viser som regel ikke en reel kapacitetsprocent eller antal opladningscyklusser.

### Brug af lagerplads

Lagerpladsafsnittet i Indstillinger viser en opdeling i kategorier som apps, billeder, videoer, systemfiler og cachelagrede data. Hvis mere end 85 % er i brug, er det værd at rydde op. Det kan mærkbart forbedre reaktionstiden at rydde app-cacher og flytte gamle filer væk fra telefonen.

### Temperatur

De fleste telefoner har ikke en indbygget temperaturmåler, men de fysiske tegn betyder noget. En telefon, der føles varm under let browsing eller i tomgang, bør undersøges. Menuen `*#*#4636#*#*` viser batteritemperaturen på understøttede enheder og giver i det mindste et tal at arbejde med.

### Grundlæggende hardwaretest

Nogle hurtige kontroller: Åbn en tegneapp, og træk en streg over hele skærmen for at finde områder, der ikke registrerer berøring. Afspil lyd ved forskellige lydstyrker for at teste højttalerne. Optag et kort lydklip for at kontrollere mikrofonen. Prøv begge kameraer, lommelygten og automatisk skærmrotation.

---

## Avanceret diagnostik

Manuelle kontroller dækker overfladen. Der findes dybere værktøjer, hvis du vil have et mere samlet billede.

### Test af sensorer

Telefoner har mange sensorer: accelerometer, gyroskop, magnetometer, nærhedssensor, lyssensor og barometer. Når en af dem svigter, er symptomerne ofte meget specifikke. Automatisk rotation holder op med at virke, skærmen slukker ikke under opkald, kompasnavigationen driver, eller GPS-nøjagtigheden falder kraftigt.

Test af enkelte sensorer kræver en diagnoseapp eller producentens egne koder. Samsung understøtter `*#0*#` til en hardwaretestmenu. Andre producenter har deres egne koder, men tilgængeligheden er ujævn.

### Ydelsestest

Benchmarkværktøjer belaster CPU, GPU og hukommelse med standardiserede test og giver en score, der kan sammenlignes med forventede resultater for den konkrete model. En score langt under normalen kan pege på termisk begrænsning, for stor belastning i baggrunden eller nedslidt hardware.

### Netværksdiagnostik

At Wi-Fi står som tilsluttet, siger ikke ret meget. Gennemløbshastighed, forsinkelse, pakketab og signalstabilitet afgør, hvordan forbindelsen fungerer i praksis. Mere detaljeret netværksdiagnostik hjælper med at skelne mellem problemer i telefonen og problemer i selve netværket.

### Batterianalyse

Vurderingen "God" eller "Dårlig" i Androids indstillinger er højst en grov indikator. En ordentlig batterianalyse sammenligner reel kapacitet med designkapacitet, registrerer afladningshastighed under forskellige forhold, følger temperaturmønstre over tid og tæller opladningscyklusser, når enheden stiller dataene til rådighed. På telefoner uden egentlige hardwaretællere kan apps stadig estimere kapaciteten ud fra opladningsadfærden, men resultatet skal fortolkes mere forsigtigt. Dataene viser, om et batteriskift reelt vil forlænge telefonens brugbare levetid.

Du kan komme langt ved at hoppe mellem Indstillinger, diagnosekoder og manuelle test, men oplysningerne forbliver spredte. En diagnoseapp som **runcheck** samler batteri-, temperatur-, netværks- og lagerdata i ét dashboard med en fælles tilstandsscore. Det er nyttigt til regelmæssige kontroller og især ved køb eller salg af en brugt telefon, hvor begge parter har gavn af en objektiv tilstandsrapport.

---

## Ofte stillede spørgsmål

### Hvor ofte bør jeg kontrollere telefonen?

En gang om måneden passer de fleste. På telefoner, der er ældre end to år, eller når der opstår problemer med ydeevnen, kan en kontrol hver anden uge gøre det lettere at opdage udviklingen. Faldende batterikapacitet, stigende temperaturer og lagerplads, der stille og roligt fyldes.

### Kan en nulstilling til fabriksindstillinger gøre en langsom telefon hurtig?

Det afhænger af årsagen. En nulstilling hjælper mod ophobet software, løbske baggrundsprocesser og beskadigede cachefiler. Den gør intet ved et nedslidt batteri, slidte lagerchips eller defekte sensorer. Et tilstandstjek først gør det lettere at afgøre, hvilken side af skellet problemet ligger på.

Sikkerhedskopiér alt, før du nulstiller.

### Ved hvilken batteritilstand bør jeg overveje et batteriskift?

Den almindelige grænse ligger omkring 80 % af den oprindelige designkapacitet. Under det niveau bliver kortere skærmtid og hyppigere opladning svære at ignorere. Under 70 % bliver telefonen besværlig som daglig telefon. Udviklingen i målingerne er som regel tydelig længe før, det bliver uudholdeligt.

### Virker diagnosekoder på alle Android-telefoner?

Nej. `*#*#4636#*#*` virker på mange enheder, men ikke alle. Samsung har sine egne koder, og producenter som Xiaomi, OnePlus og Motorola håndterer det forskelligt. Den fragmentering er en af hovedårsagerne til, at diagnoseapps findes: De samler testene på tværs af producenter.

### Er diagnoseapps fra tredjeparter sikre?

Ja, hvis de kommer fra en troværdig udvikler i Google Play Butik. De sikreste løsninger kører alt på selve enheden uden at kræve en konto, internetadgang eller tilladelser, der ikke har noget med diagnostik at gøre. En app, der vil have adgang til kontakter eller beskeder for at "kontrollere enhedens tilstand", er et advarselstegn.

---

Regelmæssige tilstandstjek omsætter en vag fornemmelse af, at noget er galt, til konkrete data. En månedlig kontrol tager få minutter og kan opdage problemer som faldende batterikapacitet, stigende temperaturer og fyldt lagerplads, før de begynder at forstyrre den daglige brug.
