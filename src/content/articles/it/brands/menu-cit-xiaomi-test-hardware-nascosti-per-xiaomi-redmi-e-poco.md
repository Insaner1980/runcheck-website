---
title: "Menu CIT Xiaomi: test hardware nascosti per Xiaomi, Redmi e POCO"
description: "Il menu CIT di Xiaomi permette di avviare test hardware integrati sui telefoni Xiaomi. Scopri i codici da tastierino, il percorso nelle Impostazioni, i test più utili e ciò che CIT non può diagnosticare."
listSummary: "Il menu CIT di Xiaomi permette di avviare test hardware integrati sui telefoni Xiaomi."
hub: "brands"
sourceNumber: 159
order: 7
tags: ["hardware","test","diagnostica","android","guida"]
locale: "it"
draft: false
---
CIT è il controllo hardware integrato più rapido sulla maggior parte dei telefoni Xiaomi, compresi i modelli Redmi e POCO con firmware ufficiale MIUI o HyperOS. Non è bello da vedere. Spiega poco. Ma quando devi capire se touch screen, altoparlante, microfono, sensore o fotocamera rispondono davvero, ti porta al test più velocemente di molte app di diagnostica del Play Store.

Nelle pagine di supporto, Xiaomi lo chiama di solito rilevamento hardware o modalità CIT. Compare soprattutto nelle procedure per problemi specifici, come un touch che registra tocchi fantasma o un telefono che continua a riavviarsi. Il menu serve a controllare il dispositivo in quel momento, non a seguirne lo stato nel tempo.

È tutto qui.

## Aprire prima CIT

Il percorso più rapido è il codice da tastierino. Apri l'app Telefono e inserisci `*#*#6484#*#*`. Su alcune build Xiaomi, anche `*#*#64663#*#*` apre lo stesso menu di rilevamento hardware. Non devi premere il tasto di chiamata.

Se il codice non reagisce, prova dalle Impostazioni. Vai in **Impostazioni > Informazioni sul telefono**, apri la pagina con le informazioni dettagliate o tutte le specifiche se presente, poi tocca più volte **Versione kernel**. Su molte build MIUI e HyperOS compare un conto alla rovescia e si apre CIT. Le pagine di supporto Xiaomi indicano spesso quattro tocchi, ma il comportamento può cambiare tra modelli e versioni.

Il percorso esatto varia perché Xiaomi ha modificato l'organizzazione delle Impostazioni tra MIUI, HyperOS, build regionali e tablet. Le vecchie versioni di MIUI possono mostrare **Versione kernel** direttamente sotto Informazioni sul telefono. Le build HyperOS più recenti tendono a inserirla nella pagina delle specifiche dettagliate.

Se nessuno dei due metodi apre CIT, controlla tre cose prima di concludere che il telefono non lo supporti: stai usando firmware Xiaomi ufficiale, l'app Telefono preinstallata e non una ROM personalizzata come LineageOS. Le ROM personalizzate rimuovono spesso i componenti diagnostici proprietari di Xiaomi.

## Cosa può controllare davvero CIT

CIT accede all'hardware abbastanza direttamente da essere utile, ma restituisce comunque risultati semplici, come superato o non superato. Può dirti che un microfono non ha registrato oppure che una zona del touch non ha risposto. Non può stabilire se la causa sia acqua, un cavo flat allentato, uno schermo sostitutivo difettoso o un bug del firmware.

Il menu cambia in base al modello. Un Redmi Note senza NFC non mostrerà lo stesso elenco di uno Xiaomi di fascia alta con blaster IR, lettore di impronte sotto il display, barometro e più moduli fotografici. È normale.

Tra i controlli CIT più comuni ci sono display, pannello touch, ricevitore, altoparlante, microfoni, motore della vibrazione, fotocamere, sensore di impronte, sensore di prossimità, sensore di luce ambientale, accelerometro, giroscopio, bussola, lettore SIM, Wi-Fi, Bluetooth, NFC, blaster IR e stato di ricarica.

## Il test del touch è il primo da avviare

Se stai comprando uno Xiaomi usato, parti dal test del touch. Può scoprire problemi che sfuggono a qualche scorrimento veloce nella schermata Home.

Di solito il test mostra una griglia o un'area di disegno. Trascina il dito sulle sezioni richieste e cerca spazi vuoti, linee interrotte o aree che non diventano verdi. Un telefono usato può sembrare perfetto e avere comunque una striscia non funzionante vicino al bordo del digitalizzatore. Meglio scoprirlo prima di pagare, non dopo.

Le pagine di supporto Xiaomi consigliano CIT quando il pannello registra tocchi errati, risponde lentamente o non reagisce bene. Ricordano anche le cause banali che spesso vengono ignorate: vetro crepato, acqua, pellicole di terze parti, dita sudate, caricabatterie instabili o una singola app difettosa. Il test aiuta, ma non fa magie.

