---
title: "So testest du die Netzwerklatenz unter Android"
description: "Du bist in einem Videoanruf, alle können dich hören, das Bild sieht gut aus und trotzdem wirkt das Gespräch eine halbe Sekunde versetzt. Das ist Latenz. Die Downloadgeschwindigkeit bekommt meist mehr Aufmerksamkeit, aber die Latenz entscheidet darüber, ob sich eine Verbindung direkt und reaktionsschnell anfühlt."
listSummary: "netzwerk, verbindungen und android"
hub: "network"
sourceNumber: 103
order: 14
tags: ["netzwerk","verbindungen","android","fehlerbehebung","ratgeber"]
locale: "de"
draft: false
---
Latenz wird in Millisekunden (ms) gemessen. Weniger ist besser. Besonders wichtig sind drei Werte: Ping, Jitter und Paketverlust. Ping ist die Zeit für den Hin- und Rückweg von deinem Smartphone zu einem Server. Jitter zeigt, wie stark diese Zeit zwischen einzelnen Anfragen schwankt. Paketverlust ist der Anteil der Daten, die ihr Ziel gar nicht erreichen.

Eine Verbindung mit 100 Mbit/s Download und 150 ms Ping kann sich schlechter anfühlen als eine Verbindung mit 20 Mbit/s und 15 ms Ping. Das klingt zunächst verkehrt, bis du spielst, einen Videoanruf führst oder einen entfernten Desktop bedienst. Geschwindigkeit bewegt Daten. Latenz bestimmt die Reaktionszeit.

## Was die Werte bedeuten

Diese Bereiche sind praktische Richtwerte und keine Naturgesetze. Der ausgewählte Testserver, das verwendete Netz und sogar die Tageszeit können das Ergebnis verändern.

Für den Ping:

- 0 bis 20 ms: Ausgezeichnet. Kompetitive Spiele, Videoanrufe und Remote-Arbeit reagieren praktisch sofort.
- 20 bis 50 ms: Gut. Das reicht für fast alles, einschließlich Gelegenheitsspiele und Sprachanrufe.
- 50 bis 100 ms: Brauchbar. Surfen und Streaming funktionieren weiterhin, schnelle Online-Spiele wirken aber zunehmend verzögert.
- Über 100 ms: Deutlich spürbare Verzögerung. Gespräche können unangenehme Pausen bekommen und Echtzeitspiele werden frustrierend.

Beim Jitter sind weniger als 30 ms normalerweise unproblematisch. Zwischen 30 und 50 ms können Anrufe und Live-Videos anfangen zu stocken. Über 50 ms kann sich die Verbindung instabil anfühlen, obwohl der Geschwindigkeitstest hohe Werte zeigt.

Paketverlust verzeiht weniger. Schon mehr als 1 bis 2 Prozent können abgehackten Ton, eingefrorene Videos oder Rubberbanding in Spielen verursachen. Nein, ein schnellerer Tarif beseitigt Paketverlust nicht automatisch.

## Beginne mit einem Geschwindigkeitstest

Der einfachste erste Schritt ist ein Geschwindigkeitstest, der auch die Latenz anzeigt. Führe denselben Test zweimal aus, einmal über WLAN und einmal über mobile Daten. Ist nur eine Verbindung schlecht, hast du die Ursache bereits deutlich eingegrenzt.

### Googles Geschwindigkeitstest und M-Lab

Suche auf dem Smartphone in Chrome nach „speed test“. Der in der Google-Suche angebotene Test basiert auf Measurement Lab, kurz M-Lab. Der NDT-Test von M-Lab misst Upload, Download und Latenzwerte.

runcheck verwendet für seinen integrierten Geschwindigkeitstest das NDT7-Protokoll von M-Lab. Der nützliche Teil ist der Zusammenhang: Das Ergebnis wird gemeinsam mit Verbindungstyp, Signalstärke, Ping, Jitter sowie Upload- und Downloadgeschwindigkeit gespeichert. Du musst dir also nicht merken, ob der schlechte Wert über WLAN, LTE oder 5G entstanden ist.

### Speedtest von Ookla

Speedtest von Ookla ist weiterhin die bekannte Lösung für einen schnellen Test. Die App zeigt Ping, Jitter, Download und Upload an und lässt dich einen Server auswählen. Für einen grundlegenden Latenzwert solltest du einen Server in deiner Nähe verwenden. Bei Problemen mit einem Spiel oder einer Arbeitsanwendung ist ein Server nahe am tatsächlich genutzten Dienst aussagekräftiger, sofern die App eine passende Auswahl anbietet.

