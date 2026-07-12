---
title: "Warum sich dein Smartphone bei 20 % ausschaltet und was du dagegen tun kannst"
description: "Der Akkustand liegt bei 22 %, du öffnest die Kamera, und das Display wird schwarz. Nach dem Anschließen zeigt das Smartphone plötzlich 18 % oder 24 % an. Es wirkt, als würde dich die Prozentanzeige anlügen."
listSummary: "Der Akkustand liegt bei 22 %, du öffnest die Kamera, und das Display wird schwarz."
hub: "battery"
sourceNumber: 22
order: 12
subgroup: "Drain"
tags: ["akku","kalibrierung","fehlerbehebung","android","ratgeber"]
locale: "de"
draft: false
---
In gewisser Weise tut sie das. Die Zahl auf dem Display ist eine Schätzung, und alte Akkus lassen sich schwerer einschätzen.

## Das solltest du zuerst prüfen

Prüfe den Akkuzustand, bevor du dich mit Kalibrierungstricks beschäftigst.

Auf dem Pixel 8a und neueren Modellen findest du ihn unter **Einstellungen > Akku > Akkuzustand**. Pixel zeigt **Normal** an, solange die verbleibende Kapazität nicht unter 80 % liegt, und darunter **Reduziert**. Die Zahl der Ladezyklen findest du bei diesen Modellen unter **Einstellungen > Über das Telefon > Akkuinformationen**.

Bei Samsung öffnest du **Samsung Members > Support > Telefondiagnose > Akkustatus**. Samsung verwendet die Ergebnisse **Normal**, **Schwach** und **Schlecht**. Menünamen und Anordnung können je nach Modell sowie App- oder Softwareversion variieren, Samsung Members ist aber der offizielle Diagnoseweg.

Auf anderen Android-Smartphones solltest du zuerst im Akku-Bereich der Einstellungen nachsehen. Gibt es dort keine eigene Seite für den Akkuzustand, kannst du eine Diagnose-App wie AccuBattery verwenden und über mehrere Ladevorgänge Daten sammeln lassen. Eine einzelne Messung nach nur einem Ladevorgang reicht nicht.

Ein Wert unter 80 % zusammen mit Abschaltungen bei 20 % deutet klar auf die Akkuzelle.

## Warum die Anzeige nicht stimmt

Android schätzt den Akkustand anhand von Spannung, Strom, Temperatur und einem Modell des erwarteten Akkuverhaltens. Einige Smartphones erfassen zusätzlich, wie viel Strom über die Zeit hinein- und herausfließt.

Dieses Modell funktioniert am besten mit einer gesunden Zelle. Mit zunehmendem Alter sinkt die Kapazität, während der Innenwiderstand steigt. Dadurch verändert sich die Spannungskurve. Das Smartphone kann 20 % noch als komfortable Reserve interpretieren, obwohl deutlich weniger nutzbare Energie vorhanden ist.

Am unteren Ende des Ladebereichs werden Fehler zuerst sichtbar. In der Mitte verläuft die Spannungskurve relativ flach. Nahe null wird sie steil. Schon ein kleiner Spannungseinbruch unter Last kann dann aussehen, als sei der Akku plötzlich abgestürzt.

Deshalb können Kamera, GPS, Spiele, Videoanrufe und 5G eine Abschaltung auslösen. Sie erzeugen kurze Leistungsspitzen. Ein gesunder Akku fängt sie ab. Bei einem verschlissenen Akku fällt die Spannung unter die Mindestbetriebsspannung des Smartphones, und Android schaltet das Gerät zum Schutz aus.

## Warum alte Akkus zu früh abschalten

Ein gealterter Akku hat gleichzeitig zwei Probleme.

Erstens speichert er weniger Energie. Ein 5.000-mAh-Akku mit 80 % Akkuzustand hält ungefähr 4.000 mAh. Bei 70 % sind es etwa 3.500 mAh. Die Prozentanzeige kann noch normal wirken, doch hinter jedem Prozentpunkt steckt weniger tatsächliche Kapazität.

Zweitens ist der Innenwiderstand höher. Dadurch fällt die Spannung stärker ab, sobald das Smartphone Strom verlangt. Deshalb kann ein altes Gerät bei 25 % ruhig auf dem Startbildschirm liegen und sich in dem Moment ausschalten, in dem du die Kamera öffnest.

Kälte verschärft das Problem. Die chemischen Vorgänge in einem Lithium-Ionen-Akku laufen bei niedrigen Temperaturen langsamer, sodass die Zelle Strom schlechter abgeben kann. Ein Smartphone, das drinnen bei 20 % weiterläuft, kann sich draußen beim gleichen Akkustand ausschalten.

