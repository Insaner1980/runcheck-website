---
title: "Che cos'è una VPN e influisce sulla velocità del telefono?"
description: "Una guida chiara a ciò che fa una VPN su Android, al suo effetto su velocità e batteria e ai casi in cui ha senso usarla."
listSummary: "Una guida chiara a ciò che fa una VPN su Android."
hub: "network"
sourceNumber: 99
order: 10
tags: ["rete","connettivita","android","risoluzione-dei-problemi","guida"]
locale: "it"
draft: false
---
Una VPN cambia il percorso seguito dal traffico Internet del telefono. Invece di collegarsi direttamente tramite la rete Wi-Fi o l'operatore mobile, le app inviano prima il traffico attraverso un tunnel cifrato verso un server VPN. I siti e le app vedono l'indirizzo IP del server VPN, non il normale indirizzo IP pubblico del telefono.

Sembra più misterioso di quanto sia. Una VPN è utile, ma non è uno scudo assoluto per la privacy.

## Che cosa nasconde davvero una VPN

Quando una VPN è attiva, il proprietario della rete Wi-Fi, il gestore dell'hotspot o l'operatore mobile può in genere vedere che il telefono è collegato a un server VPN. Può anche vedere quanta quantità di dati viene trasferita. Non dovrebbe però riuscire a vedere i singoli siti e le destinazioni delle app all'interno del tunnel, a condizione che la VPN funzioni correttamente e gestisca anche il traffico DNS.

A quel punto, però, il provider VPN si trova nel mezzo. Può vedere i metadati della connessione e, a seconda di come è costruito il servizio, potrebbe avere accesso ad altre informazioni. Per questo la scelta del provider conta. Una VPN gratuita poco trasparente può essere peggiore, per la privacy, di non usare alcuna VPN.

Su Android, un'app VPN funziona come servizio persistente in background. Di solito compare una piccola icona a forma di chiave nella barra di stato. Se l'app non usa lo split tunneling, il traffico di browser, app e servizi di sistema passa attraverso il tunnel VPN.

## Perché una VPN può rallentare il telefono

Ogni VPN aggiunge lavoro. Il telefono cifra i pacchetti, li invia al server VPN, aspetta che il server li inoltri e riceve la risposta attraverso lo stesso percorso al contrario.

Cambiano soprattutto due cose:

- La latenza aumenta. Un server VPN vicino può aggiungere solo un piccolo ritardo. Un server dall'altra parte del mondo può rendere più lenti navigazione, giochi e videochiamate.
- La velocità di trasferimento può diminuire. La cifratura richiede elaborazione e il server VPN può diventare il collo di bottiglia se è affollato o molto lontano.

Con una buona VPN, un server vicino e un protocollo moderno, durante navigazione e messaggi potresti quasi non notare differenze. Con un server distante, un nodo gratuito sovraccarico o un protocollo meno efficiente, il rallentamento può essere evidente.

Il confronto utile è questo: una connessione WireGuard verso un server nel tuo Paese può sembrare quasi normale, mentre OpenVPN TCP verso un server a 8.000 km può rendere pesanti anche pagine semplici.

## Il protocollo conta

Le app VPN permettono spesso di scegliere un protocollo. Alcune nascondono il nome dietro opzioni come `Smart`, `Automatico` o una modalità proprietaria.

WireGuard è il primo protocollo moderno che proverei quando l'app lo supporta. Ha un'architettura più piccola rispetto ai protocolli meno recenti e in genere offre buone prestazioni sui telefoni.

OpenVPN è più vecchio e molto diffuso. Resta utile, soprattutto sulle reti che bloccano protocolli più recenti, ma spesso risulta più lento. OpenVPN UDP è in genere più rapido di OpenVPN TCP. TCP può aiutare su reti instabili, ma aggiunge altro overhead.

IKEv2/IPsec è ancora comune sui dispositivi mobili perché gestisce bene il passaggio tra Wi-Fi e dati mobili. Può essere un buon compromesso, soprattutto per le VPN aziendali.

Se la VPN è lenta, non cambiare subito provider. Prova prima un server vicino e un protocollo diverso.

## Il consumo di batteria esiste, ma non c'è una percentuale universale

Una VPN può consumare più batteria perché il telefono mantiene aperto il tunnel e cifra il traffico. Non esiste una percentuale valida per tutti. Luminosità dello schermo, qualità del segnale, sincronizzazioni in background, streaming video e protocollo VPN cambiano molto il risultato.

Con navigazione leggera e messaggistica, il consumo aggiuntivo è spesso troppo piccolo per comparire chiaramente nelle statistiche. Se guardi video per ore tramite VPN su una rete mobile debole, invece, può diventare visibile.

L'ottimizzazione della batteria può anche interrompere la VPN. Se continua a disconnettersi, apri le impostazioni della batteria dell'app VPN e consenti l'attività senza restrizioni in background. La formulazione varia tra i marchi, ma di solito la trovi in `Impostazioni > App > [app VPN] > Batteria`.

