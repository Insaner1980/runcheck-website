---
title: "Come testare la qualità della fotocamera del telefono"
description: "Metodi pratici per controllare la qualità della fotocamera di uno smartphone Android, inclusi autofocus, cambio obiettivo, difetti del sensore, stabilizzazione video e diagnostica."
listSummary: "Metodi pratici per controllare la qualità della fotocamera di uno smartphone Android."
hub: "hardware"
sourceNumber: 110
order: 7
tags: ["hardware","test","diagnostica","android","guida"]
locale: "it"
draft: false
---
---

Testare una fotocamera diventa più semplice quando smetti di concentrarti sui megapixel. Un sensore da 50 MP può comunque produrre foto scadenti se il vetro è sporco, l'autofocus è guasto o il modulo della fotocamera si è spostato leggermente dopo un urto.

L'obiettivo è semplice: verificare che tutte le fotocamere del telefono si comportino come dovrebbero.

## Parti da un obiettivo pulito e da un soggetto semplice

Pulisci il vetro degli obiettivi con un panno in microfibra pulito. Fallo prima di ogni altra prova. Un'impronta può sembrare un HDR mal riuscito, una messa a fuoco imprecisa, un velo sull'obiettivo o scarse prestazioni in poca luce.

Apri l'app Fotocamera predefinita e inquadra qualcosa con dettagli fini. Vanno bene un testo stampato, una parete ruvida, una tastiera o i rami di un albero contro il cielo. Tocca il soggetto per mettere a fuoco. L'immagine dovrebbe diventare nitida rapidamente e rimanere stabile.

Se la fotocamera continua a cercare il fuoco avanti e indietro senza fermarsi, il meccanismo dell'autofocus può essere danneggiato. Succede spesso dopo una caduta, perché il piccolo motore voice coil che sposta le lenti è delicato. Se l'immagine non diventa mai nitida, qualunque punto tu tocchi, confronta il risultato con un altro obiettivo dello stesso telefono prima di dare la colpa al software.

Passa tra tutte le fotocamere disponibili: principale, ultragrandangolare, teleobiettivo, macro e anteriore. Se un solo obiettivo rimane sfocato mentre gli altri sono nitidi, il problema riguarda probabilmente quel modulo. Le cause possibili includono polvere sotto il vetro protettivo, vetro incrinato, umidità nella zona delle fotocamere o un modulo rimontato male dopo una riparazione.

## Cerca difetti che si ripetono

Fotografa una parete bianca uniforme o un foglio pulito con luce omogenea. I difetti risaltano meglio.

Un po' di oscuramento agli angoli è normale. Gli obiettivi dei telefoni sono piccoli e il software corregge spesso i bordi. Cerca invece una chiazza scura evidente, una macchia colorata o un alone che compare sempre nello stesso punto di ogni foto.

Poi scatta una foto in poca luce senza flash e ingrandiscila. Puntini luminosi colorati che rimangono nella stessa posizione in più scatti possono essere hot pixel o danni al sensore. Un singolo pixel anomalo non è motivo di allarme. Un gruppo di pixel è un'altra cosa.

Scatta anche una foto verso una finestra luminosa o una lampada, senza puntare direttamente il telefono verso il sole. Una dominante viola o verde sull'intera immagine può indicare un danno nell'area del filtro del sensore. I normali riflessi interni appaiono come strisce o sagome vicino alle fonti luminose. Non dovrebbero diventare improvvisamente molto peggiori dopo una caduta o una riparazione.

## Prova esposizione e colori

Scatta la stessa foto due volte: una alla luce del giorno e una in casa sotto una luce calda. Toni della pelle, pareti bianche e oggetti grigi sono buoni riferimenti, perché l'occhio nota subito quando sembrano sbagliati.

Gli smartphone applicano molta elaborazione, quindi non aspettarti colori perfettamente neutri. Pixel, Samsung, Xiaomi e OnePlus fanno scelte diverse. Il confronto utile è con lo stesso modello, non con un marchio che usa uno stile d'immagine differente.

Se hai bisogno di un riferimento, guarda online foto reali scattate con lo stesso modello. Non affidarti soltanto ai punteggi delle recensioni. Un confronto affiancato e ingrandito dice molto di più quando stai cercando di capire se la tua fotocamera ha un problema.

## Registra un breve video

Registra da 20 a 30 secondi alla risoluzione più alta che usi normalmente. Sposta lentamente l'inquadratura, cammina per qualche passo e parla durante la registrazione.

