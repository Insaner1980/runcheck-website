---
title: "Come eseguire il backup dello smartphone Android prima di risolvere un problema"
description: "Esegui il backup prima di cancellare i dati di un'app, reimpostare le preferenze delle app, usare la modalità di ripristino o ripristinare i dati di fabbrica. Alcuni interventi non comportano rischi. Altri sembrano innocui, finché non spariscono un file locale, la cronologia di una chat o un codice 2FA."
listSummary: "Esegui il backup prima di cancellare i dati di un'app."
hub: "device-health"
sourceNumber: 9
order: 5
tags: ["prestazioni","velocita","android","ottimizzazione","risoluzione-dei-problemi"]
locale: "it"
draft: false
---
Un buon backup non deve essere complicato. Devi solo sapere cosa salva già Android, cosa lascia fuori e quali app richiedono una procedura propria prima di fare qualcosa di distruttivo.

## Cosa salva automaticamente Google

Quando lo smartphone Android è collegato a un Account Google, alcuni dati sono già sincronizzati fuori dal dispositivo. I contatti salvati in Contatti Google, gli eventi di Google Calendar, Gmail e molte impostazioni delle app Google tornano dopo il ripristino dei dati di fabbrica quando accedi di nuovo. Google Foto salva anche foto e video, se il backup è attivo nell'app.

Il backup Google integrato in Android copre più dati di quanto molti pensino, ma meno di quanto spesso si dia per scontato. Può includere app e parte dei relativi dati, cronologia chiamate, contatti, impostazioni del dispositivo e messaggi SMS e MMS. Con Google Messaggi possono essere inclusi anche i messaggi RCS. Con Telefono di Google possono rientrare nel backup anche le impostazioni delle chiamate e i numeri bloccati.

La parte meno prevedibile riguarda i dati delle app. Android consente agli sviluppatori di usare il proprio sistema di backup, ma ogni app può limitare ciò che viene salvato o rinunciare del tutto alla funzione. App bancarie, app di autenticazione a due fattori e alcuni giochi spesso non si ripristinano come ti aspetti. Non è necessariamente un errore del backup. Dipende dalle regole impostate dall'app.

I file locali sono il rischio maggiore. Download, PDF, registrazioni, documenti, musica e file salvati in cartelle specifiche delle app non vanno affidati alla cieca al backup del dispositivo. Nel febbraio 2026 Google ha aggiunto in Google Play services v26.06 una funzione che può salvare automaticamente su Google Drive i documenti scaricati sui telefoni supportati. Considerala una protezione aggiuntiva per quei documenti, non un backup completo della memoria interna.

## Android 17 ha cambiato i tempi, non la checklist

Android 17 ha iniziato a essere distribuito il 16 giugno 2026, prima sulla maggior parte dei Pixel supportati. Gli altri smartphone Android compatibili lo ricevono più avanti nel corso del 2026, secondo i tempi del produttore e dell'operatore.

Per un certo periodo, quindi, due telefoni affiancati possono usare versioni diverse di Android. Un Pixel può avere già Android 17 mentre un Samsung, OnePlus, Motorola o Xiaomi è ancora in attesa. La checklist del backup non cambia, ma il percorso e le diciture nelle Impostazioni possono essere leggermente diversi.

Su molti telefoni, il punto di partenza è **Impostazioni > Google > Tutti i servizi > Backup**. Sui Pixel può comparire anche **Impostazioni > Google > Backup**. Su Samsung Galaxy, cerca **Impostazioni > Account e backup > Backup dei dati**.

## Controlla il backup prima di intervenire

Apri la schermata del backup e verifica due cose: che la funzione sia attiva e quando è stato completato l'ultimo backup. Se la data è vecchia, tocca **Esegui backup adesso** e attendi che finisca prima di continuare.

Non avere fretta. Secondo Google, il completamento del backup e del ripristino può richiedere fino a 24 ore, anche se i backup più piccoli spesso terminano molto prima. Se stai per ripristinare i dati di fabbrica, aspetta che la schermata mostri un backup recente riuscito invece di presumere che sia stato completato in background.

Se il telefono resta su un messaggio come "In attesa del backup", controlla prima le cose più semplici. Collegalo al Wi-Fi, mettilo in carica, aggiorna i servizi Google e l'app Google One se richiesto e verifica che lo spazio del tuo Account Google non sia esaurito. Lo spazio gratuito è condiviso tra Gmail, Drive e Foto, quindi può riempirsi più rapidamente del previsto.

## Copia manualmente i file locali

Per i file locali, una copia manuale resta la soluzione di riserva più sicura.

Collega il telefono a un computer con un cavo USB-C. Quando compare la notifica USB, toccala e scegli **Trasferimento file**. La memoria interna dovrebbe apparire sul computer.

Copia queste cartelle, se esistono:

- DCIM, per foto e video della fotocamera.
- Download, per PDF, biglietti, installer, moduli e file scaricati dal browser.
- Documents, per i file salvati dalle app di produttività.
- Music e Recordings, se conservi audio localmente.
- Pictures e Movies, soprattutto se alcune app salvano contenuti fuori da DCIM.
- Le cartelle multimediali di WhatsApp, se presenti. Sulle versioni recenti di Android possono trovarsi in Android/media/com.whatsapp/WhatsApp/Media anziché direttamente nella memoria interna.

Anche con il backup di Google Foto attivo, conserva una copia locale di DCIM prima di un ripristino dei dati di fabbrica. Affidare foto insostituibili a una sola opzione cloud è un rischio inutile. Basta usare l'account sbagliato, esaurire lo spazio disponibile o dimenticare una cartella non selezionata per perdere qualcosa di importante.

