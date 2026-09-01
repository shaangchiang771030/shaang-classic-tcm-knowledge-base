# 五顏六色解內經｜第二批 Review 通過文章｜Validation

**Overall: PASS**

| Check | Result |
|---|---:|
| 第二批 Review 檔案 | 18 |
| 第二批新增文章 | 17 |
| 覆蓋更新既有文章 | 1（六元正紀大論篇第七十一） |
| 最終共用繁體文章 | 25 |
| 《素問》 | 19 |
| 《靈樞》 | 6 |
| Hub 文章 links | 25 / 25 |
| 27 模型 links | 27 / 27 |
| Color swatch PNG | 25 |
| 舊四象色 Hex 殘留 | 0 |
| CSS 色碼不一致 | 0 |
| 简体首頁入口 | PASS |
| 简体 Research 入口 | PASS |
| 简体文章副本 | 0（刻意共用繁體文章） |
| QA errors | 0 |

## 四象底層色碼新標準

- 陰中之陽／春／木／溫 → `#2E7D32`
- 陽中之陽／夏／火／熱 → `#C62828`
- 陽中之陰／秋／金／涼 → `#B8860B`
- 陰中之陰／冬／水／寒 → `#1565C0`

舊的 `#F57C00 / #43A047 / #1B5E20 / #7B1FA2` 已從本模組最終文章與 Hub 清除。

## 明示使用「四象」模型的已完成篇章

- 《素問·四氣調神大論篇第二》
- 《素問·生氣通天論篇第三》
- 《素問·刺腰痛篇第四十一》
- 《素問·五常政大論篇第七十》
- 《素問·六元正紀大論篇第七十一》
- 《素問·至真要大論篇第七十四》

## Formatter / source contract

第二批 18 個檔案全部以使用者上傳的 Review 通過 Markdown 為正文來源。
只進行：

- 簡體字形 → 繁體字形；
- H1 正規化為《內經》原篇名；
- Cosmos Order frontmatter；
- 實體檔名去工程後綴；
- 依本次底層規格統一四象相關 CSS 色碼。

不重新撰寫專家 Review 後正文。

## Runtime 色碼機制

目前文章本身的 `<style>` 中**直接寫 Hex**，不是 runtime 去讀配置表。

本包新增：

`data/architecture/WUYAN_COLOR_STANDARD_v2.csv`

作為之後批次生成與 QA 的唯一規格表，但本輪沒有冒險重構現有 Astro/MDX runtime。

## Local gates

```powershell
npx astro check
npx astro build
```
