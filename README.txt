AtelierAI iPad 1.85 – Grauer Hintergrund und flüssiger Farbregler

INSTALLATION
ZIP entpacken und app.html im bestehenden GitHub-Projekt ersetzen.
Der Startlink bleibt gleich. Nach Neuladen muss oben 1.85 stehen.

NEU
- Schalter „Mittelgrauer Hintergrund: An/Aus“ neben der Farbisolierung.
- Derselbe Schalter auch im Flächenberater; beide bleiben synchron.
- Bei „Nur diese Farbe zeigen“ werden ausgeblendete Flächen wahlweise
  mittelgrau (#808080) statt sehr hell. Erhaltene Bildpixel bleiben unverändert.
- Farbähnlichkeit in halben Schritten einstellbar.
- Farbvergleich läuft über einen eingebetteten Web Worker im Hintergrund.
  Bei Reglerbewegungen werden vorberechnete Farbabstände wiederverwendet.
  Zwischenstände werden übersprungen und veraltete Ergebnisse verworfen.
- „Alle Farben zeigen“ bricht auch noch laufende Anzeigen korrekt ab.
- Kein zusätzlicher Download oder Dienst für die Hintergrundberechnung nötig.
- Die Mischberechnung aus Version 1.84 ist unverändert.

PRÜFUNG
JavaScript-Syntax, Maskierung, Hintergrundwechsel, Wiederverwendung der
Farbdaten, Worker-Datenübertragung und Abbruch veralteter Ergebnisse geprüft.
Kein direkter Safari-/iPad-Test. Ohne Worker wird dieselbe Berechnung lokal
auf dem Hauptthread ausgeführt; dann kann die Bedienung langsamer sein.

RÜCKKEHR
Sicherung_1.84/app.html enthält die bisherige Version.

VORHERIGE VERSION / LIZENZHINWEISE

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
