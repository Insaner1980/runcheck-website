---
title: "Vad händer när telefonens lagringsutrymme är fullt"
description: "Metabeskrivning: En full Android-telefon kan börja krångla i helt vanliga situationer: kamerafel, appkrascher, uppdateringar som stannar och långsam fillagring. Här ser du vad som brukar sluta fungera först och hur mycket ledigt utrymme du bör behålla."
listSummary: "prestanda, hastighet och android"
hub: "storage"
sourceNumber: 81
order: 3
tags: ["prestanda","hastighet","android","optimering","felsökning"]
locale: "sv"
draft: false
---
---

När lagringsutrymmet i en Android-telefon är fullt slutar den inte fungera på ett prydligt och förutsägbart sätt. Först börjar den bete sig märkligt.

Kameran tvekar. Appar fryser när de försöker spara utkast. Uppdateringar vägrar installeras. Tangentbordet släpar i en chattapp som fungerade utan problem dagen innan. Sedan visar Android en varning om att lagringsutrymmet är fullt, som om det förklarar varför allt plötsligt känns trasigt.

Det gör det, till stor del.

## Vad slutar fungera först

Kameran är ofta bland det första du märker problem med. Ett foto sparas inte som en liten färdig fil i samma ögonblick som du trycker på avtryckaren. Kameraappen kan behöva utrymme för bildbehandling, tillfälliga filer, miniatyrbilder, redigeringar, serietagning eller videobuffertar. Utan arbetsutrymme kan den frysa, misslyckas med att spara eller avbryta en inspelning.

Sedan kommer apparna. Varje app skriver små filer medan den körs: cache, loggar, databaser, utkast, sessionsdata, miniatyrbilder, nedladdat innehåll och SQLite-journalfiler. När sådana skrivningar misslyckas kan appen krascha eller tyst förlora det du höll på med.

Systemuppdateringar behöver också plats. En månatlig säkerhetsuppdatering är mindre än en fullständig Android-uppgradering, men båda kräver utrymme för både hämtning och installation. Om telefonen inte kan installera uppdateringar går du miste om säkerhets- och felkorrigeringar. Det är ett dåligt byte bara för att få behålla gamla nedladdningar och dubbla videor.

## Därför börjar telefonen bli långsam innan utrymmet är helt slut

Du behöver inte komma ned till 0 GB ledigt innan telefonen blir långsam. Riskzonen börjar ofta när mindre än 10-15 % är ledigt, och under 5 % kan problemen bli påtagliga.

Flashlagring behöver lediga block för rensning, slitageutjämning och skräpinsamling (garbage collection). När utrymmet är knappt måste lagringsstyrenheten göra mer arbete innan nya data kan skrivas. Vanliga skrivningar tar då längre tid. Att spara ett foto, installera en app, uppdatera en databas eller hämta en bilaga kan pausa telefonen tillräckligt länge för att du ska märka det.

Blanda inte ihop detta med zRAM. De flesta Android-telefoner använder zRAM som komprimerat minne i RAM, inte som en vanlig växlingsfil i den interna lagringen. Full lagring betyder alltså inte direkt att "Android inte längre kan använda swap". Problemet är att appar och systemet fortfarande behöver lagringsutrymme för riktiga filer medan de körs.

Android 17 inför strängare minnesgränser för appar, men det tar inte bort behovet av ledigt lagringsutrymme. Minnesbrist och lagringsbrist är två olika problem. De kan bara kännas väldigt lika när du stirrar på en frusen skärm.

## Vad fyller lagringen utan att fråga

Meddelandeappar är ofta boven. WhatsApp, Telegram, Discord och liknande appar kan hämta foton, videor, röstmeddelanden, dekaler, GIF-filer och dokument från varje aktiv grupp du deltar i. Medier från några månaders gruppchattar kan ta mer plats än kamerabilderna.

Mappen Hämtade filer är en annan kyrkogård. PDF-filer, APK-installationsfiler, ZIP-filer, formulär, skärmbilder, fakturor och filer som öppnades en enda gång från ett mejl blir liggande tills du tar bort dem.

Offlineinnehåll växer också i det tysta. Spotify-spellistor, Netflix-avsnitt, YouTube-nedladdningar, poddavsnitt, ljudböcker och offlineområden i Google Maps ligger i apparnas lagringsutrymme. Du ser inte alltid filerna i filhanteraren, men de syns under **Inställningar > Appar > [appens namn] > Lagring** eller **Lagring och cacheminne**, beroende på telefon.

Papperskorgen kan också lura dig. MediaStore-baserat stöd för papperskorg kom med Android 11, och appar som Files by Google kan behålla raderade objekt där i omkring 30 dagar om du inte tömmer den. Google Photos har egna regler för papperskorgen. Samsung Gallery och Samsung My Files har också egna papperskorgar. Om du har raderat en mängd videor och lagringssiffran knappt har förändrats bör du kontrollera papperskorgarna.

## Hur mycket ledigt utrymme bör du behålla

Sikta på 15-20 % ledigt utrymme. På en enhet med 64 GB innebär det ungefär 10 GB. Har du 128 GB är omkring 20 GB en bra buffert om det går.

Den bufferten ger Android plats för appuppdateringar, kameraarbete, cache, databasskrivningar, nedladdningar och underhåll av lagringen. Du behöver inte finjustera siffran varje dag. Däremot bör du sluta se 2 GB ledigt som "tillräckligt".

Om telefonen har 32 GB eller 64 GB lagring kan det vara svårt att hålla gott om plats med dagens appar, foton och chattmedier. Det är inte ditt fel. Telefoner med liten lagring har helt enkelt åldrats dåligt.

runcheck följer lagringsanvändningen i enhetens hälsoöversikt och varnar för lågt ledigt utrymme innan telefonen når krisläge. På detaljsidan för lagring kan du också skilja mellan bilder, videor, ljud, dokument, hämtade filer och andra kategorier, så att rensningen börjar med fakta i stället för slumpmässig radering.

## Vanliga frågor

### Kan full lagring skada telefonen permanent?

Vanligtvis inte. Det kan ge lagringsstyrenheten sämre arbetsförhållanden för slitageutjämning, men du förstör knappast NAND-kretsen bara för att telefonen blir full några gånger. Den större risken är praktisk: missade uppdateringar, foton som inte sparas, skadade appdata och en telefon som blir plågsam att använda.

### Löser en fabriksåterställning problemet med full lagring?

Den frigör utrymme, men är det grövsta verktyget du kan använda. Om WhatsApp-medier, offlinevideor och kamerafiler fyllde telefonen en gång kommer de att göra det igen. Rensa källorna först.

### Varför går siffrorna inte ihop?

Android, systempartitioner, förinstallerade appar, appdata, miniatyrbilder, papperskorgar och kategorietiketter stämmer inte alltid exakt överens. Den marknadsförda kapaciteten är inte heller samma sak som det användbara utrymmet. Siffran på kartongen motsvarar aldrig exakt den plats du får för egna filer.

### Löser ett SD-kort problemet?

Det hjälper för foton, videor, musik och dokument om telefonen fortfarande har en kortplats. För appar är det mindre användbart. Många appar kan inte flyttas till SD-kort, och även när det går är ett microSD-kort mycket långsammare än intern UFS-lagring. Använd kortet för medier, inte som en räddningsplanka för en telefon som behövde mer intern lagring redan från början.
