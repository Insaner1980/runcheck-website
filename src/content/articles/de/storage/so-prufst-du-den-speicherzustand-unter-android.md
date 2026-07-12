---
title: "So prüfst du den Speicherzustand unter Android"
description: "Android-Speicher kann verschleißen, doch die meisten Smartphones zeigen keinen einfachen Prozentwert für den Speicherzustand. Hier erfährst du, was du prüfen kannst, was die Zahlen bedeuten und wann du handeln solltest."
listSummary: "speicher, android und bereinigung"
hub: "storage"
sourceNumber: 80
order: 2
tags: ["speicher","android","bereinigung","optimierung","ratgeber"]
locale: "de"
draft: false
---
---

Wie erkennst du, ob der Speicher deines Android-Smartphones gesund und nicht nur knapp ist? Ärgerlicherweise machen es die meisten Geräte weiterhin unnötig schwer.

Speicherzustand und freier Speicherplatz sind zwei verschiedene Probleme. Ein Smartphone kann 80 GB frei haben und trotzdem einen geschwächten NAND-Chip besitzen. Ein fast volles Gerät kann langsam wirken, obwohl die Speicherhardware völlig in Ordnung ist. Diese beiden Ursachen werden ständig verwechselt. Trenne sie deshalb zuerst voneinander.

## Was den Smartphone-Speicher verschleißt

Android-Smartphones verwenden NAND-Flash-Speicher. Günstige Modelle verwenden häufig eMMC, während Geräte der Mittel- und Oberklasse meist UFS einsetzen. Beide Speicherarten verschleißen durch Programmier- und Löschzyklen. Jedes Schreiben, Löschen und erneute Beschreiben belastet die Speicherzellen ein kleines Stück.

Der Controller verteilt Schreibvorgänge durch Wear Leveling über den Chip. Deshalb zerstört normale Smartphone-Nutzung den Speicher nur selten schnell. Fotos, Nachrichten, App-Updates und Surfen im Web sind nicht mit einer Überwachungskamera vergleichbar, die rund um die Uhr Daten schreibt.

Lange Videoaufnahmen, ständige Neuinstallationen großer Spiele, häufige Zurücksetzungen auf Werkseinstellungen und ein dauerhaft fast voller Speicher belasten ihn stärker. Der letzte Punkt ist wichtig, weil dem Controller dann weniger freie Blöcke für Aufräumarbeiten und Wear Leveling bleiben. Es funktioniert. Bis es das nicht mehr tut.

Bei den meisten Menschen ist der Speicher nicht die erste Komponente, die ausfällt. Akku, Display, USB-C-Anschluss oder auslaufender Software-Support werden meist früher zum Grund für einen Gerätewechsel. Bei generalüberholten Smartphones und stark genutzten günstigen Geräten ist der Speicherzustand interessanter.

## Warum Speicherzustandswerte unter Android schwierig sind

Es gibt keine allgemeine Android-Einstellung, die dir „92 % Restlebensdauer des Speichers“ anzeigt, so wie Pixel 8a und neuere unterstützte Pixel-Smartphones einen Akkuzustand anzeigen können.

Das Android-Framework enthält zwar die System-API `getInternalStorageRemainingLifetime()`. Sie kann die geschätzte verbleibende Lebensdauer des internen Speichers als Prozentwert zurückgeben oder `-1`, wenn keine Information verfügbar ist. Der Haken ist der Zugriff. Die API ist eine privilegierte System-API und verlangt `READ_PRIVILEGED_PHONE_STATE`. Normale Apps aus dem Play Store können sie daher in der Regel nicht verwenden.

Pixel-Geräte bieten Diagnose- und Reparaturwerkzeuge für verschiedene Komponenten, aber Google dokumentiert keine allgemeine Einstellung, die zuverlässig einen NAND-Lebensdauerwert für normale Nutzer anzeigt. Samsung Members kann auf Galaxy-Smartphones eine umfangreiche Gerätediagnose ausführen. Auch dort solltest du keinen klaren Prozentwert für die verbleibende Lebensdauer des internen Speichers erwarten.

Android 17 macht den Speicherzustand nicht zu einer allgemein verfügbaren Funktion für Nutzer. Im Juli 2026 hat die Version mit Beta 3 Plattformstabilität erreicht und ist auf unterstützten Pixel-Geräten als Testversion verfügbar, aber noch nicht stabil allgemein verteilt. Unterschiede zwischen den OEMs bleiben deshalb weiterhin entscheidend.

## Zuerst den Speichertyp prüfen

Bevor du einen Benchmark startest, finde heraus, welche Speicherart dein Smartphone verwendet. Prüfe das Datenblatt des Herstellers oder nutze eine Hardware-Info-App wie DevCheck und sieh im Speicherbereich nach.

Als grobe Regel gilt: Günstige Smartphones der vergangenen Jahre verwenden häufig eMMC 5.1. Bessere Mittelklassegeräte setzen auf UFS 2.2 oder UFS 3.1. Neuere Oberklassemodelle verwenden oft UFS 4.0 oder UFS 4.1. UFS 5.0 ist inzwischen angekündigt, und erste Speicherlösungen wurden 2026 vorgestellt. Für aktuell verbreitete Smartphones ist der Standard aber noch nicht die normale Ausgangsbasis.

