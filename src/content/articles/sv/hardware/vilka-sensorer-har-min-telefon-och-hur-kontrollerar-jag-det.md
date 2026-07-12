---
title: "Vilka sensorer har min telefon, och hur kontrollerar jag det?"
description: "Varför visar en telefon din gångriktning exakt i Maps medan en annan bara visar en diffus blå cirkel? Svaret är oftast sensorerna. Alla Android-telefoner har några, men den exakta kombinationen beror på modell, prisklass och tillverkningsår."
listSummary: "Varför visar en telefon din gångriktning exakt i Maps medan en annan bara visar en diffus blå cirkel?"
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnostik","sensorer","android","hårdvara","guide"]
locale: "sv"
draft: false
---
Ett flaggskepp från 2026 kan ha gyroskop, barometer, fingeravtryckssensor under skärmen, flera sensorer som kan väcka systemet och en hel samling programvarubaserade rörelsesensorer. En billig telefon från några år tillbaka kanske bara har grunderna. Skillnaden märks när skärmrotation, automatisk ljusstyrka, kompassriktning, AR-appar eller funktionen för att väcka telefonen genom att lyfta den inte fungerar som väntat.

## Börja med en sensorapp

Androids app Inställningar visar ingen fullständig förteckning över hårdvarusensorer. Där finns grundläggande enhetsinformation, men inte varje sensor som exponeras genom Androids sensorramverk.

Det enklaste sättet att kontrollera är en diagnostikapp från tredje part, till exempel DevCheck, CPU-Z, Sensor Test eller Sensors Toolbox. Öppna appen och leta efter hårdvarulistan. En bra app visar varje sensor som har registrerats i Android, inklusive sensorns namn, tillverkare, aktuella mätvärden, upplösning och strömförbrukning.

Detta är så nära sanningen du kan komma direkt från telefonen. Listan har ändå en hake: den visar sensorer som Android kan komma åt, inte varje fysisk komponent som sitter lödd på kretskortet. En fingeravtrycksläsare, kamerasensor, modemkomponent eller ultraljudsbaserat närhetssystem behöver inte visas bredvid accelerometern och gyroskopet.

## Koder i Telefon-appen kan hjälpa, men lita inte för mycket på dem

Vissa Android-telefoner har dolda testmenyer. Samsung-telefoner stöder ofta `*#0*#`, som kan öppna en diagnostikskärm för hårdvara med sensortester. På vissa Android-enheter öppnar `*#*#4636#*#*` en testmeny, men den handlar mer om telefon-, batteri- och nätverksinformation än om en fullständig sensorlista.

Det irriterande är att koderna inte är universella. Tillverkare, operatörer, regioner och nyare programvaruversioner kan inaktivera dem. Om en kod inte gör något bevisar det inte att telefonen saknar sensorn. Det visar bara att koden inte fungerade på just den enheten.

Specifikationsdatabaser är användbara som en andra kontroll. GSMArena och tillverkarnas produktsidor listar ofta telefonens sensorsammansättning under funktioner eller specifikationer. Det visar vad modellen skulle levereras med från fabriken. Däremot säger det inget om huruvida sensorn i just din telefon fungerar korrekt.

## Sensorerna du vanligtvis hittar

### Accelerometer

Accelerometern mäter acceleration längs tre axlar. Skärmrotation, stegräkning, skakgester och grundläggande rörelseavkänning är beroende av den. Nästan alla Android-telefoner har en.

### Gyroskop

Gyroskopet mäter rotation. Det ger mycket mer exakt orienteringsspårning, särskilt i AR, VR, kamerastabilisering och kartnavigering. Vissa budgettelefoner saknar det. Därför kan två telefoner båda köra Google Maps, men bara den ena pekar stabilt åt det håll du är vänd.

### Magnetometer

Magnetometern känner av magnetfält och fungerar som telefonens kompass. Den hjälper kartappar att räkna ut riktningen. Noggrannheten varierar mycket eftersom fodral, bilhållare, bärbara datorer, högtalare och annan elektronik kan störa mätningen.

### Närhetssensor

Närhetssensorn känner av när något finns nära skärmen, vanligtvis ansiktet under ett samtal. Telefonen använder den för att släcka skärmen och blockera oavsiktliga tryckningar med kinden.

Äldre telefoner använder vanligen en liten fysisk sensor nära samtalshögtalaren. Nyare modeller kan använda virtuell närhetsavkänning som bygger på programvara samt data från ljud, skärm eller omgivningsljus. Den utvecklingen är verklig, men felsökningen blir också rörigare eftersom beteendet inte alltid kan kopplas till en synlig sensor i en diagnostikapp.

### Ljussensor

Ljussensorn mäter omgivningens ljusstyrka i lux och används av den adaptiva ljusstyrkan. Den sitter vanligtvis nära den främre kameran, men på vissa moderna telefoner ligger den under skärmen.

