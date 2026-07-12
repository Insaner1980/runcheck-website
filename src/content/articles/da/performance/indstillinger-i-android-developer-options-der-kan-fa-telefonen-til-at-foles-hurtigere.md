---
title: "Indstillinger i Android Developer Options, der kan få telefonen til at føles hurtigere"
description: "Which Android Developer Options can make a phone feel faster, which ones are risky, and what to leave alone."
listSummary: "Which Android Developer Options can make a phone feel faster, which ones are risky, and what to leave alone."
hub: "performance"
sourceNumber: 69
order: 6
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
Developer Options er ikke en hemmelig turbotilstand. Det meste af menuen er lavet til apptest, fejlfinding og visuel diagnosticering. Nogle få indstillinger kan få en Android-telefon til at føles hurtigere. Flere gør intet nyttigt ved almindelig brug. Enkelte kan gøre telefonen dårligere.

Den nyttige del er lille, og det er gode nyheder. Du behøver ikke ændre tyve forskellige indstillinger. For de fleste er den bedste opsætning animationsskalaer på 0.5x, måske frysning af cachelagrede apps, hvis telefonen viser muligheden, og alt andet urørt.

## Sådan aktiverer du Developer Options

Åbn **Settings > About phone**, og tryk syv gange på **Build Number**. Android viser en nedtælling og bekræfter derefter, at Developer Options er aktiveret.

Den præcise sti afhænger af telefonen:

- Google Pixel: **Settings > About phone > Build number**
- Samsung Galaxy: **Settings > About phone > Software information > Build number**
- OnePlus: **Settings > About device > Version > Build number** på nogle nyere OxygenOS-versioner eller **Settings > About phone > Build number** på ældre versioner
- Xiaomi, Redmi og POCO: **Settings > About phone > OS version** eller **MIUI version**, afhængigt af softwareversionen

Find derefter **Developer Options** under **Settings > System**, **Settings > Additional settings** eller på hovedlisten i Settings.

Der sker ikke noget, bare fordi menuen er synlig. Telefonen bliver ikke rootet, garantien bortfalder ikke, og apps får ikke pludselig flere tilladelser. Indstillingerne i menuen har først betydning, når du ændrer dem.

## Begynd med animationsskalaerne

Det er den ene ændring, jeg ville anbefale uden større tøven.

Android bruger animationer, når du åbner apps, går tilbage til startskærmen, skifter mellem skærme, åbner menuer og bevæger dig mellem opgaver. De får systemet til at virke flydende, men føjer også en lille forsinkelse til hver handling. På en hurtig telefon lægger du knap mærke til det. På en ældre Galaxy A-model eller en billig Motorola med langsommere lager kan overgangene få hele telefonen til at føles et halvt skridt bagefter.

Rul ned til sektionen **Drawing** i Developer Options, og find:

- **Window animation scale**
- **Transition animation scale**
- **Animator duration scale**

Sæt alle tre til **0.5x**.

Det forkorter afspilningstiden for systemets animationer. Telefonen indlæser ikke apps hurtigere på hardwareniveau, men den næste skærm vises tidligere. Det er den mest ukomplicerede gratis forbedring, fordi den hverken sletter data, begrænser apps eller ændrer batteriets adfærd.

Det er hurtigere at slå animationer **Off**, men jeg ville ikke vælge det som det første. Nogle apps føles abrupte uden visuelle overgange, og enkelte skærme kan se ud, som om de bare springer frem i stedet for at bevæge sig naturligt. Prøv først 0.5x. Hvis du stadig foretrækker øjeblikkelige skift, kan du derefter teste Off.

## Brug kun begrænsning af baggrundsprocesser på telefoner med lidt RAM

**Background process limit** styrer, hvor mange baggrundsprocesser Android tillader, før systemet begynder at fjerne dem mere aggressivt. Standardindstillingen er **Standard limit**, hvor Android selv håndterer hukommelsen.

På en telefon med 8 GB RAM eller mere bør du lade den være. Android er som regel bedre til at styre apps i baggrunden, end du er, og manuelle begrænsninger kan gøre multitasking dårligere.

På en telefon med 4 GB RAM kan indstillingen nogle gange gøre den aktive app mere stabil. Prøv først **At most 4 processes**. Hvis telefonen er en meget billig model og alligevel genindlæser hele tiden, kan **At most 2 processes** være værd at teste i en dag.

Der er en pris. Apps bliver genindlæst oftere, når du vender tilbage til dem. Musik, træningsregistrering, beskeder, VPN-tjenester, adgangskodeadministratorer og smart home-apps kan opføre sig dårligt, hvis de bliver skubbet ud for aggressivt. Hvis notifikationer kommer for sent, eller apps stopper med at udføre det baggrundsarbejde, du faktisk har brug for, skal du gå tilbage til **Standard limit**.

Det er ikke en ydelsesopgradering, du bare indstiller og glemmer. Det er et fejlfindingsværktøj til telefoner, der mangler RAM.

## Frysning af cachelagrede apps er nyttig, men ikke altid synlig

