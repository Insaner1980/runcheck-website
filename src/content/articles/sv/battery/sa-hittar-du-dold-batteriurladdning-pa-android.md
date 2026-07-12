---
title: "Så hittar du dold batteriurladdning på Android"
description: "Varför skyller batteriskärmen på Android System eller Google Play services när den verkliga orsaken förmodligen är en app, en synkroniseringsloop, plats eller modemet? Därför att systemposterna ofta utför arbetet åt andra saker. Irriterande, ja. Värdelöst, nej."
listSummary: "batteri, batteriförbrukning och felsökning"
hub: "battery"
sourceNumber: 25
order: 15
subgroup: "Drain"
tags: ["batteri","batteriförbrukning","felsökning","android","prestanda"]
locale: "sv"
draft: false
---
Dold batteriurladdning handlar främst om att hitta det som håller telefonen vaken när skärmen är avstängd.

## Börja med den tråkiga skärmen

Öppna först **Inställningar > Batteri > Batteriförbrukning**. På Pixel kan du växla mellan app- och systemvyer om alternativet finns. På Samsung använder du batterivyn under **Inställningar > Batteri** eller **Batteri och enhetsvård**, beroende på modell och programversion. Xiaomi, OnePlus, Motorola och andra tillverkare använder andra etiketter, men alla visar någon form av lista över appanvändning.

Leta efter tre mönster:

1. En app med hög bakgrundsanvändning och liten användning i förgrunden.
2. En systempost som ligger högt under flera laddningscykler.
3. En graf som sjunker under en period då skärmen var av och telefonen borde ha varit stilla.

Ett enda dåligt resultat efter en lång säkerhetskopiering i Google Photos eller en Play Store-uppdatering räcker inte. Tre liknande resultat i rad är ett mönster.

## Kontrollera om telefonen faktiskt sover

Androids Doze-läge minskar bakgrundsarbetet när telefonen inte laddas, är inaktiv och ligger stilla. Det skjuter upp jobb och synkronisering, begränsar nätverksåtkomst och samlar underhåll i bestämda fönster. Appar kan fortfarande få begränsade undantag, och högprioriterade aviseringar kan väcka telefonen kort, men en sovande telefon bör göra väldigt lite under långa perioder.

Om batterigrafen visar en jämn nedgång under natten, eller om telefonen känns varm på nattduksbordet, är det något som bryter det lugna tillståndet.

På vissa Android-versioner visar batterigrafen **Awake** eller liknande tidslinjerader. Om **Awake** är aktiv under långa perioder medan **Screen on** inte är det har du hittat en ledtråd. Samsung visar liknande smala statusrader under grafen i många One UI-versioner.

Ingen sådan rad? Gå vidare till nästa nivå.

## Använd säkert läge innan batteriet får skulden

Säkert läge är underskattat. Det inaktiverar tillfälligt nedladdade appar och låter kärnsystemet fortsätta köra. Om den nattliga urladdningen nästan försvinner i säkert läge är hårdvaran förmodligen inte problemet.

Den exakta metoden varierar, men på många Android-telefoner håller du in av/på-knappen och trycker sedan länge på **Stäng av** tills frågan om säkert läge visas. Google beskriver säkert läge som ett sätt att hitta problemappar, och Samsung beskriver det som ett diagnostikverktyg som inaktiverar de flesta tredjepartsappar.

Gör ett nattligt test i säkert läge om urladdningen är allvarlig. Tillbringa inte en vecka där. Om förbrukningen förbättras bör du först ta bort eller begränsa appar som nyligen installerats eller uppdaterats.

## Utvecklaralternativ kan visa vad som är aktivt just nu

Aktivera Utvecklaralternativ genom att öppna **Inställningar > Om telefonen** och trycka sju gånger på **Versionsnummer**. Gå sedan till **Inställningar > System > Utvecklaralternativ** eller motsvarande plats på telefonen.

**Tjänster som körs (Running services)** ger en ögonblicksbild av tjänster som använder minne och ibland CPU. Det är ingen fullständig batterirapport, men det kan avslöja uppenbara problem. Om en shoppingapp, bakgrundsbildsapp, städapp eller gammal träningsapp körs trots att du inte har öppnat den är det värt att undersöka.

**Appar i vänteläge (Standby apps)** eller **Inaktiva appar (Inactive apps)** kan också finnas. Skärmarna visar hur Android klassificerar appaktivitet. De finns inte på alla telefoner, och OEM-tillverkare döljer dem ibland. Det är det besvärliga med Android-diagnostik: verktygen finns, men halva arbetet är att hitta var tillverkaren har lagt dem.

## Använd ADB när du behöver bevis

ADB är det renaste sättet utan root att granska wake locks och batterihistorik. Det kräver mer arbete men minskar gissandet.

Du behöver en dator med platform-tools installerat och USB-felsökning aktiverad på telefonen. Återställ sedan den aktuella statistiken:

```bash
adb shell dumpsys batterystats --reset
```

Använd telefonen som vanligt eller låt den ligga över natten för att registrera urladdning i vila. Exportera sedan rapporten:

```bash
adb shell dumpsys batterystats > batterystats.txt
```

