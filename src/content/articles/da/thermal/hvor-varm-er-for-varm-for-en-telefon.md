---
title: "Hvor varm er for varm for en telefon?"
description: "Hvor varm er for varm? Det irriterende svar er, at det afhænger af, hvilken temperatur du måler."
listSummary: "Hvor varm er for varm?"
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["temperatur","varme","android","fejlfinding","hardware"]
locale: "da"
draft: false
---
Luften omkring telefonen har én temperatur. Telefonens yderside har en anden. Batterisensoren viser en tredje, og den er vigtigst for batteriets aldring. Telefonen kan kun føles lidt lun i hånden, selvom batteriet eller SoC'en allerede er så varm, at Android begynder at sænke ydeevnen.

Mange smartphones, herunder Google Pixel-enheder, er udviklet til at fungere bedst ved omgivelsestemperaturer fra 0 °C til 35 °C. Det er temperaturen i rummet eller udenfor, ikke batteriets indvendige temperatur. En telefon i brug er varmere indvendigt end luften omkring den.

## De praktiske temperaturzoner

Disse intervaller er praktisk vejledning, ikke en universel producentspecifikation. Telefoner bruger forskellige sensorer og termiske grænser. Alligevel er zonerne nyttige nok til almindelig fejlfinding.

### Under 20 °C

Det er køligt. En telefon, der ligger ubrugt i et køligt rum, kan sagtens befinde sig her. Varme er ikke et problem, men meget koldt vejr kan få batteriet til at virke svagere, indtil det bliver varmt igen.

### 20 °C til 35 °C

Det er et behageligt område for batteritemperaturen under let brug. Beskeder, browsing, opkald, musik og korte videosessioner vil som regel ligge et sted her. Hvis telefonen tilbringer det meste af dagen i dette område, er varme ikke problemet.

### 35 °C til 40 °C

Det er varmt. Området er almindeligt under hurtigopladning, videoopkald, GPS-navigation, spil, kamerabrug eller mobil hotspot. Korte perioder er fine. Det er noget andet, hvis batteriet ligger her i timevis hver dag, fordi aldringen går hurtigere, når temperaturen stiger.

### 40 °C til 45 °C

Det er hedt. Du vil sandsynligvis kunne mærke det gennem bagpanelet eller rammen. Opladningen kan blive langsommere, skærmen kan dæmpes, kameraet kan slå blitzen fra, og spil kan miste ydeevne.

Gå ikke i panik over et kort udsving til 42 °C under en krævende opgave. Reagér derimod, hvis telefonen bliver liggende ved 42 °C under opladning på natbordet eller uden at lave noget.

### Over 45 °C

Det er for varmt til almindelig brug. Telefonen bør nu reducere belastningen kraftigt. Opladningen kan blive sat på pause, ydeevnen kan falde, radioerne kan begrænses, og der kan komme temperaturadvarsler.

Gentagen eksponering over 45 °C er hård ved litium-ion-batterier. Faren er ikke ét udsving på fem minutter. Problemet er, hvis det bliver en del af den daglige rutine.

### Over 50 °C

Det er farezonen. Normal brug bør ikke bringe en sund telefon hertil i et almindeligt rum. Direkte sol, en varm bil, en defekt oplader, et svigtende batteri eller krævende brug under opladning kan gøre det.

Sluk telefonen, hvis du kan, flyt den til et køligere sted, og lad den køle naturligt af. Læg den ikke i fryseren. Kondens er en dum måde at gøre et varmeproblem til et vandskadeproblem på.

## Sådan kontrollerer du temperaturen

Android giver stadig ikke alle telefoner en enkel side med batteritemperaturen. I teorien burde det være lettere i 2026. I praksis afhænger det stadig af mærket.

På understøttede Pixel-telefoner ligger Batteritilstand under **Indstillinger > Batteri > Batteritilstand**. Google begrænser den fulde funktion til Pixel 8a og nyere, og den findes ikke på Pixel Tablet. Ældre Pixel-modeller kan vise andre batterioplysninger, men får ikke den samme visning af batteritilstanden.

