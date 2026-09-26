AtelierAI iPad 2.06 – Weiß und helle Lichtstellen erhalten

app.html im GitHub-Projekt ersetzen, neu laden und Farben erneut erkennen.
Sehr helle nahezu weiße Eingangstöne werden nicht mehr vorab zu dunkleren
Sammelfarben gemittelt. Der hellste vorhandene Lichtton wird bei der
Palettenberechnung geschützt. Es wird kein künstliches Weiß hinzugefügt.
Die übrigen Bildfarben bleiben weiterhin eine Näherung mit 32/48/64 Farben.

Geprüft: Kleine weiße und fast weiße Stellen bei allen drei Farbanzahlen.
Reproduktion: Weiß 255 wurde bisher zu 248; jetzt bleibt es 255.
Keine künstlichen weißen Töne bei dunklen Bildern. Syntax und Farbzuordnung
geprüft. Kein direkter iPad-Test.

AtelierAI iPad 2.05 – Schwarz-Weiß-Original stufenlos einblenden

app.html im GitHub-Projekt ersetzen und neu laden.
Der Regler „Original S/W“ ersetzt den bisherigen Umschaltknopf.
0 %: gewählter weißer/grauer Hintergrund.
100 %: Schwarz-Weiß-Original als Orientierung im Hintergrund.
Die ausgewählten Farbflächen bleiben bei jeder Reglerstellung vollständig
farbig sichtbar. Auswahl und gespeicherte Zusammenstellung bleiben erhalten.
Sind alle Farben eingeblendet, verdecken diese das Schwarz-Weiß-Original.

Geprüft: Syntax, Reglerwerte 0/25/50/100, unveränderte ausgewählte Farbwerte
und Erhalt der Auswahl. Kein direkter iPad-Test.

AtelierAI iPad 2.04 – Original in Schwarz-Weiß

app.html im GitHub-Projekt ersetzen und neu laden.
Unten „Original in Schwarz-Weiß“ antippen: vollständiges Originalfoto
in Graustufen vergleichen. „Zurück zur Farbansicht“ bringt exakt die
vorherige Ansicht zurück. Auswahl, temporäre Farbgruppe und Hintergrundwahl
bleiben erhalten. Das Raster ist auch über dem Schwarz-Weiß-Original sichtbar.
Beim Auswählen einer Farbe wird wieder die Farbansicht gezeigt.

Geprüft: Syntax, Graustufenwerte und Hin-/Zurückschalten ohne Änderung
der gespeicherten Farbauswahl. Kein direkter iPad-Test.

AtelierAI iPad 2.03 – Ähnliche Farben vorübergehend zuschalten

app.html im GitHub-Projekt ersetzen und neu laden.

Alle Farben oder eine eigene Auswahl anzeigen, dann „Eine Farbe ansehen“.
Gewünschtes Farbfeld wählen. Unter der Palette erscheinen bis zu sechs
wahrnehmungsähnliche Farben zur gewählten Ausgangsfarbe. Antippen schaltet
diese zusätzlich ein, erneutes Antippen wieder aus.
Mit „Farben zuschalten: Ein“ sind auch beliebige weitere Farbfelder wählbar.
Mischrezepte gelten jeweils für die zuletzt gewählte sichtbare Farbe, nicht
für eine gemeinsame Mischung aller eingeblendeten Farben.
„Zurück zur Auswahl“ stellt den Zustand vor der Einzelansicht wieder her.

Geprüft: Syntax, Zu-/Ausschalten in der Einzelansicht, Rückkehr zur
ursprünglichen Gruppe und Erhalt der Hintergrundwahl. Kein direkter iPad-Test.

AtelierAI iPad 2.02 – Hintergrund selbst wählen

app.html im GitHub-Projekt ersetzen und neu laden.
Unten Hintergrund wählen: Automatisch, Weiß oder Grau.
Weiß/Grau bleibt beim Farbwechsel, beim Blättern und bei der Rückkehr zur
gespeicherten Auswahl bestehen. Gilt für Einzelansicht, Mehrfachauswahl,
Regleraufbau und Ergänzungen. Die Bildfarben selbst bleiben unverändert.

