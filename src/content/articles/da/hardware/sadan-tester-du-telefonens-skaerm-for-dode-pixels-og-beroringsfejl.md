---
title: "Sådan tester du telefonens skærm for døde pixels og berøringsfejl"
description: "Du er ved at undersøge en brugt telefon. Sælgeren siger, at skærmen er fejlfri, og ved første øjekast ser den sådan ud. Så åbner du en hvid skærm og opdager en sort prik tæt ved hjørnet. Eller værre: Du begynder at skrive, og en stribe af tastaturet reagerer ikke på din finger."
listSummary: "Du er ved at undersøge en brugt telefon."
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["hardware","test","diagnostik","android","guide"]
locale: "da"
draft: false
---
Skærmfejl kan være svære at opdage under normal brug. Baggrunde, ikoner, mørk tilstand og bevægelse skjuler dem. Nogle få test med ensfarvede billeder og berøring gør fejlene langt lettere at finde.

## Døde og fastlåste pixels

En død pixel forbliver sort, uanset hvad skærmen viser. Den virker ikke længere.

En fastlåst pixel er anderledes. Den bliver ved med at vise én farve, som regel rød, grøn, blå eller hvid, selvom området omkring den ændrer sig. Fastlåste pixels reagerer nogle gange på værktøjer, der hurtigt skifter mellem farver. Døde pixels gør som regel ikke.

Begge dele ses lettest på ensfarvede baggrunde. Det er ikke nok at kigge på telefonens startskærm og konkludere, at alt er i orden. Du overser for meget.

## Tjek for døde og fastlåste pixels

Skru lysstyrken højt op, rengør glasset, og vis ensfarvede billeder i fuld skærm. Brug hvid, sort, rød, grøn, blå og grå.

En browserbaseret test som deadpixeltest.org fungerer fint. En skærmtest-app fra Play Store kan være bedre, fordi den kan skjule status- og navigationslinjerne, skifte automatisk mellem farver og også vise farveforløb.

Nogle telefoner har indbyggede test:

- Samsung Galaxy: Tast `*#0*#` på mange modeller, og brug derefter testene Red, Green, Blue, Black og Touch. Samsung Members har også skærmdiagnostik via Support > Telefondiagnosticering.
- Google Pixel: Tast `*#*#7287#*#*` for at åbne Pixel Diagnostics på understøttede enheder.
- Xiaomi, Redmi og POCO: Prøv `*#*#6484#*#*` for at åbne CIT-menuen.
- Motorola: Åbn Device Help > Device diagnosis > Hardware test.

På en hvid baggrund ligner døde pixels små sorte prikker. På en sort baggrund ses fastlåste pixels som klare farvede prikker. Røde, grønne og blå skærmbilleder kan afsløre, hvilken subpixel der sidder fast.

Tag dig tid. En langsom gennemgang af kanter og hjørner afslører flere fejl end hurtigt at trykke sig gennem farverne.

## Tjek ensartet lysstyrke og indbrænding

En helt sort skærm i et mørkt rum er nyttig på telefoner med LCD, fordi lysudslip fra bagbelysningen viser sig som lysere, uklare områder nær kanterne. OLED-skærme har ingen bagbelysning og får derfor ikke denne type lysudslip på samme måde.

OLED har sit eget problem: indbrænding. AMOLED-, Super AMOLED- og Dynamic AMOLED-paneler kan ældes ujævnt, når de samme elementer står på skærmen i lang tid. Navigationslinjer, statusikoner, tastaturer og knapper fra sociale apps er typiske mønstre.

Brug en ensfarvet grå skærm ved middel lysstyrke til at tjekke for indbrænding. Se efter svage skygger af tastaturet, navigationsknapper, uret eller appbjælker. En rød skærm kan også gøre nogle former for indbrænding lettere at se, fordi de forskellige subpixels ikke ældes lige hurtigt.

Indbrænding er permanent. Apps, der hævder at kunne reparere den, forsøger som regel at ælde resten af skærmen, så det gamle mønster bliver mindre synligt. Det er ikke en reel reparation.

## Test berøringsfølsomheden

En skærm kan se perfekt ud og stadig have en defekt digitizer. Digitizeren er det lag, der registrerer berøring.

Åbn en tegneapp, og vælg en tynd pensel. Tegn vandrette linjer fra toppen til bunden af skærmen og derefter lodrette linjer fra venstre mod højre. Læg linjerne tæt. Hvis stregen brydes i det samme område hver gang, registrerer den del af digitizeren ikke berøringen korrekt.

En berøringstest-app med et gitter gør det lettere. Hvert felt skal markeres, når fingeren glider hen over det. Døde områder forbliver tomme.