Samsung-brugere bør begynde i **Samsung Members > Support > Kom i gang under Telefondiagnosticering > Batteristatus**. Nogle Galaxy-modeller har også andre diagnosemenuer, men de varierer efter region og model. Xiaomi, OnePlus, OPPO og andre mærker flytter ofte disse sider, så det sikreste råd er at se under Batteri, batteribeskyttelse eller Enhedspleje først.

Den gamle Android-testkode `*#*#4636#*#*` åbner stadig batterioplysninger på nogle telefoner. Mange nyere telefoner blokerer den. Tredjepartsværktøjer som CPU-Z, DevCheck, AIDA64 eller runcheck kan læse batteriets temperatursensor på mange enheder, men adgangen afhænger stadig af, hvad producenten stiller til rådighed.

runcheck er nyttig, når du er interesseret i mønstre frem for en enkelt måling. Den følger batteritemperaturen over tid, gemmer minimum og maksimum for sessionen og placerer den aktuelle måling i de engelske, praktiske kategorier Cool, Normal, Warm, Hot og Critical.

## Derfor ændrer omgivelsestemperaturen alt

En telefon har kun termisk spillerum, når luften omkring den er køligere end telefonen. Ved 22 °C indendørs kan batteriet ligge omkring 26 °C til 30 °C i tomgang og stadig have plads til at blive varmere under brug. Ved 35 °C udenfor er næsten hele spillerummet væk, før du åbner Maps.

Derfor kan en telefon fungere perfekt om vinteren og føles defekt i juli. Samme telefon. Forskelligt udgangspunkt.

Biler er det værste almindelige eksempel. Google advarer Pixel-brugere mod at udsætte enheder for temperaturer over 45 °C, for eksempel på et instrumentbræt eller tæt ved et varmeudtag. En telefon i en parkeret bil behøver ikke at oplade eller køre et spil for at slide på batteriet. Varmen er nok i sig selv.

## Kulde er noget andet

Kulde gør litium-ion-batterier træge. Telefonen kan vise mindre tilgængelig strøm, føles langsom eller slukke tidligere end forventet. Når den bliver varm igen, forsvinder en stor del af adfærden.

Opladning under frysepunktet er den egentlige risiko i koldt vejr. Der kan dannes litiumbelægning på anoden, når en litium-ion-celle oplades under 0 °C, og skaden er permanent. De fleste moderne telefoner forsøger at forhindre det, men du bør ikke afprøve grænsen. Hvis telefonen har været ude i frostvejr, skal den varmes op til over 0 °C, helst tættere på rumtemperatur, før du oplader den.

## Vedvarende varme betyder mere end korte udsving

Batterialdring er ikke en lodret kant. Der findes ingen magisk grænse, hvor batteriet er perfekt ved 39 °C og ødelagt ved 40 °C. Varme fremskynder kemiske sidereaktioner, især når batteriet samtidig er næsten fuldt opladet.

En telefon, der rammer 42 °C i fem minutter under hurtigopladning og derefter falder til 30 °C, har sandsynligvis ikke taget skade. En telefon, der ligger ved 38 °C hele natten, fordi den oplader trådløst under et cover på en blød overflade, udsættes for mere stille slitage. Det lavere tal kan være værre, fordi det varer længere.

Det er den del, mange overser. Toptemperaturen betyder noget, men tiden ved temperaturen betyder mere.

## Hvad du skal gøre, når tallet er højt

Flyt telefonen væk fra direkte sollys. Tag opladeren ud. Tag coveret af. Stop den krævende app. Læg telefonen på en hård overflade med luft omkring.

Når den er kølet af, skal du se efter årsagen. Var det hurtigopladning? Trådløs opladning? Et spil? Navigation i en bilholder? En nylig Android 17-opdatering på en Pixel? En baggrundsapp, der satte sig fast efter en opdatering? Løsningen afhænger af mønstret.

Hvis telefonen rammer 45 °C eller mere under almindelig brug eller nogensinde når området omkring 50 °C uden en tydelig årsag, bør du betragte det som et tegn på behov for reparation frem for et indstillingsproblem.

---

*Metabeskrivelse: Telefonens temperatur afhænger af omgivelsesvarme, batteritemperatur, opladning og belastning. Under 35 °C er som regel normalt, over 40 °C kræver opmærksomhed, og 45 °C eller mere bør ikke være en del af hverdagen.*
