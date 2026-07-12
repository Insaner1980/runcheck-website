---
title: "USB-C-lading forklart: watt, ampere og volt"
description: "Metabeskrivelse: Hva watt, ampere og volt betyr for lading av Android-telefoner, hvordan USB Power Delivery fungerer, og hvorfor ikke alle USB-C-ladere gir samme hastighet."
listSummary: "lading, batteri og android"
hub: "charging"
sourceNumber: 46
order: 10
tags: ["lading","batteri","android","guide","maskinvare"]
locale: "nb"
draft: false
---
Watt er tallet du bør bry deg om. Volt og ampere forklarer hvordan laderen kommer dit, men wattallet forteller hvor mye effekt som er tilgjengelig.

En lader som leverer 9 V ved 2 A, gir 18 W. En lader som leverer 20 V ved 3 A, gir 60 W. Regnestykket er enkelt: volt ganger ampere er lik watt.

Enkelt. Helt til USB-C-forhandlingen blander seg inn.

## Hva informasjonen på laderen betyr

De fleste USB-C-ladere oppgir flere kombinasjoner for utgangseffekt. Du kan for eksempel se noe slikt:

- 5 V / 3 A = 15 W
- 9 V / 3 A = 27 W
- 15 V / 3 A = 45 W
- 20 V / 3,25 A = 65 W

Dette er effektprofilene laderen kan tilby. Telefonen tar ikke automatisk den høyeste. Den ber om en profil den støtter, og laderen skifter til dette nivået.

Derfor ødelegger ikke en 100 W-lader til en bærbar datamaskin en telefon som støtter 18 W. Telefonen ber ikke om 100 W. Den velger en lavere profil eller går tilbake til vanlig lading hvis laderen og telefonen ikke blir enige om en bedre løsning.

## Slik fungerer forhandlingen med USB Power Delivery

USB Power Delivery, vanligvis forkortet til USB PD, er den viktigste åpne standarden for hurtiglading som brukes av mange Android-telefoner, nettbrett, bærbare datamaskiner og tilbehør.

Når du kobler til en USB-C-kabel, kommuniserer laderen og telefonen via Configuration Channel-pinnene. Laderen oppgir hvilke Power Data Objects, eller PDO-er, den støtter. Telefonen velger én av dem. Deretter leverer laderen spenning og strøm innenfor grensene de har avtalt.

En USB PD-lader på 45 W kan for eksempel tilby 5 V / 3 A, 9 V / 3 A, 15 V / 3 A og 20 V / 2,25 A. En telefon som støtter lading på 25 W, kan velge en profil nær 9 V. En bærbar datamaskin kan velge 20 V fra den samme adapteren.

Laderen presser ikke strøm inn i telefonen. Telefonen trekker det den kan bruke.

## Derfor er PPS viktig

Standard USB PD bruker faste spenningsnivåer, som 5 V, 9 V, 15 V og 20 V. PPS står for Programmable Power Supply og lar telefonen be om mindre justeringer av spenning og strøm innenfor området laderen har oppgitt.

Det er viktig fordi et litiumionbatteri ikke trenger samme spenning gjennom hele ladeøkten. De ideelle ladeforholdene endrer seg etter hvert som batteriet fylles. Med fast spenning må mer av omformingen skje inne i telefonen, og denne omformingen skaper varme. Med PPS kan laderen legge seg nærmere det telefonen trenger akkurat da.

Samsungs Super Fast Charging er avhengig av USB PD med PPS. Pixel-telefoner støtter også PPS. En vanlig USB PD-lader uten PPS kan fortsatt fungere, men den gir ikke nødvendigvis den beste lademodusen på disse telefonene.

## Quick Charge, VOOC, SUPERVOOC og HyperCharge

USB PD er det nærmeste Android kommer et felles ladespråk. Det er ikke det eneste språket.

Qualcomm Quick Charge var vanlig på Android-telefoner i mange år. Nyere Quick Charge-versjoner overlapper mer med USB PD, men eldre adaptere og telefoner kan fortsatt oppføre seg annerledes enn et rent USB PD-oppsett.

OPPO VOOC og OnePlus SUPERVOOC bruker en annen strategi. De sender ofte høy strøm gjennom en kompatibel lader og kabel, slik at mindre varme dannes inne i telefonen. Derfor kan disse systemene være svært raske, men også kresne. OnePlus opplyser at SUPERVOOC-hurtiglading krever en telefon og datakabel som støtter SUPERVOOC.

Xiaomi HyperCharge har lignende merkespesifikk oppførsel på mange modeller. En vanlig USB-C PD-lader vil som regel lade disse telefonene, men den oppgitte makshastigheten krever ofte den originale laderen eller en lader og kabel som støtter samme protokoll.

Samsungs navn skaper sin egen lille felle. Adaptive Fast Charging på eldre Samsung-telefoner er ikke det samme som Super Fast Charging på nyere modeller. Den nyere modusen bruker USB PD med PPS.

## Kabelens kapasitet er en del av fartsgrensen

Kabelen er en del av forhandlingen. Hvis du behandler den som en vanlig ledning, blir mye av ladeforvirringen vanskelig å forklare.

Mange USB-C-kabler er beregnet for 3 A. Ved 20 V er det nok til 60 W. Effekt over dette krever en 5 A-kabel med en e-marker-brikke, slik at laderen og enheten vet at kabelen tåler strømmen på en trygg måte.

USB-IFs sertifiseringsmerker blir stadig tydeligere. Sertifiserte USB-C-kabler merkes med effektklasser som 60 W eller 240 W, og raskere datakabler kan også vise en logo for datahastighet. Det er langt enklere enn å prøve å tolke et langt USB-versjonsnavn.

For telefoner er en god USB-C-kabel på 60 W nok i de fleste tilfeller. For bærbare datamaskiner, nettbrett og ladere med høy effekt kan en 240 W-kabel være nyttig. Med proprietære ladesystemer for telefoner kan den riktige kabelen fortsatt være viktigere enn wattallet som står trykt på den.

## Hvilken lader bør du kjøpe?

For mange Android-telefoner som bruker USB PD eller PPS, er en USB-C PD PPS-lader på 25-30 W nok. Den dekker normal hurtiglading for de fleste Pixel-telefoner og mange Samsung-modeller.

Har du en Samsung-modell som støtter lading på 45 W, bør du velge en PPS-lader som uttrykkelig støtter den riktige 45 W-profilen. Har du OnePlus, OPPO eller Xiaomi og vil ha den oppgitte makshastigheten, må du bruke laderen og kabelen som er laget for den aktuelle protokollen.

Det er helt greit å kjøpe en lader med høyere effekt enn telefonen støtter. Det skader ikke telefonen, og kan være nyttig hvis den samme adapteren også skal lade en bærbar datamaskin eller et nettbrett. Bare ikke forvent at en 100 W-lader skal lade en telefon på 25 W fire ganger raskere.

Det minst glamorøse rådet er også det beste: Velg riktig protokoll i stedet for å jage det største tallet.