### Fast.com

Fast.com ist der Geschwindigkeitstest von Netflix. Zuerst erscheint nur die Downloadgeschwindigkeit, über „Weitere Informationen anzeigen“ siehst du aber auch Upload und Latenz. Achte besonders auf die Latenz unter Last. Die unbelastete Latenz wird gemessen, wenn die Verbindung ruhig ist. Die belastete Latenz zeigt das Verhalten während laufender Datenübertragung und entspricht eher dem Alltag, wenn gleichzeitig jemand streamt, Fotos synchronisiert oder ein großes Spielupdate herunterlädt.

## Nutze für längere Tests ein Ping-Werkzeug

Geschwindigkeitstests sind Momentaufnahmen. Ein Ping-Test über mehrere Minuten zeigt, ob die Latenz stabil bleibt.

PingTools Network Utilities kann Ping, Traceroute, DNS-Abfragen und weitere Netzwerktests in einer App ausführen. Für eine einfache Latenzprüfung kannst du ein stabiles Ziel wie `1.1.1.1` oder `8.8.8.8` anpingen. Wenn du einen bestimmten Spiele- oder Arbeitsdienst untersuchst, nutze dessen Hostnamen, sofern der Anbieter einen veröffentlicht.

Termux eignet sich, wenn du mit einem Terminal zurechtkommst. Installiere Termux aus einer offiziellen Quelle und bei Bedarf anschließend das Ping-Werkzeug:

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

Die Zusammenfassung zeigt Minimum, Durchschnitt, Maximum und die Schwankung zwischen den Antworten. Genau diese Schwankung ist wichtig. Eine Verbindung, die ständig von 20 ms auf 250 ms springt und wieder zurückfällt, fühlt sich schlechter an als eine stabile Verbindung mit 60 ms.

## Teste die Latenz unter Last

Die Latenz im Leerlauf kann täuschen. Ein Router zeigt vielleicht 12 ms an, solange niemand Daten überträgt, und springt auf 300 ms, sobald ein Laptop Fotos hochlädt.

Dieses Problem heißt meist Bufferbloat. Netzwerkgeräte lassen dabei Warteschlangen volllaufen, statt den Datenverkehr sauber zu steuern. Besonders deutlich wird das bei Uploads, Video-Backups, Cloud-Synchronisierung und großen Downloads.

Probiere diesen einfachen Test:

1. Führe einen Latenztest aus, während sonst niemand das Netzwerk nutzt.
2. Starte auf einem anderen Gerät einen großen Download oder Upload.
3. Wiederhole denselben Latenztest.

Steigt der Ping unter Last stark an, ist das Smartphone wahrscheinlich nicht das Hauptproblem. Router, Modem oder Mobilfunkverbindung kommen mit der Warteschlangensteuerung nicht gut zurecht. Router-Einstellungen wie QoS können helfen, SQM (Smart Queue Management) ist bei unterstützten Routern meist die bessere Lösung.

Auch der Waveform Bufferbloat Test lässt sich im Browser des Smartphones ausführen. Er bewertet, wie stark die Latenz während Download- und Uploadlast zunimmt. A oder B ist normalerweise in Ordnung. D oder F bedeutet, dass Echtzeitanwendungen leiden, sobald das Netz ausgelastet ist.

## Vergleiche WLAN und mobile Daten

Beide Verbindungen zu testen ist der schnellste Weg, Vermutungen zu vermeiden.

Die WLAN-Latenz hängt von der Entfernung zum Router, Störungen, Routerqualität, Kanalauslastung und dem Frequenzband ab. Im Nahbereich bietet 5 GHz meist weniger Störungen und eine bessere Latenz als 2,4 GHz, reicht aber nicht so weit. Wi-Fi 6 und Wi-Fi 6E können in stark belegten Netzen helfen, allerdings nur, wenn Smartphone und Router sie unterstützen.

Bei mobilen Daten bestimmen Signalqualität, Auslastung des Funkmasts, Routing des Anbieters und die Verbindung über LTE, 5G sub-6 oder 5G mmWave die Latenz. Grobe Werte aus der Praxis sehen so aus:

- 4G LTE: häufig ungefähr 30 bis 60 ms, bei hoher Auslastung des Funkmasts mehr.
- 5G sub-6: häufig ungefähr 15 bis 40 ms.
- 5G mmWave: kann niedriger liegen, hat aber eine begrenzte und leicht abschirmbare Reichweite.
- 3G: für moderne Echtzeitanwendungen zu langsam und zu unbeständig.

