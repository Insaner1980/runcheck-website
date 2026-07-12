---
title: "Sådan tester du netværkslatenstid på Android"
description: "Du deltager i et videoopkald, alle kan høre dig, billedet ser fint ud, og alligevel føles samtalen et halvt sekund forskudt. Det er latenstid. Downloadhastighed får det meste af opmærksomheden, men latenstiden afgør, om en forbindelse føles hurtig og responsiv."
listSummary: "netværk, forbindelser og android"
hub: "network"
sourceNumber: 103
order: 14
tags: ["netværk","forbindelser","android","fejlfinding","guide"]
locale: "da"
draft: false
---
Latenstid måles i millisekunder (ms). Lavere er bedre. Tre tal er særligt vigtige: ping, jitter og pakketab. Ping er den tid, det tager for data at rejse fra telefonen til en server og tilbage. Jitter viser, hvor meget denne tid svinger mellem målingerne. Pakketab er den andel af dataene, der aldrig når frem.

En forbindelse med 100 Mbps download og 150 ms ping kan føles dårligere end en forbindelse med 20 Mbps og 15 ms ping. Det virker bagvendt, indtil du prøver onlinespil, videoopkald eller fjernskrivebord. Hastighed flytter data. Latenstid styrer reaktionstiden.

## Hvad tallene betyder

Disse intervaller er praktiske retningslinjer, ikke naturlove. Den valgte testserver, netværket og selv tidspunktet på dagen kan ændre resultatet.

For ping:

- 0-20 ms: Fremragende. Konkurrencespil, videoopkald og fjernarbejde føles næsten øjeblikkelige.
- 20-50 ms: Godt. Det er fint til næsten alt, også almindelig gaming og taleopkald.
- 50-100 ms: Brugbart. Browsing og streaming fungerer stadig, men hurtige onlinespil begynder at føles forsinkede.
- Over 100 ms: Tydelig forsinkelse. Samtaler kan få akavede pauser, og spil i realtid bliver frustrerende.

Jitter under 30 ms er som regel fint. Mellem 30 og 50 ms kan opkald og livevideo begynde at hakke. Over 50 ms kan forbindelsen føles ustabil, selv om hastigheden ser høj ud.

Pakketab er mindre tilgivende. Alt over 1-2 % kan give udfald i lyden, frosne videobilleder eller spillere, der hopper tilbage i onlinespil. Nej, et hurtigere abonnement løser ikke automatisk pakketab.

## Begynd med en hastighedstest

Den nemmeste første kontrol er en hastighedstest, der også viser latenstid. Kør den samme test to gange: én gang på Wi-Fi og én gang på mobildata. Hvis kun den ene forbindelse ser dårlig ud, har du allerede indsnævret problemet.

### Googles hastighedstest og M-Lab

Søg efter "speed test" i Chrome på telefonen. Googles indbyggede test drives af Measurement Lab, bedre kendt som M-Lab. M-Labs NDT-test viser uploadhastighed, downloadhastighed og latenstidsmålinger.

runcheck bruger M-Labs NDT7-protokol til den indbyggede hastighedstest. Det nyttige er sammenhængen: Resultatet gemmes sammen med forbindelsestype, signalstyrke, ping, jitter, upload- og downloadhastighed, så du ikke skal huske, om det dårlige resultat kom fra Wi-Fi, LTE eller 5G.

### Speedtest by Ookla

Speedtest by Ookla er stadig den velkendte løsning til en hurtig test. Den viser ping, jitter, download og upload og lader dig vælge en server i nærheden. Vælg en lokal server for at få en grundmåling af latenstiden. Ved fejlfinding af gaming eller arbejde bør du i stedet teste mod en server tæt på den tjeneste, du faktisk bruger, hvis appen giver mulighed for det.

### Fast.com

Fast.com er Netflix' hastighedstest. Den starter med downloadhastigheden, men hvis du trykker på "Show more info", vises uploadhastighed og latenstid også. Hold især øje med latenstid under belastning. Latenstid uden belastning måles, mens forbindelsen er i ro. Latenstid under belastning måles, mens der er trafik, hvilket ligger tættere på virkeligheden, når en anden streamer, synkroniserer billeder eller downloader en spilopdatering på samme netværk.

## Brug et pingværktøj til længere test

Hastighedstest er øjebliksbilleder. En pingtest over nogle minutter viser, om latenstiden er stabil.

PingTools Network Utilities kan køre ping, traceroute, DNS-opslag og andre netværkstjek i én app. Til en enkel latenstidstest kan du pinge et stabilt mål som `1.1.1.1` eller `8.8.8.8`. Hvis du fejlfinder et bestemt spil eller en arbejdstjeneste, kan du pinge tjenestens værtsnavn, hvis det er offentliggjort.

Termux er nyttigt, hvis du er fortrolig med en terminal. Installer Termux fra en officiel kilde, og installer derefter pingværktøjet, hvis det mangler:

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

Oversigten viser minimum, gennemsnit, maksimum og variation mellem svarene. Det er variationen, du skal holde øje med. En forbindelse, der hopper fra 20 ms til 250 ms og tilbage, føles dårligere end en, der ligger stabilt på 60 ms.

## Test latenstid under belastning

Latenstid i tomgang kan snyde. En router kan vise 12 ms, når netværket er roligt, og derefter springe til 300 ms, så snart en bærbar computer begynder at uploade billeder.

Problemet kaldes som regel bufferbloat. Netværksudstyret lader køerne vokse i stedet for at styre trafikken ordentligt. Det ses tydeligst ved uploads, sikkerhedskopiering af video, synkronisering til skyen og store downloads.

Prøv denne enkle test:

