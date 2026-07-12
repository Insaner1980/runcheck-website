---
title: "Vad är systemuppdateringar via Google Play?"
description: "Öppna uppdateringssidan på en Android-telefon så ser du förmodligen två datum som inte stämmer överens. Det ena är Androids säkerhetskorrigeringsnivå. Det andra visar datumet för en systemuppdatering via Google Play."
listSummary: "Öppna uppdateringssidan på en Android-telefon så ser du förmodligen två datum som inte stämmer överens."
hub: "software"
sourceNumber: 124
order: 6
tags: ["android","uppdateringar","säkerhet","programvara","guide"]
locale: "sv"
draft: false
---
Det kan se ut som ett fel. Vanligtvis är det inte det.

Det handlar om två olika uppdateringskanaler. Säkerhetskorrigeringen kommer via telefontillverkaren, till exempel Google, Samsung, Xiaomi, OnePlus eller Motorola. Det andra datumet kommer via Googles modulära uppdateringssystem för Android på enheter som stöder det.

## Den korta versionen

Mainline-uppdateringar kan korrigera utvalda delar av Android utan att invänta en fullständig systemuppdatering från tillverkaren.

De ersätter inte vanliga Android-uppdateringar. De uppgraderar inte telefonen från Android 16 till Android 17. De åtgärdar inte varje sårbarhet. Men de gör det möjligt för Google att uppdatera vissa OS-komponenter genom samma breda leveransväg som används av Google Play.

Det spelar roll eftersom Android-uppdateringar går genom en lång kedja. Google publicerar kod. Chiptillverkare och telefontillverkare integrerar den. Operatörer kan testa den. Först därefter når uppdateringen telefonen. Den modulära kanalen går runt en del av den kedjan för vissa komponenter.

## Så fungerar Project Mainline

Tekniken bakom detta heter Project Mainline och kallas även modulära systemkomponenter i Androids dokumentation. Den introducerades med Android 10.

Mainline delar upp utvalda delar av Android i moduler. Vissa är APK-moduler och fungerar mer som apppaket. Andra är APEX-moduler, som kan läsas in tidigare under starten och hantera djupare systemkomponenter.

Det viktiga är den atomiska installationen. Om ett paket med moduluppdateringar inte kan installeras korrekt återställer Android ändringarna i stället för att lämna telefonen halvt uppdaterad.

Bra. I det här sammanhanget är tråkigt bra.

## Vad som uppdateras

Den exakta uppsättningen moduler beror på Android-versionen och enhetens mjukvaruversion, så räkna inte med att alla Android-telefoner har samma lista. Nyare Android-versioner innehåller i allmänhet fler modulära delar än Android 10 gjorde.

Exempel är nätverkskomponenter, DNS-hantering, mediehantering, behörighetsrelaterade komponenter, Conscrypt för TLS, hantering av inloggningssidor i offentliga nätverk, dokumentgränssnittet, internetdelning och delar av Android Runtime på versioner som stöds.

Det här är inte kosmetiska delar. Ett fel i medieramverket kan påverka många appar. Ett fel i en TLS-komponent kan påverka krypterade anslutningar i hela enheten. När dessa delar kan uppdateras genom en modulär kanal kan korrigeringar nå betydligt fler telefoner än om varje tillverkare först måste skicka ett fullständigt OTA-paket.

## Så kontrollerar du datumet

På många nyare Android-telefoner går du till Inställningar och letar under Säkerhet och integritet eller på sidan Android-version under Om telefonen. Öppna posten för systemuppdateringar via Google Play.

På Samsung kan uppgiften finnas under Säkerhet och integritet eller under Om telefonen och Programvaruinformation, beroende på One UI-version.

Sökvägen flyttas ibland när tillverkarna organiserar om Inställningar. Om du inte hittar den kan du söka efter systemuppdateringar via Google Play i Inställningar.

Tryck på posten för att kontrollera om en uppdatering finns. Om Android ber om en omstart efteråt bör du starta om. Vissa APEX-baserade uppdateringar börjar inte gälla förrän telefonen har startats om.

## Varför datumet kan se gammalt ut

Datumet på skärmen betyder inte helt enkelt "senaste gången något korrigerades". Det kan visa versionen för ett modulpaket, och varje moduluppdatering flyttar inte det synliga datumet på ett tydligt sätt.

Därför kan datumet för systemuppdateringar via Google Play ligga efter Androids säkerhetskorrigering utan att något är fel. Jag skulle börja oroa mig först när båda datumen är gamla, eller när telefonen inte har installerat någon systemuppdatering på flera månader och inte längre finns med på tillverkarens supportlista.

Det frustrerande är att Android inte ger vanliga användare en tydlig ändringslogg för varje modul. I praktiken får du mest ett datum och en knapp för omstart.

## Vilka telefoner får dem?

Uppdateringskanalen hör ihop med Androids modulära system och Googles tjänster. I praktiken omfattar det de flesta Google-certifierade Android-telefoner med Android 10 eller senare.

Telefoner utan Googles tjänster får inte samma uppdateringsväg från Google. Vissa Android-partner kan uppdatera Mainline-moduler genom sina egna OTA-system, men det är inte samma sak som vägen Google använder på en certifierad telefon.

Äldre Android-versioner har dessutom färre modulära komponenter. En telefon med Android 10 kan dra nytta av Mainline, men den har inte samma modultäckning som en nyare enhet med Android 16 eller Android 17.

## Vad de inte kan åtgärda

Mainline kan inte korrigera allt.

Uppdateringarna korrigerar inte enhetens kernel om inte den aktuella korrigeringen kan levereras via en modulär väg som stöds. De uppdaterar inte sluten firmware för modem, kamera, GPU eller Wi-Fi. De reparerar inte heller tillverkarspecifika systemappar eller leverantörskod. Och de förlänger inte tillverkarens officiella supportperiod.

Den modulära uppdateringsvägen hjälper alltså. Den gör inte en övergiven telefon helt säker igen.

## Systemuppdateringar via Google Play jämfört med Google Play-tjänster

Namnen är alldeles för lika, och det skapar förvirring.

Google Play-tjänster är ett ramverk på appnivå. Appar använder det för inloggning, plats-API:er, aviseringar, kontofunktioner, säkerhetskontroller och andra Google-baserade tjänster. Det uppdateras som en app.

Systemuppdateringarna hanterar OS-moduler. De når djupare in i själva Android.

Båda kommer från Google. Båda kan uppdateras utan ett fullständigt OTA-paket från tillverkaren. De ligger inte på samma nivå.

## Vad du kan göra med informationen

Håll båda uppdateringskanalerna aktuella. Installera vanliga Android-systemuppdateringar från tillverkaren och kontrollera ibland sidan för systemuppdateringar via Google Play.

Om telefonen fortfarande får säkerhetskorrigeringar från tillverkaren är ett något äldre datum för systemuppdateringar via Google Play oftast bara brus. Om båda har upphört är det dags att betrakta enheten som på väg att bli för gammal för säker daglig användning.
