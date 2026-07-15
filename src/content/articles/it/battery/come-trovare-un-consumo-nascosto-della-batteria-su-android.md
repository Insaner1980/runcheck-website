---
title: "Come trovare un consumo nascosto della batteria su Android"
description: "Perché la schermata della batteria accusa Sistema Android o Google Play services quando il vero problema è probabilmente un'app, una sincronizzazione bloccata, la posizione o il modem? Perché queste voci di sistema spesso lavorano per conto di altre funzioni. Fastidioso, sì. Inutile, no."
listSummary: "Perché la schermata della batteria accusa Sistema Android o Google Play services quando il vero problema è…"
hub: "battery"
sourceNumber: 25
order: 15
subgroup: "Consumo della batteria"
tags: ["batteria","consumo","risoluzione-dei-problemi","android","prestazioni"]
locale: "it"
draft: false
---
Trovare un consumo nascosto significa soprattutto capire cosa mantiene attivo il telefono quando lo schermo è spento.

## Parti dalla schermata più banale

Apri prima **Impostazioni > Batteria > Utilizzo batteria**. Su Pixel, passa dalla visualizzazione per app a quella per sistema se l'opzione è disponibile. Su Samsung, apri **Impostazioni > Batteria**, quindi il grafico dell'utilizzo o **Visualizza dettagli**, a seconda della versione di One UI. Xiaomi, OnePlus, Motorola e gli altri produttori usano diciture diverse, ma tutti mostrano un elenco dell'uso per app.

Cerca tre schemi:

1. Un'app con molto uso in background e poco uso in primo piano.
2. Una voce di sistema che resta alta per diversi cicli di ricarica.
3. Un grafico che scende durante un periodo a schermo spento che avrebbe dovuto essere tranquillo.

Un solo risultato anomalo dopo un lungo backup di Google Foto o un aggiornamento del Play Store non basta. Tre risultati simili di fila formano uno schema.

## Controlla se il telefono sta davvero dormendo

La modalità Doze di Android riduce l'attività in background quando il telefono è scollegato, inattivo e fermo. Rimanda attività e sincronizzazioni, limita l'accesso alla rete e raggruppa il lavoro in finestre di manutenzione. Le app possono comunque avere eccezioni limitate e le notifiche ad alta priorità possono riattivare brevemente il dispositivo, ma un telefono a riposo dovrebbe trascorrere lunghi periodi facendo molto poco.

Se il grafico della batteria mostra un calo costante durante la notte, o il telefono è caldo sul comodino, qualcosa sta interrompendo quello stato di quiete.

Su alcune versioni di Android, il grafico mostra barre temporali chiamate **Attivo** o simili. Se **Attivo** resta acceso a lungo mentre **Schermo acceso** no, hai trovato un indizio. Molte versioni di One UI mostrano barre di stato analoghe sotto il grafico.

Non vedi nessuna barra? Passa al livello successivo.

## Usa la modalità provvisoria prima di accusare la batteria

La modalità provvisoria è sottovalutata. Disattiva temporaneamente le app scaricate e lascia in funzione il sistema di base. Se il consumo notturno quasi scompare, probabilmente il problema non è l'hardware.

Il metodo di accesso cambia in base al telefono, ma su molti dispositivi Android puoi tenere premuto il pulsante di accensione, poi tenere premuto **Spegni** finché compare l'opzione per la modalità provvisoria. Google la documenta come strumento per individuare app problematiche e Samsung come modalità diagnostica che disattiva la maggior parte delle app di terze parti.

Se il consumo è grave, fai una prova di una notte in modalità provvisoria. Non restarci per una settimana. Se la situazione migliora, rimuovi o limita prima le app installate o aggiornate di recente.

## Le Opzioni sviluppatore mostrano cosa è attivo in quel momento

Attiva le Opzioni sviluppatore aprendo **Impostazioni > Informazioni sul telefono** e toccando sette volte **Numero build**. Poi vai in **Impostazioni > Sistema > Opzioni sviluppatore** o nel percorso equivalente del tuo telefono.

**Servizi in esecuzione** offre un'istantanea dei servizi che usano memoria e, in alcuni casi, CPU. Non è un rapporto completo sulla batteria, ma può far emergere problemi evidenti. Se un'app per gli acquisti, uno sfondo animato, un'app di pulizia o un vecchio fitness tracker è in esecuzione anche se non l'hai aperto, vale la pena controllare.

Potresti trovare anche **App in standby** o **App inattive**. Queste schermate mostrano come Android classifica l'attività delle app. Non sono presenti su tutti i telefoni e alcuni produttori le nascondono. È uno dei difetti della diagnostica Android: gli strumenti esistono, ma metà del lavoro consiste nel capire dove il produttore li ha messi.

## Usa ADB quando ti servono prove

ADB è il metodo più pulito, senza root, per esaminare wake lock e cronologia della batteria. Richiede più lavoro, ma riduce le supposizioni.

Serve un computer con platform-tools installato e il debug USB attivo sul telefono. Poi azzera le statistiche correnti:

```bash
adb shell dumpsys batterystats --reset
```

Usa il telefono normalmente oppure lascialo fermo durante la notte per registrare il consumo in standby. Poi esporta il rapporto:

```bash
adb shell dumpsys batterystats > batterystats.txt
```

Il file è grande. Cerca prima queste sezioni:

- **Estimated power use** per le stime di consumo in mAh per app.
- **Wake locks** per le app che hanno mantenuto attiva la CPU.
- **Alarm Stats** o le sezioni relative agli allarmi per le app che riattivano spesso il dispositivo.
- **Mobile radio** e **Wi-Fi** se il consumo sembra legato alla rete.

La documentazione ufficiale di Google su Batterystats e Battery Historian descrive il flusso: Batterystats raccoglie i dati della batteria sul dispositivo, mentre Battery Historian li trasforma in una sequenza temporale HTML. Google segnala però che Battery Historian non è più mantenuto attivamente e, quando possibile, consiglia strumenti più recenti come system tracing, Macrobenchmark power metric o Power Profiler. Resta comunque utile per leggere insieme wake lock, attività radio, ricarica, stato dello schermo e livello della batteria.

Se vuoi usare un solo comando, usa questo:

```bash
adb shell dumpsys batterystats
```

Non indicherà magicamente l'app colpevole in italiano semplice. Ti darà prove.

## Le solite cause nascoste

**Google Play services** di solito non è il colpevole da solo. Gestisce notifiche push, API di posizione, sincronizzazione degli account, servizi nelle vicinanze, aggiornamenti delle app e parti della sicurezza del dispositivo. Se mostra un consumo elevato, controlla errori di sincronizzazione dell'account Google, permessi di posizione, backup di Google Foto ed eventuali aggiornamenti in attesa per Play services.

Non forzare l'arresto e non provare a disinstallare Google Play services. L'assistenza Pixel chiarisce che è integrato in Android. Svuota la cache, riavvia, aggiorna le app e correggi il problema sottostante relativo all'account o alla posizione.

**Una sincronizzazione dell'account non riuscita** è noiosa ma comune. Apri **Impostazioni > Password e account** oppure **Impostazioni > Account** e cerca icone di avviso, vecchi account di lavoro, password cambiate o servizi che non completano mai la sincronizzazione. Rimuovi l'account se non lo usi. Se ti serve, aggiungilo di nuovo.

**Un segnale debole** può sembrare consumo di sistema. Se **Standby rete mobile** è in alto, prova una notte in modalità aereo. Samsung indica una connessione debole o instabile tra le cause di consumo più rapido e, nelle case reali, a volte è tutta la spiegazione.

**Widget e sfondi animati** si dimenticano facilmente, perché stanno nella schermata Home e non nel cassetto delle app. Un widget meteo che aggiorna la posizione ogni pochi minuti è diverso da un orologio statico. Rimuovi per un giorno i widget aggiunti di recente e confronta il risultato.

Anche gli **accessori Bluetooth** possono creare cicli di connessione. Orologi, auricolari, sistemi dell'auto e tracker a volte provano a riconnettersi di continuo. Se il consumo è iniziato dopo aver abbinato un nuovo dispositivo, fai una prova notturna con Bluetooth spento.

## Quando sospettare l'hardware

Il consumo software di solito lascia indizi: un'app, un wake lock, attività radio, calore durante l'uso della CPU o un netto miglioramento in modalità provvisoria. Il consumo hardware è più ostinato.

Alcuni segnali puntano in quella direzione:

- Il telefono perde molta carica durante la notte anche in modalità aereo.
- La modalità provvisoria non migliora la situazione.
- Il telefono è caldo mentre non viene usato e non è in carica.
- Lo stato della batteria è Ridotto oppure il telefono si spegne a percentuali casuali.

Su Pixel 8a e modelli successivi, controlla **Impostazioni > Batteria > Stato della batteria**. Google indica **Ridotta** quando la capacità residua è sotto l'80 %. Su Samsung, usa **Samsung Members > Supporto > Diagnostica dello smartphone > Stato batteria**.

Un'app di terze parti può stimare la capacità, ma non considerare il numero una misura da laboratorio. I dati sullo stato della batteria sono poco lineari. Temperatura, cronologia di ricarica, calibrazione e metodo di misurazione influenzano la stima.

## Cosa non fare

Non installare un'app di risparmio energetico che promette di risolvere tutto. Molte duplicano i controlli già presenti in Android, aggiungono pubblicità e avviano propri servizi in background.

Non continuare a svuotare la schermata Recenti. Android la gestisce automaticamente. Se una singola app si comporta male, usa Forza interruzione da **Impostazioni > App**, poi aggiornala, limitane l'attività o rimuovila.

Non iniziare dal ripristino dei dati di fabbrica. Può correggere uno stato delle app danneggiato e impostazioni obsolete, ma richiede tempo e non ti dice cosa causava il consumo. Usalo solo dopo che la schermata della batteria, la modalità provvisoria, il ripristino della rete e i limiti alle app non hanno funzionato.

runcheck può aiutare quando lo schema attraversa più categorie. Consumo della batteria più calore indica una direzione. Consumo più segnale debole ne indica un'altra. Consumo insieme a memoria quasi piena o uso intenso delle app porta altrove. La soluzione è migliore quando la diagnosi non procede alla cieca.
