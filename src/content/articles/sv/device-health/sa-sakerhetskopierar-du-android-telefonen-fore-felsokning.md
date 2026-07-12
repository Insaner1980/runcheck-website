---
title: "Så säkerhetskopierar du Android-telefonen före felsökning"
description: "Säkerhetskopiera telefonen innan du rensar en apps data, återställer appinställningar, använder återställningsläget eller gör en fabriksåterställning. Vissa åtgärder är ofarliga. Andra är ofarliga bara tills en lokal fil, en chatthistorik eller en 2FA-kod försvinner."
listSummary: "prestanda, hastighet och android"
hub: "device-health"
sourceNumber: 9
order: 5
tags: ["prestanda","hastighet","android","optimering","felsökning"]
locale: "sv"
draft: false
---
En bra säkerhetskopia behöver inte vara avancerad. Du behöver bara veta vad Android redan sparar, vad systemet hoppar över och vilka appar som kräver en egen säkerhetskopia innan du gör något destruktivt.

## Det här säkerhetskopierar Google automatiskt

När Android-telefonen är inloggad på Google synkroniseras viss information redan utanför enheten. Kontakter som sparats i Google Kontakter, händelser i Google Kalender, Gmail och många inställningar i Google-appar återkommer efter en fabriksåterställning när du loggar in igen. Google Foto sparar också bilder och videor när säkerhetskopiering är aktiverad i appen.

Androids inbyggda Google-säkerhetskopiering omfattar mer än många tror, men mindre än de förutsätter. Den kan spara appar och vissa appdata, samtalshistorik, kontakter, enhetsinställningar samt SMS- och MMS-meddelanden. Med Google Messages kan även RCS-meddelanden ingå. Med Telefon från Google kan samtalsinställningar och blockerade nummer också följa med.

Det besvärliga är appdata. Android låter appar använda systemet för säkerhetskopiering, men utvecklaren kan begränsa vad som sparas eller välja bort funktionen helt. Bankappar, appar för tvåfaktorsautentisering och vissa spel återställs ofta inte som du förväntar dig. Det betyder inte att säkerhetskopian är trasig. Det är så Androids regler för säkerhetskopiering fungerar.

Filer är den större fällan. Nedladdningar, PDF-filer, inspelningar, dokument, musik och filer som sparats i olika appmappar är inget du bör lita blint på att Androids enhetssäkerhetskopiering tar hand om. I Google Play-tjänster v26.06, som började distribueras i februari 2026, lade Google till en lokal filsäkerhetskopiering som kan spara nedladdade dokument i Google Drive på telefoner som stöds. Se den som ett extra skydd för nedladdade dokument, inte som en fullständig kopia av den interna lagringen.

## Android 17 ändrade tidpunkten, inte checklistan

Android 17 började distribueras den 16 juni 2026, först till de flesta Pixel-telefoner som stöds. Andra kompatibla Android-telefoner följer senare under 2026, beroende på tillverkare och operatör.

Det spelar roll eftersom två telefoner bredvid varandra kan visa olika Android-versioner under en längre tid. En Pixel kan redan ha Android 17 medan en Samsung-, OnePlus-, Motorola- eller Xiaomi-telefon fortfarande väntar. Checklistan är densamma, men sökvägar och formuleringar i Inställningar kan skilja sig något.

På många telefoner börjar du med **Inställningar > Google > Alla tjänster > Säkerhetskopiering**. På Pixel kan du även se **Inställningar > Google > Säkerhetskopiering**. På Samsung Galaxy börjar du vanligtvis under **Inställningar > Konton och säkerhetskopiering > Säkerhetskopiera data**.

## Kontrollera säkerhetskopian innan felsökningen

Öppna sidan för säkerhetskopiering och kontrollera två saker: att funktionen är aktiverad och när den senaste lyckade säkerhetskopieringen gjordes. Om tidsstämpeln är gammal väljer du **Säkerhetskopiera nu** och låter processen bli klar innan du fortsätter.

