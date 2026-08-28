# Cosmos Order｜四語文章 Router Hotfix v1

這是一個最小 hotfix，只改一個執行檔：

`src/data/i18n-status.ts`

根因是 article pathname 含中文字時，Astro 提供的是 percent-encoded pathname，
而 route registry 保存的是 decoded Unicode slug。

修正後會先 `decodeURI()`，再做四語 availability lookup。

不修改：
- 任何文章
- slug / translationKey
- CosmosLanguageSelect.astro
- HeaderActions.astro
- Astro config
- dependencies

解壓到 repo root 後：

```powershell
npx astro check
npx astro build
```