Chi usa Samsung ha un'altra buona possibilità: Samsung Smart Switch. Installa Smart Switch su un PC Windows o un Mac, collega il Galaxy tramite USB, scegli **Backup** e controlla le categorie prima di iniziare. Smart Switch può salvare dati come chiamate, contatti, messaggi e app, ma Samsung avverte che non tutti i tipi di file e tutti gli elementi sono supportati. Usalo come rete di sicurezza ampia, non come unica copia dei file più importanti.

## Salva separatamente le app di messaggistica

Le app di messaggistica seguono regole proprie. Non dare per scontato che Android le gestisca tutte.

WhatsApp usa una procedura dedicata. Apri **WhatsApp > Impostazioni > Chat > Backup delle chat** e controlla l'Account Google, la frequenza e la data dell'ultimo backup. Quando passi a un nuovo smartphone Android o ripristini il dispositivo dopo averlo cancellato, le chat tornano solo se il backup era stato attivato prima del ripristino.

Le normali chat cloud di Telegram sono archiviate sui server e ricompaiono quando accedi. Le Chat segrete sono diverse. Restano legate al dispositivo, non fanno parte del cloud di Telegram e non vengono trasferite su un altro telefono.

Signal offre più di un percorso. I Signal Secure Backups sono facoltativi, crittografati end-to-end e protetti da una chiave di recupero. Signal supporta anche i backup locali su Android, salvati in una cartella crittografata sul dispositivo. Per quest'ultima opzione, copia l'intera cartella del backup in un luogo sicuro e conserva la chiave di recupero. Senza entrambe, il backup non serve.

## Proteggi le app di autenticazione e la 2FA

È il passaggio che molti saltano. Ed è anche quello che può impedire l'accesso agli account più importanti.

Google Authenticator può sincronizzare i codici con l'Account Google attivo nell'app. Apri Google Authenticator e controlla l'icona dell'account in alto. Se lo usi senza un profilo Google collegato, trasferisci manualmente i codici prima del ripristino: apri il menu, scegli **Trasferisci account**, poi **Esporta account**, e scansiona i codici QR con un altro dispositivo.

Microsoft Authenticator supporta il backup cloud, ma un backup Android si ripristina soltanto su Android e un backup iOS soltanto su iOS. Nell'app, apri **Impostazioni**, attiva **Backup nel cloud** e controlla quale account Microsoft personale verrà usato per il recupero. Gli account di lavoro e di istituto possono comunque richiedere un nuovo accesso dopo il ripristino.

Authy supporta backup cloud crittografati e sincronizzazione tra dispositivi mobili. Verifica che i backup siano attivi e di conoscere la password del backup. Authy non può recuperarla al posto tuo.

Salva anche i codici di recupero di ogni servizio protetto da 2FA. Conservali in un gestore di password oppure stampali e riponili in un luogo privato. Gli screenshot sono meglio di niente, ma inseriscono materiale utile al recupero dell'account nella libreria fotografica, che potrebbe non essere il posto giusto.

## Quali operazioni richiedono un backup completo

Cancellare la cache di un'app elimina file temporanei. Non dovrebbe rimuovere account, documenti, foto o dati salvati dall'app. Per questa sola operazione, di solito non serve un backup completo.

Cancellare i dati di un'app è diverso. L'app torna allo stato di una nuova installazione. Note locali, download, sessioni di accesso, mappe offline, progressi nei giochi e impostazioni specifiche possono sparire. Salva prima i dati di quell'app.

La Modalità provvisoria disattiva le app di terze parti mentre Android viene eseguito in quella modalità. Non le cancella. Riavvia normalmente e dovrebbero tornare disponibili. Il backup è facoltativo, a meno che la Modalità provvisoria faccia parte di un intervento più ampio.

La cancellazione della partizione cache, sui telefoni che offrono ancora questa opzione, rimuove file temporanei di sistema dalla modalità di ripristino. I dati personali dovrebbero restare intatti, ma stai comunque lavorando in una schermata di basso livello. Esegui prima il backup, se il dispositivo è abbastanza stabile da permetterlo.

Il ripristino dei dati di fabbrica cancella il telefono. Senza eccezioni. Su Samsung Galaxy, il percorso è in genere **Impostazioni > Gestione generale > Ripristina > Ripristino dati di fabbrica**. Su Pixel e molti telefoni con Android quasi stock, usa **Impostazioni > Sistema > Opzioni di reimpostazione > Cancella tutti i dati (ripristino dati di fabbrica)**. Non iniziare finché non hai controllato backup Google, backup delle foto, copia dei file locali, backup delle app di messaggistica e backup 2FA.

## Prima del ripristino, controlla FRP

Factory Reset Protection (FRP) è il blocco antifurto di Android. Dopo un ripristino, Android può chiedere il blocco schermo o uno degli Account Google già sincronizzati sul telefono. Se non puoi fornirli, potresti restare bloccato durante la configurazione finché la proprietà non viene verificata.

Prima di arrivare al ripristino dei dati di fabbrica, controlla l'indirizzo dell'Account Google presente sul telefono e prova la password in un browser o su un altro dispositivo. Verifica anche PIN, sequenza o password del telefono.

Non rimuovere l'Account Google soltanto per evitare FRP quando stai ripristinando il tuo telefono per risolvere un problema. Il backup cloud resta associato all'account, ma rimuoverlo dal dispositivo può complicare sincronizzazione e configurazione proprio quando devi verificare credenziali e ripristino. Vendere o cedere il telefono è un'operazione diversa. Qui l'obiettivo è semplice: conferma le credenziali, completa il backup e ripristina il dispositivo solo dopo aver escluso gli interventi meno rischiosi.
