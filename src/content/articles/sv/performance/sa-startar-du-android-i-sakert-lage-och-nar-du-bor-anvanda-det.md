---
title: "Så startar du Android i säkert läge och när du bör använda det"
description: "How to start Android in Safe Mode, what it disables, and how to use it to find problem apps."
listSummary: "How to start Android in Safe Mode, what it disables, and how to use it to find problem apps."
hub: "performance"
sourceNumber: 70
order: 7
tags: ["batteri","batteriförbrukning","felsökning","android","prestanda"]
locale: "sv"
draft: false
---
Hur vet du om telefonen är långsam för att Android har en dålig dag, eller för att en app ställer till med allt i bakgrunden? Säkert läge är det tydligaste testet.

I säkert läge startar Android bara systemprogramvaran och de förinstallerade apparna. Appar som du själv har installerat inaktiveras tills telefonen startas om normalt. Ingenting raderas. Syftet är att isolera problemet: om det försvinner i säkert läge är en tredjepartsapp troligen inblandad. Om problemet finns kvar bör du i stället titta på Android, lagringen, batteriet eller hårdvaran.

## När säkert läge är värt att använda

Använd säkert läge när telefonen kraschar, fryser, startar om, blir överhettad, drar ovanligt mycket batteri eller visar popupfönster som inte går att få bort. Det är också användbart efter en större Android-uppdatering om telefonen plötsligt fungerar riktigt dåligt och batterianvändningen inte tydligt pekar ut en viss app.

Det är inte bara till för dramatiska fel. Om tangentbordet laggar, startskärmen ritas om hela tiden eller telefonen behöver flera sekunder för att reagera efter upplåsning kan säkert läge fortfarande besvara den viktiga frågan: bidrar en installerad app till problemet?

Testet är enkelt. Starta i säkert läge, använd telefonen i några minuter och försök återskapa felet.

## Starta säkert läge när telefonen är på

På de flesta Android-telefoner börjar du med att öppna strömmenyn.

På Pixel 6 och senare, inklusive Pixel Fold-modeller, håller du **av/på-knappen + Volym upp** intryckta i några sekunder. På många andra telefoner håller du **av/på-knappen** eller **sidoknappen** intryckt. Samsung-telefoner använder ofta **sidoknappen + Volym ned**, eller strömikonen i snabbinställningarna.

När strömmenyn visas håller du **Stäng av** eller **Starta om** på skärmen intryckt. Efter en stund bör Android visa en fråga om säkert läge. Tryck på **OK** eller **Säkert läge**.

Telefonen startas om. När den är klar bör texten **Säkert läge** visas längst ned till vänster.

## Starta säkert läge när telefonen är avstängd

Den här metoden är användbar när telefonen är för instabil för att du ska kunna öppna strömmenyn.

Slå på telefonen som vanligt. Så snart tillverkarens logotyp eller startanimation visas håller du **Volym ned** intryckt. Fortsätt hålla knappen tills låsskärmen eller startskärmen visas. Om det fungerade står det **Säkert läge** längst ned på skärmen.

Tajmingen spelar roll. Trycker du för tidigt kan vissa telefoner öppna bootloadern eller Recovery Mode. Trycker du för sent startar Android normalt. Stäng av telefonen och försök igen om du missar rätt ögonblick.

## Att tänka på för Samsung

Samsung stöder båda metoderna på aktuella Galaxy-telefoner och surfplattor.

På en Galaxy som är påslagen öppnar du strömmenyn, håller **Stäng av** intryckt och trycker sedan på **Säkert läge**. Om enheten är avstängd slår du på den och håller **Volym ned** intryckt när Samsung-logotypen visas.

Samsung uppger också att vissa anpassningar, till exempel bakgrundsbilder eller teman, kan återställas när du lämnar säkert läge. Det är ingen dataförlust, men det är irriterande. Ta en skärmbild av startskärmen först om layouten är viktig för dig.

## Om telefonen har frusit

Tvinga först fram en omstart om telefonen inte reagerar.

På de flesta Samsung-telefoner håller du **av/på-knappen + Volym ned** intryckta i mer än 7 sekunder. På många andra Android-telefoner håller du **av/på-knappen** eller **av/på-knappen + Volym ned** intryckta i ungefär 10-15 sekunder, tills skärmen slocknar eller telefonen startas om.

Använd sedan metoden för en avstängd telefon: slå på den, vänta tills logotypen visas och håll **Volym ned** intryckt.

