---
title: "Så kontrollerar du om mobilskärmen skadades vid ett fall"
description: "Du plockar upp mobilen, glaset ser helt ut och i några sekunder tror du att den klarade sig. Det kanske den gjorde. Men en skärm kan se oskadd ut efter ett fall och ändå ha små fel i panelen eller digitizern."
listSummary: "Du plockar upp mobilen, glaset ser helt ut och i några sekunder tror du att den klarade sig."
hub: "physical-damage"
sourceNumber: 131
order: 1
tags: ["hårdvara","testning","diagnostik","android","guide"]
locale: "sv"
draft: false
---
Målet är inte att panikgranska varje pixel som om du köpte en begagnad mobil av en främling. Det handlar om att hitta sådant som faktiskt spelar roll: sprickor, döda pixlar, områden där pekskärmen inte svarar, färgskiftningar, flimmer och en panel som har börjat lossna.

## Börja med glaset och ramen

Gör den tråkiga kontrollen först.

Torka av skärmen, ta av skalet och titta på mobilen i starkt ljus. Vinkla den långsamt. Hårfina sprickor syns ofta bara från en viss vinkel, särskilt nära hörn och böjda kanter. Kontrollera hörnet som träffade golvet och följ sedan ramen hela vägen runt skärmen.

Leta efter en glipa mellan glaset och ramen. Om skärmen har lyft en aning vid ett hörn kan skärmenheten ha förskjutits eller limmet ha släppt. Det är viktigt även om pekfunktionen fortfarande fungerar, eftersom damm och fukt nu kan ta sig in.

Om du använder skärmskydd ska du kontrollera det separat. Ett sprucket skärmskydd kan få skärmen att se skadad ut fast den inte är det. Det omvända gäller också: ett tjockt skydd kan dölja en spricka under sig. Om stöten var hård och skyddet är mycket trasigt bör du bara ta bort det om det kan göras utan att löst glas följer med.

## Kontrollera döda eller fastnade pixlar

Döda pixlar syns oftast som små svarta prickar mot ljusa bakgrunder. Fastnade pixlar kan fortsätta lysa rött, grönt, blått eller vitt när de inte ska göra det.

Öppna först en helt vit bild. En tom anteckning, en webbsida med vit bakgrund eller en skärmtestapp fungerar. Höj ljusstyrkan, torka av glaset igen och granska skärmen långsamt uppifrån och ned. Visa sedan helsvarta, röda, gröna och blå bilder. Varje färg gör olika fel lättare att upptäcka.

En skärmtestapp från Google Play som visar enfärgade bilder i helskärm är praktisk. Du behöver inget avancerat. Undvik appar som begär märkliga behörigheter. Ett pixeltest behöver inte åtkomst till kontakter, plats, samtalsloggar eller tillgänglighetstjänster.

En död pixel efter ett fall betyder inte säkert att skärmen går sönder i morgon. Ett kluster nära träffpunkten är däremot ett dåligt tecken. Det är en fysisk skada, inte ett programvarufel.

## Testa pekfunktionen över hela skärmen

Bildpanelen och peklagret är tillräckligt separata för att den ena delen kan gå sönder medan den andra ser normal ut. Därför kan en mobil visa en perfekt bild men ignorera tryck längs en smal remsa.

Öppna en ritapp och dra långsamma, sammanhängande linjer över hela skärmen. Rita från vänster till höger, uppifrån och ned och sedan diagonalt. Nöj dig inte med att trycka på några ikoner. Ett dött område kan vara mycket smalt, och ett sveptest hittar luckor som vanliga tryck missar.

Håll utkik efter avbrott i linjen, ryckiga hopp, fördröjd respons eller områden där det inte går att rita. Testa kanterna noggrant. Kantskador är lätta att missa eftersom de yttersta millimetrarna inte alltid används i vardagen.

Samsung-användare bör börja med den väg som tillverkaren stöder: öppna Samsung Members, välj Få hjälp och öppna testerna under Diagnostik. Kör testerna för pekskärmen och skärmen. På vissa Galaxy-modeller går det även att öppna en hårdvarutestmeny genom att slå `*#0*#`, men koden kan vara avstängd beroende på region, operatör, modell eller säkerhetsinställningar. Lita därför inte på den som enda metod.

