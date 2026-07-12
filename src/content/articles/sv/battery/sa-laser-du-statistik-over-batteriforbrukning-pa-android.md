---
title: "Så läser du statistik över batteriförbrukning på Android"
description: "Du öppnar Batteriförbrukning och ser att en app står på 42 %. Det ser illa ut. Ibland är det det. Ibland betyder siffran nästan ingenting."
listSummary: "Du öppnar Batteriförbrukning och ser att en app står på 42 %."
hub: "battery"
sourceNumber: 14
order: 4
subgroup: "Health"
tags: ["batteri","batteriförbrukning","felsökning","android","prestanda"]
locale: "sv"
draft: false
---
Androids batteristatistik är bra för att ringa in ett problem, men den är inget exakt kvitto på vart varje milliamperetimme tog vägen. Tricket är att läsa procentsiffrorna i sitt sammanhang.

**Metabeskrivning:** Androids statistik över batteriförbrukning visar vilka appar och systemtjänster som drar ström. Läs var du hittar den, vad procentsiffrorna betyder och hur du upptäcker verkliga batteriproblem.

## Var du hittar statistiken

På Pixel och standardnära Android öppnar du **Batteriförbrukning** i avsnittet Batteri under Inställningar. Där kan du se batterianvändningen per app, och i nyare Pixel-versioner går det att växla mellan appar och systemkategorier. Om du trycker på en app öppnas dess batterikontroller, bland annat inställningar för användning i bakgrunden.

På Samsung Galaxy öppnar du **Settings > Battery**. I vissa äldre One UI-versioner är sökvägen **Settings > Battery and device care > Battery**. Samsung visar ofta först ett diagram och därefter alternativet **View details** för användning per app och funktion. Vissa versioner visar också en längre apphistorik, vilket ofta är mer användbart än ett kort intervall sedan senaste laddningen.

På telefoner från Xiaomi, Redmi och POCO letar du efter **Battery usage**, **Power consumption details** eller en liknande formulering i batterimenyn. Namnen i HyperOS och MIUI varierar mellan modeller, så bli inte förvånad om menyalternativet heter något lite annorlunda.

På OnePlus-, OPPO- och realme-telefoner börjar du under Batteri och letar efter **Battery usage**, **Battery usage details** eller **App battery management**. De här Android-varianterna brukar skilja mellan användning i förgrunden och bakgrunden när du öppnar en app.

Koden `*#*#4636#*#*` i telefonappen öppnar en testmeny på vissa Android-telefoner. Den kan visa spänning, temperatur, hälsostatus och laddningstillstånd. Det är ingen vy över förbrukningen per app, och många tillverkare har stängt av den.

## Vad procentsiffrorna faktiskt betyder

Siffran bredvid en app visar vanligtvis dess andel av den förbrukade laddningen, inte en andel av telefonens hela batterikapacitet.

Anta att telefonen har gått från 100 % till 70 %. Då har 30 procentenheter förbrukats. Om YouTube står för 50 % under Batteriförbrukning betyder det inte att YouTube har använt hälften av hela batteriet. Det betyder att appen står för ungefär hälften av den förbrukning som Android har fördelat under perioden. I det här exemplet motsvarar det omkring 15 procentenheter av den verkliga batteriladdningen.

Vänd sedan på exemplet. Telefonen går från 100 % till 96 %, och en app visar 60 %. Appen dominerade en mycket liten total förbrukning. Den kan vara helt harmlös.

Det här är misstaget jag ser oftast. Människor jagar den högsta procentsiffran utan att först kontrollera hur mycket laddning som faktiskt har försvunnit.

## Så uppskattar Android förbrukningen

Android placerar inte en liten effektmätare på varje app. Systemet gör en uppskattning.

Ramverket följer hur länge olika delar av enheten befinner sig i olika tillstånd: CPU, skärm, GPS, Wi-Fi, mobilradio, Bluetooth och annat. Tillverkaren tillhandahåller en effektprofil som anger hur mycket ström varje komponent förväntas dra i dessa tillstånd. Android kombinerar tidsuppgifterna med profilen och fördelar förbrukningen mellan appar och systemkomponenter.

Det är tillräckligt bra för felsökning. Det är ingen laboratoriemätning.

Effektprofilerna skiljer sig mellan tillverkare. En Pixel och en Xiaomi kan köra samma app lika länge och ändå rapportera olika procentsiffror. Appen har inte plötsligt betett sig annorlunda. Det är beräkningsmodellen som har ändrats.

## Så läser du batteridiagrammet

Börja med diagrammet. Det säger ofta mer än applistan.

Ett brant fall medan skärmen är på är vanligtvis normalt. Hög ljusstyrka, video, kartor, spel, kamera och mobildata kan tömma batteriet snabbt. Ett brant fall när skärmen är avstängd är mer intressant. Det kan tyda på bakgrundsaktivitet, svag signal, en synkronisering som har fastnat, en låst process eller en telefon som aldrig går ner i djup vila.

En platt linje när skärmen är avstängd är det du vill se. Den visar att telefonen vilar.

