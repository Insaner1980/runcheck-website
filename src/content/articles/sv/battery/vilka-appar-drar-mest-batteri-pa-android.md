---
title: "Vilka appar drar mest batteri på Android"
description: "De flesta listor över \"appar som drar batteri\" låter alltför säkra. Telefonen bryr sig inte om vilken app som toppade en rankning i någon annans testmiljö. Den bryr sig om vad du har installerat, vilka behörigheter apparna har fått, hur ofta de öppnas och om de fortsätter arbeta när skärmen släcks."
listSummary: "De flesta listor över \"appar som drar batteri\" låter alltför säkra."
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Drain"
tags: ["batteri","batteriförbrukning","felsökning","android","prestanda"]
locale: "sv"
draft: false
---
Med det sagt återkommer samma kategorier gång på gång.

## Apptyperna som oftast ligger nära toppen

Videoappar är de uppenbara. YouTube, Netflix, TikTok, Instagram Reels och liknande appar håller skärmen på, avkodar video, hämtar data hela tiden och används ofta med hög ljusstyrka eftersom människor tittar i ljusa rum eller utomhus. Om en videoapp ligger högt i batterilistan efter två timmars användning är det inte ett fel. Det är fysik.

Navigeringsappar är nästa enkla kategori. Google Maps, Waze, leveransappar, taxi- och samåkningsappar samt träningsspårare kombinerar GPS, mobildata, skärmtid och ibland Bluetooth. En timmes sväng-för-sväng-navigering kan ta en märkbar del av laddningen, särskilt över 5G eller med svag signal.

Spel går hårt åt batteriet. Ett 3D-spel belastar GPU, CPU, skärm, ljud, pekinmatning och nätverk samtidigt. Den goda nyheten är att spel vanligtvis drar batteri medan du spelar, inte i tysthet klockan 3 på natten. Om ett spel visar bakgrundsanvändning bör det begränsas.

Appar för sociala medier och meddelanden är mer svårtolkade. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit och nyhetsappar vill alla ha nytt innehåll och skicka aviseringar. Vissa beter sig bra. Andra gör det inte. Det irriterande är att två personer kan installera samma app och ändå få helt olika batteriresultat eftersom den ena har aktiverat plats, aviseringar, automatisk uppspelning, kontaktsynkronisering och bakgrundsuppdatering medan den andra inte har gjort det.

## Bakgrundsanvändning betyder mer än appens namn

En batteriskärm som visar att en app använde 8 % medan du tittade på video i en timme berättar något ganska ointressant. En batteriskärm som visar 8 % bakgrundsanvändning medan telefonen låg i fickan berättar något användbart.

Titta först efter den skillnaden. På Pixel går du till **Inställningar > Batteri > Batteriförbrukning**, väljer visning efter appar och trycker på appen. På Samsung använder du batterivyn under **Inställningar > Batteri** eller **Batteri och enhetsvård**, beroende på modell och programversion. Du vill se tid i förgrunden, tid i bakgrunden och om appen får fortsätta köra.

En grov regel är att en oviktig app som använder mer än ett par procent i bakgrunden under en dag bör kunna motivera det. Meddelanden, musik, navigering, hälsa och säkerhetsappar kan ha en anledning. En shoppingapp har det sällan.

De vanligaste mekanismerna bakom bakgrundsförbrukning är enkla: pushaviseringar, innehållssynkronisering, platskontroller, wake locks, nätverkstrafik i bakgrunden och analys-SDK:er. Wake locks är värda att nämna eftersom Google nu behandlar dem som en kvalitetsfråga i Play. Ett partiellt wake lock håller CPU:n vaken även när skärmen är avstängd. Använt med eftertanke är det normalt. Om det hålls för länge är det rent batterislöseri.

## Google Play har nu ett mått för batteribeteende

Det här är den stora förändringen jämfört med äldre versioner av artikeln. Google gjorde **Excessive partial wake locks** till ett centralt Android vitals-mått. Från den 1 mars 2026 kan appar som passerar gränsen få sämre synlighet i Google Plays upptäcktsytor och en varning på sin butikssida.

Gränsen är specifik. För mobilappar räknar Android vitals användning av partiella wake locks som inte omfattas av undantag som överdriven när låsen hålls i minst två timmar under en 24-timmarsperiod och mönstret påverkar mer än 5 % av appens sessioner, beräknat som ett genomsnitt över 28 dagar.

Det betyder inte att Google Play visar varje batterikostnad innan du installerar en app. Ett spel markeras inte för att det drar mycket medan du aktivt spelar. Systemet bedömer inte heller om just du tillbringar fem timmar i TikTok. Det riktar in sig på beteende som håller CPU:n vaken i bakgrunden medan skärmen är avstängd.

