import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { CryptoUtil } from 'src/commin/utils/crypto.util';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseData } from 'src/commin/interfaces/result.interface';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRoleEntity } from '../relationalEntities/userRole/userRole.entity';
import { CreateUserRoleDto } from '../relationalEntities/userRole/dto/create-userRole.dto';
import { UpdatePwDto } from './dto/update-pw-dto';
export declare class UserService {
    private readonly userRepository;
    private readonly userRoleRepository;
    private readonly cryptoUtil;
    private readonly jwtService;
    constructor(userRepository: Repository<UserEntity>, userRoleRepository: Repository<UserRoleEntity>, cryptoUtil: CryptoUtil, jwtService: JwtService);
    findOneByAccount(account: string): Promise<UserEntity>;
    findOneById(id: number): Promise<UserEntity>;
    create(dto: CreateUserDto): Promise<ResponseData>;
    login(dto: LoginUserDto): Promise<ResponseData>;
    findOne(id: number): Promise<ResponseData>;
    findList({ pageSize, pageNum, deptId, roleId, nickname, status }: {
        pageSize?: number;
        pageNum?: number;
        deptId: any;
        roleId: any;
        nickname: any;
        status: any;
    }): Promise<ResponseData>;
    findUserListNotInRoleId({ roleId, pageSize, pageNum }: {
        roleId: any;
        pageSize?: number;
        pageNum?: number;
    }): Promise<ResponseData>;
    update(dto: UpdateUserDto): Promise<ResponseData>;
    updatePw(dto: UpdatePwDto): Promise<ResponseData>;
    resetPossword(id: number): Promise<ResponseData>;
    updateStatus(id: number, status: string): Promise<ResponseData>;
    cancelUserRoleRelation(userId: number): Promise<ResponseData>;
    createUserRoleRelation(dtos: CreateUserRoleDto[]): Promise<ResponseData>;
    private createToken;
}
