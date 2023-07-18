"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("@cool-midway/file");
// import * as redisStore from 'cache-manager-ioredis';
const fsStore = require("cache-manager-fs-hash");
exports.default = {
    // 修改成你自己独有的key
    keys: 'cool-admin for node',
    koa: {
        port: 8001,
    },
    // 文件上传
    upload: {
        fileSize: '200mb',
        whitelist: null,
    },
    // 模板渲染
    view: {
        mapping: {
            '.html': 'ejs',
        },
    },
    // 本地缓存
    cache: {
        store: fsStore,
        options: {
            path: 'cache',
            ttl: -1,
        },
    },
    // redis缓存
    //   cache: {
    //     store: redisStore,
    //     options: {
    //       host: '127.0.0.1',
    //       port: 6379,
    //       password: '',
    //       db: 1,
    //       ttl: null,
    //     },
    //   },
    // cool配置
    cool: {
        // redis: {
        //   host: '127.0.0.1',
        //   port: 6379,
        //   db: 0,
        // },
        // 是否自动导入数据库
        file: {
            // 上传模式 本地上传或云存储
            mode: file_1.MODETYPE.LOCAL,
            // 本地上传 文件地址前缀，当且仅当mode为LOCAL时生效
            domain: 'https://bondingtechs.com',
            // domain: 'http://127.0.0.1:8001',
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLmRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw0Q0FBNkM7QUFFN0MsdURBQXVEO0FBQ3ZELGlEQUFpRDtBQUVqRCxrQkFBZTtJQUNiLGVBQWU7SUFDZixJQUFJLEVBQUUscUJBQXFCO0lBQzNCLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxPQUFPO0lBQ1AsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLE9BQU87UUFDakIsU0FBUyxFQUFFLElBQUk7S0FDaEI7SUFDRCxPQUFPO0lBQ1AsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLEtBQUs7U0FDZjtLQUNGO0lBQ0QsT0FBTztJQUNQLEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7S0FDRjtJQUNELFVBQVU7SUFDVixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxPQUFPO0lBQ1AsU0FBUztJQUNULElBQUksRUFBRTtRQUNKLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxLQUFLO1FBQ0wsWUFBWTtRQUNaLElBQUksRUFBRTtZQUNKLGdCQUFnQjtZQUNoQixJQUFJLEVBQUUsZUFBUSxDQUFDLEtBQUs7WUFDcEIsZ0NBQWdDO1lBQ2hDLHNDQUFzQztZQUN0QyxNQUFNLEVBQUUsdUJBQXVCO1NBQ2hDO0tBQ1k7Q0FLZCxDQUFDIn0=