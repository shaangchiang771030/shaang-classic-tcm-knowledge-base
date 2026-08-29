# Cosmos Order｜現代氣象 × 五運六氣｜3 Articles × 4 Locales v1

本 ZIP 是 **Repo Root Overlay**，可直接解壓到 repository 根目錄。

## 本次新增

- 3 篇新文章 × 4 語言 = **12 篇 Markdown**
- 4 語言的 `現代氣象 × 五運六氣` Hub
- EN / 简体 / 日本語 Research landing 新增此研究領域入口
- 四語 Router registry 新增此 Hub + 3 篇文章
- 原始三 Sheet Excel 拆成 **3 個獨立 Workbook**
- 每篇文章的 Excel 在四個 locale 各有一個「當地語言檔名」副本
- Excel **內部資料全部保留中文**

## Article folder

- `src/content/docs/weather_wuyun_liuqi_concept/`
- `src/content/docs/zh-cn/weather_wuyun_liuqi_concept/`
- `src/content/docs/en/weather_wuyun_liuqi_concept/`
- `src/content/docs/ja/weather_wuyun_liuqi_concept/`

## Download assets

- `public/downloads/weather-wuyun-liuqi/zh-tw/`
- `public/downloads/weather-wuyun-liuqi/zh-cn/`
- `public/downloads/weather-wuyun-liuqi/en/`
- `public/downloads/weather-wuyun-liuqi/ja/`

每個語言資料夾都有 3 個 Excel。四語版本只是檔名不同；同一篇對應的 workbook 內容相同且保持中文。

## Hub

本模組目前只有三篇文章，所以 Hub 只提供短介紹與文章列表，**不設長篇領域導讀**。

## Deploy gate

解壓到 Repo Root 後：

```powershell
npx astro check
npx astro build
```

兩個都 PASS 才進 Git。
