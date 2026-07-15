---
title: "Codici diagnostici Android: elenco completo per produttore"
description: "Codici diagnostici Android da digitare nel tastierino, suddivisi per produttore, tra cui Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO e Realme, con note aggiornate su Android 17."
listSummary: "Codici diagnostici Android da digitare nel tastierino."
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostica","sensori","android","hardware","guida"]
locale: "it"
draft: false
---
---

Digiti `*#0*#` su un Galaxy e si apre un menu completo di test hardware. Digiti lo stesso codice su un altro Galaxy e non succede nulla.

È la normalità con i codici diagnostici Android. Sono utili, ma online sembrano molto più universali di quanto siano davvero. Un codice può funzionare su un telefono, non funzionare su un altro della stessa marca e scomparire dopo un aggiornamento del firmware dell'operatore. Questi codici si collocano in un territorio confuso tra Android, l'app Telefono, i menu di servizio OEM e le limitazioni degli operatori.

Google ha rilasciato Android 17 il 16 giugno 2026, rendendolo disponibile prima sui Pixel supportati. I dispositivi partner di marchi come OnePlus, OPPO, realme, vivo, Xiaomi, HONOR, Lenovo, Sharp e iQOO seguono invece i canali beta di Android 17 e i calendari di distribuzione di ciascun produttore. È un dettaglio importante, perché Android 17 non rende uniformi i codici diagnostici nascosti tra le diverse marche.

Usa l'app Telefono preinstallata quando provi questi codici. Quelli Samsung richiedono in genere Samsung Phone. I codici Google funzionano di solito con Phone by Google. Le app Telefono di terze parti spesso non elaborano affatto i codici MMI o di servizio.

## Prima di provare un codice

Limitati ai codici di sola lettura e ai test hardware. Non inserire codici di ripristino, provisioning, configurazione del modem o programmazione di servizio se non sai esattamente cosa fanno.

La maggior parte dei codici di test si avvia appena digiti l'ultimo carattere. Su alcuni telefoni devi premere il tasto di chiamata. Se non succede nulla, non continuare a inserire il codice. Probabilmente non è supportato da quel modello, dall'app Telefono, dal firmware dell'operatore o dalla versione di Android.

## Codici che funzionano su molti telefoni Android

Sono la cosa più vicina a codici diagnostici comuni su Android, ma nemmeno questi sono garantiti su ogni dispositivo.

| Codice | Cosa fa | Note |
|---|---|---|
| `*#06#` | Mostra l'IMEI e, in alcuni casi, MEID o EID | È il codice telefonico più ampiamente supportato. Utile per garanzia, controlli nelle blacklist e assistenza dell'operatore. |
| `#07#` | Mostra informazioni normative e dati SAR | Funziona su molti telefoni Android. Alcuni richiedono il tasto di chiamata. |
| `*#*#4636#*#*` | Apre il menu Testing di Android | Può mostrare informazioni sul telefono, stato della rete, dati del segnale, statistiche della batteria e dettagli Wi-Fi. La disponibilità cambia molto. |
| `*#*#426#*#*` | Apre la diagnostica di Firebase Cloud Messaging | Conviene provarlo con Phone by Google. Utile quando le notifiche push non arrivano. |

Il menu `*#*#4636#*#*` è uno dei codici Android più citati, ma non sorprenderti se mostra meno campi rispetto alle vecchie schermate che trovi online. Le versioni Android e le interfacce OEM più recenti nascondono più dati di rete e batteria rispetto al passato.

## Samsung Galaxy

Samsung offre due percorsi diagnostici: Samsung Members e i codici nascosti del tastierino. Inizia da Samsung Members. È il metodo supportato, aggiornato e più semplice da usare per la maggior parte delle persone.

Apri Samsung Members, tocca Supporto, quindi Vedi test o Diagnostica dello smartphone. L'elenco attuale può includere test per fotocamera, connessione USB, ricarica via cavo, stato della batteria, touchscreen, sensori, vibrazione, microfono, altoparlante, Wi-Fi, Bluetooth, scheda SIM, NFC e riconoscimento delle impronte digitali. Le voci esatte dipendono dal modello.

I codici Samsung restano utili, soprattutto sui telefoni sbloccati, ma le impostazioni di sicurezza di One UI, il comportamento di Auto Blocker, i criteri aziendali e il firmware dell'operatore possono bloccarli.

