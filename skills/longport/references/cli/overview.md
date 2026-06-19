# CLI Overview

LongPort CLI is an AI-native terminal tool for OpenAPI market data, portfolio, account, and trading workflows.

## Discovering Commands

Always use the CLI's built-in help because it reflects the installed version:

```bash
longport --help
longport <command> --help
```

Do not rely on hardcoded flags when a command supports many options. Check `--help` first.

## Installation

```bash
# macOS (Homebrew)
brew install --cask longportapp/tap/longport-terminal

# macOS / Linux
curl -sSL https://open.longportapp.com/longportapp/longport-terminal/install | sh
```

Windows:

```powershell
# Scoop
scoop install https://open.longportapp.com/longportapp/longport-terminal//longport.json

# PowerShell
iwr https://open.longportapp.com/longportapp/longport-terminal/install.ps1 | iex
```

## Authentication

```bash
longport auth login
longport auth logout
longport auth status
longport check
```

If the user has an authorization code from https://open.longportapp.com/connect:

```bash
longport auth login --auth-code <code>
```

## Output Formats

Use JSON for AI parsing and shell pipelines:

```bash
longport quote TSLA.US --format json
longport positions --format json
```

## AI Agent Patterns

Run independent read-only queries in parallel when useful:

```bash
longport quote TSLA.US --format json & longport quote AAPL.US --format json & wait
```

For earnings and filings:

```bash
longport filing list TSLA.US --count 20
longport filing detail TSLA.US <id>
```

For portfolio review:

```bash
longport assets --format json
longport positions --format json
longport profit-analysis --format json
```

For trading workflows, inspect data first and ask the user to confirm exact order details before submitting an order.
