---
sidebar_position: 20
slug: /llm
sidebar_label: LLM
sidebarCollapsed: true
id: llm
---

# 面向 LLM 的文件訪問

LongPort Developers 文件提供了適合 AI 工具讀取的文本入口。你可以使用輕量索引、完整文本包，或者為單個頁面追加 `.md` 獲取 Markdown 版本。

## llms.txt

當 AI 客戶端要求填寫 LLMs Text 地址時，優先使用 `llms.txt`。

- https://open.longportapp.com/llms.txt
- 適合：快速索引、AI 編輯器自定義 Docs、發現相關頁面。

## llms-full.txt

當 AI 工具可以讀取更大的上下文，或者你需要一次性導入完整文件內容時，使用 `llms-full.txt`。

- https://open.longportapp.com/llms-full.txt
- 適合：離線導入、完整項目上下文、本地檢索索引。

## Markdown 頁面

每個文件頁面也都有 Markdown 版本。訪問時在頁面 URL 後追加 `.md` 即可。

示例：

- https://open.longportapp.com/docs/getting-started.md
- https://open.longportapp.com/docs/quote/overview.md
- https://open.longportapp.com/skill/install.md

當你只想給 AI 一個精確來源，而不是導入整套文件時，建議使用單頁 Markdown。
