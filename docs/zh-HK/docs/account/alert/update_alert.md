---
slug: update-alert
title: Update Alert
sidebar_position: 3
language_tabs: false
toc_footers: []
includes: []
search: true
highlight_theme: ''
headingLevel: 2
---

啟用或停用已有的股價提醒。傳入提醒 ID，使用 `enable(alert_id)` 啟用，使用 `disable(alert_id)` 停用。

<SDKLinks module="alert" klass="AlertContext" method="enable" />


## Parameters

> **SDK method parameters.**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| alert_id | string | YES | Alert ID (from `list()` response `indicators[].id`) |

## Request Example

<Tabs groupId="request-example">
  <TabItem value="python" label="Python">

```python
from longport.openapi import AlertContext, Config, OAuthBuilder

oauth = OAuthBuilder("your-client-id").build(lambda url: print("Visit:", url))
config = Config.from_oauth(oauth)
ctx = AlertContext(config)

# Get the alert ID from list()
alerts = ctx.list()
alert_id = alerts.lists[0].indicators[0].id

# Enable the alert
ctx.enable(alert_id)

# Disable the alert
ctx.disable(alert_id)
```

  </TabItem>
  <TabItem value="python-async" label="Python (async)">

```python
import asyncio
from longport.openapi import AsyncAlertContext, Config, OAuthBuilder

async def main() -> None:
    oauth = await OAuthBuilder("your-client-id").build_async(lambda url: print("Visit:", url))
    config = Config.from_oauth(oauth)
    ctx = AsyncAlertContext.create(config)

    alerts = await ctx.list()
    alert_id = alerts.lists[0].indicators[0].id
    await ctx.enable(alert_id)
    # await ctx.disable(alert_id)  # to disable

if __name__ == "__main__":
    asyncio.run(main())
```

  </TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript
const { Config, AlertContext, OAuth } = require('longport')

async function main() {
  const oauth = await OAuth.build('your-client-id', (_, url) => {
    console.log('Open this URL to authorize: ' + url)
  })
  const config = Config.fromOAuth(oauth)
  const ctx = AlertContext.new(config)
  const alerts = await ctx.list()
  const alertId = alerts.lists[0].indicators[0].id
  await ctx.enable(alertId)
  // await ctx.disable(alertId)  // to disable
}
main().catch(console.error)
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
import com.longport.*;
import com.longport.alert.*;

class Main {
    public static void main(String[] args) throws Exception {
        try (OAuth oauth = new OAuthBuilder("your-client-id").build(url -> System.out.println("Open to authorize: " + url)).get();
             Config config = Config.fromOAuth(oauth);
             AlertContext ctx = AlertContext.create(config)) {
            var alerts = ctx.getList().get();
            String alertId = alerts.getLists().get(0).getIndicators().get(0).getId();
            ctx.enable(alertId).get();
            // ctx.disable(alertId).get();  // to disable
        }
    }
}
```

  </TabItem>
  <TabItem value="rust" label="Rust">

```rust
use std::sync::Arc;
use longport::{oauth::OAuthBuilder, alert::AlertContext, Config};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let oauth = OAuthBuilder::new("your-client-id").build(|url| println!("Open: {url}")).await?;
    let config = Arc::new(Config::from_oauth(oauth));
    let ctx = AlertContext::new(config);
    let list = ctx.list().await?;
    let alert_id = &list.lists[0].indicators[0].id;
    ctx.enable(alert_id).await?;
    // ctx.disable(alert_id).await?;  // to disable
    Ok(())
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
#include <iostream>
#include <longport.hpp>

using namespace longport;
using namespace longport::alert;

int main() {
    OAuthBuilder("your-client-id").build(
        [](const std::string& url) { std::cout << "Open: " << url << std::endl; },
        [](auto res) {
            if (!res) return;
            Config config = Config::from_oauth(*res);
            AlertContext ctx = AlertContext::create(config);
            ctx.list([&ctx](auto list_resp) {
                if (!list_resp) return;
                auto alert_id = (*list_resp).lists[0].indicators[0].id;
                ctx.enable(alert_id, [](auto resp) {
                    if (resp) std::cout << "OK" << std::endl;
                });
            });
        });
    std::cin.get();
}
```

  </TabItem>
  <TabItem value="go" label="Go">

```go
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/longportapp/openapi-go/config"
	"github.com/longportapp/openapi-go/oauth"
	"github.com/longportapp/openapi-go/alert"
)

func main() {
	o := oauth.New("your-client-id").
		OnOpenURL(func(url string) { fmt.Println("Open this URL to authorize:", url) })
	if err := o.Build(context.Background()); err != nil {
		log.Fatal(err)
	}
	conf, err := config.New(config.WithOAuthClient(o))
	if err != nil {
		log.Fatal(err)
	}
	c, err := alert.NewFromCfg(conf)
	if err != nil {
		log.Fatal(err)
	}
	defer c.Close()
	list, err := c.List(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	alertID := list.Lists[0].Indicators[0].ID
	if err = c.Enable(context.Background(), alertID); err != nil {
		log.Fatal(err)
	}
	fmt.Println("OK")
}
```

  </TabItem>
</Tabs>

## Response


### Response Example

```json
{
  "code": 0,
  "message": "success",
  "data": {}
}
```

### Response Status

| Status | Description | Schema |
| ------ | ----------- | ------ |
| 200    | Success     | None |
| 400    | Bad request | None   |
