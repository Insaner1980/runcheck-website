---
title: "Slik fungerer NAND-flashlagring i telefoner, og derfor blir den tregere"
description: "Metabeskrivelse: Telefonlagring bruker NAND-flashminne. Her ser du hvorfor full lagring svekker ytelsen, hva TRIM og garbage collection gjør, og hvordan du holder storage I/O i god form."
listSummary: "Metabeskrivelse: Telefonlagring bruker NAND-flashminne."
hub: "storage"
sourceNumber: 89
order: 11
tags: ["ytelse","hastighet","android","optimalisering","feilsøking"]
locale: "nb"
draft: false
---
Telefonen kan ha en rask SoC, rikelig med RAM og likevel føles treg når lagringen nesten er full. Apper nøler før de åpnes. Kameraet bruker et ekstra øyeblikk på å lagre et bilde. Oppdateringer tar lengre tid enn de burde.

Det er ikke alltid prosessorens feil. Noen ganger er lagringen flaskehalsen.

## Hva NAND-flash gjør

Telefoner lagrer apper, bilder, meldinger, hurtigbuffer og systemdata på NAND-flashbrikker som er loddet fast på hovedkortet. En telefon som selges med 128 GB, gir deg aldri alle 128 GB til egne filer, fordi Android, systempartisjoner, gjenopprettingsdata, reservert plass og filsystemets overhead tar sin del først.

NAND lagrer data som elektrisk ladning i svært små celler. Cellene er ordnet i sider, og sidene er gruppert i større sletteblokker. Det upraktiske er dette: NAND kan skrive til tomme sider, men kan ikke overskrive en brukt side direkte.

Når data skal oppdateres, skriver kontrolleren den nye versjonen et annet sted, merker den gamle siden som ugyldig og oppdaterer kartleggingstabellen. Senere samler den de fortsatt gyldige sidene fra en blokk, flytter dem ved behov og sletter den gamle blokken slik at den kan brukes på nytt.

Denne oppryddingen kalles garbage collection. Det er normalt. Det er også en av grunnene til at en nesten full telefon føles tregere enn den samme telefonen med litt spillerom.

## Hvorfor full lagring føles treg

Når lagringen har mange tomme blokker, er det enkelt å skrive data. Kontrolleren kan velge et rent område og gå videre.

Når lagringen nærmer seg full, finnes det færre rene blokker. Kontrolleren må jobbe hardere for å finne plass, flytte gyldige data, slette blokker og deretter skrive de nye dataene. Dette ekstra interne arbeidet kalles write amplification, og det kan merkes som små stopp i vanlig bruk.

Du kan legge merke til det når du installerer apper, lagrer video, laster ned oppdateringer eller bytter mellom apper som bruker store hurtigbuffere. En telefon med 95 % brukt lagring kan føles mye eldre enn den egentlig er.

Den praktiske regelen er enkel: Prøv å holde minst 15-20 % av den interne lagringen ledig. Det er ikke en magisk grense, og lagringskontrollere oppfører seg forskjellig, men den ledige plassen gir Android og kontrolleren rom til å arbeide.

## TRIM, garbage collection og inaktiv tid

Når du sletter en fil, blir ikke alle NAND-cellene som inneholdt filen, tømt med en gang. Android markerer filen som slettet i filsystemet. Kontrolleren må fortsatt få vite hvilke underliggende blokker som kan ryddes.

TRIM er signalet som hjelper til med dette. På Android håndteres vedlikeholdet gjennom `fstrim` og lagringsvedlikehold når enheten er inaktiv. Det forteller lagringslaget hvilke blokker som ikke lenger trengs, slik at garbage collection kan frigjøre dem senere.

Derfor kan det hjelpe å la telefonen ligge i ro og lade etter en stor opprydding. Du sletter filer, Android får anledning til å kjøre vedlikehold, og kontrolleren får tid til å rydde. Ikke forvent et mirakel etter fem minutter. Arbeidet skjer i bakgrunnen.

Nei, du bør ikke defragmentere telefonlagring. Defragmentering var laget for roterende harddisker. På NAND-flash skaper det unødvendige skriveoperasjoner og løser ikke det egentlige problemet.

## SLC, MLC, TLC og QLC, forklart enkelt

NAND-celler kan lagre ulike mengder data per celle.

