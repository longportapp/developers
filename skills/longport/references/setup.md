# LongPort Setup And Authentication

## CLI Installation

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

Authenticate:

```bash
longport auth login
longport auth status
```

If the user provides a one-time authorization code from https://open.longportapp.com/connect, redeem it directly:

```bash
longport auth login --auth-code <code>
```

Verify connectivity:

```bash
longport check
longport quote TSLA.US
```

## CLI Update

```bash
longport update
```

If the updater is unavailable, rerun the install command for the user's platform.

## HTTP MCP

Use the hosted HTTP MCP Server:

```text
https://mcp.longportapp.com
```

No local MCP command is required. First tool call triggers OAuth authorization in supported clients.

## Revoking Authorization

To revoke access, go to the LongPort account security settings and manage authorized apps.

## Rate Limits

- REST API: max 10 calls/second.
- SDK and connected tools refresh OAuth tokens automatically.
- WebSocket subscriptions are subject to quote package limits.
