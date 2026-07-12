---
title: "Hva wake locks er, og hvordan de tømmer batteriet"
description: "Wake locks lar Android-apper holde prosessoren våken etter at skjermen er slått av. Ved feil bruk kan de hindre telefonen i å gå inn i strømsparende hvile og føre til kraftig batteritømming i bakgrunnen."
listSummary: "Wake locks lar Android-apper holde prosessoren våken etter at skjermen er slått av."
hub: "battery"
sourceNumber: 35
order: 25
subgroup: "Drain"
tags: ["batteri","strømforbruk","feilsøking","android","ytelse"]
locale: "nb"
draft: false
---
Du sover. Telefonskjermen er av. Ingenting spilles av, ingenting lastes ned, og likevel faller batterinivået med 18 % i løpet av natten.

Det er denne typen forbruk wake locks kan forårsake. En wake lock-forespørsel holder en del av enheten våken når Android ellers ville latt den hvile. Det vanligste batteriproblemet er en partial wake lock, som holder prosessoren i gang mens skjermen forblir av.

Wake locks er ikke automatisk dårlige. En musikkapp trenger en lås for å fortsette lydavspillingen. En navigasjonsapp kan trenge en under en aktiv tur. En opplasting som brukeren har startet, kan måtte fullføres i stedet for å stoppe halvveis. Problemet begynner når en app holder låsen for lenge, ber om den for ofte eller ikke frigjør den når arbeidet er ferdig.

## Slik fungerer wake locks

Når skjermen slås av, prøver Android å sette CPU-en i hvile og la telefonen gå inn i strømsparende tilstander. Hvis en app fortsatt har arbeid som må fortsette, kan den hente en wake lock gjennom Androids PowerManager API. Når arbeidet er ferdig, frigjør appen låsen, og telefonen kan hvile igjen.

Det er i denne overgangen ting går galt.

En app kan starte en bakgrunnssynkronisering, få tidsavbrudd på nettverket og unnlate å rydde opp riktig. En annen app kan spørre en server hvert femte minutt i stedet for å bruke pushvarsler. En treningsapp kan holde sensorer og databehandling aktive lenger enn nødvendig. For brukeren ser telefonen ubrukt ut. På innsiden er den ikke i hvile i det hele tatt.

Siden 1. mars 2026 har dette også fått større betydning for utviklere. Google Play kan redusere synligheten til apper som overskrider Android vitals-grensen for overdreven bruk av partial wake locks. Android vitals regner ikke-unntatte partial wake locks som overdrevne når de samlet varer i 2 timer eller mer i løpet av 24 timer, og dårlig-atferdsterskelen er mer enn 5 % av appøktene over 28 dager.

## Hvorfor batteritømming fra wake locks er vanskelig å oppdage

Batteritømming fra wake locks skjuler seg ofte bak systemetiketter. Batterisiden kan vise **Android System**, Google-tjenester eller vag bakgrunnsbruk i stedet for å navngi den konkrete wake lock-en som skapte problemet.

Begynn likevel med det grunnleggende. Gå til **Innstillinger > Batteri > Batteribruk** og se hvilke apper som brukte strøm i bakgrunnen. På nyere Pixel-versjoner kan du åpne en app under **Batteribruk for apper** og kontrollere bakgrunnsbruken. På Samsung går du til **Innstillinger > Batteri og enhetsvedlikehold > Batteri** og ser gjennom appbruk og grenser for bakgrunnsbruk.

Hvis telefonen mister mye strøm med skjermen av, men batterisiden ikke viser en åpenbar app, blir wake locks en mer sannsynlig forklaring.

Den gamle oppringingskoden `*#*#4636#*#*` er ikke lenger en pålitelig løsning. Den virker på enkelte Android-telefoner, gjør ingenting på andre og mangler ofte nyttige batteridetaljer på nyere Samsung- og Xiaomi-enheter. Jeg ville ikke bygget en feilsøkingsmetode rundt den.

Bruk ADB for grundigere undersøkelser. `adb shell dumpsys batterystats` kan vise historikk for wake locks og hvor lenge enheten har vært holdt våken, men resultatet er ikke særlig leservennlig. Verktøy som BetterBatteryStats og GSam Battery Monitor kan hjelpe, men mange avanserte batteriverktøy trenger tillatelser gitt gjennom ADB eller ekstra oppsett på moderne Android. Vær skeptisk hvis en app lover et øyeblikkelig batterimirakel uten tillatelser og uten data.

## Vanlige årsaker til wake locks

Google Play-tjenester får ofte skylden fordi tjenesten håndterer mye: posisjon, pushmeldinger, kontosynkronisering, tjenester i nærheten, sikkerhetskontroller og mer. Litt wake lock-tid derfra er normalt. Ukontrollert forbruk etter en systemoppdatering, ødelagt synkronisering eller ødelagt hurtigbuffer er det ikke.

