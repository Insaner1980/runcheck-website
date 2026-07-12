---
title: "Sådan fungerer NAND-flashlager i telefoner, og derfor bliver det langsommere"
description: "Metabeskrivelse: Telefonens lager bruger NAND-flashhukommelse. Her kan du se, hvorfor næsten fuldt lager sænker ydeevnen, hvad TRIM og garbage collection gør, og hvordan du holder telefonens storage I/O i god form."
listSummary: "Metabeskrivelse: Telefonens lager bruger NAND-flashhukommelse."
hub: "storage"
sourceNumber: 89
order: 11
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
Din telefon kan have en hurtig SoC, masser af RAM og stadig føles træg, når lagerpladsen næsten er fuld. Apps holder en lille pause, før de åbner. Kameraet bruger et ekstra øjeblik på at gemme et billede. Opdateringer tager længere tid, end de burde.

Det er ikke altid processorens skyld. Nogle gange er lageret flaskehalsen.

## Hvad NAND-flash laver

Telefoner gemmer apps, billeder, beskeder, cache og systemdata på NAND-flashchips, der er loddet fast på bundkortet. En telefon, der sælges med 128 GB, giver dig aldrig alle 128 GB til dine egne filer, fordi Android, systempartitioner, gendannelsesdata, reserveret plads og filsystemets overhead tager deres del først.

NAND gemmer data som elektrisk ladning i bittesmå celler. Cellerne er ordnet i sider, og siderne er samlet i større sletteblokke. Det besværlige er dette: NAND kan skrive til tomme sider, men det kan ikke overskrive en brugt side direkte.

Når data skal opdateres, skriver controlleren den nye version et andet sted, markerer den gamle side som ugyldig og opdaterer sin kortlægningstabel. Senere samler den under oprydningen de sider i en blok, der stadig er gyldige, flytter dem om nødvendigt og sletter den gamle blok, så den kan bruges igen.

Den proces kaldes garbage collection. Den er normal. Den er også en af grundene til, at en næsten fuld telefon føles langsommere end den samme telefon med god ledig plads.

## Derfor føles fuldt lager langsomt

Når lageret har mange tomme blokke, er det let at skrive data. Controlleren kan vælge et rent område og fortsætte.

Når lageret er tæt på fuldt, har controlleren færre rene blokke at arbejde med. Den skal bruge mere arbejde på at finde plads, flytte gyldige data, slette blokke og først derefter skrive de nye data. Det ekstra interne arbejde kaldes write amplification og kan vise sig som små stop i almindelig brug.

Du kan mærke det, når du installerer apps, gemmer videoer, downloader opdateringer eller skifter mellem apps med store cacher. En telefon, hvor 95 % af lageret er brugt, kan føles meget ældre, end den er.

Den praktiske tommelfingerregel er enkel: Prøv at holde mindst 15-20 % af den interne lagerplads fri. Det er ikke et magisk tal, og forskellige lagercontrollere opfører sig forskelligt, men den ledige plads giver Android og controlleren arbejdsrum.

## TRIM, garbage collection og inaktiv tid

Når du sletter en fil, bliver alle de NAND-celler, der indeholdt filen, ikke straks visket rene. Android markerer filen som slettet i filsystemet. Controlleren skal stadig vide, hvilke underliggende blokke der kan ryddes.

TRIM er det signal, der hjælper med det. På Android håndteres vedligeholdelsen gennem `fstrim` og lagerarbejde, der kører, når enheden er inaktiv. Det fortæller lagerlaget, hvilke blokke der ikke længere er nødvendige, så garbage collection senere kan frigøre dem.

Derfor kan det hjælpe at lade telefonen ligge ubrugt og tilsluttet en oplader efter en stor oprydning. Du sletter filer, Android får mulighed for at køre vedligeholdelse, og controlleren får tid til at rydde op. Forvent ikke et mirakel efter fem minutter. Arbejdet foregår i baggrunden.

Nej, du skal ikke defragmentere telefonens lager. Defragmentering var beregnet til roterende harddiske. På NAND-flash skaber det unødvendige skrivninger og løser ikke det egentlige problem.

## SLC, MLC, TLC og QLC forklaret enkelt

NAND-celler kan gemme forskellige mængder data pr. celle.

