---
title: "Så löser du anslutningsproblem med Wi-Fi på Android"
description: "Stegvisa lösningar på Wi-Fi-problem i Android, bland annat avbrutna anslutningar, långsamt Wi-Fi, problem med sparade nätverk, DNS-inställningar, routerkontroller och information om uppdateringen till Android 17."
listSummary: "prestanda, hastighet och android"
hub: "network"
sourceNumber: 96
order: 7
tags: ["prestanda","hastighet","android","optimering","felsökning"]
locale: "sv"
draft: false
---
Vad bör du prova först när Wi-Fi slutar fungera på Android? Börja inte med en fabriksåterställning, och lägg inte en halvtimme på att ändra routerinställningar innan du har testat det enklaste. De flesta Wi-Fi-problem hör till en av tre grupper: telefonen ansluter inte, anslutningen bryts hela tiden eller telefonen är ansluten men internet verkar stå helt stilla.

Gå igenom lösningarna i den här ordningen. Det sparar tid.

## 1. Stäng av och slå på Wi-Fi, sedan flygplansläge

Dra ned snabbinställningarna och stäng av Wi-Fi. Vänta fem sekunder. Slå sedan på det igen.

Om det inte hjälper aktiverar du flygplansläget, väntar tio sekunder och stänger sedan av det. Då startas telefonens trådlösa radiofunktioner om utan att hela enheten behöver startas om. På Pixel och Android-versioner som ligger nära standardgränssnittet finns flygplansläget även under Inställningar > Nätverk och internet. På Samsung används vanligtvis Settings > Connections.

Det är en liten åtgärd, men den löser förvånansvärt många tillfälliga problem med radioanslutningen.

## 2. Glöm nätverket och anslut igen

En sparad Wi-Fi-profil kan bli inaktuell efter en uppdatering av routerns firmware, ett lösenordsbyte, en ändring av säkerhetsläget eller en ny konfiguration av ett mesh-system.

På Pixel och många versioner med ett Android 17-liknande gränssnitt går du till Inställningar > Nätverk och internet > Internet. Tryck på kugghjulet bredvid nätverket och välj Glöm. På Samsung går du vanligtvis till Settings > Connections > Wi-Fi, trycker på kugghjulet bredvid nätverket och väljer Forget.

Anslut på nytt genom att välja nätverket och ange lösenordet igen. Om routern har både ett huvudnätverk och ett gästnätverk, kontrollera att du väljer rätt.

## 3. Starta om telefonen och routern

Starta om telefonen. Starta sedan om routern genom att dra ur strömkabeln i 30 sekunder.

Gör båda delarna, inte bara den ena. Telefonen kan ha fastnat i ett tillfälligt nätverksläge, medan routern kan ha en gammal DHCP-tilldelning eller en överbelastad anslutningstabell. När båda startas om tvingas de förhandla fram anslutningen på nytt.

Om flera enheter har problem med Wi-Fi är omstarten av routern viktigare än omstarten av telefonen.

## 4. Kontrollera om problemet gäller Wi-Fi eller internetanslutningen

Android kan vara anslutet till Wi-Fi även när internetanslutningen bakom routern ligger nere. Wi-Fi-symbolen visar bara att telefonen har en lokal trådlös länk.

Prova en annan enhet i samma nätverk. Om alla enheter är långsamma eller saknar internet bör du kontrollera modemet, routern och internetleverantören. Om bara Android-telefonen har problem fortsätter du med åtgärderna på telefonsidan.

Försök också öppna routerns administrationssida. Många routrar använder 192.168.1.1 eller 192.168.0.1. Om den sidan öppnas men vanliga webbplatser inte gör det fungerar själva Wi-Fi-anslutningen. Problemet ligger då längre upp i internetanslutningen, i DNS eller i routerns konfiguration.

## 5. Uppdatera Android, Google Play-systemkomponenter och routerns firmware

Gå till Inställningar > System > Mjukvaruuppdateringar och installera väntande uppdateringar. På Samsung används vanligtvis Settings > Software update > Download and install.

På Android-versioner som ligger nära Pixels gränssnitt bör du även kontrollera Google Play-systemuppdateringar under Settings > Security & privacy > System & updates. Den exakta formuleringen kan flyttas mellan versioner, men både telefonens firmware och systemkomponenterna spelar roll.

