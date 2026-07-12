---
title: "Was Speicherdruck unter Android bedeutet und was dagegen hilft"
description: "Speicherdruck entsteht, wenn Android zu wenig RAM hat und das System Apps beendet. So erkennst du das Problem, findest die Ursache und erfährst, was wirklich hilft."
listSummary: "Speicherdruck entsteht, wenn Android zu wenig RAM hat und das System Apps beendet."
hub: "performance"
sourceNumber: 76
order: 13
tags: ["leistung","geschwindigkeit","android","optimierung","fehlerbehebung"]
locale: "de"
draft: false
---
---

Bei Speicherdruck entscheidet Android, worauf es verzichten kann. Reicht der RAM nicht für alles aus, beendet das System weniger wichtige Prozesse, damit das Smartphone weiter funktioniert.

Darum lädt ein Browser die Seite neu, wenn du zu ihm zurückkehrst. Deshalb kann die Tastatur kurz verschwinden, die Musik-App neu starten oder ein Spiel geschlossen werden, während du eine Nachricht beantwortest. Das Smartphone hat nicht grundlos vergessen, was du gerade gemacht hast. Es brauchte den Arbeitsspeicher.

Möglichst viel freier RAM ist unter Android kein sinnvolles Ziel. Das System nutzt Arbeitsspeicher bewusst für nützliche Dinge, etwa um Apps schneller wieder öffnen zu können. Problematisch wird es erst, wenn nicht mehr genug Spielraum für einen flüssigen Wechsel zwischen Apps bleibt.

## Was Android bei Speicherdruck macht

Android überwacht den Arbeitsspeicher mit dem Low Memory Killer Daemon, kurz lmkd. Wird der RAM knapp, ordnet lmkd Prozesse nach ihrer Bedeutung und beendet diejenigen, auf die Android am ehesten verzichten kann. Hintergrund-Apps trifft es normalerweise zuerst. Apps im Vordergrund sollen geschützt sein, können bei starkem Speicherdruck aber trotzdem beendet werden oder abstürzen.

Seit Android 10 kann lmkd sogenannte Pressure Stall Information, meist PSI genannt, aus dem Kernel nutzen. Dadurch reagiert das System auf tatsächliche Verzögerungen durch Speichermangel und nicht nur auf einfache Grenzwerte für freien RAM. Ältere Systeme stützten sich stärker auf den Low-Memory-Killer-Treiber im Kernel. Dieser Treiber wurde ab Linux-Kernel 4.12 aus dem Upstream-Kernel entfernt, weshalb modernes Android auf lmkd im Userspace setzt.

Du musst dir diese Details nicht merken. Praktisch reicht eine einfache Regel: Beendet Android immer wieder Apps, die du gerade erst verwendet hast, erlebst du wahrscheinlich Speicherdruck.

## Anzeichen für zu wenig nutzbaren RAM

Das deutlichste Zeichen sind ständig neu geladene Apps. Öffne Chrome, lade eine Seite, wechsle zu Messages und dann zurück. Lädt Chrome die Seite jedes Mal komplett neu, hat Android den Browser wahrscheinlich im Hintergrund beendet.

Andere Hinweise sind weniger eindeutig. Der Launcher baut sich neu auf, wenn du zum Startbildschirm wechselst. Die Tastatur verschwindet mitten in einer Nachricht. Spotify stoppt, nachdem du die Kamera geöffnet hast. Ein Spiel beginnt von vorn, sobald du eine Benachrichtigung prüfst. Passiert so etwas gelegentlich, ist das normal. Den ganzen Tag ist es das nicht.

Den aktiven Speicherverbrauch kannst du in den Entwickleroptionen prüfen. Öffne in den Einstellungen den Bereich mit den Telefoninformationen und tippe siebenmal auf die Build-Nummer. Öffne danach unter System die Entwickleroptionen und dort die laufenden Dienste. Bezeichnungen und genauer Pfad unterscheiden sich je nach Hersteller, die Ansicht zeigt aber laufende Prozesse und die aktuelle RAM-Nutzung.

