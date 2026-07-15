---
title: "Come risolvere i problemi di connessione Wi-Fi su Android"
description: "Soluzioni passo passo per i problemi Wi-Fi su Android, tra cui disconnessioni, Wi-Fi lento, reti salvate, impostazioni DNS, controlli del router e indicazioni per gli aggiornamenti ad Android 17."
listSummary: "Soluzioni passo passo per i problemi Wi-Fi su Android."
hub: "network"
sourceNumber: 96
order: 7
tags: ["prestazioni","velocita","android","ottimizzazione","risoluzione-dei-problemi"]
locale: "it"
draft: false
---
Cosa conviene provare per prima cosa quando il Wi-Fi su Android smette di funzionare? Non partire da un ripristino dei dati di fabbrica e non perdere mezz'ora a modificare il router prima di aver controllato le cose semplici. La maggior parte dei problemi rientra in tre casi: il telefono non si connette, si connette ma perde spesso la rete, oppure resta connesso ma Internet sembra non funzionare.

Segui queste soluzioni nell'ordine indicato. Risparmi tempo.

## 1. Disattiva e riattiva il Wi-Fi, poi prova la modalità aereo

Apri le Impostazioni rapide e disattiva il Wi-Fi. Aspetta cinque secondi, poi riattivalo.

Se non basta, attiva la modalità aereo, aspetta dieci secondi e disattivala. In questo modo riavvii le radio wireless del telefono senza riavviare tutto il dispositivo. Su Pixel e sulle versioni di Android vicine all'interfaccia standard, trovi la modalità aereo anche in Impostazioni > Rete e internet. Su Samsung, vai in Impostazioni > Connessioni.

È una soluzione minima, ma risolve un numero sorprendente di blocchi temporanei delle radio.

## 2. Elimina la rete salvata e collegati di nuovo

Un profilo Wi-Fi salvato può diventare obsoleto dopo un aggiornamento del firmware del router, una modifica della password o della modalità di sicurezza, oppure una riconfigurazione del sistema mesh.

Su Pixel e su molte interfacce in stile Android 17, vai in Impostazioni > Rete e Internet > Internet. Tocca l'icona delle impostazioni accanto alla rete, quindi elimina la rete salvata. Su Samsung, vai in Impostazioni > Connessioni > Wi-Fi, tocca l'icona delle impostazioni accanto alla rete e usa il comando per rimuoverla.

Seleziona di nuovo la rete e inserisci la password. Se il router offre sia una rete principale sia una rete ospiti, controlla di aver scelto quella giusta.

## 3. Riavvia il telefono e il router

Riavvia il telefono. Poi scollega il router dall'alimentazione per 30 secondi e riaccendilo.

Fai entrambe le cose. Il telefono può avere uno stato di rete temporaneo errato, mentre il router può conservare un lease DHCP non più valido o una tabella delle connessioni sovraccarica. Riavviando entrambi i lati, costringi i dispositivi a negoziare una nuova connessione.

Se il problema riguarda più dispositivi, il riavvio del router conta più di quello del telefono.

## 4. Controlla se il problema è il Wi-Fi o Internet

Android può risultare connesso al Wi-Fi anche quando la connessione Internet a monte del router non funziona. L'icona Wi-Fi indica soltanto che il telefono ha stabilito un collegamento wireless locale.

Prova un altro dispositivo sulla stessa rete. Se tutti sono lenti o offline, controlla modem, router e operatore Internet. Se il problema riguarda solo il telefono Android, continua con le verifiche sul dispositivo.

Prova anche ad aprire la pagina di amministrazione del router. Molti modelli usano 192.168.1.1 o 192.168.0.1. Se la pagina si apre ma i siti web no, il collegamento Wi-Fi funziona e il problema riguarda la connessione a monte, il DNS o la configurazione del router.

## 5. Aggiorna Android, i componenti di sistema Google Play e il firmware del router

Su Pixel, vai in Impostazioni > Sistema > Aggiornamento software e installa gli aggiornamenti disponibili. Su Samsung, usa Impostazioni > Aggiornamenti software > Scarica e installa.

Controlla anche gli aggiornamenti di sistema Google Play nella sezione dedicata agli aggiornamenti di sistema in Sicurezza e privacy. La formulazione esatta può cambiare, ma il principio non cambia: contano sia il firmware del telefono sia i componenti di sistema.

Il firmware del router si dimentica facilmente. Apri l'app o il pannello di amministrazione del router e cerca gli aggiornamenti del firmware, del sistema o dell'amministrazione. I produttori correggono spesso problemi di stabilità Wi-Fi, ma molti router non si aggiornano da soli in modo affidabile.

