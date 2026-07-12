---
title: "Welche Sensoren hat mein Smartphone und wie prüfe ich das?"
description: "Warum zeigt ein Smartphone in Maps deine Laufrichtung exakt an, während ein anderes nur einen ungenauen blauen Kreis darstellt? Meist liegt es an den Sensoren. Jedes Android-Smartphone besitzt einige davon, doch die genaue Ausstattung hängt von Modell, Preisklasse und Baujahr ab."
listSummary: "diagnose, sensoren und android"
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnose","sensoren","android","hardware","ratgeber"]
locale: "de"
draft: false
---
Ein Flaggschiffmodell von 2026 kann ein Gyroskop, ein Barometer, einen Fingerabdrucksensor unter dem Display, mehrere Wake-up-Sensoren und eine ganze Reihe softwareberechneter Bewegungssensoren haben. Ein günstiges Smartphone von vor ein paar Jahren bietet vielleicht nur die Grundausstattung. Dieser Unterschied macht sich bemerkbar, wenn Bildschirmdrehung, adaptive Helligkeit, Kompassrichtung, AR-Apps oder die Aktivierung beim Anheben nicht wie erwartet funktionieren.

## Beginne mit einer Sensor-App

Die Android-Einstellungen zeigen keine vollständige Liste der Hardwaresensoren. Dort findest du grundlegende Geräteinformationen, aber nicht jeden Sensor, den Android über sein Sensor-Framework bereitstellt.

Am einfachsten prüfst du die Ausstattung mit einer Diagnose-App eines Drittanbieters, etwa DevCheck, CPU-Z, Sensor Test oder Sensors Toolbox. Öffne die App und suche nach der Hardwareliste. Eine gute App zeigt jeden bei Android registrierten Sensor mit Name, Hersteller, aktuellen Messwerten, Auflösung und Stromverbrauch.

Näher kommst du der Wahrheit direkt auf dem Smartphone kaum. Einen Haken hat die Liste trotzdem: Sie zeigt Sensoren, auf die Android zugreifen kann, nicht jedes physische Bauteil auf der Platine. Ein Fingerabdruckleser, Kamerasensor, Modem oder Ultraschallsystem zur Näherungserkennung erscheint möglicherweise nicht neben Beschleunigungssensor und Gyroskop.

## Wählcodes können helfen, sind aber nicht verlässlich

Einige Android-Smartphones besitzen versteckte Testmenüs. Samsung-Geräte unterstützen häufig `*#0*#`, womit sich ein Hardwarediagnosebildschirm mit Sensortests öffnen kann. Auf manchen Android-Geräten öffnet `*#*#4636#*#*` ein Testmenü. Dort geht es allerdings eher um Telefon-, Akku- und Netzwerkinformationen als um eine vollständige Sensorliste.

Der lästige Teil: Diese Codes funktionieren nicht überall. Hersteller, Mobilfunkanbieter, Regionen und neuere Softwareversionen können sie deaktivieren. Passiert nach der Eingabe nichts, beweist das nicht, dass dem Smartphone ein Sensor fehlt. Es beweist nur, dass der Code auf diesem Gerät nicht funktioniert hat.

Als zweite Kontrolle sind technische Datenbanken nützlich. GSMArena und die Produktseiten der Hersteller führen die ab Werk vorgesehene Sensorausstattung oft unter Funktionen oder technischen Daten auf. So erfährst du, was das Modell enthalten sollte. Ob der Sensor in deinem konkreten Gerät richtig arbeitet, verrät die Liste nicht.

## Sensoren, die du meistens findest

### Beschleunigungssensor

Der Beschleunigungssensor misst Beschleunigung auf drei Achsen. Bildschirmdrehung, Schrittzählung, Schüttelgesten und grundlegende Bewegungserkennung hängen davon ab. Fast jedes Android-Smartphone hat einen.

### Gyroskop

Das Gyroskop misst Drehbewegungen. Es macht die Erfassung der Ausrichtung deutlich präziser, besonders bei AR, VR, Kamerastabilisierung und der Richtungsanzeige in Karten. Manche Einsteigergeräte verzichten darauf. Deshalb können zwei Smartphones Google Maps ausführen, aber nur eines zeigt sauber in die Richtung, in die du blickst.

### Magnetometer

Das Magnetometer erkennt Magnetfelder und dient als Kompass des Smartphones. Es hilft Karten-Apps, die Blickrichtung zu bestimmen. Die Genauigkeit schwankt stark, weil Hüllen, Autohalterungen, Laptops, Lautsprecher und andere Elektronik die Messung stören können.

### Näherungssensor

Der Näherungssensor erkennt, wenn sich etwas nahe am Display befindet, meist dein Gesicht während eines Anrufs. Das Smartphone schaltet damit den Bildschirm aus und verhindert versehentliche Eingaben mit der Wange.

Ältere Geräte verwenden normalerweise einen kleinen physischen Sensor beim Hörer. Neuere Smartphones können die Nähe virtuell aus Software-, Audio-, Display- oder Umgebungslichtdaten ableiten. Dieser Trend ist real, macht die Fehlersuche aber unübersichtlicher, weil sich das Verhalten nicht immer einem sichtbaren Sensor in der Diagnose-App zuordnen lässt.

### Umgebungslichtsensor

Der Umgebungslichtsensor misst die Helligkeit der Umgebung in Lux und liefert die Daten für die adaptive Helligkeit. Meist sitzt er in der Nähe der Frontkamera, bei manchen modernen Smartphones aber unter dem Display.

