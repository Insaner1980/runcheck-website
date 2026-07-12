---
title: "Sådan tjekker du batteriets cyklustal på Android"
description: "Cyklustallet viser, hvor mange fulde opladnings- og afladningscyklusser batteriet har gennemført, siden telefonen blev fremstillet. Én cyklus svarer til et samlet forbrug på 100 % af batteriets kapacitet. Det behøver ikke ske på én gang. En opladning fra 20 % til 70 % og senere fra 40 % til 90 % bliver tilsammen til én fuld cyklus."
listSummary: "batteri, tilstand og diagnostik"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Health"
tags: ["batteri","tilstand","diagnostik","android","guide"]
locale: "da"
draft: false
---
Tallet betyder noget, fordi litium-ion-batterier har en begrænset levetid målt i cyklusser. De fleste moderne telefonbatterier bevarer omkring 80 % af deres oprindelige kapacitet efter 800-1.000 cyklusser, afhængigt af kemi og producent. Derefter bliver den daglige batteritid mærkbart kortere.

Android har kunnet rapportere cyklustal siden Android 14 via BatteryManager-API'en, men det er helt op til producenten, om tallet faktisk bliver vist. Nogle få nyere telefoner viser det i Indstillinger. De fleste gør ikke. Metoderne nedenfor er ordnet efter, hvor mange enheder de virker på. De bredeste løsninger står først og omfatter også ældre modeller.

## Sporingsapps: virker på næsten alle Android-telefoner

På de fleste telefoner, især modeller fra før 2024, er en sporingsapp det mest praktiske sted at begynde.

AccuBattery estimerer cyklustallet ved at følge den tilførte opladning over tid. Installér appen, lad den køre i en uge eller mere gennem flere opladninger, og den beregner et omtrentligt tal ud fra det samlede antal opladede milliamperetimer divideret med batteriets designkapacitet. Jo længere appen kører, desto bedre bliver estimatet. Hvis en nyinstalleret AccuBattery straks viser et cyklustal, bygger det på meget få data. Vent mindst to uger, før du tager tallet alvorligt. Den aktuelle version kræver Android 7.0 eller nyere, hvilket stadig dækker langt de fleste telefoner i brug.

aBattery bruger en anden metode. På enheder med Android 14 eller nyere, hvor producenten har implementeret den relevante batteritilstands-HAL, læser appen cyklustal og batteritilstand direkte fra systemet. På ældre enheder eller telefoner med en ufuldstændig HAL mangler tallene eller er upålidelige. Du kan ikke ud fra appen alene se, om en værdi kommer fra hardwaren eller blot er en pladsholder.

Begrænsningen ved sporingsapps er, at de beregner ud fra opladningsmønstre frem for at læse en hardwaretæller. Estimaterne bliver bedre med tiden, men de er ikke eksakte. To apps på samme telefon kan vise forskellige cyklustal, fordi de bruger forskellige beregningsmetoder.

## Opkaldskoder: hurtigt, men usikkert

På nogle telefoner viser opkaldskoder batteridata, som er skjult i Indstillinger. Mange af koderne stammer fra Android 4 eller tidligere, men tilgængeligheden afhænger af producent og mobilselskab.

`*#*#4636#*#*` virker på nogle enheder med standardnær Android, blandt andet visse Pixel-, Motorola-, Nokia- og Sony-modeller. Hvis koden virker, åbnes en testmenu, hvor Battery information viser opladningsniveau, spænding, temperatur og status. Cyklustallet vises ikke på de fleste enheder, men det er værd at kontrollere, fordi nogle producenter tilføjer ekstra felter. Koden har eksisteret i mere end ti år og virker stadig på mange ældre telefoner, der ikke har nyere indbyggede batterisider.

`*#*#6485#*#*` kan på Xiaomi-, POCO- og Redmi-telefoner vise batteridata, herunder cyklusrelaterede oplysninger under producentspecifikke feltnavne som `MB_06`. På nogle enheder virker koden helt tilbage til MIUI 10 og tidligere.

