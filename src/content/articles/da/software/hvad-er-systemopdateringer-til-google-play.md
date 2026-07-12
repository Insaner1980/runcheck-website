---
title: "Hvad er systemopdateringer til Google Play?"
description: "Åbn opdateringssiden på din Android-telefon, og du vil sandsynligvis se to datoer, der ikke stemmer overens. Den ene viser sikkerhedsrettelsesniveauet for Android. Den anden viser datoen for en modulopdatering fra Google."
listSummary: "Åbn opdateringssiden på din Android-telefon, og du vil sandsynligvis se to datoer, der ikke stemmer overens."
hub: "software"
sourceNumber: 124
order: 6
tags: ["android","opdateringer","sikkerhed","software","guide"]
locale: "da"
draft: false
---
Det ligner en fejl. Som regel er det ikke.

Der er tale om to forskellige opdateringskanaler. Sikkerhedsrettelsesniveauet kommer gennem telefonens producent, for eksempel Google, Samsung, Xiaomi, OnePlus eller Motorola. Den anden dato kommer gennem Googles modulbaserede Android-opdateringssystem på enheder, der understøtter det.

## Den korte forklaring

Disse Mainline-opdateringer retter udvalgte dele af Android uden at vente på en komplet systemopdatering fra producenten.

De erstatter ikke normale Android-opdateringer. De opgraderer ikke telefonen fra Android 16 til Android 17. De retter ikke alle sårbarheder. Men de gør det muligt for Google at opdatere visse OS-komponenter gennem den samme overordnede leveringsvej, som Google Play bruger.

Det betyder noget, fordi Android-opdateringer har en lang kæde. Google udgiver kode. Chipproducenter og telefonproducenter integrerer den. Mobilselskaber kan teste den. Først derefter når opdateringen frem til telefonen. Modulkanalen springer en del af denne kæde over for bestemte komponenter.

## Sådan fungerer Project Mainline

Teknologien bag kaldes Project Mainline, også omtalt som modulbaserede systemkomponenter i Androids dokumentation. Den blev indført med Android 10.

Mainline opdeler udvalgte dele af Android i moduler. Nogle er APK-moduler, der minder mere om almindelige app-pakker. Andre er APEX-moduler, som kan indlæses tidligere under opstarten og håndtere dybere systemkomponenter.

Det vigtige er den atomiske installation. Hvis en samlet pakke af modulopdateringer ikke kan installeres korrekt, ruller Android hele pakken tilbage i stedet for at efterlade telefonen halvt opdateret.

Godt. Kedeligt er godt her.

## Hvad bliver opdateret?

Det præcise udvalg af moduler afhænger af Android-versionen og enhedens software, så du skal ikke forvente den samme liste på alle Android-telefoner. Nyere Android-versioner har generelt flere modulbaserede dele end Android 10 havde.

Eksempler omfatter netværkskomponenter, DNS-opslag, mediehåndtering, tilladelsesrelaterede komponenter, Conscrypt til TLS, captive portal-håndtering, DocumentsUI, internetdeling og dele af Android Runtime på understøttede versioner.

Det er ikke pynt. En fejl i medieframeworket kan påvirke mange apps. En fejl i en TLS-komponent kan påvirke krypterede forbindelser på tværs af enheden. Når disse dele kan opdateres gennem en modulkanal, kan rettelser nå langt flere telefoner end ved at vente på, at hver producent udsender en komplet OTA-pakke.

## Sådan tjekker du datoen

På mange nyere Android-telefoner kan du gå til Indstillinger > Om telefonen > Android-version og åbne Systemopdatering til Google Play.

På Samsung kan du prøve Indstillinger > Om telefonen > Softwareinformation og finde den samme opdatering der. Du kan også søge efter Systemopdatering til Google Play i Indstillinger, fordi placeringen varierer mellem modeller og softwareversioner.

Tryk på posten for at søge efter en opdatering. Hvis Android bagefter beder om en genstart, skal du gøre det. Nogle APEX-baserede opdateringer træder først i kraft, når telefonen genstarter.

## Hvorfor datoen kan se gammel ud

Datoen på skærmen betyder ikke nødvendigvis blot "sidste gang noget blev rettet". Den kan repræsentere versionen af en modulpakke, og ikke alle modulopdateringer flytter den viste dato på en tydelig måde.

Derfor kan datoen for Systemopdatering til Google Play godt være ældre end Androids sikkerhedsrettelsesdato, uden at der er noget galt med telefonen. Jeg ville først blive bekymret, hvis begge datoer er gamle, eller hvis telefonen ikke har installeret en systemopdatering i flere måneder og heller ikke længere står på producentens supportliste.

Det frustrerende er, at Android ikke giver almindelige brugere en overskuelig ændringslog for hvert modul. Du får stort set én dato og en genstartsknap.

## Hvilke telefoner får dem?

Denne opdateringskanal er knyttet til Androids modulbaserede system og Googles tjenester. I praksis omfatter det de fleste Google-certificerede Android-telefoner med Android 10 eller nyere.

Telefoner uden Google-tjenester får ikke den samme Google-leverede opdateringsvej. Nogle Android-partnere kan opdatere Mainline-moduler gennem deres egen OTA-mekanisme, men det er ikke det samme som den Google-leverede kanal på en certificeret telefon.

Ældre Android-versioner har også færre modulbaserede komponenter. En telefon med Android 10 kan få gavn af Mainline, men har ikke den samme moduldækning som en nyere enhed med Android 16 eller Android 17.

## Hvad kan de ikke rette?

Mainline kan ikke rette alt.

Opdateringerne retter ikke enhedens kernel, medmindre den konkrete rettelse leveres gennem en understøttet modulvej. De opdaterer ikke lukket firmware til modem, kamera, GPU eller Wi-Fi. De reparerer heller ikke producentspecifikke systemapps eller leverandørkode. Og de forlænger ikke producentens officielle supportperiode.

Så ja, modulkanalen hjælper. Nej, den gør ikke en opgivet telefon fuldt sikker igen.

## Systemopdateringer til Google Play og Google Play Services

Navnene minder for meget om hinanden, og det skaber forvirring.

Google Play Services er et framework på appniveau. Apps bruger det til login, placerings-API'er, notifikationer, kontofunktioner, sikkerhedstjek og andre Google-baserede tjenester. Det opdateres som en app.

Systemopdateringerne håndterer OS-moduler. De går dybere ind i selve Android.

Begge kommer fra Google. Begge kan opdateres uden en komplet OTA-opdatering fra producenten. De befinder sig ikke i det samme lag.

## Hvad du skal bruge oplysningerne til

Hold begge opdateringskanaler ajour. Installér normale Android-systemopdateringer fra producenten, og kontrollér af og til siden med Systemopdatering til Google Play.

Hvis telefonen stadig får sikkerhedsrettelser fra producenten, er en lidt ældre dato for Google Play-systemet som regel bare støj. Hvis telefonen er holdt op med at få begge dele, er det tid til at betragte den som på vej ud af sikker daglig brug.
