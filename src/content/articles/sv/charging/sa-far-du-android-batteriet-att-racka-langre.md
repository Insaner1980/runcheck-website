---
title: "Så får du Android-batteriet att räcka längre"
description: "Praktiska Android-tips som faktiskt påverkar batteritiden, bland annat skärminställningar, svag signal, bakgrundsappar, platsbehörigheter, batterisparläge och laddningsvanor."
listSummary: "laddning, batteri och android"
hub: "charging"
sourceNumber: 37
order: 1
tags: ["laddning","batteri","android","guide","hårdvara"]
locale: "sv"
draft: false
---
De flesta batteriråd för Android är antingen för självklara eller alldeles för extrema. Ja, lägre ljusstyrka hjälper. Nej, du behöver inte göra telefonen till en tyst tegelsten bara för att den ska hålla hela dagen.

Det användbara angreppssättet är att börja med de stora förbrukarna: skärmen, mobilnätet, bakgrundsappar, platsåtkomst och laddningsvanor. Android 17 släpptes först till de flesta Pixel-enheter som stöds, medan andra Android-tillverkare kommer med sina egna versioner senare. Menynamnen varierar därför, men grunderna för batteritid är desamma.

## Börja med skärmen

Skärmen är fortfarande den största strömförbrukaren när telefonen används aktivt. Om du har den i handen spelar skärminställningarna större roll än nästan allt annat.

Använd anpassad ljusstyrka om funktionen fungerar bra på din enhet. Om skärmen blir för ljus inomhus kan du ställa in ljusstyrkan manuellt och hålla den lägre. Maximal ljusstyrka i ett dunkelt rum slösar bara batteri och skapar extra värme.

Nästa inställning att kontrollera är den höga uppdateringsfrekvensen. En skärm på 90 Hz eller 120 Hz känns mjukare, men drar mer ström än 60 Hz, särskilt på telefoner som inte växlar frekvens på ett smart sätt. Pixel kallar funktionen **Smooth Display**. Samsung använder **Rörelseutjämning**. Andra OEM-tillverkare har liknande alternativ under **Inställningar > Skärm**.

Om telefonen har ett adaptivt alternativ bör du börja med det. Om valet bara står mellan 60 Hz och 120 Hz, och batteritiden är viktigare än mjuk rullning, väljer du 60 Hz.

Skärmens tidsgräns är tråkig men användbar. Ställ den på 30 sekunder eller 1 minut. På Pixel finns den under **Inställningar > Visning och pekskärm > Skärmens tidsgräns**. På andra telefoner ligger den vanligtvis bland skärminställningarna. Fem minuter slösar ström varje gång du lägger ifrån dig telefonen och glömmer att låsa den.

Mörkt läge hjälper bara på OLED- och AMOLED-skärmar. På sådana paneler använder svarta pixlar lite eller ingen ström. På LCD-skärmar är bakgrundsbelysningen fortfarande tänd, så där är mörkt läge främst en komfortinställning.

## Åtgärda dålig signal innan du skyller på appar

Svag mobilsignal är brutal mot batteriet. I ett betonghus, en källare, ett tåg, på landsbygden eller i utkanten av ett 5G-område måste modemet arbeta hårdare för att hålla anslutningen. Ibland blir mobilnätet den största förbrukaren trots att du knappt har rört telefonen.

Använd wifi när du litar på nätverket. Det kräver vanligtvis mindre ström än mobildata, särskilt där 5G-täckningen är svag.

Om 5G är instabilt där du bor eller arbetar kan det hjälpa att tvinga telefonen till LTE eller 4G. Leta efter **Önskad nätverkstyp** bland SIM- eller mobilnätsinställningarna. Gör inte detta om du faktiskt har stark och stabil 5G och använder den högre hastigheten.

Bluetooth och NFC är inte de batteribovar de en gång var. Modern Bluetooth Low Energy använder mycket lite ström i vila, och NFC drar nästan ingenting i bakgrunden. Att stänga av dem hela dagen kan spara lite, men det är sällan värt att slå ut klockor, hörlurar, bilnycklar, betalningar eller spårbrickor.

