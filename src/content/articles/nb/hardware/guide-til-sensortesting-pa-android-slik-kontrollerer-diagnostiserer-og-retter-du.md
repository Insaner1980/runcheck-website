---
title: "Guide til sensortesting på Android: slik kontrollerer, diagnostiserer og retter du sensorfeil"
description: "Hvordan vet du om automatisk rotasjon er ødelagt, kompasset er forvirret eller en app bare oppfører seg dårlig? Det er det irriterende med sensorproblemer. De virker små helt til navigasjon, samtaler, kamerastabilisering, skrittelling eller automatisk lysstyrke må fungere."
listSummary: "maskinvare, testing og diagnostikk"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["maskinvare","testing","diagnostikk","android","guide"]
locale: "nb"
draft: false
---
Android-telefoner bruker en blanding av bevegelses-, miljø-, posisjons- og nærhetssensorer. Noen er fysiske brikker. Andre er «virtuelle» sensorer som beregnes fra flere brikker samtidig. Når én kilde gir støy, blokkeres eller deaktiveres, kan symptomet dukke opp et helt annet sted.

Begynn enkelt. Du trenger ikke root, ADB eller en laboratoriebenk til den første testrunden.

## Raske sensorkontroller

Prøv disse vanlige testene før du installerer noe:

- Roter telefonen fra stående til liggende med rotasjonslåsen av. Det kontrollerer grunnleggende oppførsel i akselerometeret.
- Ta et panoramabilde. Hvis telefonen ikke klarer å følge bevegelsen jevnt, kan gyroskopet være involvert.
- Ring noen og dekk den øvre delen av skjermen nær ørehøyttaleren. Skjermen skal slå seg av og våkne igjen når du fjerner hånden. Det tester nærhetssensoren.
- Slå på automatisk lysstyrke og gå fra et lyst rom til et mørkt. Skjermen bør justere seg i løpet av noen sekunder.
- Åpne Maps og se på den blå retningsstrålen. En svært bred eller feilvendt stråle betyr vanligvis at magnetometeret må kalibreres eller påvirkes av forstyrrelser.

På Samsung Galaxy-enheter er Samsung Members den ryddigste løsningen. Åpne Samsung Members, trykk på `Få hjelp` og deretter `Vis tester`. Den eldre diagnosemenyen `*#0*#` fungerer også på mange Galaxy-telefoner og har en egen sensordel.

På Pixel-telefoner taster du `*#*#7287#*#*` for å åpne Pixel Diagnostics der funksjonen støttes. På mange Xiaomi-, Redmi- og POCO-enheter åpner `*#*#6484#*#*` CIT-menyen. På Motorola bruker du `Device Help > Device diagnosis > Hardware test`.

Ikke behandle `*#*#4636#*#*` som en sensortest. På mange telefoner åpner koden en test- eller informasjonsside for nettverk, bruk, Wi-Fi og noen ganger batteri. Den er ikke en universell sensordiagnosemeny.

## Hvorfor sensorproblemer oppstår

Kalibreringsdrift er den vanligste, kjedelige årsaken. Akselerometre, gyroskoper og magnetometre er alle avhengige av kalibrering. Magnetometeret er særlig følsomt, fordi magneter, metalldeksler, bilholdere, bærbare PC-er, høyttalere og enkelte lommebokdeksler kan forstyrre det.

Deretter kommer fysisk skade. Et fall kan flytte en sensormodul, bøye rammen nær den øvre skjermkanten eller skade en flekskabel. Vannskade kan utvikle seg langsommere. Telefonen kan virke normal i en uke før nærhetssensoren eller barometeret begynner å oppføre seg merkelig på grunn av korrosjon.

Blokkerte sensorvinduer er lette å overse. Nærhets- og lyssensorene sitter vanligvis nær ørehøyttaleren eller under skjermen. En tykk skjermbeskytter, dekselkant, støv, hudfett eller skjevt montert innsynsbeskyttelse kan blokkere eller spre lyset sensoren bruker.

