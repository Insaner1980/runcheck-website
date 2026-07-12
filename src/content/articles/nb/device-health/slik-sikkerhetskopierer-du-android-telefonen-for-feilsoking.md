---
title: "Slik sikkerhetskopierer du Android-telefonen før feilsøking"
description: "Sikkerhetskopier telefonen før du sletter appdata, tilbakestiller appinnstillinger, bruker gjenopprettingsmodus eller tilbakestiller til fabrikkinnstillinger. Noen løsninger er ufarlige. Andre er ufarlige helt til en lokal fil, en samtalehistorikk eller en 2FA-kode forsvinner."
listSummary: "ytelse, hastighet og android"
hub: "device-health"
sourceNumber: 9
order: 5
tags: ["ytelse","hastighet","android","optimalisering","feilsøking"]
locale: "nb"
draft: false
---
En god sikkerhetskopi trenger ikke å være avansert. Du må bare vite hva Android allerede lagrer, hva systemet hopper over, og hvilke apper som trenger sin egen sikkerhetskopi før du gjør noe destruktivt.

## Dette sikkerhetskopierer Google automatisk

Når Android-telefonen er logget på en Google-konto, er enkelte data allerede synkronisert utenfor enheten. Kontakter lagret i Google Kontakter, avtaler i Google Kalender, Gmail og mange innstillinger i Google-apper kommer tilbake når du logger på etter en tilbakestilling til fabrikkinnstillinger. Google Foto lagrer også bilder og videoer når sikkerhetskopiering er slått på i Foto-appen.

Androids innebygde Google-sikkerhetskopi dekker mer enn mange tror, men mindre enn mange antar. Den kan sikkerhetskopiere apper og enkelte appdata, anropslogg, kontakter, enhetsinnstillinger og SMS- og MMS-meldinger. Med Google Meldinger kan også RCS-meldinger tas med. Hvis du bruker Telefon fra Google, kan samtaleinnstillinger og blokkerte numre også være inkludert.

Appdata er den rotete delen. Android lar apper bruke sikkerhetskopieringssystemet, men utvikleren kan begrense hva som lagres eller velge det bort helt. Bankapper, apper for tofaktorautentisering og enkelte spill gjenopprettes ofte ikke slik du forventer. Det betyr ikke nødvendigvis at sikkerhetskopien er ødelagt. Det er slik Androids regler for appdata fungerer.

Filer er den større fellen. Nedlastinger, PDF-er, opptak, dokumenter, musikk og filer som er lagret i tilfeldige appmapper, er ikke noe du bør overlate blindt til Androids enhetssikkerhetskopi. I Google Play-tjenester versjon 26.06, lansert i februar 2026, la Google til lokal filsikkerhetskopiering som kan lagre nedlastede dokumenter i Google Disk på telefoner som støtter funksjonen. Se på dette som ekstra beskyttelse for nedlastede dokumenter, ikke som en full sikkerhetskopi av den interne lagringen.

## Android 17 endret tidspunktet, ikke sjekklisten

Android 17 begynte å rulles ut 16. juni 2026, først til de fleste støttede Pixel-telefoner. Andre kvalifiserte Android-telefoner følger senere i 2026, avhengig av produsent og operatør.

Det betyr at to telefoner ved siden av hverandre kan vise forskjellige Android-versjoner en god stund. En Pixel kan allerede ha Android 17 mens en Samsung-, OnePlus-, Motorola- eller Xiaomi-telefon fortsatt venter. Sjekklisten er den samme, men plasseringen og ordlyden i Innstillinger kan være litt annerledes.

På mange telefoner begynner du under **Innstillinger > Google > Alle tjenester > Sikkerhetskopiering**. På enkelte Pixel-versjoner kan du også se **Innstillinger > Google > Sikkerhetskopiering**. På Samsung Galaxy begynner du vanligvis under **Innstillinger > Kontoer og sikkerhetskopiering > Sikkerhetskopier data**.

## Kontroller sikkerhetskopien før du feilsøker

Åpne sikkerhetskopieringsskjermen og kontroller to ting: at sikkerhetskopiering er slått på, og når den siste vellykkede sikkerhetskopien ble fullført. Hvis tidspunktet er gammelt, velger du **Sikkerhetskopier nå** og lar prosessen bli ferdig før du fortsetter.