## VPN sempre attiva e kill switch

Android 7.0 e versioni successive supportano la VPN sempre attiva. Android può avviare la VPN quando il dispositivo si accende e cercare di mantenerla in funzione finché il telefono resta acceso. Può anche attivare `Blocca connessioni senza VPN`, funzione spesso chiamata kill switch.

Su Pixel e su molti telefoni Android standard, vai in `Impostazioni > Rete e internet > VPN`, quindi tocca l'icona delle impostazioni accanto al profilo VPN. Samsung e Xiaomi possono spostare il menu, quindi cerca `VPN` nelle Impostazioni se non lo trovi.

Il kill switch è utile, ma ha un compromesso molto concreto. Se l'app VPN si arresta, il server non è raggiungibile o il risparmio energetico sospende l'app, Android può bloccare tutto l'accesso a Internet finché la VPN non torna attiva. Può sembrare un guasto del Wi-Fi anche quando il Wi-Fi funziona perfettamente.

## Quando una VPN può migliorare la velocità

Sembra un controsenso, ma in alcuni casi una VPN può aumentare la velocità.

Se una rete limita determinati tipi di traffico, il tunnel può nascondere che cosa contengono i dati. La rete vede comunque traffico cifrato diretto a un server VPN, ma può non riconoscere con la stessa facilità uno streaming video, una sessione di gioco o una chiamata VoIP.

Questo non significa che la VPN crei larghezza di banda. Non può trasformare un segnale 4G debole in un 5G forte. Non può riparare un router difettoso. Cambia soltanto il percorso e nasconde al gestore della rete locale il tipo di traffico.

## Le VPN gratuite meritano più diffidenza

I server costano e una VPN gratuita deve finanziarsi in qualche modo. Alcuni servizi usano un piano a pagamento. Altri si sostengono con pubblicità, raccolta dati, limiti di traffico, infrastrutture scarse o pratiche peggiori.

Il piano gratuito di Proton VPN è una delle eccezioni più note perché offre dati illimitati, non mostra pubblicità e dichiara una politica no-log. Limita però la scelta dei server rispetto ai piani a pagamento. È una versione ragionevole del compromesso.

La versione sbagliata è un'app VPN gratuita con proprietà poco chiara, permessi aggressivi, nessun audit, un modello economico inspiegabile e un'informativa sulla privacy quasi vuota. Non installarla su un telefono che usi per banca, lavoro o messaggi privati.

## Quando conviene usare una VPN su Android

Una VPN ha più senso su Wi-Fi pubblici, reti di hotel, aeroporti, bar, appartamenti condivisi e reti scolastiche o aziendali che non controlli. È utile anche quando vuoi impedire al provider Internet o all'operatore mobile di vedere le destinazioni del traffico a livello di rete.

Sul Wi-Fi di casa, il vantaggio dipende da ciò che ti interessa. Se vuoi nascondere al provider le destinazioni della navigazione, lasciala attiva. Se cerchi la massima velocità e la latenza più bassa per giochi o videochiamate, disattivala oppure usa lo split tunneling per quelle app.

Lo split tunneling vale la pena. Puoi far passare nella VPN navigazione sensibile, messaggistica e traffico su reti Wi-Fi sconosciute, lasciando fuori le app che funzionano male dietro una VPN, come alcune app bancarie.

## Da che cosa non protegge una VPN

Una VPN non blocca il phishing. Non rende sicura una falsa pagina bancaria. Non protegge un account con una password riutilizzata. Non elimina malware dal telefono. Non rende affidabile un provider VPN che non lo è.

Protegge un solo livello: l'instradamento e la riservatezza del traffico tra il telefono e il server VPN.

È utile. Non chiederle di svolgere ogni compito di sicurezza.

## Risposte rapide

Una VPN nasconde l'attività al mio operatore?

Nasconde all'operatore i siti e le destinazioni delle app all'interno del tunnel, ma l'operatore può comunque vedere che stai usando una VPN e quanti dati trasferisci. Le normali chiamate cellulari e gli SMS non passano attraverso la VPN.

Una VPN può bloccare alcune app?

Sì. App bancarie, servizi di streaming, app aziendali e alcuni giochi possono bloccare il traffico VPN o considerarlo sospetto. Usa lo split tunneling quando il problema riguarda una sola app.

Conviene lasciarla sempre attiva?

Sulle reti pubbliche, sì. A casa dipende da quanto contano per te privacy e velocità. Prova le app che usi normalmente prima di attivare la VPN sempre attiva insieme a `Blocca connessioni senza VPN`.

Funziona anche con i dati mobili?

Sì. Una VPN funziona su Wi-Fi e dati mobili. Sulla rete mobile continuano però a contare segnale debole e congestione dell'operatore, quindi la VPN può sembrare più lenta semplicemente perché la connessione di base è già in difficoltà.
