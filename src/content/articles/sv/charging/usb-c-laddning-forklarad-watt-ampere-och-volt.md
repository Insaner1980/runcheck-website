---
title: "USB-C-laddning förklarad: watt, ampere och volt"
description: "Metabeskrivning: Vad watt, ampere och volt betyder vid laddning av Android-telefoner, hur USB Power Delivery fungerar och varför alla USB-C-laddare inte ger samma hastighet."
listSummary: "laddning, batteri och android"
hub: "charging"
sourceNumber: 46
order: 10
tags: ["laddning","batteri","android","guide","hårdvara"]
locale: "sv"
draft: false
---
Watt är siffran du främst behöver bry dig om. Volt och ampere förklarar hur laddaren kommer dit, men effekten i watt visar hur mycket strömförsörjning som finns tillgänglig.

En laddare som ger 9 V vid 2 A levererar 18 W. En laddare som ger 20 V vid 3 A levererar 60 W. Matematiken är enkel: volt multiplicerat med ampere är lika med watt.

Enkelt. Tills USB-C-förhandlingen kommer in i bilden.

## Vad uppgifterna på laddaren betyder

De flesta USB-C-laddare anger flera kombinationer för utspänning och ström. Det kan till exempel stå:

- 5 V/3 A = 15 W
- 9 V/3 A = 27 W
- 15 V/3 A = 45 W
- 20 V/3,25 A = 65 W

Det här är effektprofilerna som laddaren kan erbjuda. Telefonen tar inte automatiskt den högsta. Den begär en profil som den stöder, och laddaren växlar till den nivån.

Därför bränner en laptopladdare på 100 W inte sönder en telefon som stöder 18 W. Telefonen begär inte 100 W. Den väljer en lägre profil eller går tillbaka till vanlig laddning om laddaren och telefonen inte kan komma överens om ett bättre alternativ.

## Så fungerar förhandlingen med USB Power Delivery

USB Power Delivery, oftast förkortat USB PD, är den viktigaste öppna standarden för snabbladdning i många Android-telefoner, surfplattor, bärbara datorer och tillbehör.

När du ansluter en USB-C-kabel kommunicerar laddaren och telefonen via stiften för Configuration Channel. Laddaren meddelar vilka Power Data Objects, eller PDO:er, den stöder. Telefonen väljer en av dem. Därefter levererar laddaren den spänning och strömstyrka som parterna har kommit överens om, inom de fastställda gränserna.

En USB PD-laddare på 45 W kan till exempel erbjuda 5 V/3 A, 9 V/3 A, 15 V/3 A och 20 V/2,25 A. En telefon som stöder laddning med 25 W kan välja en profil nära 9 V. En bärbar dator kan välja 20 V från samma nätadapter.

Laddaren pressar inte in effekt i telefonen. Telefonen tar den effekt som den kan använda.

## Därför spelar PPS roll

Vanlig USB PD använder fasta spänningssteg, exempelvis 5 V, 9 V, 15 V och 20 V. PPS står för Programmable Power Supply och gör det möjligt för telefonen att begära mindre förändringar av spänning och ström inom det intervall som laddaren har angett.

Det spelar roll eftersom ett litiumjonbatteri inte vill ha samma spänning under hela laddningen. De bästa laddningsförhållandena förändras när batteriet fylls. Vid laddning med fast spänning sker en större del av omvandlingen inne i telefonen, och den omvandlingen skapar värme. Med PPS kan laddaren lägga sig närmare det som telefonen behöver just då.

Samsungs Super Fast Charging bygger på USB PD med PPS. Pixel-telefoner stöder också PPS. En vanlig USB PD-laddare utan PPS kan fortfarande fungera, men den kanske inte aktiverar telefonens bästa laddningsläge.

## Quick Charge, VOOC, SUPERVOOC och HyperCharge

USB PD är det närmaste Android kommer ett gemensamt laddningsspråk. Men det är inte det enda.

Qualcomm Quick Charge var vanligt i Android-telefoner under många år. Nyare versioner av Quick Charge överlappar mer med USB PD, men äldre laddare och telefoner kan fortfarande fungera annorlunda än en ren USB PD-lösning.

OPPO VOOC och OnePlus SUPERVOOC använder en annan strategi. De skickar ofta hög ström genom en kompatibel laddare och kabel, så att mindre värme utvecklas inne i telefonen. Därför kan systemen vara mycket snabba, men också kräsna. OnePlus uppger att SUPERVOOC-snabbladdning kräver en telefon och datakabel som är kompatibla med SUPERVOOC.

Xiaomi HyperCharge fungerar på ett liknande, märkesspecifikt sätt i många modeller. En vanlig USB-C PD-laddare laddar normalt telefonerna, men den marknadsförda toppeffekten kräver ofta originalladdaren eller en laddare och kabel som stöder samma protokoll.

Samsungs namn är en liten fälla i sig. Adaptive Fast Charging på äldre Samsung-telefoner är inte samma sak som Super Fast Charging på nyare modeller. Det nyare läget använder USB PD med PPS.

## Kabelns märkning begränsar också hastigheten

Kabeln ingår i förhandlingen. Att behandla den som en enkel ledning orsakar mycket förvirring kring laddning.

Många USB-C-kablar är klassade för 3 A. Vid 20 V räcker det till 60 W. Högre effekt kräver en 5 A-kabel med ett e-marker-chip, så att laddaren och enheten vet att kabeln kan hantera strömmen säkert.

USB-IF:s certifieringsmärkningar har blivit tydligare. Certifierade USB-C-kablar märks med effektnivåer som 60 W eller 240 W, och snabbare datakablar kan även visa en logotyp för datahastigheten. Det är betydligt enklare än att försöka tolka ett långt USB-versionsnamn.

För telefoner räcker en bra USB-C-kabel på 60 W för det mesta. För bärbara datorer, surfplattor och laddare med hög effekt kan en kabel på 240 W vara användbar. Med märkesspecifika laddningssystem för telefoner kan rätt kabel fortfarande vara viktigare än wattalet som står tryckt på den.

## Vilken laddare bör du köpa?

För många Android-telefoner som använder USB PD eller PPS räcker en USB-C PD PPS-laddare på 25-30 W. Den täcker de vanliga snabbladdningshastigheterna för de flesta Pixel-modeller och många Samsung-telefoner.

Har du en Samsung-modell som stöder laddning med 45 W behöver du en PPS-laddare som uttryckligen stöder rätt 45 W-profil. Har du OnePlus, OPPO eller Xiaomi och vill nå den marknadsförda maxhastigheten bör du använda laddaren och kabeln som är avsedda för det protokollet.

Det går bra att köpa en laddare med högre effekt än telefonen stöder. Den skadar inte telefonen, och den kan vara praktisk om samma nätadapter också ska ladda en bärbar dator eller surfplatta. Förvänta dig bara inte att en laddare på 100 W ska ladda en telefon på 25 W fyra gånger snabbare.

Det minst glamorösa rådet är också det bästa: välj rätt protokoll i stället för att jaga den högsta siffran.
