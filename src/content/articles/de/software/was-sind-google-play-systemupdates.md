---
title: "Was sind Google Play-Systemupdates?"
description: "Öffne die Updateansicht deines Android-Geräts, und du wirst wahrscheinlich zwei unterschiedliche Datumsangaben sehen. Eine gehört zur Android-Sicherheitspatch-Ebene. Die andere zeigt den Stand eines modularen Google-Updates."
listSummary: "android, updates und sicherheit"
hub: "software"
sourceNumber: 124
order: 6
tags: ["android","updates","sicherheit","software","ratgeber"]
locale: "de"
draft: false
---
Das sieht wie ein Fehler aus. Meist ist es keiner.

Es handelt sich um zwei verschiedene Updatekanäle. Die Sicherheitspatch-Ebene kommt vom Gerätehersteller, zum Beispiel Google, Samsung, Xiaomi, OnePlus oder Motorola. Das andere Datum stammt auf unterstützten Geräten aus Googles modularem Android-Updatesystem.

## Die Kurzfassung

Diese Mainline-Updates patchen ausgewählte Teile von Android, ohne auf ein vollständiges Systemupdate des Herstellers zu warten.

Sie ersetzen normale Android-Updates nicht. Sie aktualisieren dein Smartphone nicht von Android 16 auf Android 17. Sie schließen auch nicht jede Schwachstelle. Google kann damit aber bestimmte Betriebssystemkomponenten über denselben breit angelegten Bereitstellungsweg aktualisieren, den auch Google Play nutzt.

Das ist wichtig, weil Android-Updates eine lange Kette durchlaufen. Google veröffentlicht Code. Chipanbieter und Gerätehersteller integrieren ihn. Mobilfunkanbieter prüfen ihn möglicherweise. Erst dann erreicht das Update das Smartphone. Der modulare Kanal umgeht für bestimmte Komponenten einen Teil dieser Kette.

## So funktioniert Project Mainline

Die Technik dahinter heißt Project Mainline, in der Android-Dokumentation auch modulare Systemkomponenten genannt. Sie wurde mit Android 10 eingeführt.

Mainline teilt ausgewählte Teile von Android in Module auf. Einige sind APK-Module und verhalten sich eher wie App-Pakete. Andere sind APEX-Module, die früher im Startvorgang geladen werden und tiefer liegende Systemkomponenten übernehmen können.

Wichtig ist, dass ein Satz von Modulupdates als Einheit installiert wird. Wenn sich das Paket nicht sauber einspielen lässt, setzt Android es zurück, statt das Smartphone in einem halb aktualisierten Zustand zu lassen.

Gut so. Bei Systemupdates ist langweilig gut.

## Was aktualisiert wird

Der genaue Modulsatz hängt von der Android-Version und dem Geräte-Build ab. Erwarte deshalb nicht, dass jedes Android-Smartphone dieselbe Liste hat. Neuere Android-Versionen enthalten in der Regel mehr modulare Bestandteile als Android 10.

Dazu gehören beispielsweise Netzwerkkomponenten, DNS-Auflösung, Medienverarbeitung, berechtigungsbezogene Komponenten, Conscrypt für TLS, die Erkennung von Anmeldeseiten in WLAN-Netzen, DocumentsUI, Tethering und auf unterstützten Versionen Teile der Android Runtime.

Das sind keine dekorativen Bestandteile. Ein Fehler im Medien-Framework kann viele Apps betreffen. Eine Schwachstelle in einer TLS-Komponente kann verschlüsselte Verbindungen auf dem ganzen Gerät beeinflussen. Über einen modularen Kanal erreichen solche Korrekturen deutlich mehr Smartphones, als wenn jeder Hersteller erst ein vollständiges OTA-Paket veröffentlichen müsste.

## So prüfst du das Datum

Auf vielen aktuellen Android-Geräten öffnest du Einstellungen > Sicherheit und Datenschutz > System und Updates und anschließend Google Play-Systemupdate.

Bei Samsung kannst du Einstellungen > Sicherheit und Datenschutz > Updates ausprobieren. Ein weiterer offizieller Weg führt über Einstellungen > Telefoninfo > Softwareinformationen > Google Play-Systemupdate.

