---
title: "Ricarica USB-C spiegata: watt, ampere e volt"
description: "Cosa significano watt, ampere e volt nella ricarica di uno smartphone Android, come funziona USB Power Delivery e perché non tutti i caricabatterie USB-C offrono la stessa velocità."
listSummary: "Cosa significano watt, ampere e volt nella ricarica di uno smartphone Android."
hub: "charging"
sourceNumber: 46
order: 10
tags: ["ricarica","batteria","android","guida","hardware"]
locale: "it"
draft: false
---
I watt sono il dato che conta. Volt e ampere spiegano come il caricabatterie raggiunge quella potenza, ma i watt indicano quanta energia può fornire.

Un caricabatterie che eroga 9 V a 2 A fornisce 18 W. Uno che eroga 20 V a 3 A fornisce 60 W. Il calcolo è semplice: volt per ampere uguale watt.

Semplice. Finché non entra in gioco la negoziazione USB-C.

## Cosa significa l'etichetta del caricabatterie

La maggior parte dei caricabatterie USB-C riporta diverse combinazioni di uscita. Potresti vedere qualcosa del genere:

- 5 V/3 A = 15 W
- 9 V/3 A = 27 W
- 15 V/3 A = 45 W
- 20 V/3,25 A = 65 W

Sono i profili di potenza che il caricabatterie può offrire. Lo smartphone non prende automaticamente quello più alto. Richiede il profilo che supporta e il caricabatterie passa a quel livello.

Ecco perché un caricabatterie per notebook da 100 W non brucia uno smartphone da 18 W. Il telefono non richiede 100 W. Sceglie un profilo inferiore oppure torna alla ricarica di base se caricabatterie e smartphone non riescono a concordarne uno migliore.

## Come funziona la negoziazione USB Power Delivery

USB Power Delivery, abbreviato di solito in USB PD, è il principale standard aperto di ricarica rapida usato da molti smartphone Android, tablet, notebook e accessori.

Quando colleghi un cavo USB-C, il caricabatterie e lo smartphone comunicano tramite i pin Configuration Channel. Il caricabatterie dichiara i Power Data Object supportati, o PDO. Lo smartphone ne sceglie uno. A quel punto il caricabatterie fornisce tensione e corrente entro i limiti concordati.

Un caricabatterie USB PD da 45 W può offrire 5 V/3 A, 9 V/3 A, 15 V/3 A e 20 V/2,25 A. Uno smartphone che supporta una ricarica da 25 W può scegliere un profilo vicino a 9 V. Un notebook può scegliere 20 V dallo stesso alimentatore.

Il caricabatterie non spinge energia nello smartphone. È il telefono a prelevare quella che può usare.

## Perché PPS è importante

Lo standard USB PD usa livelli di tensione fissi, come 5 V, 9 V, 15 V e 20 V. PPS, cioè Programmable Power Supply, permette allo smartphone di richiedere variazioni più piccole di tensione e corrente all'interno dell'intervallo dichiarato dal caricabatterie.

È importante perché una batteria agli ioni di litio non ha bisogno della stessa tensione per tutta la sessione. Man mano che si riempie, cambiano le condizioni di ricarica ideali. Con una tensione fissa, una parte maggiore della conversione avviene dentro lo smartphone e produce calore. Con PPS, il caricabatterie può avvicinarsi di più a ciò che il telefono richiede in quel momento.

La Super Fast Charging di Samsung usa USB PD con PPS. Anche gli smartphone Pixel supportano PPS. Un normale caricabatterie USB PD senza PPS può comunque funzionare, ma su questi telefoni potrebbe non attivare la modalità di ricarica migliore.

## Quick Charge, VOOC, SUPERVOOC e HyperCharge

USB PD è quanto di più vicino esista a un linguaggio di ricarica comune per Android. Non è l'unico.

Qualcomm Quick Charge è stato molto diffuso sugli smartphone Android per anni. Le versioni più recenti si sovrappongono maggiormente a USB PD, ma adattatori e telefoni meno recenti possono ancora comportarsi in modo diverso rispetto a una configurazione USB PD pura.

OPPO VOOC e OnePlus SUPERVOOC seguono una strategia diversa. Spesso inviano una corrente elevata attraverso un caricabatterie e un cavo compatibili, così si genera meno calore dentro lo smartphone. Per questo possono essere molto veloci, ma anche piuttosto esigenti sugli accessori. Per raggiungere le potenze SUPERVOOC più alte servono uno smartphone, un alimentatore e un cavo compatibili con lo stesso sistema.

Xiaomi HyperCharge si comporta in modo simile su molti modelli. Un normale caricabatterie USB-C PD ricarica in genere questi telefoni, ma per raggiungere la potenza pubblicizzata spesso servono il caricabatterie e il cavo originali o compatibili con il protocollo.

Anche i nomi usati da Samsung possono trarre in inganno. Adaptive Fast Charging sui vecchi modelli Galaxy non è la stessa cosa di Super Fast Charging sui modelli più recenti. La modalità più nuova usa USB PD con PPS.

## Anche il cavo limita la velocità

Il cavo partecipa alla negoziazione. Trattarlo come un semplice filo crea molta confusione sulla ricarica.

Molti cavi USB-C sono progettati per 3 A. A 20 V bastano per 60 W. Per superare questa potenza serve un cavo da 5 A con chip e-marker, che permette al caricabatterie e al dispositivo di sapere che il cavo può gestire la corrente in sicurezza.

Le etichette di certificazione USB-IF sono diventate più chiare. I cavi USB-C certificati riportano potenze come 60 W o 240 W, mentre quelli con trasferimento dati più veloce possono mostrare anche il relativo logo della velocità. È molto più semplice che decifrare un lungo nome di versione USB.

Per gli smartphone, nella maggior parte dei casi basta un buon cavo USB-C da 60 W. Per notebook, tablet e caricabatterie ad alta potenza può essere utile un cavo da 240 W. Con i sistemi proprietari degli smartphone, il cavo abbinato può comunque contare più della potenza stampata sulla confezione.

## Quale caricabatterie conviene acquistare?

Per molti smartphone Android che usano USB PD o PPS, basta un caricabatterie USB-C PD PPS da 25-30 W. Copre la velocità di ricarica normale della maggior parte dei Pixel e di molti modelli Samsung.

Se hai un Samsung che supporta la ricarica a 45 W, scegli un caricabatterie PPS che dichiari espressamente il profilo da 45 W corretto. Se hai un OnePlus, OPPO o Xiaomi e vuoi raggiungere la velocità massima pubblicizzata, usa il caricabatterie e il cavo progettati per quel protocollo.

Acquistare più watt di quanti ne supporti lo smartphone non è un problema. Non danneggia il telefono e può essere utile se lo stesso alimentatore ricarica anche un notebook o un tablet. Non aspettarti però che un caricabatterie da 100 W ricarichi quattro volte più velocemente uno smartphone da 25 W.

Il consiglio meno appariscente è anche il migliore: scegli il protocollo giusto, non il numero più alto.
