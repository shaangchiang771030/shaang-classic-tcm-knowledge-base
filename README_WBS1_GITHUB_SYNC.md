# Cosmos Order WBS 1.1–1.4 — GitHub 同步指南

這個 ZIP 的目錄結構已經按照 repo root 設計。

包含：

```text
src/data/domains.ts
data/architecture/Domain_Registry.csv
data/architecture/Guide_Order_Master.csv
docs/architecture/URL_Architecture_Spec.md
docs/architecture/Frontmatter_Migration_Spec.md
docs/architecture/WBS1_1-1_4_Validation_Report.md
README_WBS1_GITHUB_SYNC.md
```

## A. 最安全的做法：開一個 Git branch

在 PowerShell 進入你的 repo：

```powershell
cd "C:\中醫\中國醫藥大學\延伸思考型議題\全球古中醫內容網站搭建\shaang-classic-tcm-knowledge-base"
```

先確認：

```powershell
git status
git branch --show-current
```

### 如果 WBS 0 baseline 還沒有 commit

先把 baseline 存進 Git：

```powershell
git add audit/pre-redesign-v1
git commit -m "Add pre-redesign baseline audit"
```

如果 Git 說 nothing to commit，就直接繼續。

### 確認 baseline tag

```powershell
git tag --list pre-redesign-v1
```

如果沒有任何輸出，再執行：

```powershell
git tag -a pre-redesign-v1 c60b50f03d03319229123ce31dba4c3c4b9c990a -m "Cosmos Order production baseline before redesign"
git push origin pre-redesign-v1
```

如果已經看到 `pre-redesign-v1`，不要再打一次 tag。

### 建 WBS 1 branch

```powershell
git switch -c wbs1-information-architecture
```

如果 Git 說 branch 已存在：

```powershell
git switch wbs1-information-architecture
```

## B. 解壓這個 ZIP 到 repo root

假設 ZIP 在 Windows Downloads：

```powershell
Expand-Archive `
  -Path "$HOME\Downloads\CosmosOrder_WBS1_1-1_4_v1.zip" `
  -DestinationPath "." `
  -Force
```

解壓後確認：

```powershell
git status
```

應看到新檔案位於：

```text
src/data/
data/architecture/
docs/architecture/
```

## C. 先不要改 178 篇 Markdown

這一包只建立 WBS 1.1–1.4 的 architecture contract / master data。

目前 **不要** 根據 CSV 批量改文章；那是下一個 migration step。

## D. Build 驗證

```powershell
npm run build
```

因為 `domains.ts` 在這一階段尚未接入 UI，所以正常情況應該不會改變 production behavior。

## E. 看本次到底新增了什麼

```powershell
git status
git diff --stat
```

如果要逐個看文字：

```powershell
git diff -- src/data/domains.ts
git diff -- docs/architecture/URL_Architecture_Spec.md
git diff -- docs/architecture/Frontmatter_Migration_Spec.md
```

CSV 是新檔時 `git diff` 可能很長，不需要逐行檢查全部 178 筆。

## F. Commit

```powershell
git add `
  src/data/domains.ts `
  data/architecture/Domain_Registry.csv `
  data/architecture/Guide_Order_Master.csv `
  docs/architecture/URL_Architecture_Spec.md `
  docs/architecture/Frontmatter_Migration_Spec.md `
  docs/architecture/WBS1_1-1_4_Validation_Report.md `
  README_WBS1_GITHUB_SYNC.md
```

確認：

```powershell
git status
```

然後：

```powershell
git commit -m "Add WBS 1 information architecture foundation"
```

## G. Push 到 GitHub

```powershell
git push -u origin wbs1-information-architecture
```

這一步只把 branch 傳到 GitHub；通常不會改 Production。

## H. GitHub 網頁上建立 Pull Request

1. 打開你的 GitHub repository。
2. 通常上方會出現 `Compare & pull request`。
3. 點它。
4. Base 選 `main`。
5. Compare 選 `wbs1-information-architecture`。
6. Title 可填：
   `Add WBS 1 information architecture foundation`
7. 建立 Pull Request。
8. 確認 Vercel Preview build 成功。
9. 再按 `Merge pull request`。
10. Merge 完成後，Vercel 才會依 main branch 設定重新做 Production deploy。

## I. Merge 後本機同步 main

```powershell
git switch main
git pull origin main
```

最後：

```powershell
git status
```

理想結果：

```text
nothing to commit, working tree clean
```

## 重要

本 WBS 1 package **不會**：

- 改現有 178 篇 URL；
- 改 sidebar；
- 改首頁；
- 改文章 frontmatter；
- 改 production routing。

它只是把下一階段實作所需的正式 architecture master 放進 Git。
