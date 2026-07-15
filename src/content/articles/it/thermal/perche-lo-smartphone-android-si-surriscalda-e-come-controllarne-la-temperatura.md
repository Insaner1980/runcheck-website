---
title: "Perché lo smartphone Android si surriscalda e come controllarne la temperatura"
description: "Uno smartphone Android può sembrare caldo per motivi banali, per problemi seri o senza una causa evidente. La parte difficile è capire quale temperatura stai osservando e se quel numero ha davvero un significato."
listSummary: "Uno smartphone Android può sembrare caldo per motivi banali, per problemi seri o senza una causa evidente."
hub: "thermal"
sourceNumber: 53
order: 1
tags: ["temperatura","termico","android","risoluzione-dei-problemi","hardware"]
locale: "it"
draft: false
---
## Controlla prima la temperatura

Parti dagli strumenti integrati. Sono meno appariscenti delle app che mostrano i sensori, ma hanno anche meno probabilità di inventare una precisione che lo smartphone in realtà non espone.

Sui Google Pixel, Android 17 è stato distribuito prima sui dispositivi Pixel supportati, mentre gli altri marchi Android seguono calendari di aggiornamento propri. Su Pixel 6a e modelli successivi, apri **Impostazioni > Batteria**, poi scegli **Diagnostica della batteria > Lo smartphone è molto caldo**. Lo strumento Pixel non mostra sempre una temperatura numerica della batteria. Fornisce indicazioni specifiche per il dispositivo in base al suo stato termico attuale.

Per lo stato della batteria sui Pixel più recenti, apri la schermata Batteria e scegli **Stato della batteria**. La pagina di assistenza Google attuale indica che lo stato e la capacità della batteria sono disponibili su Pixel 8a e modelli successivi, ma non su Pixel Tablet. Modelli precedenti come Pixel 6a, Pixel 7, Pixel 7a, Pixel 8 e Pixel 8 Pro non mostrano questo stato della batteria.

Sui Samsung Galaxy, il controllo ufficiale passa dall'app Samsung Members. Apri **Samsung Members > Supporto**, tocca **Inizia ora** nella sezione **Diagnostica dello smartphone**, quindi scegli **Stato batteria**. Samsung indica il risultato come **Normale**, **Debole** o **Cattivo**. Alcuni Galaxy mostrano informazioni utili anche nelle impostazioni della batteria e di Assistenza dispositivo, ma i nomi precisi dei menu cambiano tra versioni di One UI, aree geografiche e modelli.

Vale ancora la pena provare il vecchio codice da tastierino `*#*#4636#*#*`, ma non basare tutta la diagnosi su quello. Su alcuni smartphone Android apre un menu di test con informazioni sul telefono, sul Wi-Fi, sull'utilizzo e talvolta sulla batteria. Su molte versioni attuali di Samsung, Xiaomi e Pixel, la schermata della batteria non compare oppure il codice non fa nulla. È normale. Non significa che il dispositivo sia guasto.

Un'app di diagnostica è la soluzione di riserva quando il produttore non espone abbastanza dati. Le app migliori mostrano la temperatura della batteria, la corrente di ricarica, lo stato termico di Android e la cronologia. Fai però attenzione alle letture precise della temperatura della CPU. Android non espone alle normali app un unico valore universale e pulito. Alcune app leggono sensori del produttore quando il dispositivo lo permette. Alcune mostrano solo la temperatura della batteria. Altre fanno una stima.

runcheck è utile quando il singolo numero conta meno dell'andamento nel tempo. Collega le letture termiche allo stato della batteria, alla rete, alla pressione sulla memoria e alla cronologia di stato, così puoi capire se il calore è iniziato con la ricarica, un segnale debole, un'app in background o una tendenza più lunga.

## Cosa significa il numero

La temperatura della batteria non è la stessa cosa della temperatura esterna. Uno smartphone può sembrare caldo perché il telaio sta disperdendo il calore prodotto dal processore, mentre la batteria è ancora in un intervallo sicuro. Può accadere anche il contrario, soprattutto durante la ricarica.

Usa questi intervalli come guida pratica, non come regola di laboratorio:

- **20-35 °C:** normale nell'uso quotidiano. Messaggi, navigazione web e streaming leggero dovrebbero restare in genere in questa zona, a meno che l'ambiente non sia caldo.
- **35-40 °C:** caldo, ma comune durante navigazione, videochiamate, gaming, download in 5G o ricarica.
- **40-45 °C:** merita attenzione. Lo smartphone può ridurre la luminosità, rallentare la ricarica o limitare le prestazioni.
- **Oltre 45 °C:** smetti di aggiungere calore. Scollegalo, chiudi le app pesanti, togli la cover e spostalo lontano dal sole.
- **Intorno a 50 °C o più:** trattalo come un episodio di surriscaldamento, soprattutto se compare un avviso, il telefono si spegne o diventa scomodo da tenere in mano.

I produttori descrivono in genere l'uso sicuro in termini di temperatura ambiente. Samsung indica 0-35 °C (32-95 °F) come ambiente di utilizzo ottimale per i dispositivi Galaxy, e Google riporta lo stesso intervallo nelle indicazioni di sicurezza per Pixel. Le letture interne della batteria possono salire temporaneamente sotto carico, ma è l'esposizione ripetuta al calore ad accelerarne l'usura.

## Da dove viene il calore

La maggior parte del calore arriva da quattro fonti: SoC, batteria, moduli radio e ambiente.

CPU e GPU si scaldano quando lavorano molto. Gaming, registrazione video 4K, elaborazione delle foto, montaggio video, navigazione e installazione di app possono spingere il silicio abbastanza da rendere caldo il telefono vicino alla fotocamera o al bordo superiore. Quando il calore non riesce a disperdersi abbastanza in fretta, i controlli termici di Android riducono le prestazioni. Questo è il thermal throttling, cioè la limitazione delle prestazioni causata dal calore.

La batteria si scalda durante la ricarica e le scariche intense. La ricarica rapida produce più calore rispetto a un caricabatterie lento da 5 W o 10 W perché trasferisce più energia in meno tempo. Usare lo smartphone durante la ricarica rapida crea il classico doppio carico: calore della ricarica più calore del processore.

I moduli radio contano più di quanto si pensi. Un segnale cellulare debole costringe il modem a lavorare di più. In un seminterrato con una sola tacca, uno smartphone può scaldarsi mentre è inattivo più dello stesso modello appoggiato su una scrivania con un buon Wi-Fi. Se il calore scompare in modalità aereo, la ricerca del segnale probabilmente contribuiva al problema.

L'ambiente stabilisce il punto di partenza. Uno smartphone sotto il sole diretto, in un'auto calda, sotto un cuscino o dentro una cover di gomma spessa parte con meno margine per raffreddarsi. I telefoni non hanno ventole. Disperdono il calore attraverso telaio, schermo e pannello posteriore.

## La ricarica wireless merita una nota a parte

La ricarica wireless è comoda, ma tollera meno gli errori di una ricarica via cavo. I caricabatterie Qi e Qi2 usano l'induzione magnetica, e l'allineamento conta. Qi2 migliora l'allineamento con i magneti, mentre Qi2 25W porta la potenza wireless certificata oltre il precedente livello di 15 W. Il calore, però, deve comunque andare da qualche parte.

Un caricabatterie Qi2 ben allineato o un supporto simile a Pixel Stand di solito va bene. Una base disallineata, una cover spessa, un anello metallico o una stanza calda possono trasformare una ricarica normale in una ricarica molto calda. Per risolvere problemi di ricarica wireless lenta, Google consiglia agli utenti Pixel di togliere la cover, evitare il sole diretto, controllare l'allineamento e verificare che il caricabatterie non blocchi il flusso d'aria.

La regola pratica è semplice: se la ricarica wireless scalda molto lo smartphone ogni notte, cambia configurazione. Prova senza cover, scegli un caricabatterie certificato, allinealo bene e attiva un limite all'80% se il modello lo offre. Un po' di calore occasionale non è un disastro. Calore, 100% di carica e diverse ore sulla base sono un'abitudine peggiore.

## Controlli integrati prima di installare qualcosa

