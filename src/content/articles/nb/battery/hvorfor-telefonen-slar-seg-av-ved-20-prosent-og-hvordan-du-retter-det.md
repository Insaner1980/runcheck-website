---
title: "Hvorfor telefonen slår seg av ved 20 %, og hvordan du retter det"
description: "Du har 22 % igjen, åpner kameraet, og skjermen blir svart. Når du kobler til laderen, viser telefonen plutselig 18 % eller 24 %. Det føles som om prosenttallet lyver."
listSummary: "Du har 22 % igjen, åpner kameraet, og skjermen blir svart."
hub: "battery"
sourceNumber: 22
order: 12
subgroup: "Drain"
tags: ["batteri","kalibrering","feilsøking","android","guide"]
locale: "nb"
draft: false
---
På en måte gjør det det. Tallet på skjermen er et anslag, og gamle batterier er vanskeligere å beregne riktig.

## Det første du bør kontrollere

Sjekk batterihelsen før du begynner med kalibreringstriks.

På Pixel 8a og nyere går du til Innstillinger > Batteri > Batteritilstand. Pixel viser Normal ved 80 % eller høyere og Redusert under denne grensen. Antall ladesykluser finner du under Innstillinger > Om telefonen > Batteriinformasjon på Pixel 8a og nyere.

På Samsung åpner du Samsung Members > Brukerstøtte > Telefondiagnostikk > Batteristatus. Samsung viser resultatet som Normal, Svakt eller Dårlig. De nøyaktige menynavnene kan variere, men Samsung Members er den offisielle diagnoseveien.

På andre Android-telefoner bør du først se under Innstillinger > Batteri. Hvis telefonen ikke har en innebygd side for batterihelse, kan du bruke en diagnoseapp som AccuBattery og la den samle data gjennom flere ladeøkter. Én måling etter én lading er ikke nok.

En måling under 80 % kombinert med at telefonen slår seg av ved 20 %, peker rett mot battericellen.

## Hvorfor prosenttallet lyver

Android beregner batteriprosenten ut fra spenning, strøm, temperatur og en modell for hvordan batteriet skal oppføre seg. Noen telefoner registrerer også strømmen som går inn og ut over tid.

Denne modellen virker best når battericellen er frisk. Etter hvert som batteriet eldes, faller kapasiteten og den interne motstanden øker. Spenningskurven endrer seg. Telefonen kan fortsatt tro at 20 % er en trygg reserve, selv om batteriet har langt mindre brukbar energi igjen.

Det er i den nederste delen av ladenivået at feilene først blir synlige. Midt i ladeområdet er spenningskurven forholdsvis flat. Nær tomt batteri blir den bratt. Et lite spenningsfall under belastning kan plutselig se ut som om batteriet faller utfor et stup.

Derfor kan kamera, GPS, spill, videosamtaler og 5G utløse en avslåing. De skaper korte effekttopper. Et friskt batteri håndterer toppen. Et slitt batteri får et spenningsfall under telefonens minste driftsspenning, og Android slår av enheten for å beskytte den.

## Hvorfor gamle batterier slår seg av for tidlig

Et slitt batteri har to problemer samtidig.

For det første lagrer det mindre energi. Et batteri på 5 000 mAh med 80 % batterihelse holder omtrent 4 000 mAh. Ved 70 % holder det omtrent 3 500 mAh. Prosentvisningen kan fortsatt se normal ut, men hvert prosentpoeng bygger på mindre faktisk kapasitet.

For det andre er den interne motstanden høyere. Da faller spenningen mer når telefonen krever strøm. Derfor kan en gammel telefon ligge rolig på 25 % på startskjermen og slå seg av i det øyeblikket du åpner kameraet.

Kulde gjør alt verre. Litiumionkjemien går saktere i kulde, så batteriet klarer ikke å levere strøm like lett. En telefon som fungerer ved 20 % innendørs, kan slå seg av ved samme prosent utendørs.