Routerns firmware är lätt att glömma. Öppna routerappen eller administrationspanelen och leta efter uppdateringar under firmware, system eller administration. Routertillverkare rättar regelbundet stabilitetsfel i Wi-Fi, men många routrar uppdateras inte tillförlitligt på egen hand.

## 6. Stäng av automatisk växling från Wi-Fi till mobildata

Om telefonen lämnar Wi-Fi utan tydlig anledning trots att routern fungerar kan automatisk nätverksväxling vara orsaken.

På Pixel kan du kontrollera Inställningar > Nätverk och internet > Adaptiv anslutning. På Samsung öppnar du vanligtvis Settings > Connections > Wi-Fi > Intelligent Wi-Fi och stänger av Switch to mobile data tillfälligt.

Låt funktionen vara avstängd i ett dygn. Om Wi-Fi blir stabilt reagerade den för aggressivt på ett nätverk som telefonen bedömde som svagt eller av låg kvalitet.

## 7. Kontrollera 2,4 GHz och 5 GHz

2,4 GHz-bandet har längre räckvidd och tar sig bättre genom väggar. 5 GHz är snabbare nära routern men tappar tidigare genom väggar. En telefon som fungerar perfekt på 5 GHz i rummet bredvid kan därför få problem längst bort i bostaden.

Om routern samlar båda banden under samma nätverksnamn kan du tillfälligt dela upp dem, till exempel i HomeWiFi-2G och HomeWiFi-5G. Anslut telefonen till 2,4 GHz för bättre räckvidd eller 5 GHz för högre hastighet.

Det aktuella bandet syns ofta i informationen om det anslutna Wi-Fi-nätverket. Standardnära Android kan visa frekvens eller länkhastighet. Samsung visar liknande information på nätverkets inställningssida.

## 8. Kontrollera Privat DNS innan du ändrar statisk DNS

DNS-problem kan få Wi-Fi att se trasigt ut. Telefonen visar att den är ansluten och vissa chattappar kan fungera delvis, men webbplatser fastnar eller kan inte slås upp.

På Android 9 och senare kontrollerar du Inställningar > Nätverk och internet > Privat DNS. Om en egen leverantör är vald och Wi-Fi inte fungerar, byt tillfälligt till automatiskt läge eller stäng av funktionen och testa igen.

Du kan använda leverantörer som `dns.google` eller `one.one.one.one`, men skriv värdnamnet exakt. Ett felaktigt värdnamn för Privat DNS kan slå ut namnuppslagning både via Wi-Fi och mobildata.

Byt inte ett Wi-Fi-nätverk från DHCP till statisk konfiguration om du inte känner till rätt IP-adress, gateway och nätmask. Statisk DNS kan hjälpa i vissa fall, men fel IP-uppgifter skapar ett nytt problem som ser värre ut än det ursprungliga.

## 9. Återställ nätverksinställningarna

Använd det här när enskilda åtgärder inte har hjälpt. En nätverksåterställning rensar inställningar för Wi-Fi, Bluetooth och mobilnät utan att radera bilder, appar eller filer.

Pixel och standardnära Android: Inställningar > System > Återställningsalternativ > Återställ wifi, mobildata och Bluetooth. På nyare Pixel-versioner kan mobilnätet och Bluetooth/Wi-Fi ha separata återställningsalternativ.

Samsung: Settings > General management > Reset > Reset network settings.

Xiaomi: Settings > Connection & sharing > Reset Wi-Fi, mobile networks, and Bluetooth.

OnePlus: Settings > System > Reset options > Reset Wi-Fi, mobile & Bluetooth.

Efteråt måste du ansluta till Wi-Fi-nätverk och parkoppla Bluetooth-enheter igen.

## 10. Kontrollera datum och tid

Fel datum och tid kan stoppa certifikatkontroller, inloggningsportaler och vissa autentiseringsflöden. Det låter nästan för enkelt, men problemet förekommer efter resor, helt urladdade batterier, manuella ändringar av tidszon eller fel under enhetskonfigurationen.

Gå till Inställningar > System > Datum och tid och aktivera automatisk tid och tidszon. På Samsung används vanligtvis Settings > General management > Date and time.

## 11. Granska slumpgenererad MAC-adress i betrodda nätverk

Android 10 och senare använder slumpgenererade MAC-adresser för bättre integritet i Wi-Fi-nätverk. Det är bra i offentliga nätverk. Hemma eller på jobbet kan det däremot förvirra routrar som använder MAC-filtrering, reserverade IP-adresser, föräldrakontroller eller enhetsgränser.

