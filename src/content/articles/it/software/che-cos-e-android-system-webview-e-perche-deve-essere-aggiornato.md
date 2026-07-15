---
title: "Che cos'è Android System WebView e perché deve essere aggiornato"
description: "Perché un componente di sistema che non apri mai deve essere aggiornato così spesso? Perché Android System WebView gestisce in silenzio parte dei contenuti web mostrati dentro altre app, e il web cambia rapidamente, è complesso e comporta rischi di sicurezza."
listSummary: "Perché un componente di sistema che non apri mai deve essere aggiornato così spesso?"
hub: "software"
sourceNumber: 129
order: 11
tags: ["android","aggiornamenti","sicurezza","software","guida"]
locale: "it"
draft: false
---
Potresti non toccare mai un'icona di WebView. È normale. Ma quando un'app email apre una pagina di accesso, un social network mostra un articolo senza uscire dall'app o un'app bancaria carica una schermata di autenticazione basata sul web, spesso è WebView a visualizzarla in background.

## Cosa fa davvero WebView

Le app Android non devono integrare un intero motore del browser ogni volta che vogliono mostrare una pagina web. WebView offre un sistema condiviso per visualizzare HTML, CSS, JavaScript, immagini, moduli, pagine di accesso, articoli di assistenza, procedure di pagamento e strumenti web incorporati nell'app.

Si basa su Chromium, lo stesso progetto browser open source su cui è costruito Chrome. È importante perché le pagine web moderne non sono più semplici documenti. Eseguono JavaScript, caricano contenuti multimediali, conservano lo stato della sessione, gestiscono reindirizzamenti e usano protezioni di sicurezza in continua evoluzione.

Un esempio semplice: tocchi un link di assistenza in un'app di shopping. L'app potrebbe mandarti in Chrome, ma molte preferiscono mantenerti nella propria interfaccia e visualizzare la pagina con WebView. L'esperienza resta ordinata, ma WebView viene esposto a tutti i contenuti web caricati dall'app.

## Perché si aggiorna separatamente da Android

WebView è un componente di sistema aggiornabile da Android 5 Lollipop. Il punto importante è che Google può aggiornare il provider WebView tramite Google Play, senza aspettare un aggiornamento completo del sistema operativo da ogni produttore di telefoni.

Questa struttura è ancora più utile oggi. Android 17 è stato rilasciato il 16 giugno 2026 per la maggior parte dei Pixel supportati, mentre nuovi dispositivi e altri produttori lo riceveranno in seguito. Gli aggiornamenti di WebView non devono aspettare questa distribuzione più lenta, modello per modello. Un telefono Samsung o Xiaomi che non usa ancora Android 17 può comunque ricevere correzioni per WebView tramite Google Play, se è supportato e include i servizi Google Play.

Su alcuni dispositivi più vecchi con Android 7, 8 e 9, Chrome veniva spesso usato come provider WebView attivo. Da Android 10 in poi, Android System WebView è normalmente il componente separato che compare nel Play Store e nelle impostazioni delle app. I dettagli possono cambiare su dispositivi particolari, custom ROM e versioni Android prive di Google Play.

## Perché gli aggiornamenti sono frequenti

WebView gestisce contenuti provenienti dal web aperto. Questo lo rende un bersaglio di grande interesse.

Un difetto di WebView può essere più serio di un problema in una normale app, perché molte applicazioni dipendono dallo stesso componente. Un errore di rendering può impedire il caricamento delle pagine di accesso. Una vulnerabilità può aumentare il rischio legato a una pagina dannosa aperta dentro un'app. Un problema di compatibilità può far bloccare nello stesso giorno varie app che sembrano non avere nulla in comune.

È già successo. Nel marzo 2021, un aggiornamento difettoso di WebView provocò blocchi diffusi delle app Android, tra cui Gmail e altre applicazioni importanti. Google risolse il problema con nuove versioni di WebView e Chrome. Fu fastidioso, ma mostrò anche perché è meglio poter aggiornare WebView tramite Google Play invece di lasciarlo incorporato per sempre nel sistema operativo.

Al 14 luglio 2026, la scheda di Android System WebView nel Play Store risulta aggiornata nello stesso giorno. Anche Chrome 150 per Android è stato pubblicato il 14 luglio, e la documentazione Android spiega che WebView viene aggiornato regolarmente tramite Google Play con la stessa cadenza di Chrome. Non considerare comunque un numero di versione come un obiettivo permanente. WebView avanza di continuo e le distribuzioni graduali possono far comparire per un breve periodo versioni diverse su due telefoni.

