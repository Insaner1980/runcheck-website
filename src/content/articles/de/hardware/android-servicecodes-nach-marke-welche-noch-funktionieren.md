---
title: "Android-Diagnosecodes: vollständige Liste nach Hersteller"
description: "Funktionierende Android-Servicecodes nach Marke, mit aktuellen Hinweisen zu Android 17, Pixel-Geräten, Samsung, Xiaomi, OnePlus, Motorola, Huawei, Realme und OPPO."
listSummary: "diagnose, sensoren und android"
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnose","sensoren","android","hardware","ratgeber"]
locale: "de"
draft: false
---
Android-Servicecodes sind nützlich, aber unübersichtlich. Einige gehören zu Android, andere fügt der Hersteller hinzu, und manche verschwinden nach einem Firmware-Update ohne jede Vorwarnung.

Das ist seit der Einführung von Android 17 noch wichtiger. Google hat Android 17 zuerst für die meisten unterstützten Pixel-Geräte veröffentlicht. Samsung, Xiaomi, OnePlus, Motorola und andere Hersteller liefern ihre eigenen Android-17-Versionen später aus. Ein Code, der heute auf einem Pixel mit Android 17 funktioniert, sagt deshalb wenig über ein Galaxy- oder Redmi-Smartphone aus, das seine Android-17-Firmware noch nicht erhalten hat.

Zwei Regeln vor dem Start. Die meisten Codes werden ausgeführt, sobald du das letzte Zeichen eingibst. Die Anruftaste ist daher normalerweise nicht nötig. Öffnet ein Code ein Menü, das du nicht verstehst, sieh dir die Werte an, aber ändere nichts.

## Universelle Codes

Diese Codes kommen einer gemeinsamen Android-Grundausstattung am nächsten. Angepasste Firmware kann selbst sie blockieren.

`*#06#` zeigt die IMEI der Mobilfunkeinheit an. Dual-SIM-Smartphones zeigen normalerweise zwei IMEI-Nummern. Dies ist der sicherste Code der Liste und funktioniert auf fast jedem Smartphone, einschließlich iPhones.

`*#*#4636#*#*` öffnet auf vielen Geräten das Android Testing-Menü. Es kann Telefoninformationen, Akkustatistiken, Signalstärke und Funkdetails anzeigen. Viele OEM-Oberflächen schränken es inzwischen allerdings ein, besonders neuere Firmware von Samsung und Xiaomi.

`*#*#426#*#*` öffnet die Diagnose von Firebase Cloud Messaging. Sie ist vor allem hilfreich, wenn Push-Benachrichtigungen verspätet oder gar nicht eintreffen, weil sie zeigt, ob Google Play-Dienste eine Verbindung zu den Google-Servern aufrechterhalten können.

`*#07#` zeigt auf vielen Android-Smartphones SAR-Informationen. SAR steht für Specific Absorption Rate und beschreibt, wie viel Hochfrequenzenergie der Körper während der Nutzung aufnimmt. In den USA liegt der FCC-Grenzwert für Smartphones bei 1,6 W/kg. In Europa gilt für Kopf und Rumpf üblicherweise ein Grenzwert von 2,0 W/kg, gemittelt über 10 Gramm Gewebe.

## Samsung Galaxy

Samsung bietet weiterhin eine der besseren Diagnoselösungen, unter anderem weil sowohl Telefoncodes als auch ein offiziell unterstützter App-Weg verfügbar sind.

`*#0*#` öffnet auf vielen Galaxy-Smartphones den Hardwaretest von Samsung. Die genaue Anordnung unterscheidet sich je nach Modell, normalerweise lassen sich aber Display, Touchscreen, Kameras, Lautsprecher, Vibration, Sensoren und manchmal auch die Fingerabdruckhardware prüfen. Auf einigen Provider-Modellen oder stark eingeschränkter Firmware öffnet sich das Menü gar nicht.

Samsung Members ist für die meisten Menschen der sicherere Weg. Öffne die App und rufe den Diagnosebereich für das Smartphone auf. Je nach App-Version und Region befindet er sich im Support-Bereich oder auf dem Tab Discover. Die App führt durch die Tests und erklärt die Ergebnisse verständlicher als das Servicemenü.

`*#0228#` zeigt auf vielen Galaxy-Firmware-Versionen Akkustatuswerte wie Spannung und Temperatur. Einen klaren Prozentwert für den Akkuzustand liefert der Bildschirm nicht.

