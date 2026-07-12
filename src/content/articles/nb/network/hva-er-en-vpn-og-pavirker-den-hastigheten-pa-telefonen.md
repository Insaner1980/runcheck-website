---
title: "Hva er en VPN, og påvirker den hastigheten på telefonen?"
description: "Metabeskrivelse: En enkel forklaring på hva en VPN gjør på Android, hvordan den påvirker hastighet og batteritid, og når det gir mening å bruke en."
listSummary: "nettverk, tilkobling og android"
hub: "network"
sourceNumber: 99
order: 10
tags: ["nettverk","tilkobling","android","feilsøking","guide"]
locale: "nb"
draft: false
---
En VPN endrer ruten internettrafikken fra telefonen tar. I stedet for at appene kobler seg direkte ut gjennom Wi-Fi-nettverket eller mobiloperatøren, sender telefonen først trafikken gjennom en kryptert tunnel til en VPN-server. Nettsteder og apper ser VPN-serverens IP-adresse, ikke telefonens vanlige offentlige IP-adresse.

Det høres mer mystisk ut enn det er. En VPN er nyttig, men den er ikke et ugjennomtrengelig personvernskjold.

## Hva en VPN faktisk skjuler

Når en VPN er aktiv, kan eieren av Wi-Fi-nettverket, operatøren av et offentlig nett eller mobiloperatøren vanligvis se at telefonen er koblet til en VPN-server. De kan også se hvor mye data som overføres. De skal ikke kunne se de enkelte nettstedene og appdestinasjonene inne i tunnelen, forutsatt at VPN-en fungerer riktig og også håndterer DNS-trafikken.

VPN-leverandøren befinner seg derimot i midten. Leverandøren kan se tilkoblingsmetadata og kan, avhengig av hvordan tjenesten er bygget, være i stand til å se mer. Derfor betyr leverandøren mye. En tvilsom gratis VPN kan være dårligere for personvernet enn ingen VPN.

På Android kjører en VPN-app som en vedvarende bakgrunnstjeneste. Du ser vanligvis et lite nøkkelikon i statuslinjen. Med mindre VPN-appen bruker delt tunnelering, går trafikk fra nettlesere, apper og systemtjenester gjennom VPN-tunnelen.

## Hvorfor en VPN kan gjøre telefonen tregere

Alle VPN-er legger til arbeid. Telefonen krypterer datapakkene, sender dem til VPN-serveren, venter mens serveren videresender dem og mottar svaret gjennom samme vei tilbake.

To ting endrer seg:

- Forsinkelsen øker. En VPN-server i nærheten kan legge til bare litt ventetid. En server på den andre siden av verden kan få nettsurfing, spill og videosamtaler til å føles trege.
- Gjennomstrømningen kan falle. Kryptering krever prosessorkraft, og VPN-serveren kan bli en flaskehals hvis den er travel eller langt unna.

Med en god VPN, en server i nærheten og en moderne protokoll merker du kanskje knapt forskjell når du surfer eller sender meldinger. Med en fjern server, en overfylt gratistjener eller en eldre protokoll kan nedgangen være tydelig.

Dette er sammenligningen som betyr noe: En WireGuard-forbindelse til en server i Norge kan føles nesten normal, mens en OpenVPN TCP-forbindelse til en server 8 000 km unna kan få selv enkle nettsider til å føles tunge.

## Protokollen betyr noe

VPN-apper lar deg vanligvis velge protokoll. Noen skjuler protokollen bak navn som `Smart`, `Automatisk` eller en egen merkevaremodus.

WireGuard er det moderne standardvalget jeg ville prøvd først når VPN-appen støtter det. Protokollen har en mindre og enklere utforming enn eldre alternativer og fungerer vanligvis godt på telefoner.

OpenVPN er eldre og støttes bredt. Den er fortsatt nyttig, særlig på nettverk som blokkerer nyere protokoller, men føles ofte tregere. OpenVPN UDP er vanligvis raskere enn OpenVPN TCP. TCP kan hjelpe på ustabile nettverk, men gir mer ekstraarbeid.

IKEv2/IPsec er fortsatt vanlig på mobil fordi den håndterer bytte mellom Wi-Fi og mobildata godt. Den kan være en god mellomløsning, særlig for jobb-VPN-er.

Hvis VPN-en føles treg, trenger du ikke bytte leverandør med en gang. Prøv først en server i nærheten og en annen protokoll.

## Batteribruken er reell, men varierer

En VPN kan bruke mer strøm fordi telefonen holder tunnelen aktiv og krypterer trafikken. Det finnes ingen ærlig universell prosent her. Skjermlysstyrke, signalstyrke, bakgrunnssynkronisering, videostrømming og VPN-protokollen påvirker resultatet.

Ved lett surfing og meldinger er ekstrabruken vanligvis så liten at den ikke vises som en tydelig linje i batteristatistikken. Strømmer du video i flere timer gjennom en VPN på svakt mobilnett, kan den bli merkbar.

Batterioptimalisering kan også ødelegge VPN-forbindelser. Noen Android-utgaver setter bakgrunnsapper aggressivt på pause. Hvis VPN-en stadig kobles fra, åpner du batteriinnstillingene for VPN-appen og tillater ubegrenset bakgrunnsbruk. Ordlyden varierer mellom merker, men du finner det vanligvis under appens batteriinnstillinger.