Das sind keine Garantien. Eine saubere LTE-Verbindung kann ein überlastetes 5G-Netz schlagen, und schwaches WLAN durch zwei Wände kann deutlich schlechter sein als mobile Daten.

Unter Android erkennst du den aktiven Mobilfunktyp an der Statusleiste oder im SIM-Status der Einstellungen. Der genaue Pfad hängt vom Hersteller ab. Prüfe ihn nach großen Betriebssystemupdates wie Android 17 auf unterstützten Pixel-Geräten erneut, bevor du die Hardware verdächtigst. Anbietereinstellungen und Netzverhalten können sich mit Softwareupdates ändern.

## Was die Latenz erhöht

Die Entfernung zum Server ist eine langweilige Erklärung, aber sie zählt. Ein Server in deiner Stadt antwortet vielleicht in weniger als 10 ms. Bei einem Server auf einem anderen Kontinent können selbst unter perfekten Bedingungen 120 ms oder mehr entstehen.

Als Nächstes kommt die Netzauslastung. Zu viele Geräte im selben WLAN, ein überfüllter Kanal in einem Mehrfamilienhaus oder ein stark ausgelasteter Mobilfunkmast erhöhen die Verzögerung. Messungen am Abend fallen deshalb oft schlechter aus als am Morgen.

VPNs fügen einen weiteren Umweg hinzu. Ein nahe gelegener VPN-Server erhöht den Ping vielleicht nur um 10 bis 20 ms. Ein weit entfernter Server kann deutlich mehr hinzufügen. Trenne die VPN-Verbindung und teste erneut, bevor du davon ausgehst, dass das Smartphone langsam ist.

Auch Datenverkehr im Hintergrund spielt eine Rolle. Cloud-Backups, App-Updates, Fotosynchronisierung und Streaming können die Latenz erhöhen, besonders bei privaten Internetanschlüssen mit begrenztem Upload.

## Was du mit dem Ergebnis anfangen kannst

Ist die Latenz nur im WLAN schlecht, starte den Router neu, gehe näher heran, wechsle auf 5 GHz und teste einen weniger belegten Kanal. Wird sie nur bei Auslastung schlecht, sieh dir QoS oder SQM im Router an.

Ist die Latenz nur bei mobilen Daten schlecht, vergleiche die Signalstärke an mehreren Standorten. Schalte den Flugmodus kurz ein und aus, damit sich das Smartphone neu mit dem Netz verbindet. Hat das Problem direkt nach einem Systemupdate begonnen, prüfe, ob ein Update für Carrier Services, die Anbieterkonfiguration oder das System aussteht.

Ist die Latenz überall schlecht, teste ein anderes Smartphone in denselben Netzen. Zeigen zwei Geräte dieselbe Verzögerung, liegt es am Netzwerk. Betrifft das Problem nur eines, kannst du VPN-Einstellungen, Hintergrund-Apps, Überhitzung und schließlich einen möglichen Funkfehler untersuchen.

## FAQ

### Ist Ping dasselbe wie Latenz?

Technisch bezeichnet Latenz die Verzögerung in eine Richtung, während Ping die Hin- und Rücklaufzeit misst. Bei der Fehlersuche am Smartphone werden die Begriffe fast austauschbar verwendet, weil Apps normalerweise den Round-Trip-Ping anzeigen.

### Kann ich den Ping unter Android senken?

Die Entfernung zum Server kannst du nicht ändern, vermeidbare Verzögerungen schon. Trenne eine langsame VPN-Verbindung, beende datenintensive Hintergrund-Apps, nutze im Nahbereich 5-GHz-WLAN und behebe Bufferbloat am Router, wenn die Latenz unter Last stark ansteigt.

### Warum ist meine Geschwindigkeit hoch, aber Spiele ruckeln trotzdem?

Weil Downloadgeschwindigkeit und Latenz unterschiedliche Probleme sind. Auch eine schnelle Verbindung kann starken Jitter, Paketverlust oder schlechte Latenz unter Last haben. Für Spiele ist ein gleichmäßiges Timing wichtiger als möglichst viele Mbit/s.

### Wie oft sollte ich die Latenz testen?

Teste über mehrere Tage zu verschiedenen Uhrzeiten. Ein Ergebnis ist nur eine Momentaufnahme. Drei oder vier Messungen über WLAN und mobile Daten zeigen wesentlich besser, ob das Problem dauerhaft besteht.
