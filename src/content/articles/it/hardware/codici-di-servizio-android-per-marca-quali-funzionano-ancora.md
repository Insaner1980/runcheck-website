---
title: "Codici di servizio Android per marca: percorsi documentati che possono ancora funzionare"
description: "Percorsi di servizio e diagnostica qui documentati per Samsung, Pixel e Xiaomi. Disponibilità e comportamento variano in base a modello, area, operatore, software e produttore; Android 17 non offre un insieme universale di codici."
listSummary: "Percorsi di servizio e diagnostica specifici per marca, con limiti di modello e software."
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostica", "sensori", "android", "hardware", "guida"]
locale: "it"
draft: false
---
Non esiste un elenco completo affidabile. I codici dipendono da produttore, modello, app Telefono, firmware, operatore e regione. Restano solo quelli collegati a documentazione ufficiale attuale.

Prove dirette: [Samsung documenta `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google il codice Pixel `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB) e [Xiaomi l'accesso CIT](https://www.mi.com/global/support/faq/details/KA-491482/) con `*#*#6484#*#*` o `*#*#64663#*#*` sui dispositivi applicabili.

## Samsung Galaxy

Samsung continua a offrire uno dei sistemi diagnostici migliori, anche perché mette a disposizione sia i codici del tastierino sia un percorso ufficiale tramite app.

`*#0*#` apre la schermata di test hardware su molti Galaxy. La disposizione cambia a seconda del modello, ma in genere puoi provare schermo, tocco, fotocamere, altoparlanti, vibrazione, sensori e, in alcuni casi, il lettore di impronte. Su alcuni modelli degli operatori o con firmware molto limitato, il codice non si apre affatto.

Samsung Members è il percorso più sicuro per la maggior parte delle persone. Apri Samsung Members, tocca Supporto, quindi Vedi test o Diagnostica dello smartphone. L'app guida attraverso le prove e mostra risultati più chiari rispetto al menu di servizio.

## Xiaomi, Redmi e POCO

[La pagina di supporto Xiaomi](https://www.mi.com/global/support/faq/details/KA-491482/) documenta due codici del tastierino per un test CIT del touchscreen sui dispositivi applicabili: `*#*#6484#*#*` e `*#*#64663#*#*`.

Nel test documentato, fai scorrere un dito sullo schermo e cerca linee interrotte o aggiuntive. La fonte supporta solo questa procedura per il touchscreen. Disponibilità e comportamento variano in base a modello, area, operatore, firmware e versione software.

## Google Pixel

La documentazione Pixel descrive un percorso diagnostico specifico per Pixel. La disponibilità può variare in base a modello, area, operatore e versione software.

`*#*#7287#*#*` apre Pixel Repair Diagnostics App sui Pixel supportati. Google lo documenta per i controlli prima o dopo una riparazione. Richiede una connessione a Internet e guida l'utente sullo schermo.

Per i controlli specifici della batteria su Pixel 6 e modelli successivi, usa Impostazioni > Batteria > Diagnostica della batteria. È un normale percorso delle Impostazioni, non un codice nascosto.

Alcuni articoli più vecchi citano il trucco `.12345+=` nell'app Calcolatrice per aprire la modalità di ingegneria sui Pixel. Nel 2026 non ci farei affidamento. Usa invece il codice diagnostico ufficiale per Pixel.

## Safety

Se un codice documentato non funziona, usa l'app diagnostica o le istruzioni di assistenza supportate dal produttore. Non disattivare protezioni e non inserire codici di ripristino, provisioning, calibrazione radio, firmware o programmazione da un elenco non verificato.
