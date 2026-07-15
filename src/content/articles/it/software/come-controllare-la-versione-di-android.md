---
title: "Come controllare la versione di Android"
description: "Il telefono mostra già quale versione di Android usa. Devi soltanto sapere a quale numero dare importanza."
listSummary: "Il telefono mostra già quale versione di Android usa."
hub: "software"
sourceNumber: 119
order: 1
tags: ["android","aggiornamenti","sicurezza","software","guida"]
locale: "it"
draft: false
---
Sulla maggior parte dei dispositivi, apri Impostazioni, quindi Informazioni sullo smartphone o Informazioni sul tablet e infine Versione di Android. Su Samsung, vai in Impostazioni > Informazioni sul telefono > Informazioni software. La schermata non mostra soltanto il numero principale del sistema operativo: trovi anche la data dell'aggiornamento di sicurezza, quella dell'aggiornamento di sistema Google Play, il numero build e, in alcuni casi, la versione software del produttore.

È il dettaglio che spesso sfugge. Android 17 è più recente di Android 16, ma una patch di sicurezza aggiornata conta altrettanto quando valuti se uno smartphone è ancora sicuro da usare.

## Controlla la versione nelle Impostazioni

Sulla maggior parte degli smartphone Android:

1. Apri Impostazioni.
2. Tocca Informazioni sullo smartphone o Informazioni sul tablet.
3. Apri Versione di Android se i dettagli non sono già visibili.
4. Controlla Versione di Android, Aggiornamento della sicurezza Android, Aggiornamento di sistema Google Play e Numero build.

Samsung raccoglie le stesse informazioni in Informazioni software, dentro Informazioni sul telefono. Su OnePlus la pagina equivalente si chiama spesso About device. Sugli smartphone Xiaomi, Redmi e POCO si parte in genere da Informazioni sul telefono, poi i dettagli sono suddivisi tra la pagina della piattaforma e le schermate di Xiaomi HyperOS.

Tutto qui. Davvero.

## Cosa indica davvero la versione

Il numero principale identifica la generazione di Android installata. A luglio 2026, Android 17 è la versione principale più recente. Google l'ha pubblicata il 16 giugno 2026 per la maggior parte dei Pixel supportati, mentre i nuovi dispositivi e gli aggiornamenti degli altri produttori seguono calendari propri.

Per gli sviluppatori, ogni versione corrisponde a un livello API. La mappatura attuale è Android 17/API 37, Android 16/API 36, Android 15/API 35, Android 14/API 34 e Android 13/API 33. Non devi impararla a memoria, ma spiega perché un'app può dichiarare il telefono troppo vecchio anche se il dispositivo si accende e funziona ancora bene.

Il numero build è più specifico. Identifica l'esatta versione software installata. Due smartphone possono usare entrambi Android 17 e avere comunque build diverse a causa della regione, dell'approvazione dell'operatore, del canale beta o delle personalizzazioni del produttore.

## Conta anche l'interfaccia del produttore

Samsung non distribuisce semplicemente "Android puro". Aggiunge One UI. One UI 9 è la generazione Samsung basata su Android 17, ma a luglio 2026 non è ancora un aggiornamento stabile in distribuzione generale. Samsung ha aperto la beta sulla serie Galaxy S26 in alcuni mercati e ha annunciato l'esperienza completa per nuovi dispositivi Galaxy di punta più avanti nel 2026. Chi partecipa alla beta può quindi vedere la nuova piattaforma prima di chi usa il canale stabile.

Gli smartphone Xiaomi, Redmi e POCO usano Xiaomi HyperOS. Il numero di HyperOS descrive l'interfaccia e le funzioni di Xiaomi, ma non rivela sempre a colpo d'occhio la versione Android sottostante. Apri la pagina con i dettagli della piattaforma prima di concludere che HyperOS 3, 3.1 o una build successiva significhi la stessa cosa su ogni modello.

I Pixel sono più semplici. La pagina Informazioni sullo smartphone mostra insieme numero della piattaforma, patch di sicurezza e identificatore della build. Un Pixel supportato sul canale stabile di luglio 2026 può mostrare Android 17, mentre un dispositivo iscritto al programma beta può usare una build QPR beta.

## Come controllare senza il normale percorso nelle Impostazioni

I codici da digitare nell'app Telefono possono mostrare informazioni sul firmware di alcuni dispositivi, ma non sono coerenti. Sui modelli supportati, `*#1234#` di Samsung può visualizzare i dettagli del firmware AP, CP e CSC. Il menu di test `*#*#4636#*#*` funziona su alcuni dispositivi Android, ma molti produttori lo disattivano.

Se conosci ADB e il telefono ha già autorizzato il computer, questi comandi sono più precisi:

```bash
adb shell getprop ro.build.version.release
adb shell getprop ro.build.version.sdk
adb shell getprop ro.build.version.security_patch
```

Restituiscono rispettivamente la versione, il livello API e la data della patch. Sono utili nei test, nelle riparazioni o per controllare un telefono i cui menu sono stati personalizzati pesantemente.

## Perché la versione conta

La compatibilità con le app è il motivo più evidente. Le app stabiliscono una versione minima della piattaforma. Quando il telefono scende sotto quella soglia, il Play Store può bloccare l'installazione o smettere di offrire aggiornamenti.

La sicurezza è un motivo ancora migliore. Gli aggiornamenti di sicurezza Android vengono gestiti separatamente dalla versione principale. Uno smartphone con Android 16 e una patch recente è in genere più sicuro di uno con Android 17 e una patch vecchia. La data indica quanto recentemente il dispositivo ha ricevuto correzioni per le vulnerabilità.

Anche le funzioni dipendono dalla piattaforma. Android 12 ha introdotto i temi dinamici Material You. Android 13 ha aggiunto la scelta della lingua per singola app. Android 14 ha reso più rigide diverse regole sulla privacy e sul comportamento in background. Android 17 aggiunge App Bubbles, il Picture-in-Picture interattivo negli ambienti in stile desktop, un Contact Picker orientato alla privacy e un pulsante per la posizione gestito dal sistema, che concede l'accesso preciso soltanto per la sessione corrente.

Se una funzione manca sul tuo smartphone, la causa può essere la generazione del sistema operativo. Oppure il produttore può aver scelto semplicemente di non includerla. Android è complicato così.

## Versione della piattaforma e data della patch sono diverse

Il numero della piattaforma indica la generazione principale. La patch di sicurezza è una data, per esempio 2026-06-05. Le due cose avanzano separatamente.

Uno smartphone può usare Android 15 con correzioni recenti. Un altro può avere Android 17 ed essere già indietro con le patch. Quando valuti se un dispositivo è ancora sicuro da usare, controlla entrambi.

## Puoi aggiornare manualmente?

Inizia da Impostazioni > Sistema > Aggiornamenti software. Su Samsung, usa Impostazioni > Aggiornamenti software > Scarica e installa. Se il produttore ha pubblicato un aggiornamento per il tuo modello, la tua regione e la variante dell'operatore, dovrebbe comparire lì.

Non puoi installare una build Android ufficiale che il produttore non ha pubblicato per il tuo dispositivo. Chi usa un Pixel può installare manualmente immagini OTA ufficiali tramite ADB, mentre sui Samsung è possibile caricare firmware ufficiali con Odin. Sono procedure tecniche con rischi reali se scegli la build sbagliata. Le ROM personalizzate sono un'altra possibilità per alcuni telefoni, ma non equivalgono a un aggiornamento ufficiale.
