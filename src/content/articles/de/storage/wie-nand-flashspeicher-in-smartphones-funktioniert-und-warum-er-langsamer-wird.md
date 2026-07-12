---
title: "Wie NAND-Flashspeicher in Smartphones funktioniert und warum er langsamer wird"
description: "Meta-Beschreibung: Smartphone-Speicher basiert auf NAND-Flash. Hier erfährst du, warum voller Speicher die Leistung bremst, was TRIM und Garbage Collection tun und wie du storage I/O gesund hältst."
listSummary: "Meta-Beschreibung: Smartphone-Speicher basiert auf NAND-Flash."
hub: "storage"
sourceNumber: 89
order: 11
tags: ["leistung","geschwindigkeit","android","optimierung","fehlerbehebung"]
locale: "de"
draft: false
---
Dein Smartphone kann einen schnellen SoC und viel RAM haben und sich trotzdem zäh anfühlen, wenn der Speicher fast voll ist. Apps brauchen länger zum Öffnen. Die Kamera benötigt einen Moment mehr, um ein Foto zu speichern. Updates dauern länger als erwartet.

Daran ist nicht immer der Prozessor schuld. Manchmal ist der Speicher der Flaschenhals.

## Was NAND-Flash im Hintergrund macht

Smartphones speichern Apps, Fotos, Nachrichten, Caches und Systemdaten auf NAND-Flashchips, die direkt auf die Hauptplatine gelötet sind. Ein als 128-GB-Modell verkauftes Gerät stellt dir nie die kompletten 128 GB für eigene Dateien bereit, weil Android, Systempartitionen, Wiederherstellungsdaten, reservierter Speicher und Dateisystem-Overhead bereits einen Teil belegen.

NAND speichert Daten als elektrische Ladung in winzigen Zellen. Diese Zellen sind zu Seiten zusammengefasst, und mehrere Seiten bilden größere Löschblöcke. Der unbequeme Teil: NAND kann in leere Seiten schreiben, eine bereits verwendete Seite aber nicht direkt überschreiben.

Um Daten zu aktualisieren, schreibt der Controller die neue Version an eine andere Stelle, markiert die alte Seite als ungültig und aktualisiert seine Zuordnungstabelle. Später sammelt er während der Bereinigung die weiterhin gültigen Seiten eines Blocks, verschiebt sie bei Bedarf und löscht den alten Block, damit er erneut verwendet werden kann.

Dieser Vorgang heißt Garbage Collection. Er ist normal. Und er gehört zu den Gründen, warum sich ein fast volles Smartphone schlechter anfühlt als dasselbe Gerät mit ausreichend freiem Speicher.

## Warum voller Speicher langsam wirkt

Sind genügend leere Blöcke vorhanden, ist Schreiben einfach. Der Controller wählt einen freien Bereich und arbeitet weiter.

Ist der Speicher fast voll, stehen weniger saubere Blöcke zur Verfügung. Der Controller muss stärker nach Platz suchen, gültige Daten verschieben, Blöcke löschen und erst danach die neuen Daten schreiben. Diese zusätzliche interne Arbeit nennt man Schreibverstärkung. Im Alltag zeigt sie sich als kurze Hänger.

Du bemerkst das etwa beim Installieren von Apps, Speichern von Videos, Herunterladen von Updates oder Wechseln zwischen Apps mit großen Caches. Ein Smartphone mit 95 % belegtem Speicher kann sich deutlich älter anfühlen, als es tatsächlich ist.

Die praktische Faustregel ist einfach: Halte nach Möglichkeit mindestens 15 bis 20 % des internen Speichers frei. Das ist kein magischer Grenzwert, und Speichercontroller verhalten sich unterschiedlich. Freier Platz gibt Android und dem Controller aber Raum zum Arbeiten.

## TRIM, Garbage Collection und Leerlauf

Wenn du eine Datei löschst, werden nicht sofort alle NAND-Zellen gelöscht, in denen sie lag. Android markiert die Datei zunächst im Dateisystem als gelöscht. Der Controller muss anschließend wissen, welche zugrunde liegenden Blöcke später bereinigt werden dürfen.

Dabei hilft TRIM. Unter Android läuft diese Pflege über `fstrim` und Wartungsarbeiten im Leerlauf. Das System teilt der Speicherschicht mit, welche Blöcke nicht mehr gebraucht werden, damit Garbage Collection sie später zurückgewinnen kann.

Deshalb kann es nach einer großen Bereinigung helfen, das Smartphone eine Weile unbenutzt und am Ladegerät liegen zu lassen. Du löschst Dateien, Android bekommt Zeit für Wartung, und der Controller kann aufräumen. Erwarte nach fünf Minuten kein Wunder. Der Prozess läuft im Hintergrund.

Nein, du solltest Smartphone-Speicher nicht defragmentieren. Defragmentierung war für rotierende Festplatten gedacht. Auf NAND verursacht sie unnötige Schreibvorgänge und löst das eigentliche Problem nicht.

## SLC, MLC, TLC und QLC einfach erklärt

NAND-Zellen können unterschiedlich viele Bits pro Zelle speichern.

