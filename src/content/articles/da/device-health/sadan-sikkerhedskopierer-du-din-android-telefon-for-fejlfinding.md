---
title: "Sådan sikkerhedskopierer du din Android-telefon før fejlfinding"
description: "Sikkerhedskopiér telefonen, før du rydder appdata, nulstiller appindstillinger, bruger recovery mode eller nulstiller til fabriksindstillinger. Nogle løsninger er ufarlige. Andre er kun ufarlige, indtil en lokal fil, en chathistorik eller en 2FA-kode forsvinder."
listSummary: "ydeevne, hastighed og android"
hub: "device-health"
sourceNumber: 9
order: 5
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
En god sikkerhedskopi behøver ikke være avanceret. Du skal bare vide, hvad Android allerede gemmer, hvad systemet springer over, og hvilke apps der kræver deres egen sikkerhedskopi, før du gør noget destruktivt.

## Det sikkerhedskopierer Google automatisk

Når din Android-telefon er logget ind på Google, er visse data allerede synkroniseret uden for enheden. Kontakter gemt i Google Kontakter, begivenheder i Google Kalender, Gmail og mange indstillinger i Google-apps kommer tilbage efter en nulstilling til fabriksindstillinger, når du logger ind igen. Google Fotos gemmer også billeder og videoer, når sikkerhedskopiering er slået til i Fotos-appen.

Androids indbyggede Google-sikkerhedskopi dækker mere, end mange forventer, men mindre, end de går ud fra. Den kan sikkerhedskopiere apps og visse appdata, opkaldshistorik, kontakter, enhedsindstillinger samt SMS- og MMS-beskeder. Hvis du bruger Google Beskeder, kan RCS-beskeder også komme med. Med Telefon fra Google kan opkaldsindstillinger og blokerede numre desuden være omfattet.

Appdata er den rodede del. Android giver apps mulighed for at bruge sikkerhedskopieringssystemet, men udviklerne kan begrænse, hvad der gemmes, eller helt fravælge funktionen. Bankapps, apps til totrinsbekræftelse og visse spil bliver ofte ikke gendannet på den måde, du forventer. Det er ikke en fejl i sikkerhedskopien. Sådan fungerer Androids regler for appdata.

Filer er en større fælde. Du bør ikke uden videre stole på, at Androids enhedssikkerhedskopi omfatter downloads, PDF-filer, optagelser, dokumenter, musik eller filer i tilfældige appmapper. Google føjede i februar 2026 en funktion til lokal filsikkerhedskopiering til Google Play-tjenester v26.06. På understøttede telefoner kan den gemme downloadede dokumenter på Google Drev. Se det som ekstra beskyttelse af downloadede dokumenter, ikke som en komplet sikkerhedskopi af den interne lagerplads.

## Android 17 ændrede tidsplanen, ikke tjeklisten

Android 17 begyndte at blive udrullet 16. juni 2026, først til de fleste understøttede Pixel-telefoner. Andre kvalificerede Android-telefoner følger senere i 2026, afhængigt af producent og operatør.

Det betyder, at to telefoner ved siden af hinanden i en periode kan vise forskellige Android-versioner. En Pixel kan allerede køre Android 17, mens en Samsung-, OnePlus-, Motorola- eller Xiaomi-enhed stadig venter. Tjeklisten til sikkerhedskopiering er den samme, men stien og ordlyden i Indstillinger kan have flyttet sig lidt.

På mange telefoner kan du begynde under Indstillinger > Google-tjenester > Alle tjenester > Sikkerhedskopiér. På Pixel kan du også se Indstillinger > Google > Sikkerhedskopiér. På Samsung Galaxy starter du normalt med Indstillinger > Konti og sikkerhedskopiering > Sikkerhedskopier data.

## Kontrollér sikkerhedskopien før fejlfinding

Åbn sikkerhedskopieringen, og kontrollér to ting: om den er slået til, og hvornår den seneste vellykkede sikkerhedskopi blev oprettet. Hvis tidspunktet er gammelt, skal du trykke på Sikkerhedskopiér nu og lade processen blive færdig, før du fortsætter.

