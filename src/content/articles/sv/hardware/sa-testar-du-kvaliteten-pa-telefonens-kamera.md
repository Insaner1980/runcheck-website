---
title: "Så testar du kvaliteten på telefonens kamera"
description: "Praktiska sätt att kontrollera kamerakvaliteten på en Android-telefon, inklusive autofokus, linsbyte, sensorfel, videostabilitet och diagnostikverktyg."
listSummary: "hårdvara, testning och diagnostik"
hub: "hardware"
sourceNumber: 110
order: 7
tags: ["hårdvara","testning","diagnostik","android","guide"]
locale: "sv"
draft: false
---
---

Det blir lättare att testa en kamera när du slutar tänka på megapixlar. En sensor på 50 MP kan fortfarande ta dåliga bilder om linsen är smutsig, autofokusen är trasig eller kameramodulen har flyttats en aning efter ett fall.

Målet är enkelt: kontrollera om kamerorna i telefonen fungerar som de ska.

## Börja med en ren lins och ett enkelt motiv

Torka av linsglaset med en ren mikrofiberduk. Gör det före alla andra tester. Ett fingeravtryck kan se ut som dålig HDR, mjuk fokus, linsdis eller svag prestanda i dåligt ljus.

Öppna standardappen för kameran och rikta den mot något med fina detaljer. Tryckt text, en strukturerad vägg, ett tangentbord eller trädgrenar mot himlen fungerar bra. Tryck för att fokusera. Bilden ska snabbt bli skarp och förbli skarp.

Om kameran jagar fram och tillbaka utan att hitta fokus kan autofokusmekanismen vara skadad. Det är vanligt efter fall eftersom den lilla voice coil-motorn som flyttar linsen är känslig. Om bilden aldrig blir skarp oavsett var du trycker bör du jämföra med en annan lins i samma telefon innan du skyller på programvaran.

Växla mellan alla tillgängliga kameror: huvudkamera, ultravidvinkel, tele, makro och frontkamera. Om en enda lins är suddig medan de andra är skarpa pekar det mot just den modulen. Möjliga orsaker är damm under linskyddet, sprucket linskydd, fukt i kameraområdet eller en modul som hamnat fel efter en reparation.

## Leta efter fel som upprepas

Ta ett foto av en enfärgad vit vägg eller ett rent pappersark i jämn belysning. Det gör fel lättare att se.

En viss mörkare ton i hörnen är normal. Telefonlinser är små och programvaran korrigerar ofta kanterna. Det du letar efter är en tydlig mörk fläck, en färgad missfärgning eller en smet som hamnar på exakt samma ställe i varje bild.

Ta sedan en bild i svagt ljus utan blixt. Zooma in. Ljusa färgade prickar som stannar på samma plats i flera bilder kan vara heta pixlar, så kallade hot pixels, eller en skadad sensor. En enstaka avvikande pixel är inget att få panik över. Ett kluster är en annan sak.

Ta nu en bild mot ett ljust fönster eller en lampa, men inte rakt mot solen. En lila eller grön ton över hela bilden kan tyda på skada runt sensorfiltret. Normal linsöverstrålning syns som stråk eller spökformer nära starkt ljus. Den ska inte plötsligt vara mycket värre än före ett fall eller en reparation.

## Testa exponering och färg

Ta samma bild två gånger: en gång i dagsljus och en gång inomhus i varm belysning. Hudtoner, vita väggar och grå föremål är bra referenser eftersom ögat snabbt märker när de ser fel ut.

Telefoner bearbetar bilder kraftigt, så förvänta dig inte helt neutrala färger. Pixel, Samsung, Xiaomi och OnePlus gör olika val. Den användbara jämförelsen är med samma modell, inte med ett annat märke som har en annan bildstil.

Titta på exempelbilder från samma telefonmodell på nätet om du behöver en rimlighetskontroll. Granska riktiga bilder och förlita dig inte bara på kamerapoäng. Poäng kan vara användbara, men en beskuren jämförelse sida vid sida säger mer när du försöker diagnostisera din egen telefon.

## Spela in en kort video

Spela in 20-30 sekunder med den högsta upplösning du normalt använder. Panorera långsamt, gå några steg och prata samtidigt.

