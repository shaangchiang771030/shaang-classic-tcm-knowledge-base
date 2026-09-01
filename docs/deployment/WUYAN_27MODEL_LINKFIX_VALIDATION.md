# 五顏六色解內經｜27 模型超鏈修復 v1

**Overall: PASS**

## 根因

目前「時空篇」清理顯示名稱後，public URL 仍由既有 `slug` frontmatter 決定。

有三個文章名稱含全形括號 `（ ）`，但它們的實際 public slug **不含括號**。
上一版 Hub 錯把「顯示標題」直接拼進 URL，因此同一錯誤 route 在 27 模型表中被重複引用。

## 已修正

1. `四象時間模型（陰陽互含規律）`
   - 錯：`/concept/15-四象時間模型（陰陽互含規律）/`
   - 對：`/concept/15-四象時間模型陰陽互含規律/`
   - 修復 occurrences：**6**

2. `三陰三陽人體空間分佈模型（陰陽離合規律）`
   - 錯：`/concept/26-三陰三陽人體空間分佈模型（陰陽離合規律）/`
   - 對：`/concept/26-三陰三陽人體空間分佈模型陰陽離合規律/`
   - 修復 occurrences：**4**

3. `五行互涵模型（體質與藥精細分）`
   - 錯：`/concept/21-五行互涵模型（體質與藥精細分）/`
   - 對：`/concept/21-五行互涵模型體質與藥精細分/`
   - 修復 occurrences：**2**

合計修復 **12 個實際 hyperlink occurrences**。

## 全表重新驗證

| Check | Result |
|---|---:|
| Canonical 時空篇 routes | 30 |
| 27 模型 rows | 27 / 27 |
| Concept hyperlink occurrences | 54 |
| 修正前錯誤 unique routes | 3 |
| 修正後錯誤 routes | 0 |
| 27 表內未命中 canonical slug | 0 |
| 25 篇《五顏六色解內經》links 保留 | 25 |
| Raw HTML | 0 |
| Inline style | NO |

## Scope

本 Hotfix 只需覆蓋：

`src/content/docs/research/wuyan-liuse-neijing/index.mdx`

不修改 25 篇正文、不修改色碼、不修改四語 Router。

## Local gate

```powershell
npx astro check
npx astro build
```
