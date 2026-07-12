---
title: "Så testar du telefonens fingeravtryckssensor på Android"
description: "Metabeskrivning: Så kontrollerar du om fingeravtryckssensorn på en Android-telefon fungerar, med inbyggd diagnostik, koder i telefonappen, Pixel-verktyg, Samsung Members, Xiaomi CIT och enkla praktiska tester."
listSummary: "diagnostik, sensorer och android"
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnostik","sensorer","android","hårdvara","guide"]
locale: "sv"
draft: false
---
Är fingeravtryckssensorn trasig, eller är den bara irriterad på skärmskyddet? Det låter som ett skämt, men är den första frågan du bör ställa.

Problem med fingeravtryck är ofta ganska vardagliga. Torr hud, fukt, ett billigt skärmskydd av härdat glas, en dålig registrering eller en halvfärdig programuppdatering kan få en fungerande sensor att verka död. Hårdvarufel förekommer också, särskilt efter ett fall eller ett skärmbyte, men börja inte där.

## Snabbtest: lås upp tio gånger

Registrera ett fingeravtryck, rengör området runt sensorn, torka fingret och försök låsa upp telefonen tio gånger i följd.

För en kapacitiv sensor på baksidan eller sidan betyder 8 eller 9 lyckade upplåsningar av 10 vanligtvis att hårdvaran fungerar. Om den misslyckas en eller två gånger handlar det troligare om fingerplacering, smuts, hudens skick eller programvaran.

Med en sensor under skärmen bör du vara lite noggrannare vid inställningen och samtidigt något mer tolerant mot resultatet. Optiska och ultraljudsbaserade sensorer är beroende av skärmytan, så ett skärmskydd kan försämra precisionen kraftigt. Om en ren telefon utan skärmskydd misslyckas fler än 3 gånger av 10 bör du fortsätta felsöka.

## Tester på Samsung Galaxy

På många Samsung Galaxy-telefoner kan du öppna den förinstallerade appen Telefon och skriva `*#0*#`. Leta efter Fingerprint Scanner eller ett alternativ för fingeravtryck bland sensortesterna. Menyn kan visa om hårdvaran registrerar ett finger och om matchningen fungerar.

Samsung Members är den lösning som har bättre officiellt stöd. Öppna Samsung Members, gå till fliken Support och välj Telefondiagnostik. Kör fingeravtryckstestet om det finns på modellen. Samsungs egen felsökning tar också upp vanliga orsaker som skärmskydd som inte är certifierade, smutsiga sensorer, repat glas, torr hud och skal som blockerar sensorn.

En aktuell Samsung-detalj är lätt att missa: på Galaxy-enheter med Android 16 och One UI 8 eller senare använder registreringen en svepande rörelse på vissa modeller. Följ rörelsen som visas på skärmen i stället för att utgå från att alla Galaxy-telefoner fortfarande vill ha upprepade stilla tryck.

## Tester på Xiaomi, Redmi och POCO

På telefoner från Xiaomi, Redmi och POCO öppnar du telefonappen och skriver `*#*#6484#*#*`. Om CIT-läget inte öppnas kan du prova `*#*#64663#*#*`.

Leta i CIT efter `Fingerprint sensor check`, `Fingerprint input test` eller ett alternativ med liknande namn. Xiaomis supportsidor rekommenderar uttryckligen CIT:s hårdvarutest när fingeravtrycksalternativet saknas, så det här är mer än ett gammalt forumknep.

Du kan också öppna telefoninformationen i Inställningar, gå till den detaljerade specifikationsvyn och trycka flera gånger på kernelversionen. Xiaomi ändrar benämningarna mellan MIUI och HyperOS, men vägen via kernelversionen fungerar ofta även när koden i telefonappen är blockerad.

## Tester på Google Pixel

Pixel-telefoner har inte samma typ av offentlig, separat fingeravtrycksmeny som Samsung och Xiaomi.

För reparationsdiagnostik dokumenterar Google koden `*#*#7287#*#*` till appen Pixel Repair Diagnostics. Den kan hjälpa till att kontrollera enhetens hårdvara före eller efter en reparation. Google hänvisar också till verktyget Uppdatering och ominstallation av Google Pixel för uppdatering av operativsystemet och justering av fingeravtryckssensorn under skärmen, UDFPS.

