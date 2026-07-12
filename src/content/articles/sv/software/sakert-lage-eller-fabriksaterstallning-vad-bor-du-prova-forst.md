---
title: "Säkert läge eller fabriksåterställning: vad bör du prova först"
description: "Prova säkert läge före en fabriksåterställning."
listSummary: "Prova säkert läge före en fabriksåterställning."
hub: "software"
sourceNumber: 130
order: 12
tags: ["prestanda","hastighet","android","optimering","felsökning"]
locale: "sv"
draft: false
---
Rådet låter nästan för enkelt, men det är rätt svar vid de flesta Android-problem. Säkert läge är snabbt, går att lämna och raderar ingenting. En fabriksåterställning tömmer telefonen och kan förvandla ett femminutersproblem till en hel kväll med ominstallation av appar, återställning av konton och jakt på inställningar du hade glömt att du ändrade.

Säkert läge först. Återställning sist.

## Vad säkert läge visar

Säkert läge startar Android med hämtade appar inaktiverade. Telefonen fungerar fortfarande, men appar som du installerade från Google Play eller sideloadade är inte aktiva. Förinstallerade systemappar finns kvar, så du kan testa samtal, meddelanden, wifi, grundläggande inställningar och de delar av Android som behövs för att diagnostisera problemet.

Säkert läge är ingen lösning. Det är ett test.

Det svarar på en fråga: orsakas problemet av en hämtad app? Om telefonen slutar frysa, överhettas, krascha eller tömma batteriet i säkert läge är en app troligen inblandad. Om samma problem fortsätter handlar det snarare om operativsystemet, en förinstallerad app, en inställning eller maskinvaran.

Den uppdelningen sparar tid. Utan den hoppar människor direkt till fabriksåterställning eftersom telefonen känns trasig. Ofta är den verkliga orsaken en tveksam städapp, en startskärmsapp, ett VPN, en batterioptimerare eller en speluppdatering som gick snett.

## Så startar du säkert läge

Den exakta knappvägen beror på telefonen.

På många Android-telefoner öppnar du strömmenyn och håller sedan Stäng av eller Starta om nedtryckt på skärmen. När frågan om säkert läge visas trycker du på OK.

På Pixel 6 och senare, inklusive Fold-modeller, anger Google att du ska hålla av/på-knappen och knappen som höjer volymen nedtryckta i några sekunder. Håll sedan Stäng av eller Starta om nedtryckt på skärmen och tryck på OK. På Pixel 5a och äldre kan den vanliga strömknappsvägen räcka. Om telefonen redan är avstängd startar du den och håller Volym ned nedtryckt medan startanimationen visas, tills säkert läge öppnas.

På Samsung Galaxy håller du strömbrytaren eller den sidoknappskombination som öppnar strömmenyn nedtryckt. Håll Stäng av nedtryckt och välj sedan Säkert läge.

Du vet att det fungerade när "Säkert läge" visas längst ned på skärmen. Lämna läget genom att starta om telefonen normalt.

En liten Pixel-detalj: Google uppger att flygplansläget aktiveras automatiskt när Pixel går in i säkert läge. Stäng av flygplansläget om du behöver wifi, GPS eller samtal under testet.

## Vad du gör med resultatet

Om problemet försvinner i säkert läge startar du om normalt och börjar ta bort de senaste misstänkta apparna.

Börja med appar som installerades eller uppdaterades strax innan problemet uppstod. Startskärmsappar, antivirusappar, VPN-tjänster, tillgänglighetsverktyg, filstädare, automatiseringsappar och sideloadade APK-filer förtjänar extra misstanke eftersom de kan ligga nära systemets beteende. Avinstallera en app, använd telefonen ett tag och testa igen.

Det är omständligt. Det fungerar.

Avinstallera inte tio appar samtidigt om du vill veta vilken som orsakade problemet. Tar du bort dem en i taget får du ett svar. Tar du bort en hel hög får du en renare telefon men ingen diagnos.

