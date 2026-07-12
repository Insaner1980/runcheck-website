---
title: "Gjør bloatware telefonen tregere, og kan du fjerne det?"
description: "Forhåndsinstallerte Android-apper kan bruke plass, sende varsler og kjøre bakgrunnstjenester. Her er hva bloatware faktisk gjør, og hva som er trygt å fjerne."
listSummary: "Forhåndsinstallerte Android-apper kan bruke plass, sende varsler og kjøre bakgrunnstjenester."
hub: "performance"
sourceNumber: 78
order: 15
tags: ["ytelse","hastighet","android","optimalisering","feilsøking"]
locale: "nb"
draft: false
---
---

Bloatware får skylden for nesten alle trege Android-telefoner, men virkeligheten er mindre dramatisk. En forhåndsinstallert app gjør ikke telefonen treg bare fordi ikonet finnes. Problemene begynner når appen kjører i bakgrunnen, vekker telefonen, sender varsler, oppdaterer seg eller holder tjenester aktive selv om du aldri ba om det.

Det er den irriterende delen. Du kan kjøpe en telefon, hoppe over en app under oppsettet, aldri åpne den og likevel finne tilknyttede tjenester i applisten senere.

## Hva bloatware faktisk gjør

En inaktiv forhåndsinstallert app koster først og fremst lagringsplass. Den bruker ikke CPU, RAM, mobildata eller batteri med mindre Android eller en annen app starter en av komponentene dens.

Noen forhåndsinstallerte pakker gjør mer enn å ligge stille. Facebook-relaterte tjenester som `com.facebook.appmanager` har blitt levert på telefoner som støttepakker. Samsung-telefoner kan ha Samsung Free, Samsung Global Goals, Samsung TV Plus og andre Samsung-apper ved siden av Googles apper. Operatørtelefoner kan få kontoverktøy, oppsettsveivisere, telefonsvarer-apper, prøveversjoner av sikkerhetsprogrammer og verktøy som installerer markedsførte apper.

Én eller to bakgrunnstjenester ødelegger vanligvis ikke ytelsen. Femten av dem på en rimelig telefon er noe annet. En telefon med 3 eller 4 GB RAM, tung startskjerm, sosiale apper, operatørverktøy og produsenttjenester kan føles tregere enn et eldre flaggskip med renere programvare og bedre minnemargin.

Lagringsbruk er enklere å kontrollere enn bakgrunnsaktivitet. Åpne **Innstillinger > Lagring > Apper** eller **Innstillinger > Apper**, sorter etter størrelse hvis telefonen støtter det, og se etter apper du ikke bruker. Den nøyaktige banen varierer mellom merker. Pixel holder dette forholdsvis enkelt, Samsung samler mer under Enhetsvedlikehold, mens Xiaomi ofte fordeler lagringsverktøy mellom Innstillinger og Security-appen.

## Deaktiver først, avinstaller når Android tillater det

Noen forhåndsinstallerte apper kan avinstalleres som vanlige apper. Trykk og hold på ikonet, åpne appinformasjonen og se etter **Avinstaller**. Hvis knappen mangler, er nedtonet eller er erstattet av **Deaktiver**, behandler Android appen som en systemapp.

Deaktivering er det tryggeste første forsøket. Gå til **Innstillinger > Apper**, velg appen og trykk på **Deaktiver**. En deaktivert app slutter å kjøre, forsvinner fra startskjermen og mottar ikke vanlige oppdateringer. Den bruker fortsatt noe lagringsplass fordi den opprinnelige apppakken ligger i systembildet, men Android fjerner oppdateringer og brukerdata der det er mulig.

Den siste detaljen er viktig. Du får ikke flere gigabyte tilbake bare ved å deaktivere en systemapp. Det kan likevel hjelpe hvis appen hadde lastet ned oppdateringer, bufret medieinnhold, lagret innloggingsdata eller bygget opp lokale filer.

Samsung og andre OEM-er viser noen ganger **Avinstaller** for apper som fulgte med telefonen. I mange tilfeller fjernes det brukerinstallerte oppdateringslaget, mens fabrikkversjonen blir liggende inaktiv. Fra ditt ståsted er det som regel greit. Målet var å få appen ut av daglig bruk, ikke å skrive om den skrivebeskyttede systempartisjonen.

## Når fjerning med ADB gir mening

For gjenstridige pakker kan ADB fjerne en app for den nåværende brukeren uten root:

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

Kommandoen sletter ikke pakken fra systempartisjonen. Den skjuler og deaktiverer den for bruker 0, som er telefonens hovedbruker. En tilbakestilling til fabrikkinnstillinger henter den tilbake.

