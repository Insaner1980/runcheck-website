---
title: "Sådan nulstiller du app-præferencer på Android"
description: "At nulstille app-præferencer lyder, som om noget vigtigt bliver slettet. Det gør der ikke. Det er en af Androids sikrere fejlfindingsmuligheder, og den løser flere mærkelige appproblemer, end mange regner med."
listSummary: "At nulstille app-præferencer lyder, som om noget vigtigt bliver slettet."
hub: "software"
sourceNumber: 128
order: 10
tags: ["sikkerhed","malware","android","privatliv","guide"]
locale: "da"
draft: false
---
Problemet er navnet. Funktionen nulstiller ikke dine apps. Den nulstiller telefonens apprelaterede valg omkring tilladelser, standardapps, notifikationer, baggrundsadfærd og deaktiverede apps. Dine billeder, beskeder, filer, gemte konti og appdata bliver liggende.

## Hvad den nulstiller

Bekræftelsesdialogen i Androids app Indstillinger har i årevis vist de samme kernepunkter: deaktiverede apps, deaktiverede appnotifikationer, standardapps til handlinger, begrænsninger for baggrundsdata og tilladelsesbegrænsninger. På aktuelle Android-versioner kan dialogen også nævne indstillinger for batteriforbrug, så bliv ikke overrasket, hvis din telefon har en ekstra linje om det.

I praksis betyder det, at følgende kan ændre sig:

- Apps, du har deaktiveret, kan blive slået til igen. Det gælder også visse forudinstallerede apps og systemapps, som du selv har slået fra.
- Valg af standardapps bliver ryddet. Links, PDF-filer, startskærme, telefonopkald, SMS og lignende handlinger kan igen spørge, hvilken app du vil bruge.
- Blokeringer af appnotifikationer nulstilles. Apps, du har gjort lydløse, kan begynde at sende notifikationer igen, indtil du slår dem fra.
- Begrænsninger for baggrundsdata fjernes. Apps, du har forhindret i at bruge mobildata i baggrunden, kan få adgangen tilbage.
- Tilladelsesbegrænsninger nulstilles. Apps kan igen bede om kamera, mikrofon, lokation, billeder, notifikationer eller adgang til enheder i nærheden, når de skal bruge det.
- Begrænsninger for batteriforbrug kan blive nulstillet på Android-versioner og producenttilpasninger, der medtager dem i denne nulstilling.

Det, funktionen ikke gør, er mindst lige så vigtigt. Den afinstallerer ikke apps, sletter ikke appdata, fjerner ikke filer eller billeder, rydder ikke beskeder eller downloads og logger dig ikke ud af alle tjenester. Hvis du var logget ind i WhatsApp, Instagram, en bankapp eller Gmail før nulstillingen, er selve nulstillingen ikke beregnet til at logge dig ud.

Det er hele pointen. Det er en bred nulstilling af indstillinger, ikke en sletning af data.

## Hvornår det er værd at prøve

Brug nulstilling af app-præferencer, når problemet virker systemomfattende, men ikke alvorligt nok til en nulstilling til fabriksindstillinger.

Et almindeligt eksempel er håndtering af links. Du trykker på et link, og det åbner i den forkerte browser, i en app du ikke bruger, eller slet ikke. Det kan løses ved at rydde standardvalget for én app, men en nulstilling af alle app-præferencer er hurtigere, hvis standarderne er blevet filtret sammen.

Det er også nyttigt, hvis du har deaktiveret en håndfuld forudinstallerede apps, og noget derefter begynder at gå i stykker. Android-apps er ofte afhængige af kedelige baggrundskomponenter med navne, ingen genkender. Du deaktiverer én, en anden app går ned, og sammenhængen er ikke tydelig. Nulstilling af app-præferencer aktiverer de deaktiverede apps igen, så du kan teste, om det var årsagen.

Notifikationer er et andet godt eksempel. Androids notifikationssystem har fået flere indstillinger pr. app gennem årene, herunder en kørselstilladelse til notifikationer på nyere versioner. Hvis én app er holdt op med at give besked, så ret den app direkte. Hvis flere apps stopper samtidig efter en opdatering, er en samlet nulstilling et rimeligt mellemtrin.

Jeg ville ikke bruge det som rutinemæssig vedligeholdelse. Der er ingen fordel ved at nulstille præferencer hver måned. Brug funktionen, når noget faktisk er gået i stykker.

