---
title: "Come eseguire una diagnostica completa su uno smartphone Android"
description: "Android non ha un unico pulsante \"Avvia diagnostica\" capace di controllare tutto in una volta. Gli strumenti esistono, ma sono distribuiti tra menu delle Impostazioni, codici nascosti da digitare nell'app Telefono, app dei produttori e comandi di sistema che la maggior parte delle persone non usa mai. Questa guida li riunisce in un'unica procedura adatta al maggior numero possibile di telefoni, indicando anche dove restano differenze dovute a produttore, operatore e versione di Android."
listSummary: "Android non ha un unico pulsante \"Avvia diagnostica\" capace di controllare tutto in una volta."
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","aggiornamenti","sicurezza","software","guida"]
locale: "it"
draft: false
---
## Il percorso più rapido: gli strumenti diagnostici del produttore

Molti dei principali produttori Android includono un'utilità di diagnostica, preinstallata oppure accessibile tramite un codice nascosto. Parti da qui prima di installare altre app.

**Gli smartphone Samsung Galaxy** hanno alcuni degli strumenti integrati più accessibili. Apri l'app Telefono e digita `*#0*#`. Su molti modelli Galaxy compare un pannello con test separati per schermo, touchscreen, fotocamere anteriori e posteriori, altoparlanti, vibrazione e sensori come accelerometro e sensore di prossimità. Il codice funziona su molti Galaxy, compresi diversi modelli meno recenti e flagship moderni, ma firmware degli operatori e varianti regionali possono disattivare i menu di servizio. Samsung offre anche una suite di controlli nell'app Samsung Members. Apri l'app, tocca **Supporto**, quindi avvia **Diagnostica dello smartphone**. Puoi controllare batteria, schermo, touch, audio, Wi-Fi, Bluetooth e vari sensori, con un risultato per ogni prova. Samsung Members è disponibile sulla maggior parte dei Galaxy recenti. Su modelli e regioni supportati, alcune versioni nuove di One UI possono mostrare anche percentuale dello stato della batteria e numero di cicli.

**Gli smartphone Google Pixel** offrono due percorsi utili. Su Pixel 6 e successivi, **Impostazioni > Device health and support** mostra lo stato generale del dispositivo, lo stato di funzioni come batteria e temperatura e controlli consigliati, per esempio ricarica o touchscreen. Il nome italiano della funzione può variare in base alla versione, quindi manteniamo qui la dicitura ufficiale inglese anziché inventare un'etichetta. Sui Pixel supportati puoi anche aprire l'app Telefono, restare connesso a Internet e digitare `*#*#7287#*#*` per avviare la diagnostica di riparazione. Su Pixel 8a e modelli successivi, **Impostazioni > Informazioni sul telefono > Informazioni sulla batteria** mostra numero di cicli, data di produzione e data del primo utilizzo. Su molti altri telefoni con Android stock o quasi stock, il codice `*#*#4636#*#*` apre un menu di test con informazioni sul telefono, potenza del segnale, tipo di rete, modalità di rete preferita, dati della batteria e statistiche d'uso. Il codice esiste da molto tempo, ma sui dispositivi recenti è meno affidabile perché alcuni produttori e operatori ne limitano l'accesso.

**Gli smartphone Xiaomi, POCO e Redmi** includono un menu CIT, cioè Component Integrated Testing. Digita `*#*#6484#*#*` oppure `*#*#64663#*#*` nell'app Telefono. Su molti modelli si apre una suite di test per touchscreen, colori dello schermo, sensore di prossimità, accelerometro, giroscopio, bussola, flash LED, altoparlanti, microfono, fotocamere, vibrazione, Wi-Fi, Bluetooth, GPS e sensore di impronte. Ogni prova richiede una conferma manuale: il telefono mostra un motivo o riproduce un suono, poi scegli se il test è riuscito o meno.

**Gli smartphone OnePlus** possono rispondere al codice `*#808#` su alcuni modelli, soprattutto meno recenti. Dove il menu è ancora disponibile, permette di controllare schermo, audio, connessioni e sensori. La disponibilità è però molto meno uniforme rispetto a Samsung, Pixel o Xiaomi, e il codice è stato rimosso o disattivato su diversi dispositivi e versioni di OxygenOS.

