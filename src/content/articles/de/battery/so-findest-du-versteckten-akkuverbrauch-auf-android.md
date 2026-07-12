---
title: "So findest du versteckten Akkuverbrauch auf Android"
description: "Warum macht die Akkuübersicht Android-System oder Google Play-Dienste verantwortlich, obwohl wahrscheinlich eine App, eine Synchronisierungsschleife, der Standort oder das Modem dahintersteckt? Weil diese Systemeinträge oft im Auftrag anderer Funktionen arbeiten. Ärgerlich, ja. Nutzlos, nein."
listSummary: "akku, akkuverbrauch und fehlerbehebung"
hub: "battery"
sourceNumber: 25
order: 15
subgroup: "Drain"
tags: ["akku","akkuverbrauch","fehlerbehebung","android","leistung"]
locale: "de"
draft: false
---
Bei verstecktem Akkuverbrauch geht es vor allem darum herauszufinden, was das Smartphone bei ausgeschaltetem Display wach hält.

## Beginne mit der langweiligen Anzeige

Öffne zuerst **Einstellungen > Akku > Akkunutzung**. Auf Pixel-Geräten kannst du zwischen App- und Systemansicht wechseln, sofern diese Option verfügbar ist. Bei Samsung gehst du zu **Einstellungen > Gerätewartung > Akku > Details anzeigen**. Xiaomi, OnePlus, Motorola und andere Hersteller verwenden andere Bezeichnungen, bieten aber ebenfalls eine Liste der App-Nutzung.

Achte auf drei Muster:

1. Eine App mit hoher Hintergrundnutzung und wenig aktiver Nutzung.
2. Einen Systemeintrag, der über mehrere Ladezyklen hinweg auffällig bleibt.
3. Eine Kurve, die während einer eigentlich ruhigen Phase mit ausgeschaltetem Display deutlich fällt.

Ein einzelnes schlechtes Ergebnis nach einer langen Sicherung in Google Fotos oder einem Play-Store-Update reicht nicht. Drei ähnliche Ergebnisse hintereinander sind ein Muster.

## Prüfe, ob das Smartphone wirklich schläft

Der Doze-Modus von Android reduziert Hintergrundarbeit, wenn das Smartphone nicht angeschlossen, unbenutzt und unbewegt ist. Er verschiebt Aufgaben und Synchronisierungen, begrenzt den Netzwerkzugriff und bündelt Wartungsfenster. Apps können begrenzte Ausnahmen erhalten, und Benachrichtigungen mit hoher Priorität dürfen das Gerät kurz wecken. Ein ruhendes Smartphone sollte trotzdem lange Zeit fast nichts tun.

Fällt die Akkukurve über Nacht stetig oder fühlt sich das Gerät auf dem Nachttisch warm an, stört etwas diesen Ruhezustand.

Auf einigen Android-Versionen zeigt die Akkuübersicht eine Zeitleiste mit **Aktiv** oder einer ähnlichen Bezeichnung. Ist dieser Balken lange aktiv, obwohl **Display an** es nicht ist, hast du einen wichtigen Hinweis. Viele One-UI-Versionen von Samsung zeigen unter dem Diagramm vergleichbare schmale Statusbalken.

Kein solcher Balken? Dann brauchst du die nächste Ebene.

## Nutze den abgesicherten Modus, bevor du den Akku beschuldigst

Der abgesicherte Modus wird unterschätzt. Er deaktiviert heruntergeladene Apps vorübergehend und lässt nur das Kernsystem laufen. Verschwindet der nächtliche Verbrauch dort fast vollständig, ist die Hardware wahrscheinlich nicht das Problem.

Wie du den Modus startest, hängt vom Smartphone ab. Bei vielen Geräten öffnest du das Ein-/Aus-Menü und hältst **Ausschalten** gedrückt, bis die Abfrage für den abgesicherten Modus erscheint. Google beschreibt den abgesicherten Modus als Methode zum Auffinden problematischer Apps. Samsung verwendet ihn ebenfalls als Diagnosewerkzeug, das die meisten Drittanbieter-Apps deaktiviert.

Führe bei starkem Verbrauch einen einzigen Test über Nacht im abgesicherten Modus durch. Bleib nicht eine Woche darin. Verbessert sich die Laufzeit, beginne mit Apps, die kürzlich installiert oder aktualisiert wurden, und entferne oder begrenze sie nacheinander.

