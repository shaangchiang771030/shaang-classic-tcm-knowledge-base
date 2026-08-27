# Cosmos Order — Four-Language Router Validation

**Status: PASS**

- UI labels: `繁體/简体/EN/日文`
- Published research articles represented: **178**
- Shared research landing / hub routes: **7**
- Four-language-ready canonical routes: **185**
- Deterministic source→target language transitions checked: **2,960**
- Article route equivalence errors: **0**
- Stable article slugs changed: **0**
- Article/content files modified: **0**
- Dependency/version changes: **0**
- `astro.config.mjs` JavaScript syntax check: **PASS**

## Router behavior

For the 178 research articles and 7 research landing/hub routes:

- Traditional Chinese: canonical root route
- Simplified Chinese: `/zh-cn` + canonical route
- English: `/en` + canonical route
- Japanese: `/ja` + canonical route

For structural pages that do not yet have Simplified Chinese or Japanese counterparts, those two labels remain visible but disabled, preventing 404s and avoiding misleading navigation.

The existing English `coming-soon` fallback remains supported for non-translated English pages.

## Required local gates

After overlaying the patch into the repository root:

```powershell
npx astro check
npx astro build
```

Do not commit unless both pass.
