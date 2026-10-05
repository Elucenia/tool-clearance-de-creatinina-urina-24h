<!-- ELUCENIA technical documentation · clearance-de-creatinina-urina-24h · pt-BR · no clinical/professional/rights approval -->

# Clearance de creatinina em urina de 24 h

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/clearance-de-creatinina-urina-24h)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Creatinina urinária

`ucr`

mg/dL · intervalo: 5–500

### Volume urinário de 24 h

`vol`

mL · intervalo: 100–10000

### Creatinina sérica

`pcr`

mg/dL · intervalo: 0,2–20

### Sexo

`sexo`

- `F` — Feminino
- `M` — Masculino

### Peso (para correção e checagem da coleta)

`peso`

kg · opcional · intervalo: 20–300

### Altura (para correção por 1,73 m²)

`altura`

cm · opcional · intervalo: 100–230

## Edição do método

Clearance urinário 24 h:UCr×volume/(PCr×1440); indexação 1,73/SCMosteller

## Fórmula documentada

ClCr (mL/min) = (creatinina urinária × volume de 24 h em mL) ÷ (creatinina sérica × 1.440).

Corrigido = ClCr × 1,73 ÷ superfície corporal (Mosteller). Creatinina excretada (mg/kg/dia) = creatinina urinária × volume (dL) ÷ peso.

## Limites e população

Esta conta exige coleta completa de urina de 24 horas e creatinina urinária e sérica em unidades compatíveis. O volume é convertido para mL/min dividindo por 1440 minutos. Coleta incompleta ou excessiva pode distorcer o resultado; a KDIGO 2024 destaca esses erros. Clearance de creatinina não é uma medida direta da taxa de filtração glomerular. O valor absoluto em mL/min é distinto do valor opcional indexado para 1,73 m²; informe altura e peso para essa indexação e confira qual unidade o protocolo exige.

## Referências

- [Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther, 2017.](https://doi.org/10.1002/cpt.729)

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [KDIGO2024](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
