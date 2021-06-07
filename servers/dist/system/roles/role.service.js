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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const role_entity_1 = require("./role.entity");
const typeorm_2 = require("@nestjs/typeorm");
const result_interface_1 = require("../../commin/interfaces/result.interface");
const roleMenu_entity_1 = require("../relationalEntities/roleMenu/roleMenu.entity");
const userRole_entity_1 = require("../relationalEntities/userRole/userRole.entity");
let RoleService = class RoleService {
    constructor(roleRepository, roleMenuRepository, userRoleRepository) {
        this.roleRepository = roleRepository;
        this.roleMenuRepository = roleMenuRepository;
        this.userRoleRepository = userRoleRepository;
    }
    async findAllList() {
        const roles = await this.roleRepository.find();
        return { statusCode: 200, message: '查询角色成功', data: roles };
    }
    async findList(pageSize, pageNum, roleName) {
        const where = roleName ? { roleName: typeorm_1.Like(`%${roleName}%`) } : {};
        const roles = await this.roleRepository
            .createQueryBuilder('role')
            .where(where)
            .skip(pageSize * (pageNum - 1))
            .take(pageSize)
            .getManyAndCount();
        return { statusCode: 200, message: '查询角色列表成功', data: { list: roles[0], total: roles[1] } };
    }
    async findOne(roleId) {
        const role = await this.roleRepository.findOne(roleId, {
            relations: ['roleMenus'],
        });
        if (!role)
            throw new common_1.HttpException(`查询失败， ID 为 ${roleId} 的角色不存在或已删除`, 404);
        return { statusCode: 200, message: '查询成功', data: role };
    }
    async createRole(roleDto) {
        try {
            const roles = roleDto;
            const createRoleResult = await this.roleRepository.save(roles);
            if (!createRoleResult)
                return { statusCode: 500, message: '创建失败' };
            return { statusCode: 200, message: '添加成功' };
        }
        catch (error) {
            return { statusCode: 500, message: '创建失败' };
        }
    }
    async updateRole(dto) {
        try {
            await this.deleteRoleMemuByRoleId(dto.roleId);
            const roles = dto;
            const result = await this.roleRepository.save(roles);
            if (!result)
                return { statusCode: 500, message: '更新失败' };
            return { statusCode: 200, message: '更新成功' };
        }
        catch (error) {
            return { statusCode: 500, message: '更新失败' };
        }
    }
    async deleteRole(roleId) {
        await this.deleteRoleMemuByRoleId(roleId);
        await this.deleteUserRole(roleId);
        const result = await this.roleRepository.delete(roleId);
        if (!result)
            return { statusCode: 500, message: '角色删除失败' };
        return { statusCode: 200, message: '删除成功' };
    }
    async deleteUserRole(roleId) {
        const result = await this.userRoleRepository.delete({ roleId });
        return !!result;
    }
    async createRoleMenu(dtos) {
        const result = await this.roleMenuRepository.save(dtos);
        return !!result;
    }
    async deleteRoleMemuByRoleId(roleId) {
        const result = await this.roleMenuRepository.delete({ roleId });
        return !!result;
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(role_entity_1.RoleEntity)),
    __param(1, typeorm_2.InjectRepository(roleMenu_entity_1.RoleMenuEntity)),
    __param(2, typeorm_2.InjectRepository(userRole_entity_1.UserRoleEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map