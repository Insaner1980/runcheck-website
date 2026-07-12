---
title: "Versteckte Android-Einstellungen, die deinen Akku belasten"
description: "Android kann WLAN-Suche, Bluetooth-Suche, Hintergrundsynchronisierung, Standortabfragen und das Always-on-Display (AOD) aktiv halten, obwohl du das Smartphone nicht benutzt. Diese Einstellungen solltest du prüfen, wenn der Standby-Verbrauch zu hoch ist."
listSummary: "android, updates und sicherheit"
hub: "battery"
sourceNumber: 33
order: 23
subgroup: "Drain"
tags: ["android","updates","sicherheit","software","ratgeber"]
locale: "de"
draft: false
---
Ein großer Teil des Android-Akkuverbrauchs entsteht, während du gar nichts Besonderes mit dem Smartphone machst. Das Display ist aus, das Gerät liegt auf dem Tisch und trotzdem sinkt der Akkustand, weil Apps, Funkmodule, Sensoren und Kontosynchronisierungen es immer wieder aufwecken.

Seit Android 17 im Juni 2026 zuerst für die meisten unterstützten Pixel-Geräte veröffentlicht wurde, befinden sich manche Menünamen in einer etwas unübersichtlichen Übergangsphase. Pixel-Smartphones erhalten die neue Android-Version zuerst, während Samsung, Xiaomi, OnePlus, Motorola und andere OEMs ihre Android-17-Versionen nach eigenen Zeitplänen verteilen. Die folgenden Grundsätze gelten weiterhin, doch der genaue Pfad kann je nach Smartphone um eine Menüebene abweichen.

## Hintergrundaktivität von Apps

Hier solltest du normalerweise zuerst suchen. Apps können unauffällig Daten synchronisieren, Updates abrufen, nach Benachrichtigungen sehen, Protokolle hochladen, Widgets aktualisieren und Wake Locks halten. Soziale Netzwerke, Shopping-Apps, Nachrichten-Apps, Cloud-Speicher und schlecht entwickelte Hilfsprogramme gehören zu den üblichen Verdächtigen.

Auf einem Pixel oder einer Android-Version nahe am Google-Standard beginnst du unter **Einstellungen > Akku > Akkunutzung**. Sieh dir die App-Nutzung an und achte auf Anwendungen, die noch Strom verbrauchen, nachdem du sie nicht mehr benutzt hast. Auf aktuellen Pixel-Versionen findest du außerdem **Einstellungen > Apps > Akkunutzung von Apps**. Öffnest du eine einzelne App, kannst du ihre Hintergrundnutzung je nach Build **Uneingeschränkt** zulassen, **Optimiert** verwalten oder stärker einschränken.

Nutze eine stärkere Einschränkung für Apps, die nach dem Schließen nicht weiterlaufen müssen. Spiele, Shopping-Apps, nur gelegentlich genutzte Reise-Apps, Lieferdienste und zufällige Hilfsprogramme sind gute Kandidaten. Beschränke dagegen keine Messenger, geschäftlichen E-Mail-Apps, VPNs, Gesundheitsüberwachung, Familienschutz-Apps oder andere Anwendungen, bei denen verspätete Hinweise ein echtes Problem wären.

Auf aktuellen Samsung-Galaxy-Geräten findest du die entsprechende Funktion meist unter **Einstellungen > Akku > Grenzen der Hintergrundnutzung**. Die stärkste Option heißt **Apps in tiefem Standby** und eignet sich für Anwendungen, die du kaum benutzt. Man kann es damit aber leicht übertreiben. Wenn eine Benachrichtigung wichtig ist, gehört die App nicht in den tiefen Standby.

Den intelligenten Akku solltest du weiterhin aktiviert lassen. Er lernt, welche Apps du häufig verwendest, und begrenzt andere unauffälliger als eine manuelle Sperre. Er erkennt nicht jedes Problem, ist aber eine gute Grundlage.

## WLAN- und Bluetooth-Suche

Diese Funktion wirkt etwas versteckt. Wenn du WLAN oder Bluetooth in den Schnelleinstellungen ausschaltest, bedeutet das nicht immer, dass Android die Funkmodule nicht mehr zur Standortbestimmung verwendet. Das System kann weiterhin nach WLAN-Zugangspunkten und Bluetooth-Geräten in der Nähe suchen, um den Standort genauer zu bestimmen.

Ab Android 12 lautet der Standardpfad normalerweise **Einstellungen > Standort > Standortdienste > WLAN-Suche** beziehungsweise **Bluetooth-Suche**. Unter Android 11 und älter können beide Schalter direkt im Bereich **Standort** liegen. Auf Samsung-Geräten findest du sie in der Regel ebenfalls unter **Einstellungen > Standort > Standortdienste**.

