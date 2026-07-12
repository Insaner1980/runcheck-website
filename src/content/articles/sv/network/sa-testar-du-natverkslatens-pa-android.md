---
title: "Så testar du nätverkslatens på Android"
description: "Du sitter i ett videosamtal. Alla hör dig och bilden ser bra ut, men samtalet känns ändå en halv sekund ur fas. Det är latens. Nedladdningshastigheten får mest uppmärksamhet, men latensen avgör om anslutningen känns snabb och responsiv."
listSummary: "Du sitter i ett videosamtal."
hub: "network"
sourceNumber: 103
order: 14
tags: ["nätverk","anslutningar","android","felsökning","guide"]
locale: "sv"
draft: false
---
Latens mäts i millisekunder (ms), och lägre är bättre. Tre värden är viktigast: ping, jitter och paketförlust. Ping är tiden det tar för data att färdas från telefonen till en server och tillbaka. Jitter visar hur mycket tiden varierar mellan förfrågningarna. Paketförlust är andelen data som aldrig kommer fram.

En anslutning med 100 Mbps nedladdning och 150 ms ping kan kännas sämre än en anslutning med 20 Mbps och 15 ms ping. Det låter bakvänt tills du provar onlinespel, videosamtal eller fjärrskrivbord. Hastighet flyttar data. Latens styr reaktionstiden.

## Vad siffrorna betyder

Intervallen nedan är praktiska riktlinjer, inte naturlagar. Resultatet påverkas av servern du testar mot, nätverket du använder och till och med tiden på dygnet.

För ping:

- 0-20 ms: Utmärkt. Tävlingsinriktade spel, videosamtal och distansarbete känns omedelbara.
- 20-50 ms: Bra. Det räcker för nästan allt, även enklare onlinespel och röstsamtal.
- 50-100 ms: Användbart. Surfning och strömning fungerar fortfarande, men snabba onlinespel börjar kännas fördröjda.
- Över 100 ms: Tydlig fördröjning. Samtal kan få besvärliga pauser och spel i realtid blir frustrerande.

För jitter är mindre än 30 ms vanligtvis bra. Vid 30-50 ms kan samtal och livevideo börja hacka. Över 50 ms kan anslutningen kännas instabil även om hastigheten är hög.

Paketförlust är mindre förlåtande. Allt över 1-2 procent kan orsaka avbrutet ljud, frusen video eller att spelkaraktären hoppar tillbaka. Nej, ett snabbare abonnemang löser inte automatiskt paketförlust.

## Börja med ett hastighetstest

Den enklaste första kontrollen är ett hastighetstest som visar latens. Kör samma test två gånger, först via Wi-Fi och sedan via mobildata. Om bara den ena anslutningen är dålig har du redan ringat in problemet.

### Googles hastighetstest och M-Lab

Sök efter "speed test" i Chrome på telefonen. Googles inbyggda test drivs av Measurement Lab, oftast kallat M-Lab. M-Labs NDT-test visar uppladdning, nedladdning och latensvärden.

runcheck använder M-Labs NDT7-protokoll i sitt inbyggda hastighetstest. Det användbara är sammanhanget: resultatet sparas tillsammans med anslutningstyp, signalstyrka, ping, jitter samt upp- och nedladdningshastighet. Du behöver alltså inte försöka minnas om det dåliga resultatet kom från Wi-Fi, LTE eller 5G.

### Speedtest by Ookla

Speedtest by Ookla är fortfarande det välbekanta alternativet för snabba tester. Appen visar ping, jitter, nedladdning och uppladdning, och låter dig välja en server i närheten. För ett grundvärde för latens bör du välja en server nära dig. Vid felsökning av spel eller arbete är det bättre att testa mot en server nära tjänsten du faktiskt använder, om appen låter dig välja.

### Fast.com

Fast.com är Netflix hastighetstest. Det börjar med nedladdningshastigheten, men när du trycker på "Show more info" visas även uppladdning och latens. Titta särskilt på belastad latens. Obelastad latens mäts när anslutningen är lugn. Belastad latens mäts medan trafik pågår, vilket ligger närmare det som händer när någon strömmar video, synkroniserar foton eller hämtar en speluppdatering i samma nät.

## Använd ett pingverktyg för längre tester

Hastighetstester är ögonblicksbilder. Ett pingtest som körs i några minuter visar om latensen är stabil.

PingTools Network Utilities kan köra ping, traceroute, DNS-uppslagning och andra nätverkskontroller i samma app. För ett enkelt latenstest kan du pinga ett stabilt mål som `1.1.1.1` eller `8.8.8.8`. Om du felsöker ett visst spel eller en arbetstjänst kan du pinga tjänstens värdnamn om leverantören publicerar ett sådant.

Termux passar om du är bekväm med en terminal. Installera Termux från en officiell källa och lägg sedan till pingverktyget vid behov:

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

Sammanfattningen visar lägsta, genomsnittliga och högsta svarstid samt variationen mellan svaren. Det är variationen du ska bevaka. En anslutning som hoppar från 20 ms till 250 ms och tillbaka känns sämre än en som ligger stabilt på 60 ms.

## Testa latensen under belastning

Latens i ett obelastat nät kan vara missvisande. En router kan visa 12 ms när nätet är lugnt och sedan hoppa till 300 ms så fort en bärbar dator börjar ladda upp foton.

Problemet kallas vanligtvis bufferbloat. Det innebär att nätutrustningen låter köerna fyllas i stället för att hantera trafiken effektivt. Det syns tydligast vid uppladdningar, säkerhetskopiering av video, molnsynkronisering och stora hämtningar.

