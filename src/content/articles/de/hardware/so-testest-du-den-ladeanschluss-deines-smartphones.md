---
title: "So testest du den Ladeanschluss deines Smartphones"
description: "So prüfst du den Ladeanschluss eines Android-Smartphones mit Kabeltests, vorsichtiger Reinigung, Ladestromwerten und integrierten Diagnosetests."
listSummary: "laden, akku und android"
hub: "hardware"
sourceNumber: 108
order: 5
tags: ["laden","akku","android","ratgeber","hardware"]
locale: "de"
draft: false
---
---

Du hältst das Kabel in einem seltsamen Winkel, das Ladesymbol flackert und das Smartphone lädt nur, wenn es vollkommen still liegt. Das fühlt sich schnell nach einem defekten Ladeanschluss an. Beginne trotzdem nicht dort.

Mach zuerst die langweiligen Prüfungen. Sie finden mehr Fehler, als viele erwarten.

## Zuerst Kabel und Netzteil ausschließen

Teste ein anderes USB-C- oder Micro-USB-Kabel mit demselben Netzteil. Verwende danach ein anderes Netzteil mit dem ursprünglichen Kabel. Falls möglich, prüfe beide Zubehörteile auch mit einem anderen Smartphone oder Tablet.

Ein Kabel kann innen beschädigt sein, lange bevor außen etwas zu sehen ist. Fällt eine Daten- oder Stromleitung aus, lädt ein Schnellladegerät vielleicht nur noch sehr langsam. Das Kabel kann äußerlich trotzdem einwandfrei aussehen. Ärgerlich, aber normal.

Laden dasselbe Kabel und Netzteil ein anderes Gerät problemlos, wird der Anschluss des Smartphones verdächtiger. Behebt ein anderes Kabel das Problem sofort, war der Anschluss wahrscheinlich nicht die Ursache.

## Anschluss untersuchen

Schalte das Smartphone aus und leuchte mit einer Taschenlampe gerade in den Ladeanschluss. Suche nach Flusen, die an der hinteren Wand des Anschlusses festgepresst sind. Taschenflusen sammeln sich langsam an, werden vom Stecker immer weiter verdichtet und verhindern schließlich, dass er vollständig einrastet.

Prüfe auch den Sitz. Ein intakter USB-C-Stecker sollte fest im Anschluss sitzen. Er darf nicht herausfallen, stark wackeln oder die Verbindung verlieren, wenn du das Smartphone leicht bewegst. Etwas Spiel ist besonders bei älteren Geräten normal. Ständige Unterbrechungen sind es nicht.

Achte auf grüne, weiße oder dunkle Rückstände an den Kontakten. Das spricht für Korrosion oder Feuchtigkeit. Staub und Flusen lassen sich entfernen. Ein korrodierter Kontakt wird dadurch nicht repariert.

## Vorsichtig reinigen

Siehst du Staub oder Flusen, halte den Anschluss nach unten und verwende ein paar kurze Luftstöße aus einem Handblasebalg oder einer Druckluftdose. Gehe nicht zu nah heran. Du willst den Schmutz lösen, nicht tiefer in das Gerät drücken.

Für festgepresste Flusen eignet sich eine trockene, weiche Elektronikbürste oder eine saubere, trockene Zahnbürste. Verwende keine Metallwerkzeuge. Eine Nadel kann einen Kontakt verbiegen oder einen Kurzschluss verursachen. Auch einen Holzzahnstocher würde ich nur im absoluten Notfall verwenden, weil er splittern und ein neues Problem im Anschluss hinterlassen kann.

Gieße keinen Alkohol und keinen Kontaktreiniger in das Smartphone. Dass eine Fachkraft in einer kontrollierten Werkstatt mit Flüssigkeiten arbeitet, macht daraus keine sichere Reparatur für zu Hause.

Stecke das Ladekabel nach der Reinigung erneut ein. Rastet es jetzt spürbar fester ein, waren Flusen wahrscheinlich die Hauptursache.

## Ladestrom prüfen

Android stellt auf Geräten, die diese Messung unterstützen, Akkustromwerte über `BatteryManager` bereit. Apps wie Ampere können sie anzeigen. Behandle die Werte als Vergleich, nicht als Labormessung.

