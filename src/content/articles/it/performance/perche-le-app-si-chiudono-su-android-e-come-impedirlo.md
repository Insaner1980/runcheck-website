---
title: "Perché le app si chiudono su Android e come impedirlo"
description: "Le app Android si chiudono per motivi precisi. Scopri come capire se il problema riguarda una sola app, WebView, poca RAM, poco spazio o un recente aggiornamento di Android."
listSummary: "Le app Android si chiudono per motivi precisi."
hub: "performance"
sourceNumber: 77
order: 14
tags: ["prestazioni","velocita","android","ottimizzazione","risoluzione-dei-problemi"]
locale: "it"
draft: false
---
---

La maggior parte dei crash delle app non è casuale. Sembra casuale perché non vedi l'errore che li ha causati.

Un'app va in crash quando incontra una condizione da cui non riesce a riprendersi. Android la chiude, a volte mostrando un messaggio come "l'app continua a interrompersi", altre volte senza fare rumore. Un'app che si chiude all'avvio ha un problema diverso da una che va in crash dopo dieci minuti. Una sola app difettosa è un caso diverso da metà delle app del telefono che si chiudono nello stesso momento.

Questo è il punto: non cercare di riparare "Android" in generale. Cerca lo schema.

## Una sola app continua a chiudersi

