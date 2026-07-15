---
title: "Cos'è il thermal throttling e come influisce sul telefono?"
description: "Il rallentamento termico integrato in Android protegge il telefono dal calore. Scopri i livelli termici di Android, il thermal headroom, le cause più comuni e come ridurre la limitazione in sicurezza."
listSummary: "Il rallentamento termico integrato in Android protegge il telefono dal calore."
hub: "thermal"
sourceNumber: 56
order: 4
tags: ["temperatura","termico","android","risoluzione-dei-problemi","hardware"]
locale: "it"
draft: false
---
Perché un telefono veloce diventa improvvisamente lento a metà di una partita, una videochiamata o una sessione con la fotocamera? Nella maggior parte dei casi si tratta di thermal throttling. Il dispositivo è caldo, quindi Android e il produttore riducono le prestazioni prima che il calore diventi un problema di sicurezza.

## Cosa significa thermal throttling

È un rallentamento controllato. Il telefono riduce la velocità della CPU, della GPU, la luminosità dello schermo, la potenza di ricarica, l'attività delle radio o altri comportamenti ad alto consumo per abbassare la temperatura.

Di per sé non è un bug. Il telefono sceglie un livello di prestazioni inferiore per mantenere batteria, schermo, modem e SoC entro i limiti di sicurezza stabiliti dal produttore.

Il compromesso si nota sotto forma di fotogrammi persi, app che si aprono più lentamente, luminosità ridotta, limitazioni della fotocamera, ricarica rallentata o giochi che partono fluidi e poi iniziano a scattare. Android non chiede il permesso. Lo fa e basta.

## I livelli termici di Android

Android offre API pubbliche per lo stato termico da Android 10. Sui dispositivi supportati, le app possono leggere livelli di gravità semplificati tramite `PowerManager`:

- **None:** nessuna limitazione termica in corso.
- **Light:** limitazione leggera, con un impatto minimo sull'uso normale.
- **Moderate:** una certa limitazione, ma il dispositivo in genere resta utilizzabile.
- **Severe:** limitazione intensa, con prestazioni chiaramente ridotte.
- **Critical:** la piattaforma ha già ridotto notevolmente il consumo.
- **Emergency:** alcuni componenti essenziali possono spegnersi a causa delle condizioni termiche.
- **Shutdown:** il dispositivo deve spegnersi immediatamente.

Queste etichette sono standardizzate. Le temperature che attivano ciascun livello non lo sono. Un Pixel, un Galaxy S Ultra, uno smartphone Xiaomi da gaming e un Motorola economico possono associare il calore a livelli diversi, perché hanno sistemi di raffreddamento, batterie, scocche, schermi e margini di sicurezza differenti.

Ecco perché dare consigli basati su una temperatura esatta è complicato. Un telefono può ridurre le prestazioni con una temperatura della batteria che un altro tollera durante la ricarica.

## Il margine termico è un avviso più tempestivo

Lo stato termico indica la fase attuale. Il margine termico, o thermal headroom, indica quanto il carico corrente è vicino a una limitazione grave.

La guida Android sulle prestazioni nei giochi descrive una scala di riferimento da 0,0 a 1,0, dove 1,0 corrisponde a `THERMAL_STATUS_SEVERE` per quel carico. Su alcuni dispositivi l'API può anche restituire valori superiori a 1,0. I giochi possono usare questo segnale per ridurre il frame rate o la qualità visiva prima che il giocatore percepisca il rallentamento.

C'è un limite: il supporto varia. Alcuni telefoni restituiscono pochi dati, altri restituiscono `NaN` se l'API viene interrogata troppo spesso e altri ancora interpretano il margine in modo diverso perché la progettazione termica cambia da un modello all'altro. Una buona app di diagnostica deve trattare il thermal headroom come un segnale, non come un termometro universale.

runcheck usa i segnali termici pubblici di Android quando il dispositivo li espone. È importante, perché le normali app non dovrebbero basare uno stato termico destinato all'utente su file di temperatura sysfs privati.

## Cosa attiva la limitazione termica

Le sessioni di gioco prolungate sono il caso più ovvio. Un gioco 3D può impegnare contemporaneamente CPU, GPU, schermo, altoparlanti, rete e feedback aptico.

Anche la fotocamera genera molto calore. Registrazione in 4K o 8K, elaborazione HDR, video lunghi e luce solare diretta possono scaldare rapidamente il telefono. Le app Fotocamera possono ridurre la qualità o interrompere la registrazione quando il dispositivo diventa troppo caldo.

La navigazione è più lenta, ma insidiosa. Lo schermo resta acceso, il GPS lavora, il modem scarica i dati delle mappe e il telefono può trovarsi su un supporto caldo in auto. Se aggiungi il sole diretto attraverso il parabrezza, la limitazione arriva prima.

Ricaricare durante un uso intenso è l'errore più semplice da fare. La ricarica rapida produce già calore. Se aggiungi un gioco, una videochiamata, un hotspot o una registrazione video, il telefono ha meno margine per raffreddarsi.