Stressa inte igenom det här steget. Googles säkerhetskopiering och återställning kan ta upp till 24 timmar att slutföra, även om mindre säkerhetskopior ofta går betydligt snabbare. Om du tänker fabriksåterställa telefonen ska du vänta tills sidan visar en nyligen genomförd säkerhetskopiering i stället för att anta att den blev klar i bakgrunden.

Om telefonen fastnar på "Väntar på säkerhetskopiering" börjar du med grunderna. Anslut till wifi, ladda telefonen, uppdatera Google Play-tjänster och Google One om du uppmanas till det och kontrollera att lagringsutrymmet på Google-kontot inte är fullt. Det kostnadsfria lagringsutrymmet för Google-kontot delas mellan Gmail, Drive och Foto, så det kan ta slut snabbare än man tror.

## Kopiera lokala filer själv

För lokala filer är en manuell kopia fortfarande den säkraste reservplanen.

Anslut telefonen till en dator med en USB-C-kabel. När USB-aviseringen visas trycker du på den och väljer filöverföring. Telefonens interna lagring ska därefter visas på datorn.

Kopiera följande mappar om de finns:

- DCIM, för bilder och videor från kameran.
- Download, för PDF-filer, biljetter, installationsfiler, blanketter och annat som sparats från webbläsaren.
- Documents, för filer från produktivitetsappar.
- Music och Recordings, om telefonen används för lokalt ljud.
- Pictures och Movies, särskilt om appar sparar medier utanför DCIM.
- WhatsApp-mappar med medier, om de finns. I nyare Android-versioner kan de ligga under Android/media/com.whatsapp/WhatsApp/Media i stället för direkt i den interna lagringen.

Även om säkerhetskopiering i Google Foto är aktiverad bör du behålla en lokal kopia av DCIM före en fabriksåterställning. Jag tycker inte om att förlita mig på en enda molninställning för bilder som inte går att ersätta. Det räcker med fel konto, fullt lagringsutrymme eller en mapp som aldrig valdes för säkerhetskopiering för att förstöra dagen.

Samsung-användare har ytterligare ett bra alternativ: Samsung Smart Switch. Installera Smart Switch på en Windows-dator eller Mac, anslut Galaxy-telefonen med USB, välj säkerhetskopiering och granska kategorierna innan du startar. Smart Switch kan spara exempelvis samtal, kontakter, meddelanden och appar, men Samsung varnar fortfarande för att alla filtyper och objekt inte stöds. Använd det som ett brett skyddsnät, inte som den enda kopian av de viktigaste filerna.

## Säkerhetskopiera meddelandeappar separat

Meddelandeappar har egna regler. Räkna inte med att Android hanterar dem alla.

WhatsApp använder ett eget flöde. Öppna WhatsApps inställningar, välj **Chattar** och sedan säkerhetskopiering av chattar. Kontrollera Google-kontot, säkerhetskopieringsfrekvensen och tidpunkten för den senaste kopian. När du byter till en ny Android-telefon eller återställer efter att ha raderat enheten kan WhatsApp-chattarna bara hämtas tillbaka om säkerhetskopieringen var aktiverad före återställningen.

Telegram lagrar vanliga molnchattar på sina servrar och de återkommer när du loggar in. Hemliga chattar fungerar annorlunda. De är knutna till enheten, ingår inte i Telegrams moln och flyttas inte till en annan telefon.

Signal har numera mer än ett alternativ. Signal Secure Backups är valfria, end-to-end-krypterade och använder en återställningsnyckel. På Android finns också lokala, krypterade säkerhetskopior som sparas på enheten. För det lokala alternativet måste hela mappen med Signal-säkerhetskopian kopieras till en säker plats och återställningsnyckeln sparas separat. Utan båda delarna är kopian värdelös.

## Skydda autentiseringsappar och 2FA

Det här steget hoppar många över. Det är också steget som kan låsa dig ute från de konton som betyder mest.

