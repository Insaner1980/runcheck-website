---
title: "Hvilke tillatelser bør du gi på Android?"
description: "Den enkleste regelen for Android-tillatelser er denne: Hvis tillatelsen ikke passer til funksjonen du nettopp prøvde å bruke, avslår du den."
listSummary: "android, tillatelser og personvern"
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","tillatelser","personvern","sikkerhet","guide"]
locale: "nb"
draft: false
---
Det er logisk at en kameraapp ber om kameratilgang. Det er ikke logisk at en lommelyktapp ber om tilgang til kontaktene dine. De fleste tillatelsesvalg er ikke mer kompliserte enn dette.

Problemet er tidspunktet. Apper spør mens du prøver å få gjort noe, så `Allow` blir den raske knappen. Slik hoper dårlige tillatelser seg opp.

## Tre typer tillatelser

Android-tillatelser kan grovt deles i tre grupper.

Normale tillatelser har lav risiko og gis vanligvis automatisk. Internettilgang er det tydeligste eksemplet. Du får ikke et popup-vindu hver gang en app trenger nettverk.

Tillatelser ved kjøretid, ofte kalt farlige tillatelser i Android-dokumentasjonen, beskytter data eller maskinvare som kan avsløre privat informasjon. Posisjon, kamera, mikrofon, kontakter, kalender, telefon, SMS, enheter i nærheten og medietilgang hører hjemme her. Dette er forespørslene du ser mens du bruker en app.

Spesialtillatelser er kraftigere og krever vanligvis en tur inn i `Settings`. Tilgjengelighetstilgang, varslingstilgang, visning over andre apper, enhetsadministrator, brukstilgang, installasjon av ukjente apper og full filtilgang hører til i denne kategorien. Vær mer skeptisk til dem enn til en vanlig forespørsel om kamera eller posisjon.

Android 6 innførte tillatelser ved kjøretid. På Android 5.1 og eldre fikk apper omfattende tillatelser under installasjonen. Hvis en telefon fortsatt sitter fast der, er tillatelsesmodellen bare én av mange grunner til å pensjonere den.

## Posisjon

Posisjon er nyttig, men apper ber om det for ofte.

Kart-, vær-, samkjørings-, leverings-, trenings- og navigasjonsapper kan ha en god grunn. En kalkulator, et gallerifilter, en QR-skanner eller en bakgrunnsbildeapp har vanligvis ikke det.

Velg `While using the app` med mindre det finnes en reell bakgrunnsfunksjon. Trinnvis navigasjon, registrering av løpeturer, familiesikkerhet og sporing av enheter er eksempler der bakgrunnsposisjon kan være rimelig.

Bruk omtrentlig posisjon til vær, lokalt innhold, tilgjengelighet i butikker og annet som ikke trenger den nøyaktige GPS-posisjonen din. Android 17 introduserer også en posisjonsknapp som tegnes av systemet som kan gi en app presis posisjon bare for den pågående økten. Det passer bedre når en app trenger nøyaktig posisjon én gang, men ikke fortjener varig presis tilgang.

## Kamera, mikrofon og opptakstilgang

Tilgang til kamera eller mikrofon bør være helt åpenbar.

Videosamtaler trenger begge deler. Meldingsapper bruker dem til bilder, talemeldinger og videomeldinger. En bankapp kan trenge kameraet til dokumentopptak eller QR-koder.

Hvis det ikke finnes en synlig funksjon som bruker kameraet eller mikrofonen, avslår du forespørselen. Android viser personvernindikatorer når apper bruker en av sensorene, og Android 12 la til Privacy Dashboard for nylig bruk av posisjon, kamera og mikrofon.

Sjekk oversikten av og til. Den avslører overraskelser.

## Kontakter

Kontakttilgang er en av de tillatelsene folk gir litt for lett.

Meldings- og sosiale apper ber om den for å finne personer du kjenner. Det er praktisk, men appen kan laste opp eller sammenligne adresseboken din med tjenestens servere. Kontaktene dine har ikke nødvendigvis samtykket til det.

Android 17 forbedrer dette med en systemvelger som lar deg dele bestemte kontakter og datafelt i stedet for hele adresseboken. Bruk den når en app støtter den. Hvis en app fungerer uten kontakttilgang, avslår jeg vanligvis og legger til personer manuelt.

## SMS og telefon

