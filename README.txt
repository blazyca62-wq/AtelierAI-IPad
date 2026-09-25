AtelierAI iPad 1.84 – Öl-Mischberechnung überarbeitet

INSTALLATION
ZIP entpacken und app.html im bestehenden GitHub-Projekt ersetzen.
Der bisherige Startlink bleibt gleich. Neu laden: Oben muss 1.84 stehen.
Die neue Mischberechnung ist vollständig in app.html enthalten und benötigt
keinen zusätzlichen Onlinedienst. LICENSE-spectral.txt mit aufbewahren.

ÄNDERUNGEN
- Öl: spektrale Näherung mit Spectral.js statt der bisherigen
  Berechnung aus nur drei Farbkanälen.
- Gemeinsames Öl-Modell für Rezeptsuche, Mischpalette und Mischpult.
- Kleine Farbzugaben werden bei Zweiermischungen mit geprüft.
- Erweiterte Dreiermischungen: alle verfügbaren Farben als mögliche Zugabe,
  anschließend Verfeinerung der Mengenverhältnisse.
- Keine Rezeptvorschläge mit Titanweiß und Zinkweiß zusammen.
- Lesbare Teileverhältnisse. Vorschau und Bewertung werden mit den tatsächlich
  angezeigten, gerundeten Mengen erneut berechnet.
- Aquarell behält seine bisherige Mischberechnung und Rezeptsuche.

GRENZEN
Rekonstruierte Spektren aus Bildschirmfarbwerten sind keine gemessenen
Artisan-Pigmentdaten. Mengen sind Startrezepte für einen Mischversuch.
Die Bildschirmnähe bewertet die simulierte Farbe, nicht die garantierte
Übereinstimmung echter Farbe auf der Palette. Die Unterschiede in Deckkraft
und Färbekraft der konkreten Tubenfarben sind nicht separat kalibriert.

RÜCKKEHR
Sicherung_1.83/app.html enthält den unveränderten Ausgangsstand.

QUELLE UND LIZENZ
Spectral.js, Ronald van Wijnen, MIT-Lizenz.
https://github.com/rvanwijnen/spectral.js
Lizenztext: LICENSE-spectral.txt und im eingebetteten Quelltext.

PRÜFUNG
JavaScript-Syntax und Rechenfunktionen geprüft. Kein direkter Safari-/iPad-Test.
