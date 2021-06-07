"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('database', () => ({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    charset: process.env.DB_CHARSER,
    multipleStatements: true,
    dropSchema: false,
    synchronize: true,
    logging: true,
    logger: process.env.DB_LOGGER,
}));
//# sourceMappingURL=mysql.js.map