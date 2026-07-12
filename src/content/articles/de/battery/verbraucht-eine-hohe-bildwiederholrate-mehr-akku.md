---
title: "Verbraucht eine hohe Bildwiederholrate mehr Akku?"
description: "Ein 120-Hz-Display kann mehr Akku verbrauchen als 60 Hz, besonders bei Panels mit fester Bildwiederholrate. Smartphones mit adaptivem Display senken den Verbrauch, indem sie die Rate bei statischen Inhalten reduzieren."
listSummary: "Ein 120-Hz-Display kann mehr Akku verbrauchen als 60 Hz, besonders bei Panels mit fester Bildwiederholrate."
hub: "battery"
sourceNumber: 30
order: 20
subgroup: "Drain"
tags: ["akku","mythen","android","testen","fakten"]
locale: "de"
draft: false
---
Der übliche Rat lautet, 120 Hz auszuschalten, wenn dir die Akkulaufzeit wichtig ist. Das stimmt nur zur Hälfte.

Eine hohe Bildwiederholrate kann mehr Akku verbrauchen als 60 Hz, aber nicht jedes 120-Hz-Smartphone zahlt denselben Preis. Bei einem älteren oder günstigeren Gerät mit fest eingestellter hoher Bildwiederholrate kann 120 Hz die Laufzeit deutlich verkürzen. Bei einem neueren Smartphone mit variabler Bildwiederholrate ist der Mehrverbrauch oft viel kleiner, weil das Display nicht den ganzen Tag mit 120 Hz arbeitet. Beim Scrollen und bei Animationen steigt die Rate, bei einem statischen Bild sinkt sie wieder.

Dieser Unterschied ist wichtiger als die Zahl im Datenblatt.

## Was 120 Hz tatsächlich verändert

Ein 60-Hz-Display aktualisiert das Bild 60-mal pro Sekunde. Ein 120-Hz-Display tut das 120-mal pro Sekunde. Doppelt so viele Aktualisierungen bedeuten mehr Arbeit für die Display-Pipeline. Wenn eine App tatsächlich mit hohen Bildraten rendert, muss auch die GPU mehr leisten.

Den Vorteil merkst du beim Scrollen, beim Wechseln zwischen Bildschirmen, beim Öffnen von Menüs und in unterstützten Spielen. Das Smartphone fühlt sich direkter an, weil das Display häufiger aktualisiert wird und Bewegungen weniger ruckelig wirken.

Der Nachteil ist einfach: Display und Display-Controller benötigen mehr Energie. Bei fest eingestellten 120 Hz zeigen Akkutests älterer Geräte mit hoher Bildwiederholrate häufig etwa 10 % weniger Gesamtlaufzeit, manchmal mehr. Helligkeit, Paneltyp und Nutzung beeinflussen das Ergebnis. Bei bildschirmlastiger Verwendung fällt dieser Unterschied auf.

## Die variable Bildwiederholrate ist entscheidend

Moderne Android-Smartphones verwenden 120 Hz nicht alle auf dieselbe Weise.

Einige Panels arbeiten mit festen Stufen. Du wählst 60 oder 120 Hz, und das Smartphone bleibt bei eingeschaltetem Display nahe an diesem Wert. Diese Geräte haben den größten Akkunachteil, weil der Bildschirm selbst beim Lesen einer statischen Seite schnell weiter aktualisiert wird.

Bessere Panels passen die Bildwiederholrate automatisch an. Viele Flaggschiffe verwenden LTPO OLED. Bei unbewegten Inhalten kann die Rate weit unter 60 Hz sinken und bei einer Berührung wieder auf 120 Hz steigen. Einige Panels erreichen 1 Hz. Andere arbeiten mit einem engeren Bereich oder festen Stufen wie 10, 24, 30, 60 und 120 Hz. Das genaue Verhalten hängt vom Display, der Android-Version, der App und der Abstimmung des Herstellers ab.

Dieser letzte Punkt ist unübersichtlich. Ein Smartphone kann adaptive 120 Hz bewerben und sich trotzdem in Chrome, YouTube, Spielen, dem Launcher und dem Always On Display unterschiedlich verhalten. Du musst das nicht ständig kontrollieren. Es erklärt aber, warum ein 120-Hz-Gerät länger durchhalten kann als ein anderes.

## Bei festen 120 Hz zeigt sich der Akkuverlust am deutlichsten

Wenn dein Smartphone kein gutes adaptives Panel hat, kostet 120 Hz mehr.

