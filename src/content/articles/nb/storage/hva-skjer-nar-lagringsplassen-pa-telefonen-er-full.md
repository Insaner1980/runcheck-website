---
title: "Hva skjer når lagringsplassen på telefonen er full"
description: "Metabeskrivelse: En full Android-telefon kan svikte på helt vanlige måter: kamerafeil, appkrasj, oppdateringer som stopper opp og treg fillagring. Her er det som bryter sammen først, og hvor mye ledig plass du bør beholde."
listSummary: "ytelse, hastighet og android"
hub: "storage"
sourceNumber: 81
order: 3
tags: ["ytelse","hastighet","android","optimalisering","feilsøking"]
locale: "nb"
draft: false
---
---

Når lagringsplassen på Android-telefonen er full, svikter den ikke pent og ryddig. Først begynner den å oppføre seg merkelig.

Kameraet nøler. Apper fryser mens de lagrer utkast. Oppdateringer nekter å installere. Tastaturet henger etter i en chatapp som fungerte fint i går. Så viser Android et varsel om full lagringsplass, som om det forklarer hvorfor alt plutselig virker ødelagt.

Det gjør det, stort sett.

## Hva som bryter sammen først

Kameraet er ofte noe av det første du merker problemer med. Et bilde blir ikke lagret som en liten, ferdig fil i samme øyeblikk som du trykker på utløseren. Kameraappen kan trenge plass til bildebehandling, midlertidige filer, miniatyrbilder, redigeringer, seriebilder eller videobuffere. Uten arbeidsrom kan den fryse, mislykkes med å lagre eller stoppe opptaket.

Deretter kommer appene. Alle apper skriver små filer mens de kjører: buffer, logger, databaser, utkast, økttilstand, miniatyrbilder, nedlastet innhold og SQLite-journalfiler. Når disse skriveoperasjonene mislykkes, kan appen krasje eller miste det du holdt på med uten å varsle.

Systemoppdateringer trenger også plass. En månedlig oppdatering er mindre enn en full Android-oppgradering, men begge krever plass til nedlasting og installasjon. Hvis telefonen ikke kan installere oppdateringer, går du glipp av sikkerhetsrettelser og feilrettinger. Det er en dårlig byttehandel bare for å beholde gamle nedlastinger og dupliserte videoer.

## Hvorfor telefonen blir treg før det er null byte ledig

Du trenger ikke å komme ned i 0 GB ledig før telefonen blir treg. Faresonen begynner vanligvis når ledig plass faller under 10-15 %, og under 5 % blir det fort stygt.

Flashlagring trenger ledige blokker til opprydding, slitasjeutjevning og garbage collection. Når det er trangt om plassen, må kontrolleren gjøre mer arbeid før den kan skrive nye data. Vanlige skriveoperasjoner blir derfor tregere. Å lagre et bilde, installere en app, oppdatere en database eller laste ned et vedlegg kan få telefonen til å stoppe opp lenge nok til at du merker det.

Ikke bland dette sammen med zRAM. De fleste Android-telefoner bruker zRAM som komprimert minne inne i RAM, ikke som en vanlig swapfil i intern lagring. Full lagringsplass betyr ikke direkte at «Android ikke lenger kan bruke swap». Problemet er at apper og systemet fortsatt trenger lagringsplass til ekte filer mens de kjører.

Android 17 innfører strengere minnegrenser for apper, men det fjerner ikke behovet for ledig lagringsplass. Minnepress og lagringspress er to forskjellige problemer. De føles bare ganske like når du stirrer på en skjerm som har frosset.

## Det som fyller lagringsplassen uten å spørre

Meldingsapper er den vanlige synderen. WhatsApp, Telegram, Discord og lignende apper kan laste ned bilder, videoer, talemeldinger, klistremerker, GIF-er og dokumenter fra alle aktive grupper du deltar i. Noen måneder med gruppemedier kan ta mer plass enn kamerarullen.

Nedlastinger-mappen er en annen gravplass. PDF-er, APK-installasjonsfiler, ZIP-filer, skjemaer, skjermbilder, fakturaer og filer du åpnet én gang fra e-post, blir liggende til du fjerner dem.

Frakoblede medier vokser også i det stille. Spotify-spillelister, Netflix-episoder, YouTube-nedlastinger, podkastepisoder, lydbøker og frakoblede områder i Google Maps ligger i appens egen lagring. Du ser ikke nødvendigvis filene i filbehandleren, men de vises under **Innstillinger > Apper > [Appnavn] > Lagring**.

Papirkurven kan også lure deg. MediaStore-basert papirkurvstøtte kom med Android 11, og apper som Files by Google kan beholde slettede elementer i papirkurven i omtrent 30 dager hvis du ikke tømmer den. Google Photos har egne regler for papirkurven. Samsung Gallery og My Files har også hver sin papirkurv. Hvis du slettet en haug med videoer og tallet for brukt lagringsplass knapt endret seg, bør du sjekke papirkurvene.

## Hvor mye ledig plass du bør beholde

Prøv å holde 15-20 % av lagringsplassen ledig. På en enhet med 64 GB betyr det omtrent 10 GB. Med 128 GB bør du om mulig beholde rundt 20 GB ledig.

Denne bufferen gir Android arbeidsrom til appoppdateringer, kamerabehandling, bufferfiler, databaseskriving, nedlastinger og vedlikehold av lagringen. Du trenger ikke å detaljstyre dette hver dag. Men du bør slutte å betrakte 2 GB ledig som «nok».

Hvis telefonen har 32 GB eller 64 GB lagringsplass, kan det være umulig å holde god margin med moderne apper, bilder og medier fra meldingstjenester. Det er ikke din feil. Enheter med lite lagringsplass har eldet dårlig.

runcheck følger lagringsbruken som en del av enhetens helseoversikt og varsler om lite ledig plass før telefonen når krisemodus. Detaljvisningen for lagring hjelper deg også med å skille mellom bilder, videoer, lyd, dokumenter, nedlastinger og andre kategorier, slik at oppryddingen bygger på fakta i stedet for tilfeldig sletting.

## Vanlige spørsmål

### Kan full lagringsplass skade telefonen permanent?

Vanligvis ikke. Det kan gjøre slitasjeutjevningen mer krevende for lagringskontrolleren, men du ødelegger neppe NAND-brikken bare fordi telefonen har blitt full noen ganger. Den større risikoen er praktisk: manglende oppdateringer, bilder som ikke blir lagret, ødelagte appdata og en telefon som blir svært frustrerende å bruke.

### Løser en tilbakestilling til fabrikkinnstillinger problemet?

Den frigjør plass, men er det mest brutale verktøyet du kan bruke. Hvis WhatsApp-medier, frakoblede videoer og kamerafiler fylte telefonen én gang, vil de gjøre det igjen. Rydd opp i kildene først.

### Hvorfor stemmer ikke tallene overens?

Android, systempartisjoner, forhåndsinstallerte apper, appdata, miniatyrbilder, papirkurver og kategorietiketter går ikke alltid pent opp i hverandre. Oppgitt kapasitet er heller ikke det samme som brukbar kapasitet. Tallet på esken tilsvarer aldri plassen du faktisk kan bruke til egne filer.

### Løser et SD-kort problemet?

Det hjelper for bilder, videoer, musikk og dokumenter hvis telefonen fortsatt har kortplass. For apper er det mindre nyttig. Mange apper kan ikke flyttes til SD-kort, og selv når det er mulig, er et microSD-kort langt tregere enn intern UFS-lagring. Bruk kortet til medier, ikke som redningsplanke for en telefon som burde hatt mer intern lagring fra starten.
