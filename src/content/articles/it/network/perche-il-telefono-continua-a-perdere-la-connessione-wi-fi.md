---
title: "Perché il telefono continua a perdere la connessione Wi-Fi?"
description: "La versione più irritante è questa: il Wi-Fi funziona in cucina, cade in camera da letto, si ricollega per dieci secondi e poi sparisce di nuovo. Nulla sembra chiaramente guasto. Il router è acceso, la password è corretta e le app continuano a segnalare \"nessuna connessione Internet\"."
listSummary: "La versione più irritante è questa: il Wi-Fi funziona in cucina."
hub: "network"
sourceNumber: 95
order: 6
tags: ["rete","connettivita","android","risoluzione-dei-problemi","guida"]
locale: "it"
draft: false
---
Parti da una domanda: anche gli altri dispositivi sulla stessa rete Wi-Fi si disconnettono? Se sì, occupati prima del router o della connessione Internet. Se cade solo il telefono, la causa riguarda probabilmente il telefono, il profilo di rete salvato o il modo in cui passa da una banda all'altra.

## Se si disconnettono più dispositivi, controlla prima il router

Riavvia il router prima di cercare soluzioni complicate. Scollegalo dalla corrente, attendi 30 secondi e ricollegalo. In questo modo elimini stati temporanei, rinnovi i lease DHCP e costringi i dispositivi connessi a negoziare di nuovo.

I router domestici possono comportarsi in modo strano dopo settimane di attività. Possono esaurire la memoria, conservare vecchie voci dei dispositivi o gestire male il roaming dopo un aggiornamento del firmware. Il riavvio non è una soluzione profonda, ma è il modo più rapido per distinguere un problema temporaneo da uno reale.

Se il problema ritorna, controlla il pannello di amministrazione o l'app del router. Cerca aggiornamenti del firmware, numero di dispositivi collegati e impostazioni dei canali. I router economici possono andare in difficoltà quando una casa ha 20 o più client attivi: telefoni, portatili, smart TV, speaker, telecamere, prese, orologi e tablet contano tutti.

La banda a 2,4 GHz è un'altra causa comune. Arriva più lontano dei 5 GHz, ma dispone di molti meno canali puliti. Nei condomini affollati, diversi router possono competere sullo stesso canale o su canali sovrapposti. Se scegli manualmente un canale, usa 1, 6 o 11 a 2,4 GHz e seleziona quello meno congestionato.

## Se si disconnette solo il telefono

Elimina la rete e collegati di nuovo. Su Pixel e telefoni con Android standard, vai in **Impostazioni > Rete e Internet > Internet**, apri la rete e tocca **Elimina**. Su Samsung, apri **Impostazioni > Connessioni > Wi-Fi**, seleziona la rete e scegli di dimenticarla. Poi inserisci di nuovo la password.

Questo cancella il profilo salvato. È utile dopo modifiche al router, cambi di password, passaggi tra WPA2 e WPA3 e casi in cui Android continua a riutilizzare dati di connessione non più validi.

Controlla anche se il telefono passa a un'altra rete salvata. Succede meno spesso di quanto si pensi, ma può capitare vicino a reti aperte, ripetitori, reti ospiti e vecchie reti di lavoro o bar. Elimina quelle che non usi più. Non serve conservare un museo di ogni hotspot incontrato.

## Le impostazioni della batteria possono far sembrare disconnesse le app

Doze e Risparmio energetico possono ritardare l'attività di rete in background quando il telefono è inattivo. Di solito il Wi-Fi non viene spento, ma messaggistica, backup, VPN e app per la casa intelligente possono comportarsi come se la connessione fosse sparita.

Alcuni produttori sono più aggressivi di altri. Xiaomi, OPPO, vivo e alcune versioni di OnePlus possono limitare l'attività in background più di Pixel. Samsung offre limiti all'uso in background e opzioni di risparmio energetico del Wi-Fi che possono cambiare il comportamento del telefono quando resta inattivo.

Se le interruzioni avvengono con lo schermo spento, controlla prima l'app interessata. Imposta l'uso della batteria senza restrizioni o rimuovila dagli elenchi delle app in sospensione. Non disattivare ogni funzione di risparmio energetico a livello globale, a meno che tu non voglia ricaricare più spesso.

## Il passaggio automatico può essere troppo intelligente

I telefoni Android moderni possono passare dal Wi-Fi ai dati mobili quando il Wi-Fi sembra debole o privo di accesso a Internet. In teoria è utile. In pratica può far sembrare instabile una rete Wi-Fi solo un po' lenta, perché il telefono continua a decidere di saperne di più.

Su Pixel, controlla **Impostazioni > Rete e Internet > Connettività adattiva**. Alcune versioni mostrano anche un'opzione di passaggio automatico nelle impostazioni Internet. Sui Galaxy, apri le impostazioni avanzate del Wi-Fi e cerca la funzione che passa automaticamente ai dati mobili.

Disattivala per un giorno se il telefono abbandona il Wi-Fi mentre gli altri dispositivi restano collegati. Se il problema scompare, hai trovato la causa.

## Band steering e roaming nelle reti mesh

Molti router usano lo stesso nome di rete per 2,4 GHz e 5 GHz. Router e telefono decidono quindi quale banda usare. Questa funzione si chiama band steering. I router buoni la gestiscono senza farsi notare. Quelli scadenti spostano il telefono avanti e indietro finché la connessione sembra guasta.

