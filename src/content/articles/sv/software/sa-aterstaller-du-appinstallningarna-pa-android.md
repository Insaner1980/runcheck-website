---
title: "Så återställer du appinställningarna på Android"
description: "Att återställa appinställningarna låter som något som borde radera viktig information. Det gör det inte. Det här är en av Androids säkrare felsökningsåtgärder, och den löser fler konstiga appproblem än många tror."
listSummary: "Att återställa appinställningarna låter som något som borde radera viktig information."
hub: "software"
sourceNumber: 128
order: 10
tags: ["säkerhet","skadlig-programvara","android","integritet","guide"]
locale: "sv"
draft: false
---
Haken är att namnet är dåligt. Funktionen återställer inte apparna. Den återställer telefonens systemval kring behörigheter, standardappar, aviseringar, bakgrundsbeteende och inaktiverade appar. Foton, meddelanden, filer, sparade konton och appdata ligger kvar.

## Vad som återställs

Bekräftelserutan i Androids Inställningar har i flera år räknat upp samma grundpunkter: inaktiverade appar, inaktiverade appaviseringar, standardappar för olika åtgärder, begränsningar för bakgrundsdata och behörighetsbegränsningar. På aktuella Android-versioner kan dialogrutan även nämna inställningar för batterianvändning, så bli inte förvånad om din telefon har med den raden.

I praktiken kan följande ändras:

- Appar som du har inaktiverat kan aktiveras igen. Det gäller även vissa förinstallerade appar och systemappar som du själv har stängt av.
- Val av standardappar rensas. Länkar, PDF-filer, startskärmsappar, telefonsamtal, sms och liknande åtgärder kan fråga vilken app du vill använda igen.
- Blockeringar av appaviseringar återställs. Appar som du har tystat kan börja skicka aviseringar tills du stänger av dem på nytt.
- Begränsningar för bakgrundsdata tas bort. Appar som inte fick använda mobildata i bakgrunden kan få tillbaka den åtkomsten.
- Behörighetsbegränsningar återställs. Appar kan fråga igen efter kamera, mikrofon, plats, foton, aviseringar eller åtkomst till enheter i närheten när de behöver det.
- Begränsningar för batterianvändning kan återställas på Android-versioner och tillverkarvarianter där de ingår i funktionen.

Det som inte händer är minst lika viktigt. Funktionen avinstallerar inte appar, raderar inte appdata, tar inte bort filer eller foton, tömmer inte meddelanden eller hämtade filer och loggar inte ut dig från alla tjänster. Om du var inloggad i WhatsApp, Instagram, en bankapp eller Gmail före återställningen är själva återställningen inte avsedd att logga ut dig.

Det är hela poängen. Det är en bred återställning av inställningar, inte en radering av data.

## När det är värt att prova

Använd återställning av appinställningar när problemet verkar omfatta hela systemet men inte är tillräckligt allvarligt för en fabriksåterställning.

Länkhantering är ett vanligt exempel. Du trycker på en länk och den öppnas i fel webbläsare, i en app du inte använder eller inte alls. Att rensa standardvalet för en enskild app kan lösa det, men en full återställning av appinställningarna går snabbare när standardvalen har blivit röriga.

Funktionen är också användbar om du har inaktiverat flera förinstallerade appar och något sedan börjar gå sönder. Android-appar är ofta beroende av tråkiga bakgrundskomponenter med namn som ingen känner igen. Du stänger av en, en annan app kraschar och sambandet är inte uppenbart. När appinställningarna återställs aktiveras inaktiverade appar igen, så att du kan testa om det var orsaken.

Aviseringar är ett annat bra fall. Androids aviseringssystem har fått fler kontroller per app genom åren, bland annat en behörighetsfråga för aviseringar på nyare versioner. Om en enda app har slutat avisera ska du åtgärda just den appen. Om flera appar tystnar samtidigt efter en uppdatering är en global återställning ett rimligt mellansteg.

Jag skulle inte använda det som rutinunderhåll. Det finns ingen vinst med att återställa appinställningarna varje månad. Gör det när något faktiskt är trasigt.

