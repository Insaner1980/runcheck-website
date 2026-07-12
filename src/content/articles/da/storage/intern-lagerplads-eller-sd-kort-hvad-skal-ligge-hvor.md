---
title: "Intern lagerplads eller SD-kort: Hvad skal ligge hvor?"
description: "Et microSD-kort kan give en Android-telefon mere plads, men det er ikke det samme som intern lagerplads. Det er her, mange tager fejl. Mere plads og hurtig plads er ikke det samme."
listSummary: "Et microSD-kort kan give en Android-telefon mere plads, men det er ikke det samme som intern lagerplads."
hub: "storage"
sourceNumber: 86
order: 8
tags: ["lagerplads","android","oprydning","optimering","guide"]
locale: "da"
draft: false
---
Det betyder mere i 2026, fordi lageret i Android-telefoner bygger på meget forskellig hardware. Mange topmodeller og telefoner i mellemklassen har slet ingen microSD-kortplads. Pixel-telefoner har ikke en, Samsung fjernede den fra Galaxy S-serien for flere år siden, og flere aktuelle Galaxy A-modeller undlader den også. Samtidig understøtter mange ældre Galaxy A- og M-telefoner, Motorola Moto G-modeller og Sony Xperia-telefoner stadig microSD.

Tjek den præcise model. Serienavnet er ikke nok.

## Hastighedsforskellen er reel

Intern lagerplads i moderne Android-telefoner bruger som regel UFS. Aktuelle topmodeller bruger ofte UFS 4.x, og Samsungs UFS 4.0-lager er angivet til læsehastigheder på op til 4.200 MB/s og skrivehastigheder på op til 2.800 MB/s. Ældre telefoner i mellemklassen med UFS 2.1 kan stadig nå omkring 850 MB/s ved sekventiel læsning.

Et almindeligt microSD-kort er meget langsommere. Selv et fornuftigt UHS-I-kort ligger som regel tættere på hastigheden for eksterne medier end på telefonens interne lager. Hastighedsmærket på kortet kan også være misvisende. V30 betyder, at kortet er klassificeret til vedvarende videoskrivning på omkring 30 MB/s. Det er nyttigt til videooptagelse, men det gør ikke det flytbare lager til UFS, når en app udfører tusindvis af små læse- og skriveoperationer.

Forskellen i tilfældig adgang er grunden til, at apps føles dårligere fra et SD-kort.

## Behold apps på den interne lagerplads

Apps bør ligge på den interne lagerplads, når det er muligt. Appstart, databaser, baggrundssynkronisering, notifikationer, miniaturebilleder og cache bruger lageret hele tiden. Lægger du det på et langsomt kort, mærker du det som forsinkelse.

Android kan flytte visse apps til adopteret eller eksternt lager, men kun når både appen og enheden tillader det. Apps kan kun placeres på adopteret lager, når udvikleren har aktiveret understøttelse via attributten `android:installLocation`. Mange apps gør det ikke.

Spil er det område, hvor fristelsen er størst. Et spil på 15 GB ligner den oplagte kandidat til SD-kortet. I praksis bliver indlæsningstiderne længere, opdateringer går langsommere, og nogle spil nægter ganske enkelt at blive flyttet. Hvis du skal vælge, hvad der skal væk, er det som regel bedre at afinstallere et spil, du ikke bruger, end at prøve at køre det fra et kort.

## Læg medier på SD-kortet

Billeder, videoer, musik, podcasts, film, offlinekort, PDF-filer og arkiverede filer egner sig bedre til et SD-kort. De læses i større blokke og kræver ikke samme hastighed ved tilfældig adgang som apps.

Hvis kameraappen understøtter det, kan du vælge SD-kortet som lagerplacering. Kameraapps fra Samsung, Motorola og Sony har tilbudt denne mulighed på mange modeller med kortplads, men den præcise placering varierer efter model og Android-version. Se efter en indstilling for lagerplacering i kameraets indstillinger.

Streamingtjenester kan også give mulighed for at gemme offlineindhold på SD-kortet. Netflix, Spotify, YouTube og kortapps har ændret deres indstillinger over tid, så tjek i selve appen i stedet for at gå ud fra, at Android styrer det samlet.

