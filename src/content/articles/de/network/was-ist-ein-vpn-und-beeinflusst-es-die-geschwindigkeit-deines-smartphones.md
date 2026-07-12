---
title: "Was ist ein VPN und beeinflusst es die Geschwindigkeit deines Smartphones?"
description: "Meta-Beschreibung: Eine verständliche Erklärung, was ein VPN unter Android macht, wie es Geschwindigkeit und Akkulaufzeit beeinflusst und wann die Nutzung sinnvoll ist."
listSummary: "netzwerk, verbindungen und android"
hub: "network"
sourceNumber: 99
order: 10
tags: ["netzwerk","verbindungen","android","fehlerbehebung","ratgeber"]
locale: "de"
draft: false
---
Ein VPN verändert den Weg, den der Internetverkehr deines Smartphones nimmt. Statt dass Apps direkt über das WLAN oder das Mobilfunknetz ins Internet gehen, sendet das Gerät die Daten zuerst durch einen verschlüsselten Tunnel an einen VPN-Server. Websites und Apps sehen dadurch die IP-Adresse dieses Servers und nicht die übliche öffentliche IP-Adresse deiner Verbindung.

Das klingt geheimnisvoller, als es ist. Ein VPN kann nützlich sein, ist aber kein undurchdringlicher Schutzschild für deine Privatsphäre.

## Was ein VPN tatsächlich verbirgt

Wenn ein VPN aktiv ist, können der Betreiber des WLANs, eines Hotspots oder dein Mobilfunkanbieter in der Regel erkennen, dass das Smartphone mit einem VPN-Server verbunden ist. Sie sehen außerdem, wie viele Daten übertragen werden. Welche einzelnen Websites und App-Ziele sich innerhalb des Tunnels befinden, sollten sie bei einem korrekt funktionierenden VPN nicht erkennen können. Das gilt auch nur, wenn der Dienst DNS-Anfragen ebenfalls durch den Tunnel leitet.

Dafür sitzt nun der VPN-Anbieter in der Mitte. Er kann Verbindungsmetadaten sehen und je nach technischer Umsetzung möglicherweise auf weitere Informationen zugreifen. Deshalb ist die Wahl des Anbieters wichtig. Ein zweifelhafter kostenloser VPN-Dienst kann für die Privatsphäre schlechter sein als gar kein VPN.

Unter Android läuft eine VPN-App als dauerhafter Hintergrunddienst. Normalerweise siehst du in der Statusleiste ein kleines Schlüsselsymbol oder eine VPN-Anzeige. Sofern die App kein Split Tunneling verwendet, läuft der Datenverkehr von Browsern, Apps und Systemdiensten durch den VPN-Tunnel.

## Warum ein VPN dein Smartphone verlangsamen kann

Jedes VPN verursacht zusätzliche Arbeit. Das Smartphone verschlüsselt Datenpakete, sendet sie an den VPN-Server, wartet auf die Weiterleitung und empfängt die Antwort über denselben Umweg.

Zwei Dinge ändern sich:

- Die Latenz steigt. Ein naher VPN-Server fügt vielleicht nur eine geringe Verzögerung hinzu. Ein Server auf der anderen Seite der Welt kann Webseiten, Spiele und Videoanrufe spürbar träger machen.
- Der Datendurchsatz kann sinken. Die Verschlüsselung kostet Rechenzeit, und ein ausgelasteter oder weit entfernter VPN-Server kann zum Engpass werden.

Mit einem guten VPN, einem nahen Server und einem modernen Protokoll merkst du beim Surfen oder Schreiben von Nachrichten unter Umständen kaum einen Unterschied. Bei einem weit entfernten Server, einem überfüllten Gratis-Server oder einem älteren Protokoll kann der Leistungsverlust deutlich sein.

Der sinnvolle Vergleich sieht so aus: Eine WireGuard-Verbindung zu einem Server in Deutschland kann sich fast normal anfühlen. Eine OpenVPN-TCP-Verbindung zu einem 8.000 km entfernten Server kann selbst einfache Seiten schwerfällig machen.

## Das Protokoll spielt eine Rolle

VPN-Apps lassen dich häufig ein Protokoll wählen. Manche verstecken die Auswahl hinter Bezeichnungen wie `Smart`, `Automatisch` oder einem eigenen Markennamen.

