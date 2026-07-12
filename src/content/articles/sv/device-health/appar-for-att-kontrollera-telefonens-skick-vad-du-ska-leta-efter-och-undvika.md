---
title: "Appar för att kontrollera telefonens skick: vad du ska leta efter och undvika"
description: "En bra app för att kontrollera telefonens skick ska berätta vad telefonen rapporterar, var uppgifterna är osäkra och vad du faktiskt kan göra härnäst. En dålig app visar en enorm \"Optimera\"-knapp, kör en animation och hoppas att du trycker på en annons."
listSummary: "jämförelse, appar och android"
hub: "device-health"
sourceNumber: 140
order: 9
tags: ["jämförelse","appar","android","köpguide","recension"]
locale: "sv"
draft: false
---
Där går gränsen. Den är inte särskilt svår att se när du väl vet vad du ska leta efter.

Android 17 ändrar inte grundregeln. Versionen finns nu på de flesta Pixel-telefoner som stöds, medan andra märken följer sina egna tidsplaner. Även med Android 17 varierar hälsoinformationen fortfarande mellan tillverkare. Pixel-telefoner, Samsung Galaxy-modeller, Xiaomi- och HyperOS-enheter samt billigare Android-telefoner kan lämna ut helt olika uppgifter.

## Vad Android-appar faktiskt kan läsa

Android lämnar ut batterinivå, spänning, temperatur, laddningsstatus, lagringsanvändning, nätverksstatus, Wi-Fi-information, typ av mobilanslutning och sensordata via offentliga API:er. Appar med rätt behörigheter kan också läsa användningsstatistik, kategorier i medielagringen och vissa nätverksuppgifter.

För temperaturdiagnostik ger Android utvecklare ett system-API för termisk status från Android 10 och thermal headroom från Android 11. Det innebär att en app kan upptäcka när systemet är under termisk belastning, så länge telefonen och dess Android-version lämnar ut uppgifterna korrekt.

Batteridata är rörigare. Androids BatteryManager kan rapportera värden som ström, laddningsräknare, spänning, status och temperatur, men avläsningarna beror på enhetens bränslemätare och OEM-implementation. En app kan läsa det Android tillhandahåller. Den kan inte uppfinna exakta uppgifter om batterikemin när telefonen inte ger den informationen.

På Pixel 8a och senare har Googles egna batterisidor blivit viktiga. Antalet laddningscykler finns under Inställningar > Om telefonen > Batteriinformation, medan batterihälsan finns under Inställningar > Batteri > Batterihälsa. Funktionen finns inte på alla Pixel-modeller och är inte en universell Android-funktion hos alla märken.

## Varningssignalerna

De sämsta apparna marknadsför vanligtvis lösningar i stället för diagnostik.

"Batterireparation" är det klassiska exemplet. Slitage i ett litiumjonbatteri är kemiskt åldrande. En app kan inte vända processen. Den kan visa användningsmönster, varna för värme eller påminna dig om att koppla ur laddaren tidigare. Den kan inte återställa en sliten battericell.

RAM-förstärkare är en annan varningssignal. Android hanterar redan minnet. Att tvångsstänga appar gör ofta att telefonen får arbeta hårdare när de startas igen. Om en diagnostikapp lyfter fram minnesrensning som huvudfunktion är den förmodligen inte byggd för diagnostik.

Överdrivna behörigheter bör också få dig att stanna upp. En batteriövervakare behöver inte dina kontakter. Ett nätverksverktyg behöver inte samtalsloggen. Ett guidat kamera- eller mikrofontest kan behöva åtkomst till de delarna eftersom det testar dem, men behörigheten ska motsvara funktionen.

Sedan finns hälsopoäng utan redovisad metod. "Telefonhälsa: 87 %" betyder ingenting om appen inte förklarar vad som påverkar siffran. Sänks den av värme? Räknas full lagring? Påverkar svag signal? Om poängen aldrig ändras när de verkliga förhållandena gör det är den bara dekoration.

Nej, verkligen. En snygg cirkulär mätare är ingen diagnostisk metod.

## Vad en användbar app gör annorlunda

En användbar app visar konkreta värden. Batteritemperatur i °C. Spänning i mV. Signalstyrka i dBm. Lagringsanvändning i GB och procent. Laddningsström i mA eller effekt i W när telefonen lämnar ut uppgiften.

Den erkänner också begränsningar. Här misslyckas många appar. En strömavläsning kan vara korrekt på en telefon och uppskattad på en annan. CPU-temperaturen kan saknas eftersom appen inte får läsa termiska zoner. Lagringens skick är inte samma sak som hur mycket lagring som används. En noggrann app säger när information är uppskattad, otillgänglig eller beroende av enheten.

