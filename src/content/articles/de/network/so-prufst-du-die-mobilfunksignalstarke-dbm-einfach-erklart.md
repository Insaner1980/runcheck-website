---
title: "So prüfst du die Mobilfunksignalstärke: dBm einfach erklärt"
description: "Signalbalken reichen für einen schnellen Blick, sind aber keine Messung. Ein Smartphone kann vier Balken anzeigen, während ein anderes im selben Raum und beim selben Anbieter nur zwei zeigt. Wenn du den tatsächlichen Wert sehen möchtest, brauchst du die Signalstärke in dBm."
listSummary: "Signalbalken reichen für einen schnellen Blick, sind aber keine Messung."
hub: "network"
sourceNumber: 93
order: 4
tags: ["netzwerk","verbindungen","android","fehlerbehebung","ratgeber"]
locale: "de"
draft: false
---
Das klingt technischer, als es ist. dBm beschreibt einfach die Leistung des Mobilfunksignals, das dein Smartphone empfängt. Je näher der Wert an null liegt, desto stärker ist das Signal. -75 dBm ist stärker als -95 dBm. So einfach ist das.

## dBm schnell einordnen

Die Mobilfunksignalstärke wird als negative Zahl angezeigt, weil Smartphones sehr kleine Funkleistungen messen. Im normalen Betrieb liegen die Werte meist ungefähr zwischen -50 dBm und -120 dBm. In der Nähe eines Funkmasts kannst du Werte um -50 dBm sehen. Tief in einem Betongebäude, im Keller oder am Rand der Netzabdeckung kann der Wert auf -110 dBm oder schlechter fallen.

Die Skala ist logarithmisch. Eine Änderung um 3 dBm entspricht ungefähr einer Verdopplung oder Halbierung der empfangenen Leistung. -80 dBm ist also deutlich besser als -86 dBm. Die empfangene Leistung ist ungefähr viermal so hoch. Doch, wirklich.

Für LTE und die meisten 5G-Verbindungen unter 6 GHz sind diese Bereiche eine brauchbare Faustregel:

| Messwert | Was er in der Regel bedeutet |
|---|---|
| -50 bis -70 dBm | Ausgezeichnet. Anrufe und Daten sollten stabil funktionieren, sofern die Funkzelle nicht überlastet ist. |
| -70 bis -85 dBm | Gut. Das ist ein normaler Wert für ordentliche Abdeckung im Freien oder in Fensternähe. |
| -85 bis -100 dBm | Nutzbar, aber nicht besonders gut. Surfen funktioniert, Streams können puffern und die Uploadgeschwindigkeit bricht oft zuerst ein. |
| -100 bis -110 dBm | Schwach. Anrufe können abbrechen, Nachrichten verspätet ankommen und das Modem braucht mehr Energie, um die Verbindung zu halten. |
| Unter -110 dBm | Grenzwertig. Rechne mit Zeitüberschreitungen, kurzen Phasen ohne Netz oder einem erzwungenen Wechsel auf eine andere Netzebene. |

Das sind keine allgemeingültigen Bestehensgrenzen. Ein Smartphone kann bei -95 dBm problemlos funktionieren, wenn das Signal sauber und die Funkzelle nicht ausgelastet ist. Ein anderes kann bei -75 dBm sehr langsam sein, wenn die Zelle überlastet ist oder starke Störungen auftreten.

## So prüfst du die Signalstärke unter Android

Das genaue Menü hängt vom Hersteller, der Android-Version und der Software des Mobilfunkanbieters ab. Am schnellsten öffnest du die Einstellungen und suchst nach „SIM-Status“ oder „Signalstärke“.

Auf Pixel-Geräten und vielen Android-Smartphones mit einer weitgehend unveränderten Oberfläche, einschließlich unterstützter Pixel mit Android 17, kannst du Einstellungen > Über das Telefon > SIM-Status öffnen. Manche Versionen zeigen SIM-Details außerdem unter Einstellungen > Netzwerk & Internet > SIM-Karten. Suche nach Signalstärke. Meist werden ein dBm-Wert und ein ASU-Wert angezeigt.

