---
title: "Sådan læser du statistikken over batteriforbrug på Android"
description: "Du åbner Batteriforbrug og ser én app på 42 %. Det ser slemt ud. Nogle gange er det også slemt. Andre gange betyder tallet næsten ingenting."
listSummary: "Du åbner Batteriforbrug og ser én app på 42 %."
hub: "battery"
sourceNumber: 14
order: 4
subgroup: "Health"
tags: ["batteri","strømforbrug","fejlfinding","android","ydeevne"]
locale: "da"
draft: false
---
Androids batteristatistik er god til at indsnævre et problem, men den er ikke en præcis kvittering for, hvor hver eneste milliamperetime blev brugt. Tricket er at læse procenterne i deres sammenhæng.

**Metabeskrivelse:** Androids statistik over batteriforbrug viser, hvilke apps og systemtjenester der bruger strøm. Se, hvor du finder tallene, hvad procenterne betyder, og hvordan du opdager reelle batteriproblemer.

## Hvor du finder statistikken

På Pixel og standardnær Android åbner du **Batteriforbrug** i sektionen Batteri under Indstillinger. Du kan se forbruget efter app, og på nyere Pixel-versioner kan du skifte mellem apps og systemkategorier. Når du trykker på en app, åbnes dens batteriindstillinger, herunder muligheder for brug i baggrunden.

På Samsung Galaxy går du til **Indstillinger > Batteri**. På nogle ældre One UI-versioner er stien **Indstillinger > Batteri- og enhedspleje > Batteri**. Samsung viser ofte først en graf og derefter **View details** for at se flere oplysninger om apps og funktioner. Nogle versioner viser også en længere apphistorik, som ofte er mere nyttig end ét kort tidsrum mellem opladninger.

På Xiaomi-, Redmi- og POCO-telefoner skal du se efter **Battery usage**, **Power consumption details** eller en tilsvarende betegnelse i menuen Batteri. Navnene i HyperOS og MIUI varierer efter model, så menupunktet kan hedde noget lidt andet.

På OnePlus-, OPPO- og realme-telefoner starter du under Batteri og ser efter **Battery usage**, **Battery usage details** eller **App battery management**. Disse Android-varianter opdeler som regel forbruget i forgrund og baggrund, når du trykker på en app.

Opkaldskoden `*#*#4636#*#*` åbner en testmenu på nogle Android-telefoner. Den kan vise spænding, temperatur, status og opladningstilstand. Det er ikke en oversigt over forbrug pr. app, og mange producenter deaktiverer koden.

## Hvad procenterne faktisk betyder

Tallet ud for en app er som regel dens andel af det forbrugte batteri, ikke dens andel af telefonens samlede batterikapacitet.

Forestil dig, at telefonen falder fra 100 % til 70 %. Der er brugt 30 procentpoint. Hvis YouTube står for 50 % i Batteriforbrug, betyder det ikke, at YouTube har brugt halvdelen af hele batteriet. Det betyder, at YouTube står for cirka halvdelen af det forbrug, Android har fordelt i perioden. I dette eksempel er det omtrent 15 procentpoint af det faktiske batteriniveau.

Vend så eksemplet om. Telefonen falder fra 100 % til 96 %, og én app viser 60 %. Appen dominerede et meget lille samlet forbrug. Den kan være helt harmløs.

Det er den fejl, jeg ser oftest. Folk går efter den højeste procent uden først at kontrollere, hvor meget batteri der faktisk er brugt.

## Sådan estimerer Android forbruget

Android har ikke en lille strømmåler på hver app. Systemet estimerer.

Android registrerer, hvor længe forskellige dele af enheden befinder sig i bestemte tilstande: CPU, skærm, GPS, Wi-Fi, mobilradio, Bluetooth og så videre. Producenten leverer en strømprofil, der angiver, hvor meget strøm hver komponent forventes at bruge i de forskellige tilstande. Android kombinerer tidsdataene med profilen og fordeler forbruget på apps og systemkomponenter.

Det er godt nok til fejlfinding. Det er ikke en laboratoriemåling.

Strømprofiler varierer mellem producenter. En Pixel og en Xiaomi-telefon kan køre den samme app lige længe og stadig vise forskellige procenter. Appen har ikke på magisk vis opført sig anderledes. Regnskabsmodellen er ændret.

## Sådan læser du batterigrafen

Grafen er vigtigere end applisten i første omgang.

Et stejlt fald, mens skærmen er tændt, er som regel normalt. Høj lysstyrke, video, kort, spil, kamera og mobildata kan aflade en telefon hurtigt. Et stejlt fald, mens skærmen er slukket, er mere interessant. Det peger på baggrundsaktivitet, dårligt signal, en synkronisering der er gået i ring, en fastlåst proces eller en telefon, der aldrig går i dyb dvale.

En flad linje, mens skærmen er slukket, er det ønskede resultat. Det betyder, at telefonen hviler.

