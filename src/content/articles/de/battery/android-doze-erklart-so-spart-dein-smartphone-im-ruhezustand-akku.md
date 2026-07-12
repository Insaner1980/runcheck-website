---
title: "Android Doze erklärt: So spart dein Smartphone im Ruhezustand Akku"
description: "Android Doze reduziert den Akkuverbrauch im Standby, indem Hintergrundarbeit verzögert wird, wenn dein Smartphone unbenutzt liegt. Hier erfährst du, was Doze einschränkt, warum Benachrichtigungen verspätet eintreffen können und wann eine App ausgenommen werden sollte."
listSummary: "akku, optimierung und android"
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Drain"
tags: ["akku","optimierung","android","tipps","leistung"]
locale: "de"
draft: false
---
Warum sind zehn Benachrichtigungen genau in dem Moment eingetroffen, als du dein Smartphone in die Hand genommen hast? Häufig lautet die Antwort: Doze.

Doze ist das integrierte Leerlaufsystem von Android. Du musst es nicht einschalten, und die meisten Menschen sehen nie einen eigenen Doze-Bildschirm in den Einstellungen. Es arbeitet unauffällig, wenn das Smartphone nicht am Ladegerät hängt, das Display ausgeschaltet ist und Android entscheidet, dass nicht jede App jederzeit beliebig laufen sollte.

Android 17 ist inzwischen die aktuelle Plattformversion auf den meisten unterstützten Pixel-Geräten. Andere Hersteller folgen nach ihren eigenen Zeitplänen. An den grundlegenden Hinweisen zu Doze ändert das nichts. Für dich zählen weiterhin dieselben Folgen: weniger Aufweckvorgänge im Hintergrund, längere Standby-Zeit und gelegentlich verspätete Benachrichtigungen, die nicht dringend sind.

## Was Doze macht

Wenn Doze aktiv ist, schränkt Android die energieintensiven Vorgänge ein. Apps verlieren den normalen Netzwerkzugriff. Standardalarme werden verschoben. Aufträge und Synchronisierungen müssen warten. Wake Locks werden in den tiefen Leerlaufphasen ignoriert. Auch WLAN-Suchen finden während Doze nicht statt.

Das Gerät bleibt dabei nicht für immer eingefroren. Android öffnet kurze Wartungsfenster, in denen die aufgeschobene Arbeit gebündelt ausgeführt werden darf. Apps synchronisieren sich, wartende Aufgaben laufen und Benachrichtigungen mit normaler Priorität können eintreffen. Danach kehrt Android wieder in den Leerlauf zurück.

Das ist der ganze Trick. Hintergrundarbeit in Paketen abzuarbeiten verbraucht deutlich weniger Energie, als jede App die CPU und das Funkmodul nach ihrem eigenen Zeitplan aufwecken zu lassen.

## Wann Doze aktiv wird

Doze erschien erstmals mit Android 6.0 (API 23). In der ursprünglichen Version musste das Gerät eine Zeit lang vom Ladegerät getrennt, unbewegt und mit ausgeschaltetem Display liegen. Android 7.0 ergänzte das Verhalten, das oft als "Doze on the go" bezeichnet wird. Dabei gelten bereits leichtere Einschränkungen, wenn das Smartphone nicht lädt und das Display aus ist, selbst wenn es sich in deiner Tasche bewegt.

Moderne Android-Smartphones profitieren in der Praxis meist von zwei Stufen. Während du das Gerät mit dir trägst, greifen leichtere Leerlaufbeschränkungen. Liegt es länger unbewegt, folgen strengere Einschränkungen.

Herstellersoftware macht das Ganze unübersichtlicher. Pixel-Geräte verhalten sich meist ähnlich wie Googles Referenzsystem. Samsung, Xiaomi, OnePlus, Oppo und andere Hersteller legen eigene Akkuverwaltung darüber. Manchmal hilft das. Manchmal ist sie zu aggressiv und verhindert pünktliche Benachrichtigungen.

## Was verzögert wird

Am sichtbarsten ist die Verzögerung bei der Hintergrundsynchronisierung. Eine E-Mail-App prüft eventuell seltener. Eine Notiz-App synchronisiert erst später. Ein Wetter-Widget wird möglicherweise im nächsten Wartungsfenster statt sofort aktualisiert.

Auch von Entwicklern geplante Arbeit ist betroffen. Aufgaben von `JobScheduler` und `WorkManager` warten im Allgemeinen, während Doze aktiv ist. Normale `AlarmManager`-Alarme werden ebenfalls verschoben. Alarme einer Wecker-App, die ausdrücklich für den Nutzer gestellt wurden, lösen dagegen weiterhin pünktlich aus.

Anrufe und SMS sollten nicht auf ein Wartungsfenster warten. Firebase Cloud Messaging (FCM) mit hoher Priorität kann eine App außerdem kurz aufwecken, damit sie eine zeitkritische Benachrichtigung anzeigt. Deshalb wirken WhatsApp, Signal, Telegram und ähnliche Apps normalerweise weiterhin unmittelbar, sofern App und Akkuverwaltung des Herstellers richtig eingerichtet sind.

Push-Nachrichten mit normaler Priorität verhalten sich anders. Nutzt eine App sie für Hintergrundaktualisierungen oder wenig dringende Hinweise, kann Android sie bis zum nächsten Wartungsfenster zurückhalten.

## Warum Benachrichtigungen verspätet eintreffen

