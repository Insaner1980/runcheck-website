---
title: "Varför tappar telefonen wifi-anslutningen hela tiden?"
description: "Den irriterande varianten är när wifi fungerar i köket, försvinner i sovrummet, ansluter igen i tio sekunder och sedan försvinner på nytt. Inget ser uppenbart trasigt ut. Routern är på, lösenordet är rätt och apparna fortsätter att skylla på att det saknas internet."
listSummary: "nätverk, anslutningar och android"
hub: "network"
sourceNumber: 95
order: 6
tags: ["nätverk","anslutningar","android","felsökning","guide"]
locale: "sv"
draft: false
---
Börja med en fråga: tappar andra enheter på samma wifi också anslutningen? Om svaret är ja ska du börja med routern eller internetanslutningen. Om bara telefonen kopplas ned ligger problemet troligen i telefonen, den sparade nätverksprofilen eller hur enheten växlar mellan frekvensband.

## Om flera enheter kopplas ned, börja med routern

Starta om routern innan du gör något mer avancerat. Dra ur strömmen, vänta i 30 sekunder och anslut den igen. Det rensar tillfälliga tillstånd, förnyar DHCP-leaser och tvingar anslutna enheter att förhandla om anslutningen.

Konsumentroutrar kan börja bete sig märkligt efter flera veckors drift. Minnet kan ta slut, gamla enhetsposter kan ligga kvar och roaming kan fungera dåligt efter en firmwareuppdatering. En omstart är ingen djupgående lösning, men det är det snabbaste sättet att skilja ett tillfälligt routerproblem från ett verkligt fel.

Om problemet återkommer öppnar du routerns administrationssida eller app. Leta efter firmwareuppdateringar, antalet anslutna enheter och kanalinställningar. Enklare routrar kan få problem när ett hushåll har 20 eller fler aktiva klienter. Telefoner, datorer, smart-tv, högtalare, kameror, uttag, klockor och surfplattor räknas allihop.

2,4 GHz-bandet är en annan vanlig källa till problem. Det når längre än 5 GHz, men har betydligt färre rena kanaler. I flerbostadshus kan flera routrar konkurrera på samma eller överlappande kanaler. Om du väljer kanal manuellt bör du hålla dig till 1, 6 eller 11 på 2,4 GHz och välja den minst belastade av dem.

## Om bara telefonen kopplas ned

Glöm nätverket och anslut igen. På Pixel och Android-versioner med ett standardnära gränssnitt öppnar du **Inställningar > Nätverk och internet > Internet**, väljer nätverket och trycker på **Glöm**. På Samsung går du till **Inställningar > Anslutningar > Wi-Fi**, öppnar inställningarna för nätverket och väljer **Glöm**. Anslut sedan igen med lösenordet.

Det rensar den sparade profilen. Det hjälper efter ändringar i routern, lösenordsbyten, växling mellan WPA2 och WPA3 och situationer där Android försöker återanvända gamla anslutningsuppgifter.

Kontrollera också om telefonen hoppar över till ett annat sparat nätverk. Det är mindre vanligt än många tror, men förekommer runt öppna nätverk, räckviddsförlängare, gästnät och gamla nätverk från arbete eller kaféer. Ta bort nätverk som inte längre används. Telefonen behöver inget museum över varje surfzon den någonsin har träffat.

## Batteriinställningar kan få appar att verka frånkopplade

Androids Doze- och batterisparfunktioner kan fördröja nätverksaktivitet i bakgrunden när telefonen är inaktiv. Det betyder vanligtvis inte att själva wifi-anslutningen stängs av, men meddelandeappar, säkerhetskopiering, VPN och smarta hem-appar kan bete sig som om nätverket har försvunnit.

Vissa tillverkare är mer aggressiva än andra. Xiaomi, OPPO, vivo och vissa OnePlus-versioner kan begränsa bakgrundsaktivitet hårdare än Pixel. Samsung har gränser för bakgrundsanvändning och energisparalternativ för wifi som också kan påverka hur telefonen beter sig när den är inaktiv.

Om avbrotten inträffar när skärmen är släckt ska du kontrollera den berörda appen först. Tillåt obegränsad batterianvändning för den eller ta bort den från listor över appar som försätts i viloläge. Stäng inte av alla batterifunktioner i hela systemet om du inte vill ladda oftare.

## Smart växling kan vara för smart

Moderna Android-telefoner kan växla från wifi till mobildata när wifi-signalen verkar svag eller saknar internet. I teorin är det hjälpsamt. I praktiken kan ett något långsamt wifi-nätverk kännas instabilt när telefonen hela tiden bestämmer sig för att den vet bättre.

På Pixel finns inställningen under **Inställningar > Nätverk och internet > Adaptive Connectivity** på modeller som stöds. Vissa versioner visar även ett val för automatisk växling i internetinställningarna. På Samsung kan motsvarande val finnas under **Inställningar > Anslutningar > Wi-Fi > Intelligent Wi-Fi**, där du letar efter alternativet för att växla till mobildata. Namn och placering kan variera mellan One UI-versioner.

Stäng av funktionen under en dag om telefonen tappar wifi trots att andra enheter är anslutna. Om problemet upphör har du hittat orsaken.

## Band steering och roaming i mesh-nätverk

