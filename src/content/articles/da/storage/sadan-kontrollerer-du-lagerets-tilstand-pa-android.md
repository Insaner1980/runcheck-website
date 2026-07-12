---
title: "Sådan kontrollerer du lagerets tilstand på Android"
description: "Android-lager kan blive slidt, men de fleste telefoner viser ikke en enkel procentværdi for lagerets tilstand. Her kan du se, hvad du kan kontrollere, hvad tallene betyder, og hvornår du bør reagere."
listSummary: "Android-lager kan blive slidt, men de fleste telefoner viser ikke en enkel procentværdi for lagerets tilstand."
hub: "storage"
sourceNumber: 80
order: 2
tags: ["lagerplads","android","oprydning","optimering","guide"]
locale: "da"
draft: false
---
---

Hvordan finder du ud af, om lageret i din Android-telefon er sundt og ikke bare har for lidt ledig plads? Irriterende nok gør de fleste telefoner det stadig ikke nemt.

Lagerets tilstand og mængden af ledig lagerplads er to forskellige problemer. En telefon kan have 80 GB ledigt og stadig have en svækket NAND-chip. En næsten fuld telefon kan føles langsom, selv om lagerhardwaren er i orden. De to ting bliver hele tiden blandet sammen, så begynd med at skille dem ad.

## Hvad slider på telefonens lager?

Android-telefoner bruger NAND-flashlager. Billige modeller har ofte brugt eMMC, mens telefoner i mellemklassen og topklassen som regel bruger UFS. Begge typer slides gennem program/slet-cyklusser. Hver gang data skrives, slettes og skrives igen, bliver cellerne en smule slidt.

Controlleren fordeler skrivningerne over chippen ved hjælp af wear leveling. Derfor ødelægger normal telefonbrug sjældent lageret hurtigt. Billeder, beskeder, appopdateringer og webbrowsing er ikke det samme som at skrive optagelser fra et overvågningskamera hele dagen.

Meget videooptagelse, konstante spilinstallationer, gentagne nulstillinger til fabriksindstillinger og en telefon, der næsten altid er fuld, belaster lageret mere. Det sidste betyder noget, fordi controlleren har færre ledige blokke til oprydning og wear leveling. Det virker. Indtil det ikke gør.

For de fleste er lageret ikke den første del af telefonen, der svigter. Batteriet, skærmen, USB-C-porten eller ophørt softwaresupport bliver normalt årsagen til at skifte telefon først. På istandsatte telefoner og hårdt brugte billige modeller bliver lagerets tilstand mere interessant.

## Problemet med Androids tal for lagerets tilstand

Der findes ingen universel Android-indstilling, som siger, at "lageret har 92 % af sin levetid tilbage", på samme måde som nyere Pixel-telefoner kan vise batteritilstand på understøttede modeller.

Android-frameworket indeholder en API for lagerets levetid. Den kan returnere den anslåede resterende levetid for den interne lagerenhed som en procentværdi eller `-1`, hvis oplysningerne ikke er tilgængelige. Haken er adgangen. I AOSP er API'en privilegeret og kræver `READ_PRIVILEGED_PHONE_STATE`, så almindelige apps fra Play Butik kan normalt ikke kalde den.

Nogle producentversioner kan vise lageroplysninger i enhedsdiagnostik eller reparationsrettede skærme, men det er ikke en ensartet forbrugerfunktion. Samsung Members kan køre en bred enhedsdiagnose på Galaxy-telefoner, men forvent ikke en tydelig procentværdi for NAND-lagerets resterende levetid.

Android 17 gør heller ikke lagerets tilstand til en universel indstilling for almindelige brugere. Versionen blev først gjort tilgængelig på understøttede Pixel-enheder, og andre producenter følger deres egne Android-varianter og tidsplaner. OEM-forskellene betyder derfor stadig meget.

## Kontrollér først lagertypen

Inden du måler hastigheden, bør du finde ud af, hvilken type lager telefonen bruger. Se producentens specifikationer, eller brug en hardwareinformationsapp som DevCheck og kontrollér lagerafsnittet.

Som en grov regel bruger billige telefoner fra de seneste år ofte eMMC 5.1. Bedre telefoner i mellemklassen bruger UFS 2.2 eller UFS 3.1. Nyere topmodeller bruger ofte UFS 4.0 eller UFS 4.1. UFS 5.0 er blevet offentliggjort som standard, og Samsung har præsenteret en lagerløsning baseret på den, men er endnu ikke udgangspunktet for almindelige aktuelle telefoner.

