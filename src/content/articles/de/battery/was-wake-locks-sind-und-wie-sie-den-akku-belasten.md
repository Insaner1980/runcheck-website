---
title: "Was Wake Locks sind und wie sie den Akku belasten"
description: "Wake Locks erlauben Android-Apps, den Prozessor nach dem Ausschalten des Displays wach zu halten. Werden sie schlecht eingesetzt, verhindern sie stromsparende Ruhezustände und verursachen hohen Standby-Verbrauch."
listSummary: "Wake Locks erlauben Android-Apps, den Prozessor nach dem Ausschalten des Displays wach zu halten."
hub: "battery"
sourceNumber: 35
order: 25
subgroup: "Drain"
tags: ["akku","akkuverbrauch","fehlerbehebung","android","leistung"]
locale: "de"
draft: false
---
Du schläfst. Das Display deines Smartphones ist aus. Nichts wird abgespielt, nichts heruntergeladen, und trotzdem sinkt der Akkustand über Nacht um 18 %.

Genau diese Art von Verbrauch können Wake Locks verursachen. Eine Wake-Lock-Anforderung hält einen Teil des Geräts wach, obwohl Android ihn normalerweise schlafen legen würde. Das häufigste Akku-Problem ist ein partieller Wake Lock. Er hält den Prozessor aktiv, während das Display ausgeschaltet bleibt.

Wake Locks sind nicht grundsätzlich schlecht. Eine Musik-App braucht einen, damit die Wiedergabe weiterläuft. Eine Navigations-App benötigt ihn möglicherweise während einer aktiven Route. Ein vom Nutzer gestarteter Upload soll eventuell fertig werden, statt auf halbem Weg abzubrechen. Problematisch wird es, wenn eine App einen Wake Lock zu lange hält, zu häufig anfordert oder nach Abschluss der Arbeit nicht wieder freigibt.

## So funktionieren Wake Locks

Wenn sich das Display ausschaltet, versucht Android, die CPU anzuhalten und das Smartphone in stromsparende Zustände zu versetzen. Muss eine App trotzdem weiterarbeiten, kann sie über die PowerManager API einen Wake Lock anfordern. Nach Abschluss der Aufgabe gibt sie ihn wieder frei, und das Smartphone kann erneut schlafen.

Bei dieser Übergabe entstehen die Probleme.

Eine App startet vielleicht eine Hintergrundsynchronisierung, läuft in ein Netzwerk-Timeout und räumt danach nicht sauber auf. Eine andere fragt alle paar Minuten einen Server ab, statt Push-Benachrichtigungen zu verwenden. Eine Fitness-App hält Sensoren und Verarbeitung länger aktiv als nötig. Für dich sieht das Smartphone unbenutzt aus. Im Inneren ist es das nicht.

Seit dem 1. März 2026 ist das auch für Entwickler wichtiger geworden. Google Play kann die Sichtbarkeit von Apps verringern, die den Android-vitals-Grenzwert für übermäßige partielle Wake Locks überschreiten. Android vitals bewertet nicht ausgenommene partielle Wake Locks als übermäßig, wenn sie sich innerhalb von 24 Stunden auf mindestens 2 Stunden summieren und dieses Verhalten im Durchschnitt über 28 Tage mehr als 5 % der App-Sitzungen betrifft.

## Warum sich Wake-Lock-Verbrauch schwer erkennen lässt

Wake-Lock-Verbrauch versteckt sich häufig hinter Systembezeichnungen. In der Akkuansicht können **Android System**, Google Play-Dienste oder eine unklare Hintergrundnutzung erscheinen, statt den konkreten Wake Lock zu nennen, der das Problem verursacht.

Beginne trotzdem mit den Grundlagen. Öffne **Einstellungen > Akku > Akkunutzung** und prüfe, welche Apps im Hintergrund Strom verbraucht haben. Auf aktuellen Pixel-Versionen kannst du eine App öffnen und ihre **Akkunutzung der App** prüfen. Auf Samsung-Geräten gehst du zu **Einstellungen > Akku**, siehst dir den App-Verbrauch an und kontrollierst anschließend die **Grenzen der Hintergrundnutzung**.

Verliert das Smartphone bei ausgeschaltetem Display viel Ladung, ohne dass die Akkuansicht eine offensichtliche App nennt, werden Wake Locks als Ursache wahrscheinlicher.

Der alte Telefoncode `*#*#4636#*#*` ist heute keine verlässliche Lösung mehr. Auf manchen Android-Smartphones funktioniert er, auf anderen passiert gar nichts. Bei neueren Samsung- und Xiaomi-Geräten liefert er häufig keine brauchbaren Akkuinformationen. Ich würde darauf keine Fehlersuche aufbauen.

Für eine tiefere Prüfung kannst du ADB verwenden. `adb shell dumpsys batterystats` kann den Verlauf von Wake Locks und die Wachzeit anzeigen, ist aber nicht besonders leicht zu lesen. Werkzeuge wie BetterBatteryStats und GSam Battery Monitor können helfen. Viele fortgeschrittene Akku-Tools benötigen unter modernen Android-Versionen allerdings über ADB erteilte Berechtigungen oder zusätzliche Einrichtung. Wenn eine App ohne Berechtigungen und ohne Messdaten sofortige Akku-Wunder verspricht, solltest du skeptisch sein.

## Häufige Ursachen für Wake Locks

Google Play-Dienste werden oft beschuldigt, weil sie viele Aufgaben übernehmen: Standort, Push-Nachrichten, Kontosynchronisierung, Dienste in der Nähe, Sicherheitsprüfungen und mehr. Eine gewisse Wake-Lock-Zeit ist dort normal. Ein unkontrollierter Verbrauch nach einem Systemupdate, einer fehlerhaften Synchronisierung oder einem beschädigten Cache ist es nicht.

