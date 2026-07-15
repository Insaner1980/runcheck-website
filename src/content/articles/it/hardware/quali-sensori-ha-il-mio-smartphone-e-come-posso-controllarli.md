---
title: "Quali sensori ha il mio smartphone e come posso controllarli?"
description: "Perché uno smartphone mostra perfettamente la direzione in cui cammini su Maps, mentre un altro visualizza soltanto un vago cerchio blu? Di solito la risposta sta nei sensori. Tutti gli smartphone Android ne hanno alcuni, ma la combinazione esatta dipende dal modello, dalla fascia di prezzo e dall'anno."
listSummary: "Perché uno smartphone mostra perfettamente la direzione in cui cammini su Maps."
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnostica","sensori","android","hardware","guida"]
locale: "it"
draft: false
---
Un modello di punta del 2026 può avere giroscopio, barometro, sensore di impronte sotto lo schermo, diversi sensori di riattivazione e numerosi sensori di movimento calcolati via software. Uno smartphone economico di qualche anno fa potrebbe avere soltanto l'essenziale. La differenza conta quando la rotazione dello schermo, la luminosità adattiva, la direzione della bussola, le app di realtà aumentata o la funzione che riattiva il display sollevando il telefono non funzionano come ti aspetti.

## Inizia con un'app per sensori

L'app Impostazioni di Android non mostra un inventario completo dei sensori hardware. Fornisce le informazioni di base sul dispositivo, ma non elenca tutti i sensori esposti tramite il framework Android.

Il controllo più semplice consiste nell'usare un'app di diagnostica di terze parti come DevCheck, CPU-Z, Sensor Test o Sensors Toolbox. Aprila e cerca l'elenco hardware. Un'app ben fatta mostra ogni sensore registrato in Android, compresi nome, produttore, letture attuali, risoluzione e consumo energetico.

È quanto di più vicino a un inventario reale puoi ottenere direttamente dal telefono. L'elenco ha comunque un limite: mostra i sensori a cui Android può accedere, non ogni componente fisico saldato sulla scheda. Un lettore di impronte, un sensore fotografico, il modem o un sistema di prossimità a ultrasuoni potrebbero non comparire accanto ad accelerometro e giroscopio.

## I codici del telefono possono aiutare, ma non fidarti troppo

Alcuni smartphone Android hanno menu di prova nascosti. I Samsung spesso supportano `*#0*#`, che può aprire una schermata diagnostica hardware con test dei sensori. Su alcuni dispositivi Android, `*#*#4636#*#*` apre un menu di test, ma riguarda soprattutto informazioni su telefono, batteria e rete, non un inventario completo.

Il problema è che questi codici non sono universali. Produttori, operatori, regioni e versioni software recenti possono disattivarli. Se un codice non fa nulla, non dimostra che il telefono sia privo del sensore. Dimostra soltanto che quel codice non funziona su quel dispositivo.

I database di specifiche sono utili come secondo controllo. GSMArena e le pagine dei produttori spesso elencano il pacchetto di sensori previsto nelle caratteristiche o nelle specifiche del telefono. Ti dicono con quali componenti il modello avrebbe dovuto lasciare la fabbrica, non se il sensore del tuo esemplare funzioni correttamente.

## I sensori che trovi più spesso

### Accelerometro

L'accelerometro misura l'accelerazione lungo tre assi. Rotazione dello schermo, conteggio dei passi, gesti basati sul movimento e rilevamento di base dipendono da questo sensore. Quasi tutti gli smartphone Android ne hanno uno.

### Giroscopio

Il giroscopio misura la rotazione. Rende molto più preciso il rilevamento dell'orientamento, soprattutto in realtà aumentata, realtà virtuale, stabilizzazione della fotocamera e indicazione della direzione sulle mappe. Alcuni modelli economici ne sono privi. Per questo due telefoni possono entrambi usare Google Maps, ma soltanto uno indica con precisione la direzione verso cui sei rivolto.

### Magnetometro

Il magnetometro rileva i campi magnetici e funziona da bussola. Aiuta le app di navigazione a determinare la direzione. La precisione varia molto, perché cover, supporti da auto, portatili, altoparlanti e altri dispositivi elettronici possono interferire.

### Sensore di prossimità

Il sensore di prossimità rileva quando qualcosa si trova vicino allo schermo, di solito il viso durante una chiamata. Il telefono lo usa per spegnere il display e bloccare i tocchi accidentali della guancia.

I modelli più vecchi usano normalmente un piccolo sensore fisico vicino all'altoparlante auricolare. Quelli più recenti possono affidarsi a un rilevamento virtuale basato su software, audio, display o dati della luminosità ambientale. La tendenza è reale, ma complica la diagnosi perché il comportamento potrebbe non corrispondere a un singolo sensore visibile nell'app.

### Sensore di luminosità ambientale

