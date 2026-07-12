---
title: "Hälsokontroll för Android: så ser du om telefonen är i bra skick"
description: "Telefoner går sällan sönder över en natt. Batteriet tappar långsamt kapacitet. Lagringen fylls i bakgrunden. Temperaturen stiger gradvis vid samma belastning. När symtomen väl blir tydliga, som slumpmässiga avstängningar, tröga appar eller överhettning vid enkla uppgifter, har problemet ofta byggts upp i flera månader."
listSummary: "Telefoner går sällan sönder över en natt."
hub: "device-health"
sourceNumber: 1
order: 1
tags: []
locale: "sv"
draft: false
---
En hälsokontroll gör att sådana förändringar upptäcks tidigare. Den är användbar när du felsöker ett visst problem, förbereder en telefon för försäljning eller bara vill veta om känslan av att den blivit långsam stämmer.

---

## Vad en hälsokontroll omfattar

En ordentlig kontroll handlar om mer än batteriprocent. Flera områden tillsammans visar hur telefonen faktiskt mår.

Batterihälsa visar hur mycket av den ursprungliga kapaciteten som finns kvar. En telefon som levererades med 5 000 mAh kanske bara kan lagra 4 000 mAh efter två års daglig laddning. Men kapaciteten är inte hela bilden. Spänningsstabilitet, urladdningshastighet och temperatur under belastning påverkar hur mycket faktisk tid med skärmen på som återstår.

Lagringens skick handlar om mer än ledigt utrymme. Den interna lagringens läs- och skrivhastigheter kan försämras med tiden, och när lagringen nästan är full måste Android arbeta hårdare med temporära filer och växlingsminne.

Termiskt läge, nätverksanslutning, sensorer och processorprestanda kompletterar bilden. Ihållande värme påskyndar batterislitage och kan leda till termisk strypning av CPU:n. Diagnostik för wifi och mobilnät visar hur bra anslutningen faktiskt fungerar, inte bara om den finns. Ett gyroskop som börjat driva eller en närhetssensor som inte svarar kan i tysthet slå ut funktioner. Minnestryck visar också om telefonen fortfarande klarar multitasking utan att appar stannar eller laddas om hela tiden.

---

## Varför Android-telefoner blir långsammare med tiden

Känslan av att telefonen blivit långsammare är inte inbillad. Flera saker bidrar, och effekterna läggs ovanpå varandra.

### Batteriet försämras

Litiumjonbatterier slits kemiskt för varje laddningscykel. Äldre telefoner diskuterades ofta utifrån en gräns på omkring 500 cykler, men det är inte längre en användbar generell regel. Många nyare telefoner är specificerade för ungefär 800-1 000 fulla cykler innan kapaciteten sjunker till omkring 80 % av den ursprungliga nivån, beroende på modell, batterikemi och laddningsförhållanden. Därefter blir tiden med skärmen på märkbart kortare, och oväntade avstängningar under hög belastning blir mer sannolika.

Värme gör slitaget värre. Att ladda i en varm miljö, spela medan telefonen är inkopplad eller lämna den på bilens instrumentbräda på sommaren påskyndar den kemiska nedbrytningen.

### Lagringen är pressad

Appar, cachelagrade data, foton och systemuppdateringar samlas på hög. Android behöver ledigt utrymme för temporära filer och uppdateringar. När mindre än omkring 10-15 % av den totala lagringen är ledig börjar telefonen ofta kännas trög. Det är en praktisk tumregel, inte en fast gräns i Android. Appar öppnas långsammare, kameran tvekar innan en bild sparas och animationer hackar.

### Fler bakgrundsprocesser

Varje installerad app kan köra bakgrundstjänster, synkronisera data och skicka aviseringar. Efter ett eller två år blir den sammanlagda belastningen större. Lägg till Android-uppdateringar som gradvis kräver lite mer av hårdvaran, så kan äldre enheter få svårt att hänga med.

### Fysiskt slitage

Laddningsportar blir glappa. Högtalare tappar klarhet. Pekskärmen kan svara sämre på vissa delar. Sensorer kan glida ur kalibrering. Förändringarna sker så långsamt att de är lätta att missa tills de börjar störa den dagliga användningen.

---

## Manuella kontroller du kan göra direkt

Android har inbyggda verktyg för en grundläggande bedömning, utan att du behöver installera fler appar.

### Batterihälsa i Inställningar

Sökvägen varierar mellan tillverkare:

**Samsung:** Öppna Samsung Members, tryck på Support och sedan Telefondiagnostik. Kör batteritestet. Beroende på modell, region och One UI-version kan resultatet vara en enkel bedömning av skicket i stället för en exakt procentsats.

**Google Pixel** (Pixel 8a och senare): Inställningar > Batteri > Batterihälsa visar batteriets hälsostatus och beräknade återstående kapacitet. Inställningar > Om telefonen > Batteriinformation visar antal laddningscykler, tillverkningsdatum och datum för första användning. Hjälp med batterihälsa, som justerar laddningen för att bevara kapaciteten längre, finns på Pixel 6a och senare.

**Xiaomi/POCO** (HyperOS): Öppna batteriavsnittet i Inställningar och leta efter information om batterihälsa eller laddningscykler. Den exakta placeringen varierar beroende på modell, region och HyperOS-version.

Om telefonen inte visar detta i Inställningar finns en diagnostikkod: öppna telefonappen och skriv `*#*#4636#*#*`. På enheter som stöds öppnas en testmeny med batterispänning, temperatur och en grov statusbedömning. Den visar vanligtvis inte en verklig kapacitetsprocent eller antal laddningscykler.

### Lagringsanvändning

