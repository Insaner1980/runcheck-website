---
title: "Hvad sker der, når telefonens lagerplads er fuld"
description: "Metabeskrivelse: En fuld Android-telefon kan svigte på helt almindelige måder: kamerafejl, appnedbrud, opdateringer, der går i stå, og langsom lagring af filer. Her kan du se, hvad der bryder sammen først, og hvor meget ledig plads du bør beholde."
listSummary: "ydeevne, hastighed og android"
hub: "storage"
sourceNumber: 81
order: 3
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
---

Når Android-lagerpladsen er fuld, svigter telefonen ikke på en pæn og tydelig måde. Først begynder den bare at opføre sig mærkeligt.

Kameraet tøver. Apps fryser, mens de gemmer kladder. Opdateringer nægter at blive installeret. Tastaturet halter i en chatapp, der fungerede fint i går. Så viser Android en advarsel om fuld lagerplads, som om det alene forklarer, hvorfor alt pludselig føles ødelagt.

Det gør det. For det meste.

## Hvad bryder sammen først

Kameraet er som regel noget af det første, du lægger mærke til. Et billede bliver ikke gemt som en lille, færdig fil i samme øjeblik, du trykker på udløseren. Kameraappen kan have brug for plads til billedbehandling, midlertidige filer, miniaturebilleder, redigeringer, seriebilleder eller videobuffere. Uden ledigt arbejdsrum kan den fryse, undlade at gemme eller stoppe en optagelse.

Derefter kommer apps. Hver app skriver små filer, mens den kører: cache, logfiler, databaser, kladder, sessionsstatus, miniaturebilleder, downloadet indhold og SQLite-journalfiler. Når skrivningen mislykkes, kan appen gå ned eller stille og roligt miste det, du var i gang med.

Systemopdateringer kræver også plads. En månedlig rettelse er mindre end en fuld Android-opgradering, men begge kræver plads til både download og installation. Hvis telefonen ikke kan installere opdateringer, går du glip af sikkerhedsrettelser og fejlrettelser. Det er en dårlig byttehandel bare for at beholde gamle downloads og dublerede videoer.

## Hvorfor telefonen bliver langsom, før der er nul byte ledigt

Du behøver ikke ramme 0 GB ledig plads, før telefonen bliver langsom. Risikozonen begynder som regel, når den ledige plads kommer under 10-15 %, og under 5 % bliver det ofte rigtig slemt.

Flashlager har brug for ledige blokke til oprydning, slitageudjævning og garbage collection. Når pladsen er knap, skal controlleren udføre mere arbejde, før den kan skrive nye data. Det gør almindelige skrivninger langsommere. At gemme et billede, installere en app, opdatere en database eller downloade en vedhæftet fil kan få telefonen til at holde en pause længe nok til, at du bemærker det.

Bland ikke dette sammen med zRAM. De fleste Android-telefoner bruger zRAM som komprimeret hukommelse inde i RAM, ikke som en almindelig swapfil på den interne lagerplads. Fuld lagerplads betyder ikke direkte, at "Android ikke længere kan bruge swap". Problemet er, at apps og systemet stadig har brug for lagerplads til rigtige filer, mens de kører.

Android 17 har indført strengere hukommelsesgrænser for apps, men det fjerner ikke behovet for ledig lagerplads. Hukommelsespres og lagerpres er to forskellige problemer. De føles bare ens, når du stirrer på en frossen skærm.

## Hvad fylder lagerpladsen uden at spørge

Beskedapps er den sædvanlige synder. WhatsApp, Telegram, Discord og lignende apps kan downloade billeder, videoer, talebeskeder, klistermærker, GIF-filer og dokumenter fra alle de aktive grupper, du deltager i. Et par måneders gruppemedier kan fylde mere end din kameramappe.

Mappen Downloads er en anden kirkegård. PDF-filer, APK-installationsfiler, ZIP-filer, formularer, skærmbilleder, fakturaer og filer, du åbnede én gang fra en mail, bliver liggende, indtil du selv fjerner dem.

Offlineindhold vokser også stille og roligt. Spotify-playlister, Netflix-afsnit, YouTube-downloads, podcastafsnit, lydbøger og offlineområder i Google Maps ligger alle i appens lagerplads. Du kan måske ikke se filerne i filhåndteringen, men de vises under **Indstillinger > Apps > [appnavn] > Lagerplads**.

Papirkurven kan også snyde dig. Understøttelse af papirkurv via MediaStore kom med Android 11, og apps som Files by Google kan beholde slettede elementer i papirkurven i omkring 30 dage, medmindre du tømmer den. Google Photos har sine egne regler for papirkurven. Samsung Gallery og Samsung My Files har deres egne papirkurve. Hvis du har slettet en bunke videoer, men tallet for brugt lagerplads næsten ikke har flyttet sig, så tjek papirkurven.

## Hvor meget ledig plads du bør beholde

Sigt efter 15-20 % ledig plads. På en enhed med 64 GB svarer det til omkring 10 GB. Med 128 GB er det en god idé at beholde cirka 20 GB ledigt, hvis du kan.

Den buffer giver Android plads til appopdateringer, kameraarbejde, cache, databaseskrivninger, downloads og vedligeholdelse af lageret. Du behøver ikke holde øje med det hver dag. Men du bør holde op med at betragte 2 GB ledigt som "nok".

Hvis telefonen har 32 GB eller 64 GB lagerplads, kan det være umuligt at bevare en fornuftig mængde ledig plads med moderne apps, billeder og medier fra beskedapps. Det er ikke din skyld. Telefoner med meget lidt lagerplads er ældet dårligt.

runcheck følger lagerforbruget som en del af enhedens tilstandsoverblik og advarer om lav ledig plads, før telefonen når krisetilstand. Den detaljerede lagerskærm hjælper også med at skelne mellem billeder, videoer, lyd, dokumenter, downloads og andre kategorier, så oprydningen begynder med fakta i stedet for tilfældig sletning.

## Ofte stillede spørgsmål

### Kan fuld lagerplads beskadige telefonen permanent?

Som regel ikke. Det kan gøre udjævningen af slitage vanskeligere for lagercontrolleren, men du ødelægger næppe NAND-chippen, bare fordi telefonen har været fuld nogle få gange. Den større risiko er praktisk: manglende opdateringer, billeder der ikke bliver gemt, beskadigede appdata og en telefon, der bliver elendig at bruge.

### Løser en nulstilling til fabriksindstillinger problemet med fuld lagerplads?

Den frigør plads, men det er det mest hårdhændede værktøj. Hvis WhatsApp-medier, offlinevideoer og kamerafiler fyldte telefonen én gang, gør de det igen. Ryd op ved kilderne først.

### Hvorfor går tallene ikke op?

Android, systempartitioner, forudinstallerede apps, appdata, miniaturebilleder, papirkurve og kategoribetegnelser passer ikke altid pænt sammen. Den annoncerede kapacitet er heller ikke det samme som den brugbare kapacitet. Tallet på æsken svarer aldrig til den plads, du faktisk har til dine egne filer.

### Løser et SD-kort problemet?

Det hjælper til billeder, videoer, musik og dokumenter, hvis telefonen stadig har en kortplads. Til apps er det mindre nyttigt. Mange apps kan ikke flyttes til SD-kort, og selv når de kan, er et microSD-kort langt langsommere end intern UFS-lagerplads. Brug kortet til medier, ikke som en redningsplanke for en telefon, der burde have haft mere intern lagerplads fra begyndelsen.