Opladningsperioder vises som stigende linjer eller lodrette spring. Et hul betyder som regel, at telefonen var slukket, statistikken blev nulstillet, eller systemet ikke indsamlede data i perioden. Læs ikke for meget ind i en rodet graf fra en dag, hvor du opladede fem gange i korte intervaller. Små delvise opladninger får app-procenterne til at hoppe rundt.

## Skærm, aktiv tid og signal

Nogle Android-versioner viser bjælker under grafen. De er lette at overse, men forklarer meget.

Skærmtid viser, hvornår skærmen var aktiv. Hvis det meste af forbruget følger skærmtiden, opfører telefonen sig sandsynligvis normalt. Skærmen er en af de største strømforbrugere i en moderne telefon.

Aktiv tid viser, hvornår CPU'en arbejdede. Den bør hovedsageligt overlappe med skærmtiden. Lange aktive perioder med slukket skærm peger på wake locks eller baggrundsarbejde. Synkronisering af mail, fitnessapps, cloudbackup, navigation, beskedapps og medieafspillere kan alle gøre det. Noget af det er forventeligt. En shoppingapp, der gør det i tre timer, er det ikke.

Signalkvaliteten er en anden stor faktor. Et svagt mobilsignal kan bruge meget strøm, fordi modemmet hele tiden arbejder for at holde forbindelsen. Hvis Mobile network standby eller Cell standby ligger nær toppen, mens du befinder dig i et kælderkontor, et tog, et landområde eller en bygning af beton, er telefonen måske ikke defekt. Den kæmper muligvis bare med netværket.

## Mønstre, der er værd at reagere på

En app med højt batteriforbrug er ikke automatisk et problem. En app med højt batteriforbrug, som du næsten ikke har brugt, er et problem.

En videoapp øverst på listen efter to timers streaming er normal. En nyhedsapp øverst efter fem minutters læsning er mistænkelig. Tryk på appen, og sammenlign tiden i forgrunden med tiden i baggrunden.

Højt forbrug under Android System eller System apps er sværere at fortolke. Det kan skyldes et reelt systemproblem, især efter en fejlbehæftet opdatering. Det kan også betyde, at Android ikke kunne placere forbruget præcist hos én app, så systemkategorien fik skylden.

Det samme gælder Google Play services nær toppen. Tjenesten håndterer pushnotifikationer, kontosynkronisering, lokation og andre fælles funktioner for mange apps. Hvis forbruget er højt, bør du se efter apps, der anmoder om lokation for ofte. Google Play services kan være budbringeren frem for synderen.

At skærmen står for mere end 40-50 % af det forbrugte batteri, er normalt for mange. Hvis skærmtiden er lav, men det samlede forbrug er højt, er der noget andet, der arbejder.

## Hvad du gør, når du finder en mistænkelig app

Begynd forsigtigt. Opdatér appen. Genstart telefonen. Se, om problemet gentager sig næste dag.

Hvis det fortsætter, kan du begrænse appens brug i baggrunden. På Pixel trykker du på appen under **Batteriforbrug** og justerer **Tillad brug i baggrunden**. Du kan også gå til **Indstillinger > Apps > [appens navn] > Batteriforbrug for apps**. På Samsung trykker du på appen i oversigten over batteriforbrug og bruger indstillinger som Baggrundsforbrugsgrænser, Sovende apps eller Dybt sovende apps.

Gennemtving stop er en midlertidig test, ikke en løsning. Det kan stoppe en løbsk app her og nu, men pushnotifikationer, planlagte opgaver eller en genstart kan sætte den i gang igen. Det er mere holdbart at begrænse batteriforbruget i baggrunden.

Sikker tilstand er nyttig, hvis hele telefonen aflades hurtigt, og du ikke kan udpege én app. Sikker tilstand deaktiverer tredjepartsapps. Hvis problemet forsvinder, er software den sandsynlige årsag. Hvis forbruget er det samme, bør du undersøge signal, en systemopdatering, telefonens temperatur eller selve batteriet.

## Hvad statistikken ikke kan fortælle

Batteristatistik beviser ikke noget om batteritilstanden. Et slidt batteri og en dårlig app kan se ens ud i den daglige brug.

Statistikken nulstilles eller afgrænses også forskelligt fra enhed til enhed. Pixel fokuserer på brug siden den seneste fulde opladning. Samsung har ændret layoutet mellem One UI-versioner, og nogle versioner viser forbruget siden den seneste opladning i stedet for en streng fuld cyklus. Hyppige delvise opladninger gør tidsvinduet kortere, så procenterne ser mere dramatiske ud.

Du skal bruge historik for at se tendenser. AccuBattery kan estimere kapacitet og følge opladninger over tid. runcheck gemmer historik over batteriniveau, temperatur, afladningshastighed og relaterede sessionsdata, så du kan sammenligne dage i stedet for at stirre på én støjfyldt graf.

Den bedste brug af Androids Batteriforbrug er enkel: Find det første gode spor, og bekræft det med telefonens opførsel. Hvis grafen, applisten, baggrundstiden og din erindring om dagen peger på det samme, har du sandsynligvis fundet årsagen til forbruget.
