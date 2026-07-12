---
title: "Slik leser du statistikk over batteribruk på Android"
description: "Du åpner Batteribruk og ser at én app står for 42 %. Det ser ille ut. Noen ganger er det det. Andre ganger betyr tallet nesten ingenting."
listSummary: "Du åpner Batteribruk og ser at én app står for 42 %."
hub: "battery"
sourceNumber: 14
order: 4
subgroup: "Health"
tags: ["batteri","strømforbruk","feilsøking","android","ytelse"]
locale: "nb"
draft: false
---
Androids batteristatistikk er nyttig når du skal snevre inn et problem, men den er ikke en kvittering som viser nøyaktig hvor hver eneste milliampere-time ble av. Poenget er å lese prosentene i riktig sammenheng.

**Metabeskrivelse:** Androids statistikk over batteribruk viser hvilke apper og systemtjenester som bruker strøm. Se hvor du finner tallene, hva prosentene betyr, og hvordan du oppdager reelle batteriproblemer.

## Hvor du finner statistikken

På Pixel og Android-enheter med et standardnært grensesnitt åpner du **Batteribruk** fra Batteri-delen i Innstillinger. Der kan du se batteribruk etter app, og på nyere Pixel-versjoner kan du bytte mellom apper og systemkategorier. Når du trykker på en app, åpnes batteriinnstillingene for den, blant annet valget **Tillat bruk i bakgrunnen**.

På Samsung Galaxy-telefoner går du til **Innstillinger > Batteri**. På enkelte eldre One UI-versjoner ligger Batteri under **Batteri og enhetsvedlikehold**. Samsung viser ofte en graf først og deretter en detaljvisning av hvilke apper og funksjoner som har brukt strøm. Noen versjoner viser også en lengre apphistorikk, og den er ofte mer nyttig enn ett kort tidsrom mellom ladinger.

På Xiaomi-, Redmi- og POCO-telefoner finner du vanligvis en visning for batteribruk eller strømforbruk i Batteri-menyen. Navnene varierer mellom HyperOS- og MIUI-versjoner og mellom modeller, så menyen kan hete noe litt annet på din telefon.

På OnePlus-, OPPO- og realme-telefoner starter du under Batteri og ser etter en visning for batteribruk, detaljert batteribruk eller styring av appenes batteribruk. Når du trykker på en app, skiller disse grensesnittene vanligvis mellom bruk i forgrunnen og bakgrunnen.

Tastaturkoden `*#*#4636#*#*` åpner en testmeny på enkelte Android-telefoner. Der kan du se spenning, temperatur, helsestatus og ladestatus. Dette er ikke en visning av strømbruk per app, og mange produsenter har deaktivert menyen.

## Hva prosentene egentlig betyr

Tallet ved siden av en app er vanligvis appens andel av batteriet som er brukt, ikke en andel av telefonens totale batterikapasitet.

Tenk deg at telefonen går fra 100 % til 70 %. Da er 30 prosentpoeng brukt. Hvis YouTube står for 50 % i Batteribruk, betyr det ikke at YouTube har brukt halvparten av hele batteriet. Det betyr at YouTube står for omtrent halvparten av forbruket Android har fordelt i dette tidsrommet. I eksemplet tilsvarer det omtrent 15 prosentpoeng av selve batterinivået.

Snu så på eksemplet. Telefonen går fra 100 % til 96 %, og én app står for 60 %. Appen dominerte et svært lite samlet strømforbruk. Det kan være helt uproblematisk.

Dette er den vanligste feilen jeg ser. Folk går rett etter den høyeste prosenten uten å sjekke hvor mye batteri som faktisk er brukt.

## Hvordan Android anslår strømforbruket

Android har ikke en liten strømmåler festet til hver app. Systemet beregner forbruket.

Rammeverket registrerer hvor lenge ulike deler av telefonen befinner seg i bestemte tilstander, blant annet CPU, skjerm, GPS, Wi-Fi, mobilradio og Bluetooth. Produsenten leverer en strømprofil som beskriver hvor mye strøm hver komponent forventes å trekke i disse tilstandene. Android kombinerer tidsdataene med profilen og fordeler forbruket mellom apper og systemkomponenter.

Det er godt nok til feilsøking. Det er ikke en måling på laboratorienivå.

Strømprofilene varierer mellom produsenter. En Pixel og en Xiaomi kan kjøre den samme appen like lenge og likevel vise forskjellige prosenter. Appen har ikke nødvendigvis oppført seg annerledes. Regnemodellen er en annen.

## Slik leser du batterigrafen

Start med grafen, ikke applisten.

Et bratt fall mens skjermen er på, er vanligvis normalt. Høy lysstyrke, video, kart, spill, kamera og mobildata kan tømme batteriet raskt. Et bratt fall mens skjermen er av, er mer interessant. Det kan tyde på bakgrunnsaktivitet, dårlig signal, en synkronisering som går i løkke, en prosess som har låst seg, eller at telefonen aldri går ordentlig i dvalemodus.

En nesten flat linje mens skjermen er av, er det du vil se. Da hviler telefonen.

