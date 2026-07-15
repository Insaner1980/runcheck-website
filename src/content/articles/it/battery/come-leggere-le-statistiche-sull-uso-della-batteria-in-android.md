---
title: "Come leggere le statistiche sull'uso della batteria in Android"
description: "Le statistiche sull'uso della batteria in Android mostrano quali app e servizi consumano energia. Scopri dove trovarle, cosa significano le percentuali e come individuare un vero problema."
listSummary: "Le statistiche sull'uso della batteria in Android mostrano quali app e servizi consumano energia."
hub: "battery"
sourceNumber: 14
order: 4
subgroup: "Stato della batteria"
tags: ["batteria","consumo","risoluzione-dei-problemi","android","prestazioni"]
locale: "it"
draft: false
---
Apri Utilizzo batteria e vedi un'app al 42 %. Sembra un problema. A volte lo è. Altre volte quel numero significa quasi nulla.

Le statistiche di Android sono utili per restringere il campo, ma non sono una ricevuta precisa di ogni milliampereora consumato. Il punto è leggere le percentuali nel loro contesto.

## Dove trovare le statistiche

Su Pixel e sui dispositivi con Android vicino alla versione standard, apri **Utilizzo della batteria** nella sezione Batteria delle Impostazioni. Puoi visualizzare il consumo per app e, nelle versioni Pixel recenti, passare dalle app ai componenti di sistema. Toccando un'app si aprono i relativi controlli, comprese le opzioni per l'uso in background.

Sui telefoni Samsung Galaxy, apri **Impostazioni > Batteria**. In alcune versioni meno recenti di One UI, il percorso passa da **Impostazioni > Assistenza dispositivo > Batteria**. Samsung mostra spesso prima un grafico e poi la voce **Uso batteria** o un'opzione per vedere i dettagli delle app e delle funzioni. Alcune versioni offrono anche una cronologia più lunga, spesso più utile di una singola finestra tra due ricariche.

Sui telefoni Xiaomi, Redmi e POCO, cerca la sezione dedicata all'uso o al consumo della batteria nel menu Batteria. I nomi cambiano tra MIUI, HyperOS e i vari modelli, quindi la voce può essere leggermente diversa.

Su OnePlus, OPPO e realme, parti dal menu Batteria e cerca la schermata con i dettagli del consumo o la gestione della batteria delle app. Queste interfacce di solito distinguono l'attività in primo piano da quella in background dopo aver selezionato un'app.

Il codice `*#*#4636#*#*` apre un menu di test su alcuni telefoni Android. Può mostrare tensione, temperatura, stato e tipo di ricarica. Non è una schermata con il consumo per app, e molti produttori lo disattivano.

## Cosa significano davvero le percentuali

Il numero accanto a un'app indica di solito la sua quota dell'energia consumata, non una parte della capacità totale della batteria.

Immagina che il telefono passi dal 100 % al 70 %. Hai usato 30 punti percentuali. Se YouTube appare al 50 % nella schermata Utilizzo batteria, non significa che abbia consumato metà dell'intera batteria. Significa che Android gli attribuisce circa metà del consumo registrato in quella finestra. In questo esempio, corrisponde più o meno a 15 punti percentuali reali.

Ora capovolgi la situazione. Il telefono scende dal 100 % al 96 % e un'app mostra il 60 %. Quell'app ha dominato un consumo minimo. Potrebbe essere del tutto innocua.

È l'errore più comune: inseguire la percentuale più alta senza controllare quanta batteria sia stata davvero utilizzata.

## Come Android stima il consumo

Android non installa un piccolo misuratore di energia dentro ogni app. Fa una stima.

Il sistema registra per quanto tempo i componenti del dispositivo restano in determinati stati: CPU, schermo, GPS, Wi-Fi, modem cellulare, Bluetooth e così via. Il produttore fornisce un profilo energetico che indica quanta corrente dovrebbe assorbire ogni componente in quelle condizioni. Android unisce tempi e profilo e attribuisce il consumo alle app e ai servizi di sistema.

Per la risoluzione dei problemi è abbastanza. Non è una misurazione da laboratorio.

I profili energetici cambiano da un produttore all'altro. Un Pixel e uno Xiaomi possono eseguire la stessa app per lo stesso tempo e mostrare percentuali diverse. Non è detto che l'app si sia comportata diversamente. Può essere cambiato soltanto il modello usato per fare i conti.

## Come leggere il grafico della batteria

All'inizio il grafico conta più dell'elenco delle app.

Un calo ripido mentre lo schermo è acceso è spesso normale. Luminosità elevata, video, mappe, giochi, fotocamera e rete mobile possono consumare rapidamente. Un calo ripido a schermo spento è più interessante. Può indicare attività in background, segnale debole, un ciclo di sincronizzazione, un processo bloccato o un telefono che non entra mai nel sonno profondo.

A schermo spento, una linea quasi piatta è ciò che vuoi vedere. Significa che il telefono sta riposando.