Questi codici non funzionano ovunque. Alcuni telefoni venduti dagli operatori li disattivano e i produttori possono rimuoverli con un aggiornamento. Se non succede nulla, il codice non è stato implementato oppure è stato bloccato su quel dispositivo.

## Strumenti Android integrati che funzionano su quasi tutti i telefoni

Anche senza menu specifici del produttore, ogni telefono Android moderno contiene informazioni diagnostiche utili nelle Impostazioni. Non equivalgono a un controllo completo, ma permettono di individuare molti problemi comuni.

**I dati sull'uso della batteria** in **Impostazioni > Batteria** mostrano l'andamento della scarica nelle ultime 24 ore, oppure per più giorni su alcuni modelli. Cerca cali insolitamente rapidi, che possono indicare un'app difettosa o un processo in background. Su Android 9 e 10 la schermata è più semplice e mostra soprattutto l'elenco delle app ordinate per consumo, ma resta utile per capire quali usano più energia. Su Android 14 e versioni successive, alcune app di terze parti possono leggere proprietà aggiuntive esposte dal BatteryManager HAL, come capacità stimata e numero di cicli. La disponibilità dipende comunque dall'implementazione del produttore.

**La diagnostica della memoria** in **Impostazioni > Memoria** divide lo spazio occupato tra app, immagini, video, audio, documenti e file di sistema. Se il telefono è lento e la memoria interna supera l'85 % di utilizzo, questo può già spiegare il problema. Quando la memoria NAND si avvicina al limite, il controller ha meno spazio per gestire wear leveling e garbage collection, e le prestazioni possono peggiorare.

**Le informazioni di rete** in **Impostazioni > Rete e Internet** mostrano il tipo di connessione attiva e la rete Wi-Fi collegata. Per maggiori dettagli, **Impostazioni > Informazioni sul telefono > Stato SIM** mostra la potenza del segnale in dBm su molti dispositivi. Tra -50 e -90 dBm è normale per una rete cellulare. Sotto -110 dBm la ricezione è debole.

**Le Opzioni sviluppatore** contengono alcuni strumenti utili. Per attivarle, apri **Impostazioni > Informazioni sul telefono** e tocca sette volte **Numero build**. Avrai quindi accesso a **Servizi in esecuzione**, che mostra processi in background e uso della memoria, a **Debug USB**, necessario per ADB, e a **Crea segnalazione bug**, che genera un registro di sistema dettagliato.

## Controlli di sensori e hardware senza app

Su alcuni dispositivi il sensore di prossimità si può provare con `*#*#0588#*#*`. Per gli altri sensori, i test pratici funzionano altrettanto bene: apri Google Maps e verifica se il cono blu cambia direzione quando ruoti il telefono, fai una chiamata e controlla che lo schermo si spenga avvicinandolo all'orecchio, oppure attiva la luminosità automatica e copri la parte anteriore del dispositivo.

Puoi controllare il GPS con qualsiasi app di mappe, ma un'app dedicata mostra anche numero di satelliti e rapporto segnale-rumore. All'aperto, in condizioni buone, un GPS funzionante dovrebbe agganciare circa 8-12 satelliti entro 30 secondi. Edifici, alberi, meteo, antenna e chipset possono cambiare molto il risultato.

## Quando le app di terze parti sono davvero utili

Gli strumenti integrati coprono molte funzioni, ma lasciano alcuni vuoti. Le app di terze parti sono utili soprattutto in tre casi.

La stima dello stato della batteria è il più importante. AccuBattery osserva le ricariche nel tempo e stima la capacità residua rispetto a quella nominale. Servono circa una settimana e diversi cicli perché i dati inizino a diventare utili, e la stima migliora continuando a usare l'app. DevCheck mostra in tempo reale frequenze di CPU e GPU, zone termiche, corrente e tensione della batteria e letture dei sensori. È particolarmente utile per individuare thermal throttling, cioè la riduzione delle prestazioni causata dal calore, oppure un sensore che restituisce valori errati. AIDA64 mostra specifiche dettagliate come SoC, risoluzione e densità dello schermo, RAM, memoria e codec installati. Serve più a identificare l'hardware che a diagnosticare un guasto, ma è utile quando vuoi sapere con precisione cosa contiene il telefono.

Nessuna di queste app può leggere dati che il produttore ha deciso di non esporre. Se il Battery HAL non fornisce lo stato della batteria, nessuna app può ottenere dal nulla il numero reale dei cicli o la capacità effettiva. Può soltanto stimarli osservando le ricariche.

