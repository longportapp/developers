# HTTP MCP Server

LongPort provides a hosted HTTP MCP Server for AI clients.

## Endpoint

```text
https://mcp.longportapp.com
```

No API key is required in the config. Supported clients use OAuth in the browser authorization flow.

## Client Configuration

Add this remote MCP server to any compatible client:

```json
{
  "mcpServers": {
    "longport": {
      "url": "https://mcp.longportapp.com"
    }
  }
}
```

If the client asks for a transport type, choose HTTP or Streamable HTTP.

## Per-client Setup

- **Cursor**: Settings -> MCP Servers -> Add Remote MCP Server.
- **Claude Desktop**: edit `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS or `%APPDATA%\Claude\claude_desktop_config.json` on Windows.
- **Zed**: use the `context_servers` key in `~/.config/zed/settings.json`.
- **Warp**: Settings -> AI -> MCP Servers -> Add.

## OAuth Authorization Flow

1. Add the MCP config.
2. Call any LongPort tool from the AI client.
3. The client opens a browser tab for LongPort login and consent.
4. Sign in and approve the requested scopes.
5. Tokens are stored and refreshed by the client.

## Security Recommendations

- Approve only the scopes required for the task.
- For order placement, instruct the AI to show order details and ask for confirmation before executing.
- Periodically review and revoke unused authorizations.

## Example Prompts

```text
What is the current price and PE ratio of TSLA.US?
Show my current HK stock positions and unrealized P&L.
Get the latest news and filings for AAPL.US.
I want to buy 100 shares of 700.HK at limit price 50 HKD. Confirm the order details before placing it.
```
