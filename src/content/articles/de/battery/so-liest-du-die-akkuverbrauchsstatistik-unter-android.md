---
title: "So liest du die Akkuverbrauchsstatistik unter Android"
description: "Du öffnest die Akkunutzung und siehst eine App mit 42 %. Das wirkt schlimm. Manchmal ist es das auch. Manchmal sagt die Zahl fast nichts aus."
listSummary: "Du öffnest die Akkunutzung und siehst eine App mit 42 %."
hub: "battery"
sourceNumber: 14
order: 4
subgroup: "Health"
tags: ["akku","akkuverbrauch","fehlerbehebung","android","leistung"]
locale: "de"
draft: false
---
Die Android-Akkustatistik hilft dabei, ein Problem einzugrenzen. Sie ist aber keine exakte Abrechnung darüber, wohin jede einzelne Milliamperestunde geflossen ist. Entscheidend ist, die Prozentwerte im richtigen Zusammenhang zu lesen.

**Meta-Beschreibung:** Die Android-Akkustatistik zeigt, welche Apps und Systemdienste Energie verbrauchen. Erfahre, wo du die Werte findest, was die Prozentangaben bedeuten und wie du echte Akkuprobleme erkennst.

## Wo du die Statistik findest

Auf Pixel-Geräten und unter weitgehend unverändertem Android öffnest du im Akkubereich der Einstellungen die **Akkunutzung**. Dort kannst du den Verbrauch nach Apps ansehen. Auf aktuellen Pixel-Versionen lässt sich zwischen Apps und Systemkomponenten wechseln. Wenn du eine App antippst, öffnest du ihre Akkuoptionen, darunter die Einstellungen zur Hintergrundnutzung.

Auf Samsung Galaxy-Smartphones öffnest du **Einstellungen > Akku**. Bei einigen älteren One UI-Versionen lautet der Pfad **Einstellungen > Akku und Gerätewartung > Akku**. Samsung zeigt häufig zuerst ein Diagramm und darunter **Details anzeigen** für den Verbrauch nach App und Funktion. Manche Versionen bieten außerdem einen längeren Verlauf. Der ist oft aussagekräftiger als ein einzelnes kurzes Zeitfenster seit dem letzten Laden.

Auf Xiaomi-, Redmi- und POCO-Smartphones suchst du im Akkumenü nach **Battery usage**, **Power consumption details** oder einer ähnlich benannten Ansicht. HyperOS und MIUI verwenden je nach Modell unterschiedliche Bezeichnungen, deshalb kann der Menüname leicht abweichen.

Auf OnePlus-, OPPO- und realme-Geräten beginnst du im Akkubereich und suchst nach **Battery usage**, **Battery usage details** oder **App battery management**. Wenn du eine App antippst, trennen diese Oberflächen häufig zwischen Vordergrund- und Hintergrundnutzung.

Der Wählcode `*#*#4636#*#*` öffnet auf manchen Android-Smartphones ein Testmenü. Es kann Spannung, Temperatur, Zustandsstatus und Ladezustand anzeigen. Eine Verbrauchsanzeige nach Apps ist es nicht, und viele Hersteller haben den Code deaktiviert.

## Was die Prozentwerte tatsächlich bedeuten

Die Zahl neben einer App ist normalerweise ihr Anteil am verbrauchten Akku, nicht ihr Anteil an der gesamten Akkukapazität des Smartphones.

Angenommen, dein Smartphone fällt von 100 % auf 70 %. Dann wurden 30 Prozentpunkte verbraucht. Wenn YouTube in der Akkunutzung 50 % anzeigt, bedeutet das nicht, dass YouTube die Hälfte des gesamten Akkus geleert hat. Es bedeutet, dass Android der App ungefähr die Hälfte des in diesem Zeitfenster erfassten Verbrauchs zuordnet. In diesem Beispiel wären das etwa 15 Prozentpunkte des tatsächlichen Akkustands.

Dreh das Beispiel um. Das Smartphone fällt von 100 % auf 96 %, und eine App zeigt 60 %. Die App dominiert dann nur einen sehr kleinen Gesamtverbrauch. Das kann völlig harmlos sein.

