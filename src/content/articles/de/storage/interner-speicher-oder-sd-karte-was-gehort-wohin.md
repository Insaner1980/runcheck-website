---
title: "Interner Speicher oder SD-Karte: Was gehört wohin?"
description: "Eine microSD-Karte kann einem Android-Smartphone mehr Speicherplatz geben, ist aber nicht mit dem internen Speicher gleichzusetzen. Genau das wird häufig missverstanden. Mehr Speicherplatz ist nicht dasselbe wie schneller Speicher."
listSummary: "speicher, android und bereinigung"
hub: "storage"
sourceNumber: 86
order: 8
tags: ["speicher","android","bereinigung","optimierung","ratgeber"]
locale: "de"
draft: false
---
Das ist 2026 besonders relevant, weil in Android-Smartphones sehr unterschiedliche Speichertechnik steckt. Viele Flaggschiffe und Mittelklassegeräte haben überhaupt keinen microSD-Steckplatz. Pixel-Smartphones bieten keinen, Samsung hat ihn bei der Galaxy-S-Reihe schon vor Jahren gestrichen, und auch mehrere aktuelle Galaxy-A-Modelle verzichten darauf. Gleichzeitig unterstützen viele ältere Galaxy-A- und Galaxy-M-Smartphones, Motorola-Moto-G-Modelle und Sony-Xperia-Geräte weiterhin microSD.

Prüfe dein genaues Modell. Der Name der Produktfamilie reicht nicht aus.

## Der Geschwindigkeitsunterschied ist real

Der interne Speicher moderner Android-Smartphones basiert in der Regel auf UFS. Aktuelle High-End-Geräte verwenden häufig UFS 4.x. Samsungs UFS-4.0-Speicher ist für Lesegeschwindigkeiten von bis zu 4.200 MB/s und Schreibgeschwindigkeiten von bis zu 2.800 MB/s ausgelegt. Selbst ältere Mittelklassegeräte mit UFS 2.1 können beim sequenziellen Lesen noch etwa 850 MB/s erreichen.

Eine normale microSD-Karte ist deutlich langsamer. Selbst eine ordentliche UHS-I-Karte liegt meist näher an den Geschwindigkeiten externer Speichermedien als an denen des internen Smartphone-Speichers. Auch die gut sichtbare Geschwindigkeitsangabe kann täuschen. V30 bedeutet, dass die Karte beim kontinuierlichen Schreiben von Videos ungefähr 30 MB/s halten soll. Das ist für Videoaufnahmen nützlich, macht aus einem Wechselspeicher aber kein UFS, wenn eine App Tausende kleine Lese- und Schreibvorgänge ausführt.

Dieser Unterschied beim wahlfreien Zugriff ist der Grund, warum Apps von einer SD-Karte oft träger wirken.

## Apps gehören in den internen Speicher

Apps sollten nach Möglichkeit im internen Speicher bleiben. App-Starts, Datenbanken, Synchronisierung im Hintergrund, Benachrichtigungen, Vorschaubilder und Caches greifen ständig auf den Speicher zu. Liegt all das auf einer langsamen Karte, merkst du es als Verzögerung.

Android kann manche Apps auf als internen Speicher eingebundene oder externe Speichermedien verschieben, aber nur, wenn App und Gerät das zulassen. Apps können nur dann auf entsprechend eingebundenem Speicher installiert werden, wenn der Entwickler die Unterstützung über das Attribut `android:installLocation` aktiviert hat. Viele Apps tun das nicht.

Bei Spielen ist die Versuchung besonders groß, dagegen anzukämpfen. Ein Spiel mit 15 GB sieht nach dem perfekten Kandidaten für die SD-Karte aus. In der Praxis werden Ladebildschirme länger, Updates dauern länger, und manche Spiele lassen sich gar nicht verschieben. Wenn du Speicher freigeben musst, ist es meistens sinnvoller, ein ungenutztes Spiel zu deinstallieren, als es von einer Speicherkarte auszuführen.

## Medien gehören auf die SD-Karte

Fotos, Videos, Musik, Podcasts, Filme, Offline-Karten, PDFs und archivierte Dateien eignen sich besser für eine SD-Karte. Diese Dateien werden in größeren Blöcken gelesen und benötigen nicht dieselbe Geschwindigkeit beim wahlfreien Zugriff wie Apps.

Falls deine Kamera-App es unterstützt, stelle als Speicherort die SD-Karte ein. Die Kamera-Apps von Samsung, Motorola und Sony haben diese Möglichkeit bei vielen Modellen mit Kartensteckplatz angeboten. Der genaue Weg unterscheidet sich jedoch je nach Modell und Android-Version. Suche in den Kameraeinstellungen nach einer Option für den Speicherort oder einer ähnlich benannten Einstellung.

Auch Streaming-Apps können erlauben, Offline-Downloads auf der SD-Karte zu speichern. Netflix, Spotify, YouTube und Karten-Apps haben ihre Einstellungen im Laufe der Zeit geändert. Prüfe deshalb direkt in der jeweiligen App, statt davon auszugehen, dass Android den Speicherort zentral festlegt.

