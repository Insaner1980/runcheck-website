---
title: "Come testare la latenza di rete su Android"
description: "Sei in videochiamata, tutti ti sentono, l'immagine sembra buona, eppure la conversazione arriva con mezzo secondo di ritardo. Questa è la latenza. La velocità di download riceve quasi tutta l'attenzione, ma è la latenza a determinare quanto una connessione sembra reattiva."
listSummary: "Sei in videochiamata, tutti ti sentono, l'immagine sembra buona."
hub: "network"
sourceNumber: 103
order: 14
tags: ["rete","connettivita","android","risoluzione-dei-problemi","guida"]
locale: "it"
draft: false
---
La latenza si misura in millisecondi (ms). Più è bassa, meglio è. I tre valori più importanti sono ping, jitter e perdita di pacchetti. Il ping è il tempo di andata e ritorno tra il telefono e un server. Il jitter indica quanto varia quel tempo tra una richiesta e l'altra. La perdita di pacchetti è la quota di dati che non arriva a destinazione.

Una connessione da 100 Mbps con 150 ms di ping può sembrare peggiore di una da 20 Mbps con 15 ms. Sembra illogico finché non provi un gioco online, una videochiamata o un desktop remoto. La velocità trasferisce i dati. La latenza decide il tempo di risposta.

## Come interpretare i valori

Queste fasce sono indicazioni pratiche, non leggi fisiche. Il server scelto, la rete e perfino l'orario possono cambiare il risultato.

Per il ping:

- Da 0 a 20 ms: eccellente. Giochi competitivi, videochiamate e lavoro remoto rispondono quasi subito.
- Da 20 a 50 ms: buono. Va bene per quasi tutto, compresi giochi non competitivi e chiamate vocali.
- Da 50 a 100 ms: utilizzabile. Navigazione e streaming funzionano ancora, ma nei giochi veloci il ritardo inizia a farsi sentire.
- Oltre 100 ms: ritardo evidente. Le chiamate possono avere pause innaturali e i giochi in tempo reale diventano frustranti.

Per il jitter, meno di 30 ms va in genere bene. Tra 30 e 50 ms, chiamate e video in diretta possono iniziare a scattare. Oltre 50 ms, la connessione può sembrare instabile anche se la velocità è alta.

La perdita di pacchetti è meno tollerante. Oltre l'1-2 % possono comparire audio interrotto, video bloccato o rubber-banding nei giochi. No, un piano più veloce non elimina automaticamente la perdita di pacchetti.

## Inizia con uno speed test

Il primo controllo più semplice è uno speed test che mostri anche la latenza. Esegui la stessa prova due volte: una con il Wi-Fi e una con i dati mobili. Se soltanto una delle due connessioni dà risultati scarsi, hai già ristretto il campo.

### Il test di Google e M-Lab

Cerca “speed test” in Chrome sul telefono. Il test integrato di Google usa Measurement Lab, più noto come M-Lab. Il test NDT di M-Lab misura velocità di upload e download insieme a dati sulla latenza.

runcheck usa il protocollo NDT7 di M-Lab per lo speed test integrato. Il vantaggio è il contesto: il risultato viene salvato insieme a tipo di connessione, potenza del segnale, ping, jitter, upload e download, così non devi ricordare se quel risultato scarso proveniva dal Wi-Fi, da LTE o dal 5G.

### Speedtest by Ookla

Speedtest by Ookla resta l'opzione più familiare per una prova rapida. Mostra ping, jitter, download e upload e permette di scegliere un server vicino. Per ottenere un valore di riferimento, usa un server nella tua zona. Per risolvere problemi con un gioco o un servizio di lavoro, prova un server vicino all'infrastruttura del servizio, se l'app consente di selezionarlo.

### Fast.com

Fast.com è lo speed test di Netflix. Parte dalla velocità di download, ma toccando `Mostra altre informazioni` visualizza anche upload e latenza. Osserva soprattutto la latenza sotto carico. La latenza senza carico misura la connessione quando è libera. Quella sotto carico la misura mentre c'è traffico, una situazione più simile a quando qualcuno sta guardando un video, sincronizzando foto o scaricando un aggiornamento sulla stessa rete.

## Usa un ping prolungato

Gli speed test sono fotografie di un momento. Un ping eseguito per qualche minuto mostra se la latenza resta stabile.

PingTools Network Utilities riunisce ping, traceroute, ricerca DNS e altri controlli di rete in una sola app. Per una prova semplice, invia ping a un indirizzo stabile come `1.1.1.1` o `8.8.8.8`. Se stai controllando un gioco o un servizio di lavoro, usa il suo host quando il gestore ne pubblica uno.

Termux è utile se ti trovi a tuo agio con il terminale. Installalo da una fonte ufficiale, come F-Droid o le release GitHub del progetto, poi aggiungi il comando ping se necessario:

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

Il riepilogo mostra minimo, media, massimo e variazione tra le risposte. È soprattutto la variazione che conta. Una connessione che passa continuamente da 20 a 250 ms sembra peggiore di una stabile a 60 ms.

## Misura la latenza sotto carico

La latenza a rete inattiva può ingannare. Un router può mostrare 12 ms quando non succede nulla e salire a 300 ms appena un portatile inizia a caricare foto.

Il problema è spesso il bufferbloat: l'apparato di rete lascia riempire le code invece di gestire il traffico in modo ordinato. Si nota soprattutto durante upload, backup video, sincronizzazione cloud e download pesanti.

