---
title: "Hvorfor din Android-telefon bliver overophedet, og hvordan du kontrollerer temperaturen"
description: "En Android-telefon kan føles varm af helt kedelige grunde, af alvorlige grunde eller uden nogen tydelig grund. Tricket er at vide, hvilket tal du ser på, og om tallet faktisk betyder noget."
listSummary: "En Android-telefon kan føles varm af helt kedelige grunde, af alvorlige grunde eller uden nogen tydelig grund."
hub: "thermal"
sourceNumber: 53
order: 1
tags: ["temperatur","varme","android","fejlfinding","hardware"]
locale: "da"
draft: false
---
## Kontrollér temperaturen først

Begynd med de indbyggede værktøjer. De ser måske mindre imponerende ud end sensorapps, men de er også mindre tilbøjelige til at foregive en præcision, som telefonen ikke reelt stiller til rådighed.

På Google Pixel-telefoner rulles Android 17 nu først ud til understøttede Pixel-enheder, mens andre Android-producenter følger senere efter deres egne tidsplaner. På Pixel 6a og nyere skal du åbne **Indstillinger > Batteri** og derefter vælge **Batteridiagnostik > Telefonen er meget varm**. Pixels værktøj viser ikke altid en konkret batteritemperatur. I stedet giver det modelspecifik vejledning ud fra telefonens aktuelle termiske tilstand.

På nyere Pixel-modeller kan du kontrollere batteritilstanden ved at åbne Batteri og vælge **Batteritilstand**. Googles aktuelle supportside oplyser, at funktionen til visning af batteritilstand og kapacitet er tilgængelig på Pixel 8a og nyere, men ikke på Pixel Tablet. Ældre Pixel-modeller som Pixel 6a, Pixel 7, Pixel 7a, Pixel 8 og Pixel 8 Pro viser ikke denne status for batteritilstanden.

På Samsung Galaxy-telefoner foregår den officielle kontrol af batteriets tilstand i Samsung Members-appen. Åbn Samsung Members, vælg fanen **Support**, tryk på **Kom i gang** under **Telefondiagnosticering**, og vælg derefter **Batteristatus**, når testen er gennemført. Samsung viser resultatet som Normal, Svag eller Dårlig. Nogle Galaxy-modeller viser også nyttige oplysninger om batteri og enhedspleje i Indstillinger, men de præcise menunavne ændrer sig mellem One UI-versioner, regioner og modeller.

Den gamle opkaldskode `*#*#4636#*#*` er stadig værd at prøve, men du bør ikke bygge hele undersøgelsen på den. På nogle Android-telefoner åbner den en testmenu med oplysninger om telefon, Wi-Fi, brug og nogle gange batteriet. På mange aktuelle Samsung-, Xiaomi- og Pixel-versioner mangler batterisiden, eller også sker der ingenting. Det er normalt. Det betyder ikke, at din enhed er defekt.

En diagnoseapp er reserveplanen, når producenten ikke viser nok oplysninger. Gode apps viser batteritemperatur, ladestrøm, Androids termiske status og historik. Vær dog forsigtig med meget præcise påstande om CPU-temperatur. Android giver ikke normale apps adgang til CPU-temperaturen på én enkel og ensartet måde. Nogle apps læser producentens sensorer, når enheden tillader det. Nogle viser kun batteritemperaturen. Andre beregner et skøn.

runcheck er nyttig, når mønstret betyder mere end ét enkelt tal. Appen sammenholder termiske målinger med batteritilstand, netværksstatus, pres på lagerpladsen og historiske tilstandsdata, så du kan se, om varmen begyndte under opladning, ved dårligt signal, på grund af en baggrundsapp eller som del af en længere udvikling.

## Hvad betyder tallet?

Batteritemperatur er ikke det samme som overfladetemperatur. En telefon kan føles varm, fordi rammen leder varme væk fra processoren, mens batteriet stadig befinder sig i et sikkert område. Det modsatte kan også ske, især under opladning.

Brug disse områder som en praktisk vejledning, ikke som en laboratorieregel:

- **20-35 °C:** Normalt ved almindelig brug. Beskeder, browsing og let streaming bør som regel holde sig her, medmindre rummet er varmt.
- **35-40 °C:** Varmt, men almindeligt under navigation, videoopkald, gaming, 5G-downloads eller opladning.
- **40-45 °C:** Værd at holde øje med. Telefonen kan dæmpe skærmen, sænke opladningshastigheden eller reducere ydeevnen.
- **Over 45 °C:** Stop med at tilføre mere varme. Tag opladeren ud, luk krævende apps, fjern coveret, og flyt telefonen væk fra sollys.
- **Omkring 50 °C eller mere:** Betragt det som en overophedning, især hvis telefonen viser en advarsel, lukker ned eller bliver ubehagelig at holde.

Producenter beskriver normalt sikker brug ud fra omgivelsernes temperatur. Samsung angiver 0-35 °C (32-95 °F) som det optimale brugsmiljø for Galaxy-enheder, og Google bruger det samme omgivelsesområde i sikkerhedsvejledningen til Pixel. Batteriets interne temperatur kan kortvarigt blive højere under belastning, men gentagen varme er det, der slider på batteriet.

## Hvor kommer varmen fra?

Det meste varme i en telefon kommer fra fire steder: SoC, batteriet, radioforbindelserne og omgivelserne.

CPU og GPU bliver varme, når de arbejder hårdt. Gaming, optagelse af 4K-video, billedbehandling, videoredigering, navigation og installation af apps presser hardwaren nok til, at telefonen kan føles varm omkring kameraområdet eller den øverste kant. Når varmen ikke kan slippe væk hurtigt nok, reducerer Androids termiske styring ydeevnen. Det kaldes termisk begrænsning.

Batteriet bliver varmt under opladning og kraftig afladning. Hurtigopladning skaber mere varme end en langsom oplader på 5 W eller 10 W, fordi batteriet modtager mere effekt på kortere tid. Brug af telefonen under hurtigopladning er den klassiske dobbeltbelastning: varme fra opladningen plus varme fra processoren.

Radioforbindelserne betyder mere, end mange tror. Et svagt mobilsignal får modemmet til at arbejde hårdere. En telefon med én signalstreg i en kælder kan blive varmere i tomgang end den samme telefon på et bord med stærkt Wi-Fi. Hvis varmen forsvinder i Flytilstand, var jagten på signal sandsynligvis en del af forklaringen.

Omgivelserne fastlægger udgangspunktet. En telefon i direkte sollys, i en varm bil, under en pude eller i et tykt gummicover har mindre mulighed for at komme af med varmen. Telefoner har ikke ventilatorer. De køler gennem rammen, skærmen og bagpanelet.

## Trådløs opladning fortjener sin egen bemærkning

Trådløs opladning er praktisk, men mindre tilgivende end et kabel. Qi- og Qi2-opladere bruger magnetisk induktion, og placeringen betyder noget. Qi2 forbedrer placeringen ved hjælp af magneter, og Qi2 25 W hæver den certificerede trådløse effekt over det tidligere niveau på 15 W, men varmen skal stadig et sted hen.

En korrekt placeret Qi2-oplader eller en oplader i stil med Pixel Stand er normalt uproblematisk. En skævt placeret ladeplade, et tykt cover, et tilbehør med metalring eller et varmt rum kan gøre en almindelig opladning varm. Google anbefaler specifikt Pixel-brugere, der fejlsøger langsom trådløs opladning, at fjerne coveret, holde enheden ude af direkte sol, kontrollere placeringen og sikre, at opladeren ikke blokerer luftstrømmen.

Den praktiske regel er enkel: Hvis trådløs opladning gør telefonen varm hver nat, skal du ændre opsætningen. Brug opladeren uden cover, vælg en certificeret oplader, placer telefonen korrekt, og aktivér en grænse på 80 %, hvis modellen tilbyder det. Lidt varme en gang imellem er ikke en katastrofe. Varme, 100 % og flere timer på ladepladen er en dårligere vane.

## Indbyggede kontroller, før du installerer noget

