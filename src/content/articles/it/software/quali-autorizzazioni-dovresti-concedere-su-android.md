---
title: "Quali autorizzazioni dovresti concedere su Android?"
description: "La regola più semplice per le autorizzazioni Android è questa: se l'autorizzazione non corrisponde alla funzione che hai appena provato a usare, negala."
listSummary: "La regola più semplice per le autorizzazioni Android è questa."
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","autorizzazioni","privacy","sicurezza","guida"]
locale: "it"
draft: false
---
È normale che un'app fotocamera chieda accesso alla fotocamera. Non lo è che una torcia chieda i contatti. La maggior parte delle decisioni sulle autorizzazioni non è più complicata di così.

Il problema è il momento. Le app chiedono l'accesso mentre stai cercando di fare qualcosa, quindi Consenti diventa il pulsante più rapido. È così che si accumulano autorizzazioni sbagliate.

## I tre tipi di autorizzazioni

Le autorizzazioni Android si possono dividere in tre grandi gruppi.

Le autorizzazioni normali comportano rischi bassi e di solito vengono concesse automaticamente. L'accesso a internet è l'esempio più evidente. Non compare una finestra ogni volta che un'app deve collegarsi alla rete.

Le autorizzazioni runtime, spesso chiamate autorizzazioni pericolose nella documentazione Android, proteggono dati o componenti hardware che possono esporre informazioni private. Posizione, fotocamera, microfono, contatti, calendario, telefono, SMS, dispositivi nelle vicinanze e contenuti multimediali rientrano in questo gruppo. Sono le richieste che vedi mentre usi un'app.

Le autorizzazioni speciali sono più potenti e in genere richiedono di passare dalle Impostazioni. Accesso ai servizi di accessibilità, alle notifiche, visualizzazione sopra altre app, amministrazione del dispositivo, accesso ai dati di utilizzo, installazione di app sconosciute e accesso completo ai file appartengono a questa categoria pratica. Trattale con più cautela rispetto a una normale richiesta per fotocamera o posizione.

Android 6 ha introdotto le autorizzazioni runtime. Su Android 5.1 e versioni precedenti, le app ricevevano autorizzazioni estese al momento dell'installazione. Se un telefono è ancora fermo a quelle versioni, il vecchio sistema di autorizzazioni è solo uno dei tanti motivi per sostituirlo.

## Posizione

La posizione è utile, ma viene richiesta troppo spesso.

Mappe, meteo, servizi di trasporto, consegne, fitness e navigazione possono avere un motivo valido. Una calcolatrice, un filtro per la galleria, uno scanner di codici QR o un'app per sfondi di solito no.

Scegli Consenti solo mentre l'app è in uso, a meno che esista una vera funzione in background. Navigazione passo passo, registrazione di una corsa, sicurezza familiare e localizzazione del dispositivo sono esempi in cui l'accesso in background può avere senso.

Usa la posizione approssimativa per il meteo, i contenuti locali, la disponibilità nei negozi e tutto ciò che non richiede le coordinate GPS esatte. Android 17 introduce anche un pulsante di posizione fornito dal sistema che, nelle app che lo integrano, concede la posizione precisa solo per la sessione corrente. È più adatto quando un'app ha bisogno della posizione esatta una volta, ma non merita un accesso preciso permanente.

## Fotocamera, microfono e registrazione

L'accesso a fotocamera o microfono dovrebbe avere un motivo evidente.

Le videochiamate richiedono entrambi. Le app di messaggistica li usano per foto, messaggi vocali e video. Un'app bancaria può aver bisogno della fotocamera per acquisire documenti o leggere codici QR.

Se non vedi una funzione che usa la fotocamera o il microfono, nega la richiesta. Android mostra indicatori di privacy quando un'app usa uno dei due sensori e Android 12 ha aggiunto una dashboard della privacy con l'attività recente di posizione, fotocamera e microfono.

Controllala ogni tanto. Può rivelare sorprese.

## Contatti

L'accesso ai contatti è una di quelle autorizzazioni che vengono concesse con troppa leggerezza.

Le app di messaggistica e i social network lo chiedono per trovare persone che conosci. È comodo, ma l'app può caricare o confrontare la rubrica con i server del servizio. Le persone presenti nei tuoi contatti non hanno necessariamente accettato questa condivisione.

Android 17 migliora la situazione con un selettore di contatti di sistema che permette alle app compatibili di ricevere solo i contatti e i campi scelti, invece dell'intera rubrica. Usalo quando compare. Se un'app funziona anche senza accesso ai contatti, di solito lo nego e aggiungo le persone manualmente.

