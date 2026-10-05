<!-- ELUCENIA technical documentation · clearance-de-creatinina-urina-24h · fr · no clinical/professional/rights approval -->

# Clairance de la créatinine sur urines de 24 h

[conditions, sources et autorisations](https://elucenia.org/fr/outils/clearance-de-creatinina-urina-24h)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Créatinine urinaire

`ucr`

mg/dL · intervalle: 5–500

### Volume urinaire des 24 h

`vol`

mL · intervalle: 100–10000

### Créatinine sérique

`pcr`

mg/dL · intervalle: 0,2–20

### Sexe

`sexo`

- `F` — Féminin
- `M` — Masculin

### Poids (pour correction et contrôle du recueil)

`peso`

kg · facultatif · intervalle: 20–300

### Taille (pour correction à 1,73 m²)

`altura`

cm · facultatif · intervalle: 100–230

## Édition de la méthode

Clairance urinaire 24 h : UCr×volume/(PCr×1440) ; indexation 1,73/SC Mosteller

## Formule documentée

ClCr (mL/min) = (créatinine urinaire × volume de 24 h en mL) ÷ (créatinine sérique × 1440).

Corrigé = ClCr × 1,73 ÷ surface corporelle (Mosteller). Créatinine excrétée (mg/kg/jour) = créatinine urinaire × volume (dL) ÷ poids.

## Limites et population

Ce calcul exige un recueil complet des urines de 24 heures et de la créatinine urinaire et sérique exprimée dans des unités compatibles. Le volume est converti en mL/min en le divisant par 1440 minutes. Un recueil incomplet ou excessif peut fausser le résultat ; KDIGO 2024 souligne ces erreurs. La clairance de la créatinine n’est pas une mesure directe du débit de filtration glomérulaire. La valeur absolue en mL/min diffère de la valeur facultative indexée à 1,73 m² ; renseignez la taille et le poids pour cette indexation et vérifiez l’unité exigée par le protocole.

## Références

- [Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther, 2017.](https://doi.org/10.1002/cpt.729)

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [KDIGO2024](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
