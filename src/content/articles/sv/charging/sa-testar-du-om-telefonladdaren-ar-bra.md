---
title: "Så testar du om telefonladdaren är bra"
description: "Metabeskrivning: Lär dig testa om laddaren till din Android-telefon ger rätt effekt med appar, kabelbyten, fysisk kontroll och USB-effektmätare."
listSummary: "laddning, batteri och android"
hub: "charging"
sourceNumber: 44
order: 8
tags: ["laddning","batteri","android","guide","hårdvara"]
locale: "sv"
draft: false
---
En laddare kan passa i uttaget och ändå misslyckas med själva laddningen. USB-C berättar bara att kontakten passar. Det säger inget om huruvida adaptern, kabeln och telefonen lyckades komma överens om snabbladdning.

Android 17 ändrar inte det grundproblemet. Det finns fortfarande ingen gemensam Android-skärm som säger: "Den här laddaren levererar 23,4 W just nu." Du måste dra slutsatsen själv eller mäta ordentligt.

## Läs den pyttelilla utgångsmärkningen först

Börja med den tråkiga delen: titta på adaptern. Vänd på den och leta efter raden som anger utgångseffekt. Där kan stå exempelvis 5 V/3 A, 9 V/2,22 A eller 20 V/3,25 A. Multiplicera volt med ampere för att få watt. En profil på 9 V/2,22 A är ungefär 20 W. En på 20 V/3,25 A är 65 W.

En enkel USB-A-adapter kanske bara anger 5 V/1 A eller 5 V/2 A. Det motsvarar 5 W eller 10 W, vilket är långsamt för en modern telefon. En USB-C PD-laddare brukar ange flera spänningsnivåer och en maximal effekt, till exempel 25 W, 45 W, 65 W eller mer.

Om laddaren saknar märkning bör du vara misstänksam. Bra adaptrar från kända tillverkare har sina utgångsvärden tryckta någonstans, även om du behöver en ficklampa för att läsa dem.

## Använd en app för en snabb kontroll

Android gör batteriström och vissa relaterade batterivärden tillgängliga via systemets API:er, så appar kan uppskatta vad som når batteriet. Ampere och AccuBattery är vanliga alternativ för en snabb kontroll.

Koppla in laddaren, öppna appen och vänta 20-30 sekunder tills mätvärdet har stabiliserats. Håll skärmens ljusstyrka låg, stäng krävande appar och testa när batteriet ligger någonstans mellan 20 % och 70 %. Telefoner sänker laddningshastigheten nära toppen, så ett test vid 94 % får en bra laddare att se sämre ut än den är.

Var försiktig med siffran. Appen visar nettoströmmen till batteriet, inte den exakta effekt som lämnar väggadaptern. Telefonen förbrukar ström samtidigt, laddningskretsen förlorar en del energi som värme och olika enheter rapporterar batteriström på olika sätt. På vissa telefoner kan värdet vara märkligt begränsat, fördröjt eller helt enkelt inte särskilt användbart.

Använd appmätningar för jämförelser, inte som ett exakt bevis. Om en kabel visar 400 mA och en annan 2 400 mA med samma adapter har du lärt dig något. Om en app säger att din laddare på 30 W bara ger 18 W betyder det däremot inte automatiskt att laddaren är dålig.

## Byt kabel innan du skyller på adaptern

Kablar kan försämras utan att sluta fungera helt. De överför fortfarande ström, så det är lätt att tro att allt är i ordning, men telefonen kan falla tillbaka till ett långsamt laddningsläge eftersom kabeln inte klarar den förväntade strömmen eller inte förhandlar fram rätt profil.

Testa med en kabel som du vet fungerar. Kabeln som följde med telefonen är ett bra första val. En certifierad USB-C-kabel från en seriös tillbehörstillverkare är ett annat. Ta inte en tunn gammal kabel ur en låda och förvänta dig att den ska bevisa något.

Skador nära kontakterna är vanliga. Om telefonen ansluter och kopplar från när du rör kabeln, eller om kontakten känns lös i flera enheter, byt kabeln. Det är inte värt ytterligare en timmes felsökning.

## Använd en USB-effektmätare när du vill ha riktiga siffror

En USB-C-effektmätare som kopplas in mellan laddaren och telefonen ger det tydligaste testet. Den visar spänning, ström och effekt på sin egen skärm. Bättre mätare visar även information om USB Power Delivery, bland annat vilken spänningsprofil som har förhandlats fram och om PPS är aktivt.

Det spelar roll eftersom telefonen inte alltid begär laddarens maximala effekt. En adapter på 65 W som kopplas till en telefon med ett tak på 25 W bör leverera omkring 25 W som mest, inte 65 W. Det är normalt.

Använd samma kabel när du jämför flera adaptrar. Använd samma adapter när du jämför flera kablar. Ändra en sak i taget, annars blir resultatet mest brus.

En effektmätare kan också avslöja kabelproblem som appar har svårt att se. Om adaptern kan ge 9 V men telefonen hela tiden faller tillbaka till 5 V handlar det sannolikt om ett förhandlingsproblem, inte bara om ett lågt värde för batteriström.

## Håll utkik efter fysiska varningssignaler

Det är normalt att en laddare blir varm vid snabbladdning. Det är inte normalt att den blir så het att den inte går att hålla i.

Lyssna efter surrande ljud och kontrollera om det luktar bränt, om plasten är sprucken, stickproppens stift är böjda, det finns brännmärken, USB-porten är lös eller kabeländen glappar i telefonen. Avbruten laddning är också ett varningstecken. Om laddningssymbolen tänds och släcks ska du sluta använda kabeln eller adaptern tills du har hittat orsaken.

Billiga förfalskade laddare är inget jag skulle chansa med. Moderna telefoner har skyddskretsar, men instabil spänning och dålig isolering är fortfarande dåliga nyheter. Att spara några tior på en namnlös adapter är inte värt risken.

## Matcha protokollet för snabbladdning

En laddare kan vara bra men ändå passa dåligt till just din telefon. Google Pixel och många Samsung-modeller använder USB-C Power Delivery, och PPS-stöd behövs för bästa möjliga Samsung Super Fast Charging. OnePlus- och OPPO-telefoner behöver ofta SUPERVOOC-kompatibla laddare och kablar för sina högsta hastigheter. Xiaomi HyperCharge har också egna krav.

När protokollen inte matchar faller telefonen vanligtvis tillbaka till ett långsammare USB-läge. Inget går sönder. Det går bara inte särskilt fort.

En laptoppladdare på 65 W kan säkert ladda en telefon som bara stöder 25 W, eftersom telefonen begär den effekt den kan ta emot. Den högre märkningen betyder bara att laddaren har mer kapacitet för bärbara datorer, surfplattor och andra enheter.

## När den bör bytas ut

Byt laddaren om den överhettas, luktar fel, surrar högt, har skadad plast eller ger instabila resultat med flera fungerande kablar och flera enheter. Byt kabeln om problemet följer med kabeln.

Om båda fungerar normalt med andra enheter kan telefonen begränsa laddningen för att batteriet är varmt, porten är smutsig, batteriet nästan är fullt eller telefonen inte stöder laddarens protokoll för snabbladdning.
