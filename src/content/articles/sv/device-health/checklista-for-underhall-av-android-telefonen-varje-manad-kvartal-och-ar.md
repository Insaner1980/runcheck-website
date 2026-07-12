---
title: "Checklista för underhåll av Android-telefonen: varje månad, kvartal och år"
description: "De flesta Android-telefoner behöver inte ständig omvårdnad. Men om underhållet ignoreras helt samlas problemen tills telefonen känns trög, batteriet knappt räcker en halv dag och lagringen är full av filer som ingen minns att de laddat ned. Några minuters regelbundet underhåll förebygger det mesta."
listSummary: "De flesta Android-telefoner behöver inte ständig omvårdnad."
hub: "device-health"
sourceNumber: 8
order: 4
tags: ["lagring","android","rensning","optimering","guide"]
locale: "sv"
draft: false
---
Checklistan kan anpassas efter hur telefonen faktiskt används. Allt behöver inte göras varje månad, och vissa uppgifter är bara relevanta en eller två gånger om året.

## Varje månad

**Kontrollera cachelagrade data från stora appar eller appar som krånglar.** Gå till **Inställningar > Lagring > Andra appar**. Den exakta sökvägen varierar mellan tillverkare. Tryck på apparna med störst cache. Webbläsare, sociala medier och streamingappar kan samla flera hundra megabyte. Att rensa cacheminnet tar inte bort sparade data eller lösenord. Det raderar tillfälliga filer som appen skapar på nytt vid behov. Gör det när en apps cache har blivit mycket stor eller appen beter sig konstigt, inte som en ritual för varje app varje månad.

På Samsung-telefoner finns Enhetsvård under **Inställningar > Batteri och enhetsvård** i One UI 4 och senare, eller **Inställningar > Enhetsvård** i äldre One UI. Funktionen **Optimera nu** kan rensa onödiga filer, stänga bakgrundsappar och leta efter uppenbara problem. Den är bekväm men kan vara ganska aggressiv och ibland stänga appar som du hellre vill låta fortsätta köras.

**Kontrollera mönster i batterianvändningen.** Öppna **Inställningar > Batteri > Batterianvändning** på Pixel och standardnära Android, eller **Inställningar > Batteri och enhetsvård > Batteri** på Samsung, och granska vilka appar som har använt mest ström den senaste veckan. En app högt upp på listan som du knappt har använt aktivt beter sig troligen fel i bakgrunden. På Android 12 och senare kan du begränsa den under **Inställningar > Appar > [appens namn] > Batteri > Begränsad**. I äldre versioner finns alternativet under **Inställningar > Appar > [appens namn] > Batteri > Bakgrundsbegränsning**. Samsung erbjuder fler val genom listorna **Appar i viloläge** och **Appar i dvala** under Enhetsvård.

**Granska appbehörigheter.** Gå till **Inställningar > Integritet > Behörighetshanteraren** i Android 12 och senare, eller till appbehörigheterna under **Inställningar > Appar** i Android 10 och 11. Kontrollera vilka appar som har tillgång till plats, kamera, mikrofon och filer. Ta bort sådant som inte är rimligt, exempelvis om en ficklampsapp får läsa kontakter. I Android 11 och senare kan oanvända appar automatiskt förlora sina behörigheter efter några månader. Google Play-tjänster kan även ge automatisk återställning av behörigheter på vissa enheter med Android 6 till Android 10, men beteendet varierar. En manuell genomgång hittar fortfarande appar som slunkit igenom eller har åtkomst som inte längre behövs.

**Installera tillgängliga uppdateringar.** Kontrollera **Inställningar > Programuppdatering**, eller **System > Systemuppdatering** på standardnära Android, efter operativsystems- och säkerhetsuppdateringar. Öppna sedan Google Play Butik, tryck på profilbilden och välj **Hantera appar och enhet > Tillgängliga uppdateringar**. Säkerhetsuppdateringar är viktigare än nya funktioner. De täpper till sårbarheter som kan utnyttjas aktivt.

**Radera skärmbilder och nedladdningar som inte längre behövs.** Mapparna Nedladdningar och Skärmbilder växer utan att märkas. Öppna Files by Google eller tillverkarens filhanterare och sortera efter datum. En fil som är äldre än en månad och inte har öppnats sedan dess går ofta att ta bort.

