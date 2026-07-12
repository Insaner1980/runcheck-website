---
title: "Så kontrollerar du mobilens signalstyrka (dBm förklarat)"
description: "Signalstaplarna fungerar för en snabb blick, men de är inget mätvärde. En telefon kan visa fyra staplar där en annan visar två, trots att båda använder samma operatör i samma rum. Vill du se den riktiga siffran ska du leta efter signalstyrkan i dBm."
listSummary: "Signalstaplarna fungerar för en snabb blick, men de är inget mätvärde."
hub: "network"
sourceNumber: 93
order: 4
tags: ["nätverk","anslutningar","android","felsökning","guide"]
locale: "sv"
draft: false
---
Det låter mer tekniskt än det är. dBm beskriver helt enkelt den effektnivå som telefonen tar emot från mobilnätet. Ju närmare noll värdet ligger, desto starkare är signalen. -75 dBm är alltså starkare än -95 dBm. Så enkelt är det.

## Så tolkar du dBm snabbt

Mobilsignal visas som ett negativt tal eftersom telefonen mäter mycket små mängder radioeffekt. Vid normal användning ser du vanligtvis något mellan ungefär -50 dBm och -120 dBm. Nära en basstation kan värdet närma sig -50 dBm. Djupt inne i en betongbyggnad, i en källare eller i utkanten av täckningsområdet kan det hamna runt -110 dBm eller lägre.

Skalan är logaritmisk. Varje skillnad på 3 dBm motsvarar ungefär en fördubbling eller halvering av den mottagna effekten. -80 dBm är därför inte bara lite bättre än -86 dBm. Effekten är ungefär fyra gånger starkare. Ja, faktiskt.

För LTE och de flesta 5G-anslutningar under 6 GHz är följande intervall användbara som tumregel:

| Värde | Vad det vanligtvis betyder |
|---|---|
| -50 till -70 dBm | Utmärkt. Samtal och data bör vara stabila, förutsatt att basstationen inte är överbelastad. |
| -70 till -85 dBm | Bra. Det här är normalt för hygglig täckning utomhus eller nära ett fönster. |
| -85 till -100 dBm | Användbart, men inte särskilt bra. Webbsurfning fungerar, strömning kan buffra och uppladdningshastigheten försämras ofta först. |
| -100 till -110 dBm | Svagt. Samtal kan brytas, meddelanden kan fördröjas och modemet använder mer ström för att hålla anslutningen. |
| Under -110 dBm | På gränsen. Räkna med timeout, korta stunder utan tjänst eller att telefonen tvingas växla till en annan nätverkstyp. |

Det här är inga universella gränser för godkänt eller underkänt. En telefon på -95 dBm kan fungera bra om signalen är ren och basstationen har ledig kapacitet. En annan telefon på -75 dBm kan gå långsamt om cellen är överbelastad eller störningarna är kraftiga.

## Så kontrollerar du signalstyrkan på Android

Den exakta menyn varierar mellan tillverkare, Android-versioner och operatörsanpassningar. Det snabbaste sättet är ofta att öppna Inställningar och söka efter "SIM-status" eller "signalstyrka".

På Pixel och många Android-telefoner med en mer standardnära version, inklusive Pixel-modeller som stöds och nu kör Android 17, kan du prova **Inställningar > Om telefonen > SIM-status**. Vissa versioner visar också SIM-uppgifter under **Inställningar > Nätverk och internet > SIM-kort**. Leta efter signalstyrka. Den visas vanligtvis både i dBm och ASU.

På Samsung Galaxy kan du prova **Inställningar > Om telefonen > Statusinformation > SIM-kortsstatus**. I vissa One UI-versioner är namnet kortare. Använd sökfunktionen i Inställningar om menyn inte finns där.

En sak att tänka på är att Android vanligtvis visar värdet för det nätverksskikt som används just då. Om telefonen ligger på LTE gäller siffran LTE. Om den använder 5G NR kan värdet bygga på 5G:s referenssignalmätningar, beroende på vad modemet och operatören lämnar ut. LTE- och 5G-värden visas inte alltid sida vid sida.

## Dolda testmenyer

Många Android-telefoner reagerar fortfarande på den här uppringningskoden:

`*#*#4636#*#*`

Öppna appen Telefon, skriv in koden och se om en testmeny visas. Tryck på Phone information för att se nätverkstyp, signalstyrka, dataanslutning och andra radiouppgifter. Ändra inte önskad nätverkstyp i den här menyn om du inte vet exakt vad du gör. Det är en diagnostikvy, inte en användarvänlig inställningssida.

Samsung blockerar ofta den generiska koden. På många Galaxy-telefoner öppnar `*#0011#` i stället Service Mode. Där kan du se information om den aktuella cellen, frekvensband och signalvärden. Operatörsanpassade modeller kan blockera båda koderna, så räkna inte med att de alltid fungerar.

## Appar som gör det enklare

Appar som Network Cell Info Lite, CellularZ och Signal Strength visar dBm-värdet direkt på huvudskärmen och uppdaterar det kontinuerligt. De är praktiska när du går runt i ett hus, på ett kontor eller på en parkeringsplats för att hitta den plats där telefonen faktiskt får bättre anslutning.

