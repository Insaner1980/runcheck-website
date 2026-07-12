---
title: "Androids diagnostikkoder: komplett lista per tillverkare"
description: "Metabeskrivning: Fungerande servicekoder för Android per märke, med aktuella kommentarer om Android 17, Pixel-enheter, Samsung, Xiaomi, OnePlus, Motorola, Huawei, Realme och Oppo."
listSummary: "diagnostik, sensorer och android"
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostik","sensorer","android","hårdvara","guide"]
locale: "sv"
draft: false
---
Servicekoder för Android är användbara, men de är röriga. Vissa ingår i Android, andra läggs till av tillverkaren och några försvinner efter en firmwareuppdatering utan någon förvarning.

Det spelar större roll nu när Android 17 har släppts. Google gjorde versionen tillgänglig först för de flesta Pixel-enheter som stöds, medan Samsung, Xiaomi, OnePlus, Motorola och andra märken levererar sina egna Android 17-versioner senare. Att en kod fungerar på en Pixel med Android 17 säger därför inget säkert om en Galaxy- eller Redmi-telefon som ännu inte har fått tillverkarens Android 17-firmware.

Två regler innan du börjar. De flesta koder aktiveras så snart du skriver det sista tecknet, så vanligtvis ska du inte trycka på samtalsknappen. Om en kod öppnar en meny du inte förstår kan du titta, men ändra ingenting.

## Universella koder

De här koderna är det närmaste Android kommer en gemensam grundnivå. Även då kan anpassad firmware blockera dem.

`*#06#` visar IMEI-numret för telefonens mobilradio. Telefoner med dubbla SIM-kort visar vanligtvis två IMEI-nummer. Det här är den säkraste koden i listan och den fungerar på nästan alla telefoner, även iPhone.

`*#*#4636#*#*` öppnar Androids testmeny på många enheter. Den kan visa telefoninformation, batteristatistik, signalstyrka och radiouppgifter. Haken är att många tillverkargränssnitt numera begränsar menyn, särskilt på nyare firmware från Samsung och Xiaomi.

`*#*#426#*#*` öppnar diagnostik för Firebase Cloud Messaging. Den är främst användbar när pushnotiser fördröjs eller uteblir, eftersom den visar om Google Play-tjänster kan upprätthålla en anslutning till Googles servrar.

`*#07#` visar SAR-information på många Android-telefoner. SAR står för Specific Absorption Rate och anger hur mycket radiofrekvent energi kroppen absorberar under användning. I USA är FCC:s gräns för telefoner 1,6 W/kg. I Europa är den vanliga konsumentgränsen för exponering mot huvud och kropp 2,0 W/kg, beräknat som ett medelvärde över 10 gram vävnad.

## Samsung Galaxy

Samsung har fortfarande ett av de bättre diagnostiksystemen, delvis eftersom företaget erbjuder både koder i telefonappen och en officiellt stödd väg via en app.

`*#0*#` öppnar Samsungs skärm för hårdvarutester på många Galaxy-telefoner. Den exakta layouten varierar mellan modeller, men vanligtvis går det att testa skärmen, pekinmatning, kameror, högtalare, vibration, sensorer och ibland fingeravtrycksläsaren. På vissa operatörsmodeller eller hårt låsta firmwareversioner öppnas menyn inte alls.

Samsung Members är den säkrare vägen för vanliga användare. Öppna Samsung Members, gå till fliken Support och välj Telefondiagnostik. Appen leder dig genom testerna och visar tydligare resultat än servicemenyn.

`*#0228#` visar batteriuppgifter som spänning och temperatur på många Galaxy-versioner. Den ger inte ett enkelt procentvärde för batterihälsa.

`*#0011#` öppnar ServiceMode på många modeller och visar aktuell mobilnätsinformation, till exempel band, betjänande cell och signaldata. Informationen är användbar, men lätt att misstolka om du inte arbetar med mobilnät.

`*#9900#` öppnar SysDump på vissa Galaxy-telefoner. Det enda alternativ de flesta bör röra är rensning av loggar, och då bara om supporten uttryckligen har bett dem ta bort ackumulerade dumpstate- eller logcat-filer.

`*#2663#` visar firmwareinformation för pekpanelen på vissa modeller. Uppdatera inte pekskärmens firmware bara för att knappen finns. Använd funktionen endast när du felsöker ett verkligt pekproblem.

## Xiaomi, Redmi och POCO

Xiaomis fabrikstestsvit heter CIT. Det är en av få diagnostikmenyer för Android som fortfarande har någorlunda bra officiell dokumentation.

`*#*#6484#*#*` öppnar CIT:s hårdvarutester på många telefoner från Xiaomi, Redmi och POCO. Om den inte reagerar kan du prova `*#*#64663#*#*`. Xiaomis supportsidor hänvisar till båda koderna beroende på modell och region.

CIT-menyn kan innehålla tester av skärm, pekskärm, högtalare, mikrofon, vibration, kamera, närhetssensor, ljussensor, accelerometer, gyroskop, kompass, wifi, Bluetooth, SIM-identifiering, fingeravtryck, NFC och laddning. Listan beror på vilken hårdvara telefonen har.

Ofta går det att nå samma meny utan en kod. Öppna telefoninformationen i Inställningar, leta upp den detaljerade specifikationsvyn och tryck flera gånger på kernelversionen. Xiaomi ändrar benämningarna mellan MIUI och HyperOS, men vägen via kernelversionen är fortfarande värd att prova när koden blockeras.

`*#*#6485#*#*` visar batteriinformation på många Xiaomi-telefoner. Behandla värdena som tekniska mätdata, inte som en enkel ersättning för en sida om batterihälsa.

## Google Pixel

