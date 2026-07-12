---
title: "Diagnostikkoder for Android: komplett liste etter produsent"
description: "Android-servicekoder som virker, sortert etter merke, med oppdaterte merknader om Android 17, Pixel-enheter, Samsung, Xiaomi, OnePlus, Motorola, Huawei, Realme og Oppo."
listSummary: "diagnostikk, sensorer og android"
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostikk","sensorer","android","maskinvare","guide"]
locale: "nb"
draft: false
---
Servicekoder på Android er nyttige, men de er rotete. Noen er en del av Android, andre legges til av produsenten, og enkelte forsvinner etter en fastvareoppdatering uten forvarsel.

Det betyr enda mer nå som Android 17 er lansert. Google gjorde systemet tilgjengelig først på de fleste Pixel-enhetene som støttes, mens Samsung, Xiaomi, OnePlus, Motorola og andre merker leverer sine egne Android 17-versjoner gjennom separate utrullinger. En kode som virker på en Pixel med Android 17 i dag, sier derfor lite om en Galaxy- eller Redmi-telefon som ennå ikke har fått produsentens Android 17-fastvare.

To regler før du begynner. De fleste kodene aktiveres så snart du skriver inn det siste tegnet, så vanligvis skal du ikke trykke på ringeknappen. Hvis en kode åpner en meny du ikke forstår, kan du se, men ikke endre noe.

## Universelle koder

Disse kodene er det nærmeste Android kommer en felles grunnpakke. Tilpasset fastvare kan likevel blokkere dem.

`*#06#` viser IMEI-nummeret til telefonens mobilradio. Telefoner med to SIM-kort viser vanligvis to IMEI-numre. Dette er den tryggeste koden på listen og virker på nesten alle telefoner, også iPhone.

`*#*#4636#*#*` åpner Androids Testing-meny på mange enheter. Den kan vise telefoninformasjon, batteristatistikk, signalstyrke og radiodetaljer. Ulempen er at mange OEM-grensesnitt nå begrenser den, særlig på nyere fastvare fra Samsung og Xiaomi.

`*#*#426#*#*` åpner diagnostikk for Firebase Cloud Messaging. Den er mest nyttig når pushvarsler er forsinket eller mangler, fordi den viser om Google Play Services klarer å opprettholde en forbindelse til Googles servere.

`*#07#` viser SAR-informasjon på mange Android-telefoner. SAR betyr Specific Absorption Rate og beskriver hvor mye radiofrekvent energi kroppen absorberer under bruk. I USA er FCC-grensen for telefoner 1,6 W/kg. I Europa er den vanlige forbrukergrensen for eksponering mot hode og kropp 2,0 W/kg, beregnet som gjennomsnitt over 10 gram vev.

## Samsung Galaxy

Samsung har fortsatt et av de bedre diagnostikkoppsettene, blant annet fordi selskapet tilbyr både koder i ringeappen og en støttet løsning i en app.

`*#0*#` åpner Samsungs skjerm for maskinvaretester på mange Galaxy-telefoner. Den nøyaktige utformingen varierer etter modell, men du kan vanligvis teste skjermen, berøringen, kameraene, høyttalerne, vibrasjonen, sensorene og noen ganger fingeravtrykksmaskinvaren. På enkelte operatørmodeller eller sterkt låste fastvareversjoner åpnes ikke menyen i det hele tatt.

Samsung Members er den tryggere veien for vanlige brukere. Åpne Samsung Members, gå til Diagnostikk og velg testene du trenger. Appen leder deg gjennom kontrollene og gir tydeligere resultater enn servicemenyen.

`*#0228#` viser batteristatus, blant annet spenning og temperatur, på mange Galaxy-versjoner. Den gir ikke en enkel prosentverdi for batterihelse.

`*#0011#` åpner ServiceMode på mange modeller og viser direkte data om mobilnettet, som frekvensbånd, basestasjon og signalinformasjon. Det er nyttig, men lett å feiltolke hvis du ikke arbeider med mobilnett.

