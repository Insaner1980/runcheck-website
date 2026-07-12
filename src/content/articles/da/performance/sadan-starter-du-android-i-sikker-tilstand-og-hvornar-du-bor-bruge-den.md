---
title: "Sådan starter du Android i Sikker tilstand, og hvornår du bør bruge den"
description: "How to start Android in Safe Mode, what it disables, and how to use it to find problem apps."
listSummary: "How to start Android in Safe Mode, what it disables, and how to use it to find problem apps."
hub: "performance"
sourceNumber: 70
order: 7
tags: ["batteri","strømforbrug","fejlfinding","android","ydeevne"]
locale: "da"
draft: false
---
Hvordan ved du, om telefonen er langsom, fordi Android har en dårlig dag, eller fordi én app ødelægger det hele i baggrunden? Sikker tilstand er den reneste test.

Sikker tilstand starter Android med kun systemsoftwaren og de indbyggede apps. Apps, du selv har installeret senere, deaktiveres, indtil du genstarter normalt. Intet bliver slettet. Formålet er at isolere problemet: Hvis det forsvinder i Sikker tilstand, er en tredjepartsapp sandsynligvis involveret. Hvis problemet fortsætter, bør du se på selve Android, lagerpladsen, batteriet eller hardwaren.

## Hvornår Sikker tilstand er værd at bruge

Brug Sikker tilstand, når telefonen går ned, fryser, genstarter, bliver overophedet, aflader usædvanligt hurtigt eller viser pop op-vinduer, der ikke vil forsvinde. Den er også nyttig efter en stor Android-opdatering, hvis telefonen pludselig fungerer elendigt, og batteriforbruget ikke tydeligt peger på én app.

Det er ikke kun et værktøj til dramatiske fejl. Hvis tastaturet reagerer forsinket, launcheren bliver ved med at tegne startskærmen igen, eller telefonen bruger flere sekunder på at reagere efter oplåsning, kan Sikker tilstand stadig besvare det vigtige spørgsmål: Er en installeret app en del af problemet?

Testen er enkel. Start i Sikker tilstand, brug telefonen i nogle minutter, og prøv at fremkalde problemet igen.

## Start Sikker tilstand fra en tændt telefon

På de fleste Android-telefoner skal du først åbne strømmenuen.

På Pixel 6 og nyere, herunder Pixel Fold-modeller, skal du holde afbryderknappen og **Lydstyrke op** nede i nogle sekunder. På mange andre telefoner holder du afbryderknappen eller sideknappen nede. Samsung-telefoner bruger ofte **sideknappen + Lydstyrke ned** eller tænd/sluk-ikonet i Hurtig-indstillinger.

Når strømmenuen vises, skal du holde fingeren på **Sluk** eller **Genstart** på skærmen. Efter et øjeblik bør Android vise en meddelelse om Sikker tilstand. Tryk på **OK** eller **Sikker tilstand**.

Telefonen genstarter. Når den er færdig, bør du se **Sikker tilstand** nederst til venstre på skærmen.

## Start Sikker tilstand fra en slukket telefon

Denne metode er nyttig, hvis telefonen er for ustabil til at nå strømmenuen.

Tænd telefonen normalt. Så snart producentens logo eller startanimation vises, skal du holde **Lydstyrke ned** nede. Bliv ved, indtil låseskærmen eller startskærmen er indlæst. Hvis det lykkedes, vises **Sikker tilstand** nederst på skærmen.

Timingen betyder noget. Trykker du for tidligt, kan nogle telefoner åbne bootloaderen eller Recovery Mode. Trykker du for sent, starter Android normalt. Hvis du rammer forkert, skal du slukke og prøve igen.

## Bemærkninger til Samsung

Samsung understøtter begge metoder på aktuelle Galaxy-telefoner og tablets.

På en tændt Galaxy åbner du strømmenuen, holder fingeren på **Sluk** og trykker derefter på **Sikker tilstand**. På en slukket Galaxy tænder du telefonen og holder **Lydstyrke ned** nede, når Samsung-logoet vises.

Samsung bemærker også, at visse tilpasninger, såsom baggrunde eller temaer, kan blive nulstillet, når du forlader Sikker tilstand. Det er ikke datatab, men det er irriterende. Tag først et screenshot af startskærmen, hvis opsætningen betyder noget for dig.

## Hvis telefonen er frosset

Hvis telefonen ikke reagerer, skal du først gennemtvinge en genstart.

På de fleste Samsung-telefoner holder du **afbryderknappen + Lydstyrke ned** nede i mere end 7 sekunder. På mange andre Android-telefoner holder du afbryderknappen eller **afbryderknappen + Lydstyrke ned** nede i cirka 10-15 sekunder, indtil skærmen bliver sort, eller telefonen genstarter.

