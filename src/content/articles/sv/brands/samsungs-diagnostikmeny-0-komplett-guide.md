---
title: "Samsungs diagnostikmeny #0#: komplett guide"
description: "Du skriver #0# i appen Samsung Phone och den vanliga knappsatsen försvinner. I stället visas ett enkelt rutnät med testknappar för skärm, pekpanel, högtalare, sensorer, kameror, vibrationsmotor och fysiska knappar."
listSummary: "Du skriver #0# i appen Samsung Phone och den vanliga knappsatsen försvinner."
hub: "brands"
sourceNumber: 160
order: 8
tags: ["tillverkare","android","diagnostik","märkesspecifikt","guide"]
locale: "sv"
draft: false
---
När det fungerar känns det nästan för enkelt. När det inte fungerar kan det vara oväntat frustrerande eftersom Samsung inte presenterar menyn som en vanlig konsumentfunktion. Se den som en lågnivåmeny för service som ofta fungerar på Galaxy-telefoner, inte som en garanterad funktion på varje modell, operatörsversion eller marknad.

## Innan du provar koden

Använd appen Samsung Phone. Koden kanske inte fungerar i Google Phone eller en annan telefonapp från tredje part, inte ens på samma enhet. Öppna knappsatsen, skriv `*#0*#` och vänta. Du ska inte trycka på samtalsknappen.

Om inget händer kan menyn vara blockerad av telefonens fasta programvara, operatörskonfiguration, arbetsprofil, MDM-policy eller säkerhetsinställningar. Vissa användare upplever också att Samsungs Auto Blocker stör service- och diagnostikkoder i nyare One UI-versioner. Om du testar den möjligheten ska du bara stänga av Auto Blocker tillfälligt och sedan slå på funktionen igen. Den finns där av en anledning.

För de flesta är Samsung Members det säkrare officiella alternativet. Beroende på region och appversion kan du öppna Samsung Members och trycka på **Diagnostik** eller gå till **Support > Telefondiagnostik**. Där kan du köra alla tester eller välja en kategori. Funktionen täcker de kontroller som de flesta faktiskt behöver och ger tydligare anvisningar än det råa rutnätet i `*#0*#`.

## Tester av skärm och pekfunktion

Knapparna Red, Green, Blue och Black fyller skärmen med enfärgade ytor. Använd dem för att leta efter döda eller fastnade pixlar, färgstick, ojämn ljusstyrka och skärmskador som inte syns tydligt mot bakgrundsbilden.

Black är särskilt användbar på Galaxy-telefoner med OLED-skärm. En verkligt svart skärm ska se avstängd ut. Ljusa punkter eller färgade prickar kan tyda på fastnade pixlar, medan grumliga partier kan bero på panelskador eller tryckmärken.

Testet Touch visar ett rutnät eller mönster som du följer med fingret. Varje del ska registrera beröringen utan avbrott. På så sätt hittar du döda områden nära kanterna som är lätta att missa om du bara skriver några ord eller bläddrar i Inställningar.

Testet Dimming ändrar skärmens ljusstyrka och färgåtergivning. Leta efter flimmer, ojämn ljusstyrka, märkliga färgskiftningar eller en panel som inte tonar ned jämnt. På äldre Galaxy-modeller med LCD kan problem med bakbelysningen märkas. På OLED-modeller handlar kontrollen mer om pixelbeteende och reglering av ljusstyrkan.

## Ljud, vibration och knappar

Receiver spelar ljud genom hörlurshögtalaren. Speaker använder telefonens vanliga högtalarsystem. På nyare Galaxy-telefoner med stereoljud bör du lyssna efter obalans mellan hörlurshögtalaren och den nedre högtalaren. Att ena sidan låter svagt kan vara ett problem även om telefonen tekniskt sett ger ifrån sig ljud.

Testet Vibration kör haptikmotorn. En frisk motor känns jämn och kontrollerad. Om den skramlar, surrar högt eller känns skrovlig kan motorn eller dess interna infästning vara sliten.

Sub key kontrollerar hårdvaruknappar och vissa navigeringskommandon. Tryck på volymknapparna, strömknappen och de navigeringsknappar som testet ber om. Ignorera inte en knapp som bara fungerar med hårt tryck eller från en viss vinkel. Det är vanligtvis inte ett programvarufel.

## Sensorer och kameror

Menyn Sensor är en av de bättre anledningarna att använda `*#0*#`. Den kan visa aktuella värden från accelerometer, gyroskop, närhetssensor, ljussensor, magnetisk sensor, barometer på modeller som stöds, fingeravtrycksläsare och äldre pulssensorer på de Galaxy-modeller som fortfarande har dem.

