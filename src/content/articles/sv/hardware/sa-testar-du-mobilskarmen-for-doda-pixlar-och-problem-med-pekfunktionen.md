---
title: "Så testar du mobilskärmen för döda pixlar och problem med pekfunktionen"
description: "Du undersöker en begagnad telefon. Säljaren säger att skärmen är felfri, och vid första anblicken ser den också ut så. Sedan öppnar du en vit bild och upptäcker en svart prick nära hörnet. Eller ännu värre, du börjar skriva och en hel remsa av tangentbordet reagerar inte på fingret."
listSummary: "Du undersöker en begagnad telefon."
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["hårdvara","testning","diagnostik","android","guide"]
locale: "sv"
draft: false
---
Skärmfel är lätta att missa vid vanlig användning. Bakgrundsbilder, ikoner, mörkt läge och rörelser döljer defekter. Med några tester av enfärgade bilder och pekfunktionen blir problemen mycket lättare att upptäcka.

## Döda pixlar och fastnade pixlar

En död pixel förblir svart oavsett vad skärmen visar. Den har slutat fungera.

En fastnad pixel fungerar annorlunda. Den lyser hela tiden i en färg, vanligtvis rött, grönt, blått eller vitt, även när området runt omkring ändras. Fastnade pixlar kan ibland reagera på verktyg som snabbt växlar färg. Döda pixlar gör vanligtvis inte det.

Båda syns bäst mot enfärgade bakgrunder. Det räcker inte att titta på hemskärmen och säga att allt ser bra ut. Då missar du för mycket.

## Kontrollera döda och fastnade pixlar

Höj ljusstyrkan, rengör glaset och visa enfärgade bilder över hela skärmen. Använd vitt, svart, rött, grönt, blått och grått.

Ett webbaserat test som deadpixeltest.org fungerar bra. En skärmtestapp från Play Butik kan vara bättre eftersom den kan dölja status- och navigeringsfälten, växla färger automatiskt och innehålla gradienttester.

Vissa telefoner har inbyggda tester:

- Samsung Galaxy: slå `*#0*#` på många modeller och använd testerna Red, Green, Blue, Black och Touch. Du kan också öppna Samsung Members, välja Support och starta Telefondiagnostik. Beroende på appversion kan knappen heta Kom igång eller Visa tester.
- Google Pixel: slå `*#*#7287#*#*` för att öppna Pixel Diagnostics på enheter som stöds.
- Xiaomi, Redmi och POCO: prova `*#*#6484#*#*` för att öppna CIT-menyn.
- Motorola: öppna `Device Help > Device diagnosis > Hardware test`.

Mot en vit bakgrund ser döda pixlar ut som små svarta prickar. Mot en svart bakgrund syns fastnade pixlar som ljusa färgade prickar. Röda, gröna och blå bilder gör det lättare att se vilken subpixel som har fastnat.

Ta god tid på dig. En långsam kontroll längs kanter och hörn hittar fler fel än om du trycker dig igenom färgerna så snabbt som möjligt.

## Kontrollera jämn ljusstyrka och inbränning

En helt svart bild i ett mörkt rum är användbar på telefoner med LCD-skärm. Ljusläckage från bakbelysningen syns då som grumliga, ljusare områden nära kanterna. OLED-skärmar har ingen bakbelysning och får därför inte ljusläckage på samma sätt.

OLED har ett annat problem: inbränning. AMOLED, Super AMOLED och Dynamic AMOLED kan åldras ojämnt när samma element visas länge på samma plats. Navigeringsfält, statusikoner, tangentbord och reglage i sociala appar är vanliga former som blir kvar.

Använd en jämngrå bild vid medelhög ljusstyrka för att leta efter inbränning. Titta efter svaga skuggor av tangentbordet, navigeringsknappar, klockan eller appfält. En röd bild kan också göra viss inbränning tydligare eftersom olika subpixlar åldras olika snabbt.

Inbränning är permanent. Appar som påstår sig kunna reparera den försöker vanligtvis åldra resten av skärmen så att det gamla mönstret blir mindre tydligt. Det är egentligen ingen reparation.

## Testa pekresponsen

En skärm kan se perfekt ut men ändå ha en skadad digitizer. Digitizern är lagret som registrerar beröring.

Öppna en ritapp och välj en tunn pensel. Rita vågräta linjer från skärmens överkant till underkant och sedan lodräta linjer från vänster till höger. Lägg linjerna tätt. Om linjen bryts på samma ställe varje gång registrerar den delen av digitizern inte beröringen.

En pektestapp med rutnät gör kontrollen enklare. Varje ruta ska markeras när fingret passerar över den. Döda zoner förblir tomma.

