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
exports.CreateRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRoleDto {
    constructor() {
        this.deptId = null;
    }
}
__decorate([
    swagger_1.ApiProperty({ description: '角色名称' }),
    class_validator_1.IsString({ message: '不是有效数据' }),
    class_validator_1.IsNotEmpty({ message: '角色名称不能为空' }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "roleName", void 0);
__decorate([
    swagger_1.ApiProperty({ description: '备注' }),
    class_validator_1.IsString({ message: '不是有效数据' }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "remark", void 0);
__decorate([
    swagger_1.ApiProperty({ default: null, description: '部门ID，可为空' }),
    class_validator_1.Allow(),
    __metadata("design:type", Number)
], CreateRoleDto.prototype, "deptId", void 0);
__decorate([
    swagger_1.ApiProperty({ description: '菜单用户关系等' }),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], CreateRoleDto.prototype, "roleMenus", void 0);
exports.CreateRoleDto = CreateRoleDto;
//# sourceMappingURL=create-role.dto.js.map