Il sensore di luminosità ambientale misura la luce circostante in lux e alimenta la luminosità adattiva. Di solito si trova vicino alla fotocamera anteriore, anche se alcuni smartphone moderni lo collocano sotto lo schermo.

Un ufficio luminoso può misurare alcune centinaia di lux. La luce solare diretta può superare ampiamente 10.000 lux. Non fissarti sul valore esatto. Conta che il numero cambi quando copri la parte superiore del telefono o ti sposti in un ambiente più luminoso.

### Barometro

Il barometro misura la pressione atmosferica, di solito in ettopascal. Gli smartphone lo usano per stimare più rapidamente l'altitudine e migliorare il contesto della posizione. È comune su molti modelli di fascia media e alta, ma non è affatto garantito sui dispositivi più economici.

### Sensore di impronte digitali

Un lettore di impronte è comunque un sensore, anche quando il normale inventario Android non lo mostra. Può essere ottico sotto il vetro, a ultrasuoni sotto lo schermo oppure capacitivo sul lato o sul retro.

### Sensore di frequenza cardiaca

I sensori dedicati alla frequenza cardiaca sono rari sugli smartphone moderni. Samsung li aveva inclusi in alcuni vecchi Galaxy S e Note, ma la funzione si è spostata soprattutto sugli smartwatch. Se il tuo telefono attuale non elenca un sensore cardiaco, è normale.

## I sensori che potresti non notare

Contapassi e rilevatore di passi possono comparire come sensori separati. Android definisce sia `TYPE_STEP_COUNTER` sia `TYPE_STEP_DETECTOR`. Alcuni telefoni li gestiscono con hardware a basso consumo. Altri ricavano i passi dai dati dell'accelerometro.

Il vettore di rotazione è di solito un sensore combinato. Unisce dati di movimento e orientamento per stimare la posizione tridimensionale del telefono. Potresti vederlo nell'app di diagnostica anche se non esiste un componente fisico chiamato "rotation vector".

Anche gravità e accelerazione lineare sono letture derivate. La gravità isola l'attrazione gravitazionale. L'accelerazione lineare la rimuove, così le app possono concentrarsi sul movimento effettivo.

Il movimento significativo è un sensore di attivazione a basso consumo che riattiva il telefono quando rileva uno spostamento rilevante. Funzioni come sollevamento per riattivare e rilevamento dell'attività in background possono dipendere da questo comportamento.

I pieghevoli aggiungono un'altra particolarità: l'angolo della cerniera. Android prevede un tipo di sensore per l'angolo della cerniera sui dispositivi che espongono alle app la posizione della piega. Un normale smartphone rigido non lo avrà.

## Sensori hardware e software non sono la stessa cosa

Android distingue tra sensori hardware fisici e sensori calcolati via software. Accelerometro e giroscopio sono sensori hardware. Gravità, accelerazione lineare e vettore di rotazione possono essere calcolati usando uno o più sensori fisici.

La differenza incide sul consumo. Un contapassi hardware a basso consumo può registrare i passi per tutto il giorno mentre la CPU principale dorme. Uno realizzato via software richiede più elaborazione e può consumare più batteria.

L'app può mostrare il nome di un produttore come Bosch, STMicroelectronics, TDK InvenSense, AKM o Sensortek. Di solito indica un componente hardware reale. Un nome generico che richiama Android o AOSP spesso segnala un sensore combinato o derivato via software.

Non esiste una regola pulita valida per ogni smartphone. Gli OEM possono esporre sensori proprietari, nascondere parte dell'hardware dietro servizi di sistema o sostituire un componente fisico con una soluzione software.

## Quando l'elenco dei sensori è utile

La maggior parte delle persone si interessa ai sensori soltanto quando qualcosa si rompe. Lo schermo non ruota. La luminosità adattiva cambia senza logica. Un'app bussola indica che il nord si trova dentro il divano. Un'app di realtà aumentata rifiuta di avviarsi perché manca il giroscopio.

Un'app per sensori ti aiuta a distinguere tre casi:

- Il sensore esiste e le letture cambiano normalmente. Il problema riguarda probabilmente impostazioni dell'app, calibrazione, autorizzazioni o software.
- Il sensore esiste, ma le letture sono bloccate o assurde. Può indicare un guasto, un problema del firmware o una calibrazione errata.
- Il sensore non compare affatto. Il telefono potrebbe non averlo e nessuna impostazione potrà aggiungerlo in seguito.

Non puoi installare via software un giroscopio che manca. Esistono sensori Bluetooth esterni per fitness e usi specialistici, ma non diventano parte del framework dei sensori integrati di Android.

È normale anche vedere più voci per lo stesso sensore. Un telefono può esporre versioni wake-up e non wake-up, versioni calibrate e non calibrate oppure copie specifiche del produttore accanto ai tipi standard di Android.
