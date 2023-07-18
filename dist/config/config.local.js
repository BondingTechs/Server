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
        username: 'root',
        password: 'monokuro8669',
        database: 'bonding_server_backup',
        // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
        synchronize: true,
        // 打印日志
        logging: false,
        // 字符集
        charset: 'utf8mb4',
    },
    cool: {
        // 是否自动导入数据库
        initDB: true,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmxvY2FsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdXJvdS9wcm9qZWN0L2JvbmRpbmctb2xkMi9zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29uZmlnL2NvbmZpZy5sb2NhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBOztHQUVHO0FBQ0gsa0JBQWU7SUFDYixHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxnQ0FBZ0M7UUFDaEMsV0FBVyxFQUFFLElBQUk7UUFDakIsT0FBTztRQUNQLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTTtRQUNOLE9BQU8sRUFBRSxTQUFTO0tBQ25CO0lBQ0QsSUFBSSxFQUFFO1FBQ0osWUFBWTtRQUNaLE1BQU0sRUFBRSxJQUFJO0tBQ0M7Q0FDQSxDQUFDIn0=