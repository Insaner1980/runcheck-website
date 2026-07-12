---
title: "Slik starter du Android i sikker modus, og når du bør bruke den"
description: "How to start Android in Safe Mode, what it disables, and how to use it to find problem apps."
listSummary: "How to start Android in Safe Mode, what it disables, and how to use it to find problem apps."
hub: "performance"
sourceNumber: 70
order: 7
tags: ["batteri","strømforbruk","feilsøking","android","ytelse"]
locale: "nb"
draft: false
---
Hvordan finner du ut om telefonen er treg fordi Android har en dårlig dag, eller fordi én app ødelegger alt i bakgrunnen? Sikker modus er den ryddigste testen.

Sikker modus starter Android med bare systemprogramvaren og de innebygde appene. Apper du har installert senere, deaktiveres til du starter telefonen på vanlig måte igjen. Ingenting slettes. Poenget er å isolere feilen: Hvis problemet forsvinner i sikker modus, er det sannsynligvis en tredjepartsapp som er involvert. Hvis problemet består, bør du undersøke Android, lagringsplassen, batteriet eller maskinvaren.

## Når sikker modus er verdt å bruke

Bruk sikker modus når telefonen krasjer, fryser, starter på nytt, blir overopphetet, bruker unormalt mye batteri eller viser popup-vinduer som ikke forsvinner. Den er også nyttig etter en stor Android-oppdatering hvis telefonen plutselig fungerer elendig og batteribruken ikke tydelig peker mot én app.

Den er ikke bare for dramatiske feil. Hvis tastaturet henger etter, startskjermen stadig tegnes opp på nytt eller telefonen bruker flere sekunder på å reagere etter opplåsing, kan sikker modus fortsatt svare på det viktige spørsmålet: Er en installert app en del av problemet?

Testen er enkel. Start i sikker modus, bruk telefonen i noen minutter og prøv å fremkalle problemet igjen.

## Start sikker modus når telefonen er på

På de fleste Android-telefoner åpner du først strømmenyen.

På Pixel 6 og nyere, inkludert Pixel Fold-modeller, holder du inne **av/på-knappen + volum opp** i noen sekunder. På mange andre telefoner holder du inne **av/på-knappen** eller **sideknappen**. Samsung-telefoner bruker ofte **sideknappen + volum ned**, eller strømikonet i hurtiginnstillingene.

Når strømmenyen vises, trykker og holder du inne **Slå av** eller **Start på nytt** på skjermen. Etter et øyeblikk skal Android vise et spørsmål om sikker modus. Trykk på **OK** eller **Sikker modus**.

Telefonen starter på nytt. Når den er ferdig, skal du se **Sikker modus** nederst til venstre.

## Start sikker modus når telefonen er av

Denne metoden er nyttig når telefonen er for ustabil til at du kommer til strømmenyen.

Slå på telefonen som vanlig. Så snart produsentlogoen eller oppstartsanimasjonen vises, trykker du og holder inne **volum ned**. Fortsett å holde til låseskjermen eller startskjermen er lastet. Hvis det virket, står det **Sikker modus** nederst på skjermen.

Tidspunktet har betydning. Trykker du for tidlig, kan enkelte telefoner åpne bootloaderen eller gjenopprettingsmodus. Trykker du for sent, starter Android normalt. Hvis du bommer, slår du av og prøver igjen.

## Merknader for Samsung

Samsung støtter begge metodene på dagens Galaxy-telefoner og -nettbrett.

På en Galaxy som er slått på, åpner du strømmenyen, trykker og holder du inne **Slå av**, og velger deretter **Sikker modus**. Når en Galaxy er slått av, starter du den og holder inne **volum ned** når Samsung-logoen vises.

Samsung opplyser også at enkelte tilpasninger, som bakgrunner eller temaer, kan bli tilbakestilt når du forlater sikker modus. Det er ikke tap av data, men det er irriterende. Ta et skjermbilde av startskjermen først hvis oppsettet er viktig for deg.

## Hvis telefonen har fryst

Hvis telefonen ikke reagerer, må du først tvinge frem en omstart.

På de fleste Samsung-telefoner holder du inne **av/på-knappen + volum ned** i mer enn 7 sekunder. På mange andre Android-telefoner holder du inne **av/på-knappen** eller **av/på-knappen + volum ned** i omtrent 10-15 sekunder, til skjermen blir svart eller telefonen starter på nytt.

Bruk deretter metoden for avslått telefon: Slå den på, vent på logoen og hold inne **volum ned**.

