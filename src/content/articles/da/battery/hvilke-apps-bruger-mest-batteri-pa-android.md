---
title: "Hvilke apps bruger mest batteri på Android?"
description: "De fleste lister over \"apps, der sluger batteri\" lyder alt for sikre. Din telefon er ligeglad med, hvilken app der toppede en rangliste i en andens test. Det afgørende er, hvad du har installeret, hvilke tilladelser du har givet, hvor ofte du åbner appen, og om den fortsætter med at arbejde, efter at skærmen er slukket."
listSummary: "De fleste lister over \"apps, der sluger batteri\" lyder alt for sikre."
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Drain"
tags: ["batteri","strømforbrug","fejlfinding","android","ydeevne"]
locale: "da"
draft: false
---
Når det er sagt, er det ofte de samme kategorier, der skaber problemer.

## De typer apps, der normalt ligger øverst

Videoapps er oplagte. YouTube, Netflix, TikTok, Instagram Reels og lignende apps holder skærmen tændt, afkoder video, henter data konstant og bruges ofte med høj lysstyrke, fordi folk ser video i lyse rum eller udendørs. Hvis en videoapp ligger højt på batterilisten efter to timers brug, er det ikke en fejl. Det er fysik.

Navigationsapps er den næste oplagte kategori. Google Maps, Waze, leveringsapps, apps til samkørsel og fitnessmålere kombinerer GPS, mobildata, skærmtid og nogle gange Bluetooth. En times sving-for-sving-navigation kan tage en tydelig bid af batteriet, især på 5G eller ved dårligt signal.

Spil går hårdt til værks. Et 3D-spil belaster GPU, CPU, skærm, lyd, touchinput og netværk på samme tid. Den gode nyhed er, at spil normalt bruger strøm, mens du spiller, ikke i stilhed klokken 3 om natten. Hvis et spil viser baggrundsforbrug, skal du begrænse det.

Sociale medier og beskedapps er mere uoverskuelige. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit og nyhedsapps vil alle have nyt indhold og notifikationer. Nogle opfører sig ordentligt. Andre gør ikke. Det irriterende er, at to personer kan installere den samme app og få helt forskellige batteriresultater, fordi den ene har lokation, notifikationer, automatisk afspilning, kontaktsynkronisering og opdatering i baggrunden slået til, mens den anden ikke har.

## Baggrundsforbruget betyder mere end appens navn

Hvis batteriskærmen viser, at en app brugte 8 %, mens du så video i en time, fortæller den dig noget kedeligt. Hvis den viser, at en app brugte 8 % i baggrunden, mens telefonen lå i lommen, fortæller den dig noget nyttigt.

Se først efter den forskel. På Pixel skal du gå til **Indstillinger > Batteri > Batteriforbrug**, vælge **Vis efter apps** og trykke på appen. På Samsung skal du åbne **Indstillinger > Batteri** og se den detaljerede oversigt over batteriforbruget. Ordlyden varierer mellem modeller, men du leder efter tid i forgrunden, tid i baggrunden og oplysninger om, hvorvidt appen må fortsætte med at køre.

En praktisk tommelfingerregel er, at en uvigtig app, der bruger mere end et par procent i baggrunden på en dag, bør have en god forklaring. Beskedapps, musik, navigation, sundhedsapps og sikkerhedsapps kan have en grund. Det har en shoppingapp ikke.

De mest almindelige mekanismer bag baggrundsforbrug er enkle: push-notifikationer, synkronisering af indhold, lokationskontroller, wake locks, netværkstrafik i baggrunden og analyse-SDK'er. Wake locks er værd at nævne, fordi Google nu behandler dem som et kvalitetsproblem i Play. En partial wake lock holder CPU'en vågen, selv når skærmen er slukket. Brugt med omtanke er det normalt. Holdt for længe er det spild af batteri.

## Google Play har nu et kvalitetssignal for batteriforbrug

Det er den store ændring siden ældre versioner af denne artikel. Google har gjort **Excessive partial wake locks** til en central Android vitals-måling. Fra den 1. marts 2026 kan apps, der overskrider grænsen, få mindre synlighed i dele af Google Play, hvor brugere finder apps, og der kan vises en advarsel på appens butiksside.

Grænsen er præcis. For mobilapps regner Android vitals brug af partial wake locks, som ikke er undtaget, som overdreven, når de samlet holdes i mindst to timer inden for en periode på 24 timer, og mønstret påvirker mere end 5 % af appens sessioner målt over 28 dage.

Det betyder ikke, at Google Play fortæller dig alle batteriomkostninger, før du installerer en app. Systemet markerer ikke et spil, fordi det bruger meget strøm, mens du aktivt spiller. Det vurderer heller ikke, om du personligt bruger fem timer på TikTok. Det retter sig mod adfærd, der holder CPU'en vågen i baggrunden, mens skærmen er slukket.

