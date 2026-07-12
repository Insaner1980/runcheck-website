---
title: "Slik sjekker du antall batterisykluser på Android"
description: "Antall sykluser viser hvor mange fulle lade- og utladingssykluser batteriet har gjennomført siden telefonen ble produsert. Én syklus tilsvarer bruk av 100 % av batteriets kapasitet. Det trenger ikke skje i én omgang. Lading fra 20 % til 70 % og senere fra 40 % til 90 % blir til sammen én full syklus."
listSummary: "batteri, helse og diagnostikk"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Health"
tags: ["batteri","helse","diagnostikk","android","guide"]
locale: "nb"
draft: false
---
Tallet er relevant fordi litium-ion-batterier har en begrenset levetid målt i sykluser. De fleste moderne telefonbatterier beholder omtrent 80 % av den opprinnelige kapasiteten etter 800-1 000 sykluser, avhengig av kjemi og produsent. Etter dette blir den daglige batteritiden merkbart kortere.

Android har kunnet rapportere antall sykluser siden Android 14, da `EXTRA_CYCLE_COUNT` ble lagt til i BatteryManager. Om tallet faktisk vises, avhenger helt av produsenten. Noen få nyere telefoner viser det i Innstillinger. De fleste gjør det ikke. Metodene nedenfor er ordnet etter hvor mange enheter de fungerer på, med de bredeste alternativene først, også for eldre modeller.

## Sporingsapper: fungerer på nesten alle Android-telefoner

For de fleste telefoner, særlig modeller fra før 2024, er en sporingsapp det mest praktiske utgangspunktet.

AccuBattery anslår antall sykluser ved å følge hvor mye strøm som lades inn over tid. Installer appen og la den kjøre i minst en uke gjennom flere ladeøkter. Den beregner et omtrentlig tall ved å dele det samlede antallet ladede milliamperetimer på batteriets designkapasitet. Anslaget blir bedre jo lenger appen får samle data. Hvis en nyinstallert AccuBattery allerede viser et syklustall, bygger det på svært begrenset informasjon. Vent minst to uker før du legger særlig vekt på tallet. Appen fungerer på Android 5.0 og nyere, som dekker praktisk talt alle telefoner som fortsatt er i bruk.

aBattery bruker en annen metode. På enheter med Android 14 eller nyere, der produsenten har implementert de nødvendige batteridataene i HAL-laget, leser appen syklustall og batterihelse direkte fra systemet. På eldre enheter eller telefoner med en ufullstendig implementering kan tallene mangle eller være upålitelige. Det er ingen sikker måte å vite ut fra appen alene om verdien kommer fra maskinvaren eller bare er en plassholder.

Begrensningen ved sporingsapper er at de vanligvis anslår ut fra lademønstre i stedet for å lese en faktisk maskinvareteller. Anslagene blir bedre over tid, men er ikke eksakte. To apper på samme telefon kan vise forskjellige syklustall fordi de beregner dem på ulike måter.

## Tastekoder: rask kontroll, men svært varierende støtte

På noen telefoner kan tastekoder vise batteridata som er skjult i Innstillinger. Mange av kodene stammer fra Android 4 eller eldre, men støtten avhenger av produsent og operatør.

`*#*#4636#*#*` fungerer på enkelte telefoner med standardnær Android, blant annet noen modeller fra Pixel, Motorola, Nokia, Sony og andre produsenter. Hvis koden virker, åpnes en testmeny med batterinivå, spenning, temperatur og helsestatus. De fleste enheter viser ikke antall sykluser her, men det er verdt å sjekke fordi noen produsenter legger til ekstra felt. Koden har eksistert i over ti år og virker fortsatt på mange eldre telefoner som mangler nyere batterisider.

`*#*#6485#*#*` kan på Xiaomi-, POCO- og Redmi-telefoner vise batteridata, noen ganger også syklusrelatert informasjon under produsentspesifikke feltnavn som `MB_06`. På enkelte modeller har koden fungert helt tilbake til MIUI 10 og eldre.

`*#0228#` på Samsung Galaxy viser vanligvis spenning, strøm og batteristatus. Den inneholder som regel ikke antall sykluser.

