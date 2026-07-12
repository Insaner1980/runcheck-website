---
title: "Forklaring af batteridiagnostik på Google Pixel"
description: "Hvordan finder du ud af, om batteriet i en Pixel faktisk er slidt, eller om det bare bliver straffet af en dårlig app eller en varm dag? På nyere Pixel-telefoner giver Google dig endelig fornuftige værktøjer. På ældre modeller er svaret stadig mere besværligt, end det burde være."
listSummary: "batteri, tilstand og diagnostik"
hub: "brands"
sourceNumber: 154
order: 2
tags: ["batteri","tilstand","diagnostik","android","guide"]
locale: "da"
draft: false
---
Tidspunktet betyder også noget. Android 17 er allerede tilgængelig på de fleste understøttede Pixel-enheder, mens andre Android-mærker får deres egne Android 17-baserede opdateringer senere. Det betyder ikke, at alle Pixel-telefoner pludselig har fået den samme batteriside. Googles batteridiagnostik er stadig opdelt efter model.

## Batteritilstand og kapacitet

Hovedsiden findes her:

Indstillinger > Batteri > Batteritilstand

På understøttede telefoner viser den, om batteriet er Normal, Reduceret eller Ikke tilgængelig. Den kan også vise Batterikapacitet, som er et estimat af, hvor meget opladning batteriet kan rumme sammenlignet med, da det var nyt.

Den vigtige begrænsning er, at Google kun tilbyder Batteritilstand på Pixel 8a og nyere. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 og Pixel 8 Pro viser ikke en status for batteritilstand, selv om nogle af dem stadig modtager nye Android-versioner.

Reduceret betyder, at den estimerede resterende kapacitet er under 80 %. På det tidspunkt anbefaler Google, at du overvejer et batteriskift. Grænsen er ikke tilfældig. Under 80 % bliver batteritiden så meget kortere, at mange mærker det ved almindelig brug, især i kulde eller under belastning fra kamera, spil, navigation og hotspot.

Behandl kapacitetstallet som et estimat, ikke som en laboratoriemåling. Google formulerer sig selv forsigtigt, fordi telefonen læser data fra batterimåleren og modellerer resultatet. Hvis telefonen viser 92 %, er der ingen grund til at spekulere over, om det virkelige tal er 91,4 % eller 93 %. Udviklingen over tid er vigtigere.

## Antal cyklusser

Antal cyklusser er ikke det samme som antallet af gange, du har sat opladeren til. En samlet afladning og genopladning på 100 % svarer til én cyklus. To dage, hvor du bruger 50 % og oplader begge gange, bliver også tilsammen til én cyklus.

På Pixel 8a og nyere viser Google antallet her:

Indstillinger > Om telefonen > Batterioplysninger

Den samme side kan også vise batteriets produktionsdato og datoen for første brug.

En ældre udgave af denne artikel sagde, at antallet af cyklusser var tilgængeligt på Pixel 6a og nyere. Det siger Googles aktuelle supportside ikke. Den angiver stien for Pixel 8a og nyere, og artiklen er derfor rettet.

Googles anbefaling om batteriskift er nu opdelt efter generation:

- Pixel 3 til Pixel 8 Pro og Pixel Fold bør bevare op til 80 % kapacitet i omkring 800 cyklusser.
- Pixel 8a og nyere bør bevare op til 80 % kapacitet i omkring 1.000 cyklusser.

En Pixel 9 Pro med 650 cyklusser er derfor ikke automatisk i problemer. En Pixel 7 Pro med 850 cyklusser og væsentligt kortere batteritid er en bedre kandidat til et batteriskift.

## Hjælp til batteritilstand

Hjælp til batteritilstand er Googles funktion til langsigtet håndtering af slitage. Den kører på Pixel 6a og nyere, bortset fra Pixel Tablet.

Funktionen justerer batteriets maksimale spænding i trin. Den begynder ved 200 opladningscyklusser og fortsætter gradvist frem til 1.000 cyklusser. Formålet er at bremse den kemiske aldring og holde batteriet mere stabilt gennem telefonens levetid.

