---
title: "Android-Diagnosecodes: vollständige Liste nach Hersteller"
description: "Android-Diagnosecodes für die Telefon-App nach Hersteller, darunter Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO und Realme, mit aktuellen Hinweisen zu Android 17."
listSummary: "diagnose, sensoren und android"
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnose","sensoren","android","hardware","ratgeber"]
locale: "de"
draft: false
---
---

Du gibst `*#0*#` auf einem Galaxy-Smartphone ein und ein vollständiges Hardware-Testmenü öffnet sich. Auf einem anderen Galaxy passiert mit demselben Code gar nichts.

Genau so sieht die normale Lage bei Android-Diagnosecodes aus. Sie sind nützlich, werden im Internet aber oft universeller dargestellt, als sie tatsächlich sind. Ein Code kann auf einem Smartphone funktionieren, auf einem anderen Modell derselben Marke scheitern und nach einem Update der Provider-Firmware ganz verschwinden. Diese Codes liegen in einem unübersichtlichen Bereich zwischen Android, Telefon-App, OEM-Servicemenüs und Einschränkungen durch Mobilfunkanbieter.

Google hat Android 17 am 16. Juni 2026 veröffentlicht und zuerst für unterstützte Pixel-Geräte bereitgestellt. Bei Geräten von Partnern wie OnePlus, OPPO, realme, vivo, Xiaomi, HONOR, Lenovo, Sharp und iQOO laufen Android-17-Betas und Rollouts weiterhin über die jeweiligen Herstellerkanäle. Android 17 vereinheitlicht versteckte Diagnosecodes deshalb nicht über verschiedene Marken hinweg.

Verwende zum Ausprobieren die vorinstallierte Telefon-App. Samsung-Codes benötigen meist Samsung Phone, Google-Codes in der Regel Phone by Google. Telefon-Apps von Drittanbietern verarbeiten MMI- oder Servicecodes häufig überhaupt nicht.

## Bevor du einen Code ausprobierst

Beschränke dich auf Codes, die Informationen anzeigen oder Hardwaretests starten. Gib keine Codes zum Zurücksetzen, Bereitstellen, Konfigurieren des Modems oder Programmieren von Serviceeinstellungen ein, wenn du nicht genau weißt, was sie tun.

Die meisten Testcodes werden ausgeführt, sobald du das letzte Zeichen eingibst. Bei manchen Smartphones musst du zusätzlich die Anruftaste drücken. Passiert nichts, solltest du den Code nicht immer wieder eingeben. Wahrscheinlich wird er auf diesem Modell, mit dieser Telefon-App, Provider-Firmware oder Android-Version nicht unterstützt.

## Codes, die auf vielen Android-Smartphones funktionieren

Diese Codes kommen einer gemeinsamen Android-Grundausstattung am nächsten. Garantiert sind sie trotzdem nicht auf jedem Gerät verfügbar.

| Code | Funktion | Hinweise |
|---|---|---|
| `*#06#` | Zeigt die IMEI und manchmal auch MEID oder EID an | Der am weitesten unterstützte Telefoncode. Nützlich für Garantieanfragen, IMEI-Sperrlisten und den Support des Mobilfunkanbieters. |
| `*#07#` | Zeigt regulatorische Informationen und SAR-Werte an | Funktioniert auf vielen Android-Smartphones. Bei manchen ist die Anruftaste erforderlich. |
| `*#*#4636#*#*` | Öffnet das Android Testing-Menü | Kann Telefoninformationen, Netzwerkstatus, Signaldaten, Akkustatistiken und WLAN-Details anzeigen. Die Verfügbarkeit variiert stark. |
| `*#*#426#*#*` | Öffnet die Firebase Cloud Messaging-Diagnose | Am besten mit Telefon von Google ausprobieren. Nützlich, wenn Push-Benachrichtigungen nicht ankommen. |

Das Menü hinter `*#*#4636#*#*` gehört zu den meistzitierten Android-Codes. Wundere dich aber nicht, wenn es weniger Felder zeigt als auf alten Screenshots. Neuere Android-Versionen und OEM-Oberflächen blenden mehr Netzwerk- und Akkudaten aus als früher.

