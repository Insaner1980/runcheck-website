---
title: "Sådan tjekker du Androids sikkerhedsopdateringer"
description: "Du er ved at købe en brugt telefon, eller din egen telefon har ikke vist en opdateringsnotifikation i flere måneder. Det første, du bør kontrollere, er ikke Android-versionen. Det er datoen for sikkerhedsopdateringen."
listSummary: "android, opdateringer og sikkerhed"
hub: "software"
sourceNumber: 122
order: 4
tags: ["android","opdateringer","sikkerhed","software","guide"]
locale: "da"
draft: false
---
På de fleste Android-telefoner skal du åbne Om telefonen i Indstillinger og finde Sikkerhedsopdatering til Android. Datoen ser for eksempel sådan ud: 2026-06-05.

## Hvor finder du datoen?

På Pixel-telefoner står den på siden Android-version. Her vises platformversionen, Sikkerhedsopdatering til Android, datoen for Systemopdatering til Google Play og Buildnummer samlet.

Samsung placerer datoen under Om telefonen > Softwareinformation, hvor du kan finde sikkerhedsrettelsesniveauet for Android.

På telefoner fra Xiaomi, Redmi og POCO skal du begynde på den primære side med enhedsoplysninger. Nogle softwareversioner viser datoen direkte. På andre ligger den bag oplysningerne om Android-versionen eller Xiaomi HyperOS.

OnePlus har som regel de samme oplysninger under Om enheden og derefter på siden med softwareoplysninger.

Producenter flytter rundt på menuerne. Hvis du ikke kan finde feltet, kan du bruge søgefunktionen i Indstillinger og søge efter sikkerhedsopdatering.

## Hvad betyder datoen?

Google udgiver Android Security Bulletins hver måned. Datoen på telefonen fortæller, hvilket sæt sikkerhedsrettelser producenten oplyser, at enheden indeholder.

De fleste bulletiner bruger to niveauer. En dato, der slutter på den 1. i måneden, for eksempel 2026-06-01, dækker de centrale Android-fejl i den pågældende bulletin. En dato, der slutter på den 5., omfatter rettelserne fra det første niveau plus de rettelser til leverandørkode, kernel og hardwarekomponenter, der er angivet for måneden.

Bulletinen fra juni 2026 siger, at enheder med sikkerhedsrettelsesniveauet 2026-06-05 eller nyere indeholder alle rettelser fra den bulletin. En telefon, der kun viser datoen fra den 1., har de centrale rettelser, men mangler muligvis hele leverandørsættet.

Android 17 blev lanceret med særskilte sikkerhedsudgivelsesnoter. Android 17-enheder med sikkerhedsrettelsesniveauet 2026-07-01 eller nyere håndterer de fejl, der står i disse noter. Det kan virke forvirrende lige efter en ny Android-udgivelse, fordi udrulningen af operativsystemet og tidsplanen for de månedlige bulletiner ikke altid følges helt ad.

## Tjek, om en opdatering er tilgængelig

At finde den nuværende dato er første trin. Det næste er at kontrollere, om en nyere opdatering venter.

På de fleste telefoner skal du åbne Indstillinger > System > Softwareopdateringer og følge vejledningen for at søge efter en opdatering.

Samsung-brugere skal vælge Indstillinger > Softwareopdatering > Download og installer.

På Pixel kan du åbne Indstillinger > System > Softwareopdatering. Pixel-telefoner giver normalt besked, når en opdatering er klar, men det kan stadig være nyttigt at kontrollere manuelt.

På Xiaomi-, Redmi- og POCO-telefoner skal du åbne siden Xiaomi HyperOS eller Systemopdatering fra enhedsoplysningerne. Det præcise navn afhænger af model og softwaregren.

Brug Wi-Fi, og oplad telefonen først. Google anbefaler mindst 75 % batteri før opdateringen. Det er kedeligt råd, men det giver god mening.

## Tjek også Project Mainline

Android har et andet opdateringsspor, der hedder Project Mainline. I Indstillinger vises det normalt som datoen for Systemopdatering til Google Play. Det opdaterer visse systemmoduler via Google Play i stedet for at vente på en komplet firmwareudgivelse fra producenten.

