---
title: "Hvad wake locks er, og hvordan de dræner batteriet"
description: "Wake locks lader Android-apps holde processoren vågen, efter at skærmen er slukket. Hvis de bruges dårligt, kan de forhindre telefonen i at gå i strømbesparende hvile og give et højt batteriforbrug i standby."
listSummary: "Wake locks lader Android-apps holde processoren vågen, efter at skærmen er slukket."
hub: "battery"
sourceNumber: 35
order: 25
subgroup: "Drain"
tags: ["batteri","strømforbrug","fejlfinding","android","ydeevne"]
locale: "da"
draft: false
---
Du sover. Telefonens skærm er slukket. Intet afspilles, intet downloades, og batteriet falder alligevel 18 % i løbet af natten.

Det er den slags batteriforbrug, wake locks kan forårsage. En wake lock-anmodning holder en del af enheden vågen, selv om Android ellers ville lade den sove. Det mest almindelige batteriproblem er en partial wake lock, som holder processoren i gang, mens skærmen forbliver slukket.

Wake locks er ikke automatisk dårlige. En musikapp har brug for en lås for at fortsætte afspilningen. En navigationsapp kan have brug for en under en aktiv tur. En upload, som brugeren selv har startet, kan være nødt til at blive færdig i stedet for at stoppe halvvejs. Problemet begynder, når en app holder en lås for længe, anmoder om den for ofte eller undlader at frigive den, når arbejdet er afsluttet.

## Sådan fungerer wake locks

Når skærmen slukker, prøver Android at suspendere CPU'en og lade telefonen gå i strømbesparende tilstande. Hvis en app stadig har arbejde, der skal fortsætte, kan den oprette en wake lock via Androids PowerManager-API. Når arbejdet er færdigt, frigiver appen låsen, og telefonen kan sove igen.

Det er i overgangen, tingene går galt.

En app kan starte en synkronisering i baggrunden, ramme en netværkstimeout og undlade at rydde korrekt op. En anden app kan kontakte en server med få minutters mellemrum i stedet for at bruge push-notifikationer. En fitnessapp kan holde sensorer og databehandling aktive længere end nødvendigt. For brugeren ser telefonen inaktiv ud. Indeni er den slet ikke inaktiv.

Siden 1. marts 2026 har dette også haft større betydning for udviklere. Google Play kan reducere synligheden af apps, der overskrider Android vitals-grænsen for overdreven brug af partial wake locks. Android vitals regner partial wake locks, der ikke er undtaget, som overdrevne, når de tilsammen er aktive i 2 timer eller mere i løbet af 24 timer, og problemet rammer mere end 5 % af appens sessioner målt over 28 dage.

## Hvorfor batteriforbrug fra wake locks er svært at opdage

Batteriforbruget gemmer sig ofte bag systembetegnelser. Batteriskærmen kan vise **Android System**, Google-tjenester eller uklar baggrundsbrug i stedet for at navngive den wake lock, der skabte problemet.

Begynd alligevel med det grundlæggende. Gå til **Indstillinger > Batteri > Batteriforbrug**, og tjek, hvilke apps der har brugt strøm i baggrunden. På nyere Pixel-versioner kan du vælge en app og åbne **Batteriforbrug for apps**. På Samsung skal du tjekke **Indstillinger > Batteri**, gennemgå appforbruget og se under **Grænser for baggrundsforbrug**.

Hvis telefonen mister meget strøm med slukket skærm, uden at batteriskærmen viser en oplagt app, bliver wake locks en mere sandsynlig forklaring.

Den gamle opkaldskode `*#*#4636#*#*` er ikke længere en pålidelig løsning. Den virker på nogle Android-telefoner, gør ingenting på andre og viser ofte ikke nyttige batterioplysninger på nyere Samsung- og Xiaomi-enheder. Jeg ville ikke bygge en fejlsøgningsproces op omkring den.

Brug ADB til en dybere undersøgelse. `adb shell dumpsys batterystats` kan vise historik for wake locks og den tid, enheden blev holdt vågen, men resultatet er ikke let at læse. Værktøjer som BetterBatteryStats og GSam Battery Monitor kan hjælpe, men mange avancerede batteriværktøjer kræver tilladelser via ADB eller ekstra opsætning på moderne Android. Hvis en app lover øjeblikkelige batterimirakler uden tilladelser og uden data, bør du være skeptisk.

## Almindelige årsager til wake locks

Google Play services får ofte skylden, fordi tjenesten håndterer meget: lokation, push-beskeder, kontosynkronisering, tjenester i nærheden, sikkerhedstjek og mere. En vis mængde wake lock-tid fra tjenesten er normal. Ukontrolleret batteriforbrug efter en systemopdatering, ødelagt synkronisering eller en beskadiget cache er det ikke.

