---
title: "Slik tester du telefonskjermen for døde piksler og berøringsfeil"
description: "Du undersøker en brukt telefon. Selgeren sier at skjermen er perfekt, og ved første øyekast ser den slik ut. Så åpner du en hvit skjerm og oppdager en svart prikk nær hjørnet. Eller enda verre: Du begynner å skrive, og en stripe av tastaturet reagerer ikke på fingeren."
listSummary: "Du undersøker en brukt telefon."
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["maskinvare","testing","diagnostikk","android","guide"]
locale: "nb"
draft: false
---
Skjermfeil kan være vanskelige å se ved vanlig bruk. Bakgrunnsbilder, ikoner, mørk modus og bevegelser skjuler mye. Noen få tester med heldekkende farger og berøring gjør feilene langt enklere å oppdage.

## Døde og fastlåste piksler

En død piksel forblir svart uansett hva skjermen viser. Den har sluttet å virke.

En fastlåst piksel er annerledes. Den blir stående i én farge, vanligvis rød, grønn, blå eller hvit, selv om området rundt endrer seg. Fastlåste piksler kan noen ganger reagere på verktøy som raskt veksler mellom farger. Døde piksler gjør vanligvis ikke det.

Begge deler er lettest å se mot ensfargede bakgrunner. Ikke se raskt over startskjermen og regn testen som ferdig. Da går du glipp av for mye.

## Se etter døde og fastlåste piksler

Skru lysstyrken høyt, rengjør glasset og vis heldekkende farger i fullskjerm. Bruk hvitt, svart, rødt, grønt, blått og grått.

En nettleserbasert test som deadpixeltest.org fungerer fint. En skjermtestapp fra Play Store kan være bedre fordi den kan skjule status- og navigasjonslinjene, bytte farge automatisk og ta med gradienttester.

Noen telefoner har innebygde tester:

- Samsung Galaxy: Tast `*#0*#` på mange modeller, og bruk testene Red, Green, Blue, Black og Touch. Du kan også åpne Samsung Members, trykke Diagnostics på Discover-fanen og velge Phone diagnostics.
- Google Pixel: Tast `*#*#7287#*#*` for å åpne Pixel Diagnostics på enheter som støtter det.
- Xiaomi, Redmi og POCO: Prøv `*#*#6484#*#*` for å åpne CIT-menyen.
- Motorola: Åpne Device Help > Device diagnosis > Hardware test.

På en hvit bakgrunn ser døde piksler ut som små svarte prikker. På en svart bakgrunn vises fastlåste piksler som lyse fargede prikker. Røde, grønne og blå skjermbilder kan avsløre hvilken delpiksel som har låst seg.

Ta deg god tid. Én langsom runde langs kanter og hjørner avslører flere feil enn om du trykker deg gjennom fargene så raskt som mulig.

## Kontroller jevn lysstyrke og innbrenning

En helt svart skjerm i et mørkt rom er nyttig på telefoner med LCD-skjerm. Lyslekkasje fra bakbelysningen vises som lysere, skyaktige felt nær kantene. OLED-skjermer har ikke bakbelysning og får derfor ikke lyslekkasje på samme måte.

OLED har et annet problem: innbrenning. AMOLED-, Super AMOLED- og Dynamic AMOLED-paneler kan eldes ujevnt når de samme elementene blir stående på skjermen over lang tid. Navigasjonslinjer, statusikoner, tastaturer og knapper fra sosiale medier er vanlige mønstre.

Bruk en heldekkende grå skjerm med middels lysstyrke for å se etter innbrenning. Se etter svake skygger av tastaturet, navigasjonsknapper, klokken eller verktøylinjer i apper. En rød skjerm kan også gjøre enkelte former for innbrenning lettere å se fordi delpikslene eldes i forskjellig tempo.

Innbrenning er permanent. Apper som hevder at de kan reparere den, forsøker vanligvis å slite ned resten av skjermen slik at det gamle mønsteret blir mindre synlig. Det er egentlig ingen reparasjon.

## Test berøringsresponsen

En skjerm kan se perfekt ut og likevel ha et defekt berøringslag. Dette laget, ofte kalt digitizer, registrerer berøring.

Åpne en tegneapp og velg en tynn pensel. Tegn vannrette linjer fra toppen til bunnen av skjermen, og deretter loddrette linjer fra venstre mot høyre. Legg linjene tett. Hvis streken brytes i det samme området hver gang, registrerer ikke den delen av berøringslaget fingeren.

En berøringstestapp med rutenett gjør dette enklere. Hver rute skal markeres når du fører fingeren over den. Døde soner forblir tomme.

