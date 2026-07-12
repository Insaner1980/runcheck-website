---
title: "Vad APK-filer är och när du kan radera dem säkert"
description: "Har du hittat en fil som slutar på .apk i Hämtade filer och inte minns vad den är? Oftast är det bara en installationsfil för en Android-app som blev kvar efter att appen installerades eller delades."
listSummary: "Har du hittat en fil som slutar på .apk i Hämtade filer och inte minns vad den är?"
hub: "storage"
sourceNumber: 84
order: 6
tags: ["lagring","android","rensning","optimering","guide"]
locale: "sv"
draft: false
---
APK står för Android Package Kit. Det är ett av de paketformat som Android använder för att installera appar. Det viktiga vid rensning är detta: APK-filen som du ser i Hämtade filer är inte själva appen som körs på telefonen. Den är installationspaketet.

När appen väl är installerad kan du radera den kvarlämnade APK-filen utan att avinstallera appen eller ta bort dess inställningar.

## Varifrån kommer APK-filer?

De flesta synliga APK-filer kommer från sidoladdning. Du har hämtat en app från en utvecklares webbplats, APKMirror, F-Droid, en intern företagsportal eller någon annan källa utanför Google Play. Efter installationen ligger filen ofta kvar i Hämtade filer.

Meddelandeappar är en annan vanlig källa. Någon skickar en APK-fil via WhatsApp, Telegram, mejl eller en jobbchatt. Du trycker på den en gång, eller installerar den kanske aldrig, och sedan ligger den kvar och tar plats.

Utvecklare och företagsanvändare ser APK-filer oftare eftersom testversioner, privata appar och interna uppdateringar fortfarande delas som fristående filer. Det är normalt i utvecklingsarbete. Det är mindre normalt att en slumpmässig APK-fil med ett otydligt namn dyker upp på en vanlig användares telefon.

## Kan du radera APK-filer?

Ja, om APK-filen ligger i vanlig användarlagring, till exempel Hämtade filer, Dokument, en mapp som tillhör en meddelandeapp eller filhanterarens kategori för installationsfiler.

När du raderar filen försvinner bara installationspaketet. Själva appen ligger någon annanstans och Android sparar dess data separat. Om du tar bort com.example.app.apk från Hämtade filer påverkas inte den installerade appen.

Det finns ett stort undantag, men de flesta stöter aldrig på det: system-APK-filer under sökvägar som /system/app/ eller /system/priv-app/ är en del av Android eller tillverkarens programvara. Du kan normalt inte se eller ändra dem utan root-åtkomst. Rör dem inte om du inte vet exakt vad du gör.

## Så hittar du APK-filer

Öppna filhanteraren. På många telefoner är det Files by Google, Samsung My Files, Xiaomi File Manager eller Motorolas Files-app.

Börja i Hämtade filer. Sök sedan efter .apk. Files by Google har också en kategori för installationsfiler på många enheter, vilket är den snabbaste vägen när den visas.

Kontrollera filnamnet innan du raderar. En fil som heter Signal-Android-7.XX.apk eller app-release.apk kan vara självklar om du precis installerade den. En fil med en slumpmässig teckenföljd eller ett paketnamn, som com.company.name.apk, kräver lite mer eftertanke.

Om appen redan är installerad och du inte behöver en säkerhetskopia av installationsfilen kan du radera den.

## APK jämfört med AAB 2026

Google Play har flyttat den normala appdistributionen bort från APK-filer som utvecklare själva laddar upp. Sedan augusti 2021 måste nya appar använda Android App Bundle, eller AAB, som standardformat för publicering. Google Play skapar sedan optimerade APK-filer för varje enhetskonfiguration, så att telefonen bara hämtar den kod och de resurser den behöver.

Det betyder inte att APK-filer har försvunnit. Android installerar fortfarande APK-filer i bakgrunden, och utvecklare använder dem fortfarande för testning, företagsdistribution och vissa appar utanför Google Play. Men om du hittar lösa APK-filer i Hämtade filer kommer de nästan säkert från en manuell nedladdning, en meddelandebilaga, ett säkerhetskopieringsverktyg eller ett äldre arbetssätt.

## Bör du behålla några APK-filer?

Ibland.

Behåll en APK-fil om den hör till en app som är svår att hämta igen, till exempel en regionbegränsad app, en privat jobbversion, en äldre appversion som du medvetet använder eller en betrodd app med öppen källkod från en källa du känner till. Flytta den även då till en tydligt namngiven mapp, så att du senare vet varför den finns kvar.

Radera resten. APK-filer kan vara små, men spel och stora appar kan ligga på hundratals megabyte eller mer. Några gamla installationsfiler spelar ingen större roll på en telefon med 512 GB. På en modell med 64 GB växer de snabbt till ett problem.

## Säkerheten är viktigare än filstorleken

APK-filer är inte farliga bara för att de är APK-filer. Risken ligger i källan.

En APK-fil från en utvecklare du litar på, ett känt arkiv för öppen källkod eller arbetsgivarens hanterade appsystem är något helt annat än en fil från en främling eller ett slumpmässigt forum. Modifierade, knäckta eller "premium unlocked" APK-filer är en vanlig väg för skadlig kod. Det lilla lagringsutrymme du eventuellt sparar är inte huvudfrågan. Dina kontouppgifter är det.

Google Play Protect är aktiverat som standard på certifierade Android-enheter. Det kontrollerar appar när de installeras, söker igenom enheten regelbundet och kan varna för, inaktivera eller ta bort appar som verkar skadliga. Det kan också be dig skicka okända appar till Google för genomsökning. Det är ett användbart skydd, inte en garanti.

Det finns också en aktuell förändring av Android-distributionen som är bra att känna till. Från den 30 september 2026 måste appar vara registrerade av utvecklare med verifierad identitet för att kunna installeras och uppdateras på certifierade Android-enheter i Brasilien, Singapore, Indonesien och Thailand. En global utrullning är planerad från 2027 och framåt. Google uppger att erfarna användare fortfarande ska kunna installera appar från overifierade utvecklare via ADB eller ett avancerat installationsflöde. För en vanlig telefonägare ändras inte det praktiska rådet: behåll eller installera inte APK-filer från källor som du inte skulle anförtro din telefon åt.

## Vanliga frågor

### Avinstalleras appen om jag raderar en APK-fil?

Nej. APK-filen är installationspaketet. Appen finns kvar tills du avinstallerar den via Inställningar, startskärmen eller Google Play.

### Varför har vissa APK-filer konstiga namn?

Webbläsare, chattappar och utvecklingsverktyg sparar inte alltid filen med appens offentliga namn. De kan använda det interna paketnamnet eller ett slumpmässigt nedladdningsnamn. Namnet i sig bevisar inte att filen är farlig, men det är en anledning att vara mer försiktig.

### Kan jag skicka en APK-fil till någon annan?

Tekniskt sett, ja. Det fungerar bäst för enkla appar som distribueras som en enda APK-fil. Det är mindre tillförlitligt för appar som installerats från Google Play, eftersom Play ofta levererar optimerade delade APK-filer som har skapats från en AAB. Skicka länken till Play Store i stället när det gäller appar därifrån.
