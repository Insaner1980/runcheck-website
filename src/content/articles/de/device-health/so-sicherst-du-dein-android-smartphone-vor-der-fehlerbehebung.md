---
title: "So sicherst du dein Android-Smartphone vor der Fehlerbehebung"
description: "Sichere dein Smartphone, bevor du App-Daten löschst, App-Einstellungen zurücksetzt, den Wiederherstellungsmodus verwendest oder das Gerät auf Werkseinstellungen zurücksetzt. Manche Maßnahmen sind harmlos. Andere sind nur so lange harmlos, bis eine lokal gespeicherte Datei, ein Chatverlauf oder ein 2FA-Code verschwindet."
listSummary: "leistung, geschwindigkeit und android"
hub: "device-health"
sourceNumber: 9
order: 5
tags: ["leistung","geschwindigkeit","android","optimierung","fehlerbehebung"]
locale: "de"
draft: false
---
Eine gute Sicherung muss nicht kompliziert sein. Du musst nur wissen, was Android bereits speichert, was ausgelassen wird und welche Apps eine eigene Sicherung brauchen, bevor du etwas Unumkehrbares ausführst.

## Was Google automatisch sichert

Wenn dein Android-Smartphone mit einem Google-Konto angemeldet ist, werden einige Daten bereits außerhalb des Geräts synchronisiert. Kontakte in Google Kontakte, Termine in Google Kalender, Gmail und viele Einstellungen von Google-Apps erscheinen nach dem Zurücksetzen wieder, sobald du dich erneut anmeldest. Google Fotos speichert Fotos und Videos, wenn die Sicherung in der Fotos-App aktiviert ist.

Die integrierte Google-Sicherung von Android umfasst mehr, als viele erwarten, aber weniger, als viele annehmen. Sie kann Apps und einen Teil der App-Daten, die Anrufliste, Kontakte, Geräteeinstellungen sowie SMS- und MMS-Nachrichten sichern. Bei Google Messages können auch RCS-Nachrichten enthalten sein. Mit Telefon von Google können außerdem Anrufeinstellungen und blockierte Nummern gesichert werden.

Unübersichtlich wird es bei App-Daten. Android erlaubt Apps, sein Sicherungssystem zu verwenden. Die Entwickler können jedoch festlegen, was gespeichert wird, oder die Sicherung vollständig ausschließen. Banking-Apps, Apps für die Zwei-Faktor-Authentifizierung und manche Spiele werden deshalb nicht so wiederhergestellt, wie du es erwartest. Das ist kein Fehler deiner Sicherung, sondern eine Folge der Android-Sicherungsregeln.

Lokale Dateien sind die größere Falle. Downloads, PDFs, Aufnahmen, Dokumente, Musik und Dateien in beliebigen App-Ordnern solltest du nicht blind der Gerätesicherung überlassen. Google hat mit den Google Play-Diensten v26.06 im Februar 2026 eine Funktion eingeführt, die auf unterstützten Geräten heruntergeladene Dokumente in Google Drive sichern kann. Betrachte sie als zusätzlichen Schutz für Downloads, nicht als vollständige Sicherung des internen Speichers.

## Android 17 hat den Zeitpunkt verändert, nicht die Checkliste

Android 17 wird seit dem 16. Juni 2026 verteilt, zuerst für die meisten unterstützten Pixel-Smartphones. Andere geeignete Android-Geräte folgen im weiteren Verlauf des Jahres 2026, abhängig von Hersteller und Mobilfunkanbieter.

Deshalb können zwei Smartphones nebeneinander vorübergehend unterschiedliche Android-Versionen anzeigen. Ein Pixel läuft vielleicht schon mit Android 17, während ein Samsung-, OnePlus-, Motorola- oder Xiaomi-Gerät noch wartet. Die Sicherungscheckliste bleibt gleich, aber Pfade und Bezeichnungen in den Einstellungen können sich etwas verschieben.

Auf vielen Geräten beginnst du unter **Einstellungen > Google > Alle Dienste > Sicherung**. Auf Pixel kann auch **Einstellungen > Google > Sicherung** erscheinen. Auf Samsung Galaxy findest du die Sicherungsoptionen unter **Einstellungen > Konten und Sicherung**.

## Sicherung prüfen, bevor du mit der Fehlerbehebung beginnst

Öffne die Sicherungsseite und kontrolliere zwei Dinge: Ist die Sicherung eingeschaltet, und wann wurde sie zuletzt erfolgreich abgeschlossen? Ist der Zeitstempel alt, tippe auf **Jetzt sichern** und warte, bis der Vorgang beendet ist.

