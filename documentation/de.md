<!-- ELUCENIA technical documentation · clearance-de-creatinina-urina-24h · de · no clinical/professional/rights approval -->

# Kreatinin-Clearance aus 24-Stunden-Urin

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/clearance-de-creatinina-urina-24h)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Urinkreatinin

`ucr`

mg/dL · Bereich: 5–500

### 24-Stunden-Urinvolumen

`vol`

mL · Bereich: 100–10000

### Serumkreatinin

`pcr`

mg/dL · Bereich: 0,2–20

### Geschlecht

`sexo`

- `F` — Weiblich
- `M` — Männlich

### Gewicht (zur Korrektur und Prüfung der Sammlung)

`peso`

kg · optional · Bereich: 20–300

### Körpergröße (zur Korrektur auf 1,73 m²)

`altura`

cm · optional · Bereich: 100–230

## Fassung der Methode

24-h-Urin-Clearance: UCr×Volumen/(PCr×1440); Indexierung 1,73/KOF Mosteller

## Dokumentierte Formel

ClCr (mL/min) = (Urinkreatinin × 24-h-Volumen in mL) ÷ (Serumkreatinin × 1440).

Korrigiert = ClCr × 1,73 ÷ Körperoberfläche (Mosteller). Ausgeschiedenes Kreatinin (mg/kg/Tag) = Urinkreatinin × Volumen (dL) ÷ Gewicht.

## Grenzen und Population

Diese Berechnung erfordert eine vollständige 24-Stunden-Urinsammlung sowie Urin- und Serumkreatinin in kompatiblen Einheiten. Das Volumen wird durch Division durch 1440 Minuten in mL/min umgerechnet. Eine unvollständige oder übermäßige Sammlung kann das Ergebnis verfälschen; KDIGO 2024 weist auf diese Fehler hin. Die Kreatinin-Clearance ist keine direkte Messung der glomerulären Filtrationsrate. Der absolute Wert in mL/min unterscheidet sich vom optional auf 1,73 m² indexierten Wert; geben Sie für diese Indexierung Körpergröße und Gewicht an und prüfen Sie, welche Einheit das Protokoll verlangt.

## Referenzen

- [Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther, 2017.](https://doi.org/10.1002/cpt.729)

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [KDIGO2024](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
