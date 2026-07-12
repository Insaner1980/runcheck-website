---
title: "Drar Bluetooth batteri? Det verkliga svaret"
description: "Metabeskrivning: Bluetooth använder mycket lite batteri på moderna Android-mobiler. Det går vanligtvis bra att låta funktionen vara på, men Bluetooth-sökning, problematiska tillbehör och långa ljudsessioner kan ändå öka förbrukningen."
listSummary: "Metabeskrivning: Bluetooth använder mycket lite batteri på moderna Android-mobiler."
hub: "battery"
sourceNumber: 32
order: 22
subgroup: "Drain"
tags: ["batteri","myter","android","testning","fakta"]
locale: "sv"
draft: false
---
Vissa stänger av Bluetooth varje gång de slutar använda hörlurarna, eftersom de tror att det sparar en halv dags batteritid. Jag förstår tanken. För många år sedan var det ett ganska rimligt råd.

På en modern Android-mobil är det vanligtvis inte värt besväret.

När Bluetooth är aktiverat utan att något är anslutet används mycket lite ström. I Android Authoritys 26 timmar långa test förbrukade mobilen 1,8 % mer batteri med Bluetooth på än med Bluetooth av under en typisk dags användning. Det är inte noll, men skillnaden är så liten att skärmens ljusstyrka, svag mobilsignal, bakgrundsappar och platsanvändning spelar mycket större roll.

## Bluetooth i viloläge är inget batterimonster

Modern Bluetooth-teknik tillbringar mycket tid i vila. När funktionen är på men ingen enhet är ansluten sänder mobilen inte en konstant radiosignal. Den vaknar kort, söker efter kända enheter eller parkopplingsaktivitet och går sedan tillbaka till vila.

Bluetooth Low Energy, eller BLE, är en viktig anledning till att det gamla rådet har blivit inaktuellt. Android stöder BLE för att hitta enheter, fråga efter tjänster och överföra små mängder data. Det är den typen av kommunikation som används av aktivitetsarmband, spårare, sensorer och andra tillbehör med låg datatrafik.

En smartklocka eller aktivitetsmätare kan synkroniseras hela dagen utan att det blir någon stor belastning på mobilens batteri. Klockan har sitt eget batteriproblem att hantera, men för mobilen är förbrukningen vanligtvis liten.

## Ljud använder mer, men fortfarande inte särskilt mycket

Bluetooth-hörlurar använder mer ström än Bluetooth i viloläge. Mobilen måste hålla en ljudström igång, koda eller överföra ljudet och upprätthålla en stabil anslutning.

Bluetooth är ändå sällan huvudorsaken till att mobilen dör. Om du lyssnar på musik i två timmar med skärmen avstängd bidrar ljudappen, strömning över mobilnät eller Wi-Fi och anslutningen till hörlurarna. Bluetooth är en del av helheten, inte hela förbrukningen.

Kodekar med högre bithastighet, som LDAC eller aptX HD, kan använda lite mer ström än enklare kodekar eftersom mer data överförs och ljudbehandlingen kräver mer arbete. Skillnaden är vanligtvis liten. Välj i första hand kodek efter ljudkvalitet och anslutningsstabilitet, och börja oroa dig för batteriet först om du faktiskt ser ett problem.

## Bluetooth-sökning är inställningen som är värd att kontrollera

Det finns en Bluetooth-relaterad inställning som kan spela större roll än huvudreglaget: Bluetooth-sökning för platsangivelse.

På Android 12 och senare är den vanliga sökvägen **Inställningar > Plats > Platstjänster > Bluetooth-sökning**. När funktionen är aktiverad kan Android söka efter Bluetooth-enheter i närheten för att förbättra platsangivelsens precision, även om Bluetooth ser ut att vara avstängt i snabbinställningarna.

Funktionen är användbar för platstjänster och funktioner som använder enheter i närheten, men den kan skapa mer bakgrundsaktivitet om appar ofta begär platsuppgifter. Om mobilen tappar mycket laddning i viloläge och batteristatistiken pekar mot platsanvändning är sökningen värd att kontrollera.

Blanda inte ihop detta med vanlig Bluetooth-användning. Att stänga av sökningen är inte samma sak som att stänga av hörlurar, smartklocka, bilanslutning eller hörapparater.

## Flera enheter kan tillsammans märkas

En Bluetooth-enhet brukar knappt märkas. Tre eller fyra aktiva enheter kan bli mer påtagliga.

En mobil som är ansluten till hörlurar, smartklocka, bilsystem och spårare upprätthåller flera länkar samtidigt. Det borde fortfarande inte dominera batteridiagrammet, men det innebär mer radioarbete än en enda inaktiv anslutning. Det större problemet är ofta ett tillbehör eller en app som beter sig illa och hela tiden återansluter, söker eller väcker mobilen.

Om **Inställningar > Batteri** visar att Bluetooth står för en stor del av dagens batteriförbrukning ska du inte direkt anta att Bluetooth-funktionen är trasig. Leta efter mönstret. Började problemet efter att du parkopplade en ny klocka? Tappar ett visst par hörlurar anslutningen hela tiden? Har en spårningsapp fått platsbehörighet och körts hela dagen? Där brukar den verkliga förbrukningen finnas.

## Bör du stänga av Bluetooth?

Enbart för batteritidens skull, vanligtvis inte.

Låt Bluetooth vara på om du använder hörlurar, smartklocka, bilsystem, tangentbord, spårare eller hörhjälpmedel. Bekvämligheten är värd mer än den lilla batterivinst du får av att slå av och på funktionen hela dagen.

Stäng av den när du har ett konkret skäl: du är på en lång resa utan laddare, du felsöker ett batteriproblem, du använder inga Bluetooth-tillbehör eller du vill minska antalet aktiva trådlösa radiofunktioner av integritets- eller säkerhetsskäl. Det är fullt rimliga skäl. Förvänta dig bara ingen dramatisk förbättring av batteritiden.

Behöver du spara batteri snabbt ger det mer att sänka skärmens ljusstyrka, korta skärmens tidsgräns, använda Wi-Fi i stället för en svag mobilanslutning och kontrollera apparnas bakgrundsanvändning. Bluetooth ligger långt ned på listan.

## Vanliga frågor

Sparar Bluetooth 5.0 eller senare mer batteri än äldre Bluetooth-versioner? Inte på ett sätt som de flesta märker i vardagen. Det stora steget var stödet för Bluetooth Low Energy. Nyare versioner ger bättre räckvidd, högre datahastighet, fler ljudfunktioner och stabilare anslutningar, men förbrukningen i viloläge är redan mycket låg.

Drar Bluetooth batteri under natten? Knappt, om inget är fel. Om mobilen tappar 20 % under natten är Bluetooth troligen inte orsaken.

Hjälper det att stänga av Bluetooth-sökning? Det kan göra det, särskilt om platstjänster används ofta. Kontrollera **Inställningar > Plats > Platstjänster > Bluetooth-sökning** på Android 12 och senare.
