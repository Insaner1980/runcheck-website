---
title: "Hvorfor apps går ned på Android, og hvordan du stopper det"
description: "Android-apps går ned af konkrete årsager. Lær at afgøre, om problemet skyldes én app, WebView, for lidt RAM, næsten fuld lagerplads eller en ny Android-opdatering."
listSummary: "Android-apps går ned af konkrete årsager."
hub: "performance"
sourceNumber: 77
order: 14
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
---

De fleste appnedbrud er ikke tilfældige. De føles tilfældige, fordi du ikke kan se den fejl, der udløste dem.

En app går ned, når den rammer en tilstand, den ikke kan komme sig over. Android lukker den, nogle gange med en besked om, at appen bliver ved med at stoppe, andre gange uden større dramatik. En app, der går ned ved opstart, har et andet problem end en app, der først går ned efter ti minutter. Én problematisk app er også noget andet end en telefon, hvor halvdelen af appsene pludselig går ned.

Det er hele pointen: Du skal ikke reparere "Android". Du skal finde mønstret.

## Én app bliver ved med at gå ned

Begynd med appens cache. På Pixel og mange telefoner med en Android-version tæt på Googles egen går du til **Indstillinger > Apps > Se alle apps > [appens navn] > Lagerplads og cache > Ryd cache**. På Samsung ligger valget normalt under **Indstillinger > Apps > [appens navn] > Lagring > Ryd cache**.

Når du rydder cache, fjerner du midlertidige filer. Du bliver ikke logget ud, og dine kontodata slettes ikke. Går appen stadig ned? Så kan du rydde lagerplads eller data, men stop lige op først. Det nulstiller appen. I WhatsApp, Signal, noteapps, offlinekort, downloadet musik og spil med lokale gemte data kan du miste noget vigtigt, hvis du rydder data uden en sikkerhedskopi.

Opdater derefter appen. Åbn Google Play, søg efter appen, og installer en eventuel opdatering. Hvis nedbruddene begyndte lige efter en appopdatering, så tjek de nyeste anmeldelser i Play Butik. Når mange rapporterer det samme nedbrud i den samme version, skal rettelsen sandsynligvis komme fra udvikleren.

Afinstaller og geninstaller appen, hvis den stadig ikke opfører sig ordentligt. Det er kedeligt, men det genopbygger apppakken og de lokale filer fra bunden. Det virker oftere, end mange forventer.

## Mange apps begyndte at gå ned samtidig

Når flere apps uden forbindelse til hinanden går ned samme dag, bør du mistænke en fælles Android-komponent. Android System WebView er det klassiske eksempel.

WebView gør det muligt for apps at vise webindhold inde i appen i stedet for at sende dig videre til en browser. Mailapps, shoppingapps, bankapps, hjælpesider, loginforløb og nyhedsapps kan alle være afhængige af den. I marts 2021 fik en fejlbehæftet WebView-opdatering mange Android-apps til at gå ned, indtil Google udsendte rettede opdateringer til WebView og Chrome.

Opdater derfor først WebView og Chrome. Åbn Google Play, søg efter Android System WebView, og installer en opdatering, hvis der er en. Gør det samme med Google Chrome. Hvis WebView blev opdateret umiddelbart før problemerne begyndte, og der endnu ikke findes en rettelse, kan det på nogle telefoner være en midlertidig løsning at afinstallere WebView-opdateringerne. Behandl det som en nødløsning, for WebView er en sikkerhedsfølsom komponent.

Google Play-tjenester kan give lignende brede problemer, hvis komponenten er forældet eller sidder fast. Opdater den, hvis Google Play tilbyder det. Genstart telefonen efter opdateringer af systemkomponenter.

## Nedbrud på grund af lidt RAM eller næsten fuld lagerplads

Apps kan gå ned, når de beder om hukommelse, som Android ikke kan give dem. Nogle gange lukker Android baggrundsapps uden at sige noget. Andre gange er det den app, du bruger, der vælter.

Det er almindeligt på telefoner med 3 eller 4 GB RAM, når de kører moderne apps. Spil, videoredigering, kameraapps og browsere med mange faner er typiske problemområder. En beskedapp kan fungere hele dagen og så gå ned, når du forsøger at vedhæfte en stor video, fordi netop den handling kræver mere hukommelse.

Næsten fuld lagerplads kan også ligne en appfejl. Apps har brug for plads til cachefiler, downloads, databaser og opdateringer. Når den interne lagerplads er tæt på fuld, kan skrivningerne mislykkes. Det kan være nok at frigøre 1 eller 2 GB på en presset telefon, men et bedre mål er at holde mindst 10-15 % af lagerpladsen fri.

