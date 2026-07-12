---
title: "Intern lagring eller SD-kort: vad ska sparas var?"
description: "Ett microSD-kort kan ge en Android-telefon mer utrymme, men det är inte samma sak som intern lagring. Det är där många tänker fel. Mer utrymme och snabbt utrymme är två olika saker."
listSummary: "Ett microSD-kort kan ge en Android-telefon mer utrymme, men det är inte samma sak som intern lagring."
hub: "storage"
sourceNumber: 86
order: 8
tags: ["lagring","android","rensning","optimering","guide"]
locale: "sv"
draft: false
---
Det spelar större roll 2026 eftersom lagringen i Android-telefoner är uppdelad mellan mycket olika typer av maskinvara. Många flaggskepp och telefoner i mellanklassen saknar helt plats för microSD. Pixel-telefoner har ingen kortplats, Samsung tog bort den från Galaxy S-serien för flera år sedan och flera nyare Galaxy A-modeller saknar den också. Samtidigt har många äldre Galaxy A- och M-modeller, Motorola Moto G-telefoner och Sony Xperia-telefoner fortfarande stöd för microSD.

Kontrollera alltid den exakta modellen. Det räcker inte att bara känna till produktserien.

## Hastighetsskillnaden är verklig

Intern lagring i moderna Android-telefoner använder vanligtvis UFS. Dagens toppmodeller använder ofta UFS 4.x, och Samsungs UFS 4.0 är specificerad för läshastigheter på upp till 4 200 MB/s och skrivhastigheter på upp till 2 800 MB/s. Äldre telefoner i mellanklassen med UFS 2.1 kan fortfarande nå omkring 850 MB/s vid sekventiell läsning.

Ett vanligt microSD-kort är mycket långsammare. Även ett bra UHS-I-kort ligger normalt närmare hastigheterna för extern lagring än den interna lagringen i en telefon. Märkningen på kortet kan också vara missvisande. V30 betyder att kortet är klassat för en kontinuerlig skrivhastighet på omkring 30 MB/s, vilket är användbart vid videoinspelning. Det gör däremot inte den flyttbara lagringen lika snabb som UFS när en app gör tusentals små läsningar och skrivningar.

Skillnaden i slumpmässig åtkomst är anledningen till att appar ofta fungerar sämre från ett SD-kort.

## Behåll appar i den interna lagringen

Appar bör ligga i den interna lagringen när det är möjligt. Appstarter, databaser, bakgrundssynkronisering, aviseringar, miniatyrbilder och cacheminnen använder lagringen hela tiden. Lägger du allt detta på ett långsamt kort märks det som fördröjningar.

Android kan flytta vissa appar till ett SD-kort som har formaterats som intern lagring eller till annan extern lagring, men bara om både appen och enheten tillåter det. För att en app ska kunna placeras på ett sådant kort måste utvecklaren ha aktiverat stöd via attributet android:installLocation. Många appar saknar det stödet.

Spel är det område där det är mest lockande att försöka kringgå begränsningen. Ett spel på 15 GB ser ut som en perfekt kandidat för SD-kortet. I praktiken blir laddningstiderna längre, uppdateringarna tar mer tid och vissa spel vägrar helt enkelt att flyttas. Om du väljer vad som ska tas bort är det oftast bättre att avinstallera ett spel du inte använder än att försöka köra det från ett kort.

## Lägg mediefiler på SD-kortet

Foton, videor, musik, poddar, filmer, offlinekartor, PDF-filer och arkiverade filer passar bättre på SD-kort. De läses i större block och behöver inte samma snabba slumpmässiga åtkomst som appar.

Om kameraappen har stöd för det kan du ange SD-kortet som lagringsplats. Kameraappar från Samsung, Motorola och Sony har haft det alternativet på många modeller med kortplats, men den exakta sökvägen varierar mellan modeller och Android-versioner. Leta efter **Camera settings > Storage location** eller ett liknande alternativ.

Även streamingappar kan låta dig spara nedladdat innehåll på SD-kortet. Netflix, Spotify, YouTube och kartappar har ändrat sina inställningar genom åren, så kontrollera inne i appen i stället för att anta att Android styr detta centralt.

