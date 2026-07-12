---
title: "Hvorfor mister telefonen stadig wifi-tilkoblingen?"
description: "Den irriterende varianten er når wifi virker på kjøkkenet, faller ut på soverommet, kobler seg til igjen i ti sekunder og så forsvinner på nytt. Ingenting ser åpenbart ødelagt ut. Ruteren er på, passordet er riktig, og andre apper fortsetter å skylde på «ingen internettforbindelse»."
listSummary: "nettverk, tilkobling og android"
hub: "network"
sourceNumber: 95
order: 6
tags: ["nettverk","tilkobling","android","feilsøking","guide"]
locale: "nb"
draft: false
---
Start med ett spørsmål: kobles andre enheter på samme wifi-nettverk også fra? Hvis svaret er ja, bør du arbeide med ruteren eller internettforbindelsen først. Hvis bare telefonen faller ut, ligger problemet sannsynligvis i telefonen, den lagrede nettverksprofilen eller måten den beveger seg mellom frekvensbånd på.

## Hvis flere enheter kobles fra, mistenk ruteren først

Start ruteren på nytt før du gjør noe avansert. Trekk ut strømmen, vent i 30 sekunder og koble den til igjen. Dette fjerner midlertidige tilstander, fornyer DHCP-leier og tvinger tilkoblede enheter til å forhandle forbindelsen på nytt.

Hjemmerutere kan begynne å oppføre seg merkelig etter flere uker uten omstart. De kan gå tomme for minne, beholde utdaterte enhetsoppføringer eller håndtere roaming dårlig etter en fastvareoppdatering. En omstart er ingen dyp reparasjon, men den er den raskeste måten å skille et midlertidig ruterproblem fra et reelt problem.

Hvis problemet kommer tilbake, åpner du administrasjonssiden eller appen til ruteren. Se etter fastvareoppdateringer, antall tilkoblede enheter og kanalinnstillinger. Rimelige rutere kan slite når et hjem har 20 eller flere aktive klienter. Telefoner, bærbare PC-er, smart-TV-er, høyttalere, kameraer, stikkontakter, klokker og nettbrett teller alle sammen.

2,4 GHz-båndet er en annen vanlig problemkilde. Det når lenger enn 5 GHz, men har langt færre rene kanaler. I travle boligblokker kan flere rutere konkurrere på samme eller overlappende kanaler. Hvis du velger kanal manuelt, bør du holde deg til 1, 6 eller 11 på 2,4 GHz og velge den minst belastede av dem.

## Hvis bare telefonen kobles fra

Glem nettverket og koble til på nytt. På Pixel og Android med et grensesnitt nær standard Android går du til **Innstillinger > Nettverk og internett > Internett**, trykker på tannhjulet ved wifi-nettverket og velger **Glem**. På Samsung åpner du wifi-innstillingene under **Innstillinger > Tilkoblinger > Wi-Fi**, trykker på tannhjulet ved nettverket og velger alternativet for å glemme det. Koble til igjen med passordet.

Dette sletter den lagrede profilen. Det hjelper etter endringer i ruteren, nytt passord, overgang mellom WPA2 og WPA3 og tilfeller der Android fortsetter å bruke utdaterte tilkoblingsopplysninger.

Sjekk også om telefonen hopper til et annet lagret nettverk. Det er mindre vanlig enn mange tror, men skjer rundt åpne nettverk, rekkeviddeforlengere, gjestenettverk og gamle nettverk fra jobb eller kafé. Fjern nettverk du ikke bruker lenger. Du trenger ikke et museum over alle trådløse soner telefonen noen gang har møtt.

## Batteriinnstillinger kan få apper til å virke frakoblet

Android-funksjonene Doze og Batterisparing kan forsinke nettverksaktivitet i bakgrunnen når telefonen ikke brukes. Det betyr vanligvis ikke at selve wifi-forbindelsen slås av, men meldingsapper, sikkerhetskopiering, VPN-er og smarthjemapper kan oppføre seg som om forbindelsen har forsvunnet.

Noen produsenter er mer aggressive enn andre. Xiaomi, OPPO, vivo og enkelte OnePlus-versjoner kan begrense bakgrunnsaktivitet hardere enn Pixel. Samsung har også grenser for bakgrunnsbruk og strømsparing for wifi som kan endre hvordan telefonen oppfører seg når den ligger ubrukt.

Hvis forbindelsen ser ut til å falle ut når skjermen er av, bør du undersøke den berørte appen først. Gi den ubegrenset batteribruk eller fjern den fra lister over apper som settes i dvale. Ikke slå av alle batterifunksjoner for hele telefonen med mindre du liker å lade oftere.

## Smart bytting kan bli for smart

Moderne Android-telefoner kan bytte fra wifi til mobildata når wifi-signalet virker svakt eller nettverket ikke har internettilgang. Nyttig i teorien. I praksis kan et litt tregt wifi-nettverk føles ustabilt fordi telefonen stadig bestemmer seg for at den vet bedre.

På Pixel kan du sjekke **Innstillinger > Nettverk og internett > Adaptive Connectivity**. Enkelte versjoner viser også et valg for automatisk bytting i Internett-innstillingene. På Samsung finner du tilsvarende valg i menyen **Intelligent Wi-Fi** under wifi-innstillingene. Se etter valget som bytter til mobildata.

Slå av funksjonen i én dag hvis telefonen forlater wifi selv om andre enheter holder seg tilkoblet. Hvis problemet stopper, har du funnet årsaken.

## Båndstyring og roaming i mesh-nettverk