`*#9900#` åpner SysDump på enkelte Galaxy-telefoner. Det eneste valget de fleste bør bruke, er opprydding i logger dersom kundestøtten uttrykkelig har bedt deg fjerne oppsamlede dumpstate- eller logcat-filer.

`*#2663#` viser informasjon om fastvaren til berøringspanelet på enkelte modeller. Ikke oppdater berøringsfastvaren bare fordi knappen finnes. Bruk den bare når du feilsøker et faktisk problem med berøringen.

## Xiaomi, Redmi og POCO

Xiaomis fabrikkbaserte testpakke heter CIT. Dette er en av de få diagnostikkmenyene på Android som fortsatt har rimelig god offisiell dokumentasjon.

`*#*#6484#*#*` åpner CIT-maskinvaretesten på mange telefoner fra Xiaomi, Redmi og POCO. Hvis ingenting skjer, kan du prøve `*#*#64663#*#*`. Xiaomis støttesider viser til begge kodene, avhengig av modell og region.

CIT-menyen kan inneholde tester for skjerm, berøring, høyttaler, mikrofon, vibrasjon, kamera, nærhetssensor, lyssensor, akselerometer, gyroskop, kompass, Wi-Fi, Bluetooth, SIM-gjenkjenning, fingeravtrykk, NFC og lading. Listen avhenger av maskinvaren i telefonen.

Du kan ofte åpne den samme menyen uten kode. Gå til `Settings > About phone > Detailed info and specs` eller `All specs`, og trykk flere ganger på `Kernel version`. Xiaomi endrer ordlyden mellom MIUI og HyperOS, men dette er fortsatt verdt å prøve når ringekoden er blokkert.

`*#*#6485#*#*` viser batteriinformasjon på mange Xiaomi-telefoner. Se på verdiene som tekniske målinger, ikke som en enkel erstatning for en side med batterihelse.

## Google Pixel

Pixel-telefoner støtter de universelle Android-kodene, men den viktigste nåværende diagnosekoden er spesifikk for Pixel.

`*#*#7287#*#*` åpner Pixel Repair Diagnostics App på Pixel-telefoner som støttes. Google dokumenterer den for kontroller før og etter reparasjon. Den krever internettilkobling og leder deg gjennom prosessen på skjermen.

På Pixel 6 og nyere finner du batterikontroller under `Innstillinger > Batteri > Batteridiagnostikk`. Dette er en vanlig side i Innstillinger, ikke en skjult kode.

`*#*#4636#*#*` virker fortsatt på mange Pixel-telefoner og viser radio- og batteriinformasjon. Det er ikke et reparasjonsverktøy, og det kan ikke tvinge frem Android-oppdateringer.

Eldre artikler nevner noen ganger kalkulatorkoden `.12345+=` som en vei til utviklermodus på Pixel. Den ville jeg ikke stolt på i 2026. Bruk heller Googles offisielle kode for Pixel-diagnostikk.

## OnePlus

OnePlus-koder er ujevne fordi OxygenOS har nærmet seg ColorOS de siste årene.

`*#808#` åpner Engineer Mode på enkelte eldre OnePlus-telefoner, særlig modeller i OnePlus 7-, 8- og 9-serien. På nyere fastvare kan den være blokkert.

`*#899#` åpner en diagnose- eller loggmeny på enkelte OnePlus- og Oppo-baserte enheter. Innholdet varierer mye.

`*#*#4636#*#*` er vanligvis den mest nyttige grunnkoden for nettverks- og batteriinformasjon. På nyere OnePlus-telefoner er den innebygde diagnoseappen, støtteappen eller en pålitelig sensorapp ofte mindre frustrerende enn å lete etter gamle koder.

## Motorola

`*#*#2486#*#*` er kjent for å åpne Motorolas utvikler- eller maskinvaretestmeny på mange Moto-telefoner. Støtten varierer mellom modellene.

