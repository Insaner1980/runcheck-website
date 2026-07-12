---
title: "Hvad hukommelsespres i Android er, og hvordan du afhjælper det"
description: "Hukommelsespres opstår, når Android mangler RAM og begynder at lukke apps. Se, hvordan du genkender problemet, hvad der forårsager det, og hvad der faktisk hjælper."
listSummary: "Hukommelsespres opstår, når Android mangler RAM og begynder at lukke apps."
hub: "performance"
sourceNumber: 76
order: 13
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
---

Hukommelsespres betyder, at Android vælger, hvad der kan undværes. Når der ikke er RAM nok til det hele, begynder systemet at lukke mindre vigtige processer, så telefonen kan blive ved med at fungere.

Derfor genindlæses en browser, når du skifter tilbage til den. Det er også derfor, tastaturet kortvarigt kan forsvinde, musikappen kan genstarte, eller et spil kan lukke, når du svarer på en besked. Telefonen glemte ikke bare, hvad du var i gang med. Den havde brug for hukommelsen.

Målet i Android er ikke at have så meget ledig RAM som muligt. Android forsøger at bruge hukommelsen til nyttige ting, blandt andet til at holde apps klar i baggrunden. Problemet opstår, når der ikke længere er plads nok til at skifte ubesværet mellem opgaver.

## Hvad Android gør under hukommelsespres

Android bruger Low Memory Killer Daemon, eller lmkd, til at overvåge hukommelsespres. Når RAM bliver knap, prioriterer lmkd processerne og lukker dem, som Android bedst kan undvære. Baggrundsapps ryger som regel først. Forgrundsapps skal normalt være beskyttet, men ved alvorligt hukommelsespres kan de stadig blive lukket eller gå ned.

Android 10 tilføjede understøttelse af kernel pressure stall information, normalt kaldet PSI. Det gør det muligt for lmkd at reagere på reelle forsinkelser på grund af hukommelsesmangel i stedet for kun at se på simple grænser for ledig hukommelse. Ældre systemer var mere afhængige af low memory killer-driveren i kernen. Den driver blev fjernet fra den officielle Linux-kerne fra version 4.12, og derfor bruger moderne Android lmkd i userspace.

Du behøver ikke huske alt det. Den praktiske forklaring er enklere: Hvis Android hele tiden lukker apps, du lige har brugt, oplever telefonen sandsynligvis hukommelsespres.

## Tegn på, at den brugbare RAM er ved at slippe op

Det tydeligste tegn er, at apps genindlæses. Åbn Chrome og en webside, skift til Beskeder, og skift derefter tilbage. Hvis Chrome henter siden helt forfra hver gang, har Android sandsynligvis lukket appen, mens den lå i baggrunden.

Andre tegn er mindre oplagte. Startskærmen tegnes på ny, når du går hjem. Tastaturet forsvinder midt i en besked. Spotify stopper, efter at du åbner kameraet. Et spil genstarter, når du har tjekket en notifikation. En af disse ting en gang imellem er normalt. Hele dagen er det ikke.

Du kan se aktiv hukommelse via udviklerindstillingerne. Gå til **Indstillinger > Om telefonen**, og tryk syv gange på buildnummeret. Åbn derefter udviklerindstillingerne og siden med kørende tjenester. Den præcise placering og ordlyd varierer mellem mærker, men siden viser aktive processer og det aktuelle RAM-forbrug.

På Samsung kan du også se hukommelsesoplysninger under **Indstillinger > Batteri- og enhedspleje > Hukommelse**, afhængigt af One UI-versionen. Xiaomi-, Redmi- og POCO-telefoner viser ofte en indstilling til Memory Extension, men den handler mere om virtuel RAM end om et tydeligt overblik over det faktiske hukommelsespres.

Lad være med at hænge dig i ét tal. En telefon med kun nogle få hundrede MB ledig RAM er ikke automatisk defekt. Android skal netop bruge cache aggressivt. Det afgørende er adfærden: konstante genindlæsninger, tabt appstatus og forgrundsapps, der lukker.

## Hvorfor det sker

Mængden af RAM er den oplagte årsag. En telefon med 4 GB kan stadig klare opkald, beskeder, kort og let browsing i 2026, men der er ikke meget luft. Android, Google Play-tjenester, startskærmen, tastaturet, beskedapps og synkronisering i baggrunden kan bruge en stor del, før du åbner noget krævende.

Moderne apps er også større end tidligere. En browser med flere faner, Instagram eller TikTok, en navigationsapp og en musikapp kan få hardware med lidt RAM til konstant at rydde og genindlæse. Modeller med 6 GB har bedre plads. En telefon med 8 GB er behagelig for de fleste. Over 12 GB bliver gevinsten som regel mindre, medmindre du spiller krævende spil eller bruger multitasking i desktopstil.

