---
title: "So behebst du WLAN-Verbindungsprobleme unter Android"
description: "Meta-Beschreibung: Schrittweise Lösungen für WLAN-Probleme unter Android, darunter Verbindungsabbrüche, langsames WLAN, fehlerhafte gespeicherte Netzwerke, DNS-Einstellungen, Router-Prüfungen und Hinweise zu Android 17."
listSummary: "leistung, geschwindigkeit und android"
hub: "network"
sourceNumber: 96
order: 7
tags: ["leistung","geschwindigkeit","android","optimierung","fehlerbehebung"]
locale: "de"
draft: false
---
Was solltest du zuerst versuchen, wenn das WLAN unter Android nicht mehr funktioniert? Beginne nicht gleich mit dem Zurücksetzen auf Werkseinstellungen. Und ändere nicht eine halbe Stunde lang Router-Einstellungen, bevor du die einfachen Dinge geprüft hast. Die meisten WLAN-Probleme gehören zu einer von drei Gruppen: Das Smartphone verbindet sich gar nicht, die Verbindung bricht ständig ab oder das Gerät bleibt verbunden, aber das Internet reagiert kaum.

Arbeite die Schritte in dieser Reihenfolge durch. Das spart Zeit.

## 1. WLAN und danach den Flugmodus umschalten

Ziehe die Schnelleinstellungen nach unten und schalte WLAN aus. Warte fünf Sekunden. Schalte es wieder ein.

Hilft das nicht, aktiviere den Flugmodus, warte zehn Sekunden und deaktiviere ihn wieder. Dadurch werden die Funkverbindungen des Smartphones neu gestartet, ohne dass du das ganze Gerät neu booten musst. Auf Pixel-Geräten und Android-Versionen mit einer weitgehend unveränderten Oberfläche findest du den Flugmodus auch unter Einstellungen > Netzwerk & Internet. Bei Samsung liegt er unter Einstellungen > Verbindungen.

Das ist ein kleiner Eingriff, behebt aber erstaunlich viele vorübergehende Probleme mit dem Funkstatus.

## 2. Netzwerk entfernen und neu verbinden

Ein gespeichertes WLAN-Profil kann nach einem Router-Firmwareupdate, einer Passwortänderung, einer Änderung des Sicherheitsmodus oder einer neuen Mesh-Konfiguration fehlerhaft werden.

Auf Pixel-Geräten und vielen aktuellen Android-Versionen gehst du zu Einstellungen > Netzwerk & Internet > Internet. Tippe neben dem Netzwerk auf das Zahnradsymbol und dann auf Entfernen. Bei Samsung gehst du zu Einstellungen > Verbindungen > WLAN, tippst neben dem Netzwerk auf das Zahnradsymbol und entfernst es dort.

Wähle das Netzwerk danach erneut aus und gib das Passwort ein. Falls der Router ein Hauptnetz und ein Gastnetz bereitstellt, prüfe, ob du das richtige auswählst.

## 3. Smartphone und Router neu starten

Starte das Smartphone neu. Trenne danach den Router für 30 Sekunden vom Strom.

Mach beides, nicht nur eines davon. Das Smartphone kann in einem fehlerhaften vorübergehenden Netzwerkzustand festhängen, während der Router vielleicht eine veraltete DHCP-Zuweisung oder eine überlastete Verbindungstabelle hat. Durch den Neustart beider Seiten wird die Verbindung neu ausgehandelt.

Wenn mehrere Geräte WLAN-Probleme haben, ist der Router-Neustart wichtiger als der Neustart des Smartphones.

## 4. Prüfen, ob das Problem am WLAN oder am Internet liegt

Android kann mit dem WLAN verbunden sein, obwohl die Internetverbindung hinter dem Router ausgefallen ist. Das WLAN-Symbol zeigt nur, dass zwischen Smartphone und Router eine lokale Funkverbindung besteht.

Teste ein anderes Gerät im selben Netzwerk. Sind alle Geräte langsam oder offline, prüfe Modem, Router und Internetanbieter. Hat nur das Android-Smartphone Probleme, fahre mit den Lösungen auf dem Gerät fort.

