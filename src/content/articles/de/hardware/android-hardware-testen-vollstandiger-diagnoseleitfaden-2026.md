---
title: "Android-Hardware testen: vollständiger Diagnoseleitfaden (2026)"
description: "Ein Android-Smartphone kann äußerlich völlig in Ordnung wirken, obwohl ein Bauteil langsam ausfällt. Ein verschlissener Akku, ein schwacher Lautsprecher, ein defekter Näherungssensor oder eine beschädigte Antenne kündigen sich nicht immer eindeutig an. Stattdessen bemerkst du eine kürzere Laufzeit, merkwürdige Telefonate, unerklärliche Hitze oder einen Bildschirm, der Berührungen in einer Ecke ignoriert."
listSummary: "Ein Android-Smartphone kann äußerlich völlig in Ordnung wirken, obwohl ein Bauteil langsam ausfällt."
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["akku","akkuverbrauch","fehlerbehebung","android","leistung"]
locale: "de"
draft: false
---
Die gute Nachricht: Vieles davon lässt sich prüfen, bevor du für eine Reparatur bezahlst. Android bietet Einstellungsseiten, Herstellerdiagnosen, Wählcodes und manuelle Tests für die wichtigsten Hardwarekomponenten. Der unübersichtliche Teil ist, dass nichts davon wirklich auf allen Geräten gleich funktioniert.

Android 17 wurde am 16. Juni 2026 zunächst für die meisten unterstützten Pixel-Geräte veröffentlicht, während andere Hersteller ihren eigenen Zeitplänen folgen. Das ist relevant, weil Diagnosemenüs, Akkuzustandsanzeigen und Einstellungspfade je nach Android-Version, Herstelleroberfläche, Anbieter-Software und Region abweichen können. Behandle jeden Code in diesem Leitfaden als Abkürzung, nicht als Garantie.

## Schnelle Antwort

Beginne mit dem offiziellen Diagnosewerkzeug deines Herstellers, sofern eines vorhanden ist.

- Samsung Galaxy: Öffne Samsung Members, tippe auf `Support` und anschließend im Bereich Diagnose auf `Tests anzeigen`. Du kannst alle Diagnosen ausführen oder einzelne Komponenten wie Akku, Lautsprecher, Mikrofon, Display, Kamera oder Sensoren auswählen. Viele Galaxy-Geräte unterstützen außerdem `*#0*#` in der Telefon-App als Hardware-Testmenü.
- Google Pixel: Wähle bei bestehender Internetverbindung `*#*#7287#*#*`, um auf unterstützten Pixel-Smartphones die Pixel Repair Diagnostics App zu öffnen. Beim Pixel Tablet läuft die Diagnose über Googles webbasiertes Pixel-Update- und Softwarereparatur-Tool.
- Motorola: Öffne `Device Help > Device diagnosis > Hardware test`. Diese offiziellen englischen Bezeichnungen können je nach Sprache und Modell anders angezeigt werden.
- Xiaomi, Redmi und POCO: Probiere `*#*#6484#*#*`, um das CIT-Diagnosemenü zu öffnen. Bei vielen Modellen lässt es sich außerdem aufrufen, indem du in den Telefoninformationen mehrfach auf die Kernel-Version tippst.
- Geräte mit weitgehend unverändertem Android: `*#*#4636#*#*` kann auf vielen Smartphones ein Testmenü mit Informationen zu Telefonie, Netzwerk, Nutzung und teilweise Akku öffnen. Es ist kein vollständiger Hardwaretest, und viele Samsung- oder Anbieter-Versionen blockieren den Code.

Wenn ein Code nichts bewirkt, verschwende keine Zeit damit. Nutze die manuellen Tests weiter unten oder eine Diagnose-App.

## Entscheide zuerst zwischen Software und Hardware

Dieser Schritt kann unnötige Reparaturkosten verhindern. Ein Softwarefehler kann genau wie ein defektes Bauteil aussehen.

Der abgesicherte Modus ist der erste Filter. Halte die Ein-/Aus-Taste gedrückt, bis das Ausschaltmenü erscheint, und halte anschließend `Ausschalten` gedrückt, bis die Abfrage für den abgesicherten Modus angezeigt wird. Bei manchen Geräten ist eine andere Tastenkombination nötig. Das Ziel bleibt gleich: Android startet ohne Apps von Drittanbietern.

Verschwindet das Problem im abgesicherten Modus, ist wahrscheinlich eine installierte App beteiligt. Entferne kürzlich installierte Apps nacheinander und starte nach jeder Deinstallation normal neu. Bleibt der Fehler im abgesicherten Modus bestehen, liegt die Ursache entweder bei Android selbst, der Hersteller-Firmware oder der Hardware.

