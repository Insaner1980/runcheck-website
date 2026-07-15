---
title: "Quando un telefono è troppo caldo?"
description: "La temperatura del telefono dipende dal calore ambientale, dalla batteria, dalla ricarica e dal carico. Sotto 35 °C è in genere normale, sopra 40 °C serve attenzione e 45 °C o più non dovrebbe essere abituale."
listSummary: "La temperatura del telefono dipende dal calore ambientale, dalla batteria, dalla ricarica e dal carico."
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["temperatura","termico","android","risoluzione-dei-problemi","hardware"]
locale: "it"
draft: false
---
Quanto caldo è troppo caldo? La risposta irritante è che dipende dalla temperatura che stai misurando.

La temperatura dell'aria attorno al telefono è un dato. Quella della superficie esterna è un altro. Il sensore della batteria ne mostra un altro ancora, ed è quello che conta di più per l'invecchiamento. Il telefono può sembrare appena tiepido in mano mentre la batteria o il SoC sono già abbastanza caldi da costringere Android a rallentare.

Molti smartphone, compresi i Google Pixel, sono progettati per funzionare al meglio con temperature ambientali da 0 °C a 35 °C. Si parla della temperatura della stanza o dell'aria esterna, non di quella interna della batteria. Durante il funzionamento, l'interno del telefono è più caldo dell'ambiente circostante.

## Zone di temperatura pratiche

Questi intervalli sono indicazioni pratiche per l'utente, non una specifica universale del produttore. I telefoni usano sensori e limiti termici diversi. Restano comunque abbastanza utili per la diagnosi quotidiana.

### Sotto 20 °C

È una temperatura fresca. Un telefono inattivo in una stanza fredda può trovarsi in questa zona. Non c'è un problema di calore, anche se temperature molto basse possono far sembrare la batteria più debole finché non torna a scaldarsi.

### Da 20 °C a 35 °C

È la zona confortevole per la temperatura della batteria durante un uso leggero. Messaggi, navigazione web, chiamate, musica e brevi video dovrebbero in genere rientrare qui. Se il telefono trascorre gran parte della giornata in questo intervallo, il calore non è il problema.

### Da 35 °C a 40 °C

Il telefono è caldo. È comune durante la ricarica rapida, le videochiamate, la navigazione GPS, i giochi, l'uso della fotocamera o dell'hotspot. Periodi brevi in questa zona vanno bene. Restarci per ore ogni giorno è diverso, perché l'invecchiamento della batteria accelera con l'aumento della temperatura.

### Da 40 °C a 45 °C

Il telefono è molto caldo. Probabilmente lo sentirai attraverso il retro o la scocca. La ricarica può rallentare, lo schermo può oscurarsi, la fotocamera può disattivare il flash e i giochi possono perdere prestazioni.

Non farti prendere dal panico per un breve picco a 42 °C durante un'attività pesante. Fai invece attenzione se il telefono resta a 42 °C sul comodino mentre si ricarica o quando non sta facendo nulla.

### Sopra 45 °C

È troppo caldo per un uso normale. A questo punto il telefono dovrebbe ridurre nettamente il carico. La ricarica può fermarsi, le prestazioni possono calare, le radio possono essere limitate e possono comparire avvisi di temperatura.

L'esposizione ripetuta sopra 45 °C mette a dura prova le batterie agli ioni di litio. Il problema non è un singolo picco di cinque minuti. Il problema è trasformarlo in una routine quotidiana.

### Sopra 50 °C

Questa è la zona di pericolo. Un uso normale non dovrebbe portare un telefono sano a questa temperatura in una stanza normale. Sole diretto, un'auto calda, un caricabatterie difettoso, una batteria guasta o un uso intenso durante la ricarica possono riuscirci.

Spegni il telefono se puoi, spostalo in un luogo più fresco e lascialo raffreddare naturalmente. Non metterlo nel congelatore. La condensa sarebbe un modo assurdo di trasformare un problema di calore in un problema d'acqua.

## Come controllare la temperatura

Android non offre ancora a ogni telefono una comoda pagina con la temperatura della batteria. In teoria, nel 2026 dovrebbe essere più semplice. In pratica, dipende ancora dal marchio.

Sui Pixel supportati, **Impostazioni > Batteria > Stato della batteria** mostra lo stato e la capacità stimata, ma non garantisce una lettura della temperatura in tempo reale. Google limita questa funzione completa a Pixel 8a e modelli successivi, e non la offre su Pixel Tablet. I Pixel più vecchi possono mostrare altre informazioni sulla batteria, ma non la stessa schermata di stato.