## SMS e telefono

L'accesso agli SMS comporta un rischio elevato. Può esporre codici di verifica, conversazioni private e messaggi per il recupero degli account. Solo la vera app di messaggistica dovrebbe avere un accesso ampio agli SMS.

Alcune app bancarie chiedono di leggere automaticamente i codici monouso. È comodo, ma inserirli manualmente è più sicuro. Se l'app funziona senza accesso agli SMS, negalo.

L'autorizzazione Telefono può esporre lo stato delle chiamate, il numero di telefono o altri dati legati alle chiamate, a seconda dell'app e della versione Android. App Telefono, filtro chiamate, segreteria e app dell'operatore possono avere un motivo valido. La maggior parte delle altre app no.

## File, foto e contenuti multimediali

Le autorizzazioni per la memoria sono cambiate molto tra le diverse versioni di Android.

Le versioni più vecchie offrivano un accesso ampio alla memoria. Android 13 ha diviso l'accesso ai contenuti condivisi in autorizzazioni separate per immagini, video e audio. Android 14 ha aggiunto Selected Photos Access, che permette di concedere a un'app solo foto e video specifici invece dell'intera raccolta.

Scegli l'opzione più limitata. Concedi a un editor fotografico solo le foto selezionate, non tutta la raccolta. Dai a un'app musicale accesso all'audio, non a tutti i file. Fai particolare attenzione all'accesso completo ai file, perché questa autorizzazione speciale è pensata per app come file manager e strumenti di backup.

## Dispositivi nelle vicinanze e Wi-Fi

Le autorizzazioni Bluetooth e per i dispositivi nelle vicinanze possono essere legittime. Le app per cuffie, domotica, smartwatch, altoparlanti e stampanti spesso ne hanno bisogno.

Android 13 ha aggiunto anche un'autorizzazione per i dispositivi Wi-Fi nelle vicinanze, destinata alle app che gestiscono connessioni Wi-Fi senza dover conoscere la posizione. È meglio che concedere la posizione soltanto perché un'app deve trovare una stampante o collegarsi a un dispositivo locale.

Non concedere comunque l'accesso ai dispositivi nelle vicinanze a un'app che non offre alcuna funzione di questo tipo.

## Accessibilità, sovrapposizioni e amministrazione

Questa è la zona più rischiosa.

L'accesso ai servizi di accessibilità può leggere ciò che appare sullo schermo, osservare le interazioni e compiere azioni per conto dell'utente. Serve a veri strumenti di accessibilità, ad alcuni gestori di password, alle app di automazione e a poche altre app assistive. Viene però sfruttato anche dal malware.

La visualizzazione sopra altre app consente a un'app di disegnare elementi sopra lo schermo. Le chat bubble e i filtri dello schermo la usano. Anche le sovrapposizioni truffaldine.

L'accesso come amministratore del dispositivo può rendere un'app più difficile da rimuovere. Gestione aziendale, controllo genitori e strumenti antifurto possono averne bisogno. Un gioco no.

Se un'app di pulizia casuale chiede uno di questi accessi, disinstallala.

## Controlla le autorizzazioni già concesse

Le autorizzazioni non sono permanenti.

Vai in Impostazioni > Sicurezza e privacy > Privacy > Gestione autorizzazioni. Su alcuni telefoni il percorso passa invece dalla sezione App. Apri Posizione, Fotocamera, Microfono, Contatti, SMS, Telefono oppure Foto e video, quindi rimuovi l'accesso alle app che non ne hanno bisogno.

Cerca inoltre nelle Impostazioni la sezione dedicata all'accesso speciale delle app. Controlla servizi di accessibilità, accesso alle notifiche, visualizzazione sopra altre app, app di amministrazione del dispositivo, installazione di app sconosciute, accesso ai dati di utilizzo e accesso completo ai file.

Android 11 e versioni successive possono reimpostare automaticamente le autorizzazioni delle app che non usi da alcuni mesi. Google Play Protect può farlo anche sui dispositivi con Android 6.0-10. È utile, ma non sostituisce un controllo manuale dell'elenco.

## Una lista pratica per decidere

Quando compare una richiesta, poniti tre domande.

Questa autorizzazione corrisponde alla funzione che ho appena aperto?

Posso scegliere un'opzione più limitata, come Consenti solo mentre l'app è in uso, posizione approssimativa, foto selezionate o accesso una tantum?

L'app continuerà a funzionare se nego l'accesso?

In caso di dubbio, nega. L'app potrà chiedere di nuovo l'autorizzazione quando userai una funzione che ne ha davvero bisogno.
