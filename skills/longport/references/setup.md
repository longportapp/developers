# LongPort Setup And Authentication

## HTTP MCP

Use the hosted HTTP MCP Server:

```text
https://mcp.longportapp.com
```

No local MCP command is required. First tool call triggers OAuth authorization in supported clients.

If the user provides a one-time authorization snippet from https://open.longportapp.com/connect, use it to complete the AI client's LongPort connection flow.

## Revoking Authorization

To revoke access, go to the LongPort account security settings and manage authorized apps.

## Rate Limits

- REST API: max 10 calls/second.
- SDK and MCP-connected tools refresh OAuth tokens automatically.
- WebSocket subscriptions are subject to quote package limits.
