---
sidebar_position: 8
slug: /llm
sidebar_label: LLM
sidebarCollapsed: true
id: llm
---

# LLM Documentation Access

LongPort Developers documentation is available in text formats that are easy for AI tools to ingest. Use the compact index for lightweight context, the full text bundle for complete ingestion, or fetch a single page by adding `.md` to its URL.

## llms.txt

Use `llms.txt` as the default entry point when an AI client asks for an LLMs Text URL.

- https://open.longportapp.com/llms.txt
- Best for: quick indexing, custom docs in AI editors, and discovering relevant pages.

## llms-full.txt

Use `llms-full.txt` when the AI tool can ingest a larger context or you need the full documentation text in one file.

- https://open.longportapp.com/llms-full.txt
- Best for: offline ingestion, full-project context, and building a local retrieval index.

## Markdown Pages

Every documentation page also has a Markdown version. Add `.md` to the page URL.

Examples:

- https://open.longportapp.com/docs/getting-started.md
- https://open.longportapp.com/docs/quote/overview.md
- https://open.longportapp.com/skill/install.md

Use page Markdown when you want to give an AI model one precise source instead of the full documentation set.