## 6. Disattiva il passaggio automatico dal Wi-Fi ai dati mobili

Se il telefono abbandona il Wi-Fi senza motivo anche quando il router funziona, il passaggio automatico alla rete mobile può essere la causa.

Su Pixel, controlla la funzione di connettività adattiva in Impostazioni > Rete e internet. Su Samsung, apri Impostazioni > Connessioni > Wi-Fi > Wi-Fi intelligente e disattiva temporaneamente l'opzione che passa ai dati mobili.

Lasciala disattivata per un giorno. Se il Wi-Fi diventa stabile, la funzione stava reagendo in modo troppo aggressivo a una rete considerata debole o di qualità insufficiente.

## 7. Controlla se stai usando 2,4 GHz o 5 GHz

La banda a 2,4 GHz copre distanze maggiori e attraversa meglio le pareti. La banda a 5 GHz è più veloce vicino al router, ma perde segnale prima quando ci sono ostacoli. Un telefono collegato a 5 GHz può funzionare perfettamente nella stanza accanto e poi avere problemi all'altro capo della casa.

Se il router unisce entrambe le bande sotto lo stesso nome, separale temporaneamente con nomi come HomeWiFi-2G e HomeWiFi-5G. Collega il telefono a 2,4 GHz per una portata maggiore oppure a 5 GHz per una velocità superiore.

Di solito puoi vedere la banda corrente aprendo i dettagli della rete Wi-Fi connessa. Android standard può mostrare la frequenza o la velocità del collegamento. Samsung offre informazioni simili nella schermata delle impostazioni della rete Wi-Fi.

## 8. Controlla il DNS privato prima di impostare un DNS statico

Un problema DNS può far sembrare guasto il Wi-Fi. Il telefono risulta connesso, alcune app di messaggistica possono funzionare in parte, ma i siti restano in attesa o non vengono risolti.

Su Android 9 e versioni successive, controlla Impostazioni > Rete e internet > DNS privato. Se è configurato un provider personalizzato e il Wi-Fi non funziona, imposta temporaneamente Automatico oppure Off e riprova.

Puoi usare provider come `dns.google` o `one.one.one.one`, ma devi scrivere il nome esattamente. Un hostname errato nel DNS privato può interrompere la risoluzione dei nomi sia sul Wi-Fi sia sui dati mobili.

Evita di cambiare una rete Wi-Fi da DHCP a IP statico se non conosci indirizzo IP, gateway e subnet corretti. Un DNS statico può aiutare in casi specifici, ma inserire dati IP sbagliati crea un nuovo problema, spesso peggiore di quello iniziale.

## 9. Ripristina le impostazioni di rete

Usa questa soluzione quando i singoli tentativi non hanno funzionato. Il ripristino rimuove reti Wi-Fi e associazioni Bluetooth senza cancellare foto, app o file. Sui Pixel recenti il ripristino di Wi-Fi e Bluetooth è separato da quello della rete mobile.

Pixel e Android standard recenti: Impostazioni > Sistema > Opzioni di ripristino > Reimposta Bluetooth e Wi-Fi. Se il problema riguarda anche i dati mobili, nella stessa sezione trovi un ripristino separato della rete mobile.

Samsung: Impostazioni > Gestione generale > Ripristina > Ripristina impostazioni di rete.

Xiaomi: su molte versioni il percorso inglese è Settings > Connection & sharing > Reset Wi-Fi, mobile networks, and Bluetooth.

OnePlus: su molte versioni è Settings > System > Reset options > Reset Wi-Fi, mobile & Bluetooth. Se il percorso non coincide, usa la ricerca nelle Impostazioni e cerca ripristino rete, Wi-Fi o Bluetooth.

Dovrai collegarti di nuovo alle reti Wi-Fi e associare nuovamente i dispositivi Bluetooth.

## 10. Controlla data e ora

Data e ora errate possono bloccare i controlli dei certificati, i captive portal e alcuni sistemi di autenticazione. Sembra troppo semplice, ma succede davvero dopo un viaggio, una batteria rimasta completamente scarica, una modifica manuale del fuso orario o un problema durante la configurazione.

Vai in Impostazioni > Sistema > Data e ora e attiva l'ora e il fuso orario automatici. Su Samsung, usa Impostazioni > Gestione generale > Data e ora.

## 11. Controlla la randomizzazione del MAC sulle reti fidate

