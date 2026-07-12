---
title: "Slik sjekker du signalstyrken på mobilnettet (dBm forklart)"
description: "Signalstrekene er nyttige for et raskt blikk, men de er ikke en måling. Én telefon kan vise fire streker mens en annen viser to, selv om begge er koblet til samme operatør i samme rom. Vil du ha det faktiske tallet, ser du etter signalstyrken i dBm."
listSummary: "Signalstrekene er nyttige for et raskt blikk, men de er ikke en måling."
hub: "network"
sourceNumber: 93
order: 4
tags: ["nettverk","tilkobling","android","feilsøking","guide"]
locale: "nb"
draft: false
---
Det høres mer teknisk ut enn det er. dBm er ganske enkelt effektnivået telefonen mottar fra mobilnettet. Jo nærmere tallet er null, desto sterkere er signalet. En måling på -75 dBm er sterkere enn -95 dBm. Enkelt nok.

## Den raske måten å lese dBm på

Signalstyrken vises som et negativt tall fordi telefonen måler svært små mengder radioeffekt. Ved normal bruk ser du vanligvis noe mellom omtrent -50 dBm og -120 dBm. Nær en basestasjon kan du komme opp mot -50 dBm. Dypt inne i en betongbygning, i en kjeller eller ytterst i dekningsområdet kan tallet nærme seg -110 dBm eller bli enda dårligere.

Skalaen er logaritmisk. Hver forskjell på 3 dBm tilsvarer omtrent en dobling eller halvering av mottatt effekt. Derfor er -80 dBm ikke bare litt bedre enn -86 dBm. Målt i effekt er signalet omtrent fire ganger sterkere. Helt sant.

For LTE og de fleste 5G-forbindelser under 6 GHz er disse områdene en nyttig tommelfingerregel:

| Måling | Hva det vanligvis betyr |
|---|---|
| -50 til -70 dBm | Utmerket. Samtaler og data bør være stabile, så lenge basestasjonen ikke er overbelastet. |
| -70 til -85 dBm | Bra. Dette er normalt for brukbar dekning utendørs eller nær et vindu. |
| -85 til -100 dBm | Brukbart, men ikke spesielt godt. Nettsurfing fungerer, strømming kan bufre, og opplastingshastigheten kan falle først. |
| -100 til -110 dBm | Svakt. Samtaler kan brytes, meldinger kan bli forsinket, og modemet bruker mer strøm på å holde forbindelsen. |
| Under -110 dBm | Marginalt. Regn med tidsavbrudd, perioder uten dekning eller tvunget overgang til et annet nettverkslag. |

Dette er ikke universelle grenser for bestått eller ikke bestått. En telefon på -95 dBm kan fungere fint hvis signalet er rent og basestasjonen har ledig kapasitet. En annen telefon på -75 dBm kan gå tregt hvis cellen er overbelastet eller det er mye interferens.

## Slik sjekker du signalstyrken på Android

Den nøyaktige menyen varierer med produsent, Android-versjon og operatørtilpasning. Det raskeste trikset er å åpne Innstillinger og søke etter «SIM-status» eller «signalstyrke».

På Pixel og mange Android-telefoner med et grensesnitt nær standard Android, også Pixel-modeller som støtter Android 17, kan du prøve **Innstillinger > Om telefonen > SIM-status**. Enkelte versjoner viser også SIM-opplysninger under **Innstillinger > Nettverk og internett > SIM-kort**. Se etter **Signalstyrke**. Der vises vanligvis en dBm-verdi og en ASU-verdi.

På Samsung Galaxy finner du vanligvis opplysningene ved å åpne **Innstillinger > Om telefonen** og lete etter statusinformasjon for SIM-kortet. I enkelte One UI-versjoner heter punktet **SIM-status**. Bruk søket i Innstillinger hvis menyvalget ikke vises.

Det finnes én hake: Android viser vanligvis målingen for nettverkslaget du bruker akkurat nå. Hvis telefonen ligger på LTE, gjelder tallet LTE. Hvis den bruker 5G NR, kan verdien være basert på referansesignalet for 5G, avhengig av hva modemet og operatøren gjør tilgjengelig. Du får ikke alltid se LTE- og 5G-verdier side om side.

## Skjulte testmenyer

Mange Android-telefoner reagerer fortsatt på denne koden i telefonappen:

`*#*#4636#*#*`

Åpne Telefon-appen og tast inn koden. Da kan menyen Testing dukke opp. Trykk på Phone information for å se nettverkstype, signalstyrke, datatilkobling og andre radioopplysninger. Ikke endre foretrukne nettverksinnstillinger her med mindre du vet nøyaktig hva du gjør. Dette er en diagnoseskjerm, ikke en brukervennlig innstillingsmeny.

Samsung blokkerer ofte denne generelle koden. På mange Galaxy-telefoner åpner `*#0011#` Service Mode i stedet. Der kan du se opplysninger om cellen telefonen bruker, frekvensbånd og signalmålinger. Operatørtilpassede modeller kan deaktivere begge kodene, så du bør ikke regne med at de alltid virker.

## Apper som gjør dette enklere

