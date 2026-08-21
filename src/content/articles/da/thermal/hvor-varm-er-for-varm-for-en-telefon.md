---
title: "Hvor varm er for varm for en telefon?"
description: "Hvor varm er for varm? Det irriterende svar er, at det afhænger af, hvilken temperatur du måler."
listSummary: "Hvor varm er for varm?"
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["temperatur", "varme", "android", "fejlfinding", "hardware"]
locale: "da"
draft: false
---
Der findes ikke ét Celsius-tal, der betyder “for varm” for alle telefoner. Omgivelsesluft, telefonens overflade, batteriet, processoren og Androids termiske status er forskellige målinger. En grænse for én måling må ikke præsenteres som en grænse for en anden.

## Brug producentens driftsområde

Det rigtige talområde er det, der er offentliggjort for den præcise model. Googles [sikkerhedsvejledning til Pixel 7 og Pixel 7 Pro](https://support.google.com/pixelphone/answer/12164747?hl=en) siger for eksempel, at disse modeller ikke må bruges eller oplades under 0 °C eller over 35 °C omgivelsestemperatur. Det er en omgivelsesgrænse for navngivne Pixel-modeller, ikke en universel Android-grænse for batteri eller interne komponenter.

Andre producenter og modeller kan angive andre drifts- og opbevaringsområder. Kontrollér sikkerhedsvejledningen eller specifikationen for den præcise model, region og batteri.

## Androids termiske status er ikke et termometer

Androids [Thermal API](https://developer.android.com/games/optimize/adpf/thermal) rapporterer niveauer af termisk belastning, så software kan reducere arbejdet. Den definerer ikke én Celsius-grænse for al hardware. Begrænsning, dæmpning, langsommere opladning, advarsel eller nedlukning kan være enhedens reaktion på egne sensorer og grænser.

En batteritemperatur fra en app er ikke det samme som overflade- eller omgivelsestemperatur. Sensorers tilgængelighed og nøjagtighed varierer også.

## Varme og langvarigt slid

En [fagfællebedømt gennemgang af nedbrydning i litium-ion-batterier](https://pubs.rsc.org/en/content/articlehtml/2021/cp/d1cp00359c) nævner temperatur som en faktor. Det støtter at undgå gentagen varme, men ikke tidligere universelle advarselszoner eller en reparationsbeslutning ved en bestemt Android-værdi.

Korte belastningstoppe og timevis vedvarende varme er ikke det samme. Telefonens adfærd og producentens advarsler er vigtigere end en generel tabel.

## Hvad du skal gøre

Stop krævende brug og frakobl opladeren, når telefonen viser temperaturadvarsel, holder op med at oplade, slukker eller bliver usædvanligt ubehagelig at holde. Flyt den til skygge med ventilation og lad den køle naturligt. Brug ikke vand, is, køleskab eller fryser.

Hvis advarsler gentager sig ved let brug, eller batteriet hæver, coveret løfter sig, der kommer lugt eller røg, eller enheden har væske- eller synlig skade, skal du stoppe brugen og søge hjælp.

## Praktisk svar

“For varm” betyder uden for den præcise models dokumenterede forhold eller varm nok til, at enhedens egne værn griber ind. Gør ikke Pixel-omgivelsesgrænser, appens batteriværdi, overfladevarme og Androids termiske status til én universel temperaturskala.
