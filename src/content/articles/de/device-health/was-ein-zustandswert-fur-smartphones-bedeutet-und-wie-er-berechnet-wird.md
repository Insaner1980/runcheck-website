---
title: "Was ein Zustandswert für Smartphones bedeutet und wie er berechnet wird"
description: "Öffnest du auf einem Android-Smartphone die Einstellungen, findest du Akkuinformationen an einer Stelle, Speicherdaten an einer anderen und Netzwerkdetails wieder woanders. Ein Zustandswert fasst diese Bereiche, Akku, Temperatur, Netzwerk und Speicher, in einer einzigen Zahl zusammen, meist von 0 bis 100. Eine Anzeige statt vier."
listSummary: "temperatur, warme und android"
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["temperatur","warme","android","fehlerbehebung","hardware"]
locale: "de"
draft: false
---
Android selbst definiert keinen einheitlichen Zustandswert für Smartphones. Es gibt keine herstellerübergreifende Android-Seite, auf der "82/100" bei jeder Marke dasselbe bedeutet. Samsungs Gerätewartung zeigt einen eigenen Optimierungswert bis 100, und **Gerätezustand & Support** auf Pixel-Smartphones zeigt einen allgemeinen Gerätestatus sowie den Status einzelner Funktionen. Das sind jedoch Werkzeuge der Hersteller, kein gemeinsamer Android-Standard. Diagnose-Apps verwenden eigene Berechnungsmodelle. Welche Messwerte darin stecken und wo ihre Grenzen liegen, ist wichtiger als die einzelne Zahl.

## Was ein Zustandswert misst

Ein sinnvoller Zustandswert verwendet normalerweise vier Kategorien und gewichtet sie danach, wie stark sie den Alltag beeinflussen. Einheitliche Vorgaben für diese Gewichtung gibt es nicht.

**Der Akku** sollte das höchste Gewicht haben. Im Berechnungsmodell von runcheck macht er 40 % des Gesamtwerts aus. Das ist nachvollziehbar, denn ein verschlissener Akku ist bei einem älteren Smartphone meist das auffälligste Problem. Die Akkukomponente berücksichtigt den aktuellen Ladestand, die geschätzte Restkapazität im Verhältnis zur Nennkapazität, die Temperatur beim Laden und Entladen, die Spannungsstabilität und den Status aus Androids BatteryManager API. Diese API liefert Werte wie "Good", "Overheat", "Dead" oder "Cold". Android 14 hat detailliertere Schnittstellen für den Akkuzustand eingeführt. Ladezyklen oder ein Akkuzustand in Prozent stehen Apps aber nur zur Verfügung, wenn Hersteller und Akku-HAL diese Daten liefern. Ein Akku mit 92 % Restkapazität bei 31 °C erhält einen hohen Teilwert. 74 % bei 39 °C ziehen ihn deutlich nach unten.

**Der Temperaturzustand** zählt im runcheck-Modell 25 %. Android meldet den thermischen Status unter Android 10 und neuer über `PowerManager.getCurrentThermalStatus()` und den thermischen Spielraum unter Android 11 und neuer über `getThermalHeadroom()`. Diagnose-Apps erkennen damit, ob das Gerät kühl oder warm ist, bereits drosselt oder sich einer Schutzabschaltung nähert. Hohe Temperaturen senken durch thermische Drosselung die CPU-Leistung und beschleunigen langfristig den Akkuverschleiß. Ein Smartphone mit thermischem Status "Normal" und 28 °C Akkutemperatur schneidet gut ab. Eine moderate Drosselung bei mehr als 40 °C nicht.

**Die Netzwerkverbindung** trägt im runcheck-Modell 25 % bei. Dazu gehören die Signalstärke in dBm für Mobilfunk und WLAN, die Verbindungsgeschwindigkeit, die Latenz und die Stabilität. Im WLAN sind -50 bis -70 dBm ausgezeichnet, -70 bis -80 dBm noch brauchbar, unter -80 dBm sinkt die Leistung. Beim Mobilfunk gilt ein Wert über -85 dBm als stark, unter -110 dBm als schwach. Auch die Latenz zählt. Der praktische Unterschied zwischen 15 ms und 200 ms ist größer als der zwischen vielen benachbarten Signalwerten.

**Der Speicher** ist im runcheck-Modell mit 10 % die kleinste Komponente. Unter 50 % Belegung gibt es keine Abwertung. Zwischen 50 und 80 % ist der Einfluss gering. Oberhalb von 85 % fällt der Wert stärker, weil Android bei knappem NAND-Speicher langsamer werden kann. Dem Speichercontroller bleibt dann weniger Platz für Speicherbereinigung und Verschleißausgleich.

