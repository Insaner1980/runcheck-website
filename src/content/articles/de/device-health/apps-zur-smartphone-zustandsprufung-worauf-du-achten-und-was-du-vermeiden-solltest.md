---
title: "Apps zur Smartphone-Zustandsprüfung: Worauf du achten und was du vermeiden solltest"
description: "So wählst du 2026 eine Android-App zur Smartphone-Zustandsprüfung aus, erkennst Warnzeichen und unterscheidest echte Diagnosen von fragwürdigen Optimierungs-Apps."
listSummary: "vergleich, apps und android"
hub: "device-health"
sourceNumber: 140
order: 9
tags: ["vergleich","apps","android","kaufratgeber","test"]
locale: "de"
draft: false
---
Eine gute App zur Zustandsprüfung sagt dir, welche Daten dein Smartphone meldet, wo diese Daten unsicher sind und was du als Nächstes tatsächlich tun kannst. Eine schlechte App zeigt einen riesigen "Optimieren"-Knopf, spielt eine Animation ab und hofft, dass du auf eine Anzeige tippst.

Genau dort verläuft die Grenze. Sobald du weißt, worauf du achten musst, ist sie nicht besonders subtil.

Android 17 ändert an dieser Grundregel nichts. Die Version befindet sich derzeit noch in Beta 4 und ist nicht regulär ausgerollt. Unterstützte Pixel-Geräte sowie ausgewählte Modelle anderer Hersteller können Beta-Versionen testen. Selbst mit Android 17 bleiben Zustandsdaten je nach Hersteller sehr unterschiedlich. Pixel-Smartphones, Samsung-Galaxy-Geräte, Xiaomi-Modelle mit HyperOS und günstige Android-Smartphones können völlig verschiedene Informationen offenlegen.

## Was Android-Apps wirklich auslesen können

Android stellt über öffentliche APIs unter anderem Akkustand, Spannung, Temperatur, Ladestatus, Speichernutzung, Netzwerkstatus, WLAN-Informationen, Mobilfunktyp und Sensordaten bereit. Mit den passenden Berechtigungen können Apps außerdem Nutzungsstatistiken, Medienkategorien im Speicher und bestimmte Netzwerkdetails lesen.

Für Temperaturdiagnosen bietet Android seit Android 10 eine System-API für den thermischen Status und seit Android 11 Thermal Headroom. Eine App kann dadurch erkennen, ob das System unter thermischem Druck steht, sofern das Smartphone und seine Android-Version die Daten korrekt bereitstellen.

Akkudaten sind unübersichtlicher. Androids BatteryManager kann Werte wie Strom, Ladungszähler, Spannung, Status und Temperatur liefern. Wie brauchbar diese Werte sind, hängt jedoch vom Fuel Gauge des Geräts und von der OEM-Implementierung ab. Eine App zur Zustandsprüfung kann nur lesen, was Android freigibt. Sie kann keine präzisen chemischen Akkudaten erfinden, die das Smartphone nicht liefert.

Auf dem Pixel 8a und neueren Modellen sind Googles eigene Akkuseiten inzwischen wichtig. Die Anzahl der Ladezyklen steht unter `Einstellungen > Über das Telefon > Akkuinformationen`, der Akkuzustand unter `Einstellungen > Akku > Akkuzustand`. Diese Funktion gibt es nicht auf jedem Pixel und schon gar nicht als einheitliche Android-Funktion auf allen Marken.

## Warnzeichen

Die schlechtesten Apps versprechen meist Reparaturen statt Diagnosen.

"Akku reparieren" ist der Klassiker. Der Verschleiß eines Lithium-Ionen-Akkus ist chemische Alterung. Eine App kann ihn nicht rückgängig machen. Sie kann Nutzungsmuster zeigen, vor Hitze warnen oder dich daran erinnern, früher vom Ladegerät zu trennen. Eine verschlissene Zelle stellt sie nicht wieder her.

Auch RAM-Booster sind ein schlechtes Zeichen. Android verwaltet den Arbeitsspeicher bereits selbst. Das erzwungene Schließen von Apps kann zusätzliche Arbeit verursachen, wenn sie kurz darauf neu gestartet werden. Wenn eine angebliche Diagnose-App vor allem einen Speicherreiniger bewirbt, ist sie wahrscheinlich nicht für echte Diagnosen gebaut.

Übertriebene Berechtigungsforderungen sollten dich ebenfalls bremsen. Ein Akkumonitor braucht deine Kontakte nicht. Ein Netzwerkwerkzeug braucht keine Anrufliste. Ein geführter Kamera- oder Mikrofontest kann Zugriff auf diese Komponenten benötigen, weil er sie tatsächlich testet. Die Berechtigung muss zur Funktion passen.

Dann gibt es Zustandswerte ohne Methode. "Smartphone-Zustand: 87 %" bedeutet nichts, wenn die App nicht erklärt, wodurch die Zahl beeinflusst wird. Senkt Hitze den Wert? Zählt voller Speicher? Spielt ein schwaches Signal eine Rolle? Wenn sich der Wert bei realen Änderungen nie bewegt, ist er Dekoration.

Wirklich. Eine hübsche kreisförmige Anzeige ist noch keine Diagnosemethode.

## Was eine nützliche App anders macht

Eine brauchbare App zeigt konkrete Werte: Akkutemperatur in °C, Spannung in mV, Signalstärke in dBm, Speichernutzung in GB und Prozent sowie Ladestrom in mA oder Leistung in W, wenn das Smartphone diese Werte bereitstellt.

Sie gibt auch Grenzen zu. Genau daran scheitern viele Apps. Eine Strommessung kann auf einem Gerät präzise und auf einem anderen nur geschätzt sein. Die CPU-Temperatur kann fehlen, weil die App keine thermischen Zonen auslesen darf. Speicherzustand ist nicht dasselbe wie Speicherbelegung. Eine sorgfältige App sagt, wann Daten geschätzt, nicht verfügbar oder geräteabhängig sind.

