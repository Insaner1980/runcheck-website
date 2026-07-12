---
title: "Hvad er en nærhedssensor, og hvorfor er den vigtig?"
description: "Sådan fungerer nærhedssensoren i din Android-telefon, hvorfor opkald opfører sig mærkeligt, når den svigter, og hvordan du tester og løser almindelige sensorproblemer."
listSummary: "diagnostik, sensorer og android"
hub: "hardware"
sourceNumber: 117
order: 14
tags: ["diagnostik","sensorer","android","hardware","guide"]
locale: "da"
draft: false
---
Midt i et opkald vågner skærmen mod dit ansigt, og din kind åbner tastaturet. Det skyldes som regel, at denne lille sensor svigter i den ene opgave, som ingen lægger mærke til, før den holder op med at virke.

Sensoren fortæller telefonen, når noget er tæt på frontglasset. Under et opkald er det "noget" normalt dit ansigt. Android slukker derefter skærmen og ignorerer berøringer, så dit øre ikke bliver et tilbehør til touchskærmen.

## Sådan fungerer den

De fleste Android-telefoner bruger en infrarød nærhedssensor tæt på ørehøjttaleren eller frontkameraet. Den udsender infrarødt lys og måler, hvor meget der reflekteres tilbage. Hvis der kommer nok lys retur, vurderer telefonen, at et objekt er tæt på. Når refleksionen falder, melder sensoren, at objektet er langt væk igen.

Androids egen sensordokumentation er lidt mere fleksibel, end mange forventer. De fleste nærhedssensorer returnerer en afstand i centimeter, men nogle viser kun nær og fjern. Til normal opkaldsadfærd er nær og fjern alt, Android reelt behøver.

Nogle telefoner bruger ikke længere en separat infrarød komponent på den gamle, synlige måde. De kan i stedet benytte sensorer under skærmen eller virtuel nærhedsregistrering, der kombinerer andre sensorer og software. Det sparer plads ved den øverste skærmkant, men kan gøre systemet mere følsomt over for skærmbeskyttere, snavs, glasskader og fejl i firmwaren.

## Hvor sidder den?

På ældre telefoner med en synlig øvre skærmkant sidder den som regel ved siden af ørehøjttaleren, frontkameraet og sensoren for omgivende lys. Du kan måske ikke se den, fordi den ligger bag et mørkt felt i glasset.

På nyere telefoner med kamerahul og næsten ingen ramme kan sensoren sidde under skærmen eller bag et mindre tydeligt område af frontglasset. Derfor er den præcise placering sværere at gætte. Hvis du tester med hånden, så dæk først området omkring ørehøjttaleren og frontkameraet.

## Tegn på en defekt nærhedssensor

Skærmen forbliver tændt under opkald. Det er det klassiske symptom. Du holder telefonen mod øret, og din kind begynder at trykke på knapper.

Skærmen forbliver sort, når du flytter telefonen væk. Du afslutter et opkald og må trykke på tænd/sluk-knappen, fordi skærmen ikke vågner af sig selv.

Skærmen slukker, mens du bruger telefonen. Det kan ske, hvis sensoren sidder fast i nær-tilstanden, fordi noget blokerer den.

Berøringer i lommen bliver et større problem. Sensoren er ikke telefonens eneste forsvar mod utilsigtede tryk, men hvis den konstant aflæser forkert, bliver de mere sandsynlige.

## Hurtig test under et opkald

Ring til din telefonsvarer eller et andet nummer, hvor du ikke generer nogen. Dæk området ved ørehøjttaleren med håndfladen under opkaldet.

Skærmen bør slukke hurtigt. Fjern hånden, og den bør tænde igen inden for cirka ét sekund. Hvis det tager flere sekunder, hvis skærmen ikke reagerer, eller hvis den blinker mellem tændt og slukket, kræver sensoren opmærksomhed.

Enkelt. Irriterende nyttigt.

## Bedre diagnosetest

På Samsung Galaxy-telefoner kan du prøve `*#0*#` i den indbyggede Telefon-app og se efter sensortesten. Åbn Samsung Members, og vælg Diagnostik. Det er den mere brugervenlige vej og bør være dit første valg, hvis du ikke bryder dig om servicemenuer.

