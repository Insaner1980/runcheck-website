---
title: "Android-diagnosekoder: komplet liste efter producent"
description: "Fungerende Android-servicekoder efter mærke med aktuelle noter om Android 17, Pixel-enheder, Samsung, Xiaomi, OnePlus, Motorola, Huawei, Realme og Oppo."
listSummary: "diagnostik, sensorer og android"
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostik","sensorer","android","hardware","guide"]
locale: "da"
draft: false
---
Android-servicekoder er nyttige, men de er rodede. Nogle er en del af Android, andre tilføjes af producenten, og nogle forsvinder uden varsel efter en firmwareopdatering.

Det betyder endnu mere nu, hvor Android 17 bliver rullet ud. Google udgav først Android 17 til de fleste understøttede Pixel-enheder, mens Samsung, Xiaomi, OnePlus, Motorola og andre mærker følger deres egne planer for Android 17. En kode, der virker på en Pixel med Android 17 i dag, siger derfor ikke nødvendigvis noget om en Galaxy- eller Redmi-telefon, som endnu ikke har fået producentens Android 17-software.

To regler, før du begynder. De fleste koder aktiveres, så snart du indtaster det sidste tegn, så du skal som regel ikke trykke på opkaldsknappen. Og hvis en kode åbner en menu, du ikke forstår, må du gerne kigge, men lad være med at ændre noget.

## Universelle koder

Disse koder er det nærmeste, Android kommer på et fælles udgangspunkt. Selv her kan tilpasset firmware blokere dem.

`*#06#` viser IMEI-nummeret for telefonens mobilradio. Telefoner med to SIM-kort viser som regel to IMEI-numre. Det er den sikreste kode på listen og virker på næsten alle telefoner, også iPhones.

`*#*#4636#*#*` åbner Androids testmenu på mange enheder. Den kan vise telefonoplysninger, batteristatistik, signalstyrke og radiodata. Haken er, at mange OEM-brugerflader nu begrænser menuen, især på nyere firmware fra Samsung og Xiaomi.

`*#*#426#*#*` åbner diagnostik for Firebase Cloud Messaging. Den er primært nyttig, når pushnotifikationer er forsinkede eller mangler, fordi den viser, om Google Play-tjenester kan bevare forbindelsen til Googles servere.

`*#07#` viser SAR-oplysninger på mange Android-telefoner. SAR står for Specific Absorption Rate og beskriver, hvor meget radiofrekvensenergi kroppen optager under brug. I USA er FCC-grænsen for telefoner 1,6 W/kg. I Europa er den almindelige grænse for forbrugere ved eksponering af hoved og krop 2,0 W/kg, målt som et gennemsnit over 10 gram væv.

## Samsung Galaxy

Samsung har stadig en af de bedre diagnoseløsninger, blandt andet fordi mærket tilbyder både koder i opkaldsappen og en officielt understøttet app.

`*#0*#` åbner Samsungs skærm til hardwaretest på mange Galaxy-telefoner. Det præcise layout varierer efter model, men du kan som regel teste skærm, touch, kameraer, højttalere, vibration, sensorer og nogle gange fingeraftrykshardware. På visse operatørmodeller eller stærkt begrænset firmware åbner koden slet ikke.

Samsung Members er den sikrere løsning for de fleste. Åbn Samsung Members, gå til Support eller Få hjælp og derefter Diagnostik. Appen fører dig gennem testene og viser tydeligere resultater end servicemenuen.

`*#0228#` viser batterioplysninger som spænding og temperatur i mange Galaxy-softwareversioner. Den giver ikke en enkel procentværdi for batteritilstand.

`*#0011#` åbner ServiceMode på en lang række modeller med aktuelle mobilnetværksdata som frekvensbånd, aktiv celle og signaloplysninger. Nyttigt, men let at fejlfortolke, hvis du ikke arbejder med mobilnetværk.

`*#9900#` åbner SysDump på nogle Galaxy-telefoner. Den eneste indstilling, de fleste bør røre, er oprydning af logfiler, og kun hvis supporten har bedt dig slette ophobede dumpstate- eller logcat-filer.

`*#2663#` viser oplysninger om touchpanelets firmware på nogle modeller. Opdater ikke touch-firmwaren, bare fordi knappen findes. Brug den kun, når du fejlsøger et reelt touchproblem.

## Xiaomi, Redmi og POCO

Xiaomis samling af fabrikstest kaldes CIT. Det er en af de få Android-diagnosemenuer, som stadig er rimeligt godt dækket i producentens egen supportdokumentation.

`*#*#6484#*#*` åbner CIT-hardwaretest på mange telefoner fra Xiaomi, Redmi og POCO. Hvis der ikke sker noget, kan du prøve `*#*#64663#*#*`. Xiaomis supportsider henviser til begge koder afhængigt af model og område.

CIT-menuen kan indeholde test af skærm, touch, højttaler, mikrofon, vibration, kamera, nærhedssensor, lyssensor, accelerometer, gyroskop, kompas, Wi-Fi, Bluetooth, SIM-registrering, fingeraftryk, NFC og opladning. Listen afhænger af telefonens hardware.

Du kan ofte åbne den samme menu uden en kode: Gå til Settings > About phone > Detailed info and specs eller All specs, og tryk derefter flere gange på kernelversionen. Xiaomi ændrer formuleringerne mellem MIUI og HyperOS, men det er stadig værd at prøve kernelversionen, når koden er blokeret.

`*#*#6485#*#*` viser batterioplysninger på mange Xiaomi-telefoner. Betragt værdierne som tekniske målinger, ikke som en enkel erstatning for en side om batteritilstand.

## Google Pixel

Pixel-telefoner understøtter de universelle Android-koder, men den vigtigste aktuelle diagnosekode er specifik for Pixel.

