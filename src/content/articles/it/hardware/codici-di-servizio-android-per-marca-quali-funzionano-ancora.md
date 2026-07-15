---
title: "Codici di servizio Android per marca: quali funzionano ancora"
description: "Codici di servizio Android funzionanti per marca, con note aggiornate su Android 17, dispositivi Pixel, Samsung, Xiaomi, OnePlus, Motorola, Huawei, Realme e Oppo."
listSummary: "Codici di servizio Android funzionanti per marca."
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostica","sensori","android","hardware","guida"]
locale: "it"
draft: false
---
I codici di servizio Android sono utili, ma disordinati. Alcuni fanno parte di Android, altri vengono aggiunti dal produttore e altri ancora scompaiono dopo un aggiornamento del firmware senza alcun avviso.

La questione conta ancora di più ora che è iniziata la distribuzione di Android 17. Google ha rilasciato Android 17 prima per la maggior parte dei Pixel supportati, mentre Samsung, Xiaomi, OnePlus, Motorola e gli altri produttori distribuiranno in seguito le proprie versioni di Android 17. Un codice che oggi funziona su un Pixel con Android 17 non dice nulla su un Galaxy o un Redmi che non ha ancora ricevuto il firmware Android 17 del produttore.

Due regole prima di iniziare. La maggior parte dei codici si attiva appena digiti l'ultimo carattere, quindi di solito non devi premere il tasto di chiamata. Se un codice apre un menu che non conosci, osserva pure, ma non modificare nulla.

## Codici universali

Questi codici sono la cosa più vicina a una base comune su Android. Anche in questo caso, un firmware personalizzato può bloccarli.

`*#06#` mostra il numero IMEI della radio cellulare. I telefoni Dual SIM visualizzano in genere due numeri IMEI. È il codice più sicuro dell'elenco e funziona su quasi tutti i telefoni, compresi gli iPhone.

`*#*#4636#*#*` apre il menu Testing di Android su molti dispositivi. Può mostrare informazioni sul telefono, dati della batteria, potenza del segnale e dettagli della radio. Il problema è che molte interfacce OEM ora lo limitano, soprattutto sui firmware Samsung e Xiaomi più recenti.

`*#*#426#*#*` apre la diagnostica di Firebase Cloud Messaging. Serve soprattutto quando le notifiche push arrivano in ritardo o non arrivano affatto, perché mostra se Google Play Services riesce a mantenere una connessione con i server Google.

`*#07#` mostra le informazioni SAR su molti telefoni Android. SAR significa Specific Absorption Rate e misura la quantità di energia a radiofrequenza assorbita dal corpo durante l'uso. Negli Stati Uniti, il limite FCC per i telefoni è 1,6 W/kg. In Europa, il limite comunemente applicato ai consumatori per l'esposizione di testa e corpo è 2,0 W/kg, calcolato su 10 grammi di tessuto.

## Samsung Galaxy

Samsung continua a offrire uno dei sistemi diagnostici migliori, anche perché mette a disposizione sia i codici del tastierino sia un percorso ufficiale tramite app.

`*#0*#` apre la schermata di test hardware su molti Galaxy. La disposizione cambia a seconda del modello, ma in genere puoi provare schermo, tocco, fotocamere, altoparlanti, vibrazione, sensori e, in alcuni casi, il lettore di impronte. Su alcuni modelli degli operatori o con firmware molto limitato, il codice non si apre affatto.

Samsung Members è il percorso più sicuro per la maggior parte delle persone. Apri Samsung Members, tocca Supporto, quindi Vedi test o Diagnostica dello smartphone. L'app guida attraverso le prove e mostra risultati più chiari rispetto al menu di servizio.

`*#0228#` mostra dettagli sullo stato della batteria, come tensione e temperatura, su molti firmware Galaxy. Non fornisce una percentuale semplice e affidabile dello stato della batteria.

