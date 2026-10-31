4.53: Artisan-Rezeptauswahl nach Tonwert korrigiert. Bei ähnlich guten Rezepten (bis 5 Wertungspunkte) haben Rezepte mit höchstens ±1,5 CIELAB-L* Helligkeitsabweichung Vorrang vor Einfachheit. Gilt auch für Korrekturrezept-Suche. In den Mischkarten wird die tatsächliche berechnete Helligkeitsabweichung angezeigt; keine künstliche Aufhellung der Farbfelder. Farbmodell und 4.52-Mitteltonkalibrierung, Foto, Pipette und alle übrigen Module bleiben unverändert. Ohne echte Pigmentmesswerte ist das keine Garantie für die Helligkeit auf der Glaspalette.

4.52: Artisan-Oelmischungen etwas heller abgestimmt. Ausschliesslich im bestehenden Kalibrierungsfaktor fuer mehrfarbige Oelmischungen die maximale interne Mittelton-Korrektur von 5,0 auf 6,5 CIELAB-L*-Punkte erhoeht. Dadurch kann die Rezeptsuche etwas mehr Weiss bzw. hellere Tubenfarben waehlen. Foto, Pipette, Einzelpigmente, Aquarell, Graustufen, Palette, Pigment-Plausibilitaetspruefung 4.51 und Bedienung unveraendert. Bitte Farbproben in Wirklichkeit vergleichen; Heuristik ohne echte Messwerte. 4.51 als Sicherung behalten.

4.51: Artisan-Pigmentplausibilitaet (ohne neuen Modus, ohne Eingriff in andere Module).
Die 40 Winsor-&-Newton-Artisan-Farben haben nun intern die offiziell angegebenen Pigmentcodes und Transparenz-/Deckkraftkennungen. Bei ausreichend farbigen Zielen prueft die Rezeptauswahl, ob eine Mischung ueberhaupt einen geeigneten Farbgeber besitzt. Physikalisch unplausible Kombinationen (z. B. nur Prussian Blue + Weiss fuer einen Rosaton) bekommen einen deutlichen Bewertungsabschlag und sollen nicht mehr als 94/100 erscheinen. Eigene Farben werden nicht nach Namen beurteilt. Unverändert: Synthese-Spektralmodell, 4.50-Mitteltonkorrektur, Tuben-RGB, Palette, Rezepte, Uebernahme, Raster, Aquarell und Bedienung.
Quellen:
- https://uk.winsornewton.com/pages/artisan-water-mixable-oil-colour (Hersteller-Pigmentcodes und Deckkraft)
- https://sensuallogic.com/artistcolordata (Oeffentliche Masstone-RGB- und Dichteangaben, bereits frueher im Programm enthalten; keine Mischspektren)
WICHTIG: Pigmentcodes sind keine gemessenen Reflektanzspektren. Prozentwerte bleiben heuristische Bildschirm-Schaetzwerte; echte physikalische Genauigkeit erfordert Weissausmischungen oder spektrale Messungen konkreter Mischungen.

