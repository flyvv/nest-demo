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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: '用户昵称',
        uniqueItems: true,
    }),
    class_validator_1.IsString({ message: '昵称不是有效的数据' }),
    class_validator_1.IsNotEmpty({ message: '昵称不能为空' }),
    class_validator_1.MinLength(2, { message: '昵称至少需要两位' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nickname", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: '用户名',
        uniqueItems: true,
    }),
    class_validator_1.IsString({ message: '不是有效的数据' }),
    class_validator_1.IsNotEmpty({ message: '用户名不能为空' }),
    class_validator_1.MinLength(3, { message: '用户名至少需要三位' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "account", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: '密码不是有效的数据' }),
    class_validator_1.IsNotEmpty({ message: '密码不能为空' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: '手机号码不是有效的数据' }),
    class_validator_1.IsNotEmpty({ message: '手机号码不能为空' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phoneNum", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: '邮箱不能为空' }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: '确认密码不是有效数据' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString({ message: '头像不是有效数据' }),
    class_validator_1.IsNotEmpty({ message: '头像地址不能为空' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "deptId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsBoolean({ message: '用户状态必须为布尔类型' }),
    class_validator_1.IsNotEmpty({ message: '用户状态不能为空' }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "status", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map