---
title: "Hvorfor viser telefonen intet signal, og hvordan løser du problemet?"
description: "Praktiske trin til at løse meddelelser som Intet signal, Ingen tjeneste og Kun nødopkald på Android-telefoner, herunder kontrol af SIM, eSIM, mobilselskab, APN, opdateringer og hardware."
listSummary: "netværk, forbindelser og android"
hub: "network"
sourceNumber: 102
order: 13
tags: ["netværk","forbindelser","android","fejlfinding","guide"]
locale: "da"
draft: false
---
Telefonen viser `Intet signal`, `Ingen tjeneste` eller `Kun nødopkald`, og pludselig er den dyre lille computer i hånden reduceret til et kamera med Wi-Fi. Irriterende, men ikke altid alvorligt.

Tricket er at skelne mellem tre mulige årsager: telefonen, SIM- eller eSIM-kortet og mobilselskabets netværk. Gætteri spilder tid. Hvis du tester dem i den rigtige rækkefølge, finder du som regel ud af, hvor fejlen ligger.

## Gør disse tre ting først

Slå flytilstand til, vent cirka 15 sekunder, og slå den fra igen. Det tvinger telefonen til at afbryde netværksregistreringen og prøve på ny.

Genstart telefonen. En genstart indlæser modemmet, SIM-tjenesterne og operatørkonfigurationen igen. Hvis radiodelen er gået i stå, er det ofte nok.

Hvis du bruger et fysisk SIM-kort, skal du slukke telefonen, tage SIM-skuffen ud, kontrollere at kortet er rent og ligger fladt, og sætte det ordentligt i igen. Et SIM-kort, der sidder en smule løst, kan give manglende tjeneste efter et fald eller et skift af cover.

Hvis du bruger eSIM, skal du ikke slette eSIM-profilen som det første. Åbn `Indstillinger > Netværk og internet > SIM-kort`, og kontrollér, at eSIM-linjen er aktiveret. Hvis du sletter et eSIM, kan et lille problem hurtigt blive til en samtale med mobilselskabets support.

## Tjek, om mobilselskabet har driftsproblemer

Det er ikke det mest tilfredsstillende svar, men det er almindeligt: Telefonen fejler ikke noget, mens mobilselskabet har problemer.

Spørg en person i nærheden med samme mobilselskab, om vedkommende har forbindelse. Tjek selskabets app, supportside eller sociale medier. Downdetector kan bruges som et fingerpeg, men tjenesten bygger på brugerrapporter, ikke på mobilselskabets egne diagnosticeringsdata.

Hvis flere personer på samme netværk mangler forbindelse i det samme område, skal du holde op med at ændre telefonens indstillinger. Vent på mobilselskabet, eller flyt dig til et andet sted.

## Sørg for, at SIM-linjen er aktiv

Telefonen kan vise manglende tjeneste, hvis SIM-linjen er deaktiveret, kontoen er spærret, et taletidskort er løbet tør, eSIM-profilen er flyttet til en anden enhed, eller telefonen er låst til et andet mobilselskab.

På Pixel og mange telefoner med næsten ren Android skal du åbne `Indstillinger > Netværk og internet > SIM-kort`, vælge SIM-kortet og kontrollere, at `Brug SIM-kort` og `Mobildata` er slået til.

På Samsung skal du tjekke `Indstillinger > Forbindelse > SIM-administrator` og derefter indstillingerne under `Indstillinger > Forbindelse > Mobile netværk`.

Hvis telefonen viser `Intet SIM-kort`, kan SIM-kortet være beskadiget, inaktivt eller ikke blive aflæst. Hvis den viser `Kun nødopkald`, kan telefonen se et netværk, men ikke godkendes normalt. Det peger ofte på SIM-kortet, kontoen, en operatørlås eller roaming, ikke nødvendigvis på en helt død antenne.

## Efter Android 17 eller en anden stor opdatering

Android 17 blev udgivet den 16. juni 2026 og blev først gjort tilgængelig på de fleste understøttede Pixel-enheder. Samsung, OnePlus, Xiaomi, Motorola og andre mærker følger deres egne opdateringsplaner. Hvis signalproblemerne begyndte lige efter en større opdatering, er tidspunktet relevant.

Lad være med straks at nulstille telefonen til fabriksindstillinger. Prøv først dette:

- Genstart telefonen igen, når opdateringen er helt færdig.
- Tjek, om der findes endnu en systemopdatering eller en opdatering af operatørindstillingerne.
- Slå flytilstand til og fra én gang.
- Nulstil kun indstillingerne for mobilnetværket, hvis din Android-version har den mulighed.
- Hvis 5G er ustabilt, kan du midlertidigt vælge LTE eller 4G som foretrukken netværkstype og teste igen.