Samsungs `*#0*#`-menu indeholder en Touch-test på mange Galaxy-telefoner. Nogle Android-telefoner reagerer også på `*#*#2664#*#*`, men denne kode virker langt mindre konsekvent end producenternes egne værktøjer. Hvis den ikke virker, er det ikke et problem. Tegnetesten er tilstrækkelig.

Vær især opmærksom på skærmens kanter. Buede skærme og meget smalle rammer kan gøre berøring ved kanten sværere at vurdere, især når håndfladeafvisning er aktiv.

## Test multitouch

De fleste moderne telefoner understøtter mindst fem samtidige berøringspunkter, og mange understøtter ti. En multitouch-testapp viser en nummereret cirkel for hver finger.

Læg flere fingre på skærmen, og bevæg dem langsomt. Cirklerne skal følge fingrene uden at hoppe eller forsvinde. Hvis telefonen mister den samme finger hver gang i et bestemt område, er det et nyttigt tegn på en fejl.

Det har betydning for spil, pinch-to-zoom, brug af tastaturet og tilgængelighedsbevægelser.

## Hold øje med ghost touches

Ghost touches er tryk, som telefonen registrerer, selvom ingen rører skærmen. Den kan åbne apps, skrive bogstaver, rulle eller trykke på knapper af sig selv.

Fjern først skærmbeskytteren og coveret. Billige skærmbeskyttere, fugt under glasset og tryk nær kanterne kan forvirre digitizeren. Rengør skærmen, og test både mens telefonen oplader, og mens opladeren er taget ud. Dårlige opladere kan nogle gange skabe elektrisk støj, som påvirker berøringen.

Start derefter telefonen i sikker tilstand. Hvis ghost touches fortsætter i sikker tilstand, er hardware en mere sandsynlig årsag. Hvis de stopper, kan en tredjepartsapp eller et overlay være involveret.

Hvis berøringsproblemerne begyndte umiddelbart efter en større systemopdatering, skal du tage software alvorligt som mulig årsag. Android 17 blev først gjort tilgængelig på de fleste understøttede Pixel-telefoner, mens andre producenter fulgte senere. Derfor kan opdateringsrelaterede berøringsfejl vise sig hos ét mærke før andre. Installer ventende rettelser, og test igen, før du betaler for en ny skærm.

## Hvad du skal gøre, hvis du finder en fejl

På en brugt telefon bør en død pixel, et dødt berøringsområde, ghost touches eller tydelig indbrænding påvirke prisen. Lad ikke nogen afvise en berøringsfejl som "bare software", medmindre du selv kan teste sikker tilstand eller producentens diagnostik.

Er telefonen ny, bør du kontakte forhandleren hurtigt. Ved et dansk forbrugerkøb har du som udgangspunkt to års reklamationsret, og det er sælgeren, du skal klage til. En producentgaranti kan være et ekstra spor, men den erstatter ikke reklamationsretten. Meld fejlen med det samme i stedet for at vente, især hvis butikken også tilbyder en kort retur- eller ombytningsfrist.

En fastlåst pixel kan være værd at forsøge at løsne med et værktøj, der skifter hurtigt mellem farver, men forvent ikke for meget. Kør det i en kort periode, ikke natten over ved maksimal lysstyrke. Døde pixels, ghost touches og døde berøringsområder kræver som regel udskiftning af hele skærmmodulet.

Prisen på en skærmreparation varierer for meget til, at et generelt beløb giver mening. En billig telefon med LCD kan være forholdsvis enkel at reparere. En buet OLED-skærm på en topmodel kan koste så meget, at det begynder at give mere mening at udskifte telefonen. Få et tilbud på den præcise model, før du beslutter dig.

## Korte svar

### Kan en skærmbeskytter give døde pixels?

Nej. Døde pixels sidder inde i selve skærmpanelet. En skærmbeskytter kan give berøringsfejl, falske tryk, dårlig respons ved kanterne eller problemer med nærhedssensoren, men den slår ikke pixels ihjel.

### Breder døde pixels sig?

En enkelt død pixel forbliver som regel en enkelt død pixel. Hvis der kommer flere med tiden, kan den egentlige årsag være skade på panelet, trykskade eller en forbindelse, der er ved at svigte.

### Er indbrænding dækket af garanti eller reklamationsret?

Nogle gange, men gå ikke ud fra det. Mange producenter betragter indbrænding som slid, især på ældre OLED-telefoner. Kraftig indbrænding tidligt i telefonens levetid bør anmeldes til sælgeren. Om fejlen er dækket af reklamationsretten, afhænger af, om der er tale om en mangel og ikke almindeligt slid. En eventuel producentgaranti kan have andre vilkår.

### Er én død pixel acceptabel på en ny telefon?

For køberen, nej. En ny telefon bør have en fejlfri skærm. Om fejlen giver ret til reparation, ombytning eller en anden løsning, afhænger af den konkrete vurdering. Derfor bør du reklamere hurtigt.
