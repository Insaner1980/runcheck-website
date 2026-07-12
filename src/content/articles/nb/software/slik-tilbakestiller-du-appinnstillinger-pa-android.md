---
title: "Slik tilbakestiller du appinnstillinger på Android"
description: "Å tilbakestille appinnstillinger høres ut som noe som burde slette viktig innhold. Det gjør det ikke. Dette er en av de tryggere feilsøkingsfunksjonene i Android, og den løser flere merkelige appproblemer enn mange forventer."
listSummary: "Å tilbakestille appinnstillinger høres ut som noe som burde slette viktig innhold."
hub: "software"
sourceNumber: 128
order: 10
tags: ["sikkerhet","skadevare","android","personvern","guide"]
locale: "nb"
draft: false
---
Problemet er at navnet er dårlig. Funksjonen tilbakestiller ikke appene dine. Den tilbakestiller telefonens valg for blant annet tillatelser, standardapper, varsler, bakgrunnsatferd og deaktiverte apper. Bilder, meldinger, filer, lagrede kontoer og appdata blir værende.

## Dette tilbakestilles

Bekreftelsesvinduet i Androids `Settings`-app har i årevis oppført de samme hovedpunktene: deaktiverte apper, deaktiverte appvarsler, standardapper for handlinger, begrensninger for bakgrunnsdata og tillatelsesbegrensninger. På nyere Android-versjoner kan vinduet også nevne innstillinger for batteribruk, så ikke bli overrasket hvis telefonen har den ekstra linjen.

I praksis betyr det at dette kan endre seg:

- Apper du har deaktivert, kan bli slått på igjen. Det gjelder også enkelte forhåndsinstallerte apper og systemapper du har slått av manuelt.
- Valg av standardapper slettes. Lenker, PDF-filer, launchere, telefonsamtaler, SMS og lignende handlinger kan igjen spørre hvilken app du vil bruke.
- Sperrer for appvarsler tilbakestilles. Apper du har gjort stille, kan begynne å sende varsler til du slår dem av igjen.
- Begrensninger for bakgrunnsdata fjernes. Apper du har hindret i å bruke mobildata i bakgrunnen, kan få tilgangen tilbake.
- Tillatelsesbegrensninger tilbakestilles. Apper kan be på nytt om kamera, mikrofon, posisjon, bilder, varsler eller tilgang til enheter i nærheten når de trenger det.
- Grenser for batteribruk kan tilbakestilles på Android-versjoner og OEM-varianter som inkluderer dem i denne funksjonen.

Det funksjonen ikke gjør, er like viktig. Den avinstallerer ikke apper, sletter ikke appdata eller filer, fjerner ikke bilder, tømmer ikke meldinger eller nedlastinger og logger deg ikke ut av alle tjenester. Hvis du var innlogget i WhatsApp, Instagram, en bankapp eller Gmail før tilbakestillingen, er ikke selve tilbakestillingen ment å logge deg ut.

Det er hele poenget. Dette er en bred tilbakestilling av innstillinger, ikke sletting av data.

## Når det er verdt å prøve

Bruk tilbakestilling av appinnstillinger når problemet virker systemomfattende, men ikke alvorlig nok til en tilbakestilling til fabrikkinnstillinger.

Lenkehåndtering er et vanlig eksempel. Du trykker på en lenke, og den åpnes i feil nettleser, i en app du ikke bruker, eller ikke i det hele tatt. Det kan holde å fjerne standardvalget for én app, men det går raskere å tilbakestille alle appinnstillinger når standardvalgene har blitt et rot.

Det er også nyttig hvis du har deaktivert flere forhåndsinstallerte apper og noe begynner å svikte. Android-apper er ofte avhengige av kjedelige bakgrunnskomponenter med navn ingen kjenner igjen. Du deaktiverer én, en annen app krasjer, og sammenhengen er ikke åpenbar. Tilbakestilling av appinnstillinger slår deaktiverte apper på igjen, slik at du kan teste om det var årsaken.

Varsler er et annet godt tilfelle. Androids varslingssystem har fått flere kontroller per app gjennom årene, blant annet kjøretidstillatelse for varsler på nyere versjoner. Hvis én app har sluttet å varsle, retter du den appen direkte. Hvis flere apper sluttet samtidig etter en oppdatering, er en global tilbakestilling et rimelig mellomsteg.

