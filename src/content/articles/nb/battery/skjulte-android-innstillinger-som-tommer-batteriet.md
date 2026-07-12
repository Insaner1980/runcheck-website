---
title: "Skjulte Android-innstillinger som tømmer batteriet"
description: "Android kan holde Wi-Fi-søking, Bluetooth-søking, bakgrunnssynkronisering, posisjonskontroller og alltid-på-skjerm (AOD) aktive selv når du ikke bruker telefonen. Disse innstillingene er verdt å sjekke hvis strømforbruket i hvilemodus er for høyt."
listSummary: "android, oppdateringer og sikkerhet"
hub: "battery"
sourceNumber: 33
order: 23
subgroup: "Drain"
tags: ["android","oppdateringer","sikkerhet","programvare","guide"]
locale: "nb"
draft: false
---
Mye batteritømming på Android skjer mens du ikke gjør noe særlig. Skjermen er av, telefonen ligger på bordet, og likevel synker batterinivået fordi apper, radioer, sensorer og kontosynkronisering stadig vekker enheten.

Android 17 ble først tilgjengelig på de fleste støttede Pixel-enheter i juni 2026, så menynavnene er i en litt rotete overgangsfase. Pixel får den nye Android-versjonen først, mens Samsung, Xiaomi, OnePlus, Motorola og andre OEM-er lanserer sine Android 17-versjoner etter egne tidsplaner. Rådene nedenfor gjelder fortsatt, men den nøyaktige banen kan ligge ett nivå høyere eller lavere avhengig av telefonen.

## Appaktivitet i bakgrunnen

Dette er vanligvis det første stedet du bør se. Apper kan synkronisere data, hente oppdateringer, se etter varsler, laste opp logger, oppdatere moduler og holde wake locks uten at det merkes. Sosiale medier, shoppingapper, nyhetsapper, skylagring og dårlig utviklede verktøyapper er vanlige syndere.

På Pixel og standard Android begynner du under **Innstillinger > Batteri > Batteribruk**. Åpne appvisningen og se etter apper som bruker strøm lenge etter at du sluttet å bruke dem. På nyere Pixel-versjoner kan du også gå til **Innstillinger > Apper > Batteribruk for apper**, åpne en app og kontrollere **Tillat bruk i bakgrunnen**. **Optimalisert** er et fornuftig utgangspunkt for de fleste apper.

Begrens bakgrunnsbruken for apper som ikke trenger å fortsette etter at du lukker dem. Spill, shoppingapper, reiseapper du bare åpner manuelt, matleveringsapper og tilfeldige verktøy er gode kandidater. Ikke begrens meldingsapper, jobb-e-post, VPN-er, helseovervåking, familiesikkerhetsapper eller noe annet der forsinkede varsler kan skape et reelt problem.

Samsung har den samme typen kontroll under **Innstillinger > Batteri og enhetsvedlikehold > Batteri > Grenser for bakgrunnsbruk**. Det strengeste alternativet er **Apper i dyp dvale**, som passer til apper du nesten aldri bruker. Det er også lett å gå for langt. Hvis et varsel er viktig, bør ikke appen legges i dyp dvale.

Tilpasset batteri er fortsatt verdt å ha på. Funksjonen lærer hvilke apper du bruker ofte og begrenser resten mer forsiktig enn manuelle innstillinger. Den fanger ikke alt, men er et godt grunnlag.

## Wi-Fi-søking og Bluetooth-søking

Denne innstillingen føles litt skjult. Når du slår av Wi-Fi eller Bluetooth i Hurtiginnstillinger, stanser det ikke alltid Android fra å bruke radioene til posisjonssøking. Systemet kan fortsatt lete etter Wi-Fi-tilgangspunkter og Bluetooth-enheter i nærheten for å forbedre posisjonsnøyaktigheten.

På Android 12 og nyere er den vanlige banen **Innstillinger > Posisjon > Posisjonstjenester**, der du finner **wifi-skanning** og **Bluetooth-søking**. På Android 11 og eldre kan de ligge direkte under **Innstillinger > Posisjon**. Samsung plasserer dem vanligvis under **Innstillinger > Posisjon > Posisjonstjenester**.

Å slå av søkingen kan redusere små, gjentatte oppvåkninger av radioene. Ulempen er svakere posisjonering innendørs. Hvis du bruker Google Maps inne i bygninger, Finn-oversikten, geofencing for smarthjem eller posisjonsbaserte påminnelser, kan posisjonen bli tregere eller mindre presis.

For de fleste ville jeg bare slått av søkingen hvis strømforbruket i hvilemodus allerede er irriterende. På en telefon som fungerer normalt, er dette ikke den første bryteren jeg ville rørt.

## Klokke på låseskjermen og AOD

AOD er praktisk. Funksjonen gjør også akkurat det navnet lover: En del av skjermen står på hele dagen.

OLED-skjermer tenner ikke svarte piksler, så en enkel klokke på svart bakgrunn bruker lite strøm i øyeblikket. Men telefonen kan ligge ubrukt i 15 til 20 timer i løpet av et døgn. Et lite, konstant forbruk blir synlig over så lang tid, særlig hvis AOD-oppsettet bruker farger, moduler, bakgrunnsbilde eller lysere varslingselementer.

På Pixel finner du kontrollen vanligvis under **Innstillinger > Skjerm og trykk**, der du kan slå av alltid-på-skjerm. Samsung bruker **Innstillinger > Låseskjerm og AOD > Always On Display**, eller en lignende bane avhengig av One UI-versjonen.

Den beste mellomløsningen er ikke alltid å slå funksjonen helt av. Mange telefoner kan vise klokken ved berøring, bare ved nye varsler eller etter en tidsplan. Da beholder du mye av nytten uten å holde piksler tent hvert minutt hele dagen.

