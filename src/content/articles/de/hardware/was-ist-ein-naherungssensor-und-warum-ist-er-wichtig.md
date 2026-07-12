---
title: "Was ist ein Näherungssensor und warum ist er wichtig?"
description: "Wie der Näherungssensor in deinem Android-Smartphone funktioniert, warum Anrufe bei einem Defekt Probleme machen und wie du häufige Sensorfehler testest und behebst."
listSummary: "diagnose, sensoren und android"
hub: "hardware"
sourceNumber: 117
order: 14
tags: ["diagnose","sensoren","android","hardware","ratgeber"]
locale: "de"
draft: false
---
Mitten im Gespräch schaltet sich das Display an deinem Gesicht ein, und deine Wange öffnet das Tastenfeld. Meist versagt dann dieser winzige Sensor bei der einen Aufgabe, die niemand bemerkt, solange sie funktioniert.

Der Sensor meldet dem Smartphone, wenn sich etwas nahe vor dem Frontglas befindet. Während eines Anrufs ist dieses "Etwas" normalerweise dein Gesicht. Android schaltet daraufhin das Display aus und ignoriert Berührungen, damit dein Ohr nicht zum Touchscreen-Zubehör wird.

## So funktioniert er

Die meisten Android-Smartphones verwenden einen Infrarot-Näherungssensor in der Nähe des Hörers oder der Frontkamera. Er sendet Infrarotlicht aus und misst, wie viel davon zurückgeworfen wird. Kommt genug Licht zurück, erkennt das Smartphone ein nahes Objekt. Nimmt die Reflexion ab, meldet der Sensor wieder "fern".

Androids eigene Sensordokumentation ist etwas flexibler, als viele erwarten. Die meisten Näherungssensoren liefern eine Entfernung in Zentimetern, manche melden aber nur "nah" oder "fern". Für das normale Verhalten bei Anrufen braucht Android auch nicht mehr.

Einige Smartphones verwenden kein separates Infrarotbauteil in der früher üblichen, gut erkennbaren Form. Manche setzen auf Sensoren unter dem Display oder auf eine virtuelle Näherungserkennung, die andere Sensoren mit Software kombiniert. Das spart Platz am oberen Displayrand, kann aber empfindlicher auf Displayschutz, Schmutz, Glasschäden und Firmwarefehler reagieren.

## Wo der Sensor sitzt

Bei älteren Smartphones mit sichtbarem oberen Rahmen sitzt er meist neben dem Hörer, der Frontkamera und dem Umgebungslichtsensor. Du siehst ihn möglicherweise nicht, weil er hinter einem dunklen Fenster im Glas liegt.

Bei neueren Geräten mit Punch-Hole-Kamera und fast randlosem Display kann der Sensor unter dem Bildschirm oder hinter einer weniger auffälligen Stelle des Frontglases liegen. Seine genaue Position lässt sich dadurch schwerer erraten. Decke beim Testen mit der Hand zuerst den Bereich um Hörer und Frontkamera ab.

## Anzeichen für einen defekten Näherungssensor

Das Display bleibt während eines Anrufs an. Das ist das klassische Symptom. Du hältst das Smartphone ans Ohr, und deine Wange beginnt, Schaltflächen zu drücken.

Das Display bleibt schwarz, nachdem du das Gerät vom Ohr genommen hast. Du beendest das Gespräch und musst die Ein-Aus-Taste drücken, weil der Bildschirm nicht von selbst aufwacht.

Das Display schaltet sich während der normalen Nutzung aus. Das kann passieren, wenn der Sensor dauerhaft "nah" meldet, weil etwas ihn verdeckt.

Unbeabsichtigte Eingaben in der Tasche nehmen zu. Der Näherungssensor ist nicht der einzige Schutz dagegen. Wenn er jedoch ständig falsch misst, werden versehentliche Berührungen wahrscheinlicher.

## Schneller Test während eines Anrufs

Rufe deine Mailbox oder eine andere Nummer an, bei der du niemanden störst. Decke während des Gesprächs den Bereich beim Hörer mit der Handfläche ab.

Das Display sollte sich schnell ausschalten. Nimm die Hand weg, und es sollte innerhalb von ungefähr einer Sekunde wieder angehen. Braucht der Bildschirm mehrere Sekunden, reagiert er gar nicht oder flackert zwischen an und aus, solltest du den Sensor genauer prüfen.

Einfach. Und ärgerlich nützlich.

## Bessere Diagnosetests

Gib auf einem Samsung Galaxy in der vorinstallierten Telefon-App `*#0*#` ein und suche nach dem Sensortest. Benutzerfreundlicher ist die Samsung Members-App: Öffne dort Support > Telefondiagnose > Jetzt beginnen und wähle, sofern dein Modell die Funktion anbietet, die Annäherungserkennung. Das sollte deine erste Wahl sein, wenn du Servicemenüs nicht magst.

