---
title: "Slik tester du vibrasjonsmotoren på telefonen"
description: "Raske måter å teste vibrasjonsmotoren på en Android-telefon med innstillinger, tastaturrespons, sikker modus og produsentdiagnostikk."
listSummary: "maskinvare, testing og diagnostikk"
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["maskinvare","testing","diagnostikk","android","guide"]
locale: "nb"
draft: false
---
---

At telefonen er stille, betyr ikke automatisk at vibrasjonsmotoren er ødelagt. De fleste vibrasjonsproblemer skyldes først innstillinger, deretter programvare og til slutt maskinvare.

Rekkefølgen er viktig. Det er bortkastede penger å bytte en haptisk motor fordi Ikke forstyrr slo av vibrasjonen.

## Kontroller vibrasjonsinnstillingene først

Åpne Innstillinger og se etter lyd, vibrering eller haptikk. Den nøyaktige plasseringen avhenger av produsenten.

På Samsung Galaxy-telefoner går du til Settings > Sounds and vibration > Vibration intensity. Anrop, varsler, systemrespons og berøringsrespons kan ha egne glidebrytere. Det er lett å skru ned én av dem og la resten stå på.

Kontroller også Ikke forstyrr. På standard Android og Pixel ligger kontrollene vanligvis under Settings > Notifications > Do Not Disturb. På Samsung er den tilsvarende plasseringen Settings > Notifications > Do not disturb. Funksjonen kan slå av vibrasjon, avhengig av hvordan anrop, apper og tidsplaner er konfigurert.

Sjekk også tastaturet. Gboard, Samsung Keyboard og SwiftKey har egne innstillinger for haptisk respons. Hvis tastaturvibrasjon er avslått i selve tastaturappen, vil ikke telefonen vibrere når du skriver selv om motoren fungerer.

## Bruk en direkte vibrasjonstest

Samsung Galaxy-telefoner har det ryddigste innebygde alternativet. Åpne Samsung Members, trykk Diagnostics på Discover-fanen og velg Phone diagnostics. Kjør testen Vibration. Samsung oppgir fortsatt vibrasjon som en egen telefontest, så dette er tryggere enn å stole på skjulte koder.

Den gamle Samsung-koden `*#0*#` åpner fortsatt en maskinvaretestmeny på mange Galaxy-modeller. Velg Vibration, og telefonen skal vibrere til du avslutter testen. Koden må tastes i Samsungs egen Telefon-app. Operatørprogramvare, nyere One UI-sikkerhet eller bedriftsbegrensninger kan blokkere menyen.

Noen Android-telefoner reagerer også på `*#*#0842#*#*`, en kode som lenge har vært brukt til å teste vibrasjon og bakbelysning. Ikke behandle den som universell. Pixel-telefoner støtter den vanligvis ikke, og mange moderne oppringingsapper ignorerer den.

På Xiaomi-, Redmi- og POCO-telefoner kan du prøve CIT-menyen med `*#*#6484#*#*`. Menynavn og testutvalg varierer mellom MIUI- og HyperOS-versjoner, men en vibrasjonstest er ofte inkludert.

## Test fin haptikk med tastaturet

Åpne en notatapp og skriv noen setninger. Hvis berøringsvibrasjon er aktivert, skal hvert tastetrykk gi en liten puls.

Dette er nyttig fordi testen både dekker svak haptikk og den kraftigere vibrasjonen ved innkommende anrop. En motor som kan gi tastaturpulser, men ikke vibrerer ved anrop, har sannsynligvis et problem med varslingsinnstillingene.

På Android kan apper styre vibrasjon gjennom egne varslingskanaler. Åpne appens varslingsinnstillinger og kontroller den aktuelle kategorien. For Telefon, Meldinger, WhatsApp, Telegram eller Gmail må vibrasjon være aktivert for den bestemte varslingskanalen.

## Skill programvare fra maskinvare

Start telefonen på nytt først. Det høres for enkelt ut, men haptikk kan slutte å virke etter en programvarefeil og komme tilbake etter en omstart.

Hvis vibrasjonen virker etter omstart og forsvinner igjen senere, starter du i sikker modus. På mange Android-telefoner holder du inne av/på-knappen og deretter valget for å slå av til menyen for sikker modus vises. På mange Samsung-enheter starter du på nytt og holder Volum ned inne under oppstart. Fremgangsmåten varierer mellom modeller.

Sikker modus deaktiverer tredjepartsapper. Hvis vibrasjonen virker der, fjerner eller deaktiverer du nylig installerte automatiseringsapper, anropsfiltre, batterisparere, startskjermapper og tilgjengelighetsverktøy ett om gangen. Det er de vanligste mistenkte.

Hvis vibrasjonen ikke virker i sikker modus, ikke reagerer i Samsung Members eller produsentens testmeny, og alle innstillinger er aktivert, er motoren eller forbindelsen til den sannsynligvis defekt.

## Hva som kan svikte inne i telefonen

Android-telefoner bruker vanligvis én av to typer haptiske motorer. Eldre og rimeligere telefoner har ofte en motor med eksentrisk roterende masse, forkortet ERM. Den kjennes som en liten roterende summing. Mellomklasse- og toppmodeller bruker oftere en lineær resonansaktuator, eller LRA, som gir skarpere og mer presise pulser.

Begge kan svikte. Et fall kan løsne en flexkabel, skade loddepunkter eller sprekke festet som holder motoren mot rammen. Vannskade kan korrodere kontakten. Slitasje er også mulig, men haptiske motorer varer vanligvis lenge med mindre telefonen har fått et slag eller vært åpnet tidligere.

Ustabil vibrasjon er et klassisk tegn på løs forbindelse. Sterk én dag, svak den neste, helt borte etter et fall. Det mønsteret er mer mistenkelig enn en motor som bare stopper permanent.

## Hva du kan forvente av reparasjon

Bytte av vibrasjonsmotor er vanligvis en av de rimeligere maskinvarereparasjonene, men forseglede telefoner må fortsatt varmes opp, få limet fjernet og settes forsiktig sammen igjen. På modulære telefoner, som enkelte Fairphone-modeller, kan delen byttes av brukeren. På de fleste vanlige Android-telefoner må en tekniker åpne bakpanelet.

Hvis telefonen nylig falt i bakken og vibrasjonen ble ustabil rett etterpå, bør du be verkstedet kontrollere kontakten før motoren byttes. Noen ganger er motoren i orden, mens kabelen bare ikke sitter riktig.

runcheck tester ikke vibrasjonsmotoren direkte, men kan fange opp beslektede varselsignaler som overoppheting, endringer i batteriforbruk eller ustabil lading etter fall eller fuktskade.
