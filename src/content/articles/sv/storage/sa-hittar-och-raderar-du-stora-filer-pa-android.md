---
title: "Så hittar och raderar du stora filer på Android"
description: "Metabeskrivning: Det snabbaste sättet att frigöra lagringsutrymme på Android är att börja med de största filerna. Använd Files by Google, telefonens filhanterare och apparnas lagringsvyer utan att radera fel saker."
listSummary: "lagring, android och rensning"
hub: "storage"
sourceNumber: 82
order: 4
tags: ["lagring","android","rensning","optimering","guide"]
locale: "sv"
draft: false
---
---

En enda 4K-video från en helgresa kan vara större än hundratals foton. Samma sak gäller ett hämtat Netflix-avsnitt, en bortglömd mapp med speldata eller en ZIP-fil som du öppnade för flera månader sedan.

Det är därför slumpmässig rensning känns så otacksam. Att ta bort 40 små skärmbilder hjälper inte mycket om tre videor upptar 6 GB.

## Börja med lagringsöversikten

Öppna **Inställningar > Lagring** och titta först på den största kategorin. På Samsung använder du **Inställningar > Enhetsvård > Lagring**. På Xiaomi finns lagringsöversikten vanligtvis under Om telefonen eller i den förinstallerade säkerhetsappen. Menynamnen kan variera mellan modeller och systemversioner.

Radera inget ännu. Ta bara reda på vad som är problemet: videor, appar, hämtade filer, ljud, dokument eller "Övrigt", vilket ofta betyder appdata, cachelagrade filer eller sådant som Android inte kan sortera tydligt.

Om videor är den största kategorin går du efter videor. Om appar tar mest plats öppnar du apparnas lagringsvyer. Om mappen Hämtade filer är enorm sorterar du den efter storlek. Enkelt. Tråkigt. Effektivt.

## Använd Googles filapp för den första genomgången

Files by Google är den säkraste utgångspunkten på de flesta Android-telefoner. Den är förinstallerad på många enheter och finns även på Google Play.

Öppna appen och leta efter **Rensa**. Beroende på version kan alternativet finnas i navigeringen eller under menyn. Granska korten för stora filer, dubbletter, gamla hämtade filer och säkerhetskopierade medier.

Verktyget för dubbletter är användbart eftersom du får granska filerna innan de raderas. Enligt Google flyttas valda dubblettfiler till papperskorgen, vilket normalt ger dig en möjlighet att återställa dem innan de tas bort permanent.

Markera ändå inte allt utan att titta. En dubblett kan vara avsiktlig. Det kan finnas en god anledning till att en kopia av en id-handling ligger i Hämtade filer och en annan i Dokument.

## Sortera manuellt i filhanteraren

Telefonens inbyggda filhanterare klarar samma grundläggande uppgift. Öppna den interna lagringen, välj en mapp och sortera efter storlek via trepunktsmenyn eller sorteringsknappen.

Börja här:

- `DCIM/Camera` innehåller inspelade videor, serietagningar, slowmotionklipp och redigerade kopior.
- `Downloads` är platsen där PDF-filer, APK-installationsfiler, ZIP-filer, dokument och filer från webbläsaren samlas.
- `Documents` innehåller ofta exporterade rapporter, arbetsfiler, fakturor och gamla bilagor.
- `Movies` eller `Videos` är värt att kontrollera efter skärminspelningar och redigerade klipp.

4K-video är den uppenbara utrymmestjuven. Den exakta storleken beror på bithastighet, codec, bildfrekvens, HDR och kameraapp, men några hundra MB per minut är normalt på många telefoner. Tio minuter kan bli flera gigabyte innan du ens hinner tänka på det.

APK-installationsfiler är en annan enkel vinst. Om du har sidoladdat en app och den redan är installerad är APK-filen i Hämtade filer oftast bara överflödig.

## Kontrollera både apparnas lagring och vanliga filer

En del av det största innehållet visas inte som tydliga filer. Strömningsappar, spel, meddelandeappar, poddappar och kartappar lagrar ofta nedladdningar i appspecifikt utrymme.

Öppna **Inställningar > Appar**, sortera efter storlek om telefonen har den funktionen och öppna de största apparna. Leta efter **Lagring** eller appens egen lista över hämtat innehåll och nedladdningar.

Bra ställen att kontrollera:

- Hämtade Spotify-spellistor och appens cache.
- Nedladdningar i Netflix, Disney+, Prime Video och YouTube.
- Offlineområden i Google Maps.
- Nedladdade poddar och ljudböcker.
- Mobilspel med extra hämtade resurser.
- WhatsApp: **Settings > Storage and data > Manage storage**.
- Telegram: **Settings > Data and storage > Storage usage**.

På nyare Android-installationer lagrar WhatsApp ofta medier under `Android/media/com.whatsapp/WhatsApp/Media`, men appens eget lagringsverktyg är enklare och säkrare. Börja där.

## Var försiktig med Android/data och Android/obb

Äldre rensningsguider säger ofta att du ska öppna `Android/data/` och `Android/obb/` och ta bort kvarlämnade mappar från avinstallerade appar. Det rådet är bara delvis användbart numera.

Android 11 och senare begränsar åtkomsten till dessa mappar. Vissa filhanterare döljer dem, andra visar bara en del av innehållet och några kräver omständliga behörighetssteg. Bråka inte med systemet bara för att radera något du inte förstår.

Om du vet att ett borttaget spel har lämnat 3 GB efter sig och filhanteraren tydligt visar den gamla mappen i `Android/obb/`, är det rimligt att radera den. Tillhör mappen en app som du fortfarande använder ska den lämnas i fred. Annars kan appen sluta fungera eller behöva hämta allt igen.

## Töm papperskorgen efter stora raderingar

När du raderar en stor fil frigörs inte alltid utrymmet direkt. Files by Google, Samsung My Files, Google Photos, Samsung Gallery och andra medieappar kan först flytta filerna till en papperskorg.

Kontrollera appen som du använde för raderingen. Töm papperskorgen först när du är säker på att filerna inte behövs.

I Files by Google kan raderade objekt normalt återställas från papperskorgen under 30 dagar. Google Photos har egna regler, särskilt för säkerhetskopierade medier, så utgå inte från att alla appar fungerar likadant.

## Vad du bör radera först

De bästa första målen är filer som är stora, möjliga att ersätta och inte personliga.

Radera APK-installationsfiler, dubbla nedladdningar, sedda offlinevideor, gamla poddavsnitt, utgångna offlinekartor, cache från appar du förstår och medier från appar du inte längre använder.

Säkerhetskopiera personliga videor, foton och dokument innan du tar bort dem lokalt. Molnlagring är okej när uppladdningen verkligen är klar. En dator eller extern disk är bättre för sådant du skulle bli ledsen över att förlora.

Låt systemliknande filer vara. Om en fil ligger utanför Hämtade filer, DCIM, Bilder, Filmer, Musik eller Dokument och du inte vet vad den är, ska den inte bli ditt experiment.

## Hur ofta behöver du göra detta?

Det finns inget schema. Kontrollera stora filer när det lediga utrymmet sjunker under 15-20 %, före en större Android-uppdatering eller inför en resa där du räknar med att spela in mycket video.

Pro-rensningsverktygen i runcheck bygger på samma idé: stora filer, gamla hämtade filer och APK-filer. Filtret för stora filer låter dig välja gränser på 10 MB, 50 MB, 100 MB eller 500 MB och visar en prognos före och efter raderingen. Det är rätt sätt att rensa lagring. Granska först, radera sedan.
