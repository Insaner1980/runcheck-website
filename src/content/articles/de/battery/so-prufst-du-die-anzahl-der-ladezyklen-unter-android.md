---
title: "So prüfst du die Anzahl der Ladezyklen unter Android"
description: "Die Anzahl der Ladezyklen zeigt, wie viele vollständige Lade- und Entladezyklen der Akku seit der Herstellung des Smartphones durchlaufen hat. Ein Zyklus entspricht der Nutzung von insgesamt 100 % der Akkukapazität. Das muss nicht in einem einzigen Durchgang geschehen. Wenn du einmal von 20 % auf 70 % und später von 40 % auf 90 % lädst, ergeben diese beiden Teilladungen zusammen einen vollständigen Zyklus."
listSummary: "akku, zustand und diagnose"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Health"
tags: ["akku","zustand","diagnose","android","ratgeber"]
locale: "de"
draft: false
---
Diese Zahl ist wichtig, weil Lithium-Ionen-Akkus eine begrenzte, in Ladezyklen messbare Lebensdauer haben. Die meisten modernen Smartphone-Akkus behalten je nach Zellchemie und Hersteller nach 800 bis 1.000 Zyklen noch ungefähr 80 % ihrer ursprünglichen Kapazität. Danach wird die kürzere Laufzeit im Alltag deutlich spürbar.

Android unterstützt die Meldung der Ladezyklen seit Android 14 über `BatteryManager.EXTRA_CYCLE_COUNT`. Ob die Zahl tatsächlich angezeigt oder an Apps weitergegeben wird, entscheidet jedoch der Hersteller. Einige aktuelle Smartphones zeigen sie in den Einstellungen, die meisten älteren Modelle nicht. Die folgenden Methoden sind danach sortiert, auf wie vielen Geräten sie funktionieren. Zuerst kommen Ansätze, die auch viele ältere Modelle abdecken.

## Tracking-Apps: funktionieren auf fast jedem Android-Smartphone

Für die meisten Smartphones, besonders für Modelle von vor 2024, ist eine Tracking-App der praktischste Ausgangspunkt.

AccuBattery schätzt die Anzahl der Ladezyklen anhand der über längere Zeit erfassten Ladungsmenge. Installiere die App und lasse sie mindestens eine Woche lang mehrere Ladevorgänge beobachten. Sie berechnet einen Näherungswert, indem sie die insgesamt geladenen Milliamperestunden durch die Nennkapazität des Akkus teilt. Je länger die App Daten sammelt, desto besser wird die Schätzung. Wenn eine frisch installierte AccuBattery-Version bereits eine Zykluszahl anzeigt, beruht sie auf sehr wenigen Daten. Warte mindestens zwei Wochen, bevor du den Wert ernst nimmst. Die App läuft ab Android 5.0 und damit auf praktisch jedem noch verwendeten Smartphone.

aBattery geht anders vor. Auf Geräten mit Android 14 oder neuer, deren Hersteller die erforderliche Schnittstelle für Akkuzustandsdaten vollständig umgesetzt hat, liest die App Zykluszahl und Zustandswert direkt aus dem System. Auf älteren Geräten oder bei unvollständiger Herstellerunterstützung fehlen die Werte oder sind unzuverlässig. Allein in der App lässt sich nicht immer erkennen, ob die angezeigten Daten tatsächlich von der Hardware stammen oder nur Platzhalter sind.

Die Einschränkung aller Tracking-Apps: Sie berechnen aus Ladeverläufen und lesen nicht zwangsläufig einen Hardwarezähler aus. Die Schätzungen werden mit der Zeit besser, sind aber nicht exakt. Zwei Apps können auf demselben Smartphone unterschiedliche Zykluszahlen anzeigen, weil ihre Berechnungsmethoden voneinander abweichen.

## Wählcodes: schnell geprüft, aber nicht zuverlässig verfügbar

Auf manchen Smartphones zeigen Wählcodes Akkuinformationen, die in den Einstellungen verborgen bleiben. Viele dieser Codes stammen noch aus Android 4 oder älteren Versionen. Ob sie funktionieren, hängt vom Hersteller und teilweise vom Mobilfunkanbieter ab.

`*#*#4636#*#*` funktioniert auf manchen Geräten mit nahezu unverändertem Android sowie auf verschiedenen Modellen von Pixel, Motorola, Nokia, Sony und anderen Herstellern. Wenn der Code unterstützt wird, öffnet sich ein Testmenü mit **Battery information**. Dort findest du Ladestand, Spannung, Temperatur und Zustandsstatus. Eine Zykluszahl erscheint auf den meisten Geräten nicht, ein Blick lohnt sich trotzdem, weil einige Hersteller zusätzliche Felder einblenden. Der Code existiert seit mehr als zehn Jahren und funktioniert noch auf vielen älteren Smartphones, denen neuere Akkuseiten fehlen.

