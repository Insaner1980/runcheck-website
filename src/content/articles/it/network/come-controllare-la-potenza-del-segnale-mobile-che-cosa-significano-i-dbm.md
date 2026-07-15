---
title: "Come controllare la potenza del segnale mobile: che cosa significano i dBm"
description: "Le tacche del segnale sono utili per un'occhiata veloce, ma non sono una misura. Un telefono può mostrarne quattro dove un altro ne mostra due, anche se entrambi usano lo stesso operatore nella stessa stanza. Per conoscere il valore reale, cerca la potenza del segnale in dBm."
listSummary: "Le tacche del segnale sono utili per un'occhiata veloce, ma non sono una misura."
hub: "network"
sourceNumber: 93
order: 4
tags: ["rete","connettivita","android","risoluzione-dei-problemi","guida"]
locale: "it"
draft: false
---
Sembra più complicato di quanto sia. I dBm indicano semplicemente il livello di potenza che il telefono riceve dalla rete mobile. Più il numero è vicino a zero, più il segnale è forte. Un valore di -75 dBm è migliore di -95 dBm. Tutto qui.

## Come leggere rapidamente i dBm

La potenza del segnale cellulare appare come numero negativo perché il telefono misura quantità molto piccole di energia radio. Nell'uso normale vedrai spesso valori compresi tra circa -50 dBm e -120 dBm. Vicino a un'antenna potresti arrivare intorno a -50 dBm. Nel cuore di un edificio in cemento, in un seminterrato o ai margini della copertura puoi scendere verso -110 dBm o peggio.

La scala è logaritmica. Ogni 3 dBm corrispondono approssimativamente a un raddoppio o a un dimezzamento della potenza ricevuta. Quindi -80 dBm non è solo un po' meglio di -86 dBm. In termini di potenza è circa quattro volte più forte. Davvero.

Per LTE e per la maggior parte delle connessioni 5G sub-6 GHz, queste fasce sono una buona regola pratica:

| Valore | Che cosa significa in genere |
|---|---|
| Da -50 a -70 dBm | Eccellente. Chiamate e dati dovrebbero essere stabili, se la cella non è sovraccarica. |
| Da -70 a -85 dBm | Buono. È un valore normale all'aperto o vicino a una finestra. |
| Da -85 a -100 dBm | Utilizzabile, ma non ideale. La navigazione funziona, lo streaming può interrompersi e l'upload spesso peggiora per primo. |
| Da -100 a -110 dBm | Debole. Le chiamate possono cadere, i messaggi arrivare in ritardo e il modem consumare più energia per mantenere il collegamento. |
| Sotto -110 dBm | Marginale. Sono probabili timeout, momenti senza servizio o il passaggio forzato a un'altra tecnologia di rete. |

Non sono soglie universali di promozione o bocciatura. Un telefono a -95 dBm può funzionare bene se il segnale è pulito e la cella ha capacità disponibile. Un altro a -75 dBm può essere lentissimo se la rete è congestionata o ci sono molte interferenze.

## Come controllare la potenza del segnale su Android

Il menu preciso cambia in base a produttore, versione di Android e configurazione dell'operatore. Il metodo più rapido è aprire Impostazioni e cercare "Stato SIM" o "Potenza del segnale".

Su Pixel e molti telefoni con un'interfaccia vicina ad Android standard, compresi i Pixel supportati con Android 17, prova ad aprire **Impostazioni > Informazioni sul telefono** e cerca le informazioni sullo stato della SIM. Su alcune versioni i dettagli della SIM compaiono anche in **Impostazioni > Rete e Internet > SIM**. Cerca **Potenza del segnale**. In genere vedrai un valore in dBm e uno in ASU.

Sui Samsung Galaxy, controlla **Impostazioni > Informazioni sul telefono > Informazioni sullo stato > Stato scheda SIM**. Alcune versioni di One UI abbreviano il nome del menu. Se non lo trovi, usa la ricerca nelle Impostazioni.

C'è una particolarità: Android mostra normalmente il valore della tecnologia di rete che il telefono sta usando in quel momento. Se è collegato a LTE, il numero riguarda LTE. Se usa 5G NR, il valore può derivare dalle misure del segnale di riferimento 5G, a seconda di ciò che modem e operatore espongono. LTE e 5G non vengono sempre mostrati affiancati.

## Menu di test nascosti

Molti telefoni Android rispondono ancora a questo codice nel tastierino:

`*#*#4636#*#*`

Apri l'app Telefono, inserisci il codice e potrebbe comparire un menu di test. Tocca le informazioni sul telefono per vedere tipo di rete, potenza del segnale, stato della connessione dati e altri dettagli radio. Non cambiare il tipo di rete preferito da questo menu se non sai esattamente che cosa stai facendo. È una schermata diagnostica, non un normale pannello delle impostazioni.

Samsung spesso blocca il codice generico. Su molti Galaxy, `*#0011#` apre invece Service Mode. Può mostrare dettagli sulla cella in uso, informazioni sulla banda e valori del segnale. I modelli degli operatori possono disattivare entrambi i codici, quindi non considerarli garantiti.

## App che semplificano la lettura

