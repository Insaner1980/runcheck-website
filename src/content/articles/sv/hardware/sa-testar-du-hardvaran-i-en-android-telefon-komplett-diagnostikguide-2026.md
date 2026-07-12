---
title: "Så testar du hårdvaran i en Android-telefon: komplett diagnostikguide (2026)"
description: "En Android-telefon kan se helt normal ut trots att en komponent håller på att ge upp. Ett slitet batteri, en svag högtalare, en felaktig närhetssensor eller en skadad antenn visar inte alltid ett tydligt felmeddelande. I stället får du kortare batteritid, märkliga samtal, slumpmässig värme eller en skärm som inte reagerar i ett hörn."
listSummary: "En Android-telefon kan se helt normal ut trots att en komponent håller på att ge upp."
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["batteri","batteriförbrukning","felsökning","android","prestanda"]
locale: "sv"
draft: false
---
Den goda nyheten är att det mesta går att testa innan du betalar för en reparation. Android har inställningssidor, tillverkarnas diagnostikverktyg, knappkoder och manuella kontroller för de viktigaste hårdvarudelarna. Det besvärliga är att inget av detta är helt universellt.

Android 17 släpptes den 16 juni 2026 och gjordes tillgängligt för de flesta Pixel-modeller som stöds, medan andra märken följer sina egna tidplaner. Det spelar roll eftersom diagnostikmenyer, sidor för batterihälsa och inställningsvägar kan skilja sig mellan Android-versioner, OEM-gränssnitt, operatörsversioner och regioner. Se varje kod i guiden som en genväg, inte som ett löfte.

## Snabbt svar

Börja med tillverkarens officiella diagnostikverktyg när det finns ett sådant.

- Samsung Galaxy: öppna Samsung Members, tryck på Få hjälp och sedan Visa tester. Du kan köra alla tester eller välja en del, till exempel batteri, högtalare, mikrofon, skärm, kamera eller sensorer. Många Samsung-telefoner stöder även `*#0*#` i Telefon-appen för att öppna en hårdvarutestmeny.
- Google Pixel: slå `*#*#7287#*#*` medan telefonen är ansluten till internet för att öppna Pixel Diagnostics på Pixel-telefoner som stöds. Pixel Tablet använder Googles webbaserade flöde för Pixel-reparation och diagnostik.
- Motorola: öppna `Device Help > Device diagnosis > Hardware test`.
- Xiaomi, Redmi och POCO: prova `*#*#6484#*#*` för CIT-menyn. På många modeller går den också att öppna genom att trycka flera gånger på kärnversionen under Om telefonen.
- Android-telefoner nära standardutförandet: `*#*#4636#*#*` kan öppna en testmeny på många enheter, främst för telefon-, nätverks-, användnings- och batteriinformation. Det är inte ett fullständigt hårdvarutest, och många Samsung- och operatörsversioner blockerar koden.

Om en kod inte gör någonting ska du inte kämpa med den. Använd de manuella testerna nedan eller en diagnostikapp.

## Avgör först om problemet är programvara eller hårdvara

Det här steget kan spara pengar. Ett programfel kan se exakt ut som en trasig komponent.

Säkert läge är det första filtret. Håll in strömknappen tills strömmenyn visas och håll sedan fingret på Stäng av tills frågan om säkert läge kommer upp. Knappkombinationen skiljer sig på vissa telefoner, men målet är detsamma: att starta Android utan tredjepartsappar.

Om problemet försvinner i säkert läge är en tredjepartsapp troligen inblandad. Ta bort nyligen installerade appar en i taget och starta om normalt efter varje borttagning. Om problemet finns kvar i säkert läge ligger orsaken i Android, OEM-firmware eller hårdvaran.

En fabriksåterställning är det sista programvarutestet. Säkerhetskopiera informationen först. Om felet finns kvar efter en ren återställning utan återställda appar blir hårdvara betydligt mer sannolik.

Leta efter mönster. En död pekzon på exakt samma plats varje gång pekar mot skärmen eller digitizern. En telefon som stängs av vid 20 % men fungerar när laddaren sitter i pekar mot batteriet. En kamera som började surra efter ett fall kan ha skadad autofokus eller OIS. En telefon som blev instabil direkt efter en stor uppdatering, inklusive Android 17 på Pixel, bör uppdateras med de senaste korrigeringarna och testas igen innan du antar att moderkortet är trasigt.

## Varför hårdvara går sönder

Batterier slits. Det är helt enkelt litiumjonkemi. Google rekommenderar batteribyte när den återstående kapaciteten sjunker under 80 %, med en cykelgräns som beror på modellen. Pixel 3 till Pixel 8 Pro och Pixel Fold anges till 800 cykler, medan Pixel 8a och senare anges till 1 000 cykler.