Varme virker annerledes. Den fører vanligvis ikke alene til en umiddelbar avslåing ved 20 %, men den fremskynder aldringen som skaper problemet.

## Kalibrering: hva det kan og ikke kan rette

Batterikalibrering blir ofte misforstått. Den gjenoppretter ikke batterikapasitet. Den kan bare hjelpe programvaren med å anslå gjenværende lading mer nøyaktig.

Google sier uttrykkelig at du ikke trenger å «lære» telefonen kapasiteten ved å tømme batteriet helt og lade det fra null til fullt. Hvis batterihelsen ser grei ut og avslåingene begynte etter en programvareoppdatering, et batteribytte eller en lengre periode med uvanlig lading, kan én uavbrutt fullading likevel være en rimelig test. Bruk telefonen normalt til ladenivået er lavt, lad den uavbrutt til 100 %, og la den stå tilkoblet i ytterligere 30-60 minutter. Ikke tøm den til null med vilje.

Dette gjelder også når problemet oppstår samtidig med en stor oppdatering, som Android 17 på støttede Pixel-telefoner. Tidspunktet alene betyr ikke at batteriet har sviktet.

Gjør ikke full utlading til en vane. Gjentatt tømming til null belaster litiumionbatterier mer enn grunnere lading.

Hvis et feilaktig anslag var problemet, bør prosentvisningen oppføre seg mindre dramatisk gjennom de neste ladesyklusene. Hvis telefonen fortsatt slår seg av ved 20 %, eller grensen flytter seg opp til 30 %, er battericellen sannsynligvis for slitt til at programvaren kan skjule det.

## Når programvaren er årsaken

Noen ganger er maskinvareslitasje ikke hele forklaringen. En app som oppfører seg dårlig, kan holde wake locks, holde CPU-en aktiv eller utløse nettverks- og posisjonsaktivitet på uheldige tidspunkter. Den ekstra belastningen kan vippe et svakt batteri over kanten.

Sjekk Innstillinger > Batteri > Batteribruk. Hvis én app viser høy bruk i bakgrunnen, kan du begrense den eller avinstallere den i én dag og teste på nytt.

Sikkermodus er nyttig hvis telefonen er forholdsvis ny og målingen av batterihelse ser normal ut. Sikkermodus deaktiverer tredjepartsapper. Hvis avslåingene stopper der, peker det mot en installert app.

En tilbakestilling til fabrikkinnstillinger kan rette en ødelagt batteriberegning eller programvareprosesser som har låst seg, men det er det tunge alternativet. Ta sikkerhetskopi først. Etter tilbakestillingen bør du teste telefonen før du gjenoppretter alle apper og innstillinger fra sikkerhetskopien. Gjenoppretter du alt med én gang, kan det samme problemet komme tilbake.

## Vanlige spørsmål

Hvorfor slår telefonen seg på igjen med en høyere prosent etter at laderen kobles til? Under belastning faller spenningen i et svakt batteri kraftig. Når laderen kobles til, leverer den strøm, og batterispenningen henter seg inn igjen. Telefonen fikk ikke mye lading på ett sekund. Spenningsmålingen stabiliserte seg.

Bør du holde telefonen tilkoblet for å unngå at den dør ved 20 %? I en nødsituasjon én gang, ja. Som daglig løsning, nei. Hvis telefonen ikke er til å stole på under 25 %, trenger batteriet oppmerksomhet.

Kan en batteriapp rette problemet? Ingen app kan reparere kjemisk slitasje. En god app kan hjelpe med å anslå batterihelsen og vise mønstre. Den kan ikke bygge opp battericellen på nytt.

Når en telefon slår seg av selv om skjermen viser mye strøm igjen, skyldes det vanligvis en gammel battericelle, en feilaktig batterimåling eller begge deler. Sjekk batterihelsen først, prøv bare en full lading når det gir mening, og bytt batteriet når bevisene peker dit.