Mange rutere bruker ett nettverksnavn for både 2,4 GHz og 5 GHz. Ruteren og telefonen avgjør deretter hvilket bånd som skal brukes. Dette kalles båndstyring. Gode rutere håndterer det uten at du merker noe. Dårlige rutere skyver telefonen fram og tilbake til forbindelsen føles ødelagt.

En rask test er å skille båndene midlertidig. Gi 2,4 GHz og 5 GHz forskjellige navn, og koble telefonen til ett av dem. Bruk 2,4 GHz for større avstand og flere vegger. Bruk 5 GHz for høyere hastighet nær ruteren.

Mesh-systemer legger til enda et lag. Hvis telefonen klamrer seg til et svakt mesh-punkt i stedet for å flytte til det nærmeste, kan forbindelsen falle ut mens du går gjennom boligen. Fastvareoppdateringer til ruteren forbedrer ofte dette, men plasseringen betyr også mye. Et mesh-punkt gjemt bak en TV eller inne i et skap ber om problemer.

## Signalstyrke og plassering

Wifi blir svakere med avstand og hindringer. En telefon som virker nær ruteren, men faller ut to rom lenger unna, er sannsynligvis ikke ødelagt. Den mottar bare et svakt eller støyende signal.

Som en grov veiledning er wifi rundt -50 dBm sterkt, -60 dBm greit, og under -70 dBm kan stabiliteten begynne å lide. Under -80 dBm er sporadiske brudd ikke overraskende.

Flytt ruteren opp fra gulvet og bort fra tykke vegger, metallhyller, akvarier og mikrobølgeovner. Plasser den nær midten av boligen hvis det er mulig. I større boliger er et ordentlig mesh-system vanligvis bedre enn en billig rekkeviddeforlenger, fordi forlengere ofte halverer kapasiteten og legger til enda et roamingpunkt.

## Sikkerhetsinnstillinger kan gi problemer på én enhet

WPA3 er den gjeldende sikkerhetsstandarden for wifi, men eldre telefoner og eldre ruterfastvare kan være ustabile på nettverk som bare bruker WPA3. Hvis én Android-telefon kobles fra et WPA3-nettverk mens alt annet fungerer, kan du prøve blandet WPA2/WPA3-modus.

Sjekk også MAC-filtrering, foreldrekontroll og grensen for antall enheter i ruteren. Hvis ruteren bruker en hviteliste basert på MAC-adresser, kan Androids randomiserte MAC-funksjon se ut som en ny enhet. På et pålitelig hjemmenettverk kan du endre personverninnstillingen for akkurat dette nettverket til **Phone MAC** eller **Device MAC**. Behold randomisert MAC på offentlige nettverk.

## Programvareoppdateringer, også Android 17

Store Android-oppdateringer kan introdusere tilkoblingsfeil. De kan også avdekke gamle ruterfeil som allerede fantes. Android 17 ble lansert først for Pixel-enheter som støttes i juni 2026, mens andre produsenter sender det ut senere gjennom sine egne programvareversjoner. En Pixel-spesifikk tråd om Android 17 gjelder derfor ikke nødvendigvis en Samsung-, Xiaomi- eller OnePlus-telefon som ennå ikke har fått sin Android 17-versjon.

Hvis wifi begynte å falle ut rett etter en oppdatering, gjør du de kjedelige kontrollene først: start telefonen og ruteren på nytt, installer eventuelle ventende Google Play-systemoppdateringer eller månedlige sikkerhetsoppdateringer, og glem nettverket. Tilbakestill deretter nettverksinnstillingene hvis det er nødvendig.

På Pixel og mange Android-telefoner finner du valgene under **Innstillinger > System > Alternativer for tilbakestilling**. Nettverkstilbakestillingen kan hete **Tilbakestill wifi, mobil og Bluetooth**, eller være delt i separate valg for wifi/Bluetooth og mobilnettverk. På Samsung bruker du **Innstillinger > Generell styring > Nullstill > Nullstill nettverksinnstillinger**. Dette sletter lagrede wifi-nettverk, Bluetooth-sammenkoblinger og egne mobilnettinnstillinger, så ha wifi-passordene klare.

## Når det kan være maskinvaren

Maskinvaren er den siste mistenkte, ikke den første. Men feil skjer. Fall, vannskade, aldrende antenner og skade på kretskortet kan få wifi til å svikte selv om andre radioforbindelser fortsatt ser normale ut.

Test telefonen på et annet wifi-nettverk. Test deretter i sikkermodus. Hvis telefonen holder forbindelsen i sikkermodus, er det sannsynligvis en tredjepartsapp som forstyrrer. VPN-er, annonseblokkere, brannmurapper, apper for enhetsadministrasjon og tvilsomme wifi-optimaliseringsapper er vanlige mistenkte.

Hvis telefonen faller ut på flere rutere, fortsatt gjør det etter tilbakestilling av nettverksinnstillingene og også faller ut i sikkermodus, blir profesjonell reparasjon eller utskifting et realistisk svar.

## Korte svar

Hvorfor faller wifi ut bare når skjermen er av? Vanligvis skyldes det batteribegrensninger for appen, VPN-oppførsel eller strømsparing fra produsenten. Wifi-radioen kan fortsatt være tilkoblet, men appen får ikke fortsette å arbeide i bakgrunnen.

Kan et telefondeksel føre til wifi-brudd? Et vanlig deksel av plast, silikon eller skinn betyr lite. Metalldeksler eller magnetplater kan svekke signalet, særlig når forbindelsen allerede er svak.

Hvorfor svikter bare ett wifi-nettverk? Det peker mot ruteroppsettet eller en ødelagt lagret profil. Glem nettverket, koble til igjen, og sjekk deretter båndstyring, WPA-modus, MAC-filtrering og ruterens fastvare.