Öffne Ampere ohne angeschlossenes Ladegerät und notiere den Entladewert. Schließe das Ladegerät an, warte etwa 10 Sekunden und beobachte, wie sich die Anzeige einpendelt. Akkustand, Temperatur, Bildschirmhelligkeit und die Ladesteuerung des Smartphones beeinflussen den Wert.

Ein 2A-Ladegerät muss auf dem Display nicht ständig 2000 mA anzeigen. Ist der Akku fast voll, reduziert das Smartphone den Ladestrom absichtlich. Siehst du mit einem nachweislich funktionierenden Netzteil und Kabel aber nur etwa 200 oder 300 mA und springt der Wert jedes Mal, wenn du den Stecker berührst, ist der Kontakt im Anschluss nicht stabil.

Für Samsung gibt es einen weiteren Weg. Öffne Samsung Members, tippe auf Support und unter Telefondiagnose auf Jetzt beginnen. Starte je nach Modell Laden über Kabel oder USB-Verbindung.

Der Samsung-Code `*#0*#` kann auf vielen Galaxy-Smartphones ebenfalls ein Hardwaretest-Menü öffnen. Verwende dafür die Samsung Telefon-App und keinen Drittanbieter-Dialer. Auf neueren One-UI-Versionen, Geräten bestimmter Mobilfunkanbieter oder Smartphones mit Sicherheitsbeschränkungen kann der Code ohne Reaktion bleiben. Das ist inzwischen normal.

Android 17 hat keinen universellen Test für den Ladeanschluss aller Android-Smartphones eingeführt. Pixel-, Samsung- und Xiaomi-Geräte verwenden weiterhin unterschiedliche Diagnosewege.

## Abgesicherten Modus ausprobieren

Ist der Anschluss sauber, sitzt das Kabel fest und verhält sich das Laden trotzdem merkwürdig, starte das Smartphone im abgesicherten Modus. Dort werden Drittanbieter-Apps deaktiviert, sodass sich Softwareeinflüsse schnell erkennen lassen.

Bei vielen Android-Smartphones hältst du die Ein/Aus-Schaltfläche gedrückt und berührst Ausschalten anschließend länger, bis die Abfrage für den abgesicherten Modus erscheint. Bei vielen Samsung-Geräten startest du neu und hältst während des Hochfahrens die Leiser-Taste gedrückt.

Funktioniert das Laden im abgesicherten Modus normal, prüfe kürzlich installierte Akku-, Automatisierungs-, Sicherheits- oder Ladeanimations-Apps. Eine davon kann das Ladeverhalten oder zumindest dessen Anzeige stören.

## Wann der Anschluss repariert werden muss

Der Anschluss ist wahrscheinlich beschädigt, wenn Ladegerät und Kabel an einem anderen Gerät funktionieren, der Anschluss sauber ist, der Stecker weiterhin locker sitzt und die Stromwerte niedrig oder instabil bleiben.

Wie aufwendig die Reparatur ist, hängt vom Smartphone ab. Bei vielen Samsung-Galaxy-, Xiaomi-, Motorola- und günstigeren Android-Geräten sitzt der USB-Anschluss auf einer separaten Tochterplatine. Der Austausch ist dann meist eine Routinearbeit. Bei anderen Geräten ist der Anschluss mit der Hauptplatine verlötet. Dafür braucht die Werkstatt mehr Erfahrung, und die Reparatur wird wegen der Arbeit auf Platinenebene teurer.

Induktives Laden kann vorübergehend helfen, falls dein Smartphone es unterstützt. Es umgeht den USB-Anschluss vollständig, ist aber meist langsamer und weniger praktisch als ein Kabel.

Wird das Laden über mehrere Wochen immer schlechter, warte nicht bis zum vollständigen Ausfall. runcheck protokolliert Ladeverhalten, Stromaufnahme und Power-Delivery-Trends im Zeitverlauf. Dadurch lässt sich ein schwächer werdender Anschluss leichter erkennen, bevor du mit leerem Akku feststeckst.
