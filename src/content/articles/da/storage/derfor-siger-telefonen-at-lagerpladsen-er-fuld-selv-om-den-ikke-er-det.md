---
title: "Derfor siger telefonen, at lagerpladsen er fuld, selv om den ikke er det"
description: "Et almindeligt supportforløb ser sådan ud: En person sletter en bunke videoer, tjekker telefonens lageroversigt, og telefonen nægter stadig at installere en app eller tage et billede."
listSummary: "Find årsagen, når Android melder om fuld lagerplads, selv om der ser ud til at være plads."
hub: "storage"
sourceNumber: 87
order: 9
tags: ["lagerplads","android","oprydning","optimering","guide"]
locale: "da"
draft: false
---
Irriterende, men ikke sjældent. Androids advarsler om fuld lagerplads kan skyldes synlige filer, skjulte appdata, papirkurve, mislykkede downloads, rester fra systemopdateringer eller en lagerdatabase, der endnu ikke er blevet opdateret. Efter en stor opdatering, blandt andet udrulningen af Android 17, som begyndte på understøttede Pixel-telefoner før producenternes bredere opdateringer, kan den slags forvirring opstå i et døgn eller to, mens telefonen falder til ro.

Begynd med at genstarte telefonen. Ja, virkelig. Det er den kedelige løsning, men den rydder fastlåst midlertidigt arbejde oftere, end mange regner med.

## Systemet fylder mere, end der står på æsken

En telefon, der sælges med 128 GB, giver dig aldrig 128 GB til dine egne filer. Android, firmware, producentens apps, sprogfiler, systempartitioner og opdateringsområder tager en del af pladsen, før du installerer noget som helst.

Pixel-telefoner er ofte mindre belastede end telefoner med omfattende producenttilpasninger, men der findes ikke ét tal, der gælder for alle. En Samsung Galaxy med One UI, en Xiaomi-telefon med en tungere brugerflade og en Pixel med Android 17 viser ikke systemlager på samme måde.

Systemlageret kan også se større ud efter en systemopdatering. Android bruger opdateringsmekanismer, der kræver midlertidig plads, og oprydningen er ikke altid synlig med det samme. Hvis du lige har installeret Android 17 eller en stor producentopdatering, så genstart telefonen, sæt den til opladning, lad den være på Wi-Fi et stykke tid, og tjek igen senere.

## Cache tæller med som brugt plads

Appcache er midlertidige data, men de optager stadig lagerplads. Browsere, sociale medier, videoapps, kortapps og beskedapps er de sædvanlige syndere.

Standard-Android, herunder Android 17 på Pixel, har ikke en almindelig knap til at rydde cachen for alle apps på én gang. Ryd i stedet cachen for hver app: Åbn Indstillinger > Apps, vælg appen, åbn Lager eller Lagerplads og cache, og tryk på Ryd cache. Google beskriver Ryd cache som en funktion, der sletter midlertidige data, mens Ryd lagerplads sletter alle appens data permanent.

Ryd ikke alt uden at tænke dig om. Begynd med de apps, der bruger mest lagerplads. En cache på 3 GB i én videoapp betyder noget. Tolv små cacher på 20 MB gør ikke.

## Papirkurven tæller stadig med

Når du sletter en fil, forsvinder den ikke altid med det samme. Files by Google kan flytte filer til papirkurven, hvor de bliver liggende i 30 dage, før de slettes automatisk. Google Fotos beholder sikkerhedskopierede, slettede billeder og videoer i papirkurven i 60 dage. Elementer, der ikke er sikkerhedskopieret og slettes fra en enhed med Android 11 eller nyere, bliver liggende i 30 dage.

Det betyder, at du kan slette en bunke videoer uden at få pladsen tilbage, før du tømmer papirkurven.

Tjek papirkurven i galleriappen, Files by Google, Samsung Mine filer og de cloudapps, du bruger. Samsung Galleri, Google Fotos, OneDrive, Dropbox og filhåndteringsapps har hver deres måde at håndtere sletning på. Det er præcis derfor, oprydning i lagerplads føles mere indviklet, end det burde.

## Beskedapps gemmer store mængder medier

WhatsApp, Telegram, Signal, Messenger, Discord og lignende apps kan stille og roligt gemme billeder, videoer, talebeskeder, GIF-filer, stickers og dokumenter. Filerne kan optræde i Galleri, inde i beskedappen og under appens lagerforbrug, så oversigten virker selvmodsigende.

