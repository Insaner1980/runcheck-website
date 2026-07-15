---
title: "Modalità Doze di Android: come il telefono risparmia batteria mentre dorme"
description: "La modalità Doze di Android riduce il consumo in standby rimandando il lavoro in background quando il telefono è inattivo. Ecco cosa limita, perché le notifiche possono arrivare in ritardo e quando escludere un'app dall'ottimizzazione."
listSummary: "La modalità Doze di Android riduce il consumo in standby rimandando il lavoro in background quando il…"
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Consumo della batteria"
tags: ["batteria","ottimizzazione","android","consigli","prestazioni"]
locale: "it"
draft: false
---
Perché dieci notifiche arrivano tutte insieme appena prendi in mano il telefono? Spesso la risposta è Doze.

Doze è il sistema di inattività integrato in Android. Non devi attivarlo e la maggior parte delle persone non vedrà mai una schermata Doze nelle Impostazioni. Funziona in silenzio quando il telefono non è collegato alla corrente, lo schermo è spento e Android decide che il dispositivo non deve più lasciare ogni app libera di avviarsi quando vuole.

Android 17 è ora la versione attuale della piattaforma sulla maggior parte dei Pixel supportati, mentre gli altri produttori seguono con i propri calendari. Questo non cambia i consigli di base su Doze. I meccanismi che contano per chi usa il telefono sono ancora gli stessi: meno riattivazioni in background, maggiore autonomia in standby e, a volte, notifiche non urgenti che arrivano in ritardo.

## Cosa fa Doze

Quando Doze è attivo, Android limita le attività più costose. Le app perdono il normale accesso alla rete. Gli allarmi standard vengono rimandati. Attività pianificate e sincronizzazioni devono aspettare. I wake lock vengono ignorati durante le fasi di inattività profonda. Anche la ricerca di reti Wi-Fi si interrompe.

Il dispositivo non rimane bloccato per sempre. Android apre brevi finestre di manutenzione in cui il lavoro rimandato può essere eseguito in gruppo. Le app si sincronizzano, le attività in coda partono e le notifiche con priorità normale possono arrivare. Poi Android riporta il dispositivo in stato di inattività.

Questo è il trucco. Raggruppare il lavoro in background consuma molto meno che permettere a ogni app di riattivare CPU e radio quando preferisce.

## Quando si attiva Doze

Doze è arrivato con Android 6.0 (API 23). La prima versione richiedeva che il dispositivo fosse scollegato dalla corrente, fermo e con lo schermo spento per un certo periodo. Android 7.0 ha aggiunto il comportamento chiamato "Doze on the go", che applica restrizioni più leggere quando il telefono non è in carica e lo schermo è spento, anche se si muove nella tasca.

In pratica, i telefoni Android moderni ricevono di solito due livelli di aiuto. Le restrizioni più leggere si applicano mentre il dispositivo viene trasportato, quelle più profonde dopo che è rimasto fermo per un po'.

Il software del produttore può rendere tutto più complicato. I Pixel tendono a seguire da vicino il comportamento di riferimento di Google. Samsung, Xiaomi, OnePlus, Oppo e altri aggiungono livelli propri di gestione della batteria. A volte aiutano. A volte sono troppo aggressivi e interrompono le notifiche.

## Cosa viene rimandato

Il ritardo più evidente riguarda la sincronizzazione in background. L'email può controllare meno spesso. Un'app per le note può sincronizzarsi più tardi. Un widget meteo può aggiornarsi nella finestra di manutenzione successiva invece che immediatamente.

Anche il lavoro pianificato dagli sviluppatori subisce limitazioni. Le attività di `JobScheduler` e `WorkManager` in genere aspettano mentre Doze è attivo. Gli allarmi standard di `AlarmManager` vengono rimandati, mentre quelli impostati dall'utente nell'app Orologio continuano a scattare all'ora prevista.

Chiamate e SMS non dovrebbero aspettare una finestra di manutenzione. Anche le notifiche Firebase Cloud Messaging (FCM) ad alta priorità possono riattivare brevemente un'app per mostrare un avviso urgente. Per questo WhatsApp, Signal, Telegram e app simili in genere sembrano immediate, a condizione che l'app e le impostazioni della batteria del produttore siano configurate correttamente.

I messaggi push a priorità normale sono diversi. Se un'app li usa per aggiornamenti in background o avvisi poco urgenti, Android può trattenerli fino alla finestra di manutenzione successiva.