| Codice | Cosa fa | Note |
|---|---|---|
| `*#0*#` | Apre il menu principale dei test hardware Samsung | I test possono includere colori del display, tocco, ricevitore, altoparlante, vibrazione, fotocamere, sensori, S Pen e altro. |
| `*#0228#` | Schermata dello stato della batteria | Mostra tensione in tempo reale e altri dati della batteria su molti modelli. Alcune versioni più recenti lo bloccano. |
| `*#0011#` | Schermata di rete ServiceMode | Utile per dettagli sul segnale e sulla cella servente. Non modificare le impostazioni. |
| `*#0842#` | Test della vibrazione | Funziona su molti modelli Samsung, ma non su tutti. |
| `*#0673#` o `*#0289#` | Test audio | Il comportamento di altoparlante e ricevitore cambia a seconda del modello. |
| `*#2663#` | Informazioni sul firmware touch | Spesso usato dai tecnici dell'assistenza. |
| `*#7353#` | Menu di test rapido | Più comune sui Galaxy meno recenti. |
| `*#1234#` | Dettagli della versione firmware | Mostra informazioni sulle build AP, CP e CSC. |
| `*#7412365#` | Informazioni sul firmware della fotocamera | La disponibilità varia. |
| `*#0588#` | Test del sensore di prossimità | Utile quando lo schermo non si spegne durante le chiamate. |
| `*#9900#` | Modalità SysDump | Serve soprattutto per log e debug. Non modificare opzioni a caso. |
| `*#9090#` | Configurazione diagnostica | Evita qualsiasi modifica, a meno che tu non stia seguendo istruzioni ufficiali dell'assistenza. |

Se `*#0*#` non funziona, non concludere che il telefono sia falso. Prova prima Samsung Phone invece di Google Phone. Poi controlla la diagnostica di Samsung Members. Se quella funziona, il percorso di test hardware è ancora disponibile anche se il codice nascosto è bloccato.

## Google Pixel

I Pixel sono più restrittivi dei telefoni Samsung. Non esiste un equivalente Pixel del menu Samsung `*#0*#`.

| Codice | Cosa fa | Note |
|---|---|---|
| `*#*#7287#*#*` | Apre la diagnostica di riparazione Pixel sui dispositivi supportati | Google lo documenta per le procedure di autoriparazione Pixel. Richiede una connessione a Internet e può variare in base a modello, regione e stato del software. |
| `*#*#4636#*#*` | Menu Testing di Android | Viene spesso usato per informazioni sul telefono e sulla rete, ma i campi cambiano tra le versioni Android. |
| `*#*#426#*#*` | Diagnostica FCM | Utile per risolvere problemi con le notifiche push. |
| `#07#` | Informazioni normative e SAR | Funziona su molti modelli Pixel. |

I Pixel 9 e successivi includono inoltre nelle Impostazioni un'area dedicata allo stato del dispositivo e all'assistenza guidata, nelle lingue supportate. Non è la stessa cosa del codice diagnostico per le riparazioni, ma spesso è un punto di partenza migliore per domande su batteria, ricarica, prestazioni e assistenza.

Android 17 è disponibile tramite aggiornamento OTA sui Pixel supportati, dal Pixel 6 al Pixel 10a. Questo non significa che tutti i Pixel abbiano la stessa diagnostica. Contano ancora l'hardware, la regione e il supporto della modalità di riparazione.

## Xiaomi, Redmi e POCO

Il menu CIT di Xiaomi è una delle suite di test OEM migliori, ma il contenuto cambia tra MIUI, HyperOS, versioni regionali e linee di prodotto.

| Codice | Cosa fa | Note |
|---|---|---|
| `*#*#6484#*#*` | Apre il menu di test hardware CIT | In genere include display, tocco, vibrazione, altoparlanti, microfoni, fotocamere, sensori, GPS, Wi-Fi, Bluetooth, SIM, tasti, impronte digitali, trasmettitore a infrarossi e NFC. |
| `*#*#64663#*#*` | Codice CIT alternativo | Funziona su alcuni modelli Xiaomi meno recenti. |
| `*#*#4636#*#*` | Menu Testing di Android | La disponibilità varia, soprattutto sulle versioni HyperOS più recenti. |

Su alcuni telefoni Xiaomi puoi aprire la diagnostica anche da Settings > My device > All specs, toccando più volte la versione del kernel. Se il codice del tastierino non funziona, prova questo percorso.

## OnePlus

L'accesso alla diagnostica OnePlus è cambiato nel tempo, mentre OxygenOS si avvicinava a ColorOS. Non sorprenderti se una vecchia guida non corrisponde al telefono che hai oggi.

| Codice | Cosa fa | Note |
|---|---|---|
| `*#808#` | Engineering Mode | I test hardware possono includere display, tocco, fotocamere, sensori, audio, ricarica e moduli di rete. La disponibilità varia in base a OxygenOS e alla regione. |
| `*#*#4636#*#*` | Menu Testing di Android | Funziona ancora su molti modelli. |
| `*#888#` | Versione hardware o informazioni di produzione | Non è presente su tutti i modelli. |
| `*#1234#` | Versione firmware | Funziona su alcune versioni OnePlus. |

