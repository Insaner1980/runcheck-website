---
title: "Android-diagnosekoder: komplet liste efter producent"
description: "Android-diagnosekoder til opkaldsappen efter producent, herunder Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO og Realme, med aktuelle noter om Android 17."
listSummary: "diagnostik, sensorer og android"
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostik","sensorer","android","hardware","guide"]
locale: "da"
draft: false
---
---

Du indtaster `*#0*#` på én Galaxy-telefon, og en komplet menu til hardwaretest åbner. Du indtaster den samme kode på en anden Galaxy, og der sker ingenting.

Det er helt normalt for Android-diagnosekoder. De kan være nyttige, men på nettet ser de langt mere universelle ud, end de er. En kode kan virke på én telefon, fejle på en anden telefon fra samme mærke og forsvinde efter en opdatering af operatørens firmware. Koderne befinder sig i et rodet krydsfelt mellem Android, opkaldsappen, OEM-servicemenuer og mobiloperatørens begrænsninger.

Google udgav Android 17 den 16. juni 2026 og gjorde det først tilgængeligt for understøttede Pixel-enheder. Partnerenheder fra mærker som OnePlus, OPPO, realme, vivo, Xiaomi, HONOR, Lenovo, Sharp og iQOO håndteres stadig gennem den enkelte producents beta- og udrulningskanaler til Android 17. Det er relevant, fordi Android 17 ikke gør skjulte diagnosekoder ens på tværs af mærker.

Brug telefonens forudinstallerede opkaldsapp, når du prøver koderne. Samsung-koder kræver som regel Samsung Phone. Google-koder kræver som regel Phone by Google. Tredjepartsapps til opkald behandler ofte slet ikke MMI- eller servicekoder.

## Før du prøver en kode

Hold dig til skrivebeskyttede informationskoder og koder til hardwaretest. Indtast ikke koder til nulstilling, klargøring, modemkonfiguration eller serviceprogrammering, medmindre du ved præcist, hvad de gør.

De fleste testkoder kører, så snart du indtaster det sidste tegn. På nogle telefoner skal du trykke på opkaldsknappen. Hvis der ikke sker noget, skal du ikke blive ved med at indtaste koden. Den understøttes sandsynligvis ikke på den pågældende model, i opkaldsappen, i operatørens softwareversion eller i Android-versionen.

## Koder, der virker på mange Android-telefoner

Det er det nærmeste, Android kommer på fælles diagnosekoder, men selv disse virker ikke med garanti overalt.

| Kode | Hvad den gør | Bemærkninger |
|---|---|---|
| `*#06#` | Viser IMEI og nogle gange MEID eller EID | Den mest udbredte telefonkode. Nyttig i forbindelse med garanti, kontrol af blokering og hjælp fra mobiloperatøren. |
| `#07#` | Viser lovpligtige oplysninger og SAR-data | Virker på mange Android-telefoner. Nogle kræver, at du trykker på opkaldsknappen. |
| `*#*#4636#*#*` | Åbner Androids testmenu | Kan vise telefonoplysninger, netværksstatus, signaldata, batteristatistik og Wi-Fi-oplysninger. Tilgængeligheden varierer meget. |
| `*#*#426#*#*` | Åbner diagnostik for Firebase Cloud Messaging | Prøv den helst i Phone by Google. Nyttig, hvis pushnotifikationer ikke kommer frem. |

Menuen `*#*#4636#*#*` er en af de mest omtalte Android-koder, men bliv ikke overrasket, hvis den viser færre felter end gamle skærmbilleder. Nyere Android-versioner og OEM-brugerflader skjuler flere netværks- og batterioplysninger end tidligere.

## Samsung Galaxy

Samsung giver dig to veje til diagnostik: Samsung Members og skjulte koder i opkaldsappen. Begynd med Samsung Members. Den er understøttet, opdateret og lettere at forklare til almindelige brugere.

Åbn Samsung Members, tryk på Diagnostik under fanen Opdag og derefter på Telefondiagnosticering. Samsungs aktuelle testliste omfatter blandt andet Kamera, USB-forbindelse, Kabelopladning, Batteristatus, Touchskærm, Sensorer, Vibration, Mikrofon, Højttaler, Wi-Fi, Bluetooth, SIM-kort, NFC og Fingeraftryksgenkendelse. Den præcise liste afhænger af modellen.

Samsung-koder kan stadig være nyttige, især på telefoner uden operatørlås, men sikkerhedsindstillinger i One UI, Auto Blocker, virksomhedspolitikker og operatørens firmware kan blokere dem.

