---
title: "Så kontrollerar du antalet laddningscykler på Android"
description: "Antalet cykler visar hur många fulla laddnings- och urladdningscykler batteriet har genomgått sedan telefonen tillverkades. En cykel motsvarar att 100 % av batteriets kapacitet används. Det behöver inte ske vid ett enda tillfälle. Om du först laddar från 20 % till 70 % och senare från 40 % till 90 % blir de två delarna tillsammans en full cykel."
listSummary: "batteri, hälsa och diagnostik"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Health"
tags: ["batteri","hälsa","diagnostik","android","guide"]
locale: "sv"
draft: false
---
Siffran spelar roll eftersom litiumjonbatterier har en begränsad livslängd som mäts i cykler. De flesta moderna mobilbatterier behåller omkring 80 % av sin ursprungliga kapacitet efter 800-1 000 cykler, beroende på kemi och tillverkare. Därefter blir den dagliga batteritiden märkbart kortare.

Sedan Android 14 kan systemet rapportera cykelantal via BatteryManager API, men om siffran faktiskt visas beror helt på tillverkaren. Ett fåtal nyare telefoner visar den i inställningarna. De flesta gör det inte. Metoderna nedan är ordnade efter hur många enheter de fungerar på, med de bredaste alternativen först, inklusive äldre modeller.

## Spårningsappar: fungerar på nästan alla Android-telefoner

För de flesta telefoner, särskilt modeller från före 2024, är en spårningsapp den mest praktiska utgångspunkten.

AccuBattery uppskattar antalet cykler genom att följa hur mycket laddning som matas in över tid. Installera appen och låt den samla data under minst en vecka och flera laddningstillfällen. Den räknar fram ett ungefärligt värde genom att jämföra den sammanlagda laddningen i milliamperetimmar med batteriets designkapacitet. Ju längre appen körs, desto bättre blir uppskattningen. Om en nyinstallerad AccuBattery redan visar ett cykelantal bygger siffran på mycket begränsade data. Vänta minst två veckor innan du tar den på allvar. Appen fungerar från Android 5.0, vilket omfattar praktiskt taget alla telefoner som fortfarande används.

aBattery arbetar på ett annat sätt. På enheter med Android 14 eller senare, där tillverkaren har implementerat batterihälsa i HAL-lagret, läser appen cykelantal och hälsoprocent direkt från systemet. På äldre enheter eller telefoner med ofullständig HAL-implementering saknas värdena eller är opålitliga. Det går inte att avgöra enbart i appen om uppgiften kommer från hårdvaran eller är ett platshållarvärde.

Begränsningen gäller alla spårningsappar: de uppskattar utifrån laddningsmönster i stället för att läsa en hårdvaruräknare. Uppskattningarna blir bättre med tiden men är inte exakta. Två appar på samma telefon kan visa olika cykelantal eftersom de använder olika beräkningsmetoder.

## Koder i telefonappen: snabb kontroll som ibland fungerar

På vissa telefoner visar koder i telefonappen batteridata som är dolda i inställningarna. Många av koderna går tillbaka till Android 4 eller ännu tidigare, men stödet beror på tillverkare och operatör.

`*#*#4636#*#*` kan fungera på standardnära Android, Pixel och många telefoner från Motorola, Nokia, Sony och andra tillverkare som använder en nästan oförändrad Android-version. Om koden fungerar öppnas en testmeny där "Battery information" visar laddningsnivå, spänning, temperatur och hälsostatus. På de flesta enheter visas inget cykelantal, men det är ändå värt att kontrollera eftersom vissa tillverkare lägger till fler fält. Koden har funnits i över ett decennium och fungerar fortfarande på många äldre telefoner som saknar nyare inbyggda batterisidor.

`*#*#6485#*#*` kan på Xiaomi-, POCO- och Redmi-telefoner visa batteridata, ibland även cykelrelaterad information under tillverkarspecifika fältnamn som `MB_06`. På vissa enheter fungerar den ända tillbaka till MIUI 10 eller tidigare.

