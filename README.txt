AtelierAI 3.34 – GitHub Pages Aktualisierung

ZIP entpacken. Alle neun Dateien im Repository-Stammverzeichnis hochladen und mit 'Commit changes' bestaetigen. Unter Settings > Pages pruefen, dass die richtige Quelle aktiviert ist. Anschliessend die veroeffentlichte Seite neu laden.

Aenderungen: Version 3.34 sichtbar; Einstieg mit Versionsparameter; Online-Dateien werden bevorzugt, Offline-Kopie bleibt erhalten. Mischlogik aus 3.32/3.33 unveraendert.

WICHTIG: Eine ZIP kann keine GitHub Action ausloesen, bevor die Dateien erfolgreich committed wurden. Falls keine Action startet, bitte Repository- und Pages-Einstellungen pruefen.

AtelierAI iPad 3.33 – Versions- und GitHub-Updatefix

Die neun Dateien dieses Ordners gemeinsam hochladen und bestehende Dateien ersetzen.

Große Fotos werden für die Bearbeitung auf maximal 3072 Pixel an der längeren Seite begrenzt. Kleine Fotos bleiben unverändert. Das Originalfoto bitte separat aufbewahren.
Identische Bildstände werden im Projekt nur einmal abgelegt. Automatisches Speichern wartet sechs Sekunden nach der letzten Bedienung. Beim Öffnen wird nur das gewählte Projekt geladen.
Bestehende Projektdateien bleiben lesbar.

Prüfung: JavaScript-Syntax, Projektvalidierung und Speicherzugriffe. Ein Test auf einem echten iPad steht noch aus.

3.24: Menü schließen bleibt während des Speicherns bedienbar. Bild- und Browser-Speicherung erhalten Zeitgrenzen; Fehler geben die Projektknöpfe wieder frei. Download startet erst nach Freigabe der Bedienung. Nach erfolgreichem Speichern wird kein unnötiger Autosave gestartet. Simulierte hängende Speicheraktionen geprüft.

3.25: Ausschnitte werden automatisch eigene Projektbereiche. Zum Gesamtbild speichert den Ausschnitt mit Farben und Mischungen und öffnet den Ausgangsbereich. Der Rückweg bleibt nach Projektladen erhalten. Rasterausrichtung wird je Bereich gespeichert. Alte Dateien ohne gespeichertes Gesamtbild können dieses nicht nachträglich wiederherstellen.

3.26: Bereiche einzeln über Bereich löschen entfernen (mit Rückfrage). Das Ausgangsbild und von anderen Bereichen benötigte Gesamtbilder bleiben geschützt. Nach dem Löschen wird das Gesamtbild geöffnet und das Projekt gespeichert.

3.27: Beim Ausschnitt Name eingeben für einen neuen Bereich oder leer bestätigen für den aktuellen Bereich. Gesamtbild wird erhalten; gesammelte Farbproben werden beim Zurückkehren übernommen. Bereich umbenennen ergänzt.

3.30: Neue Fotos ohne Raster. Projekte öffnen mit eingepasstem Gesamtbild ohne Raster, auch beim automatischen Wiederöffnen. Eigene Bereiche bleiben erhalten.

3.30: Gespeicherte Basismischungen vergleichen; Offline-Cache auf Version 3.30 aktualisiert.

3.31: Gespeicherte Bereichsfarbe ab 98/100 Bildschirmnähe direkt verwenden, ohne unnötige Mischung mit anderen Farben oder Tuben.

3.32: Offline-Cache auf 3.32 aktualisiert; GitHub Pages Update-Fix.

3.33: Sichtbare App-Version, HTML-Titel und Offline-Service-Worker auf 3.33 abgestimmt. In 3.32 verhinderten der alte HTML-Titel und der Versions-Check des Service Workers ein korrektes Offline-Update.

GitHub Pages: ZIP entpacken und alle 9 Dateien in das gleiche Verzeichnis hochladen; vorhandene Dateien ersetzen und Commit abwarten. Webseite oeffnen; falls „Update bereit“ erscheint, antippen und bestaetigen. Danach Atelier neu starten. Geoeffnete Projekte zur Sicherheit vorher speichern.