Nogle tidlige problemer efter en opdatering bliver rettet med månedlige sikkerhedsrettelser eller nye operatørkonfigurationer. En nulstilling til fabriksindstillinger bør ligge tæt på slutningen af listen, ikke begyndelsen.

## Tjek den foretrukne netværkstype

Åbn SIM-indstillingerne, og find `Foretrukken netværkstype` eller `Netværkstilstand`. Vælg den automatiske indstilling med den højeste understøttede generation, for eksempel `5G/LTE/3G/2G` eller `5G/4G/3G/2G`.

Hvis telefonen er tvunget til en netværksgeneration, der ikke længere findes i området, kan den vise manglende tjeneste. Det sker med gamle indstillinger, der kun tillader 3G, i lande hvor 3G er lukket. Det kan også ske, hvis du under en test manuelt valgte kun LTE eller kun 5G og glemte at skifte tilbage.

På Samsung er stien som regel `Indstillinger > Forbindelse > Mobile netværk > Netværkstilstand`.

På Xiaomi- og POCO-telefoner skal du åbne indstillingerne for SIM-kort og mobilnetværk.

Brug søgefeltet i Indstillinger, hvis producenten har flyttet valget. Det gør de gerne.

## Slå automatisk valg af netværk til igen

Et manuelt valg af mobilselskab kan efterlade telefonen på det forkerte netværk. Det er almindeligt efter en rejse.

Find indstillingen til automatisk valg af netværk eller netværksoperatør under SIM-indstillingerne, og slå automatisk valg til. Hvis det ikke virker, kan du søge manuelt og vælge dit mobilselskab på listen.

Hvis du roamer, skal du kontrollere, at dit abonnement tillader roaming, før du slår dataroaming til. Reglerne for tale og data kan være forskellige hos det enkelte mobilselskab.

## Tjek APN-indstillinger ved problemer med mobildata

APN-indstillinger fortæller Android, hvordan telefonen skal oprette forbindelse til mobilselskabets datanetværk. En forkert APN giver som regel problemer med mobildata eller MMS, ikke et fuldstændigt bortfald af signal, men den kan få et netværksproblem til at virke værre.

På Pixel og telefoner med næsten ren Android findes APN-valgene under det relevante SIM-kort i `Indstillinger > Netværk og internet > SIM-kort`. På Samsung ligger de normalt under `Indstillinger > Forbindelse > Mobile netværk`.

Vælg `Nulstil til standard`, hvis APN-listen ser forkert eller tom ud. Ved virtuelle og mindre mobilselskaber skal du bruge værdierne fra selskabets egen supportside. Kopiér ikke tilfældige APN-indstillinger fra et forum, medmindre du har lyst til at fejlfinde to gange.

## Nulstil netværksindstillingerne

Hvis SIM-kortet er aktivt, og indstillingerne ser normale ud, kan du nulstille netværksindstillingerne. Det fjerner gemte Wi-Fi-netværk, Bluetooth-parringer, VPN-indstillinger og mobilnetværkskonfiguration. Det sletter ikke apps, billeder, beskeder eller filer.

På Pixel og nyere versioner af næsten ren Android skal du gå til `Indstillinger > System > Nulstil valg`. Her kan du se en samlet indstilling til nulstilling af Wi-Fi, mobilnetværk og Bluetooth eller nyere separate valg som `Nulstil indstillinger for mobilnetværk` og nulstilling af Bluetooth og Wi-Fi.

På Samsung er stien normalt `Indstillinger > Generel administration > Nulstil > Nulstil netværksindstillinger`.

På Xiaomi- og POCO-telefoner er det sikrest at søge efter "nulstil netværk" i Indstillinger, fordi stien varierer mellem MIUI- og HyperOS-versioner.

Genstart efter nulstillingen, og giv telefonen et minut til at registrere sig på netværket.

## Test SIM-kortet i en anden telefon

Det er den enkleste måde at stoppe gætteriet på.

Sæt SIM-kortet i en anden ulåst telefon, der understøtter mobilselskabets frekvensbånd. Hvis det virker dér, er SIM-kortet og kontoen sandsynligvis i orden, og problemet ligger i den oprindelige telefon. Hvis den anden telefon også viser manglende tjeneste, ligger fejlen sandsynligvis i SIM-kortet, kontoen eller mobilselskabets aktivering.

Prøv også et SIM-kort, som du ved virker, i din egen telefon, hvis det er muligt. Hvis det får forbindelse, er telefonens hardware sandsynligvis i orden.

