---
title: "Warum dein Android-Smartphone überhitzt und wie du seine Temperatur prüfst"
description: "So prüfst du die Temperatur eines Android-Smartphones, ordnest sichere Akkutemperaturen ein und verstehst, wie Android 17, Pixel-Diagnose, Samsung Members, Laden, Apps und Signalstärke Überhitzung beeinflussen."
listSummary: "Prüfe die Temperatur und finde heraus, warum dein Android-Smartphone überhitzt."
hub: "thermal"
sourceNumber: 53
order: 1
tags: ["temperatur","warme","android","fehlerbehebung","hardware"]
locale: "de"
draft: false
---
*Ein Android-Smartphone kann aus banalen Gründen, aus ernsten Gründen oder scheinbar ganz ohne Grund heiß werden. Entscheidend ist, welche Zahl du betrachtest und ob diese Zahl überhaupt aussagekräftig ist.*

## Prüfe zuerst die Temperatur

Beginne mit den integrierten Werkzeugen. Sie wirken weniger spektakulär als Sensor-Apps, geben aber seltener eine Genauigkeit vor, die das Smartphone gar nicht bereitstellt.

Android 17 wird zuerst für unterstützte Google-Pixel-Geräte verteilt. Andere Android-Marken folgen später nach ihren eigenen Update-Zeitplänen. Öffne auf dem Pixel 6a und neueren Modellen **Einstellungen > Akku** und wähle anschließend **Akkudiagnose > Smartphone ist sehr warm**. Das Pixel-Werkzeug zeigt nicht immer eine genaue Akkutemperatur an. Stattdessen gibt es gerätespezifische Hinweise, die sich am aktuellen thermischen Zustand orientieren.

Für den Akkuzustand öffnest du auf neueren Pixel-Modellen den Bereich Akku und wählst **Akkuzustand**. Laut Googles aktueller Supportseite stehen Status und Kapazitätsanzeige ab dem Pixel 8a zur Verfügung, nicht jedoch auf dem Pixel Tablet. Ältere Modelle wie Pixel 6a, Pixel 7, Pixel 7a, Pixel 8 und Pixel 8 Pro zeigen diesen Akkuzustand nicht an.

Auf Samsung-Galaxy-Smartphones erfolgt die offizielle Prüfung des Akkuzustands über die App Samsung Members. Öffne dort **Support > Telefondiagnose > Akkustatus**. Je nach App-Version startest du die Telefondiagnose zunächst über **Jetzt beginnen**. Samsung bewertet das Ergebnis als Normal, Schwach oder Schlecht. Einige Galaxy-Modelle zeigen außerdem nützliche Angaben zum Akku und zur Gerätewartung in den Einstellungen, doch die genauen Menünamen verändern sich zwischen One UI-Versionen, Regionen und Modellen.

Der alte Wählcode `*#*#4636#*#*` ist weiterhin einen Versuch wert, sollte aber nicht die Grundlage der gesamten Anleitung sein. Auf manchen Android-Smartphones öffnet er ein Testmenü mit Informationen zu Telefon, WLAN, Nutzung und teilweise zum Akku. Auf vielen aktuellen Geräten von Samsung, Xiaomi und Google fehlt der Akkubereich oder der Code bewirkt gar nichts. Das ist normal und bedeutet nicht, dass dein Smartphone defekt ist.

Eine Diagnose-App ist die Ausweichlösung, wenn der Hersteller nicht genügend Daten anzeigt. Gute Apps zeigen Akkutemperatur, Ladestrom, den thermischen Android-Status und den Verlauf. Sei bei exakten Angaben zur CPU-Temperatur vorsichtig. Android stellt normalen Apps keine universelle, saubere Schnittstelle für die CPU-Temperatur bereit. Manche Apps lesen herstellerspezifische Sensoren aus, wenn das Gerät es erlaubt. Andere zeigen nur die Akkutemperatur. Einige schätzen den Wert.

runcheck ist nützlich, wenn dir der Verlauf wichtiger ist als eine einzelne Zahl. Die App verbindet thermische Messwerte mit Akkuzustand, Netzwerkstatus, Speicherbelastung und Zustandsverlauf. Dadurch erkennst du, ob die Wärme mit dem Laden, schlechtem Empfang, einer Hintergrund-App oder einem längerfristigen Muster begonnen hat.

## Was die Zahl bedeutet

Die Akkutemperatur ist nicht dasselbe wie die Oberflächentemperatur. Ein Smartphone kann sich warm anfühlen, weil der Rahmen Wärme vom Prozessor ableitet, während der Akku noch in einem sicheren Bereich liegt. Auch das Gegenteil ist möglich, besonders beim Laden.

