---
title: "Sådan tjekker du, om din telefon understøtter 5G"
description: "Sådan finder du ud af, om en Android-telefon understøtter 5G, hvorfor 5G-ikonet alligevel kan mangle, og hvilken betydning frekvensbånd, abonnement og mobilselskab har."
listSummary: "netværk, forbindelser og android"
hub: "network"
sourceNumber: 101
order: 12
tags: ["netværk","forbindelser","android","fejlfinding","guide"]
locale: "da"
draft: false
---
En telefon har enten 5G-hardware, eller også har den ikke. Android 17, en opdatering af operatørindstillingerne eller et nyt SIM-kort kan ikke forvandle et modem, der kun understøtter 4G, til et 5G-modem.

Det lyder indlysende, men det er årsagen til en stor del af forvirringen. Mange nyere Android-telefoner i den billigere ende er stadig begrænset til 4G, mens en del ældre topmodeller allerede understøtter 5G. Det præcise modelnummer betyder mere end årstallet på kvitteringen.

## Tjek først netværksindstillingerne

Den hurtigste kontrol findes i Android-indstillingerne.

På Pixel og mange telefoner med næsten ren Android skal du åbne `Indstillinger > Netværk og internet > SIM-kort`, vælge dit SIM-kort og derefter finde `Foretrukken netværkstype`. Hvis du kan vælge en indstilling med `5G`, `NR` eller `5G/LTE`, understøtter telefonen 5G med den aktuelle software og operatørprofil.

På Samsung skal du tjekke `Indstillinger > Forbindelse > Mobile netværk > Netværkstilstand`.

På Xiaomi- og POCO-telefoner skal du åbne indstillingerne for SIM-kort og mobilnetværk og finde den foretrukne netværkstype.

På OnePlus findes valget normalt under indstillingerne for mobilnetværk og det relevante SIM-kort.

Hvis den højeste valgmulighed er LTE, 4G, 3G eller 2G, kan telefonen være begrænset til 4G. Jeg skriver "kan", fordi nogle mobilselskaber skjuler 5G-indstillingerne, når abonnementet, SIM-kortet eller regionen ikke understøtter dem. Telefonens præcise specifikationer giver det endelige svar.

## Find det præcise modelnummer

Åbn `Indstillinger > Om telefonen`, og noter modelnummeret, ikke kun markedsføringsnavnet. En `Galaxy A55 5G` og en regional variant af en anden telefon i A-serien kan have forskellig netværksunderstøttelse. Det samme gælder mange telefoner fra Xiaomi, Motorola, OPPO og Vivo.

Søg først efter modelnummeret på producentens produktside. GSMArena er også praktisk til et hurtigt opslag, men producentens side er den bedste kilde, hvis oplysningerne er i konflikt.

Se efter `5G NR`-bånd i netværksafsnittet. Almindelige 5G-bånd under 6 GHz omfatter n28, n41, n71, n77 og n78, afhængigt af land og mobilselskab. mmWave-bånd som n260 og n261 bruges færre steder og som regel kun på bestemte telefonvarianter.

Hvis specifikationsarket kun viser GSM-, WCDMA-, LTE- eller 4G-bånd, understøtter telefonen ikke 5G.

## En 5G-telefon kræver stadig tre andre ting

Hardwaren er kun første trin.

Du skal også have et mobilabonnement med adgang til 5G. Nogle abonnementer inkluderer det automatisk. Andre forudbetalte eller ældre abonnementer gør ikke. Erhvervsabonnementer og abonnementer hos virtuelle mobilselskaber kan variere en del på dette punkt.

Der skal være 5G-dækning dér, hvor du befinder dig. Mobilselskabets dækningskort er et udgangspunkt, ikke en garanti. Indendørs dækning kan være betydeligt dårligere end udendørs, især på højere 5G-frekvenser.

Telefonen skal desuden understøtte de rigtige frekvensbånd. Det er den del, mange overser. En telefon, der er importeret fra en anden region, kan understøtte 5G i ét land, men mangle de bånd, som dit danske mobilselskab bruger. Den kan altså være "5G-kompatibel" og stadig opføre sig som en 4G-telefon på dit netværk.

## Tjek statuslinjen, men stol ikke for meget på den

Når telefonen har forbindelse til 5G, viser statuslinjen som regel `5G`. Afhængigt af mobilselskab og land kan du også se betegnelser som `5G+`, `5G UW` eller `5G UC`.

