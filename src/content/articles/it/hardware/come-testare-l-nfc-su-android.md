---
title: "Come testare l'NFC su Android"
description: "Metodi semplici per verificare se l'NFC funziona su uno smartphone Android, usando le Impostazioni, carte contactless, Google Wallet, la diagnostica Samsung, Xiaomi CIT e app di test NFC."
listSummary: "Metodi semplici per verificare se l'NFC funziona su uno smartphone Android."
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnostica","sensori","android","hardware","guida"]
locale: "it"
draft: false
---
Avvicini il telefono a un terminale di pagamento e non succede nulla. Ora hai due problemi: il pagamento non è riuscito e non sai se la causa è l'NFC, Google Wallet, la carta, la cover o il terminale.

Parti da una prova più semplice. Testare l'NFC è facile se separi la lettura hardware dai pagamenti.

## Controlla se il telefono ha l'NFC

Apri Impostazioni e cerca NFC. Su molti smartphone Android il percorso è Impostazioni > Dispositivi connessi > Preferenze di connessione > NFC. Su Samsung vai in Impostazioni > Connessioni > NFC e pagamenti contactless, quindi controlla l'app di pagamento indicata nella stessa schermata.

Se l'opzione NFC non compare, probabilmente il telefono non ha un chip NFC. È ancora abbastanza comune sui dispositivi Android economici, soprattutto sui modelli venduti in più varianti regionali. Una versione dello stesso telefono può includere l'NFC, mentre un'altra con un nome quasi identico può esserne priva.

Attiva l'NFC prima del test. Se vuoi provare i pagamenti, controlla anche l'app predefinita, che può essere Google Wallet, Samsung Pay o Samsung Wallet a seconda del paese e del modello.

## Prova con una carta contactless

È il test hardware più semplice. Usa una carta bancaria contactless, una tessera dei trasporti, un badge aziendale o un tag NFC. Appoggiala sul retro del telefono e spostala lentamente nella metà superiore del dispositivo.

Se l'NFC funziona, il telefono di solito vibra, emette un suono, mostra una schermata del wallet o mostra un messaggio simile a "tag sconosciuto". Qualsiasi reazione di questo tipo indica che il lettore e l'antenna NFC sono attivi.

Non succede nulla? Togli la cover e riprova. Placche metalliche, supporti magnetici, anelli e custodie a portafoglio spesse possono bloccare o indebolire il segnale NFC. La distanza di lettura è breve, quindi anche piccoli spostamenti fanno la differenza.

## Prova con un terminale di pagamento

Un pagamento contactless riuscito è un buon test nel mondo reale, perché verifica più della semplice lettura di un tag. Il telefono deve avere l'NFC attivo, un wallet supportato, una carta valida, un blocco schermo e la corretta app di pagamento predefinita.

Per Google Wallet, la guida ufficiale indica di controllare l'NFC in Impostazioni > Dispositivi connessi > Preferenze di connessione > NFC, quindi aprire Pagamenti contactless e selezionare Google Wallet come app predefinita. Sui telefoni Samsung i controlli equivalenti si trovano in Impostazioni > Connessioni > NFC e pagamenti contactless.

Se il telefono legge i tag ma i pagamenti non funzionano, probabilmente il chip NFC non è il problema. Controlla la configurazione del wallet, il supporto della banca, il blocco schermo, Google Play Services, l'integrità del dispositivo e l'app di pagamento predefinita.

## Usa un menu di diagnostica o un'app

Il percorso supportato da Samsung passa da Samsung Members. Apri l'app, tocca Supporto, quindi Vedi test o Diagnostica dello smartphone. Non tutti i modelli mostrano una voce NFC dedicata, ma l'app può controllare diversi componenti e indirizzarti all'assistenza se un test fallisce.

I telefoni Xiaomi, Redmi e POCO includono spesso l'NFC nella suite CIT. Apri il tastierino e inserisci `*#*#6484#*#*`, oppure prova `*#*#64663#*#*` se il primo codice non funziona. Nel test NFC, avvicina una carta o un tag al telefono e attendi il risultato.

Storicamente alcuni modelli Fairphone hanno offerto un test NFC manuale tramite un menu di assistenza, ma i codici cambiano tra le generazioni. Quando possibile, usa le istruzioni ufficiali per il tuo modello preciso.

Per un controllo rapido tramite app, NFC Check indica se Android rileva l'hardware NFC e se è attivo. NFC Tools è più adatta se vuoi leggere i tag e vedere ID, tipo di tecnologia e record NDEF.

## Trova la posizione dell'antenna

L'antenna NFC non si trova sempre nello stesso punto.

Su molti Samsung Galaxy S è nella parte alta e centrale del retro, vicino alle fotocamere. Sui Pixel si trova di solito nella zona superiore del retro. Sui telefoni Xiaomi e OnePlus la posizione cambia maggiormente da un modello all'altro.

Ecco perché un telefono funziona quando appoggi la zona del gruppo fotocamere, mentre un altro risponde soltanto quando il lettore tocca la parte centrale del retro. Se il manuale del telefono contiene un diagramma dell'antenna NFC, fidati di quello invece dei consigli generici.

## Cause comuni dei problemi NFC

La cover blocca il segnale. È una causa poco interessante, ma frequente. Prova il telefono senza custodia prima di cambiare impostazioni.

Stai usando il punto sbagliato. Muovi lentamente la carta o il telefono. Non agitarlo come se stessi leggendo un codice a barre.

L'NFC è disattivato oppure è selezionato il wallet sbagliato. Cerca NFC e Pagamenti contactless nelle Impostazioni.

Il telefono è bloccato quando il wallet richiede lo sblocco. Alcune versioni di Android consentono di leggere i tag con lo schermo acceso, mentre i pagamenti richiedono l'autenticazione. Considera separatamente i pagamenti e la semplice lettura dei tag.

Un aggiornamento recente ha cambiato il comportamento. Android 17 è arrivato prima sui Pixel supportati, mentre gli altri produttori Android distribuiranno in seguito le proprie versioni di Android 17. Se il problema NFC compare subito dopo un aggiornamento di un Pixel, cerca indicazioni specifiche per Pixel invece di presumere che riguardi anche Samsung, Xiaomi o OnePlus.

Il telefono è stato riparato. Le antenne NFC fanno spesso parte della cover posteriore, della bobina di ricarica wireless o di un gruppo con cavo flex. Se l'NFC ha smesso di funzionare dopo la sostituzione della batteria o della cover posteriore, l'antenna potrebbe non essere stata ricollegata correttamente.

## Quando l'hardware è probabilmente guasto

Se l'NFC è attivo, hai tolto la cover, diverse carte e tag non producono alcuna risposta, la modalità provvisoria non cambia nulla e un'app di diagnostica continua a non rilevare attività NFC, un guasto hardware diventa probabile.

Il chip può guastarsi, ma i danni all'antenna sono più comuni. Tra le possibili cause ci sono cadute, contatto con liquidi, riparazioni della cover posteriore e cavi flex inseriti male.

Per la maggior parte delle persone, la vera domanda è se valga la pena riparare l'NFC. Se usi ogni giorno i pagamenti contactless, la riparazione può avere senso. Se il telefono è vecchio e tutto il resto funziona, uno smartwatch contactless può essere un'alternativa meno costosa.
