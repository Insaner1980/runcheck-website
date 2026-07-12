---
title: "So löschst du die Cache-Partition unter Android"
description: "Was das Löschen der Android-Cache-Partition bewirkt, wie du es auf Samsung-Smartphones versuchst und was du tun kannst, wenn die Option fehlt."
listSummary: "leistung, geschwindigkeit und android"
hub: "performance"
sourceNumber: 71
order: 8
tags: ["leistung","geschwindigkeit","android","optimierung","fehlerbehebung"]
locale: "de"
draft: false
---
Du blickst auf Android Recovery, steuerst mit den Lautstärketasten wie im Jahr 2012 und suchst nach **Wipe cache partition**. Auf manchen Smartphones ist die Option vorhanden. Auf anderen ist sie verschwunden. Bei einigen wurde sie nie angeboten.

Deshalb ist das Thema komplizierter, als viele Anleitungen vermuten lassen. Das Löschen der Cache-Partition kann bei bestimmten Samsung-Smartphones und älteren Android-Geräten noch sinnvoll sein. Eine allgemeine Android-Funktion ist es heute aber nicht mehr.

## Was beim Löschen der Cache-Partition passiert

Dabei werden temporäre System-Cache-Dateien entfernt. Fotos, Nachrichten, Apps, Konten, Downloads und Einstellungen bleiben erhalten. Android erstellt den Cache nach dem nächsten Start neu.

Du löschst also temporäre Arbeitsdateien des Systems, nicht den Inhalt deines Smartphones.

Das kann helfen, wenn sich das gesamte System nach einem Update merkwürdig verhält: ruckelnde Übergänge, Abstürze mehrerer Apps, plötzlich höherer Akkuverbrauch oder Einstellungen, die festzuhängen scheinen. Wenn nur eine App Probleme macht, solltest du nicht hier anfangen. Lösche zuerst den Cache dieser App über **Einstellungen > Apps > [App-Name] > Speicher > Cache leeren**.

Das Löschen der Cache-Partition ist für umfassendere Symptome gedacht.

## Warum die Option auf vielen Smartphones fehlt

Moderne Android-Updatesysteme verwenden die alte Cache-Partition nicht mehr so wie frühere Geräte. Mit A/B-Updates kann das Smartphone ein OTA-Update in einem inaktiven Slot installieren, während das laufende System weiterarbeitet. Auch die AOSP-Dokumentation erklärt, dass A/B-Geräte keine Cache-Partition mehr benötigen, um OTA-Updatepakete zu speichern.

Das bedeutet nicht, dass sämtliche Cache-Dateien verschwunden sind. Die frühere Recovery-Option **Wipe cache partition** spielt nur keine so zentrale Rolle mehr.

Pixel-Smartphones sind das deutlichste Beispiel. Du kannst ein aktuelles Pixel weiterhin in den Recovery Mode starten, solltest dort aber keine klassische Option **Wipe cache partition** erwarten. Recovery dient vor allem dem Zurücksetzen auf Werkseinstellungen, dem manuellen Einspielen von Updates und tiefergehenden Reparaturschritten.

Samsung hat die Option länger beibehalten als viele andere Hersteller. Deshalb geht es bei den meisten Suchanfragen zu diesem Thema eigentlich um Galaxy-Smartphones.

## Die Samsung-Situation im Jahr 2026

Samsungs britische Support-Seite beschreibt weiterhin das **Löschen der Cache-Partition** über den Recovery Mode: Smartphone ausschalten, Recovery mit der passenden Tastenkombination öffnen, **Wipe cache partition** auswählen, bestätigen und anschließend neu starten.

Gleichzeitig scheint Samsungs Sicherheitsupdate vom Februar 2026 mehrere Recovery-Werkzeuge auf einigen Galaxy-Modellen entfernt zu haben, darunter **Wipe cache partition**. Berichte von Android Authority und GalaxyClub nannten zunächst Modelle der Galaxy-S25-Reihe und neuere Foldables wie das Galaxy Z Fold 7. Auf betroffenen Softwareständen zeigt das verkürzte Menü demnach nur noch **Reboot system now**, **Wipe data/factory reset** und **Power off**.

Samsung hat keine eindeutige weltweite Erklärung veröffentlicht, die alle Modelle und Regionen abdeckt. Die sichere Empfehlung lautet deshalb: Betrachte **Wipe cache partition** auf Galaxy-Smartphones im Jahr 2026 als abhängig von Modell und Firmware. Wenn die Option in deinem Recovery-Menü vorhanden ist, kannst du sie verwenden. Fehlt sie, ist dein Smartphone nicht automatisch defekt.

## Bevor du den Recovery Mode verwendest

Probiere zuerst die einfachen Schritte.

Starte das Smartphone einmal neu. Aktualisiere deine Apps. Prüfe den freien Speicherplatz. Nutze auf einem Galaxy **Gerätewartung** oder öffne **Einstellungen > Akku und Gerätewartung > Jetzt optimieren**, sofern dieser Menüpunkt auf deinem Modell vorhanden ist. Lösche außerdem den Cache der einzelnen App, die Probleme verursacht.

