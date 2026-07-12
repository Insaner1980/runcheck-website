---
title: "Slik tester du maskinvaren i en Android-telefon: komplett diagnoseguide (2026)"
description: "En Android-telefon kan se helt fin ut selv om én del er i ferd med å svikte. Et slitent batteri, en svak høyttaler, en dårlig nærhetssensor eller en skadet antenne gir ikke alltid et tydelig varsel. I stedet får du kortere batteritid, merkelige samtaler, tilfeldig varme eller et hjørne av skjermen som ikke reagerer på berøring."
listSummary: "En Android-telefon kan se helt fin ut selv om én del er i ferd med å svikte."
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["batteri","strømforbruk","feilsøking","android","ytelse"]
locale: "nb"
draft: false
---
Den gode nyheten er at du kan teste det meste før du betaler for reparasjon. Android har innstillingssider, produsentverktøy, tastekoder og manuelle kontroller som dekker de viktigste delene. Det rotete er at ingenting av dette fungerer likt på alle telefoner.

Android 17 ble lansert for de fleste støttede Pixel-telefoner i juni 2026, mens andre merker følger sine egne tidsplaner. Det er relevant fordi diagnosemenyer, visning av batterihelse og menybaner kan variere med Android-versjon, produsentens grensesnitt, operatørversjon og region. Se på hver kode i denne guiden som en snarvei, ikke et løfte.

## Raskt svar

Start med produsentens offisielle diagnoseverktøy når det finnes.

- Samsung Galaxy: Åpne Samsung Members, trykk på `Få hjelp` og deretter `Vis tester`. Du kan kjøre alle testene eller velge én del, for eksempel batteri, høyttaler, mikrofon, skjerm, kamera eller sensorer. Mange Samsung-telefoner støtter også `*#0*#` i Telefon-appen for å åpne en maskinvaretestmeny.
- Google Pixel: Tast `*#*#7287#*#*` mens telefonen er koblet til internett, for å åpne Pixel Diagnostics på støttede Pixel-telefoner. Pixel Tablet bruker Googles nettbaserte løsning for Pixel-reparasjon og diagnostikk.
- Motorola: Åpne `Device Help > Device diagnosis > Hardware test`.
- Xiaomi, Redmi og POCO: Prøv `*#*#6484#*#*` for CIT-diagnosemenyen. På mange modeller kan du også åpne den ved å trykke flere ganger på kjerneversjonen under informasjonen om telefonen.
- Android-telefoner med et grensesnitt nær standardutgaven: `*#*#4636#*#*` kan åpne en testmeny på mange enheter, hovedsakelig med informasjon om telefon, nettverk, bruk og noen ganger batteri. Det er ikke en full maskinvaretest, og mange Samsung- og operatørversjoner blokkerer den.

Hvis en kode ikke gjør noe, trenger du ikke å kjempe mot den. Bruk de manuelle testene nedenfor eller en diagnoseapp.

## Finn først ut om feilen er programvare eller maskinvare

Dette trinnet kan spare deg for penger. En programvarefeil kan se helt lik ut som en ødelagt del.

Sikker modus er det første filteret. Hold inne av/på-knappen til strømmenyen vises, og hold deretter inne valget for å slå av til telefonen tilbyr sikker modus. På noen telefoner brukes en annen tastekombinasjon, men målet er det samme: Android starter uten tredjepartsapper.

Hvis problemet forsvinner i sikker modus, er en tredjepartsapp sannsynligvis involvert. Fjern nylig installerte apper én etter én, og start normalt etter hver avinstallering. Hvis problemet fortsetter i sikker modus, ligger årsaken i selve Android-systemet, produsentens fastvare eller maskinvaren.

Tilbakestilling til fabrikkinnstillinger er den siste programvaretesten. Sikkerhetskopier dataene først. Hvis problemet består etter en ren tilbakestilling uten at du gjenoppretter apper, er maskinvarefeil langt mer sannsynlig.

Se etter mønstre. Et dødt berøringsområde på nøyaktig samme sted hver gang peker mot skjermen eller digitalisereren. En telefon som slår seg av ved 20 %, men fungerer mens laderen er koblet til, peker mot batteriet. Et kamera som begynte å summe etter et fall, kan ha en skadet fokus- eller OIS-modul. Hvis telefonen ble ustabil rett etter en stor oppdatering, blant annet Android 17 på Pixel, bør du installere nye rettelser og teste på nytt før du antar at hovedkortet er defekt.

## Hvorfor maskinvare svikter

Batterier slites. Det er ganske enkelt litiumionkjemi. Google bruker 80 % gjenværende kapasitet som en anbefalt terskel for batteribytte på Pixel, med et beregnet antall ladesykluser som avhenger av modellen. Pixel 3 til og med Pixel 8 Pro samt Pixel Fold er oppgitt til omtrent 800 sykluser, mens Pixel 8a og nyere er oppgitt til omtrent 1000 sykluser.

