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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_service_1 = require("./role.service");
const create_role_dto_1 = require("./dto/create-role.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../../commin/guards/roles.guard");
const permissions_decorator_1 = require("../../commin/decorators/permissions.decorator");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async findAllList() {
        return this.roleService.findAllList();
    }
    async findList(query) {
        return this.roleService.findList(query.pageSize || 10, query.pageNum || 1, query.roleName || null);
    }
    async findOne(id) {
        return this.roleService.findOne(id);
    }
    async create(role) {
        return this.roleService.createRole(role);
    }
    async update(roleData) {
        return this.roleService.updateRole(roleData);
    }
    async delete(id) {
        return this.roleService.deleteRole(id);
    }
};
__decorate([
    common_1.Get('all'),
    swagger_1.ApiOperation({ summary: '查询所有角色' }),
    permissions_decorator_1.Permissions('sys_role:all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findAllList", null);
__decorate([
    common_1.Get('list'),
    swagger_1.ApiOperation({ summary: '查询角色列表' }),
    permissions_decorator_1.Permissions('sys_role:list'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findList", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ summary: '查询角色详情' }),
    permissions_decorator_1.Permissions('sys_role:list'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: '创建角色' }),
    permissions_decorator_1.Permissions('sys_role:create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    common_1.Put(),
    swagger_1.ApiOperation({ summary: '更新角色信息' }),
    permissions_decorator_1.Permissions('sys_role:update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ summary: '删除角色' }),
    permissions_decorator_1.Permissions('sys_role:delete'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "delete", null);
RoleController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('role'),
    common_1.Controller('role'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map