Menyen bak `*#0*#` har en Touch-test på mange Samsung Galaxy-telefoner. Noen Android-telefoner reagerer også på `*#*#2664#*#*`, men denne koden er langt mindre pålitelig enn produsentens egne verktøy. Hvis den ikke virker, er det ikke noe problem. Tegnetesten er tilstrekkelig.

Vær ekstra oppmerksom på kantene. Buede skjermer og svært smale rammer kan gjøre kantberøring vanskeligere å vurdere, særlig når håndflateavvisning er aktiv.

## Test flerberøring

De fleste moderne telefoner støtter minst fem samtidige berøringspunkter, og mange støtter ti. En flerberøringstest viser en nummerert sirkel for hver finger.

Legg flere fingre på skjermen og flytt dem sakte. Sirklene skal følge fingrene uten å hoppe eller forsvinne. Hvis telefonen mister den samme fingeren hver gang du beveger den over et bestemt område, er det nyttig dokumentasjon på en feil.

Dette har betydning for spilling, knipezoom, tastaturbruk og tilgjengelighetsbevegelser.

## Se etter ghost touch

Ghost touch betyr at telefonen registrerer berøringer som ikke skjer. Den kan åpne apper, skrive bokstaver, rulle eller trykke på knapper uten at noen tar på skjermen.

Fjern først skjermbeskytteren og dekselet. Billige skjermbeskyttere, innestengt fukt og trykk langs kantene kan forvirre berøringslaget. Rengjør skjermen, og test både mens telefonen lades og når den er koblet fra. Dårlige ladere kan noen ganger skape elektrisk støy som påvirker berøringen.

Start deretter telefonen i sikker modus. Hvis feilberøringene fortsetter der, er maskinvare en mer sannsynlig årsak. Hvis de stopper, kan en tredjepartsapp eller et skjermoverlegg være involvert.

Hvis problemet begynte rett etter en stor systemoppdatering, bør du ta programvarefeil på alvor. Android 17 kom først til støttede Pixel-telefoner, mens andre produsenter fulgte senere. Derfor kan berøringsfeil knyttet til en oppdatering dukke opp hos ett merke før andre. Installer ventende feilrettinger og test på nytt før du betaler for å bytte skjermen.

## Hva du bør gjøre hvis du finner en feil

På en brukt telefon bør døde piksler, døde berøringssoner, ghost touch og synlig innbrenning påvirke prisen. Ikke godta at en berøringsfeil avfeies som «bare programvare» uten at du selv får testet sikker modus eller diagnostikk.

På en ny telefon bør du kontakte selgeren raskt. I Norge har mobiltelefoner kjøpt fra en profesjonell selger normalt fem års reklamasjonsfrist ved feil som skyldes dårlig kvalitet, men du må likevel reklamere innen rimelig tid etter at du oppdaget feilen. Produsentenes pikselregler og returordninger kan variere, så det er fortsatt smartest å melde fra med én gang.

Det kan være verdt å prøve et fargevekslingsverktøy på en fastlåst piksel, men ha lave forventninger. Kjør det en kort stund, ikke gjennom natten med maksimal lysstyrke. Døde piksler, ghost touch og døde berøringssoner krever vanligvis at hele skjermenheten byttes.

Prisene på skjermreparasjoner varierer for mye til at ett anslag er nyttig. En rimelig LCD-telefon kan være billig å reparere. En buet OLED-skjerm på en toppmodell kan koste så mye at det blir mer fornuftig å bytte telefon. Be om pris for den nøyaktige modellen før du bestemmer deg.

## Korte svar

### Kan en skjermbeskytter forårsake døde piksler?

Nei. Døde piksler sitter inne i selve skjermpanelet. En skjermbeskytter kan gi berøringsfeil, feilregistreringer, dårlig respons langs kantene eller problemer med nærhetssensoren, men den dreper ikke piksler.

### Sprer døde piksler seg?

Én død piksel forblir vanligvis én død piksel. Hvis flere dukker opp over tid, kan årsaken være panelskade, trykkskade eller en forbindelse som er i ferd med å svikte.

### Dekkes innbrenning av garanti eller reklamasjon?

Noen ganger, men ikke ta det for gitt. Mange produsenter behandler innbrenning som slitasje, særlig på eldre OLED-telefoner. Kraftig innbrenning som oppstår tidlig bør meldes inn, men vurderingen avhenger av garantien, årsaken og norsk forbrukerlovgivning.

### Er én død piksel akseptabel på en ny telefon?

Ikke for kjøperen. En ny telefon bør ha en feilfri skjerm. Om produsenten er enig, avhenger av retningslinjene deres, og derfor er det viktig å melde fra raskt.