Hvis ingenting skjer når du skriver en kode, støtter ikke telefonen den. Operatører kan deaktivere slike menyer, og produsenter fjerner dem av og til i oppdateringer.

## ADB: den grundigste metoden uten root

Android Debug Bridge gir den mest konsekvente tilgangen til batteridata på tvers av Android-versjoner og fungerer på telefoner helt tilbake til Android 4.1. Du trenger en datamaskin og omtrent fem minutter til oppsett, men ADB kan vise data som verken apper eller Innstillinger gjør tilgjengelige.

Aktiver utvikleralternativene: Åpne **Innstillinger > Om telefonen**, finn **Build number** og trykk på feltet sju ganger. Navnet og plasseringen kan variere mellom produsenter. Slå deretter på **USB debugging** i menyen for utvikleralternativer. Koble telefonen til datamaskinen med USB, og godkjenn tilkoblingen når telefonen spør.

Kjør:

`adb shell dumpsys battery`

Resultatet inneholder blant annet CHARGE_COUNTER, spenning, temperatur, status og helsetilstand. På enheter som rapporterer det, vises et CYCLE_COUNT-felt med det faktiske tallet. Enkelte Samsung-, Pixel- og Xiaomi-enheter rapporterer dette gjennom ADB selv om tallet er skjult i Innstillinger. På eldre telefoner fra før Android 14 er feltet mindre vanlig, men fortsatt verdt å lete etter. Noen produsenter rapporterte syklusdata gjennom egne systemegenskaper lenge før Google standardiserte feltet.

Hvis CYCLE_COUNT ikke vises, har produsenten sannsynligvis ikke gjort verdien tilgjengelig gjennom dette grensesnittet. Ingen programvare kan hente den virkelige telleren fra maskinvare eller fastvare som ikke eksponerer den.

`adb shell dumpsys batteryproperties` kan noen ganger vise flere felt, særlig på Android 14 og nyere, der HAL-spesifikasjonen ble utvidet. På eldre versjoner kan resultatet være tomt.

## Innebygde innstillinger: bare på nyere telefoner

Stadig flere telefoner viser nå antall sykluser direkte i Innstillinger. Hvis din telefon gjør det, er dette den enkleste metoden. Hvis ikke, må du bruke en av metodene ovenfor.

**Google Pixel 8a og nyere** viser syklustallet under **Innstillinger > Om telefonen > Batteriinformasjon**, sammen med produksjonsdato og dato for første bruk. Pixel 6 til og med Pixel 8 Pro har ikke denne siden. Google innførte den med Pixel 8a og fortsatte med Pixel 9- og Pixel 10-seriene. Eldre Pixel-modeller trenger ADB eller en sporingsapp.

**Samsung Galaxy S25-serien og nyere** kan vise batterihelse i prosent og antall sykluser under batteriinformasjon på støttede One UI-versjoner og i støttede markeder. Utrullingen varierer etter modell, fastvare og region, så du kan ikke anta at siden finnes bare fordi telefonen har fått en nyere One UI-versjon. På mange eldre Galaxy-telefoner viser Samsung Members en generell status som Normal, Svakt eller Dårlig, men ikke et nøyaktig syklustall eller en prosentverdi.

**Nyere OnePlus- og Oppo-telefoner** kan vise batterihelse under **Battery health** i batteriinnstillingene, men tilgjengeligheten av antall sykluser varierer etter modell og region. OnePlus 7 og eldre eksponerer ikke denne informasjonen.

Hovedproblemet er fortsatt fragmentering. Apple standardiserte visning av batterihelse på støttede iPhone-modeller fra iOS 11.3, for iPhone 6 og nyere. Android gjorde syklustallet tilgjengelig i rammeverket, men lot produsentene avgjøre om telefonen faktisk skulle rapportere og vise det. Flere modeller får funksjonen hvert år, men flertallet av Android-telefonene som er i bruk i dag, viser den fortsatt ikke.

## Hva syklustallet betyr i praksis

