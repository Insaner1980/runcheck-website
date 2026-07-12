---
title: "Sådan tjekker du Wi-Fi-signalstyrken på Android"
description: "Metabeskrivelse: Lær at aflæse Wi-Fi-styrken på Android i dBm, ikke kun som bjælker. Guiden dækker indbyggede indstillinger, analyseapps og betydningen af tallene."
listSummary: "Metabeskrivelse: Lær at aflæse Wi-Fi-styrken på Android i dBm, ikke kun som bjælker."
hub: "network"
sourceNumber: 90
order: 1
tags: ["netværk","forbindelser","android","fejlfinding","guide"]
locale: "da"
draft: false
---
Wi-Fi-bjælkerne i statuslinjen er et groft fingerpeg, ikke en måling. Læg to telefoner ved siden af hinanden, og de kan stadig være uenige, fordi Android-brugerflader og producenter ikke omsætter signalstyrke til bjælker på samme måde.

Til reel fejlfinding skal du se efter dBm. Tallet viser styrken af det signal, telefonen modtager fra routeren.

## Begynd i Androids indstillinger

Åbn **Indstillinger > Netværk og internet > Internet** på en Pixel eller en telefon med næsten ren Android. På en Samsung Galaxy skal du åbne **Indstillinger > Forbindelser > Wi-Fi**. Tryk på det netværk, du har forbindelse til.

Netværkets detaljeside viser som regel en vurdering som Fremragende, God, Rimelig eller Svag. Den kan også vise forbindelseshastighed, frekvens, sikkerhedstype, IP-adresse og andre forbindelsesoplysninger. Den præcise skærm varierer efter mærke og Android-version, så det er ikke et problem, hvis din telefon ikke ligner skærmbilledet i en guide helt præcist.

På mange aktuelle telefoner viser Androids indstillinger ikke den rå dBm-værdi. Det er irriterende, men ikke usædvanligt. Forbindelseshastigheden giver stadig nyttig sammenhæng. Hvis den falder fra flere hundrede Mbps tæt på routeren til 40 Mbps i soveværelset længst væk, fortæller forbindelsen dig noget.

## Prøv udviklerindstillinger, men stol ikke på dem

Nogle telefoner kan vise flere Wi-Fi-oplysninger, når du aktiverer udviklerindstillinger.

Gå til **Indstillinger > Om telefonen**, og tryk syv gange på **Buildnummer**. Åbn derefter **Indstillinger > System > Indstillinger for udviklere**, og se under netværksafsnittet efter indstillingen **Aktivér detaljeret Wi-Fi-logføring**. Googles udviklerdokumentation beskriver funktionen som en forhøjelse af logningsniveauet for hvert SSID ud fra den relative RSSI.

I praksis varierer det, hvad du kan se. Pixel-telefoner og enheder med næsten ren Android viser oftere nyttige ekstraoplysninger. Samsung og andre producentversioner kan skjule de samme oplysninger eller vise dem anderledes. Det er et af de Android-tricks, der virker, indtil det ikke gør.

## Brug en Wi-Fi-analyseapp til dBm

En Wi-Fi-analyseapp er den nemmeste måde at få en dBm-måling på tværs af forskellige telefoner.

WiFiman fra Ubiquiti viser Wi-Fi-oplysninger som signalstyrke, kanal, SSID, BSSID, gateway, DNS, latenstid og pakketab. Det er et godt førstevalg, hvis du vil have én app, der også indeholder hastighedstest og værktøjer til at finde enheder på netværket.

NetSpot er bedre, når du vil kortlægge et område. Appen kan vise signalstyrke og hjælpe med at opbygge et omtrentligt billede af dækningen, mens du bevæger dig rundt i et hjem eller på et kontor.

Network Analyzer er nyttig, når problemet måske slet ikke er signalstyrken. Den kombinerer oplysninger om Wi-Fi og mobilnetværk med værktøjer som ping, DNS-opslag og traceroute.

Når du har installeret en af dem, skal du finde navnet på dit netværk og holde øje med dBm-værdien, mens du bevæger dig. Tallet betyder mere end ikonet i statuslinjen.

## Hvad dBm-tallene betyder