## Warum die Gewichtung wichtig ist

Der Akkuzustand beeinflusst das Smartphone jeden Tag. Speicher wird dagegen erst oberhalb bestimmter Schwellen zum Problem. Die Netzwerkqualität schwankt ständig durch Umstände, die das Gerät nicht kontrollieren kann. Der Temperaturzustand ist vorübergehend: Ein gerade heißes Smartphone kann zehn Minuten später wieder völlig normal sein.

Die Gewichtung ist zwischen Apps nicht standardisiert. Manche geben allen vier Kategorien denselben Anteil. Das ist ehrlich gesagt keine gute Lösung, weil damit ein voller Speicher genauso schwer wiegt wie ein versagender Akku. runcheck gewichtet den Akku mit 40 %, Temperatur und Netzwerk mit jeweils 25 % und den Speicher mit 10 %. Das passt besser dazu, wie Menschen Probleme tatsächlich wahrnehmen. Ein Gerät mit gutem Akku und vollem Speicher ist weniger beeinträchtigt als eines mit schlechtem Akku und viel freiem Speicher.

## Das Problem mit der Zuverlässigkeit

Nicht jeder Messwert, der in den Zustandswert einfließt, ist gleich vertrauenswürdig. Genau hier wird das gesamte Konzept unscharf.

Ein Akkuzustand in Prozent ist auf Geräten brauchbar, die die entsprechenden Hardwaredaten korrekt bereitstellen. Dazu gehören Pixel 8a und neuere Modelle sowie Samsung Galaxy S25 und neuere Geräte in unterstützten Regionen und Softwareversionen. Auf Smartphones, die diese Werte nicht liefern, schätzen Apps die Restkapazität anhand des Ladeverhaltens über längere Zeit. Solche Schätzungen werden mit zunehmender Nutzung besser, beginnen aber ungenau. Ein Zustandswert übernimmt diese Unsicherheit.

Temperaturmessungen hängen davon ab, welche Sensoren das Smartphone freigibt. `getCurrentThermalStatus()` liefert einen allgemeinen Status von Normal bis Shutdown, bleibt aber grob. `getThermalHeadroom()` gibt als Fließkommazahl an, wie nahe das Gerät einer Drosselung ist, doch die Auslegung unterscheidet sich je nach SoC. Die Akkutemperatur steht auf Android-Geräten vergleichsweise zuverlässig zur Verfügung. Sie misst aber den Akku, nicht die CPU oder die Gehäuseoberfläche. Diese Werte können 5-10 °C auseinanderliegen.

Die Signalstärke in dBm ist verlässlich, wenn Android sie meldet. Die Signalbalken sind dagegen nicht standardisiert. Drei Balken auf einem Samsung und drei Balken auf einem Pixel können am selben Ort für unterschiedliche dBm-Werte stehen. Die Balken sind eine vereinfachte Darstellung. Entscheidend ist die dBm-Angabe.

Die Speicherbelegung ist die einzige Messgröße, die auf allen Geräten einheitlich zuverlässig ist. Die Berechnung ist einfach und braucht keine komplizierte Hardware-Abstraktionsschicht.

Ein ehrlicher Zustandswert zeigt diese Grenzen, statt sie zu verstecken. Stammt der Akkuzustand aus einer Schätzung und nicht direkt aus der Hardware, sollte diese Unsicherheit sichtbar sein. Ein selbstbewusst angezeigtes "87/100" ist irreführend, wenn eine wichtige Eingabe einen möglichen Fehler von 5 % hat. Viele Apps machen es trotzdem genau so.

## Zustandswerte auf älteren Smartphones

Die Qualität des Ergebnisses hängt davon ab, wie viele Daten das Smartphone bereitstellt. Ältere Geräte liefern weniger.

Smartphones mit Android 10 (API 29) oder neuer können einen thermischen Status melden. Dadurch funktioniert die Temperaturkomponente auf Geräten ab etwa 2019 recht gut, sofern der Hersteller brauchbare Daten bereitstellt. Android 11 (API 30) ergänzt den thermischen Spielraum und macht die Messung feiner. Unter Android 10 beschränken sich Temperaturinformationen häufig auf die Akkutemperatur.

Beim Akkuzustand ist die Lücke am größten. Android 14 hat ausführlichere Schnittstellen hinzugefügt, doch die meisten vor 2024 veröffentlichten Smartphones melden weder einen vollständigen Prozentwert noch Ladezyklen. Auf diesen Geräten verwendet die Akkukomponente indirekte Hinweise: die grobe Einteilung in Good, Overheat oder Dead, Temperatur, Spannung und über längere Zeit beobachtete Ladevorgänge. Auch ein Smartphone mit Android 10 kann daraus einen sinnvollen Akkuwert bilden, aber weniger präzise als ein unterstütztes Pixel 8a oder neuer, das Zustand und Ladezyklen direkt meldet.

