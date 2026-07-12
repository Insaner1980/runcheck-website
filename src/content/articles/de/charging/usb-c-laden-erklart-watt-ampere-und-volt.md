---
title: "USB-C-Laden erklärt: Watt, Ampere und Volt"
description: "Meta-Beschreibung: Was Watt, Ampere und Volt beim Laden eines Android-Smartphones bedeuten, wie USB Power Delivery funktioniert und warum nicht jedes USB-C-Ladegerät die gleiche Geschwindigkeit liefert."
listSummary: "laden, akku und android"
hub: "charging"
sourceNumber: 46
order: 10
tags: ["laden","akku","android","ratgeber","hardware"]
locale: "de"
draft: false
---
Auf die Wattzahl kommt es an. Volt und Ampere erklären, wie das Ladegerät diese Leistung erreicht, aber die Wattzahl zeigt dir, wie viel Leistung verfügbar ist.

Ein Ladegerät mit 9 V bei 2 A liefert 18 W. Eines mit 20 V bei 3 A liefert 60 W. Die Rechnung ist einfach: Volt mal Ampere ergibt Watt.

Einfach. Bis die USB-C-Aushandlung ins Spiel kommt.

## Was die Angaben auf dem Ladegerät bedeuten

Die meisten USB-C-Ladegeräte führen mehrere mögliche Ausgangswerte auf. Zum Beispiel:

- 5 V/3 A = 15 W
- 9 V/3 A = 27 W
- 15 V/3 A = 45 W
- 20 V/3,25 A = 65 W

Das sind die Leistungsprofile, die das Ladegerät anbieten kann. Das Smartphone nimmt nicht automatisch das höchste davon. Es fordert ein unterstütztes Profil an, und das Ladegerät stellt sich auf diesen Wert ein.

Darum beschädigt ein 100-W-Laptop-Ladegerät kein Smartphone, das nur mit 18 W lädt. Das Smartphone fordert keine 100 W an. Es wählt ein niedrigeres Profil oder fällt auf einfaches Laden zurück, wenn sich Ladegerät und Smartphone nicht auf einen besseren Modus einigen können.

## So funktioniert die Aushandlung mit USB Power Delivery

USB Power Delivery, meist USB PD genannt, ist der wichtigste offene Schnellladestandard für viele Android-Smartphones, Tablets, Laptops und Zubehörgeräte.

Wenn du ein USB-C-Kabel anschließt, kommunizieren Ladegerät und Smartphone über die Configuration-Channel-Pins. Das Ladegerät meldet seine unterstützten Power Data Objects, kurz PDOs. Das Smartphone wählt eines davon aus. Danach liefert das Ladegerät Spannung und Strom innerhalb der vereinbarten Grenzen.

Ein 45-W-USB-PD-Ladegerät kann beispielsweise 5 V/3 A, 9 V/3 A, 15 V/3 A und 20 V/2,25 A anbieten. Ein Smartphone mit Unterstützung für 25-W-Laden wählt vielleicht ein Profil in der Nähe von 9 V. Ein Laptop kann vom gleichen Netzteil ein 20-V-Profil anfordern.

Das Ladegerät drückt die Leistung nicht in das Smartphone. Das Smartphone nimmt nur so viel ab, wie es verwenden kann.

## Warum PPS wichtig ist

Normales USB PD arbeitet mit festen Spannungsstufen wie 5 V, 9 V, 15 V und 20 V. PPS steht für Programmable Power Supply. Damit kann das Smartphone innerhalb des vom Ladegerät angegebenen Bereichs kleinere Änderungen an Spannung und Strom anfordern.

Das ist wichtig, weil ein Lithium-Ionen-Akku während des gesamten Ladevorgangs nicht immer die gleiche Spannung benötigt. Je voller der Akku wird, desto stärker ändern sich die idealen Ladebedingungen. Bei festen Spannungsstufen muss mehr Umwandlung im Smartphone stattfinden, und dabei entsteht Wärme. Mit PPS kann das Ladegerät seine Ausgangswerte genauer an den aktuellen Bedarf des Smartphones anpassen.

Samsungs Super Fast Charging basiert auf USB PD mit PPS. Auch Pixel-Smartphones unterstützen PPS. Ein normales USB-PD-Ladegerät ohne PPS kann trotzdem funktionieren, erreicht bei diesen Geräten aber möglicherweise nicht den besten Lademodus.

