---
title: "Så testar du telefonens högtalare och mikrofon"
description: "De flesta ljudproblem i telefoner beror inte på trasiga högtalare eller mikrofoner. Ofta handlar det om ludd, Bluetooth-routning, appbehörigheter, ett dåligt skal, vatten i ett galler eller ett nätverkssamtal som låter som ett hårdvarufel."
listSummary: "De flesta ljudproblem i telefoner beror inte på trasiga högtalare eller mikrofoner."
hub: "hardware"
sourceNumber: 107
order: 4
tags: ["hårdvara","testning","diagnostik","android","guide"]
locale: "sv"
draft: false
---
Det gör inte problemet mindre irriterande. Om den du ringer inte hör dig eller högtalaren sprakar redan vid halva volymen behöver du fortfarande ta reda på vilken del som krånglar.

## Ta reda på vilken ljuddel du testar

De flesta Android-telefoner har mer än en högtalare och mer än en mikrofon.

Samtalshögtalaren sitter nära telefonens ovankant och används vid vanliga samtal. Huvudhögtalaren sitter oftast längst ned och används för högtalarläge, media, alarm och ringsignaler. Många telefoner använder båda samtidigt för stereoljud.

Huvudmikrofonen sitter vanligtvis nära USB-C-porten. En sekundär mikrofon nära ovankanten hjälper till med brusreducering under samtal. Vissa telefoner har en tredje mikrofon för videoinspelning eller zoomljud.

Delarna kan gå sönder var för sig. En telefon kan låta bra i högtalarläge men uselt genom samtalshögtalaren. Den kan spela in tydliga röstanteckningar men låta dåligt under samtal eftersom samtalsbehandling, nätverkskvalitet eller den sekundära mikrofonen påverkar resultatet.

## Testa huvudhögtalaren

Öppna `Inställningar > Ljud och vibration` eller närmaste motsvarande ljudmeny på telefonen och spela upp en ringsignal. Höj medievolymen medan ljudet spelas.

Lyssna efter skrammel, surr, sprak eller plötsliga volymfall. Spela sedan musik eller en video som du känner väl. En enkel ringsignal avslöjar inte mycket om basdistorsion eller skarpa höga frekvenser.

Om telefonen har stereohögtalare kan du täcka en högtalare i taget med fingret. Målet är inte perfekt balans. Sidan med samtalshögtalaren är ofta svagare än den nedre högtalaren. Det du letar efter är att ena sidan är tyst, kraftigt förvrängd eller mycket svagare än normalt.

Testa inte bara vid maximal volym. Vissa skadade högtalare förvränger ljudet vid medelhög volym, medan ett blockerat galler kan låta acceptabelt på hög volym men dovt vid normal lyssning.

## Testa samtalshögtalaren

Ring ett vanligt telefonsamtal och håll telefonen mot örat. Höj samtalsvolymen under samtalet, inte före. Android har separata reglage för media, ringsignal och samtalsljud.

Lyssna efter låg volym, sprak, avbrott eller ljud som förändras när du trycker lätt nära telefonens ovankant. Det sista kan tyda på en lös anslutning till samtalshögtalaren efter ett fall.

Om du inte vill störa någon kan du ringa röstbrevlådan eller en annan linje som du själv kontrollerar. Det viktiga är att telefonen använder samtalshögtalaren och inte den nedre högtalaren.

## Testa mikrofonen med en inspelning

Öppna telefonens inbyggda inspelningsapp eller en annan betrodd ljudinspelningsapp. Spela in 10-15 sekunder med normal röststyrka från ungefär en armlängds avstånd.

Spela upp klippet. Rösten ska vara tydlig, jämn och tillräckligt stark utan brus, surr eller ett ljud som om du pratade genom en filt.

Vänd sedan telefonen och spela in ett nytt klipp medan du talar mot ovankanten. Det isolerar inte alltid den sekundära mikrofonen eftersom inspelningsappar väljer mikrofon på olika sätt, men det kan avslöja blockerade öppningar eller stora skillnader.

Om inspelningen låter bra men personer i samtal säger att du låter robotliknande ska du inte direkt boka en mikrofonreparation. Robotliknande samtalsljud beror oftast på nätverksfördröjning, paketförluster, problem med wifi-samtal eller operatörens ljudbehandling.

## Testa mikrofonen under samtal

Ring någon som ger ärlig återkoppling. Ställ tre tydliga frågor:

- Är min röst klar eller dov?
- Hör du statiskt brus, surr eller ett vindliknande ljud?
- Försvinner rösten i korta avbrott?

Växla till högtalarläge och fråga igen. Högtalarläget använder mikrofoner och brusreducering på ett annat sätt. Om vanliga samtal fungerar dåligt men högtalarläget låter bra kan problemet finnas i huvudmikrofonens signalväg, det vanliga samtalsläget eller brusreduceringen.

Testa både wifi-samtal och mobilnät om båda är tillgängliga. Om samtalskvaliteten förändras kraftigt mellan dem samtidigt som röstinspelningar förblir rena är mikrofonen troligen inte huvudproblemet.

## Använd inbyggd diagnostik