SLC speichert ein Bit pro Zelle. Das ist schnell und langlebig, aber für normalen Smartphone-Speicher zu teuer.

MLC speichert zwei Bits. Diese Technik war früher häufiger in hochwertigem Speicher zu finden, wurde aber weitgehend durch dichtere NAND-Typen verdrängt.

TLC speichert drei Bits in derselben Zelle. Das ist bei modernem Verbraucherspeicher verbreitet, weil Kosten, Kapazität und Geschwindigkeit für Smartphones ausreichend ausgewogen sind.

QLC speichert vier Bits. Dadurch ist der Speicher dichter und pro Gigabyte günstiger, hält aber weniger Schreibzyklen aus. Smartphone-Hersteller nennen den genauen NAND-Zelltyp selten. Allein aus der Speicherkapazität solltest du daher nicht ableiten, was im Gerät steckt.

Je mehr Daten in einer Zelle liegen, desto genauer müssen Spannungszustände gelesen und desto stärker müssen Fehler korrigiert werden. Das ist der Kompromiss. Moderne Controller verbergen den größten Teil dieser Komplexität mit Wear Leveling, ECC, Reservebereichen und Caches.

## UFS oder eMMC ist wichtiger, als viele denken

Die Speicherschnittstelle ist genauso wichtig wie der NAND selbst.

Viele ältere und günstige Android-Smartphones verwenden eMMC. Die Technik ist einfach und preiswert, kommt aber mit hoher paralleler Last schlechter zurecht. Samsungs eMMC-5.1-Komponenten warben bei ihrer Einführung beispielsweise mit sequenziellen Lesegeschwindigkeiten von bis zu 250 MB/s und sequenziellen Schreibgeschwindigkeiten von bis zu 125 MB/s.

UFS ist der neuere Speicherstandard für Smartphones. Er unterstützt Befehlswarteschlangen und Vollduplexbetrieb, wodurch Lese- und Schreibvorgänge unter Last effizienter ausgeführt werden können. Geräte mit UFS 3.1 werben häufig mit sequenziellen Lesegeschwindigkeiten um 2.100 MB/s. UFS 4.0 verdoppelte den Spitzenwert bei Samsungs zuerst angekündigtem UFS-4.0-Speicher auf 4.200 MB/s beim sequenziellen Lesen.

Das sind Bestwerte für sequenzielle Zugriffe und keine Garantie, dass jede App doppelt so schnell startet. Der Unterschied ist trotzdem real. Ein günstiges Smartphone mit eMMC kann bei Updates, App-Installationen und schnellen Kameraaufnahmen deutlich träger wirken, selbst wenn der Prozessor auf dem Papier ordentlich aussieht.

## Wie sich Speicherverschleiß zeigt

NAND nutzt sich ab, wenn Blöcke programmiert und gelöscht werden. Controller verteilen Schreibvorgänge, damit nicht ein einzelner Bereich frühzeitig ausfällt. Das nennt man Wear Leveling.

Bei normaler Smartphone-Nutzung dauert es meist Jahre, bis Verschleiß spürbar wird. Nutzer füllen den Speicher, installieren Updates, filmen und leeren Caches lange bevor die Haltbarkeit des NAND zum Hauptproblem wird. Starke Schreiblast ist eine andere Sache. Ein Gerät, das dauerhaft Protokolle schreibt, Video aufzeichnet oder für Tests genutzt wird, kann den Speicher schneller altern lassen.

Android zeigt den meisten Nutzern keinen klaren prozentualen „Speicherzustand“. Manche Servicewerkzeuge der Hersteller liefern mehr Details, aber nicht einheitlich. Die sichtbaren Symptome sind unspektakulär: langsame App-Installationen, lange Speicherzeiten, Verzögerungen beim Schreiben von Dateien und weiterhin schwache Leistung, obwohl du Speicher freigegeben und offensichtliche Hintergrundlast entfernt hast.

## So hältst du den Smartphone-Speicher in gutem Zustand

Halte freien Speicher vor. Das ist die langweilige Antwort und immer noch die beste.

Installiere keine Speicherbereinigungs-Apps, die wundersame Beschleunigung versprechen. Viele löschen nur Caches, die Android später neu aufbaut. Manche laufen zusätzlich ständig im Hintergrund und verursachen mehr Unruhe, als sie beseitigen.

Lösche alte Downloads, entferne ungenutzte Apps, verschiebe große Videos vom Smartphone und lasse das Gerät nach einer größeren Bereinigung eine Weile unbenutzt am Ladegerät liegen. Unterstützt dein Smartphone eine SD-Karte, nutze sie für Medien und nicht für Apps, die schnellen storage I/O brauchen.

Apps wie runcheck können helfen, indem sie den Speicherdruck im Zeitverlauf zeigen, statt Speicher nur als einzelne Momentaufnahme zu behandeln. Dieser Verlauf ist wichtig. Ein Smartphone, das langsam von 70 % auf 94 % Belegung steigt, erklärt dir ziemlich genau, warum es sich zunehmend schlechter anfühlt.
