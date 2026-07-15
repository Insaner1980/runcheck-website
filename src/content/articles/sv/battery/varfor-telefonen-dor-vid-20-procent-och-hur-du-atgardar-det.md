---
title: "Varför telefonen dör vid 20 % och hur du åtgärdar det"
description: "Du har 22 %, öppnar kameran och skärmen blir svart. När du sedan ansluter laddaren visar telefonen plötsligt 18 % eller 24 %. Det känns som om procentsiffran ljuger."
listSummary: "Du har 22 %, öppnar kameran och skärmen blir svart."
hub: "battery"
sourceNumber: 22
order: 12
subgroup: "Drain"
tags: ["batteri","kalibrering","felsökning","android","guide"]
locale: "sv"
draft: false
---
På sätt och vis gör den det. Siffran på skärmen är en uppskattning, och gamla batterier är svårare att bedöma korrekt.

## Det första du bör kontrollera

Kontrollera batterihälsan innan du börjar med kalibreringsknep.

På Pixel 8a och senare går du till Inställningar > Batteri > Batterihälsa. Pixel visar Normal vid 80 % eller högre och Minskad under den gränsen. Antalet laddningscykler finns under Inställningar > Om telefonen > Batteriinformation på Pixel 8a och senare.

På Samsung öppnar du Samsung Members > Support > Telefondiagnostik > Batteristatus. Samsung anger resultatet som Normalt, Svagt eller Dåligt. De exakta menynamnen kan variera, men Samsung Members är den officiella vägen för diagnostik.

På andra Android-telefoner börjar du under Inställningar > Batteri. Om det inte finns någon inbyggd sida för batterihälsa kan du använda en diagnostikapp som AccuBattery och låta den samla in data under flera laddningstillfällen. En enda avläsning efter en laddning räcker inte.

En avläsning under 80 % tillsammans med avstängning vid 20 % pekar direkt mot battericellen.

## Varför siffran ljuger

Android uppskattar batteriprocenten utifrån spänning, ström, temperatur och en modell av hur batteriet ska bete sig. Vissa telefoner följer också hur mycket ström som går in och ut över tid.

Modellen fungerar bäst när cellen är frisk. När batteriet åldras minskar kapaciteten och det interna motståndet ökar. Spänningskurvan förändras. Telefonen kan fortfarande tolka 20 % som en trygg reserv, trots att cellen har mycket mindre användbar energi kvar.

Felen märks först i den nedre delen av laddningsintervallet. I mitten av intervallet är spänningskurvan ganska flack. Nära tomt blir den brant. Ett litet spänningsfall under belastning kan därför plötsligt se ut som om batteriet faller utför ett stup.

Det är därför kameran, GPS, spel, videosamtal och 5G kan utlösa avstängningar. De skapar korta effekttoppar. Ett friskt batteri klarar toppen. Ett slitet batteri sjunker under telefonens lägsta driftspänning, och Android stänger av enheten för att skydda den.

## Varför gamla batterier stängs av för tidigt

Ett försämrat batteri har två problem samtidigt.

För det första lagrar det mindre laddning. Ett batteri på 5 000 mAh med 80 % batterihälsa rymmer ungefär 4 000 mAh. Vid 70 % rymmer det cirka 3 500 mAh. Procentsiffran kan fortfarande se normal ut, men varje procentenhet motsvarar mindre faktisk kapacitet.

För det andra är det interna motståndet högre. Spänningen sjunker då mer när telefonen begär ström. Därför kan en gammal telefon ligga lugnt på 25 % på startskärmen och sedan stängas av i samma ögonblick som kameran öppnas.

Kyla gör allt värre. Litiumjonkemin går långsammare i kyla, vilket gör det svårare för batteriet att leverera ström. En telefon som klarar 20 % inomhus kan stängas av vid samma nivå utomhus.

Värme fungerar annorlunda. Den orsakar vanligtvis inte en omedelbar avstängning vid 20 % på egen hand, men den påskyndar åldrandet som leder till problemet.

## Kalibrering: vad den kan och inte kan lösa

Batterikalibrering missförstås ofta. Den återställer inte batterikapaciteten. Den kan bara hjälpa telefonens programvara att uppskatta den återstående laddningen mer korrekt.

Om batterihälsan ser rimlig ut och avstängningarna började efter en programuppdatering, ett batteribyte eller en längre period med märkligt laddningsbeteende kan en kalibreringscykel vara värd att prova. Det gäller också den pågående utrullningen av Android 17 till Pixel-enheter som stöds. Utgå inte från att batteriet har gått sönder bara för att tidpunkten sammanfaller med en större uppdatering. Använd telefonen tills den stängs av av sig själv. Ladda den sedan utan avbrott till 100 % och låt den sitta kvar i laddaren ytterligare 30-60 minuter. Använd därefter telefonen som vanligt.

Gör inte fullständiga urladdningar till en vana. Att upprepade gånger tömma ett litiumjonbatteri till noll sliter mer än grundare laddningscykler.

Om kalibreringen hjälper bör procentsiffran bete sig mindre dramatiskt under de följande laddningscyklerna. Om telefonen fortsätter att stängas av vid 20 %, eller börjar göra det vid 30 %, är cellen troligen för sliten för att programvaran ska kunna dölja problemet.

## När programvaran är orsaken

Ibland är hårdvaruslitage inte hela förklaringen. En app som beter sig illa kan hålla wake locks, hålla CPU:n aktiv eller utlösa nätverks- och platsaktivitet vid olämpliga tillfällen. Den extra belastningen kan få ett svagt batteri att ge upp.

Kontrollera Inställningar > Batteri > Batteriförbrukning. Om en app visar hög användning i bakgrunden kan du begränsa den eller avinstallera den under en dag och testa igen.

Säkert läge är användbart om telefonen är ganska ny och avläsningen för batterihälsa ser normal ut. I säkert läge inaktiveras tredjepartsappar. Om avstängningarna upphör där pekar det mot en installerad app.

En fabriksåterställning kan rätta till felaktig batteriberäkning eller systemprocesser som har fastnat, men det är den tunga åtgärden. Säkerhetskopiera först. Efter återställningen bör du testa telefonen innan alla appar och inställningar läggs tillbaka från säkerhetskopian. Om allt återställs direkt kan samma problem följa med tillbaka.

## Vanliga frågor

Varför startar telefonen igen med en högre procentsiffra när laddaren ansluts? Under belastning sjunker spänningen kraftigt i ett svagt batteri. När laddaren kopplas in levererar den ström och batterispänningen återhämtar sig. Telefonen fick inte mycket ny laddning på en sekund. Spänningsavläsningen stabiliserades.

Bör telefonen hållas ansluten till laddaren för att undvika att den dör vid 20 %? I en enstaka nödsituation, visst. Som daglig lösning, nej. Om telefonen inte går att lita på under 25 % behöver batteriet ses över.

Kan en batteriapp lösa problemet? Ingen app kan reparera kemiskt slitage. En bra app kan hjälpa till att uppskatta batterihälsan och visa mönster. Den kan inte bygga upp cellen igen.

När en telefon stängs av trots att mycket laddning visas handlar det oftast om en gammal cell, en felvisande laddningsmätare eller båda delarna. Kontrollera hälsan först, kalibrera bara när det är rimligt och byt batteriet när bevisen pekar dit.
