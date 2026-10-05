<!-- ELUCENIA technical documentation · clearance-de-creatinina-urina-24h · en · no clinical/professional/rights approval -->

# Creatinine clearance from 24-hour urine

[conditions, sources and permissions](https://elucenia.org/en/tools/clearance-de-creatinina-urina-24h)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Urine creatinine

`ucr`

mg/dL · range: 5–500

### 24-hour urine volume

`vol`

mL · range: 100–10000

### Serum creatinine

`pcr`

mg/dL · range: 0.2–20

### Sex

`sexo`

- `F` — Female
- `M` — Male

### Weight (for correction and collection check)

`peso`

kg · optional · range: 20–300

### Height (for correction to 1.73 m²)

`altura`

cm · optional · range: 100–230

## Method edition

24 h urinary clearance: UCr×volume/(PCr×1440); indexing 1.73/Mosteller BSA

## Documented formula

ClCr (mL/min) = (urinary creatinine × 24 h volume in mL) ÷ (serum creatinine × 1440).

Corrected = ClCr × 1.73 ÷ body surface area (Mosteller). Excreted creatinine (mg/kg/day) = urinary creatinine × volume (dL) ÷ weight.

## Limits and population

This calculation requires a complete 24-hour urine collection and urinary and serum creatinine in compatible units. The volume is converted to mL/min by dividing by 1440 minutes. Incomplete or excessive collection can distort the result; KDIGO 2024 highlights these errors. Creatinine clearance is not a direct measurement of glomerular filtration rate. The absolute value in mL/min differs from the optional value indexed to 1.73 m²; enter height and weight for this indexing and check which unit the protocol requires.

## References

- [Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther, 2017.](https://doi.org/10.1002/cpt.729)

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [KDIGO2024](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