Geprüft: Syntax, Hintergrundwahl, Erhalt der Farbauswahl und Einzelansicht.
Kein direkter iPad-Test.

AtelierAI iPad 2.01 – Einzelansicht mit gespeicherter Auswahl

app.html im GitHub-Projekt ersetzen und neu laden.
Mehrere Farben zusammenstellen, dann „Eine Farbe ansehen“ antippen.
Die bisherige Auswahl wird gespeichert; Farbfelder zeigen jetzt jeweils
nur eine Farbe mit ihrer Mischung.
„Zurück zur Auswahl“ stellt die vorherige Zusammenstellung wieder her.
Danach können weitere Farben zu- und ausgeschaltet werden.
Ein neues Foto oder eine neue Farbanalyse setzt die gespeicherte Auswahl zurück.

Geprüft: Einzelansicht, Wechsel zwischen Farben, wiederholtes Antippen,
Wiederherstellung und Weiterführen der Auswahl sowie Syntax. Kein iPad-Test.

AtelierAI iPad 2.00 – Alle Farbfelder erreichbar

app.html im GitHub-Projekt ersetzen und neu laden.
Die Palette zeigt nun 16 Farben je Seite in zwei Reihen.
Sichtbare Tasten: 1–16, 17–32, bei 48 zusätzlich 33–48, bei 64 auch 49–64.
Die Gesamtzahl wird neben den Seitentasten angezeigt.
Beim Blättern bleiben zugeschaltete Bildfarben und Mischung erhalten.

Geprüft: Quantisierung mit 32/48/64, Erreichbarkeit aller Farbfelder,
Seitenzahl, Erhalt der Auswahl und JavaScript-Syntax. Kein direkter iPad-Test.

AtelierAI iPad 1.99 – 32 / 48 / 64 Farben und größere Bildansicht

Zum Aktualisieren app.html und index.html ersetzen; manifest.webmanifest
aus dem Paket im selben Ordner belassen bzw. mit hochladen.

Im Farbaufbau 32, 48 oder 64 wählen. Bei geladenem Foto startet die neue
Analyse automatisch; die bisherige Farbauswahl wird dabei zurückgesetzt.
Die Farbfelder haben zwei Reihen, horizontal wischen für weitere Farben.
„Bild größer“ blendet die Werkzeugspalte aus. „Werkzeuge anzeigen“ holt sie zurück.
„Farben einklappen“ schafft zusätzlich Platz für das Bild.
Ein-/Ausschalten, Zuschaltemodus, Mischungen und Rückkehrknöpfe bleiben erhalten.

iPad: In Safari Teilen > Zum Home-Bildschirm > Als Web-App öffnen aktivieren.
Anschließend über das neue Symbol starten.

Geprüft: 32/48/64 Quantisierung, gültige Pixelzuordnung, Farbumschaltung,
Hintergrund und Zustandswiederherstellung, JavaScript-Syntax.
Kein Browser-/iPad-Test der neuen Anordnung möglich.

AtelierAI iPad 1.98 – Zur vorherigen Ansicht zurückkehren

app.html im GitHub-Projekt ersetzen und neu laden.
„Alle Farben“ wird zu „Zurück zur Farbauswahl“: erneut antippen stellt die
vorherige Auswahl oder Regler-/Ergänzungsansicht wieder her.
„Zur Arbeitsansicht“ wird zu „Zurück zum Farbaufbau“ und schaltet zurück.
Bei neuer Farbauswahl oder Reglerbedienung beginnt eine neue Auswahl.

Geprüft: Rückkehr mit Mehrfachauswahl, Reglern, Ergänzungen, leerer Auswahl
und Arbeitsansicht sowie JavaScript-Syntax. Kein direkter iPad-Test.

AtelierAI iPad 1.97 – Farben ausschalten und automatischer Hintergrund