Der er et kompromis. Efterhånden som telefonen bliver ældre, kan du opleve lidt kortere batteritid eller langsommere opladning, fordi softwaren bevidst reducerer belastningen på batteriet. Det er ikke en fejl. Det er sådan funktionen er designet.

Der er én vigtig opdeling mellem modeller:

- Pixel 6a til Pixel 9 Pro Fold kan slå Hjælp til batteritilstand til eller fra.
- Pixel 9a og nyere har funktionen slået til som standard, og Google oplyser, at den ikke kan slås fra.

Det sidste har forståeligt nok irriteret nogle brugere. Funktionen kan forsvares ud fra hensynet til batteriets levetid, men Google burde forklare tydeligere i brugerfladen, hvad der sker og hvorfor. Folk lægger mærke til det, når telefonens batteritid ændrer sig efter flere måneders brug, også når den tekniske begrundelse er rimelig.

## Optimering af opladning

På understøttede versioner findes Pixels opladningsindstillinger her:

Indstillinger > Batteri > Batteritilstand > Optimering af opladning

Der er to hovedmuligheder.

Adaptiv opladning lærer dine opladningsvaner og forsøger at afslutte opladningen til 100 % kort før, du tager stikket ud. På Pixel 4 afhænger funktionen af opladning om natten og en passende alarm. På Pixel 4a og nyere lærer den i stedet af dine opladningsvaner. Google siger, at den skal bruge omkring 14 dage på at lære vanerne at kende, så bedøm den ikke efter én nat.

Begræns opladning til 80 % stopper som regel opladningen ved 80 %. Funktionen findes på Pixel 6a og nyere. Batteriet får lettere vilkår, men du giver afkald på 20 % af den daglige kapacitet.

Der er én adfærd, der ser ud som en fejl, men ikke er det. Selv med grænsen på 80 % skal en Pixel oplade helt ved hver 10. cyklus for at holde målingerne af batterikapacitet nøjagtige. Google anbefaler, at telefonen bliver siddende i opladeren i mindst 30 minutter, efter den når 100 %, så kalibreringen kan blive færdig.

For de fleste er Adaptiv opladning det bedste standardvalg. Brug grænsen på 80 %, hvis du normalt slutter dagen med rigeligt batteri tilbage, arbejder tæt på en oplader eller prioriterer langsigtet batteritilstand højere end maksimal batteritid hver dag.

## Batteridiagnostik og Enhedstilstand og -support

Pixel har nu to lag af fejlfinding.

Den ældre sti er:

Indstillinger > Batteri > Batteridiagnostik

Google oplyser, at Batteridiagnostik findes på Pixel 6 og nyere, inklusive Pixel Fold. Værktøjet kontrollerer batteriets ydeevne og kan hjælpe med at afgøre, om problemet handler om kort batteritid, opladning eller et muligt batteriskift.

Det nyere kontrolpanel er:

Indstillinger > Enhedstilstand og -support

Google oplyser, at Enhedstilstand og -support findes på Pixel 6 og nyere, inklusive Fold. Det samler enhedens status, batteritilstand, telefonens temperatur, opladningsdiagnostik, berøringsdiagnostik, garanti, support og reparationsmuligheder. På Pixel 9 og nyere omfatter det også samtalebaseret support på engelsk, tysk og japansk.

Det er mere overskueligt end den gamle opdeling mellem skjulte fejlfindingssider og spredte indstillinger. Ældre Pixel-modeller får stadig ikke vist batteritilstand i procent, men siden er et bedre første stop, når telefonen føles forkert.

## Temperaturdiagnostik

Pixel-telefoner bliver oftere varme, end mange bryder sig om. Tensor-modeller kan især blive varme under kamerabrug, 5G, navigation, gendannelse fra sikkerhedskopi, spil, hotspot og Android Auto.

På Pixel 6a og nyere kan du kontrollere telefonens aktuelle temperaturtilstand her:

Indstillinger > Batteri > Batteridiagnostik > Telefonen er meget varm

