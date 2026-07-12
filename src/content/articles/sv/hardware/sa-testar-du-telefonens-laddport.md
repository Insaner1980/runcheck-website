---
title: "Så testar du telefonens laddport"
description: "Lär dig testa laddporten på en Android-telefon med kabelkontroller, säker rengöring, mätning av laddström och inbyggd diagnostik."
listSummary: "laddning, batteri och android"
hub: "hardware"
sourceNumber: 108
order: 5
tags: ["laddning","batteri","android","guide","hårdvara"]
locale: "sv"
draft: false
---
---

Du håller kabeln i en märklig vinkel, laddningsikonen blinkar och telefonen laddas bara när den ligger helt stilla. Det känns ofta som en trasig laddport, men börja inte där.

Börja med de tråkiga kontrollerna. De hittar fler problem än många tror.

## Uteslut kabeln och nätadaptern först

Prova en annan USB-C- eller Micro-USB-kabel med samma nätadapter. Prova sedan en annan adapter med den ursprungliga kabeln. Testa om möjligt båda tillbehören med en annan telefon eller surfplatta.

En kabel kan gå sönder invändigt långt innan den ser skadad ut. Ett enda data- eller strömstift kan sluta fungera och få en snabbladdare att sjunka till långsam underhållsladdning. Kabeln kan fortfarande se helt normal ut på utsidan, vilket är irriterande men vanligt.

Om samma kabel och adapter laddar en annan enhet korrekt blir telefonens port mer misstänkt. Om en annan kabel plötsligt löser allt var porten troligen inte problemet.

## Inspektera porten

Stäng av telefonen och lys rakt in i laddporten med en ficklampa. Leta efter ludd som pressats mot portens bakre vägg. Fickludd byggs upp långsamt, packas ihop av laddkontakten och hindrar till slut kontakten från att gå in helt.

Kontrollera även passformen. En frisk USB-C-kontakt ska sitta stadigt i porten. Den ska inte falla ur, glappa kraftigt eller kopplas från när du flyttar telefonen lite. Ett litet spel är normalt, särskilt på äldre telefoner. En anslutning som bryts och återkommer är inte normal.

Leta efter gröna, vita eller mörka beläggningar på kontakterna. Det tyder på korrosion eller fuktexponering. Att ta bort damm kan hjälpa mot ludd. Det reparerar inte en korroderad kontakt.

## Rengör försiktigt

Om du ser damm eller ludd, håll porten riktad nedåt och prova några korta luftstötar från en handblåsa eller tryckluftsburk. Blås inte på nära håll med fullt tryck. Målet är att lossa skräp, inte pressa det längre in.

Använd en torr, mjuk elektronikborste eller en ren och torr tandborste för hårt packat ludd. Undvik metallverktyg. En metallnål kan böja en kontakt eller orsaka kortslutning. Jag skulle inte heller använda en tandpetare av trä om det finns något bättre alternativ, eftersom den kan splittras och lämna ett nytt problem i porten.

Häll inte alkohol eller kontaktrengöring i telefonen. Att en reparatör använder vätskor under kontrollerade verkstadsförhållanden gör det inte till en säker hemmareparation.

Anslut laddaren igen efter rengöringen. Om kontakten nu klickar i tydligare och sitter stadigare var ludd sannolikt huvudproblemet.

## Kontrollera laddströmmen

Android gör batteriets strömvärden tillgängliga via `BatteryManager` på enheter som stöder mätningen. Appar som Ampere kan visa värdena, men använd dem som jämförelseverktyg och inte som laboratoriemätare.

Öppna Ampere utan ansluten laddare och notera urladdningsvärdet. Anslut laddaren, vänta ungefär 10 sekunder och låt värdet stabiliseras. Batterinivå, värme, skärmens ljusstyrka och telefonens laddningsregler påverkar mätningen.

En laddare på 2 A visar inte alltid 2 000 mA på skärmen. Om batteriet nästan är fullt sänker telefonen avsiktligt laddhastigheten. Men om du ser omkring 200 eller 300 mA med en fungerande väggladdare och kabel, och värdet hoppar varje gång du rör kontakten, har porten inte en stabil anslutning.

Samsung-användare har ett annat alternativ. Öppna Samsung Members, välj Support och tryck på Kom igång under Telefondiagnostik. Kör Kabelladdning eller USB-anslutning om testet finns på modellen. I äldre versioner av Samsung Members kan området i stället heta Få hjälp eller knappen Visa tester.

Samsung-koden `*#0*#` kan också öppna en hårdvarutestmeny på många Galaxy-telefoner. Använd Samsungs egen Telefon-app, inte en uppringningsapp från tredje part. På nyare One UI-versioner, operatörsmodeller eller telefoner med säkerhetsbegränsningar kan koden sakna effekt. Det är numera normalt.

Android 17 lade inte till något universellt test av laddporten för alla Android-telefoner. Pixel-, Samsung- och Xiaomi-telefoner använder fortfarande olika diagnostikvägar.

## Prova säkert läge

Om porten är ren, kabeln sitter bra och laddningen ändå beter sig märkligt kan du starta i säkert läge. Säkert läge inaktiverar appar från tredje part och är därför ett snabbt sätt att hitta programvarustörningar.

På de flesta Android-telefoner öppnar du strömmenyn och håller sedan `Stäng av` intryckt tills alternativet för säkert läge visas. På många Samsung-telefoner startar du om enheten och håller Volym ned intryckt medan den startar.

Om laddningen fungerar normalt i säkert läge bör du granska nyligen installerade batteri-, automations-, säkerhets- eller laddningsanimationsappar. Någon av dem kan störa laddningsbeteendet eller aviseringarna.

## När porten behöver repareras

Porten är troligen skadad när allt detta stämmer: laddaren och kabeln fungerar med andra enheter, porten är ren, kontakten sitter fortfarande löst och strömvärdena förblir låga eller instabila.

Hur svår reparationen är beror på telefonen. Många Samsung Galaxy-, Xiaomi-, Motorola- och billigare Android-telefoner har USB-porten på ett separat dotterkort. Det är vanligtvis en rutinreparation. På vissa telefoner är porten fastlödd på moderkortet, vilket kräver mer skicklighet och kostar mer eftersom teknikern måste utföra arbete på kortnivå.

Trådlös laddning kan köpa dig tid om telefonen stöder det. Den går helt förbi USB-porten, även om den vanligtvis är långsammare och mindre praktisk än kabelansluten laddning.

Om laddningen har blivit gradvis sämre under flera veckor bör du inte vänta tills porten slutar fungera helt. runcheck loggar laddningsbeteende, strömförbrukning och trender för strömleverans över tid, vilket gör en port som håller på att ge upp lättare att upptäcka innan batteriet är helt tomt.
