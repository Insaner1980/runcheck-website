---
title: "So führst du eine vollständige Diagnose auf einem Android-Smartphone durch"
description: "Android hat keine einzelne Schaltfläche, die auf einmal eine vollständige Diagnose ausführt. Die Werkzeuge sind vorhanden, aber über Einstellungsmenüs, versteckte Telefoncodes, Hersteller-Apps und Systembefehle verteilt, die die meisten Menschen nie sehen. Diese Anleitung führt sie in einem Ablauf zusammen, der möglichst viele Smartphones abdeckt und zugleich deutlich macht, wo Unterschiede durch Hersteller, Mobilfunkanbieter und Android-Version bestehen bleiben."
listSummary: "Android hat keine einzelne Schaltfläche, die auf einmal eine vollständige Diagnose ausführt."
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","updates","sicherheit","software","ratgeber"]
locale: "de"
draft: false
---
## Der schnellste Weg: Diagnosewerkzeuge des Herstellers

Viele große Android-Hersteller liefern ein eigenes Diagnosewerkzeug mit. Es ist entweder vorinstalliert oder über einen versteckten Code erreichbar. Beginne hier, bevor du etwas installierst.

**Samsung Galaxy-Smartphones** haben besonders leicht zugängliche integrierte Diagnosen. Öffne die Telefon-App und wähle `*#0*#`. Dadurch öffnet sich auf vielen Galaxy-Modellen ein Testfeld mit einzelnen Prüfungen für das Display (rote, grüne und blaue Flächen zum Erkennen toter Pixel), die Berührungserkennung, Front- und Rückkamera, Lautsprecher, Vibrationsmotor sowie Sensoren wie Beschleunigungs- und Näherungssensor. Der Code funktioniert auf zahlreichen älteren und aktuellen Galaxy-Geräten. Netzbetreiber-Firmware und regionale Softwareversionen können Servicemenüs jedoch deaktivieren. Samsung bietet außerdem eine Diagnosesammlung in der Samsung Members App. Öffne sie, tippe auf **Support** und dann unter **Telefondiagnose** auf **Jetzt beginnen**. Die App prüft unter anderem Akku, Display, Touchscreen, Ton, WLAN, Bluetooth und mehrere Sensoren und zeigt für jeden Test ein Ergebnis an. Samsung Members ist auf den meisten modernen Galaxy-Smartphones verfügbar. Auf unterstützten Modellen und in bestimmten Regionen können neuere One UI-Versionen auch einen Akkuzustand in Prozent und die Zahl der Ladezyklen anzeigen.

**Google Pixel-Smartphones** bieten zwei relevante Diagnosewege. Auf dem Pixel 6 und neueren Modellen zeigt **Einstellungen > Gerätezustand & Support** den allgemeinen Gerätestatus, den Status einzelner Funktionen, Akku- und Temperaturinformationen sowie empfohlene Prüfungen wie Lade- oder Touchscreen-Diagnosen. Die Pixel Repair Diagnostics App lässt sich auf unterstützten Pixel-Geräten ebenfalls starten: Bleibe mit dem Internet verbunden, öffne die Telefon-App und wähle `*#*#7287#*#*`. Auf dem Pixel 8a und neueren Modellen findest du unter **Einstellungen > Über das Telefon > Akkuinformationen** die Zahl der Ladezyklen, das Herstellungsdatum und das Datum der ersten Verwendung. Auf vielen anderen Smartphones mit unverändertem oder nur leicht angepasstem Android öffnet `*#*#4636#*#*` ein verstecktes Testmenü. Es kann Informationen zum Mobilfunknetz, zur Signalstärke, zum Netztyp und zum bevorzugten Netzwerkmodus sowie Akkudaten wie Spannung, Temperatur und Status enthalten. Der Code gehört seit frühen Android-Versionen zum System, funktioniert auf älteren Geräten aber oft zuverlässiger, weil einige neuere Smartphones und Netzbetreiber den Zugriff einschränken.