`*#0011#` öffnet auf vielen Modellen ServiceMode mit aktuellen Mobilfunkdaten wie Frequenzband, versorgender Funkzelle und Signalwerten. Das ist nützlich, lässt sich ohne Kenntnisse über Mobilfunknetze aber leicht falsch interpretieren.

`*#9900#` öffnet auf manchen Galaxy-Smartphones SysDump. Die einzige Option, die normale Anwender überhaupt verwenden sollten, ist die Protokollbereinigung, und auch nur dann, wenn der Support ausdrücklich zum Löschen angesammelter dumpstate- oder logcat-Dateien aufgefordert hat.

`*#2663#` zeigt auf einigen Modellen Informationen zur Touchscreen-Firmware. Aktualisiere die Touch-Firmware nicht nur deshalb, weil eine Schaltfläche dafür vorhanden ist. Nutze sie nur bei einem konkreten Touchscreenproblem.

## Xiaomi, Redmi und POCO

Xiaomis Testumgebung ab Werk heißt CIT. Sie gehört zu den wenigen Android-Diagnosemenüs, für die es noch brauchbare offizielle Support-Dokumentation gibt.

`*#*#6484#*#*` öffnet auf vielen Xiaomi-, Redmi- und POCO-Smartphones die CIT-Hardwareerkennung. Reagiert der Code nicht, probiere `*#*#64663#*#*`. Xiaomi nennt je nach Modell und Region beide Codes auf seinen Supportseiten.

Das CIT-Menü kann Tests für Display, Touchscreen, Lautsprecher, Mikrofon, Vibration, Kamera, Näherungssensor, Lichtsensor, Beschleunigungssensor, Gyroskop, Kompass, WLAN, Bluetooth, SIM-Erkennung, Fingerabdruck, NFC und Laden enthalten. Welche Tests erscheinen, hängt von der Hardware des Smartphones ab.

Dasselbe Menü lässt sich häufig ohne Telefoncode öffnen. Rufe in den Einstellungen die Geräteinformationen und dort die Seite mit den ausführlichen Spezifikationen auf. Tippe anschließend mehrmals auf die Kernel-Version. Xiaomi ändert die Bezeichnungen zwischen MIUI und HyperOS, der Weg über die Kernel-Version ist aber einen Versuch wert, wenn der Telefoncode blockiert wird.

`*#*#6485#*#*` zeigt auf vielen Xiaomi-Smartphones Akkuinformationen. Betrachte die Werte als technische Messdaten, nicht als einfachen Ersatz für eine Seite zum Akkuzustand.

## Google Pixel

Pixel-Smartphones unterstützen die universellen Android-Codes. Der derzeit wichtigste Diagnosecode ist jedoch Pixel-spezifisch.

`*#*#7287#*#*` öffnet auf unterstützten Pixel-Smartphones die Pixel Repair Diagnostics App. Google dokumentiert sie für Prüfungen vor und nach einer Reparatur. Sie benötigt eine Internetverbindung und führt auf dem Display durch den Ablauf.

Für Akkuprüfungen auf Pixel 6 und neueren Modellen verwendest du `Einstellungen > Akku > Akkudiagnose`. Das ist ein normaler Einstellungsweg und kein versteckter Code.

`*#*#4636#*#*` funktioniert auf vielen Pixel-Smartphones weiterhin für Funk- und Akkuinformationen. Es ist kein Reparaturwerkzeug und erzwingt auch keine Android-Updates.

Ältere Artikel erwähnen manchmal den Rechnercode `.12345+=` für einen Pixel-Engineering-Mode. Darauf würde ich mich 2026 nicht verlassen. Nutze stattdessen den offiziellen Pixel-Diagnosecode.

## OnePlus

OnePlus-Codes sind uneinheitlich, weil sich OxygenOS in den vergangenen Jahren stärker an ColorOS angenähert hat.

`*#808#` öffnet auf einigen älteren OnePlus-Smartphones den Engineer Mode, besonders bei Geräten der Reihen OnePlus 7, 8 und 9. Auf neuerer Firmware kann der Code blockiert sein.

`*#899#` öffnet auf manchen Geräten aus der OnePlus- und OPPO-Familie ein Diagnose- oder Protokollmenü. Der Inhalt unterscheidet sich stark.

`*#*#4636#*#*` ist meist der nützlichste Grundcode für Netzwerk- und Akkuinformationen. Für Hardwaretests auf neueren OnePlus-Smartphones ist die integrierte Diagnose-App, die Support-App oder eine vertrauenswürdige Sensor-App oft weniger frustrierend als die Suche nach alten Codes.

## Motorola

