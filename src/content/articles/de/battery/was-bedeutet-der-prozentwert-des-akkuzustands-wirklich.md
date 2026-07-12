---
title: "Was bedeutet der Prozentwert des Akkuzustands wirklich?"
description: "Der Wert für den Akkuzustand beschreibt den Verschleiß. Er ist nicht dasselbe wie die Akkuanzeige in der Statusleiste."
listSummary: "Der Wert für den Akkuzustand beschreibt den Verschleiß."
hub: "battery"
sourceNumber: 13
order: 3
subgroup: "Health"
tags: ["akku","zustand","diagnose","android","ratgeber"]
locale: "de"
draft: false
---
Wenn dein Smartphone einen Akkuzustand von 87 % meldet, kann die Zelle noch ungefähr 87 % der Ladung speichern, die sie im Neuzustand aufnehmen konnte. Sie funktioniert weiterhin. Der Tank ist nur kleiner geworden.

**Meta-Beschreibung:** Der Akkuzustand zeigt die aktuelle Maximalkapazität im Vergleich zum Neuzustand. Erfahre, was der Wert bedeutet, warum 80 % wichtig sind und wie Android-Smartphones ihn anzeigen.

## Die Zahl hinter der Zahl

Jeder Smartphone-Akku besitzt zu Beginn eine Nennkapazität. Sie gibt an, wie viel Ladung die Zelle speichern soll, normalerweise in mAh. Ein Smartphone mit einem großen 5.000-mAh-Akku sollte im Neuzustand ungefähr diese Ladungsmenge aufnehmen können.

Dann greift die Chemie ein. Jeder Lade- und Entladezyklus lässt die Zelle ein wenig altern. Hitze, hohe Spannung, tiefe Entladung, Schnellladen und schlicht die vergangene Zeit summieren sich. Die feste Elektrolyt-Grenzschicht im Akku wird dicker, der Innenwiderstand steigt und es steht weniger aktives Lithium für den Ladungstransport zwischen den Elektroden zur Verfügung.

Der Prozentwert vergleicht die aktuelle Vollladekapazität mit der ursprünglichen Nennkapazität. Wenn der Akku nur noch ungefähr 4.350 mAh erreicht, liegt sein Zustand bei rund 87 %.

Genau darin liegt der Nutzen der Zahl. Sie zeigt, wie stark „voll“ geschrumpft ist.

## Akkuzustand ist nicht Ladestand

Hier entsteht häufig Verwirrung. Der Ladestand zeigt, wie voll der Akku im Moment ist. Der Akkuzustand beschreibt, wie viel Energie er überhaupt noch speichern kann, wenn er vollgeladen ist.

Ein Smartphone mit 100 % Ladestand und 85 % Akkuzustand enthält nicht mehr dieselbe Energiemenge wie bei 100 % im Neuzustand. Es ist nur gemessen an seiner gealterten Kapazität voll. Deshalb können zwei Smartphones beide 100 % in der Statusleiste anzeigen und trotzdem sehr unterschiedlich lange durchhalten.

Auch die ursprüngliche Akkugröße verändert, wie sich der Wert anfühlt. Ein Smartphone mit 5.500 mAh bei 82 % Akkuzustand kann länger laufen als ein kompaktes Modell mit 95 %. Der Prozentwert ist nützlich, aber nicht die ganze Geschichte.

## Wie Android den Akkuzustand anzeigt

Android hat den Akkuzustand nie so einheitlich behandelt wie iOS. Über viele Jahre konnten die meisten Nutzer nur einen einfachen Status sehen, etwa Good, Overheat, Dead, Cold, Over Voltage, Unknown oder Unspecified failure. Diese Angaben kennzeichnen offensichtliche Zustände oder Fehler, nicht die verbleibende Kapazität als genauen Prozentwert.

Manche Smartphones zeigen bis heute nur diesen groben Status. Auf Geräten mit unverändertem oder nahezu unverändertem Android kann das Testmenü `*#*#4636#*#*` Akkuinformationen anzeigen, sofern der Hersteller es aktiviert gelassen hat. Viele Geräte verbergen das Menü. Andere zeigen Temperatur und Spannung, aber keinen Akkuzustand in Prozent.

