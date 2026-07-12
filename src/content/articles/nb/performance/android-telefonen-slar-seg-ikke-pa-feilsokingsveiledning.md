---
title: "Android-telefonen slår seg ikke på: feilsøkingsveiledning"
description: "Metabeskrivelse: Slår ikke Android-telefonen seg på, eller sitter den fast på en svart skjerm? Gå gjennom de tryggeste kontrollene først, fra lading og tvungen omstart til Recovery Mode og reparasjonsalternativer."
listSummary: "Metabeskrivelse: Slår ikke Android-telefonen seg på, eller sitter den fast på en svart skjerm?"
hub: "performance"
sourceNumber: 75
order: 12
tags: ["runcheck","seo","android","artikkel","guide"]
locale: "nb"
draft: false
---
---

Noen kobler en telefon til laderen, ser ingenting, trykker fem ganger på av/på-knappen og antar at den er død. Noen ganger stemmer det. Oftere er batteriet helt utladet, programvaren har fryst mens skjermen er av, eller skjermen har sviktet selv om resten av telefonen fortsatt kjører.

Rekkefølgen betyr noe. Begynn med kontrollene som innebærer liten risiko. Ikke gå rett til verktøy for tilbakestilling til fabrikkinnstillinger med mindre Android tydelig begynner å starte og du ikke har noen tryggere vei videre.

## Lad som om batteriet er helt tomt

Bruk en vegglader, ikke en USB-port på en bærbar PC og ikke trådløs lading. Trådløs lading er praktisk når alt virker, men den legger til variabler som plassering og varme, og dem trenger du ikke under feilsøking.

Koble telefonen til med en kabel og adapter du vet virker. La den deretter ligge i minst 15 minutter. En telefon med dyputladet batteri viser kanskje ikke noe batterisymbol med en gang. Det er normalt.

Etter 15 minutter ser du etter tegn til liv. Et batterisymbol, en vibrasjon, en ladelyd eller en liten lysdiode betyr at telefonen får strøm. La den lade til minst 10 % før du prøver å starte den.

Hvis ingenting vises, endrer du én ting om gangen: kabel, lader og stikkontakt. Se inn i USB-C-porten med en lommelykt. Lommerusk kan pakkes så hardt sammen at kabelen virker tilkoblet uten å få ordentlig kontakt. Bruk en tannpirker av tre eller en plastpinne hvis du rengjør porten. Ikke bruk metall.

## Tving telefonen til å starte på nytt på riktig måte

En svart skjerm betyr ikke alltid at Android er slått av. Systemet kan ha fryst mens skjermen er mørk.

Bruk metoden for tvungen omstart som passer til merket:

- På Pixel holder du inne av/på-knappen i opptil 60 sekunder. Slipp når Google-logoen vises.
- På Samsung Galaxy holder du inne sideknappen eller av/på-knappen sammen med **Volum ned** til telefonen slår seg av og starter på nytt. Dette tar vanligvis mer enn 7 sekunder.
- På Xiaomi, Redmi og POCO holder du av/på-knappen inne i mer enn 10 sekunder.
- På andre Android-telefoner prøver du av/på-knappen og **Volum ned** sammen i 10-20 sekunder. Hvis det ikke virker, holder du av/på-knappen alene inne lenger.

Vibrasjon, varsellyder eller at telefonen ringer når noen ringer til den, peker mot skjermen i stedet for hele enheten. Det er et nyttig spor. En skjermreparasjon er irriterende, men det er et annet problem enn et dødt hovedkort.

## Kontroller om bare skjermen er død

Ring til telefonen. Bruk Googles Find Hub fra en annen enhet hvis tjenesten er konfigurert. Koble telefonen til en lader og lytt etter lyd eller kjenn etter vibrasjon. Koble den til en datamaskin og se om Windows, macOS eller datamaskinens enhetsoversikt oppdager noe.

Hvis datamaskinen finner telefonen, bør du ikke anta at dataene dermed er tilgjengelige. De fleste moderne Android-telefoner viser ikke filer via USB før skjermen er låst opp og filoverføring er godkjent. Deteksjonen betyr likevel at minst deler av maskinvaren fortsatt lever.

En sprukket skjerm med svarte flekker, linjer eller svak bakbelysning peker mot skjermskade. Nylig væskekontakt er mer alvorlig. Selv kort kontakt med væske kan føre til korrosjon i kontakter eller kortslutning i strømkretsene senere.

