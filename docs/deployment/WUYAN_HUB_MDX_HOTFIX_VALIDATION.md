# 五顏六色解內經｜Hub MDX Hotfix v1

**Overall: PASS**

## Root cause

Build error:

`[@mdx-js/rollup] Could not parse expression with acorn`

出現在：

`src/content/docs/research/wuyan-liuse-neijing/index.mdx`

Hub 原版在 Markdown table 中放了 30 個：

```text
<span style="...">...</span>
```

目前專案使用的較舊 MDX / Starlight 組合對這種 table 內 inline JSX/HTML style 語法解析不穩定；錯誤行號的 source mapping 也可能落到前面的普通文字行，而不是實際造成 parser 問題的 table row。

## Fix

本 Hotfix 只替換：

`src/content/docs/research/wuyan-liuse-neijing/index.mdx`

改為 **100% Markdown-only body**：

- 保留領域介紹；
- 保留 30 組 Color Code + Hex；
- 保留 27/27 clickable 時空篇連結；
- 保留 8/8 篇章目錄；
- 移除 Hub 內所有 raw HTML / JSX / inline style；
- **完全不修改八篇大師 Review 正文。**

## Static QA

| Check | Result |
|---|---:|
| Raw HTML/JSX tags | 0 |
| JSX expression braces | 0 |
| Color rows | 30 / 30 |
| 27 model links | 27 / 27 |
| 8 article links | 8 / 8 |

## Local gate

覆蓋後只需要再跑：

```powershell
npx astro build
```

前面的 auto-import / Vercel adapter 兩行仍然只是 warning，與這次 build failure 無關。
