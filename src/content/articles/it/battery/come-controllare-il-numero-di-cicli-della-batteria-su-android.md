---
title: "Come controllare il numero di cicli della batteria su Android"
description: "Il conteggio dei cicli indica quanti cicli completi di carica e scarica ha accumulato la batteria da quando il telefono è stato prodotto. Un ciclo corrisponde all'uso del 100 % della sua capacità, ma non deve avvenire in una sola volta. Ricaricare dal 20 % al 70 % e poi dal 40 % al 90 % equivale complessivamente a un ciclo completo."
listSummary: "Il conteggio dei cicli indica quanti cicli completi di carica e scarica ha accumulato la batteria da…"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Stato della batteria"
tags: ["batteria","stato","diagnostica","android","guida"]
locale: "it"
draft: false
---
Questo numero conta perché le batterie agli ioni di litio hanno una durata limitata, misurata anche in cicli. Molte batterie moderne mantengono circa l'80 % della capacità originale dopo 800-1.000 cicli, a seconda della chimica e del produttore. Superata quella fase, l'autonomia quotidiana inizia spesso a ridursi in modo evidente.

Android supporta la comunicazione del conteggio dei cicli da Android 14, ma la presenza del dato dipende interamente dal produttore. Alcuni telefoni recenti lo mostrano nelle Impostazioni. La maggior parte no. I metodi qui sotto partono dalle soluzioni che funzionano sul maggior numero di dispositivi, compresi i modelli più vecchi.

## App di monitoraggio: funzionano praticamente su ogni telefono Android

Per la maggior parte degli smartphone, soprattutto quelli precedenti al 2024, un'app di monitoraggio è il punto di partenza più pratico.

AccuBattery non legge il contatore hardware dei cicli. Registra invece le sessioni di ricarica, stima la capacità reale e calcola l'usura in cicli equivalenti in base alla quantità di energia immessa e alla tensione raggiunta. Installala e lasciala raccogliere dati per una settimana o più attraverso varie ricariche. Più a lungo la usi, più diventano stabili le stime. Un valore mostrato subito dopo l'installazione si basa su dati troppo limitati: attendi almeno due settimane prima di prenderlo sul serio. AccuBattery supporta la maggior parte dei dispositivi con Android 5.0 o versioni successive.

aBattery segue un approccio diverso. Sui dispositivi con Android 14 o versioni successive, quando il produttore espone le informazioni tramite le API e il livello hardware della batteria, l'app può leggere direttamente conteggio dei cicli, capacità e altri dati. Sui telefoni più vecchi o con implementazioni incomplete, alcune informazioni possono mancare o risultare poco affidabili. L'app non può creare un dato che il sistema o il firmware non rendono disponibile.

Il limite delle app di monitoraggio è proprio questo: alcune stimano l'usura dalle ricariche osservate, altre leggono i valori esposti da Android. Nessuna può recuperare il conteggio reale dell'intera vita della batteria se il telefono non lo fornisce. Due app sullo stesso dispositivo possono quindi mostrare numeri diversi perché usano metodi differenti.

## Codici nel tastierino: controllo rapido, risultato incerto

Su alcuni telefoni, i codici digitati nell'app Telefono mostrano dati che non compaiono nelle Impostazioni. Molti risalgono ad Android 4 o a versioni ancora precedenti, ma la disponibilità dipende dal produttore e, in certi casi, dall'operatore.

`*#*#4636#*#*` funziona su alcuni dispositivi con Android vicino alla versione standard, oltre che su determinati modelli Pixel, Motorola, Nokia, Sony e di altri produttori. Se è supportato, apre un menu di test con livello, tensione, temperatura e stato della batteria. Nella maggior parte dei telefoni non mostra il conteggio dei cicli, ma vale comunque la pena controllare perché alcuni produttori aggiungono campi propri. Il codice esiste da oltre dieci anni e può funzionare su modelli vecchi che non dispongono delle nuove schermate sulla batteria.

