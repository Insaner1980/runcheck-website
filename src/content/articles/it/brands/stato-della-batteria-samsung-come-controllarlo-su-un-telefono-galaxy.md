---
title: "Stato della batteria Samsung: come controllarlo su un telefono Galaxy"
description: "Samsung continua a rendere lo stato della batteria più complicato del necessario. Su molti Galaxy non trovi un numero chiaro in stile iPhone, come 94 % o 81 %. Ottieni invece un risultato diagnostico di base, alcune impostazioni di protezione e, sui modelli più recenti, forse una vera pagina Informazioni sulla batteria."
listSummary: "Samsung continua a rendere lo stato della batteria più complicato del necessario."
hub: "brands"
sourceNumber: 153
order: 1
tags: ["batteria","stato","diagnostica","android","guida"]
locale: "it"
draft: false
---
L'incertezza è proprio il punto. Un Galaxy S25 con una versione recente di One UI può mostrare la percentuale di stato della batteria e il numero di cicli nelle Impostazioni. Un Galaxy S23 con un aggiornamento apparentemente simile potrebbe non farlo. Android 17 è stato distribuito prima sulla maggior parte dei Pixel supportati. Samsung ha avviato a maggio 2026 la beta di One UI 9, basata su Android 17, per la serie Galaxy S26 in alcuni mercati; la distribuzione stabile sugli altri Galaxy seguirà il calendario di Samsung. E sarà comunque Samsung a decidere quali dati della batteria mostrare.

Questi sono i controlli che vale la pena usare e quelli che sembrano utili, ma dicono ben poco.

## Inizia da Samsung Members

Il percorso ufficiale passa da Samsung Members. L'app è installata sulla maggior parte dei telefoni Galaxy e le pagine di assistenza Samsung sulla batteria indirizzano proprio lì per l'autodiagnosi.

Apri Samsung Members, tocca **Supporto**, quindi **Inizia ora** in **Diagnostica dello smartphone**. Al termine scegli **Stato batteria**, oppure avvia l'intera serie di test includendo quello della batteria.

Il risultato è semplice. In genere ricevi una valutazione, non una percentuale. Samsung usa le voci **Normale**, **Debole** e **Cattivo**. Possono indicare se la batteria è ancora in condizioni accettabili o se richiede attenzione, ma non dicono se la cella conserva il 96 % della capacità originale oppure è scesa all'83 %.

È frustrante, ma c'è un vantaggio: è il risultato che l'assistenza Samsung riconosce. Se Samsung Members segnala una batteria Debole o Cattiva e il telefono si spegne in modo casuale, si scarica rapidamente o mostra cali improvvisi della percentuale, non perdere giorni provando cinque app diverse. Fai controllare la batteria.

## Cerca Informazioni sulla batteria nelle Impostazioni

Sui Galaxy più recenti, in particolare sui modelli di fascia alta con One UI 7 o successiva, controlla se è disponibile questo percorso:

Impostazioni > Batteria > Informazioni sulla batteria

Quando presente, la pagina può mostrare dati più utili, come percentuale dello stato della batteria, numero di cicli, data di produzione o data del primo utilizzo. È il tentativo più concreto di Samsung di rendere trasparente lo stato della batteria sui Galaxy.

Il problema è la disponibilità. Samsung non ha reso questa schermata universale per ogni modello e regione. Alcuni utenti Galaxy S25 la vedono. Anche alcuni vecchi modelli di fascia alta aggiornati possono mostrarla. Altri telefoni con una versione recente di One UI continuano a non averla.

Se la pagina non compare, probabilmente non puoi attivarla da una normale impostazione. Questo non significa automaticamente che il telefono non registri i dati sottostanti. Significa che Samsung non li espone nelle Impostazioni per quel modello, quella regione o quella versione del firmware.