Beeile dich hier nicht. Google weist darauf hin, dass eine vollständige Sicherung oder Wiederherstellung bis zu 24 Stunden dauern kann, auch wenn kleinere Sicherungen oft deutlich schneller fertig sind. Wenn du das Smartphone gleich zurücksetzen willst, warte auf die Bestätigung einer aktuellen erfolgreichen Sicherung, statt einfach anzunehmen, dass sie im Hintergrund funktioniert hat.

Bleibt das Gerät bei "Warten auf Sicherung" hängen, prüfe zuerst die Grundlagen. Verbinde es mit WLAN, schließe das Ladegerät an, aktualisiere bei Bedarf die Google Play-Dienste und die Google One App und kontrolliere, ob dein Google-Speicher voll ist. Der kostenlose Speicherplatz eines Google-Kontos wird von Gmail, Drive und Fotos gemeinsam genutzt und ist deshalb schneller ausgeschöpft, als viele erwarten.

## Lokale Dateien selbst kopieren

Für lokale Dateien ist eine manuelle Kopie weiterhin die sicherste Rückfallebene.

Verbinde das Smartphone mit einem USB-C-Kabel mit einem Computer. Tippe auf die USB-Benachrichtigung und wähle **Dateiübertragung**. Danach sollte der interne Speicher auf dem Computer erscheinen.

Kopiere diese Ordner, sofern sie vorhanden sind:

- DCIM für Kamerafotos und -videos.
- Download für PDFs, Tickets, Installationsdateien, Formulare und Inhalte aus dem Browser.
- Documents für Dateien aus Büro- und Produktivitäts-Apps.
- Music und Recordings, wenn du lokale Audiodateien oder Aufnahmen speicherst.
- Pictures und Movies, besonders wenn Apps Medien außerhalb von DCIM ablegen.
- WhatsApp-Medienordner, sofern vorhanden. Auf neueren Android-Versionen liegen sie möglicherweise unter Android/media/com.whatsapp/WhatsApp/Media statt direkt im internen Speicher.

Auch bei aktivierter Sicherung in Google Fotos solltest du DCIM vor dem Zurücksetzen lokal kopieren. Bei unersetzlichen Fotos verlasse ich mich ungern auf einen einzigen Cloud-Schalter. Ein falsches Konto, ein voller Speicher oder ein Ordner, der nie für die Sicherung ausgewählt wurde, reicht für einen sehr schlechten Tag.

Samsung-Nutzer haben mit Samsung Smart Switch eine weitere brauchbare Möglichkeit. Installiere Smart Switch auf einem Windows-PC oder Mac, verbinde das Galaxy-Smartphone per USB, klicke auf **Sicherungskopie** und prüfe vor dem Start die ausgewählten Kategorien. Smart Switch kann unter anderem Anrufe, Kontakte, Nachrichten und Apps sichern. Samsung weist trotzdem darauf hin, dass nicht jeder Dateityp und jeder Inhalt unterstützt wird. Nutze es als breites Sicherheitsnetz, nicht als einzige Kopie deiner wichtigsten Dateien.

## Messaging-Apps separat sichern

Messaging-Apps sind eine eigene Welt. Verlasse dich nicht darauf, dass Android alle gleich behandelt.

WhatsApp verwendet sein eigenes Sicherungsverfahren. Öffne **WhatsApp > Einstellungen > Chats > Chat-Backup** und prüfe Google-Konto, Sicherungshäufigkeit und Zeitpunkt der letzten Sicherung. Nach einem Zurücksetzen oder beim Wechsel auf ein neues Android-Smartphone lassen sich WhatsApp-Chats nur aus einer Sicherung wiederherstellen, die vor dem Löschen angelegt wurde.

Normale Telegram-Cloud-Chats liegen auf den Servern und erscheinen nach der Anmeldung wieder. Geheime Chats von Telegram sind anders. Sie sind an das jeweilige Gerät gebunden, gehören nicht zur Telegram-Cloud und werden nicht auf ein anderes Smartphone übertragen.

Signal bietet inzwischen mehr als einen Sicherungsweg. Signal Secure Backups sind optional und Ende-zu-Ende-verschlüsselt; zur Wiederherstellung brauchst du den Wiederherstellungsschlüssel. Auf Android unterstützt Signal außerdem lokale, verschlüsselte Sicherungsdateien auf dem Gerät. Bei dieser Variante musst du den gesamten Signal-Sicherungsordner an einen sicheren Ort kopieren und den Wiederherstellungscode aufbewahren. Fehlt eines von beidem, ist die Sicherung wertlos.

## Authenticator- und 2FA-Apps schützen

Diesen Schritt lassen viele aus. Genau dadurch können sie sich aus den Konten aussperren, die ihnen am wichtigsten sind.