Das Zurücksetzen auf Werkseinstellungen ist der letzte Softwaretest. Sichere vorher deine Daten. Wenn der Fehler auch nach einem sauberen Reset ohne wiederhergestellte Apps auftritt, wird ein Hardwareproblem deutlich wahrscheinlicher.

Achte auf wiederkehrende Muster. Eine tote Touch-Zone an exakt derselben Stelle weist auf Display oder Digitizer hin. Ein Smartphone, das sich bei 20 % ausschaltet, am Ladegerät aber weiterläuft, deutet auf den Akku. Eine Kamera, die nach einem Sturz summt oder vibriert, kann ein beschädigtes Fokus- oder OIS-Modul haben. Wird das Gerät direkt nach einem großen Update wie Android 17 instabil, solltest du zuerst aktuelle Patches installieren und erneut testen, bevor du einen Defekt der Hauptplatine annimmst.

## Warum Hardware ausfällt

Akkus verschleißen. Das ist normale Lithium-Ionen-Chemie. Google verwendet für Pixel-Akkus 80 % Restkapazität als Schwelle, ab der ein Austausch erwogen wird, und nennt je nach Modell unterschiedliche Richtwerte für Ladezyklen. Pixel 3 bis Pixel 8 Pro sowie Pixel Fold sind mit etwa 800 Zyklen angegeben, Pixel 8a und neuere Modelle mit etwa 1.000 Zyklen.

Anschlüsse und Tasten verschleißen durch Nutzung. In USB-C-Buchsen sammelt sich Flusenstaub, besonders wenn das Smartphone oft in der Hosentasche steckt. Tasten verlieren nach Tausenden Betätigungen ihren klaren Druckpunkt. Lautsprechergitter setzen sich so langsam zu, dass du die Veränderung manchmal erst bemerkst, wenn Gespräche deutlich dumpf klingen.

Stürze verursachen merkwürdigere Fehler. Das Glas kann unbeschädigt bleiben, während sich im Inneren ein Stecker löst, ein Kameramodul beschädigt, der Rahmen verbogen oder eine Lötstelle geschwächt wird. Wasser ist tückischer, weil Korrosion manchmal erst Tage oder Wochen später auffällt.

Hitze beschleunigt fast jeden Alterungsprozess. Laden in direkter Sonne, Spielen während des Ladens oder ein Smartphone im heißen Auto lassen den Akku schneller altern und können thermische Drosselung auslösen. Länger anhaltende Akkutemperaturen über ungefähr 40 °C solltest du ernst nehmen.

Auch Fertigungsstreuung ist real. Zwei Smartphones mit derselben Modellbezeichnung verhalten sich nicht vollkommen identisch. Kleine Unterschiede bei Chips, Wärmeübertragung, Displaypanel, Sensorkalibrierung, Modem-Firmware und regionaler Geräteversion können Akkulaufzeit, Temperatur, Empfang und Benchmarkwerte beeinflussen. Das bedeutet nicht automatisch, dass eines der Geräte defekt ist. Online genannte Werte sind Bereiche, keine Zusagen.

## Teste den Akku

Beginne mit den Informationen, die dein Smartphone tatsächlich anzeigt.

Auf Pixel 8a und neueren Modellen gehst du zu `Einstellungen > Akku > Akkuzustand`. Dort wird der Akkuzustand als `Normal`, `Reduziert` oder gegebenenfalls `Nicht verfügbar` angezeigt. Unter `Akkukapazität` findest du eine Schätzung der verbliebenen Kapazität im Vergleich zum Neuzustand. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 und Pixel 8 Pro zeigen diesen Akkuzustand nicht an.

Bei Samsung verwendest du die Diagnose in Samsung Members. Der aktuelle deutsche Pfad lautet `Samsung Members > Support > Tests anzeigen`, anschließend wählst du den Akkutest. Die genaue Darstellung kann je nach Region und App-Version abweichen, aber Samsung Members ist verlässlicher als zufällige Akkucodes aus dem Internet.

Bei OnePlus, OPPO, realme, Xiaomi und anderen Herstellern suchst du unter den Akku-Einstellungen oder in der Gerätepflege des Herstellers. Manche Modelle zeigen einen Akkuzustand an, andere nicht. Die Akkuinformationen unter Android sind in der Praxis weiterhin uneinheitlich.

