---
title: "Welche Apps auf Android am meisten Akku verbrauchen"
description: "Die meisten Listen über „Apps mit hohem Akkuverbrauch“ treten zu selbstsicher auf. Deinem Smartphone ist egal, welche App in irgendeinem Labortest auf Platz eins stand. Entscheidend ist, was du installiert hast, welche Berechtigungen du vergeben hast, wie oft du die App öffnest und ob sie nach dem Ausschalten des Displays weiterarbeitet."
listSummary: "Die meisten Listen über „Apps mit hohem Akkuverbrauch“ treten zu selbstsicher auf."
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Drain"
tags: ["akku","akkuverbrauch","fehlerbehebung","android","leistung"]
locale: "de"
draft: false
---
Trotzdem sorgen dieselben App-Kategorien immer wieder für Probleme.

## App-Arten, die häufig weit oben stehen

Video-Apps sind der offensichtliche Fall. YouTube, Netflix, TikTok, Instagram Reels und ähnliche Apps halten das Display aktiv, dekodieren Videos und laden ständig Daten. Oft laufen sie außerdem mit hoher Helligkeit, weil Videos in hellen Räumen oder draußen angesehen werden. Steht eine Video-App nach zwei Stunden Nutzung weit oben in der Akkuübersicht, ist das kein Fehler. Das ist Physik.

Navigations-Apps sind der nächste klare Kandidat. Google Maps, Waze, Liefer- und Fahrdienst-Apps sowie Fitness-Tracker kombinieren GPS, mobile Daten, aktive Displayzeit und manchmal Bluetooth. Eine Stunde Abbiegehinweise kann einen sichtbaren Teil des Akkus kosten, besonders über 5G oder bei schlechtem Empfang.

Spiele gehen brachial vor. Ein 3D-Spiel beansprucht GPU, CPU, Display, Audio, Touch-Eingaben und Netzwerk gleichzeitig. Die gute Nachricht: Spiele verbrauchen normalerweise während des Spielens viel Energie und nicht heimlich um 3 Uhr morgens. Taucht ein Spiel mit Hintergrundnutzung auf, schränke es ein.

Soziale Netzwerke und Messenger sind komplizierter. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit und Nachrichten-Apps wollen ständig aktuelle Inhalte und Benachrichtigungen liefern. Einige verhalten sich ordentlich, andere nicht. Ärgerlich ist, dass dieselbe App auf zwei Smartphones völlig unterschiedliche Ergebnisse erzeugen kann. Eine Person hat Standortzugriff, Benachrichtigungen, Autoplay, Kontaktsynchronisierung und Hintergrundaktualisierung aktiviert, die andere nicht.

## Hintergrundnutzung ist wichtiger als der App-Name

Wenn die Akkuübersicht zeigt, dass eine App 8 % verbraucht hat, während du eine Stunde Videos angesehen hast, ist das wenig überraschend. Zeigt sie 8 % Hintergrundverbrauch, obwohl das Smartphone in deiner Tasche lag, ist das eine nützliche Information.

Achte zuerst auf diese Trennung. Auf einem Pixel öffnest du **Einstellungen > Akku > Akkunutzung**, filterst nach Apps und tippst auf die betreffende App. Bei Samsung gehst du zu **Einstellungen > Gerätewartung > Akku > Details anzeigen**. Die Bezeichnungen unterscheiden sich je nach Modell. Gesucht sind Nutzungszeit im Vordergrund, Hintergrundaktivität und die Erlaubnis, weiterzulaufen.

Eine grobe Regel: Verbraucht eine nicht notwendige App an einem Tag mehr als ein paar Prozent im Hintergrund, sollte sie dafür einen guten Grund haben. Messenger, Musik-, Navigations-, Gesundheits- und Sicherheits-Apps können einen haben. Eine Shopping-App eher nicht.

Die häufigsten Mechanismen hinter Hintergrundverbrauch sind simpel: Push-Benachrichtigungen, Inhaltssynchronisierung, Standortabfragen, Wake Locks, Netzwerkverkehr im Hintergrund und Analyse-SDKs. Wake Locks verdienen eine eigene Erwähnung, weil Google sie inzwischen als Qualitätsmerkmal in Google Play behandelt. Ein partieller Wake Lock hält die CPU aktiv, obwohl das Display ausgeschaltet ist. Gezielt eingesetzt ist das normal. Zu lange gehalten ist es verschwendete Energie.

## Google Play besitzt jetzt ein Akku-Qualitätssignal

Das ist die große Änderung gegenüber älteren Versionen dieses Artikels. Google hat **Excessive partial wake locks** zu einer zentralen Android-vitals-Messgröße gemacht. Seit dem 1. März 2026 können Apps, die den Grenzwert überschreiten, in wichtigen Entdeckungs- und Empfehlungsflächen von Google Play schlechter sichtbar werden. In manchen Fällen erscheint außerdem ein Warnhinweis auf der Store-Seite.

Der Grenzwert ist konkret. Bei mobilen Apps bewertet Android vitals nicht ausgenommene partielle Wake Locks als übermäßig, wenn sie innerhalb von 24 Stunden insgesamt mindestens zwei Stunden gehalten werden und dieses Muster über 28 Tage gemittelt mehr als 5 % der App-Sitzungen betrifft.

Das bedeutet nicht, dass Google Play vor der Installation jeden Akkuverbrauch erklärt. Ein Spiel wird nicht markiert, nur weil es beim aktiven Spielen viel Energie benötigt. Google bewertet auch nicht, ob du persönlich fünf Stunden TikTok nutzt. Das Signal zielt auf Hintergrundverhalten, das die CPU bei ausgeschaltetem Display wach hält.