`*#0228#` visar spänning, ström och batteristatus på Samsung Galaxy-telefoner. Vanligtvis ingår inget cykelantal.

Om inget händer när du skriver en kod stöder telefonen den inte. Operatörer kan stänga av menyerna, och tillverkare tar ibland bort dem i uppdateringar.

## ADB: den djupaste metoden utan root

Android Debug Bridge ger den mest konsekventa åtkomsten till batteridata mellan olika Android-versioner och kan fungera på telefoner ända tillbaka till Android 4.1. Metoden kräver en dator och omkring fem minuters konfiguration, men den kan visa data som varken appar eller inställningsmenyer exponerar.

Aktivera **Developer options** genom att öppna **Inställningar > Om telefonen** och trycka sju gånger på **Build number**. Aktivera sedan **USB debugging** i Developer options. Anslut telefonen via USB och godkänn anslutningen när frågan visas.

Kör:

`adb shell dumpsys battery`

Resultatet innehåller bland annat CHARGE_COUNTER, spänning, temperatur, status och hälsa. På enheter som rapporterar uppgiften visas fältet CYCLE_COUNT med det verkliga antalet. Vissa Samsung-, Pixel- och Xiaomi-enheter lämnar ut detta via ADB även när uppgiften är dold i inställningarna. På äldre telefoner, före Android 14, är fältet mer ovanligt men fortfarande värt att kontrollera. Vissa tillverkare rapporterade cykeldata via egna egenskaper långt innan Google standardiserade gränssnittet.

Om CYCLE_COUNT saknas har tillverkaren sannolikt inte exponerat det via den här vägen. Inget program kan hämta det verkliga antalet från hårdvara eller firmware som inte lämnar ut uppgiften.

`adb shell dumpsys batteryproperties` kan ibland visa ytterligare fält, särskilt på Android 14 och senare där HAL-specifikationen har utökats. På äldre versioner kan resultatet vara tomt.

## Inbyggda inställningar: bara på nyare telefoner

Allt fler telefoner visar cykelantalet direkt i inställningarna. Om din modell gör det är detta den enklaste vägen. Annars får du använda metoderna ovan.

**Google Pixel 8a och senare** visar antalet under **Inställningar > Om telefonen > Batteriinformation**, tillsammans med tillverkningsdatum och datum för första användning. Pixel 6 till Pixel 8 Pro har inte den här sidan. Google införde den med Pixel 8a och fortsatte med serierna Pixel 9 och Pixel 10. Äldre Pixel-modeller kräver ADB eller en spårningsapp.

**Samsung Galaxy S25-serien och senare** kan visa batterihälsa i procent och cykelantal under **Settings > Battery > Battery info** på One UI-versioner och i regioner som stöds. Samsungs utrullning har varierat mellan modeller och marknader, så utgå inte från att sidan finns bara för att telefonen har fått en ny One UI-version. På många äldre Galaxy-telefoner visar Samsung Members en allmän bedömning som Normalt, Svagt eller Dåligt, men inget exakt antal eller procentvärde.

**OnePlus- och OPPO-telefoner** med nyare versioner av OxygenOS eller ColorOS kan visa batterihälsa under **Settings > Battery > Battery health**, men cykelantalet varierar beroende på modell och region. OnePlus 7 och äldre exponerar inte uppgiften.

Grundproblemet är fortfarande fragmenteringen. Apple standardiserade visning av batterihälsa på iPhone-modeller som stöds från iOS 11.3, med stöd från iPhone 6 och senare. Android gjorde uppgifterna tillgängliga via API men lät varje tillverkare avgöra om de faktiskt skulle rapporteras. Fler telefoner visar informationen för varje år, men de flesta Android-enheter som används i dag gör det fortfarande inte.

