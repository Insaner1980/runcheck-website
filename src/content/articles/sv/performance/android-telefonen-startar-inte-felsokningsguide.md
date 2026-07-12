---
title: "Android-telefonen startar inte: felsökningsguide"
description: "Startar inte Android-telefonen, eller har den fastnat på en svart skärm? Börja med de säkraste kontrollerna, från laddning och tvingad omstart till Recovery Mode och reparation."
listSummary: "Startar inte Android-telefonen, eller har den fastnat på en svart skärm?"
hub: "performance"
sourceNumber: 75
order: 12
tags: ["runcheck","seo","android","artikel","guide"]
locale: "sv"
draft: false
---
---

Någon ansluter laddaren, ser ingenting, trycker fem gånger på strömknappen och antar att telefonen är död. Ibland är den det. Oftare är batteriet helt urladdat, programvaran har frusit medan skärmen är släckt eller skärmen har gått sönder trots att telefonen fortfarande är igång.

Ordningen spelar roll. Börja med kontroller som innebär låg risk. Gå inte direkt till verktyg för fabriksåterställning om Android inte tydligt börjar starta och du har slut på andra alternativ.

## Ladda som om batteriet verkligen är helt tomt

Använd en väggladdare, inte en USB-port på en bärbar dator och inte en trådlös laddare. Trådlös laddning är bekväm när allt fungerar, men den tillför osäkerhet kring placering och värme som du inte behöver under felsökningen.

Anslut telefonen med en kabel och adapter som du vet fungerar. Låt den sedan vara i minst 15 minuter. En telefon med djupt urladdat batteri kanske inte visar någon batterisymbol direkt. Det är normalt.

Efter 15 minuter letar du efter minsta livstecken. En batterisymbol, vibration, laddningssignal eller liten lysdiod betyder att telefonen får ström. Låt den ladda till minst 10 % innan du försöker starta den.

Om ingenting visas byter du en sak i taget: kabel, laddare, vägguttag. Lys in i USB-C-porten med en ficklampa. Fickludd kan pressas så hårt in i porten att kabeln känns ansluten utan att få ordentlig kontakt. Använd en tandpetare av trä eller ett plastverktyg om du rengör porten. Använd inte metall.

## Gör en tvingad omstart på rätt sätt

En svart skärm betyder inte alltid att Android är avstängt. Systemet kan ha frusit medan skärmen är släckt.

Använd metoden för tvingad omstart som gäller för märket:

- På Pixel håller du strömknappen intryckt i upp till 60 sekunder. Släpp när Google-logotypen visas.
- På Samsung Galaxy håller du sidoknappen eller strömknappen och volym ned intryckta tills telefonen stängs av och startar om. Det tar vanligtvis mer än 7 sekunder.
- På Xiaomi, Redmi och POCO håller du strömknappen intryckt i mer än 10 sekunder.
- På andra Android-telefoner kan du prova strömknappen och volym ned tillsammans i 10-20 sekunder. Om det inte hjälper håller du strömknappen ensam intryckt längre.

Vibrationer, aviseringsljud eller att telefonen ringer när någon annan ringer upp tyder på skärmen snarare än hela enheten. Det är en användbar ledtråd. En skärmreparation är besvärlig, men det är ett annat problem än ett dött moderkort.

## Kontrollera om det bara är skärmen som är död

Ring telefonen. Använd Find Hub från en annan enhet om tjänsten är aktiverad. Anslut telefonen till en laddare och lyssna efter ljud eller känn efter vibrationer. Koppla den till en dator och se om Windows eller macOS reagerar på anslutningen.

Om datorn känner av telefonen ska du inte utgå från att dina data redan går att rädda. De flesta moderna Android-telefoner visar inte filer via USB förrän skärmen har låsts upp och filöverföring har godkänts. Men att datorn upptäcker enheten betyder åtminstone att delar av hårdvaran fortfarande fungerar.

En sprucken skärm med svarta fläckar, linjer eller svag bakgrundsbelysning tyder på skärmskada. Nylig kontakt med vätska är allvarligare. Även kortvarig vätskeexponering kan senare orsaka korrosion i kontakter eller kortslutning i strömkretsar.

