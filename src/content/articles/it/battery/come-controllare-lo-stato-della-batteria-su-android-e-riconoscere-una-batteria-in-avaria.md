---
title: "Come controllare lo stato della batteria su Android e riconoscere una batteria in avaria"
description: "Una batteria che sta cedendo raramente si annuncia con uno spegnimento improvviso e spettacolare. I segnali compaiono poco alla volta: meno ore di schermo acceso, un riavvio inatteso, il telefono che si scalda durante un uso leggero. La carica cala rapidamente, il dispositivo si spegne quando indica ancora il 20 % o più, la ricarica richiede più tempo, il telefono rimane caldo durante le attività normali oppure la cover posteriore inizia a gonfiarsi. Una combinazione di questi sintomi indica che la batteria si sta deteriorando."
listSummary: "Una batteria che sta cedendo raramente si annuncia con uno spegnimento improvviso e spettacolare."
hub: "battery"
sourceNumber: 11
order: 1
subgroup: "Stato della batteria"
tags: ["batteria","stato","diagnostica","android","guida"]
locale: "it"
draft: false
---
A differenza degli iPhone, che sui modelli supportati mostrano una percentuale dello stato della batteria da iOS 11.3, Android ha sempre reso questa informazione più difficile da trovare. Non esiste una schermata universale dedicata allo stato della batteria. Per farsi un quadro servono gli strumenti del produttore, i menu nascosti, l'andamento dei consumi e le app di diagnostica.


## Risposta rapida: come controllare lo stato della batteria

Tre metodi, dal più rapido al più dettagliato.

**Strumenti integrati del produttore.** Apri la sezione Batteria nelle Impostazioni e cerca un indicatore sullo stato della batteria. Se hai un dispositivo **Samsung**, apri l'app Samsung Members e vai su Supporto > Inizia ora, nella sezione Diagnostica dello smartphone > Stato batteria. Su **Google Pixel 8a e modelli successivi**, trovi lo stato della batteria in Impostazioni > Batteria > Stato della batteria e il conteggio dei cicli in Impostazioni > Informazioni sullo smartphone > Informazioni sulla batteria. I dispositivi **OnePlus, OPPO e realme** recenti possono mostrare lo stato della batteria nelle impostazioni, ma la disponibilità cambia in base a modello, paese e versione del sistema operativo. Alcuni dispositivi **Xiaomi e POCO** mostrano informazioni aggiuntive nelle sezioni Batteria e Protezione batteria, a seconda del modello e della versione di HyperOS.

**Menu di diagnostica nascosto.** Apri l'app Telefono e digita `*#*#4636#*#*`. Sui dispositivi compatibili compare un menu di test con informazioni come stato, temperatura e tensione della batteria. Il codice non funziona su tutti i telefoni. Molti modelli Samsung e Pixel recenti lo hanno disattivato.

**App di diagnostica.** Le app di terze parti stimano lo stato della batteria osservando i cicli di carica e scarica per diversi giorni. È l'opzione più dettagliata quando il telefono non dispone di un indicatore integrato.

Una capacità inferiore all'80 % rispetto a quella nominale, oppure uno stato diverso da "Buono" o "Normale", rende sensato valutare la sostituzione.


## Perché le batterie si deteriorano

Ogni smartphone Android usa una batteria agli ioni di litio o ai polimeri di litio: è leggera, offre molta energia e si può ricaricare, ma la sua durata chimica è limitata.

**I cicli di ricarica sono uno dei principali meccanismi di invecchiamento.** Un ciclo completo corrisponde all'uso del 100 % della capacità della batteria, in una sola volta oppure attraverso più ricariche parziali. Usare il 50 % oggi e il 50 % domani equivale a un ciclo. Per anni si è parlato soprattutto di una soglia di 500 cicli, ma molti modelli attuali sono progettati per arrivare più vicino a 800-1.000 cicli completi prima di scendere a circa l'80 % della capacità iniziale. Gli smartphone immessi sul mercato dell'UE dal 20 giugno 2025 devono resistere ad almeno 800 cicli di carica e scarica mantenendo almeno l'80 % della capacità iniziale.

