---
title: "Bruger 5G mere batteri end 4G?"
description: "Metabeskrivelse: 5G kan bruge mere batteri end 4G LTE, men forskellen afhænger af signalstyrken, netværkstypen og telefonens modem. Her kan du se, hvornår 5G betyder noget, og hvornår LTE er det bedre valg for batteriet."
listSummary: "batteri, strømforbrug og fejlfinding"
hub: "battery"
sourceNumber: 28
order: 18
subgroup: "Drain"
tags: ["batteri","strømforbrug","fejlfinding","android","ydeevne"]
locale: "da"
draft: false
---
Ja, 5G kan bruge mere batteri end 4G LTE. Det er bare ikke den katastrofe, det var på den første bølge af 5G-telefoner.

En analyse fra Ooklas Speedtest Intelligence viste et 6-11 % højere batteriforbrug på 5G end på LTE, afhængigt af telefonens SoC. Det er en reel forskel. Men på en nyere telefon med et ordentligt signal er det som regel ikke forskellen mellem at komme gennem dagen og stå med en død telefon. På en ældre 5G-telefon eller et sted, hvor den hele tiden skifter mellem LTE og 5G, kan påvirkningen stadig være tydelig.

Android 17 er nu officielt udgivet til de fleste understøttede Pixel-enheder først, mens andre Android-telefoner følger senere gennem deres producenter og mobilselskaber. Det ændrer ikke den grundlæggende sammenhæng mellem 5G og batteriforbrug, men indstillingerne kan se lidt forskellige ud, afhængigt af om telefonen stadig kører Android 16, allerede har Android 17 eller venter på en opdatering fra Samsung, OnePlus, Xiaomi, Motorola eller en anden OEM.

## Signalstyrken betyder mere end ikonet

Batteriproblemet er som regel ikke det lille 5G-ikon. Det er modemmet, der arbejder for hårdt.

En telefon med et stærkt 5G-signal kan bruge mindre strøm end en telefon, der klamrer sig til et svagt LTE-signal. Modemmet skal øge sendeeffekten, når signalstyrken er dårlig, og det ekstra arbejde viser sig som varme og batteriforbrug. Hvis telefonen befinder sig i kanten af dækningsområdet, betyder netværksgenerationen mindre end det forhold, at forbindelsen er ustabil.

Derfor kan to personer få helt forskellige oplevelser med den samme telefon. En person, der bor tæt på stærk 5G-dækning i mellembåndet, bemærker måske næsten ingen forskel. En anden, der pendler gennem områder med ujævn dækning, kan se telefonen skifte fra 5G til LTE, tilbage til 5G og ned igen. Den slags søgeadfærd bruger strøm, fordi modemmet hele tiden genforhandler forbindelsen i stedet for at falde til ro på én stabil forbindelse.

Ingen magi her. Stabilt slår hurtigt.

## Hvorfor nogle 5G-netværk bruger mere strøm

De tidlige 5G-netværk brugte ofte Non-Standalone 5G, normalt forkortet NSA. I den opsætning bruger telefonen LTE som ankerforbindelse, mens 5G leverer ekstra datakapacitet. På almindeligt dansk kan telefonen altså arbejde med både 4G og 5G på samme tid.

Den dobbelte forbindelse gjorde det hurtigere for mobilselskaberne at lancere 5G, men den var ikke ideel for batteritiden. Ekstra arbejde i radioforbindelsen kræver strøm, især når 5G-laget er svagt eller kun tilgængeligt sporadisk.

Standalone 5G, eller SA, fjerner LTE-ankeret og lader telefonen forbinde gennem et 5G-kernenetværk. SA kan være mere effektivt set fra batteriets side, men dækningen er stadig ujævn. Nogle mobilselskaber har udbredt det bredt. Andre ruller det stadig ud by for by, frekvensbånd for frekvensbånd og enhed for enhed. Telefonen viser normalt ikke en enkel NSA- eller SA-etiket i de almindelige indstillinger, så den praktiske test er stadig den samme: Er 5G-forbindelsen stærk og stabil dér, hvor du faktisk bruger telefonen?

## Lavbånd, mellembånd og mmWave opfører sig ikke ens

5G er ikke én enkelt ting. Frekvensbåndet betyder noget.

5G i lavbåndet rækker langt og fungerer bedre indendørs, men hastighederne ligger ofte tæt på LTE. Batteripåvirkningen er som regel beskeden, fordi signalet opfører sig mere som ældre mobilfrekvenser.

5G i mellembåndet er det nyttige kompromis for mange. Det er almindeligt i byer og forstæder og kan være meget hurtigere end LTE uden mmWaves skrøbelighed. Mange sammenligninger af 5G-batteriforbrug i den virkelige verden ender også her, så det ekstra forbrug er mærkbart, men som regel til at håndtere.

