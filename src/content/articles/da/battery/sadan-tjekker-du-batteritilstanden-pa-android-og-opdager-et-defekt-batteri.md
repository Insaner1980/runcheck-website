---
title: "Sådan tjekker du batteritilstanden på Android og opdager et defekt batteri"
description: "Et telefonbatteri, der er ved at svigte, annoncerer sjældent problemet med en dramatisk nedlukning. Tegnene kommer gradvist: kortere skærmtid, en uventet genstart eller en telefon, der bliver varm ved let brug. Hurtigt faldende batteriniveau, nedlukning med 20 % eller mere tilbage, længere opladningstid, vedvarende varme under almindelige opgaver og en synligt opsvulmet bagside. En kombination af disse tegn peger på et batteri, der er ved at blive slidt."
listSummary: "Et telefonbatteri, der er ved at svigte, annoncerer sjældent problemet med en dramatisk nedlukning."
hub: "battery"
sourceNumber: 11
order: 1
subgroup: "Health"
tags: ["batteri","tilstand","diagnostik","android","guide"]
locale: "da"
draft: false
---
I modsætning til iPhone, som har vist en procentværdi for batteritilstand på understøttede modeller siden iOS 11.3, har Android historisk gjort oplysningerne sværere at finde. Der findes ikke én universel skærm til "batteritilstand". Du må danne dig et billede ud fra producentens værktøjer, skjulte menuer, brugsmønstre og diagnoseapps.


## Hurtigt svar: Sådan tjekker du batteritilstanden

Der er tre metoder, fra den hurtigste til den mest detaljerede.

**Producentens indbyggede værktøjer.** Gå til Indstillinger > Batteri, og se efter en indikator for batteritilstand. På **Samsung** åbner du Samsung Members og går til Support > Telefondiagnosticering > Batteristatus. På **Google Pixel 8a og nyere** finder du batteritilstanden under Indstillinger > Batteri > Batteritilstand og antallet af cyklusser under Indstillinger > Om telefonen > Batterioplysninger. På nyere **OnePlus-, OPPO- og realme-enheder** kan batteritilstanden være synlig i batteriindstillingerne, men det afhænger af model, region og OS-version. På **Xiaomi- og POCO-enheder** kan batterioplysninger være tilgængelige under Indstillinger > Batteri > Battery protection, afhængigt af HyperOS-version og model.

**Skjult diagnosemenu.** Åbn telefonappen, og indtast `*#*#4636#*#*`. På understøttede enheder åbnes en testmenu, hvor Battery information kan vise status, temperatur og spænding. Koden virker ikke på alle telefoner. Den er deaktiveret på mange nyere Samsung- og Pixel-modeller.

**Diagnoseapp.** Tredjepartsapps estimerer batteritilstanden ved at følge opladnings- og afladningsmønstre over flere dage. Det er den mest detaljerede mulighed, når telefonen ikke har en indbygget indikator.

En måling under 80 % af den oprindelige kapacitet eller en status, der ikke er "Good" eller "Normal", betyder, at det er værd at overveje et batteriskift.


## Hvorfor batterier bliver slidt

Alle Android-telefoner bruger et litium-ion- eller litium-polymerbatteri. De er lette, energitætte og genopladelige, men kemien giver dem en begrænset levetid.

**Opladningscyklusser er en af de vigtigste årsager til aldring.** En fuld cyklus betyder, at du samlet har brugt 100 % af batteriets kapacitet, enten på én gang eller fordelt over flere delvise opladninger. Bruger du 50 % i dag og 50 % i morgen, svarer det til én cyklus. Ældre telefoner blev ofte omtalt med en grænse omkring 500 cyklusser, men mange aktuelle modeller er klassificeret til omkring 800-1.000 fulde cyklusser, før de falder til cirka 80 % af den oprindelige kapacitet. Telefoner, der er bragt i omsætning på EU-markedet fra 20. juni 2025, skal klare mindst 800 opladnings- og afladningscyklusser og stadig have mindst 80 % kapacitet tilbage.