## Cosa succede se WebView è obsoleto

La sicurezza è il motivo principale per preoccuparsene. WebView elabora contenuti web non attendibili dentro le app, quindi le vulnerabilità note non dovrebbero restare senza correzione più del necessario.

Ci sono anche sintomi pratici. Una versione obsoleta o danneggiata può mostrare pagine vuote nelle app, bloccare le schermate di accesso in un ciclo, far fallire i pagamenti, visualizzare male le pagine di assistenza incorporate o causare arresti anomali quando un'app tenta di aprire una web view. Se più app smettono di funzionare nello stesso momento e tutte mostrano contenuti web, WebView diventa uno dei primi sospetti.

Non attribuire però ogni problema a WebView. Se si blocca una sola app e il resto del telefono funziona, aggiorna prima quell'app. Svuota la cache. Riavvia il telefono. WebView è più probabile quando il problema attraversa i confini tra più app.

## Come aggiornarlo

Sulla maggior parte dei telefoni con Android 10 o versioni successive e Google Play, WebView si aggiorna automaticamente tramite il Play Store.

Per controllare manualmente, apri Google Play Store, tocca l'icona del profilo e poi Gestisci app e dispositivo. Nella sezione Aggiornamenti disponibili, apri i dettagli e cerca Android System WebView. Installa l'aggiornamento se è presente.

Puoi anche cercare direttamente Android System WebView nel Play Store. Se compare Aggiorna, toccalo. Se vedi soltanto Apri, Disinstalla aggiornamenti o nessun pulsante di aggiornamento, è probabile che il telefono abbia già la versione prevista per il suo canale di distribuzione.

Per controllare la versione installata, apri Impostazioni, vai in App e seleziona Android System WebView. Potrebbe essere necessario mostrare le app di sistema dal menu. Alcuni telefoni indicano il provider WebView anche nelle opzioni sviluppatore, ma quasi nessuno ha motivo di modificare quella scelta.

Se l'aggiornamento sembra bloccato, prova prima le soluzioni più semplici: riavvia il telefono, aggiorna Google Play Services e Chrome, quindi svuota la cache del Play Store. Non installare file APK casuali di WebView se non sai esattamente cosa stai facendo. Un pacchetto sbagliato per il dispositivo può creare più problemi di quanti ne risolva.

## Conviene disattivare o disinstallare WebView?

No, non su un telefono Android moderno.

Android System WebView è un componente di sistema. Di solito non puoi disinstallarlo completamente, ma alcune versioni Android e alcuni produttori permettono di rimuovere gli aggiornamenti o disattivarlo. Tornare indietro elimina correzioni di sicurezza. Disattivarlo può rompere browser interni alle app, schermate di accesso, pagine di assistenza incorporate e altre parti delle app che dipendono dai contenuti web.

Esistono eccezioni. Su alcuni vecchi dispositivi con Android 7-9, Chrome può svolgere il ruolo di WebView e Android System WebView può quindi apparire disattivato. È normale su quelle versioni. Da Android 10 in poi, lascia WebView attivo e aggiornato.

## Cosa fare quando WebView causa problemi

Se più app iniziano improvvisamente a bloccarsi o mostrano pagine web vuote, aggiorna Android System WebView e Chrome dal Play Store. Poi riavvia il telefono.

Se il problema è iniziato subito dopo un aggiornamento di WebView e il telefono è quasi inutilizzabile, rimuovere temporaneamente gli aggiornamenti può essere una soluzione d'emergenza. Apri Impostazioni, vai in App, seleziona Android System WebView, apri il menu con tre puntini e scegli Disinstalla aggiornamenti, se l'opzione è disponibile. Temporaneamente è la parola importante. Aggiorna di nuovo quando Google pubblica una versione corretta, perché restare con una WebView vecchia è un cattivo compromesso.

Per problemi di visualizzazione, può aiutare anche svuotare la cache di WebView. Apri Impostazioni, vai in App, seleziona Android System WebView e poi la sezione dedicata allo spazio di archiviazione e alla cache. Svuota prima la cache. Cancellare i dati è un intervento più forte e di solito non serve, ma resta molto meno distruttivo di un ripristino completo del telefono.

WebView è noioso per scelta. Quando funziona bene, non lo noti. È proprio così che dovrebbe restare.
