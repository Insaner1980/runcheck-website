---
title: "Guida ai test dei sensori Android: come controllare, diagnosticare e risolvere i problemi"
description: "Come fai a capire se la rotazione automatica non funziona, la bussola è confusa o un'app si comporta male? È questo l'aspetto irritante dei problemi ai sensori. Sembrano difetti minori finché non ti servono navigazione, chiamate, stabilizzazione della fotocamera, conteggio dei passi o luminosità automatica."
listSummary: "Come fai a capire se la rotazione automatica non funziona, la bussola è confusa o un'app si comporta male?"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["hardware","test","diagnostica","android","guida"]
locale: "it"
draft: false
---
Gli smartphone Android usano una combinazione di sensori di movimento, ambientali, di posizione e di prossimità. Alcuni sono chip fisici. Altri sono sensori "virtuali", calcolati combinando i dati di più componenti. Quando una fonte diventa imprecisa, viene coperta o si disattiva, il sintomo può comparire in una funzione del tutto diversa.

Parti dalle prove semplici. Per i primi controlli non servono root, ADB o un banco da laboratorio.

## Controlli rapidi dei sensori

Prima di installare qualcosa, prova questi test quotidiani:

- Con il blocco della rotazione disattivato, gira il telefono dalla modalità verticale a quella orizzontale. È un controllo di base dell'accelerometro.
- Scatta una foto panoramica. Se il telefono non segue il movimento in modo fluido, potrebbe essere coinvolto il giroscopio.
- Avvia una chiamata e copri la parte alta dello schermo vicino all'auricolare. Il display dovrebbe spegnersi e riaccendersi quando allontani la mano. Questo verifica il sensore di prossimità.
- Attiva la luminosità automatica e passa da una stanza luminosa a una buia. Lo schermo dovrebbe adattarsi entro pochi secondi.
- Apri Maps e osserva il fascio blu che indica la direzione. Se è molto ampio o punta dalla parte sbagliata, il magnetometro potrebbe aver bisogno di una calibrazione o subire interferenze.

Sui dispositivi Samsung Galaxy, il percorso più semplice è Samsung Members: apri l'app, tocca `Supporto`, quindi `Vedi test`. Anche il vecchio menu diagnostico `*#0*#` funziona su molti Galaxy e include una sezione dedicata ai sensori.

Sui Pixel, digita `*#*#7287#*#*` per aprire l'app Diagnostica Pixel per la riparazione. Sui dispositivi Xiaomi, Redmi e POCO, il codice `*#*#6484#*#*` apre il menu CIT su molti modelli. Su Motorola, usa Device Help e il percorso `Device diagnosis > Hardware test`. I nomi possono restare in inglese a seconda del modello e della lingua dell'app.

Non considerare `*#*#4636#*#*` un test dei sensori. Su molti telefoni apre una schermata di test o informazioni su rete mobile, utilizzo, Wi-Fi e, in alcuni casi, batteria. Non è un menu universale per la diagnostica dei sensori.

## Perché i sensori smettono di funzionare bene

La deriva della calibrazione è la causa più comune e meno interessante. Accelerometri, giroscopi e magnetometri dipendono tutti dalla calibrazione. Il magnetometro è particolarmente sensibile: magneti, cover con parti metalliche, supporti per auto, portatili, altoparlanti e perfino alcune custodie a portafoglio possono alterarne i dati.

Poi ci sono i danni fisici. Una caduta può spostare un modulo, piegare la scocca vicino alla cornice superiore o danneggiare un cavo flessibile. I danni da acqua possono comparire più lentamente. Il telefono sembra normale per una settimana, poi il sensore di prossimità o il barometro inizia a comportarsi in modo strano mentre avanza la corrosione.

È facile non accorgersi che la finestra di un sensore è coperta. I sensori di prossimità e luce ambientale si trovano di solito vicino all'auricolare o sotto il display. Una pellicola spessa, il bordo della cover, polvere, unto della pelle o un vetro privacy montato male possono bloccare o diffondere la luce che ricevono.

