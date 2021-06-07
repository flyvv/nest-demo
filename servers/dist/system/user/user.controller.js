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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../../commin/guards/roles.guard");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
const update_user_dto_1 = require("./dto/update-user.dto");
const permissions_decorator_1 = require("../../commin/decorators/permissions.decorator");
const update_pw_dto_1 = require("./dto/update-pw-dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findList(query) {
        return this.userService.findList(query);
    }
    async findOne(id) {
        return this.userService.findOne(id);
    }
    async findUserListNotInRoleId(query) {
        return this.userService.findUserListNotInRoleId(query);
    }
    async createUserRoleRelation(userRoles) {
        return this.userService.createUserRoleRelation(userRoles);
    }
    async update(userData) {
        return await this.userService.update(userData);
    }
    async updatePW(updatePwData, req) {
        return this.userService.updatePw(Object.assign(updatePwData, req['user'].id));
    }
    async updateStatus(id, status) {
        return this.userService.updateStatus(id, status);
    }
    async resetPossword(id) {
        return await this.userService.resetPossword(id);
    }
    async cancelUserRoleRelation(userId) {
        return this.userService.cancelUserRoleRelation(userId);
    }
};
__decorate([
    common_1.Get('list'),
    swagger_1.ApiOperation({ summary: '查询用户列表' }),
    swagger_1.ApiOkResponse({ description: '返回用户列表和用户总数' }),
    permissions_decorator_1.Permissions('sys_user:list'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findList", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ summary: '查询用户信息' }),
    permissions_decorator_1.Permissions('sys_user:list'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    common_1.Get('list/notRole'),
    swagger_1.ApiOperation({ summary: '查询没有关联当前角色的用户列表' }),
    permissions_decorator_1.Permissions('sys_user:roleList'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserListNotInRoleId", null);
__decorate([
    common_1.Post('role'),
    swagger_1.ApiOperation({ summary: '创建用户与角色关联' }),
    permissions_decorator_1.Permissions('sys_user:createRole'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUserRoleRelation", null);
__decorate([
    common_1.Put(),
    swagger_1.ApiOperation({ summary: '根据用户id更新用户信息信息' }),
    swagger_1.ApiOkResponse({ description: '根据用户id更新用户信息', type: update_user_dto_1.UpdateUserDto }),
    permissions_decorator_1.Permissions('sys_user:update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Put('update-pw'),
    swagger_1.ApiOperation({ summary: '修改自身密码' }),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_pw_dto_1.UpdatePwDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePW", null);
__decorate([
    common_1.Put(':id/:status'),
    swagger_1.ApiOperation({ summary: '根据用户id 删除用户' }),
    swagger_1.ApiOkResponse({ description: '根据用户id删除用户' }),
    permissions_decorator_1.Permissions('sys_user:updateStatus'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateStatus", null);
__decorate([
    common_1.Put('update-pw/:id'),
    swagger_1.ApiOperation({ summary: '根据用户ID重置用户密码' }),
    permissions_decorator_1.Permissions('sys_user:update'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPossword", null);
__decorate([
    common_1.Delete('role/:userId'),
    swagger_1.ApiOperation({ summary: '根据用户id删除用户与角色关系' }),
    permissions_decorator_1.Permissions('sys_user:updateRole'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "cancelUserRoleRelation", null);
UserController = __decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags('user'),
    common_1.Controller('user'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map