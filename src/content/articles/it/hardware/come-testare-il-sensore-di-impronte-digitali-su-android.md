---
title: "Come testare il sensore di impronte digitali su Android"
description: "Come verificare se il sensore di impronte digitali di uno smartphone Android funziona, usando diagnostica integrata, codici del tastierino, strumenti Pixel, Samsung Members, Xiaomi CIT e semplici prove pratiche."
listSummary: "Come verificare se il sensore di impronte digitali di uno smartphone Android funziona."
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnostica","sensori","android","hardware","guida"]
locale: "it"
draft: false
---
Il sensore di impronte digitali è guasto o è solo infastidito dalla pellicola protettiva? Sembra una battuta, ma è la prima cosa da verificare.

Spesso i problemi con le impronte hanno cause banali. Pelle secca, umidità, una pellicola economica in vetro temperato, una registrazione fatta male o un aggiornamento software rimasto a metà possono far sembrare morto un sensore perfettamente funzionante. Anche i guasti hardware esistono, soprattutto dopo una caduta o la sostituzione dello schermo, ma non partire da quella conclusione.

## Controllo rapido: sblocca il telefono dieci volte

Registra un'impronta, pulisci la zona del sensore, asciuga il dito e prova a sbloccare il telefono dieci volte di seguito.

Con un sensore capacitivo posteriore o laterale, 8 o 9 sblocchi riusciti su 10 indicano in genere che l'hardware funziona. Se fallisce una o due volte, la causa più probabile è la posizione del dito, lo sporco, lo stato della pelle o il software.

Con un sensore sotto lo schermo, cura di più la preparazione e giudica il risultato con un po' più di tolleranza. I sensori ottici e a ultrasuoni dipendono dalla superficie del display, quindi una pellicola può peggiorare molto la precisione. Se un telefono pulito e senza pellicola fallisce più di 3 volte su 10, continua con gli altri test.

## Test sui Samsung Galaxy

Su molti Samsung Galaxy, apri l'app Telefono preinstallata e digita `*#0*#`. Nel menu di diagnostica cerca Fingerprint Scanner o una voce relativa alle impronte nella sezione Sensors. Il menu può indicare se l'hardware rileva il dito e se il riconoscimento funziona.

Samsung Members è il percorso ufficialmente supportato. Apri Samsung Members, tocca Supporto, quindi Vedi test o Diagnostica dello smartphone, e avvia il test delle impronte se è disponibile per il tuo modello. Le indicazioni Samsung citano anche cause comuni come pellicole non certificate, sensori sporchi, vetro graffiato, pelle secca e cover che ostacolano il sensore.

C'è un dettaglio recente che è facile non notare: su alcuni Galaxy con Android 16 e One UI 8 o versioni successive, Samsung usa una registrazione dell'impronta basata sullo scorrimento. Segui il movimento mostrato sullo schermo invece di dare per scontato che tutti i Galaxy richiedano ancora tocchi ripetuti e statici.

## Test su Xiaomi, Redmi e POCO

Su Xiaomi, Redmi e POCO, apri il tastierino e inserisci `*#*#6484#*#*`. Se la modalità CIT non si apre, prova `*#*#64663#*#*`.

In CIT cerca Fingerprint sensor check, Fingerprint input test o una voce simile. Le pagine di supporto Xiaomi consigliano espressamente il rilevamento hardware CIT quando l'opzione per le impronte non compare, quindi non è soltanto un trucco trovato nei forum.

Puoi anche provare il percorso Settings > About phone > Detailed info and specs oppure All specs, quindi toccare più volte Kernel version. Xiaomi cambia le etichette tra MIUI e HyperOS, ma il percorso tramite la versione del kernel spesso continua a funzionare quando il codice del tastierino è bloccato.

## Test sui Google Pixel

I Pixel non offrono un menu pubblico del tastierino dedicato solo alle impronte, come quello disponibile sui dispositivi Samsung e Xiaomi.

Per la diagnostica legata alle riparazioni, Google documenta il codice `*#*#7287#*#*` per Pixel Repair Diagnostics App sui Pixel supportati. Può aiutare a controllare l'hardware prima o dopo una riparazione. Google rimanda anche allo strumento Pixel Update and Software Repair per aggiornare il sistema operativo e regolare l'Under-Display Fingerprint Sensor, o UDFPS.

