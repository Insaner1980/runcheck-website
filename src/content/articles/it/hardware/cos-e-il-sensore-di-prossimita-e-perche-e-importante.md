---
title: "Cos'è il sensore di prossimità e perché è importante?"
description: "Come funziona il sensore di prossimità di uno smartphone Android, perché le chiamate possono comportarsi in modo anomalo quando non funziona e come verificare e risolvere i problemi più comuni."
listSummary: "Come funziona il sensore di prossimità di uno smartphone Android."
hub: "hardware"
sourceNumber: 117
order: 14
tags: ["diagnostica","sensori","android","hardware","guida"]
locale: "it"
draft: false
---
A metà di una chiamata, lo schermo si riaccende mentre è appoggiato al viso e la guancia apre il tastierino. Di solito è questo minuscolo sensore che non riesce più a svolgere l'unico compito di cui nessuno si accorge finché smette di funzionare.

Il sensore comunica al telefono quando qualcosa si trova vicino al vetro anteriore. Durante una chiamata, quel "qualcosa" è normalmente il tuo viso. Android spegne quindi lo schermo e ignora i tocchi, così l'orecchio non diventa un accessorio per il touchscreen.

## Come funziona

La maggior parte degli smartphone Android usa un sensore di prossimità a infrarossi vicino all'altoparlante auricolare o alla fotocamera anteriore. Emette luce infrarossa e controlla quanta ne torna indietro. Se il riflesso è sufficiente, il telefono conclude che un oggetto è vicino. Quando il riflesso diminuisce, segnala di nuovo che è lontano.

La documentazione Android sui sensori è un po' più flessibile di quanto molti si aspettino. La maggior parte dei sensori di prossimità restituisce una distanza in centimetri, ma alcuni indicano soltanto vicino o lontano. Per il normale comportamento durante una chiamata, ad Android basta proprio questo.

Alcuni telefoni non usano più un sensore a infrarossi dedicato e facilmente riconoscibile come nei modelli più vecchi. Possono affidarsi a sensori sotto lo schermo o a una prossimità virtuale che combina altri sensori e software. Si risparmia spazio nella cornice superiore, ma il sistema può diventare più sensibile a pellicole protettive, sporco, vetro danneggiato e bug del firmware.

## Dove si trova

Sugli smartphone più vecchi con una cornice superiore visibile, di solito è accanto all'altoparlante auricolare, alla fotocamera anteriore e al sensore di luminosità ambientale. Potresti non vederlo perché si trova dietro una zona scura del vetro.

Nei modelli più recenti con foro nello schermo e cornici quasi assenti, il sensore può trovarsi sotto il display o dietro un'area meno evidente del vetro anteriore. Per questo è più difficile indovinarne la posizione esatta. Se provi a coprirlo con la mano, inizia dalla zona attorno all'altoparlante auricolare e alla fotocamera anteriore.

## Segnali di un sensore di prossimità difettoso

Lo schermo resta acceso durante le chiamate. È il sintomo classico: avvicini il telefono all'orecchio e la guancia comincia a premere pulsanti.

Lo schermo resta nero quando allontani il telefono. Termini una chiamata e devi premere il pulsante di accensione perché il display non si riattiva da solo.

Lo schermo si spegne mentre usi il telefono. Può accadere quando il sensore resta bloccato nello stato vicino perché qualcosa lo copre.

I tocchi accidentali in tasca aumentano. Il sensore non è l'unica difesa contro gli input involontari, ma letture costantemente errate li rendono più probabili.

## Una prova rapida durante una chiamata

Chiama la segreteria telefonica o un numero che puoi usare senza disturbare nessuno. Durante la chiamata, copri con il palmo la zona vicino all'altoparlante auricolare.

Lo schermo dovrebbe spegnersi rapidamente. Togli la mano e dovrebbe riaccendersi entro circa un secondo. Se impiega diversi secondi, non reagisce o lampeggia passando di continuo da acceso a spento, il sensore richiede attenzione.

Semplice. E irritantemente utile.

## Test diagnostici più precisi

Sui Samsung Galaxy, prova `*#0*#` nell'app Telefono predefinita e cerca il test dei sensori. Il percorso più semplice è Samsung Members > Assistenza > Vedi test, nella sezione Diagnostica > Riconoscim. prossimità, e dovrebbe essere la prima scelta se non ti piacciono i menu di servizio.

