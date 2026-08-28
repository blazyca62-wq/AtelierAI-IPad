AtelierAI iPad 1.17.5 PC

Wichtige Korrektur der Aquarell-Mischvorschläge.

Gefundener Grundfehler:
Helle Aquarell-Zielfarben wurden bisher nur durch Pigmentmischungen angenähert.
Dadurch versuchte der Algorithmus z.B. einen hellen rosig-beigen Hautton durch
viel Neapelgelb plus Cyan/Türkis und Magenta zu entsättigen. Mathematisch konnte
das einen mittelmäßigen Treffer ergeben, malerisch war es falsch.

Neu:
- Aquarell wird als Pigmentmischung PLUS Verdünnung auf hellem Aquarellpapier berechnet.
- Helle Farben entstehen primär durch Wasser/Papier.
- Einzelfarbe wird zuerst geprüft.
- Danach Zweiermischungen.
- Ein drittes Pigment nur, wenn es die Zweierlösung deutlich verbessert.
- Farbton-, Sättigungs- und Helligkeitsabweichungen werden zusätzlich geprüft.
- Bei rosigen Hauttönen werden unnötige Cyan-/Türkis-/Grün-Gegenmischungen stark abgewertet.
- Jeder Vorschlag zeigt jetzt eine ungefähre „Farbwirkung“/Verdünnung in Prozent.
- Horadam und Akademie können weiterhin gemeinsam verwendet werden.
- Nur die als vorhanden ausgewählten Farben werden benutzt.