Android 10 e versioni successive usano indirizzi MAC casuali per migliorare la privacy sulle reti Wi-Fi. È utile sulle reti pubbliche. A casa o al lavoro, però, può confondere i router che usano filtri MAC, indirizzi IP riservati, controlli parentali o limiti al numero di dispositivi.

Apri i dettagli della rete Wi-Fi e cerca la voce relativa alla privacy o al tipo di indirizzo MAC. Se una rete domestica fidata continua a rifiutare il telefono, prova l'indirizzo MAC del telefono o del dispositivo solo per quella rete. Mantieni attivo il MAC casuale sulle altre reti.

## 12. Risolvi le cause sul router

Se il problema riguarda più dispositivi, concentrati sul router.

Sulla banda a 2,4 GHz, usa i canali 1, 6 o 11 e scegli quello meno affollato. Non mettere il router dietro il televisore, dentro un mobile, accanto al microonde, vicino a scaffali metallici o sul pavimento.

Se il router usa il band steering, prova a disattivarlo oppure separa le reti a 2,4 GHz e 5 GHz. Se usa solo WPA3 e un telefono meno recente ha problemi, prova la modalità mista WPA2/WPA3. Se esiste un limite ai dispositivi collegati, aumentalo o rimuovi i dispositivi non più usati.

Nelle case grandi, un sistema mesh è in genere migliore di un ripetitore economico. I ripetitori possono funzionare, ma spesso riducono la velocità e rendono meno fluido il passaggio da un punto di accesso all'altro.

## 13. Dopo Android 17 o un altro aggiornamento importante

Android 17 è stato distribuito prima sui Pixel supportati nel giugno 2026, mentre gli altri produttori seguono calendari propri. Se i problemi Wi-Fi sono iniziati subito dopo l'aggiornamento, non dare per scontato che il router si sia guastato nello stesso momento.

Installa eventuali patch di sicurezza successive, aggiorna dal Play Store le app legate all'operatore e alla connettività, riavvia telefono e router, quindi elimina la rete e collegati di nuovo. Se il problema è diffuso per il tuo modello e la tua build esatti, la vera soluzione può arrivare con una patch mensile.

I consigli meno recenti suggeriscono spesso di cancellare la partizione della cache di sistema. Non partirei da lì sui telefoni Android moderni. Alcuni modelli Samsung mostrano ancora opzioni di cache nella modalità di recupero, ma molti dispositivi recenti non usano più quel percorso di risoluzione dei problemi in modo prevedibile.

## 14. Prova la modalità provvisoria

La modalità provvisoria avvia Android senza la maggior parte delle app di terze parti. Se il Wi-Fi funziona normalmente in modalità provvisoria, un'app installata sta interferendo.

Le cause più comuni sono app VPN, firewall, blocchi pubblicitari, strumenti di gestione del dispositivo e app che promettono di "potenziare" il Wi-Fi. Disinstalla o disattiva prima le app di rete installate o aggiornate più di recente.

## Quando considerare una riparazione hardware

Se il telefono perde il Wi-Fi con più router, continua a non funzionare dopo il ripristino di rete e in modalità provvisoria, mentre gli altri dispositivi funzionano normalmente, un guasto hardware diventa plausibile. I danni all'antenna e i guasti del chip Wi-Fi non sono frequenti, ma possono comparire dopo cadute o contatto con liquidi.

A quel punto, esegui un ripristino dei dati di fabbrica solo dopo aver creato un backup. Se non cambia nulla, la riparazione è il passo successivo più realistico.

## Risposte rapide

Conviene disattivare il Wi-Fi quando esci di casa? In genere no. Android moderno gestisce la scansione in modo efficiente e lasciare il Wi-Fi attivo aiuta con le reti note e la precisione della posizione.

Una custodia può interferire con il Wi-Fi? Le custodie normali no. Custodie metalliche, custodie con batteria molto spesse o piastre magnetiche possono ridurre la ricezione quando il segnale è già debole.

Come controlli la potenza del segnale Wi-Fi in dBm? Alcune versioni di Android la mostrano nei dettagli Wi-Fi. Se la tua non lo fa, un'app di analisi Wi-Fi può visualizzarla. Da circa -30 a -50 dBm è un valore eccellente, da -50 a -70 dBm è utilizzabile o buono, mentre sotto -70 dBm la connessione può diventare instabile a seconda delle interferenze.

runcheck monitora nel tempo la qualità del segnale Wi-Fi nella schermata dei dettagli di rete, insieme a informazioni come banda di frequenza, velocità del collegamento e cronologia del segnale quando Android le rende disponibili.