Portar och knappar slits av användning. USB-C-portar samlar fickludd, särskilt när telefonen ofta ligger i en ficka. Knappar tappar sitt tydliga klick efter tusentals tryck. Högtalargaller täpps igen så långsamt att du kanske inte märker det förrän samtal börjar låta dämpade.

Fall orsakar märkligare fel. En telefon kan klara sig utan sprucket glas men ändå få en lös kontakt, skadad kameramodul, böjd ram eller försvagad lödning. Vatten är värre eftersom korrosion kan visa sig först efter flera dagar eller veckor.

Värme påskyndar nästan allt. Laddning i direkt sol, spelande under laddning eller en telefon som lämnas i en varm bil kan åldra batteriet snabbare och utlösa termisk strypning. Långvariga batteritemperaturer över ungefär 40 °C bör tas på allvar.

Tillverkningsvariationer är också verkliga. Två telefoner med samma modellnamn beter sig inte alltid identiskt. Små skillnader i kretsar, värmekontakt, skärmpaneler, sensorkalibrering, modemfirmware och regionala versioner kan påverka batteritid, värme, signal och benchmarkresultat. Det betyder inte automatiskt att den ena enheten är defekt. Siffror på nätet är intervall, inte löften.

## Testa batteriet

Börja med de uppgifter telefonens egna inställningar faktiskt visar.

På Pixel 8a och senare går du till `Inställningar > Batteri > Batterihälsa`. Där visas om batteriet är Normalt eller Minskat, och under Batterikapacitet finns en uppskattning av återstående kapacitet jämfört med den ursprungliga. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 och Pixel 8 Pro visar inte samma status för batterihälsa.

På Samsung använder du diagnostiken i Samsung Members. Sökvägen är Samsung Members > Få hjälp > Visa tester och sedan Batteri. Formuleringarna kan variera med region och appversion, men Members-appen är säkrare än slumpmässiga batterikoder.

På OnePlus, OPPO, realme, Xiaomi och andra märken letar du under Inställningar > Batteri eller i märkets app för enhetsvård. Vissa visar batterihälsa. Andra gör det inte. Androids batterirapportering är fortfarande ojämn mellan tillverkare.

Batteriet är misstänkt om telefonen laddas ur snabbt vid lätt användning, stängs av vid 15-20 %, blir varm under laddning eller buktar vid bakstycket eller skärmen. Sluta använda en telefon med svullet batteri och lämna in den. Det är inte ett programvaruproblem.

## Testa skärmen och peklagret

För att hitta döda pixlar visar du helskärmsbilder i vitt, svart, rött, grönt och blått. Granska skärmen långsamt. Döda pixlar förblir svarta. Fastnade pixlar lyser hela tiden i en färg. Inbränning på OLED syns lättast på en jämnt grå bakgrund med medelhög ljusstyrka.

För pekfunktionen öppnar du en ritapp och drar täta vågräta och lodräta linjer över hela skärmen. Avbrott i linjerna avslöjar döda zoner. Du kan också aktivera Utvecklaralternativ och slå på Visa tryck eller Pekarens plats, och sedan dra fingret över hela panelen.

Samsungs meny `*#0*#` innehåller skärm- och pektester på många Galaxy-modeller. Pixel Diagnostics, Motorola Device Help och Xiaomi CIT kan också testa skärm och pekfunktion när funktionen finns på modellen.

## Testa högtalare och mikrofoner

Spela upp en ringsignal och sedan musik eller en video du känner väl. Lyssna efter skrammel, distorsion eller om den ena stereokanalen låter mycket svagare än den andra. Täck en högtalare i taget med ett finger för att skilja öronhögtalaren från den nedre högtalaren på stereotelefoner.

Spela in ett kort röstklipp från en armlängds avstånd och lyssna på det. Testa sedan ett riktigt samtal. Samtalsljud använder brusreducering och nätverksbearbetning, så en inspelning kan låta bra även om samtal fortfarande låter dåligt.

Innan du skyller på hårdvaran tar du av skalet, kopplar från Bluetooth-enheter, rengör högtalar- och mikrofonöppningarna med en torr mjuk borste och kontrollerar mikrofonbehörigheten för appen du testar.

## Testa kamerorna

Öppna kameraappen och testa varje kamera telefonen har: bakre vidvinkel, ultravidvinkel, tele, makro om det finns samt frontkameran. Leta efter fokus som jagar, fasta suddiga fläckar, färgstick, skakig video eller klickande ljud när fokus ändras.

Optisk bildstabilisering kan gå sönder efter ett fall. Symptomet brukar vara tydligt: videon skakar trots att händerna är stilla, eller kameran ger ifrån sig ett surrande ljud. Programvara kan påverka bildbehandlingen, men kan inte reparera en fysiskt lös stabiliseringsmodul.

## Testa laddning och portar