Versuche außerdem, die Verwaltungsseite des Routers zu öffnen. Viele Router verwenden 192.168.1.1 oder 192.168.0.1. Lädt diese Seite, während normale Websites nicht funktionieren, arbeitet das WLAN selbst. Das Problem liegt dann eher an der Internetverbindung, am DNS oder an der Router-Konfiguration.

## 5. Android, Google Play-Systemkomponenten und Router-Firmware aktualisieren

Öffne auf einem Pixel Einstellungen > System > Softwareupdates und installiere ausstehende Updates. Je nach Pixel-Version kann der Eintrag auch Systemupdate heißen. Bei Samsung gehst du zu Einstellungen > Software-Update > Herunterladen und installieren.

Prüfe auf Pixel-ähnlichen Android-Versionen außerdem unter Einstellungen > Sicherheit & Datenschutz > System & Updates, ob ein Google Play-Systemupdate verfügbar ist. Die genaue Bezeichnung kann sich verschieben. Entscheidend ist, dass sowohl die Geräte-Firmware als auch die Systemkomponenten aktuell sind.

Die Router-Firmware wird leicht vergessen. Öffne die Router-App oder die Verwaltungsoberfläche und suche nach Firmware-, System- oder Verwaltungsupdates. Router-Hersteller beheben regelmäßig WLAN-Stabilitätsfehler, aber viele Geräte aktualisieren sich nicht zuverlässig selbst.

## 6. Automatischen Wechsel vom WLAN zu mobilen Daten testweise deaktivieren

Wenn das Smartphone das WLAN ohne erkennbaren Grund verlässt, obwohl der Router funktioniert, kann ein automatischer Netzwerkwechsel dahinterstecken.

Auf Pixel-Geräten findest du die Option unter Einstellungen > Netzwerk & Internet > Adaptive Konnektivität. Bei Samsung öffnest du Einstellungen > Verbindungen > WLAN > Intelligentes WLAN und deaktivierst testweise den Wechsel zu mobilen Daten, falls diese Option auf deinem Modell vorhanden ist.

Lass die Funktion einen Tag lang ausgeschaltet. Bleibt das WLAN danach stabil, hat das Smartphone zu aggressiv auf eine Verbindung reagiert, die es als schwach oder qualitativ schlecht eingestuft hat.

## 7. 2,4 GHz und 5 GHz prüfen

Das 2,4-GHz-Band hat eine größere Reichweite und kommt besser durch Wände. Das 5-GHz-Band ist in der Nähe des Routers schneller, verliert durch Wände aber früher an Stärke. Ein Smartphone kann im nächsten Zimmer über 5 GHz perfekt funktionieren und am anderen Ende der Wohnung kaum noch eine stabile Verbindung halten.

Wenn dein Router beide Bänder unter demselben Netzwerknamen zusammenfasst, trenne sie vorübergehend in zwei Namen, etwa HomeWiFi-2G und HomeWiFi-5G. Verbinde das Smartphone für mehr Reichweite mit 2,4 GHz oder für mehr Geschwindigkeit in Routernähe mit 5 GHz.

Das aktuell genutzte Band lässt sich häufig in den Details des verbundenen WLANs erkennen. Manche Android-Versionen zeigen dort die Frequenz oder Verbindungsgeschwindigkeit. Samsung zeigt ähnliche Angaben in den WLAN-Netzwerkdetails.

## 8. Privates DNS prüfen, bevor du statisches DNS einrichtest

DNS-Probleme können den Eindruck erwecken, das WLAN sei vollständig ausgefallen. Das Smartphone meldet eine Verbindung, einige Chat-Apps funktionieren vielleicht teilweise, aber Websites laden nicht oder können Adressen nicht auflösen.

Seit Android 9 findest du die Einstellung unter Einstellungen > Netzwerk & Internet > Privates DNS. Ist dort ein benutzerdefinierter Anbieter eingetragen und das WLAN funktioniert nicht, stelle die Option vorübergehend auf Automatisch oder Aus und teste erneut.