Många routrar använder samma nätverksnamn för 2,4 GHz och 5 GHz. Routern och telefonen avgör sedan vilket band som ska användas. Det kallas band steering. Bra routrar sköter det obemärkt. Dåliga routrar flyttar telefonen fram och tillbaka tills anslutningen känns trasig.

Ett snabbt test är att tillfälligt dela upp banden. Ge 2,4 GHz och 5 GHz olika namn och anslut sedan telefonen till ett av dem. Använd 2,4 GHz för längre avstånd och flera väggar. Använd 5 GHz för högre hastighet nära routern.

Mesh-system lägger till ännu ett lager. Om telefonen klamrar sig fast vid en svag mesh-nod i stället för att byta till den närmaste uppstår avbrott när du går genom bostaden. Firmwareuppdateringar förbättrar ofta detta, men placeringen spelar också roll. En mesh-nod bakom en tv eller inne i ett skåp ber om problem.

## Signalstyrka och placering

Wifi blir svagare med avstånd och hinder. En telefon som fungerar nära routern men tappar anslutningen två rum bort är troligen inte trasig. Den tar bara emot en svag eller störd signal.

Som grov riktlinje är wifi runt -50 dBm starkt, -60 dBm bra och under -70 dBm börjar stabiliteten ofta försämras. Under -80 dBm är sporadiska avbrott inte förvånande.

Flytta upp routern från golvet och bort från tjocka väggar, metallhyllor, akvarier och mikrovågsugnar. Placera den nära bostadens mitt om det går. I större hem fungerar ett ordentligt mesh-system vanligtvis bättre än en billig räckviddsförlängare, eftersom förlängare ofta minskar genomströmningen och lägger till ytterligare en punkt där roaming kan krångla.

## Säkerhetsinställningar kan ge problem på en enda enhet

WPA3 är den nuvarande säkerhetsstandarden för wifi, men äldre telefoner och äldre routerfirmware kan fungera dåligt med nätverk som enbart använder WPA3. Om en Android-telefon kopplas ned från WPA3 medan allt annat fungerar kan du prova blandat WPA2/WPA3-läge.

Kontrollera också MAC-filtrering, föräldrakontroller och routerns enhetsgräns. Om routern använder en vitlista med MAC-adresser kan Androids slumpgenererade MAC-adress se ut som en ny enhet. För ett betrott hemnätverk kan du ändra just det nätverket till telefonens eller enhetens MAC-adress i nätverkets sekretessinställningar. Behåll slumpgenererad MAC på offentliga nätverk.

## Programuppdateringar, inklusive Android 17

Stora Android-uppdateringar kan introducera anslutningsfel. De kan också blottlägga gamla routerfel som redan fanns. Android 17 släpptes först till de flesta Pixel-modeller som stöds i juni 2026, medan andra tillverkare lanserar det senare genom sina egna programvaruversioner. En Pixel-specifik diskussion om Android 17 behöver därför inte gälla en Samsung-, Xiaomi- eller OnePlus-telefon som ännu inte har fått sin Android 17-version.

Om wifi började kopplas ned direkt efter en uppdatering ska du börja med de tråkiga kontrollerna: starta om telefonen, starta om routern, installera väntande systemuppdateringar från Google Play eller månatliga säkerhetsuppdateringar och glöm nätverket. Återställ sedan nätverksinställningarna om det behövs.

På Pixel och många nyare Android-versioner finns separata val under **Inställningar > System > Återställningsalternativ** för **Återställ mobilnätverksinställningar** och **Återställ Bluetooth och wifi**. På Samsung finns motsvarande alternativ under **Inställningar > Allmän hantering > Återställ**, men exakt namn kan skilja sig mellan One UI-versioner. Återställningen raderar sparade wifi-nätverk, Bluetooth-parkopplingar och egna mobilnätsinställningar, så ha wifi-lösenorden till hands.

## När det kan vara hårdvaran

Hårdvaran är den sista misstänkta orsaken, inte den första. Men fel förekommer. Fallskador, vätska, åldrande antenner och skador på kretskortet kan få wifi att sluta fungera trots att andra radiofunktioner verkar normala.

Testa telefonen på ett annat wifi-nätverk. Testa sedan i säkert läge. Om telefonen håller anslutningen i säkert läge stör troligen en tredjepartsapp. VPN-appar, annonsblockerare, brandväggar, enhetshanteringsappar och tveksamma wifi-optimerare är vanliga misstänkta.

Om telefonen tappar anslutningen till flera routrar, fortfarande gör det efter återställda nätverksinställningar och även tappar wifi i säkert läge, blir professionell reparation eller byte ett realistiskt svar.

## Snabba svar

Varför försvinner wifi bara när skärmen är släckt? Vanliga orsaker är apparnas batteribegränsningar, VPN-beteende eller tillverkarens energisparfunktioner. Wifi-radion kan fortfarande vara ansluten samtidigt som appen inte får fortsätta arbeta i bakgrunden.

Kan ett telefonskal orsaka wifi-avbrott? Ett normalt skal av plast, silikon eller läder spelar liten roll. Metallskal eller magnetplattor kan försvaga signalen, särskilt när anslutningen redan är svag.

Varför fungerar bara ett wifi-nätverk dåligt? Det pekar mot routerns konfiguration eller en skadad sparad profil. Glöm nätverket, anslut igen och kontrollera sedan band steering, WPA-läge, MAC-filtrering och routerns firmware.
