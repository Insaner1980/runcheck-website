---
title: "Sådan tester du hardwaren i en Android-telefon: komplet diagnoseguide (2026)"
description: "Din Android-telefon kan se helt normal ud, selv om én del er ved at svigte. Et slidt batteri, en svag højttaler, en defekt nærhedssensor eller en beskadiget antenne giver ikke altid en tydelig advarsel. I stedet får du kortere batteritid, mærkelige opkald, tilfældig varme eller et område af skærmen, der ikke reagerer på berøring."
listSummary: "Din Android-telefon kan se helt normal ud, selv om én del er ved at svigte."
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["batteri","strømforbrug","fejlfinding","android","ydeevne"]
locale: "da"
draft: false
---
Den gode nyhed er, at du kan teste det meste, før du betaler for en reparation. Android har indstillingssider, producenternes egne diagnoseværktøjer, opkaldskoder og manuelle kontroller, som dækker de vigtigste hardwaredele. Det besværlige er, at intet af det er helt universelt.

Android 17 blev udgivet den 16. juni 2026 og blev først gjort tilgængelig på de fleste understøttede Pixel-enheder, mens andre mærker følger deres egne tidsplaner. Det betyder noget, fordi diagnosemenuer, visning af batteritilstand og stier i Indstillinger kan variere efter Android-version, producentens brugerflade, operatørsoftware og region. Betragt hver kode i denne guide som en genvej, ikke et løfte.

## Hurtigt svar

Begynd med producentens officielle diagnoseværktøj, når der findes et.

- Samsung Galaxy: Åbn Samsung Members, vælg `Få hjælp`, og tryk på `Vis tests` under Diagnostik. Du kan køre alle kontroller eller vælge en enkelt del, for eksempel batteri, højttaler, mikrofon, skærm, kamera eller sensorer. Mange Galaxy-telefoner understøtter også `*#0*#` i Telefon-appen, som åbner en hardwaretestmenu.
- Google Pixel: Indtast `*#*#7287#*#*`, mens telefonen har internetforbindelse, for at åbne Pixel Repair Diagnostics på understøttede Pixel-telefoner. Pixel Tablet bruger Googles webbaserede reparations- og diagnoseforløb.
- Motorola: Åbn den forudinstallerede Device Help-app, og kør en fuld hardwarediagnose. Den præcise menusti kan variere efter model og softwareversion.
- Xiaomi, Redmi og POCO: Prøv `*#*#6484#*#*` for at åbne CIT-diagnosemenuen. På mange modeller kan du også åbne den ved at trykke flere gange på kernelversionen under Om telefonen.
- Telefoner med næsten ren Android: `*#*#4636#*#*` kan åbne en testmenu på mange enheder, hovedsageligt med oplysninger om telefon, netværk, brug og i nogle tilfælde batteri. Det er ikke en komplet hardwaretest, og mange Samsung- eller operatørversioner blokerer den.

Hvis en kode ikke gør noget, skal du ikke blive ved med at kæmpe med den. Brug de manuelle test nedenfor eller en diagnoseapp.

## Afgør først, om problemet skyldes software eller hardware

Dette trin kan spare dig for penge. En softwarefejl kan ligne en defekt komponent fuldstændigt.

Sikker tilstand er det første filter. Hold afbryderknappen inde, indtil strømmenuen vises, og hold derefter fingeren på Sluk, indtil muligheden for sikker tilstand kommer frem. På nogle telefoner bruges en anden knapkombination, men formålet er det samme: Android starter uden tredjepartsapps.

Hvis problemet forsvinder i sikker tilstand, er en tredjepartsapp sandsynligvis involveret. Fjern nyligt installerede apps én ad gangen, og genstart normalt efter hver afinstallation. Hvis problemet fortsætter i sikker tilstand, ligger årsagen enten i Android, producentens firmware eller hardwaren.

En nulstilling til fabriksindstillinger er den sidste softwaretest. Sikkerhedskopiér dine data først. Hvis problemet stadig findes efter en ren nulstilling uden gendannede apps, bliver hardware en langt mere sandsynlig forklaring.

Se efter mønstre. Et dødt berøringsområde præcis samme sted hver gang peger på skærmen eller digitizeren. En telefon, der slukker ved 20 %, men fungerer, mens den er tilsluttet strøm, peger på batteriet. Et kamera, der begyndte at summe efter et fald, kan have en beskadiget fokus- eller OIS-mekanisme. Hvis telefonen blev ustabil lige efter en stor opdatering, herunder Android 17 på Pixel, bør du installere tilgængelige rettelser og teste igen, før du antager, at bundkortet er defekt.

## Hvorfor hardware svigter

Batterier bliver slidt. Sådan fungerer litium-ion-kemi. Google bruger 80 % resterende kapacitet som grænse for anbefalet batteriudskiftning på Pixel, og det forventede antal cyklusser afhænger af modellen. Pixel 3 til Pixel 8 Pro og Pixel Fold er angivet til cirka 800 cyklusser, mens Pixel 8a og nyere er angivet til cirka 1.000 cyklusser.