Auf Samsung-Galaxy-Geräten öffnest du je nach One-UI-Version Einstellungen > Telefoninfo > Statusinformationen. Suche dort nach Angaben zur SIM-Karte oder zur Signalstärke. Der betreffende Eintrag kann SIM-Kartenstatus oder SIM-Status heißen. Wenn er nicht vorhanden ist, nutze die Suche in den Einstellungen.

Ein Haken bleibt: Android zeigt normalerweise den Wert der Netzebene an, die gerade verwendet wird. Ist das Smartphone in LTE eingebucht, stammt der angezeigte Wert von LTE. Bei 5G NR kann er je nach Modem und Mobilfunkanbieter auf 5G-Referenzsignalmessungen beruhen. LTE- und 5G-Werte werden nicht immer nebeneinander angezeigt.

## Versteckte Testmenüs

Viele Android-Smartphones reagieren weiterhin auf diesen Telefoncode:

`*#*#4636#*#*`

Öffne die Telefon-App und gib den Code ein. Möglicherweise erscheint ein Menü namens Testing. Unter Phone information findest du unter anderem Netzwerktyp, Signalstärke und den Status der Datenverbindung. Ändere dort den bevorzugten Netzwerktyp nur, wenn du genau weißt, was du tust. Das ist ein Diagnosebildschirm, kein benutzerfreundliches Einstellungsmenü.

Samsung blockiert diesen allgemeinen Code häufig. Auf vielen Galaxy-Geräten öffnet `*#0011#` stattdessen den Service Mode. Dort können Informationen zur versorgenden Funkzelle, zum Frequenzband und zu Signalwerten erscheinen. Gerätevarianten von Mobilfunkanbietern können beide Codes deaktivieren. Verlass dich deshalb nicht darauf, dass sie immer funktionieren.

## Apps, die die Messung einfacher machen

Apps wie Network Cell Info Lite, CellularZ und Signal Strength zeigen den dBm-Wert direkt auf dem Hauptbildschirm und aktualisieren ihn laufend. Das ist praktisch, wenn du durch Wohnung, Büro oder Parkplatz gehst und herausfinden möchtest, an welcher Stelle der Empfang tatsächlich besser ist.

Eine gute Signal-App sollte mehr als eine Zahl zeigen. RSRP beschreibt die Stärke, während RSRQ und SINR zeigen, ob das Signal brauchbar oder von Störungen überlagert ist.

runcheck zeigt die Netzwerkqualität zusammen mit anderen Messwerten zum Gerätezustand und speichert einen zeitlichen Verlauf. Das ist hilfreich, weil ein einzelner dBm-Wert nur eine Momentaufnahme ist. Im Verlauf erkennst du leichter, ob der Empfang in einem bestimmten Raum immer schwach ist, nur zur Hauptverkehrszeit einbricht oder nach einem Update plötzlich schlechter wurde.

## RSRP, RSSI, RSRQ und SINR ohne Kopfschmerzen

Diagnoseansichten werfen mit mehreren ähnlich aussehenden Abkürzungen um sich. Sie bedeuten nicht dasselbe.

RSSI steht für Received Signal Strength Indicator. Der Wert wurde häufig bei älteren 2G- und 3G-Verbindungen verwendet und kann auch in WLAN-Werkzeugen erscheinen. RSSI misst die gesamte empfangene Leistung, also Nutzsignal, Rauschen und Störungen zusammen. Für die Mobilfunkdiagnose ist der Wert deshalb weniger eindeutig.

RSRP steht für Reference Signal Received Power. Bei LTE und 5G ist das meistens der erste Stärkewert, den du prüfen solltest. Er misst das Referenzsignal der versorgenden Funkzelle und nicht jede Form von Funkenergie im Kanal.

RSRQ steht für Reference Signal Received Quality. Der Wert verbindet Signalstärke und Störungen zu einer Qualitätsangabe. Ein weniger negativer Wert ist besser. Bei LTE sind ungefähr -3 dB ausgezeichnet, während Werte nahe -15 dB oder -20 dB auf schlechte Qualität hindeuten.