4.50: Artisan-Mitteltoene: vorsichtige Korrektur des spektralen Mischmodells (bis 5 L*-Punkte dunklere Mischprognose in mittleren Helligkeiten). Damit werden Mischrezepte fuer diese Zielfarben systematisch etwas heller berechnet, anstatt das angezeigte Foto zu veraendern. Dunkle und sehr helle Farbbereiche, Einzel-Tubenfarben, Pipette, Aquarell und Raster unveraendert. Diese empirische Annahme ist keine gemessene Pigmentkalibrierung; mit realer Farbprobe pruefen.
4.49: Ursprungsraster nur noch nach Uebernahme eines Bildausschnitts verfuegbar. Feinraster wird in ausgeschnittenen Bereichen an den alten grossen Rasterzellen ausgerichtet, sodass keine unregelmaessigen/doppelten Linien entstehen. Beide Raster weiterhin einzeln schaltbar. Altprojekte: Ursprungsraster auf dem Gesamtbild wird nicht mehr dargestellt. Alle anderen Funktionen bleiben erhalten.
4.48: Raster-Korrektur: Bei gleichzeitig eingeschaltetem Feinraster und Ursprungsraster sind alle staerkeren Ursprungslinien (waagerecht UND senkrecht) sichtbar. Das Ursprungsraster wird als dezente zweifarbige Linie zuletzt gezeichnet, damit sich bei deckungsgleichen Linien keine Kontraste durch doppelte Differenzmischung ausloeschen. Position, Zoom, Projekt-/Exportlogik und uebrige Funktionen unveraendert.
4.47: Ursprungsraster mit etwas staerkeren halbtransparenten Linien; beim Uebernehmen von Zoom-Ausschnitten oder Rasterkaestchen bleibt die bisherige grosse Rastereinteilung automatisch erhalten. Ursprungs- und Feinraster lassen sich in Farbaufbau und Raster & Speichern separat ein-/ausschalten. Beide bleiben beim Zoomen und Verschieben bildfest. Export und Projektspeicherung enthalten beide Rasterzustände. Bilddaten/Mischalgorithmen unveraendert.
4.46: Ein einziger Standard-Mischweg, keine zusaetzlichen Modi. Fehler in der Artisan-Simulation korrigiert: Prussian Blue hatte einen fast schwarzen/rotstichigen Bildschirmwert, durch den Blau + Weiss fälschlich rosa-grau wirkte. Prussian Blue und Phthalo Blue (Red Shade) erhalten vorsichtige blaue Tint-Proxies. Damit werden unplausible Blau/Weiss-Vorschlaege fuer warme Rosatoene verhindert. Keine gemessenen Mischspektren; Pigmentrezepte sind weiterhin Startwerte fuer eine Farbprobe. Alle uebrigen Funktionen einschliesslich optionaler Basismischungen aus 4.45 bleiben bestehen.
4.45: Individuelles Mischrezept steht im Mittelpunkt. Gemeinsame Basismischungen aus anderen Bereichen und dem Flächenberater sind standardmäßig ausgeblendet und über „Gemeinsame Basismischungen anzeigen“ bei Bedarf zuschaltbar. Beide Schalter sind gekoppelt; die Einstellung bleibt im Browser erhalten. Zusätzliche individuelle Mischrezepte bleiben aufklappbar. Mischalgorithmen und übrige Module unverändert.
4.44: Fehlerkorrektur: Nach Übernahme der Großformen kann „Originalfoto wiederherstellen“ das unveränderte Foto wieder als Arbeitsvorlage setzen. Das Original wird unabhängig von der bearbeiteten Vorlage im Projekt gespeichert und beim Öffnen wiederhergestellt. Die übrigen Module bleiben unverändert.
4.44: Flächenberater liest jetzt ausschließlich die am Bildschirm tatsächlich innerhalb des sichtbaren Kreises/Rechtecks dargestellten Farben aus – ohne die frühere Mindestgröße von 24 Bildpixeln. Vor allem bei starkem Zoom werden keine weit außerhalb liegenden Farben mehr aufgenommen. Die angezeigte Kreisgröße bleibt beim Zoomen konstant; bei Zoom/Größenänderung aktualisiert die Analyse die Ergebnisse. Farbnummern bleiben nach L* hell→dunkel sortiert, Basisrezepte erhalten. Andere Module unverändert.

4.42: Flächenberater zeigt alle bis zu acht Hauptfarben und auch Nuancen innerhalb einer Farbfamilie konsequent von hell nach dunkel. Sortiert wird nach wahrgenommener Helligkeit (CIELAB L*, 100=weiß, 0=schwarz) statt nach Farbanteil oder RGB-Durchschnitt. L* wird mit einer Dezimalstelle angezeigt. Die Nummerierung, Farbauswahl, Vergrößerung und Vorschläge aus der Basisfarbe bleiben aufeinander abgestimmt. Andere Module unverändert.

4.41: Flächenberater erkennt bis zu acht statt fünf Hauptfarben bzw. Nuancen. Eine der erkannten Farben kann als Basisfarbe gewählt werden; AtelierAI zeigt ihr originales Tubenmischrezept und prüft, welche der übrigen Farbflächen aus 30 Teilen fertiger Basis plus wenigen Pigmentzugaben sinnvoll erreichbar sind. Wo der Vorschlag nicht innerhalb von fünf Ähnlichkeitspunkten des Einzelrezepts liegt, bleibt das Einzelrezept die Empfehlung. Farbähnlichkeiten beruhen auf Simulationen; alle übrigen Module bleiben erhalten.

4.40: Im Malaufbau sind jetzt fünf Stufen 8 → 16 → 32 → 48 → 64 enthalten. Die 8 Grundfarben sind eine bewusst ausgewählte Teilmenge der bestehenden 16 Farben (große Flächen, Hell/Dunkel, eigenständige Farbtöne). Die bisherigen 16/32/48/64-Farben bleiben RGB-identisch und werden sukzessive ergänzt. „Nur neue Farben“ zeigt die Ergänzungen der jeweiligen Stufe. Auch „Endgültige Farben“ beginnt mit 8 statt 16 Farben.

