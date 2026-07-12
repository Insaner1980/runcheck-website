---
title: "So testest du den Vibrationsmotor deines Smartphones"
description: "Schnelle Tests für den Vibrationsmotor eines Android-Smartphones mit Einstellungen, Tastaturfeedback, abgesichertem Modus und Herstellerdiagnose."
listSummary: "hardware, testen und diagnose"
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["hardware","testen","diagnose","android","ratgeber"]
locale: "de"
draft: false
---
---

Ein stummes Smartphone bedeutet nicht automatisch, dass der Vibrationsmotor defekt ist. Die meisten Vibrationsprobleme entstehen zuerst durch Einstellungen, danach durch Software und erst zuletzt durch Hardware.

Diese Reihenfolge ist wichtig. Einen Haptikmotor auszutauschen, obwohl Nicht stören die Vibration unterdrückt hat, ist verschwendetes Geld.

## Zuerst die Vibrationseinstellungen prüfen

Öffne die Einstellungen und suche nach Töne und Vibration, Töne oder Haptik. Der genaue Pfad hängt vom Hersteller ab.

Bei Samsung Galaxy lautet der aktuelle Pfad Einstellungen > Töne und Vibration > Vibrationsintensität. Anrufe, Benachrichtigungen, Systemfeedback und Medien können getrennte Regler haben. Einer lässt sich leicht herunterdrehen, während die anderen aktiv bleiben.

Prüfe auch Nicht stören. Auf Pixel-Geräten und Android-Versionen nahe am Google-Standard liegt die Funktion meist im Benachrichtigungsbereich. Bei Samsung findest du sie unter Einstellungen > Benachrichtigungen > Nicht stören. Je nach Regeln für Anrufe, Apps und Zeitpläne kann dieser Modus Vibrationen unterdrücken.

Kontrolliere außerdem die Tastatur. Gboard, Samsung Keyboard und SwiftKey haben jeweils eigene Einstellungen für haptisches Feedback. Ist die Tastaturvibration dort ausgeschaltet, spürst du beim Tippen nichts, obwohl der Motor funktioniert.

## Einen direkten Vibrationstest verwenden

Samsung Galaxy bietet die klarste integrierte Möglichkeit. Öffne Samsung Members, tippe auf Support und unter Telefondiagnose auf Jetzt beginnen. Wähle anschließend Vibration. In Samsungs aktueller Diagnoseliste ist Vibration ein eigener Test, daher ist dieser Weg verlässlicher als versteckte Codes.

Der ältere Samsung-Code `*#0*#` öffnet auf vielen Galaxy-Modellen weiterhin ein Hardwaretest-Menü. Tippe dort auf Vibration. Das Smartphone sollte vibrieren, bis du den Test beendest. Der Code benötigt Samsungs eigene Telefon-App. Firmware eines Mobilfunkanbieters, neuere One-UI-Sicherheitseinstellungen oder Unternehmensrichtlinien können das Menü blockieren.

Einige Android-Smartphones reagieren auch auf `*#*#0842#*#*`, einen älteren Code für Vibrations- und Hintergrundbeleuchtungstests. Verlasse dich nicht darauf. Pixel-Geräte unterstützen ihn meist nicht, und viele moderne Telefon-Apps ignorieren ihn.

Bei Xiaomi-, Redmi- und POCO-Smartphones kannst du das CIT-Menü mit `*#*#6484#*#*` öffnen. Name und Testauswahl unterscheiden sich zwischen MIUI- und HyperOS-Versionen, ein Vibrationstest ist aber häufig vorhanden.

## Feine Haptik mit der Tastatur testen

Öffne eine Notiz-App und tippe ein paar Sätze. Ist das haptische Feedback aktiviert, sollte jeder Tastendruck einen kurzen Impuls auslösen.