Der Typ ist wichtig, weil ein langsames eMMC-Gerät und ein geschwächter UFS-Speicher aus unterschiedlichen Gründen ähnliche Benchmark-Ergebnisse liefern können.

## Speichergeschwindigkeit mit Bedacht testen

Nutze eine Speicher-Benchmark-App wie CPDT. Führe den Test aus, wenn das Smartphone kühl ist, mehr als 20 % Akkuladung hat, beim Laden nicht heiß wird und mindestens 15 bis 20 % des Speichers frei sind. Wiederhole den Test anschließend. Ein einzelner schlechter Durchlauf beweist nichts.

Diese Werte sind nur Orientierungspunkte, keine festen Grenzwerte:

Beispielwerte für sequenzielles Lesen und Schreiben liegen bei eMMC 5.1 ungefähr bei 250/100-125 MB/s, bei UFS 2.1 etwa bei 850/250 MB/s, bei UFS 3.1 ungefähr bei 2.100/1.200 MB/s und bei UFS 4.0 etwa bei 4.200/2.800 MB/s. Solche Spitzenwerte stammen von konkreten Speicherlösungen und sind keine Garantie für jedes Smartphone mit derselben Standardbezeichnung.

Reale Geräte erreichen diese Zahlen nicht immer. Kapazität, Controller, Temperatur, Verschlüsselung, Firmware, freier Speicherplatz und die Benchmark-App beeinflussen das Ergebnis. Auch ein Modell mit 128 GB kann langsamer sein als die 512-GB-Variante derselben Serie, weil weniger NAND-Dies parallel arbeiten.

Liegt dein Ergebnis deutlich unter dem Erwartbaren, gib zuerst Speicherplatz frei und teste nach einem Neustart erneut. Bleibt es niedrig und friert das Smartphone außerdem bei Installationen, Dateiübertragungen, Kamera-Speichervorgängen oder App-Updates ein, wird ein Problem mit dem Speicher wahrscheinlicher.

## Anzeichen für echte Speicherprobleme

Speicherfehler fühlen sich anders an als die normale Trägheit eines alten Smartphones.

Apps installieren oder aktualisieren sich möglicherweise quälend langsam. Die Kamera pausiert nach jedem Foto, während die Datei gespeichert wird. Das Smartphone hängt beim Kopieren, Löschen oder Verschieben. Der Start dauert deutlich länger als früher. Große Spiele prüfen oder reparieren ihre Dateien ungewöhnlich oft.

Ernstere Zeichen lassen sich kaum übersehen: beschädigte Fotos, Dokumente, die sich nicht mehr öffnen lassen, App-Abstürze während Schreibvorgängen, Meldungen wie „Speichern nicht möglich“ trotz freien Platzes oder ein Smartphone, das gelegentlich nicht startet.

Sichere deine Daten sofort, wenn du Beschädigungen bemerkst. Führe nicht eine Stunde lang Benchmarks aus, während wichtige Daten nur auf diesem einen Gerät liegen.

## Prüfungen nur mit Root-Zugriff

Gerootete Geräte können manchmal Zustandsdaten auf einer niedrigeren Systemebene aus sysfs lesen. Bei eMMC-Geräten liegen Lebensdauerschätzungen eventuell in Extended-CSD-Werten unter Pfaden wie `/sys/class/mmc_host/mmc0/mmc0:*/life_time`. Bei UFS-Geräten können Zustandsdeskriptoren unter `/sys/class/scsi_device/` oder ähnlichen herstellerspezifischen Pfaden vorhanden sein.

Das ist keine normale Empfehlung für Endnutzer. Die Pfade unterscheiden sich, SELinux blockiert den Zugriff auf Geräten mit unverändertem System, und die Werte lassen sich leicht falsch interpretieren. Hast du bereits Root-Zugriff und weißt, was du tust, können sie nützlich sein. Roote ein Smartphone aber nicht nur, um den Speicherzustand zu prüfen.

## So verringerst du die Belastung des Speichers

Halte 15 bis 20 % des internen Speichers frei. Bei einem Smartphone mit 128 GB sind das ungefähr 20 GB. Bei 256 GB sind 40 GB ein komfortabler Puffer, ohne dass du dich an der exakten Zahl festbeißen musst.

Verwende das Zurücksetzen auf Werkseinstellungen nicht als regelmäßige Wartung. Ein Reset zur Behebung eines unübersichtlich gewordenen Systems ist in Ordnung. Monatliche Zurücksetzungen sind unnötige Schreibarbeit und erzeugen meist dasselbe Speicherproblem erneut, sobald du alle Apps wieder installierst.

Speichere lange Videos nur dann auf externem Speicher, wenn Smartphone und Kamera-App das sauber unterstützen. Nutzt du eine SD-Karte, lege dort Medien ab, nicht Apps. Apps gehören weiterhin in den internen Speicher, weil UFS deutlich schneller und zuverlässiger als die meisten microSD-Karten ist.

Wenn du runcheck verwendest, beobachte den Speicherdruck über längere Zeit, statt auf einen einzelnen Wert zu starren. Der Speicherbereich zeigt die Kapazitätsauslastung. Zusammen mit Akkutemperatur und weiteren Zustandssignalen hilft das dabei, ein schlicht volles Smartphone von einem möglichen Hardwareproblem zu unterscheiden.