En bra signalapp bör visa mer än en enda siffra. RSRP beskriver styrkan, medan RSRQ och SINR visar om signalen går att använda eller drunknar i brus.

runcheck visar nätverkskvaliteten tillsammans med andra mätvärden för enhetens skick och sparar historik över tid. Det spelar roll eftersom ett enskilt dBm-värde bara är en ögonblicksbild. Med historik blir det lättare att se om signalen alltid är svag i ett visst rum, bara dålig under rusningstid eller plötsligt försämrades efter en uppdatering.

## RSRP, RSSI, RSRQ och SINR utan huvudvärk

Diagnostikvyer visar flera förkortningar som ser nästan likadana ut. De betyder inte samma sak.

RSSI står för Received Signal Strength Indicator. Värdet användes ofta med äldre 2G- och 3G-anslutningar och kan även förekomma i wifi-verktyg. RSSI mäter all mottagen effekt, inklusive den användbara signalen, brus och störningar. Därför är det ett mindre rent mått vid felsökning av mobilnät.

RSRP står för Reference Signal Received Power. För LTE och 5G är detta vanligtvis den signalstyrka du bör kontrollera först. Det mäter referenssignalen från den cell telefonen använder, inte all radioenergi i kanalen.

RSRQ står för Reference Signal Received Quality. Det kombinerar signalstyrka och störningar till ett kvalitetsvärde. Ett mindre negativt tal är bättre. För LTE är omkring -3 dB utmärkt, medan värden närmare -15 dB eller -20 dB tyder på dålig kvalitet.

SINR står för Signal to Interference plus Noise Ratio. Högre är bättre. Över 20 dB är utmärkt, 10-20 dB är bra och under 0 dB betyder att brus och störningar är starkare än den användbara signalen.

Den praktiska ordningen är enkel: kontrollera RSRP först. Om RSRP är bra men data ändå går långsamt, titta sedan på RSRQ och SINR. Stark signal med dålig kvalitet är vanligt i storstäder, flerbostadshus, arenor och andra platser där många celler överlappar.

## Varför full signal ändå kan vara långsam

Staplarna beskriver främst signalnivån. De säger inte hur mycket kapacitet basstationen har kvar, hur många som använder den, om operatören prioriterar ned ditt abonnemang eller om telefonen ligger på ett 5G-band med lång räckvidd som i praktiken beter sig mer som bra LTE än den snabba 5G-upplevelse reklamen visar.

Därför kan två test på samma plats verka motsägelsefulla. Telefonen kan visa -68 dBm och ändå ladda ned långsamt på en konsert, eftersom hundratals eller tusentals enheter konkurrerar om samma cell. Klockan 02.00 kan samma telefon på samma stol kännas snabb.

## Varför signalvärdet hoppar

Signalstyrkan ändras även när du står stilla. Radiovågor studsar mot byggnader, bilar, väggar, människor och terräng. Vissa reflektioner hjälper. Andra tar ut en del av signalen. Flytta telefonen några centimeter och värdet kan förändras.

Inomhus blir variationerna ofta större. Ett fönster, ett hisschakt, en betongvägg, ett plåttak eller lågemissionsglas kan ändra värdet med 10 dB eller mer. Källare och rum långt in i byggnaden är vanligtvis sämst eftersom signalen måste passera mer material innan den når telefonen.

Även tiden på dygnet kan spela roll, men inte alltid för att själva signalstyrkan har ändrats. Under belastade tider kan cellen vara överfull, så anslutningen känns sämre trots att dBm-värdet är ungefär detsamma.

## Vad räknas som ett bra 5G-värde?

För 5G under 6 GHz är ett ungefärligt RSRP-värde nära -80 dBm bra, medan omkring -100 dBm börjar bli svagt. För mmWave är stabil täckning mycket mer beroende av den exakta platsen. Du kan ha en snabb mmWave-anslutning utomhus med fri sikt och sedan förlora den genom att gå runt ett hörn eller kliva in i en byggnad.

Bedöm inte 5G enbart efter ikonen. Titta på signalstyrka, kvalitet, hastighet, latens och om telefonen hela tiden faller tillbaka till LTE.

## Snabba svar

Kan signalen förbättras utan en förstärkare? Ibland. Gå närmare ett fönster, gå upp en våning, gå ut eller prova en annan sida av byggnaden. Om 5G är svagt inomhus kan LTE vara det bättre valet i praktiken, eftersom LTE på lägre frekvensband ofta tar sig genom väggar lättare.

Är dBm samma sak för mobilnät och wifi? Enheten är densamma, men de användbara intervallen skiljer sig. Wifi på -50 dBm är starkt, och runt -70 dBm börjar stabiliteten ofta försämras. Mobilnät är byggda för längre avstånd och kan därför fungera vid betydligt lägre värden.

Ska du lita på staplarna eller dBm? Använd staplarna för en snabb blick. Använd dBm när du felsöker.
