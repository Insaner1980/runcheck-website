---
title: "Come verificare se il telefono supporta il 5G"
description: "Come capire se uno smartphone Android supporta il 5G, perché l'icona 5G può non comparire e che ruolo hanno bande, piano tariffario e operatore."
listSummary: "Come capire se uno smartphone Android supporta il 5G."
hub: "network"
sourceNumber: 101
order: 12
tags: ["rete","connettivita","android","risoluzione-dei-problemi","guida"]
locale: "it"
draft: false
---
Un telefono ha l'hardware 5G oppure non ce l'ha. Android 17, un aggiornamento delle impostazioni dell'operatore o una nuova SIM non possono trasformare un modem solo 4G in un modem 5G.

Sembra ovvio, ma è una fonte frequente di confusione. Molti smartphone Android economici recenti sono ancora limitati al 4G, mentre diversi vecchi top di gamma supportano già il 5G. Il numero di modello conta più dell'anno stampato sulla ricevuta.

## Controlla prima le impostazioni di rete

La verifica più rapida si fa dalle impostazioni di Android.

Su Pixel e su molti telefoni con Android quasi stock, apri `Impostazioni > Rete e internet > SIM`, seleziona l'operatore e cerca `Tipo di rete preferito`. Se tra le opzioni compare `5G`, `NR` o `5G/LTE`, il telefono supporta il 5G con quella versione software e quel profilo operatore.

Su Samsung, controlla `Impostazioni > Connessioni > Reti mobili > Modalità di rete`.

Su Xiaomi e POCO, controlla `Impostazioni > Schede SIM e reti mobili > Tipo di rete preferita`.

Su OnePlus, cerca la voce relativa alla rete mobile, quindi apri le impostazioni della SIM o del tipo di rete preferito. Il percorso preciso cambia in base alla versione di OxygenOS.

Se l'opzione più alta è LTE, 4G, 3G o 2G, il telefono potrebbe supportare soltanto il 4G. Dico “potrebbe” perché alcuni operatori nascondono le opzioni 5G quando il piano, la SIM o la regione non le supportano. Le specifiche esatte del modello risolvono il dubbio.

## Cerca il numero di modello esatto

Apri `Impostazioni > Informazioni sullo smartphone` e annota il numero di modello, non soltanto il nome commerciale. Un `Galaxy A55 5G` e una variante regionale di un altro modello della serie A possono avere un supporto di rete diverso. Lo stesso vale per molti telefoni Xiaomi, Motorola, OPPO e Vivo.

Cerca prima il numero di modello nella pagina del produttore. GSMArena è utile per un controllo rapido, ma in caso di differenze fanno fede le specifiche del produttore.

Nella sezione dedicata alla rete, cerca le bande `5G NR`. Tra le bande 5G sub-6 GHz più comuni ci sono n28, n41, n71, n77 e n78, a seconda del paese e dell'operatore. Le bande mmWave, come n260 e n261, sono usate in meno aree e in genere soltanto da varianti specifiche del telefono.

Se la scheda tecnica elenca soltanto GSM, WCDMA, LTE o bande 4G, il telefono non supporta il 5G.

## Un telefono 5G ha bisogno anche di altre tre cose

L'hardware è soltanto il primo requisito.

Serve un piano dell'operatore che includa l'accesso al 5G. Alcune offerte lo includono automaticamente, altre offerte prepagate o meno recenti no. Con i piani aziendali e gli operatori virtuali la situazione può essere particolarmente variabile.

Serve copertura 5G nel punto in cui ti trovi. La mappa dell'operatore è un punto di partenza, non una garanzia. Negli edifici la copertura può essere molto peggiore rispetto all'esterno, soprattutto sulle frequenze 5G più alte.

Serve anche la compatibilità con le bande. È l'aspetto che più spesso viene trascurato. Un telefono importato da un'altra regione può supportare il 5G in un paese ma non le bande usate dal tuo operatore. Può quindi essere “compatibile con il 5G” e comportarsi comunque come un telefono 4G sulla tua rete.

## Guarda la barra di stato, ma non fidarti troppo

Quando il telefono è collegato al 5G, nella barra di stato compare in genere `5G`. In base al paese e all'operatore potresti vedere etichette come `5G+`, `5G UW` o `5G UC`.