Tallet alene er bare en teller. Det som betyr noe, er batteriets oppgitte levetid i sykluser.

Google oppgir at batterier fra Pixel 3 til og med Pixel 8 Pro skal beholde omtrent 80 % kapasitet etter rundt 800 sykluser. Pixel 8a og nyere er beregnet for 1 000 sykluser, blant annet med nyere batterikjemi og programvarefunksjoner som Hjelp med batteritilstand, som gradvis justerer maksimal ladespenning etter hvert som batteriet eldes.

Smarttelefoner som omfattes av de norske økodesignkravene, skal tåle minst 800 lade- og utladingssykluser og fortsatt ha minst 80 % kapasitet. Reglene trådte i kraft i Norge 1. januar 2026. Enkelte nyere toppmodeller er oppgitt til rundt 1 000 sykluser. Eldre rimelige telefoner og modeller som ikke omfattes av slike markedskrav, kan ha lavere spesifisert levetid.

En telefon med 400 sykluser har brukt omtrent halvparten av den forventede sykluslevetiden hvis batteriet er beregnet for 800. Ved 800 sykluser skal et slikt batteri fortsatt ligge rundt 80 % kapasitet. Et batteri på 5 000 mAh oppfører seg da mer som et batteri på 4 000 mAh. Ved 1 200 sykluser kan den daglige batteritiden være omtrent halvparten av det den var da telefonen var ny.

Tallene forutsetter normal lading ved romtemperatur, egnede ladere og at telefonen ikke blir liggende lenge på 100 % eller 0 %. Hurtiglading i varme omgivelser gjør nedbrytningen raskere, og syklustallet alene fanger ikke opp dette. To telefoner med 500 sykluser kan ha svært ulik batterihelse hvis den ene ble ladet om natten med tilpasset lading, mens den andre stadig ble hurtigladet i en varm bil.

## Når syklustallet ikke er tilgjengelig

Hvis ingen av metodene virker på telefonen din, kan praktiske tegn fortsatt si mye. Se etter kortere skjermtid enn for seks måneder siden, uventede avslåinger ved 15-20 %, batteriprosent som hopper uregelmessig fra for eksempel 30 % til 12 %, eller varme ved lett bruk. Alt dette tyder på at batteriet har passert sin beste tid.

Sammen med et anslag fra AccuBattery etter noen ukers overvåking gir slike symptomer et rimelig bilde, selv uten et nøyaktig syklustall.

## Vanlige spørsmål

**Reduserer en ladegrense på 80 % antall sykluser?**
Nei. Delvise ladinger summeres fortsatt. Lading fra 20 % til 80 % er 0,6 syklus. Fordelen med 80 %-grensen er ikke færre sykluser, men lavere belastning på cellene ved høyt ladenivå. Det bremser den kjemiske nedbrytningen uavhengig av syklustallet.

**Er 500 sykluser mye?**
Det avhenger av telefonen. Med én full syklus per dag tar det omtrent 18 måneder. Ved 0,7 syklus per dag, for eksempel når du lader fra 30 % til 100 %, tar det over to år å nå 500. Om det er «mye», avhenger av den oppgitte levetiden til batteriet i akkurat den modellen.

**Hvorfor viser ikke Samsung-telefonen min syklustall etter One UI 7-oppdateringen?**
Samsung har begrenset funksjonen til enkelte modeller, regioner og fastvareversjoner. Galaxy S25-serien har vist informasjonen mest konsekvent, men selv på støttede enheter avhenger tilgjengeligheten av marked og programvare. Samsung har ikke gitt en generell tidsplan som lover funksjonen på eldre modeller.

**Kan syklustallet nullstilles?**
En ekte maskinvareteller nullstilles ikke ved tilbakestilling til fabrikkinnstillinger, batterikalibrering eller installasjon av en ny ROM. Fysisk batteribytte er den eneste måten å begynne på nytt når telleren er knyttet til batteripakken eller batterimåleren. Hvis en app bare viser et beregnet syklustall, kan avinstallering eller sletting av appdata nullstille anslaget. Det er enda en grunn til ikke å behandle appanslag som maskinvarefasit.
