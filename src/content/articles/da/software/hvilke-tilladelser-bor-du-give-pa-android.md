---
title: "Hvilke tilladelser bør du give på Android?"
description: "Den enkleste regel for Android-tilladelser er denne: Hvis tilladelsen ikke passer til den funktion, du lige prøvede at bruge, så afvis den."
listSummary: "android, tilladelser og privatliv"
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","tilladelser","privatliv","sikkerhed","guide"]
locale: "da"
draft: false
---
Det giver mening, at en kameraapp beder om adgang til kameraet. Det gør det ikke, hvis en lommelygteapp vil have adgang til dine kontakter. De fleste beslutninger om tilladelser er ikke mere komplicerede end det.

Problemet er tidspunktet. Apps spørger, mens du prøver at få noget gjort, så Tillad bliver den hurtige knap. Sådan hober dårlige tilladelser sig op.

## De tre typer tilladelser

Android-tilladelser kan groft opdeles i tre grupper.

Normale tilladelser indebærer lav risiko og gives som regel automatisk. Internetadgang er det oplagte eksempel. Du får ikke en dialogboks, hver gang en app skal bruge nettet.

Kørselstilladelser, som i Android-dokumentationen ofte kaldes farlige tilladelser, beskytter data eller hardware, der kan afsløre private oplysninger. Lokation, kamera, mikrofon, kontakter, kalender, telefon, SMS, enheder i nærheden og medieadgang hører til her. Det er disse forespørgsler, du ser, mens du bruger en app.

Særlige tilladelser er stærkere og kræver som regel, at du går ind i Indstillinger. Adgang til tilgængelighedsfunktioner og notifikationer, visning oven på andre apps, enhedsadministration, brugsadgang, installation af ukendte apps og fuld filadgang hører til i denne mentale kategori. Vær mere mistænksom over for dem end over for en almindelig forespørgsel om kamera eller lokation.

Android 6 indførte kørselstilladelser. På Android 5.1 og ældre fik apps brede tilladelser under installationen. Hvis en telefon stadig sidder fast dér, er tilladelsesmodellen kun én af mange grunde til at udfase den.

## Lokation

Lokation er nyttig, men apps beder alt for ofte om den.

Kort, vejr, samkørsel, levering, træning og navigation kan have en rimelig grund. En lommeregner, et gallerifilter, en QR-scanner eller en tapetapp har som regel ikke.

Vælg adgang, mens appen bruges, medmindre der findes en reel baggrundsfunktion. Trinvis navigation, registrering af løbeture, familiesikkerhed og sporing af enheder er eksempler, hvor baggrundslokation kan give mening.

Brug omtrentlig lokation til vejr, lokalt indhold, lagerstatus og alt andet, der ikke behøver din præcise GPS-position. Android 17 giver desuden apps mulighed for at vise en systemleveret lokationsknap, som kan give præcis lokationsadgang for den aktuelle session. Det passer bedre til en enkelt handling end permanent præcis adgang.

## Kamera, mikrofon og optagelse

Adgang til kamera eller mikrofon bør være kedeligt indlysende.

Videoopkald kræver begge dele. Beskedapps bruger dem til billeder, talebeskeder og videobeskeder. En bankapp kan have brug for kameraet til dokumentfotografering eller QR-koder.

Hvis der ikke er en synlig funktion, som bruger kameraet eller mikrofonen, skal du afvise anmodningen. Android viser privatlivsindikatorer, når apps bruger en af sensorerne, og Android 12 tilføjede et privatlivsbetjeningspanel med den seneste brug af lokation, kamera og mikrofon.

Tjek det indimellem. Det afslører overraskelser.

## Kontakter

Kontaktadgang er en af de tilladelser, mange giver alt for let.

Beskedapps og sociale apps beder om den for at finde personer, du kender. Det er praktisk, men appen kan uploade eller sammenligne din adressebog med tjenestens servere. Dine kontakter har ikke nødvendigvis sagt ja til det.

Android 17 forbedrer dette med en systembaseret kontaktvælger, så du kan dele bestemte kontakter og de nødvendige kontaktfelter i stedet for hele adressebogen. Brug den mulighed, når den vises. Hvis en app fungerer uden kontaktadgang, afviser jeg som regel og tilføjer personer manuelt.

## SMS og telefon

