---
title: "Dolda Android-inställningar som drar batteri"
description: "Metabeskrivning: Android kan fortsätta använda wifi-sökning, Bluetooth-sökning, bakgrundssynkronisering, platskontroller och always-on display (AOD) även när mobilen inte används. De här inställningarna är värda att kontrollera om förbrukningen i viloläge är för hög."
listSummary: "android, uppdateringar och säkerhet"
hub: "battery"
sourceNumber: 33
order: 23
subgroup: "Drain"
tags: ["android","uppdateringar","säkerhet","programvara","guide"]
locale: "sv"
draft: false
---
En stor del av Android-mobilens batteriförbrukning sker när du inte gör något särskilt. Skärmen är avstängd, mobilen ligger på bordet och batterinivån sjunker ändå eftersom appar, radiofunktioner, sensorer och kontosynkronisering fortsätter att väcka enheten.

Android 17 började rullas ut till de flesta Pixel-enheter som stöds den 16 juni 2026. Menynamnen befinner sig därför i en lite rörig övergångsfas. Pixel får den nya Android-versionen först, medan Samsung, Xiaomi, OnePlus, Motorola och andra OEM-tillverkare släpper sina Android 17-versioner enligt egna tidsplaner. Råden nedan gäller fortfarande, men den exakta sökvägen kan ligga en nivå högre eller lägre beroende på mobil.

## Appaktivitet i bakgrunden

Det här är vanligtvis det första du bör kontrollera. Appar kan i tysthet synkronisera data, hämta uppdateringar, leta efter aviseringar, ladda upp loggar, uppdatera widgetar och hålla wake locks aktiva. Sociala appar, shoppingappar, nyhetsappar, molnlagring och dåligt byggda verktygsappar är vanliga misstänkta.

På Pixel och Android nära Googles standardversion kan du börja under **Inställningar > Batteri > Batteriförbrukning**. Välj visning efter appar och leta efter sådant som fortsätter dra ström efter att du slutat använda det. På många aktuella Pixel-versioner finns även **Inställningar > Appar > Batteriförbrukning för appar**. Beroende på version kan appens alternativ heta **Obegränsad**, **Optimerad** och **Begränsad**, eller visas som en inställning för tillåten bakgrundsanvändning.

Använd **Begränsad**, när alternativet finns, för appar som inte behöver köras efter att du lämnat dem. Spel, shoppingappar, reseappar som bara öppnas manuellt, matleveransappar och slumpmässiga verktyg är rimliga kandidater. Begränsa inte meddelandeappar, jobbmejl, VPN-tjänster, hälsomätare, familjesäkerhetsappar eller något annat där en försenad avisering kan orsaka ett verkligt problem.

På aktuella Samsung-versioner finns motsvarande funktion vanligtvis under **Inställningar > Enhetsvård > Batteri > Begränsa bakgrundsanvändning**. Det starkaste alternativet är **Appar i djupviloläge**, vilket passar appar som nästan aldrig används. Det är också lätt att gå för långt. Om en avisering är viktig ska appen inte placeras i djupviloläge.

Smart batteri är fortfarande värt att låta vara aktiverat. Funktionen lär sig vilka appar du använder ofta och begränsar resten mer försiktigt än manuella inställningar. Den fångar inte allt, men är en bra grundnivå.

## Wifi- och Bluetooth-sökning

Den här inställningen känns lite lurig. Att stänga av Wi-Fi eller Bluetooth i snabbinställningarna stoppar inte alltid Android från att använda radiofunktionerna för platssökning. Systemet kan fortfarande söka efter wifi-åtkomstpunkter och Bluetooth-enheter i närheten för att förbättra platsangivelsens precision.

På Android 12 och senare är den vanliga sökvägen **Inställningar > Plats > Platstjänster > Wifi-sökning** och **Bluetooth-sökning**. På Android 11 och äldre kan inställningarna ligga direkt under **Inställningar > Plats**. På Samsung finns de vanligtvis också under **Inställningar > Plats > Platstjänster**.

Om du stänger av sökningen kan små, återkommande radioväckningar minska. Nackdelen är sämre positionering inomhus. Använder du Google Maps inomhus, Find Hub, geostyrning för smarta hem eller platsbaserade påminnelser kan platsen hittas långsammare eller med sämre precision.

För de flesta skulle jag bara stänga av sökningen om förbrukningen i viloläge redan är irriterande. På en välfungerande mobil är det inte den första inställningen jag skulle ändra.

## Låsskärmsklocka och AOD

AOD är praktiskt. Funktionen gör också exakt det namnet antyder: en del av skärmen är tänd hela dagen.

OLED-skärmar tänder inte svarta pixlar, så en enkel klocka på svart bakgrund använder inte mycket ström i ett enskilt ögonblick. Men mobilen kan ligga orörd i 15-20 timmar under ett dygn. En liten konstant förbrukning blir synlig över så lång tid, särskilt om AOD-layouten använder färg, widgetar, bakgrundsbild eller ljusare aviseringsdetaljer.

På Pixel finns inställningen vanligtvis under **Inställningar > Visning och pekskärm > Låsskärm > Visa alltid klocka och info**. Samsung använder **Inställningar > Låsskärm och AOD > Always On Display**, eller en liknande sökväg beroende på One UI-version.

Den bästa kompromissen är inte alltid att stänga av funktionen helt. Många mobiler kan bara visa klockan när du trycker på skärmen, när en ny avisering kommer eller enligt ett schema. Då behåller du det mesta av bekvämligheten utan att hålla pixlar tända varje minut under hela dagen.

