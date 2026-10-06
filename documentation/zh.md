<!-- ELUCENIA technical documentation · clearance-de-creatinina-urina-24h · zh · no clinical/professional/rights approval -->

# 24 h 尿肌酐清除率

[条件、来源与许可](https://elucenia.org/zh/tools/clearance-de-creatinina-urina-24h)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 尿肌酐

`ucr`

mg/dL · 范围: 5–500

### 24 h 尿量

`vol`

mL · 范围: 100–10000

### 血清肌酐

`pcr`

mg/dL · 范围: 0.2–20

### 性别

`sexo`

- `F` — 女性
- `M` — 男性

### 体重（用于校正及核查采样）

`peso`

kg · 选填 · 范围: 20–300

### 身高（用于校正至 1.73 m²）

`altura`

cm · 选填 · 范围: 100–230

## 方法版本

24 h尿清除率：UCr×尿量/(PCr×1440)；标准化1.73/Mosteller体表面积

## 已记录的公式

ClCr (mL/min) = (尿肌酐 × 24 h尿量（mL）) ÷ (血清肌酐 × 1440).

校正值 = ClCr × 1.73 ÷ 体表面积 (Mosteller). 肌酐排泄量（mg/kg/天） = 尿肌酐 × 尿量（dL）÷体重.

## 限制与适用人群

此计算要求完整收集24小时尿液，并以相容单位测定尿肌酐和血清肌酐。尿量除以1440分钟后换算为mL/min。收集不足或过量均可能影响结果；KDIGO 2024强调了这些误差。肌酐清除率并非肾小球滤过率的直接测量值。以mL/min表示的绝对值不同于可选的按1.73 m²体表面积标化的值；标化时请输入身高和体重，并核对方案要求的单位。

## 参考文献

- [Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther, 2017.](https://doi.org/10.1002/cpt.729)

- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int, 2024.](https://doi.org/10.1016/j.kint.2023.10.018)

- [KDIGO2024](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

KDIGO G1范围：正常或高功能

| 结果详情 | |
| --- | --- |
| 测得清除率（未校正） | 100 mL/min |
| 校正为1,73 m²（SC 1.82 m²） | 95 mL/min/1,73 m² |
| 排泄的肌酐 | 20.6 mg/kg/天（预期 20 至 25） |


### 2

KDIGO G3a范围：轻度至中度降低的功能

| 结果详情 | |
| --- | --- |
| 测得清除率（未校正） | 56 mL/min |


### 3

KDIGO G4范围：肾功能严重降低

| 结果详情 | |
| --- | --- |
| 测得清除率（未校正） | 21 mL/min |

