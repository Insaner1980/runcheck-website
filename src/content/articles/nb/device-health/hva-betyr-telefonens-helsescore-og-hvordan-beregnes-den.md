---
title: "Hva betyr telefonens helsescore, og hvordan beregnes den?"
description: "Åpne Innstillinger på en Android-telefon, så ligger batteriinformasjonen ett sted, lagringsdata et annet og nettverksdetaljene et tredje. En helsescore samler batteri, temperaturtilstand, nettverk og lagring i ett tall, vanligvis fra 0 til 100. Én avlesning i stedet for fire."
listSummary: "temperatur, varme og android"
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["temperatur","varme","android","feilsøking","maskinvare"]
locale: "nb"
draft: false
---
Android definerer ingen universell helsescore for telefoner. Det finnes ingen felles Android-side der 82 av 100 betyr nøyaktig det samme på alle merker. Samsung Batteri og enhetsvedlikehold kan vise en optimaliseringsscore på opptil 100, og Pixel Enhetstilstand og brukerstøtte viser generell status og funksjonsstatus, men dette er produsentverktøy og ikke en delt Android-standard. Diagnoseapper bruker sine egne beregningsmodeller. Hva de tar med, og hvor modellene kommer til kort, betyr mer enn selve tallet.

## Dette måler en helsescore

En nyttig helsescore henter vanligvis data fra fire kategorier og vekter dem etter hvor mye de påvirker den daglige bruken. Det finnes ingen standard for de nøyaktige vektene.

**Batteriet** bør veie tyngst. I beregningsmodellen til runcheck står det for 40 % av totalscoren. Det gir mening, siden et slitt batteri er det mest merkbare problemet på en aldrende telefon. Batteridelen tar hensyn til helsestatusen Android rapporterer, batteritemperatur, spenningsnivå og eventuell batterihelse i prosent når produsenten gjør den tilgjengelig. Androids BatteryManager API kan rapportere tilstander som "Good", "Overheat", "Dead" og "Cold". På nyere Android-versjoner kan systemet vise mer detaljert batterihelse, men ladesykluser og helsetall er bare tilgjengelige når produsenten og batteriets HAL leverer dataene. Et batteri med 92 % helse og temperatur på 31 °C får en høy delscore. Et batteri med 74 % helse som samtidig holder 39 °C, trekker totalscoren tydelig ned.

**Temperaturtilstanden** står for 25 % i modellen til runcheck. Android rapporterer gjeldende termisk status gjennom `PowerManager.getCurrentThermalStatus()` på Android 10 og nyere, og termisk handlingsrom gjennom `getThermalHeadroom()` på Android 11 og nyere. I beregningen brukes blant annet batteritemperaturen og Androids termiske status. Disse opplysningene viser om telefonen er kjølig, varm, allerede struper ytelsen eller nærmer seg et kritisk nivå. Høy temperatur reduserer CPU-ytelsen gjennom termisk struping og fremskynder langvarig batterislitasje. En telefon med normal termisk status og batteritemperatur på 28 °C scorer godt. En telefon som struper ytelsen og ligger over 40 °C, gjør det ikke.

**Nettverkstilkoblingen** bidrar med 25 % i modellen til runcheck. Uten en nylig hastighetstest bygger nettverksscoren på signalstyrke og målt forsinkelse. Hvis det finnes en hastighetstest som er mindre enn én time gammel, vektes signal med 40 %, forsinkelse eller ping med 30 %, nedlastingshastighet med 20 % og jitter eller stabilitet med 10 %. På Wi-Fi er -50 til -70 dBm svært godt, -70 til -80 dBm akseptabelt, og under -80 dBm faller ytelsen. For mobilnett er bedre enn -85 dBm sterkt, mens svakere enn -110 dBm er dårlig. Forsinkelsen betyr også mye. Forskjellen mellom 15 ms og 200 ms merkes ofte tydeligere enn små variasjoner i signalstyrken.

