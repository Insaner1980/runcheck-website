---
title: "Il bloatware rallenta il telefono e si può rimuovere?"
description: "Le app Android preinstallate possono occupare spazio, inviare notifiche e mantenere servizi in background. Ecco cosa fa davvero il bloatware e cosa puoi rimuovere in sicurezza."
listSummary: "Le app Android preinstallate possono occupare spazio, inviare notifiche e mantenere servizi in background."
hub: "performance"
sourceNumber: 78
order: 15
tags: ["prestazioni","velocita","android","ottimizzazione","risoluzione-dei-problemi"]
locale: "it"
draft: false
---
---

Il bloatware viene accusato di rallentare quasi ogni telefono Android, ma la realtà è meno drammatica. Un'app preinstallata non rallenta il dispositivo soltanto perché la sua icona esiste. I problemi iniziano quando l'app funziona in background, riattiva il telefono, invia notifiche, si aggiorna o mantiene servizi attivi anche se non l'hai mai chiesto.

È questa la parte irritante. Puoi comprare un telefono, saltare un'app durante la configurazione, non aprirla mai e trovare comunque i servizi collegati nell'elenco delle app.

## Cosa fa davvero il bloatware

Un'app preinstallata inattiva occupa soprattutto spazio. Non usa CPU, RAM, dati mobili o batteria, a meno che Android o un'altra app non avvii uno dei suoi componenti.

Alcuni pacchetti preinstallati fanno più che restare fermi. Servizi collegati a Facebook, come `com.facebook.appmanager`, sono stati distribuiti su alcuni telefoni come pacchetti complementari. I dispositivi Samsung possono includere Samsung Free, Samsung Global Goals, Samsung TV Plus e altre app Samsung insieme a quelle Google. I telefoni degli operatori possono aggiungere strumenti per l'account, procedure guidate di configurazione, app per la segreteria telefonica, versioni di prova di software di sicurezza e programmi promozionali che installano altre app.

Uno o due servizi in background di solito non rovinano le prestazioni. Quindici su un telefono economico sono un'altra storia. Un dispositivo con 3 GB o 4 GB di RAM, un launcher pesante, app social, strumenti dell'operatore e servizi del produttore può sembrare più lento di un vecchio top di gamma con software più pulito e maggiore margine di memoria.

Lo spazio occupato è più facile da controllare dell'attività in background. Apri **Impostazioni > Spazio di archiviazione > App** oppure **Impostazioni > App**, ordina per dimensione se il telefono lo consente e cerca le app che non usi. Il percorso esatto cambia in base alla marca. Sui Pixel è abbastanza semplice, Samsung concentra più strumenti in Assistenza dispositivo e Xiaomi divide spesso le funzioni di archiviazione tra Impostazioni e l'app Sicurezza.

## Prima disattiva, poi disinstalla quando Android lo permette

Android consente di disinstallare alcune app preinstallate come normali applicazioni. Tieni premuta l'icona, apri **Informazioni app** e cerca **Disinstalla**. Se il pulsante manca, è disattivato o è sostituito da **Disattiva**, Android considera l'app parte del sistema.

Disattivare è la prima scelta più sicura. Vai in **Impostazioni > App**, seleziona l'app e tocca **Disattiva**. Un'app disattivata smette di funzionare, scompare dal launcher e non riceve più i normali aggiornamenti. Continua a occupare una parte dello spazio perché il pacchetto originale resta nell'immagine di sistema, ma Android rimuove gli aggiornamenti e i dati utente quando può.

Quest'ultimo dettaglio conta. Disattivare un'app di sistema non restituisce magicamente diversi gigabyte. Può comunque aiutare se l'app aveva scaricato aggiornamenti, memorizzato contenuti multimediali nella cache, salvato un account o accumulato dati locali.

Samsung e altri OEM mostrano a volte **Disinstalla** anche per app fornite con il telefono. In molti casi, l'operazione rimuove il livello di aggiornamento installato dall'utente e lascia inattiva la copia di fabbrica. Dal tuo punto di vista va bene. Volevi eliminarla dall'uso quotidiano, non cancellarla dalla partizione di sistema in sola lettura.

## Quando ha senso rimuovere un'app con ADB

Per i pacchetti più ostinati, ADB può rimuovere un'app per l'utente corrente senza root:

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

Il comando non elimina il pacchetto dalla partizione di sistema. Lo nasconde e lo disattiva per l'utente 0, cioè l'utente principale del telefono. Un ripristino dei dati di fabbrica lo fa ricomparire.

