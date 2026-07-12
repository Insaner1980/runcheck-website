---
title: "Sådan løser du problemer med Wi-Fi-forbindelsen på Android"
description: "Metabeskrivelse: Trin-for-trin-løsninger på Wi-Fi-problemer på Android, herunder afbrudte forbindelser, langsomt Wi-Fi, problemer med gemte netværk, DNS-indstillinger, routerkontrol og bemærkninger om Android 17-opdateringen."
listSummary: "ydeevne, hastighed og android"
hub: "network"
sourceNumber: 96
order: 7
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
Hvad bør du prøve først, når Wi-Fi holder op med at virke på Android? Begynd ikke med en nulstilling til fabriksindstillinger, og brug ikke en halv time på at ændre routerindstillinger, før du har prøvet de enkle ting. De fleste Wi-Fi-problemer falder i tre grupper: Telefonen kan ikke oprette forbindelse, forbindelsen falder hele tiden ud, eller telefonen forbliver forbundet, men internettet føles dødt.

Gå løsningerne igennem i denne rækkefølge. Det sparer tid.

## 1. Slå Wi-Fi fra og til, og prøv derefter flytilstand

Stryg ned for at åbne kvikmenuen, og slå Wi-Fi fra. Vent fem sekunder. Slå det til igen.

Hvis det ikke hjælper, skal du slå flytilstand til, vente ti sekunder og slå den fra igen. Det genstarter telefonens trådløse radioforbindelser uden at genstarte hele enheden. På Pixel og Android-versioner, der ligger tæt på standard-Android, finder du også flytilstand under Indstillinger > Netværk og internet. På Samsung skal du bruge Indstillinger > Forbindelser.

Det er en lille løsning, men den fanger overraskende mange midlertidige fejl i radioforbindelsen.

## 2. Glem netværket, og opret forbindelse igen

En gemt Wi-Fi-profil kan blive forældet efter en firmwareopdatering til routeren, en ændring af adgangskoden eller sikkerhedstypen eller en ny konfiguration af et mesh-system.

På Pixel og mange Android 17-lignende versioner skal du gå til Indstillinger > Netværk og internet > Internet. Tryk på tandhjulet ud for netværket, og tryk derefter på Glem. På Samsung skal du gå til Indstillinger > Forbindelser > Wi-Fi, trykke på tandhjulet ud for netværket og derefter på Glem.

Opret forbindelse igen ved at vælge netværket og indtaste adgangskoden. Hvis routeren både har et primært netværk og et gæstenetværk, skal du kontrollere, at du vælger det rigtige.

## 3. Genstart telefonen og routeren

Genstart telefonen. Genstart derefter routeren ved at tage strømmen fra den i 30 sekunder.

Gør begge dele, ikke kun det ene. Telefonen kan have en midlertidig fejl i netværkstilstanden, mens routeren kan have en forældet DHCP-tildeling eller en overfyldt forbindelsestabel. Når begge sider genstartes, tvinges de til at forhandle forbindelsen på ny.

Hvis flere enheder har problemer med Wi-Fi, er genstarten af routeren vigtigere end genstarten af telefonen.

## 4. Tjek, om problemet er Wi-Fi eller internetforbindelsen

Android kan være forbundet til Wi-Fi, selv om internetforbindelsen bag routeren er nede. Wi-Fi-ikonet fortæller kun, at telefonen har en lokal trådløs forbindelse.

Prøv en anden enhed på samme netværk. Hvis alle enheder er langsomme eller offline, skal du kontrollere modemmet, routeren og internetudbyderen. Hvis kun Android-telefonen har problemer, skal du fortsætte med løsningerne på telefonen.

Prøv også at åbne routerens administrationsside. Mange routere bruger 192.168.1.1 eller 192.168.0.1. Hvis siden åbner, men websites ikke gør, fungerer selve Wi-Fi-forbindelsen. Problemet ligger længere ude i internetforbindelsen, DNS eller routerens konfiguration.

## 5. Opdater Android, Google Play-systemkomponenter og routerens firmware

Gå til Indstillinger > System > Softwareopdateringer > Systemopdatering, og installer ventende opdateringer. På Samsung skal du bruge Indstillinger > Softwareopdatering > Download og installer.

På Pixel-lignende Android-versioner bør du også se efter Google Play-systemopdateringer under Indstillinger > Sikkerhed og privatliv > System og opdateringer. Den præcise ordlyd flytter sig mellem versioner, men pointen er den samme: Både telefonens firmware og systemkomponenter betyder noget.

