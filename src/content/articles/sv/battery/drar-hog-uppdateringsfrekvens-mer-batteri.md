---
title: "Drar hög uppdateringsfrekvens mer batteri?"
description: "Metabeskrivning: En skärm på 120 Hz kan använda mer batteri än en på 60 Hz, särskilt om uppdateringsfrekvensen är fast. Telefoner med adaptiv skärm minskar kostnaden genom att sänka frekvensen när snabb rörelse inte behövs."
listSummary: "batteri, myter och android"
hub: "battery"
sourceNumber: 30
order: 20
subgroup: "Drain"
tags: ["batteri","myter","android","testning","fakta"]
locale: "sv"
draft: false
---
Det vanliga rådet är att stänga av 120 Hz om batteritiden är viktig. Det är bara halva sanningen.

En hög uppdateringsfrekvens kan dra mer batteri än 60 Hz, men alla telefoner med 120 Hz betalar inte samma pris. På en äldre eller billigare telefon med fast hög uppdateringsfrekvens kan 120 Hz märkbart förkorta batteritiden. På en nyare telefon med variabel uppdateringsfrekvens är kostnaden ofta betydligt mindre, eftersom skärmen inte ligger på 120 Hz hela dagen. Den går upp vid scrollning och animationer och sjunker igen när bilden står stilla.

Den skillnaden betyder mer än siffran i specifikationen.

## Vad 120 Hz faktiskt förändrar

En skärm på 60 Hz uppdateras 60 gånger per sekund. En skärm på 120 Hz uppdateras 120 gånger per sekund. Dubbelt så många uppdateringar innebär mer arbete för skärmkedjan och, när appen verkligen renderar med hög bildfrekvens, även mer arbete för GPU:n.

Du märker fördelen när du scrollar, sveper mellan skärmar, öppnar menyer och spelar spel som stöder den högre frekvensen. Telefonen känns mer responsiv eftersom skärmen uppdateras oftare och rörelser ser mindre hackiga ut.

Nackdelen är enkel: skärmen och skärmstyrenheten behöver mer ström. I ett fast 120 Hz-läge visar batteritester av äldre telefoner med hög uppdateringsfrekvens ofta omkring 10 % kortare total batteritid, ibland mer beroende på ljusstyrka, paneltyp och belastning. Vid skärmtung användning räcker det för att märkas.

## Variabel uppdateringsfrekvens är det viktiga

Moderna Android-telefoner kör inte alla 120 Hz på samma sätt.

Vissa paneler har fast frekvens. Du väljer 60 Hz eller 120 Hz, och telefonen ligger nära det valet så länge skärmen är på. De modellerna får den största batterikostnaden eftersom skärmen fortsätter uppdateras snabbt även när du läser en stillastående sida.

Bättre paneler varierar uppdateringsfrekvensen automatiskt. Många flaggskepp använder LTPO OLED, som kan gå långt under 60 Hz för statiskt innehåll och klättra tillbaka till 120 Hz när du rör skärmen. Vissa paneler kan gå ner till 1 Hz. Andra har ett smalare intervall, till exempel 10 Hz, 24 Hz, 30 Hz, 60 Hz och 120 Hz. Det exakta beteendet beror på skärmen, Android-versionen, appen och tillverkarens finjustering.

Den sista delen är rörig. En telefon kan marknadsföras med adaptiva 120 Hz men ändå bete sig olika i Chrome, YouTube, spel, startskärmen och Always On Display. Du behöver inte detaljstyra allt, men det förklarar varför en telefon med 120 Hz kan hålla längre än en annan.

## Fast 120 Hz är där batteriförlusten syns

Om telefonen saknar en bra adaptiv panel kostar 120 Hz mer.

Statiskt innehåll är det tydligaste slöseriet. Att läsa en artikel, titta på foton, kontrollera en karta eller låta ett recept ligga öppet kräver inte 120 uppdateringar per sekund. En panel med fast frekvens fortsätter ändå. Du får liten visuell nytta och betalar batterikostnaden hela tiden.

Därför kan telefoner i mellansegmentet med fast 120 Hz kännas oväntat törstiga jämfört med flaggskepp. Upplevelsen är mjuk, men panelen är inte tillräckligt smart för att dra ner lika aggressivt.

På en telefon som normalt ger 7 timmars skärmtid vid 60 Hz kan ett framtvingat 120 Hz-läge hela dagen kapa en märkbar del. Jag skulle inte lova ett exakt antal timmar eftersom skillnaderna mellan enheter är för stora, men en förlust på en timme eller mer är fullt rimlig på en panel med fast frekvens.

## Spel förändrar kalkylen

Spel är värsta tänkbara scenariot för batteriförbrukning vid 120 Hz.

Om ett spel körs i 120 fps uppdateras skärmen snabbt samtidigt som GPU:n ritar fler bildrutor. Det blir en dubbel belastning. Lägg till hög ljusstyrka, mobildata, Bluetooth-ljud och ett varmt rum, så blir batteridiagrammet snabbt fult.

Vissa spel är begränsade till 30 fps eller 60 fps även på en telefon med 120 Hz. Då spelar inställningen mindre roll. Telefonen kan fortfarande visa spelet på en panel med högre uppdateringsfrekvens, men GPU:n producerar inte 120 unika bildrutor varje sekund.

För långa spelsessioner långt från en laddare är 60 Hz fortfarande det tråkiga men förnuftiga valet.

## Så ändrar du inställningen i Android

På Pixel finns inställningen vanligtvis under Inställningar > Visning och pekskärm > Smooth Display. Google listar fortfarande avstängning av Smooth Display som ett batterispartips för Pixel 4 och senare, inklusive Fold-modeller.

På Samsung Galaxy finns valet vanligtvis under Inställningar > Skärm > Motion smoothness. Standard betyder 60 Hz. Adaptive tillåter upp till 120 Hz på modeller och i appar som stöder det. Samsungs ordval kan variera något mellan One UI-versioner och regioner.

På OnePlus, Xiaomi, Motorola, Nothing och andra Android-telefoner hittar du vanligtvis valet under skärminställningarna, med namn som Refresh rate, Screen refresh rate, Motion smoothness eller Smooth display.

Om du ser ett adaptivt alternativ bör du använda det till vardags. Om de enda valen är fast 60 Hz och fast 120 Hz väljer du 120 Hz när mjukheten är viktig och 60 Hz när batteritiden är viktigare.

## Bör du stänga av 120 Hz?

Stäng av det när du reser, har lite batteri kvar, spelar länge eller läser statiskt innehåll i flera timmar. Telefonen tar ingen skada av 60 Hz. Den känns bara mindre följsam när ögonen väl har vant sig vid 120 Hz.

För daglig användning på ett nyare flaggskepp med adaptiv uppdateringsfrekvens skulle jag låta 120 Hz vara på. Telefonen sänker redan frekvensen när den kan, och den mjukare scrollningen är en av få moderna telefonuppgraderingar som märks varje gång du använder enheten.

På en äldre telefon med hög uppdateringsfrekvens eller en budgetmodell med fast 120 Hz är det bättre att vara praktisk. Mjukhet är trevligt. Batteri kvar klockan 19 är trevligare.
