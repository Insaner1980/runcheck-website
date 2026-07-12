---
title: "Sådan tester du, om din telefonoplader er god"
description: "Metabeskrivelse: Lær at teste, om opladeren til din Android-telefon leverer den rigtige effekt, ved hjælp af apps, kabelskift, fysiske kontroller og USB-effektmålere."
listSummary: "opladning, batteri og android"
hub: "charging"
sourceNumber: 44
order: 8
tags: ["opladning","batteri","android","guide","hardware"]
locale: "da"
draft: false
---
En oplader kan passe i stikket og stadig dumpe selve opladningstesten. USB-C fortæller kun, at stikket passer. Det fortæller ikke, om adapteren, kablet og telefonen kan blive enige om hurtigopladning.

Android 17 ændrer ikke det grundlæggende problem. Der findes stadig ikke én fælles Android-skærm, der siger: "Denne oplader leverer 23,4 W lige nu." Du er nødt til at udlede det eller måle det ordentligt.

## Læs først den lille udgangstekst

Begynd med den kedelige del: Se på adapteren. Vend den om, og find linjen med udgangsværdier. Der kan stå noget i retning af 5 V/3 A, 9 V/2,22 A eller 20 V/3,25 A. Gang volt med ampere for at få watt. En profil på 9 V/2,22 A svarer til cirka 20 W. En profil på 20 V/3,25 A er 65 W.

En enkel USB-A-adapter viser måske kun 5 V/1 A eller 5 V/2 A. Det er 5 W eller 10 W, hvilket er langsomt for en moderne telefon. En USB-C PD-oplader viser som regel flere spændingsniveauer og en maksimal effekt, for eksempel 25 W, 45 W, 65 W eller mere.

Hvis opladeren ikke har nogen mærkning, bør du være mistænksom. Gode adaptere fra kendte producenter har deres udgangsværdier trykt et sted, selv om du måske skal bruge en lommelygte for at læse dem.

## Brug en app til en hurtig kontrol

Android giver adgang til batteristrøm og relaterede batteridata gennem systemets API'er, så apps kan estimere, hvad der når frem til batteriet. Ampere og AccuBattery er almindelige muligheder til en hurtig test.

Sæt opladeren til, åbn appen, og vent 20-30 sekunder på, at målingen falder til ro. Hold skærmens lysstyrke lav, luk krævende apps, og test med et batteriniveau mellem 20 % og 70 %. Telefoner sænker opladningen tæt på toppen, så en test ved 94 % kan få en god oplader til at se dårlig ud.

Vær forsigtig med tallet. Appmålinger viser nettostrømmen til batteriet, ikke den præcise effekt fra stikkontakten. Telefonen bruger samtidig strøm, opladningskredsløbet mister noget energi som varme, og nogle enheder rapporterer batteristrøm på en anden måde. På enkelte telefoner kan målingen være mærkeligt begrænset, forsinket eller ganske enkelt ikke særlig nyttig.

Brug appmålinger til sammenligning, ikke som facit. Hvis ét kabel viser 400 mA og et andet 2.400 mA med den samme adapter, har du lært noget. Hvis en app siger, at din oplader på 30 W kun leverer 18 W, betyder det ikke automatisk, at opladeren er dårlig.

## Skift kablet, før du giver adapteren skylden

Kabler kan svigte uden tydelige tegn. De overfører stadig strøm, så du går ud fra, at de er i orden, men telefonen falder tilbage til langsom opladning, fordi kablet ikke kan føre den forventede strøm eller forhandle den rigtige profil.

Test med et kabel, du ved fungerer. Kablet, der fulgte med telefonen, er et godt første valg. Et certificeret USB-C-kabel fra en pålidelig tilbehørsproducent er et andet. Brug ikke et tyndt, gammelt kabel fra en skuffe, og forvent, at det beviser noget.

Skader ved stikkene er almindelige. Hvis telefonen skifter mellem tilsluttet og afbrudt, når du bevæger kablet, eller stikket sidder løst i flere enheder, skal du udskifte kablet. Det er ikke værd at bruge endnu en time på fejlsøgning.

## Brug en USB-effektmåler, når du vil have rigtige tal

En USB-C-effektmåler, der sættes ind mellem opladeren og telefonen, er den reneste test. Den viser spænding, strøm og effekt på sin egen skærm. Bedre målere viser også oplysninger om USB Power Delivery, herunder den forhandlede spændingsprofil og om PPS er aktiv.

Det er vigtigt, fordi en telefon ikke nødvendigvis anmoder om opladerens maksimale effekt. En adapter på 65 W, der er tilsluttet en telefon med et maksimum på 25 W, bør levere omkring 25 W ved spidsbelastning, ikke 65 W. Det er normalt.

Brug det samme kabel, når du tester flere adaptere. Brug den samme adapter, når du tester flere kabler. Skift én ting ad gangen, ellers bliver resultatet bare støj.

En effektmåler afslører også kabelproblemer, som apps ikke viser særlig godt. Hvis adapteren er klar til at levere 9 V, men telefonen bliver ved med at falde tilbage til 5 V, er problemet strømforhandlingen og ikke bare en lav måling af batteristrømmen.

## Hold øje med fysiske advarselstegn

Det er normalt, at en oplader bliver lun under hurtigopladning. Det er ikke normalt, at den bliver så varm, at du ikke kan holde den.

Hold også øje med en summende lyd, brændt lugt, revnet plast, bøjede stikben, svidningsmærker, løse USB-porte eller et kabelstik, der kan bevæges i telefonen. Ustabil opladning er endnu et dårligt tegn. Hvis opladningsikonet blinker til og fra, skal du stoppe med at bruge kablet eller adapteren, indtil du har fundet årsagen.

Billige forfalskede opladere er det ene sted, hvor jeg ikke ville tage chancen. Moderne telefoner har beskyttelseskredsløb, men ustabil spænding og dårlig isolering er stadig dårligt nyt. Det er ikke værd at spare et par kroner på en adapter fra et ukendt mærke.

## Sørg for, at hurtigopladningsprotokollen passer

En oplader kan være god og stadig være et dårligt match til din telefon. Google Pixel og mange Samsung-modeller bruger USB-C Power Delivery, og PPS-understøttelse er nødvendig for den bedste Samsung Super Fast Charging-ydeevne. OnePlus- og OPPO-telefoner kræver ofte SUPERVOOC-kompatible opladere og kabler for at nå deres højeste hastigheder. Xiaomi HyperCharge har også sine egne krav.

Når protokollerne ikke passer sammen, falder telefonen som regel tilbage til en langsommere USB-tilstand. Den går ikke i stykker. Den bliver bare ikke opladet hurtigt.

En oplader til en bærbar computer på 65 W kan sikkert oplade en telefon, der kun understøtter 25 W, fordi telefonen anmoder om den effekt, den kan bruge. Den højere mærkning betyder kun, at opladeren har mere kapacitet til bærbare computere, tablets og andre enheder.

## Hvornår den bør udskiftes

Udskift opladeren, hvis den overopheder, lugter forkert, summer højt, har beskadiget plast eller giver ustabile resultater med flere gode kabler og flere enheder. Udskift kablet, hvis problemet følger kablet.

Hvis begge fungerer normalt med andre enheder, kan telefonen begrænse opladningen, fordi batteriet er varmt, porten er snavset, batteriet næsten er fuldt, eller telefonen ikke understøtter opladerens hurtigopladningsprotokol.
