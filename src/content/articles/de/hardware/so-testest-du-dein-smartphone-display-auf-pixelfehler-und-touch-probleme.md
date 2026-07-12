---
title: "So testest du dein Smartphone-Display auf Pixelfehler und Touch-Probleme"
description: "Du prüfst ein gebrauchtes Smartphone. Der Verkäufer sagt, das Display sei einwandfrei, und auf den ersten Blick stimmt das auch. Dann öffnest du eine weiße Fläche und entdeckst einen schwarzen Punkt nahe der Ecke. Oder noch schlimmer: Beim Tippen reagiert ein ganzer Streifen der Tastatur nicht auf deinen Finger."
listSummary: "Du prüfst ein gebrauchtes Smartphone."
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["hardware","testen","diagnose","android","ratgeber"]
locale: "de"
draft: false
---
Displayprobleme fallen bei normaler Nutzung kaum auf. Hintergrundbilder, Symbole, der Dunkelmodus und bewegte Inhalte verdecken viele Fehler. Mit ein paar Tests auf einfarbigen Flächen und einer Prüfung der Touch-Erkennung findest du sie deutlich leichter.

## Tote und festhängende Pixel

Ein toter Pixel bleibt schwarz, egal was das Display anzeigt. Er funktioniert nicht mehr.

Ein festhängender Pixel verhält sich anders. Er bleibt auf einer Farbe stehen, meist Rot, Grün, Blau oder Weiß, obwohl sich der Inhalt ringsum ändert. Festhängende Pixel reagieren manchmal auf Tools, die schnell zwischen Farben wechseln. Tote Pixel in der Regel nicht.

Beide erkennst du am besten auf einfarbigen Flächen. Prüfe ein Smartphone-Display nicht nur auf dem Startbildschirm und hake den Test dann ab. Dabei übersiehst du zu viel.

## Auf tote und festhängende Pixel prüfen

Stelle die Helligkeit hoch, reinige das Glas und zeige nacheinander einfarbige Vollbilder an. Verwende Weiß, Schwarz, Rot, Grün, Blau und Grau.

Ein browserbasierter Test wie deadpixeltest.org reicht dafür aus. Eine Displaytest-App aus dem Play Store kann praktischer sein, weil sie Status- und Navigationsleiste ausblenden, die Farben automatisch wechseln und auch Farbverläufe anzeigen kann.

Einige Smartphones haben integrierte Tests:

- Samsung Galaxy: Gib auf vielen Modellen `*#0*#` in der Telefon-App ein und nutze die Tests Red, Green, Blue, Black und Touch. Samsung Members bietet außerdem über Support > Telefondiagnose > Jetzt beginnen einen Touchscreen-Test und weitere Diagnosen.
- Google Pixel: Gib auf unterstützten Geräten `*#*#7287#*#*` ein, um Pixel Diagnostics zu öffnen.
- Xiaomi, Redmi und POCO: Probiere `*#*#6484#*#*`, um das CIT-Menü aufzurufen.
- Motorola: Öffne Device Help > Device diagnosis > Hardware test.

Auf weißem Hintergrund sehen tote Pixel wie winzige schwarze Punkte aus. Auf schwarzem Hintergrund erscheinen festhängende Pixel als helle farbige Punkte. Mit roten, grünen und blauen Flächen lässt sich erkennen, welcher Subpixel festhängt.

Nimm dir Zeit. Ein langsamer Durchgang entlang der Ränder und Ecken deckt mehr Fehler auf als ein möglichst schnelles Weiterklicken durch die Farben.

## Gleichmäßige Helligkeit und Burn-in prüfen

Bei LCD-Smartphones ist eine vollständig schwarze Fläche in einem dunklen Raum hilfreich. Ungleichmäßige Hintergrundbeleuchtung zeigt sich dann als wolkige, hellere Bereiche nahe den Rändern. OLED-Displays haben keine Hintergrundbeleuchtung und daher auch kein Backlight Bleeding in derselben Form.

OLED hat dafür ein eigenes Problem: Burn-in. AMOLED-, Super-AMOLED- und Dynamic-AMOLED-Panels können ungleichmäßig altern, wenn dieselben Elemente lange an derselben Stelle angezeigt werden. Typische Spuren stammen von Navigationsleisten, Statussymbolen, Tastaturen oder Bedienelementen sozialer Apps.

Zeige bei mittlerer Helligkeit eine einfarbig graue Fläche an. Achte auf schwache Schatten einer Tastatur, von Navigationsschaltflächen, der Uhr oder von App-Leisten. Auch eine rote Fläche kann Burn-in deutlicher machen, weil die einzelnen Subpixel unterschiedlich schnell altern.

Burn-in ist dauerhaft. Apps, die eine Reparatur versprechen, lassen meist nur den restlichen Bildschirm altern, damit das alte Muster weniger auffällt. Eine echte Reparatur ist das nicht.

## Reaktion auf Berührungen testen

Ein Display kann perfekt aussehen und trotzdem einen fehlerhaften Digitizer haben. Der Digitizer ist die Schicht, die Berührungen erkennt.

Öffne eine Zeichen-App und wähle einen dünnen Pinsel. Zeichne zuerst horizontale Linien von oben nach unten und danach vertikale Linien von links nach rechts. Setze die Linien dicht nebeneinander. Wenn sie an derselben Stelle immer wieder unterbrochen werden, registriert dieser Bereich Berührungen nicht zuverlässig.

Noch einfacher geht es mit einer Touch-Test-App, die ein Raster anzeigt. Jedes Feld sollte aufleuchten, wenn du mit dem Finger darüberfährst. Tote Bereiche bleiben leer.

