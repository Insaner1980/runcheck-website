---
title: "Hvorfor er internettet på min telefon så langsomt?"
description: "Hvorfor slæber den ene telefon sig af sted, mens den bærbare computer ved siden af indlæser uden problemer? Som regel skyldes det et svagt signal, et belastet netværk eller en app på telefonen, der bruger båndbredde i baggrunden. Tricket er at finde ud af, hvilken af delene du står med, før du begynder at ændre tilfældige indstillinger."
listSummary: "Hvorfor slæber den ene telefon sig af sted, mens den bærbare computer ved siden af indlæser uden problemer?"
hub: "network"
sourceNumber: 91
order: 2
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
Start ikke med en nulstilling til fabriksindstillinger. Start med konkrete oplysninger.

## Skeln først mellem telefonen og netværket

Brug en anden enhed på det samme Wi-Fi-netværk. Hvis en bærbar computer eller tablet også er langsom, ligger problemet sandsynligvis i routeren, internetudbyderen eller Wi-Fi-dækningen. Hvis alle andre enheder fungerer fint, og kun telefonen kæmper, skal du fokusere på telefonen.

Test mobildata flere forskellige steder. En telefon, der er hurtig derhjemme, men langsom på arbejdet, har sandsynligvis problemer med dækning, belastning eller byggematerialerne på det pågældende sted. Er telefonen langsom overalt, peger det mere i retning af mobilabonnementet, SIM- eller eSIM-konfigurationen, radioindstillingerne eller selve telefonen.

Kør én hastighedstest, og skriv download, upload og ping ned. Du behøver ikke perfekte laboratorieforhold endnu. Du skal bare have et udgangspunkt.

## Wi-Fi-problemer, der føles som langsomt internet

Afstand er den oplagte årsag. Vægge, etager, spejle, apparater og møbler svækker Wi-Fi-signalet. 5 GHz-båndet er hurtigere, når du er tæt på routeren, men signalet mister hurtigere styrke gennem vægge. 2,4 GHz-båndet rækker længere, men er langsommere og mere belastet.

Kanalbelastning er almindelig i lejligheder. Du kan have et stærkt signal og stadig få dårlig ydelse, fordi ti routere i nærheden forsøger at bruge den samme kanal. Android viser ikke dette tydeligt i de normale indstillinger, så brug en Wi-Fi-analyseapp, hvis du har mistanke om problemet.

For mange aktive enheder kan presse billigere routere. En telefon, bærbar computer, tv, tablet, spillekonsol, overvågningskamera, smarthøjttaler og nogle få smartstik tæller alle med. Det afgørende er ikke kun antallet af enheder, men hvor mange der er aktive samtidig.

DNS kan få websites til at virke langsomme, selv om den rå hastighed er i orden. På moderne Android er den mere ryddelige systemløsning **Indstillinger > Netværk og internet > Privat DNS**. Prøv **dns.google** eller **one.one.one.one**, hvis din nuværende DNS føles langsom. Det kan gøre opslag af websites hurtigere, men det forvandler ikke en dårlig forbindelse på 5 Mbps til en hurtig forbindelse.

## Mobildata har sine egne faldgruber

Et svagt mobilsignal er ikke det samme som svagt Wi-Fi, men symptomet føles ens. En forbindelse med én signalbjælke kan blive online og samtidig have svært ved at overføre data. På Pixel og mange andre Android-telefoner finder du oplysningerne under **Indstillinger > Om telefonen > SIM-status** eller i en tilsvarende SIM-menu. Den præcise placering afhænger af producenten.

Belastning er reel. En mobilmast har begrænset kapacitet, og alle i nærheden deler den. Hastigheden kan falde i myldretiden, i frokostpausen, ved stadionarrangementer, i indkøbscentre og om aftenen derhjemme.

Dit abonnement kan også sænke hastigheden, når du har overskredet en grænse for prioriteret data. Mange abonnementer med "fri data" er ubegrænsede i datamængde, men ikke nødvendigvis i prioriteret fuld hastighed. Tjek dit mobilselskabs app, før du bruger en time på at give Android skylden.

5G kan være dårligere end LTE det forkerte sted. Hvis telefonen hele tiden forsøger at holde fast i et svagt 5G-signal, kan du prøve at vælge LTE, når telefonen og mobilselskabet giver mulighed for det. Indstillingen ligger som regel i en SIM- eller mobilnetværksmenu, men nogle mobilselskaber skjuler den.

## Hvis det begyndte efter en Android-opdatering

Opdateringer kan ændre modemfirmware, operatørindstillinger, Wi-Fi-adfærd og batteriregler. Det er som regel en forbedring. Nogle gange bliver resultatet rodet.