Wifi-sökning och Bluetooth-sökning är en annan sak. Android kan använda dem för platsbestämning även när de vanliga reglagen ser avstängda ut. Kontrollera **Inställningar > Plats > Platstjänster** och stäng av sökningen om du inte behöver bättre platsnoggrannhet inomhus.

## Begränsa appar som inte behöver arbeta i bakgrunden

Android är mycket bättre på bakgrundskontroll än förr, men systemet kan fortfarande inte läsa dina tankar. Vissa appar får större frihet än de förtjänar.

Öppna **Inställningar > Batteri > Batteriförbrukning** och leta efter appar vars bakgrundsanvändning inte stämmer med hur du har använt telefonen. Öppna sedan appens batterisida och välj **Begränsad** om appen inte behöver köras när du inte använder den.

Bra kandidater är shoppingappar, spel, matleveransappar, reseappar mellan resor, sociala appar som du ändå öppnar manuellt, gamla verktygsappar, kupongappar och sådant som mest skickar reklamaviseringar.

Dåliga kandidater är meddelandeappar, jobbchattar, VPN, hälsoappar, navigering, familjesäkerhet, kalender och e-post om du behöver få aviseringar direkt.

Smart batteri, som finns från Android 9 och framåt, bör vara aktiverat. Funktionen använder dina appvanor för att begränsa appar som du sällan använder. App Standby Buckets arbetar i samma riktning genom att ge mer resurser till appar du använder ofta och mindre till dem du ignorerar.

Tillverkarnas batteriverktyg kan vara mer aggressiva. Samsungs **Appar i djupviloläge** kan nästan frysa en app tills du öppnar den. Det är utmärkt för en shoppingapp och uselt för en meddelandeapp.

## Rensa upp platsbehörigheterna

GPS som inte används drar inte särskilt mycket. Appar som begär platsåtkomst i bakgrunden gör det.

Öppna **Inställningar > Plats > Appbehörighet** och kontrollera allt som har **Tillåt alltid**. För de flesta appar räcker **Tillåt bara när appen används**. Väder, bilder, sociala medier, shopping och lokala rekommendationsappar begär ofta mer åtkomst än de behöver.

Från Android 12 kan du även ge många appar ungefärlig plats i stället för exakt. Använd det när precisionen inte behövs. En väderapp behöver inte veta vilken port du står utanför.

Platsangivelsens exakthet är användbar, särskilt inomhus, eftersom Android kan kombinera wifi, mobilmaster, sensorer och andra signaler för att förbättra träffen. Om du stänger av funktionen kan viss bakgrundsaktivitet minska, men aktiv platsbestämning kan också bli långsammare eller mindre användbar. Jag skulle justera apparnas behörigheter innan jag stänger av platsnoggrannheten för hela telefonen.

## Använd batterisparläget tidigare

Batterisparläget fungerar bäst när det får tid att förebygga förbrukning. Att slå på det vid 15 % är bättre än ingenting. Att aktivera det vid 50 % före en lång dag utan laddare är smartare.

På Pixel och ren Android öppnar du **Inställningar > Batteri** och väljer **Batterisparläge**. På Samsung använder du vanligtvis **Inställningar > Batteri > Energisparläge** eller **Inställningar > Batteri och enhetsvård > Batteri > Energisparläge**. Lägg ett automatiskt schema runt 25 % eller 30 %, och slå sedan på läget manuellt när situationen kräver det.

Det vanliga batterisparläget låter oftast telefonen fungera nästan normalt. Effektivare eller maximala lägen är till för nödsituationer. De pausar appar, förenklar telefonen och begränsar bakgrundsarbetet betydligt hårdare.

## Minska synkronisering och aviseringsbrus

Flera konton kan väcka telefonen i det tysta hela dagen. Google, Microsoft, Samsung, e-post, kalender, kontakter, molnlagring, anteckningar och webbläsarsynkronisering skapar alla arbete i bakgrunden.

Kontrollera **Inställningar > Lösenord, nycklar och konton** eller **Inställningar > Konton**, beroende på telefon. Ta bort gamla konton och stäng av synkroniseringskategorier du inte använder. Ett avslutat jobbkonto eller en molntjänst du öppnar en gång i månaden ska inte synkronisera hela dagen.