`*#*#6485#*#*` zeigt auf manchen Xiaomi-, POCO- und Redmi-Smartphones Akkuwerte an, darunter möglicherweise Angaben zu Ladezyklen unter herstellerspezifischen Feldnamen wie `MB_06`. Bei einigen Geräten funktioniert das bis zurück zu MIUI 10 oder noch älteren Versionen.

`*#0228#` zeigt auf Samsung Galaxy-Smartphones Spannung, Stromstärke und Akkustatus an. Die Anzahl der Ladezyklen ist dort normalerweise nicht enthalten.

Wenn nach der Eingabe nichts passiert, unterstützt das Smartphone den Code nicht. Mobilfunkanbieter können solche Menüs deaktivieren, und Hersteller entfernen sie gelegentlich mit Updates.

## ADB: die tiefste Methode ohne Root

Android Debug Bridge bietet über viele Android-Versionen hinweg den verlässlichsten Zugriff auf verfügbare Akkudaten und funktioniert sogar mit Smartphones ab Android 4.1. Du brauchst einen Computer und ungefähr fünf Minuten für die Einrichtung. Dafür erscheinen über ADB manchmal Werte, die weder Apps noch die Einstellungen anzeigen.

Aktiviere die **Entwickleroptionen**: Öffne **Einstellungen > Über das Telefon** und tippe siebenmal auf die **Build-Nummer**. Aktiviere anschließend **USB-Debugging** in den Entwickleroptionen. Verbinde das Smartphone per USB und bestätige die Verbindungsanfrage.

Führe dann Folgendes aus:

`adb shell dumpsys battery`

Die Ausgabe enthält unter anderem CHARGE_COUNTER, Spannung, Temperatur, Status und Akkuzustand. Wenn das Gerät die Information bereitstellt, erscheint außerdem ein Feld CYCLE_COUNT mit der tatsächlichen Zahl. Einige Samsung-, Pixel- und Xiaomi-Geräte geben diesen Wert über ADB aus, obwohl er in den Einstellungen verborgen ist. Bei älteren Smartphones vor Android 14 ist das Feld seltener, aber einen Versuch wert. Manche Hersteller stellten Zyklusdaten schon lange vor Googles standardisierter Schnittstelle über eigene Systemeigenschaften bereit.

Wenn CYCLE_COUNT fehlt, hat der Hersteller den Wert wahrscheinlich nicht über diese Schnittstelle freigegeben. Keine Software kann einen echten Hardware- oder Firmwarezähler auslesen, wenn das Gerät ihn nicht zugänglich macht.

`adb shell dumpsys batteryproperties` zeigt manchmal weitere Felder, besonders ab Android 14, nachdem die Spezifikation der Hardware-Abstraktionsschicht erweitert wurde. Auf älteren Versionen kann die Ausgabe leer bleiben.

## Integrierte Einstellungen: vor allem auf neueren Smartphones

Immer mehr Smartphones zeigen die Zykluszahl direkt in den Einstellungen. Wenn dein Gerät dazugehört, ist das der einfachste Weg. Andernfalls bleiben die oben genannten Methoden.

**Google Pixel 8a und neuere Modelle** zeigen die Anzahl der Ladezyklen unter **Einstellungen > Über das Telefon > Akkuinformationen**. Dort stehen außerdem Herstellungsdatum und Datum der ersten Verwendung. Pixel 6 bis Pixel 8 Pro besitzen diese Seite nicht. Google führte sie mit dem Pixel 8a ein und setzte sie bei der Pixel 9- und Pixel 10-Serie fort. Bei älteren Pixel-Modellen brauchst du ADB oder eine Tracking-App.

**Samsung Galaxy S25 und neuere Serien** können auf unterstützten One UI-Versionen und in unterstützten Regionen einen Prozentwert für den Akkuzustand und die Zykluszahl unter **Settings > Battery > Battery info** anzeigen. Die Einführung hängt bei Samsung von Modell, Markt und Firmware ab. Gehe deshalb nicht davon aus, dass die Seite allein wegen einer neueren One UI-Version vorhanden ist. Auf vielen älteren Galaxy-Smartphones zeigt Samsung Members nur eine allgemeine Bewertung wie **Normal**, **Schwach** oder **Schlecht**, aber keine genaue Zykluszahl und keinen Prozentwert.

**Neuere OnePlus- und OPPO-Smartphones** können unter **Settings > Battery > Battery health** Informationen zum Akkuzustand anzeigen. Ob auch die Zykluszahl verfügbar ist, hängt von Modell und Region ab. OnePlus 7 und ältere Modelle stellen diese Daten nicht bereit.

Das Grundproblem bleibt die Fragmentierung. Apple vereinheitlichte die Anzeige des Akkuzustands auf unterstützten iPhones ab iOS 11.3 für das iPhone 6 und neuere Modelle. Android stellte die Zykluszahl als Schnittstelle bereit, überließ es aber den Herstellern, ob ihre Geräte den Wert tatsächlich melden und anzeigen. Jedes Jahr kommen weitere Modelle hinzu, doch ein großer Teil der heute genutzten Android-Smartphones zeigt die Daten weiterhin nicht direkt an.

## Was die Zykluszahl im Alltag bedeutet