## Samsung Galaxy

Samsung bietet zwei Diagnosewege: Samsung Members und versteckte Codes für die Telefon-App. Beginne mit Samsung Members. Dieser Weg wird offiziell unterstützt, ist aktuell und für normale Anwender leichter verständlich.

Öffne Samsung Members und rufe dort den Diagnosebereich für das Smartphone auf. Je nach App-Version und Region befindet er sich im Support-Bereich oder auf dem Tab Discover. Die aktuelle Testauswahl von Samsung kann Kamera, USB-Verbindung, Laden per Kabel, Akkustatus, Touchscreen, Sensoren, Vibration, Mikrofon, Lautsprecher, WLAN, Bluetooth, SIM-Karte, NFC und Fingerabdruckerkennung umfassen. Die genaue Liste hängt vom Modell ab.

Samsung-Codes bleiben besonders auf Smartphones ohne Provider-Sperre hilfreich. Sicherheitseinstellungen von One UI, Auto Blocker, Unternehmensrichtlinien und Provider-Firmware können sie jedoch blockieren.

| Code | Funktion | Hinweise |
|---|---|---|
| `*#0*#` | Öffnet das zentrale Samsung-Hardwaretestmenü | Die Tests können Displayfarben, Touchscreen, Hörmuschel, Lautsprecher, Vibration, Kameras, Sensoren, S Pen und weitere Komponenten umfassen. |
| `*#0228#` | Bildschirm mit Akkustatus | Zeigt auf vielen Modellen die aktuelle Akkuspannung und weitere Statuswerte. Manche neueren Versionen blockieren den Code. |
| `*#0011#` | ServiceMode-Bildschirm für das Mobilfunknetz | Nützlich für Signalwerte und Daten zur versorgenden Funkzelle. Ändere hier keine Einstellungen. |
| `*#0842#` | Vibrationstest | Funktioniert auf vielen Samsung-Modellen, aber nicht auf allen. |
| `*#0673#` oder `*#0289#` | Audiotest | Das Verhalten von Lautsprecher und Hörmuschel variiert je nach Modell. |
| `*#2663#` | Informationen zur Touchscreen-Firmware | Wird häufig von Servicetechnikern verwendet. |
| `*#7353#` | Schnelltestmenü | Kommt häufiger auf älteren Galaxy-Modellen vor. |
| `*#1234#` | Details zur Firmware-Version | Zeigt AP-, CP- und CSC-Buildinformationen. |
| `*#7412365#` | Informationen zur Kamera-Firmware | Die Verfügbarkeit variiert. |
| `*#0588#` | Test des Näherungssensors | Nützlich, wenn sich das Display während eines Anrufs nicht ausschaltet. |
| `*#9900#` | SysDump-Modus | Hauptsächlich für Protokolle und Fehlersuche. Ändere nicht wahllos Optionen. |
| `*#9090#` | Diagnosekonfiguration | Ändere nichts, sofern du nicht einer offiziellen Serviceanleitung folgst. |

Funktioniert `*#0*#` nicht, ist das Smartphone deshalb nicht automatisch gefälscht. Probiere zuerst Samsung Phone statt Phone by Google. Prüfe danach die Diagnose in Samsung Members. Funktioniert sie, ist der Hardwaretest weiterhin verfügbar, auch wenn der versteckte Code blockiert wird.

## Google Pixel

Pixel-Smartphones sind restriktiver als Samsung-Geräte. Eine Pixel-Entsprechung zum Samsung-Menü hinter `*#0*#` gibt es nicht.

| Code | Funktion | Hinweise |
|---|---|---|
| `*#*#7287#*#*` | Öffnet die Pixel-Reparaturdiagnose auf unterstützten Geräten | Google dokumentiert den Code für Selbstreparaturen an Pixel-Geräten. Eine Internetverbindung ist erforderlich, und die Verfügbarkeit kann von Modell, Region und Softwarezustand abhängen. |
| `*#*#4636#*#*` | Android Testing-Menü | Wird häufig für Telefon- und Netzwerkdetails verwendet, die angezeigten Felder unterscheiden sich jedoch je nach Android-Version. |
| `*#*#426#*#*` | FCM-Diagnose | Nützlich bei Problemen mit Push-Benachrichtigungen. |
| `*#07#` | Regulatorische Informationen und SAR-Werte | Funktioniert auf vielen Pixel-Modellen. |