Statische Inhalte sind der offensichtliche Verschwendungsfall. Einen Artikel lesen, Fotos ansehen, eine Karte prüfen oder ein Rezept geöffnet lassen braucht keine 120 Bildaktualisierungen pro Sekunde. Ein festes Panel aktualisiert trotzdem weiter. Du erhältst kaum einen sichtbaren Vorteil und bezahlst die ganze Zeit mit Akkuladung.

Deshalb können Mittelklassegeräte mit festen 120 Hz überraschend energiehungrig wirken, besonders im Vergleich mit Flaggschiffen. Die Darstellung ist flüssig, das Panel kann die Rate aber nicht ebenso konsequent absenken.

Wenn ein Smartphone bei 60 Hz normalerweise 7 Stunden Displayzeit erreicht, kann erzwungenes 120 Hz über den ganzen Tag einen spürbaren Teil davon kosten. Eine genaue Stundenzahl würde ich nicht versprechen, weil die Geräte zu unterschiedlich sind. Bei einem Panel mit fester Bildwiederholrate ist eine Stunde oder mehr Verlust jedoch durchaus glaubwürdig.

## Spiele verändern die Rechnung

Gaming ist der ungünstigste Fall für den Akkuverbrauch bei 120 Hz.

Läuft ein Spiel mit 120 fps, aktualisiert sich das Display schnell und die GPU berechnet mehr Bilder. Das ist eine doppelte Belastung. Hohe Helligkeit, mobile Daten, Bluetooth-Audio und ein warmer Raum kommen möglicherweise noch dazu. Dann sieht die Akkukurve schnell unschön aus.

Manche Spiele sind selbst auf einem 120-Hz-Smartphone auf 30 oder 60 fps begrenzt. In diesen Fällen spielt die Einstellung der Bildwiederholrate eine kleinere Rolle. Das Smartphone kann das Spiel zwar auf einem schnelleren Panel anzeigen, die GPU erzeugt aber nicht 120 unterschiedliche Bilder pro Sekunde.

Für lange Spielesitzungen ohne Ladegerät bleibt 60 Hz die langweilige, aber vernünftige Wahl.

## So änderst du die Einstellung unter Android

Auf Pixel-Geräten findest du die Funktion normalerweise unter **Einstellungen > Display & Touchbedienung > Smooth Display**. Google nennt das Ausschalten von Smooth Display weiterhin als Akkuspartipp für Pixel 4 und neuere Modelle, einschließlich Fold-Geräten.

Auf Samsung Galaxy-Geräten gehst du zu **Einstellungen > Anzeige > Bildwiederholrate**. **Standard** bedeutet 60 Hz. **Adaptiv** erlaubt auf unterstützten Modellen und in unterstützten Apps bis zu 120 Hz. Die genaue Bezeichnung kann sich je nach One UI-Version und Region leicht unterscheiden.

Bei OnePlus, Xiaomi, Motorola, Nothing und anderen Android-Smartphones findest du die Option meist unter **Einstellungen > Anzeige**. Bezeichnungen sind zum Beispiel **Bildwiederholrate**, **Aktualisierungsrate**, **Refresh rate** oder **Smooth Display**.

Wenn eine adaptive Option vorhanden ist, nutze sie im Alltag. Gibt es nur feste 60 und 120 Hz, wähle 120 Hz, wenn dir flüssige Bewegungen wichtig sind, und 60 Hz, wenn die Akkulaufzeit wichtiger ist.

## Solltest du 120 Hz ausschalten?

Schalte es aus, wenn du unterwegs bist, wenig Akku hast, lange spielst oder stundenlang statische Inhalte liest. Mit 60 Hz beschädigst du nichts. Die Darstellung wirkt nur weniger flüssig, sobald sich deine Augen an 120 Hz gewöhnt haben.

Bei einem aktuellen Flaggschiff mit adaptiver Bildwiederholrate würde ich 120 Hz im Alltag aktiviert lassen. Das Smartphone senkt die Rate bereits, wenn es kann, und flüssigeres Scrollen ist eine der wenigen modernen Verbesserungen, die du bei jeder Nutzung spürst.

Bei einem älteren Gerät mit hoher Bildwiederholrate oder einem günstigen Modell mit festen 120 Hz solltest du pragmatischer sein. Flüssige Darstellung ist angenehm. Ein Akku, der um 19 Uhr noch durchhält, ist angenehmer.
