---
title: "Hva er Google Play-systemoppdateringer?"
description: "Åpne oppdateringsskjermen på Android, så ser du sannsynligvis to datoer som ikke stemmer overens. Den ene viser nivået for Android-sikkerhetsoppdatering. Den andre viser datoen for en modulbasert Google-oppdatering."
listSummary: "Åpne oppdateringsskjermen på Android, så ser du sannsynligvis to datoer som ikke stemmer overens."
hub: "software"
sourceNumber: 124
order: 6
tags: ["android","oppdateringer","sikkerhet","programvare","guide"]
locale: "nb"
draft: false
---
Det ser ut som en feil. Vanligvis er det ikke det.

Dette er to forskjellige oppdateringskanaler. Sikkerhetsoppdateringen kommer gjennom telefonprodusenten, for eksempel Google, Samsung, Xiaomi, OnePlus eller Motorola. Den andre datoen kommer gjennom Googles modulbaserte oppdateringssystem for Android på enheter som støtter det.

## Kort forklart

Disse Mainline-oppdateringene retter utvalgte deler av Android uten å vente på en full systemoppdatering fra produsenten.

De erstatter ikke vanlige Android-oppdateringer. De oppgraderer ikke telefonen fra Android 16 til Android 17. De retter ikke alle sårbarheter. Men de lar Google oppdatere enkelte OS-komponenter gjennom den samme overordnede leveringskanalen som brukes av Google Play.

Dette betyr noe fordi Android-oppdateringer går gjennom en lang kjede. Google publiserer kode. Brikkeprodusenter og telefonprodusenter integrerer den. Operatører kan teste den. Først deretter når oppdateringen telefonen. Den modulbaserte kanalen hopper over deler av denne kjeden for bestemte komponenter.

## Slik fungerer Project Mainline

Teknologien bak heter Project Mainline, også omtalt som modulbaserte systemkomponenter i Android-dokumentasjonen. Den kom med Android 10.

Mainline deler utvalgte deler av Android inn i moduler. Noen er APK-moduler som oppfører seg mer som apppakker. Andre er APEX-moduler som kan lastes tidligere i oppstartsprosessen og håndtere systemkomponenter på et dypere nivå.

Det viktige er atomisk installasjon. Hvis en pakke med moduloppdateringer ikke kan installeres uten feil, ruller Android den tilbake i stedet for å etterlate telefonen halvveis oppdatert.

Bra. Kjedelig er bra her.

## Hva blir oppdatert?

Det nøyaktige settet med moduler avhenger av Android-versjonen og programvaren på enheten, så ikke forvent at alle Android-telefoner har samme liste. Nyere Android-versjoner har vanligvis flere modulbaserte deler enn Android 10 hadde.

Eksempler er nettverkskomponenter, DNS-oppslag, mediehåndtering, tillatelsesrelaterte komponenter, Conscrypt for TLS, håndtering av påloggingsportaler, dokumentgrensesnittet, internettdeling og deler av Android Runtime på versjoner som støtter det.

Dette er ikke pynt. En feil i medierammeverket kan påvirke mange apper. En feil i en TLS-komponent kan påvirke krypterte forbindelser på hele enheten. Når disse delene kan oppdateres gjennom en modulbasert kanal, kan rettelser nå langt flere telefoner enn hvis man må vente på at hver produsent sender en full OTA-pakke.

## Slik sjekker du datoen

På mange nyere Android-telefoner går du til Innstillinger > Sikkerhet og personvern > System og oppdateringer og åpner Google Play-systemoppdatering.

På Samsung kan du prøve `Settings > Security and privacy > Updates`, eller `Settings > About phone > Software information`, og deretter åpne den samme oppføringen.

Menybanen flytter på seg fordi produsentene organiserer Innstillinger på ulike måter. Hvis du ikke finner den, åpner du søket i Innstillinger og søker etter navnet på oppdateringen.

Du kan trykke på oppføringen for å se etter en oppdatering. Hvis Android ber om en omstart etterpå, bør du gjøre det. Enkelte APEX-baserte oppdateringer trer ikke i kraft før telefonen startes på nytt.

## Hvorfor datoen kan se gammel ut

Datoen på skjermen betyr ikke nødvendigvis «siste gang noe ble rettet». Den kan vise versjonen til en samlet modulpakke, og ikke alle moduloppdateringer flytter den synlige datoen på en åpenbar måte.

Derfor kan datoen for Google Play-systemoppdateringen ligge etter datoen for Android-sikkerhetsoppdateringen uten at noe er galt med telefonen. Jeg ville først blitt bekymret hvis begge datoene er gamle, eller hvis telefonen ikke har installert noen systemoppdatering på flere måneder og heller ikke står på produsentens støtteliste.

Det frustrerende er at Android ikke gir vanlige brukere en ryddig endringslogg for hver enkelt modul. Du får stort sett én dato og en knapp for omstart.

## Hvilke telefoner får dem?

Denne oppdateringskanalen er knyttet til Androids modulbaserte system og Google-tjenester. I praksis omfatter det de fleste Google-sertifiserte Android-telefoner med Android 10 eller nyere.

Telefoner uten Google-tjenester får ikke den samme Google-leverte oppdateringskanalen. Enkelte Android-partnere kan oppdatere Mainline-moduler gjennom sin egen OTA-mekanisme, men det er ikke det samme som den Google-leverte løsningen på en sertifisert telefon.

Eldre Android-versjoner har også færre modulbaserte komponenter. En telefon med Android 10 kan ha nytte av Mainline, men den har ikke samme moduldekning som en nyere enhet med Android 16 eller Android 17.

## Hva kan de ikke rette?

Mainline kan ikke rette alt.

Oppdateringene retter ikke enhetens kernel med mindre den aktuelle rettelsen leveres gjennom en modulbasert kanal som støttes. De oppdaterer ikke lukket fastvare for modem, kamera, GPU eller Wi-Fi. De reparerer heller ikke produsentspesifikke systemapper eller leverandørkode. Og de forlenger ikke produsentens offisielle støtteperiode.

Den modulbaserte oppdateringskanalen hjelper altså. Men den gjør ikke en forlatt telefon helt trygg igjen.

## Play-systemoppdateringer og Google Play Services

Navnene ligner for mye på hverandre, og det skaper forvirring.

Google Play Services er et rammeverk på appnivå. Apper bruker det til pålogging, posisjons-API-er, varsler, kontofunksjoner, sikkerhetskontroller og andre Google-baserte tjenester. Det oppdateres som en app.

Systemoppdateringene håndterer OS-moduler. De går dypere inn i selve Android.

Begge kommer fra Google. Begge kan oppdateres uten en full OTA-oppdatering fra produsenten. De ligger ikke på samme nivå.

## Hva bør du gjøre med denne informasjonen?

Hold begge oppdateringskanalene rimelig aktuelle. Installer vanlige Android-systemoppdateringer fra produsenten, og sjekk den modulbaserte oppdateringsskjermen av og til.

Hvis telefonen fortsatt får sikkerhetsoppdateringer fra produsenten, er en litt eldre dato for Google Play-systemoppdateringen vanligvis bare støy. Hvis begge har stoppet, bør du begynne å regne telefonen som på vei ut av trygg daglig bruk.
