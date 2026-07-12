---
title: "Warum Apps unter Android abstürzen und was du dagegen tun kannst"
description: "Android-Apps stürzen aus konkreten Gründen ab. So erkennst du, ob eine einzelne App, WebView, wenig RAM, knapper Speicher oder ein Android-Update dahintersteckt."
listSummary: "Android-Apps stürzen aus konkreten Gründen ab."
hub: "performance"
sourceNumber: 77
order: 14
tags: ["leistung","geschwindigkeit","android","optimierung","fehlerbehebung"]
locale: "de"
draft: false
---
---

Die meisten App-Abstürze sind nicht zufällig. Sie wirken nur so, weil du den auslösenden Fehler nicht siehst.

Eine App stürzt ab, wenn sie in einen Zustand gerät, aus dem sie sich nicht selbst erholen kann. Android beendet sie, manchmal mit einer Meldung wie „App wird wiederholt beendet“, manchmal ganz unspektakulär. Eine App, die direkt beim Start abstürzt, hat ein anderes Problem als eine App, die nach zehn Minuten ausfällt. Und eine fehlerhafte App ist etwas anderes als ein halbes Dutzend Apps, die am selben Tag abstürzen.

Das ist der entscheidende Punkt: Versuche nicht, pauschal „Android“ zu reparieren. Untersuche das Muster.

## Eine einzelne App stürzt immer wieder ab

Beginne mit dem App-Cache. Auf Pixel-Geräten und vielen Smartphones mit weitgehend unverändertem Android findest du ihn meist über **Einstellungen > Apps > Alle Apps anzeigen > [App-Name] > Speicher und Cache > Cache leeren**. Auf Samsung-Geräten lautet der Pfad in der Regel **Einstellungen > Apps > [App-Name] > Speicher > Cache leeren**.

Beim Leeren des Cache werden temporäre Dateien entfernt. Du wirst dadurch nicht abgemeldet und deine Kontodaten werden nicht gelöscht. Stürzt die App weiterhin ab, kannst du den Speicherinhalt oder die App-Daten löschen, solltest aber vorher kurz anhalten. Dadurch wird die App zurückgesetzt. Bei WhatsApp, Signal, Notiz-Apps, Offline-Karten, Musikdownloads oder Spielen mit lokalen Speicherständen kann das ohne Sicherung Daten löschen, die dir wichtig sind.

Aktualisiere als Nächstes die App. Öffne Google Play, suche nach der App und installiere ein verfügbares Update. Haben die Abstürze direkt nach einem App-Update begonnen, sieh dir aktuelle Bewertungen im Play Store an. Melden viele Menschen denselben Absturz mit derselben Version, muss die eigentliche Korrektur wahrscheinlich vom Entwickler kommen.

Deinstalliere die App und installiere sie neu, wenn sie sich weiterhin nicht beruhigt. Das ist langweilig, baut aber App-Paket und lokale Dateien sauber neu auf. Es hilft häufiger, als man erwarten würde.

## Viele Apps stürzen plötzlich gleichzeitig ab

Wenn mehrere voneinander unabhängige Apps am selben Tag ausfallen, solltest du eine gemeinsam genutzte Android-Komponente verdächtigen. Android System WebView ist das klassische Beispiel.

WebView ermöglicht Apps, Webinhalte innerhalb der App anzuzeigen, statt dich an einen Browser weiterzuleiten. E-Mail-, Shopping- und Banking-Apps, Hilfeseiten, Anmeldevorgänge und Nachrichten-Apps können davon abhängen. Im März 2021 führte ein fehlerhaftes WebView-Update zu weit verbreiteten App-Abstürzen, bis Google korrigierte Updates für WebView und Chrome veröffentlichte.

Aktualisiere deshalb zuerst Android System WebView und Google Chrome. Suche beide Apps in Google Play und installiere verfügbare Updates. Wurde WebView unmittelbar vor Beginn der Abstürze aktualisiert und gibt es noch keine korrigierte Version, kann das Entfernen der WebView-Updates auf manchen Geräten vorübergehend helfen. Behandle das wirklich nur als Übergangslösung, denn WebView ist eine sicherheitsrelevante Komponente.

Auch veraltete oder festgefahrene Google Play services können viele Apps gleichzeitig beeinträchtigen. Aktualisiere sie, falls Google Play eine Aktualisierung anbietet, und starte das Smartphone nach Updates von Systemkomponenten neu.

## Abstürze durch wenig RAM oder wenig Speicherplatz

Apps können abstürzen, wenn sie Arbeitsspeicher anfordern, den Android ihnen nicht mehr geben kann. Manchmal beendet das System Hintergrund-Apps still. Manchmal trifft es die App, die du gerade verwendest.

Das kommt auf Smartphones mit 3 oder 4 GB RAM und modernen Apps häufig vor. Spiele, Videoeditoren, Kamera-Apps und Browser mit vielen Tabs sind typische Problemfälle. Ein Messenger kann den ganzen Tag funktionieren und erst beim Anhängen eines großen Videos abstürzen, weil genau dieser Vorgang deutlich mehr Speicher benötigt.

Auch fast voller interner Speicher kann wie ein App-Fehler aussehen. Apps brauchen Platz für Cache-Dateien, Downloads, Datenbanken und Updates. Ist der Speicher beinahe voll, können Schreibvorgänge fehlschlagen. Auf einem sehr vollen Smartphone reichen manchmal schon 1 oder 2 GB zusätzlicher Platz, um Abstürze zu stoppen. Ein besseres Ziel sind jedoch mindestens 10 bis 15 % freier Speicher.

