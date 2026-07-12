---
title: "Hvad er en VPN, og påvirker den telefonens hastighed?"
description: "Metabeskrivelse: En enkel forklaring på, hvad en VPN gør på Android, hvordan den påvirker hastighed og batteritid, og hvornår det giver mening at bruge en."
listSummary: "netværk, forbindelser og android"
hub: "network"
sourceNumber: 99
order: 10
tags: ["netværk","forbindelser","android","fejlfinding","guide"]
locale: "da"
draft: false
---
En VPN ændrer den rute, som telefonens internettrafik følger. I stedet for at apps går direkte ud gennem Wi-Fi-netværket eller mobiloperatøren, sender telefonen først trafikken gennem en krypteret tunnel til en VPN-server. Websites og apps ser VPN-serverens IP-adresse, ikke telefonens normale offentlige IP-adresse.

Det lyder mere mystisk, end det er. En VPN er nyttig, men den er ikke et kraftfelt for privatlivet.

## Hvad en VPN faktisk skjuler

Når en VPN er aktiv, kan ejeren af Wi-Fi-netværket, hotspotudbyderen eller mobiloperatøren som regel se, at telefonen er forbundet til en VPN-server. De kan også se, hvor meget data der overføres. De bør ikke kunne se de enkelte websites og appdestinationer inde i tunnelen, forudsat at VPN-forbindelsen fungerer korrekt og også håndterer DNS-trafikken.

VPN-udbyderen befinder sig til gengæld nu i midten. Udbyderen kan se metadata om forbindelsen og kan, afhængigt af hvordan tjenesten er bygget, muligvis se mere. Derfor betyder valget af udbyder noget. En tvivlsom gratis VPN kan være værre for privatlivet end slet ingen VPN.

På Android kører en VPN-app som en vedvarende baggrundstjeneste. Du ser normalt et lille nøgleikon eller VPN-ikon i statuslinjen. Medmindre appen bruger split tunneling, går trafik fra browsere, apps og systemtjenester gennem VPN-tunnelen.

## Hvorfor en VPN kan gøre telefonen langsommere

Alle VPN-forbindelser tilføjer arbejde. Telefonen krypterer datapakkerne, sender dem til VPN-serveren, venter på at serveren videresender dem og modtager derefter svaret gennem den samme rute i modsat retning.

To ting ændrer sig:

- Forsinkelsen stiger. En VPN-server i nærheden tilføjer måske kun en lille forsinkelse. En server på den anden side af verden kan få browsing, spil og videoopkald til at føles træge.
- Gennemløbshastigheden kan falde. Kryptering tager behandlingstid, og VPN-serveren kan blive flaskehalsen, hvis den er travl eller ligger langt væk.

Med en god VPN, en server i nærheden og en moderne protokol bemærker du måske næsten ingen forskel under browsing eller beskeder. Med en fjern server, en overfyldt gratis server eller en ældre protokol kan nedgangen være tydelig.

Det er denne sammenligning, der betyder noget: En WireGuard-forbindelse til en server i dit eget land kan føles næsten normal, mens en OpenVPN TCP-forbindelse til en server 8.000 km væk kan få selv enkle sider til at føles tunge.

## Protokollen betyder noget

VPN-apps lader dig som regel vælge en protokol. Nogle skjuler protokollen bag navne som `Smart`, `Automatic` eller en tilstand med udbyderens eget navn.

WireGuard er den moderne standard, jeg ville prøve først, når VPN-appen understøtter den. Den har et mindre og enklere design end ældre protokoller og fungerer som regel godt på telefoner.

OpenVPN er ældre og bredt understøttet. Den er stadig nyttig, især på netværk der blokerer nyere protokoller, men den føles ofte langsommere. OpenVPN UDP er normalt hurtigere end OpenVPN TCP. TCP kan hjælpe på ustabile netværk, men tilføjer mere overhead.

IKEv2/IPsec er stadig almindelig på mobilenheder, fordi den håndterer skift mellem Wi-Fi og mobildata godt. Den kan være et fornuftigt kompromis, især til arbejds-VPN'er.

Hvis din VPN føles langsom, behøver du ikke straks skifte udbyder. Prøv først en server i nærheden og en anden protokol.

## Det ekstra batteriforbrug er reelt, men tallet varierer

En VPN kan bruge ekstra batteri, fordi telefonen holder en tunnel åben og krypterer trafikken. Der findes ikke én ærlig procent, som gælder for alle. Skærmens lysstyrke, signalstyrke, synkronisering i baggrunden, videostreaming og VPN-protokollen ændrer resultatet.

Ved let browsing og beskeder er det ekstra forbrug som regel så lille, at du ikke kan se det som en tydelig post i batteristatistikken. Streamer du video i flere timer gennem en VPN på svag mobildata, kan forskellen blive synlig.

Batterioptimering kan også ødelægge VPN-forbindelser. Nogle Android-versioner sætter baggrundsapps meget aggressivt på pause. Hvis din VPN bliver ved med at afbryde forbindelsen, skal du åbne appens batteriindstillinger og tillade ubegrænset brug i baggrunden. Den præcise ordlyd varierer efter mærke, men indstillingen ligger som regel under `Indstillinger > Apps > [VPN-app] > Batteri`.

## Konstant VPN og kill switch