Auch soziale Netzwerke können viel Hintergrundaktivität erzeugen. Sie aktualisieren Feeds, laden Analysedaten hoch, synchronisieren Nachrichten, erneuern Widgets und halten Benachrichtigungswege aktiv. Eine App, die du zweimal pro Woche öffnest, braucht keinen uneingeschränkten Hintergrundzugriff.

E-Mail-Apps sind ein weiterer Kandidat. Push-E-Mail ist normalerweise unproblematisch. Eine Abfrage alle paar Minuten verschwendet Strom, besonders bei mehreren Konten.

VPNs, Musik-Apps, Navigations-Apps und Fitness-Tracker sind anders zu beurteilen. Ihre Wake Locks können erwartet sein, weil du sie ausdrücklich mit einer laufenden Aufgabe beauftragt hast. Die richtige Frage lautet nicht: "Hält diese App das Smartphone wach?" Entscheidend ist: "Tut sie das weiter, obwohl ich ihre Kernfunktion gerade nicht benutze?"

## Was du tun kannst

Beschränke den Hintergrundzugriff für Apps, die ihn nicht benötigen. Auf Pixel und Android nahe am Google-Standard öffnest du **Einstellungen > Apps > Alle Apps anzeigen > [App-Name] > Akkunutzung der App** und begrenzt dort die Hintergrundnutzung. Auf Samsung verwendest du unter **Grenzen der Hintergrundnutzung** die Bereiche **Apps im Standby** oder **Apps in tiefem Standby**.

Beschränke keine Apps, die im Hintergrund in Echtzeit funktionieren müssen. Messenger, VPNs, Gesundheits- und Navigations-Apps sowie Notfall- und arbeitskritische Anwendungen können auf schwer erkennbare Weise ausfallen, wenn du sie zu stark einschränkst.

Gehe bei Google Play-Diensten vorsichtig vor. Starte zuerst das Smartphone neu. Prüfe danach Updates für das Google Play-System und deine Apps. Bleibt der Verbrauch bestehen, kannst du den Cache unter **Einstellungen > Apps > Alle Apps anzeigen > Google Play-Dienste > Speicher und Cache > Cache leeren** löschen. Lösche nicht alle Daten, wenn du die Folgen nicht kennst. Dadurch kann der lokale Dienststatus zurückgesetzt werden, was vorübergehend zusätzliche Synchronisierung auslöst.

Begann das Problem direkt nach einem Update auf Android 17, solltest du dem Smartphone ein oder zwei Tage geben, bevor du ein endgültiges Urteil fällst. Pixel-Geräte erhielten Android 17 zuerst, und Smartphones führen nach einem großen Betriebssystemupdate häufig zusätzliche Indizierung, App-Optimierung und Aufräumarbeiten aus. Hält der Verbrauch mehrere Tage an, ist das etwas anderes.

## Wie Doze die Situation verändert

Doze hilft, den Schaden durch Wake Locks im tiefen Leerlauf zu begrenzen. Während das Gerät im Doze-Modus ist, ignoriert Android Wake Locks in den eingeschränkten Phasen und erlaubt Arbeit hauptsächlich während der Wartungsfenster.

Doze ist aber keine Magie. Apps, die von der Akkuoptimierung ausgenommen sind, erhalten mehr Freiheiten. Vordergrunddienste können weiterhin arbeiten. Die Akkuverwaltung der Hersteller kann sich unterschiedlich verhalten. Und wenn das Smartphone wegen Bewegung, Empfangsproblemen oder wiederholter Hintergrundaktivität nie richtig zur Ruhe kommt, profitierst du nicht vollständig davon.

Darum ist der Verbrauch über Nacht ein so nützlicher Hinweis. Liegt dein Smartphone sieben Stunden unbewegt und verliert 4 %, hast du wahrscheinlich kein großes Wake-Lock-Problem. Verliert es bei ausgeschaltetem Display und ohne aktive Medienwiedergabe 20 %, hält etwas das Gerät wach oder zwingt das Funkmodul zu ständiger Arbeit.

runcheck ist für genau diese Mustererkennung gedacht. Verbrauch bei ausgeschaltetem Display, Tiefschlafverhalten, Signalqualität und Temperatur ergeben zusammen ein deutlich klareres Bild als die Standard-Akkuansicht allein.

## Ein paar Fragen, die sich zu beantworten lohnen

Kann ein Wake Lock das Display eingeschaltet halten? Partielle Wake Locks tun das nicht. Sie halten die CPU aktiv, während das Display aus bleibt. Ältere Wake-Lock-Typen für den Bildschirm existieren, doch moderne Android-Apps werden dabei stark eingeschränkt. Der meiste versteckte Verbrauch entsteht durch partielle CPU-Wake-Locks.

Ist eine gewisse Wake-Lock-Aktivität normal? Ja. Auch ein sauber laufendes Android-Smartphone hat kurze Wake Locks durch Systemdienste, Push-Nachrichten, Verbindungswechsel und geplante Arbeit. Einige Minuten sind normal. Stundenlange Aktivität im Leerlauf ist es nicht.

Hilft ein Zurücksetzen auf Werkseinstellungen? Manchmal. Es kann fehlerhafte App-Zustände, kaputte Synchronisierungen und Rückstände von Updates beseitigen. Gleichzeitig ist es ein sehr grobes Werkzeug. Beschränke zuerst verdächtige Apps, installiere alle Updates, lösche geeignete Caches und bestätige das Verbrauchsmuster, bevor du das Smartphone vollständig zurücksetzt.