Prova en kabel och laddare som du vet fungerar innan du skyller på telefonen. Det låter grundläggande, men förvånansvärt många "trasiga USB-C-portar" är egentligen trasiga kablar.

Lys in i porten. Fickludd kan packas längst in och hindra kontakten från att gå hela vägen in. Använd försiktigt en tandpetare av trä eller plast, eller luft med lågt tryck. Skrapa inte kontakterna med metall.

Om telefonen bara laddar i en viss vinkel, tappar anslutningen när kabeln rör sig eller vägrar dataöverföring med flera olika kablar kan porten eller det nedre kretskortet behöva repareras.

## Testa sensorerna

Sensorfel visar sig ofta som mycket specifika problem: automatisk rotering slutar fungera, skärmen förblir tänd under samtal, kompassen pekar fel eller den automatiska ljusstyrkan överreagerar.

För accelerometern och gyroskopet stänger du av rotationslåset och vrider telefonen långsamt. Skärmen ska följa rörelsen utan problem. Ett panoramafoto är också ett rimligt gyroskoptest eftersom sammanfogningen bygger på rörelsespårning.

För närhetssensorn ringer du ett samtal och täcker den övre delen av skärmen nära öronhögtalaren. Skärmen ska släckas och sedan tändas igen när du tar bort handen. Ta bort skalet och skärmskyddet innan du dömer ut sensorn.

För ljussensorn aktiverar du automatisk ljusstyrka och flyttar telefonen mellan ljusa och mörka miljöer. Skärmen bör justeras inom några sekunder.

För magnetometern öppnar du Maps eller en kompassapp utomhus och bort från bilar, bärbara datorer, magneter och metallbord. Om riktningen är fel kalibrerar du med en rörelse i form av en åtta.

Samsungs `*#0*#` och Samsung Members kan testa sensorer. Pixel Diagnostics, Motorola Device Help och Xiaomi CIT kan också innehålla sensortester, beroende på modell.

## Testa nätverkshårdvaran

Antenn- och radiofel är svårare att bevisa eftersom operatörsnätet förändras hela tiden. Jämför med en annan telefon i samma nät, på samma plats och vid samma tidpunkt.

Signalstyrkan visas vanligtvis i dBm i status- eller SIM-informationen. Skalan är negativ, så ett värde närmare noll är bättre. Omkring -50 dBm är utmärkt. Omkring -90 dBm är användbart. Omkring -110 dBm eller svagare är dåligt. Värdena betyder olika saker för LTE, 5G och Wi-Fi, så använd dem som jämförelse i stället för som en universell gräns för godkänt eller underkänt.

Om telefonen tappar Wi-Fi medan alla andra enheter förblir anslutna testar du nära routern, i ett annat Wi-Fi-nät och med Bluetooth avstängt. Om samma telefon misslyckas överallt blir radiohårdvara eller firmware mer sannolik.

runcheck hjälper här eftersom appen kombinerar data om batteri, temperatur, nätverk, lagring och hastighetstest i en enda kontroll. Det är särskilt användbart efter fall, värmehändelser eller fuktskador, då flera symptom kan överlappa.

## När du bör reparera

En reparation är rimlig när problemet går att upprepa, finns kvar i säkert läge, överlever en ren återställning och syns i tillverkarens diagnostik eller ett manuellt test.

Byt inte delar för att en app betedde sig konstigt en enda gång. Lämna däremot in eller byt telefonen om batteriet är svullet, laddningsporten sitter fysiskt löst, pekfunktionen alltid misslyckas på samma plats, kameran surrar efter ett fall eller mikrofonerna inte fungerar vare sig i inspelningar eller samtal.

## Vanliga frågor

### Är diagnostikkoder säkra?

De vanliga testmenyerna i den här guiden är främst skrivskyddade informationssidor eller interaktiva hårdvarutester. Skriv ändå inte in slumpmässiga koder från internet. Vissa tillverkarkoder kan ändra radioinställningar eller starta serviceåtgärder.

### Varför fungerar inte `*#*#4636#*#*`?

Koden är inte standardiserad i Android. Den fungerar på många Android-versioner nära standardutförandet men kan blockeras av Samsung, operatören eller OEM-firmware.

### Hur ofta bör jag testa hårdvaran?

Ett test med några månaders mellanrum räcker för normalt underhåll. Testa direkt efter ett hårt fall, fuktexponering, plötslig batteriurladdning, laddningsproblem eller innan du köper eller säljer en begagnad telefon.

### Är en långsam telefon alltid ett hårdvaruproblem?

Nej. Börja med säkert läge, ledigt lagringsutrymme, appuppdateringar och nya systemuppdateringar. Om långsamheten finns kvar efter en fabriksåterställning är det dags att undersöka hårdvara, slitage på lagringen, ett svagt batteri eller termisk strypning närmare.