Öppna informationen om Wi-Fi-nätverket och leta efter integritet eller typ av MAC-adress. Om ett betrott hemnätverk fortsätter att avvisa telefonen kan du prova telefonens eller enhetens MAC-adress för just det nätverket. Låt slumpgenererad MAC-adress vara aktiverad på andra nätverk.

## 12. Åtgärda orsaker på routersidan

Om flera enheter har problem bör du fokusera på routern.

På 2,4 GHz kan du använda kanal 1, 6 eller 11 och välja den som är minst belastad. Placera inte routern bakom en tv, i ett skåp, intill en mikrovågsugn, nära metallhyllor eller på golvet.

Om routern använder bandstyrning kan du prova att stänga av den eller dela upp 2,4 GHz och 5 GHz i separata nätverksnamn. Om säkerheten är inställd på enbart WPA3 och en äldre telefon har problem, prova blandläget WPA2/WPA3. Höj enhetsgränsen eller ta bort gamla enheter om routern har nått sitt tak.

I större bostäder är ett mesh-system vanligtvis bättre än en billig räckviddsförlängare. Förlängare kan fungera, men de sänker ofta hastigheten och kan ge märkliga problem när enheter växlar mellan åtkomstpunkter.

## 13. Efter Android 17 eller en annan större uppdatering

Android 17 släpptes den 16 juni 2026 och blev då tillgängligt på de flesta Pixel-enheter som stöds. Andra tillverkare följer sina egna tidplaner. Om Wi-Fi-problemen började direkt efter uppdateringen ska du inte utgå från att routern plötsligt har gått sönder.

Installera eventuella efterföljande säkerhetsuppdateringar, uppdatera operatörs- och anslutningsrelaterade appar via Play Butik, starta om telefonen och routern och glöm sedan nätverket och anslut på nytt. Om felet är utbrett för just din modell och programversion kan en månadsuppdatering vara den verkliga lösningen.

Äldre råd säger ofta att systemets cachepartition ska rensas. Jag skulle inte börja där på moderna Android-telefoner. Vissa Samsung-modeller visar fortfarande cachealternativ i återställningsläget, men på många nyare Android-enheter går det inte att förlita sig på den gamla felsökningsmetoden.

## 14. Testa säkert läge

I säkert läge startar Android utan de flesta appar från tredje part. Om Wi-Fi fungerar normalt där är det sannolikt en installerad app som stör.

VPN-appar, brandväggar, annonsblockerare, verktyg för enhetshantering och så kallade Wi-Fi-förstärkarappar är vanliga misstänkta. Avinstallera eller inaktivera de senast installerade nätverksrelaterade apparna först.

## När du bör överväga en reparation

Om telefonen tappar Wi-Fi i flera olika nätverk, fortfarande misslyckas efter en nätverksåterställning och i säkert läge, samtidigt som andra enheter fungerar normalt, blir ett hårdvarufel mer sannolikt. Skador på antennen och fel i Wi-Fi-kretsen är ovanliga, men förekommer efter fall eller kontakt med vatten.

Gör en fabriksåterställning först när all data har säkerhetskopierats. Om återställningen inte hjälper är reparation nästa rimliga steg.

## Snabba svar

Bör Wi-Fi stängas av när du lämnar hemmet? Vanligtvis inte. Moderna Android-versioner hanterar sökningen effektivt, och aktiverat Wi-Fi hjälper telefonen att hitta kända nätverk och förbättrar platsnoggrannheten.

Kan ett skal störa Wi-Fi? Vanliga skal gör det inte. Metallskal, tjocka batteriskal och magnetplattor kan försämra mottagningen när signalen redan är svag.

Hur kontrollerar du Wi-Fi-signalstyrkan i dBm? Vissa Android-versioner visar den i nätverksinformationen. Annars kan en Wi-Fi-analysapp visa värdet. Omkring -30 till -50 dBm är utmärkt, -50 till -70 dBm är användbart till bra och svagare än -70 dBm kan bli instabilt beroende på störningar.

runcheck följer Wi-Fi-signalens kvalitet över tid på skärmen Network, inklusive anslutningsuppgifter som frekvensband, länkhastighet och signalhistorik när Android gör dem tillgängliga.