Fai attenzione dentro Engineering Mode. Usa soltanto le schermate di test. Non modificare modem, calibrazione o impostazioni di servizio.

## Motorola

Motorola ha meno codici pubblici rispetto a Samsung o Xiaomi, ma molti modelli includono un'app per i test di assistenza.

| Codice | Cosa fa | Note |
|---|---|---|
| `*#*#2486#*#*` | Apre CQATest o il menu dei test di servizio | Può includere display, tocco, altoparlante, vibrazione, fotocamera e sensori. |
| `*#*#4636#*#*` | Menu Testing di Android | Funziona su molti modelli. |
| `.12345+=` | Apre la modalità di ingegneria dall'app Calcolatrice preinstallata | Funziona soltanto su alcuni Motorola e solo nella calcolatrice originale. |

Se CQATest compare nell'elenco delle app dopo un test, non preoccuparti. È il componente Motorola usato per i controlli di fabbrica.

## OPPO e Realme

OPPO e Realme condividono molta tecnologia ColorOS, quindi i loro codici di servizio si sovrappongono.

| Codice | Cosa fa | Note |
|---|---|---|
| `*#899#` | Menu di test manuale o di ingegneria | Punto di accesso comune ai test hardware su molte versioni ColorOS e Realme UI. |
| `*#800#` | Strumento di ingegneria e log | Usato spesso per log e diagnostica di rete. |
| `*#6776#` | Informazioni sul software e sul dispositivo | Mostra modello e dettagli del firmware su molti dispositivi. |
| `*#*#4636#*#*` | Menu Testing di Android | La disponibilità varia. |

Il percorso più sicuro è di solito Phone Manager, My OPPO, My realme o l'app Support, se il modello ne include una.

## Codici da evitare

Evita i codici di ripristino dei dati di fabbrica e di programmazione di servizio trovati in elenchi casuali. Quello pericoloso che continua a circolare è `*2767*3855#`, un vecchio codice Samsung per il ripristino dei dati di fabbrica. Non digitarlo "per vedere cosa succede". È così che si perdono i dati.

Evita anche tutto ciò che viene descritto come NV, calibrazione RF, programmazione del modem, provisioning dell'operatore o configurazione di servizio. Questi menu non sono giocattoli diagnostici.

## Quando i codici non funzionano

Prova prima l'app Telefono preinstallata. Poi passa all'app di assistenza o diagnostica del produttore. Samsung Members, la diagnostica Pixel, Xiaomi CIT tramite le Impostazioni, Motorola CQATest e gli strumenti di assistenza OPPO o Realme funzionano spesso anche quando i codici del tastierino non rispondono.

Sui telefoni bloccati dall'operatore, i codici possono essere disattivati. Lo stesso vale per i dispositivi gestiti da un'azienda. Anche alcune funzioni di sicurezza possono impedirne l'uso. Gli aggiornamenti di Android possono rimuovere o nascondere parti di un menu. È frustrante, ma non significa automaticamente che il telefono abbia un problema hardware.

Per controllare una volta sola un componente, i codici diagnostici sono utili. Per i problemi che si sviluppano lentamente, non bastano. Un test dell'altoparlante non mostra che il telefono si surriscalda ogni pomeriggio, e una schermata della batteria non rivela che la corrente di ricarica diminuisce da un mese. runcheck colma questo vuoto monitorando nel tempo l'andamento di batteria, temperatura, rete, memoria e ricarica.

## FAQ

### I codici diagnostici possono danneggiare il telefono?

I codici informativi e di test sono in genere sicuri. Quelli che cancellano i dati o modificano le impostazioni di servizio non lo sono. Cerca informazioni sul codice esatto prima di inserirlo.

### Devo premere il tasto di chiamata?

Di solito no. La maggior parte dei codici `*#*#...#*#*` e `*#...#` si avvia quando digiti l'ultimo carattere. Alcuni telefoni richiedono il tasto di chiamata, soprattutto per codici brevi come `#07#`.

### Perché un codice funziona su un telefono ma non su un altro?

Perché il codice viene implementato dall'OEM, dall'app Telefono, dal firmware e, in alcuni casi, dall'operatore. Android non garantisce un menu universale di test hardware.

### Le app possono sostituire i codici diagnostici?

In parte. App come Samsung Members, Phone Doctor Plus, TestM e DevCheck possono testare schermo, altoparlanti, fotocamere, sensori, letture della batteria e stato della rete tramite le API Android. Di solito non accedono alle stesse schermate di servizio a basso livello usate dai menu OEM.