Baggrundstjenester betyder mere, end mange tror. Beskedapps holder forbindelser åbne. Fitnessapps synkroniserer. Mailapps tjekker efter nye beskeder. VPN-apps behandler trafik. Startskærme og widgets ligger i hukommelsen, fordi de skal være klar. Hver for sig er de ikke et problem. Læg nok af dem sammen, og telefonen begynder at føles klemt.

Store systemopdateringer kan gøre problemet mere synligt. Android 17 blev først gjort tilgængelig på understøttede Pixel-telefoner, mens andre producenter følger deres egne opdateringsplaner. Efter en stor opdatering bør du give telefonen tid til at færdiggøre appopdateringer og oprydning i baggrunden, før du bedømmer ydelsen. Men hvis 4 GB allerede føltes trangt med Android 14 eller 15, gør Android 17 ikke på magisk vis telefonen mere rummelig.

## Hvad der faktisk hjælper

Lad være med at stryge alle apps væk hele dagen. Det føles måske nyttigt, men Android ved allerede, hvordan hukommelse skal frigøres. Hvis du tvangslukker alt, starter apps ofte deres baggrundstjenester igen kort efter, og det kan bruge mere CPU og batteri, end hvis du havde ladet dem være.

Begræns i stedet baggrundsaktiviteten. Åbn **Indstillinger > Apps**, vælg en app, og find indstillingerne for batteri eller appens batteriforbrug. Sæt sjældent brugte apps til begrænset baggrundsbrug, hvis de ikke behøver at sende øjeblikkelige notifikationer. Indkøbsapps, spil, rejseapps, madudbringning, nyhedsapps og sociale apps, som ikke behøver at give besked med det samme, er gode kandidater.

Afinstaller apps, du ikke bruger. Det hjælper at begrænse baggrundsaktivitet, men det er renere at fjerne appen. Færre apps betyder færre tjenester, færre push-registreringer, færre opdateringsopgaver og mindre pres på lagerpladsen.

Hold noget lagerplads fri. For lidt RAM og næsten fuld lagerplads er to forskellige problemer, men de optræder ofte samtidig på ældre telefoner. Hvis den interne lagerplads er 85-90 % fuld, bør du rydde op. En telefon med både lidt RAM og næsten fuldt lager føles værre end en telefon med kun det ene problem.

Brug Lite- eller webversioner, når det giver mening. En let browsersession kan belaste en telefon med lidt RAM mindre end en fuld social app med baggrundsvideo, notifikationer, widgets og cachelagrede medier.

Slå animationer fra eller reducer dem, hvis telefonen føles langsom. I udviklerindstillingerne kan du sætte skalaen for vinduesanimationer, overgangsanimationer og animatorvarighed til 0,5x eller slå dem fra. Det giver ikke mere RAM. Det forkorter blot ventetiden mellem tryk, og nogle gange er det nok til at gøre en presset telefon tålelig.

## Virtuel RAM er ikke rigtig RAM

Samsung kalder funktionen RAM Plus. Xiaomi kalder den Memory Extension. OnePlus og andre mærker bruger lignende navne. Ideen er enkel: Telefonen bruger en del af den interne lagerplads som ekstra swap-lignende hukommelse.

På telefoner med lidt RAM kan det hjælpe med at holde flere apps åbne. Det gør ikke lagerpladsen lige så hurtig som fysisk RAM. UFS er hurtigt som lager, men RAM er i en helt anden klasse. På enheder med lidt RAM kan virtuel RAM mindske antallet af genindlæsninger. På en telefon med 8 eller 12 GB er forskellen ofte svær at mærke.

Der er også en ulempe. Mere virtuel RAM betyder mindre ledig intern lagerplads, og vedvarende skrivning til lageret er ikke gratis. Jeg ville ikke slå funktionen fra uden grund, men jeg ville heller ikke købe en telefon, fordi specifikationerne siger 8 GB + 8 GB virtuel RAM. Det første tal betyder langt mere.

## Når løsningen er en ny telefon

Hvis du har begrænset baggrundsapps, fjernet overflødige apps, frigjort lagerplads, og telefonen stadig genindlæser alt, er hardwaren måske ganske enkelt for lille til dit brug.

Til grundlæggende brug kan 4 GB stadig fungere, hvis du er tålmodig og holder telefonen ryddelig. Til normal multitasking er 6 GB nu det praktiske minimum. Hvis telefonen skal holde i flere år, er 8 GB et sikrere køb. Krævende brugere, gamere og personer, der holder mange apps aktive på samme tid, har fordel af 12 GB.

En nulstilling til fabriksindstillinger kan få hukommelsespresset til at forsvinde i en periode, fordi telefonen har færre apps og en renere baggrundstilstand. Så installerer du apps igen, logger ind på det hele, og presset vender tilbage. Det betyder ikke, at nulstillingen mislykkedes. Det er telefonen, der viser sin grænse.
