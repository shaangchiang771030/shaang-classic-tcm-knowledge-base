# 五顏六色解內經｜繁體第一批 Final Validation

**Overall: PASS**

| Check | Result |
|---|---:|
| 繁體文章 | 8 / 8 |
| 《素問》篇次 | 9 → 10 → 22 → 32 → 38 → 42 → 56 → 71 |
| 正確目標篇次 | PASS |
| 原篇名實體檔名 | PASS |
| Unique translationKey | 8 / 8 |
| Unique slug | 8 / 8 |
| 27 模型 clickable links | 27 / 27 |
| 8 篇目錄 links | 8 / 8 |
| Homepage「研究領域」卡片數 | 10 |
| Homepage 新卡在 Research Grid 中的位置 | 10 / 10 |
| `/research/` 卡片數 | 10 |
| `/research/` 新卡位置 | 10 / 10 |
| 3 欄視覺位置 | **第4列、第1欄 (4,1)** |
| QA errors | 0 |

## Content architecture

採單一 Hub：
`src/content/docs/research/wuyan-liuse-neijing/index.mdx`

Hub 集中：
1. 領域介紹
2. 顏色碼舉例
3. 27 模型「模型家族—尺度」 clickable map
4. 目前 8 篇文章目錄

文章正文則各自獨立，實體檔名只保留《內經》原篇名。

## Scope

本包只發布繁體，因此不修改四語 Router ready registry，也不建立 EN／简体／日本語 placeholder。

## Required local gates

```powershell
npx astro check
npx astro build
```
