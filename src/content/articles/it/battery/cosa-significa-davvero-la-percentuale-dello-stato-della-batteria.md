---
title: "Cosa significa davvero la percentuale dello stato della batteria?"
description: "La percentuale dello stato della batteria mostra la capacità massima attuale rispetto a quando era nuova. Scopri cosa significa, perché l'80 % è importante e come viene indicata sui telefoni Android."
listSummary: "La percentuale dello stato della batteria mostra la capacità massima attuale rispetto a quando era nuova."
hub: "battery"
sourceNumber: 13
order: 3
subgroup: "Stato della batteria"
tags: ["batteria","stato","diagnostica","android","guida"]
locale: "it"
draft: false
---
La percentuale dello stato della batteria indica quanto si è usurata. Non è la stessa percentuale che vedi nella barra di stato.

Se il telefono segnala uno stato dell'87 %, significa che la cella può trattenere circa l'87 % dell'energia che immagazzinava da nuova. Funziona ancora. Il serbatoio, semplicemente, è diventato più piccolo.

## Il numero dietro la percentuale

Ogni batteria nasce con una capacità nominale. È la quantità di carica che la cella è progettata per immagazzinare e viene solitamente espressa in mAh. Uno smartphone con una batteria da 5.000 mAh dovrebbe trattenere più o meno quella quantità quando la batteria è nuova.

Poi interviene la chimica. Ogni ciclo di carica e scarica invecchia un po' la cella. Calore, tensione elevata, scariche profonde, ricarica rapida e semplice passare del tempo si sommano. Lo strato di interfaccia dell'elettrolita solido all'interno della batteria si ispessisce, la resistenza interna aumenta e rimane meno litio attivo per spostare la carica tra gli elettrodi.

La percentuale dello stato confronta la capacità massima attuale con quella originale. Se una batteria arriva ormai a circa 4.350 mAh, il suo stato è approssimativamente dell'87 %.

Questa è la parte utile del numero. Mostra quanto si è ridotto il significato di "carica completa".

## Stato della batteria e livello di carica non sono la stessa cosa

È qui che nasce molta confusione. La percentuale di carica indica quanto è piena la batteria in quel momento. Lo stato della batteria mostra quanta energia può contenere quando è piena.

Un telefono al 100 % di carica con uno stato della batteria dell'85 % non contiene la stessa energia che aveva al 100 % quando era nuovo. È pieno rispetto alla capacità ridotta che gli resta. Per questo due telefoni possono mostrare entrambi il 100 % nella barra di stato e avere autonomie molto diverse.

Anche la dimensione iniziale della batteria cambia la percezione del numero. Un telefono da 5.500 mAh all'82 % può durare più di un modello compatto al 95 %. La percentuale è utile, ma non racconta tutto.

## Come Android mostra lo stato della batteria

Android non ha mai gestito questa informazione in modo uniforme come iOS. Per anni, i dati visibili alla maggior parte degli utenti si sono limitati a uno stato generico come Buono, Surriscaldata, Scarica, Fredda, Sovratensione, Sconosciuto o Errore non specificato. Questi valori indicano condizioni o guasti evidenti, non una percentuale precisa della capacità residua.

Molti telefoni mostrano ancora soltanto questo stato di base. Sui dispositivi con Android standard o vicino alla versione standard, il menu di test `*#*#4636#*#*` può mostrare alcune informazioni se il produttore lo ha lasciato attivo. Su molti modelli è nascosto. Alcuni mostrano temperatura e tensione, ma non lo stato percentuale.

Android 17 non rende la funzione universale. È stato distribuito inizialmente sui dispositivi Pixel supportati, ma la visualizzazione dello stato della batteria dipende ancora dal modello e dai dati che l'hardware mette a disposizione.

Pixel è l'esempio più chiaro di una schermata pensata per l'utente. Su Pixel 8a e modelli successivi, Google mostra Stato della batteria in **Impostazioni > Batteria > Stato della batteria**. Il risultato può essere Normale, Ridotta o Non disponibile, mentre la voce Capacità della batteria mostra una stima percentuale rispetto alla batteria nuova. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 e Pixel 8 Pro non indicano lo stato della batteria, anche se possono supportare altre funzioni di gestione.

Samsung usa un approccio diverso. L'app Samsung Members può avviare la Diagnostica dello smartphone e mostrare uno stato della batteria. Alcune versioni recenti di One UI espongono più informazioni nelle Impostazioni su determinati modelli, ma diciture e dati disponibili cambiano in base al dispositivo e al mercato.

Gli altri produttori Android sono altrettanto disomogenei. Alcuni modelli Xiaomi, HONOR, OnePlus, OPPO e realme mostrano la capacità massima nelle impostazioni della batteria. I dispositivi più vecchi, i modelli economici e quelli con un controller poco dettagliato spesso non la mostrano. In teoria Android offre oggi più supporto a questi dati. Nella pratica, decide sempre la combinazione tra hardware e software del produttore.

Per questo runcheck considera lo stato della batteria come uno dei segnali, non come un verdetto unico. Quando il telefono espone stato, tensione, temperatura, corrente, conteggio dei cicli o capacità, runcheck può mostrare gli indicatori disponibili con un livello di affidabilità, senza fingere che tutti i dispositivi Android forniscano dati della stessa qualità.

