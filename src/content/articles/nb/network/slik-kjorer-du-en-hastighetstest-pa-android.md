---
title: "Slik kjører du en hastighetstest på Android"
description: "Du trykker på start, ser nålen hoppe og får et tall som ser offisielt ut. Nyttig, ja. Et endelig svar, nei."
listSummary: "Du trykker på start, ser nålen hoppe og får et tall som ser offisielt ut."
hub: "network"
sourceNumber: 92
order: 3
tags: ["nettverk","tilkobling","android","feilsøking","guide"]
locale: "nb"
draft: false
---
Testen viser hva som skjedde akkurat da, mot den serveren og under de nettverksforholdene. Den er et øyeblikksbilde, ikke en diagnose alene. Likevel er dette det beste første tallet å hente inn når telefonen føles treg.

## Hva testen måler

En vanlig test viser nedlastingshastighet, opplastingshastighet og forsinkelse.

Nedlastingshastigheten forteller hvor raskt data kommer fram til telefonen. Den påvirker nettsurfing, strømming, appnedlastinger, visning av bilder i skyen og det meste av vanlig internettbruk.

Opplastingshastigheten forteller hvor raskt data sendes fra telefonen. Den er viktig når du sender videoer, sikkerhetskopierer bilder, laster opp filer, deltar i videosamtaler eller deler skjermen.

Forsinkelse, ofte kalt ping, er tiden en datapakke bruker fram og tilbake, målt i millisekunder. Lav forsinkelse gjør at forbindelsen reagerer raskt. Høy forsinkelse får trykk, samtaler, spill og fjernarbeid til å henge etter selv når nedlastingshastigheten ser god ut.

Noen apper viser også jitter. Det er hvor mye forsinkelsen varierer fra øyeblikk til øyeblikk. En ping på 30 ms med lav jitter føles stabil. En ping på 30 ms som hopper kraftig opp og ned, kan fortsatt gi hakkete samtaler.

## Bruk Googles innebygde test til en rask kontroll

Åpne en nettleser, søk etter **speed test** på Google, og trykk på **Run Speed Test** når kortet vises. Testen bruker Measurement Lab, eller M-Lab, og viser de viktigste tallene uten at du må installere en app.

Dette er en god, rask realitetssjekk. Du får ikke særlig mye historikk, og løsningen er ikke best egnet til å sammenligne flere nettverk over tid. Men når noen sier at «internett er tregt», ser du raskt om telefonen får 2 Mbps eller 200 Mbps.

## Bruk en app når du trenger historikk

Speedtest by Ookla er det velkjente valget. Du kan teste nedlasting, opplasting, forsinkelse og vanligvis jitter, velge server og lagre resultathistorikk. Det er nyttig når du vil sammenligne wifi, LTE, 5G og ulike steder.

FAST by Netflix er enklere. Den prioriterer nedlastingshastighet fordi tjenesten ble laget med tanke på strømmeytelse. Trykk på **Vis mer informasjon** for å se opplasting og detaljer om forsinkelse.

Meteor by OpenSignal passer godt for mindre tekniske brukere fordi den forklarer om den målte forbindelsen er god nok til vanlige apptyper som strømming, spilling, nettsurfing og videosamtaler.

runcheck bruker M-Lab NDT7 i den innebygde hastighetstesten og lagrer resultatene sammen med tilkoblingstype og signalforhold. Det er viktig fordi hastigheten alene kan villede. Et dårlig resultat med svakt signal betyr noe annet enn et dårlig resultat med sterkt signal og høy forsinkelse.

## Følg med på bruken av mobildata

Hver test overfører ekte data. På wifi betyr det vanligvis lite. På mobilnettet kan det gjøre det.

Små nettbaserte tester bruker kanskje bare noen titalls MB. Appbaserte tester på rask LTE eller 5G kan bruke langt mer fordi de prøver å måle hvor mye data forbindelsen klarer å flytte i løpet av testperioden. Flere tester etter hverandre kan bruke flere hundre MB.