**L'invecchiamento dovuto al tempo avviene anche senza usare il telefono.** Nelle celle agli ioni di litio si verificano reazioni chimiche secondarie inevitabili, causate dal tempo e dalla termodinamica. Lo strato di interfaccia dell'elettrolita solido sull'anodo si ispessisce lentamente e aumenta la resistenza interna. Anche uno smartphone lasciato inutilizzato in un cassetto per un anno avrà una batteria misurabilmente più debole rispetto a quando era nuovo.

**Il calore provoca i danni maggiori.** Per una cella agli ioni di litio, temperature superiori a 30 °C (86 °F) sono già elevate. Giocare mentre il telefono è in carica, lasciarlo in un'auto calda o usarlo sotto il sole diretto accelera la degradazione chimica. Un singolo episodio di surriscaldamento prolungato può causare danni permanenti. Gli effetti si sommano: temperatura alta e carica completa sono la combinazione peggiore. Per questo molti smartphone moderni possono limitare la ricarica all'80 % o rallentarla durante la notte. Sul cruscotto di un'auto esposto al sole, un telefono può raggiungere temperature dannose in meno di un'ora anche con un clima non estremo.

**Le abitudini di ricarica contano, ma meno di quanto si pensa.** Portare sempre la batteria al 100 % e scaricarla fino allo 0 % la sottopone a più stress rispetto a mantenerla tra il 20 % e l'80 %. Anche la ricarica rapida produce più calore di quella standard. Tuttavia, nell'arco di un anno, la differenza tra ricaricare sempre rapidamente fino al 100 % e fermarsi con calma all'80 % è più piccola di quanto suggeriscano molti consigli online. Calore e tempo incidono di più. Il vero rischio sono i caricabatterie non certificati: un'alimentazione instabile può danneggiare le celle in modo permanente.

Il risultato finale è semplice: una batteria da 5.000 mAh diventa lentamente una batteria da 4.000 mAh, poi da 3.500 mAh, finché l'energia rimasta non basta più per una giornata normale.


## Controlli manuali

Le impostazioni integrate di Android offrono indizi utili anche quando non mostrano una percentuale precisa. Non serve installare nulla.

**Controlla il consumo per app.** Apri Impostazioni > Batteria > Utilizzo batteria. Il percorso esatto cambia da un produttore all'altro e alcuni telefoni usano nomi come "Assistenza dispositivo". Cerca app che consumano una quota sproporzionata, soprattutto se non le hai usate attivamente. Un'app in background che assorbe il 15 % o più della batteria spesso è il vero problema, non una cella deteriorata.

**Confronta il tempo di schermo acceso.** Annota quante ore di schermo acceso ottieni con una carica completa e confrontale con le specifiche originali o con l'esperienza dei primi mesi. Un calo del 30-40 % rispetto al passato indica una degradazione reale.

**Osserva i cali improvvisi della percentuale.** Una batteria in buone condizioni si scarica in modo abbastanza regolare. Se passa dal 45 % al 20 % in pochi minuti durante un uso leggero, oppure il telefono si spegne al 15 %, la curva di tensione reale non corrisponde più alla stima del software. È un sintomo classico dell'invecchiamento.

**Misura la velocità di ricarica.** Controlla quanto tempo impiega a passare dal 20 % all'80 % usando sempre lo stesso caricabatterie. Se richiede molto più tempo di prima, la resistenza interna potrebbe essere aumentata. Anche il contrario è indicativo: un telefono che si carica rapidamente ma si scarica altrettanto in fretta può stimare male la capacità residua.

**Nota gli spegnimenti sotto carico.** Una batteria degradata non riesce a mantenere la tensione quando la richiesta di energia aumenta. Se il telefono si spegne avviando un gioco impegnativo nonostante mostri ancora una carica ragionevole, la batteria è probabilmente vicina alla fine della sua vita utile.

**Controlla la temperatura al tatto.** Navigazione web, messaggi e un uso leggero dei social dovrebbero produrre al massimo un lieve tepore. Se il retro diventa chiaramente caldo durante queste attività, l'aumento della resistenza interna può generare calore in eccesso.

