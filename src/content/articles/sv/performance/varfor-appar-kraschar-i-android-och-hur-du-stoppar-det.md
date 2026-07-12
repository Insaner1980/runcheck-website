---
title: "Varför appar kraschar i Android och hur du stoppar det"
description: "Metabeskrivning: Android-appar kraschar av konkreta orsaker. Lär dig avgöra om problemet gäller en app, WebView, lite RAM, full lagring eller en ny Android-uppdatering."
listSummary: "Metabeskrivning: Android-appar kraschar av konkreta orsaker."
hub: "performance"
sourceNumber: 77
order: 14
tags: ["prestanda","hastighet","android","optimering","felsökning"]
locale: "sv"
draft: false
---
---

De flesta appkrascher är inte slumpmässiga. De känns slumpmässiga eftersom du inte ser felet som orsakade dem.

En app kraschar när den hamnar i ett tillstånd som den inte kan återhämta sig från. Android stänger den, ibland med ett meddelande om att appen stoppas hela tiden, ibland utan någon dramatik alls. En app som kraschar direkt vid start har ett annat problem än en som kraschar efter tio minuter. En enda dålig app är också något helt annat än att halva telefonen börjar krascha samtidigt.

Det är knepet: försök inte laga "Android". Leta efter mönstret.

## En app kraschar hela tiden

Börja med appens cacheminne. På Pixel och många telefoner med Android nära standardversionen går du till **Inställningar > Appar > Visa alla appar > [appnamn] > Lagring och cacheminne > Rensa cacheminne**. På Samsung är vägen vanligtvis **Inställningar > Appar > [appnamn] > Lagring > Rensa cacheminne**.

När du rensar cacheminnet försvinner tillfälliga filer. Du loggas inte ut och kontodata raderas inte. Kraschar appen fortfarande? Då kan du rensa lagringsutrymmet eller appdata, men stanna upp innan du gör det. Appen återställs. För WhatsApp, Signal, anteckningsappar, offlinekartor, nedladdad musik eller spel med lokala sparfiler kan rensning av data utan säkerhetskopia ta bort sådant du bryr dig om.

Uppdatera sedan appen. Öppna Google Play, sök efter appen och installera en eventuell uppdatering. Om krascherna började direkt efter en appuppdatering kan du läsa de senaste recensionerna i Play Butik. När många rapporterar samma krasch i samma version måste lösningen troligen komma från utvecklaren.

Avinstallera och installera om appen om den fortfarande inte beter sig. Det är en tråkig åtgärd, men den bygger upp appens paket och lokala filer på nytt. Det fungerar oftare än många tror.

## Många appar började krascha samtidigt

När flera appar som inte har något med varandra att göra kraschar samma dag bör du misstänka en gemensam Android-komponent. Android System WebView är det klassiska exemplet.

WebView låter appar visa webbinnehåll inuti appen i stället för att skicka dig till en webbläsare. E-postappar, shoppingappar, bankappar, hjälpsidor, inloggningsflöden och nyhetsappar kan alla använda komponenten. I mars 2021 orsakade en felaktig WebView-uppdatering omfattande appkrascher tills Google skickade ut korrigerade uppdateringar för WebView och Chrome.

Uppdatera därför WebView och Chrome först. Öppna Google Play, sök efter Android System WebView och uppdatera den. Gör samma sak med Google Chrome. Om WebView uppdaterades precis innan krascherna började och ingen korrigerad version finns ännu kan avinstallation av WebView-uppdateringarna fungera tillfälligt på vissa enheter. Se det som en nödlösning, eftersom WebView är en säkerhetskänslig komponent.

Google Play services kan orsaka liknande, breda problem om komponenten är föråldrad eller har fastnat. Uppdatera den om Google Play erbjuder en uppdatering. Starta om telefonen efter att systemkomponenterna har uppdaterats.

## Krascher på grund av lite RAM eller full lagring

Appar kraschar när de begär minne som Android inte kan ge dem. Ibland avslutar Android bakgrundsappar utan att säga något. Ibland är det appen du använder som faller ihop.

Det här är vanligt på telefoner med 3 eller 4 GB RAM som kör moderna appar. Spel, videoredigerare, kameraappar och webbläsare med många flikar är vanliga problemområden. En meddelandeapp kan fungera hela dagen och sedan krascha när du försöker bifoga en stor video, eftersom just den åtgärden kräver mer minne.

Full lagring kan också se ut som ett appfel. Appar behöver utrymme för cachefiler, nedladdningar, databaser och uppdateringar. När den interna lagringen nästan är full kan skrivningarna misslyckas. Att frigöra 1 eller 2 GB kan räcka för att stoppa krascher på en trång telefon, men ett bättre mål är att hålla minst 10-15 % av lagringen ledig.