Aviseringar fungerar på liknande sätt. Själva pushaviseringarna är gjorda för att vara batterisnåla, men skärmtändning, vibrationer, ljud och efterföljande bakgrundsarbete blir tillsammans en märkbar belastning. Stäng av reklammeddelanden från appar som inte förtjänar din uppmärksamhet.

Nej, lösningen är inte att hela tiden stänga appar från vyn över senaste appar. Android är byggt för att hålla nyligen använda appar i minnet och hantera dem självt. Om du tvångsstänger allt kan batteritiden bli sämre eftersom apparna måste starta om från början.

## Ladda för långsiktig batterihälsa

Det här får inte dagens laddning att räcka längre, men hjälper telefonen att fortfarande kännas användbar om två eller tre år.

Litiumjonbatterier åldras snabbare när de tillbringar mycket tid varma och fulladdade. Om vardagen tillåter det kan laddning närmare 20-80 % vara bättre för batterihälsan på lång sikt. Gör inte detta till en religion. Behöver du 100 % inför en lång dag ska du ladda till 100 % och använda telefonen.

Pixel-telefoner har fler inställningar för batterihälsa än tidigare. Pixel 6a och senare kan använda **Begränsa till 80 %** via **Inställningar > Batteri > Batterihälsa > Laddningsoptimering**. Google uppger också att batterierna i Pixel 3 till Pixel 8 Pro och Pixel Fold är utformade för att ha omkring 80 % av den ursprungliga kapaciteten kvar efter cirka 800 laddningscykler, medan Pixel 8a och senare har motsvarande riktvärde efter cirka 1 000 cykler.

Samsung har egna inställningar för batteriskydd, bland annat adaptivt skydd och maximal laddningsgräns på nyare Galaxy-enheter. Namnen varierar med One UI-versionen, men grundidén är densamma: batteriet ska tillbringa mindre tid vid 100 %.

Temperaturen spelar också roll. Värme är värre än vanlig snabbladdning. Lämna inte telefonen i en varm bil, i direkt sol, under en kudde eller med ett tungt spel igång medan den laddas. Kyla fungerar annorlunda: batteriet kan tillfälligt visa mindre tillgänglig laddning, och telefonen kan stängas av tidigare under belastning. När den värms upp återkommer den användbara kapaciteten vanligtvis.

## Kontrollera vad som faktiskt drar batteri

Titta på bevisen innan du ändrar tjugo inställningar. **Inställningar > Batteri > Batteriförbrukning** visar vilka appar och systemdelar som har använt ström sedan den senaste laddningen. Kontrollera både användning med skärmen på och i bakgrunden.

En grov tumregel är att 1-2 % per timme med skärmen avstängd är normalt på många telefoner. Mer än 3 % per timme i vila bör undersökas. Förbrukningen med skärmen på varierar för mycket för att ett enda värde ska passa alla, men 15-25 % per timme är vanligt beroende på ljusstyrka, signal, appbelastning, temperatur och batteriets ålder.

Om förbrukningen är hög med skärmen avstängd bör du tänka på bakgrundsappar, wakelocks, svag signal, synkronisering eller en nylig systemuppdatering. Om den bara är hög när telefonen används är ljusstyrka, uppdateringsfrekvens, 5G, spel, kamera, navigering eller värme mer sannolika orsaker.

runcheck hjälper till att skilja de här mönstren åt. Förbrukning med skärmen på och av, signalkvalitet, termiskt tillstånd och pressad lagring gör batteriproblem lättare att diagnostisera än en enda procentsiffra.

## Några sista kontroller

Uppdatera telefonen och apparna. Efter en större systemuppdatering, även Android 17 på Pixel, bör du ge telefonen en kort inkörningsperiod eftersom appoptimering och indexering tillfälligt kan öka förbrukningen.

Ta bort widgetar du inte använder. Väder, börskurser, nyheter och kalenderwidgetar uppdateras enligt ett schema. En eller två användbara widgetar är inget problem. En hel startskärm med levande widgetar är inte gratis.

Låt inte lagringen bli helt full. Pressad lagring kan göra telefonen långsammare och öka bakgrundsunderhållet. Det är sällan den största batteriförbrukaren, men en telefon med 98 % fylld lagring fungerar aldrig som bäst.