Porter og knapper svikter på grunn av bruk. USB-C-porter samler lo, særlig når telefonen ligger i en lomme. Knapper mister den tydelige motstanden etter tusenvis av trykk. Høyttalergitter tettes så gradvis at du kanskje ikke merker det før samtalelyden blir dempet.

Fall gir mer uforutsigbare problemer. Telefonen kan overleve uten knust glass og likevel få en løs kontakt, skadet kameramodul, bøyd ramme eller svekket loddeforbindelse. Vann er verre, fordi korrosjon kan vise seg først flere dager eller uker senere.

Varme fremskynder nesten alt. Lading i direkte sollys, spilling mens telefonen lades eller oppbevaring i en varm bil kan eldes batteriet raskere og utløse termisk struping. Vedvarende batteritemperaturer over omtrent 40 °C bør tas på alvor.

Produksjonsvariasjon er også reell. To telefoner med samme modellnavn oppfører seg ikke nødvendigvis helt likt. Små forskjeller i brikker, termisk kontakt, skjermpaneler, sensorkalibrering, modemfastvare og regionale varianter kan påvirke batteritid, varme, signal og testresultater. Det betyr ikke automatisk at én enhet er defekt. Tall på nettet er intervaller, ikke løfter.

## Test batteriet

Start med opplysningene telefonen faktisk viser.

På Pixel 8a og nyere finner du siden `Battery health` under `Settings > Battery`. Der vises om batteriet har statusen Normal eller Reduced, og `Battery capacity` viser et anslag over gjenværende kapasitet sammenlignet med da batteriet var nytt. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 og Pixel 8 Pro viser ikke den samme statusen for batterihelse.

På Samsung bruker du diagnostikken i Samsung Members. Gå til `Få hjelp > Vis tester`, og velg batteritesten. Den nøyaktige ordlyden kan variere med region og appversjon, men Samsung Members er et tryggere valg enn tilfeldige batterikoder.

På OnePlus, OPPO, realme, Xiaomi og andre merker kan du se under batteriinnstillingene eller produsentens vedlikeholdsapp. Noen viser batterihelse, andre gjør det ikke. Androids batterirapportering er fortsatt ujevn mellom produsenter.

Batteriet er mistenkelig hvis telefonen tappes raskt ved lett bruk, slår seg av ved 15-20 %, blir varm under lading eller buler slik at bakdekselet eller skjermen løfter seg. Slutt å bruke en telefon med oppsvulmet batteri og få den undersøkt. Det er ikke et programvareproblem.

## Test skjermen og berøringslaget

For å finne døde piksler viser du heldekkende bilder i hvitt, svart, rødt, grønt og blått. Se langsomt over hele skjermen. Døde piksler forblir svarte. Piksler som har satt seg fast, lyser konstant i én farge. OLED-innbrenning er enklest å se på en jevn grå bakgrunn med middels lysstyrke.

For å teste berøring åpner du en tegneapp og tegner tette vannrette og loddrette linjer over hele skjermen. Brudd i linjene avslører døde områder. Du kan også aktivere utvikleralternativene og slå på `Show taps` eller `Pointer location`, og deretter dra fingeren over hele panelet.

Samsungs `*#0*#`-meny har skjerm- og berøringstester på mange Galaxy-modeller. Pixel Diagnostics, Motorola Device Help og Xiaomi CIT kan også teste skjerm og berøring når funksjonene er tilgjengelige.

## Test høyttalere og mikrofoner

Spill av en ringetone og deretter musikk eller en video du kjenner godt. Lytt etter skurring, forvrengning eller om én stereokanal er mye svakere enn den andre. På telefoner med stereohøyttalere kan du dekke én høyttaler om gangen med en finger for å skille ørehøyttaleren fra høyttaleren nederst.

For mikrofonen tar du opp et kort taleklipp fra omtrent en armlengdes avstand og spiller det av. Test deretter en vanlig samtale. Samtalelyd bruker støydemping og nettverksbehandling, så et opptak kan høres fint ut selv om samtaler fortsatt låter dårlig.

Før du skylder på maskinvaren, tar du av dekselet, kobler fra Bluetooth-enheter, rengjør høyttaler- og mikrofonåpningene med en tørr, myk børste og kontrollerer mikrofontillatelsen for appen du tester.

## Test kameraene

Åpne kameraappen og test alle kameraene telefonen har: hovedkamera, ultravidvinkel, tele, makro hvis det finnes, og frontkamera. Se etter fokus som stadig leter, faste uklare områder, fargestikk, risting i video eller klikkelyder når fokus endres.

Optisk bildestabilisering kan bli skadet ved fall. Symptomet er ofte tydelig: Videoen skjelver selv når hendene er rolige, eller kameraet lager en summelyd. Programvare kan påvirke bildebehandlingen, men kan ikke reparere en fysisk løs stabiliseringsmodul.

## Test lading og porter