Android 17 blev udgivet den 16. juni 2026 og blev først gjort tilgængelig på understøttede Pixel-enheder. Andre producenter udsender deres Android 17-versioner senere efter deres egne tidsplaner. Hvis en Pixel pludselig blev langsom lige efter Android 17-opdateringen, skal tidspunktet derfor med i fejlsøgningen. Bruger du Samsung, OnePlus, Xiaomi eller et andet mærke, skal du ikke gå ud fra, at den samme Android 17-specifikke adfærd gælder, før netop den telefon har fået producentens Android 17-version.

Efter en større opdatering bør du genstarte én gang, opdatere apps fra Play Butik og kontrollere, om der ligger endnu en systemopdatering eller en opdatering til operatørtjenester. Hvis kun ét netværk er ramt, skal du glemme Wi-Fi-netværket og oprette forbindelse igen. Hvis både Wi-Fi og mobildata er ramt, kan du nulstille netværksindstillingerne, når du først har gemt vigtige Wi-Fi-adgangskoder.

## Årsager på telefonen

Apps kan bruge båndbredde i baggrunden uden at gøre opmærksom på sig selv. Sikkerhedskopiering til skyen, sociale apps, podcastapps, opdateringer fra Play Butik, synkronisering af billeder og beskedapps kan alle downloade eller uploade, mens du prøver at bruge forbindelsen til noget andet.

På Pixel kan du kontrollere mobildata under **Indstillinger > Netværk og internet > SIM-kort > Dataforbrug i apps**. Placeringen for Wi-Fi-forbrug varierer mere, men mange Android-versioner viser netværksforbrug pr. app et sted under Netværk, Apps eller Dataforbrug. Se efter en app, der bruger data, selv om du ikke aktivt brugte den.

Batterisparefunktion kan også ændre netværksadfærden. Den kan begrænse synkronisering i baggrunden, forsinke notifikationer eller begrænse appaktivitet. Det sparer strøm, men kan få nogle apps til at virke langsomme eller vise gamle oplysninger.

En VPN er endnu en mulig flaskehals. Den sender trafikken gennem en anden server, hvilket kan øge latenstiden og reducere hastigheden. Afbryd VPN-forbindelsen under én test. Hvis problemet forsvinder, har du fundet årsagen.

Browserens cache er et mindre problem, men det forekommer. Rydning af browsercachen kan rette sider, der kun indlæses halvt eller bliver ved med at få timeout. Det øger ikke forbindelsens hastighed. Det fjerner blot beskadigede lokale data.

## En hurtig rækkefølge til fejlsøgning

Kør en hastighedstest på Wi-Fi. Slå derefter Wi-Fi fra, og kør én på mobildata. Lad være med at køre ti test i træk på mobilnettet, medmindre du vil bruge en stor del af din datapakke.

Slå flytilstand til, vent ti sekunder, og slå den fra igen. Det tvinger telefonen til at oprette forbindelse til Wi-Fi og mobilnettet på ny.

Genstart telefonen. Det er grundlæggende, men det rydder midlertidige netværkstilstande og baggrundsprocesser, der er gået i stå.

Glem det problematiske Wi-Fi-netværk, og opret forbindelse igen. Hvis problemet kun findes derhjemme, skal du også genstarte routeren.

Tjek appopdateringer og systemopdateringer. Det er særlig relevant lige efter en større Android-udgivelse.

Start i Sikker tilstand, hvis hastigheden bliver bedre efter en genstart, men falder igen senere. Sikker tilstand deaktiverer downloadede apps og er derfor en god måde at opdage en tredjepartsapp, der skaber problemer.

Nulstil netværksindstillingerne til sidst. På nyere Pixel-telefoner findes Wi-Fi- og Bluetooth-nulstillingen under **Indstillinger > System > Nulstil valg > Nulstil Bluetooth og Wi-Fi**, mens mobilnetværket nulstilles med en separat valgmulighed i den samme del af indstillingerne. På andre Android-telefoner kan navnene og opdelingen være anderledes. Nulstillingen fjerner gemte Wi-Fi-netværk, Bluetooth-parringer og eventuelle tilpassede mobilnetværksindstillinger, så det er ikke den første knap, du skal trykke på.

## Når telefonen ikke kan løse problemet

Hvis mobildata er langsomt i det samme område hver dag, kan mobilselskabets dækning ganske enkelt være svag dér. Dækningskort er optimistiske. Bygninger, bakker, belastningen på masten og materialerne indendørs afgør, hvad telefonen faktisk får.

På Wi-Fi er gamle routere ofte begrænsningen. En Wi-Fi 4-router fra ti år siden kan stadig forbinde en moderne telefon, men den håndterer ikke en travl husstand på samme måde som et fornuftigt Wi-Fi 6- eller Wi-Fi 7-system.

Apps som runcheck kan hjælpe ved at registrere signalstyrke, latenstid, forbindelsestype og historik fra hastighedstest over tid. Én langsom test er et spor. Et mønster er bedre.