Das ist der häufigste Denkfehler: Viele verfolgen den höchsten Prozentwert, ohne zuerst zu prüfen, wie viel Akku überhaupt verbraucht wurde.

## Wie Android den Verbrauch schätzt

Android besitzt keinen winzigen Stromzähler für jede einzelne App. Das System schätzt den Verbrauch.

Das Framework erfasst, wie lange einzelne Komponenten in bestimmten Zuständen aktiv sind: CPU, Display, GPS, WLAN, Mobilfunkmodem, Bluetooth und weitere Teile. Hersteller liefern ein Leistungsprofil, das den erwarteten Stromverbrauch dieser Komponenten in den jeweiligen Zuständen beschreibt. Android verbindet die Zeitdaten mit diesem Profil und ordnet den geschätzten Verbrauch Apps und Systemkomponenten zu.

Für die Fehlersuche ist das gut genug. Eine Messung auf Laborniveau ist es nicht.

Die Leistungsprofile unterscheiden sich je nach Hersteller. Ein Pixel- und ein Xiaomi-Smartphone können dieselbe App gleich lange ausführen und trotzdem unterschiedliche Prozentwerte melden. Die App hat sich nicht plötzlich anders verhalten. Das Berechnungsmodell ist ein anderes.

## Das Verbrauchsdiagramm lesen

Sieh dir zuerst das Diagramm an, nicht die App-Liste.

Ein steiler Abfall bei eingeschaltetem Display ist meistens normal. Hohe Helligkeit, Videos, Karten, Spiele, Kamera und mobile Daten können den Akku schnell leeren. Ein steiler Abfall bei ausgeschaltetem Display ist interessanter. Er deutet auf Hintergrundaktivität, schwachen Empfang, eine festhängende Synchronisierung, einen blockierten Prozess oder ein Smartphone hin, das nicht in den Tiefschlaf wechselt.

Eine flache Linie bei ausgeschaltetem Display ist das gewünschte Verhalten. Dann ruht das Gerät.

Ladephasen erscheinen als ansteigende Linien oder senkrechte Sprünge. Eine Lücke bedeutet normalerweise, dass das Smartphone ausgeschaltet war, die Statistik zurückgesetzt wurde oder das System in diesem Zeitraum keine Daten gesammelt hat. Lies nicht zu viel in ein unruhiges Diagramm eines Tages hinein, an dem du fünfmal kurz nachgeladen hast. Viele kleine Teilladungen lassen die App-Prozentwerte springen.

## Display, Wachzeit und Signal

Einige Android-Versionen zeigen unter dem Diagramm zusätzliche Balken. Sie werden leicht übersehen, erklären aber erstaunlich viel.

Die Displaylaufzeit zeigt, wann der Bildschirm aktiv war. Wenn der größte Verbrauch mit eingeschaltetem Display zusammenfällt, verhält sich das Smartphone wahrscheinlich normal. Das Display gehört bei modernen Geräten zu den größten Stromverbrauchern.

Die Wachzeit zeigt, wann die CPU aktiv war. Idealerweise überschneidet sie sich größtenteils mit der Displaylaufzeit. Lange Wachphasen bei ausgeschaltetem Bildschirm deuten auf Wake Locks oder Hintergrundarbeit hin. E-Mail-Synchronisierung, Fitness-Apps, Cloud-Backups, Navigation, Messenger und Mediaplayer können das verursachen. Ein Teil davon ist normal. Eine Shopping-App, die das drei Stunden lang tut, ist es nicht.

Auch die Signalqualität kann viel ausmachen. Bei schwachem Mobilfunksignal verbraucht das Modem mehr Energie, weil es die Verbindung aufrechterhalten muss. Wenn **Mobile network standby** oder **Cell standby** weit oben erscheint, während du dich in einem Kellerbüro, Zug, ländlichen Gebiet oder Betongebäude aufhältst, ist das Smartphone möglicherweise nicht defekt. Es kämpft nur mit dem Netz.

## Muster, die wirklich wichtig sind

Eine App mit hohem Verbrauch ist nicht automatisch ein Problem. Eine App mit hohem Verbrauch, obwohl du sie kaum genutzt hast, ist ein Problem.

