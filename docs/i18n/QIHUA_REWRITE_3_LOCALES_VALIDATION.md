# 氣化生理篇重寫｜英文・簡體・日文 Final Validation

**Overall: PASS**

| QA | English | 简体中文 | 日本語 |
| --- | ---: | ---: | ---: |
| 研究文章 | 30/30 | 30/30 | 30/30 |
| `language` 正確 | 30/30 | 30/30 | 30/30 |
| postfix 正確 | 30/30 | 30/30 | 30/30 |
| Unique `translationKey` | 30/30 | 30/30 | 30/30 |
| 與繁體 master 一對一 | PASS | PASS | PASS |
| Unique slug | 30/30 | 30/30 | 30/30 |
| 正確 locale prefix | 30/30 | 30/30 | 30/30 |
| 空白正文 | 0 | 0 | 0 |
| Body 內殘留數字 H1 | 0 | 0 | 0 |
| 生命之花圖片引用 | 1 | 1 | 1 |

## Translation policy

- 以已部署的 30 篇繁體中文重寫稿為唯一正文母本。
- 既有 localized `title`、`slug`、`translationKey`、`originalOrder`、`guideOrder` 等 identity metadata 沿用既有四語架構。
- English 與日本語正文重新依新繁體正文完整翻譯，不沿用舊版正文。
- 简体中文由新繁體正文一對一轉換，不改內容結構。
- Markdown heading、table、article order 與內部結構保留。
- `六經開闔樞與審證大關鍵` 三語版皆引用 `/images/qihua_physiology/生命之花.png`。
- 圖片與使用者上傳 PNG byte-identical。
- 本包不修改繁體中文文章、About、四語 Router、Astro/Starlight dependency 或 config。

## Repo paths

- `src/content/docs/en/qihua_physiology_concept/`
- `src/content/docs/zh-cn/qihua_physiology_concept/`
- `src/content/docs/ja/qihua_physiology_concept/`
- `public/images/qihua_physiology/生命之花.png`

## Required local gates

```powershell
npx astro check
npx astro build
```
