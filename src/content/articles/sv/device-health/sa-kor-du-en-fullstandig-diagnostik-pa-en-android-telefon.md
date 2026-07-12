---
title: "Så kör du en fullständig diagnostik på en Android-telefon"
description: "Android har ingen enda knapp för \"kör diagnostik\" som kontrollerar allt på en gång. Verktygen finns, men de är utspridda mellan inställningar, dolda telefonkoder, tillverkarnas appar och systemkommandon som de flesta aldrig ser. Den här guiden samlar dem i en genomgång som täcker så många telefoner som möjligt och visar samtidigt var skillnader mellan tillverkare, operatörer och Android-versioner sätter gränser."
listSummary: "Android har ingen enda knapp för \"kör diagnostik\" som kontrollerar allt på en gång."
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","uppdateringar","säkerhet","programvara","guide"]
locale: "sv"
draft: false
---
## Snabbaste vägen: tillverkarens diagnostikverktyg

Många stora Android-tillverkare skickar med egna diagnostikverktyg, antingen förinstallerade eller tillgängliga genom en dold kod. Börja här innan du installerar något.

**Samsung Galaxy-telefoner** har några av de mest lättillgängliga inbyggda testerna. Öppna appen Telefon och slå `*#0*#`. Då öppnas en testpanel med separata kontroller för skärmen (röd, grön och blå bild för att hitta döda pixlar), pekfunktionen, fram- och bakkamerorna, högtalarna, vibrationsmotorn och sensorer som accelerometer och närhetssensor. Koden fungerar på många Galaxy-telefoner, både äldre modeller och moderna toppmodeller, men operatörsanpassad programvara och vissa regionsversioner kan stänga av servicemenyer. Samsung har också en diagnostiksvit i Samsung Members. Öppna appen, gå till **Support** och välj **Telefondiagnostik**. Beroende på appversion kan motsvarande delar heta **Få hjälp** och **Diagnostik**. Där kan du köra automatiska kontroller av bland annat batteri, skärm, pekfunktion, ljud, wifi, Bluetooth och flera sensorer, med godkänt eller underkänt resultat för varje test. Samsung Members finns på de flesta moderna Galaxy-telefoner. På modeller och i regioner som stöds kan nyare One UI-versioner även visa batterihälsa i procent och antal laddningscykler på sidan med batteriinformation.

**Google Pixel-telefoner** har två relevanta diagnostikvägar. På Pixel 6 och senare visar **Inställningar > Enhetshälsa och support** enhetens övergripande status, funktionsstatus, batteri- och temperaturinformation samt föreslagna kontroller, exempelvis för laddning eller pekfunktion. På Pixel-telefoner som stöds kan reparationsdiagnostiken också startas genom att öppna appen Telefon, låta telefonen vara ansluten till internet och slå `*#*#7287#*#*`. På Pixel 8a och senare visar **Inställningar > Om telefonen > Batteriinformation** antal laddningscykler, tillverkningsdatum och datum för första användning. På många andra telefoner med standardnära Android öppnar `*#*#4636#*#*` en dold testmeny med flikar för telefoninformation (signalstyrka, nätverkstyp och önskat nätverksläge), batteristatistik (spänning, temperatur och hälsostatus) och användningsdata. Koden har funnits sedan tidiga Android-versioner men fungerar ofta bättre på äldre telefoner, eftersom vissa nyare enheter och operatörer begränsar åtkomsten.

**Xiaomi-, POCO- och Redmi-telefoner** har en dold CIT-meny (Component Integrated Testing). Slå `*#*#6484#*#*` eller `*#*#64663#*#*` i appen Telefon. Då öppnas en testsvit för pekskärm, skärmfärger, närhetssensor, accelerometer, gyroskop, kompass, kamerablixt, högtalare, mikrofon, kamera, vibration, wifi, Bluetooth, GPS och fingeravtryckssensor. Varje test kräver manuell bekräftelse: telefonen visar ett mönster eller spelar upp ett ljud och du markerar testet som godkänt eller underkänt.

**OnePlus-telefoner** svarar på `*#808#` med en diagnostikmeny på vissa modeller. Där verktyget finns kan det testa skärm, ljud, anslutningar och sensorer, men tillgängligheten varierar mer än hos Samsung och Pixel.

Koderna fungerar inte överallt. Operatörslåsta telefoner kan ha dem avstängda, och tillverkare tar ibland bort dem i programuppdateringar. Om inget händer när du anger en kod har den inte implementerats eller har stängts av på just den enheten.

