---
title: "Hvad betyder en tilstandsscore for telefonen, og hvordan beregnes den?"
description: "Åbn Indstillinger på en hvilken som helst Android-telefon, og batterioplysningerne ligger ét sted, lagerdata et andet og netværksoplysninger et tredje. En tilstandsscore samler det hele, batteri, temperatur, netværk og lagerplads, i ét tal, som regel fra 0 til 100. Én måling i stedet for fire."
listSummary: "temperatur, varme og android"
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["temperatur","varme","android","fejlfinding","hardware"]
locale: "da"
draft: false
---
Android definerer ikke én universel tilstandsscore for telefoner. Der findes ingen fælles Android-side, hvor "82/100" betyder det samme på alle mærker. Samsungs Batteri- og enhedspleje viser en optimeringsscore ud af 100, og Pixel-funktionen Device health & support viser overordnet status og status for enkelte funktioner, men begge dele er producentværktøjer, ikke en fælles Android-standard. Diagnoseapps bruger deres egne beregningsmodeller. Det vigtigste er derfor, hvad scoren bygger på, og hvor dens begrænsninger ligger.

## Hvad måler en tilstandsscore?

En brugbar tilstandsscore henter normalt data fra fire kategorier og vægter dem efter, hvor meget de påvirker den daglige oplevelse. De præcise vægte er ikke standardiserede.

**Batteriet** bør veje mest. I runchecks beregningsmodel har batteriet en vægt på 40 % af den samlede score. Det giver mening, fordi et slidt batteri er det mest mærkbare problem på en ældre telefon. Batteridelen vurderer den batteristatus, Android rapporterer, temperaturen, spændingen og en eventuel procent for batteritilstand, når enheden faktisk stiller den til rådighed. Androids BatteryManager API kan blandt andet returnere tilstande som "Good", "Overheat", "Dead" og "Cold". Android 14 tilføjede mere detaljerede batterioplysninger, men antal opladningscyklusser og batteritilstand i procent vises kun, når producenten og batteriets HAL leverer dataene. Et batteri med 92 % tilstand ved 31 °C får en høj score. Et batteri med 74 % tilstand, der samtidig ligger varmt på 39 °C, trækker scoren kraftigt ned.

**Temperaturtilstanden** vægter 25 % i runchecks model. Android rapporterer termisk status gennem `PowerManager.getCurrentThermalStatus()` på Android 10 og nyere og termisk råderum gennem `getThermalHeadroom()` på Android 11 og nyere. Oplysningerne fortæller diagnoseapps, om telefonen er kølig, varm, termisk begrænset eller på vej mod nedlukning. Høje temperaturer sænker CPU-ydelsen gennem termisk begrænsning og fremskynder batteriets langsigtede slitage. En telefon med termisk status "Normal" og en batteritemperatur på 28 °C scorer godt. En telefon med "Moderate" begrænsning over 40 °C gør ikke.

**Netværksforbindelsen** bidrager med 25 % i runchecks model. Uden en nylig hastighedstest bygger netværksscoren på signalstyrke og forsinkelse, og scoren er 0, når telefonen ikke har forbindelse. Hvis der findes en hastighedstest, som er mindre end en time gammel, vægtes signal med 40 %, forsinkelse eller ping med 30 %, downloadhastighed med 20 % og jitter eller stabilitet med 10 %. På Wi-Fi er -50 til -70 dBm fremragende, -70 til -80 dBm acceptabelt, og under -80 dBm falder ydeevnen. På mobilnet er signalet stærkt over -85 dBm og dårligt under -110 dBm. Forsinkelsen betyder også meget. Forskellen mellem 15 ms og 200 ms er i praksis større end de fleste mindre udsving i signalstyrken.

**Lagerpladsen** er den mindste del med 10 % i runchecks model. Under 50 % forbrug gives ingen straf. Mellem 50 og 80 % er påvirkningen lille. Over 85 % falder scoren, fordi Android ofte bliver langsommere, når NAND-lageret mangler ledig plads til oprydning og slidudjævning.