Inställningar > Lagringsutrymme visar hur utrymmet fördelas mellan appar, foton, videor, systemfiler och cachelagrade data. Om mer än 85 % används är det värt att göra något åt det. Att rensa appcache och flytta äldre filer kan ge en märkbar förbättring i respons.

### Temperatur

De flesta telefoner saknar en inbyggd temperaturmätare som visas för användaren, men hur telefonen känns säger en del. Om den blir varm vid lätt webbsurfning eller när den ligger oanvänd bör orsaken undersökas. Menyn som öppnas med `*#*#4636#*#*` visar batteritemperaturen på enheter som stöds, vilket åtminstone ger ett konkret värde.

### Grundläggande hårdvarutester

Några snabba kontroller räcker långt. Öppna en ritapp och dra fingret över hela skärmen för att hitta områden som inte registrerar beröring. Spela upp ljud på olika volymer för att testa högtalarna. Spela in ett kort röstklipp för att kontrollera mikrofonen. Prova båda kamerorna, ficklampan och automatisk skärmrotation.

---

## Mer avancerad diagnostik

Manuella kontroller visar det mest uppenbara. För en mer komplett bild krävs djupare verktyg.

### Testa sensorer

Telefoner innehåller många sensorer: accelerometer, gyroskop, magnetometer, närhetssensor, sensor för omgivningsljus och ibland barometer. När en sensor slutar fungera blir symtomen ofta märkligt specifika. Automatisk rotation slutar fungera, skärmen släcks inte under samtal, kompassen visar fel eller GPS-noggrannheten försämras kraftigt.

För att testa enskilda sensorer behövs en diagnostikapp eller en tillverkarkod. Samsung stöder `*#0*#` för en meny med hårdvarutester på många modeller. Andra tillverkare har egna koder, men tillgängligheten varierar.

### Prestandamätning

Benchmarkverktyg belastar CPU, GPU och minne med standardiserade tester och ger ett resultat som kan jämföras med förväntade värden för en viss modell. Ett resultat långt under normalnivån kan tyda på termisk strypning, ovanligt hög bakgrundsbelastning eller försämrad hårdvara.

### Nätverksdiagnostik

Att wifi är anslutet säger inte särskilt mycket. Genomströmning, latens, paketförlust och signalstabilitet avgör hur anslutningen fungerar i praktiken. Mer detaljerad nätverksdiagnostik hjälper dig att skilja problem i telefonen från problem i själva nätverket.

### Batterianalys

En enkel etikett som anger att batteriet är bra eller dåligt ger bara en grov bild. En ordentlig batterianalys jämför faktisk kapacitet med designkapacitet, loggar urladdningshastighet under olika förhållanden, följer temperaturmönster över tid och räknar laddningscykler när enheten lämnar ut dessa uppgifter. På telefoner som inte visar riktiga hårdvaruräknare kan appar uppskatta kapaciteten utifrån laddningsbeteendet, men resultatet måste tolkas försiktigare. Informationen visar om ett batteribyte sannolikt skulle förlänga telefonens användbara livslängd.

Det går att få fram mycket genom att hoppa mellan Inställningar, diagnostikkoder och manuella tester, men bilden förblir splittrad. En diagnostikapp som **runcheck** samlar batteri-, temperatur-, nätverks- och lagringsvärden på en gemensam instrumentpanel med en sammanvägd hälsopoäng. Det är användbart för regelbundna kontroller och särskilt värdefullt när en begagnad telefon ska köpas eller säljas och båda parter har nytta av en objektiv rapport om skicket.

---

## Vanliga frågor

### Hur ofta bör jag kontrollera telefonen?

En gång i månaden räcker för de flesta. För telefoner som är äldre än två år, eller när prestandaproblem börjar märkas, kan en kontroll varannan vecka göra det lättare att upptäcka förändringar. Batteriet tappar kapacitet, temperaturen stiger eller lagringen fylls sakta.

### Kan en fabriksåterställning göra en långsam telefon snabb igen?

Det beror på orsaken. En återställning kan hjälpa mot överflödiga appar, bakgrundsprocesser som löpt amok och skadade cachefiler. Den gör ingenting åt ett utslitet batteri, sliten lagring eller sensorer som håller på att gå sönder. En diagnostikkontroll först gör det lättare att avgöra om problemet sitter i programvaran eller hårdvaran.

Säkerhetskopiera allt innan du återställer telefonen.

### Vid vilken batterihälsa bör jag överväga ett byte?

Den vanliga gränsen ligger omkring 80 % av den ursprungliga kapaciteten. Under den nivån blir kortare skärmtid och tätare laddning svåra att ignorera. Under 70 % blir telefonen ofta besvärlig att använda som huvudenhet. Trenden i mätningarna brukar vara tydlig långt innan situationen blir ohållbar.

### Fungerar diagnostikkoder på alla Android-telefoner?

Nej. `*#*#4636#*#*` fungerar på många enheter, men inte på alla. Samsung har egna koder, och tillverkare som Xiaomi, OnePlus och Motorola hanterar diagnostik på olika sätt. Den splittringen är en viktig anledning till att diagnostikappar finns: de samlar testerna på ett mer enhetligt sätt oavsett tillverkare.

### Är diagnostikappar från tredje part säkra?

Ja, om de kommer från en seriös utvecklare på Google Play Butik. De säkraste alternativen kör testerna på enheten utan att kräva konto, internetanslutning eller behörigheter som inte hör ihop med diagnostik. En app som vill läsa kontakter eller meddelanden för att "kontrollera telefonens hälsa" är en varningssignal.

---

Regelbundna hälsokontroller gör en vag känsla av att något är fel till konkreta data. En månatlig kontroll tar bara några minuter och kan upptäcka sjunkande batterikapacitet, stigande temperaturer och en lagring som håller på att fyllas innan problemen börjar störa vardagen.