App come Network Cell Info Lite, CellularZ e Signal Strength mostrano il valore in dBm nella schermata principale e lo aggiornano continuamente. Sono utili quando cammini per casa, in ufficio o in un parcheggio cercando il punto in cui il telefono riceve davvero meglio.

Una buona app per il segnale dovrebbe mostrare più di un numero. RSRP indica la potenza, mentre RSRQ e SINR aiutano a capire se il segnale è utilizzabile o sommerso dal rumore.

runcheck mostra la qualità della rete insieme ad altri dati sullo stato del dispositivo e conserva una cronologia. È utile perché un singolo valore in dBm è solo un'istantanea. La cronologia permette di capire se il segnale è sempre debole in una stanza, peggiora solo nelle ore di punta o è diventato improvvisamente peggiore dopo un aggiornamento.

## RSRP, RSSI, RSRQ e SINR senza complicazioni

Le schermate diagnostiche mostrano diverse sigle molto simili. Non indicano tutte la stessa cosa.

RSSI significa Received Signal Strength Indicator. Era usato soprattutto con le vecchie connessioni 2G e 3G e compare anche negli strumenti Wi-Fi. Misura tutta la potenza ricevuta, includendo segnale utile, rumore e interferenze. Per questo è meno preciso come indicatore per la diagnosi della rete cellulare.

RSRP significa Reference Signal Received Power. Per LTE e 5G è di solito il primo valore di potenza da controllare. Misura il segnale di riferimento della cella servente, non tutta l'energia radio presente nel canale.

RSRQ significa Reference Signal Received Quality. Combina potenza e interferenze in un valore di qualità. Un numero meno negativo è migliore. In LTE, circa -3 dB è eccellente, mentre valori vicini a -15 dB o -20 dB indicano una qualità scarsa.

SINR significa Signal to Interference plus Noise Ratio. Più è alto, meglio è. Oltre 20 dB è eccellente, da 10 a 20 dB è buono e sotto 0 dB significa che rumore e interferenze sono più forti del segnale utile.

In pratica: controlla prima RSRP. Se RSRP è buono ma i dati restano lenti, guarda RSRQ e SINR. Un segnale forte ma di cattiva qualità è comune nelle città affollate, nei condomini, negli stadi e nei luoghi in cui si sovrappongono molte celle.

## Perché il massimo delle tacche può essere comunque lento

Le tacche descrivono soprattutto il livello del segnale. Non dicono quanta capacità è rimasta alla cella, quante persone la stanno usando, se il piano riceve una priorità inferiore in condizioni di congestione o se il telefono è collegato a uno strato 5G a banda bassa che si comporta più come un buon LTE che come il 5G veloce delle pubblicità.

Per questo due test nello stesso punto possono sembrare contraddittori. A un concerto il telefono può mostrare -68 dBm e scaricare lentamente perché centinaia o migliaia di dispositivi condividono la stessa cella. Alle 2:00 di notte, dallo stesso posto, lo stesso telefono può essere veloce.

## Perché i valori del segnale cambiano continuamente

La potenza cambia anche quando resti fermo. Le onde radio rimbalzano su edifici, automobili, pareti, persone e terreno. Alcune riflessioni aiutano. Altre annullano una parte del segnale. Basta spostare il telefono di pochi centimetri perché il valore cambi.

Negli interni le oscillazioni aumentano. Una finestra, il vano dell'ascensore, una parete in cemento, un tetto metallico o un vetro basso emissivo possono cambiare il valore di 10 dB o più. Seminterrati e stanze interne sono spesso i punti peggiori, perché il segnale deve attraversare più materiali prima di raggiungere il telefono.

Anche l'ora può contare, ma non sempre perché il segnale è cambiato. Nelle ore di punta la cella può essere sovraccarica, quindi la connessione sembra peggiore anche con un valore in dBm simile.

## Qual è un buon valore per il 5G?

Per il 5G sub-6 GHz, un RSRP intorno a -80 dBm è buono, mentre vicino a -100 dBm il segnale inizia a essere debole. Con mmWave, la copertura stabile dipende molto di più dalla posizione. Puoi avere una connessione mmWave velocissima all'aperto e con linea di vista libera, poi perderla girando l'angolo o entrando in un edificio.

Non giudicare il 5G solo dall'icona. Valuta potenza e qualità del segnale, velocità, latenza e frequenza dei passaggi a LTE.

## Risposte rapide

Si può migliorare il segnale senza un ripetitore? A volte. Avvicinati a una finestra, sali a un piano superiore, esci all'aperto o prova un altro lato dell'edificio. Se il 5G è debole negli interni, LTE può essere la scelta più pratica perché le bande LTE a frequenza più bassa attraversano spesso meglio le pareti.

I dBm della rete cellulare sono uguali ai dBm del Wi-Fi? L'unità è la stessa, ma le fasce utili sono diverse. Nel Wi-Fi, -50 dBm è un segnale forte e intorno a -70 dBm la stabilità può iniziare a peggiorare. Le reti mobili sono progettate per distanze maggiori, quindi restano utilizzabili con valori molto più bassi.

È meglio fidarsi delle tacche o dei dBm? Usa le tacche per un'occhiata. Usa i dBm quando devi trovare un problema.
