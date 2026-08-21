---
title: "Android-Servicecodes nach Marke: dokumentierte Wege, die noch funktionieren können"
description: "Hier dokumentierte Service- und Diagnosewege für Samsung, Pixel und Xiaomi. Verfügbarkeit und Verhalten variieren je nach Modell, Region, Anbieter, Software und Hersteller; Android 17 stellt keinen universellen Codesatz bereit."
listSummary: "Dokumentierte Servicewege nach Marke mit Modell- und Softwareeinschränkungen."
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnose", "sensoren", "android", "hardware", "ratgeber"]
locale: "de"
draft: false
---
Eine zuverlässige vollständige Liste gibt es nicht. Diagnosecodes hängen von Hersteller, Modell, Telefon-App, Firmware, Anbieter und Region ab. Unten bleiben nur Codes mit direkter aktueller Herstellerdokumentation.

Direkter Beleg: [Samsung dokumentiert `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google den Pixel-Code `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB) und [Xiaomi CIT](https://www.mi.com/global/support/faq/details/KA-491482/) über `*#*#6484#*#*` oder `*#*#64663#*#*` auf passenden Geräten.

## Samsung Galaxy

Samsung bietet weiterhin eine der besseren Diagnoselösungen, unter anderem weil sowohl Telefoncodes als auch ein offiziell unterstützter App-Weg verfügbar sind.

`*#0*#` öffnet auf vielen Galaxy-Smartphones den Hardwaretest von Samsung. Die genaue Anordnung unterscheidet sich je nach Modell, normalerweise lassen sich aber Display, Touchscreen, Kameras, Lautsprecher, Vibration, Sensoren und manchmal auch die Fingerabdruckhardware prüfen. Auf einigen Provider-Modellen oder stark eingeschränkter Firmware öffnet sich das Menü gar nicht.

Samsung Members ist für die meisten Menschen der sicherere Weg. Öffne die App und rufe den Diagnosebereich für das Smartphone auf. Je nach App-Version und Region befindet er sich im Support-Bereich oder auf dem Tab Discover. Die App führt durch die Tests und erklärt die Ergebnisse verständlicher als das Servicemenü.

## Xiaomi, Redmi und POCO

[Xiaomis Supportseite](https://www.mi.com/global/support/faq/details/KA-491482/) dokumentiert für geeignete Geräte zwei Telefoncodes für einen CIT-Touchscreen-Test: `*#*#6484#*#*` und `*#*#64663#*#*`.

Beim dokumentierten Test wird ein Finger über den Bildschirm gezogen und auf unterbrochene oder zusätzliche Linien geachtet. Die Quelle stützt nur diese Touchscreen-Fehlersuche. Verfügbarkeit und Verhalten unterscheiden sich je nach Modell, Region, Anbieter, Firmware und Softwareversion.

## Google Pixel

Die Pixel-Dokumentation beschreibt einen Pixel-spezifischen Diagnoseweg. Seine Verfügbarkeit kann je nach Modell, Region, Anbieter und Softwareversion variieren.

`*#*#7287#*#*` öffnet auf unterstützten Pixel-Smartphones die Pixel Repair Diagnostics App. Google dokumentiert sie für Prüfungen vor und nach einer Reparatur. Sie benötigt eine Internetverbindung und führt auf dem Display durch den Ablauf.

Für Akkuprüfungen auf Pixel 6 und neueren Modellen verwendest du `Einstellungen > Akku > Akkudiagnose`. Das ist ein normaler Einstellungsweg und kein versteckter Code.

Ältere Artikel erwähnen manchmal den Rechnercode `.12345+=` für einen Pixel-Engineering-Mode. Darauf würde ich mich 2026 nicht verlassen. Nutze stattdessen den offiziellen Pixel-Diagnosecode.

## Safety

Funktioniert ein dokumentierter Code nicht, nutze die unterstützte Diagnose-App oder Serviceanleitung des Herstellers. Deaktiviere keine Sicherheitskontrollen und gib keine Reset-, Provisionierungs-, Funkkalibrierungs-, Firmware- oder Programmiercodes aus ungeprüften Listen ein.