SMS har høy risiko. Tilgangen kan avsløre bekreftelseskoder, private samtaler og meldinger for kontogjenoppretting. Bare den faktiske meldingsappen din bør ha omfattende SMS-tilgang.

Enkelte bankapper ber om å lese engangskoder automatisk. Det er praktisk, men manuell inntasting er tryggere. Hvis appen fungerer uten SMS-tilgang, avslår du den.

Telefontillatelsen kan gi tilgang til anropsstatus, telefonnummer eller anropsrelaterte data, avhengig av appen og Android-versjonen. Telefon-, anropsfiltrerings-, telefonsvarer- og operatørapper kan ha en grunn til å spørre. De fleste andre apper har det ikke.

## Filer, bilder og medier

Lagringstillatelser har endret seg mye mellom Android-versjoner.

Eldre Android-versjoner hadde omfattende lagringstilgang. Android 13 delte tilgang til delte medier i separate tillatelser for bilder, videoer og lyd. Android 14 la til Selected Photos Access, slik at du kan gi en app tilgang til bestemte bilder og videoer i stedet for hele biblioteket.

Velg det smaleste alternativet. Gi et bilderedigeringsprogram tilgang til utvalgte bilder, ikke hele mediebiblioteket. Gi en musikkapp lydtilgang, ikke tilgang til alle filer. Vær særlig forsiktig med full filtilgang, fordi denne spesialtillatelsen er ment for apper som filbehandlere og sikkerhetskopieringsverktøy.

## Enheter i nærheten og Wi-Fi

Bluetooth- og nærhetstillatelser kan være legitime. Apper for hodetelefoner, smarthjem, klokker, høyttalere og skrivere trenger dem ofte.

Android 13 la også til en tillatelse for Wi-Fi-enheter i nærheten for apper som administrerer Wi-Fi-tilkoblinger uten å trenge posisjon til den oppgaven. Det er bedre enn å gi posisjonstilgang bare fordi en app skal finne en skriver eller koble til en lokal enhet.

Ikke gi nærhetstilgang til apper som ikke har noen funksjon for enheter i nærheten.

## Tilgjengelighet, overlegg og administratortilgang

Dette er faresonen.

Tilgjengelighetstilgang kan lese innhold på skjermen, observere handlinger og utføre handlinger på vegne av brukeren. Det er nødvendig for reelle tilgjengelighetsverktøy, enkelte passordbehandlere, automatiseringsverktøy og noen hjelpeapper. Det misbrukes også av skadevare.

Tillatelsen til å vises over andre apper lar en app tegne oppå skjermen. Chatbobler og skjermfiltre bruker den. Svindeloverlegg bruker den også.

Enhetsadministrator kan gjøre en app vanskeligere å fjerne. Bedriftsadministrasjon, foreldrekontroll og tyverisikring kan ha en grunn til å bruke den. Et spill har det ikke.

Hvis en tilfeldig oppryddingsapp ber om noe av dette, avinstallerer du den.

## Gå gjennom tillatelsene du allerede har gitt

Tillatelser er ikke permanente.

På mange telefoner går du til `Settings` > `Security & privacy` > `Permission manager`, eller `Settings` > `Apps` > `Permission manager`. Åpne posisjon, kamera, mikrofon, kontakter, SMS, telefon eller filer og medier, og fjern tilgang fra apper som ikke trenger den.

Søk også i `Settings` etter `Special app access`. Gå gjennom tilgjengelighet, varslingstilgang, visning over andre apper, enhetsadministratorapper, installasjon av ukjente apper, brukstilgang og tilgang til alle filer.

Android 11 og nyere kan automatisk tilbakestille tillatelser for apper du ikke har brukt på noen måneder. Google Play Protect kan også tilbakestille tillatelser for sjelden brukte apper på Android 6 til Android 10. Det hjelper, men erstatter ikke en manuell gjennomgang.

## En praktisk sjekkliste for tillatelser

Når en forespørsel vises, still tre spørsmål.

Passer denne tillatelsen til funksjonen jeg nettopp åpnet?

Kan jeg velge et smalere alternativ, som `While using the app`, omtrentlig posisjon, utvalgte bilder eller `Only this time`?

Vil appen fortsatt fungere hvis jeg avslår?

Er du i tvil, sier du nei. Appen kan spørre igjen når du bruker en funksjon som faktisk trenger tillatelsen.