Skynd dig ikke gennem dette trin. Googles egen sikkerhedskopiering og gendannelse kan tage op til 24 timer at blive helt færdig, selv om mindre kopier ofte bliver klar langt hurtigere. Hvis du står foran en nulstilling til fabriksindstillinger, skal du vente, til siden viser en nylig vellykket sikkerhedskopi, i stedet for at antage, at den blev gennemført i baggrunden.

Hvis telefonen bliver stående på "Venter på sikkerhedskopiering", skal du først kontrollere det grundlæggende. Opret forbindelse til Wi-Fi, sæt telefonen til opladning, opdatér Google Play-tjenester og Google One-appen, hvis du bliver bedt om det, og kontrollér, at din Google-lagerplads ikke er fuld. Den gratis lagerpulje på Google-kontoen deles mellem Gmail, Drev og Fotos, så den bliver hurtigere fyldt, end mange regner med.

## Kopiér lokale filer selv

Ved lokale filer er en manuel kopi stadig det sikreste ekstra lag.

Slut telefonen til en computer med et USB-C-kabel. Når USB-notifikationen vises, skal du trykke på den og vælge Filoverførsel. Telefonens interne lagerplads bør derefter blive vist på computeren.

Kopiér disse mapper, hvis de findes:

- DCIM, til billeder og videoer fra kameraet.
- Download, til PDF-filer, billetter, installationsfiler, formularer og andet gemt fra browseren.
- Documents, til filer fra produktivitetsapps.
- Music og Recordings, hvis du gemmer lyd lokalt på telefonen.
- Pictures og Movies, især hvis du bruger apps, der gemmer medier uden for DCIM.
- WhatsApp-medieområder, hvis de findes. På nyere Android-versioner kan de ligge under Android/media/com.whatsapp/WhatsApp/Media i stedet for direkte i den interne lagerplads.

Selv når sikkerhedskopiering i Google Fotos er slået til, bør du beholde en lokal kopi af DCIM før en fabriksnulstilling. Jeg bryder mig ikke om at overlade uerstattelige billeder til én kontakt i en cloudtjeneste. En forkert konto, en fuld lagerkvote eller en mappe, der aldrig blev valgt til sikkerhedskopiering, er nok til at ødelægge dagen.

Samsung-brugere har en anden fornuftig mulighed: Samsung Smart Switch. Installér Smart Switch på en Windows-pc eller Mac, slut Galaxy-telefonen til med USB, vælg Sikkerhedskopiering, og gennemgå kategorierne før start. Smart Switch kan kopiere kategorier som opkald, kontakter, beskeder og apps, men Samsung gør stadig opmærksom på, at ikke alle filtyper eller elementer understøttes. Brug det som et bredt sikkerhedsnet, ikke som den eneste kopi af dine vigtigste filer.

## Sikkerhedskopiér beskedapps separat

Beskedapps er deres egen verden. Gå ikke ud fra, at Android håndterer dem alle.

WhatsApp bruger sin egen sikkerhedskopiering. Åbn WhatsApp > Indstillinger > Chats > Sikkerhedskopiering af chats, og kontrollér Google-konto, hyppighed og tidspunktet for den seneste kopi. Når du skifter til en ny Android-telefon eller gendanner efter en nulstilling, kommer WhatsApp-chats kun tilbage, hvis sikkerhedskopiering var slået til før nulstillingen.

Telegram-chats i cloudtjenesten ligger på serveren og kommer tilbage, når du logger ind. Telegram Secret Chats er anderledes. De er knyttet til den enkelte enhed, er ikke en del af Telegrams cloudtjeneste og flytter ikke til en anden telefon.

Signal har nu mere end én mulighed. Signal Secure Backups er valgfri, ende-til-ende-krypterede sikkerhedskopier, der bruger en gendannelsesnøgle. Signal understøtter også lokale Android-sikkerhedskopier, som er krypterede mapper gemt på selve enheden. Ved den lokale løsning skal du kopiere hele Signal-mappen med sikkerhedskopien til et sikkert sted og gemme gendannelsesnøglen. Uden begge dele kan kopien ikke bruges.

## Beskyt authenticator- og 2FA-apps

Det er det trin, mange springer over. Det er også det trin, der kan låse dig ude af de konti, du er mest afhængig af.

