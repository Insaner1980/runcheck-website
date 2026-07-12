---
title: "Was passiert, wenn der Speicher deines Smartphones voll ist"
description: "Ein volles Android-Smartphone kann bei ganz alltäglichen Aufgaben versagen: Die Kamera meldet Fehler, Apps stürzen ab, Updates bleiben hängen und Schreibvorgänge werden langsam. Hier erfährst du, was zuerst ausfällt und wie viel Speicher frei bleiben sollte."
listSummary: "leistung, geschwindigkeit und android"
hub: "storage"
sourceNumber: 81
order: 3
tags: ["leistung","geschwindigkeit","android","optimierung","fehlerbehebung"]
locale: "de"
draft: false
---
---

Wenn der Android-Speicher voll ist, fällt das Smartphone nicht einfach sauber aus. Zuerst verhält es sich merkwürdig.

Die Kamera zögert. Apps frieren beim Speichern von Entwürfen ein. Updates lassen sich nicht installieren. Die Tastatur reagiert in einer Chat-App plötzlich verzögert, obwohl gestern noch alles problemlos lief. Dann zeigt Android die Warnung zum vollen Speicher an, als würde das allein erklären, warum sich auf einmal alles kaputt anfühlt.

Meistens tut es das auch.

## Was zuerst ausfällt

Die Kamera gehört häufig zu den ersten Stellen, an denen du das Problem bemerkst. Ein Foto liegt nicht in dem Moment als kleine fertige Datei vor, in dem du den Auslöser antippst. Die Kamera-App braucht unter Umständen Speicher für Bildverarbeitung, temporäre Dateien, Vorschaubilder, Bearbeitungen, Serienaufnahmen oder Videopuffer. Fehlt dieser Arbeitsraum, kann sie einfrieren, das Speichern verweigern oder eine Aufnahme abbrechen.

Danach folgen die Apps. Jede App schreibt während der Nutzung kleine Dateien: Cache, Protokolle, Datenbanken, Entwürfe, Sitzungsdaten, Vorschaubilder, heruntergeladene Inhalte und SQLite-Journaldateien. Schlagen diese Schreibvorgänge fehl, kann die App abstürzen oder unbemerkt verlieren, woran du gerade gearbeitet hast.

Auch Systemupdates brauchen Platz. Ein monatliches Sicherheitsupdate ist kleiner als ein vollständiges Android-Upgrade, doch beide benötigen Speicher für den Download und die Installation. Kann dein Smartphone keine Updates mehr installieren, fehlen dir Sicherheits- und Fehlerkorrekturen. Das ist ein schlechter Tausch dafür, alte Downloads und doppelte Videos aufzubewahren.

## Warum das Smartphone schon vor vollständig belegtem Speicher langsamer wird

Du musst nicht erst 0 GB freien Speicher erreichen, bevor das Smartphone langsamer wird. Der problematische Bereich beginnt in der Regel, wenn weniger als 10-15 % frei sind. Unter 5 % wird es deutlich unangenehmer.

Flash-Speicher braucht freie Blöcke für Bereinigung, Wear Leveling und Garbage Collection. Wird der Platz knapp, muss der Controller mehr Arbeit erledigen, bevor er neue Daten schreiben kann. Dadurch werden normale Schreibvorgänge langsamer. Das Speichern eines Fotos, die Installation einer App, die Aktualisierung einer Datenbank oder der Download eines Anhangs kann das Smartphone lange genug ausbremsen, dass du es bemerkst.

Verwechsle das nicht mit zRAM. Die meisten Android-Smartphones nutzen zRAM als komprimierten Speicher im RAM und nicht als normale Auslagerungsdatei im internen Speicher. Ein voller Speicher bedeutet daher nicht direkt, dass Android keinen Swap mehr verwenden kann. Das Problem entsteht, weil Apps und das System im laufenden Betrieb weiterhin Platz für echte Dateien benötigen.

Android 17 setzt strengere Speichergrenzen für Apps durch, doch daran ändert sich nichts. Druck auf den Arbeitsspeicher und knapper interner Speicher sind zwei verschiedene Probleme. Sie fühlen sich nur ähnlich an, wenn du auf einen eingefrorenen Bildschirm schaust.

## Was den Speicher unbemerkt füllt

Messenger sind meistens die Hauptverdächtigen. WhatsApp, Telegram, Discord und ähnliche Apps können Fotos, Videos, Sprachnachrichten, Sticker, GIFs und Dokumente aus jeder aktiven Gruppe herunterladen. Einige Monate Gruppenchat-Medien können mehr Platz belegen als deine Kameraaufnahmen.

