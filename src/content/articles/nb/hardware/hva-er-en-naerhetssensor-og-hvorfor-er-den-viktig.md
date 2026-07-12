---
title: "Hva er en nærhetssensor, og hvorfor er den viktig?"
description: "Slik fungerer nærhetssensoren i Android-telefonen, hvorfor samtaler oppfører seg merkelig når den svikter, og hvordan du tester og løser vanlige problemer."
listSummary: "diagnostikk, sensorer og android"
hub: "hardware"
sourceNumber: 117
order: 14
tags: ["diagnostikk","sensorer","android","maskinvare","guide"]
locale: "nb"
draft: false
---
Midt i en samtale våkner skjermen mot ansiktet ditt, og kinnet åpner talltastaturet. Da er det ofte denne lille sensoren som svikter i den ene oppgaven ingen legger merke til før den slutter å virke.

Sensoren forteller telefonen når noe er nær frontglasset. Under en samtale er dette «noe» vanligvis ansiktet ditt. Android slår deretter av skjermen og ignorerer berøringer, slik at øret ikke blir et tilbehør til berøringsskjermen.

## Slik fungerer den

De fleste Android-telefoner bruker en infrarød nærhetssensor ved ørehøyttaleren eller området rundt frontkameraet. Den sender ut infrarødt lys og måler hvor mye som reflekteres tilbake. Kommer det nok lys tilbake, tolker telefonen det som at et objekt er nær. Når refleksjonen avtar, rapporterer sensoren at objektet er langt unna igjen.

Androids egen sensordokumentasjon er litt mer fleksibel enn mange tror. De fleste nærhetssensorer returnerer en avstand i centimeter, men noen rapporterer bare nær eller fjern. Under vanlige telefonsamtaler er det egentlig alt Android trenger.

Enkelte telefoner bruker ikke lenger en tydelig, separat infrarød komponent. Noen har sensorer under skjermen eller virtuell nærhetsregistrering som kombinerer andre sensorer og programvare. Det frigjør plass ved den øvre skjermkanten, men løsningen kan være mer følsom for skjermbeskyttere, smuss, glasskader og feil i fastvaren.

## Hvor sitter sensoren?

På eldre telefoner med en synlig øvre skjermkant sitter den vanligvis ved siden av ørehøyttaleren, frontkameraet og omgivelseslyssensoren. Du ser den kanskje ikke, fordi den ligger bak et mørkt felt i glasset.

På nyere telefoner med kamerahull og nesten ingen skjermkant kan sensoren ligge under skjermen eller bak et mindre synlig område av frontglasset. Da er den nøyaktige plasseringen vanskeligere å gjette. Hvis du tester med hånden, dekker du først området rundt ørehøyttaleren og frontkameraet.

## Tegn på en defekt nærhetssensor

Skjermen forblir på under samtaler. Dette er det klassiske symptomet. Du legger telefonen mot øret, og kinnet begynner å trykke på knapper.

Skjermen forblir svart når du flytter telefonen bort. Du avslutter samtalen og må trykke på av/på-knappen fordi skjermen ikke våkner av seg selv.

Skjermen slår seg av mens du bruker telefonen. Det kan skje når sensoren har låst seg i nær-tilstanden fordi noe dekker den.

Utilsiktede trykk i lommen blir vanligere. Nærhetssensoren er ikke telefonens eneste forsvar mot lommeberøringer, men konstante feilmålinger øker risikoen.

## En rask test under en samtale

Ring telefonsvareren eller et annet nummer der du ikke forstyrrer noen. Dekk området ved ørehøyttaleren med håndflaten mens samtalen pågår.

Skjermen skal slå seg av raskt. Fjern hånden, så skal den slå seg på igjen innen omtrent ett sekund. Hvis det tar flere sekunder, ingenting skjer, eller skjermen flimrer mellom av og på, trenger sensoren nærmere oppfølging.

Enkelt. Irriterende nyttig.

## Bedre diagnosetester

På Samsung Galaxy-telefoner kan du prøve `*#0*#` i den medfølgende Telefon-appen og se etter sensortesten. Åpne Samsung Members, velg Få hjelp nederst på skjermen, og trykk på Vis tester under Diagnostikk. Det er den mer brukervennlige veien og bør være førstevalget hvis du helst unngår servicemenyer.

