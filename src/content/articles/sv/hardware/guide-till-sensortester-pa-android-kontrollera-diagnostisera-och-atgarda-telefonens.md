---
title: "Guide till sensortester på Android: kontrollera, diagnostisera och åtgärda telefonens sensorer"
description: "Hur vet du om automatisk rotering är trasig, kompassen är förvirrad eller en app bara beter sig illa? Det är det irriterande med sensorproblem. De verkar små tills navigering, samtal, kamerastabilisering, stegräkning eller automatisk ljusstyrka måste fungera."
listSummary: "Hur vet du om automatisk rotering är trasig, kompassen är förvirrad eller en app bara beter sig illa?"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["hårdvara","testning","diagnostik","android","guide"]
locale: "sv"
draft: false
---
Android-telefoner använder en blandning av rörelse-, miljö-, positions- och närhetssensorer. Vissa är fysiska kretsar. Andra är "virtuella" sensorer som räknas fram från flera komponenter. När en av källorna börjar ge brusiga värden eller blir blockerad eller avstängd kan symptomen dyka upp på ett helt annat ställe.

Börja enkelt. Du behöver varken root, ADB eller ett laboratorium för den första testomgången.

## Snabba sensortester

Prova de här vardagliga kontrollerna innan du installerar något:

- Vrid telefonen från stående till liggande läge med rotationslåset avstängt. Det testar accelerometerns grundläggande funktion.
- Ta ett panoramafoto. Om telefonen inte kan följa rörelsen jämnt kan gyroskopet vara inblandat.
- Ring ett samtal och täck den övre delen av skärmen nära öronhögtalaren. Skärmen ska släckas och sedan tändas igen när du tar bort handen. Det testar närhetssensorn.
- Aktivera automatisk ljusstyrka och gå från ett ljust rum till ett mörkt. Skärmen bör justeras inom några sekunder.
- Öppna Maps och kontrollera den blå riktningsstrålen. Om den är bred eller pekar fel behöver magnetometern vanligtvis kalibreras, eller så måste telefonen flyttas bort från störningskällan.

För Samsung Galaxy är Samsung Members den enklaste vägen: öppna Samsung Members, tryck på Få hjälp och sedan Visa tester. Den äldre diagnostikmenyn `*#0*#` fungerar också på många Galaxy-telefoner och innehåller ett sensoravsnitt.

På Pixel-telefoner slår du `*#*#7287#*#*` för att öppna Pixel Diagnostics på modeller som stöds. På många Xiaomi-, Redmi- och POCO-enheter öppnar `*#*#6484#*#*` CIT-menyn. På Motorola använder du `Device Help > Device diagnosis > Hardware test`.

Behandla inte `*#*#4636#*#*` som ett sensortest. På många telefoner öppnar koden en test- eller informationssida för nätverk, användning, Wi-Fi och ibland batteri. Det är ingen universell meny för sensordiagnostik.

## Varför sensorproblem uppstår

Kalibreringsdrift är den vanligaste och tråkigaste orsaken. Accelerometrar, gyroskop och magnetometrar är beroende av kalibrering. Magnetometern är särskilt känslig eftersom magneter, metallskal, bilhållare, bärbara datorer, högtalare och vissa plånboksfodral kan störa den.

Fysiska skador kommer därefter. Ett fall kan flytta en sensormodul, böja ramen nära den övre kanten eller skada en flexkabel. Fuktskador kan utvecklas långsammare. Telefonen kan verka normal i en vecka, och sedan börjar närhetssensorn eller barometern bete sig konstigt när korrosionen utvecklas.

Blockerade sensorfönster är lätta att missa. Närhets- och ljussensorerna sitter ofta nära öronhögtalaren eller under skärmen. Ett tjockt skärmskydd, en hög kant på skalet, damm, hudfett eller felplacerat insynsskydd kan blockera eller sprida ljuset.

Programvara kan också störa sensorer. Stora Android-uppdateringar, ändringar i OEM-firmware, anpassade ROM-versioner, appbehörigheter och aggressiv batterihantering kan ändra vilka data appar får. Android 17 släpptes den 16 juni 2026 för de flesta Pixel-modeller som stöds, medan andra märken följer senare. Uppdateringsrelaterade sensorfel uppträder därför inte på alla telefoner samtidigt.

Ströminställningar spelar också roll. Android 9 begränsade bakgrundsåtkomst till kontinuerliga sensorer som accelerometer och gyroskop. Android 10 lade till utvecklarfunktionen `Sensors off`, en snabbinställningsruta som kan stänga av kameran, mikrofonen och sensorer som hanteras av Androids SensorManager. Om alla sensorer plötsligt verkar döda bör du kontrollera den snabbinställningen innan du antar att moderkortet har gått sönder.

## Testa accelerometern och gyroskopet

Stäng av rotationslåset och vrid telefonen långsamt. Skärmen ska byta orientering utan långa fördröjningar eller upprepade hopp. Om den vägrar rotera i alla appar kanske accelerometern inte rapporterar korrekt.

Öppna sedan en vattenpassapp eller en annan app som visar lutning. Lägg telefonen plant på ett bord. Värdena bör stabiliseras i stället för att driva oavbrutet. En liten avvikelse är normal. En stor fast lutning på en plan yta tyder på kalibreringsproblem.

För gyroskopet använder du panoramaläget i kameran eller en AR-app. Vyn ska följa rörelsen jämnt. Om panoramabilder misslyckas gång på gång eller AR-objekt glider trots att telefonen hålls stilla kan gyroskopet ge brusiga värden.

Här hjälper en jämförelse. Testa samma app på en annan telefon i samma rum. Om båda beter sig dåligt ligger problemet i appen eller miljön.