Programvare kan også ødelegge sensorfunksjoner. Store Android-oppdateringer, produsentfastvare, tilpassede ROM-er, apptillatelser og aggressiv batteristyring kan endre hvilke data apper får. Android 17 ble lansert for de fleste støttede Pixel-enheter i juni 2026, mens andre merker følger senere. Derfor oppstår ikke oppdateringsrelaterte sensorfeil på alle telefoner samtidig.

Strøminnstillinger betyr også noe. Android 9 begrenset bakgrunnstilgangen til kontinuerlige sensorer som akselerometer og gyroskop. Android 10 la til utviklerflisen `Sensors off`, som kan deaktivere kameraet, mikrofonen og sensorer som håndteres av Androids SensorManager. Hvis alle sensorer plutselig virker døde, bør du kontrollere denne flisen før du antar at hovedkortet har sviktet.

## Test akselerometer og gyroskop

Slå av rotasjonslåsen og roter telefonen langsomt. Skjermen bør skifte retning uten lange forsinkelser eller gjentatte vendinger. Hvis den nekter å rotere i alle apper, kan akselerometeret ha sluttet å rapportere riktig.

Åpne deretter en vaterapp eller en annen app som viser helning. Legg telefonen flatt på et bord. Verdiene bør roe seg i stedet for å drive videre uten stopp. Et lite avvik er normalt. En stor, fast helning på en flat overflate tyder på et kalibreringsproblem.

Bruk panoramamodus i kameraet eller en AR-app for å teste gyroskopet. Visningen bør følge bevegelsene jevnt. Hvis panoramabilder stadig mislykkes eller AR-objekter glir rundt mens du står stille, kan gyroskopet være støyende.

Her er sammenligning nyttig. Test samme app på en annen telefon i det samme rommet. Hvis begge oppfører seg dårlig, ligger problemet trolig i appen eller omgivelsene.

## Test nærhetssensoren

Ring noen, og hold hånden omtrent to centimeter over den øvre delen av skjermen. Skjermen skal slå seg av. Når du flytter hånden bort, skal den slå seg på igjen.

De fleste nærhetssensorer i telefoner er ikke presise avstandsmålere. De rapporterer ofte bare nær eller fjern, ikke en jevn verdi centimeter for centimeter. I en diagnoseapp kan dette se ut som 0 cm og 5 cm uten noe imellom. Det er normalt.

Hvis verdien sitter fast, tar du av dekselet og skjermbeskytteren. Rengjør den øvre skjermkanten eller sensorområdet med en myk klut, og test igjen før du skylder på maskinvaren. Skjermbeskyttere av herdet glass er en klassisk årsak.

## Test lyssensoren

Slå på automatisk lysstyrke. Lys med en lommelykt nær den øvre delen av skjermen, og dekk deretter samme område med hånden. Lysstyrken bør reagere tydelig, selv om Android kan jevne ut endringen i stedet for å hoppe umiddelbart.

En lyssensor viser vanligvis verdien i lux. Et mørkt rom kan ligge under 50 lux. Et vanlig kontor kan ligge på noen hundre lux. Direkte sollys kan overstige 10 000 lux. Det nøyaktige tallet betyr mindre enn om verdien beveger seg fornuftig når lyset endres.

Hvis automatisk lysstyrke oppfører seg merkelig, men luxverdien reagerer riktig, er sensoren sannsynligvis i orden. Problemet ligger heller i læringen for adaptiv lysstyrke, skjerminnstillingene eller produsentens programvare.

## Test magnetometer og kompass

Gå ut eller still deg unna metallgjenstander. Åpne Maps og trykk på posisjonspilen. Hvis den blå strålen er svært bred eller peker feil, bør du kalibrere kompasset.

Bruk åttetallsbevegelsen: Hold telefonen foran deg og før den i et stort liggende åttetall mens du vrir håndleddet i forskjellige vinkler. Gjør dette i 15-20 sekunder. Det ser litt dumt ut. Det virker overraskende ofte.