Der Test ist nützlich, weil er feine Haptik anders beansprucht als die kräftigere Vibration bei Anrufen. Kann der Motor Tastaturimpulse erzeugen, vibriert aber bei Anrufen nicht, liegt das Problem wahrscheinlich in einem Benachrichtigungskanal oder einer Anrufeinstellung.

Android-Apps können Vibration pro Benachrichtigungskanal steuern. Öffne die App-Informationen der betroffenen App und prüfe den Bereich Benachrichtigungen. Stelle bei Telefon, Messages, WhatsApp, Telegram oder Gmail sicher, dass im jeweiligen Kanal Vibration aktiviert ist.

## Software und Hardware voneinander trennen

Starte das Smartphone zuerst neu. Das klingt fast zu einfach, doch haptisches Feedback kann nach einem Softwarefehler ausfallen und nach einem Neustart wieder funktionieren.

Funktioniert die Vibration danach zunächst und verschwindet später erneut, teste den abgesicherten Modus. Bei vielen Android-Smartphones hältst du die Ein/Aus-Schaltfläche gedrückt und berührst Ausschalten länger, bis die Abfrage erscheint. Bei vielen Samsung-Geräten startest du neu und hältst während des Hochfahrens die Leiser-Taste gedrückt.

Der abgesicherte Modus deaktiviert Drittanbieter-Apps. Funktioniert die Vibration dort, entferne oder deaktiviere kürzlich installierte Automatisierungs-Apps, Anruffilter, Akkuspar-Apps, Launcher und Bedienungshilfen nacheinander. Das sind die üblichen Verdächtigen.

Funktioniert die Vibration auch im abgesicherten Modus nicht, reagiert sie weder in Samsung Members noch im OEM-Testmenü und sind alle Einstellungen aktiv, liegt der Fehler wahrscheinlich am Motor oder seiner Verbindung.

## Was im Smartphone ausfallen kann

Android-Smartphones verwenden meist einen von zwei Motortypen für haptisches Feedback. Ältere und günstigere Geräte haben häufig einen Eccentric Rotating Mass Motor, kurz ERM. Er fühlt sich wie ein kleines rotierendes Brummen an. Mittelklasse- und Flaggschiffmodelle verwenden meist einen Linear Resonant Actuator, kurz LRA, der schärfer und präziser wirkt.

Beide können ausfallen. Ein Sturz kann ein Flachbandkabel lösen, Lötstellen beschädigen oder die Halterung brechen, die den Motor am Rahmen fixiert. Wasser kann den Anschluss korrodieren. Auch Verschleiß ist möglich, obwohl Haptikmotoren meist lange halten, solange das Smartphone nicht stark getroffen oder zuvor geöffnet wurde.

Unregelmäßige Vibration ist ein typisches Zeichen für eine lockere Verbindung. An einem Tag stark, am nächsten schwach, nach einem Sturz ganz weg. Dieses Muster ist verdächtiger als ein Motor, der einfach dauerhaft aufgehört hat.

## Was du von einer Reparatur erwarten kannst

Der Austausch eines Vibrationsmotors gehört meist zu den günstigeren Hardwarearbeiten. Ein verklebtes Smartphone muss trotzdem erwärmt, geöffnet, von altem Kleber befreit und sorgfältig wieder verschlossen werden. Bei modularen Geräten wie einigen Fairphone-Modellen kann das Bauteil vom Nutzer austauschbar sein. Bei den meisten verbreiteten Android-Smartphones muss eine Fachkraft die Rückseite öffnen.

Wurde das Smartphone kürzlich fallen gelassen und wurde die Vibration direkt danach unzuverlässig, bitte die Reparaturwerkstatt, zuerst den Anschluss zu prüfen. Manchmal ist der Motor in Ordnung und nur das Kabel sitzt nicht mehr richtig.

runcheck testet den Vibrationsmotor nicht direkt. Die App kann aber begleitende Warnzeichen wie Überhitzung, veränderten Akkuverbrauch oder instabiles Laden nach einem Sturz oder Feuchtigkeitskontakt sichtbar machen.
