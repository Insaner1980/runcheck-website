---
title: "Diagnostikkoder for Android: komplett liste etter produsent"
description: "Diagnostikkoder som skrives inn i ringeappen på Android, sortert etter produsent, blant annet Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO og Realme, med oppdaterte merknader om Android 17."
listSummary: "diagnostikk, sensorer og android"
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostikk","sensorer","android","maskinvare","guide"]
locale: "nb"
draft: false
---
---

Du skriver `*#0*#` på én Galaxy-telefon, og en full testmeny for maskinvaren åpnes. Du skriver den samme koden på en annen Galaxy, og ingenting skjer.

Slik er det normalt med diagnostikkoder på Android. De er nyttige, men på nettet blir de ofte fremstilt som mer universelle enn de er. En kode kan virke på én telefon, mislykkes på en annen modell fra samme merke og forsvinne etter en operatørtilpasset fastvareoppdatering. Kodene befinner seg i et uoversiktlig område mellom Android, ringeappen, OEM-produsentens servicemenyer og begrensninger fra mobiloperatøren.

Google lanserte Android 17 den 16. juni 2026 og gjorde systemet tilgjengelig først på de fleste Pixel-enheter som støttes. Partnerenheter fra blant annet OnePlus, OPPO, realme, vivo, Xiaomi, HONOR, Lenovo, Sharp og iQOO håndteres fortsatt gjennom den enkelte produsentens beta- og utrullingskanaler for Android 17. Android 17 gjør altså ikke skjulte diagnostikkoder like på tvers av merkene.

Bruk den forhåndsinstallerte ringeappen når du prøver kodene. Samsung-koder krever vanligvis Samsung Phone. Google-koder fungerer best i Phone by Google. Ringeapper fra andre utviklere behandler ofte ikke MMI- eller servicekoder i det hele tatt.

## Før du prøver en kode

Hold deg til koder som viser informasjon eller starter maskinvaretester. Ikke skriv inn koder for tilbakestilling, klargjøring, modemkonfigurasjon eller serviceprogrammering med mindre du vet nøyaktig hva de gjør.

De fleste testkodene kjøres med en gang du skriver inn det siste tegnet. På enkelte telefoner må du trykke på ringeknappen. Hvis ingenting skjer, bør du ikke skrive inn koden om og om igjen. Den støttes sannsynligvis ikke på akkurat den modellen, ringeappen, operatørfastvaren eller Android-versjonen.

## Koder som virker på mange Android-telefoner

Dette er det nærmeste Android kommer felles diagnostikkoder, men heller ikke disse er garantert å virke overalt.

| Kode | Hva den gjør | Merknader |
|---|---|---|
| `*#06#` | Viser IMEI, og noen ganger MEID eller EID | Den mest utbredte telefonkoden. Nyttig ved garantihenvendelser, svartelistesjekk og kontakt med mobiloperatøren. |
| `*#07#` | Viser forskriftsinformasjon og SAR-detaljer | Virker på mange Android-telefoner. På enkelte må du trykke på ringeknappen. |
| `*#*#4636#*#*` | Åpner Androids Testing-meny | Kan vise telefoninformasjon, nettverksstatus, signaldata, batteristatistikk og Wi-Fi-detaljer. Tilgjengeligheten varierer mye. |
| `*#*#426#*#*` | Åpner diagnostikk for Firebase Cloud Messaging | Prøv den helst i Phone by Google. Nyttig når pushvarsler ikke kommer frem. |

`*#*#4636#*#*` er en av de mest siterte Android-kodene, men ikke bli overrasket hvis menyen har færre felt enn gamle skjermbilder viser. Nyere Android-versjoner og OEM-grensesnitt skjuler flere nettverks- og batteridetaljer enn før.

## Samsung Galaxy

Samsung gir deg to veier til diagnostikk: Samsung Members og skjulte koder i ringeappen. Begynn med Samsung Members. Det er den støttede og oppdaterte løsningen, og resultatene er lettere å forstå for vanlige brukere.

Åpne Samsung Members, gå til Diagnostikk og velg telefontestene. Samsungs nåværende testutvalg kan blant annet omfatte kamera, USB-tilkobling, kabellading, batteristatus, berøringsskjerm, sensorer, vibrasjon, mikrofon, høyttaler, Wi-Fi, Bluetooth, SIM-kort, NFC og fingeravtrykksgjenkjenning. Den nøyaktige listen avhenger av modellen.

Samsung-koder er fortsatt nyttige, særlig på operatøruavhengige telefoner, men sikkerhetsinnstillinger i One UI, Auto Blocker, bedriftsregler og operatørfastvare kan blokkere dem.