Verwende diese Bereiche als praktische Orientierung und nicht als Laborregel:

- **20-35 °C:** Normal bei alltäglicher Nutzung. Nachrichten, Surfen und leichtes Streaming sollten meist in diesem Bereich bleiben, sofern der Raum nicht heiß ist.
- **35-40 °C:** Warm, aber bei Navigation, Videoanrufen, Gaming, 5G-Downloads oder Laden üblich.
- **40-45 °C:** Hier solltest du genauer hinsehen. Das Smartphone kann das Display dimmen, langsamer laden oder die Leistung reduzieren.
- **Über 45 °C:** Füge keine weitere Wärme hinzu. Trenne das Ladegerät, schließe anspruchsvolle Apps, nimm die Hülle ab und bringe das Gerät aus der Sonne.
- **Etwa 50 °C oder mehr:** Behandle das als Überhitzung, besonders wenn das Smartphone eine Warnung zeigt, sich abschaltet oder unangenehm heiß in der Hand liegt.

Hersteller beschreiben sichere Nutzung gewöhnlich anhand der Umgebungstemperatur. Samsung nennt 0-35 °C (32-95 °F) als optimalen Nutzungsbereich für Galaxy-Geräte, und Google gibt denselben Umgebungstemperaturbereich für Pixel-Sicherheitshinweise an. Interne Akkumesswerte können unter Last vorübergehend höher liegen. Vor allem wiederholte Wärme lässt den Akku schneller altern.

## Woher die Wärme kommt

Die meiste Wärme im Smartphone entsteht an vier Stellen: SoC, Akku, Funktechnik und Umgebung.

CPU und GPU werden warm, wenn sie hart arbeiten. Gaming, 4K-Videoaufnahmen, Bildverarbeitung, Videoschnitt, Navigation und App-Installationen belasten die Chips stark genug, dass sich das Gerät in der Nähe der Kamera oder an der oberen Kante heiß anfühlen kann. Kann die Wärme nicht schnell genug entweichen, reduziert Android die Leistung. Das ist thermische Drosselung.

Der Akku erwärmt sich beim Laden und bei hoher Entladung. Schnellladen erzeugt mehr Wärme als ein langsames Ladegerät mit 5 W oder 10 W, weil der Akku in kürzerer Zeit mehr Leistung aufnimmt. Die Nutzung während des Schnellladens ist die klassische Doppelbelastung: Ladewärme plus Prozessorwärme.

Die Funktechnik spielt eine größere Rolle, als viele denken. Bei schwachem Mobilfunksignal muss das Modem stärker arbeiten. Ein Smartphone kann im Keller mit einem Balken im Leerlauf wärmer werden als dasselbe Gerät auf einem Schreibtisch mit starkem WLAN. Verschwindet die Wärme im Flugmodus, war die Suche nach einem Signal wahrscheinlich ein Teil der Ursache.

Die Umgebung bestimmt den Ausgangspunkt. Ein Smartphone in direkter Sonne, in einem heißen Auto, unter einem Kissen oder in einer dicken Gummihülle hat von Anfang an weniger Spielraum zum Kühlen. Smartphones haben keine Lüfter. Sie geben Wärme über Rahmen, Display und Rückseite ab.

## Kabelloses Laden braucht einen eigenen Hinweis

Kabelloses Laden ist bequem, verzeiht aber weniger als ein Kabel. Qi- und Qi2-Ladegeräte arbeiten mit magnetischer Induktion, weshalb die Ausrichtung wichtig ist. Qi2 verbessert sie durch Magnete. Qi2 25W erhöht die zertifizierte kabellose Leistung über die ältere Grenze von 15 W hinaus, doch die Wärme muss weiterhin irgendwohin.

Ein gut ausgerichtetes Qi2-Ladegerät oder ein Ladegerät im Stil des Pixel Stand ist normalerweise unproblematisch. Ein schlecht ausgerichtetes Pad, eine dicke Hülle, ein Metallring-Zubehör oder ein warmer Raum kann aus einem normalen Ladevorgang einen heißen machen. Google empfiehlt Pixel-Nutzern bei Problemen mit langsamem kabellosem Laden ausdrücklich, die Hülle abzunehmen, das Gerät aus direkter Sonne zu bringen, die Ausrichtung zu prüfen und darauf zu achten, dass das Ladegerät den Luftstrom nicht behindert.

Die praktische Regel ist einfach: Wenn kabelloses Laden dein Smartphone jede Nacht heiß macht, ändere den Aufbau. Lade ohne Hülle, verwende ein zertifiziertes Ladegerät, richte es korrekt aus und aktiviere ein Ladelimit von 80 %, falls dein Modell eines anbietet. Gelegentliche Wärme ist keine Katastrophe. Warm plus 100 % plus mehrere Stunden auf dem Pad ist die schlechtere Gewohnheit.