Sociale apps kan også være støjende. De opdaterer feeds, uploader analysedata, synkroniserer beskeder, opdaterer widgets og holder notifikationssystemer i gang. En social app, du åbner to gange om ugen, fortjener ikke ubegrænset adgang i baggrunden.

Mailapps er en anden mulighed. Push-mail er normalt fint. Polling med få minutters mellemrum er spild, især på tværs af flere konti.

VPN'er, musikapps, navigationsapps og aktivitetstrackere er anderledes. Deres wake locks kan være forventelige, fordi brugeren har bedt dem om at fortsætte med noget. Det rigtige spørgsmål er ikke: "Holder denne app telefonen vågen?" Det er: "Bliver den ved med at gøre det, når jeg ikke aktivt bruger dens kernefunktion?"

## Hvad du kan gøre

Begræns baggrundsadgang for apps, der ikke har brug for den. På nyere Pixel-versioner går du til **Indstillinger > Apps > [appnavn] > Batteriforbrug for apps > Tillad brug i baggrunden** og begrænser appen efter behov. På Samsung bruger du **Sovende apps** eller **Dybt sovende apps** under **Grænser for baggrundsforbrug**.

Begræns ikke apps, der har brug for baggrundsadfærd i realtid. Beskedapps, VPN, sundhedsapps, navigation, nødapps og arbejdskritiske apps kan gå i stykker på diskrete måder, hvis du fryser dem for hårdt.

Begynd forsigtigt med den pågældende tjeneste. Genstart telefonen. Tjek efter Google Play-systemopdateringer og appopdateringer. Hvis forbruget fortsætter, kan du rydde cachen for Google Play-tjenester under **Indstillinger > Apps > Google Play-tjenester > Lagerplads og cache > Ryd cache**. Undgå at rydde alle data, medmindre du ved, hvad det påvirker, fordi det kan nulstille lokal tjenestetilstand og midlertidigt skabe ekstra synkronisering.

Hvis problemet begyndte lige efter en Android 17-opdatering, så giv telefonen en dag eller to, før du konkluderer noget. Pixel-telefoner fik Android 17 først, og telefoner udfører ofte ekstra indeksering, appoptimering og oprydning efter en stor systemopdatering. Vedvarende batteriforbrug efter flere dage er noget andet.

## Sådan ændrer Doze billedet

Doze hjælper med at begrænse skaden fra wake locks under dyb inaktivitet. Mens enheden er i Doze, ignorerer Android wake locks i de begrænsede faser og tillader hovedsageligt arbejde i vedligeholdelsesvinduer.

Men Doze er ikke magisk. Apps, der er undtaget fra batterioptimering, får mere frihed. Forgrundstjenester kan fortsat udføre arbejde. Producenternes batterilag kan opføre sig forskelligt. Og hvis telefonen aldrig falder til ro på grund af bevægelse, signalproblemer eller gentagen baggrundsaktivitet, får du ikke den fulde fordel.

Derfor er batteriforbruget om natten et så nyttigt spor. Hvis telefonen ligger stille i syv timer og mister 4 %, har du sandsynligvis ikke et stort problem med wake locks. Hvis den mister 20 % med slukket skærm og uden aktiv medieafspilning, holder noget den vågen eller tvinger radioen til at arbejde.

runcheck er bygget til den slags mønstergenkendelse. Batteriforbrug med slukket skærm, dyb hvile, signalstyrke og temperatur fortæller tilsammen en langt klarere historie end Androids almindelige batterivisning gør alene.

## Et par spørgsmål, der er værd at besvare

Kan en wake lock holde skærmen tændt? Partial wake locks gør ikke. De holder CPU'en i gang, mens skærmen forbliver slukket. Ældre typer wake locks til skærmen findes stadig, men moderne Android-apps er kraftigt begrænset på det område. Det meste skjulte batteriforbrug kommer fra partial wake locks, der holder CPU'en vågen.

Er en vis wake lock-aktivitet normal? Ja. Selv en Android-telefon, der fungerer normalt, har korte wake locks fra systemtjenester, push-beskeder, ændringer i forbindelsen og planlagt arbejde. Minutter er normalt. Timer under inaktiv brug er det ikke.

Kan en nulstilling til fabriksindstillinger løse problemet? Nogle gange. Den kan fjerne dårlig apptilstand, ødelagt synkronisering og rester efter rodede opdateringer. Det er også et groft værktøj. Begræns mistænkelige apps, opdater alt, ryd cache, hvor det er relevant, og bekræft mønsteret, før du sletter alle data på telefonen.