Das Abschalten der Suche kann kleine, wiederkehrende Funkaktivitäten reduzieren. Dafür kann die Standortbestimmung in Gebäuden schlechter werden. Wenn du Google Maps in Innenräumen, Mein Gerät finden, Smart-Home-Geofencing oder standortbasierte Erinnerungen nutzt, kann die Position langsamer oder ungenauer erkannt werden.

Für die meisten Menschen würde ich diese Suche nur deaktivieren, wenn der Standby-Verbrauch bereits störend ist. Bei einem gesunden Smartphone ist sie nicht der erste Schalter, den ich ändern würde.

## Sperrbildschirm-Uhr und AOD

Ein AOD ist praktisch. Es macht aber genau das, was der Name verspricht: Ein Teil des Displays bleibt den ganzen Tag aktiv.

OLED-Displays beleuchten schwarze Pixel nicht, weshalb eine einfache Uhr auf schwarzem Hintergrund zu einem bestimmten Zeitpunkt nur wenig Strom benötigt. Das Smartphone kann jedoch 15 bis 20 Stunden pro Tag unbenutzt herumliegen. Über so viele Stunden wird selbst ein kleiner Dauerverbrauch sichtbar, besonders wenn das AOD Farben, Widgets, ein Hintergrundbild oder hellere Benachrichtigungselemente zeigt.

Auf aktuellen Pixel-Geräten findest du die Funktion gewöhnlich unter **Einstellungen > Display & Touchbedienung > Always-on-Display**. Samsung verwendet **Einstellungen > Sperrbildschirm und AOD > Always On Display**. Je nach One UI-Version kann der genaue Aufbau etwas anders aussehen.

Der beste Mittelweg ist nicht immer das vollständige Abschalten. Viele Smartphones bieten Optionen wie **Zum Anzeigen tippen**, **Für neue Benachrichtigungen** oder einen Zeitplan. So bleibt ein Großteil des Komforts erhalten, ohne dass jede Minute des Tages Pixel leuchten.

## Standortgenauigkeit und App-Berechtigungen

Die Standortgenauigkeit hilft Android, deine Position schneller und genauer zu bestimmen, indem nicht nur GPS verwendet wird. WLAN-Zugangspunkte, Mobilfunkmasten, Sensoren, die IP-Adresse und Gerätedaten können in die Standortschätzung einfließen.

Das macht die Standortgenauigkeit nicht zu einer schlechten Funktion. Sie ist ein Grund dafür, dass dein Smartphone dich auch in Gebäuden findet, in denen GPS schwach ist. Apps mit Standortberechtigung können dadurch aber leichter im Hintergrund eine Position abfragen, und solche Hintergrundabfragen sind ein häufiges Muster bei erhöhtem Akkuverbrauch.

Öffne unter **Einstellungen > Standort** die App-Berechtigungen für den Standort. Jede App mit **Immer zulassen** verdient eine genauere Prüfung. Wetter-Widgets, soziale Netzwerke, Shopping-Apps, Foto-Apps und Reise-Apps benötigen häufig keinen dauerhaften Standortzugriff. Stelle sie auf **Zugriff nur während der Nutzung der App zulassen**, sofern die Hintergrundverfolgung nicht der eigentliche Zweck der App ist.

Ab Android 12 kannst du vielen Apps außerdem nur einen ungefähren Standort geben. Das verbessert vor allem den Datenschutz und weniger die Akkulaufzeit, ist aber trotzdem eine gute Gewohnheit. Navigation, Fitness-Tracking sowie Notfall- oder Sicherheits-Apps sind naheliegende Ausnahmen.

## Synchronisierung und Konten

Jedes Konto auf dem Smartphone kann nach einem eigenen Zeitplan synchronisieren. Google, Samsung, Microsoft, E-Mail, Kalender, Kontakte, Cloud-Notizen, Drive, Fotos, Browser-Synchronisierung und Drittanbieter-Konten verursachen alle Hintergrundarbeit.

Öffne **Einstellungen > Passwörter, Passkeys & Konten** oder den auf deinem Gerät verwendeten Kontenbereich. Gehe die Konten einzeln durch und prüfe, was synchronisiert wird. Wenn dies dein einziges Smartphone ist, möchtest du Kontakte, Kalender und deine wichtigste E-Mail-Adresse wahrscheinlich unangetastet lassen. Ein nicht mehr benötigtes Arbeitskonto, ein Cloud-Speicher ohne erforderliche Smartphone-Synchronisierung oder ein altes E-Mail-Konto kann dagegen entfernt oder eingeschränkt werden.