## Hvorfor vægtene betyder noget

Batteritilstanden påvirker telefonen hver dag. Lagerplads bliver først et problem efter en vis grænse. Netværkskvaliteten svinger hele tiden på grund af forhold, telefonen ikke kan styre. Temperaturtilstanden er midlertidig. En telefon, der er varm nu, kan være helt normal om ti minutter.

Vægtningen er ikke ens i alle apps. Nogle giver alle fire kategorier samme betydning. Det er ærligt talt en dårlig model, fordi den behandler fyldt lagerplads som lige så alvorligt som et batteri, der er ved at svigte. runcheck vægter batteriet med 40 %, temperatur og netværk med 25 % hver og lagerplads med 10 %. Det passer bedre til, hvordan problemer faktisk mærkes. En telefon med et fremragende batteri og næsten fuld lagerplads er mindre hæmmet end en telefon med et dårligt batteri og masser af ledig plads.

## Problemet med pålidelighed

Ikke alle målinger, der indgår i scoren, er lige troværdige. Det er her, hele idéen bliver usikker.

Batteritilstand i procent er præcis på telefoner, der implementerer HAL'en korrekt, herunder nyere Pixel-enheder og visse nyere Galaxy-modeller på understøttede markeder. På telefoner, der ikke udstiller disse data, må apps estimere tilstanden ved at følge opladningsmønstre over tid. Estimaterne bliver bedre med brug, men de begynder groft. En tilstandsscore, der bygger på et batteriestimat med ukendt nøjagtighed, overtager den samme usikkerhed.

Temperaturmålinger afhænger af, hvilke sensorer telefonen gør tilgængelige. `getCurrentThermalStatus()` giver et generelt niveau fra Normal til Shutdown, men det er groft. `getThermalHeadroom()` returnerer et tal for, hvor tæt enheden er på termisk begrænsning, men fortolkningen varierer mellem SoC'er. Batteritemperaturen er tilgængelig på tværs af enheder, men den måler batteriet, ikke CPU'en eller telefonens overflade. De kan ligge 5-10 °C fra hinanden.

Signalstyrke i dBm er pålidelig, når Android rapporterer den. Signalbjælkerne er derimod ikke standardiserede. Tre bjælker på en Samsung og tre bjælker på en Pixel samme sted kan dække over forskellige dBm-værdier. Bjælkerne er kosmetiske. Det er dBm-tallet, der betyder noget.

Forbruget af lagerplads er den eneste måling, der er konsekvent præcis på tværs af alle enheder. Det er en enkel beregning uden komplikationer fra hardware abstraction layer.

En ærlig tilstandsscore viser disse begrænsninger i stedet for at skjule dem. Hvis batteritilstanden er et estimat frem for en hardwaremåling, bør usikkerheden være synlig. En skråsikker visning af "87/100" er misvisende, hvis inputtet indeholder et batteriestimat med en fejlmargin på 5 %. Mange apps gør præcis det.

## Tilstandsscorer på ældre telefoner

Kvaliteten af en tilstandsscore afhænger af, hvor mange data telefonen stiller til rådighed. Ældre enheder viser mindre.

Telefoner med Android 10 (API 29) og nyere kan rapportere termisk status. Derfor fungerer temperaturdelen rimeligt på enheder fra 2019 og frem, når producenten leverer brugbare data. Android 11 (API 30) tilføjer termisk råderum, så målingen bliver mere detaljeret. Under Android 10 er temperaturdata ofte begrænset til selve batteritemperaturen.

Forskellen er størst for batteritilstanden. Android 14 tilføjede mere detaljerede batteri-API'er, men de fleste telefoner fra før 2024 rapporterer ikke en fuld procent for batteritilstand eller antal opladningscyklusser. På disse enheder må batteridelen læne sig op ad indirekte tegn: den grove klassificering Good, Overheat eller Dead, temperatur, spænding og langsigtet registrering af opladning. En telefon med Android 10 kan stadig give en meningsfuld batteriscore ud fra de signaler, men med mindre præcision end en understøttet Pixel 8a eller nyere, der rapporterer tilstand og cyklusoplysninger direkte.

