---
title: "Batteritilstand og beskyttelsesindstillinger på Xiaomi og POCO"
description: "Xiaomis oplysninger om batteritilstand er stadig inkonsekvente. Det er den ærlige version. En nyere Xiaomi 15 kan vise nyttige funktioner til batteribeskyttelse, nogle HyperOS-versioner viser antal cyklusser eller oplysninger om batteritilstand, og mange Redmi- og POCO-telefoner giver dig næsten intet ud over temperatur og grundlæggende opladningsstatus."
listSummary: "Xiaomis oplysninger om batteritilstand er stadig inkonsekvente."
hub: "brands"
sourceNumber: 155
order: 3
tags: ["batteri","tilstand","diagnostik","android","guide"]
locale: "da"
draft: false
---
Android 17 rydder ikke op i dette af sig selv. Google udgav først Android 17 til de fleste understøttede Pixel-telefoner, mens Xiaomi-, Redmi- og POCO-enheder senere får Android 17-baserede HyperOS-versioner. Selv derefter bestemmer Xiaomi, hvad der vises under Settings på den enkelte model og i den enkelte region.

Læs derfor ikke dette som én universel Xiaomi-sti. Brug det som en tjekliste.

## Tjek Battery protection først

På aktuelle HyperOS-versioner skal du begynde her:

Settings > Battery > Battery protection

Afhængigt af telefonen og firmwaren kan siden indeholde indstillinger til batteribeskyttelse, Smart charging, temperatur, oplysninger om dagens opladninger og nogle gange batteritilstand eller cyklusdata.

På understøttede modeller kan du muligvis se batteritilstand i procent eller antal cyklusser under Battery protection, Battery health eller en side med et lignende navn. Xiaomi viser ikke disse oplysninger konsekvent i hele produktserien. Topmodeller og nyere ydelsesmodeller får ofte bedre data først. Billige Redmi-modeller gør ofte ikke.

Hvis siden mangler, kan en opdatering af HyperOS og Xiaomis systemapps måske hjælpe, men forvent ikke mirakler. Xiaomi kan ganske enkelt have valgt ikke at aktivere funktionen på den model.

## Smart charging og adfærden ved 80 %

Xiaomis officielle supportsider beskriver Smart charging som en funktion, der skal forlænge batteriets levetid. Telefonen lærer dine opladningsvaner, stopper opladningen ved 80 % i relevante situationer og oplader derefter langsomt videre til 100 %, så batteriet ikke ligger fuldt opladet i timevis.

Stien er:

Settings > Battery > Battery protection > Smart charging

Xiaomi dokumenterer også for Xiaomi 15, at Battery protection eller Smart charging sandsynligvis er aktiveret, hvis telefonen kun oplader til 80 % eller ikke bliver fuldt opladet. Det er forventet adfærd og ikke nødvendigvis en fejl.

Det er Xiaomis udgave af adaptiv opladning. Den giver mest mening, hvis du oplader om natten eller lader telefonen sidde i opladeren i længere tid. Hvis din tidsplan er uregelmæssig, kan funktionen opføre sig inkonsekvent. Det er ikke særligt for Xiaomi. Alle adaptive opladningssystemer forsøger at gætte ud fra dine vaner.

Nogle modeller har også en strengere Battery protection-tilstand, der stopper ved 80 %. Ordlyden varierer mellem softwareversioner. Hvis telefonen bliver ved med at stoppe ved 80 %, selv om du har brug for en fuld opladning, skal du kontrollere Battery protection, før du giver opladeren skylden.

## MIUI viste aldrig batteritilstand pålideligt

På ældre MIUI-versioner lå oplysningerne om batteritilstand ofte i Security-appen i stedet for under Settings:

Security > Battery > Battery Health

På nogle telefoner viste siden antal cyklusser, en vag tilstandsbetegnelse eller en besked om batteriets ydeevne. På andre forsvandt valgmuligheden efter en opdatering. Det var almindeligt MIUI-kaos.

