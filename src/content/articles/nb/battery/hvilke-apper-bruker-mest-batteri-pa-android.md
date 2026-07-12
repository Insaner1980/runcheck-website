---
title: "Hvilke apper bruker mest batteri på Android"
description: "De fleste lister over «apper som tømmer batteriet» er altfor skråsikre. Telefonen din bryr seg ikke om hvilken app som toppet en rangering på en annens testbenk. Den bryr seg om hva du har installert, hvilke tillatelser du har gitt, hvor ofte du åpner appene, og om de fortsetter å arbeide etter at skjermen er slått av."
listSummary: "De fleste lister over «apper som tømmer batteriet» er altfor skråsikre."
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Drain"
tags: ["batteri","strømforbruk","feilsøking","android","ytelse"]
locale: "nb"
draft: false
---
Når det er sagt, er det de samme kategoriene som stadig skaper problemer.

## Apptypene som vanligvis ligger nær toppen

Videoapper er opplagte. YouTube, Netflix, TikTok, Instagram Reels og lignende apper holder skjermen på, dekoder video, henter data kontinuerlig og brukes ofte med høy lysstyrke fordi folk ser på dem i lyse rom eller utendørs. Hvis en videoapp ligger høyt på batterilisten etter to timers bruk, er det ikke en feil. Det er fysikk.

Navigasjonsapper er den neste enkle kategorien. Google Maps, Waze, leveringsapper, apper for bestilling av transport og treningsmålere kombinerer GPS, mobildata, skjermtid og noen ganger Bluetooth. Én time med trinnvis navigasjon kan ta en synlig del av batteriet, særlig på 5G eller med svakt signal.

Spill er brutale. Et 3D-spill belaster GPU, CPU, skjerm, lyd, berøringsregistrering og nettverk samtidig. Den gode nyheten er at spill vanligvis tømmer batteriet mens du spiller, ikke i stillhet klokken 3 om natten. Hvis et spill viser bruk i bakgrunnen, bør du begrense det.

Sosiale medier og meldingsapper er mer rotete. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit og nyhetsapper vil alle ha ferskt innhold og varsler. Noen oppfører seg bra. Andre gjør det ikke. Det irriterende er at to personer kan installere samme app og få forskjellig batteribruk fordi den ene har aktivert posisjon, varsler, automatisk avspilling, kontaktsynkronisering og bakgrunnsoppdatering, mens den andre ikke har det.

## Bakgrunnsbruk betyr mer enn appnavnet

En batteriskjerm som sier at en app brukte 8 % mens du så på video i en time, forteller noe ganske uinteressant. En batteriskjerm som sier at en app brukte 8 % i bakgrunnen mens telefonen lå i lommen, forteller noe nyttig.

Se først etter denne forskjellen. På Pixel går du til **Innstillinger > Batteri > Batteribruk**, velger **Se etter apper** og trykker på appen. På Samsung bruker du **Innstillinger > Batteri og enhetsvedlikehold > Batteri** og åpner detaljvisningen. Ordlyden varierer etter modell, men du vil se tid i forgrunnen, tid i bakgrunnen og om appen får fortsette å kjøre.

En grov regel er at en app som ikke er viktig, bør ha en god grunn hvis den bruker mer enn et par prosent i bakgrunnen gjennom en dag. Meldingsapper, musikk, navigasjon, helse- og sikkerhetsapper kan ha en grunn. En shoppingapp har det ikke.

De vanligste mekanismene bak strømbruk i bakgrunnen er enkle: pushvarsler, innholdssynkronisering, posisjonskontroller, wake locks, nettverkstrafikk i bakgrunnen og analyse-SDK-er. Wake locks er verdt å nevne fordi Google nå behandler dem som et kvalitetsproblem i Play. En delvis wake lock holder CPU-en våken selv når skjermen er av. Brukes den med måte, er det normalt. Holdes den for lenge, sløser den med batteriet.

## Google Play har nå et kvalitetssignal for batteribruk

Dette er den store endringen siden eldre versjoner av denne artikkelen. Google gjorde **Excessive partial wake locks** til en sentral måling i Android vitals. Fra 1. mars 2026 kan apper som passerer grensen, få dårligere synlighet i Google Plays anbefalingsflater og en advarsel på butikksiden.

Grensen er konkret. For mobilapper regner Android vitals ikke-unntatt bruk av delvise wake locks som overdreven når de holdes i minst to timer i løpet av 24 timer, og dette mønsteret påvirker mer enn 5 % av appens økter, beregnet som gjennomsnitt over 28 dager.

Det betyr ikke at Google Play viser deg enhver batterikostnad før du installerer en app. Et spill blir ikke merket fordi det bruker mye strøm mens du aktivt spiller. Google vurderer heller ikke om du personlig bruker fem timer på TikTok. Målingen retter seg mot at CPU-en holdes våken i bakgrunnen mens skjermen er av.

