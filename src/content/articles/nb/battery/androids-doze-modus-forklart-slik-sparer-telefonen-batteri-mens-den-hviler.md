---
title: "Androids Doze-modus forklart: slik sparer telefonen batteri mens den hviler"
description: "Androids Doze-modus reduserer batteriforbruket i hvilemodus ved å utsette bakgrunnsarbeid når telefonen ikke er i bruk. Her ser du hva som begrenses, hvorfor varsler kan komme sent, og når en app bør unntas."
listSummary: "batteri, optimalisering og android"
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Drain"
tags: ["batteri","optimalisering","android","tips","ytelse"]
locale: "nb"
draft: false
---
Hvorfor kom ti varsler i samme øyeblikk som du tok opp telefonen? Svaret er ofte Doze.

Doze er Androids innebygde system for hvilemodus. Du slår det ikke på selv, og de fleste ser aldri en egen Doze-side i Innstillinger. Systemet arbeider stille når telefonen ikke lades, skjermen er av og Android bestemmer at appene ikke lenger skal få kjøre akkurat når de vil.

Android 17 er nå den gjeldende plattformversjonen på de fleste støttede Pixel-enheter, mens andre produsenter følger etter etter egne tidsplaner. Det endrer ikke de grunnleggende rådene om Doze. Det som betyr noe for brukeren, er fortsatt færre oppvåkninger i bakgrunnen, lengre batteritid i hvilemodus og av og til forsinkede varsler som ikke haster.

## Hva Doze gjør

Når Doze er aktivt, begrenser Android det kostbare arbeidet. Apper mister vanlig nettverkstilgang. Standardalarmer utsettes. Oppgaver og synkronisering venter. Wake locks ignoreres i de dype delene av hvilesyklusen. Wifi-søk stopper også mens Doze er aktivt.

Enheten er ikke frosset for alltid. Android åpner korte vedlikeholdsvinduer der utsatt arbeid kan kjøres samlet. Apper synkroniserer, oppgaver i kø utføres, og varsler med normal prioritet kan dukke opp. Deretter går Android tilbake til hvilemodus.

Det er hele trikset. Det krever mye mindre strøm å samle bakgrunnsarbeidet i puljer enn å la hver app vekke CPU-en og radioen når den føler for det.

## Når Doze slår inn

Doze kom først i Android 6.0 (API 23). Den opprinnelige versjonen krevde at enheten ikke var tilkoblet lader, lå stille og hadde hatt skjermen av en stund. Android 7.0 la til det som ofte kalles «Doze on the go». Det gir et lettere sett med begrensninger når telefonen ikke lades og skjermen har vært av, selv om enheten beveger seg i lommen.

I praksis får moderne Android-telefoner vanligvis hjelp på to nivåer. De får lettere begrensninger mens de bæres rundt, og strengere begrensninger etter at de har ligget stille en stund.

Produsentenes programvare gjør dette mer uoversiktlig. Pixel-telefoner ligger ofte nær Googles referanseatferd. Samsung, Xiaomi, OnePlus, Oppo og andre legger egne lag med batteristyring oppå. Noen ganger hjelper det. Andre ganger blir styringen for aggressiv og ødelegger varsler.

## Hva som blir forsinket

Den tydeligste forsinkelsen gjelder synkronisering i bakgrunnen. E-post kan bli sjekket sjeldnere. En notatapp kan synkronisere senere. En værmodul kan vente til neste vedlikeholdsvindu i stedet for å oppdatere med én gang.

Arbeid som utvikleren har planlagt, påvirkes også. Oppgaver fra `JobScheduler` og `WorkManager` venter vanligvis mens Doze er aktivt. Standardalarmer fra `AlarmManager` utsettes også, men alarmer som er satt i en vanlig vekkerklokkeapp, skal fortsatt gå til riktig tid.

Anrop og SMS skal ikke vente på et vedlikeholdsvindu. Varsler med høy prioritet fra Firebase Cloud Messaging (FCM) kan også vekke en app kort, slik at den får vist et tidskritisk varsel. Derfor føles WhatsApp, Signal, Telegram og lignende apper vanligvis umiddelbare, forutsatt at appen og produsentens batteriinnstillinger er satt opp riktig.

Pushmeldinger med normal prioritet er annerledes. Hvis appen bruker dem til bakgrunnsoppdateringer eller varsler som ikke haster, kan Android holde dem tilbake til neste vedlikeholdsvindu.

## Hvorfor varsler kommer sent

