---
title: "Sådan kører du en hastighedstest på Android"
description: "Du trykker på Start, ser nålen springe og får et tal, der ser officielt ud. Nyttigt, ja. Et endeligt svar, nej."
listSummary: "Du trykker på Start, ser nålen springe og får et tal, der ser officielt ud."
hub: "network"
sourceNumber: 92
order: 3
tags: ["netværk","forbindelser","android","fejlfinding","guide"]
locale: "da"
draft: false
---
Testen viser, hvad der skete i det øjeblik, på den server og under de aktuelle netværksforhold. Det er et øjebliksbillede, ikke en diagnose i sig selv. Alligevel er det det bedste første tal at få, når telefonen føles langsom.

## Det måler testen

En almindelig test viser downloadhastighed, uploadhastighed og latenstid.

Downloadhastighed er den hastighed, data når frem til telefonen med. Den påvirker browsing, streaming, appdownloads, visning af billeder fra skyen og det meste almindelige internetbrug.

Uploadhastighed er den hastighed, data forlader telefonen med. Den er vigtig, når du sender videoer, sikkerhedskopierer billeder, uploader filer, deltager i videoopkald eller deler skærmen.

Latenstid, ofte kaldet ping, er forsinkelsen frem og tilbage målt i millisekunder. Lav latenstid får en forbindelse til at føles hurtig til at reagere. Høj latenstid får tryk, opkald, spil og fjernarbejde til at føles træge, selv om downloadhastigheden ser fin ud.

Nogle apps viser også jitter. Jitter beskriver, hvor meget latenstiden varierer fra øjeblik til øjeblik. Et ping på 30 ms med lav jitter føles stabilt. Et ping på 30 ms, der springer voldsomt op og ned, kan stadig give hakkende opkald.

## Brug Googles indbyggede test til et hurtigt tjek

Åbn en browser, søg efter **speed test** på Google, og start testen fra kortet, hvis det vises. Den bruger Measurement Lab, eller M-Lab, og viser de vigtigste tal uden installation af en app.

Det er fint som et hurtigt rimelighedstjek. Du får ikke meget historik, og det er ikke det bedste værktøj til at sammenligne flere netværk over tid. Men når nogen siger, at "internettet er langsomt", er det en hurtig måde at se, om telefonen får 2 Mbps eller 200 Mbps.

## Brug en app, når du har brug for historik

Speedtest by Ookla er den velkendte mulighed. Den kan teste download, upload, latenstid og som regel jitter, vælge servere og gemme en resultathistorik. Det er nyttigt, når du vil sammenligne Wi-Fi, LTE, 5G og forskellige placeringer.

FAST Speed Test fra Netflix er enklere. Den fokuserer først på downloadhastigheden, fordi den er udviklet med streamingydelse for øje. Åbn de ekstra oplysninger for at se upload og latenstid.

Meteor Speed Test fra Opensignal er nyttig for mindre tekniske brugere, fordi den forklarer, om den målte forbindelse er god nok til almindelige typer apps som streaming, spil, browsing og videoopkald.

runcheck bruger M-Lab NDT7 til den indbyggede hastighedstest og gemmer resultater sammen med forbindelsestype og signalkontekst. Det er vigtigt, fordi hastigheden alene kan være misvisende. Et dårligt resultat med svagt signal betyder noget andet end et dårligt resultat med stærkt signal og høj latenstid.

## Hold øje med forbruget af mobildata

Hver test overfører rigtige data. På Wi-Fi betyder det som regel ikke noget. På mobilnettet kan det gøre.

Små webbaserede test bruger måske kun nogle få dusin MB. Appbaserede test på hurtig LTE eller 5G kan bruge langt mere, fordi de forsøger at måle, hvor mange data forbindelsen kan flytte i testperioden. Flere test i træk kan bruge hundredvis af MB.

Test derfor mobildata med vilje. Slå Wi-Fi fra, kør testen én eller to gange, gem resultaterne, og stop.

## Sådan får du et renere resultat

Stå stille. Hvis du bevæger dig under en mobiltest, kan telefonen skifte mast, frekvensbånd eller signalforhold, mens testen kører.

Luk først de oplagte båndbreddeslugere. Sikkerhedskopiering til skyen, appopdateringer, videostreams og downloads konkurrerer med testen.

Test Wi-Fi og mobildata hver for sig. Hvis Wi-Fi er slået til, tester du Wi-Fi. Slå Wi-Fi fra for at teste mobilnettet.

Kør kun tre test, når du har brug for et bedre gennemsnit. Hvis ét resultat afviger voldsomt fra de to andre, kan du se bort fra det. Det ramte sandsynligvis en kort belastningsspids, et dårligt servervalg eller en overførsel i baggrunden.

Brug en server i nærheden til almindelig fejlsøgning. En fjern server øger latenstiden og kan vise lavere hastighed af grunde, der ikke har noget med din lokale forbindelse at gøre. Det er kun nyttigt at teste fjerne servere, når du specifikt vil vide, hvordan forbindelsen til tjenester i det område fungerer.

## Hvad tallene betyder i praksis

Til browsing og beskeder kan selv 5 Mbps føles fint, hvis latenstiden er lav. Til HD-video er 5-10 Mbps som regel nok. Til 4K-streaming bør du sigte efter mindst 25 Mbps pr. stream.

Videoopkald er mere afhængige af upload og latenstid, end mange tror. Et downloadresultat på 200 Mbps redder ikke et opkald, hvis upload er 0,5 Mbps, eller jitter er høj.

I spil betyder latenstid og jitter mere end downloadhastighed, når spillet først er installeret. En stabil forbindelse på 40 Mbps kan føles bedre end en forbindelse på 400 Mbps med tilfældige spring i latenstiden.

Ved sikkerhedskopiering til skyen afgør uploadhastigheden, hvor besværlig processen bliver. Upload er ofte langt lavere end download på både hjemmebredbånd og mobilnet, så gå ikke ud fra, at et hurtigt downloadresultat også betyder hurtige sikkerhedskopier.

## Sammenlign med det rigtige løfte

På hjemmets Wi-Fi skal du sammenligne resultatet med dit bredbåndsabonnement, men tage højde for Wi-Fi-overhead. Hvis abonnementet er på 100 Mbps, og telefonen får 80 eller 90 Mbps tæt på routeren, er der ikke noget problem. Får den 25 Mbps lige ved siden af routeren, skal du begynde at se på routeren, kanalbelastning, internetudbyderen eller en anden enhed, der bruger båndbredde.

På mobilnettet skal du ikke forvente den markedsførte tophastighed for 5G. Den virkelige hastighed afhænger af mobilselskab, frekvensbånd, belastning på masten, abonnementets prioritet, signalet indendørs og telefonens modem. Test flere steder, før du dømmer telefonen.

Sammenlign også med opgaven. Hvis Netflix virker, opkaldene er tydelige, og apps downloades uden problemer, kan jagten på et flottere tal i hastighedstesten være spild af tid.

## Gem kun resultater, når de fortæller en historie

Ét resultat er nok til at bekræfte, at noget er galt. Nogle få test over tid er bedre til at finde et mønster.

Kør en test, når forbindelsen føles dårlig, og en ny, når den føles normal. Notér netværk, placering, tidspunkt, signalstyrke og om en VPN var tilsluttet.

Det er her, historikken hjælper. Hvis Wi-Fi-hastigheden falder hver aften, skal du mistænke belastning i hjemmet eller hos internetudbyderen. Hvis mobildata kun bliver langsomt i én bygning, skal du mistænke dækningen. Hvis alle netværk kun er langsomme på én telefon, skal du undersøge telefonen.
