---
title: "Sådan gør du en gammel Android-telefon hurtigere"
description: "De fleste gamle Android-telefoner bliver ikke langsomme, fordi processoren har glemt, hvordan den skal være hurtig. Silicium ældes ikke som et batteri. Det, der ændrer sig, er belastningen omkring den: tungere apps, mindre ledig lagerplads, større billedbiblioteker, baggrundstjenester, slidte batterier og nyere Android-funktioner, som forventer mere RAM, end en billig telefon havde ved lanceringen."
listSummary: "ydeevne, hastighed og android"
hub: "performance"
sourceNumber: 65
order: 2
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
Løsningen er derfor praktisk. Fjern presset fra telefonen, før du antager, at hardwaren er færdig.

## Frigør lagerplads først

Begynd med `Indstillinger > Lagerplads`. Hvis telefonen er mere end 85 % fuld, er det det første, du skal løse. Lad være med at justere animationer, installere en renseapp eller give Android skylden endnu. Frigør plads.

Billeder og videoer giver som regel den største gevinst. Sikkerhedskopiér dem til Google Photos, OneDrive, en computer eller en anden lagertjeneste, og slet derefter de lokale kopier, du ikke behøver på telefonen. Kontroller, at sikkerhedskopien er færdig, før du sletter noget.

Åbn derefter mappen Downloads. Gamle APK-filer, PDF'er, screenshots, memes, eksporterede videoer, ZIP-filer og tilfældige vedhæftede filer kan samle sig gennem flere år. Det er kedelig oprydning, men det virker.

Afinstaller apps, du ikke har åbnet i flere måneder. Hver installeret app bruger lagerplads, og mange planlægger også baggrundsopgaver. Du behøver ikke seks flyselskabsapps, tre gamle launchere og en app til en smartpære, du ikke længere ejer.

Ryd cachen i udvalgte apps. Browsere, sociale apps, streamingapps og kort kan gemme store caches. Når du rydder cache, sletter du ikke din konto, men næste opstart af appen kan blive langsommere, mens cachen bygges op igen. Det er fint. Du bytter gammelt rod for ledig plads.

## Erstat tunge apps med lettere vaner

Nogle apps er simpelthen for tunge til ældre hardware. Sociale medier, shoppingapps, apps med korte videoer og store browsere kan bruge meget RAM og vågne ofte i baggrunden. På en telefon med 3 GB eller 4 GB RAM efterlader det meget lidt plads til Android.

Brug lettere versioner, hvor de findes. Facebook Lite og Google Go-apps er gode eksempler, selv om tilgængeligheden varierer efter land og enhed. En webgenvej kan også være nok til tjenester, du kun bruger en gang imellem. Åbn websitet i browseren, føj det til startskærmen, og slet den fulde app.

Selve browseren betyder mindre end dine vaner. Tyve åbne faner vil belaste næsten enhver gammel telefon. Fem faner og en ryddet Downloads-mappe er lettere at leve med.

Nej, det tæller ikke som vedligeholdelse at rydde cache én gang om året.

## Reducer animationerne

Det er den hurtigste ændring, hvor du mærker effekten med det samme.

Aktivér Udviklerindstillinger ved at åbne `Indstillinger > Om telefonen` og trykke syv gange på `Buildnummer`. Gå derefter til Udviklerindstillinger, og find `Window animation scale`, `Transition animation scale` og `Animator duration scale`.

Sæt alle tre til 0,5x. Hvis telefonen skal føles hurtigere, og du ikke har noget imod bratte skærmskift, kan du slå dem fra.

Det gør ikke CPU'en hurtigere. Det fjerner de små forsinkelser, Android tilføjer for at gøre bevægelserne pænere. På en nyere topmodel føles animationerne behagelige. På en gammel budgettelefon kan de føles som ventetid.

## Begræns baggrundsarbejde med omtanke

Ældre telefoner får problemer, når for mange apps holder sig vågne. Android er god til at styre hukommelsen, men systemet kan ikke trylle, når apps bliver ved med at synkronisere, scanne, spore placering og sende notifikationer.

Gå til `Indstillinger > Batteri > Batteriforbrug`, og se efter apps, der har brugt batteri, selv om du næsten ikke har åbnet dem. Gå derefter til `Indstillinger > Apps > [appnavn] > Batteri`, og begræns baggrundsaktiviteten for apps, der ikke behøver beskeder i realtid.

Vær selektiv. Hvis du begrænser en beskedapp, kan beskeder blive forsinkede. Det er som regel sikkert at begrænse et spil, en shoppingapp eller en gammel fitnessapp.

Udviklerindstillinger indeholder også en grænse for baggrundsprocesser. Jeg bryder mig ikke om den som første løsning, fordi den kan få apps til at genindlæse hele tiden, men på en telefon med 2 GB eller 3 GB RAM kan den hjælpe, hvis du accepterer kompromiset. Prøv en grænse på to eller tre baggrundsprocesser, brug telefonen en dag, og fortryd ændringen, hvis notifikationer eller appskift bliver værre.

## Opdater apps, men hav tålmodighed med store Android-opgraderinger

