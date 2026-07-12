---
title: "Androids Doze-läge förklarat: så sparar mobilen batteri medan den vilar"
description: "Metabeskrivning: Androids Doze-läge minskar batteriförbrukningen i viloläge genom att skjuta upp bakgrundsarbete när mobilen inte används. Här ser du vad som begränsas, varför aviseringar kan komma sent och när en app bör undantas."
listSummary: "batteri, optimering och android"
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Drain"
tags: ["batteri","optimering","android","tips","prestanda"]
locale: "sv"
draft: false
---
Varför kom tio aviseringar precis när du tog upp mobilen? Ofta är svaret Doze.

Doze är Androids inbyggda system för vila. Du aktiverar det inte själv, och de flesta ser aldrig någon särskild Doze-sida i Inställningar. Funktionen arbetar tyst när mobilen inte laddas, skärmen är avstängd och Android bedömer att apparna inte längre ska få köra när de vill.

Android 17 är nu den aktuella plattformsversionen på de flesta Pixel-enheter som stöds, medan andra tillverkare följer sina egna tidsplaner. Det förändrar inte de grundläggande råden om Doze. Det som spelar roll för användaren är fortfarande färre väckningar i bakgrunden, längre batteritid i vila och ibland försenade aviseringar som inte är brådskande.

## Vad Doze gör

När Doze är aktivt begränsar Android de resurskrävande aktiviteterna. Appar förlorar normal nätverksåtkomst. Vanliga larm skjuts upp. Jobb och synkronisering väntar. Wake locks ignoreras under de djupare vilofaserna. Wifi-sökningar stoppas också under Doze.

Enheten är inte fryst för alltid. Android öppnar korta underhållsfönster där uppskjutet arbete får köras samlat. Appar synkroniserar, köade uppgifter körs och aviseringar med normal prioritet kan visas. Sedan går Android tillbaka till viloläget.

Det är hela knepet. Att samla bakgrundsarbetet i omgångar kräver mycket mindre energi än att låta varje app väcka CPU:n och radion när den själv vill.

## När Doze aktiveras

Doze introducerades i Android 6.0 (API 23). Den ursprungliga versionen krävde att enheten inte laddades, låg stilla och hade haft skärmen avstängd en stund. Android 7.0 lade till beteendet som brukar kallas "Doze on the go". Det använder lättare begränsningar när mobilen inte laddas och skärmen har varit avstängd, även om enheten rör sig i fickan.

I praktiken får moderna Android-mobiler vanligtvis hjälp på två nivåer. Lättare vilobegränsningar används medan mobilen bärs omkring, och djupare begränsningar aktiveras när den har legat stilla en längre stund.

Tillverkarnas programvara kan göra det hela rörigare. Pixel ligger ofta nära Googles referensbeteende. Samsung, Xiaomi, OnePlus, Oppo och andra lägger egna batterihanteringslager ovanpå. Ibland hjälper det. Ibland blir hanteringen för aggressiv och aviseringar slutar fungera som de ska.

## Vad som fördröjs

Den tydligaste fördröjningen gäller synkronisering i bakgrunden. E-post kanske inte kontrolleras lika ofta. En anteckningsapp kan synkroniseras senare. En väderwidget kan uppdateras under nästa underhållsfönster i stället för omedelbart.

Arbete som utvecklare har schemalagt påverkas också. Uppgifter från `JobScheduler` och `WorkManager` väntar i allmänhet medan Doze är aktivt. Vanliga larm från `AlarmManager` skjuts också upp, men användarens väckarklockslarm ska fortfarande utlösas i tid.

Samtal och SMS ska inte behöva vänta på ett underhållsfönster. Firebase Cloud Messaging (FCM)-meddelanden med hög prioritet kan också väcka en app en kort stund så att den kan visa en tidskänslig avisering. Därför känns WhatsApp, Signal, Telegram och liknande appar vanligtvis fortfarande omedelbara, förutsatt att appen och tillverkarens batteriinställningar är rätt konfigurerade.

Pushmeddelanden med normal prioritet fungerar annorlunda. Om appen använder dem för bakgrundsuppdatering eller mindre brådskande aviseringar kan Android hålla kvar dem till nästa underhållsfönster.

## Varför aviseringar kommer sent

