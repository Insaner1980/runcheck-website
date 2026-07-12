---
title: "Android-Sensortest: Sensoren im Smartphone prüfen, diagnostizieren und reparieren"
description: "Woher weißt du, ob die automatische Drehung defekt ist, der Kompass nur verwirrt reagiert oder eine App sich schlecht benimmt? Genau das macht Sensorprobleme so lästig. Sie wirken klein, bis Navigation, Telefonate, Kamerastabilisierung, Schrittzählung oder automatische Helligkeit zuverlässig funktionieren sollen."
listSummary: "hardware, testen und diagnose"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["hardware","testen","diagnose","android","ratgeber"]
locale: "de"
draft: false
---
Android-Smartphones verwenden eine Mischung aus Bewegungs-, Umwelt-, Positions- und Näherungssensoren. Manche sind physische Chips. Andere sind „virtuelle“ Sensoren, deren Werte aus mehreren Hardwarequellen berechnet werden. Wenn eine Quelle ungenau, blockiert oder deaktiviert ist, kann das sichtbare Problem an einer ganz anderen Stelle auftauchen.

Fange einfach an. Für die erste Testrunde brauchst du weder Root noch ADB oder eine Laborwerkbank.

## Schnelle Sensortests

Probiere diese Alltagstests aus, bevor du etwas installierst:

- Drehe das Smartphone bei deaktivierter Rotationssperre vom Hoch- ins Querformat. Damit prüfst du das grundlegende Verhalten des Beschleunigungssensors.
- Nimm ein Panoramafoto auf. Kann das Smartphone die Bewegung nicht gleichmäßig verfolgen, könnte das Gyroskop beteiligt sein.
- Starte einen Anruf und bedecke den oberen Bildschirmbereich nahe der Hörmuschel. Das Display sollte sich ausschalten und nach dem Aufdecken wieder angehen. Damit prüfst du den Näherungssensor.
- Aktiviere die automatische Helligkeit und gehe von einem hellen in einen dunklen Raum. Das Display sollte innerhalb weniger Sekunden reagieren.
- Öffne Maps und sieh dir den blauen Richtungsfächer an. Ist er sehr breit oder zeigt falsch, muss der Magnetometer meist kalibriert werden oder wird durch die Umgebung gestört.

Bei Samsung-Galaxy-Geräten ist Samsung Members der sauberste Weg: Öffne Samsung Members, tippe auf `Support` und danach im Bereich Diagnose auf `Tests anzeigen`. Das ältere Diagnosemenü `*#0*#` funktioniert ebenfalls auf vielen Galaxy-Smartphones und enthält einen Sensorbereich.

Auf Pixel-Smartphones wählst du `*#*#7287#*#*`, um auf unterstützten Geräten Pixel Diagnostics zu öffnen. Bei Xiaomi-, Redmi- und POCO-Geräten öffnet `*#*#6484#*#*` auf vielen Modellen das CIT-Menü. Bei Motorola verwendest du `Device Help > Device diagnosis > Hardware test`; die Bezeichnungen können je nach Sprache und Modell abweichen.

Behandle `*#*#4636#*#*` nicht als Sensortest. Auf vielen Geräten öffnet der Code eine Test- oder Informationsansicht für Mobilfunk, Nutzung, WLAN und teilweise Akku. Er ist kein universelles Diagnosemenü für Sensoren.

## Warum Sensorprobleme entstehen

Eine verschobene Kalibrierung ist die häufigste unspektakuläre Ursache. Beschleunigungssensor, Gyroskop und Magnetometer sind auf Kalibrierung angewiesen. Besonders empfindlich reagiert der Magnetometer, weil Magnete, Metallhüllen, Autohalterungen, Laptops, Lautsprecher und manche Wallet-Hüllen seine Werte verfälschen können.

Danach kommt physischer Schaden. Ein Sturz kann ein Sensormodul verschieben, den Rahmen am oberen Displayrand verformen oder ein Flexkabel beschädigen. Nach Wasserkontakt kann der Fehler verzögert auftreten. Das Smartphone wirkt vielleicht eine Woche normal, bis Korrosion den Näherungssensor oder das Barometer beeinflusst.

Blockierte Sensorfenster werden leicht übersehen. Näherungs- und Umgebungslichtsensor sitzen meist nahe der Hörmuschel oder unter einem Bereich des Displays. Eine dicke Schutzfolie, ein hoher Hüllenrand, Staub, Hautfett oder falsch ausgerichtetes Blickschutzglas kann das Licht blockieren oder streuen.

