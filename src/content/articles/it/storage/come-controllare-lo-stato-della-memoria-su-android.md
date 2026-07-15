---
title: "Come controllare lo stato della memoria su Android"
description: "La memoria di un telefono Android può usurarsi, ma la maggior parte dei dispositivi non mostra una semplice percentuale sul suo stato. Ecco cosa puoi controllare, cosa significano i dati e quando preoccuparti."
listSummary: "La memoria di un telefono Android può usurarsi."
hub: "storage"
sourceNumber: 80
order: 2
tags: ["memoria","android","pulizia","ottimizzazione","guida"]
locale: "it"
draft: false
---
---

Come fai a sapere se la memoria del tuo telefono Android è in buone condizioni e non soltanto libera? Purtroppo, la maggior parte dei dispositivi continua a non renderlo semplice.

Lo stato della memoria e lo spazio disponibile sono due problemi diversi. Un telefono può avere 80 GB liberi e un chip NAND indebolito. Un dispositivo quasi pieno può sembrare lento anche se l'hardware di archiviazione funziona bene. Le due situazioni vengono confuse di continuo, quindi separale fin dall'inizio.

## Cosa usura la memoria del telefono

I telefoni Android usano memoria flash NAND. I modelli economici hanno spesso usato eMMC, mentre quelli di fascia media e alta usano in genere UFS. Entrambe si usurano attraverso i cicli di programmazione e cancellazione. Ogni volta che i dati vengono scritti, cancellati e riscritti, le celle accumulano una piccola quantità di usura.

Il controller distribuisce le scritture sul chip tramite il wear leveling, perciò l'uso normale di un telefono raramente distrugge la memoria in poco tempo. Foto, messaggi, aggiornamenti delle app e navigazione web non equivalgono a registrare senza sosta il flusso di una telecamera di sicurezza.

Registrare molti video, installare continuamente giochi, ripetere i ripristini dei dati di fabbrica e mantenere il telefono quasi pieno sottopone la memoria a uno stress maggiore. L'ultimo caso conta perché il controller dispone di meno blocchi liberi per la pulizia e il wear leveling. Funziona. Finché non funziona più.

Per la maggior parte delle persone, la memoria interna non è il primo componente a guastarsi. Batteria, schermo, porta USB-C o fine del supporto software diventano di solito il motivo per cambiare telefono. Lo stato della memoria è più interessante nei dispositivi ricondizionati e nei telefoni economici usati intensamente.

## Il problema dei dati sullo stato della memoria in Android

Non esiste un'impostazione Android universale che dica "alla memoria resta il 92 % della vita utile", come i Pixel recenti possono mostrare lo stato della batteria sui modelli supportati.

AOSP include un meccanismo interno che può leggere una stima percentuale della vita utile della memoria e restituire `-1` quando il dato non è disponibile. Il punto è l'accesso: non si tratta di una normale API pubblica dell'SDK per le app del Play Store. Il servizio di sistema è protetto da autorizzazioni privilegiate, tra cui `READ_PRIVILEGED_PHONE_STATE`, quindi una comune app di diagnostica non può contare su quel valore.

Google documenta strumenti di diagnostica per la batteria e altri componenti sui Pixel, ma non una pagina universale che mostri una percentuale della vita residua della NAND. Samsung Members può controllare in modo generale sui telefoni Galaxy, ma non aspettarti una percentuale chiara sulla durata della memoria.

Android 17 non trasforma lo stato della memoria in un'impostazione universale per il pubblico. È stato distribuito prima sui Pixel supportati, mentre gli altri produttori lo porteranno nelle proprie versioni di Android secondo calendari diversi. Le differenze tra OEM continuano quindi a contare.

## Controlla prima il tipo di memoria

Prima del benchmark, scopri che tipo di memoria usa il telefono. Controlla la scheda tecnica del produttore oppure usa un'app di informazioni hardware come DevCheck e apri la sezione dedicata allo spazio di archiviazione.

Come regola approssimativa, molti telefoni economici degli ultimi anni usano eMMC 5.1. I modelli di fascia media migliori usano UFS 2.2 o UFS 3.1. I top di gamma recenti montano spesso UFS 4.0 o UFS 4.1. Lo standard UFS 5.0 è stato annunciato, ma non è la base dei telefoni attuali.

