---
title: "Tømmer 5G batteriet raskere enn 4G?"
description: "5G kan bruke mer batteri enn 4G LTE, men forskjellen avhenger av signalstyrke, nettverkstype og modemet i telefonen. Her ser du når 5G har betydning, og når LTE er det bedre valget for batteriet."
listSummary: "batteri, strømforbruk og feilsøking"
hub: "battery"
sourceNumber: 28
order: 18
subgroup: "Drain"
tags: ["batteri","strømforbruk","feilsøking","android","ytelse"]
locale: "nb"
draft: false
---
Ja, 5G kan tappe batteriet raskere enn 4G LTE. Det er bare ikke den katastrofen det var på den første bølgen av 5G-telefoner.

En analyse fra Ookla Speedtest Intelligence viste at 5G brukte omtrent 6-11 % mer batteri enn LTE, avhengig av telefonens SoC. Forskjellen er reell. På en nyere telefon med greit signal betyr den likevel vanligvis ikke forskjellen mellom å komme gjennom dagen og å stå med en tom telefon. På en eldre 5G-telefon, eller et sted der telefonen stadig hopper mellom LTE og 5G, kan utslaget fortsatt være tydelig.

Android 17 er nå offisielt tilgjengelig på de fleste støttede Pixel-enheter, mens andre Android-telefoner følger senere gjennom produsentene og mobiloperatørene. Det endrer ikke det grunnleggende forholdet mellom 5G og batteribruk. Innstillingene kan likevel se litt forskjellige ut avhengig av om telefonen fortsatt bruker Android 16, allerede har Android 17 eller venter på en oppdatering fra Samsung, OnePlus, Xiaomi, Motorola eller en annen OEM.

## Signalstyrken betyr mer enn logoen

Batteriproblemet er vanligvis ikke det lille 5G-ikonet. Det er modemet som arbeider for hardt.

En telefon med sterkt 5G-signal kan bruke mindre strøm enn en telefon som klamrer seg til et svakt LTE-signal. Modemet må øke sendeeffekten når signalstyrken er dårlig, og det ekstra arbeidet viser seg som varme og batteriforbruk. Hvis telefonen befinner seg i utkanten av dekningsområdet, betyr nettverksgenerasjonen mindre enn at forbindelsen er ustabil.

Derfor kan to personer få helt forskjellige erfaringer med samme telefon. En som bor nær sterk 5G-dekning i mellombåndet, merker kanskje knapt noen forskjell. En som pendler gjennom områder med ujevn dekning, kan se telefonen hoppe fra 5G til LTE, tilbake til 5G og så ned igjen. Denne letingen bruker strøm fordi modemet stadig forhandler forbindelsen på nytt i stedet for å slå seg til ro med én stabil tilkobling.

Ingen magi her. Stabilt er bedre enn raskt.

## Hvorfor enkelte 5G-nettverk bruker mer strøm

De første 5G-utbyggingene brukte ofte Non-Standalone 5G, vanligvis forkortet NSA. I denne løsningen bruker telefonen LTE som ankerforbindelse, mens 5G håndterer ekstra datakapasitet. Enkelt sagt kan telefonen arbeide med både 4G og 5G samtidig.

Denne doble tilkoblingen gjorde det mulig for operatørene å lansere 5G raskere, men den var ikke ideell for batteritiden. Ekstra radioarbeid krever strøm, særlig når 5G-laget er svakt eller bare tilgjengelig i korte perioder.

Standalone 5G, eller SA, fjerner LTE-ankeret og lar telefonen koble seg til gjennom et 5G-kjernenett. SA kan være mer effektivt for batteriet, men dekningen er fortsatt ujevn. Noen operatører har bygget det ut bredt. Andre ruller det fortsatt ut by for by, frekvensbånd for frekvensbånd og enhet for enhet. Telefonen viser vanligvis ikke en enkel NSA- eller SA-merking i de vanlige innstillingene, så den praktiske testen er fortsatt den samme: Er 5G-forbindelsen sterk og stabil der du faktisk bruker telefonen?

## Lavbånd, mellombånd og mmWave oppfører seg forskjellig

5G er ikke én ting. Frekvensbåndet har betydning.

5G i lavbånd når langt og fungerer bedre innendørs, men hastigheten ligger ofte nær LTE. Batteripåvirkningen er vanligvis moderat fordi signalet oppfører seg mer som eldre mobilbånd.

5G i mellombånd er det nyttige kompromisset for mange. Det er vanlig i byer og forsteder og kan være langt raskere enn LTE uten å være like sårbart som mmWave. Mange sammenligninger av 5G-forbruk i vanlig bruk havner også her, så det ekstra batteriforbruket er merkbart, men som regel håndterbart.