På Xiaomi-, Redmi- og POCO-telefoner kan du indtaste `*#*#6484#*#*` eller `*#*#64663#*#*` for at åbne CIT-tilstand. Xiaomis supportsider anbefaler også, at du fjerner cover og skærmbeskytter, rengør telefonens øverste kant, opdaterer softwaren og bruger hardwaretesten, når touch- eller sensorfunktioner opfører sig forkert.

På andre Android-telefoner kan du bruge Sensor Test, Sensors Multitool eller DevCheck. Åbn aflæsningen for nærhedssensoren, bevæg hånden over telefonens øverste del, og se, om værdien ændrer sig. Nogle telefoner viser centimeter. Andre skifter mellem 0 og en maksimumværdi, hvilket bare betyder nær og fjern.

Hvis værdien aldrig ændrer sig, er sensoren blokeret, deaktiveret, dårligt kalibreret eller defekt.

Nogle ældre vejledninger anbefaler Proximity Sensor Reset. Jeg ville ikke vælge det som første skridt. Brug det først efter de grundlæggende kontroller, og forvent ikke, at en tredjepartsapp til kalibrering kan reparere en sensor, som telefonen slet ikke kan aflæse.

## Løs de almindelige problemer først

Rengør skærmens øverste del. Fingerfedt, støv, makeup, fnuller og indtørrede rester kan blokere sensorvinduet. Brug en ren mikrofiberklud, og vær særlig grundig omkring ørehøjttaleren.

Fjern skærmbeskytteren. Det er den hyppigste årsag på telefoner med en skjult nærhedssensor eller en sensor under skærmen. Beskytteren kan være for tyk, for mørk omkring sensorområdet eller en smule skævt monteret. Test telefonen uden beskytter, før du giver bundkortet skylden.

Fjern coveret. Klapcovers, høje kanter og dårligt udskårne covers kan forstyrre området øverst på skærmen.

Genstart telefonen. Sensordrivere kan gå i stå, især efter lang tids drift eller lige efter en systemopdatering.

Opdater softwaren. Nærhedsregistrering afhænger delvist af firmwaren. En større platformopdatering, som Android 17 først på understøttede Pixel-enheder og senere Android 17-versioner fra andre OEM-producenter, kan ændre sensorens adfærd, fordi producentens hardwarelag styrer den.

Tjek opkaldsindstillingerne. Nogle Xiaomi-versioner viser en indstilling for nærhedsregistrering under opkaldsindstillinger. Den præcise sti varierer, men ældre MIUI-versioner brugte Settings > Apps > System app settings > Call settings > Incoming call settings > Proximity sensor.

## Kalibrering og virtuelle sensorer

Nogle diagnosemenuer indeholder kalibrering af nærhedssensoren. Xiaomi CIT og ældre OnePlus-fabrikstilstande er de typiske eksempler. Kør kun kalibrering, når menuen tydeligt tilbyder den, og telefonen ligger fladt, er ren og ikke er dækket til.

Virtuelle nærhedssensorer er mere besværlige. Hvis telefonen beregner nærhed med software, findes der måske ingen fysisk del, der kan udskiftes. I så fald betyder firmwareopdateringer mere end reparation. En nulstilling til fabriksindstillinger kan rydde en fejlbehæftet kalibreringstilstand, men den bør være sidste udvej efter en sikkerhedskopi.

## Når problemet er hardware

Hvis sensorværdien stadig aldrig ændrer sig i diagnosen efter rengøring, fjernelse af tilbehør, genstart, opdatering og test i sikker tilstand, er en hardwarefejl sandsynlig.

Et fald kan beskadige sensorområdet eller flytte skærmen. Vand kan korrodere sensoren eller flekskablet. En reparation kan efterlade et stik løst eller dække sensoren med forkert lim. Ingen af delene bliver løst af endnu en sensorapp.

Når telefonen har en separat infrarød nærhedssensor, er selve komponenten lille, men arbejdslønnen bestemmer ofte reparationsprisen. På telefoner med skjult eller skærmintegreret registrering kan reparationen være knyttet til hele skærmmodulet.

Hvis en reparation ikke kan betale sig, kan du stadig omgå problemet. Brug tænd/sluk-knappen til at vække skærmen under opkald, slå beskyttelse mod utilsigtede berøringer til, hvis telefonen har funktionen, og undgå klapcovers, der dækker sensorområdet. Det er ikke perfekt, men telefonen kan stadig bruges.
