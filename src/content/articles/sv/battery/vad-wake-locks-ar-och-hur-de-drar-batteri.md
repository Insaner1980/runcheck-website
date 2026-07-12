---
title: "Vad wake locks är och hur de drar batteri"
description: "Metabeskrivning: Wake locks låter Android-appar hålla processorn vaken efter att skärmen har stängts av. Om de används fel kan mobilen hindras från att nå strömsnåla vilolägen, vilket leder till hög batteriförbrukning i vila."
listSummary: "Metabeskrivning: Wake locks låter Android-appar hålla processorn vaken efter att skärmen har stängts av."
hub: "battery"
sourceNumber: 35
order: 25
subgroup: "Drain"
tags: ["batteri","batteriförbrukning","felsökning","android","prestanda"]
locale: "sv"
draft: false
---
Du sover. Mobilens skärm är avstängd. Ingenting spelas upp, ingenting laddas ned och ändå sjunker batterinivån med 18 % under natten.

Det är den typ av förbrukning som wake locks kan orsaka. En begäran om ett wake lock håller en del av enheten vaken när Android annars skulle låta den vila. Det vanligaste batteriproblemet är ett partiellt wake lock, som håller processorn igång medan skärmen förblir avstängd.

Wake locks är inte automatiskt dåliga. En musikapp behöver ett lås för att fortsätta spela ljud. En navigeringsapp kan behöva ett under en pågående resa. En uppladdning som användaren har startat kan behöva slutföras i stället för att avbrytas halvvägs. Problemet börjar när en app håller låset för länge, begär det för ofta eller inte släpper det när arbetet är klart.

## Så fungerar wake locks

När skärmen stängs av försöker Android pausa CPU:n och låta mobilen gå ned i strömsnåla tillstånd. Om en app fortfarande har arbete som måste fortsätta kan den skaffa ett wake lock via Androids PowerManager API. När arbetet är färdigt släpper appen låset, och mobilen kan gå tillbaka till vila.

Det är i den övergången problemen uppstår.

En app kan starta en bakgrundssynkronisering, stöta på ett nätverkstimeout och misslyckas med att städa upp korrekt. En annan app kan fråga en server varannan minut i stället för att använda pushmeddelanden. En träningsapp kan hålla sensorer och bearbetning aktiva längre än nödvändigt. För användaren ser mobilen inaktiv ut. Inuti är den allt annat än inaktiv.

Sedan den 1 mars 2026 har detta också fått större betydelse för utvecklare. Google Play kan minska synligheten för appar som passerar gränsen i Android vitals för överdriven användning av partiella wake locks. Android vitals räknar användningen som överdriven när icke undantagna partiella wake locks sammanlagt är aktiva i 2 timmar eller mer under en 24-timmarsperiod, och gränsen för dåligt beteende passeras när det gäller mer än 5 % av appens sessioner under 28 dagar.

## Varför förbrukning från wake locks är svår att upptäcka

Förbrukningen gömmer sig ofta bakom systemetiketter. Batterisidan kan visa **Android System**, Google-tjänster eller otydlig bakgrundsanvändning i stället för namnet på det wake lock som faktiskt orsakade problemet.

Börja ändå med grunderna. Gå till **Inställningar > Batteri > Batteriförbrukning** och kontrollera vilka appar som har dragit ström i bakgrunden. På aktuella Pixel-versioner kan du trycka på en app och öppna **Batteriförbrukning för appen**. På Samsung går du till **Inställningar > Enhetsvård > Batteri** och granskar apparnas användning och begränsningar för bakgrundsanvändning.

Om mobilen tappar mycket laddning när skärmen är avstängd men batterisidan inte visar någon uppenbar app blir wake locks en starkare misstanke.

Den gamla uppringningskoden `*#*#4636#*#*` är inte längre någon pålitlig lösning. Den fungerar på vissa Android-mobiler, gör ingenting på andra och saknar ofta användbar batteriinformation på nyare Samsung- och Xiaomi-enheter. Jag skulle inte bygga en felsökningsmetod kring den.

För djupare kontroller kan du använda ADB. `adb shell dumpsys batterystats` kan visa historik över wake locks och hur länge enheten har hållits vaken, men utskriften är inte särskilt lättläst. Verktyg som BetterBatteryStats och GSam Battery Monitor kan hjälpa, men många avancerade batteriverktyg kräver behörigheter som tilldelas via ADB eller extra konfiguration på moderna Android-versioner. Var skeptisk om en app utlovar omedelbara batterimirakel utan behörigheter eller data.

## Vanliga orsaker till wake locks

