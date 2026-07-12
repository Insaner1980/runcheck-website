---
title: "Vad är en närhetssensor och varför är den viktig?"
description: "Så fungerar närhetssensorn i en Android-telefon, varför samtal beter sig konstigt när den slutar fungera och hur du testar och åtgärdar vanliga sensorproblem."
listSummary: "diagnostik, sensorer och android"
hub: "hardware"
sourceNumber: 117
order: 14
tags: ["diagnostik","sensorer","android","hårdvara","guide"]
locale: "sv"
draft: false
---
Mitt under ett samtal tänds skärmen mot ansiktet och kinden öppnar knappsatsen. Då är det ofta den lilla sensorn som misslyckas med det enda jobb ingen tänker på förrän det slutar fungera.

Sensorn talar om för telefonen när något befinner sig nära frontglaset. Under ett samtal är detta "något" vanligtvis ditt ansikte. Android släcker då skärmen och ignorerar tryckningar så att örat inte blir ett tillbehör till pekskärmen.

## Så fungerar den

De flesta Android-telefoner använder en infraröd närhetssensor nära samtalshögtalaren eller den främre kameran. Den skickar ut infrarött ljus och mäter hur mycket som reflekteras tillbaka. Om tillräckligt mycket ljus återvänder bedömer telefonen att ett föremål är nära. När reflektionen minskar rapporterar den långt avstånd igen.

Androids egen sensordokumentation är lite mer flexibel än många tror. De flesta närhetssensorer rapporterar avstånd i centimeter, men vissa visar bara nära eller långt bort. För vanliga telefonsamtal är det egentligen allt Android behöver.

Några telefoner använder inte längre en tydlig, separat infraröd komponent på det gamla sättet. Vissa har sensorer under skärmen eller virtuell närhetsavkänning som kombinerar andra sensorer med programvara. Det sparar plats vid skärmens överkant, men lösningen kan bli känsligare för skärmskydd, smuts, glasskador och fel i den fasta programvaran.

## Var sitter den?

På äldre telefoner med en synlig övre skärmram sitter sensorn vanligtvis bredvid samtalshögtalaren, den främre kameran och ljussensorn. Den kan vara osynlig eftersom den ligger bakom ett mörkt fönster i glaset.

På nyare telefoner med hålkamera och nästan kantlös skärm kan sensorn ligga under skärmen eller bakom en mindre uppenbar del av frontglaset. Därför är den exakta placeringen svårare att gissa. Vid ett manuellt test bör du först täcka området runt samtalshögtalaren och den främre kameran.

## Tecken på en felande närhetssensor

Skärmen förblir tänd under samtal. Det är det klassiska symtomet. Du håller telefonen mot örat och kinden börjar trycka på knappar.

Skärmen förblir svart när du flyttar bort telefonen. Samtalet är slut, men du måste trycka på strömknappen eftersom skärmen inte vaknar av sig själv.

Skärmen slocknar medan du använder telefonen. Det kan hända när sensorn har fastnat i läget nära eftersom något blockerar den.

Oavsiktliga tryckningar i fickan blir vanligare. Närhetssensorn är inte telefonens enda skydd mot ficktryckningar, men ständiga felavläsningar ökar risken.

## Snabbtest under ett samtal

Ring röstbrevlådan eller ett annat nummer där du inte stör någon. Täck området nära samtalshögtalaren med handflatan under samtalet.

Skärmen ska slockna snabbt. Ta bort handen så ska den tändas igen inom ungefär en sekund. Om det tar flera sekunder, inget händer eller skärmen flimrar mellan av och på behöver sensorn undersökas.

Enkelt. Nästan irriterande användbart.

## Bättre diagnostiktester

På Samsung Galaxy-telefoner kan du prova `*#0*#` i Samsungs Telefon-app och leta efter sensortestet. Den mer användarvänliga vägen är Samsung Members > Få hjälp > Visa tester, och den bör vara förstahandsvalet om du helst undviker servicemenyer.

