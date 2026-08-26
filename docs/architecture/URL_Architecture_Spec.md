# Cosmos Order — WBS 1.2 URL Architecture Specification

Version: v1  
Baseline: `pre-redesign-v1`  
Production domain: `https://cosmosorder.org`

## 1. Objective

The redesign must separate four concepts that were historically coupled:

1. stable domain identity;
2. source-directory name;
3. public article URL;
4. cognitive reading order.

The redesign must not create a mass URL migration merely to make paths look cleaner.

## 2. Frozen rules

### Rule 1 — Preserve all 178 existing research article URLs

WBS 0 established that all 178 research articles currently have live URLs.  
During the redesign, their public URLs are frozen.

**Do not rename source folders or article slugs as part of WBS 1–3.**

### Rule 2 — Introduce a clean hub namespace

All research-domain landing pages use:

```text
/research/<domain-slug>/
```

Examples:

```text
/research/spacetime/
/research/qihua-physiology/
/research/jingfang/
/research/materia-medica/
/research/acupuncture/
/research/bianque-mirror/
```

The research-domain index uses:

```text
/research/
```

### Rule 3 — Existing domains keep legacy article bases

The six existing domains keep their current article URL bases:

| Domain | Hub | Existing article base |
|---|---|---|
| 時空篇 | `/research/spacetime/` | `/concept/` |
| 氣化生理篇 | `/research/qihua-physiology/` | `/qihua_physiology_concept/` |
| 經方篇 | `/research/jingfang/` | `/jingfang_concept/` |
| 藥物篇 | `/research/materia-medica/` | `/drug_concept/` |
| 針灸篇 | `/research/acupuncture/` | `/acupuncture_concept/` |
| 扁鵲鏡經篇 | `/research/bianque-mirror/` | `/mirror_classic-_of_bian_que/` |

A clean hub path and a legacy article path are allowed to coexist.

### Rule 4 — New domains use hub-child article routes

New first-class domains should place future articles beneath their hub:

```text
/research/weather-wuyun-liuqi/<article-slug>/
/research/ganzhi-food-therapy/<article-slug>/
/research/guilin-neijing/<article-slug>/
```

This avoids introducing new legacy-style top-level folders.

### Rule 5 — Chinese remains at the root locale

Chinese:

```text
https://cosmosorder.org/...
```

English:

```text
https://cosmosorder.org/en/...
```

Do not migrate current Chinese URLs into `/zh/`.

### Rule 6 — Translation pairing uses `translationKey`, not matching slugs

Chinese and English article slugs may differ.  
Their identity is linked by stable metadata:

```yaml
translationKey: spacetime-003
```

### Rule 7 — `/overview` is a known legacy defect

WBS 0 found the global `/overview` link returning 404.

During the navigation redesign:

```text
/overview  ->  308  ->  /
```

is the preferred compatibility rule because the old Overview item functioned as a general site entry, not specifically as the creator About page.

### Rule 8 — Do not change the global trailing-slash policy in WBS 1

Current production URL behavior is the baseline.  
Do not introduce an Astro `trailingSlash` change as part of the IA migration.

Canonical behavior will be verified in the SEO work package.

### Rule 9 — Human-readable Chinese slugs remain valid

Existing Chinese article slugs are not considered a defect.  
Do not transliterate existing URLs solely for aesthetics.

Future English content may use English slugs.

### Rule 10 — File names are not identity

The following must be treated as independent:

```text
domainKey
sourceDirectory
CurrentURL
OriginalOrder
GuideOrder
Stage
Level
TranslationKey
```

## 3. Redirect policy

A redirect is introduced only when:

1. an existing public route is intentionally retired;
2. a broken legacy navigation route must be recovered;
3. an unavoidable future migration is explicitly approved.

Every retired indexed article URL must have an explicit permanent redirect to one semantically equivalent destination.

## 4. WBS 1 non-goals

WBS 1 does **not**:

- rename 178 existing article URLs;
- rename the legacy Mirror Classic source directory;
- close the Jingfang numbering gap;
- create `/zh/`;
- perform bulk English translation;
- change canonical/trailing-slash behavior.

## 5. Acceptance criteria

WBS 1 URL architecture passes when:

- the six live domains have clean hub routes;
- the 178 article URLs remain unchanged;
- domain identity no longer depends on folder naming;
- new domains can be added without creating new top-level taxonomy code;
- translation identity is independent of article slug.