Det er let at glemme routerens firmware. Åbn routerens app eller administrationspanel, og se efter opdateringer under firmware, system eller administration. Routerproducenter retter løbende fejl, der påvirker Wi-Fi-stabiliteten, men mange routere opdaterer ikke sig selv pålideligt.

## 6. Deaktivér automatisk skift fra Wi-Fi til mobildata

Hvis telefonen tilfældigt forlader Wi-Fi, selv om routeren virker, kan automatisk netværksskift være årsagen.

På Pixel skal du se under Indstillinger > Netværk og internet > Selvjusterende forbindelse. På Samsung skal du åbne Indstillinger > Forbindelser > Wi-Fi > Intelligent Wi-Fi og slå Skift til mobildata fra som en test.

Lad indstillingen være slået fra i en dag. Hvis Wi-Fi bliver stabilt, reagerede funktionen for aggressivt på et netværk, som den vurderede som svagt eller af lav kvalitet.

## 7. Tjek 2,4 GHz i forhold til 5 GHz

2,4 GHz-båndet har længere rækkevidde og trænger bedre gennem vægge. 5 GHz-båndet er hurtigere tæt på routeren, men signalet falder hurtigere gennem vægge. En telefon på 5 GHz kan fungere perfekt i det næste rum og derefter få problemer i den anden ende af boligen.

Hvis routeren samler begge bånd under samme netværksnavn, kan du midlertidigt give dem separate navne, for eksempel HomeWiFi-2G og HomeWiFi-5G. Forbind telefonen til 2,4 GHz for bedre rækkevidde eller 5 GHz for højere hastighed.

Du kan som regel se det aktuelle bånd i oplysningerne om det tilsluttede Wi-Fi-netværk. Standard-Android kan vise frekvens eller forbindelseshastighed. Samsung viser lignende oplysninger på skærmen med indstillinger for Wi-Fi-netværket.

## 8. Tjek Privat DNS, før du ændrer statisk DNS

DNS-problemer kan få Wi-Fi til at se ud, som om det er gået i stykker. Telefonen siger, at den er forbundet, chatapps virker måske delvist, men websites går i stå eller kan ikke findes.

På Android 9 og nyere skal du kontrollere Indstillinger > Netværk og internet > Privat DNS. Hvis der er valgt en brugerdefineret udbyder, og Wi-Fi ikke virker, skal du midlertidigt vælge Automatisk eller Fra og teste igen.

Du kan bruge udbydere som `dns.google` eller `one.one.one.one`, men skriv værtsnavnet helt præcist. Et forkert værtsnavn til Privat DNS kan ødelægge navneopslag på både Wi-Fi og mobildata.

Undgå at ændre et Wi-Fi-netværk fra DHCP til Statisk, medmindre du kender den korrekte IP-adresse, gateway og undernetværksoplysninger. Statisk DNS kan hjælpe i bestemte tilfælde, men forkerte IP-oplysninger skaber et nyt problem, som ser værre ud end det oprindelige.

## 9. Nulstil netværksindstillingerne

Brug dette, når de enkelte løsninger ikke har virket. En netværksnulstilling rydder indstillinger for Wi-Fi, Bluetooth og mobilnetværk uden at slette fotos, apps eller filer.

Pixel og standard-Android: Indstillinger > System > Nulstil valg > Nulstil Bluetooth og Wi-Fi. På nogle versioner findes mobilnetværket som en separat nulstilling.

Samsung: Indstillinger > Generel administration > Nulstil > Nulstil netværksindstillinger.

Xiaomi: `Settings > Connection & sharing > Reset Wi-Fi, mobile networks, and Bluetooth`.

OnePlus: `Settings > System > Reset options > Reset Wi-Fi, mobile & Bluetooth`.

Du skal bagefter oprette forbindelse til Wi-Fi-netværk og parre Bluetooth-enheder igen.

## 10. Tjek dato og klokkeslæt

Forkert dato og klokkeslæt kan ødelægge certifikatkontrol, loginportaler på offentlige netværk og visse godkendelsesforløb. Det lyder næsten for enkelt, men det løser reelle problemer efter rejser, helt afladede batterier, manuelle ændringer af tidszone eller fejl under opsætningen af enheden.

Gå til Indstillinger > System > Dato og klokkeslæt, og slå automatisk klokkeslæt og tidszone til. På Samsung skal du bruge Indstillinger > Generel administration > Dato og tid.

## 11. Gennemgå randomisering af MAC-adressen på betroede netværk

Android 10 og nyere bruger randomiserede MAC-adresser for at beskytte privatlivet på Wi-Fi. Det er en fordel på offentlige netværk. Hjemme eller på arbejdet kan det forvirre routere, der bruger MAC-filtrering, reserverede IP-adresser, forældrekontrol eller en grænse for antal enheder.

