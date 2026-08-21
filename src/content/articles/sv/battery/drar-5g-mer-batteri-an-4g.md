---
title: "Drar 5G mer batteri än 4G?"
description: "5G kan använda mer batteri än 4G LTE, men skillnaden beror på signalstyrkan, nätverkstypen och telefonens modem. Här är lägena där 5G spelar roll och när LTE är det bättre valet för batteritiden."
listSummary: "batteri, batteriförbrukning och felsökning"
hub: "battery"
sourceNumber: 28
order: 18
subgroup: "Drain"
tags: ["batteri", "batteriförbrukning", "felsökning", "android", "prestanda"]
locale: "sv"
draft: false
---
Det finns ingen allmän procentsats för hur mycket snabbare 5G tömmer batteriet än 4G. Resultatet beror på telefon, modem, nätläge, frekvensband, signal, trafik och användning. Den tidigare kvantitativa siffran kunde inte spåras till en stabil ursprunglig Ookla-rapport och har därför tagits bort.

## Vad direkta mätningar visar

En [mätstudie från 2020 av första generationens kommersiella 5G](https://www.cs.princeton.edu/courses/archive/spring21/cos563/papers/5G_measurement.pdf) mätte klart högre radioeffekt än 4G i de testade enheterna och näten. Det är direkt belägg för just de testförhållandena, inte ett aktuellt allmänt förhållande för alla Android-telefoner.

Nyare enheter, nät och firmware kan bete sig annorlunda. Ett resultat från en telefon, operatör, plats eller tidpunkt får inte göras till ett löfte om en annan konfiguration.

## Signal och nätläge spelar roll

Androids [dokumentation om SignalStrength](https://developer.android.com/reference/android/telephony/SignalStrength) beskriver hur programvara rapporterar mobilsignalens nivå. Den mäter inte batteriförbrukning. Svag eller instabil tjänst kan sammanfalla med mer radioarbete, men signalnivån ensam visar inte hur mycket batteri 5G eller LTE använder.

NSA- och SA-5G, låga, mellersta och höga frekvenser, carrier aggregation och modemets implementation kan alla ändra beteendet. Ingen av beteckningarna bevisar att 5G alltid använder mer eller mindre ström i din telefon.

## Så avgör du på din telefon

Jämför likvärdiga dagar på samma plats eller rutt, med ungefär samma appar och skärmtid, under flera normala dagar i automatiskt 5G-läge och LTE-läge om valet finns. Kontrollera batterianvändningen och notera täckningsbyten, värme och mobilnätsaktivitet.

Menynamn och tillgänglighet varierar med tillverkare, modell, operatör, region och Android-version. Pixel-funktioner som Adaptiv anslutning är Pixel-funktioner, inte allmänna Android-reglage.

## Praktiskt svar

5G kan använda mer ström än LTE under vissa förhållanden, och direkta studier har mätt detta på bestämd hårdvara och bestämda nät. Under andra förhållanden kan skillnaden vara liten. Behåll automatiskt läge när det fungerar bra. Prova LTE tillfälligt vid instabil täckning eller när batteritid är viktigare än topprestanda, och bedöm resultatet på din egen enhet.