Hvis du stadig bruger MIUI 12, 13 eller 14, skal du først opdatere Security-appen. Åbn Security, tryk på tandhjulet til indstillinger, gå til About, og søg efter opdateringer. Hvis Battery Health stadig ikke vises, findes funktionen sandsynligvis ikke på den enhed eller ROM.

Stol ikke for meget på gamle MIUI-betegnelser som Good, Normal, Bad eller Awesome. De kan være nyttige som advarsel, men de giver dig ikke en reel procent for resterende kapacitet.

## Xiaomis skjulte batterikode

Den kode, de fleste deler, er:

`*#*#6485#*#*`

På mange Xiaomi-, Redmi- og POCO-telefoner åbner den en batteridiagnoseside. Den kan vise værdier som opladningsstatus, spænding, strøm, cyklusrelaterede felter samt data fra fabrikken eller batterimåleren.

Problemet er fortolkningen. Xiaomi offentliggør ikke en overskuelig vejledning, der omsætter hvert felt til et brugervenligt tal for batteritilstand. Nogle netvejledninger påstår, at bestemte formler kan bruges på MF-værdier, men felterne kan variere mellem modeller og softwareversioner. En formel, der ser rigtig ud på en Xiaomi 13, kan være forkert på en Redmi Note.

Brug koden som en visning af rå diagnosedata, ikke som det endelige svar. Hvis telefonen har en indbygget side med Battery health, bør du stole mere på den end på et afkodet skjult felt.

## Opladningshastighed og varme

Xiaomi- og POCO-telefoner er kendt for aggressiv opladning. Opladning med 67 W, 90 W, 120 W eller mere kan være praktisk. Den skaber også varme, og varme er det vigtigste at holde øje med, hvis du vil begrænse slitage over tid.

Hurtigopladning en gang imellem er fint. Hurtigopladning hver nat under en pude eller i et varmt rum er en dårlig idé.

De fleste Xiaomi-telefoner giver dig ikke en enkel manuel begrænsning af opladningshastigheden. Systemet sænker automatisk opladningen, når batteriet bliver varmt, men det er ikke det samme som selv at kunne vælge en rolig grænse på 20 W.

Praktiske vaner virker bedre end tricks:

- Brug Smart charging om natten.
- Undgå hurtigopladning, når telefonen allerede er varm.
- Lad være med at spille under opladning, hvis enheden bliver varm.
- Tag coveret af under meget hurtig opladning, hvis temperaturen stiger.
- Brug langsommere opladning, når du ikke har brug for hastigheden.

Nej, du behøver ikke passe på telefonen som et skrøbeligt samleobjekt hver dag. Men hvis du har købt en POCO med 120 W og vil beholde den i fire år, betyder temperaturstyring noget.

## Batteritilstande i HyperOS

Batteritilstande er noget andet end batteritilstand. De ændrer, hvordan telefonen bruger strøm lige nu, ikke hvor meget af batteriets oprindelige kapacitet der er tilbage.

Settings > Battery indeholder som regel tilstande som Balanced, Battery Saver, Ultra Battery Saver og nogle gange Performance Mode. De præcise navne varierer.

Balanced er standardindstillingen og normalt det rigtige valg. Battery Saver begrænser baggrundsaktivitet, synkronisering, opdateringshastighed og nogle visuelle effekter. Ultra Battery Saver er en nødtilstand til opkald, beskeder og nogle få valgte apps. Performance Mode holder telefonen hurtigere i spil og krævende apps, men koster strøm og varme.

Hvis batteriforbruget pludselig blev værre, efter du slog Performance Mode til, er det ikke batterislitage. Telefonen gør præcis det, du bad den om.

## Hvilke data apps kan læse på Xiaomi-telefoner

Via Androids batteri-API'er viser Xiaomi-telefoner som regel opladningsniveau, opladningsstatus, stiktype, spænding, temperatur, generel batteristatus og nogle gange strøm.

