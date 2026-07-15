---
title: "Perché il telefono non ha segnale e come risolvere il problema"
description: "Passaggi pratici per risolvere i messaggi Nessun segnale, Nessun servizio e Solo chiamate di emergenza su Android, con controlli su SIM, eSIM, operatore, APN, aggiornamenti e hardware."
listSummary: "Passaggi pratici per risolvere i messaggi Nessun segnale."
hub: "network"
sourceNumber: 102
order: 13
tags: ["rete","connettivita","android","risoluzione-dei-problemi","guida"]
locale: "it"
draft: false
---
Il telefono mostra `Nessun segnale`, `Nessun servizio` o `Solo chiamate di emergenza` e, all'improvviso, quel piccolo computer costoso che tieni in mano è soltanto una fotocamera con Wi-Fi. È irritante, ma non sempre è un problema grave.

Il metodo più utile consiste nel separare tre possibili cause: il telefono, la SIM o eSIM e la rete dell'operatore. Procedere per tentativi fa perdere tempo. Controllarle in ordine permette quasi sempre di capire dove si trova il guasto.

## Fai subito queste tre cose

Attiva la modalità aereo, attendi circa 15 secondi, poi disattivala. In questo modo il telefono interrompe la registrazione alla rete e prova a collegarsi di nuovo.

Riavvia il telefono. Il riavvio ricarica modem, servizi SIM e configurazione dell'operatore. Se lo stack radio è bloccato, spesso basta questo.

Se usi una SIM fisica, spegni il telefono, estrai il carrello, controlla che la scheda sia pulita e piatta, quindi reinseriscila saldamente. Una SIM leggermente fuori sede può causare la perdita del servizio dopo una caduta o dopo aver cambiato cover.

Se usi una eSIM, non eliminarne il profilo come primo tentativo. Apri `Impostazioni > Rete e internet > SIM` e verifica che la linea eSIM sia attiva. Eliminare una eSIM può trasformare un piccolo problema in una chiamata all'assistenza dell'operatore.

## Controlla se la rete dell'operatore è fuori servizio

È la risposta meno soddisfacente, ma capita spesso: il telefono funziona e il problema riguarda l'operatore.

Chiedi a una persona vicina che usa lo stesso operatore se ha segnale. Controlla l'app, la pagina di assistenza o i canali social dell'operatore. Downdetector può offrire un'indicazione, ma raccoglie segnalazioni degli utenti e non mostra la diagnostica interna dell'operatore.

Se più persone con lo stesso operatore non hanno servizio nella stessa zona, smetti di modificare le impostazioni del telefono. Attendi che il guasto venga risolto oppure spostati in un'altra area.

## Assicurati che la linea SIM sia attiva

Il telefono può mostrare l'assenza di servizio quando la linea SIM è disattivata, l'account è sospeso, il credito o il pacchetto prepagato è terminato, il profilo eSIM è stato trasferito su un altro dispositivo oppure il telefono è vincolato a un operatore diverso.

Su Pixel e su molti telefoni con Android quasi stock, apri `Impostazioni > Rete e internet > SIM`, scegli l'operatore e controlla che `Utilizza SIM` e `Dati mobili` siano attivi.

Su Samsung, controlla `Impostazioni > Connessioni > Gestione SIM` e `Impostazioni > Connessioni > Reti mobili`.

Se il telefono mostra `Nessuna SIM`, la scheda potrebbe essere danneggiata, disattivata o non letta correttamente. Se mostra `Solo chiamate di emergenza`, il telefono rileva una rete ma non riesce ad autenticarsi normalmente. Questo indica spesso un problema con SIM, account, blocco operatore o roaming, più che un'antenna completamente guasta.

## Dopo Android 17 o un altro aggiornamento importante

Google ha pubblicato Android 17 il 16 giugno 2026 per la maggior parte dei Pixel supportati. Samsung, OnePlus, Xiaomi, Motorola e gli altri produttori seguono calendari propri. Se il problema di segnale è iniziato subito dopo un aggiornamento importante, il momento in cui è comparso conta.

Non ripristinare subito i dati di fabbrica. Prova prima questi passaggi:

- Riavvia ancora il telefono dopo che l'aggiornamento è terminato.
- Cerca un altro aggiornamento di sistema o della configurazione dell'operatore.
- Attiva e disattiva una volta la modalità aereo.
- Ripristina soltanto le impostazioni della rete mobile, se la tua versione di Android offre questa opzione.
- Se il 5G è instabile, seleziona temporaneamente LTE o 4G come tipo di rete preferito e riprova.