Trotzdem ist es nützlich. Erstmals kann ein normaler Nutzer schon vor der Installation einen Akkuwarnhinweis zu einer schlecht arbeitenden App sehen. Das ist besser, als das Problem erst nach drei Nächten mit hohem Verbrauch zu entdecken.

## Was du vor dem Deinstallieren ändern solltest

Eine App zu deinstallieren ist die sauberste Lösung, doch die meisten Menschen löschen nicht ihren wichtigsten Messenger, ihre Video-App oder ihr bevorzugtes soziales Netzwerk. Beginne deshalb mit Einstellungen, die unsichtbare Hintergrundarbeit reduzieren.

Deaktiviere Autoplay, sofern die App das erlaubt. Instagram, Facebook, X, Reddit, YouTube und TikTok können Akku und Daten verbrauchen, indem sie Videos vorbereiten, die du vielleicht nie ansiehst.

Begrenze den Standortzugriff. Öffne in den Einstellungen die Standortberechtigungen der Apps und prüfe Anwendungen mit dauerhaftem Zugriff. Eine Wetter-App kommt meist mit Standortzugriff während der Nutzung aus. Eine Navigations-App braucht ihn während einer Fahrt. Ein soziales Netzwerk benötigt ihn nur selten dauerhaft.

Schränke die Akkunutzung im Hintergrund ein. Auf Pixel-Geräten und Android-Oberflächen mit ähnlichem Aufbau öffnest du **Einstellungen > Apps > [App]** und dort die Akkunutzung der App. Reduziere den Hintergrundzugriff bei Apps, die keine sofortigen Aktualisierungen brauchen. Bei Samsung gehst du zu **Einstellungen > Gerätewartung > Akku > Grenzen der Hintergrundnutzung** und verschiebst selten genutzte Apps zu **Apps im Standby** oder **Apps in tiefem Standby**.

Reduziere Benachrichtigungen. Jede Benachrichtigung kann das Smartphone wecken, das Display einschalten, eine Vibration auslösen und neue Inhalte laden. Sei streng bei Apps, die für Werbung, Empfehlungen oder Meldungen wie „Das könnte dir gefallen“ benachrichtigen.

Aktualisiere Apps. Das ist ein langweiliger Rat, aber nach Android-Updates wichtig, einschließlich der ersten Veröffentlichung von Android 17 für unterstützte Pixel-Geräte. Entwickler beheben Fehler bei Akkuverbrauch, Wake Locks, Synchronisierung und Kompatibilität. Sowohl Google als auch Samsung empfehlen bei Akkuproblemen aktuelle App- und Systemversionen.

## Der Browser ist nicht automatisch sparsamer als die App

Ein häufiger Tipp lautet, statt der App einfach die Browser-Version zu verwenden. Manchmal ist das sinnvoll, weil eine Website nicht dieselben dauerhaften Android-Hintergrunddienste ausführen kann wie eine installierte App. Wenn Facebook oder X nur deshalb auffällt, weil die native App das Smartphone ständig weckt, kann die mobile Website helfen.

Mach daraus aber keine allgemeine Regel. Kontrollierte Untersuchungen, die native Android-Apps mit ihren Webvarianten verglichen haben, kamen bei einigen Diensten zu dem Ergebnis, dass die native App während aktiver Nutzung weniger Energie verbrauchen kann. Ein Browser-Tab ist nicht magisch. Er rendert weiterhin Videos, JavaScript, Werbung, Tracker und Bilder.

Mein praktischer Ansatz: Nutze den Browser für Dienste, die du nur gelegentlich öffnest und von denen du keine Benachrichtigungen brauchst. Verwende die native App bei Diensten, die du häufig nutzt, besonders wenn die Webversion langsam oder hakelig ist. Taucht die native App nachts in der Akkuübersicht auf, begrenze ihre Hintergrundaktivität.

## Wann eine Diagnose-App hilft

Die integrierte Akkuübersicht von Android sollte deine erste Anlaufstelle sein. Sie ist bereits vorhanden und direkt mit dem Betriebssystem verbunden.

Ein Werkzeug wie runcheck wird nützlich, wenn die reine Akkuanzeige das Muster nicht erklärt. Steigt der Verbrauch gleichzeitig mit Hitze, schwachem Empfang, langsamer Netzwerkverbindung oder hohem Speicherdruck, spricht das für eine andere Lösung, als einfach Instagram die Schuld zu geben. Der Zusammenhang zählt.

AccuBattery und ähnliche Apps können die Akkukapazität über längere Zeit schätzen. Behandle ihre Werte trotzdem als Schätzungen, sofern das Smartphone den Akkuzustand nicht selbst ausgibt.

## So findest du deine problematischsten Apps besser

Mach das an zwei normalen Tagen:

1. Lade das Smartphone wie gewohnt und nutze es normal.
2. Prüfe abends **Einstellungen > Akku > Akkunutzung**.
3. Notiere die fünf Apps mit dem höchsten Verbrauch und ob sie Energie im Vordergrund oder Hintergrund genutzt haben.
4. Schränke nur Apps ein, deren Hintergrundnutzung keinen Sinn ergibt.
5. Prüfe das Ergebnis am nächsten Tag erneut.

Wische nicht stündlich alle Apps aus der Übersicht der zuletzt verwendeten Anwendungen. Android verwaltet Speicher und Akku selbst, und zwangsweise geschlossene Apps können beim erneuten Start zusätzliche Energie verbrauchen. Das erzwungene Beenden ist für eine fehlerhafte App gedacht, nicht für die tägliche Pflege.

Am meisten Akku verbrauchen normalerweise Apps, die Display, Netzwerk, GPS, CPU oder GPU beschäftigen. Beheben solltest du vor allem die Fälle, in denen das geschieht, obwohl du die App gerade nicht verwendest.
