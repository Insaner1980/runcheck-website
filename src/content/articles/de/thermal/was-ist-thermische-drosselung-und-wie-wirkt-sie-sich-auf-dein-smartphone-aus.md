---
title: "Was ist thermische Drosselung und wie wirkt sie sich auf dein Smartphone aus?"
description: "Warum fühlt sich ein schnelles Smartphone mitten in einem Spiel, Videoanruf oder einer längeren Kameraaufnahme plötzlich langsam an? Meist steckt thermische Drosselung dahinter. Das Gerät ist heiß, deshalb reduzieren Android und der Hersteller die Leistung, bevor die Wärme zum Sicherheitsproblem wird."
listSummary: "temperatur, warme und android"
hub: "thermal"
sourceNumber: 56
order: 4
tags: ["temperatur","warme","android","fehlerbehebung","hardware"]
locale: "de"
draft: false
---
## Was thermische Drosselung bedeutet

Es handelt sich um eine kontrollierte Verlangsamung. Das Smartphone senkt die Geschwindigkeit von CPU oder GPU, dimmt das Display, reduziert die Ladeleistung, begrenzt die Funkaktivität oder drosselt andere stromintensive Vorgänge, damit die Temperatur wieder sinkt.

Das ist für sich genommen kein Fehler. Das Smartphone wählt bewusst ein niedrigeres Leistungsniveau, damit Akku, Display, Modem und SoC innerhalb der Sicherheitsgrenzen des Herstellers bleiben.

Du bemerkst diesen Kompromiss an Bildaussetzern, langsameren App-Starts, gedimmter Helligkeit, eingeschränkten Kamerafunktionen, langsamerem Laden oder an einem Spiel, das flüssig beginnt und später ruckelt. Android fragt nicht um Erlaubnis. Es passiert einfach.

## Die thermischen Stufen von Android

Android bietet seit Android 10 öffentliche APIs für den thermischen Status. Apps können auf unterstützten Geräten über `PowerManager` vereinfachte Schweregrade auslesen:

- **None:** Keine thermische Drosselung.
- **Light:** Leichte Drosselung, die die normale Nutzung kaum beeinflusst.
- **Moderate:** Eine gewisse Drosselung, das Gerät bleibt meist gut nutzbar.
- **Severe:** Starke Drosselung mit klar spürbaren Leistungseinbußen.
- **Critical:** Die Plattform hat die Leistungsaufnahme bereits stark reduziert.
- **Emergency:** Wichtige Komponenten können sich wegen der Temperatur abschalten.
- **Shutdown:** Das Gerät muss sofort herunterfahren.

Diese Bezeichnungen sind standardisiert. Die Temperaturgrenzen dahinter sind es nicht. Ein Pixel, ein Galaxy S Ultra, ein Xiaomi-Gaming-Smartphone und ein günstiges Motorola können Wärme unterschiedlich auf diese Stufen abbilden, weil Kühlsystem, Akku, Rahmen, Display und Sicherheitsreserven verschieden sind.

Genau deshalb sind präzise Temperaturangaben schwierig. Ein Smartphone kann bei einem Akkutemperaturwert drosseln, den ein anderes beim Laden noch akzeptiert.

## Thermal Headroom warnt früher

Der thermische Status zeigt die aktuelle Stufe. Thermal Headroom zeigt, wie nah die aktuelle Belastung an einer starken Drosselung liegt.

Android beschreibt Thermal Headroom in seiner Spiele-Dokumentation als Wert von 0,0 bis 1,0. Ein Wert von 1,0 bedeutet, dass das Gerät bei dieser Belastung `THERMAL_STATUS_SEVERE` erreicht hat oder kurz davorsteht. Spiele können dieses Signal nutzen, um Bildrate oder Grafikqualität zu reduzieren, bevor der Spieler die Verlangsamung bemerkt.