**Xiaomi-, POCO- und Redmi-Smartphones** haben ein verstecktes CIT-Menü (Component Integrated Testing). Wähle in der Telefon-App `*#*#6484#*#*` oder `*#*#64663#*#*`. Die Testsammlung kann Touchscreen, Displayfarben, Näherungssensor, Beschleunigungssensor, Gyroskop, Kompass, Blitz-LED, Lautsprecher, Mikrofon, Kamera, Vibration, WLAN, Bluetooth, GPS und Fingerabdrucksensor abdecken. Jeder Test verlangt eine manuelle Bestätigung: Das Smartphone zeigt beispielsweise ein Muster oder spielt einen Ton ab, anschließend wählst du bestanden oder nicht bestanden.

**OnePlus-Smartphones** reagieren bei manchen Modellen mit `*#808#` auf ein Diagnosemenü. Wo sie vorhanden sind, können OnePlus-Diagnosewerkzeuge Display, Ton, Verbindungen und Sensoren prüfen. Die Verfügbarkeit schwankt jedoch stärker als bei Samsung und Pixel.

Diese Codes funktionieren nicht überall. Geräte mit Netzbetreiber-Firmware können sie sperren, und Hersteller entfernen Servicemenüs mitunter durch Softwareupdates. Reagiert ein Code nicht, ist er auf diesem Gerät entweder nicht umgesetzt oder deaktiviert.

## Integrierte Android-Werkzeuge, die auf fast jedem Smartphone helfen

Auch ohne herstellerspezifisches Menü enthält jedes moderne Android-Smartphone nützliche Diagnoseinformationen in den Einstellungen. Das ersetzt keinen vollständigen Zustandscheck, deckt aber viele häufige Probleme auf.

**Akkuverbrauch** unter **Einstellungen > Akku** zeigt je nach Gerät die Entladung der vergangenen 24 Stunden oder mehrerer Tage. Achte auf ungewöhnlich steile Abfälle, die auf eine fehlerhafte App oder einen Hintergrundprozess hindeuten können. Unter Android 9 und 10 ist die Ansicht einfacher und zeigt vor allem eine nach Verbrauch sortierte App-Liste. Auch damit findest du die größten Stromverbraucher. Auf Android 14 und neuer können manche Geräte über Apps von Drittanbietern zusätzliche Eigenschaften aus dem BatteryManager HAL bereitstellen, darunter eine geschätzte Kapazität oder die Zahl der Ladezyklen. Ob diese Werte erscheinen, hängt von der Umsetzung des Herstellers ab.

**Speicherdiagnose** unter **Einstellungen > Speicher** teilt die Belegung nach Kategorien wie Apps, Bilder, Videos, Audio, Dokumente und Systemdateien auf. Ist das Smartphone langsam und der interne Speicher zu mehr als 85 % belegt, kann das allein die Ursache sein. Wenn NAND-Flash fast voll ist, hat der Controller weniger freien Raum für Verschleißausgleich und Speicherbereinigung, wodurch die Leistung sinken kann.

**Netzwerkdiagnose** unter **Einstellungen > Netzwerk & Internet** zeigt den aktuellen Verbindungstyp, die Signalstärke und das verbundene WLAN. Für genauere Mobilfunkdaten findest du auf vielen Geräten unter **Einstellungen > Über das Telefon > SIM-Status** die Signalstärke in dBm. Werte zwischen -50 und -90 dBm sind für Mobilfunk normal. Unter -110 dBm ist der Empfang schwach.

**Entwickleroptionen** enthalten einige hilfreiche Diagnosewerkzeuge. Aktiviere sie unter **Einstellungen > Über das Telefon**, indem du siebenmal auf **Build-Nummer** tippst. Danach stehen unter anderem **Laufende Dienste** für aktive Hintergrundprozesse und Speichernutzung, **USB-Debugging** für ADB-Diagnosen und **Fehlerbericht erstellen** für ein ausführliches Systemprotokoll zur Verfügung. Die genaue Bezeichnung und Position kann je nach Hersteller abweichen.

