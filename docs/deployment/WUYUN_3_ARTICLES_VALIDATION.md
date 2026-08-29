# 現代氣象 × 五運六氣｜3 Articles × 4 Locales Validation

**Overall: PASS**

| Check | Result |
| --- | ---: |
| Article Markdown | 12 / 12 |
| 繁體 | 3 / 3 |
| 简体 | 3 / 3 |
| English | 3 / 3 |
| 日本語 | 3 / 3 |
| translationKey groups | 3 / 3 |
| Each translationKey has 4 locales | PASS |
| Download links resolve inside package | PASS |
| Excel assets | 12 / 12 |
| Same article's 4 Excel copies are byte-identical | PASS |
| Four-language Hub pages | 4 / 4 |
| Router-ready routes added | 4 / 4 |
| Weather Hub removed from English-only fallback | PASS |
| EN / 简体 / 日本語 Research landing cards | PASS |

## Excel split

The uploaded workbook was split into three independent workbooks:

1. Article 1: **100 representative cases**
2. Article 2: **120 representative cases**
3. Article 3: **176 representative cases**

Each workbook keeps the case data in Chinese. For website download UX, each workbook is copied into four locale folders with a locale-appropriate filename.

## Deployment gate

After overlaying the ZIP into repo root:

```powershell
npx astro check
npx astro build
```
