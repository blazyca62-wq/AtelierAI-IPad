AtelierAI iPad 1.27

WICHTIGE STRUKTURÄNDERUNG:
index.html ist ab jetzt ein permanenter Start-Loader.
Die eigentliche Anwendung liegt in app.html.

Bei jedem Start lädt index.html die app.html mit einem neuen eindeutigen
Zeitstempel und cache:'no-store'. Dadurch kann Safari/GitHub Pages nicht
einfach die vorherige App-Version aus dem Browsercache verwenden.

Für kommende Versionen:
- index.html möglichst unverändert lassen.
- Nur app.html durch die neue Programmversion ersetzen.
- Dadurch öffnet der gleiche Start-Link automatisch immer die neueste App.

Version 1.12 enthält außerdem die Funktionen aus 1.11:
- Original ein-/ausblendbar bei Tonwerten.
- Original ein-/ausblendbar bei „Nur diese Farbe zeigen“.
- Farbreise-Fix aus 1.10 bleibt erhalten.

Zielreferenz: AtelierAI PC 2.6.96.

1.13: Statt Original-Ein/Aus gibt es bei Tonwerten und „Diese Farbe sehen“ einen stufenlosen Original-Überblendungsregler 0–100 %. 0 % = Arbeitsansicht, 100 % = Original, Zwischenwerte blenden das Original langsam darüber. Zoom, Position und Analyse bleiben erhalten.

1.14: Neuer Farbberater mit Lavendel/Violett, Grün, sehr differenzierten Hautfarben und Blau. Farbige Nuancen und bis zu drei Mischvorschläge aus der bestehenden AtelierAI-Palettenlogik.

1.15: Farbberater-Palettenanbindung korrigiert. Er verwendet jetzt die tatsächlich vorhandene AtelierAI-Palette und fällt nicht mehr wegen eines falschen Palettenschlüssels auf „keine Mischung gefunden“ zurück.

1.16: Farbberater komplett als interaktives Farbmischpult neu aufgebaut. Grundmischung plus konkrete Tubenfarben aus der gewählten Palette, jede Zugabe mit eigenem Regler 0–5 Teile, großes Live-Ergebnisfeld, aktuelle Rezeptur und freie zusätzliche Palettenfarbe.

1.17 Farbberater:
- Farbwahl funktioniert auch dann, wenn noch keine persönliche Palette aktiviert wurde: im Farbberater wird dann die vollständige reale Herstellerpalette angeboten.
- Eigene konkrete Tubenfarbe über Auswahl + „Farbe hinzufügen“.
- Button „Ganzes Fenster“ vergrößert das Mischpult auf die komplette App-Fläche.
- Im Vollbild werden die Mischregler größer und übersichtlicher dargestellt.

1.18 Farbmischpult:
- Das Werkzeug heißt jetzt eindeutig „Farbmischpult“.
- Im Farbmischpult stehen immer alle Tubenfarben der aktuell gewählten Herstellerpalette zur Auswahl.
- Die persönliche Farbauswahl begrenzt dieses Werkzeug nicht mehr.
- Bereits vorhandene Farben können über die Auswahl erneut angewählt und direkt aktiviert werden.

1.19 Farbmischpult – echte Korrektur:
- Navigationsleiste zeigt nun „Farbmischpult“ statt „Werkzeug“.
- Die versehentlich dreifach als „Farbmischpult“ beschrifteten Schaltflächen wurden zurückgesetzt:
  Ganzes Fenster, Farbe hinzufügen, Grundmischung wiederherstellen, Mischung leeren.
- Das Farbmischpult hat jetzt echten Zugriff auf die intern definierten Herstellerpaletten.
- Ursache behoben: Die Paletten waren im Hauptprogramm in einem geschlossenen JavaScript-Bereich und für das neue Modul vorher nicht sichtbar.

1.20 Farbmischpult:
- Neue Farbzugäbe startet deutlich sanfter bei 0,1 Teilen statt 0,5.
- Auch eine bereits vorhandene Farbe mit 0 wird beim Anwählen nur auf 0,1 gesetzt.
- Regler feiner abgestuft: 0,05 Schritte.
- Kleine Zugaben werden genauer mit zwei Nachkommastellen angezeigt.

1.21: Haupt-Farbfeld im Farbmischpult deutlich vergrößert (260 px, im Vollbild 320 px). Alle übrigen Bedienelemente behalten ihre bisherige Größe.

1.22: Farbmischpult um viele malerische Farbfamilien erweitert: Erde/Boden, Schnee, Herbst, Himmel, Wasser, Sand, Stein/Felsen, Holz, Laub/Naturgrün, natürliche Schatten, Wolken, Abendhimmel, Rosa und rote Blüten, Gelb/Sonnenlicht, Türkis, malerisches Grau, gebrochenes Weiß und sehr dunkle Mischungen. Bestehende Bedienung, Regler, Palettenzugriff, Vollbild und großes Farbfeld unverändert.

1.23: Farbatlas als zusätzliche Ebene im bestehenden Farbmischpult. Jede Farbfamilie besitzt mehrere konkrete Ausgangsvorschläge. Auswahl eines Vorschlags erzeugt nur eine neue Grundmischung; alle bisherigen Regler, sanfte Dosierung, freies Hinzufügen jeder Tubenfarbe, großes Farbfeld und Vollbild bleiben unverändert verfügbar.

1.24: Im Farbatlas/Farbmischpult gibt es jetzt den Regler „Grundton heller / dunkler“ (-40 bis +40). Er verändert den gewählten Ausgangston und berechnet daraus eine passende neue Grundmischung. Alle bisherigen Regler, freie Farbauswahl, sanfte Dosierung, großes Farbfeld und Vollbild bleiben erhalten.

1.25: Großer Farbatlas stark erweitert. Insgesamt 385 konkrete Farbvorschläge.
Besonders erweitert: Hauttöne mit vielen Licht-, Halbton-, Schatten-, Wangen-, Hals-, Ohr-, Kinder-, Männer- und Frauenhaut-Varianten.
Neue Themen: Haare, Augen, Lippen, Wangen/Hautröte, Wiesen, Getreide, Berge, Nebel, Nacht/Mondlicht, Sturm, Ziegel/Terrakotta, Metall/Silber, Kupfer/Bronze, Gold/Messing, Stoff/Kleidung.
Zusätzlich Künstler-inspirierte Farbstimmungen (keine historischen Originalrezepte), z.B. Rembrandt, Turner, Monet, Renoir, Sargent, Zorn, Sorolla, Cézanne, Van Gogh, Vermeer, Whistler, Degas, Matisse und Hopper.
Bestehendes Mischpult unverändert: Regler, Grundton heller/dunkler, sanfte Dosierung, großes Farbfeld, Vollbild und freie Farbauswahl bleiben erhalten.

1.26: Für jeden der 14 bereits vorhandenen Künstler gibt es jetzt eine eigene Kategorie mit genau 20 malerisch inspirierten Farbvorschlägen (280 insgesamt). Alle sind ausdrücklich als inspiriert gekennzeichnet, nicht als historische Originalrezepte. Bestehendes Mischpult unverändert.

1.27: Sechs vom Nutzer bereitgestellte Monet-Bilder als eigene Farbmischpult-Kategorien ergänzt. Jedes Bild enthält 20 benannte Farbvorschläge (120 insgesamt), aus den Bildfarben abgeleitet. Alle bisherigen Mischpult-Funktionen bleiben unverändert.
