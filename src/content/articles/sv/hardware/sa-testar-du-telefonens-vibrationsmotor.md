---
title: "Så testar du telefonens vibrationsmotor"
description: "Snabba sätt att testa vibrationsmotorn i en Android-telefon med inställningar, tangentbordsrespons, säkert läge och tillverkarens diagnostik."
listSummary: "hårdvara, testning och diagnostik"
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["hårdvara","testning","diagnostik","android","guide"]
locale: "sv"
draft: false
---
---

En tyst telefon betyder inte automatiskt att vibrationsmotorn är trasig. De flesta vibrationsproblem beror först på inställningar, sedan på programvara och sist på hårdvara.

Den ordningen spelar roll. Att byta en haptikmotor för att Stör ej hade stängt av vibrationer är bortkastade pengar.

## Kontrollera vibrationsinställningarna först

Öppna Inställningar och leta efter Ljud och vibration, Ljud eller Haptik. Den exakta sökvägen beror på tillverkaren.

På Samsung Galaxy går du till `Inställningar > Ljud och vibration > Vibrationsintensitet`. Samtal, aviseringar, systemrespons och tryckrespons kan ha separata reglage. Det är lätt att sänka ett av dem och lämna de andra aktiva.

Kontrollera även Stör ej. På Pixel och andra Android-telefoner är det säkrast att söka efter `Stör ej` i Inställningar eftersom sökvägen varierar mellan Android-versioner. På Samsung finns den normalt under `Inställningar > Aviseringar > Stör ej`. Läget kan stänga av vibrationer beroende på hur samtal, appar och scheman har konfigurerats.

En liten sak till: kontrollera tangentbordet. Gboard, Samsung Keyboard och SwiftKey har egna inställningar för haptik. Om tangentbordsvibration är avstängd i tangentbordsappen vibrerar det inte när du skriver, även om motorn är frisk.

## Använd ett direkt vibrationstest

Samsung Galaxy har det tydligaste inbyggda alternativet. Öppna Samsung Members, välj Support och starta Telefondiagnostik. Kör testet Vibration. Beroende på appversion kan knappen heta Kom igång eller Visa tester. Det här är säkrare än att förlita sig på dolda koder.

Den äldre Samsung-koden `*#0*#` öppnar fortfarande en hårdvarutestmeny på många Galaxy-modeller. Tryck på Vibration så ska telefonen vibrera tills du lämnar testet. Koden kräver Samsungs egen Telefon-app. Operatörsprogramvara, nyare säkerhetsinställningar i One UI eller företagsbegränsningar kan blockera menyn.

Vissa Android-telefoner reagerar också på `*#*#0842#*#*`, en kod som länge har använts för test av vibration och bakbelysning. Behandla den inte som universell. Pixel stöder den vanligtvis inte, och många moderna uppringningsappar ignorerar den.

På Xiaomi-, Redmi- och POCO-telefoner kan du prova CIT-menyn med `*#*#6484#*#*`. Menynamn och testlista varierar mellan MIUI- och HyperOS-versioner, men vibration brukar finnas med.

## Testa fin haptik med tangentbordet

Öppna en anteckningsapp och skriv några meningar. Om tryckvibration är aktiverad ska varje tangenttryckning ge en liten puls.

Det är ett användbart test eftersom det skiljer mellan svag haptik och den kraftigare vibration som används vid inkommande samtal. En motor som klarar tangenttryckningar men inte vibrerar vid samtal har troligen ett problem med en aviseringskanal.

På Android kan appar styra vibration per aviseringskanal. Öppna `Inställningar > Appar`, välj appen som ska vibrera och kontrollera sedan avsnittet Aviseringar. För Telefon, Meddelanden, WhatsApp, Telegram eller Gmail ska du se till att vibration är aktiverad för den aktuella kanalen.

## Skilj programvara från hårdvara

Starta om telefonen först. Det låter nästan för enkelt, men haptiken kan sluta fungera efter ett programfel och komma tillbaka efter en omstart.

Om vibrationerna fungerar efter omstart och sedan försvinner igen kan du starta i säkert läge. På de flesta Android-telefoner öppnar du strömmenyn och håller `Stäng av` intryckt tills alternativet för säkert läge visas. På många Samsung-enheter startar du om och håller Volym ned intryckt under uppstarten.

Säkert läge inaktiverar appar från tredje part. Om vibrationerna fungerar där ska du ta bort eller inaktivera nyligen installerade automationsappar, samtalsfiltreringsappar, batterisparare, launchers och tillgänglighetsverktyg ett i taget. De är de vanligaste misstänkta.

Om vibrationerna inte fungerar i säkert läge, inte reagerar i Samsung Members eller tillverkarens testmeny och alla vibrationsinställningar är aktiva ligger felet troligen i motorn eller dess anslutning.

## Vad som kan gå sönder inne i telefonen

Android-telefoner använder vanligtvis en av två typer av haptikmotorer. Äldre och billigare modeller har ofta en excentrisk roterande massmotor, ERM. Den känns som ett litet snurrande surr. Mellanklass- och flaggskeppstelefoner använder vanligtvis en linjär resonansaktuator, LRA, som ger skarpare och mer exakt respons.

Båda kan gå sönder. Ett fall kan lossa en flexkabel, skada lödningar eller spräcka fästet som håller motorn mot ramen. Vattenskador kan orsaka korrosion i kontakten. Slitage är också möjligt, även om haptikmotorer vanligtvis håller länge om telefonen inte har tappats eller öppnats tidigare.

Oregelbundna vibrationer är ett klassiskt tecken på en lös anslutning. Stark ena dagen, svag nästa och helt borta efter ett fall. Det mönstret är mer misstänkt än en motor som bara slutar fungera permanent.

## Vad du kan förvänta dig av en reparation

Att byta vibrationsmotor är vanligtvis en av de billigare hårdvarureparationerna, men tätade telefoner måste ändå värmas upp, öppnas och limmas ihop på nytt. På modulära telefoner, till exempel vissa Fairphone-modeller, kan delen vara utbytbar av användaren. På de flesta vanliga Android-telefoner måste en tekniker öppna bakstycket.

Om telefonen nyligen tappades och vibrationerna blev oregelbundna direkt efteråt bör du be verkstaden kontrollera kontakten innan motorn byts. Ibland är motorn hel och kabeln sitter bara inte ordentligt.

runcheck testar inte vibrationsmotorn direkt, men appen kan hjälpa till att upptäcka relaterade varningstecken, till exempel överhettning, förändrad batteriförbrukning eller instabil laddning efter ett fall eller en fuktskada.