## Var tredje månad

**Starta om telefonen.** Det låter banalt, men många stänger aldrig av sina telefoner. En omstart rensar arbetsminnet, avslutar bakgrundsprocesser som har fastnat och återställer tillfälliga nätverkstillstånd. Telefoner som inte startats om på flera veckor kan börja uppföra sig märkligt, med sega animationer, wifi som tappar anslutningen eller Bluetooth som vägrar parkoppla. Problemen försvinner ibland direkt efter en omstart. På nyare Samsung-telefoner kan automatisk omstart ställas in genom funktionen **Automatisk optimering** i Enhetsvård. Sökvägen varierar mellan One UI-versioner.

**Gå igenom installerade appar.** Öppna **Inställningar > Appar** och bläddra igenom listan. Appar som inte har använts på tre månader kan tas bort. Varje installerad app kan ha bakgrundstjänster, ta emot pushnotiser och använda lagringsutrymme även om du aldrig öppnar den. I Android 12 och senare försätts oanvända appar så småningom i ett vilande läge och förlorar behörigheter, men de tar fortfarande plats.

**Kontrollera lagringsutrymmet.** Titta inte bara på vilka filer som kan raderas, utan även på den totala användningen under **Inställningar > Lagring**. När intern lagring passerar 80 % börjar telefonen ofta bli långsammare. NAND-minne behöver ledigt utrymme för skrivningar och slitageutjämning. Försök hålla minst 15-20 % ledigt.

**Testa laddningsporten och kabeln.** Anslut laddaren och kontrollera att kontakten sitter stadigt utan glapp eller avbruten laddning. Om fickludd har samlats i USB-C-porten kan det försiktigt tas bort med en trästicka. Använd inte metall och tryck inte mot kontakterna. En smutsig eller glapp port är ett av de vanligaste hårdvaruproblemen och går ofta att lösa utan verkstad.

**Kontrollera säkerhetskopieringen.** Platsen har flyttats mellan Android-versioner. Prova **Inställningar > Google > Alla tjänster > Säkerhetskopiering**, **Inställningar > Google > Säkerhetskopiering** eller **Inställningar > System > Säkerhetskopiering** i Android 9-11 med standardnära Android. På Samsung finns den vanligtvis under **Inställningar > Konton och säkerhetskopiering > Säkerhetskopiera data**. Kontrollera att säkerhetskopiering är aktiverad och titta på tidpunkten för den senaste säkerhetskopian. Om den är äldre än en vecka väljer du **Säkerhetskopiera nu**. Google One-säkerhetskopiering omfattar appdata när appen tillåter det, samtalshistorik, kontakter, enhetsinställningar och SMS. Bilder kräver en separat kontroll: öppna Google Foto och bekräfta att säkerhetskopieringen är aktiv där också.

**Gör en snabb kontroll av batterihälsan.** Om du har använt AccuBattery eller en liknande app kan du kontrollera den uppskattade procentsatsen. Efter ett års normal användning ligger många nyare telefoner fortfarande över 90 %, men värme, hård användning och täta fulladdningar kan sänka nivån snabbare. Mellan 80 och 90 % är vanligt på äldre telefoner som används dagligen. Under 80 % börjar ett batteribyte vara värt att överväga. Pixel 8a och senare visar batterihälsa och antal laddningscykler direkt i Inställningar. Vissa nyare Samsung-modeller visar också mer detaljerad batteriinformation, men innehållet beror på modell, region och One UI-version.

## Var sjätte månad

**Granska notisinställningarna.** Appar samlar på sig tillstånd att skicka notiser. Gå till **Inställningar > Aviseringar > Appaviseringar** och stäng av notiser från appar som inte behöver avbryta dig. Det minskar onödiga väckningar och gör aviseringspanelen mer användbar.

**Leta efter oväntade bakgrundsprocesser.** Aktivera Utvecklaralternativ under **Inställningar > Om telefonen** genom att trycka sju gånger på **Versionsnummer**. Öppna sedan **Inställningar > Utvecklaralternativ > Körande tjänster**. Där ser du vilka appar och tjänster som är aktiva i minnet. En process som använder RAM utan att vara en systemprocess eller höra till en app du använder förtjänar en närmare kontroll.

