---
title: "Come confrontare la velocità dei caricabatterie su Android"
description: "Metodi pratici per confrontare la velocità dei caricabatterie Android usando app, misuratori USB, strumenti integrati nel telefono e prove controllate."
listSummary: "Metodi pratici per confrontare la velocità dei caricabatterie Android usando app."
hub: "charging"
sourceNumber: 45
order: 9
tags: ["ricarica","batteria","android","guida","hardware"]
locale: "it"
draft: false
---
Colleghi il caricabatterie vicino al letto e il telefono indica Ricarica rapida. Colleghi quello sulla scrivania e compare la stessa dicitura. Con uno arrivi all'80% prima che il caffè sia pronto, con l'altro no.

La scritta non basta. Devi confrontare la potenza che il telefono accetta davvero.

## Perché due caricabatterie possono sembrare tanto diversi

La velocità di ricarica dipende da una negoziazione tra tre elementi: caricabatterie, cavo e telefono. Il caricabatterie dichiara ciò che può fornire. Il cavo può limitare la corrente. Il telefono decide cosa richiedere in base ai protocolli supportati, al livello della batteria, alla temperatura e alle proprie regole di ricarica.

Se telefono e caricabatterie supportano entrambi USB Power Delivery a 9 V/3 A, possono accordarsi intorno a 27 W. Se il caricabatterie offre soltanto una normale uscita USB da 5 V/1 A, lo stesso telefono riceve 5 W. Un adattatore più potente non può ignorare ciò che il telefono richiede.

I cavi contano più di quanto molti immaginino. Un normale cavo USB-C da 3 A va bene per molti telefoni, ma non abilita ogni modalità ad alta potenza. Sistemi proprietari come OnePlus SUPERVOOC, OPPO VOOC e alcune configurazioni Xiaomi HyperCharge richiedono spesso caricabatterie e cavo corrispondenti. Un cavo USB-C generico può comunque caricare il telefono, ma a una velocità molto inferiore.

La temperatura è la variabile silenziosa. Un telefono che ha appena eseguito un gioco, registrato un video o è rimasto al sole può limitare la ricarica anche con il miglior caricabatterie disponibile. Se provi un telefono caldo, il confronto sarà falsato.

## La prova rapida con un'app

Per un confronto veloce, usa un'app come Ampere o AccuBattery. Collega il caricabatterie A, attendi che la lettura si stabilizzi e annota corrente e tensione. Collega il caricabatterie B con lo stesso cavo e ripeti.

Mantieni il livello della batteria nello stesso intervallo per ogni prova. Tra il 20% e il 50% è una buona finestra, perché la maggior parte dei telefoni carica in modo aggressivo. Confrontare un caricabatterie al 25% e un altro al 78% non è corretto. Il secondo sembrerà quasi sempre più lento perché il telefono ha già iniziato a ridurre la potenza.

Le letture delle app sono utili, ma non perfette. Misurano ciò che comunica il lato batteria, non l'uscita esatta alla presa. Schermo, processore, radio e circuiti di ricarica incidono tutti sul valore. Per questo il metodo è adatto a individuare differenze evidenti, non a dimostrare una potenza precisa.

## La prova con un misuratore di potenza

Un misuratore USB-C offre risultati più puliti. Inseriscilo tra caricabatterie e cavo, poi osserva tensione, corrente e watt in tempo reale. I modelli che decodificano USB PD possono mostrare anche il profilo negoziato, spesso il dettaglio che mancava.

Usa un solo cavo per tutte le prove degli adattatori. Se vuoi confrontare i cavi, usa un solo adattatore e cambia esclusivamente il cavo. Può sembrare eccessivamente preciso, ma è la differenza tra una prova e un'ipotesi.

Il misuratore aiuta anche a spiegare risultati strani. Immagina che un caricabatterie da 45 W mostri soltanto 15 W. Potrebbe supportare 45 W, ma non la tensione o l'intervallo PPS preferito dal telefono. Oppure il cavo limita la sessione. O il telefono è troppo caldo. Il misuratore non risolve il problema, ma indica dove cercare.

## Indizi integrati nel telefono

Alcuni telefoni Android forniscono indicazioni utili senza mostrare i watt esatti.

I telefoni Samsung mostrano diciture come Ricarica, Ricarica rapida, Ricarica ultrarapida e Ricarica ultrarapida 2.0, a seconda di caricabatterie e modello. Nelle versioni recenti di One UI, le impostazioni della batteria si trovano in `Impostazioni > Batteria`. Samsung Members può anche controllare Stato batteria, Ricarica tramite cavo e Ricarica wireless nella Diagnostica dello smartphone.

I Pixel mostrano il tempo stimato per completare la ricarica nelle impostazioni Batteria dopo il collegamento. Non è un misuratore di watt, ma un caricabatterie che indica 1 ora e 20 minuti si comporta chiaramente in modo diverso da uno che ne indica 3.

I telefoni Xiaomi e OnePlus mostrano spesso un'animazione con il marchio o una potenza durante la ricarica rapida. Non sono strumenti da laboratorio, ma servono a capire se un caricabatterie attiva la modalità a piena velocità e un altro no.

## Un confronto equo di 30 minuti

Per ottenere un confronto attendibile:

1. Porta il telefono alla stessa percentuale iniziale ogni volta, idealmente intorno al 20%.
2. Lascialo raffreddare per qualche minuto.
3. Usa lo stesso cavo.
4. Attiva la modalità aereo o almeno lascia il telefono inattivo.
5. Carica per 30 minuti e annota la percentuale finale.

Ripeti con il caricabatterie successivo partendo dalla stessa percentuale. Quello che aggiunge più carica nello stesso intervallo è il più veloce per quel telefono.

Non prolungare la prova fino al 100%. L'ultima parte è volutamente più lenta e nasconde la vera differenza tra i caricabatterie. L'intervallo tra 20% e 80% è più utile.

## Ricarica via cavo e wireless

Puoi confrontare nello stesso modo la ricarica via cavo e quella wireless, ma non sorprenderti se il wireless perde. I vecchi caricabatterie Qi e molte combinazioni di telefoni restano tra 5 W e 15 W. Qi2 ha introdotto la ricarica magnetica da 15 W e ora esiste anche Qi2 25W, ma telefono e caricabatterie devono supportare lo stesso standard.

USB-C via cavo resta la scelta più sicura per la velocità. La ricarica wireless punta soprattutto su comodità, posizionamento e minore usura del connettore. Di solito non è il percorso più rapido, soprattutto se il telefono si scalda sulla base.

## Come aiuta runcheck

runcheck include in Pro la funzione Confronto caricabatterie. Collega un caricabatterie, assegnagli un nome e l'app registra la velocità durante la sessione. Dopo aver provato più caricabatterie e cavi, puoi confrontare fianco a fianco la media in mAh all'ora e la potenza in watt.

È utile perché il caricabatterie migliore non è sempre quello con il numero più alto. Una configurazione stabile e fresca da 25 W può essere più pratica di un caricabatterie che raggiunge un picco elevato per due minuti e poi rallenta perché il telefono si scalda.

## Alcuni problemi comuni

L'ordine delle prove conta. Un telefono al 25% carica quasi sempre più velocemente dello stesso telefono al 75%.

Un caricabatterie da 65 W non costringerà un telefono da 25 W ad assorbire 65 W. Decide il telefono.

Se due caricabatterie si comportano quasi allo stesso modo, usa quello che rimane più fresco. Il calore è il nemico, anche quando il tempo di ricarica sembra identico.
