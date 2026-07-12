---
title: "Wie heiß ist zu heiß für ein Smartphone?"
description: "Die Temperatur eines Smartphones hängt von Umgebung, Akkutemperatur, Ladevorgang und Belastung ab. Unter 35 °C ist meist normal, über 40 °C solltest du genauer hinsehen, und 45 °C oder mehr dürfen nicht zur Routine werden."
listSummary: "Die Temperatur eines Smartphones hängt von Umgebung, Akkutemperatur, Ladevorgang und Belastung ab."
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["temperatur","warme","android","fehlerbehebung","hardware"]
locale: "de"
draft: false
---
Wie heiß ist zu heiß? Die etwas lästige Antwort lautet: Es hängt davon ab, welche Temperatur du misst.

Die Umgebungsluft hat einen Wert. Die Außenseite des Smartphones hat einen anderen. Der Akkusensor liefert noch einmal einen eigenen Wert, und dieser ist für die Alterung des Akkus besonders wichtig. Ein Smartphone kann sich in deiner Hand nur leicht warm anfühlen, obwohl Akku oder SoC bereits heiß genug sind, damit Android die Leistung reduziert.

Viele Smartphones, darunter Google-Pixel-Geräte, sind für einen optimalen Betrieb bei Umgebungstemperaturen von 0 °C bis 35 °C ausgelegt. Gemeint ist die Temperatur im Raum oder im Freien, nicht die Temperatur im Akku. Im Betrieb ist das Innere des Smartphones wärmer als die umgebende Luft.

## Praktische Temperaturbereiche

Diese Bereiche sind praktische Orientierungshilfen, keine allgemeingültige Herstellerspezifikation. Smartphones verwenden unterschiedliche Sensoren und thermische Grenzwerte. Für die alltägliche Fehlersuche sind die Bereiche trotzdem nützlich.

### Unter 20 °C

Das ist kühl. Ein unbenutztes Smartphone in einem kühlen Raum kann in diesem Bereich liegen. Ein Wärmeproblem besteht nicht, obwohl sehr kaltes Wetter den Akku vorübergehend schwächer wirken lassen kann, bis er sich wieder erwärmt.

### 20 °C bis 35 °C

Das ist ein angenehmer Bereich für die Akkutemperatur bei leichter Nutzung. Nachrichten, Surfen, Anrufe, Musik und kurze Videositzungen sollten meist irgendwo in diesem Bereich bleiben. Verbringt dein Smartphone den größten Teil des Tages hier, ist Hitze nicht das Problem.

### 35 °C bis 40 °C

Das ist warm. Der Bereich ist beim Schnellladen, bei Videoanrufen, GPS-Navigation, Gaming, Kameranutzung oder einem mobilen Hotspot häufig. Kurze Zeiträume sind in Ordnung. Mehrere Stunden täglich sind etwas anderes, denn die Alterung des Akkus beschleunigt sich mit steigender Temperatur.

### 40 °C bis 45 °C

Das ist heiß. Du wirst die Wärme wahrscheinlich durch die Rückseite oder den Rahmen spüren. Der Ladevorgang kann langsamer werden, das Display kann sich abdunkeln, die Kamera kann den Blitz deaktivieren und Spiele können Leistung verlieren.

Gerate wegen einer kurzen Spitze von 42 °C bei einer anspruchsvollen Aufgabe nicht in Panik. Achte aber darauf, wenn das Smartphone beim Laden auf dem Nachttisch oder ohne erkennbare Aktivität dauerhaft bei 42 °C bleibt.

### Über 45 °C

Das ist für den regelmäßigen Betrieb zu heiß. Das Smartphone sollte die Leistung jetzt deutlich zurücknehmen. Der Ladevorgang kann pausieren, die Leistung sinken, Funkverbindungen können eingeschränkt werden und Temperaturwarnungen können erscheinen.

Wiederholte Belastung über 45 °C setzt Lithium-Ionen-Akkus stark zu. Das Problem ist nicht eine einzelne Spitze von fünf Minuten. Problematisch wird es, wenn sie Teil deiner täglichen Routine ist.

### Über 50 °C

Das ist der Gefahrenbereich. Normale Nutzung sollte ein gesundes Smartphone in einem normal temperierten Raum nicht dorthin bringen. Direkte Sonne, ein heißes Auto, ein fehlerhaftes Ladegerät, ein defekter Akku oder intensive Nutzung während des Ladens können es dennoch verursachen.

Schalte das Smartphone nach Möglichkeit aus, bring es an einen kühleren Ort und lass es auf natürliche Weise abkühlen. Leg es nicht in einen Gefrierschrank. Kondenswasser wäre eine ziemlich dumme Art, aus einem Hitzeproblem zusätzlich einen Wasserschaden zu machen.

## So prüfst du die Temperatur

Android bietet noch immer nicht auf jedem Smartphone eine übersichtliche Seite für die Akkutemperatur. Theoretisch sollte das 2026 einfacher sein. In der Praxis hängt es weiterhin vom Hersteller ab.