Es gibt einen Haken. Wenn die Karte ausfällt, sind auch die darauf gespeicherten Fotos und Downloads betroffen. Sichere wichtige Dateien zusätzlich in der Cloud, auf einem Computer oder an einem anderen Ort.

## Adoptable Storage klingt besser, als es sich anfühlt

Android 6.0 führte Adoptable Storage ein. Dabei formatiert und verschlüsselt Android einen Wechselspeicher so, dass er sich eher wie interner Speicher verhält. Die Karte wird an dieses eine Smartphone gebunden, und Android kann Apps sowie private App-Daten darauf speichern.

Auf dem Papier löst das knappen internen Speicher. Im Alltag ist es ein Kompromiss. Eine langsame Karte kann das Smartphone träge machen. Fällt die Karte aus, kann Android Daten verlieren, mit deren Verfügbarkeit das System gerechnet hat. Auch das Entfernen einer eingebundenen Karte ohne korrektes Auswerfen kann Apps oder darauf gespeicherte Daten beschädigen.

Auf manchen Geräten warnt Android während der Einrichtung vor langsamen Karten. Die Warnung macht ein langsames Speichermedium natürlich nicht schneller. Sie weist dich nur auf das Problem hin, bevor du dich festlegst.

Adoptable Storage wird außerdem nicht überall angeboten. Manche Hersteller blenden die Funktion aus oder deaktivieren sie, besonders bei Smartphones, auf denen die Nutzungserfahrung schlecht wäre. Fehlt die Option, kann das eine Entscheidung des Herstellers sein. Du hast dann nicht unbedingt etwas falsch gemacht.

## Mobiler Speicher ist meist die sicherere Wahl

Bei mobilem Speicher bleibt die Karte ein separates Laufwerk. Du kannst sie herausnehmen, an einem Computer lesen, Dateien darauf und davon kopieren und sie hauptsächlich für Medien verwenden.

Für die meisten Menschen ist das die bessere Lösung. Apps und App-Daten bleiben im Smartphone. Fotos und Videos der Kamera, Offline-Musik, Filme, Dokumente und Sicherungen kommen auf die Karte. Das ist weniger ausgefeilt, scheitert aber auf überschaubarere Weise.

Einfach ist hier gut.

## Was du bei fast vollem internen Speicher tun kannst

Wenn im internen Speicher kaum noch Platz frei ist, kann sich das Smartphone langsamer anfühlen. Flash-Speicher benötigt freie Blöcke für Schreibvorgänge und interne Bereinigung. Android braucht außerdem Platz für App-Updates, Systemupdates, Caches und temporäre Dateien. Selbst ein Smartphone mit 128 GB kann schlecht reagieren, wenn ständig um die letzten wenigen Gigabyte gekämpft wird.

Öffne in den Einstellungen den Bereich für den Speicher. Wenn Fotos und Videos den meisten Platz belegen, verschiebe Medien auf die Karte oder in die Cloud. Sind Apps das Problem, deinstalliere ungenutzte Apps und leere bei den größten Speicherfressern den Cache. Ist der Download-Ordner voll, lösche alte Installationsdateien, ZIP-Dateien, PDFs und exportierte Videos.

Eine App lediglich auf den Wechselspeicher zu verschieben, ist nur selten die saubere Lösung, die man sich davon erhofft.

## Geschwindigkeitsklassen von SD-Karten einfach erklärt

Class 10 und U1 reichen für einfache Fotos, Musik und Dokumente aus.

V30 ist für 4K-Videoaufnahmen die sicherere Wahl, weil diese Klasse auf eine dauerhaft verfügbare Schreibgeschwindigkeit ausgelegt ist.

A1 und A2 beziehen sich auf die App-Leistung. Sie sind vor allem relevant, wenn du unbedingt Adoptable Storage verwenden oder appähnliche Arbeitslasten von der Karte ausführen willst. Auch sie machen aus microSD kein UFS.

Kaufe Karten von bekannten Marken und meide verdächtig günstige Modelle mit hoher Kapazität. Gefälschte Karten sind weiterhin verbreitet, und der Fehler zeigt sich auf besonders unangenehme Weise: Die Karte meldet eine große Kapazität, bis ältere Dateien plötzlich beschädigt werden.

## Wenn dein Smartphone keinen SD-Kartensteckplatz hat

Nutze Cloud-Speicher für Fotos und Videos, verschiebe große Dateien auf einen Computer oder verwende für gelegentliche Übertragungen einen USB-C-Stick mit USB OTG. Danach bleibt nur die langweilige Antwort: Deinstalliere Apps, die du nicht nutzt, leere übermäßig angewachsene App-Caches, lösche alte Downloads und achte beim nächsten Smartphone darauf, nicht zu wenig Speicher zu kaufen.

Der letzte Punkt klingt direkt, weil er stimmt. Ein Android-Smartphone mit 64 GB kann 2026 noch funktionieren, lässt aber nur wenig Platz für Videos, Spiele, Offline-Karten und jahrelang angesammelte Chat-Medien.
