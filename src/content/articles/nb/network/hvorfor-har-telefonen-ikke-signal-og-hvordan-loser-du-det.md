---
title: "Hvorfor har telefonen ikke signal, og hvordan løser du det?"
description: "Praktiske tiltak når en Android-telefon viser No Signal, No Service eller Emergency Calls Only, med kontroller av SIM, eSIM, operatør, APN, oppdateringer og maskinvare."
listSummary: "nettverk, tilkobling og android"
hub: "network"
sourceNumber: 102
order: 13
tags: ["nettverk","tilkobling","android","feilsøking","guide"]
locale: "nb"
draft: false
---
Telefonen viser `No Signal`, `No Service` eller `Emergency Calls Only`, og plutselig er den dyre lille datamaskinen i hånden din bare et kamera med Wi-Fi. Irriterende, men ikke alltid alvorlig.

Trikset er å skille mellom tre mulige feilkilder: telefonen, SIM- eller eSIM-kortet og mobilnettet. Gjetting tar tid. Tester du dem i riktig rekkefølge, finner du som regel ut hvor feilen ligger.

## Gjør disse tre tingene først

Slå på flymodus, vent omtrent 15 sekunder og slå den av igjen. Da bryter telefonen nettverksregistreringen og prøver å koble seg til på nytt.

Start telefonen på nytt. En omstart laster modemet, SIM-tjenestene og operatørkonfigurasjonen på nytt. Hvis radiodelen har låst seg, er dette ofte nok.

Bruker du et fysisk SIM-kort, slår du av telefonen, tar ut SIM-skuffen og kontrollerer at kortet er rent og ligger flatt. Sett det deretter godt på plass igjen. Et SIM-kort som sitter litt løst, kan gi manglende dekning etter et fall eller et dekselbytte.

Bruker du eSIM, bør du ikke slette eSIM-profilen som første tiltak. Åpne `Innstillinger > Nettverk og internett > SIM-kort` og kontroller at eSIM-linjen er aktiv. Sletter du profilen, kan et lite problem fort ende som en henvendelse til operatøren.

## Sjekk om operatøren har driftsproblemer

Det er ikke det mest tilfredsstillende svaret, men det skjer ofte: Telefonen er i orden, mens operatøren har problemer.

Spør noen i nærheten med samme operatør om de har dekning. Sjekk operatørens app, driftsside eller kontoer i sosiale medier. Downdetector kan gi en pekepinn, men bygger på brukerrapporter, ikke operatørens egen diagnostikk.

Hvis flere med samme operatør mangler dekning i det samme området, bør du slutte å endre innstillinger på telefonen. Vent på operatøren eller flytt deg til et annet sted.

## Kontroller at SIM-linjen er aktiv

Telefonen kan vise manglende dekning hvis SIM-linjen er deaktivert, abonnementet er sperret, kontantkortet er tomt, eSIM-profilen er flyttet til en annen enhet eller telefonen er låst til en annen operatør.

På Pixel og mange telefoner med en Android-versjon nær standardutgaven åpner du `Innstillinger > Nettverk og internett > SIM-kort`. Velg SIM-kortet, kontroller at linjen er aktiv, og at `Mobildata` er slått på.

På Samsung kan du se under `Innstillinger > Tilkoblinger > SIM-kort-administrator` og `Innstillinger > Tilkoblinger > Mobilnett`.

Hvis telefonen viser `No SIM`, kan SIM-kortet være skadet, deaktivert eller ikke bli lest. Viser den `Emergency Calls Only`, ser telefonen et nettverk, men klarer ikke å godkjenne seg på vanlig måte. Det peker ofte mot SIM-kortet, kontoen, operatørlåsen eller roaming, ikke nødvendigvis en helt død antenne.

## Etter Android 17 eller en annen stor oppdatering

Android 17 ble lansert for de fleste støttede Pixel-telefoner i juni 2026. Samsung, OnePlus, Xiaomi, Motorola og andre produsenter følger sine egne oppdateringsplaner. Hvis signalproblemene begynte rett etter en stor oppdatering, er tidspunktet relevant.

Ikke tilbakestill til fabrikkinnstillingene med en gang. Prøv dette først:

- Start telefonen på nytt etter at oppdateringen er helt ferdig.
- Se etter en ny systemoppdatering eller oppdatering av operatørinnstillingene.
- Slå flymodus av og på én gang.
- Tilbakestill bare innstillingene for mobilnettverk hvis Android-versjonen din har et slikt valg.
- Hvis 5G er ustabilt, velger du midlertidig LTE eller 4G som foretrukket nettverkstype og tester på nytt.

