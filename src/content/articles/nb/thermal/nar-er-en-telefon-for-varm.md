---
title: "Når er en telefon for varm?"
description: "Telefonens temperatur avhenger av omgivelsesvarme, batteritemperatur, lading og belastning. Under 35 °C er vanligvis normalt, over 40 °C fortjener oppmerksomhet, og 45 °C eller mer bør ikke være rutine."
listSummary: "Telefonens temperatur avhenger av omgivelsesvarme, batteritemperatur, lading og belastning."
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["temperatur","varme","android","feilsøking","maskinvare"]
locale: "nb"
draft: false
---
Når er telefonen for varm? Det irriterende svaret er at det avhenger av hvilken temperatur du måler.

Luften rundt telefonen er ett tall. Temperaturen på utsiden er et annet. Batterisensoren viser et tredje, og den er viktigst for batteriets aldring. En telefon kan kjennes bare litt varm i hånden selv om batteriet eller SoC allerede er varmt nok til at Android begynner å redusere ytelsen.

Mange smarttelefoner, blant annet Google Pixel-modeller, er laget for å fungere best ved omgivelsestemperaturer fra 0 °C til 35 °C. Det er temperaturen i rommet eller utendørs, ikke temperaturen inne i batteriet. En telefon i bruk er varmere enn luften rundt den.

## Praktiske temperatursoner

Disse sonene er praktiske råd, ikke en universell produsentspesifikasjon. Telefoner bruker forskjellige sensorer og termiske grenser. Likevel er sonene nyttige i vanlig feilsøking.

### Under 20 °C

Dette er kjølig. En telefon som ligger ubrukt i et kjølig rom, kan befinne seg her. Det er ingen varmefare, selv om svært kaldt vær kan få batteriet til å virke svakere frem til det blir varmt igjen.

### 20 °C til 35 °C

Dette er et behagelig område for batteritemperaturen under lett bruk. Meldinger, nettsurfing, samtaler, musikk og korte videoøkter ligger vanligvis et sted her. Hvis telefonen tilbringer mesteparten av dagen i dette området, er varme neppe problemet.

### 35 °C til 40 °C

Dette er varmt. Det er vanlig under hurtiglading, videosamtaler, GPS-navigasjon, spilling, kamerabruk eller internettdeling. Korte perioder er greit. Å ligge her i timevis hver dag er noe annet, fordi batterialdringen går raskere når temperaturen stiger.

### 40 °C til 45 °C

Dette er hett. Du vil sannsynligvis kjenne det gjennom baksiden eller rammen. Ladingen kan gå saktere, skjermen kan dempes, kameraet kan slå av blitsen, og spill kan miste ytelse.

Ikke få panikk over en kort topp på 42 °C under en tung oppgave. Vær derimot oppmerksom hvis telefonen ligger på 42 °C på nattbordet mens den lades, eller når den ikke gjør noe.

### Over 45 °C

Dette er for varmt for vanlig bruk. Telefonen bør nå redusere belastningen kraftig. Ladingen kan stoppe, ytelsen kan falle, radiosystemene kan begrenses, og temperaturadvarsler kan vises.

Gjentatt eksponering over 45 °C er hardt for litium-ion-batterier. Faren er ikke én fem minutters topp. Faren er å gjøre den til en del av hverdagen.

### Over 50 °C

Dette er faresonen. Normal bruk skal ikke presse en frisk telefon hit i et vanlig rom. Direkte sollys, en varm bil, en defekt lader, et sviktende batteri eller tung bruk under lading kan gjøre det.

Slå av telefonen hvis du kan, flytt den til et kjøligere sted og la den kjøle seg ned naturlig. Ikke legg den i fryseren. Kondens er en dårlig måte å gjøre et varmeproblem om til et vannproblem på.

## Slik kontrollerer du temperaturen

Android gir fortsatt ikke alle telefoner en ryddig side med nøyaktig batteritemperatur. I teorien burde dette vært enklere i 2026. I praksis avhenger det fortsatt av produsenten.

På støttede Pixel-telefoner finner du batteritilstanden under **Innstillinger > Batteri > Batteritilstand**. Google begrenser denne fullstendige visningen til Pixel 8a og nyere, og den er ikke tilgjengelig på Pixel Tablet. Siden viser batteritilstand og kapasitet, men ikke nødvendigvis et direkte temperaturtall.

