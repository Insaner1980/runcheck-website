---
title: "Sådan kører du en komplet diagnosticering på en Android-telefon"
description: "Android har ikke én enkelt knap, der kontrollerer hele telefonen på én gang. Værktøjerne findes, men de er spredt ud over menuer i Indstillinger, skjulte opkaldskoder, producentapps og systemkommandoer, som de fleste aldrig ser. Denne vejledning samler dem i én gennemgang, der dækker så mange telefoner som muligt, og gør samtidig opmærksom på forskelle mellem producenter, operatører og Android-versioner."
listSummary: "Android har ikke én enkelt knap, der kontrollerer hele telefonen på én gang."
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","opdateringer","sikkerhed","software","guide"]
locale: "da"
draft: false
---
## Den hurtigste vej: Producentens diagnoseværktøjer

Mange store Android-producenter leverer deres eget diagnoseværktøj. Det kan være installeret på forhånd eller tilgængeligt via en skjult kode. Begynd her, før du installerer noget.

**Samsung Galaxy-telefoner** har nogle af de lettest tilgængelige indbyggede diagnoser. Åbn Telefon-appen, og tast `*#0*#`. Det åbner et testpanel med separate knapper til skærmen (røde, grønne og blå flader til kontrol af døde pixels), touchrespons, front- og bagkamera, højttalere, vibrationsmotor og sensorer som accelerometer og nærhedssensor. Koden virker på mange Galaxy-telefoner, både ældre modeller og nyere topmodeller, men operatørfirmware og regionale softwareversioner kan deaktivere servicemenuer. Samsung har også en diagnosesamling i Samsung Members-appen. Åbn den, tryk på **Support**, og vælg **Telefondiagnosticering**. Her kan du køre automatiske kontroller af batteri, skærm, touch, lyd, Wi-Fi, Bluetooth og flere sensorer med bestået eller ikke bestået som resultat. Samsung Members findes på de fleste nyere Galaxy-telefoner. På understøttede modeller og i visse regioner kan nyere One UI-versioner desuden vise batteritilstand i procent og antal opladningscyklusser på siden med batterioplysninger.

**Google Pixel-telefoner** har to relevante diagnoseveje. På Pixel 6 og nyere viser **Settings > Device health & support** enhedens overordnede status, funktionsstatus, oplysninger om batteri og temperatur samt foreslåede kontroller af eksempelvis opladning eller touch. Googles reparationsdiagnose kan også startes på understøttede Pixel-telefoner ved at åbne Telefon-appen, bevare internetforbindelsen og taste `*#*#7287#*#*`. På Pixel 8a og nyere viser **Indstillinger > Om telefonen > Batterioplysninger** antal opladningscyklusser, produktionsdato og datoen for første brug. På mange andre telefoner med standard-Android eller en Android-version tæt på standarden åbner `*#*#4636#*#*` en skjult testmenu med faner for telefonoplysninger (signalstyrke, netværkstype og foretrukken netværkstilstand), batteridata (spænding, temperatur og status) samt brugsoplysninger. Koden har eksisteret siden de tidlige Android-versioner, men virker ofte bedre på ældre telefoner, fordi nogle nyere enheder og operatører begrænser adgangen.

**Xiaomi-, POCO- og Redmi-telefoner** har en skjult CIT-menu (Component Integrated Testing). Tast `*#*#6484#*#*` eller `*#*#64663#*#*` i Telefon-appen. Menuen indeholder test af touchskærm, skærmfarver, nærhedssensor, accelerometer, gyroskop, kompas, blitz, højttalere, mikrofon, kamera, vibration, Wi-Fi, Bluetooth, GPS og fingeraftrykssensor. Hver test skal bekræftes manuelt. Telefonen viser et mønster eller afspiller en lyd, og du vælger derefter bestået eller ikke bestået.

**OnePlus-telefoner** reagerer på `*#808#` på visse modeller. Hvor menuen findes, kan OnePlus' diagnoseværktøjer kontrollere skærm, lyd, forbindelser og sensorer, men tilgængeligheden varierer mere end hos Samsung og Pixel.

Koderne virker ikke overalt. Operatørlåste telefoner kan have dem deaktiveret, og producenter fjerner nogle gange servicemenuerne i softwareopdateringer. Hvis en kode ikke reagerer, er den enten ikke implementeret eller deaktiveret på den pågældende enhed.

## Indbyggede Android-værktøjer, der virker på næsten alle telefoner

