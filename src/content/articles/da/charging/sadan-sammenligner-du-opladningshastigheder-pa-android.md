---
title: "Sådan sammenligner du opladningshastigheder på Android"
description: "Metabeskrivelse: Praktiske metoder til at sammenligne opladningshastigheder på Android ved hjælp af apps, USB-effektmålere, telefonens egne oplysninger og kontrollerede tests."
listSummary: "opladning, batteri og android"
hub: "charging"
sourceNumber: 45
order: 9
tags: ["opladning","batteri","android","guide","hardware"]
locale: "da"
draft: false
---
Du sætter opladeren ved sengen til, og telefonen siger, at den hurtigoplader. Du sætter opladeren på skrivebordet til, og den siger det samme. Den ene får telefonen op på 80 %, før kaffen er klar. Det gør den anden ikke.

Teksten er ikke nok. Du skal sammenligne den effekt, telefonen faktisk tager imod.

## Derfor kan to opladere føles så forskellige

Opladningshastigheden er resultatet af en forhandling mellem tre ting: opladeren, kablet og telefonen. Opladeren oplyser, hvad den kan levere. Kablet kan begrænse strømmen. Telefonen vælger, hvad den vil tage imod, ud fra protokolunderstøttelse, batteriniveau, temperatur og sine egne opladningsregler.

Hvis både telefonen og opladeren understøtter USB Power Delivery ved 9 V/3 A, kan de lande omkring 27 W. Hvis opladeren kun understøtter almindelig USB-udgang ved 5 V/1 A, får den samme telefon 5 W. Selv en avanceret adapter kan ikke tilsidesætte det, telefonen anmoder om.

Kabler betyder mere, end mange forventer. Et almindeligt USB-C-kabel på 3 A er fint til mange telefoner, men det låser ikke alle høje effektniveauer op. Producenternes egne systemer som OnePlus SUPERVOOC, OPPO VOOC og visse Xiaomi HyperCharge-løsninger kræver ofte den tilhørende oplader og det tilhørende kabel. Et almindeligt USB-C-kabel kan stadig oplade telefonen, bare meget langsommere.

Temperaturen er den skjulte variabel. En telefon, der lige har kørt et spil, optaget video eller ligget i solen, kan begrænse opladningen selv med din bedste oplader. Tester du en varm telefon, får du en dårlig sammenligning.

## Den hurtige test med en app

Til en hurtig sammenligning kan du bruge en app som Ampere eller AccuBattery. Sæt oplader A til, vent på, at målingen stabiliserer sig, og noter strøm og spænding. Sæt derefter oplader B til med det samme kabel, og gentag testen.

Hold batteriniveauet i det samme område ved hver test. Mellem 20 % og 50 % er et godt vindue, fordi de fleste telefoner oplader aggressivt dér. Det er ikke rimeligt at teste den ene oplader ved 25 % og den anden ved 78 %. Den anden ser som regel langsommere ud, fordi telefonen allerede er begyndt at reducere effekten.

Appmålinger er nyttige, men ikke perfekte. De måler det, batterisiden rapporterer, ikke den præcise effekt fra stikkontakten. Skærmen, processoren, radioforbindelserne og opladningselektronikken påvirker alle tallet. Derfor er metoden bedst til at opdage tydelige forskelle, ikke til at bevise en præcis wattværdi.

## Testen med en effektmåler

En USB-C-effektmåler giver renere resultater. Sæt måleren mellem opladeren og kablet, og følg spænding, strøm og watt i realtid. Målere med USB PD-afkodning kan også vise den forhandlede profil, som ofte er den manglende forklaring.

Brug ét kabel til alle tests af adaptere. Hvis du vil sammenligne kabler, skal du bruge én adapter og kun skifte kablet. Det lyder omstændeligt, men det er forskellen mellem en test og et gæt.

En måler forklarer også mærkelige resultater. Forestil dig, at en oplader på 45 W kun viser 15 W. Opladeren understøtter måske 45 W, men ikke den spænding eller det PPS-område, telefonen foretrækker. Kablet kan også begrænse forbindelsen, eller telefonen kan være for varm. Måleren løser ikke problemet, men den fortæller dig, hvor du skal lede.

## Oplysninger fra telefonen selv

Nogle Android-telefoner giver nyttige tegn uden at vise en præcis wattværdi.

Samsung-telefoner kan vise statusser som "Charging", "Fast charging", "Super fast charging" og "Super fast charging 2.0", afhængigt af opladeren og modellen. På nyere One UI-versioner ligger batteriindstillingerne under Indstillinger > Batteri, og Samsung Members kan diagnosticere batteristatus samt kablet og trådløs opladning.

Pixel-telefoner viser en estimeret tid til fuld opladning i batteriindstillingerne, når du sætter kablet til. Det er ikke en wattmåler, men en oplader, der viser 1 time og 20 minutter til fuld opladning, opfører sig tydeligt anderledes end en, der viser 3 timer.

Xiaomi- og OnePlus-telefoner viser ofte en mærkespecifik opladningsanimation eller en wattangivelse under hurtigopladning. Animationerne er ikke laboratorieinstrumenter, men de er nyttige, når den ene oplader aktiverer telefonens hurtigste tilstand, og den anden ikke gør.

## En fair sammenligning over 30 minutter

Gør følgende, hvis du vil have en sammenligning, du kan stole på:

1. Aflad telefonen til det samme startniveau hver gang, helst omkring 20 %.
2. Lad telefonen køle af i nogle minutter.
3. Brug det samme kabel.
4. Aktivér flytilstand, eller lad i det mindste telefonen ligge ubrugt.
5. Oplad i 30 minutter, og noter slutprocenten.

Gentag med den næste oplader fra den samme startprocent. Den oplader, der tilfører mest batteri i det samme tidsrum, er hurtigst til netop den telefon.

Kør ikke testen helt til 100 %. Den sidste del er med vilje langsommere og skjuler den reelle forskel mellem opladerne. Området fra 20 % til 80 % er mere nyttigt.

## Kablet sammenlignet med trådløs opladning

Du kan sammenligne kablet og trådløs opladning på samme måde, men bliv ikke overrasket, hvis den trådløse taber. Ældre Qi-opladere og mange kombinationer af telefon og oplader ligger omkring 5-15 W. Qi2 introducerede magnetisk opladning ved 15 W, og Qi2 25W findes nu også, men både telefonen og opladeren skal understøtte standarden.

Kablet USB-C er stadig det mest pålidelige valg, når hastigheden er vigtigst. Trådløs opladning handler om bekvemmelighed, placering og mindre slid på kabler. Det er normalt ikke den hurtigste løsning, især hvis telefonen bliver varm på opladeren.

## Sådan hjælper runcheck

runcheck har funktionen Charger Comparison i Pro. Sæt en oplader til, giv den et navn, og appen registrerer opladningshastigheden under sessionen. Når du har testet nogle opladere og kabler, kan du sammenligne gennemsnitlig mAh pr. time og watt side om side.

Det betyder noget, fordi den bedste oplader ikke altid er den største. En kølig og stabil løsning på 25 W kan være mere nyttig end en oplader, der topper højt i to minutter og derefter bliver begrænset, fordi telefonen bliver varm.

## Et par almindelige faldgruber

Rækkefølgen af testene betyder noget. En telefon ved 25 % oplader som regel hurtigere end den samme telefon ved 75 %.

En oplader på 65 W tvinger ikke en telefon på 25 W til at tage imod 65 W. Telefonen vælger.

Hvis to opladere præsterer næsten ens, så brug den, der holder sig køligst. Varme er fjenden, selv når opladningstiden ser identisk ud.
