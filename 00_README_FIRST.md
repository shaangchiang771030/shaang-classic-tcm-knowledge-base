# Cosmos Order｜五顏六色解內經｜第三批 v1

Repo Root Overlay。

## 內容

- 第三批 7 篇 Review 通過《靈樞》文章，已套用與前兩批相同 Formatter；
- 最終子模組由 25 篇增至 **32 篇**：
  - 素問 19
  - 靈樞 13
- 更新 Hub 的《靈樞》目錄與篇數；
- 重新排列 13 篇《靈樞》的 sidebar / guide order；
- 保留上一輪已修好的 27 模型 canonical links；
- 不新增简体文章副本，繼續簡繁共用同一套文章；
- 不修改 Astro / Starlight / dependencies。

## 第三批新文章

- 邪氣藏府病形第四.md
- 根結第五.md
- 本神第八.md
- 終始第九.md
- 經脈第十.md
- 順氣一日分為四時第四十四.md
- 本藏第四十七.md

## 四象色碼

沿用已確立底層標準：

- 春／木／溫 = `#2E7D32`
- 夏／火／熱 = `#C62828`
- 秋／金／涼 = `#B8860B`
- 冬／水／寒 = `#1565C0`

本批中《經脈第十》來源仍有舊的 `c-warm=#7B1FA2` 與 `c-cool=#43A047`，
本部署版已依底層規格修正為 `#2E7D32` 與 `#B8860B`。

## Deploy gate

```powershell
npx astro check
npx astro build
```