## Perché si parla sempre dell'80 %

L'80 % non è un numero magico. È una soglia comune per la fine della vita utile prevista.

Sotto l'80 % della capacità iniziale, l'autonomia diventa abbastanza breve da farsi notare per molti utenti. Di solito aumenta anche la resistenza interna, quindi è più probabile un calo di tensione sotto carico. Il telefono può spegnersi durante una raffica di foto, un gioco o una passeggiata al freddo anche se la percentuale sembrava ancora sufficiente pochi istanti prima.

I produttori moderni pubblicano obiettivi diversi, quindi il vecchio consiglio dei "300-500 cicli" è troppo semplicistico. Google indica che Pixel 8a e modelli successivi dovrebbero mantenere fino all'80 % della capacità per circa 1.000 cicli di ricarica. Per i modelli da Pixel 3 a Pixel 8 Pro e per Pixel Fold, il valore è circa 800 cicli. Nell'UE, gli smartphone e i tablet immessi sul mercato devono rispettare un requisito di progettazione ecocompatibile di almeno 800 cicli di carica e scarica mantenendo almeno l'80 % della capacità iniziale.

Per l'uso quotidiano, leggerei i numeri così:

- Sopra l'85 % va in genere bene, a meno che il telefono avesse una batteria piccola già da nuovo.
- Intorno all'80 %, chi usa molto il telefono spesso inizia a pianificare la sostituzione.
- Sotto il 75 %, le lamentele sull'autonomia non sorprendono più.
- Sotto il 70 %, sostituire la batteria è di solito la scelta pratica se vuoi tenere il telefono.

Non sono regole ufficiali. Sono punti utili per decidere.

## Perché il numero può essere sbagliato

Lo stato della batteria è una stima. Il telefono non porta la cella in laboratorio per misurarla in condizioni controllate.

Un chip di gestione stima la capacità osservando la carica che entra e che esce, la tensione, la temperatura e il comportamento durante la ricarica, poi confronta tutto con un modello teorico della cella. Quel modello può perdere precisione. Lunghi periodi di ricariche molto brevi, una sostituzione della batteria, un aggiornamento di sistema o una serie di temperature insolite possono far cambiare il valore mostrato.

Piccoli salti sono normali. Se il dato passa dall'88 % al 90 % dopo alcune ricariche più complete, la batteria non si è rigenerata. È migliorata la stima.

Le app di terze parti hanno lo stesso limite, ma usano metodi diversi. AccuBattery, per esempio, stima la capacità misurando la corrente durante le sessioni di ricarica e facendo una media nel tempo. Può essere utile dopo una o due settimane di uso normale, ma una singola sessione non basta. Un cavo scadente, il calore, una ricarica parziale o un telefono che rallenta vicino all'80 % possono alterare il risultato.

Conta anche l'hardware. I telefoni di fascia alta spesso hanno controller più precisi rispetto ai modelli economici. Alcuni dispositivi forniscono valori stabili e utili. Altri continuano a restituire il 100 % perché non espongono dati reali sull'invecchiamento.

## Cosa fare con la percentuale

Usa il valore come tendenza. Una lettura isolata è interessante. Un calo osservato nell'arco di sei mesi è molto più utile.

Se il telefono indica l'89 % e arriva ancora a fine giornata, non fare nulla. Se indica il 78 % e devi ricaricarlo due volte al giorno, vale la pena chiedere un preventivo per la sostituzione. Se si spegne al 25 %, si scalda durante un uso leggero o la percentuale salta in modo irregolare, considera questi sintomi più importanti del numero.

Se compare un rigonfiamento, smetti di usare il telefono. A quel punto la percentuale non conta più.

runcheck è utile perché permette di osservare lo stato della batteria insieme a temperatura, tensione, affidabilità della corrente, velocità di scarica e cronologia. L'invecchiamento raramente appare come un unico numero pulito. Si manifesta come un insieme di segnali.

## Domande comuni

### L'85 % di stato della batteria è un valore negativo?

No. All'85 % la cella ha perso capacità, ma la maggior parte dei telefoni rimane utilizzabile. Per esempio, all'85 % una batteria capiente può conservare circa 4.250 mAh. Può ancora bastare per un'intera giornata, a seconda del telefono e delle tue abitudini.

### Lo stato della batteria può tornare a salire?

La capacità chimica reale non torna indietro. L'invecchiamento delle celle agli ioni di litio è permanente. Il valore mostrato può però aumentare se il telefono aveva sottostimato la capacità e successivamente la ricalcola con maggiore precisione.

### Perché il telefono mostra "Buono" invece di una percentuale?

Perché molti dispositivi Android espongono soltanto uno stato generale. "Buono" significa che Android non rileva una condizione di guasto. Non significa che la cella conservi ancora il 100 % della capacità originale.

### Devo sostituire la batteria esattamente all'80 %?

Non automaticamente. Sostituiscila quando il telefono non copre più la tua giornata, quando si spegne senza motivo oppure quando lo stato è Ridotta e l'autonomia è diventata un problema. L'80 % è un segnale per iniziare a pianificare, non un conto alla rovescia.
