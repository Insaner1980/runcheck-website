---
title: "Hvad betyder procenten for batteritilstand egentlig?"
description: "Tallet for batteritilstand er et mål for slitage. Det er ikke det samme som batteriprocenten i statuslinjen."
listSummary: "Tallet for batteritilstand er et mål for slitage."
hub: "battery"
sourceNumber: 13
order: 3
subgroup: "Health"
tags: ["batteri","tilstand","diagnostik","android","guide"]
locale: "da"
draft: false
---
Hvis telefonen viser 87 % batteritilstand, kan cellen lagre omkring 87 % af den opladning, den kunne rumme som ny. Batteriet virker stadig. Tanken er bare blevet mindre.

**Metabeskrivelse:** Batteritilstanden viser telefonens aktuelle maksimale kapacitet sammenlignet med da batteriet var nyt. Se, hvad tallet betyder, hvorfor 80 % er vigtigt, og hvordan Android-telefoner rapporterer det.

## Tallet bag tallet

Alle telefonbatterier starter med en designkapacitet. Det er den mængde opladning, cellen er bygget til at lagre, og den angives som regel i mAh. En telefon med et stort batteri på 5.000 mAh er beregnet til at kunne lagre omtrent den mængde, når batteriet er nyt.

Så begynder kemien at arbejde. Hver opladnings- og afladningscyklus slider en smule på cellen. Varme, høj spænding, dyb afladning, hurtigopladning og almindelig tid lægger sig oven i hinanden. Det faste elektrolytlag inde i batteriet bliver tykkere, den indre modstand stiger, og der er mindre aktivt litium tilbage til at flytte opladning mellem elektroderne.

Procenten for batteritilstand sammenligner den aktuelle fulde opladningskapacitet med den oprindelige klassificering. Hvis batteriet nu topper ved omkring 4.350 mAh, er tilstanden cirka 87 %.

Det er den nyttige del af tallet. Det viser, hvor meget "fuld" er skrumpet.

## Batteritilstand er ikke batteriniveau

Det er her, mange bliver forvirrede. Batteriniveauet fortæller, hvor fyldt batteriet er lige nu. Batteritilstanden viser, hvor meget energi batteriet kan lagre, når det er fuldt.

En telefon med 100 % opladning og 85 % batteritilstand bærer ikke den samme mængde energi som ved 100 % opladning, da den var ny. Den er fuld i forhold til sin nuværende, slidte kapacitet. Derfor kan to telefoner begge vise 100 % i statuslinjen og alligevel holde meget forskelligt.

Et større batteri ændrer også, hvordan tallet føles i praksis. En telefon med 5.500 mAh og 82 % batteritilstand kan stadig holde længere end en kompakt telefon med 95 %. Procenten er nyttig, men den fortæller ikke hele historien.

## Sådan viser Android batteritilstand

Android har aldrig håndteret batteritilstand lige så ensartet som iOS. I mange år var de offentlige batterioplysninger, som de fleste kunne se, begrænset til en enkel status som Good, Overheat, Dead, Cold, Over Voltage, Unknown eller Unspecified failure. Den status handler om tydelige fejltilstande, ikke om en præcis procentværdi for kapaciteten.

Nogle telefoner viser stadig kun den grundlæggende status. På enheder med standardnær Android kan testmenuen `*#*#4636#*#*` vise batterioplysninger, hvis producenten har ladet skærmen være aktiveret. Mange telefoner skjuler den. Nogle viser temperatur og spænding, men ikke batteritilstand.

Android 17 gør stadig ikke funktionen universel. Versionen blev først udgivet til understøttede Pixel-enheder, men visningen af batteritilstand afhænger fortsat af modellen og de data, hardwaren stiller til rådighed.

Pixel er det tydeligste aktuelle eksempel på en reel side til batteritilstand for brugeren. På Pixel 8a og nyere viser Google Batteritilstand under **Indstillinger > Batteri > Batteritilstand**. Status kan være Normal, Reduceret eller Ikke tilgængelig, og siden Batterikapacitet viser en estimeret procent sammenlignet med det oprindelige batteri. Ældre understøttede modeller som Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 og Pixel 8 Pro viser ikke statussen for batteritilstand, selv om de kan understøtte andre batterifunktioner.

Samsung går en anden vej. Samsung Members kan køre Telefondiagnosticering og rapportere batteristatus. Nyere One UI-versioner viser også flere batterioplysninger i Indstillinger på visse modeller, men Samsungs præcise ordvalg og de tilgængelige oplysninger varierer efter enhed og region.

Hos andre Android-producenter er billedet ujævnt. Nogle Xiaomi-, HONOR-, OnePlus-, OPPO- og realme-telefoner viser maksimal kapacitet i batteriindstillingerne. Ældre enheder, budgetmodeller og telefoner med begrænsede data fra batterimåleren gør ofte ikke. I teorien understøtter Android flere batteridata end tidligere. I praksis bestemmer hardwaren og producentens software, hvad du faktisk kan se.

Det er netop derfor, runcheck behandler batteritilstanden som ét signal frem for en endelig dom. Når telefonen udstiller status, spænding, temperatur, strøm, cyklustal eller kapacitetsdata, kan runcheck vise indikatorerne med en angivelse af målingens sikkerhed i stedet for at lade som om alle Android-enheder leverer data af samme kvalitet.

