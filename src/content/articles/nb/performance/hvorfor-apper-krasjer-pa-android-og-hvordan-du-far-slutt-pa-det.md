---
title: "Hvorfor apper krasjer på Android, og hvordan du får slutt på det"
description: "Android-apper krasjer av bestemte grunner. Lær å finne ut om problemet gjelder én app, WebView, lite RAM, lite lagringsplass eller en nylig Android-oppdatering."
listSummary: "Android-apper krasjer av bestemte grunner."
hub: "performance"
sourceNumber: 77
order: 14
tags: ["ytelse","hastighet","android","optimalisering","feilsøking"]
locale: "nb"
draft: false
---
---

De fleste appkrasj er ikke tilfeldige. De føles tilfeldige fordi du ikke ser feilen som utløste dem.

En app krasjer når den møter en tilstand den ikke klarer å hente seg inn fra. Android lukker den, noen ganger med en melding om at appen stadig stopper, andre ganger uten noe oppstyr. En app som krasjer ved oppstart, har et annet problem enn en som krasjer etter ti minutter. Én problemapp er noe annet enn at halve telefonen begynner å krasje samtidig.

Det er hele poenget: Ikke prøv å reparere «Android». Finn mønsteret.

## Én app krasjer hele tiden

Begynn med appens buffer. På Pixel og mange telefoner med lite endret Android går du vanligvis til **Innstillinger > Apper > Se alle apper > appnavn > Lagring og buffer > Tøm bufferen**. På Samsung er banen ofte **Innstillinger > Apper > appnavn > Lagring > Tøm bufferen**. Ordlyden kan variere med modell og programvareversjon.

Når du tømmer bufferen, fjernes midlertidige filer. Du blir ikke logget ut, og kontodataene dine slettes ikke. Krasjer appen fortsatt? Da kan du tømme lagringen eller slette dataene, men stopp opp før du gjør det. Dette nullstiller appen. I WhatsApp, Signal, notatapper, offlinekart, musikknedlastinger eller spill med lokale lagringer kan du miste noe viktig hvis du sletter data uten sikkerhetskopi.

Oppdater appen etterpå. Åpne Google Play, søk etter appen og installer en tilgjengelig oppdatering. Hvis krasjene begynte rett etter en appoppdatering, kan du sjekke de nyeste anmeldelsene i Play Store. Når mange melder om samme krasj i samme versjon, må løsningen sannsynligvis komme fra utvikleren.

Avinstaller og installer appen på nytt hvis den fortsatt ikke oppfører seg. Det er en kjedelig løsning, men den bygger opp apppakken og de lokale filene på nytt. Den virker oftere enn mange forventer.

## Mange apper begynte å krasje samtidig

Når flere apper uten noen tydelig forbindelse krasjer samme dag, bør du mistenke en felles Android-komponent. Android System WebView er det klassiske eksemplet.

WebView lar apper vise nettinnhold inne i appen i stedet for å sende deg til en nettleser. E-postapper, butikkapper, bankapper, hjelpesider, innlogging og nyhetsapper kan være avhengige av den. I mars 2021 førte en problematisk WebView-oppdatering til omfattende appkrasj, helt til Google publiserte korrigerte oppdateringer for WebView og Chrome.

Oppdater derfor WebView og Chrome først. Åpne Google Play, søk etter Android System WebView og installer oppdateringen. Gjør det samme med Google Chrome. Hvis WebView ble oppdatert rett før problemene startet og det ennå ikke finnes en rettelse, kan avinstallering av WebView-oppdateringer fungere som en midlertidig løsning på enkelte enheter. Behandle det som midlertidig, fordi WebView er en sikkerhetskritisk komponent.

Google Play services kan også skape brede problemer hvis de er utdaterte eller har låst seg. Oppdater dem hvis Google Play tilbyr en oppdatering. Start telefonen på nytt etter at systemkomponentene er oppdatert.

## Krasj på grunn av lite RAM eller lite lagringsplass

Apper kan krasje når de ber om minne Android ikke klarer å gi dem. Noen ganger avslutter Android bakgrunnsapper uten å si fra. Andre ganger er det appen du bruker, som velter.

Dette er vanlig på telefoner med 3 eller 4 GB RAM som kjører moderne apper. Spill, videoredigering, kameraapper og nettlesere med mange faner er typiske problemområder. En meldingsapp kan fungere hele dagen og så krasje når du prøver å legge ved en stor video, fordi akkurat den handlingen trenger mer minne.

Nesten full lagring kan også se ut som en appfeil. Apper trenger plass til bufferfiler, nedlastinger, databaser og oppdateringer. Når den interne lagringen er nesten full, kan skrivingen mislykkes. Å frigjøre 1 eller 2 GB kan være nok til å stoppe krasjene på en svært full telefon, men et bedre mål er å holde minst 10-15 % av lagringen ledig.