Jeg ville ikke brukt dette som rutinemessig vedlikehold. Det er ingen gevinst i å tilbakestille innstillingene hver måned. Bruk funksjonen når noe faktisk er ødelagt.

## Slik tilbakestiller du appinnstillinger

Stien varierer litt mellom Pixel, Samsung, Xiaomi, Motorola, OnePlus og andre Android-varianter. Valget ligger vanligvis i nærheten av appinnstillingene eller under systemets tilbakestillingsvalg.

På mange Pixel-lignende telefoner åpner du `Settings`, går til `Apps` og deretter `See all apps`. Åpne menyen med tre prikker øverst til høyre, velg `Reset app preferences`, og bekreft med `Reset apps`.

På enkelte nyere builds finner du i stedet valget under `Settings` > `System` > `Reset options`. Hvis appmenyen ikke har funksjonen, er dette det neste stedet å se.

På Samsung Galaxy-telefoner åpner du `Settings` og deretter `Apps`. Åpne menyen med tre prikker og velg `Reset app preferences`. Ordlyd og plassering kan endre seg mellom One UI-versjoner, men appoversikten er fortsatt et naturlig sted å starte.

På Xiaomi-, Redmi- og POCO-telefoner kan du prøve `Settings` > `Apps` > `Manage apps`. Tilbakestillingsvalget ligger vanligvis bak menyen med tre prikker.

Hvis du ikke finner det, bruker du søkefeltet i `Settings` og søker etter `reset app preferences`.

Tilbakestillingen trer i kraft med én gang. Du trenger ikke starte telefonen på nytt, men en omstart etterpå skader ikke hvis du feilsøker et gjenstridig problem.

## Dette skjer etterpå

Den neste dagen eller to kan telefonen stille flere spørsmål enn vanlig. Trykk på en lenke, og Android kan spørre hvilken nettleser du vil bruke. Åpne en PDF-fil, og telefonen kan spørre om du vil bruke Drive, Acrobat, nettleseren eller en annen app. Åpne en app som trenger kamera eller posisjon, og du kan få en ny tillatelsesforespørsel.

Det er normalt.

Den irriterende delen er å gjenskape valgene du gjorde med vilje. Hvis du deaktiverte operatørapper, doble galleriapper, ekstra nettlesere eller andre unødvendige forhåndsinstallerte apper, må du gå tilbake til appinnstillingene og deaktivere dem igjen. Hvis du hadde strenge varslingsregler, går du gjennom appene som betyr noe. Hvis du begrenser mobildata for sosiale apper eller videoapper, bør du også kontrollere disse innstillingene på nytt.

Derfor er tilbakestilling av appinnstillinger trygg, men ikke usynlig. Den ødelegger ikke dataene dine, men den opphever noe arbeid.

## Sammenlignet med andre tilbakestillinger

Å tømme hurtigbufferen til en app fjerner midlertidige filer for den ene appen. Prøv det når én app er treg, ustabil eller viser gammelt innhold.

Å tømme applagringen er kraftigere. Det tilbakestiller appens interne data, så du kan bli logget ut eller miste lokale innstillinger. Bruk det forsiktig.

Tilbakestilling av appinnstillinger ligger midt imellom. Den påvirker alle apper, men bare innstillingene deres på systemnivå. Derfor er den nyttig når telefonen har flere små appproblemer uten én åpenbar årsak.

En tilbakestilling til fabrikkinnstillinger er noe annet. Den sletter telefonen og starter på nytt med Android-versjonen som allerede er installert. Ikke hopp dit bare fordi lenker åpnes på feil sted.

## Vanlige spørsmål

Logger dette meg ut av apper? Nei, ikke i seg selv. Funksjonen tømmer ikke applagring eller fjerner kontodata.

Kan det løse batteritømming? Noen ganger, indirekte. Hvis en deaktivert systemapp eller en for streng tillatelsesbegrensning fikk apper til å prøve bakgrunnsarbeid om og om igjen, kan tilbakestillingen hjelpe. Hvis batteriet er utslitt eller en app faktisk bruker mye strøm, løser dette ikke problemet på magisk vis.

Må jeg gi tillatelser på nytt? Ja, for enkelte apper. De kan spørre igjen når de trenger tilgang.

Bør jeg gjøre dette før en tilbakestilling til fabrikkinnstillinger? Ja, hvis problemet gjelder appatferd og ikke en låst telefon, alvorlig korrupsjon eller maskinvarefeil. Det tar et minutt og sletter ikke alt du har på telefonen.
