---
title: "Quali app consumano più batteria su Android"
description: "La maggior parte delle classifiche sulle \"app che consumano batteria\" è troppo sicura di sé. Al tuo telefono non interessa quale app sia arrivata prima in un test eseguito da qualcun altro. Conta ciò che hai installato, i permessi concessi, quanto spesso usi ogni app e se continua a lavorare dopo lo spegnimento dello schermo."
listSummary: "La maggior parte delle classifiche sulle \"app che consumano batteria\" è troppo sicura di sé."
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Consumo della batteria"
tags: ["batteria","consumo","risoluzione-dei-problemi","android","prestazioni"]
locale: "it"
draft: false
---
Detto questo, le stesse categorie tornano spesso tra le cause principali.

## I tipi di app che di solito compaiono in cima

Le app video sono il caso più ovvio. YouTube, Netflix, TikTok, Instagram Reels e servizi simili tengono acceso lo schermo, decodificano video, scaricano dati senza sosta e spesso vengono usati con una luminosità elevata, perché si guardano contenuti in stanze luminose o all'aperto. Se un'app video è in cima all'elenco dopo due ore di utilizzo, non è un bug. È fisica.

Subito dopo vengono le app di navigazione. Google Maps, Waze, app per consegne, servizi di ride-hailing e fitness tracker combinano GPS, dati mobili, schermo acceso e talvolta Bluetooth. Un'ora di navigazione passo passo può consumare una parte visibile della batteria, soprattutto in 5G o con segnale debole.

I giochi non vanno per il sottile. Un titolo 3D mette sotto carico contemporaneamente GPU, CPU, display, audio, input touch e rete. La buona notizia è che in genere consumano mentre giochi, non di nascosto alle 3:00 di notte. Se un gioco compare con attività in background, limitane l'uso.

Le app social e di messaggistica sono più complicate. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit e le app di notizie vogliono contenuti aggiornati e notifiche. Alcune si comportano bene, altre no. La parte fastidiosa è che due persone possono installare la stessa app e ottenere risultati diversi: una ha attivi posizione, notifiche, riproduzione automatica, sincronizzazione dei contatti e aggiornamento in background, l'altra no.

## L'uso in background conta più del nome dell'app

Se la schermata della batteria dice che un'app ha usato l'8 % mentre guardavi video per un'ora, ti sta comunicando qualcosa di prevedibile. Se dice che ha consumato l'8 % in background mentre il telefono era in tasca, ti sta dando un'informazione utile.

Guarda prima questa differenza. Su Pixel, apri **Impostazioni > Batteria > Utilizzo batteria**, passa alla visualizzazione per app e tocca quella che vuoi controllare. Su Samsung, apri **Impostazioni > Batteria**, quindi il grafico dell'utilizzo o **Visualizza dettagli**, a seconda della versione di One UI. La dicitura cambia in base al modello, ma ti servono il tempo in primo piano, il tempo in background e l'eventuale autorizzazione a continuare l'attività.

Una regola pratica: se un'app non essenziale consuma più di un paio di punti percentuali in background durante una giornata, deve avere una buona ragione. Messaggistica, musica, navigazione, salute e sicurezza possono giustificarlo. Un'app per gli acquisti no.

I meccanismi più comuni sono semplici: notifiche push, sincronizzazione dei contenuti, controlli della posizione, wake lock, traffico di rete in background e SDK di analisi. Vale la pena nominare i wake lock perché Google li considera ormai un indicatore di qualità su Play. Un wake lock parziale mantiene attiva la CPU anche quando lo schermo è spento. Usato con attenzione è normale. Mantenuto troppo a lungo spreca batteria.

## Google Play ora usa un indicatore di qualità per la batteria

Questa è la grande differenza rispetto alle versioni precedenti dell'articolo. Google ha inserito **Excessive partial wake locks** tra le metriche principali di Android vitals. Dal 1° marzo 2026, le app che superano la soglia possono perdere visibilità nelle aree di scoperta di Google Play e mostrare un avviso nella propria scheda dello Store.

La soglia è precisa. Per le app mobili, Android vitals considera eccessivo l'uso di wake lock parziali non esenti quando restano attivi per almeno due ore in un periodo di 24 ore e questo comportamento riguarda più del 5 % delle sessioni dell'app, calcolato come media su 28 giorni.

Questo non significa che Google Play mostri ogni costo energetico prima dell'installazione. Non segnala un gioco solo perché consuma molto mentre lo usi. Non giudica se trascorri personalmente cinque ore su TikTok. La metrica riguarda il comportamento che mantiene attiva la CPU in background mentre lo schermo è spento.