Ändå är det användbart. En vanlig användare kan för första gången få se en batterivarning innan en app med dåligt beteende installeras. Det är bättre än att upptäcka problemet efter tre nätter med hög urladdning.

## Vad du kan ändra innan appar avinstalleras

Avinstallation är den renaste lösningen, men de flesta tänker inte radera sina viktigaste sociala appar, videoappar eller meddelandeappar. Börja därför med inställningar som minskar tyst bakgrundsarbete.

Stäng av automatisk uppspelning där appen tillåter det. Instagram, Facebook, X, Reddit, YouTube och TikTok kan förbruka både batteri och data genom att förbereda videor som du kanske aldrig tittar på.

Begränsa platsåtkomsten. Öppna **Inställningar > Plats > Appars platsbehörighet** och kontrollera appar under **Tillåts alltid**. En väderapp klarar sig vanligtvis med plats när den används. En navigeringsapp behöver plats under resor. En social app behöver sällan permanent åtkomst.

Begränsa batterianvändningen i bakgrunden. På Pixel-liknande Android öppnar du appinformationen under **Inställningar > Appar** och minskar bakgrundsåtkomsten för appar som inte behöver omedelbara uppdateringar. På Samsung använder du **Inställningar > Batteri > Gränser för bakgrundsanvändning** och lägger sällan använda appar i **Appar i viloläge** eller **Appar i dvala**.

Minska antalet aviseringar. Varje avisering kan väcka telefonen, tända skärmen, starta vibration och hämta nytt innehåll. Var hård mot appar som skickar marknadsföring, rekommendationer eller meddelanden av typen "du kanske gillar det här".

Uppdatera apparna. Det är ett tråkigt råd, men det spelar roll efter Android-uppdateringar, inklusive den första utrullningen av Android 17 till Pixel-telefoner som stöds. Apputvecklare rättar batterifel, wake lock-fel, synkroniseringsloopar och kompatibilitetsproblem. Både Samsung och Google pekar på app- och systemuppdateringar vid felsökning av batteriurladdning.

## Webbläsaren i stället för appen är inte alltid en vinst

Ett vanligt råd är att använda webbversionen i stället för appen. Ibland är det klokt eftersom en webbplats inte kan köra samma typ av beständig Android-bakgrundstjänst som en installerad app. Om Facebook eller X bara drar batteri för att den installerade appen fortsätter väcka telefonen kan mobilwebbplatsen hjälpa.

Gör bara inte rådet till en regel. Kontrollerad forskning där Android-appar jämförts med sina webbversioner har visat att nativeappar kan använda mindre energi vid aktiv användning för vissa tjänster. En webbläsarflik är inte magisk. Den renderar fortfarande video, JavaScript, annonser, spårare och bilder.

Min praktiska bedömning är denna: använd webbläsaren för tjänster som du bara kontrollerar ibland och inte behöver aviseringar från. Använd den inbyggda appen för tjänster som används mycket, särskilt om webbversionen är långsam eller ryckig. Begränsa sedan appens bakgrundsåtkomst om den börjar synas i nattlig förbrukning.

## När en diagnostikapp hjälper

Androids inbyggda batteriskärm bör vara första stoppet. Den finns redan där och är integrerad med operativsystemet.

Ett verktyg som runcheck blir användbart när enbart batterisiffran inte förklarar mönstret. Om förbrukningen ökar samtidigt som värme, svag signal, långsamt nätverk eller lagringstryck pekar det mot en annan lösning än att bara skylla på Instagram. Sammanhanget spelar roll.

AccuBattery och liknande verktyg kan också uppskatta batterikapaciteten över tid, men behandla siffrorna som uppskattningar om telefonen inte själv visar batterihälsa.

## Ett bättre sätt att hitta dina värsta appar

Gör så här under två normala dagar:

1. Ladda och använd telefonen som vanligt.
2. Kontrollera **Inställningar > Batteri > Batteriförbrukning** på kvällen.
3. Skriv ned de fem översta apparna och om de använde batteri i förgrunden eller bakgrunden.
4. Begränsa bara appar med bakgrundsanvändning som inte verkar rimlig.
5. Kontrollera igen nästa dag.

Rensa inte alla appar från vyn med senaste appar varje timme. Android hanterar minne och batteri automatiskt, och tvångsstängning slösar ofta ström när apparna senare måste öppnas på nytt. Tvinga avslut är till för en app som beter sig illa, inte för daglig städning.

Apparna som drar mest batteri är vanligtvis de som håller skärmen, nätverket, GPS, CPU eller GPU upptagna. De som är värda att åtgärda är de som gör det när du inte använder dem.