Tidlige problemer etter en oppdatering blir noen ganger rettet i månedlige oppdateringer eller nye operatørkonfigurasjoner. Tilbakestilling til fabrikkinnstillinger hører hjemme nær slutten av listen, ikke i begynnelsen.

## Sjekk foretrukket nettverkstype

Åpne SIM-innstillingene og finn `Foretrukket nettverkstype` eller den tilsvarende menyen for nettverksmodus. Velg det automatiske alternativet med den høyeste generasjonen telefonen støtter, for eksempel `5G/LTE/3G/2G` eller `5G/4G/3G/2G`.

Hvis telefonen er låst til en nettverksgenerasjon som ikke lenger finnes i området, kan den miste dekningen. Det kan skje med gamle innstillinger som bare tillater 3G i land der 3G-nettet er stengt. Det kan også skje hvis du valgte bare LTE eller bare 5G under en test og glemte å bytte tilbake.

På Samsung ligger valget vanligvis under `Innstillinger > Tilkoblinger > Mobilnett > Nettverksmodus`.

På Xiaomi og POCO kan du se under `Settings > SIM cards & mobile networks`.

Bruk søkefeltet i Innstillinger hvis produsenten har flyttet valget. Det gjør de gjerne.

## Sett nettverksvalget tilbake til automatisk

Manuelt operatørvalg kan etterlate telefonen på feil nettverk. Dette er vanlig etter reiser.

Se etter automatisk nettverksvalg eller nettverksoperatører i SIM-innstillingene, og slå på automatisk valg. Hvis det ikke fungerer, kan du søke manuelt og velge operatøren fra listen.

Ved roaming må du kontrollere at abonnementet tillater det før du slår på dataroaming. Reglene for tale og data kan være forskjellige hos operatøren.

## Sjekk APN-innstillingene ved dataproblemer

APN-innstillingene forteller Android hvordan telefonen skal koble seg til operatørens datanett. Feil APN gir vanligvis problemer med mobildata eller MMS, ikke fullstendig signaltap, men kan få et nettverksproblem til å virke større.

På Pixel og Android-versjoner nær standardutgaven går du til `Innstillinger > Nettverk og internett > SIM-kort`, velger SIM-kortet og åpner `Navn på tilgangspunkt`. På Samsung ligger APN-valget vanligvis under `Settings > Connections > Mobile networks > Access Point Names`.

Bruk tilbakestilling til standardverdier hvis APN-listen ser feil ut eller er tom. For virtuelle og mindre operatører skal du bruke APN-verdiene fra operatørens egen støtteside. Ikke kopier tilfeldige APN-innstillinger fra et forum med mindre du liker å feilsøke samme problem to ganger.

## Tilbakestill nettverksinnstillingene

Hvis SIM-kortet er aktivt og innstillingene ser normale ut, kan du tilbakestille nettverksinnstillingene. Det sletter lagrede Wi-Fi-nettverk, Bluetooth-sammenkoblinger, VPN-innstillinger og mobilnettverksoppsett. Apper, bilder, meldinger og filer blir ikke slettet.

På Pixel og nyere Android-versjoner nær standardutgaven går du til `Innstillinger > System > Alternativer for tilbakestilling`. Der kan du se et samlet valg for Wi-Fi, mobilnett og Bluetooth, eller separate valg som `Tilbakestill innstillingene for mobilnettverk` og et eget valg for Bluetooth og Wi-Fi.

På Samsung er den engelske menybanen vanligvis `Settings > General management > Reset > Reset network settings`.

På Xiaomi og POCO er det tryggest å søke etter nettverkstilbakestilling i Innstillinger, fordi menybanen endres mellom MIUI- og HyperOS-versjoner.

Start telefonen på nytt etter tilbakestillingen, og gi den et minutt til å registrere seg i nettet.

## Test SIM-kortet i en annen telefon

Dette er den enkleste måten å slutte å gjette på.

Sett SIM-kortet i en annen ulåst telefon som støtter operatørens frekvensbånd. Fungerer det der, er SIM-kortet og abonnementet sannsynligvis i orden, og problemet ligger i den opprinnelige telefonen. Hvis det fortsatt ikke er dekning, ligger feilen trolig i SIM-kortet, kontoen eller operatørens aktivering.

Prøv også et SIM-kort du vet fungerer, i din egen telefon hvis du har mulighet. Får det dekning, er telefonens maskinvare sannsynligvis i orden.