Ett ljust kontor kan ge några hundra lux. Direkt solljus kan ligga långt över 10 000 lux. Häng inte upp dig på exakta värden. Det viktiga är om siffran ändras när du täcker telefonens överkant eller flyttar den till starkare ljus.

### Barometer

Barometern mäter lufttryck, vanligtvis i hektopascal. Telefoner använder den för snabbare höjduppskattningar och bättre platsinformation. Den är vanlig i många mellan- och toppmodeller, men långt ifrån självklar i billigare telefoner.

### Fingeravtryckssensor

En fingeravtrycksläsare är fortfarande en sensor även om Androids normala sensorlista inte visar den. Den kan vara optisk under glaset, ultraljudsbaserad under skärmen eller kapacitiv på sidan eller baksidan.

### Pulssensor

Separata pulssensorer är ovanliga i moderna telefoner. Samsung hade dem i vissa äldre Galaxy S- och Note-modeller, men funktionen har till stor del flyttat till klockor. Det är normalt om en aktuell telefon inte listar någon pulssensor.

## Sensorerna du kanske inte lägger märke till

Stegräknare och stegdetektor kan visas som separata sensorer. Android definierar både `TYPE_STEP_COUNTER` och `TYPE_STEP_DETECTOR`. Vissa telefoner hanterar dem med strömsnål hårdvara. Andra beräknar steg från accelerometerdata.

Rotation vector är vanligtvis en sammanslagen sensor. Den kombinerar rörelse- och orienteringsdata för att uppskatta telefonens position i 3D. Den kan visas i diagnostiken trots att det inte finns något fysiskt chip med namnet "rotation vector".

Gravity och linear acceleration är också beräknade mätvärden. Gravity isolerar gravitationens kraft. Linear acceleration tar bort gravitationen så att appar kan fokusera på den faktiska rörelsen.

Significant motion är en strömsnål aktiveringssensor som väcker telefonen när den registrerar en tydlig rörelse. Funktioner som väckning när telefonen lyfts och aktivitetsdetektering i bakgrunden kan vara beroende av den här typen av sensorbeteende.

Vikbara telefoner lägger till ytterligare en udda sensor: gångjärnsvinkel. Android har en sensortyp för gångjärnsvinkel på enheter som gör vikpositionen tillgänglig för appar. En vanlig telefon utan vikbar skärm har den inte.

## Hårdvarusensorer och programvarusensorer är inte samma sak

Android delar in sensorer i fysiska hårdvarusensorer och sensorer som beräknas i programvara. Accelerometern och gyroskopet är hårdvarusensorer. Gravity, linear acceleration och rotation vector kan beräknas från en eller flera hårdvarusensorer.

Skillnaden påverkar strömförbrukningen. En separat strömsnål stegräknare kan registrera steg hela dagen medan huvudprocessorn sover. En stegräknare i programvara måste göra mer arbete och kan därför använda mer batteri.

Sensorappen kan visa ett tillverkarnamn som Bosch, STMicroelectronics, TDK InvenSense, AKM eller Sensortek. Det tyder vanligtvis på en verklig hårdvarukomponent. Ett allmänt namn som ser ut att komma från Android eller AOSP pekar ofta på en sammanslagen eller programvarubaserad sensor.

Det finns ingen enkel regel som gäller för alla telefoner. OEM-tillverkare kan exponera egna sensorer, dölja viss hårdvara bakom systemtjänster eller ersätta en fysisk komponent med en programvarulösning.

## När sensorlistan spelar roll

De flesta bryr sig inte om sensorerna förrän något går sönder. Skärmen roterar inte. Den automatiska ljusstyrkan hoppar. En kompassapp pekar norrut rakt in i soffan. En AR-app vägrar starta eftersom telefonen saknar gyroskop.

En sensorapp hjälper dig att skilja mellan tre fall:

- Sensorn finns och värdena ändras normalt. Problemet ligger sannolikt i appinställningar, kalibrering, behörigheter eller programvara.
- Sensorn finns men värdena är frusna eller orimliga. Det kan tyda på en trasig sensor, ett fel i den fasta programvaran eller ett kalibreringsproblem.
- Sensorn visas inte alls. Telefonen kanske saknar den, och ingen inställning kan lägga till den i efterhand.

Du kan inte installera ett saknat gyroskop med programvara. Externa Bluetooth-sensorer finns för träning och specialanvändning, men de blir inte en del av telefonens inbyggda Android-ramverk för sensorer.

Flera poster för samma sensor är också normalt. En telefon kan exponera versioner som väcker eller inte väcker systemet, kalibrerade och okalibrerade versioner eller tillverkarspecifika kopior bredvid Androids vanliga sensortyper.
