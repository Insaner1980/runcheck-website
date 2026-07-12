---
title: "Sådan fungerer litium-ion-batterier i telefoner, og derfor nedbrydes de"
description: "Mange batteriråd på nettet får litium-ion til at lyde skrøbeligt, som om én opladning natten over ødelægger telefonen. Det passer ikke. Telefonbatterier er mere robuste end det, men de er også kemiske komponenter, og kemiske komponenter bliver slidt."
listSummary: "batteriteknologi, videnskab og guide"
hub: "battery"
sourceNumber: 19
order: 9
subgroup: "Health"
tags: ["batteriteknologi","videnskab","guide","hardware"]
locale: "da"
draft: false
---
Når du forstår det grundlæggende, bliver de almindelige råd mindre mystiske. Reglen om 20-80 %, advarslen mod varme og grunden til, at gamle telefoner dør tidligt, udspringer alle af det samme: Litiumioner bevæger sig gennem en celle, der langsomt ændrer sig, hver gang du bruger den.

## Den grundlæggende celle

Et litium-ion-batteri i en telefon har fire hoveddele: en anode, en katode, en elektrolyt og en separator. I traditionelle telefonceller er anoden som regel af grafit. Katoden er et litiummetaloxid, hvor den præcise kemi afhænger af producenten. Elektrolytten lader litiumioner bevæge sig, mens separatoren forhindrer de to elektroder i at røre hinanden.

Under afladning bevæger litiumionerne sig fra anoden til katoden gennem elektrolytten. Elektronerne løber i stedet gennem telefonens kredsløb, og denne strøm driver skærmen, SoC'en, radioerne, kameraerne, lageret og alt andet.

Under opladning går processen den modsatte vej. Opladeren presser litiumionerne tilbage i anoden, så cellen kan lagre energi igen.

Det er hele grundideen. Den virker. Indtil materialerne ikke længere opfører sig helt som nye.

## Hvorfor procenttallet kun er et estimat

Telefonen måler ikke batteriprocenten som niveauet i en brændstoftank. Der sidder ikke en lille målepind inde i cellen.

Android estimerer den resterende opladning ud fra spænding, strømstyrke, temperatur og en batterimodel. Nogle enheder bruger også coulombtælling, som følger den strøm, der løber ind og ud over tid. Estimatet er godt, når cellen er ny og forudsigelig. Det bliver vanskeligere, når batteriet ældes.

En fuldt opladet telefoncelle ligger ofte tæt på 4,2 V, selv om det præcise tal afhænger af kemien og opladningsdesignet. Når batteriet nærmer sig tomt, lukker telefonen ned, før cellen når en skadelig lav spænding. Det viste procenttal omsætter cellens spændingskurve til et tal, der er let at forstå.

Problemet er, at spændingskurven ikke er en ret linje. Den er forholdsvis flad gennem midten og stejlere nær fuld og tom. Derfor kan 50 % føles stabilt, mens de sidste 15 % falder fra hinanden hurtigt på et ældre batteri.

## Hvorfor batterier bliver slidt

Batterialdring er ikke én enkelt fejl. Det er en ophobning af små kemiske og mekaniske forandringer.

### Vækst i SEI-laget

Under de første opladningscyklusser dannes et lag på anoden, som kaldes solid electrolyte interphase, eller SEI. Laget er nødvendigt. Det lader litiumioner passere, samtidig med at det begrænser yderligere reaktioner mellem elektrolytten og anoden.

Problemet er, at SEI-laget bliver ved med at ændre sig. Ved hver opladnings- og afladningscyklus udvider og trækker anoden sig en smule sammen. Der opstår bittesmå revner. Elektrolytten reagerer på de nye overflader, og SEI-laget bliver tykkere. Aktivt litium fanges i laget i stedet for at bevæge sig mellem elektroderne.

Kapaciteten falder, den interne modstand stiger, og cellen udvikler mere varme under belastning.

### Litiumudfældning

Litiumudfældning, også kaldet lithium plating, opstår, når litium aflejres som metal på anodens overflade i stedet for at glide ordentligt ind i anodens struktur. Det sker lettere ved hurtig opladning, når batteriet er koldt, eller når cellen allerede er næsten fuld.

Det er en af grundene til, at telefoner oplader hurtigt ved lave procenter og sænker farten nær toppen. Det er en dårlig handel at presse en kold eller næsten fuld celle hårdt.

