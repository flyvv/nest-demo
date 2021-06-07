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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const crypto_util_1 = require("../../commin/utils/crypto.util");
const result_interface_1 = require("../../commin/interfaces/result.interface");
const class_transformer_1 = require("class-transformer");
const userRole_entity_1 = require("../relationalEntities/userRole/userRole.entity");
let UserService = class UserService {
    constructor(userRepository, userRoleRepository, cryptoUtil, jwtService) {
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
        this.cryptoUtil = cryptoUtil;
        this.jwtService = jwtService;
    }
    async findOneByAccount(account) {
        return await this.userRepository.findOne({ account });
    }
    async findOneById(id) {
        return await this.userRepository.findOne(id);
    }
    async create(dto) {
        const existing = await this.findOneByAccount(dto.account);
        if (existing)
            throw new common_1.HttpException('账号已存在', common_1.HttpStatus.BAD_REQUEST);
        if (dto.password !== dto.confirmPassword)
            throw new common_1.HttpException('两次输入密码不一致，请重试', common_1.HttpStatus.BAD_REQUEST);
        dto.password = this.cryptoUtil.encryptPassword(dto.password);
        let findOneByname = new user_entity_1.UserEntity();
        findOneByname = Object.assign(Object.assign({}, dto), findOneByname);
        const result = await this.userRepository.save(findOneByname);
        return { statusCode: 200, message: '注册成功', data: result };
    }
    async login(dto) {
        const user = await this.findOneByAccount(dto.account);
        if (!user)
            throw new common_1.HttpException('账号或密码错误', common_1.HttpStatus.BAD_REQUEST);
        if (!this.cryptoUtil.checkPassword(dto.password, user.password))
            throw new common_1.HttpException('账号或密码错误', common_1.HttpStatus.BAD_REQUEST);
        if (!user.status)
            throw new common_1.HttpException('该账号已被禁用，请切换账号登录', common_1.HttpStatus.FORBIDDEN);
        const token = await this.createToken({ id: user.id });
        return { statusCode: 200, message: '登录成功', data: token };
    }
    async findOne(id) {
        const user = await this.userRepository.findOne(id, { relations: ['dept', 'userRoles'] });
        if (!user)
            throw new common_1.HttpException('该用户不存在或已删除', common_1.HttpStatus.BAD_REQUEST);
        return { statusCode: 200, message: '查询成功', data: class_transformer_1.classToPlain(user) };
    }
    async findList({ pageSize = 10, pageNum = 1, deptId, roleId, nickname, status }) {
        let users;
        if (roleId) {
            users = await this.userRepository
                .createQueryBuilder('user')
                .leftJoinAndSelect('sys_user_role', 'ur', 'ur.user_id = user.id')
                .leftJoinAndSelect('user.dept', 'dept')
                .where('user.status = 1 and ur.role_id =:roleId', { roleId })
                .orderBy({
                'user.createDate': 'DESC',
                'user.id': 'DESC',
                'user.account': 'ASC',
                'user.nickname': 'ASC',
            })
                .skip(pageSize * (pageNum - 1))
                .take(pageSize)
                .getManyAndCount();
        }
        else if (deptId) {
            users = await this.userRepository
                .createQueryBuilder('user')
                .where('user.dept_id =:deptId', { deptId })
                .orderBy({
                'user.createDate': 'DESC',
                'user.id': 'DESC',
                'user.account': 'ASC',
                'user.nickname': 'ASC',
            })
                .skip(pageSize * (pageNum - 1))
                .take(pageSize)
                .getManyAndCount();
        }
        else {
            const where = Object.assign(Object.assign({}, (status ? { status } : null)), (nickname ? { nickname: typeorm_1.Like(`%${nickname}%`) } : null));
            users = await this.userRepository
                .createQueryBuilder('user')
                .leftJoinAndSelect('user.dept', 'dept')
                .where(where)
                .orderBy({
                'user.createDate': 'DESC',
                'user.id': 'DESC',
                'user.account': 'ASC',
                'user.nickname': 'ASC',
            })
                .skip(pageSize * (pageNum - 1))
                .take(pageSize)
                .getManyAndCount();
        }
        return { statusCode: 200, message: '查询用户列表成功', data: { list: class_transformer_1.classToPlain(users[0]), total: users[1] } };
    }
    async findUserListNotInRoleId({ roleId, pageSize = 10, pageNum = 1 }) {
        const users = await this.userRepository
            .createQueryBuilder('u')
            .select(['u.id', 'u.nickname'])
            .where('u.status = 1')
            .andWhere(qb => {
            const subQuery = qb
                .subQuery()
                .select('DISTINCT ur.user_id')
                .from('sys_user_role', 'ur')
                .where('ur.role_id =:roleId', { roleId })
                .getQuery();
            return 'u.id <> ALL ' + subQuery;
        })
            .orderBy({
            'u.id': 'DESC',
            'u.nickname': 'ASC',
        })
            .skip(pageSize * (pageNum - 1))
            .take(pageSize)
            .getManyAndCount();
        return { statusCode: 200, message: '查询用户列表成功', data: { list: class_transformer_1.classToPlain(users[0]), total: users[1] } };
    }
    async update(dto) {
        const existing = await this.userRepository.findOne(dto.id);
        if (!existing)
            throw new common_1.HttpException(`更新失败，ID 为 ${dto.id} 的用户不存在`, 404);
        await this.cancelUserRoleRelation(dto.id);
        const user = Object.assign(existing, dto);
        const result = await this.userRepository.save(user);
        if (!result)
            return { statusCode: 200, message: '用户信息修改失败' };
        return { statusCode: 200, message: '用户信息修改成功' };
    }
    async updatePw(dto) {
        if (dto.newPassword !== dto.confirmPassword)
            return { statusCode: 500, message: '确认密码与新密码不一致' };
        const user = await this.findOneById(dto.id);
        if (!this.cryptoUtil.checkPassword(dto.newPassword, user.password))
            return { statusCode: 501, message: '密码错误' };
        return { statusCode: 200, message: '修改密码成功' };
    }
    async resetPossword(id) {
        await this.userRepository.update(id, { password: this.cryptoUtil.encryptPassword('123456') });
        return { statusCode: 200, message: '重置密码成功' };
    }
    async updateStatus(id, status) {
        const existing = await this.userRepository.findOne(id);
        if (!existing)
            throw new common_1.HttpException(`${status ? '启用' : '禁用'} ID 为 ${id} 的用户不存在`, 404);
        await this.userRepository.update(id, { status: status ? !!parseInt(status) : false });
        return { statusCode: 200, message: '删除成功' };
    }
    async cancelUserRoleRelation(userId) {
        const result = await this.userRoleRepository.delete({ userId });
        if (!result)
            return { statusCode: 500, message: '当前关联用户已取消关联或不存在' };
        return { statusCode: 200, message: '已取消关联' };
    }
    async createUserRoleRelation(dtos) {
        const result = await this.userRoleRepository.save(dtos);
        if (!result)
            return { statusCode: 500, message: '关联用户失败，请重新关联' };
        return { statusCode: 200, message: '关联用户成功' };
    }
    async createToken(payload) {
        return this.jwtService.sign(payload);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.UserEntity)),
    __param(1, typeorm_2.InjectRepository(userRole_entity_1.UserRoleEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        crypto_util_1.CryptoUtil,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map