---
title: "Så kontrollerar du Android-versionen"
description: "Telefonen visar redan vilken Android-version den kör. Du behöver bara veta vilket nummer du ska lita på."
listSummary: "Telefonen visar redan vilken Android-version den kör."
hub: "software"
sourceNumber: 119
order: 1
tags: ["android","uppdateringar","säkerhet","programvara","guide"]
locale: "sv"
draft: false
---
På de flesta telefoner öppnar du Inställningar > Om telefonen > Android-version. På Samsung använder du Inställningar > Om telefon > Programvaruinformation. Där visas mer än det stora versionsnumret: även datumet för säkerhetsuppdateringen, datumet för systemuppdateringen via Google Play, versionsnumret och ibland tillverkarens egen programvaruversion.

Det är den delen många missar. Android 17 låter nyare än Android 16, och det är det, men en aktuell säkerhetsuppdatering är minst lika viktig när du bedömer om telefonen fortfarande är säker att använda.

## Kontrollera versionen i Inställningar

På de flesta Android-telefoner:

1. Öppna Inställningar.
2. Tryck på Om telefonen eller Om surfplattan.
3. Öppna Android-version om uppgifterna inte redan visas.
4. Kontrollera Android-version, säkerhetsuppdatering för Android, systemuppdatering via Google Play och versionsnummer.

Samsung visar samma uppgifter under Programvaruinformation i Om telefon. OnePlus använder ofta Om enheten. Telefoner från Xiaomi, Redmi och POCO börjar vanligtvis på sidan Om telefonen och delar sedan upp informationen mellan plattformssidan och skärmarna för Xiaomi HyperOS.

Det var allt. På riktigt.

## Vad versionen faktiskt betyder

Huvudnumret visar vilken större Android-generation som finns i telefonen. Android 17 är den senaste huvudversionen i juli 2026. Google släppte den den 16 juni 2026 till de flesta Pixel-enheter som stöds, medan nya telefoner och andra tillverkares uppdateringar följer sina egna tidplaner.

För utvecklare motsvarar operativsystemet en API-nivå. Den aktuella kopplingen är Android 17/API 37, Android 16/API 36, Android 15/API 35, Android 14/API 34 och Android 13/API 33. Du behöver inte memorera detta, men det förklarar varför en app kan säga att telefonen är för gammal trots att enheten fortfarande startar och fungerar.

Fältet Versionsnummer är mer specifikt. Det identifierar den exakta programvaruversion som är installerad. Två telefoner kan båda köra Android 17 men ändå ha olika versioner på grund av region, operatörsgodkännande, betakanal eller tillverkarens anpassningar.

## Tillverkarens gränssnitt spelar också roll

Samsung levererar inte bara "ren Android". Företaget lägger One UI ovanpå. One UI 9 är Samsungs generation för Android 17, men i juli 2026 är den fortfarande i beta för Galaxy S26-serien på utvalda marknader. Den bredare stabila versionen kommer senare och varierar efter enhet, region och kanal. En Galaxy S26-användare i betaprogrammet för One UI kan därför se den nya plattformen före någon med en äldre Galaxy-modell på den stabila grenen.

Telefoner från Xiaomi, Redmi och POCO använder Xiaomi HyperOS. HyperOS-numret beskriver Xiaomis eget gränssnitt och dess funktioner, men avslöjar inte alltid den underliggande Android-versionen direkt. Öppna sidan med plattformsinformation innan du antar att HyperOS 3, 3.1 eller en senare HyperOS-version betyder samma sak på alla modeller.

Pixel-telefoner är enklare. Sidan Om telefonen visar plattformsnummer, säkerhetsuppdatering och versionsidentifierare tillsammans. En Pixel som stöds och har den stabila versionen från juni 2026 kan visa Android 17, medan en enhet som deltar i betatestning i stället kan visa en QPR-betaversion.

## Så kontrollerar du utan den vanliga vägen i Inställningar

Koder i Telefon-appen kan visa information om fast programvara på vissa telefoner, men stödet varierar. Samsungs `*#1234#` kan visa AP-, CP- och CSC-information på modeller som stöds. Testmenyn `*#*#4636#*#*` fungerar på vissa Android-enheter, men många tillverkare har inaktiverat den.

Om du är bekväm med ADB och telefonen redan har godkänt datorn ger följande kommandon mer exakta uppgifter:

```bash
adb shell getprop ro.build.version.release
adb shell getprop ro.build.version.sdk
adb shell getprop ro.build.version.security_patch
```

De visar versionssträngen, API-nivån och datumet för säkerhetsuppdateringen. Det är användbart vid testning, reparationsarbete eller kontroll av en telefon vars menyer har anpassats kraftigt.

## Varför versionen spelar roll

Appkompatibilitet är det uppenbara skälet. Appar anger en lägsta plattformsversion som stöds. När telefonen hamnar under den gränsen kan Play Store blockera installationen eller sluta erbjuda uppdateringar.

Säkerheten är ett ännu bättre skäl. Androids säkerhetsuppdateringar följs separat från huvudversionen. En telefon med Android 16 och en aktuell säkerhetsuppdatering är vanligtvis säkrare än en telefon med Android 17 och en gammal säkerhetsuppdatering. Datumet visar hur nyligen enheten fick korrigeringar för sårbarheter.

Funktionerna beror också på plattformen. Android 12 införde dynamiska Material You-teman. Android 13 lade till språkinställningar per app. Android 14 skärpte flera regler för integritet och bakgrundsbeteende. Android 17 lägger till App Bubbles, interaktiv Picture-in-Picture för skrivbordsliknande miljöer, en integritetsinriktad Contact Picker för appar och en systemrenderad Location Button som kan ge exakt platsåtkomst under den aktuella sessionen.

Om en funktion saknas kan operativsystemets generation vara orsaken. Eller så har tillverkaren helt enkelt valt att inte ta med den. Android är rörigt på det sättet.

## Plattformsversion och säkerhetsdatum är olika saker

Plattformsnumret anger huvudgenerationen. Säkerhetsuppdateringen anges med ett datum, till exempel 2026-06-05. De utvecklas oberoende av varandra.

En telefon kan köra Android 15 med färska korrigeringar för sårbarheter. En annan modell kan köra Android 17 men redan ligga efter med säkerhetsuppdateringarna. Titta på båda när du bedömer om enheten fortfarande är säker att använda.

## Kan du uppdatera manuellt?

Börja med Inställningar > System > Mjukvaruuppdateringar, eller Inställningar > Programvaruuppdatering på Samsung. Om tillverkaren har släppt en uppdatering för exakt din modell, region och operatörsversion bör den visas där.

Du kan inte installera en officiell Android-version som tillverkaren inte har släppt för enheten. Pixel-ägare kan sidoladda officiella OTA-avbildningar med ADB, och Samsung-användare kan installera officiell fast programvara med Odin, men båda är tekniska metoder med verklig risk om du väljer fel version. Anpassade ROM-versioner är ett annat alternativ för vissa telefoner, men de är inte samma sak som en officiell uppdatering.