Kontrollera **Inställningar > Lagring**. Radera stora videor, gamla nedladdningar, dubbletter, oanvända appar och APK-filer som du inte längre behöver. Töm också papperskorgen i galleri- och filappar om de sparar raderade filer i 30 dagar.

## Krascher efter en Android-uppdatering

Stora systemuppdateringar förändrar förutsättningarna för alla appar. Android 17 är det aktuella exemplet: versionen finns nu för de flesta Pixel-enheter som stöds, och fler nya enheter med Android 17 kommer under de närmaste månaderna. Om en app redan låg på gränsen till kompatibilitet kan en större uppdatering snabbt avslöja det.

Uppdatera apparna efter systemuppdateringen. Uppdatera därefter WebView, Chrome, Google Play services och appen som kraschar. Starta om telefonen en gång. Om uppdateringen precis installerades bör du ge telefonen några timmar, eftersom Android fortfarande kan optimera appar och bygga om cachefiler i bakgrunden.

Om bara en app kraschar efter Android 17 behöver utvecklaren troligen uppdatera den. Att rensa cacheminne och data kan hjälpa om gamla lokala filer utlöser problemet, men det lagar inte kod som är inkompatibel med den nya Android-versionen.

Om många appar kraschar efter uppdateringen bör du leta efter en systemkorrigering från telefontillverkaren. Pixel-användare bör kontrollera de månatliga uppdateringarna. Samsung, Xiaomi, OnePlus, OPPO och andra distribuerar korrigeringar via sina egna uppdateringskanaler, ofta senare än Pixel.

## Säkert läge visar om en annan app stör

Säkert läge startar Android med nedladdade appar tillfälligt inaktiverade. Appar tas inte bort. Du får bara en ren miljö att testa i.

På Pixel öppnar du strömmenyn, håller ned **Stäng av** eller **Starta om** och bekräftar att telefonen ska startas i säkert läge. På Samsung stänger du av telefonen, startar den igen och håller **Volym ned** intryckt när Samsung-logotypen visas. På Xiaomi varierar formulering och tajmning, men många modeller går in i säkert läge om du håller **Volym ned** intryckt under starten.

Om krascherna upphör i säkert läge stör en nedladdad app. Starta om normalt och börja med att avinstallera nya eller påträngande appar: rensningsappar, batterisparare, antivirusappar, VPN-appar, anpassade startprogram, automatiseringsverktyg och appar med behörighet till tillgänglighetsfunktioner.

Om krascherna fortsätter i säkert läge ligger problemet troligare i systemprogramvaran, lagringen, hårdvaran eller den förinstallerade appen själv.

## När en app fryser i stället för att krascha

Ett meddelande om att en app inte svarar är en ANR, en förkortning av Application Not Responding. Appen har inte kraschat ännu. Android varnar för att den inte svarade tillräckligt snabbt.

För användarinmatning är Androids normala ANR-gräns 5 sekunder. Broadcast receivers har längre gränser. På Android 14 och senare är de 10-20 sekunder för intents med förgrundsprioritet och 60-120 sekunder för intents med bakgrundsprioritet, beroende på om processen får tillräckligt med CPU-tid. För dig känns resultatet ungefär likadant: du trycker, väntar och inget händer.

Tryck på **Vänta** om appen håller på med något som är värt att rädda, till exempel att exportera en video eller skicka en stor fil. Tryck på **Stäng** om den uppenbart har fastnat. Återkommande ANR-fel i samma app betyder ofta att den gör för mycket arbete i huvudtråden, väntar på en långsam nätverksbegäran eller kämpar med för lite minne.

## Vad du inte ska installera

Installera inte appar som påstår sig laga krascher, förstärka RAM eller förbättra stabiliteten. De kan inte reparera kod i en annan app. I bästa fall rensar de cacheminne och tvångsstänger bakgrundsappar. I värsta fall lägger de till ännu en ständigt aktiv tjänst på en telefon som redan har ont om minne.

De användbara åtgärderna är tråkiga: uppdatera appen, rensa cacheminnet, rensa data bara när det är säkert, installera om, frigör lagring, testa säkert läge och vänta på utvecklaren eller telefontillverkaren när felet ligger hos dem.

Krascher skadar inte telefonen. Däremot kan osparat arbete gå förlorat. Om krascherna inträffar när foton, anteckningar eller dokument sparas bör du sluta lita på appen tills informationen är säkerhetskopierad.