**Kalenderaldring sker uanset brug.** Litium-ion-celler gennemgår uundgåelige kemiske sidereaktioner alene på grund af tid og temperatur. Det faste elektrolytlag på anoden bliver gradvist tykkere, så den indre modstand stiger. En telefon, der ligger ubrugt i en skuffe i et år, vil derfor stadig have et målbart svagere batteri end da den var ny.

**Varme gør mest skade.** Temperaturer over 30 °C (86 °F) regnes som forhøjede for litium-ion-celler. Opladning under gaming, en telefon i en varm bil eller brug i direkte sollys fremskynder den kemiske nedbrydning. En enkelt længere periode med overophedning kan give permanent skade. Og virkningen forstærkes: høj temperatur kombineret med et fuldt opladet batteri er den værste kombination. Derfor kan mange moderne telefoner begrænse opladningen til 80 % eller oplade langsommere om natten. En telefon på instrumentbrættet i direkte sol kan nå skadelige temperaturer på under en time, selv i et moderat klima.

**Opladningsvaner betyder noget, men mindre end mange tror.** Det belaster batteriet mere altid at oplade til 100 % og aflade til 0 % end at holde sig omkring 20-80 %. Hurtigopladning skaber også mere varme end almindelig opladning. Forskellen mellem altid at hurtigoplade til 100 % og forsigtigt oplade til 80 % gennem et år er dog mindre, end mange råd på nettet antyder. Varme og tid betyder mere. Ikke-certificerede opladere er den reelle risiko, fordi ustabil strømforsyning kan beskadige cellerne permanent.

Resultatet er, at et batteri på 5.000 mAh langsomt bliver til 4.000 mAh og derefter 3.500 mAh, indtil den resterende kapacitet ikke længere rækker gennem en normal dag.


## Manuelle diagnosetrin

Androids indbyggede indstillinger kan give nyttige spor, selv uden en præcis procentværdi for batteritilstanden. Ingen af disse trin kræver, at du installerer noget.

**Tjek batteriforbruget efter app.** Gå til Indstillinger > Batteri > Batteriforbrug. Den præcise sti varierer, og nogle telefoner bruger navne som "Batteri- og enhedspleje". Se efter apps, der bruger uforholdsmæssigt meget strøm, især apps du næsten ikke har brugt. En baggrundsapp, der står for 15 % eller mere af forbruget, er ofte det egentlige problem frem for en slidt celle.

**Sammenlign skærmtiden.** Notér, hvor mange timers aktiv skærmtid en fuld opladning giver, og sammenlign med telefonens oprindelige specifikation eller dine tidlige erfaringer. Et fald på 30-40 % i forhold til tidligere peger på reel slitage.

**Hold øje med pludselige procentfald.** Et sundt batteri aflades nogenlunde jævnt. Hvis niveauet falder fra 45 % til 20 % på få minutter ved let brug, eller telefonen dør ved 15 %, passer batteriets interne spændingskurve ikke længere til softwarens beregning. Det er et klassisk tegn på aldring.

**Mål opladningstiden.** Tag tid på opladningen fra 20 % til 80 % med den samme oplader. Hvis det tager mærkbart længere end før, kan den indre modstand være steget. Det modsatte er også afslørende: En telefon, der oplader hurtigt, men aflades lige så hurtigt, kan vise en forkert resterende kapacitet.

**Bemærk nedlukninger under belastning.** Et slidt batteri kan ikke holde spændingen, når strømbehovet pludselig stiger. Hvis telefonen slukker, når du starter et krævende spil, selv om den viser et rimeligt batteriniveau, er det et af de tydeligste tegn på, at batteriet nærmer sig slutningen af sin levetid.

**Mærk temperaturen.** Browsing, beskeder og let brug af sociale medier bør højst gøre telefonen lidt lun. Hvis bagsiden bliver tydeligt varm under disse aktiviteter, kan den øgede indre modstand skabe overskudsvarme.

**Se efter fysiske tegn.** En bagside, der løfter sig, en skærm, der løsner sig en smule fra rammen, eller en telefon, der vipper på en plan overflade, kan skyldes et opsvulmet batteri. Det er en sikkerhedsrisiko. Stop med at bruge telefonen, oplad den ikke, og bring den straks til et værksted. Det er ikke noget, du bør "holde øje med". Opsvulmningen bliver kun værre.

