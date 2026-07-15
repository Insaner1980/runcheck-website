---
title: "Controllo dello stato di un dispositivo Android: come verificare se lo smartphone è in buone condizioni"
description: "Gli smartphone non si rompono da un giorno all'altro. La batteria perde capacità poco alla volta. La memoria si riempie in background. La temperatura aumenta gradualmente durante le stesse attività. Quando i sintomi diventano evidenti, come spegnimenti casuali, app lente o surriscaldamento durante operazioni semplici, il problema di fondo di solito si sta sviluppando da mesi."
listSummary: "Gli smartphone non si rompono da un giorno all'altro."
hub: "device-health"
sourceNumber: 1
order: 1
tags: []
locale: "it"
draft: false
---
Un controllo dello stato del dispositivo aiuta a individuare presto queste tendenze. È utile quando devi risolvere un problema specifico, preparare lo smartphone per la vendita o capire se quella sensazione di lentezza è reale oppure no.

---

## Cosa comprende un controllo dello stato del dispositivo

Un controllo accurato non si limita alla percentuale della batteria. Solo valutando più aree insieme puoi capire come sta davvero invecchiando lo smartphone.

Lo stato della batteria indica quanta capacità originale è ancora disponibile. Uno smartphone venduto con una batteria da 5.000 mAh potrebbe riuscire a conservarne solo 4.000 mAh dopo due anni di ricariche quotidiane. Ma la capacità grezza non dice tutto. Anche la stabilità della tensione, la velocità di scarica e la temperatura sotto carico determinano quante ore di utilizzo dello schermo ottieni dalla capacità rimasta.

Lo stato della memoria non riguarda solo lo spazio libero. La memoria interna ha velocità di lettura e scrittura che possono peggiorare con il tempo, mentre un'unità quasi piena costringe Android a lavorare di più per gestire file temporanei e memoria di swap.

Stato termico, connettività di rete, funzionamento dei sensori e prestazioni del processore completano il quadro. Un calore persistente accelera l'usura della batteria e provoca il thermal throttling, cioè una riduzione delle prestazioni della CPU dovuta alla temperatura. La diagnostica Wi-Fi e della rete mobile misura quanto bene funziona davvero la connessione, non solo se è presente. Un giroscopio che perde precisione o un sensore di prossimità che non risponde può compromettere alcune funzioni senza dare segnali evidenti. La pressione sulla RAM mostra invece se lo smartphone riesce ancora a gestire il multitasking senza bloccarsi.

---

## Perché gli smartphone Android rallentano con il tempo

La sensazione che lo smartphone diventi più lento non è immaginaria. Le cause sono diverse e si sommano tra loro.

### Degrado della batteria

Le batterie agli ioni di litio si usurano chimicamente a ogni ciclo di ricarica. In passato si parlava spesso di una soglia di 500 cicli, ma oggi non è più una regola valida per tutti. Molti smartphone recenti sono progettati per arrivare più vicino a 800-1.000 cicli completi prima di scendere a circa l'80 % della capacità originale, a seconda del modello, della chimica della batteria e delle condizioni di ricarica. Dopo quel punto, l'autonomia con lo schermo acceso diminuisce in modo evidente e gli spegnimenti imprevisti sotto carico diventano più probabili.

Il calore peggiora la situazione. Ricaricare in ambienti caldi, giocare con lo smartphone collegato alla corrente o lasciarlo sul cruscotto dell'auto in estate accelera l'usura chimica.

### Memoria quasi piena

App, dati nella cache, foto e aggiornamenti di sistema si accumulano. Android ha bisogno di spazio libero per gestire i file temporanei e installare gli aggiornamenti. Quando lo spazio disponibile scende sotto circa il 10-15 % della capacità totale, lo smartphone spesso comincia a sembrare più lento. È una regola pratica, non un limite ufficiale di Android. Le app si aprono più lentamente, la fotocamera esita prima di salvare le foto e le animazioni scattano.

### Crescita dei processi in background

