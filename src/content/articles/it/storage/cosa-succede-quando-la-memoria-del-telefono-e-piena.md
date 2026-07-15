---
title: "Cosa succede quando la memoria del telefono è piena"
description: "Quando la memoria di un telefono Android è piena, possono comparire problemi comuni: errori della fotocamera, arresti anomali delle app, aggiornamenti bloccati e scrittura lenta dei file. Ecco cosa smette di funzionare per primo e quanto spazio libero conviene mantenere."
listSummary: "Quando la memoria di un telefono Android è piena."
hub: "storage"
sourceNumber: 81
order: 3
tags: ["prestazioni","velocita","android","ottimizzazione","risoluzione-dei-problemi"]
locale: "it"
draft: false
---
---

Quando lo spazio di archiviazione di Android è pieno, il telefono non smette di funzionare in modo ordinato. Prima comincia a comportarsi in modo strano.

La fotocamera esita. Le app si bloccano mentre salvano una bozza. Gli aggiornamenti non si installano. La tastiera rallenta in un'app di chat che fino al giorno prima funzionava bene. Poi Android mostra l'avviso di memoria piena, come se bastasse a spiegare perché all'improvviso sembra essersi rotto tutto.

In gran parte, è proprio così.

## Cosa smette di funzionare per primo

La fotocamera è spesso uno dei primi problemi che noti. Quando tocchi il pulsante di scatto, la foto non viene salvata all'istante come un piccolo file già pronto. L'app Fotocamera può aver bisogno di spazio per elaborare l'immagine, creare file temporanei e miniature, applicare modifiche, gestire gli scatti a raffica o usare buffer video. Senza margine di lavoro può bloccarsi, non salvare la foto o interrompere la registrazione.

Poi arrivano le app. Ogni app scrive piccoli file mentre è in uso: cache, log, database, bozze, stato della sessione, miniature, contenuti scaricati e file journal di SQLite. Se queste scritture non riescono, l'app può chiudersi oppure perdere senza avvisarti ciò che stavi facendo.

Anche gli aggiornamenti di sistema richiedono spazio. Una patch mensile è più piccola di un aggiornamento completo di Android, ma entrambi hanno bisogno di spazio per il download e per l'installazione. Se il telefono non riesce a installarli, perdi correzioni di sicurezza e bug fix. Non vale la pena rinunciarvi solo per conservare vecchi download e video duplicati.

## Perché il rallentamento inizia prima di arrivare a zero byte liberi

Non devi arrivare a 0 GB liberi perché il telefono rallenti. La zona critica inizia in genere quando lo spazio libero scende sotto il 10-15 %, e sotto il 5 % la situazione peggiora rapidamente.

La memoria flash ha bisogno di blocchi liberi per le operazioni di pulizia, il wear leveling e la garbage collection. Quando lo spazio è poco, il controller deve lavorare di più prima di poter scrivere nuovi dati. Le normali operazioni di scrittura diventano quindi più lente. Salvare una foto, installare un'app, aggiornare un database o scaricare un allegato può bloccare il telefono abbastanza a lungo da farsi notare.

Non confondere questo problema con zRAM. La maggior parte dei telefoni Android usa zRAM come memoria compressa all'interno della RAM, non come un normale file di swap nella memoria interna. Avere lo spazio di archiviazione pieno non significa direttamente che "Android non può più usare lo swap". Il problema è che le app e il sistema continuano ad aver bisogno di spazio per file reali mentre funzionano.

Android 17 applica limiti più rigidi alla memoria delle app, ma questo non elimina la necessità di mantenere spazio libero. La pressione sulla RAM e quella sullo spazio di archiviazione sono problemi diversi. Sembrano uguali quando hai davanti uno schermo bloccato.

## Cosa riempie la memoria senza farsi notare

Le app di messaggistica sono spesso le principali responsabili. WhatsApp, Telegram, Discord e app simili possono scaricare foto, video, messaggi vocali, sticker, GIF e documenti da ogni gruppo molto attivo a cui partecipi. Pochi mesi di contenuti delle chat di gruppo possono occupare più spazio del rullino della fotocamera.

La cartella Downloads è un altro cimitero digitale. PDF, installer APK, file ZIP, moduli, screenshot, fatture e allegati aperti una sola volta dall'email restano lì finché non li elimini.

Anche i contenuti offline crescono senza attirare l'attenzione. Playlist di Spotify, episodi di Netflix, download di YouTube, podcast, audiolibri e aree offline di Google Maps si trovano tutti nello spazio usato dalle rispettive app. Potresti non vedere questi file nel file manager, ma compaiono in **Impostazioni > App > [nome app] > Spazio di archiviazione**.

Anche il cestino può ingannarti. Il supporto al cestino basato su MediaStore è arrivato con Android 11, e app come Files by Google possono conservare gli elementi eliminati nel Cestino per circa 30 giorni, a meno che tu non lo svuoti. Google Foto segue regole proprie. Samsung Gallery e My Files hanno cestini separati. Se hai eliminato molti video ma lo spazio libero è cambiato appena, controlla i cestini.

## Quanto spazio libero conviene mantenere

Cerca di lasciare libero il 15-20 % dello spazio. Su un dispositivo da 64 GB significa circa 10 GB. Con 128 GB, prova a mantenerne liberi più o meno 20 GB.

Questo margine lascia ad Android spazio per aggiornare le app, elaborare le foto, gestire la cache, scrivere nei database, scaricare file e svolgere la manutenzione della memoria. Non devi controllarlo ogni giorno. Devi però smettere di considerare 2 GB liberi come "abbastanza".

Se il telefono dispone di 32 GB o 64 GB, mantenere un margine comodo può essere impossibile con le app moderne, le foto e i contenuti delle chat. Non è colpa tua. I dispositivi con poco spazio sono invecchiati male.

runcheck controlla l'utilizzo dello spazio di archiviazione nella panoramica sullo stato del dispositivo e segnala quando lo spazio libero è basso prima che il telefono entri in una situazione critica. La schermata dettagliata separa inoltre immagini, video, audio, documenti, download e altre categorie, così puoi iniziare la pulizia dai dati invece di eliminare file a caso.

## Domande comuni

### La memoria piena può danneggiare il telefono in modo permanente?

Di solito no. Può rendere più difficile il wear leveling per il controller della memoria, ma è improbabile che il chip NAND si rovini solo perché il telefono si è riempito alcune volte. Il rischio più concreto è pratico: aggiornamenti saltati, foto non salvate, dati delle app danneggiati e un telefono molto sgradevole da usare.

### Un ripristino dei dati di fabbrica risolve il problema?

Libera spazio, ma è lo strumento più drastico. Se la memoria si è riempita una volta con contenuti di WhatsApp, video offline e file della fotocamera, succederà di nuovo. Elimina prima le cause.

### Perché i numeri non tornano?

Android, le partizioni di sistema, le app preinstallate, i dati delle app, le miniature, i cestini e le categorie non sempre coincidono in modo preciso. Anche la capacità dichiarata non è uguale a quella realmente utilizzabile. Il numero sulla confezione non corrisponde mai allo spazio disponibile per i tuoi file.

### Una scheda SD risolve il problema?

Può aiutare con foto, video, musica e documenti, se il telefono ha ancora uno slot. È meno utile per le app. Molte non possono essere spostate sulla scheda SD e, anche quando è possibile, una microSD è molto più lenta della memoria interna UFS. Usala per i contenuti multimediali, non per salvare un telefono che avrebbe avuto bisogno di più memoria interna fin dall'inizio.