**Rengör telefonen fysiskt.** Stäng av den och torka skärmen med en mikrofiberduk som fuktats lätt med vatten, eller med en duk med 70-procentig isopropylalkohol om tillverkaren tillåter det. Rengör högtalargaller och mikrofonöppningar med en mjuk borste. Kontrollera laddningsporten efter skräp. Ta av skalet och rengör under det, eftersom instängd fukt och smuts kan skada ramen eller hålla kvar värme.

**Bedöm skal och skärmskydd.** Skal slits. Ett skal med spruckna hörn eller dålig passform skyddar inte särskilt mycket. Skärmskydd samlar repor som kan försämra pekrespons och bildskärpa. Ett nytt skärmskydd kostar lite jämfört med en ny skärm.

## En gång om året

**Kör en fullständig diagnostik.** Gå längre än den månatliga batterikontrollen. Testa skärmen efter döda pixlar genom att visa helvita, röda, gröna och blå bilder i fullskärm. Kontrollera sensorerna, som kompass, accelerometer, gyroskop och närhetssensor. Mät hur snabbt GPS får låsning och testa alla högtalare och mikrofoner. Använd det inbyggda diagnostikverktyget där det finns: `*#0*#` på många Samsung-telefoner, `*#*#6484#*#*` på många Xiaomi-telefoner, `*#*#7287#*#*` för Pixels reparationsdiagnostik, diagnostiken i Samsung Members eller ett seriöst tredjepartsverktyg.

**Överväg en fabriksåterställning, men gör det försiktigt.** En telefon som har använts intensivt i mer än ett år och fått hundratals appar installerade och avinstallerade kan samla kvarlämnade data. En fabriksåterställning följd av återställning från en kontrollerad säkerhetskopia ger systemet en ren start. Det kan vara särskilt värt att göra efter en stor systemuppgradering, till exempel från Android 16 till Android 17, om telefonen känns långsam efteråt. Kontrollera först att säkerhetskopian är fullständig och går att använda.

**Bedöm batterihälsan och ta ställning till byte.** Efter ett års daglig användning ligger många batterier på 85-95 % av den ursprungliga kapaciteten, beroende på modell, laddningsvanor och omgivningstemperatur. Under 80 % är det dags att undersöka ett byte. Samsung erbjuder batteribyte via auktoriserade servicecenter, Google har reparationsalternativ för Pixel utanför garantin och fristående verkstäder kan göra jobbet. I Sverige kostar ett batteribyte för många vanliga modeller ungefär 700-1 500 kr, men modell, reservdel, verkstad och garanti kan flytta priset i båda riktningarna.

**Granska datalagring och integritetsinställningar.** Öppna **Inställningar > Google > Hantera ditt Google-konto > Data och integritet** och kontrollera vad som samlas in. Radera gammal platshistorik, webbaktivitet och YouTube-historik om den inte behövs. Granska också vilka tredjepartsappar som har åtkomst till Google-kontot på **myaccount.google.com/permissions**.

## Hur är det med appar som lovar att "rensa" eller "boosta" telefonen?

Hoppa över dem. Appar som lovar att "rensa RAM" eller "öka prestandan" genom att stänga bakgrundsprocesser är antingen verkningslösa eller skadliga. Android hanterar minnet själv. Om bakgrundsappar dödas aggressivt måste de starta om från början, vilket använder mer batteri och CPU än att låta dem vara kvar. Google Play Protect söker redan efter skadlig programvara. Uppgifterna ovan täcker det telefonen faktiskt behöver.

**Files by Google** är undantaget. Appen kan hitta stora filer, dubbletter, gamla skärmbilder och oanvända appar utan de påträngande annonser och falska virusvarningar som präglar många "rensningsappar".

## Anpassa schemat för äldre telefoner

Telefoner med Android 10 eller 11 som inte längre får systemuppdateringar har fortfarande nytta av rutinen, men med vissa justeringar. När säkerhetsuppdateringarna har upphört blir det viktigare att undvika APK-filer från okända källor och hålla sig till Google Play Butik. Lagringshantering spelar större roll på telefoner med 32 eller 64 GB, där en kvartalsvis rensning kan behöva göras varje månad. Batteriet har troligen också slitits mer, vilket gör hälsokontrollen viktigare. Om batterihälsan ligger under 75 % och garantin har gått ut är batteribyte eller en nyare telefon de realistiska alternativen.
