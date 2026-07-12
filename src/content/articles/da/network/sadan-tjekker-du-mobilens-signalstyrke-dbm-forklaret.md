---
title: "Sådan tjekker du mobilens signalstyrke (dBm forklaret)"
description: "Signalbjælker er nyttige til et hurtigt blik, men de er ikke en måling. Én telefon kan vise fire bjælker, hvor en anden viser to, selv om begge er forbundet til det samme mobilselskab i det samme rum. Vil du have det faktiske tal, skal du se efter signalstyrken i dBm."
listSummary: "Signalbjælker er nyttige til et hurtigt blik, men de er ikke en måling."
hub: "network"
sourceNumber: 93
order: 4
tags: ["netværk","forbindelser","android","fejlfinding","guide"]
locale: "da"
draft: false
---
Det lyder mere teknisk, end det er. dBm er blot det effektniveau, telefonen modtager fra mobilnettet. Jo tættere tallet er på nul, desto stærkere er signalet. En måling på -75 dBm er stærkere end -95 dBm. Så enkelt er det.

## Den hurtige måde at læse dBm på

Mobilens signalstyrke vises som et negativt tal, fordi telefoner måler meget små mængder radioeffekt. Ved almindelig brug vil du som regel se noget mellem cirka -50 dBm og -120 dBm. Tæt på en mast kan du komme tæt på -50 dBm. Dybt inde i en betonbygning, i en kælder eller i kanten af dækningsområdet kan målingen nærme sig -110 dBm eller dårligere.

Skalaen er logaritmisk. Hver ændring på 3 dBm svarer omtrent til en fordobling eller halvering af den modtagne effekt. Derfor er -80 dBm ikke kun en smule bedre end -86 dBm. Effekten er cirka fire gange så stærk. Ja, virkelig.

For LTE og de fleste 5G-forbindelser under 6 GHz er disse intervaller en nyttig tommelfingerregel:

| Måling | Hvad det som regel betyder |
|---|---|
| Fra -50 til -70 dBm | Fremragende. Opkald og data bør være stabile, forudsat at masten ikke er overbelastet. |
| Fra -70 til -85 dBm | Godt. Det er normalt ved fornuftig udendørs dækning eller tæt på et vindue. |
| Fra -85 til -100 dBm | Brugbart, men ikke godt. Browsing virker, streaming kan buffer, og uploadhastigheden kan falde først. |
| Fra -100 til -110 dBm | Svagt. Opkald kan blive afbrudt, beskeder kan blive forsinket, og modemmet bruger mere strøm på at holde forbindelsen. |
| Under -110 dBm | På grænsen. Forvent timeouts, perioder uden dækning eller tvunget skift til et andet netværkslag. |

Det er ikke universelle grænser for bestået eller dumpet. En telefon på -95 dBm kan fungere fint, hvis signalet er rent, og masten har ledig kapacitet. En anden telefon på -75 dBm kan være meget langsom, hvis cellen er belastet, eller der er meget interferens.

## Sådan tjekker du signalstyrken på Android

Den præcise menu afhænger af producent, Android-version og mobilselskabets software. Det hurtigste trick er at åbne Indstillinger og søge efter "SIM-status" eller "signalstyrke".

På Pixel og mange Android-telefoner med en standardlignende brugerflade, herunder understøttede Pixel-modeller med Android 17, kan du prøve **Indstillinger > Om telefonen > SIM-status**. Nogle versioner viser også SIM-oplysninger under **Indstillinger > Netværk og internet > SIM-kort**. Se efter Signalstyrke. Der vises som regel både en dBm-værdi og en ASU-værdi.

På Samsung Galaxy kan du åbne **Indstillinger > Om telefonen** og derefter se efter **Statusoplysninger** og **SIM-kortstatus**. På nogle One UI-versioner er navnet forkortet til SIM-status. Brug søgefeltet i Indstillinger, hvis menupunktet ikke findes.

Der er én detalje: Android viser som regel målingen for det netværkslag, du bruger lige nu. Hvis telefonen er tilsluttet LTE, gælder det viste tal LTE. Hvis den er på 5G NR, kan værdien være baseret på 5G-referencesignalet, afhængigt af hvad modemmet og mobilselskabet gør tilgængeligt. LTE- og 5G-værdier vises ikke altid ved siden af hinanden.

## Skjulte testmenuer

Mange Android-telefoner reagerer stadig på denne opkaldskode:

`*#*#4636#*#*`

Åbn Telefon-appen, indtast koden, og en testmenu kan dukke op. Åbn punktet med telefonoplysninger for at se netværkstype, signalstyrke, dataforbindelsens tilstand og andre radiooplysninger. Du bør ikke ændre den foretrukne netværkstype i denne menu, medmindre du ved præcis, hvad du gør. Det er en diagnoseskærm, ikke en brugervenlig indstillingsside.

Samsung blokerer ofte den generiske kode. På mange Galaxy-telefoner åbner `*#0011#` i stedet Service Mode. Her kan du se oplysninger om den aktive celle, frekvensbånd og signalmålinger. Mobilselskabstilpassede modeller kan deaktivere begge koder, så regn ikke med, at de altid virker.

## Apps, der gør det lettere