Några kontroller är enkla. Täck närhetssensorn nära skärmens ovankant och se om statusen ändras. Flytta telefonen och följ värdena från accelerometern. Rotera den och kontrollera gyroskopet. Täck ljussensorn och rikta den sedan mot en lampa.

Sensorresultat kräver sunt förnuft. En magnetisk sensor kan uppföra sig märkligt nära en bärbar dator, en magnet i mobilskalet, ett bilfäste eller ett metallbord. En närhetssensor kan sluta fungera för att ett skärmskydd täcker den. Testa i en ren miljö innan du antar att sensorn är trasig.

Mega Cam och Front Cam öppnar de bakre respektive främre kamerorna. De bekräftar att modulerna startar, fokuserar och tar en bild. De bevisar inte att varje objektiv är skarpt, att den optiska bildstabiliseringen fungerar eller att nattbilderna blir bra. Hårdvarutester är grova verktyg.

## Andra koder som kan hjälpa

Samsung har fler koder för telefonappen, men stödet varierar beroende på modell, operatör, One UI-version och region. Behandla inte kodlistor på nätet som universella.

`*#06#` visar IMEI. Koden är säker och fungerar på många telefoner, inte bara Samsung.

`*#1234#` visar information om Samsungs fasta programvara på många Galaxy-enheter, bland annat versionssträngarna AP, CP och CSC. Det är användbart när du vill kontrollera exakt vilken programvaruversion som är installerad.

`*#0228#` kan visa uppgifter om batteristatus på många Galaxy-telefoner. Om sidan öppnas ska du använda den som en snabb statusvisning, inte som en fullständig rapport om batterihälsan.

Äldre koder som `*#7353#`, `*#0842#`, `*#0673#` och `*#0289#` kan fortfarande fungera på vissa enheter. På andra händer ingenting. Det är normalt numera.

## Vad `*#0*#` inte kan bevisa

Menyn testar om hårdvaran svarar just då. Den ger ingen långsiktig information om batterihälsa, historik över laddningscykler, loggar över termisk strypning, historik över signalstyrka eller storage I/O-prestanda över tid.

Menyn kan inte heller ensam bevisa att en telefon är äkta. En fungerande diagnostikmeny från Samsung är ett gott tecken, men det räcker inte. Kontrollera IMEI, versionen av den fasta programvaran, Knox-status där det är relevant, inköpshistorik och fysiska detaljer om du köper begagnat.

En telefon kan klara `*#0*#` och ändå kännas långsam eftersom lagringen nästan är full, en dålig app körs i bakgrunden, batterispänningen sjunker under belastning eller en ny uppdatering har orsakat ett fel. Hårdvarutester förklarar inte allt.

## När Samsung Members är det bättre valet

Använd Samsung Members när koden inte fungerar, när du behöver ett tydligare godkänt eller underkänt resultat eller när du vill skicka en felrapport. Samsungs officiella diagnostik kan kontrollera batteristatus, kabelladdning, trådlös laddning, pekskärm, sensorer, mikrofon, högtalare, kamera, Wi-Fi, Bluetooth, SIM-kort, mobilnät, fingeravtrycksigenkänning, NFC, knappar och mer, beroende på enhet.

Mindre tekniska användare bör börja med Samsung Members. Appen berättar vad du kan göra när ett test misslyckas. Menyn `*#0*#` utgår i stort sett från att du redan förstår vad du tittar på.

Det betyder inte att samma verktyg är bäst i varje situation. Jag skulle använda `*#0*#` för snabba kontroller av skärm, pekfunktion, sensorer och ljud på en begagnad telefon. För vanlig felsökning, support och officiell felrapportering skulle jag välja Samsung Members.

## Android 17 och Galaxy-kompatibilitet

Den stabila lanseringen av Android 17 började först på Pixel-enheter som stöds. Galaxy-telefoner följer Samsungs egen tidsplan för One UI, så diagnostikmenyn ändras inte bara för att Android 17 finns.

När Galaxy-versioner baserade på Android 17 kommer till din modell kan åtkomsten till diagnostiken fortfarande bero på Samsung Phone, One UI-version, operatörens fasta programvara, region, säkerhetsinställningar och uppdateringar av Samsung Members. Att koden fungerar på en Galaxy-modell i S-serien bevisar med andra ord inte att den fungerar på en Galaxy-modell i A-serien bredvid.

Om `*#0*#` är blockerat behöver du inte ägna en timme åt att bråka med telefonappen. Kör diagnostiken i Samsung Members i stället.

---

*Metabeskrivning: Samsungs kod `*#0*#` kan öppna en dold diagnostikmeny på Galaxy-telefoner för tester av skärm, pekfunktion, sensorer, kamera, högtalare och vibration. Här ser du vad den kontrollerar och vad du kan använda när koden är blockerad.*