## Testa närhetssensorn

Ring ett samtal och håll handen ungefär två centimeter ovanför den övre delen av skärmen. Skärmen ska släckas. När du tar bort handen ska den tändas igen.

De flesta närhetssensorer i telefoner är inte exakta avståndsmätare. De rapporterar ofta bara nära eller långt, inte en jämn mätning centimeter för centimeter. I en diagnostikapp kan det visas som 0 cm och 5 cm utan något däremellan. Det är normalt.

Om värdet har fastnat tar du bort skalet och skärmskyddet. Rengör den övre skärmkanten eller sensorområdet med en mjuk trasa. Testa igen innan du skyller på hårdvaran. Skärmskydd av härdat glas är en klassisk orsak.

## Testa sensorn för omgivningsljus

Aktivera automatisk ljusstyrka. Lys med en ficklampa nära skärmens överkant och täck sedan samma område med handen. Ljusstyrkan bör reagera tydligt, även om Android kan jämna ut förändringen i stället för att hoppa direkt.

Ljussensorns värde visas vanligtvis i lux. Ett mörkt rum kan ligga under 50 lux. Ett vanligt kontor kan ligga på några hundra lux. Direkt solljus kan överstiga 10 000 lux. Det exakta värdet är mindre viktigt än att det förändras rimligt när ljuset ändras.

Om den automatiska ljusstyrkan beter sig märkligt men luxvärdet reagerar korrekt är sensorn troligen hel. Problemet ligger då snarare i den adaptiva ljusstyrkans inlärning, skärminställningarna eller OEM-programvara.

## Testa magnetometern och kompassen

Gå ut eller ställ dig bort från metallföremål. Öppna Maps och tryck på platsmarkören. Om den blå strålen är mycket bred eller pekar fel kalibrerar du kompassen.

Gör en åtta i luften: håll telefonen framför dig och för den i en stor liggande åtta samtidigt som du vrider handleden i olika vinklar. Fortsätt i 15-20 sekunder. Det ser fånigt ut. Det fungerar förvånansvärt ofta.

Om kompassen fortfarande visar fel tar du bort magnetiska tillbehör och testar igen. Bilhållare, plånboksfodral, MagSafe-liknande ringar, lock på bärbara datorer och metallbord kan alla förvränga värdena. Inomhus är kompassen ofta sämre än man tror.

## Testa barometern

Alla Android-telefoner har inte en barometer. Budgetmodeller hoppar ofta över den.

Om telefonen har en barometer bör en sensorapp visa lufttrycket i hPa eller millibar. Jämför med en närliggande väderstation. Förvänta dig inte en exakt matchning, eftersom väderappar ofta visar tryck omräknat till havsnivå medan telefonen mäter det lokala trycket på din höjd.

Ett helt fast och orimligt värde kan betyda att sensorn är blockerad eller trasig. Ventilationshålet är mycket litet, så fickludd och damm spelar roll.

## Läs råa sensordata utan att överanalysera

Råvärden är användbara, men jaga inte perfektion.

En accelerometer rapporterar acceleration längs X-, Y- och Z-axlarna i m/s². En telefon som ligger plant bör visa ungefär 9,8 m/s² på en axel på grund av gravitationen och nära noll på de andra, beroende på orienteringen.

Ett gyroskop rapporterar rotation i radianer per sekund. När telefonen ligger stilla bör värdena ligga nära noll. Små rörelser och sensorbrus är normala.

En magnetometer rapporterar magnetfältets styrka i mikrotesla. Jordens magnetfält ligger ofta någonstans omkring 25-65 mikrotesla beroende på plats. Värden långt utanför det intervallet betyder vanligtvis störningar.

En ljussensor rapporterar lux. Du letar efter rimliga förändringar, inte laboratorienoggrannhet.

## Åtgärder att prova före reparation

Starta om telefonen först. Tråkigt, men värt att göra.

Ta sedan bort skalet och skärmskyddet, rengör sensorområdet högst upp, stäng av Batterisparläge och kontrollera om snabbinställningsrutan `Sensors off` är aktiverad via Utvecklaralternativ. Om problemet bara påverkar en app kontrollerar du appens behörigheter och batteribegränsningar.

Vid kompassproblem kalibrerar du och flyttar telefonen bort från magneter. För automatisk rotering testar du flera appar eftersom vissa appar låser orienteringen. Vid problem med närhetssensorn testar du under ett riktigt samtal utan skärmskydd.

Om en sensor slutade fungera direkt efter en systemuppdatering installerar du väntande system- och Google Play-systemuppdateringar och testar igen. Om telefonen kör en betaversion bör du inte behandla ett enskilt sensorfel som bekräftat hårdvarufel förrän du har testat med stabil programvara.

En diagnostikapp som runcheck är användbar när symptomen överlappar. Batteribelastning, värme och nätverksproblem kan få telefonen att kännas trasig även när sensorn bara är en del av problemet.

## När det troligen är hårdvaran

Misstänk hårdvara när samma sensor misslyckas i alla appar, misslyckas i tillverkarens diagnostikverktyg, inte fungerar i säkert läge och fortfarande är trasig efter en återställning.

Enskilda telefonsensorer är vanligtvis små ytmonterade komponenter eller delar av en större modul. Reparationsverkstäder byter sällan bara ett sensorchip. I praktiken kan reparationen innebära byte av skärmenhet, kameramodul, nedre kretskort eller en del av huvudkortet, beroende på var sensorn sitter.

Om telefonen har tappats, böjts eller utsatts för vatten bör du nämna det när du begär en reparationsoffert. Det påverkar vad teknikern behöver undersöka.
