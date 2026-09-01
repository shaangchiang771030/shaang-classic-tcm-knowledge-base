# 五顏六色解內經｜27 模型 Link Fix v1

直接解壓到 Repo Root。

Runtime 只修改：

`src/content/docs/research/wuyan-liuse-neijing/index.mdx`

修復 27 模型地圖中 3 個錯誤 canonical route；因同一 target 被多列重複使用，實際共修復 12 個 hyperlink occurrences。

不碰：
- 25 篇正文
- 四象新色碼
- 简体共用文章邏輯
- Astro / Starlight config
- dependencies

覆蓋後：

```powershell
npx astro check
npx astro build
```
