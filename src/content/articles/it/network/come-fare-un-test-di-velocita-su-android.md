---
title: "Come fare un test di velocità su Android"
description: "Tocchi Avvia, guardi l'indicatore salire e ottieni un numero che sembra definitivo. Utile, sì. Una risposta completa, no."
listSummary: "Tocchi Avvia, guardi l'indicatore salire e ottieni un numero che sembra definitivo."
hub: "network"
sourceNumber: 92
order: 3
tags: ["rete","connettivita","android","risoluzione-dei-problemi","guida"]
locale: "it"
draft: false
---
Il test mostra cosa è successo in quel momento, con quel server e in quelle condizioni di rete. È un'istantanea, non una diagnosi. Resta comunque il primo dato da raccogliere quando il telefono sembra lento.

## Che cosa misura il test

Un normale test mostra velocità di download, velocità di upload e latenza.

La velocità di download indica quanto rapidamente i dati arrivano al telefono. Influisce sulla navigazione, sullo streaming, sul download delle app, sulla visualizzazione delle foto nel cloud e sulla maggior parte delle attività quotidiane online.

La velocità di upload indica quanto rapidamente i dati partono dal telefono. Conta quando invii video, fai il backup delle foto, carichi file, partecipi a videochiamate o condividi lo schermo.

La latenza, spesso chiamata ping, è il ritardo di andata e ritorno misurato in millisecondi. Una latenza bassa rende la connessione reattiva. Una latenza alta fa sembrare lenti tocchi, chiamate, giochi e lavoro da remoto anche quando il download è veloce.

Alcune app mostrano anche il jitter, cioè quanto varia la latenza da un momento all'altro. Un ping di 30 ms con jitter basso è stabile. Un ping di 30 ms che continua a oscillare può comunque causare chiamate a scatti.

## Usa il test integrato di Google per un controllo rapido

Apri un browser, cerca **speed test** su Google e avvia il test dalla scheda che compare nei risultati, se disponibile. Usa Measurement Lab, o M-Lab, e mostra i valori principali senza richiedere l'installazione di un'app.

È adatto a un controllo veloce. Non offre una cronologia dettagliata e non è lo strumento migliore per confrontare più reti nel tempo. Però, quando qualcuno dice "Internet è lento", permette di capire subito se il telefono sta ricevendo 2 Mbps o 200 Mbps.

## Usa un'app quando ti serve la cronologia

Speedtest by Ookla è l'opzione più conosciuta. Misura download, upload, latenza e in genere anche jitter, consente di scegliere i server e conserva la cronologia dei risultati. È utile per confrontare Wi-Fi, LTE, 5G e luoghi diversi.

FAST by Netflix è più semplice. Mette in primo piano il download perché nasce per valutare le prestazioni dello streaming. Tocca **Mostra altre informazioni** per vedere anche upload e latenza.

Meteor by OpenSignal è utile per chi non vuole interpretare numeri tecnici, perché spiega se la connessione misurata è sufficiente per attività comuni come streaming, giochi, navigazione o videochiamate.

runcheck usa M-Lab NDT7 per il test di velocità integrato e salva i risultati insieme al tipo di connessione e al contesto del segnale. È importante, perché la velocità da sola può trarre in inganno. Un risultato scarso con segnale debole significa qualcosa di diverso da un risultato scarso con segnale forte e latenza alta.

## Fai attenzione al consumo di dati mobili

Ogni test trasferisce dati reali. Sul Wi-Fi, di solito, non è un problema. Sulla rete mobile può esserlo.

I test web più piccoli possono usare solo alcune decine di MB. Le app, su una connessione LTE o 5G veloce, possono consumarne molti di più perché cercano di misurare quanti dati riesce a spostare la connessione durante il tempo previsto. Più test consecutivi possono consumare centinaia di MB.

Prova quindi i dati mobili con criterio. Disattiva il Wi-Fi, avvia il test una o due volte, salva i risultati e fermati.

## Come ottenere un risultato più pulito

Resta fermo. Se ti muovi durante un test cellulare, il telefono può cambiare cella, banda o condizioni del segnale mentre la misurazione è in corso.

Chiudi prima le attività che consumano molta banda. Backup nel cloud, aggiornamenti delle app, streaming video e download competono con il test.

Prova Wi-Fi e dati mobili separatamente. Se il Wi-Fi è attivo, stai misurando il Wi-Fi. Per misurare la rete cellulare, disattivalo.

Fai tre test solo quando ti serve una media più affidabile. Se un risultato è molto diverso dagli altri due, scartalo. Probabilmente ha intercettato un breve picco di congestione, una scelta poco favorevole del server o un trasferimento in background.

Per la normale risoluzione dei problemi, usa un server vicino. Un server lontano aumenta la latenza e può mostrare una velocità inferiore per motivi che non dipendono dalla connessione locale. Ha senso scegliere server lontani solo se vuoi misurare l'accesso a servizi in quella regione.

## Che cosa significano i numeri nell'uso reale

Per navigazione e messaggi, anche 5 Mbps possono bastare se la latenza è bassa. Per video HD, in genere sono sufficienti 5-10 Mbps. Per lo streaming 4K, punta ad almeno 25 Mbps per ogni flusso.

Le videochiamate dipendono da upload e latenza più di quanto molti pensino. Un download da 200 Mbps non salva una chiamata se l'upload è di 0,5 Mbps o il jitter è alto.

Nei giochi, una volta installato il titolo, latenza e jitter contano più della velocità di download. Una connessione stabile da 40 Mbps può risultare migliore di una da 400 Mbps con picchi casuali di latenza.

Per il backup nel cloud, è l'upload a decidere quanto sarà lenta l'operazione. Nelle connessioni domestiche e mobili l'upload è spesso molto più basso del download, quindi un download veloce non garantisce backup rapidi.

## Confronta il risultato con la promessa giusta

Per il Wi-Fi di casa, confronta il risultato con il piano della connessione fissa, lasciando un margine per l'overhead del Wi-Fi. Se il piano è da 100 Mbps e il telefono raggiunge 80 o 90 Mbps vicino al router, non c'è un problema. Se arriva a 25 Mbps accanto al router, controlla router, congestione dei canali, provider o altri dispositivi che stanno usando banda.

Sulla rete cellulare, non aspettarti il valore pubblicitario massimo del 5G. La velocità reale dipende da operatore, banda, carico della cella, condizioni del piano, segnale negli interni e modem del dispositivo. Prova in più luoghi prima di dare la colpa al telefono.

Confronta anche il risultato con ciò che devi fare. Se Netflix funziona, le chiamate sono pulite e le app si scaricano senza problemi, inseguire un numero più bello nel test può essere una perdita di tempo.

## Conserva i risultati solo quando raccontano qualcosa

Un singolo risultato basta per confermare che qualcosa non va. Alcuni test distribuiti nel tempo sono più utili per trovare uno schema.

Fai un test quando la connessione va male, poi ripetilo quando torna normale. Annota rete, luogo, ora, potenza del segnale e presenza di una VPN.

Qui la cronologia diventa utile. Se il Wi-Fi rallenta ogni sera, sospetta il carico domestico o la congestione del provider. Se la rete cellulare è lenta solo in un edificio, sospetta la copertura. Se tutte le reti sono lente soltanto su un telefono, guarda il telefono.