WhatsApp har et nyttigt indbygget værktøj: `Settings > Storage and data > Manage storage`. Brug det, før du begynder at slette tilfældige mapper manuelt. Her kan du sortere efter store filer, ofte videresendte filer og de chats, der fylder mest.

Telegram fungerer lidt anderledes, fordi appen i højere grad bygger på cloudbaseret chathistorik, men den gemmer stadig medier lokalt i en cache. Åbn Telegrams indstillinger, og tjek `Data and Storage > Storage Usage` for at begrænse eller rydde den lokale cache.

Den bedste forebyggelse er at slå automatisk download af medier fra i gruppechats. Gruppevideoer er gift for lagerpladsen.

## Mislykkede downloads og rester fra opdateringer

En mislykket download af et spil, en afbrudt filkopiering eller en halvfærdig systemopdatering kan efterlade midlertidige filer. De vises ikke altid pænt i Downloads.

Genstart først. Tjek derefter Downloads, browserens downloadliste, ventende opdateringer i Google Play og andre appbutikker, du bruger. Hvis en stor app- eller spilopdatering mislykkedes, kan du annullere den og begynde igen, når du har frigjort mere plads.

Nogle enheder har en gendannelsesfunktion til at rydde cachepartitionen. Betragt det som et modelspecifikt fejlfindingstrin, ikke som almindelig oprydning. Gendannelsesmenuen og tastekombinationen varierer, og nogle telefoner tilbyder slet ikke funktionen.

## Kategorien "Andet" er en rodekasse

Andet er ikke én bestemt ting. Kategorien kan omfatte appdatabaser, logfiler, miniaturebilleder, mapper fra afinstallerede apps, downloadede firmwarefiler, midlertidige arkiver og filer, som Android ikke kan placere tydeligt.

Der findes ikke en sikker, universel knap til at "slette Andet". Den sikreste vej er kedelig, men effektiv: Ryd cache for store apps, tøm papirkurve, ryd op i Downloads, fjern apps, du ikke bruger, og brug beskedappens eget lagerværktøj.

Hvis Andet stadig fylder usædvanligt meget bagefter, kan en bestemt app være årsagen. Se under Indstillinger > Apps, og sorter efter lagerforbrug, hvis telefonen tilbyder den visning.

## Når Androids lagerberegning er forkert

Nogle gange er tallet faktisk forkert. Mediedatabasen kan være bagefter, især efter en stor sletning, et problem med SD-kortet, en filoverførsel eller en systemopdatering.

Giv den først lidt tid. Genstart. Åbn derefter galleriappen og filhåndteringen, så de scanner igen. Hvis billeder eller videoer mangler i oversigten, men stadig er synlige i Filer, kan indekset i Media Storage være forældet.

På nogle enheder kan erfarne brugere gå til `Settings > Apps > Show system apps > Media Storage > Storage > Clear data`. Det sletter ikke selve mediefilerne, men tvinger Android til at genopbygge medieindekset, og enheden kan arbejde hårdt imens. Gør det ikke uden god grund. Brug kun metoden, når lagertallene tydeligvis ikke stemmer.

En diagnoseapp som runcheck kan hjælpe, fordi den viser lagerpres og oprydningskategorier uden for telefonens til tider forvirrende oversigt i Indstillinger. Den sletter ikke noget på magisk vis, men den peger på den del af lageret, der fortjener opmærksomhed.

## Det bør du gøre først

Genstart telefonen.

Tøm papirkurven i galleriappen og filhåndteringen.

Åbn lageroversigten i Indstillinger, og se, hvilken kategori der fylder mest.

Ryd cachen for de to eller tre apps, der bruger mest plads.

Brug WhatsApps eller Telegrams eget lagerværktøj, hvis chatmedier fylder meget.

Slet gamle filer i Downloads, især APK-filer, ZIP-filer, eksporterede videoer og dublerede dokumenter.

Sikkerhedskopiér billeder og videoer, og brug derefter Frigør plads på denne enhed i Google Fotos eller en tilsvarende funktion i din cloudapp til at fjerne lokale kopier.

Hvis intet af det virker, og enheden stadig næsten ikke kan bruges, skal du sikkerhedskopiere alt vigtigt og overveje en nulstilling til fabriksindstillinger. Det er sidste udvej, fordi hele enheden slettes, men det er også den løsning, der rydder helt op i en alvorligt sammenfiltret lagerberegning.