Et manglende 5G-ikon betyder ikke automatisk, at telefonen mangler 5G-understøttelse. Du kan være uden for dækningsområdet, befinde dig i en bygning, der dæmper signalet, bruge et abonnement uden 5G, have en forkert SIM-profil eller være tilsluttet et netværk, der deaktiverer 5G på den ene SIM-plads.

Hvis du ser `5G E`, skal du betragte det som LTE-markedsføring, ikke som ægte 5G. Det amerikanske mobilselskab AT&T brugte betegnelsen om en forbedret 4G LTE-tjeneste, og den har skabt forvirring i årevis.

## Tjek processoren, men stop ikke dér

Telefonens SoC fortæller som regel, om 5G overhovedet er muligt. Qualcomm Snapdragon 480 og nyere chips med tydelig 5G-betegnelse, mange Snapdragon 6-, 7- og 8 Gen-chips, MediaTek Dimensity-chips, Samsung Exynos 1280 og nyere mellemklasse- eller topchips med 5G samt alle Google Tensor-chips er almindelige eksempler.

Processornavne er dog rodede. Nogle chips i Snapdragon 600-serien understøtter kun 4G. Nogle telefoner bruger en platform, der kan håndtere 5G, men sælges også i en 4G-variant. Telefoner med MediaTek Helio G-serien er som regel 4G-modeller, mens Dimensity er MediaTeks 5G-serie.

Brug processoren som et fingerpeg, og kontrollér derefter den fulde telefonmodel og dens frekvensbånd.

## Android 17 ændrer ikke svaret om hardwaren

Android 17 blev udgivet den 16. juni 2026 og gjort tilgængelig på de fleste understøttede Pixel-enheder først. Nye enheder og telefoner fra andre producenter følger efter på deres egne tidsplaner. Opdateringen kan forbedre modemfirmware, operatørfunktioner og netværksstabilitet på telefoner, der allerede understøtter teknologien.

Den kan ikke tilføje 5G til et 4G-modem. Hvis telefonen ikke understøttede 5G før Android 17, gør den det heller ikke efter opdateringen.

## SA- og NSA-5G

Der findes to overordnede måder at udrulle 5G på.

NSA, eller Non-Standalone 5G, bruger 5G-radio sammen med et 4G-kernenetværk. Det gjorde det muligt for mobilselskaberne at udrulle 5G hurtigere.

SA, eller Standalone 5G, bruger et 5G-kernenetværk. Det kan give lavere latenstid, bedre netværkseffektivitet og mulighed for fremtidige funktioner, men udrulningen varierer stadig mellem mobilselskaberne.

De fleste behøver ikke gå meget op i SA og NSA til almindelig browsing, kort, beskeder eller video. Forskellen bliver vigtigere, hvis dit mobilselskab flytter funktioner over på SA, hvis du bruger en tidlig 5G-telefon, eller hvis du har brug for den lavest mulige latenstid.

## Hvorfor din 5G-telefon altid viser LTE

Gå punkterne igennem i denne rækkefølge:

- Kontrollér, at `Foretrukken netværkstype` indeholder 5G eller NR.
- Tjek, at dit abonnement inkluderer 5G.
- Se mobilselskabets dækningskort for den præcise placering.
- Gå udenfor eller hen til et vindue for at udelukke signaltab indendørs.
- Sørg for, at SIM- eller eSIM-linjen er aktiv og valgt som data-SIM.
- Tjek, om brug af to SIM-kort deaktiverer 5G på din model.
- Sammenlign telefonens 5G NR-bånd med mobilselskabets bånd.
- Installer tilgængelige system- og operatøropdateringer.

Hvis alt dette ser korrekt ud, og telefonen stadig aldrig finder 5G, kan du prøve et andet SIM-kort fra samme mobilselskab eller bede selskabet om at genaktivere netværksprofilen på linjen.

## Er 5G værd at opgradere for?

Nogle gange. Det er det ærlige svar.

I en by med god mellembånds- eller mmWave-dækning kan hastighedsforskellen være tydelig. Downloads bliver hurtigere færdige, internetdeling fungerer bedre, og latenstiden kan falde. I et landområde med svagt eller ustabilt 5G kan en god 4G-forbindelse føles bedre end en telefon, der hele tiden skifter mellem LTE og 5G.

Hvis din nuværende telefon fungerer godt, og 5G-dækningen er svag i dit område, bør du ikke opgradere kun for ikonets skyld. Opgrader for hele telefonen: batteri, kamera, softwaresupport, lagerplads, RAM og modemkvalitet.
