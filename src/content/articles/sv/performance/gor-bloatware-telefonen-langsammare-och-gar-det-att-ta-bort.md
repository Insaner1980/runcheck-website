---
title: "Gör bloatware telefonen långsammare, och går det att ta bort?"
description: "Metabeskrivning: Förinstallerade Android-appar kan ta lagringsutrymme, skicka aviseringar och köra bakgrundstjänster. Här ser du vad bloatware faktiskt gör och vad som är säkert att ta bort."
listSummary: "prestanda, hastighet och android"
hub: "performance"
sourceNumber: 78
order: 15
tags: ["prestanda","hastighet","android","optimering","felsökning"]
locale: "sv"
draft: false
---
---

Bloatware får skulden för nästan alla långsamma Android-telefoner, men verkligheten är mindre dramatisk. En förinstallerad app gör inte telefonen långsammare bara för att ikonen finns där. Problemen börjar när appen körs i bakgrunden, väcker telefonen, skickar aviseringar, uppdaterar sig själv eller håller tjänster aktiva trots att du aldrig har bett om det.

Det är den irriterande delen. Du kan köpa en telefon, hoppa över en app under installationen, aldrig öppna den och ändå hitta tillhörande tjänster i applistan senare.

## Vad bloatware faktiskt gör

En inaktiv förinstallerad app kostar främst lagringsutrymme. Den använder inte CPU, RAM, mobildata eller batteri om inte Android eller någon annan app startar en av dess komponenter.

Vissa förinstallerade paket gör mer än att bara ligga kvar. Facebook-relaterade tjänster som `com.facebook.appmanager` har levererats på telefoner som stödpaket. Samsung-telefoner kan innehålla Samsung Free, Samsung Global Goals, Samsung TV Plus och andra Samsung-appar vid sidan av Googles appar. Telefoner som säljs via operatörer kan dessutom få kontoappar, installationsverktyg, röstbrevlådeappar, provversioner av säkerhetstjänster och program som installerar marknadsförda appar.

En eller två bakgrundstjänster förstör vanligtvis inte prestandan. Femton stycken på en enklare telefon är en annan sak. En telefon med 3 eller 4 GB RAM, ett tungt startprogram, sociala appar, operatörsverktyg och tillverkartjänster kan kännas sämre än ett äldre flaggskepp med renare programvara och mer minnesmarginal.

Lagringsanvändning är lättare att kontrollera än bakgrundsaktivitet. Öppna **Inställningar > Lagring > Appar** eller **Inställningar > Appar**, sortera efter storlek om telefonen tillåter det och leta efter appar som du inte använder. Den exakta vägen varierar mellan märken. Pixel håller det ganska enkelt, Samsung samlar mer under Enhetsvård och Xiaomi delar ofta upp lagringsverktygen mellan Inställningar och appen Security.

## Inaktivera först, avinstallera när Android tillåter det

Vissa förinstallerade appar kan avinstalleras precis som vanliga appar. Håll ned appikonen, öppna appinformationen och leta efter **Avinstallera**. Om knappen saknas, är nedtonad eller har ersatts av **Inaktivera** behandlar Android appen som en systemapp.

Att inaktivera är det säkrare första steget. Öppna **Inställningar > Appar**, välj appen och tryck på **Inaktivera**. En inaktiverad app slutar köras, försvinner från startskärmen och får inte längre vanliga uppdateringar. Den tar fortfarande en del lagringsutrymme eftersom appens ursprungliga paket finns kvar i systemavbildningen, men Android tar bort uppdateringar och användardata där det går.

Den sista detaljen spelar roll. Att inaktivera en systemapp frigör inte automatiskt flera gigabyte. Det kan ändå hjälpa om appen har laddat ned uppdateringar, cachelagrat media, sparat inloggningsuppgifter eller samlat lokal data.

Samsung och andra OEM-tillverkare visar ibland **Avinstallera** för appar som följde med telefonen. I många fall tas bara det användarinstallerade uppdateringslagret bort, medan fabriksversionen lämnas inaktiv. Ur ditt perspektiv är det helt okej. Målet var att få bort appen ur den dagliga användningen, inte att radera den från den skrivskyddade systempartitionen.

## När borttagning med ADB är rimlig

För envisa paket kan ADB ta bort en app för den aktuella användaren utan root:

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

Kommandot raderar inte paketet från systempartitionen. Det döljer och inaktiverar det för användare 0, som är telefonens huvudanvändare. En fabriksåterställning tar tillbaka appen.