Pixel 6 und neuere Modelle haben außerdem in den Einstellungen den Bereich `Gerätezustand & Support` für geführte Hilfe. Er ist nicht mit dem Reparaturdiagnosecode identisch, kann aber bei Fragen zu Akku, Laden, Leistung und Support der bessere Ausgangspunkt sein.

Android 17 ist als OTA-Update für unterstützte Pixel-Geräte vom Pixel 6 bis zum Pixel 10a verfügbar. Das bedeutet nicht, dass alle Pixel dieselben Diagnosemöglichkeiten haben. Hardware, Region und Unterstützung des Reparaturmodus spielen weiterhin eine Rolle.

## Xiaomi, Redmi und POCO

Das CIT-Menü von Xiaomi gehört zu den besseren OEM-Testumgebungen. Sein Inhalt unterscheidet sich jedoch zwischen MIUI, HyperOS, regionalen Firmware-Versionen und Modellreihen.

| Code | Funktion | Hinweise |
|---|---|---|
| `*#*#6484#*#*` | Öffnet das CIT-Hardwaretestmenü | Enthält häufig Tests für Display, Touchscreen, Vibration, Lautsprecher, Mikrofone, Kameras, Sensoren, GPS, WLAN, Bluetooth, SIM, Tasten, Fingerabdruck, IR-Sender und NFC. |
| `*#*#64663#*#*` | Alternativer CIT-Code | Funktioniert auf einigen älteren Xiaomi-Modellen. |
| `*#*#4636#*#*` | Android Testing-Menü | Die Verfügbarkeit variiert, besonders auf neueren HyperOS-Versionen. |

Bei manchen Xiaomi-Smartphones lässt sich die Diagnose auch über die Geräteinformationen in den Einstellungen öffnen. Rufe die Seite mit den ausführlichen Spezifikationen auf und tippe mehrmals auf die Kernel-Version. Scheitert der Code in der Telefon-App, lohnt sich dieser Weg.

## OnePlus

Der Diagnosezugang bei OnePlus hat sich im Laufe der Jahre verändert, während OxygenOS näher an ColorOS gerückt ist. Ältere Anleitungen passen daher nicht unbedingt zu deinem aktuellen Smartphone.

| Code | Funktion | Hinweise |
|---|---|---|
| `*#808#` | Engineering Mode | Die Hardwaretests können Display, Touchscreen, Kameras, Sensoren, Audio, Laden und Netzwerkmodule umfassen. Die Verfügbarkeit hängt von OxygenOS-Version und Region ab. |
| `*#*#4636#*#*` | Android Testing-Menü | Funktioniert weiterhin auf vielen Modellen. |
| `*#888#` | Hardwareversion oder Produktionsinformationen | Nicht auf jedem Modell vorhanden. |
| `*#1234#` | Firmware-Version | Funktioniert auf einigen OnePlus-Versionen. |

Sei im Engineering Mode vorsichtig. Nutze die Testbildschirme, ändere aber keine Modem-, Kalibrierungs- oder Serviceeinstellungen.

## Motorola

Motorola hat weniger öffentlich bekannte Telefoncodes als Samsung oder Xiaomi. Viele Modelle enthalten jedoch eine App für Servicetests.

| Code | Funktion | Hinweise |
|---|---|---|
| `*#*#2486#*#*` | Öffnet CQATest oder ein Servicetestmenü | Kann Tests für Display, Touchscreen, Lautsprecher, Vibration, Kamera und Sensoren enthalten. |
| `*#*#4636#*#*` | Android Testing-Menü | Funktioniert auf vielen Modellen. |
| `.12345+=` | Öffnet den Engineering Mode über die vorinstallierte Rechner-App | Funktioniert nur auf bestimmten Motorola-Geräten und nur in der vorinstallierten Rechner-App. |

Wenn CQATest nach einem Test in deiner App-Liste erscheint, besteht kein Grund zur Sorge. Es handelt sich um Motorolas Komponente für Werkstests.