WireGuard ist der moderne Standard, den ich zuerst testen würde, wenn die VPN-App ihn unterstützt. Das Protokoll ist kleiner und einfacher aufgebaut als ältere Lösungen und funktioniert auf Smartphones meist schnell.

OpenVPN ist älter und sehr weit verbreitet. Es bleibt nützlich, besonders in Netzen, die neuere Protokolle blockieren, ist aber häufig langsamer. OpenVPN UDP ist in der Regel schneller als OpenVPN TCP. TCP kann bei instabilen Verbindungen helfen, bringt aber zusätzlichen Aufwand mit.

IKEv2/IPsec wird auf Mobilgeräten weiterhin häufig eingesetzt, weil es den Wechsel zwischen WLAN und mobilen Daten gut verkraftet. Gerade bei Firmen-VPNs kann es ein sinnvoller Mittelweg sein.

Fühlt sich dein VPN langsam an, wechsle nicht sofort den Anbieter. Teste zuerst einen näheren Server und ein anderes Protokoll.

## Der zusätzliche Akkuverbrauch ist real, aber sehr unterschiedlich

Ein VPN kann mehr Akku verbrauchen, weil das Smartphone den Tunnel aktiv hält und Daten verschlüsselt. Eine ehrliche allgemeingültige Prozentzahl gibt es nicht. Displayhelligkeit, Signalqualität, Hintergrundsynchronisierung, Videostreaming und das verwendete VPN-Protokoll beeinflussen den Verbrauch stärker, als eine pauschale Angabe vermuten lässt.

Bei leichtem Surfen und Nachrichten fällt der Mehrverbrauch oft nicht als klarer Balken in der Akkuübersicht auf. Wenn du stundenlang über ein VPN auf schwachen mobilen Daten streamst, kann er deutlicher werden.

Auch die Akkuoptimierung kann VPN-Verbindungen stören. Bricht das VPN immer wieder ab, öffne die Akku-Einstellungen der App und erlaube uneingeschränkte Hintergrundnutzung. Die genaue Bezeichnung unterscheidet sich je nach Hersteller. Häufig findest du sie unter `Einstellungen > Apps > [VPN-App] > Akku`.

## Durchgehend aktives VPN und Kill Switch

Android 7.0 und neuer unterstützen ein durchgehend aktives VPN. Android kann die Verbindung nach dem Start des Geräts herstellen und versuchen, sie aufrechtzuerhalten. Viele Geräte bieten zusätzlich die Option `Verbindungen ohne VPN blockieren`. Sie wird häufig als Kill Switch bezeichnet.

Auf Pixel-Geräten und vielen Android-Versionen gehst du zu `Einstellungen > Netzwerk & Internet > VPN` und tippst neben dem VPN-Profil auf das Zahnradsymbol. Die offizielle Google-Bezeichnung für den dauerhaften Modus lautet `Durchgehend aktives VPN`. Samsung, Xiaomi und andere Hersteller ordnen das Menü teilweise anders an. Suche in den Einstellungen nach `VPN`, wenn du es nicht findest.

Ein Kill Switch ist nützlich, hat aber eine klare Kehrseite. Stürzt die VPN-App ab, ist der Server nicht erreichbar oder stoppt die Akkuoptimierung den Dienst, kann Android den gesamten Internetzugang sperren, bis der Tunnel wieder steht. Das sieht dann wie ein defektes WLAN aus, obwohl die WLAN-Verbindung selbst funktioniert.

## Wann ein VPN die Geschwindigkeit verbessern kann

Es klingt widersprüchlich, aber in einigen speziellen Fällen kann ein VPN die Verbindung beschleunigen.

Drosselt ein Netz bestimmte Arten von Datenverkehr, kann das VPN verbergen, welche Art von Verbindung sich im Tunnel befindet. Das Netz sieht weiterhin verschlüsselte Daten zu einem VPN-Server, erkennt aber einen Videostream, ein Spiel oder einen VoIP-Anruf möglicherweise nicht mehr so leicht.

Das bedeutet nicht, dass ein VPN zusätzliche Bandbreite erzeugt. Es verwandelt kein schwaches 4G-Signal in eine starke 5G-Verbindung und repariert keinen schlechten Router. Es ändert nur die Route und verbirgt die Art des Datenverkehrs gegenüber dem lokalen Netz.