## Sensoren und Hardware ohne zusätzliche Apps prüfen

Der Näherungssensor lässt sich auf manchen Geräten über `*#*#0588#*#*` testen. Für andere Sensoren sind praktische Tests oft genauso aussagekräftig: Öffne Google Maps und prüfe, ob sich der blaue Richtungskegel mit dem Smartphone dreht (Kompass und Gyroskop). Führe einen Anruf und halte das Gerät ans Ohr, um zu sehen, ob sich das Display ausschaltet (Näherungssensor). Aktiviere die automatische Helligkeit und decke den oberen Displaybereich ab, um den Umgebungslichtsensor zu prüfen.

GPS kannst du mit jeder Karten-App testen. Eine spezielle GPS-Test-App zeigt zusätzlich die Zahl der Satelliten und das Signal-Rausch-Verhältnis. Unter freiem Himmel sollte ein funktionierendes GPS innerhalb von etwa 30 Sekunden eine Position mit ungefähr 8-12 Satelliten bestimmen.

## Wann Apps von Drittanbietern wirklich etwas bringen

Die integrierten Werkzeuge decken viel ab, haben aber Lücken. Apps von Drittanbietern sind vor allem in drei Bereichen nützlich.

Die größte Lücke ist die Schätzung des Akkuzustands. AccuBattery verfolgt das Ladeverhalten über längere Zeit und schätzt die verbleibende Kapazität im Verhältnis zur Nennkapazität. Für brauchbare Werte braucht die App ungefähr eine Woche und mehrere Ladezyklen. Die Schätzung wird mit längerer Nutzung besser. DevCheck zeigt CPU-Taktraten, GPU-Frequenz, Temperaturzonen, Akkustrom, Spannung und Sensorwerte in Echtzeit. Das hilft bei thermischer Drosselung oder einem Sensor, der offensichtlich falsche Werte meldet. AIDA64 liefert ausführliche Hardwaredaten wie SoC-Modell, Displayauflösung und -dichte, RAM-Typ und -Menge, Speicher-Benchmarks und installierte Codecs. Das ist eher Identifikation als Diagnose, aber hilfreich, wenn du genau wissen musst, welche Hardware im Gerät steckt.

Keine dieser Apps kann Daten lesen, die der Hersteller nicht freigibt. Ist das HAL für den Akkuzustand nicht umgesetzt, kann keine App den echten Ladezyklusstand oder die tatsächliche Kapazität auslesen. Dann bleibt nur eine Schätzung aus dem Ladeverhalten.

## Tiefere Prüfung mit ADB

Android Debug Bridge bietet den tiefsten Diagnosezugriff ohne Root. Verbinde das Smartphone per USB mit einem Computer und aktiviere USB-Debugging. Danach kannst du folgende Befehle verwenden:

`adb shell dumpsys battery` zeigt Akkustand, Temperatur, Spannung, Ladestatus, Akkustatus und auf manchen Geräten die Zahl der Ladezyklen. Die Ausgabe unterscheidet sich je nach Hersteller. Samsung-Geräte liefern häufig Felder, die Pixel-Geräte nicht melden, und umgekehrt.

`adb shell dumpsys batterystats` erzeugt ein sehr umfangreiches Protokoll der Akkuhistorie, darunter Wake Locks, App-Nutzung und Netzwerkaktivität. Mit Googles Battery Historian lässt sich daraus eine visuelle Zeitleiste erstellen, die zeigt, was den Akku wann belastet hat.

