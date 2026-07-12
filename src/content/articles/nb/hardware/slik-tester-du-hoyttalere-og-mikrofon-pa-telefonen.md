---
title: "Slik tester du høyttalere og mikrofon på telefonen"
description: "De fleste lydproblemer på telefoner skyldes ikke en ødelagt høyttaler eller mikrofon. Ofte er årsaken lo, Bluetooth-ruting, apptillatelser, et dårlig deksel, vann i en åpning eller en nettverkssamtale som høres ut som en maskinvarefeil."
listSummary: "De fleste lydproblemer på telefoner skyldes ikke en ødelagt høyttaler eller mikrofon."
hub: "hardware"
sourceNumber: 107
order: 4
tags: ["maskinvare","testing","diagnostikk","android","guide"]
locale: "nb"
draft: false
---
Det gjør ikke problemet mindre irriterende. Hvis andre ikke hører deg, eller høyttaleren skurrer allerede ved halv lydstyrke, må du fortsatt finne ut hvilken del som svikter.

## Finn ut hvilken lydkomponent du tester

De fleste Android-telefoner har mer enn én høyttaler og mer enn én mikrofon.

Samtalehøyttaleren sitter nær toppen av telefonen og brukes ved vanlige samtaler. Hovedhøyttaleren sitter vanligvis nederst og brukes til håndfri samtale, medier, alarmer og ringetoner. Mange telefoner bruker begge til stereoavspilling.

Hovedmikrofonen sitter ofte nær USB-C-porten. En ekstra mikrofon nær toppen hjelper med støydemping under samtaler. Noen telefoner har også en tredje mikrofon til videoopptak eller retningsbestemt lyd ved zooming.

Delene kan svikte uavhengig av hverandre. Telefonen kan høres fin ut på høyttaler, men elendig gjennom samtalehøyttaleren. Den kan ta opp talenotater tydelig, men gi dårlig samtalelyd fordi samtalebehandlingen, nettverkskvaliteten eller den sekundære mikrofonen er involvert.

## Test hovedhøyttaleren

Åpne lydinnstillingene på telefonen, som ofte ligger under Settings > Sound and vibration, og spill av en ringetone. Skru opp medievolumet mens lyd faktisk spilles av.

Lytt etter rasling, summing, knitring eller plutselige fall i volum. Spill deretter musikk eller en video du kjenner godt. En enkel ringetone avslører lite bassforvrengning eller skarp diskant.

Hvis telefonen har stereohøyttalere, dekker du én høyttaler om gangen med fingeren. Målet er ikke perfekt balanse. Siden med samtalehøyttaleren er ofte svakere enn høyttaleren nederst. Du ser etter en side som er stille, tydelig forvrengt eller mye svakere enn vanlig.

Ikke test bare med maksimal lydstyrke. Noen skadde høyttalere forvrenger ved middels volum, mens en blokkert åpning kan høres grei ut på høyt volum og dempet ved vanlig lytting.

## Test samtalehøyttaleren

Ring en vanlig telefonsamtale og hold telefonen mot øret. Skru opp samtalevolumet mens samtalen pågår, ikke før. Android har separate volumnivåer for medier, ringetone og samtaler.

Lytt etter lavt volum, knitring, lyd som faller ut, eller en lyd som endrer seg når du trykker forsiktig nær toppen av telefonen. Det siste kan tyde på en løs forbindelse til samtalehøyttaleren etter et fall.

Hvis du ikke vil forstyrre noen, kan du ringe telefonsvareren eller en annen linje du selv kontrollerer. Poenget er at telefonen bruker samtalehøyttaleren, ikke høyttaleren nederst.

## Test mikrofonen med et opptak

Åpne telefonens innebygde opptaksapp, eller en annen opptaksapp du stoler på. Ta opp 10-15 sekunder med vanlig stemmevolum fra omtrent en armlengdes avstand.

Spill av opptaket. Stemmen skal være klar, stabil og høy nok uten sus, summing eller en dempet lyd som om du snakker gjennom et teppe.

Snu deretter telefonen og ta opp et nytt klipp mens du snakker mot den øvre kanten. Dette isolerer ikke alltid den sekundære mikrofonen, fordi opptaksapper velger mikrofon på forskjellige måter. Det kan likevel avsløre blokkerte åpninger eller store forskjeller.

Hvis opptak høres tydelige ut, men andre sier at stemmen din blir robotaktig i samtaler, bør du ikke bestille mikrofonreparasjon med én gang. Robotaktig samtalelyd skyldes oftest nettverksforsinkelse, pakketap, problemer med Wi-Fi-anrop eller behandling hos mobiloperatøren.

## Test mikrofonen i en samtale

Ring noen som gir deg ærlige svar. Still tre konkrete spørsmål:

- Høres stemmen min klar eller dempet ut?
- Hører du statisk støy, summing eller vindaktig lyd?
- Forsvinner stemmen min innimellom?

Bytt til høyttalerfunksjon og spør på nytt. Håndfri modus bruker mikrofoner og støydemping på en annen måte. Hvis vanlige samtaler fungerer dårlig, men høyttalerfunksjonen høres bra ut, kan problemet ligge i signalveien til hovedmikrofonen, vanlig samtalemodus eller støydempingen.

Test både med Wi-Fi-anrop og mobilnett hvis begge deler er tilgjengelige. Hvis samtalekvaliteten endrer seg mye mellom dem mens taleopptak fortsatt er rene, er mikrofonen sannsynligvis ikke hovedproblemet.