| Kode | Hvad den gør | Bemærkninger |
|---|---|---|
| `*#0*#` | Åbner Samsungs primære menu til hardwaretest | Testene kan omfatte skærmfarver, touch, ørehøjttaler, højttaler, vibration, kameraer, sensorer, S Pen og andet. |
| `*#0228#` | Skærm med batteristatus | Viser aktuel batterispænding og relateret status på mange modeller. Nogle nyere softwareversioner blokerer den. |
| `*#0011#` | Netværksskærmen ServiceMode | Nyttig til signaldata og oplysninger om den aktive mobilcelle. Skift ikke indstillinger her. |
| `*#0842#` | Vibrationstest | Virker på mange Samsung-modeller, men ikke alle. |
| `*#0673#` eller `*#0289#` | Lydtest | Højttalerens og ørehøjttalerens funktion varierer efter model. |
| `*#2663#` | Oplysninger om touch-firmware | Bruges ofte af serviceteknikere. |
| `*#7353#` | Hurtig testmenu | Mere almindelig på ældre Galaxy-modeller. |
| `*#1234#` | Oplysninger om firmwareversion | Viser buildoplysninger for AP, CP og CSC. |
| `*#7412365#` | Oplysninger om kameraets firmware | Tilgængeligheden varierer. |
| `*#0588#` | Test af nærhedssensor | Nyttig, hvis skærmen ikke slukker under opkald. |
| `*#9900#` | SysDump-tilstand | Primært til logfiler og fejlfinding. Skift ikke tilfældige indstillinger. |
| `*#9090#` | Diagnosekonfiguration | Undgå at ændre noget, medmindre du følger officielle serviceinstruktioner. |

Hvis `*#0*#` ikke virker, skal du ikke straks gå ud fra, at telefonen er falsk. Prøv først Samsung Phone i stedet for Google Phone. Tjek derefter diagnostikken i Samsung Members. Hvis den virker, er der stadig adgang til hardwaretest, selv om den skjulte kode er blokeret.

## Google Pixel

Pixel-telefoner er mere restriktive end Samsung-telefoner. Der findes ikke en Pixel-udgave af Samsungs `*#0*#`-menu.

| Kode | Hvad den gør | Bemærkninger |
|---|---|---|
| `*#*#7287#*#*` | Åbner Pixel-reparationsdiagnostik på understøttede enheder | Google dokumenterer den til selvreparation af Pixel-enheder. Den kræver internetforbindelse og kan variere efter model, område og enhedens softwaretilstand. |
| `*#*#4636#*#*` | Androids testmenu | Bruges ofte til telefon- og netværksoplysninger, men felterne varierer efter Android-version. |
| `*#*#426#*#*` | FCM-diagnostik | Nyttig ved fejlfinding af pushnotifikationer. |
| `#07#` | Lovpligtige oplysninger og SAR-data | Virker på mange Pixel-modeller. |

Pixel 9 og nyere har også området Enhedstilstand og -support i Indstillinger med guidet hjælp på understøttede sprog. Det er ikke det samme som koden til reparationsdiagnostik, men det er ofte et bedre første sted at lede ved spørgsmål om batteri, opladning, ydeevne og support.

Android 17 kan hentes trådløst til understøttede Pixel-enheder fra Pixel 6 til Pixel 10a. Det betyder ikke, at alle Pixel-modeller har identisk diagnostik. Hardware, område og understøttelse af reparationstilstand har stadig betydning.

## Xiaomi, Redmi og POCO

Xiaomis CIT-menu er en af de bedre OEM-testsamlinger, men indholdet varierer mellem MIUI, HyperOS, regionale softwareversioner og modelserier.

| Kode | Hvad den gør | Bemærkninger |
|---|---|---|
| `*#*#6484#*#*` | Åbner CIT-menuen til hardwaretest | Omfatter ofte skærm, touch, vibration, højttalere, mikrofoner, kameraer, sensorer, GPS, Wi-Fi, Bluetooth, SIM, knapper, fingeraftryk, IR-blaster og NFC. |
| `*#*#64663#*#*` | Alternativ CIT-kode | Virker på nogle ældre Xiaomi-modeller. |
| `*#*#4636#*#*` | Androids testmenu | Tilgængeligheden varierer, især i nyere HyperOS-versioner. |

På nogle Xiaomi-telefoner kan diagnostikken også åbnes via Settings > My device > All specs ved at trykke flere gange på kernelversionen. Hvis koden i opkaldsappen ikke virker, kan du prøve denne vej. Menupunkternes navne kan variere mellem MIUI og HyperOS.

## OnePlus

Adgangen til diagnostik på OnePlus har ændret sig gennem årene, efterhånden som OxygenOS er kommet tættere på ColorOS. Bliv derfor ikke overrasket, hvis ældre vejledninger ikke passer til din nuværende telefon.

