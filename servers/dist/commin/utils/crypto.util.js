"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoUtil = void 0;
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
let CryptoUtil = class CryptoUtil {
    encryptPassword(password) {
        return crypto_1.createHash('sha256')
            .update(password)
            .digest('hex');
    }
    checkPassword(password, encryptedPassword) {
        const currentPass = this.encryptPassword(password);
        return currentPass === encryptedPassword;
    }
};
CryptoUtil = __decorate([
    common_1.Injectable()
], CryptoUtil);
exports.CryptoUtil = CryptoUtil;
//# sourceMappingURL=crypto.util.js.map