Samsungs `*#0*#`-meny innehåller ett Touch-test på många Galaxy-telefoner. Vissa Android-telefoner reagerar även på `*#*#2664#*#*`, men den koden fungerar betydligt mer varierande än tillverkarnas egna verktyg. Om inget händer är det inget problem. Rittestet räcker.

Var extra noggrann vid skärmkanterna. Böjda skärmar och mycket tunna ramar kan göra kantresponsen svårare att bedöma, särskilt när telefonens skydd mot oavsiktliga handflatsberöringar är aktivt.

## Testa multitouch

De flesta moderna telefoner klarar minst fem samtidiga beröringspunkter, och många klarar tio. En multitouch-app visar numrerade cirklar för varje finger.

Placera flera fingrar på skärmen och flytta dem långsamt. Cirklarna ska följa fingrarna utan att hoppa eller försvinna. Om telefonen tappar samma finger varje gång i ett visst område är det ett användbart tecken på fel.

Det här spelar roll vid spel, nypzoomning, tangentbordsanvändning och tillgänglighetsgester.

## Håll utkik efter spöktryckningar

Spöktryckningar är inmatningar som sker av sig själva. Telefonen öppnar appar, skriver bokstäver, rullar eller trycker på knappar utan att någon rör skärmen.

Ta först bort skärmskyddet och skalet. Billiga skydd, instängd fukt och tryck nära kanterna kan störa digitizern. Rengör skärmen och testa både med laddaren ansluten och urkopplad, eftersom dåliga laddare ibland kan orsaka elektriska störningar i pekfunktionen.

Starta sedan telefonen i säkert läge. Om spöktryckningarna fortsätter där är ett hårdvarufel mer sannolikt. Om de försvinner kan en app från tredje part eller ett skärmöverlägg vara orsaken.

Om pekproblemen började direkt efter en större systemuppdatering ska du ta programvaran på allvar som möjlig orsak. Android 17 släpptes först till de flesta Pixel-modeller som stöds, medan andra tillverkare följer senare. Därför kan uppdateringsrelaterade pekfel dyka upp hos ett märke före andra. Installera väntande korrigeringar och testa igen innan du betalar för ett skärmbyte.

## Vad du gör om du hittar ett fel

På en begagnad telefon bör en död pixel, en död pekzon, spöktryckningar eller tydlig inbränning påverka priset. Låt inte någon avfärda ett pekfel som "bara programvara" om du inte själv kan testa säkert läge eller diagnostik.

På en ny telefon bör du kontakta återförsäljaren snabbt. Pixelregler, Samsungregler och tillverkarnas pixelpolicyer skiljer sig åt. I Sverige har du tre års reklamationsrätt för ursprungliga fel när du köpt telefonen av ett företag. Vid distansköp har du dessutom normalt 14 dagars ångerrätt, medan köp i fysisk butik inte har någon lagstadgad ångerrätt. Rapportera därför felet direkt i stället för att vänta.

En fastnad pixel kan vara värd ett försök med ett färgväxlingsverktyg, men ha låga förväntningar. Kör verktyget en kort stund, inte över natten med maximal ljusstyrka. Döda pixlar, spöktryckningar och döda pekzoner kräver vanligtvis att hela skärmenheten byts.

Priset på en skärmreparation varierar för mycket för att ge en meningsfull generell siffra. En enklare LCD-telefon kan vara billig att reparera. En böjd OLED-skärm på en flaggskeppsmodell kan kosta så mycket att det börjar vara rimligare att byta telefon. Be om pris för den exakta modellen innan du bestämmer dig.

## Snabba svar

### Kan ett skärmskydd orsaka döda pixlar?

Nej. Döda pixlar finns inne i själva skärmpanelen. Ett skärmskydd kan orsaka pekproblem, felaktiga tryckningar, dålig respons vid kanterna eller problem med närhetssensorn, men det dödar inte pixlar.

### Sprider sig döda pixlar?

En enskild död pixel brukar förbli en enskild död pixel. Om fler dyker upp med tiden kan orsaken vara skada på panelen, tryckskada eller en anslutning som håller på att ge upp.

### Täcks inbränning av garantin?

Ibland, men räkna inte med det. Många tillverkare betraktar inbränning som slitage, särskilt på äldre OLED-telefoner. Kraftig inbränning som uppstår tidigt bör rapporteras, men garanti och svensk reklamationsrätt är olika saker och bedömningen beror på villkoren och om felet kan anses ursprungligt.

### Är en död pixel acceptabel på en ny telefon?

Inte för köparen. En ny telefon ska ha en ren skärm. Om tillverkaren håller med beror på dess pixelpolicy, men i Sverige bör du reklamera felet till återförsäljaren direkt.