Anche un segnale debole può costringere il modem a lavorare di più. Un telefono che cerca di mantenere il 5G in una zona con poca copertura può scaldarsi perfino a schermo spento.

Anche gli aggiornamenti di sistema importanti possono causare calore temporaneo. Android 17 è stato pubblicato il 16 giugno 2026 ed è disponibile sulla maggior parte dei Pixel supportati. Per gli altri produttori, disponibilità e tempi dipendono dai rispettivi programmi, e alcuni dispositivi partner offrono ancora Android 17 in beta. Dopo qualsiasi aggiornamento importante, l'ottimizzazione delle app e la sincronizzazione in background possono scaldare il telefono per uno o due giorni.

## Limitazione termica e gestione delle prestazioni della batteria

Questo tipo di limitazione è temporaneo. Interrompi il carico, lascia raffreddare il telefono e le prestazioni tornano normali.

La gestione delle prestazioni legata alla batteria è diversa. Con l'invecchiamento, la resistenza interna aumenta e la capacità di fornire potenza di picco peggiora. Alcuni telefoni riducono la tensione massima, la velocità di ricarica o altri parametri per mantenere stabile una batteria usurata. Google, per esempio, documenta la funzione `Consigli sulla batteria` (Battery health assistance) sui Pixel 6a e successivi, con regolazioni graduali della tensione da 200 fino a 1000 cicli di ricarica sui modelli supportati.

Non è la stessa cosa di un gioco che rallenta dopo 20 minuti. In un caso il problema è il calore sotto carico. Nell'altro è la gestione dell'invecchiamento della batteria.

Anche la soluzione cambia. Per il calore servono raffreddamento e un carico minore. Una batteria degradata richiede la sostituzione o abitudini di ricarica più conservative.

## Come capire se sta succedendo

Il segnale più evidente è un peggioramento delle prestazioni durante una sessione. Un gioco parte a 60 fps, poi cala. La fotocamera inizia a registrare senza problemi, poi mostra un avviso di temperatura. Lo schermo si oscura anche se non hai toccato la luminosità. La ricarica viene sospesa o rallenta drasticamente.

Può essere utile anche osservare dove si concentra il calore. Vicino alla fotocamera spesso indica il SoC. Al centro della scocca posteriore punta più verso la batteria o la bobina di ricarica wireless. In prossimità della porta USB-C può indicare stress sul cavo, sul caricabatterie o sul circuito di ricarica.

Le app che leggono lo stato termico di Android rendono la situazione meno vaga. Passare da None a Light e poi a Moderate durante una partita è normale. Raggiungere Severe, Critical o livelli vicini allo spegnimento durante un uso normale non lo è.

## Come ridurre la limitazione

Riduci il carico prima che il telefono debba farlo al posto tuo.

Nei giochi, abbassa prima il frame rate. Spesso è la modifica più efficace. Poi riduci risoluzione, ombre, effetti e qualità delle texture. Un'impostazione media con frame rate stabile di solito è migliore di una modalità ultra che rallenta dopo dieci minuti.

Togli la custodia durante l'uso intenso. Il pannello posteriore e la scocca fanno parte del sistema di dispersione del calore.

Usa il Wi-Fi invece della rete mobile quando il segnale è debole. Una copertura cellulare scarsa può trasformare una sessione normale in una sessione molto calda.

Evita il sole diretto. Un telefono può ridurre le prestazioni su un supporto da auto esposto al sole anche senza un carico estremo.

Non usare la ricarica rapida durante un uso intenso. Scollega il telefono oppure usa un caricabatterie meno potente se devi continuare a giocare.

Mantieni aggiornati app e sistema. I produttori regolano nel tempo il comportamento termico, e anche un aggiornamento difettoso di un'app può causare calore finché non viene corretto.

## Quando la limitazione indica un problema più serio

La limitazione durante un gioco impegnativo è normale. Mentre scrivi un messaggio su una scrivania fresca, no.

Se il telefono si scalda quando è inattivo, controlla l'utilizzo della batteria, la potenza del segnale, le app installate di recente e la modalità provvisoria. Se continua a scaldarsi in modalità provvisoria, oppure la batteria è gonfia, si scarica improvvisamente o il telefono si spegne con carica residua, trattalo come un problema hardware o della batteria.

Una capacità inferiore all'80 % è una soglia comune per valutare la sostituzione sui telefoni che mostrano questo dato. Sui Pixel supportati, Google indica come `Ridotta` una capacità inferiore all'80 %. In Samsung Members, lo stato della batteria può risultare `Normale`, `Debole` o `Cattivo`. Queste indicazioni sono più utili che cercare di indovinare lo stato della batteria dal calore.

## In sintesi

Il sistema di sicurezza termica del telefono non è il nemico. Puoi ridurne l'intervento diminuendo il carico, migliorando il raffreddamento, evitando ambienti caldi e non combinando ricarica rapida e uso intenso. Ma se il rallentamento si presenta durante attività leggere, non ignorarlo. In quel caso la causa può essere un'app, un segnale debole, il caricabatterie o una batteria usurata.