Du kannst Anbieter wie `dns.google` oder `one.one.one.one` verwenden, musst den Hostnamen aber exakt eingeben. Ein falscher Hostname für Privates DNS kann die Namensauflösung sowohl im WLAN als auch über mobile Daten lahmlegen.

Stelle ein WLAN nicht von DHCP auf Statisch um, wenn du die richtige IP-Adresse, das Gateway und die Subnetzwerte nicht kennst. Statisches DNS kann in bestimmten Fällen helfen. Falsche IP-Angaben erzeugen jedoch ein neues Problem, das oft schlimmer aussieht als das ursprüngliche.

## 9. Netzwerkeinstellungen zurücksetzen

Nutze diesen Schritt, wenn einzelne Korrekturen nicht geholfen haben. Ein Netzwerk-Reset entfernt gespeicherte WLAN- und Bluetooth-Einstellungen, ohne Fotos, Apps oder Dateien zu löschen. Auf aktuellen Pixel-Geräten werden Mobilfunkeinstellungen separat zurückgesetzt.

Pixel: Einstellungen > System > Optionen zum Zurücksetzen > Bluetooth und WLAN zurücksetzen.

Samsung: Einstellungen > Allgemeine Verwaltung > Zurücksetzen > WLAN- und Bluetooth-Einstellungen zurücksetzen. Je nach One UI-Version kann zusätzlich ein eigener Punkt für Mobilnetze vorhanden sein.

Xiaomi: Suche in den Einstellungen nach Netzwerk zurücksetzen oder WLAN, Mobilfunknetze und Bluetooth zurücksetzen, da die Bezeichnung je nach HyperOS-Version variiert.

OnePlus: Suche unter Einstellungen > System oder Zusätzliche Einstellungen nach den Zurücksetzen-Optionen für WLAN, Mobilfunk und Bluetooth. Die genaue Aufteilung hängt von der OxygenOS-Version ab.

Danach musst du dich erneut mit WLAN-Netzen verbinden und Bluetooth-Geräte neu koppeln.

## 10. Datum und Uhrzeit prüfen

Ein falsches Datum oder eine falsche Uhrzeit kann Zertifikatsprüfungen, Anmeldeseiten öffentlicher WLANs und bestimmte Authentifizierungsabläufe stören. Das klingt fast zu einfach, kommt aber nach Reisen, vollständig entladenen Akkus, manuellen Zeitzonenänderungen oder Problemen bei der Einrichtung tatsächlich vor.

Gehe zu Einstellungen > System > Datum & Uhrzeit und aktiviere die automatische Uhrzeit sowie die automatische Zeitzone. Bei Samsung findest du die Optionen unter Einstellungen > Allgemeine Verwaltung > Datum und Uhrzeit.

## 11. MAC-Randomisierung in vertrauenswürdigen Netzwerken prüfen

Android 10 und neuer verwenden aus Datenschutzgründen zufällige MAC-Adressen für WLAN-Verbindungen. In öffentlichen Netzen ist das sinnvoll. Zu Hause oder am Arbeitsplatz kann es Router verwirren, die MAC-Filter, reservierte IP-Adressen, Jugendschutzregeln oder Gerätelimits verwenden.

Öffne die Details des WLAN-Netzes und suche nach Datenschutz oder MAC-Adresstyp. Wenn ein vertrauenswürdiges Heimnetz dein Smartphone wiederholt ablehnt, teste für genau dieses Netzwerk die Geräte-MAC-Adresse. Lass die zufällige MAC-Adresse in anderen Netzen aktiviert.

## 12. Ursachen am Router beheben

Wenn mehrere Geräte betroffen sind, konzentriere dich auf den Router.

Nutze im 2,4-GHz-Band die Kanäle 1, 6 oder 11 und wähle den am wenigsten belegten. Stelle den Router nicht hinter einen Fernseher, in einen Schrank, direkt neben eine Mikrowelle, nahe an Metallregale oder auf den Boden.

