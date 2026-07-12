---
title: "So testest du NFC unter Android"
description: "Einfache Methoden, um NFC auf deinem Android-Smartphone mit Einstellungen, kontaktlosen Karten, Google Wallet, Samsung-Diagnose, Xiaomi CIT und NFC-Test-Apps zu prüfen."
listSummary: "diagnose, sensoren und android"
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnose","sensoren","android","hardware","ratgeber"]
locale: "de"
draft: false
---
Du hältst dein Smartphone an ein Zahlungsterminal, und nichts passiert. Jetzt hast du zwei Probleme: Die Zahlung ist fehlgeschlagen, und du weißt nicht, ob NFC, Google Wallet, die Karte, die Hülle oder das Terminal schuld ist.

Beginne kleiner. NFC lässt sich leicht testen, wenn du das reine Lesen der Hardware von Zahlungen trennst.

## Prüfe, ob das Smartphone NFC hat

Öffne die Einstellungen und suche nach NFC. Auf vielen Android-Smartphones lautet der Weg `Einstellungen > Verbundene Geräte > Verbindungseinstellungen > NFC`. Bei Samsung findest du die Funktion unter `Einstellungen > Verbindungen > NFC und kontaktlose Zahlungen`. Prüfe auf dieser Seite außerdem die ausgewählte Zahlungs-App.

Fehlt die NFC-Option, besitzt das Smartphone wahrscheinlich keinen NFC-Chip. Das kommt bei günstigeren Android-Geräten weiterhin vor, besonders bei Einsteigermodellen, die in mehreren regionalen Varianten verkauft werden. Eine Version eines Smartphones kann NFC haben, während eine fast gleich benannte Variante ohne NFC ausgeliefert wird.

Aktiviere NFC vor dem Test. Kontrolliere außerdem die standardmäßige Zahlungs-App, wenn du je nach Region und Smartphone-Modell Google Wallet, Samsung Pay oder Samsung Wallet testen möchtest.

## Teste mit einer kontaktlosen Karte

Das ist der einfachste Hardwaretest. Verwende eine kontaktlose Bankkarte, Fahrkarte, Zugangskarte oder einen NFC-Tag. Halte sie flach an die Rückseite des Smartphones und bewege sie langsam über die obere Hälfte des Geräts.

Funktioniert NFC, vibriert das Smartphone normalerweise, gibt einen Ton aus, öffnet einen Hinweis der Wallet oder zeigt eine Meldung zu einem unbekannten Tag. Jede dieser Reaktionen bedeutet, dass NFC-Leser und Antenne aktiv sind.

Passiert nichts? Entferne die Hülle und versuche es erneut. Metallplatten, magnetische Halterungen, Ringhalter und dicke Kartenhüllen können NFC blockieren oder abschwächen. Die Lesereichweite ist kurz, deshalb machen kleine Positionsänderungen einen Unterschied.

## Teste an einem Zahlungsterminal

Eine erfolgreiche kontaktlose Zahlung ist ein aussagekräftiger Praxistest, weil sie mehr als das einfache Lesen eines Tags prüft. NFC muss aktiviert sein, eine unterstützte Wallet und eine gültige Karte müssen eingerichtet sein, das Smartphone braucht eine Displaysperre, und die Standardkonfiguration für kontaktloses Bezahlen muss stimmen.

Für Google Wallet prüfst du NFC unter `Einstellungen > Verbundene Geräte > Verbindungseinstellungen > NFC > Kontaktloses Bezahlen` und wählst Google Wallet als standardmäßige Zahlungs-App. Bei Samsung liegen die entsprechenden Einstellungen unter `Verbindungen` auf der Seite für NFC und kontaktlose Zahlungen.

Funktioniert das Lesen von Tags, aber das Bezahlen nicht, ist der NFC-Chip wahrscheinlich nicht das Problem. Prüfe die Wallet-Einrichtung, die Unterstützung durch deine Bank, die Displaysperre, Google Play-Dienste, die Geräteintegrität und die standardmäßige Zahlungs-App.

## Nutze ein Diagnosemenü oder eine App

Der offiziell unterstützte Weg bei Samsung führt über den Diagnosebereich in Samsung Members. Nicht jedes Modell zeigt dort einen eigenen NFC-Test, die App kann aber viele Smartphone-Komponenten prüfen und bei einem fehlgeschlagenen Test zum Service weiterleiten.

