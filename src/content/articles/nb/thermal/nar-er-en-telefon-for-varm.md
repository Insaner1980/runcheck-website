---
title: "Når er en telefon for varm?"
description: "Android har ingen universell temperaturgrense. Målinger og varmereaksjoner varierer med sensor, enhet, belastning, lading og miljø; 0–35 °C for Pixel 7 og 7 Pro er bare et modellspesifikt eksempel på omgivelsestemperatur."
listSummary: "Telefonens temperatur avhenger av omgivelsesvarme, batteritemperatur, lading og belastning."
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["temperatur", "varme", "android", "feilsøking", "maskinvare"]
locale: "nb"
draft: false
---
Det finnes ikke ett Celsius-tall som betyr «for varmt» for alle telefoner. Omgivelsesluft, telefonens overflate, batteriet, prosessoren og Androids termiske status er ulike målinger. En grense for én måling må ikke presenteres som en grense for en annen.

## Bruk produsentens driftsområde

Det riktige tallområdet er det som er publisert for den nøyaktige modellen. Googles [sikkerhetsveiledning for Pixel 7 og Pixel 7 Pro](https://support.google.com/pixelphone/answer/12164747?hl=en) sier for eksempel at disse modellene ikke skal brukes eller lades under 0 °C eller over 35 °C omgivelsestemperatur. Det er en omgivelsesgrense for navngitte Pixel-modeller, ikke en universell Android-grense for batteri eller interne komponenter.

Andre produsenter og modeller kan oppgi andre drifts- og lagringsområder. Sjekk sikkerhetsveiledningen eller spesifikasjonen for nøyaktig modell, region og batteri.

## Androids termiske status er ikke et termometer

Androids [Thermal API](https://developer.android.com/games/optimize/adpf/thermal) rapporterer nivåer av termisk belastning slik at programvare kan redusere arbeidet. Den definerer ikke én Celsius-grense for all maskinvare. Struping, demping, langsommere lading, varsel eller avslåing kan være enhetens respons på egne sensorer og grenser.

En batteritemperatur fra en app er ikke det samme som overflate- eller omgivelsestemperatur. Tilgjengelighet og nøyaktighet for sensorer varierer også.

## Varme og langsiktig slitasje

En [fagfellevurdert oversikt over nedbryting av litium-ion-batterier](https://pubs.rsc.org/en/content/articlehtml/2021/cp/d1cp00359c) beskriver temperatur som én faktor. Det støtter å unngå gjentatt varme, men ikke tidligere universelle varslingssoner eller et reparasjonsvalg ved en bestemt Android-måling.

Korte belastningstopper og timer med vedvarende varme er ikke det samme. Telefonens oppførsel og produsentens varsler er viktigere enn en generell tabell.

## Hva du bør gjøre

Stopp tung bruk og koble fra laderen når telefonen viser temperaturvarsel, slutter å lade, slår seg av eller blir uvanlig ubehagelig å holde. Flytt den til skygge med lufting og la den kjøle naturlig. Ikke bruk vann, is, kjøleskap eller fryser.

Hvis varsler gjentar seg ved lett bruk, eller batteriet sveller, dekselet løfter seg, det lukter eller ryker, eller enheten har væske- eller synlig skade, slutter du å bruke den og søker hjelp.

## Praktisk svar

«For varmt» betyr utenfor den nøyaktige modellens dokumenterte forhold eller varmt nok til at enhetens egne vern griper inn. Ikke gjør Pixels omgivelsesgrense, en batteriapp-verdi, overflatevarme og Androids termiske status til én universell temperaturskala.