SLC lagrer én bit i hver celle. Det er raskt og slitesterkt, men for dyrt til vanlig telefonlagring.

MLC lagrer to biter. Det var vanligere i eldre lagringsløsninger i toppmodeller, men er i stor grad blitt erstattet av tettere NAND.

TLC lagrer tre biter i samme celle. Dette er vanlig i moderne forbrukerlagring fordi det gir en brukbar balanse mellom kostnad, kapasitet og hastighet for telefoner.

QLC lagrer fire biter. Det er tettere og billigere per gigabyte, men tåler færre skrivesykluser. Telefonprodusenter oppgir sjelden nøyaktig celletype, så du bør ikke anta hva som finnes i en enhet bare ut fra lagringskapasiteten.

Når hver celle rommer mer data, kreves mer presis avlesning av spenning og mer feilretting. Det er kompromisset. Moderne kontrollere skjuler det meste av kompleksiteten med wear leveling, ECC, reserveplass og hurtigbuffer.

## Forskjellen mellom UFS og eMMC betyr mer enn mange tror

Lagringsgrensesnittet er like viktig som selve NAND-minnet.

Mange eldre og rimelige Android-telefoner bruker eMMC. Det er enkelt og billig, men håndterer ikke tung fleroppgavekjøring like godt. Samsungs eMMC 5.1-brikker ble for eksempel lansert med oppgitte sekvensielle lesehastigheter på opptil 250 MB/s og skrivehastigheter på opptil 125 MB/s.

UFS er den nyere standarden for telefonlagring. Den støtter kommandokø og full-dupleksdrift, slik at lesing og skriving kan håndteres mer effektivt under belastning. UFS 3.1-enheter oppgir ofte sekvensielle lesehastigheter rundt 2 100 MB/s. UFS 4.0 doblet toppverdien til 4 200 MB/s for sekvensiell lesing i den første UFS 4.0-løsningen Samsung annonserte.

Dette er best mulige sekvensielle tall, ikke et løfte om at hver app åpnes dobbelt så raskt. Forskjellen er likevel reell. En rimelig telefon med eMMC kan føles tregere under oppdateringer, appinstallasjoner og raske bildeserier, selv når prosessoren ser brukbar ut på papiret.

## Slik merkes slitasje på lagringen

NAND slites når blokker går gjennom programmerings- og slettesykluser. Kontrolleren fordeler skrivingene slik at ett område ikke dør tidlig. Det kalles wear leveling.

Ved normal telefonbruk tar det som regel flere år før lagringsslitasje blir merkbar. Folk fyller lagringen, installerer oppdateringer, filmer og tømmer hurtigbuffer lenge før utholdenheten til NAND blir hovedårsaken til dårlig ytelse. Tunge skriveoppgaver er annerledes. En enhet som brukes til kontinuerlig logging, videoopptak eller testing, kan slite lagringen raskere.

Android gir ikke de fleste brukere en enkel prosentverdi for lagringens tilstand. Enkelte serviceverktøy fra produsentene viser mer, men det er ikke konsekvent. Det synlige symptomet er mindre dramatisk: trege appinstallasjoner, lang tid på å lagre filer, forsinkelser under skriving og dårlig ytelse selv etter at du har frigjort plass og fjernet åpenbar bakgrunnsbelastning.

## Slik holder du telefonlagringen i god form

Behold ledig plass. Det er det kjedelige svaret, og fortsatt det beste.

Unngå renseapper for lagring som lover en magisk fartsøkning. Mange av dem sletter bare hurtigbuffer som Android bygger opp igjen senere. Enda verre er det når de fortsetter å kjøre i bakgrunnen og skaper mer støy enn de fjerner.

Slett gamle nedlastinger, fjern apper du ikke bruker, flytt store videoer ut av telefonen og la enheten ligge i ro på laderen etter en stor opprydding. Hvis telefonen støtter SD-kort, bruker du det til medier, ikke til apper som trenger rask storage I/O.

Apper som runcheck kan hjelpe ved å vise lagringspress over tid i stedet for å behandle lagring som et engangstall. Utviklingen er viktig, fordi en telefon som sakte går fra 70 % til 94 % brukt lagring, forteller deg ganske tydelig hvorfor den begynner å føles tregere.
