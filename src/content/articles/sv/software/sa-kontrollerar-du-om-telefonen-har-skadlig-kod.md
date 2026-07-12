---
title: "Så kontrollerar du om telefonen har skadlig kod"
description: "Du använder telefonen som vanligt. Sedan börjar batteriet laddas ur snabbt, popupannonser visas på startskärmen och en slumpmässig app som du inte minns att du installerat dyker upp i applistan."
listSummary: "Du använder telefonen som vanligt."
hub: "software"
sourceNumber: 125
order: 7
tags: ["android","skadlig-programvara","säkerhet","felsökning","guide"]
locale: "sv"
draft: false
---
Det bevisar inte att telefonen har skadlig kod. Telefoner kan också bete sig märkligt när lagringen är full, appar krånglar eller en uppdatering har gått fel. Men symtomen är värda att undersöka.

Börja med de tråkiga förklaringarna. Leta sedan efter skadlig kod.

## Tecken som är värda att ta på allvar

Ett enda symtom räcker sällan. Flera symtom samtidigt säger mer.

Batteriförbrukningen är en bra början. Öppna batterisidan i Inställningar och kontrollera vilka appar som har använt mest ström. En navigeringsapp som har förbrukat mycket batteri efter en lång bilresa är normal. En QR-skanner som drar batteri hela natten är det inte.

Kontrollera även mobildata. På många telefoner finns uppgiften under Nätverk och internet i Inställningar, och på Samsung under Anslutningar. Skadlig kod som laddar upp data, hämtar annonser eller kontaktar en styrserver måste använda bandbredd någonstans.

Popupannonser utanför appen som skapade dem är ett tydligare varningstecken. Annonser i ett gratisspel är irriterande. Annonser som flyter ovanpå startskärmen, låsskärmen eller Inställningar tyder ofta på annonsprogram.

Okända appar är en annan tydlig signal. Öppna listan över appar i Inställningar och gå igenom allt som är installerat. Leta efter generiska namn, tomma ikoner, verktyg som ser ut som dubletter, appar med namn som "System Service" trots att de uppenbart inte kommer från telefontillverkaren eller något som installerades ungefär när problemen började.

Värme och långsam prestanda kan spela roll, men övertolka dem inte. Telefonen kan bli varm på grund av dålig täckning, en app som har hängt sig, laddning i solen eller ett batteri som håller på att ge upp. Skadlig kod är en möjlig orsak, inte den självklara förklaringen.

## Kör en genomsökning med Google Play Protect

Alla Google-certifierade Android-telefoner har Google Play Protect. Öppna Google Play Butik, tryck på profilikonen, välj Play Protect och starta en genomsökning.

Kontrollera att Sök igenom appar med Play Protect är aktiverat. Slå också på Förbättrad appidentifiering om du installerar appar från andra källor än Google Play, eftersom det gör att Google kan analysera okända appar mer ingående.

Play Protect kontrollerar appar när du installerar dem och genomsöker sedan enheten regelbundet. Google uppger att Play Protect genomsöker 200 miljarder Android-appar varje dag. Tjänsten kan varna dig, inaktivera en app eller ta bort en skadlig app automatiskt.

Det här är den första genomsökningen du bör köra. Den är inte perfekt, men den är inbyggd och omfattar även sidoladdade appar.

## Granska misstänkta behörigheter

Öppna behörighetshanteraren under Säkerhet och integritet i Inställningar. På vissa telefoner ligger den i stället under Appar.

Titta på kamera, mikrofon, plats, kontakter, SMS, telefon samt filer eller media. Frågan är enkel: behöver appen den här behörigheten för att göra sitt jobb?

Att en meddelandeapp har tillgång till mikrofonen är rimligt. Att en kalkylator har tillgång till SMS är det inte. En app för bakgrundsbilder med tillgänglighetsbehörighet är en varningssignal om den inte har en mycket specifik funktion som du förstår.

Ta bort behörigheter som ser fel ut. Om appen slutar fungera för att du tog bort en behörighet som den aldrig borde ha behövt är det bättre att avinstallera den.

## Kontrollera nyligen installerade och sidoladdade appar