Ein helles Büro kann einige Hundert Lux erreichen. Direktes Sonnenlicht liegt weit über 10.000 Lux. Verbeiße dich nicht in exakte Werte. Entscheidend ist, ob sich die Zahl ändert, wenn du den oberen Geräterand abdeckst oder in eine hellere Umgebung gehst.

### Barometer

Das Barometer misst den Luftdruck, normalerweise in Hektopascal. Smartphones nutzen die Daten für schnellere Höhenschätzungen und zusätzlichen Standortkontext. Viele Mittelklasse- und Flaggschiffmodelle besitzen eines, bei günstigeren Geräten ist es aber keineswegs garantiert.

### Fingerabdrucksensor

Ein Fingerabdruckleser ist ebenfalls ein Sensor, auch wenn er in der normalen Android-Sensorliste nicht erscheint. Er kann optisch unter dem Glas, per Ultraschall unter dem Display oder kapazitiv an der Seite oder Rückseite arbeiten.

### Herzfrequenzsensor

Eigene Herzfrequenzsensoren sind bei modernen Smartphones selten. Samsung verbaute sie in einigen älteren Modellen der Galaxy S- und Note-Reihen, doch die Funktion ist größtenteils auf Smartwatches gewandert. Wenn dein aktuelles Smartphone keinen Herzfrequenzsensor auflistet, ist das normal.

## Sensoren, die leicht übersehen werden

Schrittzähler und Schritterkennung können als getrennte Sensoren erscheinen. Android definiert sowohl `TYPE_STEP_COUNTER` als auch `TYPE_STEP_DETECTOR`. Manche Smartphones erledigen diese Aufgaben mit stromsparender Hardware. Andere berechnen Schritte aus den Daten des Beschleunigungssensors.

Rotation Vector ist normalerweise ein fusionierter Sensor. Er kombiniert Bewegungs- und Ausrichtungsdaten, um die dreidimensionale Lage des Smartphones zu schätzen. In der Diagnose kann er auftauchen, obwohl kein physischer Chip mit dem Namen "Rotation Vector" existiert.

Auch Gravitation und lineare Beschleunigung sind abgeleitete Messwerte. Gravitation isoliert die Erdanziehung. Lineare Beschleunigung rechnet sie heraus, damit sich Apps auf die tatsächliche Bewegung konzentrieren können.

Significant Motion ist ein stromsparender Triggersensor, der das Smartphone bei einer deutlichen Bewegung aufweckt. Funktionen wie die Aktivierung beim Anheben und die Erkennung von Aktivitäten im Hintergrund können von diesem Sensorverhalten abhängen.

Faltbare Geräte bringen noch einen ungewöhnlichen Sensor mit: den Scharnierwinkel. Android definiert dafür einen eigenen Sensortyp, über den Geräte ihre Faltposition an Apps melden können. Ein klassisches, nicht faltbares Smartphone besitzt ihn nicht.

## Hardware- und Softwaresensoren sind nicht dasselbe

Android unterscheidet zwischen physischen Hardwaresensoren und softwareberechneten Sensoren. Beschleunigungssensor und Gyroskop sind Hardwaresensoren. Gravitation, lineare Beschleunigung und Rotation Vector können aus einem oder mehreren Hardwaresensoren berechnet werden.

Dieser Unterschied wirkt sich auf den Stromverbrauch aus. Ein eigener, stromsparender Schrittzähler kann den ganzen Tag Schritte erfassen, während die Haupt-CPU schläft. Ein softwarebasierter Schrittzähler muss mehr Arbeit erledigen und kann daher mehr Akku verbrauchen.

Deine Sensor-App zeigt möglicherweise Herstellernamen wie Bosch, STMicroelectronics, TDK InvenSense, AKM oder Sensortek. Das deutet normalerweise auf ein echtes Hardwarebauteil hin. Ein allgemeiner Name mit Android- oder AOSP-Bezug weist häufig auf einen fusionierten oder softwareberechneten Sensor hin.

Eine saubere Regel für jedes Smartphone gibt es nicht. OEMs können herstellerspezifische Sensoren bereitstellen, Hardware hinter Systemdiensten verbergen oder ein physisches Bauteil durch eine Softwarelösung ersetzen.

## Wann die Sensorliste wichtig wird

Die meisten Menschen interessieren sich erst für Sensoren, wenn etwas nicht mehr funktioniert. Der Bildschirm dreht sich nicht. Die adaptive Helligkeit springt. Eine Kompass-App zeigt nach Norden in dein Sofa. Eine AR-App startet nicht, weil dem Smartphone ein Gyroskop fehlt.

Eine Sensor-App hilft dir, drei Fälle auseinanderzuhalten:

- Der Sensor ist vorhanden und seine Messwerte ändern sich normal. Das Problem liegt wahrscheinlich an App-Einstellungen, Kalibrierung, Berechtigungen oder Software.
- Der Sensor ist vorhanden, aber die Werte sind eingefroren oder unsinnig. Das kann auf einen defekten Sensor, einen Firmwarefehler oder ein Kalibrierungsproblem hindeuten.
- Der Sensor erscheint überhaupt nicht. Möglicherweise besitzt das Smartphone ihn nicht, und keine Einstellung kann ihn nachträglich hinzufügen.

Ein fehlendes Gyroskop lässt sich nicht per Software installieren. Externe Bluetooth-Sensoren gibt es für Fitness- und Spezialanwendungen, doch sie werden dadurch nicht Teil des integrierten Android-Sensor-Frameworks.

Mehrere Einträge für denselben Sensor sind ebenfalls normal. Ein Smartphone kann Wake-up- und Non-Wake-up-Varianten, kalibrierte und unkalibrierte Versionen oder herstellerspezifische Kopien neben den Android-Standardsensortypen bereitstellen.
