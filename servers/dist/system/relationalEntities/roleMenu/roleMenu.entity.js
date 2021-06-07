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
exports.RoleMenuEntity = void 0;
const typeorm_1 = require("typeorm");
const role_entity_1 = require("../../roles/role.entity");
let RoleMenuEntity = class RoleMenuEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RoleMenuEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'role_id' }),
    __metadata("design:type", Number)
], RoleMenuEntity.prototype, "roleId", void 0);
__decorate([
    typeorm_1.Column({ name: 'menu_id' }),
    __metadata("design:type", Number)
], RoleMenuEntity.prototype, "menuId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => role_entity_1.RoleEntity, role => role.roleMenus),
    typeorm_1.JoinColumn({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.RoleEntity)
], RoleMenuEntity.prototype, "role", void 0);
RoleMenuEntity = __decorate([
    typeorm_1.Entity('sys_role_menu')
], RoleMenuEntity);
exports.RoleMenuEntity = RoleMenuEntity;
//# sourceMappingURL=roleMenu.entity.js.map