Vid normal användning är det praktiska Pixel-testet fortfarande enkelt: radera alla fingeravtryck, starta om telefonen, registrera ett finger på nytt och prova upprepade upplåsningar. Om fingeravtrycksalternativet har försvunnit helt från Inställningar eller om registreringen aldrig startar är det allvarligare än några misslyckade upplåsningar.

Android 17 är värt att nämna eftersom versionen först blev tillgänglig för Pixel-enheter som stöds. Om ett fingeravtrycksproblem börjar direkt efter en större uppdatering till Android 17 bör du kontrollera efterföljande korrigeringar och aktuella supportmeddelanden för Pixel innan du betalar för en reparation.

## Andra Android-telefoner

OnePlus, Motorola, Realme, Oppo och Android-telefoner av Nokia-typ varierar för mycket för att en enda fingeravtryckskod ska fungera på alla.

Börja med tillverkarens support- eller diagnostikapp om telefonen har en sådan. Många Motorola-modeller har till exempel Device Help med hårdvarutester. Telefoner från OnePlus och Oppo-familjen kan ge åtkomst via `*#899#` eller äldre teknikerlägen, men stödet är ojämnt.

En app från tredje part kan ändå svara på en grundläggande fråga: ser Android över huvud taget någon fingeravtryckssensor? Appar som Sensor Test, DevCheck och Phone Doctor Plus kan visa om systemets stöd för fingeravtryckshårdvara finns. De kan vanligtvis inte utföra en säker matchning av fingeravtryck, eftersom Android avsiktligt skyddar biometriska data, men de kan hjälpa dig skilja mellan saknad hårdvara och dålig igenkänning.

## Så tolkar du resultatet

Om fingeravtrycksinställningarna har försvunnit, sensorn inte identifieras eller diagnostiken rapporterar ett hårdvarufel är problemet sannolikt fysiskt. Vanliga orsaker är en skadad flexkabel, en sprucken sensor, vätskeskada eller ett skärmbyte där sensorn under skärmen inte har parats eller riktats in korrekt.

När hårdvaran identifieras men matchningen fungerar dåligt ska du inte direkt anta att delen är trasig. Det här är den kategori som ofta går att åtgärda.

Radera alla fingeravtryck och registrera dem på nytt. Börja med ett finger. Täck mitten, kanterna och fingertoppen under registreringen så att telefonen får en användbar karta i stället för samma begränsade avtryck tio gånger.

Registrera samma finger två gånger om telefonen tillåter det. Det är ingen elegant lösning, men fungerar förvånansvärt ofta. Använd lite olika vinklar och tryck vid den andra registreringen.

Ta bort skärmskyddet under testet. Det är den enskilt vanligaste orsaken till problem med sensorer under skärmen. Ett skydd som inte är tillverkat för exakt rätt telefonmodell kan sprida ljuset för en optisk sensor eller störa en ultraljudsavläsning. Om igenkänningen fungerar utan skyddet var skyddet problemet.

Rengör sensorn och fingret. Hudfett, damm, rester av hudlotion, svett och sprucken hud minskar antalet användbara åsar i avtrycket. Om händerna är mycket torra kan du använda en liten mängd handkräm och låta den absorberas före testet. Våta fingrar fungerar lika dåligt.

Installera väntande systemuppdateringar. Drivrutinerna för fingeravtryck finns i firmware, och biometriska fel förekommer i lanserade versioner. Stora Android-uppgraderingar, däribland Android 17 på Pixel och senare tillverkarversioner på andra märken, kan ändra sensorbeteendet eftersom leverantörens firmware ligger mellan Android och sensorn.

## När en reparation är rimlig

Prova en fabriksåterställning först när du har säkerhetskopierat telefonen och uttömt de normala lösningarna. En återställning kan rensa skadade biometriska data och kalibreringstillstånd, men det är ett grovt verktyg.

Om sensorn fortfarande inte fungerar efter en återställning, eller om diagnostiken säger att hårdvaran inte identifieras, bör du begära en prisuppgift för reparationen. Fingeravtryckssensorer på baksidan eller sidan är ofta separata delar och kan vara relativt billiga att byta. Sensorer under skärmen är en annan sak. Om läsaren är integrerad i skärmenheten eller måste kalibreras efter ett skärmbyte kan reparationen bli så dyr att det börjar vara rimligt att byta telefon.

Det är ett irriterande svar, men bättre än att lägga pengar på fel reservdel.