## Hvorfor alle taler om 80 %

80 % er ikke et magisk tal. Det er bare en almindelig grænse for batteriets praktiske levetid.

Under 80 % af den oprindelige kapacitet er batteritiden blevet så meget kortere, at mange begynder at mærke det. Den indre modstand er som regel også højere, hvilket gør spændingsfald mere sandsynlige under belastning. Telefonen kan derfor slukke under en serie kamerabilleder, et spil eller en kold gåtur, selv om batteriprocenten så rimelig ud et øjeblik tidligere.

Moderne producenter opgiver forskellige mål for cykluslevetid, så det gamle råd om "300-500 cyklusser" er for enkelt. Google oplyser, at Pixel 8a og nyere bør bevare op til 80 % kapacitet i omkring 1.000 opladningscyklusser. Pixel 3 til Pixel 8 Pro og Pixel Fold er klassificeret til omkring 800 cyklusser. I EU skal smartphones og tablets, der er omfattet af ecodesignkravene, klare mindst 800 opladnings- og afladningscyklusser og stadig have mindst 80 % af den oprindelige kapacitet tilbage.

I daglig brug ville jeg læse tallene sådan:

- Over 85 % er som regel fint, medmindre telefonen havde et lille batteri fra begyndelsen.
- Omkring 80 % er det punkt, hvor storforbrugere ofte begynder at planlægge et batteriskift.
- Under 75 % er klager over batteritiden ikke overraskende.
- Under 70 % er udskiftning som regel den praktiske løsning, hvis du vil beholde telefonen.

Det er ikke love. Det er beslutningspunkter.

## Hvorfor tallet kan være forkert

Batteritilstanden er et estimat. Telefonen tager ikke batteriet med i et laboratorium og måler det under kontrollerede forhold.

En chip i batterimåleren estimerer kapaciteten ved at følge strømmen ind og ud af batteriet, læse spændingen, overvåge temperaturen og sammenligne det hele med en model for, hvordan cellen bør opføre sig. Den model kan drive. Lange perioder med overfladisk opladning, et batteriskift, en systemopdatering eller usædvanlige temperaturer kan få det viste tal til at ændre sig.

Små spring er normale. Hvis batteritilstanden går fra 88 % til 90 % efter nogle mere komplette opladningscyklusser, er batteriet ikke blevet repareret. Estimatet er blevet bedre.

Tredjepartsapps har samme begrænsning, bare med en anden metode. AccuBattery estimerer eksempelvis kapaciteten ved at måle opladningsstrømmen under opladninger og beregne et gennemsnit over tid. Det kan være nyttigt efter en uge eller to med normal opladning, men én session er ikke nok. Et billigt kabel, varme, en delvis opladning eller en telefon, der sænker hastigheden nær 80 %, kan skævvride resultatet.

Hardwaren betyder også noget. Topmodeller har ofte bedre batterimålere end billige telefoner. Nogle enheder rapporterer stabile, brugbare værdier. Andre viser 100 % for evigt, fordi de ikke udstiller reelle aldringsdata.

## Hvad du skal gøre med tallet

Brug målingen som en udvikling over tid. Én aflæsning er interessant. Et fald over seks måneder er mere nyttigt.

Hvis telefonen viser 89 % og stadig holder hele dagen, skal du ikke gøre noget. Hvis den viser 78 %, og du oplader to gange om dagen, er det sandsynligvis værd at undersøge prisen på et batteriskift. Hvis telefonen slukker ved 25 %, bliver varm ved let brug eller springer mellem procenter, er symptomerne vigtigere end selve tallet.

Og hvis batteriet svulmer op, skal du stoppe med at bruge telefonen. Procenten for batteritilstand er ikke længere relevant.

runcheck er nyttig her, fordi du kan se batteritilstand sammen med temperatur, spænding, strømmålingens pålidelighed, afladningshastighed og historik. Batterialdring viser sig sjældent som ét rent tal. Den viser sig som et mønster.

## Almindelige spørgsmål

### Er 85 % batteritilstand dårligt?

Nej. Ved 85 % har cellen mistet kapacitet, men de fleste telefoner er stadig brugbare. Et stort telefonbatteri kan for eksempel stadig lagre omkring 4.250 mAh ved 85 % batteritilstand. Det kan være nok til en hel dag, afhængigt af telefonen og dine vaner.

### Kan batteritilstanden stige igen?

Den reelle kemiske kapacitet kommer ikke tilbage. Aldring af litium-ion-batterier er permanent. Det viste tal kan stige, hvis telefonen tidligere undervurderede kapaciteten og senere beregner den mere præcist.

### Hvorfor viser min telefon "Good" i stedet for en procent?

Fordi mange Android-telefoner kun udstiller en grundlæggende status for batteriet. "Good" betyder, at Android ikke registrerer en fejltilstand. Det betyder ikke, at cellen stadig har 100 % af sin oprindelige kapacitet.

### Skal jeg udskifte batteriet præcis ved 80 %?

Ikke automatisk. Udskift det, når telefonen ikke længere passer til din dag, når den slukker uventet, eller når statussen er Reduceret og batteritiden er blevet et problem. Grænsen på 80 % er et signal om at begynde at planlægge, ikke en nedtælling.
