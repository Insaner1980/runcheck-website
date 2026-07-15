---
title: "Come controllare le patch di sicurezza Android"
description: "Stai comprando uno smartphone usato, oppure il tuo non mostra una notifica di aggiornamento da mesi. La prima cosa da controllare non è la versione di Android. È la data della patch di sicurezza."
listSummary: "Stai comprando uno smartphone usato, oppure il tuo non mostra una notifica di aggiornamento da mesi."
hub: "software"
sourceNumber: 122
order: 4
tags: ["android","aggiornamenti","sicurezza","software","guida"]
locale: "it"
draft: false
---
Sulla maggior parte degli smartphone Android, apri la pagina Informazioni sullo smartphone nelle Impostazioni e cerca Aggiornamento della sicurezza Android o il livello patch di sicurezza. La data avrà un formato simile a 2026-06-05.

## Dove trovare la data della patch

Sui Pixel è visibile nella schermata Versione di Android. Troverai insieme la versione della piattaforma, l'aggiornamento della sicurezza Android, la data dell'aggiornamento di sistema Google Play e il numero build.

Samsung mostra queste informazioni in Impostazioni > Informazioni sul telefono > Informazioni software. Cerca la voce relativa al livello patch di sicurezza Android.

Sui telefoni Xiaomi, Redmi e POCO, parti dalla pagina principale con le informazioni sul dispositivo. Alcune versioni mostrano subito la data della patch. Altre la inseriscono nei dettagli della versione Android o di Xiaomi HyperOS.

OnePlus di solito riporta la stessa informazione nella pagina Informazioni sul dispositivo, all'interno dei dettagli software.

I produttori cambiano spesso l'organizzazione dei menu. Se non trovi il campo, usa la ricerca nelle Impostazioni e digita "patch di sicurezza".

## Cosa significa la data

Google pubblica i bollettini sulla sicurezza di Android. La data visualizzata sul telefono indica quale insieme di patch il produttore dichiara di aver incluso nel dispositivo.

La maggior parte dei bollettini usa due livelli. Una data che termina con il primo giorno del mese, per esempio 2026-06-01, copre i problemi principali di Android elencati in quel bollettino. Una data che termina con il quinto giorno comprende le correzioni del primo livello e quelle per componenti del fornitore, kernel e hardware indicate per quel mese.

Il bollettino di giugno 2026 specifica che i dispositivi con patch 2026-06-05 o successive includono tutte le correzioni del bollettino. Uno smartphone che mostra soltanto il livello del primo giorno contiene le correzioni principali, ma potrebbe non avere l'intero insieme relativo ai fornitori.

Android 17 è stato pubblicato insieme a note di sicurezza separate. I dispositivi Android 17 con livello patch 2026-07-01 o successivo correggono i problemi elencati in quelle note. Subito dopo l'uscita di una nuova versione di Android, la situazione può sembrare confusa perché la distribuzione del sistema operativo e il calendario dei bollettini mensili non coincidono sempre in modo ordinato.

## Controlla se è disponibile un aggiornamento

Trovare la data attuale è il primo passo. Il secondo è verificare se c'è un aggiornamento più recente in attesa.

Sulla maggior parte dei telefoni, apri Impostazioni > Sistema > Aggiornamenti software e controlla la disponibilità di aggiornamenti.

Su Samsung usa Impostazioni > Aggiornamenti software > Scarica e installa.

Sui Pixel puoi aprire Impostazioni > Sistema > Aggiornamenti software. Di norma il telefono invia una notifica quando una nuova build è pronta, ma un controllo manuale resta utile.

Su Xiaomi, Redmi e POCO, apri la pagina Xiaomi HyperOS o quella degli aggiornamenti di sistema dalle informazioni sul dispositivo. Il nome esatto dipende dal modello e dal ramo software.

Usa il Wi-Fi e carica prima il telefono. Google consiglia almeno il 75 % di batteria prima di aggiornare. È un consiglio poco entusiasmante, ma sensato.

## Controlla anche Project Mainline

Android ha un secondo canale di aggiornamento chiamato Project Mainline. Nelle Impostazioni compare di solito come data dell'Aggiornamento di sistema Google Play. Aggiorna alcuni moduli di sistema tramite l'infrastruttura di Google Play, senza aspettare un firmware OEM completo.

