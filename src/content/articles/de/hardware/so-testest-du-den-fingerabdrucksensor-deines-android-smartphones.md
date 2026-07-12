---
title: "So testest du den Fingerabdrucksensor deines Android-Smartphones"
description: "So prüfst du, ob der Fingerabdrucksensor deines Android-Smartphones funktioniert, mit integrierten Diagnosen, Telefoncodes, Pixel-Werkzeugen, Samsung Members, Xiaomi CIT und einfachen Praxistests."
listSummary: "diagnose, sensoren und android"
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnose","sensoren","android","hardware","ratgeber"]
locale: "de"
draft: false
---
Ist der Fingerabdrucksensor kaputt, oder kommt er nur mit deiner Displayschutzfolie nicht klar? Das klingt wie ein Scherz, ist aber die erste Frage, die du stellen solltest.

Fehler bei der Fingerabdruckerkennung haben oft banale Ursachen. Trockene Haut, Feuchtigkeit, eine billige Schutzfolie aus gehärtetem Glas, eine schlechte Registrierung oder ein nicht vollständig abgeschlossenes Softwareupdate können einen funktionierenden Sensor wie defekte Hardware aussehen lassen. Ein echter Hardwarefehler ist ebenfalls möglich, besonders nach einem Sturz oder einer Displayreparatur. Beginne aber nicht mit dieser Annahme.

## Schnelltest: zehnmal entsperren

Registriere einen Fingerabdruck, reinige den Sensorbereich, trockne deinen Finger und versuche zehnmal hintereinander, das Smartphone zu entsperren.

Bei einem kapazitiven Sensor auf der Rückseite oder an der Seite bedeuten 8 oder 9 erfolgreiche Entsperrungen von 10 normalerweise, dass die Hardware in Ordnung ist. Scheitert der Versuch ein- oder zweimal, liegt es eher an der Fingerposition, Schmutz, Hautbeschaffenheit oder Software.

Bei einem Sensor im Display solltest du die Vorbereitung etwas genauer nehmen und das Ergebnis etwas großzügiger bewerten. Optische und Ultraschallsensoren hängen von der Displayoberfläche ab, deshalb kann eine Displayschutzfolie die Erkennung stark verschlechtern. Scheitert ein sauberes Smartphone ohne Schutzfolie mehr als 3-mal bei 10 Versuchen, solltest du weiterprüfen.

## Tests auf Samsung Galaxy

Öffne auf vielen Samsung Galaxy-Smartphones die vorinstallierte Telefon-App und gib `*#0*#` ein. Suche im Diagnosemenü nach Fingerprint Scanner oder einem Fingerabdruckeintrag unter Sensors. Das Menü kann anzeigen, ob die Hardware einen Finger erkennt und ob der Abgleich funktioniert.

Samsung Members ist der besser unterstützte Weg. Öffne die App und rufe den Diagnosebereich für das Smartphone auf. Je nach App-Version und Region befindet er sich im Support-Bereich oder auf dem Tab Discover. Starte dort den Fingerabdrucktest, sofern dein Modell ihn anbietet. Samsung nennt außerdem nicht zertifizierte Displayschutzfolien, verschmutzte Sensoren, zerkratztes Glas, trockene Haut und Hüllen, die den Sensor verdecken, als häufige Ursachen.

Ein aktuelles Samsung-Detail wird leicht übersehen: Auf einigen Galaxy-Smartphones mit Android 16, One UI 8 oder neuer erfolgt die Registrierung laut Samsung mit einer Wischbewegung. Folge der Bewegung auf dem Display, statt davon auszugehen, dass jedes Galaxy weiterhin nur wiederholtes statisches Auflegen erwartet.

## Tests auf Xiaomi, Redmi und POCO

Öffne auf Xiaomi-, Redmi- und POCO-Smartphones die Telefon-App und gib `*#*#6484#*#*` ein. Öffnet sich CIT nicht, probiere `*#*#64663#*#*`.

Suche in CIT nach `Fingerprint sensor check`, `Fingerprint input test` oder einem ähnlich bezeichneten Eintrag. Xiaomi empfiehlt die CIT-Hardwareerkennung auf seinen Supportseiten ausdrücklich, wenn die Fingerabdruckoption fehlt. Es handelt sich also nicht nur um einen Trick aus einem Forum.

Du kannst die Diagnose auch über die Geräteinformationen in den Einstellungen versuchen. Rufe dort die Seite mit den ausführlichen Spezifikationen auf und tippe mehrmals auf die Kernel-Version. Xiaomi ändert die Bezeichnungen zwischen MIUI und HyperOS, der Weg über die Kernel-Version funktioniert aber häufig noch, wenn der Telefoncode gesperrt ist.

## Tests auf Google Pixel

Pixel-Smartphones haben kein öffentliches, nur für Fingerabdrücke vorgesehenes Telefonmenü wie Samsung oder Xiaomi.

Für Reparaturdiagnosen dokumentiert Google auf unterstützten Pixel-Smartphones den Code `*#*#7287#*#*` für die Pixel Repair Diagnostics App. Sie kann die Gerätehardware vor oder nach einer Reparatur prüfen. Google verweist außerdem auf Pixel Update and Software Repair, um das Betriebssystem zu aktualisieren und den Under-Display Fingerprint Sensor, kurz UDFPS, anzupassen.