Alcuni problemi iniziali dopo un aggiornamento vengono corretti con le patch mensili o con nuovi profili dell'operatore. Il ripristino dei dati di fabbrica deve stare quasi alla fine dell'elenco, non all'inizio.

## Controlla il tipo di rete preferito

Apri le impostazioni della SIM e cerca `Tipo di rete preferito` o `Modalità di rete`. Scegli l'opzione automatica che comprende la generazione più alta supportata, ad esempio `5G/LTE/3G/2G` o `5G/4G/3G/2G`.

Se il telefono è forzato su una generazione di rete non più disponibile nella tua zona, può perdere completamente il servizio. Succede con vecchie impostazioni solo 3G nei paesi in cui il 3G è stato spento. Può anche capitare dopo aver selezionato soltanto LTE o soltanto 5G per una prova e aver dimenticato di ripristinare la modalità automatica.

Su Samsung, il percorso è in genere `Impostazioni > Connessioni > Reti mobili > Modalità di rete`.

Su Xiaomi e POCO, controlla `Impostazioni > Schede SIM e reti mobili`.

Se il produttore ha spostato la voce, usa la ricerca nelle Impostazioni. Succede più spesso di quanto dovrebbe.

## Riporta la selezione della rete su automatico

La selezione manuale dell'operatore può lasciare il telefono bloccato sulla rete sbagliata. È comune dopo un viaggio.

Nelle impostazioni della SIM cerca `Seleziona automaticamente rete` o la sezione relativa agli operatori di rete e attiva la selezione automatica. Se non funziona, avvia una ricerca manuale e scegli il tuo operatore dall'elenco.

Se sei in roaming, verifica prima che il piano lo consenta. Le regole per voce e dati in roaming possono essere diverse a seconda dell'operatore e dell'offerta.

## Controlla gli APN per i problemi di dati

Gli APN indicano ad Android come collegarsi alla rete dati dell'operatore. Un APN errato causa in genere problemi con dati mobili o MMS, non la totale assenza di segnale, ma può far sembrare più grave un guasto di rete.

Su Pixel e Android quasi stock, apri le impostazioni della SIM e cerca `Nomi punti di accesso`. Su Samsung il percorso è normalmente `Impostazioni > Connessioni > Reti mobili > Profili`.

Usa l'opzione per ripristinare i valori predefiniti se l'elenco APN è vuoto o chiaramente errato. Per operatori virtuali e gestori più piccoli, usa i valori pubblicati nella pagina di assistenza dell'operatore. Copiare impostazioni casuali da un forum è un buon modo per dover risolvere il problema due volte.

## Ripristina le impostazioni di rete

Se la SIM è attiva e le impostazioni sembrano corrette, ripristina la rete. Sui telefoni recenti le opzioni possono essere separate: il ripristino della rete mobile non elimina foto, app, messaggi o file, mentre il ripristino di Wi-Fi e Bluetooth cancella le reti Wi-Fi salvate e gli abbinamenti Bluetooth. Su altri modelli, un ripristino di rete combinato può eliminare anche le configurazioni VPN.

Su Pixel recenti, apri `Impostazioni > Sistema > Opzioni di ripristino`. Qui puoi trovare `Ripristina impostazioni della rete mobile` e, separatamente, `Reimposta Bluetooth e Wi-Fi`.

Samsung: `Impostazioni > Gestione generale > Ripristina > Ripristino impostazioni di rete`.

Su Xiaomi e POCO, cerca “ripristina rete” nelle Impostazioni, perché il percorso cambia tra versioni MIUI e HyperOS.

Dopo il ripristino, riavvia il telefono e attendi circa un minuto perché si registri sulla rete dell'operatore.

## Prova la SIM in un altro telefono

È il modo più semplice per smettere di andare a tentativi.

Inserisci la SIM in un altro telefono sbloccato e compatibile con le bande dell'operatore. Se lì funziona, SIM e account sono probabilmente a posto e il problema riguarda il telefono originale. Se anche l'altro dispositivo non ha servizio, la causa è probabilmente la SIM, l'account o il provisioning dell'operatore.

Se puoi, prova anche una SIM sicuramente funzionante nel tuo telefono. Se ottiene segnale, l'hardware del dispositivo è probabilmente integro.

Con una eSIM il test è più complicato, perché il trasferimento può richiedere una nuova attivazione. In questo caso l'assistenza dell'operatore può controllare se il profilo è ancora attivo e associato al dispositivo corretto.