Apper som Network Cell Info Lite, CellularZ og Signal Strength viser dBm-verdien på hovedskjermen og oppdaterer den kontinuerlig. De er nyttige når du går rundt i et hus, på et kontor eller en parkeringsplass for å finne stedet der telefonen faktisk får bedre forbindelse.

En god signalapp bør vise mer enn ett tall. RSRP forteller hvor sterkt signalet er, mens RSRQ og SINR sier mer om signalet er brukbart eller drukner i støy.

runcheck viser nettverkskvalitet sammen med andre målinger av enhetens tilstand og lagrer historikk over tid. Det betyr noe fordi én dBm-måling bare er et øyeblikksbilde. Med historikk ser du lettere om signalet alltid er svakt i ett rom, bare dårlig i rushtiden eller plutselig ble verre etter en oppdatering.

## RSRP, RSSI, RSRQ og SINR uten hodepine

Diagnoseskjermer viser flere forkortelser som ligner på hverandre. De betyr ikke det samme.

RSSI betyr Received Signal Strength Indicator. Det ble mye brukt for eldre 2G- og 3G-forbindelser og kan også dukke opp i wifi-verktøy. RSSI måler all mottatt effekt, både det nyttige signalet, støy og interferens. Derfor er det et mindre presist mål ved feilsøking av mobilnett.

RSRP betyr Reference Signal Received Power. For LTE og 5G er dette vanligvis det første styrketallet du bør se på. Det måler referansesignalet fra cellen telefonen er koblet til, ikke all radioenergi i kanalen.

RSRQ betyr Reference Signal Received Quality. Tallet kombinerer signalstyrke og interferens til et mål på kvalitet. En mindre negativ verdi er bedre. For LTE er omtrent -3 dB utmerket, mens verdier nærmere -15 dB eller -20 dB tyder på dårlig kvalitet.

SINR betyr Signal to Interference plus Noise Ratio. Høyere er bedre. Over 20 dB er utmerket, 10-20 dB er bra, og under 0 dB betyr at støy og interferens er sterkere enn det nyttige signalet.

Den praktiske versjonen er enkel: sjekk RSRP først. Hvis RSRP er bra, men data fortsatt går tregt, ser du på RSRQ og SINR. Sterkt signal med dårlig kvalitet er vanlig i travle byer, boligblokker, stadioner og andre steder der mange celler overlapper.

## Hvorfor full dekning fortsatt kan være treg

Signalstrekene beskriver hovedsakelig signalnivået. De forteller ikke hvor mye kapasitet basestasjonen har igjen, hvor mange som bruker den, om operatøren nedprioriterer abonnementet ditt eller om telefonen ligger på et lavfrekvent 5G-lag som oppfører seg mer som god LTE enn den raske 5G-en i reklamen.

Derfor kan to tester på samme sted se selvmotsigende ut. Telefonen kan vise -68 dBm og likevel laste ned tregt på en konsert fordi hundrevis eller tusenvis av enheter konkurrerer om samme celle. Klokken 02.00 kan den samme telefonen på samme sete føles rask.

## Hvorfor signalmålinger hopper opp og ned

Signalstyrken endrer seg selv når du står stille. Radiobølger reflekteres fra bygninger, biler, vegger, mennesker og terreng. Noen refleksjoner hjelper. Andre opphever deler av signalet. Flytter du telefonen noen få centimeter, kan målingen endre seg.

Bevegelse innendørs gjør utslagene større. Et vindu, en heissjakt, en betongvegg, et metalltak eller lavemisjonsglass kan endre målingen med 10 dB eller mer. Kjellere og rom midt i bygningen er vanligvis verst fordi signalet må gjennom mer materiale før det når telefonen.

Tidspunktet kan også spille inn, men ikke alltid fordi selve signalet har endret seg. I travle perioder kan cellen være overbelastet, slik at forbindelsen føles dårligere selv om dBm-tallet er omtrent det samme.

## Hva regnes som et godt 5G-signal?

For 5G under 6 GHz er en omtrentlig RSRP-verdi rundt -80 dBm god, mens omtrent -100 dBm begynner å bli svakt. Stabil mmWave-dekning er langt mer avhengig av nøyaktig plassering. Du kan ha en rask mmWave-forbindelse utendørs med fri sikt og miste den ved å gå rundt et hjørne eller inn i en bygning.

Ikke bedøm 5G bare etter ikonet. Se på signalstyrke, kvalitet, hastighet, forsinkelse og om telefonen stadig faller tilbake til LTE.

## Korte svar

Kan du forbedre signalet uten en signalforsterker? Noen ganger. Gå nærmere et vindu, gå opp en etasje, gå ut eller prøv en annen side av bygningen. Hvis 5G er svakt innendørs, kan LTE være den beste praktiske forbindelsen fordi lavere LTE-frekvenser ofte trenger lettere gjennom vegger.

Er dBm for mobilnett det samme som dBm for wifi? Enheten er den samme, men de nyttige områdene er forskjellige. Wifi på -50 dBm er sterkt, og rundt -70 dBm begynner stabiliteten ofte å lide. Mobilnett er bygd for lengre avstander og kan derfor fungere ved langt lavere tall.

Bør du stole på signalstreker eller dBm? Bruk strekene for et raskt blikk. Bruk dBm når du feilsøker.
