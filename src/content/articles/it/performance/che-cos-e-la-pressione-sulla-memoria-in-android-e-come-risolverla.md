---
title: "Che cos'è la pressione sulla memoria in Android e come risolverla"
description: "La pressione sulla memoria si verifica quando Android ha poca RAM e inizia a chiudere le app. Scopri come riconoscerla, cosa la causa e quali rimedi funzionano davvero."
listSummary: "La pressione sulla memoria si verifica quando Android ha poca RAM e inizia a chiudere le app."
hub: "performance"
sourceNumber: 76
order: 13
tags: ["prestazioni","velocita","android","ottimizzazione","risoluzione-dei-problemi"]
locale: "it"
draft: false
---
---

La pressione sulla memoria è il modo in cui Android decide cosa sacrificare. Quando la RAM non basta per tutto, il sistema inizia a chiudere i processi meno importanti per continuare a funzionare.

Ecco perché il browser ricarica la pagina quando ci torni. È il motivo per cui la tastiera può sparire per un istante, l'app musicale può riavviarsi o un gioco può chiudersi quando rispondi a un messaggio. Il telefono non ha dimenticato per capriccio quello che stavi facendo. Gli serviva memoria.

Su Android, avere molta RAM libera non è l'obiettivo. Il sistema prova a usare la memoria per attività utili, come tenere pronte le app. Il problema inizia quando non resta abbastanza spazio per passare da un'attività all'altra senza interruzioni.

## Cosa fa Android quando la memoria è sotto pressione

Android usa il Low Memory Killer Daemon, o lmkd, per controllare la pressione sulla memoria. Quando la RAM scarseggia, lmkd assegna una priorità ai processi e chiude quelli di cui Android può fare a meno con meno conseguenze. In genere vengono eliminate prima le app in background. Le app in primo piano dovrebbero essere protette, ma con una pressione molto forte possono comunque essere terminate o andare in crash.

Android 10 ha aggiunto il supporto alle informazioni PSI del kernel, Pressure Stall Information, così lmkd può reagire ai veri rallentamenti causati dalla memoria invece di basarsi soltanto su semplici soglie di RAM libera. I sistemi più vecchi dipendevano maggiormente dal driver low memory killer integrato nel kernel. Quel driver è stato rimosso dal kernel Linux principale a partire dalla versione 4.12, perciò le versioni moderne di Android si affidano a lmkd nello spazio utente.

Non serve ricordare tutto questo. La versione pratica è più semplice: se Android continua a chiudere app che stavi usando un attimo prima, probabilmente stai vedendo gli effetti della pressione sulla memoria.

## Segnali che la RAM utilizzabile sta finendo

Il segnale più evidente è il ricaricamento delle app. Apri Chrome, carica una pagina, passa a Messaggi e poi torna a Chrome. Se la pagina viene ricaricata da zero ogni volta, probabilmente Android ha chiuso Chrome mentre era in background.

Altri indizi sono meno evidenti. Il launcher si ridisegna quando torni alla schermata Home. La tastiera scompare mentre scrivi. Spotify si interrompe dopo che hai aperto la fotocamera. Un gioco riparte dall'inizio dopo che hai controllato una notifica. Se succede ogni tanto è normale. Se succede per tutto il giorno, no.

Puoi controllare la memoria attiva dalle Opzioni sviluppatore. In genere devi aprire **Impostazioni > Informazioni sul telefono**, toccare sette volte **Numero build**, quindi cercare le Opzioni sviluppatore nella sezione Sistema e aprire la schermata dei servizi in esecuzione. Il percorso esatto varia in base alla marca, ma la schermata mostra i processi attivi e l'uso corrente della RAM.

Sui dispositivi Samsung puoi controllare anche **Impostazioni > Assistenza dispositivo > Memoria**. I telefoni Xiaomi, Redmi e POCO mostrano spesso l'opzione **Estensione memoria**, anche se questa funzione riguarda la RAM virtuale più che una lettura chiara della reale pressione sulla memoria.

Non fissarti su un solo numero. Un telefono con poche centinaia di MB liberi non è automaticamente guasto. Android usa la cache in modo aggressivo apposta. Conta il comportamento: ricaricamenti continui, stato delle app perso e app in primo piano che si chiudono.

## Perché succede

La quantità di RAM è la causa più ovvia. Nel 2026, un telefono con 4 GB può ancora gestire chiamate, messaggi, mappe e navigazione leggera, ma ha poco margine. Android, Google Play Services, il launcher, la tastiera, le app di messaggistica e la sincronizzazione in background possono occupare una parte consistente della memoria prima ancora che tu apra qualcosa di pesante.

Anche le app moderne sono più grandi di un tempo. Un browser con diverse schede, Instagram o TikTok, un'app di navigazione e un'app musicale possono mettere in difficoltà un dispositivo con poca RAM. I modelli con 6 GB hanno più spazio. Un telefono con 8 GB è comodo per la maggior parte delle persone. Oltre 12 GB, i vantaggi sono in genere più limitati, a meno che tu non giochi molto o usi un multitasking simile a quello di un computer.

