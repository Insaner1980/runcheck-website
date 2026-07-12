---
title: "Hva er termisk struping, og hvordan påvirker det telefonen?"
description: "Androids innebygde termiske struping beskytter telefonen mot varme. Lær om Androids termiske nivåer, termisk margin, vanlige årsaker og hvordan du reduserer struping på en trygg måte."
listSummary: "Androids innebygde termiske struping beskytter telefonen mot varme."
hub: "thermal"
sourceNumber: 56
order: 4
tags: ["temperatur","varme","android","feilsøking","maskinvare"]
locale: "nb"
draft: false
---
Hvorfor føles en rask telefon plutselig treg midt i et spill, en videosamtale eller et lengre kameraopptak? Som regel skyldes det termisk struping. Enheten er blitt varm, så Android og produsenten reduserer ytelsen før varmen blir et sikkerhetsproblem.

## Hva termisk struping betyr

Det er en kontrollert nedbremsing. Telefonen kan redusere hastigheten til CPU og GPU, dempe skjermlysstyrken, senke ladeeffekten, begrense aktiviteten i radiosystemene eller kutte ned på annen strømkrevende aktivitet for å få temperaturen ned.

Dette er ikke en feil i seg selv. Telefonen velger et lavere ytelsesnivå slik at batteriet, skjermen, modemet og SoC holder seg innenfor sikkerhetsgrensene produsenten har satt.

Du merker kompromisset som tapte bilderuter, tregere åpning av apper, dempet lysstyrke, kamerabegrensninger, langsommere lading eller et spill som går jevnt i starten og begynner å hakke senere. Android spør ikke om tillatelse. Det bare skjer.

## Androids termiske nivåer

Android har hatt offentlige API-er for termisk status siden Android 10. På enheter som støtter dem, kan apper lese forenklede alvorlighetsnivåer gjennom `PowerManager`:

- **None:** Ingen termisk struping.
- **Light:** Lett struping som vanligvis påvirker normal bruk lite.
- **Moderate:** Noe struping, men telefonen er som regel fortsatt fullt brukbar.
- **Severe:** Kraftig struping der ytelsen blir tydelig påvirket.
- **Critical:** Plattformen har allerede redusert strømbruken kraftig.
- **Emergency:** Viktige komponenter kan begynne å slå seg av på grunn av temperaturen.
- **Shutdown:** Enheten må slå seg av umiddelbart.

Navnene er standardiserte. Temperaturene som utløser dem, er det ikke. En Pixel, en Galaxy S Ultra, en Xiaomi-spilltelefon og en rimelig Motorola kan knytte varme til nivåene på ulike måter fordi kjøling, batteri, ramme, skjerm og sikkerhetsmarginer er forskjellige.

Derfor blir råd med én nøyaktig temperatur fort misvisende. Én telefon kan begynne å strupe ved en batteritemperatur som en annen tåler under lading.

## Termisk margin gir et tidligere varsel

Termisk status viser hvilket nivå telefonen er på nå. Termisk margin, eller `thermal headroom`, viser hvor nær den aktuelle belastningen er kraftig struping.

Android beskriver verdien som et ikke-negativt tall fra 0,0 og oppover, der 1,0 betyr at enheten er ved eller nær `THERMAL_STATUS_SEVERE` for den aktuelle belastningen. Verdien kan også overstige 1,0 når strupingen er enda kraftigere. Spill kan bruke signalet til å senke bildefrekvens eller grafikkvalitet før spilleren merker nedgangen.

Det finnes en hake: støtten varierer mellom enheter. Noen telefoner gir begrensede data, noen returnerer `NaN` hvis API-et spørres for ofte, og produsentene kan tolke marginen ulikt fordi den termiske utformingen er forskjellig. God diagnostikk bør behandle termisk margin som et signal, ikke som et universelt termometer.

runcheck bruker Androids offentlige termiske signaler når enheten gjør dem tilgjengelige. Det er viktig fordi vanlige apper ikke bør basere brukervendt temperaturstatus på private sysfs-filer.

## Hva utløser struping?

Lange spilløkter er det åpenbare eksemplet. Et 3D-spill kan belaste CPU, GPU, skjerm, høyttalere, nettverk og vibrasjon samtidig.

Kameraet er en annen vanlig årsak. Opptak i 4K eller 8K, HDR-behandling, lange videoklipp og direkte sollys kan varme opp telefonen raskt. Kameraappen kan redusere kvaliteten eller stoppe opptaket når telefonen blir for varm.

Navigasjon er langsommere, men lumsk. Skjermen står på, GPS er aktiv, modemet laster ned kartdata, og telefonen kan sitte i en varm bilholder. Legg til sol gjennom frontruten, så kommer strupingen raskere.