## Alltid aktiv VPN og nødstopp

Android 7.0 og nyere støtter en VPN som alltid er aktiv. Android kan starte VPN-en når enheten slås på og prøve å holde den i gang så lenge telefonen er på. Det finnes også et alternativ som blokkerer tilkoblinger uten VPN, ofte kalt en kill switch eller nødstopp.

På Pixel og mange telefoner med standard Android finner du VPN under `Innstillinger > Nettverk og internett > VPN`. Trykk på tannhjulet ved VPN-profilen, og se etter valget `Alltid-på-VPN` og blokkering av tilkoblinger uten VPN. Samsung og Xiaomi plasserer menyen andre steder, så det er ofte enklest å søke etter `VPN` i Innstillinger.

En nødstopp er nyttig, men vær realistisk om ulempen. Hvis VPN-appen krasjer, serveren ikke kan nås eller batterisparing stopper appen, kan Android blokkere alt internett til VPN-en kommer tilbake. Da kan det se ut som Wi-Fi er ødelagt selv om forbindelsen fungerer.

## Når en VPN kan gjøre forbindelsen raskere

Det høres bakvendt ut, men en VPN kan øke hastigheten i noen få spesielle tilfeller.

Hvis et nettverk begrenser bestemte trafikktyper, kan VPN-en skjule hva slags trafikk som ligger i tunnelen. Nettverket ser fortsatt krypterte data som går til en VPN-server, men klarer kanskje ikke lenger å gjenkjenne en videostrøm, spilløkt eller VoIP-samtale like lett.

Det betyr ikke at en VPN skaper båndbredde. Den kan ikke gjøre et svakt 4G-signal om til en sterk 5G-forbindelse. Den kan ikke reparere en dårlig ruter. Den endrer bare ruten og skjuler trafikktype for det lokale nettverket.

## Gratis VPN-er fortjener ekstra skepsis

Gratis VPN-tjenester må betale for serverne på en eller annen måte. Noen finansieres av en betalt versjon. Andre bruker annonser, datainnsamling, trafikkgrenser, svak infrastruktur eller verre metoder.

Gratisabonnementet til Proton VPN er et av de bedre kjente unntakene. Tjenesten oppgir at gratisnivået har ubegrenset data, ingen annonser og retningslinjer uten aktivitetslogger, men servervalget og funksjonene er fortsatt mer begrenset enn i de betalte abonnementene. Det er en forståelig byttehandel.

Den dårlige varianten er en gratis VPN-app med uklart eierskap, aggressive tillatelser, ingen uavhengig kontroll, ingen tydelig forretningsmodell og en personvernerklæring som sier svært lite. Ikke installer den på en telefon du bruker til bank, jobb eller private meldinger.

## Når bør du bruke VPN på Android?

En VPN gir mest mening på offentlig Wi-Fi, hotellnettverk, flyplasser, kafeer, delte boliger og skole- eller jobbnettverk der du ikke kontrollerer infrastrukturen. Den er også nyttig når du vil skjule nettverksdestinasjonene dine for internettleverandøren eller mobiloperatøren.

På ditt eget hjemmenett avhenger nytten av hva du ønsker. Hvis målet er å skjule hvilke tjenester du kobler deg til fra internettleverandøren, kan du la den stå på. Hvis du vil ha høyest mulig hastighet og lavest mulig forsinkelse i spill eller videosamtaler, slår du den av eller lar disse appene gå utenom tunnelen.

Delt tunnelering er verdt å bruke. La sensitiv surfing, meldinger og trafikk på ukjente Wi-Fi-nett gå gjennom VPN-en. La apper som ikke fungerer bak en VPN, for eksempel enkelte bankapper, gå utenom.

## Hva en VPN ikke beskytter mot

En VPN stopper ikke nettfisking. Den gjør ikke en falsk bankside trygg. Den beskytter ikke en konto med et gjenbrukt passord. Den fjerner ikke skadevare fra telefonen. Den gjør heller ikke en upålitelig VPN-leverandør pålitelig.

Den beskytter ett lag: nettverksruting og trafikkens personvern mellom telefonen og VPN-serveren.

Det er nyttig. Bare ikke forvent at den skal gjøre alle sikkerhetsjobbene.

## Korte svar

Skjuler en VPN aktiviteten min for mobiloperatøren?

Den skjuler nettstedene og appdestinasjonene inne i tunnelen, men operatøren kan fortsatt se at du bruker VPN og hvor mye data du overfører. Vanlige mobilsamtaler og SMS går ikke gjennom VPN-en.

Kan en VPN ødelegge apper?

Ja. Bankapper, strømmetjenester, jobbapper og enkelte spill kan blokkere VPN-trafikk eller behandle den som mistenkelig. Bruk delt tunnelering hvis bare én app har problemer.

Bør den stå på hele tiden?

På offentlige nettverk er det fornuftig. Hjemme avhenger det av om personvern eller hastighet betyr mest. Test appene du vanligvis bruker før du aktiverer `Alltid-på-VPN` sammen med blokkering av tilkoblinger uten VPN.

Fungerer VPN på mobildata?

Ja. En VPN fungerer både på Wi-Fi og mobildata. På mobilnett betyr svakt signal og høy belastning fortsatt noe, så VPN-en kan føles tregere fordi grunnforbindelsen allerede sliter.
