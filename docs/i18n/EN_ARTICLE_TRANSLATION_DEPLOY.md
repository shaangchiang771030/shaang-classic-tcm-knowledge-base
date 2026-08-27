# Cosmos Order｜178 篇英文研究文章部署說明

## Repo 放置位置

本壓縮包是 **Repo Root Overlay**。解壓到 repository 根目錄後，主要新增／更新：

```text
src/content/docs/en/
  concept/                         30
  qihua_physiology_concept/        30
  jingfang_concept/                22
  drug_concept/                    30
  acupuncture_concept/              6
  Mirror_Classic _of_Bian_Que/     60

src/data/i18n-status.ts
data/architecture/English_Route_Plan.csv
docs/i18n/EN_TRANSLATION_VALIDATION_REPORT.md
docs/i18n/EN_TRANSLATION_VALIDATION_REPORT.json
```

英文檔案保留中文 basename，並以 `_英文.md` 作為 postfix，方便人工管理；公開 English slug 則不含 `_英文`。

例如：

```text
檔案：
src/content/docs/en/concept/01-第一性原理的經典萃取_英文.md

公開路徑：
/en/concept/01-第一性原理的經典萃取/
```

圖片路徑沿用中文文章，本輪不搬圖、不改圖名。

## 最短部署流程

從乾淨的 `main` 開始：

```powershell
git switch main
git pull origin main
git switch -c wbs10-english-178
```

將 ZIP **直接解壓到 repo root**。

然後：

```powershell
npx astro check
npx astro build
```

兩者都 PASS 後：

```powershell
git add src/content/docs/en src/data/i18n-status.ts data/architecture/English_Route_Plan.csv docs/i18n
git commit -m "Add English translations for 178 research articles"
git push -u origin wbs10-english-178
```

建立 PR：

```text
base: main
compare: wbs10-english-178
```

Vercel Preview 建議抽查：首頁、`/en/`、六大領域各至少一篇文章，並逐一測試 `中文 | EN` 雙向切換。

## 停止條件

若 `astro check` 或 `astro build` 任一失敗，不要 commit。先處理錯誤後再進 Git。