Der Downloads-Ordner ist ein weiterer Dateifriedhof. PDFs, APK-Installationsdateien, ZIP-Dateien, Formulare, Screenshots, Rechnungen und einmal aus einer E-Mail geöffnete Dateien bleiben dort liegen, bis du sie entfernst.

Auch Offline-Medien summieren sich still. Spotify-Playlists, Netflix-Folgen, YouTube-Downloads, Podcast-Episoden, Hörbücher und Offlinebereiche von Google Maps liegen im App-Speicher. Im Dateimanager siehst du diese Dateien möglicherweise nicht, in den Speicherdetails der jeweiligen App werden sie jedoch mitgezählt.

Auch der Papierkorb kann täuschen. Android 11 führte MediaStore-Funktionen für den Papierkorb ein, und Apps wie Files by Google können gelöschte Elemente etwa 30 Tage lang aufbewahren, wenn du den Papierkorb nicht vorher leerst. Google Fotos hat eigene Regeln. Samsung Galerie und Eigene Dateien besitzen ebenfalls eigene Papierkörbe. Wenn du viele Videos gelöscht hast und sich die Speicheranzeige kaum verändert, prüfe den Papierkorb.

## Wie viel Speicher frei bleiben sollte

Versuche, 15-20 % des Speichers frei zu halten. Bei einem Gerät mit 64 GB sind das etwa 10 GB. Bei 128 GB solltest du nach Möglichkeit ungefähr 20 GB frei lassen.

Dieser Puffer gibt Android Platz für App-Updates, Kameraverarbeitung, Cache, Datenbankschreibvorgänge, Downloads und die interne Speicherpflege. Du musst den Wert nicht täglich kontrollieren. Du solltest 2 GB freien Speicher aber auch nicht als ausreichend ansehen.

Bei einem Smartphone mit 32 GB oder 64 GB Speicher kann es mit modernen Apps, Fotos und Messenger-Medien nahezu unmöglich sein, dauerhaft genug Platz zu behalten. Das ist nicht deine Schuld. Geräte mit wenig Speicher sind schlecht gealtert.

runcheck erfasst die Speichernutzung in der Geräteübersicht und warnt vor knappem freien Speicher, bevor das Smartphone den kritischen Bereich erreicht. Die Speicherdetailansicht trennt außerdem Bilder, Videos, Audio, Dokumente, Downloads und andere Kategorien. So beginnt die Bereinigung mit konkreten Daten statt mit zufälligem Löschen.

## Häufige Fragen

### Kann voller Speicher das Smartphone dauerhaft beschädigen?

Normalerweise nicht. Für den Speichercontroller wird Wear Leveling bei wenig freiem Platz schwieriger, doch du zerstörst den NAND-Chip kaum, nur weil das Smartphone einige Male vollgelaufen ist. Das größere Risiko ist praktischer Natur: verpasste Updates, nicht gespeicherte Fotos, beschädigte App-Daten und ein Smartphone, das kaum noch benutzbar ist.

### Behebt ein Zurücksetzen auf Werkseinstellungen das Speicherproblem?

Es schafft Platz, ist aber die gröbste mögliche Lösung. Wenn WhatsApp-Medien, Offline-Videos und Kameraaufnahmen den Speicher einmal gefüllt haben, tun sie es erneut. Bereinige zuerst die Ursachen.

### Warum stimmen die angezeigten Werte nicht genau überein?

Android, Systempartitionen, vorinstallierte Apps, App-Daten, Vorschaubilder, Papierkörbe und Speicherkategorien lassen sich nicht immer sauber gegeneinander aufrechnen. Außerdem entspricht die beworbene Kapazität nicht dem tatsächlich nutzbaren Speicher. Die Zahl auf der Verpackung ist nie identisch mit dem Platz, der für deine eigenen Dateien verfügbar ist.

### Löst eine SD-Karte das Problem?

Sie hilft bei Fotos, Videos, Musik und Dokumenten, sofern dein Smartphone noch einen Steckplatz besitzt. Für Apps ist sie weniger nützlich. Viele Apps lassen sich nicht auf eine SD-Karte verschieben. Selbst wenn es möglich ist, ist eine microSD-Karte deutlich langsamer als interner UFS-Speicher. Nutze die Karte für Medien, nicht als Rettungsversuch für ein Smartphone, das von Anfang an mehr internen Speicher gebraucht hätte.
