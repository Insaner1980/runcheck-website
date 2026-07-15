---
title: "Xiaomis CIT-meny: dolda hårdvarutester för Xiaomi, Redmi och POCO"
description: "CIT är den snabbaste inbyggda hårdvarukontrollen på de flesta Xiaomi-telefoner, även Redmi- och POCO-modeller med officiella MIUI eller HyperOS. Den är inte snygg. Den förklarar inte särskilt mycket. Men när du behöver veta om pekskärmen, högtalaren, mikrofonen, en sensor eller kameran faktiskt svarar tar den dig till svaret snabbare än de flesta diagnostikappar i Play Store."
listSummary: "Använd Xiaomis CIT-meny för att testa telefonens viktigaste hårdvarudelar."
hub: "brands"
sourceNumber: 159
order: 7
tags: ["hårdvara","testning","diagnostik","android","guide"]
locale: "sv"
draft: false
---
På supportsidorna kallar Xiaomi den vanligtvis hardware detection eller CIT mode. Du stöter främst på menyn vid felsökning av ett specifikt problem, till exempel en pekskärm som registrerar fel eller en telefon som startar om hela tiden. Menyn är gjord för en kontroll i stunden, inte för att följa enhetens skick över tid.

Det är hela poängen.

## Öppna CIT först

Den snabbaste vägen är koden i telefonappen. Öppna Telefon och skriv `*#*#6484#*#*`. På vissa Xiaomi-versioner öppnar `*#*#64663#*#*` samma meny för hårdvarukontroll. Du behöver inte trycka på samtalsknappen.

Om koden inte reagerar kan du prova vägen via Inställningar. Den engelska menyvägen är **Settings > About phone > Detailed info and specs** eller **Settings > About phone > All specs**. Tryck sedan flera gånger på **Kernel version**. I många MIUI- och HyperOS-versioner börjar telefonen räkna ned och öppnar CIT.

Den exakta vägen varierar eftersom Xiaomi har ändrat layouten i Inställningar mellan MIUI, HyperOS, regionala versioner och surfplattor. I äldre MIUI-versioner kan **Kernel version** visas direkt under About phone. Nyare HyperOS-versioner gömmer den vanligtvis på sidan med detaljerade specifikationer.

Om ingen av vägarna öppnar CIT bör du kontrollera tre saker innan du antar att funktionen saknas: telefonen kör officiell Xiaomi-programvara, du använder den medföljande appen Telefon och enheten kör inte en anpassad ROM som LineageOS. Anpassade ROM-versioner tar ofta bort Xiaomis privata diagnostikkomponenter.

## Vad CIT faktiskt kan testa

CIT testar hårdvaran tillräckligt direkt för att vara användbar, men ger fortfarande enkla resultat som godkänt eller underkänt. Menyn kan visa att en mikrofon inte spelade in eller att ett område på pekskärmen inte registrerade beröring. Den berättar inte om orsaken är vattenskada, en lös flexkabel, en dålig utbytesskärm eller ett fel i den fasta programvaran.

Menyn ändras mellan modeller. En Redmi Note utan NFC visar inte samma lista som ett Xiaomi-flaggskepp med IR-sändare, fingeravtrycksläsare under skärmen, barometer och flera kameramoduler. Det är normalt.

Vanliga CIT-kontroller omfattar skärm, pekpanel, hörlurshögtalare, högtalare, mikrofoner, vibrationsmotor, kameror, fingeravtryckssensor, närhetssensor, sensor för omgivningsljus, accelerometer, gyroskop, kompass, SIM-läsare, Wi-Fi, Bluetooth, NFC, IR-sändare och laddningsstatus.

## Kör pektestet först

Om du ska köpa en begagnad Xiaomi-telefon bör du börja med pektestet. Det hittar problem som en snabb svepning över startskärmen lätt missar.

Testet visar vanligtvis ett rutnät eller en rityta. Dra fingret över de angivna områdena och leta efter luckor, avbrutna linjer eller delar som vägrar bli gröna. En begagnad telefon kan se helt felfri ut och ändå ha en död remsa nära digitizerns kant. Jag hittar hellre det före betalningen än efteråt.

Xiaomis egna supportsidor rekommenderar CIT mode när panelen registrerar fel, laggar eller inte svarar ordentligt. De tar också upp de tråkiga orsaker som människor ofta hoppar över: sprucket glas, vattenskada, skärmskydd från tredje part, svettiga fingrar, instabila laddare eller en enda dålig app. Testet är användbart, men det är ingen magi.

## Sensorer, ljud, kameror och anslutningar

Ljudtesterna är enkla. Högtalartestet spelar ljud genom den vanliga högtalaren, receivertestet använder hörlurshögtalaren och mikrofontestet spelar in och återger ett kort ljudklipp. Lyssna efter sprakande ljud, låg volym, brus eller tystnad. En nedre mikrofon kan vara trasig även om samtal fortfarande låter bra, eftersom telefonen kan växla mikrofon beroende på app.

