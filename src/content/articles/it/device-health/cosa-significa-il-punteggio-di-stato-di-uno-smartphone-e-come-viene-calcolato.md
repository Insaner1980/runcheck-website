---
title: "Cosa significa il punteggio di stato di uno smartphone e come viene calcolato"
description: "Apri le Impostazioni di qualsiasi smartphone Android e troverai le informazioni sulla batteria in un punto, i dati sulla memoria in un altro e i dettagli della rete altrove. Un punteggio di stato riunisce tutto questo, batteria, condizioni termiche, rete e memoria, in un solo numero, di solito da 0 a 100. Un valore invece di quattro."
listSummary: "Apri le Impostazioni di qualsiasi smartphone Android e troverai le informazioni sulla batteria in un punto."
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["temperatura","termico","android","risoluzione-dei-problemi","hardware"]
locale: "it"
draft: false
---
Android non definisce un punteggio di stato universale. Non esiste una schermata comune a tutti i dispositivi in cui "82/100" significhi la stessa cosa su ogni marca. Lo strumento Samsung per l'assistenza del dispositivo può mostrare un punteggio di ottimizzazione su 100, mentre Device health and support sui Pixel mostra lo stato generale e quello delle funzioni. Sono comunque strumenti dei produttori, non uno standard condiviso da Android. Le app di diagnostica usano modelli propri. Conta più capire quali dati entrano nel calcolo e quali limiti hanno che fissarsi sul numero finale.

## Cosa misura un punteggio di stato

Un punteggio utile prende in genere dati da quattro categorie, assegnando più peso a quelle che incidono maggiormente sull'uso quotidiano. Non esistono pesi standard.

**Batteria:** dovrebbe avere il peso maggiore. Nel modello di runcheck vale il 40 % del punteggio totale. È una scelta sensata, perché una batteria degradata è uno dei problemi più evidenti su un telefono che invecchia. Il componente considera lo stato restituito dall'API BatteryManager di Android, con valori come "Good", "Overheat", "Dead" o "Cold", oltre a temperatura, tensione e, quando il dispositivo la espone, percentuale dello stato della batteria. runcheck può ricavare una stima della capacità completa dalla carica residua e dal livello attuale, ma non usa API private per leggere la capacità nominale e non presenta quel dato come una misura certa. Android 14 ha aggiunto API più dettagliate per la batteria, ma numero di cicli e percentuale dello stato compaiono solo se produttore e Battery HAL li forniscono. Una batteria al 92 % e a 31 °C ottiene un risultato alto. Una al 74 % che lavora a 39 °C lo abbassa parecchio.

**Condizioni termiche:** valgono il 25 % nel modello di runcheck. Android comunica lo stato termico tramite `PowerManager.getCurrentThermalStatus()` da Android 10 e il margine termico tramite `getThermalHeadroom()` da Android 11. Questi dati indicano se il telefono è freddo, caldo, in thermal throttling, cioè con prestazioni limitate dal calore, oppure vicino allo spegnimento di sicurezza. Le temperature elevate riducono le prestazioni della CPU e accelerano l'usura della batteria nel tempo. Un telefono con stato termico "Normal" e batteria a 28 °C ottiene un buon risultato. Uno in throttling "Moderate" sopra i 40 °C no.

**Connettività di rete:** contribuisce per il 25 %. Entrano in gioco potenza del segnale in dBm per rete mobile e Wi-Fi, velocità del collegamento, latenza e stabilità della connessione. Sul Wi-Fi, da -50 a -70 dBm è un segnale ottimo, da -70 a -80 dBm è accettabile e sotto -80 dBm le prestazioni peggiorano. Sulla rete mobile, un valore superiore a -85 dBm è forte, mentre sotto -110 dBm è debole. Anche la latenza conta. Tra un ping di 15 ms e uno di 200 ms c'è una differenza pratica maggiore rispetto a molte piccole variazioni del segnale.