Det finns en hake. Om kortet går sönder försvinner också åtkomsten till fotona och nedladdningarna på det. Säkerhetskopiera allt viktigt till molnet, en dator eller någon annan lagringsplats.

## Att använda SD-kortet som intern lagring låter bättre än det fungerar

Android 6.0 införde adoptable storage. Funktionen låter Android formatera och kryptera ett SD-kort så att det fungerar mer som intern lagring. Kortet knyts till just den telefonen, och Android kan lagra appar och privata data på det.

På papperet verkar det lösa problemet med liten intern lagring. I verkligheten är det en kompromiss. Ett långsamt kort kan göra telefonen trög, och om kortet går sönder kan Android förlora data som systemet räknar med ska finnas tillgängliga. Om du tar bort ett sådant kort utan att mata ut det korrekt kan appar eller data på kortet också sluta fungera.

Android varnar på vissa enheter om ett kort är långsamt när det konfigureras, men varningen gör inte långsam lagring snabbare. Den ger dig bara en chans att tänka om innan du fortsätter.

Möjligheten att formatera ett SD-kort som intern lagring finns inte heller överallt. Vissa tillverkare döljer eller inaktiverar funktionen, särskilt på telefoner där upplevelsen skulle bli dålig. Om alternativet saknas kan det vara tillverkarens beslut, inte något du har gjort fel.

## Portabelt lagringsutrymme är det säkrare standardvalet

Portabelt lagringsutrymme innebär att kortet förblir en separat enhet. Du kan ta ut det, läsa det på en dator, flytta filer till och från det och främst använda det för mediefiler.

För de flesta är detta den bättre lösningen. Behåll appar och appdata i telefonen. Spara kameramaterial, musik för offlinelyssning, filmer, dokument och säkerhetskopior på kortet. Det är mindre avancerat, men fel uppstår på ett mer hanterbart sätt.

Enkelt är bra här.

## När den interna lagringen nästan är full

Om den interna lagringen blir mycket full kan telefonen kännas långsammare. Flashlagring behöver lediga block för skrivningar och intern städning, och Android behöver också utrymme för appuppdateringar, systemuppdateringar, cacheminnen och tillfälliga filer. En telefon med 128 GB kan fortfarande fungera dåligt om de sista gigabyten hela tiden måste delas mellan olika uppgifter.

Börja med **Inställningar > Lagring**. Om foton och videor tar mest plats kan du flytta dem till kortet eller molnet. Om appar dominerar kan du avinstallera sådant du inte använder och rensa cacheminnet för de värsta utrymmestjuvarna. Om mappen Downloads är full kan du radera gamla installationsfiler, ZIP-filer, PDF-filer och exporterade videor.

Att flytta en appikon till flyttbar lagring är sällan den enkla lösning som många hoppas på.

## Hastighetsmärkningar på SD-kort, enkelt förklarat

Class 10 och U1 räcker för vanliga foton, musik och dokument.

V30 är ett säkrare val för inspelning i 4K eftersom märkningen gäller kontinuerlig skrivhastighet.

A1 och A2 gäller apprestanda. De är främst relevanta om du trots allt använder adopterad lagring eller kör arbetsbelastningar som liknar appanvändning från kortet. De gör inte microSD lika snabbt som UFS.

Köp kort från kända varumärken och undvik misstänkt billiga kort med hög kapacitet. Förfalskade kort är fortfarande vanliga, och felet visar sig på ett obehagligt sätt: kortet ser stort ut tills äldre filer börjar skadas.

## Om telefonen saknar SD-kortplats

Använd molnlagring för foton och videor, flytta stora filer till en dator eller använd ett USB-C-minne med USB OTG för tillfälliga överföringar. Därefter är svaret ganska tråkigt: avinstallera appar du inte använder, rensa cacheminnen som har vuxit okontrollerat, radera gamla filer i Downloads och undvik att köpa en telefon med för lite lagring nästa gång.

Det sista låter rättframt eftersom det är sant. En Android-telefon med 64 GB kan fortfarande fungera 2026, men det blir ont om utrymme för videor, spel, offlinekartor och flera års mediefiler från chattar.