`*#0228#` viser spænding, strøm og batteristatus på nogle Samsung Galaxy-telefoner. Den viser normalt ikke cyklustallet.

Hvis en kode ikke udløser noget, understøtter telefonen den ikke. Mobilselskaber kan deaktivere menuerne, og producenter fjerner dem indimellem i opdateringer.

## ADB: den mest grundige metode uden root

Android Debug Bridge giver den mest ensartede adgang til batteridata på tværs af Android-versioner og virker på telefoner helt tilbage til Android 4.1. Du skal bruge en computer og cirka fem minutter til opsætningen, men ADB kan ofte vise data, som hverken apps eller Indstillinger viser.

Aktivér **Udviklerindstillinger**: Gå til **Indstillinger > Om telefonen**, og tryk syv gange på **Buildnummer**. Aktivér derefter **USB-fejlretning** under Udviklerindstillinger. Tilslut telefonen via USB, og godkend forbindelsen, når du bliver bedt om det.

Kør:

`adb shell dumpsys battery`

Outputtet indeholder blandt andet CHARGE_COUNTER, spænding, temperatur, status og batteritilstand. På enheder, der rapporterer værdien, vises feltet CYCLE_COUNT med det faktiske tal. Nogle Samsung-, Pixel- og Xiaomi-enheder rapporterer det gennem ADB, selv om det er skjult i Indstillinger. På ældre telefoner fra før Android 14 er feltet mindre almindeligt, men stadig værd at lede efter. Nogle producenter rapporterede cyklusdata gennem egne systemegenskaber længe før Google standardiserede grænsefladen.

Hvis CYCLE_COUNT ikke vises, har producenten sandsynligvis ikke gjort værdien tilgængelig gennem denne grænseflade. Ingen software kan hente det rigtige tal fra hardware eller firmware, der ikke udstiller det.

`adb shell dumpsys batteryproperties` kan nogle gange vise flere felter, især på Android 14 og nyere, hvor HAL-specifikationen blev udvidet. På ældre versioner kan outputtet være tomt.

## Indbyggede indstillinger: kun på nyere telefoner

Flere telefoner er begyndt at vise cyklustallet direkte i Indstillinger. Hvis din telefon gør det, er det den letteste metode. Ellers må du bruge en af løsningerne ovenfor.

**Google Pixel 8a og nyere** viser cyklustallet under **Indstillinger > Om telefonen > Batterioplysninger** sammen med produktionsdato og dato for ibrugtagning. Pixel 6 til Pixel 8 Pro har ikke denne side. Google tilføjede den med Pixel 8a og fortsatte på Pixel 9- og Pixel 10-serien. Ældre Pixel-modeller kræver ADB eller en sporingsapp.

**Samsung Galaxy S25-serien og nyere** kan på understøttede One UI-versioner og i visse markeder vise batteritilstand og cyklustal under **Indstillinger > Batteri > Battery info**. Udrulningen afhænger af model, firmware og marked, så du bør ikke gå ud fra, at siden findes, bare fordi telefonen har fået en nyere One UI-version. På mange ældre Galaxy-telefoner viser Samsung Members kun en generel tilstand som Normal, Svag eller Dårlig, ikke et præcist cyklustal eller en procentværdi.

**OnePlus- og OPPO-telefoner** med nyere OxygenOS- eller ColorOS-versioner kan vise batteritilstand under **Indstillinger > Batteri > Battery health**, men cyklustallet afhænger af model og region. OnePlus 7 og ældre viser det ikke.

Fragmenteringen er stadig hovedproblemet. Apple standardiserede visningen af batteritilstand på understøttede iPhones fra iOS 11.3, med støtte fra iPhone 6 og nyere modeller. Android gjorde dataene tilgængelige i API'en og lod derefter hver producent bestemme, om de faktisk skulle rapporteres. Flere telefoner viser oplysningerne hvert år, men de fleste Android-enheder i brug i dag gør stadig ikke.

## Hvad cyklustallet betyder i praksis