**Memoria:** è il componente più piccolo, il 10 % nel modello di runcheck. Sotto il 50 % di utilizzo non applica penalità. Tra il 50 e l'80 % l'impatto è contenuto. Sopra l'85 % il punteggio scende, perché Android può rallentare quando la memoria NAND è quasi piena e il controller ha meno spazio per garbage collection e wear leveling.

## Perché i pesi contano

Lo stato della batteria si sente ogni giorno. La memoria diventa un problema soprattutto oltre una certa soglia. La qualità della rete cambia continuamente per fattori che il telefono non controlla. Le condizioni termiche sono temporanee: un dispositivo caldo adesso potrebbe tornare normale tra dieci minuti.

Le app non assegnano tutte gli stessi pesi. Alcune dividono il punteggio in parti uguali tra le quattro categorie. È una scelta poco convincente, perché tratta una memoria piena come se fosse equivalente a una batteria in avaria. runcheck assegna il 40 % alla batteria, il 25 % a condizioni termiche e rete e il 10 % alla memoria. Questo rispecchia meglio i problemi che si avvertono nell'uso reale. Un telefono con batteria ottima e memoria piena è meno compromesso di uno con batteria pessima e molto spazio libero.

## Il problema dell'affidabilità

Non tutte le letture che alimentano il punteggio sono ugualmente affidabili. È qui che il concetto diventa meno netto.

La percentuale dello stato della batteria è attendibile sui telefoni che implementano correttamente il Battery HAL, tra cui i Pixel recenti e alcuni altri modelli compatibili. Su molti dispositivi il dato non viene esposto, quindi le app lo stimano osservando le ricariche nel tempo. Le stime migliorano con l'uso, ma all'inizio sono approssimative. Se il dato di partenza ha un'incertezza sconosciuta, anche il punteggio finale la eredita.

Le letture termiche dipendono dai sensori che il produttore rende disponibili. `getCurrentThermalStatus()` restituisce un livello generale, da Normal a Shutdown, ma è piuttosto grossolano. `getThermalHeadroom()` restituisce un valore in virgola mobile che indica quanto il dispositivo è vicino al throttling, ma l'interpretazione può cambiare tra SoC. La temperatura della batteria è disponibile con maggiore regolarità, però misura la batteria, non la CPU o la superficie del telefono. Tra questi valori possono esserci 5-10 °C di differenza.

La potenza del segnale in dBm è affidabile quando Android la comunica. Le tacche grafiche, invece, non sono standardizzate. Tre tacche su un Samsung e tre su un Pixel nello stesso luogo possono corrispondere a valori dBm diversi. Le tacche sono una rappresentazione visiva. Il valore in dBm è quello utile per confrontare le condizioni.

L'utilizzo della memoria è il dato più coerente tra dispositivi. È un calcolo semplice e non dipende dalle stesse complicazioni del livello di astrazione hardware.

Un punteggio onesto rende visibili questi limiti. Se lo stato della batteria è stimato e non letto dall'hardware, l'incertezza dovrebbe comparire. Mostrare con sicurezza "87/100" quando uno dei dati principali ha un margine d'errore del 5 % è fuorviante, e molte app lo fanno comunque.

## Punteggi di stato sui telefoni meno recenti

La qualità del punteggio dipende dalla quantità di dati che il telefono espone. I dispositivi più vecchi ne forniscono meno.

I telefoni con Android 10 (API 29) o versioni successive possono comunicare lo stato termico, quindi il componente funziona abbastanza bene sui modelli dal 2019 in poi, quando il produttore espone dati utilizzabili. Android 11 (API 30) aggiunge il margine termico e rende la lettura più dettagliata. Sotto Android 10, le informazioni termiche si limitano spesso alla temperatura della batteria.

