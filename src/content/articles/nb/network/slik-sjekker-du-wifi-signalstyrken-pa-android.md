---
title: "Slik sjekker du WiFi-signalstyrken på Android"
description: "Metabeskrivelse: Lær å lese WiFi-styrke på Android i dBm, ikke bare som streker. Guiden dekker innebygde innstillinger, analyseapper og hva tallene betyr."
listSummary: "Metabeskrivelse: Lær å lese WiFi-styrke på Android i dBm, ikke bare som streker."
hub: "network"
sourceNumber: 90
order: 1
tags: ["nettverk","tilkobling","android","feilsøking","guide"]
locale: "nb"
draft: false
---
WiFi-strekene i statusfeltet er en grov pekepinn, ikke en måling. Legg to telefoner ved siden av hverandre, så kan de fortsatt vise ulikt fordi produsentene og de ulike Android-grensesnittene ikke omsetter signalstyrke til streker på samme måte.

Skal du feilsøke ordentlig, bør du se etter dBm. Tallet viser signalstyrken telefonen mottar fra ruteren.

## Begynn i Android-innstillingene

Åpne **Innstillinger > Nettverk og internett > Internett** på en Pixel eller en telefon med Android nær standardutgaven. På Samsung Galaxy er den dokumenterte engelske banen **Settings > Connections > Wi-Fi**. Trykk på nettverket du er koblet til.

Detaljvisningen for nettverket viser vanligvis en signalvurdering som Excellent, Good, Fair eller Weak. Den kan også vise tilkoblingshastighet, frekvens, sikkerhetstype, IP-adresse og andre tilkoblingsopplysninger. Den nøyaktige skjermen varierer med merke og Android-versjon, så det er ikke noe problem om telefonen din ikke ser helt lik ut som et skjermbilde i en veiledning.

På mange av dagens telefoner viser ikke Android-innstillingene det rå dBm-tallet. Det er irriterende, men ikke uvanlig. Tilkoblingshastigheten gir fortsatt nyttig kontekst. Hvis den faller fra flere hundre Mbps nær ruteren til 40 Mbps på soverommet innerst i boligen, forteller forbindelsen deg noe.

## Prøv utvikleralternativene, men ikke stol på dem

Noen telefoner kan vise flere WiFi-detaljer etter at du har aktivert utvikleralternativene.

Gå til **Innstillinger > Om telefonen** og trykk på **Build number** sju ganger. Åpne deretter **Settings > System > Developer options** og se under Networking etter **Enable Wi-Fi verbose logging**. Googles utviklerdokumentasjon sier at dette øker WiFi-loggføringen for hver SSID basert på relativ RSSI.

I praksis varierer det hva som faktisk blir synlig. Pixel og enheter med Android nær standardutgaven har større sjanse for å vise nyttige detaljer. Samsung og andre OEM-versjoner kan skjule den samme informasjonen eller presentere den på en annen måte. Dette er et av de Android-triksene som virker helt til det ikke gjør det.

## Bruk en WiFi-analyseapp for dBm

En WiFi-analyseapp er den enkleste måten å få en dBm-verdi på tvers av ulike telefoner.

WiFiman fra Ubiquiti viser WiFi-detaljer som signalstyrke, kanal, SSID, BSSID, gateway, DNS, latenstid og pakketap. Det er et godt førstevalg hvis du vil ha én app som også har hastighetstester og verktøy for å oppdage enheter i nettverket.

NetSpot passer bedre når du vil kartlegge et område. Appen kan vise signalstyrke og hjelpe deg med å lage et grovt dekningskart mens du beveger deg rundt i et hjem eller på et kontor.

Network Analyzer er nyttig når problemet kanskje ikke skyldes signalstyrken. Den kombinerer WiFi- og mobilnettdata med verktøy som ping, DNS-oppslag og traceroute.

Etter at du har installert en av dem, finner du nettverksnavnet og følger med på dBm-verdien mens du beveger deg. Det tallet betyr mer enn ikonet i statusfeltet.

## Hva dBm-tallene betyr