## Entwickleroptionen zeigen, was gerade aktiv ist

Aktiviere die Entwickleroptionen, indem du in den Einstellungen den Bereich **Über das Telefon** öffnest und siebenmal auf **Build-Nummer** tippst. Danach findest du **Entwickleroptionen** je nach Gerät unter **System** oder an einer herstellerspezifischen Stelle.

**Laufende Dienste** liefert eine Momentaufnahme von Diensten, die Arbeitsspeicher und teilweise CPU-Zeit verwenden. Das ist kein vollständiger Akkubericht, kann aber offensichtliche Probleme aufdecken. Läuft eine Shopping-App, Live-Wallpaper-App, Cleaner-App oder alte Fitness-App, obwohl du sie nicht geöffnet hast, solltest du genauer hinsehen.

Möglicherweise gibt es außerdem Einträge wie **Standby-Apps** oder **Inaktive Apps**. Sie zeigen, wie Android die Aktivität einer App einordnet. Nicht jedes Smartphone bietet diese Ansichten, und manche Hersteller verstecken sie. Das ist die Reibung bei Android-Diagnosen: Die Werkzeuge existieren, doch die Hälfte der Arbeit besteht darin, herauszufinden, wo der Hersteller sie abgelegt hat.

## Nutze ADB, wenn du Belege brauchst

ADB ist die sauberste Methode ohne Root-Zugriff, um Wake Locks und den Akkuverlauf genauer zu untersuchen. Sie erfordert mehr Aufwand, erspart aber einiges an Raten.

Du brauchst einen Computer mit installierten platform-tools und aktivierter USB-Debugging-Funktion auf dem Smartphone. Setze zuerst die aktuellen Statistiken zurück:

```bash
adb shell dumpsys batterystats --reset
```

Nutze das Smartphone danach normal oder lasse es über Nacht liegen, um den Leerlaufverbrauch zu erfassen. Exportiere anschließend den Bericht:

```bash
adb shell dumpsys batterystats > batterystats.txt
```

Die Datei ist groß. Suche zuerst nach diesen Abschnitten:

- **Estimated power use** für geschätzten Energieverbrauch pro App in mAh.
- **Wake locks** für Apps, die die CPU wach gehalten haben.
- **Alarm Stats** oder andere Alarmabschnitte für Apps, die das Gerät wiederholt geweckt haben.
- **Mobile radio** und **Wi-Fi**, wenn der Verbrauch mit dem Netzwerk zusammenhängt.

Die offizielle Android-Dokumentation zu Batterystats und Battery Historian beschreibt den grundlegenden Ablauf: Batterystats sammelt Akkudaten auf dem Gerät, und Battery Historian kann daraus eine HTML-Zeitleiste erstellen. Battery Historian wird inzwischen nicht mehr aktiv gepflegt. Für aktuelle Entwicklungsanalysen empfiehlt Google nach Möglichkeit neuere Werkzeuge wie System Tracing, Power Profiler oder die Power-Metrik von Macrobenchmark. Für einen einmaligen Blick auf ältere Batterystats-Daten kann Battery Historian trotzdem noch nützlich sein.

Wenn du nur einen Befehl verwenden möchtest, nimm diesen:

```bash
adb shell dumpsys batterystats
```

Er nennt dir die schuldige App nicht automatisch in verständlichem Deutsch. Er liefert Belege.

## Die üblichen versteckten Ursachen

**Google Play-Dienste** sind normalerweise nicht von sich aus der Bösewicht. Sie verbinden Apps mit Google-Diensten, unterstützen Push-Benachrichtigungen, Standortfunktionen, Kontosynchronisierung, nahe Geräte, App-Aktualisierungen und Teile der Gerätesicherheit. Ist ihr Akkuverbrauch hoch, prüfe Synchronisierungsfehler im Google-Konto, Standortberechtigungen, die Sicherung in Google Fotos und ausstehende Aktualisierungen.

Erzwinge bei den Google Play-Diensten nicht das Beenden und versuche nicht, sie zu deinstallieren. Google weist ausdrücklich darauf hin, dass sie in Android integriert sind und weder deinstalliert noch zwangsweise beendet werden können. Leere bei Bedarf zuerst nur den Cache, starte das Gerät neu, aktualisiere Apps und behebe das zugrunde liegende Konto- oder Standortproblem. Das Löschen sämtlicher Daten der Google Play-Dienste ist ein deutlich härterer Schritt und kann gespeicherte Informationen sowie Anmeldungen betreffen.