De flesta Android-infektioner börjar med att en app installeras. Det kan vara en skadlig app från en webbplats, en falsk uppmaning att uppdatera, en modifierad APK eller en skadlig app som slank igenom appbutikens granskning.

Öppna Google Play Butik, tryck på profilikonen och gå till hanteringen av appar och enheter. Visa applistan och sortera efter nyligen uppdaterade eller installerade appar. Jämför sedan listan med när symtomen började.

Granska sidoladdade appar extra noga. På många nyare Android-telefoner visar appinformationen varifrån en app installerades. Om källan är en webbläsare, filhanterare, meddelandeapp eller okänd paketinstallerare bör du se den som en högre risk.

Behåll inte APK-filer bara för att de var svåra att hitta. Det är så man övertalar sig själv att behålla tveksam mjukvara.

## Använd säkert läge

Säkert läge, eller Safe Mode, startar Android med appar från tredje part inaktiverade. Om popupannonser, överhettning eller märklig bakgrundsaktivitet upphör där är en nedladdad app troligen orsaken.

På många telefoner håller du in strömknappen, trycker länge på alternativet för att stänga av på skärmen och väljer säkert läge. På Samsung fungerar samma metod vanligtvis. Vissa märken använder en annan knappsekvens, så sök efter instruktioner för den exakta modellen om alternativet inte visas.

Stanna i säkert läge tillräckligt länge för att testa symtomet. Starta sedan om telefonen normalt och avinstallera nya eller misstänkta appar en i taget.

Börja med sidoladdade appar. Fortsätt sedan med verktyg som begär tillgänglighetsbehörighet, åtkomst till aviseringar, enhetsadministration, SMS eller behörighet att visas ovanpå andra appar.

## Om en app inte går att avinstallera

Vissa skadliga appar gör sig svårare att ta bort genom att begära åtkomst som enhetsadministratör eller tillgänglighetsbehörighet.

Sök i Inställningar efter enhetsadministratör eller "device admin". Stäng av administratörsåtkomsten för allt misstänkt och avinstallera sedan appen.

Kontrollera även Tillgänglighet i Inställningar och ta bort åtkomst för appar som inte borde finnas där. Tillgänglighetsbehörighet är kraftfull eftersom en app kan läsa innehåll på skärmen och interagera med gränssnittet. Lösenordshanterare och tillgänglighetsverktyg kan ha ett legitimt behov. En rensningsapp har det inte.

Kör Play Protect igen efter borttagningen.

## Byt lösenord efter en verklig infektion

Om du hittade en tydligt skadlig app räcker det inte att avinstallera den.

Byt lösenord för konton som har använts på telefonen, särskilt e-post, banktjänster, sociala medier, molnlagring och lösenordshanterare. Gör det från en ren enhet om det är möjligt.

Om appen hade SMS-behörighet bör du utgå från att engångskoder kan ha exponerats. Om den hade tillgänglighetsbehörighet bör du räkna med att den kan ha sett mer än vad den vanliga behörighetslistan antyder.

## Fabriksåterställ när du inte kan lita på resultatet

En fabriksåterställning tar bort nästan all skadlig kod för Android eftersom användarinstallerade appar och data raderas. Säkerhetskopiera bilder, meddelanden och filer först, men återställ inte exakt samma uppsättning appar efteråt.

Installera om appar manuellt via Google Play efter återställningen. Undvik att återställa okända APK-filer eller gamla appsäkerhetskopior.

Sällsynt skadlig kod kan överleva genom att utnyttja systemåtkomst eller förinstallerade komponenter från tillverkaren, men det är inte något vanliga konsumenter normalt råkar ut för. Om problemen finns kvar efter en återställning på en gammal telefon utan support är det mer realistiskt att byta enhet.

## Så minskar du risken nästa gång

Håll Androids säkerhetskorrigeringar aktuella. Hämta appar från Google Play eller en annan betrodd källa. Låt Play Protect vara aktiverat. Var misstänksam mot APK-länkar i meddelanden, falska webbläsarvarningar och popupfönster som kräver att du "uppdaterar appen nu" men inte kommer från Google Play eller telefonens egen uppdateringsfunktion.

Och om en webbplats påstår att telefonen är infekterad och ber dig trycka på en knapp ska du stänga fliken. Det är ett bedrägeriförsök, inte en diagnos.
