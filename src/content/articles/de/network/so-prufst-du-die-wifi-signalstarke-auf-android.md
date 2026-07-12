---
title: "So prüfst du die WiFi-Signalstärke auf Android"
description: "Meta-Beschreibung: So liest du die WiFi-Signalstärke auf Android in dBm statt nur über Balken. Mit Systemeinstellungen, Analyse-Apps und einer Erklärung der Werte."
listSummary: "Meta-Beschreibung: So liest du die WiFi-Signalstärke auf Android in dBm statt nur über Balken."
hub: "network"
sourceNumber: 90
order: 1
tags: ["netzwerk","verbindungen","android","fehlerbehebung","ratgeber"]
locale: "de"
draft: false
---
Die WiFi-Balken in der Statusleiste sind nur ein grober Hinweis, keine Messung. Legst du zwei Smartphones nebeneinander, können sie trotzdem unterschiedliche Werte anzeigen, weil Android-Oberflächen und Hersteller die Signalstärke nicht einheitlich in Balken umsetzen.

Für echte Fehlersuche brauchst du dBm. Dieser Wert beschreibt die Signalstärke, die dein Smartphone vom Router empfängt.

## Beginne in den Android-Einstellungen

Öffne auf einem Pixel oder einem Smartphone mit weitgehend unverändertem Android den Bereich für Netzwerk und Internet und dort die Internet- oder WLAN-Details. Auf Samsung-Galaxy-Geräten findest du WLAN unter den Verbindungen. Tippe auf das Netzwerk, mit dem du verbunden bist.

Die Detailansicht zeigt meist eine Bewertung wie „Hervorragend“, „Gut“, „Mittel“ oder „Schwach“. Je nach Gerät erscheinen außerdem Verbindungsgeschwindigkeit, Frequenz, Sicherheitstyp, IP-Adresse und weitere Angaben. Der genaue Bildschirm hängt von Marke und Android-Version ab. Dein Smartphone muss deshalb nicht exakt wie ein Screenshot aus einer Anleitung aussehen.

Auf vielen aktuellen Geräten zeigen die Systemeinstellungen keinen rohen dBm-Wert. Das ist ärgerlich, aber nicht ungewöhnlich. Die Verbindungsgeschwindigkeit liefert trotzdem Kontext. Fällt sie von mehreren Hundert Mbit/s in der Nähe des Routers auf 40 Mbit/s im hinteren Schlafzimmer, sagt die Verbindung bereits einiges aus.

## Entwickleroptionen ausprobieren, aber nicht darauf verlassen

Manche Smartphones zeigen nach Aktivierung der Entwickleroptionen zusätzliche WiFi-Informationen.

Öffne den Geräteinformationsbereich in den Einstellungen und tippe siebenmal auf die Build-Nummer. Wechsle anschließend in die Entwickleroptionen und suche im Netzwerkbereich nach **Ausführliche WLAN-Protokollierung aktivieren** oder der entsprechend benannten Option. Laut Android-Entwicklerdokumentation wird damit die Protokollierung für jedes verbundene WLAN-Netzwerk anhand der relativen empfangenen Signalstärke (RSSI) erweitert.

In der Praxis variiert das sichtbare Ergebnis. Pixel-Geräte und Smartphones mit nahezu unverändertem Android zeigen eher zusätzliche Details. Samsung und andere OEM-Versionen können dieselben Informationen verstecken oder anders darstellen. Das ist einer dieser Android-Tricks, die funktionieren, bis sie es nicht tun.

## Eine WiFi-Analyse-App für dBm verwenden

Eine WiFi-Analyse-App ist der einfachste Weg zu einem dBm-Wert auf unterschiedlichen Smartphones.

WiFiman von Ubiquiti zeigt WLAN-Details wie Signalstärke, Kanal, SSID, BSSID, Gateway, DNS, Latenz und Paketverlust. Die App ist ein guter Einstieg, wenn du zusätzlich Geschwindigkeit und Geräte im Netzwerk untersuchen willst.

NetSpot eignet sich besser, wenn du Räume kartieren möchtest. Die App kann Signalstärke anzeigen und beim Aufbau eines groben Abdeckungsbilds helfen, während du durch Wohnung oder Büro gehst.

Network Analyzer ist nützlich, wenn die Ursache vielleicht gar nicht die Signalstärke ist. Die App kombiniert WiFi- und Mobilfunkinformationen mit Werkzeugen wie Ping, DNS-Abfrage und Traceroute.

Nach der Installation suchst du dein Netzwerk und beobachtest den dBm-Wert, während du dich bewegst. Diese Zahl ist aussagekräftiger als das Symbol in der Statusleiste.

## Was dBm-Werte bedeuten

