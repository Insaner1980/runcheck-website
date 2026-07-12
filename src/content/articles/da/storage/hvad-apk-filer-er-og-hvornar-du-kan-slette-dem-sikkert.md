---
title: "Hvad APK-filer er, og hvornår du kan slette dem sikkert"
description: "Har du fundet en fil, der ender på .apk, i Downloads uden at kunne huske, hvad den er? Som regel er det bare en installationsfil til en Android-app, der blev liggende, efter at appen blev installeret eller delt."
listSummary: "Har du fundet en fil, der ender på .apk, i Downloads uden at kunne huske, hvad den er?"
hub: "storage"
sourceNumber: 84
order: 6
tags: ["lagerplads","android","oprydning","optimering","guide"]
locale: "da"
draft: false
---
APK står for Android Package Kit. Det er et af de pakkeformater, Android bruger til at installere apps. Det vigtige ved oprydning er dette: Den APK-fil, du kan se i Downloads, er ikke den app, der kører på telefonen. Den er installationsfilen.

Når appen først er installeret, afinstallerer du ikke appen og sletter ikke dens indstillinger ved at fjerne den efterladte APK-fil.

## Hvor APK-filer kommer fra

De fleste synlige APK-filer kommer fra sideloading, altså installation uden om Google Play. Du har downloadet en app fra en udviklers website, APKMirror, F-Droid, en intern virksomhedsportal eller en anden kilde uden for Google Play. Efter installationen bliver filen ofte liggende i Downloads.

Beskedapps er en anden almindelig kilde. Nogen sender en APK via WhatsApp, Telegram, mail eller en arbejdschat. Du trykker måske på den én gang, eller installerer den slet ikke, og så bliver den liggende og bruger plads.

Udviklere og virksomhedsbrugere ser oftere APK-filer, fordi testversioner, private apps og interne opdateringer stadig deles som enkeltstående filer. Det er normalt i udviklingsarbejde. Det er mindre normalt, at en tilfældig APK med et uklart navn dukker op på en almindelig brugers telefon.

## Kan du slette APK-filer?

Ja, hvis APK-filen ligger i almindelig brugerlagerplads som Downloads, Documents, en mappe fra en beskedapp eller filhåndteringens kategori for installationsfiler.

Når du sletter filen, fjerner du kun installationspakken. Selve appen ligger et andet sted, og Android gemmer dens data separat. Hvis du sletter com.example.app.apk fra Downloads, er den installerede app ligeglad.

Der er én stor undtagelse, men de fleste støder aldrig på den: System-APK'er under stier som /system/app/ eller /system/priv-app/ er en del af Android eller producentens software. Du kan normalt ikke se eller ændre dem uden root-adgang. Rør dem ikke, medmindre du ved præcis, hvad du laver.

## Sådan finder du APK-filer

Åbn din filhåndtering. På mange telefoner er det Files by Google, Samsung My Files, Xiaomi File Manager eller Motorolas Files-app.

Begynd i Downloads. Søg derefter efter .apk. Files by Google har også en kategori for installationsfiler på mange enheder, og når den vises, er det den hurtigste vej.

Tjek filnavnet, før du sletter. En fil med navnet Signal-Android-7.XX.apk eller app-release.apk kan være oplagt, hvis du lige har installeret den. En fil med en tilfældig tegnstreng eller et pakkenavn som com.company.name.apk kræver lidt mere omtanke.

Hvis appen allerede er installeret, og du ikke har brug for en sikkerhedskopi af installationsfilen, kan du slette den.

## APK kontra AAB i 2026

Google Play har flyttet det meste almindelige appdistribution væk fra APK-filer, som udvikleren selv uploader. Siden august 2021 har Google Play krævet, at nye apps bruger Android App Bundle, eller AAB, som standardformat til udgivelse. Google Play genererer derefter optimerede APK-filer til hver enhedskonfiguration, så telefonen kun downloader den kode og de ressourcer, den har brug for.

Det betyder ikke, at APK-filer er forsvundet. Android installerer stadig APK-filer i baggrunden, og udviklere bruger dem fortsat til test, virksomhedsdistribution og visse apps uden for Google Play. Men hvis du finder løse APK-filer i Downloads, stammer de næsten helt sikkert fra en manuel download, en vedhæftet fil i en besked, et sikkerhedskopieringsværktøj eller en ældre arbejdsgang.

## Bør du beholde nogen APK-filer?

Nogle gange.

Behold en APK, hvis den tilhører en app, du ikke nemt kan hente igen, for eksempel en regionsbegrænset app, en privat arbejdsudgave, en ældre appversion, du bevidst bruger, eller en betroet open source-app fra en kilde, du kender. Flyt den i så fald til en mappe med et tydeligt navn, så du senere kan se, hvorfor den ligger der.

Slet resten. APK-filer kan være små, men spil og store apps kan fylde flere hundrede megabyte eller mere. Nogle få gamle installationsfiler betyder ikke meget på en telefon med 512 GB. På en telefon med 64 GB kan de hurtigt mærkes.

## Sikkerheden er vigtigere end filstørrelsen

APK-filer er ikke farlige, bare fordi de er APK-filer. Risikoen ligger i kilden.

En APK fra en udvikler, du stoler på, et kendt open source-arkiv eller din arbejdsgivers administrerede appsystem er noget andet end en APK fra en fremmed eller et tilfældigt forum. Ændrede, crackede eller "premium unlocked" APK-filer er en almindelig vej for malware. Den lille mængde lagerplads, du måske sparer, er ikke hovedproblemet. Det er dine kontodata.

Google Play Protect er som standard aktiveret på certificerede Android-enheder. Tjenesten kontrollerer apps under installationen, scanner enheden med jævne mellemrum og kan advare om, deaktivere eller fjerne apps, der ser skadelige ud. Den kan også bede dig sende ukendte apps til Google til scanning. Det er nyttig beskyttelse, ikke en garanti.

Der er også en aktuel ændring i Android-distributionen, som er værd at kende. Fra 30. september 2026 skal apps være registreret af udviklere med verificeret identitet, før de kan installeres på certificerede Android-enheder i Brasilien, Singapore, Indonesien og Thailand. En global udrulning er planlagt fra 2027 og frem. Google oplyser, at erfarne brugere fortsat får en avanceret installationsproces til apps fra ikke-verificerede udviklere. For en almindelig telefonejer ændrer det ikke det praktiske råd: Behold eller installér ikke APK-filer fra kilder, du ikke ville stole på med adgang til din telefon.

## Ofte stillede spørgsmål

### Afinstallerer jeg appen, hvis jeg sletter en APK?

Nej. APK-filen er installationsfilen. Appen bliver på telefonen, indtil du afinstallerer den via Indstillinger, appikonet eller Google Play.

### Hvorfor har nogle APK-filer mærkelige navne?

Browsere, chatapps og udviklerværktøjer gemmer ikke altid filen med appens offentlige navn. De kan bruge det interne pakkenavn eller et tilfældigt downloadnavn. Navnet alene beviser ikke, at filen er usikker, men det betyder, at du bør være mere forsigtig.

### Kan jeg sende en APK til en anden?

Teknisk set ja. Det fungerer bedst med enkle apps, der distribueres som én APK. Det er mindre pålideligt for apps installeret fra Google Play, fordi Play ofte leverer optimerede split-APK'er, der er genereret fra en AAB. Send i stedet linket til Google Play for apps derfra.