| Kode | Hva den gjør | Merknader |
|---|---|---|
| `*#0*#` | Åpner Samsungs hovedmeny for maskinvaretester | Testene kan omfatte skjermfarger, berøring, ørehøyttaler, hovedhøyttaler, vibrasjon, kameraer, sensorer, S Pen og mer. |
| `*#0228#` | Skjerm for batteristatus | Viser blant annet direkte batterispenning på mange modeller. Enkelte nyere fastvareversjoner blokkerer den. |
| `*#0011#` | ServiceMode for mobilnett | Nyttig for signaldata og informasjon om basestasjonen telefonen er koblet til. Ikke endre innstillinger her. |
| `*#0842#` | Vibrasjonstest | Virker på mange Samsung-modeller, men ikke alle. |
| `*#0673#` eller `*#0289#` | Lydtest | Oppførselen for høyttaler og ørehøyttaler varierer etter modell. |
| `*#2663#` | Informasjon om fastvaren til berøringspanelet | Brukes ofte av serviceteknikere. |
| `*#7353#` | Hurtigtestmeny | Vanligere på eldre Galaxy-modeller. |
| `*#1234#` | Detaljer om fastvareversjon | Viser AP-, CP- og CSC-bygg. |
| `*#7412365#` | Informasjon om kameraets fastvare | Tilgjengeligheten varierer. |
| `*#0588#` | Test av nærhetssensor | Nyttig hvis skjermen ikke slår seg av under samtaler. |
| `*#9900#` | SysDump-modus | Hovedsakelig for logger og feilsøking. Ikke endre tilfeldige alternativer. |
| `*#9090#` | Diagnosekonfigurasjon | Ikke endre noe med mindre du følger offisielle serviceinstruksjoner. |

Hvis `*#0*#` ikke virker, betyr det ikke at telefonen er falsk. Prøv først Samsung Phone i stedet for Google Phone. Sjekk deretter diagnostikken i Samsung Members. Hvis den virker, er maskinvaretestene fortsatt tilgjengelige selv om den skjulte koden er blokkert.

## Google Pixel

Pixel-telefoner er mer restriktive enn Samsung-telefoner. Det finnes ingen Pixel-utgave av Samsungs `*#0*#`-meny.

| Kode | Hva den gjør | Merknader |
|---|---|---|
| `*#*#7287#*#*` | Åpner Pixel Repair Diagnostics på enheter som støtter det | Google dokumenterer koden for reparasjonskontroller på Pixel. Den krever internettilkobling, og funksjonen kan variere etter modell, område og programvarestatus. |
| `*#*#4636#*#*` | Androids Testing-meny | Brukes ofte til telefon- og nettverksinformasjon, men feltene varierer mellom Android-versjoner. |
| `*#*#426#*#*` | FCM-diagnostikk | Nyttig ved feilsøking av pushvarsler. |
| `*#07#` | Forskrifts- og SAR-informasjon | Virker på mange Pixel-modeller. |

Pixel 6 og nyere, inkludert Fold-modeller, har også et eget område for enhetshelse og brukerstøtte i Innstillinger. Det er ikke det samme som koden for reparasjonsdiagnostikk, men er ofte et bedre første stopp ved spørsmål om batteri, lading, ytelse og støtte. Pixel 9 og nyere har i tillegg samtalebasert hjelp på enkelte språk.

Android 17 kan installeres trådløst på støttede Pixel-modeller fra Pixel 6-serien til Pixel 10a. Det betyr ikke at alle Pixel-enheter har identisk diagnostikk. Maskinvare, region og støtte for reparasjonsmodus spiller fortsatt inn.

## Xiaomi, Redmi og POCO

Xiaomis CIT-meny er en av de bedre OEM-testpakkene, men innholdet varierer mellom MIUI, HyperOS, regionale programvareversjoner og modellserier.

| Kode | Hva den gjør | Merknader |
|---|---|---|
| `*#*#6484#*#*` | Åpner CIT-menyen for maskinvaretester | Inneholder ofte tester for skjerm, berøring, vibrasjon, høyttalere, mikrofoner, kameraer, sensorer, GPS, Wi-Fi, Bluetooth, SIM, knapper, fingeravtrykk, IR-sender og NFC. |
| `*#*#64663#*#*` | Alternativ CIT-kode | Virker på enkelte eldre Xiaomi-modeller. |
| `*#*#4636#*#*` | Androids Testing-meny | Tilgjengeligheten varierer, særlig på nyere HyperOS-versjoner. |

På enkelte Xiaomi-telefoner kan du også åpne diagnostikken via `Settings > My device > All specs` ved å trykke flere ganger på kjerneversjonen. Prøv denne veien hvis koden i ringeappen ikke virker.

## OnePlus

Tilgangen til diagnostikk på OnePlus har endret seg etter hvert som OxygenOS har nærmet seg ColorOS. Eldre veiledninger stemmer derfor ikke alltid med dagens telefoner.

| Kode | Hva den gjør | Merknader |
|---|---|---|
| `*#808#` | Engineering Mode | Maskinvaretestene kan omfatte skjerm, berøring, kameraer, sensorer, lyd, lading og nettverksmoduler. Tilgjengeligheten varierer etter OxygenOS-versjon og region. |
| `*#*#4636#*#*` | Androids Testing-meny | Virker fortsatt på mange modeller. |
| `*#888#` | Maskinvareversjon eller produksjonsinformasjon | Finnes ikke på alle modeller. |
| `*#1234#` | Fastvareversjon | Virker på enkelte OnePlus-versjoner. |