**Eine fehlgeschlagene Kontosynchronisierung** ist langweilig, aber häufig. Öffne in den Einstellungen den Kontenbereich und suche nach Warnsymbolen, alten Arbeitskonten, geänderten Passwörtern oder Diensten, die ihre Synchronisierung nie abschließen. Entferne das Konto, wenn du es nicht mehr nutzt. Füge es neu hinzu, wenn du es brauchst.

**Schwacher Empfang** kann wie Systemverbrauch aussehen. Ist **Mobilfunknetz-Standby** hoch, teste eine Nacht im Flugmodus. Samsung nennt eine schwache oder instabile Netzverbindung ausdrücklich als möglichen Grund für erhöhten Verbrauch. In Wohnungen ist das überraschend oft die ganze Erklärung.

**Widgets und Live-Wallpaper** geraten leicht in Vergessenheit, weil sie auf dem Startbildschirm und nicht in der App-Übersicht liegen. Ein Wetter-Widget, das alle paar Minuten den Standort aktualisiert, verhält sich anders als eine statische Uhr. Entferne kürzlich hinzugefügte Widgets für einen Tag und vergleiche das Ergebnis.

**Bluetooth-Zubehör** kann ebenfalls in Verbindungsschleifen geraten. Uhren, Ohrhörer, Fahrzeugsysteme und Tracker versuchen manchmal ständig, sich neu zu verbinden. Begann der Verbrauch nach dem Koppeln eines neuen Geräts, teste eine Nacht mit ausgeschaltetem Bluetooth.

## Wann du Hardware vermuten solltest

Softwareverbrauch hinterlässt meist Hinweise: eine App, einen Wake Lock, Funkaktivität, Wärme während CPU-Arbeit oder bessere Werte im abgesicherten Modus. Hardwareprobleme sind hartnäckiger.

Einige Anzeichen sprechen dafür:

- Das Smartphone verliert selbst im Flugmodus über Nacht viel Akkuladung.
- Der abgesicherte Modus verbessert nichts.
- Das Gerät ist warm, obwohl es unberührt liegt und nicht geladen wird.
- Der Akkuzustand ist reduziert oder das Smartphone schaltet sich bei zufälligen Prozentwerten aus.

Auf dem Pixel 8a und neueren Modellen findest du den Wert unter **Einstellungen > Akku > Akkuzustand**. Google bezeichnet den Zustand als **Reduziert**, wenn die verbleibende Akkukapazität unter 80 % liegt. Bei Samsung verwendest du **Samsung Members > Support > Telefondiagnose > Akkustatus**.

Eine Drittanbieter-App kann die Kapazität schätzen, doch behandle das nicht als Messwert auf Laborniveau. Akkuzustandswerte sind ungenau. Temperatur, Ladeverlauf, Schätzung und Messmethode beeinflussen das Ergebnis.

## Was du nicht tun solltest

Installiere keine Akku-Spar-App, die verspricht, alles automatisch zu reparieren. Viele dieser Apps duplizieren nur integrierte Android-Funktionen, zeigen Werbung und betreiben selbst Hintergrunddienste.

Wische nicht ständig alle Apps aus der Übersicht der zuletzt verwendeten Anwendungen. Android verwaltet das automatisch. Verhält sich eine App fehlerhaft, erzwinge ihr Beenden über **Einstellungen > Apps** und aktualisiere, begrenze oder entferne anschließend genau diese App.

Setze das Smartphone nicht als ersten Schritt auf Werkseinstellungen zurück. Ein Zurücksetzen kann beschädigte App-Zustände und veraltete Einstellungen beheben, kostet aber Zeit und verrät dir nicht, was den Verbrauch verursacht hat. Nutze es erst, wenn Akkuübersicht, abgesicherter Modus, das Zurücksetzen der Netzwerkeinstellungen und App-Beschränkungen nicht geholfen haben.

runcheck kann helfen, wenn das Muster mehrere Bereiche betrifft. Akkuverbrauch zusammen mit Hitze weist in eine Richtung. Akkuverbrauch zusammen mit schwachem Empfang in eine andere. Kommen Speicherdruck oder intensive App-Nutzung hinzu, liegt die Ursache wieder woanders. Die Lösung wird besser, wenn die Diagnose nicht blind erfolgt.