dBm-verdier er negative. Jo nærmere null tallet er, desto sterkere er signalet. En verdi på -45 dBm er mye sterkere enn -75 dBm.

Bruk disse som praktiske terskler for et hjemmenettverk:

- -30 til -50 dBm: utmerket. Du er sannsynligvis nær ruteren eller tilgangspunktet.
- -50 til -60 dBm: sterkt. Strømming, videosamtaler og vanlig surfing bør være stabilt.
- -60 til -67 dBm: fortsatt godt for de fleste formål, blant annet HD-video og samtaler når forstyrrelsene er små.
- -67 til -70 dBm: brukbart, men her kan sanntidssamtaler og spill begynne å lide.
- -70 til -80 dBm: svakt. Surfing kan fungere, men videokvaliteten kan falle og samtaler kan fryse.
- Under -80 dBm: dårlig. Telefonen kan fortsatt være koblet til selv om dataoverføringen føles ødelagt.

Det finnes ingen perfekt grense, fordi støy og forstyrrelser også betyr mye. Et rent signal på -68 dBm kan fungere bedre enn et støyende signal på -60 dBm i en bygård full av rutere.

## Sjekk frekvensbåndet

De fleste rutere bruker et lavere 2,4 GHz-bånd og et raskere 5 GHz-bånd. Nyere rutere kan også bruke 6 GHz gjennom WiFi 6E eller WiFi 7.

Det laveste båndet rekker lengre og kommer bedre gjennom vegger, men er mer overfylt. Bluetooth-enheter, naborutere, babycaller og mikrobølgeovner kan alle skape støy.

5 GHz er raskere på kort og middels avstand. Signalet svekkes raskere gjennom vegger og etasjeskiller. Telefonen kan vise svakere dBm der og likevel få bedre ytelse enn på det lavere båndet, fordi det er mindre trangt om plassen.

6 GHz er enda renere når det er tilgjengelig, men rekkevidden er kortere igjen. Det fungerer svært godt i samme rom eller rom i nærheten. Det er ikke en magisk løsning for hele huset.

Hvis ruteren slår sammen båndene under ett nettverksnavn, velger telefonen automatisk. Valget er som regel greit, men ikke alltid. Når du tester en død sone, bør du sjekke hvilket bånd telefonen faktisk bruker før du skylder på ruteren.

## Gå gjennom problemområdene

Åpne analyseappen og gå sakte gjennom rommene der WiFi fungerer dårlig. Se etter stedet der nettverket faller under omtrent -70 dBm.

Vanlige svake punkter er kjedelige, men reelle: betongvegger, murstein, metalldører, speil med metallisk bakside, gulvvarme og rutere som er gjemt i skap. En ruter i et skap er et klassisk selvpåført problem.

runcheck viser den gjeldende WiFi-målingen på Network detail-skjermen med dBm, kvalitetsvurdering, tilkoblingshastighet, frekvens og latenstid når Android gjør verdiene tilgjengelige. Network history-visningen er nyttig når problemet kommer og går, for eksempel hvis hastigheten faller hver kveld eller signalkvaliteten bare blir dårlig i ett rom.

## Slik forbedrer du et svakt signal

Flytt ruteren først. Plasser den høyere, nærmere midten av boligen og borte fra metallgjenstander. Ikke gjem den bak TV-en eller inne i et skap.

Bytt kanal hvis naborutere bruker den samme. På 2,4 GHz er kanal 1, 6 og 11 de vanlige valgene som ikke overlapper. På 5 GHz og 6 GHz finnes det mer kanalplass, men overbelastning kan fortsatt oppstå i leilighetsbygg.

Bruk mesh-WiFi når én ruter ikke kan dekke området. Et mesh-system med godt plasserte noder er vanligvis bedre enn en billig forsterker som står helt i utkanten av dårlig dekning. Forsterkeren trenger også et brukbart signal. Hvis den knapt hører ruteren, kan den ikke skape et godt nettverk av ingenting.

Oppdater fastvaren i ruteren når oppdateringer er tilgjengelige. Det løser ikke dårlig fysikk, men kan rette opp feil, roamingproblemer og kompatibilitetsproblemer med nyere telefoner.
