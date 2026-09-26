AtelierAI iPad 1.96 – Farben zuschalten

app.html im GitHub-Projekt ersetzen und neu laden.

Unten „Farben zuschalten: Ein“ aktivieren. Jede angetippte Farbe kommt zur
bisherigen Auswahl hinzu. Erneutes Antippen lässt die Farbe sichtbar.
Die Mischung gehört jeweils zur zuletzt angetippten Farbe.
„Farben zuschalten: Aus“ kehrt zur einzelnen Farbe zurück.
„Alle Farben“ zeigt das vollständige Bild.

Geprüft: Syntax, kumulative Farbmasken, unveränderte Farbwerte, wiederholtes
Antippen und Rückkehr zur Einzelansicht. Kein direkter iPad-Test.

AtelierAI iPad 1.95 – Anklickbare 32 Farben und Mischung

app.html im bestehenden GitHub-Projekt ersetzen und neu laden.
Oben muss danach 1.95 stehen. Der Startlink bleibt gleich.

32 Farben erkennen: Die nummerierten Farbfelder erscheinen unter dem Bild.
Eine Farbe antippen: nur deren Flächen auf Mittelgrau und passendes Mischrezept.
Palette unten wählen: Artisan (Öl), Horadam oder Akademie (Aquarell).
Alle Farben zeigt das komplette 32-Farben-Bild. Die bisherigen Regler bleiben nutzbar.

Geprüft: JavaScript-Syntax, Farbmasken, Hintergrund und Auswahlwechsel.
Kein Browser- oder direkter iPad-Test möglich.

AtelierAI iPad 1.86 – Raster auf Mittelgrau sichtbar

app.html im bestehenden GitHub-Projekt ersetzen und neu laden.
Oben muss danach 1.86 stehen. Der Startlink bleibt gleich.

Bei aktiver Farbisolierung mit mittelgrauem Hintergrund verwendet das Raster
dunkle Linien mit einer hellen Kontur. So bleibt es auf Mittelgrau und auf den
hellen ausgewählten Farbflächen sichtbar. Die normale Rasterdarstellung mit
automatischem Hell-Dunkel-Kontrast bleibt unverändert.

Geprüft: tatsächliche Canvas-Ausgabe auf Grau und Hellgelb, unveränderte
Pixel-Ausgabe des normalen Rasters und JavaScript-Syntax.
Kein direkter iPad-Test.

Sicherung_1.85/app.html enthält die vorherige Version.

VORHERIGE VERSIONEN / LIZENZHINWEISE

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
