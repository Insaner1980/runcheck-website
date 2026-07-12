---
title: "Vad betyder telefonens hälsopoäng och hur beräknas den?"
description: "Öppna Inställningar på valfri Android-telefon och batteriinformationen finns på ett ställe, lagringsuppgifterna på ett annat och nätverksinformationen någon annanstans. Hälsopoäng samlar allt detta, batteri, temperatur, nätverk och lagring, i ett enda värde som vanligtvis går från 0 till 100. En avläsning i stället för fyra."
listSummary: "temperatur, värme och android"
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["temperatur","värme","android","felsökning","hårdvara"]
locale: "sv"
draft: false
---
Android definierar ingen universell hälsopoäng för telefoner. Det finns ingen gemensam sida i Android där "82/100" betyder samma sak på alla märken. Samsung Batteri och enhetsvård kan visa ett optimeringsvärde av 100, och Pixel Enhetshälsa och support visar övergripande status och funktionsstatus, men det är tillverkarnas egna verktyg, inte en gemensam Android-standard. Diagnostikappar använder egna beräkningsmodeller. Vad som ingår i poängen, och var modellen har sina begränsningar, är viktigare än själva talet.

## Vad hälsopoängen mäter

En användbar hälsopoäng hämtar vanligtvis data från fyra kategorier och väger dem efter hur mycket de påverkar vardagsanvändningen. De exakta vikterna är inte standardiserade.

**Batteriet** bör väga tyngst. I runchecks beräkningsmodell står det för 40 % av totalpoängen. Det är rimligt eftersom ett slitet batteri oftast är det mest märkbara problemet i en åldrande telefon. Batteridelen tar hänsyn till hälsostatusen som Androids BatteryManager API rapporterar, batteritemperatur, spänning och, när telefonen lämnar ut ett tillförlitligt värde, batterihälsa i procent. BatteryManager kan exempelvis rapportera tillstånd som "Good", "Overheat", "Dead" eller "Cold". Android 14 införde mer detaljerade API:er för batterihälsa, men antal laddningscykler och hälsoprocent är bara tillgängliga när tillverkaren och batteriets HAL tillhandahåller uppgifterna. Ett batteri med 92 % hälsa som håller 31 °C får ett högt delresultat. Ett batteri med 74 % hälsa som samtidigt ligger varmt på 39 °C drar ned poängen tydligt.

**Temperaturtillståndet** står för 25 % i runchecks modell. Android rapporterar aktuell termisk status genom `PowerManager.getCurrentThermalStatus()` i Android 10 och senare, och termiskt utrymme genom `getThermalHeadroom()` i Android 11 och senare. De uppgifterna visar om telefonen arbetar normalt, börjar begränsa prestandan eller närmar sig en kritisk temperatur. Höga temperaturer sänker processorprestandan genom termisk strypning och påskyndar batteriets långsiktiga slitage. Beräkningen använder batteritemperatur och Androids termiska status. CPU-temperatur räknas bara in om ett användbart värde finns. En telefon med normal termisk status och 28 °C batteritemperatur får ett bra resultat. En telefon som stryper prestandan och ligger över 40 °C får det inte.

**Nätverksanslutningen** bidrar med 25 % i runchecks modell. Om telefonen är frånkopplad blir nätverkspoängen 0. Utan ett nyligen genomfört hastighetstest bygger delen på signalstyrka och latens. Om ett hastighetstest är mindre än en timme gammalt vägs signalen till 40 %, latens eller ping till 30 %, nedladdningshastighet till 20 % och jitter eller stabilitet till 10 %. På wifi är -50 till -70 dBm mycket bra, -70 till -80 dBm acceptabelt och under -80 dBm börjar prestandan försämras. För mobilnät är starkare än -85 dBm bra, medan svagare än -110 dBm är dåligt. Latensen spelar också stor roll. Skillnaden mellan 15 ms och 200 ms märks ofta mer i praktiken än mindre variationer i signalstyrkan.