Su molti telefoni trovi questa voce nella schermata Versione di Android. Su altri è nella sezione Sicurezza e privacy. Se il percorso non coincide, cerca "Aggiornamento di sistema Google Play" nelle Impostazioni.

Questa data è distinta da quella della patch principale di Android. È preferibile che entrambe siano ragionevolmente recenti.

Gli aggiornamenti Mainline sono utili, soprattutto su Android 10 e versioni successive, ma non sostituiscono le patch del produttore. Non possono correggere ogni vulnerabilità del kernel, dei driver, del modem o dei componenti specifici del fornitore.

## Quanto deve essere recente la patch?

Uno smartphone con una patch degli ultimi due mesi è in buone condizioni. Essere indietro di tre o quattro mesi non è ideale, ma è comune nei programmi di aggiornamento più lenti. Sei mesi meritano attenzione, soprattutto se usi il telefono per operazioni bancarie, lavoro, viaggi o autenticazione a due fattori.

Un anno è diverso. Significa che il telefono ha saltato molti bollettini pubblici, alcuni dei quali possono includere vulnerabilità critiche o già sfruttate. A quel punto la domanda non è "il telefono si accende ancora?". Certo che sì. La domanda è se debba ancora contenere dati sensibili.

I Pixel ricevono di solito le patch per primi. I Galaxy di fascia alta inseriti nel programma mensile spesso seguono rapidamente, anche se i tempi cambiano in base a paese e operatore. Gli altri produttori adottano cadenze mensili, trimestrali o irregolari, soprattutto sui modelli economici.

## Se non è disponibile alcun aggiornamento

Il dispositivo potrebbe essere fuori supporto. Controlla la pagina ufficiale del produttore o l'elenco degli aggiornamenti di sicurezza relativo al modello esatto.

L'operatore potrebbe ritardare la build. Gli smartphone venduti dagli operatori ricevono talvolta l'aggiornamento dopo i modelli sbloccati, perché il firmware deve passare test e approvazioni aggiuntivi.

La distribuzione potrebbe non avere ancora raggiunto la tua area. Gli aggiornamenti Android arrivano spesso per fasi, quindi un paese può ricevere una patch giorni o settimane prima di un altro.

Oppure il telefono potrebbe avere già ricevuto la sua ultima patch. Succede spesso con i modelli economici meno recenti.

## Domande comuni

### Le patch di sicurezza sono la stessa cosa degli aggiornamenti di Android?

No. Una patch di sicurezza corregge vulnerabilità. Un aggiornamento principale, per esempio da Android 16 ad Android 17, cambia la piattaforma, le API, il comportamento e spesso l'interfaccia del produttore. Gli aggiornamenti principali includono di solito anche correzioni di sicurezza, ma non sono la stessa cosa.

### Posso installare manualmente le patch di sicurezza?

Solo in casi limitati. Sui Pixel puoi installare tramite ADB i pacchetti OTA ufficiali, purché siano esattamente quelli previsti per il dispositivo. Per i Galaxy, Samsung indirizza gli utenti verso il normale sistema di aggiornamento o Smart Switch. Odin viene usato per installare firmware ufficiali, ma non è uno strumento pubblico di aggiornamento supportato da Samsung per l'utente comune.

Qualunque procedura manuale richiede la build esatta per il modello e può causare problemi se viene seguita senza attenzione. Per la maggior parte delle persone, la schermata normale degli aggiornamenti è la scelta corretta.

### La mia patch ha più di un anno. Il telefono non è più sicuro?

Non significa che il dispositivo sia sicuramente compromesso, ma il rischio non è più trascurabile. Se contiene app bancarie, account di lavoro, file privati o il tuo Account Google principale, sostituiscilo oppure sposta quegli account su un dispositivo supportato. Se è un telefono di riserva usato per i contenuti multimediali e senza accessi sensibili, il rischio è minore, ma evita di installare APK casuali.

### Tutti i telefoni ricevono le patch nello stesso momento?

No. Google pubblica il bollettino Android, ma ogni produttore e operatore decide quando l'aggiornamento raggiunge ciascun modello. I Pixel ricevono per primi le versioni della piattaforma Android, mentre Samsung e gli altri OEM seguono i propri calendari. I telefoni economici ricevono spesso meno aggiornamenti.
