---
title: "Så kontrollerar du lagringens skick i Android"
description: "Metabeskrivning: Android-lagring kan slitas ut, men de flesta telefoner visar ingen enkel procentsiffra för lagringens skick. Här ser du vad du kan kontrollera, vad siffrorna betyder och när det finns skäl att oroa sig."
listSummary: "lagring, android och rensning"
hub: "storage"
sourceNumber: 80
order: 2
tags: ["lagring","android","rensning","optimering","guide"]
locale: "sv"
draft: false
---
---

Hur vet du om lagringen i en Android-telefon är i gott skick, i stället för att bara se hur mycket utrymme som är ledigt? Irriterande nog gör de flesta telefoner det fortfarande inte lätt.

Lagringens skick och mängden ledigt utrymme är två olika problem. En telefon kan ha 80 GB ledigt och ändå ha ett försvagat NAND-chip. En nästan full telefon kan kännas långsam trots att lagringshårdvaran fungerar som den ska. De två sakerna blandas ständigt ihop, så börja med att skilja dem åt.

## Vad som sliter på telefonens lagring

Android-telefoner använder NAND-flashlagring. Budgetmodeller har ofta använt eMMC, medan telefoner i mellan- och toppklass vanligtvis använder UFS. Båda typerna slits genom programmerings- och raderingscykler. Varje gång data skrivs, raderas och skrivs om utsätts cellerna för lite slitage.

Styrenheten fördelar skrivningarna över chipet med slitageutjämning, vilket är anledningen till att normal telefonanvändning sällan tar död på lagringen snabbt. Foton, meddelanden, appuppdateringar och webbsurfning motsvarar inte att spela in material från en övervakningskamera dygnet runt.

Omfattande videoinspelning, ständiga spelinstallationer, upprepade fabriksåterställningar och nästan full lagring belastar mer. Det sista spelar roll eftersom styrenheten får färre fria block för städning och slitageutjämning. Det fungerar. Tills det inte gör det längre.

För de flesta är lagringsslitage inte det första som får telefonen att ge upp. Batteriet, skärmen, USB-C-porten eller programvarusupporten blir vanligtvis skälet att byta telefon tidigare. På rekonditionerade telefoner och hårt använda budgetmodeller blir lagringens skick mer intressant.

## Problemet med siffror för lagringens skick i Android

Det finns ingen allmän Android-inställning som säger att "92 % av lagringens livslängd återstår", på samma sätt som nyare Pixel-telefoner kan visa batterihälsa på modeller som stöds.

Android-ramverket har ett API för lagringens återstående livslängd. Det kan ge en uppskattad återstående andel för den interna lagringen, eller `-1` när uppgiften inte är tillgänglig. Haken är åtkomsten. I AOSP är API:t privilegierat och kräver `READ_PRIVILEGED_PHONE_STATE`, vilket innebär att vanliga appar från Google Play normalt inte kan använda det.

Vissa Pixel-versioner har visat lagringsstatus via Device diagnostics i Android 15 och senare, ofta genom dolda eller reparationsinriktade diagnostikvyer i stället för en vanlig sida i Inställningar. Samsung Members kan köra bredare enhetsdiagnostik på Galaxy-telefoner, men räkna inte med en tydlig procentsiffra för NAND-livslängd där.

Android 17 gör inte lagringens skick till en allmän konsumentinställning. Versionen finns nu för de flesta Pixel-enheter som stöds, medan andra tillverkare fortsätter att hantera diagnostiken genom sina egna Android-varianter. Skillnaderna mellan OEM-tillverkare spelar alltså fortfarande stor roll.

## Kontrollera lagringstypen först

Ta reda på vilken lagringstyp telefonen har innan du kör ett prestandatest. Läs tillverkarens specifikationer eller använd en hårdvaruapp som DevCheck och kontrollera lagringsavsnittet.

Som en grov tumregel använder billiga telefoner från de senaste åren ofta eMMC 5.1. Bättre modeller i mellanklassen använder UFS 2.2 eller UFS 3.1. Nyare flaggskepp har ofta UFS 4.0 eller UFS 4.1. UFS 5.0 har presenterats, men är inte standard i dagens telefoner.