**Lagringen** är den minsta delen, 10 % i runchecks modell. Måttlig användning påverkar poängen lite, men avdragen blir snabbt större när den interna lagringen närmar sig full. Androids prestanda försämras ofta vid hög användning eftersom lagringsstyrenheten får mindre arbetsutrymme för skräpinsamling och slitageutjämning.

## Därför spelar viktningen roll

Batterihälsan påverkar telefonen varje dag. Lagringen blir främst ett problem när användningen passerar vissa nivåer. Nätverkskvaliteten skiftar hela tiden på grund av faktorer som telefonen inte kan styra. Temperaturtillståndet är tillfälligt: en telefon som är varm just nu kan vara helt normal tio minuter senare.

Viktningen är inte standardiserad mellan appar. Vissa ger alla fyra kategorier samma betydelse, vilket är svårt att försvara eftersom det behandlar nästan full lagring som likvärdig med ett batteri som håller på att ge upp. runcheck viktar batteriet till 40 %, temperatur och nätverk till 25 % vardera och lagring till 10 %. Det stämmer bättre med hur telefonproblem märks i vardagen. En telefon med ett friskt batteri och ont om lagringsutrymme är vanligtvis mindre begränsad än en telefon med dåligt batteri och gott om ledigt utrymme.

## Problemet med tillförlitlighet

Alla mätvärden som matas in i poängen är inte lika tillförlitliga. Det är här hela idén blir osäkrare.

Batterihälsa i procent är användbar på telefoner som implementerar stödet korrekt, exempelvis Pixel 8a och senare samt vissa nyare Galaxy-modeller i regioner som stöds. På telefoner som inte lämnar ut uppgiften måste appar uppskatta batterihälsan genom att följa laddningsmönster över tid. Uppskattningarna förbättras med användning men är grova i början. En hälsopoäng som bygger på en osäker batteriuppskattning ärver samma osäkerhet.

Temperaturvärdena beror på vilka sensorer telefonen gör tillgängliga. `getCurrentThermalStatus()` ger en allmän nivå från normalt till avstängning, men den är grov. `getThermalHeadroom()` returnerar ett flyttal som beskriver hur nära enheten är termisk strypning, men tolkningen varierar mellan olika SoC. Batteritemperatur finns konsekvent på fler enheter, men den mäter batteriet, inte processorn eller yttemperaturen. Skillnaden kan vara 5-10 °C.

Nätverkets signalstyrka i dBm är tillförlitlig när den rapporteras. Androids signalstaplar är däremot inte standardiserade. Tre staplar på en Samsung och tre staplar på en Pixel på samma plats kan motsvara olika dBm-värden. Staplarna är en visuell förenkling. dBm-värdet är det som går att jämföra.

Lagringsanvändningen är det enda mätvärdet som är konsekvent exakt på i stort sett alla enheter. Det är en enkel beräkning utan samma komplikationer i hårdvaruabstraktionslagret.

En ärlig hälsopoäng visar begränsningarna i stället för att dölja dem. Om batterihälsan bygger på en uppskattning och inte på ett maskinvaruvärde bör den osäkerheten synas. Att visa ett tvärsäkert "87/100" när underlaget innehåller en batteriuppskattning med 5 % felmarginal är missvisande, men många appar gör precis så.

## Hälsopoäng på äldre telefoner

Kvaliteten på hälsopoängen beror på hur mycket data telefonen lämnar ut. Äldre enheter visar mindre.

Telefoner med Android 10, API 29, och senare kan rapportera termisk status. Temperaturdelen fungerar därför rimligt väl på enheter från omkring 2019 och framåt när tillverkaren lämnar ut användbara data. Android 11, API 30, lägger till termiskt utrymme och gör mätningen mer detaljerad. Före Android 10 är temperaturinformationen ofta begränsad till batteritemperaturen.