Nell'uso normale, il test più pratico su Pixel resta semplice: elimina tutte le impronte, riavvia il telefono, registra di nuovo un solo dito e prova più sblocchi consecutivi. Se l'opzione per le impronte è completamente assente dalle Impostazioni o la registrazione non parte affatto, il problema è più serio di qualche riconoscimento fallito.

Android 17 merita una nota perché è arrivato prima sui Pixel supportati. Se il problema con le impronte inizia subito dopo un aggiornamento importante ad Android 17, controlla la presenza di patch successive e le note dell'assistenza Pixel prima di pagare una riparazione.

## Altri smartphone Android

OnePlus, Motorola, Realme, Oppo e i telefoni Android Nokia variano troppo per avere un unico codice universale per le impronte.

Inizia dall'app di assistenza o diagnostica del produttore, se il telefono ne include una. Molti Motorola, per esempio, hanno Device Help con test hardware. I telefoni OnePlus e della famiglia Oppo possono esporre `*#899#` o menu di ingegneria più vecchi, ma la compatibilità è incostante.

Un'app di terze parti può comunque rispondere a una domanda di base: Android rileva almeno la presenza di un sensore di impronte? App come Sensor Test, DevCheck e Phone Doctor Plus possono mostrare se è presente il livello di astrazione hardware per le impronte. Di solito non possono verificare in modo sicuro la corrispondenza biometrica, perché Android tutela intenzionalmente questi dati, ma aiutano a distinguere tra "hardware assente" e "riconoscimento scarso".

## Come interpretare il risultato

Se il telefono non mostra più le impostazioni delle impronte, il sensore non viene rilevato o la diagnostica segnala un guasto hardware, il problema è probabilmente fisico. Tra le cause comuni ci sono un cavo flex danneggiato, un sensore incrinato, il contatto con liquidi o una sostituzione dello schermo che non ha abbinato o allineato correttamente il sensore sotto il display.

Quando l'hardware viene rilevato ma il riconoscimento è scarso, non dare per scontato che il componente sia guasto. In questo caso, spesso il problema si può risolvere.

Elimina tutte le impronte e registrale di nuovo. Inizia con un solo dito. Durante la registrazione, appoggia il centro, i bordi e la punta del dito, così il telefono crea una mappa utile invece di acquisire dieci volte la stessa porzione.

Registra due volte lo stesso dito, se il telefono lo consente. Non è una soluzione elegante, ma sorprendentemente spesso funziona. Per la seconda registrazione usa angolazioni e pressioni leggermente diverse.

Rimuovi la pellicola per il test. È la causa più frequente dei problemi con i sensori sotto lo schermo. Una protezione non progettata per quel modello preciso può disperdere la luce dei sensori ottici o interferire con la lettura a ultrasuoni. Se il riconoscimento torna a funzionare senza pellicola, hai trovato il problema.

Pulisci il sensore e il dito. Grasso della pelle, polvere, residui di crema, sudore e pelle screpolata riducono i punti delle creste digitali che il sensore riesce a usare. Se hai le mani molto secche, applica una piccola quantità di crema e lasciala assorbire prima del test. Anche le dita bagnate creano problemi.

Installa gli aggiornamenti di sistema in sospeso. I driver del sensore fanno parte del firmware e gli errori biometrici possono arrivare con gli aggiornamenti. Le versioni principali di Android, compreso Android 17 sui Pixel e le successive versioni OEM sugli altri marchi, possono cambiare il comportamento del sensore perché il firmware del produttore si trova tra Android e l'hardware.

## Quando conviene ripararlo

Prova il ripristino dei dati di fabbrica soltanto dopo aver creato un backup e aver esaurito le soluzioni normali. Può eliminare dati biometrici corrotti e problemi di calibrazione, ma è una misura drastica.

Se il sensore continua a non funzionare dopo il ripristino o la diagnostica indica che l'hardware non viene rilevato, chiedi un preventivo. I sensori posteriori e laterali sono spesso componenti separati e la sostituzione può avere un costo ragionevole. Quelli sotto lo schermo sono diversi. Se il lettore è integrato nel gruppo display o deve essere calibrato dopo la sostituzione dello schermo, la riparazione può costare abbastanza da rendere più sensata la sostituzione del telefono.

È una risposta fastidiosa, ma è meglio che spendere soldi per il componente sbagliato.