Die Zahl selbst ist nur ein Zähler. Entscheidend ist, für wie viele Zyklen der konkrete Akku ausgelegt wurde.

Google gibt für die Akkus von Pixel 3 bis Pixel 8 Pro ungefähr 800 Zyklen bis zu einer Restkapazität von 80 % an. Pixel 8a und neuere Modelle sind für etwa 1.000 Zyklen ausgelegt. Dazu tragen eine weiterentwickelte Zellchemie und Softwarefunktionen wie die Optimierung des Akkuzustands bei, die mit zunehmendem Alter die maximale Ladespannung schrittweise senkt.

Neu auf dem EU-Markt in Verkehr gebrachte Smartphones müssen nach mindestens 800 Lade- und Entladezyklen noch mindestens 80 % Kapazität behalten. Einige neuere Oberklassemodelle sind für ungefähr 1.000 Zyklen ausgelegt. Bei älteren oder außerhalb der EU verkauften günstigen Geräten kann der Hersteller eine niedrigere Lebensdauer ansetzen.

Ein Smartphone mit 400 Zyklen hat ungefähr die Hälfte der erwarteten Zyklenzahl eines auf 800 Zyklen ausgelegten Akkus verbraucht. Bei 800 Zyklen sollte ein entsprechend ausgelegter Akku noch ungefähr 80 % Kapazität besitzen. Ein 5.000-mAh-Akku verhält sich dann wie ein 4.000-mAh-Akku. Bei 1.200 Zyklen kann die tägliche Laufzeit nur noch halb so lang wie im Neuzustand sein.

Diese Werte setzen normales Laden bei Raumtemperatur, geeignete Ladegeräte und möglichst wenig lange Zeit bei 100 % oder 0 % voraus. Schnellladen bei hohen Temperaturen beschleunigt die Alterung, ohne dass die Zykluszahl diesen zusätzlichen Verschleiß zeigt. Zwei Smartphones mit jeweils 500 Zyklen können deshalb einen sehr unterschiedlichen Akkuzustand haben. Eines wurde vielleicht über Nacht mit adaptivem Laden geladen, das andere regelmäßig per Schnellladung im heißen Auto.

## Wenn keine Zykluszahl verfügbar ist

Falls keine der genannten Methoden auf deinem Smartphone funktioniert, helfen praktische Anzeichen weiter. Dazu gehören eine deutlich kürzere Displaylaufzeit als noch vor sechs Monaten, unerwartete Abschaltungen bei 15 bis 20 %, sprunghafte Ladestandsanzeigen wie ein Fall von 30 % auf 12 % innerhalb weniger Augenblicke oder auffällige Wärme bei leichter Nutzung. All das spricht für einen Akku, der seine beste Zeit hinter sich hat.

Zusammen mit einer Akkuzustandsschätzung von AccuBattery nach einigen Wochen Beobachtung ergeben diese Verhaltensmuster auch ohne genaue Zykluszahl ein brauchbares Bild.

## Häufige Fragen

**Verringert eine Ladebegrenzung auf 80 % die Anzahl der Zyklen?**
Nein. Teilladungen werden weiterhin zusammengerechnet. Das Laden von 20 % auf 80 % entspricht 0,6 eines Zyklus. Der Vorteil der 80-%-Grenze liegt nicht in weniger gezählten Zyklen, sondern in der geringeren Belastung der Zellen bei hohem Ladestand. Dadurch verlangsamt sich die chemische Alterung unabhängig von der Zykluszahl.

**Sind 500 Zyklen viel?**
Das hängt vom Smartphone ab. Bei einem vollständigen Zyklus pro Tag sind 500 Zyklen nach ungefähr 18 Monaten erreicht. Bei 0,7 Zyklen pro Tag, etwa wenn du regelmäßig von 30 % auf 100 % lädst, dauert es mehr als zwei Jahre. Ob das viel ist, hängt von der vorgesehenen Lebensdauer des konkreten Akkus ab.

**Warum zeigt mein Samsung nach dem Update auf One UI 7 keine Zykluszahl?**
Samsung beschränkt die Anzeige auf bestimmte Modelle, Regionen und Firmwareversionen. Bei der Galaxy S25-Serie erscheint sie vergleichsweise häufig, doch selbst bei grundsätzlich unterstützten Geräten hängt die Verfügbarkeit von Markt und Softwarestand ab. Samsung hat keinen allgemeinen Zeitplan für eine breitere Einführung bestätigt.

**Kann die Zykluszahl zurückgesetzt werden?**
Ein echter Hardwarezähler wird weder durch Zurücksetzen auf Werkseinstellungen noch durch Akkukalibrierung oder eine neue ROM zurückgesetzt. Nur ein physischer Akkutausch kann den Zähler neu beginnen lassen, wenn er an den Akkupack oder den Ladecontroller gebunden ist. Bei rein appbasierten Schätzungen kann das Löschen der App oder ihrer Daten den Wert zurücksetzen. Auch deshalb solltest du eine App-Schätzung nicht mit einem Hardwarewert verwechseln.