`*#0011#` apre ServiceMode su molti modelli e mostra dati in tempo reale sulla rete cellulare, tra cui banda, cella servente e dettagli del segnale. È utile, ma facile da interpretare male se non lavori con le reti mobili.

`*#9900#` apre SysDump su alcuni Galaxy. L'unica opzione che la maggior parte delle persone dovrebbe toccare è quella per pulire i log, e soltanto se l'assistenza ha indicato di eliminare i file dumpstate o logcat accumulati.

`*#2663#` mostra informazioni sul firmware del pannello touch su alcuni modelli. Non aggiornare il firmware touch soltanto perché il pulsante è presente. Usalo solo quando stai cercando di risolvere un problema reale del touchscreen.

## Xiaomi, Redmi e POCO

La suite di test di fabbrica Xiaomi si chiama CIT. È uno dei pochi menu diagnostici Android ancora documentati in modo abbastanza chiaro dal produttore.

`*#*#6484#*#*` apre il rilevamento hardware CIT su molti telefoni Xiaomi, Redmi e POCO. Se non succede nulla, prova `*#*#64663#*#*`. Le pagine di supporto Xiaomi citano entrambi i codici a seconda del modello e della regione.

Il menu CIT può includere test per display, tocco, altoparlante, microfono, vibrazione, fotocamera, sensore di prossimità, sensore di luminosità, accelerometro, giroscopio, bussola, Wi-Fi, Bluetooth, rilevamento SIM, impronte digitali, NFC e ricarica. L'elenco dipende dall'hardware del telefono.

Spesso puoi raggiungere lo stesso menu senza codice: vai in Settings > About phone > Detailed info and specs oppure All specs, quindi tocca più volte Kernel version. Xiaomi cambia le etichette tra MIUI e HyperOS, ma vale ancora la pena provare il percorso tramite la versione del kernel quando il codice del tastierino è bloccato.

`*#*#6485#*#*` mostra informazioni sulla batteria su molti telefoni Xiaomi. Considera quei valori come letture tecniche, non come un sostituto semplice di una pagina dedicata allo stato della batteria.

## Google Pixel

I Pixel supportano i codici Android universali, ma il codice diagnostico attuale più importante è specifico per Pixel.

`*#*#7287#*#*` apre Pixel Repair Diagnostics App sui Pixel supportati. Google lo documenta per i controlli prima o dopo una riparazione. Richiede una connessione a Internet e guida l'utente sullo schermo.

Per i controlli specifici della batteria su Pixel 6 e modelli successivi, usa Impostazioni > Batteria > Diagnostica della batteria. È un normale percorso delle Impostazioni, non un codice nascosto.

`*#*#4636#*#*` continua a funzionare su molti Pixel per le informazioni sulla radio e sulla batteria. Non è uno strumento di riparazione e non può forzare magicamente gli aggiornamenti di Android.

Alcuni articoli più vecchi citano il trucco `.12345+=` nell'app Calcolatrice per aprire la modalità di ingegneria sui Pixel. Nel 2026 non ci farei affidamento. Usa invece il codice diagnostico ufficiale per Pixel.

## OnePlus

I codici OnePlus sono incostanti perché negli ultimi anni OxygenOS si è avvicinato a ColorOS.

`*#808#` apre Engineer Mode su alcuni modelli OnePlus meno recenti, in particolare sulle serie OnePlus 7, 8 e 9. Sui firmware più nuovi può essere bloccato.

`*#899#` apre un menu di diagnostica o di log su alcuni dispositivi OnePlus e della famiglia Oppo. Il contenuto cambia molto.

`*#*#4636#*#*` è di solito il codice di base più utile per informazioni sulla rete e sulla batteria. Per i test hardware sui OnePlus più recenti, l'app di diagnostica integrata, l'app di assistenza o un'app affidabile per i sensori sono spesso meno frustranti della ricerca di vecchi codici.

## Motorola