1. Kør en latenstidstest, mens ingen andre bruger netværket.
2. Start en stor download eller upload på en anden enhed.
3. Kør den samme latenstidstest igen.

Hvis ping stiger kraftigt under belastning, er telefonen sandsynligvis ikke hovedproblemet. Routeren, modemmet eller mobilselskabets forbindelse har svært ved at styre køerne. Routerindstillinger som QoS kan hjælpe, men SQM (Smart Queue Management) er den bedre løsning, når routeren understøtter det.

Waveform Bufferbloat Test er også værd at prøve i telefonens browser. Den bedømmer, hvor meget latenstiden stiger under download- og uploadbelastning. Karakteren A eller B er som regel fin. D eller F betyder, at apps i realtid vil lide, når netværket er travlt.

## Sammenlign Wi-Fi og mobildata

At teste begge forbindelser er den hurtigste måde at undgå gætteri på.

Wi-Fi-latenstid afhænger af afstanden til routeren, interferens, routerens kvalitet, belastning på kanalen og frekvensbåndet. 5 GHz giver som regel mindre interferens og bedre latenstid end 2,4 GHz på kort afstand, men signalet rækker ikke lige så langt. Wi-Fi 6 og Wi-Fi 6E kan hjælpe på travle netværk, men kun når både telefonen og routeren understøtter dem.

Latenstid på mobilnettet afhænger af signalkvalitet, belastningen på masten, mobilselskabets routing og af, om telefonen bruger LTE, 5G under 6 GHz eller 5G mmWave. Grove intervaller fra den virkelige verden ser sådan ud:

- 4G LTE: ofte cirka 30-60 ms, højere når masten er belastet.
- 5G under 6 GHz: ofte cirka 15-40 ms.
- 5G mmWave: kan være lavere, men dækningen er begrænset og blokeres let.
- 3G: for langsomt og ustabilt til moderne brug i realtid.

Det er ikke garantier. En stabil LTE-forbindelse kan slå en overbelastet 5G-forbindelse, og et svagt Wi-Fi-signal gennem to vægge kan nemt tabe til mobildata.

På Android kan du se den aktive mobiltype i statuslinjen eller under SIM-status i Indstillinger. Den præcise sti varierer mellem mærker. Android 17 blev udgivet til de fleste understøttede Pixel-enheder den 16. juni 2026. Efter en stor systemopdatering bør du kontrollere netværkstypen igen, før du giver hardwaren skylden, fordi operatørindstillinger og netværksadfærd kan ændre sig med softwaren.

## Hvad får latenstiden til at stige?

Afstanden til serveren er det kedelige svar, men den betyder noget. En server i din egen by kan svare på under 10 ms. En server på den anden side af et ocean kan bruge 120 ms eller mere, selv på en fejlfri forbindelse.

Netværksbelastning kommer derefter. For mange enheder på samme Wi-Fi, en travl kanal i en etageejendom eller en overbelastet mobilmast kan alle tilføje forsinkelse. Målinger om aftenen er ofte dårligere end om morgenen.

VPN-forbindelser tilføjer endnu et led. En VPN-server i nærheden lægger måske kun 10-20 ms til. En fjern server kan tilføje langt mere. Afbryd VPN-forbindelsen, og test igen, før du antager, at telefonen er langsom.

Baggrundstrafik betyder også noget. Sikkerhedskopiering til skyen, appopdateringer, billedsynkronisering og streaming kan alle øge latenstiden, især på hjemmeforbindelser med begrænset uploadhastighed.

## Hvad gør du med resultatet?

Hvis latenstiden kun er dårlig på Wi-Fi, skal du genstarte routeren, gå tættere på, skifte til 5 GHz og prøve en mindre belastet kanal. Hvis problemet kun opstår, når netværket er travlt, bør du se på routerens QoS- eller SQM-funktioner.

Hvis latenstiden kun er dårlig på mobildata, skal du sammenligne signalstyrken forskellige steder. Slå flytilstand til og fra for at tvinge telefonen til at oprette en ny forbindelse til mobilnettet. Hvis problemet begyndte umiddelbart efter en systemopdatering, bør du kontrollere, om der ligger en opdatering til systemet eller operatørtjenesterne klar.

Hvis latenstiden er dårlig overalt, kan du teste en anden telefon på de samme netværk. Når to telefoner viser den samme forsinkelse, ligger problemet i netværket. Når kun én telefon gør det, kan du begynde at undersøge VPN-indstillinger, baggrundsapps, overophedning eller en mulig fejl i radiodelen.

## FAQ

### Er ping det samme som latenstid?

Teknisk set er latenstid forsinkelsen én vej, mens ping er tur-retur-tiden. Ved almindelig fejlfinding på en telefon bruges ordene næsten som synonymer, fordi apps viser ping som en tur-retur-måling.

### Kan jeg sænke ping på Android?

Du kan ikke ændre den fysiske afstand til serveren, men du kan fjerne unødvendig forsinkelse. Afbryd en langsom VPN, luk baggrundsapps med stor trafik, brug 5 GHz Wi-Fi tæt på routeren, og løs bufferbloat i routeren, hvis latenstiden stiger under belastning.

### Hvorfor er hastigheden høj, når spil stadig hakker?

Fordi downloadhastighed og latenstid er to forskellige problemer. En hurtig forbindelse kan stadig have høj jitter, pakketab eller dårlig latenstid under belastning. Spil er mere afhængige af stabil timing end af et højt antal Mbps.

### Hvor ofte bør jeg teste latenstiden?

Test på forskellige tidspunkter af dagen over nogle dage. Ét resultat er et øjebliksbillede. Tre eller fire målinger på både Wi-Fi og mobildata viser, om problemet er vedvarende.