Anche il software può creare problemi. Aggiornamenti importanti di Android, modifiche al firmware OEM, ROM personalizzate, autorizzazioni delle app e sistemi aggressivi di risparmio energetico possono cambiare i dati ricevuti dalle applicazioni. Google ha pubblicato Android 17 il 16 giugno 2026 per la maggior parte dei Pixel supportati, mentre gli altri marchi seguono calendari propri. Per questo un bug legato a un aggiornamento non compare su tutti i telefoni nello stesso momento.

Contano anche le impostazioni energetiche. Da Android 9, le app in background non ricevono più in modo continuo dati da sensori come accelerometro e giroscopio. Android 10 ha aggiunto il riquadro sviluppatore `Sensors off`, che può disattivare fotocamera, microfono e sensori gestiti da SensorManager. Se all'improvviso sembra che nessun sensore funzioni, controlla quel riquadro prima di concludere che la scheda madre sia guasta.

## Testa accelerometro e giroscopio

Disattiva il blocco della rotazione e gira lentamente il telefono. Lo schermo dovrebbe cambiare orientamento senza lunghi ritardi o continui capovolgimenti. Se non ruota in nessuna app, l'accelerometro potrebbe non inviare dati corretti.

Ora apri un'app con livella a bolla o un'altra applicazione che mostri l'inclinazione. Appoggia il telefono su un tavolo piano. I valori dovrebbero stabilizzarsi invece di continuare a spostarsi. Un piccolo scarto è normale. Un'inclinazione marcata e costante su una superficie piana suggerisce un problema di calibrazione.

Per il giroscopio, usa la modalità panorama della fotocamera o un'app di realtà aumentata. La visuale dovrebbe seguire i movimenti in modo fluido. Se le panoramiche falliscono ripetutamente o gli oggetti AR scivolano mentre sei fermo, il giroscopio potrebbe produrre dati troppo rumorosi.

In questo caso il confronto aiuta. Prova la stessa app su un altro telefono nella stessa stanza. Se entrambi si comportano male, il problema è più probabilmente nell'app o nell'ambiente.

## Testa il sensore di prossimità

Avvia una chiamata, poi porta la mano a circa due centimetri dalla parte superiore dello schermo. Il display dovrebbe spegnersi. Allontana la mano e dovrebbe riaccendersi.

La maggior parte dei sensori di prossimità non misura la distanza con precisione. Spesso comunica soltanto uno stato vicino o lontano, non una lettura continua centimetro per centimetro. In un'app di diagnostica potresti quindi vedere 0 cm e 5 cm senza valori intermedi. È normale.

Se il valore resta bloccato, rimuovi cover e pellicola. Pulisci la cornice superiore o l'area del sensore con un panno morbido, poi riprova prima di attribuire il problema all'hardware. Le pellicole in vetro temperato sono una causa molto comune.

## Testa il sensore di luce ambientale

Attiva la luminosità automatica. Punta una torcia vicino alla parte alta dello schermo, poi copri la stessa zona con la mano. La luminosità dovrebbe reagire in modo evidente, anche se Android può rendere graduale il cambiamento invece di modificarla all'istante.

La lettura del sensore di luce viene di solito espressa in lux. Una stanza buia può restare sotto 50 lux. Un ufficio normale può raggiungere alcune centinaia di lux. La luce solare diretta può superare 10.000 lux. Il numero esatto conta meno del fatto che il valore cambi in modo sensato quando varia l'illuminazione.

Se la luminosità automatica si comporta male ma il valore in lux risponde correttamente, il sensore probabilmente funziona. È più facile che il problema dipenda dall'apprendimento della luminosità adattiva, dalle impostazioni del display o dal software del produttore.

## Testa magnetometro e bussola

Vai all'aperto oppure allontanati dagli oggetti metallici. Apri Maps e tocca l'indicatore della posizione. Se il fascio blu è molto ampio o punta nella direzione sbagliata, ricalibra la bussola.

