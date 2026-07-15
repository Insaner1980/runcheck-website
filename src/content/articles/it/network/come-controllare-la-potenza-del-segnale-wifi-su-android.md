---
title: "Come controllare la potenza del segnale WiFi su Android"
description: "Scopri come leggere la potenza del WiFi su Android in dBm, non soltanto tramite le tacche. Include impostazioni integrate, app di analisi e spiegazione dei valori."
listSummary: "Scopri come leggere la potenza del WiFi su Android in dBm, non soltanto tramite le tacche."
hub: "network"
sourceNumber: 90
order: 1
tags: ["rete","connettivita","android","risoluzione-dei-problemi","guida"]
locale: "it"
draft: false
---
Le tacche del WiFi nella barra di stato sono un'indicazione approssimativa, non una misura. Metti due telefoni uno accanto all'altro e possono comunque mostrare risultati diversi, perché interfacce Android e produttori non associano tutti le tacche alla potenza del segnale nello stesso modo.

Per una diagnosi reale, cerca il valore in dBm. Indica la potenza del segnale che il telefono riceve dal router.

## Inizia dalle impostazioni di Android

Su un Pixel o un telefono con Android vicino alla versione standard, apri **Impostazioni > Rete e Internet > Internet**. Su un Samsung Galaxy apri **Impostazioni > Connessioni > Wi-Fi**. Tocca la rete a cui sei connesso.

La schermata dei dettagli mostra di solito una valutazione del segnale, per esempio Eccellente, Buono, Discreto o Debole. Può anche indicare velocità di connessione, frequenza, tipo di sicurezza, indirizzo IP e altri dati. La schermata esatta cambia in base al marchio e alla versione di Android, quindi non preoccuparti se il telefono non corrisponde perfettamente alle immagini di una guida.

Su molti telefoni attuali, le Impostazioni di Android non mostrano il valore grezzo in dBm. È fastidioso, ma normale. La velocità di connessione offre comunque un contesto utile. Se passa da diverse centinaia di Mbps vicino al router a 40 Mbps nella stanza più lontana, la connessione sta già segnalando un problema.

## Prova le Opzioni sviluppatore, ma non farci affidamento

Alcuni telefoni possono mostrare più dettagli sul WiFi dopo aver attivato le Opzioni sviluppatore.

Apri **Impostazioni > Informazioni sul telefono** e tocca sette volte **Numero build**. Poi vai in **Impostazioni > Sistema > Opzioni sviluppatore** e cerca, nella sezione relativa alle reti, l'opzione **Attiva il logging dettagliato del Wi-Fi**. La documentazione Google spiega che aumenta le informazioni registrate per ogni SSID in base all'RSSI relativo.

Nella pratica, ciò che diventa visibile cambia da dispositivo a dispositivo. Pixel e telefoni vicini ad Android standard hanno più probabilità di mostrare dettagli utili. Samsung e altri sistemi OEM possono nascondere le stesse informazioni o presentarle in modo diverso. È uno di quei trucchi Android che funziona finché non funziona.

## Usa un'app di analisi WiFi per leggere i dBm

Un'app di analisi WiFi è il modo più semplice per ottenere una lettura in dBm su telefoni diversi.

WiFiman di Ubiquiti mostra dettagli WiFi come potenza del segnale, canale, SSID, BSSID, gateway, DNS, latenza e perdita di pacchetti. È una buona prima scelta se vuoi una sola app che includa anche test di velocità e strumenti per rilevare i dispositivi in rete.

NetSpot è più adatta se vuoi mappare un ambiente. Può mostrare la potenza del segnale e aiutarti a costruire un quadro approssimativo della copertura mentre cammini in casa o in ufficio.

Network Analyzer è utile quando il problema potrebbe non essere la potenza del segnale. Combina informazioni WiFi e rete mobile con strumenti come ping, ricerca DNS e traceroute.

Dopo aver installato un'app, trova il nome della tua rete e osserva il valore in dBm mentre ti sposti. Quel numero conta più dell'icona nella barra di stato.

## Cosa significano i valori in dBm