Lading under aktiv bruk er en enkel feil å gjøre. Hurtiglading skaper varme alene. Kombiner det med et spill, en videosamtale, internettdeling eller videoopptak, og telefonen får mindre rom til å kjøle seg ned.

Svakt signal kan også belaste modemet. En telefon som kjemper for å holde 5G-forbindelsen i et område med dårlig dekning, kan bli varm selv med skjermen av.

Store systemoppdateringer kan gi midlertidig varme. Android 17 ble lansert 16. juni 2026 og gjort tilgjengelig for de fleste støttede Pixel-enheter. Andre produsenter følger sine egne lanseringsplaner. Etter enhver stor oppdatering kan appoptimalisering og bakgrunnssynkronisering gjøre telefonen varm i en dag eller to.

## Termisk struping og batterirelatert ytelsesstyring

Denne typen struping er midlertidig. Stopp den tunge belastningen, la telefonen kjøle seg ned, og ytelsen kommer tilbake.

Batterirelatert ytelsesstyring er noe annet. Når batterier eldes, øker den interne motstanden og evnen til å levere høy effekt blir dårligere. Noen telefoner justerer ladespenning, ladehastighet eller annen oppførsel for å holde et gammelt batteri stabilt. Google dokumenterer for eksempel Hjelp med batteritilstand på Pixel 6a og nyere. På støttede modeller begynner trinnvise justeringer av maksimal batterispenning fra 200 ladesykluser.

Det er ikke det samme som at et spill blir tregt etter 20 minutter. Det ene handler om varme under belastning. Det andre handler om styring av et aldrende batteri.

Løsningen er også forskjellig. Varme krever kjøling og lavere belastning. Et svekket batteri trenger utskifting eller mer skånsomme ladevaner.

## Slik merker du at det skjer

Det tydeligste tegnet er at ytelsen blir dårligere i løpet av en økt. Et spill starter på 60 fps og faller senere. Kameraet begynner å ta opp uten problemer, men viser deretter en varmeadvarsel. Skjermen dempes selv om du ikke har endret lysstyrken. Ladingen settes på pause eller blir mye langsommere.

Hvor du kjenner varmen, kan også gi et hint. Varme nær kameraområdet peker ofte mot SoC. Varme midt på baksiden peker mer mot batteriet eller spolen for trådløs lading. Varme ved USB-C-porten kan tyde på belastning i kabel, lader, kontakt eller ladekrets.

Apper som leser Androids termiske status, gjør vurderingen mindre vag. At statusen går fra None til Light og Moderate under et spill, kan være normalt. Severe, Critical eller gjentatte hendelser nær Shutdown under lett bruk er det ikke.

## Slik reduserer du struping

Reduser belastningen før telefonen må gjøre det for deg.

I spill bør du først senke bildefrekvensen. Det gir ofte størst effekt. Senk deretter oppløsning, skygger, effekter og teksturkvalitet. En middels innstilling med stabil bildefrekvens føles vanligvis bedre enn en maksimal innstilling som begynner å strupe etter ti minutter.

Ta av dekselet under tung bruk. Bakpanelet og rammen er en del av kjølingen.

Bruk Wi-Fi i stedet for mobildata når signalet er svakt. Dårlig mobildekning kan gjøre en ellers normal økt varm.

Unngå direkte sollys. En telefon kan begynne å strupe i en solrik bilholder selv om belastningen ikke er ekstrem.

Ikke hurtiglad under tung bruk. Koble fra laderen, eller bruk en langsommere lader hvis du må fortsette.

Hold apper og systemet oppdatert. Produsentene justerer termisk oppførsel over tid, og en dårlig appoppdatering kan også skape varme frem til den blir rettet.

## Når struping tyder på et større problem

Struping under et krevende spill er normalt. Struping mens du skriver en melding på et kjølig bord, er det ikke.

Hvis telefonen blir varm når den ligger ubrukt, bør du kontrollere batteribruk, signalstyrke, nylig installerte apper og sikker modus. Hvis den fortsatt blir varm i sikker modus, eller batteriet er oppsvulmet, tømmes plutselig eller telefonen slår seg av med strøm igjen, bør du behandle det som et maskinvare- eller batteriproblem.

Under 80 % batterihelse er en vanlig terskel for å vurdere utskifting på telefoner som viser tallet. På støttede Pixel-modeller merkes kapasitet under 80 % som Redusert. Samsung Members viser batteristatus som Normal, Svakt eller Dårlig. Slike statuser er mer nyttige enn å gjette ut fra varme alene.

## Kort oppsummert

Telefonens termiske sikkerhetssystem er ikke fienden. Du kan redusere strupingen ved å senke belastningen, forbedre kjølingen, unngå varme omgivelser og ikke kombinere hurtiglading med tung bruk. Men hvis struping skjer under lett bruk, bør du ikke overse det. Da kan årsaken være en app, svakt signal, laderen eller et slitt batteri.
