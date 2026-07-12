---
title: "Sparar det faktiskt batteri att stänga appar?"
description: "Du har 18 % kvar, batteriikonen är röd och översikten över de senaste apparna ser full ut. Så du sveper bort allt. Det känns som att städa telefonen."
listSummary: "Du har 18 % kvar, batteriikonen är röd och översikten över de senaste apparna ser full ut."
hub: "myths"
sourceNumber: 146
order: 2
tags: ["myter","fakta","android","batteri","mytgranskning"]
locale: "sv"
draft: false
---
Det sparar egentligen inte batteri.

## Svaret är fortfarande nej

Att stänga appar från appväxlaren sparar inte någon meningsfull mängd batteri på Android. I många vanliga situationer kan det i stället dra lite extra ström, eftersom appen måste kallstartas nästa gång du öppnar den.

Android är byggt för att behålla nyligen använda appar i minnet när det finns plats. Det betyder inte att de aktivt körs. En cachad app kan ligga tyst i bakgrunden så att den öppnas snabbare senare. Tomt RAM är inget mål i sig.

När du sveper bort en app kan Android ta bort det cachade tillståndet. Nästa gång appen öppnas måste telefonen läsa in den från lagringen, bygga upp gränssnittet igen, hämta data på nytt och återansluta till de tjänster som appen använder. En enstaka app förstör inte batteritiden. Att göra detta hela tiden är mest onödigt arbete.

## Det här sköter Android redan

Android har hanterat appars batterianvändning i bakgrunden i många år. Doze och App Standby kom med Android 6.0. Senare versioner har lagt till strängare begränsningar, App Standby Buckets, aviseringskontroller, regler för bakgrundskörning och tillverkarspecifika batteriinställningar.

Doze begränsar nätverksaktivitet och CPU-tungt arbete när telefonen ligger oanvänd, inte laddas och har släckt skärm. App Standby och App Standby Buckets begränsar appar utifrån hur nyligen och hur ofta de används. Android 17 inför dessutom systembaserade minnesgränser som kan stoppa enskilda appar som använder extremt mycket RAM.

Det är själva poängen. Telefonen har redan ett system för strömhantering. Vyn med de senaste apparna är ingen kontrollpanel för batteriet.

## När det är rimligt att tvångsstoppa en app

Ibland är det rätt att stoppa en app.

Gör det om en app har fastnat med GPS, fortsätter spela ljud, synkroniserar utan uppehåll eller gör telefonen varm i fickan. På Pixel hittar du apparnas förbrukning under **Inställningar > Batteri > Batteriförbrukning**. Leta efter något som inte stämmer med hur telefonen faktiskt har använts. En social app som står för 20 % av batteriet efter tio minuters skärmtid är värd att undersöka.

Du kan också begränsa just den appen. På Pixel trycker du på appen i batteriförbrukningen och öppnar **Tillåt bakgrundsanvändning**. På andra Android-telefoner ser vägen och alternativen annorlunda ut, men principen är densamma: begränsa problemappen, inte alla appar.

Det är här många vänder på saken. Att stänga en app som beter sig illa är felsökning. Att stänga allt hela dagen är bara en vana.

## Gör så här i stället

Låt de senaste apparna vara om inget beter sig konstigt.

Använd Smart batteri om telefonen har funktionen. Titta igenom batteriförbrukningen ibland. Minska aviseringarna från appar som synkroniserar för ofta. Avinstallera appar som du inte litar på eller inte använder. Starta om telefonen om den har uppfört sig märkligt i flera dagar.

Kontrollera också signalstyrka och värme. En telefon i ett område med dålig mobiltäckning kan förbruka mycket batteri när den försöker hålla kontakten med nätet. En varm telefon begränsar prestandan, laddas långsammare och tappar batteri snabbare. Att stänga appar löser inget av det.

Batteriprocenten bryr sig inte om hur prydlig appväxlaren ser ut.
