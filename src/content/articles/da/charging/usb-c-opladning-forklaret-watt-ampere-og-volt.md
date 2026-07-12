---
title: "USB-C-opladning forklaret: watt, ampere og volt"
description: "Metabeskrivelse: Hvad watt, ampere og volt betyder for opladning af Android-telefoner, hvordan USB Power Delivery fungerer, og hvorfor ikke alle USB-C-opladere giver samme hastighed."
listSummary: "opladning, batteri og android"
hub: "charging"
sourceNumber: 46
order: 10
tags: ["opladning","batteri","android","guide","hardware"]
locale: "da"
draft: false
---
Det er watt, du skal holde øje med. Volt og ampere forklarer, hvordan opladeren når dertil, men watt-tallet fortæller, hvor meget effekt der er til rådighed.

En oplader, der leverer 9 V ved 2 A, giver 18 W. En oplader, der leverer 20 V ved 3 A, giver 60 W. Regnestykket er enkelt: volt gange ampere er lig med watt.

Enkelt. Lige indtil USB-C-forhandlingen blander sig.

## Hvad oplysningerne på opladeren betyder

De fleste USB-C-opladere angiver flere kombinationer af udgangsspænding og strømstyrke. Der kan for eksempel stå:

- 5 V/3 A = 15 W
- 9 V/3 A = 27 W
- 15 V/3 A = 45 W
- 20 V/3,25 A = 65 W

Det er de effektprofiler, opladeren kan tilbyde. Telefonen tager ikke automatisk den højeste. Den anmoder om en profil, den understøtter, og opladeren skifter til det niveau.

Derfor ødelægger en 100 W-oplader til en bærbar computer ikke en telefon, der understøtter 18 W. Telefonen anmoder ikke om 100 W. Den vælger en lavere profil eller falder tilbage til almindelig opladning, hvis opladeren og telefonen ikke kan blive enige om en bedre profil.

## Sådan foregår forhandlingen med USB Power Delivery

USB Power Delivery, som normalt forkortes USB PD, er den vigtigste åbne standard for hurtigopladning på mange Android-telefoner, tablets, bærbare computere og tilbehørsenheder.

Når du tilslutter et USB-C-kabel, kommunikerer opladeren og telefonen via benene til Configuration Channel. Opladeren oplyser, hvilke Power Data Objects, eller PDO'er, den understøtter. Telefonen vælger én af dem. Derefter leverer opladeren den aftalte spænding og strømstyrke inden for de fastsatte grænser.

En USB PD-oplader på 45 W kan for eksempel tilbyde 5 V/3 A, 9 V/3 A, 15 V/3 A og 20 V/2,25 A. En telefon, der understøtter opladning ved 25 W, kan vælge en profil omkring 9 V. En bærbar computer kan vælge 20 V fra den samme adapter.

Opladeren presser ikke strøm ind i telefonen. Telefonen trækker den effekt, den kan bruge.

## Derfor er PPS vigtigt

Standardudgaven af USB PD bruger faste spændingstrin som 5 V, 9 V, 15 V og 20 V. PPS står for Programmable Power Supply og gør det muligt for telefonen at anmode om mindre ændringer i spænding og strømstyrke inden for opladerens angivne område.

Det har betydning, fordi et litium-ion-batteri ikke har brug for den samme spænding gennem hele opladningen. De ideelle forhold ændrer sig, efterhånden som batteriet fyldes. Ved opladning med fast spænding sker en større del af omformningen inde i telefonen, og den omformning udvikler varme. Med PPS kan opladeren komme tættere på det, telefonen har brug for i øjeblikket.

Samsungs Super Fast Charging er baseret på USB PD med PPS. Pixel-telefoner understøtter også PPS. En almindelig USB PD-oplader uden PPS kan stadig fungere, men den rammer muligvis ikke den bedste opladningstilstand på disse telefoner.

## Quick Charge, VOOC, SUPERVOOC og HyperCharge

USB PD er det nærmeste, Android kommer et fælles opladningssprog. Det er ikke det eneste sprog.

Qualcomm Quick Charge var i mange år udbredt på Android-telefoner. Nyere versioner af Quick Charge overlapper mere med USB PD, men ældre adaptere og telefoner kan stadig opføre sig anderledes end en ren USB PD-løsning.

OPPO VOOC og OnePlus SUPERVOOC bruger en anden strategi. De sender ofte en høj strømstyrke gennem en kompatibel oplader og et kompatibelt kabel, så der udvikles mindre varme inde i telefonen. Derfor kan systemerne være meget hurtige, men også kræsne. OnePlus oplyser, at hurtigopladning med SUPERVOOC kræver en SUPERVOOC-kompatibel telefon og et kompatibelt datakabel.

Xiaomi HyperCharge har en tilsvarende mærkespecifik funktion på mange modeller. En almindelig USB-C PD-oplader oplader som regel telefonerne, men den annoncerede maksimale effekt kræver ofte den originale oplader og det originale kabel eller tilbehør, der understøtter den samme protokol.

Samsungs navngivning har sin egen lille fælde. Adaptive Fast Charging på ældre Samsung-telefoner er ikke det samme som Super Fast Charging på nyere modeller. Den nyere tilstand bruger USB PD med PPS.

## Kablets mærkning er også en hastighedsgrænse

Kablet er en del af forhandlingen. Hvis du behandler det som en almindelig ledning, bliver mange opladningsproblemer svære at forklare.

Mange USB-C-kabler er beregnet til 3 A. Ved 20 V er det nok til 60 W. Effekter over dette kræver et 5 A-kabel med en e-marker-chip, så opladeren og enheden ved, at kablet kan håndtere strømstyrken sikkert.

USB-IF's certificeringsmærker er blevet lettere at forstå. Certificerede USB-C til USB-C-kabler mærkes med en effekt som 60 W eller 240 W, og hurtigere datakabler kan også have et logo for datahastigheden. Det er langt nemmere end at afkode et langt USB-versionsnavn.

Til telefoner er et godt USB-C-kabel på 60 W som regel nok. Til bærbare computere, tablets og opladere med høj effekt kan et 240 W-kabel være nyttigt. Ved mærkespecifikke opladningssystemer til telefoner kan det korrekte kabel stadig være vigtigere end det trykte watt-tal.

## Hvilken oplader bør du købe?

Til mange Android-telefoner, der bruger USB PD eller PPS, er en USB-C PD PPS-oplader på 25 W til 30 W nok. Den dækker de fleste Pixel-telefoner og mange Samsung-modeller ved deres normale hurtigopladningshastighed.

Hvis du har en Samsung-model, der understøtter opladning ved 45 W, skal du vælge en PPS-oplader, som specifikt understøtter den rigtige 45 W-profil. Har du en telefon fra OnePlus, OPPO eller Xiaomi og vil have den annoncerede maksimalhastighed, skal du bruge en oplader og et kabel, der er beregnet til den pågældende protokol.

Det er fint at købe en oplader med højere effekt, end telefonen understøtter. Det skader ikke telefonen, og det kan være praktisk, hvis den samme adapter også skal oplade en bærbar computer eller tablet. Du skal bare ikke forvente, at en 100 W-oplader oplader en 25 W-telefon fire gange hurtigere.

Det mindst spændende råd er også det bedste: køb den rigtige protokol i stedet for at jagte det største tal.
