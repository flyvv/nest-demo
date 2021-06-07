import { CreateRoleMenuDto } from '../../relationalEntities/roleMenu/dto/create-roleMenu.dto';
export declare class UpdateRoleDto {
    readonly roleId: number;
    readonly roleName: string;
    readonly remark: string;
    readonly deptId: number;
    readonly roleMenus: CreateRoleMenuDto[];
}