## Inbyggda Android-verktyg som fungerar på nästan alla telefoner

Även utan en tillverkarspecifik meny innehåller alla moderna Android-telefoner användbar diagnostikinformation i Inställningar. Det är inget fullständigt hälsotest, men det fångar vanliga problem.

**Batterianvändning** under **Inställningar > Batteri** visar hur laddningen har sjunkit under de senaste 24 timmarna, eller under flera dagar hos vissa tillverkare. Leta efter ovanligt branta fall som kan tyda på en app eller bakgrundsprocess som inte beter sig normalt. På Android 9 och 10 är sidan enklare och visar främst en lista över appar ordnade efter förbrukning, men den är fortfarande användbar för att hitta de största batteritjuvarna. På Android 14 och senare kan vissa enheter lämna ut fler egenskaper från BatteryManager HAL till tredjepartsappar, exempelvis uppskattad kapacitet och antal laddningscykler. Om uppgifterna visas beror på tillverkarens HAL-implementation.

**Lagringsdiagnostik** under **Inställningar > Lagring** delar upp användningen i kategorier som appar, bilder, videor, ljud, dokument och systemfiler. Om telefonen känns långsam och lagringen är mer än 85 % full kan det ensamt förklara problemet. Androids prestanda försämras märkbart när det interna NAND-minnet närmar sig fullt, eftersom styrenheten får mindre utrymme för slitageutjämning och skräpinsamling.

**Nätverksdiagnostik** under **Inställningar > Nätverk och internet** visar aktuell anslutningstyp, signalstyrka och anslutet wifi-nätverk. På de flesta telefoner finns mer information under **Inställningar > Om telefonen > SIM-status**, där signalstyrkan visas i dBm. Mellan -50 och -90 dBm är normalt för mobilnät. Svagare än -110 dBm betyder dålig mottagning.

**Utvecklaralternativ** innehåller några användbara diagnostikverktyg. Aktivera dem under **Inställningar > Om telefonen** genom att trycka sju gånger på **Versionsnummer**. Därefter får du tillgång till bland annat **Körande tjänster** för aktiva bakgrundsprocesser och minnesanvändning, **USB-felsökning** som behövs för ADB-diagnostik och **Skapa felrapport**, som genererar en detaljerad systemlogg för felsökning. Exakta namn kan variera mellan tillverkare och Android-versioner.

## Sensor- och hårdvarutester utan appar

Närhetssensorn kan testas med `*#*#0588#*#*` på vissa enheter. För andra sensorer fungerar praktiska tester lika bra: öppna Google Maps och kontrollera om den blå riktningskonen roterar när du vrider telefonen (kompass och gyroskop), ring ett samtal och se om skärmen släcks när telefonen hålls mot örat (närhetssensor), eller aktivera automatisk ljusstyrka och täck framsidan (sensor för omgivningsljus).

GPS kan testas med valfri kartapp, men en särskild GPS-testapp visar antal satelliter och signal-brusförhållande. En frisk GPS-mottagare bör utomhus kunna låsa på 8-12 satelliter inom 30 sekunder.

## När tredjepartsappar faktiskt tillför något

De inbyggda verktygen täcker mycket, men de har blinda fläckar. Tredjepartsappar fyller framför allt tre luckor.

Uppskattning av batterihälsa är den största. AccuBattery följer laddningsmönster över tid och uppskattar kvarvarande kapacitet jämfört med den ursprungliga kapaciteten. Appen behöver ungefär en vecka och flera laddningscykler för att ge användbara siffror, och uppskattningen förbättras ju längre den används. DevCheck visar processorernas klockfrekvenser, GPU-frekvens, temperaturzoner, batteriström, spänning och sensorvärden i realtid. Den är särskilt användbar för att diagnostisera termisk strypning eller hitta en sensor som rapporterar felaktiga värden. AIDA64 visar detaljerade hårdvaruspecifikationer som SoC-modell, skärmupplösning och pixeltäthet, RAM-typ och mängd, lagringsprestanda och installerade kodekar. Det är mer identifiering än diagnostik, men praktiskt när du behöver veta exakt vilken hårdvara telefonen innehåller.

Ingen av apparna kommer åt data som tillverkaren har låst. Om telefonen inte implementerar HAL-stöd för batterihälsa kan ingen app läsa ett verkligt antal laddningscykler eller den faktiska kapaciteten. Då återstår uppskattningar från laddningsmönster.