mmWave er ydertilfældet. Det kan være meget hurtigt, men rækkevidden er kort, og vægge er et problem. Telefonen kan skulle arbejde hårdere med radioen for at holde forbindelsen og falde tilbage til et andet bånd, så snart du bevæger dig. De fleste møder kun mmWave på bestemte steder som stadioner, lufthavne og tætte byområder, så det er ikke den normale daglige 5G-oplevelse.

## Nyere modemmer har lukket en stor del af forskellen

Telefonens alder betyder meget. De første 5G-telefoner brugte ofte separat modemhardware, som øgede strømforbruget og varmen. Nyere Android-topmodeller og mange mellemklassemodeller bruger mere integrerede modemløsninger og smartere skift mellem netværk.

Derfor kan gamle 5G-råd være misvisende. En telefon fra Galaxy S20-generationen og en topmodel fra 2025 eller 2026 udfører ikke det samme arbejde med den samme hardware. Hvis du bruger en 5G-telefon fra første eller anden generation, kan tvungen LTE stadig spare en nyttig mængde strøm. Hvis du bruger en nyere Pixel, Galaxy, OnePlus, Xiaomi eller Motorola i et område med god dækning, er automatisk tilstand som regel det bedre standardvalg.

Ældre telefoner har endnu et problem: Der er mindre margen i batteritilstanden. En telefon, der allerede har mistet kapacitet efter flere års opladning, får enhver ineffektivitet i netværket til at føles værre.

## Hvad du kan ændre på Android

Begynd med den enkle regel: Lad 5G stå på automatisk, medmindre du har en grund til andet.

På Pixel og mange telefoner med en Android-version tæt på Googles går du til **Indstillinger > Netværk og internet > SIM-kort > [dit SIM-kort] > Foretrukken netværkstype**. Afhængigt af mobilselskabet kan du se valgmuligheder som 5G, LTE eller automatiske tilstande. Nogle mobilselskaber skjuler eller begrænser menuen, hvilket er irriterende, men normalt.

På Samsung Galaxy-telefoner er den sædvanlige sti **Indstillinger > Forbindelser > Mobilnetværk > Netværkstilstand**. De præcise valgmuligheder afhænger af region, operatørfirmware og One UI-version.

Brug kun LTE, når telefonen hele tiden skifter netværk, når 5G er langsommere end LTE i dit område, eller når du har brug for mest mulig batteritid på en rejse. Slå 5G til igen, når du er tilbage i et område med stærk dækning.

Pixel-telefoner har også **Selvjusterende forbindelse** (Adaptive Connectivity) under **Indstillinger > Netværk og internet > Selvjusterende forbindelse**. Lad den være aktiveret, medmindre du fejlfinder. Den lader telefonen træffe netværksvalg med hensyn til batteriforbruget, så du ikke selv behøver overvåge radioen hele tiden.

Efter en stor Android-opdatering, herunder Android 17 på understøttede Pixel-telefoner, bør du ikke bedømme batteritiden ud fra de første timer. Telefonen kan stadig være i gang med at optimere apps, synkronisere og opdatere operatørkonfigurationen. Hvis 5G pludselig fungerer dårligt efter en opdatering, skal du kontrollere operatøropdateringer, genstarte telefonen og overveje at nulstille mobilnetværksindstillingerne, før du giver selve 5G skylden.

## Hvornår det er værd at slå 5G fra

Slå 5G fra, når telefonen er varm i lommen, signalet bliver ved med at falde ud, eller batterigrafen viser, at mobilnetværket dominerer dagens forbrug. Overvej også LTE ved international roaming. En telefon, der leder efter 5G på ukendte netværk, kan bruge meget strøm for meget lidt gevinst.

Slå ikke 5G fra, bare fordi nogen på nettet siger, at det altid dræber batteriet. Det råd er for unuanceret. På en moderne telefon med god dækning betyder Wi-Fi-brug, skærmens lysstyrke, baggrundsapps og et dårligt signal som regel mere.

## Almindelige spørgsmål

### Skader 5G batteriet på lang sigt?

5G skader ikke batteriet direkte. Det bruger strøm. Batteriets aldring skyldes primært opladningscyklusser, varme, tid og lange perioder med et højt opladningsniveau. Det indirekte problem er varmen: Hvis svag 5G-dækning holder modemmet aktivt, og telefonen er varm i flere timer, kan varmen bidrage til batterislid over tid.

### Er Wi-Fi bedre for batteriet end 5G?

Som regel ja. En god Wi-Fi-forbindelse belaster næsten altid batteriet mindre end mobildata. Brug Wi-Fi, når du er hjemme, på arbejde eller på et hotel med en stabil forbindelse.

### Bør jeg deaktivere 5G, når jeg rejser?

Nogle gange. Hvis du er i et land med god 5G-dækning, og dit roamingabonnement understøtter det korrekt, kan du lade automatisk tilstand være aktiveret. Hvis telefonen hele tiden leder efter 5G, bliver varm eller mister forbindelsen, skal du skifte til LTE, indtil du igen er på et stabilt netværk.
