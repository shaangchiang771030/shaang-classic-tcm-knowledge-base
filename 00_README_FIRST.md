# Cosmos Order｜五顏六色解內經｜第二批 + 四象底層色碼修正 v1

Repo Root Overlay。

本包包含：
- 第二批 18 個 Review 通過來源（17 新增 + 1 覆蓋更新《六元正紀大論篇第七十一》）；
- 前一批 8 篇的四象底層色碼同步修正；
- 最終 25 篇共用繁體文章；
- Hub 新順序：介紹 → 素問篇 → 靈樞篇 → 顏色色塊 → 27 模型地圖；
- 顏色圖例改用實際 PNG 色塊，避免舊版 MDX parser 的 inline-style 問題；
- 简体首頁與 `/zh-cn/research/` 增加「五颜六色解内经」入口；
- 简体與繁體暫時共用同一套 root 文章，不建立 zh-cn article duplicate；
- `data/architecture/WUYAN_COLOR_STANDARD_v2.csv` 作為色碼 QA 規格。

四象新標準：
- 春／木／溫／陰中之陽 = #2E7D32
- 夏／火／熱／陽中之陽 = #C62828
- 秋／金／涼／陽中之陰 = #B8860B
- 冬／水／寒／陰中之陰 = #1565C0

解壓後：

```powershell
npx astro check
npx astro build
```
