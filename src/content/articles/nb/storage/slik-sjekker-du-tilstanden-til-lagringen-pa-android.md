---
title: "Slik sjekker du tilstanden til lagringen på Android"
description: "Android-lagring kan slites, men de fleste telefoner viser ikke en enkel prosent for lagringens tilstand. Her er hva du kan sjekke, hva tallene betyr, og når du bør bli bekymret."
listSummary: "Android-lagring kan slites, men de fleste telefoner viser ikke en enkel prosent for lagringens tilstand."
hub: "storage"
sourceNumber: 80
order: 2
tags: ["lagring","android","opprydding","optimalisering","guide"]
locale: "nb"
draft: false
---
---

Hvordan vet du om lagringen i Android-telefonen er i god stand, og ikke bare om den har nok ledig plass? Irriterende nok gjør de fleste telefoner dette fortsatt vanskelig.

Lagringens tilstand og ledig lagringsplass er to forskjellige problemer. En telefon kan ha 80 GB ledig og likevel ha en svak NAND-brikke. En nesten full telefon kan føles treg selv om lagringsmaskinvaren er helt i orden. Disse to tingene blandes stadig sammen, så begynn med å skille dem.

## Hva som sliter på telefonlagringen

Android-telefoner bruker NAND-flashlagring. Rimelige modeller har ofte brukt eMMC, mens mellomklasse- og flaggskiptelefoner vanligvis bruker UFS. Begge typene slites gjennom program/erase-sykluser. Hver gang data skrives, slettes og skrives på nytt, får cellene en liten mengde slitasje.

Kontrolleren fordeler skrivingen over brikken ved hjelp av wear leveling. Derfor tar vanlig telefonbruk sjelden livet av lagringen raskt. Bilder, meldinger, appoppdateringer og nettlesing er ikke det samme som å skrive opptak fra et overvåkingskamera hele døgnet.

Langvarig videoopptak, stadige spillinstallasjoner, gjentatte tilbakestillinger til fabrikkinnstillinger og nesten full lagring er tyngre belastninger. Det siste betyr noe fordi kontrolleren har færre ledige blokker til opprydding og wear leveling. Det virker. Helt til det ikke gjør det.

For de fleste er ikke lagringsslitasje den første delen av telefonen som svikter. Batteriet, skjermen, USB-C-porten eller programvarestøtten blir vanligvis grunnen til å bytte telefon først. På renoverte telefoner og hardt brukte rimelige modeller blir lagringens tilstand mer interessant.

## Problemet med tall for lagringens tilstand

Det finnes ingen universell Android-innstilling som sier «lagringen har 92 % av levetiden igjen», slik nyere støttede Pixel-modeller kan vise batterihelse.

Android-rammeverket inneholder et API som kan returnere anslått gjenværende levetid for intern lagring som prosent, eller `-1` hvis informasjonen ikke er tilgjengelig. Problemet er tilgangen. I AOSP er `getInternalStorageRemainingLifetime()` en System API som krever `READ_PRIVILEGED_PHONE_STATE`. Vanlige apper fra Play Store kan derfor normalt ikke bruke den.

Pixel har en offisiell diagnostikkmodus for reparasjon på støttede modeller, og Samsung Members kan kjøre brede enhetstester på Galaxy-telefoner. Du bør likevel ikke forvente at noen av dem viser en enkel og dokumentert prosent for NAND-levetid i den vanlige innstillingsmenyen.

Android 17 gjør ikke lagringens tilstand til en universell forbrukerinnstilling. Versjonen ble først tilgjengelig på de fleste støttede Pixel-enhetene, mens andre produsenter følger senere gjennom sine egne Android-varianter. Forskjellene mellom OEM-er betyr derfor fortsatt mye.

## Finn lagringstypen først

Før du kjører en ytelsestest, bør du finne ut hvilken lagringstype telefonen har. Se på produsentens spesifikasjoner, eller bruk en maskinvareapp som DevCheck og åpne lagringsdelen.

Som en grov regel bruker billige telefoner fra de siste årene ofte eMMC 5.1. Bedre mellomklassemodeller bruker UFS 2.2 eller UFS 3.1. Nyere flaggskip har ofte UFS 4.0 eller UFS 4.1. UFS 5.0 er annonsert som neste generasjon, men er ennå ikke normalen i telefonene som er i vanlig salg.