Ogni app installata può avviare servizi in background, sincronizzare dati e inviare notifiche. Nel giro di uno o due anni, il consumo complessivo aumenta. Se aggiungi aggiornamenti di Android che richiedono gradualmente più risorse all'hardware, i dispositivi meno recenti iniziano a faticare.

### Usura fisica

Le porte di ricarica si allentano. Gli altoparlanti perdono nitidezza. Il touchscreen può diventare meno reattivo in alcuni punti. I sensori possono perdere la calibrazione. Questi cambiamenti avvengono così lentamente che è facile non notarli finché non interferiscono con l'uso quotidiano.

---

## Controlli manuali che puoi fare subito

Android include strumenti sufficienti per una valutazione di base, senza installare altre app.

### Stato della batteria nelle impostazioni

Il percorso cambia in base al produttore:

**Samsung:** apri l'app Samsung Members, tocca Supporto, poi Inizia ora nella sezione Diagnostica dello smartphone e scegli Stato batteria. A seconda del modello, della regione e della versione di One UI, potresti vedere un semplice giudizio sulle condizioni invece di una percentuale precisa.

**Google Pixel** (Pixel 8a e modelli successivi): Impostazioni > Batteria > Stato della batteria mostra le condizioni della batteria e una stima della capacità rimasta. Impostazioni > Informazioni sullo smartphone > Informazioni sulla batteria mostra il numero di cicli, la data di produzione e la data del primo utilizzo. I Consigli sulla batteria, che regolano il comportamento della ricarica per preservare la capacità nel tempo, sono disponibili da Pixel 6a in poi.

**Xiaomi/POCO** (HyperOS): controlla nella sezione Batteria delle Impostazioni se sono presenti informazioni sullo stato o sul numero di cicli. Il percorso esatto varia in base al modello, alla regione e alla versione di HyperOS.

Sugli smartphone che non mostrano questi dati nelle Impostazioni puoi provare un codice diagnostico: apri l'app Telefono e digita `*#*#4636#*#*`. Sui dispositivi supportati si apre un menu di test con tensione, temperatura e un'indicazione approssimativa dello stato della batteria. Di solito non mostra una percentuale reale della capacità né il numero di cicli.

### Utilizzo della memoria

Impostazioni > Memoria mostra una suddivisione per categoria, come app, foto, video, file di sistema e dati nella cache. Vale la pena intervenire quando l'utilizzo supera l'85 %. Svuotare le cache delle app e spostare altrove i file meno recenti può migliorare in modo percepibile la reattività.

### Temperatura

La maggior parte degli smartphone non include un indicatore di temperatura nelle Impostazioni, ma anche le sensazioni al tatto contano. Se il dispositivo è caldo durante una navigazione leggera o mentre è inattivo, conviene indagare. Sui modelli supportati, il menu `*#*#4636#*#*` mostra almeno la temperatura della batteria.

### Test hardware di base

Puoi fare alcune verifiche rapide: apri un'app di disegno e trascina il dito su tutta la superficie dello schermo per trovare zone morte del touchscreen. Riproduci audio a volumi diversi per provare gli altoparlanti. Registra una nota vocale per controllare il microfono. Prova entrambe le fotocamere, il flash e la rotazione dello schermo.

---

## Diagnostica avanzata

I controlli manuali coprono gli aspetti più visibili. Per ottenere un quadro più completo servono strumenti più approfonditi.

### Test dei sensori

Gli smartphone contengono molti sensori: accelerometro, giroscopio, magnetometro, sensore di prossimità, sensore di luce ambientale e barometro. Quando uno smette di funzionare, i sintomi sono molto specifici. La rotazione automatica non funziona, lo schermo non si spegne durante le chiamate, la bussola perde precisione o la posizione GPS peggiora.

Per provare i singoli sensori serve un'app di diagnostica o un codice del produttore. Samsung supporta `*#0*#` per aprire un menu di test hardware. Altri produttori usano codici propri, ma la disponibilità non è uniforme.

### Benchmark delle prestazioni

