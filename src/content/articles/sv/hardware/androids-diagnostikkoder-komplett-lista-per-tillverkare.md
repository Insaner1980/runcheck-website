---
title: "Androids diagnostikkoder: komplett lista per tillverkare"
description: "Metabeskrivning: Diagnostikkoder för Android per tillverkare, inklusive Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO och Realme, med aktuella kommentarer om Android 17."
listSummary: "diagnostik, sensorer och android"
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostik","sensorer","android","hårdvara","guide"]
locale: "sv"
draft: false
---
---

Du skriver `*#0*#` på en Galaxy-telefon och får upp en fullständig meny för hårdvarutester. Du skriver samma kod på en annan Galaxy och ingenting händer.

Så fungerar diagnostikkoder på Android. De kan vara användbara, men på nätet framställs de ofta som mer universella än de är. En kod kan fungera på en telefon, misslyckas på en annan modell från samma märke och försvinna efter en uppdatering av operatörens firmware. Koderna befinner sig i ett rörigt gränsland mellan Android, telefonappen, tillverkarnas servicemenyer och operatörernas begränsningar.

Google släppte Android 17 den 16 juni 2026 och gjorde versionen tillgänglig först för de flesta Pixel-enheter som stöds. Partnerenheter från märken som OnePlus, OPPO, realme, vivo, Xiaomi, HONOR, Lenovo, Sharp och iQOO hanteras fortfarande genom respektive tillverkares beta- och lanseringskanaler för Android 17. Android 17 gör alltså inte dolda diagnostikkoder enhetliga mellan olika märken.

Använd telefonappen som följde med enheten när du provar koderna. Samsung-koder kräver vanligtvis Samsung Phone. Google-koder kräver oftast Phone by Google. Telefonappar från tredje part hanterar ofta inte MMI- eller servicekoder alls.

## Innan du provar en kod

Håll dig till skrivskyddade informationskoder och tester av hårdvaran. Ange inte koder för återställning, provisionering, modemkonfiguration eller serviceprogrammering om du inte vet exakt vad de gör.

De flesta testkoder körs så snart du skriver det sista tecknet. På vissa telefoner måste du trycka på samtalsknappen. Om inget händer ska du inte fortsätta mata in koden om och om igen. Den stöds förmodligen inte av modellen, telefonappen, operatörens firmware eller Android-versionen.

## Koder som fungerar på många Android-telefoner

Det här är det närmaste Android kommer gemensamma diagnostikkoder, men inte ens dessa fungerar överallt.

| Kod | Vad den gör | Kommentar |
|---|---|---|
| `*#06#` | Visar IMEI och ibland MEID eller EID | Den telefonkod som har bredast stöd. Användbar för garantiärenden, kontroll av spärrlistor och kontakt med operatören. |
| `#07#` | Visar myndighetsinformation och SAR-uppgifter | Fungerar på många Android-telefoner. På vissa måste du trycka på samtalsknappen. |
| `*#*#4636#*#*` | Öppnar Androids testmeny | Kan visa telefoninformation, nätverksstatus, signaldata, batteristatistik och wifi-uppgifter. Tillgängligheten varierar kraftigt. |
| `*#*#426#*#*` | Öppnar diagnostik för Firebase Cloud Messaging | Prova helst i Phone by Google. Användbar när pushnotiser inte kommer fram. |

`*#*#4636#*#*` är en av de mest citerade Android-koderna, men bli inte förvånad om menyn innehåller färre fält än på gamla skärmbilder. Nyare Android-versioner och tillverkarnas gränssnitt döljer fler nätverks- och batteriuppgifter än tidigare.

## Samsung Galaxy

Samsung erbjuder två vägar till diagnostik: Samsung Members och dolda koder i telefonappen. Börja med Samsung Members. Det är den lösning som Samsung stöder, den hålls aktuell och är enklare att använda.

Öppna Samsung Members, gå till fliken Support och öppna Telefondiagnostik. Samsungs aktuella tester kan bland annat omfatta kamera, USB-anslutning, laddning med kabel, batteristatus, pekskärm, sensorer, vibration, mikrofon, högtalare, wifi, Bluetooth, SIM-kort, NFC och fingeravtrycksigenkänning. Den exakta listan beror på modellen och appversionen.

Samsungs koder är fortfarande användbara, särskilt på olåsta telefoner, men säkerhetsinställningar i One UI, Auto Blocker, företagspolicyer och operatörens firmware kan blockera dem.