Google betegner tilstanden som Kold, Normal, Varm eller Forhøjet. Forhøjet betyder ikke bare, at telefonen føles varm i hånden. Det betyder, at systemet kan reducere skærmens lysstyrke, netværkshastigheden eller ydeevnen og sætte funktioner på pause for at køle ned.

Varme betyder noget, fordi den fremskynder batteriets aldring. Hvis din Pixel ofte oplades, mens den er varm, sidder i en bilholder i direkte sol eller kører navigation og hurtigopladning samtidig hver dag, slides batteriet hurtigere.

## Den gamle Android-testkode

Opkaldskoden `*#*#4636#*#*` virker stadig på mange Pixel-telefoner. Den åbner en testmenu med grundlæggende batterioplysninger som status, niveau, tilstand, temperatur, spænding og batteriteknologi.

Feltet med batteritilstand er ikke det samme som en procent for resterende kapacitet. Good betyder, at telefonen ikke har registreret en alvorlig batterifejl. Et batteri kan vise Good og stadig have mistet en stor del af sin kapacitet.

Brug koden til hurtige kontroller af temperatur og spænding, ikke som den endelige afgørelse om et batteriskift.

## Batteriprogrammet til Pixel 6a

Pixel 6a kræver en særskilt bemærkning, fordi Google oprettede et officielt Battery Performance Program for berørte enheder.

Fra 8. juli 2025 modtog berørte Pixel 6a-enheder en obligatorisk Android 16-opdatering for at håndtere en mulig risiko for overophedning af batteriet. Ændringerne i batteristyringen aktiveres kun, hvis enheden er berørt, og batteriet har gennemført 400 opladningscyklusser.

Hvis du har en Pixel 6a og oplevede reduceret kapacitet eller langsommere opladning efter opdateringen, bør du ikke automatisk antage, at det blot er normal aldring. Googles program tilbød blandt andet gratis batteriskift og andre kompensationsmuligheder til berettigede ejere, men supportmulighederne udløb efter 8. juli 2026. Googles side med kontrol af berettigelse kan stadig forklare, om din enhed var omfattet, men nye krav gennem programmet er ikke længere tilgængelige.

## Hvad runcheck kan tilføje

Pixel-telefoner rapporterer som regel mere brugbare strømdata end mange andre Android-enheder, så tredjepartsværktøjer har et bedre udgangspunkt. Alligevel er ikke alle værdier garanteret.

runcheck læser de Android-batteridata, som telefonen stiller til rådighed, og kombinerer dem med angivelser af målingens sikkerhed. Det betyder noget, fordi et tal uden sammenhæng kan være misvisende. En afladningshastighed baseret på stabile strømmålinger er nyttig. En afladningshastighed baseret på manglende eller ustabile målinger skal betragtes som et estimat.

Appen følger også temperaturen sammen med batteridataene, hvilket er vigtigt på Pixel. Et batteri, der ser fint ud på papiret, kan ældes hurtigt, hvis telefonen er varm for ofte.

## Konklusionen for ældre Pixel-telefoner

Den største fejl er at forvente, at Android 17 tilføjer alle batterisider til alle understøttede Pixel-modeller. Det gør versionen ikke. Android 17 kom først til understøttede Pixel-telefoner, men Googles side med Batteritilstand er stadig begrænset efter model.

Har du en Pixel 7, får du ikke batteritilstand i procent under Indstillinger. Har du en Pixel 8a eller nyere, får du de nyttige oplysninger: Batteritilstand, Batterikapacitet og antal cyklusser på de stier, Google dokumenterer.

Grænsen på 80 % er en god tommelfingerregel for batteriskift, men den er ikke det eneste signal. En telefon over 80 % kan stadig have elendig batteritid på grund af varme, svagt signal, en dårlig app eller en nylig opdatering. En telefon under 80 % kan stadig klare sig, hvis dit forbrug er let. Brug tallet som dokumentation, ikke som en ordre.

Det samme gælder opladningsgrænsen på 80 %. Hvis din Pixel en gang imellem oplader til 100 %, kan den være i gang med kalibreringen ved hver 10. cyklus. Lad den sidde i opladeren i omkring 30 minutter efter 100 %, hvis kalibreringen skal gennemføres.
