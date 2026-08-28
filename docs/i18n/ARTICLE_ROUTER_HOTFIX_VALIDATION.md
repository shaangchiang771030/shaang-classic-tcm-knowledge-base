# Cosmos Order｜四語文章 Router Hotfix v1

**Overall: PASS**

## Root cause

QA 的症狀其實非常一致：

- 首頁／Research／About 等 ASCII route 可以四語互切。
- 含中文 slug 的研究文章無法互切。
- 從英文／日文／簡體回繁體仍可行，因為繁體 href 不依賴 ready registry。
- 點 EN 會落到 `English translation coming soon`，表示 `isEnglishReady(basePath)` 被誤判為 `false`。

根因是：

`Astro.url.pathname` 對非 ASCII 字元保留 percent-encoding，例如：

```text
/concept/03-%E7%AC%A6%E8%99%9F...
```

但 `FOUR_LANGUAGE_READY_PATHS` 裡保存的是 Unicode canonical slug：

```text
/concept/03-符號化能量共振原則/
```

舊版 `normalizeContentPath()` 沒有先 decode，因此 exact `Set.has()` 永遠比對不到文章 route。

## Fix

只修改：

```text
src/data/i18n-status.ts
```

在 route registry 比對之前用 `decodeURI()` 將 pathname 還原為 canonical Unicode path；保留 `/` 等 reserved separators，不修改文章 slug。

## Validation

| Check | Result |
| --- | ---: |
| 四語 canonical routes | 189 |
| 4 個來源 locale path 測試 | 756 |
| 舊 normalizer failures | 712 |
| 修正後 failures | **0** |
| 修改文章正文 | 0 |
| 修改 slug | 0 |
| 修改 Router component | 0 |
| Dependency changes | 0 |

## Required local gates

```powershell
npx astro check
npx astro build
```
