---
title: "Sådan tester du telefonens vibrationsmotor"
description: "Hurtige måder at teste vibrationsmotoren i en Android-telefon med kontrol af indstillinger, tastaturfeedback, sikker tilstand og producentens diagnostik."
listSummary: "hardware, test og diagnostik"
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["hardware","test","diagnostik","android","guide"]
locale: "da"
draft: false
---
---

En lydløs telefon betyder ikke automatisk, at vibrationsmotoren er død. De fleste vibrationsproblemer skyldes først indstillinger, derefter software og til sidst hardware.

Den rækkefølge betyder noget. Det er spild af penge at udskifte en haptisk motor, fordi Forstyr ikke havde slået vibration fra.

## Tjek først vibrationsindstillingerne

Åbn Indstillinger, og find menuen for lyd, vibration eller haptik. Den præcise placering afhænger af producenten.

På Samsung Galaxy-telefoner går du til Indstillinger > Lyd og vibration > Vibrationsintensitet. Opkald, meddelelser, systemfeedback og berøringsfeedback kan have separate skydere. Det er let at skrue én af dem helt ned og lade de andre være aktive.

Tjek også Forstyr ikke. På nyere standard-Android og Pixel findes funktionen som regel under Indstillinger > Tilstande > Forstyr ikke. På Samsung ligger den under Indstillinger > Meddelelser > Forstyr ikke. Funktionen kan slå vibration fra afhængigt af, hvordan du har indstillet opkald, apps og tidsplaner.

En sidste lille ting: Tjek tastaturet. Gboard, Samsung Keyboard og SwiftKey har hver deres indstillinger for haptisk feedback. Hvis vibration ved tastetryk er slået fra i selve tastaturappen, mærker du ikke noget under skrivning, selvom motoren fungerer.

## Brug en direkte vibrationstest

Samsung Galaxy-telefoner har den mest ligetil indbyggede mulighed. Åbn Samsung Members, gå til Support > Telefondiagnosticering, og kør vibrationstesten. Samsung har vibration som en separat diagnostiktest, så denne metode er sikrere end at stole på skjulte koder.

Den gamle Samsung-kode `*#0*#` åbner stadig en hardwaretestmenu på mange Galaxy-modeller. Tryk på Vibration, hvorefter telefonen skal vibrere, indtil du afslutter testen. Koden kræver Samsungs egen Telefon-app. Operatørsoftware, nyere sikkerhedsindstillinger i One UI eller begrænsninger på firmatelefoner kan blokere menuen.

Nogle Android-telefoner reagerer også på `*#*#0842#*#*`, som længe har været brugt til test af vibration og bagbelysning. Betragt den ikke som universel. Pixel-telefoner understøtter den som regel ikke, og mange moderne opkaldsapps ignorerer den.

På Xiaomi-, Redmi- og POCO-telefoner kan du prøve CIT-menuen med `*#*#6484#*#*`. Menuens navn og testudvalg varierer mellem MIUI- og HyperOS-versioner, men vibration er ofte med.

## Test fine vibrationer med tastaturet

Åbn en noteapp, og skriv nogle sætninger. Hvis vibration ved berøring er slået til, skal hvert tastetryk give en lille impuls.

Det er en nyttig test, fordi den kontrollerer både fine haptiske signaler og den kraftigere vibration ved indgående opkald. Hvis motoren kan give små tastaturimpulser, men ikke vibrerer ved opkald, ligger problemet sandsynligvis i en notifikationskanal.

På Android kan apps styre vibration separat for hver notifikationskanal. Åbn appoplysningerne for den app, der skal vibrere, og se under Meddelelser. For Telefon, Beskeder, WhatsApp, Telegram eller Gmail skal du kontrollere, at vibration er aktiveret for den relevante kanal.

## Skeln mellem software og hardware

Genstart først telefonen. Det lyder næsten for enkelt, men haptisk feedback kan forsvinde efter en softwarefejl og vende tilbage efter en genstart.

Hvis vibration virker efter genstart og senere forsvinder igen, skal du starte telefonen i sikker tilstand. På mange Android-telefoner holder du tænd/sluk-knappen inde og derefter fingeren på Sluk, indtil muligheden for sikker tilstand vises. På mange Samsung-enheder genstarter du og holder Lydstyrke ned inde under opstarten.

Sikker tilstand deaktiverer tredjepartsapps. Hvis vibration virker dér, skal du fjerne eller deaktivere nyligt installerede automatiseringsapps, opkaldsfiltre, batterispareapps, launchere og tilgængelighedsværktøjer ét ad gangen. Det er de mest sandsynlige årsager.

Hvis vibration ikke virker i sikker tilstand, ikke reagerer i Samsung Members eller producentens testmenu, og alle vibrationsindstillinger er slået til, er motoren eller dens forbindelse sandsynligvis defekt.

## Hvad der kan gå i stykker inde i telefonen

Android-telefoner bruger som regel en af to typer haptiske motorer. Ældre og billigere telefoner har ofte en motor med excentrisk roterende masse, forkortet ERM. Den føles som en lille roterende summen. Telefoner i mellemklassen og topklassen bruger oftere en lineær resonansaktuator, forkortet LRA, som føles skarpere og mere præcis.

Begge typer kan gå i stykker. Et fald kan løsne et flexkabel, beskadige lodninger eller knække det beslag, der holder motoren mod rammen. Vandskade kan korrodere forbindelsen. Slid er også muligt, selvom haptiske motorer som regel holder længe, medmindre telefonen har fået slag eller tidligere har været åbnet.

Uregelmæssig vibration er et klassisk tegn på en løs forbindelse. Kraftig den ene dag, svag den næste og helt væk efter et fald. Det mønster er mere mistænkeligt end en motor, der bare stoppede én gang for alle.

## Hvad du kan forvente af en reparation

Udskiftning af vibrationsmotoren er som regel en af de billigere hardwarereparationer, men forseglede telefoner kræver stadig varme, fjernelse af lim og omhyggelig samling bagefter. På modulære telefoner som visse Fairphone-modeller kan delen muligvis udskiftes af brugeren. På de fleste almindelige Android-telefoner skal en tekniker åbne bagpanelet.

Hvis telefonen for nylig er blevet tabt, og vibration blev ustabil umiddelbart efter, skal du bede værkstedet kontrollere forbindelsen, før motoren udskiftes. Nogle gange fejler motoren ikke noget, og kablet sidder bare ikke korrekt.

runcheck tester ikke vibrationsmotoren direkte, men appen kan hjælpe med at opdage relaterede advarselstegn som overophedning, ændret batteriforbrug eller ustabil opladning efter et fald eller kontakt med fugt.
