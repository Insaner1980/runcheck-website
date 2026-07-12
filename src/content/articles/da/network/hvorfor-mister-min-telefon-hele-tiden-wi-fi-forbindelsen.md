---
title: "Hvorfor mister min telefon hele tiden Wi-Fi-forbindelsen?"
description: "Den irriterende version er, når Wi-Fi virker i køkkenet, forsvinder i soveværelset, kommer tilbage i ti sekunder og derefter forsvinder igen. Intet ser tydeligt ødelagt ud. Routeren er tændt, adgangskoden er korrekt, og apps bliver ved med at give \"intet internet\" skylden."
listSummary: "netværk, forbindelser og android"
hub: "network"
sourceNumber: 95
order: 6
tags: ["netværk","forbindelser","android","fejlfinding","guide"]
locale: "da"
draft: false
---
Begynd med ét spørgsmål: Mister andre enheder på det samme Wi-Fi også forbindelsen? Hvis ja, skal du arbejde med routeren eller internetforbindelsen først. Hvis kun telefonen falder af, ligger problemet sandsynligvis i telefonen, dens gemte netværksprofil eller måden, den skifter mellem frekvensbånd på.

## Hvis flere enheder mister forbindelsen, så begynd med routeren

Genstart routeren, før du gør noget smart. Tag strømmen fra den, vent 30 sekunder, og tilslut den igen. Det rydder midlertidig tilstand, fornyer DHCP-leases og tvinger de tilsluttede enheder til at forhandle forbindelsen igen.

Hjemmeroutere kan opføre sig mærkeligt efter flere ugers drift. De kan løbe tør for hukommelse, beholde forældede enhedsoplysninger eller håndtere roaming dårligt efter en firmwareopdatering. En genstart er ikke en grundig løsning, men det er den hurtigste måde at skelne et midlertidigt routerproblem fra et reelt problem.

Hvis problemet vender tilbage, skal du åbne routerens administrationsside eller app. Se efter firmwareopdateringer, antallet af tilsluttede enheder og kanalindstillinger. Billige routere kan få problemer, når en husstand har 20 eller flere aktive klienter. Telefoner, bærbare computere, smart-tv'er, højttalere, kameraer, stik, ure og tablets tæller alle med.

2,4 GHz-båndet er en anden almindelig kilde til problemer. Det rækker længere end 5 GHz, men har langt færre rene kanaler. I travle etageejendomme kan flere routere konkurrere på de samme eller overlappende kanaler. Hvis du vælger en kanal manuelt, bør du holde dig til 1, 6 eller 11 på 2,4 GHz og vælge den mindst belastede af dem.

## Hvis kun telefonen mister forbindelsen

Glem netværket, og opret forbindelse igen. På Pixel og Android-telefoner med en standardlignende brugerflade skal du gå til **Indstillinger > Netværk og internet > Internet**, åbne indstillingerne for Wi-Fi-netværket og vælge **Glem**. På Samsung går du normalt til **Indstillinger > Forbindelser > Wi-Fi**, åbner netværkets indstillinger og vælger **Glem**. Opret derefter forbindelse igen med adgangskoden.

Det rydder den gemte profil. Det hjælper efter ændringer af routeren eller adgangskoden, skift mellem WPA2 og WPA3 og situationer, hvor Android bliver ved med at genbruge forældede forbindelsesoplysninger.

Kontrollér også, om telefonen hopper over på et andet gemt netværk. Det er mindre almindeligt, end mange tror, men det sker omkring åbne netværk, rækkeviddeforlængere, gæstenetværk og gamle netværk fra arbejde eller caféer. Fjern netværk, du ikke længere bruger. Du behøver ikke et museum over alle hotspots, telefonen nogensinde har mødt.

## Batteriindstillinger kan få apps til at se afbrudte ud

Androids Doze- og batterisparefunktioner kan forsinke netværksaktivitet i baggrunden, når telefonen ikke bruges. Det betyder normalt ikke, at selve Wi-Fi-forbindelsen bliver slået fra, men beskedapps, sikkerhedskopiering, VPN og smarthome-apps kan opføre sig, som om forbindelsen er forsvundet.

Nogle producenter er mere aggressive end andre. Xiaomi, OPPO, vivo og visse OnePlus-versioner kan begrænse baggrundsaktivitet hårdere end Pixel. Samsung har grænser for baggrundsforbrug og strømbesparende Wi-Fi-funktioner, som også kan ændre telefonens adfærd, når den ikke bruges.

Hvis afbrydelserne sker, mens skærmen er slukket, skal du først undersøge den berørte app. Tillad ubegrænset batteribrug for appen, eller fjern den fra lister over apps, der sættes i dvale. Deaktivér ikke alle batterifunktioner på hele telefonen, medmindre du gerne vil oplade oftere.

## Intelligent skift kan være for intelligent

Moderne Android-telefoner kan skifte fra Wi-Fi til mobildata, når Wi-Fi-signalet virker svagt eller ikke har internetadgang. Nyttigt i teorien. I praksis kan et lidt langsomt Wi-Fi-netværk føles ustabilt, fordi telefonen hele tiden beslutter, at den ved bedre.

På Pixel kan du se under **Indstillinger > Netværk og internet > Selvjusterende forbindelse**. Nogle versioner viser også en funktion til automatisk skift under internetindstillingerne. På Samsung skal du åbne Wi-Fi-indstillingerne og se under **Intelligent Wi-Fi** efter funktionen, der skifter til mobildata.

Slå funktionen fra i en dag, hvis telefonen mister Wi-Fi, selv om andre enheder bliver på netværket. Hvis problemet stopper, har du fundet årsagen.

## Band steering og roaming i mesh-netværk

