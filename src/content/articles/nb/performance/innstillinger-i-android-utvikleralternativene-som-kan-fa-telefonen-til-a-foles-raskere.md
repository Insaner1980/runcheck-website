---
title: "Innstillinger i Android-utvikleralternativene som kan få telefonen til å føles raskere"
description: "Which Android Developer Options can make a phone feel faster, which ones are risky, and what to leave alone."
listSummary: "Which Android Developer Options can make a phone feel faster, which ones are risky, and what to leave alone."
hub: "performance"
sourceNumber: 69
order: 6
tags: ["ytelse","hastighet","android","optimalisering","feilsøking"]
locale: "nb"
draft: false
---
Utvikleralternativene er ikke en hemmelig turbomodus. Det meste av menyen finnes for testing av apper, feilsøking og visuell diagnostikk. Noen få innstillinger kan få en Android-telefon til å føles raskere. Flere gjør ingenting nyttig i vanlig bruk. En håndfull kan gjøre telefonen dårligere.

Den nyttige delen er liten, og det er egentlig gode nyheter. Du trenger ikke røre tjue brytere. For de fleste er det beste oppsettet animasjonsskalaer på 0,5x, kanskje frysing av bufrede apper hvis telefonen viser valget, og resten urørt.

## Slik aktiverer du utvikleralternativene

Åpne **Innstillinger > Om telefonen**, og trykk sju ganger på **Versjonsnummer**. Android viser en nedtelling og bekrefter deretter at utvikleralternativene er aktivert.

Den nøyaktige banen avhenger av telefonen:

- Google Pixel: **Innstillinger > Om telefonen > Versjonsnummer**
- Samsung Galaxy: **Innstillinger > Om telefonen > Programvareinformasjon > Build number**
- OnePlus: På nyere OxygenOS-versjoner kan banen være **Settings > About device > Version > Build number**, mens eldre versjoner bruker **Settings > About phone > Build number**
- Xiaomi, Redmi og POCO: **Settings > About phone > OS version** eller **MIUI version**, avhengig av programvareversjonen

Etterpå finner du utvikleralternativene under **Innstillinger > System**, **Settings > Additional settings** eller direkte i hovedlisten i Innstillinger, avhengig av produsenten.

Ingenting endres bare fordi menyen er synlig. Telefonen blir ikke rootet, garantien forsvinner ikke, og apper får ikke plutselig flere tillatelser. Innstillingene i menyen får først betydning når du endrer dem.

## Begynn med animasjonsskalaene

Dette er den ene justeringen jeg ville anbefalt uten særlig nøling.

Android bruker animasjoner når du åpner apper, går tilbake til startskjermen, bytter skjermbilde, åpner menyer og beveger deg mellom oppgaver. De får systemet til å virke jevnt, men legger også inn en liten forsinkelse i hver handling. På en rask telefon merker du det knapt. På en eldre Galaxy A-modell eller en rimelig Motorola med tregere lagring kan overgangene få hele telefonen til å føles et halvt steg bak deg.

Rull til delen **Drawing** i utvikleralternativene, og finn:

- **Window animation scale**
- **Transition animation scale**
- **Animator duration scale**

Sett alle tre til **0,5x**.

Det reduserer avspillingstiden for systemanimasjonene. Telefonens maskinvare laster ikke apper raskere, men neste skjerm vises tidligere. Dette er den ryddigste gratisforbedringen, fordi du ikke sletter data, begrenser apper eller endrer batterioppførselen.

Å slå animasjonene **Off** er raskere, men jeg liker det ikke som førstevalg. Noen apper føles brå uten visuelle overganger, og enkelte skjermbilder ser ut til å dukke opp i stedet for å bevege seg naturlig. Prøv 0,5x først. Hvis du fortsatt foretrekker øyeblikkelige overganger, kan du teste Off.

## Bruk bakgrunnsprosessgrensen bare på telefoner med lite RAM

**Background process limit** styrer hvor mange bakgrunnsprosesser Android tillater før systemet fjerner dem mer aggressivt. Standardvalget er **Standard limit**, som lar Android styre minnet selv.

På en telefon med 8 GB RAM eller mer bør du la den stå. Android er vanligvis bedre til å styre bakgrunnsapper enn du er, og manuelle grenser kan gjøre fleroppgavekjøringen dårligere.

På en telefon med 4 GB RAM kan innstillingen noen ganger gjøre appen du bruker, mer stabil. Prøv **At most 4 processes** først. Hvis telefonen er svært enkel og laster inn apper på nytt uansett, kan **At most 2 processes** være verdt å teste i ett døgn.

Det har en pris. Apper lastes inn på nytt oftere når du går tilbake til dem. Musikk, trening, meldinger, VPN-er, passordbehandlere og smarthusapper kan oppføre seg dårlig hvis de presses ut for aggressivt. Hvis varsler blir forsinket eller viktige apper slutter å gjøre bakgrunnsarbeid, går du tilbake til **Standard limit**.

Dette er ikke en ytelsesoppgradering du slår på og glemmer. Det er et feilsøkingsverktøy for telefoner som mangler RAM.

## Frysing av bufrede apper er nyttig, men ikke alltid synlig