Viele Geräte besitzen außerdem einen globalen Schalter für die automatische Synchronisierung. Ich empfehle nicht, ihn dauerhaft auszuschalten, denn verpasste E-Mails und veraltete Kalender sind lästig. An Reisetagen, auf langen Wanderungen oder bei einem Stromausfall kann es trotzdem helfen.

## Der Schalter für den Mobilfunkübergang

In den Entwickleroptionen gibt es einen Schalter namens **Mobile data always active**. Ist er eingeschaltet, hält Android die mobile Datenverbindung bereit, obwohl das Smartphone mit WLAN verbunden ist. Dadurch erfolgt der Wechsel schneller, wenn WLAN abbricht. Gleichzeitig kann das Modem länger aktiv bleiben als nötig.

Am stärksten fällt das bei schwachem Mobilfunkempfang auf. Ein Smartphone kann im Keller mit dem WLAN verbunden sein und trotzdem Strom verschwenden, weil es parallel versucht, eine LTE-Verbindung mit nur einem Balken aufrechtzuerhalten.

Um den Schalter zu erreichen, öffnest du **Einstellungen > Über das Telefon** und tippst siebenmal auf die Build-Nummer, um die Entwickleroptionen freizuschalten. Danach findest du sie normalerweise unter **Einstellungen > System > Entwickleroptionen**. Suche dort nach **Mobile data always active**. Auf Samsung-Geräten erscheinen die Entwickleroptionen nach der Aktivierung üblicherweise am Ende der Einstellungen.

Schalte die Option aus, wenn dein Smartphone den Großteil des Tages mit stabilem WLAN verbunden ist. Rechne dann mit einer kurzen Verzögerung, sobald WLAN wegfällt und das Gerät wieder auf mobile Daten umschaltet.

## Benachrichtigungen, Aktivierungsgesten und kleine Aufweckvorgänge

Eine einzelne Benachrichtigung kostet kaum Akku. Ein ganzer Tag voller unnötiger Hinweise schon eher. Jeder Ton, jede Vibration, jedes eingeschaltete Display und jede Sperrbildschirm-Animation gibt dem Smartphone einen weiteren Grund, seinen tiefsten Ruhezustand zu verlassen.

Öffne **Einstellungen > Benachrichtigungen > App-Benachrichtigungen** und gehe bei Werbe-Apps konsequent vor. Shopping-Angebote, Spielerinnerungen, Streaming-Empfehlungen, Restaurantwerbung und App-Marketing müssen dein Smartphone nicht aufwecken.

Prüfe außerdem die Sperrbildschirm- und Gesteneinstellungen, etwa das Aktivieren des Displays beim Hochheben, durch Tippen oder durch doppeltes Tippen. Diese Funktionen verwenden stromsparende Sensoren und sind allein keine großen Verbraucher. Häufiger entstehen Probleme, weil das Display in einer Tasche, im Rucksack oder auf einem vibrierenden Tisch versehentlich angeht.

Schalte die Gesten aus, die du nicht verwendest. Behalte diejenigen, die das Smartphone im Alltag tatsächlich angenehmer machen.

## Schwaches Signal ist der versteckte Verbrauch, den du nicht einfach abschalten kannst

Schlechter Mobilfunkempfang kann mehr Akku kosten als jede Einstellung auf dieser Liste. Wenn das Smartphone Mühe hat, verbunden zu bleiben, arbeitet das Modem stärker. Das passiert in ländlichen Gebieten, unter der Erde, in Gebäuden mit viel Beton, in Aufzügen und in Wohnungen, in denen das Gerät an einem einzigen Empfangsbalken festhält.

Wenn du WLAN nutzt und eine Zeit lang keine normalen Mobilfunkanrufe oder SMS brauchst, kann Flugmodus mit anschließend wieder aktiviertem WLAN helfen. Schalte zuerst den Flugmodus ein und danach WLAN wieder an. Dadurch bleibt die Internetverbindung bestehen, während das Mobilfunkmodul ausgeschaltet wird. Tu das nicht, wenn normale Anrufe, SMS oder Notfallfunktionen deines Mobilfunkanbieters erreichbar bleiben müssen.

Hier ist ein Werkzeug wie runcheck hilfreich. Wenn der Verbrauch bei ausgeschaltetem Display mit schwachem Empfang statt mit Bildschirmnutzung zusammenfällt, ist keine geheimnisvolle App das Problem. Es ist das Funkmodul.