Auch Software kann Sensoren stören. Große Android-Updates, Änderungen der Hersteller-Firmware, Custom ROMs, App-Berechtigungen und aggressive Akkuverwaltung beeinflussen, welche Daten Apps erhalten. Android 17 wurde am 16. Juni 2026 zunächst für die meisten unterstützten Pixel-Geräte veröffentlicht, andere Hersteller folgen später. Updatebedingte Sensorfehler treten deshalb nicht auf allen Smartphones gleichzeitig auf.

Energie- und Entwicklereinstellungen spielen ebenfalls eine Rolle. Seit Android 9 erhalten Apps im Hintergrund keine fortlaufenden Ereignisse von Sensoren wie Beschleunigungssensor und Gyroskop. Android 10 führte außerdem die Entwicklerkachel `Sensors off` ein. Ist sie aktiviert, werden Kamera, Mikrofon und die von Androids SensorManager verwalteten Sensoren blockiert oder liefern keine normalen Daten. Wenn plötzlich alle Sensoren tot wirken, prüfe diese Kachel, bevor du einen Defekt der Hauptplatine vermutest.

## Teste Beschleunigungssensor und Gyroskop

Deaktiviere die Rotationssperre und drehe das Smartphone langsam. Die Anzeige sollte ohne lange Verzögerung und ohne ständiges Hin- und Herspringen die Ausrichtung wechseln. Dreht sich in keiner App etwas, meldet der Beschleunigungssensor möglicherweise keine korrekten Werte.

Öffne danach eine Wasserwaagen-App oder eine andere App, die die Neigung anzeigt. Lege das Smartphone flach auf einen Tisch. Die Werte sollten sich beruhigen, statt dauerhaft weiterzuwandern. Eine kleine Abweichung ist normal. Eine große gleichbleibende Neigung auf einer waagerechten Fläche weist auf ein Kalibrierungsproblem hin.

Nutze für das Gyroskop den Panoramamodus der Kamera oder eine AR-App. Die Ansicht sollte deiner Bewegung gleichmäßig folgen. Scheitern Panoramen wiederholt oder rutschen AR-Objekte herum, obwohl du stillstehst, könnte das Gyroskop stark rauschen.

Hier hilft ein Vergleich. Teste dieselbe App im selben Raum auf einem anderen Smartphone. Verhalten sich beide schlecht, liegt es eher an der App oder der Umgebung.

## Teste den Näherungssensor

Starte einen Anruf und halte die Hand etwa zwei Zentimeter über den oberen Bildschirmbereich. Das Display sollte ausgehen. Nimm die Hand weg, dann sollte es sich wieder einschalten.

Die meisten Näherungssensoren in Smartphones sind keine präzisen Entfernungsmesser. Sie melden häufig nur „nah“ oder „fern“ und keinen stufenlosen Zentimeterwert. In einer Diagnose-App kann deshalb 0 cm oder 5 cm erscheinen, ohne Zwischenwerte. Das ist normal.

Bleibt der Wert hängen, entferne Hülle und Displayschutz. Reinige den oberen Displayrand beziehungsweise den Sensorbereich mit einem weichen Tuch und teste erneut. Gehärtete Schutzgläser sind hier ein klassischer Störfaktor.

## Teste den Umgebungslichtsensor

Aktiviere die automatische Helligkeit. Leuchte mit einer Taschenlampe in die Nähe des oberen Displaybereichs und bedecke dieselbe Stelle anschließend mit der Hand. Die Helligkeit sollte deutlich reagieren, auch wenn Android den Übergang glättet, statt sofort zu springen.

Ein Lichtsensorwert wird normalerweise in Lux angezeigt. Ein dunkler Raum kann unter 50 Lux liegen, ein typisches Büro bei einigen Hundert Lux. Direktes Sonnenlicht kann 10.000 Lux überschreiten. Entscheidend ist weniger der exakte Wert als eine sinnvolle Veränderung bei wechselndem Licht.

Reagiert der Lux-Wert korrekt, obwohl die automatische Helligkeit merkwürdig arbeitet, ist der Sensor wahrscheinlich in Ordnung. Dann liegt das Problem eher am Lernverhalten der adaptiven Helligkeit, an Displayeinstellungen oder an der Hersteller-Software.

## Teste Magnetometer und Kompass

Gehe nach draußen oder halte Abstand zu größeren Metallgegenständen. Öffne Maps und tippe auf den Standortpfeil. Ist der blaue Richtungsfächer sehr breit oder zeigt in die falsche Richtung, kalibriere den Kompass.

Bewege das Smartphone in Form einer großen liegenden Acht vor dir und drehe dabei das Handgelenk in verschiedene Richtungen. Mache das 15 bis 20 Sekunden lang. Es sieht albern aus. Erstaunlich oft hilft es.