Samsung Galaxy-telefoner har två bra alternativ. Samsung Members är det säkrare: öppna appen, välj Support och starta Telefondiagnostik. Kör testerna för högtalare och mikrofon, eller kör hela testpaketet. Beroende på appversion kan knappen heta Kom igång eller Visa tester. Många Galaxy-telefoner stöder även `*#0*#`, som innehåller tester för Speaker och Receiver.

Google Pixel-telefoner kan öppna Pixel Diagnostics genom att slå `*#*#7287#*#*` när telefonen är ansluten till internet, på enheter som stöds. Det är den nuvarande diagnostikvägen för Pixel, inte äldre signalrelaterade koder som fortfarande kopieras runt på nätet.

Motorola-telefoner har vanligtvis appen Device Help. Gå till `Device Help > Device diagnosis > Hardware test > Microphone` eller motsvarande högtalartest.

Xiaomi-, Redmi- och POCO-telefoner använder ofta CIT-menyn via `*#*#6484#*#*`, med separata tester för högtalare, samtalshögtalare och mikrofon.

Om tillverkarens test godkänns men mikrofonen fortfarande inte fungerar i en viss app ska du kontrollera appens behörighet innan du gör något annat.

## Uteslut vanliga orsaker som inte är hårdvarufel

Börja med det fysiska. Ta bort skalet och testa igen. Vissa skal ligger inte rätt över mikrofonhålen, särskilt billiga robusta skal och universalskal.

Rengör öppningarna med en torr borste med mjuka strån. Borsta tvärs över gallret i stället för att trycka in något i det. Luft med lågt tryck kan hjälpa, men rikta inte kraftig tryckluft rakt in i högtalar- eller mikrofonhålen.

Koppla från Bluetooth. Telefoner skickar gärna ljud till hörlurar, klockor, bilar och högtalare som du glömt är anslutna. Stäng av Bluetooth helt under ett test.

Kontrollera mikrofonbehörigheten under `Inställningar > Appar > appens namn > Behörigheter`. Kontrollera även reglaget för mikrofonåtkomst i snabbinställningarna om telefonen har ett sådant. Om panelen `Sensors off` har aktiverats i Utvecklaralternativ ska du stänga av den, eftersom den kan blockera mikrofonen och andra sensorer.

Kontrollera Stör ej och volymen, men kontrollera rätt volym. Under ett samtal höjer volymknappen samtalsvolymen. Under medieuppspelning ändrar den medievolymen.

## Hur är det med vatten?

Vatten i högtalarkammaren gör ljudet dovt, svagt eller surrande. Låt telefonen torka på en ventilerad plats. Använd inte värme, lägg den inte i ris och tryck inte in vassa verktyg i gallret.

Appar som spelar lågfrekventa toner kan ibland hjälpa till att flytta ut vatten ur en högtalare, men använd dem försiktigt och med måttlig volym. De är inga mirakelverktyg och reparerar inte korrosion eller en skadad mikrofon.

Om telefonen utsatts för saltvatten, poolvatten eller en söt dryck räcker det kanske inte att bara låta den torka. Sådana vätskor lämnar rester efter sig.

## När en reparation är rimlig

En reparation är värd att överväga när problemet finns i flera appar, fortsätter utan skal och med Bluetooth avstängt, ger underkänt resultat i tillverkarens diagnostik och finns kvar efter en omstart eller ett test i säkert läge.

Att byta en högtalare är ofta enklare än att byta en skärm. En mikrofonreparation kan vara mer omfattande eftersom huvudmikrofonen kan sitta på laddportens flexkabel eller ett nedre kretskort. Den exakta kostnaden beror mycket på modell, tätning, reservdelstillgång och om telefonen har öppnats tidigare.

Om telefonen omfattas av garanti bör du kontakta tillverkaren eller återförsäljaren innan du anlitar en fristående verkstad. I Sverige reklamerar du i första hand till företaget som sålde telefonen, och reklamationsrätten gäller i tre år för ursprungliga fel. Vätske- och stötskador kan påverka både garanti och reklamation, men ett vanligt ljudfel är värt att rapportera.

## Snabba svar

### Varför fungerar högtalarläget när vanliga samtal låter hemskt?

Huvudhögtalaren och samtalshögtalaren är separata delar. Vanligt samtalsläge använder dessutom en annan mikrofonbehandling. Testa samtalshögtalaren och samtalsmikrofonen var för sig.

### Kan en programuppdatering lösa ljudproblem?

Ja, om problemet gäller ljudroutning, drivrutinsbeteende, behörigheter eller samtalsbehandling. Nej, om högtalarkonen är trasig, mikrofonöppningen har korroderat eller en kontakt sitter löst.

### Varför låter jag dov bara i en app?

Det pekar vanligtvis på appbehörigheter, appens brusreducering, Bluetooth-routning eller att appen väljer fel mikrofon. Testa med den inbyggda inspelningsappen och ett vanligt telefonsamtal.

### Hur testar jag mikrofonen för brusreducering?

Ring ett samtal i en miljö med måttligt bakgrundsljud och jämför vanligt samtalsläge med högtalarläge. Om den andra personen hör mycket mer bakgrundsljud än väntat kan den sekundära mikrofonen eller brusreduceringens signalväg vara inblandad. Tillverkarens diagnostik kan bekräfta mer än ett vanligt testsamtal.
