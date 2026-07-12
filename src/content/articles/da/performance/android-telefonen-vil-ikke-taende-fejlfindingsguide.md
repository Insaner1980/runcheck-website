---
title: "Android-telefonen vil ikke tænde: fejlfindingsguide"
description: "Vil din Android-telefon ikke tænde, eller sidder den fast på en sort skærm? Gå de sikreste kontroller igennem først, fra opladning og tvungen genstart til Recovery Mode og reparation."
listSummary: "Vil din Android-telefon ikke tænde, eller sidder den fast på en sort skærm?"
hub: "performance"
sourceNumber: 75
order: 12
tags: ["runcheck","seo","android","artikel","guide"]
locale: "da"
draft: false
---
---

Nogen sætter en telefon til opladning, ser ingenting, trykker fem gange på tænd-sluk-knappen og antager, at den er død. Nogle gange er den det. Oftere er batteriet helt afladet, softwaren er frosset med skærmen slukket, eller skærmen er gået i stykker, mens selve telefonen stadig kører.

Rækkefølgen betyder noget. Begynd med kontrollerne med lav risiko. Spring ikke direkte til værktøjer til fabriksnulstilling, medmindre Android tydeligt begynder at starte, og du ikke har andre muligheder tilbage.

## Oplad den, som om batteriet virkelig er helt tomt

Brug en vægoplader, ikke en USB-port på en bærbar computer og ikke en trådløs oplader. Trådløs opladning er praktisk, når alt virker, men den tilføjer problemer med placering og varme, som du ikke har brug for under fejlfinding.

Tilslut telefonen med et kabel og en adapter, du ved virker. Lad den derefter ligge i mindst 15 minutter. En dybt afladet telefon viser måske ikke et batteriikon med det samme. Det er normalt.

Se efter ethvert livstegn efter 15 minutter. Et batteriikon, en vibration, en opladningslyd eller en lille LED betyder, at der kommer strøm ind. Lad den oplade til mindst 10 %, før du prøver at starte den.

Hvis der stadig ikke sker noget, skal du ændre én ting ad gangen: kabel, oplader og stikkontakt. Se ind i USB-C-porten med en lommelygte. Fnug fra en lomme kan blive presset så hårdt sammen, at kablet føles sat i uden at få ordentlig kontakt. Brug en tandstik af træ eller et plastikværktøj, hvis du renser porten. Brug ikke metal.

## Foretag en tvungen genstart på den rigtige måde

En sort skærm betyder ikke altid, at Android er slukket. Systemet kan være frosset, mens skærmen er gået i dvale.

Brug metoden til tvungen genstart for dit mærke:

- På Pixel skal du holde tænd-sluk-knappen nede i op til 60 sekunder. Slip, når Google-logoet vises.
- På Samsung Galaxy skal du holde sideknappen eller tænd-sluk-knappen og **Lydstyrke ned** nede, indtil telefonen slukker og genstarter. Det tager som regel mere end 7 sekunder.
- På Xiaomi-, Redmi- og POCO-telefoner skal du holde tænd-sluk-knappen nede i mere end 10 sekunder.
- På andre Android-telefoner kan du prøve tænd-sluk-knappen og **Lydstyrke ned** sammen i 10-20 sekunder. Hvis det ikke virker, skal du holde tænd-sluk-knappen alene nede længere.

Vibrationer, notifikationslyde eller en telefon, der ringer, når du kalder den op fra en anden telefon, peger på skærmen snarere end hele enheden. Det er et nyttigt spor. En skærmreparation er irriterende, men det er et andet problem end et dødt bundkort.

## Tjek, om det kun er skærmen, der er død

Ring til telefonen. Brug Googles Find Hub fra en anden enhed, hvis funktionen er aktiveret. Tilslut telefonen til en oplader, og lyt efter en lyd eller mærk efter vibration. Slut den til en computer, og se, om Windows, macOS eller Android File Transfer registrerer noget.

Hvis computeren registrerer telefonen, skal du ikke gå ud fra, at dine data dermed er sikret. De fleste moderne Android-telefoner viser ikke filer via USB, før du har låst skærmen op og godkendt filoverførsel. Registreringen betyder dog, at i det mindste en del af hardwaren stadig fungerer.

En revnet skærm med sorte pletter, streger eller svag baggrundsbelysning peger på en skærmfejl. Nylig væskekontakt er mere alvorlig. Selv kortvarig kontakt med væske kan senere give korrosion i stik eller kortslutning i strømkomponenter.