Porte og knapper slides ved brug. USB-C-porte samler fnug, især når telefonen ligger i en lomme. Knapper mister deres tydelige klik efter tusindvis af tryk. Højttalergitre bliver langsomt tilstoppede, så du måske først bemærker problemet, når opkald begynder at lyde dæmpede.

Fald giver mere mærkelige fejl. En telefon kan overleve uden revnet glas og stadig have et løst stik, et beskadiget kameramodul, en bøjet ramme eller en svækket lodning. Vand er værre, fordi korrosion kan vise sig dage eller uger senere.

Varme fremskynder næsten alt. Opladning i direkte sol, gaming under opladning eller en telefon efterladt i en varm bil kan ælde batteriet hurtigere og udløse termisk begrænsning. Vedvarende batteritemperaturer over cirka 40 °C bør tages alvorligt.

Der findes også variation fra produktionen. To telefoner med samme modelnavn opfører sig ikke nødvendigvis helt ens. Små forskelle i chips, varmeoverførsel, skærmpaneler, sensorkalibrering, modemfirmware og regionale softwareversioner kan ændre batteritid, varme, signal og benchmarkresultater. Det betyder ikke automatisk, at den ene telefon er defekt. Det betyder, at tal på nettet er intervaller, ikke løfter.

## Test batteriet

Begynd med de oplysninger, som telefonen faktisk viser.

På Pixel 8a og nyere skal du gå til `Indstillinger > Batteri > Batteritilstand`. Pixel viser, om batteritilstanden er `Normal` eller `Reduceret`, og under `Batterikapacitet` kan du se et estimat af den resterende kapacitet sammenlignet med den oprindelige. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 og Pixel 8 Pro viser ikke den samme status for batteritilstand.

På Samsung skal du bruge Samsung Members. Vælg `Få hjælp > Vis tests`, og kør batteritesten. Den præcise ordlyd kan variere efter appversion og region, men Samsung Members er en sikrere vej end tilfældige batterikoder.

På OnePlus, OPPO, realme, Xiaomi og andre mærker skal du se under Batteri i Indstillinger eller i producentens enhedsplejeapp. Nogle viser batteritilstand. Andre gør ikke. Androids batterirapportering er stadig ujævn mellem producenterne.

Batteriet er mistænkeligt, hvis telefonen aflades hurtigt ved let brug, slukker ved 15-20 %, bliver varm under opladning eller buler ved bagcoveret eller skærmen. Stop med at bruge en telefon med opsvulmet batteri, og få den undersøgt. Det er ikke et softwareproblem.

## Test skærmen og berøringslaget

Vis billeder i fuld skærm med hvid, sort, rød, grøn og blå baggrund for at finde døde pixels. Gennemgå skærmen langsomt. Døde pixels forbliver sorte. Fastlåste pixels lyser konstant i én farve. OLED-indbrænding ses lettest på en ensartet grå baggrund ved mellemstyrke.

Til berøring kan du åbne en tegneapp og tegne tætte vandrette og lodrette linjer over hele skærmen. Brud i linjerne afslører døde områder. Du kan også aktivere Udviklerindstillinger og slå visning af tryk eller markørplacering til, og derefter føre fingeren hen over hele panelet.

Samsungs `*#0*#`-menu indeholder skærm- og berøringstest på mange Galaxy-modeller. Pixel Repair Diagnostics, Motorola Device Help og Xiaomi CIT kan også teste skærm og berøring, når værktøjet er tilgængeligt på modellen.

## Test højttalere og mikrofoner

Afspil en ringetone og derefter musik eller en video, du kender godt. Lyt efter raslen, forvrængning eller en stereokanal, der er meget svagere end den anden. Dæk én højttaler ad gangen med en finger for at skelne ørehøjttaleren fra højttaleren i bunden på telefoner med stereo.

Optag et kort stemmeklip fra cirka en armslængde, og afspil det. Test derefter et rigtigt opkald. Opkaldslyd bruger støjreduktion og netværksbehandling, så en optagelse kan lyde fin, selv om opkald stadig lyder dårligt.

Før du giver hardwaren skylden, skal du fjerne coveret, afbryde Bluetooth-enheder, rense højttaler- og mikrofonåbninger med en tør, blød børste og kontrollere mikrofontilladelsen for den app, du tester.

## Test kameraerne

Åbn kameraappen, og test alle kameraer på telefonen: hovedkamera, ultravidvinkel, telekamera, makro hvis det findes, og frontkamera. Se efter fokus, der hele tiden søger, faste uskarpe områder, farvestik, rystelser i video eller kliklyde, når fokus ændres.

Optisk billedstabilisering kan blive beskadiget efter et fald. Symptomet er ofte tydeligt: Video ryster, selv når dine hænder er rolige, eller kameraet laver en summende lyd. Software kan påvirke billedbehandlingen, men den kan ikke reparere et fysisk løst stabiliseringsmodul.

## Test opladning og porte

