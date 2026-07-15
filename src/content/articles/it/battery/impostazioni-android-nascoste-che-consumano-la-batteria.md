---
title: "Impostazioni Android nascoste che consumano la batteria"
description: "Android può mantenere attive la ricerca di reti Wi-Fi, la ricerca di dispositivi Bluetooth, la sincronizzazione in background, i controlli della posizione e l'Always On Display (AOD) anche quando non usi il telefono. Sono impostazioni da controllare se il consumo in standby è troppo elevato."
listSummary: "Android può mantenere attive la ricerca di reti Wi-Fi."
hub: "battery"
sourceNumber: 33
order: 23
subgroup: "Consumo della batteria"
tags: ["android","aggiornamenti","sicurezza","software","guida"]
locale: "it"
draft: false
---
Una buona parte del consumo della batteria su Android avviene quando non stai facendo nulla di particolare. Lo schermo è spento, il telefono è sul tavolo, eppure la carica continua a scendere perché app, radio, sensori e sincronizzazioni degli account riattivano il dispositivo.

Android 17 è stato distribuito per primo sulla maggior parte dei Pixel supportati nel giugno 2026, quindi i nomi dei menu attraversano una fase un po' confusa. I Pixel ricevono per primi la nuova versione di Android, mentre Samsung, Xiaomi, OnePlus, Motorola e gli altri produttori pubblicano le proprie versioni di Android 17 secondo calendari diversi. I principi spiegati qui restano validi, ma il percorso esatto può spostarsi di un livello a seconda del telefono.

## Attività delle app in background

Di solito è il primo posto in cui guardare. Le app possono sincronizzare dati, scaricare aggiornamenti, controllare le notifiche, caricare registri, aggiornare widget e mantenere wake lock senza farsi notare. Social network, app di shopping, notizie, archiviazione cloud e utility poco curate sono i sospetti più comuni.

Su Pixel e Android stock, inizia da **Impostazioni > Batteria > Utilizzo della batteria**. Passa alla visualizzazione per app e cerca quelle che hanno consumato energia dopo che avevi smesso di usarle. Sui Pixel recenti puoi anche aprire **Impostazioni > App > Utilizzo della batteria per le app**, scegliere un'app e gestire **Consenti l'utilizzo in background**. Google consiglia **Ottimizzata** per la maggior parte delle app.

Limita l'attività in background delle app che non devono funzionare dopo che le hai chiuse. Giochi, app di shopping, app di viaggio che apri solo manualmente, servizi di consegna di cibo e utility occasionali sono buoni candidati. Non applicare limiti rigidi ad app di messaggistica, email di lavoro, VPN, dispositivi medici, servizi per la sicurezza familiare o qualsiasi app per cui una notifica in ritardo potrebbe creare un vero problema.

Samsung colloca la stessa funzione in **Impostazioni > Assistenza dispositivo > Batteria > Limiti per l'uso in background**. L'opzione più forte è **App in sospensione avanzata**, utile per le app che usi raramente. È anche facile esagerare. Se una notifica è importante, non mettere quell'app in sospensione avanzata.

Conviene lasciare attiva Batteria Adattiva. Impara quali app usi spesso e limita le altre in modo più discreto rispetto a una restrizione manuale. Non intercetta ogni problema, ma è una buona base di partenza.

## Ricerca di reti Wi-Fi e dispositivi Bluetooth

Questa funzione sembra un po' nascosta. Disattivare Wi-Fi o Bluetooth dalle Impostazioni rapide non impedisce sempre ad Android di usare le relative radio per migliorare la posizione. Il sistema può continuare a cercare punti di accesso Wi-Fi e dispositivi Bluetooth nelle vicinanze.

Su Android 12 e versioni successive, il percorso ufficiale è normalmente **Impostazioni > Posizione > Servizi di localizzazione > Ricerca di reti Wi-Fi** e **Ricerca di dispositivi Bluetooth**. Su Android 11 e versioni precedenti, le opzioni possono trovarsi direttamente in **Impostazioni > Posizione**. Samsung di solito le mantiene in **Impostazioni > Posizione > Servizi di localizzazione**.

Disattivare queste ricerche può ridurre piccole e ripetute riattivazioni delle radio. In cambio, la posizione negli ambienti chiusi può diventare meno precisa. Se usi Google Maps all'interno di edifici, Find Hub, automazioni per la casa basate sulla posizione o promemoria geolocalizzati, potresti notare una localizzazione più lenta o meno accurata.

Per la maggior parte delle persone, le disattiverei solo se il consumo in standby è già fastidioso. Su un telefono in buone condizioni, non è il primo interruttore che toccherei.

## Orologio nella schermata di blocco e AOD

L'AOD è comodo. Fa però esattamente ciò che promette il nome: una parte del display rimane accesa per tutto il giorno.

Gli schermi OLED non illuminano i pixel neri, quindi un semplice orologio su fondo nero consuma poco in ogni singolo momento. Il telefono può però restare inattivo per 15-20 ore al giorno. Un piccolo consumo costante diventa visibile su un intervallo così lungo, soprattutto se l'AOD usa colori, widget, sfondo o elementi di notifica più luminosi.

Sui Pixel recenti puoi controllarlo in **Impostazioni > Display e tocco > Display sempre attivo**. Samsung usa **Impostazioni > Blocco schermo e AOD > Always On Display** o un percorso simile nella sezione della schermata di blocco, a seconda della versione di One UI.

La soluzione migliore non è sempre disattivarlo del tutto. Molti telefoni offrono opzioni come **Tocca per mostrare**, **Mostra per nuove notifiche** o una programmazione dell'orologio nella schermata di blocco. Mantieni così buona parte della comodità senza illuminare pixel ogni minuto della giornata.