Ist der Kompass weiterhin falsch, entferne magnetisches Zubehör und teste erneut. Autohalterungen, Wallet-Hüllen, MagSafe-ähnliche Ringe, Laptopdeckel und Metalltische können Messwerte stark verzerren. In Innenräumen arbeitet ein Smartphone-Kompass oft schlechter, als viele erwarten.

## Teste das Barometer

Nicht jedes Android-Smartphone hat ein Barometer. Bei günstigen Modellen fehlt es häufig.

Ist eines vorhanden, sollte eine Sensor-App den Luftdruck in hPa oder Millibar anzeigen. Vergleiche den Wert mit einer nahe gelegenen Wetterstation. Erwarte keine perfekte Übereinstimmung, weil Wetter-Apps oft den auf Meereshöhe umgerechneten Luftdruck zeigen, während das Smartphone den lokalen Druck an deiner tatsächlichen Höhe misst.

Ein völlig festhängender Wert kann auf einen blockierten oder defekten Sensor hinweisen. Die Belüftungsöffnung ist winzig, deshalb können Flusen und Staub eine Rolle spielen.

## Rohdaten lesen, ohne sie zu überbewerten

Rohwerte sind nützlich, aber jage keiner Perfektion hinterher.

Ein Beschleunigungssensor meldet die Beschleunigung auf der X-, Y- und Z-Achse in m/s². Liegt das Smartphone flach, sollte je nach Ausrichtung auf einer Achse wegen der Erdanziehung ungefähr 9,8 m/s² und auf den anderen nahezu null stehen.

Ein Gyroskop misst die Drehgeschwindigkeit in Radiant pro Sekunde. Wenn das Smartphone stillliegt, sollten die Werte nahe null bleiben. Kleine Bewegungen und Sensorrauschen sind normal.

Ein Magnetometer misst die Stärke des Magnetfelds in Mikrotesla. Das Erdmagnetfeld liegt je nach Standort häufig ungefähr zwischen 25 und 65 Mikrotesla. Werte weit außerhalb dieses Bereichs deuten meist auf Störungen in der Umgebung hin.

Ein Lichtsensor meldet Lux. Du suchst nach einer plausiblen Reaktion, nicht nach Laborpräzision.

## Was du vor einer Reparatur versuchen solltest

Starte das Smartphone zuerst neu. Langweilig, aber sinnvoll.

Entferne danach Hülle und Displayschutz, reinige den oberen Sensorbereich, deaktiviere den Energiesparmodus und prüfe in den Entwickleroptionen, ob die Kachel `Sensors off` aktiviert ist. Betrifft das Problem nur eine App, kontrolliere deren Berechtigungen und Akku-Beschränkungen.

Kalibriere bei Kompassproblemen neu und entferne dich von Magneten. Teste die automatische Drehung in mehreren Apps, weil manche Anwendungen eine feste Ausrichtung erzwingen. Prüfe den Näherungssensor während eines echten Anrufs und ohne Schutzfolie.

Hat ein Sensor direkt nach einem Betriebssystemupdate aufgehört zu funktionieren, installiere ausstehende System- und Google-Play-Systemupdates und teste erneut. Läuft das Smartphone mit einer Beta-Version, solltest du ein einzelnes fehlerhaftes Sensorverhalten nicht als bestätigten Hardwaredefekt behandeln, bevor du es mit stabiler Software geprüft hast.

Eine Diagnose-App wie runcheck ist hilfreich, wenn mehrere Symptome zusammenkommen. Akkubelastung, Hitze und Netzwerkprobleme können das gesamte Smartphone fehlerhaft wirken lassen, obwohl der Sensor nur ein Teil des Problems ist.

## Wann es wahrscheinlich Hardware ist

Vermute einen Hardwarefehler, wenn derselbe Sensor in jeder App ausfällt, auch im Diagnosewerkzeug des Herstellers fehlschlägt, im abgesicherten Modus nicht funktioniert und nach einem Reset weiterhin ausfällt.

Einzelne Smartphone-Sensoren sind meist winzige, aufgelötete Bauteile oder Bestandteile eines größeren Moduls. Reparaturwerkstätten tauschen deshalb selten nur einen Sensorchip. In der Praxis wird je nach Einbauort häufig eine Displayeinheit, ein Kameramodul, die untere Platine oder ein Abschnitt der Hauptplatine ersetzt.

Wenn das Smartphone heruntergefallen, verbogen oder nass geworden ist, erwähne das beim Einholen eines Reparaturangebots. Es verändert, wonach der Techniker suchen sollte.