Sugli smartphone Xiaomi, Redmi e POCO, digita `*#*#6484#*#*` oppure `*#*#64663#*#*` per aprire la modalità CIT. Le pagine di assistenza Xiaomi consigliano anche di rimuovere cover e pellicole, pulire il bordo superiore del telefono, aggiornare il software e usare il rilevamento hardware quando le funzioni legate al tocco o ai sensori non si comportano correttamente.

Sugli altri smartphone Android, usa Sensor Test, Sensors Multitool o DevCheck. Apri la lettura del sensore di prossimità, passa la mano sopra la parte superiore del telefono e controlla se il valore cambia. Alcuni dispositivi mostrano centimetri. Altri passano da 0 a un valore massimo, che significa semplicemente vicino e lontano.

Se il valore non cambia mai, il sensore è coperto, disattivato, calibrato male o guasto.

Alcune guide meno recenti consigliano Proximity Sensor Reset. Non dovrebbe essere il primo tentativo. Usala soltanto dopo i controlli di base e non aspettarti che un'app di calibrazione di terze parti ripari un sensore che il telefono non riesce a leggere affatto.

## Risolvi prima le cause più comuni

Pulisci la parte superiore dello schermo. Grasso delle dita, polvere, trucco, lanugine e residui secchi possono coprire la finestra del sensore. Usa un panno in microfibra pulito e presta particolare attenzione alla zona dell'altoparlante auricolare.

Rimuovi la pellicola protettiva. È una delle cause principali sui telefoni con sensori di prossimità nascosti o sotto lo schermo. La pellicola può essere troppo spessa, troppo scura vicino al sensore o leggermente fuori posizione. Prova il telefono senza protezione prima di incolpare la scheda madre.

Togli la cover. Custodie a libro, bordi rialzati e cover tagliate male possono interferire con il bordo superiore del display.

Riavvia il telefono. I driver dei sensori possono bloccarsi, soprattutto dopo un lungo periodo senza riavvio o subito dopo un aggiornamento di sistema.

Aggiorna il software. Il comportamento del sensore di prossimità dipende in parte dal firmware. Un aggiornamento importante, come Android 17 sui Pixel supportati e, più tardi, le build Android 17 degli altri OEM, può modificarlo perché è il livello software del produttore a controllare l'hardware.

Controlla le impostazioni delle chiamate. Alcune versioni Xiaomi espongono un'opzione per la prossimità nelle impostazioni di chiamata. Il percorso cambia, ma in alcune vecchie versioni in stile MIUI compariva in inglese come Settings > Apps > System app settings > Call settings > Incoming call settings > Proximity sensor.

## Calibrazione e sensori virtuali

Alcuni menu diagnostici includono la calibrazione del sensore di prossimità. Xiaomi CIT e le vecchie modalità di fabbrica OnePlus sono gli esempi più comuni. Avviala soltanto se il menu la propone chiaramente, con il telefono appoggiato in piano, pulito e senza nulla che lo copra.

I sensori di prossimità virtuali sono più complicati. Se il telefono stima la distanza tramite software, potrebbe non esserci un componente fisico da sostituire. In quel caso gli aggiornamenti del firmware contano più della riparazione. Un ripristino dei dati di fabbrica può eliminare uno stato di calibrazione errato, ma dovrebbe essere l'ultimo passo dopo aver creato un backup.

## Quando il problema è hardware

Se il valore non cambia mai nei test diagnostici dopo aver pulito il telefono, rimosso gli accessori, riavviato, aggiornato e provato la Modalità provvisoria, è probabile un guasto hardware.

Una caduta può rompere la zona del sensore o spostare il display. L'acqua può corrodere il sensore o il cavo flessibile. Una riparazione può lasciare un connettore allentato o coprire il sensore con l'adesivo sbagliato. Nessuna di queste cose si risolve installando un'altra app per sensori.

Quando il telefono usa un componente di prossimità a infrarossi separato, il pezzo è piccolo, ma il costo dipende soprattutto dalla manodopera. Nei modelli con rilevamento nascosto o integrato nel display, la riparazione può essere legata all'intero gruppo schermo.

Se la riparazione non conviene, puoi comunque aggirare il problema. Usa il pulsante di accensione per riattivare lo schermo durante le chiamate, abilita la protezione dai tocchi involontari se il telefono la offre ed evita le custodie a libro che coprono la zona del sensore. Non è perfetto, ma mantiene utilizzabile il dispositivo.
