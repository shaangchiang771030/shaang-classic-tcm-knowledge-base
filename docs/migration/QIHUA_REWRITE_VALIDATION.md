# 氣化生理篇重寫｜Final Validation

**Overall: PASS**

| Check | Result |
|---|---:|
| 繁體中文研究文章 | 30/30 |
| 既有 title 集合保持不變 | PASS |
| Unique slug | 30/30 |
| Unique translationKey | 30/30 |
| originalOrder / guideOrder / slug / translationKey 不變 | PASS |
| 空白文章 | 0 |
| Body 殘留 `# 數字 標題` | 0 |
| 繁體轉換 idempotence | PASS |
| 生命之花圖片引用文章 | 六經開闔樞與審證大關鍵 |
| 圖片與上傳 PNG byte-identical | PASS |
| About page | PASS |
| About 編輯 placeholder 已移除 | PASS |

## Stable identity

本次用重寫稿的語義標題對回既有 30 篇文章 identity。兩個標題只在重寫稿中改了措辭，因此採以下 mapping，而網站既有 title 不改：

- `臟腑內根、經脈外絡與人體空間連網` → `臟腑部位形象與內外連網`
- `陰陽盛衰、從化與治病求本` → `陰陽變化與治病求本`

`六經開闔樞與審證大關鍵` 在重寫稿中是第 23 篇，但既有 `originalOrder=29`、`guideOrder=230`、slug 中仍保留 `29-...`；本次全部保留。

## Image

Repo:

`public/images/qihua_physiology/生命之花.png`

Article:

`src/content/docs/qihua_physiology_concept/六經開闔樞與審證大關鍵.md`

Markdown:

`![生命之花與雙渦流環面示意](/images/qihua_physiology/生命之花.png)`

## Required local gates

```powershell
npx astro check
npx astro build
```