Gli strumenti di benchmark sottopongono CPU, GPU e memoria a test standardizzati e producono un punteggio confrontabile con i valori attesi per uno specifico modello. Un risultato molto inferiore alla norma può indicare thermal throttling, un carico eccessivo in background o un problema hardware.

### Diagnostica di rete

Sapere che il Wi-Fi è connesso dice poco. Velocità effettiva, latenza, perdita di pacchetti e stabilità del segnale determinano le prestazioni reali. Una diagnostica di rete dettagliata aiuta a capire se il problema dipende dallo smartphone o dalla rete.

### Analisi della batteria

Le etichette come "Buono" o "Scarso" mostrate nelle Impostazioni sono indicatori molto approssimativi. Un'analisi completa confronta la capacità reale con quella nominale, registra la velocità di scarica in condizioni diverse, controlla l'andamento della temperatura nel tempo e conta i cicli quando il dispositivo rende disponibile il dato. Sugli smartphone che non espongono veri contatori hardware, le app possono comunque stimare la capacità osservando la ricarica, ma il risultato va interpretato con più cautela. Questi dati aiutano a capire se sostituire la batteria prolungherebbe davvero la vita utile del telefono.

Passare continuamente tra Impostazioni, codici nell'app Telefono e test manuali permette di raccogliere molte informazioni, ma lascia il quadro frammentato. Un'app di diagnostica come **runcheck** riunisce dati su batteria, temperatura, rete e memoria in un'unica schermata con un punteggio di stato complessivo. È utile per i controlli periodici e soprattutto quando compri o vendi uno smartphone usato, perché entrambe le parti possono basarsi su un rapporto oggettivo sulle condizioni.

---

## Domande frequenti

### Con quale frequenza dovrei controllare lo smartphone?

Una volta al mese è sufficiente per la maggior parte delle persone. Per dispositivi con più di due anni, o quando compaiono problemi di prestazioni, un controllo ogni due settimane aiuta a notare prima le tendenze: capacità della batteria in calo, temperature in aumento o memoria che si riempie lentamente.

### Un ripristino dei dati di fabbrica può velocizzare uno smartphone lento?

Dipende dalla causa. Il ripristino aiuta quando il problema deriva da software superfluo, processi in background fuori controllo o cache danneggiate. Non risolve una batteria degradata, chip di memoria usurati o sensori guasti. Eseguire prima una diagnostica aiuta a capire da quale lato si trova il problema.

Fai sempre un backup prima del ripristino.

### A quale percentuale di stato della batteria conviene pensare alla sostituzione?

La soglia più usata è circa l'80 % della capacità nominale. Al di sotto, l'autonomia ridotta e le ricariche più frequenti diventano difficili da ignorare. Sotto il 70 %, lo smartphone può diventare scomodo come dispositivo principale. Di solito l'andamento dei dati è chiaro molto prima che la situazione diventi insostenibile.

### I codici diagnostici funzionano su tutti gli smartphone Android?

No. `*#*#4636#*#*` funziona su molti dispositivi, ma non su tutti. Samsung usa codici propri e produttori come Xiaomi, OnePlus e Motorola gestiscono la diagnostica in modo diverso. Questa frammentazione è uno dei motivi per cui esistono le app di diagnostica: uniformano i test tra produttori diversi.

### Le app di diagnostica di terze parti sono sicure?

Sì, purché provengano da sviluppatori affidabili sul Google Play Store. Le opzioni più sicure elaborano tutto sul dispositivo e non richiedono account, accesso a internet o autorizzazioni estranee alla diagnostica. Se un'app chiede accesso a contatti o messaggi per "controllare lo stato del dispositivo", è un segnale d'allarme.

---

I controlli regolari trasformano una vaga sensazione che "qualcosa non va" in dati concreti. Una verifica mensile richiede pochi minuti e può far emergere problemi, come capacità della batteria in calo, temperature che aumentano e memoria che si riempie, prima che inizino a disturbare l'uso quotidiano.
