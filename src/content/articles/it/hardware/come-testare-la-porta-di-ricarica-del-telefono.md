---
title: "Come testare la porta di ricarica del telefono"
description: "Scopri come testare la porta di ricarica di uno smartphone Android controllando cavo, pulizia, corrente di ricarica e diagnostica integrata."
listSummary: "Scopri come testare la porta di ricarica di uno smartphone Android controllando cavo."
hub: "hardware"
sourceNumber: 108
order: 5
tags: ["ricarica","batteria","android","guida","hardware"]
locale: "it"
draft: false
---
---

Devi tenere il cavo in una posizione strana, l'icona di ricarica continua a comparire e sparire e il telefono si carica soltanto se rimane perfettamente immobile. Sembra subito una porta di ricarica guasta, ma non partire da quella conclusione.

Comincia dai controlli più noiosi. Risolvono più problemi di quanto si pensi.

## Escludi prima il cavo e l'alimentatore

Prova un altro cavo USB-C o Micro-USB con lo stesso alimentatore. Poi usa un altro alimentatore con il cavo originale. Se puoi, prova entrambi gli accessori anche con un altro telefono o tablet.

Un cavo può rompersi internamente molto prima di mostrare danni visibili. Basta che un contatto dati o di alimentazione smetta di funzionare perché una ricarica rapida si riduca a una corrente minima. All'esterno il cavo può sembrare ancora perfetto. È fastidioso, ma normale.

Se la stessa coppia di cavo e alimentatore carica correttamente un altro dispositivo, la porta del telefono diventa più sospetta. Se invece un altro cavo risolve subito il problema, probabilmente la porta non era la causa.

## Ispeziona la porta

Spegni il telefono e illumina direttamente la porta di ricarica con una torcia. Cerca lanugine compressa contro la parete posteriore. La polvere delle tasche si accumula lentamente, viene schiacciata dal connettore e alla fine impedisce alla spina di entrare fino in fondo.

Controlla anche quanto è stabile il collegamento. Un connettore USB-C in buone condizioni deve rimanere saldo nella porta. Non dovrebbe cadere, muoversi molto o scollegarsi appena sposti il telefono. Un minimo gioco è normale, soprattutto sui dispositivi più vecchi. Le interruzioni continue non lo sono.

Cerca residui verdi, bianchi o scuri sui contatti. Possono indicare corrosione o umidità. Rimuovere la polvere può risolvere un accumulo di lanugine, ma non ripara un contatto corroso.

## Puliscila con attenzione

Se vedi polvere o lanugine, tieni la porta rivolta verso il basso e usa qualche breve soffio con una pompetta manuale o una bomboletta ad aria compressa. Non avvicinare l'ugello troppo alla porta. Devi smuovere i residui, non spingerli ancora più in profondità.

Per la lanugine compatta, usa un pennello morbido e asciutto per elettronica oppure uno spazzolino pulito e asciutto. Evita gli strumenti metallici. Uno spillo può piegare un contatto o provocare un corto circuito. Eviterei anche uno stuzzicadenti di legno, a meno che non ci siano alternative migliori, perché può scheggiarsi e lasciare altri frammenti nella porta.

Non versare alcol o detergente per contatti nel telefono. Il fatto che un tecnico possa usare liquidi in un ambiente controllato non rende sicuro farlo a casa.

Dopo la pulizia, collega di nuovo il caricatore. Se il connettore entra più a fondo e rimane più saldo, probabilmente il problema principale era la lanugine.

## Controlla la corrente di ricarica

Android può esporre la corrente istantanea della batteria tramite `BatteryManager` sui dispositivi che supportano questa lettura. App come Ampere possono visualizzare il dato, ma usalo per fare confronti, non come se fosse una misura da laboratorio.

Apri Ampere con il caricatore scollegato e annota il valore di scarica. Collega il caricatore, aspetta circa 10 secondi e osserva quando il numero si stabilizza. Livello della batteria, temperatura, luminosità dello schermo e regole di ricarica del telefono influenzano il risultato.

Un alimentatore da 2 A non mostra necessariamente 2000 mA sullo schermo. Se la batteria è quasi piena, il telefono riduce intenzionalmente la corrente. Ma se con un alimentatore da parete e un cavo sicuramente funzionanti leggi circa 200 o 300 mA, e il valore cambia bruscamente ogni volta che tocchi il connettore, la porta non sta mantenendo un contatto stabile.

Chi usa un Samsung ha un'altra possibilità. Apri Samsung Members, vai su Supporto > Diagnostica dello smartphone e avvia il test relativo alla ricarica via cavo o alla connessione USB, se disponibile sul modello. I nomi e i test presenti possono cambiare in base al dispositivo e alla versione dell'app.

Il codice Samsung `*#0*#` può ancora aprire un menu di test hardware su molti Galaxy. Usa l'app Telefono di Samsung, non un'app Telefono di terze parti. Sulle versioni One UI più recenti, sui modelli degli operatori o sui telefoni con restrizioni di sicurezza, il codice può non produrre alcun risultato. È ormai normale.

Android 17 non ha introdotto un test universale della porta di ricarica per tutti i telefoni Android. Pixel, Samsung e Xiaomi continuano a usare percorsi di diagnostica diversi.

## Prova la modalità provvisoria

Se la porta è pulita, il cavo entra correttamente e la ricarica continua a comportarsi in modo strano, avvia il telefono in modalità provvisoria. Questa modalità disattiva le app di terze parti e aiuta a capire se un'app interferisce con il comportamento o con le notifiche di ricarica.

Su molti telefoni Android puoi aprire il menu di spegnimento e tenere premuta l'opzione per spegnere finché compare la proposta di riavvio in modalità provvisoria. Su molti Samsung puoi invece riavviare il telefono e tenere premuto Volume giù durante l'avvio. La procedura esatta può variare in base al modello.

Se la ricarica torna normale in modalità provvisoria, controlla le app installate di recente, soprattutto quelle per batteria, automazione, sicurezza o animazioni di ricarica. Una di queste potrebbe interferire con il funzionamento o con ciò che viene mostrato sullo schermo.

## Quando la porta deve essere riparata

La porta è probabilmente danneggiata quando sono vere tutte queste condizioni: cavo e alimentatore funzionano su un altro dispositivo, la porta è pulita, il connettore rimane comunque allentato e la corrente resta bassa o instabile.

La difficoltà della riparazione dipende dal telefono. Molti Samsung Galaxy, Xiaomi, Motorola e smartphone Android economici montano la porta USB su una schedina secondaria separata. In questi casi l'intervento è spesso di routine. Su altri modelli la porta è saldata alla scheda madre, quindi serve un tecnico capace di lavorare direttamente sulla scheda e il costo tende a salire.

La ricarica wireless può essere una soluzione temporanea se il telefono la supporta. Esclude completamente la porta USB, anche se di solito è più lenta e meno pratica della ricarica via cavo.

Se il problema peggiora da settimane, non aspettare che la porta smetta del tutto di funzionare. runcheck registra nel tempo il comportamento della ricarica, la corrente assorbita e l'andamento dell'alimentazione, aiutandoti a riconoscere una porta che sta cedendo prima di ritrovarti con la batteria scarica.