Typen spelar roll eftersom en långsam telefon med eMMC och en telefon med försämrad UFS-lagring kan ge liknande testresultat av helt olika skäl.

## Mät lagringshastigheten försiktigt

Använd ett prestandatest för lagring, till exempel CPDT. Kör testet när telefonen är sval, har mer än 20 % batteri, inte blir varm av laddning och har minst 15-20 % ledigt lagringsutrymme. Kör sedan testet igen. Ett enda dåligt resultat bevisar ingenting.

Följande siffror är bara referenspunkter, inte gränser för godkänt eller underkänt:

Referensvärden för sekventiell läsning/skrivning: eMMC 5.1 kan hamna nära 250/100-125 MB/s, UFS 2.1 nära 850/250, UFS 3.1 nära 2 100/1 200 och UFS 4.0 nära 4 200/2 800.

Verkliga telefoner når inte alltid de siffrorna. Kapacitet, styrenhet, temperatur, kryptering, fast programvara, ledigt utrymme och själva testappen påverkar resultatet. En modell med 128 GB kan dessutom vara långsammare än 512 GB-versionen i samma telefonserie eftersom den har färre NAND-kretsar som arbetar parallellt.

Om resultatet är mycket lägre än väntat bör du först frigöra utrymme och testa igen efter en omstart. Om värdet fortfarande är lågt och telefonen dessutom fryser vid installationer, filflyttar, kamerasparningar eller appuppdateringar blir lagringens skick en verklig misstänkt.

## Tecken som pekar på lagringsproblem

Lagringsproblem känns annorlunda än vanlig långsamhet i en gammal telefon.

Appar kan installeras eller uppdateras plågsamt långsamt. Kameran kan stanna upp efter varje foto medan filen sparas. Telefonen kan hänga sig när filer kopieras, raderas eller flyttas. Starten kan ta mycket längre tid än tidigare. Stora spel kan behöva verifiera eller reparera filer oftare.

Allvarligare tecken är svårare att bortförklara: skadade foton, dokument som inte går att öppna, appar som kraschar när de skriver filer, felmeddelanden om att lagringen inte går att skriva till trots ledigt utrymme eller en telefon som ibland inte startar.

Säkerhetskopiera omedelbart om du ser tecken på datakorruption. Kör inte benchmarktester i en timme medan viktig information fortfarande bara finns på den telefonen.

## Kontroller som kräver root

Rootade enheter kan ibland läsa tillståndsdata på lägre nivå från sysfs. På eMMC-enheter kan livslängdsuppskattningar finnas i Extended CSD-värden under sökvägar som `/sys/class/mmc_host/mmc0/mmc0:*/life_time`. På UFS-enheter kan hälsodeskriptorer finnas under `/sys/class/scsi_device/` eller i närliggande tillverkarspecifika sökvägar.

Det här är inte normalt användarråd. Sökvägarna varierar, SELinux blockerar åtkomst på telefoner med standardprogramvara och värdena är lätta att misstolka. Om telefonen redan är rootad och du vet vad du gör kan uppgifterna vara användbara. Om den inte är det ska du inte roota den bara för att kontrollera lagringens skick.

## Så minskar du belastningen på lagringen

Håll 15-20 % av den interna lagringen ledig. På en telefon med 128 GB motsvarar det ungefär 20 GB. På en telefon med 256 GB är 40 GB en bekväm marginal, även om du inte behöver stirra dig blind på den exakta siffran.

Använd inte fabriksåterställning som rutinunderhåll. En återställning för att reda ut en stökig telefon är rimlig. Månatliga återställningar är meningslöst slitage och återskapar vanligtvis samma lagringsproblem när allt installeras igen.

Spela bara in långa videor till extern lagring om telefonen och kameraappen stöder det ordentligt. Om du använder ett SD-kort bör medier ligga där, inte appar. Appar hör fortfarande hemma i den interna lagringen eftersom UFS är mycket snabbare och mer tillförlitligt än de flesta microSD-kort.

Om du använder runcheck bör du följa lagringstrycket över tid i stället för att stirra på en enda siffra. Lagringsavsnittet visar kapacitetsanvändningen, och tillsammans med batteritemperatur och andra signaler om enhetens skick blir det lättare att skilja en full telefon från ett möjligt hårdvaruproblem.
