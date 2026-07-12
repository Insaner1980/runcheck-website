---
title: "Bremst Bloatware dein Smartphone, und kannst du sie entfernen?"
description: "Vorinstallierte Android-Apps können Speicher belegen, Benachrichtigungen senden und Hintergrunddienste ausführen. Das bewirkt Bloatware tatsächlich, und so entfernst du solche Apps sicher."
listSummary: "leistung, geschwindigkeit und android"
hub: "performance"
sourceNumber: 78
order: 15
tags: ["leistung","geschwindigkeit","android","optimierung","fehlerbehebung"]
locale: "de"
draft: false
---
---

Bloatware wird für fast jedes langsame Android-Smartphone verantwortlich gemacht, doch die Wirklichkeit ist weniger dramatisch. Eine vorinstallierte App bremst nichts allein dadurch, dass ihr Symbol vorhanden ist. Ärger beginnt, wenn sie im Hintergrund läuft, das Smartphone aufweckt, Benachrichtigungen sendet, sich aktualisiert oder Dienste aktiv hält, obwohl du sie nie haben wolltest.

Genau das ist der lästige Teil. Du kaufst ein Smartphone, überspringst eine App bei der Einrichtung, öffnest sie nie und findest später trotzdem zugehörige Dienste in der App-Liste.

## Was Bloatware tatsächlich macht

Eine inaktive vorinstallierte App kostet vor allem Speicherplatz. Sie nutzt weder CPU noch RAM, mobile Daten oder Akku, solange Android oder eine andere App keine ihrer Komponenten startet.

Manche vorinstallierten Pakete tun allerdings mehr, als nur herumzuliegen. Facebook-bezogene Dienste wie `com.facebook.appmanager` wurden auf einigen Smartphones als Begleitpakete mitgeliefert. Samsung-Geräte können neben Googles Apps auch Samsung Free, Samsung Global Goals, Samsung TV Plus und weitere Samsung-Apps enthalten. Geräte von Mobilfunkanbietern bringen mitunter Konto-Apps, Einrichtungsassistenten, Mailbox-Apps, Testversionen von Sicherheitssoftware und Installationsprogramme für Werbe-Apps mit.

Ein oder zwei Hintergrunddienste ruinieren die Leistung normalerweise nicht. Fünfzehn davon auf einem günstigen Smartphone sind eine andere Sache. Ein Gerät mit 3 oder 4 GB RAM, einem schweren Launcher, sozialen Apps, Anbieterwerkzeugen und Herstellerdiensten kann sich langsamer anfühlen als ein älteres Oberklassemodell mit saubererer Software und mehr RAM-Reserve.

Speicherplatz lässt sich leichter prüfen als Hintergrundaktivität. Öffne **Einstellungen > Speicher > Apps** oder **Einstellungen > Apps**, sortiere die Liste nach Größe, sofern dein Gerät das unterstützt, und suche nach Apps, die du nicht verwendest. Der genaue Pfad unterscheidet sich je nach Hersteller. Auf Pixel-Geräten ist er recht schlicht, Samsung bündelt mehr Funktionen in der Gerätewartung, und Xiaomi verteilt Speicherwerkzeuge häufig auf die Einstellungen und die Sicherheits-App.

## Erst deaktivieren, dann deinstallieren, wenn Android es erlaubt

Einige vorinstallierte Apps kannst du wie normale Apps deinstallieren. Halte das Symbol gedrückt, öffne die App-Info und suche nach **Deinstallieren**. Fehlt die Schaltfläche, ist sie ausgegraut oder steht dort stattdessen **Deaktivieren**, behandelt Android die App als System-App.

Deaktivieren ist der sicherere erste Schritt. Öffne **Einstellungen > Apps**, wähle die App und tippe auf **Deaktivieren**. Eine deaktivierte App läuft nicht mehr, verschwindet aus dem Launcher und erhält keine normalen Updates mehr. Sie belegt weiterhin etwas Speicher, weil das ursprüngliche App-Paket im Systemabbild bleibt. Android entfernt jedoch nach Möglichkeit installierte Updates und lokale App-Daten.

Dieser letzte Punkt ist wichtig. Das Deaktivieren einer System-App gibt nicht plötzlich mehrere Gigabyte frei. Es kann trotzdem helfen, wenn die App Updates heruntergeladen, Medien zwischengespeichert, ein Konto eingerichtet oder andere lokale Daten abgelegt hatte.

Samsung und andere OEMs zeigen bei manchen ab Werk installierten Apps **Deinstallieren** an. Häufig wird damit die nachträglich installierte Update-Ebene entfernt, während die Werksversion inaktiv im System verbleibt. Aus deiner Sicht reicht das. Du wolltest die App aus dem Alltag entfernen, nicht aus einer schreibgeschützten Systempartition herausoperieren.

## Wann das Entfernen per ADB sinnvoll ist

Hartnäckige Pakete kannst du mit ADB für den aktuellen Nutzer entfernen, ohne das Smartphone zu rooten:

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

Der Befehl löscht das Paket nicht aus der Systempartition. Er deinstalliert es für Nutzer 0, also den Hauptnutzer des Smartphones. Nach einem Zurücksetzen auf Werkseinstellungen erscheint es wieder.

Verwende den Befehl nur, wenn du den exakten Paketnamen kennst und verstehst, was du entfernst. Der Paketname kann in der URL des Play Store stehen. Alternativ listest du installierte Pakete mit diesem Befehl auf:

