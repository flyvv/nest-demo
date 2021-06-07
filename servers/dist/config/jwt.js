"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('JWTConfig', () => ({
    secretKey: process.env.JWT_SECRET_KEY,
}));
//# sourceMappingURL=jwt.js.map