Verwendet der Router Band Steering, deaktiviere es testweise oder gib 2,4 GHz und 5 GHz getrennte Netzwerknamen. Nutzt er ausschließlich WPA3 und ein älteres Smartphone hat Probleme, teste den gemischten Modus WPA2/WPA3. Gibt es ein Gerätelimit, erhöhe es oder entferne alte Einträge.

Für größere Wohnungen oder Häuser ist ein Mesh-System meist besser als ein billiger Repeater. Repeater können funktionieren, reduzieren aber häufig die Geschwindigkeit und verursachen beim Wechsel zwischen Zugangspunkten merkwürdige Effekte.

## 13. Nach Android 17 oder einem anderen großen Update

Google veröffentlichte Android 17 am 16. Juni 2026 zunächst für die meisten unterstützten Pixel-Geräte. Andere Hersteller folgen nach ihren eigenen Zeitplänen. Wenn die WLAN-Probleme direkt nach dem Update begonnen haben, ist deshalb nicht automatisch der Router schuld.

Installiere alle nachfolgenden Sicherheitsupdates, aktualisiere Apps des Mobilfunkanbieters und andere verbindungsbezogene Apps im Play Store, starte Smartphone und Router neu und richte das WLAN erneut ein. Ist der Fehler bei genau deinem Modell und Build verbreitet, kann ein späteres monatliches Update die eigentliche Lösung sein.

Ältere Anleitungen empfehlen oft, die System-Cache-Partition zu löschen. Bei modernen Android-Smartphones würde ich damit nicht beginnen. Einige Samsung-Modelle bieten im Recovery-Modus noch Cache-Optionen, viele aktuelle Android-Geräte nutzen diesen alten Fehlerbehebungsweg aber nicht mehr in einer Form, auf die du dich verlassen kannst.

## 14. Abgesicherten Modus testen

Im abgesicherten Modus startet Android ohne die meisten Apps von Drittanbietern. Funktioniert das WLAN dort normal, greift wahrscheinlich eine installierte App in die Verbindung ein.

Häufige Verdächtige sind VPN-Apps, Firewall-Apps, Werbeblocker, Geräteverwaltungs-Tools und sogenannte WLAN-Booster. Deinstalliere oder deaktiviere zuerst die zuletzt installierten Apps mit Netzwerkzugriff.

## Wann eine Hardware-Reparatur infrage kommt

Wenn das Smartphone in mehreren WLAN-Netzen die Verbindung verliert, ein Netzwerk-Reset und der abgesicherte Modus nicht helfen und andere Geräte normal funktionieren, wird ein Hardwarefehler wahrscheinlicher. Schäden an der Antenne oder am WLAN-Chip sind nicht alltäglich, können nach Stürzen oder Wasserkontakt aber vorkommen.

Setze das Gerät erst nach einer Datensicherung auf Werkseinstellungen zurück. Hilft auch das nicht, ist eine Reparatur der sinnvolle nächste Schritt.

## Kurze Antworten

Solltest du WLAN ausschalten, wenn du das Haus verlässt? In der Regel nein. Moderne Android-Versionen gehen sparsam mit der Netzwerksuche um. Eingeschaltetes WLAN hilft außerdem bei bekannten Netzen und bei der Standortbestimmung.

Kann eine Hülle den WLAN-Empfang stören? Normale Hüllen tun das nicht. Metallhüllen, sehr dicke Akkuhüllen oder magnetische Platten können den Empfang verschlechtern, wenn das Signal ohnehin schwach ist.

Wie prüfst du die WLAN-Signalstärke in dBm? Einige Android-Versionen zeigen sie in den WLAN-Details. Falls dein Gerät das nicht tut, kann eine WLAN-Analyse-App den Wert anzeigen. Zwischen -30 und -50 dBm ist ausgezeichnet, zwischen -50 und -70 dBm brauchbar bis gut. Schwächer als -70 dBm kann die Verbindung je nach Störungen instabil werden.

runcheck zeichnet die WLAN-Signalqualität im Zeitverlauf auf dem Netzwerk-Detailbildschirm auf. Dazu gehören Verbindungsdaten wie Frequenzband, Verbindungsgeschwindigkeit und Signalverlauf, sofern Android diese Informationen bereitstellt.