Hitze wirkt anders. Sie verursacht die sofortige Abschaltung bei 20 % normalerweise nicht allein, beschleunigt aber den Verschleiß, der zu diesem Problem führt.

## Kalibrierung: Was sie kann und was nicht

Die Akkukalibrierung wird oft falsch verstanden. Sie stellt keine verlorene Kapazität wieder her. Sie betrifft nur die Schätzung des verbleibenden Ladestands.

Bei modernen Pixel-Geräten ist eine absichtliche vollständige Entladung zur Kalibrierung nicht nötig. Google weist ausdrücklich darauf hin, dass der Akku nicht erst komplett geladen und danach entladen werden muss, damit das Smartphone seine Kapazität einschätzen kann. Wenn die Abschaltungen nach einem Softwareupdate, einem Akkuwechsel oder einer längeren Phase mit auffälligem Ladeverhalten begonnen haben, starte das Gerät neu, lade es ohne Unterbrechung bis 100 % und verwende es danach normal. Das gilt auch, wenn der Zeitpunkt mit einem großen Update wie der aktuellen Android-17-Veröffentlichung für unterstützte Pixel-Geräte zusammenfällt: Der zeitliche Zusammenhang allein beweist keinen Akkudefekt. Erzwinge keine Entladung bis null.

Mache vollständige Entladungen nicht zur Gewohnheit. Wiederholtes Entladen bis null belastet Lithium-Ionen-Akkus stärker als flachere Ladezyklen.

Wenn sich die Anzeige nach einigen normalen Ladezyklen stabilisiert, lag zumindest ein Teil des Problems an der Schätzung. Schaltet sich das Smartphone weiterhin bei 20 % aus oder steigt die Abschaltgrenze sogar auf 30 %, ist die Zelle wahrscheinlich zu stark verschlissen, um das Problem mit Software zu kaschieren.

## Wenn die Software die Ursache ist

Manchmal ist der Hardwareverschleiß nicht die ganze Erklärung. Eine fehlerhafte App kann Wake Locks halten, die CPU aktiv lassen oder ungünstig Netzwerk- und Standortzugriffe auslösen. Diese zusätzliche Last kann einen schwachen Akku über die Grenze drücken.

Öffne **Einstellungen > Akku > Akkunutzung**. Zeigt eine App auffällig hohe Hintergrundnutzung, schränke sie ein oder deinstalliere sie testweise für einen Tag.

Der abgesicherte Modus ist hilfreich, wenn das Smartphone noch relativ neu ist und der Akkuzustand normal aussieht. Er deaktiviert heruntergeladene Apps vorübergehend. Hören die Abschaltungen dort auf, deutet das auf eine installierte App.

Ein Zurücksetzen auf Werkseinstellungen kann eine fehlerhafte Akkuschätzung oder Softwareschleifen beheben, ist aber die harte Variante. Sichere zuerst deine Daten. Teste das Smartphone nach dem Zurücksetzen, bevor du alle Apps und Einstellungen aus einem Backup wiederherstellst. Wenn du sofort alles zurückspielst, kann derselbe Fehler zurückkommen.

## Häufige Fragen

Warum startet das Smartphone nach dem Anschließen mit einem höheren Akkustand? Unter Last fällt die Spannung eines schwachen Akkus stark ab. Sobald das Ladegerät Strom liefert, erholt sich die Akkuspannung. Das Smartphone hat nicht in einer Sekunde viel Energie geladen. Die Spannungsmessung hat sich stabilisiert.

Solltest du das Smartphone angeschlossen lassen, damit es nicht bei 20 % ausgeht? In einem einmaligen Notfall ist das in Ordnung. Als tägliche Lösung nicht. Wenn du dem Gerät unter 25 % nicht mehr vertrauen kannst, braucht der Akku Aufmerksamkeit.

Kann eine Akku-App das Problem beheben? Keine App kann chemischen Verschleiß reparieren. Eine gute App kann den Akkuzustand schätzen und Muster sichtbar machen. Die Zelle baut sie nicht wieder auf.

Wenn sich ein Smartphone trotz angeblich ausreichender Ladung ausschaltet, liegt es meistens an einer alten Zelle, einer falschen Ladezustandsschätzung oder an beidem. Prüfe zuerst den Akkuzustand, vermeide unnötige Kalibrierungsrituale und ersetze den Akku, wenn die Hinweise klar darauf zeigen.
