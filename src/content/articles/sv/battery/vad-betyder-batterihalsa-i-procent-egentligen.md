---
title: "Vad betyder batterihälsa i procent egentligen?"
description: "Siffran för batterihälsa visar slitage. Den är inte samma sak som batteriprocenten i statusfältet."
listSummary: "Siffran för batterihälsa visar slitage."
hub: "battery"
sourceNumber: 13
order: 3
subgroup: "Health"
tags: ["batteri","hälsa","diagnostik","android","guide"]
locale: "sv"
draft: false
---
Om telefonen visar 87 % batterihälsa kan cellen lagra omkring 87 % av den laddning den rymde när den var ny. Den fungerar fortfarande. Tanken har bara blivit mindre.

**Metabeskrivning:** Batterihälsa i procent visar telefonens nuvarande maximala kapacitet jämfört med när batteriet var nytt. Läs vad siffran betyder, varför 80 % spelar roll och hur Android-telefoner rapporterar den.

## Siffran bakom siffran

Varje mobilbatteri har från början en designkapacitet. Det är den laddningsmängd som cellen är byggd för att lagra, vanligtvis angiven i mAh. En telefon med ett stort batteri på 5 000 mAh ska kunna hålla ungefär så mycket när batteriet är nytt.

Sedan börjar kemin göra sig påmind. Varje laddnings- och urladdningscykel sliter lite på cellen. Värme, hög spänning, djup urladdning, snabbladdning och själva tiden bidrar. Skiktet av fast elektrolyt inne i batteriet blir tjockare, den inre resistansen ökar och mindre aktivt litium finns kvar för att flytta laddning mellan elektroderna.

Hälsoprocenten jämför den nuvarande fulladdningskapaciteten med den ursprungliga klassningen. Om batteriet numera som mest rymmer omkring 4 350 mAh är hälsan ungefär 87 %.

Det är den användbara delen av siffran. Den visar hur mycket mindre "fulladdat" har blivit.

## Hälsoprocent är inte laddningsprocent

Det är lätt att blanda ihop begreppen. Laddningsprocenten visar hur fullt batteriet är just nu. Batterihälsan visar hur mycket energi batteriet kan lagra när det är fullt.

En telefon med 100 % laddning och 85 % batterihälsa bär inte på lika mycket energi som den gjorde vid 100 % laddning när den var ny. Den är full i förhållande till sin nuvarande, slitna kapacitet. Därför kan två telefoner båda visa 100 % i statusfältet men ändå räcka mycket olika länge.

Batteriets storlek påverkar också hur siffran upplevs. En telefon med 5 500 mAh och 82 % batterihälsa kan fortfarande hålla längre än en kompakt telefon med 95 %. Procenttalet är användbart, men det berättar inte allt.

## Så visar Android batterihälsa

Android har aldrig hanterat batterihälsa lika enhetligt som iOS. Under många år bestod den synliga batteriinformationen för de flesta användare av en enkel status som Good, Overheat, Dead, Cold, Over Voltage, Unknown eller Unspecified failure. Den anger tydliga feltillstånd, inte en exakt procentsiffra för kapaciteten.

Vissa telefoner visar fortfarande bara den grundläggande statusen. På enheter med standardnära Android kan testmenyn `*#*#4636#*#*` visa batteriinformation om tillverkaren har lämnat den aktiverad. Många telefoner döljer menyn. Andra visar temperatur och spänning men ingen batterihälsa.

Android 17 gör inte funktionen universell. Versionen lanserades först för Pixel-enheter som stöds, men visningen av batterihälsa beror fortfarande på modellen och vilka data hårdvaran lämnar ut.

Pixel är det tydligaste aktuella exemplet på en riktig sida för batterihälsa. På Pixel 8a och senare visar Google Batterihälsa under **Inställningar > Batteri > Batterihälsa**. Statusen kan vara Normal, Minskad eller Inte tillgängligt, och sidan för Batterikapacitet visar en uppskattad kapacitet i procent jämfört med det ursprungliga batteriet. Äldre Pixel-modeller som fortfarande stöds, däribland Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 och Pixel 8 Pro, visar inte statusen för batterihälsa även om de kan ha andra funktioner för batterihantering.

Samsung använder en annan väg. Samsung Members kan köra telefondiagnostik och rapportera batteristatus. Nyare One UI-versioner visar också mer batteriinformation i inställningarna på vissa modeller, men både formuleringar och tillgängliga uppgifter varierar beroende på enhet och region.

Andra Android-märken är ojämna. Vissa telefoner från Xiaomi, HONOR, OnePlus, OPPO och realme visar maximal kapacitet i batteriinställningarna. Äldre enheter, budgetmodeller och telefoner med begränsade data från batteriets mätkrets gör det ofta inte. I teorin har Android bättre ramverksstöd för batteridata än tidigare. I praktiken avgör hårdvaran och OEM-programvaran vad du faktiskt får se.

Det är därför runcheck behandlar batterihälsan som en signal bland flera, inte som ett slutgiltigt besked. När telefonen lämnar ut hälsostatus, spänning, temperatur, ström, cykelantal eller kapacitetsdata kan runcheck visa uppgifterna med tillförlitlighetsmarkeringar i stället för att låtsas att alla Android-enheter rapporterar data av samma kvalitet.