Speicher- und Netzwerkdaten funktionieren auf Geräten ab Android 8 weitgehend einheitlich.

In der Praxis bedeutet das: Ein Zustandswert unter Android 9 bis 13 ist nützlich, stützt sich aber stärker auf Schätzungen. Er erkennt eindeutige Probleme wie einen stark verschlissenen Akku, kritisch wenig freien Speicher oder anhaltende Überhitzung. Die Fehlerspanne ist nur größer. Das ist immer noch hilfreich, eben weniger präzise.

## So deutest du die Zahl

**75-100:** Das Smartphone ist in gutem Zustand. Normaler Akkuverschleiß, keine auffälligen Temperaturprobleme, ausreichend freier Speicher und funktionierende Verbindungen.

**50-74:** Etwas braucht Aufmerksamkeit. Häufig ist der Akku so weit gealtert, dass der Tag merklich kürzer wird, oder der Speicher ist voll genug, um die Leistung zu beeinträchtigen. Gezielte Wartung kann helfen.

**25-49:** Es gibt ein echtes Problem. Der Akku ist deutlich verschlissen, das Gerät drosselt anhaltend wegen Hitze oder der Speicher ist kritisch voll. Reparatur oder Ersatz werden realistisch.

**Unter 25:** Etwas fällt aktiv aus oder befindet sich in einem kritischen Zustand.

Diese Schwellen sind nicht offiziell. Keine Behörde definiert, wann ein Smartphone "gesund" ist. Es handelt sich um Konventionen von Diagnosewerkzeugen, die ungefähr den Alltagseindrücken gut, in Ordnung, nachlassend und defekt entsprechen.

## Was ein Zustandswert nicht verrät

Er erkennt keine mechanischen Schäden. Ein gesprungenes Display, ein ausfallender Lautsprecher, ein lockerer Ladeanschluss oder ein Wasserschaden erscheinen in keiner dieser softwarebasierten Messgrößen.

Er kann nicht vorhersagen, wie lange das Smartphone noch hält. 78 Punkte bedeuten nicht, dass "78 % der Lebensdauer" übrig sind. Der Wert sagt nur, dass das Gerät bei den aktuell geprüften Messgrößen insgesamt noch ordentlich dasteht.

Er erlaubt keinen direkten Vergleich verschiedener Modelle. 90/100 auf einem günstigen Smartphone mit 3 GB RAM und 32 GB Speicher entsprechen nicht 90/100 auf einem Flaggschiff mit 12 GB RAM und 256 GB Speicher.

Der Wert ist eine Momentaufnahme. Er eignet sich, um Entwicklungen zu erkennen, etwa ob das Gerät kontinuierlich schlechter wird, und für eine schnelle Einschätzung beim Gebrauchtkauf. Er ist ein Ausgangspunkt, keine Diagnose.

## FAQ

**Veröffentlichen Hersteller offizielle Zustandswerte?**
Keinen einheitlichen. Samsungs Gerätewartung zeigt einen Optimierungswert bis 100, der auf Samsungs eigenen Prüfungen von Akku, Speicher, Arbeitsspeicher und Sicherheit beruht. **Gerätezustand & Support** auf Pixel-Smartphones zeigt einen allgemeinen Status und den Status einzelner Funktionen statt eines universellen Zahlenwerts von 0 bis 100. Die Herstellerwerkzeuge sind nützlich, ihre Ergebnisse lassen sich zwischen Marken aber nicht sauber vergleichen.

**Kann ein niedriger Wert verbessert werden?**
Das hängt vollständig von der Ursache ab. Ist der Speicher voll, kannst du Platz schaffen und der Teilwert erholt sich sofort. Bei einem verschlissenen Akku hilft nur ein Austausch. Temperaturprobleme verschwinden oft, nachdem du eine fehlerhafte App beendet oder eine Hülle entfernt hast, die Wärme schlecht abgibt.

**Ist ein höherer Wert immer besser?**
Auf demselben Smartphone im Zeitverlauf ja. Ein sinkender Wert weist auf eine Verschlechterung hin. Zwischen verschiedenen Geräten nicht unbedingt. Ein drei Jahre altes Smartphone mit 72 Punkten kann für seinen Besitzer problemlos funktionieren, während ein neues Gerät mit 95 Punkten am Wohnort des Besitzers schlechten Empfang hat, der in den Wert einfließt.
