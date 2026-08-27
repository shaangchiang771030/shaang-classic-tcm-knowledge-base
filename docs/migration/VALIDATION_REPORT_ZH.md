# Cosmos Order 中文清理版 Validation Report

## 結論

**Structural QA: PASS**

| 檢查 | 結果 |
|---|---:|
| 中文研究文章 | 178 / 178 |
| `language: zh` | 178 / 178 |
| `translationKey` unique | 178 / 178 |
| 實體 Markdown 檔名無舊序號前綴 | 178 / 178 |
| Frontmatter `title` 無序號前綴 | 178 / 178 |
| 中文 title 無英文括號副標 | 178 / 178 |
| `sidebar.order == GuidePosition` | 178 / 178 |
| 穩定 `slug` unique | 178 / 178 |
| 舊公開 URL 由 `slug` 保留 | 178 / 178 |
| 圖片 URL 與原中文 Markdown 完全一致 | 178 / 178；0 mismatch |
| 六大領域導文文章內鏈覆蓋 | 178 / 178 |
| Hub 顯示序號連續依 cognitive order | PASS |
| 舊 numbered files deletion manifest | 178 paths |

## 六大領域
| 領域 | 篇數 |
|---|---:|
| 時空篇 / Spacetime | 30 |
| 氣化生理篇 / Qi Transformation Physiology | 30 |
| 經方篇 / Jingfang | 22 |
| 藥物篇 / Materia Medica | 30 |
| 針灸篇 / Acupuncture | 6 |
| 扁鵲鏡經篇 / Bian Que Mirror Classic | 60 |
| **總計** | **178** |

## 架構決策

- `OriginalOrder` 只作不可變身份／歷史追蹤，不再作讀者顯示序號。
- `GuidePosition` 是讀者閱讀順序；Hub 用它顯示 `01, 02, 03...`。
- 實體檔名移除舊序號。
- 文章 `title` 只保留乾淨中文名稱。
- `slug` 保留原有 numbered public route，因此既有外鏈與 SEO URL 不需要遷移。
- 六篇導文已格式化進六個中文 Domain Hub；預覽只露出三行，點擊 `<details>` 展開全文。
- 導文中每一篇本領域文章都已轉成站內連結。

## 尚需在實際 Repo 執行的 Gate

本 artifact 環境不是完整 production repository，因此 **沒有聲稱 Astro Build PASS**。套用中文與英文兩個 overlay、刪除 legacy numbered files 後，必須在實際 Repo 執行：

```powershell
npx astro check
npx astro build
```

兩者 PASS 才可 commit。
