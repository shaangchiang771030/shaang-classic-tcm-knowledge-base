# Cosmos Order — WBS 1.3 Frontmatter Migration Specification

Version: v1

## 1. Purpose

Current content identity and display order rely too heavily on folders, filenames, and original numbering.

The new metadata model makes cognitive order explicit while preserving all legacy URLs and article IDs.

## 2. Required architecture fields for research articles

Target shape:

```yaml
---
title: "..."
description: "..."          # may be added progressively during SEO work

contentType: article
domain: spacetime

originalOrder: 3
guideOrder: 60

stage: methodology
level: foundation

language: zh
translationKey: spacetime-003

related: []                 # optional manual override
seoTitle: ""                # optional override
seoDescription: ""          # optional override
featured: false             # optional
---
```

## 3. Field contract

| Field | Type | Required | Meaning |
|---|---|---:|---|
| `title` | string | yes | Existing visible article title. Preserve current wording unless separately edited. |
| `description` | string | release-gate | Human/SEO summary. May be populated later; not required to complete WBS 1 migration. |
| `contentType` | enum | yes | `article`, `guide`, or future `research`. Existing 178 pages use `article`. |
| `domain` | DomainKey | yes | Stable domain ID from `src/data/domains.ts`. |
| `originalOrder` | integer | yes | Historical article identity/series number. Never changes because reading order changes. |
| `guideOrder` | integer | yes | Cognitive reading order. Use 10,20,30... to leave insertion gaps. |
| `stage` | string | yes | Cognitive stage key. |
| `level` | enum | yes | `foundation`, `advanced`, `research`. |
| `language` | enum | yes | `zh` or `en`. |
| `translationKey` | string | yes | Stable cross-language identity. |
| `related` | string[] | no | Manual related-content override. |
| `seoTitle` | string | no | Explicit SEO title override only when needed. |
| `seoDescription` | string | no | Explicit SEO description override only when needed. |
| `featured` | boolean | no | Homepage/research featured flag; default false. |

## 4. Level semantics

### `foundation` — 基礎

Establishes required concepts/models for the domain.  
It does **not** mean simplified popularization.

### `advanced` — 進階

Assumes one or more prior models and combines multiple structures or inference steps.

### `research` — 研究

Involves reconstruction, counterexamples, model comparison, validation, unresolved research questions, or higher-order synthesis.

## 5. Ordering semantics

### `originalOrder`

Historical identity only.

Example:

```yaml
originalOrder: 20
```

If article 20 becomes the twelfth item in the new reading path, `originalOrder` remains 20.

### `guideOrder`

Controls:

- Domain Hub reading list;
- domain-only Sidebar;
- Previous / Next;
- default cognitive sequence.

Values use increments of 10:

```text
10, 20, 30, 40...
```

If an article must later be inserted between 20 and 30, use 25.

## 6. Stage and level are independent

`stage` answers:

> Where does this article sit in the cognitive model?

`level` answers:

> How much prerequisite reasoning does this article require?

Do not infer one mechanically from the other.

## 7. URL rules

Frontmatter migration must not rename the file, source directory, or live route.

Do not add a manual `canonical` field to every Markdown file. Canonicals should be generated centrally from the actual route and `site` configuration.

`CurrentURL` and `CurrentSlug` are recorded in `Guide_Order_Master.csv` for migration/audit use and do not need to be copied into frontmatter.

## 8. Translation rules

Translation identity is stable:

```yaml
translationKey: bianque-mirror-046
```

Chinese and English pages may have different slugs and titles but must share the same `translationKey`.

## 9. Migration sequence

1. Freeze `Guide_Order_Master.csv`.
2. Add new metadata fields to the 178 current research articles.
3. Do **not** rename files in the same commit.
4. Run schema validation.
5. Run `npm run build`.
6. Compare current URL inventory against the WBS 0 baseline.
7. Only after URL parity passes should Sidebar/Hub UI consume the new metadata.

## 10. Acceptance gates

The metadata migration is accepted only when:

- 178/178 research articles have a valid `domain`;
- 178/178 have unique `translationKey`;
- each domain has unique `originalOrder`;
- each domain has unique `guideOrder`;
- every `stage` is recognized by the domain guide;
- every `level` is one of the three allowed values;
- build passes;
- all 178 legacy live URLs remain reachable.
