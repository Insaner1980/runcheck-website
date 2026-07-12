---
title: "Varför visar telefonen ingen signal, och hur åtgärdar du det?"
description: "Metabeskrivning: Praktiska steg för att åtgärda meddelanden som Ingen signal, Ingen tjänst och Endast nödsamtal på Android-telefoner, inklusive kontroller av SIM, eSIM, operatör, APN, uppdateringar och hårdvara."
listSummary: "nätverk, anslutningar och android"
hub: "network"
sourceNumber: 102
order: 13
tags: ["nätverk","anslutningar","android","felsökning","guide"]
locale: "sv"
draft: false
---
Telefonen visar `No Signal`, `No Service` eller `Emergency Calls Only`, och plötsligt är den dyra lilla datorn i handen bara en kamera med Wi-Fi. Irriterande, men inte alltid allvarligt.

Tricket är att skilja mellan tre möjliga felkällor: telefonen, SIM-kortet eller eSIM-profilen och operatörens nät. Att gissa tar tid. Om du testar dem i rätt ordning brukar det bli tydligt var felet ligger.

## Gör de här tre sakerna först

Aktivera flygplansläget, vänta ungefär 15 sekunder och stäng sedan av det. Då avbryter telefonen sin nätregistrering och försöker ansluta på nytt.

Starta om telefonen. En omstart läser in modemet, SIM-tjänsterna och operatörskonfigurationen på nytt. Om radiodelen har fastnat räcker det ofta.

Om du använder ett fysiskt SIM-kort stänger du av telefonen, tar ut SIM-facket och kontrollerar att kortet är rent och ligger plant. Sätt sedan tillbaka det ordentligt. Ett SIM-kort som sitter en aning löst kan orsaka avbrott efter ett fall eller ett skalbyte.

Om du använder eSIM ska du inte radera eSIM-profilen som första åtgärd. Öppna `Inställningar > Nätverk och internet > SIM-kort` och kontrollera att eSIM-linjen är aktiverad. Om du raderar profilen kan ett litet problem förvandlas till ett samtal med operatörens support.

## Kontrollera om operatören har en driftstörning

Det här är det minst tillfredsställande svaret, men det händer ofta: telefonen fungerar och operatören har problem.

Fråga någon i närheten som använder samma operatör om deras telefon har täckning. Kontrollera operatörens app, supportsida eller sociala kanaler. Downdetector kan ge en fingervisning, men tjänsten bygger på användarrapporter och inte på operatörens egen diagnostik.

Om flera personer med samma operatör saknar täckning i samma område ska du sluta ändra telefonens inställningar. Vänta på operatören eller förflytta dig till en annan plats.

## Kontrollera att SIM-linjen är aktiv

Telefonen kan visa att tjänst saknas om SIM-linjen är avstängd, kontot har spärrats, saldot på ett kontantkort är slut, eSIM-profilen har flyttats till en annan enhet eller telefonen är operatörslåst till ett annat nät.

På Pixel och många telefoner med en Android-version nära standardutförandet öppnar du `Inställningar > Nätverk och internet > SIM-kort`, väljer SIM-kortet och kontrollerar att `Använd SIM-kort` och `Mobildata` är aktiverade.

På Samsung kontrollerar du `Settings > Connections > SIM manager` och `Settings > Connections > Mobile networks`.

Om telefonen visar `No SIM` kan SIM-kortet vara skadat, inaktivt eller oläsbart. Om den visar `Emergency Calls Only` kan telefonen se ett nät men inte autentisera sig normalt. Det pekar ofta mot SIM-kortet, kontot, operatörslåset eller roaming, snarare än en helt död antenn.

## Efter Android 17 eller en annan stor uppdatering

Android 17 släpptes den 16 juni 2026 och gjordes tillgängligt för de flesta Pixel-modeller som stöds. Samsung, OnePlus, Xiaomi, Motorola och andra märken följer sina egna uppdateringsplaner. Om signalproblemen började direkt efter en större uppdatering spelar tidpunkten roll.

Gör inte en fabriksåterställning direkt. Börja här:

- Starta om telefonen igen när uppdateringen är helt färdig.
- Sök efter ytterligare en systemuppdatering eller uppdatering av operatörsinställningarna.
- Slå på och av flygplansläget en gång.
- Återställ enbart mobilnätsinställningarna om Android-versionen erbjuder det alternativet.
- Om 5G är instabilt väljer du tillfälligt LTE eller 4G som önskad nätverkstyp och testar igen.

