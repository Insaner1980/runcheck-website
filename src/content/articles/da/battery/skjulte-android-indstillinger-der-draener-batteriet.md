---
title: "Skjulte Android-indstillinger, der dræner batteriet"
description: "Android kan holde Wi-Fi-scanning, Bluetooth-scanning, baggrundssynkronisering, lokationstjek og Always On Display (AOD) aktive, selv når du ikke bruger telefonen. De indstillinger er værd at tjekke, hvis batteriforbruget i standby er for højt."
listSummary: "android, opdateringer og sikkerhed"
hub: "battery"
sourceNumber: 33
order: 23
subgroup: "Drain"
tags: ["android","opdateringer","sikkerhed","software","guide"]
locale: "da"
draft: false
---
En stor del af Androids batteriforbrug sker, mens du ikke laver noget særligt. Skærmen er slukket, telefonen ligger på bordet, og batteriprocenten falder alligevel, fordi apps, radioer, sensorer og kontosynkronisering bliver ved med at vække enheden.

Android 17 begyndte at blive udrullet til de fleste understøttede Pixel-enheder i juni 2026. Pixel-telefoner fik den nye Android-version først, mens Samsung, Xiaomi, OnePlus, Motorola og andre producenter udgiver deres egne Android 17-versioner efter deres egne tidsplaner. Rådene nedenfor gælder stadig, men den præcise sti kan ligge et niveau højere eller lavere afhængigt af telefonen.

## Appaktivitet i baggrunden

Det er som regel det første sted, du bør kigge. Apps kan i det skjulte synkronisere data, hente opdateringer, tjekke efter notifikationer, uploade logfiler, opdatere widgets og holde wake locks aktive. Sociale apps, shoppingapps, nyhedsapps, cloudlager og dårligt byggede hjælpeapps er de sædvanlige mistænkte.

På Pixel og standard-Android kan du begynde under **Indstillinger > Batteri > Batteriforbrug**. Skift til visning efter apps, og se efter noget, der har brugt strøm, efter at du holdt op med at bruge det. På nyere Pixel-versioner kan du også åbne **Indstillinger > Apps > Batteriforbrug for apps**, vælge en app og tjekke **Tillad brug i baggrunden**. Behold **Optimeret** for de fleste apps, og begræns baggrundsbrug for apps, der ikke behøver at køre, når du har forladt dem.

Spil, shoppingapps, rejseapps, som du kun åbner manuelt, madleveringsapps og tilfældige hjælpeapps er gode kandidater til begrænsning. Begræns ikke beskedapps, arbejdsmail, VPN'er, helbredsovervågning, familiesikkerhedsapps eller andet, hvor en forsinket advarsel kan give et reelt problem.

På nyere Samsung-telefoner ligger den samme type kontrol typisk under **Indstillinger > Batteri > Grænser for baggrundsforbrug**. Den stærkeste mulighed er **Dybt sovende apps**, som er nyttig til apps, du næsten aldrig bruger. Det er også let at gå for langt. Hvis en notifikation er vigtig, skal du ikke sætte appen i dyb dvale.

Det er stadig værd at lade Batterijustering være slået til. Funktionen lærer, hvilke apps du bruger ofte, og begrænser resten mere diskret end manuel styring. Den fanger ikke alt, men den er et godt udgangspunkt.

## Wi-Fi- og Bluetooth-scanning

Denne indstilling føles lidt lumsk. Når du slår Wi-Fi eller Bluetooth fra i Kvikmenu, stopper det ikke altid Android i at bruge radioerne til lokationsscanning. Android kan stadig søge efter Wi-Fi-adgangspunkter og Bluetooth-enheder i nærheden for at forbedre lokationsnøjagtigheden.

På Android 12 og nyere er standardstien normalt **Indstillinger > Lokation > Lokationstjenester > Wi-Fi-scanning** og **Bluetooth-scanning**. På Android 11 og ældre kan indstillingerne ligge direkte under lokationsmenuen. På Samsung findes de normalt også under lokationstjenester.

Når scanning slås fra, kan du reducere små, gentagne opvågninger af radioerne. Til gengæld bliver placering indendørs mindre præcis. Hvis du bruger Google Maps indendørs, Find Hub, geofencing til dit smarthjem eller lokationsbaserede påmindelser, kan det tage længere tid at finde din position, eller den kan blive mindre præcis.

For de fleste ville jeg kun slå scanning fra, hvis batteriforbruget i standby allerede er irriterende. På en telefon, der fungerer normalt, er det ikke den første kontakt, jeg ville ændre.

## Ur på låseskærmen og AOD

AOD er praktisk. Funktionen gør også præcis det, navnet lover: En del af skærmen er tændt hele dagen.

OLED-skærme tænder ikke sorte pixels, så et enkelt ur på sort baggrund bruger ikke meget strøm på et givet tidspunkt. Men telefonen kan ligge ubrugt i 15-20 timer i løbet af en dag. Et lille konstant forbrug bliver synligt over så lang tid, især hvis AOD-layoutet bruger farver, widgets, baggrundsbillede eller lysere notifikationselementer.

På nyere Pixel-telefoner ligger indstillingerne typisk under **Indstillinger > Skærm og berøring > Altid aktiv skærm**. Samsung bruger **Indstillinger > Låseskærm og AOD > Always On Display**, selv om stien kan variere med One UI-versionen.

Det bedste kompromis er ikke altid at slå funktionen helt fra. Mange telefoner giver mulighed for **Tryk for at vise**, visning ved nye notifikationer eller en tidsplan. Så beholder du det meste af bekvemmeligheden uden at holde pixels tændt hvert minut hele dagen.