Nogle telefoner viser en indstilling med navnet **Suspend execution for cached apps** eller noget tilsvarende. Navnet lyder teknisk, men idéen er enkel: Hvis en app er cachelagret i baggrunden, kan Android beholde den i RAM og samtidig standse dens CPU-arbejde.

Det kan mindske CPU-forbrug og batteridræn i baggrunden uden at tvinge appen til en fuld koldstart, hver gang du vender tilbage. Android har understøttet frysning af cachelagrede apps siden Android 11, og Android 14 gjorde adfærden mere konsekvent. På mange nyere telefoner styrer producenten allerede funktionen bag kulisserne, så kontakten i Developer Options kan mangle, være låst eller være overflødig.

Hvis telefonen viser indstillingen, kan du teste den. Hvis intet går i stykker, kan du lade den være slået til. Hvis en træningsapp, musikapp, VPN-tjeneste eller beskedapp begynder at opføre sig mærkeligt, skal du slå den fra igen eller undtage den pågældende app i batteriindstillingerne.

Lad være med at lede desperat efter indstillingen, hvis den ikke findes. Det betyder ikke, at der er noget galt med telefonen.

## Høj opdateringshastighed føles flydende, ikke hurtigere

Nogle telefoner har **Force peak refresh rate** i Developer Options. Den holder en skærm på 90 Hz, 120 Hz eller 144 Hz ved den højeste opdateringshastighed oftere i stedet for at falde til 60 Hz, når systemet vil spare strøm.

Det kan få rulning og bevægelser til at føles glattere. Det får ikke apps til at indlæse hurtigere, forbedrer ikke signalstyrken og løser ikke hakken, der skyldes for lidt lagerplads. På mange telefoner bruger det også mere batteri, især på skærme uden LTPO, som ikke kan sænke hastigheden effektivt.

Brug det, hvis en flydende oplevelse betyder mere for dig end batteritid. Spring over, hvis dit største problem er langsom appstart eller batteridræn efter opdateringer.

## Tvungen mørk tilstand er mest et spørgsmål om smag

**Override force-dark** forsøger at give apps et mørkt tema, selv om de ikke understøtter det ordentligt. På OLED-telefoner kan mørke brugerflader bruge mindre strøm, når store dele af skærmen er sorte. Ydelsesforskellen er ikke pointen.

Problemet er kompatibilitet. Nogle apps ender med tekst med for lav kontrast, mærkelige baggrunde eller ødelagte ikoner. Hvis du kan lide mørk tilstand, kan du prøve den. Hvis en app ser forkert ud, skal du slå funktionen fra. Der er ingen grund til at behandle den som en hastighedsindstilling.

## Loggerbufferens størrelse er ikke en magisk løsning

Du kan støde på råd om at sætte **Logger buffer sizes** til **64K**. Jeg ville ikke lægge meget vægt på det.

Loggerbuffere gemmer systemlogfiler til fejlfinding. Mindre buffere kan bruge en smule mindre hukommelse, men forskellen i den virkelige verden er som regel for lille til at mærkes på moderne telefoner. På en meget gammel telefon eller en model med ekstremt lidt hukommelse kan du teste en mindre værdi, genstarte og se, om noget ændrer sig. Forvent bare ikke ret meget.

Hvis du på et tidspunkt skal indsamle logfiler til en fejlrapport, bør du bruge en større buffer igen. Små buffere overskriver hurtigt loghistorikken.

## Indstillinger, jeg ville lade være i fred

**Don't keep activities** lyder, som om den sparer hukommelse, men gør som regel telefonen mere besværlig. Den lukker hver aktivitet, så snart du forlader den, og apps skal derfor genopbygge skærme hele tiden. Det koster både tid og batteri.

**Force 4x MSAA** kan forbedre kantudjævning i visse OpenGL ES-spil, men øger belastningen på GPU'en og batteriforbruget. Det er ikke en generel ydelsesindstilling.

**Disable HW overlays** er beregnet til fejlfinding af grafik. Den kan øge mængden af beregningsarbejde og bør ikke bruges som en daglig justering.

**Show layout bounds**, **Show surface updates**, **Profile GPU rendering** og **Pointer location** er visuelle fejlfindingsværktøjer. De skaber rod og kan tilføje belastning.

**USB debugging** bør være slået fra, medmindre du aktivt bruger ADB sammen med en computer, du har tillid til. Funktionen er nyttig for udviklere og ved fejlfinding, men gør ikke telefonen hurtigere.

## Den praktiske opsætning

Gør dette på de fleste telefoner:

- Sæt alle tre animationsskalaer til **0.5x**.
- Lad **Background process limit** stå på **Standard limit**, medmindre telefonen har 4 GB RAM eller mindre, og multitasking allerede fungerer dårligt.
- Brug kun **Suspend execution for cached apps**, hvis telefonen tilbyder funktionen, og dine vigtige apps fortsat virker normalt.
- Lad indstillinger for logning, GPU, overlays og lukning af aktiviteter være i fred.

Det er hele tricket. Developer Options kan hjælpe, men de største forbedringer kommer stadig fra kedelig vedligeholdelse: nok ledig lagerplads, opdaterede apps, færre unødvendige baggrundstjenester og et batteri, der ikke er slidt op.