På telefoner från Xiaomi, Redmi och POCO kan du ange `*#*#6484#*#*` eller `*#*#64663#*#*` för att öppna CIT-läget. Xiaomi rekommenderar också att ta bort fodral och skärmskydd, rengöra telefonens överkant, uppdatera programvaran och använda hårdvarutestet när pek- eller sensorfunktioner beter sig fel.

På andra Android-telefoner kan du använda Sensor Test, Sensors Multitool eller DevCheck. Öppna värdet för närhetssensorn, för handen över telefonens överkant och se om värdet ändras. Vissa telefoner visar centimeter. Andra växlar mellan 0 och ett maxvärde, vilket bara betyder nära och långt bort.

Om värdet aldrig ändras är sensorn blockerad, inaktiverad, felkalibrerad eller trasig.

Vissa äldre guider rekommenderar Proximity Sensor Reset. Jag skulle inte börja där. Använd den först efter de grundläggande kontrollerna, och räkna inte med att en kalibreringsapp från tredje part kan laga en sensor som telefonen inte kan läsa alls.

## Börja med de vanliga orsakerna

Rengör skärmens överkant. Hudfett, damm, smink, ludd och intorkade rester kan blockera sensorfönstret. Använd en ren mikrofiberduk och var noggrann runt samtalshögtalaren.

Ta bort skärmskyddet. Det är en av de vanligaste orsakerna på telefoner med en dold närhetssensor eller en sensor under skärmen. Skyddet kan vara för tjockt, för mörkt vid sensorområdet eller sitta en aning fel. Testa telefonen utan skydd innan du skyller på moderkortet.

Ta bort fodralet. Fodral med lock, upphöjda kanter och dåligt skurna öppningar kan störa området längs skärmens överkant.

Starta om telefonen. Sensordrivrutiner kan fastna, särskilt efter lång drifttid eller direkt efter en systemuppdatering.

Uppdatera programvaran. Närhetsavkänningen styrs delvis av fast programvara. En större plattformsuppdatering, till exempel Android 17 först på Pixel och senare Android 17-versioner från andra OEM-tillverkare, kan ändra sensorbeteendet eftersom tillverkarens systemlager styr hårdvaran.

Kontrollera samtalsinställningarna. Vissa Xiaomi-versioner visar en inställning för närhetsavkänning bland samtalsinställningarna. Den exakta vägen varierar, men i äldre MIUI-guider användes den engelska sökvägen Settings > Apps > System app settings > Call settings > Incoming call settings > Proximity sensor.

## Kalibrering och virtuella sensorer

Vissa diagnostikmenyer innehåller kalibrering av närhetssensorn. Xiaomi CIT och äldre fabrikslägen från OnePlus är vanliga exempel. Kör bara kalibreringen när menyn tydligt erbjuder den och telefonen ligger plant, är ren och inte täcks av något.

Virtuella närhetssensorer är mer besvärliga. Om telefonen beräknar närhet med programvara kanske det inte finns någon fysisk del att byta. Då spelar uppdateringar av den fasta programvaran större roll än reparation. En fabriksåterställning kan rensa felaktig kalibreringsdata, men bör vara sista utvägen efter en säkerhetskopiering.

## När felet sitter i hårdvaran

Om sensorvärdet aldrig ändras i diagnostiken efter rengöring, borttagna tillbehör, omstart, uppdatering och test i felsäkert läge är ett hårdvarufel sannolikt.

Fall kan spräcka sensorområdet eller flytta skärmen. Vatten kan orsaka korrosion i sensorn eller flexkabeln. Efter en reparation kan en kontakt sitta löst eller sensorn vara täckt av fel sorts lim. Inget av detta löses med ännu en sensorapp.

När telefonen har en separat infraröd närhetssensor är själva komponenten liten, men arbetstiden driver reparationskostnaden. På telefoner med dold eller skärmintegrerad avkänning kan reparationen vara knuten till hela skärmenheten.

Om reparationen inte är värd kostnaden går det ändå att kringgå problemet. Använd strömknappen för att väcka skärmen under samtal, slå på skydd mot oavsiktliga tryckningar om telefonen har en sådan funktion och undvik fodral med lock som täcker sensorområdet. Det är inte perfekt, men telefonen förblir användbar.
