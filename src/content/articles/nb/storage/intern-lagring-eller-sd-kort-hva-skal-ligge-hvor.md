---
title: "Intern lagring eller SD-kort: hva skal ligge hvor"
description: "Et microSD-kort kan gi en Android-telefon mer plass, men det er ikke det samme som intern lagring. Det er her mange misforstår. Mer plass og rask plass er to forskjellige ting."
listSummary: "Et microSD-kort kan gi en Android-telefon mer plass, men det er ikke det samme som intern lagring."
hub: "storage"
sourceNumber: 86
order: 8
tags: ["lagring","android","opprydding","optimalisering","guide"]
locale: "nb"
draft: false
---
Dette er enda viktigere i 2026, fordi Android-telefoner bygger på svært forskjellig lagringsmaskinvare. Mange flaggskip og mellomklassemodeller har ikke microSD-spor i det hele tatt. Pixel-telefoner har ikke et slikt spor, Samsung fjernet det fra Galaxy S-serien for flere år siden, og flere av dagens Galaxy A-modeller mangler det også. Samtidig støtter mange eldre Galaxy A- og M-telefoner, Motorola Moto G-modeller og Sony Xperia-telefoner fortsatt microSD.

Sjekk den nøyaktige modellen din. Det holder ikke å se på produktserien.

## Hastighetsforskjellen er reell

Intern lagring i moderne Android-telefoner bruker vanligvis UFS. Dagens toppmodeller bruker ofte UFS 4.x, og Samsungs UFS 4.0-lagring er oppgitt til lesehastigheter på opptil 4 200 MB/s og skrivehastigheter på opptil 2 800 MB/s. Eldre mellomklassemodeller med UFS 2.1 kan fortsatt komme opp i rundt 850 MB/s ved sekvensiell lesing.

Et vanlig microSD-kort er mye tregere. Selv et brukbart UHS-I-kort ligger som regel nærmere hastigheten til eksterne lagringsmedier enn telefonens interne lagring. Hastighetsmerkingen kan også gi feil inntrykk. V30 betyr at kortet er klassifisert for vedvarende videoskriving på rundt 30 MB/s. Det er nyttig ved videoopptak, men gjør ikke flyttbar lagring om til UFS når en app utfører tusenvis av små lese- og skriveoperasjoner.

Forskjellen i tilfeldig tilgang er grunnen til at apper ofte føles tregere fra et SD-kort.

## Behold apper i intern lagring

Apper bør ligge i intern lagring når det er mulig. Oppstart, databaser, synkronisering i bakgrunnen, varsler, miniatyrbilder og hurtigbuffer bruker lagringen hele tiden. Legger du alt dette på et tregt kort, merkes det som forsinkelser.

Android kan flytte enkelte apper til adoptert eller ekstern lagring, men bare når både appen og enheten tillater det. Apper kan bare plasseres i adoptert lagring når utvikleren har aktivert støtte gjennom attributtet android:installLocation. Mange apper gjør ikke det.

Spill er området der folk oftest prøver å tvinge frem en løsning. Et spill på 15 GB kan se ut som den perfekte kandidaten for SD-kortet. I praksis blir lastetidene lengre, oppdateringene tregere, og enkelte spill nekter ganske enkelt å flytte. Skal du velge hva som skal bort, er det vanligvis bedre å avinstallere et spill du ikke bruker enn å prøve å kjøre det fra et kort.

## Legg medier på SD-kortet

Bilder, videoer, musikk, podkaster, filmer, frakoblede kart, PDF-er og arkiverte filer passer bedre på SD-kort. Slike filer leses i større bolker og trenger ikke samme hastighet ved tilfeldig tilgang som apper.

Hvis kameraappen støtter det, kan du sette lagringsstedet til SD-kort. Kameraappene fra Samsung, Motorola og Sony har tilbudt dette på mange modeller med kortspor, men den nøyaktige banen varierer med modell og Android-versjon. Se etter **Camera settings > Storage location** eller et tilsvarende valg.

Strømmeapper kan også la deg lagre frakoblede nedlastinger på SD-kortet. Netflix, Spotify, YouTube og kartapper har endret innstillingene sine over tid, så sjekk i selve appen i stedet for å anta at Android styrer dette globalt.