Om problemet finns kvar i säkert läge ska du uppdatera telefonen, uppdatera systemkomponenterna från Google Play, återställa appinställningarna och kontrollera lagringsutrymmet. En telefon som är fylld till 98 % kan bete sig illa även när ingen enskild app är skyldig. Kontrollera också om problemet började direkt efter en systemuppdatering. Android 17 blev tillgängligt för de flesta Pixel-enheter som stöds den 16 juni 2026, så tidiga uppdateringsfel kan vara vanligare på Pixel helt enkelt för att de enheterna fick versionen först.

## Vad en fabriksåterställning gör

En fabriksåterställning raderar användardata från telefonen. Appar och deras data tas bort. Lokala filer tas bort. Konton tas bort från enheten. Foton och meddelanden överlever bara om de har säkerhetskopierats eller synkroniserats någon annanstans.

Den tar vanligtvis inte tillbaka telefonen till den Android-version som den levererades med. Den återställer det installerade systemet till ett rent tillstånd. Om din Pixel har uppdaterats till Android 17 går den inte tillbaka till Android 16 efter en fabriksåterställning.

Fabriksåterställning är användbart när Androids användardata och inställningar är allvarligt skadade, när du ska sälja eller ge bort telefonen eller när du behöver en ren utgångspunkt efter att ha provat säkrare steg. Det är inte ett normalt första steg för slumpmässiga appkrascher.

Ladda telefonen innan du återställer den. Google rekommenderar minst 70 %. Se till att du känner till Google-kontot och lösenordet på telefonen, eftersom Factory Reset Protection kan kräva det kontot efter återställningen. Anslut till wifi eller mobildata under konfigurationen. Säkerhetskopiera foton, kontakter, filer, återställningskoder för autentiseringsappar, WhatsApp-chattar, Signal-meddelanden om du använder dem och allt som bara finns lokalt på enheten.

En nyare detalj missas lätt: på Android 15 och senare kan vissa plånboksappar säkerhetskopiera kollektivtrafikkort med pengar, och Android kan påminna om det inför återställningen. Hoppa inte över varningar från plånboken om du använder sådana kort.

## Steg att prova före en fabriksåterställning

Återställ appinställningarna. Det återaktiverar inaktiverade appar och återställer bland annat standardappar, aviseringsbegränsningar, begränsningar för bakgrundsdata, behörigheter och på vissa nyare versioner inställningar för batterianvändning, utan att radera appdata.

Rensa cache eller lagringsutrymme för en enda problemapp. Om bara en app är trasig ska du inte straffa hela telefonen.

Kontrollera system- och appuppdateringar. En väntande korrigering kan lösa exakt det problem du försöker bli av med.

Frigör lagringsutrymme. Android behöver plats för tillfälliga filer, appuppdateringar och databaser. Om telefonen nästan är full är konstiga prestandaproblem inte särskilt konstiga.

Hoppa över det gamla rådet om "wipe cache partition" om telefonen inte faktiskt erbjuder funktionen. Många moderna Android-telefoner, däribland Pixel, visar inte det alternativet på samma sätt som äldre enheter gjorde. Om tillverkarens återställningsmeny har det kan det vara ett ofarligt mellansteg. Om det saknas går du vidare.

## När fabriksåterställning är rimligt först

Det finns fall där säkert läge inte är rätt första steg.

Om du säljer, byter in, återvinner eller ger bort telefonen är fabriksåterställning rätt åtgärd efter säkerhetskopiering och borttagning av konton.

Om telefonen inte når låsskärmen, inte kan starta normalt och säkert läge inte går att öppna kan en återställning från återställningsläget vara ditt enda alternativ på användarnivå.

Om du installerade en skadlig APK-fil, gav den kraftfulla behörigheter och inte kan ta bort den ens i säkert läge kan en fabriksåterställning vara den renaste vägen. Om enheten är rootad, bootloader har ändrats eller du misstänker ett djupare intrång kanske en återställning från Inställningar inte räcker. Använd då officiella verktyg för firmware eller professionell hjälp.

Om telefonen har tydliga maskinvarusymtom hjälper ingen fabriksåterställning. Ett svullet batteri, en skadad laddningsport, en flimrande skärm efter ett fall eller slumpmässiga omstarter när telefonen böjs är reparationsproblem, inte återställningsproblem.

Säkert läge är vägskälet. Använd det innan du raderar allt.
