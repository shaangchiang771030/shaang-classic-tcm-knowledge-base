# Cosmos Order｜Vercel Web Analytics Patch Validation

**Static Patch QA: PASS**

| Check | Result |
| --- | ---: |
| `@vercel/analytics/astro` import | PASS |
| `<Analytics />` exactly once | PASS |
| 舊 `/_vercel/insights/script.js` removed | PASS |
| 四語 Header navigation preserved | PASS |
| 四語 Starlight locale config preserved | PASS |
| Article/content files changed | 0 |
| Router files changed | 0 |
| Dependency versions overwritten by ZIP | 0 |

## Integration choice

本 Patch 採用官方 Astro component：

```astro
import Analytics from '@vercel/analytics/astro';
<Analytics />
```

並移除舊的手動 analytics script，保留單一 instrumentation path。

## Local repository gates

因真正安裝好的 `@vercel/analytics`、`package.json`、`package-lock.json` 位於你的本機 repo，
最終仍須：

```powershell
npx astro check
npx astro build
```

兩者都 PASS 後才 commit。
