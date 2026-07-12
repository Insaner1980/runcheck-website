---
title: "Så kontrollerar du wifi-signalstyrkan på Android"
description: "Lär dig läsa wifi-signalens styrka på Android i dBm, inte bara som staplar. Guiden tar upp inbyggda inställningar, analysappar och vad siffrorna betyder."
listSummary: "Lär dig läsa wifi-signalens styrka på Android i dBm, inte bara som staplar."
hub: "network"
sourceNumber: 90
order: 1
tags: ["nätverk","anslutningar","android","felsökning","guide"]
locale: "sv"
draft: false
---
Wifi-staplarna i statusfältet är en grov ledtråd, inte ett mätvärde. Lägg två telefoner bredvid varandra så kan de ändå visa olika resultat, eftersom tillverkarnas Android-gränssnitt inte översätter signalstyrka till staplar på exakt samma sätt.

När du ska felsöka på riktigt bör du titta efter dBm. Det värdet visar styrkan på signalen som telefonen tar emot från routern.

## Börja i Androids inställningar

Öppna **Inställningar > Nätverk och internet > Internet** på en Pixel eller en telefon med Android nära standardversionen. På Samsung Galaxy öppnar du **Inställningar > Anslutningar > Wi-Fi**. Tryck sedan på nätverket som telefonen är ansluten till.

Nätverkets informationssida visar vanligtvis en signalbedömning som Excellent, Good, Fair eller Weak. Den kan också visa länkhastighet, frekvens, säkerhetstyp, IP-adress och andra anslutningsuppgifter. Den exakta sidan varierar mellan märken och Android-versioner, så det är inget problem om telefonen inte ser exakt ut som en skärmbild i en guide.

På många nyare telefoner visar Androids inställningar inte det råa dBm-värdet. Det är irriterande, men inte ovanligt. Länkhastigheten ger ändå användbar information. Om den sjunker från flera hundra Mbps nära routern till 40 Mbps i sovrummet längst bort är det ett tydligt tecken på att något har förändrats i anslutningen.

## Prova utvecklaralternativen, men lita inte på dem

Vissa telefoner kan visa mer wifi-information när utvecklaralternativen är aktiverade.

Öppna **Inställningar > Om telefonen** och tryck sju gånger på **Versionsnummer**. Gå sedan till **Inställningar > System > Utvecklaralternativ** och leta under nätverksalternativen efter **Enable Wi-Fi verbose logging**. Googles utvecklardokumentation säger att funktionen aktiverar mer utförlig wifi-loggning för varje SSID utifrån den relativa mottagna signalstyrkan, RSSI.

I praktiken varierar det vad som faktiskt blir synligt. Pixel och telefoner med Android nära standardversionen visar oftare användbara extrauppgifter. Samsung och andra OEM-versioner kan dölja samma information eller visa den på ett annat sätt. Det här är ett av de Android-knep som fungerar tills det inte gör det.

## Använd en wifi-analysapp för dBm

En wifi-analysapp är det enklaste sättet att få ett dBm-värde på olika telefoner.

WiFiman från Ubiquiti visar wifi-information som signalstyrka, kanal, SSID, BSSID, gateway, DNS, latens och paketförlust. Det är ett bra första val om du vill ha en app som också innehåller hastighets- och nätverksverktyg.

NetSpot passar bättre när du vill kartlägga en lokal. Appen kan visa signalstyrka och hjälpa dig bygga en översikt över täckningen medan du går runt i ett hem eller på ett kontor.

Network Analyzer är användbar när problemet kanske inte alls är signalstyrkan. Den kombinerar information om wifi och mobilnät med verktyg som ping, DNS-uppslagning och traceroute.

När du har installerat en app letar du upp nätverksnamnet och följer dBm-värdet medan du rör dig. Den siffran är mer användbar än ikonen i statusfältet.

## Vad dBm-värden betyder

dBm-värden är negativa. Ju närmare noll, desto starkare signal. Ett värde på -45 dBm är mycket starkare än -75 dBm.