È qui che il numero della versione Android può trarre in inganno. Nel tempo Android ha aggiunto più collegamenti ai dati della batteria, compresi numero di cicli e informazioni relative allo stato di salute nel framework. Ma avere Android 14, Android 16 o Android 17 non garantisce una schermata Samsung visibile sullo stato della batteria. L'OEM controlla ancora l'interfaccia mostrata all'utente.

## Usa Protezione della batteria prima che la batteria sia usurata

Protezione della batteria è l'impostazione che può davvero rallentare l'usura futura. Non ripara una batteria vecchia. Riduce il tempo trascorso dalla cella ad alta tensione.

Su One UI 7 e versioni successive, vai a:

Impostazioni > Batteria > Protezione della batteria

A seconda della regione e della versione software, puoi trovare nomi come **Base**, **Massima**, **Adattiva** o una protezione durante il sonno. Le etichette cambiano, ma il comportamento è simile:

- **Base** carica fino al 100 %, interrompe la ricarica e la riprende quando il livello scende a circa il 95 %.
- **Adattiva** o la protezione durante il sonno mantiene la carica intorno all'80 % mentre dormi, quindi completa la ricarica poco prima dell'orario in cui di solito ti svegli.
- **Massima** imposta un limite rigido. Su One UI 7 Samsung documenta, per i dispositivi supportati, limiti selezionabili dell'80 %, 85 %, 90 % o 95 %.

Per molte persone, il 90 % o il 95 % è un compromesso pratico. Riduce le lunghe ore al 100 % senza far sembrare la batteria artificialmente piccola. Se sei vicino a un caricabatterie tutto il giorno, l'80 % ha senso. Se viaggi o arrivi spesso a sera con poca carica, non serve fare gli eroi. Un'impostazione che ti crea ansia è quella sbagliata.

Su One UI 6 e versioni precedenti, l'opzione può essere più semplice, spesso con un solo limite intorno all'85 % invece di più scelte.

## I codici nascosti Samsung non misurano lo stato della batteria

I codici da digitare nel telefono circolano molto perché sembrano menu segreti di assistenza. Alcuni sono utili. Quasi nessuno fornisce una vera misura dello stato della batteria.

`*#0*#` apre un menu di test hardware su molti Galaxy. Serve per controllare schermo, pannello touch, sensori, vibrazione, altoparlanti e fotocamere. Non mostra una percentuale sullo stato della batteria. Su alcuni modelli recenti o bloccati dall'operatore non succede nulla.

`*#0228#` apre una schermata sullo stato della batteria su alcuni Samsung. Può mostrare tensione, temperatura, livello di carica e un valore chiamato Level Block. Non interpretare Level Block come stato della batteria. Cambia con il livello di carica attuale e Samsung non lo presenta come misura della capacità residua.

Fai attenzione al pulsante Quick Start in quella schermata. Può reimpostare la calibrazione dell'indicatore e far comportare in modo strano la percentuale mostrata. Guardare i dati è una cosa. Premere pulsanti di calibrazione perché lo suggerisce un post in un forum è un'altra.

`*#*#4636#*#*` apre il menu di test standard di Android quando il produttore lo consente. La sezione batteria può mostrare stato, livello, health, temperatura, tensione e tecnologia. Il campo health indica condizioni come Good, Overheat, Dead, Over Voltage, Cold o Unknown. Non significa che la batteria conservi il 100 % della capacità originale.

Questa è la trappola. Good significa che il sistema non ha rilevato un guasto grave. Una batteria chiaramente invecchiata dopo due anni può comunque risultare Good.

## Le app di terze parti possono stimare, non sapere per magia

Se il Galaxy non mostra una percentuale nelle Impostazioni, le app di terze parti possono ancora essere utili, ma devi conoscerne i limiti.

AccuBattery stima la capacità osservando quanta carica entra nella batteria durante più sessioni. La stima migliora dopo diversi cicli. Può essere utile per seguire una tendenza, soprattutto se ricarichi sempre in modo simile.