Secondo molte segnalazioni, `*#*#2486#*#*` apre il menu di ingegneria o di test hardware su molti telefoni Moto. Il supporto cambia a seconda del modello.

Il percorso più affidabile passa dall'app Device Help. Apri Device Help, quindi Device diagnosis e Hardware test. È più facile da spiegare a una persona non tecnica e non dipende dal fatto che un codice nascosto resti attivo.

`*#*#4636#*#*` funziona su molti Motorola perché le versioni Android del produttore restano abbastanza vicine ad Android standard.

## Huawei e Honor

`*#*#2846579#*#*` apre ProjectMenu su molti telefoni Huawei e Honor meno recenti con EMUI o MagicUI. Include impostazioni software, di background, di rete e di assistenza. Alcune opzioni sono destinate ai tecnici.

`*#*#6130#*#*` mostra informazioni di rete su alcuni modelli Huawei.

Sui dispositivi HarmonyOS più recenti, usa l'app Support invece di aspettarti che ogni vecchio codice Android funzioni. Huawei ha spostato molte funzioni diagnostiche rivolte agli utenti in procedure guidate di assistenza.

## Realme e Oppo

`*#800#` apre Engineer Mode su alcuni telefoni Realme e Oppo. Sulle versioni più recenti di ColorOS l'accesso è molto più limitato rispetto al passato.

`*#899#` può aprire un menu diagnostico o di log su alcuni modelli.

Questi marchi cambiano spesso le modalità di accesso alla diagnostica. Se un codice non funziona, non continuare a provare elenchi casuali presi da vecchi forum. Usa Phone Manager, l'app di assistenza o un'app conosciuta per le informazioni hardware.

## Perché i codici smettono di funzionare

L'app del tastierino conta. Un'app Telefono di terze parti può gestire i codici MMI e di servizio in modo diverso da quella preinstallata. Prova prima l'app Telefono fornita con il dispositivo.

Il firmware dell'operatore può rimuovere i codici. Un Galaxy bloccato da un operatore può comportarsi diversamente da un Galaxy sbloccato con lo stesso hardware.

Gli aggiornamenti principali possono cambiare tutto. Android 17 è un buon esempio: i Pixel lo hanno ricevuto per primi, mentre ogni OEM distribuirà la propria versione con menu di servizio, autorizzazioni e limitazioni specifici. Se un codice smette di funzionare dopo un aggiornamento di sistema, può essere stato bloccato, non necessariamente guastato.

E sì, alcuni elenchi online sono vecchi. Un codice copiato da una discussione sul Galaxy S8 può non funzionare su un Galaxy S26, anche se l'articolo sostiene che valga per "tutti i telefoni Samsung".

## Alternative più sicure

Per i controlli quotidiani, l'app di diagnostica del produttore è in genere migliore di un menu nascosto. Samsung Members, Xiaomi CIT, Pixel Repair Diagnostics, Motorola Device Help e Huawei Support sono più facili da interpretare e meno rischiosi.

Per una panoramica in sola lettura, app come DevCheck, CPU-Z, AIDA64 e Phone Doctor Plus possono mostrare dati della batteria, valori dei sensori, dettagli della CPU, memoria e informazioni di rete tramite le API pubbliche di Android. Non accedono a tutti i test di fabbrica, ma bastano per gran parte della diagnostica comune.

Per una visione più ampia dello stato del dispositivo, runcheck riunisce in un'unica schermata la diagnostica di batteria, temperatura, rete e memoria, evitando di passare da un menu di servizio all'altro.

## Cosa non toccare

Non cambiare le bande di rete se non sai esattamente perché lo stai facendo.

Non premere i pulsanti di aggiornamento del firmware nei menu di servizio soltanto per vedere cosa succede.

Non usare opzioni di ripristino, calibrazione o fabbrica trovate in un elenco di codici senza aver creato un backup e senza sapere cosa fanno.

Leggere i valori è sicuro. I problemi iniziano quando si modificano impostazioni nascoste.
