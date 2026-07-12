---
title: "Xiaomi-CIT-Menü: Versteckte Hardwaretests für Xiaomi, Redmi und POCO"
description: "CIT ist auf den meisten Xiaomi-Smartphones der schnellste integrierte Hardwarecheck. Das gilt auch für viele Redmi- und POCO-Modelle mit offizieller MIUI- oder HyperOS-Software. Hübsch ist das Menü nicht. Viel erklären kann es ebenfalls nicht. Wenn du aber wissen willst, ob Touchscreen, Lautsprecher, Mikrofon, Sensor oder Kamera überhaupt reagieren, kommst du damit schneller ans Ziel als mit den meisten Diagnose-Apps aus dem Play Store."
listSummary: "CIT ist auf den meisten Xiaomi-Smartphones der schnellste integrierte Hardwarecheck."
hub: "brands"
sourceNumber: 159
order: 7
tags: ["hardware","testen","diagnose","android","ratgeber"]
locale: "de"
draft: false
---
Xiaomi bezeichnet die Funktion auf Supportseiten meist als Hardware detection oder CIT mode. Du triffst vor allem bei der Suche nach einem konkreten Fehler darauf, etwa bei einem ungenauen Touchscreen oder einem Smartphone, das ständig neu startet. Das Menü ist für eine Prüfung in diesem Moment gedacht, nicht für eine langfristige Zustandsüberwachung.

Das ist der ganze Trick.

## CIT zuerst öffnen

Am schnellsten geht es über einen Wählcode. Öffne die Telefon App und gib `*#*#6484#*#*` ein. Auf einigen Xiaomi-Builds öffnet `*#*#64663#*#*` dasselbe Hardwaretest-Menü. Die Anruftaste musst du nicht drücken.

Reagiert der Code nicht, versuche den Weg über die Einstellungen. Die englischen Bezeichnungen lauten je nach Build **Settings > About phone > Detailed info and specs** oder **Settings > About phone > All specs**. Tippe dort mehrmals auf **Kernel version**. Auf vielen MIUI- und HyperOS-Versionen erscheint ein Countdown, danach öffnet sich CIT.

Der genaue Pfad variiert, weil Xiaomi die Einstellungen zwischen MIUI, HyperOS, regionalen Builds und Tablets verändert hat. Bei älteren MIUI-Versionen kann **Kernel version** direkt unter **About phone** stehen. Neuere HyperOS-Builds legen den Eintrag häufig in eine ausführlichere Spezifikationsseite.

Wenn beide Wege scheitern, prüfe drei Dinge, bevor du annimmst, dass CIT fehlt: Auf dem Gerät läuft offizielle Xiaomi-Firmware, du verwendest die vorinstallierte Telefon App, und es ist kein Custom ROM wie LineageOS installiert. Custom ROMs entfernen Xiaomis private Diagnosekomponenten häufig.

## Was CIT tatsächlich testen kann

CIT prüft die Hardware direkt genug, um nützlich zu sein, liefert aber meist nur einfache Ergebnisse wie bestanden oder fehlgeschlagen. Das Menü kann zeigen, dass ein Mikrofon nichts aufgenommen hat oder ein Bereich des Touchscreens nicht reagiert. Es erklärt nicht, ob Wasserschaden, ein lockeres Flexkabel, ein schlechtes Ersatzdisplay oder ein Firmwarefehler dahintersteckt.

Die Testliste unterscheidet sich je nach Modell. Ein Redmi Note ohne NFC zeigt nicht dieselben Prüfungen wie ein Xiaomi-Flaggschiff mit Infrarotsender, Fingerabdrucksensor im Display, Barometer und mehreren Kameramodulen. Das ist normal.

Typische CIT-Tests prüfen Display, Touchpanel, Hörmuschel, Lautsprecher, Mikrofone, Vibrationsmotor, Kameras, Fingerabdrucksensor, Näherungssensor, Umgebungslichtsensor, Beschleunigungssensor, Gyroskop, Kompass, SIM-Leser, WLAN, Bluetooth, NFC, Infrarotsender und Ladestatus.

## Den Touchscreen zuerst testen

Wenn du ein gebrauchtes Xiaomi-Smartphone kaufst, beginne mit dem Touchscreen-Test. Er findet Probleme, die bei ein paar Wischbewegungen auf dem Startbildschirm leicht unbemerkt bleiben.

Der Test zeigt gewöhnlich ein Raster oder eine Zeichenfläche. Fahre mit dem Finger durch die vorgegebenen Bereiche und achte auf Lücken, unterbrochene Linien oder Felder, die nicht grün werden. Ein gebrauchtes Gerät kann makellos aussehen und trotzdem einen toten Streifen am Rand des Digitizers haben. Das würde ich lieber vor dem Bezahlen feststellen als danach.

Xiaomis eigene Supportseiten empfehlen CIT, wenn der Touchscreen springt, verzögert reagiert oder Eingaben nicht richtig erkennt. Sie nennen auch die unspektakulären Ursachen, die oft übersehen werden: gesprungenes Glas, Feuchtigkeit, Displayschutzfolien von Drittanbietern, nasse Finger, instabile Ladegeräte oder eine einzelne fehlerhafte App. Der Test ist hilfreich, aber keine Magie.

## Sensoren, Audio, Kameras und Verbindungen

Die Audiotests sind einfach. Der Lautsprechertest gibt Ton über den Hauptlautsprecher aus, der Receiver-Test nutzt die Hörmuschel, und der Mikrofontest nimmt einen kurzen Clip auf und spielt ihn wieder ab. Achte auf Knacken, geringe Lautstärke, Rauschen oder völlige Stille. Ein unteres Mikrofon kann ausfallen, obwohl Telefonate noch verständlich klingen, weil das Smartphone je nach App unterschiedliche Mikrofone verwendet.

