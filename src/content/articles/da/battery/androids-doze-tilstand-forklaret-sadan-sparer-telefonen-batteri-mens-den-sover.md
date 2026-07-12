---
title: "Androids Doze-tilstand forklaret: sådan sparer telefonen batteri, mens den sover"
description: "Androids Doze-tilstand reducerer batteriforbruget i standby ved at udskyde baggrundsarbejde, når telefonen er inaktiv. Her kan du se, hvad den begrænser, hvorfor notifikationer kan komme for sent, og hvornår en app bør undtages."
listSummary: "batteri, optimering og android"
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Drain"
tags: ["batteri","optimering","android","tips","ydeevne"]
locale: "da"
draft: false
---
Hvorfor kom der ti notifikationer i samme øjeblik, som du tog telefonen op? Ofte er svaret Doze.

Doze er Androids indbyggede system til inaktivitet. Du slår det ikke selv til, og de fleste ser aldrig en Doze-skærm i Indstillinger. Det arbejder stille, når telefonen ikke er tilsluttet strøm, skærmen er slukket, og Android vurderer, at enheden ikke længere skal lade alle apps køre, når de har lyst.

Android 17 er nu den aktuelle platformversion på de fleste understøttede Pixel-enheder, mens andre producenter følger efter deres egne tidsplaner. Det ændrer ikke de grundlæggende råd om Doze. Det, der betyder noget for brugeren, er stadig færre opvågninger i baggrunden, længere standbytid og nogle gange forsinkede notifikationer, der ikke haster.

## Hvad Doze gør

Når Doze er aktiv, begrænser Android de dyre aktiviteter. Apps mister normal netværksadgang. Almindelige alarmer udskydes. Jobs og synkronisering må vente. Wake locks ignoreres i de dybe dele af inaktivitetscyklussen. Wi-Fi-scanning stopper også under Doze.

Enheden er ikke frosset for altid. Android åbner korte vedligeholdelsesvinduer, hvor det udskudte arbejde kan køre samlet. Apps synkroniserer, opgaver i kø udføres, og notifikationer med normal prioritet kan blive vist. Derefter sender Android enheden tilbage i hvile.

Det er hele tricket. Det kræver langt mindre strøm at samle baggrundsarbejdet i grupper end at lade hver app vække CPU'en og radioen, når den selv har lyst.

## Hvornår Doze aktiveres

Doze kom første gang i Android 6.0 (API 23). Den oprindelige version krævede, at enheden ikke var tilsluttet strøm, lå stille og havde haft slukket skærm i et stykke tid. Android 7.0 tilføjede den lettere variant, der ofte kaldes "Doze on the go". Den indfører et mildere sæt begrænsninger, når telefonen ikke oplades, og skærmen har været slukket, selv om den bevæger sig i din lomme.

I praksis får moderne Android-telefoner normalt hjælp på to niveauer. De får lettere begrænsninger, mens du bærer dem, og dybere begrænsninger, når enheden har ligget stille et stykke tid.

Producentens software kan gøre det mere rodet. Pixel-telefoner ligger ofte tæt på Googles referenceadfærd. Samsung, Xiaomi, OnePlus, Oppo og andre lægger deres egne batteristyringslag ovenpå. Nogle gange hjælper det. Andre gange er styringen for aggressiv og ødelægger notifikationer.

## Hvad der bliver forsinket

Den mest synlige forsinkelse rammer synkronisering i baggrunden. Mail bliver måske ikke tjekket så ofte. En noteapp synkroniserer senere. En vejrwidget opdateres måske først i næste vedligeholdelsesvindue i stedet for med det samme.

Arbejde, som udviklere har planlagt, bliver også påvirket. Opgaver fra `JobScheduler` og `WorkManager` venter som regel, mens Doze er aktiv. Almindelige `AlarmManager`-alarmer udskydes også, mens alarmure, som brugeren selv har indstillet, stadig udløses til tiden.

Opkald og sms er ikke beregnet til at vente på et vedligeholdelsesvindue. Firebase Cloud Messaging-notifikationer (FCM) med høj prioritet kan også vække en app kortvarigt, så den kan vise en tidskritisk notifikation. Derfor kommer beskeder fra WhatsApp, Signal, Telegram og lignende apps som regel stadig med det samme, hvis appen og producentens batteriindstillinger er konfigureret korrekt.

Push-beskeder med normal prioritet er anderledes. Hvis appen bruger dem til opdatering i baggrunden eller mindre vigtige advarsler, kan Android holde dem tilbage til det næste vedligeholdelsesvindue.

