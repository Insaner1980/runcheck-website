---
title: "Så jämför du laddningshastigheter på Android"
description: "Metabeskrivning: Praktiska metoder för att jämföra laddningshastigheter på Android med appar, USB-effektmätare, telefonens inbyggda ledtrådar och kontrollerade tester."
listSummary: "laddning, batteri och android"
hub: "charging"
sourceNumber: 45
order: 9
tags: ["laddning","batteri","android","guide","hårdvara"]
locale: "sv"
draft: false
---
Du kopplar in laddaren vid sängen och telefonen säger att den snabbladdar. Du kopplar in laddaren vid skrivbordet och får samma besked. Den ena når 80 % innan kaffet är klart. Den andra gör det inte.

Etiketten räcker inte. Du behöver jämföra den effekt som telefonen faktiskt tar emot.

## Varför två laddare kan kännas så olika

Laddningshastigheten är en förhandling mellan tre saker: laddaren, kabeln och telefonen. Laddaren meddelar vad den kan leverera. Kabeln kan begränsa strömmen. Telefonen bestämmer vad den vill ta emot utifrån protokollstöd, batterinivå, temperatur och sina egna laddningsregler.

Om telefonen och laddaren båda stöder USB Power Delivery vid 9 V/3 A kan de enas om omkring 27 W. Om laddaren bara stöder vanlig USB-utgång på 5 V/1 A får samma telefon 5 W. En avancerad adapter kan inte köra över telefonens begäran.

Kablar spelar större roll än många tror. En vanlig USB-C-kabel för 3 A räcker för många telefoner, men låser inte upp alla högeffektslägen. Tillverkarspecifika system som OnePlus SUPERVOOC, OPPO VOOC och vissa Xiaomi HyperCharge-lösningar behöver ofta rätt kombination av laddare och kabel. En vanlig USB-C-kabel kan fortfarande ladda telefonen, men betydligt långsammare.

Temperaturen är den tysta variabeln. En telefon som nyss har använts för spel, videoinspelning eller legat i solen kan begränsa laddningen även med den bästa laddaren du äger. Testar du en varm telefon får du en dålig jämförelse.

## Det snabba apptestet

För en snabb jämförelse kan du använda en app som Ampere eller AccuBattery. Koppla in laddare A, vänta tills värdet stabiliseras och anteckna ström och spänning. Koppla sedan in laddare B med samma kabel och upprepa testet.

Håll batterinivån inom samma område vid varje test. Mellan 20 % och 50 % är ett bra intervall, eftersom de flesta telefoner laddar kraftigt där. Det är orättvist att testa den ena laddaren vid 25 % och den andra vid 78 %. Den senare ser vanligtvis långsammare ut eftersom telefonen redan har börjat trappa ned effekten.

Appvärden är användbara, men inte perfekta. De mäter vad batterisidan rapporterar, inte den exakta effekten från vägguttaget. Skärmen, processorn, radiofunktionerna och laddningselektroniken påverkar alla siffran. Metoden passar därför bäst för att hitta tydliga skillnader, inte för att bevisa en exakt effekt i watt.

## Testet med effektmätare

En USB-C-effektmätare ger renare resultat. Koppla mätaren mellan laddaren och kabeln och följ spänning, ström och effekt i realtid. Mätare som kan tolka USB PD visar även den förhandlade profilen, vilket ofta är den saknade ledtråden.

Använd en och samma kabel för alla adaptertester. Vill du jämföra kablar använder du en adapter och byter bara kabeln. Det låter petigt, men är skillnaden mellan ett test och en gissning.

Mätaren förklarar också märkliga resultat. Anta att en laddare på 45 W bara visar 15 W. Laddaren kanske stöder 45 W, men inte den spänning eller det PPS-intervall som telefonen föredrar. Kabeln kan begränsa laddningen. Telefonen kan också vara för varm. Mätaren löser inte problemet, men visar var du bör börja leta.

## Telefonens inbyggda ledtrådar

Vissa Android-telefoner ger användbara ledtrådar utan att visa exakt effekt.

Samsung-telefoner skiljer mellan vanlig laddning, snabbladdning, Super Fast Charging och Super Fast Charging 2.0 beroende på laddare och modell. På nyare One UI-versioner finns batteriinställningarna under `Inställningar > Batteri`, och Samsung Members kan köra diagnostik för batteristatus, kabelladdning och trådlös laddning.

Pixel visar en uppskattad tid tills batteriet är fullt i batteriinställningarna när laddaren är ansluten. Det är ingen wattmätare, men en laddare som anger 1 timme och 20 minuter fungerar uppenbart annorlunda än en som anger 3 timmar.

Xiaomi- och OnePlus-telefoner visar ofta en märkesspecifik laddningsanimation eller ett effektvärde när snabbladdning är aktiv. Animationerna är inga laboratorieinstrument, men de är användbara när en laddare aktiverar fullhastighetsläget och en annan inte gör det.

## En rättvis jämförelse på 30 minuter

Gör så här för en jämförelse du kan lita på:

1. Ladda ur telefonen till samma startnivå varje gång, helst omkring 20 %.
2. Låt telefonen svalna i några minuter.
3. Använd samma kabel.
4. Aktivera flygplansläge eller låt åtminstone telefonen ligga oanvänd.
5. Ladda i 30 minuter och anteckna slutnivån.

Upprepa med nästa laddare från samma startnivå. Den laddare som fyller på flest procentenheter under samma tid är snabbast för just den telefonen.

Kör inte testet hela vägen till 100 %. Den sista delen är avsiktligt långsammare och döljer den verkliga skillnaden mellan laddarna. Intervallet 20-80 % är mer användbart.

## Kabel jämfört med trådlöst

Du kan jämföra kabel och trådlös laddning på samma sätt, men bli inte förvånad om det trådlösa alternativet förlorar. Äldre Qi-laddare och många kombinationer av telefon och laddare ligger omkring 5-15 W. Qi2 introducerade magnetisk laddning på 15 W, och Qi2 25W finns nu, men både telefonen och laddaren måste stödja den aktuella nivån.

USB-C med kabel är fortfarande det säkrare valet när hastigheten är viktigast. Trådlöst handlar mer om bekvämlighet, placering och mindre slitage på kontakten. Det är vanligtvis inte den snabbaste vägen, särskilt om telefonen blir varm på laddningsplattan.

## Så hjälper runcheck

runcheck har funktionen Charger Comparison i Pro. Koppla in en laddare, ge den ett namn och låt appen registrera laddningshastigheten under sessionen. När du har testat några laddare och kablar kan du jämföra genomsnittlig mAh per timme och effekt sida vid sida.

Det spelar roll eftersom den bästa laddaren inte alltid är den största. En sval och stabil lösning på 25 W kan vara mer användbar än en laddare som når en hög topp i två minuter och sedan stryps när telefonen blir varm.

## Några vanliga fallgropar

Testordningen spelar roll. En telefon på 25 % laddar vanligtvis snabbare än samma telefon på 75 %.

En laddare på 65 W tvingar inte en telefon som stöder 25 W att ta emot 65 W. Telefonen väljer.

Om två laddare presterar nästan likadant, använd den som håller sig svalare. Värme är fienden även när laddningstiden ser identisk ut.
