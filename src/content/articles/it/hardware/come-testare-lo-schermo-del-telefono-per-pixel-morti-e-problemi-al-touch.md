---
title: "Come testare lo schermo del telefono per pixel morti e problemi al touch"
description: "Stai controllando uno smartphone usato. Il venditore sostiene che lo schermo sia perfetto e, a prima vista, sembra davvero così. Poi apri una schermata bianca e noti un puntino nero vicino a un angolo. Oppure inizi a scrivere e una striscia della tastiera non rileva il dito."
listSummary: "Stai controllando uno smartphone usato."
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["hardware","test","diagnostica","android","guida"]
locale: "it"
draft: false
---
I problemi dello schermo si nascondono bene durante l'uso normale. Sfondi, icone, modalità scura e immagini in movimento coprono molti difetti. Bastano alcune schermate a tinta unita e qualche test del touch per individuarli molto più facilmente.

## Pixel morti e pixel bloccati

Un pixel morto rimane nero qualunque cosa mostri lo schermo. Ha smesso di funzionare.

Un pixel bloccato è diverso. Rimane acceso su un solo colore, di solito rosso, verde, blu o bianco, anche quando cambia tutto ciò che lo circonda. A volte i pixel bloccati reagiscono agli strumenti che alternano rapidamente i colori. I pixel morti, in genere, no.

Entrambi si vedono meglio su sfondi uniformi. Non limitarti a guardare la schermata Home e concludere che sia tutto a posto. Rischieresti di non notare parecchi difetti.

## Controlla i pixel morti e bloccati

Alza la luminosità, pulisci il vetro e visualizza a schermo intero colori uniformi. Usa bianco, nero, rosso, verde, blu e grigio.

Un test nel browser, come deadpixeltest.org, va bene. Un'app per testare lo schermo dal Play Store può essere più comoda, perché può nascondere le barre di stato e di navigazione, cambiare automaticamente colore e includere prove con sfumature.

Alcuni telefoni includono test integrati:

- Samsung Galaxy: su molti modelli puoi comporre `*#0*#`, quindi usare i test Red, Green, Blue, Black e Touch. In Samsung Members puoi anche aprire Supporto > Diagnostica dello smartphone e scegliere il test dello schermo, se disponibile sul modello.
- Google Pixel: componi `*#*#7287#*#*` per aprire Diagnostica Pixel per la riparazione sui dispositivi compatibili. Serve una connessione a internet e l'interfaccia dello strumento è in inglese.
- Xiaomi, Redmi e POCO: prova `*#*#6484#*#*` per aprire il menu CIT.
- Motorola: apri l'app Device Help e avvia un test di diagnostica hardware.

Su uno sfondo bianco, i pixel morti sembrano piccoli punti neri. Su uno sfondo nero, i pixel bloccati appaiono come punti luminosi colorati. Le schermate rosse, verdi e blu aiutano a capire quale subpixel è rimasto bloccato.

Prenditi il tempo necessario. Un controllo lento lungo bordi e angoli trova più difetti di una rapida sequenza di colori.

## Controlla l'uniformità della luminosità e il burn-in

Su un telefono LCD, una schermata completamente nera in una stanza poco illuminata aiuta a vedere le perdite di luce della retroilluminazione, che appaiono come chiazze più chiare vicino ai bordi. Gli schermi OLED non hanno una retroilluminazione, quindi non mostrano lo stesso tipo di difetto.

Gli OLED hanno un altro problema: il burn-in. I pannelli AMOLED, Super AMOLED e Dynamic AMOLED possono invecchiare in modo irregolare quando gli stessi elementi rimangono sullo schermo per molto tempo. Le sagome più comuni sono barre di navigazione, icone di stato, tastiere e comandi delle app social.

Usa una schermata grigia uniforme a luminosità media. Cerca ombre leggere della tastiera, dei pulsanti di navigazione, dell'orologio o delle barre delle app. Anche una schermata rossa può rendere più visibile parte del burn-in, perché i vari subpixel non invecchiano tutti allo stesso ritmo.

Il burn-in è permanente. Le app che promettono di eliminarlo di solito cercano di consumare il resto del pannello per rendere meno evidente l'immagine rimasta impressa. Non è una vera riparazione.

## Verifica la risposta del touch

Uno schermo può sembrare perfetto e avere comunque un digitalizzatore difettoso. Il digitalizzatore è lo strato che rileva il tocco.

Apri un'app di disegno e scegli un pennello sottile. Traccia linee orizzontali dall'alto verso il basso, poi linee verticali da sinistra a destra. Tienile vicine tra loro. Se la linea si interrompe sempre nella stessa zona, quella parte del digitalizzatore non registra correttamente.

Un'app di test con una griglia rende la prova più semplice. Ogni riquadro dovrebbe evidenziarsi quando ci passi sopra con il dito. Le zone morte rimangono vuote.