Apri la schermata che mostra l'uso della batteria e cerca app che consumano energia quando non le hai usate. Un'app di navigazione dopo un viaggio ha senso. Un'app per lo shopping che consuma il 18% durante la notte no.

Riavvia lo smartphone. Sul serio. Un servizio bloccato può mantenere attiva la CPU per ore, e un riavvio elimina quello stato più in fretta di una caccia attraverso tutti i menu delle app.

Controlla gli aggiornamenti recenti. Un aggiornamento importante di Android, compreso Android 17 sui Pixel e in seguito le versioni dei produttori, può far scaldare il telefono per un giorno mentre ottimizza le app, ricostruisce gli indici e completa la sincronizzazione nel cloud. Se il calore scompare dopo 24-48 ore, probabilmente era soltanto il lavoro successivo all'aggiornamento.

Prova la modalità provvisoria se il problema torna anche dopo un riavvio. Sui Pixel, usa la combinazione del pulsante di accensione prevista dal modello, poi tieni premuta l'opzione per spegnere o riavviare finché compare la richiesta della modalità provvisoria. Questa modalità disattiva le app scaricate. Se il dispositivo resta fresco, il problema punta verso un'app di terze parti.

## Controlli avanzati con ADB

Se hai dimestichezza con ADB, puoi esaminare le zone termiche da un computer:

```bash
adb shell for z in /sys/class/thermal/thermal_zone*; do echo "$z"; cat "$z/type"; cat "$z/temp"; done
```

Molti valori sono espressi in millesimi di grado Celsius, quindi `38000` significa 38 °C. La parte difficile non è leggere i numeri, ma capire a quale sensore corrispondono. I produttori assegnano nomi diversi alle zone termiche e alcune letture sono bloccate o poco utili sui dispositivi destinati alla vendita.

Per la diagnostica nelle app, le API termiche pubbliche di Android sono in genere più pulite. Android 10 ha introdotto i livelli di stato termico tramite `PowerManager`, mentre le versioni successive espongono anche il margine termico sui dispositivi supportati. Un valore vicino a 1,0 indica che, con il carico attuale, il dispositivo è vicino a una limitazione severa delle prestazioni.

## Domande comuni

### È normale che uno smartphone sia tiepido?

Sì, durante ricarica, gaming, navigazione, videochiamate, uso dell'hotspot e download di grandi dimensioni. Tiepido non significa automaticamente pericoloso. È il calore mentre il telefono è inattivo che merita un controllo.

### Il surriscaldamento può danneggiare il telefono in modo permanente?

Il calore ripetuto colpisce soprattutto la batteria. Le batterie agli ioni di litio invecchiano più rapidamente quando restano calde, in particolare a livelli di carica elevati. Gli smartphone moderni si proteggono rallentando, interrompendo la ricarica, disattivando funzioni o spegnendosi prima di arrivare al caso peggiore.

### Devo chiudere tutte le app?

Chiudi l'app che sta producendo attivamente calore, per esempio un gioco, una sessione con la fotocamera, un editor video o la navigazione. Non serve eliminare ossessivamente tutte le app inattive dalla schermata recenti. Android gestisce la memoria meglio di quanto suggeriscano i vecchi consigli sui task killer.

### Perché lo smartphone si scalda durante la ricarica?

La ricarica genera calore all'interno della batteria. La ricarica rapida ne produce di più. Usare contemporaneamente il telefono aggiunge il calore di processore e schermo. Se succede ogni volta che colleghi il caricabatterie, prova una potenza più bassa, un altro cavo e una ricarica senza cover.

## In conclusione

Usa prima gli strumenti del produttore, poi un'app di diagnostica se ti serve una cronologia. Considera i codici da tastierino un'aggiunta, non una garanzia. E quando il telefono è chiaramente caldo, non continuare a spingerlo. Elimina la fonte di calore, lascialo raffreddare e poi cerca lo schema che si ripete.

*Meta descrizione: Scopri come controllare la temperatura di uno smartphone Android, cosa indicano gli intervalli pratici della batteria e come Android 17, la diagnostica Pixel, Samsung Members, la ricarica, le app e la potenza del segnale influiscono sul surriscaldamento.*