## Lokationsnøjagtighed og apptilladelser

Lokationsnøjagtighed hjælper Android med at finde din position hurtigere og mere præcist ved at bruge mere end GPS. Wi-Fi-adgangspunkter, mobilmaster, sensorer, IP-adresse og enhedsdata kan alle indgå i lokationsberegningen, når funktionen er slået til.

Det betyder ikke, at Lokationsnøjagtighed er en dårlig funktion. Det er grunden til, at telefonen kan finde dig inde i bygninger, hvor GPS-signalet er svagt. Men den giver også apps med lokationstilladelse bedre mulighed for at anmode om din position i baggrunden, og baggrundslokation er et almindeligt mønster ved højt batteriforbrug.

Tjek **Indstillinger > Lokation > Lokationstilladelser for apps**. Alt, der står som **Tillad altid**, fortjener et nærmere kig. Vejrwidgets, sociale apps, shoppingapps, fotoapps og rejseapps behøver ofte ikke lokation i baggrunden. Skift dem til **Tillad kun, mens appen er i brug**, medmindre baggrundssporing er selve formålet med appen.

På Android 12 og nyere kan du også vælge omtrentlig lokation for mange apps. Det gavner privatlivet mere end batteriet, men det er stadig en god vane. Navigation, aktivitetssporing samt nød- og sikkerhedsapps er de oplagte undtagelser.

## Synkronisering og konti

Hver konto på telefonen kan have sin egen synkroniseringsplan. Google, Samsung, Microsoft, mail, kalender, kontakter, cloudnoter, Drive, Fotos, browsersynkronisering og tredjepartskonti skaber alle baggrundsarbejde.

Gå til **Indstillinger > Adgangskoder, adgangsnøgler og konti**, eller den tilsvarende kontomenu på din telefon, og tjek, hvad hver konto synkroniserer. Hvis dette er din eneste telefon, vil du sandsynligvis beholde synkronisering af kontakter, kalender og din primære mail. Men en arbejdskonto, du ikke længere bruger, et cloudlager, der ikke behøver telefonsynkronisering, eller en gammel mailkonto kan roligt beskæres.

Mange telefoner har også en samlet kontakt til automatisk synkronisering. Jeg anbefaler ikke at lade den være slået fra hele tiden, for manglende mails og forældede kalendere er irriterende. På rejsedage, lange vandreture eller under strømafbrydelser kan det dog hjælpe.

## Kontakten til skift mellem Wi-Fi og mobilnetværk

Indstillinger for udviklere indeholder en kontakt kaldet **Mobile data always active**. Når den er slået til, holder Android mobildataforbindelsen klar, selv mens telefonen er på Wi-Fi. Fordelen er et hurtigere skift, hvis Wi-Fi-forbindelsen forsvinder. Ulempen er, at modemmet kan holdes mere vågent end nødvendigt.

Det betyder mest, når mobilsignalet er svagt. En telefon, der ligger på Wi-Fi i en kælder med én LTE-streg, kan stadig spilde strøm på at vedligeholde mobildelen af forbindelsen.

Du aktiverer Indstillinger for udviklere ved at gå til **Indstillinger > Om telefonen** og trykke på **Buildnummer** syv gange. Åbn derefter **Indstillinger > System > Indstillinger for udviklere**, og find **Mobile data always active**. På Samsung vises Indstillinger for udviklere normalt nederst i Indstillinger, når de er aktiveret.

Slå funktionen fra, hvis telefonen bruger det meste af dagen på stabilt Wi-Fi. Forvent en kort forsinkelse, når Wi-Fi forsvinder, og telefonen skifter tilbage til mobildata.

## Notifikationer, vækkebevægelser og små opvågninger

En enkelt notifikation koster ikke meget batteri. En hel dag med støjende notifikationer gør. Hver lyd, vibration, opvågning af skærmen og animation på låseskærmen giver telefonen endnu en grund til at forlade sin dybeste hviletilstand.

Åbn **Indstillinger > Notifikationer > Appnotifikationer**, og vær hård ved reklameprægede apps. Shoppingtilbud, spilpåmindelser, streaminganbefalinger, restauranttilbud og appmarkedsføring behøver ikke at vække telefonen.

Tjek også indstillingerne for låseskærm og bevægelser: **Løft for at vække**, **Tryk for at vække**, dobbelttryk for at tjekke telefonen og lignende funktioner. De bruger sensorer med lavt strømforbrug, så de er ikke store strømslugere alene. Det større problem er utilsigtede opvågninger i en lomme, taske eller på et bord, der vibrerer.

Slå de funktioner fra, du ikke bruger. Behold dem, der faktisk gør telefonen rarere at bruge.

## Svagt signal er det skjulte forbrug, du ikke kan slå fra med én kontakt

Et dårligt mobilsignal kan bruge mere batteri end nogen indstilling på denne liste. Når telefonen kæmper for at holde forbindelsen, arbejder modemmet hårdere. Det sker i landområder, under jorden, i betonbygninger, elevatorer og boliger, hvor telefonen klamrer sig til én signalstreg.

Hvis du er på Wi-Fi og ikke har brug for almindelige mobilopkald eller sms i et stykke tid, kan Flytilstand sammen med Wi-Fi hjælpe. Slå Flytilstand til, og slå derefter Wi-Fi til igen. Så slukkes mobilradioen, mens internetforbindelsen bevares. Gør ikke dette, hvis du skal kunne modtage normale mobilopkald, sms eller operatørens nødfunktioner.

Her er et værktøj som runcheck nyttigt. Hvis batteriforbruget med slukket skærm følger et svagt signal i stedet for skærmbrug, er problemet ikke en mystisk app. Det er radioen.
