import { CreateUserRoleDto } from '../../relationalEntities/userRole/dto/create-userRole.dto';
export declare class UpdateUserDto {
    readonly id: number;
    readonly nickname: string;
    readonly account: string;
    readonly email: string;
    readonly phoneNum: string;
    readonly avatar: string;
    readonly deptId: number;
    readonly status: boolean;
    readonly userRoles: CreateUserRoleDto[];
}
