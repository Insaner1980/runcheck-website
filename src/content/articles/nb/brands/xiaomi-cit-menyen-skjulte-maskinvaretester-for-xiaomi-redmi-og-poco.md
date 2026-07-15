---
title: "Xiaomi CIT-menyen: skjulte maskinvaretester for Xiaomi, Redmi og POCO"
description: "CIT er den raskeste innebygde maskinvarekontrollen på de fleste Xiaomi-telefoner, inkludert Redmi- og POCO-modeller med offisiell MIUI eller HyperOS. Den er ikke pen. Den forklarer lite. Men når du må finne ut om berøringsskjermen, høyttaleren, mikrofonen, en sensor eller et kamera faktisk reagerer, kommer den raskere til poenget enn de fleste diagnoseapper i Play Store."
listSummary: "Bruk Xiaomis CIT-meny til å teste telefonens viktigste maskinvaredeler."
hub: "brands"
sourceNumber: 159
order: 7
tags: ["maskinvare","testing","diagnostikk","android","guide"]
locale: "nb"
draft: false
---
Xiaomi kaller den vanligvis maskinvaregjenkjenning eller CIT-modus på støttesidene sine. Du møter den oftest når du feilsøker et bestemt problem, som en berøringsskjerm som registrerer feil eller en telefon som stadig starter på nytt. Menyen er laget for testing der og da, ikke for å følge tilstanden over tid.

Det er hele poenget.

## Åpne CIT først

Den raskeste veien er tastekoden. Åpne Telefon-appen og skriv inn `*#*#6484#*#*`. På enkelte Xiaomi-versjoner åpner `*#*#64663#*#*` den samme menyen for maskinvaregjenkjenning. Du trenger ikke trykke på ringeknappen.

Hvis tastekoden ikke reagerer, kan du prøve veien gjennom Innstillinger. Gå til **Innstillinger > Om telefonen**, åpne siden med detaljert informasjon og spesifikasjoner, og trykk flere ganger på **Kernel version**. På mange MIUI- og HyperOS-versjoner teller telefonen ned og åpner CIT.

Den nøyaktige menybanen varierer fordi Xiaomi har endret oppsettet mellom MIUI, HyperOS, regionale programvareversjoner og nettbrett. Eldre MIUI-versjoner kan vise **Kernel version** direkte under Om telefonen. Nyere HyperOS-versjoner legger den vanligvis under siden med detaljerte spesifikasjoner.

Hvis ingen av veiene åpner CIT, bør du kontrollere tre ting før du konkluderer med at telefonen mangler funksjonen: at den kjører offisiell Xiaomi-programvare, at du bruker den forhåndsinstallerte Telefon-appen, og at enheten ikke har en tilpasset ROM som LineageOS. Slike ROM-er fjerner ofte Xiaomis private diagnosekomponenter.

## Hva CIT faktisk kan teste

CIT tester maskinvaren direkte nok til å være nyttig, men resultatene er fortsatt enkle bestått- eller ikke bestått-svar. Menyen kan fortelle at en mikrofon ikke tok opp lyd, eller at et område på berøringsskjermen ikke reagerte. Den kan ikke fortelle om årsaken er vannskade, en løs flekskabel, en dårlig erstatningsskjerm eller en programvarefeil.

Menyen varierer etter modell. En Redmi Note uten NFC viser ikke samme liste som et Xiaomi-flaggskip med IR-sender, fingeravtrykkleser i skjermen, barometer og flere kameramoduler. Det er normalt.

Vanlige CIT-kontroller omfatter skjerm, berøringspanel, ørehøyttaler, hovedhøyttaler, mikrofoner, vibrasjonsmotor, kameraer, fingeravtrykkleser, nærhetssensor, lyssensor, akselerometer, gyroskop, kompass, SIM-leser, Wi-Fi, Bluetooth, NFC, IR-sender og ladestatus.

## Kjør berøringstesten først

Hvis du kjøper en brukt Xiaomi-telefon, bør du begynne med berøringstesten. Den finner problemer som en rask sveipetur på startskjermen lett overser.

Testen viser vanligvis et rutenett eller et tegneområde. Dra fingeren gjennom de påkrevde feltene, og se etter hull, avbrutte streker eller områder som ikke blir grønne. En brukt telefon kan se feilfri ut og likevel ha en død stripe nær kanten av digitaliseringslaget. Det vil jeg heller oppdage før betaling enn etterpå.

Xiaomis egne støttesider anbefaler CIT-modus når panelet registrerer berøring feil, henger eller ikke reagerer som det skal. De peker også på de kjedelige årsakene mange hopper over: sprukket glass, vannskade, skjermbeskyttere fra tredjeparter, svette fingre, ustabile ladere eller én dårlig app. Testen er nyttig, men den er ikke magisk.

## Sensorer, lyd, kameraer og tilkobling

Lydtestene er enkle. Høyttalertesten spiller lyd gjennom hovedhøyttaleren, mottakertesten bruker ørehøyttaleren, og mikrofontesten tar opp og spiller av et kort klipp. Lytt etter spraking, lavt volum, statisk støy eller stillhet. En mikrofon nederst kan være defekt selv om samtaler høres normale ut, fordi telefonen kan bytte mikrofon etter hvilken app du bruker.