På Xiaomi-, Redmi- og POCO-telefoner kan du skrive inn `*#*#6484#*#*` eller `*#*#64663#*#*` for å åpne CIT-modus. Xiaomis støttesider anbefaler også å fjerne deksel og skjermbeskytter, rengjøre den øvre kanten, oppdatere programvaren og bruke maskinvaretesten når berøring eller sensorstyrte funksjoner oppfører seg unormalt.

På andre Android-telefoner kan du bruke Sensor Test, Sensors Multitool eller DevCheck. Åpne avlesningen for nærhetssensoren, beveg hånden over toppen av telefonen og se om verdien endres. Noen telefoner viser centimeter. Andre hopper mellom 0 og en maksimalverdi, som bare betyr nær og fjern.

Hvis verdien aldri endres, er sensoren blokkert, deaktivert, dårlig kalibrert eller defekt.

Noen eldre veiledninger anbefaler Proximity Sensor Reset. Jeg ville ikke startet der. Bruk den først etter de grunnleggende kontrollene, og ikke forvent at en kalibreringsapp fra en tredjepart kan reparere en sensor som telefonen ikke klarer å lese i det hele tatt.

## Løs de vanligste årsakene først

Rengjør toppen av skjermen. Fingerfett, støv, sminke, lo og tørkede rester kan blokkere sensorvinduet. Bruk en ren mikrofiberklut, og vær spesielt nøye rundt ørehøyttaleren.

Fjern skjermbeskytteren. Dette er en vanlig årsak på telefoner med skjult nærhetssensor eller sensor under skjermen. Beskytteren kan være for tykk, for mørk ved sensorområdet eller litt feilplassert. Test telefonen uten beskytter før du skylder på hovedkortet.

Ta av dekselet. Et flippdeksel, høye kanter eller dårlig tilpassede utskjæringer kan forstyrre området øverst på skjermen.

Start telefonen på nytt. Sensordrivere kan låse seg, særlig etter lang oppetid eller rett etter en systemoppdatering.

Oppdater programvaren. Nærhetsregistreringen styres delvis av fastvaren. En stor plattformoppdatering kan endre sensoroppførselen, fordi produsentlaget kontrollerer maskinvaren. Android 17 kom først til de fleste støttede Pixel-enhetene, mens andre OEM-er følger med egne bygg og tidsplaner.

Sjekk samtaleinnstillingene. Enkelte Xiaomi-versjoner viser et valg for nærhetssensor under samtaleinnstillingene. Den nøyaktige stien varierer, men eldre MIUI-versjoner brukte `Settings > Apps > System app settings > Call settings > Incoming call settings > Proximity sensor`.

## Kalibrering og virtuelle sensorer

Noen diagnosemenyer har et valg for kalibrering av nærhetssensoren. Xiaomi CIT og eldre fabrikkmoduser på OnePlus er vanlige eksempler. Kjør bare kalibreringen når menyen tydelig tilbyr den, og telefonen ligger flatt, rent og uten noe som dekker sensoren.

Virtuelle nærhetssensorer er vanskeligere. Hvis telefonen beregner nærhet med programvare, finnes det kanskje ingen fysisk komponent som kan byttes. Da betyr fastvareoppdateringer mer enn reparasjon. En tilbakestilling til fabrikkinnstillinger kan fjerne en feilaktig kalibreringstilstand, men bør være siste utvei etter sikkerhetskopiering.

## Når feilen sitter i maskinvaren

Hvis sensorverdien aldri endres i diagnostikken etter rengjøring, fjerning av tilbehør, omstart, oppdatering og testing i sikkermodus, er en maskinvarefeil sannsynlig.

Fall kan skade sensorområdet eller forskyve skjermen. Vann kan korrodere sensoren eller flekskabelen. En reparasjon kan etterlate en løs kontakt eller dekke sensoren med feil type lim. Ingen av disse problemene løses med enda en sensorapp.

Når telefonen har en separat infrarød nærhetssensor, er selve komponenten liten, men arbeidstiden avgjør mye av reparasjonskostnaden. På telefoner med skjult eller skjermintegrert registrering kan reparasjonen være knyttet til hele skjermmodulen.

Er reparasjonen ikke verdt prisen, kan du fortsatt omgå problemet. Bruk av/på-knappen for å vekke skjermen under samtaler, slå på beskyttelse mot utilsiktede berøringer hvis telefonen har det, og unngå flippdeksler som dekker sensorområdet. Det er ikke perfekt, men telefonen forblir brukbar.
