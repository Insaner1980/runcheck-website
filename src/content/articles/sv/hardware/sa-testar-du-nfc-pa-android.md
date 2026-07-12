---
title: "Så testar du NFC på Android"
description: "Metabeskrivning: Enkla sätt att kontrollera om NFC fungerar på en Android-telefon med hjälp av Inställningar, kontaktlösa kort, Google Wallet, Samsung-diagnostik, Xiaomi CIT och NFC-testappar."
listSummary: "diagnostik, sensorer och android"
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnostik","sensorer","android","hårdvara","guide"]
locale: "sv"
draft: false
---
Du håller telefonen mot en betalterminal och ingenting händer. Nu har du två problem: betalningen gick inte igenom, och du vet inte om felet ligger i NFC, Google Wallet, kortet, skalet eller terminalen.

Börja i mindre skala. NFC är enkelt att testa om du skiljer avläsning av hårdvara från betalningar.

## Kontrollera om telefonen har NFC

Öppna Inställningar och sök efter NFC. På många Android-telefoner finns funktionen under `Inställningar > Anslutna enheter > Anslutningsinställningar > NFC`. På Samsung finns motsvarande inställningar under Anslutningar, på sidan för NFC och kontaktlösa betalningar. Där kan du också kontrollera vilken betalapp som används.

Om NFC-alternativet saknas har telefonen förmodligen inget NFC-chip. Det är fortfarande vanligt på billigare Android-telefoner, särskilt budgetmodeller som säljs i flera regionala varianter. En version av en telefon kan ha NFC medan en annan med nästan samma namn saknar det.

Aktivera NFC innan du testar. Kontrollera också standardappen för betalningar om du provar Google Wallet, Samsung Pay eller Samsung Wallet, beroende på vad som används i din region och på din telefonmodell.

## Testa med ett kontaktlöst kort

Det här är det enklaste hårdvarutestet. Använd ett kontaktlöst bankkort, resekort, passerkort eller en NFC-tagg. Håll det plant mot telefonens baksida och flytta det långsamt över den övre halvan.

Om NFC fungerar vibrerar telefonen vanligtvis, spelar upp ett ljud, öppnar en Wallet-fråga eller visar ett meddelande om en okänd tagg. Alla sådana reaktioner visar att NFC-läsaren och antennen fungerar.

Händer ingenting? Ta av skalet och försök igen. Metallplattor, magnetiska hållare, ringhållare och tjocka plånboksfodral kan blockera eller försvaga NFC. Läsavståndet är kort, så små lägesförändringar spelar roll.

## Testa med en betalterminal

En lyckad kontaktlös betalning är ett starkt test i verklig användning eftersom den kontrollerar mer än enkel taggavläsning. NFC måste vara aktiverat, en betalapp måste stödjas, kortet måste vara giltigt, skärmlås ska vara inställt och rätt app måste vara vald som standard.

För Google Wallet anger Googles svenska support att NFC ska vara aktiverat under `Anslutna enheter > Anslutningsinställningar > NFC`. Under Kontaktlösa betalningar väljer du Google Wallet som standardbetalningsapp. På Samsung-telefoner finns motsvarande val på NFC-sidan under Anslutningar.

Om taggar kan läsas men betalningar inte fungerar är NFC-chippet förmodligen inte problemet. Kontrollera i stället Wallet-konfigurationen, bankens stöd, skärmlåset, Google Play-tjänster, enhetens integritetskrav och vilken betalapp som är vald som standard.

## Använd en diagnostikmeny eller app

Samsungs officiellt stödda väg är Samsung Members och Telefondiagnostik på fliken Support. Alla modeller visar inte ett separat NFC-test, men appen kan kontrollera många komponenter och vägleda dig till service om ett test misslyckas.

Telefoner från Xiaomi, Redmi och POCO har ofta ett NFC-test i CIT-sviten. Öppna telefonappen och skriv `*#*#6484#*#*`, eller prova `*#*#64663#*#*` om den första koden inte fungerar. Håll ett kort eller en tagg nära telefonen i NFC-testet och invänta resultatet.

Fairphone-modeller har tidigare haft ett manuellt NFC-test i en servicemeny, men koderna varierar mellan generationer. Använd den officiella supportvägen för just din modell när det är möjligt.

För en snabb appkontroll kan NFC Check visa om Android rapporterar NFC-hårdvara och om funktionen är aktiverad. NFC Tools passar bättre om du vill läsa taggar och se tagg-id, tekniktyp och NDEF-poster.

## Hitta antennens placering

NFC-antennen sitter inte på samma ställe i alla telefoner.

På många Samsung Galaxy S-modeller finns den kring den övre mitten av baksidan, nära kameraområdet. På Pixel sitter den vanligtvis högt upp på baksidan. På telefoner från Xiaomi och OnePlus varierar placeringen mer mellan modeller.

Därför fungerar en telefon när du håller kamerautbuktningen mot läsaren, medan en annan bara reagerar när mitten av baksidan ligger mot terminalen. Om telefonens användarhandbok har en bild som visar NFC-antennen ska du lita på den i stället för på allmänna råd.

## Vanliga orsaker till att NFC inte fungerar

Skalet blockerar signalen. Det är tråkigt, men vanligt. Testa med en bar telefon innan du ändrar inställningar.

Du håller fel del av telefonen mot läsaren. Flytta kortet eller telefonen långsamt. Vifta inte runt den som om du skannade en streckkod.

NFC är avstängt eller fel betalapp är vald. Sök efter NFC och Kontaktlösa betalningar i Inställningar.

Telefonen är låst när betalappen kräver upplåsning. Vissa Android-versioner kan läsa taggar när skärmen är på, medan betalningar kräver autentisering. Behandla betalningar och enkel taggavläsning som två separata tester.

En ny uppdatering har ändrat beteendet. Android 17 blev först tillgängligt på Pixel-enheter som stöds, medan andra tillverkare levererar sina Android 17-versioner senare. Om ett NFC-problem börjar direkt efter en Pixel-uppdatering bör du leta efter Pixel-specifika supportmeddelanden i stället för att anta att samma problem finns på Samsung, Xiaomi eller OnePlus.

Telefonen har reparerats. NFC-antennen är ofta en del av bakstycket, spolen för trådlös laddning eller en flexkabelenhet. Om NFC slutade fungera efter ett batteri- eller bakstycksbyte kan antennen ha anslutits fel.

## När hårdvaran troligen är trasig

Om NFC är aktiverat, skalet är borttaget, flera kort och taggar inte ger någon reaktion, felsäkert läge inte ändrar något och en diagnostikapp fortfarande inte registrerar NFC-aktivitet blir ett hårdvarufel sannolikt.

Själva chippet kan gå sönder, men skador på antennen är vanligare. Fall, vätska, reparationer av bakstycket och dåligt anslutna flexkablar är vanliga misstänkta orsaker.

För de flesta handlar beslutet om hur viktig NFC är i vardagen. Om du använder kontaktlösa betalningar varje dag kan en reparation vara rimlig. Om telefonen är äldre och allt annat fungerar kan en kontaktlös smartklocka vara en billigare reservlösning.
