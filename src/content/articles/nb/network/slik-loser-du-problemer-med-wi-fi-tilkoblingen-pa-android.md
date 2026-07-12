---
title: "Slik løser du problemer med Wi-Fi-tilkoblingen på Android"
description: "Metabeskrivelse: Trinnvise løsninger på Wi-Fi-problemer på Android, blant annet brudd i tilkoblingen, tregt nett, problemer med lagrede nettverk, DNS-innstillinger, kontroll av ruteren og merknader om Android 17."
listSummary: "ytelse, hastighet og android"
hub: "network"
sourceNumber: 96
order: 7
tags: ["ytelse","hastighet","android","optimalisering","feilsøking"]
locale: "nb"
draft: false
---
Hva bør du prøve først når Wi-Fi slutter å virke på Android? Ikke begynn med en tilbakestilling til fabrikkinnstillingene, og ikke bruk en halvtime på å endre ruterinnstillinger før du har testet det enkle. De fleste Wi-Fi-problemer faller i én av tre grupper: Telefonen kobler seg ikke til, tilkoblingen faller stadig ut, eller telefonen er tilkoblet mens internett i praksis står stille.

Prøv løsningene i denne rekkefølgen. Det sparer tid.

## 1. Slå Wi-Fi av og på, deretter flymodus

Trekk ned Hurtiginnstillinger og slå av Wi-Fi. Vent i fem sekunder. Slå det på igjen.

Hvis det ikke hjelper, slår du på flymodus, venter i ti sekunder og slår den av igjen. Da startes telefonens trådløse radioer på nytt uten at hele enheten må startes om. På Pixel og Android-utgaver som ligger nær standardversjonen, finner du også flymodus under `Innstillinger > Nettverk og internett`. På Samsung ligger den under `Innstillinger > Tilkoblinger`.

Det er et lite tiltak, men det løser overraskende mange midlertidige problemer med radiotilstanden.

## 2. Glem nettverket og koble til på nytt

En lagret Wi-Fi-profil kan bli utdatert etter en fastvareoppdatering på ruteren, et passordbytte, en endring av sikkerhetsmodus eller en ny konfigurasjon av et mesh-nettverk.

På Pixel og mange Android 17-lignende utgaver går du til `Innstillinger > Nettverk og internett > Internett`. Trykk på tannhjulet ved nettverket, og velg `Glem`. På Samsung går du vanligvis til `Innstillinger > Tilkoblinger > Wi-Fi`, trykker på tannhjulet ved nettverket og velger `Glem`.

Koble til igjen ved å velge nettverket og skrive inn passordet. Har ruteren både et hovednettverk og et gjestenettverk, må du kontrollere at du velger riktig.

## 3. Start telefonen og ruteren på nytt

Start telefonen på nytt. Start deretter ruteren på nytt ved å trekke ut strømmen i 30 sekunder.

Gjør begge deler, ikke bare det ene. Telefonen kan ha en midlertidig feil i nettverkstilstanden, mens ruteren kan sitte med en gammel DHCP-tildeling eller en overbelastet tilkoblingstabell. Når begge sider starter på nytt, må de opprette forbindelsen på nytt fra bunnen av.

Hvis flere enheter har Wi-Fi-problemer, er omstart av ruteren viktigere enn omstart av telefonen.

## 4. Finn ut om problemet er Wi-Fi eller internett

Android kan være koblet til Wi-Fi selv om internettforbindelsen bak ruteren er nede. Wi-Fi-ikonet forteller bare at telefonen har en lokal trådløs forbindelse.

Prøv en annen enhet på samme nettverk. Hvis alle enheter er trege eller frakoblet, bør du kontrollere modemet, ruteren og internettleverandøren. Hvis bare Android-telefonen har problemer, fortsetter du med tiltakene på telefonsiden.

Prøv også å åpne administrasjonssiden til ruteren. Mange rutere bruker 192.168.1.1 eller 192.168.0.1. Hvis denne siden åpnes, men vanlige nettsteder ikke gjør det, fungerer selve Wi-Fi-forbindelsen. Problemet ligger da lenger ute, for eksempel i internettlinjen, DNS eller ruteroppsettet.

## 5. Oppdater Android, Google Play-systemkomponenter og ruterens fastvare

Gå til `Innstillinger > System > Systemoppdatering` og installer ventende oppdateringer. På Samsung bruker du `Innstillinger > Programvareoppdatering > Last ned og installer`.

På Pixel-lignende Android-utgaver bør du også se etter Google Play-systemoppdateringer under delen for sikkerhet, personvern og systemoppdateringer. Den nøyaktige ordlyden flyttes av og til. Poenget er at både telefonens fastvare og systemkomponentene må være oppdatert.