Sensortestene viser vanligvis sanntidsverdier eller ber deg utføre en liten handling. Dekk nærhetssensoren ved ørehøyttaleren. Roter telefonen for å teste gyroskopet. Beveg den for akselerometeret og kompasset. Pek lyssensoren mot en lampe og deretter bort fra den. Hvis verdiene aldri endrer seg, er noe galt.

Kameratestene åpner front- og bakkameraene. De bekrefter at kameraet starter, fokuserer og tar et bilde. De beviser ikke bildekvaliteten. En ripet linse, dårlig stabilisering, støv under glasset eller en dårlig kameraapp fra en tredjepart kan fortsatt skape problemer utenfor testen.

Tilkoblingskontrollene søker etter Wi-Fi-nettverk eller Bluetooth-enheter. Det er nok til å bekrefte at radioen ser omgivelsene. Det diagnostiserer ikke ruteren, mobiloperatøren, VPN-et eller en leilighet full av støyende 2,4 GHz-nettverk.

## Batteri, lading og versjonsinformasjon

CIT kan vise grunnleggende informasjon om batteri og lading, som ladenivå, spenning, temperatur og om telefonen registrerer en lader. Dette er nyttig når en telefon nekter å lade eller bare virker med én kabel.

Ikke forveksle dette med ordentlig historikk for batterihelse. CIT gir deg ikke en langsiktig graf over slitasje, en tidslinje over ladesykluser eller sammenligning mellom ladere. Det er et øyeblikksbilde.

Mange Xiaomi-versjoner har også et område med maskinvareinformasjon. Xiaomis støttesider viser til `*#*#6484#*#*` for å åpne maskinvaregjenkjenning og kontrollere opplysninger som IMEI, build-nummer, baseband-versjon, kernel-versjon, CPU-ID og maskinvareversjon. Det er praktisk når du vil sammenligne programvareversjonen i Innstillinger med informasjonen på lavere nivå.

## Android 17, HyperOS og kompatibilitet

Android 17 ble først lansert på støttede Pixel-enheter. Google har en offisiell liste over produsenter i Android 17 Beta-programmet, men Xiaomi står ikke på den nåværende listen. Det betyr fortsatt ikke at alle Xiaomi-, Redmi- eller POCO-telefoner får den stabile Android 17-versjonen samtidig.

For Xiaomi-telefoner er det fastvarelaget som betyr noe her: MIUI eller HyperOS. CIT er Xiaomis funksjon for maskinvaregjenkjenning, ikke en generell Android 17-funksjon. En HyperOS-oppdatering kan endre menybanen, skjule en kode, gi en test nytt navn eller rette en diagnosefeil uten at selve Android-versjonen er hovedårsaken.

Enkelt sagt bør du ikke få panikk hvis en veiledning skrevet for MIUI 14 ikke passer nøyaktig til HyperOS-telefonen din. Prøv begge inngangsmetodene.

## Når CIT er nyttig

CIT passer best til raske kontroller før du kjøper en brukt telefon, etter et fall, etter vannkontakt eller etter bytte av skjerm eller batteri. Kjør hele den automatiske testen hvis du har tid. Kjør enkelttester hvis du allerede vet hvilket område som skaper problemer.

Ta et skjermbilde av resultatsiden hvis du trenger dokumentasjon. Ikke regn med at CIT lagrer en permanent rapport som kan eksporteres senere.

Menyen er mindre nyttig ved treg telefon, tilfeldige appkrasj, lagringspress, batteriforbruk over flere dager eller termisk struping under spilling. Slike problemer krever historikk, ikke en maskinvaretest på ett minutt.

## Vanlige spørsmål

### Kan CIT skade telefonen?

Nei. De vanlige testene leser sensorer, spiller lyd, vibrerer motoren, åpner kameraer og kontrollerer om komponenter reagerer. De sletter ikke data og installerer ikke fastvare. Gå tilbake med Tilbake-knappen, eller start telefonen på nytt hvis menyen låser seg.

### Hvorfor er enkelte etiketter på kinesisk?

Noen Xiaomi- og Redmi-modeller viser fortsatt uoversatte CIT-etiketter, særlig med kinesisk regionsprogramvare eller eldre MIUI-versjoner. Testene virker vanligvis på samme måte. Språket er irriterende, ikke farlig.

### Virker CIT på POCO-telefoner og Xiaomi-nettbrett?

Vanligvis ja, når enheten kjører offisiell Xiaomi-programvare. Hvilke tester som finnes, avhenger av maskinvaren. Et nettbrett med bare Wi-Fi viser ikke de samme mobilnettkontrollene som en Redmi-telefon, og en POCO uten IR-sender viser ingen IR-test.

---

*Metabeskrivelse: Xiaomis CIT-meny lar deg kjøre innebygde maskinvaretester på Xiaomi-telefoner. Se tastekodene, veien gjennom Innstillinger, de nyttigste testene og hva CIT ikke kan diagnostisere.*
