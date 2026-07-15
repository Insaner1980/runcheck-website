---
title: "Cosa sono i wake lock e come consumano la batteria"
description: "I wake lock permettono alle app Android di mantenere attivo il processore dopo lo spegnimento dello schermo. Se usati male, possono impedire al telefono di entrare negli stati di risparmio energetico e causare un forte consumo in standby."
listSummary: "I wake lock permettono alle app Android di mantenere attivo il processore dopo lo spegnimento dello schermo."
hub: "battery"
sourceNumber: 35
order: 25
subgroup: "Consumo della batteria"
tags: ["batteria","consumo","risoluzione-dei-problemi","android","prestazioni"]
locale: "it"
draft: false
---
Stai dormendo. Lo schermo del telefono è spento. Non c'è musica in riproduzione, non stai scaricando nulla, eppure durante la notte la batteria perde il 18 %.

È il tipo di consumo che può essere causato dai wake lock. Una richiesta di wake lock mantiene attiva una parte del dispositivo quando Android normalmente la lascerebbe entrare in sospensione. Il problema più comune per la batteria è il partial wake lock, che mantiene in funzione il processore mentre lo schermo resta spento.

I wake lock non sono automaticamente negativi. Un'app musicale ne ha bisogno per continuare a riprodurre l'audio. Un'app di navigazione può averne bisogno durante un viaggio in corso. Un caricamento avviato dall'utente potrebbe dover terminare invece di interrompersi a metà. Il problema nasce quando un'app mantiene il wake lock troppo a lungo, lo richiede troppo spesso o non lo rilascia al termine del lavoro.

## Come funzionano i wake lock

Quando lo schermo si spegne, Android cerca di sospendere la CPU e lasciare che il telefono entri in stati a basso consumo. Se un'app deve continuare un'attività, può acquisire un wake lock tramite l'API PowerManager di Android. Quando il lavoro è terminato, l'app rilascia il lock e il telefono può tornare a dormire.

È in questo passaggio che le cose possono andare storte.

Un'app può avviare una sincronizzazione in background, incappare in un timeout di rete e non ripulire correttamente lo stato. Un'altra può interrogare un server ogni pochi minuti invece di usare notifiche push. Un'app per il fitness può mantenere attivi sensori ed elaborazione più a lungo del necessario. Per chi guarda il telefono, il dispositivo sembra inattivo. Al suo interno, non lo è affatto.

Dal 1° marzo 2026 il problema conta ancora di più anche per gli sviluppatori. Google Play può ridurre la visibilità delle app che superano la soglia di Android vitals per i partial wake lock eccessivi. Android vitals considera eccessivi i wake lock non esenti quando, sommati, rimangono attivi per 2 ore o più in un periodo di 24 ore. La soglia di comportamento negativo è il superamento del 5 % delle sessioni dell'app, calcolato su 28 giorni.

## Perché il consumo dei wake lock è difficile da individuare

Il consumo causato dai wake lock spesso si nasconde dietro etichette di sistema. La schermata della batteria può mostrare **Sistema Android**, servizi Google o una generica attività in background invece di indicare il wake lock preciso che ha causato il problema.

Inizia comunque dai controlli di base. Apri **Impostazioni > Batteria > Utilizzo della batteria** e verifica quali app hanno consumato energia in background. Sui Pixel recenti, seleziona un'app e apri **Consenti l'utilizzo in background**. Su Samsung, controlla **Impostazioni > Assistenza dispositivo > Batteria**, quindi esamina l'utilizzo delle app e i limiti per l'uso in background.

Se il telefono perde molta carica con lo schermo spento, ma la schermata della batteria non mostra un'app evidente, i wake lock diventano una possibilità più concreta.

Il vecchio codice del tastierino `*#*#4636#*#*` non è più una soluzione affidabile. Funziona su alcuni telefoni Android, non fa nulla su altri e spesso non offre dettagli utili sulla batteria nei dispositivi Samsung e Xiaomi più recenti. Non baserei una procedura di diagnostica su questo codice.

Per controlli più approfonditi, usa ADB. `adb shell dumpsys batterystats` può mostrare la cronologia dei wake lock e il tempo durante il quale il dispositivo è rimasto attivo, anche se l'output non è facile da leggere. Strumenti come BetterBatteryStats e GSam Battery Monitor possono aiutare, ma sui moderni dispositivi Android molte app avanzate per la batteria richiedono autorizzazioni concesse tramite ADB o una configurazione aggiuntiva. Se un'app promette miracoli immediati senza autorizzazioni e senza dati, è meglio essere scettici.

## Cause comuni dei wake lock