Usa il movimento a otto: tieni il telefono davanti a te e descrivi un grande otto orizzontale, ruotando il polso in diverse angolazioni. Continua per 15-20 secondi. Sembra sciocco. Funziona sorprendentemente spesso.

Se la bussola resta imprecisa, rimuovi gli accessori magnetici e riprova. Supporti per auto, custodie a portafoglio, anelli in stile MagSafe, coperchi dei portatili e tavoli metallici possono alterare le letture. Negli ambienti chiusi, la bussola è spesso meno affidabile di quanto ci si aspetti.

## Testa il barometro

Non tutti i telefoni Android hanno un barometro. Nei modelli economici spesso manca.

Se il tuo ne è dotato, un'app per sensori dovrebbe mostrare la pressione atmosferica in hPa o millibar. Confrontala con una stazione meteorologica vicina. Non aspettarti una corrispondenza perfetta: le app meteo mostrano spesso la pressione corretta al livello del mare, mentre il telefono misura quella locale alla tua altitudine.

Un valore completamente bloccato e molto lontano dal normale può indicare un sensore ostruito o guasto. Il foro di ventilazione è minuscolo, quindi polvere e lanugine delle tasche possono influire.

## Leggi i dati grezzi senza inseguire la perfezione

I valori grezzi sono utili, ma non devono essere perfetti.

Un accelerometro misura l'accelerazione sugli assi X, Y e Z in m/s². Un telefono appoggiato in piano dovrebbe indicare circa 9,8 m/s² su un asse a causa della gravità e valori vicini a zero sugli altri, a seconda dell'orientamento.

Un giroscopio misura la rotazione in radianti al secondo. Quando il telefono è fermo, i valori dovrebbero restare vicini allo zero. Piccoli movimenti e un po' di rumore del sensore sono normali.

Un magnetometro misura l'intensità del campo magnetico in microtesla. Il campo magnetico terrestre si trova spesso tra 25 e 65 microtesla, a seconda della posizione. Valori molto lontani da questa fascia indicano di solito interferenze.

Un sensore di luce misura i lux. Cerca variazioni coerenti, non precisione da laboratorio.

## Cosa provare prima della riparazione

Riavvia prima il telefono. È banale, ma vale la pena farlo.

Poi rimuovi cover e pellicola, pulisci l'area superiore dei sensori, disattiva il risparmio energetico e controlla se il riquadro `Sensors off` è attivo nelle Opzioni sviluppatore. Se il problema riguarda una sola app, verifica le sue autorizzazioni e le restrizioni della batteria.

Per la bussola, ricalibra e allontanati dai magneti. Per la rotazione automatica, prova più app perché alcune bloccano l'orientamento. Per il sensore di prossimità, esegui il test durante una vera chiamata dopo aver rimosso la pellicola.

Se un sensore ha smesso di funzionare subito dopo un aggiornamento del sistema operativo, installa gli aggiornamenti di sistema e gli aggiornamenti di sistema Google Play ancora disponibili, poi riprova. Se usi una versione beta, non considerare un singolo comportamento anomalo una prova certa di guasto hardware finché non hai testato una versione stabile.

Un'app di diagnostica come runcheck è utile quando i sintomi si sovrappongono. Stress della batteria, calore e problemi di rete possono far sembrare guasto il telefono anche quando il sensore è soltanto una parte del problema.

## Quando è probabile un guasto hardware

Sospetta l'hardware quando lo stesso sensore non funziona in nessuna app, fallisce anche nello strumento diagnostico del produttore, continua a non funzionare in modalità provvisoria e resta guasto dopo un ripristino.

I sensori di uno smartphone sono in genere minuscoli componenti montati sulla superficie della scheda o parti di un modulo più grande. I centri di riparazione sostituiscono raramente un singolo chip. In pratica può essere necessario cambiare il gruppo display, il modulo fotocamera, la scheda inferiore o una sezione della scheda madre, a seconda della posizione del sensore.

Se il telefono è caduto, si è piegato o è stato esposto all'acqua, segnalalo quando chiedi un preventivo. Cambia ciò che il tecnico deve controllare.
