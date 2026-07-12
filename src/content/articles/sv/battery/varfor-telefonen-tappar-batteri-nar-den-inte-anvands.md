---
title: "Varför telefonen tappar batteri när den inte används"
description: "Telefonen är aldrig helt inaktiv om den inte är avstängd. Att skärmen är släckt betyder bara att skärmen är av. Modemet, wifi, aviseringar, alarm, kontosynkronisering, sensorer och säkerhetstjänster kan fortfarande väcka telefonen."
listSummary: "Telefonen är aldrig helt inaktiv om den inte är avstängd."
hub: "battery"
sourceNumber: 26
order: 16
subgroup: "Drain"
tags: ["batteri","batteriförbrukning","felsökning","android","prestanda"]
locale: "sv"
draft: false
---
Det är normalt. Ovanligt hög batteriförbrukning i viloläge är det inte.

## Så ser normal batteriförbrukning i viloläge ut

För en Android-telefon med ett friskt batteri, wifi och god signal är en minskning på cirka 2-6 % under en natt på åtta timmar normal. En mycket stillsam telefon kan tappa mindre. En telefon med mobildata, svag signal, många konton, en smartklocka och Always On Display kan tappa mer.

Procenttal kan också vara lite missvisande. Ett nytt batteri på 5 000 mAh och ett slitet batteri som numera rymmer betydligt mindre laddning kan förbruka lika många mAh under natten, men det slitna batteriet visar en större procentuell minskning. Därför kan normalt bakgrundsarbete plötsligt se dramatiskt ut på en äldre telefon.

Värme spelar också roll. Google varnar för att en varm telefon laddas ur snabbare även när den inte används, och sådan värme kan dessutom skada batteriet med tiden. Lägg inte telefonen under en kudde, på en het trådlös laddare eller i direkt solljus och bedöm sedan nattens batteriförbrukning utifrån det.

Min praktiska tumregel är enkel: mindre än 5 % under natten är bra, 5-10 % är värt att hålla ögonen på och återkommande tapp på mer än 10 % betyder att något bör undersökas.

## Varför Android inte går ner i fullständig vila

Android använder Doze och App Standby för att minska aktiviteten när enheten är inaktiv. I Doze skjuter Android upp jobb och synkronisering, begränsar nätverksåtkomst och ger appar korta underhållsfönster i stället för att låta varje app väcka telefonen när den vill.

Det finns undantag. Pushaviseringar med hög prioritet kan väcka en app en kort stund. Vissa förgrundstjänster är tillåtna eftersom användaren förväntar sig dem, till exempel navigering, musik eller en hälsoapp. Alarmappar måste kunna larma. En telefon som rör sig går kanske inte ner i det djupaste viloläget lika snabbt som en telefon som ligger stilla på ett bord.

Därför är batteriförbrukning i viloläge svår att reda ut. Android försöker balansera batteritid mot att telefonen fortfarande ska gå att nå.

## De vanligaste orsakerna till hög förbrukning i viloläge

Svag signal är det första du bör testa. Samsung uppger att en instabil nätverksanslutning och låg signalstyrka kan öka batteriförbrukningen. Om mottagningen är dålig i sovrummet kan telefonen ägna hela natten åt att hålla liv i en bräcklig anslutning.

Always On Display är den synliga orsaken. Funktionen kanske bara använder lite ström per timme, men den är aktiv i många timmar. På Samsung kan du ställa in den så att den bara visas när du trycker på skärmen, enligt ett schema eller vid nya aviseringar. På Pixel kan du stänga av **Visa alltid klocka och info** under **Inställningar > Visning och pekskärm > Låsskärm**.

Bakgrundsappar är den breda kategorin. Sociala appar, e-post, molnlagring, meddelandeappar, shoppingappar, väderwidgetar och träningsappar kan alla väcka telefonen. Vissa behöver göra det. Många behöver det inte.

Platsåtkomst är den tysta orsaken. Öppna **Inställningar > Plats > Appars platsbehörighet** och kontrollera **Tillåts alltid**. Om en väderapp eller social app inte behöver din plats medan du sover kan du ändra behörigheten till **Tillåt bara när appen används**.

Synkroniseringsfel är den tråkiga orsaken. Ett gammalt Google-konto, arbetskonto eller e-postkonto som inte längre kan autentiseras kan fortsätta försöka. Öppna kontoinställningarna och leta efter varningar. Menynamnet varierar mellan **Konton**, **Lösenord och konton** och liknande beroende på telefon.

Bluetooth-tillbehör är lätta att missa. Klockor och aktivitetsarmband kan hålla telefonen sysselsatt med återanslutningsförsök, hälsosynkronisering eller spegling av aviseringar. Testa en natt med Bluetooth avstängt om problemet började efter att du parkopplade ett nytt tillbehör.