Vissa tidiga problem efter en uppdatering rättas i månatliga säkerhetsuppdateringar eller nya operatörskonfigurationer. En fabriksåterställning hör hemma nära slutet av felsökningen, inte i början.

## Kontrollera önskad nätverkstyp

Öppna SIM-inställningarna och leta efter `Önskad nätverkstyp` eller `Network mode`. Välj det automatiska alternativet som innehåller den högsta nätgeneration telefonen stöder, till exempel `5G/LTE/3G/2G` eller `5G/4G/3G/2G`.

Om telefonen är låst till en nätgeneration som inte längre finns i området kan den visa att tjänst saknas. Det händer till exempel med gamla inställningar för enbart 3G i länder där 3G-näten har stängts. Samma sak kan hända om du tidigare valde enbart LTE eller enbart 5G för ett test och glömde att byta tillbaka.

På Samsung finns inställningen vanligtvis under `Settings > Connections > Mobile networks > Network mode`.

På Xiaomi och POCO letar du under `Settings > SIM cards & mobile networks`.

Använd sökfältet i Inställningar om tillverkaren har flyttat funktionen. Det gör de gärna.

## Ställ tillbaka nätverksvalet på automatiskt

Ett manuellt operatörsval kan lämna telefonen ansluten till fel nät. Det är vanligt efter resor.

Leta efter `Automatically select network` eller `Network operators` i SIM-inställningarna och aktivera automatiskt val. Om det automatiska valet misslyckas kan du söka manuellt och välja operatören i listan.

Om du befinner dig utomlands bör du kontrollera att abonnemanget tillåter roaming innan du aktiverar dataroaming. Reglerna för röstsamtal och data kan skilja sig mellan operatörer.

## Kontrollera APN-inställningarna vid dataproblem

APN-inställningarna talar om för Android hur telefonen ska ansluta till operatörens datanät. Ett felaktigt APN orsakar oftare problem med mobildata eller mms än total avsaknad av signal, men det kan få ett nätproblem att verka värre.

På Pixel och Android nära standardutförandet öppnar du `Inställningar > Nätverk och internet > SIM-kort > Åtkomstpunktsnamn`. På Samsung finns motsvarande meny vanligtvis under `Settings > Connections > Mobile networks > Access Point Names`.

Välj `Reset to default` om APN-listan ser felaktig eller tom ut. För virtuella och mindre operatörer ska du använda värdena på operatörens egen supportsida. Kopiera inte slumpmässiga APN-inställningar från forum om du inte vill felsöka samma problem två gånger.

## Återställ nätverksinställningarna

Om SIM-kortet är aktivt och inställningarna ser normala ut kan du återställa nätverksinställningarna. Det raderar sparade Wi-Fi-nätverk, Bluetooth-parkopplingar, VPN-inställningar och mobilnätskonfiguration. Appar, foton, meddelanden och filer påverkas inte.

På Pixel och nyare Android-versioner går du till `Inställningar > System > Återställningsalternativ`. Där kan det finnas ett gemensamt alternativ som heter `Reset Wi-Fi, mobile & Bluetooth` eller separata alternativ som `Återställ mobilnätverksinställningar` och `Reset Bluetooth & Wi-Fi`.

Samsung: `Settings > General management > Reset > Reset network settings`.

Xiaomi och POCO: sök efter `reset network` i Inställningar, eftersom sökvägen varierar mellan MIUI- och HyperOS-versioner.

Starta om efter återställningen och ge telefonen en minut att registrera sig i nätet.

## Testa SIM-kortet i en annan telefon

Det här är det renaste sättet att sluta gissa.

Sätt SIM-kortet i en annan olåst telefon som stöder operatörens frekvensband. Om det fungerar där är SIM-kortet och kontot troligen i ordning, och problemet finns i den ursprungliga telefonen. Om även den andra telefonen saknar tjänst ligger felet sannolikt i SIM-kortet, kontot eller operatörens aktivering.

Testa också ett fungerande SIM-kort i din telefon om du har möjlighet. Om det får täckning är telefonens hårdvara troligen okej.