## Hvorfor notifikationer kommer for sent

Forsinkede notifikationer er ikke altid en fejl. De er ofte den afvejning, Doze er bygget til at foretage.

En reklame fra en leveringsapp, et like på sociale medier eller en nyhedsnotifikation kan godt vente nogle minutter, hvis det hjælper telefonen med at sove. En arbejdsbesked, alarm, et indgående opkald eller en sikkerhedsadvarsel bør ikke vente. Gode apps bruger den rigtige prioritet til den rigtige type besked. Dårlige apps kræver enten for høj prioritet eller er ikke integreret ordentligt med FCM og er afhængige af polling i baggrunden.

Det irriterende er, at brugeren ikke får en enkel forklaring. Du ser bare beskederne komme for sent og må arbejde baglæns for at finde årsagen.

Begynd med appens egne notifikationsindstillinger. Tjek derefter telefonens batteriindstillinger for appen. På nyere Pixel-versioner kan du åbne **Indstillinger > Apps > [appnavn] > Batteriforbrug for apps > Tillad brug i baggrunden**. På Samsung skal du tjekke **Indstillinger > Batteri > Grænser for baggrundsforbrug** og sikre dig, at appen ikke ligger under **Sovende apps** eller **Dybt sovende apps**.

## Undtag apps fra Doze

Android giver mulighed for at undtage bestemte apps fra batterioptimering. Den præcise menu varierer med Android-version og producent. På nogle telefoner findes den under en menu med særlig appadgang og **Batterioptimering**, hvor du kan vælge, at appen ikke skal optimeres. På nyere Pixel-versioner styres appens baggrundsadgang via **Batteriforbrug for apps** og **Tillad brug i baggrunden**.

Vær selektiv. Hver undtagelse giver en app mere frihed til at køre i baggrunden, og for mange undtagelser gør Doze mindre nyttig. Beskedapps, VPN'er, medicinske apps, sikkerhedsapps og visse arbejdsapps kan være rimelige kandidater. En shoppingapp er det ikke.

Google Plays politik begrænser også, hvornår apps bør bede brugeren om at blive undtaget fra Androids strømstyring. Den enkle version er, at en undtagelse bør forbeholdes apps, hvis kernefunktion ikke virker uden den.

## Sådan ser du, om Doze hjælper

Den letteste test for en almindelig bruger er batteriforbruget om natten. Oplad telefonen, tag stikket ud før sengetid, lad skærmen være slukket, og tjek faldet om morgenen. Et tab på nogle få procent i løbet af natten er normalt. Et tab på 15 % eller 25 % med slukket skærm betyder, at noget vækker telefonen for ofte, signalet er dårligt, eller batteriet er ved at være slidt.

Batterioplysningerne siger ikke altid "Doze fejlede". De kan vise Android System, Google Play services, mobilnetværk eller en uklar apppost. Derfor fortæller afladningshastigheden med slukket skærm mere end én enkelt batterigraf. Hvis en telefon mister mere end cirka 1-2 % i timen, mens den er inaktiv, er det værd at undersøge.

Udviklere kan teste Doze via ADB med `adb shell dumpsys deviceidle force-idle`, men det er et testværktøj, ikke en almindelig indstilling til daglig brug.

## Almindelige spørgsmål

Du kan ikke slå Doze fra via de normale Android-indstillinger, og du bør sandsynligvis heller ikke prøve. Funktionen er en af hovedårsagerne til, at moderne Android-telefoner kan ligge stille i timevis uden at tømme batteriet.

Doze virker også, mens telefonen ligger i lommen, men ikke altid på det dybeste niveau. Android 7.0 og nyere anvender lettere begrænsninger, mens skærmen er slukket, og enheden bevæger sig. Den dybere tilstand kræver stadig længere perioder med inaktivitet.

Alarmer fra Ur-appen udløses stadig. Det er baggrundsalarmer fra apps, der flyttes til vedligeholdelsesvinduer, medmindre de bruger API'er til alarmer, der skal køre under inaktivitet.

Hvis én enhed har værre batteriforbrug i standby end en anden, skal du ikke straks gå ud fra, at Doze er defekt. Signalstyrke, producentens batteripolitik, appudvalg, kontosynkronisering, widgets og batteriets alder kan få to Android-telefoner til at opføre sig meget forskelligt.

runcheck kan hjælpe ved at skelne mellem afladning med tændt og slukket skærm og vise, om inaktive perioder falder sammen med netværksaktivitet, varme eller baggrundsaktivitet. Det er langt mere nyttigt end at gætte ud fra ét procentfald i løbet af natten.