```text
adb shell pm list packages
```

Werkzeuge wie Canta und Universal Android Debloater Next Generation machen das etwas weniger mühsam. Canta läuft auf dem Smartphone und nutzt Shizuku. UAD-ng läuft auf einem Computer, greift über ADB zu und verwendet gepflegte Paketlisten mit Sicherheitseinstufungen. Diese Hinweise sind nützlich, aber nicht unfehlbar. Ist etwas als unsafe, expert, framework, provider, dialer, launcher oder mit Bezug zu Google Play Services gekennzeichnet, lass es in Ruhe, sofern du keinen echten Wiederherstellungsplan hast.

Im Ernst. Das falsche Paket zu entfernen kann Benachrichtigungen, Anrufe, Play-Store-Installationen, Widgets, Kontosynchronisierung oder sogar den Startvorgang beschädigen.

## Welche Smartphones meist mit weniger Zusatzsoftware kommen

Direkt und ohne Anbieterpaket gekaufte Pixel-Geräte gehören weiterhin zu den saubersten verbreiteten Android-Smartphones. Sie enthalten Googles Apps, vermeiden beim Direktkauf aber normalerweise zusätzliche Pakete eines Mobilfunkanbieters. Motorola liegt häufig nah dahinter und ergänzt eher einzelne Moto-Funktionen als ein zweites vollständiges App-Ökosystem.

Samsung ist besser geworden, liefert aber weiterhin eigene Varianten mehrerer Google-Kategorien mit: Browser, App-Store, Galerie, Notizen, Kontodienste, TV und Nachrichten-Feeds. Manche Menschen mögen diese Auswahl. Wenn du sie nicht brauchst, wirkt sie wie Ballast.

Xiaomi, Redmi, Poco, Oppo, Realme und Vivo unterscheiden sich stark nach Land und Preisklasse. Ein europäisches Modell und eine indische Variante mit derselben Hardwarebezeichnung können andere Drittanbieter-Apps, Empfehlungen, Werbung oder Aufforderungen zur App-Installation enthalten. Geräte eines Mobilfunkanbieters bilden noch einmal eine eigene Kategorie, weil der Anbieter unabhängig vom Hersteller zusätzliche Apps installieren kann.

Bei Nothing und OnePlus hat sich die Lage im Laufe der Jahre mehrfach verändert. Manche Gerätegenerationen sind sehr aufgeräumt, andere enthalten mehr Partnerdienste, als Fans erwartet haben. Der Ruf einer Marke ist nur ein Hinweis, kein Beweis. Prüfe vor dem Kauf aktuelle Tests des genauen Modells für deine Region.

## Was du nicht deaktivieren solltest

Deaktiviere Google Play Services nicht. Viele Apps benötigen sie für Push-Benachrichtigungen, Standortfunktionen, Anmeldung, Karten, Sicherheitsprüfungen und Abrechnung. Aus einem kleinen Ärgernis wird sonst schnell ein kaum nutzbares Smartphone.

Sei vorsichtig mit Android System WebView, dem Standard-Launcher, der Telefon-App, der Nachrichten-App, der Tastatur, der Berechtigungsverwaltung, dem Paketinstallationsprogramm, den Einstellungen, Kontakt- und Medienanbietern sowie allem, was `framework` oder `provider` im Paketnamen trägt. Diese Komponenten klingen langweilig, weil sie Infrastruktur sind.

Einzelne Google-Apps wie Google TV, YouTube Music, Google News oder Google One kannst du normalerweise deaktivieren, wenn du sie nicht verwendest. Chrome ist meist ebenfalls entbehrlich, sofern ein anderer Browser installiert ist. Das Verhalten der Hersteller unterscheidet sich jedoch genug, dass du anschließend WebView und die Browser-Standards prüfen solltest.

## Kann Bloatware Schadsoftware sein?

Legitime Apps von Google, Samsung, Motorola, Xiaomi, einem Mobilfunkanbieter oder einem anderen bekannten OEM sind nicht automatisch Malware. Sie können trotzdem lästig, ressourcenhungrig oder zu aufdringlich mit Benachrichtigungen sein.

Das Risiko ist bei extrem günstigen Smartphones unbekannter Marken, inoffiziellen ROM-Builds oder Geräten von Marktplätzen höher, auf denen die Firmware verändert worden sein könnte. Zeigt eine vorinstallierte App Werbung, installiert andere Apps, fordert merkwürdige Berechtigungen an oder kehrt nach dem Entfernen immer wieder zurück, suche nach ihrem exakten Paketnamen, bevor du ihr vertraust.

## Nach einem Systemupdate

Große Android- oder OEM-Updates können Apps wieder aktivieren, die du zuvor deaktiviert hattest. Monatliche Sicherheitsupdates lassen diese Einstellungen normalerweise in Ruhe, aber nach einem großen Upgrade lohnt sich eine Kontrolle.

Android 17 ändert an der grundsätzlichen Empfehlung nichts. Im Juli 2026 hat die Version mit Beta 3 Plattformstabilität erreicht und ist für Tests auf unterstützten Pixel-Geräten verfügbar, aber noch nicht stabil allgemein verteilt. Auf Geräten von Samsung, Xiaomi, Oppo und ähnlichen Herstellern hängt die Bloatware-Frage ohnehin stärker vom OEM-Systemabbild und der Anbieter-Software als von der Android-Versionsnummer ab.
