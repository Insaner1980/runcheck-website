---
title: "Slik sjekker du om telefonen har skadevare"
description: "Du bruker telefonen som vanlig. Så begynner batteriet å tømmes raskt, sprettoppannonser vises på startskjermen, og en tilfeldig app du ikke husker å ha installert, dukker opp i applisten."
listSummary: "Du bruker telefonen som vanlig."
hub: "software"
sourceNumber: 125
order: 7
tags: ["android","skadevare","sikkerhet","feilsøking","guide"]
locale: "nb"
draft: false
---
Det beviser ikke at telefonen har skadevare. Telefoner kan også oppføre seg merkelig når lagringsplassen er full, en app har låst seg eller en oppdatering har gått galt. Men slike symptomer er verdt å undersøke.

Begynn med de kjedelige forklaringene. Se deretter etter skadevare.

## Tegn du bør ta på alvor

Ett symptom alene er sjelden nok. Flere symptomer samtidig forteller mer.

Batteriforbruket er et godt sted å begynne. Åpne batteribruken i Innstillinger, og se etter apper som bruker mer strøm enn det er rimelig å forvente. At en navigasjonsapp har brukt mye batteri etter en lang kjøretur, er normalt. At en QR-skanner tømmer batteriet gjennom natten, er det ikke.

Sjekk også mobildata. På mange telefoner finner du databruken under nettverk og internett i Innstillinger, eller under `Settings > Connections > Data usage` på Samsung. Skadevare som laster opp data, henter annonser eller kontakter en kommandoserver, må bruke båndbredde et sted.

Sprettoppannonser utenfor appen som opprettet dem, er et tydeligere varselsignal. Annonser inne i et gratisspill er irriterende. Annonser som flyter over startskjermen, låseskjermen eller Innstillinger, betyr vanligvis adware.

Ukjente apper er et annet klart tegn. Åpne applisten i Innstillinger og gå gjennom hele listen. Se etter generiske navn, tomme ikoner, verktøy som ser ut som kopier av andre apper, apper med navn som «System Service» som åpenbart ikke kommer fra telefonprodusenten, eller noe som ble installert omtrent da problemene begynte.

Varme og treghet kan også ha betydning, men ikke les for mye inn i dem. En telefon kan bli overopphetet på grunn av dårlig signal, en app som har låst seg, lading i solen eller et sviktende batteri. Skadevare er én mulig årsak, ikke standardsvaret.

## Kjør en skanning med Google Play Protect

Alle Google-sertifiserte Android-telefoner har Google Play Protect. Åpne Google Play Butikk > profilikonet > Play Protect, og trykk på Skann.

Kontroller at Skann apper med Play Protect er slått på. Slå også på Bedre gjenkjenning av skadelige apper hvis du installerer apper utenfor Google Play. Da kan Google analysere ukjente apper grundigere.

Play Protect kontrollerer apper når du installerer dem og skanner enheten regelmessig etterpå. Google oppgir at Play Protect skanner 200 milliarder Android-apper hver dag, og tjenesten kan advare deg, deaktivere en app eller fjerne en skadelig app automatisk.

Dette er den første skanningen du bør kjøre. Den er ikke perfekt, men den er innebygd og omfatter også apper som er installert utenfor appbutikken.

## Gå gjennom mistenkelige tillatelser

Åpne tillatelsesbehandlingen under sikkerhet og personvern i Innstillinger. På noen telefoner ligger den under apper.

Se på kamera, mikrofon, posisjon, kontakter, SMS, telefon og filer eller medier. Spørsmålet er enkelt: Trenger appen denne tillatelsen for å gjøre jobben sin?

Det er naturlig at en meldingsapp har tilgang til mikrofonen. En kalkulator med SMS-tilgang gir ikke mening. En app for bakgrunnsbilder med tilgjengelighetstilgang er et varselsignal, med mindre den har en helt bestemt funksjon du forstår.

Trekk tilbake alt som ser galt ut. Hvis en app slutter å virke fordi du fjernet en tillatelse den aldri burde ha trengt, bør du avinstallere den.

## Sjekk nylige installasjoner og apper installert utenfor appbutikken

Mesteparten av skadevaren på Android begynner med at en app blir installert. Det kan være en skadelig app fra et nettsted, et falskt oppdateringsvarsel, en modifisert APK eller en dårlig app som kom seg gjennom kontrollen i en appbutikk.