Auf Samsung-Geräten findest du eine Übersicht normalerweise unter **Einstellungen > Gerätewartung > Arbeitsspeicher**. Xiaomi-, Redmi- und POCO-Smartphones bieten häufig eine **Speichererweiterung** an. Diese Funktion betrifft jedoch virtuellen RAM und ist keine besonders klare Anzeige des tatsächlichen Speicherdrucks.

Fixiere dich nicht auf einen einzelnen Wert. Ein Smartphone mit nur wenigen Hundert MB freiem RAM ist nicht automatisch defekt. Android soll den Speicher aggressiv als Cache nutzen. Entscheidend ist das Verhalten: ständige Neuladungen, verlorener App-Zustand und Apps, die sogar im Vordergrund geschlossen werden.

## Warum das passiert

Die RAM-Ausstattung ist die offensichtlichste Ursache. Ein Smartphone mit 4 GB kann 2026 weiterhin Telefonate, Nachrichten, Karten und leichtes Surfen bewältigen, hat aber kaum Reserven. Android, Google Play services, Launcher, Tastatur, Messenger und Hintergrundsynchronisierung belegen bereits einen großen Teil, bevor du eine anspruchsvolle App öffnest.

Moderne Apps sind außerdem größer als früher. Ein Browser mit mehreren Tabs, Instagram oder TikTok, eine Navigations-App und eine Musik-App können Geräte mit wenig RAM schnell ins ständige Nachladen treiben. Mit 6 GB bleibt mehr Spielraum. 8 GB sind für die meisten Menschen angenehm. Oberhalb von 12 GB fällt der zusätzliche Nutzen meist kleiner aus, außer du spielst anspruchsvolle Spiele oder nutzt desktopähnliches Multitasking.

Hintergrunddienste spielen eine größere Rolle, als viele vermuten. Messenger halten Verbindungen offen. Fitness-Apps synchronisieren Daten. E-Mail-Apps fragen Konten ab. VPNs prüfen den Datenverkehr. Launcher und Widgets bleiben im Speicher, weil sie schnell bereitstehen müssen. Nichts davon ist für sich genommen falsch. In der Summe kann es das Smartphone trotzdem einengen.

Große Systemupdates können das stärker sichtbar machen. Android 17 befindet sich im Juli 2026 noch in der Beta, hat mit Beta 3 aber Plattformstabilität erreicht und kann auf unterstützten Pixel-Geräten getestet werden. Nach einem großen Update solltest du dem Smartphone Zeit geben, App-Updates, Optimierungen und Aufräumarbeiten im Hintergrund abzuschließen, bevor du die Leistung beurteilst. Wenn sich 4 GB schon unter Android 14 oder 15 knapp angefühlt haben, schafft Android 17 allerdings keinen zusätzlichen RAM.

## Was tatsächlich hilft

Wische nicht den ganzen Tag jede App aus der Übersicht. Das wirkt zwar ordentlich, aber Android kann Speicher selbst zurückgewinnen. Wenn du alles ständig schließt, starten manche Apps ihre Hintergrunddienste kurz darauf neu und verbrauchen dabei mehr CPU und Akku, als wenn du sie einfach in Ruhe gelassen hättest.

Begrenze stattdessen die Hintergrundaktivität. Öffne in den Einstellungen die App-Liste, wähle eine App aus und suche nach den Akku- oder Hintergrundnutzungsoptionen. Setze selten verwendete Apps auf **Eingeschränkt**, sofern du von ihnen keine sofortigen Benachrichtigungen brauchst. Gute Kandidaten sind Shopping-Apps, Spiele, Reise-Apps, Lieferdienste, Nachrichten-Apps und soziale Netzwerke, die dich nicht in Echtzeit informieren müssen.