dBm-værdier er negative. Jo tættere tallet er på nul, desto stærkere er signalet. En måling på -45 dBm er langt stærkere end -75 dBm.

Brug disse som praktiske tærskler i et hjemmenetværk:

- Fra -30 til -50 dBm: fremragende. Du er sandsynligvis tæt på routeren eller adgangspunktet.
- Fra -50 til -60 dBm: stærkt. Streaming, videoopkald og almindelig browsing bør være stabile.
- Fra -60 til -67 dBm: stadig godt til de fleste formål, herunder HD-video og opkald, hvis interferensen er lav.
- Fra -67 til -70 dBm: brugbart, men her kan opkald i realtid og gaming begynde at lide.
- Fra -70 til -80 dBm: svagt. Browsing kan virke, men videokvaliteten kan falde, og opkald kan fryse.
- Under -80 dBm: dårligt. Telefonen kan forblive tilsluttet, selv om dataoverførslen føles defekt.

Der findes ingen perfekt grænse, fordi støj og interferens også betyder noget. Et rent signal på -68 dBm kan være bedre end et støjfyldt signal på -60 dBm i en ejendom fuld af routere.

## Tjek frekvensbåndet

De fleste routere bruger det lavere 2,4 GHz-bånd og det hurtigere 5 GHz-bånd. Nyere routere kan også bruge 6 GHz via Wi-Fi 6E eller Wi-Fi 7.

Det laveste bånd rækker længere og klarer vægge bedre, men det er tæt pakket. Bluetooth-enheder, naboernes routere, babyalarmer og mikrobølgeovne kan alle skabe mere støj.

5 GHz-båndet er hurtigere på kort og mellemlang afstand. Det mister hurtigere styrke gennem vægge og etager. Telefonen kan vise en svagere dBm-værdi på dette bånd og stadig være hurtigere end det lavere bånd, fordi der er mere plads til data.

6 GHz-båndet er endnu mindre belastet, når det er tilgængeligt, men rækkevidden er igen kortere. Det er fremragende i samme rum eller i rum i nærheden. Det er ikke en magisk løsning til hele huset.

Hvis routeren samler båndene under ét netværksnavn, vælger telefonen automatisk et af dem. Det valg er som regel fint, men ikke altid. Når du undersøger et område uden ordentlig dækning, bør du tjekke, hvilket bånd telefonen faktisk bruger, før du giver routeren skylden.

## Gå gennem problemområderne

Åbn analyseappen, og gå langsomt gennem de rum, hvor Wi-Fi fungerer dårligt. Hold øje med det sted, hvor dit netværk falder til under cirka -70 dBm.

Typiske svage punkter er kedelige, men reelle: betonvægge, mursten, metaldøre, spejle med metallisk bagside, gulvvarme og routere, der er gemt i skabe. En router i et skab er et klassisk selvforskyldt problem.

runcheck viser den aktuelle Wi-Fi-måling på skærmen med netværksoplysninger, herunder dBm, kvalitetsvurdering, forbindelseshastighed, frekvens og latenstid, når Android stiller værdierne til rådighed. Netværkshistorikken er nyttig ved periodiske problemer, for eksempel hvis hastigheden falder hver aften, eller signalstyrken kun bliver dårlig i ét rum.

## Sådan forbedrer du et svagt signal

Flyt først routeren. Placér den højere, tættere på boligens centrum og væk fra metalgenstande. Gem den ikke bag fjernsynet eller inde i et skab.

Skift kanal, hvis naboernes routere fylder den samme. På 2,4 GHz er kanal 1, 6 og 11 de almindelige valg, der ikke overlapper hinanden. På 5 GHz og 6 GHz er der mere kanalplads, men der kan stadig opstå trængsel i etageejendomme.

Brug mesh-Wi-Fi, når én router ikke kan dække området. Et mesh-system med velplacerede noder er som regel bedre end en billig repeater, der står i kanten af et område med dårlig dækning. Repeateren skal også have et rimeligt signal. Hvis den knap kan høre routeren, kan den ikke skabe et godt netværk ud af ingenting.

Opdater routerens firmware, når der findes opdateringer. Det ændrer ikke fysikkens love, men det kan rette fejl, roamingproblemer og kompatibilitetsproblemer med nyere telefoner.
