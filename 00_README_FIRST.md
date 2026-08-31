# 五顏六色解內經｜Hub MDX Hotfix v1

直接解壓到 Repo Root。

只會覆蓋：

`src/content/docs/research/wuyan-liuse-neijing/index.mdx`

不碰八篇文章。

修正原因：舊版 MDX parser 無法穩定解析 Hub 的 Markdown table 內 30 個 inline `<span style="...">`。
本版將 Hub 改成 Markdown-only，仍保留 30 色碼、27 模型 links、8 篇目錄。

覆蓋後：

```powershell
npx astro build
```