## Varför alla pratar om 80 %

Siffran 80 % är inte magisk. Den är bara en vanlig gräns för batteriets praktiska livslängd.

Under 80 % av den ursprungliga kapaciteten har drifttiden ofta blivit så mycket kortare att många börjar märka det. Den inre resistansen är vanligtvis också högre, vilket ökar risken för ett kraftigt spänningsfall under belastning. Då kan telefonen stängas av under en snabb bildserie, ett spel eller en kall promenad trots att batteriprocenten nyss såg fullt rimlig ut.

Moderna mobiltillverkare anger olika mål för antalet cykler, så äldre råd om "300-500 cykler" är alltför förenklade. Google anger att Pixel 8a och senare ska behålla upp till 80 % kapacitet efter omkring 1 000 laddningscykler. Pixel 3 till Pixel 8 Pro samt Pixel Fold är klassade för omkring 800 cykler. I EU måste smarttelefoner och surfplattor som släpps ut på marknaden uppfylla ett ekodesignkrav på minst 800 laddnings- och urladdningscykler samtidigt som minst 80 % av den ursprungliga kapaciteten återstår.

I vardagen skulle jag tolka siffrorna så här:

- Över 85 % är vanligtvis helt okej, om telefonen inte hade ett litet batteri redan från början.
- Omkring 80 % är nivån där personer som använder telefonen mycket ofta börjar planera ett batteribyte.
- Under 75 % är klagomål på batteritiden inte längre särskilt förvånande.
- Under 70 % är ett byte vanligtvis det praktiska valet om du tänker behålla telefonen.

Det här är inga lagar. Det är beslutsgränser.

## Varför siffran kan vara fel

Batterihälsan är en uppskattning. Telefonen tar inte ut batteriet och mäter det i ett laboratorium under kontrollerade förhållanden.

En mätkrets uppskattar kapaciteten genom att följa laddningen som går in i och ut ur batteriet, läsa spänning och temperatur och jämföra allt med en modell för hur cellen bör bete sig. Modellen kan börja driva. Långa perioder med grunda laddningar, ett batteribyte, en systemuppdatering eller en period med ovanliga temperaturer kan få det rapporterade värdet att röra sig.

Små hopp är normala. Om batterihälsan går från 88 % till 90 % efter några mer fullständiga laddningscykler har batteriet inte läkt. Uppskattningen har blivit bättre.

Appar från tredje part har samma begränsning, men använder en annan metod. AccuBattery uppskattar till exempel kapaciteten genom att mäta laddningsströmmen under laddningstillfällen och räkna fram ett genomsnitt över tid. Det kan vara användbart efter en eller två veckors normal laddning, men ett enda tillfälle räcker inte. En billig kabel, värme, en delladdning eller en telefon som sänker laddningshastigheten nära 80 % kan snedvrida resultatet.

Hårdvaran spelar också roll. Flaggskeppstelefoner har ofta bättre mätkretsar än billiga modeller. Vissa enheter rapporterar stabila och användbara värden. Andra visar 100 % för alltid eftersom de inte lämnar ut verkliga uppgifter om åldrande.

## Vad du bör göra med siffran

Se hälsovärdet som en trend. En enskild mätning är intressant. En nedgång över sex månader säger mer.

Om telefonen visar 89 % och fortfarande räcker hela dagen behöver du inte göra något. Om den visar 78 % och måste laddas två gånger om dagen är det sannolikt värt att ta reda på priset för ett batteribyte. Stängs telefonen av vid 25 %, blir varm vid lätt användning eller hoppar mellan procentnivåer är symptomen viktigare än själva siffran.

Om batteriet börjar svälla ska du sluta använda telefonen. Då spelar hälsoprocenten inte längre någon roll.

runcheck är användbart här eftersom du kan se batterihälsa tillsammans med temperatur, spänning, strömmätningens tillförlitlighet, urladdningshastighet och historik. Batteriets åldrande visar sig sällan i en enda prydlig siffra. Det visar sig som ett mönster.

## Vanliga frågor

### Är 85 % batterihälsa dåligt?

Nej. Vid 85 % har cellen förlorat kapacitet, men de flesta telefoner är fortfarande användbara. Ett batteri som ursprungligen var på 5 000 mAh rymmer till exempel omkring 4 250 mAh vid 85 % hälsa. Det kan räcka en hel dag beroende på telefon och användning.

### Kan batterihälsan öka igen?

Den verkliga kemiska kapaciteten kommer inte tillbaka. Åldrandet i ett litiumjonbatteri är permanent. Det rapporterade värdet kan däremot stiga om telefonen först underskattade kapaciteten och senare räknar om den mer korrekt.

### Varför visar telefonen "Good" i stället för en procentsiffra?

Många Android-telefoner lämnar bara ut en grundläggande status för batteriets skick. "Good" betyder att Android inte ser något feltillstånd. Det betyder inte att cellen fortfarande har 100 % av sin ursprungliga kapacitet.

### Ska jag byta batteriet exakt vid 80 %?

Inte automatiskt. Byt när telefonen inte längre räcker genom dagen, när den stängs av oväntat eller när hälsostatusen visar Minskad och batteritiden har blivit ett problem. Gränsen på 80 % är en signal att börja planera, inte en nedräkning.
