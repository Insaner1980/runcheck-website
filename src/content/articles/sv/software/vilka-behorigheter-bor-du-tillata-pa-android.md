---
title: "Vilka behörigheter bör du tillåta på Android?"
description: "Den enklaste regeln för Android-behörigheter är denna: om behörigheten inte passar den funktion du precis försökte använda ska du neka den."
listSummary: "android, behörigheter och integritet"
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","behörigheter","integritet","säkerhet","guide"]
locale: "sv"
draft: false
---
Att en kameraapp vill använda kameran är rimligt. Att en ficklampa vill läsa kontakterna är det inte. De flesta beslut om behörigheter är inte mer komplicerade än så.

Problemet är tidpunkten. Appar frågar när du försöker få något gjort, och då blir Tillåt den snabba knappen. Det är så olämpliga behörigheter samlas på hög.

## Tre typer av behörigheter

Android-behörigheter kan delas in i tre breda grupper.

Normala behörigheter innebär låg risk och beviljas vanligtvis automatiskt. Internetåtkomst är det tydligaste exemplet. Du får ingen fråga varje gång en app behöver nätverket.

Behörigheter vid körning, som ofta kallas farliga behörigheter i Androids dokumentation, skyddar data eller maskinvara som kan avslöja privat information. Plats, kamera, mikrofon, kontakter, kalender, telefon, sms, enheter i närheten och medieåtkomst hör hit. Det är de här frågorna som visas medan du använder en app.

Särskilda behörigheter är mer ingripande och kräver vanligtvis att du går till Inställningar. Åtkomst till tillgänglighetsfunktioner, aviseringar, visning över andra appar, enhetsadministration, användningsdata, installation av okända appar och åtkomst till alla filer hör hemma i den här mentala kategorin. Granska dem hårdare än en vanlig fråga om kamera eller plats.

Android 6 införde behörigheter vid körning. På Android 5.1 och äldre fick appar breda behörigheter redan vid installationen. Om en telefon fortfarande sitter fast där är behörighetsmodellen bara ett av många skäl att pensionera den.

## Plats

Platsåtkomst är användbar, men begärs för ofta.

Kartor, väder, taxitjänster, leveransappar, träningsappar och navigering kan ha goda skäl. En kalkylator, ett gallerifilter, en QR-läsare eller en bakgrundsapp har det vanligtvis inte.

Välj alternativet som bara ger åtkomst medan appen används, om det inte finns en verklig bakgrundsfunktion. Stegvis navigering, löprundor, familjesäkerhet och enhetsspårning är exempel där platsåtkomst i bakgrunden kan vara rimlig.

Använd ungefärlig plats för väder, lokalt innehåll, butikstillgänglighet och annat som inte behöver din exakta GPS-position. Android 17 lägger dessutom till en systemstyrd platsknapp som kan ge exakt platsåtkomst endast under den aktuella sessionen. Den passar bättre när en app behöver exakt position vid ett enstaka tillfälle men inte bör få permanent exakt åtkomst.

## Kamera, mikrofon och inspelning

Åtkomst till kameran eller mikrofonen ska vara nästan löjligt självklar.

Videosamtal behöver båda. Meddelandeappar använder dem för foton, röstmeddelanden och videoklipp. En bankapp kan behöva kameran för att läsa dokument eller QR-koder.

Om det inte finns någon synlig funktion som använder kameran eller mikrofonen ska du neka. Android visar integritetsindikatorer när en app använder någon av sensorerna, och Android 12 lade till en integritetsöversikt som visar nylig användning av plats, kamera och mikrofon.

Titta där ibland. Den kan avslöja överraskningar.

## Kontakter

Kontaktåtkomst är en av de behörigheter som många ger bort för lättvindigt.

Meddelandeappar och sociala appar vill använda den för att hitta personer du känner. Det är bekvämt, men tjänsten kan ladda upp eller jämföra din adressbok med sina servrar. Personerna i dina kontakter har inte nödvändigtvis samtyckt till det.

Android 17 förbättrar detta med Androids kontaktväljare, där du kan dela utvalda kontakter i stället för hela adressboken. Använd den när den visas. Om en app fungerar utan kontaktåtkomst brukar jag neka och lägga till personer manuellt.