I valori in dBm sono negativi. Più sono vicini allo zero, più il segnale è forte. Una lettura di -45 dBm è molto migliore di -75 dBm.

Puoi usare queste soglie pratiche per una rete domestica:

- Da -30 a -50 dBm: eccellente. Probabilmente sei vicino al router o all'access point.
- Da -50 a -60 dBm: forte. Streaming, videochiamate e navigazione normale dovrebbero essere stabili.
- Da -60 a -67 dBm: ancora buono per la maggior parte degli usi, compresi video HD e chiamate se le interferenze sono ridotte.
- Da -67 a -70 dBm: utilizzabile, ma chiamate in tempo reale e giochi possono iniziare a risentirne.
- Da -70 a -80 dBm: debole. La navigazione può funzionare, ma la qualità video può scendere e le chiamate bloccarsi.
- Sotto -80 dBm: scarso. Il telefono può restare connesso mentre il trasferimento dati sembra non funzionare.

Non esiste una soglia perfetta, perché contano anche rumore e interferenze. Un segnale pulito a -68 dBm può funzionare meglio di uno rumoroso a -60 dBm in un condominio pieno di router.

## Controlla la banda di frequenza

La maggior parte dei router usa la banda più bassa a 2,4 GHz e quella più veloce a 5 GHz. I modelli più recenti possono usare anche i 6 GHz tramite WiFi 6E o WiFi 7.

La banda più bassa arriva più lontano e attraversa meglio le pareti, ma è affollata. Dispositivi Bluetooth, router vicini, baby monitor e forni a microonde possono aggiungere rumore.

La banda a 5 GHz è più veloce a distanza breve e media. Perde segnale più rapidamente attraverso pareti e pavimenti. Il telefono può mostrare un valore in dBm peggiore e offrire comunque prestazioni superiori alla banda più bassa, perché ha più spazio disponibile per i dati.

La banda a 6 GHz è ancora più pulita quando è disponibile, ma la portata si riduce di nuovo. Funziona molto bene nella stessa stanza o in quelle vicine. Non risolve magicamente la copertura di tutta la casa.

Se il router riunisce le bande sotto un unico nome di rete, il telefono ne sceglie una automaticamente. Di solito la scelta va bene, ma non sempre. Quando analizzi una zona morta, controlla quale banda sta usando davvero il telefono prima di dare la colpa al router.

## Cammina nelle zone problematiche

Apri l'app di analisi e muoviti lentamente nelle stanze in cui il WiFi funziona male. Osserva il punto in cui la rete scende sotto circa -70 dBm.

Le cause più comuni sono poco sorprendenti ma reali: pareti in cemento, mattoni, porte metalliche, specchi con rivestimento metallico, riscaldamento a pavimento e router chiusi dentro mobili. Nascondere il router in un armadio è un classico problema creato in casa.

runcheck mostra la lettura WiFi attuale nella schermata dei dettagli di rete, con dBm, valutazione della qualità, velocità di connessione, frequenza e latenza quando Android espone questi valori. La cronologia della rete è utile quando il problema è intermittente, per esempio se la velocità cala ogni sera o la qualità del segnale peggiora soltanto in una stanza.

## Migliora un segnale debole

Per prima cosa sposta il router. Mettilo più in alto, più vicino al centro della casa e lontano dagli oggetti metallici. Non nasconderlo dietro il televisore o dentro un mobile.

Cambia canale se molti router vicini usano lo stesso. Sui 2,4 GHz, i canali 1, 6 e 11 sono scelte comuni che non si sovrappongono tra loro. Sulle bande a 5 GHz e 6 GHz c'è più spazio, ma nei condomini può esserci comunque congestione.

Usa una rete mesh quando un solo router non riesce a coprire l'ambiente. Un sistema mesh con nodi ben posizionati è in genere migliore di un ripetitore economico collocato al limite della zona con segnale debole. Anche il ripetitore deve ricevere un segnale decente. Se sente appena il router, non può creare una buona rete dal nulla.

Aggiorna il firmware del router quando sono disponibili nuove versioni. Non può cambiare le leggi della fisica, ma può correggere bug, problemi di roaming e incompatibilità con telefoni più recenti.
