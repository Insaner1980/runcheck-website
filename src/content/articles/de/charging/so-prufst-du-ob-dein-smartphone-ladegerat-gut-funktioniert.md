---
title: "So prüfst du, ob dein Smartphone-Ladegerät gut funktioniert"
description: "So prüfst du mit Software, einem Kabeltausch, einer Sichtkontrolle und einem USB-Leistungsmesser, ob dein Android-Ladegerät die richtige Leistung liefert."
listSummary: "laden, akku und android"
hub: "charging"
sourceNumber: 44
order: 8
tags: ["laden","akku","android","ratgeber","hardware"]
locale: "de"
draft: false
---
Ein Ladegerät kann mechanisch passen und beim Laden trotzdem versagen. USB-C sagt dir nur, dass der Stecker passt. Es verrät nicht, ob sich Netzteil, Kabel und Smartphone auf Schnellladen geeinigt haben.

Android 17 ändert an diesem Grundproblem nichts. Es gibt weiterhin keine universelle Android-Anzeige mit der Meldung: „Dieses Ladegerät liefert gerade 23,4 W.“ Du musst die Leistung ableiten oder richtig messen.

## Lies zuerst die winzige Ausgangsangabe

Beginne mit dem langweiligen Teil und sieh dir das Netzteil an. Drehe es um und suche nach der Zeile mit den Ausgangswerten. Dort kann zum Beispiel 5 V/3 A, 9 V/2,22 A oder 20 V/3,25 A stehen. Multipliziere Volt mit Ampere, um die Leistung in Watt zu erhalten. Ein Profil mit 9 V/2,22 A entspricht ungefähr 20 W. 20 V/3,25 A ergeben 65 W.

Ein einfaches USB-A-Netzteil nennt möglicherweise nur 5 V/1 A oder 5 V/2 A. Das sind 5 W oder 10 W, für ein modernes Smartphone also langsam. Ein USB-C-PD-Ladegerät führt in der Regel mehrere Spannungsstufen und eine maximale Leistung wie 25 W, 45 W, 65 W oder mehr auf.

Fehlen sämtliche Angaben, solltest du misstrauisch werden. Gute Netzteile bekannter Hersteller tragen ihre Ausgangswerte irgendwo auf dem Gehäuse, selbst wenn du zum Lesen eine Taschenlampe brauchst.

## Nutze eine App für einen schnellen Test

Android stellt den Akkustrom und weitere Akkudaten über System-APIs bereit. Apps können damit abschätzen, was am Akku ankommt. Ampere und AccuBattery sind verbreitete Möglichkeiten für einen solchen Schnelltest.

Schließe das Ladegerät an, öffne die App und warte 20 bis 30 Sekunden, bis sich der Messwert stabilisiert. Stelle die Displayhelligkeit niedrig ein, beende anspruchsvolle Apps und teste bei einem Akkustand zwischen 20 % und 70 %. Nahe am oberen Ende reduziert das Smartphone die Ladeleistung. Ein Test bei 94 % lässt deshalb auch ein gutes Ladegerät schlechter aussehen.

Interpretiere den Wert vorsichtig. Die App zeigt den Netto-Akkustrom und nicht die exakte Leistung, die das Netzteil aus der Steckdose liefert. Gleichzeitig verbraucht das Smartphone Energie, die Ladeelektronik verliert einen Teil als Wärme, und verschiedene Geräte melden den Akkustrom unterschiedlich. Bei manchen Smartphones ist die Anzeige begrenzt, verzögert oder schlicht wenig nützlich.

Nutze App-Messungen für Vergleiche, nicht als gerichtsfesten Beweis. Zeigt ein Kabel am selben Netzteil 400 mA und ein anderes 2.400 mA, hast du etwas gelernt. Meldet eine App bei einem 30-W-Ladegerät nur 18 W, bedeutet das nicht automatisch, dass das Ladegerät defekt ist.

## Tausche das Kabel, bevor du das Netzteil verdächtigst

Kabel gehen oft unauffällig kaputt. Sie übertragen weiterhin Strom und wirken deshalb funktionstüchtig, doch das Smartphone fällt auf einen langsamen Lademodus zurück, weil das Kabel den erwarteten Strom nicht tragen oder das passende Profil nicht aushandeln kann.

Teste mit einem Kabel, von dem du sicher weißt, dass es funktioniert. Das mit dem Smartphone gelieferte Kabel ist ein guter Anfang. Ein zertifiziertes USB-C-Kabel eines seriösen Zubehörherstellers eignet sich ebenfalls. Ein dünnes altes Kabel aus einer Schublade beweist dagegen wenig.