## Sms och telefon

Sms är en högriskbehörighet. Den kan avslöja verifieringskoder, privata samtal och meddelanden för kontoåterställning. Bara den app du faktiskt använder för meddelanden bör ha bred sms-åtkomst.

Vissa bankappar vill läsa engångskoder automatiskt. Det är bekvämt, men manuell inmatning är säkrare. Om appen fungerar utan sms-åtkomst ska du neka.

Telefonbehörigheten kan ge åtkomst till samtalsstatus, telefonnummer eller samtalsrelaterade uppgifter beroende på app och Android-version. Telefonappar, samtalsfiltrering, röstbrevlåda och operatörsappar kan ha skäl att fråga. De flesta andra appar har det inte.

## Filer, foton och medier

Lagringsbehörigheterna har förändrats mycket mellan olika Android-versioner.

Äldre Android-versioner hade bred lagringsåtkomst. Android 13 delade upp åtkomsten till delade medier i separata behörigheter för bilder, videor och ljud. Android 14 lade till åtkomst till utvalda foton, så att en app bara kan få de bilder och videor du väljer i stället för hela biblioteket.

Välj det smalaste alternativet. Ge en fotoredigerare valda foton, inte hela mediebiblioteket. Ge en musikapp åtkomst till ljud, inte alla filer. Var särskilt försiktig med åtkomst till alla filer, eftersom den särskilda behörigheten är avsedd för appar som filhanterare och säkerhetskopieringsverktyg.

## Enheter i närheten och wifi

Bluetooth- och närhetsbehörigheter kan vara legitima. Appar för hörlurar, smarta hem, klockor, högtalare och skrivare behöver dem ofta.

Android 13 lade också till en behörighet för wifi-enheter i närheten. Den gör att appar kan hantera wifi-anslutningar utan att få platsåtkomst för just det arbetet. Det är bättre än att lämna ut din plats bara för att en app ska hitta en skrivare eller ansluta till en lokal enhet.

Ge ändå inte närhetsåtkomst till appar som saknar en funktion för enheter i närheten.

## Tillgänglighet, överlägg och administratörsåtkomst

Här är riskzonen.

Åtkomst till tillgänglighetsfunktioner kan läsa skärminnehåll, följa interaktioner och utföra åtgärder åt användaren. Den behövs av riktiga hjälpmedel, vissa lösenordshanterare, automatiseringsverktyg och några andra stödappar. Skadlig kod missbrukar den också.

Visa över andra appar låter en app rita ovanpå skärmen. Chattbubblor och skärmfilter använder funktionen. Bedrägliga överlägg gör det också.

Enhetsadministratörsåtkomst kan göra en app svårare att ta bort. Företagshantering, föräldrakontroll och stöldskydd kan ha skäl att använda den. Ett spel har det inte.

Om en slumpmässig städapp ber om något av detta ska du avinstallera den.

## Granska behörigheter du redan har gett

Behörigheter är inte permanenta.

Öppna Inställningar > Säkerhet och integritet > Integritet > Behörighetshantering. På vissa telefoner finns motsvarande sida under Inställningar > Appar > Behörighetshantering. Välj Plats, Kamera, Mikrofon, Kontakter, Sms, Telefon eller Filer och ta bort åtkomst från appar som inte behöver den.

Sök också i Inställningar efter Särskild appåtkomst. Granska tillgänglighetsåtkomst, aviseringsåtkomst, visning över andra appar, enhetsadministratörsappar, installation av okända appar, användningsåtkomst och åtkomst till alla filer.

Android 11 och senare kan automatiskt återställa behörigheter för appar som du inte har använt på några månader. Google Play Protect kan också återställa behörigheter för sällan använda appar på Android 6 till Android 10. Det hjälper, men ersätter inte en egen genomgång.

## En praktisk kontrollista för behörigheter

När en fråga visas kan du ställa tre frågor.

Passar behörigheten den funktion jag precis öppnade?

Kan jag välja ett smalare alternativ, som åtkomst bara medan appen används, ungefärlig plats, valda foton eller engångsåtkomst?

Fungerar appen fortfarande om jag nekar?

Neka om du är osäker. Appen kan fråga igen när du använder en funktion som verkligen behöver behörigheten.