Google Play-tjänster får ofta skulden eftersom tjänsten hanterar mycket: plats, pushmeddelanden, kontosynkronisering, närliggande tjänster, säkerhetskontroller och mer. En viss mängd wake lock-tid därifrån är normal. Okontrollerad förbrukning efter en systemuppdatering, trasig synkronisering eller skadad cache är inte det.

Sociala appar kan också vara högljudda. De uppdaterar flöden, laddar upp analysdata, synkroniserar meddelanden, uppdaterar widgetar och håller aviseringskanaler aktiva. En social app som öppnas två gånger i veckan förtjänar inte obegränsad bakgrundsåtkomst.

E-postappar är en annan vanlig orsak. Pushbaserad e-post fungerar vanligtvis bra. Att kontrollera flera konton med några minuters mellanrum är slösaktigt.

VPN-tjänster, musikappar, navigeringsappar och aktivitetsmätare är annorlunda. Deras wake locks kan vara väntade eftersom användaren uttryckligen har bett dem fortsätta göra något. Rätt fråga är inte "håller appen mobilen vaken?" utan "fortsätter den göra det när jag inte aktivt använder dess kärnfunktion?"

## Vad du kan göra

Begränsa bakgrundsåtkomsten för appar som inte behöver den. På Pixel och Android nära Googles standardversion går du till **Inställningar > Appar > [appnamn] > Batteriförbrukning för appen** och väljer **Begränsad**, om det alternativet finns. På Samsung använder du **Appar i viloläge** eller **Appar i djupviloläge** under **Begränsa bakgrundsanvändning**.

Begränsa inte appar som behöver fungera i realtid i bakgrunden. Meddelanden, VPN, hälsa, navigering, nödfunktioner och jobbappar kan sluta fungera på subtila sätt om de fryses för hårt.

Börja försiktigt med Google Play-tjänster. Starta om mobilen. Kontrollera uppdateringar för Google Play-systemet och apparna. Om förbrukningen fortsätter kan du rensa tjänstens cache under **Inställningar > Appar > Google Play-tjänster > Lagring och cacheminne > Rensa cacheminne**. Undvik att rensa all data om du inte vet vad det påverkar, eftersom lokal tjänstestatus kan återställas och tillfälligt skapa extra synkronisering.

Om problemet började direkt efter en uppdatering till Android 17 bör du ge mobilen en eller två dagar innan du drar slutsatser. Pixel fick Android 17 först, och efter en stor systemuppdatering kör mobiler ofta extra indexering, appoptimering och rensning. Kvarstående förbrukning efter flera dagar är en annan sak.

## Hur Doze förändrar bilden

Doze hjälper till att begränsa skadan från wake locks under djup vila. När enheten är i Doze ignorerar Android wake locks under de begränsade faserna och låter arbetet köras främst under underhållsfönstren.

Men Doze är ingen magi. Appar som har undantagits från batterioptimering får större frihet. Förgrundstjänster kan fortsätta arbeta. Tillverkarnas batterilager kan bete sig annorlunda. Och om mobilen aldrig kommer ned i vila på grund av rörelse, signalproblem eller återkommande bakgrundsaktivitet får du inte hela effekten.

Det är därför batteriförbrukningen över natten ger en så bra ledtråd. Om mobilen ligger stilla i sju timmar och tappar 4 % har du förmodligen inget större problem med wake locks. Om den tappar 20 % med släckt skärm och utan aktiv medieuppspelning är det något som håller den vaken eller tvingar radion att arbeta.

runcheck är byggt för den typen av mönsterigenkänning. Förbrukning med släckt skärm, beteende i djup vila, signalstyrka och temperatur ger tillsammans en mycket tydligare bild än den vanliga batterisidan.

## Några frågor som är värda att besvara

Kan ett wake lock hålla skärmen på? Partiella wake locks gör inte det. De håller CPU:n igång medan skärmen förblir avstängd. Äldre typer av skärmlås finns, men moderna Android-appar är hårt begränsade där. Den mesta dolda förbrukningen kommer från partiella CPU-lås.

Är en viss mängd wake lock-aktivitet normal? Ja. Även en ren Android-mobil har korta wake locks från systemtjänster, pushmeddelanden, anslutningsförändringar och schemalagt arbete. Minuter är normalt. Timmar under inaktiv användning är det inte.

Kan en fabriksåterställning lösa problemet? Ibland. Den kan rensa dålig appstatus, trasig synkronisering och rester efter uppdateringar. Det är också en grov åtgärd. Begränsa misstänkta appar, uppdatera allt, rensa cache där det är lämpligt och bekräfta mönstret innan du tömmer mobilen.
