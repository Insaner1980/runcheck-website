---
title: "Dokumenterade Android-diagnostikkoder för Samsung, Pixel och Xiaomi"
description: "Diagnostikvägar som dokumenteras här för Samsung, Pixel och Xiaomi. Tillgänglighet och funktion varierar med modell, region, operatör, programvara och tillverkare; Android 17 ger ingen universell koduppsättning."
listSummary: "Dokumenterade diagnostikvägar för Samsung, Pixel och Xiaomi med modell- och programvarubegränsningar."
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostik", "sensorer", "android", "hårdvara", "guide"]
locale: "sv"
draft: false
---
Det finns ingen tillförlitlig komplett lista. Diagnostikkoder beror på tillverkare, modell, telefonapp, firmware, operatör och region. Endast koder med direkt aktuell tillverkardokumentation behålls nedan.

Direkt stöd: [Samsung dokumenterar `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google dokumenterar Pixel-koden `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB) och [Xiaomi dokumenterar CIT](https://www.mi.com/global/support/faq/details/KA-491482/) via `*#*#6484#*#*` eller `*#*#64663#*#*` på tillämpliga enheter.

## Samsung Galaxy

Samsung har fortfarande ett av de bättre diagnostiksystemen, delvis eftersom företaget erbjuder både koder i telefonappen och en officiellt stödd väg via en app.

`*#0*#` öppnar Samsungs skärm för hårdvarutester på många Galaxy-telefoner. Den exakta layouten varierar mellan modeller, men vanligtvis går det att testa skärmen, pekinmatning, kameror, högtalare, vibration, sensorer och ibland fingeravtrycksläsaren. På vissa operatörsmodeller eller hårt låsta firmwareversioner öppnas menyn inte alls.

Samsung Members är den säkrare vägen för vanliga användare. Öppna Samsung Members, gå till fliken Support och välj Telefondiagnostik. Appen leder dig genom testerna och visar tydligare resultat än servicemenyn.

## Xiaomi, Redmi och POCO

[Xiaomis supportsida](https://www.mi.com/global/support/faq/details/KA-491482/) dokumenterar två koder i telefonappen för ett CIT-test av pekskärmen på tillämpliga enheter: `*#*#6484#*#*` och `*#*#64663#*#*`.

I det dokumenterade testet drar du ett finger över skärmen och letar efter avbrutna eller extra linjer. Källan stöder endast den här felsökningen av pekskärmen. Tillgänglighet och funktion varierar med modell, region, operatör, firmware och programvaruversion.

## Google Pixel

Pixel-dokumentationen beskriver en Pixel-specifik diagnostikväg. Tillgängligheten kan variera med modell, region, operatör och programversion.

`*#*#7287#*#*` öppnar appen Pixel Repair Diagnostics på Pixel-telefoner som stöds. Google dokumenterar den för kontroller i samband med reparationer, och den kan hjälpa till att verifiera hårdvaran före eller efter ett ingrepp. Koden kräver internetanslutning och därefter följer du instruktionerna på skärmen.

För batterikontroller på Pixel 6 och senare går du till `Inställningar > Batteri > Batteridiagnostik`. Det är en vanlig meny i Inställningar, inte en dold kod.

Äldre artiklar nämner ibland kalkylatorkoden `.12345+=` för ett teknikerläge på Pixel. Den skulle jag inte förlita mig på 2026. Använd den officiella Pixel-koden för reparationsdiagnostik i stället.

## Safety

Om en dokumenterad kod inte fungerar använder du tillverkarens stödda diagnostikapp eller serviceinstruktion. Stäng inte av säkerhetskontroller och ange inte återställnings-, provisionerings-, radiokalibrerings-, firmware- eller programmeringskoder från en obekräftad lista.
