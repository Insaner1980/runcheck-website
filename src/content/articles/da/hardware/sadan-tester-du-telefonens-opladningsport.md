---
title: "Sådan tester du telefonens opladningsport"
description: "Lær at teste opladningsporten på en Android-telefon med kontrol af kabel, sikker rengøring, måling af ladestrøm og indbygget diagnostik."
listSummary: "opladning, batteri og android"
hub: "hardware"
sourceNumber: 108
order: 5
tags: ["opladning","batteri","android","guide","hardware"]
locale: "da"
draft: false
---
---

Du holder kablet i en mærkelig vinkel, opladningsikonet bliver ved med at blinke, og telefonen oplader kun, når den ligger helt stille. Det føles som en ødelagt opladningsport, men begynd ikke dér.

Start med de kedelige kontroller. De finder flere problemer, end de fleste regner med.

## Udeluk først kabel og oplader

Prøv et andet USB-C- eller Micro-USB-kabel med den samme oplader. Prøv derefter en anden oplader med det oprindelige kabel. Test om muligt begge dele med en anden telefon eller tablet.

Et kabel kan gå i stykker indvendigt, længe før det ser beskadiget ud. En enkelt data- eller strømben kan svigte og få en hurtigoplader til kun at levere en langsom opladning. Kablet kan stadig se helt normalt ud udenpå, hvilket er irriterende, men almindeligt.

Hvis det samme kabel og den samme oplader fungerer korrekt med en anden enhed, bliver telefonens port mere mistænkelig. Hvis et andet kabel pludselig løser alt, var porten sandsynligvis ikke problemet.

## Undersøg porten

Sluk telefonen, og lys direkte ind i opladningsporten med en lommelygte. Se efter fnuller, der er presset sammen mod portens bagvæg. Lommefnuller samler sig langsomt, bliver komprimeret af stikket og forhindrer til sidst forbindelsen i at gå helt i bund.

Tjek også, hvordan stikket sidder. Et USB-C-stik skal sidde fast i en port, der er i orden. Det bør ikke falde ud, bevæge sig meget eller afbryde forbindelsen, når du flytter telefonen lidt. En smule spillerum er normalt, især på ældre telefoner. En forbindelse, der hele tiden kobler til og fra, er ikke normal.

Se efter grønne, hvide eller mørke rester på kontaktfladerne. Det kan tyde på korrosion eller fugt. Rengøring kan fjerne støv og fnuller. Den reparerer ikke en korroderet kontakt.

## Rengør forsigtigt

Hvis du kan se støv eller fnuller, skal du holde porten nedad og prøve nogle få korte pust fra en håndholdt luftblæser eller en dåse med trykluft. Blæs ikke hårdt ind i porten på helt tæt hold. Målet er at løsne snavset, ikke presse det længere ind.

Til sammenpresset fnuller kan du bruge en tør, blød elektronikbørste eller en ren, tør tandbørste. Undgå metalredskaber. En metalnål kan bøje en kontakt eller skabe en kortslutning. Jeg ville heller ikke bruge en trætandstik, medmindre du ikke har en bedre mulighed, fordi den kan splintre og efterlade et nyt problem i porten.

Hæld ikke alkohol eller kontaktrens ind i telefonen. Selvom en tekniker kan bruge væsker under kontrollerede forhold på et værksted, gør det dem ikke til en sikker hjemmeløsning.

Sæt opladeren i igen efter rengøringen. Hvis stikket nu går tydeligere og mere fast på plads, var fnuller sandsynligvis hovedproblemet.

## Kontroller ladestrømmen

Android stiller batteriets strømdata til rådighed via `BatteryManager` på enheder, der understøtter målingen. Apps som Ampere kan vise disse værdier, men brug dem som sammenligningsværktøj, ikke som et laboratorieinstrument.

Åbn Ampere uden tilsluttet oplader, og noter afladningsværdien. Tilslut opladeren, vent cirka 10 sekunder, og se tallet falde til ro. Batteriniveau, varme, skærmens lysstyrke og telefonens egne opladningsregler påvirker alle målingen.

En oplader på 2 A viser ikke nødvendigvis 2000 mA på skærmen. Hvis batteriet næsten er fuldt, sænker telefonen med vilje opladningshastigheden. Men hvis en kendt, fungerende vægoplader og et kendt, fungerende kabel kun giver omkring 200 eller 300 mA, og tallet hopper, hver gang du rører ved stikket, har porten ikke stabil kontakt.

Samsung-ejere har en anden mulighed. Åbn Samsung Members, gå til Support > Telefondiagnosticering, og vælg testen for kabelopladning eller USB-forbindelse, hvis den findes på din model. Ældre versioner af Samsung Members kan bruge Få hjælp og Vis tests i stedet.

Samsungs kode `*#0*#` kan også åbne en hardwaretestmenu på mange Galaxy-telefoner. Brug Samsungs egen Telefon-app, ikke en tredjepartsopkaldsapp. På nyere One UI-versioner, operatørmodeller eller telefoner med sikkerhedsbegrænsninger kan koden være uden virkning. Det er normalt nu.

Android 17 tilføjede ikke en universel test af opladningsporten til alle Android-telefoner. Pixel-, Samsung- og Xiaomi-telefoner bruger stadig forskellige diagnostikmetoder.

## Prøv sikker tilstand

Hvis porten er ren, kablet sidder ordentligt, og opladningen stadig opfører sig mærkeligt, skal du starte telefonen i sikker tilstand. Sikker tilstand deaktiverer tredjepartsapps og er derfor en hurtig måde at opdage software, der forstyrrer opladningen.

På mange Android-telefoner holder du tænd/sluk-knappen inde og derefter fingeren på Sluk, indtil muligheden for sikker tilstand vises. På mange Samsung-telefoner genstarter du telefonen og holder Lydstyrke ned inde under opstarten.

Hvis opladningen fungerer normalt i sikker tilstand, skal du se på nyligt installerede batteri-, automatiserings- og sikkerhedsapps eller apps med opladningsanimationer. En af dem kan forstyrre opladningsadfærden eller notifikationerne.

## Hvornår porten skal repareres

Porten er sandsynligvis beskadiget, når alt dette er opfyldt: Opladeren og kablet fungerer med andre enheder, porten er ren, stikket sidder stadig løst, og strømværdierne er fortsat lave eller ustabile.

Hvor svær reparationen er, afhænger af telefonen. Mange Samsung Galaxy-, Xiaomi- og Motorola-telefoner samt billigere Android-modeller har USB-porten på et separat datterkort. Det er som regel en rutinemæssig reparation. På andre telefoner er porten loddet fast på hovedprintkortet. Det kræver mere erfaring og koster mere, fordi teknikeren skal udføre arbejde på printkortniveau.

Trådløs opladning kan give dig ekstra tid, hvis telefonen understøtter det. Den går helt uden om USB-porten, men er som regel langsommere og mindre praktisk end opladning med kabel.

Hvis opladningen gradvist er blevet dårligere over flere uger, skal du ikke vente, til porten holder helt op med at virke. runcheck registrerer opladningsadfærd, strømforbrug og udviklingen i strømleveringen over tid, så en port på vej til at svigte er lettere at opdage, før du står med et tomt batteri.
