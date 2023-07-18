<p align="center">
  <a href="https://midwayjs.org/" target="blank"><img src="https://cool-show.oss-cn-shanghai.aliyuncs.com/admin/logo.png" width="200" alt="Midway Logo" /></a>
</p>

<p align="center">cool-admin(midway版)一個很酷的後臺權限管理系統，開源免費，模塊化、插件化、極速開發CRUD，方便快速構建迭代後臺管理系統，支持serverless、docker、普通服務器等多種方式部署
到 <a href="https://cool-js.com" target="_blank">文檔</a> 進一步瞭解
<p align="center">
    <a href="https://github.com/cool-team-official/cool-admin-midway/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="GitHub license" />
    <a href=""><img src="https://img.shields.io/github/package-json/v/cool-team-official/cool-admin-midway?style=flat-square" alt="GitHub tag"></a>
    <img src="https://img.shields.io/github/last-commit/cool-team-official/cool-admin-midway?style=flat-square" alt="GitHub tag"></a>
</p>

## 技術棧

- 後端：**`node.js` `midway.js` `egg.js` `mysql` `typescript`**
- 前端：**`vue.js` `element-ui` `jsx` `vuex` `vue-router`**

如果你是前端，後端的這些技術選型對你是特別友好的，前端開發者可以較快速地上手。
如果你是後端，Typescript 的語法又跟 java、php 等特別類似，一切看起來也是那麼得熟悉。

<!-- 在此次添加使用文檔 -->

## 演示

[https://show.cool-admin.com](https://show.cool-admin.com)

- 賬戶：admin
- 密碼：123456

<img src="https://cool-show.oss-cn-shanghai.aliyuncs.com/admin/home-mini.png" alt="Admin Home"></a>

#### 文檔

[https://admin.cool-js.com](https://admin.cool-js.com)

#### 項目前端

[https://github.com/cool-team-official/cool-admin-vue](https://github.com/cool-team-official/cool-admin-vue)

## 微信群

<img width="260" src="https://cool-show.oss-cn-shanghai.aliyuncs.com/admin/wechat.jpeg?v=1" alt="Admin Wechat"></a>

## 運行

#### 修改數據庫配置，配置文件位於`src/config/config.local.ts`

數據庫為 mysql(`>=5.7版本`)，node 版本(`>=12.x`)，首次啟動會自動初始化並導入數據

```ts
orm: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'cool',
    // 自動建表 注意：線上部署的時候不要使用，有可能導致數據丟失
    synchronize: true,
    // 打印日誌
    logging: true,
    // 字符集
    charset: 'utf8mb4',
  },
```

#### 安裝依賴並運行

```bash
npm i
npm run dev
open http://localhost:8001/
```

注： `npm i`如果安裝失敗可以嘗試使用[cnpm](https://developer.aliyun.com/mirror/NPM?from=tnpm)，或者切換您的鏡像源

## CURD(快速增刪改查)

大部分的後臺管理系統，或者 API 服務都是對數據進行管理，所以可以看到大量的 CRUD 場景(增刪改查)，cool-admin 對此進行了大量地封裝，讓這塊的編碼量變得極其地少。

#### 新建一個數據表

`src/modules/demo/entity/goods.ts`，項目啟動數據庫會自動創建該表，無需手動創建

```ts
import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 商品
 */
@EntityModel('demo_app_goods')
export class DemoAppGoodsEntity extends BaseEntity {
  @Column({ comment: '標題' })
  title: string;

  @Column({ comment: '圖片' })
  pic: string;

  @Column({ comment: '價格', type: 'decimal', precision: 5, scale: 2 })
  price: number;
}
```

#### 編寫 api 接口

`src/modules/demo/controller/app/goods.ts`，快速編寫 6 個 api 接口

```ts
import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { DemoAppGoodsEntity } from '../../entity/goods';

/**
 * 商品
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoAppGoodsEntity,
})
export class DemoAppGoodsController extends BaseController {
  /**
   * 其他接口
   */
  @Get('/other')
  async other() {
    return this.ok('hello, cool-admin!!!');
  }
}
```

這樣我們就完成了 6 個接口的編寫，對應的接口如下：

- `POST /app/demo/goods/add` 新增
- `POST /app/demo/goods/delete` 刪除
- `POST /app/demo/goods/update` 更新
- `GET /app/demo/goods/info` 單個信息
- `POST /app/demo/goods/list` 列表信息
- `POST /app/demo/goods/page` 分頁查詢(包含模糊查詢、字段全匹配等)

### 部署

```bash
npm start
npm stop
```

### 內置指令

- 使用 `npm run lint` 來做代碼風格檢查。
- 使用 `npm test` 來執行單元測試。

### 低價服務器

[阿里雲、騰訊雲、華為雲低價雲服務器，不限新老](https://cool-js.com/ad/server.html)