Verspätete Benachrichtigungen sind nicht immer ein Fehler. Häufig sind sie genau der Kompromiss, für den Doze entwickelt wurde.

Eine Werbung eines Lieferdienstes, ein Like in einem sozialen Netzwerk oder eine Nachrichtenmeldung kann ein paar Minuten warten, wenn das Smartphone dafür länger schläft. Ein Arbeitschat, ein Alarm, ein eingehender Anruf oder ein Sicherheitshinweis sollte dagegen nicht verspätet kommen. Gute Apps verwenden die passende Priorität für die jeweilige Nachricht. Schlechte Apps verlangen entweder ständig zu hohe Priorität oder binden FCM nicht richtig ein und fragen stattdessen regelmäßig im Hintergrund nach neuen Daten.

Ärgerlich ist, dass du dafür keine klare Erklärung bekommst. Du siehst nur verspätete Nachrichten und musst die Ursache rückwärts suchen.

Beginne mit den Benachrichtigungseinstellungen der App. Prüfe danach die Akkuverwaltung dieser Anwendung. Auf einem Pixel findest du sie unter **Einstellungen > Apps > Alle Apps anzeigen > [App-Name] > Akkunutzung der App**. Auf einem aktuellen Samsung-Galaxy-Gerät öffnest du **Einstellungen > Akku > Grenzen der Hintergrundnutzung** und stellst sicher, dass die App nicht unter **Apps im Standby** oder **Apps in tiefem Standby** liegt.

## Apps von Doze ausnehmen

Android erlaubt es, einzelne Apps von der Akkuoptimierung auszunehmen. Öffne in den Einstellungen den App-Bereich und suche beim speziellen App-Zugriff nach **Akkuoptimierung**. Wähle die betreffende App und danach **Nicht optimieren** oder die entsprechende Bezeichnung auf deinem Gerät.

Geh sparsam damit um. Jede Ausnahme gibt einer App mehr Freiheit im Hintergrund, und zu viele Ausnahmen machen Doze weniger wirksam. Messenger, VPNs, medizinische oder sicherheitsrelevante Apps und manche Arbeitsanwendungen können sinnvolle Kandidaten sein. Eine Shopping-App ist es nicht.

Auch die Google Play-Richtlinien begrenzen, wann eine App dich direkt um eine Ausnahme von der Android-Energieverwaltung bitten darf. Vereinfacht gesagt sollte eine solche Ausnahme nur verwendet werden, wenn die Kernfunktion der App ohne sie nicht zuverlässig funktioniert.

## Woran du erkennst, ob Doze hilft

Der einfachste Test für normale Nutzer ist der Verbrauch über Nacht. Lade das Smartphone auf, trenne es vor dem Schlafengehen vom Ladegerät, lass das Display ausgeschaltet und prüfe morgens den Verlust. Ein paar Prozent über Nacht sind normal. Verliert das Gerät bei ausgeschaltetem Display 15 % oder 25 %, weckt etwas das Smartphone zu häufig auf, der Empfang ist schlecht oder der Akku altert.

In der Akkustatistik steht nicht unbedingt "Doze ist fehlgeschlagen". Stattdessen siehst du vielleicht Android System, Google Play-Dienste, das Mobilfunknetz oder einen unklaren App-Eintrag. Deshalb sagt die Entladerate bei ausgeschaltetem Display mehr aus als ein einzelnes Akkudiagramm. Verliert das Smartphone im Leerlauf mehr als ungefähr 1 bis 2 % pro Stunde, lohnt sich eine genauere Untersuchung.

Entwickler können Doze über ADB mit `adb shell dumpsys deviceidle force-idle` testen. Das ist ein Testwerkzeug und keine normale Einstellung für den Alltag.

## Häufige Fragen

Über normale Android-Einstellungen kannst du Doze nicht deaktivieren, und du solltest es wahrscheinlich auch nicht versuchen. Die Funktion ist einer der Hauptgründe dafür, dass moderne Android-Smartphones stundenlang unbenutzt liegen können, ohne sich vollständig zu entladen.

Doze funktioniert auch, wenn sich das Smartphone in deiner Tasche befindet, allerdings nicht immer auf der tiefsten Stufe. Seit Android 7.0 gelten leichtere Einschränkungen, während das Display ausgeschaltet ist und sich das Gerät bewegt. Der tiefere Modus setzt weiterhin eine längere Ruhephase voraus.

Alarme von Wecker-Apps lösen weiterhin aus. Hintergrundalarme anderer Apps werden dagegen bis zu einem Wartungsfenster verschoben, sofern sie keine APIs verwenden, die ausdrücklich für Alarme im Leerlauf vorgesehen sind.

Wenn ein Gerät im Standby mehr verbraucht als ein anderes, solltest du nicht sofort annehmen, dass Doze defekt ist. Signalstärke, Akkuverwaltung des OEMs, installierte Apps, Kontosynchronisierung, Widgets und Akkualter können dazu führen, dass sich zwei Android-Smartphones sehr unterschiedlich verhalten.

runcheck kann den Verbrauch bei eingeschaltetem und ausgeschaltetem Display voneinander trennen und zeigen, ob Leerlaufphasen mit Netzwerkaktivität, Temperatur oder Hintergrundprozessen zusammenfallen. Das ist wesentlich nützlicher, als anhand eines einzigen Prozentwerts über Nacht zu raten.