Lading vises som stigende linjer eller brå hopp oppover. Et tomrom i grafen betyr vanligvis at telefonen var slått av, at statistikken ble nullstilt, eller at systemet ikke samlet inn data i perioden. Ikke les for mye inn i en rotete graf fra en dag der du småladet fem ganger. Hyppige påfyll gjør prosentfordelingen mellom appene mer urolig.

## Skjerm, aktiv tid og signal

Noen Android-versjoner viser felt eller søyler under grafen. De er lette å overse, men forklarer ofte mye.

Skjermtid viser når skjermen var aktiv. Hvis det meste av forbruket sammenfaller med skjermtid, oppfører telefonen seg sannsynligvis normalt. Skjermen er en av de største strømslukerne i en moderne telefon.

Aktiv tid viser når CPU-en var i arbeid. Ideelt sett overlapper den for det meste med tiden skjermen var på. Lange aktive perioder mens skjermen er av, kan tyde på `wake locks` eller annet bakgrunnsarbeid som hindrer telefonen i å hvile. E-postsynkronisering, treningsapper, sikkerhetskopiering til skyen, navigasjon, meldingsapper og mediespillere kan alle gjøre dette. Noe av det er forventet. En handleapp som holder telefonen aktiv i tre timer, er det ikke.

Signalkvaliteten betyr også mye. Svakt mobilsignal bruker strøm fordi modemet må jobbe for å holde forbindelsen. Hvis `Mobile network standby` eller `Cell standby` havner nær toppen mens du er i et kjellerkontor, på et tog, i et grisgrendt område eller inne i en betongbygning, trenger det ikke å være noe galt med telefonen. Den kan ganske enkelt kjempe mot nettet.

## Mønstre det er verdt å bry seg om

At én app bruker mye batteri, er ikke automatisk et problem. At én app bruker mye batteri selv om du nesten ikke har brukt den, er et problem.

En videoapp øverst på listen etter to timers strømming er normalt. En nyhetsapp øverst etter fem minutters lesing er mistenkelig. Trykk på appen og sammenlign tiden i forgrunnen med tiden i bakgrunnen.

Høy bruk fra Android System eller systemapper er vanskeligere å tolke. Det kan bety et reelt systemproblem, særlig etter en feilfylt oppdatering. Men det kan også bety at Android ikke klarte å knytte forbruket tydelig til én app, og derfor la det i systemkategorien.

Det samme gjelder Google Play services nær toppen av listen. Tjenesten håndterer pushvarsler, kontosynkronisering, posisjon og andre fellesfunksjoner for mange apper. Hvis forbruket er høyt, bør du se etter apper som ber om posisjonen for ofte. Google Play services kan være budbringeren, ikke synderen.

At skjermen står for mer enn 40-50 % av det brukte batteriet, er normalt for mange. Hvis skjermbruken er lav, men det totale forbruket høyt, er det noe annet som arbeider.

## Hva du gjør når du finner en mistenkelig app

Begynn forsiktig. Oppdater appen. Start telefonen på nytt. Se om problemet gjentar seg neste dag.

Hvis det fortsetter, begrenser du appens bruk i bakgrunnen. På Pixel trykker du på appen i **Batteribruk** og justerer **Tillat bruk i bakgrunnen**, eller åpner appens batteriinnstillinger via **Innstillinger > Apper > [appnavn] > Batteribruk for apper**. På Samsung trykker du på appen i batterivisningen og bruker innstillingene for bakgrunnsbruk, apper i dvale eller apper i dyp dvale.

Tving avslutning er en midlertidig test, ikke en løsning. Det kan stoppe en app som løper løpsk akkurat nå, men pushvarsler, planlagte jobber eller en omstart kan starte den igjen. Å begrense batteribruken i bakgrunnen er ryddigere.

Sikker modus er nyttig når hele telefonen tappes raskt og du ikke finner én bestemt app. I Sikker modus deaktiveres tredjepartsapper. Hvis forbruket forsvinner, er programvare den sannsynlige årsaken. Hvis det fortsetter uendret, bør du undersøke signalforhold, en systemoppdatering, temperaturen på enheten eller selve batteriet.

## Hva statistikken ikke kan fortelle deg

Batteristatistikken beviser ikke at batteriet er friskt. Et slitt batteri og en dårlig app kan gi omtrent de samme symptomene i daglig bruk.

Tidsvinduet nullstilles eller endres også forskjellig fra telefon til telefon. Pixel legger hovedvekten på bruk siden siste fullading. Samsung har endret oppsettet mellom One UI-versjoner, og enkelte versjoner viser bruk siden siste lading i stedet for en streng full ladesyklus. Hyppig smålading gjør tidsvinduet kortere, og da kan prosentene se mer dramatiske ut enn de er.

Du trenger historikk for å se trender. AccuBattery kan anslå kapasitet og følge ladeøkter over tid. runcheck lagrer historikk for batterinivå, temperatur, utladingshastighet og relaterte øktdata, slik at du kan sammenligne dager i stedet for å stirre på én støyende graf.

Den beste bruken av Androids Batteribruk er enkel: Finn det første gode sporet, og sjekk om telefonens faktiske oppførsel støtter det. Hvis grafen, applisten, bakgrunnstiden og det du husker fra dagen peker mot det samme, har du sannsynligvis funnet årsaken til strømforbruket.
