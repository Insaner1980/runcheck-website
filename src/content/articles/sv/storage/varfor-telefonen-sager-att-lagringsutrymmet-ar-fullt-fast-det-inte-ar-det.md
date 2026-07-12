---
title: "Varför telefonen säger att lagringsutrymmet är fullt fast det inte är det"
description: "Ett vanligt supportärende ser ut så här: någon raderar en hel hög videor, kontrollerar telefonens lagringsöversikt och får ändå inte installera en app eller ta ett foto."
listSummary: "lagring, android och rensning"
hub: "storage"
sourceNumber: 87
order: 9
tags: ["lagring","android","rensning","optimering","guide"]
locale: "sv"
draft: false
---
Irriterande, men inte ovanligt. Androids varningar om fullt lagringsutrymme kan bero på synliga filer, dold appdata, papperskorgar, misslyckade nedladdningar, rester från systemuppdateringar eller en lagringsdatabas som ännu inte har hunnit uppdateras. Efter en större uppdatering, till exempel utrullningen av Android 17 som började på de flesta Pixel-modeller som stöds innan bredare tillverkaruppdateringar, kan den här typen av förvirring pågå i en dag eller två medan telefonen arbetar färdigt.

Börja med att starta om. Ja, på riktigt. Det är den tråkiga lösningen, men den rensar fastnade tillfälliga processer oftare än många tror.

## Systemet tar mer utrymme än förpackningen antyder

En telefon som säljs med 128 GB ger dig aldrig hela 128 GB för egna filer. Android, firmware, tillverkarens appar, språkfiler, systempartitioner och utrymme för uppdateringar tar en del redan innan du installerar något.

Pixel-telefoner är ofta mindre belastade än telefoner med omfattande tillverkarskal, men det finns ingen universell siffra. En Samsung Galaxy med One UI, en Xiaomi-telefon med ett tyngre systemskal och en Pixel med Android 17 redovisar inte systemlagring på samma sätt.

Systemlagringen kan också se större ut efter en OS-uppdatering. Androids uppdateringsmekanismer behöver tillfälligt utrymme, och städningen syns inte alltid direkt. Om du nyss installerade Android 17 eller en stor tillverkaruppdatering kan du starta om telefonen, ansluta laddaren, låta den ligga på wifi en stund och sedan kontrollera igen.

## Cacheminne räknas som använt utrymme

Appcache består av tillfälliga data, men den tar fortfarande plats. Webbläsare, sociala appar, videoappar, kartappar och meddelandeappar är vanliga bovar.

Vanlig Android, inklusive Android 17 på Pixel, har ingen normal knapp som rensar cacheminnet för alla appar på en gång. Rensa i stället per app via **Inställningar > Appar > välj appen > Lagring och cacheminne > Rensa cacheminne**. På vissa modeller heter avsnittet bara **Lagring**. Google beskriver detta som att tillfälligt sparade data tas bort, medan alternativet för att rensa lagringsutrymmet tar bort appens data permanent.

Rensa inte allt blint. Börja med apparna som använder mest lagringsutrymme. Ett cacheminne på 3 GB i en videoapp spelar roll. Ett dussin små cacheminnen på 20 MB gör det inte.

## Papperskorgen tar fortfarande plats

När du raderar en fil försvinner den inte alltid direkt. Files by Google kan flytta filer till papperskorgen, där de ligger kvar i 30 dagar innan de raderas automatiskt. Google Foto behåller säkerhetskopierade raderade foton och videor i 60 dagar. Objekt som inte har säkerhetskopierats och raderas från en enhet med Android 11 eller senare ligger kvar i 30 dagar.

Det betyder att du kan radera en hel hög videor utan att få tillbaka utrymmet förrän papperskorgen töms.

Kontrollera papperskorgen i galleriappen, Files by Google, Samsung My Files och alla molnappar du använder. Samsung Gallery, Google Foto, OneDrive, Dropbox och olika filhanterare hanterar radering på sina egna sätt. Det är precis därför lagringsrensning känns mer komplicerad än den borde vara.

## Meddelandeappar gömmer mycket media

WhatsApp, Telegram, Signal, Messenger, Discord och liknande appar kan i tysthet lagra foton, videor, röstmeddelanden, GIF-filer, dekaler och dokument. Filerna kan visas i Gallery, inne i meddelandeappen och under appens lagringsutrymme, vilket gör att sammanställningen ser motsägelsefull ut.