| Kod | Vad den gör | Kommentar |
|---|---|---|
| `*#0*#` | Öppnar Samsungs huvudsakliga meny för hårdvarutester | Testerna kan omfatta skärmfärger, pekskärm, samtalshögtalare, yttre högtalare, vibration, kameror, sensorer, S Pen och annat. |
| `*#0228#` | Visar batteristatus | Visar aktuell batterispänning och relaterade värden på många modeller. Vissa nyare versioner blockerar koden. |
| `*#0011#` | Öppnar nätverksskärmen ServiceMode | Användbar för signaldata och information om den betjänande cellen. Ändra inga inställningar här. |
| `*#0842#` | Testar vibration | Fungerar på många Samsung-modeller, men inte alla. |
| `*#0673#` eller `*#0289#` | Testar ljud | Hur högtalaren och samtalshögtalaren testas varierar mellan modeller. |
| `*#2663#` | Visar firmwareinformation för pekskärmen | Används ofta av servicetekniker. |
| `*#7353#` | Öppnar en snabbtestmeny | Vanligare på äldre Galaxy-modeller. |
| `*#1234#` | Visar firmwareversioner | Visar information om AP-, CP- och CSC-versioner. |
| `*#7412365#` | Visar firmwareinformation för kameran | Tillgängligheten varierar. |
| `*#0588#` | Testar närhetssensorn | Användbar om skärmen inte släcks under samtal. |
| `*#9900#` | Öppnar SysDump-läget | Främst avsett för loggar och felsökning. Ändra inte slumpmässiga alternativ. |
| `*#9090#` | Öppnar diagnostikkonfiguration | Undvik att ändra något om du inte följer officiella serviceanvisningar. |

Om `*#0*#` inte fungerar ska du inte direkt anta att telefonen är falsk. Prova först Samsung Phone i stället för Google Phone. Kontrollera sedan diagnostiken i Samsung Members. Om den fungerar finns det fortfarande en väg till hårdvarutesterna även om den dolda koden är blockerad.

## Google Pixel

Pixel-telefoner är mer restriktiva än Samsung-modeller. Det finns ingen Pixel-motsvarighet till Samsungs meny bakom `*#0*#`.

| Kod | Vad den gör | Kommentar |
|---|---|---|
| `*#*#7287#*#*` | Öppnar Pixel Repair Diagnostics på enheter som stöds | Google dokumenterar koden för egna reparationsflöden. Den kräver internetanslutning och kan variera beroende på modell, region och programvaruläge. |
| `*#*#4636#*#*` | Öppnar Androids testmeny | Används ofta för telefon- och nätverksinformation, men fälten varierar mellan Android-versioner. |
| `*#*#426#*#*` | Öppnar FCM-diagnostik | Användbar vid problem med pushnotiser. |
| `#07#` | Visar myndighetsinformation och SAR-värden | Fungerar på många Pixel-modeller. |

Pixel 6 och senare, inklusive Fold-modeller, har också området Device health and support i Inställningar. Där finns en översikt över enhetens skick och vägledd hjälp för bland annat batteri, laddning, temperatur och pekskärm. Det är inte samma sak som koden för reparationsdiagnostik, men är ofta en bättre utgångspunkt för vanliga problem.

Android 17 kan installeras trådlöst på Pixel-enheter som stöds, från Pixel 6-serien till Pixel 10a. Det betyder inte att diagnostiken är identisk på alla Pixel-modeller. Hårdvara, region och stöd för reparationsläge spelar fortfarande roll.

## Xiaomi, Redmi och POCO

Xiaomis CIT-meny är en av de bättre testsviterna från en tillverkare, men innehållet varierar mellan MIUI, HyperOS, regionala versioner och olika modellserier.

| Kod | Vad den gör | Kommentar |
|---|---|---|
| `*#*#6484#*#*` | Öppnar CIT-menyn för hårdvarutester | Innehåller ofta tester av skärm, pekskärm, vibration, högtalare, mikrofoner, kameror, sensorer, GPS, wifi, Bluetooth, SIM-kort, knappar, fingeravtryck, IR-sändare och NFC. |
| `*#*#64663#*#*` | Alternativ kod för CIT | Fungerar på vissa äldre Xiaomi-modeller. |
| `*#*#4636#*#*` | Öppnar Androids testmeny | Tillgängligheten varierar, särskilt i nyare HyperOS-versioner. |

På vissa Xiaomi-telefoner kan du också öppna diagnostiken från Inställningar genom att gå till telefoninformationen och trycka flera gånger på kernelversionen. Prova den vägen om koden i telefonappen inte fungerar. Menynamnen varierar mellan MIUI och HyperOS.

## OnePlus

Tillgången till diagnostik på OnePlus har förändrats genom åren i takt med att OxygenOS har närmat sig ColorOS. Äldre guider stämmer därför inte alltid med en modern telefon.

