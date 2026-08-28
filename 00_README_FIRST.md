# Cosmos Order｜氣化生理篇重寫 Repo Overlay v1

本 ZIP 直接解壓到 repository root。

## 更新內容

- `src/content/docs/qihua_physiology_concept/`：30 篇繁體中文重寫文章
- `src/content/docs/about/index.mdx`：新版 About
- `public/images/qihua_physiology/生命之花.png`：生命之花圖片
- `docs/migration/QIHUA_REWRITE_FILE_MAP.csv`：30 篇 mapping
- `docs/migration/QIHUA_REWRITE_VALIDATION.md`：QA

## 不變項

- 30 篇既有文章標題不變
- `translationKey` 不變
- `slug` 不變，因此既有公開 URL 不變
- Markdown 實體檔名維持無閱讀序號
- 本包只更新繁體中文；英文／簡體／日文內容不在本包內

## 圖片位置

`public/images/qihua_physiology/生命之花.png`

文章引用：

`/images/qihua_physiology/生命之花.png`

圖片插入：

`src/content/docs/qihua_physiology_concept/六經開闔樞與審證大關鍵.md`

這篇既有 `originalOrder=29`，但 `guideOrder=230`，即目前讀者閱讀順序第 23 位。本次保留既有 identity 與 URL。

## 本機 Gate

```powershell
npx astro check
npx astro build
```

兩個都 PASS 才 commit / push。
