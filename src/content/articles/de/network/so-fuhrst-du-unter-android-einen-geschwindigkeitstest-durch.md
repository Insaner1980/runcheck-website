---
title: "So führst du unter Android einen Geschwindigkeitstest durch"
description: "Du tippst auf Start, beobachtest den Zeiger und bekommst eine Zahl, die ziemlich offiziell aussieht. Nützlich, ja. Eine endgültige Antwort, nein."
listSummary: "Du tippst auf Start, beobachtest den Zeiger und bekommst eine Zahl, die ziemlich offiziell aussieht."
hub: "network"
sourceNumber: 92
order: 3
tags: ["netzwerk","verbindungen","android","fehlerbehebung","ratgeber"]
locale: "de"
draft: false
---
Der Test zeigt, was in diesem Moment mit diesem Server und unter diesen Netzwerkbedingungen passiert ist. Er ist eine Momentaufnahme, keine vollständige Diagnose. Trotzdem ist er der beste erste Messwert, wenn sich dein Smartphone langsam anfühlt.

## Was der Test misst

Ein normaler Test zeigt Downloadgeschwindigkeit, Uploadgeschwindigkeit und Latenz an.

Die Downloadgeschwindigkeit beschreibt, wie schnell Daten dein Smartphone erreichen. Sie beeinflusst das Surfen, Streaming, App-Downloads, das Anzeigen von Cloud-Fotos und den größten Teil der alltäglichen Internetnutzung.

Die Uploadgeschwindigkeit zeigt, wie schnell Daten dein Smartphone verlassen. Sie ist wichtig beim Senden von Videos, Sichern von Fotos, Hochladen von Dateien, bei Videoanrufen und beim Teilen des Bildschirms.

Die Latenz, häufig Ping genannt, ist die Hin- und Rücklaufzeit in Millisekunden. Bei niedriger Latenz reagiert die Verbindung schnell. Eine hohe Latenz lässt Eingaben, Anrufe, Spiele und Remote-Arbeit träge wirken, selbst wenn die Downloadgeschwindigkeit gut aussieht.

Einige Apps zeigen außerdem Jitter an. Jitter beschreibt, wie stark die Latenz von einem Moment zum nächsten schwankt. Ein Ping von 30 ms mit niedrigem Jitter wirkt stabil. Ein Ping von 30 ms, der ständig stark springt, kann trotzdem abgehackte Gespräche verursachen.

## Nutze den integrierten Google-Test für eine schnelle Prüfung

Öffne einen Browser und suche bei Google nach **speed test**. Wenn die Karte erscheint, tippe auf **Run Speed Test**. Der Test verwendet Measurement Lab, kurz M-Lab, und zeigt die wichtigsten Werte an, ohne dass du eine App installieren musst.

Das reicht für eine schnelle Plausibilitätsprüfung. Du bekommst kaum Verlauf und das Werkzeug eignet sich nicht besonders gut, um mehrere Netzwerke über längere Zeit zu vergleichen. Wenn jemand sagt, das Internet sei langsam, siehst du damit aber schnell, ob das Smartphone 2 Mbps oder 200 Mbps erreicht.

## Nutze eine App, wenn du einen Verlauf brauchst

Speedtest by Ookla ist die bekannte Lösung. Die App misst Download, Upload, Latenz und in der Regel auch Jitter, erlaubt die Serverauswahl und speichert frühere Ergebnisse. Das ist praktisch, wenn du WLAN, LTE, 5G und verschiedene Orte vergleichen möchtest.

FAST by Netflix ist einfacher. Der Dienst zeigt zuerst die Downloadgeschwindigkeit, weil er für die Beurteilung von Streaming-Leistung entwickelt wurde. Tippe auf **Show more info**, um auch Upload und Latenz zu sehen.

Meteor by OpenSignal ist für technisch weniger erfahrene Menschen hilfreich. Die App erklärt, ob die gemessene Verbindung für typische Anwendungen wie Streaming, Gaming, Surfen oder Videoanrufe ausreicht.

runcheck verwendet für den integrierten Geschwindigkeitstest M-Lab NDT7 und speichert die Ergebnisse zusammen mit Verbindungstyp und Signalkontext. Das ist wichtig, weil Geschwindigkeit allein in die Irre führen kann. Ein schlechtes Ergebnis bei schwachem Signal bedeutet etwas anderes als ein schlechtes Ergebnis bei starkem Signal und hoher Latenz.

## Achte auf den Verbrauch mobiler Daten

Jeder Test überträgt echte Daten. Im WLAN spielt das meist keine große Rolle. Im Mobilfunknetz schon.

Kleine browserbasierte Tests können nur einige Dutzend MB verbrauchen. App-basierte Tests über schnelles LTE oder 5G können deutlich mehr übertragen, weil sie während des Testzeitraums möglichst viel Datenverkehr erzeugen, um die Kapazität der Verbindung zu messen. Mehrere Tests hintereinander können Hunderte MB verbrauchen.