Google Authenticator kan synkronisere koder med den Google-konto, der er aktiv i appen. Åbn Google Authenticator, og kontrollér kontoikonet øverst. Hvis Authenticator bruges uden en Google-profil, der er logget ind, skal du flytte koderne manuelt før nulstillingen. Åbn menuen, vælg Overfør konti, derefter Eksportér konti, og scan QR-koderne med en anden enhed.

Microsoft Authenticator understøtter sikkerhedskopiering i cloudtjenesten, men Android-kopier kan kun gendannes til Android, og iOS-kopier kun til iOS. Åbn Indstillinger i appen, slå Cloud Backup til, og bekræft den personlige Microsoft-konto, der skal bruges ved gendannelse. Arbejds- og skolekonti kan stadig kræve nyt login efter gendannelsen.

Authy understøtter krypteret sikkerhedskopiering i cloudtjenesten og synkronisering mellem mobile enheder. Kontrollér, at sikkerhedskopiering er aktiv, og at du kender adgangskoden til kopierne. Authy oplyser, at tjenesten ikke kan gendanne den adgangskode for dig.

Gem også gendannelseskoderne til alle tjenester, der er beskyttet med 2FA. Læg dem i en adgangskodeadministrator, eller skriv dem ud og opbevar dem privat. Skærmbilleder er bedre end ingenting, men de lægger samtidig materiale til kontogendannelse i dit fotobibliotek, og det er måske ikke det sted, du ønsker det.

## Hvad kræver en komplet sikkerhedskopi?

Når du rydder en apps cache, fjernes midlertidige filer. Det bør ikke slette din konto, dokumenter, billeder eller gemte appdata. Til netop den handling er en fuld sikkerhedskopi normalt ikke nødvendig.

Rydning af appdata er noget andet. Appen nulstilles, som om du lige havde installeret den. Lokale noter, downloads, aktive login, offlinekort, spilfremskridt og appspecifikke indstillinger kan forsvinde. Sikkerhedskopiér appen først.

Fejlsikret tilstand deaktiverer tredjepartsapps, mens Android kører i denne tilstand. Apps bliver ikke slettet. Genstart normalt, og de bør komme tilbage. En sikkerhedskopi er valgfri her, medmindre du bruger Fejlsikret tilstand som en del af en større oprydning.

Rydning af cachepartitionen på telefoner, der stadig tilbyder funktionen, fjerner midlertidige systemfiler fra recovery mode. Personlige data bør blive liggende, men du arbejder allerede i en systemmenu på lavt niveau. Sikkerhedskopiér først, hvis enheden er stabil nok til det.

En nulstilling til fabriksindstillinger sletter telefonen. Ingen undtagelser. På Samsung Galaxy er stien normalt Indstillinger > Generel administration > Nulstil > Nulstilling til fabriksindstillinger. På Pixel og mange telefoner med standard-Android bruges Indstillinger > System > Muligheder for nulstilling > Slet alle data (nulstilling til fabriksindstillinger). Begynd ikke, før Google-sikkerhedskopi, sikkerhedskopiering af billeder, lokal filkopi, kopier af beskedapps og 2FA-kopier alle er kontrolleret.

## Kontrollér FRP før nulstillingen

Factory Reset Protection (FRP) er Androids tyverisikring. Efter en nulstilling kan Android kræve telefonens skærmlås eller login til en af de Google-konti, der allerede var synkroniseret på enheden. Hvis du ikke kan oplyse det, kan du sidde fast i opsætningen, indtil ejerskabet er bekræftet.

Før fejlfindingen når frem til en fabriksnulstilling, skal du bekræfte mailadressen til Google-kontoen på telefonen og afprøve adgangskoden i en browser eller på en anden enhed. Kontrollér også telefonens pinkode, mønster eller adgangskode.

Fjern ikke din Google-konto alene for at undgå FRP, hvis du nulstiller din egen telefon som led i fejlfinding. Når kontoen fjernes, kan du samtidig miste adgangen til den sikkerhedskopi, du havde tænkt dig at gendanne. Det er en anden opgave, når telefonen skal sælges eller gives væk. Ved fejlfinding er målet enkelt: bekræft loginoplysningerne, gør sikkerhedskopien færdig, og nulstil først, når løsninger med mindre risiko ikke virker.