Tilsvarende test er vanskeligere med eSIM, fordi flytting kan kreve ny aktivering hos operatøren. Operatørens kundestøtte kan da kontrollere om eSIM-profilen fortsatt er aktiv og knyttet til enheten din.

## Sjekk IMEI på brukte telefoner

Hvis telefonen er kjøpt brukt, bør du kontrollere IMEI. Tast `*#06#` for å vise nummeret.

En telefon kan miste vanlig nettverkstilgang hvis IMEI er sperret etter at den er meldt tapt eller stjålet, eller hvis telefonen er operatørlåst til et annet nett. Kontakt operatøren hvis du er usikker. Tredjepartstjenester for IMEI-søk kan gi en pekepinn, men operatøren avgjør hva som gjelder i sitt nett.

## Sted og bygningsmaterialer betyr mye

Signalstyrken kan endre seg raskt. En telefon kan ha fulle streker ute og ingen dekning i en kjeller, heis, lagerbygning med metalltak, parkeringskjeller eller betongleilighet.

Gå nær et vindu eller utendørs. Hvis dekningen kommer tilbake, gjør telefonen jobben sin. Det er bygningen som demper signalet.

Tykke deksler kan også svekke mottaket hvis de inneholder metallplater, magneter eller dårlig plassert tilbehør. Ta av dekselet et øyeblikk hvis problemet begynte etter at du monterte en holder, et lommebokdeksel eller en magnetring.

Wi-Fi-anrop er den vanlige løsningen når mobilsignalet er svakt innendørs, men Wi-Fi-forbindelsen er god.

## Signalstyrke i tall er bedre enn streker

Signalstrekene er grove. dBm er bedre.

På mange Android-telefoner finner du signalstyrken i SIM-statusdelen under `Om telefonen`. Du kan for eksempel se `-85 dBm` eller `-110 dBm`. Jo nærmere null tallet er, desto sterkere er signalet.

Som en grov tommelfingerregel er omtrent `-50 til -90 dBm` brukbart, under `-100 dBm` svakt og rundt `-120 dBm` nær ubrukelig. Opplevelsen avhenger av nettverkstype, belastning og operatørkonfigurasjon, så tallet er ikke en perfekt bestått-eller-ikke-bestått-test.

Koden `*#*#4636#*#*` åpner en testmeny på enkelte Android-telefoner, men mange operatører og produsenter deaktiverer den. Hvis ingenting skjer, betyr det ikke at telefonen er ødelagt.

runcheck kan vise signalstyrke og nettverksdetaljer over tid. Det er mer nyttig enn å stirre på signalstrekene i ti sekunder. Signalproblemer avhenger ofte av sted, tidspunkt og om telefonen bytter mellom LTE og 5G.

## Når maskinvarefeil er sannsynlig

Maskinvaren blir en mer sannsynlig årsak når alt dette stemmer:

- SIM-kortet fungerer i en annen telefon.
- Et SIM-kort du vet fungerer, mislykkes i telefonen din.
- Nettverksinnstillingene er tilbakestilt.
- Abonnementet er aktivt.
- Andre med samme operatør har dekning i nærheten.
- Telefonen mangler fortsatt dekning flere steder.

Vanlige maskinvareårsaker er en skadet antenne, defekt SIM-leser, korrosjon ved SIM-skuffen eller en RF-komponent som svikter. Fall og fukt er de vanlige mistenkte.

Se etter bulker nær antennelinjene, en SIM-skuff som ikke ligger plant, væskeindikatorer, korrosjon eller nylige støtskader. Er telefonen innenfor garanti eller reklamasjonsrett, kontakter du selgeren, produsenten eller operatøren etter hva som passer saken. Ellers bør du sammenligne reparasjonsprisen med telefonens nåværende verdi før du godkjenner reparasjonen.

## Bør du kjøpe en signalforsterker?

Bare til et fast sted, og bare hvis det finnes et brukbart utendørssignal. En forsterker forsterker et signal som allerede finnes. Den lager ikke et mobilnett fra ingenting.

I Norge krever mobilforsterkere, også kalt repeatere, brukstillatelse fra eierne av mobilnettene. Nkom opplyser at de ikke kan brukes uten slik tillatelse. Ikke kjøp en tilfeldig kraftig forsterker fra en markedsplass og håp på det beste. Dårlig utstyr kan forstyrre mobilnettene, og det er ikke et problem du vil ha ansvaret for.