Brug et kabel og en oplader, som du ved virker, før du giver telefonen skylden. Det lyder banalt, men overraskende mange "defekte USB-C-porte" viser sig at være dårlige kabler.

Undersøg porten med en lampe. Lommefnug kan blive presset ned i bunden og forhindre stikket i at gå helt i. Brug forsigtigt en tandstik af træ eller plast eller luft med lavt tryk. Skrab ikke kontakterne med metal.

Hvis telefonen kun oplader i en bestemt vinkel, afbryder forbindelsen, når den flyttes, eller nægter dataoverførsel med flere forskellige kabler, kan porten eller det nederste printkort kræve reparation.

## Test sensorerne

Sensorfejl viser sig som meget specifikke problemer: Automatisk rotation stopper, skærmen forbliver tændt under opkald, kompasset peger forkert, eller automatisk lysstyrke reagerer for kraftigt.

Til accelerometer og gyroskop skal du slå rotationslåsen fra og dreje telefonen langsomt. Skærmen bør følge bevægelsen uden problemer. Et panoramabillede er også en rimelig gyroskoptest, fordi sammensætningen afhænger af bevægelsessporing.

Til nærhedssensoren skal du foretage et opkald og dække toppen af skærmen nær ørehøjttaleren. Skærmen bør slukke og tænde igen, når du fjerner hånden. Fjern cover og skærmbeskytter, før du konkluderer, at sensoren er defekt.

Til lyssensoren skal du slå automatisk lysstyrke til og bevæge dig mellem et lyst og et mørkt område. Skærmen bør tilpasse sig inden for nogle sekunder.

Til magnetometeret skal du åbne Maps eller en kompasapp udenfor og holde afstand til biler, bærbare computere, magneter og metalborde. Hvis retningen er forkert, kan du kalibrere med en bevægelse som et ottetal.

Samsungs `*#0*#`-menu og Samsung Members kan teste sensorer. Pixel Repair Diagnostics, Motorola Device Help og Xiaomi CIT kan også dække dem, afhængigt af model.

## Test netværkshardwaren

Antenne- og radiofejl er sværere at bevise, fordi mobilnettet ændrer sig hele tiden. Sammenlign med en anden telefon på samme netværk, samme sted og samme tidspunkt.

Signalstyrke vises ofte i dBm under status- eller SIM-oplysninger. Skalaen er negativ, så et tal tættere på nul er bedre. Omkring -50 dBm er fremragende. Omkring -90 dBm er brugbart. Omkring -110 dBm eller svagere er dårligt. Tallene betyder ikke helt det samme for LTE, 5G og Wi-Fi, så brug dem som sammenligningsværktøj, ikke som en universel bestået eller ikke bestået grænse.

Hvis telefonen mister Wi-Fi, mens alle andre enheder forbliver forbundet, skal du teste tæt på routeren, på et andet Wi-Fi-netværk og med Bluetooth slået fra. Hvis den samme telefon fejler overalt, er radiohardware eller firmware mere sandsynlig.

runcheck hjælper her, fordi appen samler data om batteri, temperatur, netværk, lagerplads og hastighedstest i én gennemgang. Det er nyttigt efter fald, kraftig varme eller fugt, hvor flere symptomer kan overlappe.

## Hvornår bør du reparere?

En reparation giver mening, når problemet kan gentages, fortsætter i sikker tilstand, overlever en ren nulstilling og også optræder i producentens diagnoseværktøj eller en manuel test.

Udskift ikke dele, fordi én app opførte sig dårligt én gang. Få derimod telefonen repareret, hvis batteriet er opsvulmet, opladningsporten fysisk sidder løst, berøring svigter samme sted hver gang, kameraet summer efter et fald, eller mikrofonerne fejler både i optagelser og opkald.

## Almindelige spørgsmål

### Er diagnosekoder sikre?

De almindelige testmenuer i denne guide er hovedsageligt skrivebeskyttede oplysninger eller interaktive hardwarekontroller. Indtast alligevel ikke tilfældige koder fra nettet. Nogle producentkoder kan ændre radioindstillinger eller starte servicefunktioner.

### Hvorfor virker `*#*#4636#*#*` ikke?

Koden er ikke standardiseret på tværs af Android. Den virker på mange telefoner med næsten ren Android, men kan være deaktiveret af Samsung, et mobilselskab eller producentens firmware.

### Hvor ofte bør jeg teste hardwaren?

Hver tredje eller fjerde måned er rigeligt til almindelig vedligeholdelse. Test straks efter et hårdt fald, fugt, pludselig batteriafladning, opladningsproblemer eller før køb eller salg af en brugt telefon.

### Er en langsom telefon altid et hardwareproblem?

Nej. Begynd med sikker tilstand, ledig lagerplads, appopdateringer og de seneste systemopdateringer. Hvis langsomheden fortsætter efter en nulstilling til fabriksindstillinger, bør du undersøge hardware, slitage på flashlageret, et svagt batteri eller termisk begrænsning nærmere.