Prova così:

1. Esegui un test di latenza mentre nessun altro usa la rete.
2. Avvia un download o un upload di grandi dimensioni su un altro dispositivo.
3. Ripeti lo stesso test di latenza.

Se il ping aumenta molto sotto carico, il telefono probabilmente non è il problema principale. Router, modem o collegamento dell'operatore stanno gestendo male le code. Le impostazioni QoS possono aiutare, ma SQM (Smart Queue Management) è una soluzione migliore quando il router la supporta.

Puoi anche aprire dal browser del telefono il Waveform Bufferbloat Test. Il test assegna un voto in base all'aumento della latenza durante download e upload. A o B va in genere bene. D o F indica che le app in tempo reale soffriranno quando la rete è occupata.

## Confronta Wi-Fi e dati mobili

Provare entrambe le reti è il modo più rapido per evitare supposizioni.

La latenza Wi-Fi dipende dalla distanza dal router, dalle interferenze, dalla qualità del router, dall'affollamento dei canali e dalla banda di frequenza. A breve distanza, la banda a 5 GHz offre in genere meno interferenze e una latenza migliore dei 2,4 GHz, ma copre meno spazio. Wi-Fi 6 e Wi-Fi 6E possono aiutare nelle reti affollate, ma soltanto se li supportano sia il telefono sia il router.

La latenza mobile dipende da qualità del segnale, carico dell'antenna, instradamento dell'operatore e tipo di rete, come LTE, 5G sub-6 o 5G mmWave. Nella pratica si vedono spesso valori simili a questi:

- 4G LTE: spesso circa 30-60 ms, di più quando l'antenna è congestionata.
- 5G sub-6: spesso circa 15-40 ms.
- 5G mmWave: può essere più basso, ma la copertura è limitata e il segnale viene bloccato facilmente.
- 3G: troppo lento e incostante per gli usi moderni in tempo reale.

Non sono garanzie. Una connessione LTE pulita può superare un 5G congestionato, e un Wi-Fi debole che attraversa due pareti può perdere nettamente contro i dati mobili.

Su Android, controlla il tipo di rete mobile attivo nella barra di stato o nelle informazioni della SIM. Il percorso esatto varia per marca. Dopo un aggiornamento importante, compreso Android 17 sui Pixel supportati, ricontrolla questo dato prima di accusare l'hardware, perché profili dell'operatore e comportamento della rete possono cambiare con il software.

## Cosa aumenta la latenza

La distanza dal server è la risposta più noiosa, ma conta. Un server nella tua città può rispondere in meno di 10 ms. Uno dall'altra parte dell'oceano può superare 120 ms anche con una connessione perfetta.

Poi c'è la congestione. Troppi dispositivi sullo stesso Wi-Fi, un canale affollato in un condominio o un'antenna mobile sovraccarica aggiungono ritardo. Spesso i test serali sono peggiori di quelli del mattino.

Le VPN aggiungono un altro passaggio. Un server VPN vicino può aumentare il ping soltanto di 10-20 ms. Uno lontano può aggiungerne molti di più. Disconnetti la VPN e ripeti il test prima di concludere che il telefono è lento.

Anche il traffico in background conta. Backup cloud, aggiornamenti delle app, sincronizzazione delle foto e streaming possono aumentare la latenza, soprattutto sulle connessioni domestiche con upload limitato.

## Cosa fare con il risultato

Se la latenza è alta soltanto sul Wi-Fi, riavvia il router, avvicinati, passa alla banda a 5 GHz e prova un canale meno affollato. Se peggiora soltanto quando la rete è occupata, controlla QoS o SQM sul router.

Se è alta soltanto con i dati mobili, confronta la potenza del segnale in posizioni diverse. Attiva e disattiva la modalità aereo per forzare un nuovo collegamento alla rete. Se il problema è iniziato subito dopo un aggiornamento di sistema, controlla gli aggiornamenti di sistema e dei servizi dell'operatore.

Se la latenza è alta ovunque, prova un altro telefono sulle stesse reti. Quando due telefoni mostrano lo stesso ritardo, il problema è la rete. Quando succede soltanto su uno, allora ha senso controllare VPN, app in background, surriscaldamento o un possibile problema radio.

## FAQ

### Ping e latenza sono la stessa cosa?

Tecnicamente la latenza è il ritardo in una direzione, mentre il ping misura l'andata e ritorno. Nella normale risoluzione dei problemi sul telefono, i due termini vengono usati quasi come sinonimi perché le app mostrano il ping di andata e ritorno.

### Posso abbassare il ping su Android?

Non puoi ridurre la distanza fisica dal server, ma puoi eliminare ritardi evitabili. Disconnetti una VPN lenta, chiudi le app che usano molta banda in background, usa il Wi-Fi a 5 GHz quando sei vicino al router e correggi il bufferbloat sul router se la latenza sale sotto carico.

### Perché la velocità è alta ma il gioco va a scatti?

Perché velocità di download e latenza sono problemi diversi. Una connessione veloce può comunque avere jitter, perdita di pacchetti o latenza sotto carico elevati. Nei giochi conta più la regolarità dei tempi che il numero di Mbps.

### Quanto spesso devo testare la latenza?

Esegui prove in orari diversi per alcuni giorni. Un solo risultato è una fotografia. Tre o quattro test su Wi-Fi e dati mobili mostrano se il problema è costante.