## Bruk innebygd diagnostikk

Samsung Galaxy-telefoner har to gode alternativer. Det tryggeste er Samsung Members: Åpne appen, trykk Diagnostics på Discover-fanen og velg Phone diagnostics. Kjør testene Speaker og Mic, eller velg Test all. Mange Galaxy-telefoner støtter også `*#0*#`, som blant annet har tester for Speaker og Receiver.

Google Pixel-telefoner kan åpne Pixel Diagnostics ved å taste `*#*#7287#*#*` mens de er koblet til internett, på enheter som støtter det. Dette er Googles nåværende diagnosevei, ikke de eldre signalrelaterte kodene som fortsatt kopieres rundt på nettet.

Motorola-telefoner har vanligvis Device Help. Gå til Device Help > Device diagnosis > Hardware test > Microphone, eller velg den relevante høyttalertesten.

Xiaomi-, Redmi- og POCO-telefoner bruker ofte CIT-menyen via `*#*#6484#*#*`, med separate tester for høyttaler, samtalehøyttaler og mikrofon.

Hvis produsentens test består, men én app fortsatt ikke får tilgang til mikrofonen, bør du kontrollere apptillatelsen før du gjør noe annet.

## Utelukk vanlige årsaker som ikke er maskinvare

Begynn med det fysiske. Ta av dekselet og test igjen. Enkelte deksler treffer ikke mikrofonhullene riktig, særlig billige robuste deksler og universaldeksler.

Rengjør åpningene med en tørr, myk børste. Børst på tvers av gitteret i stedet for å stikke noe inn. Luft med lavt trykk kan hjelpe, men ikke blås trykkluft rett inn i høyttaler- eller mikrofonhullene.

Koble fra Bluetooth. Telefoner sender gjerne lyden til ørepropper, klokker, biler og høyttalere du hadde glemt at var tilkoblet. Slå Bluetooth helt av under én test.

Kontroller mikrofontillatelsen i appinnstillingene. Sjekk også mikrofonbryteren i Hurtiginnstillinger hvis telefonen har en slik personvernkontroll. Hvis flisen `Sensors off` er aktivert i Utvikleralternativer, slår du den av, fordi den kan blokkere mikrofonen og andre sensorer.

Kontroller Ikke forstyrr og volumet, men pass på at du justerer riktig volum. Under en samtale styrer volumknappene samtalevolumet. Under medieavspilling styrer de medievolumet.

## Hva med vann?

Vann i høyttalerkammeret gjør ofte lyden dempet, svak eller summende. La telefonen tørke på et sted med god lufting. Ikke bruk varme, ikke legg den i ris, og ikke stikk skarpe verktøy inn i gitteret.

Apper som spiller lave frekvenser kan noen ganger bidra til å flytte vann ut av en høyttaler, men bruk dem forsiktig og med moderat volum. De er ingen mirakelkur, og de reparerer verken korrosjon eller en skadet mikrofon.

Hvis telefonen har vært utsatt for saltvann, bassengvann eller sukkerholdig væske, er det ikke nødvendigvis nok å la den tørke. Slike væsker etterlater rester.

## Når reparasjon er fornuftig

Reparasjon er verdt å vurdere når problemet oppstår i flere apper, fortsetter uten deksel og med Bluetooth avslått, gir feil i produsentens diagnostikk og overlever en omstart eller test i sikker modus.

Det er ofte enklere å bytte en høyttaler enn en skjerm. Mikrofonreparasjon kan være mer komplisert fordi hovedmikrofonen kan sitte på ladeportens flexkabel eller et eget bunnkort. Kostnaden avhenger mye av modellen, tettingen mot vann, tilgang på deler og om telefonen har vært åpnet før.

Hvis telefonen kan dekkes av garanti eller reklamasjon, bør du kontakte selgeren eller produsenten før du bruker et uavhengig verksted. Væske- og støtskader kan påvirke dekningen, men vanlig svikt i lydmaskinvaren er verdt å melde inn.

## Korte svar

### Hvorfor fungerer høyttalerfunksjonen når vanlige samtaler høres elendige ut?

Hovedhøyttaleren og samtalehøyttaleren er separate deler. Vanlig samtalemodus bruker også annen mikrofonbehandling. Test samtalehøyttaleren og samtalemikrofonen hver for seg.

### Kan en programvareoppdatering reparere lydproblemer?

Ja, hvis feilen gjelder lydruting, driveroppførsel, tillatelser eller samtalebehandling. Nei, hvis høyttalermembranen er revnet, mikrofonåpningen er korrodert eller en kontakt er løs.

### Hvorfor høres jeg dempet ut bare i én app?

Det peker vanligvis mot apptillatelser, appens støydemping, Bluetooth-ruting eller at appen velger feil mikrofon. Test med den innebygde opptaksappen og en vanlig telefonsamtale.

### Hvordan tester jeg mikrofonen for støydemping?

Ring fra et sted med moderat bakgrunnsstøy, og sammenlign vanlig samtalemodus med høyttalerfunksjon. Hvis den andre personen hører langt mer bakgrunnsstøy enn forventet, kan den sekundære mikrofonen eller signalveien for støydemping være involvert. Produsentens diagnostikk kan bekrefte mer enn én uformell samtale.
