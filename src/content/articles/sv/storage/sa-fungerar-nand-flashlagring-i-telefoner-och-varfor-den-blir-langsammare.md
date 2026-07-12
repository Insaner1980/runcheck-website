---
title: "Så fungerar NAND-flashlagring i telefoner och varför den blir långsammare"
description: "Telefoner använder NAND-flashminne. Läs varför nästan full lagring försämrar prestandan, vad TRIM och garbage collection gör och hur lagringen kan behålla god I/O-prestanda."
listSummary: "Telefoner använder NAND-flashminne."
hub: "storage"
sourceNumber: 89
order: 11
tags: ["prestanda","hastighet","android","optimering","felsökning"]
locale: "sv"
draft: false
---
En telefon kan ha en snabb SoC, gott om RAM och ändå kännas trög när lagringen nästan är full. Appar dröjer innan de öppnas. Kameran behöver ett extra ögonblick för att spara ett foto. Uppdateringar tar längre tid än de borde.

Det är inte alltid processorns fel. Ibland är lagringen flaskhalsen.

## Så arbetar NAND-flash

Telefoner lagrar appar, foton, meddelanden, cacheminnen och systemdata på NAND-flashkretsar som är fastlödda på moderkortet. En telefon som säljs med 128 GB ger dig aldrig hela 128 GB för egna filer, eftersom Android, systempartitioner, återställningsdata, reserverat utrymme och filsystemets overhead tar sin del först.

NAND lagrar data som elektrisk laddning i mycket små celler. Cellerna är ordnade i sidor, och sidorna grupperas i större raderingsblock. Det besvärliga är att NAND kan skriva till tomma sidor, men inte skriva över en använd sida direkt.

När data ska uppdateras skriver styrenheten den nya versionen någon annanstans, markerar den gamla sidan som ogiltig och uppdaterar sin mappningstabell. Senare, under städningen, samlar den ihop de sidor i ett block som fortfarande är giltiga, flyttar dem vid behov och raderar det gamla blocket så att det kan användas igen.

Den städningen kallas garbage collection. Den är helt normal. Den är också en av anledningarna till att en nästan full telefon känns sämre än samma telefon med gott om marginal.

## Varför full lagring känns långsam

När lagringen har gott om tomma block är det enkelt att skriva data. Styrenheten kan välja ett rent område och fortsätta.

När lagringen är nästan full finns färre rena block att tillgå. Styrenheten måste arbeta hårdare för att hitta plats, flytta giltiga data, radera block och därefter skriva nya data. Det extra interna arbetet kallas skrivförstärkning, eller write amplification, och kan märkas som små pauser i vardagen.

Du kan lägga märke till det när du installerar appar, sparar videor, hämtar uppdateringar eller växlar mellan appar som har stora cacheminnen. En telefon där 95 % av lagringen används kan kännas mycket äldre än den faktiskt är.

Den praktiska tumregeln är enkel: försök hålla minst 15-20 % av den interna lagringen ledig. Det är ingen magisk gräns, och olika lagringsstyrenheter beter sig på olika sätt, men det fria utrymmet ger Android och styrenheten arbetsmarginal.

## TRIM, garbage collection och tid i viloläge

När du raderar en fil töms inte omedelbart varje NAND-cell som innehöll filen. Android markerar filen som raderad i filsystemet. Styrenheten behöver fortfarande få veta vilka underliggande block som kan städas.

TRIM är signalen som hjälper till med det. I Android hanteras underhållet genom `fstrim` och lagringsunderhåll i viloläge. Systemet talar om för lagringslagret vilka block som inte längre behövs, så att garbage collection kan återvinna dem senare.

Därför kan det hjälpa att låta telefonen ligga oanvänd och ansluten till laddaren efter en större städning. Du raderar filer, Android får möjlighet att köra underhåll och styrenheten får tid att ordna upp lagringen. Förvänta dig inget mirakel efter fem minuter. Arbetet sker i bakgrunden.

Nej, du ska inte defragmentera telefonens lagring. Defragmentering var till för roterande hårddiskar. På NAND-flash skapar den onödiga skrivningar och löser inte det verkliga problemet.

## SLC, MLC, TLC och QLC enkelt förklarat

