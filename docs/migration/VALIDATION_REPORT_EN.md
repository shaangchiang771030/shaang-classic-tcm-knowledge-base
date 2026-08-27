# Cosmos Order English Clean-Title / Reordered-Guide Validation Report

## Result

**Structural QA: PASS**

| Check | Result |
|---|---:|
| English research articles | 178 / 178 |
| `language: en` | 178 / 178 |
| unique `translationKey` | 178 / 178 |
| physical filenames without legacy numeric prefix | 178 / 178 |
| filenames ending `_英文.md` | 178 / 178 |
| frontmatter titles without numeric prefix | 178 / 178 |
| `sidebar.order == GuidePosition` | 178 / 178 |
| unique stable English slugs | 178 / 178 |
| legacy English public URLs preserved by `slug` | 178 / 178 |
| image URLs unchanged from the translated source Markdown | 178 / 178; 0 mismatch |
| bilingual `translationKey` one-to-one pairing | 178 / 178 |
| six English domain-guide article-link coverage | 178 / 178 |
| English domain hubs no longer use the “being prepared” placeholder | 6 / 6 |
| English research index updated | PASS |
| English-ready article paths in language switch | 178 / 178 |
| legacy numbered English files deletion manifest | 178 paths |

## Domain Counts
| Domain | Articles |
|---|---:|
| 時空篇 / Spacetime | 30 |
| 氣化生理篇 / Qi Transformation Physiology | 30 |
| 經方篇 / Jingfang | 22 |
| 藥物篇 / Materia Medica | 30 |
| 針灸篇 / Acupuncture | 6 |
| 扁鵲鏡經篇 / Bian Que Mirror Classic | 60 |
| **Total** | **178** |

## Architecture

- Reader-facing numbers are generated from cognitive `GuidePosition`, not from old filenames.
- Physical English filenames are numberless but retain the management suffix `_英文.md`.
- Public English routes keep the legacy numeric slug through frontmatter `slug`.
- Each English Domain Hub contains a three-line preview and an expandable full guide.
- All article references in the full English guides link directly to internal English article routes.

## Required Repo Gate

After applying both ZH and EN overlays and deleting legacy numbered files:

```powershell
npx astro check
npx astro build
```

Commit only after both commands pass.