På mange telefoner finder du datoen under Indstillinger > Om telefonen > Android-version > Systemopdatering til Google Play. På andre modeller kan den ligge under sikkerheds- eller opdateringsindstillingerne.

Denne dato er adskilt fra datoen for Androids primære sikkerhedsopdatering. Det er bedst, at begge er nogenlunde aktuelle.

Mainline-opdateringer er nyttige, især på Android 10 og nyere, men de erstatter ikke producentens sikkerhedsrettelser. De kan ikke løse alle sårbarheder i kernel, drivere, modem eller leverandørspecifikke komponenter.

## Hvor ny bør sikkerhedsopdateringen være?

En telefon, der er opdateret inden for de seneste to måneder, er i god stand. Tre eller fire måneder bagefter er ikke ideelt, men almindeligt på langsommere opdateringsplaner. Seks måneder bagefter bør få din opmærksomhed, især hvis telefonen bruges til bank, arbejde, rejser eller totrinsbekræftelse.

Et helt år er noget andet. Det betyder, at telefonen har manglet mange offentlige bulletiner, og nogle af dem kan indeholde kritiske eller aktivt udnyttede sårbarheder. Spørgsmålet er ikke, om telefonen stadig kan tænde. Det kan den. Spørgsmålet er, om den stadig bør indeholde følsomme data.

Pixel-telefoner får som regel rettelserne først. Samsungs topmodeller på en månedlig plan følger ofte hurtigt efter, men tidspunktet varierer efter område og mobilselskab. Andre producenter spænder fra månedlige og kvartalsvise planer til uregelmæssige opdateringer, især på budgetmodeller.

## Hvis der ikke findes en opdatering

Enheden kan være udgået af support. Tjek producentens officielle supportside eller liste over sikkerhedsopdateringer for den præcise model.

Mobilselskabet kan forsinke udgivelsen. Telefoner købt gennem et mobilselskab får nogle gange opdateringer senere end ulåste modeller, fordi selskabet tester og godkender firmwaren.

Udrulningen er måske endnu ikke nået til dit område. Android-opdateringer udsendes ofte gradvist, så ét land kan få en rettelse flere dage eller uger før et andet.

Telefonen kan også allerede have modtaget sin sidste rettelse. Det er almindeligt for ældre budgetenheder.

## Almindelige spørgsmål

### Er sikkerhedsrettelser det samme som Android-versionsopdateringer?

Nej. En sikkerhedsrettelse lukker sårbarheder. En større Android-versionsopdatering, for eksempel fra Android 16 til Android 17, ændrer platformen, API'er, funktioner og ofte producentens brugerflade. Store opdateringer indeholder normalt også sikkerhedsrettelser, men de er ikke det samme.

### Kan jeg installere sikkerhedsrettelser manuelt?

Kun i begrænsede tilfælde. Pixel-ejere kan sideloade officielle OTA-filer med ADB. Samsung-brugere kan flashe officiel firmware med Odin. Begge metoder kræver den præcise softwareversion til enheden og indebærer en risiko, hvis de bruges uforsigtigt.

For de fleste er telefonens normale opdateringsside den rigtige løsning.

### Min sikkerhedsopdatering er over et år gammel. Er telefonen usikker?

Det er ikke sikkert, at den er kompromitteret, men risikoen er ikke længere lille. Hvis den indeholder bankapps, arbejdskonti, private filer eller din primære Google-konto, bør du udskifte den eller flytte kontiene til en understøttet enhed. Hvis den kun er en ekstra medieenhed uden følsomme loginoplysninger, er risikoen lavere, men du bør ikke sideloade tilfældige apps på den.

### Får alle telefoner sikkerhedsrettelser samtidig?

Nej. Google udgiver Android-bulletinen, men hver producent og hvert mobilselskab bestemmer, hvornår opdateringer når frem til den enkelte model. Pixel får Android-platformudgivelser først, mens Samsung og andre OEM-producenter følger deres egne planer. Billigere telefoner får ofte færre opdateringer.