## Controlla l'IMEI dei telefoni usati

Se hai acquistato il telefono usato, controlla l'IMEI. Digita `*#06#` per visualizzarlo.

Un dispositivo può perdere il normale accesso alla rete se l'IMEI è stato inserito in una lista di blocco dopo una denuncia di smarrimento o furto, oppure se il telefono è ancora vincolato a un operatore diverso. Quando possibile, usa gli strumenti o l'assistenza dell'operatore. I servizi IMEI di terze parti possono offrire un'indicazione, ma è l'operatore a decidere l'accesso alla propria rete.

## Posizione e materiali dell'edificio contano

La potenza del segnale cambia rapidamente. Un telefono può mostrare tutte le tacche all'aperto e nessun servizio in un seminterrato, in ascensore, in un magazzino con tetto metallico, in un parcheggio sotterraneo o in un appartamento di cemento armato.

Avvicinati a una finestra o esci all'aperto. Se il servizio torna, il telefono sta facendo il suo lavoro. È l'edificio ad attenuare il segnale.

Anche alcune cover possono peggiorare la ricezione se contengono placche metalliche, magneti o accessori posizionati male. Rimuovila per un minuto se il problema è iniziato dopo aver aggiunto un supporto, una cover a portafoglio o un anello magnetico.

Le chiamate Wi-Fi sono la soluzione normale quando il segnale cellulare all'interno è debole ma la connessione Wi-Fi è buona, purché l'operatore le supporti.

## I valori del segnale sono più utili delle tacche

Le tacche sono approssimative. I dBm sono più utili.

Su molti telefoni Android puoi trovare la potenza del segnale nella schermata delle informazioni sulla SIM, spesso sotto `Impostazioni > Informazioni sullo smartphone > Stato SIM`. Potresti vedere un valore come `-85 dBm` o `-110 dBm`. Più il numero è vicino allo zero, più il segnale è forte.

Come riferimento generale, un valore compreso tra circa `-50 e -90 dBm` è utilizzabile, sotto `-100 dBm` il segnale è debole e attorno a `-120 dBm` è quasi inutilizzabile. L'esperienza reale dipende dal tipo di rete, dalla congestione e dalla configurazione dell'operatore, quindi non usare il numero come test perfetto con esito positivo o negativo.

Il codice `*#*#4636#*#*` apre un menu di test su alcuni telefoni Android, ma molti produttori e operatori lo disattivano. Se non succede nulla, il telefono non è guasto.

runcheck può mostrare la potenza del segnale e i dettagli della rete nel tempo, un dato più utile che fissare le tacche per dieci secondi. I problemi di segnale dipendono spesso da posizione, orario e passaggi tra LTE e 5G.

## Quando è probabile un guasto hardware

L'hardware diventa la causa più probabile quando tutte queste condizioni sono vere:

- La tua SIM funziona in un altro telefono.
- Una SIM sicuramente funzionante non ottiene servizio nel tuo telefono.
- Hai ripristinato le impostazioni di rete.
- L'account è attivo.
- Altre persone con lo stesso operatore hanno servizio nelle vicinanze.
- Il telefono continua a non avere servizio in luoghi diversi.

Le cause hardware comuni includono un'antenna danneggiata, un lettore SIM difettoso, corrosione vicino al carrello SIM o un componente RF in avaria. Cadute e umidità sono i sospetti principali.

Cerca ammaccature vicino alle linee dell'antenna, un carrello SIM che non resta a filo, indicatori di contatto con liquidi, corrosione o segni di un urto recente. Se il telefono è coperto da garanzia, contatta il venditore, il produttore o l'operatore in base al tipo di assistenza prevista. Fuori garanzia, confronta il preventivo con il valore attuale del telefono prima di autorizzare la riparazione.

## Conviene comprare un ripetitore di segnale?

Solo per una posizione fissa e soltanto se all'esterno esiste già un segnale utilizzabile. Un ripetitore amplifica il segnale presente, non crea una rete dell'operatore dal nulla.

In Italia non acquistare e installare un amplificatore cellulare casuale trovato su un marketplace. Le indicazioni pubblicate dal Ministero precisano che i ripetitori che operano sulle bande della telefonia mobile possono interferire con la rete pubblica e devono essere gestiti nell'ambito autorizzato dagli operatori. Prima di installare qualsiasi soluzione, contatta l'operatore e usa soltanto apparecchiature e procedure da lui approvate.
