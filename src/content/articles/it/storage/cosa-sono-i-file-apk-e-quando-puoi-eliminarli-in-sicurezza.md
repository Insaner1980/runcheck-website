---
title: "Cosa sono i file APK e quando puoi eliminarli in sicurezza"
description: "Hai trovato in Downloads un file che termina con .apk e non ricordi cosa sia? Nella maggior parte dei casi è semplicemente l'installer di un'app Android rimasto sul telefono dopo l'installazione o la condivisione dell'app."
listSummary: "Hai trovato in Downloads un file che termina con .apk e non ricordi cosa sia?"
hub: "storage"
sourceNumber: 84
order: 6
tags: ["memoria","android","pulizia","ottimizzazione","guida"]
locale: "it"
draft: false
---
APK significa Android Package Kit. È uno dei formati di pacchetto usati da Android per installare le app. Per la pulizia, la cosa importante è questa: il file APK che vedi in Downloads non è l'app in esecuzione sul telefono. È l'installer.

Dopo aver installato l'app, eliminare l'APK rimasto non disinstalla l'app e non ne cancella le impostazioni.

## Da dove arrivano i file APK

La maggior parte dei file APK visibili proviene dal sideloading. Potresti aver scaricato un'app dal sito dello sviluppatore, da APKMirror, F-Droid, da un portale aziendale interno o da un'altra fonte esterna a Google Play. Dopo l'installazione, il file resta spesso in Downloads.

Anche le app di messaggistica sono una fonte comune. Qualcuno invia un APK tramite WhatsApp, Telegram, email o una chat di lavoro. Lo apri una volta, oppure non lo installi affatto, e il file resta lì a occupare spazio.

Sviluppatori e utenti aziendali incontrano più spesso file APK perché build di prova, app private e aggiornamenti interni vengono ancora condivisi come file autonomi. È normale nello sviluppo. È meno normale che sul telefono di una persona comune compaia un APK casuale con un nome vago.

## Puoi eliminare i file APK?

Sì, se l'APK si trova nel normale spazio dell'utente, ad esempio in Downloads, Documents, nella cartella di un'app di messaggistica o nella categoria dei file di installazione del file manager.

Eliminare quel file rimuove soltanto il pacchetto di installazione. L'app vera e propria si trova altrove e Android conserva separatamente i suoi dati. Se cancelli com.example.app.apk da Downloads, l'app installata non ne risente.

Esiste un'importante eccezione, ma la maggior parte delle persone non la incontrerà: gli APK di sistema nei percorsi come /system/app/ o /system/priv-app/ fanno parte di Android o del software del produttore. Normalmente non puoi vederli né modificarli senza accesso root. Non toccarli se non sai esattamente cosa stai facendo.

## Come trovare i file APK

Apri il file manager. Su molti telefoni si tratta di Files by Google, Samsung My Files, Xiaomi File Manager o dell'app Files di Motorola.

Parti da Downloads. Poi cerca .apk. Su molti dispositivi Files by Google mostra anche una categoria **File di installazione**, che è il percorso più rapido quando compare.

Controlla il nome prima di eliminare il file. Un elemento chiamato Signal-Android-7.XX.apk o app-release.apk può essere facile da riconoscere se hai appena installato l'app. Un file con una stringa casuale o un nome di pacchetto, come com.company.name.apk, richiede un po' più di attenzione.

Se l'app è già installata e non ti serve una copia di backup dell'installer, elimina il file.

## APK e AAB nel 2026

Google Play ha spostato gran parte della normale distribuzione delle app dai file APK caricati direttamente dagli sviluppatori. Da agosto 2021, le nuove app su Google Play devono usare Android App Bundle, o AAB, come formato standard di pubblicazione. Google Play genera poi APK ottimizzati per la configurazione di ogni dispositivo, così il telefono scarica soltanto il codice e le risorse necessari.

Questo non significa che gli APK siano scomparsi. Android continua a installarli dietro le quinte e gli sviluppatori li usano ancora per test, distribuzione aziendale e alcune app esterne a Google Play. Se trovi file APK separati nella cartella Downloads, quasi certamente provengono da un download manuale, da un allegato, da uno strumento di backup o da una procedura meno recente.

## Conviene conservare qualche file APK?

A volte.

Conserva un APK se appartiene a un'app difficile da scaricare di nuovo, ad esempio un'app limitata a una regione, una build aziendale privata, una vecchia versione che usi intenzionalmente o un'app open source affidabile proveniente da una fonte che conosci. Anche in questo caso, spostalo in una cartella dal nome chiaro, così in futuro saprai perché è lì.

Elimina gli altri. Alcuni APK sono piccoli, ma giochi e app di grandi dimensioni possono occupare centinaia di megabyte o più. Qualche vecchio installer non conta molto su un telefono da 512 GB. Su uno da 64 GB, si accumula in fretta.

## La sicurezza conta più delle dimensioni del file

I file APK non sono pericolosi solo perché sono APK. Il rischio dipende dalla fonte.

Un APK proveniente da uno sviluppatore affidabile, da un repository open source noto o dal sistema di gestione delle app del tuo datore di lavoro è diverso da un APK inviato da uno sconosciuto o scaricato da un forum casuale. APK modificati, craccati o "premium unlocked" sono una via comune per la diffusione di malware. Lo spazio che potresti recuperare è il problema minore. In gioco ci sono i dati dei tuoi account.

Google Play Protect è attivo per impostazione predefinita sui dispositivi Android certificati. Controlla le app durante l'installazione, esegue scansioni periodiche del dispositivo e può avvisarti, disattivare o rimuovere app che sembrano dannose. Può inoltre chiederti di inviare a Google le app sconosciute per un controllo. È una protezione utile, non una garanzia.

C'è anche un cambiamento attuale nella distribuzione Android che vale la pena conoscere. Dal 30 settembre 2026, gli sviluppatori con identità verificata dovranno registrare le app distribuite tramite gli store partecipanti in Brasile, Indonesia, Singapore e Thailandia. Google prevede di estendere il requisito a livello globale nel 2027 e manterrà un flusso avanzato per chi installa app di sviluppatori non verificati. Per chi usa normalmente il telefono, il consiglio pratico non cambia: non conservare e non installare APK provenienti da fonti a cui non affideresti il dispositivo.

## Domande comuni

### Eliminare un APK disinstalla l'app?

No. L'APK è l'installer. L'app resta installata finché non la disinstalli da Impostazioni, dal launcher o da Google Play.

### Perché alcuni file APK hanno nomi strani?

Browser, app di chat e strumenti di sviluppo non salvano sempre il file con il nome pubblico dell'app. Possono usare il nome interno del pacchetto o un nome casuale assegnato al download. Il nome da solo non dimostra che il file sia pericoloso, ma richiede più cautela.

### Posso inviare un APK a un'altra persona?

Tecnicamente sì. Funziona meglio con app semplici distribuite come un singolo APK. È meno affidabile con le app installate da Google Play, perché Play spesso fornisce APK suddivisi e ottimizzati generati da un AAB. Per le app del Play Store, invia il link allo store.