## Sådan nulstiller du app-præferencer

Stien varierer lidt mellem Pixel, Samsung, Xiaomi, Motorola, OnePlus og andre Android-varianter. Muligheden ligger som regel i nærheden af skærmen Apps.

På mange Pixel-lignende Android-telefoner åbner du Indstillinger, vælger Apps og derefter Se alle apps. Åbn menuen med de tre prikker øverst til højre, vælg Nulstil app-præferencer, og bekræft nulstillingen.

På Samsung Galaxy-telefoner åbner du Indstillinger og derefter Apps. Åbn menuen med de tre prikker, og vælg muligheden for at nulstille app-præferencer. Samsungs ordlyd og placering kan ændre sig mellem One UI-versioner, men Apps er stadig det rigtige sted at begynde.

På Xiaomi-, Redmi- og POCO-telefoner kan du prøve Indstillinger, Apps og derefter administration af apps. Nulstillingen ligger som regel bag menuen med de tre prikker.

Hvis du ikke kan finde den, så brug søgefeltet i Indstillinger og søg efter "app-præferencer". Nogle Android-varianter placerer funktionen under System og nulstillingsmuligheder, især på telefoner, hvor Apps-skærmen er blevet redesignet.

Nulstillingen træder i kraft med det samme. Du behøver ikke genstarte, men en genstart bagefter skader ikke, hvis du forsøger at løse et genstridigt problem.

## Hvad sker der bagefter?

I den næste dag eller to kan telefonen stille flere spørgsmål end normalt. Tryk på et link, og Android kan spørge, hvilken browser du vil bruge. Åbn en PDF-fil, og den kan spørge, om den skal åbnes i Drive, Acrobat, din browser eller en anden app. Åbn en app, der skal bruge kameraet eller din lokation, og du kan få en ny tilladelsesforespørgsel.

Det er normalt.

Det irriterende er, at du skal genskabe de valg, du med vilje havde foretaget. Hvis du havde deaktiveret operatørapps, ekstra galleriapps, flere browsere eller andet bloatware, skal du gå tilbage til Indstillinger og Apps og deaktivere dem igen. Hvis du havde stramme notifikationsregler, så gennemgå de apps, der betyder noget. Hvis du begrænser mobildata for sociale apps eller videoapps, bør du også kontrollere de indstillinger igen.

Derfor er nulstilling af app-præferencer sikker, men ikke usynlig. Den ødelægger ikke dine data, men den gør noget af dit tidligere arbejde om.

## Sammenlignet med andre nulstillinger

Rydning af en apps cache fjerner midlertidige filer for én app. Prøv det, når en enkelt app er langsom, har fejl eller viser gammelt indhold.

Rydning af appens lagerplads er et stærkere indgreb. Det nulstiller appens interne data og kan derfor logge dig ud eller fjerne lokale indstillinger. Brug det med omtanke.

Nulstilling af app-præferencer ligger midt imellem. Den påvirker alle apps, men kun deres indstillinger på systemniveau. Derfor er den nyttig, når telefonen har flere små appproblemer, og du ikke kan finde én tydelig årsag.

En nulstilling til fabriksindstillinger er noget andet. Den sletter telefonen og starter forfra med den Android-version, der allerede er installeret. Gå ikke direkte dertil, bare fordi links åbner det forkerte sted.

## Almindelige spørgsmål

Logger det mig ud af apps? Nej, ikke i sig selv. Funktionen rydder ikke appens lagerplads eller kontodata.

Kan det løse batteridræn? Nogle gange indirekte. Hvis en deaktiveret systemapp eller en for stram tilladelsesbegrænsning fik apps til at forsøge baggrundsarbejde igen og igen, kan nulstillingen hjælpe. Hvis batteriet er slidt, eller en app reelt bruger meget strøm, løser den det ikke på magisk vis.

Skal jeg give tilladelser igen? Ja, for nogle apps. De kan spørge igen, når de har brug for adgang.

Bør jeg gøre det før en nulstilling til fabriksindstillinger? Ja, hvis problemet handler om appadfærd og ikke om en låst telefon, alvorlig beskadigelse af systemet eller hardwarefejl. Det tager et øjeblik og sletter ikke dit digitale liv.