I servizi in background incidono più di quanto si pensi. Le app di messaggistica tengono aperte le connessioni. Le app per il fitness sincronizzano i dati. Le app email controllano i messaggi. Le VPN analizzano il traffico. Launcher e widget restano in memoria perché devono essere pronti. Nessuna di queste attività è sbagliata da sola. Sommate, però, possono lasciare al telefono pochissimo margine.

I grandi aggiornamenti di sistema possono rendere il problema più visibile. Android 17 è stato distribuito prima sui Pixel supportati, mentre gli altri dispositivi idonei seguiranno più avanti nel 2026 secondo i calendari dei produttori. Dopo un aggiornamento importante, lascia al telefono il tempo di completare gli aggiornamenti delle app e le operazioni di pulizia in background prima di giudicare le prestazioni. Ma se 4 GB erano già pochi con Android 14 o 15, Android 17 non renderà magicamente il dispositivo più capiente.

## Cosa aiuta davvero

Non continuare a chiudere tutte le app dal selettore delle app recenti. Può sembrare utile, ma Android sa già come recuperare memoria. Chiudere tutto a forza spesso fa sì che le app riavviino poco dopo i propri servizi in background, consumando più CPU e batteria rispetto a lasciarle aperte.

Limita invece l'attività in background. Apri **Impostazioni > App**, scegli un'app e cerca le opzioni relative alla batteria o all'uso in background. Limita le app usate di rado se non ti servono notifiche immediate. Buoni candidati sono app per acquisti, giochi, viaggi, consegna di cibo, notizie e social che non devono avvisarti in tempo reale.

Disinstalla le app inutilizzate. Limitare l'attività in background aiuta, ma rimuovere l'app è più pulito. Meno app significano meno servizi, meno registrazioni push, meno attività di aggiornamento e minore pressione sulla memoria interna.

Mantieni libero spazio di archiviazione. Poca RAM e memoria interna piena sono problemi diversi, ma sui telefoni più vecchi compaiono spesso insieme. Se la memoria interna supera l'85-90 %, fai pulizia. Un telefono con poca RAM e memoria quasi piena si comporta peggio di un dispositivo che ha soltanto uno dei due problemi.

Usa versioni Lite o web quando ha senso. Su un telefono con poca RAM, una sessione leggera nel browser può pesare meno di un'app social completa con video in background, notifiche, widget e contenuti multimediali in cache.

Se il telefono sembra lento, puoi disattivare o ridurre le animazioni. Nelle Opzioni sviluppatore imposta **Scala animazione finestra**, **Scala animazione transizione** e **Scala durata animatore** su 0,5x oppure disattivale. Non aggiunge RAM. Riduce soltanto l'attesa percepita tra un tocco e l'altro, e a volte basta per rendere sopportabile un telefono al limite.

## La RAM virtuale non è RAM reale

Samsung la chiama RAM Plus. Xiaomi usa il nome Estensione memoria. OnePlus e altri produttori hanno funzioni simili. L'idea è semplice: il telefono usa una parte della memoria interna come spazio aggiuntivo simile allo swap.

Può aiutare a evitare che vengano chiuse troppe app sui dispositivi con poca RAM. Non rende la memoria interna veloce quanto la RAM fisica. La memoria UFS è rapida per essere uno spazio di archiviazione, ma la RAM è di un'altra categoria. Su un dispositivo con poca RAM, la memoria virtuale può ridurre i ricaricamenti. Su un telefono con 8 GB o 12 GB, spesso la differenza è difficile da notare.

C'è anche un compromesso. Più RAM virtuale significa meno memoria interna disponibile, e le scritture continue non sono gratuite. Non la disattiverei alla cieca, ma non comprerei neppure un telefono perché la scheda tecnica promette 8 GB + 8 GB di RAM virtuale. Il primo numero conta molto di più.

## Quando la risposta è un telefono nuovo

Se hai limitato le app in background, rimosso ciò che non serve, liberato spazio e il telefono continua a ricaricare tutto, l'hardware potrebbe semplicemente essere insufficiente per il tuo modo di usarlo.

Per un uso di base, 4 GB funzionano ancora se hai pazienza e mantieni il telefono pulito. Per il multitasking normale, 6 GB sono ormai il minimo pratico. Se vuoi tenere il telefono per diversi anni, 8 GB sono una scelta più sicura. Chi usa molte app contemporaneamente, gioca o svolge attività pesanti trae vantaggio da 12 GB.

Un ripristino dei dati di fabbrica può far sparire per un po' la pressione sulla memoria, perché il telefono ha meno app e uno stato in background più pulito. Poi reinstalli le app, accedi di nuovo a tutti i servizi e il problema torna. Non è un fallimento. È il telefono che mostra il proprio limite.
