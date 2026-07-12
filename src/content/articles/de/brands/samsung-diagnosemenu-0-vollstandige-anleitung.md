---
title: "Samsung-Diagnosemenü #0#: Vollständige Anleitung"
description: "Du gibst #0# in die Samsung Telefon App ein, und die normale Wähltastatur verschwindet. Stattdessen erscheint ein schlichtes Raster mit Schaltflächen für Display, Touchpanel, Lautsprecher, Sensoren, Kameras, Vibrationsmotor und Tasten."
listSummary: "Du gibst #0# in die Samsung Telefon App ein, und die normale Wähltastatur verschwindet."
hub: "brands"
sourceNumber: 160
order: 8
tags: ["hersteller","android","diagnose","markenspezifisch","ratgeber"]
locale: "de"
draft: false
---
Wenn es funktioniert, wirkt es fast zu einfach. Wenn nicht, kann es erstaunlich frustrierend sein, weil Samsung dieses Menü nicht wie eine normale Verbraucherfunktion behandelt. Betrachte es als systemnahes Servicemenü, das auf vielen Galaxy-Geräten funktioniert, aber nicht auf jedem Modell, Provider-Build oder in jeder Region garantiert verfügbar ist.

## Bevor du den Code ausprobierst

Verwende die Samsung Telefon App. In Google Telefon oder einer anderen Wähl-App eines Drittanbieters funktioniert der Code möglicherweise nicht, selbst auf demselben Gerät. Öffne das Tastenfeld, gib `*#0*#` ein und warte. Die Anruftaste musst du nicht drücken.

Passiert nichts, kann das Menü durch Firmware, Mobilfunkanbieter, Arbeitsprofil, MDM-Richtlinie oder Sicherheitseinstellungen blockiert sein. Auf neueren One UI-Builds kann auch **Automatische Sperre** beziehungsweise **Auto Blocker** Dienst- und Diagnosecodes verhindern. Deaktiviere die Funktion nur kurz zum Testen und schalte sie danach wieder ein. Sie hat einen sinnvollen Sicherheitszweck.

Für die meisten Menschen ist Samsung Members die sicherere offizielle Alternative. Öffne je nach App-Version Samsung Members und gehe zu **Support > Telefondiagnose > Jetzt beginnen**. Du kannst alle Tests ausführen oder eine einzelne Kategorie auswählen. Die App deckt die Prüfungen ab, die im Alltag wirklich wichtig sind, und erklärt sie besser als das rohe `*#0*#`-Raster.

## Display- und Touchscreen-Tests

Die Schaltflächen Red, Green, Blue und Black füllen das Display mit einer einheitlichen Farbe. Suche damit nach toten oder festhängenden Pixeln, Farbstichen, ungleichmäßiger Helligkeit und Schäden, die auf deinem Hintergrundbild kaum auffallen.

Black ist bei Galaxy-Geräten mit OLED besonders nützlich. Echtes Schwarz sollte wie ein ausgeschalteter Bildschirm aussehen. Helle Punkte oder farbige Sprenkel können auf festhängende Pixel hindeuten, wolkige Stellen eher auf Panel- oder Druckschäden.

Der Test Touch zeigt ein Raster oder Muster, das du mit dem Finger nachzeichnest. Jeder Bereich sollte sauber reagieren. So findest du tote Zonen an den Rändern, die leicht übersehen werden, wenn du nur ein paar Wörter tippst oder durch die Einstellungen scrollst.

Dimming verändert Helligkeit und Farbausgabe des Displays. Achte auf Flackern, ungleichmäßige Helligkeit, merkwürdige Farbwechsel oder ein Panel, das nicht gleichmäßig abdunkelt. Bei älteren Galaxy-Modellen mit LCD können Probleme der Hintergrundbeleuchtung auffallen. Bei OLED geht es eher um Pixelverhalten und Helligkeitssteuerung.

## Audio, Vibration und Tasten

Receiver spielt Ton über die Hörmuschel ab. Speaker nutzt die Lautsprecher. Bei neueren Galaxy-Geräten mit Stereoausgabe solltest du darauf achten, ob Hörmuschel- und unterer Lautsprecher deutlich unterschiedlich laut klingen. Eine Seite kann schwach sein, obwohl das Smartphone technisch noch Ton ausgibt.

Vibration aktiviert den Haptikmotor. Ein intakter Motor fühlt sich gleichmäßig und kontrolliert an. Rasselt er, brummt ungewöhnlich laut oder wirkt rau, können Motor oder Befestigung verschlissen sein.

Sub key prüft Hardwaretasten und einige Navigationseingaben. Drücke Lautstärke-, Ein/Aus- und weitere unterstützte Tasten, wenn der Test dazu auffordert. Funktioniert eine Taste nur mit starkem Druck oder aus einem bestimmten Winkel, solltest du das nicht ignorieren. Das ist meistens kein Softwareproblem.

## Sensoren und Kameras

Sensor ist einer der besten Gründe, `*#0*#` zu verwenden. Das Menü kann Live-Werte von Beschleunigungssensor, Gyroskop, Näherungssensor, Lichtsensor, Magnetsensor, Barometer auf unterstützten Modellen, Fingerabdrucksensor und älteren Herzfrequenzsensoren anzeigen, sofern das Galaxy-Gerät diese Hardware besitzt.

Einige Prüfungen sind einfach. Decke den Näherungssensor am oberen Displayrand ab und beobachte, ob sich der Zustand ändert. Bewege das Smartphone und prüfe die Beschleunigungswerte. Drehe es für das Gyroskop. Decke den Lichtsensor ab und richte ihn anschließend auf eine Lampe.