Lagerplads og netværk fungerer stabilt på enheder fra Android 8 og frem.

I praksis er en tilstandsscore på Android 9-13 nyttig, men mere afhængig af estimater. Den fanger tydelige problemer, som et stærkt nedslidt batteri, kritisk lav lagerplads eller vedvarende overophedning, men usikkerheden er større. Det er stadig værdifuldt. Bare mindre præcist.

## Sådan fortolker du tallet

**75-100:** Telefonen er i god stand. Normal batterislitage, ingen temperaturproblemer, tilstrækkelig lagerplads og fungerende forbindelse.

**50-74:** Noget kræver opmærksomhed. Det er ofte et batteri, der har mistet nok kapacitet til at forkorte dagen, eller lagerplads, der er så fyldt, at ydeevnen påvirkes. Målrettet vedligeholdelse kan løse problemet.

**25-49:** Et reelt problem. Batteriet er væsentligt slidt, telefonen er vedvarende termisk begrænset, eller lagerpladsen er kritisk fuld. Her er reparation eller udskiftning relevant.

**Under 25:** Noget er aktivt ved at svigte.

Grænserne er ikke officielle. Ingen myndighed definerer, hvornår en telefon er "sund". Det er konventioner, som diagnoseværktøjer bruger, og de svarer omtrent til det, mennesker oplever som god, acceptabel, faldende eller defekt tilstand.

## Hvad kan en tilstandsscore ikke fortælle?

Den kan ikke opdage fysisk hardwareskade. En revnet skærm, en svigtende højttaler, en løs opladningsport eller vandskade vises ikke i softwarebaserede målinger.

Den kan ikke forudsige, hvor længe telefonen holder. En score på 78 betyder ikke, at telefonen er "78 % gennem sin levetid". Den betyder, at telefonen lige nu er i rimelig stand på tværs af de målinger, der kontrolleres.

Den kan ikke sammenligne telefonmodeller direkte. 90/100 på en billig telefon med 3 GB RAM og 32 GB lagerplads svarer ikke til 90/100 på en topmodel med 12 GB RAM og 256 GB lagerplads.

Scoren er et øjebliksbillede. Den er nyttig til at opdage udvikling over tid, falder telefonens tilstand, og til hurtige vurderinger, er denne brugte telefon værd at købe? Den er et udgangspunkt, ikke en diagnose.

## Ofte stillede spørgsmål

**Udgiver producenter officielle tilstandsscorer?**
Ikke én universel score. Samsungs Batteri- og enhedspleje viser en optimeringsscore ud af 100, men den bygger på Samsungs egne kontroller af batteri, lagerplads, hukommelse og sikkerhed, ikke en fælles standard for Android. Pixel-funktionen Device health & support viser overordnet status og funktionsstatus i stedet for en generel score fra 0 til 100. Producenternes værktøjer er nyttige, men deres tal kan ikke sammenlignes direkte mellem mærker.

**Kan en lav score forbedres?**
Det afhænger helt af årsagen. Er lagerpladsen fuld og trækker scoren ned? Frigør plads, så stiger den med det samme. Er batteriet slidt? Så er udskiftning den eneste løsning. Temperaturproblemer kan ofte løses ved at lukke en app, der opfører sig forkert, eller fjerne et cover, der holder på varmen.

**Er en højere score altid bedre?**
På den samme telefon over tid, ja. En faldende score betyder forringelse. Mellem forskellige telefoner, ikke nødvendigvis. En tre år gammel telefon med 72 kan fungere fint for sin ejer, mens en ny telefon med 95 kan have dårligt signal dér, hvor ejeren bor, og det kan påvirke scoren.
