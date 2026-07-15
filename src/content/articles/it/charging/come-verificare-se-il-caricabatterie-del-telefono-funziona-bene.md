---
title: "Come verificare se il caricabatterie del telefono funziona bene"
description: "Scopri come verificare se il caricabatterie del tuo telefono Android fornisce la potenza corretta usando app, cavi diversi, controlli fisici e misuratori USB."
listSummary: "Scopri come verificare se il caricabatterie del tuo telefono Android fornisce la potenza corretta usando app."
hub: "charging"
sourceNumber: 44
order: 8
tags: ["ricarica","batteria","android","guida","hardware"]
locale: "it"
draft: false
---
Un caricabatterie può superare la prova del connettore e fallire quella della ricarica. USB-C ti dice soltanto che la spina entra. Non ti dice se adattatore, cavo e telefono hanno concordato una modalità di ricarica rapida.

Android 17 non cambia questo problema di base. Non esiste ancora una schermata universale di Android che dica: "questo caricabatterie sta fornendo 23,4 W in questo momento". Devi ricavarlo dai dati disponibili oppure misurarlo nel modo corretto.

## Leggi prima la piccola etichetta con i valori di uscita

Comincia dalla parte noiosa: guarda l'adattatore. Giralo e cerca la riga Output. Potresti trovare valori come 5 V/3 A, 9 V/2,22 A o 20 V/3,25 A. Moltiplica i volt per gli ampere per ottenere i watt. Un profilo da 9 V/2,22 A corrisponde a circa 20 W. Uno da 20 V/3,25 A arriva a 65 W.

Un adattatore USB-A di base potrebbe indicare soltanto 5 V/1 A o 5 V/2 A. Significa 5 W o 10 W, valori lenti per un telefono moderno. Un caricabatterie USB-C PD elenca di solito più livelli di tensione e una potenza massima, per esempio 25 W, 45 W, 65 W o superiore.

Se non ci sono indicazioni, consideralo sospetto. Gli adattatori di buona qualità e di marchi noti riportano i valori di uscita, anche se a volte serve una torcia per leggerli.

## Usa un'app per un controllo rapido

Android rende disponibili tramite le API di sistema la corrente della batteria e altre proprietà correlate, quindi le app possono stimare quanta energia raggiunge la batteria. Ampere e AccuBattery sono due opzioni comuni per un controllo rapido.

Collega il caricabatterie, apri l'app e attendi 20-30 secondi affinché il valore si stabilizzi. Mantieni bassa la luminosità, chiudi le app pesanti e fai la prova con la batteria tra il 20% e il 70%. I telefoni rallentano la ricarica vicino al massimo, quindi una prova al 94% farà sembrare scarso anche un buon caricabatterie.

Interpreta il numero con cautela. Le app mostrano la corrente netta della batteria, non la potenza esatta erogata dall'adattatore alla presa. Il telefono consuma energia nello stesso momento, il circuito di ricarica ne perde una parte sotto forma di calore e alcuni dispositivi comunicano la corrente in modo diverso. Su certi modelli il dato può essere limitato, arrivare in ritardo o risultare poco utile.

Usa le letture delle app per confrontare, non come prova definitiva. Se un cavo mostra 400 mA e un altro 2.400 mA con lo stesso adattatore, hai scoperto qualcosa. Se un'app indica che un caricabatterie da 30 W ne sta fornendo soltanto 18, non significa automaticamente che sia difettoso.

## Cambia il cavo prima di accusare l'adattatore

I cavi possono guastarsi senza smettere del tutto di funzionare. Continuano a trasferire energia e sembrano a posto, ma il telefono passa a una modalità lenta perché il cavo non regge la corrente prevista o non negozia il profilo corretto.

Prova un cavo sicuramente funzionante. Quello fornito con il telefono è un buon punto di partenza. Va bene anche un cavo USB-C certificato di un produttore affidabile. Non usare un vecchio cavo sottile trovato in un cassetto e aspettarti un risultato significativo.

I danni vicino alle estremità sono comuni. Se il telefono si collega e scollega quando muovi il cavo, oppure il connettore resta allentato su più dispositivi, sostituiscilo. Non vale la pena continuare a fare prove per un'altra ora.

## Usa un misuratore USB se vuoi dati reali

Un misuratore di potenza USB-C in linea è il test più chiaro. Si inserisce tra il caricabatterie e il telefono e mostra sul proprio display tensione, corrente e watt. I modelli migliori visualizzano anche i dettagli di USB Power Delivery, compreso il profilo di tensione negoziato e l'eventuale uso di PPS.

È importante perché il telefono potrebbe non richiedere la potenza massima del caricabatterie. Un adattatore da 65 W collegato a un telefono limitato a 25 W dovrebbe fornire circa 25 W al picco, non 65 W. È normale.

Usa lo stesso cavo quando confronti più adattatori. Usa lo stesso adattatore quando confronti più cavi. Cambia una sola variabile alla volta, altrimenti il risultato diventa rumore.

Un misuratore può anche rivelare problemi del cavo che un'app fatica a mostrare. Se l'adattatore è pronto a fornire 9 V ma il telefono torna continuamente a 5 V, probabilmente c'è un problema di negoziazione, non soltanto una lettura bassa della corrente della batteria.

## Controlla i segnali fisici di pericolo

È normale che un caricabatterie diventi tiepido durante la ricarica rapida. Non è normale che diventi troppo caldo per poterlo tenere in mano.

Controlla anche se emette ronzii, odore di bruciato, presenta plastica crepata, contatti piegati, segni di bruciatura, porte USB allentate o un'estremità del cavo che si muove dentro la porta del telefono. Anche una ricarica intermittente è un brutto segno. Se l'icona compare e scompare, smetti di usare il cavo o l'adattatore finché non hai isolato la causa.

Con i caricabatterie contraffatti e molto economici non rischierei. I telefoni moderni hanno circuiti di protezione, ma tensione instabile e isolamento insufficiente restano problemi seri. Risparmiare pochi euro su un adattatore senza marchio non ne vale la pena.

## Abbina il protocollo di ricarica rapida

Un caricabatterie può essere buono e comunque poco adatto al tuo telefono. Google Pixel e molti modelli Samsung usano USB-C Power Delivery; per ottenere le migliori modalità Samsung di ricarica ultrarapida serve anche il supporto PPS. I telefoni OnePlus e OPPO richiedono spesso caricabatterie e cavi compatibili con SUPERVOOC per raggiungere la velocità massima. Anche Xiaomi HyperCharge ha requisiti propri.

Quando i protocolli non corrispondono, il telefono di solito passa a una modalità USB più lenta. Non si rompe. Semplicemente non carica alla massima velocità.

Un caricabatterie per laptop da 65 W può caricare in sicurezza un telefono che supporta solo 25 W, perché è il telefono a richiedere la potenza utilizzabile. Il valore superiore indica soltanto che l'adattatore ha abbastanza margine anche per laptop, tablet e altri dispositivi.

## Quando sostituirlo

Sostituisci il caricabatterie se si surriscalda, ha un odore insolito, ronza forte, presenta plastica danneggiata oppure dà risultati instabili con più cavi buoni e più dispositivi. Sostituisci il cavo se il problema segue il cavo.

Se entrambi funzionano normalmente con altri dispositivi, il telefono potrebbe limitare la ricarica perché la batteria è calda, la porta è sporca, il livello è quasi al massimo oppure il dispositivo non supporta il protocollo di ricarica rapida di quel caricabatterie.