`*#*#7287#*#*` åbner appen Pixel Repair Diagnostics på understøttede Pixel-telefoner. Google dokumenterer den til kontrol af hardware før eller efter en reparation. Den kræver internetforbindelse og fører dig gennem processen på skærmen.

På Pixel 6 og nyere finder du batterispecifikke kontroller under Indstillinger > Batteri > Batteridiagnostik. Det er en almindelig vej i Indstillinger, ikke en skjult kode.

`*#*#4636#*#*` virker stadig på mange Pixel-telefoner og viser radio- og batterioplysninger. Det er ikke et reparationsværktøj, og det kan ikke på magisk vis gennemtvinge Android-opdateringer.

Ældre artikler nævner nogle gange Lommeregner-tricket `.12345+=` til engineering mode på Pixel. Det ville jeg ikke regne med i 2026. Brug i stedet den officielle kode til Pixel-diagnostik.

## OnePlus

Koderne på OnePlus er uensartede, fordi OxygenOS er kommet tættere på ColorOS gennem de seneste år.

`*#808#` åbner Engineer Mode på nogle ældre OnePlus-telefoner, især modeller i serierne OnePlus 7, 8 og 9. På nyere firmware kan den være blokeret.

`*#899#` åbner en diagnose- eller logmenu på nogle enheder fra OnePlus og beslægtede Oppo-modeller. Menuens indhold varierer meget.

`*#*#4636#*#*` er som regel den mest nyttige grundkode til netværks- og batterioplysninger. Til hardwaretest på nyere OnePlus-telefoner er den indbyggede diagnoseapp, supportappen eller en velanset sensorapp ofte mindre frustrerende end at jagte gamle koder.

## Motorola

`*#*#2486#*#*` er bredt omtalt som en kode, der åbner Motorolas engineering- eller hardwaretestmenu på mange Moto-telefoner. Understøttelsen varierer efter model.

Den mere pålidelige vej er appen Device Help. Åbn Device Help, gå til Device diagnosis og derefter Hardware test. Den fremgangsmåde er lettere at forklare til en ikke-teknisk bruger og afhænger ikke af, at en skjult kode fortsat er aktiveret.

`*#*#4636#*#*` virker på mange Motorola-telefoner, fordi Motorolas Android-versioner ligger forholdsvis tæt på standard-Android.

## Huawei og Honor

`*#*#2846579#*#*` åbner ProjectMenu på mange Huawei-telefoner og ældre Honor-telefoner med EMUI eller MagicUI. Menuen indeholder software-, baggrunds-, netværks- og serviceindstillinger. Nogle valgmuligheder er beregnet til teknikere.

`*#*#6130#*#*` viser netværksoplysninger på visse Huawei-modeller.

På nyere HarmonyOS-enheder bør du bruge Support-appen i stedet for at forvente, at alle gamle Android-koder stadig virker. Huawei har flyttet meget af den brugervendte diagnostik over i guidede supportforløb.

## Realme og Oppo

`*#800#` åbner Engineer Mode på nogle telefoner fra Realme og Oppo. Adgangen er langt mere begrænset i nyere ColorOS-versioner end tidligere.

`*#899#` kan åbne en diagnose- eller logmenu på nogle modeller.

Disse mærker ændrer ofte adgangen til diagnostik. Hvis koden ikke virker, skal du ikke fortsætte med tilfældige lister fra gamle forumindlæg. Brug Phone Manager, supportappen eller en kendt app til hardwareoplysninger.

## Hvorfor koder holder op med at virke

Opkaldsappen har betydning. En tredjepartsapp behandler muligvis ikke MMI- og servicekoder på samme måde som den forudinstallerede app. Prøv den medfølgende Telefon-app først.

Operatørens firmware kan fjerne koder. En operatørlåst Galaxy kan opføre sig anderledes end en ulåst Galaxy med den samme hardware.

Store opdateringer kan ændre alt. Android 17 er et godt eksempel: Pixel fik versionen først, men hver OEM udsender sin egen udgave med egne servicemenuer, tilladelser og begrænsninger. Når en kode holder op med at virke efter en systemopdatering, kan den være blevet blokeret, uden at der er noget galt med selve koden.

Og ja, nogle kodelister på nettet er forældede. En kode kopieret fra en forumtråd om Galaxy S8 virker ikke nødvendigvis på en Galaxy S26, selv om artiklen lover, at den gælder for "alle Samsung-telefoner".

## Sikrere alternativer

Til almindelige kontroller er producentens diagnoseapp som regel bedre end en skjult menu. Samsung Members, Xiaomi CIT, Pixel Repair Diagnostics, Motorola Device Help og Huawei Support er lettere at forstå og mindre risikable.

Apps som DevCheck, CPU-Z, AIDA64 og Phone Doctor Plus kan give et skrivebeskyttet overblik over batterimålinger, sensorværdier, CPU-oplysninger, lagerplads og netværk gennem Androids offentlige API'er. De kan ikke åbne alle fabrikstest, men de er tilstrækkelige til det meste fejlfinding.

runcheck samler batteri-, temperatur-, netværks- og lagerdiagnostik i ét dashboard, så du ikke behøver at hoppe mellem servicemenuer for at få et bredere billede af telefonens tilstand.

## Hvad du ikke bør røre

Skift ikke netværksbånd, medmindre du ved præcis hvorfor.

Kør ikke knapper til firmwareopdatering inde i servicemenuer bare for at se, hvad der sker.

Brug ikke nulstillings-, kalibrerings- eller fabriksfunktioner fra en kodeliste, medmindre du har sikkerhedskopieret telefonen og ved, hvad funktionen gør.

Det er sikkert at læse værdier. Det er ændringer i skjulte indstillinger, der skaber problemer.