Ikke skynd deg gjennom dette. Googles egen sikkerhetskopiering og gjenoppretting kan bruke opptil 24 timer på å bli helt ferdig, selv om mindre sikkerhetskopier ofte fullføres mye raskere. Skal du tilbakestille telefonen, bør du vente til skjermen viser en nylig vellykket sikkerhetskopi i stedet for å anta at den ble lagret i bakgrunnen.

Hvis telefonen blir stående på "Venter på sikkerhetskopiering", kontroller det grunnleggende først. Koble til Wi-Fi, sett telefonen til lading, oppdater Google Play-tjenester og Google One hvis du blir bedt om det, og sjekk at Google-lagringen ikke er full. Den gratis lagringskvoten deles mellom Gmail, Disk og Foto, så den fylles raskere enn mange forventer.

## Kopier lokale filer selv

For lokale filer er en manuell kopi fortsatt den tryggeste reserveløsningen.

Koble telefonen til en datamaskin med en USB-C-kabel. Når USB-varselet vises, trykker du på det og velger filoverføring. Telefonens interne lagring skal da dukke opp på datamaskinen.

Kopier disse mappene hvis de finnes:

- DCIM, for bilder og videoer fra kameraet.
- Download, for PDF-er, billetter, installasjonsfiler, skjemaer og annet du har lagret fra nettleseren.
- Documents, for filer fra kontor- og produktivitetsapper.
- Music og Recordings, hvis du lagrer lyd lokalt på telefonen.
- Pictures og Movies, særlig hvis du bruker apper som lagrer medier utenfor DCIM.
- WhatsApp-medier, hvis mappen finnes. På nyere Android-versjoner kan den ligge under Android/media/com.whatsapp/WhatsApp/Media i stedet for direkte i den interne lagringen.

Selv om sikkerhetskopiering i Google Foto er aktiv, bør du beholde en lokal kopi av DCIM før en tilbakestilling til fabrikkinnstillinger. Det er risikabelt å stole på én skyinnstilling for uerstattelige bilder. Feil konto, full lagringskvote eller én mappe som aldri ble valgt for sikkerhetskopiering, er nok til å miste noe viktig.

Samsung-brukere har et annet godt alternativ: Samsung Smart Switch. Installer Smart Switch på en Windows-PC eller Mac, koble Galaxy-telefonen til med USB, velg sikkerhetskopiering og gå gjennom kategoriene før du starter. Smart Switch kan ta med blant annet anrop, kontakter, meldinger og apper, men Samsung opplyser selv at ikke alle filtyper eller elementer støttes. Bruk det som et bredt sikkerhetsnett, ikke som den eneste kopien av de viktigste filene dine.

## Sikkerhetskopier meldingsapper separat

Meldingsapper har sine egne regler. Ikke anta at Android håndterer alle.

WhatsApp bruker sin egen sikkerhetskopiering. Åpne WhatsApp, gå til innstillingene for **Chatter** og velg sikkerhetskopiering av chatter. Kontroller Google-konto, sikkerhetskopieringsfrekvens og tidspunktet for siste kopi. Når du bytter til en ny Android-telefon eller gjenoppretter etter sletting, kommer WhatsApp-samtalene bare tilbake hvis sikkerhetskopiering var aktivert før tilbakestillingen.

Vanlige Telegram-samtaler lagres på Telegrams servere og kommer tilbake når du logger på. Hemmelige Telegram-samtaler er annerledes. De er knyttet til den enkelte enheten, ligger ikke i Telegram-skyen og flyttes ikke til en annen telefon.

Signal har nå mer enn én løsning. Signal Secure Backups er valgfri, ende-til-ende-kryptert og bruker en gjenopprettingsnøkkel. Signal støtter også lokale Android-sikkerhetskopier, som lagres som en kryptert mappe på enheten. Hvis du bruker den lokale løsningen, må du kopiere hele Signal-mappen til et trygt sted og lagre gjenopprettingsnøkkelen. Uten begge deler er sikkerhetskopien ubrukelig.

## Beskytt autentiseringsapper og 2FA

Dette er trinnet mange hopper over. Det er også trinnet som kan låse deg ute fra kontoene du bryr deg mest om.