**Cerca segnali fisici.** Una cover posteriore che si solleva, lo schermo che si separa leggermente dal telaio o il telefono che oscilla su una superficie piana possono indicare una batteria gonfia. È un rischio per la sicurezza. Smetti di usare il telefono, non ricaricarlo e portalo subito in un centro di riparazione. Non è una situazione da "tenere sotto controllo". Il rigonfiamento può solo peggiorare.

**Usa la diagnostica del produttore.** Oltre agli indicatori citati nella risposta rapida, alcuni telefoni includono test dedicati. Sui Pixel compatibili cerca Diagnostica della batteria nella sezione Batteria. Samsung Members offre una sezione completa di Diagnostica dello smartphone con un test della batteria. Nei dispositivi Xiaomi, le informazioni disponibili cambiano in base al modello e alla versione di HyperOS.


## Diagnostica avanzata: tensione, temperatura e andamento della scarica

Per chi vuole un quadro più tecnico, alcune misure mostrano cosa sta succedendo all'interno della cella.

**Andamento della tensione.** Una cella agli ioni di litio completamente carica si trova intorno a 4,2 V, mentre a fine scarica è in genere tra 3,0 e 3,3 V. Una batteria sana mantiene una tensione abbastanza stabile con un carico moderato. Sono segnali d'allarme una tensione che oscilla in modo irregolare durante un uso leggero, un calo netto sotto carico moderato o un valore molto inferiore a 3,7 V mentre il telefono indica ancora una percentuale di carica. Questi sintomi possono indicare una cella mal calibrata oppure troppo degradata per essere affidabile.

**Andamento della temperatura.** Nell'uso normale, la temperatura è in genere compresa tra 20 °C e 35 °C (68-95 °F). Fino a 40 °C può essere accettabile durante attività intensive come giochi o navigazione GPS. Superare regolarmente 45 °C attiva la gestione termica del telefono, che riduce le prestazioni e rallenta la ricarica. Una batteria che raggiunge spesso queste temperature entra in un circolo vizioso: più calore accelera la degradazione, e una maggiore degradazione produce altro calore.

**Forma della curva di scarica.** In una cella sana, la parte centrale della scarica, circa tra il 30 % e il 70 %, è relativamente piatta e lenta. Con il deterioramento, questa zona si comprime: la percentuale scende più rapidamente nella parte alta, l'intervallo centrale si accorcia e le letture sotto il 30 % diventano poco affidabili. Una batteria che crolla tra il 50 % e il 30 % ha perso capacità utilizzabile. Seguire queste curve per giorni o settimane mostra se il peggioramento continua e con quale velocità.

**Effetti della resistenza interna.** Gli strumenti per consumatori non la misurano direttamente, ma le conseguenze sono visibili: calore durante la ricarica, percentuale che cala rapidamente sotto carico e recupera quando il telefono è inattivo, velocità massima di ricarica ridotta. Tutto nasce dalla difficoltà degli ioni a muoversi attraverso strutture interne ormai degradate.

Le app di diagnostica trasformano queste osservazioni in numeri. Analizzano per diversi giorni le fasi di carica e scarica per stimare la capacità attuale rispetto a quella nominale. Se una batteria da 5.000 mAh trattiene ormai solo 3.800 mAh, il suo stato è circa il 76 % e la sostituzione è già consigliabile. La maggior parte delle app ha bisogno di almeno qualche giorno e di più sessioni di ricarica prima che la stima si stabilizzi, quindi non trarre conclusioni dal primo giorno.

runcheck riunisce la diagnostica della batteria con l'analisi della rete, della temperatura e della memoria in una valutazione unica. È utile perché i problemi di batteria non compaiono sempre da soli. Un componente che si comporta male può produrre calore e sembrare un problema di autonomia, mentre una memoria quasi satura può costringere la CPU a lavorare più del necessario.

Evita le app che promettono di "potenziare", "calibrare" o "ripristinare" lo stato della batteria. Nessuna app può invertire la degradazione chimica. Gli strumenti utili mostrano valori reali di tensione e temperatura, raccolgono dati nel tempo e funzionano sul dispositivo senza richiedere account o caricamenti sul cloud.