Tallet alene er bare en tæller. Det vigtige er batteriets klassificerede levetid.

Google angiver, at batterier i Pixel 3 til Pixel 8 Pro bør bevare omkring 80 % kapacitet efter cirka 800 cyklusser. Pixel 8a og nyere er klassificeret til 1.000 cyklusser, blandt andet på grund af opdateret batterikemi og softwarefunktioner som Hjælp til batteritilstand, der gradvist reducerer den maksimale opladningsspænding, når batteriet ældes.

Nyere telefoner, der er bragt i omsætning på EU-markedet, skal klare mindst 800 opladnings- og afladningscyklusser og stadig have mindst 80 % kapacitet tilbage. Nogle nyere topmodeller er klassificeret til omkring 1.000 cyklusser. Ældre budgettelefoner og modeller uden for EU kan have batterier med en lavere klassificering.

En telefon med 400 cyklusser har brugt omtrent halvdelen af den forventede cykluslevetid, hvis batteriet er klassificeret til 800. Ved 800 cyklusser bør et batteri med den klassificering stadig have omkring 80 % kapacitet. Et batteri på 5.000 mAh opfører sig da som et på cirka 4.000 mAh. Ved 1.200 cyklusser kan den daglige batteritid være halvdelen af, hvad den var som ny.

Tallene forudsætter normal opladning ved stuetemperatur med almindelige opladere og uden lange perioder ved 100 % eller 0 %. Hurtigopladning i varme omgivelser fremskynder nedbrydningen, og cyklustallet viser ikke den forskel. To telefoner med 500 cyklusser kan have meget forskellig batteritilstand, hvis den ene er blevet opladet om natten med adaptiv opladning, mens den anden ofte er blevet hurtigopladet i en varm bil.

## Når cyklustallet ikke er tilgængeligt

Hvis ingen af metoderne virker på din telefon, kan praktiske tegn stadig hjælpe. Skærmtid, der er faldet i forhold til for seks måneder siden, uventede nedlukninger ved 15-20 %, batteriprocenter der springer uregelmæssigt fra eksempelvis 30 % til 12 %, eller varme ved let brug. Alt dette peger på et batteri, der har set sine bedste dage.

Sammen med et estimeret resultat fra AccuBattery efter nogle ugers overvågning giver de tegn et rimeligt billede, selv uden et præcist cyklustal.

## FAQ

**Reducerer en opladningsgrænse på 80 % cyklustallet?**
Nej. Delvise opladninger lægges stadig sammen. En opladning fra 20 % til 80 % svarer til 0,6 cyklus. Fordelen ved 80 %-grænsen er ikke færre cyklusser, men mindre belastning af cellerne ved højt opladningsniveau. Det bremser den kemiske nedbrydning uafhængigt af cyklustallet.

**Er 500 cyklusser meget?**
Det afhænger af telefonen. Ved én fuld cyklus om dagen er det cirka 18 måneder. Ved 0,7 cyklus om dagen, for eksempel opladning fra 30 % til 100 %, tager det mere end to år at nå 500. Om det er meget, afhænger af den klassificerede levetid for netop det batteri.

**Hvorfor viser min Samsung ikke cyklustallet efter en One UI 7-opdatering?**
Samsung har begrænset funktionen til bestemte modeller, firmwareversioner og markeder. Galaxy S25-serien viser den mest konsekvent i understøttede europæiske varianter, men tilgængeligheden er ikke ens på alle enheder. Samsung har ikke offentliggjort en samlet tidsplan for en bredere udrulning.

**Kan cyklustallet nulstilles?**
En ægte hardwaretæller nulstilles ikke ved nulstilling til fabriksindstillinger, batterikalibrering eller installation af en ny ROM. Fysisk udskiftning af batteriet er den eneste måde at starte forfra på, når tælleren er knyttet til batteripakken eller batterimåleren. Hvis en app kun viser et estimeret cyklustal, kan afinstallation eller sletning af appdata nulstille estimatet. Det er endnu en grund til ikke at behandle appens tal som en hardwaremåling.
