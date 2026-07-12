---
title: "Hvad er termisk begrænsning, og hvordan påvirker det din telefon?"
description: "Hvorfor føles en hurtig telefon pludselig langsom midt i et spil, et videoopkald eller en længere optagelse med kameraet? Som regel skyldes det termisk begrænsning, også kaldet thermal throttling. Enheden er blevet varm, så Android og producentens software sænker ydeevnen, før varmen udvikler sig til et sikkerhedsproblem."
listSummary: "temperatur, varme og android"
hub: "thermal"
sourceNumber: 56
order: 4
tags: ["temperatur","varme","android","fejlfinding","hardware"]
locale: "da"
draft: false
---
## Hvad termisk begrænsning betyder

Det er en kontrolleret nedbremsning. Telefonen kan sænke hastigheden på CPU og GPU, dæmpe skærmen, reducere opladningseffekten, begrænse radiofunktionerne eller skrue ned for anden strømkrævende adfærd for at få temperaturen ned.

Det er ikke i sig selv en fejl. Telefonen vælger et lavere ydelsesniveau, så batteriet, skærmen, modemmet og SoC'en holder sig inden for producentens sikkerhedsgrænser.

Du mærker kompromiset som tabte billeder, langsommere appstart, dæmpet lysstyrke, begrænsninger i kameraet, langsommere opladning eller et spil, der begynder flydende og senere hakker. Android spørger ikke om lov. Det sker bare.

## Androids termiske niveauer

Android har haft offentlige API'er til termisk status siden Android 10. På understøttede enheder kan apps læse forenklede alvorlighedsniveauer via `PowerManager`:

- **Ingen:** Ingen termisk begrænsning.
- **Let:** Let begrænsning, som normalt ikke påvirker almindelig brug nævneværdigt.
- **Moderat:** En vis begrænsning, men telefonen er som regel stadig brugbar.
- **Alvorlig:** Kraftig begrænsning, hvor ydeevnen tydeligt påvirkes.
- **Kritisk:** Platformen har allerede reduceret strømforbruget markant.
- **Nødsituation:** Vigtige komponenter kan være ved at lukke ned på grund af temperaturen.
- **Nedlukning:** Enheden skal lukke ned med det samme.

Niveauerne er standardiserede. Det er temperaturerne, der udløser dem, ikke. En Pixel, en Galaxy S Ultra, en Xiaomi-gamingtelefon og en billig Motorola kan koble varme til niveauerne på forskellige måder, fordi deres køling, batterier, rammer, skærme og sikkerhedsmargener er forskellige.

Derfor bliver helt præcise temperaturgrænser hurtigt rodede. Én telefon kan begynde at begrænse ydeevnen ved en batteritemperatur, som en anden accepterer under opladning.

## Termisk spillerum er et bedre tidligt varsel

Den termiske status viser det aktuelle niveau. Det termiske spillerum viser, hvor tæt den nuværende belastning er på alvorlig begrænsning.

Androids vejledning om spilydeevne beskriver termisk spillerum som en værdi fra 0,0 og opefter. En værdi på 1,0 betyder, at enheden er ved eller tæt på `THERMAL_STATUS_SEVERE` med den aktuelle belastning. Værdier over 1,0 kan også forekomme. Spil kan bruge signalet til at sænke billedhastigheden eller grafikkvaliteten, før spilleren mærker nedbremsningen.

Der er en hage: understøttelsen varierer. Nogle telefoner giver kun begrænsede data, nogle returnerer `NaN`, hvis der spørges for ofte, og modeller kan fortolke spillerummet forskelligt, fordi deres termiske design ikke er ens. En god diagnose bør derfor behandle termisk spillerum som et signal, ikke som et universelt termometer.

runcheck bruger Androids offentlige termiske signaler, når enheden stiller dem til rådighed. Det er vigtigt, fordi almindelige apps ikke bør basere en brugervendt termisk status på private temperaturfiler i sysfs.

## Hvad udløser begrænsningen?

Lange spilsessioner er det oplagte eksempel. Et 3D-spil kan belaste CPU, GPU, skærm, højttalere, netværk og haptik på samme tid.

Kameraet er en anden klassiker. Optagelse i 4K eller 8K, HDR-behandling, lange videoklip og direkte sollys kan hurtigt opvarme telefonen. Kameraappen kan reducere kvaliteten eller stoppe optagelsen, hvis enheden bliver for varm.

Navigation er langsommere, men mere lumsk. Skærmen er tændt, GPS'en arbejder, modemmet henter kortdata, og telefonen sidder måske i en varm holder i bilen. Læg direkte sol gennem forruden oveni, så kommer begrænsningen hurtigere.

Opladning under aktiv brug er den nemme fejl. Hurtigopladning skaber varme i sig selv. Kombinér det med et spil, et videoopkald, et hotspot eller en videooptagelse, og telefonen får mindre mulighed for at køle af.

Et svagt signal kan også presse modemmet. En telefon, der kæmper for at holde fast i 5G i et område med dårlig dækning, kan blive varm, selv når skærmen er slukket.