## Ett rent test av förbrukningen i viloläge

Ladda telefonen till minst 80 %. Skriv upp den exakta batterinivån och tiden. Aktivera flygplansläge. Om wifi eller Bluetooth fortfarande är på, stäng av dem manuellt. Låt telefonen ligga orörd i fyra till sex timmar med skärmen avstängd.

Om den tappar mindre än 1-2 % är batteriet och grundsystemet troligen i gott skick. Den normala förbrukningen kommer då från nätverket, synkronisering, platsåtkomst, Bluetooth eller bakgrundsappar.

Om den fortfarande tappar mycket kan du starta i säkert läge och upprepa testet. Säkert läge inaktiverar nedladdade appar tillfälligt. Om problemet försvinner där är en av apparna ansvarig. Börja med appar som nyligen installerats eller uppdaterats. Det här är särskilt användbart efter en större uppdatering som Android 17 på Pixel, eftersom en ny inkompatibilitet kan se ut som systemförbrukning.

Om varken flygplansläge eller säkert läge hjälper bör du kontrollera batterihälsan. På Pixel 8a och senare visar **Inställningar > Batteri > Batterihälsa** batteriets status och kapacitet. På Samsung använder du **Samsung Members > Support > Telefondiagnostik > Batteristatus**.

## Minska förbrukningen utan att göra telefonen oanvändbar

Du behöver inte förvandla smarttelefonen till en dum väckarklocka. Var selektiv.

Lägg appar som sällan används i vila. På Samsung finns **Appar i viloläge** och **Appar i dvala** under **Inställningar > Enhetsvård > Batteri > Gränser för bakgrundsanvändning**. Appar i dvala körs bara när du öppnar dem, vilket passar bra för spel och shoppingappar.

Begränsa batterianvändningen i bakgrunden för appar som inte behöver omedelbara uppdateringar. På Pixel-liknande Android finns inställningen under **Inställningar > Appar > Batteriförbrukning för appar**. Låt meddelandeappar, alarm, kalender och säkerhetsappar vara optimerade i stället för helt begränsade, såvida du inte är säker på konsekvenserna.

Stäng av bakgrundsdata för appar som inte behöver den. På vissa telefoner finns reglaget på appens informationssida under mobildata och wifi. En bankapp eller ett spel behöver inte uppdateras medan du sover.

Rensa bland aviseringarna. Marknadsföringsaviseringar är bara batteribrus. Stäng av dem under **Inställningar > Aviseringar > Appaviseringar** eller inne i appen.

Använd Batterisparläge under natten om du inte vill finjustera varje app. Google uppger att Batterisparläge begränsar eller stänger av aktivitet i bakgrunden och kan fördröja vissa funktioner, nätverksanslutningar och appar. Det är kompromissen. Under sovtimmarna är den ofta rimlig.

Ta bort konton du inte längre använder. Google listar det som ett sätt att spara batteri, och det är en av få åtgärder som samtidigt gör telefonen mindre rörig.

## Om wifi- och Bluetooth-sökning

Android kan använda wifi, Bluetooth och sensordata för att förbättra platsangivelsens exakthet. Det är användbart för kartor och funktioner i närheten, men skapar också bakgrundsaktivitet. Från Android 12 kan exakt plats hanteras separat för varje app, vilket är ett bättre första steg än att stänga av allt globalt.

Om du fortfarande behöver vara striktare kan du leta under **Inställningar > Plats > Platstjänster** efter alternativ för platsangivelsens exakthet samt wifi- och Bluetooth-sökning. Namnen varierar mellan olika märken.

Stäng inte av funktioner du faktiskt använder bara för att en batteriartikel säger det. Om Find Hub, betrodda platser, upplåsning med klocka eller familjens platsdelning är viktiga för dig bör de vara på. Leta efter den verkliga förbrukningen någon annanstans.

## När det är dags att överväga reparation

En telefon som tappar mer än 10 % under natten med normala anslutningar behöver felsökas. En telefon som tappar mer än 10 % i flygplansläge och säkert läge är en annan sak. Då pekar det mer mot ett åldrat batteri, ett hårdvarufel eller ett problem på låg systemnivå.

Uppdatera systemet och apparna, starta om och kontrollera batteridiagnostiken innan du lämnar in telefonen. Om batteriverktyget visar **Minskad**, **Svagt** eller **Dåligt** är det ingen idé att fortsätta leta efter en magisk inställning. Batteriet berättar vad som har hänt.

Batteriförbrukning i viloläge ska vara tråkig. När den inte är det bör du isolera nätverket först, sedan apparna och sist batterihälsan.