## Posisjonsnøyaktighet og apptillatelser

Posisjonsnøyaktighet hjelper Android med å finne deg raskere og mer presist ved å bruke mer enn GPS. Wi-Fi-tilgangspunkter, mobilmaster, sensorer, IP-adresse og enhetsdata kan alle inngå i beregningen når funksjonen er på.

Det betyr ikke at Posisjonsnøyaktighet er en dårlig funksjon. Det er en viktig grunn til at telefonen finner deg inne i bygninger der GPS-signalet er svakt. Samtidig gir den apper med posisjonstillatelse bedre mulighet til å be om posisjon i bakgrunnen, og hyppige bakgrunnsforespørsler er et vanlig mønster ved høyt batteriforbruk.

Sjekk **Innstillinger > Posisjon > Appenes posisjonstillatelser**. Alt som står under **Tillatt hele tiden**, fortjener en nærmere vurdering. Værmoduler, sosiale apper, shoppingapper, fotoapper og reiseapper trenger ofte ikke posisjon i bakgrunnen. Endre dem til **Tillatt bare når appen brukes**, med mindre bakgrunnssporing er selve poenget med appen.

På Android 12 og nyere kan du også velge omtrentlig posisjon for mange apper. Det hjelper mer på personvernet enn på batteriet, men er fortsatt en god vane. Navigasjon, aktivitetssporing og nød- eller sikkerhetsapper er de åpenbare unntakene.

## Synkronisering og kontoer

Hver konto på telefonen kan ha sin egen synkroniseringsplan. Google, Samsung, Microsoft, e-post, kalender, kontakter, skynotater, Drive, Photos, nettlesersynkronisering og tredjepartskontoer skaper alle bakgrunnsarbeid.

Gå til **Innstillinger > Passord, passnøkler og kontoer**, eller den tilsvarende kontomenyen på telefonen. Åpne hver konto og se hva som synkroniseres. Hvis dette er den eneste telefonen din, vil du sannsynligvis la kontakter, kalender og hovedkontoen for e-post være i fred. En gammel jobbkonto, en skytjeneste som ikke trenger telefonsynkronisering eller en e-postkonto du ikke lenger bruker, kan derimot fjernes eller trimmes.

Mange telefoner har også en global bryter for automatisk synkronisering. Jeg anbefaler ikke å la den være av hele tiden, fordi forsinket e-post og utdaterte kalendere er plagsomt. På reisedager, lange turer eller under strømbrudd kan det likevel hjelpe.

## Bryteren for overgang til mobilnett

Utvikleralternativene har en bryter som heter **Mobile data always active**. Når den er på, holder Android mobildataforbindelsen klar selv mens Wi-Fi er tilkoblet. Fordelen er raskere overgang når Wi-Fi forsvinner. Ulempen er at modemet kan holdes mer aktivt enn nødvendig.

Dette betyr mest når mobilsignalet er svakt. En telefon som ligger på Wi-Fi i en kjeller med én strek LTE, kan fortsatt bruke strøm på å holde mobildelen av forbindelsen i live.

For å finne bryteren må du først aktivere utvikleralternativene. Gå til **Innstillinger > Om telefonen** og trykk sju ganger på **Build number**. Åpne deretter utvikleralternativene og finn **Mobile data always active**. På Samsung vises utvikleralternativene vanligvis nederst i Innstillinger etter at de er aktivert.

Slå den av hvis telefonen tilbringer mesteparten av dagen på stabil Wi-Fi. Regn med en kort forsinkelse når Wi-Fi faller ut og telefonen går tilbake til mobildata.

## Varsler, vekking med bevegelser og små oppvåkninger

Ett varsel bruker ikke mye batteri. En hel dag med støyende varsler gjør det. Hver lyd, vibrasjon, skjermoppvåkning og låseskjermanimasjon gir telefonen enda en grunn til å forlate den dypeste hviletilstanden.

Åpne **Innstillinger > Varsler > Appvarsler** og vær streng med reklameapper. Shoppingtilbud, spillpåminnelser, strømmeanbefalinger, restauranttilbud og markedsføringsvarsler trenger ikke å vekke telefonen.

Sjekk også innstillingene for låseskjerm og bevegelser, som **Lift to wake**, **Tap to wake**, **Double tap to check phone** og tilsvarende funksjoner. De bruker strømgjerrige sensorer og er derfor ikke store batterislukere alene. Det større problemet er utilsiktede oppvåkninger i en lomme, veske eller på et bord som vibrerer.

Slå av det du ikke bruker. Behold funksjonene som faktisk gjør telefonen bedre å bruke.

## Svakt signal er det skjulte forbruket du ikke kan slå av med én bryter

Dårlig mobilsignal kan bruke mer batteri enn noen innstilling på denne listen. Når telefonen strever med å holde forbindelsen, må modemet jobbe hardere. Det skjer i distrikter, under bakken, i betongbygg, heiser og boliger der telefonen klamrer seg til én signalstrek.

Hvis du er på Wi-Fi og ikke trenger vanlige mobilanrop eller SMS en stund, kan Flymodus sammen med Wi-Fi hjelpe. Slå på Flymodus, og slå deretter Wi-Fi på igjen. Da slås mobilradioen av mens internettilgangen beholdes. Ikke gjør dette hvis du trenger vanlige mobilsamtaler, SMS eller operatørens nødfunksjoner.

Her er et verktøy som runcheck nyttig. Hvis batteritømming med skjermen av følger perioder med svakt signal i stedet for skjermbruk, er problemet ikke en mystisk app. Det er radioen.