`*#*#6485#*#*` su alcuni telefoni Xiaomi, POCO e Redmi apre una schermata con dati della batteria, talvolta compresi valori collegati ai cicli sotto nomi interni come `MB_06`. Su alcuni dispositivi funziona anche con MIUI 10 o versioni precedenti, ma la disponibilità varia molto tra modelli, versioni di MIUI e HyperOS.

`*#0228#` su alcuni Samsung Galaxy mostra tensione, corrente e stato della batteria. In genere non include il conteggio dei cicli.

Se un codice non produce alcun risultato, il telefono non lo supporta oppure il produttore o l'operatore lo ha disattivato. Questi menu possono anche scomparire dopo un aggiornamento.

## ADB: il metodo più profondo senza root

Android Debug Bridge offre l'accesso più coerente ai dati della batteria tra versioni diverse di Android e può funzionare su telefoni con Android 4.1 o versioni successive. Serve un computer e circa cinque minuti di configurazione, ma a volte mostra informazioni che non compaiono né nelle app né nelle Impostazioni.

Attiva le **Opzioni sviluppatore**: apri **Impostazioni > Informazioni sul telefono** e tocca sette volte **Numero build**. Poi abilita **Debug USB** nelle Opzioni sviluppatore. Collega il telefono via USB e autorizza il computer quando compare la richiesta.

Esegui:

`adb shell dumpsys battery`

L'output include in genere CHARGE_COUNTER, tensione, temperatura, stato e condizione della batteria. Sui dispositivi che lo espongono può comparire anche il campo CYCLE_COUNT, con il valore reale comunicato dal sistema. Alcuni telefoni Samsung, Pixel e Xiaomi rendono disponibile il dato tramite ADB anche quando non lo mostrano nelle Impostazioni. Sui dispositivi precedenti ad Android 14 il campo è meno comune, ma vale comunque la pena cercarlo, perché alcuni produttori usavano proprietà specifiche già prima della standardizzazione dell'API.

Se il dato sui cicli non compare, il produttore probabilmente non lo espone attraverso quell'interfaccia. Nessun software può estrarre il conteggio reale da hardware o firmware che lo mantiene nascosto.

`adb shell dumpsys batteryproperties` può mostrare campi aggiuntivi, soprattutto su Android 14 e versioni successive. Sui sistemi più vecchi, l'output può essere vuoto.

## Impostazioni integrate: solo su telefoni recenti

Un numero crescente di dispositivi mostra il conteggio direttamente nelle Impostazioni. Se il tuo è tra questi, è il metodo più semplice. In caso contrario, usa le soluzioni precedenti.

**Google Pixel 8a e modelli successivi** mostrano il conteggio in **Impostazioni > Informazioni sullo smartphone > Informazioni sulla batteria**, insieme alla data di produzione e a quella del primo utilizzo. I modelli da Pixel 6 a Pixel 8 Pro non dispongono di questa schermata. Google l'ha introdotta con Pixel 8a e l'ha mantenuta nelle serie Pixel 9 e Pixel 10. Per i modelli precedenti servono ADB o un'app di monitoraggio.

**Alcuni Samsung Galaxy S25 e modelli successivi** possono mostrare percentuale dello stato della batteria e conteggio dei cicli nella sezione delle informazioni sulla batteria delle Impostazioni, ma la disponibilità dipende da modello, firmware e mercato. Non dare per scontato che la schermata compaia solo perché il telefono ha ricevuto una nuova versione di One UI. Su molti Galaxy precedenti, Samsung Members indica una condizione generale come Normale, Debole o Cattivo, ma non una percentuale o un conteggio preciso.

**Alcuni telefoni OnePlus e OPPO** con versioni recenti di OxygenOS o ColorOS mostrano lo stato della batteria nelle impostazioni Batteria, ma il conteggio dei cicli varia in base a modello e paese. OnePlus 7 e i modelli precedenti non espongono queste informazioni.

Il problema di fondo resta la frammentazione. Apple ha standardizzato la visualizzazione dello stato della batteria sugli iPhone supportati a partire da iOS 11.3, includendo iPhone 6 e modelli successivi. Android ha introdotto le API necessarie e ha lasciato ai produttori la decisione di comunicare o mostrare i dati. Ogni anno aumentano i modelli compatibili, ma molti telefoni Android ancora in uso non rendono disponibile un conteggio preciso.