Forsinkede varsler er ikke alltid en feil. De er ofte kompromisset Doze er laget for å gjøre.

Et kampanjevarsel fra en leveringsapp, et likerklikk i sosiale medier eller et nyhetsvarsel kan vente noen minutter hvis det hjelper telefonen med å hvile. En jobbmelding, alarm, innkommende samtale eller sikkerhetsvarsling bør ikke vente. Gode apper bruker riktig prioritet til riktig type melding. Dårlige apper krever enten for høy prioritet eller integrerer ikke FCM riktig og baserer seg på gjentatte kontroller i bakgrunnen.

Det irriterende er at brukeren ikke får en ryddig forklaring. Du ser bare at meldingene kommer sent og må finne årsaken baklengs.

Begynn med appens egne varslingsinnstillinger. Kontroller deretter telefonens batteriinnstillinger for appen. På Pixel kan du åpne appens side under **Innstillinger > Apper > Batteribruk for apper** og se om bakgrunnsbruk er begrenset. På Samsung går du til **Innstillinger > Batteri og enhetsvedlikehold > Batteri > Grenser for bakgrunnsbruk** og kontrollerer at appen ikke ligger under **Apper i dvalemodus** eller **Apper i dyp dvale**.

## Slik unntar du apper fra Doze

Android lar deg unnta bestemte apper fra batterioptimalisering. På standard Android ligger listen vanligvis under **Innstillinger > Batteri > Batterioptimalisering**. Finn appen og velg alternativet som gjør at den ikke optimaliseres, eller den tilsvarende formuleringen på telefonen din.

Vær selektiv. Hvert unntak gir en app større frihet til å kjøre i bakgrunnen, og for mange unntak gjør Doze mindre nyttig. Meldingsapper, VPN-er, medisinske apper, sikkerhetsapper og enkelte jobbapper kan være rimelige kandidater. En shoppingapp er det ikke.

Google Play-reglene begrenser også når apper bør be brukeren om fritak fra Androids strømstyring. Den korte forklaringen er enkel: Et unntak bør forbeholdes apper der kjernefunksjonen faktisk slutter å virke uten det.

## Slik ser du om Doze hjelper

Den enkleste testen for vanlige brukere er batteritap gjennom natten. Lad telefonen, koble den fra før du legger deg, la skjermen være av og se hvor mye batteriet har falt om morgenen. Noen få prosent er normalt. Et tap på 15 % eller 25 % med skjermen av betyr at noe vekker telefonen for ofte, signalet er dårlig, eller batteriet begynner å bli slitt.

Batteristatistikken sier ikke alltid «Doze sviktet». Den kan vise Android System, Google Play-tjenester, mobilnett eller en vag appoppføring. Derfor sier forbruket med skjermen av mer enn én enkelt batterigraf. Hvis en telefon mister mer enn omtrent 1-2 % i timen mens den ligger ubrukt, er det verdt å undersøke.

Utviklere kan teste Doze via ADB med `adb shell dumpsys deviceidle force-idle`, men dette er et testverktøy, ikke en vanlig innstilling for daglig bruk.

## Vanlige spørsmål

Du kan ikke slå av Doze gjennom vanlige Android-innstillinger, og du bør sannsynligvis heller ikke prøve. Doze er en av hovedgrunnene til at moderne Android-telefoner kan ligge ubrukt i mange timer uten å tømme seg selv.

Doze virker også når telefonen ligger i lommen, men ikke alltid på det dypeste nivået. Android 7.0 og nyere bruker lettere begrensninger når skjermen er av og enheten beveger seg. Den dypere modusen krever fortsatt lengre perioder med ro.

Alarmer i vekkerklokkeapper går fortsatt. Det er bakgrunnsalarmer fra apper som skyves til vedlikeholdsvinduer, med mindre de bruker API-er som er laget for alarmer som må kjøre mens enheten hviler.

Hvis én enhet har dårligere batteritid i hvilemodus enn en annen, bør du ikke straks anta at Doze er ødelagt. Signalstyrke, produsentens batteriregler, apputvalg, kontosynkronisering, moduler og batterialder kan få to Android-telefoner til å oppføre seg svært forskjellig.

runcheck kan hjelpe ved å skille batteritømming med skjermen på fra tømming med skjermen av, og vise om hvileperioder sammenfaller med nettverksaktivitet, temperatur eller aktivitet i bakgrunnen. Det er langt mer nyttig enn å gjette ut fra ett prosentfall gjennom natten.
