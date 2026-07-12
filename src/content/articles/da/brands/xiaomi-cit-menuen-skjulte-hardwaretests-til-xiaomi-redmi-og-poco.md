---
title: "Xiaomi CIT-menuen: skjulte hardwaretests til Xiaomi, Redmi og POCO"
description: "CIT er den hurtigste indbyggede hardwarekontrol på de fleste Xiaomi-telefoner, herunder Redmi- og POCO-modeller med officiel MIUI eller HyperOS. Den er ikke køn. Den forklarer ikke ret meget. Men når du skal finde ud af, om touchskærmen, højttaleren, mikrofonen, en sensor eller et kamera faktisk reagerer, kommer du hurtigere frem end med de fleste diagnoseapps fra Play Butik."
listSummary: "hardware, test og diagnostik"
hub: "brands"
sourceNumber: 159
order: 7
tags: ["hardware","test","diagnostik","android","guide"]
locale: "da"
draft: false
---
Xiaomi kalder den som regel hardware detection eller CIT mode på sine supportsider. Du møder den oftest under fejlfinding af et bestemt problem, for eksempel en touchskærm, der registrerer berøringer forkert, eller en telefon, der bliver ved med at genstarte. Menuen er lavet til en kontrol her og nu, ikke til at følge enhedens tilstand over tid.

Det er hele pointen.

## Åbn CIT først

Den hurtigste vej er opkaldskoden. Åbn Telefon-appen, og indtast `*#*#6484#*#*`. På nogle Xiaomi-versioner åbner `*#*#64663#*#*` den samme menu til hardware detection. Du skal ikke trykke på opkaldsknappen.

Hvis opkaldskoden ikke reagerer, kan du prøve via Indstillinger. Gå til **Indstillinger > Om telefonen > Detailed info and specs** eller **Indstillinger > Om telefonen > All specs**, og tryk derefter flere gange på **Kernel version**. På mange MIUI- og HyperOS-versioner tæller telefonen ned og åbner CIT.

Den præcise sti varierer, fordi Xiaomi har ændret opbygningen af Indstillinger på tværs af MIUI, HyperOS, regionale softwareversioner og tablets. Ældre MIUI-versioner kan vise **Kernel version** direkte under Om telefonen. Nyere HyperOS-versioner gemmer den som regel på siden med detaljerede specifikationer.

Hvis ingen af vejene åbner CIT, skal du kontrollere tre ting, før du antager, at telefonen ikke har funktionen: Du bruger officiel Xiaomi-firmware, du bruger den oprindelige Telefon-app, og enheden kører ikke en brugerdefineret ROM som LineageOS. Brugerdefinerede ROM'er fjerner ofte Xiaomis private diagnosekomponenter.

## Hvad CIT faktisk kan teste

CIT tester hardwaren direkte nok til at være nyttig, men resultaterne er stadig enkle bestået eller ikke bestået. Menuen kan fortælle dig, at en mikrofon ikke optog, eller at et område på touchskærmen ikke reagerede. Den fortæller ikke, om årsagen er vandskade, et løst flexkabel, en dårlig udskiftningsskærm eller en firmwarefejl.

Menuen varierer efter model. En Redmi Note uden NFC viser ikke den samme liste som en Xiaomi-topmodel med IR-sender, fingeraftrykslæser i skærmen, barometer og flere kameramoduler. Det er normalt.

Almindelige CIT-kontroller omfatter skærm, touchpanel, ørehøjttaler, hovedhøjttaler, mikrofoner, vibrationsmotor, kameraer, fingeraftrykssensor, nærhedssensor, lyssensor, accelerometer, gyroskop, kompas, SIM-kortlæser, Wi-Fi, Bluetooth, NFC, IR-sender og opladningsstatus.

## Touchtesten er den første, du bør køre

Hvis du køber en brugt Xiaomi-telefon, bør du begynde med touchtesten. Den opdager problemer, som et par hurtige strøg på startskærmen let overser.

Testen viser som regel et gitter eller et tegneområde. Træk fingeren hen over de krævede felter, og hold øje med huller, brudte linjer eller områder, der ikke bliver grønne. En brugt telefon kan se fejlfri ud og stadig have en død stribe tæt på kanten af digitizeren. Det vil jeg hellere opdage før betaling end bagefter.

Xiaomis egne supportsider anbefaler CIT mode, når panelet registrerer berøringer forkert, reagerer langsomt eller slet ikke fungerer. De nævner også de kedelige årsager, som mange springer over: revnet glas, vandskade, skærmbeskyttere fra tredjeparter, svedige fingre, ustabile opladere eller én enkelt dårlig app. Testen er nyttig, men den er ikke magisk.

## Sensorer, lyd, kameraer og forbindelser

Lydtestene er enkle. Højttalertesten afspiller lyd gennem hovedhøjttaleren, receivertesten bruger ørehøjttaleren, og mikrofontesten optager og afspiller et kort klip. Lyt efter knitren, lav lydstyrke, støj eller stilhed. En mikrofon i bunden kan være defekt, selv om samtaler stadig lyder normale, fordi telefonen kan skifte mikrofon afhængigt af appen.