Sena aviseringar är inte alltid ett fel. Ofta är de den kompromiss som Doze är konstruerat för att göra.

En kampanj från en leveransapp, en gilla-markering i sociala medier eller en nyhetsavisering kan vänta några minuter om det hjälper mobilen att vila. Ett jobbmeddelande, larm, inkommande samtal eller en säkerhetsvarning bör inte göra det. Bra appar använder rätt prioritet för rätt slags meddelande. Dåliga appar begär antingen för hög prioritet eller använder inte FCM på rätt sätt och förlitar sig på återkommande kontroller i bakgrunden.

Det irriterande är att användaren inte får någon tydlig förklaring. Du ser bara att meddelanden kommer sent och måste själv arbeta bakåt för att hitta orsaken.

Börja med appens egna aviseringsinställningar. Kontrollera sedan mobilens batteriinställningar för appen. På Pixel finns de under **Inställningar > Appar > [appnamn] > Batteriförbrukning för appen**. På Samsung kontrollerar du **Inställningar > Enhetsvård > Batteri > Begränsa bakgrundsanvändning** och ser till att appen inte ligger bland **Appar i viloläge** eller **Appar i djupviloläge**.

## Undanta appar från Doze

Android låter dig undanta vissa appar från batterioptimeringen. Den vanliga sökvägen i standardversionen är **Settings > Apps > Special app access > Battery optimization**. Välj appen och sedan **Don't optimize**, eller motsvarande alternativ på din mobil.

Var selektiv. Varje undantag ger en app större frihet att köras i bakgrunden, och för många undantag gör Doze mindre användbart. Meddelandeappar, VPN-tjänster, medicinska appar, säkerhetsappar och vissa jobbappar kan vara rimliga kandidater. En shoppingapp är det inte.

Google Plays policy begränsar också när appar bör be användaren att undanta dem från Androids energihantering. Den enkla versionen är att undantaget bör reserveras för appar vars kärnfunktion inte fungerar utan det.

## Så ser du om Doze hjälper

Det enklaste testet för en vanlig användare är batteriförbrukningen över natten. Ladda mobilen, koppla ur den före läggdags, låt skärmen vara avstängd och kontrollera minskningen på morgonen. Att förlora några procent under natten är normalt. Om mobilen tappar 15 % eller 25 % med släckt skärm är det något som väcker den för ofta, signalen är dålig eller batteriet har börjat åldras.

Batteristatistiken säger inte alltid att "Doze misslyckades". Den kan visa Android System, Google Play-tjänster, mobilnät eller en otydlig apppost. Därför säger förbrukningstakten med släckt skärm mer än ett enskilt batteridiagram. Om mobilen tappar mer än ungefär 1-2 % per timme i vila är det värt att undersöka.

Utvecklare kan testa Doze via ADB med `adb shell dumpsys deviceidle force-idle`, men det är ett testverktyg, inte en vanlig inställning för daglig användning.

## Vanliga frågor

Du kan inte stänga av Doze i Androids vanliga inställningar, och du bör förmodligen inte försöka. Funktionen är en viktig anledning till att moderna Android-mobiler kan ligga oanvända i flera timmar utan att tömma batteriet.

Doze fungerar när mobilen ligger i fickan, men inte alltid på den djupaste nivån. Android 7.0 och senare använder lättare begränsningar när skärmen är avstängd och enheten rör sig. Det djupare läget kräver fortfarande längre perioder av inaktivitet.

Larm från klockappen utlöses fortfarande. Det är appars bakgrundslarm som flyttas till underhållsfönstren, om de inte använder API:er som är avsedda för larm som måste köras även i viloläge.

Om en mobil har sämre batteritid i vila än en annan ska du inte direkt anta att Doze-läget är trasigt. Signalstyrka, OEM-tillverkarens batteripolicy, vilka appar som är installerade, kontosynkronisering, widgetar och batteriets ålder kan få två Android-mobiler att bete sig mycket olika.

runcheck kan hjälpa genom att skilja förbrukning med tänd skärm från förbrukning med släckt skärm och visa om viloperioder sammanfaller med nätverksaktivitet, värme eller bakgrundsarbete. Det är mycket mer användbart än att gissa utifrån en enda procentsiffra efter natten.
