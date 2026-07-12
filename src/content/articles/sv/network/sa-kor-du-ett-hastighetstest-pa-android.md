---
title: "Så kör du ett hastighetstest på Android"
description: "Du trycker på Kör, ser mätaren hoppa till och får en siffra som ser officiell ut. Användbart, ja. Ett slutgiltigt svar, nej."
listSummary: "Du trycker på Kör, ser mätaren hoppa till och får en siffra som ser officiell ut."
hub: "network"
sourceNumber: 92
order: 3
tags: ["nätverk","anslutningar","android","felsökning","guide"]
locale: "sv"
draft: false
---
Testet visar vad som hände just då, mot just den servern och under de nätverksförhållanden som rådde. Det är en ögonblicksbild, inte en diagnos i sig. Ändå är det den bästa första siffran att ta fram när telefonen känns långsam.

## Vad testet mäter

Ett vanligt test visar nedladdningshastighet, uppladdningshastighet och latens.

Nedladdningshastigheten visar hur snabbt data når telefonen. Den påverkar webbsurfning, strömning, appnedladdningar, visning av molnfoton och det mesta du gör på internet till vardags.

Uppladdningshastigheten visar hur snabbt data lämnar telefonen. Den spelar roll när du skickar videor, säkerhetskopierar foton, laddar upp filer, deltar i videosamtal eller delar skärmen.

Latens, ofta kallad ping, är tur-och-retur-fördröjningen i millisekunder. Låg latens gör att anslutningen känns snabb att reagera. Hög latens gör tryckningar, samtal, spel och distansarbete tröga även när nedladdningshastigheten ser bra ut.

Vissa appar visar också jitter. Det beskriver hur mycket latensen varierar från ögonblick till ögonblick. En ping på 30 ms med lågt jitter känns stabil. En ping på 30 ms som hoppar kraftigt kan fortfarande ge hackiga samtal.

## Använd Googles inbyggda test för en snabb kontroll

Öppna en webbläsare, sök efter **speed test** på Google och kör testet när kortet visas. Testet använder Measurement Lab, eller M-Lab, och visar de viktigaste värdena utan att du behöver installera en app.

Det fungerar bra som en snabb rimlighetskontroll. Du får inte mycket historik, och det är inte det bästa verktyget för att jämföra flera nätverk över tid. Men när någon säger att internet är långsamt visar det snabbt om telefonen får 2 Mbit/s eller 200 Mbit/s.

## Använd en app när du behöver historik

Speedtest by Ookla är det välkända alternativet. Appen testar nedladdning, uppladdning, latens och vanligtvis jitter, låter dig välja server och sparar resultat. Den är användbar när du vill jämföra wifi, LTE, 5G och olika platser.

FAST by Netflix är enklare. Den fokuserar först på nedladdningshastigheten eftersom den är byggd kring strömningsprestanda. Öppna **Show more info** för att se uppladdning och latens.

Meteor by OpenSignal passar mindre tekniska användare eftersom appen förklarar om den uppmätta anslutningen räcker för vanliga typer av appar, till exempel strömning, spel, webbsurfning och videosamtal.

runcheck använder M-Lab NDT7 för sitt inbyggda hastighetstest och sparar resultaten tillsammans med anslutningstyp och signalinformation. Det spelar roll eftersom hastigheten ensam kan vara missvisande. Ett dåligt resultat med svag signal betyder något annat än ett dåligt resultat med stark signal och hög latens.

## Håll koll på användningen av mobildata

Varje test överför riktiga data. Via wifi spelar det oftast ingen större roll. Via mobilnätet kan det göra det.

Små webbaserade test kan använda några tiotal MB. Appbaserade test över snabb LTE eller 5G kan använda betydligt mer eftersom de försöker mäta hur mycket data anslutningen kan flytta under testperioden. Flera test i rad kan förbruka hundratals MB.

Testa därför mobildata medvetet. Stäng av wifi, kör testet en eller två gånger, spara resultaten och sluta där.

## Så får du ett renare resultat

Stå stilla. Om du rör dig under ett mobiltest kan telefonen byta basstation, frekvensband eller signalförhållanden medan testet pågår.

Stäng först sådant som uppenbart använder mycket bandbredd. Molnsäkerhetskopiering, appuppdateringar, videoströmmar och nedladdningar konkurrerar med testet.

Testa wifi och mobildata var för sig. Om wifi är på testar du wifi. Stäng av wifi när du vill testa mobilnätet.

Kör tre test bara när du behöver ett bättre genomsnitt. Om ett resultat skiljer sig kraftigt från de två andra kan du bortse från det. Det fångade troligen en kort belastningstopp, ett dåligt serverval eller en överföring i bakgrunden.

Använd en server i närheten vid vanlig felsökning. En avlägsen server ökar latensen och kan visa lägre hastighet av skäl som inte har med den lokala anslutningen att göra. Testa mot avlägsna servrar endast när du särskilt vill veta hur anslutningen fungerar mot tjänster i den regionen.

## Vad siffrorna betyder i praktiken

För webbsurfning och meddelanden kan till och med 5 Mbit/s kännas bra om latensen är låg. För HD-video räcker vanligtvis 5-10 Mbit/s. För 4K-strömning bör du sikta på minst 25 Mbit/s per ström.

Videosamtal är mer beroende av uppladdning och latens än många tror. Ett nedladdningsresultat på 200 Mbit/s räddar inte samtalet om uppladdningen är 0,5 Mbit/s eller jittervärdet är högt.

För spel är latens och jitter viktigare än nedladdningshastighet när spelet väl är installerat. En stabil anslutning på 40 Mbit/s kan kännas bättre än en anslutning på 400 Mbit/s med slumpmässiga latensspikar.

Vid säkerhetskopiering till molnet avgör uppladdningshastigheten hur smärtsam processen blir. Uppladdningen är ofta mycket långsammare än nedladdningen i både fasta och mobila nät, så anta inte att snabb nedladdning också betyder snabba säkerhetskopior.

## Jämför med rätt löfte

För wifi hemma kan du jämföra resultatet med bredbandsabonnemanget, men lämna utrymme för wifi-förluster. Om abonnemanget är 100 Mbit/s och telefonen får 80 eller 90 Mbit/s nära routern är det inget problem. Om den får 25 Mbit/s bredvid routern bör du börja titta på routern, kanalträngsel, internetleverantören eller någon annan enhet som använder bandbredd.

För mobilnätet ska du inte förvänta dig den 5G-hastighet som syns i reklamen. Den verkliga hastigheten beror på operatör, frekvensband, belastning på basstationen, prioritering i abonnemanget, signal inomhus och telefonens modem. Testa på några olika platser innan du dömer ut telefonen.

Jämför också med uppgiften. Om Netflix fungerar, samtalen är tydliga och appar laddas ned utan problem kan jakten på en snyggare siffra i hastighetstestet vara bortkastad tid.

## Spara resultat när de berättar något

Ett enda resultat räcker för att bekräfta att något är fel. Några test över tid är bättre när du vill hitta ett mönster.

Kör ett test när anslutningen känns dålig och ett nytt när den känns normal. Anteckna nätverk, plats, klockslag, signalstyrka och om ett VPN var anslutet.

Det är då historiken blir användbar. Om wifi-hastigheten sjunker varje kväll kan hushållets belastning eller internetleverantörens kapacitet vara orsaken. Om mobilnätet bara blir långsamt i en viss byggnad är täckningen mer sannolik. Om alla nätverk bara är långsamma på en enda telefon bör du undersöka telefonen.