Sosiale apper kan også være støyende. De oppdaterer innholdsstrømmer, laster opp analyseinformasjon, synkroniserer meldinger, oppdaterer moduler og holder varslingskanaler aktive. En sosial app du åpner to ganger i uken, fortjener ikke ubegrenset tilgang til bakgrunnen.

E-postapper er en annen vanlig kilde. Pushbasert e-post fungerer som regel fint. Kontroll av innboksen med få minutters mellomrom er sløsing, særlig på tvers av flere kontoer.

VPN-er, musikkapper, navigasjonsapper og aktivitetsmålere er annerledes. Wake locks fra disse kan være forventet fordi brukeren har bedt appen om å fortsette med noe. Det riktige spørsmålet er ikke «holder denne appen telefonen våken?». Det er «fortsetter den å gjøre det når jeg ikke aktivt bruker kjernefunksjonen?»

## Dette kan du gjøre

Begrens bakgrunnstilgangen for apper som ikke trenger den. På Pixel og standard Android kan du åpne appen under **Innstillinger > Apper > Batteribruk for apper** og begrense bakgrunnsbruken. På Samsung bruker du **Apper i dvalemodus** eller **Apper i dyp dvale** under **Grenser for bakgrunnsbruk**.

Ikke begrens apper som trenger sanntidsaktivitet i bakgrunnen. Meldinger, VPN, helse, navigasjon, nødvarsling og jobbkritiske apper kan slutte å fungere på uventede måter hvis du fryser dem for hardt.

Hvis Google Play-tjenester ser ut til å være problemet, bør du begynne forsiktig. Start telefonen på nytt. Se etter Google Play-systemoppdateringer og appoppdateringer. Hvis forbruket fortsetter, kan du tømme hurtigbufferen under **Innstillinger > Apper > Google Play-tjenester > Lagring og buffer > Tøm buffer**. Unngå å slette alle data med mindre du vet hva det påvirker, fordi det kan tilbakestille lokal tjenestetilstand og skape midlertidig ekstra synkronisering.

Hvis problemet begynte rett etter en Android 17-oppdatering, bør du gi telefonen en dag eller to før du konkluderer. Pixel fikk Android 17 først, og telefoner utfører ofte ekstra indeksering, appoptimalisering og opprydding etter en stor systemoppdatering. Vedvarende batteritømming etter flere dager er noe annet.

## Hvordan Doze påvirker bildet

Doze bidrar til å begrense skaden fra wake locks under dyp hvile. Når enheten er i Doze, ignorerer Android wake locks i de begrensede fasene og lar arbeid kjøre hovedsakelig i vedlikeholdsvinduer.

Men Doze er ikke magisk. Apper som er unntatt fra batterioptimalisering, får større frihet. Forgrunnstjenester kan fortsatt arbeide. Produsentenes batteristyring kan oppføre seg annerledes. Og hvis telefonen aldri faller til ro på grunn av bevegelse, signalproblemer eller gjentatt bakgrunnsaktivitet, får du ikke full effekt.

Derfor er batteritap gjennom natten et så nyttig spor. Hvis telefonen ligger stille i sju timer og mister 4 %, har du sannsynligvis ikke et stort wake lock-problem. Hvis den mister 20 % med skjermen av og uten aktiv medieavspilling, er det noe som holder den våken eller tvinger radioen til å arbeide.

runcheck er laget for denne typen mønstergjenkjenning. Batteritømming med skjermen av, dyp hvile, signalkvalitet og temperatur forteller en langt tydeligere historie sammen enn den vanlige batterisiden gjør alene.

## Noen spørsmål det er verdt å svare på

Kan en wake lock holde skjermen på? Partial wake locks gjør ikke det. De holder CPU-en i gang mens skjermen forblir av. Eldre typer skjermrelaterte wake locks finnes, men moderne Android-apper er sterkt begrenset på dette området. Det meste av skjult batteritømming kommer fra partial wake locks som holder prosessoren våken.

Er litt wake lock-aktivitet normalt? Ja. En ren Android-telefon har fortsatt korte wake locks fra systemtjenester, pushmeldinger, endringer i forbindelsen og planlagt arbeid. Minutter er normalt. Timer mens telefonen ligger ubrukt, er det ikke.

Vil en tilbakestilling til fabrikkinnstillinger løse problemet? Noen ganger. Det kan fjerne dårlig apptilstand, ødelagt synkronisering og rot etter oppdateringer. Det er også et grovt verktøy. Begrens mistenkelige apper, oppdater alt, tøm hurtigbuffer der det passer, og bekreft mønsteret før du sletter telefonen.