För eSIM är motsvarande test svårare eftersom en flytt kan kräva ny aktivering hos operatören. Operatörens support kan i stället kontrollera om eSIM-profilen fortfarande är aktiv och kopplad till rätt enhet.

## Kontrollera IMEI på begagnade telefoner

Om telefonen är köpt begagnad bör du kontrollera IMEI-numret. Slå `*#06#` för att visa det.

En telefon kan förlora normal nättjänst om den har spärrats efter att ha anmälts stulen eller förlorad, om en obetald avbetalning är knuten till den ursprungliga operatören eller om den är låst till en annan operatör. Använd operatörens egen kontrolltjänst när det är möjligt. Tredjepartstjänster för IMEI kan vara användbara, men operatören avgör vad som gäller i det egna nätet.

## Platsen och byggnadsmaterialen spelar roll

Signalstyrkan kan ändras snabbt. En telefon kan visa full täckning utomhus och ingen tjänst alls i en källare, hiss, lagerbyggnad med plåttak, underjordiskt garage eller betonglägenhet.

Gå närmare ett fönster eller utomhus. Om tjänsten kommer tillbaka gör telefonen sitt jobb. Det är byggnaden som blockerar signalen.

Tjocka skal kan också försämra mottagningen om de innehåller metallplattor, magneter eller olämpligt placerade tillbehör. Ta av skalet en stund om problemet började efter att du monterade ett bilfäste, plånboksfodral eller en magnetring.

Wi-Fi-samtal är den normala lösningen när mobilsignalen är svag inomhus men Wi-Fi fungerar bra.

## Signalstyrka i siffror är bättre än staplar

Staplar är grova uppskattningar. dBm ger mer information.

På många Android-telefoner öppnar du `Settings > About phone > SIM status > Signal strength`. Där kan ett värde som `-85 dBm` eller `-110 dBm` visas. Ju närmare noll värdet ligger, desto starkare är signalen.

Som grov vägledning är ungefär `-50 till -90 dBm` användbart, värden under `-100 dBm` är svaga och omkring `-120 dBm` är nära oanvändbart. Den faktiska upplevelsen beror på nätverkstyp, belastning och operatörens konfiguration, så behandla inte värdet som ett perfekt godkänt eller underkänt test.

Koden `*#*#4636#*#*` öppnar en testmeny på vissa Android-telefoner, men många operatörer och tillverkare blockerar den. Om inget händer är telefonen inte trasig.

runcheck kan visa signalstyrka och nätverksinformation över tid, vilket är mer användbart än att stirra på staplarna i tio sekunder. Signalproblem beror ofta på platsen, tiden på dygnet och om telefonen växlar mellan LTE och 5G.

## När hårdvaran sannolikt är orsaken

Hårdvarufel blir mer sannolikt när allt detta stämmer:

- SIM-kortet fungerar i en annan telefon.
- Ett fungerande SIM-kort misslyckas i din telefon.
- Nätverksinställningarna har återställts.
- Kontot är aktivt.
- Andra personer med samma operatör har täckning i närheten.
- Telefonen saknar fortfarande tjänst på flera olika platser.

Vanliga hårdvaruorsaker är en skadad antenn, en felaktig SIM-läsare, korrosion nära SIM-facket eller en RF-komponent som håller på att ge upp. Fallskador och fukt är de vanligaste misstänkta.

Leta efter bucklor nära antennlinjerna, ett SIM-fack som inte ligger plant, fuktindikatorer, korrosion eller färska stötskador. Om garantin gäller kontaktar du tillverkaren eller operatören. Annars bör du jämföra reparationskostnaden med telefonens nuvarande värde innan du godkänner arbetet.

## Bör du köpa en signalförstärkare?

Bara för en fast plats, och bara om det finns åtminstone en användbar signal utomhus. En repeater förstärker en befintlig signal. Den kan inte skapa ett operatörsnät där inget nät når fram.

I Sverige måste du ha ett skriftligt godkännande och avtal med den berörda mobiloperatören innan en repeater installeras i operatörens frekvensband. PTS varnar för att felaktiga repeatrar kan störa eller slå ut mobilnät, och användning utan operatörens skriftliga godkännande är straffbar. Köp därför inte en slumpmässig högeffektsrepeater från en marknadsplats och hoppas på det bästa.
