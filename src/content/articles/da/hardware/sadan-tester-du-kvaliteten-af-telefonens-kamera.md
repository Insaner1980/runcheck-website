---
title: "Sådan tester du kvaliteten af telefonens kamera"
description: "Praktiske måder at kontrollere kamerakvaliteten på en Android-telefon, herunder autofokus, skift mellem objektiver, sensorfejl, videostabilitet og diagnoseværktøjer."
listSummary: "hardware, test og diagnostik"
hub: "hardware"
sourceNumber: 110
order: 7
tags: ["hardware","test","diagnostik","android","guide"]
locale: "da"
draft: false
---
---

Det bliver lettere at teste et kamera, når du holder op med at tænke på megapixels. En sensor på 50 MP kan stadig tage dårlige billeder, hvis objektivet er snavset, autofokus er defekt, eller kameramodulet er blevet slået en smule ud af position.

Målet er enkelt: Kontroller, om telefonens kameraer opfører sig, som de skal.

## Begynd med et rent objektiv og et enkelt motiv

Tør objektivglasset af med en ren mikrofiberklud. Gør det før alle andre test. Et fingeraftryk kan ligne dårlig HDR, blødt fokus, slør på objektivet eller svag ydelse i dårligt lys.

Åbn standardkameraappen, og ret den mod noget med fine detaljer. Trykt tekst, en væg med struktur, et tastatur eller grene mod himlen fungerer alle fint. Tryk for at fokusere. Billedet skal hurtigt blive skarpt og forblive skarpt.

Hvis kameraet bliver ved med at søge frem og tilbage uden at finde fokus, kan autofokusmekanismen være beskadiget. Det sker ofte efter fald, fordi den lille voice coil-motor, der flytter objektivet, er følsom. Hvis billedet aldrig bliver skarpt, uanset hvor du trykker, skal du sammenligne med et andet objektiv på samme telefon, før du giver softwaren skylden.

Skift mellem alle tilgængelige kameraer: hovedkamera, ultravidvinkel, tele, makro og frontkamera. Hvis ét objektiv er sløret, mens de andre er skarpe, peger det på netop det modul. Mulige årsager er støv under objektivdækslet, revnet objektivglas, fugt omkring kameraet eller et modul, der er monteret skævt efter en reparation.

## Se efter fejl, der gentager sig

Tag et billede af en ensfarvet hvid væg eller et rent stykke papir i jævnt lys. Det gør fejl lettere at se.

En smule mørkere hjørner er normalt. Telefonobjektiver er små, og softwaren korrigerer ofte kanterne. Du leder efter en tydelig mørk plet, en farvet misfarvning eller en udtværing, der sidder nøjagtigt samme sted på hvert billede.

Tag derefter et billede i svagt lys uden blitz. Zoom ind. Klare farvede prikker, der bliver på samme sted i flere billeder, kan være hot pixels eller skade på sensoren. En enkelt mærkelig pixel er ikke grund til panik. En klynge er noget andet.

Tag nu et billede mod et lyst vindue eller en lampe, men ikke direkte mod solen. Et lilla eller grønt farvestik over hele billedet kan pege på skade omkring sensorens filter. Normal lens flare ses som striber eller spøgelsesformer nær stærkt lys. Den bør ikke pludselig være meget værre end før telefonen blev tabt eller repareret.

## Test eksponering og farver

Tag det samme billede to gange: én gang i dagslys og én gang indendørs under varmt lys. Hudtoner, hvide vægge og grå genstande er gode referencepunkter, fordi øjnene hurtigt opdager, når de ser forkerte ud.

Telefoner behandler billederne kraftigt, så forvent ikke helt neutrale farver. Pixel, Samsung, Xiaomi og OnePlus træffer forskellige valg. Den nyttige sammenligning er med den samme telefonmodel, ikke et andet mærke med en anden billedstil.

Se på prøvebilleder fra samme telefonmodel på nettet, hvis du har brug for et sammenligningsgrundlag. Brug rigtige prøvebilleder i stedet for kun at stole på kamerascores. Scores kan være nyttige, men en beskæring side om side fortæller mere, når du prøver at diagnosticere din egen telefon.

## Optag en kort video

Optag 20-30 sekunder i den højeste opløsning, du normalt bruger. Panorer langsomt, gå nogle få skridt, og optag tale imens.