Inizia dalla cache dell'app. Sui Pixel e su molti telefoni con Android quasi stock, vai in **Impostazioni > App > Mostra tutte le app > [nome dell'app] > Spazio di archiviazione e cache > Svuota cache**. Sui Samsung, il percorso è in genere **Impostazioni > Applicazioni > [nome dell'app] > Memoria archiviazione > Svuota cache**.

Svuotare la cache elimina i file temporanei. Non ti disconnette e non cancella i dati dell'account. L'app continua a chiudersi? Puoi cancellare lo spazio di archiviazione o i dati, ma fermati un attimo prima di farlo. Questa operazione reimposta l'app. Per WhatsApp, Signal, app di note, mappe offline, download musicali o giochi con salvataggi locali, cancellare i dati senza un backup può eliminare contenuti importanti.

Poi aggiorna l'app. Apri Google Play, cerca l'app e installa gli aggiornamenti disponibili. Se i crash sono iniziati subito dopo un aggiornamento, controlla le recensioni recenti nel Play Store. Quando decine di persone segnalano lo stesso problema con la stessa versione, probabilmente la correzione deve arrivare dallo sviluppatore.

Se l'app continua a non funzionare, disinstallala e reinstallala. È una procedura noiosa, ma ricrea da zero il pacchetto e i file locali. Funziona più spesso di quanto si pensi.

## Molte app hanno iniziato a chiudersi insieme

Quando più app non collegate tra loro vanno in crash nello stesso giorno, sospetta un componente Android condiviso. Android System WebView è l'esempio classico.

WebView permette alle app di mostrare contenuti web al proprio interno invece di aprire il browser. App email, app per acquisti o servizi bancari, schermate di assistenza, procedure di accesso e app di notizie possono dipendere da questo componente. Nel marzo 2021, un aggiornamento difettoso di WebView causò crash diffusi delle app Android, finché Google non pubblicò versioni corrette di WebView e Chrome.

Aggiorna quindi per prima cosa WebView e Chrome. Apri Google Play, cerca Android System WebView e installa l'aggiornamento. Fai lo stesso con Google Chrome. Se WebView è stato aggiornato subito prima dell'inizio dei crash e non è ancora disponibile una versione corretta, su alcuni dispositivi puoi rimuovere temporaneamente gli aggiornamenti di WebView. Consideralo solo un rimedio provvisorio, perché WebView è un componente importante per la sicurezza.

Anche Google Play Services può causare problemi estesi quando è obsoleto o bloccato. Aggiornalo se Google Play propone una nuova versione. Dopo aver aggiornato i componenti di sistema, riavvia il telefono.

## Crash causati da poca RAM o poco spazio

Le app possono chiudersi quando chiedono memoria che Android non riesce a fornire. A volte il sistema elimina silenziosamente le app in background. Altre volte cede proprio l'app che stai usando.

Succede spesso sui telefoni con 3 GB o 4 GB che eseguono app moderne. Giochi, editor video, app fotocamera e browser con molte schede sono i casi più comuni. Un'app di messaggistica può funzionare tutto il giorno e poi chiudersi quando provi ad allegare un video grande, perché quella singola operazione richiede più memoria.

Anche la memoria interna quasi piena può sembrare un bug dell'app. Le app hanno bisogno di spazio per cache, download, database e aggiornamenti. Quando lo spazio è quasi esaurito, queste scritture possono fallire. Liberare 1 o 2 GB può bastare a fermare i crash su un telefono molto pieno, ma è meglio mantenere libero almeno il 10-15 % della memoria.

Controlla **Impostazioni > Spazio di archiviazione**. Elimina video grandi, vecchi download, file duplicati, app inutilizzate e APK che non ti servono più. Svuota anche il cestino della galleria o dell'app file, se conserva gli elementi eliminati per 30 giorni.

## Crash dopo un aggiornamento di Android

I grandi aggiornamenti del sistema operativo cambiano l'ambiente su cui funzionano le app. Android 17 è l'esempio attuale: è stato distribuito prima sui Pixel supportati, mentre gli altri dispositivi Android idonei seguiranno nel corso del 2026 secondo i calendari dei produttori. Se un'app era già al limite della compatibilità, una nuova versione di Android può far emergere subito il problema.

Dopo l'aggiornamento del sistema, aggiorna le app. Poi aggiorna WebView, Chrome, Google Play Services e l'app che si chiude. Riavvia una volta. Se l'aggiornamento è appena stato installato, lascia al telefono qualche ora per ottimizzare le app e ricostruire le cache in background.

Se dopo Android 17 si chiude una sola app, probabilmente lo sviluppatore deve aggiornarla. Svuotare cache e dati può aiutare se il problema dipende da vecchi file locali, ma non corregge codice incompatibile con la nuova versione di Android.

Se molte app si chiudono dopo l'aggiornamento, cerca una patch di sistema del produttore. Gli utenti Pixel dovrebbero controllare gli aggiornamenti disponibili. Samsung, Xiaomi, OnePlus, OPPO e altri produttori distribuiscono le correzioni tramite i propri canali, spesso con tempi diversi rispetto ai Pixel.

## La modalità provvisoria indica se interferisce un'altra app

La modalità provvisoria avvia Android disattivando temporaneamente le app scaricate. Non le rimuove. Offre soltanto un ambiente pulito per fare una prova.

Sui Pixel, apri il menu di spegnimento, tieni premuto **Spegni** o **Riavvia**, quindi conferma l'avvio in modalità provvisoria. Sui Samsung puoi tenere premuta l'icona **Spegni** finché compare **Modalità sicura**, oppure avviare il telefono tenendo premuto Volume giù quando appare il logo Samsung. Sui dispositivi Xiaomi la procedura e il testo cambiano in base al modello, ma molti entrano in modalità provvisoria tenendo premuto Volume giù durante l'avvio.

Se i crash spariscono in modalità provvisoria, un'app scaricata sta interferendo. Riavvia normalmente e disinstalla per prime le app recenti o invasive: strumenti di pulizia, risparmio batteria, antivirus, VPN, launcher personalizzati, app di automazione e app con autorizzazione Accessibilità.

Se i crash continuano anche in modalità provvisoria, è più probabile che il problema riguardi il software di sistema, la memoria interna, l'hardware o una delle app preinstallate.

## Quando l'app si blocca invece di chiudersi

Il messaggio "l'app non risponde" indica un ANR, abbreviazione di Application Not Responding. L'app non è ancora andata in crash. Android ti avvisa che non ha risposto entro il tempo previsto.

Per gli eventi di input, come un tocco o la pressione di un tasto, il timeout predefinito è di 5 secondi. Per i BroadcastReceiver il limite dipende dal contesto: se l'app ha un'attività in primo piano, la documentazione Android attuale indica 5 secondi, mentre in altri casi il tempo può essere più lungo. Dal tuo punto di vista cambia poco: tocchi, aspetti e non succede nulla.

Tocca **Attendi** se c'è un lavoro che vale la pena salvare, come l'esportazione di un video o l'invio di un file grande. Tocca **Chiudi app** se è chiaramente bloccata. ANR ripetuti nella stessa app indicano spesso che l'app sta facendo troppo lavoro sul thread principale, aspetta una richiesta di rete lenta o lotta con poca memoria disponibile.

## Cosa non installare

Non installare app che promettono di correggere crash, aumentare la RAM o migliorare la stabilità. Non possono riparare il codice di un'altra app. Nel migliore dei casi svuotano la cache e forzano la chiusura delle app in background. Nel peggiore aggiungono un altro servizio sempre attivo a un telefono che ha già poca memoria.

Le soluzioni utili sono poco spettacolari: aggiornare l'app, svuotare la cache, cancellare i dati solo quando è sicuro, reinstallare, liberare spazio, provare la modalità provvisoria e aspettare lo sviluppatore o il produttore quando il bug dipende da loro.

I crash non danneggiano il telefono. Possono però farti perdere il lavoro non salvato. Se si verificano mentre salvi foto, note o documenti, smetti di fidarti dell'app finché non hai creato un backup dei dati.