## Diagnostica ADB per controlli più approfonditi

Android Debug Bridge offre il livello più profondo di diagnostica senza root. Collega il telefono a un computer tramite USB, attiva il debug USB, poi usa questi comandi:

`adb shell dumpsys battery` mostra livello, temperatura, tensione, stato di ricarica e stato generale della batteria. Su alcuni dispositivi mostra anche il numero di cicli. L'output cambia in base al produttore: un Samsung può esporre campi assenti su un Pixel, e viceversa.

`adb shell dumpsys batterystats` genera un registro molto esteso della cronologia dei consumi, con wakelock, uso delle app e attività di rete. Elaborandolo con Battery Historian di Google puoi ottenere una sequenza temporale visiva di ciò che ha consumato energia e quando.

`adb shell dumpsys connectivity` mostra lo stato della rete, i server DNS e le interfacce attive.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` prova a leggere i sensori di temperatura. Non tutte le zone sono accessibili. Le regole SELinux da Android 12 in poi limitano la lettura di diversi percorsi sysfs, e le restrizioni sono diventate più severe nel tempo. Alcune zone restituiscono "Permission denied" anche tramite ADB.

ADB richiede un computer e un minimo di dimestichezza con la riga di comando. Per la maggior parte delle persone bastano i menu delle Impostazioni, gli strumenti del produttore e un controllo manuale accurato dell'hardware.

## Come interpretare i risultati

I numeri grezzi hanno bisogno di contesto. Una batteria a 32 °C durante un uso leggero è normale. Una batteria a 42 °C mentre il telefono è fermo in una stanza fresca non lo è. Il 78 % di memoria occupata va bene. Al 92 %, il telefono può iniziare a faticare. Un segnale di -85 dBm funziona normalmente al chiuso. A -115 dBm le chiamate possono cadere.

Lo scopo della diagnostica non è trovare un singolo valore che dica "guasto". Serve a confrontare ciò che vedi con ciò che dovrebbe accadere e a individuare schemi: una batteria che ha perso il 15 % di capacità in sei mesi, un sensore che restituisce sempre zero, oppure una memoria quasi piena che rallenta tutto.

runcheck riunisce batteria, temperatura, rete e memoria in una sola schermata con un punteggio di stato unificato, evitando di controllare ogni sistema separatamente. Mostra anche un indicatore di affidabilità quando una lettura può essere stimata o incompleta, un dettaglio importante perché non tutti i telefoni Android espongono ogni dato con la stessa precisione.

## Domande frequenti

**Posso eseguire la diagnostica su un telefono che non si avvia?**
Solo in parte. Se entra in modalità recovery, di solito con Accensione e Volume su durante l'avvio, puoi almeno verificare che schermo e pulsanti funzionino. Alcuni Samsung permettono di usare la Download Mode per operazioni sul firmware. La diagnostica completa richiede un sistema operativo avviato.

**Le app di diagnostica richiedono il root?**
No. Tutto ciò che è descritto qui funziona senza root. Il root consente di leggere altri dati a livello di kernel, ma può compromettere la certificazione Play Protect e far fallire i controlli Play Integrity usati da app bancarie, di pagamento o aziendali. Può anche complicare l'assistenza del produttore. Non serve per un controllo pratico dello stato del telefono.

**Ogni quanto dovrei eseguire una diagnostica completa?**
Quando il telefono si comporta in modo anomalo: avvio più lento delle app, consumo inatteso della batteria, interruzioni di rete o surriscaldamento. Non serve una scadenza fissa. Prima di acquistare un telefono usato, invece, esegui sempre un controllo completo.

**`*#0*#` funziona anche sui telefoni non Samsung?**
No. Molti Xiaomi usano `*#*#6484#*#*`, alcuni OnePlus meno recenti possono usare `*#808#`, la diagnostica di riparazione Pixel usa `*#*#7287#*#*` e diversi telefoni con Android stock o quasi stock rispondono a `*#*#4636#*#*`. La disponibilità cambia in base a modello, regione, firmware e operatore.

**La diagnostica modifica dati o impostazioni?**
I test standard leggono informazioni e provano i componenti. L'eccezione è un eventuale comando di ripristino presente in un menu di servizio. Rimani nelle sezioni dedicate a test e diagnostica.
