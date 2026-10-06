<!-- ELUCENIA technical documentation · clearance-de-creatinina-urina-24h · es · no clinical/professional/rights approval -->

# Aclaramiento de creatinina en orina de 24 h

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/clearance-de-creatinina-urina-24h)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Creatinina urinaria

`ucr`

mg/dL · intervalo: 5–500

### Volumen urinario de 24 h

`vol`

mL · intervalo: 100–10000

### Creatinina sérica

`pcr`

mg/dL · intervalo: 0,2–20

### Sexo

`sexo`

- `F` — Femenino
- `M` — Masculino

### Peso (para corrección y comprobación de la recogida)

`peso`

kg · opcional · intervalo: 20–300

### Estatura (para corrección a 1,73 m²)

`altura`

cm · opcional · intervalo: 100–230

## Edición del método

Aclaramiento urinario 24 h: UCr×volumen/(PCr×1440); indexación 1,73/SC Mosteller

## Fórmula documentada

ClCr (mL/min) = (creatinina urinaria × volumen de 24 h en mL) ÷ (creatinina sérica × 1440).

Corregido = ClCr × 1,73 ÷ superficie corporal (Mosteller). Creatinina excretada (mg/kg/día) = creatinina urinaria × volumen (dL) ÷ peso.

## Límites y población

Este cálculo exige una recogida completa de orina de 24 horas y creatinina urinaria y sérica en unidades compatibles. El volumen se convierte a mL/min dividiéndolo por 1440 minutos. Una recogida incompleta o excesiva puede distorsionar el resultado; KDIGO 2024 destaca estos errores. El aclaramiento de creatinina no es una medición directa de la tasa de filtración glomerular. El valor absoluto en mL/min es distinto del valor opcional indexado a 1,73 m²; introduzca la talla y el peso para esa indexación y compruebe qué unidad exige el protocolo.

## Referencias

- [Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther, 2017.](https://doi.org/10.1002/cpt.729)

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [KDIGO2024](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Rango G1 de KDIGO: función normal o alta

| Detalles del resultado | |
| --- | --- |
| Clearance medido (sin corrección) | 100 mL/min |
| Corregido para 1,73 m² (SC 1,82 m²) | 95 mL/min/1,73 m² |
| Creatinina excretada | 20,6 mg/kg/día (esperado 20 a 25) |


### 2

Rango G3a de KDIGO: función levemente a moderadamente disminuida

| Detalles del resultado | |
| --- | --- |
| Clearance medido (sin corrección) | 56 mL/min |


### 3

Rango G4 de KDIGO: función gravemente disminuida

| Detalles del resultado | |
| --- | --- |
| Clearance medido (sin corrección) | 21 mL/min |