Gib auf Smartphones von Xiaomi, Redmi und POCO `*#*#6484#*#*` oder `*#*#64663#*#*` ein, um den CIT-Modus zu öffnen. Xiaomi empfiehlt bei Problemen mit Touch- oder Sensorfunktionen außerdem, Hülle und Displayschutz zu entfernen, den oberen Geräterand zu reinigen, die Software zu aktualisieren und die Hardwareerkennung zu verwenden.

Auf anderen Android-Smartphones kannst du Sensor Test, Sensors Multitool oder DevCheck verwenden. Öffne den Messwert des Näherungssensors, bewege deine Hand über den oberen Geräterand und beobachte, ob sich der Wert ändert. Manche Geräte zeigen Zentimeter an. Andere springen zwischen 0 und einem Höchstwert, was lediglich "nah" und "fern" bedeutet.

Ändert sich der Wert nie, ist der Sensor verdeckt, deaktiviert, schlecht kalibriert oder defekt.

Einige ältere Anleitungen empfehlen Proximity Sensor Reset. Ich würde damit nicht anfangen. Nutze die App erst nach den grundlegenden Prüfungen, und erwarte nicht, dass eine Kalibrierungs-App eines Drittanbieters einen Sensor repariert, den das Smartphone überhaupt nicht auslesen kann.

## Behebe zuerst die häufigen Ursachen

Reinige den oberen Displaybereich. Hautfett, Staub, Make-up, Flusen und eingetrocknete Rückstände können das Sensorfenster verdecken. Verwende ein sauberes Mikrofasertuch und achte besonders auf den Bereich um den Hörer.

Entferne den Displayschutz. Bei Smartphones mit verstecktem Näherungssensor oder einem Sensor unter dem Display ist er die häufigste Ursache. Die Folie oder das Glas kann zu dick, im Sensorbereich zu dunkel oder leicht falsch ausgerichtet sein. Teste das Smartphone ohne Schutz, bevor du die Hauptplatine verdächtigst.

Nimm die Hülle ab. Klapphüllen, hohe Ränder und schlecht ausgeschnittene Hüllen können den oberen Displaybereich beeinträchtigen.

Starte das Smartphone neu. Sensortreiber können hängen bleiben, besonders nach langer Laufzeit oder direkt nach einem Systemupdate.

Aktualisiere die Software. Die Näherungserkennung hängt teilweise von der Firmware ab. Ein großes Plattformupdate wie Android 17 kann das Sensorverhalten verändern, weil die Herstellerschicht die Hardware ansteuert.

Prüfe die Anrufeinstellungen. Einige Xiaomi-Versionen bieten dort eine Option für die Näherungserkennung. Der genaue Pfad ändert sich, ältere MIUI-Versionen verwendeten jedoch Settings > Apps > System app settings > Call settings > Incoming call settings > Proximity sensor.

## Kalibrierung und virtuelle Sensoren

Manche Diagnosemenüs enthalten eine Kalibrierung des Näherungssensors. Typische Beispiele sind Xiaomi CIT und ältere OnePlus-Werksmodi. Führe die Kalibrierung nur aus, wenn das Menü sie eindeutig anbietet und das Smartphone flach, sauber und ohne Abdeckung liegt.

Virtuelle Näherungssensoren sind komplizierter. Schätzt das Smartphone die Entfernung per Software, gibt es möglicherweise kein einzelnes physisches Bauteil, das sich austauschen lässt. Dann sind Firmwareupdates wichtiger als eine Reparatur. Das Zurücksetzen auf Werkseinstellungen kann einen fehlerhaften Kalibrierungszustand löschen, sollte nach einer Datensicherung aber der letzte Schritt sein.

## Wenn die Hardware schuld ist

Ändert sich der Sensorwert in der Diagnose auch nach Reinigung, Entfernen von Zubehör, Neustart, Update und einem Test im abgesicherten Modus nicht, ist ein Hardwaredefekt wahrscheinlich.

Ein Sturz kann den Sensorbereich beschädigen oder das Display verschieben. Wasser kann den Sensor oder das Flexkabel korrodieren. Nach einer Reparatur kann ein Stecker locker sein oder der falsche Klebstoff den Sensor verdecken. Eine weitere Sensor-App behebt nichts davon.

Hat das Smartphone ein separates Infrarotbauteil für die Näherungserkennung, ist das Teil selbst klein. Die Arbeitszeit bestimmt jedoch den Reparaturpreis. Bei versteckten oder in die Displayeinheit integrierten Lösungen kann die Reparatur an den Austausch der gesamten Displayeinheit gekoppelt sein.

Lohnt sich die Reparatur nicht, kannst du das Problem umgehen. Wecke das Display während eines Anrufs mit der Ein-Aus-Taste, aktiviere einen Schutz vor versehentlichen Berührungen, falls dein Smartphone eine solche Funktion bietet, und meide Klapphüllen, die den Sensorbereich verdecken. Perfekt ist das nicht, aber das Gerät bleibt benutzbar.
