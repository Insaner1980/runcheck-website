---
title: "So prüfst du deine Android-Version"
description: "Dein Smartphone zeigt die installierte Android-Version bereits an. Du musst nur wissen, welcher Zahl du vertrauen solltest."
listSummary: "Dein Smartphone zeigt die installierte Android-Version bereits an."
hub: "software"
sourceNumber: 119
order: 1
tags: ["android","updates","sicherheit","software","ratgeber"]
locale: "de"
draft: false
---
Auf den meisten Geräten öffnest du Einstellungen > Über das Telefon > Android-Version. Bei einem Tablet heißt der mittlere Punkt entsprechend Über das Tablet. Auf Samsung-Geräten findest du die Angaben unter Einstellungen > Telefoninfo > Softwareinformationen. Dort steht mehr als nur die große Betriebssystemnummer: Du siehst auch das Datum des Sicherheitsupdates, das Google Play-Systemupdate, die Build-Nummer und manchmal die eigene Softwareversion des Herstellers.

Genau diesen Teil übersehen viele. Android 17 klingt neuer als Android 16, und das ist es auch. Wenn du beurteilen willst, ob ein Smartphone noch sicher genutzt werden kann, ist ein aktuelles Sicherheitsupdate aber genauso wichtig.

## Version in den Einstellungen prüfen

Auf den meisten Android-Smartphones:

1. Öffne die Einstellungen.
2. Tippe auf Über das Telefon oder Über das Tablet.
3. Öffne Android-Version, falls die Details nicht bereits sichtbar sind.
4. Prüfe Android-Version, Android-Sicherheitsupdate, Google Play-Systemupdate und Build-Nummer.

Samsung legt dieselben Informationen unter Softwareinformationen in Telefoninfo ab. OnePlus verwendet häufig Über das Gerät. Bei Xiaomi-, Redmi- und POCO-Smartphones beginnt die Suche normalerweise in den Telefoninformationen, danach verteilen sich die Details auf die Android- und Xiaomi HyperOS-Seiten.

Das war's. Wirklich.

## Was die Versionsnummer tatsächlich bedeutet

Die Hauptnummer bezeichnet die große Android-Generation auf dem Smartphone. Im Juli 2026 ist Android 17 die aktuelle Hauptversion. Google hat sie zuerst für die meisten unterstützten Pixel-Geräte veröffentlicht. Neue Smartphones und Updates anderer Hersteller folgen nach deren eigenen Zeitplänen.

Für Entwickler entspricht jede Betriebssystemversion einem API-Level. Aktuell gilt: Android 17/API 37, Android 16/API 36, Android 15/API 35, Android 14/API 34 und Android 13/API 33. Du musst dir das nicht merken. Es erklärt aber, warum eine App dein Smartphone als zu alt bezeichnen kann, obwohl das Gerät noch startet und im Alltag funktioniert.

Die Build-Nummer ist genauer. Sie bezeichnet die exakte Softwareversion, die auf dem Gerät installiert ist. Zwei Smartphones können beide Android 17 ausführen und trotzdem unterschiedliche Builds haben, etwa wegen Region, Freigabe durch den Mobilfunkanbieter, Betakanal oder Anpassungen des Herstellers.

## Auch die Herstelleroberfläche zählt

Samsung liefert nicht einfach "reines Android" aus, sondern legt One UI darüber. One UI 9 basiert auf Android 17. Im Juli 2026 läuft in Deutschland zunächst das One UI 9-Betaprogramm für die Galaxy S26-Reihe. Wer mit einem Galaxy S26 am Betaprogramm teilnimmt, kann die neue Plattform daher früher sehen als jemand mit einem älteren Galaxy-Modell im stabilen Kanal.

Smartphones von Xiaomi, Redmi und POCO verwenden Xiaomi HyperOS. Die HyperOS-Nummer beschreibt Xiaomis eigene Oberfläche und Funktionen, verrät aber nicht immer auf den ersten Blick, welche Android-Basis darunter liegt. Öffne die Android-Versionsdetails, bevor du annimmst, dass HyperOS 3 oder ein späterer HyperOS-Build auf jedem Modell dasselbe bedeutet.

