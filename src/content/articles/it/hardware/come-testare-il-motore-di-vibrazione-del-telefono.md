---
title: "Come testare il motore di vibrazione del telefono"
description: "Metodi rapidi per testare il motore di vibrazione di uno smartphone Android tramite impostazioni, feedback della tastiera, modalità provvisoria e diagnostica del produttore."
listSummary: "Metodi rapidi per testare il motore di vibrazione di uno smartphone Android tramite impostazioni."
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["hardware","test","diagnostica","android","guida"]
locale: "it"
draft: false
---
---

Un telefono silenzioso non significa automaticamente che il motore di vibrazione sia guasto. La maggior parte dei problemi nasce prima dalle impostazioni, poi dal software e soltanto alla fine dall'hardware.

L'ordine conta. Sostituire un motore aptico perché la modalità Non disturbare aveva disattivato la vibrazione è denaro sprecato.

## Controlla prima le impostazioni di vibrazione

Apri Impostazioni e cerca Suoni e vibrazione, Suoni oppure Feedback aptico. Il percorso esatto dipende dal produttore.

Sui Samsung Galaxy vai su Impostazioni > Suoni e vibrazione > Intensità vibrazione. Chiamate, notifiche, feedback di sistema e interazioni tattili possono avere controlli separati. È facile abbassarne uno e lasciare attivi gli altri.

Controlla anche Non disturbare. Sui Pixel e sulle versioni Android recenti, il percorso è in genere Impostazioni > Modalità > Non disturbare. Sulle versioni meno recenti può trovarsi sotto Audio o Notifiche. Su Samsung, controlla Impostazioni > Notifiche > Non disturbare. A seconda delle regole impostate per chiamate, app e pianificazioni, questa modalità può disattivare la vibrazione.

Un ultimo controllo semplice riguarda la tastiera. Gboard, Samsung Keyboard e SwiftKey hanno impostazioni aptiche proprie. Se la vibrazione dei tasti è disattivata nell'app della tastiera, non sentirai alcun impulso mentre scrivi anche se il motore funziona perfettamente.

## Usa un test diretto della vibrazione

Sui Samsung Galaxy, il metodo integrato più chiaro è Samsung Members. Apri l'app, vai su Supporto > Diagnostica dello smartphone e scegli il test Vibrazione, se disponibile. È un percorso più affidabile dei codici nascosti.

Il vecchio codice Samsung `*#0*#` apre ancora il menu di test hardware su molti Galaxy. Tocca Vibration e il telefono dovrebbe vibrare finché non esci dal test. Devi usare l'app Telefono di Samsung. Il firmware dell'operatore, le impostazioni di sicurezza delle versioni One UI più recenti o le restrizioni aziendali possono bloccare il menu.

Alcuni telefoni Android reagiscono anche a `*#*#0842#*#*`, un codice usato da tempo per testare vibrazione e retroilluminazione. Non considerarlo universale. Di solito i Pixel non lo supportano e molte app Telefono moderne lo ignorano.

Su Xiaomi, Redmi e POCO prova ad aprire il menu CIT con `*#*#6484#*#*`. Il nome del menu e l'elenco dei test cambiano tra MIUI e HyperOS, ma spesso è presente anche la prova della vibrazione.

## Prova il feedback leggero con la tastiera

Apri un'app per le note e scrivi alcune frasi. Se la vibrazione al tocco è attiva, ogni tasto dovrebbe produrre un piccolo impulso.

È un test utile perché verifica sia il feedback aptico leggero sia la vibrazione più forte usata per le chiamate in arrivo. Se il telefono vibra mentre scrivi ma non durante le chiamate, è più probabile un problema nelle impostazioni delle notifiche che un guasto del motore.

Su Android, ogni app può gestire la vibrazione per singola categoria di notifica. Apri Impostazioni > App, scegli l'app interessata e controlla la sezione Notifiche. Per Telefono, Messaggi, WhatsApp, Telegram o Gmail, verifica che la categoria specifica abbia la vibrazione attiva.

## Separa il software dall'hardware

Riavvia prima il telefono. Sembra banale, ma il feedback aptico può smettere di funzionare dopo un errore software e tornare dopo il riavvio.

Se la vibrazione ricompare e poi scompare di nuovo, prova la modalità provvisoria. Su molti telefoni Android puoi aprire il menu di spegnimento e tenere premuta l'opzione per spegnere finché compare la proposta di riavvio in modalità provvisoria. Su molti Samsung puoi riavviare e tenere premuto Volume giù durante l'avvio.

La modalità provvisoria disattiva le app di terze parti. Se la vibrazione funziona, rimuovi o disabilita una alla volta le app recenti per automazione, filtro chiamate, risparmio batteria, launcher e accessibilità. Sono le cause più comuni.

Se la vibrazione non funziona nemmeno in modalità provvisoria, non risponde in Samsung Members o nel menu di test del produttore e tutte le impostazioni sono attive, è probabile un problema al motore o al suo collegamento.

## Cosa può guastarsi dentro il telefono

Gli smartphone Android usano in genere uno di due tipi di motore aptico. I modelli più vecchi o economici montano spesso un motore a massa rotante eccentrica, chiamato ERM. Produce il classico ronzio vibrante di una piccola massa in rotazione. I telefoni di fascia media e alta usano più spesso un attuatore risonante lineare, o LRA, che dà impulsi più netti e precisi.

Entrambi possono rompersi. Una caduta può allentare un cavo flessibile, danneggiare una saldatura o rompere il supporto che tiene il motore contro il telaio. L'acqua può corrodere il connettore. Anche l'usura è possibile, anche se questi motori durano di solito a lungo quando il telefono non ha subito urti o riparazioni precedenti.

La vibrazione intermittente è il sintomo classico di un collegamento allentato. Forte un giorno, debole quello dopo, del tutto assente dopo una caduta. Questo andamento è più sospetto di un motore che smette di colpo e non riparte più.

## Cosa aspettarsi dalla riparazione

Sostituire il motore di vibrazione è spesso uno degli interventi hardware meno costosi, ma nei telefoni sigillati bisogna comunque scaldare l'adesivo, aprire il pannello posteriore e richiudere tutto con attenzione. Su modelli modulari come alcuni Fairphone, il motore è integrato in un modulo che l'utente può sostituire. Sulla maggior parte degli smartphone Android tradizionali serve invece aprire il telefono in laboratorio.

Se la vibrazione è diventata irregolare subito dopo una caduta, chiedi al centro di riparazione di controllare il connettore prima di sostituire il motore. A volte il componente è integro e il cavo non è più inserito correttamente.

runcheck non testa direttamente il motore di vibrazione, ma può aiutare a individuare segnali collegati, come surriscaldamento, variazioni anomale del consumo della batteria o instabilità della ricarica dopo una caduta o un contatto con l'umidità.
