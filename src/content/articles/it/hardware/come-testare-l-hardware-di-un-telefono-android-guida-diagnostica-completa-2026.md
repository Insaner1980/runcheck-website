---
title: "Come testare l'hardware di un telefono Android: guida diagnostica completa (2026)"
description: "Un telefono Android può sembrare in perfetto stato e avere comunque un componente che sta cedendo. Una batteria usurata, un altoparlante debole, un sensore di prossimità difettoso o un'antenna danneggiata non sempre si manifestano in modo evidente. Noti soltanto meno autonomia, chiamate strane, calore casuale o una zona dello schermo che non risponde al tocco."
listSummary: "Un telefono Android può sembrare in perfetto stato e avere comunque un componente che sta cedendo."
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["batteria","consumo","risoluzione-dei-problemi","android","prestazioni"]
locale: "it"
draft: false
---
La buona notizia è che puoi controllare gran parte dell'hardware prima di pagare una riparazione. Android offre schermate di sistema, strumenti diagnostici dei produttori, codici da digitare nell'app Telefono e test manuali per i componenti principali. La parte scomoda è che nulla di tutto questo è davvero universale.

Google ha pubblicato Android 17 il 16 giugno 2026 per la maggior parte dei Pixel supportati, mentre gli altri marchi seguono calendari propri. Questo conta perché menu diagnostici, schermate sullo stato della batteria e percorsi nelle Impostazioni cambiano in base alla versione di Android, all'interfaccia del produttore, alla configurazione dell'operatore e alla regione. Considera ogni codice di questa guida una scorciatoia, non una promessa.

## Risposta rapida

Quando esiste, inizia dallo strumento diagnostico ufficiale del produttore.

- Samsung Galaxy: apri Samsung Members, tocca `Supporto`, quindi `Vedi test`. Puoi avviare `Testa tutto` oppure scegliere un componente, come batteria, altoparlante, microfono, display, fotocamera o sensori. Molti Galaxy supportano anche `*#0*#` nell'app Telefono per aprire un menu di test hardware.
- Google Pixel: con il telefono collegato a internet, digita `*#*#7287#*#*` per aprire l'app Diagnostica Pixel per la riparazione. Per Pixel Tablet, Google usa invece una procedura di diagnostica via web.
- Motorola: apri Device Help, quindi `Device diagnosis > Hardware test`. I nomi possono restare in inglese a seconda del modello e della lingua dell'app.
- Xiaomi, Redmi e POCO: prova `*#*#6484#*#*` per aprire il menu diagnostico CIT. Su molti modelli puoi raggiungerlo anche toccando cinque volte la versione del kernel nelle informazioni dettagliate del telefono.
- Telefoni con Android quasi stock: `*#*#4636#*#*` può aprire un menu di test su molti dispositivi, soprattutto per informazioni su telefono, rete, utilizzo e batteria. Non è una diagnostica hardware completa e numerosi Samsung o firmware degli operatori lo bloccano.

Se un codice non fa nulla, non insistere. Usa i test manuali descritti sotto oppure un'app di diagnostica.

## Prima distingui tra software e hardware

Questo passaggio può evitare una spesa inutile. Un problema software può sembrare identico a un componente rotto.

La modalità provvisoria è il primo filtro. Su molti telefoni puoi aprire il menu di alimentazione, poi tenere premuto `Spegni` finché compare la richiesta di riavvio in modalità provvisoria. Su altri modelli la combinazione è diversa, ma l'obiettivo è lo stesso: avviare Android con le app di terze parti disattivate.

Se il problema scompare in modalità provvisoria, è probabile che sia coinvolta un'app installata. Rimuovi le app recenti una alla volta e riavvia normalmente dopo ogni disinstallazione. Se il difetto continua anche in modalità provvisoria, la causa può essere Android, il firmware del produttore o l'hardware.

Il ripristino dei dati di fabbrica è l'ultimo test software. Prima salva i dati. Se il problema sopravvive a un ripristino pulito senza app recuperate dal backup, l'hardware diventa molto più sospetto.

Cerca schemi ripetibili. Una zona morta del touch sempre nello stesso punto indica display o digitalizzatore. Un telefono che si spegne al 20 % ma funziona quando è collegato indica la batteria. Una fotocamera che ha iniziato a vibrare dopo una caduta può avere il modulo di messa a fuoco o OIS danneggiato. Se l'instabilità è comparsa subito dopo un aggiornamento importante, compreso Android 17 su Pixel, installa le patch disponibili e riprova prima di concludere che la scheda madre è guasta.

## Perché l'hardware si guasta

Le batterie si consumano. È una conseguenza della chimica agli ioni di litio. Google usa l'80 % di capacità rimanente come soglia per consigliare la sostituzione sui Pixel, con un numero nominale di cicli che dipende dal modello. Da Pixel 3 a Pixel 8 Pro e Pixel Fold sono indicati circa 800 cicli, mentre Pixel 8a e modelli successivi sono indicati per circa 1000 cicli.