Typen betyr noe fordi en treg eMMC-telefon og en UFS-telefon med svekket lagring kan gi lignende testresultater av helt forskjellige grunner.

## Test lagringshastigheten med varsomhet

Bruk en lagringstest som CPDT. Kjør testen når telefonen er kjølig, har mer enn 20 % batteri, ikke blir varm under lading og har minst 15-20 % ledig lagringsplass. Kjør den deretter én gang til. Ett dårlig resultat beviser ingenting.

Disse tallene er bare referansepunkter, ikke bestått- eller strykgrenser:

Omtrentlige referanser for sekvensiell lesing og skriving: eMMC 5.1 kan ligge rundt 250/100-125 MB/s, UFS 2.1 rundt 850/250, UFS 3.1 rundt 2 100/1 200 og UFS 4.0 rundt 4 200/2 800.

Virkelige telefoner treffer ikke alltid disse tallene. Kapasitet, kontroller, temperatur, kryptering, fastvare, ledig plass og selve testappen påvirker resultatet. En modell med 128 GB kan også være tregere enn 512 GB-utgaven av samme telefonserie fordi den har færre NAND-brikker som arbeider parallelt.

Hvis resultatet er mye lavere enn forventet, frigjør du plass først og tester på nytt etter en omstart. Hvis tallet fortsatt er lavt og telefonen samtidig fryser under installasjoner, filflytting, kameralagring eller appoppdateringer, blir lagringens tilstand en reell mistenkt.

## Tegn som peker mot lagringsproblemer

Lagringsproblemer føles annerledes enn vanlig treghet på en gammel telefon.

Apper kan bruke svært lang tid på å installeres eller oppdateres. Kameraet kan stoppe opp etter hvert bilde mens filen lagres. Telefonen kan henge når du kopierer, sletter eller flytter filer. Oppstarten kan ta mye lengre tid enn før. Store spill kan kontrollere eller reparere filer oftere.

Mer alvorlige tegn er vanskeligere å overse: ødelagte bilder, dokumenter som ikke kan åpnes, apper som krasjer under filskriving, feilmeldinger om at lagringen ikke kan skrives til selv om det er ledig plass, eller en telefon som av og til ikke starter.

Sikkerhetskopier straks hvis du ser tegn til datakorrupsjon. Ikke bruk en time på ytelsestester mens de viktige dataene fortsatt bare finnes på telefonen.

## Kontroller som krever root

Rootede enheter kan noen ganger lese tilstandsdata på lavere nivå fra sysfs. På eMMC-enheter kan levetidsestimater finnes i Extended CSD-verdier under baner som `/sys/class/mmc_host/mmc0/mmc0:*/life_time`. På UFS-enheter kan `health descriptors` finnes under `/sys/class/scsi_device/` eller relaterte produsentbaner.

Dette er ikke vanlig brukerråd. Banene varierer, SELinux blokkerer tilgangen på standardtelefoner, og verdiene er lette å tolke feil. Hvis du allerede har root og vet hva du gjør, kan dataene være nyttige. Hvis ikke, bør du ikke roote en telefon bare for å kontrollere lagringen.

## Slik reduserer du belastningen på lagringen

Hold 15-20 % av den interne lagringen ledig. På en telefon med 128 GB betyr det omtrent 20 GB. På en telefon med 256 GB er 40 GB en komfortabel buffer, men du trenger ikke følge tallet slavisk.

Ikke bruk tilbakestilling til fabrikkinnstillinger som rutinemessig vedlikehold. Én tilbakestilling for å rydde opp i en problematisk telefon er greit. Månedlige tilbakestillinger gir meningsløs slitasje og gjenskaper vanligvis samme lagringsproblem når du installerer alt på nytt.

Ta opp lange videoer til ekstern lagring bare hvis telefonen og kameraappen støtter det på en ordentlig måte. Hvis du bruker SD-kort, bør mediefiler ligge der, ikke apper. Apper hører fortsatt hjemme på intern lagring fordi UFS er mye raskere og mer pålitelig enn de fleste microSD-kort.

Hvis du bruker runcheck, bør du følge lagringspresset over tid i stedet for å stirre på ett tall. Lagringsdelen viser kapasitetsbruk, og sammen med batteritemperatur og andre helsesignaler blir det lettere å skille en full telefon fra et mulig maskinvareproblem.