## Sensori, audio, fotocamere e connettività

I test audio sono semplici. Quello dell'altoparlante riproduce un suono dal diffusore, quello del ricevitore usa l'auricolare e quello del microfono registra e riproduce una breve clip. Ascolta se ci sono crepitii, volume basso, rumore statico o silenzio. Un microfono inferiore può guastarsi anche se le chiamate sembrano normali, perché il telefono può cambiare microfono in base all'app.

I test dei sensori mostrano in genere valori in tempo reale oppure chiedono una piccola azione. Copri il sensore di prossimità vicino all'auricolare. Ruota il telefono per provare il giroscopio. Muovilo per accelerometro e bussola. Punta il sensore di luminosità verso una lampada e poi allontanalo. Se i valori non cambiano mai, c'è un problema.

I test delle fotocamere aprono i moduli anteriori e posteriori. Confermano che la fotocamera si avvii, metta a fuoco e scatti. Non dimostrano la qualità dell'immagine. Una lente graffiata, una stabilizzazione difettosa, polvere sotto il vetro o un'app fotocamera di terze parti malfunzionante possono continuare a creare problemi fuori dal test.

I controlli di connettività cercano reti Wi-Fi o dispositivi Bluetooth. Basta per confermare che la radio rilevi ciò che la circonda. Non diagnostica il router, l'operatore, la VPN o un appartamento pieno di reti congestionate a 2,4 GHz.

## Batteria, ricarica e informazioni sulla versione

CIT può mostrare dati di base sulla batteria e sulla ricarica, come livello, tensione, temperatura e rilevamento del caricabatterie. È utile se il telefono non si ricarica oppure funziona con un solo cavo.

Non confonderlo con una vera cronologia dello stato della batteria. CIT non mostra un grafico dell'usura nel tempo, una sequenza dei cicli di ricarica o un confronto tra caricabatterie. È un'istantanea.

Molte build Xiaomi includono anche un'area con informazioni hardware. Le pagine di supporto Xiaomi citano `*#*#6484#*#*` per aprire il rilevamento hardware e controllare voci come IMEI, numero build, versione baseband, versione kernel, ID CPU e versione hardware. È comodo quando vuoi confrontare la build mostrata nelle Impostazioni con le informazioni di basso livello del dispositivo.

## Android 17, HyperOS e compatibilità

Android 17 è stato distribuito prima sui Pixel supportati. Google elenca Xiaomi tra i partner del programma Android 17 Beta, ma questo non significa che ogni Xiaomi, Redmi o POCO utilizzi già la versione stabile di Android 17.

Sui telefoni Xiaomi, qui conta soprattutto il livello firmware: MIUI o HyperOS. CIT è una funzione Xiaomi per il rilevamento hardware, non una funzione generica di Android 17. Un aggiornamento HyperOS può cambiare il percorso, bloccare un codice, rinominare un test o correggere un problema diagnostico senza che Android sia la causa principale.

In pratica, non preoccuparti se una guida scritta per MIUI 14 non corrisponde esattamente al tuo telefono HyperOS. Prova entrambi i metodi di accesso.

## Quando CIT è utile

CIT è adatto ai controlli rapidi prima di comprare un telefono usato, dopo una caduta, dopo il contatto con acqua oppure dopo la sostituzione di schermo o batteria. Avvia il test automatico completo se hai tempo. Se conosci già l'area problematica, prova solo i componenti interessati.

Scatta una schermata del risultato se ti serve una prova. Non fare affidamento su CIT per conservare un rapporto permanente da esportare in seguito.

È meno utile per telefoni lenti, arresti casuali delle app, memoria quasi piena, consumo della batteria distribuito su più giorni o thermal throttling durante il gioco, cioè la riduzione delle prestazioni causata dal calore. Questi problemi richiedono una cronologia, non un test hardware di un minuto.

## Domande comuni

### CIT può danneggiare il telefono?

No. I test normali leggono i sensori, riproducono audio, attivano la vibrazione, aprono le fotocamere e controllano la risposta dei componenti. Non cancellano dati e non installano firmware. Esci con Indietro oppure riavvia il telefono se il menu rimane bloccato.

### Perché alcune etichette sono in cinese?

Alcuni modelli Xiaomi e Redmi mostrano ancora etichette CIT non tradotte, soprattutto con firmware destinato alla Cina o vecchie build MIUI. I test funzionano in genere allo stesso modo. La lingua è fastidiosa, non pericolosa.

### CIT funziona sui telefoni POCO e sui tablet Xiaomi?

Di solito sì, se il dispositivo usa firmware Xiaomi ufficiale. I test disponibili dipendono dall'hardware. Un tablet solo Wi-Fi non mostra gli stessi controlli cellulari di un Redmi, e un POCO senza blaster IR non offre il test a infrarossi.

---
