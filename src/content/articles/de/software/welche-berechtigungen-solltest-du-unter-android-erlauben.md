---
title: "Welche Berechtigungen solltest du unter Android erlauben?"
description: "Die einfachste Regel für Android-Berechtigungen lautet: Wenn die Berechtigung nicht zu der Funktion passt, die du gerade verwenden wolltest, lehne sie ab."
listSummary: "android, berechtigungen und datenschutz"
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","berechtigungen","datenschutz","sicherheit","ratgeber"]
locale: "de"
draft: false
---
Dass eine Kamera-App auf die Kamera zugreifen möchte, ist logisch. Dass eine Taschenlampen-App deine Kontakte lesen will, ist es nicht. Viel komplizierter sind die meisten Entscheidungen nicht.

Das Problem ist der Zeitpunkt. Apps fragen genau dann, wenn du etwas erledigen willst. Dadurch wird Zulassen schnell zur bequemsten Schaltfläche, und unnötige Berechtigungen sammeln sich an.

## Die drei Arten von Berechtigungen

Android-Berechtigungen lassen sich grob in drei Gruppen einteilen.

Normale Berechtigungen gelten als risikoarm und werden meist automatisch erteilt. Der Internetzugriff ist das offensichtlichste Beispiel. Du siehst nicht jedes Mal ein Pop-up, wenn eine App eine Netzwerkverbindung benötigt.

Laufzeitberechtigungen, in der Android-Dokumentation häufig als gefährliche Berechtigungen bezeichnet, schützen Daten oder Hardware, die private Informationen preisgeben können. Dazu gehören Standort, Kamera, Mikrofon, Kontakte, Kalender, Telefon, SMS, Geräte in der Nähe und Medienzugriff. Das sind die Abfragen, die während der App-Nutzung erscheinen.

Spezielle Berechtigungen sind weitreichender und müssen meist über die Einstellungen freigegeben werden. Dazu zählen der Zugriff auf Bedienungshilfen, Benachrichtigungen, das Einblenden über anderen Apps, Geräteadministratorrechte, Nutzungszugriff, die Installation unbekannter Apps und der Zugriff auf alle Dateien. Behandle sie skeptischer als eine normale Abfrage für Kamera oder Standort.

Android 6 führte Laufzeitberechtigungen ein. Unter Android 5.1 und älter erhielten Apps umfangreiche Berechtigungen bereits bei der Installation. Wenn ein Smartphone noch auf einer solchen Version festhängt, ist das Berechtigungsmodell nur einer von vielen Gründen, es auszusortieren.

## Standort

Der Standort ist nützlich, wird aber zu oft verlangt.

Karten-, Wetter-, Fahrdienst-, Liefer-, Fitness- und Navigations-Apps können einen guten Grund haben. Bei einem Taschenrechner, einem Galerie-Filter, einem QR-Scanner oder einer Hintergrundbild-App ist das meistens nicht der Fall.

Wähle Zugriff nur während der Nutzung der App, sofern es keine echte Hintergrundfunktion gibt. Abbiegehinweise, Laufaufzeichnung, Familienschutz und Geräteortung sind Beispiele, bei denen Standortzugriff im Hintergrund sinnvoll sein kann.

Nutze den ungefähren Standort für Wetter, lokale Inhalte, Filialverfügbarkeit und alles, was deine exakte GPS-Position nicht braucht. Android 17 führt außerdem eine systemseitige Standort-Schaltfläche ein. Unterstützt eine App diese Funktion, kann sie damit präzisen Standortzugriff nur für die aktuelle Sitzung erhalten. Das passt besser zu Aufgaben, die den genauen Standort einmalig benötigen, aber keinen dauerhaften Zugriff rechtfertigen.

## Kamera, Mikrofon und Aufnahmezugriff

Der Grund für Kamera- oder Mikrofonzugriff sollte sofort erkennbar sein.

Videoanrufe brauchen beides. Messenger verwenden die Zugriffe für Fotos, Sprachnachrichten und Videonachrichten. Eine Banking-App kann die Kamera zum Erfassen von Dokumenten oder QR-Codes benötigen.

Gibt es keine sichtbare Funktion, die Kamera oder Mikrofon nutzt, lehne die Anfrage ab. Seit Android 12 zeigt Android Datenschutzindikatoren an, wenn eine App auf einen dieser Sensoren zugreift. Ebenfalls seit Android 12 gibt es das Datenschutz-Dashboard mit einer Übersicht über die jüngste Nutzung von Standort, Kamera und Mikrofon.

Sieh dort gelegentlich nach. Überraschungen fallen so schnell auf.

## Kontakte

Der Zugriff auf Kontakte wird oft zu sorglos erlaubt.

Messenger und soziale Apps fragen danach, um Personen zu finden, die du kennst. Das ist bequem, kann aber bedeuten, dass dein Adressbuch auf Server des Dienstes hochgeladen oder dort abgeglichen wird. Deine Kontakte haben dem nicht unbedingt zugestimmt.

Android 17 verbessert das mit einer systemweiten Kontaktauswahl. Damit kannst du einzelne Kontakte und ausgewählte Datenfelder freigeben, statt einer App Zugriff auf das gesamte Adressbuch zu geben. Nutze diese Möglichkeit, wenn sie angeboten wird. Wenn eine App ohne Kontaktzugriff funktioniert, lehne ich ihn normalerweise ab und füge Personen bei Bedarf manuell hinzu.