Sjekk **Innstillinger > Lagring**. Slett store videoer, gamle nedlastinger, duplikater, ubrukte apper og APK-filer du ikke trenger. Tøm også papirkurven i galleri- og filapper hvis slettede filer beholdes i 30 dager.

## Krasj etter en Android-oppdatering

Store systemoppdateringer endrer underlaget alle apper kjører på. Android 17 er det aktuelle eksemplet. Google lanserte versjonen 16. juni 2026 og gjorde den først tilgjengelig på de fleste støttede Pixel-modellene. Andre produsenter følger senere etter sine egne planer. Hvis en app allerede lå på grensen til å være kompatibel, kan en stor oppdatering avsløre det raskt.

Oppdater appene etter systemoppdateringen. Oppdater deretter WebView, Chrome, Google Play services og appen som krasjer. Start telefonen på nytt én gang. Hvis oppdateringen nettopp ble installert, bør du gi telefonen noen timer til å optimalisere apper og bygge opp buffere i bakgrunnen.

Hvis bare én app krasjer etter Android 17, må utvikleren sannsynligvis oppdatere den. Det kan hjelpe å tømme buffer og data hvis gamle lokale filer utløser feilen, men det reparerer ikke kode som er inkompatibel med den nye Android-versjonen.

Hvis mange apper krasjer etter oppdateringen, bør du se etter en systemrettelse fra telefonprodusenten. Pixel-brukere bør kontrollere de månedlige oppdateringene. Samsung, Xiaomi, OnePlus, OPPO og andre sender rettelser gjennom sine egne oppdateringskanaler, ofte senere enn Pixel.

## Sikker modus viser om en annen app forstyrrer

Sikker modus starter Android med nedlastede apper deaktivert. Appene fjernes ikke. Du får bare et renere miljø å teste i.

På Pixel 6 og nyere åpner du strømmenyen ved å holde inne av/på-knappen og volum opp. Trykk og hold deretter på **Slå av** eller **Start på nytt**, og bekreft oppstart i **Sikker modus**. På Samsung kan du slå av telefonen, starte den igjen og holde volum ned inne når Samsung-logoen vises. Fremgangsmåten og ordlyden på Xiaomi varierer, men mange modeller går inn i Sikker modus når du holder volum ned under oppstart.

Hvis krasjene stopper i Sikker modus, er det sannsynligvis en nedlastet app som forstyrrer. Start normalt og avinstaller først nylig installerte eller påtrengende apper: ryddeapper, batterisparere, antivirus, VPN-er, alternative startskjermer, automatiseringsverktøy og apper med tilgjengelighetstillatelse.

Hvis krasjene fortsetter i Sikker modus, er årsaken mer sannsynlig systemprogramvare, lagring, maskinvare eller en forhåndsinstallert app.

## Når appen fryser i stedet for å krasje

En melding om at en app ikke svarer, er en ANR, forkortelse for Application Not Responding. Appen har ikke nødvendigvis krasjet ennå. Android varsler om at den ikke svarte raskt nok.

For brukerinput er standardgrensen i AOSP og på Pixel 5 sekunder. For broadcast receivers er grensen lengre og avhenger av prioritet og Android-versjon. På Android 14 og nyere er den vanligvis 10-20 sekunder for forgrunnsprioriterte broadcasts og 60-120 sekunder for bakgrunnsprioriterte broadcasts. Produsenter kan bruke andre grenser. For deg føles resultatet likt: Du trykker, venter, og ingenting skjer.

Trykk på **Vent** hvis appen arbeider med noe du vil beholde, for eksempel videoeksport eller sending av en stor fil. Trykk på **Lukk** hvis den tydelig har låst seg. Gjentatte ANR-er i samme app betyr ofte at appen gjør for mye arbeid på hovedtråden, venter på en treg nettverksforespørsel eller kjemper med lite minne.

## Hva du ikke bør installere

Ikke installer apper som lover å reparere krasj, øke RAM eller forbedre stabiliteten. De kan ikke reparere koden i en annen app. I beste fall tømmer de buffer og tvinger bakgrunnsapper til å lukkes. I verste fall legger de til enda en tjeneste som alltid kjører på en telefon som allerede har lite minne.

Tiltakene som virker, er lite spennende: Oppdater appen, tøm bufferen, slett data bare når det er trygt, installer på nytt, frigjør lagringsplass, test Sikker modus og vent på utvikleren eller produsenten når feilen ligger hos dem.

Krasj skader ikke telefonen. De kan derimot føre til at ulagret arbeid går tapt. Hvis appen krasjer mens den lagrer bilder, notater eller dokumenter, bør du slutte å stole på den til dataene er sikkerhetskopiert.