I alvorlige tilfælde kan det udfældede litium vokse til dendritter, små metalliske strukturer, som kan beskadige separatoren. Telefonens batteristyring er udviklet til at undgå dette, men den underliggende risiko er reel nok til, at producenterne tager den alvorligt.

### Aldring af katode og elektrolyt

Katoden ældes også. Metalioner kan opløses fra katoden i elektrolytten, og selve elektrolytten nedbrydes hurtigere ved høj temperatur og høj spænding. Reaktionerne reducerer kapaciteten og øger modstanden.

Når et batteri svulmer op, er der dannet gas inde i den forseglede pose. Det er ikke længere et kalibreringsproblem eller et indstillingsproblem. Stop med at bruge telefonen, og få batteriet udskiftet.

## Hvad der fremskynder aldringen

Varme er den store faktor. Varme batterier ældes hurtigere, og en telefon kan blive varm af opladning, spil, navigation, videooptagelse, dårligt signal eller sollys. Det værste mønster er varme kombineret med et højt opladningsniveau, for eksempel en fuldt opladet telefon på instrumentbrættet eller under en pude, mens den oplader.

Høj spænding betyder også noget. En celle, der holdes tæt på 100 %, er mere belastet end en, der ligger omkring midten af sit opladningsområde. Derfor hjælper opladningsgrænser. De reducerer den tid, batteriet tilbringer øverst på spændingskurven.

Dyb afladning er den anden side af samme problem. Telefoner beskytter cellen ved at lukke ned før en virkelig farlig lav spænding, men gentagen afladning til nul er stadig hårdere ved batteriet end små cyklusser.

Det er her, de praktiske råd kommer fra. Hold batteriet køligt. Brug 20-80 % som en vane, når det passer ind i din dag. Gå ikke i panik over en lejlighedsvis fuld opladning. Undgå derimod at gøre 0-100 % til din normale cyklus.

## Hvorfor grafit har været så svært at slå

Grafit har været brugt så længe i telefonbatterier, fordi det er kedeligt på den bedst mulige måde. Det er stabilt, billigt og udvider sig langt mindre end silicium under opladning.

Begrænsningen er kapaciteten. Grafit lagrer cirka 372 mAh pr. gram. Silicium kan lagre cirka 4.200 mAh pr. gram, og derfor er silicon-carbon-batterier blevet så interessante i Android-telefoner. Problemet er, at silicium udvider sig kraftigt, når det optager litium. Uden omhyggelig konstruktion revner materialet og ødelægger sig selv.

Det er det kompromis, batteriingeniører bliver ved med at kæmpe med: mere energi på den samme plads uden at forvandle anoden til støv efter nogle få dusin cyklusser.

## Hvad det betyder for din telefon

Et godt styret batteri kan være brugbart i flere år. Et batteri, der bliver behandlet dårligt, kan føles gammelt efter halvandet år. De præcise tal varierer, fordi telefonens størrelse, køling, opladningshastighed, software, klima og dine vaner alle spiller en rolle.

Det nyttige er, at du kan forbinde symptomer med årsager. Hvis batteritilstanden stadig er høj, men telefonen aflades om natten, skal du lede efter baggrundsapps, wake locks eller signalproblemer. Hvis tilstanden er under 80 %, og telefonen lukker ned ved 20 %, er selve cellen sandsynligvis hovedproblemet. Hvis telefonen bliver varm under hver opladning, skal du løse det, før du bekymrer dig om små forskelle i procenttal.

Det er også derfor, formuleringer om Android-versioner kan være misvisende. Android 17 er den aktuelle version på understøttede Pixel-modeller, men de nyttige batteridiagnostiske data afhænger stadig af, hvad enheden rapporterer. Antal cyklusser blev offentligt tilgængeligt for apps i Android 14, når hardwaren stiller tallet til rådighed. En procent for batteritilstand er stadig mere afhængig af producenten.

runcheck er bygget op omkring den form for diagnose. Batteritilstanden er nyttig alene, men bliver mere nyttig, når du kan sammenligne den med temperatur, opladningsadfærd og netværksforhold.

Nedbrydning af litium-ion-batterier kan ikke undgås. Dårlige vaner får den bare til at komme tidligere.