Alligevel er det nyttigt. For første gang kan en almindelig bruger se en batteriadvarsel, før en app med dårlig baggrundsadfærd bliver installeret. Det er bedre end at opdage problemet efter tre nætter med afladning.

## Hvad du kan ændre, før du afinstallerer apps

Afinstallation er den rene løsning, men de fleste sletter ikke deres vigtigste apps til sociale medier, video eller beskeder. Begynd derfor med de indstillinger, der mindsker det usynlige arbejde.

Slå automatisk afspilning fra, hvor appen tillader det. Instagram, Facebook, X, Reddit, YouTube og TikTok kan bruge både batteri og data på at forberede videoer, du måske aldrig ser.

Begræns lokation. Åbn **Indstillinger > Lokation > Lokationstilladelser for apps**, og tjek de apps, der er **Altid tilladt**. En vejrapp kan som regel nøjes med lokation, mens den er i brug. En navigationsapp har brug for lokation under ture. En app til sociale medier har sjældent brug for permanent adgang.

Begræns batteriforbruget i baggrunden. På Android med en Pixel-lignende grænseflade skal du åbne **Indstillinger > Batteri > Batteriforbrug**, vælge appen og reducere dens adgang til at køre i baggrunden, hvis den ikke behøver øjeblikkelige opdateringer. På Samsung skal du bruge **Indstillinger > Enhedspleje > Batteri > Grænser for baggrundsforbrug** og føje sjældent brugte apps til **Sovende apps** eller **Dybt sovende apps**.

Skær ned på notifikationer. Hver notifikation kan vække telefonen, tænde skærmen, udløse vibration og hente nyt indhold. Vær streng over for apps, der sender markedsføring, anbefalinger eller beskeder af typen "det kunne måske interessere dig".

Opdater apps. Det er et kedeligt råd, men det betyder noget efter Android-opdateringer, herunder den første udrulning af Android 17 til understøttede Pixel-telefoner. Appudviklere retter batterifejl, wake lock-fejl, synkroniseringssløjfer og kompatibilitetsproblemer. Både Samsung og Google henviser til app- og systemopdateringer ved fejlfinding af batteriafladning.

## Browseren er ikke altid bedre end appen

Et almindeligt råd lyder: Brug browserversionen i stedet for appen. Nogle gange er det fornuftigt, fordi et website ikke kan køre den samme type vedvarende Android-baggrundstjeneste som en installeret app. Hvis Facebook eller X kun bruger meget strøm, fordi den native app bliver ved med at vække telefonen, kan mobilwebsitet hjælpe.

Men gør det ikke til en fast regel. Kontrolleret forskning, der sammenlignede Android-apps med deres webudgaver, har vist, at native apps for nogle tjenester kan bruge mindre energi under aktiv brug. En browserfane er ikke magisk. Den skal stadig gengive video, JavaScript, annoncer, sporingskode og billeder.

Min praktiske vurdering er denne: Brug browseren til tjenester, du kun tjekker lejlighedsvis og ikke behøver notifikationer fra. Brug den native app til tjenester, du bruger meget, især hvis webudgaven er langsom eller besværlig. Begræns derefter appens baggrundsadgang, hvis den begynder at dukke op i batteriforbruget om natten.

## Når en diagnoseapp hjælper

Androids indbyggede batteriskærm bør være dit første stop. Den findes allerede på telefonen og er integreret med operativsystemet.

Et værktøj som runcheck bliver nyttigt, når batteritallet alene ikke forklarer mønstret. Hvis afladningen stiger samtidig med varme, svagt signal, langsomt netværk eller pres på lagerpladsen, peger det på en anden løsning end blot at give Instagram skylden. Sammenhængen betyder noget.

AccuBattery og lignende værktøjer kan også estimere batterikapaciteten over tid, men betragt tallene som estimater, medmindre telefonen selv viser batteritilstanden.

## En bedre måde at finde dine værste apps på

Gør dette over to almindelige dage:

1. Oplad og brug telefonen som normalt.
2. Tjek **Indstillinger > Batteri > Batteriforbrug** om aftenen.
3. Skriv de fem øverste apps ned, og notér, om de brugte batteri i forgrunden eller baggrunden.
4. Begræns kun de apps, hvis baggrundsforbrug ikke giver mening.
5. Tjek igen næste dag.

Ryd ikke alle apps fra oversigten over seneste apps hver time. Android styrer automatisk hukommelse og batteri, og tvangslukning bruger ofte ekstra strøm, når apps åbnes igen. Tving til at standse er til en app, der opfører sig dårligt, ikke til daglig oprydning.

De apps, der bruger mest batteri, er som regel dem, der holder skærm, netværk, GPS, CPU eller GPU i gang. Dem, der er værd at rette, er dem, der gør det, når du ikke bruger dem.