Åbn **Batteriforbrug**, og se efter apps, der har brugt strøm, selv om du ikke har brugt dem. En navigationsapp efter en køretur giver mening. En shoppingapp, der bruger 18 % i løbet af natten, gør ikke.

Genstart telefonen. Ja, virkelig. En fastlåst tjeneste kan holde CPU'en aktiv i flere timer, og en genstart rydder denne tilstand hurtigere, end du kan lede gennem hver eneste appmenu.

Kontrollér de seneste opdateringer. En stor Android-opdatering, herunder Android 17 på Pixel nu og producenternes versioner senere, kan få en telefon til at køre varmt i en dag, mens apps optimeres, indeks genopbygges, og synkronisering med skyen afsluttes. Hvis varmen forsvinder efter 24-48 timer, var den sandsynligvis en følge af arbejdet efter opdateringen.

Prøv Safe Mode, hvis varmen vender tilbage selv efter en genstart. På Pixel skal du bruge tænd/sluk-knapkombinationen til din model og derefter trykke og holde på **Power off** eller **Restart**, indtil prompten til Safe Mode vises. Safe Mode deaktiverer downloadede apps. Hvis enheden holder sig kølig dér, peger det mod en app fra en tredjepart.

## Avancerede kontroller med ADB

Hvis du er fortrolig med ADB, kan du undersøge de termiske zoner fra en computer:

```bash
adb shell for z in /sys/class/thermal/thermal_zone*; do echo "$z"; cat "$z/type"; cat "$z/temp"; done
```

Mange værdier angives i tusindedele af en grad Celsius, så `38000` betyder 38 °C. Det svære er ikke at læse tallene. Det er at forstå, hvilken sensor der er hvilken. Producenter navngiver termiske zoner forskelligt, og nogle målinger er blokerede eller ubrugelige på telefoner, der sælges til almindelige forbrugere.

Til diagnosticering på appniveau er Androids offentlige termiske API'er som regel enklere. Android 10 introducerede niveauer for termisk status gennem `PowerManager`, og nyere versioner viser også termisk spillerum på understøttede enheder. En headroom-værdi tæt på 1,0 betyder, at enheden er tæt på kraftig termisk begrænsning under den aktuelle belastning.

## Almindelige spørgsmål

### Er det normalt, at en telefon føles varm?

Ja, under opladning, gaming, navigation, videoopkald, brug af hotspot og store downloads. Varme er ikke automatisk et problem. Det er en varm telefon i tomgang, der er værd at undersøge.

### Kan overophedning skade telefonen permanent?

Gentagen varme rammer især batteriet. Lithium-ion-batterier ældes hurtigere, når de holdes varme, særligt ved et højt opladningsniveau. Moderne telefoner beskytter sig ved at sænke hastigheden, sætte opladningen på pause, deaktivere funktioner eller lukke ned, før situationen bliver alvorlig.

### Skal jeg lukke alle apps?

Luk den app, der aktivt skaber varmen, for eksempel et spil, en kameraoptagelse, en videoredigeringsapp eller navigation. Du behøver ikke tvangsmæssigt stryge alle inaktive apps væk. Android er bedre til hukommelsesstyring, end gamle råd om task killers giver systemet æren for.

### Hvorfor bliver telefonen varm under opladning?

Opladning skaber varme inde i batteriet. Hurtigopladning skaber mere. Hvis du bruger telefonen samtidig, kommer der også varme fra processoren og skærmen. Hvis varmen opstår hver gang opladningen begynder, så prøv en langsommere oplader, et andet kabel og ingen cover.

## Konklusion

Brug producentens værktøjer først og derefter en diagnoseapp, hvis du har brug for historik. Betragt opkaldskoder som en bonus, ikke en garanti. Og hvis telefonen tydeligt er varm, skal du ikke presse den videre. Fjern varmekilden, lad den køle af, og se derefter efter mønstret.

*Metabeskrivelse: Se, hvordan du kontrollerer temperaturen på en Android-telefon, hvad sikre batteritemperaturer betyder, og hvordan Android 17, Pixel-diagnostik, Samsung Members, opladning, apps og signalstyrke påvirker overophedning.*