Wenn sich das gesamte Smartphone nach einem größeren Update ungewöhnlich verhält und du bereits ein oder zwei Tage gewartet hast, ist der Recovery Mode ein vertretbarer nächster Schritt.

Eine Sicherung ist trotzdem sinnvoll. Das Löschen der Cache-Partition sollte keine persönlichen Daten entfernen, im Recovery Mode befindet sich aber auch **Wipe data/factory reset**. Diese Option löscht sie sehr wohl. Arbeite dich nicht müde und unkonzentriert durch dieses Menü.

## So öffnest du den Recovery Mode auf einem Samsung Galaxy

Die genaue Tastenkombination hängt vom Modell ab.

Bei vielen neueren Galaxy-Smartphones ohne physische Home-Taste schaltest du das Gerät zuerst aus. Verbinde es mit einem Computer oder einem anderen USB-C-Gerät, wenn Recovery ohne Kabel nicht erscheint. Halte dann **Volume Up + Side/Power** gedrückt, bis das Samsung-Logo angezeigt wird. Lass die Tasten los und warte auf das Recovery-Menü.

Bei älteren Galaxy-Modellen mit separater Bixby-Taste kann die Kombination **Volume Up + Bixby + Power** lauten.

Bei älteren Geräten mit physischer Home-Taste verwendest du **Volume Up + Home + Power**.

Im Recovery Mode bewegst du dich mit den Lautstärketasten durch das Menü und bestätigst mit der Ein/Aus-Taste.

## So löschst du die Cache-Partition, wenn die Option vorhanden ist

Wähle **Wipe cache partition**.

Bestätige mit **Yes**.

Warte, bis der Vorgang abgeschlossen ist. Meist dauert das weniger als eine Minute.

Wähle **Reboot system now**.

Der erste Start kann danach länger dauern, weil Android temporäre Dateien neu erstellt. Das ist normal. Gib dem Smartphone etwas Zeit, bevor du seine Leistung beurteilst.

## Was du tun kannst, wenn die Option fehlt

Setze das Smartphone nicht auf Werkseinstellungen zurück, nur weil die Cache-Option verschwunden ist. Ein Werksreset ist ein wesentlich größerer Eingriff.

Verwende stattdessen diese Alternativen:

- Lösche den Cache der betroffenen App über **Einstellungen > Apps > [App-Name] > Speicher > Cache leeren**.
- Öffne auf Samsung-Geräten **Einstellungen > Akku und Gerätewartung > Jetzt optimieren**, sofern der Eintrag auf deinem Softwarestand vorhanden ist.
- Schaffe so viel Platz, dass mindestens 10 % des internen Speichers frei sind. 15 % sind ein besseres Ziel.
- Starte den Sicheren Modus, um zu prüfen, ob eine Drittanbieter-App die Verzögerungen oder Abstürze verursacht.
- Suche nach einem neueren Systemupdate, wenn das Problem direkt nach einer größeren Android-Version begonnen hat.

Wenn du ein Pixel, OnePlus, Xiaomi, Motorola oder eine andere Marke verwendest und Recovery keine Option **Wipe cache partition** zeigt, verwaltet der Hersteller diesen Bereich wahrscheinlich anders. Suche nicht nach versteckten ADB-Tricks, wenn du nicht genau weißt, was sie verändern.

## Hilft das Löschen der Cache-Partition wirklich?

Manchmal. Das ist die ehrliche Antwort.

Es kann veraltete oder beschädigte temporäre Systemdaten nach einem Update beseitigen. Es kann aber auch überhaupt nichts verändern. Wenn der eigentliche Grund zu wenig freier Speicher, eine aufgeblähte App, ein schwacher Akku, thermische Drosselung oder alternder langsamer Speicher ist, bringt das Löschen der Cache-Partition wenig.

Auf Galaxy-Smartphones, die diese Option noch anbieten, halte ich sie weiterhin für einen vertretbaren Schritt mit geringem Risiko. Sie ist schnell ausgeführt, löscht keine persönlichen Daten und kann merkwürdiges Verhalten nach Updates beheben. Sie ist aber kein Leistungsschalter. Es lohnt sich nicht, ihr hinterherzujagen, wenn dein Smartphone sie nicht mehr anbietet.

## Was dadurch nicht behoben wird

Die Android-Version wird dadurch nicht zurückgesetzt.

Eine fehlerhafte App wird nicht entfernt.

Defekter Flash-Speicher wird nicht repariert.

Ein Smartphone mit 4 GB RAM verhält sich danach nicht wie ein neues Spitzenmodell.

Wenn das Gerät nach dem Löschen der Cache-Partition weiterhin langsam ist, prüfe die eigentlichen Ursachen: Speicherbelegung, Akkutemperatur, App-Verhalten, Sicherer Modus und Update-Status. Dort liegt die Antwort meistens.