Mange routere bruger det samme netværksnavn til 2,4 GHz og 5 GHz. Routeren og telefonen beslutter derefter, hvilket bånd der skal bruges. Det kaldes band steering. Gode routere håndterer det ubemærket. Dårlige routere skubber telefonen frem og tilbage, indtil forbindelsen føles ødelagt.

En hurtig test er midlertidigt at give de to bånd forskellige navne og derefter forbinde telefonen til ét af dem. Brug 2,4 GHz over større afstande og gennem vægge. Brug 5 GHz for højere hastighed tæt på routeren.

Mesh-systemer tilføjer endnu et lag. Hvis telefonen holder fast i et svagt mesh-punkt i stedet for at skifte til det nærmeste, vil du opleve afbrydelser, mens du bevæger dig gennem boligen. Firmwareopdateringer til routeren forbedrer ofte dette, men placeringen betyder også noget. Et mesh-punkt gemt bag et tv eller inde i et skab beder om problemer.

## Signalstyrke og placering

Wi-Fi bliver svagere med afstand og forhindringer. En telefon, der virker tæt på routeren, men mister forbindelsen to rum væk, er sandsynligvis ikke ødelagt. Den modtager bare et svagt eller støjfyldt signal.

Som en grov vejledning er Wi-Fi omkring -50 dBm stærkt, -60 dBm er fint, og under -70 dBm kan stabiliteten begynde at lide. Under -80 dBm er periodiske afbrydelser ikke overraskende.

Flyt routeren væk fra gulvet, tykke vægge, metalhylder, akvarier og mikrobølgeovne. Stil den så tæt på boligens centrum som muligt. I større boliger er et ordentligt mesh-system som regel bedre end en billig rækkeviddeforlænger, fordi forlængere ofte reducerer hastigheden og tilføjer endnu et sted, hvor roaming kan gå galt.

## Sikkerhedsindstillinger kan give problemer på én enhed

WPA3 er den aktuelle sikkerhedsstandard til Wi-Fi, men ældre telefoner og ældre routerfirmware kan have problemer med netværk, der kun bruger WPA3. Hvis én Android-telefon mister forbindelsen til et WPA3-netværk, mens alt andet virker, kan du prøve blandet WPA2/WPA3-tilstand.

Kontrollér også MAC-filtrering, forældrekontrol og routerens enhedsgrænser. Hvis routeren bruger en liste over tilladte MAC-adresser, kan Androids randomiserede MAC-adresse få telefonen til at ligne en ny enhed. På et betroet hjemmenetværk kan du indstille det pågældende netværk til at bruge telefonens eller enhedens MAC-adresse i netværkets privatlivsindstillinger. Behold en randomiseret MAC-adresse på offentlige netværk.

## Softwareopdateringer, herunder Android 17

Større Android-opdateringer kan introducere forbindelsesfejl. De kan også afsløre gamle routerfejl, der allerede fandtes. Android 17 blev først udgivet til understøttede Pixel-enheder i juni 2026, mens andre producenter udsender den senere gennem deres egne softwareversioner. En Pixel-specifik tråd om Android 17 gælder derfor ikke nødvendigvis for en Samsung-, Xiaomi- eller OnePlus-telefon, som endnu ikke har fået producentens Android 17-version.

Hvis Wi-Fi begyndte at falde ud lige efter en opdatering, skal du først gennemgå de kedelige trin: Genstart telefonen, genstart routeren, installér eventuelle ventende Google Play-systemopdateringer eller månedlige sikkerhedsopdateringer, og glem netværket. Nulstil derefter netværksindstillingerne, hvis det er nødvendigt.

På nyere Pixel-telefoner finder du Wi-Fi- og Bluetooth-nulstillingen under **Indstillinger > System > Nulstil valg > Nulstil Bluetooth og Wi-Fi**. Mobilnetværket nulstilles separat. På Samsung bruges **Indstillinger > Generel administration > Nulstil > Nulstil netværksindstillinger**. Det sletter gemte Wi-Fi-netværk, Bluetooth-parringer og tilpassede mobilnetværksindstillinger, så hav dine Wi-Fi-adgangskoder klar.

## Hvornår det kan være hardware

Hardware er den sidste mistænkte, ikke den første. Men det forekommer. Tab, vandskade, slidte antenner og skader på printkortet kan få Wi-Fi til at svigte, selv om andre radioforbindelser ser normale ud.

Test telefonen på et andet Wi-Fi-netværk. Test derefter i Sikker tilstand. Hvis telefonen bliver på netværket i Sikker tilstand, er det sandsynligvis en tredjepartsapp, der forstyrrer. VPN-apps, annonceblokering, firewallapps, enhedsadministration og tvivlsomme Wi-Fi-optimeringsapps er almindelige mistænkte.

Hvis telefonen mister forbindelsen til flere routere, stadig gør det efter en nulstilling af netværksindstillingerne og også mister forbindelsen i Sikker tilstand, bliver professionel reparation eller udskiftning et realistisk svar.

## Hurtige svar

Hvorfor forsvinder Wi-Fi kun, når skærmen er slukket? Som regel skyldes det appens batteribegrænsninger, VPN-adfærd eller producentens strømbesparelse. Wi-Fi-radioen kan stadig være forbundet, mens appen ikke får lov til at arbejde i baggrunden.

Kan et telefoncover give Wi-Fi-afbrydelser? Et normalt cover af plast, silikone eller læder betyder ikke meget. Metalcovers eller magnetiske plader kan svække signalet, især når forbindelsen allerede er svag.

Hvorfor virker kun ét Wi-Fi-netværk ikke? Det peger på routerens konfiguration eller en beskadiget gemt profil. Glem netværket, opret forbindelse igen, og kontrollér derefter band steering, WPA-tilstand, MAC-filtrering og routerens firmware.