SLC gemmer én bit i hver celle. Det er hurtigt og holdbart, men for dyrt til almindeligt telefonlager.

MLC gemmer to bit. Det var mere udbredt i ældre lager til topmodeller, men er i vidt omfang blevet erstattet af tættere NAND.

TLC gemmer tre bit i samme celle. Det er almindeligt i moderne forbrugerlager, fordi det giver en brugbar balance mellem pris, kapacitet og hastighed.

QLC gemmer fire bit. Det er tættere og billigere pr. gigabyte, men har lavere udholdenhed. Telefonproducenter oplyser sjældent den præcise NAND-celletype, så du kan ikke udlede indholdet alene ud fra lagerkapaciteten.

Når der pakkes flere data i hver celle, kræver det mere præcis aflæsning af spændingsniveauer og mere fejlkorrektion. Det er kompromiset. Moderne controllere skjuler det meste af besværet med wear leveling, ECC, reserveområder og cache.

## UFS eller eMMC betyder mere, end mange tror

Lagergrænsefladen betyder lige så meget som selve NAND-chippen.

Mange ældre og billige Android-telefoner bruger eMMC. Det er enkelt og billigt, men håndterer ikke tung multitasking lige så godt. Samsungs eMMC 5.1-komponenter blev for eksempel lanceret med oplyste sekventielle læsehastigheder på op til 250 MB/s og sekventielle skrivehastigheder på op til 125 MB/s.

UFS er den nyere standard for telefonlager. Den understøtter kommandokøer og fuld duplex, så læsning og skrivning kan håndteres mere effektivt under belastning. UFS 3.1-enheder oplyser ofte sekventielle læsehastigheder omkring 2.100 MB/s. UFS 4.0 fordoblede det markedsførte tal til 4.200 MB/s ved sekventiel læsning i Samsungs første annoncerede UFS 4.0-lager.

Det er bedste fald ved sekventielle overførsler, ikke et løfte om, at alle apps åbner dobbelt så hurtigt. Forskellen er alligevel reel. En billig telefon med eMMC kan føles langsommere under opdateringer, appinstallationer og hurtige billedserier, selv om processoren ser fornuftig ud på papiret.

## Sådan viser slitage på lageret sig

NAND slides, når blokke gennemgår programmerings- og slettecyklusser. Controlleren fordeler skrivningerne, så ét område ikke dør tidligt. Det kaldes wear leveling.

Ved almindelig telefonbrug tager det som regel flere år, før slitage på lageret bliver vigtig. Folk fylder lageret, installerer opdateringer, optager video og rydder cache længe før NAND-udholdenhed bliver hovedårsagen til, at en telefon føles dårlig. Tunge skrivebelastninger er anderledes. En enhed, der bruges til konstant logning, videooptagelse eller test, kan slide lageret hurtigere.

Android giver ikke de fleste brugere en enkel procentværdi for "lagerets tilstand". Nogle producenters serviceværktøjer viser flere oplysninger, men det er ikke ensartet. Det synlige symptom er mere uklart: langsomme appinstallationer, lange gemmetider, forsinkelse ved skrivning af filer og dårlig ydeevne, selv efter at du har frigjort plads og fjernet åbenlys baggrundsbelastning.

## Sådan holder du telefonens lager i god form

Behold ledig plads. Det er det kedelige svar, og det er stadig det bedste.

Undgå lageroprydningsapps, der lover magiske hastighedsforbedringer. Mange af dem sletter blot cache, som Android senere bygger op igen. Endnu værre er det, at nogle bliver ved med at køre i baggrunden og skaber mere støj, end de fjerner.

Slet gamle downloads, fjern apps, du ikke bruger, flyt store videoer væk fra telefonen, og lad enheden ligge ubrugt på en oplader efter en stor oprydning. Hvis telefonen understøtter et SD-kort, så brug det til medier, ikke til apps, der kræver hurtig storage I/O.

Apps som runcheck kan hjælpe ved at vise lagerpres over tid i stedet for at behandle lagerplads som ét enkelt øjebliksbillede. Udviklingen betyder noget, fordi en telefon, der langsomt går fra 70 % til 94 % fyldt, fortæller dig præcis, hvorfor den begynder at føles langsommere.