Teste mobile Daten deshalb gezielt. Schalte WLAN aus, führe den Test ein- oder zweimal durch, speichere die Ergebnisse und beende die Messung.

## So bekommst du ein saubereres Ergebnis

Bleib stehen. Wenn du dich während eines Mobilfunktests bewegst, kann das Smartphone zwischen Funkzellen, Frequenzbändern oder unterschiedlichen Signalbedingungen wechseln.

Beende zuerst offensichtliche Bandbreitenfresser. Cloud-Backups, App-Updates, Videostreams und Downloads konkurrieren mit dem Test.

Teste WLAN und mobile Daten getrennt. Solange WLAN aktiviert ist, misst du das WLAN. Um Mobilfunk zu testen, schaltest du WLAN aus.

Führe nur dann drei Tests durch, wenn du einen besseren Durchschnitt brauchst. Weicht ein Ergebnis stark von den beiden anderen ab, lass es weg. Wahrscheinlich hat es eine kurze Überlastung, eine ungünstige Serverwahl oder eine Hintergrundübertragung erwischt.

Nutze für normale Fehlersuche einen nahe gelegenen Server. Ein weit entfernter Server erhöht die Latenz und kann aus Gründen, die nichts mit deiner lokalen Verbindung zu tun haben, eine niedrigere Geschwindigkeit anzeigen. Entfernte Server sind nur sinnvoll, wenn du ausdrücklich wissen möchtest, wie gut Dienste in dieser Region erreichbar sind.

## Was die Werte im Alltag bedeuten

Für Surfen und Nachrichten können selbst 5 Mbps ausreichen, wenn die Latenz niedrig ist. Für HD-Video reichen meist 5 bis 10 Mbps. Für 4K-Streaming solltest du mindestens 25 Mbps pro Stream anpeilen.

Bei Videoanrufen sind Upload und Latenz wichtiger, als viele denken. Ein Downloadwert von 200 Mbps rettet keinen Anruf, wenn der Upload nur 0,5 Mbps erreicht oder der Jitter hoch ist.

Beim Gaming sind Latenz und Jitter nach der Installation des Spiels wichtiger als die Downloadgeschwindigkeit. Eine stabile Verbindung mit 40 Mbps kann sich besser anfühlen als 400 Mbps mit zufälligen Latenzspitzen.

Bei Cloud-Backups bestimmt die Uploadgeschwindigkeit, wie mühsam der Vorgang wird. Upload ist bei Festnetz- und Mobilfunkverbindungen häufig deutlich langsamer als Download. Ein schneller Downloadwert bedeutet deshalb nicht automatisch schnelle Sicherungen.

## Vergleiche mit dem richtigen Versprechen

Vergleiche das Ergebnis im Heim-WLAN mit deinem Internettarif, rechne aber mit dem normalen WLAN-Overhead. Wenn dein Tarif 100 Mbps bietet und das Smartphone in Routernähe 80 oder 90 Mbps erreicht, ist das kein Problem. Erreicht es direkt neben dem Router nur 25 Mbps, solltest du Router, Kanalüberlastung, Internetanbieter und andere aktive Geräte prüfen.

Erwarte im Mobilfunknetz nicht automatisch die beworbene 5G-Spitzengeschwindigkeit. Der reale Wert hängt von Anbieter, Frequenzband, Auslastung der Funkzelle, Tarifpriorität, Empfang im Gebäude und dem Modem des Geräts ab. Teste an mehreren Orten, bevor du das Smartphone beurteilst.

Vergleiche außerdem mit der tatsächlichen Aufgabe. Wenn Netflix funktioniert, Gespräche sauber klingen und Apps schnell geladen werden, ist die Jagd nach einer hübscheren Testzahl möglicherweise Zeitverschwendung.

## Bewahre Ergebnisse nur auf, wenn sie eine Geschichte erzählen

Ein einzelnes Ergebnis reicht, um zu bestätigen, dass etwas nicht stimmt. Einige Messungen über längere Zeit helfen besser dabei, ein Muster zu erkennen.

Teste einmal, wenn sich die Verbindung schlecht anfühlt, und noch einmal, wenn sie normal funktioniert. Notiere Netzwerk, Ort, Uhrzeit, Signalstärke und ob ein VPN verbunden war.

Genau dafür ist ein Verlauf nützlich. Fallen die WLAN-Geschwindigkeiten jeden Abend ab, liegt es wahrscheinlich an der Auslastung im Haushalt oder beim Internetanbieter. Wird der Mobilfunk nur in einem Gebäude langsam, spricht das für ein Abdeckungsproblem. Sind alle Netzwerke ausschließlich auf einem Smartphone langsam, solltest du das Gerät untersuchen.