Una prova rapida consiste nel separare temporaneamente le bande. Assegna nomi diversi alle reti a 2,4 GHz e 5 GHz, poi collega il telefono a una sola. Usa 2,4 GHz quando contano distanza e pareti. Usa 5 GHz per la velocità vicino al router.

I sistemi mesh aggiungono un altro livello. Se il telefono resta aggrappato a un nodo debole invece di passare a quello più vicino, vedrai interruzioni mentre cammini per casa. Gli aggiornamenti del firmware del router spesso migliorano il roaming, ma conta anche la posizione. Un nodo mesh nascosto dietro la TV o dentro un mobile parte già svantaggiato.

## Potenza del segnale e posizione

Il Wi-Fi si indebolisce con distanza e ostacoli. Se il telefono funziona vicino al router ma cade due stanze più in là, probabilmente non è guasto. Sta solo ricevendo un segnale debole o disturbato.

Come riferimento approssimativo, un Wi-Fi intorno a -50 dBm è forte, -60 dBm va bene e sotto -70 dBm la stabilità può iniziare a peggiorare. Sotto -80 dBm, le disconnessioni intermittenti non sorprendono.

Solleva il router dal pavimento e tienilo lontano da pareti spesse, scaffali metallici, acquari e forni a microonde. Se possibile, mettilo vicino al centro della casa. Nelle abitazioni più grandi, un vero sistema mesh è in genere migliore di un ripetitore economico, perché i ripetitori spesso riducono la velocità e aggiungono un altro punto di roaming.

## Le impostazioni di sicurezza possono creare problemi su un solo dispositivo

WPA3 è lo standard di sicurezza Wi-Fi attuale, ma i telefoni più vecchi e i firmware datati dei router possono avere problemi con reti solo WPA3. Se un telefono Android si disconnette da una rete WPA3 mentre tutto il resto funziona, prova la modalità mista WPA2/WPA3.

Controlla anche filtro MAC, regole del controllo genitori e limite di dispositivi del router. Se il router usa un elenco autorizzato basato sugli indirizzi MAC, la funzione di indirizzo MAC casuale di Android può far apparire il telefono come un nuovo dispositivo. Su una rete domestica fidata puoi impostare, solo per quella rete, l'indirizzo MAC del dispositivo invece di quello casuale. Mantieni l'indirizzo casuale sulle reti pubbliche.

## Aggiornamenti software, incluso Android 17

Gli aggiornamenti principali di Android possono introdurre problemi di connessione. Possono anche far emergere vecchi difetti del router che erano già presenti. Android 17 è stato distribuito prima sui dispositivi Pixel supportati nel giugno 2026, mentre gli altri produttori lo rilasciano più tardi attraverso le proprie versioni software. Una discussione su un problema specifico di Pixel con Android 17 potrebbe quindi non riguardare un Samsung, Xiaomi o OnePlus che non ha ancora ricevuto la propria versione di Android 17.

Se il Wi-Fi ha iniziato a cadere subito dopo un aggiornamento, fai prima i controlli più semplici: riavvia telefono e router, installa eventuali aggiornamenti di sistema Google Play o patch di sicurezza mensili e poi elimina e aggiungi di nuovo la rete. Se serve, ripristina le impostazioni di rete.

Sui Pixel recenti, usa **Impostazioni > Sistema > Opzioni di ripristino > Reimposta Bluetooth e Wi-Fi**. Per la rete mobile esiste un'opzione separata. Su Samsung, usa **Impostazioni > Gestione generale > Ripristina > Ripristina impostazioni di rete**. L'operazione elimina reti Wi-Fi salvate, associazioni Bluetooth e altre personalizzazioni di rete, quindi tieni a portata di mano le password Wi-Fi.

## Quando potrebbe essere un guasto hardware

L'hardware è l'ultimo sospetto, non il primo. Ma può succedere. Cadute, contatto con liquidi, antenne invecchiate e danni alla scheda possono far fallire il Wi-Fi mentre le altre radio sembrano normali.

Prova il telefono su un'altra rete Wi-Fi. Poi ripeti il test in Modalità provvisoria. Se la connessione resta stabile in Modalità provvisoria, è probabile che interferisca un'app di terze parti. VPN, ad blocker, firewall, app di gestione del dispositivo e dubbie app di "ottimizzazione Wi-Fi" sono sospetti comuni.

Se il telefono si disconnette da più router, continua a farlo dopo il ripristino delle impostazioni di rete e mostra lo stesso problema in Modalità provvisoria, una riparazione professionale o la sostituzione diventano risposte realistiche.

## Risposte rapide

Perché il Wi-Fi cade solo quando lo schermo è spento? Di solito per restrizioni della batteria sulle app, comportamento della VPN o risparmio energetico del produttore. La radio Wi-Fi può essere ancora collegata, ma l'app non riesce a continuare a lavorare in background.

Una custodia può causare disconnessioni Wi-Fi? Una normale custodia in plastica, silicone o pelle incide poco. Le custodie metalliche o le piastre magnetiche possono ridurre il segnale, soprattutto quando è già debole.

Perché non funziona una sola rete Wi-Fi? Questo indica la configurazione del router o un profilo salvato danneggiato. Elimina la rete, collegati di nuovo e poi controlla band steering, modalità WPA, filtro MAC e firmware del router.
