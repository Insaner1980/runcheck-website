---
title: "Slik tester du nettverksforsinkelse på Android"
description: "Du sitter i en videosamtale. Alle hører deg, bildet ser fint ut, men samtalen føles likevel et halvt sekund ute av takt. Det er forsinkelse. Nedlastingshastighet får mest oppmerksomhet, men forsinkelsen avgjør om forbindelsen føles responsiv."
listSummary: "Du sitter i en videosamtale."
hub: "network"
sourceNumber: 103
order: 14
tags: ["nettverk","tilkobling","android","feilsøking","guide"]
locale: "nb"
draft: false
---
Forsinkelse måles i millisekunder (ms). Lavere er bedre. Tre tall er særlig viktige: ping, jitter og pakketap. Ping er tiden det tar for data å gå fra telefonen til en server og tilbake. Jitter viser hvor mye denne tiden varierer mellom målingene. Pakketap er andelen data som aldri kommer fram.

En forbindelse med 100 Mbps nedlasting og 150 ms ping kan føles dårligere enn en forbindelse med 20 Mbps og 15 ms ping. Det høres bakvendt ut helt til du prøver spilling, videosamtaler eller eksternt skrivebord. Hastighet flytter data. Forsinkelse styrer reaksjonstiden.

## Hva tallene betyr

Disse områdene er praktiske retningslinjer, ikke naturlover. Valg av testserver, nettverket du bruker og tidspunktet på dagen kan påvirke resultatet.

For ping:

- 0-20 ms: Utmerket. Konkurransespill, videosamtaler og fjernarbeid føles umiddelbart.
- 20-50 ms: Bra. Dette fungerer fint til nesten alt, også vanlig spilling og taleanrop.
- 50-100 ms: Brukbart. Nettlesing og strømming fungerer fortsatt, men raske nettspill begynner å føles forsinket.
- Over 100 ms: Merkbar forsinkelse. Samtaler kan få ubehagelige pauser, og spill i sanntid blir frustrerende.

For jitter er under 30 ms vanligvis greit. Mellom 30 og 50 ms kan tale- og videosamtaler begynne å hakke. Over 50 ms kan forbindelsen føles ustabil selv om hastigheten ser høy ut.

Pakketap er mindre tilgivende. Alt over 1-2 % kan gi bortfall i lyden, frosset video eller figurer som hopper fram og tilbake i spill. Nei, et raskere abonnement løser ikke automatisk pakketap.

## Start med en hastighetstest

Den enkleste første kontrollen er en hastighetstest som også viser forsinkelse. Kjør samme test to ganger, først på Wi-Fi og deretter på mobildata. Hvis bare én av forbindelsene gir dårlige resultater, har du allerede snevret inn feilen.

### Googles hastighetstest og M-Lab

Søk etter «speed test» i Chrome på telefonen. Googles innebygde test drives av Measurement Lab, bedre kjent som M-Lab. M-Labs NDT-test rapporterer opplastingshastighet, nedlastingshastighet og målinger av forsinkelse.

runcheck bruker M-Labs NDT7-protokoll i den innebygde hastighetstesten. Det nyttige er sammenhengen: Resultatet lagres sammen med tilkoblingstype, signalstyrke, ping, jitter, opplastings- og nedlastingshastighet. Da slipper du å huske om den dårlige målingen ble gjort på Wi-Fi, LTE eller 5G.

### Speedtest by Ookla

Speedtest by Ookla er fortsatt det kjente valget for raske målinger. Appen viser ping, jitter, nedlasting og opplasting, og lar deg velge en server i nærheten. For en grunnmåling av forsinkelse bør du velge en server nær deg. Ved feilsøking av spill eller arbeidstjenester kan du heller teste mot en server nær tjenesten du faktisk bruker, hvis appen lar deg velge det.

### Fast.com

Fast.com er Netflix' hastighetstest. Den starter med nedlastingshastighet, men valget «Show more info» viser også opplastingshastighet og forsinkelse. Følg særlig med på forsinkelse under belastning, ofte kalt loaded latency. Ubelastet forsinkelse måles når forbindelsen er rolig. Belastet forsinkelse måles mens trafikken pågår, og ligner derfor mer på situasjonen når noen strømmer video, synkroniserer bilder eller laster ned en spilloppdatering på samme nettverk.

## Bruk et pingverktøy til lengre tester

Hastighetstester er øyeblikksbilder. En pingtest over noen minutter viser om forsinkelsen er stabil.

PingTools Network Utilities kan kjøre ping, traceroute, DNS-oppslag og andre nettverkskontroller i én app. For en enkel test kan du pinge et stabilt mål som `1.1.1.1` eller `8.8.8.8`. Feilsøker du et bestemt spill eller en arbeidstjeneste, kan du bruke tjenestens vert hvis den oppgir en.

Termux er nyttig hvis du er komfortabel med terminalen. Installer Termux fra en offisiell kilde, og installer pingverktøyet ved behov:

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

Oppsummeringen viser laveste, gjennomsnittlig og høyeste verdi, samt variasjonen mellom svarene. Det er variasjonen du bør følge med på. En forbindelse som hopper fra 20 ms til 250 ms og tilbake, føles dårligere enn en som ligger stabilt på 60 ms.

## Test forsinkelse under belastning

Forsinkelse uten trafikk kan lure deg. En ruter kan vise 12 ms når nettet er rolig og hoppe til 300 ms idet en bærbar PC begynner å laste opp bilder.

Problemet er vanligvis bufferbloat. Det betyr at nettverksutstyret lar køene fylles i stedet for å styre trafikken godt. Det blir tydeligst under opplasting, sikkerhetskopiering av video, skysynkronisering og store nedlastinger.

Prøv denne enkle testen:

1. Kjør en forsinkelsestest mens ingen andre bruker nettet.
2. Start en stor ned- eller opplasting på en annen enhet.
3. Kjør den samme forsinkelsestesten på nytt.

Hvis ping stiger kraftig under belastning, er telefonen sannsynligvis ikke hovedproblemet. Ruteren, modemet eller operatørforbindelsen sliter med køhåndteringen. Ruterinnstillinger som QoS kan hjelpe, men SQM (Smart Queue Management) er en bedre løsning når ruteren støtter det.

Waveform Bufferbloat Test er også verdt å prøve i nettleseren på telefonen. Den vurderer hvor mye forsinkelsen øker under ned- og opplasting. Karakter A eller B er vanligvis greit. D eller F betyr at sanntidsapper vil lide når nettet er travelt.

## Sammenlign Wi-Fi og mobildata

Å teste begge forbindelsene er den raskeste måten å unngå gjetting på.

Forsinkelsen på Wi-Fi påvirkes av avstanden til ruteren, forstyrrelser, ruterkvalitet, kanalbelastning og frekvensbånd. 5 GHz har vanligvis mindre forstyrrelser og lavere forsinkelse enn 2,4 GHz på kort avstand, men rekkevidden er kortere. Wi-Fi 6 og Wi-Fi 6E kan hjelpe i travle nettverk, men bare når både telefonen og ruteren støtter dem.

Forsinkelsen på mobilnett påvirkes av signalkvalitet, belastning på basestasjonen, operatørens ruting og om telefonen bruker LTE, 5G under 6 GHz eller 5G mmWave. Grove verdier fra virkelig bruk ser ofte slik ut:

- 4G LTE: ofte rundt 30-60 ms, og høyere når basestasjonen er travel.
- 5G under 6 GHz: ofte rundt 15-40 ms.
- 5G mmWave: kan være lavere, men dekningen er begrenset og blokkeres lett.
- 3G: for tregt og ustabilt til moderne sanntidsbruk.

Dette er ikke garantier. En stabil LTE-forbindelse kan slå et overbelastet 5G-nett, og et svakt Wi-Fi-signal gjennom to vegger kan tape klart mot mobildata.

På Android kan du se den aktive mobiltypen i statuslinjen eller i SIM-statusdelen i Innstillinger. Den nøyaktige menybanen varierer mellom merker. Etter store systemoppdateringer, blant annet Android 17 på støttede Pixel-enheter, bør du kontrollere dette før du legger skylden på maskinvaren. Operatørinnstillinger og nettverksoppførsel kan endres med programvaren.

## Hva som øker forsinkelsen

Avstanden til serveren er det kjedelige svaret, men den betyr mye. En server i samme by kan svare på under 10 ms. En server på den andre siden av et hav kan bruke 120 ms eller mer selv med en perfekt forbindelse.

Deretter kommer nettverksbelastning. Mange enheter på samme Wi-Fi, en travel kanal i en boligblokk eller en overbelastet mobilmast kan alle legge til forsinkelse. Målinger om kvelden er ofte dårligere enn om morgenen.

VPN gir et ekstra ledd på veien. En VPN-server i nærheten kan legge til bare 10-20 ms. En server langt unna kan legge til mye mer. Koble fra VPN og test igjen før du konkluderer med at telefonen er treg.

Bakgrunnstrafikk betyr også noe. Skysikkerhetskopiering, appoppdateringer, bildesynkronisering og strømming kan øke forsinkelsen, særlig på hjemmeforbindelser med begrenset opplastingskapasitet.

## Hva du gjør med resultatet

Hvis forsinkelsen bare er dårlig på Wi-Fi, starter du ruteren på nytt, går nærmere, bytter til 5 GHz og prøver en mindre belastet kanal. Blir den dårlig bare når nettet er travelt, bør du se på QoS eller SQM i ruteren.

Hvis forsinkelsen bare er dårlig på mobildata, sammenligner du signalstyrken flere steder. Slå flymodus av og på for å tvinge fram en ny tilkobling til nettet. Begynte problemet rett etter en systemoppdatering, bør du se etter ventende system- eller operatøroppdateringer.

Hvis forsinkelsen er dårlig overalt, tester du en annen telefon på de samme nettverkene. Når to telefoner viser samme forsinkelse, ligger problemet i nettet. Når bare én gjør det, kan du begynne å undersøke VPN-innstillinger, bakgrunnsapper, overoppheting eller en mulig feil i radiodelen.

## Vanlige spørsmål

### Er ping det samme som forsinkelse?

Teknisk sett er forsinkelse tiden én vei, mens ping er tiden tur-retur. Ved vanlig feilsøking på telefon brukes ordene nesten om hverandre, fordi appene viser ping som en tur-retur-måling.

### Kan jeg redusere ping på Android?

Du kan ikke endre den fysiske avstanden til en server, men du kan fjerne unødvendig forsinkelse. Koble fra en treg VPN, lukk apper som bruker mye båndbredde i bakgrunnen, bruk 5 GHz Wi-Fi når du er nær ruteren, og rett opp bufferbloat i ruteren hvis forsinkelsen stiger under belastning.

### Hvorfor er hastigheten høy når spill fortsatt hakker?

Fordi nedlastingshastighet og forsinkelse er forskjellige problemer. En rask forbindelse kan fortsatt ha dårlig jitter, pakketap eller høy forsinkelse under belastning. Spill bryr seg mer om jevn timing enn om rå Mbps.

### Hvor ofte bør jeg teste forsinkelsen?

Test på forskjellige tider av døgnet over noen dager. Én måling er et øyeblikksbilde. Tre eller fire målinger på både Wi-Fi og mobildata viser om problemet er stabilt.
