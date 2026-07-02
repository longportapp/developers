---
slug: create-alert
title: Create Alert
sidebar_position: 2
language_tabs: false
toc_footers: []
includes: []
search: true
highlight_theme: ''
headingLevel: 2
---

Create a new price alert for a security. The alert fires when the specified condition is met.

<SDKLinks module="alert" klass="AlertContext" method="add" />


## Parameters

> **SDK method parameters.**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| symbol | string | YES | Security symbol, e.g. `TSLA.US` |
| condition | AlertCondition | YES | Trigger condition: `PriceRise`, `PriceFall`, `PercentRise`, `PercentFall` |
| trigger_value | string | YES | Threshold value, e.g. `"600"` (price) or `"5"` (percentage) |
| frequency | AlertFrequency | YES | How often to trigger: `Daily`, `EveryTime`, `Once` |

## Request Example

<Tabs groupId="request-example">
  <TabItem value="python" label="Python">

```python
from longport.openapi import AlertContext, AlertCondition, AlertFrequency, Config, OAuthBuilder

oauth = OAuthBuilder("your-client-id").build(lambda url: print("Visit:", url))
config = Config.from_oauth(oauth)
ctx = AlertContext(config)

ctx.add("TSLA.US", AlertCondition.PriceRise, "600", AlertFrequency.Once)
```

  </TabItem>
  <TabItem value="python-async" label="Python (async)">

```python
import asyncio
from longport.openapi import AsyncAlertContext, AlertCondition, AlertFrequency, Config, OAuthBuilder

async def main() -> None:
    oauth = await OAuthBuilder("your-client-id").build_async(lambda url: print("Visit:", url))
    config = Config.from_oauth(oauth)
    ctx = AsyncAlertContext.create(config)

    await ctx.add("TSLA.US", AlertCondition.PriceRise, "600", AlertFrequency.Once)

if __name__ == "__main__":
    asyncio.run(main())
```

  </TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript
const { Config, AlertContext, AlertCondition, AlertFrequency, OAuth } = require('longport')

async function main() {
  const oauth = await OAuth.build('your-client-id', (_, url) => {
    console.log('Open this URL to authorize: ' + url)
  })
  const config = Config.fromOAuth(oauth)
  const ctx = AlertContext.new(config)
  await ctx.add("TSLA.US", AlertCondition.PriceRise, "600", AlertFrequency.Once)
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
            var opts = new AddAlertOptions();
            opts.symbol = "TSLA.US";
            opts.condition = AlertCondition.PriceRise;
            opts.triggerValue = "600";
            opts.frequency = AlertFrequency.Once;
            ctx.add(opts).get();
        }
    }
}
```

  </TabItem>
  <TabItem value="rust" label="Rust">

```rust
use std::sync::Arc;
use longport::{oauth::OAuthBuilder, alert::{AlertContext, AlertCondition, AlertFrequency}, Config};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let oauth = OAuthBuilder::new("your-client-id").build(|url| println!("Open: {url}")).await?;
    let config = Arc::new(Config::from_oauth(oauth));
    let ctx = AlertContext::new(config);
    ctx.add("TSLA.US", AlertCondition::PriceRise, "600", AlertFrequency::Once).await?;
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
            ctx.add("TSLA.US", AlertCondition::PriceRise, "600", AlertFrequency::Once,
                [](auto resp) {
                    if (resp) std::cout << "OK" << std::endl;
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
	if err = c.Add(context.Background(), "TSLA.US", alert.AlertConditionPriceRise, "600", alert.AlertFrequencyOnce); err != nil {
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
