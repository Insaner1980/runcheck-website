---
title: "Vad är termisk strypning och hur påverkar den telefonen?"
description: "Varför känns en snabb telefon plötsligt långsam halvvägs genom ett spel, ett videosamtal eller en längre stund med kameran? Oftast beror det på termisk strypning. Enheten har blivit varm, så Android och tillverkaren sänker prestandan innan värmen blir ett säkerhetsproblem."
listSummary: "temperatur, värme och android"
hub: "thermal"
sourceNumber: 56
order: 4
tags: ["temperatur","värme","android","felsökning","hårdvara"]
locale: "sv"
draft: false
---
## Vad termisk strypning innebär

Det är en kontrollerad nedbromsning. Telefonen kan sänka hastigheten för CPU och GPU, minska skärmens ljusstyrka, dra ned laddningseffekten, begränsa radiofunktionernas aktivitet eller ändra annat som förbrukar mycket ström för att få ned temperaturen.

Det är inte ett fel i sig. Telefonen väljer en lägre prestandanivå så att batteriet, skärmen, modemet och SoC hålls inom tillverkarens säkerhetsgränser.

Du märker kompromissen som tappade bildrutor, långsammare appstarter, dämpad ljusstyrka, begränsningar i kameran, långsammare laddning eller ett spel som börjar flyta fint men sedan blir ryckigt. Android frågar inte om lov. Systemet gör det bara.

## Androids temperaturnivåer

Android har haft offentliga API:er för termisk status sedan Android 10. På enheter som stöds kan appar läsa förenklade allvarlighetsnivåer via `PowerManager`:

- **None:** Ingen termisk strypning pågår.
- **Light:** Lätt strypning som vanligtvis inte påverkar normal användning särskilt mycket.
- **Moderate:** Viss strypning, men telefonen är oftast fortfarande fullt användbar.
- **Severe:** Kraftig strypning där prestandan påverkas tydligt.
- **Critical:** Plattformen har redan minskat effektförbrukningen kraftigt.
- **Emergency:** Viktiga komponenter kan börja stängas av på grund av temperaturen.
- **Shutdown:** Enheten måste stängas av omedelbart.

Etiketterna är standardiserade. Temperaturerna som utlöser dem är det inte. En Pixel, en Galaxy S Ultra, en Xiaomi-speltelefon och en billig Motorola kan koppla värme till nivåerna på olika sätt, eftersom kylning, batterier, ramar, skärmar och säkerhetsmarginaler skiljer sig åt.

Det är därför exakta temperaturråd snabbt blir röriga. En telefon kan börja strypa vid en batteritemperatur som en annan modell klarar under laddning.

## Thermal headroom ger en bättre tidig varning

Termisk status visar vilket läge telefonen befinner sig i just nu. Thermal headroom visar hur nära den aktuella belastningen är kraftig strypning.

Androids vägledning för spelprestanda använder en skala där 0,0 betyder gott om termiskt utrymme och 1,0 är tröskeln för `THERMAL_STATUS_SEVERE` vid den aktuella belastningen. På nyare API:er kan värdet även ligga över 1,0 när enheten har passerat den nivån. Spel kan använda signalen för att sänka bildfrekvensen eller grafikkvaliteten innan spelaren märker nedbromsningen.

Det finns en hake: stödet varierar mellan enheter. Vissa telefoner lämnar begränsade uppgifter, vissa returnerar `NaN` om funktionen anropas för ofta och mappningen kan skilja sig mellan olika termiska konstruktioner. Bra diagnostik behandlar thermal headroom som en signal, inte som en universell termometer.

runcheck använder Androids offentliga termiska signaler när enheten exponerar dem. Det är viktigt, eftersom vanliga appar inte bör förlita sig på privata temperaturfiler i sysfs för termisk status som visas för användaren.

## Vad som utlöser strypning

Långa spelsessioner är det uppenbara fallet. Ett 3D-spel kan belasta CPU, GPU, skärm, högtalare, nätverk och haptik samtidigt.

Kameran är en annan vanlig orsak. Inspelning i 4K eller 8K, HDR-bearbetning, långa videoklipp och direkt solljus kan värma upp telefonen snabbt. Kameraappar kan sänka kvaliteten eller avbryta inspelningen när enheten blir för varm.

Navigering går långsammare men är lätt att underskatta. Skärmen är tänd, GPS används, modemet hämtar kartdata och telefonen kan sitta i ett varmt bilfäste. Lägg till direkt solljus genom vindrutan, så kommer strypningen snabbare.

Att ladda under aktiv användning är ett enkelt misstag. Snabbladdning skapar värme redan på egen hand. Lägg till ett spel, videosamtal, en surfzon eller videoinspelning, så får telefonen mindre möjlighet att kylas.