La differenza più grande riguarda lo stato della batteria. Android 14 ha aggiunto API più dettagliate, ma la maggior parte dei telefoni usciti prima del 2024 non comunica una percentuale completa o il numero di cicli. Su questi dispositivi il calcolo si basa su indicatori indiretti: la classificazione generale Good, Overheat o Dead, temperatura, tensione e osservazione delle ricariche nel tempo. Un telefono con Android 10 può comunque produrre un punteggio utile da questi segnali, ma con meno precisione rispetto a un Pixel 8a o successivo compatibile che comunica direttamente stato e cicli.

Memoria e rete funzionano con una buona continuità sui dispositivi da Android 8 in poi.

In pratica, un punteggio su Android 9-13 resta utile, ma dipende maggiormente da stime. Individua problemi evidenti, come una batteria molto degradata, una memoria quasi esaurita o surriscaldamento persistente, ma il margine di incertezza è più ampio. Il dato conserva valore. È soltanto meno preciso.

## Come interpretare il numero

**75-100:** il telefono è in buone condizioni. Usura normale della batteria, nessun problema termico, spazio sufficiente e connettività funzionante.

**50-74:** qualcosa richiede attenzione. Di solito si tratta di una batteria che ha perso abbastanza capacità da ridurre l'autonomia giornaliera oppure di una memoria così piena da incidere sulle prestazioni. Un intervento mirato può risolvere il problema.

**25-49:** c'è un problema reale. Batteria molto degradata, thermal throttling persistente o memoria in condizioni critiche. È il momento di valutare riparazione o sostituzione.

**Sotto 25:** qualcosa sta cedendo attivamente.

Queste soglie non sono ufficiali. Nessuna autorità definisce quando uno smartphone è "sano". Sono convenzioni usate dalle app di diagnostica e corrispondono, a grandi linee, a ciò che le persone percepiscono come buono, accettabile, in peggioramento o guasto.

## Cosa non può dirti un punteggio di stato

Non rileva i danni hardware. Uno schermo crepato, un altoparlante difettoso, una porta di ricarica allentata o danni da liquidi non compaiono nelle metriche software.

Non prevede quanto durerà ancora il telefono. Un punteggio di 78 non significa che il dispositivo abbia completato il 78 % della propria vita. Indica soltanto che, in questo momento, le metriche controllate descrivono condizioni discrete.

Non permette un confronto diretto tra modelli. Un 90/100 su un telefono economico con 3 GB di RAM e 32 GB di memoria non equivale a 90/100 su un flagship con 12 GB di RAM e 256 GB di memoria.

Il punteggio è un'istantanea. Serve per osservare le tendenze, per esempio capire se il telefono sta peggiorando, e per valutazioni rapide, come decidere se vale la pena comprare uno smartphone usato. È un punto di partenza, non una diagnosi.

## FAQ

**I produttori pubblicano punteggi di stato ufficiali?**
Non ne esiste uno universale. Lo strumento Samsung per l'assistenza del dispositivo può mostrare un punteggio di ottimizzazione su 100, ma riflette i controlli Samsung su batteria, memoria, processi e sicurezza, non uno standard valido per tutto Android. Device health and support sui Pixel mostra invece lo stato generale e quello delle funzioni, senza assegnare un punteggio generico da 0 a 100. Gli strumenti dei produttori sono utili, ma i loro risultati non sono direttamente confrontabili tra marche.

**Un punteggio basso può migliorare?**
Dipende dalla causa. Se il problema è la memoria piena, liberare spazio può farlo risalire subito. Se la batteria è degradata, l'unica soluzione è sostituirla. I problemi termici spesso spariscono chiudendo un'app che si comporta male o togliendo una custodia che trattiene il calore.

**Un punteggio più alto è sempre migliore?**
Sullo stesso telefono nel tempo, sì. Un calo indica un peggioramento. Tra telefoni diversi, non necessariamente. Un dispositivo di tre anni con 72 può funzionare bene per il suo proprietario, mentre uno nuovo con 95 può avere un segnale scarso nel luogo in cui viene usato, e il punteggio ne risente in parte.