Åbn oplysningerne om Wi-Fi-netværket, og se efter Privatliv eller typen af MAC-adresse. Hvis et betroet hjemmenetværk bliver ved med at afvise telefonen, kan du prøve Telefonens MAC-adresse eller Enhedens MAC-adresse kun på dette netværk. Behold randomiseret MAC-adresse på andre netværk.

## 12. Ret problemer på routersiden

Hvis flere enheder har problemer, skal du fokusere på routeren.

Brug kanal 1, 6 eller 11 på 2,4 GHz, og vælg den mindst belastede. Undgå at placere routeren bag et tv, inde i et skab, ved siden af en mikrobølgeovn, tæt på metalreoler eller på gulvet.

Hvis routeren bruger band steering, kan du prøve at deaktivere det eller opdele 2,4 GHz og 5 GHz i separate netværksnavne. Hvis den kun bruger WPA3, og en ældre telefon har problemer, kan du prøve blandet WPA2/WPA3-tilstand. Hvis routeren har en grænse for antal enheder, skal du hæve den eller fjerne gamle enheder.

I større boliger er et mesh-system som regel bedre end en billig Wi-Fi-forlænger. Forlængere kan virke, men de reducerer ofte hastigheden og skaber mærkelige problemer, når enheder skifter mellem adgangspunkter.

## 13. Efter Android 17 eller en anden stor opdatering

Android 17 blev først gjort tilgængelig på understøttede Pixel-enheder i juni 2026, mens andre producenter følger deres egne tidsplaner. Hvis Wi-Fi-problemerne begyndte umiddelbart efter opdateringen, skal du ikke automatisk gå ud fra, at routeren pludselig er gået i stykker.

Installer eventuelle efterfølgende sikkerhedsopdateringer, opdater operatør- og forbindelsesrelaterede apps gennem Play Butik, genstart telefonen og routeren, og glem derefter netværket og opret forbindelse igen. Hvis fejlen er udbredt på netop din model og buildversion, kan en månedlig opdatering være den egentlige løsning.

Ældre vejledninger anbefaler ofte at rydde systemets cachepartition. Det ville jeg ikke begynde med på moderne Android-telefoner. Nogle Samsung-modeller viser stadig cacheindstillinger i gendannelsestilstand, men mange nyere Android-enheder bruger ikke længere denne gamle fejlfindingsmetode på en måde, som brugeren kan regne med.

## 14. Test i sikker tilstand

Sikker tilstand starter Android uden de fleste tredjepartsapps. Hvis Wi-Fi fungerer normalt i sikker tilstand, er der en installeret app, som forstyrrer forbindelsen.

VPN-apps, firewallapps, annonceblokkere, værktøjer til enhedsadministration og såkaldte Wi-Fi-booster-apps er de sædvanlige mistænkte. Afinstaller eller deaktivér først de senest installerede netværksrelaterede apps.

## Hvornår du bør overveje en hardwarereparation

Hvis telefonen mister Wi-Fi på flere routere, stadig fejler efter en netværksnulstilling og i sikker tilstand, mens andre enheder fungerer normalt, bliver en hardwarefejl sandsynlig. Skader på antennen og fejl i Wi-Fi-chippen er usædvanlige, men de forekommer efter fald eller væskeskader.

På det tidspunkt bør du kun nulstille til fabriksindstillinger efter at have sikkerhedskopieret dine data. Hvis nulstillingen ikke hjælper, er reparation det ærlige næste skridt.

## Hurtige svar

Bør du slå Wi-Fi fra, når du forlader hjemmet? Som regel nej. Moderne Android håndterer scanning effektivt, og et aktivt Wi-Fi hjælper med kendte netværk og placeringsnøjagtighed.

Kan et cover forstyrre Wi-Fi? Normale covers gør ikke. Metalcovers, tykke battericovers eller magnetiske plader kan forringe modtagelsen, når signalet allerede er svagt.

Hvordan kontrollerer du Wi-Fi-signalstyrken i dBm? Nogle Android-versioner viser den i Wi-Fi-oplysningerne. Hvis din ikke gør, kan en Wi-Fi-analyseapp vise den. Omkring -30 til -50 dBm er fremragende, -50 til -70 dBm er brugbart til godt, og svagere end -70 dBm kan blive ustabilt afhængigt af interferens.

runcheck følger Wi-Fi-signalets kvalitet over tid på detaljeskærmen Netværk, herunder forbindelsesoplysninger som frekvensbånd, forbindelseshastighed og signalhistorik, når Android stiller dem til rådighed.