Selv uden producentspecifikke menuer indeholder alle nyere Android-telefoner nyttige diagnoseoplysninger i Indstillinger. Det er ikke en komplet helbredstest, men det fanger almindelige problemer.

**Oplysninger om batteriforbrug** under **Indstillinger > Batteri** viser afladningsmønsteret for de seneste 24 timer, eller flere dage hos nogle producenter. Se efter usædvanligt stejle fald, som kan pege på en app eller baggrundsproces, der opfører sig forkert. På Android 9 og 10 er siden mere enkel. Her ser du primært en liste over apps sorteret efter forbrugsprocent uden den detaljerede graf, men den er stadig nyttig til at finde de største batteriforbrugere. På Android 14 og nyere kan visse enheder stille ekstra BatteryManager HAL-oplysninger til rådighed for tredjepartsapps, så de kan vise anslået kapacitet og antal opladningscyklusser. Om dataene vises, afhænger af producentens HAL-implementering.

**Lagerdiagnostik** under **Indstillinger > Lagerplads** opdeler forbruget i kategorier som apps, billeder, videoer, lyd, dokumenter og systemfiler. Hvis telefonen er langsom, og mere end 85 % af lagerpladsen er optaget, kan det alene forklare problemet. Androids ydeevne falder mærkbart, når den interne NAND-lagerplads nærmer sig fuld kapacitet, fordi controlleren får sværere ved at håndtere slidudjævning og oprydning.

**Netværksdiagnostik** under **Indstillinger > Netværk og internet** viser den aktuelle forbindelsestype, signalstyrke og det tilsluttede Wi-Fi-netværk. På de fleste telefoner kan du finde flere oplysninger under **Indstillinger > Om telefonen > SIM-status**, herunder signalstyrke i dBm. Mellem -50 og -90 dBm er normalt for mobilnet. Svagere end -110 dBm betyder dårlig modtagelse.

**Udviklerindstillinger** indeholder også nogle nyttige diagnoseværktøjer. Aktivér dem under **Indstillinger > Om telefonen** ved at trykke syv gange på **Buildnummer**. Derefter får du blandt andet adgang til **Kørende tjenester** (aktive baggrundsprocesser og hukommelsesforbrug), **USB-fejlretning** (kræves til ADB-diagnostik) og **Tag fejlrapport** (opretter en detaljeret systemlog til fejlfinding).

## Sensor- og hardwarekontroller uden apps

Nærhedssensoren kan testes med `*#*#0588#*#*` på visse enheder. Til andre sensorer virker praktiske kontroller lige så godt. Åbn Google Maps, og se, om den blå retningskegle drejer, når du vender telefonen (kompas og gyroskop). Foretag et opkald, og kontrollér, om skærmen slukker, når telefonen holdes mod øret (nærhedssensor). Slå automatisk lysstyrke til, og dæk telefonens forside til (lyssensor).

GPS kan testes i enhver kortapp, men en særlig GPS-testapp viser antallet af satellitter og signal-støj-forholdet. En velfungerende GPS bør udendørs få forbindelse til 8-12 satellitter inden for 30 sekunder.

## Hvornår tredjepartsapps faktisk giver værdi

De indbyggede værktøjer dækker meget, men de har blinde vinkler. Tredjepartsapps udfylder især tre huller.

Den vigtigste er estimering af batteritilstand. AccuBattery følger opladningsadfærden over tid og anslår den resterende kapacitet i forhold til designkapaciteten. Appen har brug for omkring en uge og flere opladningscyklusser, før tallene bliver nyttige, og estimatet bliver bedre, jo længere den kører. DevCheck viser CPU-urhastigheder, GPU-frekvens, temperaturzoner, batteristrøm, spænding og sensorværdier i realtid. Den er særligt nyttig til at finde termisk begrænsning eller en sensor, der rapporterer forkerte værdier. AIDA64 viser detaljerede hardwarespecifikationer som SoC-model, skærmopløsning og pixeltæthed, RAM-type og -mængde, lagerbenchmarks og installerede codecs. Det er mere identifikation end egentlig diagnosticering, men nyttigt, når du skal vide præcist, hvilken hardware telefonen indeholder.

Ingen af disse apps kan få adgang til data, som producenten har låst. Hvis HAL'en ikke stiller batteritilstand til rådighed, kan ingen app aflæse det reelle antal opladningscyklusser eller den sande kapacitet. De kan kun estimere ud fra opladningsmønstre.

