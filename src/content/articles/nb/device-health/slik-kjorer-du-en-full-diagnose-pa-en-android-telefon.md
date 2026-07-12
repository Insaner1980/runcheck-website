---
title: "Slik kjører du en full diagnose på en Android-telefon"
description: "Android har ingen enkelt knapp som sjekker alt på én gang. Verktøyene finnes, men de er spredt mellom Innstillinger, skjulte telefonkoder, produsentapper og systemkommandoer de fleste aldri ser. Denne veiledningen samler dem i én gjennomgang som dekker så mange telefoner som mulig, samtidig som den viser hvor produsent, operatør og Android-versjon fortsatt skaper forskjeller."
listSummary: "Android har ingen enkelt knapp som sjekker alt på én gang."
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","oppdateringer","sikkerhet","programvare","guide"]
locale: "nb"
draft: false
---
## Den raskeste veien: produsentens diagnoseverktøy

Mange store Android-produsenter leverer sitt eget diagnoseverktøy, enten ferdig installert eller tilgjengelig via en skjult kode. Begynn her før du installerer noe.

**Samsung Galaxy-telefoner** har noen av de mest tilgjengelige innebygde testene. Åpne Telefon-appen og tast `*#0*#`. Da åpnes et testpanel med egne kontroller for skjermen, blant annet røde, grønne og blå flater for å finne døde piksler, berøringsrespons, front- og bakkamera, høyttalere, vibrasjonsmotor og sensorer som akselerometer og nærhetssensor. Koden fungerer på mange Galaxy-telefoner, både eldre modeller og nyere toppmodeller, men operatørtilpasset fastvare og enkelte regionvarianter kan deaktivere servicemenyen. Samsung har også en diagnosesamling i Samsung Members. Åpne appen, gå til støttefanen og velg **Telefondiagnostikk**. Der kan du kjøre automatiske kontroller av batteri, skjerm, berøring, lyd, Wi-Fi, Bluetooth og flere sensorer, med bestått eller ikke bestått for hver test. Samsung Members finnes på de fleste moderne Galaxy-telefoner. På modeller og i regioner som støtter det, kan nyere One UI-versjoner også vise batterihelse i prosent og antall ladesykluser i batteriinformasjonen.

**Google Pixel-telefoner** har to relevante diagnoseveier. På Pixel 6 og nyere viser **Innstillinger > Enhetstilstand og brukerstøtte** generell enhetsstatus, funksjonsstatus, batteri- og temperaturinformasjon og foreslåtte kontroller, for eksempel av lading eller berøring. Reparasjonsdiagnostikk kan også startes på Pixel-modeller som støtter det. Åpne Telefon-appen mens telefonen er koblet til internett, og tast `*#*#7287#*#*`. På Pixel 8a og nyere viser **Innstillinger > Om telefonen > Batteriinformasjon** antall ladesykluser, produksjonsdato og datoen telefonen først ble tatt i bruk. På mange andre telefoner med standard Android eller en variant som ligger nær standardutgaven, åpner `*#*#4636#*#*` en skjult testmeny. Den kan inneholde telefoninformasjon som signalstyrke, nettverkstype og foretrukket nettverksmodus, batteridata som spenning, temperatur og helsestatus og statistikk over bruk. Koden har eksistert siden tidlige Android-versjoner, men virker ofte mer stabilt på eldre telefoner fordi enkelte nyere enheter og operatører begrenser tilgangen.

**Xiaomi-, POCO- og Redmi-telefoner** har en skjult CIT-meny, Component Integrated Testing. Tast `*#*#6484#*#*` eller `*#*#64663#*#*` i Telefon-appen. Da åpnes en testsamling for berøringsskjerm, skjermfarger, nærhetssensor, akselerometer, gyroskop, kompass, kamerablits, høyttalere, mikrofon, kamera, vibrasjon, Wi-Fi, Bluetooth, GPS og fingeravtrykksleser. Hver test krever manuell bekreftelse: telefonen viser et mønster eller spiller av en lyd, og du velger bestått eller ikke bestått.

**OnePlus-telefoner** reagerer på `*#808#` på enkelte modeller. Der menyen finnes, kan OnePlus-verktøy teste skjerm, lyd, tilkoblinger og sensorer, men tilgjengeligheten varierer mer enn hos Samsung og Pixel.

Kodene fungerer ikke overalt. Operatørlåste telefoner kan ha dem deaktivert, og produsenter fjerner av og til servicemenyer i programvareoppdateringer. Hvis ingenting skjer når du taster en kode, er den enten ikke implementert eller deaktivert på den aktuelle enheten.