Åpne delen for administrasjon av apper og enheter i Google Play Butikk, og sorter listen etter nylig oppdaterte eller installerte apper. Sammenlign den med tidspunktet da symptomene begynte.

Apper som er installert utenfor appbutikken, bør undersøkes ekstra nøye. På mange nyere Android-telefoner viser appinformasjonen hvor appen kom fra. Hvis kilden er en nettleser, filbehandler, meldingsapp eller ukjent pakkeinstallerer, bør du regne den som en høyere risiko.

Ikke behold APK-filer bare fordi de var vanskelige å finne. Det er slik man overtaler seg selv til å beholde tvilsom programvare.

## Bruk sikker modus

Sikker modus starter Android med tredjepartsapper deaktivert. Hvis sprettoppannonser, overoppheting eller merkelig bakgrunnsaktivitet stopper i sikker modus, er det sannsynligvis en nedlastet app som er årsaken.

På mange telefoner holder du inne av/på-knappen, trykker lenge på Slå av på skjermen og velger sikker modus. Den samme metoden fungerer vanligvis på Samsung. Enkelte merker bruker en litt annen tastekombinasjon, så søk etter modellen din hvis valget ikke vises.

La telefonen være i sikker modus lenge nok til at du får testet symptomet. Start deretter normalt på nytt, og avinstaller nyere eller mistenkelige apper én om gangen.

Begynn med apper installert utenfor appbutikken. Fortsett med verktøy som ber om tilgang til tilgjengelighet, varsler, enhetsadministrasjon, SMS eller visning over andre apper.

## Hvis en app ikke lar seg avinstallere

Noen skadelige apper gjør seg vanskeligere å fjerne ved å be om tilgang som enhetsadministrator eller til tilgjengelighetsfunksjoner.

Søk etter `device admin` i Innstillinger. Slå av administratortilgangen for alt som ser mistenkelig ut, og avinstaller deretter appen.

Sjekk også delen for tilgjengelighet i Innstillinger, og fjern tilgang fra apper som ikke bør ha den. Tilgjengelighetstilgang er kraftig fordi en app kan lese innhold på skjermen og samhandle med brukergrensesnittet. Passordbehandlere og tilgjengelighetsverktøy kan ha en god grunn til å bruke den. En renseapp har det ikke.

Kjør Play Protect på nytt etter at appen er fjernet.

## Bytt passord etter en reell infeksjon

Hvis du fant en app som tydelig var skadelig, bør du ikke stoppe etter avinstalleringen.

Bytt passord for kontoene du brukte på telefonen, særlig e-post, banktjenester, sosiale medier, skylagring og passordbehandleren. Gjør det fra en ren enhet hvis det er mulig.

Hvis appen hadde SMS-tilgang, bør du regne med at engangskoder kan ha blitt eksponert. Hvis den hadde tilgjengelighetstilgang, bør du anta at den kan ha sett mer enn tillatelseslisten antyder.

## Tilbakestill til fabrikkinnstillinger når du ikke kan stole på resultatet

En tilbakestilling til fabrikkinnstillinger fjerner nesten all skadevare på Android fordi den sletter brukerinstallerte apper og data. Sikkerhetskopier bilder, meldinger og filer først, men ikke gjenopprett nøyaktig det samme appsettet etterpå.

Installer appene manuelt på nytt fra Google Play etter tilbakestillingen. Unngå å gjenopprette ukjente APK-filer eller gamle appsikkerhetskopier.

Sjeldne skadevaretyper kan overleve ved å misbruke tilgang på systemnivå eller forhåndsinstallerte leverandørkomponenter, men det er ikke det normale tilfellet for vanlige forbrukere. Hvis problemene overlever en tilbakestilling på en gammel telefon uten støtte, er det mer realistisk å bytte enheten.

## Slik reduserer du risikoen neste gang

Hold Android-sikkerhetsoppdateringene aktuelle. Bruk Google Play eller en annen kilde du stoler på når du installerer apper. La Play Protect være på. Vær skeptisk til APK-lenker i meldinger, falske nettleservarsler og sprettoppvinduer som sier «oppdater denne appen nå» uten å komme fra Google Play eller telefonens egen oppdateringsfunksjon.

Og hvis et nettsted sier at telefonen er infisert og ber deg trykke på en knapp, lukker du fanen. Det er svindel, ikke en diagnose.