Verdächtig ist ein Akku, wenn das Smartphone bei leichter Nutzung schnell leer wird, sich bei 15 bis 20 % ausschaltet, beim Laden ungewöhnlich heiß wird oder sich Rückseite beziehungsweise Display anheben. Benutze ein Gerät mit aufgeblähtem Akku nicht weiter und lasse es prüfen. Das ist kein Softwareproblem.

## Teste Display und Touch-Ebene

Zeige zum Prüfen auf Pixelfehler vollflächige weiße, schwarze, rote, grüne und blaue Bilder an. Sieh langsam über das gesamte Display. Tote Pixel bleiben schwarz, festhängende Pixel leuchten dauerhaft in einer Farbe. OLED-Einbrennen erkennst du am besten auf einer gleichmäßig grauen Fläche bei mittlerer Helligkeit.

Für den Touchscreen öffnest du eine Zeichen-App und ziehst eng beieinanderliegende waagerechte und senkrechte Linien über die gesamte Fläche. Unterbrechungen weisen auf tote Bereiche hin. Alternativ kannst du in den Entwickleroptionen `Berührungen anzeigen` oder `Zeigerposition` aktivieren und mit dem Finger über das komplette Panel fahren.

Samsungs Menü `*#0*#` enthält auf vielen Galaxy-Modellen Display- und Touchtests. Pixel Diagnostics, Motorola Device Help und Xiaomi CIT können je nach Gerät ebenfalls Display und Berührung prüfen.

## Teste Lautsprecher und Mikrofone

Spiele zuerst einen Klingelton ab, danach Musik oder ein Video, das du gut kennst. Achte auf Rasseln, Verzerrungen oder darauf, ob ein Stereokanal viel leiser ist als der andere. Decke bei Stereogeräten jeweils einen Lautsprecher mit dem Finger ab, um Hörmuschel und unteren Lautsprecher getrennt zu beurteilen.

Nimm für das Mikrofon eine kurze Sprachaufnahme aus Armlänge auf und höre sie ab. Teste danach ein echtes Telefonat. Bei Anrufen wirken Rauschunterdrückung und Netzverarbeitung mit, deshalb kann eine Aufnahme gut klingen, während die Gesprächsqualität trotzdem schlecht ist.

Bevor du einen Defekt vermutest, nimm die Hülle ab, trenne Bluetooth-Geräte, reinige Lautsprecher- und Mikrofonöffnungen mit einer trockenen weichen Bürste und prüfe die Mikrofonberechtigung der verwendeten App.

## Teste die Kameras

Öffne die Kamera-App und prüfe jede vorhandene Kamera: Hauptkamera, Ultraweitwinkel, Teleobjektiv, gegebenenfalls Makro und Frontkamera. Achte auf ständiges Nachfokussieren, dauerhaft unscharfe Bereiche, Farbstiche, Zittern im Video oder Klickgeräusche beim Fokussieren.

Die optische Bildstabilisierung kann nach einem Sturz ausfallen. Das Symptom ist meist deutlich: Das Video zittert trotz ruhiger Hände oder die Kamera erzeugt ein summendes Geräusch. Software beeinflusst die Bildverarbeitung, kann aber kein physisch gelockertes Stabilisierungsmodul reparieren.

## Teste Laden und Anschlüsse

Probiere zuerst ein nachweislich funktionierendes Kabel und Ladegerät aus. Das klingt banal, aber erstaunlich viele vermeintlich defekte USB-C-Buchsen sind in Wirklichkeit kaputte Kabel.

Leuchte in den Anschluss und prüfe ihn auf Flusen, Feuchtigkeit, Korrosion oder sichtbare Schäden. Stecke keine Gegenstände hinein. Google rät bei Pixel-Geräten ausdrücklich davon ab. Halte die USB-C-Buchse nach unten und klopfe das Smartphone vorsichtig gegen deine Hand, um lose Partikel zu entfernen. Sitzt Schmutz fest oder wirkt der Anschluss beschädigt, lasse ihn professionell reinigen.

Lädt das Smartphone nur in einem bestimmten Winkel, trennt sich die Verbindung bei Bewegung oder funktioniert die Datenübertragung mit mehreren Kabeln nicht, muss möglicherweise der Anschluss oder die untere Platine repariert werden.

## Teste die Sensoren

Sensorfehler zeigen sich oft als sehr spezielle Probleme: Die automatische Drehung funktioniert nicht, das Display bleibt beim Telefonieren an, der Kompass zeigt in die falsche Richtung oder die automatische Helligkeit reagiert übertrieben.

Schalte für Beschleunigungssensor und Gyroskop die Rotationssperre aus und drehe das Smartphone langsam. Die Anzeige sollte sauber folgen. Ein Panoramafoto ist ebenfalls ein brauchbarer Gyroskoptest, weil das Zusammensetzen des Bildes von der Bewegungserfassung abhängt.