## Integrierte Prüfungen, bevor du etwas installierst

Öffne den Bereich **Akkunutzung** und suche nach Apps, die Energie verbrauchen, obwohl du sie nicht verwendet hast. Eine Navigations-App nach einer Fahrt ergibt Sinn. Eine Shopping-App, die über Nacht 18 % verbraucht, nicht.

Starte das Smartphone neu. Wirklich. Ein festhängender Dienst kann die CPU stundenlang wach halten, und ein Neustart beendet diesen Zustand schneller als die Suche in jedem einzelnen App-Menü.

Prüfe aktuelle Updates. Nach einem großen Android-Update, derzeit etwa Android 17 auf Pixel-Geräten und später den jeweiligen Hersteller-Versionen, kann ein Smartphone einen Tag lang warm laufen. Apps werden optimiert, Suchindizes neu aufgebaut und Cloud-Daten synchronisiert. Verschwindet die Wärme nach 24-48 Stunden, waren wahrscheinlich diese Nacharbeiten die Ursache.

Probiere den abgesicherten Modus aus, wenn das Smartphone selbst nach einem Neustart wieder heiß wird. Halte auf einem Pixel die für dein Modell vorgesehene Tastenkombination gedrückt und tippe dann länger auf **Ausschalten** oder **Neu starten**, bis die Abfrage für den **Abgesicherten Modus** erscheint. In diesem Modus werden heruntergeladene Apps deaktiviert. Bleibt das Gerät dort kühl, deutet das auf eine Drittanbieter-App hin.

## Erweiterte Prüfungen mit ADB

Wenn du mit ADB vertraut bist, kannst du die thermischen Zonen von einem Computer aus prüfen:

```bash
adb shell for z in /sys/class/thermal/thermal_zone*; do echo "$z"; cat "$z/type"; cat "$z/temp"; done
```

Viele Werte werden in Tausendstel Grad Celsius ausgegeben, sodass `38000` für 38 °C steht. Schwierig ist nicht das Ablesen, sondern die Zuordnung der Sensoren. Hersteller benennen thermische Zonen unterschiedlich, und manche Messwerte sind auf handelsüblichen Geräten gesperrt oder wenig hilfreich.

Für Diagnosen auf App-Ebene sind die öffentlichen thermischen Android-APIs meist sauberer. Android 10 führte über `PowerManager` Stufen für den thermischen Status ein. Neuere Versionen stellen auf unterstützten Geräten außerdem Thermal Headroom bereit. Ein Wert nahe 1,0 bedeutet, dass das Gerät unter der aktuellen Last kurz vor starker Drosselung steht.

## Häufige Fragen

### Ist es normal, dass sich ein Smartphone warm anfühlt?

Ja, beim Laden, Gaming, Navigieren, bei Videoanrufen, Hotspot-Nutzung und großen Downloads. Warm ist nicht automatisch schlecht. Heiß im Leerlauf ist der Teil, den du untersuchen solltest.

### Kann Überhitzung das Smartphone dauerhaft beschädigen?

Wiederholte Wärme schadet vor allem dem Akku. Lithium-Ionen-Akkus altern schneller, wenn sie heiß bleiben, besonders bei hohem Ladestand. Moderne Smartphones schützen sich, indem sie langsamer werden, das Laden pausieren, Funktionen deaktivieren oder sich abschalten, bevor der schlimmste Fall eintritt.

### Sollte ich alle Apps schließen?

Schließe die App, die aktiv Wärme erzeugt, etwa ein Spiel, die Kamera, einen Videoeditor oder eine Navigations-App. Wische nicht zwanghaft jede ruhende App weg. Android verwaltet den Arbeitsspeicher besser, als alte Ratschläge zu Task-Killern vermuten lassen.

### Warum wird das Smartphone beim Laden heiß?

Beim Laden entsteht Wärme im Akku. Schnellladen erzeugt mehr davon. Nutzt du das Smartphone gleichzeitig, kommen Prozessor- und Displaywärme hinzu. Wenn es bei jedem Ladebeginn heiß wird, teste ein langsameres Ladegerät, ein anderes Kabel und den Betrieb ohne Hülle.

## Fazit

Nutze zuerst die Werkzeuge des Herstellers und danach eine Diagnose-App, wenn du einen Verlauf brauchst. Wählcodes sind ein Bonus, keine Garantie. Und wenn das Smartphone eindeutig heiß ist, treibe es nicht weiter an. Entferne die Wärmequelle, lass es abkühlen und suche anschließend nach dem Muster.
