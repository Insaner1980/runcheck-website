---
title: "Batterikalibrering på Android: virker det?"
description: "De fleste råd om batterikalibrering stammer fra ældre batteriteknologi og sejlivede forumråd. På moderne Android-telefoner forbedrer kalibrering ikke batteritiden. Den reparerer ikke et slidt batteri og forvandler ikke 82 % batteritilstand til 95 %."
listSummary: "De fleste råd om batterikalibrering stammer fra ældre batteriteknologi og sejlivede forumråd."
hub: "battery"
sourceNumber: 15
order: 5
subgroup: "Health"
tags: ["batteri","tilstand","diagnostik","android","guide"]
locale: "da"
draft: false
---
Det, en kalibrering nogle gange kan gøre, er at rette en forkert visning af batteriprocenten.

**Metabeskrivelse:** Batterikalibrering på Android gendanner ikke tabt kapacitet, men kan nogle gange rette en upræcis batteriprocent. Se, hvornår det hjælper, og hvornår det er spild af tid.

## Hvad kalibrering kan og ikke kan rette

Procenten i statuslinjen er et estimat. Telefonens batterimåler følger strøm, spænding, temperatur og opladningsmønstre og omsætter dataene til et tal for den resterende opladning.

Estimatet kan drive. En telefon kan sidde fast på 12 % i en time, slukke ved 18 % eller springe fra 40 % til 9 % efter en genstart. Når det sker, kan batterimåleren have mistet sine referencepunkter.

Kalibrering betyder, at måleren får hjælp til at genlære den øvre og nedre grænse for batteriets brugbare område. Det er ikke en kemisk reparation. Cellen får ikke mere kapacitet. Telefonen bliver bare bedre til at rapportere den kapacitet, der allerede er tilbage.

Den forskel er vigtig. Hvis batteriet er fysisk slidt, er kalibrering det forkerte værktøj.

## Myten om batterystats.bin

En gammel Android-myte siger, at du kan kalibrere batteriet ved at slette `batterystats.bin`. Det krævede som regel root, en brugerdefineret recovery eller en såkaldt kalibreringsapp.

Filen er ikke batterimåleren. Den gemmer Androids regnskab over batteriforbrug, altså de data systemet bruger til at opbygge skærmen **Indstillinger > Batteri > Batteriforbrug**. Sletning ændrer ikke det aktuelle batteriniveau, reparerer ikke batteriet og får ikke telefonen til at holde længere.

Myten overlevede, fordi proceduren virker teknisk. En skjult systemfil, root-adgang, en genstart og en ny batterigraf får det til at se ud, som om noget grundlæggende er ændret. Det er det ikke.

De fleste Play Butik-apps, der hævder at kunne kalibrere batteriet, gør én af to ting. Enten viser de en vejledning til en manuel fuld cyklus, eller også viser de en animation og reklamer. Uden særlig adgang til batterimåleren kan de ikke kalibrere hardwaren.

## Hvornår en fuld cyklus er værd at prøve

En enkelt kontrolleret fuld cyklus kan være nyttig, når visningen tydeligvis er forkert.

Prøv det kun ved symptomer som disse:

- Telefonen slukker ved 15-30 %, selv under let brug.
- Batteriprocenten falder i store spring.
- Telefonen bliver stående på én procent i lang tid og flytter sig så pludseligt.
- Batteriet er for nylig blevet udskiftet, men telefonen opfører sig stadig, som om det gamle batteri sidder i.
- En større opdatering har tydeligt ændret visningen af batteriniveauet.

Én cyklus er nok som test. Oplad telefonen til 100 %, brug den normalt, indtil niveauet bliver meget lavt eller den slukker af sig selv, og oplad derefter til fuld uden mange afbrydelser. Gør det ikke til en ugentlig vane.

En mindre aggressiv version er bedre, hvis telefonen stadig opfører sig sikkert: Oplad til 100 %, brug den ned til et encifret niveau, og oplad så til fuld igen. Du behøver ikke fremtvinge gentagne nedlukninger.

## Hvornår kalibrering er den forkerte løsning

Kalibrering løser ikke reelt batteriforbrug.

Hvis en app holder en wake lock aktiv, stopper kalibrering den ikke. Hvis du opholder dig i et område med svag mobildækning hele dagen, får kalibrering ikke modemmet til at bruge mindre strøm. Hvis telefonen bliver varm på grund af gaming, navigation eller en fejlbehæftet opdatering, er kalibrering bare en afledning.

