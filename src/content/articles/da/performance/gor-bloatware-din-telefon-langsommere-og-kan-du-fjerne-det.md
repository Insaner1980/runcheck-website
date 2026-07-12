---
title: "Gør bloatware din telefon langsommere, og kan du fjerne det?"
description: "Forudinstallerede Android-apps kan optage plads, sende notifikationer og køre baggrundstjenester. Her er, hvad bloatware faktisk gør, og hvad du sikkert kan fjerne."
listSummary: "Forudinstallerede Android-apps kan optage plads, sende notifikationer og køre baggrundstjenester."
hub: "performance"
sourceNumber: 78
order: 15
tags: ["ydeevne","hastighed","android","optimering","fejlfinding"]
locale: "da"
draft: false
---
---

Bloatware får skylden for næsten alle langsomme Android-telefoner, men virkeligheden er mindre dramatisk. En forudinstalleret app gør ikke telefonen langsommere, bare fordi dens ikon findes. Problemet begynder, når appen kører i baggrunden, vækker telefonen, sender notifikationer, opdaterer sig selv eller holder tjenester aktive, selv om du aldrig har bedt om det.

Det er den irriterende del. Du kan købe en telefon, springe en app over under opsætningen, aldrig åbne den og alligevel senere finde tilknyttede tjenester på applisten.

## Hvad bloatware faktisk gør

En inaktiv forudinstalleret app koster hovedsageligt lagerplads. Den bruger ikke CPU, RAM, mobildata eller batteri, medmindre Android eller en anden app starter en af dens komponenter.

Nogle forudinstallerede pakker gør mere end bare at ligge der. Facebook-relaterede tjenester som `com.facebook.appmanager` er blevet leveret på telefoner som ledsagepakker. Samsung-telefoner kan indeholde Samsung Free, Samsung Global Goals, Samsung TV Plus og andre Samsung-apps ved siden af Googles apps. Telefoner fra mobiloperatører kan desuden have kontoværktøjer, opsætningsguider, voicemail-apps, prøveversioner af sikkerhedssoftware og installationsprogrammer til reklameapps.

En eller to baggrundstjenester ødelægger normalt ikke ydelsen. Femten af dem på en billig telefon er en anden sag. En telefon med 3 eller 4 GB RAM, en tung startskærm, sociale apps, operatørværktøjer og producenttjenester kan føles langsommere end en ældre topmodel med renere software og mere ledig hukommelse.

Lagerforbruget er lettere at kontrollere end baggrundsaktiviteten. Åbn **Indstillinger > Lagerplads > Apps** eller **Indstillinger > Apps**, sorter efter størrelse, hvis telefonen kan det, og se efter apps, du ikke bruger. Den præcise placering afhænger af mærket. Pixel holder det forholdsvis enkelt, Samsung samler mere under Enhedspleje, og Xiaomi fordeler normalt lagerværktøjerne mellem Indstillinger og appen Sikkerhed.

## Deaktiver først, og afinstaller når Android tillader det

Android lader dig afinstallere nogle forudinstallerede apps som almindelige apps. Hold fingeren på ikonet, åbn appoplysningerne, og se efter **Afinstaller**. Hvis knappen mangler, er nedtonet eller er erstattet af **Deaktiver**, behandler Android appen som en systemapp.

Det sikreste første skridt er at deaktivere den. Gå til **Indstillinger > Apps**, vælg appen, og tryk på **Deaktiver**. En deaktiveret app holder op med at køre, forsvinder fra startskærmen og applisten og modtager ikke længere normale opdateringer. Den optager stadig noget plads, fordi den oprindelige apppakke ligger i systemets fabriksimage, men Android fjerner opdateringer og brugerdata, hvor det er muligt.

Den sidste detalje er vigtig. Når du deaktiverer en systemapp, får du ikke på magisk vis flere gigabyte tilbage. Det kan stadig hjælpe, hvis appen havde hentet opdateringer, cachelagret medier, gemt et login eller opbevaret lokale data.

Samsung og andre OEM-producenter viser nogle gange **Afinstaller** ved apps, der fulgte med telefonen. I mange tilfælde fjernes det brugerinstallerede opdateringslag, mens fabriksversionen bliver liggende inaktiv. Set fra din side er det fint. Målet var at få appen væk fra den daglige brug, ikke at slette den fra den skrivebeskyttede systempartition.

## Hvornår fjernelse med ADB giver mening

Ved genstridige pakker kan ADB fjerne en app for den aktuelle bruger uden root:

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

Kommandoen sletter ikke pakken fra systempartitionen. Den skjuler og deaktiverer den for bruger 0, som er telefonens primære bruger. En nulstilling til fabriksindstillinger bringer den tilbage.