## Vad du bör testa i säkert läge

Starta inte i säkert läge bara för att lämna det direkt. Använd telefonen tillräckligt länge för att faktiskt få ett svar.

Prova det som inte fungerade. Öppna Inställningar. Lås upp telefonen några gånger. Skriv i ett textfält. Håll ett öga på batteritemperaturen. Låt skärmen vara på i fem minuter. Om telefonen brukade starta om slumpmässigt, låt den ligga en stund.

Säkert läge inaktiverar nedladdade appar, så dina vanliga appar för meddelanden, sociala medier, bankärenden, VPN, startskärm och tangentbord kanske inte fungerar. Det är väntat. De inbyggda funktionerna för telefonsamtal, SMS, Wi-Fi, mobildata och Inställningar bör fortfarande vara tillgängliga. Google påpekar dock att flygplansläget kan aktiveras automatiskt på vissa Pixel-enheter när säkert läge startas. Stäng av det om du behöver en anslutning för testet.

## Om problemet försvinner

Då är en tredjepartsapp den främsta misstänkta.

Börja med appar som nyligen har förändrats. Nya installationer, nyligen uppdaterade appar, startskärmsappar, VPN-appar, rensningsappar, automatiseringsappar, batterisparappar, tangentbord och allt som har behörighet för tillgänglighet eller enhetsadministration bör granskas först.

Lämna säkert läge, avinstallera eller inaktivera en misstänkt app och testa sedan telefonen normalt. Ta inte bort tio appar samtidigt om telefonen fortfarande går att använda. En ändring i taget visar vad som faktiskt löste problemet.

Vissa appar är svåra att ta bort eftersom de har administratörsåtkomst till enheten. Om Android vägrar avinstallera en app kan du kontrollera **Settings > Security & privacy > More security settings > Device admin apps** eller närmaste motsvarighet på telefonen. Sökvägen varierar, men principen är densamma: ta först bort appens administratörsåtkomst och avinstallera den sedan.

## Om problemet finns kvar

Om säkert läge inte hjälper är orsaken troligen inte en nedladdad app.

Det pekar i stället mot en systembugg, ett skadat systemtillstånd, lagringsbrist, en misslyckad uppdatering, ett svagt batteri, överhettning eller ett annat hårdvarufel. Efter en nylig uppgradering till Android 17 skulle jag till exempel kontrollera om andra ägare av samma modell rapporterar samma symtom innan jag gör något drastiskt.

Nästa steg är praktiska: installera en ny systemuppdatering om en korrigering finns, frigör lagringsutrymme, kontrollera batterianvändning och temperatur, rensa cachepartitionen endast om telefonen fortfarande erbjuder det alternativet och säkerhetskopiera viktiga data innan du överväger en fabriksåterställning.

En fabriksåterställning är en sista utväg. Den kan lösa programvaruproblem, men den innebär mycket arbete och reparerar inte åldrande lagring, ett svagt batteri eller en skadad knapp.

## Så lämnar du säkert läge

Starta om telefonen normalt. Det är allt.

Tryck på av/på-knappen eller använd strömikonen i snabbinställningarna och tryck sedan på **Starta om**. På vissa modeller visar Samsung också en avisering om säkert läge som du kan trycka på för att stänga av det.

Kontrollera **Volym ned** om telefonen fortsätter att starta i säkert läge. En knapp som har fastnat, ett för trångt skal, smuts runt knappen eller en skadad brytare kan utlösa säkert läge under uppstarten. Ta av skalet och starta om igen.

## Begränsningar och vanliga överraskningar

Säkert läge raderar inte appar, bilder, meddelanden eller kontodata. Det inaktiverar bara nedladdade appar medan läget är aktivt.

Widgetar på startskärmen från tredjepartsappar kan försvinna medan säkert läge används. Google rekommenderar uttryckligen att du tar en skärmbild innan du startar säkert läge om widgetarna är viktiga. De kan behöva läggas till igen när du har lämnat läget.

Säkert läge inaktiverar inte heller tillverkarens systemappar. Systemkomponenter från Samsung, Xiaomi, OnePlus, operatören och Google kan fortsätta köras eftersom Android behandlar dem som en del av den installerade systemavbildningen. Om en förinstallerad app orsakar problemet kanske säkert läge inte kan isolera den.

Den begränsningen är irriterande, men säkert läge är fortfarande värt att använda. På mindre än fem minuter kan det besvara en av de viktigaste felsökningsfrågorna.