Der Pfad ändert sich, weil Hersteller ihre Einstellungen unterschiedlich ordnen. Wenn du den Eintrag nicht findest, öffne die Suche in den Einstellungen und suche nach Google Play-Systemupdate.

Du kannst auf den Eintrag tippen, um nach einem Update zu suchen. Wenn Android danach einen Neustart verlangt, führe ihn aus. Manche APEX-basierten Updates werden erst nach dem Neustart wirksam.

## Warum das Datum alt aussehen kann

Das angezeigte Datum bedeutet nicht einfach „das letzte Mal, als irgendetwas repariert wurde“. Es kann für die Version eines Modulpakets stehen, und nicht jede Modulaktualisierung verändert die sichtbare Datumsangabe auf offensichtliche Weise.

Deshalb kann das Datum des Google Play-Systemupdates hinter dem Android-Sicherheitsupdate liegen, ohne dass mit dem Smartphone etwas nicht stimmt. Sorgen würde ich mir erst machen, wenn beide Angaben alt sind oder das Gerät seit Monaten kein Systemupdate installiert hat und außerdem nicht mehr auf der Supportliste des Herstellers steht.

Frustrierend ist, dass Android normalen Nutzern kein übersichtliches Änderungsprotokoll für jedes einzelne Modul bietet. Meist bekommst du nur ein Datum und eine Aufforderung zum Neustart.

## Welche Smartphones diese Updates erhalten

Dieser Updatekanal hängt mit dem modularen Android-System und den Google-Diensten zusammen. In der Praxis umfasst das die meisten Google-zertifizierten Android-Smartphones mit Android 10 oder neuer.

Geräte ohne Google-Dienste erhalten nicht denselben von Google bereitgestellten Updateweg. Einige Android-Partner können Mainline-Module über ihre eigenen OTA-Updates aktualisieren, doch das ist nicht dasselbe wie der Google-Kanal auf einem zertifizierten Gerät.

Ältere Android-Versionen haben außerdem weniger modulare Komponenten. Ein Smartphone mit Android 10 kann von Mainline profitieren, hat aber nicht dieselbe Modulabdeckung wie ein neueres Gerät mit Android 16 oder Android 17.

## Was diese Updates nicht reparieren können

Mainline kann nicht alles patchen.

Es aktualisiert den Gerätekernel nicht, sofern die jeweilige Korrektur nicht über einen unterstützten modularen Weg geliefert wird. Es aktualisiert keine proprietäre Firmware für Modem, Kamera, GPU oder WLAN. Auch herstellerspezifische System-Apps und Anbietercode werden damit nicht repariert. Der offizielle Supportzeitraum des Herstellers verlängert sich ebenfalls nicht.

Der modulare Updateweg hilft also. Ein aufgegebenes Smartphone wird dadurch trotzdem nicht wieder vollständig sicher.

## Google Play-Systemupdates im Vergleich zu Google Play-Diensten

Die Namen ähneln sich zu stark, und das sorgt für Verwirrung.

Google Play-Dienste sind ein Framework auf App-Ebene. Apps verwenden es für Anmeldung, Standort-APIs, Benachrichtigungen, Kontofunktionen, Sicherheitsprüfungen und andere Google-Dienste. Es wird wie eine App aktualisiert.

Google Play-Systemupdates betreffen dagegen Betriebssystemmodule. Sie greifen tiefer in Android ein.

Beides kommt von Google. Beides kann ohne vollständiges OTA-Update des Herstellers aktualisiert werden. Es ist trotzdem nicht dieselbe Schicht.

## Was du mit diesem Wissen anfangen solltest

Halte beide Updatekanäle aktuell. Installiere normale Android-Systemupdates des Herstellers und prüfe gelegentlich die Ansicht für modulare Updates.

Wenn dein Smartphone noch Hersteller-Patches erhält, ist ein etwas älteres Datum beim Google Play-Systemupdate meist nur Hintergrundrauschen. Wenn beide Kanäle keine Updates mehr liefern, solltest du das Gerät nicht mehr lange als sicheres Alltagsgerät einplanen.