Likevel er det nyttig. En vanlig bruker kan nå få se en batteriadvarsel før en dårlig oppført app installeres. Det er bedre enn å oppdage problemet etter tre netter med batteritømming.

## Hva du bør endre før du avinstallerer apper

Avinstallering er ryddig, men de fleste sletter ikke de viktigste sosiale mediene, videoappene eller meldingsappene sine. Begynn derfor med innstillinger som reduserer skjult arbeid.

Slå av automatisk avspilling der appen tillater det. Instagram, Facebook, X, Reddit, YouTube og TikTok kan bruke batteri og data på å klargjøre videoer du kanskje aldri ser.

Begrens posisjonstilgangen. Åpne appenes posisjonstillatelser i Innstillinger og se etter apper som har tilgang hele tiden. En værapp klarer seg vanligvis med posisjon mens den er i bruk. En navigasjonsapp trenger posisjon under turer. En app for sosiale medier trenger sjelden permanent tilgang.

Begrens batteribruk i bakgrunnen. På Pixel-lignende Android går du til **Innstillinger > Apper > Batteribruk for apper** og reduserer bakgrunnstilgangen for apper som ikke trenger umiddelbare oppdateringer. På Samsung bruker du **Innstillinger > Batteri og enhetsvedlikehold > Batteri > Grenser for bakgrunnsbruk**, og legger sjelden brukte apper under **Apper i dvalemodus** eller **Apper i dyp dvale**.

Reduser varsler. Hvert varsel kan vekke telefonen, tenne skjermen, utløse vibrasjon og hente nytt innhold. Vær streng med apper som varsler om markedsføring, anbefalinger eller meldinger av typen «dette kan du like».

Oppdater appene. Det er et kjedelig råd, men det betyr noe etter Android-oppdateringer, blant annet den første lanseringen av Android 17 på støttede Pixel-telefoner. Apputviklere retter batterifeil, wake lock-feil, synkroniseringsløkker og kompatibilitetsproblemer. Både Samsung og Google anbefaler app- og systemoppdateringer ved feilsøking av høyt batteriforbruk.

## Nettleseren er ikke alltid bedre enn appen

Et vanlig råd er å bruke nettversjonen i stedet for appen. Noen ganger er det smart fordi et nettsted ikke kan kjøre samme type vedvarende Android-tjeneste i bakgrunnen som en installert app. Hvis Facebook eller X bare tapper batteriet fordi den installerte appen stadig vekker telefonen, kan mobilnettstedet hjelpe.

Men ikke gjør det til en regel. Kontrollerte undersøkelser som har sammenlignet Android-apper med nettversjonene deres, har vist at installerte apper kan bruke mindre energi under aktiv bruk for enkelte tjenester. En nettleserfane er ikke magisk. Den må fortsatt gjengi video, JavaScript, annonser, sporingskode og bilder.

Min praktiske vurdering er denne: bruk nettleseren for tjenester du sjekker av og til og ikke trenger varsler fra. Bruk den installerte appen for tjenester du bruker mye, særlig hvis nettversjonen er treg eller hakkete. Begrens deretter appens bakgrunnstilgang hvis den begynner å dukke opp i nattlig batteribruk.

## Når en diagnoseapp hjelper

Androids innebygde batteriskjerm bør være første stopp. Den finnes allerede på telefonen og er koblet til operativsystemet.

Et verktøy som runcheck blir nyttig når batteritallet alene ikke forklarer mønsteret. Hvis strømforbruket øker samtidig med varme, svakt signal, tregt nettverk eller press på lagringsplassen, peker det mot en annen løsning enn bare å skylde på Instagram. Sammenhengen betyr noe.

AccuBattery og lignende verktøy kan også anslå batterikapasiteten over tid, men tallene bør behandles som anslag med mindre telefonen selv viser batterihelsen.

## En bedre måte å finne appene som bruker mest

Gjør dette gjennom to vanlige dager:

1. Lad telefonen normalt og bruk den normalt.
2. Sjekk **Innstillinger > Batteri > Batteribruk** om kvelden.
3. Skriv ned de fem øverste appene og om de brukte batteri i forgrunnen eller bakgrunnen.
4. Begrens bare apper med bakgrunnsbruk som ikke gir mening.
5. Sjekk igjen neste dag.

Ikke tøm Nylige apper hver time. Android opplyser at systemet styrer minne og batteri automatisk, og tvangslukking bruker ofte mer strøm når appene åpnes på nytt. Tving stopp er for en app som oppfører seg dårlig, ikke for daglig rydding.

Appene som bruker mest batteri, er vanligvis de som holder skjermen, nettverket, GPS, CPU eller GPU opptatt. Appene du bør rette på, er de som gjør dette når du ikke bruker dem.