dBm-Werte sind negativ. Je näher der Wert an null liegt, desto stärker ist das Signal. -45 dBm ist deutlich stärker als -75 dBm.

Diese Werte eignen sich als praktische Schwellen für ein Heimnetz:

- -30 bis -50 dBm: hervorragend. Du bist vermutlich nah am Router oder Access Point.
- -50 bis -60 dBm: stark. Streaming, Videoanrufe und normales Surfen sollten stabil laufen.
- -60 bis -67 dBm: für die meisten Zwecke weiterhin gut, einschließlich HD-Video und Anrufen bei geringer Störung.
- -67 bis -70 dBm: nutzbar, aber Echtzeitanrufe und Spiele können hier bereits leiden.
- -70 bis -80 dBm: schwach. Surfen kann noch funktionieren, aber Videoqualität kann sinken und Anrufe können einfrieren.
- Unter -80 dBm: schlecht. Das Smartphone bleibt möglicherweise verbunden, während die Datenübertragung praktisch nicht mehr brauchbar ist.

Einen perfekten Grenzwert gibt es nicht, weil Rauschen und Störungen ebenfalls zählen. Ein sauberes Signal mit -68 dBm kann in einem Mehrfamilienhaus voller Router besser funktionieren als ein stark gestörtes Signal mit -60 dBm.

## Frequenzband prüfen

Die meisten Router verwenden das weiter reichende 2,4-GHz-Band und das schnellere 5-GHz-Band. Neuere Geräte können über WiFi 6E oder WiFi 7 zusätzlich 6 GHz nutzen.

Das niedrigere Frequenzband reicht weiter und kommt besser durch Wände, ist aber stark belegt. Bluetooth-Geräte, benachbarte Router, Babyfone und Mikrowellen können zusätzlich stören.

5 GHz ist auf kurze und mittlere Entfernung schneller. Durch Wände und Decken verliert das Signal jedoch rascher an Stärke. Ein Smartphone kann dort einen schwächeren dBm-Wert anzeigen und trotzdem schneller sein, weil mehr nutzbare Bandbreite verfügbar ist.

6 GHz ist bei verfügbarer Unterstützung oft noch störungsärmer, hat aber erneut eine geringere Reichweite. Im selben Raum oder in angrenzenden Räumen kann es hervorragend funktionieren. Eine magische Lösung für das ganze Haus ist es nicht.

Verwendet dein Router denselben Netzwerknamen für mehrere Bänder, wählt das Smartphone automatisch. Meist passt diese Entscheidung, aber nicht immer. Prüfe in einem Funkloch zuerst, welches Band das Gerät tatsächlich nutzt, bevor du dem Router die Schuld gibst.

## Problemzonen ablaufen

Öffne deine Analyse-App und gehe langsam durch die Räume, in denen WiFi schlecht funktioniert. Achte auf den Punkt, an dem dein Netzwerk unter ungefähr -70 dBm fällt.

Typische Schwachstellen sind unspektakulär, aber real: Betonwände, Ziegel, Metalltüren, Spiegel mit metallischer Rückseite, Fußbodenheizung und Router in Schränken. Ein Router im Schrank ist ein klassisches selbst verursachtes Problem.

runcheck zeigt auf dem Bildschirm mit Netzwerkdetails die aktuelle WiFi-Messung mit dBm, Qualitätsbewertung, Verbindungsgeschwindigkeit, Frequenz und Latenz, sofern Android diese Werte bereitstellt. Die Netzwerkhistorie ist nützlich, wenn das Problem nur zeitweise auftritt, etwa jeden Abend oder ausschließlich in einem bestimmten Raum.

## Ein schwaches Signal verbessern

Stelle zuerst den Router um. Platziere ihn höher, möglichst zentral in der Wohnung und fern von Metall. Verstecke ihn nicht hinter dem Fernseher oder in einem Schrank.

Wechsle den Kanal, wenn viele benachbarte Router denselben nutzen. Im 2,4-GHz-Band sind 1, 6 und 11 die üblichen nicht überlappenden Kanäle. Bei 5 und 6 GHz gibt es mehr Kanäle, trotzdem kann es in dicht bewohnten Gebäuden zu Überlastung kommen.

Nutze Mesh-WiFi, wenn ein einzelner Router die Fläche nicht abdecken kann. Ein gut platziertes Mesh-System ist meist besser als ein günstiger Repeater am Rand der schlechten Abdeckung. Auch der Repeater braucht ein brauchbares Eingangssignal. Hört er den Router kaum, kann er daraus kein gutes Netzwerk machen.

Installiere Router-Firmwareupdates, wenn sie verfügbar sind. Sie ändern keine Physik, können aber Fehler, Roaming-Probleme und Kompatibilitätsprobleme mit neueren Smartphones beheben.