Sensortests zeigen meist Live-Werte oder verlangen eine kurze Aktion. Decke den Näherungssensor an der Hörmuschel ab. Drehe das Gerät für den Gyroskoptest. Bewege es für Beschleunigungssensor und Kompass. Richte den Lichtsensor abwechselnd auf eine Lampe und davon weg. Ändern sich die Werte nie, stimmt etwas nicht.

Kameratests öffnen die vorderen und hinteren Module. Sie bestätigen, dass eine Kamera startet, fokussiert und ein Bild aufnimmt. Die Bildqualität beweisen sie nicht. Eine zerkratzte Linse, schlechte Stabilisierung, Staub unter dem Glas oder eine fehlerhafte Kamera-App eines Drittanbieters kann außerhalb des Tests weiterhin Probleme verursachen.

Verbindungstests suchen nach WLAN-Netzen oder Bluetooth-Geräten. Das reicht, um zu bestätigen, dass das Funkmodul die Umgebung erkennt. Dein Router, Mobilfunkanbieter, VPN oder ein Wohnhaus voller überlasteter 2,4-GHz-Netze wird damit nicht diagnostiziert.

## Akku, Laden und Versionsinformationen

CIT kann grundlegende Akku- und Ladeinformationen anzeigen, etwa Ladestand, Spannung, Temperatur und ob das Smartphone ein Ladegerät erkennt. Das hilft, wenn ein Gerät gar nicht oder nur mit einem bestimmten Kabel lädt.

Verwechsle diese Momentaufnahme nicht mit einem echten Verlauf des Akkuzustands. CIT liefert kein langfristiges Diagramm zum Kapazitätsverlust, keine Zeitleiste der Ladezyklen und keinen Vergleich verschiedener Ladegeräte.

Auf vielen Xiaomi-Builds gibt es außerdem einen Bereich mit Hardwareinformationen. Xiaomi verweist auf den Code `*#*#6484#*#*`, um Hardware detection zu öffnen und Angaben wie IMEI, Build-Nummer, Baseband-Version, Kernel-Version, CPU-ID und Hardwareversion zu prüfen. Das ist praktisch, wenn du die in den Einstellungen angezeigte Softwareversion mit den systemnahen Geräteinformationen vergleichen möchtest.

## Android 17, HyperOS und Kompatibilität

Android 17 wurde am 16. Juni 2026 zunächst für die meisten unterstützten Pixel-Geräte veröffentlicht. Google führt Xiaomi außerdem als Partner für Android-17-Betaversionen. Das bedeutet nicht, dass jedes Xiaomi-, Redmi- oder POCO-Modell bereits stabiles Android 17 verwendet.

Bei Xiaomi ist für dieses Thema vor allem die Firmware-Schicht entscheidend: MIUI oder HyperOS. CIT ist Xiaomis eigene Hardwarediagnose und keine allgemeine Android-17-Funktion. Ein HyperOS-Update kann den Pfad ändern, einen Code sperren, einen Test umbenennen oder einen Diagnosefehler beheben, ohne dass Android selbst der Hauptgrund ist.

Anders gesagt: Keine Panik, wenn eine Anleitung für MIUI 14 nicht genau zu deinem HyperOS-Gerät passt. Probiere beide Zugangswege.

## Wann CIT nützlich ist

CIT eignet sich für schnelle Prüfungen vor dem Kauf eines gebrauchten Smartphones, nach einem Sturz, nach Kontakt mit Wasser oder nach einer Display- oder Akkureparatur. Führe den vollständigen automatischen Test aus, wenn du genug Zeit hast. Kennst du den Problembereich bereits, reichen einzelne Tests.

Mach einen Screenshot der Ergebnisse, wenn du einen Nachweis brauchst. Verlass dich nicht darauf, dass CIT einen dauerhaften Bericht speichert, den du später exportieren kannst.

Weniger hilfreich ist CIT bei langsamen Geräten, zufälligen App-Abstürzen, knappem Speicher, Akkuverbrauch über mehrere Tage oder thermischer Drosselung unter längerer Spielelast. Solche Probleme brauchen einen Verlauf, keinen einminütigen Hardwaretest.

## Häufige Fragen

### Kann CIT das Smartphone beschädigen?

Nein. Die normalen Tests lesen Sensoren, spielen Audio ab, aktivieren den Vibrationsmotor, öffnen Kameras und prüfen, ob Komponenten reagieren. Sie löschen keine Daten und flashen keine Firmware. Verlasse das Menü mit Zurück oder starte das Smartphone neu, falls es hängen bleibt.

### Warum sind einige Bezeichnungen auf Chinesisch?

Einige Xiaomi- und Redmi-Modelle zeigen weiterhin nicht übersetzte CIT-Bezeichnungen, besonders auf China-Firmware oder älteren MIUI-Builds. Die Tests funktionieren meist trotzdem gleich. Die Sprache ist lästig, aber nicht gefährlich.

### Funktioniert CIT auf POCO-Smartphones und Xiaomi-Tablets?

Meist ja, wenn das Gerät mit offizieller Xiaomi-Firmware läuft. Welche Tests erscheinen, hängt von der Hardware ab. Ein reines WLAN-Tablet hat nicht dieselben Mobilfunkprüfungen wie ein Redmi-Smartphone, und ein POCO ohne Infrarotsender zeigt keinen IR-Test.

---

*Meta-Beschreibung: Das CIT-Menü von Xiaomi bietet integrierte Hardwaretests für Xiaomi-Smartphones. Hier findest du die Wählcodes, den Weg über die Einstellungen, sinnvolle Tests und die Grenzen von CIT.*
