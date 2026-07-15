---
title: "Come funziona la memoria flash NAND nei telefoni e perché rallenta"
description: "Gli smartphone usano memoria flash NAND. Ecco perché una memoria quasi piena riduce le prestazioni, cosa fanno TRIM e garbage collection e come mantenere efficiente lo storage I/O."
listSummary: "Gli smartphone usano memoria flash NAND."
hub: "storage"
sourceNumber: 89
order: 11
tags: ["prestazioni","velocita","android","ottimizzazione","risoluzione-dei-problemi"]
locale: "it"
draft: false
---
Il telefono può avere un SoC veloce, molta RAM e sembrare comunque impastato quando la memoria è quasi piena. Le app esitano prima di aprirsi. La fotocamera impiega un attimo in più per salvare una foto. Gli aggiornamenti richiedono più tempo del dovuto.

Non è sempre colpa del processore. A volte il collo di bottiglia è la memoria.

## Cosa fa la memoria flash NAND

Gli smartphone conservano app, foto, messaggi, cache e dati di sistema in chip NAND saldati sulla scheda madre. Un telefono venduto come modello da 128 GB non offre tutti i 128 GB per i tuoi file, perché Android, le partizioni di sistema, i dati di ripristino, lo spazio riservato e l'overhead del file system ne occupano una parte.

La NAND memorizza i dati come carica elettrica in celle minuscole. Le celle sono organizzate in pagine, a loro volta raggruppate in blocchi di cancellazione più grandi. Il punto scomodo è questo: la NAND può scrivere su pagine vuote, ma non può sovrascrivere direttamente una pagina già usata.

Per aggiornare un dato, il controller scrive la nuova versione in un altro punto, contrassegna la vecchia pagina come non valida e aggiorna la tabella di mappatura. Più tardi, durante la pulizia, raccoglie le pagine ancora valide di un blocco, le sposta se necessario e cancella il vecchio blocco per poterlo riutilizzare.

Questo processo si chiama garbage collection. È normale. Ed è anche uno dei motivi per cui un telefono quasi pieno si comporta peggio dello stesso telefono con più margine.

## Perché la memoria piena rallenta il telefono

Quando ci sono molti blocchi vuoti, scrivere è semplice. Il controller sceglie una zona libera e prosegue.

Quando la memoria è quasi piena, i blocchi puliti disponibili diminuiscono. Il controller deve lavorare di più per trovare spazio, spostare i dati validi, cancellare i blocchi e infine scrivere i nuovi dati. Questo lavoro interno aggiuntivo si chiama write amplification e può comparire nell'uso quotidiano sotto forma di piccoli blocchi o esitazioni.

Puoi notarlo quando installi app, salvi video, scarichi aggiornamenti o passi tra app che mantengono cache grandi. Un telefono con il 95 % della memoria occupata può sembrare molto più vecchio di quanto sia davvero.

La regola pratica è semplice: quando puoi, mantieni libero almeno il 15-20 % della memoria interna. Non è una soglia magica e i controller si comportano in modo diverso, ma quello spazio lascia ad Android e al controller il margine necessario per lavorare.

## TRIM, garbage collection e tempo di inattività

Quando elimini un file, Android non cancella immediatamente ogni cella NAND che lo conteneva. Il file system contrassegna il file come eliminato. Il controller deve comunque sapere quali blocchi sottostanti possono essere recuperati.

TRIM fornisce proprio questa informazione. Su Android la manutenzione passa attraverso `fstrim` e le operazioni eseguite quando il dispositivo è inattivo. Il sistema comunica al livello di memoria quali blocchi non servono più, così la garbage collection può recuperarli in seguito.

Per questo, dopo una pulizia importante, può essere utile lasciare il telefono fermo e in carica. Elimini i file, Android può completare la manutenzione e il controller può riordinare la memoria. Non aspettarti un miracolo dopo cinque minuti. Il lavoro avviene in background.

No, non devi deframmentare la memoria del telefono. La deframmentazione era pensata per i dischi rigidi meccanici. Sulla NAND crea scritture inutili e non risolve il problema reale.

## SLC, MLC, TLC e QLC in parole semplici