Bruk dette bare når du kjenner det nøyaktige pakkenavnet og forstår hva du fjerner. Pakkenavnet kan være synlig i nettadressen i Play Store, eller du kan liste pakkene med:

```text
adb shell pm list packages
```

Verktøy som Canta og Universal Android Debloater Next Generation gjør prosessen mindre tungvint. Canta kjører på telefonen og bruker Shizuku. UAD-ng kjører på en datamaskin og bruker kuraterte pakkelister med sikkerhetsmerking. Merkingen er nyttig, men ikke magisk. Hvis noe er merket unsafe, expert, framework, provider, dialer, launcher eller er knyttet til Google Play Services, bør du la det være med mindre du har en reell plan for gjenoppretting.

Helt alvorlig. Fjerner du feil pakke, kan du ødelegge varsler, samtaler, installasjoner fra Play Store, moduler, kontosynkronisering eller oppstart.

## Hvilke telefoner leveres vanligvis med mindre rot

Ulåste Pixel-telefoner er fortsatt blant de reneste vanlige Android-alternativene. De inkluderer Googles apper, men modeller kjøpt direkte unngår vanligvis operatørpakker. Motorola ligger ofte nær, med noen Moto-funksjoner i stedet for et helt ekstra appøkosystem.

Samsung er bedre enn før, men du får fortsatt Samsung-versjoner av flere kategorier Google også dekker: nettleser, appbutikk, galleri, notater, kontotjenester, TV og nyhetslignende feeder. Noen liker det. Hvis du ikke gjør det, føles det som rot.

Xiaomi, Redmi, Poco, Oppo, Realme og Vivo varierer mye etter land og prisklasse. En europeisk modell og en modell for det indiske markedet med samme maskinvarenavn kan leveres med forskjellige tredjepartsapper, anbefalinger, annonser eller oppfordringer om å installere apper. Operatørmodeller er en egen kategori, fordi operatøren kan legge til apper uansett produsent.

Nothing og OnePlus har endret retning flere ganger. Noen lanseringer er rene, mens andre har fått flere partnertjenester enn tilhengerne ventet. Bruk merkevarens rykte som et hint, ikke som bevis. Sjekk nye omtaler av den nøyaktige modellen og regionen før du kjøper.

## Dette bør du ikke deaktivere

Ikke deaktiver Google Play Services. Mange apper er avhengige av tjenesten for push-varsler, posisjon, innlogging, kart, sikkerhetskontroller og betaling. Da gjør du et lite irritasjonsmoment om til en telefon som ikke fungerer riktig.

Vær forsiktig med Android System WebView, standard startskjerm, telefonappen, meldingsappen, tastaturet, tillatelseskontrolleren, pakkeinstallasjonsprogrammet, Innstillinger, kontaktleverandøren, medieleverandøren og alt som har `framework` eller `provider` i pakkenavnet. Navnene høres kjedelige ut fordi dette er infrastruktur.

Enkeltstående Google-apper som Google TV, YouTube Music, Google News og Google One er vanligvis trygge å deaktivere hvis du ikke bruker dem. Chrome er ofte trygg å deaktivere hvis en annen nettleser er installert, men OEM-oppførselen varierer nok til at jeg fortsatt ville kontrollert WebView og standardnettleseren etterpå.

## Kan bloatware være skadevare?

Lovlige apper fra Google, Samsung, Motorola, Xiaomi, en operatør eller en annen kjent OEM er ikke automatisk skadevare. De kan likevel være irriterende, tunge eller altfor ivrige etter å sende varsler.

Risikoen er større på svært billige telefoner fra ukjente merker, uoffisielle ROM-bygg eller enheter kjøpt på markedsplasser der fastvaren kan være endret. Hvis en forhåndsinstallert app viser annonser, installerer andre apper, ber om merkelige tillatelser eller kommer tilbake etter at du har fjernet den, bør du søke etter det nøyaktige pakkenavnet før du stoler på den.

## Etter en systemoppdatering

Store Android- eller OEM-oppdateringer kan aktivere apper du tidligere har deaktivert. Månedlige sikkerhetsoppdateringer lar dem vanligvis være i fred, men det skjer ofte nok til at det er verdt å sjekke etter en stor oppgradering.

Android 17 endrer ikke hovedrådet. Google lanserte versjonen først på de fleste støttede Pixel-enhetene, mens andre produsenter følger senere med sine egne Android-varianter. På Samsung, Xiaomi, Oppo og lignende telefoner avhenger bloatware fortsatt mer av OEM-systembildet og operatørversjonen enn av selve Android-nummeret.