Ruterens fastvare er lett å glemme. Åpne ruterappen eller administrasjonspanelet, og se etter oppdateringer under fastvare, system eller administrasjon. Ruterprodusenter retter stadig stabilitetsfeil i Wi-Fi, men mange rutere oppdaterer ikke seg selv pålitelig.

## 6. Slå av automatisk bytte fra Wi-Fi til mobildata

Hvis telefonen tilfeldig forlater Wi-Fi selv om ruteren fungerer, kan automatisk nettverksbytte være årsaken.

På Pixel kan du kontrollere `Innstillinger > Nettverk og internett > Adaptiv tilkobling`. På Samsung åpner du vanligvis `Innstillinger > Tilkoblinger > Wi-Fi > Intelligent Wi-Fi` og slår av bytte til mobildata mens du tester.

La funksjonen være av i ett døgn. Hvis Wi-Fi blir stabilt, reagerte den for aggressivt på et nettverk den vurderte som svakt eller av lav kvalitet.

## 7. Kontroller 2,4 GHz og 5 GHz

2,4 GHz-båndet har lengre rekkevidde og trenger bedre gjennom vegger. 5 GHz er raskere nær ruteren, men signalet faller raskere gjennom vegger. En telefon på 5 GHz kan fungere perfekt i rommet ved siden av og begynne å slite i den andre enden av boligen.

Hvis ruteren kombinerer begge båndene under samme nettverksnavn, kan du midlertidig gi dem egne navn, for eksempel HomeWiFi-2G og HomeWiFi-5G. Koble telefonen til 2,4 GHz når rekkevidde er viktigst, eller 5 GHz når du vil ha høyere hastighet.

Du kan ofte se hvilket bånd som er i bruk ved å åpne detaljene for det tilkoblede Wi-Fi-nettverket. Standard Android kan vise frekvens eller forbindelseshastighet. Samsung viser tilsvarende opplysninger i innstillingene for Wi-Fi-nettverket.

## 8. Kontroller Privat DNS før du endrer statisk DNS

DNS-problemer kan få Wi-Fi til å se ødelagt ut. Telefonen sier at den er tilkoblet, enkelte chatteapper virker kanskje delvis, men nettsteder stopper opp eller kan ikke slås opp.

På Android 9 og nyere går du til `Innstillinger > Nettverk og internett > Privat DNS`. Hvis en egendefinert leverandør er valgt og Wi-Fi ikke fungerer, setter du den midlertidig til automatisk eller av og tester igjen.

Du kan bruke leverandører som `dns.google` eller `one.one.one.one`, men vertsnavnet må skrives helt riktig. Et ugyldig vertsnavn for Privat DNS kan ødelegge navneoppslag både på Wi-Fi og mobildata.

Unngå å bytte et Wi-Fi-nettverk fra DHCP til statisk konfigurasjon med mindre du kjenner riktig IP-adresse, gateway og nettverksmaske. Statisk DNS kan hjelpe i enkelte tilfeller, men feil IP-opplysninger skaper et nytt problem som ser verre ut enn det opprinnelige.

## 9. Tilbakestill nettverksinnstillingene

Bruk dette når enkelttiltakene ikke har hjulpet. En nettverkstilbakestilling fjerner innstillinger for Wi-Fi, Bluetooth og mobilnett uten å slette bilder, apper eller filer.

Pixel og standard Android: `Innstillinger > System > Alternativer for tilbakestilling`. På nyere utgaver kan Wi-Fi og Bluetooth ha en egen tilbakestilling, mens eldre utgaver viser `Tilbakestill Wi-Fi, mobil og Bluetooth`.

Samsung: `Innstillinger > Generell styring > Tilbakestill > Tilbakestill nettverksinnstillinger`.

Xiaomi: `Innstillinger > Tilkobling og deling > Tilbakestill Wi-Fi, mobilnettverk og Bluetooth`.

OnePlus: `Innstillinger > System > Alternativer for tilbakestilling > Tilbakestill Wi-Fi, mobil og Bluetooth`.

Du må koble til Wi-Fi-nettverk og pare Bluetooth-enheter på nytt etterpå.

## 10. Kontroller dato og klokkeslett

Feil dato og klokkeslett kan bryte sertifikatkontroller, innloggingssider på offentlige nettverk og enkelte godkjenningsforløp. Det høres nesten for enkelt ut, men dette skjer etter reiser, tomme batterier, manuelle endringer av tidssone eller problemer under oppsett av enheten.

Gå til `Innstillinger > System > Dato og klokkeslett`, og slå på automatisk klokkeslett og tidssone. På Samsung finner du dette vanligvis under `Innstillinger > Generell styring > Dato og klokkeslett`.

## 11. Se på MAC-randomisering for betrodde nettverk