Auch Android 17 macht die Anzeige nicht universell. Die Version wurde zuerst für die meisten unterstützten Pixel-Geräte veröffentlicht, doch der Akkuzustand hängt weiterhin vom Modell und von den Daten ab, die die Hardware bereitstellt.

Pixel ist derzeit das deutlichste Beispiel für eine echte Akkuzustandsseite. Auf dem Pixel 8a und neueren Modellen zeigt Google den **Akkuzustand** unter **Einstellungen > Akku > Akkuzustand** an. Der Status kann **Normal**, **Reduziert** oder **Nicht verfügbar** lauten. Unter **Akkukapazität** findest du außerdem eine geschätzte Restkapazität im Vergleich zum ursprünglichen Akku. Ältere unterstützte Pixel-Modelle wie Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 und Pixel 8 Pro zeigen diesen Akkuzustand nicht an, auch wenn sie andere Funktionen zur Akkuverwaltung unterstützen.

Samsung geht einen anderen Weg. Die Samsung Members App kann über die Telefondiagnose den Akkustatus prüfen. Neuere One UI-Versionen stellen auf manchen Modellen außerdem mehr Akkuinformationen in den Einstellungen bereit. Die genaue Bezeichnung und der Umfang hängen jedoch von Gerät und Region ab.

Bei anderen Android-Marken ist die Lage uneinheitlich. Einige Smartphones von Xiaomi, HONOR, OnePlus, OPPO und realme zeigen die maximale Kapazität in ihren Akkueinstellungen an. Ältere Geräte, günstige Modelle und Smartphones mit eingeschränkten Daten des Ladecontrollers tun das häufig nicht. Theoretisch bietet Android heute mehr Systemunterstützung für Akkudaten als früher. In der Praxis bestimmen Hardware und OEM-Software, was du tatsächlich sehen kannst.

Dieses Durcheinander ist der Grund, warum runcheck den Akkuzustand als eines von mehreren Signalen behandelt und nicht als endgültiges Urteil. Wenn das Smartphone Zustandsstatus, Spannung, Temperatur, Stromstärke, Zykluszahl oder Kapazitätsdaten bereitstellt, kann runcheck diese Werte mit einer Zuverlässigkeitskennzeichnung anzeigen, statt so zu tun, als würden alle Android-Geräte gleichwertige Daten liefern.

## Warum alle über 80 % sprechen

Die Marke von 80 % ist nicht magisch. Sie ist nur ein verbreiteter Grenzwert für die praktische Lebensdauer.

Unter 80 % der ursprünglichen Kapazität ist die Laufzeit so weit verkürzt, dass viele Menschen es bemerken. Meist ist außerdem der Innenwiderstand höher, wodurch die Spannung unter Last stärker einbrechen kann. Dann kann sich ein Smartphone während einer Kameraserie, eines Spiels oder eines Spaziergangs bei Kälte ausschalten, obwohl die Akkuanzeige kurz zuvor noch nicht leer aussah.

Moderne Hersteller nennen inzwischen unterschiedliche Zielwerte für Ladezyklen. Deshalb ist die alte Faustregel von „300 bis 500 Zyklen“ zu pauschal. Google gibt an, dass Pixel 8a und neuere Modelle ungefähr 1.000 Ladezyklen lang bis zu 80 % Kapazität behalten sollen. Pixel 3 bis Pixel 8 Pro sowie Pixel Fold sind für etwa 800 Zyklen angegeben. In der EU müssen Smartphones und Tablets, die unter die Ökodesign-Anforderungen fallen, mindestens 800 Lade- und Entladezyklen erreichen und dabei noch mindestens 80 % ihrer ursprünglichen Kapazität behalten.

Für den Alltag würde ich die Werte so einordnen:

- Mehr als 85 % sind normalerweise unproblematisch, sofern das Smartphone nicht von Anfang an einen kleinen Akku hatte.
- Um 80 % beginnen viele intensive Nutzer, einen Austausch einzuplanen.
- Unter 75 % sind Beschwerden über die Laufzeit kaum überraschend.
- Unter 70 % ist ein Akkutausch meist die praktische Lösung, wenn du das Smartphone behalten möchtest.

Das sind keine gesetzlichen oder technischen Grenzen. Es sind Entscheidungshilfen.

## Warum der Wert falsch sein kann