Vær forsiktig i Engineering Mode. Bruk testskjermene, men ikke endre modem-, kalibrerings- eller serviceinnstillinger.

## Motorola

Motorola har færre offentlig kjente koder enn Samsung og Xiaomi, men mange modeller har en egen servicetest-app.

| Kode | Hva den gjør | Merknader |
|---|---|---|
| `*#*#2486#*#*` | Åpner CQATest eller en servicetestmeny | Kan omfatte skjerm, berøring, høyttaler, vibrasjon, kamera og sensorer. |
| `*#*#4636#*#*` | Androids Testing-meny | Virker på mange modeller. |
| `.12345+=` | Åpner utviklermodus fra den forhåndsinstallerte Kalkulator-appen | Virker bare på enkelte Motorola-enheter, og bare i den forhåndsinstallerte kalkulatoren. |

Ikke få panikk hvis CQATest dukker opp i applisten etter en test. Det er Motorolas fabrikkkomponent for testing.

## OPPO og Realme

OPPO og Realme deler mye av grunnlaget i ColorOS, så servicekodene overlapper.

| Kode | Hva den gjør | Merknader |
|---|---|---|
| `*#899#` | Manuell test eller utviklermeny | Vanlig inngang til maskinvaretester på mange ColorOS- og Realme UI-versjoner. |
| `*#800#` | Verktøy for utvikling og logging | Brukes ofte til logger og nettverksdiagnostikk. |
| `*#6776#` | Programvare- og enhetsinformasjon | Viser modell- og fastvaredetaljer på mange modeller. |
| `*#*#4636#*#*` | Androids Testing-meny | Tilgjengeligheten varierer. |

Den tryggere veien er vanligvis den innebygde Phone Manager-, My OPPO-, My realme- eller Support-appen, hvis modellen din har en av dem.

## Koder du bør unngå

Unngå koder for tilbakestilling til fabrikkinnstillinger og serviceprogrammering som du finner i tilfeldige lister. En farlig kode som fortsatt går igjen, er `*2767*3855#`, en eldre Samsung-kode for tilbakestilling til fabrikkinnstillinger. Ikke skriv den inn bare for å se hva som skjer. Slik mister folk data.

Unngå også alt som beskrives som NV, RF-kalibrering, modemprogrammering, operatørklargjøring eller servicekonfigurasjon. Disse menyene er ikke diagnoseleketøy.

## Når kodene ikke virker

Prøv først den forhåndsinstallerte ringeappen. Deretter kan du prøve produsentens støtte- eller diagnoseapp. Samsung Members, Pixel-diagnostikk, Xiaomi CIT via Innstillinger, Motorola CQATest og støtteverktøy fra OPPO eller Realme virker ofte selv når kodene i ringeappen ikke gjør det.

Operatørlåste telefoner kan blokkere koder. Det samme kan bedriftsadministrerte telefoner og enkelte sikkerhetsfunksjoner. Android-oppdateringer kan fjerne eller skjule deler av en meny. Det er frustrerende, men betyr ikke automatisk at telefonen har en maskinvarefeil.

Diagnostikkoder er nyttige til enkeltkontroller av komponenter. Ved problemer som utvikler seg sakte, er de ikke nok. En høyttalertest viser ikke at telefonen blir overopphetet hver ettermiddag, og en batteriskjerm viser ikke at ladestrømmen har blitt svakere gjennom en hel måned. runcheck dekker dette mellomrommet ved å følge utviklingen i batteri, temperatur, nettverk, lagring og lading over tid.

## FAQ

### Kan diagnostikkoder skade telefonen?

Koder som bare viser informasjon eller kjører tester, er vanligvis trygge. Koder som sletter data eller endrer serviceinnstillinger, er det ikke. Søk opp den nøyaktige koden før du skriver den inn.

### Må jeg trykke på ringeknappen?

Vanligvis ikke. De fleste kodene av typen `*#*#...#*#*` og `*#...#` kjøres når det siste tegnet er skrevet inn. Enkelte telefoner krever ringeknappen, særlig ved kortere koder som `*#07#`.

### Hvorfor virker en kode på én telefon, men ikke på en annen?

Fordi koden implementeres av OEM-produsenten, ringeappen, fastvaren og noen ganger mobiloperatøren. Android garanterer ikke én universell meny for maskinvaretester.

### Kan apper erstatte diagnostikkoder?

Delvis. Apper som Samsung Members, Phone Doctor Plus, TestM og DevCheck kan teste skjermen, høyttalerne, kameraene og sensorene, og lese batteri- og nettverksdata gjennom Android-API-er. De får vanligvis ikke tilgang til de samme underliggende servicemenyene som OEM-verktøyene bruker.