Samsung-brukere bør begynne i **Samsung Members > Brukerstøtte > Telefondiagnostikk**. Enkelte Galaxy-modeller har også andre diagnostikkmenyer, men de varierer etter region og modell. På Xiaomi, OnePlus, OPPO og andre merker flyttes disse sidene ofte nok til at det tryggeste er å se under Batteri, Batteribeskyttelse eller Enhetsvedlikehold først.

Den gamle Android-koden `*#*#4636#*#*` åpner fortsatt batteriinformasjon på noen telefoner. Mange nyere modeller blokkerer den. Tredjepartsverktøy som CPU-Z, DevCheck, AIDA64 eller runcheck kan lese batteriets temperatursensor på mange enheter, men tilgangen avhenger fortsatt av hva produsenten gjør tilgjengelig.

runcheck er nyttig når du vil se mønstre i stedet for enkeltmålinger. Appen følger batteritemperaturen over tid, lagrer laveste og høyeste verdi i økten og plasserer den aktuelle målingen i praktiske soner som Cool, Normal, Warm, Hot og Critical.

## Hvorfor omgivelsestemperaturen endrer alt

En telefon har bare termisk margin når luften rundt er kjøligere enn telefonen. Ved 22 °C innendørs kan batteriet ligge på omtrent 26-30 °C i hvile og fortsatt ha rom til å bli varmere under bruk. Ved 35 °C utendørs er nesten hele denne marginen borte før du åpner Maps.

Derfor kan en telefon fungere perfekt om vinteren og føles ødelagt i juli. Samme telefon. Forskjellig utgangspunkt.

Biler er det verste hverdagslige eksemplet. Google advarer mot å utsette Pixel-telefoner for temperaturer over 45 °C, for eksempel på et dashbord eller nær en varmekilde. En telefon som ligger i en parkert bil, trenger verken å lades eller kjøre et spill for at batteriet skal eldes. Varmen alene er nok.

## Kulde er annerledes

Kulde gjør litium-ion-batterier trege. Telefonen kan vise mindre tilgjengelig strøm, føles langsom eller slå seg av tidligere enn forventet. Når den blir varm igjen, forsvinner mye av denne oppførselen.

Lading under frysepunktet er den virkelige kulderisikoen. Det kan dannes litiumbelegg på anoden når en litium-ion-celle lades under 0 °C, og skaden er permanent. De fleste moderne telefoner prøver å hindre dette, men ikke test grensen. Hvis telefonen har vært ute i kulde, lar du den komme over 0 °C, helst nærmere romtemperatur, før du lader den.

## Langvarig varme betyr mer enn korte topper

Batterialdring er ikke en stupkant. Det finnes ingen magisk grense der batteriet er perfekt ved 39 °C og ødelagt ved 40 °C. Varme øker hastigheten på kjemiske sidereaksjoner, særlig når batteriet samtidig er nesten fulladet.

En telefon som når 42 °C i fem minutter under hurtiglading og deretter faller til 30 °C, har sannsynligvis det bra. En telefon som ligger på 38 °C hele natten fordi den lades trådløst under et deksel på en myk overflate, gjør mer stille skade. Det lavere tallet kan være verre fordi det varer mye lenger.

Det er dette mange overser. Topptemperaturen betyr noe, men tiden ved høy temperatur betyr mer.

## Hva du gjør når tallet er høyt

Flytt telefonen ut av direkte sollys. Koble fra laderen. Ta av dekselet. Stopp den tunge appen. Legg telefonen på en hard overflate med luft rundt.

Når den er avkjølt, ser du etter mønsteret. Var det hurtiglading? Trådløs lading? Et spill? Navigasjon i bilholder? En nylig Android 17-oppdatering på en Pixel? En bakgrunnsapp som låste seg etter en oppdatering? Løsningen avhenger av årsaken.

Hvis telefonen når 45 °C eller mer under vanlig bruk, eller noen gang kommer opp mot 50 °C uten en tydelig forklaring, bør du behandle det som et signal om reparasjon i stedet for et innstillingsproblem.

---