Skillnaden är störst för batterihälsa. Android 14 lade till mer detaljerade API:er, men de flesta telefoner som lanserades före 2024 rapporterar inte fullständig hälsoprocent eller antal laddningscykler. På de enheterna måste batteridelen luta sig mot indirekta signaler: den grova klassificeringen Good, Overheat eller Dead, temperatur, spänning och långsiktig uppföljning av laddningen. En telefon med Android 10 kan fortfarande ge ett meningsfullt batteriresultat från dessa signaler, men med sämre precision än en Pixel 8a eller senare som rapporterar hälsa och cykeldata direkt.

Lagring och nätverk fungerar i regel på enheter från Android 8 och framåt.

I praktiken är hälsopoäng på Android 9-13 användbara men mer beroende av uppskattningar. De hittar tydliga problem, som ett kraftigt försämrat batteri, kritiskt låg ledig lagring eller återkommande överhettning, men osäkerhetsmarginalen är större. Det är fortfarande värdefullt. Bara mindre exakt.

## Så tolkar du siffran

**75-100:** Telefonen är i gott skick. Normalt batterislitage, inga tydliga temperaturproblem, tillräckligt med lagringsutrymme och fungerande anslutning.

**50-74:** Något behöver uppmärksammas. Det handlar ofta om ett batteri som tappat så mycket kapacitet att dagen blir kortare, eller lagring som är tillräckligt full för att påverka prestandan. Riktat underhåll kan lösa problemet.

**25-49:** Ett verkligt problem. Batteriet kan vara kraftigt slitet, telefonen kan strypa prestandan återkommande eller lagringen kan vara kritiskt full. Reparation eller byte börjar bli aktuellt.

**Under 25:** Något är aktivt på väg att ge upp.

Gränserna är inte officiella. Ingen myndighet eller standardiseringsorganisation definierar vad som är "friskt" för en telefon. De är konventioner som diagnostikverktyg använder och motsvarar ungefär vad människor upplever som bra, okej, försämrat eller trasigt.

## Det här kan hälsopoängen inte berätta

Den kan inte hitta fysisk skada. En sprucken skärm, trasig högtalare, glapp laddningsport eller vätskeskada syns inte i programvarubaserade mätvärden.

Den kan inte förutsäga hur länge telefonen håller. Ett resultat på 78 betyder inte att "78 % av livslängden återstår". Det betyder att telefonen just nu är i ganska gott skick enligt de mätvärden som kontrolleras.

Den kan inte jämföra olika telefonmodeller rättvist. 90/100 på en billig telefon med 3 GB RAM och 32 GB lagring är inte samma sak som 90/100 på en toppmodell med 12 GB RAM och 256 GB lagring.

Poängen är en ögonblicksbild. Den är användbar för att se trender, exempelvis om telefonens skick försämras, och för snabba bedömningar, som om en begagnad telefon är värd priset. Den är en utgångspunkt, inte en diagnos.

## FAQ

**Publicerar tillverkarna officiella hälsopoäng?**
Ingen gemensam poäng. Samsung Batteri och enhetsvård kan visa ett optimeringsvärde av 100, men det bygger på Samsungs egna kontroller av batteri, lagring, minne och säkerhet, inte på en standard som gäller hela Android. Pixel Enhetshälsa och support visar övergripande status och funktionsstatus i stället för en allmän poäng mellan 0 och 100. Tillverkarnas verktyg är användbara, men värdena kan inte jämföras direkt mellan märken.

**Kan en låg poäng förbättras?**
Det beror helt på orsaken. Är lagringen full och drar ned poängen? Frigör utrymme så återhämtar den sig direkt. Är batteriet slitet? Då är ett byte den enda verkliga lösningen. Temperaturproblem kan ibland försvinna när en felande app stängs eller ett skal som håller kvar värme tas bort.

**Är en högre poäng alltid bättre?**
På samma telefon över tid, ja. En sjunkande poäng visar att något försämras. Mellan olika telefoner är svaret inte lika enkelt. En tre år gammal telefon på 72 kan fungera utmärkt för sin ägare, medan en ny telefon på 95 kan ha dålig signal där ägaren bor och därför få ett lägre nätverksresultat.