Prüfe den Speicherbereich in den Einstellungen. Lösche große Videos, alte Downloads, doppelte Dateien, ungenutzte Apps und APK-Dateien, die du nicht mehr brauchst. Leere außerdem den Papierkorb in Galerie- oder Datei-Apps, wenn gelöschte Dateien dort noch 30 Tage aufbewahrt werden.

## Abstürze nach einem Android-Update

Große Betriebssystemupdates verändern die Umgebung, in der jede App läuft. Android 17 befindet sich im Juli 2026 noch in der Beta und hat mit Beta 3 Plattformstabilität erreicht. Unterstützte Pixel-Geräte können die Testversion bereits ausführen, eine stabile allgemeine Verteilung hat aber noch nicht begonnen. War eine App vorher nur knapp kompatibel, kann ein großes Update oder schon eine Beta-Version das schnell sichtbar machen.

Aktualisiere nach einem Systemupdate zuerst deine Apps. Aktualisiere anschließend WebView, Chrome, Google Play services und die betroffene App. Starte das Smartphone einmal neu. Wurde das Update gerade erst installiert, gib dem Gerät einige Stunden Zeit, da Android im Hintergrund noch Apps optimieren und Caches neu aufbauen kann.

Stürzt nach Android 17 nur eine App ab, muss wahrscheinlich der Entwickler nachbessern. Cache oder App-Daten zu löschen kann helfen, wenn alte lokale Dateien den Fehler auslösen. Es repariert aber keinen Programmcode, der mit der neuen Android-Version nicht kompatibel ist.

Stürzen viele Apps nach einem Update ab, suche nach einer Systemkorrektur des Herstellers. Pixel-Geräte erhalten solche Fehlerbehebungen über Googles Systemupdates. Samsung, Xiaomi, OnePlus, OPPO und andere Hersteller verteilen Korrekturen über ihre eigenen Update-Kanäle.

## Der sichere Modus zeigt, ob eine andere App stört

Der sichere Modus startet Android, ohne heruntergeladene Apps zu laden. Er entfernt sie nicht. Du erhältst lediglich eine saubere Testumgebung.

Bei aktuellen Pixel-Geräten öffnest du das Ausschaltmenü, indem du Ein/Aus und Lauter kurz gleichzeitig drückst. Halte dann **Ausschalten** oder **Neu starten** auf dem Bildschirm gedrückt und bestätige den Start im sicheren Modus. Auf Samsung-Geräten kannst du in den Schnelleinstellungen das Ausschaltmenü öffnen, **Ausschalten** gedrückt halten und anschließend **Sicherer Modus** wählen. Bei einigen Modellen funktioniert weiterhin die Methode, beim Hochfahren die Leiser-Taste gedrückt zu halten. Die genaue Vorgehensweise bei Xiaomi-Geräten variiert, viele Modelle starten ebenfalls mit gedrückter Leiser-Taste in den sicheren Modus.

Verschwinden die Abstürze im sicheren Modus, stört wahrscheinlich eine heruntergeladene App. Starte normal neu und entferne zuerst kürzlich installierte oder besonders tief eingreifende Apps: Cleaner, Akku-Sparer, Antiviren-Apps, VPNs, alternative Launcher, Automatisierungswerkzeuge und Apps mit Bedienungshilfen-Berechtigung.

Treten die Abstürze auch im sicheren Modus auf, liegt die Ursache eher bei der Systemsoftware, dem Speicher, der Hardware oder einer vorinstallierten App.

## Wenn eine App einfriert statt abzustürzen

Eine Meldung wie „App reagiert nicht“ bezeichnet einen ANR, kurz für Application Not Responding. Die App ist noch nicht abgestürzt. Android warnt dich, dass sie nicht schnell genug reagiert hat.

Für Eingaben liegt das Standardlimit unter AOSP und auf Pixel-Geräten bei 5 Sekunden. BroadcastReceiver haben je nach Fall längere Fristen, häufig 10 bis 20 Sekunden. Hersteller können diese Werte anpassen. Für dich fühlt es sich gleich an: Du tippst, wartest, und nichts passiert.

Wähle **Warten**, wenn gerade etwas läuft, das du nicht verlieren willst, etwa ein Videoexport oder das Senden einer großen Datei. Wähle **Schließen**, wenn die App eindeutig feststeckt. Wiederholte ANRs derselben App bedeuten meist, dass sie auf ihrem Hauptthread zu viel Arbeit erledigt, auf eine langsame Netzwerkanfrage wartet oder mit knappem Arbeitsspeicher kämpft.

## Was du nicht installieren solltest

Installiere keine „Crash Fixer“, RAM-Booster oder Stabilitäts-Booster. Sie können fehlerhaften Code in einer anderen App nicht reparieren. Im besten Fall leeren sie Cache-Dateien und erzwingen das Beenden von Hintergrund-Apps. Im schlechtesten Fall fügen sie einem ohnehin knappen Smartphone einen weiteren ständig laufenden Dienst hinzu.

Die sinnvollen Lösungen sind unspektakulär: App aktualisieren, Cache leeren, App-Daten nur mit Bedacht löschen, neu installieren, Speicherplatz freigeben, den sicheren Modus testen und auf den Entwickler oder Hersteller warten, wenn der Fehler dort liegt.

Abstürze beschädigen das Smartphone nicht. Ungespeicherte Arbeit können sie trotzdem vernichten. Passieren sie beim Speichern von Fotos, Notizen oder Dokumenten, solltest du der App erst wieder vertrauen, nachdem du deine Daten gesichert hast.