## Cosa significa il conteggio nella pratica

Il numero, da solo, è soltanto un contatore. Conta soprattutto la durata nominale prevista per quella batteria.

Google indica circa 800 cicli fino all'80 % di capacità per i modelli da Pixel 3 a Pixel 8 Pro e per Pixel Fold. Per Pixel 8a e modelli successivi, il valore sale a circa 1.000 cicli. Sui modelli compatibili, funzioni come i Consigli sulla batteria regolano gradualmente la tensione massima con l'invecchiamento della batteria.

Gli smartphone recenti immessi sul mercato dell'UE devono raggiungere almeno 800 cicli di carica e scarica mantenendo almeno l'80 % della capacità iniziale. Alcuni modelli recenti di fascia alta sono progettati per circa 1.000 cicli. Telefoni economici più vecchi o destinati a mercati diversi possono avere obiettivi inferiori.

Un telefono a 400 cicli ha usato circa metà della durata ciclica prevista se la batteria è progettata per 800 cicli. A 800 cicli, una batteria nominalmente progettata per quel valore dovrebbe mantenere ancora circa l'80 % della capacità. Una batteria da 5.000 mAh si comporterebbe quindi come una da circa 4.000 mAh. A 1.200 cicli, l'autonomia quotidiana può ridursi fino a circa la metà rispetto a quando il telefono era nuovo.

Queste cifre presuppongono condizioni normali: temperatura ambiente, caricabatterie adatti e niente permanenza prolungata al 100 % o allo 0 %. La ricarica rapida in ambienti caldi accelera la degradazione, e il conteggio dei cicli non mostra questo danno aggiuntivo. Due telefoni con 500 cicli possono avere uno stato molto diverso se uno è stato ricaricato di notte con la ricarica adattiva e l'altro è stato caricato rapidamente dentro un'auto calda.

## Quando il conteggio non è disponibile

Se nessuno dei metodi funziona, restano gli indicatori pratici. Meno ore di schermo acceso rispetto a sei mesi prima, spegnimenti inattesi al 15-20 %, percentuale che salta dal 30 % al 12 % in pochi istanti o calore durante un uso leggero indicano una batteria ormai usurata.

Abbinati a una stima della capacità ottenuta con AccuBattery dopo alcune settimane di monitoraggio, questi sintomi danno un quadro ragionevole anche senza un contatore preciso.

## Domande frequenti

**Limitare la ricarica all'80 % riduce il conteggio dei cicli?**
No. Le ricariche parziali si sommano comunque. Passare dal 20 % all'80 % equivale a 0,6 cicli. Il vantaggio del limite all'80 % non è un numero minore di cicli, ma una minore sollecitazione delle celle ad alta carica, che rallenta la degradazione chimica indipendentemente dal contatore.

**500 cicli sono tanti?**
Dipende dal telefono. Con un ciclo completo al giorno, corrispondono a circa 18 mesi. Con 0,7 cicli al giorno, per esempio ricaricando dal 30 % al 100 %, servono più di due anni per arrivare a 500. Per capire se siano tanti bisogna conoscere la durata nominale della batteria di quel modello.

**Perché il mio Samsung non mostra il conteggio dei cicli dopo l'aggiornamento a One UI 7?**
Samsung non ha reso la funzione uniforme su tutti i modelli e in tutti i mercati. La serie Galaxy S25 la mostra più spesso, ma anche sui dispositivi compatibili la presenza dipende da firmware e paese. L'aggiornamento, da solo, non garantisce che la voce compaia.

**Il conteggio dei cicli si può azzerare?**
Un vero contatore hardware non viene azzerato da un ripristino dei dati di fabbrica, dalla calibrazione o dall'installazione di una nuova ROM. Quando il valore è legato al pacco batteria o al relativo controller, la sostituzione fisica della batteria è l'unico modo per ripartire con un componente nuovo. Se invece l'app mostra solo una stima basata sui dati raccolti dopo l'installazione, disinstallarla o cancellarne i dati azzera la stima. È un altro motivo per non confondere le stime software con il contatore hardware.