De bästa apparna har ofta ett smalt syfte. AccuBattery är främst en batterimätare. DevCheck fokuserar på hårdvara och systeminformation. AIDA64 är en specifikationsreferens. runcheck kombinerar batteri, temperatur, nätverk och lagring i en hälsovy. Phone Doctor Plus kör guidade hårdvarutester.

Det är i allt-i-ett-apparna som lovar batterireparation, RAM-förstärkning, skräprensning, virusborttagning och ett hemligt prestandaläge som det brukar bli riktigt dåligt.

## Kontrollera de inbyggda verktygen först

Se efter vad telefonen redan innehåller innan du installerar något.

Samsung Members har Telefondiagnostik och kontroller av batteristatus. I den aktuella svenska guiden för Samsung Members går du via fliken Support till Telefondiagnostik och väljer sedan Batteristatus eller Testa alla, beroende på gränssnittsversion. Samsung ändrar också vissa benämningar mellan regioner och versioner, så ordalydelsen kan skilja sig något.

Pixel-telefoner har blivit bättre här, särskilt Pixel 8a och senare. Batterihälsan finns under Inställningar > Batteri > Batterihälsa. Antalet laddningscykler och annan batteriinformation finns under Inställningar > Om telefonen > Batteriinformation. Pixel-enheter som stöds fick också Android 17 först, så Pixel-ägare är den första gruppen som möter det senaste plattformsbeteendet.

Många Xiaomi- och HyperOS-telefoner innehåller en CIT- eller hårdvarutestmeny, men kod och tillgänglighet varierar mellan olika firmwareversioner. Uppringningskoder som `*#*#4636#*#*` kan öppna Androids testmeny på vissa enheter. På andra händer ingenting. Se sådana koder som en bonus, inte som en plan.

## När tredjepartsappar faktiskt tillför något

Inbyggda verktyg är bra för ögonblicksbilder. Tredjepartsappar är bättre när du behöver historik, jämförelser eller en rapport.

Batterihistorik är det tydligaste exemplet. På modeller som stöds kan Pixels batterisida visa om batteriet är normalt eller har minskad kapacitet. AccuBattery kan visa hur laddningssessionerna har sett ut över tid. Det är två olika frågor.

Temperaturhistorik är ett annat exempel. En telefon som når 43 °C en gång under navigering i solen är inte samma sak som en telefon som passerar 40 °C varje kväll vid vanlig användning. Du behöver loggar för att se mönstret.

Kontroll av begagnade telefoner är ett separat användningsområde. Appar som Phone Doctor Plus och verktyg i TestM-stil leder dig genom tester av pekskärm, högtalare, mikrofon, kameror, sensorer, Wi-Fi, Bluetooth, GPS och andra komponenter. Det är mer användbart inför en försäljning än en enda avläsning av batteritemperaturen.

runcheck ligger mitt emellan. Appen ger en snabb hälsovy över flera kategorier och visar samtidigt osäkerheten i mätningarna. Det är användbart när du inte vill stirra på rådata från fem olika skärmar.

## Integriteten är viktigare än många tror

Diagnostikdata låter harmlösa. Batterispänningen är inte din meddelandehistorik. En hälsoapp kan ändå få kännedom om telefonmodell, användningsmönster, nätverksstatus, installerade appar, lagringsvanor och ibland platsrelaterade Wi-Fi-uppgifter.

En rimlig app bör behandla så mycket som möjligt på enheten, undvika konton när de inte behövs och förklara varför varje behörighet begärs. DevCheck uppger att inga personuppgifter samlas in eller delas. runcheck är byggd för behandling på enheten utan konto. Det är den typ av integritetsmodell du bör leta efter i en verktygsapp.

Var mer skeptisk till appar som laddar upp diagnostikrapporter utan tydligt skäl, särskilt om appen är gratis, full av annonser och vag om dataanvändningen.

## Att betala för en diagnostikapp

Det är rimligt att betala en mindre summa om det tar bort annonser, öppnar historik eller lägger till export och övervakning som du faktiskt använder. Det är inte rimligt när appen säljer falska reparationsverktyg.

För en enstaka kontroll räcker gratisnivån vanligtvis. För långsiktig batteriuppföljning, lagringshistorik, jämförelse av laddare eller CSV-export kan en betalnivå vara motiverad.

Det bästa testet är enkelt: skulle appen fortfarande vara användbar om "Optimera"-knappen försvann? Om svaret är ja kan det vara ett riktigt diagnostikverktyg. Om svaret är nej, avinstallera den.

*Metabeskrivning: Så väljer du appar för att kontrollera en Android-telefons skick 2026, med varningssignaler, inbyggda verktyg att prova först och funktioner som skiljer riktig diagnostik från optimeringsappar.*