Android 10 og nyere bruker tilfeldige MAC-adresser for bedre personvern på Wi-Fi. Det er nyttig på offentlige nettverk. Hjemme eller på jobb kan det forvirre rutere som bruker MAC-filtrering, reserverte IP-adresser, foreldrekontroll eller en grense for antall enheter.

Åpne detaljene for Wi-Fi-nettverket og se etter personvern eller MAC-adressetype. Hvis et betrodd hjemmenettverk stadig avviser telefonen, kan du prøve telefonens eller enhetens MAC-adresse bare for dette nettverket. La tilfeldig MAC-adresse være aktivert andre steder.

## 12. Rett feil på rutersiden

Hvis flere enheter har problemer, bør du konsentrere deg om ruteren.

På 2,4 GHz kan du bruke kanal 1, 6 eller 11 og velge den som er minst belastet. Ikke plasser ruteren bak en TV, inne i et skap, ved siden av en mikrobølgeovn, nær metallhyller eller på gulvet.

Hvis ruteren bruker band steering, kan du prøve å slå det av eller gi 2,4 GHz og 5 GHz egne nettverksnavn. Hvis den står på bare WPA3 og en eldre telefon sliter, kan du prøve blandet WPA2/WPA3-modus. Har ruteren en enhetsgrense, øker du den eller fjerner gamle enheter.

I større boliger er et mesh-system vanligvis bedre enn en billig rekkeviddeforlenger. Forlengere kan fungere, men de reduserer ofte hastigheten og kan skape merkelige problemer når telefonen bytter tilgangspunkt.

## 13. Etter Android 17 eller en annen stor oppdatering

Google lanserte Android 17 for støttede Pixel-enheter i juni 2026. Andre produsenter følger sine egne tidsplaner. Hvis Wi-Fi-problemene startet rett etter oppdateringen, bør du derfor ikke automatisk anta at ruteren plutselig har blitt defekt.

Installer eventuelle etterfølgende sikkerhetsoppdateringer, oppdater operatør- og tilkoblingsrelaterte apper gjennom Play-butikken, start telefonen og ruteren på nytt, og glem deretter nettverket før du kobler til igjen. Hvis feilen er utbredt for akkurat din modell og programvareversjon, kan en månedlig oppdatering være den reelle løsningen.

Eldre råd sier ofte at du skal tømme systemets hurtigbufferpartisjon. Det ville jeg ikke startet med på en moderne Android-telefon. Noen Samsung-modeller har fortsatt alternativer for hurtigbuffer i gjenopprettingsmenyen, men mange nyere Android-enheter bruker ikke denne gamle feilsøkingsveien på en måte du kan regne med.

## 14. Test sikker modus

Sikker modus starter Android uten de fleste tredjepartsapper. Hvis Wi-Fi fungerer normalt i sikker modus, er det sannsynligvis en installert app som forstyrrer forbindelsen.

VPN-apper, brannmurapper, annonseblokkering, administrasjonsverktøy og såkalte Wi-Fi-forsterkere er de vanligste mistenkte. Deaktiver eller avinstaller de nyeste nettverksrelaterte appene først.

## Når bør du vurdere maskinvarereparasjon?

Hvis telefonen mister Wi-Fi på flere rutere, fortsatt feiler etter en nettverkstilbakestilling, ikke virker i sikker modus og andre enheter fungerer normalt, blir en maskinvarefeil mer sannsynlig. Skade på antennen og feil i Wi-Fi-brikken er uvanlig, men forekommer etter fall eller væskeskade.

På dette punktet bør du bare tilbakestille til fabrikkinnstillingene etter at dataene er sikkerhetskopiert. Hvis det heller ikke hjelper, er reparasjon det ærlige neste steget.

## Korte svar

Bør du slå av Wi-Fi når du går hjemmefra? Vanligvis ikke. Moderne Android håndterer søk etter nettverk effektivt, og aktiv Wi-Fi hjelper med kjente nettverk og mer presis posisjonering.

Kan et deksel forstyrre Wi-Fi? Vanlige deksler gjør det ikke. Metalldeksler, tykke batterideksler eller magnetplater kan svekke mottaket når signalet allerede er svakt.

Hvordan kontrollerer du Wi-Fi-signalstyrke i dBm? Noen Android-utgaver viser den i Wi-Fi-detaljene. Hvis din ikke gjør det, kan en Wi-Fi-analyseapp vise verdien. Omtrent -30 til -50 dBm er svært bra, -50 til -70 dBm er brukbart til godt, og svakere enn -70 dBm kan bli ustabilt avhengig av forstyrrelser.

runcheck følger utviklingen i Wi-Fi-signalets kvalitet på detaljsiden for nettverk, blant annet frekvensbånd, forbindelseshastighet og signalhistorikk når Android gjør opplysningene tilgjengelige.