Auf unterstützten Pixel-Smartphones findest du Angaben zum Akkuzustand unter **Einstellungen > Akku > Akkuzustand**. Google beschränkt diese vollständige Funktion auf Pixel 8a und neuere Modelle; auf dem Pixel Tablet ist sie nicht verfügbar. Ältere Pixel können andere Akkuinformationen anzeigen, erhalten aber nicht dieselbe Zustandsansicht. Eine Live-Anzeige der Akkutemperatur ist damit nicht auf jedem Modell garantiert.

Samsung-Nutzer sollten mit **Samsung Members > Support > Telefondiagnose** beginnen. Einige Galaxy-Modelle bieten außerdem Diagnosemenüs, die sich je nach Region und Modell unterscheiden. Bei Xiaomi, OnePlus, OPPO und anderen Marken ändern sich diese Bereiche häufig genug, dass du zuerst unter Akku, Akkuschutz oder Gerätewartung suchen solltest.

Der alte Android-Testcode `*#*#4636#*#*` öffnet auf manchen Smartphones weiterhin Akkuinformationen. Viele neuere Geräte blockieren ihn. Drittanbieter-Tools wie CPU-Z, DevCheck, AIDA64 oder runcheck können auf vielen Modellen den Sensor für die Akkutemperatur auslesen. Der Zugriff hängt jedoch davon ab, welche Daten der Hersteller bereitstellt.

runcheck ist hilfreich, wenn dich Muster statt einzelner Messwerte interessieren. Die App verfolgt die Akkutemperatur im Zeitverlauf, speichert Minimum und Maximum einer Sitzung und ordnet den aktuellen Wert in praktische Bereiche wie Cool, Normal, Warm, Hot und Critical ein.

## Warum die Umgebungstemperatur alles verändert

Ein Smartphone hat nur dann thermischen Spielraum, wenn die umgebende Luft kühler ist als das Gerät. Bei 22 °C in Innenräumen kann der Akku im Leerlauf etwa 26 °C bis 30 °C erreichen und hat noch Reserven für die Nutzung. Bei 35 °C im Freien ist dieser Spielraum fast aufgebraucht, bevor du Maps öffnest.

Deshalb kann dasselbe Smartphone im Winter problemlos funktionieren und sich im Juli defekt anfühlen. Gleiches Gerät. Andere Ausgangslage.

Autos sind das schlimmste alltägliche Beispiel. Google warnt Pixel-Nutzer davor, Geräte Temperaturen über 45 °C auszusetzen, etwa auf einem Armaturenbrett oder neben einem Heizungsauslass. Ein Smartphone in einem geparkten Auto muss weder laden noch ein Spiel ausführen, damit der Akku schneller altert. Die Hitze allein reicht aus.

## Kälte ist anders

Kälte macht Lithium-Ionen-Akkus träge. Das Smartphone kann weniger verfügbare Ladung anzeigen, langsamer wirken oder früher als erwartet abschalten. Sobald es wieder wärmer wird, verschwindet ein großer Teil dieses Verhaltens.

Das eigentliche Kälterisiko ist das Laden unter dem Gefrierpunkt. Wird eine Lithium-Ionen-Zelle unter 0 °C geladen, kann sich metallisches Lithium an der Anode ablagern. Dieser Schaden ist dauerhaft. Die meisten modernen Smartphones versuchen das zu verhindern, aber du solltest die Grenze nicht testen. War dein Gerät bei Frost im Freien, lass es vor dem Laden auf über 0 °C, besser noch in Richtung Raumtemperatur, erwärmen.

## Dauerhafte Wärme ist schlimmer als kurze Spitzen

Akkuverschleiß ist keine Klippe. Es gibt keine magische Grenze, bei der der Akku bei 39 °C perfekt und bei 40 °C ruiniert ist. Wärme beschleunigt chemische Nebenreaktionen, besonders wenn der Akku gleichzeitig fast voll geladen ist.

Ein Smartphone, das beim Schnellladen fünf Minuten lang 42 °C erreicht und danach auf 30 °C fällt, ist wahrscheinlich in Ordnung. Ein Gerät, das die ganze Nacht bei 38 °C liegt, weil es unter einer Hülle auf einer weichen Oberfläche kabellos lädt, kann still mehr Schaden nehmen. Der niedrigere Wert kann ungünstiger sein, weil er länger anhält.

Das wird häufig übersehen. Die Spitzentemperatur zählt, aber die Dauer bei dieser Temperatur zählt mehr.

## Was du bei einem hohen Wert tun solltest

Bring das Smartphone aus direkter Sonne. Trenne das Ladegerät. Nimm die Hülle ab. Beende die anspruchsvolle App. Lege das Gerät auf eine harte Oberfläche, an der Luft zirkulieren kann.

Suche nach dem Abkühlen nach der Ursache. War es Schnellladen? Kabelloses Laden? Ein Spiel? Navigation in einer Autohalterung? Ein kürzlich installiertes Android-17-Update auf einem Pixel? Eine Hintergrund-App, die nach einem Update hängen geblieben ist? Die passende Lösung hängt vom Muster ab.

Erreicht das Smartphone bei normaler Nutzung 45 °C oder mehr oder kommt es ohne erkennbaren Grund jemals in den Bereich von 50 °C, solltest du das als Anlass für eine Reparaturprüfung betrachten, nicht als Einstellungsproblem.

---