Google Authenticator kan synkronisere kodene med Google-kontoen som er aktiv i appen. Åpne Google Authenticator og kontroller kontoikonet øverst. Hvis Authenticator brukes uten en pålogget Google-profil, må kodene overføres manuelt før tilbakestilling. Åpne menyen, velg overføring av kontoer og eksporter kontoene, og skann deretter QR-kodene med en annen enhet.

Microsoft Authenticator støtter sikkerhetskopiering i skyen, men Android-kopier kan bare gjenopprettes på Android, og iOS-kopier bare på iOS. Åpne innstillingene i appen, slå på sikkerhetskopiering i skyen og kontroller hvilken privat Microsoft-konto som brukes til gjenoppretting. Jobb- og skolekontoer kan fortsatt kreve ny pålogging etterpå.

Authy støtter kryptert sikkerhetskopiering i skyen og synkronisering mellom mobile enheter. Kontroller at sikkerhetskopiering er aktivert og at du kjenner passordet til sikkerhetskopien. Authy kan ikke gjenopprette dette passordet for deg.

Lagre også gjenopprettingskodene til alle tjenester som er beskyttet med 2FA. Legg dem i en passordbehandler, eller skriv dem ut og oppbevar dem privat. Skjermbilder er bedre enn ingenting, men da havner kontogjenopprettingen i bildebiblioteket, og det er ikke nødvendigvis der du vil ha den.

## Dette krever full sikkerhetskopi

Når du tømmer hurtigbufferen til en app, fjernes midlertidige filer. Konto, dokumenter, bilder og lagrede appdata skal ikke slettes. Til akkurat den handlingen trenger du vanligvis ikke en full sikkerhetskopi.

Å slette appdata er noe annet. Appen tilbakestilles som om den nettopp var installert. Lokale notater, nedlastinger, innloggede økter, frakoblede kart, spillfremdrift og appinnstillinger kan forsvinne. Sikkerhetskopier den aktuelle appen først.

Sikker modus deaktiverer tredjepartsapper mens Android kjører i sikker modus. Appene slettes ikke. Start telefonen normalt igjen, så skal de komme tilbake. Sikkerhetskopiering er valgfritt her, med mindre sikker modus er en del av en større opprydding.

Å tømme systemets cachepartisjon, på telefoner som fortsatt tilbyr det, fjerner midlertidige systemfiler fra gjenopprettingsmodus. Personlige data skal bli liggende, men du arbeider allerede i en lavnivåmeny for feilsøking. Sikkerhetskopier først hvis telefonen er stabil nok.

En tilbakestilling til fabrikkinnstillinger sletter telefonen. Ingen unntak. På Samsung Galaxy ligger funksjonen vanligvis under **Innstillinger > Generell styring > Tilbakestill > Tilbakestill til fabrikkdata**. På Pixel og mange telefoner med standard Android bruker du **Innstillinger > System > Alternativer for tilbakestilling > Slett alle data**, med tilbakestilling til fabrikkinnstillinger som forklaring. Ikke start før Google-sikkerhetskopi, bildesikkerhetskopi, lokal filkopi, meldingskopier og 2FA-kopier er kontrollert.

## Kontroller FRP før du tilbakestiller

Factory Reset Protection (FRP) er Androids tyverisikring. Etter en tilbakestilling kan Android kreve skjermlåsen eller en av Google-kontoene som allerede var synkronisert med telefonen. Hvis du ikke kan oppgi dette, kan du bli sittende fast i oppsettet til eierskapet er bekreftet.

Før feilsøkingen når punktet der fabrikktilbakestilling er aktuelt, bør du bekrefte e-postadressen til Google-kontoen på telefonen og teste passordet i en nettleser eller på en annen enhet. Kontroller også PIN-koden, mønsteret eller passordet til selve telefonen.

Ikke fjern Google-kontoen bare for å unngå FRP når du tilbakestiller din egen telefon som del av feilsøking. Hvis kontoen fjernes, kan du også miste tilgangen til sikkerhetskopien du hadde tenkt å gjenopprette. Når telefonen skal selges eller gis bort, er situasjonen en annen. Ved feilsøking er målet enkelt: bekreft innloggingsopplysningene, fullfør sikkerhetskopien og tilbakestill først når tiltak med lavere risiko ikke virker.