Ett svullet batteri är situationen där du ska sluta. Om baksidan buktar, skärmen har börjat lyfta eller telefonen inte ligger plant ska du inte ladda den och inte försöka trycka ihop den. Ta den till en reparationsverkstad.

## Om telefonen når logotypen men inte startar

Om Samsung-, Pixel-, Xiaomi- eller Android-logotypen visas är enheten inte helt död. Felet uppstår under starten.

Prova Säkert läge om uppstarten kommer tillräckligt långt. På många enheter kan du hålla volym ned intryckt under starten för att starta med hämtade appar avstängda. Om Säkert läge fungerar avinstallerar du de senaste apparna och startar sedan om normalt.

En loop eller låsning före låsskärmen kräver Recovery Mode. Pixel startar vanligtvis genom att du håller strömknappen och volym ned intryckta för att öppna bootloader-menyn och därefter väljer Recovery Mode. På Samsung används ofta volym upp och strömknappen när enheten är avstängd, och nyare modeller kan behöva en ansluten USB-kabel. Xiaomi använder ofta volym upp och strömknappen.

Välj först **Reboot system now** i Recovery Mode. Om telefonen erbjuder **Wipe cache partition** kan du prova det därefter eftersom personliga data inte raderas. Pixel visar normalt inte alternativet, så hoppa över det där. **Wipe data/factory reset** är det sista lokala steget eftersom hela telefonen raderas.

Android 17 har nu släppts till de flesta Pixel-modeller som stöds, och andra kompatibla enheter följer senare under 2026. Om startproblemet började direkt efter den uppgraderingen eller en annan större systemuppdatering bör du kontrollera tillverkarens supportsida efter reparationsverktyg eller information om uppdateringen innan du raderar data.

## Använd datorbaserade reparationsverktyg försiktigt

Datorverktyg kan installera om Android, men de är inga magiska räddare av filer.

Googles Pixel Update and Software Repair är den säkraste utgångspunkten på Pixel-modeller och i regioner där verktyget stöds, förutsatt att telefonen kan anslutas via USB. Android Flash Tool kan installera fabriksavbilder på Pixel-enheter som stöds via WebUSB i en kompatibel webbläsare, men telefonen måste vara i rätt läge och processen kan kräva upplåsning eller radering.

Samsung Smart Switch har en funktion för nödåterställning av programvara vid vissa misslyckade uppdateringar. Xiaomis MiFlash kan installera om firmware på enheter som stöds, men kräver ofta åtkomst till bootloader eller fastboot och rätt ROM för den exakta modellen.

Här blir guider farliga. Fel systemversion kan göra återställningen svårare. Om du inte redan känner till modellnummer, region och bootloader-status, eller vet om det finns en aktuell säkerhetskopia, är en reparationsverkstad det säkrare valet.

## När det troligen är hårdvaran

Ingen laddningssymbol, ingen vibration, ingen USB-detektering och ingen reaktion på en tvingad omstart efter flera laddare tyder på ett hårdvarufel.

Vanliga fel är ett dött batteri, en skadad USB-C-port, ett trasigt strömhanteringschip, skärmfel, vätskeskada eller moderkortsfel. Batteri- och portreparationer hör vanligtvis till de billigare åtgärderna. Fel på kretskortsnivå gör inte det.

Om telefonen omfattas av garanti eller försäkring ska du använda den vägen först. En oberoende verkstad kan vara ett bra alternativ, men garantigivaren kan avslå senare krav om telefonen har öppnats någon annanstans.

## Rädda dina data

Utan säkerhetskopia minskar alternativen snabbt när telefonen inte kan starta. Recovery Mode låter inte en vanlig telefon utan root-åtkomst visa dina filer. Filöverföring via USB kräver vanligtvis att telefonen är upplåst. En trasig skärm kan ibland kringgås med USB-C-videoutgång, en hubb, tangentbord och mus, men bara på modeller som stöder bildutgång och fortfarande startar.

Professionell dataåterställning finns, men är dyr och ger inga garantier. Modern Android-kryptering innebär också att själva lagringschipet vanligtvis inte räcker. Telefonen måste repareras tillräckligt för att kunna låsas upp.

Det är den del ingen tycker om att höra. Säkerhetskopior är tråkiga tills den dag de inte är det.