Die besten Apps haben meist einen klaren Schwerpunkt. AccuBattery ist vor allem ein Akkutracker. DevCheck zeigt vor allem Hardware- und Systeminformationen. AIDA64 ist eine technische Referenz. runcheck kombiniert Akku, Temperatur, Netzwerk und Speicher in einer Zustandsansicht. Phone Doctor Plus führt durch Hardwaretests.

Problematisch wird es bei All-in-one-Apps, die gleichzeitig Akkureparatur, RAM-Boosting, Müllbereinigung, Virenentfernung und einen geheimen Leistungsmodus versprechen.

## Eingebaute Werkzeuge zuerst prüfen

Bevor du etwas installierst, sieh nach, was das Smartphone bereits mitbringt.

Samsung Members enthält eine Telefondiagnose und einen Akkustatus-Test. Der aktuell von Samsung Deutschland dokumentierte Weg lautet `Samsung Members > Support > Telefondiagnose > Jetzt beginnen`. Anschließend kannst du `Akkustatus` oder je nach Oberfläche `Alle testen` auswählen. Anzahl und Bezeichnungen der Tests können je nach Modell und App-Version leicht variieren.

Pixel-Smartphones sind hier besser geworden, besonders das Pixel 8a und neuere Modelle. Der Akkuzustand steht unter `Einstellungen > Akku > Akkuzustand`. Ladezyklen und weitere Akkuinformationen findest du unter `Einstellungen > Über das Telefon > Akkuinformationen`. Pixel-Nutzer mit kompatiblem Gerät gehören außerdem zu den ersten Gruppen, die Android-17-Betas testen können. Das ist nicht dasselbe wie eine stabile Veröffentlichung für alle.

Viele Xiaomi- und HyperOS-Geräte besitzen ein CIT- oder Hardwaretest-Menü. Code und Verfügbarkeit unterscheiden sich allerdings je nach Firmware. Wählcodes wie `*#*#4636#*#*` können auf manchen Geräten das Android-Testmenü öffnen. Auf anderen passiert nichts. Betrachte solche Codes als Bonus, nicht als verlässlichen Plan.

## Wann Drittanbieter-Apps echten Mehrwert bieten

Eingebaute Werkzeuge eignen sich gut für Momentaufnahmen. Drittanbieter-Apps sind besser, wenn du Verlauf, Vergleiche oder einen Bericht brauchst.

Der Akkuverlauf ist das offensichtlichste Beispiel. Eine Pixel-Akkuseite kann auf unterstützten Modellen anzeigen, ob der Akkuzustand normal oder reduziert ist. AccuBattery zeigt, wie sich Ladevorgänge über längere Zeit verhalten haben. Das sind unterschiedliche Fragen.

Dasselbe gilt für Temperaturverläufe. Ein Smartphone, das bei Navigation in der Sonne einmal 43 °C erreicht, ist nicht mit einem Gerät gleichzusetzen, das jeden Abend bei normalen Aufgaben über 40 °C steigt. Für dieses Muster brauchst du Protokolle.

Die Prüfung gebrauchter Smartphones ist ein eigener Anwendungsfall. Apps wie Phone Doctor Plus oder TestM-artige Werkzeuge führen durch Tests von Touchscreen, Lautsprechern, Mikrofon, Kameras, Sensoren, WLAN, Bluetooth, GPS und weiteren Komponenten. Für den Weiterverkauf ist das nützlicher als ein einzelner Wert zur Akkutemperatur.

runcheck liegt dazwischen. Die App liefert einen schnellen Zustandsüberblick über mehrere Kategorien und macht Unsicherheit sichtbar. Das ist hilfreich, wenn du nicht auf fünf verschiedenen Ansichten Rohdaten vergleichen willst.

## Datenschutz ist wichtiger, als viele denken

Diagnosedaten wirken harmlos. Akkuspannung ist schließlich nicht dein Nachrichtenverlauf. Trotzdem kann eine Zustands-App dein Gerätemodell, Nutzungsmuster, Netzwerkstatus, installierte Apps, Speichergewohnheiten und manchmal standortbezogene WLAN-Informationen erkennen.

Eine vernünftige App sollte möglichst viel auf dem Gerät verarbeiten, nur bei Bedarf ein Konto verlangen und erklären, warum sie jede Berechtigung benötigt. DevCheck erklärt, keine personenbezogenen Daten zu erfassen oder zu speichern. runcheck ist für Verarbeitung auf dem Gerät ohne Konto ausgelegt. Ein solches Datenschutzmodell passt zu einer Utility-App.

Sei skeptischer bei Apps, die Diagnoseberichte ohne klaren Grund hochladen, besonders wenn die App kostenlos, voller Werbung und bei der Datennutzung vage ist.

## Für eine Diagnose-App bezahlen

Ein kleiner einmaliger Betrag ist sinnvoll, wenn dadurch Werbung verschwindet oder Verläufe, Export und Überwachungsfunktionen freigeschaltet werden, die du tatsächlich nutzt. Für vorgetäuschte Reparaturwerkzeuge solltest du nichts bezahlen.

Für eine einmalige Prüfung reicht die kostenlose Stufe meist aus. Für langfristige Akku- oder Speicherverläufe, Ladegerätevergleiche oder CSV-Export kann eine kostenpflichtige Stufe sinnvoll sein.

Der beste Test ist einfach: Wäre die App noch nützlich, wenn der "Optimieren"-Knopf verschwände? Wenn ja, könnte es eine echte Diagnose-App sein. Wenn nein, deinstalliere sie.