Pixel-telefoner stöder de universella Android-koderna, men den viktigaste aktuella diagnostikkoden är Pixel-specifik.

`*#*#7287#*#*` öppnar appen Pixel Repair Diagnostics på Pixel-telefoner som stöds. Google dokumenterar den för kontroller i samband med reparationer, och den kan hjälpa till att verifiera hårdvaran före eller efter ett ingrepp. Koden kräver internetanslutning och därefter följer du instruktionerna på skärmen.

För batterikontroller på Pixel 6 och senare går du till `Inställningar > Batteri > Batteridiagnostik`. Det är en vanlig meny i Inställningar, inte en dold kod.

`*#*#4636#*#*` fungerar fortfarande på många Pixel-telefoner för radio- och batteriinformation. Det är inget reparationsverktyg och koden kan inte tvinga fram Android-uppdateringar.

Äldre artiklar nämner ibland kalkylatorkoden `.12345+=` för ett teknikerläge på Pixel. Den skulle jag inte förlita mig på 2026. Använd den officiella Pixel-koden för reparationsdiagnostik i stället.

## OnePlus

OnePlus-koder är inkonsekventa eftersom OxygenOS har närmat sig ColorOS under de senaste åren.

`*#808#` öppnar Engineer Mode på vissa äldre OnePlus-telefoner, särskilt modeller i serierna OnePlus 7, 8 och 9. Nyare firmware kan blockera koden.

`*#899#` öppnar en diagnostik- eller loggmeny på vissa enheter från OnePlus och närstående Oppo-märken. Innehållet varierar kraftigt.

`*#*#4636#*#*` är vanligtvis den mest användbara grundkoden för nätverks- och batteriinformation. För hårdvarutester på nyare OnePlus-telefoner är den inbyggda diagnostikappen, supportappen eller en betrodd sensorapp ofta mindre frustrerande än att jaga gamla koder.

## Motorola

`*#*#2486#*#*` uppges öppna Motorolas tekniker- eller hårdvarutestmeny på många Moto-telefoner. Stödet varierar mellan modeller.

Den mer pålitliga vägen är appen Device Help. Öppna den och välj `Device diagnosis` och sedan `Hardware test`. Det är enklare att förklara för en vanlig användare och är inte beroende av att en dold kod fortfarande är aktiverad.

`*#*#4636#*#*` fungerar på många Motorola-telefoner eftersom företagets Android-versioner ligger ganska nära standard-Android.

## Huawei och Honor

`*#*#2846579#*#*` öppnar ProjectMenu på många Huawei-telefoner och äldre Honor-modeller med EMUI eller MagicUI. Menyn innehåller inställningar för programvara, bakgrundsfunktioner, nätverk och service. Vissa alternativ är avsedda för tekniker.

`*#*#6130#*#*` visar nätverksinformation på vissa Huawei-modeller.

På nyare HarmonyOS-enheter är supportappen ett bättre val än att förvänta sig att alla gamla Android-koder ska fungera. Huawei har flyttat mycket av den användarinriktade diagnostiken till vägledda supportflöden.

## Realme och Oppo

`*#800#` öppnar Engineer Mode på vissa telefoner från Realme och Oppo. I nyare ColorOS-versioner är åtkomsten betydligt mer begränsad än tidigare.

`*#899#` kan öppna en diagnostik- eller loggmeny på vissa modeller.

De här märkena ändrar ofta åtkomsten till diagnostik. Om koden inte fungerar ska du inte fortsätta prova slumpmässiga listor från gamla forumtrådar. Använd Phone Manager, supportappen eller en välkänd app för hårdvaruinformation.

## Varför koder slutar fungera

Telefonappen spelar roll. En app från tredje part kanske inte hanterar MMI- och servicekoder på samma sätt som den förinstallerade telefonappen. Prova den som följde med enheten först.

Operatörens firmware kan ta bort koder. En operatörslåst Galaxy kan bete sig annorlunda än en olåst Galaxy med samma hårdvara.

Stora uppdateringar kan förändra allt. Android 17 är ett bra exempel: Pixel-enheter fick versionen först, medan varje tillverkare levererar sin egen variant med egna servicemenyer, behörigheter och begränsningar. Om en kod slutar fungera efter en systemuppdatering kan den ha blockerats, inte gått sönder.

Och ja, vissa kodlistor på nätet är gamla. En kod som kopierats från en forumtråd om Galaxy S8 behöver inte fungera på en Galaxy S26, även om artikeln påstår att den gäller alla Samsung-telefoner.

## Säkrare alternativ

För vardagliga kontroller är tillverkarens diagnostikapp vanligtvis bättre än en dold meny. Samsung Members, Xiaomi CIT, Pixel Repair Diagnostics, Motorola Device Help och Huawei Support är enklare att tolka och innebär mindre risk.

För en skrivskyddad översikt kan appar som DevCheck, CPU-Z, AIDA64 och Phone Doctor Plus visa batterivärden, sensorvärden, CPU-information, lagring och nätverksdata via Androids offentliga API:er. De kommer inte åt alla fabrikstester, men räcker för de flesta felsökningar.

För en bredare bild av telefonens skick samlar runcheck diagnostik för batteri, temperatur, nätverk och lagring på en instrumentpanel, i stället för att tvinga dig att hoppa mellan servicemenyer.

## Vad du inte ska röra

Ändra inte nätverksband om du inte vet exakt varför.

Kör inte knappar för firmwareuppdatering i servicemenyer bara för att se vad som händer.

Använd inte återställnings-, kalibrerings- eller fabriksalternativ från en kodlista om du inte har säkerhetskopierat telefonen och vet vad funktionen gör.

Att läsa värden är säkert. Problemen börjar när du ändrar dolda inställningar.