Google Play services viene spesso accusato perché gestisce molte funzioni: posizione, notifiche push, sincronizzazione degli account, servizi nelle vicinanze, controlli di sicurezza e altro. Un certo tempo di wake lock è normale. Un consumo fuori controllo dopo un aggiornamento di sistema, una sincronizzazione interrotta o una cache danneggiata non lo è.

Anche le app social possono essere rumorose. Aggiornano i feed, caricano dati di analisi, sincronizzano messaggi, aggiornano widget e tengono attive le pipeline delle notifiche. Un social network che apri due volte alla settimana non merita accesso illimitato in background.

Le app email sono un altro caso frequente. La posta push in genere va bene. Controllare i server ogni pochi minuti è uno spreco, soprattutto con più account configurati.

VPN, app musicali, navigazione e fitness tracker sono diversi. I loro wake lock possono essere previsti, perché sei tu ad aver chiesto all'app di continuare un'attività. La domanda giusta non è "questa app mantiene sveglio il telefono?". È "continua a farlo anche quando non sto usando attivamente la sua funzione principale?".

## Cosa puoi fare

Limita l'accesso in background per le app che non ne hanno bisogno. Su Pixel e Android stock, apri **Impostazioni > App > Mostra tutte le app > [nome app] > Utilizzo della batteria per le app** e gestisci **Consenti l'utilizzo in background**. Su Samsung, usa **App in sospensione** o **App in sospensione avanzata** nella sezione **Limiti per l'uso in background**.

Non limitare le app che devono funzionare in tempo reale in background. Messaggistica, VPN, salute, navigazione, emergenza e app fondamentali per il lavoro possono smettere di funzionare in modi poco evidenti se le blocchi troppo.

Per Google Play services, procedi con cautela. Riavvia il telefono. Controlla gli aggiornamenti di sistema Google Play e quelli delle app. Se il consumo continua, apri le informazioni di Google Play services e svuota la cache nella sezione relativa a memoria e cache. Evita di cancellare tutti i dati se non sai quali effetti avrà, perché l'operazione può azzerare lo stato locale dei servizi e causare temporaneamente nuova attività di sincronizzazione.

Se il problema è iniziato subito dopo un aggiornamento ad Android 17, aspetta uno o due giorni prima di trarre conclusioni. I Pixel hanno ricevuto Android 17 per primi e, dopo un aggiornamento importante del sistema operativo, i telefoni spesso eseguono indicizzazione, ottimizzazione delle app e pulizia dei file dell'aggiornamento. Un consumo che persiste per diversi giorni è un'altra cosa.

## Come Doze cambia la situazione

Doze aiuta a limitare i danni dei wake lock durante l'inattività profonda. Quando il dispositivo è in Doze, Android ignora i wake lock nelle fasi soggette a restrizioni e permette gran parte del lavoro soprattutto durante le finestre di manutenzione.

Doze però non fa miracoli. Le app escluse dall'ottimizzazione della batteria hanno più libertà. I servizi in primo piano possono continuare a lavorare. I sistemi di gestione della batteria dei produttori possono comportarsi in modo diverso. E se il telefono non riesce mai a entrare davvero in inattività a causa del movimento, di problemi di segnale o di ripetute attività in background, non otterrai tutti i benefici.

Per questo il consumo notturno è un indizio così utile. Se il telefono rimane fermo per sette ore e perde il 4 %, probabilmente non hai un serio problema di wake lock. Se perde il 20 % a schermo spento e senza contenuti multimediali attivi, qualcosa lo sta mantenendo sveglio o sta costringendo la radio a lavorare.

runcheck è progettato per riconoscere questo tipo di schema. Consumo a schermo spento, comportamento durante la sospensione profonda, qualità del segnale e temperatura raccontano insieme una storia molto più chiara rispetto alla sola schermata predefinita della batteria.

## Alcune domande utili

Un wake lock può tenere acceso lo schermo? I partial wake lock no. Mantengono in funzione la CPU mentre il display resta spento. Esistono vecchi tipi di wake lock legati allo schermo, ma le app Android moderne sono sottoposte a forti limitazioni in questo ambito. La maggior parte del consumo nascosto deriva dai partial wake lock della CPU.

Una certa attività dei wake lock è normale? Sì. Anche un telefono Android configurato in modo pulito registra brevi wake lock dovuti a servizi di sistema, messaggi push, cambiamenti della connettività e attività pianificate. Alcuni minuti sono normali. Ore durante l'inattività no.

Un ripristino dei dati di fabbrica risolve il problema? A volte. Può eliminare stati errati delle app, sincronizzazioni bloccate e residui problematici degli aggiornamenti. È anche una soluzione drastica. Limita prima le app sospette, aggiorna tutto, svuota la cache quando è opportuno e conferma lo schema di consumo prima di cancellare il telefono.