Das Menü `*#0*#` enthält auf vielen Galaxy-Smartphones einen Touch-Test. Manche Android-Geräte reagieren außerdem auf `*#*#2664#*#*`, doch dieser Code funktioniert deutlich seltener als die Werkzeuge der Hersteller. Wenn nichts passiert, ist das kein Problem. Der Zeichentest reicht aus.

Achte besonders auf die Displayränder. Bei gebogenen Displays und sehr schmalen Rändern ist die Eingabe dort schwerer zu beurteilen, vor allem wenn eine Handballenerkennung aktiv ist.

## Multitouch testen

Die meisten modernen Smartphones erkennen mindestens fünf gleichzeitige Berührungspunkte, viele sogar zehn. Eine Multitouch-Test-App zeigt für jeden Finger einen nummerierten Kreis an.

Lege mehrere Finger auf das Display und bewege sie langsam. Die Kreise sollten den Fingern folgen, ohne zu springen oder zu verschwinden. Verliert das Smartphone in demselben Bereich immer wieder einen Finger, ist das ein aussagekräftiger Hinweis.

Das spielt bei Spielen, Pinch-to-Zoom, der Tastatureingabe und Bedienungshilfen mit Gesten eine Rolle.

## Auf Geisterberührungen achten

Geisterberührungen sind Eingaben, obwohl niemand das Display berührt. Das Smartphone öffnet Apps, tippt Buchstaben, scrollt oder drückt scheinbar selbstständig auf Schaltflächen.

Entferne zuerst Schutzfolie und Hülle. Billige Schutzfolien, eingeschlossene Feuchtigkeit und Druck an den Rändern können den Digitizer stören. Reinige das Display und teste einmal beim Laden und einmal ohne angeschlossenes Kabel, denn minderwertige Ladegeräte können Störsignale verursachen.

Starte das Smartphone danach im abgesicherten Modus. Treten die Geisterberührungen dort weiterhin auf, ist ein Hardwarefehler wahrscheinlicher. Verschwinden sie, kann eine Drittanbieter-App oder ein Overlay beteiligt sein.

Haben die Touch-Probleme direkt nach einem größeren Betriebssystemupdate begonnen, solltest du Software als mögliche Ursache ernst nehmen. Android 17 wurde zuerst für unterstützte Pixel-Geräte veröffentlicht, andere Hersteller folgten später. Deshalb können updatebedingte Touch-Fehler bei einer Marke früher auftreten als bei einer anderen. Installiere ausstehende Patches und teste erneut, bevor du für einen Displaytausch bezahlst.

## Was du bei einem Defekt tun solltest

Bei einem gebrauchten Smartphone sollten tote Pixel, tote Touch-Bereiche, Geisterberührungen und sichtbares Burn-in den Preis beeinflussen. Lass dir nicht einreden, ein Touch-Problem sei "nur Software", wenn du den abgesicherten Modus oder die Diagnosetests nicht selbst ausprobieren kannst.

Bei einem neuen Smartphone solltest du dich schnell an den Händler wenden. Bei einem Onlinekauf von einem gewerblichen Verkäufer besteht in Deutschland und der EU grundsätzlich ein 14-tägiges Widerrufsrecht. Unabhängig davon gelten bei mangelhafter Ware die gesetzlichen Mängelrechte gegenüber dem Verkäufer. Pixel-Richtlinien, Samsung-Richtlinien, Mobilfunkanbieterregeln und freiwillige Garantien behandeln Pixelfehler nicht immer gleich. Melde den Fehler deshalb sofort, statt abzuwarten.

Bei einem festhängenden Pixel kann sich ein Tool mit schnell wechselnden Farben lohnen, aber erwarte nicht zu viel. Lass es nur kurz laufen, nicht über Nacht bei maximaler Helligkeit. Tote Pixel, Geisterberührungen und tote Touch-Bereiche erfordern meist den Austausch der gesamten Displayeinheit.

Die Kosten einer Displayreparatur unterscheiden sich zu stark, um einen sinnvollen Pauschalpreis zu nennen. Ein günstiges Smartphone mit LCD kann vergleichsweise preiswert zu reparieren sein. Bei einem gebogenen OLED-Display eines Flaggschiffs kann ein Austausch so teuer werden, dass ein anderes Smartphone wirtschaftlicher ist. Hole deshalb immer einen Kostenvoranschlag für das genaue Modell ein.

## Kurze Antworten

### Kann eine Schutzfolie tote Pixel verursachen?

Nein. Tote Pixel befinden sich im Displaypanel. Eine Schutzfolie kann Touch-Probleme, Fehleingaben, eine schlechte Reaktion am Rand oder Störungen des Näherungssensors verursachen, aber sie zerstört keine Pixel.

### Breiten sich tote Pixel aus?

Ein einzelner toter Pixel bleibt meist ein einzelner toter Pixel. Kommen mit der Zeit weitere hinzu, können eine Beschädigung des Panels, Druckschäden oder eine fehlerhafte Verbindung dahinterstecken.

### Ist Burn-in von der Garantie abgedeckt?

Manchmal, aber verlass dich nicht darauf. Viele Hersteller behandeln Burn-in besonders bei älteren OLED-Smartphones als Verschleiß. Starkes Burn-in nach kurzer Nutzungszeit solltest du melden, doch die Abdeckung hängt von der freiwilligen Garantie und den gesetzlichen Mängelrechten ab.

### Ist ein toter Pixel bei einem neuen Smartphone akzeptabel?

Aus Käufersicht nein. Ein neues Smartphone sollte ein fehlerfreies Display haben. Ob der Hersteller das genauso bewertet, hängt von seiner Richtlinie ab. Gegenüber dem Händler können zusätzlich gesetzliche Mängelrechte bestehen, weshalb eine schnelle Meldung wichtig ist.