Laddning syns som uppåtgående sluttningar eller lodräta hopp. En lucka betyder vanligtvis att telefonen var avstängd, att statistiken nollställdes eller att systemet inte samlade in data under perioden. Läs inte in för mycket i ett stökigt diagram från en dag då telefonen laddades fem gånger i korta omgångar. Små påfyllningar får apparnas procentsiffror att hoppa.

## Skärmtid, vaken tid och signal

Vissa Android-versioner visar staplar under diagrammet. De är lätta att förbise, men kan förklara mycket.

Skärmtiden visar när skärmen var aktiv. Om större delen av förbrukningen sammanfaller med skärmtiden beter sig telefonen förmodligen normalt. Skärmen är en av de största strömförbrukarna i en modern telefon.

Vaken tid visar när CPU:n var aktiv. Helst sammanfaller den till största delen med skärmtiden. Långa vakna perioder när skärmen är avstängd tyder på wakelocks eller arbete i bakgrunden. E-postsynkronisering, träningsappar, molnsäkerhetskopiering, navigering, meddelandeappar och mediaspelare kan alla orsaka det. En del är väntat. Att en shoppingapp gör det i tre timmar är det inte.

Signalkvaliteten är en annan stor faktor. En svag mobilsignal kan dra mycket batteri eftersom modemet fortsätter arbeta för att upprätthålla anslutningen. Om Mobile network standby eller Cell standby hamnar högt i listan när du befinner dig på ett källarkontor, på ett tåg, på landsbygden eller i en betongbyggnad behöver telefonen inte vara trasig. Den kan helt enkelt kämpa mot nätverket.

## Mönster som är värda att bry sig om

Att en app använder mycket batteri är inte automatiskt ett problem. Att den använder mycket batteri trots att du knappt har öppnat den är ett problem.

En videoapp högst upp efter två timmars strömning är normal. En nyhetsapp högst upp efter fem minuters läsning är misstänkt. Tryck på appen och jämför tiden i förgrunden med tiden i bakgrunden.

Hög förbrukning från Android System eller System apps är svårare att tolka. Det kan handla om ett verkligt systemfel, särskilt efter en problematisk uppdatering. Det kan också betyda att Android inte kunde koppla förbrukningen tydligt till en viss app och därför lade den i systemkategorin.

Samma sak gäller när Google Play services ligger nära toppen. Tjänsten hanterar pushnotiser, kontosynkronisering, platsdata och andra gemensamma funktioner åt många appar. Om förbrukningen är hög bör du leta efter appar som begär platsuppgifter för ofta. Google Play services kan vara budbäraren, inte boven.

Att skärmen står för mer än 40-50 % av den förbrukade laddningen är normalt för många. Om skärmtiden är kort men den totala förbrukningen hög arbetar något annat i bakgrunden.

## Vad du gör när du hittar en misstänkt app

Börja försiktigt. Uppdatera appen. Starta om telefonen. Se om problemet återkommer nästa dag.

Om det fortsätter begränsar du appens bakgrundsanvändning. På Pixel trycker du på appen under **Batteriförbrukning** och justerar **Tillåt bakgrundsanvändning**. Du kan också gå via **Inställningar > Appar > Visa alla appar > [appens namn] > Batteriförbrukning för appen**. På Samsung öppnar du appen från batteriförbrukningen och använder alternativen för begränsad bakgrundsanvändning, appar i viloläge eller appar i djupt viloläge, beroende på vad din modell visar.

Tvingad avstängning är ett tillfälligt test, inte en lösning. Det kan stoppa en app som har löpt amok för stunden, men pushnotiser, schemalagda jobb eller en omstart kan starta den igen. Att begränsa batterianvändningen i bakgrunden är en renare åtgärd.

Säkert läge är användbart när hela telefonen laddas ur snabbt och du inte kan peka ut en enskild app. Läget stänger av appar från tredje part. Om förbrukningen försvinner är programvara den troliga orsaken. Om den ligger kvar bör du i stället undersöka signalen, en systemuppdatering, enhetens temperatur eller själva batteriet.

## Vad statistiken inte kan berätta

Batteristatistiken bevisar inte hur friskt batteriet är. Ett slitet batteri och en problematisk app kan se likadana ut i vardagen.

Statistiken nollställs eller avgränsas också på olika sätt beroende på enheten. Pixel fokuserar på användningen sedan den senaste fulla laddningen. Samsung har ändrat layouten mellan olika One UI-versioner, och vissa versioner visar användning sedan den senaste laddningen i stället för ett strikt helt laddningsintervall. Täta delladdningar förkortar mätperioden och får procentsiffrorna att se mer dramatiska ut.

För att se trender behöver du historik. AccuBattery kan uppskatta kapaciteten och följa laddningstillfällen över tid. runcheck sparar historik över batterinivå, temperatur, urladdningshastighet och relaterade sessionsdata, så att du kan jämföra dagar i stället för att stirra på ett enda stökigt diagram.

Det bästa sättet att använda Androids Batteriförbrukning är enkelt: hitta den första rimliga ledtråden och bekräfta den sedan med telefonens beteende. Om diagrammet, applistan, körtiden i bakgrunden och ditt minne av dagen pekar åt samma håll har du förmodligen hittat orsaken till förbrukningen.
