---
slug: update-sharelist
title: 更新股單
sidebar_position: 3
language_tabs: false
toc_footers: []
includes: []
search: true
highlight_theme: ''
headingLevel: 2
---

在自選股列表中添加、移除或重排證券，或對列表重命名。

<SDKLinks module="sharelist" klass="SharelistContext" method="update_sharelist" />


## Parameters

> **SDK 方法參數。**

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| id | int64 | 是 | 股單 ID（路徑參數） |
| name | string | 否 | 新名稱，不傳則保持原名 |
| mode | string | 否 | 證券操作模式：`add`（添加）、`remove`（移除）或 `replace`（替換） |
| securities | string[] | 否 | 受操作影響的證券代碼列表 |

## Request Example

<Tabs groupId="request-example">
  <TabItem value="python" label="Python">

```python
from longport.openapi import SharelistContext, Config, OAuthBuilder

oauth = OAuthBuilder("your-client-id").build(lambda url: print("Visit:", url))
config = Config.from_oauth(oauth)
ctx = SharelistContext(config)

resp = ctx.update_sharelist(15921, mode="add", securities=["TSLA.US", "NVDA.US"])
print(resp)
```

  </TabItem>
  <TabItem value="python-async" label="Python (async)">

```python
import asyncio
from longport.openapi import AsyncSharelistContext, Config, OAuthBuilder

async def main() -> None:
    oauth = await OAuthBuilder("your-client-id").build_async(lambda url: print("Visit:", url))
    config = Config.from_oauth(oauth)
    ctx = AsyncSharelistContext.create(config)

    resp = await ctx.update_sharelist(15921, mode="add", securities=["TSLA.US", "NVDA.US"])
    print(resp)

if __name__ == "__main__":
    asyncio.run(main())
```

  </TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript
const { Config, SharelistContext, OAuth } = require('longport')

async function main() {
  const oauth = await OAuth.build('your-client-id', (_, url) => {
    console.log('Open this URL to authorize: ' + url)
  })
  const config = Config.fromOAuth(oauth)
  const ctx = SharelistContext.new(config)
  const resp = await ctx.update_sharelist()
  console.log(resp)
}
main().catch(console.error)
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
import com.longport.*;
import com.longport.sharelist.*;

class Main {
    public static void main(String[] args) throws Exception {
        try (OAuth oauth = new OAuthBuilder("your-client-id").build(url -> System.out.println("Open to authorize: " + url)).get();
             Config config = Config.fromOAuth(oauth);
             SharelistContext ctx = SharelistContext.create(config)) {
            var resp = ctx.getUpdateSharelist().get();
            System.out.println(resp);
        }
    }
}
```

  </TabItem>
  <TabItem value="rust" label="Rust">

```rust
use std::sync::Arc;
use longport::{oauth::OAuthBuilder, sharelist::SharelistContext, Config};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let oauth = OAuthBuilder::new("your-client-id").build(|url| println!("Open: {url}")).await?;
    let config = Arc::new(Config::from_oauth(oauth));
    let ctx = SharelistContext::new(config);
    let resp = ctx.update_sharelist().await?;
    println!("{:?}", resp);
    Ok(())
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
#include <iostream>
#include <longport.hpp>

using namespace longport;
using namespace longport::sharelist;

int main() {
    OAuthBuilder("your-client-id").build(
        [](const std::string& url) { std::cout << "Open: " << url << std::endl; },
        [](auto res) {
            if (!res) return;
            Config config = Config::from_oauth(*res);
            SharelistContext ctx = SharelistContext::create(config);
            ctx.update_sharelist([](auto resp) {
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
	"github.com/longportapp/openapi-go/sharelist"
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
	c, err := sharelist.NewFromCfg(conf)
	if err != nil {
		log.Fatal(err)
	}
	defer c.Close()
	resp, err := c.UpdateSharelist(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%+v\n", resp)
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
| 200    | 成功        | [UpdateSharelistResponse](#UpdateSharelistResponse) |
| 400    | 請求錯誤    | None   |

## Schemas

### UpdateSharelistResponse

<a id="UpdateSharelistResponse"></a>

無響應體字段。
