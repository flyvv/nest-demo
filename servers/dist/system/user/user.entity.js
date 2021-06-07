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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const userRole_entity_1 = require("../relationalEntities/userRole/userRole.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    class_transformer_1.Exclude({ toPlainOnly: true }),
    typeorm_1.Column({
        nullable: true,
        length: 200,
        comment: '用户登录密码',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ length: 32, comment: '用户登录账号' }),
    __metadata("design:type", String)
], UserEntity.prototype, "account", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 32, comment: '用户显示昵称' }),
    __metadata("design:type", String)
], UserEntity.prototype, "nickname", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, length: 20, comment: '用户手机号码' }),
    __metadata("design:type", String)
], UserEntity.prototype, "phoneNum", void 0);
__decorate([
    typeorm_1.Column({ length: 200, comment: '邮箱地址' }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ default: true, comment: '所属状态是否有效， 使用中， 禁用' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ length: 200, comment: '头像地址' }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    typeorm_1.Column({ name: 'dept_id' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "deptId", void 0);
__decorate([
    typeorm_1.OneToMany(type => userRole_entity_1.UserRoleEntity, userRoles => userRoles.users, { cascade: ['insert', 'remove'], nullable: false }),
    __metadata("design:type", Array)
], UserEntity.prototype, "userRoles", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp', name: 'create_date', comment: '创建时间' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp', name: 'update_date', comment: '更新时间' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updateDate", void 0);
UserEntity = __decorate([
    typeorm_1.Entity('sys_user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map