## ADB-diagnostik för djupare kontroll

Android Debug Bridge ger den djupaste diagnostikåtkomsten utan root. Anslut telefonen till en dator via USB med USB-felsökning aktiverad och kör sedan följande kommandon:

`adb shell dumpsys battery` visar batterinivå, temperatur, spänning, laddningsstatus, hälsostatus och på vissa enheter antal laddningscykler. Resultatet varierar mellan tillverkare. Samsung-enheter rapporterar ofta fält som Pixel-enheter inte visar, och tvärtom.

`adb shell dumpsys batterystats` skapar en mycket stor logg över batterianvändningen, inklusive wake locks, appanvändning och nätverksaktivitet. Om loggen bearbetas med Googles Battery Historian får du en visuell tidslinje över vad som drog batteri och när.

`adb shell dumpsys connectivity` rapporterar aktuell nätverksstatus, DNS-servrar och aktiva gränssnitt.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` läser temperatursensorer. Alla zoner är inte åtkomliga. SELinux-regler i Android 12 och senare begränsar vilka sökvägar i sysfs som kan läsas, och begränsningarna har blivit strängare med senare versioner. Vissa temperaturzoner svarar med "Permission denied" även via ADB.

ADB kräver en dator och viss vana vid kommandoraden. För de flesta räcker inställningsmenyerna, tillverkarens diagnostikapp och en noggrann manuell kontroll av hårdvaran.

## Så tolkar du resultaten

Råa siffror behöver sammanhang. En batteritemperatur på 32 °C vid lätt användning är normal. 42 °C när telefonen ligger oanvänd i ett svalt rum är det inte. 78 % använd lagring är acceptabelt. Vid 92 % får telefonen problem. En signalstyrka på -85 dBm fungerar inomhus. Vid -115 dBm bryts samtal lättare.

Poängen med diagnostik är inte att hitta en enda siffra som säger "trasig". Det handlar om att jämföra det du ser med vad som är rimligt och upptäcka mönster: ett batteri som tappat 15 % kapacitet på sex månader, en sensor som alltid rapporterar noll eller nästan full lagring som gör hela telefonen långsam.

runcheck samlar diagnostik för batteri, temperatur, nätverk och lagring på en enda instrumentpanel med en gemensam hälsopoäng. Det sparar tiden som annars går åt till att kontrollera varje del separat. Appen markerar också mätvärden som kan vara osäkra med en konfidensindikator, vilket är värt att uppmärksamma eftersom alla Android-enheter inte rapporterar varje mätvärde tillförlitligt.

## FAQ

**Kan jag köra diagnostik på en telefon som inte startar?**
Bara delvis. Om telefonen kan öppna återställningsläget, vanligtvis med strömknappen och volym upp under starten, kan du åtminstone kontrollera att skärm, pekfunktion och knappar fungerar. Vissa Samsung-telefoner kan öppna Download Mode för installation av fast programvara. Fullständig diagnostik kräver ett fungerande operativsystem.

**Behöver diagnostikappar rootåtkomst?**
Nej. Allt som beskrivs här fungerar utan root. Rootåtkomst kan ge tillgång till mer data på kärnnivå, men den kan påverka garanti och support samt få SafetyNet- eller Play Integrity-attestering att misslyckas. Den behövs inte för en praktisk hälsokontroll.

**Hur ofta bör jag köra en fullständig diagnostik?**
När telefonen börjar bete sig konstigt: appar öppnas långsammare, batteriet tar oväntat slut, anslutningar bryts eller enheten överhettas. Något fast schema behövs inte. Vid köp av en begagnad telefon bör du alltid göra en fullständig kontroll före affären.

**Fungerar `*#0*#` på andra telefoner än Samsung?**
Nej. Xiaomi använder `*#*#6484#*#*` på många modeller, OnePlus kan använda `*#808#`, Pixels reparationsdiagnostik startas med `*#*#7287#*#*` och många telefoner med standardnära Android använder `*#*#4636#*#*`. Tillgängligheten varierar mellan modell, region, fast programvara och operatör.

**Påverkar diagnostiken min data eller mina inställningar?**
Vanlig diagnostik läser bara information. Undantaget är om du av misstag väljer en fabriksåterställning i en servicemeny. Håll dig till avsnitten för diagnostik och test.
