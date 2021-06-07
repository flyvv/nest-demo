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
exports.RoleEntity = void 0;
const typeorm_1 = require("typeorm");
const userRole_entity_1 = require("../relationalEntities/userRole/userRole.entity");
const roleMenu_entity_1 = require("../relationalEntities/roleMenu/roleMenu.entity");
let RoleEntity = class RoleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'role_id' }),
    __metadata("design:type", Number)
], RoleEntity.prototype, "roleId", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'role_name', length: 100, comment: '角色名称' }),
    __metadata("design:type", String)
], RoleEntity.prototype, "roleName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, comment: '角色备注' }),
    __metadata("design:type", String)
], RoleEntity.prototype, "remark", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', name: 'dept_id', comment: '关联部门ID', default: null }),
    __metadata("design:type", Number)
], RoleEntity.prototype, "deptId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'create_date', comment: '创建时间' }),
    __metadata("design:type", Date)
], RoleEntity.prototype, "createDate", void 0);
__decorate([
    typeorm_1.OneToMany(type => userRole_entity_1.UserRoleEntity, userRole => userRole.roles),
    __metadata("design:type", Array)
], RoleEntity.prototype, "userRoles", void 0);
__decorate([
    typeorm_1.OneToMany(type => roleMenu_entity_1.RoleMenuEntity, roleMenus => roleMenus.role, { cascade: ['insert', 'remove'], nullable: false }),
    __metadata("design:type", Array)
], RoleEntity.prototype, "roleMenus", void 0);
RoleEntity = __decorate([
    typeorm_1.Entity('sys_role')
], RoleEntity);
exports.RoleEntity = RoleEntity;
//# sourceMappingURL=role.entity.js.map