Porte e pulsanti cedono con l'uso. Le porte USB-C raccolgono lanugine, soprattutto se il telefono resta spesso in tasca. I pulsanti perdono il loro scatto dopo migliaia di pressioni. Le griglie degli altoparlanti si ostruiscono così lentamente che potresti accorgertene soltanto quando le chiamate iniziano a sembrare ovattate.

Le cadute provocano problemi meno prevedibili. Il vetro può restare intatto mentre un connettore si allenta, un modulo fotocamera si danneggia, il telaio si piega o una saldatura si indebolisce. L'acqua è peggiore, perché la corrosione può manifestarsi giorni o settimane dopo.

Il calore accelera quasi tutto. Ricaricare sotto il sole, giocare durante la ricarica o lasciare il telefono in un'auto calda può invecchiare più rapidamente la batteria e attivare il thermal throttling, cioè la riduzione delle prestazioni dovuta al calore. Temperature della batteria mantenute sopra circa 40 °C meritano attenzione.

Anche le differenze di produzione sono reali. Due telefoni con lo stesso nome di modello non si comportano in modo perfettamente identico. Piccole differenze tra chip, contatto termico, pannello del display, calibrazione dei sensori, firmware del modem e varianti regionali possono cambiare autonomia, calore, segnale e risultati dei benchmark. Non significa automaticamente che uno dei due esemplari sia difettoso. Significa che i numeri trovati online sono intervalli, non promesse.

## Testa la batteria

Parti dalle informazioni che il telefono mostra davvero.

Su Pixel 8a e modelli successivi, apri `Impostazioni > Batteria > Stato della batteria`. Lo stato indica `Normale`, `Ridotta` o `Non disponibile`, mentre `Capacità della batteria` mostra una stima della capacità rimanente rispetto a quella originale. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 e Pixel 8 Pro non mostrano lo stesso stato della batteria.

Su Samsung, usa la diagnostica di Samsung Members. Il percorso ufficiale è `Samsung Members > Supporto > Vedi test`, poi seleziona il test della batteria. Le diciture possono cambiare con versione e regione, ma Samsung Members è una scelta più sicura dei codici casuali trovati online.

Su OnePlus, OPPO, realme, Xiaomi e altri marchi, cerca nelle impostazioni della batteria o nell'app di manutenzione del produttore. Alcuni mostrano lo stato della batteria, altri no. La disponibilità di questi dati resta irregolare tra produttori e modelli.

La batteria è sospetta quando il telefono si scarica rapidamente con un uso leggero, si spegne tra il 15 e il 20 %, diventa molto caldo durante la ricarica oppure il display o la cover posteriore iniziano a sollevarsi. Smetti di usare un telefono con batteria gonfia e fallo controllare. Non è un problema software.

## Testa schermo e touch

Per individuare pixel morti, visualizza a schermo intero immagini bianche, nere, rosse, verdi e blu. Osserva lentamente tutto il pannello. I pixel morti restano neri. Quelli bloccati restano accesi con un solo colore. Il burn-in OLED si vede meglio su uno sfondo grigio uniforme con luminosità media.

Per il touch, apri un'app di disegno e traccia linee orizzontali e verticali fitte su tutto lo schermo. Le interruzioni rivelano le zone morte. Puoi anche attivare le Opzioni sviluppatore e usare `Mostra tocchi` o `Posizione puntatore`, quindi trascinare il dito sull'intero pannello.

Il menu `*#0*#` di Samsung include test per display e touch su molti Galaxy. Anche Diagnostica Pixel, Device Help di Motorola e il menu CIT di Xiaomi possono includerli, a seconda del modello.

## Testa altoparlanti e microfoni

Riproduci una suoneria, poi musica o un video che conosci bene. Ascolta se ci sono vibrazioni, distorsioni o un canale stereo molto più debole dell'altro. Sui telefoni stereo, copri un altoparlante alla volta con un dito per distinguere l'auricolare superiore dall'altoparlante inferiore.

Per il microfono, registra una breve nota vocale tenendo il telefono a circa un braccio di distanza e riascoltala. Poi prova una chiamata reale. L'audio delle chiamate usa cancellazione del rumore ed elaborazione della rete, quindi una registrazione può sembrare normale anche quando le telefonate suonano male.

Prima di accusare l'hardware, rimuovi la cover, scollega i dispositivi Bluetooth, pulisci le aperture di altoparlanti e microfoni con una spazzola morbida e asciutta e controlla l'autorizzazione al microfono dell'app usata per il test.

## Testa le fotocamere

Apri l'app Fotocamera e prova ogni sensore disponibile: grandangolare posteriore, ultragrandangolare, teleobiettivo, macro se presente e fotocamera anteriore. Cerca messa a fuoco che continua a oscillare, zone sempre sfocate, dominanti di colore, tremolio nei video o scatti e clic durante la messa a fuoco.

La stabilizzazione ottica può guastarsi dopo una caduta. Il sintomo è spesso evidente: il video vibra anche quando tieni ferme le mani oppure la fotocamera emette un ronzio. Il software può cambiare l'elaborazione dell'immagine, ma non può fissare un modulo di stabilizzazione fisicamente allentato.