Et oppsvulmet batteri er situasjonen der du stopper. Hvis bakdekselet buler, skjermen løfter seg eller telefonen ikke ligger flatt, skal du ikke lade den og ikke presse den sammen. Lever den til et verksted.

## Hvis den når logoen, men ikke starter ferdig

Hvis du ser Samsung-, Pixel-, Xiaomi- eller Android-logoen, er telefonen ikke helt død. Den mislykkes under oppstarten.

Prøv Sikker modus hvis oppstarten kommer langt nok. På mange enheter kan du holde inne **Volum ned** under oppstart for å starte med nedlastede apper deaktivert. Hvis Sikker modus virker, avinstallerer du nylig installerte apper og starter normalt på nytt.

En sløyfe eller frysning før låseskjermen krever Recovery Mode. På Pixel holder du vanligvis inne av/på-knappen og **Volum ned** for å åpne bootloaderen, og velger deretter Recovery Mode. På Samsung bruker du ofte **Volum opp + av/på-knappen** mens telefonen er slått av, og nyere modeller kan kreve en tilkoblet USB-kabel. Xiaomi bruker ofte **Volum opp + av/på-knappen**.

I Recovery Mode velger du først **Reboot system now**. Hvis telefonen tilbyr **Wipe cache partition**, prøver du det etterpå fordi det ikke sletter dataene dine. Nyere Galaxy-modeller kan mangle valget, og Pixel-telefoner viser det vanligvis ikke. **Wipe data/factory reset** er siste lokale tiltak fordi det sletter telefonen.

Android 17 ble lansert for støttede Pixel-telefoner 16. juni 2026, og andre kompatible enheter følger senere. Hvis oppstartsproblemet begynte rett etter denne eller en annen stor systemoppdatering, bør du se på produsentens støtteside etter et reparasjonsverktøy eller en oppdateringsmelding før du sletter data.

## Bruk reparasjonsverktøy på datamaskin med forsiktighet

Dataverktøy kan installere Android på nytt, men de er ikke magiske verktøy for å redde filer.

For støttede Pixel-modeller er Googles **Pixel Update and Software Repair** det tryggeste førstevalget når telefonen kan kobles til via USB. **Android Flash Tool** kan installere systembilder på støttede Pixel-enheter gjennom en WebUSB-kompatibel nettleser, men telefonen må være i riktig tilstand, og prosessen kan kreve opplåsing eller sletting.

Samsung Smart Switch kan tilby nødgjenoppretting av programvare ved enkelte mislykkede oppdateringer. Xiaomis MiFlash kan installere fastvare på nytt på støttede enheter, men krever ofte tilgang til bootloader eller fastboot og riktig ROM for den nøyaktige modellen.

Det er her veiledninger blir farlige. Feil programvareversjon kan gjøre gjenopprettingen vanskeligere. Hvis du ikke allerede kjenner modellnummeret, regionen, bootloader-statusen og sikkerhetskopieringssituasjonen, er et verksted det tryggere valget.

## Når det sannsynligvis er maskinvare

Ingen ladeindikator, ingen vibrasjon, ingen USB-deteksjon og ingen reaksjon på tvungen omstart etter testing med flere ladere peker mot maskinvarefeil.

Vanlige feil er dødt batteri, skadet USB-C-port, defekt strømstyringsbrikke, skjermfeil, væskeskade eller feil på hovedkortet. Batteri- og portreparasjoner ligger vanligvis i den rimeligere enden. Feil på kretskortnivå gjør ikke det.

Hvis telefonen er dekket av garanti, reklamasjon eller forsikring, bruker du den kanalen først. Et uavhengig verksted kan være et godt valg, men garanti- eller forsikringsleverandøren kan avvise senere krav hvis telefonen allerede er åpnet et annet sted.

## Slik redder du dataene

Uten sikkerhetskopi får du raskt færre muligheter ved oppstartsfeil. Recovery Mode lar ikke en vanlig, ikke-rootet telefon vise filene dine. USB-filoverføring krever som regel at telefonen er låst opp. En død skjerm kan noen ganger omgås med USB-C-videoutgang, hub, tastatur og mus, men bare på modeller som støtter videoutgang og fortsatt starter.

Profesjonell datagjenoppretting finnes, men den er dyr og uten garanti for resultat. Moderne Android-kryptering betyr også at selve lagringsbrikken vanligvis ikke er nok. Enheten må repareres så langt at den kan låses opp.

Det er den delen ingen liker å høre. Sikkerhetskopier er kjedelige helt til den dagen de ikke er det.