`*#*#2486#*#*` öffnet Berichten zufolge auf vielen Moto-Smartphones das Engineering- oder Hardwaretestmenü. Die Unterstützung hängt vom Modell ab.

Verlässlicher ist häufig die App Device Help. Öffne `Device Help`, danach `Device diagnosis` und schließlich `Hardware test`. Dieser Weg ist für technisch weniger erfahrene Nutzer leichter verständlich und hängt nicht davon ab, dass ein versteckter Code aktiviert bleibt.

`*#*#4636#*#*` funktioniert auf vielen Motorola-Smartphones, weil Motorolas Android-Versionen relativ nah am Android-Standard bleiben.

## Huawei und Honor

`*#*#2846579#*#*` öffnet auf vielen Huawei- und älteren Honor-Smartphones mit EMUI oder MagicUI das ProjectMenu. Es enthält Software-, Hintergrund-, Netzwerk- und Serviceeinstellungen. Einige Optionen sind für Techniker bestimmt.

`*#*#6130#*#*` zeigt auf manchen Huawei-Modellen Netzwerkinformationen.

Bei neueren HarmonyOS-Geräten solltest du die Support-App verwenden, statt davon auszugehen, dass jeder alte Android-Code weiterhin funktioniert. Huawei hat viele benutzerorientierte Diagnosen in geführte Supportabläufe verschoben.

## Realme und OPPO

`*#800#` öffnet auf einigen Realme- und OPPO-Smartphones den Engineer Mode. Auf neueren ColorOS-Versionen ist der Zugang deutlich stärker eingeschränkt als früher.

`*#899#` kann auf manchen Modellen ein Diagnose- oder Protokollmenü öffnen.

Diese Marken ändern den Diagnosezugang häufig. Funktioniert ein Code nicht, probiere nicht wahllos alte Listen aus Foren durch. Nutze Phone Manager, die Support-App oder eine bekannte Hardware-Info-App.

## Warum Codes nicht mehr funktionieren

Die Telefon-App spielt eine Rolle. Eine App von einem Drittanbieter verarbeitet MMI- und Servicecodes möglicherweise anders als die vorinstallierte Telefon-App. Probiere deshalb zuerst die vorinstallierte App.

Provider-Firmware kann Codes entfernen. Ein an einen Mobilfunkanbieter gebundenes Galaxy kann sich anders verhalten als ein Galaxy mit derselben Hardware ohne Provider-Sperre.

Große Updates können alles verändern. Android 17 ist ein gutes Beispiel: Pixel-Geräte erhielten es zuerst, jeder OEM liefert seine eigene Version aber später mit eigenen Servicemenüs, Berechtigungen und Einschränkungen. Funktioniert ein Code nach einem Systemupdate nicht mehr, kann er blockiert sein, ohne technisch defekt zu sein.

Und ja, manche Codelisten im Internet sind veraltet. Ein Code aus einem Galaxy-S8-Forenbeitrag funktioniert möglicherweise nicht auf einem Galaxy S26, auch wenn der Artikel „alle Samsung-Smartphones“ verspricht.

## Sicherere Alternativen

Für alltägliche Prüfungen ist die Diagnose-App des Herstellers meist besser als ein verstecktes Menü. Samsung Members, Xiaomi CIT, Pixel Repair Diagnostics, Motorola Device Help und Huawei Support sind leichter zu verstehen und weniger riskant.

Für eine schreibgeschützte Übersicht können Apps wie DevCheck, CPU-Z, AIDA64 und Phone Doctor Plus über öffentliche Android-APIs Akkuwerte, Sensorwerte, CPU-Details, Speicher und Netzwerkinformationen anzeigen. Sie erreichen nicht jeden Werkstest, reichen für die meisten Fehlerprüfungen aber aus.

Für einen umfassenderen Zustandsüberblick verbindet runcheck Akku-, Temperatur-, Netzwerk- und Speicherdiagnosen in einem Dashboard, statt dich zwischen verschiedenen Servicemenüs wechseln zu lassen.

## Was du nicht anfassen solltest

Ändere keine Mobilfunkbänder, wenn du nicht genau weißt, warum du das tust.

Starte keine Schaltflächen für Firmware-Updates in Servicemenüs, nur um zu sehen, was passiert.

Verwende keine Optionen zum Zurücksetzen, Kalibrieren oder Wiederherstellen der Werkseinstellungen aus einer Codeliste, solange du deine Daten nicht gesichert hast und nicht genau weißt, was die Option bewirkt.

Werte abzulesen ist sicher. Probleme entstehen, wenn du versteckte Einstellungen veränderst.