Prova det här enkla testet:

1. Kör ett latenstest när ingen annan använder nätet.
2. Starta en stor hämtning eller uppladdning på en annan enhet.
3. Kör samma latenstest igen.

Om pingtiden stiger kraftigt under belastning är telefonen förmodligen inte huvudproblemet. Routern, modemet eller operatörsanslutningen har svårt att hantera köerna. Routerinställningar som QoS kan hjälpa, men SQM (Smart Queue Management) är en bättre lösning när routern stöder det.

Waveform Bufferbloat Test är också värt att köra i telefonens webbläsare. Testet betygsätter hur mycket latensen ökar under nedladdning och uppladdning. A eller B är vanligtvis bra. D eller F innebär att realtidsappar får problem när nätet är belastat.

## Jämför Wi-Fi och mobildata

Att testa båda näten är det snabbaste sättet att slippa gissa.

Wi-Fi-latens påverkas av avståndet till routern, störningar, routerns kvalitet, belastade kanaler och frekvensbandet. 5 GHz har vanligtvis mindre störningar och lägre latens än 2,4 GHz på kort avstånd, men når inte lika långt. Wi-Fi 6 och Wi-Fi 6E kan hjälpa i belastade nät, men bara när både telefonen och routern stöder tekniken.

Mobil latens påverkas av signalstyrka, belastningen på basstationen, operatörens routning och om telefonen använder LTE, 5G under 6 GHz eller 5G mmWave. Grova verkliga intervall ser ut så här:

- 4G LTE: ofta omkring 30-60 ms, och högre när basstationen är belastad.
- 5G under 6 GHz: ofta omkring 15-40 ms.
- 5G mmWave: kan vara lägre, men täckningen är begränsad och blockeras lätt.
- 3G: för långsamt och ojämnt för modern användning i realtid.

Det är inga garantier. En ren LTE-anslutning kan slå en överbelastad 5G-anslutning, och en svag Wi-Fi-signal genom två väggar kan förlora stort mot mobildata.

På Android kan du kontrollera den aktiva mobilnätstypen i statusfältet eller i SIM-statusen under Inställningar. Den exakta sökvägen varierar mellan märken. Efter större systemuppdateringar bör du kontrollera detta på nytt innan du skyller på hårdvaran. Android 17 släpptes den 16 juni 2026 för de flesta Pixel-modeller som stöds, och operatörsinställningar eller nätbeteende kan ändras tillsammans med en uppdatering.

## Vad som höjer latensen

Avståndet till servern är det tråkiga svaret, men det spelar stor roll. En server i samma stad kan svara på mindre än 10 ms. En server på andra sidan ett hav kan ta 120 ms eller mer även med en perfekt anslutning.

Nätbelastning kommer därefter. För många enheter i samma Wi-Fi-nät, en full kanal i ett flerbostadshus eller en överbelastad basstation kan alla öka fördröjningen. Tester på kvällen ser ofta sämre ut än tester på morgonen.

VPN lägger till ytterligare ett steg i vägen. En närliggande VPN-server kan öka latensen med bara 10-20 ms. En server långt bort kan lägga till mycket mer. Koppla från VPN och testa igen innan du drar slutsatsen att telefonen är långsam.

Bakgrundstrafik spelar också roll. Molnsäkerhetskopiering, appuppdateringar, fotosynkronisering och strömning kan höja latensen, särskilt på hemanslutningar med begränsad uppladdning.

## Vad du gör med resultatet

Om latensen bara är dålig via Wi-Fi startar du om routern, går närmare, byter till 5 GHz och testar en mindre belastad kanal. Om den blir dålig enbart när nätet används intensivt bör du undersöka QoS eller SQM i routern.

Om latensen bara är dålig via mobildata jämför du signalstyrkan på olika platser. Slå på och av flygplansläget för att tvinga fram en ny anslutning till basstationen. Om problemet började direkt efter en systemuppdatering kontrollerar du om det finns en väntande systemuppdatering eller uppdatering av operatörstjänsterna.

Om latensen är dålig överallt testar du en annan telefon i samma nät. Om två telefoner visar samma fördröjning är det nätet. Om bara en telefon gör det kan du börja undersöka VPN-inställningar, bakgrundsappar, överhettning eller ett möjligt radiofel.

## Vanliga frågor

### Är ping samma sak som latens?

Tekniskt sett är latens fördröjningen i en riktning, medan ping mäter tur och retur. Vid vanlig felsökning på en telefon används orden nästan som synonymer eftersom appar rapporterar pingtiden för tur och retur.

### Kan jag sänka pingtiden på Android?

Du kan inte ändra avståndet till servern, men du kan ta bort onödig fördröjning. Koppla från en långsam VPN, stäng appar som använder mycket bandbredd i bakgrunden, använd Wi-Fi på 5 GHz när du är nära routern och åtgärda bufferbloat i routern om latensen stiger under belastning.

### Varför laggar spel trots att hastigheten är hög?

Därför att nedladdningshastighet och latens är olika problem. En snabb anslutning kan fortfarande ha dåligt jitter, paketförlust eller hög belastad latens. Spel bryr sig mer om jämn timing än om råa Mbps.

### Hur ofta bör jag testa latensen?

Testa vid olika tider på dygnet under några dagar. Ett resultat är en ögonblicksbild. Tre eller fyra resultat via både Wi-Fi och mobildata visar om problemet är återkommande.