Hvis kompasset fortsatt peker feil, fjerner du magnetisk tilbehør og prøver igjen. Bilholdere, lommebokdeksler, MagSafe-lignende ringer, lokk på bærbare PC-er og metallbord kan alle forvrenge målingene. Innendørs er kompasset ofte dårligere enn folk forventer.

## Test barometeret

Ikke alle Android-telefoner har barometer. Rimelige modeller utelater det ofte.

Hvis telefonen har et barometer, bør en sensorapp vise lufttrykket i hPa eller millibar. Sammenlign med en værstasjon i nærheten. Ikke forvent et perfekt samsvar, fordi værapper ofte viser trykk justert til havnivå, mens telefonen måler det lokale trykket i høyden du befinner deg på.

En verdi som sitter helt fast og er klart feil, kan bety at sensoren er blokkert eller ødelagt. Luftehullet er svært lite, så lommelo og støv kan ha betydning.

## Les rå sensordata uten å overtenke dem

Råverdier er nyttige, men ikke jakt på perfeksjon.

Et akselerometer rapporterer akselerasjon langs X-, Y- og Z-aksen i m/s². En telefon som ligger flatt, bør vise omtrent 9,8 m/s² på én akse på grunn av tyngdekraften og nær null på de andre, avhengig av retningen.

Et gyroskop rapporterer rotasjon i radianer per sekund. Når telefonen ligger stille, bør verdiene være nær null. Små bevegelser og sensorstøy er normalt.

Et magnetometer rapporterer magnetfeltstyrke i mikrotesla. Jordens magnetfelt ligger ofte et sted rundt 25-65 mikrotesla, avhengig av sted. Verdier langt utenfor dette området skyldes vanligvis forstyrrelser.

En lyssensor rapporterer lux. Du ser etter fornuftige endringer, ikke laboratorienøyaktighet.

## Tiltak før reparasjon

Start telefonen på nytt først. Kjedelig, men verdt å prøve.

Ta deretter av dekselet og skjermbeskytteren, rengjør det øvre sensorområdet, slå av batterisparing og kontroller om `Sensors off` er aktivert i utvikleralternativene. Hvis problemet bare gjelder én app, sjekker du appens tillatelser og batteribegrensninger.

Ved kompassproblemer kalibrerer du på nytt og flytter deg unna magneter. Ved problemer med automatisk rotasjon tester du flere apper, fordi noen låser skjermretningen. Ved nærhetsproblemer tester du under en ekte samtale med skjermbeskytteren fjernet.

Hvis en sensor sluttet å virke rett etter en systemoppdatering, installerer du ventende systemoppdateringer og Google Play-systemoppdateringer før du tester igjen. Bruker telefonen en betaversjon, bør du ikke regne én sensorfeil som bekreftet maskinvareproblem før du har testet på stabil programvare.

En diagnoseapp som runcheck er nyttig når symptomene overlapper. Batteribelastning, varme og nettverksproblemer kan få telefonen til å virke ødelagt selv om sensoren bare er én del av bildet.

## Når det sannsynligvis er maskinvaren

Mistenk maskinvaren når den samme sensoren svikter i alle apper, svikter i produsentens diagnoseverktøy, fortsetter å svikte i sikker modus og fortsatt ikke virker etter en tilbakestilling.

De enkelte sensorene er vanligvis små overflatemonterte komponenter eller deler av en større modul. Verksteder bytter sjelden bare én sensorbrikke. I praksis betyr reparasjon ofte utskifting av skjermenheten, kameramodulen, det nedre kretskortet eller en del av hovedkortet, avhengig av hvor sensoren sitter.

Hvis telefonen har falt, blitt bøyd eller vært utsatt for vann, bør du nevne det når du ber om et prisoverslag. Det påvirker hva teknikeren bør undersøke.
