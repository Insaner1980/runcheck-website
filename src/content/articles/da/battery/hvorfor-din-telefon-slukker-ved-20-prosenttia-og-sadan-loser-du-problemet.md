---
title: "Hvorfor din telefon slukker ved 20 %, og sådan løser du problemet"
description: "Du har 22 % tilbage, åbner kameraet, og skærmen bliver sort. Når du derefter tilslutter opladeren, viser telefonen pludselig 18 % eller 24 %. Det føles, som om procenttallet lyver for dig."
listSummary: "Du har 22 % tilbage, åbner kameraet, og skærmen bliver sort."
hub: "battery"
sourceNumber: 22
order: 12
subgroup: "Drain"
tags: ["batteri","kalibrering","fejlfinding","android","guide"]
locale: "da"
draft: false
---
Det gør det på en måde. Tallet på skærmen er et estimat, og gamle batterier er sværere at estimere præcist.

## Det første, du skal kontrollere

Tjek batteritilstanden, før du begynder at prøve kalibreringstricks.

På Pixel 8a og nyere skal du gå til Indstillinger > Batteri > Batteritilstand. Pixel viser Normal ved 80 % eller mere og Reduceret under denne grænse. Antallet af opladningscyklusser findes under Indstillinger > Om telefonen > Batterioplysninger på Pixel 8a og nyere.

På Samsung skal du åbne Samsung Members > Support > Kom i gang under Telefondiagnosticering > Batteristatus. Samsung angiver resultatet som Normal, Svag eller Dårlig. De præcise menunavne kan variere, men Samsung Members er producentens officielle metode til diagnosticering.

På andre Android-telefoner skal du først se under Indstillinger > Batteri. Hvis der ikke findes en indbygget side for batteritilstand, kan du bruge en diagnoseapp som AccuBattery og lade den indsamle data over flere opladninger. Én måling efter én opladning er ikke nok.

En måling under 80 % sammen med nedlukning ved 20 % peger direkte på battericellen.

## Derfor lyver tallet

Android estimerer batteriprocenten ud fra spænding, strøm, temperatur og en model for, hvordan batteriet bør opføre sig. Nogle telefoner registrerer også den strøm, der løber ind og ud over tid.

Modellen fungerer bedst, når battericellen er i god stand. Efterhånden som batteriet ældes, falder kapaciteten, og den indre modstand stiger. Spændingskurven ændrer sig. Telefonen kan stadig tro, at 20 % er en god reserve, selv om batteriet har langt mindre brugbar energi tilbage.

Fejlene viser sig først i den lave ende. Midt i opladningsområdet er spændingskurven forholdsvis flad. Tæt på tom bliver den stejl. Et lille spændingsfald under belastning kan derfor pludselig få det til at se ud, som om batteriet falder ud over en klippe.

Derfor kan kamera, GPS, spil, videoopkald og 5G udløse en nedlukning. De skaber korte strømspidser. Et sundt batteri klarer spidsen. Spændingen i et slidt batteri falder under telefonens minimale driftsspænding, og Android slukker enheden for at beskytte den.

## Derfor slukker gamle batterier for tidligt

Et nedslidt batteri har to problemer på samme tid.

For det første kan det lagre mindre strøm. Et batteri på 5.000 mAh med 80 % batteritilstand rummer omkring 4.000 mAh. Ved 70 % rummer det omkring 3.500 mAh. Procentvisningen kan stadig se normal ud, men hvert procentpoint repræsenterer mindre reel kapacitet.

For det andet er den indre modstand højere. Det betyder, at spændingen falder mere, når telefonen kræver strøm. Derfor kan en gammel telefon roligt stå på 25 % på startskærmen og derefter slukke i det øjeblik, du åbner kameraet.

Kulde gør det hele værre. Litium-ion-kemien arbejder langsommere i kulde, så batteriet ikke kan levere strøm lige så let. En telefon, der klarer sig ved 20 % indendørs, kan slukke ved samme procenttal udenfor.

Varme er anderledes. Den giver som regel ikke i sig selv den pludselige nedlukning ved 20 %, men den fremskynder den aldring, der skaber problemet.

## Kalibrering: hvad den kan og ikke kan løse

Batterikalibrering bliver ofte misforstået. Den gendanner ikke batterikapaciteten. Den kan kun hjælpe telefonens software med at estimere den resterende opladning mere præcist.

Hvis batteritilstanden ser rimelig ud, og nedlukningerne begyndte efter en softwareopdatering, en batteriudskiftning eller en lang periode med mærkelig opladningsadfærd, er én kalibreringscyklus rimelig. Det gælder også den aktuelle Android 17-udrulning på understøttede Pixel-telefoner: Gå ikke ud fra, at batteriet er defekt, bare fordi tidspunktet falder sammen med en stor opdatering. Brug telefonen, indtil den slukker af sig selv. Oplad den derefter uafbrudt til 100 %, og lad den blive siddende i opladeren i yderligere 30-60 minutter. Brug den normalt bagefter.

Gør ikke fulde afladninger til en vane. Gentagen afladning til nul belaster litium-ion-batterier mere end mindre opladninger.

Hvis kalibreringen hjælper, bør procentvisningen opføre sig mindre dramatisk over de næste par cyklusser. Hvis telefonen fortsat slukker ved 20 %, eller grænsen flytter sig op til 30 %, er battericellen sandsynligvis for slidt til, at softwaren kan skjule det.

## Når softwaren er årsagen

Nogle gange er hardwareslid ikke hele forklaringen. En app, der opfører sig dårligt, kan holde wake locks, holde CPU'en aktiv eller udløse netværks- og lokationsaktivitet på uheldige tidspunkter. Den ekstra belastning kan skubbe et svagt batteri over kanten.

Tjek Indstillinger > Batteri > Batteriforbrug. Hvis en app viser højt forbrug i baggrunden, skal du begrænse den eller afinstallere den i en dag og teste igen.

Sikker tilstand er nyttig, hvis telefonen er forholdsvis ny, og målingen af batteritilstanden ser normal ud. Sikker tilstand deaktiverer downloadede apps. Hvis nedlukningerne stopper der, peger det på en installeret app.

En nulstilling til fabriksindstillinger kan rette en ødelagt batteriberegning eller softwareprocesser, der er gået i ring, men det er den tunge løsning. Tag først en sikkerhedskopi. Test telefonen efter nulstillingen, før du gendanner alle apps og indstillinger fra sikkerhedskopien. Hvis du gendanner alt med det samme, kan det samme problem komme tilbage.

## Almindelige spørgsmål

Hvorfor tænder telefonen igen med en højere procent efter tilslutning af opladeren? Under belastning falder spændingen i et svagt batteri kraftigt. Når opladeren tilsluttes, leverer den strøm, og batterispændingen stiger igen. Telefonen fik ikke en stor mængde opladning på ét sekund. Spændingsmålingen stabiliserede sig.

Bør du lade telefonen være tilsluttet for at undgå, at den slukker ved 20 %? I en enkelt nødsituation, ja. Som daglig løsning, nej. Hvis telefonen ikke er til at stole på under 25 %, kræver batteriet opmærksomhed.

Kan en batteriapp løse problemet? Ingen app kan reparere kemisk slid. En god app kan hjælpe med at estimere batteritilstanden og vise mønstre. Den kan ikke genopbygge battericellen.

Når en telefon slukker, selv om den viser rigeligt med strøm, skyldes det som regel en gammel battericelle, en forkert beregning af opladningsniveauet eller begge dele. Tjek først batteritilstanden, kalibrer kun, når det giver mening, og udskift batteriet, når tegnene peger i den retning.