NAND-celler kan lagra olika mängder data per cell.

SLC lagrar en bit i varje cell. Det är snabbt och hållbart, men för dyrt för vanlig telefonlagring.

MLC lagrar två bitar. Det var vanligare i äldre lagring för dyrare enheter, men har till stor del ersatts av tätare NAND.

TLC lagrar tre bitar i samma cell. Det är vanligt i modern konsumentlagring eftersom det ger en tillräckligt bra balans mellan kostnad, kapacitet och hastighet för telefoner.

QLC lagrar fyra bitar. Det ger högre densitet och lägre kostnad per gigabyte, men sämre uthållighet. Telefontillverkare anger sällan exakt vilken celltyp de använder, så anta inte att du vet vad som sitter i en enhet enbart utifrån lagringskapaciteten.

När mer data packas i varje cell måste spänningsnivåerna läsas mer noggrant och mer felkorrigering användas. Det är kompromissen. Moderna styrenheter döljer det mesta av besväret med wear leveling, ECC, reservutrymme och cachelagring.

## UFS jämfört med eMMC spelar större roll än många tror

Lagringsgränssnittet är lika viktigt som själva NAND-minnet.

Många äldre och billigare Android-telefoner använder eMMC. Det är enkelt och billigt, men hanterar inte tung multitasking lika bra. Samsungs eMMC 5.1-kretsar angavs till exempel för sekventiell läsning på upp till 250 MB/s och sekventiell skrivning på upp till 125 MB/s när generationen lanserades.

UFS är den nyare standarden för telefonlagring. Den har stöd för kommandoköer och full duplex, vilket gör att läsningar och skrivningar kan hanteras effektivare under belastning. Enheter med UFS 3.1 anges ofta med sekventiella läshastigheter på omkring 2 100 MB/s. UFS 4.0 fördubblade den marknadsförda topphastigheten till 4 200 MB/s vid sekventiell läsning i Samsungs första presenterade UFS 4.0-lagring.

Det är bästa möjliga sekventiella värden, inte ett löfte om att varje app öppnas dubbelt så snabbt. Skillnaden är ändå verklig. En billig telefon med eMMC kan kännas långsammare under uppdateringar, appinstallationer och bildserier med kameran även om processorn ser bra ut på papperet.

## Så märks slitage på lagringen

NAND slits när block går igenom programmerings- och raderingscykler. Styrenheten sprider skrivningarna så att ett område inte ska slitas ut i förtid. Det kallas wear leveling.

Vid normal telefonanvändning tar det vanligtvis flera år innan lagringsslitage blir viktigt. De flesta hinner fylla lagringen, installera uppdateringar, spela in video och rensa cacheminnen långt innan NAND-uthålligheten är huvudorsaken till att telefonen känns dålig. Tunga skrivbelastningar är annorlunda. En enhet som används för ständig loggning, videoinspelning eller testning kan slita lagringen snabbare.

Android ger inte de flesta användare ett tydligt procentvärde för lagringens skick. Vissa tillverkares serviceverktyg visar mer information, men det är inte konsekvent. Symtomen är mindre dramatiska: långsamma appinstallationer, långa spartider, fördröjningar när filer skrivs och dålig prestanda även efter att du har frigjort utrymme och tagit bort uppenbar bakgrundsbelastning.

## Så håller du telefonens lagring i gott skick

Behåll ledigt utrymme. Det är det tråkiga svaret, och fortfarande det bästa.

Undvik lagringsrensare som lovar mirakulösa hastighetsökningar. Många raderar bara cacheminnen som Android snart bygger upp igen. Ännu värre är att vissa fortsätter köras i bakgrunden och skapar mer störning än nytta.

Radera gamla nedladdningar, ta bort appar du inte använder, flytta stora videor från telefonen och låt enheten ligga oanvänd på laddaren efter en större städning. Om telefonen stöder SD-kort bör du använda det för mediefiler, inte för appar med höga krav på storage I/O.

Appar som runcheck kan hjälpa genom att visa hur lagringstrycket förändras över tid i stället för att behandla lagringen som ett enstaka värde. Trenden spelar roll, eftersom en telefon som långsamt går från 70 % till 94 % använd lagring tydligt visar varför den börjar kännas sämre.
