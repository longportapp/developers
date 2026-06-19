---
sidebar_position: 8
slug: /llm
sidebar_label: LLM
sidebarCollapsed: true
id: llm
---

# 面向 LLM 的文档访问

LongPort Developers 文档提供了适合 AI 工具读取的文本入口。你可以使用轻量索引、完整文本包，或者为单个页面追加 `.md` 获取 Markdown 版本。

## llms.txt

当 AI 客户端要求填写 LLMs Text 地址时，优先使用 `llms.txt`。

- https://open.longportapp.com/llms.txt
- 适合：快速索引、AI 编辑器自定义 Docs、发现相关页面。

## llms-full.txt

当 AI 工具可以读取更大的上下文，或者你需要一次性导入完整文档内容时，使用 `llms-full.txt`。

- https://open.longportapp.com/llms-full.txt
- 适合：离线导入、完整项目上下文、本地检索索引。

## Markdown 页面

每个文档页面也都有 Markdown 版本。访问时在页面 URL 后追加 `.md` 即可。

示例：

- https://open.longportapp.com/docs/getting-started.md
- https://open.longportapp.com/docs/quote/overview.md
- https://open.longportapp.com/skill/install.md

当你只想给 AI 一个精确来源，而不是导入整套文档时，建议使用单页 Markdown。