SINR steht für Signal to Interference plus Noise Ratio. Höhere Werte sind besser. Mehr als 20 dB ist ausgezeichnet, 10 bis 20 dB ist gut und unter 0 dB sind Rauschen und Störungen stärker als das Nutzsignal.

Praktisch heißt das: Prüfe zuerst RSRP. Ist RSRP gut, die Datenverbindung aber trotzdem langsam, sieh dir RSRQ und SINR an. Ein starkes Signal mit schlechter Qualität ist in belebten Städten, Mehrfamilienhäusern, Stadien und überall dort üblich, wo sich viele Funkzellen überlagern.

## Warum volle Balken trotzdem langsam sein können

Die Balken beschreiben hauptsächlich den Signalpegel. Sie verraten nicht, wie viel Bandbreite der Funkzelle noch zur Verfügung steht, wie viele Menschen sie gerade nutzen, ob dein Tarif niedriger priorisiert wird oder ob das Smartphone in einer niedrigeren 5G-Frequenzschicht eingebucht ist, die sich eher wie gutes LTE als wie die schnelle 5G-Werbung verhält.

Deshalb können zwei Messungen am selben Ort widersprüchlich wirken. Dein Smartphone kann bei einem Konzert -68 dBm anzeigen und trotzdem langsam herunterladen, weil Hunderte oder Tausende Geräte um dieselbe Funkzelle konkurrieren. Um 2 Uhr nachts kann dasselbe Smartphone auf demselben Sitzplatz schnell wirken.

## Warum Signalwerte springen

Die Signalstärke verändert sich auch dann, wenn du stillstehst. Funkwellen werden von Gebäuden, Autos, Wänden, Menschen und dem Gelände reflektiert. Manche Reflexionen helfen. Andere löschen einen Teil des Signals aus. Bewegst du das Smartphone nur wenige Zentimeter, kann sich der Wert bereits verändern.

In Gebäuden sind die Schwankungen oft größer. Fenster, Aufzugsschächte, Betonwände, Metalldächer oder Wärmeschutzglas können den Wert um 10 dB oder mehr verändern. Keller und innen liegende Räume sind meist am schwierigsten, weil das Signal mehr Material durchdringen muss.

Auch die Tageszeit spielt eine Rolle, aber nicht immer, weil sich der Signalwert selbst ändert. Zu Stoßzeiten kann die Funkzelle überlastet sein. Dann fühlt sich die Verbindung schlechter an, obwohl der dBm-Wert ähnlich bleibt.

## Was ist ein guter 5G-Wert?

Bei 5G unter 6 GHz ist ein RSRP-Wert um -80 dBm grob betrachtet gut. Um -100 dBm wird das Signal schwach. Bei mmWave hängt eine stabile Verbindung viel stärker vom genauen Standort ab. Im Freien kann sie bei freier Sicht sehr schnell sein und schon nach einer Straßenecke oder beim Betreten eines Gebäudes verschwinden.

Das 5G-Symbol allein reicht für eine Beurteilung nicht aus. Achte auf Signalstärke, Signalqualität, Geschwindigkeit, Latenz und darauf, ob das Smartphone ständig auf LTE zurückfällt.

## Kurze Antworten

Kannst du den Empfang ohne Verstärker verbessern? Manchmal. Geh näher ans Fenster, in ein höheres Stockwerk, nach draußen oder auf eine andere Seite des Gebäudes. Ist 5G in Innenräumen schwach, kann LTE praktisch besser funktionieren, weil niedrigere LTE-Frequenzen Wände häufig leichter durchdringen.

Ist dBm im Mobilfunk dasselbe wie dBm im WLAN? Die Einheit ist dieselbe, die sinnvollen Bereiche unterscheiden sich aber. -50 dBm ist im WLAN stark, und ab etwa -70 dBm kann die Stabilität leiden. Mobilfunknetze sind für größere Entfernungen ausgelegt und können deshalb noch bei deutlich niedrigeren Werten funktionieren.

Solltest du Balken oder dBm vertrauen? Nutze die Balken für einen schnellen Blick. Nutze dBm für die Fehlersuche.