Der Akkuzustand ist eine Schätzung. Das Smartphone nimmt den Akku nicht aus dem Gerät und misst ihn unter kontrollierten Laborbedingungen.

Ein Ladecontroller schätzt die Kapazität anhand des hinein- und herausfließenden Stroms, der Spannung, der Temperatur und eines Modells für das erwartete Verhalten der Zelle. Dieses Modell kann abdriften. Lange Zeit mit sehr kleinen Teilladungen, ein Akkutausch, ein Systemupdate oder ungewöhnliche Temperaturen können dazu führen, dass sich der angezeigte Wert verändert.

Kleine Sprünge sind normal. Wenn der Akkuzustand nach einigen vollständigeren Ladezyklen von 88 % auf 90 % steigt, hat sich der Akku nicht erholt. Die Schätzung ist genauer geworden.

Apps von Drittanbietern haben dieselbe Einschränkung, verwenden aber eine andere Methode. AccuBattery schätzt die Kapazität zum Beispiel, indem die App den Ladestrom während mehrerer Ladevorgänge misst und die Ergebnisse mit der Zeit mittelt. Nach ein oder zwei Wochen normaler Nutzung kann das hilfreich sein, ein einzelner Ladevorgang reicht jedoch nicht. Ein billiges Kabel, Wärme, eine Teilladung oder ein Smartphone, das oberhalb von 80 % langsamer lädt, kann das Ergebnis verzerren.

Auch die Hardware spielt eine Rolle. Oberklasse-Smartphones besitzen häufig bessere Ladecontroller als günstige Modelle. Manche Geräte liefern stabile und brauchbare Werte. Andere zeigen dauerhaft 100 % an, weil sie keine echten Alterungsdaten freigeben.

## Was du mit dem Wert anfangen solltest

Betrachte den Akkuzustand als Entwicklung. Eine einzelne Messung ist interessant. Ein Rückgang über sechs Monate ist aussagekräftiger.

Wenn dein Smartphone 89 % anzeigt und problemlos durch den Tag kommt, musst du nichts tun. Zeigt es 78 % und du lädst zweimal täglich, lohnt es sich wahrscheinlich, die Kosten eines Akkutauschs zu prüfen. Schaltet sich das Gerät bei 25 % ab, wird bei leichter Nutzung warm oder springt die Anzeige, sind diese Symptome wichtiger als der Prozentwert selbst.

Und wenn sich der Akku aufbläht, verwende das Smartphone nicht weiter. Der Prozentwert spielt dann keine Rolle mehr.

runcheck ist hier nützlich, weil du den Akkuzustand zusammen mit Temperatur, Spannung, Zuverlässigkeit der Strommessung, Entladerate und Verlauf betrachten kannst. Akkuverschleiß zeigt sich selten als eine einzige klare Zahl. Er zeigt sich als Muster.

## Häufige Fragen

### Sind 85 % Akkuzustand schlecht?

Nein. Bei 85 % hat die Zelle Kapazität verloren, die meisten Smartphones bleiben aber gut nutzbar. Ein ursprünglich mit 5.000 mAh angegebener Akku speichert bei 85 % noch ungefähr 4.250 mAh. Je nach Gerät und deinen Gewohnheiten kann das weiterhin für einen ganzen Tag reichen.

### Kann der Akkuzustand wieder steigen?

Die reale chemische Kapazität kommt nicht zurück. Die Alterung eines Lithium-Ionen-Akkus ist dauerhaft. Der angezeigte Wert kann steigen, wenn das Smartphone die Kapazität zuvor unterschätzt und später genauer neu berechnet hat.

### Warum zeigt mein Smartphone „Good“ statt eines Prozentwerts?

Weil viele Android-Smartphones nur einen einfachen Zustandsstatus bereitstellen. **Good** bedeutet, dass Android keinen Fehlerzustand erkennt. Es bedeutet nicht, dass die Zelle noch 100 % ihrer ursprünglichen Kapazität besitzt.

### Sollte ich den Akku genau bei 80 % ersetzen?

Nicht automatisch. Tausche ihn aus, wenn das Smartphone nicht mehr durch deinen Alltag kommt, sich unerwartet abschaltet oder der Status **Reduziert** anzeigt und die Laufzeit zum Problem geworden ist. Die 80-%-Marke ist ein Planungssignal, kein Countdown.