**Brug producentens diagnoseværktøjer.** Ud over indikatorerne i det hurtige svar har nogle telefoner særskilte diagnoser. På Pixel kan du se efter Batteridiagnostik under Indstillinger > Batteri. Samsung Members har en samlet sektion til Telefondiagnosticering, som kan teste batteriet. Xiaomi-enheder viser ofte flere batterioplysninger under Batteri > Battery protection.


## Avanceret diagnose: spænding, temperatur og afladningsmønstre

Flere målinger kan vise, hvad der sker inde i cellen, hvis du vil have det tekniske billede.

**Spændingens adfærd.** En fuldt opladet litium-ion-celle ligger omkring 4,2 V og en næsten afladet celle omkring 3,0-3,3 V. Et sundt batteri holder spændingen forholdsvis stabil under moderat belastning. Advarselstegn er en spænding, der svinger uregelmæssigt ved let brug, falder brat ved moderat belastning eller ligger klart under 3,7 V, mens telefonen stadig viser en resterende procent. Det kan betyde, at cellen er fejlkalibreret eller så slidt, at den ikke længere er pålidelig.

**Temperaturmønstre.** Normal drift ligger omkring 20-35 °C (68-95 °F). Op til 40 °C kan være acceptabelt under krævende opgaver som gaming eller navigation. Hvis temperaturen vedvarende overstiger 45 °C, aktiverer telefonen sin varmestyring, sænker ydelsen og reducerer opladningshastigheden. Et batteri, der ofte når de temperaturer, havner i en ond cirkel: mere varme giver mere nedbrydning, som igen skaber mere varme.

**Afladningskurvens form.** I en sund celle er den midterste del af afladningen, omtrent 30-70 %, forholdsvis flad og langsom. Når batteriet slides, bliver det flade område kortere. Afladningen går hurtigere ved de høje procenter, midterområdet bliver presset sammen, og målingerne under 30 % bliver upålidelige. Et batteri, der styrtdykker gennem området 50-30 %, har mistet brugbar kapacitet. Følger du mønsteret over dage eller uger, kan du se, om batteriet bliver dårligere, og hvor hurtigt det sker.

**Virkningen af indre modstand.** Du kan ikke måle den direkte med almindelige forbrugerværktøjer, men følgerne er synlige: varme under opladning, et batteriniveau der falder hurtigt under belastning og stiger igen i hvile, samt lavere maksimal opladningshastighed. Det skyldes, at batteriet har sværere ved at flytte ioner gennem nedbrudte interne strukturer.

Diagnoseapps sætter tal på observationerne. De følger opladning og afladning over flere dage og estimerer den aktuelle kapacitet i forhold til den oprindelige. Hvis et batteri på 5.000 mAh nu kun kan lagre 3.800 mAh, svarer det til 76 % batteritilstand, og et batteriskift er på høje tid. De fleste apps skal bruge mindst nogle dage og flere fulde cyklusser, før estimatet stabiliserer sig. Drag derfor ikke konklusioner efter den første dag.

runcheck kombinerer batteridiagnostik med analyse af netværk, temperatur og lagerplads i én samlet vurdering. Det er relevant, fordi batteriproblemer ikke altid optræder alene. Et varmeproblem fra en komponent, der opfører sig forkert, kan ligne batteriafladning, og en flaskehals i lageret kan få CPU'en til at arbejde hårdere end nødvendigt.

Undgå apps, der hævder at kunne "booste", "kalibrere" eller "gendanne" batteritilstanden. Ingen app kan vende kemisk nedbrydning. Nyttige apps viser reelle målinger af spænding og temperatur, følger data over tid og arbejder på enheden uden at kræve en konto eller upload til skyen.


## Ofte stillede spørgsmål

**Hvor længe bør et Android-batteri holde, før det skal udskiftes?**