## Testa ricarica e porte

Prima di accusare il telefono, usa un cavo e un caricabatterie sicuramente funzionanti. Sembra banale, ma molti presunti guasti della porta USB-C sono in realtà cavi difettosi.

Illumina la porta e controllala. La lanugine può accumularsi sul fondo e impedire al connettore di entrare completamente. Se decidi di pulirla, spegni il telefono e usa con grande cautela uno strumento sottile di legno o plastica, oppure aria a bassa pressione. Non raschiare i contatti con metallo.

Se il telefono carica soltanto mantenendo il cavo in una certa posizione, si scollega appena lo muovi o non trasferisce dati con più cavi diversi, la porta o la scheda inferiore possono richiedere una riparazione.

## Testa i sensori

I guasti dei sensori producono problemi molto specifici: la rotazione automatica smette di funzionare, lo schermo resta acceso durante le chiamate, la bussola indica la direzione sbagliata o la luminosità automatica reagisce in modo eccessivo.

Per accelerometro e giroscopio, disattiva il blocco della rotazione e gira lentamente il telefono. Lo schermo dovrebbe seguire il movimento senza esitazioni. Anche una foto panoramica è un controllo discreto del giroscopio, perché l'unione delle immagini dipende dal rilevamento del movimento.

Per il sensore di prossimità, avvia una chiamata e copri la parte superiore dello schermo vicino all'auricolare. Il display dovrebbe spegnersi e riaccendersi quando togli la mano. Prima di dichiarare rotto il sensore, rimuovi cover e protezione dello schermo.

Per il sensore di luce, attiva la luminosità automatica e passa da un ambiente luminoso a uno buio. Lo schermo dovrebbe adattarsi entro pochi secondi.

Per il magnetometro, apri Maps o un'app bussola all'aperto, lontano da auto, computer portatili, magneti e tavoli metallici. Se la direzione è errata, ricalibra muovendo il telefono a forma di otto.

Il menu `*#0*#` e Samsung Members possono testare i sensori sui Galaxy. Diagnostica Pixel, Device Help di Motorola e CIT di Xiaomi possono includere test simili, a seconda del modello.

## Testa l'hardware di rete

I problemi di antenna e radio sono più difficili da dimostrare perché la rete dell'operatore cambia continuamente. Confronta il telefono con un altro dispositivo sulla stessa rete, nello stesso punto e nello stesso momento.

La potenza del segnale viene spesso indicata in dBm nelle informazioni di stato o della SIM. La scala è negativa, quindi un valore più vicino allo zero è migliore. Circa -50 dBm è eccellente, attorno a -90 dBm è utilizzabile e circa -110 dBm o meno è scarso. Questi valori non significano esattamente la stessa cosa su LTE, 5G e Wi-Fi, quindi usali per confrontare dispositivi e posizioni, non come soglia universale.

Se il telefono perde il Wi-Fi mentre tutti gli altri dispositivi restano connessi, provalo vicino al router, su un'altra rete Wi-Fi e con il Bluetooth disattivato. Se lo stesso telefono fallisce ovunque, diventano più probabili un problema radio o un difetto del firmware.

runcheck è utile perché raccoglie dati su batteria, temperatura, rete, memoria e speed test in un unico controllo. Dopo cadute, surriscaldamenti o contatto con acqua, più sintomi possono sovrapporsi.

## Quando riparare

La riparazione ha senso quando il problema è ripetibile, continua in modalità provvisoria, sopravvive a un ripristino pulito e compare anche nella diagnostica del produttore o in un test manuale.

Non sostituire un componente perché una sola app si è comportata male una volta. Fai invece controllare o riparare il telefono se la batteria è gonfia, la porta di ricarica è fisicamente allentata, il touch fallisce sempre nella stessa zona, la fotocamera vibra dopo una caduta oppure i microfoni non funzionano né nelle registrazioni né nelle chiamate.

## Domande comuni

### I codici diagnostici sono sicuri?

I menu di test comuni elencati qui sono per lo più informativi o contengono controlli hardware interattivi. Non digitare comunque codici casuali trovati online. Alcuni codici dei produttori possono modificare le impostazioni radio o avviare operazioni di assistenza.

### Perché `*#*#4636#*#*` non funziona?

Non è uno standard Android universale. Funziona su molti firmware simili ad Android stock, ma può essere disattivato da Samsung, dall'operatore o dal produttore.

### Ogni quanto dovrei testare l'hardware?

Per la manutenzione normale bastano controlli ogni pochi mesi. Eseguili subito dopo una caduta forte, un contatto con acqua, un consumo improvviso della batteria, problemi di ricarica o prima di comprare o vendere un telefono usato.

### Un telefono lento ha sempre un problema hardware?

No. Parti da modalità provvisoria, spazio libero, aggiornamenti delle app e aggiornamenti di sistema recenti. Se la lentezza continua dopo un ripristino dei dati di fabbrica, allora vale la pena considerare usura della memoria, batteria debole, thermal throttling o altri problemi hardware.