Afspil klippet, og kontroller fire ting: fokus, stabilisering, tabte frames og synkronisering af lyd. En telefon med optisk billedstabilisering bør udjævne små håndbevægelser. Den får ikke video optaget under gang til at ligne noget fra en gimbal, men optagelsen bør heller ikke ryste voldsomt.

Hvis videoen fryser et øjeblik, hakker eller mister synkroniseringen mellem lyd og billede, kan årsagen være varme, lagerets skrivehastighed, en fejl i kameraappen eller hardware. Prøv igen efter en genstart og efter at have frigjort lagerplads. Hvis problemet gentager sig, mens telefonen er kølig og har ledig plads, skal du tage det alvorligt.

## Brug indbygget diagnostik

Samsung Galaxy-telefoner kan teste kameraerne gennem Samsung Members. Åbn Samsung Members, gå til Support > Telefondiagnosticering, og kør kameratesten. De tilgængelige test varierer efter model, men Samsung angiver kamera som en af telefonens diagnostikfunktioner.

Samsungs kode `*#0*#` åbner også kamerafelter på mange Galaxy-modeller. Mega Cam tester kameraet på bagsiden, og Front Cam tester selfiekameraet. Testene bekræfter, at modulerne kan åbne og tage et billede. De vurderer ikke billedkvaliteten for dig.

Xiaomi-, Redmi- og POCO-enheder har som regel kameratest i CIT-menuen, som åbnes med `*#*#6484#*#*`. På telefoner med flere bagkameraer kan menuen teste hvert objektiv separat.

Pixel-telefoner har ikke en Samsung-lignende `*#0*#`-menu. Googles kode `*#*#7287#*#*` er knyttet til Pixel Repair Diagnostics på understøttede enheder, og de præcise test kan variere efter model, område og softwareversion.

Android 17 gør ikke kameradiagnostik universel. Den afhænger stadig af producenten.

## Kontroller Camera2-understøttelse, hvis funktioner mangler

Hvis tredjepartskameraapps ikke kan bruge manuel eksponering, RAW, video med høj billedhastighed eller et teleobjektiv, kan du installere en app til inspektion af Camera2 API, for eksempel Camera2 API Probe. Den viser, hvad hvert kamera oplyser til Android: understøttede opløsninger, autofokustilstande, stabilisering og hardwareniveau.

Hardwareniveauerne betyder noget. `LEGACY` betyder, at kameraet kører gennem ældre kompatibilitetsadfærd. `LIMITED` er grundlæggende Camera2-understøttelse. `FULL` giver mere omfattende manuel kontrol. `LEVEL_3` tilføjer mere avancerede muligheder, herunder RAW og reprocessing på enheder, der stiller funktionerne til rådighed.

Open Camera er også nyttig, når du vil skelne mellem standardkameraets billedbehandling og selve kamerahardwaren. Hvis Open Camera fokuserer korrekt, men standardappen ikke gør, skal du rydde cachen for kameraappen og holde øje med en softwareopdatering, før du konkluderer, at modulet er defekt.

Det fortæller ikke, om objektivet er ridset. Det viser, om Android kan se de kamerafunktioner, som telefonen skal stille til rådighed.

## Hvornår det sandsynligvis er hardware

Et sort forhåndsvisningsbillede fra ét kamera, mens resten af appen åbner, betyder ofte et defekt modul eller en løs kameraforbindelse. Hvis kameraappen slet ikke kan åbne, kan årsagen være software. Ryd derfor kameraappens cache, og genstart, før du antager det værste.

Sløret fokus, pletter der gentager sig, klynger af døde pixels, kraftigt farvestik og ét objektiv, der opfører sig anderledes end alle de andre, er tegn på hardwarefejl. Softwareopdateringer kan ændre farvebehandling eller skarphed. De kan ikke fjerne fugt bag objektivet eller reparere en beskadiget autofokusmotor.

Hvis problemet opstod efter reparation af skærmen, bagglasset eller batteriet, skal du hurtigt gå tilbage til værkstedet. Et kamerastik er måske ikke sat helt på plads, eller der kan være kommet støv ind, mens telefonen var åben.

runcheck giver ikke dine billeder en score, men appen kan hjælpe med at opdage de forhold, der forringer kameraets ydeevne, for eksempel varme, lav ledig lagerplads eller øget batteriforbrug under lange optagelser.