Test derfor mobildata med vilje. Slå av wifi, kjør testen én eller to ganger, lagre resultatene og stopp.

## Slik får du et renere resultat

Stå stille. Hvis du beveger deg under en mobiltest, kan telefonen bytte eller justere basestasjon, frekvensbånd eller signalforhold mens testen kjører.

Lukk opplagte båndbreddesluk først. Sikkerhetskopiering til skyen, appoppdateringer, videostrømmer og nedlastinger konkurrerer med testen.

Test wifi og mobildata hver for seg. Hvis wifi er på, tester du wifi. Slå av wifi for å teste mobilnettet.

Kjør tre tester bare når du trenger et bedre gjennomsnitt. Hvis ett resultat skiller seg voldsomt fra de to andre, kan du se bort fra det. Testen traff sannsynligvis en kort kapasitetstopp, et dårlig servervalg eller en overføring i bakgrunnen.

Bruk en server i nærheten ved vanlig feilsøking. En server langt unna gir høyere forsinkelse og kan vise lavere hastighet av grunner som ikke har noe med den lokale forbindelsen å gjøre. Det er bare nyttig å teste fjerne servere når du faktisk er opptatt av tjenester i den regionen.

## Hva tallene betyr i praksis

Til nettsurfing og meldinger kan selv 5 Mbps føles greit hvis forsinkelsen er lav. Til HD-video holder vanligvis 5-10 Mbps. For 4K-strømming bør du sikte mot minst 25 Mbps per strøm.

Videosamtaler er mer avhengige av opplasting og forsinkelse enn mange tror. Et nedlastingsresultat på 200 Mbps redder ikke samtalen hvis opplastingen er 0,5 Mbps eller jitteren er høy.

Til spilling betyr forsinkelse og jitter mer enn nedlastingshastighet når spillet først er installert. En stabil forbindelse på 40 Mbps kan føles bedre enn 400 Mbps med tilfeldige forsinkelsestopper.

Ved sikkerhetskopiering til skyen er det opplastingshastigheten som avgjør hvor smertefull prosessen blir. Opplasting er ofte langt tregere enn nedlasting på hjemmebredbånd og mobilnett, så ikke anta at et raskt nedlastingsresultat betyr raske sikkerhetskopier.

## Sammenlign med riktig løfte

På hjemme-wifi bør du sammenligne resultatet med bredbåndsabonnementet, men ta høyde for tap i wifi-forbindelsen. Hvis abonnementet er på 100 Mbps og telefonen får 80 eller 90 Mbps nær ruteren, er det ikke et problem. Får den 25 Mbps rett ved ruteren, bør du undersøke ruteren, kanalkø, internettleverandøren eller en annen enhet som bruker båndbredde.

På mobilnettet bør du ikke forvente hastigheten fra 5G-reklamen. Den reelle hastigheten avhenger av operatør, frekvensbånd, belastning på basestasjonen, prioritering i abonnementet, innendørssignal og modemet i telefonen. Test noen steder før du dømmer telefonen.

Sammenlign også med oppgaven. Hvis Netflix fungerer, samtalene er klare og apper lastes ned uten problemer, kan det være bortkastet tid å jakte på et penere tall i hastighetstesten.

## Ta vare på resultater når de viser et mønster

Ett resultat er nok til å bekrefte at noe er galt. Noen få tester over tid er bedre når du vil finne et mønster.

Kjør en test når forbindelsen føles dårlig, og en ny når den føles normal. Noter nettverk, sted, klokkeslett, signalstyrke og om et VPN var tilkoblet.

Det er her historikken hjelper. Hvis hastigheten faller hver kveld på wifi, kan belastningen i hjemmet eller kø hos internettleverandøren være årsaken. Hvis mobilnettet bare blir tregt i én bygning, peker det mot dekningen. Hvis alle nettverk bare er trege på én telefon, bør du undersøke telefonen.