## Precisione della posizione e autorizzazioni delle app

Precisione della localizzazione aiuta Android a trovare la tua posizione più rapidamente e con maggiore precisione usando più del solo GPS. Punti di accesso Wi-Fi, celle della rete mobile, sensori, indirizzo IP e dati del dispositivo possono contribuire alla stima quando la funzione è attiva.

Questo non significa che Precisione della localizzazione sia una funzione negativa. È il motivo per cui il telefono riesce a localizzarti all'interno di edifici dove il GPS è debole. Allo stesso tempo, le app con autorizzazione alla posizione hanno più possibilità di richiederla in background, e le richieste di posizione in background sono una causa comune di consumo.

Controlla **Impostazioni > Posizione > Autorizzazioni di accesso alla posizione**. Tutto ciò che compare sotto **Autorizzazione sempre concessa** merita attenzione. Widget meteo, social network, app di shopping, foto e viaggi spesso non hanno bisogno della posizione in background. Imposta **Consenti solo mentre l'app è in uso**, a meno che il tracciamento in background non sia la funzione principale dell'app.

Su Android 12 e versioni successive puoi anche scegliere la posizione approssimativa per molte app. È una misura utile più per la privacy che per la batteria, ma resta una buona abitudine. Navigazione, monitoraggio dell'attività fisica e app di emergenza o sicurezza sono le eccezioni più ovvie.

## Sincronizzazione e account

Ogni account presente sul telefono può avere un proprio programma di sincronizzazione. Google, Samsung, Microsoft, email, calendario, contatti, note cloud, Drive, Foto, sincronizzazione del browser e account di terze parti aggiungono tutti lavoro in background.

Apri **Impostazioni > Password, passkey e account** oppure la sezione **Account**, quindi controlla cosa viene sincronizzato per ogni account. Se questo è il tuo unico telefono, probabilmente vorrai lasciare attivi contatti, calendario e indirizzo email principale. Puoi invece eliminare o ridurre la sincronizzazione di un account di lavoro che non usi più, un servizio cloud che non deve sincronizzarsi sul telefono o una vecchia casella email.

Molti telefoni offrono anche un interruttore globale per la sincronizzazione automatica. Non consiglio di lasciarlo sempre disattivato, perché email mancanti e calendari non aggiornati diventano presto irritanti. Può però essere utile durante un viaggio, una lunga escursione o un'interruzione di corrente.

## L'interruttore per il passaggio alla rete mobile

Nelle Opzioni sviluppatore è presente un'impostazione chiamata **Mobile data always active**. Quando è attiva, Android mantiene pronta la connessione dati mobile anche mentre il telefono è collegato al Wi-Fi. Il vantaggio è un passaggio più rapido quando il Wi-Fi cade. Il costo è che il modem può restare sveglio più del necessario.

L'effetto è maggiore quando il segnale mobile è debole. Un telefono collegato al Wi-Fi in un seminterrato con una sola tacca LTE può continuare a sprecare energia nel tentativo di mantenere la connessione cellulare.

Per raggiungerla, attiva le Opzioni sviluppatore aprendo **Impostazioni > Informazioni sul telefono** e toccando sette volte **Numero build**. Poi cerca **Mobile data always active** in **Impostazioni > Sistema > Opzioni sviluppatore**. Su Samsung, le Opzioni sviluppatore in genere compaiono in fondo a Impostazioni dopo l'attivazione. Il nome localizzato dell'interruttore può variare in base al produttore.

Disattivala se il telefono trascorre gran parte della giornata su una rete Wi-Fi stabile. Quando il Wi-Fi si interrompe, il passaggio ai dati mobili potrebbe richiedere un istante in più.

## Notifiche, gesti di riattivazione e piccoli risvegli

Una singola notifica non consuma molto. Una giornata piena di notifiche rumorose sì. Ogni suono, vibrazione, accensione dello schermo e animazione della schermata di blocco dà al telefono un altro motivo per uscire dallo stato di inattività più profondo.

Apri **Impostazioni > Notifiche > Notifiche app** e sii severo con le app promozionali. Offerte dei negozi, promemoria dei giochi, consigli dei servizi di streaming, promozioni dei ristoranti e marketing delle app non devono riattivare il telefono.

Controlla anche le impostazioni della schermata di blocco e dei gesti: **Solleva per controllare il telefono**, **Tocca per riattivare**, **Tocca due volte per controllare il telefono** e opzioni simili. Usano sensori a basso consumo, quindi da sole non incidono enormemente. Il problema maggiore sono le accensioni accidentali in tasca, in borsa o su una scrivania che vibra.

Disattiva quelle che non usi. Lascia attive quelle che rendono davvero più comodo il telefono.

## Il segnale debole è il consumo nascosto che non puoi eliminare con un interruttore

Un segnale mobile scarso può consumare più batteria di qualsiasi impostazione in questo elenco. Quando il telefono fatica a restare collegato, il modem lavora di più. Succede nelle zone rurali, nei sotterranei, negli edifici in cemento, negli ascensori e nelle abitazioni dove il telefono resta aggrappato a una sola tacca.

Se sei collegato al Wi-Fi e per un po' non hai bisogno di normali chiamate o SMS, Modalità aereo più Wi-Fi può aiutare. Attiva Modalità aereo, poi riattiva il Wi-Fi. La radio cellulare si spegne, mentre l'accesso a internet rimane disponibile. Non farlo se devi ricevere chiamate mobili, SMS o usare le funzioni di emergenza dell'operatore.

È qui che uno strumento come runcheck diventa utile. Se il consumo a schermo spento coincide con un segnale debole invece che con l'uso del display, il problema non è un'app misteriosa. È la radio.
