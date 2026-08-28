# Cosmos Order｜四語結構頁 + About + 同篇文章 Router Patch v1

本 ZIP 是 repo-root overlay，可直接解壓到 repository root。

## 這次解決

1. 更新新版繁體 About，並建立简体／English／日本語 About。
2. 四語切換器在 178 篇文章中保持「同一篇文章 ↔ 同一篇文章」。
3. 左上主導覽會依目前語言顯示並連到同語言：
   - 繁體：首頁／研究領域／開始閱讀／關於／食療報告
   - 简体：首页／研究领域／开始阅读／关于／食疗报告
   - EN：Home／Research／Start Here／About／Food Report
   - 日文：ホーム／研究領域／はじめに／このサイトについて／食養生レポート
4. 新增完整 `/zh-cn/` 與 `/ja/` 首頁。
5. 補齊 `/en/`、`/zh-cn/`、`/ja/` 的 Research／Start Here／About／Food Report 結構頁。
6. `/`、`/research/`、`/start-here/`、`/about/`、`/food-report/` 現在都可四語互切，不再因硬組不存在的 route 而 404。

## 不修改

- 任何 178 篇研究文章正文
- 文章 slug
- translationKey
- Astro / Starlight / Node / Vercel dependency 版本
- 氣化生理重寫內容

## Apply

解壓到 Repo Root 後：

```powershell
npx astro check
npx astro build
```

兩個都 PASS 後才 commit / push。