Svag signal kan också pressa modemet. En telefon som kämpar för att hålla 5G i ett område med dålig täckning kan bli varm även när skärmen är släckt.

Stora systemuppdateringar kan också ge tillfällig värme. Android 17 släpptes först till de flesta kompatibla Pixel-enheter, medan andra Android-telefoner får tillverkarnas versioner enligt sina egna tidplaner. Efter en större uppdatering kan appoptimering och synkronisering i bakgrunden göra telefonen varm i en dag eller två.

## Termisk strypning jämfört med batterirelaterad begränsning

Den här typen av strypning är tillfällig. Avsluta belastningen, låt telefonen svalna, så återkommer prestandan.

Batterirelaterad prestandahantering är något annat. När batteriet åldras ökar den interna resistansen och förmågan att leverera toppeffekt försämras. Vissa telefoner sänker laddningsspänningen, laddningshastigheten eller annan prestanda för att hålla ett åldrande batteri stabilt. Google dokumenterar till exempel Hjälp med batterihälsan på Pixel-modeller som stöds, däribland Pixel 6a, där batteriets högsta spänning justeras stegvis från 200 laddningscykler och framåt.

Det är inte samma sak som att ett spel blir långsamt efter 20 minuter. Det ena handlar om värme under belastning. Det andra handlar om hantering av ett åldrande batteri.

Lösningen är också olika. Värme kräver bättre kylning och lägre belastning. Ett slitet batteri behöver bytas eller laddas mer försiktigt.

## Så märker du att det händer

Det tydligaste tecknet är att prestandan försämras under en pågående session. Ett spel börjar i 60 fps och faller sedan. Kameran spelar först in utan problem men visar senare en temperaturvarning. Skärmen blir mörkare trots att du inte har ändrat ljusstyrkan. Laddningen pausas eller blir betydligt långsammare.

Platsen där telefonen känns varm kan också ge en ledtråd. Värme nära kameran pekar ofta mot SoC. Värme mitt på baksidan pekar mer mot batteriet eller spolen för trådlös laddning. Värme vid USB-C-porten kan tyda på belastning i kabeln, laddaren eller laddningskretsen.

Appar som läser Androids termiska status kan göra situationen mindre vag. Att statusen går från None till Light och sedan Moderate under ett spel är väntat. Severe, Critical eller upprepade händelser på Shutdown-nivå under normal användning är det inte.

## Så minskar du strypningen

Sänk belastningen innan telefonen tvingas göra det åt dig.

Börja med bildfrekvensen i spel. Det ger ofta störst effekt. Sänk sedan upplösning, skuggor, effekter och texturkvalitet. En medelinställning med stabil bildfrekvens känns vanligtvis bättre än en ultrainställning som börjar strypa efter tio minuter.

Ta av skalet under tung användning. Bakstycket och ramen är en del av telefonens kylning.

Använd Wi-Fi i stället för mobildata när mobilsignalen är svag. Dålig täckning kan göra en normal session onödigt varm.

Undvik direkt solljus. En telefon kan börja strypa i ett soligt bilfäste även när belastningen inte är extrem.

Snabbladda inte under tung användning. Koppla ur laddaren eller använd en långsammare laddare om du behöver fortsätta spela.

Håll appar och system uppdaterade. Tillverkarna finjusterar den termiska styrningen över tid, och en dålig appuppdatering kan också skapa värme tills den rättas.

## När strypning pekar på ett större problem

Strypning under ett krävande spel är normalt. Strypning när du skriver ett meddelande på ett svalt skrivbord är det inte.

Om telefonen blir varm när den inte används, kontrollera batteriförbrukning, signalstyrka, nyligen installerade appar och säkert läge. Om den fortfarande blir varm i säkert läge, eller om batteriet är svullet, laddas ur plötsligt eller telefonen stängs av trots att laddning finns kvar, bör du behandla det som ett maskinvaru- eller batteriproblem.

Batterihälsa under 80 % är en vanlig gräns för att överväga batteribyte på telefoner som visar värdet. På Pixel-modeller som stöds betecknar Google kapacitet under 80 % som Minskad. Samsung Members visar batteristatus som Normalt, Svagt eller Dåligt. De här statusarna är mer användbara än att försöka bedöma batteriet enbart efter värmen.

## Slutsats

Telefonens termiska säkerhetssystem är inte fienden. Du kan minska strypningen genom att sänka belastningen, förbättra kylningen, undvika varma miljöer och inte kombinera snabbladdning med tung användning. Men om strypningen uppstår vid lätt användning bör du inte ignorera den. Då kan problemet vara en app, svag signal, laddaren eller ett slitet batteri.

*Metabeskrivning: Androids inbyggda termiska nedbromsning skyddar telefonen mot värme. Lär dig Androids temperaturnivåer, thermal headroom, vanliga orsaker och hur du minskar strypningen på ett säkert sätt.*