Resta comunque utile. Per la prima volta, un utente comune può vedere un avviso relativo alla batteria prima di installare un'app che si comporta male. È meglio che scoprire il problema dopo tre notti di consumo anomalo.

## Cosa cambiare prima di disinstallare le app

Disinstallare è la soluzione più netta, ma la maggior parte delle persone non eliminerà le proprie app principali di social, video o messaggistica. Parti quindi dalle impostazioni che riducono il lavoro invisibile.

Disattiva la riproduzione automatica quando l'app lo permette. Instagram, Facebook, X, Reddit, YouTube e TikTok possono consumare batteria e dati preparando video che forse non guarderai mai.

Limita la posizione. Apri **Impostazioni > Posizione > Autorizzazioni app per la posizione** e controlla quali app hanno accesso continuo. Un'app meteo può quasi sempre usare la posizione solo mentre è aperta. Un'app di navigazione ne ha bisogno durante gli spostamenti. Un social raramente deve averla sempre.

Limita l'uso della batteria in background. Su Pixel e telefoni con un Android simile a quello standard, apri **Impostazioni > App > [nome dell'app] > Utilizzo batteria app** e riduci l'accesso in background per le app che non richiedono aggiornamenti immediati. Su Samsung, usa **Impostazioni > Batteria > Limiti per l'uso in background**, quindi aggiungi le app usate raramente alle Applicazioni in sospensione o alle App in sospensione avanzata.

Riduci le notifiche. Ogni notifica può riattivare il telefono, accendere lo schermo, far vibrare il dispositivo e scaricare nuovi contenuti. Sii severo con le app che inviano marketing, consigli o messaggi del tipo "potrebbe piacerti".

Aggiorna le app. È un consiglio noioso, ma conta dopo gli aggiornamenti di Android, compresa la prima distribuzione di Android 17 sui Pixel supportati. Gli sviluppatori correggono bug legati alla batteria, ai wake lock, ai cicli di sincronizzazione e alla compatibilità. Sia Samsung sia Google consigliano di aggiornare app e sistema quando si indaga su un consumo anomalo.

## Usare il browser invece dell'app non è sempre un vantaggio

Un consiglio ricorrente dice di usare la versione web invece dell'app. A volte ha senso, perché un sito non può mantenere lo stesso tipo di servizio Android persistente di un'app installata. Se Facebook o X consumano soltanto perché l'app nativa continua a riattivarsi, la versione mobile del sito può aiutare.

Non trasformarlo però in una regola. Alcune ricerche controllate che hanno confrontato app Android native e versioni web degli stessi servizi hanno rilevato che, durante l'uso attivo, le app native possono consumare meno energia. Una scheda del browser non è magica. Deve comunque elaborare video, JavaScript, pubblicità, tracker e immagini.

Il criterio pratico è questo: usa il browser per i servizi che controlli ogni tanto e dai quali non ti servono notifiche. Usa l'app nativa per quelli che usi spesso, soprattutto se la versione web è lenta o poco fluida. Se l'app comincia a comparire nel consumo notturno, limitane l'attività in background.

## Quando serve un'app di diagnostica

La schermata della batteria integrata in Android deve essere il primo punto di controllo. È già presente ed è collegata direttamente al sistema operativo.

Uno strumento come runcheck diventa utile quando il dato della batteria non basta a spiegare il comportamento. Se i picchi di consumo coincidono con calore, segnale debole, rete lenta o memoria quasi piena, la soluzione sarà diversa dal semplice incolpare Instagram. Il contesto conta.

AccuBattery e strumenti simili possono stimare la capacità nel tempo, ma considera quei numeri come stime, a meno che il telefono non mostri direttamente lo stato della batteria.

## Un metodo migliore per trovare le app peggiori

Fallo per 2 giornate normali:

1. Carica e usa il telefono come al solito.
2. La sera, controlla **Impostazioni > Batteria > Utilizzo batteria**.
3. Annota le prime cinque app e verifica se hanno consumato in primo piano o in background.
4. Limita soltanto quelle con un'attività in background che non ha senso.
5. Controlla di nuovo il giorno successivo.

Non svuotare la schermata Recenti ogni ora. Android gestisce automaticamente memoria e batteria, e chiudere forzatamente le app spesso spreca energia quando devono riaprirsi. Usa Forza interruzione per un'app che si comporta male, non come manutenzione quotidiana.

Le app che consumano più batteria sono in genere quelle che tengono occupati schermo, rete, GPS, CPU o GPU. Quelle su cui vale la pena intervenire sono quelle che lo fanno quando non le stai usando.