## Domande frequenti

**Quanto dovrebbe durare la batteria di uno smartphone Android prima della sostituzione?**

Per i modelli più vecchi si citava spesso una soglia di 500 cicli, ma oggi è troppo bassa come regola generale. Molti telefoni recenti sono progettati per mantenere circa l'80 % della capacità dopo 800-1.000 cicli completi, a seconda di modello, chimica, abitudini di ricarica, esposizione al calore e intensità d'uso. Alcune persone usano la stessa batteria per quattro anni. Altre notano un calo concreto dopo 18 mesi.

**A quale percentuale conviene sostituire la batteria?**

Intorno all'80 % della capacità nominale, la differenza diventa evidente per molte persone. Una batteria da 4.500 mAh, a quel punto, immagazzina in pratica circa 3.600 mAh. Sotto il 70 %, la maggior parte degli utenti trova difficile arrivare a fine giornata.

**È possibile ripristinare lo stato della batteria?**

No. La degradazione è un processo chimico irreversibile. Puoi però rallentare quella futura: mantieni il telefono fresco, resta tra il 20 % e l'80 % quando è pratico, usa il caricabatterie del produttore o un'alternativa certificata e attiva le funzioni di ricarica intelligente disponibili.

**Un aggiornamento software può causare consumi simili a un guasto hardware?**

Sì, e succede più spesso di quanto si pensi. Un aggiornamento poco ottimizzato può aumentare l'attività della CPU in background, consumare energia e produrre calore. Prima di dare la colpa all'hardware, controlla in Impostazioni > Batteria > Utilizzo batteria se un'app o un processo usa una quantità anomala di energia. Se il responsabile è specifico, aggiornarlo, svuotarne la cache o attendere una correzione di solito risolve il problema.

**È sicuro continuare a usare un telefono con la batteria gonfia?**

No. Smetti di usarlo, non ricaricarlo e portalo in un centro di riparazione. Il rigonfiamento deriva dall'accumulo di gas prodotto dalla degradazione chimica interna. Nei casi estremi, una batteria agli ioni di litio gonfia può rompersi o incendiarsi.

**La ricarica rapida rovina prima la batteria?**

La ricarica rapida produce più calore, e il calore accelera la degradazione. I protocolli moderni gestiscono però il processo abbastanza bene: caricano velocemente fino a circa il 70-80 % e poi rallentano. L'effetto esiste, ma è relativamente piccolo rispetto alla temperatura ambiente e alle abitudini complessive. Usare il caricabatterie del produttore è in genere sicuro. Riservare la ricarica rapida ai momenti in cui serve davvero e usare una ricarica standard durante la notte è un compromesso ragionevole.

**Perché il telefono si spegne al 15-20 % invece di arrivare allo 0 %?**

La capacità reale non corrisponde più a quella attesa dal software. Con l'invecchiamento cambia la curva di tensione e l'algoritmo che stima la carica perde precisione. Il telefono crede che resti energia, ma la batteria non riesce a mantenere la tensione sotto carico. Un ciclo completo di carica e scarica può talvolta riallineare l'indicatore, ma se il problema si ripete la batteria va sostituita.

**Ogni quanto va controllato lo stato della batteria?**

Ogni pochi mesi. La degradazione è graduale e controllarla ossessivamente non cambia il risultato. Vale la pena fare un controllo fuori programma quando l'autonomia cambia all'improvviso, il telefono si spegne senza motivo o diventa più caldo del solito.


## Come usare i risultati

Controlla prima il grafico dei consumi e gli strumenti integrati del produttore. Osserva soprattutto come si comporta il telefono ogni giorno, perché i sintomi pratici spesso contano più di un singolo numero. Per un monitoraggio più preciso, un'app di diagnostica che registra nel tempo tensione, temperatura e capacità può mostrare tendenze che altrimenti richiederebbero settimane per diventare evidenti.

La soglia dell'80 % è il punto in cui la degradazione inizia a pesare nell'uso quotidiano. Sotto quel livello, sostituire la batteria costa molto meno di un telefono nuovo e può prolungare la vita utile del dispositivo di altri due o tre anni.
