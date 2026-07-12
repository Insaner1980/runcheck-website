---
title: "Slik tester du NFC på Android"
description: "Enkle måter å sjekke om NFC virker på en Android-telefon, ved hjelp av Innstillinger, kontaktløse kort, Google Wallet, Samsung-diagnostikk, Xiaomi CIT og NFC-testapper."
listSummary: "diagnostikk, sensorer og android"
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnostikk","sensorer","android","maskinvare","guide"]
locale: "nb"
draft: false
---
Du holder telefonen mot en betalingsterminal, og ingenting skjer. Nå har du to problemer: Betalingen gikk ikke gjennom, og du vet ikke om årsaken er NFC, Google Wallet, kortet, dekselet eller terminalen.

Begynn i det små. NFC er enkelt å teste hvis du skiller vanlig maskinvareavlesning fra betalinger.

## Sjekk om telefonen har NFC

Åpne Innstillinger og søk etter NFC. På mange Android-telefoner finner du valget under `Innstillinger > Tilkoblede enheter > Tilkoblingsinnstillinger > NFC`. På Samsung ligger NFC og kontaktløs betaling under tilkoblingsinnstillingene, der du også kan kontrollere betalingsappen.

Hvis NFC-valget ikke finnes, har telefonen sannsynligvis ingen NFC-brikke. Det er fortsatt vanlig på rimeligere Android-telefoner, særlig budsjettmodeller som selges i flere regionale varianter. Én utgave av en telefon kan ha NFC, mens en annen med nesten samme navn mangler det.

Slå på NFC før du tester. Kontroller også standardappen for betaling hvis du tester Google Wallet, Samsung Pay eller Samsung Wallet, avhengig av hva som er tilgjengelig i regionen og på telefonmodellen din.

## Test med et kontaktløst kort

Dette er den enkleste maskinvaretesten. Bruk et kontaktløst bankkort, reisekort, adgangskort eller en NFC-brikke. Hold det flatt mot baksiden av telefonen og flytt det sakte rundt den øvre halvdelen av enheten.

Hvis NFC virker, vibrerer telefonen vanligvis, spiller av en lyd, åpner en Wallet-melding eller viser en melding om en ukjent brikke. Alle disse reaksjonene betyr at NFC-leseren og antennen er aktive.

Skjer det ingenting? Ta av dekselet og prøv igjen. Metallplater, magnetfester, ringholdere og tykke lommebokdeksler kan blokkere eller svekke NFC-signalet. Rekkevidden er kort, så små endringer i plasseringen har betydning.

## Test med en betalingsterminal

En vellykket kontaktløs betaling er en sterk test i praksis, fordi den kontrollerer mer enn enkel avlesning av en brikke. Telefonen må ha NFC slått på, en støttet Wallet-app, et gyldig kort, skjermlås og riktig standardoppsett for betaling.

For Google Wallet anbefaler Google at du kontrollerer NFC under `Innstillinger > Tilkoblede enheter > Tilkoblingsinnstillinger > NFC`, åpner `Kontaktløs betaling` og velger Google Wallet som standard betalingsapp. På Samsung finner du de tilsvarende kontrollene på siden for NFC og kontaktløs betaling under tilkoblingsinnstillingene.

Hvis telefonen leser brikker, men betalinger mislykkes, er NFC-brikken sannsynligvis ikke problemet. Se heller på Wallet-oppsettet, bankens støtte, skjermlåsen, Google Play Services, enhetsintegriteten eller standardappen for betaling.

## Bruk en diagnosemeny eller app

Samsungs støttede vei er diagnostikken i Samsung Members. Den viser ikke alltid en egen NFC-test på alle modeller, men kan kontrollere mange komponenter og lede deg videre til service hvis en test mislykkes.

Telefoner fra Xiaomi, Redmi og POCO inkluderer ofte NFC i CIT-testpakken. Åpne ringeappen og skriv inn `*#*#6484#*#*`, eller prøv `*#*#64663#*#*` hvis den første koden ikke virker. Hold et kort eller en NFC-brikke nær telefonen i NFC-testen og vent på resultatet.

Fairphone-modeller har historisk hatt en manuell NFC-test i en servicemeny, men kodene varierer mellom generasjonene. Bruk den offisielle støtteveien for akkurat din modell når det er mulig.

For en rask appbasert kontroll kan NFC Check vise om Android rapporterer at NFC-maskinvare finnes, og om den er slått på. NFC Tools er bedre hvis du vil lese brikker og se brikke-ID, teknologitype og NDEF-poster.

## Finn antennens plassering

NFC-antennen sitter ikke på samme sted i alle telefoner.

På mange Samsung Galaxy S-modeller ligger den rundt øvre del av midten på baksiden, nær kameraområdet. På Pixel sitter den vanligvis øverst på baksiden. På telefoner fra Xiaomi og OnePlus varierer plasseringen mer mellom modellene.

Derfor kan én telefon virke når du legger kamerahumpen mot leseren, mens en annen bare virker når midten av baksiden treffer. Hvis brukerveiledningen til telefonen har en NFC-illustrasjon, bør du stole på den fremfor generelle råd.

## Vanlige grunner til at NFC ikke virker

Dekselet blokkerer signalet. Det er kjedelig, men vanlig. Test telefonen uten deksel før du endrer innstillinger.

Du holder den mot feil sted. Flytt kortet eller telefonen sakte. Ikke vift den rundt som om du skanner en strekkode.

NFC er slått av, eller feil Wallet-app er valgt. Søk etter NFC og kontaktløs betaling i Innstillinger.

Telefonen er låst når Wallet krever opplåsing. Enkelte Android-versjoner kan lese brikker når skjermen er på, mens betaling krever autentisering. Betaling bør testes separat fra vanlig brikkeavlesning.

En nylig oppdatering endret oppførselen. Android 17 kom først til Pixel-enhetene som støttes, mens andre Android-produsenter håndterer systemet gjennom sine egne utrullinger. Hvis et NFC-problem oppstår rett etter en Pixel-oppdatering, bør du se etter Pixel-spesifikke støttemeldinger i stedet for å anta at det samme gjelder Samsung, Xiaomi eller OnePlus.

Telefonen har vært reparert. NFC-antenner er ofte en del av bakdekselet, spolen for trådløs lading eller en flekskabelmodul. Hvis NFC sluttet å virke etter bytte av batteri eller bakdeksel, kan antennen være koblet til feil eller ikke være koblet til i det hele tatt.

## Når maskinvaren sannsynligvis er død

Hvis NFC er slått på, dekselet er fjernet, flere kort og brikker ikke gir noen reaksjon, sikkermodus ikke endrer noe og en diagnoseapp fortsatt ikke registrerer NFC-aktivitet, blir maskinvarefeil sannsynlig.

Selve brikken kan svikte, men skade på antennen er vanligere. Fall, væskeskade, reparasjon av bakdekselet og dårlig festede flekskabler er alle mulige årsaker.

For de fleste handler spørsmålet til slutt om NFC er verdt å reparere. Hvis du bruker kontaktløs betaling hver dag, kan reparasjon være fornuftig. Hvis telefonen er eldre og alt annet virker, kan en smartklokke med kontaktløs betaling være en rimeligere omvei.