Det finnes en ulempe. Hvis kortet svikter, forsvinner tilgangen til bildene og nedlastingene sammen med det. Bruk skylagring, en kopi på datamaskinen eller en annen sikkerhetskopi for alt som er viktig.

## Adoptert lagring høres bedre ut enn det fungerer i praksis

Android 6.0 innførte adoptert lagring. Android kan da formatere og kryptere flyttbar lagring slik at den fungerer mer som intern lagring. Kortet blir knyttet til den ene telefonen, og Android kan lagre apper og private data der.

På papiret løser dette problemet med lite intern lagring. I praksis er det et kompromiss. Et tregt kort kan gjøre hele telefonen seig, og hvis kortet slutter å virke, kan Android miste data systemet forventet å ha tilgjengelig. Hvis du tar ut et adoptert kort uten å løse det ut riktig, kan apper eller data på kortet også slutte å fungere.

Android advarer om trege kort under oppsettet på enkelte enheter, men advarselen gjør ikke mediet raskere. Den varsler deg bare før du binder deg til løsningen.

Adoptert lagring finnes heller ikke overalt. Noen produsenter skjuler eller deaktiverer funksjonen, særlig på telefoner der opplevelsen ville blitt dårlig. Hvis valget mangler, kan det være en beslutning fra produsenten og ikke noe du har gjort feil.

## Separat, flyttbar lagring er det tryggeste utgangspunktet

Når kortet brukes som separat, flyttbar lagring, vises det som en egen lagringsenhet. Du kan ta det ut, lese det på en datamaskin, flytte filer til og fra kortet og først og fremst bruke det til medier.

For de fleste er dette den beste løsningen. Behold apper og appdata i telefonen. Legg kamerafiler, frakoblet musikk, filmer, dokumenter og sikkerhetskopier på kortet. Det er mindre avansert, men konsekvensene blir mer oversiktlige hvis noe går galt.

Enkelt er bra her.

## Hva du bør gjøre når intern lagring nesten er full

Når det er svært lite ledig intern lagring, kan telefonen føles tregere. Flash-lagring trenger ledige blokker for skriving og opprydding, og Android trenger også plass til appoppdateringer, systemoppdateringer, hurtigbuffer og midlertidige filer. En telefon med 128 GB kan fortsatt oppføre seg dårlig hvis de siste få gigabytene hele tiden må fordeles på nytt.

Start med **Innstillinger > Lagring**. Hvis bilder og videoer tar mest plass, kan du flytte medier til kortet eller skyen. Hvis apper dominerer, avinstaller apper du ikke bruker og tøm hurtigbufferen til appene som bruker mest plass. Hvis Nedlastinger er full, slett gamle installasjonsfiler, ZIP-filer, PDF-er og eksporterte videoer.

Å flytte et appikon til flyttbar lagring er sjelden den ryddige løsningen folk håper på.

## Hastighetsmerking på SD-kort, forklart enkelt

Class 10 og U1 holder fint til vanlige bilder, musikk og dokumenter.

V30 er et tryggere valg for 4K-video, fordi klassen bygger på vedvarende skrivehastighet.

A1 og A2 gjelder appytelse. De er mest relevante hvis du insisterer på adoptert lagring eller kjører app-lignende arbeidsoppgaver fra kortet. De gjør ikke microSD om til UFS.

Kjøp kort fra kjente merker, og styr unna mistenkelig billige kort med høy oppgitt kapasitet. Falske kort er fortsatt vanlige, og når det går galt, går det stygt galt: Kortet ser stort ut helt til eldre filer begynner å bli korrupte.

## Hvis telefonen ikke har SD-kortspor

Bruk skylagring for bilder og video, flytt store filer til en datamaskin, eller bruk en USB-C-minnepinne med USB OTG til sporadiske overføringer. Utover det er svaret ganske kjedelig: Avinstaller apper du ikke bruker, tøm apphurtigbuffer som har vokst ut av kontroll, slett gamle filer i Nedlastinger, og unngå å kjøpe en telefon med for lite lagring neste gang.

Det siste høres direkte ut fordi det er sant. En Android-telefon med 64 GB kan fortsatt fungere i 2026, men den gir svært lite rom for videoer, spill, frakoblede kart og flere års mediefiler fra chatteapper.
