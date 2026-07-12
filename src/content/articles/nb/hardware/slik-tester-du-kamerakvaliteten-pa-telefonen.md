---
title: "Slik tester du kamerakvaliteten på telefonen"
description: "Praktiske måter å kontrollere kamerakvaliteten på en Android-telefon, blant annet autofokus, objektivbytte, sensorfeil, videostabilitet og diagnoseverktøy."
listSummary: "maskinvare, testing og diagnostikk"
hub: "hardware"
sourceNumber: 110
order: 7
tags: ["maskinvare","testing","diagnostikk","android","guide"]
locale: "nb"
draft: false
---
---

Det blir enklere å teste et kamera når du slutter å tenke på megapiksler. En sensor på 50 MP kan fortsatt ta dårlige bilder hvis objektivet er skittent, autofokusen er ødelagt eller kameramodulen har blitt forskjøvet litt.

Målet er enkelt: Finn ut om kameraene i telefonen oppfører seg slik de skal.

## Begynn med et rent objektiv og et enkelt motiv

Tørk av objektivglasset med en ren mikrofiberklut. Gjør dette før alle andre tester. Et fingeravtrykk kan se ut som dårlig HDR, mykt fokus, dis i objektivet eller svak ytelse i lite lys.

Åpne standardkameraet og rett det mot noe med fine detaljer. Trykt tekst, en strukturert vegg, et tastatur eller grener mot himmelen fungerer godt. Trykk for å fokusere. Bildet skal bli skarpt raskt og holde fokus.

Hvis kameraet leter frem og tilbake uten å finne fokus, kan autofokusmekanismen være skadet. Det skjer ofte etter fall fordi den lille spolemotoren som flytter objektivet, er sårbar. Hvis bildet aldri blir skarpt uansett hvor du trykker, sammenligner du med et annet objektiv på samme telefon før du skylder på programvaren.

Bytt mellom alle tilgjengelige kameraer: hovedkamera, ultravidvinkel, telefoto, makro og frontkamera. Hvis ett objektiv er uklart mens de andre er skarpe, peker det mot den bestemte modulen. Mulige årsaker er støv under objektivdekselet, sprukket dekselglass, fukt i kameraområdet eller en modul som ble feiljustert under reparasjon.

## Se etter feil som gjentar seg

Ta et bilde av en ensfarget hvit vegg eller et rent papirark i jevnt lys. Da blir feilene enklere å se.

Litt mørkere hjørner er normalt. Telefonobjektiver er små, og programvaren korrigerer ofte kantene. Du ser etter en tydelig mørk flekk, en farget misfarging eller en skygge som havner på nøyaktig samme sted i hvert bilde.

Ta deretter et bilde i lite lys uten blits, og zoom inn. Sterke fargede prikker som blir stående på samme sted i flere bilder, kan være hot pixels eller sensorskade. Én merkelig piksel er sjelden grunn til panikk. En klynge er noe annet.

Ta så et bilde mot et lyst vindu eller en lampe, men ikke rett mot solen. Et lilla eller grønt fargestikk over hele bildet kan tyde på skade rundt sensorfilteret. Normal flare vises som striper eller spøkelsesformer nær sterkt lys. Den bør ikke plutselig være mye verre enn før telefonen falt i bakken eller ble reparert.

## Test eksponering og farger

Ta det samme bildet to ganger, én gang i dagslys og én gang innendørs under varmt lys. Hudtoner, hvite vegger og grå gjenstander er gode referanser fordi øyet raskt merker når de ser feil ut.

Telefoner behandler bildene mye, så ikke forvent helt nøytrale farger. Pixel, Samsung, Xiaomi og OnePlus gjør forskjellige valg. Den nyttige sammenligningen er mot samme modell, ikke mot et annet merke med en annen bildestil.

Se på eksempelbilder fra den samme telefonmodellen på nettet hvis du trenger en realitetskontroll. Bruk faktiske bilder, ikke bare kamerapoeng. Poeng kan være nyttige, men et utsnitt ved siden av ditt eget bilde forteller mer når du prøver å diagnostisere telefonen.

## Ta opp en kort video

Ta opp 20-30 sekunder med den høyeste oppløsningen du vanligvis bruker. Panorer sakte, gå noen skritt og snakk mens du filmer.