mmWave er ytterpunktet. Det kan være svært raskt, men rekkevidden er kort og vegger skaper problemer. Telefonen kan måtte arbeide hardere med radioen for å holde forbindelsen, og kan falle tilbake til et annet bånd så snart du beveger deg. De fleste møter bare mmWave på bestemte steder, som stadioner, flyplasser og tettbygde sentrumsområder. Det er ikke den vanlige 5G-opplevelsen i hverdagen.

## Nyere modemer har redusert mye av forskjellen

Telefonens alder betyr mye. Den første generasjonen 5G-telefoner brukte ofte separat modemmaskinvare, noe som økte strømforbruk og varme. Nyere Android-flaggskip og mange telefoner i mellomklassen bruker mer integrerte modemløsninger og smartere nettverksbytte.

Derfor kan gamle råd om 5G være misvisende. En telefon fra Galaxy S20-perioden og et flaggskip fra 2025 eller 2026 gjør ikke den samme jobben med den samme maskinvaren. Bruker du en 5G-telefon fra første eller andre generasjon, kan det fortsatt gi en nyttig batterigevinst å tvinge den over på LTE. Bruker du en nyere Pixel, Galaxy, OnePlus, Xiaomi eller Motorola i et område med sterk dekning, er automatisk modus vanligvis det bedre standardvalget.

Eldre telefoner har et annet problem også: mindre margin i batteritilstanden. En telefon som allerede har mistet kapasitet etter flere år med lading, gjør enhver ineffektiv nettverksforbindelse mer merkbar.

## Dette kan du endre i Android

Begynn med en enkel regel: La 5G stå på automatisk med mindre du har en grunn til å endre det.

På Pixel og mange telefoner med et standardlignende Android-grensesnitt ser du under **Settings > Network & internet > SIMs > your SIM > Preferred network type**. Avhengig av operatøren kan du få valg som 5G, LTE eller automatiske moduser. Noen operatører skjuler eller begrenser denne menyen. Det er irriterende, men normalt.

På Samsung Galaxy er den vanlige banen **Settings > Connections > Mobile networks > Network mode**. De nøyaktige alternativene avhenger av region, operatørfastvare og One UI-versjon.

Bruk bare LTE når telefonen stadig bytter nettverk, når 5G er langsommere enn LTE der du er, eller når du trenger all batteritiden du kan få på reise. Slå 5G på igjen når du er tilbake i et område med sterk dekning.

Pixel-telefoner har også Adaptive Connectivity under **Innstillinger > Nettverk og internett > Adaptive Connectivity**. La funksjonen være på med mindre du feilsøker. Den lar telefonen ta batteribevisste nettverksvalg i stedet for at du må passe på radioen manuelt.

Etter en stor Android-oppdatering, inkludert Android 17 på støttede Pixel-enheter, bør du ikke vurdere batteritiden ut fra de første timene. Telefonen kan fortsatt fullføre appoptimalisering, synkronisering og operatørkonfigurasjon. Hvis 5G plutselig oppfører seg dårlig etter en oppdatering, sjekker du operatøroppdateringer, starter telefonen på nytt og vurderer å tilbakestille mobilnettverksinnstillingene før du gir 5G skylden.

## Når det er verdt å slå av 5G

Slå av 5G når telefonen er varm i lommen, signalet stadig faller ut eller batterigrafen viser at mobilnettet dominerer dagens forbruk. Vurder også LTE når du bruker roaming i utlandet. En telefon som leter etter 5G i ukjente nettverk, kan bruke mye strøm uten å gi særlig igjen for det.

Ikke slå av 5G bare fordi noen på nettet hevder at det alltid dreper batteriet. Det rådet er for grovt. På en moderne telefon med sterk dekning har bruk av Wi-Fi, skjermlysstyrke, bakgrunnsapper og svakt signal vanligvis større betydning.

## Vanlige spørsmål

### Skader 5G batteriet på lang sikt?

5G skader ikke batteriet direkte. Det bruker strøm. Batteriet eldes hovedsakelig på grunn av ladesykluser, varme, tid og mye tid med svært høyt ladenivå. Det indirekte problemet er varme: Hvis svak 5G-dekning holder modemet aktivt og telefonen varm i flere timer, kan varmen bidra til batterislitasje over tid.

### Er Wi-Fi bedre for batteriet enn 5G?

Vanligvis, ja. En god Wi-Fi-forbindelse er nesten alltid lettere for batteriet enn mobildata. Er du hjemme, på jobb eller på et hotell med stabil Wi-Fi, bør du bruke den.

### Bør jeg slå av 5G på reise?

Noen ganger. Hvis landet har god 5G-dekning og roamingavtalen støtter det ordentlig, lar du automatisk modus stå på. Hvis telefonen stadig leter etter 5G, blir varm eller mister dekningen, bytter du til LTE til du igjen er på et stabilt nettverk.