Brug derefter metoden til en slukket telefon: Tænd den, vent på logoet, og hold **Lydstyrke ned** nede.

## Hvad du skal teste i Sikker tilstand

Start ikke i Sikker tilstand for straks at forlade den igen. Brug telefonen længe nok til faktisk at lære noget.

Prøv det, der ikke virkede. Åbn Indstillinger. Lås telefonen op nogle gange. Skriv i et tekstfelt. Hold øje med batteritemperaturen. Lad skærmen være tændt i fem minutter. Hvis telefonen genstartede tilfældigt, så lad den ligge et stykke tid.

Sikker tilstand deaktiverer downloadede apps, så dine normale apps til beskeder, sociale medier, netbank, VPN, launcher og tastatur virker muligvis ikke. Det er forventet. De indbyggede funktioner til telefon, SMS, Wi-Fi, mobildata og Indstillinger bør stadig være tilgængelige. Google bemærker dog, at Flytilstand kan blive slået til automatisk på nogle Pixel-enheder, når du starter Sikker tilstand. Slå den fra, hvis du har brug for forbindelse under testen.

## Hvis problemet forsvinder

En tredjepartsapp er den vigtigste mistænkte.

Begynd med de apps, der er ændret for nylig. Nyinstallerede apps, nylige opdateringer, launchere, VPN-tjenester, oprydningsapps, automatiseringsapps, batterispareapps, tastaturer og alt med tilgængeligheds- eller enhedsadministratortilladelser bør undersøges først.

Forlad Sikker tilstand, afinstaller eller deaktiver én mistænkt app, og test telefonen normalt. Fjern ikke ti apps på én gang, medmindre telefonen er ubrugelig. Én ændring ad gangen fortæller dig, hvad der faktisk løste problemet.

Nogle apps er vanskelige at fjerne, fordi de har enhedsadministratoradgang. Hvis Android nægter at afinstallere en app, skal du kontrollere **Settings > Security & privacy > More security settings > Device admin apps** eller den nærmeste tilsvarende indstilling på din telefon. Stien varierer, men princippet er det samme: Fjern først appens administratoradgang, og afinstaller den derefter.

## Hvis problemet fortsætter

Hvis Sikker tilstand ikke hjælper, skyldes problemet sandsynligvis ikke en app, du har downloadet.

Det peger i stedet på en systemfejl, beskadiget systemtilstand, pres på lagerpladsen, en dårlig opdatering, et svigtende batteri, overophedning eller et andet hardwareproblem. Efter en nylig opgradering til Android 17 ville jeg for eksempel undersøge, om andre ejere af samme model melder om det samme symptom, før jeg gjorde noget drastisk.

De næste trin er praktiske: Opdater systemet igen, hvis der findes en rettelse, frigør lagerplads, kontrollér batteriforbrug og temperatur, ryd kun cachepartitionen, hvis telefonen stadig tilbyder den mulighed, og sikkerhedskopiér vigtige data, før du overvejer en nulstilling til fabriksindstillinger.

En nulstilling til fabriksindstillinger er sidste udvej. Den kan løse softwareproblemer, men kræver meget arbejde og reparerer ikke slidt lager, et svagt batteri eller en beskadiget knap.

## Sådan afslutter du Sikker tilstand

Genstart telefonen normalt. Det er det hele.

Tryk på afbryderknappen, eller brug strømikonet i panelet med hurtigindstillinger, og tryk derefter på **Genstart**. På nogle modeller viser Samsung også en notifikation om Sikker tilstand, som du kan trykke på for at slå den fra.

Hvis telefonen bliver ved med at vende tilbage til Sikker tilstand, skal du kontrollere knappen **Lydstyrke ned**. En fastklemt knap, et stramt cover, snavs omkring knappen eller en beskadiget kontakt kan udløse Sikker tilstand under opstart. Fjern coveret, og genstart igen.

## Begrænsninger og almindelige overraskelser

Sikker tilstand sletter ikke apps, billeder, beskeder eller kontodata. Den deaktiverer kun downloadede apps, mens tilstanden er aktiv.

Widgets fra tredjepartsapps kan forsvinde fra startskærmen, mens du er i Sikker tilstand. Google anbefaler specifikt, at du tager et screenshot først, hvis dine widgets er vigtige. Det kan være nødvendigt at tilføje dem igen, når du har forladt tilstanden.

Sikker tilstand deaktiverer heller ikke producentens systemapps. Systemkomponenter fra Samsung, Xiaomi, OnePlus, mobiloperatøren og Google kan stadig køre, fordi Android betragter dem som en del af det installerede systemimage. Hvis en forudinstalleret app skaber problemer, kan Sikker tilstand måske ikke isolere den.

Den begrænsning er irriterende, men Sikker tilstand er stadig værd at bruge. På under fem minutter kan den besvare et af de mest nyttige spørgsmål i Android-fejlfinding.
