<!-- ELUCENIA technical documentation · clearance-de-creatinina-urina-24h · ja · no clinical/professional/rights approval -->

# 24 h 蓄尿によるクレアチニンクリアランス

[条件・出典・許諾](https://elucenia.org/ja/tools/clearance-de-creatinina-urina-24h)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 尿中クレアチニン

`ucr`

mg/dL · 範囲: 5–500

### 24 h 尿量

`vol`

mL · 範囲: 100–10000

### 血清クレアチニン

`pcr`

mg/dL · 範囲: 0.2–20

### 性別

`sexo`

- `F` — 女性
- `M` — 男性

### 体重（補正と採取の確認用）

`peso`

kg · 任意 · 範囲: 20–300

### 身長（1.73 m²に補正するため）

`altura`

cm · 任意 · 範囲: 100–230

## 方法の版

24 h尿クリアランス：UCr×尿量/(PCr×1440)；1.73/Mosteller体表面積で補正

## 記載された計算式

ClCr (mL/min) = (尿中クレアチニン × 24 h尿量（mL）) ÷ (血清クレアチニン × 1440).

補正値 = ClCr × 1.73 ÷ 体表面積 (Mosteller). クレアチニン排泄量（mg/kg/日） = 尿中クレアチニン × 尿量（dL）÷体重.

## 限界・対象集団

この計算には完全な24時間蓄尿と、互換性のある単位による尿中・血清クレアチニン値が必要です。尿量を1440分で割り、mL/minに換算します。採尿不足や過剰な採尿は結果を歪めることがあり、KDIGO 2024もこれらの誤差を指摘しています。クレアチニンクリアランスは糸球体濾過量の直接測定ではありません。mL/minの絶対値と、任意で1.73 m²に補正した値は異なります。補正には身長・体重を入力し、プロトコルが求める単位を確認してください。

## 参考文献

- [Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther, 2017.](https://doi.org/10.1002/cpt.729)

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [KDIGO2024](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 記録された結果

以下の情報は、合成例に対する手法の出力を保持したものです。独立した臨床的検証を示すものではありません。

### 1

KDIGO G1範囲：正常または高値の機能

| 結果の詳細 | |
| --- | --- |
| 測定クリアランス（補正なし） | 100 mL/min |
| 1,73 m²に補正（SC 1.82 m²） | 95 mL/min/1,73 m² |
| 排泄されたクレアチニン | 20.6 mg/kg/日（期待値 20 〜 25） |


### 2

KDIGO G3a範囲：軽度から中等度低下した機能

| 結果の詳細 | |
| --- | --- |
| 測定クリアランス（補正なし） | 56 mL/min |


### 3

KDIGO G4範囲：腎機能が重度に低下

| 結果の詳細 | |
| --- | --- |
| 測定クリアランス（補正なし） | 21 mL/min |