Bruk en kabel og lader du vet fungerer før du skylder på telefonen. Det høres enkelt ut, men overraskende mange «ødelagte USB-C-porter» viser seg å være defekte kabler.

Se inn i porten med godt lys. Lommelo kan presses sammen i bunnen og hindre pluggen i å gå helt inn. Bruk en tannpirker av tre eller plast forsiktig, eller luft med lavt trykk. Ikke skrap kontaktene med metall.

Hvis telefonen bare lader i en bestemt vinkel, kobler fra når den beveges eller nekter dataoverføring med flere kabler, kan porten eller det nedre kretskortet trenge reparasjon.

## Test sensorene

Sensorfeil viser seg som svært bestemte problemer: automatisk rotasjon slutter å virke, skjermen forblir på under samtaler, kompasset peker feil eller automatisk lysstyrke overreagerer.

For akselerometer og gyroskop slår du av rotasjonslåsen og roterer telefonen langsomt. Skjermen skal følge bevegelsen uten hakking. Et panoramabilde er også en grei gyroskoptest, fordi sammensettingen av bildet er avhengig av bevegelsessporing.

For nærhetssensoren ringer du noen og dekker den øvre delen av skjermen nær ørehøyttaleren. Skjermen skal slå seg av og deretter våkne når du fjerner hånden. Ta av deksel og skjermbeskytter før du konkluderer med at sensoren er ødelagt.

For lyssensoren slår du på automatisk lysstyrke og går mellom lyse og mørke områder. Skjermen bør justere seg i løpet av noen sekunder.

For magnetometeret åpner du Maps eller en kompassapp utendørs og unna biler, bærbare PC-er, magneter og metallbord. Hvis retningen er feil, kalibrerer du med en åttetallsbevegelse.

Samsungs `*#0*#`-meny og Samsung Members kan teste sensorer. Pixel Diagnostics, Motorola Device Help og Xiaomi CIT kan også dekke dem, avhengig av modell.

## Test nettverksmaskinvaren

Antenne- og radiofeil er vanskeligere å bevise fordi mobilnettet endrer seg hele tiden. Sammenlign med en annen telefon på samme nett, på samme sted og samtidig.

Signalstyrke vises ofte i dBm i status- eller SIM-informasjonen. Skalaen er negativ, så et tall nærmere null er bedre. Rundt -50 dBm er utmerket. Rundt -90 dBm er brukbart. Rundt -110 dBm eller svakere er dårlig. Tallene betyr litt forskjellige ting for LTE, 5G og Wi-Fi, så bruk dem til sammenligning, ikke som en universell bestått-eller-ikke-bestått-grense.

Hvis telefonen mister Wi-Fi mens alle andre enheter holder forbindelsen, tester du nær ruteren, på et annet Wi-Fi-nett og med Bluetooth avslått. Hvis den samme telefonen svikter overalt, er feil i radiomaskinvaren eller fastvaren mer sannsynlig.

runcheck hjelper her fordi appen samler batteri-, varme-, nettverks-, lagrings- og hastighetsdata i én kontroll. Det er nyttig etter fall, kraftig varme eller vannskade, når flere symptomer kan overlappe.

## Når du bør reparere

Reparasjon er fornuftig når problemet kan gjentas, fortsetter i sikker modus, overlever en ren tilbakestilling og dukker opp i produsentens diagnoseverktøy eller en manuell test.

Ikke bytt deler fordi én app oppførte seg dårlig én gang. Telefonen bør repareres eller skiftes ut hvis batteriet er oppsvulmet, ladeporten er fysisk løs, berøring svikter i samme område hver gang, kameraet summer etter et fall eller mikrofonene svikter både i opptak og samtaler.

## Vanlige spørsmål

### Er diagnosekoder trygge?

De vanlige testmenyene i denne guiden er hovedsakelig skrivebeskyttede informasjonssider eller interaktive maskinvaretester. Ikke tast inn tilfeldige koder fra nettet. Enkelte produsentkoder kan endre radioinnstillinger eller starte servicefunksjoner.

### Hvorfor fungerer ikke `*#*#4636#*#*`?

Koden er ikke standardisert på tvers av Android. Den virker på mange Android-versjoner nær standardutgaven, men kan være deaktivert av Samsung, operatører eller produsentens fastvare.

### Hvor ofte bør jeg teste maskinvaren?

Hver noen måned er nok til vanlig vedlikehold. Test med en gang etter et hardt fall, vannkontakt, plutselig batteritap, ladeproblemer eller før du kjøper eller selger en brukt telefon.

### Er en treg telefon alltid et maskinvareproblem?

Nei. Start med sikker modus, ledig lagringsplass, appoppdateringer og nyere systemoppdateringer. Hvis tregheten fortsetter etter tilbakestilling til fabrikkinnstillinger, bør du undersøke maskinvare, slitasje på lagringen, et svakt batteri eller termisk struping nærmere.