## OPPO und Realme

OPPO und Realme teilen viele Bestandteile von ColorOS, deshalb überschneiden sich ihre Servicecodes.

| Code | Funktion | Hinweise |
|---|---|---|
| `*#899#` | Manuelles Test- oder Engineering-Menü | Häufiger Einstieg in Hardwaretests auf vielen ColorOS- und Realme UI-Versionen. |
| `*#800#` | Engineering- und Protokollwerkzeug | Wird häufig für Protokolle und Netzwerkdiagnosen verwendet. |
| `*#6776#` | Software- und Geräteinformationen | Zeigt auf vielen Modellen Angaben zu Modell und Firmware. |
| `*#*#4636#*#*` | Android Testing-Menü | Die Verfügbarkeit variiert. |

Der sicherere Weg führt meist über Phone Manager, My OPPO, My realme oder die Support-App, sofern dein Modell eine davon enthält.

## Codes, die du meiden solltest

Meide Codes zum Zurücksetzen auf Werkseinstellungen und zur Serviceprogrammierung, die du in beliebigen Listen findest. Ein gefährliches Beispiel, das noch immer weitergegeben wird, ist `*2767*3855#`, ein Samsung-Code zum Zurücksetzen älterer Geräte. Gib ihn nicht ein, nur um zu sehen, was passiert. So gehen Daten verloren.

Lass auch alles in Ruhe, was als NV, RF calibration, modem programming, carrier provisioning oder service configuration beschrieben wird. Diese Menüs sind kein Diagnosespielzeug.

## Wenn Codes nicht funktionieren

Probiere zuerst die vorinstallierte Telefon-App. Nutze danach die Support- oder Diagnose-App des Herstellers. Samsung Members, die Pixel-Diagnose, Xiaomi CIT über die Einstellungen, Motorola CQATest sowie Support-Werkzeuge von OPPO oder Realme funktionieren häufig auch dann, wenn Telefoncodes gesperrt sind.

An einen Mobilfunkanbieter gebundene Smartphones können Codes blockieren. Dasselbe gilt für unternehmensverwaltete Geräte und bestimmte Sicherheitsfunktionen. Android-Updates können Teile eines Menüs entfernen oder ausblenden. Das ist lästig, bedeutet aber nicht automatisch, dass ein Hardwareproblem vorliegt.

Für einen einmaligen Komponententest sind Diagnosecodes nützlich. Bei schleichenden Problemen reichen sie nicht aus. Ein Lautsprechertest zeigt nicht, dass dein Smartphone jeden Nachmittag überhitzt. Ein Akkubildschirm zeigt auch nicht, dass der Ladestrom seit einem Monat sinkt. runcheck schließt diese Lücke, indem die App Entwicklungen bei Akku, Temperatur, Netzwerk, Speicher und Laden über längere Zeit beobachtet.

## FAQ

### Können Diagnosecodes mein Smartphone beschädigen?

Codes für Informationen und Tests sind normalerweise sicher. Codes, die Daten zurücksetzen oder Serviceeinstellungen ändern, sind es nicht. Suche vor der Eingabe nach dem genauen Code.

### Muss ich die Anruftaste drücken?

Meistens nicht. Die meisten Codes im Format `*#*#...#*#*` oder `*#...#` starten nach der Eingabe des letzten Zeichens. Bei manchen Smartphones ist die Anruftaste nötig, besonders bei kürzeren Codes wie `*#07#`.

### Warum funktioniert ein Code auf einem Smartphone, aber nicht auf einem anderen?

Weil der Code vom OEM, von der Telefon-App, von der Firmware und manchmal vom Mobilfunkanbieter umgesetzt wird. Android selbst garantiert kein universelles Hardwaretestmenü.

### Können Apps Diagnosecodes ersetzen?

Teilweise. Apps wie Samsung Members, Phone Doctor Plus und DevCheck können über Android-APIs Display, Lautsprecher, Kameras, Sensoren, Akkuwerte und Netzwerkstatus testen. Auf dieselben tiefen Servicebildschirme wie OEM-Menüs können sie normalerweise nicht zugreifen.