Appopdateringer er som regel værd at installere, fordi de retter fejl og kompatibilitetsproblemer. Åbn `Google Play > Administrer apps og enhed`, og installer ventende opdateringer.

Systemopdateringer kræver lidt mere sammenhæng. Sikkerhedsopdateringer er værd at installere. Store Android-opgraderinger kan tilføje funktioner, baggrundsadfærd og kompatibilitetsændringer, som får en gammel telefon til at arbejde hårdere.

Android 17 nåede først de understøttede Pixel-enheder, mens partnerenheder stadig er i beta eller følger producenternes senere planer. Hvis en ældre understøttet Pixel føles langsom lige efter overgangen til Android 17, skal du give den en dag eller to, opdatere apps og holde den opladet, før du vurderer resultatet. Indeksering og appoptimering efter opdateringen kan få telefonen til at føles dårligere, før den falder til ro.

Hvis telefonen allerede knap kan bruges på den nuværende version, skal du ikke skynde dig at installere en stor opgradering i samme øjeblik, den dukker op, medmindre du har brug for en rettelse eller sikkerhedssupport. Læs først producentens opdateringsnoter.

## Genstart den hver uge

En genstart rydder processer, der er gået i stå, nulstiller hukommelsen og giver baggrundstjenester en ren start. Det løser ikke et slidt batteri eller langsomt lager, men det løser nok småproblemer til, at det bør være rutine.

Nogle Samsung-telefoner har en funktion til automatisk genstart eller automatisk optimering, selv om stien ændrer sig mellem One UI-versioner. Søg i Indstillinger efter `Auto restart` eller `Auto optimization`. På andre mærker er en kalenderpåmindelse lavteknologisk, men lige så brugbar.

## Tjek batteriet, før du giver processoren skylden

Et slidt batteri kan få en gammel telefon til at føles værre, især under belastning og i varme eller kolde omgivelser. Hvis telefonen bliver langsom under 30 % opladning, slukker for tidligt eller bliver varmere end før, bør batteriet stå højt på listen over mulige årsager.

Pixel 8a og nyere viser batteritilstanden under `Indstillinger > Batteri > Batteritilstand`. Google markerer status som `Reduceret` under 80 % resterende kapacitet. På Samsung Galaxy-telefoner har Samsung Members-appen `Telefondiagnosticering`, som omfatter kontrol af batteriet. Andre mærker varierer.

Et batteriskift kan give mening, hvis resten af telefonen stadig er god: nok RAM, nok lagerplads, ingen revnet skærm og stadig aktiv softwaresupport. Det forvandler ikke en billig telefon fra 2019 til en moderne topmodel, men det kan afhjælpe termisk begrænsning og uventede nedlukninger, der skyldes batteriet.

## Brug kun nulstilling til fabriksindstillinger, når oprydning ikke virker

En nulstilling til fabriksindstillinger kan få en gammel telefon til at føles frisk, fordi den fjerner flere års apps, cache, indstillinger og baggrundsopgaver. Den sletter også din opsætning, dine appdata, startskærmens layout og alt, der ikke er sikkerhedskopieret.

Før du nulstiller, skal du sikkerhedskopiere billeder, filer, kontakter, beskeder og koder til tofaktorgodkendelse. Efter nulstillingen bør du ikke automatisk gendanne alle gamle apps. Installer de apps, du bruger nu, ikke dem du prøvede én gang i 2021.

Nulstilling til fabriksindstillinger er et godt sidste softwaretrin. Det er ikke magi. En telefon med 2 GB RAM og 16 GB lagerplads vil stadig have svært ved apps fra 2026 efter en nulstilling.

## Spring de falske løsninger over

Apps til RAM-rensning og hastighedsboost er en dårlig idé. De lukker apps, som Android allerede styrer, hvorefter appsene genindlæses og bruger mere strøm. Mange renseapps kører også deres egne baggrundstjenester, hvilket er præcis det, du prøver at reducere.

Det hjælper heller ikke meget at lukke alt fra oversigten over seneste apps. Stryg en app væk, hvis den er gået i stå, eller du ikke skal bruge den igen i dag. Gør det ikke til et ritual.

Overclocking-værktøjer er ikke besværet værd for de fleste. De kræver som regel root-adgang, udvikler mere varme, forkorter batteritiden og gør en gammel telefon mindre stabil.

## En realistisk grænse for, hvornår du bør opgradere

Prøv at holde mindst 15 % af lagerpladsen ledig. Brug lettere apps. Reducer animationerne. Begræns baggrundsapps, der ikke behøver at være aktive. Genstart hver uge. Tjek batteritilstanden.

Hvis telefonen stadig fryser under almindelig indtastning, ikke kan holde to apps åbne eller har 2 GB RAM og meget lidt lagerplads, kan det ærlige svar være at udskifte den. Optimering hjælper gammel hardware. Den omskriver ikke specifikationerne.

runcheck kan hjælpe med at skelne årsagerne ved at vise batteritilstand, termisk adfærd, mangel på lagerplads, netværkstilstand og tilstandsscore ét sted. Det gør beslutningen mindre følelsesstyret: Ret det, der kan rettes, og stop derefter med at kæmpe mod det, der ikke kan.