L'assenza dell'icona 5G non significa automaticamente che il telefono non lo supporti. Potresti essere fuori copertura, in un edificio che attenua il segnale, su un'offerta solo 4G, con un profilo SIM errato o collegato a un operatore che disabilita il 5G su uno degli slot SIM.

Se compare `5G E`, consideralo un marchio commerciale per LTE, non vero 5G. AT&T ha usato questa etichetta negli Stati Uniti per un servizio 4G LTE potenziato, creando confusione per anni.

## Controlla il processore, ma non fermarti lì

Il SoC indica spesso se il 5G è almeno possibile. Qualcomm Snapdragon 480 e i chip successivi esplicitamente indicati come 5G, molti Snapdragon delle serie 6, 7 e 8 Gen, i MediaTek Dimensity, i Samsung Exynos 1280 e i successivi chip 5G di fascia media o alta, oltre a tutti i Google Tensor, sono esempi comuni.

I nomi dei processori, però, non sono sempre chiari. Alcuni Snapdragon della serie 600 sono limitati al 4G. Alcuni telefoni usano una piattaforma compatibile con il 5G ma vengono venduti anche in una variante 4G. I MediaTek Helio G sono in genere solo 4G, mentre Dimensity identifica la linea 5G.

Usa il processore come indizio, poi verifica il modello completo del telefono e le bande supportate.

## Android 17 non cambia la risposta dell'hardware

Google ha pubblicato Android 17 il 16 giugno 2026, rendendolo disponibile sulla maggior parte dei Pixel supportati. I nuovi dispositivi e gli altri produttori seguono calendari propri. L'aggiornamento può migliorare firmware del modem, comportamento con gli operatori e stabilità della rete sui telefoni compatibili.

Non può aggiungere il 5G a un modem 4G. Se il telefono non supportava il 5G prima di Android 17, non lo supporterà dopo l'aggiornamento.

## 5G SA e NSA

Esistono due modalità generali di distribuzione del 5G.

NSA, cioè Non-Standalone 5G, usa la radio 5G insieme a una rete centrale 4G. Questo ha permesso agli operatori di introdurre il 5G più rapidamente.

SA, cioè Standalone 5G, usa una rete centrale 5G. Può migliorare latenza, efficienza della rete e funzionalità future, ma la disponibilità varia ancora molto tra operatori e zone.

Per navigazione, mappe, messaggi o video, la maggior parte delle persone non deve preoccuparsi troppo della differenza tra SA e NSA. Diventa più importante se l'operatore sposta alcune funzioni sulla rete SA, se usi uno dei primi telefoni 5G o se ti serve la latenza più bassa possibile.

## Perché un telefono 5G mostra sempre LTE

Procedi in quest'ordine:

- Verifica che `Tipo di rete preferito` includa 5G o NR.
- Controlla che l'offerta includa il 5G.
- Consulta la mappa di copertura dell'operatore per il punto esatto.
- Esci all'aperto o avvicinati a una finestra per escludere l'attenuazione del segnale all'interno.
- Assicurati che la SIM o la eSIM sia attiva e impostata per i dati mobili.
- Controlla se la modalità dual SIM disabilita il 5G sul tuo modello.
- Confronta le bande 5G NR del telefono con quelle usate dall'operatore.
- Installa gli aggiornamenti di sistema e dell'operatore disponibili.

Se è tutto a posto ma il telefono non rileva mai il 5G, prova un'altra SIM dello stesso operatore oppure chiedi all'assistenza di aggiornare il provisioning della linea.

## Vale la pena cambiare telefono per il 5G?

A volte. Questa è la risposta più corretta.

In una città con una buona copertura 5G mid-band o mmWave, la differenza di velocità può essere evidente. I download finiscono prima, l'hotspot funziona meglio e la latenza può diminuire. In una zona rurale con copertura 5G debole o discontinua, una buona connessione 4G può risultare migliore di un telefono che passa continuamente tra LTE e 5G.

Se il telefono attuale funziona bene e nella tua zona il 5G è debole, non cambiarlo soltanto per vedere l'icona. Valuta il telefono nel suo insieme: batteria, fotocamera, supporto agli aggiornamenti, memoria, RAM e qualità del modem.