Es gibt einen Haken: Die Unterstützung unterscheidet sich je nach Gerät. Manche Smartphones liefern nur begrenzte Daten, andere geben `NaN` zurück, wenn zu häufig abgefragt wird, und wieder andere ordnen Headroom-Werte wegen ihres thermischen Designs anders ein. Eine gute Diagnose behandelt Thermal Headroom deshalb als Signal, nicht als universelles Thermometer.

runcheck verwendet die öffentlichen thermischen Android-Signale, sofern das Gerät sie bereitstellt. Das ist wichtig, weil normale Apps für einen nutzerseitig sichtbaren Temperaturstatus nicht von privaten sysfs-Temperaturdateien abhängen sollten.

## Was die Drosselung auslöst

Lange Spiele-Sitzungen sind der offensichtliche Fall. Ein 3D-Spiel kann gleichzeitig CPU, GPU, Display, Lautsprecher, Netzwerk und Haptik beanspruchen.

Auch die Kamera ist ein typischer Auslöser. Aufnahmen in 4K oder 8K, HDR-Verarbeitung, lange Videoclips und direkte Sonneneinstrahlung können ein Smartphone schnell erwärmen. Kamera-Apps können die Qualität reduzieren oder die Aufnahme stoppen, wenn das Gerät zu warm wird.

Navigation erwärmt das Smartphone langsamer, ist aber tückisch. Das Display bleibt an, GPS läuft, das Modem lädt Kartendaten und das Smartphone steckt vielleicht in einer warmen Autohalterung. Kommt direkte Sonne durch die Windschutzscheibe hinzu, beginnt die Drosselung schneller.

Ein leicht gemachter Fehler ist, das Smartphone während intensiver Nutzung zu laden. Schnellladen erzeugt bereits allein Wärme. Kommen ein Spiel, Videoanruf, Hotspot oder eine Kameraaufnahme hinzu, kann das Smartphone schlechter abkühlen.

Auch schwacher Empfang belastet das Modem. Ein Smartphone, das in einem Gebiet mit schlechter Abdeckung ständig um eine 5G-Verbindung kämpft, kann selbst bei ausgeschaltetem Display warm werden.

Große Systemupdates können vorübergehend ebenfalls Wärme erzeugen. Android 17 ist inzwischen zunächst für die meisten unterstützten Pixel-Geräte verfügbar. Andere berechtigte Android-Smartphones erhalten die angepassten Herstellerversionen später. Nach jedem großen Update können App-Optimierung und Hintergrundsynchronisierung das Smartphone ein oder zwei Tage lang erwärmen.

## Thermische Drosselung oder Akku-Drosselung

Thermische Drosselung ist vorübergehend. Beende die belastende Aufgabe, lass das Smartphone abkühlen und die Leistung kehrt zurück.

Eine Leistungssteuerung wegen des Akkuzustands ist etwas anderes. Mit zunehmendem Alter steigt der Innenwiderstand des Akkus und die Abgabe hoher Leistung wird schwieriger. Manche Smartphones reduzieren Ladespannung, Ladegeschwindigkeit oder anderes Verhalten, damit ein alternder Akku stabil bleibt. Google dokumentiert beispielsweise die Funktion Optimierung des Akkuzustands für Pixel 6a und neuere Modelle. Auf unterstützten Geräten passt sie die maximale Akkuspannung ab 200 Ladezyklen stufenweise an.

Das ist nicht dasselbe wie ein Spiel, das nach 20 Minuten langsam wird. Beim einen geht es um Wärme unter Last, beim anderen um die Steuerung eines alternden Akkus.

Auch die Lösung ist unterschiedlich. Wärme erfordert Abkühlung und eine geringere Belastung. Ein verschlissener Akku muss ersetzt oder beim Laden vorsichtiger behandelt werden.

## Woran du die Drosselung erkennst

Das deutlichste Zeichen ist eine Leistung, die während der Nutzung schlechter wird. Ein Spiel beginnt mit 60 fps, dann fällt die Bildrate ab. Die Kamera nimmt zunächst normal auf und zeigt dann eine Hitzewarnung. Das Display wird dunkler, obwohl du die Helligkeit nicht verändert hast. Der Ladevorgang wird pausiert oder deutlich langsamer.

