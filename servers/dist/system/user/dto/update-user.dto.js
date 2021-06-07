"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateUserDto {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty({ message: '用户ID不能为空' }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: '不是有效的数据' }),
    class_validator_1.IsNotEmpty({ message: '昵称不能为空' }),
    class_validator_1.MinLength(2, { message: '昵称至少需要两位' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "nickname", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: '不是有效的数据' }),
    class_validator_1.IsNotEmpty({ message: '用户名不能为空' }),
    class_validator_1.MinLength(3, { message: '用户名至少需要三位' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "account", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: '邮箱不能为空' }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: '不是有效的数据' }),
    class_validator_1.IsNotEmpty({ message: '手机号码不能为空' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phoneNum", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: '不是有效的数据' }),
    class_validator_1.IsNotEmpty({ message: '头像地址不能为空' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "deptId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsBoolean({ message: '必须为布尔值类型' }),
    class_validator_1.IsNotEmpty({ message: '用户状态不能为空' }),
    __metadata("design:type", Boolean)
], UpdateUserDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], UpdateUserDto.prototype, "userRoles", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map