Il tipo conta perché una eMMC lenta e una UFS degradata possono produrre risultati simili nei benchmark per motivi diversi.

## Misura con attenzione la velocità della memoria

Usa un'app di benchmark come CPDT. Avvia il test quando il telefono è fresco, ha più del 20 % di batteria, non si sta scaldando durante la ricarica e dispone di almeno il 15-20 % di spazio libero. Poi ripetilo. Un solo risultato scarso non dimostra nulla.

Questi numeri sono soltanto punti di riferimento, non regole per promuovere o bocciare un dispositivo:

Valori indicativi di lettura e scrittura sequenziale: eMMC 5.1 può arrivare vicino a 250/100-125 MB/s, UFS 2.1 a circa 850/250, UFS 3.1 a circa 2.100/1.200 e UFS 4.0 a circa 4.200/2.800.

I telefoni reali non raggiungono sempre questi valori. Capacità, controller, temperatura, crittografia, firmware, spazio libero e app di benchmark incidono tutti sul risultato. Anche il modello da 128 GB può essere più lento di quello da 512 GB della stessa serie, perché ha meno die NAND che lavorano in parallelo.

Se il risultato è molto più basso del previsto, libera prima spazio e ripeti il test dopo un riavvio. Se resta basso e il telefono si blocca anche durante installazioni, spostamenti di file, salvataggi della fotocamera o aggiornamenti delle app, allora lo stato della memoria diventa un sospetto concreto.

## Segnali che indicano problemi alla memoria

I problemi di archiviazione hanno un comportamento diverso dalla normale lentezza di un telefono vecchio.

L'installazione e l'aggiornamento delle app possono diventare esasperatamente lenti. La fotocamera può fermarsi dopo ogni scatto mentre salva il file. Il telefono può bloccarsi quando copi, elimini o sposti dati. L'avvio può richiedere molto più tempo. I giochi di grandi dimensioni possono controllare o riparare più spesso i propri file.

I segnali più seri sono difficili da ignorare: foto corrotte, documenti che non si aprono, app che vanno in crash durante la scrittura dei file, errori come "can't write to storage" nonostante ci sia spazio libero o un telefono che a volte non riesce ad avviarsi.

Se vedi dati corrotti, crea subito un backup. Non passare un'ora a fare benchmark mentre i file importanti esistono ancora soltanto su quel telefono.

## Controlli disponibili solo con root

Sui dispositivi con root è talvolta possibile leggere dati di stato di livello più basso da sysfs. Nei dispositivi eMMC, le stime della vita utile possono apparire nei valori Extended CSD in percorsi come `/sys/class/mmc_host/mmc0/mmc0:*/life_time`. Nei dispositivi UFS, i descrittori di stato possono trovarsi in `/sys/class/scsi_device/` o in percorsi simili definiti dal produttore.

Non è un consiglio per l'uso normale. I percorsi cambiano, SELinux blocca l'accesso sui telefoni stock e i valori sono facili da interpretare male. Se hai già il root e sai cosa stai facendo, possono essere utili. Se non ce l'hai, non ottenere il root soltanto per controllare lo stato della memoria.

## Come ridurre lo stress sulla memoria

Mantieni libero il 15-20 % della memoria interna. Su un telefono da 128 GB significa circa 20 GB. Su uno da 256 GB, 40 GB sono un margine comodo, anche se non serve fissarsi sul numero esatto.

Non usare il ripristino dei dati di fabbrica come manutenzione ordinaria. Un ripristino per risolvere un telefono diventato caotico può avere senso. Farlo ogni mese è usura inutile e di solito ricrea lo stesso problema dopo che hai reinstallato tutto.

Registra video lunghi su memoria esterna solo se il telefono e l'app fotocamera lo supportano correttamente. Se usi una scheda SD, conserva lì i contenuti multimediali, non le app. Le app devono restare nella memoria interna, perché UFS è molto più veloce e affidabile della maggior parte delle schede microSD.

Se usi runcheck, osserva nel tempo la pressione sulla memoria invece di fissarti su un solo valore. La sezione dedicata allo spazio mostra l'uso della capacità e, insieme alla temperatura della batteria e agli altri indicatori di stato, aiuta a distinguere un telefono semplicemente pieno da un possibile problema hardware.