## Vad cykelantalet betyder i praktiken

Siffran i sig är bara en räknare. Det viktiga är hur många cykler batteriet är klassat för.

Google klassar batterierna i Pixel 3 till Pixel 8 Pro för omkring 800 cykler innan kapaciteten når 80 %. Pixel 8a och senare är klassade för 1 000 cykler. Förbättringen hänger ihop med uppdaterad batterikemi och programvarufunktioner som Hjälp med batterihälsa, som gradvis sänker den högsta laddningsspänningen när batteriet åldras.

Nyare telefoner på EU-marknaden måste klara minst 800 laddnings- och urladdningscykler och samtidigt behålla minst 80 % av kapaciteten. Vissa nya premiumtelefoner är klassade för omkring 1 000 cykler. Äldre eller billigare modeller utanför EU kan ha lägre klassning.

En telefon med 400 cykler har grovt räknat använt hälften av batteriets förväntade cykelliv. Vid 800 cykler på ett batteri som är klassat för 800 bör kapaciteten fortfarande ligga omkring 80 %. Ett batteri på 5 000 mAh fungerar då som ett på ungefär 4 000 mAh. Vid 1 200 cykler kan den dagliga batteritiden vara hälften av vad den var när telefonen var ny.

Siffrorna förutsätter normal laddning: rumstemperatur, vanliga laddare och att batteriet inte ligger länge på 100 % eller 0 %. Snabbladdning i hög temperatur påskyndar slitaget, och det syns inte i cykelantalet. Två telefoner med 500 cykler kan ha mycket olika batterihälsa om den ena laddades över natten med smart laddning och den andra snabbladdades i en varm bil.

## När cykelantalet inte går att få fram

Om ingen av metoderna fungerar på din telefon kan vardagliga tecken ändå ge vägledning. Skärmtiden kan ha minskat jämfört med för sex månader sedan, telefonen kan stängas av vid 15-20 %, batterinivån kan hoppa ryckigt från 30 % till 12 % på ett ögonblick eller enheten kan bli varm vid lätt användning. Allt detta tyder på att batteriet har passerat sin bästa tid.

Tillsammans med en uppskattning av batterihälsan från AccuBattery efter några veckors uppföljning ger beteendet en rimlig bild även utan ett exakt cykelantal.

## Vanliga frågor

**Minskar cykelantalet om laddningen begränsas till 80 %?**
Nej. Delar av cykler räknas fortfarande ihop. Laddning från 20 % till 80 % motsvarar 0,6 cykel. Vinsten med en gräns på 80 % är inte färre cykler, utan mindre belastning på cellerna vid hög laddningsnivå. Det bromsar den kemiska nedbrytningen oberoende av cykelantalet.

**Är 500 cykler mycket?**
Det beror på telefonen. Vid en full cykel om dagen tar det omkring 18 månader. Vid 0,7 cykel om dagen, till exempel laddning från 30 % till 100 %, tar det mer än två år att nå 500. Om det är "mycket" beror på den klassade livslängden för batteriet i just den modellen.

**Varför visar min Samsung inget cykelantal efter uppdateringen till One UI 7?**
Samsung begränsade funktionen till vissa regioner och modeller. Galaxy S25-serien visar den mest konsekvent, men även på enheter som stöds beror tillgängligheten på firmwareversion och marknad. Samsung har inte bekräftat någon tidsplan för en bredare utrullning.

**Kan cykelantalet nollställas?**
En verklig hårdvaruräknare nollställs inte av en fabriksåterställning, batterikalibrering eller ny ROM. Om räknaren är knuten till batteripaketet eller batterimätaren är ett fysiskt batteribyte det enda sättet att börja om. På telefoner som bara visar ett appbaserat uppskattat antal kan avinstallation eller rensning av appdata nollställa uppskattningen. Det är ännu ett skäl att inte behandla appvärden som hårdvarufakta.