Typen betyder noget, fordi en langsom eMMC-telefon og en UFS-telefon med slidt lager kan give lignende måleresultater af helt forskellige årsager.

## Mål lagerhastigheden forsigtigt

Brug en lagerbenchmarkapp som CPDT. Kør testen, når telefonen er kølig, har over 20 % batteri, ikke bliver varm under opladning og har mindst 15-20 % ledig lagerplads. Kør den derefter igen. Ét dårligt resultat beviser ingenting.

Tallene her er kun pejlemærker, ikke bestået eller dumpet:

Vejledende værdier for sekventiel læsning/skrivning: eMMC 5.1 kan ligge omkring 250/100-125 MB/s, UFS 2.1 omkring 850/250, UFS 3.1 omkring 2.100/1.200 og UFS 4.0 omkring 4.200/2.800.

Rigtige telefoner rammer ikke altid de tal. Kapacitet, controller, temperatur, kryptering, firmware, ledig plads og selve benchmarken påvirker resultatet. En model med 128 GB kan også være langsommere end modellen med 512 GB i samme telefonserie, fordi den har færre NAND-dies, der arbejder parallelt.

Hvis resultatet er meget lavere end forventet, så frigør først plads og test igen efter en genstart. Hvis resultatet stadig er lavt, og telefonen samtidig fryser under installationer, flytning af filer, lagring af billeder eller appopdateringer, bliver lagerets tilstand en reel mistænkt.

## Tegn, der peger på lagerproblemer

Lagerproblemer føles anderledes end den almindelige langsomhed i en gammel telefon.

Apps kan installeres eller opdateres smerteligt langsomt. Kameraet kan holde pause efter hvert billede, mens filen gemmes. Telefonen kan hænge, når du kopierer, sletter eller flytter filer. Opstarten kan tage meget længere end før. Store spil kan kontrollere eller reparere deres filer oftere.

De alvorligere tegn er sværere at overse: beskadigede billeder, dokumenter der ikke kan åbnes, apps der går ned under skrivning af filer, fejl om at der ikke kan skrives til lageret trods ledig plads, eller en telefon der indimellem ikke kan starte.

Sikkerhedskopiér straks, hvis du ser tegn på datakorruption. Lad være med at benchmarke telefonen i en time, mens de data, du holder af, stadig kun findes på den.

## Kontroller, der kræver root

Rootede enheder kan nogle gange læse sundhedsdata på et lavere niveau fra sysfs. På eMMC-enheder kan estimater for levetid være tilgængelige som Extended CSD-værdier under stier som `/sys/class/mmc_host/mmc0/mmc0:*/life_time`. På UFS-enheder kan sundhedsdeskriptorer findes under `/sys/class/scsi_device/` eller tilsvarende producentspecifikke stier.

Det er ikke almindelig brugervejledning. Stierne varierer, SELinux blokerer adgangen på telefoner med standardsoftware, og værdierne er lette at misforstå. Hvis du allerede har root og ved, hvad du laver, kan de være nyttige. Hvis ikke, bør du ikke roote en telefon bare for at kontrollere lagerets tilstand.

## Sådan mindsker du belastningen af lageret

Hold 15-20 % af den interne lagerplads fri. På en telefon med 128 GB svarer det til cirka 20 GB. På en telefon med 256 GB er 40 GB en behagelig buffer, selv om du ikke behøver at være besat af det præcise tal.

Brug ikke nulstilling til fabriksindstillinger som rutinemæssig vedligeholdelse. Én nulstilling for at rydde op i en problemfyldt telefon er fint. Månedlige nulstillinger giver meningsløst slid og genskaber som regel det samme lagerproblem, når du installerer alt igen.

Gem kun lange videooptagelser på eksternt lager, hvis telefonen og kameraappen understøtter det ordentligt. Hvis du bruger et SD-kort, så opbevar medier der, ikke apps. Apps hører stadig hjemme på den interne lagerplads, fordi UFS er langt hurtigere og mere pålideligt end de fleste microSD-kort.

Hvis du bruger runcheck, bør du følge lagerpresset over tid i stedet for at stirre på ét tal. Lagerafsnittet viser kapacitetsforbruget, og sammen med batteritemperatur og andre tilstandssignaler hjælper det dig med at skelne mellem en fuld telefon og et muligt hardwareproblem.