DevCheck e altre app hardware mostrano valori grezzi del sistema, come temperatura, tensione, corrente e talvolta dati sulla capacità. Non possono correggere un valore hardware mancante o errato. Se il telefono comunica un dato assurdo, l'app può soltanto visualizzare quel dato assurdo.

Sui Samsung questo conta perché le letture della corrente cambiano da modello a modello. I dispositivi di fascia alta tendono a fornire dati più utilizzabili. Alcuni modelli della serie A e telefoni più vecchi restituiscono corrente instabile, zero oppure valori incompatibili con il consumo reale.

runcheck separa il numero dal livello di affidabilità. Se un Galaxy espone dati utilizzabili su corrente e capacità, l'app può mostrare letture più dettagliate. Se il modello non comunica valori attendibili, runcheck indica che la lettura è stimata o non disponibile invece di fingere una precisione inesistente.

## Che cosa mostrano di solito i diversi Galaxy

La situazione è disordinata, ma questo schema è realistico.

I Galaxy recenti di fascia alta con One UI 7 o successiva possono mostrare Informazioni sulla batteria nelle Impostazioni, compresi percentuale e numero di cicli. La serie Galaxy S25 è l'esempio più chiaro, ma la disponibilità dipende ancora da regione e versione software.

I modelli da Galaxy S21 a S24 in genere forniscono i dati Android di base: stato della ricarica, livello, indicatore di salute, tensione, temperatura e spesso corrente. Alcune versioni possono aggiungere informazioni più ricche, ma non dovresti darlo per scontato solo perché il telefono ha una patch di sicurezza recente.

I Galaxy della serie A e i modelli più vecchi sono meno prevedibili. Samsung Members resta il miglior controllo ufficiale. Le app di terze parti possono seguire l'andamento, ma le letture di corrente e capacità hanno maggiori probabilità di essere assenti o rumorose.

I Galaxy che ricevono Android 17 non diventano automaticamente più trasparenti. Android 17 è arrivato prima sui Pixel supportati e Samsung ha iniziato con la beta di One UI 9 sulla serie Galaxy S26 in alcuni mercati. La distribuzione stabile seguirà il calendario One UI e, anche dopo l'aggiornamento, Samsung deciderà quali pagine e valori attivare su ogni modello.

## Quando probabilmente serve sostituire la batteria

Non basarti su un solo numero. Osserva il comportamento.

Vale la pena considerare la sostituzione se il telefono si spegne con molta carica residua, passa dal 30 % al 5 % in pochi minuti, diventa insolitamente caldo durante un uso normale oppure non riesce più a coprire una giornata che prima affrontava senza problemi. Samsung indica tra i segnali di deterioramento una forte riduzione dell'autonomia, spegnimenti inattesi e una risposta più lenta con le app impegnative.

Se Samsung Members segnala Debole o Cattivo e il telefono si comporta male, hai già prove sufficienti. Se il risultato è Normale ma l'autonomia resta scarsa, controlla prima l'uso della batteria per cercare un'app problematica. Un social network difettoso che lavora in background può sembrare una batteria esausta per uno o due giorni.

## Risposte rapide

Samsung Members di solito non mostra una percentuale dello stato della batteria. Fornisce un risultato diagnostico. Per una percentuale, cerca **Impostazioni > Batteria > Informazioni sulla batteria** sulle versioni One UI supportate oppure usa una stima di terze parti.

La schermata `*#0228#` è sicura da consultare, ma non premere Quick Start senza un motivo concreto. Può alterare la calibrazione dell'indicatore.

Se Informazioni sulla batteria non compare, il telefono può essere perfettamente normale. Samsung abilita quella pagina in base a modello, regione e versione software.

Un risultato Debole o Cattivo in Samsung Members vale più della stima casuale di un'app. Usalo come segnale ufficiale per valutare le opzioni di sostituzione.

Conviene attivare Protezione della batteria presto. Quando la batteria è già degradata, limitare la ricarica non recupera la capacità persa.