Ældre telefonbatterier blev ofte beskrevet med en grænse omkring 500 cyklusser, men det er for lavt som generel regel for aktuelle modeller. Mange nyere telefoner er klassificeret til at bevare omkring 80 % kapacitet efter cirka 800-1.000 fulde opladningscyklusser, afhængigt af model, kemi, opladningsvaner, varme og brug. Nogle får fire år ud af et batteri. Andre mærker tydelig forringelse efter 18 måneder.

**Ved hvilken procent bør batteriet udskiftes?**

Omkring 80 % af den oprindelige kapacitet er det punkt, hvor de fleste begynder at mærke forskellen. Et batteri på 4.500 mAh lagrer da reelt omkring 3.600 mAh. Under 70 % bliver telefonen for de fleste besværlig at bruge i hverdagen.

**Kan batteritilstanden gendannes?**

Nej. Nedbrydningen er en kemisk proces, der ikke kan vendes. Du kan kun bremse den fremtidige forringelse: Hold telefonen kølig, oplad mellem 20 % og 80 %, når det er praktisk, brug producentens oplader eller et certificeret alternativ, og aktivér intelligente opladningsfunktioner, hvis telefonen har dem.

**Kan en softwareopdatering give batteriforbrug, der ligner en hardwarefejl?**

Ja, og det sker oftere, end mange forventer. En dårligt optimeret opdatering kan øge CPU-aktiviteten i baggrunden, så batteriet aflades og telefonen bliver varm. Tjek Indstillinger > Batteri > Batteriforbrug for apps med unormalt højt forbrug, før du antager, at hardwaren er defekt. Hvis en bestemt app eller systemproces er årsagen, løses problemet ofte ved at opdatere appen, rydde dens cache eller vente på en rettelse.

**Er det sikkert at fortsætte med at bruge en telefon med et opsvulmet batteri?**

Nej. Stop med at bruge den, oplad den ikke, og bring den til et værksted. Opsvulmning skyldes gasdannelse fra intern kemisk nedbrydning. I ekstreme tilfælde kan et opsvulmet litium-ion-batteri briste eller bryde i brand.

**Slider hurtigopladning batteriet hurtigere?**

Hurtigopladning skaber mere varme, og varme fremskynder nedbrydningen. Moderne opladningsprotokoller håndterer det dog godt ved at oplade hurtigt til omkring 70-80 % og derefter sænke hastigheden. Effekten er reel, men forholdsvis lille sammenlignet med omgivelsestemperatur og de samlede opladningsvaner. Producentens oplader er som regel sikker. Det er et fornuftigt kompromis kun at bruge hurtigopladning, når du faktisk har brug for den, og almindelig opladning om natten.

**Hvorfor dør telefonen ved 15-20 % i stedet for at nå 0 %?**

Batteriets faktiske kapacitet svarer ikke længere til det, softwaren forventer. Når batteriet slides, ændres spændingskurven, og beregningen af den resterende opladning bliver mindre præcis. Telefonen tror, at der er strøm tilbage, men batteriet kan ikke holde spændingen under belastning. En fuld opladnings- og afladningscyklus kan nogle gange kalibrere visningen igen, men hvis det sker regelmæssigt, bør batteriet udskiftes.

**Hvor ofte bør batteritilstanden kontrolleres?**

Hver få måneder. Nedbrydningen sker gradvist, og hyppige kontroller ændrer ikke resultatet. Gode grunde til en ekstra kontrol er pludseligt kortere batteritid, uventede nedlukninger eller en telefon, der bliver varmere end normalt.


## Hvad du skal gøre med resultaterne

Start med grafen over batteriforbrug, og brug producentens indbyggede værktøjer til batteritilstand. Læg også mærke til, hvordan telefonen opfører sig i hverdagen, for de praktiske symptomer betyder ofte mere end ét enkelt tal. Hvis du vil følge udviklingen præcist, kan en diagnoseapp, der registrerer spænding, temperatur og kapacitet over tid, afsløre tendenser, du ellers ikke ville bemærke fra uge til uge.

Ved omkring 80 % begynder nedbrydningen for alvor at påvirke den daglige brug. Under det niveau er et nyt batteri langt billigere end en ny telefon og kan forlænge enhedens brugbare levetid med to til tre år.