## Hva du bør teste i sikker modus

Ikke start i sikker modus og avslutt med en gang. Bruk telefonen lenge nok til å lære noe.

Prøv det som var ødelagt. Åpne Innstillinger. Lås opp telefonen noen ganger. Skriv i et tekstfelt. Følg med på batteritemperaturen. La skjermen være på i fem minutter. Hvis telefonen startet på nytt tilfeldig, lar du den ligge en stund.

Sikker modus deaktiverer nedlastede apper, så de vanlige appene dine for meldinger, sosiale medier, bank, VPN, startskjermapper og tastatur kan slutte å virke. Det er forventet. Innebygd telefon, SMS, Wi-Fi, mobildata og Innstillinger skal fortsatt være tilgjengelig. Google opplyser at flymodus slås på automatisk på Pixel-enheter når du går inn i sikker modus. Slå den av hvis du trenger nettverkstilkobling under testen.

## Hvis problemet forsvinner

Da er en tredjepartsapp hovedmistenkt.

Begynn med appene som nylig har blitt endret. Nye installasjoner, ferske oppdateringer, startskjermapper, VPN-er, renseapper, automatiseringsapper, batterisparere, tastaturapper og alt med tilgjengelighets- eller enhetsadministratortillatelser bør undersøkes først.

Avslutt sikker modus, avinstaller eller deaktiver én mistenkt app, og test telefonen normalt. Ikke fjern ti apper samtidig med mindre telefonen er ubrukelig. Én endring om gangen viser hva som faktisk løste problemet.

Noen apper er vanskelige å avinstallere fordi de har enhetsadministratortilgang. Hvis Android nekter å fjerne en app, kan du se under sikkerhets- og personverninnstillingene etter menyen for apper med enhetsadministratortilgang. Navnet og plasseringen varierer, men prinsippet er det samme: Fjern administratortilgangen først, og avinstaller deretter appen.

## Hvis problemet fortsetter

Hvis sikker modus ikke hjelper, skyldes feilen sannsynligvis ikke en nedlastet app.

Da kan årsaken være en systemfeil, en korrupt systemtilstand, press på lagringsplassen, en dårlig oppdatering, et sviktende batteri, overoppheting eller et annet maskinvareproblem. Etter en nylig oppgradering til Android 17 ville jeg for eksempel kontrollert om andre eiere av samme modell rapporterer det samme symptomet før jeg gjør noe drastisk.

De neste trinnene er praktiske: Installer en ny systemoppdatering hvis det finnes en rettelse, frigjør lagringsplass, kontroller batteribruk og temperatur, tøm cachepartisjonen bare hvis telefonen fortsatt har dette valget, og ta sikkerhetskopi av viktige data før du vurderer en tilbakestilling til fabrikkinnstillinger.

En tilbakestilling er siste utvei. Den kan rette programvareproblemer, men er mye arbeid og reparerer ikke aldrende lagring, et svakt batteri eller en skadet knapp.

## Slik avslutter du sikker modus

Start telefonen på nytt på vanlig måte. Det er alt.

Trykk på av/på-knappen eller bruk strømikonet i hurtiginnstillingene, og velg **Start på nytt**. På enkelte Samsung-modeller kan du også trykke på et varsel om sikker modus for å slå den av.

Hvis telefonen stadig går tilbake til sikker modus, bør du kontrollere **volum ned-knappen**. En knapp som sitter fast, et for stramt deksel, smuss rundt knappen eller en skadet bryter kan aktivere sikker modus under oppstart. Fjern dekselet og start på nytt.

## Begrensninger og vanlige overraskelser

Sikker modus sletter ikke apper, bilder, meldinger eller kontodata. Den deaktiverer bare nedlastede apper mens modusen er aktiv.

Widgeter fra tredjepartsapper kan forsvinne fra startskjermen i sikker modus. Google anbefaler uttrykkelig å ta et skjermbilde på forhånd hvis widgetene er viktige. Du kan måtte legge dem til igjen etter at du avslutter.

Sikker modus deaktiverer heller ikke produsentens systemapper. Systemkomponenter fra Samsung, Xiaomi, OnePlus, mobiloperatøren og Google kan fortsatt kjøre fordi Android behandler dem som en del av systemavbildningen. Hvis en forhåndsinstallert app skaper problemer, er det ikke sikkert at sikker modus isolerer den.

Den begrensningen er irriterende, men sikker modus er fortsatt verdt å bruke. På under fem minutter kan den svare på et av de nyttigste spørsmålene i Android-feilsøking.