Sensortester visar vanligtvis aktuella värden eller ber dig göra en liten rörelse. Täck närhetssensorn nära hörlurshögtalaren. Rotera telefonen för att kontrollera gyroskopet. Rör den för att testa accelerometern och kompassen. Rikta ljussensorn mot en lampa och sedan bort från den. Om värdena aldrig ändras är något fel.

Kameratesterna öppnar de främre och bakre kameramodulerna. De bekräftar att kameran startar, fokuserar och tar en bild. De bevisar inte bildkvaliteten. En repad lins, dålig stabilisering, damm under glaset eller en dålig kameraapp från tredje part kan fortfarande orsaka problem utanför testet.

Anslutningskontrollerna söker efter Wi-Fi-nätverk eller Bluetooth-enheter. Det räcker för att bekräfta att radion ser omgivningen. Testet diagnostiserar inte routern, operatören, ett VPN eller en lägenhet full av störande 2,4 GHz-nätverk.

## Batteri, laddning och versionsinformation

CIT kan visa grundläggande information om batteri och laddning, till exempel laddningsnivå, spänning, temperatur och om telefonen upptäcker en laddare. Det är användbart när en telefon vägrar ladda eller bara laddas med en viss kabel.

Blanda inte ihop det med en riktig historik över batterihälsan. CIT ger inget långsiktigt diagram över försämring, ingen tidslinje över laddningscykler och ingen jämförelse mellan laddare. Det är en ögonblicksbild.

I många Xiaomi-versioner finns också ett område med hårdvaruinformation. På Xiaomis supportsidor används `*#*#6484#*#*` för att öppna hårdvarukontrollen och granska uppgifter som IMEI, versionsnummer, basbandsversion, kernelversion, CPU ID och hårdvaruversion. Det är praktiskt när du vill jämföra programvaruversionen i Inställningar med informationen på lägre nivå i enheten.

## Android 17, HyperOS och kompatibilitet

Android 17 har släppts först till Pixel-enheter som stöds. Xiaomi finns med på Googles lista över partner för Android 17 Beta, men det betyder inte att varje Xiaomi-, Redmi- eller POCO-telefon redan kör den stabila versionen av Android 17.

På Xiaomi-telefoner är programvarulagret det viktiga här: MIUI eller HyperOS. CIT är Xiaomis funktion för hårdvarukontroll, inte en allmän funktion i Android 17. En HyperOS-uppdatering kan ändra menyvägen, dölja en kod, byta namn på ett test eller rätta ett diagnostikfel utan att Android i sig är huvudorsaken.

Enkelt uttryckt behöver du inte bli orolig om en guide för MIUI 14 inte stämmer exakt med din HyperOS-telefon. Prova båda öppningsmetoderna.

## När CIT är användbart

CIT passar bäst för snabba kontroller före köp av en begagnad telefon, efter ett fall eller kontakt med vatten, eller efter en skärm- eller batterireparation. Kör hela det automatiska testet om du har tid. Kör enskilda tester om du redan vet vilket område som krånglar.

Ta en skärmbild av resultatsidan om du behöver bevis. Räkna inte med att CIT sparar en permanent rapport som går att exportera senare.

Menyn är mindre användbar för långsamma telefoner, slumpmässiga appkrascher, lagringsbrist, batteriförbrukning över flera dagar eller termisk strypning under spel. De problemen kräver historik, inte ett hårdvarutest på en minut.

## Vanliga frågor

### Kan CIT skada telefonen?

Nej. De vanliga testerna läser sensorer, spelar ljud, aktiverar vibrationsmotorn, öppnar kameror och kontrollerar om komponenterna svarar. De raderar inte data och flashar inte firmware. Avsluta med bakåtknappen eller starta om telefonen om menyn fastnar.

### Varför är vissa etiketter på kinesiska?

Vissa Xiaomi- och Redmi-modeller visar fortfarande oöversatta CIT-etiketter, särskilt med programvara för den kinesiska marknaden eller äldre MIUI-versioner. Testerna fungerar vanligtvis likadant. Språket är irriterande, inte farligt.

### Fungerar CIT på POCO-telefoner och Xiaomi-surfplattor?

Vanligtvis, ja, om enheten kör officiell Xiaomi-programvara. Vilka tester som finns beror på hårdvaran. En surfplatta med enbart Wi-Fi visar inte samma mobilnätskontroller som en Redmi-telefon, och en POCO utan IR-sändare visar inget IR-test.

---

*Metabeskrivning: Xiaomis CIT-meny låter dig köra inbyggda hårdvarutester på Xiaomi-telefoner. Här får du koderna, vägen via Inställningar, de mest användbara testerna och vad CIT inte kan diagnostisera.*
