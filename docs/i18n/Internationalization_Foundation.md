# WBS 10 — Internationalization Foundation

## Frozen routing

- Chinese: `/...`
- English: `/en/...`

## Filename policy

Translated Markdown **may keep the same Chinese filename** as its source article. This makes human maintenance and source pairing easy.

Example:

```text
src/content/docs/concept/03-符號化能量共振原則.md
src/content/docs/en/concept/03-符號化能量共振原則.md
```

Identity is governed by `translationKey`, not by translating filenames.

## What is live now

- Starlight `root` Chinese locale and `en` English locale.
- Header `中文 | EN` switcher.
- English Home / Research / Start Here / About / Food Report routes.
- English hub routes for all current/planned domains.
- A single `/en/coming-soon/` fallback for untranslated article links.
- `English_Route_Plan.csv` reserves a future `/en` route for each of the 178 articles without creating 178 thin placeholder pages.

## Why no 178 placeholders

Thin duplicate/placeholder pages would be poor for readers and SEO. English article routes are created only when substantive translations are ready.