Google Authenticator kan synkronisera koder med det Google-konto som är aktivt i appen. Öppna Google Authenticator och kontrollera kontoikonen högst upp. Om appen används utan ett inloggat Google-konto måste koderna flyttas manuellt före återställningen: öppna menyn, välj **Överför konton** och sedan **Exportera konton**, och skanna QR-koderna med en annan enhet.

Microsoft Authenticator stöder molnsäkerhetskopiering, men en säkerhetskopia från Android kan bara återställas till Android och en kopia från iOS bara till iOS. Öppna inställningarna i appen, aktivera molnsäkerhetskopiering och kontrollera vilket personligt Microsoft-konto som används för återställningen. Arbets- och skolkonton kan fortfarande kräva ny inloggning efter återställningen.

Authy stöder krypterad molnsäkerhetskopiering och synkronisering mellan mobila enheter. Kontrollera att säkerhetskopiering är aktiverad och att du kan lösenordet till kopiorna. Authy kan inte återställa det lösenordet åt dig.

Spara också återställningskoderna för alla tjänster som skyddas med 2FA. Lägg dem i en lösenordshanterare eller skriv ut dem och förvara dem privat. Skärmbilder är bättre än ingenting, men då hamnar material för kontoåterställning i bildbiblioteket, vilket kanske inte är rätt plats.

## När behövs en fullständig säkerhetskopia?

Att rensa en apps cache tar bort tillfälliga filer. Det ska inte radera kontot, dokument, bilder eller sparade appdata. För just den åtgärden behövs normalt ingen fullständig säkerhetskopia.

Att rensa en apps data är något annat. Appen återställs som om den precis hade installerats. Lokala anteckningar, nedladdningar, inloggade sessioner, offlinekartor, spelresultat och appspecifika inställningar kan försvinna. Säkerhetskopiera den appen först.

Felsäkert läge inaktiverar tredjepartsappar medan Android körs i läget. Appar raderas inte. Starta om normalt så ska de komma tillbaka. En säkerhetskopia är valfri här, om inte felsäkert läge används som en del av en större rensning.

Att rensa cachepartitionen på telefoner som fortfarande erbjuder funktionen tar bort tillfälliga systemfiler från återställningsläget. Personliga data ska finnas kvar, men du arbetar redan i en systemmeny på låg nivå. Säkerhetskopiera först om enheten är tillräckligt stabil.

En fabriksåterställning raderar telefonen. Inga undantag. På Samsung Galaxy är sökvägen vanligtvis **Inställningar > Allmän hantering > Återställ > Återställning till fabriksdata**. På Pixel och många telefoner med standardnära Android använder du **Inställningar > System > Återställningsalternativ > Rensa alla data (återställ standardinställningar)**. Börja inte förrän Googles enhetssäkerhetskopiering, säkerhetskopieringen av bilder, den lokala filkopian, meddelandeapparna och 2FA-apparna har kontrollerats.

## Kontrollera FRP innan du återställer

Factory Reset Protection (FRP) är Androids stöldskydd. Efter en återställning kan Android kräva skärmlåset eller uppgifterna till ett Google-konto som redan var synkroniserat med telefonen. Om du inte kan ange dem kan konfigurationen fastna tills ägarskapet har verifierats.

Innan felsökningen går så långt som till en fabriksåterställning ska du kontrollera e-postadressen till Google-kontot på telefonen och testa lösenordet i en webbläsare eller på en annan enhet. Kontrollera också telefonens pinkod, grafiska lösenord eller vanliga lösenord.

Ta inte bort Google-kontot bara för att undvika FRP när du återställer din egen telefon i felsökningssyfte. Om kontot tas bort kan även säkerhetskopian du tänkte återställa från försvinna. Att sälja eller ge bort enheten är en annan uppgift. Vid felsökning är målet enkelt: bekräfta inloggningsuppgifterna, slutför säkerhetskopieringen och återställ först när de mindre riskfyllda åtgärderna inte har hjälpt.