Chi usa Samsung dovrebbe iniziare da **Samsung Members > Supporto > Diagnostica dello smartphone > Stato batteria**. Anche questo controllo riguarda soprattutto le condizioni della batteria, e non tutti i Galaxy mostrano la temperatura grezza. Alcuni modelli hanno menu diagnostici aggiuntivi, ma cambiano in base a regione e dispositivo. Xiaomi, OnePlus, OPPO e altri marchi spostano queste pagine abbastanza spesso da rendere più sicuro cercare prima nelle sezioni Batteria, Protezione batteria o Assistenza dispositivo, senza dare per universale un percorso preciso.

Il vecchio codice di test Android `*#*#4636#*#*` apre ancora le informazioni sulla batteria su alcuni telefoni. Molti modelli recenti lo bloccano. Strumenti di terze parti come CPU-Z, DevCheck, AIDA64 o runcheck possono leggere il sensore della temperatura della batteria su molti dispositivi, ma l'accesso dipende comunque da ciò che il produttore espone.

runcheck è utile quando ti interessano gli andamenti, non una singola lettura. Registra la temperatura della batteria nel tempo, conserva i valori minimi e massimi della sessione e colloca la lettura corrente in fasce pratiche come Cool, Normal, Warm, Hot e Critical.

## Perché la temperatura ambiente cambia tutto

Un telefono ha margine termico solo quando l'aria circostante è più fresca del dispositivo. A 22 °C in casa, la batteria può restare inattiva attorno a 26-30 °C e avere ancora spazio per scaldarsi durante l'uso. A 35 °C all'aperto, quel margine è quasi esaurito prima ancora di aprire Maps.

Ecco perché un telefono può comportarsi perfettamente in inverno e sembrare guasto a luglio. Stesso telefono. Punto di partenza diverso.

Le auto sono il peggior esempio quotidiano. Google avverte gli utenti Pixel di non esporre il dispositivo a temperature superiori a 45 °C, per esempio sul cruscotto o vicino a una bocchetta di riscaldamento. Un telefono lasciato in un'auto parcheggiata non deve essere in carica o far girare un gioco per invecchiare la batteria. Basta il calore.

## Il freddo è diverso

Il freddo rende lente le batterie agli ioni di litio. Il telefono può mostrare meno carica disponibile, sembrare più lento o spegnersi prima del previsto. Quando torna a scaldarsi, gran parte di questo comportamento scompare.

Il vero rischio invernale è ricaricare sotto zero. Sull'anodo può formarsi una placcatura di litio quando una cella agli ioni di litio viene ricaricata sotto 0 °C, e il danno è permanente. La maggior parte dei telefoni moderni cerca di impedirlo, ma non mettere alla prova il limite. Se il telefono è rimasto all'aperto con temperature sotto zero, lascialo salire sopra 0 °C, preferibilmente vicino alla temperatura ambiente, prima di ricaricarlo.

## Il calore prolungato conta più dei picchi brevi

L'invecchiamento della batteria non è un precipizio. Non esiste una linea magica per cui la batteria è perfetta a 39 °C e rovinata a 40 °C. Il calore accelera le reazioni chimiche secondarie, soprattutto quando la batteria è anche vicina alla carica completa.

Un telefono che raggiunge 42 °C per cinque minuti durante una ricarica rapida e poi torna a 30 °C probabilmente non ha problemi. Un telefono che resta a 38 °C per tutta la notte perché si ricarica in wireless sotto una custodia su una superficie morbida subisce più usura silenziosa. Il numero più basso può essere peggiore perché dura più a lungo.

È questo che spesso sfugge. La temperatura massima conta, ma il tempo trascorso a quella temperatura conta di più.

## Cosa fare quando il valore è alto

Sposta il telefono lontano dal sole diretto. Scollega il caricabatterie. Togli la custodia. Chiudi l'app pesante. Appoggialo su una superficie rigida con aria libera attorno.

Dopo che si è raffreddato, cerca la causa. Era la ricarica rapida? La ricarica wireless? Un gioco? La navigazione su un supporto in auto? Un aggiornamento recente ad Android 17 su un Pixel? Un'app rimasta bloccata in background dopo un aggiornamento? La soluzione dipende dallo schema.

Se il telefono raggiunge 45 °C o più durante un uso normale, oppure arriva nella zona dei 50 °C senza una causa evidente, consideralo un segnale per una riparazione più che un problema di impostazioni.

---