Bei Pixel-Smartphones ist es übersichtlicher. Unter Über das Telefon stehen Plattformversion, Sicherheitsupdate und Build-Kennung zusammen. Ein unterstütztes Pixel im stabilen Rollout seit Juni 2026 kann Android 17 anzeigen, während ein für Betatests angemeldetes Gerät stattdessen einen QPR-Betabuild verwendet.

## Ohne den normalen Einstellungsweg prüfen

Wählcodes können auf manchen Smartphones Firmwareinformationen anzeigen, funktionieren aber nicht einheitlich. Samsungs `*#1234#` kann bei unterstützten Modellen AP-, CP- und CSC-Firmwaredetails anzeigen. Das Testmenü `*#*#4636#*#*` funktioniert auf einigen Android-Geräten, wird von vielen Herstellern jedoch deaktiviert.

Wenn du mit ADB vertraut bist und das Smartphone deinen Computer bereits autorisiert hat, liefern diese Befehle genauere Angaben:

```bash
adb shell getprop ro.build.version.release
adb shell getprop ro.build.version.sdk
adb shell getprop ro.build.version.security_patch
```

Sie geben die Versionszeichenfolge, das API-Level und das Patchdatum aus. Das ist bei Tests, Reparaturen oder einem Smartphone nützlich, dessen Menüs stark angepasst wurden.

## Warum die Version wichtig ist

App-Kompatibilität ist der offensichtliche Grund. Apps legen eine mindestens unterstützte Plattformversion fest. Unterschreitet dein Smartphone diese Grenze, kann der Play Store die Installation blockieren oder keine Updates mehr anbieten.

Sicherheit ist der bessere Grund. Android-Sicherheitsupdates werden getrennt von der Hauptversion verwaltet. Ein Smartphone mit Android 16 und aktuellem Patch ist normalerweise sicherer als eines mit Android 17 und veraltetem Patch. Das Patchdatum zeigt, wie kürzlich das Gerät Korrekturen für Sicherheitslücken erhalten hat.

Auch Funktionen hängen von der Plattform ab. Android 12 führte die dynamische Material You-Farbgestaltung ein. Android 13 brachte Spracheinstellungen pro App. Android 14 verschärfte mehrere Regeln für Datenschutz und Hintergrundverhalten. Android 17 ergänzt App Bubbles, interaktives Picture-in-Picture für Desktop-Umgebungen, einen datenschutzorientierten Contact Picker für Apps und den systemseitigen Location Button, über den Apps einen präzisen Standortzugriff für die aktuelle Sitzung anfordern können.

Fehlt eine Funktion auf deinem Smartphone, kann die Android-Generation der Grund sein. Oder der Hersteller hat sich schlicht dagegen entschieden, die Funktion anzubieten. Android ist in dieser Hinsicht unübersichtlich.

## Plattformversion und Patchdatum sind verschieden

Die Plattformnummer bezeichnet die große Generation. Das Sicherheitsupdate ist ein Datum, zum Beispiel 2026-06-05. Beide entwickeln sich getrennt voneinander.

Ein Smartphone kann Android 15 mit aktuellen Sicherheitskorrekturen ausführen. Ein anderes Modell kann bereits Android 17 haben und bei den Patches trotzdem zurückliegen. Wenn du beurteilst, ob ein Gerät noch sicher nutzbar ist, prüfe beides.

## Kannst du manuell aktualisieren?

Beginne auf den meisten Geräten unter Einstellungen > System > Softwareupdate. Bei Samsung liegt Software-Update direkt in den Einstellungen. Hat der Hersteller ein Update für dein exaktes Modell, deine Region und die Variante deines Mobilfunkanbieters veröffentlicht, sollte es dort erscheinen.

Du kannst keinen offiziellen Android-Build installieren, den der Hersteller nicht für dein Gerät freigegeben hat. Pixel-Besitzer können offizielle OTA-Images per ADB installieren, und Samsung-Nutzer können offizielle Firmware mit Odin flashen. Beide Wege sind technisch und bergen ein echtes Risiko, wenn du den falschen Build auswählst. Für manche Smartphones gibt es außerdem Custom ROMs, doch sie sind nicht dasselbe wie ein offizielles Update.