## Platsangivelsens exakthet och appbehörigheter

Platsangivelsens exakthet hjälper Android att hitta din position snabbare och mer exakt genom att använda fler källor än GPS. Wifi-åtkomstpunkter, mobilmaster, sensorer, IP-adress och enhetsdata kan bidra till platsberäkningen när funktionen är aktiverad.

Det betyder inte att Platsangivelsens exakthet är dålig. Det är en anledning till att mobilen kan hitta dig inne i byggnader där GPS-signalen är svag. Samtidigt kan appar med platsbehörighet lättare begära platsuppgifter i bakgrunden, och sådan bakgrundsanvändning är ett vanligt mönster vid hög batteriförbrukning.

Kontrollera **Inställningar > Plats > Appars platsbehörighet**. Allt som står på **Tillåt alltid** bör granskas. Väderwidgetar, sociala appar, shoppingappar, fotoappar och reseappar behöver ofta inte platsen i bakgrunden. Ändra till **Tillåt bara när appen används**, om bakgrundsspårning inte är själva poängen med appen.

På Android 12 och senare kan du även välja ungefärlig plats för många appar. Det hjälper mer för integriteten än för batteritiden, men är ändå en bra vana. Navigering, träningsspårning och nöd- eller säkerhetsappar är självklara undantag.

## Synkronisering och konton

Varje konto i mobilen kan ha ett eget synkroniseringsschema. Google, Samsung, Microsoft, e-post, kalender, kontakter, molnanteckningar, Drive, Foto, webbläsarsynkronisering och tredjepartskonton skapar alla bakgrundsarbete.

Gå till **Inställningar > Lösenord, nycklar och konton**, **Lösenord och konton** eller motsvarande kontomeny och kontrollera vad varje konto synkroniserar. Om det här är din enda mobil vill du troligen behålla synkronisering av kontakter, kalender och primär e-post. Ett jobbkonto som inte längre används, en molntjänst som inte behöver synkroniseras till mobilen eller ett gammalt e-postkonto kan däremot tas bort eller begränsas.

Många mobiler har också ett globalt reglage för automatisk synkronisering. Jag rekommenderar inte att låta det vara avstängt hela tiden, eftersom missade mejl och inaktuella kalendrar snabbt blir irriterande. Under resdagar, långa vandringar eller strömavbrott kan det däremot hjälpa.

## Reglaget för snabb övergång till mobilnätet

I Utvecklaralternativ finns reglaget **Mobile data always active**. När det är på håller Android mobilanslutningen redo även när Wi-Fi används. Fördelen är snabbare övergång om wifi-anslutningen försvinner. Nackdelen är att modemet kan hållas mer aktivt än nödvändigt.

Det märks mest när mobilsignalen är svag. En mobil som är ansluten till Wi-Fi i en källare med en enda signalstapel i LTE-nätet kan ändå slösa ström på att upprätthålla mobilanslutningen.

Aktivera Utvecklaralternativ genom att gå till **Inställningar > Om telefonen** och trycka sju gånger på **Versionsnummer**. Kontrollera sedan **Inställningar > System > Utvecklaralternativ** och leta efter **Mobile data always active**. På Samsung visas Utvecklaralternativ vanligtvis längst ned i Inställningar när funktionen har aktiverats.

Stäng av reglaget om mobilen tillbringar större delen av dagen på stabilt Wi-Fi. Räkna med en kort fördröjning när wifi-anslutningen försvinner och mobilen växlar tillbaka till mobildata.

## Aviseringar, väckningsgester och små uppvaknanden

En enda avisering kostar inte mycket batteri. En hel dag med störande aviseringar gör det. Varje ljud, vibration, skärmväckning och låsskärmsanimation ger mobilen ännu en anledning att lämna sitt mest strömsnåla viloläge.

Öppna **Inställningar > Aviseringar > Appaviseringar** och var hård mot reklamappar. Shoppingerbjudanden, spelpåminnelser, strömningsrekommendationer, restaurangerbjudanden och marknadsföringsaviseringar behöver inte väcka mobilen.

Kontrollera också inställningarna för låsskärm och gester, till exempel att väcka skärmen när mobilen lyfts, väcka den med ett tryck eller dubbeltrycka för att kontrollera mobilen. De här funktionerna använder strömsnåla sensorer och är därför inga enorma batteritjuvar i sig. Det större problemet är oavsiktliga väckningar i en ficka, väska eller på ett bord som vibrerar.

Stäng av de funktioner du inte använder. Behåll dem som faktiskt gör mobilen trevligare att leva med.

## Svag signal är den dolda förbrukning du inte kan stänga av med ett reglage

Dålig mobilsignal kan dra mer batteri än någon inställning på den här listan. När mobilen kämpar för att hålla anslutningen arbetar modemet hårdare. Det märks på landsbygden, under jord, i betongbyggnader, i hissar och i bostäder där mobilen klamrar sig fast vid en enda signalstapel.

Om du använder Wi-Fi och inte behöver vanliga mobilsamtal eller SMS en stund kan flygplansläge tillsammans med Wi-Fi hjälpa. Slå på flygplansläget och aktivera sedan Wi-Fi igen. Då stängs mobilradion av medan internetanslutningen finns kvar. Gör inte detta om du behöver vanliga mobilsamtal, SMS eller operatörens nödfunktioner.

Det är här ett verktyg som runcheck är användbart. Om förbrukningen med släckt skärm sammanfaller med svag signal i stället för skärmanvändning är problemet ingen mystisk app. Det är radion.