AtelierAI 4.39: Gespeicherte Farbnummern öffnen nun die Mischvorschläge der passenden Palette. Das ursprünglich gemerkte Rezept steht an erster Stelle mit „Nur diese Farbe zeigen“. Ohne aktive Einzelfarbansicht löst ein Nummerntipp keine Isolation aus. Die übrigen Module bleiben unverändert.
AtelierAI 4.13: Einheitliche 5-Punkte-Toleranz bei Farbkorrekturen, Wiederverwendung gespeicherter Mischungen und Bevorzugung weniger Tuben in gemeinsamen Basismischungen. Sonstige Funktionen aus 4.12 unverändert.
AtelierAI 4.12: Einfache Farbmischungen werden innerhalb von 5 Prozentpunkten Farbtreue bevorzugt (auch bei praktisch gerundeten Mischrezepten). Sonstige Funktionen von 4.11 bleiben erhalten.
AtelierAI 4.11: Korrektur der iPad-Kopfleiste: alle Schaltflächen werden jetzt in weitere Zeilen umgebrochen statt rechts abgeschnitten. Bildexport mit/ohne Raster aus 4.10 bleibt erhalten. Sonstige Funktionen unverändert.
AtelierAI 4.10: Bildexport direkt im Hauptfenster (standardmäßig ohne Raster). Export im Raster-und-Speichern-Menü mit wählbarem Raster. PNG/JPEG, Vollbild oder Ausschnitt, Teilen oder Herunterladen. Restliche Funktionen aus 4.09 unverändert.

AtelierAI 4.09: Ähnlichkeit der Pipettenfarbe direkt unter der Ausgangs-Pipette; betroffene Stellen im Bild anzeigen (Vorschau). Alle bisherigen Berechnungen unverändert.

AtelierAI 4.08 – Neue integrierte, offline verfügbare Hilfe mit Suche, Anleitungen nach Aufgabe und Werkzeugverzeichnis. Bildalgorithmen unverändert gegenüber 4.07.

4.06: Pipetten-Farbtoleranz neu abgestimmt; Maske kombiniert Farbaehnlichkeit mit Lasso. Anzeige bestaetigt Probe.
AtelierAI 4.05 – Neues Lasso aktiviert die Ausgangs-Pipette automatisch, löscht die vorherige Farbprobe und wartet auf die neue Probe. Die Zielfarbe bleibt unabhängig. Punktprobe verkleinert, Farbtoleranz 12 %. Manuelle Familienauswahl bleibt möglich.

AtelierAI 4.04 – Farbharmonie: Pipettenmaske enger nach Farbton und Helligkeit, neuer Startwert 12 % Ähnlichkeit, keine Farbauswahl ohne gültige Pipettenprobe.

AtelierAI 4.03 – Klare Trennung Ausgangsfarbe (nur angetippte Farbe) und Zielfarbe; Quelle muss bei aktivem Lasso innen liegen; Farbbereich-Regler bleibt unter Erweitert. Update-Kennung 4.03.

AtelierAI 4.02 – Farbbearbeitung übersichtlicher: direkte Farbänderung im Vordergrund, seltene Regler unter „Erweitert“, Projekt/Prüfansicht separat. Versionskennungen für Offline-Update auf 4.02 angehoben.

AtelierAI 4.01 – Nach „Änderung merken“ wird die aktuelle Lasso-Auswahl aufgehoben, damit direkt der nächste Bereich bearbeitet werden kann. Nach „Als Malvorlage übernehmen“ startet die Farbbearbeitung beim nächsten Öffnen mit frischer Auswahl auf der neuen Vorlage, statt die alte Bereichsauswahl weiterzuführen.

AtelierAI 3.99 – Mehrere unabhängige Linien im Linienverlauf. „Weitere Linie hinzufügen“ steuert ein gemeinsames, weich kombiniertes Farbfeld; bis zu 12 Linien, einzeln beweglich; Lasso optional, Farbharmonie Mischen/Ersetzen bleibt nutzbar.

AtelierAI 3.98 – Linienverlauf direkt unter Lasso-Auswahl. Ohne Lasso wirkt der Linienverlauf im ganzen Bild, mit Lasso nur innerhalb der Auswahl. Bereichsstatus und Linienverlauf zeigen den aktuellen Wirkbereich klar an.

AtelierAI 3.46 – Werkzeugmenü öffnet sich jetzt über der linken Bildspalte statt über den Werkzeugreitern rechts. Die Bildfläche bleibt unverändert groß. Alle Mischfunktionen aus 3.45 erhalten.

3.67: Regler Farbaehnlichkeit und Helligkeitsbereich rechnen stets vom unveraenderten Bild neu. Dadurch koennen entfernte Flaechen beim Erhoehen wieder erscheinen.

3.68: Kein automatisches Scrollen bei Farbnummern; Zwei-Farben-Legende direkt beim Aehnlichkeitsregler; Ueberlappungsfarben nur bei genau zwei aktiven Farben.