Brug kun dette, når du kender den præcise pakke og forstår, hvad du fjerner. Pakkenavnet kan muligvis ses i Play Butik-URL'en, eller du kan vise en liste over pakker med:

```text
adb shell pm list packages
```

Værktøjer som Canta og Universal Android Debloater Next Generation gør processen mindre besværlig. Canta kører på telefonen og bruger Shizuku. UAD-ng kører på en computer og bruger kuraterede pakkelister med sikkerhedsmærkater. Mærkaterne er nyttige, men de er ikke ufejlbarlige. Hvis noget er markeret som unsafe, expert, framework, provider, dialer, launcher eller relateret til Google Play Services, bør du lade det være, medmindre du har en reel plan for gendannelse.

Alvorligt talt. Hvis du fjerner den forkerte pakke, kan du ødelægge notifikationer, opkald, installationer fra Play Butik, widgets, kontosynkronisering eller selve opstarten.

## Hvilke telefoner leveres normalt med renere software?

Pixel-telefoner købt direkte uden en operatørpakke er stadig det reneste almindelige Android-valg. De indeholder Googles apps, men undgår som regel operatørbundter. Motorola ligger ofte tæt på med nogle få Moto-funktioner i stedet for et helt ekstra appøkosystem.

Samsung er bedre end tidligere, men dublerer stadig flere af Googles appkategorier med egne versioner: browser, appbutik, galleri, noter, kontotjenester, TV og nyhedsfeeds. Nogle kan lide det. Hvis du ikke gør, føles det som rod.

Xiaomi, Redmi, Poco, Oppo, Realme og Vivo varierer meget efter land og prisklasse. En europæisk model og en model til det indiske marked med samme hardwarenavn kan blive leveret med forskellige tredjepartsapps, anbefalinger, annoncer eller opfordringer til at installere apps. Operatørmodeller er deres egen kategori, fordi operatøren kan tilføje apps uanset producenten.

Nothing og OnePlus har ændret kurs flere gange gennem årene. Nogle udgivelser har ren software, mens andre har fået flere partnertjenester, end tilhængerne forventede. Se mærkets ry som et fingerpeg, ikke et bevis. Tjek aktuelle anmeldelser af den præcise model og region, før du køber.

## Hvad du ikke bør deaktivere

Deaktiver ikke Google Play-tjenester. Mange apps bruger dem til pushnotifikationer, placering, login, kort, sikkerhedskontroller og betalinger. Hvis du slår dem fra, gør du en mindre irritation til en telefon, der ikke fungerer ordentligt.

Vær forsigtig med Android System WebView, standardstartskærmen, telefonappen, beskedappen, tastaturet, tilladelsesstyringen, pakkeinstallationsprogrammet, Indstillinger, kontaktudbyderen, medieudbyderen og alt med `framework` eller `provider` i pakkenavnet. De lyder kedelige, fordi de er infrastruktur.

Enkelte Google-apps som Google TV, YouTube Music, Google News og Google One kan normalt deaktiveres sikkert, hvis du ikke bruger dem. Chrome er som regel også sikker at deaktivere, når en anden browser er installeret, men OEM-adfærden varierer så meget, at jeg stadig ville kontrollere WebView og standardbrowseren bagefter.

## Kan bloatware være malware?

Legitime apps fra Google, Samsung, Motorola, Xiaomi, en mobiloperatør eller en anden kendt OEM-producent er ikke automatisk malware. De kan stadig være irriterende, tunge eller alt for ivrige efter at sende notifikationer.

Risikoen er større på meget billige telefoner fra ukendte mærker, uofficielle ROM-versioner eller enheder købt på markedspladser, hvor firmwaren kan være ændret. Hvis en forudinstalleret app viser annoncer, installerer andre apps, beder om mærkelige tilladelser eller vender tilbage, efter at du har fjernet den, bør du søge efter det præcise pakkenavn, før du stoler på den.

## Efter en systemopdatering

Store Android- eller OEM-opdateringer kan aktivere apps, du tidligere har deaktiveret. Månedlige sikkerhedsopdateringer lader dem normalt være, men det sker ofte nok til, at du bør kontrollere efter en stor opgradering.

Android 17 ændrer ikke det grundlæggende råd. Versionen blev først gjort tilgængelig på understøttede Pixel-enheder, mens andre mærker senere indarbejder den i deres egne Android-varianter efter deres egne planer. På Samsung, Xiaomi, Oppo og lignende telefoner afhænger bloatware stadig mere af OEM-imaget og operatørversionen end af selve Android-versionsnummeret.