Il menu Samsung `*#0*#` include un test Touch su molti Galaxy. Alcuni telefoni Android rispondono anche a `*#*#2664#*#*`, ma questo codice è molto meno affidabile degli strumenti del produttore. Se non succede nulla, non è un problema. Il test con il disegno è sufficiente.

Controlla con attenzione i bordi. Sugli schermi curvi e sui telefoni con cornici molto sottili, la risposta laterale può essere più difficile da valutare, soprattutto quando è attivo il rifiuto dei tocchi del palmo.

## Prova il multitouch

La maggior parte degli smartphone moderni supporta almeno cinque punti di contatto simultanei e molti ne supportano dieci. Un'app per il multitouch mostra un cerchio numerato per ogni dito.

Appoggia più dita sullo schermo e muovile lentamente. I cerchi devono seguire le dita senza saltare o sparire. Se il telefono perde sempre un dito nella stessa zona, hai trovato un indizio utile.

È un aspetto importante per i giochi, lo zoom con due dita, la tastiera e i gesti di accessibilità.

## Controlla i tocchi fantasma

I tocchi fantasma sono comandi che partono da soli. Il telefono apre app, scrive lettere, scorre pagine o preme pulsanti anche se nessuno sta toccando lo schermo.

Per prima cosa rimuovi pellicola e custodia. Pellicole economiche, umidità intrappolata e pressione sui bordi possono confondere il digitalizzatore. Pulisci lo schermo e prova sia con il caricatore collegato sia senza, perché alcuni alimentatori difettosi possono introdurre disturbi nel touch.

Poi avvia il telefono in modalità provvisoria. Se i tocchi fantasma continuano, l'hardware diventa il sospettato principale. Se scompaiono, potrebbe essere coinvolta un'app di terze parti o un overlay.

Se il problema è iniziato subito dopo un importante aggiornamento del sistema operativo, considera seriamente anche il software. Android 17 è arrivato prima sulla maggior parte dei Pixel supportati, mentre gli altri produttori seguono con tempi propri, quindi un bug del touch legato a un aggiornamento può comparire su un marchio prima che sugli altri. Installa le patch in attesa e prova di nuovo prima di pagare la sostituzione dello schermo.

## Cosa fare se trovi un difetto

Su uno smartphone usato, un pixel morto, una zona del touch non funzionante, tocchi fantasma o un burn-in visibile devono incidere sul prezzo. Non accettare la spiegazione secondo cui un problema al touch sarebbe "solo software" se non puoi verificarlo in modalità provvisoria o con gli strumenti di diagnostica.

Per un telefono nuovo acquistato in Italia, segnala subito il difetto al venditore. La garanzia legale di conformità sui beni nuovi dura due anni dalla consegna ed è il venditore a risponderne. La garanzia commerciale del produttore può offrire un canale aggiuntivo, ma non sostituisce i diritti verso il venditore. Se l'acquisto è avvenuto online o con un altro contratto a distanza, in genere hai anche 14 giorni per recedere, salvo le eccezioni previste dalla legge.

Vale la pena provare uno strumento di alternanza dei colori su un pixel bloccato, ma senza grandi aspettative. Usalo per una sessione breve, non per tutta la notte alla massima luminosità. Pixel morti, tocchi fantasma e zone morte del touch richiedono di solito la sostituzione dell'intero gruppo schermo.

I prezzi delle riparazioni variano troppo per indicare una cifra sensata. Uno schermo LCD di fascia economica può costare relativamente poco. Un OLED curvo da top di gamma può arrivare a una cifra tale da rendere più conveniente cambiare telefono. Chiedi un preventivo per il modello esatto prima di decidere.

## Risposte rapide

### Una pellicola protettiva può causare pixel morti?

No. I pixel morti si trovano all'interno del pannello. Una pellicola può causare problemi al touch, tocchi involontari, scarsa risposta ai bordi o problemi al sensore di prossimità, ma non può uccidere i pixel.

### I pixel morti si diffondono?

Un singolo pixel morto di solito rimane tale. Se con il tempo ne compaiono altri, il problema potrebbe essere un danno al pannello, una pressione eccessiva o un collegamento che sta cedendo.

### Il burn-in è coperto dalla garanzia?

A volte, ma non darlo per scontato. Molti produttori considerano il burn-in una forma di usura, soprattutto sugli OLED più vecchi. Un burn-in grave comparso molto presto va comunque segnalato. In Italia la copertura dipende dal fatto che si tratti di un difetto di conformità originario, oltre che dalle eventuali condizioni della garanzia commerciale.

### Un pixel morto è accettabile su un telefono nuovo?

Dal punto di vista dell'acquirente, no. Uno smartphone nuovo dovrebbe avere uno schermo privo di difetti. Il produttore può applicare una propria politica sui pixel, ma i diritti previsti dalla garanzia legale verso il venditore restano separati.