Auch die Stelle der Wärme kann einen Hinweis geben. Wärme nahe der Kamera deutet häufig auf den SoC hin. Wärme in der Mitte der Rückseite passt eher zum Akku oder zur Spule für kabelloses Laden. Wärme am USB-C-Anschluss kann auf Kabel, Ladegerät oder Ladeschaltung hindeuten.

Apps, die den thermischen Android-Status auslesen, machen das Geschehen greifbarer. Ein Wechsel von None zu Light und dann Moderate während eines Spiels ist zu erwarten. Severe, Critical oder wiederholte Ereignisse auf Shutdown-Niveau bei normaler Nutzung sind es nicht.

## So reduzierst du die Drosselung

Verringere die Belastung, bevor das Smartphone es für dich tun muss.

Reduziere in Spielen zuerst die Bildrate. Das bringt oft am meisten. Senke danach Auflösung, Schatten, Effekte und Texturqualität. Eine mittlere Voreinstellung mit stabiler Bildrate fühlt sich normalerweise besser an als eine Ultra-Einstellung, die nach zehn Minuten gedrosselt wird.

Nimm bei intensiver Nutzung die Hülle ab. Rückseite und Rahmen sind Teil des Kühlsystems.

Nutze WLAN statt Mobilfunk, wenn der Empfang schwach ist. Schlechte Mobilfunkabdeckung kann dafür sorgen, dass das Smartphone bei einer gewöhnlichen Sitzung heiß wird.

Meide direkte Sonne. In einer sonnigen Autohalterung kann das Smartphone selbst bei mäßiger Belastung drosseln.

Verwende während intensiver Nutzung kein Schnellladen. Zieh den Stecker oder nutze ein langsameres Ladegerät, wenn du weiterspielen musst.

Halte Apps und System aktuell. Hersteller passen das thermische Verhalten mit Updates an, und auch ein fehlerhaftes App-Update kann bis zu einer Korrektur Wärme verursachen.

## Wann Drosselung auf ein größeres Problem hindeutet

Drosselung während eines anspruchsvollen Spiels ist normal. Drosselung beim Schreiben einer Nachricht auf einem kühlen Tisch ist es nicht.

Wenn das Smartphone im Leerlauf heiß wird, prüfe Akkunutzung, Signalstärke, kürzlich installierte Apps und den abgesicherten Modus. Wird es auch dort heiß oder ist der Akku aufgebläht, entlädt sich plötzlich oder schaltet sich trotz Restladung ab, geh von einem Hardware- oder Akkuproblem aus.

Ein Akkuzustand unter 80 % ist bei Smartphones, die diesen Wert anzeigen, eine verbreitete Schwelle für einen Austausch. Beim Pixel wird eine Kapazität unter 80 % auf unterstützten Modellen als Reduziert angezeigt. Samsung Members verwendet für den Akkustatus die Bezeichnungen Normal, Schwach oder Schlecht. Diese Angaben sind hilfreicher, als allein anhand der Wärme zu raten.

## Fazit

Das thermische Schutzsystem deines Smartphones ist nicht der Feind. Du kannst die Drosselung verringern, indem du die Belastung senkst, die Kühlung verbesserst, heiße Umgebungen meidest und Schnellladen nicht mit intensiver Nutzung kombinierst. Tritt sie schon bei leichter Nutzung auf, solltest du sie aber nicht ignorieren. Dann kann eine App, schwacher Empfang, ein Ladegerät oder ein verschlissener Akku dahinterstecken.

*Meta-Beschreibung: Die integrierte thermische Drosselung von Android schützt dein Smartphone vor Hitze. Erfahre mehr über die thermischen Android-Stufen, Thermal Headroom, häufige Auslöser und sichere Gegenmaßnahmen.*