Spill av klippet og kontroller fire ting: fokus, stabilisering, tapte bilderuter og synkronisering av lyd. En telefon med optisk bildestabilisering skal jevne ut små håndbevegelser. Den gjør ikke gående opptak like stabile som med en gimbal, men videoen skal heller ikke riste voldsomt.

Hvis videoen fryser et øyeblikk, hakker eller mister lydsynkroniseringen, kan årsaken være varme, skrivehastigheten til lagringen, en feil i kameraappen eller maskinvare. Start telefonen på nytt, frigjør lagringsplass og prøv igjen. Hvis feilen gjentar seg mens telefonen er kjølig og har ledig plass, bør du ta den på alvor.

## Bruk innebygd diagnostikk

Samsung Galaxy-telefoner kan teste kameraene gjennom Samsung Members. Åpne appen, trykk Diagnostics på Discover-fanen, velg Phone diagnostics og kjør Camera-testen. Tilgjengelige tester varierer etter modell, men Samsung oppgir Camera som en av telefontestene.

Samsung-koden `*#0*#` åpner også kamerafliser på mange Galaxy-modeller. Mega Cam tester bakkameraet, og Front Cam tester frontkameraet. Disse testene bekrefter at modulene kan åpnes og ta bilder. De vurderer ikke bildekvaliteten for deg.

Xiaomi-, Redmi- og POCO-enheter har vanligvis kameratester i CIT-menyen, som åpnes med `*#*#6484#*#*`. På telefoner med flere bakkameraer kan menyen teste hvert objektiv separat.

Pixel-telefoner har ikke en Samsung-lignende `*#0*#`-meny. Googles Pixel Diagnostics-kode `*#*#7287#*#*` er knyttet til reparasjonsdiagnostikk på støttede enheter. De nøyaktige testene kan variere etter modell, region og programvareversjon.

Android 17 gjorde ikke kameradiagnostikk universell. Den avhenger fortsatt av OEM-en.

## Kontroller Camera2-støtte hvis funksjoner mangler

Hvis tredjepartsapper ikke kan bruke manuell eksponering, RAW, video med høy bildefrekvens eller telekameraet, kan du installere en Camera2 API-inspeksjonsapp som Camera2 API Probe. Den viser hva hvert kamera rapporterer til Android, blant annet støttede oppløsninger, autofokusmoduser, stabilisering og maskinvarenivå.

Maskinvarenivåene har betydning. `LEGACY` betyr at kameraet bruker eldre kompatibilitetsoppførsel. `LIMITED` gir grunnleggende Camera2-støtte. `FULL` gir bedre manuell kontroll. `LEVEL_3` legger til mer avansert funksjonalitet, blant annet RAW og reprosessering på enheter som eksponerer dette.

Open Camera er også nyttig når du vil skille behandlingen i standardkameraet fra selve kameramaskinvaren. Hvis Open Camera fokuserer riktig, men standardappen ikke gjør det, bør du tømme hurtigbufferen til kameraappen og se etter en programvareoppdatering før du antar at modulen er ødelagt.

Dette forteller ikke om objektivet er ripet. Det forteller om Android kan se kamerafunksjonene telefonen skal gjøre tilgjengelige.

## Når det sannsynligvis er maskinvare

Svart forhåndsvisning fra ett kamera, mens resten av appen åpnes, betyr ofte at modulen har sviktet eller at kamerakontakten er løs. Hvis kameraappen ikke åpnes i det hele tatt, kan årsaken være programvare. Tøm hurtigbufferen til kameraappen og start telefonen på nytt før du antar det verste.

Uskarpt fokus, gjentakende flekker, klynger av defekte piksler, kraftig fargestikk og ett objektiv som oppfører seg annerledes enn alle de andre, er tegn på maskinvarefeil. Programvareoppdateringer kan endre fargebehandling og skarphet. De kan ikke fjerne fukt bak objektivet eller reparere en ødelagt autofokusmotor.

Hvis problemet oppsto etter reparasjon av skjermen, bakglasset eller batteriet, bør du gå raskt tilbake til verkstedet. En kamerakontakt kan sitte dårlig, eller støv kan ha kommet inn mens telefonen var åpen.

runcheck gir ikke poeng til bildene dine, men kan hjelpe med å oppdage forhold som svekker kameraytelsen, blant annet varme, lite ledig lagringsplass og høyt batteriforbruk under lange opptak.
