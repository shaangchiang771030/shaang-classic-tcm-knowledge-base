# Cosmos Order｜Vercel Web Analytics Patch v1

這是一個最小、可直接解壓到 Repo Root 的 patch。

## 前置條件

你已在目前 repository 執行：

```powershell
npm i @vercel/analytics
```

所以 `package.json` 與 `package-lock.json` 已由 npm 依你的實際環境更新。
本 ZIP **不覆寫**這兩個檔，避免蓋掉你的實際 lockfile。

## 本 Patch 修改

### 1. `src/components/HeaderActions.astro`

加入：

```astro
---
import Analytics from '@vercel/analytics/astro';
---
...
<Analytics />
```

這個 component 已經是目前 Starlight 全站 header 的自訂元件，因此可作為單一、全域的 Analytics 載入點。

### 2. `astro.config.mjs`

移除舊的手動 script：

```text
/_vercel/insights/script.js
```

原因是現在改由官方 `@vercel/analytics/astro` component 注入。
兩套同時存在沒有必要，並可能造成重複 instrumentation。

## 不修改

- 四語 Router
- 178 篇研究文章
- About / 首頁 / Research pages
- slug / translationKey
- Astro / Starlight / Vercel adapter 版本
- `package.json` / `package-lock.json`（因 npm 已在你本機更新）

## 本機 Gate

```powershell
npx astro check
npx astro build
```

兩個都 PASS 才 commit。

## Vercel Dashboard 必做

進入該 Project：

`Analytics → Enable`

如果 Analytics 尚未 Enable，程式部署成功也不會正常收資料。

## Production QA

部署後：

1. 打開 production 網站任一頁。
2. Chrome DevTools → Network。
3. 搜尋 `view` 或 `insights`。
4. 應看到 Vercel Web Analytics 的 view request。
5. 到 Vercel Dashboard → Analytics 查看資料。

如果是 Enable Analytics 之後才開啟，請確保再有一次新 deployment。