Der er en ulempe. Hvis kortet går i stykker, mister du også adgangen til billederne og de downloadede filer. Brug sikkerhedskopiering i skyen, en kopi på en computer eller en anden sikkerhedskopi til alt vigtigt.

## Adoptable storage lyder bedre, end det fungerer

Android 6.0 introducerede adoptable storage. Funktionen lader Android formatere og kryptere et flytbart lager, så det fungerer mere som intern lagerplads. Kortet knyttes til den ene telefon, og Android kan gemme apps og private data på det.

På papiret løser det mangel på intern lagerplads. I praksis er det et kompromis. Et langsomt kort kan gøre telefonen træg, og hvis kortet dør, kan Android miste data, som systemet forventede var tilgængelige. Hvis du fjerner et adopteret kort uden at skubbe det korrekt ud, kan det også ødelægge apps eller data, der ligger på kortet.

Android advarer på nogle enheder om langsomme kort under opsætningen, men advarslen gør ikke langsomme medier hurtige. Den fortæller dig blot om problemet, før du fortsætter.

Adoptable storage findes heller ikke overalt. Nogle producenter skjuler eller deaktiverer funktionen, især på telefoner, hvor oplevelsen ville blive dårlig. Hvis valgmuligheden mangler, kan det være producentens beslutning, ikke noget du har gjort forkert.

## Bærbart lager er det sikrere standardvalg

Bærbart lager betyder, at kortet forbliver et separat drev. Du kan tage det ud, læse det på en computer, flytte filer til og fra det og hovedsageligt bruge det til medier.

For de fleste er det den bedre løsning. Behold apps og appdata i telefonen. Send kamerafiler, offline-musik, film, dokumenter og sikkerhedskopier til kortet. Det er mindre avanceret, men fejlene er lettere at håndtere.

Enkelt er godt her.

## Når den interne lagerplads næsten er fuld

Hvis den interne lagerplads bliver meget knap, kan telefonen føles langsommere. Flashlager har brug for ledige blokke til skrivning og oprydning, og Android skal også have plads til appopdateringer, systemopdateringer, cache og midlertidige filer. En telefon med 128 GB kan stadig opføre sig dårligt, hvis der hele tiden kæmpes om de sidste få gigabyte.

Begynd under Indstillinger > Lagerplads. Hvis billeder og videoer fylder mest, kan du flytte medier til kortet eller skyen. Hvis apps fylder mest, bør du afinstallere apps, du ikke bruger, og rydde cachen for de værste syndere. Hvis mappen Downloads er fuld, kan du slette gamle installationsfiler, ZIP-filer, PDF-filer og eksporterede videoer.

At flytte et appikon til et flytbart lager er sjældent den enkle løsning, folk håber på.

## SD-kortets hastighedsmærker forklaret enkelt

Class 10 og U1 er fine til almindelige billeder, musik og dokumenter.

V30 er et sikrere valg til optagelse af 4K-video, fordi klassificeringen handler om vedvarende skrivehastighed.

A1 og A2 beskriver appydeevne. De er mest relevante, hvis du absolut vil bruge adoptable storage eller køre app-lignende arbejdsbelastninger fra kortet. De gør ikke microSD til UFS.

Køb kort fra kendte mærker, og undgå mistænkeligt billige kort med høj kapacitet. Falske kort er stadig almindelige, og fejlen er grim: Kortet ser stort ud, indtil ældre filer begynder at blive beskadiget.

## Hvis telefonen ikke har en SD-kortplads

Brug skylager til billeder og video, flyt store filer til en computer, eller brug et USB-C-flashdrev med USB OTG til lejlighedsvise overførsler. Derefter er svaret kedeligt: Afinstaller apps, du ikke bruger, ryd appcache, når den er vokset ukontrolleret, slet gamle filer i Downloads, og undgå næste gang at købe en telefon med for lidt lagerplads.

Det sidste lyder kontant, fordi det er sandt. En Android-telefon med 64 GB kan stadig fungere i 2026, men den efterlader meget lidt plads til videoer, spil, offlinekort og flere års chatmedier.
