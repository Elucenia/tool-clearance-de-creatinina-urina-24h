<!-- ELUCENIA technical documentation · clearance-de-creatinina-urina-24h · it · no clinical/professional/rights approval -->

# Clearance della creatinina nelle urine delle 24 ore

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/clearance-de-creatinina-urina-24h)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Creatinina urinaria

`ucr`

mg/dL · intervallo: 5–500

### Volume urinario delle 24 h

`vol`

mL · intervallo: 100–10000

### Creatinina sierica

`pcr`

mg/dL · intervallo: 0,2–20

### Sesso

`sexo`

- `F` — Femminile
- `M` — Maschile

### Peso (per correzione e verifica della raccolta)

`peso`

kg · facoltativo · intervallo: 20–300

### Altezza (per correzione a 1,73 m²)

`altura`

cm · facoltativo · intervallo: 100–230

## Edizione del metodo

Clearance urinaria 24 h: UCr×volume/(PCr×1440); indicizzazione 1,73/SC Mosteller

## Formula documentata

ClCr (mL/min) = (creatinina urinaria × volume di 24 h in mL) ÷ (creatinina sierica × 1440).

Corretto = ClCr × 1,73 ÷ superficie corporea (Mosteller). Creatinina escreta (mg/kg/giorno) = creatinina urinaria × volume (dL) ÷ peso.

## Limiti e popolazione

Questo calcolo richiede una raccolta completa delle urine delle 24 ore e creatinina urinaria e sierica in unità compatibili. Il volume viene convertito in mL/min dividendolo per 1440 minuti. Una raccolta incompleta o eccessiva può alterare il risultato; KDIGO 2024 sottolinea questi errori. La clearance della creatinina non è una misura diretta della velocità di filtrazione glomerulare. Il valore assoluto in mL/min è distinto dal valore facoltativo indicizzato a 1,73 m²; inserire altezza e peso per questa indicizzazione e verificare quale unità richiede il protocollo.

## Riferimenti

- [Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther, 2017.](https://doi.org/10.1002/cpt.729)

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [KDIGO2024](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