Im normalen Alltag bleibt der praktische Pixel-Test einfach: Lösche alle Fingerabdrücke, starte das Smartphone neu, registriere einen Finger erneut und teste das Entsperren mehrmals. Fehlt der Fingerabdruckbereich vollständig in den Einstellungen oder beginnt die Registrierung gar nicht, ist das ernster als einige fehlgeschlagene Entsperrversuche.

Android 17 ist hier erwähnenswert, weil unterstützte Pixel-Geräte die Version zuerst erhielten. Beginnt ein Fingerabdruckproblem direkt nach einem großen Android-17-Update, prüfe nachfolgende Patches und Hinweise des Pixel-Supports, bevor du für eine Reparatur bezahlst.

## Andere Android-Smartphones

OnePlus, Motorola, Realme, OPPO, Nokia und ähnliche Android-Smartphones unterscheiden sich zu stark für einen universellen Fingerabdruckcode.

Beginne mit der Support- oder Diagnose-App des Herstellers, sofern das Smartphone eine solche App enthält. Motorola bietet beispielsweise auf vielen Modellen Hardwaretests in Device Help. Geräte aus der OnePlus- und OPPO-Familie können `*#899#` oder ältere Engineering-Menüs bereitstellen, die Unterstützung ist jedoch uneinheitlich.

Eine App eines Drittanbieters kann zumindest eine grundlegende Frage beantworten: Erkennt Android überhaupt einen Fingerabdrucksensor? Apps wie Sensor Test, DevCheck und Phone Doctor Plus können anzeigen, ob die Hardware Abstraction Layer für den Fingerabdrucksensor vorhanden ist. Einen sicheren Fingerabdruckabgleich können sie normalerweise nicht durchführen, weil Android biometrische Daten absichtlich schützt. Sie helfen aber dabei, zwischen „Hardware fehlt“ und „Erkennung funktioniert schlecht“ zu unterscheiden.

## Was das Ergebnis bedeutet

Zeigt das Smartphone keine Fingerabdruckeinstellungen mehr, wird der Sensor nicht erkannt oder meldet die Diagnose einen Hardwarefehler, ist das Problem wahrscheinlich physisch. Häufige Ursachen sind ein beschädigtes Flexkabel, ein gebrochener Sensor, Wasserkontakt oder ein Displaytausch, bei dem der Sensor im Display nicht korrekt gekoppelt oder ausgerichtet wurde.

Wird die Hardware erkannt, aber der Abgleich funktioniert schlecht, solltest du das Bauteil nicht sofort für defekt halten. Dann gehört der Fehler eher in die lösbare Kategorie.

Lösche alle Fingerabdrücke und registriere sie neu. Beginne mit einem Finger. Erfasse während der Registrierung Mitte, Ränder und Spitze des Fingers, damit das Smartphone eine brauchbare Karte erhält, statt zehnmal denselben Teilabdruck zu speichern.

Registriere denselben Finger zweimal, falls dein Smartphone das erlaubt. Elegant ist das nicht, aber es funktioniert erstaunlich oft. Verwende beim zweiten Durchgang etwas andere Winkel und einen leicht veränderten Druck.

Entferne die Displayschutzfolie für den Test. Sie ist das häufigste Problem bei Sensoren im Display. Eine Folie, die nicht für das genaue Smartphone-Modell ausgelegt ist, kann bei optischen Sensoren Licht streuen oder die Messung eines Ultraschallsensors beeinträchtigen. Funktioniert die Erkennung ohne Folie, war die Folie die Ursache.

Reinige den Sensor und deinen Finger. Hautfett, Staub, Cremereste, Schweiß und rissige Haut verringern die Zahl brauchbarer Papillarlinien. Sind deine Hände sehr trocken, trage eine kleine Menge Handcreme auf und lasse sie vor dem Test einziehen. Nasse Finger sind genauso problematisch.

Installiere ausstehende Systemupdates. Fingerabdrucktreiber stecken in der Firmware, und biometrische Fehler gelangen durchaus in veröffentlichte Versionen. Große Android-Upgrades, darunter Android 17 auf Pixel-Geräten und spätere OEM-Versionen anderer Marken, können das Fingerabdruckverhalten verändern, weil die Hersteller-Firmware zwischen Android und Sensor sitzt.

## Wann eine Reparatur sinnvoll ist

Setze das Smartphone erst auf Werkseinstellungen zurück, nachdem du deine Daten gesichert und alle normalen Lösungswege ausgeschöpft hast. Das Zurücksetzen kann beschädigte biometrische Daten und Kalibrierungszustände beseitigen, ist aber ein grobes Werkzeug.

Fällt der Sensor auch nach dem Zurücksetzen aus oder erkennt die Diagnose die Hardware nicht, hole einen Kostenvoranschlag ein. Fingerabdrucksensoren auf der Rückseite oder an der Seite sind häufig separate Bauteile und lassen sich vergleichsweise günstig ersetzen. Bei Sensoren im Display sieht es anders aus. Ist der Leser mit der Displayeinheit verbunden oder muss er nach einem Displaytausch kalibriert werden, können die Reparaturkosten so hoch werden, dass ein anderes Smartphone vernünftiger erscheint.

Das ist die lästige Antwort, aber immer noch besser, als Geld für das falsche Bauteil auszugeben.