Eine Video-App ganz oben nach zwei Stunden Streaming ist normal. Eine Nachrichten-App ganz oben nach fünf Minuten Lesen ist verdächtig. Tippe sie an und vergleiche Vordergrund- mit Hintergrundzeit.

Eine hohe Nutzung durch **Android System** oder System-Apps ist schwieriger zu deuten. Sie kann auf ein echtes Systemproblem hinweisen, besonders nach einem fehlerhaften Update. Sie kann aber auch bedeuten, dass Android den Verbrauch keiner einzelnen App sauber zuordnen konnte und ihn deshalb im Systembereich verbucht hat.

Bei **Google Play-Dienste** ist es ähnlich. Der Dienst verarbeitet Push-Benachrichtigungen, Kontosynchronisierung, Standort und andere gemeinsame Funktionen für viele Apps. Wenn der Wert hoch ist, suche nach Apps, die zu häufig den Standort abfragen. Die Google Play-Dienste können der Überbringer sein, ohne selbst die Ursache zu sein.

Ein Displayanteil von mehr als 40 bis 50 % des verbrauchten Akkus ist für viele Menschen normal. Wenn das Display nur kurz aktiv war, der Gesamtverbrauch aber hoch ist, arbeitet etwas anderes im Hintergrund.

## Was du bei einer verdächtigen App tun solltest

Beginne vorsichtig. Aktualisiere die App. Starte das Smartphone neu. Prüfe am nächsten Tag, ob das Problem erneut auftritt.

Wenn es weitergeht, begrenze die Hintergrundnutzung der App. Auf einem Pixel tippst du sie in **Akkunutzung** an und passt **Hintergrundnutzung zulassen** an. Alternativ öffnest du **Einstellungen > Apps > [App-Name] > Akkunutzung von Apps**. Auf Samsung-Geräten kannst du die App in der Verbrauchsansicht auswählen und anschließend die **Grenzen der Hintergrundnutzung**, **Apps im Standby** oder **Apps in tiefem Standby** verwenden.

**Stopp erzwingen** ist ein kurzfristiger Test, keine dauerhafte Lösung. Es kann eine außer Kontrolle geratene App vorübergehend beenden, doch Push-Benachrichtigungen, geplante Aufgaben oder ein Neustart können sie wieder aktivieren. Die Hintergrundnutzung einzuschränken ist sauberer.

Der abgesicherte Modus hilft, wenn sich der ganze Akku schnell leert und keine einzelne App auffällt. Er deaktiviert Drittanbieter-Apps. Verschwindet der Verbrauch, liegt die Ursache wahrscheinlich bei einer installierten Software. Bleibt er gleich, prüfe Empfang, Systemupdate, Gerätetemperatur oder den Akku selbst.

## Was die Statistik nicht verrät

Die Akkustatistik beweist keinen guten oder schlechten Akkuzustand. Ein verschlissener Akku und eine fehlerhafte App können sich im Alltag sehr ähnlich bemerkbar machen.

Außerdem wird der Zeitraum je nach Gerät zurückgesetzt oder anders eingeordnet. Pixel konzentriert sich auf die Nutzung seit der letzten vollständigen Ladung. Samsung hat die Darstellung über verschiedene One UI-Versionen hinweg mehrfach verändert. Einige Versionen zeigen den Verbrauch seit dem letzten Laden statt eines streng vollständigen Ladezyklus. Häufiges Nachladen verkürzt das Zeitfenster und lässt Prozentwerte dramatischer aussehen.

Für Entwicklungen brauchst du einen Verlauf. AccuBattery kann die Kapazität schätzen und Ladevorgänge über längere Zeit verfolgen. runcheck speichert frühere Werte zu Ladestand, Temperatur, Entladerate und den zugehörigen Sitzungen. So vergleichst du mehrere Tage, statt auf ein einzelnes unruhiges Diagramm zu starren.

Der beste Einsatz der Android-Akkunutzung ist einfach: Finde einen ersten brauchbaren Hinweis und bestätige ihn anschließend durch das tatsächliche Verhalten. Wenn Diagramm, App-Liste, Hintergrundlaufzeit und deine Erinnerung an den Tag in dieselbe Richtung zeigen, hast du den Verursacher wahrscheinlich gefunden.
