---
title: "Cosa sono gli aggiornamenti di sistema Google Play?"
description: "Apri la schermata degli aggiornamenti Android e probabilmente vedrai due date diverse. Una indica il livello patch di sicurezza Android. L'altra mostra la data di un aggiornamento modulare di Google."
listSummary: "Apri la schermata degli aggiornamenti Android e probabilmente vedrai due date diverse."
hub: "software"
sourceNumber: 124
order: 6
tags: ["android","aggiornamenti","sicurezza","software","guida"]
locale: "it"
draft: false
---
Sembra un errore. Di solito non lo è.

Sono due canali di aggiornamento distinti. Il livello patch di sicurezza arriva tramite il produttore del telefono, per esempio Google, Samsung, Xiaomi, OnePlus o Motorola. L'altra data proviene dal sistema modulare di aggiornamento Android di Google, sui dispositivi che lo supportano.

## In breve

Gli aggiornamenti Mainline correggono parti selezionate di Android senza aspettare un aggiornamento completo del sistema da parte del produttore.

Non sostituiscono i normali aggiornamenti Android. Non portano il telefono da Android 16 ad Android 17. Non correggono ogni vulnerabilità. Consentono però a Google di aggiornare alcuni componenti del sistema operativo attraverso la stessa ampia infrastruttura di distribuzione usata da Google Play.

Il motivo è che gli aggiornamenti Android attraversano una lunga catena. Google pubblica il codice. I produttori di chip e di dispositivi lo integrano. Gli operatori possono testarlo. Solo dopo l'aggiornamento arriva sul telefono. Per componenti specifici, il canale modulare salta una parte di questa catena.

## Come funziona Project Mainline

La tecnologia si chiama Project Mainline. Nella documentazione Android veniva indicata anche come sistema di componenti modulari. È stata introdotta con Android 10.

Mainline divide alcune parti di Android in moduli. Alcuni usano il formato APK e si comportano in modo più simile ai pacchetti delle app. Altri usano il formato APEX, possono essere caricati prima durante l'avvio e gestiscono componenti più profondi del sistema.

Il punto importante è l'installazione atomica. Se un gruppo di aggiornamenti modulari non può essere installato correttamente, Android lo ripristina invece di lasciare il telefono aggiornato a metà.

Bene così. In questo caso, la noia è una qualità.

## Cosa viene aggiornato

L'insieme preciso dei moduli dipende dalla versione di Android e dalla build del dispositivo, quindi non aspettarti lo stesso elenco su tutti i telefoni. Le versioni Android più recenti hanno in genere più componenti modulari rispetto ad Android 10.

Tra gli esempi ci sono componenti di rete, risoluzione DNS, gestione dei contenuti multimediali, componenti legati alle autorizzazioni, Conscrypt per TLS, gestione dei captive portal, interfaccia dei documenti, tethering e parti di Android Runtime sulle versioni supportate.

Non sono elementi decorativi. Un bug nel framework multimediale può coinvolgere molte app. Un problema in un componente TLS può influire sulle connessioni cifrate di tutto il dispositivo. Aggiornare queste parti tramite un canale modulare permette di portare le correzioni su molti più telefoni rispetto all'attesa di un pacchetto OTA completo da ogni produttore.

## Come controllare la data

Su molti telefoni Android recenti, apri Impostazioni > Informazioni sullo smartphone > Versione di Android, quindi seleziona Aggiornamento di sistema Google Play.

Sui dispositivi Samsung, la voce può trovarsi nella sezione Sicurezza e privacy oppure in Impostazioni > Informazioni sul telefono > Informazioni software. Il percorso cambia in base al modello e alla versione di One UI.

I produttori riorganizzano spesso le Impostazioni. Se non trovi la voce, cerca "Aggiornamento di sistema Google Play".

Puoi toccarla per controllare se è disponibile un aggiornamento. Se Android chiede di riavviare il telefono, fallo. Alcuni aggiornamenti basati su APEX diventano attivi soltanto dopo il riavvio.

## Perché la data può sembrare vecchia

La data mostrata sullo schermo non equivale semplicemente all'ultima volta in cui è stato corretto qualcosa. Può indicare la versione di un insieme di moduli, e non tutti gli aggiornamenti modificano la data visualizzata in modo evidente.

Per questo la data del sistema Google Play può restare indietro rispetto alla patch di sicurezza Android senza indicare un guasto. Mi preoccuperei soltanto se entrambe le date fossero vecchie, oppure se il telefono non installasse aggiornamenti di sistema da mesi e non comparisse più nell'elenco di supporto del produttore.

La parte frustrante è che Android non offre agli utenti normali un changelog chiaro, modulo per modulo. Nella maggior parte dei casi vedi una data e un pulsante per riavviare.

## Quali telefoni li ricevono

Questo canale dipende dal sistema modulare di Android e dai servizi Google. In pratica riguarda la maggior parte degli smartphone Android certificati da Google con Android 10 o versioni successive.

I telefoni senza servizi Google non ricevono lo stesso canale distribuito da Google. Alcuni partner Android possono aggiornare i moduli Mainline tramite il proprio sistema OTA, ma non è la stessa cosa del percorso Google Play disponibile su un dispositivo certificato.

Le versioni Android meno recenti hanno anche meno componenti modulari. Un telefono con Android 10 può beneficiare di Mainline, ma non dispone della stessa copertura di moduli di un dispositivo più recente con Android 16 o Android 17.

## Cosa non possono correggere

Mainline non può correggere tutto.

Non aggiorna il kernel del dispositivo, salvo quando una specifica correzione passa attraverso un percorso modulare supportato. Non aggiorna il firmware proprietario di modem, fotocamera, GPU o Wi-Fi. Non ripara le app di sistema specifiche del produttore né il codice dei fornitori. Inoltre, non prolunga il periodo di supporto ufficiale del produttore.

Quindi sì, il canale modulare aiuta. No, non rende di nuovo completamente sicuro uno smartphone abbandonato.

## Aggiornamenti di sistema Google Play e Google Play Services

I nomi sono troppo simili, ed è facile confonderli.

Google Play Services è un framework a livello di app. Le applicazioni lo usano per accesso agli account, API di localizzazione, notifiche, funzioni dell'account, controlli di sicurezza e altri servizi gestiti da Google. Si aggiorna come un'app.

Gli aggiornamenti di sistema intervengono invece sui moduli del sistema operativo. Arrivano più in profondità dentro Android.

Entrambi provengono da Google. Entrambi possono aggiornarsi senza un firmware OTA completo del produttore. Non agiscono sullo stesso livello.

## Cosa fare con queste informazioni

Mantieni aggiornati entrambi i canali. Installa i normali aggiornamenti Android forniti dal produttore e controlla ogni tanto anche la schermata degli aggiornamenti modulari.

Se il telefono riceve ancora patch dal produttore, una data di sistema Google Play leggermente più vecchia è di solito solo rumore. Se entrambi i canali si sono fermati, è il momento di considerare il dispositivo vicino alla fine del suo uso quotidiano sicuro.
