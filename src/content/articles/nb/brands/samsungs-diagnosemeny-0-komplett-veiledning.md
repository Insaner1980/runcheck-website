---
title: "Samsungs diagnosemeny #0#: komplett veiledning"
description: "Du skriver #0# i Samsung Telefon-appen, og det vanlige talltastaturet forsvinner. I stedet får du et enkelt rutenett med testknapper for skjerm, berøringspanel, høyttalere, sensorer, kameraer, vibrasjonsmotor og fysiske knapper."
listSummary: "Du skriver #0# i Samsung Telefon-appen, og det vanlige talltastaturet forsvinner."
hub: "brands"
sourceNumber: 160
order: 8
tags: ["produsent","android","diagnostikk","merkespesifikt","guide"]
locale: "nb"
draft: false
---
Når det virker, føles det nesten for enkelt. Når det ikke virker, kan det være overraskende frustrerende, fordi Samsung ikke presenterer denne menyen som en vanlig forbrukerfunksjon. Behandle den som en servicemeny på lavt nivå som ofte virker på Galaxy-telefoner, ikke som en garantert funksjon på alle modeller, operatørversjoner eller i alle regioner.

## Før du prøver koden

Bruk Samsungs egen Telefon-app. Koden virker kanskje ikke i Google Telefon eller en annen oppringingsapp fra en tredjepart, selv på samme enhet. Åpne talltastaturet, skriv inn `*#0*#`, og vent. Du skal ikke trykke på ringeknappen.

Hvis ingenting skjer, kan menyen være blokkert av telefonens fastvare, operatøroppsett, jobbprofil, MDM-policy eller sikkerhetsinnstillinger. Noen brukere rapporterer også at funksjonen Automatisk blokkering forstyrrer service- og diagnosekoder i nyere One UI-versjoner. Hvis du prøver dette, bør du slå av Automatisk blokkering bare et kort øyeblikk og slå den på igjen etterpå. Funksjonen finnes av en grunn.

For de fleste er Samsung Members det tryggere offisielle alternativet. Avhengig av region og appversjon åpner du Samsung Members og velger **Få hjelp > Vis tester**, eller går til den tilsvarende siden for telefondiagnostikk under Brukerstøtte. Du kan kjøre alle testene eller velge én kategori. Verktøyet dekker kontrollene de fleste faktisk trenger, med tydeligere instruksjoner enn det rå `*#0*#`-rutenettet.

## Skjerm- og berøringstester

Knappene Red, Green, Blue og Black fyller skjermen med ensfargede flater. Bruk dem til å se etter døde eller fastlåste piksler, fargestikk, ujevn lysstyrke og skjermskader som ikke er tydelige på bakgrunnsbildet.

Black er særlig nyttig på Galaxy-telefoner med OLED. En ekte svart skjerm skal se avslått ut. Lyse prikker eller fargede flekker kan tyde på fastlåste piksler, mens uklare områder kan skyldes panelskade eller trykkmerker.

Touch-testen viser et rutenett eller mønster som du følger med fingeren. Alle feltene skal registreres rent. Dette finner døde soner nær kantene, som er lette å overse hvis du bare skriver noen ord eller blar gjennom Innstillinger.

Dimming-testen endrer skjermens lysstyrke og fargegjengivelse. Se etter flimring, ujevn lysstyrke, merkelige fargeskift eller et panel som ikke dimmes jevnt. På eldre Galaxy-modeller med LCD kan du se problemer med baklyset. På OLED-modeller handler det mer om pikseloppførsel og styring av lysstyrken.

## Lyd, vibrasjon og knapper

Receiver spiller lyd gjennom ørehøyttaleren. Speaker bruker hovedhøyttalerne. På nyere Galaxy-telefoner med stereolyd bør du lytte etter ubalanse mellom ørehøyttaleren og høyttaleren nederst. At én side høres svak ut, kan være viktig selv om telefonen teknisk sett lager lyd.

Vibration-testen aktiverer vibrasjonsmotoren. En frisk motor føles jevn og kontrollert. Hvis den skrangler, summer høyt eller føles ru, kan motoren eller den interne innfestingen være slitt.

Sub key kontrollerer de fysiske knappene og enkelte navigasjonskommandoer. Trykk på volum, strømknapp og eventuelle støttede navigasjonstaster testen ber om. Hvis en knapp bare virker når du trykker hardt eller fra én vinkel, bør du ikke overse det. Det er vanligvis ikke et programvareproblem.

## Sensorer og kameraer

Sensor-menyen er en av de bedre grunnene til å bruke `*#0*#`. Den kan vise sanntidsverdier fra akselerometer, gyroskop, nærhetssensor, lyssensor, magnetisk sensor, barometer på modeller som har det, fingeravtrykkleser og eldre pulssensorer på Galaxy-modeller som fortsatt er utstyrt med dem.