Google Authenticator kann Codes in dem Google-Konto synchronisieren, das in der App aktiv ist. Öffne Google Authenticator und kontrolliere das Kontosymbol oben. Läuft die App ohne angemeldetes Google-Konto, übertrage die Codes vor dem Zurücksetzen manuell. Öffne das Menü, wähle **Konten übertragen** und dann **Konten exportieren**. Scanne die erzeugten QR-Codes mit einem anderen Gerät.

Microsoft Authenticator unterstützt eine Cloudsicherung. Android-Sicherungen lassen sich nur auf Android und iOS-Sicherungen nur auf iOS wiederherstellen. Öffne in der App die **Einstellungen**, aktiviere **Cloudsicherung** und bestätige das persönliche Microsoft-Konto, in dem die Sicherung gespeichert wird. Arbeits-, Schul- und Universitätskonten können nach der Wiederherstellung trotzdem eine erneute Anmeldung oder Bestätigung verlangen.

Authy unterstützt verschlüsselte Cloud-Sicherungen und die Synchronisierung zwischen Mobilgeräten. Prüfe, ob Sicherungen aktiviert sind und ob du das Sicherungspasswort kennst. Authy kann dieses Passwort nicht für dich wiederherstellen.

Speichere für jeden Dienst mit 2FA zusätzlich die Wiederherstellungscodes. Lege sie in einem Passwortmanager ab oder drucke sie aus und bewahre sie privat auf. Screenshots sind besser als gar keine Sicherung, bringen Material zur Kontowiederherstellung aber in deine Fotobibliothek. Das ist möglicherweise nicht der Ort, an dem du es haben möchtest.

## Welche Maßnahmen eine vollständige Sicherung brauchen

Beim Leeren des App-Caches werden temporäre Dateien entfernt. Konto, Dokumente, Fotos und gespeicherte App-Daten sollten erhalten bleiben. Nur für diese Maßnahme ist eine vollständige Sicherung normalerweise nicht nötig.

Das Löschen von App-Daten ist etwas anderes. Es versetzt die App in den Zustand einer Neuinstallation. Lokale Notizen, Downloads, Anmeldesitzungen, Offlinekarten, Spielstände und App-Einstellungen können verschwinden. Sichere die betreffende App vorher separat.

Der abgesicherte Modus deaktiviert Apps von Drittanbietern nur vorübergehend, solange Android in diesem Modus läuft. Er löscht sie nicht. Nach einem normalen Neustart sollten sie wieder verfügbar sein. Eine Sicherung ist hier optional, sofern der abgesicherte Modus nicht Teil einer größeren Bereinigung ist.

Das Löschen der Cache-Partition entfernt auf Smartphones, die diese Funktion noch anbieten, temporäre Systemdateien aus dem Wiederherstellungsmodus. Persönliche Daten sollten erhalten bleiben. Du arbeitest dabei aber bereits in einem systemnahen Menü. Ist das Gerät stabil genug, sichere es vorher.

Ein Zurücksetzen auf Werkseinstellungen löscht das Smartphone. Ohne Ausnahme. Auf Samsung Galaxy liegt der Pfad meist unter **Einstellungen > Allgemeine Verwaltung > Zurücksetzen > Auf Werkseinstellungen zurücksetzen**. Auf Pixel und vielen Geräten mit weitgehend unverändertem Android verwendest du **Einstellungen > System > Optionen zum Zurücksetzen > Alle Daten löschen**. Beginne erst, wenn Google-Sicherung, Fotosicherung, lokale Dateikopie, Messaging-Sicherungen und 2FA-Sicherungen geprüft sind.

## Vor dem Zurücksetzen FRP prüfen

Factory Reset Protection (FRP) ist Androids Diebstahlschutz nach dem Zurücksetzen. Android kann bei der erneuten Einrichtung die bisherige Displaysperre oder eines der Google-Konten verlangen, die zuvor mit dem Smartphone synchronisiert waren. Kannst du diese Daten nicht angeben, bleibst du möglicherweise bei der Einrichtung hängen, bis der Besitz nachgewiesen ist.

Bevor die Fehlerbehebung bei einem Zurücksetzen auf Werkseinstellungen ankommt, prüfe die E-Mail-Adresse des Google-Kontos auf dem Smartphone und teste das Passwort in einem Browser oder auf einem anderen Gerät. Bestätige außerdem, dass du PIN, Muster oder Passwort der Displaysperre kennst.

Entferne dein Google-Konto nicht nur deshalb, um FRP zu vermeiden, wenn du dein eigenes Smartphone zur Fehlerbehebung zurücksetzt. Dadurch kannst du auch den Zugriff auf die Sicherung verlieren, die du anschließend wiederherstellen wolltest. Der Verkauf oder die Weitergabe des Geräts ist ein anderer Vorgang. Für die Fehlerbehebung gilt: Zugangsdaten prüfen, Sicherung abschließen und erst dann zurücksetzen, wenn risikoärmere Maßnahmen nicht geholfen haben.