SMS er høj risiko. Tilladelsen kan afsløre bekræftelseskoder, private samtaler og beskeder til kontogendannelse. Kun din egentlige beskedapp bør have bred SMS-adgang.

Nogle bankapps beder om at læse engangskoder automatisk. Det er praktisk, men manuel indtastning er sikrere. Hvis appen fungerer uden SMS-adgang, så afvis den.

Telefontilladelsen kan afhængigt af appen og Android-versionen afsløre opkaldsstatus, telefonnummer eller andre opkaldsdata. Opkaldsapps, opkaldsfiltrering, telefonsvarer og operatørapps kan have en grund til at spørge. Det har de fleste andre apps ikke.

## Filer, billeder og medier

Lagertilladelser har ændret sig meget mellem Android-versioner.

Ældre Android-versioner havde bred lageradgang. Android 13 delte adgang til delte medier op i separate tilladelser til billeder, videoer og lyd. Android 14 tilføjede adgang til valgte billeder, så du kan give en app adgang til bestemte billeder og videoer i stedet for hele biblioteket.

Vælg den snævreste mulighed. Giv en billededitor adgang til udvalgte billeder, ikke hele mediebiblioteket. Giv en musikapp adgang til lyd, ikke alle filer. Vær især forsigtig med fuld filadgang, for den særlige tilladelse er beregnet til apps som filadministratorer og sikkerhedskopieringsværktøjer.

## Enheder i nærheden og Wi-Fi

Bluetooth- og nærhedstilladelser kan være legitime. Apps til hovedtelefoner, smart home, ure, højttalere og printere har ofte brug for dem.

Android 13 tilføjede også en tilladelse til Wi-Fi-enheder i nærheden for apps, der administrerer Wi-Fi-forbindelser uden at have brug for lokation til opgaven. Det er bedre end at give lokationsadgang, bare fordi en app skal finde en printer eller oprette forbindelse til en lokal enhed.

Men giv stadig ikke nærhedsadgang til apps, der ikke har en funktion til enheder i nærheden.

## Tilgængelighed, overlejringer og administratoradgang

Her ligger farezonen.

Adgang til tilgængelighedsfunktioner kan læse skærmindhold, registrere interaktioner og udføre handlinger på brugerens vegne. Den er nødvendig for ægte tilgængelighedsværktøjer, nogle adgangskodeadministratorer, automatiseringsværktøjer og enkelte hjælpeapps. Den misbruges også af malware.

Visning oven på andre apps lader en app tegne oven på skærmen. Chatbobler og skærmfiltre bruger det. Svindeloverlejringer gør det også.

Enhedsadministratoradgang kan gøre en app sværere at fjerne. Virksomhedsstyring, forældrekontrol og tyverisikring kan have en grund til at bruge den. Et spil har ikke.

Hvis en tilfældig oprydningsapp beder om noget af dette, så afinstaller den.

## Gennemgå de tilladelser, du allerede har givet

Tilladelser er ikke permanente.

På Pixel-lignende Android-telefoner kan du gå til Indstillinger > Sikkerhed og privatliv > Privatliv > Tilladelser. På andre telefoner ligger oversigten ofte under Indstillinger > Apps > Tilladelsesadministrator. Åbn Lokation, Kamera, Mikrofon, Kontakter, SMS, Telefon eller Filer og medier, og fjern adgang fra apps, der ikke behøver den.

Søg også i Indstillinger efter særlig appadgang. Gennemgå tilgængelighed, notifikationsadgang, visning oven på andre apps, enhedsadministratorapps, installation af ukendte apps, brugsadgang og adgang til alle filer.

Android 11 og nyere kan automatisk nulstille tilladelser for apps, du ikke har brugt i nogle måneder. Google Play Protect kan også nulstille tilladelser for sjældent brugte apps på Android 6 til Android 10. Det hjælper, men det erstatter ikke, at du selv gennemgår listen.

## En praktisk tjekliste til tilladelser

Når en forespørgsel vises, så stil tre spørgsmål.

Passer denne tilladelse til den funktion, jeg lige åbnede?

Kan jeg vælge en mere begrænset mulighed, for eksempel adgang mens appen bruges, omtrentlig lokation, valgte billeder eller adgang kun denne gang?

Virker appen stadig, hvis jeg afviser?

Er du i tvivl, så afvis. Appen kan spørge igen, når du bruger en funktion, der faktisk behøver tilladelsen.