## Perché le notifiche arrivano in ritardo

Una notifica in ritardo non è sempre un errore. Spesso è il compromesso previsto da Doze.

Una promozione di un servizio di consegna, un "Mi piace" sui social o un avviso di notizie possono aspettare qualche minuto se questo aiuta il telefono a restare inattivo. Una chat di lavoro, una sveglia, una chiamata in arrivo o un avviso di sicurezza non dovrebbero aspettare. Le app ben progettate usano la priorità corretta per ogni tipo di messaggio. Quelle progettate male chiedono una priorità troppo alta oppure non si integrano correttamente con FCM e continuano a controllare la rete in background.

La parte irritante è che Android non offre una spiegazione chiara. Vedi soltanto i messaggi in ritardo e devi ricostruire la causa.

Inizia dalle impostazioni delle notifiche dell'app. Poi controlla le impostazioni della batteria relative a quell'app. Su Pixel, apri **Impostazioni > App > Mostra tutte le app > [nome app] > Utilizzo della batteria per le app** e controlla **Consenti l'utilizzo in background**. Su Samsung, controlla **Impostazioni > Assistenza dispositivo > Batteria > Limiti per l'uso in background** e assicurati che l'app non sia in **App in sospensione** o **App in sospensione avanzata**.

## Escludere le app da Doze

Android consente di escludere app specifiche dall'ottimizzazione della batteria. Il percorso varia tra versioni e produttori. Apri le informazioni dell'app e cerca la sezione relativa all'utilizzo o all'ottimizzazione della batteria, quindi scegli l'opzione equivalente a non ottimizzare l'app, se disponibile.

Sii selettivo. Ogni esclusione concede a un'app più libertà di lavorare in background, e troppe esclusioni rendono Doze meno utile. App di messaggistica, VPN, app mediche o di sicurezza e alcune app di lavoro possono essere candidati ragionevoli. Un'app di shopping no.

Le norme di Google Play limitano anche i casi in cui un'app può chiedere all'utente di escluderla dalla gestione energetica di Android. La regola pratica è semplice: l'esclusione va riservata alle app la cui funzione principale smetterebbe di funzionare senza di essa.

## Come capire se Doze sta aiutando

Il test più semplice per un utente è il consumo notturno. Carica il telefono, scollegalo prima di andare a letto, lascialo con lo schermo spento e controlla la perdita al mattino. Perdere qualche punto percentuale durante la notte è normale. Perdere il 15 % o il 25 % a schermo spento indica che qualcosa riattiva troppo spesso il telefono, il segnale è scarso oppure la batteria sta invecchiando.

Le statistiche della batteria non mostrano sempre un messaggio come "Doze non ha funzionato". Possono indicare Sistema Android, Google Play services, rete mobile o una voce generica associata a un'app. Per questo il ritmo di consumo a schermo spento conta più di un singolo grafico. Se un telefono perde più di circa l'1-2 % all'ora mentre è inattivo, vale la pena indagare.

Gli sviluppatori possono testare Doze tramite ADB con `adb shell dumpsys deviceidle force-idle`, ma è uno strumento di test, non un'impostazione da usare normalmente ogni giorno.

## Domande comuni

Non puoi disattivare Doze dalle normali impostazioni Android, e probabilmente non dovresti provarci. È uno dei motivi principali per cui i telefoni Android moderni possono restare inattivi per ore senza scaricarsi completamente.

Doze funziona anche quando il telefono è in tasca, ma non sempre al livello più profondo. Android 7.0 e versioni successive applicano restrizioni più leggere mentre lo schermo è spento e il dispositivo si muove. La modalità più profonda continua a dipendere da periodi di inattività più lunghi.

Le sveglie dell'app Orologio continuano a suonare. Sono gli allarmi in background delle app a essere spostati nelle finestre di manutenzione, a meno che usino API progettate per gli allarmi che devono funzionare anche durante l'inattività.

Se un dispositivo consuma più di un altro in standby, non dare per scontato che Doze sia guasto. Potenza del segnale, politiche energetiche dell'OEM, insieme di app, sincronizzazione degli account, widget ed età della batteria possono far comportare in modo molto diverso due telefoni Android.

runcheck può aiutare separando il consumo a schermo acceso da quello a schermo spento e mostrando se i periodi di inattività coincidono con attività di rete, termiche o in background. È molto più utile che cercare di indovinare da una sola percentuale persa durante la notte.
