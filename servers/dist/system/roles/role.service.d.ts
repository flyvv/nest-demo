import { Repository } from 'typeorm';
import { RoleEntity } from './role.entity';
import { ResponseData } from 'src/commin/interfaces/result.interface';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { CreateRoleMenuDto } from '../relationalEntities/roleMenu/dto/create-roleMenu.dto';
import { RoleMenuEntity } from '../relationalEntities/roleMenu/roleMenu.entity';
import { UserRoleEntity } from '../relationalEntities/userRole/userRole.entity';
export declare class RoleService {
    private readonly roleRepository;
    private readonly roleMenuRepository;
    private readonly userRoleRepository;
    constructor(roleRepository: Repository<RoleEntity>, roleMenuRepository: Repository<RoleMenuEntity>, userRoleRepository: Repository<UserRoleEntity>);
    findAllList(): Promise<{
        statusCode: number;
        message: string;
        data: RoleEntity[];
    }>;
    findList(pageSize: number, pageNum: number, roleName: string): Promise<ResponseData>;
    findOne(roleId: number): Promise<ResponseData>;
    createRole(roleDto: CreateRoleDto): Promise<ResponseData>;
    updateRole(dto: UpdateRoleDto): Promise<ResponseData>;
    deleteRole(roleId: number): Promise<ResponseData>;
    deleteUserRole(roleId: number): Promise<boolean>;
    createRoleMenu(dtos: CreateRoleMenuDto[]): Promise<boolean>;
    deleteRoleMemuByRoleId(roleId: number): Promise<boolean>;
}
