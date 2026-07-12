---
title: "Slik finner du skjult batteritømming på Android"
description: "Hvorfor skylder batteriskjermen på Android System eller Google Play services når det egentlige problemet sannsynligvis er en app, en synkroniseringsløkke, posisjon eller modemet? Fordi disse systemoppføringene ofte utfører arbeid på vegne av andre ting. Irriterende, ja. Ubrukelig, nei."
listSummary: "batteri, strømforbruk og feilsøking"
hub: "battery"
sourceNumber: 25
order: 15
subgroup: "Drain"
tags: ["batteri","strømforbruk","feilsøking","android","ytelse"]
locale: "nb"
draft: false
---
Skjult batteritømming handler først og fremst om å finne ut hva som holder telefonen våken når skjermen er av.

## Begynn med den kjedelige skjermen

Åpne først **Innstillinger > Batteri > Batteribruk**. På Pixel kan du bytte mellom app- og systemvisning hvis alternativet finnes. På Samsung bruker du **Innstillinger > Batteri og enhetsvedlikehold > Batteri** og åpner detaljvisningen. Xiaomi, OnePlus, Motorola og andre produsenter bruker andre navn, men alle viser en form for liste over appbruk.

Se etter tre mønstre:

1. En app med høy bakgrunnsbruk og lite bruk i forgrunnen.
2. En systemoppføring som ligger høyt gjennom flere ladesykluser.
3. Et diagram som faller i en periode da skjermen var av og telefonen burde ha vært rolig.

Ett dårlig resultat etter en lang sikkerhetskopiering i Google Photos eller en Play Store-oppdatering er ikke nok. Tre lignende resultater på rad er et mønster.

## Sjekk om telefonen faktisk sover

Androids Doze-modus reduserer bakgrunnsarbeid når telefonen ikke er tilkoblet lader, ligger i ro og ikke brukes. Den utsetter jobber og synkronisering, begrenser nettverkstilgang og samler vedlikeholdsperioder. Apper kan fortsatt få begrensede unntak, og varsler med høy prioritet kan vekke telefonen kort, men en sovende telefon bør gjøre svært lite i lange perioder.

Hvis batteridiagrammet faller jevnt gjennom natten, eller telefonen føles varm på nattbordet, er det noe som bryter denne hvilen.

På enkelte Android-versjoner viser batteridiagrammet **Awake** eller lignende tidslinjer. Hvis **Awake** er aktiv i lange perioder mens **Screen on** ikke er det, har du et spor. Mange One UI-versjoner fra Samsung viser lignende tynne statuslinjer under diagrammet.

Ingen linje? Gå ett nivå dypere.

## Bruk Sikkermodus før du skylder på batteriet

Sikkermodus er undervurdert. Den deaktiverer midlertidig nedlastede apper og lar kjernesystemet kjøre. Hvis det meste av den nattlige batteritømmingen forsvinner i Sikkermodus, er maskinvaren sannsynligvis ikke problemet.

Den nøyaktige måten å starte modusen på varierer. På mange Android-telefoner åpner du strømmenyen og holder inne **Slå av** til valget for Sikkermodus vises. Nyere Pixel-modeller bruker en annen tastekombinasjon for å åpne strømmenyen, og enkelte produsenter har egne fremgangsmåter. Google beskriver Sikkermodus som en måte å finne problematiske apper på, og Samsung bruker den som et diagnoseverktøy som deaktiverer de fleste tredjepartsapper.

Kjør én nattlig test i Sikkermodus hvis batteritømmingen er alvorlig. Ikke bruk en hel uke der. Hvis resultatet blir bedre, bør du først fjerne eller begrense apper som nylig ble installert eller oppdatert.

## Utvikleralternativer kan vise hva som er aktivt akkurat nå

Aktiver Utvikleralternativer ved å åpne **Innstillinger > Om telefonen** og trykke sju ganger på **Delversjonsnummer**. Gå deretter til **Innstillinger > System > Utvikleralternativer**, eller tilsvarende plassering på telefonen din.

**Running services** gir et øyeblikksbilde av tjenester som bruker minne og noen ganger CPU. Det er ikke en full batterirapport, men kan avsløre åpenbare problemer. Hvis en shoppingapp, app for bakgrunnsbilder, ryddeapp eller gammel treningsapp kjører selv om du ikke har åpnet den, er det verdt å undersøke.

**Standby apps** eller **Inactive apps** kan også finnes. Disse skjermene viser hvordan Android klassifiserer appaktivitet. De er ikke tilgjengelige på alle telefoner, og produsentene skjuler dem av og til. Dette er friksjonen i Android-diagnostikk: verktøyene finnes, men halve jobben er å finne ut hvor produsenten har lagt dem.

## Bruk ADB når du trenger bevis

ADB er den ryddigste måten å undersøke wake locks og batterihistorikk uten root. Det krever mer arbeid, men du slipper å gjette.

Du trenger en datamaskin med platform-tools installert og USB-feilsøking aktivert på telefonen. Nullstill deretter den gjeldende statistikken:

```bash
adb shell dumpsys batterystats --reset
```

Bruk telefonen normalt, eller la den ligge over natten for å registrere batteritømming i hvile. Eksporter deretter rapporten:

```bash
adb shell dumpsys batterystats > batterystats.txt
```