Riguarda il video e controlla quattro aspetti: messa a fuoco, stabilizzazione, fotogrammi saltati e sincronizzazione dell'audio. Un telefono con stabilizzazione ottica dovrebbe attenuare i piccoli movimenti della mano. Non trasforma una ripresa camminando in un video da gimbal, ma non dovrebbe nemmeno risultare violentemente instabile.

Se il video si blocca per un attimo, scatta o perde la sincronizzazione con l'audio, la causa può essere il calore, la velocità di scrittura della memoria, un bug dell'app Fotocamera o l'hardware. Riavvia il telefono, libera spazio e prova di nuovo. Se il difetto si ripete quando il dispositivo è fresco e c'è memoria disponibile, prendilo sul serio.

## Usa la diagnostica integrata

Sui Samsung Galaxy puoi testare le fotocamere con Samsung Members. Apri l'app, vai su Supporto > Diagnostica dello smartphone e scegli il test Fotocamera, se disponibile. I test presenti cambiano a seconda del modello, ma Samsung include la fotocamera tra gli elementi diagnosticabili sui dispositivi compatibili.

Il codice Samsung `*#0*#` apre anche i riquadri della fotocamera su molti Galaxy. Mega Cam prova la fotocamera posteriore e Front Cam quella anteriore. Queste prove verificano che i moduli si aprano e scattino, ma non giudicano la qualità dell'immagine al posto tuo.

I dispositivi Xiaomi, Redmi e POCO includono spesso test della fotocamera nel menu CIT, che puoi aprire con `*#*#6484#*#*`. Sui telefoni con più fotocamere posteriori, il menu può provarle separatamente.

I Pixel non hanno un menu equivalente a `*#0*#` di Samsung. Il codice Google `*#*#7287#*#*` apre Diagnostica Pixel per la riparazione sui dispositivi supportati connessi a internet. I test disponibili possono cambiare in base a modello, regione e versione software, e lo strumento diagnostico è in inglese.

Android 17 non ha reso universale la diagnostica della fotocamera. Dipende ancora dal produttore.

## Controlla Camera2 se mancano alcune funzioni

Se le app fotocamera di terze parti non riescono a usare esposizione manuale, RAW, video ad alta frequenza di fotogrammi o il teleobiettivo, installa un'app di ispezione Camera2, come Camera2 API Probe. Mostra ciò che ogni fotocamera dichiara ad Android: risoluzioni supportate, modalità autofocus, stabilizzazione e livello hardware.

I livelli hardware hanno un significato preciso. `LEGACY` indica una modalità di compatibilità con funzioni molto limitate. `LIMITED` offre il set di base di Camera2. `FULL` aggiunge controlli manuali più completi. `LEVEL_3` offre funzioni più avanzate, tra cui RAW e rielaborazione sui dispositivi che le espongono.

Open Camera è utile anche per separare l'elaborazione dell'app predefinita dal funzionamento dell'hardware. Se Open Camera mette a fuoco correttamente ma l'app di sistema no, svuota la cache dell'app Fotocamera e controlla gli aggiornamenti software prima di concludere che il modulo sia guasto.

Questo test non può dirti se l'obiettivo è graffiato. Ti mostra quali funzioni della fotocamera Android riesce a rilevare e rendere disponibili.

## Quando è probabilmente un problema hardware

Un'anteprima nera da una sola fotocamera, mentre il resto dell'app si apre, indica spesso un modulo guasto o un connettore allentato. Se l'app Fotocamera non si apre affatto, la causa può essere software, quindi svuota la cache e riavvia prima di pensare al peggio.

Messa a fuoco sempre sfocata, macchie che si ripetono, gruppi di pixel difettosi, dominanti forti e un obiettivo che si comporta diversamente da tutti gli altri sono segnali hardware. Gli aggiornamenti software possono cambiare colori e nitidezza. Non possono eliminare l'umidità dietro il vetro o riparare un motore autofocus danneggiato.

Se il problema è comparso dopo la sostituzione dello schermo, del vetro posteriore o della batteria, torna rapidamente al centro che ha eseguito il lavoro. Un connettore della fotocamera potrebbe non essere inserito fino in fondo oppure potrebbe essere entrata polvere mentre il telefono era aperto.

runcheck non assegna un punteggio alle foto, ma può aiutarti a riconoscere le condizioni che peggiorano le prestazioni della fotocamera, come temperatura elevata, poco spazio libero o consumo anomalo della batteria durante registrazioni lunghe.