app.html im GitHub-Projekt ersetzen und neu laden.
Farbfeld antippen: einschalten. Erneut antippen: ausschalten.
Bei „Farben zuschalten: Ein“ bleiben die anderen Farben sichtbar.
Dunkle Farbe: weißer Hintergrund. Helle Farbe: Mittelgrau.
Bei mehreren Farben entscheidet die zuletzt zugeschaltete sichtbare Farbe.
Wird diese ausgeschaltet, gilt die zuletzt davor gewählte, noch sichtbare Farbe.
Die Mischung folgt derselben Auswahl.

Geprüft: Ein-/Ausschalten, Mehrfachauswahl, leere Auswahl, Hintergrundwechsel
und Auswahl beim Neuzeichnen. Kein direkter iPad-Test.

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

Version 2.07 – Farbfamilien im Farbaufbau
- Für alle vorhandenen Farbanzahlen: 32, 48 und 64.
- Unter „Einblendung“ Normal oder eine Farbfamilie wählen.
- Beide Regler funktionieren innerhalb der gewählten Familie.
- Hell nach Dunkel: vorhandenes Weiß und sehr helle neutrale Bildfarben zuerst,
  danach die Farbtöne der Familie. Dunkel nach Hell kehrt diese Reihenfolge um.
- Es werden nur im Bild vorhandene Farben angezeigt; Weiß wird nicht erfunden.
- Beim Wechsel bleibt die Auswahl jeder Familie bis zur nächsten Farberkennung erhalten.
- „Alle Farben“ zeigt weiterhin das ganze Bild und kehrt zur Auswahl zurück.
- Die Zuordnung von Bildfarben zu Familien erfolgt anhand von Farbton,
  Helligkeit und Buntheit; Grenztöne werden einer Familie zugeordnet.
- Syntax und Regler-/Auswahllogik automatisch geprüft. Kein Safari-Gerätetest.


Version 2.08 – Nur ungemischte Farben
Im Modul 32 / 48 / 64 Farben unter Darstellung umschalten.
Öl: ausschließlich reine Farben der gewählten Palette, kein Ausmischen.
Aquarell: einzelne Palettenfarben in sieben Auftragsstärken und Papierweiß.
Die Anzahl ergibt sich aus den im Bild verwendeten Farben bzw. Lasurstufen.
Palette oben bei den Farbfeldern wählen; persönliche Farbauswahl unter Mischen.
Farbname und Farbauftrag erscheinen beim Antippen eines Farbfeldes.
Farbfamilien, Hell-Dunkel-Regler und Originalansicht bleiben nutzbar.
Bildschirm-Simulation: Wasserangaben sind keine Mischverhältnisse.


Version 2.09 – Artisan: einfache Mischungen
Im Modul 32 / 48 / 64 Farben unter Darstellung wählen.
Zusätzlich zu reinen Tubenfarben werden Mischungen mit vorhandenem Weiß, Gelb und Blau angeboten.
Bevorzugt: Titanium White, Lemon Yellow, French Ultramarine; sonst passende vorhandene Farben.
Gelb- und Blaumischungen können zusätzlich mit Weiß aufgehellt werden.
Beim Antippen: Farbanteile in Prozent als Startrezept, keine gemessene Pigmentsimulation.
Aquarell und die reine Tubenfarben-Ansicht bleiben erhalten.


Version 2.10 – Artisan-Mischungen begrenzen
Unter Darstellung „Artisan – einfache Mischungen“ auswählen.
Daneben unter „Mischungen“: 32, 48, 64 (Startwert) oder Alle Mischungen.
Die Anzahl ist eine Höchstzahl; Bilder mit wenigen Farben benötigen weniger.
Ähnliche Farbtöne werden auf vorhandene Mischrezepte zusammengefasst.
Der hellste und dunkelste verwendete Ton bleiben erhalten.
Die Farbfelder zeigen weiterhin die zugehörigen Mischanteile.
Aquarell und reine Tubenfarben bleiben unverändert.