Spela upp klippet och kontrollera fyra saker: fokus, stabilisering, tappade bildrutor och ljudsynkronisering. En telefon med optisk bildstabilisering ska jämna ut små handrörelser. Den får inte gångfilm att se ut som om den spelats in med en gimbal, men bilden ska inte skaka våldsamt heller.

Om videon fryser till, hackar eller tappar synk mellan ljud och bild kan orsaken vara värme, lagringens skrivhastighet, ett fel i kameraappen eller hårdvara. Prova igen efter att ha startat om telefonen och frigjort lagringsutrymme. Om problemet återkommer när telefonen är sval och det finns ledigt utrymme bör du ta det på allvar.

## Använd inbyggd diagnostik

Samsung Galaxy kan testa kamerorna via Samsung Members. Öppna appen, välj Support och starta Telefondiagnostik. Kör Kameratestet. Vilka tester som visas varierar mellan modeller, men Samsung listar Kamera bland telefonens diagnostikfunktioner.

Samsung-koden `*#0*#` öppnar också kamerarutor på många Galaxy-modeller. Mega Cam testar den bakre kameran och Front Cam testar selfiekameran. Testerna bekräftar att modulerna öppnas och kan ta en bild. De bedömer inte bildkvaliteten åt dig.

Xiaomi-, Redmi- och POCO-enheter har vanligtvis kameratester i CIT-menyn som öppnas med `*#*#6484#*#*`. På telefoner med flera bakre kameror kan menyn testa varje lins separat.

Pixel har ingen Samsung-liknande `*#0*#`-meny. Googles kod `*#*#7287#*#*` är kopplad till Pixel Repair Diagnostics på enheter som stöds, och exakt vilka tester som finns kan variera beroende på modell, region och programvaruversion.

Android 17 gör inte kameradiagnostiken universell. Den beror fortfarande på tillverkaren.

## Kontrollera Camera2-stöd om funktioner saknas

Om kameraappar från tredje part inte kan använda manuell exponering, RAW, video med hög bildfrekvens eller telekameran kan du installera en Camera2 API-inspektionsapp, till exempel Camera2 API Probe. Den visar vad varje kamera rapporterar till Android: upplösningar som stöds, autofokuslägen, stabilisering och hårdvarunivå.

Hårdvarunivåerna spelar roll. `LEGACY` innebär att kameran använder äldre kompatibilitetsbeteende. `LIMITED` betyder grundläggande stöd för Camera2. `FULL` ger mer omfattande manuell kontroll. `LEVEL_3` lägger till mer avancerade funktioner, inklusive RAW och ombearbetning på enheter som exponerar stödet.

Open Camera är också användbar när du vill skilja standardappens bildbehandling från kamerahårdvaran. Om Open Camera fokuserar korrekt men standardappen inte gör det bör du rensa cacheminnet för appen Kamera och kontrollera om det finns en programuppdatering innan du antar att modulen är trasig.

Det här säger inte om linsen är repad. Det visar om Android kan se de kamerafunktioner som telefonen ska exponera.

## När felet troligen sitter i hårdvaran

En svart förhandsvisning från en enda kamera, samtidigt som resten av appen öppnas, betyder ofta att modulen har gått sönder eller att kamerakontakten sitter löst. Om kameraappen inte öppnas alls kan orsaken vara programvara, så rensa appens cacheminne och starta om innan du antar det värsta.

Suddig fokus, återkommande fläckar, kluster av defekta pixlar, kraftig färgton och en lins som beter sig annorlunda än alla andra är tecken på hårdvarufel. Programuppdateringar kan ändra färgbehandling eller skärpning. De kan inte ta bort fukt bakom linsen eller reparera en skadad autofokusmotor.

Om problemet började efter byte av skärm, bakglas eller batteri bör du gå tillbaka till verkstaden snabbt. En kamerakontakt kanske inte sitter helt på plats, eller så kan damm ha kommit in när telefonen var öppen.

runcheck sätter inga poäng på bilderna, men appen kan hjälpa dig upptäcka omständigheter som försämrar kamerans prestanda, till exempel värme, lite ledigt lagringsutrymme eller hög batteriförbrukning under långa inspelningar.