Det er strømfeltet, der bliver rodet. Nogle modeller leverer brugbare strømmålinger. Andre viser nul, gamle værdier eller tal, der ikke passer til det reelle forbrug. Xiaomis topmodeller og telefoner i POCO F-serien er som regel bedre end billige Redmi-modeller, men der er undtagelser.

Rapportering af antal cyklusser og batteriets state of health bliver bedre i Android og HyperOS, men Xiaomis understøttelse er ikke ensartet. Android har systemfunktioner til mere detaljerede batteridata, men hardware, batterimåler, firmware, tilladelser og producentens brugerflade skal alle samarbejde.

runcheck håndterer dette ved at knytte et sikkerhedsniveau til målingen. Hvis en Xiaomi-telefon leverer brugbare strømdata, kan runcheck vise afladning og opladningsadfærd med højere sikkerhed. Hvis målingerne mangler eller ser mistænkelige ud, markerer appen dem som estimerede eller utilgængelige i stedet for at pynte svage data til et præcist tal.

## Batteriforbrug efter HyperOS-opdateringer

En stor opdatering kan forringe batteritiden i et par dage. Android indekserer filer igen, kompilerer apps på ny, opdaterer cacher og lader apps genstarte baggrundsarbejde. Telefonen kan blive varmere i den periode.

Vent 48-72 timer, før du vurderer resultatet. Det er et kedeligt råd, men som regel det rigtige.

Hvis forbruget stadig er højt efter tre dage, skal du kontrollere batteriforbruget pr. app. Se efter én app med usædvanligt høj baggrundsaktivitet. Beskedapps, sociale apps, VPN'er, cloudbackup af billeder og wearables kan alle blive støjende efter en stor opdatering.

Tjek også, om tilladelser er blevet nulstillet. Hvis en app har mistet sine begrænsninger for baggrundsbrug under en opdatering, kan den stille og roligt bruge meget strøm uden først at se mistænkelig ud.

## Hvornår du kan stole på tallet

En indbygget procent for batteritilstand i HyperOS på en nyere model er nyttig, men gå ikke i panik over en ændring på ét procentpoint. Batteriestimater kan gå både op og ned efter opdateringer eller kalibrering. Xiaomi-brugere har oplevet, at værdier for tilstand og cyklusser ændrer sig efter systemrettelser, og det viser, at softwaremodellen ikke er perfekt.

Se efter mønstre:

- Kapaciteten falder fortsat måned efter måned.
- Batteritiden er tydeligt kortere end før.
- Telefonen slukker for tidligt.
- Opladningen bliver usædvanligt varm.
- Batteriprocenten falder kraftigt under belastning.

Én mærkelig måling er støj. Et gentaget mønster er dokumentation.

## En enkel måde at træffe beslutningen på

Begynd med Battery protection. Hvis din Xiaomi eller POCO stopper ved 80 %, skal du først gå ud fra, at Battery protection eller Smart charging er aktiv, før du giver opladeren skylden. Xiaomi dokumenterer adfærden på Xiaomi 15, og samme princip findes på tværs af nyere HyperOS-versioner.

Hvis telefonen viser batteritilstand i procent, skal du følge udviklingen over flere uger. Hvis den ikke gør, kan du i stedet bruge temperatur, batteritid, opladningsadfærd og nogle få appbaserede estimater. Det er mindre tilfredsstillende, men mere ærligt end at foregive, at alle Xiaomi-enheder viser de samme data.

Hurtigopladning er fint, når du har brug for den. Det er varmen, du skal styre. Brug 67 W, 120 W eller hurtigere opladning, når hastigheden betyder noget, og brug Smart charging eller en langsommere oplader, når telefonen bare ligger til opladning natten over.

Android 17 løser ikke dette af sig selv. Google leverede først versionen til understøttede Pixel-telefoner, og Xiaomis Android 17-baserede HyperOS-udrulning afgør, hvad den enkelte Xiaomi-, Redmi- og POCO-model faktisk viser.