Android 7.0 og nyere understøtter Always-on VPN, som i den danske Android-menu kaldes Konstant VPN. Android kan starte VPN-forbindelsen, når enheden tændes, og forsøge at holde den kørende, mens telefonen er i brug. Der findes også valget `Block connections without VPN`, der ofte kaldes en kill switch.

På Pixel og mange telefoner med standard-Android skal du se under `Indstillinger > Netværk og internet > VPN` og derefter trykke på tandhjulet ud for VPN-profilen. Samsung og Xiaomi placerer menuen andre steder, så søg efter `VPN` i Indstillinger, hvis du ikke kan finde den.

En kill switch er nyttig, men vær realistisk om ulempen. Hvis VPN-appen går ned, serveren ikke kan nås, eller batterisparefunktionen stopper appen, kan Android blokere al internettrafik, indtil VPN-forbindelsen vender tilbage. Det kan ligne ødelagt Wi-Fi, selv om Wi-Fi fungerer fint.

## Når en VPN kan gøre forbindelsen hurtigere

Det lyder bagvendt, men en VPN kan forbedre hastigheden i enkelte situationer.

Hvis et netværk begrænser bestemte trafiktyper, kan VPN-forbindelsen skjule, hvilken slags trafik der ligger inde i tunnelen. Netværket ser stadig krypterede data til en VPN-server, men kan måske ikke længere identificere en videostream, spilsession eller VoIP-samtale lige så let.

Det betyder ikke, at en VPN skaber båndbredde. Den kan ikke forvandle et svagt 4G-signal til en stærk 5G-forbindelse. Den kan ikke reparere en dårlig router. Den ændrer kun ruten og skjuler trafiktypen for det lokale netværk.

## Gratis VPN-tjenester fortjener ekstra mistanke

Gratis VPN-tjenester skal betale for deres servere på en eller anden måde. Nogle gør det gennem en betalingsversion. Andre bruger annoncer, dataindsamling, trafikgrænser, svag infrastruktur eller noget værre.

Proton VPNs gratis abonnement er en af de mere kendte undtagelser, fordi det tilbyder ubegrænset data, ingen annoncer og en politik om ikke at føre aktivitetslogs. Til gengæld er valget af servere mere begrænset end i betalingsabonnementerne. Det er den rimelige udgave af kompromiset.

Den dårlige udgave er en gratis VPN-app med uklart ejerskab, vidtgående tilladelser, ingen uafhængig kontrol, ingen tydelig forretningsmodel og en privatlivspolitik, der næsten intet siger. Installer ikke den slags på en telefon, du bruger til bank, arbejde eller private beskeder.

## Hvornår du bør bruge en VPN på Android

En VPN giver mest mening på offentligt Wi-Fi, hotelnetværk, i lufthavne og caféer, i deleboliger og på skole- eller arbejdsnetværk, hvor du ikke selv kontrollerer infrastrukturen. Den er også nyttig, hvis du vil skjule dine internetdestinationer for internetudbyderen eller mobiloperatøren på netværksniveau.

På dit eget Wi-Fi afhænger fordelen af, hvad du prioriterer. Hvis målet er at skjule for internetudbyderen, hvilke websites og tjenester du besøger, kan du lade VPN-forbindelsen være aktiv. Hvis målet er maksimal hastighed og lavest mulig forsinkelse til spil eller videoopkald, skal du slå den fra eller bruge split tunneling til de apps.

Split tunneling er værd at bruge. Lad følsom browsing, beskeder og trafik på ukendte Wi-Fi-netværk gå gennem VPN-forbindelsen. Lad apps, der ikke virker bag en VPN, for eksempel visse bankapps, gå uden om den.

## Hvad en VPN ikke beskytter imod

En VPN stopper ikke phishing. Den gør ikke en falsk bankside sikker. Den beskytter ikke en konto med en genbrugt adgangskode. Den fjerner ikke malware fra en telefon. Og den gør ikke en utroværdig VPN-udbyder troværdig.

Den beskytter ét lag: forbindelsens rute og privatlivet for trafikken mellem telefonen og VPN-serveren.

Det er nyttigt. Du skal bare ikke forvente, at den løser alle sikkerhedsopgaver.

## Hurtige svar

Skjuler en VPN min aktivitet for mobiloperatøren?

Den skjuler websites og appdestinationer inde i tunnelen for operatøren, men operatøren kan stadig se, at du bruger en VPN, og hvor meget data du overfører. Almindelige mobilopkald og SMS-beskeder går ikke gennem VPN-forbindelsen.

Kan en VPN få apps til at holde op med at virke?

Ja. Bankapps, streamingapps, arbejdsapps og visse spil kan blokere VPN-trafik eller behandle den som mistænkelig. Brug split tunneling, hvis kun én app har problemer.

Bør jeg lade den være aktiv hele tiden?

På offentlige netværk, ja. Hjemme afhænger det af, om privatliv eller hastighed er vigtigst. Test dine normale apps, før du aktiverer Konstant VPN sammen med `Block connections without VPN`.

Virker den på mobildata?

Ja. En VPN virker på både Wi-Fi og mobildata. På mobildata betyder svagt signal og trængsel hos operatøren stadig noget, så en VPN kan føles langsommere, fordi grundforbindelsen allerede kæmper.