Sensortest viser som regel liveværdier eller beder dig udføre en lille handling. Dæk nærhedssensoren ved ørehøjttaleren. Drej telefonen for at teste gyroskopet. Bevæg den rundt for at kontrollere accelerometer og kompas. Ret lyssensoren mod en lampe og derefter væk igen. Hvis værdierne aldrig ændrer sig, er der noget galt.

Kameratestene åbner front- og bagkameraerne. De bekræfter, at kameraet starter, fokuserer og tager et billede. De beviser ikke, at billedkvaliteten er god. En ridset linse, dårlig stabilisering, støv under glasset eller en dårlig kameraapp fra en tredjepart kan stadig give problemer uden for testen.

Forbindelsestest søger efter Wi-Fi-netværk eller Bluetooth-enheder. Det er nok til at bekræfte, at radioen kan registrere omgivelserne. Testen diagnosticerer ikke din router, operatør, VPN eller en lejlighed fyldt med forstyrrende 2,4 GHz-netværk.

## Batteri, opladning og versionsoplysninger

CIT kan vise grundlæggende oplysninger om batteri og opladning, for eksempel opladningsniveau, spænding, temperatur og om telefonen registrerer en oplader. Det er nyttigt, hvis en telefon nægter at oplade eller kun oplader med ét bestemt kabel.

Forveksl det ikke med en egentlig historik over batteritilstanden. CIT giver dig ikke en langsigtet graf over slitage, en tidslinje over opladningscyklusser eller en sammenligning af opladere. Det er et øjebliksbillede.

På mange Xiaomi-versioner findes der også et område med hardwareoplysninger. Xiaomis supportsider henviser til `*#*#6484#*#*` for at åbne hardware detection og kontrollere oplysninger som IMEI, buildnummer, basebandversion, kernelversion, CPU ID og hardwareversion. Det er praktisk, når du vil sammenligne softwareversionen i Indstillinger med enhedens mere grundlæggende oplysninger.

## Android 17, HyperOS og kompatibilitet

Android 17 begyndte med understøttede Pixel-enheder. Xiaomi står på Googles liste over partnere til Android 17 Beta, men det betyder ikke, at alle Xiaomi-, Redmi- eller POCO-telefoner allerede kører en stabil Android 17-version.

På Xiaomi-telefoner er firmwarelaget det vigtige her: MIUI eller HyperOS. CIT er Xiaomis funktion til hardware detection, ikke en generel Android 17-funktion. En HyperOS-opdatering kan ændre stien, skjule en kode, omdøbe en test eller rette en diagnosefejl, uden at Android i sig selv er hovedårsagen.

Kort sagt skal du ikke gå i panik, hvis en vejledning til MIUI 14 ikke passer præcist til din HyperOS-telefon. Prøv begge adgangsmetoder.

## Hvornår CIT er nyttig

CIT er bedst til hurtige kontroller, før du køber en brugt telefon, efter et fald, efter kontakt med vand eller efter en udskiftning af skærm eller batteri. Kør hele den automatiske test, hvis du har tid. Kør enkelte tests, hvis du allerede kender problemområdet.

Tag et skærmbillede af resultatsiden, hvis du har brug for dokumentation. Regn ikke med, at CIT gemmer en permanent rapport, som du senere kan eksportere.

Menuen er mindre nyttig til langsomme telefoner, tilfældige appnedbrud, pres på lagerpladsen, batteriforbrug over flere dage eller termisk begrænsning under spil. De problemer kræver historik, ikke en hardwaretest på ét minut.

## Almindelige spørgsmål

### Kan CIT beskadige telefonen?

Nej. De normale tests aflæser sensorer, afspiller lyd, aktiverer vibrationsmotoren, åbner kameraer og kontrollerer, om komponenterne reagerer. De sletter ikke data og flasher ikke firmware. Afslut med Tilbage, eller genstart telefonen, hvis menuen hænger fast.

### Hvorfor står nogle betegnelser på kinesisk?

Nogle Xiaomi- og Redmi-modeller viser stadig uoversatte CIT-betegnelser, især på firmware til det kinesiske marked eller på ældre MIUI-versioner. Testene fungerer som regel på samme måde. Sproget er irriterende, ikke farligt.

### Virker CIT på POCO-telefoner og Xiaomi-tablets?

Som regel ja, når enheden kører officiel Xiaomi-firmware. De tilgængelige tests afhænger af hardwaren. En tablet med kun Wi-Fi viser ikke de samme mobilnetværkstest som en Redmi-telefon, og en POCO uden IR-sender viser ikke en IR-test.

---

*Metabeskrivelse: Xiaomis CIT-menu giver dig adgang til indbyggede hardwaretests på Xiaomi-telefoner. Se opkaldskoderne, stien via Indstillinger, de nyttigste tests og det, CIT ikke kan diagnosticere.*
