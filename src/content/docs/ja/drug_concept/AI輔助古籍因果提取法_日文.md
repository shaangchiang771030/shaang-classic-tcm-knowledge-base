---
title: 'AIによる古籍因果抽出の補助法'
description: 'AIを医者の代替ではなく、古籍中の因果推論を抽出し、校正可能な構造へ変換する補助役として用いる。'
sidebar:
  order: 16
contentType: article
domain: materia-medica
originalOrder: 6
guideOrder: 160
stage: causal-extraction
level: advanced
language: ja
translationKey: materia-medica-006
slug: ja/drug_concept/06-ai輔助古籍因果提取法
related: []
featured: false
---
AIで本草古籍を整理する方法を繰り返し示してきたが、要点はAIに医者を置き換えさせることではない。古人の因果推論を抽出する補助に使うことである。本草で最も重要なのは「この薬は何を治すか」ではなく、「著者は何を根拠にそれを治せると推したのか」である。

<figure>
  <img src="/images/drug_concept/06-AI輔助古籍因果提取法.png" alt="AIによる古籍因果抽出の補助法の図" />
  <figcaption>AIは古籍中の因果矢印を抽出・可視化・校正する補助役として使う。</figcaption>
</figure>

基本方法は古籍の段落を三欄、原因・推論された結果・薬物例へ分けること。原因は括弧、注釈、経典引用に隠れ、結果は効能、主治、症状として現れる。AIの任務は文章の流れに埋もれた推理鎖を、可視化・校正・追跡できる矢印へ変えることである。

『本草求真』を対象に、全書を読んだ後で各段落の原因と結果を抽出し表にするようAIへ指示することもできる。こうすれば黄宮繡の思路、すなわちどの推論が臓腑、六淫から来て、どれが単なる病理タグなのかを素早く見分けられる。