Filen är stor. Sök först efter följande avsnitt:

- **Estimated power use** för uppskattad energianvändning per app i mAh.
- **Wake locks** för appar som höll CPU:n vaken.
- **Alarm Stats** eller larmrelaterade avsnitt för appar som väckte enheten upprepade gånger.
- **Mobile radio** och **Wi-Fi** om urladdningen verkar nätverksrelaterad.

Googles dokumentation om Batterystats och Battery Historian beskriver det officiella arbetsflödet. Batterystats samlar batteridata på enheten, och Battery Historian gör om informationen till en HTML-tidslinje. Battery Historian är överdrivet för en vanlig användare, men användbart när du behöver se wake locks, aktivitet i mobilradion, laddning, skärmläge och batterinivå på samma tidslinje.

Om du bara vill köra ett enda kommando, använd detta:

```bash
adb shell dumpsys batterystats
```

Det namnger inte automatiskt den skyldiga appen på vanlig svenska. Det ger dig bevis.

## De vanliga dolda orsakerna

**Google Play services** är vanligtvis inte boven på egen hand. Tjänsten hanterar pushaviseringar, plats-API:er, kontosynkronisering, närliggande tjänster, appuppdateringar och delar av enhetens säkerhet. Om den visar hög batterianvändning bör du kontrollera synkroniseringsfel i Google-kontot, platsbehörigheter, säkerhetskopiering i Google Photos och om en uppdatering för Play services väntar.

Tvinga inte Google Play services att avsluta och försök inte avinstallera tjänsten. Pixel-supporten är tydlig med att den är integrerad i Android. Rensa cacheminnet, starta om, uppdatera apparna och åtgärda konto- eller platsproblemet bakom posten.

**En misslyckad kontosynkronisering** är tråkig men vanlig. Öppna **Inställningar > Lösenord och konton** eller **Inställningar > Konton** och leta efter varningsikoner, gamla arbetskonton, ändrade lösenord eller tjänster som aldrig blir klara med synkroniseringen. Ta bort kontot om det inte används. Lägg till det på nytt om det behövs.

**Svag signal** kan se ut som systemförbrukning. Om **Mobile network standby** ligger högt bör du göra ett nattligt test i flygplansläge. Samsung nämner svag eller instabil nätverksanslutning som en orsak till snabbare batteriurladdning, och i verkliga hem är det ofta hela förklaringen.

**Widgetar och levande bakgrunder** är lätta att glömma eftersom de ligger på startskärmen, inte i applådan. En väderwidget som uppdaterar platsen med några minuters mellanrum skiljer sig från en statisk klocka. Ta bort nyligen tillagda widgetar under en dag och jämför.

**Bluetooth-tillbehör** kan också fastna i återanslutningsloopar. Klockor, hörlurar, bilsystem och spårare försöker ibland ansluta om och om igen. Om urladdningen började efter att något nytt parkopplades bör du testa en natt med Bluetooth avstängt.

## När du bör misstänka hårdvaran

Programvarurelaterad urladdning lämnar vanligtvis ledtrådar: en app, ett wake lock, aktivitet i mobilradion, värme vid CPU-belastning eller bättre beteende i säkert läge. Hårdvaruproblem är mer envisa.

Några tecken pekar åt det hållet:

- Telefonen förlorar mycket batteri under natten även i flygplansläge.
- Säkert läge förbättrar inte situationen.
- Telefonen är varm trots att den ligger orörd och inte laddas.
- Batterihälsan är minskad eller telefonen stängs av vid slumpmässiga procentsiffror.

På Pixel 8a och senare kontrollerar du **Inställningar > Batteri > Batterihälsa**. Google anger att **Minskad** betyder att batteriet ligger under 80 % återstående kapacitet. På Samsung använder du **Samsung Members > Support > Telefondiagnostik > Batteristatus**.

En tredjepartsapp kan uppskatta kapaciteten, men behandla inte resultatet som laboratoriemätningar. Siffror för batterihälsa är svårtolkade. Temperatur, laddningshistorik, kalibrering och mätmetod påverkar uppskattningen.

## Vad du inte bör göra

Installera inte en batterisparapp som lovar att lösa allt. De flesta sådana appar kopierar Androids inbyggda kontroller, visar annonser och kör egna bakgrundstjänster.

Rensa inte ständigt alla appar från vyn med senaste appar. Android hanterar det automatiskt. Om en app beter sig illa kan du tvinga just den appen att avsluta under **Inställningar > Appar** och sedan uppdatera, begränsa eller ta bort den.

Börja inte med en fabriksåterställning. Den kan rätta till skadade appdata och gamla inställningar, men den kostar tid och berättar inte vad som orsakade urladdningen. Använd den först när batteriskärmen, säkert läge, nätverksåterställning och appbegränsningar inte har hjälpt.

runcheck kan hjälpa när mönstret går över flera kategorier. Batteriurladdning tillsammans med värme pekar åt ett håll. Batteriurladdning tillsammans med svag signal pekar åt ett annat. Batteriurladdning tillsammans med lagringstryck eller tung appanvändning pekar någon annanstans. Lösningen blir bättre när diagnosen inte sker i blindo.