Filen er stor. Søk først etter disse delene:

- **Estimated power use** for beregnet strømforbruk per app i mAh.
- **Wake locks** for apper som holdt CPU-en våken.
- **Alarm Stats** eller alarmrelaterte deler for apper som vekket enheten gjentatte ganger.
- Aktivitet under **Mobile radio** og **Wi-Fi** hvis problemet ser nettverksrelatert ut.

Googles dokumentasjon for Batterystats og Battery Historian beskriver den offisielle arbeidsflyten. Batterystats samler batteridata på enheten, mens Battery Historian gjør dataene om til en HTML-tidslinje. Battery Historian er overdrevet for vanlige brukere, men nyttig når du må se wake locks, aktivitet i radiosambandet, lading, skjermstatus og batterinivå på samme tidslinje.

Hvis du bare vil bruke én kommando, bruker du denne:

```bash
adb shell dumpsys batterystats
```

Den peker ikke ut den skyldige appen med vanlig språk. Den gir deg bevis.

## De vanlige skjulte årsakene

**Google Play services** er vanligvis ikke skurken alene. Tjenesten håndterer pushvarsler, posisjons-API-er, kontosynkronisering, tjenester i nærheten, appoppdateringer og deler av enhetssikkerheten. Hvis den viser høy batteribruk, bør du kontrollere synkroniseringsfeil for Google-kontoen, posisjonstillatelser, sikkerhetskopiering i Google Photos og om en oppdatering for Play services venter.

Ikke tving Google Play services til å stoppe, og ikke prøv å avinstallere tjenesten. Pixel-brukerstøtten sier tydelig at den er integrert med Android. Tøm mellomlageret, start telefonen på nytt, oppdater appene og rett konto- eller posisjonsproblemet som ligger under.

**En kontosynkronisering som mislykkes**, er kjedelig, men vanlig. Åpne delen **Passord og kontoer** eller **Kontoer** i Innstillinger, og se etter varselikoner, gamle jobbkontoer, endrede passord eller tjenester som aldri fullfører synkroniseringen. Fjern kontoen hvis du ikke bruker den. Legg den til på nytt hvis du gjør det.

**Svakt signal** kan se ut som systemforbruk. Hvis **Mobile network standby** ligger høyt, bør du kjøre en nattlig test i flymodus. Samsung nevner svake eller ustabile nettverksforbindelser som en årsak til raskere batteritømming, og i virkelige hjem er dette ofte hele forklaringen.

**Widgeter og animerte bakgrunner** er lette å glemme fordi de ligger på startskjermen, ikke i appskuffen. En værwidget som oppdaterer posisjonen med få minutters mellomrom, er noe annet enn en statisk klokke. Fjern nylig tilføyde widgeter i én dag og sammenlign.

**Bluetooth-tilbehør** kan også havne i tilkoblingsløkker. Klokker, ørepropper, bilsystemer og sporingsenheter kan prøve å koble til gjentatte ganger. Hvis problemet startet etter at du paret en ny enhet, kan du teste én natt med Bluetooth av.

## Når du bør mistenke maskinvaren

Programvarebasert batteritømming etterlater vanligvis spor: en app, en wake lock, aktivitet i radiosambandet, varme under CPU-bruk eller bedre oppførsel i Sikkermodus. Maskinvareproblemer er mer gjenstridige.

Noen tegn peker i den retningen:

- Telefonen mister mye batteri om natten selv i flymodus.
- Sikkermodus gir ingen forbedring.
- Telefonen er varm mens den ligger urørt og ikke lades.
- Batterihelsen er redusert, eller telefonen slår seg av ved tilfeldige prosenter.

På Pixel 8a og nyere sjekker du **Innstillinger > Batteri > Batteritilstand**. Google sier at **Redusert** betyr at batteriet har under 80 % gjenværende kapasitet. På Samsung bruker du **Samsung Members > Brukerstøtte > Telefondiagnostikk > Batteristatus**.

En tredjepartsapp kan anslå kapasiteten, men ikke behandle tallet som en laboratoriemåling. Tall for batterihelse er rotete. Temperatur, ladehistorikk, kalibrering og målemetode påvirker alle anslaget.

## Dette bør du ikke gjøre

Ikke installer en batterispareapp som lover å rette alt. De fleste slike apper kopierer Androids innebygde kontroller, viser annonser og kjører egne tjenester i bakgrunnen.

Ikke fortsett å tømme Nylige apper. Android håndterer dette automatisk. Hvis én app oppfører seg dårlig, bruker du Tving stopp for akkurat denne appen under **Innstillinger > Apper**, og oppdaterer, begrenser eller fjerner den.

Ikke begynn med tilbakestilling til fabrikkinnstillinger. Det kan rette ødelagt appstatus og gamle innstillinger, men koster tid og forteller ikke hva som forårsaket problemet. Bruk det først etter at batteriskjermen, Sikkermodus, tilbakestilling av nettverket og appbegrensninger ikke har hjulpet.

runcheck kan hjelpe når mønsteret krysser flere kategorier. Batteritømming sammen med varme peker én vei. Batteritømming sammen med svakt signal peker en annen. Batteritømming sammen med press på lagringsplassen eller tung appbruk peker et tredje sted. Løsningen blir bedre når diagnosen ikke er blind.