Starte für den Näherungssensor einen Anruf und bedecke den oberen Bildschirmbereich nahe der Hörmuschel. Das Display sollte sich ausschalten und nach dem Aufdecken wieder angehen. Entferne Hülle und Displayschutz, bevor du den Sensor für defekt hältst.

Aktiviere für den Lichtsensor die automatische Helligkeit und wechsle zwischen hellen und dunklen Bereichen. Das Display sollte innerhalb weniger Sekunden reagieren.

Öffne für den Magnetometer Maps oder eine Kompass-App im Freien und halte Abstand zu Autos, Laptops, Magneten und Metalltischen. Zeigt die Richtung falsch, kalibriere mit einer Bewegung in Form einer Acht.

Samsungs `*#0*#`-Menü und Samsung Members können Sensoren testen. Pixel Diagnostics, Motorola Device Help und Xiaomi CIT bieten je nach Modell ebenfalls entsprechende Prüfungen.

## Teste die Netzwerkhardware

Probleme mit Antenne und Funkmodul sind schwerer nachzuweisen, weil sich das Mobilfunknetz ständig verändert. Vergleiche dein Smartphone mit einem anderen Gerät im selben Netz, am selben Ort und zur selben Zeit.

Die Signalstärke wird in Status- oder SIM-Informationen meist in dBm angezeigt. Die Skala ist negativ, deshalb ist ein Wert näher an null besser. Ungefähr -50 dBm ist ausgezeichnet, etwa -90 dBm brauchbar und -110 dBm oder schwächer schlecht. LTE, 5G und WLAN sind nicht direkt anhand derselben Schwellen vergleichbar. Nutze die Werte deshalb zum Vergleich und nicht als universelle Bestehen-oder-Durchfallen-Grenze.

Wenn nur dein Smartphone ständig die WLAN-Verbindung verliert, teste es nahe am Router, in einem anderen WLAN und bei ausgeschaltetem Bluetooth. Tritt der Fehler überall mit demselben Gerät auf, werden Funkhardware oder Firmware wahrscheinlicher.

runcheck ist hier nützlich, weil die App Akku-, Temperatur-, Netzwerk-, Speicher- und Geschwindigkeitstestdaten in einem Durchlauf zusammenführt. Nach Stürzen, starker Hitze oder Feuchtigkeit können mehrere Symptome gleichzeitig auftreten.

## Wann sich eine Reparatur lohnt

Eine Reparatur ist sinnvoll, wenn sich das Problem zuverlässig wiederholen lässt, im abgesicherten Modus bestehen bleibt, einen sauberen Reset überlebt und im Herstellerdiagnosetool oder manuellen Test auftaucht.

Tausche keine Bauteile, weil sich eine einzelne App einmal merkwürdig verhalten hat. Lasse das Smartphone aber prüfen, wenn der Akku aufgebläht ist, der Ladeanschluss physisch locker sitzt, der Touchscreen immer an derselben Stelle ausfällt, Kameras nach einem Sturz summen oder Mikrofone sowohl bei Aufnahmen als auch bei Anrufen versagen.

## Häufige Fragen

### Sind Diagnosecodes sicher?

Die hier genannten verbreiteten Testmenüs sind überwiegend schreibgeschützte Informationsseiten oder interaktive Hardwaretests. Gib trotzdem keine zufälligen Codes aus dem Internet ein. Manche Herstellercodes können Funkparameter verändern oder Serviceaktionen auslösen.

### Warum funktioniert `*#*#4636#*#*` nicht?

Der Code ist unter Android nicht standardisiert. Er funktioniert auf vielen Geräten mit weitgehend unverändertem Android, kann aber von Samsung, Mobilfunkanbietern oder anderer Hersteller-Firmware deaktiviert werden.

### Wie oft sollte ich die Hardware testen?

Für normale Wartung reicht alle paar Monate. Teste sofort nach einem harten Sturz, Kontakt mit Wasser, plötzlich starkem Akkuverbrauch, Ladeproblemen oder bevor du ein gebrauchtes Smartphone kaufst oder verkaufst.

### Ist ein langsames Smartphone immer ein Hardwareproblem?

Nein. Beginne mit dem abgesicherten Modus, freiem Speicherplatz, App-Updates und aktuellen Systemupdates. Bleibt das Gerät nach einem Zurücksetzen auf Werkseinstellungen langsam, verdienen Hardware, Speicherverschleiß, ein schwacher Akku oder thermische Drosselung mehr Aufmerksamkeit.