Den reparerer heller ikke batteriets nedbrydning. Hvis din skærmtid tidligere var syv timer og nu er tre timer ved samme brug, har batteriet mistet kapacitet. Måleren kan sagtens være præcis. Batteriet er bare blevet mindre.

Uventede nedlukninger efter en fuld cyklus er et dårligt tegn. En slidt litium-ion-celle kan have høj indre modstand, så spændingen falder brat, når telefonen kræver strøm. Den lagrede opladning er måske ikke helt væk, men telefonen kan ikke bruge den under belastning. Det er hardwareslitage, ikke et procentproblem.

## Hvad moderne Android allerede gør

Moderne telefoner justerer løbende deres batteriestimater. De lærer af normal opladning og afladning. De har også opladningsfunktioner, der reducerer belastningen over tid, blandt andet Adaptiv opladning, Optimering af opladning og en grænse på 80 % på understøttede enheder.

Pixel er et godt eksempel. Googles egne batteriråd siger, at du ikke behøver at lære telefonen batteriets kapacitet ved at gå fra fuldt til tomt eller fra tomt til fuldt. Det er det rigtige råd ved normal brug.

Pixel 6a og nyere understøtter også Optimering af opladning, herunder en grænse på 80 %. Pixel 8a og nyere kan vise Batteritilstand og Batterikapacitet i Indstillinger. Hjælp til batteritilstand, som findes på Pixel 6a og nyere, justerer den maksimale spænding i trin, efterhånden som batteriet ældes.

Intet af det kræver, at du aflader telefonen til nul hver måned. Nej, virkelig.

## Hvorfor de gamle råd ikke vil dø

Nikkel-cadmium-batterier havde en reel hukommelseseffekt. Hvis du gentagne gange kun brugte en del af kapaciteten, kunne de begynde at opføre sig, som om det mindre område var hele batteriet. Fuld afladning gav mening for den kemi.

Litium-ion-batterier er anderledes. De foretrækker overfladiske cyklusser, moderate temperaturer og mindre tid ved meget højt opladningsniveau. Dyb afladning skaber ekstra belastning. Det samme gør en varm telefon, der ligger på 100 % i flere timer.

Derfor skal den gamle kalibreringsrutine bruges forsigtigt. Én fuld cyklus for at rette en forvirret måler er som regel i orden. Gentagne dybe afladninger, fordi en app siger det, er dårlig vedligeholdelse forklædt som videnskab.

## Den sikre måde at prøve én cyklus på

Brug kun metoden, når batteriprocenten tydeligvis er forkert.

1. Sikkerhedskopiér vigtige data først, hvis telefonen har slukket for tidligt.
2. Oplad til 100 %, og lad telefonen være tilsluttet lidt længere, efter den viser fuld opladning.
3. Brug telefonen normalt, indtil den når et lavt niveau. Varm den ikke med vilje op med spil eller benchmarktests.
4. Lad den kun slukke, hvis det er en del af det symptom, du undersøger.
5. Oplad til fuld uden gentagne afbrydelser.
6. Hold øje med de næste normale opladningscyklusser.

Hvis procenten stabiliserer sig, er problemet løst. Hvis nedlukninger, varme eller store spring fortsætter, skal du stoppe med at kalibrere og undersøge batteriet eller softwaren.

## Almindelige spørgsmål

### Hvor ofte bør jeg kalibrere et Android-batteri?

Næsten aldrig. Hvis procenten ser normal ud, skal du lade den være. Rutinemæssig kalibrering er ikke vedligeholdelse.

### Virker apps til batterikalibrering?

Apps, der kun bruger software, kan ikke reparere batterimåleren. I bedste fald fører de dig gennem en manuel cyklus. I værste fald bruger de strøm, mens de foregiver at hjælpe.

### Forbedrer kalibrering procenten for batteritilstand?

Den kan ændre det viste tal en smule, hvis det tidligere estimat var forkert. Den kan ikke øge batteriets reelle kemiske kapacitet.

### Er det farligt at aflade til nul?

Én normal nedlukning er som regel ikke en katastrofe, fordi batteriets beskyttelseskredsløb efterlader en sikkerhedsreserve. Gentagen dyb afladning er stadig skadelig for litium-ion-batteriets levetid. Gør det kun, når der er en grund.