Noen telefoner viser en innstilling som heter **Suspend execution for cached apps** eller noe lignende. Navnet høres teknisk ut, men ideen er enkel: Når en app ligger bufret i bakgrunnen, kan Android beholde den i RAM samtidig som prosessorarbeidet stoppes.

Det kan redusere prosessorbruk og batteriforbruk i bakgrunnen uten at appen må kaldstartes hver gang du går tilbake til den. Android har støttet frysing av bufrede apper siden Android 11, og fra Android 14 ble oppførselen mer omfattende og forutsigbar. På mange nyere telefoner styrer produsenten dette allerede i bakgrunnen, så valget i utvikleralternativene kan mangle, være låst eller være unødvendig.

Hvis telefonen viser valget, kan du teste det. Hvis ingenting slutter å virke, kan du la det stå på. Hvis en treningsapp, musikkapp, VPN eller meldingsapp begynner å oppføre seg merkelig, slår du det av igjen eller unntar appen i batteriinnstillingene.

Ikke let desperat etter innstillingen hvis du ikke finner den. Fravær betyr ikke at telefonen er ødelagt.

## Høy oppdateringsfrekvens føles jevnere, ikke raskere

Noen telefoner har **Force peak refresh rate** i utvikleralternativene. Den holder en skjerm på 90 Hz, 120 Hz eller 144 Hz på maksimal oppdateringsfrekvens oftere, i stedet for å gå ned til 60 Hz når systemet vil spare strøm.

Rulling og bevegelser kan føles jevnere. Det får ikke apper til å åpne raskere, forbedrer ikke dekningen og reparerer ikke hakking som skyldes lite ledig lagringsplass. På mange telefoner bruker det også mer batteri, særlig på skjermer uten LTPO som ikke kan skalere oppdateringsfrekvensen effektivt.

Bruk det hvis jevnhet er viktigere enn batteritid. Hopp over det hvis hovedproblemet er treg appstart eller høyt batteriforbruk etter oppdateringer.

## Tvungen mørk modus er mest en smakssak

**Override force-dark** prøver å gi mørkt tema til apper som ikke støtter det ordentlig. På OLED-telefoner kan mørke grensesnitt bruke mindre strøm når store deler av skjermen er svarte. Ytelse er ikke hovedpoenget.

Problemet er kompatibilitet. Noen apper får tekst med dårlig kontrast, merkelige bakgrunner eller ødelagte ikoner. Hvis du liker mørk modus, kan du prøve. Hvis en app ser feil ut, slår du det av. Det er ingen grunn til å behandle dette som en hastighetsinnstilling.

## Loggbufferstørrelsen er ingen mirakelløsning

Du kan finne råd om å sette **Logger buffer sizes** til **64K**. Jeg ville ikke lagt mye vekt på det.

Loggerbuffere lagrer systemlogger til feilsøking. Mindre buffere kan bruke litt mindre minne, men forskjellen i faktisk hastighet på moderne telefoner er vanligvis for liten til å merkes. På en svært gammel telefon med lite minne kan du teste en mindre verdi, starte på nytt og se om noe endrer seg. Ikke forvent mye.

Hvis du senere må samle logger til en feilrapport, bør du bruke en større buffer igjen. Små buffere overskriver logghistorikken raskt.

## Innstillinger jeg ville latt være i fred

**Don't keep activities** høres ut som en måte å spare minne på, men gjør vanligvis telefonen tregere. Den avslutter hver aktivitet så snart du forlater den, slik at appene hele tiden må bygge opp skjermene på nytt. Det koster både tid og batteri.

**Force 4x MSAA** kan gi jevnere kanter i enkelte OpenGL ES-spill, men øker belastningen på GPU-en og batteriforbruket. Det er ikke en generell ytelsesinnstilling.

**Disable HW overlays** er laget for grafikkfeilsøking. Den kan øke prosesseringsarbeidet og bør ikke brukes som en fast hverdagsinnstilling.

**Show layout bounds**, **Show surface updates**, **Profile GPU rendering** og **Pointer location** er visuelle feilsøkingsverktøy. De skaper rot og kan legge til ekstra belastning.

**USB debugging** bør være av med mindre du faktisk bruker ADB sammen med en datamaskin du stoler på. Det er nyttig for utviklere og feilsøking, men gjør ikke telefonen raskere.

## Det praktiske oppsettet

For de fleste telefoner holder dette:

- Sett alle tre animasjonsskalaene til **0,5x**.
- La **Background process limit** stå på **Standard limit**, med mindre telefonen har 4 GB RAM eller mindre og fleroppgavekjøringen allerede er dårlig.
- Bruk **Suspend execution for cached apps** bare hvis telefonen tilbyr valget og de viktige appene fortsatt fungerer normalt.
- La innstillinger for logging, GPU, overlegg og ødeleggelse av aktiviteter være i fred.

Det er hele trikset. Utvikleralternativene kan hjelpe, men de største forbedringene kommer fortsatt fra kjedelig vedlikehold: nok ledig lagringsplass, oppdaterte apper, færre unødvendige bakgrunnstjenester og et batteri som ikke er utslitt.
