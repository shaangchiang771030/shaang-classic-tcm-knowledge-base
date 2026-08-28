# Cosmos Order｜氣化生理篇重寫：EN / 简体 / 日本語 Repo Overlay

這是一個可直接解壓到 repository root 的 overlay。

## 內容

- English：30 篇新版氣化生理文章
- 简体中文：30 篇新版氣化生理文章
- 日本語：30 篇新版氣化生理文章
- 共用生命之花 PNG（與已部署繁體版相同）
- File Map + Final Validation Report

## 不修改

- 繁體中文 30 篇
- About
- `astro.config.mjs`
- 四語 Router
- dependency / package versions

## Apply

把 ZIP 直接解壓到 Repo Root，覆蓋既有三語舊正文。

然後：

```powershell
npx astro check
npx astro build
```

兩個都 PASS 後再 commit / push。