Xiaomi-, Redmi- und POCO-Smartphones enthalten NFC häufig in der CIT-Testumgebung. Öffne die Telefon-App und gib `*#*#6484#*#*` ein. Funktioniert der erste Code nicht, probiere `*#*#64663#*#*`. Halte im NFC-Test eine Karte oder einen Tag an das Smartphone und warte auf das Ergebnis.

Fairphone-Modelle haben in der Vergangenheit einen manuellen NFC-Test über ein Servicemenü angeboten, die Codes unterscheiden sich jedoch je nach Generation. Nutze nach Möglichkeit den offiziellen Supportweg für dein konkretes Modell.

Eine einfache NFC-Prüf-App kann anzeigen, ob Android NFC-Hardware meldet und ob sie aktiviert ist. NFC Tools eignet sich besser, wenn du Tags lesen und Tag-ID, Technologietyp sowie NDEF-Datensätze ansehen möchtest.

## Finde die Position der Antenne

Die NFC-Antenne befindet sich nicht bei jedem Smartphone an derselben Stelle.

Bei vielen Samsung Galaxy S-Modellen liegt sie im oberen mittleren Bereich der Rückseite, nahe der Kameras. Bei Pixel-Smartphones befindet sie sich normalerweise ebenfalls im oberen Bereich der Rückseite. Bei Xiaomi- und OnePlus-Geräten variiert die Position stärker nach Modell.

Deshalb funktioniert ein Smartphone, wenn du den Kamerabuckel an das Lesegerät hältst, während bei einem anderen nur die Mitte der Rückseite reagiert. Zeigt die Bedienungsanleitung deines Smartphones die NFC-Antenne, ist diese Abbildung verlässlicher als ein allgemeiner Tipp.

## Häufige Gründe für NFC-Probleme

Die Hülle blockiert das Signal. Das ist langweilig, aber häufig. Teste das Smartphone ohne Hülle, bevor du Einstellungen änderst.

Du hältst es an die falsche Stelle. Bewege die Karte oder das Smartphone langsam. Schwenke es nicht herum, als würdest du einen Strichcode scannen.

NFC ist ausgeschaltet oder die falsche Wallet ist ausgewählt. Suche in den Einstellungen nach NFC und kontaktlosem Bezahlen.

Das Smartphone ist gesperrt, obwohl die Wallet eine Entsperrung verlangt. Manche Android-Versionen lesen Tags bei eingeschaltetem Display, während Zahlungen eine Authentifizierung erfordern. Behandle Zahlungen getrennt vom einfachen Lesen eines Tags.

Ein aktuelles Update hat das Verhalten verändert. Android 17 erschien zuerst für unterstützte Pixel-Geräte, während andere Android-Hersteller ihre eigenen Android-17-Versionen später ausliefern. Tritt ein NFC-Problem direkt nach einem Pixel-Update auf, suche nach Pixel-spezifischen Supporthinweisen, statt dasselbe Problem bei Samsung, Xiaomi oder OnePlus anzunehmen.

Das Smartphone wurde repariert. NFC-Antennen sind häufig Teil der Rückseite, der Spule für kabelloses Laden oder einer Flexkabelbaugruppe. Funktioniert NFC nach einem Akku- oder Rückseitentausch nicht mehr, wurde die Antenne möglicherweise nicht richtig angeschlossen.

## Wenn die Hardware wahrscheinlich defekt ist

Ist NFC aktiviert, die Hülle entfernt, reagieren mehrere Karten und Tags nicht, ändert der abgesicherte Modus nichts und erkennt auch eine Diagnose-App keine NFC-Aktivität, wird ein Hardwarefehler wahrscheinlich.

Der Chip selbst kann ausfallen, häufiger ist jedoch die Antenne beschädigt. Stürze, Wasserkontakt, Reparaturen an der Rückseite und schlecht sitzende Flexkabel kommen als Ursachen infrage.

Für die meisten Menschen lautet die praktische Frage, ob sich eine NFC-Reparatur lohnt. Nutzt du kontaktloses Bezahlen täglich, kann eine Reparatur sinnvoll sein. Ist das Smartphone älter und funktioniert sonst noch gut, kann eine Smartwatch mit kontaktlosem Bezahlen die günstigere Alternative sein.