3.69: Neue Schaltfläche „Für alle Module übernehmen“ in der oberen Leiste. Das aktive Bild (einschließlich 8/16/32/64-Farben, Großformen und weiteren Bildansichten) wird ohne Rasterlinien als Arbeitsgrundlage aller Module übernommen. Originalfoto bleibt erhalten.

3.70: GitHub-Neupaketierung; korrigierter Versionslink 3.70 in Startdateien, aktualisierter Offline-Cache. Funktionen aus 3.69 unverändert.

3.71: Posterize im Modul Großformen, 3–8 Tonwertstufen, farbig/Schwarz-Weiß; bisherige Großformen bleiben erhalten.

3.72: Neues separates Modul „Künstlerische Gestaltung“ mit zehn kombinierbaren Reglern, Vorschau, Originalvergleich, PNG-Export und Übernahme als gemeinsame Bildvorlage. Verarbeitung lokal und offline. Hinweis: Vorschau und Übernahme werden auf max. 1000 Pixel an der längsten Seite berechnet.

3.73: Künstlerische Gestaltung als eigenständig startendes Skript; korrigierter Öffnen-Knopf und eigene Fehleranzeige.

3.74: Vorschau-Canvas aus globaler absoluter Positionierung ausgenommen; iPad-Layout, sichtbare Regler und getrenntes Scrollen repariert.

3.75: Künstlerische Gestaltung: Pinch-Zoom, Ein-Finger-Verschieben, +/- und Einpassen; Export bleibt unverändert.

3.76: Vier Gestaltungsfilter überarbeitet: strukturgeführte Pinselstriche, gebrochene Farbflächen, transparente Aquarellanmutung, kantenbewusste Abstraktion.

3.77: Vier wenig brauchbare Filter (Pinselstriche, Aquarell, Spachtel, Abstraktion) entfernt. Sechs verbleibende Gestaltungsfilter gezielter verbessert.

3.78: Sechs Kunstfilter neu abgestimmt (kantenerhaltende Glättung, mehrstufige Farbgruppen, tonwertorientierte Lichtführung) und vier Gestaltungsrezepte.

3.81: Rezepte an die stärkere Reglerkennlinie angepasst. Zusätzlich drei neue Grundregler in der künstlerischen Gestaltung: Helligkeit, Sättigung sowie Warm/Kalt. Helligkeit, Sättigung und Warm/Kalt arbeiten mit negativem und positivem Bereich.

3.82: Motiv hervorheben (Schwerpunkt einstellbar), gerichtete Lichtstimmung (Richtung), Farbkontraste, Schattenfarben (warm/kalt) und sechs zusätzliche Rezepte.

3.83: Mischmodul – automatische Graustufen 1–10 nach wahrgenommener Helligkeit; Umgebung aus Foto und Neutralgrau weiterhin verfügbar.

3.84: Graustufen umgekehrt (1 = hell, 10 = dunkel) und wahrnehmungsbezogen gleichmaessig abgestuft; Bildumgebung und Neutralgrau unveraendert.

3.85: Mischmodul – 12 automatische Graustufen; Stufe 1 = reines Weiss, Stufe 12 = Schwarz; gleichmaessig von Weiss bis Schwarz verteilt.

3.86: Graustufe 1 nur fuer neutrales (fast) Weiss, gesaettigte helle Farben wie Gelb werden mindestens Stufe 3.

3.87: Graustufe 12 nur fuer Schwarz oder fast neutrales Schwarz, dunkle Buntfarben maximal Stufe 11.

3.88: Schwarz-Erkennung für Graustufe 12 erweitert; fast neutrales Schwarz RGB 11/14/17 wird Stufe 12, Dunkelbraun RGB 59/30/17 bleibt Stufe 11.

3.89: Großformen mit kantenschonender Vorfilterung und zusammenhängender Inselbereinigung; keine neuen Regler.

3.90: Farbverwandtschaft erweitert: alternative gemeinsame Pigmentpaare, bevorzugte Basispigmente bei Korrekturen, einfachere Mischwege. Keine neuen Bedienelemente, kein Online-Dienst.

4.21: Farbuebertragung korrigiert: Farbbalance und Pastell-Saettigungsverteilung der Referenz statt Naechste-Farbe-Suche.

4.38: Farbübertragung: 128 echte 1:1-Farbpaare ohne globale Farb-LUT-Glättung. Neuer Regler „Nur Farbgrenzen glätten“ (Standard 0 %). Nur räumliche Grenzen kohärenter Farbflächen werden optional gemildert; keine Helligkeits- oder Bildgeometrieglättung.

4.38: Farbübertragung – Original-/Ergebnisvorschau mit Zwei-Finger-Zoom (1–12×), Verschieben und Einpassen-Knopf. Nur die Anzeige wird skaliert, Farbpaare, Pixelwerte, Export und sonstige Module bleiben unverändert. Keine automatische Bewertung der Bildähnlichkeit.