Använd detta bara när du känner till det exakta paketnamnet och förstår vad du tar bort. Paketnamnet kan synas i webbadressen till appen i Google Play, eller så kan du lista paketen med:

```text
adb shell pm list packages
```

Verktyg som Canta och Universal Android Debloater Next Generation gör arbetet mindre omständligt. Canta körs på telefonen och använder Shizuku. UAD-ng körs från en dator och använder kuraterade paketlistor med säkerhetsklassningar. Klassningarna är användbara, men de är inte ofelbara. Om något är märkt som unsafe, expert, framework, provider, dialer, launcher eller Google Play Services-relaterat bör du låta det vara, om du inte har en verklig återställningsplan.

Nej, på riktigt. Fel paket kan slå ut aviseringar, samtal, installationer från Google Play, widgetar, kontosynkronisering eller telefonens startförlopp.

## Vilka telefoner brukar ha renare programvara?

Olåsta Pixel-telefoner är fortfarande bland de renaste vanliga Android-alternativen. De innehåller Googles appar, men undviker vanligtvis operatörspaket när de köps direkt. Motorola ligger ofta nära, med ett mindre antal Moto-funktioner i stället för ett helt annat appekosystem.

Samsung är bättre än förr, men dubblerar fortfarande flera av Googles appkategorier med egna versioner: webbläsare, appbutik, galleri, anteckningar, kontotjänster, TV och nyhetsliknande flöden. En del uppskattar det. För andra känns det som skräp.

Xiaomi, Redmi, Poco, Oppo, Realme och Vivo varierar kraftigt beroende på land och prisklass. En europeisk modell och en modell för den indiska marknaden med samma hårdvarunamn kan levereras med olika tredjepartsappar, rekommendationer, annonser eller uppmaningar att installera appar. Operatörsmodeller är en egen kategori, eftersom operatören kan lägga till appar oavsett tillverkare.

Nothing och OnePlus har ändrat inriktning flera gånger genom åren. Vissa utgåvor har varit rena, medan andra har fått fler partnertjänster än entusiasterna väntade sig. Se varumärkets rykte som en ledtråd, inte ett bevis. Läs aktuella recensioner av exakt modell och region innan du köper.

## Vad du inte ska inaktivera

Inaktivera inte Google Play Services. Många appar använder komponenten för pushaviseringar, plats, inloggning, kartor, säkerhetskontroller och betalningar. Att stänga av den förvandlar en mindre irritation till en trasig telefon.

Var försiktig med Android System WebView, standardstartprogrammet, telefonappen, meddelandeappen, tangentbordet, behörighetskontrollen, paketinstalleraren, Inställningar, kontaktleverantören, medieleverantören och allt som har `framework` eller `provider` i paketnamnet. De låter tråkiga eftersom de är infrastruktur.

Enskilda Google-appar som Google TV, YouTube Music, Google News och Google One är vanligtvis säkra att inaktivera om du inte använder dem. Chrome går oftast att inaktivera om en annan webbläsare är installerad, men skillnaderna mellan OEM-versioner är stora nog för att du bör kontrollera WebView och standardwebbläsaren efteråt.

## Kan bloatware vara skadlig kod?

Legitima appar från Google, Samsung, Motorola, Xiaomi, en operatör eller en annan känd OEM-tillverkare är inte automatiskt skadlig kod. De kan ändå vara irriterande, tunga eller alltför ivriga med aviseringar.

Risken är högre på mycket billiga telefoner från okända märken, inofficiella ROM-versioner eller enheter från marknadsplatser där den fasta programvaran kan ha ändrats. Om en förinstallerad app visar annonser, installerar andra appar, begär märkliga behörigheter eller återkommer efter att du har tagit bort den bör du söka efter det exakta paketnamnet innan du litar på den.

## Efter en systemuppdatering

Stora Android- eller OEM-uppdateringar kan aktivera appar som du tidigare har inaktiverat. Månatliga säkerhetsuppdateringar låter dem vanligtvis vara, men det händer tillräckligt ofta för att det är värt att kontrollera efter en större uppgradering.

Android 17 ändrar inte grundrådet. Versionen finns nu för de flesta Pixel-enheter som stöds, och fler nya enheter med Android 17 kommer under de närmaste månaderna. På Samsung, Xiaomi, Oppo och liknande telefoner beror mängden bloatware fortfarande mer på OEM-systemavbildningen och operatörsversionen än på Android-numret.