## Innebygde Android-verktøy som virker på nesten alle telefoner

Selv uten produsentspesifikke menyer har alle moderne Android-telefoner nyttig diagnoseinformasjon i Innstillinger. Det er ikke en full helsesjekk, men det avslører mange vanlige problemer.

**Batteribruk** under **Innstillinger > Batteri** viser hvordan strømmen er brukt det siste døgnet, eller over flere dager hos enkelte produsenter. Se etter uvanlig bratte fall som kan skyldes en app eller bakgrunnsprosess som oppfører seg dårlig. På Android 9 og 10 er visningen enklere, vanligvis en liste over apper sortert etter prosentvis forbruk uten den detaljerte grafen, men den er fortsatt nyttig for å finne de største strømslukene. På Android 14 og nyere kan enkelte enheter gi tredjepartsapper tilgang til flere egenskaper fra BatteryManager og batteriets HAL. Det kan gjøre det mulig å vise anslått kapasitet og antall ladesykluser, men bare når produsenten faktisk eksponerer dataene.

**Lagringsdiagnostikk** under **Innstillinger > Lagring** deler bruken inn i kategorier som apper, bilder, videoer, lyd, dokumenter og systemfiler. Hvis telefonen er treg og den interne lagringen er mer enn 85 % full, kan det alene forklare problemet. Ytelsen til NAND-minnet svekkes når lagringen nærmer seg full kapasitet fordi kontrolleren får mindre arbeidsrom til slitasjeutjevning og opprydding.

**Nettverksdiagnostikk** under **Innstillinger > Nettverk og internett** viser gjeldende tilkoblingstype, signal og tilkoblet Wi-Fi-nettverk. På mange telefoner finner du mer detaljert mobilinformasjon under **Innstillinger > Om telefonen > SIM-status**, blant annet signalstyrke i dBm. Omtrent -50 til -90 dBm er normalt for mobildekning. Svakere enn -110 dBm betyr dårlig mottak.

**Utvikleralternativer** inneholder noen nyttige diagnoseverktøy. Aktiver dem under **Innstillinger > Om telefonen** ved å trykke sju ganger på oppføringen for build-nummer. Da får du blant annet tilgang til kjørende tjenester med aktive bakgrunnsprosesser og minnebruk, USB-feilsøking som trengs for ADB, og funksjonen for å lage en feilrapport med en detaljert systemlogg.

## Sensor- og maskinvarekontroller uten apper

Nærhetssensoren kan testes med `*#*#0588#*#*` på enkelte enheter. For andre sensorer fungerer praktiske tester like godt. Åpne Google Maps og se om den blå retningskjeglen roterer når du snur telefonen, noe som tester kompass og gyroskop. Ring noen og kontroller at skjermen slukkes når telefonen holdes mot øret for å teste nærhetssensoren. Slå på automatisk lysstyrke og dekk til fronten for å kontrollere lyssensoren.

GPS kan testes i en vanlig kartapp, men en egen GPS-testapp viser antall satellitter og signal-til-støy-forhold. Under åpen himmel bør en frisk GPS normalt få kontakt med 8-12 satellitter innen 30 sekunder.

## Når tredjepartsapper faktisk tilfører noe

De innebygde verktøyene dekker mye, men har noen klare blindsoner. Tredjepartsapper fyller tre bestemte hull.

Beregning av batterihelse er det største. AccuBattery følger lademønsteret over tid og anslår gjenværende kapasitet sammenlignet med opprinnelig kapasitet. Appen trenger omtrent en uke og flere ladesykluser før tallene blir nyttige, og anslaget blir bedre jo lenger den får samle data. DevCheck viser CPU-klokkehastighet, GPU-frekvens, temperatursoner, batteristrøm, spenning og sensorverdier i sanntid. Den er særlig nyttig når du vil finne termisk struping eller en sensor som rapporterer feil. AIDA64 viser detaljerte maskinvareopplysninger som SoC-modell, skjermoppløsning og pikseltetthet, RAM-type og mengde, lagringsytelse og installerte kodeker. Det er mer identifikasjon enn diagnose, men nyttig når du må vite nøyaktig hvilken maskinvare telefonen har.

Ingen av disse appene kan hente data produsenten har låst bort. Hvis batteriets HAL ikke eksponerer batterihelse, kan ingen app lese det reelle antallet ladesykluser eller den faktiske kapasiteten. Da kan appene bare anslå verdiene ut fra lademønsteret.

## Dypere kontroll med ADB