Schäden entstehen häufig nahe den Steckern. Verbindet und trennt sich das Smartphone, wenn du das Kabel bewegst, oder sitzt der Stecker in mehreren Geräten locker, ersetze das Kabel. Dafür lohnt sich keine weitere Stunde Fehlersuche.

## Nutze für echte Messwerte einen USB-Leistungsmesser

Ein zwischengeschalteter USB-C-Leistungsmesser liefert die saubersten Ergebnisse. Er sitzt zwischen Ladegerät und Smartphone und zeigt Spannung, Stromstärke und Leistung auf einem eigenen Display an. Bessere Geräte zeigen außerdem Details zu USB Power Delivery, etwa das ausgehandelte Spannungsprofil und ob PPS aktiv ist.

Das ist wichtig, weil ein Smartphone nicht unbedingt die maximale Leistung des Ladegeräts anfordert. Ein 65-W-Netzteil an einem Smartphone, das höchstens 25 W akzeptiert, sollte in der Spitze ungefähr 25 W liefern und nicht 65 W. Das ist normal.

Verwende beim Vergleich mehrerer Netzteile dasselbe Kabel. Möchtest du Kabel vergleichen, nutze dasselbe Netzteil. Ändere immer nur eine Sache, sonst werden die Ergebnisse unbrauchbar.

Ein Leistungsmesser erkennt auch Kabelprobleme, die eine App nur schlecht sichtbar macht. Kann das Netzteil 9 V bereitstellen, während das Smartphone immer wieder auf 5 V zurückfällt, liegt eher ein Problem bei der Aushandlung vor als nur ein niedriger Akkustrom.

## Achte auf sichtbare und hörbare Warnzeichen

Ein Ladegerät darf beim Schnellladen warm werden. Es sollte nicht so heiß werden, dass du es kaum noch anfassen kannst.

Achte außerdem auf Brummen, Brandgeruch, gerissenes Kunststoffgehäuse, verbogene Steckerstifte, Schmorspuren, lockere USB-Buchsen oder ein Kabelende, das im Smartphone wackelt. Auch ein ständig unterbrochener Ladevorgang ist ein schlechtes Zeichen. Flackert das Ladesymbol immer wieder an und aus, benutze Kabel oder Netzteil nicht weiter, bis du die Ursache eingegrenzt hast.

Bei billigen Fälschungen würde ich kein Risiko eingehen. Moderne Smartphones haben Schutzschaltungen, aber instabile Spannung und schlechte Isolierung bleiben gefährlich. Ein paar Euro Ersparnis bei einem No-Name-Netzteil sind das nicht wert.

## Achte auf das Schnellladeprotokoll

Ein Ladegerät kann technisch einwandfrei sein und trotzdem schlecht zu deinem Smartphone passen. Google Pixel und viele Samsung-Modelle verwenden USB-C Power Delivery. Für die höchste Samsung-Super-Fast-Charging-Leistung ist außerdem PPS erforderlich. OnePlus- und OPPO-Smartphones benötigen für ihre höchsten Geschwindigkeiten häufig SUPERVOOC-kompatible Ladegeräte und Kabel. Auch Xiaomi HyperCharge hat eigene Anforderungen.

Passen die Protokolle nicht zusammen, fällt das Smartphone meist auf einen langsameren USB-Modus zurück. Es geht dadurch nicht kaputt. Es lädt nur nicht besonders schnell.

Ein 65-W-Laptop-Ladegerät kann ein Smartphone mit maximal 25 W sicher laden, weil das Smartphone nur die Leistung anfordert, die es nutzen kann. Die höhere Nennleistung bedeutet lediglich, dass das Ladegerät mehr Reserve für Laptops, Tablets und andere Geräte besitzt.

## Wann du es ersetzen solltest

Ersetze das Ladegerät, wenn es überhitzt, ungewöhnlich riecht, laut brummt, ein beschädigtes Gehäuse hat oder mit mehreren guten Kabeln und mehreren Geräten instabile Ergebnisse liefert. Wandert das Problem mit dem Kabel, ersetze das Kabel.

Funktionieren beide an anderen Geräten normal, begrenzt möglicherweise dein Smartphone die Ladeleistung. Gründe dafür können ein heißer Akku, ein verschmutzter Anschluss, ein fast voller Akku oder ein nicht unterstütztes Schnellladeprotokoll sein.