På Pixel 9, Pixel 9 Pro och Pixel 9 Pro XL finns Tryckdiagnostik under Inställningar > Skärm och tryck > Tryckdiagnostik. På Pixel 8a och äldre modeller kan det i stället finnas inställningar för Tryckkänslighet, och Googles reparationsdiagnostik kan vara tillgänglig på Pixel-modeller som stöds. Om din Pixel inte har samma meny ska du inte försöka tvinga fram instruktionen. Använd rittestet.

## Kontrollera ljusstyrka, flimmer och färger

Problem med ljusstyrkan syns ofta först när reglaget flyttas.

Öppna skärminställningarna och dra långsamt ljusstyrkan från lägsta till högsta nivå. Förändringen ska vara jämn. Flimmer, plötsliga svartskärmar vid låg ljusstyrka, pulserande ljus eller ett område som reagerar senare än resten kan tyda på skador i panelen eller bildskärmsstyrningen.

Visa sedan en mörkgrå bild eller öppna en mörk app i ett svagt upplyst rum. OLED-skärmar kan få tryckmärken eller tonade fläckar efter en stöt. LCD-skärmar kan få nytt ljusläckage längs kanterna. En viss ojämnhet kan vara normal på billiga LCD-paneler, så jämför med hur skärmen såg ut före fallet. Det viktiga är om något är nytt.

Öppna ett foto du känner väl. Hudtoner, vita väggar och grå bakgrunder är bra för att hitta en ny grön, rosa eller gul ton. Om färgen förändras när du trycker lätt nära träffpunkten ska du sluta trycka. Det är inte ett inställningsproblem.

## Glöm inte tidpunkten för uppdateringar

Ett fall ger en enkel berättelse: mobilen faller, skärmen beter sig konstigt och skärmen är skadad. Verkligheten är ofta rörigare.

Om skärmen började uppföra sig konstigt efter en systemuppdatering som installerades ungefär samtidigt bör du testa innan du skyller på hårdvaran. Android 17 började rullas ut till stödda Pixel-enheter i juni 2026, medan tidplanen för andra tillverkare varierar. Starta om mobilen, sök efter en ny korrigeringsuppdatering och starta i säkert läge för att utesluta att en app stör.

Säkert läge kan däremot inte laga sprucket glas, trasiga OLED-lager eller en skadad digitizer. Om samma döda område finns i säkert läge, i Inställningar, i en ritapp och på låsskärmen är felet fysiskt.

## När runcheck kan hjälpa

Ett skärmtest kontrollerar bara skärmen. Ett fall kan också rubba batterikontakten, temperatursensorer, antennkontakter, kameramodulen eller laddningsporten.

runcheck ger en bredare bild av batteri, temperatur, nätverk och lagring på ett och samma ställe. Appen kan inte diagnostisera en sprucken digitizer, men den kan hjälpa dig att upptäcka ovanlig batteriförbrukning, värme eller förändrad anslutning efter fallet. Det är användbart när skärmen ser normal ut men mobilen börjar bete sig annorlunda under de följande dagarna.

## Så tolkar du resultatet

Om skärmen klarar den visuella kontrollen samt testerna av pixlar, pekfunktion, ljusstyrka och färger är den förmodligen oskadd. Håll ändå uppsikt över den i en eller två veckor, särskilt om mobilen landade på ett hörn.

Om du hittar döda pixlar, ett område där pekskärmen inte svarar, en panel som lyfter, ihållande flimmer eller missfärgning som sprider sig ska du behandla det som en fysisk skada. En programvaruåterställning lagar inte en digitizer. En fabriksåterställning lagar inte tryckskador i en OLED-panel. Den verkliga lösningen är skärmbyte eller en professionell kontroll.

Om skärmen lyfter därför att batteriet under den sväller ska du sluta använda och ladda mobilen. Då är det inte längre bara ett skärmproblem.