`adb shell dumpsys connectivity` meldet den aktuellen Netzwerkzustand, DNS-Server und aktive Schnittstellen.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` versucht, Temperatursensoren auszulesen. Nicht jede Zone ist zugänglich. SELinux-Richtlinien schränken seit Android 12 stärker ein, welche sysfs-Pfade gelesen werden dürfen. Einige Temperaturzonen liefern deshalb selbst über ADB nur "Permission denied".

ADB setzt einen Computer und etwas Sicherheit im Umgang mit der Befehlszeile voraus. Für die meisten Menschen reichen die Einstellungsseiten, die Diagnose-App des Herstellers und ein sorgfältiger manueller Hardwaretest.

## Ergebnisse richtig einordnen

Rohwerte brauchen Kontext. Eine Akkutemperatur von 32 °C bei leichter Nutzung ist normal. 42 °C im Leerlauf in einem kühlen Raum sind es nicht. Eine Speicherbelegung von 78 % ist noch in Ordnung. Bei 92 % kann das Smartphone deutlich kämpfen. -85 dBm funktionieren in Innenräumen meist gut, bei -115 dBm brechen Anrufe eher ab.

Eine Diagnose soll nicht eine einzige Zahl finden, die "defekt" bedeutet. Sie soll Werte mit dem erwartbaren Bereich vergleichen und Muster sichtbar machen: einen Akku, der in sechs Monaten 15 % Kapazität verloren hat, einen Sensor, der ständig null meldet, oder einen fast vollen Speicher, der das gesamte System ausbremst.

runcheck fasst Akku-, Temperatur-, Netzwerk- und Speicherdiagnosen in einer Übersicht mit einem gemeinsamen Zustandswert zusammen. Dadurch musst du nicht jedes System einzeln prüfen. Die App kennzeichnet über einen Vertrauensindikator außerdem Werte, die möglicherweise unzuverlässig sind. Das ist wichtig, weil nicht jedes Android-Gerät jede Messgröße korrekt oder überhaupt meldet.

## FAQ

**Kann ich ein Smartphone diagnostizieren, das nicht mehr startet?**
Nur teilweise. Wenn das Gerät noch in den Wiederherstellungsmodus gelangt, meist über Ein/Aus + Lauter, je nach Modell aber auch über eine andere Tastenkombination, kannst du zumindest Display, Tasten und teilweise die Berührungserkennung prüfen. Einige Samsung-Geräte bieten zusätzlich den Download Mode für Firmwarearbeiten. Eine vollständige Diagnose setzt ein laufendes Betriebssystem voraus.

**Brauchen Diagnose-Apps Root-Zugriff?**
Nein. Alles in dieser Anleitung funktioniert ohne Root. Root-Zugriff kann weitere Daten auf Kernel-Ebene freigeben, zugleich aber Play Integrity-Prüfungen scheitern lassen und Herstellerservice oder freiwillige Garantiebedingungen beeinflussen. Für einen praktischen Zustandscheck ist er nicht nötig.

**Wie oft sollte ich eine vollständige Diagnose ausführen?**
Wenn das Smartphone auffällig wird: Apps starten langsamer, der Akku entlädt sich unerwartet, Verbindungen brechen ab oder das Gerät wird zu heiß. Ein fester Zeitplan ist nicht nötig. Beim Kauf eines gebrauchten Smartphones solltest du die vollständige Prüfung immer vor der Übergabe durchführen.

**Funktioniert `*#0*#` auf Smartphones anderer Hersteller als Samsung?**
Nein. Xiaomi verwendet auf vielen Modellen `*#*#6484#*#*`, OnePlus möglicherweise `*#808#`, die Pixel-Reparaturdiagnose `*#*#7287#*#*` und viele Geräte mit weitgehend unverändertem Android `*#*#4636#*#*`. Ob ein Code funktioniert, hängt von Modell, Region, Firmware und Mobilfunkanbieter ab.

**Verändert eine Diagnose meine Daten oder Einstellungen?**
Normale Diagnosen lesen nur Informationen aus oder starten Hardwaretests. Eine Ausnahme ist ein versehentlich ausgewähltes Zurücksetzen in einem Servicemenü. Bleibe deshalb in den Bereichen für Diagnose und Tests.
