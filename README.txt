AtelierAI iPad 1.12

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