Sensorwerte brauchen gesunden Menschenverstand. Ein Magnetsensor kann sich neben einem Laptop, einer magnetischen Hülle, einer Autohalterung oder einem Metalltisch merkwürdig verhalten. Ein Näherungssensor kann durch eine Displayschutzfolie verdeckt werden. Teste zuerst in einer sauberen Umgebung, bevor du von einem Defekt ausgehst.

Mega Cam und Front Cam öffnen die hinteren und vorderen Kameras. Die Tests bestätigen, dass Module starten, fokussieren und aufnehmen. Sie beweisen nicht, dass jedes Objektiv scharf ist, die optische Bildstabilisierung korrekt arbeitet oder Nachtfotos gut aussehen. Hardwaretests sind grobe Werkzeuge.

## Weitere möglicherweise nützliche Codes

Samsung hat noch andere Wählcodes, deren Unterstützung jedoch von Modell, Mobilfunkanbieter, One UI-Version und Region abhängt. Behandle Code-Listen aus dem Internet nicht als allgemeingültig.

`*#06#` zeigt die IMEI an. Der Code ist unkritisch und funktioniert bei vielen Smartphones, nicht nur bei Samsung.

`*#1234#` zeigt auf vielen Galaxy-Geräten Samsung-Firmwareinformationen wie AP-, CP- und CSC-Buildstrings. Das hilft, wenn du die exakt installierte Softwareversion prüfen möchtest.

`*#0228#` kann auf vielen Galaxy-Smartphones Akkustatusdaten öffnen. Falls der Code funktioniert, nutze die Ansicht als kurzen Statuscheck, nicht als vollständigen Bericht zum Akkuzustand.

Ältere Codes wie `*#7353#`, `*#0842#`, `*#0673#` und `*#0289#` funktionieren auf manchen Geräten weiterhin. Auf anderen passiert nichts. Das ist heute normal.

## Was `*#0*#` nicht beweisen kann

Das Menü prüft, ob Hardware in diesem Moment reagiert. Es liefert keinen langfristigen Akkuzustand, keinen Verlauf der Ladezyklen, keine Protokolle zur thermischen Drosselung, keine Historie der Signalstärke und keine Messung der Speicher-I/O-Leistung über längere Zeit.

Auch die Echtheit eines Smartphones lässt sich damit allein nicht beweisen. Ein funktionierendes Samsung-Diagnosemenü ist ein gutes Zeichen, reicht aber nicht aus. Prüfe beim Gebrauchtkauf zusätzlich IMEI, Firmware-Build, gegebenenfalls Knox-Status, Kaufbeleg und äußere Merkmale.

Ein Smartphone kann `*#0*#` vollständig bestehen und sich trotzdem langsam anfühlen, weil der Speicher fast voll ist, eine fehlerhafte App im Hintergrund läuft, die Akkuspannung unter Last einbricht oder ein aktuelles Update einen Fehler eingeführt hat. Hardwaretests erklären nicht alles.

## Wann Samsung Members die bessere Wahl ist

Nutze Samsung Members, wenn der Code nicht funktioniert, du ein verständlicheres Ergebnis mit bestanden oder fehlgeschlagen brauchst oder einen Fehlerbericht senden möchtest. Samsungs offizielle Diagnose kann je nach Gerät Akkustatus, Laden per Kabel, kabelloses Laden, Touchscreen, Sensoren, Mikrofon, Lautsprecher, Kamera, WLAN, Bluetooth, SIM-Karte, Mobilfunknetz, Fingerabdruckerkennung, NFC, Tasten und weitere Funktionen testen.

Weniger technisch erfahrene Menschen sollten mit Samsung Members beginnen. Die App zeigt bei einem fehlgeschlagenen Test eher, wie es weitergeht. Das `*#0*#`-Menü setzt meistens voraus, dass du bereits weißt, wonach du suchst.

Keines der Werkzeuge ist in jedem Fall besser. Für einen schnellen Display-, Touchscreen-, Sensor- und Audiocheck bei einem gebrauchten Smartphone würde ich `*#0*#` verwenden. Für normale Fehlerbehebung, Support und offizielle Berichte ist Samsung Members die sinnvollere Wahl.

## Android 17 und Galaxy-Kompatibilität

Android 17 wurde am 16. Juni 2026 zunächst für die meisten unterstützten Pixel-Geräte veröffentlicht. Galaxy-Smartphones folgen Samsungs eigenem One-UI-Zeitplan. Das Diagnosemenü ändert sich also nicht allein deshalb, weil Android 17 existiert.

Wenn Android-17-basierte Galaxy-Builds für dein Modell erscheinen, kann der Diagnosezugang weiterhin von Samsung Telefon, One UI-Version, Provider-Firmware, Region, Sicherheitseinstellungen und Samsung-Members-Updates abhängen. Dass der Code auf einem Galaxy der S-Serie funktioniert, beweist nicht, dass er auf einem danebenliegenden Modell der A-Serie ebenfalls verfügbar ist.

Ist `*#0*#` blockiert, verschwende keine Stunde mit der Wähltastatur. Führe stattdessen die Telefondiagnose in Samsung Members aus.

---

*Meta-Beschreibung: Der Samsung-Code `*#0*#` kann ein verstecktes Galaxy-Diagnosemenü für Display, Touchscreen, Sensoren, Kameras, Lautsprecher und Vibration öffnen. Hier erfährst du, was es prüft und welche Alternative du nutzen kannst, wenn der Code blockiert ist.*