Deinstalliere Apps, die du nicht mehr nutzt. Hintergrundaktivität zu begrenzen hilft, aber eine App vollständig zu entfernen ist sauberer. Weniger Apps bedeuten weniger Dienste, Push-Registrierungen, Update-Aufträge und Speicherdruck.

Halte internen Speicher frei. Wenig RAM und fast voller Speicher sind unterschiedliche Probleme, treten bei älteren Smartphones aber häufig gemeinsam auf. Sind 85 bis 90 % des internen Speichers belegt, solltest du aufräumen. Ein Gerät mit knappem RAM und fast vollem Speicher fühlt sich schlechter an als bei nur einem dieser Probleme.

Nutze Lite- oder Web-Versionen, wenn sie für dich ausreichen. Eine leichte Browser-Sitzung kann ein Smartphone mit wenig RAM weniger belasten als eine vollständige Social-Media-App mit Hintergrundvideo, Benachrichtigungen, Widgets und zwischengespeicherten Medien.

Reduziere Animationen, wenn sich das Smartphone träge anfühlt. Stelle in den Entwickleroptionen `Window animation scale`, `Transition animation scale` und `Animator duration scale` auf 0,5x oder aus. Das schafft keinen zusätzlichen RAM. Es verkürzt lediglich die Wartezeit zwischen Eingaben und kann ein knapp ausgestattetes Gerät dadurch erträglicher machen.

## Virtueller RAM ist kein echter RAM

Samsung nennt die Funktion RAM Plus. Xiaomi spricht von Speichererweiterung. OnePlus und andere Hersteller verwenden ähnliche Namen. Das Prinzip ist einfach: Das Smartphone nutzt einen Teil des internen Speichers als eine Art Auslagerungsspeicher.

Auf Geräten mit wenig RAM kann das verhindern, dass Android Apps ganz so schnell beendet. Interner Speicher wird dadurch aber nicht so schnell wie physischer RAM. UFS ist für einen Massenspeicher flott, spielt jedoch in einer anderen Leistungsklasse als Arbeitsspeicher. Bei Geräten mit wenig RAM kann virtueller RAM die Zahl der Neuladungen verringern. Auf einem Smartphone mit 8 oder 12 GB ist der Unterschied häufig kaum zu spüren.

Es gibt auch einen Nachteil. Mehr virtueller RAM bedeutet weniger freien internen Speicher, und häufige Schreibvorgänge haben ebenfalls ihren Preis. Ich würde die Funktion nicht pauschal abschalten. Ein Smartphone würde ich aber auch nicht deshalb kaufen, weil im Datenblatt 8 GB + 8 GB virtueller RAM steht. Die erste Zahl ist deutlich wichtiger.

## Wann ein neues Smartphone die Antwort ist

Wenn du Hintergrundaktivität eingeschränkt, ungenutzte Apps entfernt und Speicherplatz freigegeben hast, das Smartphone aber weiterhin alles neu lädt, ist die Hardware für deine Nutzung möglicherweise schlicht zu knapp ausgelegt.

Für grundlegende Aufgaben reichen 4 GB weiterhin, wenn du Geduld hast und das Gerät schlank hältst. Für normales Multitasking sind 6 GB inzwischen die praktische Untergrenze. Willst du ein Smartphone mehrere Jahre behalten, sind 8 GB die sicherere Wahl. Intensive Nutzer, Spieler und Menschen, die viele Apps gleichzeitig aktiv halten, profitieren von 12 GB.

Ein Zurücksetzen auf Werkseinstellungen kann Speicherdruck eine Zeit lang verschwinden lassen, weil weniger Apps installiert sind und der Hintergrundzustand sauberer ist. Dann installierst du deine Apps erneut, meldest dich überall an und das Problem kehrt zurück. Das ist kein fehlgeschlagener Reset. Das Smartphone zeigt dir seine Grenze.