Noen kontroller er enkle. Dekk nærhetssensoren øverst på skjermen og se om statusen endres. Beveg telefonen og følg verdiene fra akselerometeret. Roter den og kontroller gyroskopet. Dekk lyssensoren, og rett den deretter mot en lampe.

Sensorresultater krever sunn fornuft. En magnetisk sensor kan oppføre seg merkelig nær en bærbar PC, en magnet i dekselet, en bilholder eller et metallbord. En skjermbeskytter kan blokkere nærhetssensoren. Test i rene omgivelser før du konkluderer med at sensoren er ødelagt.

Mega Cam og Front Cam åpner bak- og frontkameraene. De bekrefter at kameramodulene starter, fokuserer og tar bilde. De beviser ikke at alle objektivene er skarpe, at optisk bildestabilisering virker som den skal, eller at nattbildene blir gode. Maskinvaretester er grove verktøy.

## Koder som kan være nyttige

Samsung har andre tastekoder, men støtten varierer etter modell, operatør, One UI-versjon og region. Ikke behandle kodelister på nettet som universelle.

`*#06#` viser IMEI. Dette er trygt og virker på mange telefoner, ikke bare Samsung.

`*#1234#` viser Samsung-fastvareinformasjon på mange Galaxy-enheter, blant annet AP-, CP- og CSC-versjonsstrenger. Det er nyttig når du vil kontrollere nøyaktig hvilken programvareversjon som er installert.

`*#0228#` kan vise detaljer om batteristatus på mange Galaxy-telefoner. Hvis siden åpnes, bruker du den som et raskt statusbilde, ikke som en full rapport om batterihelse.

Eldre koder som `*#7353#`, `*#0842#`, `*#0673#` og `*#0289#` kan fortsatt virke på enkelte enheter. På andre skjer ingenting. Det er normalt nå.

## Dette kan ikke `*#0*#` bevise

Menyen tester om maskinvaren reagerer akkurat da. Den gir deg ikke langsiktig batterihelse, historikk over ladesykluser, logger for termisk struping, historikk over signalstyrke eller ytelsesmålinger for storage I/O over tid.

Den beviser heller ikke alene at en telefon er ekte. En fungerende Samsung-diagnosemeny er et godt tegn, men ikke nok. Kontroller IMEI, fastvareversjon, Knox-status der det er relevant, kjøpshistorikk og fysiske detaljer hvis du kjøper brukt.

En telefon kan bestå `*#0*#` og fortsatt føles treg fordi lagringen nesten er full, en dårlig app kjører i bakgrunnen, batterispenningen faller under belastning eller en nylig oppdatering har innført en feil. Maskinvaretester forklarer ikke alt.

## Når Samsung Members er et bedre valg

Bruk Samsung Members når den rå koden ikke virker, når du trenger et tydeligere bestått- eller ikke bestått-resultat, eller når du vil sende en feilrapport. Samsungs offisielle diagnostikk kan teste batteristatus, kabellading, trådløs lading, berøringsskjerm, sensorer, mikrofon, høyttaler, kamera, Wi-Fi, Bluetooth, SIM-kort, mobilnett, fingeravtrykk, NFC, knapper og mer, avhengig av enheten.

Mindre tekniske brukere bør begynne med Samsung Members. Appen forteller hva du kan gjøre videre når en test mislykkes. `*#0*#`-menyen går stort sett ut fra at du allerede vet hva du ser etter.

Det betyr ikke at ett verktøy alltid er best. Jeg ville brukt `*#0*#` til raske kontroller av skjerm, berøring, sensorer og lyd på en brukt telefon. Til vanlig feilsøking, brukerstøtte og offisiell rapportering ville jeg brukt Samsung Members.

## Android 17 og Galaxy-kompatibilitet

Den stabile utrullingen av Android 17 startet først på støttede Pixel-enheter. Galaxy-telefoner følger Samsungs egen One UI-plan, så diagnosemenyen på Samsung-telefonen endres ikke bare fordi Android 17 finnes.

Når Android 17-baserte Galaxy-versjoner kommer til modellen din, kan tilgangen til diagnostikk fortsatt avhenge av Samsung Telefon, One UI-versjon, operatørfastvare, region, sikkerhetsinnstillinger og oppdateringer til Samsung Members. At koden virker på én Galaxy S-modell, beviser med andre ord ikke at den virker på en Galaxy A-modell ved siden av.

Hvis `*#0*#` er blokkert, bør du ikke bruke en time på å slåss med talltastaturet. Kjør diagnostikken i Samsung Members i stedet.

---

*Metabeskrivelse: Samsungs kode `*#0*#` kan åpne en skjult diagnosemeny på Galaxy-telefoner for testing av skjerm, berøring, sensorer, kamera, høyttaler og vibrasjon. Her ser du hva den kontrollerer, og hva du kan bruke når koden er blokkert.*