## ADB-diagnosticering til en dybere kontrol

Android Debug Bridge giver den dybeste diagnoseadgang uden root. Slut telefonen til en computer med USB, og aktivér USB-fejlretning. Kør derefter:

`adb shell dumpsys battery` viser batteriniveau, temperatur, spænding, opladningsstatus, batteristatus og på visse enheder antal opladningscyklusser. Resultatet varierer efter producent. Samsung-enheder rapporterer ofte felter, som Pixel-enheder ikke gør, og omvendt.

`adb shell dumpsys batterystats` opretter en meget stor log over batteriforbruget, herunder wake locks, appbrug og netværksaktivitet. Googles Battery Historian vedligeholdes ikke længere aktivt, men kan stadig omdanne loggen til en visuel tidslinje over, hvad der brugte strøm, og hvornår det skete.

`adb shell dumpsys connectivity` viser den aktuelle netværkstilstand, DNS-servere og aktive grænseflader.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` læser temperatursensorer. Ikke alle zoner er tilgængelige. SELinux-politikker i Android 12 og nyere begrænser, hvilke sysfs-stier der kan læses, og begrænsningerne er blevet strammere for hver version. Nogle temperaturzoner svarer med "Permission denied", selv via ADB.

ADB kræver en computer og en vis tryghed ved kommandolinjen. For de fleste er menuerne i Indstillinger, producentens diagnoseapp og én omhyggelig manuel hardwarekontrol tilstrækkeligt.

## Sådan læser du resultaterne

Rå tal kræver sammenhæng. En batteritemperatur på 32 °C under let brug er normal. 42 °C, mens telefonen ligger ubrugt i et køligt rum, er det ikke. 78 % optaget lagerplads er fint. Ved 92 % vil telefonen kæmpe. En signalstyrke på -85 dBm virker indendørs. Ved -115 dBm falder opkald ud.

Formålet med diagnosticering er ikke at finde ét tal, der siger "defekt". Du skal sammenligne det, du ser, med det forventede og opdage mønstre. Det kan være et batteri, der har mistet 15 % kapacitet på seks måneder, en sensor, der konsekvent viser nul, eller næsten fuld lagerplads, der trækker hele telefonen ned.

runcheck samler diagnosticering af batteri, temperatur, netværk og lagerplads i ét kontrolpanel med en fælles tilstandsscore. Det sparer tiden ved at kontrollere hvert system for sig. Appen markerer også målinger, der kan være upålidelige, med en pålidelighedsindikator. Den er værd at lægge mærke til, fordi ikke alle Android-enheder rapporterer alle værdier præcist.

## Ofte stillede spørgsmål

**Kan jeg køre diagnosticering på en telefon, der ikke vil starte?**
Kun delvist. Hvis telefonen kan åbne recovery mode, normalt med tænd/sluk-knappen og Lydstyrke op under opstart, kan du kontrollere, om skærm, touch og knapper virker. Nogle Samsung-telefoner understøtter Download Mode til flashing af firmware. En komplet diagnosticering kræver et kørende operativsystem.

**Kræver diagnoseapps root-adgang?**
Nej. Alt i denne vejledning virker uden root. Root giver adgang til flere data på kernelniveau, men kan påvirke producentgarantien og få SafetyNet/Play Integrity-attestering til at fejle. Det er ikke nødvendigt for en praktisk kontrol af telefonens tilstand.

**Hvor ofte bør jeg køre en komplet diagnosticering?**
Når telefonen opfører sig mærkeligt: langsommere appstart, uventet batteriforbrug, forbindelser der falder ud eller overophedning. Der er ikke brug for en fast tidsplan. Ved køb af en brugt telefon bør du altid gennemføre en fuld kontrol før handlen.

**Virker `*#0*#` på telefoner, der ikke er fra Samsung?**
Nej. Xiaomi bruger `*#*#6484#*#*` på mange modeller, OnePlus kan bruge `*#808#`, Pixel-reparationsdiagnosen bruger `*#*#7287#*#*`, og mange telefoner med standard-Android eller en nært beslægtet version bruger `*#*#4636#*#*`. Tilgængeligheden varierer efter model, region, firmware og operatør.

**Påvirker diagnosticering mine data eller indstillinger?**
Almindelige diagnoser læser kun oplysninger. Undtagelsen er, hvis du ved en fejl vælger en nulstilling til fabriksindstillinger i en servicemenu. Hold dig til afsnit med diagnosticering og test.