Apps som Network Cell Info Lite, CellularZ og Signal Strength viser dBm-værdien på hovedskærmen og opdaterer den løbende. De er nyttige, når du går rundt i et hjem, på et kontor eller på en parkeringsplads og prøver at finde det sted, hvor telefonen faktisk får en bedre forbindelse.

En god signalapp bør vise mere end ét tal. RSRP fortæller om styrken, mens RSRQ og SINR fortæller, om signalet kan bruges eller drukner i støj.

runcheck viser netværkskvaliteten sammen med andre målinger af enhedens tilstand og gemmer historik over tid. Det er vigtigt, fordi én dBm-måling kun er et øjebliksbillede. Med en historik er det lettere at se, om telefonen altid har et svagt signal i ét rum, kun er dårlig i myldretiden eller pludselig blev dårligere efter en opdatering.

## RSRP, RSSI, RSRQ og SINR uden hovedpine

Diagnoseskærme bruger flere forkortelser, der ligner hinanden. De betyder ikke det samme.

RSSI betyder Received Signal Strength Indicator. Det blev ofte brugt til ældre 2G- og 3G-forbindelser og kan også forekomme i Wi-Fi-værktøjer. RSSI måler den samlede modtagne effekt, inklusive nyttigt signal, støj og interferens. Derfor er det et mindre rent mål ved fejlsøgning på mobilnettet.

RSRP betyder Reference Signal Received Power. På LTE og 5G er det som regel den første styrkeværdi, du bør se på. Den måler referencesignalet fra den celle, telefonen er forbundet til, ikke al radioenergien i kanalen.

RSRQ betyder Reference Signal Received Quality. Værdien kombinerer signalstyrke og interferens til et mål for kvaliteten. En mindre negativ værdi er bedre. På LTE er omkring -3 dB fremragende, mens værdier tættere på -15 dB eller -20 dB tyder på dårlig kvalitet.

SINR betyder Signal to Interference plus Noise Ratio. Højere er bedre. Over 20 dB er fremragende, 10-20 dB er godt, og under 0 dB betyder, at støj og interferens er stærkere end det nyttige signal.

Den praktiske version er denne: Tjek RSRP først. Hvis RSRP er god, men data stadig er langsomme, skal du derefter se på RSRQ og SINR. Et stærkt signal med dårlig kvalitet er almindeligt i travle byer, lejlighedskomplekser, på stadioner og alle steder, hvor mange celler overlapper.

## Derfor kan fulde signalbjælker stadig være langsomme

Bjælkerne beskriver hovedsageligt signalniveauet. De fortæller ikke, hvor meget båndbredde masten har tilbage, hvor mange der bruger den, om mobilselskabet nedprioriterer dit abonnement, eller om telefonen bruger et lavfrekvent 5G-lag, der minder mere om god LTE end den hurtige 5G-forbindelse fra reklamerne.

Derfor kan to test på samme sted se selvmodsigende ud. Telefonen kan vise -68 dBm og stadig downloade langsomt til en koncert, fordi hundredvis eller tusindvis af enheder konkurrerer om den samme celle. Klokken 2 om natten kan den samme telefon på det samme sæde føles hurtig.

## Derfor hopper signalmålingerne

Signalstyrken ændrer sig, selv når du står stille. Radiobølger reflekteres fra bygninger, biler, vægge, mennesker og terræn. Nogle refleksioner hjælper. Andre ophæver en del af signalet. Flyt telefonen nogle få centimeter, og målingen kan ændre sig.

Bevægelse indendørs gør udsvingene større. Et vindue, en elevatorskakt, en betonvæg, et metaltag eller energiglas kan ændre målingen med 10 dB eller mere. Kældre og indvendige rum er som regel de værste steder, fordi signalet skal gennem mere materiale, før det når telefonen.

Tidspunktet kan også have betydning, men ikke altid fordi selve signalet har ændret sig. I travle perioder kan cellen være overbelastet, så forbindelsen føles dårligere, selv om dBm-værdien ligner den sædvanlige.

## Hvad er en god 5G-måling?

For 5G under 6 GHz er en omtrentlig RSRP-værdi omkring -80 dBm god, mens omkring -100 dBm begynder at være svagt. På mmWave er en stabil dækning langt mere afhængig af placeringen. Du kan have en hurtig mmWave-forbindelse udendørs med fri sigtelinje og miste den ved at dreje om et hjørne eller gå indenfor.

Bedøm ikke 5G alene ud fra ikonet. Se på signalstyrke, kvalitet, hastighed, latenstid og om telefonen hele tiden falder tilbage til LTE.

## Hurtige svar

Kan du forbedre signalet uden en signalforstærker? Nogle gange. Gå hen til et vindue, gå en etage op, træd udenfor, eller prøv den anden side af bygningen. Hvis 5G er svagt indendørs, kan LTE være den bedre forbindelse i praksis, fordi LTE-bånd med lavere frekvens ofte trænger lettere gennem vægge.

Er dBm på mobilnettet det samme som dBm på Wi-Fi? Enheden er den samme, men de nyttige intervaller er forskellige. På Wi-Fi er -50 dBm stærkt, og omkring -70 dBm begynder stabiliteten ofte at lide. Mobilnet er bygget til længere afstande og kan derfor stadig fungere ved langt lavere værdier.

Skal du stole på bjælker eller dBm? Brug bjælkerne til et hurtigt blik. Brug dBm, når du fejlsøger.