WhatsApp har ett bra inbyggt verktyg: **Settings > Storage and data > Manage storage**. Använd det innan du börjar radera mappar manuellt. Där kan du sortera efter stora filer, vidarebefordrade filer och de chattar som tar mest plats.

Telegram fungerar lite annorlunda eftersom appen förlitar sig mer på molnbaserad chatthistorik, men den sparar fortfarande mediefiler lokalt i cacheminnet. Öppna **Settings > Data and Storage > Storage Usage** för att begränsa eller rensa den lokala cachen.

Det bästa förebyggande steget är att stänga av automatisk hämtning av media i gruppchattar. Gruppvideor slukar lagringsutrymme.

## Misslyckade nedladdningar och rester från uppdateringar

En misslyckad spelhämtning, en avbruten filkopiering eller en halvfärdig systemuppdatering kan lämna tillfälliga filer efter sig. De syns inte alltid tydligt i Downloads.

Starta om först. Kontrollera sedan Downloads, webbläsarens nedladdningslista, väntande uppdateringar i Google Play och eventuella andra appbutiker du använder. Om en stor app- eller speluppdatering misslyckades kan du avbryta den och börja om när du har frigjort mer utrymme.

Vissa enheter har ett återställningsalternativ för att rensa cachepartitionen. Se det som en modellspecifik felsökningsåtgärd, inte som vanlig lagringsrensning. Återställningsmenyn och knappkombinationen varierar, och vissa telefoner visar inte alternativet alls.

## Kategorin Övrigt är en skräplåda

Övrigt är inte en enda typ av data. Där kan ingå appdatabaser, loggar, miniatyrbilder, kvarlämnade mappar från avinstallerade appar, nedladdade firmwarefiler, tillfälliga arkiv och sådant som Android inte kan klassificera tydligt.

Det finns ingen säker universell knapp för att radera allt under Övrigt. Den säkraste vägen är tråkig men effektiv: rensa cacheminnet för stora appar, töm papperskorgar, städa Downloads, ta bort oanvända appar och använd lagringsverktyget i varje meddelandeapp.

Om Övrigt fortfarande är mycket stort efter det kan en viss app vara orsaken. Öppna **Inställningar > Appar** och sortera efter lagringsutrymme om telefonen erbjuder den vyn.

## När Android räknar fel

Ibland är beräkningen faktiskt fel. Mediedatabasen kan ligga efter, särskilt efter en stor radering, ett problem med SD-kortet, en filöverföring eller en OS-uppdatering.

Ge den lite tid först. Starta om. Öppna sedan galleriappen och filhanteraren så att de kan skanna om innehållet. Om foton eller videor saknas i sammanställningen men fortfarande syns i Files by Google kan indexet i Media Storage vara inaktuellt.

På vissa enheter kan vana användare gå till **Settings > Apps > Show system apps > Media Storage > Storage > Clear data**. Detta raderar inte de faktiska mediefilerna, men tvingar Android att bygga om medieindexet. Telefonen kan arbeta intensivt en stund efteråt. Gör inte detta utan god anledning. Använd steget när lagringssiffrorna uppenbart inte stämmer.

En diagnostikapp som runcheck kan hjälpa genom att visa lagringstryck och städkategorier utanför telefonens ibland förvirrande sammanställning i Inställningar. Den raderar inte något automatiskt, men kan peka ut vilken del av lagringen som behöver din uppmärksamhet.

## Vad du bör göra först

Starta om telefonen.

Töm papperskorgen i galleriappen och filhanteraren.

Öppna lagringsöversikten i Inställningar och kontrollera vilken kategori som är störst.

Rensa cacheminnet för de två eller tre appar som använder mest utrymme.

Använd WhatsApps eller Telegrams egna lagringsverktyg om chattmedier tar mycket plats.

Radera gamla filer i Downloads, särskilt APK-filer, ZIP-filer, exporterade videor och dubbla dokument.

Säkerhetskopiera foton och videor och använd sedan **Frigör utrymme** i Google Foto, eller motsvarande funktion i din molnapp, för att ta bort lokala kopior.

Om inget av detta hjälper och enheten fortfarande knappt går att använda bör du säkerhetskopiera allt viktigt och överväga en fabriksåterställning. Det är sista utvägen eftersom hela enheten raderas, men det är också åtgärden som löser verkligt tilltrasslad lagringsberäkning.
