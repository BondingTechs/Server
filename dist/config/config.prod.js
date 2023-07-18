"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 本地开发 npm run dev 读取的配置文件
 */
exports.default = {
    orm: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'bryan',
        password: 'f5_3Z~P/g3mVy2GC',
        database: 'bonding',
        // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
        synchronize: false,
        // 打印日志
        logging: false,
        // 字符集
        charset: 'utf8mb4',
    },
    cool: {
        // 是否自动导入数据库
        initDB: false,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnByb2QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t1cm91L3Byb2plY3QvYm9uZGluZy1vbGQyL3NlcnZlci9zcmMvIiwic291cmNlcyI6WyJjb25maWcvY29uZmlnLnByb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTs7R0FFRztBQUNILGtCQUFlO0lBQ2IsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsZ0NBQWdDO1FBQ2hDLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU87UUFDUCxPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU07UUFDTixPQUFPLEVBQUUsU0FBUztLQUNuQjtJQUNELElBQUksRUFBRTtRQUNKLFlBQVk7UUFDWixNQUFNLEVBQUUsS0FBSztLQUNBO0NBQ0EsQ0FBQyJ9