# LLMs Text And Markdown Documentation

LongPort Developers documentation is available in AI-readable text formats.

## llms.txt

Use this as the compact documentation entry point:

```text
https://open.longportapp.com/llms.txt
```

It provides an index of documentation pages with links to individual Markdown files.

## llms-full.txt

Use this when the AI tool can ingest a larger context or you need the full documentation text:

```text
https://open.longportapp.com/llms-full.txt
```

## Markdown Pages

Every documentation page is available in Markdown format. Add `.md` to the page URL:

```text
https://open.longportapp.com/docs/getting-started.md
https://open.longportapp.com/docs/quote/overview.md
https://open.longportapp.com/docs/trade/order/submit.md
https://open.longportapp.com/skill/install.md
```

Use page Markdown when the AI needs one precise source. Use `llms.txt` for discovery and `llms-full.txt` for full ingestion.

## Cursor And IDE Integration

When an AI editor asks for a custom docs URL, use:

```text
https://open.longportapp.com/llms.txt
```

For a RAG system, start from `llms.txt` and crawl linked Markdown pages, or ingest `llms-full.txt` directly.