## SMS und Telefon

SMS-Zugriff ist besonders riskant. Er kann Bestätigungscodes, private Unterhaltungen und Nachrichten zur Kontowiederherstellung offenlegen. Umfassenden SMS-Zugriff sollte nur deine eigentliche Nachrichten-App haben.

Einige Banking-Apps möchten Einmalcodes automatisch auslesen. Das ist bequem, doch die manuelle Eingabe ist sicherer. Funktioniert die App ohne SMS-Zugriff, lehne ihn ab.

Die Telefonberechtigung kann je nach App und Android-Version den Anrufstatus, die Telefonnummer oder andere anrufbezogene Daten offenlegen. Telefon-, Anruffilter-, Mailbox- und Mobilfunkanbieter-Apps können einen Grund dafür haben. Die meisten anderen Apps nicht.

## Dateien, Fotos und Medien

Speicherberechtigungen haben sich über mehrere Android-Versionen stark verändert.

Ältere Versionen boten sehr weitreichenden Speicherzugriff. Android 13 teilte den Zugriff auf gemeinsam genutzte Medien in getrennte Berechtigungen für Bilder, Videos und Audio auf. Android 14 führte den Zugriff auf ausgewählte Fotos ein. Damit kannst du einer App nur bestimmte Fotos und Videos freigeben, statt die gesamte Mediathek.

Wähle immer die engste passende Option. Gib einer Foto-App ausgewählte Bilder, nicht deine ganze Mediathek. Gib einer Musik-App Zugriff auf Audio, nicht auf alle Dateien. Sei besonders vorsichtig mit dem Zugriff auf alle Dateien, denn diese spezielle Berechtigung ist für Anwendungen wie Dateimanager und Sicherungsprogramme gedacht.

## Geräte in der Nähe und WLAN

Bluetooth-Berechtigungen und Berechtigungen für Geräte in der Nähe können berechtigt sein. Apps für Kopfhörer, Smart-Home-Geräte, Uhren, Lautsprecher und Drucker benötigen sie häufig.

Android 13 führte außerdem eine Berechtigung für WLAN-Geräte in der Nähe ein. Apps können damit WLAN-Verbindungen verwalten, ohne für diese Aufgabe automatisch Standortzugriff zu benötigen. Das ist besser, als einer App den Standort zu geben, nur damit sie einen Drucker findet oder sich mit einem lokalen Gerät verbindet.

Erlaube den Zugriff trotzdem nicht, wenn die App keine Funktion für Geräte in der Nähe hat.

## Bedienungshilfen, Einblendungen und Administratorzugriff

Hier wird es gefährlich.

Der Zugriff auf Bedienungshilfen kann Bildschirminhalte lesen, Interaktionen beobachten und Aktionen für dich ausführen. Er ist für echte Bedienungshilfen, manche Passwortmanager, Automatisierungs-Apps und einige unterstützende Werkzeuge notwendig. Malware missbraucht ihn ebenfalls.

Über anderen Apps einblenden erlaubt einer App, Inhalte über anderen Bildschirmen anzuzeigen. Chatblasen und Bildschirmfilter nutzen das. Betrügerische Einblendungen tun es auch.

Geräteadministratorrechte können das Entfernen einer App erschweren. Unternehmensverwaltung, Kinderschutz und Diebstahlschutz können einen Grund dafür haben. Ein Spiel nicht.

Wenn eine beliebige Cleaner-App nach einer dieser Berechtigungen fragt, deinstalliere sie.

## Bereits erteilte Berechtigungen prüfen

Berechtigungen sind nicht dauerhaft festgeschrieben.

Auf Pixel-ähnlichen Android-Versionen findest du die Übersicht unter Einstellungen > Sicherheit und Datenschutz > Datenschutz > Berechtigungsmanager. Bei manchen Geräten liegt der Berechtigungsmanager stattdessen im Bereich Apps. Öffne Standort, Kamera, Mikrofon, Kontakte, SMS, Telefon oder Dateien und Medien und entziehe Apps den Zugriff, wenn sie ihn nicht mehr brauchen.

Suche in den Einstellungen außerdem nach dem besonderen App-Zugriff. Prüfe dort Bedienungshilfen, Benachrichtigungszugriff, Einblenden über anderen Apps, Geräteadministrator-Apps, Installation unbekannter Apps, Nutzungszugriff und Zugriff auf alle Dateien.

Android 11 und neuere Versionen können Berechtigungen von Apps automatisch zurücksetzen, die du einige Monate nicht verwendet hast. Auf Geräten mit Android 6 bis Android 10 kann Google Play Protect Berechtigungen selten genutzter Apps zurücksetzen. Das hilft, ersetzt aber keine gelegentliche eigene Kontrolle.

## Eine praktische Checkliste für Berechtigungen

Wenn eine Abfrage erscheint, stell dir drei Fragen.

Passt diese Berechtigung zu der Funktion, die ich gerade geöffnet habe?

Kann ich eine engere Option wählen, etwa Zugriff nur während der Nutzung der App, ungefähren Standort, ausgewählte Fotos oder einmaligen Zugriff?

Funktioniert die App noch, wenn ich die Berechtigung ablehne?

Im Zweifel ablehnen. Die App kann erneut fragen, wenn du später eine Funktion nutzt, die den Zugriff tatsächlich benötigt.