Usalo solo quando conosci il pacchetto esatto e capisci cosa stai rimuovendo. Il nome del pacchetto può essere visibile nell'URL del Play Store, oppure puoi elencare i pacchetti con:

```text
adb shell pm list packages
```

Strumenti come Canta e Universal Android Debloater Next Generation rendono il procedimento meno scomodo. Canta funziona sul telefono e usa Shizuku. UAD-ng funziona da computer e usa ADB, con elenchi di pacchetti e indicazioni di sicurezza curate dalla comunità. Queste indicazioni sono utili, ma non sono infallibili. Se qualcosa è contrassegnato come unsafe, expert, framework, provider, dialer, launcher o collegato a Google Play Services, lascialo stare a meno che tu non abbia un vero piano di ripristino.

Sul serio. Rimuovere il pacchetto sbagliato può interrompere notifiche, chiamate, installazioni dal Play Store, widget, sincronizzazione degli account o perfino l'avvio del telefono.

## Quali telefoni vengono venduti con software più pulito

I Pixel non vincolati a un operatore restano tra le opzioni Android tradizionali più pulite. Includono le app Google, ma quando vengono acquistati direttamente evitano di solito i pacchetti aggiunti dagli operatori. Motorola è spesso vicina, con alcune funzioni Moto invece di un secondo ecosistema completo di app.

Samsung è migliorata rispetto al passato, ma continua a duplicare diverse categorie Google con versioni proprie: browser, store, galleria, note, servizi account, TV e feed di notizie. Ad alcune persone piace. Se non le usi, sembrano solo disordine.

Xiaomi, Redmi, Poco, Oppo, Realme e Vivo cambiano molto in base al paese e alla fascia di prezzo. Un modello europeo e uno destinato al mercato indiano, pur avendo lo stesso nome hardware, possono includere app di terze parti, suggerimenti, annunci o richieste di installazione diverse. I modelli degli operatori sono un caso a parte, perché l'operatore può aggiungere app indipendentemente dal produttore.

Nothing e OnePlus hanno cambiato approccio nel tempo. Alcune versioni sono pulite, altre hanno aggiunto più servizi dei partner di quanto gli appassionati si aspettassero. Considera la reputazione del marchio come un indizio, non come una prova. Prima di comprare, controlla recensioni aggiornate del modello e della variante regionale esatti.

## Cosa non disattivare

Non disattivare Google Play Services. Molte app ne hanno bisogno per notifiche push, posizione, accesso agli account, mappe, controlli di sicurezza e pagamenti. Disattivarlo trasforma un piccolo fastidio in un telefono che non funziona correttamente.

Fai attenzione con Android System WebView, il launcher predefinito, l'app Telefono, l'app Messaggi, la tastiera, il controller delle autorizzazioni, il programma di installazione dei pacchetti, Impostazioni, il provider dei contatti, il provider multimediale e qualsiasi elemento con `framework` o `provider` nel nome del pacchetto. Sembrano componenti noiosi perché sono infrastruttura.

Singole app Google come Google TV, YouTube Music, Google News o Google One sono in genere sicure da disattivare se non le usi. Chrome di solito si può disattivare quando è installato un altro browser, ma il comportamento degli OEM varia abbastanza da rendere prudente controllare subito dopo WebView e il browser predefinito.

## Il bloatware può essere malware?

Le app legittime di Google, Samsung, Motorola, Xiaomi, di un operatore o di un altro OEM noto non sono automaticamente malware. Possono comunque essere fastidiose, pesanti o troppo insistenti con le notifiche.

Il rischio è maggiore sui telefoni molto economici di marchi poco conosciuti, sulle ROM non ufficiali o sui dispositivi acquistati da marketplace in cui il firmware potrebbe essere stato modificato. Se un'app preinstallata mostra annunci, installa altre app, chiede autorizzazioni insolite o ricompare dopo la rimozione, cerca il nome esatto del pacchetto prima di fidarti.

## Dopo un aggiornamento di sistema

I grandi aggiornamenti di Android o dell'OEM possono riattivare app che avevi disattivato. Gli aggiornamenti di sicurezza mensili in genere non lo fanno, ma succede abbastanza spesso da rendere utile un controllo dopo un aggiornamento importante.

Android 17 non cambia il consiglio di base. È stato distribuito prima sui Pixel supportati, mentre gli altri produttori lo integreranno nelle proprie versioni di Android secondo calendari diversi. Su Samsung, Xiaomi, Oppo e telefoni simili, la quantità di bloatware dipende ancora più dall'immagine software dell'OEM e dalla configurazione dell'operatore che dal numero della versione Android.