Android Debug Bridge gir den dypeste diagnosetilgangen du kan få uten root. Koble telefonen til en datamaskin med USB-feilsøking aktivert, og kjør deretter følgende kommandoer:

`adb shell dumpsys battery` viser batterinivå, temperatur, spenning, ladestatus og helsestatus og, på enkelte enheter, antall ladesykluser. Utdataene varierer etter produsent. Samsung-enheter rapporterer ofte felt som Pixel-enheter ikke viser, og omvendt.

`adb shell dumpsys batterystats` lager en svært stor logg over batteribruken, blant annet wake locks, appbruk og nettverksaktivitet. Når loggen behandles med Googles Battery Historian, får du en visuell tidslinje over hva som tappet batteriet og når.

`adb shell dumpsys connectivity` viser gjeldende nettverkstilstand, DNS-servere og aktive grensesnitt.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` forsøker å lese temperatursensorer. Ikke alle soner er tilgjengelige. SELinux-reglene i Android 12 og nyere begrenser hvilke sysfs-stier som kan leses, og begrensningene har blitt strammere i senere versjoner. Enkelte temperatursoner svarer med "Permission denied" selv via ADB.

ADB krever en datamaskin og litt trygghet med kommandolinjen. For de fleste holder det med Innstillinger, produsentens diagnoseapp og en grundig manuell maskinvarekontroll.

## Slik tolker du resultatene

Rå tall trenger sammenheng. En batteritemperatur på 32 °C under lett bruk er normalt. 42 °C når telefonen ligger ubrukt i et kjølig rom, er det ikke. Lagring på 78 % er greit. Ved 92 % vil telefonen ofte slite. Signalstyrke på -85 dBm fungerer vanligvis innendørs. Ved -115 dBm kan samtaler falle ut.

Målet med diagnostikk er ikke å finne ett tall som sier "ødelagt". Du sammenligner det du ser med det som er forventet, og leter etter mønstre: et batteri som har mistet 15 % kapasitet på seks måneder, en sensor som alltid viser null eller lagring som er så full at hele telefonen blir treg.

runcheck samler batteri-, temperatur-, nettverks- og lagringsdiagnostikk i ett dashbord med en felles helsescore. Det sparer tiden det tar å kontrollere hvert system separat. Appen merker også verdier som kan være usikre med en tillitsindikator, noe som er verdt å følge med på fordi ikke alle Android-enheter rapporterer alle målinger like nøyaktig.

## Ofte stilte spørsmål

**Kan jeg kjøre diagnostikk på en telefon som ikke starter?**
Bare delvis. Hvis telefonen kommer inn i gjenopprettingsmodus, vanligvis med av/på-knappen og volum opp under oppstart, kan du bekrefte at skjerm, berøring og knapper virker. Enkelte Samsung-telefoner har også Download Mode for installasjon av fastvare. Full diagnostikk krever et operativsystem som kjører.

**Trenger diagnoseapper root-tilgang?**
Nei. Alt som er beskrevet her, fungerer uten root. Root kan gi tilgang til flere data på kjerne- og systemnivå, men kan også føre til at Play Integrity-kontroller mislykkes og at bank-, betalings- eller jobbapper nekter å kjøre. Root eller opplåst bootloader fjerner ikke automatisk alle garanti- og reklamasjonsrettigheter i Norge, men et krav kan avvises hvis endringen har forårsaket feilen. Root er uansett ikke nødvendig for en praktisk helsesjekk.

**Hvor ofte bør jeg kjøre en full diagnose?**
Når telefonen begynner å oppføre seg annerledes: apper starter tregere, batteriet tømmes uventet, tilkoblinger faller ut eller telefonen blir for varm. Du trenger ingen fast tidsplan. Ved kjøp av brukt telefon bør du alltid kjøre en full kontroll før handelen.

**Virker `*#0*#` på andre telefoner enn Samsung?**
Nei. Xiaomi bruker `*#*#6484#*#*` på mange modeller, OnePlus kan bruke `*#808#`, Pixel-reparasjonsdiagnostikk bruker `*#*#7287#*#*`, og mange telefoner med standard Android eller en nærliggende variant bruker `*#*#4636#*#*`. Tilgjengeligheten varierer etter modell, region, fastvare og operatør.

**Påvirker diagnostikk dataene eller innstillingene mine?**
Vanlige diagnosetester leser bare informasjon. Unntaket er hvis du ved et uhell velger tilbakestilling til fabrikkinnstillinger i en servicemeny. Hold deg til diagnose- og testdelene.