Le celle NAND possono conservare quantità diverse di dati per cella.

SLC memorizza un bit in ogni cella. È veloce e resistente, ma troppo costosa per la normale memoria di uno smartphone.

MLC memorizza due bit. Era più comune nei vecchi sistemi di fascia alta, ma è stata in gran parte sostituita da NAND più dense.

TLC memorizza tre bit nella stessa cella. È comune nella memoria consumer moderna perché offre un compromesso abbastanza buono tra costo, capacità e velocità per gli smartphone.

QLC memorizza quattro bit. È più densa e costa meno per gigabyte, ma ha una resistenza inferiore. I produttori raramente dichiarano il tipo esatto di celle NAND usato, quindi non presumere di sapere cosa c'è in un dispositivo soltanto dalla capacità di memoria.

Inserire più dati in ogni cella richiede letture di tensione più precise e una correzione degli errori più intensa. È questo il compromesso. I controller moderni nascondono gran parte della complessità con wear leveling, ECC, area di riserva e cache.

## UFS ed eMMC contano più di quanto sembri

L'interfaccia della memoria conta quanto la NAND stessa.

Molti telefoni Android vecchi o economici usano eMMC. È semplice e poco costosa, ma gestisce peggio il multitasking intenso. I componenti eMMC 5.1 di Samsung, per esempio, dichiaravano al lancio fino a 250 MB/s in lettura sequenziale e 125 MB/s in scrittura sequenziale.

UFS è lo standard più recente per la memoria degli smartphone. Supporta l'accodamento dei comandi e il funzionamento full-duplex, quindi può gestire letture e scritture in modo più efficiente sotto carico. I dispositivi con UFS 3.1 dichiarano spesso letture sequenziali intorno a 2.100 MB/s. UFS 4.0 ha raddoppiato il valore di punta, portandolo a 4.200 MB/s in lettura sequenziale nella prima memoria UFS 4.0 annunciata da Samsung.

Sono valori sequenziali nelle condizioni migliori, non una promessa che ogni app si apra due volte più velocemente. La differenza però esiste. Un telefono economico con eMMC può sembrare più lento durante aggiornamenti, installazioni e raffiche fotografiche anche quando il processore appare valido sulla carta.

## Come si manifesta l'usura della memoria

La NAND si usura man mano che i blocchi attraversano cicli di programmazione e cancellazione. I controller distribuiscono le scritture per evitare che una zona si guasti prima delle altre. È il wear leveling.

Nell'uso normale, l'usura della memoria richiede in genere anni prima di diventare importante. Le persone riempiono il telefono, installano aggiornamenti, registrano video e svuotano cache molto prima che la resistenza della NAND diventi la causa principale dei rallentamenti. I carichi con molte scritture sono diversi. Un dispositivo usato per registrazione continua, video o test può invecchiare la memoria più rapidamente.

Android non mostra alla maggior parte degli utenti una percentuale chiara di "stato della memoria". Alcuni strumenti di assistenza dei produttori espongono più dettagli, ma non in modo uniforme. I segnali visibili sono meno netti: installazioni lente, lunghi tempi di salvataggio, ritardi durante la scrittura di file e prestazioni scarse anche dopo aver liberato spazio e ridotto il carico in background.

## Come mantenere efficiente la memoria del telefono

Mantieni spazio libero. È la risposta noiosa, ma resta la migliore.

Evita le app di pulizia che promettono aumenti miracolosi di velocità. Molte eliminano soltanto cache che Android ricreerà. Peggio ancora, alcune restano attive in background e aggiungono più rumore di quanto ne rimuovano.

Elimina i vecchi download, disinstalla le app che non usi, sposta fuori dal telefono i video grandi e lascia il dispositivo fermo sul caricabatterie dopo una pulizia importante. Se supporta una scheda SD, usala per i contenuti multimediali, non per app che richiedono storage I/O veloce.

App come runcheck possono aiutare mostrando nel tempo la pressione sulla memoria invece di trattarla come un numero isolato. La tendenza conta: un telefono che passa lentamente dal 70 % al 94 % di spazio occupato sta spiegando da solo perché comincia a sembrare più lento.
