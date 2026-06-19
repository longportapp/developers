---
sidebar: false
title: LongPort CLI
sidebar_label: LongPort CLI
sidebar_position: 2
description: Install the LongPort CLI for AI-native terminal workflows.
layout: home
pageClass: standalone-ai-page
---

# LongPort CLI

LongPort CLI is an AI-native command-line tool for market data, portfolio, and trading workflows. Use it when your AI tool can run terminal commands or when you want a scriptable local workflow.

It is designed for:

- AI-agent tool calling from the terminal.
- Read-only market data and research workflows.
- Account, portfolio, and trading workflows after you explicitly enable the required permissions.

## Installation

### Homebrew (macOS / Linux)

```bash
brew install --cask longportapp/tap/longport-terminal
```

### Install Script (macOS / Linux)

```bash
curl -sSL https://github.com/longportapp/longport-terminal//raw/main/install | sh
```

### Windows (Scoop)

```powershell
scoop install https://github.com/longportapp/longport-terminal//raw/refs/heads/main/.scoop/longport.json
```

### Windows (PowerShell)

```powershell
iwr https://github.com/longportapp/longport-terminal//raw/main/install.ps1 | iex
```

The installer adds the `longport` command to your system path.

## Authentication

The CLI uses OAuth 2.0. After login, commands can reuse the saved token without re-authenticating.

```bash
longport auth login
longport auth logout
longport check
```

Run `longport check` after installation to verify token, region, and API endpoint connectivity.

## LongPort CLI Usage

```bash
longport <command> [options]
```

All commands should support machine-readable output when available:

```bash
longport quote TSLA.US --format json
longport positions --format json
```

### Diagnostics

```bash
longport check
```

### Quotes

```bash
longport quote TSLA.US 700.HK
longport depth TSLA.US
longport trades TSLA.US --count 50
longport intraday TSLA.US
longport kline TSLA.US --period day
longport kline history TSLA.US --start 2024-01-01
longport static TSLA.US
longport calc-index TSLA.US --index pe,pb,eps
longport capital flow TSLA.US
longport market-temp US
longport trading session
longport security-list HK
```

### News

```bash
longport news TSLA.US --count 20
longport news detail <id>
longport filing list AAPL.US --count 20
longport filing detail AAPL.US <id>
longport topic list TSLA.US --count 20
longport topic detail <id>
```

### Options And Warrants

```bash
longport option quote AAPL240119C190000
longport option chain AAPL.US
longport option chain AAPL.US --date 2024-01-19
longport warrant quote 12345.HK
longport warrant list 700.HK
longport warrant issuers
```

### Fundamentals

```bash
longport financial-report AAPL.US --kind IS
longport institution-rating AAPL.US
longport dividend AAPL.US
longport forecast-eps AAPL.US
longport consensus AAPL.US
longport valuation AAPL.US --indicator pe
longport fund-holder AAPL.US --count 20
longport shareholder AAPL.US --range all
```

### Market Data

```bash
longport exchange-rate
longport finance-calendar financial --symbol AAPL.US
longport finance-calendar report --symbol AAPL.US
longport finance-calendar dividend --symbol AAPL.US
longport finance-calendar ipo --market US
longport finance-calendar closed --market HK
```

### Watchlist

```bash
longport watchlist
longport watchlist show <id|name>
longport watchlist create "My Portfolio"
longport watchlist update <id> --add TSLA.US
longport watchlist update <id> --remove AAPL.US
```

### Trading And Portfolio

Start with read-only commands. Enable trading permissions only when your workflow explicitly needs order placement.

```bash
longport positions
longport fund-positions
longport assets --currency USD
longport orders
longport orders --history --start 2024-01-01
longport executions
longport order <order_id>
longport buy TSLA.US 100 --price 250.00
longport sell TSLA.US 100 --price 260.00
longport cancel <order_id>
longport replace <order_id> --qty 200 --price 255.00
longport margin-ratio TSLA.US
longport max-qty TSLA.US --side buy --price 250
```

### Profit Analysis

```bash
longport profit-analysis
longport profit-analysis detail 700.HK
longport profit-analysis by-market --market HK --size 50
```

### Statements

```bash
longport statement list --type daily
longport statement export --file-key <KEY> --section equity_holdings
longport statement export --file-key <KEY> --all
```

### Insider Trades

```bash
longport insider-trades TSLA.US
longport insider-trades AAPL.US --count 40
longport insider-trades NVDA.US --format json
```

### Investors

```bash
longport investors
longport investors 0001067983
longport investors 0001067983 --top 20
longport investors changes 0001067983
```

## Symbol Format

```text
<CODE>.<MARKET>   e.g. TSLA.US   700.HK   600519.SH
```

Markets: `HK` for Hong Kong, `US` for United States, `CN` / `SH` / `SZ` for China A-share, and `SG` for Singapore.
