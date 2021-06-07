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
exports.UserRoleEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/user.entity");
const role_entity_1 = require("../../roles/role.entity");
let UserRoleEntity = class UserRoleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserRoleEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], UserRoleEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ name: 'role_id' }),
    __metadata("design:type", Number)
], UserRoleEntity.prototype, "roleId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.userRoles),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserRoleEntity.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToOne(type => role_entity_1.RoleEntity, role => role.userRoles),
    typeorm_1.JoinColumn({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.RoleEntity)
], UserRoleEntity.prototype, "roles", void 0);
UserRoleEntity = __decorate([
    typeorm_1.Entity('sys_user_role')
], UserRoleEntity);
exports.UserRoleEntity = UserRoleEntity;
//# sourceMappingURL=userRole.entity.js.map