| Kod | Vad den gör | Kommentar |
|---|---|---|
| `*#808#` | Öppnar Engineering Mode | Hårdvarutester kan omfatta skärm, pekskärm, kameror, sensorer, ljud, laddning och nätverksmoduler. Tillgängligheten varierar med OxygenOS och region. |
| `*#*#4636#*#*` | Öppnar Androids testmeny | Fungerar fortfarande på många modeller. |
| `*#888#` | Visar hårdvaruversion eller produktionsinformation | Finns inte på alla modeller. |
| `*#1234#` | Visar firmwareversion | Fungerar i vissa OnePlus-versioner. |

Var försiktig i Engineering Mode. Använd testskärmarna, men ändra inte modem-, kalibrerings- eller serviceinställningar.

## Motorola

Motorola har färre offentliga koder än Samsung och Xiaomi, men många modeller innehåller en app för servicetester.

| Kod | Vad den gör | Kommentar |
|---|---|---|
| `*#*#2486#*#*` | Öppnar CQATest eller en servicetestmeny | Kan innehålla tester av skärm, pekskärm, högtalare, vibration, kamera och sensorer. |
| `*#*#4636#*#*` | Öppnar Androids testmeny | Fungerar på många modeller. |
| `.12345+=` | Öppnar ett teknikerläge från den förinstallerade kalkylatorn | Fungerar bara på vissa Motorola-enheter och endast i den förinstallerade kalkylatorn. |

Om CQATest syns i applistan efter ett test behöver du inte få panik. Det är Motorolas komponent för fabrikstester.

## OPPO och Realme

OPPO och Realme delar mycket av grunden i ColorOS, så deras servicekoder överlappar.

| Kod | Vad den gör | Kommentar |
|---|---|---|
| `*#899#` | Öppnar en meny för manuella tester eller tekniker | Vanlig ingång till hårdvarutester på många versioner av ColorOS och Realme UI. |
| `*#800#` | Öppnar ett verktyg för tekniker och loggar | Används ofta för loggar och nätverksdiagnostik. |
| `*#6776#` | Visar programvaru- och enhetsinformation | Visar modell- och firmwareuppgifter på många modeller. |
| `*#*#4636#*#*` | Öppnar Androids testmeny | Tillgängligheten varierar. |

Den säkrare vägen är vanligtvis den inbyggda appen Phone Manager, My OPPO, My realme eller Support, om den finns på din modell.

## Koder du bör undvika

Undvik koder för fabriksåterställning och serviceprogrammering som du hittar i slumpmässiga listor. En farlig kod som fortfarande sprids är `*2767*3855#`, en gammal Samsung-kod för fabriksåterställning. Skriv inte in den bara för att se vad som händer. Det är så data går förlorade.

Undvik även allt som beskrivs som NV, RF calibration, modem programming, carrier provisioning eller service configuration. De menyerna är inte diagnostikleksaker.

## När koderna inte fungerar

Prova först telefonappen som följde med enheten. Testa sedan tillverkarens support- eller diagnostikapp. Samsung Members, Pixel-diagnostik, Xiaomi CIT via Inställningar, Motorola CQATest och supportverktygen från OPPO eller Realme fungerar ofta när koderna inte gör det.

Operatörslåsta telefoner kan blockera koder. Företagshanterade telefoner kan göra samma sak. Vissa säkerhetsfunktioner stoppar dem, och Android-uppdateringar kan ta bort eller dölja delar av en meny. Det är frustrerande, men betyder inte automatiskt att telefonen har ett hårdvarufel.

Diagnostikkoder är användbara för enstaka komponenttester. De räcker inte för långsamma förändringar. Ett högtalartest visar inte att telefonen blir överhettad varje eftermiddag, och en batteriskärm visar inte att laddningsströmmen har sjunkit under en månad. runcheck fyller den luckan genom att följa trender för batteri, temperatur, nätverk, lagring och laddning över tid.

## Vanliga frågor

### Kan diagnostikkoder skada telefonen?

Informations- och testkoder är vanligtvis säkra. Koder som raderar data eller ändrar serviceinställningar är det inte. Sök efter den exakta koden innan du anger den.

### Måste jag trycka på samtalsknappen?

Vanligtvis inte. De flesta koder av typen `*#*#...#*#*` och `*#...#` körs när det sista tecknet skrivs in. Vissa telefoner kräver samtalsknappen, särskilt för kortare koder som `#07#`.

### Varför fungerar en kod på en telefon men inte på en annan?

Därför att koden implementeras av tillverkaren, telefonappen, firmwareversionen och ibland operatören. Android garanterar ingen universell meny för hårdvarutester.

### Kan appar ersätta diagnostikkoder?

Delvis. Appar som Samsung Members, Phone Doctor Plus, TestM och DevCheck kan testa skärm, högtalare, kameror, sensorer, batterivärden och nätverksstatus genom Androids API:er. De kommer vanligtvis inte åt samma lågnivåmenyer som tillverkarnas servicelägen.