I periodi di ricarica compaiono come salite o salti verticali. Un vuoto nel grafico può significare che il telefono era spento, che le statistiche sono state azzerate oppure che il sistema non ha raccolto dati. Non leggere troppo in un grafico confuso di una giornata con cinque brevi ricariche. I rabbocchi frequenti rendono instabili le percentuali delle app.

## Schermo, tempo attivo e qualità del segnale

Alcune versioni di Android mostrano barre o indicatori sotto il grafico. È facile ignorarli, ma spesso spiegano il problema.

Il tempo di schermo acceso indica quando il display era attivo. Se gran parte del consumo coincide con quei periodi, il telefono probabilmente funziona normalmente. Lo schermo è uno dei componenti che assorbono più energia.

Il tempo attivo mostra quando la CPU stava lavorando. Idealmente, coincide in gran parte con lo schermo acceso. Lunghi periodi di attività con il display spento suggeriscono wake lock o lavoro in background. Sincronizzazione della posta, app di fitness, backup sul cloud, navigazione, messaggistica e riproduzione multimediale possono farlo. Una parte è normale. Un'app di shopping attiva per tre ore non lo è.

Anche il segnale conta molto. Una rete cellulare debole può consumare parecchio perché il modem continua a lavorare per mantenere la connessione. Se Standby rete mobile o una voce simile sale vicino ai primi posti mentre sei in un seminterrato, su un treno, in campagna o dentro un edificio in cemento, il telefono potrebbe non avere alcun guasto. Sta semplicemente lottando per restare collegato.

## I modelli di consumo che meritano attenzione

Un'app che usa molta batteria non è automaticamente un problema. Un'app che usa molta batteria quando l'hai aperta appena, invece, lo è.

Un'app video in cima alla lista dopo due ore di streaming è normale. Un'app di notizie al primo posto dopo cinque minuti di lettura è sospetta. Toccala e confronta il tempo in primo piano con quello in background.

Un valore alto per Sistema Android o App di sistema è più difficile da interpretare. Può indicare un vero problema, soprattutto dopo un aggiornamento difettoso. Può anche significare che Android non è riuscito ad attribuire con precisione il consumo a una singola app e ha inserito tutto nel contenitore di sistema.

Lo stesso vale per Google Play Services. Gestisce notifiche push, sincronizzazione degli account, posizione e altri servizi condivisi da molte app. Se appare in alto, controlla quali app richiedono la posizione troppo spesso. Google Play Services può essere il messaggero, non il colpevole.

Per molte persone, lo schermo può rappresentare il 40-50 % dell'energia consumata senza che ci sia nulla di anomalo. Se lo schermo è rimasto acceso poco ma il consumo totale è elevato, allora vale la pena cercare altrove.

## Cosa fare quando trovi un'app sospetta

Parti con interventi leggeri. Aggiorna l'app. Riavvia il telefono. Controlla se il problema si ripete il giorno successivo.

Se continua, limita l'uso in background. Su Pixel, tocca l'app dalla schermata **Utilizzo della batteria**, poi regola **Consenti l'utilizzo in background** oppure apri le impostazioni della batteria dell'app da **Impostazioni > App > [nome app] > Batteria**. Su Samsung, seleziona l'app dalla schermata del consumo e usa **Limiti per l'uso in background**, **Applicazioni in sospensione** o **App in sospensione avanzata**.

L'arresto forzato è un test temporaneo, non una soluzione. Può bloccare un'app impazzita sul momento, ma notifiche push, attività pianificate o un riavvio possono avviarla di nuovo. Limitare l'uso in background è più pulito.

La modalità provvisoria è utile quando tutto il telefono si scarica rapidamente e non riesci a individuare una singola app. Disattiva le app di terze parti. Se il consumo torna normale, la causa è probabilmente software. Se rimane uguale, controlla il segnale, un aggiornamento di sistema, la temperatura del dispositivo o la batteria stessa.

## Cosa non possono dirti le statistiche

Le statistiche sui consumi non dimostrano lo stato della batteria. Una cella usurata e un'app difettosa possono produrre sintomi simili nell'uso quotidiano.

Inoltre, la finestra temporale cambia in base al dispositivo. Pixel si concentra sull'uso dall'ultima carica completa. Samsung ha modificato più volte il layout tra le versioni di One UI, e alcune mostrano i consumi dall'ultima ricarica invece di usare sempre un ciclo completo. Le ricariche parziali frequenti accorciano la finestra e fanno sembrare le percentuali più drammatiche.

Per vedere una tendenza serve una cronologia. AccuBattery può stimare la capacità e registrare le sessioni nel tempo. runcheck conserva dati storici su livello della batteria, temperatura, velocità di scarica e sessioni collegate, così puoi confrontare più giornate invece di fissare un singolo grafico rumoroso.

L'uso migliore della schermata Utilizzo della batteria è semplice: trovare il primo indizio credibile e poi verificarlo con il comportamento reale. Se grafico, elenco delle app, tempo in background e ricordo della giornata indicano tutti la stessa causa, probabilmente hai trovato il consumo anomalo.