| Kode | Hvad den gør | Bemærkninger |
|---|---|---|
| `*#808#` | Engineering Mode | Hardwaretest kan omfatte skærm, touch, kameraer, sensorer, lyd, opladning og netværksmoduler. Tilgængeligheden varierer efter OxygenOS-version og område. |
| `*#*#4636#*#*` | Androids testmenu | Virker stadig på mange modeller. |
| `*#888#` | Hardwareversion eller produktionsoplysninger | Findes ikke på alle modeller. |
| `*#1234#` | Firmwareversion | Virker i nogle OnePlus-versioner. |

Vær forsigtig i Engineering Mode. Brug testskærmene. Skift ikke modem-, kalibrerings- eller serviceindstillinger.

## Motorola

Motorola har færre offentlige koder end Samsung eller Xiaomi, men mange modeller indeholder en app til servicetest.

| Kode | Hvad den gør | Bemærkninger |
|---|---|---|
| `*#*#2486#*#*` | Åbner CQATest eller en servicetestmenu | Kan indeholde test af skærm, touch, højttaler, vibration, kamera og sensorer. |
| `*#*#4636#*#*` | Androids testmenu | Virker på mange modeller. |
| `.12345+=` | Åbner engineering mode fra den forudinstallerede Lommeregner-app | Virker kun på nogle Motorola-enheder og kun i den forudinstallerede lommeregner. |

Hvis CQATest dukker op på din appliste efter en test, er der ingen grund til panik. Det er Motorolas komponent til fabrikstest.

## OPPO og Realme

OPPO og Realme deler en stor del af teknologien bag ColorOS, så deres servicekoder overlapper.

| Kode | Hvad den gør | Bemærkninger |
|---|---|---|
| `*#899#` | Manuel test eller engineering-menu | Et almindeligt startpunkt for hardwaretest i mange versioner af ColorOS og Realme UI. |
| `*#800#` | Engineering- eller logværktøj | Bruges ofte til logfiler og netværksdiagnostik. |
| `*#6776#` | Software- og enhedsoplysninger | Viser model- og firmwareoplysninger på mange modeller. |
| `*#*#4636#*#*` | Androids testmenu | Tilgængeligheden varierer. |

Den sikrere vej er som regel den indbyggede Phone Manager-, My OPPO-, My realme- eller Support-app, hvis modellen har en af dem.

## Koder, du bør undgå

Undgå koder til nulstilling til fabriksindstillinger og serviceprogrammering fra tilfældige lister. En farlig kode, som stadig bliver gentaget, er `*2767*3855#`, en Samsung-kode til nulstilling på ældre enheder. Indtast den ikke bare for at se, hvad der sker. Sådan mister folk deres data.

Undgå også alt, der beskrives som NV, RF-kalibrering, modemprogrammering, operatørklargøring eller servicekonfiguration. De menuer er ikke legetøj til diagnostik.

## Når koderne ikke virker

Prøv først den forudinstallerede opkaldsapp. Prøv derefter producentens support- eller diagnoseapp. Samsung Members, Pixel-diagnostik, Xiaomi CIT via Indstillinger, Motorola CQATest og supportværktøjer fra OPPO eller Realme virker ofte, når koderne i opkaldsappen ikke gør.

Operatørlåste telefoner kan blokere koder. Virksomhedsadministrerede telefoner kan blokere dem. Visse sikkerhedsfunktioner kan blokere dem. Android-opdateringer kan fjerne eller skjule dele af en menu. Det er frustrerende, men betyder ikke automatisk, at telefonen har et hardwareproblem.

Diagnosekoder er nyttige til en enkelt kontrol af en komponent. Ved problemer, der udvikler sig langsomt, er de ikke nok. En højttalertest viser ikke, at telefonen bliver overophedet hver eftermiddag, og en batteriskærm viser ikke, at ladestrømmen er faldet gennem en måned. runcheck udfylder det hul ved at følge udviklingen i batteri, temperatur, netværk, lagerplads og opladning over tid.

## FAQ

### Kan diagnosekoder beskadige min telefon?

Informations- og testkoder er som regel sikre. Koder, der nulstiller data eller ændrer serviceindstillinger, er det ikke. Søg efter den præcise kode, før du indtaster den.

### Skal jeg trykke på opkaldsknappen?

Som regel ikke. De fleste koder af typen `*#*#...#*#*` og `*#...#` kører, når det sidste tegn indtastes. På nogle telefoner skal du trykke på opkaldsknappen, især ved kortere koder som `#07#`.

### Hvorfor virker en kode på én telefon, men ikke på en anden?

Fordi koden implementeres af OEM-producenten, opkaldsappen, firmwaren og nogle gange mobiloperatøren. Android garanterer ikke en universel menu til hardwaretest.

### Kan apps erstatte diagnosekoder?

Til dels. Apps som Samsung Members, Phone Doctor Plus, TestM og DevCheck kan teste skærm, højttalere, kameraer, sensorer, batterimålinger og netværksstatus gennem Androids API'er. De kan som regel ikke få adgang til de samme lavniveau-servicemenuer, som OEM-menuerne bruger.