Använd följande som praktiska riktvärden för hemnätverk:

- -30 till -50 dBm: utmärkt. Du är förmodligen nära routern eller accesspunkten.
- -50 till -60 dBm: starkt. Streaming, videosamtal och vanlig surfning bör fungera stabilt.
- -60 till -67 dBm: fortfarande bra för det mesta, även HD-video och samtal om störningarna är små.
- -67 till -70 dBm: användbart, men här kan realtidssamtal och spel börja få problem.
- -70 till -80 dBm: svagt. Surfning kan fungera, men videokvaliteten kan sjunka och samtal kan frysa.
- Under -80 dBm: dåligt. Telefonen kan vara ansluten samtidigt som dataöverföringen känns trasig.

Det finns ingen perfekt gräns eftersom brus och störningar också spelar roll. En ren signal på -68 dBm kan fungera bättre än en brusig signal på -60 dBm i ett flerfamiljshus fullt av routrar.

## Kontrollera frekvensbandet

De flesta routrar använder ett lägre 2,4 GHz-band och ett snabbare 5 GHz-band. Nyare routrar kan också använda 6 GHz via Wi-Fi 6E eller Wi-Fi 7.

Det lägsta bandet når längre och tar sig bättre genom väggar, men det är trångt. Bluetooth-enheter, grannarnas routrar, babyvakter och mikrovågsugnar kan alla bidra med störningar.

5 GHz-bandet är snabbare på korta och medellånga avstånd. Signalen försvagas snabbare genom väggar och golv. Telefonen kan visa ett sämre dBm-värde där och ändå prestera bättre än på det lägre bandet, eftersom det finns mer utrymme för datatrafik.

6 GHz-bandet är ännu renare när det finns tillgängligt, men räckvidden är ännu kortare. Det fungerar utmärkt i samma rum eller närliggande rum. Det är ingen magisk lösning för hela huset.

Om routern kombinerar banden under samma nätverksnamn väljer telefonen automatiskt. Det fungerar vanligtvis bra, men inte alltid. När du undersöker en död zon bör du kontrollera vilket band telefonen faktiskt använder innan du skyller på routern.

## Gå igenom problemområdena

Öppna analysappen och gå långsamt genom de rum där wifi fungerar dåligt. Håll utkik efter punkten där nätverket sjunker under ungefär -70 dBm.

Vanliga orsaker till svaga områden är tråkiga men verkliga: betongväggar, tegel, metalldörrar, speglar med metallisk baksida, golvvärme och routrar som gömts i skåp. En router i en garderob är ett klassiskt självförvållat problem.

runcheck visar det aktuella wifi-värdet på detaljskärmen **Network** med dBm, kvalitetsbedömning, länkhastighet, frekvens och latens när Android gör uppgifterna tillgängliga. Vyn **Network history** är användbar när problemet kommer och går, till exempel om hastigheten sjunker varje kväll eller signalstyrkan försämras bara i ett visst rum.

## Förbättra en svag signal

Flytta routern först. Placera den högre upp, närmare mitten av bostaden och på avstånd från metallföremål. Göm den inte bakom tv:n eller inne i ett skåp.

Byt kanal om närliggande routrar trängs på samma kanal. På 2,4 GHz är kanalerna 1, 6 och 11 de vanliga valen som inte överlappar varandra. På 5 GHz och 6 GHz finns mer kanalutrymme, men i flerfamiljshus kan det ändå bli trångt.

Använd mesh-wifi när en router inte kan täcka hela bostaden. Ett mesh-system med välplacerade noder fungerar vanligtvis bättre än en billig räckviddsförlängare som står i utkanten av ett område med dålig täckning. Förlängaren behöver också en hygglig signal. Om den knappt hör routern kan den inte skapa ett bra nätverk ur ingenting.

Uppdatera routerns firmware när det finns uppdateringar. Det löser inte dålig fysik, men kan rätta fel, roamingproblem och kompatibilitetsproblem med nyare telefoner.