Den tilsvarende test er mere besværlig med eSIM, fordi flytning kan kræve en ny aktivering hos mobilselskabet. Supporten kan i stedet kontrollere, om eSIM-profilen stadig er aktiv og knyttet til din enhed.

## Tjek IMEI på brugte telefoner

Hvis telefonen er købt brugt, bør du kontrollere IMEI-nummeret. Indtast `*#06#` for at vise det.

En telefon kan miste normal netværksadgang, hvis den bliver sortlistet efter at være meldt bortkommet eller stjålet, hvis der er ubetalt finansiering knyttet til den oprindelige aftale, eller hvis den er låst til et andet mobilselskab. Brug mobilselskabets egen kontrol, når det er muligt. Tredjepartstjenester til IMEI-opslag kan være nyttige, men mobilselskabet træffer den endelige afgørelse på sit eget netværk.

## Placering og byggematerialer betyder noget

Signalstyrken kan ændre sig hurtigt. En telefon kan have fuldt signal udenfor og ingen tjeneste i en kælder, elevator, lagerhal med metaltag, parkeringskælder eller betonlejlighed.

Gå hen til et vindue, eller træd udenfor. Hvis forbindelsen vender tilbage, gør telefonen sit arbejde. Bygningen dæmper signalet.

Tykke covers kan også påvirke modtagelsen, hvis de indeholder metalplader, magneter eller dårligt placeret tilbehør. Fjern coveret et øjeblik, hvis problemet begyndte efter montering af en holder, et pungcover eller en magnetisk ring.

Wi-Fi-opkald er den normale løsning, når mobilsignalet er svagt indendørs, men Wi-Fi-forbindelsen er god.

## Tal for signalstyrke er bedre end streger

Signalstreger er omtrentlige. dBm er bedre.

På mange Android-telefoner kan du finde signalstyrken under oplysninger om telefonen eller SIM-status i Indstillinger. Du kan for eksempel se `-85 dBm` eller `-110 dBm`. Jo tættere tallet er på nul, desto stærkere er signalet.

Som en grov rettesnor er cirka `-50 til -90 dBm` brugbart, under `-100 dBm` er svagt, og omkring `-120 dBm` er tæt på ubrugeligt. Den præcise oplevelse afhænger af netværkstype, belastning og operatørkonfiguration, så brug ikke tallet som en perfekt bestået eller ikke bestået test.

Koden `*#*#4636#*#*` åbner en testmenu på nogle Android-telefoner, men mange producenter og mobilselskaber deaktiverer den. Hvis der ikke sker noget, er telefonen ikke nødvendigvis defekt.

runcheck kan vise signalstyrke og netværksoplysninger over tid, hvilket er mere nyttigt end at stirre på signalstregerne i ti sekunder. Signalproblemer afhænger ofte af placering, tidspunkt og af, om telefonen skifter mellem LTE og 5G.

## Hvornår hardware er den sandsynlige årsag

Hardware bliver mere sandsynlig, når alt dette er opfyldt:

- Dit SIM-kort virker i en anden telefon.
- Et SIM-kort, som du ved virker, får ingen forbindelse i din telefon.
- Netværksindstillingerne er nulstillet.
- Kontoen er aktiv.
- Andre personer med samme mobilselskab har forbindelse i nærheden.
- Telefonen viser stadig manglende tjeneste flere forskellige steder.

Almindelige hardwareårsager er en beskadiget antenne, en defekt SIM-læser, korrosion nær SIM-skuffen eller en RF-komponent, der er ved at svigte. Fald og fugt er de sædvanlige mistænkte.

Se efter buler nær antennelinjerne, en SIM-skuffe der ikke ligger plant, væskeindikatorer, korrosion eller tegn på et nyligt slag. Hvis telefonen stadig er omfattet af garanti eller reklamationsret, skal du kontakte producenten eller forhandleren. Ellers bør du sammenligne reparationsprisen med telefonens aktuelle værdi, før du godkender arbejdet.

## Bør du købe en signalforstærker?

Kun til en fast placering, og kun hvis der allerede findes et brugbart signal udendørs. En signalforstærker forstærker et eksisterende signal. Den kan ikke skabe et mobilnetværk ud af ingenting.

I Danmark er anlæg, der forstærker mobilsignaler, som udgangspunkt ikke lovlige at bruge på egen hånd. Digitaliseringsstyrelsen kan ikke udstede en separat tilladelse, fordi frekvenserne er tildelt mobilselskaberne. Brug uden en aftale med det relevante mobilselskab kan forstyrre mobilnettet og være en overtrædelse af frekvensloven. Køb derfor ikke en tilfældig kraftig repeater fra en markedsplads. Kontakt først dit mobilselskab, og undersøg Wi-Fi-opkald eller en anden operatør som sikrere alternativer.