**Lagring** er den minste delen, med 10 % i modellen til runcheck. Under 50 % bruk gis ingen straff. Mellom 50 og 80 % er påvirkningen liten. Over 85 % faller scoren mer fordi Android-ytelsen ofte svekkes når NAND-lagringen har lite ledig plass. Lagringskontrolleren får mindre rom til opprydding og slitasjeutjevning.

## Derfor betyr vektene noe

Batterihelsen påvirker telefonen hver dag. Lagring blir først et stort problem når bruken passerer en terskel. Nettverkskvaliteten svinger hele tiden på grunn av forhold telefonen ikke kan styre. Temperaturtilstanden er midlertidig. En telefon som er varm nå, kan være helt normal om ti minutter.

Vektingen varierer mellom apper. Noen gir alle fire kategorier like stor betydning. Det blir misvisende fordi full lagring da behandles som et like stort problem som et batteri som holder på å svikte. runcheck vekter batteriet med 40 %, temperatur og nettverk med 25 % hver og lagring med 10 %. Det samsvarer bedre med hvordan telefonproblemer faktisk oppleves. En telefon med godt batteri og nesten full lagring er vanligvis mindre hemmet enn en telefon med dårlig batteri og mye ledig plass.

## Problemet med pålitelighet

Ikke alle målingene som inngår i scoren, er like pålitelige. Det er her hele ideen blir mer usikker.

Batterihelse i prosent er nyttig på telefoner som eksponerer dataene riktig, blant annet nyere Pixel-modeller og enkelte nyere Galaxy-telefoner i støttede regioner. På telefoner som ikke gjør det, må apper beregne helsen ved å følge ladingen over tid. Slike anslag blir bedre etter hvert, men starter grovt. En helsescore som bygger på et usikkert batterianslag, arver den samme usikkerheten.

Temperaturmålinger avhenger av hvilke sensorer telefonen gjør tilgjengelige. `getCurrentThermalStatus()` gir et overordnet nivå fra normal til nedstenging, men det er grovt. `getThermalHeadroom()` returnerer et flyttall som sier noe om hvor nær enheten er termisk struping, men tolkningen varierer mellom SoC-er. Batteritemperatur finnes på nesten alle enheter, men den måler batteriet, ikke CPU-en eller overflaten. Forskjellen kan være 5-10 °C.

Signalstyrke i dBm er pålitelig når telefonen rapporterer den. Signalstolpene i Android er derimot ikke standardiserte. Tre stolper på en Samsung og tre stolper på en Pixel på samme sted kan tilsvare ulike dBm-verdier. Stolpene er en visuell forenkling. Det er dBm-tallet som betyr noe.

Lagringsbruk er den eneste målingen som er jevnt pålitelig på tvers av enheter. Det er en enkel beregning uten de samme problemene i maskinvarelaget.

En ærlig helsescore viser disse begrensningene i stedet for å skjule dem. Hvis batterihelsen er beregnet og ikke lest direkte fra maskinvaren, bør usikkerheten være synlig. Å vise et skråsikkert resultat på 87 av 100 når batterianslaget har en feilmargin på 5 %, er misvisende. Mange apper gjør nettopp det.

## Helsescore på eldre telefoner

Kvaliteten på en helsescore avhenger av hvor mye data telefonen gjør tilgjengelig. Eldre enheter gir mindre informasjon.

Telefoner med Android 10, API 29, og nyere kan rapportere termisk status. Temperaturdelen fungerer derfor rimelig godt på enheter fra 2019 og senere når produsenten eksponerer brukbare data. Android 11, API 30, legger til termisk handlingsrom og kan gi et mer detaljert bilde. Før Android 10 er temperaturinformasjonen ofte begrenset til batteritemperaturen.