Den mer pålitelige veien er Device Help-appen. Åpne `Device Help > Device diagnosis > Hardware test`. Den er enklere å forklare til en ikke-teknisk bruker og er ikke avhengig av at en skjult kode fortsatt er aktiv.

`*#*#4636#*#*` virker på mange Motorola-telefoner fordi Motorolas Android-versjoner ofte ligger forholdsvis nær standard Android.

## Huawei og Honor

`*#*#2846579#*#*` åpner ProjectMenu på mange Huawei-telefoner og eldre Honor-modeller med EMUI eller MagicUI. Menyen inneholder innstillinger for programvare, bakgrunnsfunksjoner, nettverk og service. Noen av valgene er beregnet på teknikere.

`*#*#6130#*#*` viser nettverksinformasjon på enkelte Huawei-modeller.

På nyere HarmonyOS-enheter bør du bruke Support-appen i stedet for å forvente at alle gamle Android-koder fortsatt virker. Huawei har flyttet mye av den brukervendte diagnostikken til veiledede støtteprosesser.

## Realme og Oppo

`*#800#` åpner Engineer Mode på enkelte telefoner fra Realme og Oppo. På nyere ColorOS-versjoner er tilgangen langt mer begrenset enn før.

`*#899#` kan åpne en diagnose- eller loggmeny på enkelte modeller.

Disse merkene endrer ofte hvordan diagnostikken åpnes. Hvis en kode ikke virker, bør du ikke fortsette med tilfeldige lister fra gamle foruminnlegg. Bruk Phone Manager, støtteappen eller en kjent app for maskinvareinformasjon.

## Hvorfor koder slutter å virke

Ringeappen har betydning. En tredjepartsapp behandler ikke nødvendigvis MMI- og servicekoder på samme måte som den forhåndsinstallerte ringeappen. Prøv telefonens opprinnelige Phone-app først.

Operatørfastvare kan fjerne koder. En operatørlåst Galaxy kan oppføre seg annerledes enn en operatøruavhengig Galaxy med samme maskinvare.

Store oppdateringer kan endre alt. Android 17 er et godt eksempel: Pixel-enhetene fikk det først, mens hver OEM-produsent leverer sin egen versjon med egne servicemenyer, tillatelser og begrensninger. Når en kode slutter å virke etter en systemoppdatering, kan den være blokkert, ikke ødelagt.

Og ja, enkelte kodelister på nettet er utdaterte. En kode kopiert fra en forumtråd om Galaxy S8 trenger ikke virke på en Galaxy S26, selv om artikkelen påstår at den gjelder «alle Samsung-telefoner».

## Tryggere alternativer

Til hverdagskontroller er produsentens diagnoseapp vanligvis bedre enn en skjult meny. Samsung Members, Xiaomi CIT, Pixel Repair Diagnostics, Motorola Device Help og Huawei Support er lettere å forstå og innebærer mindre risiko.

For en skrivebeskyttet oversikt kan apper som DevCheck, CPU-Z, AIDA64 og Phone Doctor Plus vise batteridata, sensorverdier, CPU-detaljer, lagring og nettverksinformasjon gjennom Androids offentlige API-er. De får ikke tilgang til alle fabrikktester, men holder for de fleste typer feilsøking.

For et bredere bilde av enhetens tilstand samler runcheck diagnostikk for batteri, temperatur, nettverk og lagring i ett kontrollpanel, i stedet for at du må hoppe mellom servicemenyer.

## Dette bør du ikke røre

Ikke endre nettverksbånd med mindre du vet nøyaktig hvorfor du gjør det.

Ikke kjør knapper for fastvareoppdatering inne i servicemenyer bare for å se hva som skjer.

Ikke bruk alternativer for tilbakestilling, kalibrering eller fabrikkinnstillinger fra en kodeliste med mindre du har sikkerhetskopiert telefonen og vet hva valget gjør.

Det er trygt å lese verdier. Problemene begynner når du endrer skjulte innstillinger.