Et opsvulmet batteri er den situation, hvor du stopper. Hvis bagsiden buler, skærmen løfter sig, eller telefonen ikke ligger fladt, må du ikke oplade den eller presse delene sammen. Tag den til et værksted.

## Hvis den når logoet, men ikke starter

Når Samsung-, Pixel-, Xiaomi- eller Android-logoet vises, er enheden ikke helt død. Den fejler under opstarten.

Prøv Sikker tilstand, hvis opstarten kommer langt nok. På mange enheder kan du holde **Lydstyrke ned** nede under opstarten for at starte med downloadede apps deaktiveret. Hvis Sikker tilstand virker, skal du afinstallere nyligt installerede apps og genstarte normalt.

Et loop eller en fastfrysning før låseskærmen kræver Recovery Mode. På Pixel holder du normalt tænd-sluk-knappen og **Lydstyrke ned** nede for at åbne bootloaderen og vælger derefter Recovery Mode. Samsung bruger ofte **Lydstyrke op + tænd-sluk**, mens nyere modeller kan kræve et tilsluttet USB-kabel. Xiaomi bruger ofte **Lydstyrke op + tænd-sluk**.

Vælg først **Reboot system now** i Recovery Mode. Hvis telefonen viser **Wipe cache partition**, kan du prøve det bagefter, fordi det ikke sletter dine data. Pixel-telefoner viser som regel ikke valget, så spring det over dér. **Wipe data/factory reset** er det sidste lokale trin, fordi det sletter telefonen.

Android 17 blev udgivet til de fleste understøttede Pixel-enheder den 16. juni 2026, mens andre kvalificerede enheder følger senere. Hvis opstartsproblemet begyndte lige efter den opgradering eller en anden større systemopdatering, skal du tjekke producentens supportside for et reparationsværktøj eller en opdateringsmeddelelse, før du sletter data.

## Brug computerbaserede reparationsværktøjer forsigtigt

Computerprogrammer kan geninstallere Android, men de er ikke magiske værktøjer til at redde filer.

Googles Pixel Update and Software Repair er det sikreste første trin for Pixel 3 og nyere med Android 10 eller nyere, når værktøjet er tilgængeligt i dit land, og telefonen kan forbindes via USB. Android Flash Tool kan flashe understøttede Pixel-enheder gennem en WebUSB-kompatibel browser, men det kræver den rigtige enhedstilstand og kan kræve oplåsning eller sletning.

På Samsung kan Smart Switch på computeren i nogle versioner tilbyde gendannelsesmuligheder efter en mislykket softwareopdatering. Xiaomis MiFlash kan geninstallere firmware på understøttede enheder, men kræver ofte adgang til bootloader eller fastboot samt den korrekte ROM til præcis din model.

Det er her, vejledninger bliver farlige. En forkert softwareversion kan gøre gendannelsen sværere. Hvis du ikke allerede kender modelnummer, region, bootloaderstatus og sikkerhedskopieringsstatus, er et værksted det sikrere valg.

## Når det sandsynligvis er hardware

Ingen opladningsindikator, ingen vibration, ingen USB-registrering og ingen reaktion på tvungen genstart efter test med flere opladere peger på hardware.

De almindelige fejl er et dødt batteri, en beskadiget USB-C-port, en defekt strømstyringschip, en ødelagt skærm, væskeskade eller fejl på bundkortet. Batteri- og portreparationer ligger som regel i den billigere ende. Fejl på selve bundkortet gør ikke.

Hvis telefonen kan være dækket af garanti, forsikring eller dansk reklamationsret, bør du bruge den kanal først. Reklamationsretten gælder som udgangspunkt i 2 år ved køb hos en virksomhed i Danmark og er adskilt fra en frivillig producentgaranti. Tjek vilkårene, før et tredjepartsværksted åbner telefonen, fordi en skade, der opstår under et senere indgreb, ikke nødvendigvis dækkes.

## Sådan redder du dine data

Uden en sikkerhedskopi efterlader en opstartsfejl dig hurtigt med færre muligheder. Recovery Mode giver ikke en normal, ikke-rootet telefon adgang til dine filer. USB-filoverførsel kræver som regel, at telefonen er låst op. En død skærm kan nogle gange omgås med USB-C-videoudgang, en hub, et tastatur og en mus, men kun på modeller, der understøtter videoudgang og stadig starter.

Professionel datagendannelse findes, men den er dyr og uden garanti for resultat. Moderne Android-kryptering betyder også, at lagerchippen alene normalt ikke er nok. Enheden skal repareres så langt, at den kan låses op.

Det er den del, ingen bryder sig om at høre. Sikkerhedskopier er kedelige, indtil den dag de ikke er det.