Forskjellen er størst for batterihelse. Nyere Android-versjoner kan bruke mer detaljerte batteridata, men de fleste telefoner lansert før 2024 rapporterer verken full batterihelse i prosent eller antall ladesykluser. På slike enheter bygger batteridelen på indirekte tegn: den grove statusen Good, Overheat, Dead eller Cold, temperatur, spenning og langsiktig registrering av lading. En telefon med Android 10 kan fortsatt få en nyttig batteriscore fra disse signalene, men med mindre presisjon enn en støttet Pixel 8a eller nyere som rapporterer helse og sykluser direkte.

Lagring og nettverk fungerer jevnt på telefoner fra Android 8 og nyere.

I praksis betyr det at en helsescore på Android 9 til 13 er nyttig, men baserer seg mer på anslag. Den finner tydelige problemer som et kraftig slitt batteri, kritisk full lagring eller vedvarende overoppheting, men usikkerhetsmarginen er større. Det er fortsatt verdifullt. Bare mindre presist.

## Slik tolker du tallet

**75-100:** Telefonen er i god stand. Normal batterislitasje, ingen tydelige temperaturproblemer, nok lagringsplass og fungerende tilkobling.

**50-74:** Noe trenger oppmerksomhet. Vanligvis er batteriet slitt nok til å forkorte dagen, eller lagringen er så full at ytelsen påvirkes. Målrettet vedlikehold kan løse problemet.

**25-49:** Et reelt problem. Batteriet er betydelig svekket, telefonen struper ytelsen gjentatte ganger, eller lagringen er kritisk full. Reparasjon eller utskifting er aktuelt.

**Under 25:** Noe er i ferd med å svikte.

Disse grensene er ikke offisielle. Ingen myndighet eller standardorganisasjon definerer hva som er "friskt" for en telefon. De er praktiske kategorier som diagnoseverktøy bruker, og de samsvarer omtrent med det folk opplever som bra, greit, svekket eller ødelagt.

## Dette kan ikke en helsescore fortelle deg

Den kan ikke oppdage fysisk skade. En sprukket skjerm, defekt høyttaler, løs ladeport eller vannskade vises ikke nødvendigvis i noen programvaremåling.

Den kan ikke forutsi hvor lenge telefonen vil vare. En score på 78 betyr ikke at telefonen har brukt opp 78 % av levetiden. Den betyr at telefonen akkurat nå er i rimelig god stand ut fra målingene som inngår.

Den kan ikke sammenligne telefonmodeller direkte. 90 av 100 på en rimelig telefon med 3 GB RAM og 32 GB lagring tilsvarer ikke 90 av 100 på en toppmodell med 12 GB RAM og 256 GB lagring.

Scoren er et øyeblikksbilde. Den er nyttig for å se utvikling over tid, for eksempel om telefonen blir dårligere, og for raske vurderinger, som om en brukt telefon er verdt prisen. Det er et utgangspunkt, ikke en diagnose.

## Ofte stilte spørsmål

**Publiserer produsentene offisielle helsescore?**
Det finnes ingen universell score. Samsung Batteri og enhetsvedlikehold kan vise en optimaliseringsscore på opptil 100, men den bygger på Samsungs egne kontroller av batteri, lagring, minne og sikkerhet, ikke en felles Android-standard. Pixel Enhetstilstand og brukerstøtte viser generell status og funksjonsstatus i stedet for en generell telefonscore fra 0 til 100. Produsentverktøyene er nyttige, men tallene kan ikke sammenlignes rent mellom merker.

**Kan en lav score forbedres?**
Det avhenger helt av årsaken. Hvis full lagring trekker scoren ned, kan du frigjøre plass og se en umiddelbar forbedring. Et slitt batteri kan bare løses med batteribytte. Temperaturproblemer kan forsvinne når du lukker en app som oppfører seg dårlig, eller fjerner et deksel som holder på varmen.

**Er en høyere score alltid bedre?**
På samme telefon over tid, ja. En synkende score betyr at tilstanden blir dårligere. Mellom forskjellige telefoner er svaret mindre klart. En tre år gammel telefon med 72 kan fungere helt fint for eieren, mens en ny telefon med 95 kan ha dårlig signal akkurat der eieren bor, og det vil trekke scoren noe ned.
