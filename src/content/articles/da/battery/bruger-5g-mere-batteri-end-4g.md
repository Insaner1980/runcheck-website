---
title: "Bruger 5G mere batteri end 4G?"
description: "Metabeskrivelse: 5G kan bruge mere batteri end 4G LTE, men forskellen afhænger af signalstyrken, netværkstypen og telefonens modem. Her kan du se, hvornår 5G betyder noget, og hvornår LTE er det bedre valg for batteriet."
listSummary: "batteri, strømforbrug og fejlfinding"
hub: "battery"
sourceNumber: 28
order: 18
subgroup: "Drain"
tags: ["batteri", "strømforbrug", "fejlfinding", "android", "ydeevne"]
locale: "da"
draft: false
---
Der findes ikke én universel procentsats for, hvor meget hurtigere 5G bruger batteriet end 4G. Resultatet afhænger af telefon, modem, netværkstilstand, frekvensbånd, signal, trafik og brug. Det tidligere kvantitative tal kunne ikke spores til en stabil originalrapport fra Ookla og er derfor fjernet.

## Det viser direkte målinger

En [måleundersøgelse fra 2020 af første generation af kommerciel 5G](https://www.cs.princeton.edu/courses/archive/spring21/cos563/papers/5G_measurement.pdf) målte klart højere radioeffekt end 4G på de testede enheder og netværk. Det er direkte dokumentation for netop de testforhold, ikke et aktuelt universelt forhold for alle Android-telefoner.

Nyere enheder, netværk og firmware kan opføre sig anderledes. Et resultat fra én telefon, operatør, placering eller periode må ikke gøres til et løfte om en anden konfiguration.

## Signal og netværkstilstand betyder noget

Androids [SignalStrength-dokumentation](https://developer.android.com/reference/android/telephony/SignalStrength) beskriver, hvordan software rapporterer mobilsignalets niveau. Den måler ikke batteriforbrug. Svag eller ustabil tjeneste kan hænge sammen med mere radioarbejde, men signalniveauet alene viser ikke, hvor meget batteri 5G eller LTE bruger.

NSA- og SA-5G, lave, mellemste og høje frekvenser, carrier aggregation og modemimplementering kan alle ændre adfærden. Ingen af betegnelserne beviser, at 5G altid bruger mere eller mindre strøm på din telefon.

## Sådan afgør du det på din telefon

Sammenlign lignende dage på samme sted eller rute med omtrent de samme apps og den samme skærmtid over flere normale dage i automatisk 5G- og LTE-tilstand, hvis valget findes. Kontrollér batteriforbruget, og notér skift i dækning, varme og mobilnetaktivitet.

Menunavne og tilgængelighed varierer efter producent, model, operatør, region og Android-version. Pixel-funktioner som Selvjusterende forbindelse er Pixel-funktioner, ikke universelle Android-kontroller.

## Praktisk svar

5G kan bruge mere strøm end LTE under visse forhold, og direkte undersøgelser har målt det på bestemte enheder og netværk. Under andre forhold kan forskellen være lille. Behold automatisk tilstand, når den fungerer godt. Prøv LTE midlertidigt ved ustabil dækning eller når batteritid er vigtigere end maksimal netværksydelse, og vurder resultatet på din egen enhed.