## Quick Charge, VOOC, SUPERVOOC und HyperCharge

USB PD kommt einer gemeinsamen Ladesprache für Android am nächsten. Es ist aber nicht die einzige.

Qualcomm Quick Charge war auf Android-Smartphones viele Jahre weitverbreitet. Neuere Quick-Charge-Versionen überschneiden sich stärker mit USB PD, ältere Netzteile und Smartphones können sich jedoch weiterhin anders verhalten als eine reine USB-PD-Kombination.

OPPO VOOC und OnePlus SUPERVOOC verfolgen eine andere Strategie. Sie arbeiten häufig mit hoher Stromstärke über ein kompatibles Ladegerät und Kabel, damit weniger Wärme im Smartphone entsteht. Deshalb können diese Systeme sehr schnell sein, reagieren aber auch empfindlich auf nicht passendes Zubehör. Laut OnePlus erfordert SUPERVOOC-Schnellladen ein SUPERVOOC-kompatibles Smartphone und Datenkabel.

Xiaomi HyperCharge verhält sich bei vielen Modellen ähnlich markenspezifisch. Ein normales USB-C-PD-Ladegerät lädt diese Smartphones in der Regel, für die beworbene Höchstleistung werden aber oft das Originalzubehör oder ein mit dem jeweiligen Protokoll kompatibles Ladegerät und Kabel benötigt.

Auch Samsungs Bezeichnungen können verwirren. Adaptive Fast Charging bei älteren Samsung-Smartphones ist nicht dasselbe wie Super Fast Charging bei neueren Geräten. Der neuere Modus nutzt USB PD mit PPS.

## Auch die Kabelangabe begrenzt die Geschwindigkeit

Das Kabel ist Teil der Aushandlung. Wer es nur als einfachen Draht betrachtet, landet schnell bei unerklärlichen Ladeproblemen.

Viele USB-C-Kabel sind für 3 A ausgelegt. Bei 20 V reicht das für 60 W. Für höhere Leistungen ist ein 5-A-Kabel mit E-Marker-Chip erforderlich, damit Ladegerät und Gerät erkennen, dass das Kabel den Strom sicher übertragen kann.

Die Kennzeichnungen der USB-IF werden dabei verständlicher. Zertifizierte USB-C-Kabel sind mit Leistungsangaben wie 60 W oder 240 W gekennzeichnet. Schnellere Datenkabel können zusätzlich ein Logo für die Datenrate tragen. Das ist deutlich einfacher, als einen langen USB-Versionsnamen entschlüsseln zu müssen.

Für Smartphones reicht ein gutes 60-W-USB-C-Kabel meistens aus. Für Laptops, Tablets und leistungsstarke Ladegeräte kann ein 240-W-Kabel sinnvoll sein. Bei proprietären Ladesystemen für Smartphones kann das passende Kabel trotzdem wichtiger sein als die aufgedruckte Wattzahl.

## Welches Ladegerät solltest du kaufen?

Für viele Android-Smartphones mit USB PD oder PPS reicht ein USB-C-PD-PPS-Ladegerät mit 25 bis 30 W. Damit erreichst du bei den meisten Pixel-Modellen und vielen Samsung-Geräten ihre üblichen Schnellladegeschwindigkeiten.

Unterstützt dein Samsung-Modell 45-W-Laden, solltest du ein PPS-Ladegerät wählen, das ausdrücklich das benötigte 45-W-Profil unterstützt. Bei OnePlus, OPPO oder Xiaomi brauchst du für die beworbene Höchstgeschwindigkeit das für das jeweilige Protokoll vorgesehene Ladegerät und Kabel.

Mehr Watt zu kaufen, als dein Smartphone unterstützt, ist unproblematisch. Das beschädigt das Gerät nicht und kann praktisch sein, wenn dasselbe Netzteil auch einen Laptop oder ein Tablet lädt. Du solltest nur nicht erwarten, dass ein 100-W-Ladegerät ein 25-W-Smartphone viermal schneller lädt.

Der unspektakulärste Rat ist zugleich der beste: Kaufe das richtige Protokoll, statt nur der größten Zahl hinterherzulaufen.