Store systemopdateringer kan også give midlertidig varme. Android 17 blev udgivet den 16. juni 2026 og blev først gjort tilgængelig på de fleste understøttede Pixel-enheder. Andre Android-producenter følger senere med deres egne versioner. Efter en større opdatering kan appoptimering og synkronisering i baggrunden gøre telefonen varm i en dag eller to.

## Termisk begrænsning sammenlignet med batteribegrænsning

Denne form for begrænsning er midlertidig. Stop belastningen, lad telefonen køle af, og ydeevnen vender tilbage.

Batterirelateret styring af ydeevnen er noget andet. Når batterier ældes, stiger den interne modstand, og de bliver dårligere til at levere spidseffekt. Nogle telefoner sænker opladningsspændingen, opladningshastigheden eller anden adfærd for at holde et slidt batteri stabilt. Google beskriver for eksempel Hjælp til batteritilstand på Pixel 6a og nyere, hvor batteriets maksimale spænding justeres trinvist fra 200 opladningscyklusser på understøttede modeller.

Det er ikke det samme som et spil, der bliver langsomt efter 20 minutter. Det ene skyldes varme under belastning. Det andet er styring af et aldrende batteri.

Løsningen er heller ikke den samme. Varme kræver køling og mindre belastning. Et nedslidt batteri kræver udskiftning eller mere skånsomme opladningsvaner.

## Sådan ser du, at det sker

Det tydeligste tegn er, at ydeevnen bliver dårligere i løbet af en session. Et spil begynder ved 60 fps og falder senere. Kameraet optager uden problemer og viser derefter en temperaturadvarsel. Skærmen dæmpes, selvom du ikke har rørt lysstyrken. Opladningen sættes på pause eller bliver markant langsommere.

Placeringen af varmen kan også give et fingerpeg. Varme omkring kameraet peger ofte mod SoC'en. Varme midt på bagsiden peger mere mod batteriet eller spolen til trådløs opladning. Varme ved USB-C-porten kan tyde på belastning i kabel, oplader eller opladningskredsløb.

Apps, der læser Androids termiske status, gør det mindre uklart. Det er forventeligt, at status går fra Ingen til Let og videre til Moderat under et spil. Alvorlig, Kritisk eller gentagne hændelser på nedlukningsniveau under almindelig brug er ikke normalt.

## Sådan reducerer du begrænsningen

Sænk belastningen, før telefonen bliver nødt til at gøre det for dig.

I spil bør du først sænke billedhastigheden. Det giver ofte den største forskel. Sænk derefter opløsning, skygger, effekter og teksturkvalitet. En mellemindstilling med stabil billedhastighed føles som regel bedre end en ultraindstilling, der begynder at hakke efter ti minutter.

Tag coveret af under krævende brug. Bagpanelet og rammen er en del af telefonens køling.

Brug Wi-Fi i stedet for mobildata, når mobilsignalet er svagt. Dårlig dækning kan gøre en ellers normal session varm.

Undgå direkte sollys. En telefon kan begrænse ydeevnen i en solrig bilholder, selvom belastningen ikke er ekstrem.

Lad være med at hurtigoplade under krævende brug. Tag stikket ud, eller brug en langsommere oplader, hvis du er nødt til at fortsætte.

Hold apps og system opdateret. Producenter justerer den termiske styring over tid, og en fejlbehæftet appopdatering kan også skabe varme, indtil den bliver rettet.

## Når begrænsningen peger på et større problem

Termisk begrænsning under et krævende spil er normalt. Termisk begrænsning, mens du skriver en besked på et køligt bord, er det ikke.

Hvis telefonen bliver varm i tomgang, skal du kontrollere batteriforbrug, signalstyrke, nyligt installerede apps og Sikker tilstand. Hvis den stadig bliver varm i Sikker tilstand, eller batteriet er opsvulmet, pludselig aflades eller får telefonen til at slukke med strøm tilbage, bør du behandle det som et hardware- eller batteriproblem.

En batteritilstand under 80 % er en almindelig grænse for at overveje udskiftning på telefoner, der viser tallet. På understøttede Pixel-modeller kaldes kapacitet under 80 % for Reduceret, mens Samsung Members viser batteristatus som Normal, Svag eller Dårlig. De oplysninger er mere brugbare end at gætte ud fra varmen alene.

## Kort sagt

Telefonens termiske sikkerhedssystem er ikke din fjende. Du kan mindske begrænsningen ved at sænke belastningen, forbedre kølingen, undgå varme omgivelser og lade være med at kombinere hurtigopladning med krævende brug. Men hvis det sker under let brug, bør du ikke ignorere det. Så kan årsagen være en app, et svagt signal, opladeren eller et slidt batteri.

*Metabeskrivelse: Androids indbyggede termiske begrænsning beskytter telefonen mod varme. Læs om Androids termiske niveauer, termisk spillerum, almindelige udløsere og sikre måder at reducere begrænsningen på.*