Tjek **Indstillinger > Lagerplads**. Slet store videoer, gamle downloads, dubletter, apps du ikke bruger, og APK-filer du ikke længere har brug for. Tøm også papirkurven i galleri- og filapps, hvis de beholder slettede filer i 30 dage.

## Nedbrud efter en Android-opdatering

Store systemopdateringer ændrer grundlaget under alle apps. Android 17 er det aktuelle eksempel: Versionen blev først gjort tilgængelig på understøttede Pixel-telefoner, mens andre producenter følger deres egne opdateringsplaner. Hvis en app kun lige akkurat var kompatibel før, kan en stor opdatering hurtigt afsløre problemet.

Opdater dine apps efter systemopdateringen. Opdater derefter WebView, Chrome, Google Play-tjenester og den app, der går ned. Genstart én gang. Hvis opdateringen lige er installeret, så giv telefonen nogle timer, fordi Android stadig kan være i gang med at optimere apps og genopbygge cache i baggrunden.

Hvis kun én app går ned efter Android 17, skal udvikleren sandsynligvis opdatere den. Rydning af cache og data kan hjælpe, hvis gamle lokale filer udløser problemet, men det kan ikke rette kode, som ikke er kompatibel med den nye Android-version.

Hvis mange apps går ned efter opdateringen, så se efter en systemrettelse fra telefonproducenten. Pixel-brugere bør tjekke de månedlige opdateringer. Samsung, Xiaomi, OnePlus, OPPO og andre sender rettelser gennem deres egne opdateringskanaler, ofte senere end Pixel.

## Sikker tilstand viser, om en anden app blander sig

Sikker tilstand starter Android med downloadede apps deaktiveret. De bliver ikke fjernet. Du får blot en ren test.

På Pixel åbner du strømmenuen, holder **Sluk** eller **Genstart** nede og accepterer beskeden om Sikker tilstand. På Samsung slukker du telefonen, tænder den igen og holder **Lydstyrke ned** nede, når Samsung-logoet vises. Ordlyd og timing varierer på Xiaomi, men mange modeller går i Sikker tilstand, hvis du holder **Lydstyrke ned** nede under opstart.

Hvis nedbruddene stopper i Sikker tilstand, er der sandsynligvis en downloadet app, som forstyrrer systemet. Genstart normalt, og afinstaller først nyligt installerede eller særligt indgribende apps: oprydningsapps, batterisparere, antivirusapps, VPN-apps, alternative startskærme, automatiseringsværktøjer og apps med tilladelse til Hjælpefunktioner.

Hvis nedbruddene fortsætter i Sikker tilstand, er årsagen mere sandsynligt systemsoftware, lagerplads, hardware eller selve den forudinstallerede app.

## Når en app fryser i stedet for at gå ned

En besked om, at en app ikke svarer, er en ANR, en forkortelse for Application Not Responding. Appen er endnu ikke gået ned. Android advarer om, at den ikke reagerede hurtigt nok.

Ved brugerinput er Androids normale ANR-grænse 5 sekunder. Broadcast receivers har længere grænser, normalt 10-20 sekunder afhængigt af situationen. For dig føles det ens: Du trykker, venter, og intet sker.

Tryk på **Vent**, hvis appen er i gang med noget, du gerne vil gemme, for eksempel at eksportere en video eller sende en stor fil. Tryk på **Luk**, hvis den tydeligvis sidder fast. Gentagne ANR-fejl i samme app betyder som regel, at appen laver for meget arbejde på hovedtråden, venter på en langsom netværksanmodning eller kæmper med for lidt hukommelse.

## Hvad du ikke bør installere

Lad være med at installere apps, der lover at rette nedbrud, øge RAM eller forbedre stabiliteten. De kan ikke reparere en anden apps kode. I bedste fald rydder de cache og tvangslukker baggrundsapps. I værste fald tilføjer de endnu en tjeneste, der altid kører, på en telefon der allerede mangler hukommelse.

De nyttige løsninger er kedelige: Opdater appen, ryd cache, ryd kun data når det er sikkert, geninstaller, frigør lagerplads, test Sikker tilstand, og vent på udvikleren eller telefonproducenten, når fejlen ligger hos dem.

Nedbrud beskadiger ikke telefonen. De kan dog koste arbejde, der ikke er gemt. Hvis en app går ned, mens den gemmer billeder, noter eller dokumenter, bør du ikke stole på den igen, før dataene er sikkerhedskopieret.