## Så återställer du appinställningarna

Sökvägen skiljer sig något mellan Pixel, Samsung, Xiaomi, Motorola, OnePlus och andra Android-varianter. Alternativet finns vanligtvis i närheten av inställningarna för appar eller systemåterställning.

På Pixel-telefoner och många telefoner med en Android-liknande layout kan du hitta det på något av två ställen, beroende på version: under Inställningar > System > Återställningsalternativ eller via Inställningar > Appar > Visa alla appar och menyn med tre punkter. Välj alternativet som återställer appinställningarna och bekräfta.

På Samsung Galaxy öppnar du Inställningar och sedan Appar. Öppna menyn med tre punkter, välj alternativet för att återställa appinställningarna och bekräfta. Ordvalet och menyplaceringen kan ändras mellan olika One UI-versioner, men Appar är fortfarande rätt ställe att börja.

På Xiaomi, Redmi och POCO börjar du i Inställningar och öppnar avsnittet för appar och apphantering. Återställningen ligger vanligtvis bakom menyn med tre punkter.

Om du inte hittar den kan du använda sökfältet i Inställningar och söka efter ord som "återställ" och "appinställningar". Vissa versioner placerar funktionen under System och återställningsalternativen, särskilt när sidan för appar har gjorts om.

Återställningen börjar gälla direkt. Du behöver inte starta om telefonen, men en omstart efteråt skadar inte om du felsöker ett envisare problem.

## Vad som händer efteråt

Under den närmaste dagen eller två kan telefonen ställa fler frågor än vanligt. Trycker du på en länk kan Android fråga vilken webbläsare som ska användas. Öppnar du en PDF-fil kan du få välja mellan Drive, Acrobat, webbläsaren eller någon annan app. En app som behöver kameran eller platsen kan visa en behörighetsfråga igen.

Det är normalt.

Den irriterande delen är att återställa de val du gjorde med avsikt. Om du inaktiverade operatörsappar, dubbla galleriappar, extra webbläsare eller annan onödig förinstallerad programvara behöver du gå tillbaka till Inställningar och Appar och stänga av dem igen. Om du hade strikta aviseringsregler bör du kontrollera de appar som spelar roll. Om du begränsar mobildata för sociala appar eller videoappar behöver du även granska de inställningarna.

Det är därför återställning av appinställningar är säker men inte osynlig. Den förstör inte dina data, men den gör en del av ditt tidigare arbete ogjort.

## Jämförelse med andra återställningar

Att rensa en apps cache tar bort tillfälliga filer för en enda app. Prova det när en app är långsam, beter sig konstigt eller visar gammalt innehåll.

Att rensa appens lagringsutrymme är ett större ingrepp. Det återställer appens interna data och kan därför logga ut dig eller ta bort lokala inställningar. Använd det försiktigt.

Att återställa appinställningarna ligger mitt emellan. Det påverkar alla appar, men bara deras inställningar på systemnivå. Därför är funktionen användbar när telefonen har flera mindre appproblem och du inte hittar en tydlig orsak.

En fabriksåterställning är något helt annat. Den raderar telefonen och börjar om med den Android-version som redan är installerad. Hoppa inte dit bara för att länkar öppnas på fel ställe.

## Vanliga frågor

Loggar det ut mig från appar? Nej, inte i sig. Det rensar inte appens lagringsutrymme och tar inte bort kontodata.

Kan det lösa batteriförbrukning? Ibland indirekt. Om en inaktiverad systemapp eller en alltför hårt begränsad behörighet fick appar att försöka utföra bakgrundsarbete om och om igen kan återställningen hjälpa. Om batteriet är utslitet eller en app faktiskt använder mycket ström löser den inget mirakulöst.

Måste jag ge behörigheter igen? Ja, för vissa appar. De kan fråga igen när de behöver åtkomst.

Bör jag göra detta före en fabriksåterställning? Ja, om problemet gäller appbeteende och inte en låst telefon, allvarligt skadad programvara eller maskinvarufel. Det tar en minut och raderar inte ditt digitala liv.