## Bei kostenlosen VPNs ist zusätzliche Vorsicht angebracht

Auch kostenlose VPN-Dienste müssen ihre Server finanzieren. Manche tun das über kostenpflichtige Tarife. Andere setzen auf Werbung, Datensammlung, Übertragungslimits, schwache Infrastruktur oder deutlich problematischere Geschäftsmodelle.

Der kostenlose Tarif von Proton VPN ist eine der bekannteren Ausnahmen. Nach Angaben des Anbieters enthält er kein Datenlimit, keine Werbung und keine Aktivitätsprotokolle. Im Vergleich zu kostenpflichtigen Tarifen ist die Serverauswahl jedoch eingeschränkt. Das ist eine nachvollziehbare Form des Kompromisses.

Problematisch ist dagegen eine kostenlose VPN-App mit unklaren Eigentümern, weitreichenden Berechtigungen, keiner unabhängigen Prüfung, keinem verständlichen Geschäftsmodell und einer nichtssagenden Datenschutzerklärung. Installiere so etwas nicht auf einem Smartphone, das du für Banking, Arbeit oder private Nachrichten verwendest.

## Wann du unter Android ein VPN verwenden solltest

Ein VPN ist besonders auf öffentlichen WLANs, in Hotels, an Flughäfen, in Cafés, in gemeinsam genutzten Wohnnetzen sowie in Schul- oder Arbeitsnetzen sinnvoll, deren Infrastruktur du nicht kontrollierst. Es hilft außerdem, wenn du deine aufgerufenen Ziele auf Netzwerkebene vor dem Internet- oder Mobilfunkanbieter verbergen möchtest.

Im eigenen Heimnetz hängt der Nutzen von deinen Prioritäten ab. Möchtest du verhindern, dass der Internetanbieter deine Zieladressen sieht, kannst du das VPN eingeschaltet lassen. Geht es dir bei Spielen oder Videoanrufen vor allem um maximale Geschwindigkeit und geringe Latenz, schalte es aus oder nutze Split Tunneling für diese Apps.

Split Tunneling lohnt sich. Lass sensible Browser- und Nachrichtenverbindungen sowie Datenverkehr in unbekannten WLANs durch das VPN laufen. Apps, die hinter einem VPN Probleme machen, etwa manche Banking-Apps, können daran vorbeigeleitet werden.

## Wovor ein VPN nicht schützt

Ein VPN verhindert kein Phishing. Es macht eine gefälschte Banking-Seite nicht sicher. Es schützt kein Konto mit einem mehrfach verwendeten Passwort. Es entfernt keine Schadsoftware vom Smartphone. Und es macht einen unseriösen VPN-Anbieter nicht vertrauenswürdig.

Es schützt eine Ebene: die Netzwerkroute und die Vertraulichkeit des Datenverkehrs zwischen deinem Smartphone und dem VPN-Server.

Das ist nützlich. Verlange nur nicht, dass ein VPN jede Sicherheitsaufgabe übernimmt.

## Kurze Antworten

Verbirgt ein VPN meine Aktivitäten vor dem Mobilfunkanbieter?

Es verbirgt die Websites und App-Ziele innerhalb des Tunnels. Der Anbieter kann aber weiterhin sehen, dass du ein VPN verwendest und wie viele Daten du überträgst. Normale Mobilfunkanrufe und SMS laufen nicht durch den VPN-Tunnel.

Kann ein VPN Apps stören?

Ja. Banking-Apps, Streamingdienste, Arbeits-Apps und manche Spiele blockieren VPN-Verbindungen oder bewerten sie als verdächtig. Nutze Split Tunneling, wenn nur eine App Probleme hat.

Sollte ich es ständig eingeschaltet lassen?

In öffentlichen Netzen ist das sinnvoll. Zu Hause hängt es davon ab, ob dir Privatsphäre oder maximale Geschwindigkeit wichtiger ist. Teste deine üblichen Apps, bevor du `Durchgehend aktives VPN` zusammen mit `Verbindungen ohne VPN blockieren` einschaltest.

Funktioniert es auch über mobile Daten?

Ja. Ein VPN funktioniert im WLAN und über mobile Daten. Schwaches Signal und Netzauslastung bleiben bestehen, daher kann sich das VPN besonders dann langsam anfühlen, wenn schon die Grundverbindung Probleme hat.
