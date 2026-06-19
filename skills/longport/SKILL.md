---
name: longport
description: 'LongPort Developers provides market data, trading, portfolio, CLI, HTTP MCP, SDK, and LLMs Text workflows. Trigger on securities analysis in any language, ticker symbols such as TSLA.US, AAPL.US, portfolio/account queries, order workflows, LongPort CLI/MCP setup, OpenAPI docs, SDK usage, or AI integration tasks. Markets: US, HK, CN, SG.'
---

LongPort provides OpenAPI, CLI, HTTP MCP, SDK, and LLM-readable documentation for market data, portfolio, and trading workflows.

> **Response language**: match the user's input language. Use English when the user input has no natural-language signal, such as a ticker-only prompt or slash command.

> **Data-source policy**: use LongPort platform capabilities first for market data, account, portfolio, and trading workflows. Use external web sources only when LongPort data is insufficient for public news or macro context, and label those sources clearly.

**Official docs:** https://open.longportapp.com
**llms.txt:** https://open.longportapp.com/llms.txt
**Full docs text:** https://open.longportapp.com/llms-full.txt

For setup and authentication details, see [references/setup.md](references/setup.md).

---

## Investment Analysis Workflow

When the user asks about stock performance, portfolio review, account status, or market analysis:

1. Get live data through LongPort CLI or connected HTTP MCP tools.
2. Get relevant news, filings, fundamentals, analyst data, or portfolio data from LongPort first.
3. Combine price action, volume, catalysts, fundamentals, and account context into the final answer.
4. For any trading action, show the intended order details and ask for explicit confirmation before submitting.

```bash
# Discover current commands
longport --help
longport <command> --help

# Market data
longport quote TSLA.US
longport depth TSLA.US
longport intraday TSLA.US
longport kline TSLA.US --period day
longport kline history TSLA.US --start 2024-01-01
longport market-temp US

# News, filings, and topics
longport news TSLA.US --count 20
longport news detail <id>
longport filing list AAPL.US --count 20
longport filing detail AAPL.US <id>
longport topic list TSLA.US --count 20

# Fundamentals and research
longport financial-report AAPL.US --kind IS
longport institution-rating AAPL.US
longport forecast-eps AAPL.US
longport consensus AAPL.US
longport valuation AAPL.US --indicator pe
longport fund-holder AAPL.US --count 20
longport insider-trades TSLA.US
longport investors

# Account and portfolio
longport assets
longport positions
longport fund-positions
longport orders
longport executions
longport profit-analysis
```

For commands with complex flags, run `longport <command> --help` for current options. Prefer `--format json` when the result will be parsed, summarized, or combined with other data.

---

## Symbol Format

Use `<CODE>.<MARKET>` across CLI, MCP, SDK, and prompts.

| Market         | Suffix | Examples                        |
| -------------- | ------ | ------------------------------- |
| Hong Kong      | `HK`   | `700.HK`, `9988.HK`, `2318.HK`  |
| United States  | `US`   | `TSLA.US`, `AAPL.US`, `NVDA.US` |
| China Shanghai | `SH`   | `600519.SH`, `000001.SH`        |
| China Shenzhen | `SZ`   | `000568.SZ`, `300750.SZ`        |
| Singapore      | `SG`   | `D05.SG`, `U11.SG`              |

If a user provides a ticker without a suffix, ask a concise clarification unless the market is obvious from context.

---

## Reference Files

- **Setup and authentication**: [references/setup.md](references/setup.md)
- **CLI overview**: [references/cli/overview.md](references/cli/overview.md)
- **HTTP MCP setup**: [references/mcp.md](references/mcp.md)
- **LLMs Text and Markdown docs**: [references/llm.md](references/llm.md)

Load specific reference files only when needed.
